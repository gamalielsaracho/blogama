import express from 'express'

import cors from 'cors'
import Helmet from 'react-helmet';
import config from './config/config'

import { renderToString } from 'react-dom/server'
import renderFullPage from './renderFullPage'
import React from 'react'

import { StaticRouter, matchPath } from 'react-router-dom'
import App from './public/src/js/app/components/App'

import routes from './public/src/js/routes'

import 'isomorphic-fetch';

// Backend.
import routesServer from './app/routes'

var app = express()

routesServer(app)


app.use(cors())
app.use(express.static('public')) 

app.get("/api/news", (req, res) => {
  res.json([
    {
      id: 1,
      upvotes: 130,
      title: "Fianto Duri, the complete tutorial",
      author: "RubeusH",
      date: new Date("2017-04-14T15:30:00.000Z")
    },
    {
      id: 2,
      upvotes: 126,
      title: "Ordinary Wizarding Levels study guide",
      author: "BathBabb",
      date: new Date("2017-04-14T15:30:00.000Z")
    },
    {
      id: 3,
      upvotes: 114,
      title: "Is muggle-baiting ever acceptable?",
      author: "Falco",
      date: new Date("2017-04-14T15:30:00.000Z")
    },
    {
      id: 4,
      upvotes: 97,
      title: "Untransfiguration classes to become compulsory at Hogwarts",
      author: "Baddock",
      date: new Date("2017-04-14T15:30:00.000Z")
    },
    {
      id: 5,
      upvotes: 85,
      title: "Cracking the Aurologist Interview ",
      author: "Hetty",
      date: new Date("2017-04-14T15:30:00.000Z")
    },
    {
      id: 6,
      upvotes: 74,
      title: "Conserving waterplants cheatsheet.",
      author: "Otto",
      date: new Date("2017-04-14T15:30:00.000Z")
    },
    {
      id: 7,
      upvotes: 66,
      title: "The Pragmatic Dragon Feeder",
      author: "Baruffio",
      date: new Date("2017-04-14T15:30:00.000Z")
    },
    {
      id: 8,
      upvotes: 50,
      title: "The complete quidditch statistics",
      author: "Hbeery",
      date: new Date("2017-04-14T15:30:00.000Z")
    },
    {
      id: 9,
      upvotes: 34,
      title: "Cracking the Aurologist Interview ",
      author: "Marcusb",
      date: new Date("2017-04-14T15:30:00.000Z")
    },
    {
      id: 10,
      upvotes: 29,
      title: "Could wizards prevent WW3?",
      author: "Cuthbert",
      date: new Date("2017-04-14T15:30:00.000Z")
    },
    {
      id: 11,
      upvotes: 20,
      title: "ASK WN: What do you use to digitalize your scrolls?",
      author: "Alphard",
      date: new Date("2017-04-14T15:30:00.000Z")
    },
    {
      id: 12,
      upvotes: 16,
      title: "Show WN: Wand-Extinguishing Protection",
      author: "Humphrey22",
      date: new Date("2017-04-14T15:30:00.000Z")
    }
  ]);
});




app.get('*', function(req, res, next) {

	const activeRoute = routes.find(route => matchPath(req.url, route)) || {}


	const requestInitialData = 
	activeRoute.fetchInitialData && activeRoute.fetchInitialData(req.path)


	Promise.resolve(requestInitialData)
	.then((initialData) => {
    // console.log(initialData)
    
		const context = {initialData}
		
		// console.log('solicitud de dato inicial segun la ruta.')
		// console.log(initialData)

		var markup = renderToString(
	    	<StaticRouter location={req.url} context={context}>
	      		<App/>
	    	</StaticRouter>
		)

		const helmet = Helmet.renderStatic();

		// var initialData = []
		var seoContent = {
			title: helmet.title.toString(),
			meta: helmet.meta.toString(),
			link: helmet.link.toString(),
			bodyAttributes: helmet.bodyAttributes.toString()
		}

		res.send(renderFullPage(markup, initialData, seoContent))
	})
	.catch((error) => {
		console.log(error)
	})
})

app.listen(config.server.port, function() {

	console.log('Server is listening on port 3000')
})