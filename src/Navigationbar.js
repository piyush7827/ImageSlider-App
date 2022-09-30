import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { GrFedora } from "react-icons/gr";
import {
  BsCameraVideoFill,
  BsCalendar3EventFill,
  BsSuitHeartFill,
} from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";

function Navigationbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <GrFedora />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">
              LIVE
              <div>
                <BsCameraVideoFill />{" "}
              </div>
            </Nav.Link>
            <Nav.Link href="#membership">
              MEMBERSHIP
              <div>
                {" "}
                <BsCalendar3EventFill />{" "}
              </div>
            </Nav.Link>
            <Nav.Link href="#plans">
              PLANS
              <div>
                {" "}
                <BsSuitHeartFill />{" "}
              </div>
            </Nav.Link>

            <NavDropdown title="MORE" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">DATING</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">BEACH</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">SEE SIDE</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#memes">
              <MdAccountCircle />
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;
