import { connect } from 'react-redux'

import {
	fetchProjects,
	fetchProject
} from '../../actions'

import ListProjects from './ListProjects'


function mapStateToProps(state) {
	return {
		fetchProjects: state.projects.fetchProjects
	}
}


function mapDispatchToProps(dispatch) {
	return {
		fetchProjectsL: () => {
			dispatch(fetchProjects())
		},
		fetchProjectL: (projectId) => {
			dispatch(fetchProject(projectId))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ListProjects)

