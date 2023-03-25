import{M as i}from"./index-b657acfb.js";import{j as e,a as r,F as p}from"./jsx-runtime-670450c2.js";import{u as c}from"./index-4fb8b842.js";import"./iframe-a9b7e9f3.js";import"../sb-preview/runtime.mjs";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-6e91e324.js";import"./index-d475d2ea.js";import"./index-c46f0053.js";import"./index-d37d4223.js";import"./index-356e4a49.js";function l(a={}){const{wrapper:o}=Object.assign({},c(),a.components);return o?e(o,{...a,children:e(s,{})}):s();function s(){const n=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",strong:"strong",ul:"ul",li:"li",h3:"h3"},c(),a.components);return r(p,{children:[e(i,{title:"Helpers/CoveHelper/Data/getDataValueOptions"}),`
`,e(n.h1,{children:"getDataValueOptions"}),`
`,e(n.p,{children:"Function that creates a new Set object, iterates over each data object in the input array, and adds the keys of each object to the Set."}),`
`,e(n.p,{children:"If the input array is empty, returns an empty array."}),`
`,e(n.p,{children:" "}),`
`,e(n.h2,{children:"Syntax"}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:`CoveHelper.Data.getDataValueOptions(data)
`})}),`
`,e(n.p,{children:e(n.strong,{children:"Parameters:"})}),`
`,r(n.ul,{children:[`
`,r(n.li,{children:[e(n.code,{children:"data"})," - An array of data objects."]}),`
`]}),`
`,e(n.p,{children:e(n.strong,{children:"Returns:"})}),`
`,e(n.p,{children:"An array of unique column names (keys) found in the input data."}),`
`,e(n.p,{children:" "}),`
`,e(n.h3,{children:"Example"}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:`import CoveHelper from '@cdc/core/helpers/CoveHelper'

...

const data = [
  { name: 'Alice', age: 25, city: 'New York' },
  { name: 'Bob', age: 30, city: 'San Francisco' },
  { name: 'Charlie', age: 35, city: 'Boston' }
]

const options = CoveHelper.Data.getDataValueOptions(data)

console.log(options) // ['name', 'age', 'city']
`})})]})}}const d=()=>{throw new Error("Docs-only story")};d.parameters={docsOnly:!0};const t={title:"Helpers/CoveHelper/Data/getDataValueOptions",tags:["stories-mdx"],includeStories:["__page"]};t.parameters=t.parameters||{};t.parameters.docs={...t.parameters.docs||{},page:l};const H=["__page"];export{H as __namedExportsOrder,d as __page,t as default};
//# sourceMappingURL=getDataValueOptions.stories-9fde84a0.js.map
