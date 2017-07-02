import React, { Component } from 'react'

class ThemesList extends Component {
  render() {
    const { themes } = this.props


    return <div className='themes-container'>
      <HelmetShow/>

      <div className='row align-justify'>
        {
          themes.map((theme) => {
            return <div  key={ theme.id } className='column small-12 medium-6 large-4'>
              <div className='row align-center'>
                <div className='column small-6 medium-6 large-6'>
                  <div className='container-icon-theme'>
                    <img src={ theme.cover_icon } className='icon-theme'/>
                  </div>
                </div>
              </div>

              <Link to={`/blog/${theme.namefolderpost}/${theme.namefoldertheme}`}>
                <h1 className='title-theme'>{ theme.title }</h1>
              </Link>
            </div>
          })
        }

        <Share/>
      </div>
    </div>
  }
}

export default ThemesList