import{M as a}from"./index-a5c7af6f.js";import{j as n,a as r,F as l}from"./jsx-runtime-670450c2.js";import{u as c}from"./index-4fb8b842.js";import"./iframe-9bfe7737.js";import"../sb-preview/runtime.mjs";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-6e91e324.js";import"./index-d475d2ea.js";import"./index-c46f0053.js";import"./index-d37d4223.js";import"./index-356e4a49.js";function d(t={}){const{wrapper:i}=Object.assign({},c(),t.components);return i?n(i,{...t,children:n(s,{})}):s();function s(){const e=Object.assign({h1:"h1",p:"p",a:"a",code:"code",h2:"h2",pre:"pre",ul:"ul",li:"li",strong:"strong"},c(),t.components);return r(l,{children:[n(a,{title:"Helpers/configHelpers/isConfigEqual"}),`
`,n(e.h1,{children:"isConfigEqual"}),`
`,r(e.p,{children:["A ",n(e.a,{href:"./?path=/docs/helpers-confighelpers-confighelpers--docs",children:"configHelper"})," function that compares two stringified objects, checks if they are the same, then returns the response as a boolean."]}),`
`,r(e.p,{children:["The comparison is performed using ",n(e.code,{children:"JSON.stringify"})," to convert the objects to strings before comparing."]}),`
`,n(e.p,{children:" "}),`
`,n(e.h2,{children:"Syntax"}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`isConfigEqual(a, b);
`})}),`
`,n(e.h2,{children:"Parameters"}),`
`,r(e.ul,{children:[`
`,r(e.li,{children:[n(e.code,{children:"a"}),": First object to compare."]}),`
`,r(e.li,{children:[n(e.code,{children:"b"}),": Second object to compare."]}),`
`]}),`
`,r(e.p,{children:[n(e.strong,{children:"Returns:"})," ",n(e.code,{children:"true"})," if ",n(e.code,{children:"a"})," and ",n(e.code,{children:"b"})," are equal, ",n(e.code,{children:"false"})," otherwise."]}),`
`,n(e.p,{children:" "}),`
`,n(e.h2,{children:"Example"}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`import { isConfigEqual } from '@cdc/core/helpers/configHelpers';

...

const a = { foo: 'bar' };
const b = { foo: 'bar' };

isConfigEqual(a, b); // true

// Without the JSON.stringify, a and b are considered different objects due to
// referential inequality, and would normally return false.
// However, when converted to JSON strings, a and b become equal, so isConfigEqual returns true.
`})})]})}}const p=()=>{throw new Error("Docs-only story")};p.parameters={docsOnly:!0};const o={title:"Helpers/configHelpers/isConfigEqual",tags:["stories-mdx"],includeStories:["__page"]};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:d};const w=["__page"];export{w as __namedExportsOrder,p as __page,o as default};
//# sourceMappingURL=isConfigEqual.stories-7664d029.js.map
