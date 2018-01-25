import React from 'react'
import PropTypes from 'prop-types'

const CartCard = ({ product }) => {
  return (
    <div>
      <p>{product.name}</p>
      <p>{product.price}</p>
      <p>{product.img}</p>
      <p>{product.category}</p>
    </div>
  )
}

CartCard.propTypes = {
  product: PropTypes.object.isRequired
}

export default CartCard
