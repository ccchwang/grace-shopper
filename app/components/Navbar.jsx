import React from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl, Button } from 'react-bootstrap'
import { Route, RouteHandler, Link } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap';

export default function(props) {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/home">Cuties</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">Link</NavItem>
            <NavDropdown eventKey={2} title="Shop" id="basic-nav-dropdown">
              <MenuItem eventKey={2.1}>Kittens</MenuItem>
              <MenuItem eventKey={2.2}>Puppies</MenuItem>
              <MenuItem eventKey={2.3}>Piglets</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={2.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>

          <Nav pullRight>
            <LinkContainer to="/login">
              <NavItem eventKey={1}>Login</NavItem>
            </LinkContainer>
            <LinkContainer to="/signup">
              <NavItem eventKey={2}>Sign Up</NavItem>
            </LinkContainer>
          </Nav>

          <Nav pullRight>
            <Navbar.Form>
              <FormGroup>
                <FormControl type="text" placeholder="Search" />
              </FormGroup>
              {' '}
              <Button type="submit">Submit</Button>
            </Navbar.Form>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}
