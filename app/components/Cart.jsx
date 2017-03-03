import React from 'react'
import { Grid, Row, Col, Button, FormControl, Form, FormGroup, ControlLabel } from 'react-bootstrap'
import { Link } from 'react-router'


export default function({ lineItems }) {

  const rows = lineItems && lineItems.map(item => {
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
            <h4>${item.product.price}</h4>
          </Col>
          <br />
          <Button bsStyle='danger'>Remove</Button> <Button bsStyle='primary'>Update Cart</Button>

        </Row>
        <hr />
      </div>
    )
  })

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
         <Col sm={2} md={2}>price here</Col>
         <Button bsStyle='info'>PROCEED TO CHECKOUT</Button>
       </Row>
    </Grid>
  )
}
