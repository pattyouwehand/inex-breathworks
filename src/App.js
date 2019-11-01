import React, { Component } from 'react'
import HeaderNav from './containers/HeaderNav/HeaderNav'
import Slides from './containers/Slides/Slides'
import Home from './containers/Home/Home'

class App extends Component {
  render(){
    return(
      <div className='app'>
        <HeaderNav />
        <Slides />
        <Home />
      </div>
    )
  }
}

export default App
