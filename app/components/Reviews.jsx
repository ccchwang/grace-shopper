import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

export default function(props) {

  const rows = props.reviews && props.reviews.map(review => {
    return (
      <div key={review.id} >
        <Row className="show-grid">
          <Col sm={12} md={2} >
            <h4><strong>{review.user.name}</strong></h4>
          </Col>

          <Col sm={12} md={8} >
            <div className="rating-stars">
              <span>★</span>
              <span>☆</span>
              <span>☆</span>
              <span>☆</span>
              <span>☆</span>
            </div>
            <br />
            {review.description}
          </Col>

          <Col sm={12} md={2}>
            {review.date}
          </Col>
          <br />
        </Row>
        <hr />
      </div>
    )
  })

  return (
   <Grid>
     <h3>Reviews</h3>
     <hr />
      { rows }
    </Grid>
  )
}
