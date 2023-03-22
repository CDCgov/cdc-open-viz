import{M as c}from"./index-cbaed915.js";import{j as n,a as t,F as l}from"./jsx-runtime-670450c2.js";import{u as s}from"./index-4fb8b842.js";import"./iframe-2f398da2.js";import"../sb-preview/runtime.mjs";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-6e91e324.js";import"./index-d475d2ea.js";import"./index-96c5f47c.js";import"./index-d37d4223.js";import"./index-53833bae.js";import"./index-356e4a49.js";function d(r={}){const{wrapper:o}=Object.assign({},s(),r.components);return o?n(o,{...r,children:n(i,{})}):i();function i(){const e=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",strong:"strong",ul:"ul",li:"li",em:"em",h3:"h3"},s(),r.components);return t(l,{children:[n(c,{title:"Helpers/CoveHelper/Data/getDataValues"}),`
`,n(e.h1,{children:"getDataValues"}),`
`,t(e.p,{children:["Function that iterates over each object in the provided ",n(e.code,{children:"data"}),", and pushes the value of the ",n(e.code,{children:"dataKey"})," property to the values array. Returns either the values array as is, or a new array created from the Set of unique values using the spread operator."]}),`
`,n(e.p,{children:" "}),`
`,n(e.h2,{children:"Syntax"}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`CoveHelper.Data.getDataValues(data, dataKey, unique = false)
`})}),`
`,n(e.p,{children:n(e.strong,{children:"Parameters:"})}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:[n(e.code,{children:"data"}),": Array of data objects"]}),`
`,t(e.li,{children:[n(e.code,{children:"dataKey"}),": String representing the name of a column in the data"]}),`
`,t(e.li,{children:[n(e.code,{children:"unique"}),": ",n(e.em,{children:"(optional)"})," Boolean flag that defaults to false. If set to ",n(e.code,{children:"true"}),", returns only the unique values."]}),`
`]}),`
`,n(e.p,{children:n(e.strong,{children:"Returns:"})}),`
`,t(e.p,{children:["An array of values found in the specified ",n(e.code,{children:"dataKey"})," column of the provided ",n(e.code,{children:"data"}),". If the ",n(e.code,{children:"unique"})," flag is set to true, returns only the unique values."]}),`
`,n(e.p,{children:" "}),`
`,n(e.h3,{children:"Example"}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`import CoveHelper from '@cdc/core/helpers/CoveHelper'

...

const data = [
  { name: 'Alice', age: 25, city: 'New York' },
  { name: 'Bob', age: 30, city: 'San Francisco' },
  { name: 'Charlie', age: 35, city: 'Boston' }
]

const ages = CoveHelper.Data.getDataValues(data, 'age')

console.log(ages) // [25, 30, 35]

const uniqueCities = CoveHelper.Data.getDataValues(data, 'city', true)

console.log(uniqueCities) // ['New York', 'San Francisco', 'Boston']
`})})]})}}const h=()=>{throw new Error("Docs-only story")};h.parameters={docsOnly:!0};const a={title:"Helpers/CoveHelper/Data/getDataValues",tags:["stories-mdx"],includeStories:["__page"]};a.parameters=a.parameters||{};a.parameters.docs={...a.parameters.docs||{},page:d};const x=["__page"];export{x as __namedExportsOrder,h as __page,a as default};
//# sourceMappingURL=getDataValues.stories-1fe74a1c.js.map
