import React from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

import WeatherDay from "./WeatherDay";
import Movie from "./Movie";

class WeatherMovies extends React.Component {
  state = {
    locData: "",
    moviesData: "",
    err: "",
  };

  getInfo = (e) => {
    e.preventDefault();
    let cityName = e.target.cityName.value;

    let serverUrl = process.env.REACT_APP_SERVER;
    let weatherUrl = `${serverUrl}/weather2?searchQuery=${cityName}`;
    let moviesUrl = `${serverUrl}/movies?searchQuery=${cityName}`;

    // weather request
    axios
      .get(weatherUrl)
      .then((data) => {
        this.setState({ locData: data.data, err: "" });
      })
      .catch((err) => {
        this.setState({ err: "City not found" });
      });

    // movies request
    axios.get(moviesUrl).then((data) => {
      this.setState({ moviesData: data.data, err: "" });
    });
  };

  render() {
    return (
      <div className="weather2">
        <Form onSubmit={this.getInfo}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Weather and movies API - lab08</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter city Name"
              name="cityName"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

        <WeatherDay err={this.state.err} locData={this.state.locData} />

        <Movie moviesData={this.state.moviesData} />
      </div>
    );
  }
}

export default WeatherMovies;
