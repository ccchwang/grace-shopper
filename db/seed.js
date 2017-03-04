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
    user_id: '1', product_id: '1', rating: '5'
  },
  {description: "Sassy but sweet. She knows she's cute and isn't afraid to flaunt it!",
    user_id: '2', product_id: '2', rating: '4'
  },
  {description: 'Irresistible charm! Looks especially dapper in a top hat and bow tie.',
    user_id: '3', product_id: '3', rating: '5'
  },
  {description: "Feeling down?? Wondering the meaning of life?? This little cutie is an instant pick-me-up and will brighten anyone's day!",
    user_id: '4', product_id: '4', rating: '5'
  },
  {description: "Likes soft blankets, rolling around on the bed, and being the star of the show!",
    user_id: '5', product_id: '5', rating: '4'
  },
  {description: "Sorta meh but still lovable!", user_id: '1', product_id: '6', rating: '3'  },
  {description: "Will do the trick!", user_id: '3', product_id: '8', rating: '3'},
  {description: "Sweetest little pig in the world! Best decision of my life!!", user_id: '3', product_id: '7', rating: '5'}
], review => db.model('reviews').create(review))

const seedProducts = () => db.Promise.map([
{name: 'Wilber', description: "A cute little piglet in boots", category: "pig", quantity: 3, photo: "http://img3.rnkr-static.com/user_node_img/50006/1000109139/870/one-funny-mini-pig-photo-u1.jpg", price: 1536},
{name: "Yarn", description: "Baby orange tabby cat", category: "cat", quantity: 2, photo: "https://s-media-cache-ak0.pinimg.com/originals/25/6c/c2/256cc2d179ae3fc888c2de1bc4b3b302.jpg", price: 6535},
{name: "Buster", description: "Small dog", category: "dog", quantity: 1, photo: "http://cdn1-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-2.jpg", price: 746},
{name: "Spike", description: "Baby goat with some attitude", category: "goat", quantity: 10, photo: "https://s-media-cache-ak0.pinimg.com/736x/44/91/31/449131cabd0f6c51259cf881355368a1.jpg", price: 8901},
{name: "Legs", description: "Small giraffe", category: "giraffe", quantity: 2, photo: "http://i.imgur.com/Ow7I3kZ.jpg", price: 2335},
{name: "Cheese", description: "Best little mouse, comes with swing", category: "mouse", quantity: 6, photo: "https://s-media-cache-ak0.pinimg.com/736x/db/22/08/db2208f9403af15c21ef4d11a8d233a2.jpg", price: 2335},
{name: "Snout", description: "Pig and brown piglet. He sure loves his ice cream!", category: "pig", quantity: 2, photo: "https://s-media-cache-ak0.pinimg.com/originals/ec/1c/7e/ec1c7ef02303d298882238d2944851f4.jpg", price: 1335},
{name: "Sally", description: "This little lady loves to hang out and snuggle", category: "monkey", quantity: 3, photo: "https://i.ytimg.com/vi/jM6nHKgX66g/hqdefault.jpg", price: 835},
{name: "Henry", description: "The best swimmer you will ever find!", category: "turtle", quantity: 3, photo: "https://img.buzzfeed.com/buzzfeed-static/static/2014-05/enhanced/webdr03/23/13/enhanced-11844-1400866694-9.jpg", price: 8925},
{name: "Charlotte", description: "Cute little nugget", category: "pig", quantity: 3, photo: "https://i.ytimg.com/vi/1LqyOX12_nQ/maxresdefault.jpg", price: 7000},
{name: "Tickles", description: "Adventurous and ticklish", category: "cat", quantity: 3, photo: "http://static.boredpanda.com/blog/wp-content/uuuploads/cute-baby-animals-2/cute-baby-animals-2-2.jpg", price: 6500},
{name: "Dumbo", description: "Scared of mice, great memory", category: "elephant", quantity: 3, photo: "http://i.dailymail.co.uk/i/pix/2016/08/21/17/3775BD5C00000578-0-image-a-7_1471796003762.jpg", price: 4000},
{name: "Bob", description: "Kind of an ass", category: "donkey", quantity: 3, photo: "http://static.boredpanda.com/blog/wp-content/uploads/2014/12/cutest-baby-animals-9__605.jpg", price: 5500},
{name: "Thumper", description: "Sir Thump-a-lot", category: "bunny", quantity: 3, photo: "https://s-media-cache-ak0.pinimg.com/564x/8c/15/38/8c1538ff1e692657a12c55b16af16a7b.jpg", price: 10000},

], products => db.model('products').create(products))

const seedOrders = () => db.Promise.map([
  {status: 'shipped', totalPrice: '6.83', address: '5 Hanover Square', user_id: '1'},
  {status: 'shipping', totalPrice: '3.04', address: '100 Broadway Street', user_id: '2'},
  {status: 'delivered', totalPrice: '1.29', address: '25 Kenmare Street 12:39:46.47-05', user_id: '3'},
  {status: 'shipped', totalPrice: '3.84', address: '10 Walnut Avenue', user_id: '4'},
  {status: 'delivered', totalPrice: '9.66', address: '50 Wall Street', user_id: '5'},
], orders => db.model('orders').create(orders))

const seedLineItems = () => db.Promise.map([
 {orderedPrice: 683, product_id: 2, quantity: 1, order_id: 1},
 {orderedPrice: 152, product_id: 1, quantity: 2, order_id: 2},
 {orderedPrice: 43, product_id: 3, quantity: 3, order_id: 3},
 {orderedPrice: 384, product_id: 5, quantity: 1, order_id: 4},
 {orderedPrice: 483, product_id: 4, quantity: 2, order_id: 5},
], lineItems => db.model('lineItems').create(lineItems))

const seedCarts = () => db.Promise.map([
 {user_id: '1'},
 {user_id: '2'},
 {user_id: '3'},
 {user_id: '4'},
 {user_id: '5'},

], cart => db.model('cart').create(cart))

db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .then(seedProducts)
  .then(products => console.log(`Seeded ${products.length} products OK`))
  .then(seedCarts)
  .then(carts => console.log(`Seeded ${carts.length} carts OK`))
  .then(seedOrders)
  .then(orders => console.log(`Seeded ${orders.length} orders OK`))
  .then(seedLineItems)
  .then(lineItems => console.log(`Seeded ${lineItems.length} lineItems OK`))
  .then(seedReviews)
  .then(reviews => console.log(`Seeded ${reviews.length} reviews OK`))
  .catch(error => console.error(error))
  .finally(() => db.close())
