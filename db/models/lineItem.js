'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')
const LineItem = db.define('lineItems', {
  orderedPrice: {
    type: Sequelize.INTEGER,
    get: function(price){
      let unformatted = this.getDataValue(price);
      let formatted = unformatted / 100;
      return formatted
    }
  },
  quantity: Sequelize.INTEGER,
}, {
  hooks: {
    afterUpdate: function(lineItem){
      db.model('orders').findById(lineItem.order_id)
        .then(order => {
          let addition = (+order.totalPrice) + (+lineItem.orderedPrice);
          return order.update({totalPrice: addition})
        })
        .catch(console.error)
    }
  },

  scopes: {
    default: {
      include: [{all: true}]
    }
  }
})


module.exports = LineItem
