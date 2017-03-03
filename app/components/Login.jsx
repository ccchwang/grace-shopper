import React from 'react'
import {PageHeader, Form, Col, FormGroup, Checkbox, Button, ControlLabel, FormControl} from "react-bootstrap"

export const Login = ({ login }) => (
  <div className="login-container">



  <Form horizontal onSubmit={evt => {
    evt.preventDefault()
    login(evt.target.email.value, evt.target.password.value)
  } }>

  <Button className="buffer oauth">
    <a href="/auth/google" className="btn btn-danger"><span className="fa fa-google-plus"></span>Login with Google</a>
 </Button>

    <FormGroup controlId="formHorizontalEmail">
      <Col componentClass={ControlLabel} smOffset={2} sm={2}>
        Email
      </Col>
      <Col sm={4}>
        <FormControl type="email" name='email' placeholder="Email" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalPassword">
      <Col componentClass={ControlLabel} smOffset={2} sm={2}>
        Password
      </Col>
      <Col sm={4}>
        <FormControl type="password" name='password' placeholder="Password" />
      </Col>
    </FormGroup>

    <FormGroup>
      <Col smOffset={4} sm={10}>
        <Checkbox>Remember me</Checkbox>
      </Col>
    </FormGroup>

    <FormGroup>
      <Col smOffset={4} sm={10}>
        <Button type="submit" value="Login">
          Sign in
        </Button>
      </Col>
    </FormGroup>
  </Form>
  </div>

)

import {login} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect (
  state => ({}),
  {login},
) (Login)
