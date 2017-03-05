import { connect } from 'react-redux'
import Order from '../components/Order'

export default connect(
  (state) => {
    return {
      lineItems: state.cart.lineItems
    }
  }
)(Order)
