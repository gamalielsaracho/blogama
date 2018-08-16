import React, { Component } from 'react'
import { Link } from 'react-router'

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

		this.state = {
			show: {
				loading: false,
				post: null
			}
		}
	}	

	componentWillMount() { // el componente Montará.

	  console.log('EL NOMBRE ES--->'+this.props.match.params.namefolderPost)

	  let namefolder = this.props.match.params.namefolderPost
      // this.props.fetchPostData(this.props.nameFolder)



		if(__isBrowser__) {
	  		const url = 'https://gamalielsaracho.github.io/api/publications'

			this.setState({
	       		show: { 
	            	loading: true
	       		}
	        })

	      $.get(`${url}/publications.json`)
	      .then((response) => {
	        let publications = response.publications

	          publications.map((publication) => {

	            if(publication.namefolder == namefolder) {

	              $.get(`${url}/${publication.namefolder}/post.md`)
	              .then((response) => {
	                publication.content = response

	                this.setState({
	                	show: { 
	                		loading: false,
	                		post: publication 
	                	}
	                })

	              })
	            }
	          })
	      })
	      .catch((error) => {
	        console.log(error)
	      })
		}

  	}

  	renderPost(post) {
  		// console.log(post)
  		const urlData = `/blog/${this.props.namefolderPost}`

  		// 	<HelmetShow title={post.title}
				// description={post.description}
				// image_facebook={post.image_facebook}
				// image_twitter={post.image_twitter}
				// image_google={post.image_google}
				// urlData={urlData}/>

  		return <div>
			<div className='row'>
			    <div className='column small-12 medium-12 large-12'>
			    	<article dangerouslySetInnerHTML={{ __html:md.render(post.content) }}>
			    	</article>
			    </div>
			</div>
		</div>
  	}

	render() {
		const { loading, post } = this.state.show

		
		if(loading && post == null) {
  			return <h1>Cargando...</h1>
  		} else {
			console.log(post)
			return this.renderPost(post)	
  		}
	}
}

export default ShowPost