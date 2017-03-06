import React from 'react'
import {Form, Col, FormGroup, Checkbox, Button, ControlLabel, FormControl} from "react-bootstrap"

export const Login = ({ login }) => (
  <div className="login-container">



  <Form horizontal onSubmit={evt => {
    evt.preventDefault()
    login(evt.target.email.value, evt.target.password.value)
  } }>

    <FormGroup>
    <Col smOffset={4}>
    <Button className="buffer oauth provider-login-btn" bsStyle="danger" href="/api/auth/login/google" bsSize="large">Login with Google
    </Button>
    </Col>
    </FormGroup>

    <FormGroup>
    <Col smOffset={4}>
    <Button className="buffer oauth provider-login-btn" bsStyle="info" href="/api/auth/login/facebook" bsSize="large">Login with Facebook
    </Button>
    </Col>
    </FormGroup>

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

export default connect(null, {login})(Login)
