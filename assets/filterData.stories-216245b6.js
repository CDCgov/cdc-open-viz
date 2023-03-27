import{M as l}from"./index-a5c7af6f.js";import{j as n,a as t,F as s}from"./jsx-runtime-670450c2.js";import{u as c}from"./index-4fb8b842.js";import"./iframe-9bfe7737.js";import"../sb-preview/runtime.mjs";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-6e91e324.js";import"./index-d475d2ea.js";import"./index-c46f0053.js";import"./index-d37d4223.js";import"./index-356e4a49.js";function h(a={}){const{wrapper:i}=Object.assign({},c(),a.components);return i?n(i,{...a,children:n(o,{})}):o();function o(){const e=Object.assign({h1:"h1",p:"p",a:"a",code:"code",h2:"h2",pre:"pre",ul:"ul",li:"li",strong:"strong"},c(),a.components);return t(s,{children:[n(l,{title:"Helpers/CoveHelper/Data/filterData"}),`
`,n(e.h1,{children:"filterData"}),`
`,t(e.p,{children:["A ",n(e.a,{href:"./?path=/docs/helpers-covehelper-covehelper-class--docs",children:"CoveHelper"})," function that filters data based on the values defined in ",n(e.code,{children:"filters"}),"."]}),`
`,n(e.p,{children:" "}),`
`,n(e.h2,{children:"Syntax"}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`CoveHelper.Data.filterData(filters, data)
`})}),`
`,n(e.h2,{children:"Parameters"}),`
`,t(e.p,{children:["This function takes in two arguments: ",n(e.code,{children:"filters"})," and ",n(e.code,{children:"data"}),":"]}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:[n(e.code,{children:"filters"}),": Array of objects where each object contains two properties: ",n(e.code,{children:"columnName"})," and ",n(e.code,{children:"active"}),":",`
`,t(e.ul,{children:[`
`,t(e.li,{children:[n(e.code,{children:"columnName"}),": String representing the name of a column in data."]}),`
`,t(e.li,{children:[n(e.code,{children:"active"}),": Value indicating whether the rows in data with that column value should be included in the filtered result."]}),`
`]}),`
`]}),`
`,t(e.li,{children:[n(e.code,{children:"data"}),": Array of objects where each object represents a row of data."]}),`
`]}),`
`,n("br",{}),`
`,t(e.p,{children:[n(e.strong,{children:"Returns:"})," New array containing only the rows that meet the filter criteria."]}),`
`,n(e.p,{children:" "}),`
`,n(e.h2,{children:"Example"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`const personFilters = [
  { columnName: 'name', active: 'Alice' },
  { columnName: 'age', active: 30 }
]

const personData = [
  { name: 'Alice', age: 30, height: 5.6, weight: 130 },
  { name: 'Bob', age: 40, height: 5.9, weight: 160 },
  { name: 'Charlie', age: 50, height: 5.11, weight: 180 }
]

const filteredPerson = CoveHelper.Data.filterData(personFilters, personData)
console.log(filteredPerson) // [{ name: 'Alice', age: 30, height: 5.6, weight: 130 }]
`})})]})}}const d=()=>{throw new Error("Docs-only story")};d.parameters={docsOnly:!0};const r={title:"Helpers/CoveHelper/Data/filterData",tags:["stories-mdx"],includeStories:["__page"]};r.parameters=r.parameters||{};r.parameters.docs={...r.parameters.docs||{},page:h};const y=["__page"];export{y as __namedExportsOrder,d as __page,r as default};
//# sourceMappingURL=filterData.stories-216245b6.js.map
