import{M as s}from"./index-c4e09ba2.js";import{j as n,a as t,F as c}from"./jsx-runtime-670450c2.js";import{u as i}from"./index-4fb8b842.js";import"./iframe-4ea23a2e.js";import"../sb-preview/runtime.mjs";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-6e91e324.js";import"./index-d475d2ea.js";import"./index-c46f0053.js";import"./index-d37d4223.js";import"./index-356e4a49.js";function l(o={}){const{wrapper:r}=Object.assign({},i(),o.components);return r?n(r,{...o,children:n(d,{})}):d();function d(){const e=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",code:"code",h2:"h2",pre:"pre",strong:"strong",em:"em"},i(),o.components);return t(c,{children:[n(s,{title:"Helpers/validateFipsCodeLength"}),`
`,n(e.h1,{children:"validateFipsCodeLength"}),`
`,n(e.p,{children:"This function is used to validate the format of FIPS codes in a given input data, which can either be an object or an array."}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:[n(e.code,{children:"object"}),": checks for the presence of FIPS codes in a specific column, then adds leading zeros to make the code length equal to 5"]}),`
`,t(e.li,{children:[n(e.code,{children:"array"}),": attempts to identify the column with FIPS codes, then adds leading zeros to the codes to make their length equal to 5"]}),`
`]}),`
`,n(e.p,{children:"The function returns the input data with the updated FIPS codes."}),`
`,n(e.p,{children:" "}),`
`,n(e.h2,{children:"Syntax"}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`validateFipsCodeLength(stateOrData)
`})}),`
`,n(e.p,{children:n(e.strong,{children:"Parameters"})}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:[n(e.code,{children:"stateOrData"}),": ",n(e.em,{children:"(object) (array)"})," containing the data to be validated."]}),`
`]}),`
`,n(e.p,{children:n(e.strong,{children:"Returns"})}),`
`,n(e.p,{children:"The function returns an object or an array, depending on the type of data supplied, with the FIPS codes updated to have a length of 5 digits."}),`
`,n(e.p,{children:" "}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.p,{children:"This function is typically used to ensure that FIPS codes in a data set are in a consistent format with a length of 5 digits, which is required for certain data visualizations and analyses."}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`// Example 1: Validating FIPS codes in an object
const dataObject = {
  general: {
    geoType: 'us-county',
  },
  columns: {
    geo: {
      name: 'FIPS Code'
    }
  },
  data: [
    { 'FIPS Code': '12' },
    { 'FIPS Code': '12001' },
    { 'FIPS Code': '48295' },
    { 'FIPS Code': '53061' },
  ]
};
const validatedObject = validateFipsCodeLength(dataObject);

// Output:
// {
//   general: {
//     geoType: 'us-county',
//   },
//   columns: {
//     geo: {
//       name: 'FIPS Code'
//     }
//   },
//   data: [
//     { 'FIPS Code': '00012' },
//     { 'FIPS Code': '12001' },
//     { 'FIPS Code': '48295' },
//     { 'FIPS Code': '53061' },
//   ]
// }


// Example 2: Validating FIPS codes in an array
const dataArray = [
  { 'County': 'Hillsborough', 'State': 'FL', 'FIPS': '101' },
  { 'County': 'Sarasota', 'State': 'FL', 'FIPS Codes': '12073' },
  { 'County': 'Hidalgo', 'State': 'TX', 'fips codes': '48011' },
  { 'County': 'Adams', 'State': 'WA', 'FIPS Codes': '53001' }
];
const validatedArray = validateFipsCodeLength(dataArray);

// Output:
// [
//   { 'County': 'Hillsborough', 'State': 'FL', 'FIPS': '00101' },
//   { 'County': 'Sarasota', 'State': 'FL', 'FIPS Codes': '12073' },
//   { 'County': 'Hidalgo', 'State': 'TX', 'fips codes': '48011' },
//   { 'County': 'Adams', 'State': 'WA', 'FIPS Codes': '53001' }
// ]
`})})]})}}const h=()=>{throw new Error("Docs-only story")};h.parameters={docsOnly:!0};const a={title:"Helpers/validateFipsCodeLength",tags:["stories-mdx"],includeStories:["__page"]};a.parameters=a.parameters||{};a.parameters.docs={...a.parameters.docs||{},page:l};const b=["__page"];export{b as __namedExportsOrder,h as __page,a as default};
//# sourceMappingURL=validateFipsCodeLength.stories-bfecb420.js.map
