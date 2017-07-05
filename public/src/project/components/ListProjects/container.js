import { connect } from 'react-redux'

import {
	fetchProjects
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
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ListProjects)

