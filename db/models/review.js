'use strict'
const Sequelize = require('sequelize')
const db = require('APP/db')

const Review = db.define('reviews', {
  description: Sequelize.TEXT,
  rating: Sequelize.INTEGER
})

// EI: ratings? methods or virtual (maybe on Product) for average review score?

// EI: might want to make more model methods for common queries
// Review.findByUserId()

// Review.findByUserId = Review.findAll({
//   where: {
//     userId: ...
//   }
// })

module.exports = Review
