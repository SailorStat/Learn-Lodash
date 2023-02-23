import React from "react";
import { RuleProps } from "@src/components/Rule";

const orderBy: RuleProps = {
  id: "_.orderBy",
  blocks: [
    {
      type: "title",
      title: { id: "_.orderBy-title", children: "_.orderBy" },
    },
    {
      type: "description",
      description: {
        id: "_.orderBy-description",
        children: (
          <>
            Принимает{" "}
            <b>
              массив, массив ключей и массив <i>asc</i> и <i>desc</i>
            </b>
            , возвращает <b>массив</b>, упорядоченный в приоритетности полей по порядку ключей во втором массиве и
            порядке заданном третьим массивом
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.orderBy-code",
        language: "ts",
        children: `const baseArray = [
  { name: "React", release: 2014 },
  { name: "Vue", release: 2014 },
  { name: "Angular", release: 2016 },
];

const ordered = _.orderBy(baseArray, ["release", "name"], ["desc", "asc"]);
console.log(ordered); // [
//   { name: "Angular", release: 2016 },
//   { name: "React", release: 2014 },
//   { name: "Vue", release: 2014 },
// ];`,
      },
    },
  ],
};

export default orderBy;
