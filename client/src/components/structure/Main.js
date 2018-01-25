import React from 'react'
import {Route} from 'react-router-dom'
import PropTypes from 'prop-types'
import About from '../pages/About'
import Home from '../pages/Home'
import ProductsContainer from '../pages/products/ProductsContainer'
import AddProductContainer from '../pages/products/AddProductContainer'
import ViewProductContainer from '../pages/products/ViewProductContainer'
import SignUpContainer from '../pages/authentication/SignUpContainer'
import LoginContainer from '../pages/authentication/LoginContainer'
import CartContainer from '../pages/products/CartContainer'

const Main = ({ domainData }) =>
  <main>
    <Route exact path='/' component={Home} />
    <Route path='/about' component={About} />
    <Route path='/products' render={() => <ProductsContainer domainData={domainData} />} />
    <Route path='/add-product' render={() => <AddProductContainer domainData={domainData} />} />
    <Route exact path='/view-product/:_id' component={ViewProductContainer} />
    <Route path='/sign-up'render={() => <SignUpContainer domainData={domainData} />} />
    <Route path='/login'render={() => <LoginContainer domainData={domainData} />} />
    <Route path='/cart' render={() => <CartContainer domainData={domainData} />} />
  </main>

Main.propTypes = {
  domainData: PropTypes.object.isRequired
}

export default Main
