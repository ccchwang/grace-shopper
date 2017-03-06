import { connect } from 'react-redux'
import ShippingAddress from '../components/ShippingAddress'

export default connect(
  (state) => {
    return {
      name: state.address.name,
      address: state.address.address
    }
  },
  (dispatch) => {
    return {
      handleAddress: function(e, user, selectedProduct) {
        e.preventDefault();
        // axios.post(`/api/cart/${user.id}`, {product: selectedProduct})
          // .then(createdLineItem => dispatch(receiveLineItem(createdLineItem.data)))
          // .catch(console.error)
      }
    }
  }
)(ShippingAddress)
