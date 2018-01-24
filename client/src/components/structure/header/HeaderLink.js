import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  link: {
    color: 'white',
    textDecoration: 'none',
    padding: '25px',
    fontFamily: 'Roboto, sans-serif'
  }
}

const HeaderLink = ({ onClick, children }) =>
  <a style={styles.link} onClick={onClick}>{children}</a>

HeaderLink.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
}

export default HeaderLink
