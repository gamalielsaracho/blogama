import React, { Component } from 'react'
import { Link } from 'react-router'

import HelmetShow from '../../../app/components/HelmetShow'
import LoadAnimation from '../../../app/components/LoadAnimation'

class PostsList extends Component {
	constructor(props) {
    	super(props)
    	// this.renderPosts = this.renderPosts.bind(this)
    	// this.renderComponent = this.renderComponent.bind(this)
	}

	componentWillMount() { // el componente se montará.
    	this.props.fetchPostsList()
	}

	// renderComponent(loading, posts) {
		
	// }

	render() {
		const { loading, posts } = this.props.fetchPosts
		console.log(this.props.fetchPosts)

		
		if(loading) {
			return <LoadAnimation/>
		} else {
			return <div className='container'>
				
				<HelmetShow title="Blog sobre programación"
					description="aprender es querer"
					image_facebook="./api/icons/banner.jpg"
					image_twitter="./api/icons/banner.jpg"
					image_google="./api/icons/banner.jpg"
					urlData="/blog"/>

				<br/>
		    	<div className='row align-justify'>
		        {
		          posts.map((post) => {
		            return <div key={post.id} className='column small-12 medium-6 large-4'>
		              <div className='container-icon-post'>
		                <img className='icon-post' src={post.cover_icon} />
		              </div>

		              <div className='post-container-title'>
			              <Link to={`blog/${post.namefolder}`}>
			                <h1 className='title-post'>{ post.title }</h1>
			              </Link>
			          </div>

		              <p className='text-right'>{ post.date }</p>
		            </div>
		          })     
		        }
		    	</div>
		    </div>
		}
	}
}

export default PostsList