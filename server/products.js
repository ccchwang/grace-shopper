const db = require('APP/db')
const api = module.exports = require('express').Router()
const { Product, User, Cart, LineItem, Order, Review } = require('../db/models')

api.param('productId', function(req, res, next, productId) {
  Product.findById(productId)
      .then(product => {
        req.product = product;
        next()
      })
})

api.get('/', function(req, res, next) {
  Product.findAll()
    .then(products => res.send(products))
    .catch(next)
})


api.get('/:productId', function (req, res, next) {
  Review.findAll({
        where: {product_id: +req.params.productId},
        include: [{ model: User }]
      })
      .then(reviews => res.json([req.product, reviews]))
      .catch(next)
})

api.post('/', function(req, res, next) {
  console.log(req.body.imgUrl)
  Product.create({
    name: req.body.name,
    description: req.body.description,
    category: req.body.category,
    price: req.body.price,
    photo: req.body.imgUrl || 'http://2.bp.blogspot.com/-ZMlNn8uoh-g/UEcaQVZGNCI/AAAAAAAAC_o/e6nCNSZGkUA/s1600/funny-cat-and-kitten-pictures+%25284%2529.jpeg'
  })
  .then(product => res.send(product))
  .catch(next)
})

api.post('/test', function(req, res, next) {
  console.log("~~~", req.body)
})


// api.get('/products/:productId', function (req, res, next) {
//   Review.scope('user').findAll()
//     .then(reviews => console.log(reviews))
//     .catch(console.error)
// })
