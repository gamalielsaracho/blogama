import React from 'react'
import Helmet from 'react-helmet'

class InfoFreelance extends React.Component {

  render() {
    return <div className='row align-center'>
      <div className='column small-12 medium-11 large-9' id='information-seo-container' data-aos='flip-left'>
        
        <div className='row align-center'>
          <div className='column small-6 medium-3 large-3 text-center align-middle'>
            <img src='http://localhost:8080/api/icons/DSC04875.JPG'/>
          </div>

          <div className='column small-12 medium-8 large-9'>
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
