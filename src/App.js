import React from "react";
import { Navbar, Container } from "react-bootstrap";
import Myweather from "./components/Myweather";
import WeatherMovies from "./components/WeatherMovies";

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar expand="lg" bg="primary" variant="dark" className="mb-4">
          <Container>
            <Navbar.Brand style={{ width: "100%", textAlign: "center" }}>
              🏙️ City Explorer 🗺️
            </Navbar.Brand>
          </Container>
        </Navbar>

        <div className="App">
          <Myweather /> {/*lab-07*/}
          <WeatherMovies /> {/*lab-08*/}
        </div>
      </>
    );
  }
}

export default App;
