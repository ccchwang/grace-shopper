'use strict'

const db = require('APP/db')
const { Product, User, Cart, LineItem, Order, Review } = require('../db/models')
const api = module.exports = require('express').Router()

// const {mustBeLoggedIn, forbidden,} = require('./auth.filters')

api.post('/:userId', (req, res, next) => {
    let product = req.body.product;

    Cart.findOrCreate({where: {user_id: req.params.userId}})
        .then(([cart, _]) => {
            return LineItem.create({
                quantity: 1,
                product_id: product.id,
                cart_id: cart.id
            })
        })
        .then(createdLine => LineItem.scope('default').findById(createdLine.id))
        .then(created => res.send(created))
        .catch(next)
})

api.get('/:userId', (req, res, next) => {
    Cart.findOne({where: {user_id: req.params.userId}})
        .then(cart => {
            if (cart) return LineItem.scope('default').findAll({where: {cart_id: cart.id}})
            else {res.send([])}
        })
        .then(lineItems => res.send(lineItems))
        .catch(next)
})



