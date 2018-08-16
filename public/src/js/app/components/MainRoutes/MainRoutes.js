import React, { Component }  from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from '../../pages/HomePage'

import PostsList from '../../../post/components/PostsList'

import PostsRoutes from '../../../post/components/PostsRoutes'


class MainRoutes extends Component {

	render() {
		return <main>
			<Switch>
				<Route exact path='/' component={HomePage}/>
				<Route path='/blog' component={PostsRoutes}/>
			</Switch>
		</main>
	}
}

export default MainRoutes