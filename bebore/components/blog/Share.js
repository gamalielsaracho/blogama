import React from 'react'

class Share extends React.Component {
  render() {
    return <div className='row align-center share-container'>
      <div className='column small-7 medium-6 large-6'>
          <p className='text-share-content'>Compartir</p>
          <div className='fb-like' data-href='https://developers.facebook.com/docs/plugins/' data-width='100px' data-layout='button_count' data-action='recommend' data-size='small' data-show-faces='true' data-share='true'></div>
      </div>
    </div>
  }
}

export default Share
