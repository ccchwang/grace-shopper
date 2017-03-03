import React from 'react'
import { connect } from 'react-redux'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl, Button } from 'react-bootstrap'
import { Route, RouteHandler, Link } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap'
import { logout } from '../reducers/auth'

class MyNavbar extends React.Component {
  constructor(props) {
    super(props)
    this.renderLoginSignup = this.renderLoginSignup.bind(this)
    this.renderLogout = this.renderLogout.bind(this)
  }



  render () {
    return (
       <Navbar inverse collapseOnSelect fixedTop id="navbar">
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/home">Cuties</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavDropdown eventKey={2} title="Shop" id="basic-nav-dropdown">
              <MenuItem eventKey={2.1}>Kittens</MenuItem>
              <MenuItem eventKey={2.2}>Puppies</MenuItem>
              <MenuItem eventKey={2.3}>Piglets</MenuItem>
            </NavDropdown>
          </Nav>

          {this.props.auth ? this.renderLogout() : this.renderLoginSignup()}

            <Navbar.Form pullLeft>
              <FormGroup>
                <FormControl type="text" placeholder="Search" />
              </FormGroup>
              <Button type="submit">Submit</Button>
            </Navbar.Form>

          <Nav pullRight>
            <LinkContainer to="/cart">
             <NavItem eventKey={2}>Cart ({this.props.lineItems.length}) </NavItem>
            </LinkContainer>
          </Nav>


        </Navbar.Collapse>
      </Navbar>
    )
  }


  renderLoginSignup() {
    return (
      <Nav pullRight>
        <LinkContainer to="/login">
          <NavItem eventKey={1}>Login</NavItem>
        </LinkContainer>
        <LinkContainer to="/signup">
          <NavItem eventKey={2}>Sign Up</NavItem>
        </LinkContainer>
      </Nav>
    )
  }

  renderLogout() {
    return (
      <Nav pullRight>
        <LinkContainer to="/">
          <NavItem eventKey={1} onClick={this.props.logout}>Logout</NavItem>
        </LinkContainer>
      </Nav>
    );
  }
}

const mapState = ({auth, cart}) => ({auth: auth, lineItems: cart.lineItems});

const mapDispatch = dispatch => ({
  logout: () => {
    dispatch(logout());
    // browserHistory.push('/'); // removed to demo logout instant re-render
  }
});

export default connect(mapState, mapDispatch)(MyNavbar);
