import React from 'react'

class Author extends React.Component {
  render() {
    return <div className="row align-center">
      <div className="column small-12 medium-12 large-9">

        <div className="row align-center">
          <div className="column small-4 medium-3 large-3">
            <img className="image-author" src="http://localhost:8080/api/icons/DSC04875.JPG"/>
          </div>
          
          <div className="column small-12 medium-8 large-9 align-middle">
            <h1 className="name-freelance text-center">Gamaliel Saracho</h1>
            <p className="text-history-seo">
              Lorem ipsum dolor sit amet,  aliqua.
              Ut enim ad minim veniam, exercitation ullamco laboris nisi ut aliquip ex 
              ea commodo consequat quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </p>
          </div>
        </div>

      </div>
    </div>
  }
}

export default Author
