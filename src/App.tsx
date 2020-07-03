import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import Landing from "./components/home/Landing";
import store from "./store/Store";

function App() {
	return (
		<Provider store={store}>
			<div className="myDiv">
				<Landing />
			</div>
		</Provider>
	);
}

export default App;
