import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { setupWorker } from 'msw';
import { getAllListingsHandler, putListingHandler } from './mocks/browser';

if (process.env.NODE_ENV === 'development') {
	const worker = setupWorker(...getAllListingsHandler, ...putListingHandler); // worker only works in browser env, tests are in node env
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
