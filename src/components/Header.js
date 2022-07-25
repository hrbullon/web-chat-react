import { useContext } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import { UserContext } from '../context/UserContext';

export const Header = () => {

  const userContext = useContext(UserContext)

  return (
    <Navbar className='mb-5' collapseOnSelect bg="light" expand="lg" fixed="top">
        <Container>
        <Navbar.Brand href="#home">React Web Chat</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link><Link to="/">Inicio</Link></Nav.Link>
                <Nav.Link><Link to="contact">Contacto</Link></Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link>{ userContext.name } ( Salir )</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}
