
const db = require('APP/db')
const api = module.exports = require('express').Router()
const { Product, User, Cart, LineItem, Order, Review } = require('../db/models')


api.get('/', (req, res, next) => {
   Review.create({
       description: 'sd',
       rating: '3',
       user_id: '2',
       product_id: '1'
   })
   .then(review => res.send(review))
   .catch(next)
})

