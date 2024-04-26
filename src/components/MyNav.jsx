import { Container, Image, Nav, Navbar } from 'react-bootstrap'
import logo from '../assets/logo.png'

const MyNavbar = (props) => (
  <Navbar expand="lg" data-bs-theme="dark" style={{ backgroundColor: '#221f1f !important' }}>
    <Container fluid>
      <Nav.Link className="navbar-brand" href="#">
        <Image src={logo} style={{ width: '100px', height: '55px' }} />
      </Nav.Link>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="navbar-nav me-auto mb-2 mb-lg-0">
        <div className="d-flex flex-column flex-lg-row me-auto mx-auto ms-lg-0">
          <Nav.Link className="nav-link active fw-bold" href="#">
            Home
          </Nav.Link>
          <Nav.Link className="nav-link fw-bold" href="#">
            TV Shows
          </Nav.Link>
          <Nav.Link className="nav-link fw-bold" href="#">
            Movies
          </Nav.Link>
          <Nav.Link className="nav-link fw-bold" href="#">
            Recently Added
          </Nav.Link>
          <Nav.Link className="nav-link fw-bold" href="#">
            My List
          </Nav.Link>
        </div>
        <div className="d-flex align-items-center">
          <i className="bi bi-search icons"></i>
          <div id="kids" className="fw-bold">
            KIDS
          </div>
          <i className="bi bi-bell icons"></i>
          <i className="bi bi-person-circle icons"></i>
        </div>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default MyNavbar
