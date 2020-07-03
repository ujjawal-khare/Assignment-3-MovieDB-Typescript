import { ACTION_TYPE, movieSeriesArr } from "../actions/type";

export type InitialState = {
	text: string;
	tab: string;
	movieSeries?: movieSeriesArr;
	loading: boolean;
	prevUrl: string;
	currentPage: number;
};

const initialState = {
	text: "",
	tab: "movie",
	moviesSeries: [],
	loading: false,
	prevUrl: "",
	currentPage: 1,
};

export default function (state: InitialState = initialState, action: any) {
	switch (action.type) {
		case ACTION_TYPE.SEARCH_MOVIE:
			return {
				...state,
				text: action.payload,
				loading: false,
				genre: action.genre,
				lang: action.lang,
			};
		case ACTION_TYPE.FETCH_MOVIE:
			return {
				...state,
				moviesSeries: action.payload,
				genre: action.genre,
				lang: action.lang,
				prevUrl: action.prevUrl,
				currentPage: action.page,
			};
		case ACTION_TYPE.FETCH_MOVIES:
			return {
				...state,
				moviesSeries: action.payload,
				tab: action.tab,
				genre: action.genre,
				lang: action.lang,
				prevUrl: action.prevUrl,
				currentPage: action.page,
			};
		case ACTION_TYPE.FETCH_SERIES:
			return {
				...state,
				moviesSeries: action.payload,
				tab: action.tab,
				genre: action.filterGenre,
				lang: action.filterLanguage,
				prevUrl: action.prevUrl,
				currentPage: action.page,
			};
		case ACTION_TYPE.FETCH_TRENDING:
			return {
				...state,
				moviesSeries: action.payload,
				prevUrl: action.prevUrl,
				currentPage: action.page,
			};
		case ACTION_TYPE.FILTER_GENRE:
			return {
				...state,
				moviesSeries: action.payload,
				genre: action.filterGenre,
				prevUrl: action.prevUrl,
				currentPage: action.page,
			};
		case ACTION_TYPE.FILTER_LANGUAGE:
			return {
				...state,
				moviesSeries: action.payload,
				lang: action.filterLanguage,
				prevUrl: action.prevUrl,
				currentPage: action.page,
			};
		case ACTION_TYPE.SORT_BY:
			return {
				...state,
				moviesSeries: action.payload,
				prevUrl: action.prevUrl,
				currentPage: action.page,
			};
		case ACTION_TYPE.FETCH_MORE:
			return {
				...state,
				moviesSeries: [...state.movieSeries, ...action.payload],
				prevUrl: action.prevUrl,
				currentPage: action.page,
			};
		default:
			return state;
	}
}
