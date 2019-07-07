import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./Search.css";
import { connect } from "react-redux";
import "../RecommendedMovies/RecommendedMovies.css"
import { getsearchResults } from "../../actions/getsearchResults"
class Search extends Component {

    state = {
        searchFieldValue: ""
    };

    handleChange = e => {
        this.setState({
            searchFieldValue: e.target.value
        });
    };

    handleSubmit = e => {
        console.log('in handle submit')
        e.preventDefault();
        let searchTerm = this.state.searchFieldValue.toLowerCase();
        if (searchTerm.length > 0) {
            console.log('hello')
            console.log(searchTerm)
            let temp = this.props.getsearchResults(searchTerm);
            console.log(temp)
        }
    };
  

    render() {
        const { searchResults } = this.props;
        const path = "https://image.tmdb.org/t/p/";
        const imgSize = "w154";
        console.log("Props of search component", this.props)
        return (
            <React.Fragment>
                <div className="container-search">
                    <form className="searchbar" onSubmit={this.handleSubmit}>
                        <input type="search" placeholder="🔍 search a movie by title" aria-label="search" required="" onChange={this.handleChange} />
                        <button type="submit">search</button>
                    </form>
                    <h2>Search Results for {this.state.searchFieldValue}</h2>
                    <div className="search-results">
                       
                        {searchResults && searchResults.map(movie => <figure key={movie.id} className="movie-item">
                            <Link to={`/movies/details/${movie.id}`}>
                                <img
                                    src={`${path}${imgSize}${movie.poster_path}`}
                                    alt={movie.original_title}
                                    className="movie-image"
                                />
                            </Link>
                            <h5 className="movie-name">{movie.original_title}</h5>
                        </figure>)
                        }
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
const mapStateToProps = state => ({
    searchResults: state.searchResults.searchResults

});
export default connect(
    mapStateToProps,
    {
        getsearchResults
    }
)(Search);