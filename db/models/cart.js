'use strict'
const Sequelize = require('sequelize')
const db = require('APP/db')

const Cart = db.define('cart', {})


//use product.price

module.exports = Cart
