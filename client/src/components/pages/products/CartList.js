import React from 'react'
import CartCard from './CartCard'
import PropTypes from 'prop-types'
import Typography from 'material-ui/Typography'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    margin: 40
  },
  typography: {
    display: 'flex',
    justifyContent: 'center'
  }
}

const CartList = ({ cartProducts, cartReady, removeItemFromCart }) => {
  return (
    <div style={styles.container}>
      <Typography style={styles.typography} type='display3'>Your Cart</Typography>
      {
        cartReady
          ? cartProducts.map((product, index) => {
            return <CartCard
              key={index}
              product={product}
              removeItemFromCart={removeItemFromCart}
            />
          })
          : 'Cart is empty'
      }
    </div>
  )
}

CartList.propTypes = {
  cartProducts: PropTypes.array.isRequired,
  cartReady: PropTypes.bool.isRequired,
  removeItemFromCart: PropTypes.func.isRequired
}

export default CartList
