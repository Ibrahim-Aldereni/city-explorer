import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Myweather from "./components/Myweather";
import WeatherMovies from "./components/WeatherMovies";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="App">
          <Myweather /> {/*lab-07*/}
          <WeatherMovies /> {/*lab-08*/}
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
