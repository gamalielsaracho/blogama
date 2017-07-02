import React, { PropTypes } from 'react'

import PostDetailsContainer from '../containers/PostDetailsContainer'

class PostsShow extends React.Component {
  // static contextTypes = {
  //   router:PropTypes.object
  // }
  

  render() {
	$('.showMyMenu').toggle()
	
    return <div>
      <PostDetailsContainer folder={this.props.params.namefolder}/>
    </div>
  }
}
export default PostsShow
