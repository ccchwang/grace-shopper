'use strict'

const db = require('APP/db')
const { Product, User, Cart, LineItem, Order, Review } = require('../db/models')
const api = module.exports = require('express').Router()

api.post('/neworder', (req, res, next) => {
    Order.create({
        name: req.body.name,
        address: req.body.address,
        user_id: req.body.userId,
    })

    .then((newOrder) => {
      LineItem.update({
        order_id: newOrder.id},
          { where: {
            cart_id: req.body.cartId
            }
        })
      .then((LineItem) => {
        res.send(newOrder)
      })
    })
    .then(() => {
      Cart.destroy({
        where: {
          id: req.body.cartId
        }
      })
    })
    .catch(next)
})
