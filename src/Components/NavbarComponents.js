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
       <Container style={{backgroundColor:'#FDFBF6'}}> 
        <NavbarBrand href="/" style={{backgroundColor: '#FFF0F3'}}>Sukma Rizki Andiantiko S</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/datagit" style={{backgroundColor: '#FEE1E6'}}>Data API dari GIT</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/dataappresapi" style={{backgroundColor: '#CECCE4'}}>Data API dari appresapi</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/repositori" style={{backgroundColor: '#E6F7F1'}}>Repositories github</NavLink>
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