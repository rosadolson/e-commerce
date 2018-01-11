import React from 'react'
import Header from './header/Header'
import Main from './Main'
import Footer from './Footer'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#ecf0f1'
  }
}

const Layout = () =>
  <div>
    <Header />
    <div style={styles.container}>
      <Main />
      <Footer />
    </div>
  </div>

export default Layout
