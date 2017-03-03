
const db = require('APP/db')
const api = module.exports = require('express').Router()
const { Product, User, Cart, LineItem, Order, Review } = require('../db/models')


api.get('/', (req, res, next) => {
    LineItem.findById(3)
    .then(item => item.update({order_id: 1}))
    .catch(next)
})

