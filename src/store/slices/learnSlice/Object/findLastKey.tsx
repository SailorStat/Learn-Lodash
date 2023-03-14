import React from "react";
import { RuleProps } from "@src/components/Rule";

const findLastKey: RuleProps = {
  id: "_.findLastKey",
  blocks: [
    {
      type: "title",
      title: { id: "_.findLastKey-title", children: "_.findLastKey" },
    },
    {
      type: "description",
      description: {
        id: "_.findLastKey-description",
        children: (
          <>
            Принимает <b>объект и функцию поиска</b>, возвращает c конца <b>первый найденный ключ</b>, результат
            которого <b>true</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.findLastKey-code",
        language: "ts",
        children: `const baseObject = {
  f1: { a: { c: 3 }, b: 1 },
  f2: { a: { c: 0 }, b: 5 },
  f3: { a: { c: 0 }, b: 2 },
  f4: { a: { c: 3 }, b: 1 },
};

const findedKey = _.findLastKey(baseObject, (value) => !(value.a.c % 2));
console.log(findedKey); // "f3";`,
      },
    },
    {
      type: "description",
      description: {
        id: "_.findLastKey2-description",
        children: (
          <>
            Поиск по объекту проводит <b>глубокое сравнение по значению</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.findLastKey2-code",
        language: "ts",
        children: `const baseObject = {
  f1: { a: { c: 3 }, b: 1 },
  f2: { a: { c: 0 }, b: 5 },
  f3: { a: { c: 0 }, b: 2 },
  f4: { a: { c: 3 }, b: 1 },
};

const findedKey = _.findLastKey(baseObject, { a: { c: 0 } });
console.log(findedKey); // "f3";`,
      },
    },
    {
      type: "description",
      description: {
        id: "_.findLastKey3-description",
        children: (
          <>
            Поиск по массиву принмает <b>первое значение, как ключ, второе, как значение</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.findLastKey3-code",
        language: "ts",
        children: `const baseObject = {
  f1: { a: { c: 3 }, b: 1 },
  f2: { a: { c: 0 }, b: 5 },
  f3: { a: { c: 3 }, b: 2 },
  f4: { a: { c: 3 }, b: 1 },
};

const findedKey = _.findLastKey(baseObject, ["a", { c: 3 }]);
console.log(findedKey); // "f4";`,
      },
    },
    {
      type: "description",
      description: {
        id: "_.findLastKey4-description",
        children: (
          <>
            Поиск по строке вернёт первое значение с полем <b> == true</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.findLastKey4-code",
        language: "ts",
        children: `const baseObject = {
  f1: { a: { c: 0 }, b: 1 },
  f2: { a: { c: 0 }, b: 5 },
  f3: { a: { c: 3 }, b: 2 },
  f4: { a: { c: 3 }, b: 1 },
};

const findedKey = _.findLastKey(baseObject, "a.c");
console.log(findedKey); // "f4";`,
      },
    },
  ],
};

export default findLastKey;
