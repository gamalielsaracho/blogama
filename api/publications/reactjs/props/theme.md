# Props (Properties)

> Las properties(Propiedades) son los atributos que le pasamos a los componentes cuando son llamados

> También podemos decir que las properties(Propiedades) son datos que queremos mostrar en nuestra vista y que están asociados plenamente con un componente en especifíco.

> Y algo Importante es de que las props no pueden cambiar de datos una vez que ya la definimos.

> Ejemplo:

> tenemos el componente Saludo

```javascript
	class Saludo extends React.Component {
		render() {
			return <p>Hola {this.props.nombre} {this.props.apellido}</p>
		}
	}

	export default
```

> Cuando llamamos al componente le pasamos 2 atributos -> properties, nombre y apellido 

```javascript
	ReactDOM.render(<Saludo nombre='pablo' apellido='franco'/>, document.getElementById('container'))
```

## Porque this.props ?

> Tenemos que tener en cuenta de que cuando creamos el componente Saludo lo hicimos Usando JSX.

> Y detras de JSX está funcinando javascript puro.

> Y this.props es un objecto donde se van guardando los atributos e hijos que vamos definiendo en nuestro componente al ser llamado.

> Recordar que cuando vimos JSX la estructura de React.createElement es

## React.createElement(component, props, ...childen)

> Entonces, todo lo que definimos como atributo a un componente Padre, sus hijos van a poder acceder por medio de this.props.ElAtributoQueLePaseAmiPapa

> Pero lo que estamos haciendo es esto.

```javascript
	class Saludo extends React.Component {
		render() {
			return React.createElement('p', null, `Hola ${this.props.nombre} ${this.props.apellido}`)
		}
	}


	ReactDOM.render(React.createElement(Saludo, {nombre:'pablo', apellido:'franco'}, null), document.getElementById('container'))
```

> Saludo: El componente Padre que tiene 2 atributos que son sus preperties(propiedades) 

> Y que se guanda en el objeto this.props

> p es el Hijo(children) del componente Saludo, y va poder acceder a las propiedades de su papá con this.props

# Importante :o !

> Solamente podemos pasar properties(propiedades) a los componentes que vamos creando y llamando para que sus hijos lo hereden.

> Lo que No se puede es pasarle properties a elementos del DOM como h1,p,section y demás para que sus hijos hereden esos datos.

> Esto es incorrecto
> Lo cual no va a mostra el nombre pedro ni a palo.

```javascript
class Hello extends React.Component {
  render() {
    return <div nombre='pedro'>
		<h1>Hola {this.props.nombre}</h1>
	</div>
	}
}

ReactDOM.render(<Hello />, document.getElementById('container'))
```


> La manera correcta es:

```javascript
class Hello extends React.Component {
  render() {
    return <div>
		<h1>Hola {this.props.nombre}</h1>
	</div>
	}
}

ReactDOM.render(<Hello nombre='pedro'/>, document.getElementById('container'))
```

## PropTypes

> React.PropTypes exporta una serie de validadores que pueden ser usados para hacer que tus datos recibidos desde las properties de un componente padre sean validos.

> Cuando un dato es invalido para una prop, una advertencia se mostrará en la consola de javascript.

> Algo importante que hay que tener en cuenta es de que propTypes solamente te lanzará los mensajes de errores cuando estas en model de desarrollo. 

```javascript
class Saludo extends React.Component {
  render() {
    return <h1>Hola {this.props.nombre} con Edad: {this.props.edad}</h1>
  }
}

Saludo.propTypes = {
  nombre: React.PropTypes.string.isRequired,
  edad: React.PropTypes.number
}

ReactDOM.render(<Saludo nombre='pablo' edad={32}/>, document.getElementById('container'))
```
> Como podemos ver le decimos que las props nombre sea de tipo string y sea requerido gracias a isRequired

> Y la prop edad que sea de tipo number

## Tipos de datos que podemos validar con propTypes

> Hay una gran cantidad pero las que más usadas son:

```javascript
MiComponente.propTypes = {
  optionalArray: React.PropTypes.array,
  optionalBool: React.PropTypes.bool,
  optionalFunc: React.PropTypes.func,
  optionalNumber: React.PropTypes.number,
  optionalObject: React.PropTypes.object,
  optionalString: React.PropTypes.string,
  optionalSymbol: React.PropTypes.symbol
}

```

## Props por defecto por medio de defaultProps

> Si nosotros tenemos un formulario donde le decimos al usuario que algunos datos son opcionales, podemos deplarar algunos datos por defecto a las properties de un componente.

> Ejemplo:

```javascript
	class Saludo extends React.Component {
	  render() {
	    return <h1>Hola {this.props.nombre} con Edad: {this.props.edad}</h1>
	  }
	}

	Saludo.defaultProps = {
	  nombre: 'Admin'
	}

	ReactDOM.render(<Saludo edad={32}/>, document.getElementById('container'))
```

> Lo cual el resultado en el navagador será:

```javascript
	Hola Admin con Edad: 32
```

> Bien, terminamos con este tutorial y en el siguiente vamos a estar hablando sobre los estados de nuestra 

> Gracias por leer este tutorial, recuerda en compartir con los demas. 