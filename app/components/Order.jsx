import React from 'react'
import { Grid, Row, Col, Button, FormControl, Form, FormGroup, ControlLabel } from 'react-bootstrap'
import { Link } from 'react-router'
import OrderContainer from '../containers/OrderContainer'
import { LinkContainer } from 'react-router-bootstrap'
import ShippingAddressContainer from '../containers/ShippingAddressContainer'


//--N.A.: {rows} as separate component 
export default function ({lineItems}) {

let total = 0;

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
           <ShippingAddressContainer />

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
          <LinkContainer to="/SOMETHINGHERE" >
            <Button bsStyle='warning'>
              Place Order
            </Button>
          </LinkContainer>

       </Row>
    </Grid>
  )
}
