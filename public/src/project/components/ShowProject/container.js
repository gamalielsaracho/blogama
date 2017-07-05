import { connect } from 'react-redux'

import {
	fetchProject
} from '../../actions'

import ShowProject from './ShowProject'


function mapStateToProps(state) {
	return {
		fetchProject: state.projects.fetchProject
	}
}


function mapDispatchToProps(dispatch) {
	return {
		fetchProjectL: (projectId) => {
			dispatch(fetchProject(projectId))
		}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(ShowProject)

