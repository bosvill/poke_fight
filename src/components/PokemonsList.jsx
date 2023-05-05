import React from 'react'
import { v4 } from 'uuid'
import { useLoaderData, Link } from 'react-router-dom'

const PokemonsList = () => {
	const pokemons = useLoaderData()
	console.log(pokemons)
	return (
		<div className='list'>
			<ul>
				{pokemons.map(p => (
					<li key={v4()} className='pokemons'>
						<Link to={`/pokemon/${p.id}`}> {p.name.english}</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default PokemonsList
