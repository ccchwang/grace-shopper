import React, { Component } from 'react'
import { Grid, Row, Col, ControlLabel, FormGroup, FormControl, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


export default class ShippingAddress extends Component {
  render () {

    const handleChange = this.props.handleChange
    const handleSave = this.props.handleSave
    const state = this.props.state

    return (
       <Grid>
         <br />
         <Row className="show-grid">
         <FormGroup controlId="formControlsText">
           <Col componentClass={ControlLabel} sm={1}>Name</Col>
           <Col sm={4}>
             <FormControl onChange={handleChange.bind(this, "name")} value={state.name} type="text" name='text' placeholder="Enter Name" />
           </Col>
         </FormGroup>

         <br />
         <br />
         <FormGroup controlId="formControlsText">
           <Col componentClass={ControlLabel} sm={1}>Address</Col>
           <Col sm={4}>
             <FormControl onChange={handleChange.bind(this, "address")} value={state.address} type="text" name='text' placeholder="Enter Shipping Address" />
           </Col>
         </FormGroup>

         <br />
         <br />

            <Col sm={9}>
               <Button bsStyle="success" onClick={handleSave}>Save</Button>
           </Col>
         </Row>

      </Grid>
    )
  }
}

// export default function({ name, address }) {
//   return (

//    <Grid>
//      <br />
//      <Row className="show-grid">
//      <FormGroup controlId="formControlsText">
//        <Col componentClass={ControlLabel} sm={1}>Name</Col>
//        <Col sm={4}>
//          <FormControl type="text" name='text' placeholder="Enter Name" />
//        </Col>
//      </FormGroup>

//      <br />
//      <br />
//      <FormGroup controlId="formControlsText">
//        <Col componentClass={ControlLabel} sm={1}>Address</Col>
//        <Col sm={4}>
//          <FormControl type="text" name='text' placeholder="Enter Shipping Address" />
//        </Col>
//      </FormGroup>

//      <br />
//      <br />

//         <Col sm={9}>
//          <LinkContainer to="/SAVEADDRESSANDNAME" >
//            <Button bsStyle="success" onClick={(e) => handleCartAdd(e, user, selectedProduct)}>Save</Button>
//          </LinkContainer>
//        </Col>
//      </Row>

//   </Grid>
//   )
// }
