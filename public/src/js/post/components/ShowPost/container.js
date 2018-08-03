import { connect } from 'react-redux'

import {
	fetchPost
} from '../../actions'

import ShowPost from './ShowPost'


function mapStateToProps(state, ownProps) {
	return {
		fetchPost: state.posts.fetchPost,
		// ownProps --> propia props.
    	nameFolder:ownProps.folder
	}
}


function mapDispatchToProps(dispatch) {
	return {
		fetchPostData: (name_folder) => {
			dispatch(fetchPost(name_folder))
		}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(ShowPost)