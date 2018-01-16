import React from 'react'
import Card, {CardActions, CardContent, CardMedia} from 'material-ui/Card'
import Typography from 'material-ui/Typography/Typography'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'

const styles = {
  card: {
    width: 500,
    margin: 35
  },
  media: {
    height: 200
  }
}

const ProductCard = ({ _id, name, price, img, category, deleteProduct }) => {
  return (
    <div>
      <Card style={styles.card}>
        <CardMedia
          style={styles.media}
          title={category}
          image={img}
        />
        <CardContent>
          <Typography type='headline' component='h2'>
            { name }
          </Typography>
        </CardContent>
        <CardActions>
          <Button raised color='primary' onClick={() => deleteProduct(_id)}>Delete</Button>
          <Button raised color='primary'>View</Button>
        </CardActions>
      </Card>
    </div>
  )
}

ProductCard.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  deleteProduct: PropTypes.func.isRequired
}

export default ProductCard
