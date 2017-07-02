import React from 'react'

import Share from '../Share'
import Author from '../Author'
import HelmetShow from '../../HelmetShow'


var Markdown = require('../markdown-it')
var classy = require('markdown-it-classy')
var highlightjs = require('markdown-it-highlightjs')

var md = new Markdown()
md.use(classy)
md.use(highlightjs)

export default class ThemeDetails extends React.Component {
  componentWillMount() {
    this.props.fetchTheme(this.props.nameFolderPost, this.props.nameFolderTheme)
  }

  renderTheme(content, title, description, imageFacebook, imageTwitter, imageGoogle) {
    return <div>
      <HelmetShow title={title} description={description} 
            image_facebook={imageFacebook} image_twitter={imageTwitter} 
            image_google={imageGoogle}/>

      <div className='row'>
        <div className='column small-12 medium-12 large-12'>
          <article dangerouslySetInnerHTML={{ __html:md.render(content) }}/>
        </div>
      </div>
      <Share/>
      <Author/>
    </div>
  }

  render() {
    const { content, title, description, image_facebook, image_twitter, image_google } = this.props.activeTheme
    // console.log(this.props.activeTheme)

    if(content) {
      return this.renderTheme(content, title, description, image_facebook, image_twitter, image_google)
    }else {
      return <h1>No hay tema Kape</h1>
    }
  }
}
