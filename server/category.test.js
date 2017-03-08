const request = require('supertest')
const {expect} = require('chai')
const db = require('APP/db')
const app = require('./start')

describe('/api/category', () => {

  before('Await database sync', () => db.didSync)
  afterEach('Clear the tables', () => db.truncate({ cascade: true }))

  describe('GET /:categoryName', () => {

    describe('different category views', () => {

      it('filters all the products by category name', () =>
        request(app)
          .get('/api/category/dog')
          .expect(200)
          .end(function (err, res) {
            if (err) return done(err);
            expect(res.body).to.be.instanceof(Array);
            done();
          })

      )

    })

  })
})
