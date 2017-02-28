import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'


export default function(props) {
  return (
    <div className="home-page">
      <Grid>
        <Row className="show-grid">
          <Col sm={6} md={6} className="wide-grid-box" >

          </Col>
          <Col sm={6} md={2} className="grid-box"></Col>
          <Col sm={6} md={2} className="grid-box"></Col>
          <Col sm={6} md={2} className="grid-box"></Col>
          <Col sm={6} md={2} className="grid-box"></Col>
          <Col sm={6} md={2} className="grid-box"></Col>
          <Col sm={6} md={2} className="grid-box"></Col>
        </Row>
        <Row className="show-grid">
          <Col sm={6} md={2} className="grid-box"></Col>
          <Col sm={6} md={2} className="grid-box"></Col>
          <Col sm={6} md={2} className="grid-box"></Col>
          <Col sm={6} md={6} className="wide-grid-box float-right" />
          <Col sm={6} md={2} className="grid-box"></Col>
          <Col sm={6} md={2} className="grid-box"></Col>
          <Col sm={6} md={2} className="grid-box"></Col>

        </Row>

      </Grid>

    </div>
  )
}
