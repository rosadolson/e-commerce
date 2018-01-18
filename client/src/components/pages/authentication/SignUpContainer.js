import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'
import SignUpForm from './SignUpForm'

class SignUpContainer extends Component {
  state = {
    firstName: undefined,
    lastName: undefined,
    email: undefined
  }

  static propTypes = {
    history: PropTypes.object.isRequired,
    domainData: PropTypes.object.isRequired
  }

  onChangeHandler = (e) => this.setState({ [e.target.id]: e.target.value })

  onSubmit = (e) => {
    e.preventDefault()
    this.props.domainData.addNewUser(this.state)
      .then(() => this.props.history.push('/'))
      .catch(err => alert(err, Object.keys(err)))
  }

  render () {
    return (
      <div>
        <SignUpForm
          onSubmit={this.onSubmit}
          onChangeHandler={this.onChangeHandler}
        />
      </div>
    )
  }
}

export default withRouter(SignUpContainer)
