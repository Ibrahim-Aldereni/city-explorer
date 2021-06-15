import React from "react";
import axios from "axios";

class Myweather extends React.Component {
  state = {
    locData: "",
    err: "",
  };

  getInfo = async (e) => {
    e.preventDefault();
    let cityName = e.target.cityName.value;
    cityName = cityName.charAt(0).toUpperCase() + cityName.slice(1);

    let serverUrl = process.env.REACT_APP_SERVER;
    let url = `${serverUrl}/weather?searchQuery=${cityName}`;

    try {
      let data = await axios.get(url);
      this.setState({ locData: data.data[0], err: "" });
    } catch {
      this.setState({ err: "City not found" });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.getInfo}>
          <label>My weather - lab07</label> <br />
          <input type="text" name="cityName" />
          <input type="submit" name="submit" value="Explore!" />
        </form>

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
