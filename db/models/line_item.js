'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Line_Item = db.define('line_items', {
  date: Sequelize.DATE,
  price: Sequelize.INTEGER,
  quantity: Sequelize.INTEGER,
})

module.exports = Line_Item
