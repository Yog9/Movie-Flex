import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="grid-footer">
          <div className="copyright">
            <p className="copyright-name">Copyright ©2018</p>
            <p className="copyright-para">Code and design by Yogita Verma</p>
          </div>
          <img
            className="footer-img"
            src="https://www.themoviedb.org/assets/1/v4/logos/408x161-powered-by-rectangle-green-bb4301c10ddc749b4e79463811a68afebeae66ef43d17bcfd8ff0e60ded7ce99.png"
            alt="powered by themoviedb"
          />
        </div>
      </div>
    </div>
  );
}
