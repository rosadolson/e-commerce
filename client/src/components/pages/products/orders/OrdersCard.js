import React from 'react'
import PropTypes from 'prop-types'
import Card from 'material-ui/Card'

const OrdersCard = ({ order }) => {
  return (
    <div>
      <Card>
        <p>{order.user}</p>
        <p>{order.product}</p>
      </Card>
    </div>
  )
}

OrdersCard.propTypes = {
  order: PropTypes.object.isRequired
}

export default OrdersCard
