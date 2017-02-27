'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user')
const OAuth = require('./oauth')
const Order = require('./order')
const Cart = require('./cart')
const Review = require('./review')
const Line_Item = require('./line_item')

Order.belongsTo(User)
OAuth.belongsTo(User)
User.hasOne(OAuth)
Cart.belongsTo(User)
User.hasMany(Review)
// Product.hasMany(Review)

module.exports = {User, Cart, Line_Item, Order, Review}

