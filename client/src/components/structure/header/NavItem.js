import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const styles = {
  link: {
    color: 'white',
    textDecoration: 'none',
    padding: '25px',
    fontFamily: 'Roboto, sans-serif'
  },
  active: {
    color: '#bdc3c7'
  }
}

const NavItem = ({ to, children, exact }) =>
  <NavLink activeStyle={styles.active} style={styles.link} exact={exact} to={to}> {children} </NavLink>

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired
}

NavItem.defaultProps = {
  exact: false
}

export default NavItem
