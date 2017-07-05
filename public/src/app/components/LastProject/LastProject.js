import React, { Component } from 'react'

class LastProject extends Component {
	render() {
		let styles = {
			lastProjectContainer: {
				"box-shadow":"0 0 15px #888",
				"padding":"1em"
			},
			containerImage: {
				"width": "100%",
				"height":"200px"
			},
			titleTecnologies: {
				"marginTop": "1em"
			}
		}

		return <div className='container'>
			<br/>
			<br/>
			<h3 className='text-center'></h3>

			<div style={styles.lastProjectContainer} className='row center-lg center-md center-sm center-xs'>

				<div className='col-xs-10 col-sm-6 col-md-6 col-lg-6'>
					<a><h5 className='text-left'>Regalalgo</h5></a>
					<div className='container-icon-post'>
						<img className='icon-post' src='https://www.hosteurope.es/blog/wp-content/uploads/2015/02/flatone.jpg'/>
					</div>
				</div>

				<div className='col-xs-10 col-sm-6 col-md-6 col-lg-6'>
					
					<h4 style={styles.titleTecnologies}>Tecnologías Utilizadas</h4>

					<div className='row center-lg center-md center-sm center-xs'>
						<div className='col-xs-10 col-sm-6 col-md-6 col-lg-6'>
							<h5>Front-end</h5>
							<ul className='text-left'>
								<li>Html5.</li>
								<li>css3.</li>
								<li>React.</li>
								<li>Redux.</li>
								<li>React-router.</li>
							</ul>
						</div>
						<div className='col-xs-10 col-sm-6 col-md-6 col-lg-6'>
							<h5>Back-end</h5>
							<ul className='text-left'>
								<li>Node.</li>
								<li>Mongodb.</li>
							</ul>
						</div>
					</div>
				</div>

			</div>
		</div>
	}
}

export default LastProject