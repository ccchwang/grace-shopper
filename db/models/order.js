'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Order = db.define('orders', {
  date: Sequelize.DATE,
  status: Sequelize.STRING,
  address: Sequelize.TEXT,
})

module.exports = Order
