import React from 'react'
import NavItem from './NavItem'
import HeaderLink from './HeaderLink'
import PropTypes from 'prop-types'

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

const Header = ({ domainData }) =>
  <header style={styles.container}>
    <nav>
      <NavItem exact to='/'> Home </NavItem>
      <NavItem to='/about'> About </NavItem>
      <NavItem to='/products'> Products </NavItem>
      <NavItem to='/add-product'> Add Products </NavItem>
      { domainData.loggedOut ? <NavItem to='/sign-up'>Sign Up</NavItem> : null }
      { domainData.loggedOut ? <NavItem to='/login'>Login</NavItem> : null }
      { domainData.loggedIn ? <NavItem to='/cart'>Cart</NavItem> : null}
      { domainData.loggedIn ? <NavItem to='/orders'>Orders</NavItem> : null}
      { domainData.loggedIn ? <HeaderLink onClick={domainData.logoutUser}>Logout</HeaderLink> : null }
      { domainData.loggedIn ? <HeaderLink>{domainData.user.local.email}</HeaderLink> : null}

    </nav>
  </header>

Header.propTypes = {
  domainData: PropTypes.object.isRequired
}

export default Header
