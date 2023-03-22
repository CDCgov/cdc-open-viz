import{M as l,C as h,S as p,A as g}from"./index-f24d5b78.js";import{v as m}from"./visConfigSlice-bf7622bc.js";import{j as e,a as i,F as f}from"./jsx-runtime-670450c2.js";import{u as c}from"./index-4fb8b842.js";import"./iframe-0f1521e3.js";import"../sb-preview/runtime.mjs";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-6e91e324.js";import"./index-d475d2ea.js";import"./index-96c5f47c.js";import"./index-d37d4223.js";import"./index-53833bae.js";import"./index-356e4a49.js";const d=({...r})=>{const o=Object.assign({div:"div",h2:"h2",p:"p",br:"br",strong:"strong"},c()),{ConfigProxy:t}=o;t||x("ConfigProxy",!0);const{config:n}=m();return e(t,{...r,children:i(o.div,{className:"example-wrapper",children:[e(o.h2,{children:n.title}),e(o.p,{children:n.description}),e(o.br,{}),e(o.strong,{children:"Theme:"})," ",n.theme]})})};function u(r={}){const{wrapper:o}=Object.assign({},c(),r.components);return o?e(o,{...r,children:e(t,{})}):t();function t(){const n=Object.assign({h1:"h1",p:"p",h2:"h2",ol:"ol",li:"li",code:"code",em:"em",h3:"h3",pre:"pre"},c(),r.components);return i(f,{children:[e(l,{title:"Components/HOC/ConfigProxy"}),`
`,e(n.h1,{children:"ConfigProxy Component"}),`
`,e(n.p,{children:"The ConfigProxy acts as a configuration settings and data proxy for children COVE components."}),`
`,e(h,{sourceState:"hidden",children:e(p,{name:"Example",args:{configObj:{theme:"blue",title:"Example Title",description:"This is an example of config settings being pulled in to the configStore, and being provided to the children"}},children:d.bind({})})}),`
`,e(g,{story:"Example"}),`
`,e("br",{}),`
`,e("br",{}),`
`,e(n.h2,{children:"Detailed Usage"}),`
`,e(n.p,{children:"The flow of the ConfigProxy process performs the following steps:"}),`
`,i(n.ol,{children:[`
`,i(n.li,{children:["The ConfigProxy is provided several configuration settings: ",e(n.code,{children:"configObj"}),", ",e(n.code,{children:"configUrl"}),", ",e(n.code,{children:"defaults"}),", ",e(n.code,{children:"runtime"})," ",e("br",{})," ",e(n.em,{children:"(see table above for specifics on each)"})]}),`
`,e(n.li,{children:"Using the provided sources, the supplied configuration settings are then procedurally resolved into a consolidated, uniform format."}),`
`,i(n.li,{children:["The final generated configuration is then sent up to the ",e(n.code,{children:"configStore"})," and stored as ",e(n.code,{children:"config"}),"."]}),`
`,i(n.li,{children:["Once the ",e(n.code,{children:"config"})," has been populated, a flag is triggered which allows all content between the ",e(n.code,{children:"<ConfigProxy/>"})," tags (its children) to be rendered. This ensures that any required configuration data is available when content is rendered."]}),`
`,i(n.li,{children:["The ",e(n.code,{children:"config"})," settings in the ",e(n.code,{children:"configStore"})," are then consumed by COVE visualizations or subcomponents, and render their expected displays."]}),`
`]}),`
`,e("br",{}),`
`,e(n.h3,{children:"Example"}),`
`,i(n.p,{children:["Using the following JSON configuration can be assigned to ConfigProxy's ",e(n.code,{children:"configObj"})," property value:"]}),`
`,e(n.pre,{children:e(n.code,{className:"language-jsx",children:`const exampleJson = {
  theme: 'blue',
  title: 'Example Title',
  description: 'This is an example of config settings being pulled in to the configStore, and being provided to the children'
}

...

<ConfigProxy configObj={...exampleJson}>
  ...
</ConfigProxy>
`})}),`
`,i(n.p,{children:["The ",e(n.code,{children:"config"})," value of the ",e(n.code,{children:"configStore"})," can then be accessed, and used to reference the config options that were previously defined in the JSON."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-jsx",children:`return (
    <div className="example-wrapper">
      <h2>{config.title}</h2>
      <p>{config.description}</p>
      <br/>
      <strong>Theme:</strong> {config.theme}
    </div>
)
`})})]})}}function x(r,o){throw new Error("Expected "+(o?"component":"object")+" `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}const a=d.bind({});a.storyName="Example";a.args={configObj:{theme:"blue",title:"Example Title",description:"This is an example of config settings being pulled in to the configStore, and being provided to the children"}};a.parameters={storySource:{source:`({ ...args
}) => {
  const {
    config
  } = useConfigStore();
  return <ConfigProxy {...args}>
      <div className="example-wrapper">
        <h2>{config.title}</h2>
        <p>{config.description}</p>
        <br />
        <strong>Theme:</strong> {config.theme}
      </div>
    </ConfigProxy>;
}`}};const s={title:"Components/HOC/ConfigProxy",tags:["stories-mdx"],includeStories:["example"]};s.parameters=s.parameters||{};s.parameters.docs={...s.parameters.docs||{},page:u};const D=["Template","example"];export{d as Template,D as __namedExportsOrder,s as default,a as example};
//# sourceMappingURL=ConfigProxy.stories-eddb1472.js.map
