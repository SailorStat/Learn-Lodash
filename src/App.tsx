import "./App.css";
import React from "react";

import Chapter from "./components/Chapter";
import Header from "./components/Header/Header";
import Technology from "./components/Technology";
import useAppSelector from "./hooks/useAppSelector";

function App() {
  const { chapters, currentChapter, id } = useAppSelector((store) => store.learnReducer);
  const chapter = React.useMemo(() => chapters[currentChapter], [currentChapter]);

  return (
    <div className="App-Container">
      <Header />
      <div className="App">
        <Technology id={id}>{id}</Technology>
        <Chapter {...chapter} />
      </div>
    </div>
  );
}

export default App;
