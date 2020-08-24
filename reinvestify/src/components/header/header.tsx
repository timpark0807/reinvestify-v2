import React from 'react';
import Navbar from 'react-bootstrap/NavBar' 
import Nav from 'react-bootstrap/Nav'

function Header() {
    return (
      <div> 
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">REInvestify</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
            </Nav>
        </Navbar>
      </div>
    );
  }
  
export default Header;
  