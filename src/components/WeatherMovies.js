import React from "react";
import axios from "axios";
import { CardGroup, Card, Row, Col } from "react-bootstrap";

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
        this.setState({ locData: data.data[0], err: "" });
        console.log(this.state.locData);
      })
      .catch((err) => {
        this.setState({ err: "City not found" });
      });

    // movies request
    axios.get(moviesUrl).then((data) => {
      this.setState({ moviesData: data.data, err: "" });
      console.log(this.state.moviesData);
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.getInfo}>
          <label>Weather and movies API - lab08</label> <br />
          <input type="text" name="cityName" />
          <input type="submit" name="submit" value="Explore!" />
        </form>

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
        {typeof this.state.moviesData == "string" ? (
          <p>{this.state.moviesData}</p>
        ) : (
          <div className="movies">
            {this.state.moviesData.map((item) => {
              return (
                <figure>
                  <img src={item.poster} alt="movie" />
                  <figcaption>{item.title}</figcaption>
                </figure>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default WeatherMovies;
