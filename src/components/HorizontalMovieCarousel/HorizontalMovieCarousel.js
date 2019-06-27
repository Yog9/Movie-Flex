import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "./HorizontalMoviesCarousel.css";
export default function HorizontalMovieCarousel(props) {
  const { carouselName, movies } = props;
  const handleGenreName = genreId => {
    let mainGenre = "";
    if (props.genre) {
      props.genre.map(genre => {
        if (genreId === genre.id) mainGenre = genre.name;
      });
    }
    return mainGenre;
  };
  const settings = {
    dots: false,
    arrows: true,
    slidesToShow: 10,
    infinite: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
  const path = "https://image.tmdb.org/t/p/";
  const imgSize = "w154";
  return (
    <React.Fragment>
      <h3 className="carousel-title">{carouselName}</h3>
      <Slider {...settings}>
        {movies &&
          movies.map(movie => (
            <figure key={movie.id} className="h-carousel-item">
              <Link to={`/movies/details/${movie.id}`}>
                <img
                  src={`${path}${imgSize}${movie.poster_path}`}
                  alt={movie.title}
                  className="carousel-img"
                />
                <p className="rating">
                  <svg
                    className="rating-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z" />
                  </svg>
                  {movie.vote_average}
                </p>
              </Link>
              <figcaption>
                <h5 className="movie-name">{movie.title}</h5>
                <p className="genre_name">
                  {handleGenreName(movie.genre_ids[0])}
                </p>
              </figcaption>
            </figure>
          ))}
      </Slider>
    </React.Fragment>
  );
}
