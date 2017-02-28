const db = require('APP/db')

const seedUsers = () => db.Promise.map([
  {name: 'so many', email: 'god@example.com', admin: true, password: '1234'},
  {name: 'Barack Obama', email: 'admin@example.com', admin: true, password: '1234'},
  {name: 'Anne', email: 'anne@gmail.com', admin: false, password: '1234'},
  {name: 'Chloe', email: 'chloe@gmail.com', admin: false, password: 'abcd'},
  {name: 'Aria', email: 'aria@gmail.com', admin: false, password: 'aria'},
  {name: 'Susan', email: 'susan@gmail.com', admin: false, password: 'susan'},
], user => db.model('users').create(user))

const seedReviews = () => db.Promise.map([
  {description: "The cutest, most fluffiest ball of love you've ever seen! Will snuggle you for hours!",
    user_id: '1', product_id: '1'
  },
  {description: "Sassy but sweet. She knows she's cute and isn't afraid to flaunt it!",
    user_id: '2', product_id: '2'
  },
  {description: 'Irresistible charm! Looks especially dapper in a top hat and bow tie.',
    user_id: '3', product_id: '2'
  },
  {description: "Feeling down?? Wondering the meaning of life?? This little cutie is an instant pick-me-up and will brighten anyone's day!",
    user_id: '4', product_id: '3'
  },
  {description: "Likes soft blankets, rolling around on the bed, and being the star of the show!",
    user_id: '5', product_id: '5'
  },
], review => db.model('reviews').create(review))

const seedProducts = () => db.Promise.map([
{name: 'Wilber', description: "A cute little piglet in boots", category: "Pig", quantity: 3, photo: "http://img3.rnkr-static.com/user_node_img/50006/1000109139/870/one-funny-mini-pig-photo-u1.jpg", price: 536},
{name: "Yarn", description: "Baby orange tabby cat", category: "Cat", quantity: 2, photo: "https://s-media-cache-ak0.pinimg.com/originals/25/6c/c2/256cc2d179ae3fc888c2de1bc4b3b302.jpg", price: 635},
{name: "Buster", description: "Small dog", category: "Dog", quantity: 1, photo: "http://cdn1-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-2.jpg", price: 746},
{name: "Spike", description: "Baby goat with some attitude", category: "Goat", quantity: 10, photo: "https://s-media-cache-ak0.pinimg.com/736x/44/91/31/449131cabd0f6c51259cf881355368a1.jpg", price: 635},
{name: "Legs", description: "Small giraffe", category: "giraffe", quantity: 2, photo: "http://i.imgur.com/Ow7I3kZ.jpg", price: 235},
], products => db.model('products').create(products))

const seedLineItems = () => db.Promise.map([
  {date: "2017-05-25 12:13:57.316-05", price: 683, product_id: 2, quantity: 1, order_id: 1},
  {date: "2017-04-10 12:13:57.316-05", price: 152, product_id: 1, quantity: 2, order_id: 2},
  {date: "2017-02-8 12:13:57.316-05", price: 43, product_id: 3, quantity: 3, order_id: 3},
  {date: "2017-01-2 12:13:57.316-05", price: 384, product_id: 5, quantity: 1, order_id: 4},
  {date: "2017-10-23 12:13:57.316-05", price: 483, product_id: 4, quantity: 2, order_id: 5},
], lineItems => db.model('lineItems').create(lineItems))

db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .then(seedProducts)
  .then(products => console.log(`Seeded ${products.length} products OK`))
  .then(seedReviews)
  .then(reviews => console.log(`Seeded ${reviews.length} reviews OK`))
  .then(seedLineItems)
  .then(lineItems => console.log(`Seeded ${lineItems.length} lineItems OK`))
  .catch(error => console.error(error))
  .finally(() => db.close())
