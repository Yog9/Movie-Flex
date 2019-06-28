import React, { Component } from 'react';
import "./Search.css";
import { connect } from "react-redux";
import { getsearchResults } from "../../actions/getsearchResults"
class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchFieldValue: ""
        };
    }
    handleChange = e => {
        this.setState({
            searchFieldValue: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        let searchTerm = this.state.searchFieldValue.toLowerCase();
        if (searchTerm) {
            this.props.getsearchResults(searchTerm);
            console.log(this.props.getsearchResults(searchTerm))
        }
    };
    render() {
        return (
            <React.Fragment>
                <div className="container-search">
                    <form className="searchbar">
                        <input type="search" placeholder="🔍 search a movie by title" aria-label="search" required="" />
                        <button type="submit">search</button>
                    </form>
                    <div className="search-results">

                    </div>
                </div>
            </React.Fragment>
        )
    }
}
const mapStateToProps = state => ({
    searchResults: state.searchResults

});
export default connect(
    mapStateToProps,
    {
        getsearchResults
    }
)(Search);