'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user')
const OAuth = require('./oauth')
const Order = require('./order')
const {Cart, CartItem} = require('./cart')
const Review = require('./review')
const Line_Item = require('./line_item')
const Product = require('./product')

Order.belongsTo(User)
OAuth.belongsTo(User)
User.hasOne(OAuth)
User.hasMany(Order)
User.hasMany(Review)
Product.hasMany(Review)
Order.belongsToMany(Line_Item, { through: 'Order_LineItem' })
Line_Item.belongsToMany(Order, { through: 'Order_LineItem' })
Line_Item.belongsTo(Product)
Cart.belongsTo(User)
Cart.belongsToMany(Product, { through: CartItem })
Product.belongsToMany(Cart, { through: CartItem })

module.exports = {User, Cart, CartItem, Line_Item, Order, Review, Product}
