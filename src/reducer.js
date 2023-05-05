export const reducer = (state, action) => {
	switch (action.type) {
		case 'ATTACK': {
			return {
				...state,
				hp1: action.payload <= 0 ? state.hp1 + action.payload : state.hp1,
				hp2: action.payload <= 0 ? state.hp2 : state.hp2 - action.payload,
				attack: action.payload <= 0 ? 0 : 10,
				disableAttack: true
			}
		}
		case 'DEFENSE': {
			return {
				...state,
				hp1: action.payload <= 0 ? state.hp1 : state.hp1 - action.payload,
				hp2: action.payload <= 0 ? state.hp2 + action.payload : state.hp2,
				defense: action.payload <= 0 ? 0 : 10,
				disableDefense: true
			}
		}
		case 'SPECIAL_ATTACK': {
			return {
				...state,
				hp1: action.payload <= 0 ? state.hp1 + action.payload : state.hp1,
				hp2: action.payload <= 0 ? state.hp2 : state.hp2 - action.payload,
				specialAttack: action.payload <= 0 ? -5 : 20,
				disableSpecialAttack: true
			}
		}
		case 'SPECIAL_DEFENSE': {
			return {
				...state,
				hp1: action.payload <= 0 ? state.hp1 : state.hp1 - action.payload,
				hp2: action.payload <= 0 ? state.hp2 + action.payload : state.hp2,
				specialDefense: action.payload <= 0 ? -5 : 20,
				disableSpecialDefense: true
			}
		}

		case 'DROW': {
			return {
				...state,
				text: action.payload,
				score1: state.score1 + state.attack + state.specialAttack,
				score2: state.score2 + state.defense + state.specialDefense,
				disableCheckWinner: true,
				disableAttack: true,
				disableDefense: true,
				disableSpecialAttack: true,
				disableSpecialDefense: true
			}
		}
		case 'WON': {
			return {
				...state,
				won: action.payload.winner,
				lost: action.payload.looser,
				check_won: true,
				score1: state.score1 + state.attack + state.specialAttack,
				score2: state.score2 + state.defense + state.specialDefense,
				disableCheckWinner: true,
				disableAttack: true,
				disableDefense: true,
				disableSpecialAttack: true,
				disableSpecialDefense: true
			}
		}
		case 'LOST': {
			return {
				...state,
				won:action.payload.winner,
				lost: action.payload.looser,
				check_lost: true,
				score1: state.score1 + state.attack + state.specialAttack,
				score2: state.score2 + state.defense + state.specialDefense,
				disableCheckWinner: true,
				disableAttack: true,
				disableDefense: true,
				disableSpecialAttack: true,
				disableSpecialDefense: true
			}
		}
		default: {
			return state
		}
	}
}
