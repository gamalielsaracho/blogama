import menu from './libs/menu'

import React from 'react'
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom'

    // routes.
import { Router, browserHistory, hashHistory } from 'react-router'
import routes from './routes'


  // store.
import configureStore from './store/configureStore'
const store = configureStore()


ReactDOM.render(<Provider store={store}>
        <Router history={hashHistory} routes={routes}/>
      </Provider>, document.getElementById('container-blog'))
