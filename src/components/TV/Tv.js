import React, { Component } from "react";
import { connect } from "react-redux";
import { getpopularTvshows } from "../../actions/tv_actions/getpopularTvshows";
import { getairingtodayTvshows } from "../../actions/tv_actions/getairingtodayTvshows";
import { getonairTvshows } from "../../actions/tv_actions/getonairTvshows";
import { gettopratedTvshows } from "../../actions/tv_actions/gettopratedTvshows";
import { gettvgenre } from "../../actions/tv_actions/getTvgenre";
import VerticalTvCarousel from "../VerticalMovieCarousel/VerticalTvCarousel";
import "../Movies/Movies.css";
import HorizontalTvCarousel from "../HorizontalCarousel/HorizontalTvCarousel";
import Footer from "../Footer/Footer";
class Tv extends Component {
    componentDidMount() {
        this.props.getpopularTvshows();
        this.props.getairingtodayTvshows();
        this.props.getonairTvshows();
        this.props.gettopratedTvshows();
        this.props.gettvgenre();
    }
    render() {
        const { airingtodayTvshows, popularTvshows, onairTvshows, topratedTvshows, tvgenre } = this.props;
       /* if (
            !popularTvshows.length &&
            !airingtodayTvshows.length &&
            !onairTvshows.length &&
            !topratedTvshows.length &&
            !tvgenre.length
        ) {
            return <Loading name="Tvshows" />
        }*/
        return (
            <React.Fragment>
                <div className="header">
                    <VerticalTvCarousel
                        tvshows={airingtodayTvshows}
                        genre={tvgenre}
                    />
                </div>

                <div className="home-container">
                    <div className="container pb-6">
                        <HorizontalTvCarousel
                            carouselName="Popular"
                            tvshows={popularTvshows}
                            genre={tvgenre}
                        />
                        <hr className="section-separator" />
                        <HorizontalTvCarousel
                            carouselName="On Air"
                            tvshows={onairTvshows}
                            genre={tvgenre}
                        />
                        <hr className="section-separator" />
                        <HorizontalTvCarousel
                            carouselName="Top Rated"
                            tvshows={topratedTvshows}
                            genre={tvgenre}
                        />
                        <hr className="section-separator" />
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}
const mapStateToProps = state => ({
    popularTvshows: state.popularTvshows.popularTvshows,
    onairTvshows: state.onairTvshows.onairTvshows,
    airingtodayTvshows: state.airingtodayTvshows.airingtodayTvshows,
    topratedTvshows: state.topratedTvshows.topratedTvshows,
    tvgenre: state.tvgenre.tvgenre
});
export default connect(
    mapStateToProps,
    {
        getpopularTvshows,
        getairingtodayTvshows,
        getonairTvshows,
        gettopratedTvshows,
        gettvgenre
    }
)(Tv);
