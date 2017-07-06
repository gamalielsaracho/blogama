import React, { Component } from 'react'
	
import LoadAnimation from '../../../app/components/LoadAnimation'

class ListProjects extends Component {
	constructor(props) {
		super(props)
		this.renderProjects = this.renderProjects.bind(this)
		// this.showProject = this.showProject.bind(this)
	}

	componentWillMount() {
		this.props.fetchProjectsL()
	}

	// showProject(projectId) {
	// 	alert('El id es: '+projectId)
	// }

	renderProjects(projects, loading) {
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
			return <div className='row center-lg center-md center-sm center-xs'>
				{
					projects.map((project) => {
						return <div className='col-xs-12 col-sm-6 col-md-4 col-lg-4' key={project.id}>
							<div className='container-icon-post'>
								<img className='icon-post' src={project.imageProject}/>
							</div>
							<h4 style={styles.nameProject} className='text-center'>{ project.name }</h4>
							<a onClick={ () => {this.props.fetchProjectL(project.id) }} style={styles.button} className='button success'>Ver Detalles</a>
							<br/>
							<br/>
						</div>
					})
				}
			</div>
		}
	}

	render() {
		const { loading, projects } = this.props.fetchProjects

		return <div className='container'>
			<br/>
			<br/>
			<h1 className='text-center'>Trabajos</h1>
			{ this.renderProjects(projects, loading) }
		</div>
	}
}

export default ListProjects