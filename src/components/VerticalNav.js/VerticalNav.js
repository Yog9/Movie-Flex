import React, { Component } from "react";
import "./VerticalNav.css";
import { NavLink } from "react-router-dom";
export default class VerticalNav extends Component {
  state = {
    isOpen: false
  };
  toggleButton = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  closeSideNav = () => {
    this.setState({ isOpen: false });
  };
  render() {
    return (
      <nav>
        <div className="container">
          <button className="nav-btn" onClick={this.toggleButton}>
            <i className="fas fa-bars" />
          </button>
          <div className={"sidenav " + (this.state.isOpen ? "open" : "close")}>
            <NavLink
              to="/movies"
              activeClassName="selected"
              onClick={this.closeSideNav}
            >
              Movies
            </NavLink>
            <NavLink
              to="/tvshows"
              activeClassName="selected"
              onClick={this.closeSideNav}
            >
              Tv Shows
            </NavLink>
            <NavLink
              to="/discover"
              activeClassName="selected"
              onClick={this.closeSideNav}
            >
              Discover
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }
}
