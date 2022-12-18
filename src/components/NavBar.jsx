import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
        <section id="navbar">
        <Navbar collapseOnSelect expand="lg" style={{backgroundColor: '#f1f3ff',}}>
            <Container className='navbar-custom'>
                <Link to="/">
                <Navbar.Brand>
                    <img className='logo' src="./assets/img/binarlogo.svg" alt="Binar Rental Car" />
                </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto me-4 text-rapih">
                    <Nav.Link className="px-1 px-sm-3" href="#service">Our Services</Nav.Link>
                    <Nav.Link className="px-1 px-sm-3" href="#why-us">Why Us</Nav.Link>
                    <Nav.Link className="px-1 px-sm-3" href="#testimonial">Testimonial</Nav.Link>
                    <Nav.Link className="px-1 px-sm-3" href="#faq">FAQ</Nav.Link>
                </Nav>
                <Button className="btn btn-banner fw-semibold ms-2">Register</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </section>
        </>
    );
};

export default NavBar;
