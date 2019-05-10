import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "./VerticalMovieCarousel.css";

export default function VerticalMovieCarousel(props) {
  //return <h1>Hello</h1>;

  const settings = {
    dots: true,
    autoplay: true,
    speed: 1500 /*if number  is increased speed is slow*/,
    autoplaySpeed: 7000,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: false,
    verticalSwiping: true,
    arrows: false
  };

  const path = "https://image.tmdb.org/t/p/";
  const imgSize = "w1280";
  return (
    <Slider {...settings}>
      {props.nowplayingMovies.map(movie => (
        <figure key={movie.id} className="v-carousel-item">
          <img
            src={`${path}${imgSize}${movie.backdrop_path}`}
            alt={movie.title}
            className="v-img"
          />
          <Link to={`/movies/details/${movie.id}`}>
            <figcaption>
              <div>
                <div className="container">
                  <h4>Now Playing</h4>
                  <h2>{movie.title}</h2>
                </div>
              </div>
            </figcaption>
          </Link>
        </figure>
      ))}
    </Slider>
  );
}
