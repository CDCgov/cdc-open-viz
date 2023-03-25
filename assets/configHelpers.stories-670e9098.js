import{M as d}from"./index-a3f1b2cb.js";import{j as n,a as r,F as l}from"./jsx-runtime-670450c2.js";import{u as a}from"./index-4fb8b842.js";import"./iframe-c940d419.js";import"../sb-preview/runtime.mjs";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-6e91e324.js";import"./index-d475d2ea.js";import"./index-c46f0053.js";import"./index-d37d4223.js";import"./index-356e4a49.js";function h(t={}){const{wrapper:i}=Object.assign({},a(),t.components);return i?n(i,{...t,children:n(c,{})}):c();function c(){const e=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",strong:"strong",ul:"ul",li:"li",em:"em",pre:"pre"},a(),t.components);return r(l,{children:[n(d,{title:"Helpers/configHelpers"}),`
`,n(e.h1,{children:"configHelpers"}),`
`,n(e.p,{children:"The configHelpers are used specifically for working with, and updating, COVE config settings inside the Store."}),`
`,r(e.p,{children:["It exports three helper functions: ",n(e.code,{children:"isConfigEqual"}),", ",n(e.code,{children:"setConfigKeyValue"}),", and ",n(e.code,{children:"getConfigKeyValue"}),":"]}),`
`,n(e.p,{children:" "}),`
`,n(e.h2,{children:"isConfigEqual"}),`
`,r(e.p,{children:["A function that takes two arguments, ",n(e.code,{children:"a"})," and ",n(e.code,{children:"b"}),". Returns ",n(e.code,{children:"true"})," if they are equal (have the same key-value pairs), and ",n(e.code,{children:"false"})," otherwise."]}),`
`,r(e.p,{children:["The comparison is performed using ",n(e.code,{children:"JSON.stringify"})," to convert the objects to strings before comparing."]}),`
`,n(e.p,{children:n(e.strong,{children:"Parameters:"})}),`
`,r(e.ul,{children:[`
`,r(e.li,{children:[n(e.code,{children:"a"})," ",n(e.em,{children:"(any)"})," - The first object to compare."]}),`
`,r(e.li,{children:[n(e.code,{children:"b"})," ",n(e.em,{children:"(any)"})," - The second object to compare."]}),`
`]}),`
`,n(e.p,{children:n(e.strong,{children:"Returns:"})}),`
`,r(e.p,{children:[n(e.code,{children:"true"})," if ",n(e.code,{children:"a"})," and ",n(e.code,{children:"b"})," are equal, ",n(e.code,{children:"false"})," otherwise."]}),`
`,n(e.p,{children:n(e.strong,{children:"Example:"})}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`const a = { foo: 'bar' };
const b = { foo: 'bar' };

isConfigEqual(a, b); // true

// Without the JSON.stringify, a and b are considered different objects due to
// referential inequality, and would normally return false.
// However, when converted to JSON strings, a and b become equal, so isConfigEqual returns true.
`})}),`
`,n(e.p,{children:" "}),`
`,n(e.h2,{children:"setConfigKeyValue"}),`
`,r(e.p,{children:["A function that takes two arguments, ",n(e.code,{children:"configKeyArray"})," and ",n(e.code,{children:"setKeyValue"}),". Returns an object with the provided ",n(e.code,{children:"configKeyArray"})," keys, and the final key set to the provided ",n(e.code,{children:"setKeyValue"})," value."]}),`
`,n(e.p,{children:n(e.strong,{children:"Parameters:"})}),`
`,r(e.ul,{children:[`
`,r(e.li,{children:[n(e.code,{children:"configKeyArray"})," ",n(e.em,{children:"(array or string)"})," - An array of keys to traverse through the config object or a string for direct child lookup."]}),`
`,r(e.li,{children:[n(e.code,{children:"setKeyValue"})," ",n(e.em,{children:"(any)"})," - The value to set the final key to in the returned object."]}),`
`]}),`
`,n(e.p,{children:n(e.strong,{children:"Returns:"})}),`
`,n(e.p,{children:"An object with keys/subkeys, based on the provided array, and the final key set to the provided value."}),`
`,n(e.p,{children:n(e.strong,{children:"Example:"})}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`const a = ['foo', 'bar', 'baz'];
const b = 'qux';

setConfigKeyValue(a, b); // { foo: { bar: { baz: 'qux' } } }

// The above response can then be merged using lodash to either create, or update the config object in the store.
`})}),`
`,n(e.p,{children:" "}),`
`,n(e.h2,{children:"getConfigKeyValue"}),`
`,r(e.p,{children:["A function that takes two arguments, ",n(e.code,{children:"configKeyArray"})," and ",n(e.code,{children:"objectToParse"}),", and returns the value of the final key in the provided array by traversing through the provided object."]}),`
`,r(e.p,{children:["If the final key is not found, the function returns ",n(e.code,{children:"undefined"}),"."]}),`
`,n(e.p,{children:n(e.strong,{children:"Parameters:"})}),`
`,r(e.ul,{children:[`
`,r(e.li,{children:[n(e.code,{children:"configKeyArray"})," ",n(e.em,{children:"(array or string)"})," - An array of keys to traverse through the config object or a string for direct child lookup."]}),`
`,r(e.li,{children:[n(e.code,{children:"objectToParse"})," ",n(e.em,{children:"(object)"})," - The object to parse and get the value from."]}),`
`]}),`
`,n(e.p,{children:n(e.strong,{children:"Returns:"})}),`
`,r(e.p,{children:["The value of the final key in the provided array, by traversing through the provided object, or ",n(e.code,{children:"undefined"})," if the key is not found."]}),`
`,n(e.p,{children:n(e.strong,{children:"Example:"})}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`const a = ['foo', 'bar', 'baz'];
const b = { foo: { bar: { baz: 'qux' } } };

getConfigKeyValue(a, b); // 'qux'

// Returns the value of the final key in the provided array, by traversing through the provided object.
`})})]})}}const s=()=>{throw new Error("Docs-only story")};s.parameters={docsOnly:!0};const o={title:"Helpers/configHelpers",tags:["stories-mdx"],includeStories:["__page"]};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:h};const C=["__page"];export{C as __namedExportsOrder,s as __page,o as default};
//# sourceMappingURL=configHelpers.stories-670e9098.js.map
