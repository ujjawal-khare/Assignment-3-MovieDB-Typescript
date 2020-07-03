import React, { Component } from "react";
import { connect } from "react-redux";
import Search from "./Search";
import FilterAndSort from "./../FilterAndSort";
import Navbar from "./../layout/Navbar";
import MoviesContainer from "./MoviesContainer";
import { fetchMovies } from "../../actions/searchAction";
import Scroll from "./Scroll";
import { FunctionStateInterface } from "../../actions/type";

export class Landing extends Component<FunctionStateInterface> {
	componentDidMount() {
		this.props.fetchMovies();
	}
	render() {
		// const { loading } = this.props;
		return (
			<div>
				<div className="fixed">
					<Search />
					<Navbar />
					<FilterAndSort />
				</div>

				<div className="movable">
					{/* {loading ? <Spinner /> : <MoviesContainer />} */}
					<MoviesContainer />
					<Scroll />
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	loading: state.movies.loading,
});

export default connect(mapStateToProps, { fetchMovies })(Landing);
