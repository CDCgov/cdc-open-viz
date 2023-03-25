import{M as f,S as i,A as o}from"./index-a3f1b2cb.js";import{j as t,a,F as g}from"./jsx-runtime-670450c2.js";import{u as l}from"./index-4fb8b842.js";import"./iframe-c940d419.js";import"../sb-preview/runtime.mjs";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-6e91e324.js";import"./index-d475d2ea.js";import"./index-c46f0053.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const n=({...r})=>{const s=Object.assign({div:"div"},l());return t(s.div,{className:"example-wrapper"})};function D(r={}){const{wrapper:s}=Object.assign({},l(),r.components);return s?t(s,{...r,children:t(u,{})}):u();function u(){const e=Object.assign({h1:"h1",p:"p",strong:"strong",code:"code",h2:"h2",pre:"pre",ul:"ul",li:"li",h3:"h3"},l(),r.components);return a(g,{children:[t(f,{title:"Store/Slices/dataSlice"}),`
`,`
`,t(e.h1,{children:"dataSlice"}),`
`,a(e.p,{children:["The ",t(e.strong,{children:"dataSlice"})," of the COVE store contains the state for data. This includes visualization data, datasets, filtered data, and formatted data."]}),`
`,a(e.p,{children:["It also provides a set list of functions that can be used to modify the ",t(e.code,{children:"data"})," state:"]}),`
`,t(e.p,{children:" "}),`
`,t(e.h2,{children:"Structure"}),`
`,a(e.p,{children:["The ",t(e.code,{children:"dataSlice"})," structure is as follows:"]}),`
`,t(e.pre,{children:t(e.code,{className:"language-json",children:`{
  "data": [],
  "datasets": [],
  "filteredData": [],
  "formattedData": [],
}
`})}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:[t(e.strong,{children:"data"}),": An array of objects containing the data for the visualization."]}),`
`,a(e.li,{children:[t(e.strong,{children:"datasets"}),": An array of objects containing multiple sets of data."]}),`
`,a(e.li,{children:[t(e.strong,{children:"filteredData"}),": An array of objects containing filtered data for a visualization."]}),`
`,a(e.li,{children:[t(e.strong,{children:"formattedData"}),": An array of the data that has been formatted for use with the visualization."]}),`
`]}),`
`,t(e.p,{children:" "}),`
`,t(e.h2,{children:"Functions"}),`
`,t("br",{}),`
`,t(e.h3,{children:"setData()"}),`
`,a(e.p,{children:["Sets the state's ",t(e.code,{children:"data"})," property to the provided value."]}),`
`,t(e.p,{children:t(e.strong,{children:"Syntax"})}),`
`,t(e.pre,{children:t(e.code,{className:"language-javascript",children:`setData(data)
`})}),`
`,t(e.p,{children:t(e.strong,{children:"Arguments"})}),`
`,t(i,{name:"setData",argTypes:{data:{description:"An `[array]` of `{objects}` containing the data for use with a visualization.",control:!1}},children:n.bind({})}),`
`,t(o,{story:"setData"}),`
`,t(e.p,{children:" "}),`
`,t(e.h3,{children:"setDatasets()"}),`
`,a(e.p,{children:["Sets the state's ",t(e.code,{children:"datasets"})," property to the provided value."]}),`
`,t(e.p,{children:t(e.strong,{children:"Syntax"})}),`
`,t(e.pre,{children:t(e.code,{className:"language-javascript",children:`setDatasets(datasets)
`})}),`
`,t(e.p,{children:t(e.strong,{children:"Arguments"})}),`
`,t(i,{name:"setDatasets",argTypes:{datasets:{description:"An `[array]` of `{objects}` containing multiple sets of data for use with a visualization.",control:!1}},children:n.bind({})}),`
`,t(o,{story:"setDatasets"}),`
`,t(e.p,{children:" "}),`
`,t(e.h3,{children:"setFilteredData()"}),`
`,a(e.p,{children:["Sets the state's ",t(e.code,{children:"filteredData"})," property to the provided value."]}),`
`,t(e.p,{children:t(e.strong,{children:"Syntax"})}),`
`,t(e.pre,{children:t(e.code,{className:"language-javascript",children:`setFilteredData(filteredData)
`})}),`
`,t(e.p,{children:t(e.strong,{children:"Arguments"})}),`
`,t(i,{name:"setFilteredData",argTypes:{filteredData:{description:"An `[array]` of datapoints that have been filtered for use with a visualization.",control:!1}},children:n.bind({})}),`
`,t(o,{story:"setFilteredData"}),`
`,t(e.p,{children:" "}),`
`,t(e.h3,{children:"setFormattedData()"}),`
`,a(e.p,{children:["Sets the state's ",t(e.code,{children:"formattedData"})," property to the provided value."]}),`
`,t(e.p,{children:t(e.strong,{children:"Syntax"})}),`
`,t(e.pre,{children:t(e.code,{className:"language-javascript",children:`setFormattedData(formattedData)
`})}),`
`,t(e.p,{children:t(e.strong,{children:"Arguments"})}),`
`,t(i,{name:"setFormattedData",argTypes:{formattedData:{description:"An `[array]` of datapoints that have been formatted for use with a visualization.",control:!1}},children:n.bind({})}),`
`,t(o,{story:"setFormattedData"})]})}}const c=n.bind({});c.storyName="setData";c.argTypes={data:{description:"An `[array]` of `{objects}` containing the data for use with a visualization.",control:!1}};c.parameters={storySource:{source:`({ ...args
}) => {
  return <div className="example-wrapper">
    </div>;
}`}};const h=n.bind({});h.storyName="setDatasets";h.argTypes={datasets:{description:"An `[array]` of `{objects}` containing multiple sets of data for use with a visualization.",control:!1}};h.parameters={storySource:{source:`({ ...args
}) => {
  return <div className="example-wrapper">
    </div>;
}`}};const p=n.bind({});p.storyName="setFilteredData";p.argTypes={filteredData:{description:"An `[array]` of datapoints that have been filtered for use with a visualization.",control:!1}};p.parameters={storySource:{source:`({ ...args
}) => {
  return <div className="example-wrapper">
    </div>;
}`}};const m=n.bind({});m.storyName="setFormattedData";m.argTypes={formattedData:{description:"An `[array]` of datapoints that have been formatted for use with a visualization.",control:!1}};m.parameters={storySource:{source:`({ ...args
}) => {
  return <div className="example-wrapper">
    </div>;
}`}};const d={title:"Store/Slices/dataSlice",tags:["stories-mdx"],includeStories:["setData","setDatasets","setFilteredData","setFormattedData"]};d.parameters=d.parameters||{};d.parameters.docs={...d.parameters.docs||{},page:D};const M=["Template","setData","setDatasets","setFilteredData","setFormattedData"];export{n as Template,M as __namedExportsOrder,d as default,c as setData,h as setDatasets,p as setFilteredData,m as setFormattedData};
//# sourceMappingURL=dataSlice.stories-6f9a674f.js.map
