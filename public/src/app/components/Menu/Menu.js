import React, { Component } from 'react'
import { Link } from 'react-router'

class Menu extends Component {
	render() {
		return <section id='menu-container'>
	        <div className='row end-lg end-md end-sm end-xs'>

	          <div className='col-xs-12 col-sm-8 col-md-6 col-lg-6'>
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
	}
}

export default Menu