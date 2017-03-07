import { connect } from 'react-redux'
import ConfirmOrder from '../components/ConfirmOrder'

export default connect(
  (state) => {
    return {
      userId: state.auth.id,
      order: state.order.selectedOrder
    }
  }
)(ConfirmOrder)
