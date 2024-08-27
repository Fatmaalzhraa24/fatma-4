import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import BackButton from './BackButton';

function Header({ showNavDefault = true }) {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar-dark mt-3 mb-5">
      <Container>
        {
          showNavDefault == true ? <Navbar.Brand href="/" className="fw-bold fs-3">Heritage Hub</Navbar.Brand> : <BackButton href={"/"} text={"Back"}/>
        }
        {/* <Navbar.Brand href="/" className="fw-bold fs-3">Heritage Hub</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <div className="mt-3"></div>
            <Nav.Link href="https://courageous-salmiakki-70f62f.netlify.app/" className="aboutme_btn">
              About me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;