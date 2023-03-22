import{M as l}from"./index-cbaed915.js";import{j as n,a as t,F as s}from"./jsx-runtime-670450c2.js";import{u as c}from"./index-4fb8b842.js";import"./iframe-2f398da2.js";import"../sb-preview/runtime.mjs";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-6e91e324.js";import"./index-d475d2ea.js";import"./index-96c5f47c.js";import"./index-d37d4223.js";import"./index-53833bae.js";import"./index-356e4a49.js";function d(a={}){const{wrapper:i}=Object.assign({},c(),a.components);return i?n(i,{...a,children:n(o,{})}):o();function o(){const e=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",strong:"strong",ul:"ul",li:"li",h3:"h3"},c(),a.components);return t(s,{children:[n(l,{title:"Helpers/CoveHelper/Data/filterData"}),`
`,n(e.h1,{children:"filterData"}),`
`,t(e.p,{children:["Function that filters data based on the values defined in ",n(e.code,{children:"filters"}),"."]}),`
`,n(e.p,{children:" "}),`
`,n(e.h2,{children:"Syntax"}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`CoveHelper.Data.filterData(filters, data)
`})}),`
`,n(e.p,{children:n(e.strong,{children:"Parameters:"})}),`
`,t(e.p,{children:["This function takes in two arguments: ",n(e.code,{children:"filters"})," and ",n(e.code,{children:"data"}),":"]}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:[n(e.code,{children:"filters"})," is an array of objects where each object contains two properties: ",n(e.code,{children:"columnName"})," and ",n(e.code,{children:"active"}),":",`
`,t(e.ul,{children:[`
`,t(e.li,{children:[n(e.code,{children:"columnName"})," is a string representing the name of a column in data"]}),`
`,t(e.li,{children:[n(e.code,{children:"active"})," is a value indicating whether the rows in data with that column value should be included in the filtered result"]}),`
`]}),`
`]}),`
`,t(e.li,{children:[n(e.code,{children:"data"}),` is an array of objects where each object represents a row of data
 `]}),`
`]}),`
`,n(e.p,{children:n(e.strong,{children:"Returns:"})}),`
`,n(e.p,{children:"New array containing only the rows that meet the filter criteria."}),`
`,n(e.p,{children:" "}),`
`,n(e.h3,{children:"Example"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`import CoveHelper from '@cdc/core/helpers/CoveHelper'

...

const filters = [
  { columnName: 'name', active: 'Alice' },
  { columnName: 'age', active: 30 }
]

const data = [
  { name: 'Alice', age: 30, height: 5.6, weight: 130 },
  { name: 'Bob', age: 40, height: 5.9, weight: 160 },
  { name: 'Charlie', age: 50, height: 5.11, weight: 180 }
]

const filteredData = CoveHelper.Data.filterData(filters, data)
console.log(filteredData)
// Output: [{ name: 'Alice', age: 30, height: 5.6, weight: 130 }]
`})})]})}}const h=()=>{throw new Error("Docs-only story")};h.parameters={docsOnly:!0};const r={title:"Helpers/CoveHelper/Data/filterData",tags:["stories-mdx"],includeStories:["__page"]};r.parameters=r.parameters||{};r.parameters.docs={...r.parameters.docs||{},page:d};const y=["__page"];export{y as __namedExportsOrder,h as __page,r as default};
//# sourceMappingURL=filterData.stories-b5a693ec.js.map
