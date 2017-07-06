import { connect } from 'react-redux'

import {
	readyApp
} from '../../actions'

import App from './App'

function mapStateToProps(state) {
	return {
		page: state.app.page
	}
}

function mapDispatchToProps(dispatch) {
	return {
		readyApp: () => {
			dispatch(readyApp())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

