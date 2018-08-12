import React, { Component } from 'react'
import ReactModal from 'react-modal'

import $ from 'jquery'

class ShowProject extends Component {
	constructor(props) {
		super(props)
		this.renderFrontEnd = this.renderFrontEnd.bind(this)
		this.renderBackEnd = this.renderBackEnd.bind(this)

		// this.openModal = this.openModal.bind(this)

		this.state = {
			show: {
				loading: false,
				project: null
			}
		}
	}


	// openModal() {
	// 	this.setState({ isOpen: true })
	// }

	// componentDidMount() {
 		
 // 	}

	componentWillMount() {
		this.setState({ 
			show: {
				loading: true
			}
		})

		if (__isBrowser__) {
		 $.get('http://localhost:3000/api/projects')
		  .then((response) => {
		  		console.log('el id es---->')
		  		console.log(this.props.modal.idProject)

		  		console.log(response)
		  	this.setState({ 
		  		show: {
					loading: false,
					project: response
				}
		  	})
		  })
		  .catch(err => console.log(err));
		}
	}

	renderFrontEnd(tecnologies) {
		if(tecnologies) {
			return <div>
				{
					tecnologies.map((tecnology) => {
						return <li key={tecnology.id}>
							{ tecnology.name }
						</li>
					})
				}
			</div>
		}else {
			return <span></span>
		}
	}

	renderBackEnd(tecnologies) {
		if(tecnologies) {
			return <div>
				{
					tecnologies.map((tecnology) => {
						return <li key={tecnology.id}>
							{ tecnology.name }
						</li>
					})
				}
			</div>
		}else {
			return <span></span>
		}
	}

	render() {
		const { isOpen } = this.props.modal

		// console.log(this.props.modal)

		const customStyles = {
			// overlay : {
			//     position: '',
			//     // top: 0,
			//     // left: 0,
			//     // right: 0,
			//     // bottom: 0,
			//     // backgroundColor: 'rgba(255, 255, 255, 0.75)'
			// },
		    content : {
			    top: '51%',
			    left: '50%',
			    right: 'auto',
			    bottom: 'auto',
			    height: '100vh',
			    marginRight: '-50%',
			    transform: 'translate(-50%, -50%)',
			    border: 'none',
			    background: 'none'
		  	}
		}

		let styles = {
			lastProjectContainer: {
				"box-shadow":"0 0 10px #888",
				"padding":"1em",
				"background": "#fff"
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
				"backgroundColor": "#03a9f4",
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
				// <h1 onClick={ () => { this.props.closeModalShowProject() } }>cerrar</h1>

		return <div id="myModal" className="mi-modal">

		  <div className="modal-content">
		    <div className="modal-header">
		      <span onClick={ () => { this.props.closeModalShowProject() } } className="close">&times;</span>
		      <h2>Modal Header</h2>
		    </div>
		    <div className="modal-body">
		      <p>Some text in the Modal Body</p>
		      <p>Some other text...</p>
		    </div>
		    <div className="modal-footer">
		      <h3>Modal Footer</h3>
		    </div>
		  </div>

		</div>
		

		// if(loading && !project) {
			// return <div>
			
			// </div>
		// } else {
		// 	 //    <div style={styles.lastProjectContainer}>
		// 		// 	<div className='row end-lg end-md end-sm end-xs'>
		// 		// 		<span onClick={() => { this.props.closeModalFetchProject() }}><i className='fi-x'></i></span>
		// 		// 	</div>

		// 		// 	<div className='row center-lg center-md center-sm center-xs'>

		// 		// 		<div className='col-xs-12 col-sm-6 col-md-6 col-lg-6'>
		// 		// 			<strong>Detalle</strong>
		// 		// 			<a style={styles.linkDemo}><h5 className='text-left'>{ project.name }</h5></a>
							
		// 		// 			<div className='container-icon-post'>
		// 		// 				<img className='icon-post' src={ project.imageProject }/>
		// 		// 			</div>
		// 		// 		</div>

		// 		// 		<div className='col-xs-12 col-sm-6 col-md-6 col-lg-6'>
							
		// 		// 			<h4 style={styles.titleTecnologies}>Tecnologías Utilizadas</h4>

		// 		// 			<div style={styles.containerButtonRepository} className='row center-lg center-md center-sm center-xs'>
		// 		// 				<div className='col-xs-10 col-sm-6 col-md-6 col-lg-6'>
		// 		// 					<h5>Front-end</h5>
		// 		// 					<ul style={styles.containerListTecnologies} className='text-left'>
		// 		// 						{
		// 		// 							this.renderFrontEnd(project.frontEndList)	
		// 		// 						}
		// 		// 					</ul>
		// 		// 				</div>
		// 		// 				<div className='col-xs-10 col-sm-6 col-md-6 col-lg-6'>
		// 		// 					<h5>Back-end</h5>
		// 		// 					<ul style={styles.containerListTecnologies} className='text-left'>
		// 		// 						{
		// 		// 							this.renderBackEnd(project.backEndList)
		// 		// 						}
		// 		// 					</ul>
		// 		// 				</div>

		// 		// 			</div>

		// 		// 			<a style={styles.button} className='button success'>
		// 		// 				<div className='row middle-lg middle-md middle-sm middle-xs'>
		// 		// 					<div className='col-xs-6 col-sm-6 col-md-6 col-lg-6'>
		// 		// 						<span>Repositorio</span>
		// 		// 					</div>

		// 		// 					<div className='col-xs-6 col-sm-6 col-md-6 col-lg-6'>
		// 		// 						<span><i className='fi-social-github'></i></span>
		// 		// 					</div>
		// 		// 				</div>
		// 		// 			</a>

		// 		// 		</div>
		// 		// 	</div>
		// 		// </div>
		// 	return <span></span>
		// }

	}
}

export default ShowProject