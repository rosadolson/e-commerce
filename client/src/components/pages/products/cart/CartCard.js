import React from 'react'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'
import Card, { CardActions, CardContent, CardMedia} from 'material-ui/Card'
import Typography from 'material-ui/Typography/Typography'

const styles = {
  card: {
    width: 500,
    margin: 35
  },
  media: {
    height: 200
  }
}

const CartCard = ({ product, removeItemFromCart }) => {
  return (
    <div>
      <Card style={styles.card}>
        <CardMedia
          style={styles.media}
          title={product.category}
          image={product.img}
        />
        <CardContent>
          <Typography type='headline' component='h2'>
            <div> { product.name } </div>
            <div> { product.category } </div>
            <div> { product.price } </div>
          </Typography>
        </CardContent>
        <CardActions>
          <Button raised color='primary' onClick={() => removeItemFromCart(product._id)}>Remove</Button>
        </CardActions>
      </Card>
    </div>
  )
}

CartCard.propTypes = {
  product: PropTypes.object.isRequired,
  removeItemFromCart: PropTypes.func.isRequired
}

export default CartCard
