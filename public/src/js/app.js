import React from 'react'
import { hydrate } from 'react-dom'

    // routes.
import { BrowserRouter } from "react-router-dom";
import App from './app/components/App'
import routes from './routes'


hydrate(<BrowserRouter>
        	<App/>
		</BrowserRouter>, document.getElementById('app')
)
