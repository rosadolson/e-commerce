import React from 'react'
import CartCard from './CartCard'
import PropTypes from 'prop-types'

const CartList = ({ cartProducts, cartReady }) => {
  return (
    <div>
      {
        cartReady
          ? cartProducts.map((product, index) => {
            return <CartCard key={index} product={product} />
          })
          : 'Cart is empty'
      }
    </div>
  )
}

CartList.propTypes = {
  cartProducts: PropTypes.array.isRequired,
  cartReady: PropTypes.bool.isRequired
}

export default CartList
