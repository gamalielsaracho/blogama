import React from 'react'

import ThemeDetailsContainer from '../containers/themes/ThemeDetailsContainer'

export default class ThemeShow extends React.Component {
  render(){
	$('.showMyMenu').toggle()
  	
    return <ThemeDetailsContainer folderP={this.props.params.namefolderpost} folderT={this.props.params.namefoldertheme}/>
  }
}
