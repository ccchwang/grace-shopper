'use strict'
const Sequelize = require('sequelize')
const db = require('APP/db')

const Review = db.define('reviews', {
  description: Sequelize.TEXT
})

module.exports = Review
