import { connect } from 'react-redux'
import React, { Component } from 'react'
import { Grid, Row, Col, Button, FormControl, Form, FormGroup, ControlLabel } from 'react-bootstrap'
import { Link } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap'
import ShippingAddress from "../components/ShippingAddress"
import axios from 'axios'


class OrderContainer extends Component {

  constructor (props) {
    super(props)
    this.state = {
      name: "",
      address: "",
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
    console.log(this.state);
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
    }
    console.log("Cart infor in handleOrderSubmit", cartInfo)
    axios.post('/api/order/neworder', cartInfo)
    .then(function (newOrder) {
      console.log("TESTING ", newOrder.data)
      return newOrder.data
    })
    .catch(console.error)
  }

  render() {
    console.log("PROPS-------", this.props)
    console.log("STATE--------", this.state)
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

              <Button onClick={this.handleOrderSubmit} bsStyle='warning'>
                Place Order
              </Button>


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
    }
  }
)(OrderContainer)
