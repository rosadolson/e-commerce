import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import Card from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'

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
          <div style={styles.buttonContainer}>
            <Button raised onClick={onSubmit}>
              <Link to='/login'>Submit</Link>
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
