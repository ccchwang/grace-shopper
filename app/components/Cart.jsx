import React from 'react'
import { Grid, Row, Col, Button, FormControl, Form, FormGroup, ControlLabel } from 'react-bootstrap'
import { Link } from 'react-router'


export default function({ lineItems }) {

  let total = 0;

  let rows = lineItems && lineItems.map(item => {
    let price = (item.product.price * item.quantity).toFixed(2);
    total += +price;

    return (
      <div key={item.id} >
        <Row className="show-grid">
          <Col sm={2} md={2} >
            <img className="image-responsive" src={item.product.photo} />
          </Col>

          <Col sm={5} md={5} >
            <h3>{item.product.name}</h3>
            <br />
            <Form inline>
              <FormGroup controlId="formInlineName">
                <ControlLabel><h4>Quantity: </h4></ControlLabel>
                {' '}
                <FormControl className="quantity-form" type="text" defaultValue={item.quantity} />
              </FormGroup>
            </Form>
          </Col>

          <Col sm={2} md={2}>
            <h4>${price}
            </h4>
          </Col>
          <br />
          <Button bsStyle='danger'>Remove</Button> <Button bsStyle='primary'>Update Cart</Button>

        </Row>
        <hr />
      </div>
    )
  })

  if (!rows.length) {rows = <h4>You don't have any cuties yet!</h4>}
  total = total === 0 ? null : '$' + total;

  return (
    <Grid className="cart">
      <h1>Your Cart</h1>
      <br />
      <br />
       <Row className="show-grid">
         { rows }
       </Row>
       <Row className="show-grid">
         <Col sm={2} md={2} />
         <Col sm={2} md={5} />
         <Col sm={2} md={2}><h4>{total}</h4></Col>
         <Button bsStyle='info'>PROCEED TO CHECKOUT</Button>
       </Row>
    </Grid>
  )
}
