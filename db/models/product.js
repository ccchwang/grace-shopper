'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Product = db.define('products', {
  name: Sequelize.STRING,
  description: Sequelize.TEXT,
  category: Sequelize.STRING,
  quantity: Sequelize.INTEGER,
  photo: Sequelize.STRING,
  price: Sequelize.INTEGER,
})

module.exports = Product
