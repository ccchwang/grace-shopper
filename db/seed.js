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

db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .then(seedReviews)
  .then(reviews => console.log(`Seeded ${reviews.length} reviews OK`))
  .catch(error => console.error(error))
  .finally(() => db.close())
