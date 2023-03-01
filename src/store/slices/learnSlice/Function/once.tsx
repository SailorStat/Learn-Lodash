import React from "react";
import { RuleProps } from "@src/components/Rule";

const once: RuleProps = {
  id: "_.once",
  blocks: [
    {
      type: "title",
      title: { id: "_.once-title", children: "_.once" },
    },
    {
      type: "description",
      description: {
        id: "_.once-description",
        children: (
          <>
            Принимает <b>функцию</b>, возвращает <b>функцию</b>, которая вызывается только один раз, остальные разы
            возвращает первый результат
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.once-code",
        language: "ts",
        children: `const randomed = () => {
  const random = Math.random();
  console.log(random);

  return random;
};
const onced = _.once(randomed);

const result = onced();
// 0.36881507005472014;
console.log(result); // 0.36881507005472014;

const result2 = onced();
console.log(result2); // 0.36881507005472014;`,
      },
    },
  ],
};

export default once;
