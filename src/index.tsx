import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { setupWorker } from 'msw';
import { getAllListingsHandler, putListingHandler } from './mocks/listings';

if (process.env.NODE_ENV === 'development') {
	const worker = setupWorker(...getAllListingsHandler, ...putListingHandler);
	worker.start();
}

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);
