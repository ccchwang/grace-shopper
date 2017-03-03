
import { connect } from 'react-redux'
import Cart from '../components/Cart'
import axios from 'axios'
import {removeLineItem, updateLineItem} from '../reducers/cart'
import React from 'react'

export default connect(
  (state) => {
    return {
      lineItems: state.cart.lineItems
    }
  }, (dispatch) => {
    return {
      handleRemove: function(e, lineItemId) {
        e.preventDefault();
        axios.delete(`/api/cart/item/${lineItemId}`)
          .then(status => {
            dispatch(removeLineItem(lineItemId))
          })
          .catch(console.error)
      },
      handleUpdate: function(e, lineItemId) {
        e.preventDefault();
        axios.put(`/api/cart/item/${lineItemId}`, {newQuantity: e.target.inputField.value})
          .then((newQuantity) => dispatch(updateLineItem(lineItemId, newQuantity.data)))
          .catch(console.error)
      }
    }
  }
)(Cart)
