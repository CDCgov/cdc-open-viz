import{M as m,S as s,A as r}from"./index-a5c7af6f.js";import{j as e,a as n,F as v}from"./jsx-runtime-670450c2.js";import{u as l}from"./index-4fb8b842.js";import"./iframe-9bfe7737.js";import"../sb-preview/runtime.mjs";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-6e91e324.js";import"./index-d475d2ea.js";import"./index-c46f0053.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const t=({...a})=>{const o=Object.assign({div:"div"},l());return e(o.div,{className:"example-wrapper"})};function y(a={}){const{wrapper:o}=Object.assign({},l(),a.components);return o?e(o,{...a,children:e(f,{})}):f();function f(){const i=Object.assign({h1:"h1",p:"p",strong:"strong",a:"a",code:"code",h2:"h2",pre:"pre",ul:"ul",li:"li",h3:"h3"},l(),a.components);return n(v,{children:[e(m,{title:"Store/Slices/visConfigSlice"}),`
`,`
`,e(i.h1,{children:"visConfigSlice"}),`
`,n(i.p,{children:["The ",e(i.strong,{children:"visConfigSlice"})," of the ",e(i.a,{href:"./?path=/docs/store-cove-store--docs",children:"COVE store"})," contains the state for visualization configurations. This includes the current visualization type, configuration settings, and the data."]}),`
`,n(i.p,{children:["It also provides a set list of functions that can be used to modify a visualization's ",e(i.code,{children:"config"})," state:"]}),`
`,e(i.p,{children:" "}),`
`,e(i.h2,{children:"Structure"}),`
`,n(i.p,{children:["The ",e(i.code,{children:"visConfigSlice"})," structure is as follows:"]}),`
`,e(i.pre,{children:e(i.code,{className:"language-json",children:`{
  "visualizations": {}
}
`})}),`
`,n(i.ul,{children:[`
`,n(i.li,{children:[`
`,n(i.p,{children:[e(i.strong,{children:"visualizations"}),": Depending on the environment, contains either:"]}),`
`,n(i.ul,{children:[`
`,e(i.li,{children:"an individual visualization config"}),`
`,e(i.li,{children:"a dashboard config + list of visualization configs"}),`
`]}),`
`,e(i.p,{children:"Furthermore, the root key name for the config is either:"}),`
`,n(i.ul,{children:[`
`,n(i.li,{children:[e(i.code,{children:'"__default__"'})," if the visualization is a standalone visualization, or a dashboard."]}),`
`,n(i.li,{children:["The visualization's unique identifier (",e(i.code,{children:"visualizationKey"}),"), when nested inside the dashboard's ",e(i.code,{children:'["__default__"]visualizations[visualizationKey]'})," entry"]}),`
`]}),`
`]}),`
`]}),`
`,e(i.p,{children:" "}),`
`,e(i.h2,{children:"Functions"}),`
`,e("br",{}),`
`,e(i.h3,{children:"addVisConfig()"}),`
`,e(i.p,{children:"This function adds a new visualization configuration to the state."}),`
`,e(i.p,{children:e(i.strong,{children:"Syntax"})}),`
`,e(i.pre,{children:e(i.code,{className:"language-js",children:`addVisConfig(key, config)
`})}),`
`,e(i.p,{children:e(i.strong,{children:"Arguments"})}),`
`,e(s,{name:"addVisConfig",argTypes:{key:{description:'A `"string"` that represents the unique identifier of the visualization.',control:!1},config:{description:"An `{object}` that represents the visualization's config data.",control:!1}},children:t.bind({})}),`
`,e(r,{story:"addVisConfig"}),`
`,e(i.p,{children:e(i.strong,{children:"Example"})}),`
`,e(i.pre,{children:e(i.code,{className:"language-js",children:`addVisConfig('chart-1234', { title: 'My Chart', type: 'bar', data: [1, 2, 3, 4] });
`})}),`
`,e(i.p,{children:" "}),`
`,e(i.h3,{children:"updateVisConfig()"}),`
`,e(i.p,{children:"This function updates an existing visualization configuration in the state."}),`
`,e(i.p,{children:e(i.strong,{children:"Syntax"})}),`
`,e(i.pre,{children:e(i.code,{className:"language-js",children:`updateVisConfig(key, config)
`})}),`
`,e(i.p,{children:e(i.strong,{children:"Arguments"})}),`
`,e(s,{name:"updateVisConfig",argTypes:{key:{description:'A `"string"` that represents the unique identifier of the visualization. If key is equal to `__default__`, the function updates the configuration of the dashboard or standalone visualization. Otherwise, it updates the configuration of a visualization that is part of a dashboard.',control:!1},config:{description:"An `{object}` that represents the visualization's config data.",control:!1}},children:t.bind({})}),`
`,e(r,{story:"updateVisConfig"}),`
`,e(i.p,{children:e(i.strong,{children:"Example"})}),`
`,e(i.pre,{children:e(i.code,{className:"language-js",children:`updateVisConfig('chart-1234', { title: 'My Updated Chart' });
`})}),`
`,e(i.p,{children:" "}),`
`,e(i.h3,{children:"updateVisConfigField()"}),`
`,e(i.p,{children:"This function updates a specific field of a visualization configuration in the state."}),`
`,e(i.p,{children:e(i.strong,{children:"Syntax"})}),`
`,e(i.pre,{children:e(i.code,{className:"language-js",children:`updateVisConfigField(key, configKeyArray, setValue, merge = true)
`})}),`
`,e(i.p,{children:e(i.strong,{children:"Arguments"})}),`
`,e(s,{name:"updateVisConfigField",argTypes:{key:{description:'A `"string"` that represents the unique identifier of the visualization. If key is equal to `__default__`, the function updates the configuration of the dashboard or standalone visualization. Otherwise, it updates the configuration of a visualization that is part of a dashboard.',control:!1},configKeyArray:{description:'An `[array]` of strings, or a single `"string"`, that identifies (or traverses to) the key in the config object that you want to update.',control:!1},setValue:{description:"The value that you want to update the key to.",control:!1},merge:{description:"(Optional) A `boolean`; if `true`, updates the field using a deep merge, instead of a simple assignment. This is useful for updating nested objects, or arrays, without overwriting the entire object.<br/><br/>Default: `true`",control:!1}},children:t.bind({})}),`
`,e(r,{story:"updateVisConfigField"}),`
`,e(i.p,{children:e(i.strong,{children:"Example"})}),`
`,e(i.pre,{children:e(i.code,{className:"language-js",children:`updateVisConfigField('chart-1234', ['componentStyle', 'shadow'], false);
`})}),`
`,e(i.p,{children:" "}),`
`,e(i.h3,{children:"removeVisConfig()"}),`
`,e(i.p,{children:"This function removes a visualization configuration from the state."}),`
`,e(i.p,{children:e(i.strong,{children:"Syntax"})}),`
`,e(i.pre,{children:e(i.code,{className:"language-js",children:`removeVisConfig(key)
`})}),`
`,e(i.p,{children:e(i.strong,{children:"Arguments"})}),`
`,e(s,{name:"removeVisConfig",argTypes:{key:{description:'A `"string"` that represents the unique identifier of the visualization.',control:!1}},children:t.bind({})}),`
`,e(r,{story:"removeVisConfig"}),`
`,e(i.p,{children:e(i.strong,{children:"Example"})}),`
`,e(i.pre,{children:e(i.code,{className:"language-js",children:`removeVisConfig('chart-1234');
`})}),`
`,e(i.p,{children:" "}),`
`,e(i.h3,{children:"setMissingRequiredSections()"}),`
`,n(i.p,{children:["This function sets the ",e(i.code,{children:"missingRequiredSections"})," property of a visualization configuration in the state."]}),`
`,e(i.p,{children:e(i.strong,{children:"Syntax"})}),`
`,e(i.pre,{children:e(i.code,{className:"language-js",children:`setMissingRequiredSections(key, value)
`})}),`
`,e(i.p,{children:e(i.strong,{children:"Arguments"})}),`
`,e(s,{name:"setMissingRequiredSections",argTypes:{key:{description:'A `"string"` that represents the unique identifier of the visualization.',control:!1},value:{description:"A `boolean` that indicates whether the configuration is missing a required value or not.",control:!1}},children:t.bind({})}),`
`,e(r,{story:"setMissingRequiredSections"}),`
`,e(i.p,{children:e(i.strong,{children:"Example"})}),`
`,e(i.pre,{children:e(i.code,{className:"language-js",children:`setMissingRequiredSections('chart-1234', true);
`})})]})}}const c=t.bind({});c.storyName="addVisConfig";c.argTypes={key:{description:'A `"string"` that represents the unique identifier of the visualization.',control:!1},config:{description:"An `{object}` that represents the visualization's config data.",control:!1}};c.parameters={storySource:{source:`({ ...args
}) => {
  return <div className="example-wrapper">
    </div>;
}`}};const h=t.bind({});h.storyName="updateVisConfig";h.argTypes={key:{description:'A `"string"` that represents the unique identifier of the visualization. If key is equal to `__default__`, the function updates the configuration of the dashboard or standalone visualization. Otherwise, it updates the configuration of a visualization that is part of a dashboard.',control:!1},config:{description:"An `{object}` that represents the visualization's config data.",control:!1}};h.parameters={storySource:{source:`({ ...args
}) => {
  return <div className="example-wrapper">
    </div>;
}`}};const u=t.bind({});u.storyName="updateVisConfigField";u.argTypes={key:{description:'A `"string"` that represents the unique identifier of the visualization. If key is equal to `__default__`, the function updates the configuration of the dashboard or standalone visualization. Otherwise, it updates the configuration of a visualization that is part of a dashboard.',control:!1},configKeyArray:{description:'An `[array]` of strings, or a single `"string"`, that identifies (or traverses to) the key in the config object that you want to update.',control:!1},setValue:{description:"The value that you want to update the key to.",control:!1},merge:{description:"(Optional) A `boolean`; if `true`, updates the field using a deep merge, instead of a simple assignment. This is useful for updating nested objects, or arrays, without overwriting the entire object.<br/><br/>Default: `true`",control:!1}};u.parameters={storySource:{source:`({ ...args
}) => {
  return <div className="example-wrapper">
    </div>;
}`}};const p=t.bind({});p.storyName="removeVisConfig";p.argTypes={key:{description:'A `"string"` that represents the unique identifier of the visualization.',control:!1}};p.parameters={storySource:{source:`({ ...args
}) => {
  return <div className="example-wrapper">
    </div>;
}`}};const g=t.bind({});g.storyName="setMissingRequiredSections";g.argTypes={key:{description:'A `"string"` that represents the unique identifier of the visualization.',control:!1},value:{description:"A `boolean` that indicates whether the configuration is missing a required value or not.",control:!1}};g.parameters={storySource:{source:`({ ...args
}) => {
  return <div className="example-wrapper">
    </div>;
}`}};const d={title:"Store/Slices/visConfigSlice",tags:["stories-mdx"],includeStories:["addVisConfig","updateVisConfig","updateVisConfigField","removeVisConfig","setMissingRequiredSections"]};d.parameters=d.parameters||{};d.parameters.docs={...d.parameters.docs||{},page:y};const x=["Template","addVisConfig","updateVisConfig","updateVisConfigField","removeVisConfig","setMissingRequiredSections"];export{t as Template,x as __namedExportsOrder,c as addVisConfig,d as default,p as removeVisConfig,g as setMissingRequiredSections,h as updateVisConfig,u as updateVisConfigField};
//# sourceMappingURL=visConfigSlice.stories-7953cae6.js.map
