import React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import axios from 'axios'
import { receiveProduct } from '../reducers/products'
import AdminPage from '../components/AdminPage'

export default connect(null,
  (dispatch) => {
    return {
      handleSubmit: function(productInfo) {

        axios.post('/api/products', {
          name: productInfo.name,
          description: productInfo.description,
          category: productInfo.category,
          price: productInfo.price,
          imgUrl: productInfo.imgUrl
        })
        .then(product => {
          dispatch(receiveProduct(product.data))
          browserHistory.push('/')
        })
        .catch(console.error)
      }
    }
  }
)(class extends React.Component {
  constructor () {
    super();
    this.state = {
      invalidName: null,
      invalidDescript: null,
      invalidCategory: null,
      invalidPrice: null
    }
    this.handleInputCheck = this.handleInputCheck.bind(this)
  }

  handleInputCheck (e) {
    e.preventDefault();
    const name = e.target.name.value;
    const description = e.target.description.value;
    const category = e.target.category.value;
    const price = e.target.price.value * 100;
    const imgUrl = e.target.imgUrl.value;
    let invalid = false;
console.log(price)
    if (!name || !description || !category || !price) {
      if (!name) this.setState({invalidName: "error"})
      if (!description) this.setState({invalidDescript: "error"})
      if (!category) this.setState({invalidCategory: "error"})
      if (!price) this.setState({invalidPrice: "error"})
      invalid = true;
    }

    if (!invalid) {
      this.props.handleSubmit({name, description, category, price, imgUrl})
    }
  }

  render () {
    return <AdminPage inputCheck={this.state} handleInputCheck={this.handleInputCheck}/>
  }
})

