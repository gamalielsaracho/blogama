import {
	READY_APP
} from './types'

export function readyApp() {
	return (dispatch) => {
		dispatch({ type: READY_APP })
	}
}