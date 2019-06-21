import React, { Component } from "react";
import { connect } from "react-redux";
import { getmovieTrailer } from "../../actions/movie_actions/getmovieTrailer";
import { getmovieCasts } from "../../actions/movie_actions/getmovieCasts";
import { getmovieReviews } from "../../actions/movie_actions/getmovieReviews";
import { getsimilarMovies } from "../../actions/movie_actions/getsimilarMovies";
class MovieDetails extends Component {
  state = {
    id: null
  }
  componentDidMount() {
    let id = this.props.match.params.id
    console.log(id);
    this.setState({
      id: id
    })
    this.props.getmovieTrailer(id);
    this.props.getmovieCasts(id);
    this.props.getmovieReviews(id);
    this.props.getsimilarMovies(id);
  }
  render() {
    return (
      <React.Fragment>
        <h1 style={{ color: "red", textAlign: "center" }}> hello {this.state.id}</h1>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  moviecasts: state.moviecasts.moviecasts,
  moviereviews: state.moviereviews.moviereviews,
  movietrailers: state.movietrailers.movietrailers,
  similiarMovies: state.similiarMovies.similiarMovies
});
export default connect(
  mapStateToProps,
  {
    getmovieCasts,
    getmovieReviews,
    getmovieTrailer,
    getsimilarMovies
  }
)(MovieDetails);
