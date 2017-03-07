import { connect } from 'react-redux'
import React, { Component } from 'react'
import { Grid, Row, Col, Button, FormControl, Form, FormGroup, ControlLabel } from 'react-bootstrap'
import { Link } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap'
import ShippingAddress from "../components/ShippingAddress"
import axios from 'axios'
import {receiveOrder } from '../reducers/order'
import {receiveLineItems} from '../reducers/cart'

class OrderContainer extends Component {

  constructor (props) {
    super(props)
    this.state = {
      name: "",
      address: "",
      totalPrice: 0,
      enteredShipping: false,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.handleOrderSubmit = this.handleOrderSubmit.bind(this)
  }

  handleChange(input, event) {
    const change = {};
    const value = event.target.value
    change[input] = value

    this.setState(change)
  }

  handleSave (event) {
    event.preventDefault()
    this.setState({enteredShipping: !this.state.enteredShipping})
  }

  handleOrderSubmit() {
    const cartInfo = {
      name: this.state.name,
      address: this.state.address,
      userId: this.props.userId,
      cartId: this.props.lineItems[0].cart_id,
      totalPrice: this.state.totalPrice
    }
    this.props.createOrder(cartInfo)
  }

  componentWillReceiveProps(nextProps){
    let total = 0;
    let totalPrice = nextProps.lineItems.forEach(item => {
      let price = (item.product.price * item.quantity).toFixed(2)
      total += +price;
    })
    this.setState({totalPrice: total})
  }


  render() {
    let total = 0;
    let lineItems = this.props.lineItems

  let rows = lineItems && lineItems.map(item => {
    let price = (item.product.price * item.quantity).toFixed(2);
    total += +price;

    return (
      <div key={item.id} >
        <Row className="show-grid">
          <Col sm={2} md={2} >
            <Link to={`products/${item.product.id}`}>
              <img className="image-responsive" src={item.product.photo} />
            </Link>
          </Col>

          <Col sm={5} md={5} >
            <h3>{item.product.name}</h3>
            <br />
            <Form inline>
              <FormGroup controlId="formInlineName">
                <ControlLabel><h4>Quantity: {item.quantity}</h4></ControlLabel>
                </FormGroup>
            </Form>
          </Col>

          <Col sm={2} md={2}>
            <h4>${price}</h4>
          </Col>
          <br />

        </Row>
        <hr />
      </div>
    )
  })


    return (
      <Grid className="order">
        <h1>Enter Shipping Address:</h1>
            {this.state.enteredShipping === false ? <ShippingAddress
             handleSave={this.handleSave}
             handleChange={this.handleChange}
             state={this.state}
              /> :
              <div>
                  <Col componentClass={ControlLabel} sm={1}>Name: </Col>
                  <Col sm={4}>
                  {this.state.name}
                  </Col>
                  <br />
                  <br />

                    <Col componentClass={ControlLabel} sm={1}>Address: </Col>
                    <Col sm={4}>
                    {this.state.address}
                    </Col>

              </div>
            }
        <br />

        <h1>Review Items: </h1>
          <Row className="show-grid">
            <Col sm={2} md={2} />
            <Col sm={2} md={5} />
            <Col sm={2} md={2} />
              <LinkContainer to="/cart" >
                <Button>Edit Order</Button>
              </LinkContainer>
          </Row>

         <Row className="show-grid">
           { rows }
         </Row>
         <Row className="show-grid">
           <Col sm={2} md={2} />
           <Col sm={5} md={5} >
             <h4>Total Price:</h4>
           </Col>
           <Col sm={2} md={2}>
             <h4>{total}</h4>
            </Col>
            <LinkContainer to="/confirmed" >
              <Button onClick={this.handleOrderSubmit} bsStyle='warning'>
                Place Order
              </Button>
            </LinkContainer>

         </Row>
      </Grid>
    )
  }
}



export default connect(
  (state) => {
    return {
      lineItems: state.cart.lineItems,
      userId: state.auth.id,
      order: state.order.selectedOrder
    }
  },
  (dispatch) => {
    return {
      createOrder: function(cartInfo){
        axios.post('/api/order/neworder', cartInfo)
          .then(function (newOrder) {
            dispatch(receiveOrder(newOrder.data))
          })
          .then(() => dispatch(receiveLineItems([])))
          .catch(console.error)
      }
    }
  }
)(OrderContainer)
