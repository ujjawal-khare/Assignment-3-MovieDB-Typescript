import React, { Component } from "react";
import { connect } from "react-redux";
import MovieCard from "./MovieCard";
import {
	FunctionStateInterface,
	MovieDetailsInterface,
} from "../../actions/type";

export class MoviesContainer extends Component<
	FunctionStateInterface | MovieDetailsInterface
> {
	render() {
		let content = "";
		const res = this.props.movies;
		//const res = movies.results;
		//console.log(res.movies);
		if (res !== undefined) {
			content =
				res.length > 0
					? res.map((movie: any, id: string) => (
							<MovieCard key={id} movie={movie} />
					  ))
					: null;
		}
		return <div className="row">{content}</div>;
	}
}
const mapStateToProps = (state) => ({
	movies: state.movies.moviesSeries,
});

export default connect(mapStateToProps)(MoviesContainer);
