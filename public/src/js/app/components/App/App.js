import HelmetShow from '../HelmetShow'

import Footer from '../Footer'
import Menu from '../Menu'

import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import routes from '../../../routes'

import MainRoutes from '../MainRoutes'

import LoadAnimation from '../LoadAnimation'

import './style.css'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
  }


  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 2000);
  }

  render() {
    if(this.state.loading) {
      return <LoadAnimation/>
    } else {
      return <div className="">
        
        <Menu/>
        <br/>
        <br/>
        <br/>

        <MainRoutes/>

        <Footer/>
      </div>
      
    }

  }
}
export default App
