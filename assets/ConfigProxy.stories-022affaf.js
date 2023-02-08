import{M as p,C as h,S as g,A as m}from"./index-676c21af.js";import{u as f}from"./configStore-d2c2b356.js";import{C as a}from"./ConfigProxy-adf6c554.js";import{j as e,a as o,F as u}from"./jsx-runtime-670450c2.js";import{u as c}from"./index-9ec211f2.js";import"./preload-helper-41c905a7.js";import"./chunk-GWAJ4KRU-d69fdc61.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-c4724429.js";import"./index-d475d2ea.js";import"./memoizerific-a8c4a000.js";import"./index-a253c635.js";import"./chunk-XHUUYXNA-19dd1a76.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-3EFM6HRY-4c51b38f.js";import"./_getTag-6acf5a83.js";import"./_baseIsEqual-0821e666.js";import"./index-8796c665.js";import"./index-356e4a49.js";import"./middleware-8046ed8c.js";import"./index-4d501b15.js";import"./globalStore-3225bb68.js";const d=({...t})=>{const i=Object.assign({div:"div",h2:"h2",p:"p",br:"br",strong:"strong"},c()),{config:r}=f();return e(a,{...t,children:o(i.div,{className:"example-wrapper",children:[e(i.h2,{children:r.title}),e(i.p,{children:r.description}),e(i.br,{}),e(i.strong,{children:"Theme:"})," ",r.theme]})})};function x(t={}){const{wrapper:i}=Object.assign({},c(),t.components);return i?e(i,{...t,children:e(r,{})}):r();function r(){const n=Object.assign({h1:"h1",p:"p",h2:"h2",ol:"ol",li:"li",code:"code",em:"em",h3:"h3",pre:"pre"},c(),t.components);return o(u,{children:[e(p,{title:"Components/HOC/ConfigProxy",component:a}),`
`,e(n.h1,{children:"ConfigProxy Component"}),`
`,e(n.p,{children:"The ConfigProxy acts as a configuration settings and data proxy for children COVE components."}),`
`,e(h,{sourceState:"hidden",children:e(g,{name:"Example",args:{configObj:{theme:"blue",title:"Example Title",description:"This is an example of config settings being pulled in to the configStore, and being provided to the children"}},children:d.bind({})})}),`
`,e(m,{story:"Example"}),`
`,e("br",{}),`
`,e("br",{}),`
`,e(n.h2,{children:"Detailed Usage"}),`
`,e(n.p,{children:"The flow of the ConfigProxy process performs the following steps:"}),`
`,o(n.ol,{children:[`
`,o(n.li,{children:["The ConfigProxy is provided several configuration settings: ",e(n.code,{children:"configObj"}),", ",e(n.code,{children:"configUrl"}),", ",e(n.code,{children:"defaults"}),", ",e(n.code,{children:"runtime"})," ",e("br",{})," ",e(n.em,{children:"(see table above for specifics on each)"})]}),`
`,e(n.li,{children:"Using the provided sources, the supplied configuration settings are then procedurally resolved into a consolidated, uniform format."}),`
`,o(n.li,{children:["The final generated configuration is then sent up to the ",e(n.code,{children:"configStore"})," and stored as ",e(n.code,{children:"config"}),"."]}),`
`,o(n.li,{children:["Once the ",e(n.code,{children:"config"})," has been populated, a flag is triggered which allows all content between the ",e(n.code,{children:"<ConfigProxy/>"})," tags (its children) to be rendered. This ensures that any required configuration data is available when content is rendered."]}),`
`,o(n.li,{children:["The ",e(n.code,{children:"config"})," settings in the ",e(n.code,{children:"configStore"})," are then consumed by COVE visualizations or subcomponents, and render their expected displays."]}),`
`]}),`
`,e("br",{}),`
`,e(n.h3,{children:"Example"}),`
`,o(n.p,{children:["Using the following JSON configuration can be assigned to ConfigProxy's ",e(n.code,{children:"configObj"})," property value:"]}),`
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
`,o(n.p,{children:["The ",e(n.code,{children:"config"})," value of the ",e(n.code,{children:"configStore"})," can then be accessed, and used to reference the config options that were previously defined in the JSON."]}),`
`,e(n.pre,{children:e(n.code,{className:"language-jsx",children:`const { config } = useConfigStore()
return (
  <ConfigProxy configObj={...exampleJson}>
    <div className="example-wrapper">
      <h2>{config.title}</h2>
      <p>{config.description}</p>
      <br/>
      <strong>Theme:</strong> {config.theme}
    </div>
  </ConfigProxy>
)
`})})]})}}const l=d.bind({});l.storyName="Example";l.args={configObj:{theme:"blue",title:"Example Title",description:"This is an example of config settings being pulled in to the configStore, and being provided to the children"}};l.parameters={storySource:{source:`({ ...args
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
}`}};const s={title:"Components/HOC/ConfigProxy",component:a,tags:["stories-mdx"],includeStories:["example"]};s.parameters=s.parameters||{};s.parameters.docs={...s.parameters.docs||{},page:x};const L=["Template","example"];export{d as Template,L as __namedExportsOrder,s as default,l as example};
//# sourceMappingURL=ConfigProxy.stories-022affaf.js.map
