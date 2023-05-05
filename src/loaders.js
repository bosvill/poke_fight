const url = `https://pokemong.onrender.com/pokemon/`

export const listLoader = async () => {
	try {
		const res = await fetch(url)
		const poke = await res.json()
		//console.log(poke)
		return poke
	} catch (e) {
		res.json(e)
	}
}

export const infoLoader = async ({ params }) => {
	try {
		console.log(params)
		const res = await fetch(`https://pokemong.onrender.com/pokemon/${params.id}/${params.info}`)
		const poke = await res.json()
		console.log(poke)
		return poke
	} catch (e) {
		res.json(e)
	}
}

export const viewLoader = async ({ params }) => {
	try {
		const res = await fetch(`https://pokemong.onrender.com/pokemon/${params.id}`)
		const poke = await res.json()
		return poke
	} catch (e) {
		res.json(e)
	}
}

export const getPlayers = async (id, id2) => {
	try {
		const res1 = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
		const player1 = await res1.json()
		const res2 = await fetch(`https://pokeapi.co/api/v2/pokemon/${id2}`)
		const player2 = await res2.json()

		return [player1, player2]
	} catch (e) {
		console.log(e)
	}
}

export const gameAction = async ({ request }) => {
	console.log(request)
	let url = new URL(request.url)
	let id = url.searchParams.get('id')
	let id2 = url.searchParams.get('id2')
	console.log(id, id2)
	return getPlayers(id, id2)
}

export const getResults = async () => {
	try {
		const res = await fetch('https://score-155x.onrender.com/game/leaderboard')
		const results = await res.json()
		console.log(results)
		return results
	} catch (e) {
		res.json(e)
	}
}
