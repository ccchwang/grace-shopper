'use strict'
const Sequelize = require('sequelize')
const db = require('APP/db')

const Cart = db.define('cart', {})

const CartItem = db.define('cart_item', {
  quantity: Sequelize.INTEGER
})

// EI: could possibly replace cart item with Line Item, and update Line Item prices with some kind of hook (Cart update hook)?

module.exports = {Cart, CartItem}
