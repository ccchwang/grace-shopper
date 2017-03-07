import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap'
import { removeProduct } from '../reducers/products'

export default connect(
  (state) => {
    return {
      products: state.products.products
    }
  },
  (dispatch) => {
    return {
      handleDelete: function(e, id) {
        axios.delete(`/api/products/${id}`)
            .then(() => dispatch(removeProduct(id)))
            .catch(console.error)
      }
    }
  }
)(function({ products, handleDelete }) {

const columns = products && products.map(product =>
  <Col xs={6} md={4} key={product.id}>
    <Thumbnail src={product.photo} alt="242x200">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>
        <Button bsStyle="primary">Edit</Button>&nbsp;
        <Button bsStyle="danger" onClick={(e) => handleDelete(e, product.id)}>Delete</Button>
      </p>
    </Thumbnail>
  </Col>
)

  return (
    <div>
      <h2>Edit a Baby</h2>
      <Grid>
        <Row className="show-grid main-padding">
          { columns }
        </Row>
      </Grid>
    </div>
  )
})
