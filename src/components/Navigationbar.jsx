import { Nav, Navbar, NavLink } from "react-bootstrap";
// import { Link } from "react-router-dom";

const Navigationbar = () => {
    return (
        <Navbar className="justify-content-end"  fixed="top" collapseOnSelect expand="sm" variant="light">
            <Navbar.Brand href="#home">Danilo Ramalho Silva</Navbar.Brand>
            <Navbar.Toggle  aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
            <Navbar.Collapse className="justify-content-end" id="navbarScroll">
                <Nav>
                    <NavLink  href="#home">Inicio</NavLink>
                    <NavLink  href="#about">Sobre</NavLink>
                    <NavLink  href="#contact">Contato</NavLink>                  
                </Nav>
            </Navbar.Collapse>     
        </Navbar>
    );
}
 
export default Navigationbar;