import HelmetShow from '../HelmetShow'

import Footer from '../Footer'
import Menu from '../Menu'

import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import routes from '../../../routes'

import MainRoutes from '../MainRoutes'

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
      return <div className="">
        
        <nav className="mdl-navigation mdl-layout--large-screen-only">
          <Link className="mdl-navigation__link" to={`/`}>Inicio</Link>
          <Link className="mdl-navigation__link" to={`/blog`}>Proyectos</Link>
          <Link className="mdl-navigation__link" to={`/blog`}>Blog</Link>
        </nav>


        <MainRoutes/>


        <Footer/>
      </div>
      
    // }

  }
}
export default App
