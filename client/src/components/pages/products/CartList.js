import React from 'react'
import CartCard from './CartCard'
import PropTypes from 'prop-types'

const CartList = ({ cartProducts }) => {
  return (
    <div>
      {
        cartProducts.map((product) => {
          return <CartCard product={product} />
        })
      }
    </div>
  )
}

CartList.propTypes = {
  cartProducts: PropTypes.array.isRequired
}

export default CartList
