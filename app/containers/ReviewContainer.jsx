
import { connect } from 'react-redux'
import Reviews from '../components/Reviews'

export default connect(
  (state) => {
    return {
      reviews: state.reviews.reviews,
      selectedProduct: state.products.selectedProduct
    }
  }
)(Reviews)
