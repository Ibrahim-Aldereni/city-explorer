import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    locData: "",
    err: "",
  };

  getInfo = async (e) => {
    e.preventDefault();
    let cityName = e.target.cityName.value;

    try {
      let data = await axios.get(
        `https://eu1.locationiq.com/v1/search.php?key=pk.960cd6699f3e6ef057ceb7b7b0aaaaf6&q=${cityName}&format=json&limit=1`
      );
      this.setState({ locData: data.data[0] });
    } catch {
      this.setState({ err: "There is an error" });
    }
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.getInfo}>
          <input type="text" name="cityName" />
          <input type="submit" name="submit" value="Explore!" />
        </form>

        {this.state.locData && (
          <>
            <p>Location: {this.state.locData.display_name}</p>
            <p>Latitude: {this.state.locData.lat}</p>
            <p>Longitude: {this.state.locData.lon}</p>
          </>
        )}

        {this.state.err && <p className="err">Error: {this.state.err}</p>}
      </div>
    );
  }
}

export default App;
