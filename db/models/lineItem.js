'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const LineItem = db.define('lineItems', {
  date: Sequelize.DATE,
  price: Sequelize.INTEGER,
  quantity: Sequelize.INTEGER,
})

module.exports = LineItem
