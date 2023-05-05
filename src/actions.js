import { redirect, json } from 'react-router-dom'

export const resultsAction = async ({ request }) => {
	console.log(request)
	const formData = await request.formData()
	const results = Object.fromEntries(formData)
	console.log(results)
	await fetch('https://score-155x.onrender.com/game/save', {
		method: 'post',
		body: JSON.stringify(results),
		headers: {
			'Content-Type': 'application/json'
		}
	})
	//await res.json()
	return redirect('/dashboard')
}

