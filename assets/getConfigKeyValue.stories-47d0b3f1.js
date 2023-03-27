import{M as s}from"./index-a5c7af6f.js";import{j as r,a as n,F as l}from"./jsx-runtime-670450c2.js";import{u as c}from"./index-4fb8b842.js";import"./iframe-9bfe7737.js";import"../sb-preview/runtime.mjs";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-6e91e324.js";import"./index-d475d2ea.js";import"./index-c46f0053.js";import"./index-d37d4223.js";import"./index-356e4a49.js";function h(t={}){const{wrapper:a}=Object.assign({},c(),t.components);return a?r(a,{...t,children:r(i,{})}):i();function i(){const e=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",pre:"pre",code:"code",ul:"ul",li:"li",strong:"strong"},c(),t.components);return n(l,{children:[r(s,{title:"Helpers/configHelpers/getConfigKeyValue"}),`
`,r(e.h1,{children:"getConfigKeyValue"}),`
`,n(e.p,{children:["A ",r(e.a,{href:"./?path=/docs/helpers-confighelpers-confighelpers--docs",children:"configHelper"})," function that returns the value of the final key in the provided array by traversing through the provided object."]}),`
`,r(e.p,{children:" "}),`
`,r(e.h2,{children:"Syntax"}),`
`,r(e.pre,{children:r(e.code,{className:"language-js",children:`getConfigKeyValue(configKeyArray, objectToParse)
`})}),`
`,r(e.h2,{children:"Parameters"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[r(e.code,{children:"configKeyArray"}),": Array of keys to traverse through the config object, or a string for a direct child lookup."]}),`
`,n(e.li,{children:[r(e.code,{children:"objectToParse"}),": Object to parse and get the value from."]}),`
`]}),`
`,r("br",{}),`
`,n(e.p,{children:[r(e.strong,{children:"Returns:"})," The value of the final key in the provided array, by traversing through the provided object, or ",r(e.code,{children:"undefined"})," if the key is not found."]}),`
`,r(e.p,{children:" "}),`
`,r(e.h2,{children:"Example"}),`
`,r(e.pre,{children:r(e.code,{className:"language-js",children:`import { getConfigKeyValue } from '@cdc/core/helpers/configHelpers';

...

const a = ['foo', 'bar', 'baz'];
const b = { foo: { bar: { baz: 'qux' } } };

getConfigKeyValue(a, b); // 'qux'

// Returns the value of the final key in the provided array, by traversing through the provided object.
`})})]})}}const d=()=>{throw new Error("Docs-only story")};d.parameters={docsOnly:!0};const o={title:"Helpers/configHelpers/getConfigKeyValue",tags:["stories-mdx"],includeStories:["__page"]};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:h};const K=["__page"];export{K as __namedExportsOrder,d as __page,o as default};
//# sourceMappingURL=getConfigKeyValue.stories-47d0b3f1.js.map
