'use strict'
const Sequelize = require('sequelize')
const db = require('APP/db')

const Cart = db.define('cart', {})

const CartItem = db.define('cart_item', {
  quantity: Sequelize.INTEGER
})

module.exports = {Cart, CartItem}
