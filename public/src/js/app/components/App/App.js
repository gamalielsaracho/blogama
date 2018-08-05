import HelmetShow from '../HelmetShow'

import Footer from '../Footer'
import Menu from '../Menu'

import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import routes from '../../../routes'


import LoadAnimation from '../LoadAnimation'

class App extends React.Component {

  // componentDidMount() {
  //   setTimeout(() => this.props.readyApp(), 1500);
  // }

  render() {
      

    // const { loading } = this.props.page

    // if(loading) {
    //   return <h1>Cargando...</h1>
    // } else {
      return <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        
        <header className="mdl-layout__header">
          <div className="mdl-layout__header-row">
            <span className="mdl-layout-title"></span>
            <div className="mdl-layout-spacer"></div>
            <nav className="mdl-navigation mdl-layout--large-screen-only">
              <Link className="mdl-navigation__link" to={`/`}>Inicio</Link>
              <Link className="mdl-navigation__link" to={`/blog`}>Proyectos</Link>
              <Link className="mdl-navigation__link" to={`/blog`}>Blog</Link>

            </nav>
            <div className="mdl-layout-spacer"></div>

          </div>
        </header>
        <div className="mdl-layout__drawer mdl-layout--small-screen-only">
          <span className="mdl-layout-title"></span>
          <br/>
          <nav className="mdl-navigation">
              <Link className="mdl-navigation__link" to={`/`}>Inicio</Link>
              <Link className="mdl-navigation__link" to={`/blog`}>Proyectos</Link>
              <Link className="mdl-navigation__link" to={`/blog`}>Blog</Link>
             
          </nav>
        </div>


        <main className="mdl-layout__content">
          <Switch>
          { 
            routes.map(({path, exact, component: C, ...rest}) => {
              return <Route 
                key={path}
                path={path}
                exact={exact}
                render={(props) => (
                  <C {...props} {...rest} />
                )}
              />
            })
          }
          </Switch>

          <Footer/>
        </main>
    </div>
      
    // }

  }
}
export default App
