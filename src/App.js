import React, { Component } from 'react'
import './App.css'
import Logo from './img/inex-logo.jpg'

class App extends Component {
  render(){
    return(
      <div className='app'>
        <header className='App-header'>
          <h1 className='App-title'>INEX BREATHWORKS</h1>
        </header>
        <div className='main'>
          <img className='inex-logo' src={Logo} alt='logo'></img>
         </div>
         <p>text here</p>
      </div>
    )
  }
}

export default App
