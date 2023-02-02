import "./style.scss";
import React from "react";

export interface TitleProps {
  children: string | JSX.Element;
  id: string;
}

const Title: React.FC<TitleProps> = ({ children, id }) => {
  return (
    <div id={id} className="title">
      {children}
    </div>
  );
};

export default Title;
