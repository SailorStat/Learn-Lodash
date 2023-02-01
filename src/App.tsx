import "./App.css";
import React from "react";

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
