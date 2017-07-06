import { connect } from 'react-redux'

import {
	closeModalFetchProject
} from '../../actions'

import ShowProject from './ShowProject'

function mapStateToProps(state) {
	return {
		fetchProject: state.projects.fetchProject
	}
}


function mapDispatchToProps(dispatch) {
	return {
		closeModalFetchProject: () => {
			dispatch(closeModalFetchProject())
		}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(ShowProject)

