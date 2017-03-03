'use strict'

const db = require('APP/db')
const { Product, User, Cart, LineItem, Order, Review } = require('../db/models')
const api = module.exports = require('express').Router()

// const {mustBeLoggedIn, forbidden,} = require('./auth.filters')

api.post('/:userId', (req, res, next) => {
    let product = req.body.product;

    Cart.findOrCreate({where: {user_id: req.params.userId}})
        .then(([cart, _]) => {
            return LineItem.findOrCreate({where: {
                product_id: product.id,
                cart_id: cart.id
            }})
        })
        .then(([line, isCreated]) => {
            if (!isCreated) {
                return line.update({quantity: line.quantity + 1})
            } else {
                return line
            }
        })
        .then(line => LineItem.scope('default').findById(line.id))
        .then(line => res.send(line))
        .catch(next)
})

api.get('/:userId', (req, res, next) => {
    Cart.findOne({where: {user_id: req.params.userId}})
        .then(cart => {
            if (cart) return LineItem.scope('default').findAll({where: {cart_id: cart.id}})
            else {return []}
        })
        .then(lineItems => res.send(lineItems))
        .catch(next)
})

api.delete(`/item/:lineItemId`, (req, res, next) => {
    LineItem.destroy({where: {id: req.params.lineItemId}})
        .then(destroyed => res.sendStatus(204))
        .catch(next)
})

api.put(`/item/:lineItemId`, (req, res, next) => {
    LineItem.update({quantity: req.body.newQuantity}, {where: {id: req.params.lineItemId}})
        .then(updated => res.send(req.body.newQuantity))
        .catch(next)
})
