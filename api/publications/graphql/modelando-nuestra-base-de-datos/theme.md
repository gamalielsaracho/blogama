# Modelando nuestra base de datos {title-ph center}

Bueno ahora vamos a pasar a modelar nuestra base de datos gracias a la librería mongoose, primero que nada tenemos que crear la carpeta para nuestros modelos, y le nombremos a la carpeta models. {article-ph}

Luego dentro de la carpeta models creamos el archivo todo.js con lo siguiente: {article-ph}

nodejs-graphql/models/todo.js {folder-code center}

```javascript
	import mongoose from 'mongoose'

	let todoSchema = new mongoose.Schema({
	  id: mongoose.Schema.Types.ObjectId,
	  title: {
	    type:String,
		required: true
	  },
	  completed: {
	    type: Boolean
	  }
	})

	export default mongoose.model('Todo', todoSchema)
```

Como pueden ver camos a tener 3 campos para nuestro modelo Todo. {article-ph}

Recuerda que tú puedes usar mysql o cualquier otro para crear tu base de datos, en este caso estamos usando mongodb. {article-ph}

Reconozco que este tutorial fué muy corto, en el siguiente voy a estar creando nuestro esquema graphql y explicando bien el concepto. {article-ph}

Gracias por leer el tutorial, recuerda en compartir con las demas personas. {article-ph}

