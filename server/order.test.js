const request = require('supertest')
const {expect} = require('chai')
const db = require('APP/db')
const { Order, LineItem, Cart } = require('../db/models')
const app = require('./start')

describe('/api/order', () => {

  before('Await database sync', () => db.didSync)
  afterEach('Clear the tables', () => db.truncate({ cascade: true }))

  describe('POST Order /neworder', () => {

    describe('creates a new order', () => {

      it('creates a new order', () =>
        request(app)
          .post('/api/order/neworder')
          .send({
            name: 'Emma',
            address: '5 Hanover Square',
            totalPrice: 10.50,
            user_id: 1
          })
          .expect(200)
      )

      it('updates the line item with order id with the cart id', () =>
        request(app)
          .post('/api/order/neworder')
          .send({
            order_id: 1,
            cart_id: 1
          })
          .expect(200)
      )

    })
  })

})
