import React from "react";

import PrismCode from "./PrismCode";
import { CodeProps } from "./types";

const Code: React.FC<CodeProps> = ({ children, language, id }) => {
  const a = `const a = function(): number {
    return 1 + "1234"; // 1235
  }`;

  return (
    <div id={id} style={{ textAlign: "left" }}>
      <PrismCode language={language}>{children}</PrismCode>
    </div>
  );
};

export default Code;
