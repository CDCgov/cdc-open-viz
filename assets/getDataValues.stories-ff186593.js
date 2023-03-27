import{M as c}from"./index-a5c7af6f.js";import{j as a,a as t,F as l}from"./jsx-runtime-670450c2.js";import{u as i}from"./index-4fb8b842.js";import"./iframe-9bfe7737.js";import"../sb-preview/runtime.mjs";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-6e91e324.js";import"./index-d475d2ea.js";import"./index-c46f0053.js";import"./index-d37d4223.js";import"./index-356e4a49.js";function d(r={}){const{wrapper:o}=Object.assign({},i(),r.components);return o?a(o,{...r,children:a(s,{})}):s();function s(){const e=Object.assign({h1:"h1",p:"p",a:"a",code:"code",h2:"h2",pre:"pre",ul:"ul",li:"li",em:"em",strong:"strong"},i(),r.components);return t(l,{children:[a(c,{title:"Helpers/CoveHelper/Data/getDataValues"}),`
`,a(e.h1,{children:"getDataValues"}),`
`,t(e.p,{children:["A ",a(e.a,{href:"./?path=/docs/helpers-covehelper-covehelper-class--docs",children:"CoveHelper"})," function that iterates over each object in the provided ",a(e.code,{children:"data"}),", and pushes the value of the ",a(e.code,{children:"dataKey"})," property to the values array. Returns either the values array as is, or a new array created from the Set of unique values using the spread operator."]}),`
`,a(e.p,{children:" "}),`
`,a(e.h2,{children:"Syntax"}),`
`,a(e.pre,{children:a(e.code,{className:"language-js",children:`CoveHelper.Data.getDataValues(data, dataKey, unique = false)
`})}),`
`,a(e.h2,{children:"Parameters"}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:[a(e.code,{children:"data"}),": Array of data objects."]}),`
`,t(e.li,{children:[a(e.code,{children:"dataKey"}),": String representing the name of a column in the data."]}),`
`,t(e.li,{children:[a(e.code,{children:"unique"}),": ",a(e.em,{children:"(Optional)"})," Boolean flag that defaults to false. If set to ",a(e.code,{children:"true"}),", returns only the unique values."]}),`
`]}),`
`,a("br",{}),`
`,t(e.p,{children:[a(e.strong,{children:"Returns:"})," An array of values found in the specified ",a(e.code,{children:"dataKey"})," column of the provided ",a(e.code,{children:"data"}),". If the ",a(e.code,{children:"unique"})," flag is set to true, returns only the unique values."]}),`
`,a(e.p,{children:" "}),`
`,a(e.h2,{children:"Example"}),`
`,a(e.pre,{children:a(e.code,{className:"language-js",children:`const data = [
  { name: 'Alice', age: 25, city: 'New York' },
  { name: 'Bob', age: 30, city: 'San Francisco' },
  { name: 'Charlie', age: 35, city: 'Boston' }
]

const ages = CoveHelper.Data.getDataValues(data, 'age')

console.log(ages) // [25, 30, 35]

const uniqueCities = CoveHelper.Data.getDataValues(data, 'city', true)

console.log(uniqueCities) // ['New York', 'San Francisco', 'Boston']
`})})]})}}const h=()=>{throw new Error("Docs-only story")};h.parameters={docsOnly:!0};const n={title:"Helpers/CoveHelper/Data/getDataValues",tags:["stories-mdx"],includeStories:["__page"]};n.parameters=n.parameters||{};n.parameters.docs={...n.parameters.docs||{},page:d};const x=["__page"];export{x as __namedExportsOrder,h as __page,n as default};
//# sourceMappingURL=getDataValues.stories-ff186593.js.map
