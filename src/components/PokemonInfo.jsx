import React from 'react'
import { v4 } from 'uuid'
import { useLoaderData, useNavigate } from 'react-router-dom'

const PokemonBase = () => {
	const pokemon = useLoaderData()
	const navigate = useNavigate()

	const onBack = () => navigate(-1)

	return (
		<div className='card'>
			<h3>Pokemon Base:</h3>
			<ul>
				{Object.keys(pokemon.base).map(el => (
					<li key={v4()}>
						{el}: <span style={{color: '#d8b054'}}>{pokemon.base[el]}</span>
					</li>
				))}
			</ul>

			<button className='button' onClick={onBack}>
				Back
			</button>
		</div>
	)
}

export default PokemonBase
