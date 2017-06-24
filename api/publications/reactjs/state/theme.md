# State {title-ph center}


> Cuando estamos creando una app con React, necesitamos que los componentes sean dinámicos, cuando me refiero a componentes dinámicos quiere decir que los datos de tu componente van a cambiar con el paso del tiempo. 

> En el tutorial pasado hablamos como actualizar la vista llamando cada 1 segundo a ReactDOM.render() y haciendo que se muestren los nuevos cambios.

> También tenemos que recordar que dijimos que las props son inmutables no pueden cambiar, lo cual simpre tendrán el dato que le definimos.

> En cambio el state de un componente SÍ pueden mutar cambiando de datos.

> Cada vez que un componente cambia de estado automaticamente se vuelve a hacer re-render del componente, llamando a ReactDOM.render(). 

> Es aquí es donde react saca mayor provecho al virtual DOM.

> Bien ahora voy a pasar explicar un ejemplo para que quede más claro todo este tema del estado de un componente. {article-ph}

> proyecto-react/components/Contador.js {folder-code center}

```javascript
	import React from 'react'

	class Contador extends React.Component {
		constructor(props) {
			super(props)
			this.state = { total:0 }
			this.sumar = this.sumar.bind(this)
			this.restar = this.restar.bind(this)
		}
		sumar() {
			this.setState({ total:this.state.total+1 })

		}
		restar() {
			this.setState({ total:this.state.total-1 })
		}
		render() {
			return <div>
				<h1>{ this.state.total }</h1>

				<button onClick={this.sumar}>+</button>
				<button onClick={this.restar}>-</button>
			</div>
		}
	}
	export default Contador
```

# Analizando el código {sub-title-ph}

> Dentro de nuestro constructor estamos inicializando el estado del componente Contador por medio de: {article-ph}

```javascript
	this.state = { total:0 }
```
>Lo cual total iniciará en 0. Luego definimos dos funciones que explicaremos luego. {article-ph}

```javascript
	this.sumar = this.sumar.bind(this)
	this.restar = this.restar.bind(this)
```

> Esto es de muy Buena práctica a la hora de usar funciones dentro de un componente, el .bind(this) lo que hará es que nuestras funciones al llamarse se queden dentro de nuestro componente. {article-ph}

```javascript
	<strong>{ this.state.total }</strong>
```

> Con esto llamamos al estado de nuestro componente, y lo mostrará en todo momento mientras vaya cambiando de estado. {article-ph}

```javascript
	<button onClick={this.sumar}>+</button>
	<button onClick={this.restar}>-</button>
```

> Mostramos dos botones lo cuales cada uno de ellos llamará a una función al hacer Click sobre ellos. {article-ph}

```javascript
	sumar() {
		this.setState({ total:this.state.total+1 })
	}
	restar() {
		this.setState({ total:this.state.total-1 })
	}
```

> En el caso de la función suma es para actualizar el valor del estado actual en que se encuentra total sumándole un 1, y para eso hacemos uso de this.setState({  }). {article-ph}

> Y en el caso de la función suma, restará un 1 al estado del componente cada vez que se llame. {article-ph}

> Cuando algo cambió en el nodo text del elemento h1, React DOM lo que hace es comparar los nodos de ese elemento con el mismo elemento que tenia anteriormente de ser modificado, y si no son iguales unicamente aplica la actualización al nodo del DOM que cambió.

> Haciendo re-render en la nestra vista.