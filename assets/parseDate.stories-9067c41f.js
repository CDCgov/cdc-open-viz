import{M as c}from"./index-a5c7af6f.js";import{j as r,a as t,F as d}from"./jsx-runtime-670450c2.js";import{u as i}from"./index-4fb8b842.js";import"./iframe-9bfe7737.js";import"../sb-preview/runtime.mjs";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-6e91e324.js";import"./index-d475d2ea.js";import"./index-c46f0053.js";import"./index-d37d4223.js";import"./index-356e4a49.js";function p(a={}){const{wrapper:o}=Object.assign({},i(),a.components);return o?r(o,{...a,children:r(s,{})}):s();function s(){const e=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",pre:"pre",code:"code",ul:"ul",li:"li",strong:"strong"},i(),a.components);return t(d,{children:[r(c,{title:"Helpers/CoveHelper/Date/parseDate"}),`
`,r(e.h1,{children:"parseDate"}),`
`,t(e.p,{children:["A ",r(e.a,{href:"./?path=/docs/helpers-covehelper-covehelper-class--docs",children:"CoveHelper"})," function that uses the d3-time-format library to parse a given date string according to a specified format."]}),`
`,r(e.p,{children:" "}),`
`,r(e.h2,{children:"Syntax"}),`
`,r(e.pre,{children:r(e.code,{className:"language-js",children:`CoveHelper.Date.parseDate(format, dateString)
`})}),`
`,r(e.h2,{children:"Parameters"}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:[r(e.code,{children:"format"}),": String representing the format of the input date string.",`
`,t(e.ul,{children:[`
`,t(e.li,{children:["If not provided, it defaults to ",r(e.strong,{children:"%Y-%m-%d"}),", which represents the year, month, and day of the date in a numeric format, separated by hyphens."]}),`
`]}),`
`]}),`
`,t(e.li,{children:[r(e.code,{children:"dateString"}),": Date string to be parsed."]}),`
`]}),`
`,r("br",{}),`
`,t(e.p,{children:[r(e.strong,{children:"Returns:"})," The function returns a Date object representing the parsed date string. If the parsing fails, it returns the current date."]}),`
`,r(e.p,{children:" "}),`
`,r(e.h2,{children:"Example"}),`
`,r(e.pre,{children:r(e.code,{className:"language-jsx",children:`const dateString = '01-Jan-2022';

const parsedDate = CoveHelper.Date.parseDate('%d-%b-%Y', dateString);

console.log(parsedDate); // Sat Jan 01 2022 00:00:00 GMT+0000 (Coordinated Universal Time)
`})})]})}}const l=()=>{throw new Error("Docs-only story")};l.parameters={docsOnly:!0};const n={title:"Helpers/CoveHelper/Date/parseDate",tags:["stories-mdx"],includeStories:["__page"]};n.parameters=n.parameters||{};n.parameters.docs={...n.parameters.docs||{},page:p};const j=["__page"];export{j as __namedExportsOrder,l as __page,n as default};
//# sourceMappingURL=parseDate.stories-9067c41f.js.map
