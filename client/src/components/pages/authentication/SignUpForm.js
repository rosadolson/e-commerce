import React from 'react'
import PropTypes from 'prop-types'
import Card from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import {Link} from 'react-router-dom'

const styles = {
  container: {
    marginTop: 30,
    marginBottom: 30
  },
  formContainer: {
    padding: 45
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding: 10
  },
  link: {
    color: 'black',
    textDecoration: 'none'
  }
}

const SignUpForm = ({ onSubmit, onChangeHandler }) => {
  return (
    <div style={styles.container}>
      <Card raised>
        <form style={styles.formContainer}>
          <Typography type='display1' gutterBottom> Sign Up </Typography>
          <div>
            <TextField onChange={onChangeHandler} id='firstName' label=' First Name' />
          </div>
          <div>
            <TextField onChange={onChangeHandler} id='lastName' label='Last Name' />
          </div>
          <div>
            <TextField onChange={onChangeHandler} id='email' label='Email' />
          </div>
          <div>
            <TextField onChange={onChangeHandler} id='password' label='Password' />
          </div>
          <div style={styles.buttonContainer}>
            <Button raised onClick={onSubmit}>Sign Up</Button>
          </div>
          <div style={styles.buttonContainer}>
            <Button raised>
              <Link style={styles.link} to='/login'>Login</Link>
            </Button>
          </div>
        </form>
      </Card>
    </div>
  )
}

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChangeHandler: PropTypes.func.isRequired
}

export default SignUpForm
