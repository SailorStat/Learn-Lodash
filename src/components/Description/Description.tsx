import "./style.scss";
import React from "react";

export interface DescriptionProps {
  children: string | JSX.Element;
  id: string;
}

const Description: React.FC<DescriptionProps> = ({ children, id }) => {
  return (
    <div id={id} className="description">
      {children}
    </div>
  );
};

export default Description;
