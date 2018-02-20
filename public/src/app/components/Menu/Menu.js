import React, { Component } from 'react'
import { Link } from 'react-router'

class Menu extends Component {
	constructor(props) {
		super(props);
		this.state = {
		    windowWidth: window.innerWidth,
		    mobileNavVisible: false
	  	}
	}

	handleResize() {
	  this.setState({ windowWidth: window.innerWidth });
	}

	componentDidMount() {
	  window.addEventListener('resize', this.handleResize.bind(this));
	}

	componentWillUnmount() {
	  window.removeEventListener('resize', this.handleResize.bind(this));
	}

	navigationLinks() { // MOVIL MENU.
		return <ul className="menu row">
			<li className='column small-12'> 
				<Link to='https://gamalielsaracho.github.io/' className='text-center'>Inicio</Link>
			</li>
			<li className='column small-12'>
				<a href="#" className='text-center'>Proyectos</a>
			</li>
			<li className='column small-12'>
		      <Link to='https://gamalielsaracho.github.io/blog' className='text-center'>Blog</Link>
			</li>
			<li className='column small-12'>
		      <Link to={`/tienda`} className='text-center'>Tienda</Link>
			</li>
		</ul>
	}

	renderMobileNav() {
	  if(this.state.mobileNavVisible) {
	    return this.navigationLinks();
	  }
	}

	handleNavClick() {
	  if(!this.state.mobileNavVisible) {
	    this.setState({mobileNavVisible: true});
	  } else {
	    this.setState({mobileNavVisible: false});
	  }
	}

	renderNavigation() {
	  if(this.state.windowWidth <= 631) {
	    return <div>
	        <ul className="menu align-right">
	            <a className='btn-menu' onClick={this.handleNavClick.bind(this)}>
					<i className="fi-list"></i>
	            </a>
			</ul>

	        { this.renderMobileNav() }
	    </div>

	  } else {
	    return <ul className="menu">
			<li>
				<Link to='https://gamalielsaracho.github.io/'>Inicio</Link>
			</li>
			<li>
				<a href="#">Proyectos</a>
			</li>
			<li>
				<Link to='https://gamalielsaracho.github.io/blog'>Blog</Link>
			</li>
			<li>
				<Link to={`/tienda`}>Tienda</Link>
			</li>
		</ul>
	  }
	}

	render() {
		console.log(this.state)
		return <section id='menu-container'>

	        <div className='row end-lg end-md end-sm end-xs'>

	          <div className='col-xs-12 col-sm-8 col-md-6 col-lg-6'>
	          
	            { this.renderNavigation() }

	          </div>
	    	</div>

      </section>
	}
}

export default Menu