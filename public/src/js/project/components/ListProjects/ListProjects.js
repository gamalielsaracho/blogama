import React, { Component } from 'react'
import $ from 'jquery'

import LoadAnimation from '../../../app/components/LoadAnimation'

class ListProjects extends Component {
	constructor(props) {
		super(props)

		this.state = {
			loading: false,
			projects: null
		}

	}

	componentWillMount() {
		this.setState({ loading: true })

		if (__isBrowser__) {
		 $.get('http://localhost:3000/api/projects')
		  .then((response) => {
		  	this.setState({ loading:false, projects: response })
		  })
		  .catch(err => console.log(err));
		}

 	}


	render() {
		const { loading, projects } = this.state

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
			return <h1>Cargando....</h1>
		} else {
			return <div className='container-projects-list'>
				<h1>Proyectos</h1>
				<div className='container-projects-list__max-container'>
				{
					projects.map((project) => {
						return <div className='container-projects-list__project' key={project.id}>
							<div className='container-projects-list__image-container'>
								<img className='container-projects-list__image' src={project.imageProject}/>
							</div>
							<h4>{ project.name }</h4>
							
							<div className='container-projects-list__button-container'>
								<a onClick={ () => {this.props.fetchProjectL(project.id) }} className='container-projects-list__button'>Ver Detalles</a>
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