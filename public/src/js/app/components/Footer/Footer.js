import React, { Component } from 'react'
    const d = new Date()
    const year = d.getFullYear()

import './style.css' 

class Footer extends Component {
	// <a href='#' target='_blank'>
	// 	<i className='fi-social-github'></i>
	// </a>



	render() {
		return <footer className='container-footer'>
        	<div className='container-footer__max'>
        		<div className='container-footer__max__content'>
	        		<div className='container-footer__max__content__description'>
			        	<p>Un blog hecho con Mucho <span className="icon-heart"></span> y <span className='icon-alarm'></span></p> 
	        		</div>

	        		<div className='container-footer__max__content__socials__buttons'>
						<div className='container-footer__max__content__socials__buttons__button'>
							<a href='#' target='_blank'>
				            	<span className="icon-github"></span>
							</a>
						</div>
						<div className='container-footer__max__content__socials__buttons__button'>
							<a href='#' target='_blank'>
				            	<span className="icon-facebook"></span>
							</a>
						</div>
						<div className='container-footer__max__content__socials__buttons__button'>
							<a href='#' target='_blank'>
				            	<span className="icon-instagram"></span>
							</a>
						</div>
						<div className='container-footer__max__content__socials__buttons__button'>
							<a href='#' target='_blank'>
				            	<span className="icon-twitter"></span>
							</a>
						</div>
						<div className='container-footer__max__content__socials__buttons__button'>
							<a href='#' target='_blank'>
					            <span className="icon-youtube2"></span>
							</a>
						</div>

	        		</div>
        		</div>
        		

        	</div>
      	</footer>
	}
}

export default Footer