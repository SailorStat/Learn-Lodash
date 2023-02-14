import "./App.css";
import React from "react";
import { useSelector } from "react-redux/es/exports";

import Chapter from "./components/Chapter";
import Header from "./components/Header/Header";
import Technology from "./components/Technology";
import { RootState } from "./store";

function App() {
  const { chapters, currentChapter, id } = useSelector((store: RootState) => store.learnStore);
  const chapter = chapters[currentChapter];

  return (
    <div className="App-Container">
      <div className="App">
        <Header />
        <Technology id={id}>{id}</Technology>
        <Chapter {...chapter} />
      </div>
    </div>
  );
}

export default App;
