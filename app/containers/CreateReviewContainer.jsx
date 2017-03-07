import { connect } from 'react-redux'
import CreateReview from '../components/CreateReview'
import {receiveReview} from '../reducers/reviews'
import axios from 'axios'



export default connect(
  (state) => {
    return {
      selectedProduct: state.products.selectedProduct,
      user: state.auth
    }
  },
  (dispatch => {
    return {
      handleSubmit: function(description, rating, userId, productId) {
          const newReview = {
            description: description,
            rating: rating,
            user_id: userId,
            product_id: productId
          }
          console.log('newReview: ', newReview)
          axios.post(`/api/products/reviews/${productId}`, newReview)
            .then((created) => {
              console.log('created in handleSubmit: ', created)
              dispatch(receiveReview(created))
            })
            .catch(console.error)
      }
    }
  })
)(CreateReview)