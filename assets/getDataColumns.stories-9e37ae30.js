import{M as i}from"./index-045bade3.js";import{j as e,a,F as l}from"./jsx-runtime-670450c2.js";import{u as s}from"./index-4fb8b842.js";import"./iframe-ad710d4e.js";import"../sb-preview/runtime.mjs";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-6e91e324.js";import"./index-d475d2ea.js";import"./index-96c5f47c.js";import"./index-d37d4223.js";import"./index-53833bae.js";import"./index-356e4a49.js";function p(t={}){const{wrapper:o}=Object.assign({},s(),t.components);return o?e(o,{...t,children:e(c,{})}):c();function c(){const n=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",strong:"strong",ul:"ul",li:"li",h3:"h3"},s(),t.components);return a(l,{children:[e(i,{title:"Helpers/CoveHelper/Data/getDataColumns"}),`
`,e(n.h1,{children:"getDataColumns"}),`
`,e(n.p,{children:"Function that maps over each data object in the input array, using Object.keys() to extract the array key for each row, and returns an aggregated array of keys from each."}),`
`,e(n.p,{children:" "}),`
`,e(n.h2,{children:"Syntax"}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:`CoveHelper.Data.getDataColumns(dataArray)
`})}),`
`,e(n.p,{children:e(n.strong,{children:"Parameters:"})}),`
`,a(n.ul,{children:[`
`,a(n.li,{children:[e(n.code,{children:"dataArray"}),": array of data objects"]}),`
`]}),`
`,e(n.p,{children:e(n.strong,{children:"Returns:"})}),`
`,e(n.p,{children:"An array of the unique keys in the object columns retrieved."}),`
`,e(n.p,{children:" "}),`
`,e(n.h3,{children:"Example"}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:`import CoveHelper from '@cdc/core/helpers/CoveHelper'

...

const data = [
  { name: 'Alice', age: 25, city: 'New York' },
  { name: 'Bob', age: 30, city: 'San Francisco' },
  { name: 'Charlie', age: 35, city: 'Boston' }
]

const columns = CoveHelper.Data.getDataColumns(data)

console.log(columns) // ['name', 'age', 'city']
`})})]})}}const m=()=>{throw new Error("Docs-only story")};m.parameters={docsOnly:!0};const r={title:"Helpers/CoveHelper/Data/getDataColumns",tags:["stories-mdx"],includeStories:["__page"]};r.parameters=r.parameters||{};r.parameters.docs={...r.parameters.docs||{},page:p};const b=["__page"];export{b as __namedExportsOrder,m as __page,r as default};
//# sourceMappingURL=getDataColumns.stories-9e37ae30.js.map
