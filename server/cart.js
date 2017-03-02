'use strict'

const db = require('APP/db')
const User = db.model('users')
const Cart = db.model('cart')
const LineItem = db.model('lineItems')

// const {mustBeLoggedIn, forbidden,} = require('./auth.filters')

module.exports = require('express').Router()

    .post('/:userId', (req, res, next) => {
        let product = req.body.product;
        Cart.findOrCreate({where: {user_id: req.params.userId}})
        .then(cart => {            
            return LineItem.create({
                quantity: 1,
                product_id: product.id,
                cart_id: cart[0].id
            })
        })
        .then(created => {
            res.send(created)
        })
        .catch(console.error)
    })