const express = require('express')
const Router = express.Router()
const Product = require('../models/Product')

// Still '/api/products'

Router.route('/')
  .get((req, res) => {
    Product.find((err, products) => {
      if (err) {
        res.json({ error: err })
      } else {
        res.json({ msg: 'SUCCESS', data: products })
      }
    })
  })
  .post((req, res) => {
    const product = new Product()
    product.setProductData(req.body)
    product.setDate()
    product.save((err, savedProduct) => {
      if (err) {
        res.json({ error: err })
      } else {
        res.json({ msg: 'SUCCESS', data: savedProduct })
      }
    })
  })

Router.route('/:productId')
  .get((req, res) => {
    const productId = req.params.productId
    Product.findById({_id: productId}, (err, product) => {
      if (err) {
        res.json({ error: err })
      } else {
        res.json({ msg: `FOUND: ${productId}`, data: product })
      }
    })
  })
  .put((req, res) => {
    const editProductId = req.params.productId
    Product.findById({_id: editProductId}, (err, product) => {
      if (err) {
        res.json({ error: err })
      } else {
        product.setProductData(req.body)
        product.save((err, updatedProduct) => {
          if (err) {
            res.json({ error: err })
          } else {
            res.json({ msg: `UPDATED: ${editProductId}`, data: updatedProduct })
          }
        })
      }
    })
  })
  .delete((req, res) => {
    const productId = req.params.productId
    Product.remove({_id: productId}, (err, product) => {
      if (err) {
        res.json({ error: err })
      } else {
        res.json({ msg: `DELETED: ${productId}`, data: product })
      }
    })
  })

module.exports = Router
