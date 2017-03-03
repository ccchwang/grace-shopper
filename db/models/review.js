'use strict'
const Sequelize = require('sequelize')
const db = require('APP/db')

const Review = db.define('reviews', {
  description: Sequelize.TEXT,
  rating: Sequelize.INTEGER,
  date: Sequelize.STRING
}, {
  hooks: {
    afterValidate: function(review){
      const prettyDate = (x) => {
        const month = x.slice(4, 7);
        const day = x.slice(8, 10);
        const year = x.slice(11, 15);
        return month + ' ' + day + ', ' + year;
      }
      review.date = prettyDate(""+review.created_at)
    },
    afterCreate: function(review){
      let findProduct =  db.model('products').findOne({where: {id: review.product_id}});
      let findReviews = this.findAll({where: {product_id: review.product_id}});

      Promise.all(([findProduct, findReviews]))
        .then(([product, reviews]) => {
          let sum = reviews.reduce((acc, curr) => {return acc + curr.rating}, 0);
          let average = Math.floor(sum / reviews.length);

          return product.update({averageRating: average})
        })
        .catch(console.error)

  }
  }
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
