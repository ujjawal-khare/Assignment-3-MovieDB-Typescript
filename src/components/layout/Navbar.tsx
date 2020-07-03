import React, { Component } from "react";
import { fetchMovies, fetchSeries } from "../../actions/searchAction";
import { connect } from "react-redux";
import { FunctionStateInterface } from "../../actions/type";

export class Navbar extends Component<FunctionStateInterface> {
	resetFilters() {
		(document.getElementById("genre-filter")! as HTMLInputElement).value =
			"default";
		(document.getElementById("language-filter1")! as HTMLSelectElement).value =
			"default";
		(document.getElementById("sort-filter")! as HTMLSelectElement).value =
			"default";
		(document.getElementById("search-form")! as HTMLInputElement).value = "";
	}

	onClickMovies = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		e.preventDefault();
		this.resetFilters();
		document.getElementById("movie-nav")!.className = "selectedTab";
		document.getElementById("series-nav")!.className = "";
		this.props.fetchMovies();
	};

	onClickSeries = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		e.preventDefault();
		this.resetFilters();
		document.getElementById("movie-nav")!.className = "";
		document.getElementById("series-nav")!.className = "selectedTab";
		this.props.fetchSeries();
	};

	render() {
		return (
			<div className="navbar">
				<span id="movie-nav" className="selectedTab">
					<a href="Movies" onClick={this.onClickMovies}>
						Movies{" "}
					</a>
				</span>

				<span id="series-nav">
					<a href="#series" onClick={this.onClickSeries}>
						Series
					</a>
				</span>
			</div>
		);
	}
}

const mapStateToProps = (state: any) => ({
	movies: state.movies.moviesSeries,
});

export default connect(mapStateToProps, { fetchMovies, fetchSeries })(Navbar);
