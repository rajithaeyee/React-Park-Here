import React from 'react';
// import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';
// import './Navbar.css';
import { Segment, Menu } from 'semantic-ui-react';

import { Link } from 'react-router-dom';

const navbar = (props)=>{
    return(
<Segment inverted style={{margin:"0px", borderRadius:"0px"}}>
<Menu inverted pointing secondary>
  <Menu.Item name='home'/>
  <Menu.Item
    name='messages'
  />
  <Menu.Item
    name='friends'
  >
  <Link to="/login" className="customNavLink">Login</Link>
  </Menu.Item>
</Menu>
</Segment>
    );
}
export default navbar;