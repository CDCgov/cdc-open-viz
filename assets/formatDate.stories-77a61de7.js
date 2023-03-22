import{M as s}from"./index-f24d5b78.js";import{j as t,a as r,F as c}from"./jsx-runtime-670450c2.js";import{u as d}from"./index-4fb8b842.js";import"./iframe-0f1521e3.js";import"../sb-preview/runtime.mjs";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-6e91e324.js";import"./index-d475d2ea.js";import"./index-96c5f47c.js";import"./index-d37d4223.js";import"./index-53833bae.js";import"./index-356e4a49.js";function p(o={}){const{wrapper:a}=Object.assign({},d(),o.components);return a?t(a,{...o,children:t(i,{})}):i();function i(){const e=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",strong:"strong",ul:"ul",li:"li",h3:"h3"},d(),o.components);return r(c,{children:[t(s,{title:"Helpers/CoveHelper/Date/formatDate"}),`
`,t(e.h1,{children:"formatDate"}),`
`,t(e.p,{children:"Function that uses the d3-time-format library to format a given date according to a specified format."}),`
`,t(e.p,{children:" "}),`
`,t(e.h2,{children:"Syntax"}),`
`,t(e.pre,{children:t(e.code,{className:"language-js",children:`CoveHelper.Date.formatDate(format, date)
`})}),`
`,t(e.p,{children:t(e.strong,{children:"Parameters:"})}),`
`,r(e.ul,{children:[`
`,r(e.li,{children:[t(e.code,{children:"format"}),": A string representing the desired format of the output date",`
`,r(e.ul,{children:[`
`,r(e.li,{children:["If not provided, it defaults to ",t(e.strong,{children:"%Y-%m-%d"}),", which represents the year, month, and day of the date in a numeric format, separated by hyphens"]}),`
`]}),`
`]}),`
`,r(e.li,{children:[t(e.code,{children:"date"}),": The date object to be formatted"]}),`
`]}),`
`,t(e.p,{children:t(e.strong,{children:"Returns:"})}),`
`,t(e.p,{children:"A formatted string representing the input date according to the specified format."}),`
`,t(e.p,{children:" "}),`
`,t(e.h3,{children:"Example"}),`
`,t(e.pre,{children:t(e.code,{className:"language-jsx",children:`import CoveHelper from '@cdc/core/helpers/CoveHelper'

...

const date = new Date('2022-01-01')
const formattedDate = CoveHelper.Date.formatDate('%d-%b-%Y', date)
console.log(formattedDate) // Output: '01-Jan-2022'
`})})]})}}const l=()=>{throw new Error("Docs-only story")};l.parameters={docsOnly:!0};const n={title:"Helpers/CoveHelper/Date/formatDate",tags:["stories-mdx"],includeStories:["__page"]};n.parameters=n.parameters||{};n.parameters.docs={...n.parameters.docs||{},page:p};const b=["__page"];export{b as __namedExportsOrder,l as __page,n as default};
//# sourceMappingURL=formatDate.stories-77a61de7.js.map
