import React from 'react'
import { v4 } from 'uuid'
import { useLoaderData, useNavigate } from 'react-router-dom'

const PokemonName = () => {
	const pokemon = useLoaderData()
	const navigate = useNavigate()

	const onBack = () => navigate(-1)

	console.log(pokemon)
	return (
		<div className='card'>
			<h3>Pokemon Names:</h3>
			<ul>
				{Object.keys(pokemon.name).map(el => (
					<li key={v4()}>
						{el}: <span style={{color: '#d8b054'}}>{pokemon.name[el]}</span> 
					</li>
				))}
			</ul>
			<div className='buttons'>
				<button className='button' onClick={onBack}>
					Back
				</button>
				
			</div>
		</div>
	)
}

export default PokemonName
