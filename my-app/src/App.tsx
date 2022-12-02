import { FC } from 'react';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Listings from './pages/Listings/Listings';

const App: FC = () => {
	return (
		<Routes>
			<Route index element={<Listings />} />
		</Routes>
	);
};

export default App;
