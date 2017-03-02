import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router'


export default function(props) {
  const boxes = props.products.map((product, index) => {
    const gridBackground = { backgroundImage: `url(${product.photo})`, cursor: "pointer" }

    if (index === 0 || index % 14 === 0) {
      return (
        <Col style={gridBackground} sm={6} md={6} className="wide grid-box" key={product.id} >
          <Link to={`products/${product.id}`}>
            <div className='grid-box-hover'><h3>{product.name}<br />${product.price}</h3></div>
          </Link>
        </Col>
      )
    }
    else if (index === 10 || index % 14 === 10) {
      return (
        <Col style={gridBackground} sm={6} md={6} className="wide grid-box float-right" key={product.id} >
          <Link to={`products/${product.id}`}>
            <div className='grid-box-hover'><h3>{product.name}<br />${product.price}</h3></div>
          </Link>
        </Col>
      )
    }
    else {
      return <Col style={gridBackground} sm={6} md={2} className="grid-box" key={product.id}>
        <Link to={`products/${product.id}`}>
          <div className='grid-box-hover'><h3>{product.name}<br />${product.price}</h3></div>
        </Link>
      </Col>
    }
  })


  return (
    <Grid>
       <Row className="show-grid">
         { boxes }
       </Row>
    </Grid>
  )
}
