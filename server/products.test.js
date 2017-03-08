const request = require('supertest')
const {expect} = require('chai')
const db = require('APP/db')
const { Product, User, Review } = require('../db/models')
const app = require('./start')

describe('/api/products', () => {

  before('Await database sync', () => db.didSync)
  afterEach('Clear the tables', () => db.truncate({ cascade: true }))

  describe('GET /', () => {

    describe('default homepage route', () => {

      it('provides all the products', () =>
        request(app)
          .get(`/api/products`)
          .expect('Content-Type', /json/)
          .expect(200)

      )

    })

  })

  describe('GET /:productIdid', () => {

    describe('single product route', () => {

      it('provides one product', () =>
        request(app)
          .get(`/api/products/1`)
          .expect('Content-Type', /json/)
          .expect(200)

      )

    })

  })

  describe('DELETE /:productId', () => {

    describe('delete product route', () => {

      it('removes a product', () =>
        request(app)
          .delete(`/api/products/1`)
          .expect(204)
      )

    })

  })


  describe('POST /', () => {

    describe('post product route', () => {

      it('creates a product', () =>
        request(app)
          .post('/api/products')
          .send({
            name: 'Hunter',
            description: 'The cutest beagle',
            category: 'dog',
            price: 956,
            photo: "http://2.bp.blogspot.com/-ZMlNn8uoh-g/UEcaQVZGNCI/AAAAAAAAC_o/e6nCNSZGkUA/s1600/funny-cat-and-kitten-pictures+%25284%2529.jpeg"
          })
          .expect(200)
      )
    })
  })


  describe('POST REVIEW /reviews/:productId', () => {

    describe('post review on a product', () => {

      it('adds a review', () =>
        request(app)
          .post('/api/products/reviews/1')
          .send({
            description: 'He is the friendliest dog ever',
            rating: 5,
          })
          .expect(200)
          .expect(function (res) {
            expect(res.body.review.id).to.not.be.an('undefined')
          })
      )
    })
  })

})
