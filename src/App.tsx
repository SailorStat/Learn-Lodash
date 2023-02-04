import "./App.css";
import React from "react";

import Chapter from "./components/Chapter";
import Technology from "./components/Technology";
import store from "./store";

function App() {
  const { id, chapters } = store;

  return (
    <div className="App-Container">
      <div className="App">
        <Technology id={id}>{id}</Technology>
        {chapters.map((chapter) => (
          <Chapter key={chapter.id} {...chapter} />
        ))}
      </div>
    </div>
  );
}

export default App;
