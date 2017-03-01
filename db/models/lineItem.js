'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const LineItem = db.define('lineItems', {
  date: Sequelize.DATE,
  price: Sequelize.INTEGER,
  quantity: Sequelize.INTEGER,
})

// EI: virtual that formats price into a string representing dollars?

// EI: why does this need to store date info? should it have a default value there?

module.exports = LineItem
