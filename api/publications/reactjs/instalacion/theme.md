# Instalación {title-ph center}

> Bien, ahora las cosas necesitas para instalar Reactjs son: {article-ph}

> 1- Tener instalado nodejs, es muy simple, solo tienes que ir a la página de node  y descargarla. https://nodejs.org/es/ {article-ph}

> 2- npm el gestor de paquetes de node, que nos ayudará a poder instalar reactjs  y las librerías que nosotros queramos. {article-ph}

> Una vez que tenemos instalado nodejs y npm, Creamos una carpeta react-proyecto y dentro de ella creamos el archivo package.json con lo siguiente. {article-ph}

> react-proyecto/package.json {folder-code center}

```json
	{
		“name”:”ejemplo-componente”,
		“dependencies”: {
		  "react": "^0.13.3",
		  "babelify": "^6.1.2",
		  "browserify": "^10.2.4"

		},
		“scripts”:{
		  "build": "browserify app.js > public/js/build.js -t babelify"
		}
	}
```
> Y luego nos vamos a la terminal y nos posicionamos donde está la carpeta y ejecutamos el siguiente código. {article-ph}

```
	npm install
```

> Esto buscara los nombres de las librerías que están dentro de dependencies y lo instalará sin ningún problema.
Una vez instalada estas tres librerías, automáticamente se creará la carpeta node_modules que contiene el código fuente de las librerías. {article-ph}

> Las librerías que instalamos son:{article-ph}

> 1- React como ya hemos dicho es la librería para crear componentes. {article-ph}

> 2- Browserify es una librería que nos permite exportar e importar trozos de códigos para un desarrollo más ágil. {article-ph}

> 3- Babelify también es una librería que nos ayudará a escribir código ES6 que es el nuevo estándar de JavaScript que aún no es compatible con los navegadores, es muy buena práctica usar ES6 cuando estamos desarrollando alguna aplicación con JavaScript. {article-ph}

> Luego en la misma carpeta creamos una carpeta llamada public es aquí donde estará nuestro código para producción.  Luego en la carpeta principal creamos una carpeta llamado components y dentro de ella creamos el archivo PruebaComponent.js con el siguiente código. {article-ph}

> react-proyecto/components/PruebaComponent.js {folder-code center}

```javascript
	import React from 'react'
	class MiComponente extends React.Component {
		render() {
			return <div>
				<h1>Hola soy un componente</h1>
			</div>
		}
	}
	export default MiComponente
```

> Ahora asamos a crear en la carpeta principal de nuestro proyectos el archivo app.js que va a ser nuestro punto de estrada de nuestra aplicación con lo siguiente. {article-ph}

> react-proyecto/app.js {folder-code center}

```javascript
	import React from 'react'
	import MiComponente from './components/MiComponente'

	React.render(<MiComponente/>, document.getElementById('container'))
```


> Luego en nuestra carpeta react-proyecto creamos un archivo llamado index.html con lo siguiente. {article-ph}

> react-proyecto/index.html {folder-code center}

```html
	<!DOCTYPE html>
	<html lang="es">
	<head>
		<meta charset="UTF-8">
		<title>index</title>
	</head>
	<body>
		<div id='container'></div>

		<script src="./public/build.js"></script>
	</body>
	</html>
```
> Y para probar nuestra aplicación tenemos que irnos a la terminal y en la misma dirección de nuestro proyecto ejecutamos el comando: {article-ph}

```
	npm run build
```
> -Nota: si tú quieres crear otro proyecto tienes que hacer los mismos pasos que hicimos dentro de la carpeta react-proyecto. {article-ph}

> Todo esto lo hice para mostrarte de como instalar y probar que todo haya salido bien, y es por eso que no me detuve a explicar el componente, en el siguiente tutorial sí nos detendremos a analizar un componente y cuales con sus características. {article-ph}

> Gracias por leer este artículo, por favor comparte esto con alguien que quiere aprender. {article-ph}


