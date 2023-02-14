import "./style.scss";
import React from "react";
import { RootState } from "@src/store";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Header = () => {
  const { chapters, currentChapter } = useSelector((store: RootState) => store.learnStore);

  return (
    <div className="header">
      {chapters.map(({ id, title }) => (
        <div key={`${id}-Header`} onClick={}>
          {title}
        </div>
      ))}
    </div>
  );
};

export default Header;
