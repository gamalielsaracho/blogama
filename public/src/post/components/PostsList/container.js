import { connect } from 'react-redux'

import {
	fetchPosts
} from '../../actions'

import PostsList from './PostsList'

function mapStateToProps(state) {
	return {
		fetchPosts: state.posts.fetchPosts
	}
}


function mapDispatchToProps(dispatch) {
	return {
		fetchPostsList: () => {
			dispatch(fetchPosts())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsList)

