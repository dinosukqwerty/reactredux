import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Container
} from 'reactstrap';
import '../css/nav.css';

const NavbarComponents = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
       <Container style={{backgroundColor: '#C1e6FF'}}>
       <NavbarBrand href="/" style={{backgroundColor: '#F9E3A2'}}>Sukma Rizki Andiantiko S</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/datagit" style={{backgroundColor: '#D9C0a7'}}>Data API dari GIT</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/dataappresapi" style={{backgroundColor: '#7984EE'}}>Data API dari appresapi</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/dinosukqwerty" style={{backgroundColor: '#D2f6FC'}}>Repositories github</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Admin</NavbarText>
        </Collapse>
       </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComponents;