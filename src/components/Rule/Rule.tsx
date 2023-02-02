import "./style.scss";
import React from "react";

import Code from "../Code";
import ComparisonCode from "../ComparisonCode";
import Description from "../Description";
import Title from "../Title";

function Rule() {
  const title = "_.chunk";
  const description = (
    <>
      Делит массив на массивы <b>указанного размера</b>
    </>
  );

  return (
    <div className="rule">
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Code />
      <ComparisonCode />
    </div>
  );
}

export default Rule;
