import React, { Component } from 'react'
import { Link } from 'react-router'

import './style.css'

import $ from 'jquery'

import Author from '../../../app/components/Author'
import Share from '../../../app/components/Share'

import HelmetShow from '../../../app/components/HelmetShow'

import LoadAnimation from '../../../app/components/LoadAnimation'

var classy = require('markdown-it-classy')
var highlightjs = require('markdown-it-highlightjs')
var MarkdownIt = require('../../../libs/markdown-it')

var md = new MarkdownIt()
md.use(classy)
md.use(highlightjs)

class ShowPost extends Component {
	constructor(props) {
		super(props)
		this.renderPost = this.renderPost.bind(this)

		let initialData
		if(props.staticContext) {
			initialData = props.staticContext.initialData
		} else {
			initialData = window.__initialData__;
			delete window.__initialData__;
		}

		this.state = {
			show: {
				loading: initialData ? false : true,
				post: initialData
			}
		}

		this.fetchPost = this.fetchPost.bind(this)

	}	

	fetchPost() {
	  // console.log('EL NOMBRE ES--->'+this.props.match.params.namefolderPost)

	  	let paramsUrl = this.props.match.params

		this.setState({
	       	show: { 
	            loading: true
	       	}
		})

		this.props.fetchInitialData(paramsUrl)
		.then((data) =>  this.setState({
	        show: { 
				loading: false,
				post: data 
	        }
	    }))
	}


	componentDidMount() { // el componente Montará.
		if (!this.state.show.post) {
			this.fetchPost()
		}
  	}



  	renderPost(post) {
  		// console.log(post)
  		const urlData = `/blog/${this.props.match.params.namefolderPost}`


  		return <div>
  			<HelmetShow title={post.title}
				description={post.description}
				image_facebook={post.image_facebook}
				image_twitter={post.image_twitter}
				image_google={post.image_google}
				urlData={urlData}/>

			<div className='row'>
			    <div className='column small-12 medium-12 large-12'>
			    	<article dangerouslySetInnerHTML={{ __html:md.render( post.content) }}>
			    	</article>
			    </div>
			</div>
		</div>
  	}

	render() {
		const { loading, post } = this.state.show

		
		// 
		if(loading) {
  			return <LoadAnimation/>
  		} else {

  			const urlData = `/blog/${this.props.match.params.namefolderPost}`

			return <div className='post-show'>

				<HelmetShow title={post.title}
					description={post.description}
					image_facebook={post.image_facebook}
					image_twitter={post.image_twitter}
					image_google={post.image_google}
					urlData={urlData}/>

				<div className='post-show-container-max'>
					<article dangerouslySetInnerHTML={{ __html:md.render(post.content) }}>
					</article>
				</div>
			</div>	
  		}
	}
}

export default ShowPost