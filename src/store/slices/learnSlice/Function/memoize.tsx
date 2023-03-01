import React from "react";
import { RuleProps } from "@src/components/Rule";

const memoize: RuleProps = {
  id: "_.memoize",
  blocks: [
    {
      type: "title",
      title: { id: "_.memoize-title", children: "_.memoize" },
    },
    {
      type: "description",
      description: {
        id: "_.memoize-description",
        children: (
          <>
            Создает функцию, которая запоминает результат func. Если предусмотрен распознаватель, он определяет ключ
            кэша для хранения результата на основе аргументов, предоставленных запоминаемой функции. По умолчанию первый
            аргумент, предоставленный функции memoized, используется в качестве ключа кэша карты. Функция вызывается с
            привязкой this к запоминаемой функции.
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.memoize-code",
        language: "ts",
        children: `const object = { a: 1, b: 2 };
const other = { c: 3, d: 4 };

const values = _.memoize(_.values);
values(object); // => [1, 2]

values(other); // => [3, 4]

object.a = 2;
values(object); // => [1, 2]

// Модифицировать cache результат
values.cache.set(object, ["a", "b"]);
values(object); // => ['a', 'b']

// Замена _.memoize.Cache
_.memoize.Cache = WeakMap;`,
      },
    },
  ],
};

export default memoize;
