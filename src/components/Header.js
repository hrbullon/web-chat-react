import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container>
        <Navbar.Brand href="#home">React Web Chat</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link><Link to="/">Inicio</Link></Nav.Link>
                <Nav.Link><Link to="contact">Contacto</Link></Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link href="help">Ayuda</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}
