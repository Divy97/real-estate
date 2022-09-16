import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { GiShoppingBag } from "react-icons/gi";
import { Link } from "react-router-dom";

import "./navbar.styles.css";

const NavigationBar = () => {
  return (
    <Navbar bg="transparent" expand="lg">
      <Container fluid>
        <Link to="/">
          <Navbar.Brand className="logo_name">
            <GiShoppingBag className="logo_icon" /> Estatery
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to="/rent">
              <Nav.Link className="link">Rent</Nav.Link>
            </Link>
            <Link to="/buy">
              <Nav.Link className="link">Buy</Nav.Link>
            </Link>
            <Link to="/sell">
              <Nav.Link className="link">Sell</Nav.Link>
            </Link>
            <Link to="/manageProperty">
              <NavDropdown
                title="Manage Property"
                id="navbarScrollingDropdown"
                className="link"
              >
                <NavDropdown.Item>Option 1</NavDropdown.Item>
                <NavDropdown.Item>Option 2</NavDropdown.Item>
              </NavDropdown>
            </Link>
            <Link to="/resources">
              <NavDropdown
                title="Resources"
                id="navbarScrollingDropdown"
                className="link"
              >
                <NavDropdown.Item>Option 1</NavDropdown.Item>
                <NavDropdown.Item>Option 2</NavDropdown.Item>
              </NavDropdown>
            </Link>
          </Nav>
          <button className="navbar_button">Login</button>
          <button className="navbar_button logout">Logout</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
