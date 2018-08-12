import React, { Component } from 'react'
    const d = new Date()
    const year = d.getFullYear()

class Footer extends Component {
	// <a href='#' target='_blank'>
	// 	<i className='fi-social-github'></i>
	// </a>



	render() {
		return <footer className='container-footer'>
        	<div className='container-footer__max'>
        		<div className='container-footer__max__content'>
	        		<div className='container-footer__max__content__description'>
			        	<p>Un blog hecho con Mucho Amor y Tiempo<span><i className='fi-heart'></i></span></p> 
	        		</div>

	        		<div className='container-footer__max__content__socials__buttons'>
						<div className='container-footer__max__content__socials__buttons__button'>
							<a href='#' target='_blank'>
				            	<span className="icon-facebook"></span>
							</a>
						</div>
						<div className='container-footer__max__content__socials__buttons__button'>
							<a href='#' target='_blank'>
				            	<span className="icon-twitter"></span>
							</a>
						</div>
						<div className='container-footer__max__content__socials__buttons__button'>
							<a href='#' target='_blank'>
					            <span className="icon-github"></span>
							</a>
						</div>
						
	        		</div>
        		</div>
        		

        	</div>
      	</footer>
	}
}

export default Footer