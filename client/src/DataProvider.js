import React, {Component} from 'react'
import Layout from './components/structure/Layout'
import $ from 'jquery'
import * as UserApi from './lib/userApi'

class DataProvider extends Component {
  state = {
    isLoaded: false,
    products: [],
    user: null
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
          this.setState({ user: user })
          return user
        }),
    getUser: () =>
      UserApi.getUser()
        .then(user => {
          // console.log('FOUND USER', user)
          this.setState({ user: user })
          return user
        }),
    logoutUser: () =>
      UserApi.logoutUser()
        .then(user => {
          console.log('USER LOGGED OUT', user)
          this.setState({ user: null })
        })
  }

  componentDidMount () {
    this.methods.getAllProducts()
    this.methods.getUser()
  }

  render () {
    const domainData = {
      ...this.state,
      ...this.methods,
      loggedIn: this.state.user !== null,
      loggedOut: this.state.user === null
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
