import React from "react";
import { RuleProps } from "@src/components/Rule";

const isDate: RuleProps = {
  id: "_.isDate",
  blocks: [
    {
      type: "title",
      title: { id: "_.isDate-title", children: "_.isDate" },
    },
    {
      type: "description",
      description: {
        id: "_.isDate-description",
        children: (
          <>
            Принимает <b>значениe</b>, возвращает <b>true</b>, если значение типа Date. Иначе функция вернёт{" "}
            <b>false</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.isDate-code",
        language: "ts",
        children: `const isLikeDate = _.isDate("2012-01-26T13:51:50.417-07:00");
console.log(isLikeDate); // false;

const isLikeDate2 = _.isDate(new Date(3));
console.log(isLikeDate2); // true;

const isLikeDate3 = _.isDate("11 sep 2021");
console.log(isLikeDate3); // false;`,
      },
    },
  ],
};

export default isDate;
