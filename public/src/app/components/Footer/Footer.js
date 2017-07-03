import React, { Component } from 'react'
    const d = new Date()
    const year = d.getFullYear()

class Footer extends Component {

	render() {
		return <div className='contact-container'>
        	<div className='row center-lg center-md center-sm center-xs'>

	          <div className='col-xs-5 col-sm-5 col-md-5 col-lg-5'>
	            <div className='row justify-lg justify-md justify-sm center-xs'>
	                <div className='col-xs-3 col-sm-2 col-md-1 col-lg-1'>
	                  <a href='#' target='_blank'>
	                    <i className='fi-social-github'></i>
	                  </a>
	                </div>
	                <div className='col-xs-3 col-sm-2 col-md-1 col-lg-1'>
	                  <a href='#' target='_blank'>
	                    <i className='fi-social-facebook'></i>
	                  </a>
	                </div>
	                <div className='col-xs-3 col-sm-2 col-md-1 col-lg-1'>
	                  <a href='#' target='_blank'>
	                    <i className='fi-social-twitter'></i>
	                  </a>
	                </div>
	            </div>
	          </div>
	        </div>
	        <p className='contact-description'>Un blog hecho con Mucho<span><i className='fi-heart'></i></span> Y <span><i className='fi-clock'></i></span></p> 
	        <p className='blog-year'>© { year }</p>
      </div>
	}
}

export default Footer