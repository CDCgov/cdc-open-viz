import{M as p}from"./index-d00d5d05.js";import{j as r,a as t,F as d}from"./jsx-runtime-670450c2.js";import{u as i}from"./index-4fb8b842.js";import"./iframe-a7047431.js";import"../sb-preview/runtime.mjs";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-6e91e324.js";import"./index-d475d2ea.js";import"./index-96c5f47c.js";import"./index-d37d4223.js";import"./index-53833bae.js";import"./index-356e4a49.js";function c(a={}){const{wrapper:o}=Object.assign({},i(),a.components);return o?r(o,{...a,children:r(s,{})}):s();function s(){const e=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",strong:"strong",ul:"ul",li:"li",h3:"h3"},i(),a.components);return t(d,{children:[r(p,{title:"Helpers/CoveHelper/Date/parseDate"}),`
`,r(e.h1,{children:"parseDate"}),`
`,r(e.p,{children:"Function that uses the d3-time-format library to parse a given date string according to a specified format."}),`
`,r(e.p,{children:" "}),`
`,r(e.h2,{children:"Syntax"}),`
`,r(e.pre,{children:r(e.code,{className:"language-js",children:`CoveHelper.Date.parseDate(format, dateString)
`})}),`
`,r(e.p,{children:r(e.strong,{children:"Parameters:"})}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:[r(e.code,{children:"format"}),": a string representing the format of the input date string.",`
`,t(e.ul,{children:[`
`,t(e.li,{children:["If not provided, it defaults to ",r(e.strong,{children:"%Y-%m-%d"}),", which represents the year, month, and day of the date in a numeric format, separated by hyphens."]}),`
`]}),`
`]}),`
`,t(e.li,{children:[r(e.code,{children:"dateString"}),": the date string to be parsed"]}),`
`]}),`
`,r(e.p,{children:r(e.strong,{children:"Returns:"})}),`
`,r(e.p,{children:"The function returns a Date object representing the parsed date string. If the parsing fails, it returns the current date."}),`
`,r(e.p,{children:" "}),`
`,r(e.h3,{children:"Example"}),`
`,r(e.pre,{children:r(e.code,{className:"language-jsx",children:`import CoveHelper from '@cdc/core/helpers/CoveHelper'

...

const dateString = '01-Jan-2022';
const parsedDate = CoveHelper.Date.parseDate('%d-%b-%Y', dateString);
console.log(parsedDate); // Output: Sat Jan 01 2022 00:00:00 GMT+0000 (Coordinated Universal Time)
`})})]})}}const l=()=>{throw new Error("Docs-only story")};l.parameters={docsOnly:!0};const n={title:"Helpers/CoveHelper/Date/parseDate",tags:["stories-mdx"],includeStories:["__page"]};n.parameters=n.parameters||{};n.parameters.docs={...n.parameters.docs||{},page:c};const M=["__page"];export{M as __namedExportsOrder,l as __page,n as default};
//# sourceMappingURL=parseDate.stories-2d300e58.js.map
