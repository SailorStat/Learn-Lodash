import React from "react";
import "./App.css";
import Chapter from "./components/Chapter";
import Technology from "./components/Technology";

function App() {
	return (
		<div className="App-Container">
			<div className="App">
				<Technology />
				<Chapter />
			</div>
		</div>
	);
}

export default App;
