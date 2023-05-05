import React from 'react'
import { Form } from 'react-router-dom'

const Play = ({ state, name1, name2 }) => {
	return (
		<div className='play-container'>
			<div className='stats-container'>
				<div className='stats'>
					<h3>{name1} </h3>
					<h5>{state.hp1}</h5>
					<h5>{state.attack}</h5>
					<h5>{state.specialAttack}</h5>
					{state.score1 && <h5 style={{ color: '#a8aef8' }}>{state.score1}</h5>}
				</div>
				<div className='stats'>
					<h3>{name2} </h3>
					<h5>{state.hp2}</h5>
					<h5>{state.defense}</h5>
					<h5>{state.specialDefense}</h5>
					{state.score2 && <h5 style={{ color: '#a8aef8' }}>{state.score2}</h5>}
				</div>
			</div>

			<div>
				{state.text && <h2 className='text'>{state.text}</h2>}
				{state.check_won && (
					<>
						<img src='/won.jpeg' alt='' />
					</>
				)}
				{state.check_lost && (
					<>
						<img src='/lost.jpeg' alt='' className='winner' />
					</>
				)}
			</div>
			<Form method='post'>
				<input type='hidden' name='player1_name' defaultValue={name1} />
				<input type='hidden' name='player2_name' defaultValue={name2} />
				<input type='hidden' name='hp1' defaultValue={state.hp1} />
				<input type='hidden' name='hp2' defaultValue={state.hp2} />
				<input type='hidden' name='score1' defaultValue={state.score1} />
				<input type='hidden' name='score2' defaultValue={state.score2} />
				{!state.score1 && !state.score2 ? null : <button type='submit'>Dashboard</button>}
			</Form>
		</div>
	)
}

export default Play
