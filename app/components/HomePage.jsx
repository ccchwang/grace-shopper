import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'


export default function(props) {
  const boxes = props.products.map((product, index) => {
    const gridBackground = { backgroundImage: `url(${product.photo})` }

    if (index === 0 || index % 14 === 0) {
      return (
        <Col style={gridBackground} sm={6} md={6} className="wide-grid-box" key={product.id} />
      )
    }
    else if (index === 10 || index % 14 === 10) {
      return (
        <Col style={gridBackground} sm={6} md={6} className="wide-grid-box float-right" key={product.id} />
      )
    }
    else {
      return <Col style={gridBackground} sm={6} md={2} className="grid-box" key={product.id} />
    }
  })


  return (
    <div className="home-page">
      <Grid>
        <Row className="show-grid">
          { boxes }
        </Row>
      </Grid>
    </div>
  )
}
