import $ from 'jquery'

import  {
	FETCH_PROJECTS_REQUEST,
	FETCH_PROJECTS_SUCCESS,

	FETCH_PROJECT_REQUEST,
	FETCH_PROJECT_SUCCESS,

	CLOSE_MODAL_FETCH_PROJECT
} from './types'

// const url = 'https://gamalielsaracho.github.io/api'
const url = 'http://localhost:8080/api'


export function fetchProjects() {
	return (dispatch) => {
		dispatch({ type: FETCH_PROJECTS_REQUEST })

		$.get(`${url}/projects/projects.json`)
		.then((response) => {
			// console.log(response.projects)
			dispatch({ type: FETCH_PROJECTS_SUCCESS, payload: response.projects })
		})
		.catch((error) => {
			console.log(error)
		})
	}
}

export function fetchProject(projectId) {
	return (dispatch) => {
		dispatch({ type: FETCH_PROJECT_REQUEST })

		$.get(`${url}/projects/projects.json`)
		.then((response) => {
			let projects = response.projects

			projects.map((p) => {
				if(projectId == p.id) {
					dispatch({ type: FETCH_PROJECT_SUCCESS, payload: p })
				}
			})
		})
		.catch((error) => {
			console.log(error)
		})
	}
}

export function closeModalFetchProject() {
	return (dispatch) => {
		dispatch({ type: CLOSE_MODAL_FETCH_PROJECT })
	}
}