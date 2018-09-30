import React, { Component } from 'react'
import ReactModal from 'react-modal'

import $ from 'jquery'

import './style.css'

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

		  		response.map((project) => {
		  			if(project.id == this.props.modal.idProject) {
		  				this.setState({ 
					  		show: {
								loading: false,
								project: project
							}
					  	})

		  				console.log(project)
		  			}
		  		})

		  })
		  .catch(err => console.log(err));
		}
	}

	renderFrontEnd(tecnologies) {
		if(tecnologies) {
			return <ul>
				{
					tecnologies.map((tecnology) => {
						return <li key={tecnology.id}>
							{ tecnology.name }
						</li>
					})
				}
			</ul>
		}else {
			return <span></span>
		}
	}

	renderBackEnd(tecnologies) {
		if(tecnologies) {
			return <ul>
				{
					tecnologies.map((tecnology) => {
						return <li key={tecnology.id}>
							{ tecnology.name }
						</li>
					})
				}
			</ul>
		}else {
			return <span></span>
		}
	}

	render() {
		const { isOpen } = this.props.modal
		const { loading, project } = this.state.show 

		// console.log(this.props.modal)



		if(loading) {
			return <h1>Cargando...</h1>
		} else {
			return <div id="myModal" className="show-project-modal">

			  <div className="show-project-modal__content">
			    
			    <div className="show-project-modal__container-max">

				    <div className="show-project-modal__btn-close-container">
				      <span onClick={ () => { this.props.closeModalShowProject() } } className="close">&times;</span>
				    </div>


				    <div className="show-project-modal__images-description-container">
				   		<div className="show-project-modal__images-slider-container">
				   			<img className='container-projects-list__image' src='http://www.onextrapixel.com/wp-content/uploads/2016/01/9-StudioMeta.jpg'/>
				   		</div>

				   		<div className="show-project-modal__desciption-container">
				   			<h1>Nombre proyecto</h1>

				   			<a href='#' target='_blank'>
						    	<span className="icon-twitter"></span> 
						    	gamalielsaracho.com
							</a>

							{/*  */}
							<h2>Tecnologías utilizadas</h2>
					   		<div className="show-project-modal__tecnologies-container">
						   		<div className="show-project-modal__frontend-description">
						   			<h3>Front-end</h3>
									{
										this.renderFrontEnd(project.frontEndList)
									}	
						    	</div>

						    	<div className="show-project-modal__backend-description">
						   			<h3>Back-end</h3>
						   			{
										this.renderBackEnd(project.backEndList)
									}
						    	</div>
					    	</div>
				    	</div>
				    </div>
			    
			 	</div>

			  </div>
			</div>
		}

		

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