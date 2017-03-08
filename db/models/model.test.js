const db = require('APP/db')
const Product = require('./product')
const Review = require('./review')
const LineItem = require('./lineItem')
const {expect} = require('chai')

describe('Product', () => {

  before('Await database sync', () => db.didSync)
  afterEach('Clear the tables', () => db.truncate({ cascade: true }))

  describe('model validations', () => {
    let product;

    before('create empty product', function() {product = Product.build().validate()})
    it('require name', () => {
        return product
            .then(err => {
                expect(err).to.be.an('object');
                expect(err.errors[0]).to.deep.equal({ message: 'name cannot be null',
                    type: 'notNull Violation',
                    path: 'name',
                    value: null });
                });
    });
    it('require description', () => {
        return product
            .then(err => {
                expect(err).to.be.an('object');
                expect(err.errors[1]).to.deep.equal({ message: 'description cannot be null',
                    type: 'notNull Violation',
                    path: 'description',
                    value: null });
                });
    });
    it('require category', () => {
        return product
            .then(err => {
                expect(err).to.be.an('object');
                expect(err.errors[2]).to.deep.equal({ message: 'category cannot be null',
                    type: 'notNull Violation',
                    path: 'category',
                    value: null });
                });
    });
  });
    describe('custom getter on price property', () => {
    let product;

    before('create product with price 37499', function() {product = Product.create({
        name: 'Fido',
        description: 'Amazing dog!',
        category: 'puppy',
        price: '37499'
    })})
    it('returns correctly formatted price', () => {
        return product
            .then(product => {
                expect(product.price).to.equal(374.99)
    });
  });
 })
})

describe('Review', () => {

  before('Await database sync', () => db.didSync)
  afterEach('Clear the tables', () => db.truncate({ cascade: true }))

  describe('hooks', () => {
    let review;

    before('create review', function() {review = Review.create()})
    it('formats created_at date to (month day, year)', () => {
        return review
            .then(review => {
                expect(review.date.match(/\w{3}\s\d{2},\s\d{4}/)).to.have.length(1)
                });
    });
  });
})

describe('LineItem', () => {

  before('Await database sync', () => db.didSync)
  afterEach('Clear the tables', () => db.truncate({ cascade: true }))

  describe('scope', () => {
    let lineItem

    before('create lineItem and product. associate lineItem with product', function() {
        lineItem = Product.create({
            name: 'Fido',
            description: 'Amazing dog!',
            category: 'puppy',
            price: '37499'
        }).then(product => LineItem.create({product_id: product.id}))
    })

    it('has default scope that returns associated product', () => {

        return lineItem.then(item => LineItem.scope('default').findById(item.id))
                .then(item => {
                    expect(item.product.dataValues.name).to.equal('Fido')
                });
    });
  });
})
