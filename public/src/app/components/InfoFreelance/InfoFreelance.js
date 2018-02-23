import React from 'react'
import Helmet from 'react-helmet'

class InfoFreelance extends React.Component {

  render() {
    return <div className='row center-lg center-md center-sm center-xs'>
      <div className='col-xs-11 col-sm-10 col-md-9 col-lg-9' id='information-seo-container' data-aos='flip-left'>
        
        <div className='row middle-lg middle-md middle-sm center-xs'>
          <div className='col-xs-6 col-sm-3 col-md-3 col-lg-3'>
            <img src='https://gamalielsaracho.github.io/api/icons/DSC04875.JPG'/>
          </div>

          <div className='col-xs-12 col-sm-8 col-md-9 col-lg-9'>
            <h1 className='name-freelance text-center'>Gamaliel Saracho</h1>
            <p className='text-history-seo'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>

      </div>
    </div>
  }
}
export default InfoFreelance
