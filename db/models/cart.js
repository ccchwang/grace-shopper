'use strict'
const Sequelize = require('sequelize')
const db = require('APP/db')

const Cart = db.define('cart', {})

module.exports = Cart
