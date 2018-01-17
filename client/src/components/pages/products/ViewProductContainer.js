import React, {Component} from 'react'
import $ from 'jquery'
import PropTypes from 'prop-types'
import ViewProductCard from './ViewProductCard'

class ViewProductContainer extends Component {
  state = {
    product: undefined
  }

  static propTypes = {
    match: PropTypes.object.isRequired
  }

  componentDidMount () {
    this.loadProductFromServer(this.props.match.params._id)
  }

  loadProductFromServer (id) {
    $.ajax({
      url: `/api/products/${id}`,
      method: 'GET'
    }).done((response) => {
      // console.log('View Product:', response)
      this.setState({ product: response.data })
    })
  }

  render () {
    return (
      <div>
        {
          this.state.product
            ? <ViewProductCard product={this.state.product} />
            : 'Product Not Available..'
        }
      </div>
    )
  }
}

export default ViewProductContainer
