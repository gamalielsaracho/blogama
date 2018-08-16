import React, { Component }  from 'react'
import { Switch, Route } from 'react-router-dom'


import PostsList from '../../components/PostsList'
import ShowPost from '../../components/ShowPost'


class PostsRoutes extends Component {

	render() {
		return <main>
			<Switch>
				<Route exact path='/blog' component={PostsList}/>
				<Route path='/blog/:namefolderPost' component={ShowPost}/>
			</Switch>
		</main>
	}
}

export default PostsRoutes