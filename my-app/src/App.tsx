import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Listings from './pages/Listings/Listings';

const App: FC = () => {
	return (
		<Routes>
			<Route index element={<Listings />} />
		</Routes>
	);
};

export default App;
