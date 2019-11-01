import React from 'react'
import { Image, Menu } from 'semantic-ui-react'
import './HeaderNav.scss'
import logo from '../../img/inex-logo.jpg'

class HeaderNav extends React.Component {
  render(){
    return(
      <Menu borderless className='top-menu' fixed='top'>
        <Menu.Item header className='logo'>
          <Image src={logo} size='tiny'/>
        </Menu.Item>
        <Menu.Menu className='nav-container'>
          <Menu.Item className='header-title'>INEX Breathworks</Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item href='#home'>Home</Menu.Item>
            <Menu.Item href='#about'>About</Menu.Item>
            <Menu.Item href='#services'>Services</Menu.Item>
            <Menu.Item href='#news'>News</Menu.Item>
            <Menu.Item href='#contact'>Contact</Menu.Item>
            <Menu.Item></Menu.Item>
          </Menu.Menu>
        </Menu.Menu>
      </Menu>
    )
  }
}
export default HeaderNav