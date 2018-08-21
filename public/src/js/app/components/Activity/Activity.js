import React, { Component } from 'react'

import './style.css' 

class Activity extends Component {

	render() {
		let styles = {
			"box-shadow":"0 0 15px #888",
			"padding-bottom":"2em"
		}
		// /api/icons/react.svg
		return <div className='container-max'>
			<h2>Habilidades</h2>

			<div className='container-max__activities'>
				<ul className='container-max__activities__activity'>
			    	<li>JavaScript</li>
			    	<li>React</li>	
			    	<li>Node</li>	
			    	<li>Java</li>
			    	<li>Php</li>	
				</ul>
				<ul className='container-max__activities__activity'>
			        <li>Redux</li>
			    	<li>Jquery</li>	
			    	<li>Java web</li>	
			    	<li>Java escritório</li>
			    	<li>Mysql</li>
				</ul>
				<ul className='container-max__activities__activity'>
			        <li>mongodb</li>
			    	<li>c++</li>	
			    	<li>html5</li>	
			    	<li>Progressive web app</li>
			    	<li>css3</li>
				</ul>
				<ul className='container-max__activities__activity'>
					<li>Git</li>
			    	<li>Github</li>	
			    	<li>Python</li>	
			    	<li>Laravel</li>
			    	<li>Rails</li>
				</ul>				
			</div>
		</div>

	}
}

export default Activity