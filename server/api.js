'use strict'

const db = require('APP/db')
const api = module.exports = require('express').Router()
const { Product, User, Cart, LineItem, Order, Review } = require('../db/models')

api
  .get('/heartbeat', (req, res) => res.send({ok: true,}))
  .use('/auth', require('./auth'))
  .use('/users', require('./users'))

// EI: let's put this in its own file, you're going to have more product routes than just this
api.get('/products', function(req, res, next) {
  Product.findAll()
    .then(products => res.send(products))
    .catch(next) // EI: yay error-handling in promise chains!

})

// api.get('/test', function(req, res, next) {
//   LineItem.scope('default').findAll()
//     .then(items => res.json(items))
// })

api.get('/test', function(req, res, next) {
  Order.findById(1)
    .then(promise => {
      promise.then(result => {console.log(result)})
    })
})


// No routes matched? 404.
api.use((req, res) => res.status(404).end())
