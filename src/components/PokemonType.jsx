import React from 'react'
import { v4 } from 'uuid'
import { useLoaderData, useNavigate} from 'react-router-dom'

const PokemonType = () => {
	const navigate = useNavigate()
	const pokemon = useLoaderData()
	console.log(pokemon.type)
	const onBack = () => navigate(-1)
	return (
		<div className='card'>
			
				<ul>
					{pokemon.type.map(el => (
						<li key={v4()}>{el}</li>
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

export default PokemonType
