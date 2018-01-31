import React from 'react'
import PropTypes from 'prop-types'
import OrdersList from './OrdersList'

const OrdersContainer = ({ domainData }) => {
  return (
    <div>
      {
        domainData.user != null
          ? <OrdersList orders={domainData.orders} />
          : 'User Not Found'
      }
    </div>
  )
}

OrdersContainer.propTypes = {
  domainData: PropTypes.object.isRequired
}

export default OrdersContainer
