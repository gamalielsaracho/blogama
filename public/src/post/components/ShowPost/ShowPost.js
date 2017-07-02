import React, { Component } from 'react'
import { Link } from 'react-router'

import Author from '../../../app/components/Author'
import Share from '../../../app/components/Share'

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

  	renderPost(content) {
  		// console.log(content)

  		return <div>
			<div className='row'>
			    <div className='column small-12 medium-12 large-12'>
			    	<article dangerouslySetInnerHTML={{ __html:md.render(content) }}>
			    	</article>
			    </div>
			</div>

			<Share/>
			<Author/>
		</div>
  	}

	render() {
		const { loading, post } = this.props.fetchPost

		console.log(this.props.fetchPost)
		
		if(loading) {
  			return <div>
  				<h3>Cargando...</h3>
  			</div>
  		} else {
			return this.renderPost(post.content)			    
  		}
	}
}

export default ShowPost