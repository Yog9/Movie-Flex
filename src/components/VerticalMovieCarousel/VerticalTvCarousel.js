import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "./VerticalMovieCarousel.css";

export default function VerticalTvCarousel(props) {
    const { tvshows } = props;
    console.log(props)
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
            {tvshows.map(tvshow => (
                <Link to={`/tvshows/details/${tvshow.id}`} key={tvshow.id}>
                    <figure key={tvshow.id} className="v-carousel-item">
                        <img
                            src={`${path}${imgSize}${tvshow.backdrop_path}`}
                            alt={tvshow.title}
                            className="v-img"
                        />

                        <figcaption>
                            <div>
                                <div className="container desc_now_playing">
                                    <h4 className="carousel-title-now-playing">AIRING TODAY</h4>
                                    <h2 className="movie">{tvshow.name}</h2>
                                    {tvshow.genre_ids.map(genre => {
                                        //console.log(props.genre);
                                        props.genre.map(genre_api => {
                                            if (genre_api.id === genre) {
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

