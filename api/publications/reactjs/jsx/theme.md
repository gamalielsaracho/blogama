# JSX

> Cuando escribimos un componente en react como este:

```
```

> No estamos escribiendo strings Ni tampoco HTML dentro de un archivo .js
> Si no que estamos escribiendo código JSX.
> Y detras de JSX está funcionando la potencia de javaScript. 

# JSX nos ayuda un Montón.!

> Porque gracias a él podemos tener un código sumamente legible y facil de construir nuestros componentes para las vistas.

> JSX se encarga de crear los elementos <h1>,<div>, <p> ..etc, que vamos definiendo en nuestros componentes de React.

# Como crea los elementos 

> Lo hace con React.createElement() que es netamente javascript.

```
	const element = React.createElement(
	  'h1',
	  { className: 'greeting' },
	  'Hello, world!'
	);

```
> Igual a:

```
	<h1>Hello, world!</h1>

```

> Gracias a esto React reconoce los elementos que vamos creando dentro de nuestros componentes.

> React utiliza esos objectos para construir el DOM y mantenerlo actualizado.

> Recordemos que react utiliza un dom virtual, Bueno, createElement pertenece al virtual dom. Esto lo hablaremos en el siguiente tutorial.

# Estructura de la función createElement

> La estructura el la siguiente: 

```
	React.createElement(component, props, ...children)
```

1. component: Es el componente o elemento que queremos crear, div, h1, p, ..etc.

2. props: Esto son los atributos que le vamos pasando a los elementos.

3. Son los hijos que irán dentro del componente.

> Creamos un ejemplo usando todos los paramentros.

> Usando JSX: 

```
	<div className='contenedor'>
		<h1>Hola mundo></h1>
	</div>
```

> Javascript puro:

```
	React.createElement('div', { className:'contenedor' }, React.createElement('h1', null, 'Hola mundo'))
```

> Como pueden ver creamos 2 elementos, un div con una clase y que tiene como hijo(children) un elemento h1 que esta dentro del div, notece que cuando creamos el elemento h1 en la parte de props le estamos pasando null ya que no le estamos pasando atributos, y en la parte de ...children le pasamos lo que queremos tenga dentro del h1, en este caso; Hola mundo


# Hacer código javascript dentro de Un Componente

> Las expresiones en JSX serian cuando nosotros escribimos código javascript dentro de nuestro componente de react.

.Ejemplo: un if, else, for, switch, case, while, do-while ..etc.

> Y la regla es poner dentro de {} ese código javascript, como lo vemos aquí:

```
```

> JSX también son expresiones realmente, Porque despues de que se transpiló, automaticamente se covierte en objetos javascript.

> Y tú puedes usar código JSX destro de las expresiones de javascript sin ningún problema, dentro de un if, else, un for y demas.

> Paso 1: Escribimos nuestro componente hola.js
> Esto es código JSX.

```

```

> Paso 2: El código JSX se compila y se convierte en puros objetos javaScript.
> Esto es javaScript puro.

```

```

> En siguiente tutorial vamos a estar hablando sobre como podemos mostrar en el Navegador los elemntos que creamos con JSX.
