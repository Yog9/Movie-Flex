import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import "../components/RecommendedMovies/RecommendedMovies.css";


class SimilarTvshows extends Component {
    redirect=(show)=>{
        this.props.history.push(`/tvshows/details/${show.id}`);
        window.scrollTo(0, 0);
    }
    render() {
        const { s_tvshow} = this.props;
        const path = "https://image.tmdb.org/t/p/";
        const imgSize = "w154";
        return (
            <div className="recommended-movies">

            {s_tvshow &&
               s_tvshow.map(show =>
                    <figure key={show.id} className="movie-item" onClick ={()=>{this.redirect(show)}}>
                    <img
                        src={`${path}${imgSize}${show.poster_path}`}
                        alt={show.original_name}
                        className="movie-image"
                            />
                        <h5 className="movie-name">{show.original_name}</h5>
                    </figure>)
            }
        </div>
        )
    }
}

export default withRouter(SimilarTvshows)
