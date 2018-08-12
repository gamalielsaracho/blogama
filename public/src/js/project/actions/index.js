import $ from 'jquery'



// const url = 'https://gamalielsaracho.github.io/api'
const url = 'http://localhost:3000/api/projects'

export function fetchProjects() {
  // body...
  // return fetch(url)
  //   .then(response => response.json())
  //   .catch(err => console.log(err));

  // if(__isBrowser__) {
	  $.get(url)
	  .then((response) => {
	  	response.json
	  })
	  .catch(err => console.log(err));
  // }
}


// export function fetchProject(projectId) {
// 	return (dispatch) => {
// 		dispatch({ type: FETCH_PROJECT_REQUEST })

// 		$.get(`${url}/projects/projects.json`)
// 		.then((response) => {
// 			let projects = response.projects

// 			projects.map((p) => {
// 				if(projectId == p.id) {
// 					dispatch({ type: FETCH_PROJECT_SUCCESS, payload: p })
// 				}
// 			})
// 		})
// 		.catch((error) => {
// 			console.log(error)
// 		})
// 	}
// }

export function closeModalFetchProject() {
	return (dispatch) => {
		dispatch({ type: CLOSE_MODAL_FETCH_PROJECT })
	}
}