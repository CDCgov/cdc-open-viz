import{M as l}from"./index-a5c7af6f.js";import{j as n,a as r,F as c}from"./jsx-runtime-670450c2.js";import{u as i}from"./index-4fb8b842.js";import"./iframe-9bfe7737.js";import"../sb-preview/runtime.mjs";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-6e91e324.js";import"./index-d475d2ea.js";import"./index-c46f0053.js";import"./index-d37d4223.js";import"./index-356e4a49.js";function d(a={}){const{wrapper:o}=Object.assign({},i(),a.components);return o?n(o,{...a,children:n(s,{})}):s();function s(){const e=Object.assign({h1:"h1",p:"p",a:"a",code:"code",h2:"h2",pre:"pre",ul:"ul",li:"li",strong:"strong"},i(),a.components);return r(c,{children:[n(l,{title:"Helpers/CoveHelper/Math/getMean"}),`
`,n(e.h1,{children:"getMean"}),`
`,r(e.p,{children:["A ",n(e.a,{href:"./?path=/docs/helpers-covehelper-covehelper-class--docs",children:"CoveHelper"}),` function that takes an array of numbers and returns the mean (average) of all its elements. If the input is valid, the function
maps the array elements to numbers, calculates the mean
using the reduce() method, and returns the result.`]}),`
`,r(e.p,{children:["If ",n(e.code,{children:"ignoreZeros"})," is set to ",n(e.code,{children:"true"}),", removes any ",n(e.code,{children:"0"})," values in the provided array from the calculation."]}),`
`,n(e.p,{children:" "}),`
`,n(e.h2,{children:"Syntax"}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`CoveHelper.Math.getMean(arr, ignoreZeros)
`})}),`
`,n(e.h2,{children:"Parameters"}),`
`,r(e.ul,{children:[`
`,r(e.li,{children:[n(e.code,{children:"arr"}),": Array of numbers to be averaged."]}),`
`,r(e.li,{children:[n(e.code,{children:"ignoreZeros"}),": Boolean designating whether to ignore zero values when calculating the mean. Default is ",n(e.code,{children:"false"}),"."]}),`
`]}),`
`,n("br",{}),`
`,r(e.p,{children:[n(e.strong,{children:"Returns:"})," The mean (average) of the provided array elements, or ",n(e.code,{children:"undefined"})," if the input is invalid."]}),`
`,n(e.p,{children:" "}),`
`,n(e.h2,{children:"Example"}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`CoveHelper.Math.getMean([1, 2, 3]); // 2

CoveHelper.Math.getMean([1, 0, 3], true); // 2

CoveHelper.Math.getMean("1,2,3"); // undefined
`})})]})}}const h=()=>{throw new Error("Docs-only story")};h.parameters={docsOnly:!0};const t={title:"Helpers/CoveHelper/Math/getMean",tags:["stories-mdx"],includeStories:["__page"]};t.parameters=t.parameters||{};t.parameters.docs={...t.parameters.docs||{},page:d};const b=["__page"];export{b as __namedExportsOrder,h as __page,t as default};
//# sourceMappingURL=getMean.stories-11d63989.js.map
