import React from 'react'

class Author extends React.Component {
  render() {
    return <div className='container'>
      <br/>
      <div className="row middle-lg center-md center-sm center-xs">
          <div className="col-xs-5 col-sm-2 col-md-2 col-lg-2">
            <img src="http://localhost:8080/api/icons/DSC04875.JPG"/>
            <br/>
            <br/>
          </div>
          
          <div className="col-xs-10 col-sm-6 col-md-6 col-lg-6">
            <h3 className="text-left">Gamaliel Saracho</h3>
            <div className="row justify-lg justify-md justify-sm justify-xs">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            </div>
          </div>

      </div>
    </div>
  }
}

export default Author
