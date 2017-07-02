import {connect} from 'react-redux'
import { fetchPosts } from '../actions/posts'

import PostsList from '../components/blog/PostsList'

const mapStateToProps = (state) => {
  return {
    posts:state.posts.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => {
      dispatch(fetchPosts())
    },
    saludo: () => {
      console.log('hola desde el container de PostsList')
    }
  }
}

const PostsListContainer = connect(mapStateToProps, mapDispatchToProps)(PostsList)
export default PostsListContainer
