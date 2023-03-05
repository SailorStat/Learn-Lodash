import React from "react";
import { RuleProps } from "@src/components/Rule";

const conformsTo: RuleProps = {
  id: "_.conformsTo",
  blocks: [
    {
      type: "title",
      title: { id: "_.conformsTo-title", children: "_.conformsTo" },
    },
    {
      type: "description",
      description: {
        id: "_.conformsTo-description",
        children: (
          <>
            Принимает <b>объект и объект</b>, возвращает <b>true</b>, если по всем фукциями по ключам 2-го объекта
            первый объект вернёт true. Иначе функция вернёт <b>false</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.conformsTo-code",
        language: "ts",
        children: `const ageValidate = (value: number) => value > 18;
const nameValidate = (value: string) => value === _.capitalize(value);

const conforms = _.conformsTo({ age: 15, name: "Pete" }, { age: ageValidate, name: nameValidate });
console.log(conforms); // false;`,
      },
    },
  ],
};

export default conformsTo;
