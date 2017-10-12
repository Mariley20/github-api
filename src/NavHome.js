import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavLink} from 'react-router-dom';
const NavHome = ( {model} ) => {
	return (
    <div>
        <Nav>
          <NavItem>
            <NavLink to={"/home"}> Home </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to={"/battle"}> Battle </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to={"/popular"}> Popular </NavLink>
          </NavItem>
        </Nav>
      </div>
	);
}
export default NavHome;
