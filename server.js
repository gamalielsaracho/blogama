import express from 'express'

import cors from 'cors'

import config from './config/config'

// redux.
import { Provider } from "react-redux"
import configureStore from "./public/src/js/store/configureStore";

import { renderToString } from 'react-dom/server'
import renderFullPage from './renderFullPage'
import React from 'react'

import { StaticRouter, matchPath } from 'react-router-dom'
import allRoutes from './public/src/js/allRoutes'

import 'isomorphic-fetch';

import AppRoutes from './public/src/js/AppRoutes'


var app = express()

app.use(cors())

app.use(express.static('public')) 


app.get('*', function(req, res, next) {
	const store = configureStore()

	// const activeRoute = allRoutes.find(route => matchPath(req.url, route)) || {}

	
	// const requestInitialData = 
	// activeRoute.fetchInitialData && activeRoute.fetchInitialData(req.path)
	
	const promises = allRoutes.reduce((acc, route) => {
		if(matchPath(req.url, route) && route.component && route.initialAction) {
			acc.push(Promise.resolve(store.dispatch(route.initialAction(req.path))))
		}

		return acc
	}, [])

	Promise.all(promises)
	.then(() => {
		const context = {}

		// console.log('solicitud de dato inicial segun la ruta.')
		// console.log(initialData)

		var markup = renderToString(

			<Provider store={store}>
	          <StaticRouter location={req.url} context={context}>
	            <AppRoutes/>
	          </StaticRouter>
	        </Provider>
		)

		const initialData = store.getState();

		// var initialData = []
		res.send(renderFullPage(markup, initialData))
	})
	.catch((error) => {
		console.log(error)
	})
})

app.listen(config.server.port, function(err) {
	if(err) {
		console.log('Error to listening on port 3000 '+err)
		return
	}

	console.log('Server is listening on port 3000')
})