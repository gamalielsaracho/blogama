import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery'

import './style.css'

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

		// console.log('props.staticContext')
		// console.log(props.staticContext)

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
			// console.log('this.props.match.params')
			// console.log(this.props.match.params)

			this.fetchPosts()
		}
	}


	render() {
		const { loading, posts } = this.state

		// console.log('posts ------------')
		// console.log(posts)


		if(loading == true) {
			return <h1>Cargando...</h1>
		} else {
			return <div className='posts-list'>
				
				<HelmetShow title="Blog sobre programación"
					description="aprender es querer"
					image_facebook="./api/icons/banner.png"
					image_twitter="./api/icons/banner.png"
					image_google="./api/icons/banner.png"
					urlData="blog"/>
				{/*
				*/}

		    	<div className='posts-list__container-max'>
		        {
		          posts.map((post) => {
		            return <div key={post.id} className='posts-list__post-container'>
		    			<div className='posts-list__container-image'>
		              		<img className='posts-list__image' src='https://flaviocopes.com/nodejs/banner.png'/>
		    			</div>

		    			<Link to={`blog/${post.namefolder}`}>
				            <h1>{ post.title }</h1>
				        </Link>
		            
		            	<p>{ post.date }</p>
		            </div>
		          })     
		        }
		    	</div>
		    </div>
		}
	}
}

export default PostsList