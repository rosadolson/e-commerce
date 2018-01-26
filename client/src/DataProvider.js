import React, {Component} from 'react'
import Layout from './components/structure/Layout'
import $ from 'jquery'
import * as UserApi from './lib/userApi'

class DataProvider extends Component {
  state = {
    isLoaded: false,
    products: [],
    user: null,
    cartReady: false
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
    },
    addNewUser: (user) =>
      UserApi.signupUser(user)
        .then(user => {
          // console.log('Add New User:', user)
          this.setState({ user: user })
          return user
        }),
    loginUser: (email, password) =>
      UserApi.loginUser(email, password)
        .then(user => {
          // console.log(user)
          this.methods.getUser(user)
          return user
        }),
    getUser: (user) =>
      UserApi.getUser(user._id)
        .then(user => {
          // console.log('FOUND USER', user)
          this.setState({ user: user, cartReady: true })
          return user
        }),
    logoutUser: () =>
      UserApi.logoutUser()
        .then(user => {
          // console.log('USER LOGGED OUT', user)
          this.setState({ user: null })
        }),
    addItemToCart: (productId) => {
      if (this.state.user != null) {
        $.ajax({
          url: `/api/users/cart/${this.state.user._id}`,
          method: 'PUT',
          data: {product_id: productId}
        }).done((response) => {
          this.methods.getUser(this.state.user)
        })
      } else {
        console.log('User must be logged in.')
      }
    },
    removeItemFromCart: (productId) => {
      if (this.state.user != null) {
        $.ajax({
          url: `/api/users/remove-from-cart/${this.state.user._id}`,
          method: 'PUT',
          data: {product_id: productId}
        }).then((response) => {
          this.methods.getUser(this.state.user)
        }).catch((error) => {
          console.log('Could not remove item.', error)
        })
      } else {
        console.log('User must be logged in.')
      }
    }
  }

  componentDidMount () {
    this.methods.getAllProducts()
    // this.methods.getUser()
  }

  render () {
    const domainData = {
      ...this.state,
      ...this.methods,
      loggedIn: this.state.user != null,
      loggedOut: this.state.user == null
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
