import React from 'react';
import { Link } from "react-router-dom";

export default function SimilarMovies(props) {
    console.log(props.s_movies)
    return (
        <div>hello</div>
        /* <div className="similar-movies">
             {props.movies &&
                 movies.map(movie =>
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
         </div>*/
    )
}
