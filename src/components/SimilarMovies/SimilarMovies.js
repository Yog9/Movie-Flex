import React from 'react';
import { Link } from "react-router-dom";

export default function SimilarMovies(props) {
    const { s_movies } = props;
    const path = "https://image.tmdb.org/t/p/";
    const imgSize = "w154";
    return (
        <div className="similar-movies">

            {s_movies &&
                s_movies.map(movie =>
                    <figure key={movie.id} className="movie-item">
                        <Link to={`/movies/details/${movie.id}`}>
                            <img
                                src={`${path}${imgSize}${movie.poster_path}`}
                                alt={movie.original_title}
                                className="carousel-img"
                            />
                            <h2>hello</h2>
                            <h5 className="movie-name">{movie.title}</h5>
                            {console.log(movie.poster_path)}
                            {console.log(movie.original_title)}
                        </Link>
                    </figure>)
            }
        </div>
    )
}
