import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Route
} from 'react-router-dom'
import App from './App.jsx'
import PokemonsList from './components/PokemonsList.jsx'
import PokemonView from './components/PokemonView.jsx'
import PokemonBase from './components/PokemonInfo'
import PokemonName from './components/PokemonName'
import PokemonType from './components/PokemonType'
import ErrorResponse from './components/ErrorResponse.jsx'
import Fallback from './components/Fallback'
import Dashboard from './components/Dashboard.jsx'
import Game from './components/Game.jsx'
import About from './components/About'
import { listLoader, viewLoader, infoLoader, gameAction, getResults } from './loaders'
import { resultsAction } from './actions.js'

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<App />} errorElement={<ErrorResponse />}>
			<Route index loader={listLoader} element={<PokemonsList />} />
			<Route path='pokemon/:id' loader={viewLoader} element={<PokemonView />} />
			<Route path='pokemon/:id/name' loader={infoLoader} element={<PokemonName />} />
			<Route path='pokemon/:id/type' loader={infoLoader} element={<PokemonType />} />
			<Route path='pokemon/:id/base' loader={infoLoader} element={<PokemonBase />} />
			<Route path='play' loader={gameAction} action={resultsAction} element={<Game />} />
			<Route path='dashboard' loader={getResults} element={<Dashboard />} />
			<Route path='about' element={<About />} />
		</Route>
	)
)

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} fallbackElement={<Fallback />} />
	</React.StrictMode>
)
