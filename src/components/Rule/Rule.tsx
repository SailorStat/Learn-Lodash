import React from 'react';
import Code from '../Code';
import Description from '../Description';
import Title from '../Title';
import "./style.scss"

const Rule = () => {
  return (
    <div className="rule">
      <Title />
      <Description />
      <Code/>
    </div>
  )
}

export default Rule;