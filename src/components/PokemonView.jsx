import React from 'react'
import Fallback from './Fallback'
import { v4 } from 'uuid'
import { useLoaderData, Link, Form, useNavigation } from 'react-router-dom'

const PokemonView = () => {
	const pokemon = useLoaderData()
	const navigation = useNavigation()

	return (
		<div className='card'>
			{navigation.state === 'loading' ? (
				<Fallback />
			) : (
				<>
					<Link to='name'>
						<h1>{pokemon.name.english}</h1>
					</Link>
					<Link to='type'>
						<h3>Type:</h3>
					</Link>
					<ul>
						{pokemon.type.map(el => (
							<li key={v4()}>{el}</li>
						))}
					</ul>
					<Link to={`base`}>
						<h3>Base:</h3>
					</Link>
					<ul>
						{Object.keys(pokemon.base).map(el => (
							<li key={v4()}>
								{el}: <span style={{ color: '#d8b054' }}>{pokemon.base[el]}</span>
							</li>
						))}
					</ul>
				</>
			)}
			<Form action='/play'>
				<input type='hidden' name='id' defaultValue={pokemon.id} />
				<input type='hidden' name='id2' defaultValue={Math.floor(Math.random() * 809)} />
				<button type='Submit'>Play as {pokemon.name.english}</button>
			</Form>
		</div>
	)
}

export default PokemonView
