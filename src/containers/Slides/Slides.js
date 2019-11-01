import React from 'react'
import { Image } from 'semantic-ui-react'
import './Slides.scss'
import banner from '../../img/banner.png'

class Slides extends React.Component {
  render(){
    return(
      <div className='slides'>
        <Image src={banner} fluid/>
      </div>
    )
  }
}

export default Slides