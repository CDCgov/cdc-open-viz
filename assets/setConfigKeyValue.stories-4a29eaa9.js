import{M as c}from"./index-a5c7af6f.js";import{j as n,a as r,F as l}from"./jsx-runtime-670450c2.js";import{u as s}from"./index-4fb8b842.js";import"./iframe-9bfe7737.js";import"../sb-preview/runtime.mjs";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-6e91e324.js";import"./index-d475d2ea.js";import"./index-c46f0053.js";import"./index-d37d4223.js";import"./index-356e4a49.js";function d(o={}){const{wrapper:a}=Object.assign({},s(),o.components);return a?n(a,{...o,children:n(i,{})}):i();function i(){const e=Object.assign({h1:"h1",p:"p",a:"a",code:"code",h2:"h2",pre:"pre",ul:"ul",li:"li",strong:"strong"},s(),o.components);return r(l,{children:[n(c,{title:"Helpers/configHelpers/setConfigKeyValue"}),`
`,n(e.h1,{children:"setConfigKeyValue"}),`
`,r(e.p,{children:["A ",n(e.a,{href:"./?path=/docs/helpers-confighelpers-confighelpers--docs",children:"configHelper"})," function that returns an object with the provided ",n(e.code,{children:"configKeyArray"})," keys, and its final key set to the provided ",n(e.code,{children:"setKeyValue"})," value."]}),`
`,n(e.p,{children:" "}),`
`,n(e.h2,{children:"Syntax"}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`setConfigKeyValue(configKeyArray, setKeyValue)
`})}),`
`,n(e.h2,{children:"Parameters"}),`
`,r(e.ul,{children:[`
`,r(e.li,{children:[n(e.code,{children:"configKeyArray"}),": Array of keys to traverse through the config object, or a string for a direct child target."]}),`
`,r(e.li,{children:[n(e.code,{children:"setKeyValue"}),": The value to set the final key to in the returned object."]}),`
`]}),`
`,n("br",{}),`
`,r(e.p,{children:[n(e.strong,{children:"Returns:"})," An object with keys/subkeys, based on the provided array, with the final key set to the provided value."]}),`
`,n(e.p,{children:" "}),`
`,n(e.h2,{children:"Example"}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`import { setConfigKeyValue } from '@cdc/core/helpers/configHelpers';

...

const a = ['foo', 'bar', 'baz'];
const b = 'qux';

setConfigKeyValue(a, b); // { foo: { bar: { baz: 'qux' } } }

// The object returned above can then be merged using lodash to either create, or update the config object in the store.
`})})]})}}const h=()=>{throw new Error("Docs-only story")};h.parameters={docsOnly:!0};const t={title:"Helpers/configHelpers/setConfigKeyValue",tags:["stories-mdx"],includeStories:["__page"]};t.parameters=t.parameters||{};t.parameters.docs={...t.parameters.docs||{},page:d};const C=["__page"];export{C as __namedExportsOrder,h as __page,t as default};
//# sourceMappingURL=setConfigKeyValue.stories-4a29eaa9.js.map
