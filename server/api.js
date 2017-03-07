'use strict'

const db = require('APP/db')
const api = module.exports = require('express').Router()

api
  .get('/heartbeat', (req, res) => res.send({ok: true}))
  .use('/auth', require('./auth'))
  .use('/users', require('./users'))
  .use('/products', require('./products'))
  .use('/cart', require('./cart'))
  .use('/category', require('./category'))
  .use('/order', require('./order'))


// api.get('/test', function(req, res, next) {
//   LineItem.scope('default').findAll()
//     .then(items => res.json(items))
// })

// api.get('/test', function(req, res, next) {
//   Order.findById(1)
//     .then(promise => {
//       promise.then(result => {console.log(result)})
//     })
// })


// No routes matched? 404.
api.use((req, res) => res.status(404).end())
