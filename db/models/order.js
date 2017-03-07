'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Order = db.define('orders', {
  name: Sequelize.STRING,
  status: Sequelize.STRING,
  address: Sequelize.TEXT,
  totalPrice: {
    type: Sequelize.DECIMAL,
    defaultValue: 0
  }
})

// EI: virtual or method for total price? or hook? would want to make sure to test that...


module.exports = Order
