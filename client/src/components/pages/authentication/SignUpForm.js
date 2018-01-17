import React from 'react'
import Card from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import {Link} from 'react-router-dom'

const SignUpForm = () => {
  return (
    <form>
      <Card>
        <Typography type='headline' component='h2'>
            First Name:
        </Typography>
        <input type='text' id='firstName' />
      </Card>
      <Card>
        <Typography type='headline' component='h2'>
            Last Name:
        </Typography>
        <input type='text' id='lastName' />
      </Card>
      <Card>
        <Typography type='headline' component='h2'>
            Email:
        </Typography>
        <input type='text' id='email' />
      </Card>
      <div>
        <Button raised>
          <Link to='/'>Submit</Link>
        </Button>
      </div>
    </form>
  )
}

export default SignUpForm
