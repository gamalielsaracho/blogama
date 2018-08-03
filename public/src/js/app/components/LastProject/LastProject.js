import React, { Component } from 'react'

class LastProject extends Component {
	render() {
		let styles = {
			lastProjectContainer: {
				"boxShadow":"0 0 15px #888",
				"padding":"1em"
			},
			containerImage: {
				"width": "100%",
				"height":"200px"
			},
			titleTecnologies: {
				"marginTop": "1em"
			},
			containerListTecnologies: {
				"marginLeft": "2em"
			},
			button: {
				"backgroundColor": "#F44336",
				"paddingRight": "0em",
				"paddingTop": "5px",
				"paddingBottom": "5px"
			},
			containerButtonRepository: {
				"minHeight": "226px"
			},
			linkDemo: {
				"color": "#03a9f4"
			}
		}

		return <div className='container'>
			<br/>
			<br/>
			<h3 className='text-center'></h3>

			<div style={styles.lastProjectContainer} className='row center-lg center-md center-sm center-xs'>

				<div className='col-xs-10 col-sm-6 col-md-6 col-lg-6'>
					<strong>Detalle</strong>
					<a href='#' target='_blank' style={styles.linkDemo}><h5 className='text-left'>Regalalgo</h5></a>
					
					<div className='container-icon-post'>
						<img className='icon-post' src='./api/icons/landing-page.jpg'/>
					</div>
				</div>

				<div className='col-xs-10 col-sm-6 col-md-6 col-lg-6'>
					
					<h4 style={styles.titleTecnologies}>Tecnologías Utilizadas</h4>

					<div style={styles.containerButtonRepository} className='row center-lg center-md center-sm center-xs'>
						<div className='col-xs-10 col-sm-6 col-md-6 col-lg-6'>
							<h5>Front-end</h5>
							<ul style={styles.containerListTecnologies} className='text-left'>
								<li>Html5.</li>
								<li>css3.</li>
								<li>React.</li>
								<li>Redux.</li>
								<li>React-router.</li>
							</ul>
						</div>
						<div className='col-xs-10 col-sm-6 col-md-6 col-lg-6'>
							<h5>Back-end</h5>
							<ul style={styles.containerListTecnologies} className='text-left'>
								<li>Node.</li>
								<li>Mongodb.</li>
							</ul>
						</div>
					</div>

					<a style={styles.button} className='button success'>
						<div className='row middle-lg middle-md middle-sm middle-xs'>
							<div className='col-xs-6 col-sm-6 col-md-6 col-lg-6'>
								<span>Repositorio</span>
							</div>

							<div className='col-xs-6 col-sm-6 col-md-6 col-lg-6'>
								<span><i className='fi-social-github'></i></span>
							</div>
						</div>
					</a>

				</div>

			</div>
		</div>
	}
}

export default LastProject