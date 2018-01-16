import React from 'react'
import Header from './header/Header'
import Main from './Main'
import Footer from './Footer'
import PropTypes from 'prop-types'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#ecf0f1'
  }
}

const Layout = ({ domainData }) =>
  <div>
    <Header />
    <div style={styles.container}>
      <Main domainData={domainData} />
      <Footer />
    </div>
  </div>

Layout.propTypes = {
  domainData: PropTypes.object.isRequired
}

export default Layout
