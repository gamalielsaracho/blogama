import menu from './libs/menu'

import React from 'react'
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom'

    // routes.
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from './AppRoutes'


  // store.
import configureStore from './store/configureStore'
const store = configureStore(window.__initialData__) // window.__initialData__ added.


ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
        	<AppRoutes/>
		</BrowserRouter>
    </Provider>, document.getElementById('app')
)
