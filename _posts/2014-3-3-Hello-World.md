---
layout: post
title: Programación en python
imagenIcono: ../images/python-logo.png
fechaPost: 17-03-2019
autorPost: Gamaliel Saracho
imagenMeta: https://cdn-images-1.medium.com/max/1200/1*H8j-yzyKCMjqzn2dRNBAVQ.png
permalink: /blog/programacion-en-python
---

{:.title-ph .center}
# Creando una Api json con ruby on rails 5

{:.article-ph}
> En este post te estare mostrando de como crear una api que responda
a json , para que usar los datos de tus aplicacion ya sea web o movile, de una manera más facil.

{:.sub-title-ph}
### Controladores

{:.article-ph}
> Vamos a crear 2 controladores para manejar las vistas de nuestra api, creamos el archivo publications_controller.rb y controller2.rb como se muestra aquí


![GitHub Logo](https://hosting.3bro.info/wp-content/uploads/2018/06/nodejs-34c5f8cc37f0756108c490a903d80176.png)

{:.folder-code}
> app/controllers/publications_controller.rb

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

{:.sub-title-ph}
# Modelo vista Controlador

{:.article-ph}
  1. Stringify the HTML tree being careful not to wreck whitespace where whitespace is important (surrounding inline elements for example). 

{:.article-ph}
  2. Parse the markdown into a JsonML tree. Any references found in the parsing are stored in the attribute hash of the root node under the key `references`.



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
