import React from "react";
import popcornIcon from "../../images/popcorn.svg";
import "./Loading.css"
const Loading = ({ name }) => (
    <div className="loading">
        <div className="loading-content">
            <img src={popcornIcon} alt="popcorn" />
            <p>{name ? `Fetching ${name}` : "Loading"}</p>
        </div>
    </div>
);

export default Loading;