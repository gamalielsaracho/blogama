import React, { Component } from 'react'
import axios from 'axios'

import './style.css'

import LoadAnimation from '../../../app/components/LoadAnimation'
import ShowProject from '../ShowProject'

import { urlApi } from '../../../middleware'

class ListProjects extends Component {
	constructor(props) {
		super(props)

		this.state = {
			list: {
				loading: false,
				projects: null
			},
			modal: {
				isOpen: false,
				idProject: null
			}
		}

		this.openModalShowProject = this.openModalShowProject.bind(this)
		this.closeModalShowProject = this.closeModalShowProject.bind(this)
	
		this.renderShowProject = this.renderShowProject.bind(this)
	}


	componentWillMount() {
		this.setState({ 
			list: {
				loading: true 
			}
		})

		if (__isBrowser__) {
		 axios.get(`${urlApi}/projects/projects.json`)
		  .then((response) => {
		  	response.data = eval(response.data)

		  	this.setState({ 
		  		list: {
		  			loading:false, projects: response.data
		  		}
		  	})
		  })
		  .catch(err => console.log(err));
		}
		
 	}


 	renderShowProject() {
 		if(this.state.modal.isOpen) {
 			return <ShowProject
				modal = {this.state.modal}
				closeModalShowProject = { this.closeModalShowProject }
			/>
 		} else {
 			return <span></span>
 		}
 	}


 	openModalShowProject(idProject) {
 		// alert('showProject')
		this.setState({
			modal: {
				isOpen: true,
				idProject: idProject
			}
		})
 	}


 	closeModalShowProject() {
 		this.setState({
			modal: {
				isOpen: false,
				idProject: null
			}
		})
 	}


	render() {
		const { loading, projects } = this.state.list

		var styles = {
			button: {
				"backgroundColor": "#85ca38"
			},
			nameProject: {
				"marginTop": "1em",
				"marginBottom": "0.5em"
			}
		}

		if(loading) {
			return <LoadAnimation/>
		} else {
			return <div className='container-projects-list'>

				{ this.renderShowProject() }

				<h1>Proyectos</h1>
				<div className='container-projects-list__max-container'>
				{
					projects.map((project) => {
						return <div className='container-projects-list__project' key={project.id}>
							<div className='container-projects-list__image-container'>
								<img className='container-projects-list__image' src={project.imageProject}/>
							</div>
							<h2>{ project.name }</h2>
							<div className='container-projects-list__button-container'>
								<a onClick={ () => { this.openModalShowProject(project.id) }} className='container-projects-list__button'>Ver Detalles</a>
							</div>
						</div>
					})
				}
				</div>
			</div>
		}

	}
}

export default ListProjects