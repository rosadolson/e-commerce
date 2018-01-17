import React from 'react'
import About from '../pages/About'
import Home from '../pages/Home'
import ProductsContainer from '../pages/products/ProductsContainer'
import AddProductContainer from '../pages/products/AddProductContainer'
import ViewProductContainer from '../pages/products/ViewProductContainer'
import SignUpContainer from '../pages/authentication/SignUpContainer'
import {Route} from 'react-router-dom'
import PropTypes from 'prop-types'

const Main = ({ domainData }) =>
  <main>
    <Route exact path='/' component={Home} />
    <Route path='/about' component={About} />
    <Route path='/products' render={() => <ProductsContainer domainData={domainData} />} />
    <Route path='/add-product' render={() => <AddProductContainer domainData={domainData} />} />
    <Route exact path='/view-product/:_id' component={ViewProductContainer} />
    <Route path='/sign-up' component={SignUpContainer} />
  </main>

Main.propTypes = {
  domainData: PropTypes.object.isRequired
}

export default Main
