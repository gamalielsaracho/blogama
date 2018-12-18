import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery'
import axios from 'axios'

import { urlApi } from '../../../middleware'

import './style.css'

import HelmetShow from '../../../app/components/HelmetShow'
import LoadAnimation from '../../../app/components/LoadAnimation'

class PostsList extends Component {
	
	constructor(props) {
    	super(props)

		this.state = {
			list: {
				loading: false,
				posts: null
			}
		}
	}

	componentWillMount() {
		this.setState({ list: { loading:true } })

		if (__isBrowser__) {
		 axios.get(`${urlApi}/publications/publications.json`)
		  .then((response) => {
		  	response.data = eval(response.data)

		  	// console.log(response.data)
		  	this.setState({ list:{ loading:false, posts: response.data } })
		  })
		  .catch(err => console.log(err));
		}
		
 	}


	render() {
		const { loading, posts } = this.state.list

		if(loading) {
			return <LoadAnimation/>
		} else {
			return <div className='posts-list'>

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