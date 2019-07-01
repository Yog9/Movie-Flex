import React, { Component } from "react";
import popcornIcon from "../../images/popcorn.svg";
import { connect } from "react-redux";
import "./Loading.css";
import { itemsLoading } from "../../actions/itemsLoading";


class Loading extends Component {
  render() {
    return (
      <React.Fragment>
        {
          this.props.isLoading ? (
            <div className="loading">
              <div className="loading-content">
                  <img src={popcornIcon} alt="popcorn" />
                  <p>Loading...</p>
              </div>
            </div>
          ) : (null)
        }
      </React.Fragment>
    );
  }
};

const mapStateToProps = state => ({
  isLoading: state.isLoading.isLoading,

});

export default connect(
  mapStateToProps,
  {
    itemsLoading,
  }
)(Loading);
