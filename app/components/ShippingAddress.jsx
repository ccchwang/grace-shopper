import React from 'react'
import { Grid, Row, Col, ControlLabel, FormGroup, FormControl, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export default function({ name, address }) {
  return (

   <Grid>
     <br />
     <Row className="show-grid">
     <FormGroup controlId="formControlsText">
       <Col componentClass={ControlLabel} sm={1}>Name</Col>
       <Col sm={4}>
         <FormControl type="text" name='text' placeholder="Enter Name" />
       </Col>
     </FormGroup>

     <br />
     <br />
     <FormGroup controlId="formControlsText">
       <Col componentClass={ControlLabel} sm={1}>Address</Col>
       <Col sm={4}>
         <FormControl type="text" name='text' placeholder="Enter Shipping Address" />
       </Col>
     </FormGroup>

     <br />
     <br />

        <Col sm={9}>
         <LinkContainer to="/SAVEADDRESSANDNAME" >
           <Button bsStyle="success" onClick={(e) => handleCartAdd(e, user, selectedProduct)}>Save</Button>
         </LinkContainer>
       </Col>
     </Row>

  </Grid>
  )
}
