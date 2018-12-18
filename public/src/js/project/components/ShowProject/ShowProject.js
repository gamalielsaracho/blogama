import React, { Component } from 'react'
import ReactModal from 'react-modal'

import LoadAnimation from '../../../app/components/LoadAnimation'

import $ from 'jquery'

import { urlApi } from '../../../middleware'

import './style.css'

class ShowProject extends Component {
	constructor(props) {
		super(props)
		this.renderFrontEnd = this.renderFrontEnd.bind(this)
		this.renderBackEnd = this.renderBackEnd.bind(this)
		
		this.state = {
			show: {
				loading: false,
				project: null
			}
		}
	}

	componentWillMount() {
		this.setState({ 
			show: {
				loading: true
			}
		})


		if (__isBrowser__) {
		 $.get(`${urlApi}/projects/projects.json`)
		  .then((response) => {
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
			return <LoadAnimation/>
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

				   			<a href='/' target='_blank'>
						    	<span className='icon-new-tab'></span> gamalielsaracho.com
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
	}
}

export default ShowProject