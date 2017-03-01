import React from 'react'
import chai, {expect} from 'chai'
chai.use(require('chai-enzyme')())
import {shallow} from 'enzyme'
import {spy} from 'sinon'
chai.use(require('sinon-chai'))
import {createStore} from 'redux'

import HomePageContainer from '../containers/HomePageContainer';
import HomePage from './HomePage';


const seedProducts = [
{id: 1, name: 'Wilber', description: "A cute little piglet in boots", category: "Pig", quantity: 3, photo: "http://img3.rnkr-static.com/user_node_img/50006/1000109139/870/one-funny-mini-pig-photo-u1.jpg", price: 536},
{id: 2, name: "Yarn", description: "Baby orange tabby cat", category: "Cat", quantity: 2, photo: "https://s-media-cache-ak0.pinimg.com/originals/25/6c/c2/256cc2d179ae3fc888c2de1bc4b3b302.jpg", price: 635},
{id: 3, name: "Buster", description: "Small dog", category: "Dog", quantity: 1, photo: "http://cdn1-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-2.jpg", price: 746},
{id: 4, name: "Spike", description: "Baby goat with some attitude", category: "Goat", quantity: 10, photo: "https://s-media-cache-ak0.pinimg.com/736x/44/91/31/449131cabd0f6c51259cf881355368a1.jpg", price: 635},
{id: 5, name: "Legs", description: "Small giraffe", category: "giraffe", quantity: 2, photo: "http://i.imgur.com/Ow7I3kZ.jpg", price: 235},
]

describe('<HomePage/>', () => {

  let root
  beforeEach('render the root', () =>
    root = shallow(<HomePage products={seedProducts} />)
  )

  it('has a grid system', () => {
    expect(root.find('div')).to.have.length(5)
  })

})

describe("<HomePage/>'s connection", () => {

  const state = {
    products: {products: seedProducts}
  }

  let root, store, dispatch
  beforeEach('create store and render the root', () => {
    store = createStore(state => state, state)
    dispatch = spy(store, 'dispatch')
    root = shallow(<HomePageContainer store={store}/>)
  })
