import React from 'react'
import { Link } from 'react-router'

import Author from './Author'
import Share from './Share'

import HelmetShow from '.././HelmetShow'

var classy = require('markdown-it-classy')
var highlightjs = require('markdown-it-highlightjs')
var MarkdownIt = require('./markdown-it')

var md = new MarkdownIt()
md.use(classy)
md.use(highlightjs)


export default class PostDetails extends React.Component {

  componentWillMount() { // el componente Montará.
      this.props.fetchPost(this.props.nameFolder)
  }

  renderThemes(themes, title, description, imageFacebook, imageTwitter, imageGoogle) {

    return <div className='themes-container'>
      <HelmetShow title={title} description={description} 
            image_facebook={imageFacebook} image_twitter={imageTwitter} 
            image_google={imageGoogle}/>

      <div className='row align-justify'>
        {
          themes.map((theme) => {
            return <div  key={ theme.id } className='column small-12 medium-6 large-4'>
              <div className='row align-center'>
                <div className='column small-6 medium-6 large-6'>
                  <div className='container-icon-theme'>
                    <img src={ theme.cover_icon } className='icon-theme'/>
                  </div>
                </div>
              </div>

              <Link to={`/blog/${theme.namefolderpost}/${theme.namefoldertheme}`}>
                <h1 className='title-theme'>{ theme.title }</h1>
              </Link>
            </div>
          })
        }

        <Share/>
      </div>
    </div>
  }


  renderPost(content, title, description, imageFacebook, imageTwitter, imageGoogle) {

    return <div>
      <HelmetShow title={title} description={description} 
            image_facebook={imageFacebook} image_twitter={imageTwitter} 
            image_google={imageGoogle}/>

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
    // console.log(this.props.activePost)

    const { title, themes, content, description, image_facebook, image_twitter, image_google } = this.props.activePost
    

    if(themes) {
      return this.renderThemes(themes, title, description, image_facebook, image_twitter, image_google)
    }else {
      return this.renderPost(content, title, description, image_facebook, image_twitter, image_google)
    }
  }
}
