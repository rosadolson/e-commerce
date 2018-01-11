import React from 'react'
import NavItem from './NavItem'

const styles = {
  container: {
    margin: '20px',
    display: 'flex',
    justifyContent: 'center'
  }
}

const Header = () =>
  <header style={styles.container}>
    <nav>
      <NavItem exact to='/'> Home </NavItem>
      <NavItem to='/about'> About </NavItem>
      <NavItem to='/products'> Products </NavItem>
      <NavItem to='/add-product'> Add Products </NavItem>
    </nav>
  </header>

export default Header
