import React from 'react';
import { Link } from "react-router-dom";

export default function SimilarMovies(props) {
    const {s_movies} = props;
    const path = "https://image.tmdb.org/t/p/";
    return (
        <div className="similar-movies">
           {s_movies &&
               s_movies.map(movie =>
                   <figure key={movie.id} className="movie-item">
                       <Link to={`/movies/details/${movie.id}`}>
                           <img
                               src={`${path}w154${movie.poster_path}`}
                               alt={movie.title}
                               className="carousel-img"
                           />
                       </Link>
                   </figure>)
           }
       </div>
    )
}
