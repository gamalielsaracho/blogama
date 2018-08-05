import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import HelmetShow from '../../../app/components/HelmetShow'
import LoadAnimation from '../../../app/components/LoadAnimation'

class PostsList extends Component {
	
	constructor(props) {
    	super(props)

    	let initialData
		if(props.staticContext) {
			initialData = props.staticContext.initialData
		} else {
			initialData = window.__initialData__;
			delete window.__initialData__;
		}

		console.log('props.staticContext')
		console.log(props.staticContext)

		this.state = {
			loading: initialData ? false : true,
			posts: initialData
		}

		this.fetchPosts = this.fetchPosts.bind(this)
	}


	fetchPosts() {
		this.setState({ loading:true })

		// función desde la url.
		this.props.fetchInitialData()
		.then((data) => this.setState({ loading:false, posts: data }))
	}


	componentDidMount() {
	    if (!this.state.posts) {
	    	this.fetchPosts()
	    }
 	}

	render() {
		const { loading, posts } = this.state

		if(loading === true) {
			return <h1>Cargando...</h1>
		} else {
			return <div className='container'>
				
				{/*
					<HelmetShow title="Blog sobre programación"
						description="aprender es querer"
						image_facebook="./api/icons/banner.png"
						image_twitter="./api/icons/banner.png"
						image_google="./api/icons/banner.png"
						urlData="blog"/>
				*/}

				<br/>
		    	<div className='row align-justify'>
		        {
		          posts.map((post) => {
		            return <div key={post.id} className='column small-12 medium-6 large-4'>
		              

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