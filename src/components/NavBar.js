import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar,NavDropdown,Button,Form,Nav} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignIn from './SignIn';
import Register from './Register';


function NavBar(){
    return(
      
      <Router>
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
  <Navbar.Brand to="home">React-Shop</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link as={Link} to="home">Home</Nav.Link>
      <Nav.Link as={Link} to="cart">Cart</Nav.Link>
      <NavDropdown title="All Products" id="basic-nav-dropdown">
        <NavDropdown.Item as={Link} to="/catalog/bedroom">Bedroom</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/catalog/livingroom">Living Room</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/catalog/diningroom">Dining Room</NavDropdown.Item> 
      </NavDropdown>
    </Nav>
    <Form inline>
        <Button as={Link} to="sign-in" className="space" variant="primary">
          Sign In
        </Button>
        
        <Button  as={Link} to="register" variant="secondary" >
          Create Account
        </Button>
      
    </Form>
  </Navbar.Collapse>
</Navbar>
            <Switch>
            <Route exact path='/sign-in' component={SignIn} />
            <Route/>
            </Switch>
            <Switch>
            <Route exact path='/register' component={Register} />
            <Route/>
            </Switch>

        </div>
        </Router>
        
    )
}




export default NavBar;