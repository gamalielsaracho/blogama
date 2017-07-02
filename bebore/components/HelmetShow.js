import React from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'

class HelmetShow extends React.Component {
  render() {
    console.log(this.props.title)

    const { title, description, image_facebook, 
            image_twitter, image_google } = this.props


    return <Helmet
      title = {title}
      defaultTitle="Gamaliel saracho programador javaScript tanto como frontend como backend"
      base={{"target":"_blank", "href":"http://localhost:8080/"}}
      meta = {[
      	{"name":"description", "content":description},
      	{"name":"theme-color", "content":"#15210B"},
      	// facebook.
      	{"property":"fb:admins", "content":"prueba"},
      	{"property":"og:title", "content":title || "Aprender es hacer"},
      	{"property":"og:type", "content":"website"},
      	{"property":"og:url", "content":"laURL"},
      	{"property":"og:image", "content":image_facebook},
      	{"property":"og:site_name", "content":"gamalielsaracho.com"},

      	// google.
      	{"itemprop":"description", "content":description},

      	// twitter.
      	{"property":"twitter:account_id", "content":"4503599630205252"},
      	{"name":"twitter:card", "content":"summary_large_image"},
      	{"name":"twitter:site", "content":"@gamalielsaracho"},
      	{"name":"twitter:title", "content":title},
      	{"name":"twitter:description", "content":description},
      	{"name":"twitter:creator", "content":"@gamalielsaracho"},
      	{"name":"twitter:image:src", "content":image_twitter},
      	{"name":"twitter:domain", "content":"http://localhost:8080/"}
      ]}

      link = {[
      	{"rel":"canonical", "href":"http://localhost:8080/api/icons/js.png"},
      	{"rel":"apple-touch-icon", "href":"http://localhost:8080/api/icons/js.png"},
      	{"rel":"apple-touch-icon", "sizes":"72x72", "href":"http://localhost:8080/api/icons/js.png"}
      ]} />

  }
}

export default HelmetShow