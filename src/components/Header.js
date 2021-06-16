import React from "react";
import { Navbar, Container } from "react-bootstrap";

class Header extends React.Component {
  render() {
    return (
      <Navbar expand="lg" bg="primary" variant="dark" className="mb-4">
        <Container>
          <Navbar.Brand style={{ width: "100%", textAlign: "center" }}>
            🏙️ City Explorer 🗺️
          </Navbar.Brand>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
