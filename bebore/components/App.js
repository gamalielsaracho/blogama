import React from 'react'
import { Link } from 'react-router'
import HelmetShow from './HelmetShow'

class App extends React.Component {
  render() {
    const d = new Date()
    const year = d.getFullYear()

    return <div>
      <HelmetShow title='Gamaliel Saracho Programador javascript tanto del backend como el frotend' 
          description='Me gusta enseñar a los de demás sobre lo que hago y como ayudarlos' 
          image_facebook='home.jpg' 
          image_twitter='home.jpg' 
          image_google='home.jpg'/>

      <section id='menu-container'>
        <div className='row align-justify'>

          <div className='column small-12 medium-8 large-8 '>
            <ul className="menu show-for-small-only align-right">
              <a className='btn-menu'>
                <i className="fi-list"></i>
              </a>
            </ul>

            <nav className='showMyMenu'>
              <ul className="menu row show-for-small-only">
                  <li className='column small-12'> 
                      <Link to={`/`} className='text-center'>Inicio</Link>
                  </li>
                  <li className='column small-12'>
                    <a href="#" className='text-center'>Proyectos</a>
                  </li>
                  <li className='column small-12'>
                    <Link to={`/blog`} className='text-center'>Blog</Link>
                  </li>
                  <li className='column small-12'>
                    <Link to={`/tienda`} className='text-center'>Tienda</Link>
                  </li>
              </ul>
            </nav> 

            <ul className="menu show-for-medium">
              <li> 
                <Link to={`/`}>Inicio</Link>
                  </li>
              <li>
                <a href="#">Proyectos</a>
              </li>
              <li>
                <Link to={`/blog`}>Blog</Link>
              </li>
              <li>
                <Link to={`/tienda`}>Tienda</Link>
              </li>
            </ul>

          </div>
        </div>
      </section>

      { this.props.children }

      <div className='contact-container'>
        <div className='row align-center'>

          <div className='column small-12 medium-8 large-9'>
            <h4 className='frase-footer'>Todo lo puedo en Cristo que me Fortalece</h4>
          </div>

          <div className='column small-12 medium-8 large-3'>
            <div className='row align-justify'>
                <div className='column small-1'>
                  <a href='#' target='_blank'>
                    <i className='fi-social-github'></i>
                  </a>
                </div>
                <div className='column small-1'>
                  <a href='#' target='_blank'>
                    <i className='fi-social-facebook'></i>
                  </a>
                </div>
                <div className='column small-1'>
                  <a href='#' target='_blank'>
                    <i className='fi-social-twitter'></i>
                  </a>
                </div>
            </div>
          </div>
        </div>
        <p className='contact-description'>Un blog hecho con Mucho<span><i className='fi-heart'></i></span> Y <span><i className='fi-clock'></i></span></p> 
        <p className='blog-year'>© { year }</p>
      </div>
    </div>
  }
}
export default App
