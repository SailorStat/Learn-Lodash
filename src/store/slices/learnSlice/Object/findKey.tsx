import React from "react";
import { RuleProps } from "@src/components/Rule";

const findKey: RuleProps = {
  id: "_.findKey",
  blocks: [
    {
      type: "title",
      title: { id: "_.findKey-title", children: "_.findKey" },
    },
    {
      type: "description",
      description: {
        id: "_.findKey-description",
        children: (
          <>
            Принимает <b>объект и функцию поиска</b>, возвращает <b>первый найденный ключ</b>, результат которого{" "}
            <b>true</b>
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.findKey-code",
        language: "ts",
        children: `const baseObject = {
  f1: { a: { c: 3 }, b: 1 },
  f2: { a: { c: 0 }, b: 5 },
  f3: { a: { c: 3 }, b: 2 },
  f4: { a: { c: 3 }, b: 1 },
};

const findedKey = _.findKey(baseObject, (value) => !(value.a.c % 2));
console.log(findedKey); // "f2";`,
      },
    },
    {
      type: "description",
      description: {
        id: "_.findKey2-description",
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
        id: "_.findKey2-code",
        language: "ts",
        children: `const baseObject = {
  f1: { a: { c: 3 }, b: 1 },
  f2: { a: { c: 0 }, b: 5 },
  f3: { a: { c: 3 }, b: 2 },
  f4: { a: { c: 3 }, b: 1 },
};

const findedKey = _.findKey(baseObject, { a: { c: 0 } });
console.log(findedKey); // "f2";`,
      },
    },
    {
      type: "description",
      description: {
        id: "_.findKey3-description",
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
        id: "_.findKey3-code",
        language: "ts",
        children: `const baseObject = {
  f1: { a: { c: 3 }, b: 1 },
  f2: { a: { c: 0 }, b: 5 },
  f3: { a: { c: 3 }, b: 2 },
  f4: { a: { c: 3 }, b: 1 },
};

const findedKey = _.findKey(baseObject, ["a", { c: 3 }]);
console.log(findedKey); // "f1";`,
      },
    },
    {
      type: "description",
      description: {
        id: "_.findKey4-description",
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
        id: "_.findKey4-code",
        language: "ts",
        children: `const baseObject = {
  f1: { a: { c: 0 }, b: 1 },
  f2: { a: { c: 0 }, b: 5 },
  f3: { a: { c: 3 }, b: 2 },
  f4: { a: { c: 3 }, b: 1 },
};

const findedKey = _.findKey(baseObject, "a.c");
console.log(findedKey); // "f3";`,
      },
    },
  ],
};

export default findKey;
