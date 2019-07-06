import React from "react";
import "./Casts.css";
import noImg from "../../images/no-img.jpeg"
export default function Cast(props) {
    const { casts } = props;

    const path = "https://image.tmdb.org/t/p/";
    const imgSize = "w154";
    return (
        <React.Fragment>
            <h3 className="carousel-title">Casts</h3>
            <div className="cast-grid">
                {casts &&
                    casts.map(cast => (
                        <figure key={cast.id} className="h-carousel-item">
                            {cast.profile_path?<img
                        src={`${path}${imgSize}${cast.profile_path}`}
                        alt={cast.name}
                        className="carousel-img"
                        />:<img
                        src={noImg}
                        alt={cast.name}
                        className="carousel-img"
                        />}
                        <figcaption>
                                <h5 className="cast-name">{cast.name}</h5>
                            </figcaption>
                        </figure>
                    ))}
                    </div>
        </React.Fragment>
    );
}
