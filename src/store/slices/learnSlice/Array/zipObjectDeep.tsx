import React from "react";
import { RuleProps } from "@src/components/Rule";

const zipObjectDeep: RuleProps = {
  id: "_.zipObjectDeep",
  blocks: [
    {
      type: "title",
      title: { id: "_.zipObjectDeep-title", children: "_.zipObjectDeep" },
    },
    {
      type: "description",
      description: {
        id: "_.zipObjectDeep-description",
        children: (
          <>
            Принимает <b>два массива</b>, возвращает <b>объект</b>, где путём является N-ное значение первого массива,
            значением N-ное значение второго массива
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.zipObjectDeep-code",
        language: "ts",
        children: `const baseArray = ["a.c[1]", "b[d].f[0]", "a.c[0]"];
const baseArray2 = [1, 2, 3];

const zipedObjectDeep = _.zipObjectDeep(baseArray, baseArray2);
console.log(zipedObjectDeep); // { a: { c: [3, 1] }, b: { d: { f: [2] } } };`,
      },
    },
  ],
};

export default zipObjectDeep;
