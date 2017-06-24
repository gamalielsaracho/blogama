import { connect } from 'react-redux'
import { fetchPost } from '../actions/posts'

import PostDetails from  '../components/blog/PostDetails'

function mapStateToProps(globalState, ownProps) {
  return {
    activePost:globalState.posts.activePost,
    // ownProps --> propia props.
    nameFolder:ownProps.folder
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPost: (folder) => {
      dispatch(fetchPost(folder))
    }
    // resetMe: () => {
    //   dispatch(resetActivePost())
    // }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails)
