import "./style.scss";
import React from "react";

interface Props {
  children: string | JSX.Element;
  id: string;
}

const Title = ({ children, id }: Props) => {
  return (
    <div id={id} className="title">
      {children}
    </div>
  );
};

export default Title;
