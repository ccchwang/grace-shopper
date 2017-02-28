'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Product = db.define('products', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
  },
  photo: {
    type: Sequelize.STRING,
    defaultValue: "http://placekitten.com/200/300",
  },
  price: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
})

module.exports = Product
