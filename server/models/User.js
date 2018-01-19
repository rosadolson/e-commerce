const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema({
  local: {
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true}
  },
  created: {type: Date, required: true}
})

User.methods.setUserData = function (requestBody) {
  this.local.firstName = requestBody.firstName || this.local.firstName
  this.local.lastName = requestBody.lastName || this.local.lastName
  this.local.email = requestBody.email || this.local.email
  this.local.password = requestBody.password || this.local.password
}

User.methods.setDate = function () {
  const dateNow = new Date()
  this.created = dateNow
}

module.exports = mongoose.model('User', User)
