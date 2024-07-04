import React, {useState} from 'react'
import { Container, Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import { Sling as HamburgerIcon } from 'hamburger-react'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import CustomButton from '../buttons/CustomButton'
import '../../styles/navbar.css'
import Logo from '../../images/logo.svg'


const navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container fluid className="custom-container">
        <Navbar.Brand href="/">
          <img
            src={Logo} 
            alt="Logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="custom-toggler"
          onClick={() => setOpen(!isOpen)}
        >
          <HamburgerIcon toggled={isOpen} toggle={setOpen} size={24}/>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav" className={`collapse ${isOpen ? 'show' : ''}`}>
          <Nav className="nav-list">
            <Nav.Link href="/" className='link'>Home</Nav.Link>
            <Nav.Link href="/about" className='link'>About</Nav.Link>
            <Nav.Link href="/services" className='link'>Services</Nav.Link>
            <Nav.Link href="/contact" className='link'>Contact</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
        
        <div className="CustomButton-container">
            <CustomButton />
        </div>

      </Container>

        

    </Navbar>
  );
}

export default navbar

