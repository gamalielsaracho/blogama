import React from 'react'
import  { Route, IndexRoute } from 'react-router'

import App from './pages/App'
import Home from './pages/Home'
import PostsIndex from './pages/PostsIndex'
import PostsShow from './pages/PostsShow'
import Tienda from './pages/Tienda'
import ThemeShow from './pages/ThemeShow'

export default (
  <Route path="/" component={App}> // la raiz principal.
    <IndexRoute component={Home}/>
    <Route path="blog" component={PostsIndex}/>
    <Route path="blog/:namefolder" component={PostsShow}/>
    <Route path="blog/:namefolderpost/:namefoldertheme" component={ThemeShow}/>
    <Route path="tienda" component={Tienda}/>
  </Route>
)
