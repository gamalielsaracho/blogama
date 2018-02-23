import React from 'react'
import  { Route, IndexRoute } from 'react-router'

import AppContainer from './app/components/App'
import HomePage from './app/pages/HomePage'

import PostsListPage from './post/pages/PostsListPage'
import ShowPostPage from './post/pages/ShowPostPage'

export default (
  <Route path={process.env.PUBLIC_URL + '/'} component={AppContainer}> // la raiz principal.
    <IndexRoute component={HomePage}/>
    <Route path="blog" component={PostsListPage}/>
    <Route path="blog/:namefolder" component={ShowPostPage}/>
  </Route>
)
