import "./style.scss";
import React from "react";
import useAppSelector from "@src/hooks/useAppSelector";
import { Link, useParams } from "react-router-dom";

const Header = () => {
  const { block } = useParams<{ block: string }>();
  const { chapters } = useAppSelector((store) => store.learnReducer);

  return (
    <div className="header">
      {chapters.map(({ id, title }) => (
        <Link key={`${id}-Header`} to={`/Learn-Lodash/${title.toLowerCase()}`}>
          <div
            className="header__item"
            style={{ border: title.toLowerCase() === block ? "1px solid #463931" : "none" }}
          >
            {title}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Header;
