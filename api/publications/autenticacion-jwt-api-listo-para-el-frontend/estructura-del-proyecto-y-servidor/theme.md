# Estructura del proyecto y servidor {title-ph center}

Bienvenido a este tutorial, te recomiendo que perseveres con los tutoriales hasta el final, te aseguro que sentirás orgullo de ti mismo por haber aprendido mucho. {article-ph}


# ¿Qué aprenderás? {sub-title-ph}

 1. Creación de una API rest listo para el front-end. {article-ph}
 2. Registro y autenticación de usuarios vía JWT. {article-ph}
 3. Recuperación de contraseña vía email. {article-ph}
 4. Roles específicos para los usuarios (Admin, Client). {article-ph}
 5. Proteger las rutas de tu API según el role del usuario. {article-ph}

# Y las tecnologías que usaremos serán: {sub-title-ph}

 1. nodejs. {article-ph}
 2. express. {article-ph}
 3. mongoose. {article-ph}
 4. passport. {article-ph}
 5. jwt. {article-ph}
 6. bcrypt-nodejs. {article-ph}

# Estructura del proyecto {sub-title-ph}

Bien empecemos, lo primero que tienes que hacer crear una carpeta del proyecto llamado login-nodejs que será la carpeta raíz del proyecto, y dentro creas el archivo package.json con lo siguiente: {article-ph}

login-nodejs/package.json {folder-code center}

```javascript
{
	"name": "login-nodejs",
	"version": "1.0.0",
	"description": "backend",
	"main": "index.js",
  	"dependencies": {
	    "babel": "^5.8.23",
	    "body-parser": "^1.15.2",
	    "boom": "^4.2.0",
	    "chalk": "^1.1.3",
	    "cors": "^2.8.1",
	    "crypto": "0.0.3",
	    "express": "^4.14.0",
	    "jsonwebtoken": "^7.2.1",
	    "mongoose": "^4.7.4",
	    "nodemailer": "^2.7.0",
	    "randomstring": "^1.1.5"
  	},
  	"devDependencies": {
    	"nodemon": "^1.11.0"
  	}
}

```

> Abres la terminal y te posicionas donde está la carpeta raíz de nuestro proyecto, es decir; login, y escribes lo siguiente: {article-ph}

```javascript
	npm install
```

> Y le damos enter, esto instalará todas las librerías que necesitamos para empezar a desarrollar nuestro back-end. {article-ph}

# Configuración de nuestra app

> Ahora vamos a crear en la carpeta raiz login-nodejs la carpeta app y dentro de la misma creamos la carpeta config

> Y dentro de config el archivo config.js con lo siguiente:

login-nodejs/app/config/config.js {folder-code center}

```javascript
export default {
	// Datos de nuestro servidor.
	server: {
		host: 'localhost',
		post: 3000
	},
	// Los datos de nuestra base de datos.
	database: {
		host: 'localhost',
		port: 27017,
		db: 'mibasededatos',
		url: 'mongodb://127.0.0.1:27017/mibasededatos'
	},
	// Para tener una llave privada y una fecha de vencimiento 
	// para el token de los usuarios.
	key: {
		privateKey: 'mysupersecretkey',
		tokenExpiry: '7d' 
	},
	// Esto es para hacer uso de nodemailer que veremos las adelante.
	email: {
		username:'********@gmail.com',
		password:'*******',
		accountName: 'gmail',
		verifyEmailUrl: 'verifyEmail'
	}
}
```

> También dentro de la carpeta config creamos el archivo db.js con lo siguiente:

login-nodejs/app/config/db.js {folder-code center}

```javascript
import mongoose from 'mongoose'
import config from './config'

let db = mongoose.connect(config.database.url)
	.then(() => {
		console.log(`database connected`)
	})
	.catch((err) => {
		console.log(`Error: ${err}`)
	})
	
export default db
```

# Creando nuestro servidor {sub-title-ph}

> Ahora tenemos que crear en la carpeta raíz el archivo app.js con lo siguiente: {article-ph}

login-nodejs/app.js {folder-code center}

```javascript
import express from 'express'
import bodyParser from 'body-parser'
import config from './app/config/config'
import db from './app/config/db'

// Declaramos app como express para hacer uso de la misma.
const app = express()

app.use(bodyParser.urlencoded({ extended:false }))
app.use(bodyParser.json())


// BLOQUE port.
const port = config.server.port

// Declaramos server y llamamos a la función listen y le pasamos como parámetro el puerto al cual queremos escuchar.
app.listen(process.env.PORT || port)

// Imprimimos este mensaje que se mostrará en nuestra terminal 
// al correr nuestro servidor.
console.log(`corriendo en el puerto ${3000}`)

// Esto nos autorizara para que podamos usar nuestra api, en el front-end
// y podamos hacer peticiones get, post, put, y delete. 
// Le pasamos http://localhost:8080 para que solamente nosotros podamos usar 
//nuestra API lo cual es super segura.

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "http://localhost:8080")
	res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials")
	res.header("Access-Control-Allow-Credentials", true)
	next()
})
```

> Una vez que terminamos de crear nuestro servidor, creamos dentro de la carpeta raiz el archivo .babelrc con lo siguiente:

login-nodejs/.babelrc {folder-code center}

```javascript
	{
  		"stage": 0
	}
```

> También creamos el archivo index.js en la carpeta raiz y dentro agremagos:

login-nodejs/index.js {folder-code center}

```javascript
	require('babel/register')
	require('./app')
```
> Esto lo hacemos para poder usar el nuevo estandar de javascript.

> Por ultimo vamos a correr nuestro servidor en la terminal, para eso nos vamos en la terminal y nos posicionamos en la carpeta raíz del proyecto y ejecutamos lo siguiente: {article-ph}

```javascript
	node index.js
```

> Y le damos enter, con esto ya tienes tu servidor corriendo exitosamente. {article-ph}

> pero si no quieres hacer node index.js cada vez que haces cambios, lo mejor es usar:

```javascript
	nodemon
```
> Y se actualizara automaticamente.

> Hasta aquí llegamos con este tutorial, en el siguiente vamos a . {article-ph}

> Gracias por leer este tutorial, recuerda compartir este tutorial con los demás. {article-ph}

