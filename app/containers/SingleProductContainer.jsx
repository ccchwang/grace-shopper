import { connect } from 'react-redux'
import SingleProduct from '../components/SingleProduct'

export default connect(
  (state) => {
    return {
      selectedProduct: state.products.selectedProduct
    }
  }
)(SingleProduct)
