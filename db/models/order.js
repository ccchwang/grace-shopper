'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Order = db.define('orders', {
  name: Sequelize.STRING,
  status: Sequelize.STRING,
  address: Sequelize.TEXT,
  totalPrice: {
    type: Sequelize.DECIMAL,
    defaultValue: 0
  }
  // totalPrice: {
  //   type: Sequelize.VIRTUAL,
  //   set() {
  //      return this.getLineItems()
  //       .then(lineItems => {

  //         let total = lineItems.reduce((acc, currentItem) => {
  //            acc += currentItem.orderedPrice;
  //            return acc
  //         }, 0)

  //         return total
  //       })
  //   }
  // }
})

// EI: virtual or method for total price? or hook? would want to make sure to test that...


module.exports = Order
