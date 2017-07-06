import React, { Component } from 'react'
import { Link } from 'react-router'

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
	}	

	componentWillMount() { // el componente Montará.
      this.props.fetchPostList(this.props.nameFolder)
  	}

  	renderPost(post) {
  		// console.log(post)
  		const urlData = `/blog/${this.props.nameFolder}`

  		return <div>
  			<HelmetShow title={post.title}
				description={post.description}
				image_facebook={post.image_facebook}
				image_twitter={post.image_twitter}
				image_google={post.image_google}
				urlData={urlData}/>

			<div className='row'>
			    <div className='column small-12 medium-12 large-12'>
			    	<article dangerouslySetInnerHTML={{ __html:md.render(post.content) }}>
			    	</article>
			    </div>
			</div>

			<Share/>
			<Author/>
		</div>
  	}

	render() {
		const { loading, post } = this.props.fetchPost

		console.log(this.props)
		
		if(loading) {
  			return <LoadAnimation/>
  		} else {
			return this.renderPost(post)			    
  		}
	}
}

export default ShowPost