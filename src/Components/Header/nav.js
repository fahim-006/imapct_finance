import { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';
import logo from '../../images/logo.png'

const Navigation  = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
  
    return(
        <div className="container">
        <Navbar color="#ffffff" light expand="md" style={{fontFamily: "poppins-medium"}}>
          <NavbarBrand href="/">
          <img src={logo} alt="impacts.finance" className="logo"/>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse  isOpen={isOpen} navbar >
            <Nav className="justify-content-end" style={{width: "100%"}}>
              <NavItem>
                <NavLink style={{color: "#000000"}} href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{color: "#000000"}} href="#">Greenpaper</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{color: "#000000"}} href="/cause">Cause</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{color: "#000000"}} href="/howtobuy">How to buy</NavLink>
              </NavItem>
              
            </Nav>
           
          </Collapse>
        </Navbar>
      </div>
    );
}

export default Navigation;