import React, { Component } from "react";
import { connect } from "react-redux";
import "./MovieDetails.css";
import { getmovieTrailer } from "../../actions/movie_actions/getmovieTrailer";
import { getmovieCasts } from "../../actions/movie_actions/getmovieCasts";
import { getmovieDetails } from "../../actions/movie_actions/getmovieDetails";
import { getmovieReviews } from "../../actions/movie_actions/getmovieReviews";
import { getrecommendedMovies } from "../../actions/movie_actions/getrecommendedMovies";
import CastCarousel from "../Cast/CastCarousel";

import RecommendedMovies from "../RecommendedMovies/RecommendedMovies";
import Modal from "../Modal/Modal";
import Loading from "../Loader/Loading";
class MovieDetails extends Component {
  state = {
    id: null,
    show: false
  }
  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  componentDidMount() {
    let id = this.props.match.params.id
    console.log(id);
    this.setState({
      id: id
    })
    this.props.getmovieTrailer(id);
    this.props.getmovieCasts(id);
    /*this.props.getmovieReviews(id);*/
    this.props.getmovieDetails(id);
    this.props.getrecommendedMovies(id);
  }
  componentWillReceiveProps(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      const newId = prevProps.match.params.id;
      this.props.getmovieDetails(newId);
      this.props.getrecommendedMovies(newId);
      this.props.getmovieCasts(newId);
      this.props.getmovieTrailer(newId);
    }
  }
  render() {

    const path = 'https://image.tmdb.org/t/p/'
    const imgSize = "w1280";
    const {
      moviedetails,
      moviecasts,
      moviereviews,
      movietrailers,
      recommendedMovies
    } = this.props;
    console.log("props", this.props)

    return (
      <React.Fragment>

        <img className="cover-image"
          src={`${path}${imgSize}${moviedetails.backdrop_path}`}
          alt={moviedetails.original_title}
        />
        <div className="container">
          <div className="movies">

            <img className="poster" src={`${path}w154${moviedetails.poster_path}`} />
            <div className="moviedetails">
              <h2>{moviedetails.original_title}</h2>
              <div className="user-score">
                <svg aria-hidden="true" width="20" height="20" focusable="false" data-prefix="fas" data-icon="heartbeat" class="svg-inline--fa fa-heartbeat fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="#f05d5e" d="M320.2 243.8l-49.7 99.4c-6 12.1-23.4 11.7-28.9-.6l-56.9-126.3-30 71.7H60.6l182.5 186.5c7.1 7.3 18.6 7.3 25.7 0L451.4 288H342.3l-22.1-44.2zM473.7 73.9l-2.4-2.5c-51.5-52.6-135.8-52.6-187.4 0L256 100l-27.9-28.5c-51.5-52.7-135.9-52.7-187.4 0l-2.4 2.4C-10.4 123.7-12.5 203 31 256h102.4l35.9-86.2c5.4-12.9 23.6-13.2 29.4-.4l58.2 129.3 49-97.9c5.9-11.8 22.7-11.8 28.6 0l27.6 55.2H481c43.5-53 41.4-132.3-7.3-182.1z">
                  </path>
                </svg>
                <div>{moviedetails.vote_average * 10} %</div>

              </div>
              <span className="vote-count">
                {moviedetails.vote_count} votes
              </span>
              <div className="genre-list">
                {moviedetails && moviedetails.genres &&
                  moviedetails.genres.map(g =>
                    <span className="transparent-pill" key={g.id}>
                      {g.name}
                    </span>
                  )}
              </div>
            </div>
            <button class="play-trailer" onClick={this.showModal}>
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play" class="svg-inline--fa fa-play fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z">
                </path>
              </svg>
              <span class="play-trailer-content">Watch Trailer</span>
            </button>
            {
              this.state.show ? (
                <Modal show={this.state.show} handleClose={this.hideModal}>
                  {movietrailers.key ? <iframe title="1" src={`https://www.youtube.com/embed/${movietrailers.key}`}></iframe> : <p className="no-trailer"> Sorry! no trailer found</p>}
                </Modal>
              ) : (null)
            }


          </div>
          <div className="main">
            <div className="synopsis">
              <h2>SYNOPSIS</h2>
              <p>{moviedetails.overview}</p>
            </div>
            <CastCarousel casts={moviecasts} />
            {/*<div className="review">
              <h2>POPULAR REVIEW</h2>
              {Object.keys(moviereviews).length ? <div className="review-container">{moviereviews.content}</div> :
                <div className="review-empty"> NO REVIEWS FOUND :( </div>}
                </div>*/}
            <div className="r-movie-list">
              <h2>RECOMMENDED MOVIES</h2>
              <RecommendedMovies r_movies={recommendedMovies} />
            </div>
          </div>
        </div>

      </React.Fragment>
    );
  }

}
const mapStateToProps = state => ({
  moviecasts: state.moviecasts.moviecasts,
  moviereviews: state.moviereviews.moviereviews,
  movietrailers: state.movietrailers.movietrailers,
  moviedetails: state.moviedetails.moviedetails,
  recommendedMovies: state.recommendedMovies.recommendedMovies,
});
export default connect(
  mapStateToProps,
  {
    getmovieCasts,
    getmovieReviews,
    getmovieTrailer,
    getmovieDetails,
    getrecommendedMovies
  }
)(MovieDetails);
