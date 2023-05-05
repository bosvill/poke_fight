import React from 'react'
import { v4 } from 'uuid'
import { useLoaderData, useNavigate, useNavigation } from 'react-router-dom'

const Dashboard = () => {
	const results = useLoaderData()
	const navigate = useNavigate()
	const navigation = useNavigation()
	console.log(new Date(results[1].date).toDateString())

	const onBack = () => navigate('/')
	return (
		<div className='results-container'>
			{navigation === 'loading' ? (
				<Fallback />
			) : (
				<ul className='results'>
					{results.map(el => (
						<li key={v4()}>
							<h6 className='date'>{new Date(el.date).toDateString()}</h6>
							<h6 style={{ color: '#a8aef8' }}>{el.player1_name}</h6>
							<h6>HP: {el.hp1}</h6>
							<h6>Score: {el.score1}</h6>
							<hr />
							<h6 style={{ color: '#a8aef8' }}>{el.player2_name}</h6>
							<h6>HP: {el.hp2}</h6>
							<h6>Score: {el.score2}</h6>
							<hr />
							<h6 style={{ color: '#a8aef8' }}>{el.winner}</h6>
						</li>
					))}
				</ul>
			)}
			<div className='play-btn'>
				<button className='button' onClick={onBack}>
					Home
				</button>
			</div>
		</div>
	)
}

export default Dashboard
