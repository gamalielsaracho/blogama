import {
	FETCH_PROJECTS_REQUEST,
	FETCH_PROJECTS_SUCCESS,

	FETCH_PROJECT_REQUEST,
	FETCH_PROJECT_SUCCESS,

	CLOSE_MODAL_FETCH_PROJECT
} from '../actions/types'

const INITIAL_STATE = {
	fetchProjects: { projects: [], loading: false },
	fetchProject: { project: {}, loading: false, modalOpened: false }
}

export default function (state = INITIAL_STATE, action) {
	switch(action.type) {
		case FETCH_PROJECTS_REQUEST:
			return Object.assign({}, state, {
				fetchProjects: { loading: true }
			})

		case FETCH_PROJECTS_SUCCESS:
			return Object.assign({}, state, {
				fetchProjects: { loading: false, projects: action.payload }
			})

		case FETCH_PROJECT_REQUEST:
			return Object.assign({}, state, {
				fetchProject: { loading: true }
			})

		case FETCH_PROJECT_SUCCESS:
			console.log(action.payload)

			return Object.assign({}, state, {
				fetchProject: { 
					loading: false, 
					modalOpened: true,
					project: action.payload 
				}
			})

		case CLOSE_MODAL_FETCH_PROJECT:
			return Object.assign({}, state, {
				fetchProject: { 
					loading: false, 
					modalOpened: false,
					project: {} 
				}
			})

		default:
			return state
	}
}