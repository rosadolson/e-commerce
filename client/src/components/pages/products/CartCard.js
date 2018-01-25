import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  img: {
    width: '50%'
  }
}

const CartCard = ({ product }) => {
  return (
    <div>
      <img style={styles.img} src={product.img} alt='' />
      <p>{product.name}</p>
      <p>{product.price}</p>
      <p>{product.category}</p>
    </div>
  )
}

CartCard.propTypes = {
  product: PropTypes.object.isRequired
}

export default CartCard
