import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Card } from './Card';
import { setupServer } from 'msw/node';
import { getAllListingsHandler, putListingHandler } from '../../mocks/browser';

// only want to setupServer in testing env, dont want it running in prod
const server = setupServer(...getAllListingsHandler, ...putListingHandler);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Card component', () => {
	const waitForCardLoaded = async () => {
		const card = await screen.findByTestId('card-0');
		expect(card).toBeInTheDocument();
	};

	test('renders', async () => {
		render(<Card />);
		await waitForCardLoaded();
		// need to add assertion
	});

	test('populated data correctly', async () => {
		render(<Card />);
		await waitForCardLoaded();

		expect(screen.getAllByRole('heading', { level: 3 })[0]).toHaveTextContent(
			/Property 1/
		);
		expect(screen.getByRole('img', { name: 'property-0' })).toBeInTheDocument();
		expect(screen.getAllByRole('heading', { level: 4 })[0]).toHaveTextContent(
			/29, Blake Road/
		);
		expect(screen.getByTestId('bedrooms-for-property-0')).toHaveTextContent(
			/4 bedrooms/
		);
		expect(screen.getByTestId('price-of-property-0')).toHaveTextContent(
			/£2,250,000/
		);
		const checkbox = screen.getAllByRole('checkbox', {
			name: 'status',
		})[0];
		expect(checkbox).not.toBeChecked();
	});

	test('can toggle status', async () => {
		render(<Card />);
		await waitForCardLoaded();

		const checkbox = screen.getAllByRole('checkbox', {
			name: 'status',
		})[0];

		expect(checkbox).not.toBeChecked();
		expect(screen.getByTestId('status-property-0')).toHaveTextContent(
			/Expired/
		);

		userEvent.click(checkbox);

		await waitFor(() => {
			expect(checkbox).toBeChecked();
		});

		expect(screen.getByTestId('status-property-0')).toHaveTextContent(/Active/);
	});
});
