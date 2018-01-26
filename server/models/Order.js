const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Order = new Schema({
  products: [{type: mongoose.Schema.Types.ObjectId, ref: 'Product'}],
  status: {type: Number, default: 0},
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  created: {type: Date, required: true}
})

Order.methods.setDate = function () {
  const dateNow = new Date()
  this.created = dateNow
}

Order.methods.setStatus = function (requestBody) {
  this.status = requestBody.status || this.status
}

module.exports = mongoose.model('Order', Order)
