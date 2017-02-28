
import { connect } from 'react-redux'
import HomePage from '../components/HomePage'

export default connect(
  (state) => {
    return {
      products: state.products.products
    }
  }
)(HomePage)
