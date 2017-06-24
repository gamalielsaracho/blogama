# Tipos de campos {title-ph center}

Los tipos de campos(fiels) son definidos para validar cuales son los datos que se van a mostrar cuando hacemos una consulta(query), y también valida que tipos de datos van a poder entrar a la hora de hacer una mutación(mutation) para modificar nuestra base de datos. {article-ph}

Para que entiendas mejor piensa lo siguiente: {article-ph}

Si tienes 2 tablas, post y comment tienes que definir los tipos de datos para cada una.  {article-ph}


| post      |
|-----------|
|- title    |
|- content  |


| comment  |
|----------|
|- idPost  |
|- body    |


Recuerda que cuando Hablamos de un types en GraphQL, estamos diciendo que defina todos los campos(fields) con los tipos carrespondientes que nuestra consulta(query) o mutación(mutation) necesita. {article-ph}

# Dos clases de type en GraphQL para cada tabla. {sub-title-ph}

 1. El primer tipo(type) es el de salida de datos, es decir; cuando nosotros hacemos una consulta para obtener datos, utilizamos únicamente el esquema que valida los tipos de salida de datos. {article-ph}

- Ejemplo: Si queremos obtener un producto en específico, tendriamos que utilizar el modelado de salida con todos los tipos de campos(fields) de un producto. {article-ph}  

 2. Y el segundo tipo(type) es el de entrada de datos, es muy simple de entender, cuando hacemos una mutación a nuestra base de datos el validará solamente los tipos de campos que están definidos en el esquema de entrada de datos. {article-ph}

- Ejemplo: Si queremos agregar un nuevo producto, tendriamos que hacer una mutación ingresando los datos del producto, y así usando el modelado de entrada que valida todos los campos que se le definió. {article-ph}


# Definiendo los tipos a cada campo(fields) {sub-title-ph}

Ahora vamos a pasar a crear dentro de la carpeta raiz del proyecto la carpeta graphql, donde dentro de ella vamos a definir los tipos, consultas y mutaciones, y nuestro esquema principal. {article-ph}

Dentro de la carpeta graphql creamos la carpeta types y dentro el archivo todo.js con lo siguiente: {article-ph}

nodejs-graphql/graphql/types/todo.js {folder-code center}

```javascript
import { 
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLBoolean
} from 'graphql'


export default new GraphQLObjectType({
  name: 'todo',
  fields: {
	id: {
	  type: GraphQLID,
	  description: 'Todo id'
	},
	title: {
	  type: GraphQLString,
	  description: 'Task title'
	},
	completed: {
	  type: GraphQLBoolean,
	  description: 'if the task is completed'
	}
  }
})

```

- GraphQLObjectType: Nos permite definir los campos y sus tipos. {article-ph}

- GraphQLID: permite validar un id. {article-ph}

- GraphQLString: Nos ayuda a validar solamente un texto. {article-ph}

- GraphQLBoolean: espera solamente true o false {article-ph}

Como pueden ver es muy similar al modelo que hicimos con mongoose, pero tienen responsabilidades distintas cada una. {article-ph}

En el objeto fields tenemos cada uno de los tipos de datos que serán validos a la hora de hacer una consulta(query) y obtener datos de nuestra API. {article-ph}

Luego dentro de la misma carpeta types creamos el archivo todo-input.js
con lo siguiente: {article-ph}

nodejs-graphql/graphql/types/todo-input.js {folder-code center}

```javascript
import { 
 GraphQLInputObjectType,
 GraphQLID,
 GraphQLString,
 GraphQLBoolean
} from 'graphql'

export default new GraphQLInputObjectType({
  name: 'todoInput',
  fields: {
    id: { 
	  type: GraphQLID 
    },
    title: { 
	  type: GraphQLString
    }
  }
})

```

En este caso definimos los tipos de campos que van a ser validos para recibir datos y modificar nuestra base de datos al hacer una mutación. {article-ph}

En nuestro caso tendremos las mutaciones add, edit, delete, y otras más que crearemos mediante vayamos avanzando. {article-ph}

Hasta aquí con este tutorial, en el siguiente vamos a crear nuestro esquema que graphql necesita y también crearemos nuestra primer consulta y mutación.
Gracias por leer este tutorial sobre graphQL y recuerda en comparti con las demas personas. :) {article-ph}
