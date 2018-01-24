const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema({
  local: {
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true}
  },
  created: {type: Date, required: true},
  cart: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
})

User.methods.setUserData = function (requestBody) {
  this.firstName = requestBody.firstName || this.firstName
  this.lastName = requestBody.lastName || this.lastName
  this.email = requestBody.email || this.email
  this.password = requestBody.password || this.password
}

User.methods.setDate = function () {
  const dateNow = new Date()
  this.created = dateNow
}

module.exports = mongoose.model('User', User)
