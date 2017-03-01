import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'


export default function({selectedProduct}) {
  


  return (
    <Grid>
      <Row className="show-grid">
        <Col sm={12} md={5}>
            <img className="image-responsive" src={selectedProduct.photo} />
        </Col>
        <Col sm={12} md={7}> 
            <h1> {selectedProduct.name} </h1>
        </Col>
      </Row>
    </Grid>
  )
}
