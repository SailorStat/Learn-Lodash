import "./style.scss";
import React from "react";
import useAppDispatch from "@src/hooks/useAppDispatch";
import useAppSelector from "@src/hooks/useAppSelector";
import { learnSlice } from "@src/store/slices";

const Header = () => {
  const { chapters, currentChapter } = useAppSelector((store) => store.learnReducer);
  const { changeCurrentChapter } = learnSlice.actions;
  const dispatch = useAppDispatch();

  const changePage = (index: number) => dispatch(changeCurrentChapter(index));

  return (
    <div className="header">
      {chapters.map(({ id, title }, index) => (
        <div
          key={`${id}-Header`}
          style={{ border: index === currentChapter ? "1px solid #463931" : "none" }}
          onClick={() => changePage(index)}
        >
          {title}
        </div>
      ))}
    </div>
  );
};

export default Header;
