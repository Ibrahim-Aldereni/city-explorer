import React from "react";
import { Navbar, Container } from "react-bootstrap";

class Footer extends React.Component {
  render() {
    return (
      <Navbar expand="lg" bg="dark" variant="dark" className="footer">
        <Container>
          <Navbar.Brand style={{ width: "100%", textAlign: "center" }}>
            ©️ copy rights, Ibrahim Aldereni
          </Navbar.Brand>
        </Container>
      </Navbar>
    );
  }
}

export default Footer;
