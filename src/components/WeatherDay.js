import React from "react";

class WeatherDay extends React.Component {
  render() {
    return (
      <>
        {this.props.err ? (
          <p className="err">Error: {this.props.err}</p>
        ) : (
          this.props.locData &&
          this.props.locData.map((item) => {
            return (
              <div className="weatherData">
                <p>Date: {item.date}</p>
                <p>Weather{item.description}</p>
              </div>
            );
          })
        )}
      </>
    );
  }
}

export default WeatherDay;
