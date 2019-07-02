import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "./VerticalMovieCarousel.css";

export default function VerticalMovieCarousel(props) {
  let x = "";
  const settings = {
    autoplay: true,
    speed: 1500 /*if number  is increased speed is slow*/,
    autoplaySpeed: 7000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    vertical: false,
    horizontalSwiping: true,
    arrows: false
  };

  const path = "https://image.tmdb.org/t/p/";
  const imgSize = "w1280";

  return (
    <Slider {...settings}>
      {props.nowplayingMovies.map(movie => (
        <Link to={`/movies/details/${movie.id}`} key={movie.id}>
          <figure key={movie.id} className="v-carousel-item">
            <img
              src={`${path}${imgSize}${movie.backdrop_path}`}
              alt={movie.title}
              className="v-img"
            />

            <figcaption>
              <div>
                <div className="container desc_now_playing">
                  <h4 className="carousel-title-now-playing">NOW PLAYING</h4>
                  <h2 className="movie">{movie.title}</h2>
                  {movie.genre_ids.map(genre => {
                    //console.log(props.genre);
                    props.genre.map(genre_api => {
                      if (genre_api.id == genre) {
                        return (x = genre_api.name);
                      }
                    });
                  })}
                  <p className="genre">{x}</p>
                </div>
              </div>
            </figcaption>

          </figure>
        </Link>
      ))}
    </Slider>
  );

}

