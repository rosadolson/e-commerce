const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const productRoutes = require('./routes/products')
const userRoutes = require('./routes/users')

const port = 3001
app.set('trust proxy', '127.0.0.1')

mongoose.connect('mongodb://localhost/ECOMMERCE_DB')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(require('./config/error-handler'))

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

const server = app.listen(port, () => console.log(`Running on port: ${port} ☀️`))

module.exports = server
