import React, { Component } from "react";
import { searchMovie, fetchMovie } from "../../actions/searchAction";
import { connect } from "react-redux";
import { FunctionStateInterface, State } from "../../actions/type";
import { InitialState } from "../../reducers/searchReducer";

export class Search extends Component<FunctionStateInterface> {
	onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		this.props.searchMovie(e.target!.value);
	};

	onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		this.props.fetchMovie(this.props.text);
		// this.props.setLoading();
	};

	render() {
		return (
			<div id="head-search">
				<div className="heading">
					<h1>The Movie App</h1>
					<h2>Search for Movie or TV series</h2>
				</div>

				<div id="search-bar">
					<form id="search-form" className="search" onSubmit={this.onSubmit}>
						<input
							type="text"
							placeholder="Search.."
							name="search"
							onChange={this.onChange}
						/>
						<button type="submit" id="fixed">
							<i className="fa fa-search" id="fixed"></i>
						</button>
					</form>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state: any) => ({
	text: state.movies.text,
});
export default connect(mapStateToProps, { searchMovie, fetchMovie })(Search);
