import React, { Component } from 'react';
import "./RecommendedMovies.css";
import { withRouter } from "react-router-dom";

class RecommendedMovies extends Component {
redirect=(movie)=>{
    this.props.history.push(`/movies/details/${movie.id}`);
    window.scrollTo(0, 0);
}
  render() {
        const { r_movies } = this.props;
        const path = "https://image.tmdb.org/t/p/";
        const imgSize = "w154";
        return (
            <div className="recommended-movies">
            {r_movies &&
                r_movies.map(movie =>
                    <figure key={movie.id} className="movie-item" onClick ={()=>{this.redirect(movie)}}>
                       {/* <Link to={`/movies/details/${movie.id}`}>*/}
                            <img
                                src={`${path}${imgSize}${movie.poster_path}`}
                                alt={movie.original_title}
                                className="movie-image"
                            />
                       {/* </Link>*/}
                        <h5 className="movie-name">{movie.title}</h5>
                    </figure>)
            }
        </div>

        )
    }
}
export default withRouter(RecommendedMovies);