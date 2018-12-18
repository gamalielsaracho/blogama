import React, { Component } from 'react'
import { Link } from 'react-router'

import axios from 'axios'

import './style.css'

import $ from 'jquery'

import Author from '../../../app/components/Author'
import Share from '../../../app/components/Share'

import LoadAnimation from '../../../app/components/LoadAnimation'

import { urlApi } from '../../../middleware'

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

		this.fetchPost = this.fetchPost.bind(this)
	}	

	fetchPost() {
	  	let paramsUrl = this.props.match.params

		this.props.fetchInitialData(paramsUrl)
		.then((data) =>  this.setState({
	        show: { 
				loading: false,
				post: data 
	        }
	    }))
	}


	componentWillMount() { // el componente Montará.
		this.setState({
	       	show: { 
	            loading: true
	       	}
		})

		if (__isBrowser__) {

	  		let paramsUrl = this.props.match.params.namefolderPost

			axios.get(`${urlApi}/publications/publications.json`)
		    .then((content) => {
		      var publications = eval(content.data)

		      publications.map((i) => {
		        if(i.namefolder == paramsUrl) {
		          axios.get(`${urlApi}/publications/${paramsUrl}/post.md`)
		          .then((content) => {

		            i.content = content.data

		            this.setState({
				        show: { 
							loading: false,
							post: i
				        }
				    })

		          })
		          .catch(err => console.log(err))
		        }
		      })
		    })
		    .catch(err => console.log(err))
		}

  	}

  	renderPost(post) {
  		return <div>
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
		
		if(loading) {
  			return <LoadAnimation/>
  		} else {
			return <div className='post-show'>
				<div className='post-show-container-max'>
					<article dangerouslySetInnerHTML={{ __html:md.render(post.content) }}>
					</article>
				</div>
			</div>	
  		}
	}
}

export default ShowPost