'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user')
const OAuth = require('./oauth')
const Order = require('./order')
const {Cart, CartItem} = require('./cart')
const Review = require('./review')
const LineItem = require('./lineItem')
const Product = require('./product')

Order.belongsTo(User)
OAuth.belongsTo(User)
User.hasOne(OAuth)
User.hasMany(Order)
User.hasMany(Review)
Product.hasMany(Review)
Order.belongsToMany(LineItem, { through: 'Order_LineItem' })
LineItem.belongsToMany(Order, { through: 'Order_LineItem' })
LineItem.belongsTo(Product)
Cart.belongsTo(User)
Cart.belongsToMany(Product, { through: CartItem })
Product.belongsToMany(Cart, { through: CartItem })

module.exports = {User, Cart, CartItem, LineItem, Order, Review, Product}
