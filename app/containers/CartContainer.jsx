
import { connect } from 'react-redux'
import Cart from '../components/Cart'

export default connect(
  (state) => {
    return {
      lineItems: state.cart.lineItems
    }
  }
)(Cart)
