import React from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl, Button } from 'react-bootstrap'


export default function(props) {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Cuties</a>
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
            <NavItem eventKey={1} href="#">Login</NavItem>
            <NavItem eventKey={2} href="#">Sign Up</NavItem>
          </Nav>

          <Nav pullRight>
            <NavItem >
            <Navbar.Form className="ss">
              <FormGroup>
                <FormControl type="text" placeholder="Search" />
              </FormGroup>
              {' '}
              <Button type="submit">Submit</Button>
            </Navbar.Form>
            </NavItem>
          </Nav>


        </Navbar.Collapse>
      </Navbar>
    )
}
