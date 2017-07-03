import React from 'react'
// import HelmetShow from './HelmetShow'

import Footer from '../Footer'
import Menu from '../Menu'
import Activity from '../Activity'

class App extends React.Component {
  render() {

      // <HelmetShow title='Gamaliel Saracho Programador javascript tanto del backend como el frotend' 
      //     description='Me gusta enseñar a los de demás sobre lo que hago y como ayudarlos' 
      //     image_facebook='home.jpg' 
      //     image_twitter='home.jpg' 
      //     image_google='home.jpg'/>
    return <div>
      <Menu/>

      { this.props.children }

      <Activity/>

      <Footer/>

    </div>
  }
}
export default App
