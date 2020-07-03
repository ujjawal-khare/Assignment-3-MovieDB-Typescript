export const ACTION_TYPE = {
	SEARCH_MOVIE: "SEARCH_MOVIE",
	FETCH_MOVIE: "FETCH_MOVIE",
	FETCH_MOVIES: "FETCH_MOVIES",
	FETCH_SERIES: "FETCH_SERIES",
	FETCH_TRENDING: "FETCH_TRENDING",
	FILTER_GENRE: "FILTER_GENRE",
	FILTER_LANGUAGE: "FILTER_LANGUAGE",
	SORT_BY: "SORT_BY",
	FETCH_MORE: "FETCH_MORE",
};

export type movieSeriesArr = {
	adult: boolean;
	backdrop_path: string;
	genre_ids: {
		0: number;
		length: number;
	};
	id: number;
	orignal_language?: string;
	original_title?: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
	name?: string;
	orignal_name?: string;
	length: number;
	map: Function;
};
export interface SearchMovie {
	type: typeof ACTION_TYPE.SEARCH_MOVIE;
}

export interface FetchMovie {
	type: typeof ACTION_TYPE.FETCH_MOVIE;
}

export interface FetchMovies {
	type: typeof ACTION_TYPE.FETCH_MOVIES;
}

export interface FetchSeries {
	type: typeof ACTION_TYPE.FETCH_SERIES;
}

export interface FetchTrending {
	type: typeof ACTION_TYPE.FETCH_TRENDING;
}

export interface FilterGenre {
	type: typeof ACTION_TYPE.FILTER_GENRE;
}

export interface FilterLanguage {
	type: typeof ACTION_TYPE.FILTER_LANGUAGE;
}

export interface SortBy {
	type: typeof ACTION_TYPE.SORT_BY;
}

export interface Success {
	type: typeof ACTION_TYPE.FETCH_MORE;
	payload: movieSeriesArr;
}

export interface State {
	text: string;
	prevUrl: string;
	tab: string;
}
export interface FunctionStateInterface {
	searchMovie: Function;
	fetchMovie: Function;
	fetchMovies: Function;
	fetchSeries: Function;
	filterGenre: Function;
	filterLanguage: Function;
	sortBy: Function;
	fetchMore: Function;
	reset: Function;
	tab: string;
	genre: string;
	text: string;
	lang: string;
	prevUrl: string;
	page: number;
	movies: movieSeriesArr;
	movie: movieSeriesArr;
}

export interface MovieDetailsInterface {
	key: any;
	movie: any;
}
