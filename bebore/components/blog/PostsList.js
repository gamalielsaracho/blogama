import  React  from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router'
import HelmetShow from '.././HelmetShow'
// import { fetchPosts } from '../actions/posts'

import Share from './Share'

export default class PostsList extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() { // el componente se montará.
    this.props.fetchPosts()
  }

  

  renderPosts(posts){
    console.log(this.props.posts)
    
    return <div className='posts-container'>
      <div className='row align-justify'>
        <HelmetShow title='Aprende a desarrollar cosas realmente increibles con js' 
          description='En este blog aprenderas nuevas tecnologias en javascript' 
          image_facebook='blog.jpg' 
          image_twitter='blog.jpg' 
          image_google='blog.jpg'/>
        {
          posts.map((post) => {
            return <div key={post.id} className='column small-12 medium-6 large-4'>
              <div className='container-icon-post'>
                <img className='icon-post' src={post.cover_icon} />
              </div>

              <Link to={`blog/${post.namefolder}`}>
                <h1 className='title-post'>{ post.title }</h1>
              </Link>

              <p className='text-right'>{ post.date }</p>
            </div>
          })          
        }
      </div>
    </div>

  }

  render() {
    const { posts } = this.props

    return <div>
      {
        this.renderPosts(posts)
      }
      <Share/>
    </div>

    // console.log(this.props.saludo())

  }
}

// function mapStateToProps(state) {
//   return {
//     posts:state.posts.list
//   }
// }
// export default connect(mapStateToProps, { fetchPosts })(PostsList)
