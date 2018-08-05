import React from 'react'
import Helmet from 'react-helmet'

class HelmetShow extends React.Component {
  render() {

    const { title, 
            description, 
            image_facebook, 
            image_twitter, 
            image_google,
            urlData } = this.props

    // var urlDetail = `https://gamalielsaracho.github.io/#/${urlData}`
    var urlDetail = `http://localhost:3000/${urlData}`

    // var urlBase = `https://gamalielsaracho.github.io/`
    var urlBase = `http://localhost:3000/`

    if(!urlData) {
      urlDetail = urlBase
    }


    return <Helmet
      title={title}
      titleTemplate={title}
      defaultTitle="Gamaliel Saracho Franco Programador."
      base={{"target": "_blank", "href": urlBase}}
      meta={[
        {"name": "description", "content": description},                
        {"name":"theme-color", "content":"#15210B"},
        


        // facebook.
        // {"property":"fb:admins", "content":"prueba"},
        {"property":"og:title", "content": title},
        {"property":"og:image", "content":image_facebook},
        {"property":"og:description", "content": description},
        {"property":"og:type", "content":"website"},
        {"property":"og:url", "content": urlDetail},
        {"property":"og:site_name", "content":"gamalielsaracho.github.io"},

        // google.
        {"itemprop":"description", "content": description},

        // twitter.
        {"property":"twitter:account_id", "content":"4503599630205252"},
        {"name":"twitter:card", "content":"summary_large_image"},
        {"name":"twitter:site", "content":"@gamalielsaracho"},
        {"name":"twitter:title", "content": title},
        {"name":"twitter:description", "content": description},
        {"name":"twitter:creator", "content":"@gamalielsaracho"},
        {"name":"twitter:image:src", "content": image_twitter},
        {"name":"twitter:domain", "content":"https://gamalielsaracho.github.io/"}

      ]}
      link={[
        {"rel": "canonical", "href": "http://mysite.com/example"},
        {"rel": "apple-touch-icon", "href": "http://mysite.com/img/apple-touch-icon-57x57.png"},
        {"rel": "apple-touch-icon", "sizes": "72x72", "href": "http://mysite.com/img/apple-touch-icon-72x72.png"}
      ]}
      script={[
        {"src": "", "type": "text/javascript"},
        {"type": "application/ld+json", innerHTML: `{ "@context": "http://schema.org" }`}
      ]}
      onChangeClientState={(newState) => console.log(newState)}
      />
      
  }
}

export default HelmetShow