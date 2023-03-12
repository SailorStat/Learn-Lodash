import React from "react";
import { RuleProps } from "@src/components/Rule";

const create: RuleProps = {
  id: "_.create",
  blocks: [
    {
      type: "title",
      title: { id: "_.create-title", children: "_.create" },
    },
    {
      type: "description",
      description: {
        id: "_.create-description",
        children: (
          <>
            Принимает <b>объекты</b>. Bозвращает <b>объект</b>, который наследуется от обоих объектов
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.create-code",
        language: "ts",
        children: `function Shape() {
  this.x = 0;
  this.y = 0;
}
  
function Circle() {
  Shape.call(this);
}
  
Circle.prototype = _.create(Shape.prototype, {
  constructor: Circle
});
  
const circle = new Circle;
console.log(circle instanceof Circle); // true;
console.log(circle instanceof Shape); // true;`,
      },
    },
  ],
};

export default create;
