import React from 'react'
// import Helmet from 'react-helmet'

// import './estilo.sass'
import './style.css'

import imageFreelance from './gama2.jpg'


class InfoFreelance extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    // 
    // data-aos='flip-left'
    return <div className="infoFreelance">
      <div className="infoFreelance__container-max">
        <div className="photo-freelance">
        </div>

        <h1 className='infoFreelance__name'>Gamaliel Saracho</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris sagittis pellentesque lacus eleifend lacinia ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris sagittis pellentesque ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris sagittis pellentesque ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris sagittis pellentesque ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris sagittis pellentesque ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris sagittis pellentesque.
        </p>
      </div>
    </div>
  }
}
export default InfoFreelance
