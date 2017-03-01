'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user')
const OAuth = require('./oauth')
const Order = require('./order')
const Cart = require('./cart')
const Review = require('./review')
const LineItem = require('./lineItem')
const Product = require('./product')

Order.belongsTo(User)
User.hasMany(Order)

OAuth.belongsTo(User)
User.hasOne(OAuth)

User.hasMany(Review)

Product.hasMany(Review)

Order.hasMany(LineItem)
LineItem.belongsTo(Order)

Cart.hasMany(LineItem)
LineItem.belongsTo(Cart)

LineItem.belongsTo(Product)

Cart.belongsTo(User)

// Cart.belongsToMany(Product, { through: CartItem })
// Product.belongsToMany(Cart, { through: CartItem })

module.exports = {User, Cart, LineItem, Order, Review, Product}
