import React from "react";
import useAppSelector from "@src/hooks/useAppSelector";
import { useParams } from "react-router-dom";

import Chapter from "./Chapter";
import Header from "./Header";
import Technology from "./Technology";

const Content = () => {
  const { block } = useParams<{ block: string }>();
  const { chapters, id } = useAppSelector((store) => store.learnReducer);
  const chapter = React.useMemo(() => chapters.find(({ title }) => block === title.toLowerCase()), [block]);

  return (
    <div className="App-Container">
      <Header />
      <div className="App">
        <Technology id={id}>{id}</Technology>
        <Chapter {...chapter} />
      </div>
    </div>
  );
};

export default Content;
