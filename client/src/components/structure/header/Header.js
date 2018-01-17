import React from 'react'
import NavItem from './NavItem'

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6C7A89',
    width: '100%',
    height: 50
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
