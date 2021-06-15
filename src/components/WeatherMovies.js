import React from "react";

class WeatherMovies extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label>Weather and movies API - lab08</label> <br />
          <input type="text" name="cityName" />
          <input type="submit" name="submit" value="Explore!" />
        </form>
      </div>
    );
  }
}

export default WeatherMovies;
