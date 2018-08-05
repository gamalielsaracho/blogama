import React from 'react'
// import Helmet from 'react-helmet'

class InfoFreelance extends React.Component {

  render() {
    // 
    // data-aos='flip-left'
    return <div className="mdl-grid">
        <div className="mdl-layout-spacer"></div>

        <div className="demo-card-wide mdl-card mdl-shadow--2dp mdl-cell mdl-cell--7-col mdl-cell--8-col-tablet mdl-cell--12-col-phone">
          
          <div className="mdl-grid">
            <div className="photo-freelance">
            </div>
          </div>
          
          
          <div className="mdl-card__title">
            <h2 className="mdl-card__title-text">Gamaliel Saracho</h2>
          </div>

          <div className="mdl-card__supporting-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris sagittis pellentesque lacus eleifend lacinia ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris sagittis pellentesque ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris sagittis pellentesque ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris sagittis pellentesque ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris sagittis pellentesque ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris sagittis pellentesque.
          </div>

          <div className="mdl-card__actions mdl-card--border">
            <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
              <span className="icon-facebook"></span>
            </button>
            <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
              <span className="icon-twitter"></span>
            </button>
            <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
              <span className="icon-github"></span>
            </button>
            <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
              <span className="icon-whatsapp"></span>
            </button>
          </div>

          <div className="mdl-card__menu">
            <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
              <i className="material-icons">share</i>
            </button>
          </div>
        </div>
        
        <div className="mdl-layout-spacer"></div>
    </div>
  }
}
export default InfoFreelance
