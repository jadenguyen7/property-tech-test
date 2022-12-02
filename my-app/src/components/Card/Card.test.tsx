import { render, screen } from '@testing-library/react';
import { Card } from './Card';
import { setupServer } from 'msw/node';
import { getAllListingsHandler, putListingHandler } from '../../mocks/browser';

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

	// test('populated data correctly', async () => {
	// 	render(<Card />);
	// 	await waitForCardLoaded();

	// 	expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(
	// 		/Property 1/
	// 	);
	// 	expect(screen.getByRole('img', { name: 'property-0' })).toBeInTheDocument();
	// 	expect(screen.getByRole('heading', { level: 4 })).toHaveTextContent(
	// 		/29, Blake Road/
	// 	);
	// 	expect(screen.getAllByTestId('bedrooms-for-property-0')).toHaveTextContent(
	// 		/4 bedrooms/
	// 	);
	// 	expect(screen.getAllByTestId('price-of-property-0')).toHaveTextContent(
	// 		/£2,250,000/
	// 	);
	// 	const checkbox = screen.getByRole('checkbox', {
	// 		name: 'status',
	// 	});
	// 	expect(checkbox).not.toBeChecked();
	// });

	// test('can toggle status', async () => {
	// 	render(<Card />);
	// 	await waitForCardLoaded();

	// 	const checkbox = screen.getByRole('checkbox', {
	// 		name: 'status',
	// 	});
	// 	expect(checkbox).not.toBeChecked();
	// 	expect(screen.getAllByTestId('status-property-0')).toHaveTextContent(
	// 		/Expired/
	// 	);
	// 	await userEvent.click(checkbox);
	// 	expect(checkbox).toBeChecked();
	// 	expect(screen.getAllByTestId('status-property-0')).toHaveTextContent(
	// 		/Active/
	// 	);
	// });
});
