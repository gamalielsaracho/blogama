# Servidor con GraphQL {title-ph center}

Bien ahora vamos a empezar a hacer uso de GraphQL dentro de nuestro servidor para logra hacer todas las consultas o mutaciones que nuestra aplication necesita. {article-ph}

# Las Tecnologías que usaremos seran: {sub-title-ph}

 1. nodejs. {article-ph}
 2. express. {article-ph}
 3. express-graphql. {article-ph}
 4. mongoose. {article-ph}
 5. graphql. {article-ph}
 6. babel. {article-ph}

Lo primero que tienes que hacer es crear la carpeta nodejs-graphql. y
dentro creas el archivo package.json y colocas lo siguiente: {article-ph}

nodejs-graphql/package.json {folder-code center}

```javascript
{
  "name": "nodejs-graphql",
  "dependencies": {
    "babel": "^5.8.23",
    "express": "^4.14.0",
    "express-graphql": "^0.6.1",
    "graphql": "^0.8.2",
    "mongoose": "^4.7.3"
  }
}
```


Luego te posicionas en la carpeta que creamos desde la linea de comandos.
y ejecutamos los siguiente: {article-ph}

```javascript
	npm install
```

Una vez que termino de instalar todas las librerias, pasamos a crear el archivo app.js que contendrá la configuracion de nuestro servidor con graphql. {article-ph}

nodejs-graphql/app.js {folder-code center}

```javascript
  import express from 'express'
  import graphQLHTTP from 'express-graphql'
  import mongoose from 'mongoose'

  // importamos el esquema que contendrá todos las queries y mutations de 
  // nuestra aplicación, (que lo crearemos mas adelante). 
  import schema from './graphql'

  let app = express()

  // Hacemos uso de graphQLHTTP
  app.use('/', graphQLHTTP({
	// Decimos que utilice el esquema que creamos con graphql.
	schema: schema, 
	// Le ponemos true para que cada respuesta JSON sea impresa.
	pretty: true,
	// Le ponemos true para hacer uso de GraphiQL en el navegador
	// es recomendable poner en false cuando su aplicación está en producción.
	graphiql: true
  }))

  // Nos conectamos a nuestra base de datos.
  mongoose.connect('mongodb://localhost/todolist')

  // Le decimos que esté escuchando nuestro servidor en el puerto 8080.
  app.listen(8080, (err) ={
	if(err) {
		console.log(err)
	}

	console.log(`Running server on localhost:8080`)
  })
```

Como pueden ver estamos haciendo uso del nuevo estandar de javaScript, lo cual antes de correr nuestro servidor tenemos que hacer los siguiente. {article-ph}

Crear en archivo .babelrc con lo siguiente: {article-ph}

nodejs-graphql/.babelrc {folder-code center}

```javascript
	{
	  "stage": 0
	}
```

Luego creamos el archivo index.js con lo siguiente: {article-ph}

nodejs-graphql/index.js {folder-code center}

```javascript
	require('babel/register')
	// Importamos la configuración de nuestro servidor.
	require('./app')
```

Todo esto lo hicimos para poder usar es6 junto con nodejs, lo cual nos facilita mucho más nuestro desarrollo. {article-ph}

Hasta aquí llegamos con este tutorial de como crear nuestro servidor junto a GraphQL. {article-ph}

En el siguiente tutorial vamos a pasar a modelar nuesta base de datos por medio de mongoose. {article-ph}
Gracias por leer este tutorial y recuerda en compartir con tus amigos. :) {article-ph}