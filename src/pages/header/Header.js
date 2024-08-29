import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "./Header.css"

function Header() {
    return (
        <>
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand>DevList</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link as={ Link } to="/">Developers</Nav.Link>
                    <Nav.Link as={ Link } to="/developer">Register</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </>
    )
}

export default Header