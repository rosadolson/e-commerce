import React from 'react'
import Card from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import PropTypes from 'prop-types'

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

const AddProductForm = ({ submitProduct, onChangeHandler, name, price, img, category }) =>
  <div style={styles.container}>
    <Card raised>
      <form style={styles.formContainer}>
        <Typography type='display1' gutterBottom> Add Product </Typography>
        <div>
          <TextField id='name' onChange={onChangeHandler} label='Name' placeholder='Name' />
        </div>
        <div>
          <TextField id='price' onChange={onChangeHandler} label='Price' placeholder='Price' />
        </div>
        <div>
          <TextField id='img' onChange={onChangeHandler} label='Image' placeholder='Image' />
        </div>
        <div>
          <TextField id='category' onChange={onChangeHandler} label='Category' placeholder='Category' />
        </div>
        <div style={styles.buttonContainer}>
          <Button raised disabled={!name || !price || !img || !category} onClick={submitProduct}>SUBMIT</Button>
        </div>
      </form>
    </Card>
  </div>

AddProductForm.propTypes = {
  onChangeHandler: PropTypes.func.isRequired,
  submitProduct: PropTypes.func.isRequired
}

export default AddProductForm
