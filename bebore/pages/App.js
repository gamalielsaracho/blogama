import React from 'react'

import AppContainer from '../containers/AppContainer'

class App extends React.Component {
  render() {
	$('.showMyMenu').toggle()

    return <AppContainer className='container'>
      { this.props.children }
    </AppContainer>
  }
}
export default App
