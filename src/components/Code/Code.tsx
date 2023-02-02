import "./style.scss";
import React from "react";

import PrismCode from "./PrismCode";
import { CodeProps } from "./types";

const Code: React.FC<CodeProps> = ({ children, language, id }) => {
  return (
    <div id={id} className="code">
      <PrismCode language={language}>{children}</PrismCode>
    </div>
  );
};

export default Code;
