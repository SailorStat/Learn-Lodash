import "./style.scss";
import React from "react";

import Code from "../Code";
import Description from "../Description";
import Title from "../Title";

function Rule() {
  const a = 123;
  const a2 = 234;

  if (true) {
    console.log();
  }

  if (true) {
    console.log();
  }

  return (
    <div className="rule">
      <Title />
      <Description />
      <Code />
    </div>
  );
}

export default Rule;
