import React from "react";
import axios from "axios";
import { Navbar, Container } from "react-bootstrap";

class App extends React.Component {
  state = {
    locData: "",
    err: "",
  };

  getInfo = async (e) => {
    e.preventDefault();
    let cityName = e.target.cityName.value;
    cityName = cityName.charAt(0).toUpperCase() + cityName.slice(1);

    let serverUrl = process.env.REACT_APP_SERVER;
    let url = `${serverUrl}/weather?lat=-33.87&lon=151.21&searchQuery=${cityName}`;

    try {
      let data = await axios.get(url);
      this.setState({ locData: data.data[0], err: "" });
    } catch {
      this.setState({ err: "City not found" });
    }
  };

  render() {
    return (
      <div className="App">
        <Navbar expand="lg" bg="primary" variant="dark" className="mb-4">
          <Container>
            <Navbar.Brand style={{ width: "100%", textAlign: "center" }}>
              🏙️ City Explorer 🗺️
            </Navbar.Brand>
          </Container>
        </Navbar>

        <form onSubmit={this.getInfo}>
          <input type="text" name="cityName" />
          <input type="submit" name="submit" value="Explore!" />
        </form>

        {/* if there is an error it will show me the error only, otherwise if there is data i will show the paragraphes and the image */}

        {this.state.err ? (
          <p className="err">Error: {this.state.err}</p>
        ) : (
          this.state.locData && (
            <>
              <p>Temp: {this.state.locData.temp}</p>
              <p>Weather: {this.state.locData.weather.description}</p>
              <p>Date: {this.state.locData.datetime}</p>
            </>
          )
        )}
      </div>
    );
  }
}

export default App;
