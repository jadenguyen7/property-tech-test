import { FC } from 'react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Listings from './pages/Listings/Listings'

// function App() {
// 	return (
// 		<div className="App">
// 			<header className="App-header">
// 				<p>
// 					Hello <code>src/App.tsx</code> and save to reload.
// 				</p>
// 				<a
// 					className="App-link"
// 					href="https://reactjs.org"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 				>
// 					Learn React
// 				</a>
// 			</header>
// 		</div>
// 	);
// }

const App: FC = () => {
	return (
		<Routes>
			<Route index element={<Listings />} />
		</Routes>
	)
}

export default App
