import React from "react";
import Slider from "react-slick";
import "./Casts.css";
export default function CastCarousel(props) {
    const { casts } = props;

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
            <h3 className="carousel-title">Casts</h3>
            <Slider {...settings}>
                {
                    casts.map(cast => (
                        <figure key={cast.cast_id} className="h-carousel-item">

                            <img
                                src={`${path}${imgSize}${cast.profile_path}`}
                                alt={cast.name}
                                className="carousel-img"
                            />


                            <figcaption>
                                <h5 className="cast-name">{cast.name}</h5>
                            </figcaption>
                        </figure>
                    ))}
            </Slider>
        </React.Fragment>
    );
}
