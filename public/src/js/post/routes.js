import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'


import PostsListPage from './pages/PostsListPage'
import ShowPostPage from './pages/ShowPostPage'

const postRoutes = (
	<Switch>
		<Route path="/blog" component={PostsListPage}/>
		<Route path="/blog/:namefolder" component={ShowPostPage}/>
	</Switch>

)

export default postRoutes
