import React from 'react'
import PropTypes from 'prop-types'
import CartList from './CartList'

const CartContainer = ({ domainData }) => {
  return (
    <div>
      {
        domainData.user != null
          ? <CartList
            cartProducts={domainData.user.cart}
            cartReady={domainData.cartReady}
            removeItemFromCart={domainData.removeItemFromCart}
          />
          : 'User Not Found'
      }
    </div>
  )
}

CartContainer.propTypes = {
  domainData: PropTypes.object.isRequired
}

export default CartContainer
