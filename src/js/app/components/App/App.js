import React from 'react'
// import HelmetShow from './HelmetShow'

import Footer from '../Footer'
import Menu from '../Menu'
import Author from '../Author'


import LoadAnimation from '../LoadAnimation'

// import PostsListContainer from '../../../post/components/PostsList'

class App extends React.Component {

  componentDidMount() {
    setTimeout(() => this.props.readyApp(), 1500);
  }

  render() {
      // <HelmetShow title='Gamaliel Saracho Programador javascript tanto del backend como el frotend' 
      //     description='Me gusta enseñar a los de demás sobre lo que hago y como ayudarlos' 
      //     image_facebook='home.jpg' 
      //     image_twitter='home.jpg' 
      //     image_google='home.jpg'/>

    const { loading } = this.props.page

    if(loading) {
      return <LoadAnimation/>
    } else {
      return <div>
        <Menu/>
        
        <br/>
        <br/>
        

        { this.props.children }

        <Footer/>

      </div>
    }

  }
}
export default App
