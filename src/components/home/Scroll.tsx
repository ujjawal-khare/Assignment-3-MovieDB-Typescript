import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMore } from "../../actions/searchAction";
import { FunctionStateInterface } from "../../actions/type";
import { InitialState } from "../../reducers/searchReducer";

export class Scroll extends Component<FunctionStateInterface> {
	fetchData = () => {
		const url = this.props.prevUrl;
		const currPage = this.props.page;
		this.props.fetchMore(url, currPage);
		//console.log(this.props.movie);
	};

	componentDidMount() {
		window.addEventListener("scroll", () => {
			//console.log("check");
			if (
				window.scrollY + window.innerHeight + 300 >=
				document.documentElement.scrollHeight
			) {
				this.fetchData();
			}
		});
	}
	render() {
		//const movies = this.props.movie;
		//console.log(movies.results);
		//const res = movies.results;
		//const currPage = this.props.page;
		return <div></div>;
	}
}

const mapStateToProps = (state: any) => ({
	prevUrl: state.movies.prevUrl,
	page: state.movies.currentPage,
	movie: state.movies.moviesSeries,
});

export default connect(mapStateToProps, { fetchMore })(Scroll);
