import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Card } from './Card';
import { setupServer } from 'msw/node';
import { getAllListingsHandler, putListingHandler } from '../../mocks/listings';

const server = setupServer(...getAllListingsHandler, ...putListingHandler);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Card component', () => {
	const waitForCardToBeLoaded = async () => {
		const card = await screen.findByTestId('card-1');
		expect(card).toBeInTheDocument();
	};

	test('renders', async () => {
		render(<Card />);
		await waitForCardToBeLoaded();

		expect(
			screen.getAllByRole('heading', { level: 3, name: 'Property 1' })
		).toBeTruthy();
	});

	test('populates data correctly', async () => {
		render(<Card />);
		await waitForCardToBeLoaded();

		expect(screen.getAllByRole('heading', { level: 3 })[0]).toHaveTextContent(
			/Property 1/
		);
		expect(screen.getByRole('img', { name: 'property-1' })).toBeInTheDocument();
		expect(screen.getAllByRole('heading', { level: 4 })[0]).toHaveTextContent(
			/29, Blake Road/
		);
		expect(screen.getByTestId('bedrooms-for-property-1')).toHaveTextContent(
			/4 bedrooms/
		);
		expect(screen.getByTestId('price-of-property-1')).toHaveTextContent(
			/£2,250,000/
		);
		const checkbox = screen.getByRole('checkbox', {
			name: 'checkbox-status-property-1',
		});
		expect(checkbox).toBeChecked();
	});

	test('can toggle status', async () => {
		render(<Card />);
		await waitForCardToBeLoaded();

		const card = screen.getByTestId('card-1');
		expect(card).toBeInTheDocument();

		const checkbox = screen.getByRole('checkbox', {
			name: 'checkbox-status-property-1',
		});

		expect(checkbox).toBeChecked();
		expect(screen.getByTestId('status-property-1')).toHaveTextContent(/Active/);

		await userEvent.click(checkbox);
		await userEvent.click(screen.getByRole('radio', { name: 'Expired' }));

		expect(card).toBeInTheDocument();
	});
});
