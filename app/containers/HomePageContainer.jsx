
import { connect } from 'react-redux'
import HomePage from '../components/HomePage'

//--N.A.: products.products?
export default connect(
  (state) => {
    return {
      products: state.products.products
    }
  }
)(HomePage)
