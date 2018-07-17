import React from 'react'
import  { Route, IndexRoute, BrowserRouter } from 'react-router'

import AppContainer from './app/components/App'
import HomePage from './app/pages/HomePage'

import PostsListPage from './post/pages/PostsListPage'
import ShowPostPage from './post/pages/ShowPostPage'

export default (
  <Route path='/' component={AppContainer}> // la raiz principal.
    <IndexRoute component={HomePage}/>
    <Route path="/blog" component={PostsListPage}/>
    <Route path="/blog/:namefolder" component={ShowPostPage}/>
  </Route>
)

// console.log('ddd '+process.env.PUBLIC_URL)
