import{M as h,C as u,S as f,A as g}from"./index-b657acfb.js";import{T as o}from"./Tooltip-e87d4e0c.js";import{I as d}from"./Icon-e6436e69.js";import{h as T}from"./index-e3f86ac2.js";import{j as t,a,F as y}from"./jsx-runtime-670450c2.js";import{u as p}from"./index-4fb8b842.js";import"./iframe-a9b7e9f3.js";import"../sb-preview/runtime.mjs";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-6e91e324.js";import"./index-d475d2ea.js";import"./index-c46f0053.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./index-4d501b15.js";const m=({target:n,content:r,...i})=>{const e=Object.assign({div:"div",center:"center"},p());return o||s("Tooltip",!1),o.Content||s("Tooltip.Content",!0),o.Target||s("Tooltip.Target",!0),t(e.div,{className:"m-4",children:t(e.center,{children:a(o,{...i,children:[t(o.Target,{children:n}),t(o.Content,{children:T(r)})]})})})};function b(n={}){const{wrapper:r}=Object.assign({},p(),n.components);return r?t(r,{...n,children:t(i,{})}):i();function i(){const e=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2"},p(),n.components);return a(y,{children:[t(h,{title:"Components/UI/Tooltip",component:o,argTypes:{target:{table:{disable:!0}},content:{table:{disable:!0}}}}),`
`,`
`,t(e.h1,{children:"Tooltip Component"}),`
`,a(e.p,{children:["The ",t(e.code,{children:"<Tooltip>"})," component is used to display a tooltip when hovering over a specified element. It should normally only be used for one-off tooltip displays."]}),`
`,a(e.p,{children:["The inline ",t(e.code,{children:"tooltip"})," method for components should be used instead, when available. Most ",t(e.a,{href:"./?path=/docs/components-input-text--docs",children:"input components"})," provide ",t(e.code,{children:"tooltip"})," - and tooltip related - properties, which automatically handle tooltip setup for you."]}),`
`,t(e.p,{children:" "}),`
`,t(e.h2,{children:"Trigger Type"}),`
`,t(u,{sourceState:"shown",withSource:"open",children:t(f,{name:"Default",args:{place:"top",trigger:"click",float:!1,shadow:!0,border:!1,target:t(d,{display:"questionCircle"}),content:`Hello world! I'm a tooltip with a <a href="#">link</a>.`},children:m.bind({})})}),`
`,t(g,{story:"Default"})]})}}function s(n,r){throw new Error("Expected "+(r?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}const c=m.bind({});c.storyName="Default";c.args={place:"top",trigger:"click",float:!1,shadow:!0,border:!1,target:t(d,{display:"questionCircle"}),content:`Hello world! I'm a tooltip with a <a href="#">link</a>.`};c.parameters={storySource:{source:`({
  target,
  content,
  ...args
}) => <div className="m-4">
    <center>
      <Tooltip {...args}>
        <Tooltip.Target>
          {target}
        </Tooltip.Target>
        <Tooltip.Content>
          {parse(content)}
        </Tooltip.Content>
      </Tooltip>
    </center>
  </div>`}};const l={title:"Components/UI/Tooltip",component:o,argTypes:{target:{table:{disable:!0}},content:{table:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory"]};l.parameters=l.parameters||{};l.parameters.docs={...l.parameters.docs||{},page:b};const A=["TooltipStory","defaultStory"];export{m as TooltipStory,A as __namedExportsOrder,l as default,c as defaultStory};
//# sourceMappingURL=Tooltip.stories-f87cbe47.js.map
