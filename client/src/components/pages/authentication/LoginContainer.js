import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'
import LoginForm from './LoginForm'

class LoginContainer extends Component {
  state = {
    email: undefined,
    password: undefined
  }

  static propTypes = {
    history: PropTypes.object.isRequired,
    domainData: PropTypes.object.isRequired
  }

  onChangeHandler = (e) => this.setState({ [e.target.id]: e.target.value })

  onSubmit = (e) => {
    e.preventDefault()
    this.props.domainData.loginUser(this.state.email, this.state.password)
      .then(() => this.props.history.push('/'))
      .catch(err => alert(err, Object.keys(err)))
  }

  render () {
    return (
      <div>
        <LoginForm
          onChangeHandler={this.onChangeHandler}
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
}

export default withRouter(LoginContainer)
