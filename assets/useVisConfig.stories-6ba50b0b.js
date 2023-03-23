import{M as d,C as h,S as p,A as g}from"./index-c4e09ba2.js";import{j as e,a as i,F as m}from"./jsx-runtime-670450c2.js";import{u as s}from"./index-4fb8b842.js";import"./iframe-4ea23a2e.js";import"../sb-preview/runtime.mjs";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-6e91e324.js";import"./index-d475d2ea.js";import"./index-c46f0053.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const l=({...o})=>{const t=Object.assign({div:"div"},s());return e(t.div,{className:"example-wrapper"})};function f(o={}){const{wrapper:t}=Object.assign({},s(),o.components);return t?e(t,{...o,children:e(c,{})}):c();function c(){const n=Object.assign({h1:"h1",p:"p",h2:"h2",ol:"ol",li:"li",code:"code",em:"em",h3:"h3",pre:"pre"},s(),o.components);return i(m,{children:[e(d,{title:"Hooks/Store/useVisConfig"}),`
`,e(n.h1,{children:"useVisConfig Hook"}),`
`,e(n.p,{children:"The useVisConfig hook acts as a configuration settings and data proxy for children COVE components."}),`
`,e(h,{sourceState:"hidden",children:e(p,{name:"Example",args:{configObj:{theme:"blue",title:"Example Title",description:"This is an example of config settings being pulled in to the configStore, and being provided to the children"}},children:l.bind({})})}),`
`,e(g,{story:"Example"}),`
`,e("br",{}),`
`,e("br",{}),`
`,e(n.h2,{children:"Detailed Usage"}),`
`,e(n.p,{children:"The flow of the useVisConfig hook process performs the following steps:"}),`
`,i(n.ol,{children:[`
`,i(n.li,{children:["The useVisConfig hook retrieves several configuration settings: ",e(n.code,{children:"configObj"}),", ",e(n.code,{children:"configUrl"}),", ",e(n.code,{children:"defaults"}),", ",e(n.code,{children:"runtime"})," ",e("br",{})," ",e(n.em,{children:"(see table above for specifics on each)"})]}),`
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
`})})]})}}const a=l.bind({});a.storyName="Example";a.args={configObj:{theme:"blue",title:"Example Title",description:"This is an example of config settings being pulled in to the configStore, and being provided to the children"}};a.parameters={storySource:{source:`({ ...args
}) => {
  return <div className="example-wrapper">
      </div>;
}`}};const r={title:"Hooks/Store/useVisConfig",tags:["stories-mdx"],includeStories:["example"]};r.parameters=r.parameters||{};r.parameters.docs={...r.parameters.docs||{},page:f};const N=["Template","example"];export{l as Template,N as __namedExportsOrder,r as default,a as example};
//# sourceMappingURL=useVisConfig.stories-6ba50b0b.js.map
