const db = require('APP/db')

const seedUsers = () => db.Promise.map([
  {name: 'so many', email: 'god@example.com', password: '1234'},
  {name: 'Barack Obama', email: 'barack@example.gov', password: '1234'},
], user => db.model('users').create(user))

const seedProducts = () => db.Promise.map([
{name: 'Wilber', description: "A cute little piglet in boots", category: "Pig", quantity: 3, photo: "http://img3.rnkr-static.com/user_node_img/50006/1000109139/870/one-funny-mini-pig-photo-u1.jpg", price: 536},
{name: "Yarn", description: "Baby orange tabby cat", category: "Cat", quantity: 2, photo: "https://s-media-cache-ak0.pinimg.com/originals/25/6c/c2/256cc2d179ae3fc888c2de1bc4b3b302.jpg", price: 635},
{name: "Buster", description: "Small dog", category: "Dog", quantity: 1, photo: "http://cdn1-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-2.jpg", price: 746},
{name: "Spike", description: "Baby goat with some attitude", category: "Goat", quantity: 10, photo: "https://s-media-cache-ak0.pinimg.com/736x/44/91/31/449131cabd0f6c51259cf881355368a1.jpg", price: 635},
{name: "Legs", description: "Small giraffe", category: "giraffe", quantity: 2, photo: "http://i.imgur.com/Ow7I3kZ.jpg", price: 235},
], products => db.model('products').create(products))

db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .then(seedProducts)
  .then(products => console.log(`Seeded ${products.length} products OK`))
  .catch(error => console.error(error))
  .finally(() => db.close())
