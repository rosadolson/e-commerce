import React from 'react'
import OrdersCard from './OrdersCard'
import PropTypes from 'prop-types'

const OrdersList = ({ orders }) => {
  return (
    <div>
      {
        orders.map((order, index) => {
          return <OrdersCard
            order={order}
            key={index}
          />
        })
      }
    </div>
  )
}

OrdersList.propTypes = {
  orders: PropTypes.object.isRequired
}

export default OrdersList
