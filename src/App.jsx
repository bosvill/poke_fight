import { useState } from 'react'
import './App.css'
import { Outlet, NavLink } from 'react-router-dom'

function App() {
	return (
		<div className='main-container'>
			<nav className='navbar'>
				<NavLink to='/' end>
					<div className='navbar'>
						<img src='/109.svg' alt='' className='logo-img' />
						<h3>PokeFight</h3>
					</div>
				</NavLink>
				<NavLink to='/dashboard' className='navbar'>
					<h3>Dashboard</h3>
				</NavLink>
				<NavLink to='/about' className='navbar'>
					<h3>About</h3>
				</NavLink>
			</nav>
			<div className='container'>
				<Outlet />
			</div>
			<footer className='footer'>group4@project.com</footer>
		</div>
	)
}

export default App
