import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import $ from 'jquery'

import './style.css'

class Menu extends Component {
	constructor(props) {
		super(props);
		this.state = {
		    windowWidth: __isBrowser__ ? window.innerWidth : null,
		    mobileNavVisible: false
	  	}
	}

	// componentDidMount

	handleResize() {
		if (__isBrowser__) {

	  this.setState({ windowWidth: window.innerWidth });
		}
	}

	componentDidMount() {
		if (__isBrowser__) {
	  window.addEventListener('resize', this.handleResize.bind(this));
			
		}

	//   $(document).ready(mainMenu)

	// 	function mainMenu() {
	// 		$('#btn-menu').click(function() {
	// 			$('.enlaces').toggle()
	// 		})
	// 	}

	//   // $('#btn-menu').click(() => {
	//   // 	alert('Hola.')
	//   // })
	}

	componentWillUnmount() {
		if (__isBrowser__) {

	  window.removeEventListener('resize', this.handleResize.bind(this));
		}
	}

	navigationLinks() { // MOVIL MENU.
		return <nav className='menu__container-max'>
			<ul className='menu__container-buttons'>
				<Link onClick={this.handleNavClick.bind(this)} className="menu__button" to={`/`}>Inicio</Link>
				<Link onClick={this.handleNavClick.bind(this)} className="menu__button" to={`/blog`}>Proyectos</Link>
				<Link onClick={this.handleNavClick.bind(this)} className="menu__button" to={`/blog`}>Blog</Link>
			</ul>
		</nav>
	}

	renderMobileNav() {
	  if(this.state.mobileNavVisible) {
	    return this.navigationLinks();
	  }
	}

	handleNavClick() {
	  if(!this.state.mobileNavVisible) {
	    this.setState({ mobileNavVisible: true });
	  } else {
	    this.setState({ mobileNavVisible: false });
	  }
	}

	renderNavigation() {
	  if(this.state.windowWidth <= 635) {
	    return <div className='menu'>
	    	<div className='menu__btn-icon-container'>
	    		<span onClick={this.handleNavClick.bind(this)} className="icon-paragraph-justify"></span>
	    	</div>

	        { this.renderMobileNav() }
	    </div>

	  } else {
	    return <div className='menu'>
	    	{ this.navigationLinks() }
	    </div>
	  }
	}

	render() {
		console.log(this.state.windowWidth)

		return this.renderNavigation()
	}

	// render() {
	// 	console.log(this.state)
	// 	return <section id='menu-container'>

	//         <div className='row end-lg end-md end-sm end-xs'>

	//           <div className='col-xs-12 col-sm-8 col-md-6 col-lg-6'>

	//             { this.renderNavigation() }

	//           </div>
	//     	</div>

 //      </section>
	// }


	// return <div id='header'>
	// 	<nav className='menu'>
	//
	// 		<div className='container-logo-btnShowMenu' id='btn-menu'>
	// 			<i className="fi-list"></i>
	// 		</div>
	//
	// 		<div className='enlaces'>
	// 			<li className='enlaces_btn'>
	// 				<Link to={`/`}>Inicio</Link>
	// 			</li>
	// 			<li className='enlaces_btn'>
	// 				<a href="#">Proyectos</a>
	// 			</li>
	// 			<li className='enlaces_btn'>
	// 				<Link to={`/blog`}>Blog</Link>
	// 			</li>
	// 			<li className='enlaces_btn'>
	// 				<Link to={`/tienda`}>Tienda</Link>
	// 			</li>
	// 		</div>
	//
	// 	</nav>
	// </div>
}

export default Menu
