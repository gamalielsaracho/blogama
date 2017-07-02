import React, { Component } from 'react'

import ShowPostContainer from '../components/ShowPost'

class ShowPostPage extends Component {
	render() {
		return <ShowPostContainer folder={this.props.params.namefolder}/>
	}
}

export default ShowPostPage