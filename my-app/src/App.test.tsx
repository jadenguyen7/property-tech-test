import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('routing works and Listings page renders', () => {
	render(
		<BrowserRouter>
			<App />
		</BrowserRouter>
	);
	const listingsPage = screen.getByText('Listings:');
	expect(listingsPage).toBeInTheDocument();
});
