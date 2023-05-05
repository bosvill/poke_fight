import React, { useEffect, useReducer } from 'react'
import Play from './Play'
import Player from './Player'
import Fallback from './Fallback.jsx'
import { useLoaderData, useNavigation, useNavigate } from 'react-router-dom'
import { reducer } from '../reducer.js'

const Game = () => {
	const navigation = useNavigation()
	const navigate = useNavigate()
	const [poke1, poke2] = useLoaderData()
	const [state, dispatch] = useReducer(reducer, {
		disableAttack: false,
		disableDefense: false,
		disableSpecialAttack: false,
		disableSpecialDefense: false,
		disableCheckWinner: false,
		hp1: poke1.stats[0].base_stat,
		hp2: poke2.stats[0].base_stat,
		check_won: false,
		check_lost: false,
		won: null,
		lost: null,
		text: '',
		score1: 0,
		score2: 0,
		attack: 0,
		defense: 0,
		specialAttack: 0,
		specialDefense: 0
	})

	useEffect(() => {
		if ((state.hp1 <= 0 && state.hp2 <= 0) || state.hp1 <= 0 || state.hp2 <= 0) {
			return checkWinner()
		}
	}, [state.hp1, state.hp2])

	const checkWinner = () => {
		if (state.hp1 < state.hp2) {
			dispatch({
				type: 'LOST',
				payload: { winner: poke2.name, looser: poke1.name }
			})
		}
		if (state.hp2 < state.hp1) {
			dispatch({
				type: 'WON',
				payload: { winner: poke1.name, looser: poke2.name }
			})
		}
		if (state.hp1 === state.hp2) {
			dispatch({ type: 'DROW', payload: 'There seems to be a draw. Good luck next time!' })
		}
	}

	const handleAttack = () => {
		dispatch({
			type: 'ATTACK',
			payload: poke1.stats[1].base_stat - poke2.stats[2].base_stat
		})
	}

	const handleDefense = () => {
		dispatch({
			type: 'DEFENSE',
			payload: poke2.stats[1].base_stat - poke1.stats[2].base_stat
		})
	}
	const handleSpecialAttack = () => {
		dispatch({
			type: 'SPECIAL_ATTACK',
			payload:
				poke1.stats[3].base_stat -
				poke2.stats[4].base_stat +
				(poke1.stats[5].base_stat - poke2.stats[5].base_stat)
		})
	}
	const handleSpecialDefense = () => {
		dispatch({
			type: 'SPECIAL_DEFENSE',
			payload:
				poke2.stats[3].base_stat -
				poke1.stats[4].base_stat +
				(poke2.stats[5].base_stat - poke1.stats[5].base_stat)
		})
	}

	return (
		<div className='game'>
			{navigation.state === 'loading' ? (
				<Fallback />
			) : (
				<>
					<Player poke={poke1} style={{ color: '#d8b054' }} />

					<Play
						stats1={poke1.stats}
						name1={poke1.name}
						stats2={poke2.stats}
						name2={poke2.name}
						state={state}
					/>
					<Player poke={poke2} style={{ color: '#a8aef8' }} />
				</>
			)}
			<div className='play-btn'>
				<button onClick={handleDefense} disabled={state.disableDefense}>
					Defense
				</button>
				<button onClick={handleAttack} disabled={state.disableAttack}>
					Attack
				</button>
				<button onClick={handleSpecialDefense} disabled={state.disableSpecialDefense}>
					Special Defense
				</button>
				<button onClick={handleSpecialAttack} disabled={state.disableSpecialAttack}>
					Special Attack
				</button>

				<button onClick={checkWinner} disabled={state.disableCheckWinner}>
					Results
				</button>
			</div>
		</div>
	)
}

export default Game
