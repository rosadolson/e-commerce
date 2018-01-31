const express = require('express')
const Router = express.Router()
const Order = require('../models/Order')
const mongoose = require('mongoose')

Router.route('/')
  .get((req, res) => {
    Order
      .find()
      .populate('products')
      .populate('user')
      .exec((err, orders) => {
        if (err) {
          res.json({ error: err })
        } else {
          res.json({ msg: 'SUCCESS', data: orders })
        }
      })
  })
  .post((req, res) => {
    const order = new Order()
    order.setStatus(req.body)
    order.setDate()
    console.log(req.body.products)
    order.products = req.body.products.map((productId) => mongoose.Types.ObjectId(productId))
    order.user = mongoose.Types.ObjectId(req.body.user)
    order.save((err, savedOrder) => {
      if (err) {
        res.json({ error: err })
      } else {
        res.json({ msg: 'SUCCESS', data: savedOrder })
      }
    })
  })

Router.route('/:orderId')
  .get((req, res) => {
    const orderId = req.params.orderId
    Order.findById({_id: orderId})
      .populate('products')
      .populate('user')
      .exec((err, order) => {
        if (err) {
          res.json({ error: err })
        } else {
          res.json({ msg: 'SUCCESS', data: order })
        }
      })
  })
  .put((req, res) => {
    const orderId = req.body.params.orderId
    Order.findById({_id: orderId}, (err, order) => {
      if (err) {
        res.json({ error: err })
      } else {
        req.body.products = req.body.products.map(productId => mongoose.Types.ObjectId(productId))
        order.products = [...order.products, ...req.body.products]
        order.status = req.body.status ? req.body.status : order.status
        order.user = req.body.user ? req.body.user : order.user
        order.save((err, savedOrder) => {
          if (err) {
            res.json({ error: err })
          } else {
            res.json({ msg: 'SUCCESS', data: savedOrder })
          }
        })
      }
    })
  })
  .delete((req, res) => {
    const orderId = req.body.params.orderId
    Order.remove({_id: orderId}, (err, order) => {
      if (err) {
        res.json({ error: err })
      } else {
        res.json({ msg: `DELETED: ${orderId}`, data: null })
      }
    })
  })

module.exports = Router
