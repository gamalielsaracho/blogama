import { connect } from 'react-redux'
import { fetchThemes } from '../actions/themes'

import ThemesList from '../../components/blog/themes/ThemesList'

function mapStateToProps(state) {
	return {
		themes: state.list
	}
} 

const mapDispatchToProps = (dispatch) => {
	return {
		fetchThemes: (folder) => {
			dispatch(fetchThemes(folder))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemesList)