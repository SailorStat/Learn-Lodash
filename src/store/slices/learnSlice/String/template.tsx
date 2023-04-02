import React from "react";
import { RuleProps } from "@src/components/Rule";

const template: RuleProps = {
  id: "_.template",
  blocks: [
    {
      type: "title",
      title: { id: "_.template-title", children: "_.template" },
    },
    {
      type: "description",
      description: {
        id: "_.template-description",
        children: (
          <>
            Принимает <b>строку и настройки</b>. Bозвращает <b>функцию</b>, которая ожидает объект значений для
            подстановаки
          </>
        ),
      },
    },
    {
      type: "code",
      code: {
        id: "_.template-code",
        language: "ts",
        children:
          `// Use the "interpolate" delimiter to create a compiled template.
const compiled = _.template('hello <%= user %>!');
compiled({ 'user': 'fred' });
// => 'hello fred!'
  
// Use the HTML "escape" delimiter to escape data property values.
const compiled = _.template('<b><%- value %></b>');
compiled({ 'value': '<script>' });
// => '<b>&lt;script&gt;</b>'
  
// Use the "evaluate" delimiter to execute JavaScript and generate HTML.
const compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
compiled({ 'users': ['fred', 'barney'] });
// => '<li>fred</li><li>barney</li>'
  
// Use the internal ` +
          "`print`" +
          `function in "evaluate" delimiters.
const compiled = _.template('<% print("hello " + user); %>!');
compiled({ 'user': 'barney' });
// => 'hello barney!'
  
// Use the ES template literal delimiter as an "interpolate" delimiter.
// Disable support by replacing the "interpolate" delimiter.
const compiled = _.template('hello` +
          "`${ user }!`" +
          `');
compiled({ 'user': 'pebbles' });
// => 'hello pebbles!'
  
// Use backslashes to treat delimiters as plain text.
const compiled = _.template('<%= "\\\\<%- value %\\\\>" %>');
compiled({ 'value': 'ignored' });
// => '<%- value %>'
  
// Use the` +
          "`imports` option to import `jQuery` as `jq`." +
          `
const text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
const compiled = _.template(text, { 'imports': { 'jq': jQuery } });
compiled({ 'users': ['fred', 'barney'] });
// => '<li>fred</li><li>barney</li>'
  
// Use the ` +
          "`sourceURL` option to specify a custom sourceURL for the template." +
          `
const compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
compiled(data);
// => Find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector.
  
// Use the` +
          "`variable` option to ensure a with-statement isn't used in the compiled template." +
          `
const compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
compiled.source;
// => function(data) {
//   const __t, __p = '';
//   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
//   return __p;
// }
  
// Use custom template delimiters.
_.templateSettings.interpolate = /{{([\\s\\S]+?)}}/g;
const compiled = _.template('hello {{ user }}!');
compiled({ 'user': 'mustache' });
// => 'hello mustache!'
  
// Use the` +
          "`source` property to inline compiled templates for meaningful" +
          `
// line numbers in error messages and stack traces.
fs.writeFileSync(path.join(process.cwd(), 'jst.js'), '\\
  const JST = {\\
    "main": ' + _.template(mainText).source + '\\
  };\\
');`,
      },
    },
  ],
};

export default template;
