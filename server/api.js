'use strict'

const db = require('APP/db')
const api = module.exports = require('express').Router()
const { Product, User, Cart, CartItem, LineItem, Order, Review } = require('../db/models')

api
  .get('/heartbeat', (req, res) => res.send({ok: true,}))
  .use('/auth', require('./auth'))
  .use('/users', require('./users'))

api.get('/products', function(req, res, next) {
  Product.findAll()
    .then(products => res.send(products))
    .catch(next)

})


// No routes matched? 404.
api.use((req, res) => res.status(404).end())
