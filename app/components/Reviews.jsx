import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import CreateReviewContainer from '../containers/CreateReviewContainer'


export default class Reviews extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      selectedProduct: props.selectedProduct
    }
  }

  render() {
    const reviews = this.props.reviews;

    let ratingSum = 0;
    let avgRating;
    for (var i = 0; i < reviews.length; i++) {
      ratingSum += +reviews[i].rating
    }
    const avg = (ratingSum / reviews.length).toFixed(1);
    if (isNaN(avg)) {
      avgRating = 'No Reviews Yet';
    } else {
      avgRating = avg + ' / 5';
    }

    const rows = reviews.length > 0 && reviews.map(review => {
      return (
        <div key={review.id} >
          <Row className="show-grid">
            <Col sm={12} md={2} >
              <h4><strong>{review.user.name}</strong></h4>
            </Col>

            <Col sm={12} md={8} >
              <div className="rating-stars">
                { `★`.repeat(review.rating) }
                { `☆`.repeat(5-review.rating) }
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
      <Grid id="reviews">
        <h2>Reviews</h2> 
        <div className="avg-rating">
            <h5>Average Rating: {avgRating}</h5>
        </div>
        <CreateReviewContainer />
        <hr />
          { rows }
      </Grid>
    )
  }
}

