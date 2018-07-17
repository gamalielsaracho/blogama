import {
	READY_APP
} from '../actions/types'

const INITIAL_STATE = {
	page: { loading: true }
}

export default function (state = INITIAL_STATE, action) {
	switch(action.type) {
		case READY_APP:
			return Object.assign({}, state, {
				page: { loading: false }
			})
		default:
			return state
	}
}