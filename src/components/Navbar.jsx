import { Navbar, Container, Nav } from 'react-bootstrap';
function NavBar() {
  return (
    <Navbar data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">INDONESIA TOURISM</Navbar.Brand>
        <Nav>
          <Nav.Link href="#trending">TRENDING</Nav.Link>
          <Nav.Link href="#destination">EXPLORE</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
