import React from 'react'
import { Grid } from 'react-bootstrap'

export default function({order}) {
    return (
      <Grid className="confirmed">
          <h1>Your order has been confirmed!</h1>
          <h2>Shipped to: {order.name} at {order.address}</h2>
          <h2>Total Price: {order.totalPrice}</h2>
      </Grid>
    )
}
