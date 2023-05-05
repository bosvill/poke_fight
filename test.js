console.log(poke1)
	console.log(poke2)
	console.log('State', state)
	console.log('attack', poke1.stats[1].base_stat - poke2.stats[2].base_stat)
	console.log('defense', poke2.stats[1].base_stat - poke1.stats[2].base_stat)
	console.log(
		'special_attack',
		poke1.stats[3].base_stat -
			poke2.stats[4].base_stat +
			(poke1.stats[5].base_stat - poke2.stats[5].base_stat)
	)
	console.log(
		'special_defense',
		poke2.stats[3].base_stat -
			poke1.stats[4].base_stat +
			(poke2.stats[5].base_stat - poke1.stats[5].base_stat)
	)
	console.log('speed', poke1.stats[5].base_stat - poke2.stats[5].base_stat)
