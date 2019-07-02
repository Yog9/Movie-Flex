import React from 'react';
import { Link } from "react-router-dom";
import "./RecommendedMovies.css";
export default function RecommendedMovies(props) {
    const { r_movies } = props;
    const path = "https://image.tmdb.org/t/p/";
    const imgSize = "w154";
    return (
        <div className="recommended-movies">

            {r_movies &&
                r_movies.map(movie =>
                    <figure key={movie.id} className="movie-item">
                        <Link to={`/movies/details/${movie.id}`}>
                            <img
                                src={`${path}${imgSize}${movie.poster_path}`}
                                alt={movie.original_title}
                                className="movie-image"
                            />
                        </Link>
                        <h5 className="movie-name">{movie.title}</h5>
                    </figure>)
            }
        </div>
    )
}
