import React, { Component } from 'react'
import ReactModal from 'react-modal'


class ShowProject extends Component {
	constructor(props) {
		super(props)
		this.renderFrontEnd = this.renderFrontEnd.bind(this)
		this.renderBackEnd = this.renderBackEnd.bind(this)
	}

	// componentWillMount() {
	// 	this.props.fetchProjectL(1)
	// }

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
		const { loading, modalOpened, project } = this.props.fetchProject

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
			}
		}

		if(project && modalOpened) {
			return <ReactModal isOpen={modalOpened}
			       	contentLabel="Minimal Modal Example"
			       	style={customStyles}>

			    <div style={styles.lastProjectContainer}>
					<div className='row end-lg end-md end-sm end-xs'>
						<span onClick={() => { this.props.closeModalFetchProject() }}><i className='fi-x'></i></span>
					</div>

					<div className='row center-lg center-md center-sm center-xs'>

						<div className='col-xs-12 col-sm-6 col-md-6 col-lg-6'>
							<a><h5 className='text-left'>{ project.name }</h5></a>
							<div className='container-icon-post'>
								<img className='icon-post' src={ project.imageProject }/>
							</div>
						</div>

						<div className='col-xs-12 col-sm-6 col-md-6 col-lg-6'>
							
							<h4 style={styles.titleTecnologies}>Tecnologías Utilizadas</h4>

							<div className='row center-lg center-md center-sm center-xs'>
								<div className='col-xs-10 col-sm-6 col-md-6 col-lg-6'>
									<h5>Front-end</h5>
									<ul style={styles.containerListTecnologies} className='text-left'>
										{
											this.renderFrontEnd(project.frontEndList)	
										}
									</ul>
								</div>
								<div className='col-xs-10 col-sm-6 col-md-6 col-lg-6'>
									<h5>Back-end</h5>
									<ul style={styles.containerListTecnologies} className='text-left'>
										{
											this.renderBackEnd(project.backEndList)
										}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</ReactModal>
		} else {
			return <span></span>
		}

	}
}

export default ShowProject