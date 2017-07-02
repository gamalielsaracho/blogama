import React from 'react'
import  { Route, IndexRoute } from 'react-router'

import AppContainer from './app/components/App'
import InfoFreelance from './app/components/InfoFreelance'

import PostsListPage from './post/pages/PostsListPage'
import ShowPostPage from './post/pages/ShowPostPage'

export default (
  <Route path="/" component={AppContainer}> // la raiz principal.
    <IndexRoute component={InfoFreelance}/>
    <Route path="blog" component={PostsListPage}/>
    <Route path="blog/:namefolder" component={ShowPostPage}/>
  </Route>
)
