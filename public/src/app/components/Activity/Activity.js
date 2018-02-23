import React, { Component } from 'react'

class Activity extends Component {

	render() {
		let styles = {
			"box-shadow":"0 0 15px #888",
			"padding-bottom":"2em"
		}
		return <div className='container'>
			<div className='row center-lg center-md center-sm center-xs'>
				<div className='col-xs-10 col-sm-7 col-md-7 col-lg-7'>
					<h4 className='text-left'>Front-end</h4>

					<div className='row center-lg center-md center-sm center-xs'>
						<div className='col-xs-6 col-sm-3 col-md-3 col-lg-3'>
							<img src='http://www.jeremyzerr.com/sites/default/files/styles/large/public/field/image/react-logo-300-transparent.png?itok=y9pW9YEk'/>
							<p className='text-icon-activity'>React</p>
						</div>
						<div className='col-xs-6 col-sm-3 col-md-3 col-lg-3'>
							<img src='https://gamalielsaracho.github.io/api/icons/github.png'/>
							<p className='text-icon-activity'>Hola</p>
						</div>
						<div className='col-xs-6 col-sm-3 col-md-3 col-lg-3'>
							<img src='https://gamalielsaracho.github.io/api/icons/nodejs.png'/>
							<p className='text-icon-activity'>Hola</p>
						</div>
						<div className='col-xs-6 col-sm-3 col-md-3 col-lg-3'>
							<img src='https://raw.githubusercontent.com/reactjs/redux/master/logo/logo.png'/>
							<p className='text-icon-activity'>Hola</p>
						</div>
						<div className='col-xs-6 col-sm-3 col-md-3 col-lg-3'>
							<img src='https://gamalielsaracho.github.io/api/icons/react.svg'/>
							<p className='text-icon-activity'>Hola</p>
						</div>
						<div className='col-xs-6 col-sm-3 col-md-3 col-lg-3'>
							<img src='https://gamalielsaracho.github.io/api/icons/nodejs.png'/>
							<p className='text-icon-activity'>Hola</p>
						</div>
						<div className='col-xs-6 col-sm-3 col-md-3 col-lg-3'>
							<img src='https://gamalielsaracho.github.io/api/icons/github.png'/>
							<p className='text-icon-activity'>Hola</p>
						</div>
					</div>

					<h4 className='text-right'>Back-end</h4>

					<div className='row center-lg center-md center-sm center-xs'>
						<div className='col-xs-6 col-sm-3 col-md-3 col-lg-3'>
							<img src='https://gamalielsaracho.github.io/api/icons/nodejs.png'/>
							<p className='text-icon-activity'>Node</p>
						</div>
						<div className='col-xs-6 col-sm-3 col-md-3 col-lg-3'>
							<img src='https://raw.githubusercontent.com/reactjs/redux/master/logo/logo.png'/>
							<p className='text-icon-activity'>Hola</p>
						</div>
					</div>

					<h4 className='text-center'>Primordial</h4>

					<div className='row center-lg center-md center-sm center-xs'>
						<div className='col-xs-6 col-sm-3 col-md-3 col-lg-3'>
							<img src='https://gamalielsaracho.github.io/api/icons/github.png'/>
							<p className='text-icon-activity'>Github</p>
						</div>
					</div>
				</div>

				<div className='col-xs-10 col-sm-5 col-md-5 col-lg-5'>
					<div>
						<img src='https://s-media-cache-ak0.pinimg.com/originals/0e/59/a2/0e59a220a62f21fa7be5cd949c54440d.gif' />
						<h4 className='text-center'>Realizando un proyecto...</h4>
					</div>
				</div>
			</div>
		</div>
	}
}

export default Activity