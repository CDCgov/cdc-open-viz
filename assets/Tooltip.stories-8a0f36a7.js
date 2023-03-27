import{M as h,C as u,S as f,A as g}from"./index-a5c7af6f.js";import{T as o,h as T}from"./Tooltip-2e67733b.js";import{I as d}from"./Icon-84bbcad3.js";import{j as t,a as i,F as y}from"./jsx-runtime-670450c2.js";import{u as p}from"./index-4fb8b842.js";import"./iframe-9bfe7737.js";import"../sb-preview/runtime.mjs";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-6e91e324.js";import"./index-d475d2ea.js";import"./index-c46f0053.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./index-4d501b15.js";const m=({target:n,content:r,...a})=>{const e=Object.assign({div:"div",center:"center"},p());return o||l("Tooltip",!1),o.Content||l("Tooltip.Content",!0),o.Target||l("Tooltip.Target",!0),t(e.div,{className:"m-4",children:t(e.center,{children:i(o,{...a,children:[t(o.Target,{children:n}),t(o.Content,{children:T(r)})]})})})};function b(n={}){const{wrapper:r}=Object.assign({},p(),n.components);return r?t(r,{...n,children:t(a,{})}):a();function a(){const e=Object.assign({h1:"h1",p:"p",code:"code",strong:"strong",a:"a"},p(),n.components);return i(y,{children:[t(h,{title:"Components/UI/Tooltip",component:o,argTypes:{target:{table:{disable:!0}},content:{table:{disable:!0}}}}),`
`,`
`,t(e.h1,{children:"Tooltip Component"}),`
`,i(e.p,{children:["The ",t(e.code,{children:"<Tooltip>"})," component is used to display a tooltip when hovering over a specified element. It should normally only be used for one-off tooltip displays."]}),`
`,i(e.p,{children:["When available, the inline ",t(e.code,{children:"tooltip"})," property for a component should ",t(e.strong,{children:"always"})," be used instead. Most ",t(e.a,{href:"./?path=/docs/components-input-text--docs",children:"input components"})," provide ",t(e.code,{children:"tooltip"})," (and tooltip related) properties, which automatically handle tooltip setup for you."]}),`
`,t(u,{sourceState:"shown",withSource:"open",children:t(f,{name:"Default",args:{place:"top",trigger:"click",float:!1,shadow:!0,border:!1,target:t(d,{display:"questionCircle"}),content:`Hello world! I'm a tooltip with a <a href="#">link</a>.`},children:m.bind({})})}),`
`,t(g,{story:"Default"})]})}}function l(n,r){throw new Error("Expected "+(r?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}const c=m.bind({});c.storyName="Default";c.args={place:"top",trigger:"click",float:!1,shadow:!0,border:!1,target:t(d,{display:"questionCircle"}),content:`Hello world! I'm a tooltip with a <a href="#">link</a>.`};c.parameters={storySource:{source:`({
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
  </div>`}};const s={title:"Components/UI/Tooltip",component:o,argTypes:{target:{table:{disable:!0}},content:{table:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory"]};s.parameters=s.parameters||{};s.parameters.docs={...s.parameters.docs||{},page:b};const q=["TooltipStory","defaultStory"];export{m as TooltipStory,q as __namedExportsOrder,s as default,c as defaultStory};
//# sourceMappingURL=Tooltip.stories-8a0f36a7.js.map
