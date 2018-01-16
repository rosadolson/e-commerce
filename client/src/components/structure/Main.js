import React from 'react'
import About from '../pages/About'
import Home from '../pages/Home'
import ProductsContainer from '../pages/products/ProductsContainer'
import AddProductContainer from '../pages/products/AddProductContainer'
import {Route} from 'react-router-dom'
import PropTypes from 'prop-types'

const Main = ({ domainData }) =>
  <main>
    <Route exact path='/' component={Home} />
    <Route path='/about' component={About} />
    <Route path='/products' render={() => <ProductsContainer domainData={domainData} />} />
    <Route path='/add-product' component={AddProductContainer} />
  </main>

Main.propTypes = {
  domainData: PropTypes.object.isRequired
}

export default Main
