import "./style.scss";
import React from "react";

interface Props {
  children: string | JSX.Element;
  id: string;
}

const Description = ({ children, id }: Props) => {
  return (
    <div id={id} className="description">
      {children}
    </div>
  );
};

export default Description;
