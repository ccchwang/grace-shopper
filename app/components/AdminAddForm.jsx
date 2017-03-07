import React from 'react'
import { Form, Alert, FormGroup, ControlLabel, FormControl, Button, HelpBlock } from 'react-bootstrap'

export default function({ handleInputCheck, invalidName, invalidDescript, invalidCategory, invalidPrice, successfulAdd }) {

  return (
    <div className="main-padding">
      <h2>Add a New Baby</h2>
      <Form onSubmit={handleInputCheck}>

      <FormGroup validationState={invalidName}>
        <ControlLabel>Name</ControlLabel>
        {' '}
        <FormControl name="name" type="text" placeholder="Fuzzy" />
        { invalidName && <HelpBlock>Name cannot be blank.</HelpBlock> }
        <FormControl.Feedback />
      </FormGroup>
      {' '}
      <FormGroup validationState={invalidPrice}>
        <ControlLabel>Price</ControlLabel>
        {' '}
        <FormControl name="price" type="text" placeholder="$100.00" />
        { invalidPrice && <HelpBlock>Price cannot be blank.</HelpBlock> }<FormControl.Feedback />
      </FormGroup>
      {' '}
      <FormGroup validationState={invalidCategory}>
        <ControlLabel>Category</ControlLabel>
        {' '}
        <FormControl name="category" type="text" placeholder="piglet" />
        <HelpBlock>Category must be lowercase.</HelpBlock>
        { invalidCategory && <HelpBlock>Category cannot be blank.</HelpBlock> }
      </FormGroup>
      {' '}
      <FormGroup validationState={invalidDescript}>
        <ControlLabel>Description</ControlLabel>
        <FormControl name="description" componentClass="textarea" placeholder="Best baby ever!" />
        { invalidDescript && <HelpBlock>Description cannot be blank.</HelpBlock> }
      </FormGroup>

      <FormGroup>
        <ControlLabel>Image URL</ControlLabel>
        {' '}
        <FormControl name="imgUrl" type="text" placeholder="wwww.cute.com" />
      </FormGroup>
      {' '}

      <Button type="submit" bsStyle="success">
        Add Product
      </Button>
      <br /><br />
      { successfulAdd &&
        <Alert bsStyle="success">
          <strong>Hooray!</strong> Added successfully.
        </Alert>
      }

    </Form>
  </div>
  )
}


/**

 photos
 categories
 */
