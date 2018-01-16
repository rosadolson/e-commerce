import React, {Component} from 'react'
import Layout from './components/structure/Layout'
import $ from 'jquery'

class DataProvider extends Component {
  state = {
    isLoaded: false,
    products: []
  }

  methods = {
    getAllProducts: () => {
      $.ajax({
        url: '/api/products',
        method: 'GET'
      }).done((response) => {
        // console.log('Get method from data provider:', response)
        this.setState({ isLoaded: true, products: response.data })
      })
    },
    deleteProduct: (id) => {
      $.ajax({
        url: `/api/products/${id}`,
        method: 'DELETE'
      }).done((response) => {
        // console.log('Delete Method from data provider:', response)
        this.methods.getAllProducts()
      })
    }
  }
  componentDidMount () {
    this.methods.getAllProducts()
  }

  render () {
    const domainData = {
      ...this.state,
      ...this.methods
    }
    return (
      <div>
        {
          this.state.isLoaded
            ? <Layout domainData={domainData} />
            : 'Loading...'
        }
      </div>
    )
  }
}

export default DataProvider
