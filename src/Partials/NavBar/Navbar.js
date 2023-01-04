import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const NavbarMenu = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse  id="basic-navbar-nav text-end">
                    <Nav className="justify-content-end">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#link" url="http://encurtador.com.br/kNR57">Cardapio</Nav.Link>
                        <NavDropdown title="Cardapio" id="basic-nav-dropdown">
                        <NavDropdown.Item eventKey="http://encurtador.com.br/kNR57">Site com nosso cardapio</NavDropdown.Item>
                        <NavDropdown.Divider />
                            <NavDropdown.Item href="#batata">Batatas</NavDropdown.Item>
                            <NavDropdown.Item href="#hamburger">Hamburgues</NavDropdown.Item>  
                            <NavDropdown.Item href="#salgados">Salgados</NavDropdown.Item>
                            <NavDropdown.Item href="#bebidas">Bebidas</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarMenu;