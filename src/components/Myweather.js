import React from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

class Myweather extends React.Component {
  state = {
    locData: "",
    err: "",
  };

  getInfo = (e) => {
    e.preventDefault();
    let cityName = e.target.cityName.value;
    cityName = cityName.charAt(0).toUpperCase() + cityName.slice(1);

    let serverUrl = process.env.REACT_APP_SERVER;
    let url = `${serverUrl}/weather?searchQuery=${cityName}`;

    axios
      .get(url)
      .then((data) => {
        this.setState({ locData: data.data[0], err: "" });
      })
      .catch((err) => {
        this.setState({ err: "City not found" });
      });
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.getInfo}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>My weather - lab07</Form.Label>
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

        {/* if there is an error it will show me the error only, otherwise if there is data i will show the paragraphes and the image */}

        {this.state.err ? (
          <p className="err">Error: {this.state.err}</p>
        ) : (
          this.state.locData && (
            <>
              <p>Weather: {this.state.locData.description}</p>
              <p>Date: {this.state.locData.date}</p>
            </>
          )
        )}
      </div>
    );
  }
}

export default Myweather;
