const db = require('APP/db')
const api = module.exports = require('express').Router()
const { Product } = require('../db/models')

api.get('/:categoryName', function(req, res, next) {
  Product.findAll({
    where: {
      category: req.params.categoryName
    }
  })
    .then(products => res.send(products))
    .catch(next)
})
