import React from 'react';
import { Link } from "react-router-dom";
import "../components/RecommendedMovies/RecommendedMovies.css";
export default function SimilarTvshows(props) {
    const { s_tvshow} = props;
    const path = "https://image.tmdb.org/t/p/";
    const imgSize = "w154";
    return (
        <div className="recommended-movies">

            {s_tvshow &&
               s_tvshow.map(show =>
                    <figure key={show.id} className="movie-item">
                        <Link to={`/tvshows/details/${show.id}`}>
                            <img
                                src={`${path}${imgSize}${show.poster_path}`}
                                alt={show.original_name}
                                className="movie-image"
                            />
                        </Link>
                        <h5 className="movie-name">{show.original_name}</h5>
                    </figure>)
            }
        </div>
    )
}
