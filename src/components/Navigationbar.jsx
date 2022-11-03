import { Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigationbar = () => {
    return (
        <Navbar className="color-nav justify-content-end" collapseOnSelect expand="sm" variant="light">
            <Navbar.Brand href="#home">Danilo Ramalho Silva</Navbar.Brand>
            <Navbar.Toggle  aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
            <Navbar.Collapse className="justify-content-end" id="navbarScroll">
                <Nav>
                    <NavLink  eventKey="1" as={Link} to="/">Home</NavLink>
                    <NavLink  eventKey="2" as={Link} to="/about">About</NavLink>
                    <NavLink  eventKey="3" as={Link} to="/contact">Contact</NavLink>
                </Nav>
            </Navbar.Collapse>     
        </Navbar>
    );
}
 
export default Navigationbar;