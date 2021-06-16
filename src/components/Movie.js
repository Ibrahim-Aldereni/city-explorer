import React from "react";

class Movie extends React.Component {
  render() {
    return (
      <>
        {typeof this.props.moviesData == "string" ? (
          <p>{this.props.moviesData}</p>
        ) : (
          <div className="movies">
            {this.props.moviesData.map((item) => {
              return (
                <figure>
                  <img src={item.poster} alt="movie" />
                  <figcaption>{item.title}</figcaption>
                </figure>
              );
            })}
          </div>
        )}
      </>
    );
  }
}

export default Movie;
