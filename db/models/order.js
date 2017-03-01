'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Order = db.define('orders', {
  date: Sequelize.DATE,
  status: Sequelize.STRING,
  address: Sequelize.TEXT,
})

// EI: virtual or method for total price? or hook? would want to make sure to test that...

// EI: possibly some sort of updateHook that updates associated Line Item prices?

// EI: what is this date representing?

module.exports = Order
