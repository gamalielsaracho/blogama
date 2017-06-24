# Virtual DOM

> React js hace uso de un dom virtual para poder mostrar en la vista los componentes que creamos y para que se puedan ver los cambios de datos, hay que aclarar que facebook no es el creador del virtual DOM ni del algoritmo diff.

# DOM model

> El virtual DOM está diseñado para crear objetos representando a los nodos del DOM, DOM model es; "Document Object Model Model"

> Se acuerdan cuando hicimos un componente con javascript puro y sin el uso de JSX? 

```
```
> Exacto, esto lo logramos gracias al virtual DOM ya que nos permite hacer una estructura de árbol en javascript que se encarga de representar el árbol de nodos del DOM real y esto se le llama Vtree(árbol virtual).

> Cada vez que el estado de un elemento cambia, se genera un nuevo Vtree con los nuevos atributos o hijos y son mostrados en el DOM real es decir, en la vista. 


# Que es y Como funciona el Virtual DOM.

> El virtual dom es una colección de modulos diseñados para representar en forma declarativa del DOM para tu aplicación.

> Funciona haciendo una copia del DOM real, y trabajamos con esa copia que es el virtual DOM.

> Cuando estamos trabajando con el virtual DOM y nuestra aplicación va cambiando de estado, cada vez que cambie se va a mostrar en nuestra vista el nuevo estado.

> Haciendo la actualización solamente del elemento que cambió sin tener que recrear de nuevo todo el DOM real, esto es lo que hace a react genial.


# Detras del virtual DOM funciona el algoritmo diff

> Cuando nuestra app cambia de estado, se crea un nuevo Vtree(arbol virtual)
> El algoritmo diff lo que hace es crear un conjunto de parches DOM, comparando entre el Vtree anterior y el Vtree actual, y si no son iguales automaticamente actualizará el arbol DOM anterior para que coincida con el nuevo Vtree.


# Mostrar componentes de React dentro del DOM 

> Ahora que ya entiendes como funciona realmente el virtual DOM que utiliza react,
vamos a pasar a explicar de como react hace uso de ese concepto y como le saca mayor provecho al usarlo.


> Como ya sabemos ReactDOM.render() es la función que llamamon para mostrar los elementos o componentes dentro de la vista del navegador.

> Ahora tenemos que hacernos esta pregunta:

## Un Elemento puede cambiar de atributo o hijo y mostrar eso en la vista?

> La respuesta es NO, los elementos que vamos creando como <h1>, <p>, <div> etc..

> Son inmutables 

> Es decir, una vez creado el elemento Ya no podrá cambiar de atributos o hijos que le definimos, lo cual los datos que se muestran en la vista siempre serán las mismas.

# Haciendo que los elementos muten y se actualizen los datos en la vista

> La unica forma de actualizar la vista es crear un crear un nuevo elemento y volver a pasarle a ReactDOM.render()


> Vamos a ver un ejemplo cuper cool que está en la misma documentación de react, se trata de un reloj.

```javascript
	function tick() {
	  const element = (
	    <div>
	      <h1>Hello, world!</h1>
	      <h2>It is {new Date().toLocaleTimeString()}.</h2>
	    </div>
	  );
	  ReactDOM.render(
	    element,
	    document.getElementById('root')
	  );
	}

	setInterval(tick, 1000);
```

> ReactDOM.render es llamado cada segundo desde un setInterval() para mostrar el cambio de cada segundo.

# React Actualiza solamente lo necesario en la vista.

![GitHub Logo](https://facebook.github.io/react/img/docs/granular-dom-updates.gif)

> Como se puede ver solamente cambia en nodo text del elemtento y lo mantiene actualizado en la vista gracias a React DOM.

> Hasta acá llegamos con este tutorial sobre el virtual DOM que utiliza react y como lo aplica y hace de que sea una libreria super cool a la hora de construir aplicaciones del lado del frontend.

> Gracias por leer este toturial, Porfavor comparte con las demas personas :)