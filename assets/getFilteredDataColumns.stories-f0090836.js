import{M as s}from"./index-045bade3.js";import{j as n,a as r,F as l}from"./jsx-runtime-670450c2.js";import{u as c}from"./index-4fb8b842.js";import"./iframe-ad710d4e.js";import"../sb-preview/runtime.mjs";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-6e91e324.js";import"./index-d475d2ea.js";import"./index-96c5f47c.js";import"./index-d37d4223.js";import"./index-53833bae.js";import"./index-356e4a49.js";function d(a={}){const{wrapper:o}=Object.assign({},c(),a.components);return o?n(o,{...a,children:n(i,{})}):i();function i(){const e=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",strong:"strong",ul:"ul",li:"li",h3:"h3"},c(),a.components);return r(l,{children:[n(s,{title:"Helpers/CoveHelper/Data/getFilteredDataColumns"}),`
`,n(e.h1,{children:"getFilteredDataColumns"}),`
`,n(e.p,{children:"Function that iterates over a provided array of data and returns an array of filtered column names that are in the provided config object."}),`
`,n(e.p,{children:" "}),`
`,n(e.h2,{children:"Syntax"}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`CoveHelper.Data.getFilteredDataColumns(config, dataArray)
`})}),`
`,n(e.p,{children:n(e.strong,{children:"Parameters:"})}),`
`,r(e.ul,{children:[`
`,r(e.li,{children:[n(e.code,{children:"config"})," is an object that may contain two keys: ",n(e.code,{children:"series"})," and ",n(e.code,{children:"confidenceKeys"}),":",`
`,r(e.ul,{children:[`
`,r(e.li,{children:[n(e.code,{children:"series"})," is an array of objects that each contain a dataKey property"]}),`
`,r(e.li,{children:[n(e.code,{children:"confidenceKeys"})," is an object that contains key-value pairs where the keys are column names and the values are boolean values indicating whether the column is a confidence interval"]}),`
`]}),`
`]}),`
`,r(e.li,{children:[n(e.code,{children:"dataArray"})," is an array of objects where each object represents a row of data"]}),`
`]}),`
`,n(e.p,{children:n(e.strong,{children:"Returns:"})}),`
`,r(e.p,{children:["An array of filtered data column names from ",n(e.code,{children:"dataArray"})]}),`
`,n(e.p,{children:" "}),`
`,n(e.h3,{children:"Example"}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`import CoveHelper from '@cdc/core/helpers/CoveHelper'

...

const config = {
  series: [
    { dataKey: 'name' },
    { dataKey: 'age' }
  ],
  confidenceKeys: {
    height: true,
    weight: true
  }
}

const dataArray = [
  { name: 'Alice', age: 30, height: 5.6, weight: 130 },
  { name: 'Bob', age: 40, height: 5.9, weight: 160 },
  { name: 'Charlie', age: 50, height: 5.11, weight: 180 }
]

const columns = CoveHelper.Data.getFilteredDataColumns(config, dataArray)
console.log(columns) // Output: ['height', 'weight']
`})})]})}}const h=()=>{throw new Error("Docs-only story")};h.parameters={docsOnly:!0};const t={title:"Helpers/CoveHelper/Data/getFilteredDataColumns",tags:["stories-mdx"],includeStories:["__page"]};t.parameters=t.parameters||{};t.parameters.docs={...t.parameters.docs||{},page:d};const x=["__page"];export{x as __namedExportsOrder,h as __page,t as default};
//# sourceMappingURL=getFilteredDataColumns.stories-f0090836.js.map
