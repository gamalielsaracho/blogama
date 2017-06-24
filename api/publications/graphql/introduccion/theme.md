# Introducción a GraphQL {title-ph center}

GraphQL es un lenguaje de consulta para APIs fue diseñado para construir aplicaciones del lado del cliente proporcionando una intuitiva y flexible sintexis, fue creado por facebook en el 2012 y actualmente lo usa, 
está pensado para hacer consultas y enviarlos desde el lado del frontend y obtener unicamente los datos que pedí, ni más datos ni menos datos, esto es lo genial de graphQL que mejora el rendimiento de nuestras aplicaciones siendo rápidos y estables porque ellas tienen el control de los datos que reciben y no el servidor. {article-ph}

Unas de las caracteriscas de GraphQL es que teniendo un performance genial, es sumamente remocomendable para Aplicaciones moviles. {article-ph}

# Con que lenguaje o base de datos puedo usarlo.? {sub-title-ph}

 Muy buena preguanta, graphQL es totalmente independiente del lenguaje o base de datos que utilices, lo cual puedes usarlo con el que te sientas más cómodo. {article-ph}

 También tienes que tener en cuenta de que si empiezas a usar GraphQL en tu Backaend No es necesario modificar tus consultas a la base de datos. {article-ph}

# Adios a tener 2 o 16 urls para cada petición {sub-title-ph}

Cuado tenes una API con graphQL NO estamos teniendo una típica API Rest, aquí empiezan a cambiar las cosas de una manera genial.! lo común cuando construimos una API Rest es de que tenemos que tener una url para cada consulta para poder usarlo en el fronted en cambio.
Una Api con GraphQL no necesita tener muchas urls para cada consulta, solamente basta con tener una url y listo.!! {article-ph}

GraphQL APIs obteniene todos los datos que tu aplicación necesita en un simple request. {article-ph}


![Gráfico graphql en funcionamiento](http://localhost:8080/api/publications/graphql/introduccion/images/graphql-graphic.png)

# Lo que GraphQL utiliza {sub-title-ph}

1. Schema: Se encargan de modelar cada uno de los campos de nuestra tabla, según el tipo ya sea (String, boolean, etc.), esto aumenta la seguridad ya que tenemos 2 esquemas, uno para modelar todos los datos de salida, y el otro para modelar los tipos de datos que van a entrar. {article-ph}

2. Query: Una consulta (query) se encarga de unicamente tirarte datos, recuerda, solamente darte los datos que pediste. {article-ph}

Una consulta(query) se hace de la siguiente manera: {article-ph}

```javascript
	{
	  usuario {
	    nombre
	    amigos
	  }
	}
```

Esto retornaría lo siguiente: {article-ph}

```javascript
	{
	  "data": {
	  	"usuario": {
	  	  "nombre":"Pedro",
	  	  "amigos":[
	  	  	{
	  	  	  "nombre":"Carlos rivas"
	  	  	},
	  	  	{
	  	  	  "nombre":"Marta peralta"
	  	  	}
	  	  ]
	    }
	  }
	}
```

3. Mutation: Una mutación su trabajo es modificar tu base de datos, es decir;
si queremos agregar, editar, o eliminar algo de nuestra base de datos vamos a tener que usar mutaciones. {article-ph}

Una mutación(mutation) se hace de la siguiente manera: {article-ph}

```javascript
	{
	  agregarUsuario(nombre:"Marcos franco") {
	    nombre
	    amigos
	  }
	}
```

Una vez que se ejecutó esta mutación, el nuevo usuario se guarda en nuestra base de datos, como tiene los campos(fields) nombre y amigos retornará: {article-ph}

```javascript
	{
	  "data": {
	  	"usuario": {
	  	  "nombre":"Pedro",
	  	  "amigos":[]
	    }
	  }
	}
```

## NO te preocupes si no entienes nada, es normal, a mi también me paso. {article-ph}
## Mediante vamos avanzando con los tutoriales, se te van a ir aclarando mas las cosas. (Tranquilo Amigo/a) :) {article-ph}

# Hacer evolucionar tu API sin versiones {sub-title-ph}

 Al momento de que nosotros epezamos a hacer modificaciones en nuestra API GraphQL agregando nuevos campos y tipos, esto No afectará a las consultas(queries) que ya tengamos. {article-ph}
 También cuando tenemos una API lo típico es de que algunos datos de nuestra API van quedando obsoletas, pero esto se puede solucionar usando control de versiones, lo cual nuestra API con GraphQL dá nuestras apps un acceso continuo a las nuevas funciones o caracteristicas. {article-ph}


 A cuantos nos ha pasado de que estabamos usando una API Rest, y derepente #!%@@!! re rompió. {article-ph}
 Bueno, esto es lo que evita GraphQL a la hora de modificar nuestra API, esto es muy buena práctica ya que vamos a tener nuestro codigo del servidor mas mantenible. {article-ph}


# Hacer consultas en el frontend para obtener Datos {sub-title-ph}

 La gran duda que todos tienen al iniciarce con graphQL es de que como puedo consumir mi API en el lado del cliente como lo hacia con una API Rest.
 Muy simple, recuerda que nosotros enviamos consultas para obtener datos -ejemplo: Mostrar la lista de comentarios de un post.
 Solamente lo que tienes que hacer es un peticion post a tu API GraphQL, y en esa petición le envias la consulta(query) obteniendo los datos que pediste. {article-ph}


# Como puedo probar mi API si aun No tengo mi frontend??? {sub-title-ph}

Para que los tutoriales sean más didacticos vamos a crear el famoso todo list, y vamos ir creando un esquema de nuestro modelo, consultas y mutaciones para nuestro proyecto. {article-ph}

Gracias por leer este tutorial recuerda en compartir con los demas. {article-ph}





