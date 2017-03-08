import React from 'react'
import chai, {expect} from 'chai'
chai.use(require('chai-enzyme')())
import {shallow} from 'enzyme'
chai.use(require('sinon-chai'))


import SingleProduct from './SingleProduct'

describe('<SingleProduct />', () => {
  let selectedProduct = {
      averageRating: null,
      category: "dog",
      created_at: "2017-03-07T22:48:06.786Z",
      description: "Small dog",
      id: 3,
      name: "Buster"
    }

  let root
  let wrapperComponent;

  beforeEach('render the root', () =>
    root = shallow(<SingleProduct selectedProduct={selectedProduct} />)
  )

  it('shows a product info', () => {
    wrapperComponent = root.node.props
    expect(wrapperComponent.className).to.equal("productInfo")
  })
  it('wrapper component shows a grid', () => {
    expect(wrapperComponent.children.props.className).to.equal("show-grid")
  })

})
