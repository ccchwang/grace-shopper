'use strict'

const db = require('APP/db')
const { Product, User, Cart, LineItem, Order, Review } = require('../db/models')
const api = module.exports = require('express').Router()

api.post('/neworder', (req, res, next) => {
    console.log("Cart info in route", req.body)
    Order.create({
        name: req.body.name,
        address: req.body.address,
        user_id: req.body.userId,
    })
    .then((newOrder) => {
      LineItem.update(
          {order_id: newOrder.id},
          {where: {
            cart_id: req.body.cartId
            }
        })
      .then((newLineItem) => {
        console.log(newLineItem);
      })
    })
    .catch(next)
    //make new order - total, name, address, userId
    //then update lineitems with orderId
    //then delete cart
    //res.send new order
})
