import React, {Component} from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import axios from 'axios'

class ConfirmOrder extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: "",
      address: "",
      totalPrice: 0,
      status: ""
    }

    this.getOrderInfo = this.getOrderInfo.bind(this)
  }

  getOrderInfo(){
    let userId = this.props.userId
    console.log('this', this)
    axios.get(`/api/order/${userId}`)
      .then(function(order) {

        this.setState({
          name: order.data.name
        })
      })
      .catch(console.error)
  }

  componentDidMount(){
    this.getOrderInfo()
    // console.log('thismount', this)
  }

  render(){
    // console.log('state', this.state)
    return (
      <Grid className="confirmed">
          <h1>Your order has been confirmed!</h1>
      </Grid>
    )
  }


}

export default connect(
  (state) => {
    return {
      userId: state.auth.id
    }
  }
)(ConfirmOrder)
