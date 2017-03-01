import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'


export default function(props) {
  const boxes = props.products.map((product, index) => {
    const gridBackground = { backgroundImage: `url(${product.photo})`, cursor: "pointer" }

    if (index === 0 || index % 14 === 0) {
      return (
        <Col style={gridBackground} sm={6} md={6} className="wide grid-box" key={product.id} >
          <div className='grid-box-hover'>{product.name}, ${product.price/100}</div>
        </Col>
      )
    }
    else if (index === 10 || index % 14 === 10) {
      return (
        <Col style={gridBackground} sm={6} md={6} className="wide grid-box float-right" key={product.id} >
          <div className='grid-box-hover'>{product.name}, ${product.price/100}</div>
        </Col>
      )
    }
    else {
      return <Col style={gridBackground} sm={6} md={2} className="grid-box" key={product.id}>
        <div className='grid-box-hover'>{product.name}, ${product.price/100}</div>
      </Col>
    }
  })


  return (
    <div className="grid-box"></div>
  )
}
