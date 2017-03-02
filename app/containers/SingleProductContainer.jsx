import { connect } from 'react-redux'
import SingleProduct from '../components/SingleProduct'
import axios from 'axios'
import {receiveLineItem} from '../reducers/cart'


export default connect(
  (state) => {
    return {
      selectedProduct: state.products.selectedProduct,
      user: state.auth
    }
  },
  (dispatch) => {
    return {
      handleCartAdd: function(e, user, selectedProduct) {
        e.preventDefault();
        axios.post(`/api/cart/${user.id}`, {product: selectedProduct})
          .then(createdLineItem => {
            dispatch(receiveLineItem(createdLineItem.data))
          })
          .catch(console.error)
      }
    }
  }
)(SingleProduct)

