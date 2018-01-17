import React from 'react'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'
import Card, {CardActions, CardContent, CardMedia} from 'material-ui/Card'
import Typography from 'material-ui/Typography/Typography'

const styles = {
  card: {
    width: 550,
    margin: 35
  },
  media: {
    height: 200
  },
  link: {
    color: 'white',
    textDecoration: 'none'
  }
}

const ViewProductCard = ({ product }) => {
  return (
    <Card style={styles.card}>
      <CardMedia
        style={styles.media}
        image={product.img}
      />
      <CardContent>
        <Typography type='headline' component='h2'>
          <div> { product.name } </div>
          <div> { product.price } </div>
          <div> { product.category } </div>
        </Typography>
      </CardContent>
      <CardActions>
        <Button raised color='primary'>Edit</Button>
      </CardActions>
    </Card>
  )
}

ViewProductCard.propTypes = {
  product: PropTypes.object.isRequired
}

export default ViewProductCard
