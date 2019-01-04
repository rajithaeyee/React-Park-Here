import React from 'react';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';
import './Navbar.css';
import { Link } from 'react-router-dom';

const navbar = (props)=>{
    return(
        <Navbar inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
    <Link to="/">Park Here</Link>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavItem eventKey={1} href="#">
        Link
      </NavItem>
      <NavItem eventKey={2} href="#">
        Link
      </NavItem>
      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3}>Separated link</MenuItem>
      </NavDropdown>
    </Nav>
    <Nav pullRight>
      <NavItem eventKey={1} href="#">
        Link Right
      </NavItem>
      <NavItem eventKey={2}>
      <Link to="/login" className="customNavLink">Login</Link>
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
}
export default navbar;