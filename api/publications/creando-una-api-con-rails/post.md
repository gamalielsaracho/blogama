# Creando una Api json con ruby on rails 5 {title-ph center}

> En este post te estare mostrando de como crear una api que responda
a json , para que usar los datos de tus aplicacion ya sea web o movile, de una manera más facil.{article-ph}

### Controladores {sub-title-ph}
> Vamos a crear 2 controladores para manejar las vistas de nuestra api, creamos el archivo publications_controller.rb y controller2.rb como se muestra aquí {article-ph}


![GitHub Logo](https://hosting.3bro.info/wp-content/uploads/2018/06/nodejs-34c5f8cc37f0756108c490a903d80176.png)

> app/controllers/publications_controller.rb {folder-code}

```
  before_action :set_publication, except: [:index,:new,:create]

  def index
    # @publications = Publication.all

    # Muestra todas las publicaciones de forma descendente.
    @publications = Publication.order(created_at: :desc)
  end

  def show
    @theme=Theme.new
  end

  def new
    @publication=Publication.new
  end
```


# Modelo vista Controlador {sub-title-ph}
  1. Stringify the HTML tree being careful not to wreck whitespace where whitespace is important (surrounding inline elements for example). {article-ph}
  
  2. Parse the markdown into a JsonML tree. Any references found in the parsing are stored in the attribute hash of the root node under the key `references`. {article-ph}



```javascript
  import React from 'react'
  import { Provider } from 'react-redux';
  import ReactDOM from 'react-dom'
      // routes.
  import { Router, browserHistory } from 'react-router'
  import routes from './routes'

  import Redes from './components/Redes'
}
```

```javascript
  function fancyAlert(arg) {
    if(arg) {
      $.facebox({div:'#foo'})
    }
  }
  if(true) {
    console.log('hola mundo')
  }
```
