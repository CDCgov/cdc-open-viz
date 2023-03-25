import{M as m,C as h,S as u,A as g}from"./index-2f5af72e.js";import{I as r,i as f}from"./Icon-e6436e69.js";import{L as b}from"./Label-90f045e3.js";import{j as e,a as s,F as y}from"./jsx-runtime-670450c2.js";import{u as d}from"./index-4fb8b842.js";import"./iframe-82ea261c.js";import"../sb-preview/runtime.mjs";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-6e91e324.js";import"./index-d475d2ea.js";import"./index-c46f0053.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./index-4d501b15.js";import"./index-e3f86ac2.js";import"./Tooltip-e87d4e0c.js";const p=({...n})=>e(r,{...n});function x(n={}){const{wrapper:c}=Object.assign({},d(),n.components);return c?e(c,{...n,children:e(l,{})}):l();function l(){const o=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",div:"div"},d(),n.components);return s(y,{children:[e(m,{title:"Components/UI/Icon",component:r}),`
`,`
`,e(o.h1,{children:"Icon Component"}),`
`,e(o.p,{children:"The Icon component allows you to reference, and insert, a pre-defined svg image anywhere in your code. A full list of available icons can be found below."}),`
`,e(h,{sourceState:"shown",withSource:"open",children:e(u,{name:"Example",args:{display:"mapFolded",size:120,color:"#60a4d5",style:{display:"block",marginLeft:"auto",marginRight:"auto"},base:!0},children:p.bind({})})}),`
`,e(g,{story:"Example"}),`
`,e("br",{}),`
`,e("br",{}),`
`,e(o.h2,{children:"Display Options"}),`
`,e(o.p,{children:"By default, the Icon component displays the svg inside a styled span which inherits your current font color and size."}),`
`,e(o.pre,{children:e(o.code,{className:"language-html",children:`<span class="cove-icon">
    <svg ... />
</span>
`})}),`
`,s(o.p,{children:["If you prefer to use just the base svg - without the wrapping span - simply add the ",e(o.code,{children:"base"})," property to the component."]}),`
`,e(o.pre,{children:e(o.code,{className:"language-jsx",children:`  <Icon display="iconHash" base />
`})}),`
`,e("br",{}),`
`,e("br",{}),`
`,e(o.h2,{children:"Available Icons"}),`
`,e("br",{}),`
`,e("div",{className:"cove-grid cove-grid--gap--2",children:Object.entries(f).map(([t])=>e(o.div,{className:"cove-grid__col--4 cove-grid__col--md-3 cove-grid__col--lg-2",children:s(o.div,{className:"icon-demo",children:[e(r,{display:t,base:!0}),e(b,{upperCase:!1,children:t})]})},t))}),`
`,e("style",{children:`
  .icon-demo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    border-radius: 4px;
    background: #fff;
    box-shadow: rgb(0 0 0 / 10%) 0 1px 3px 0;
    border: 1px solid hsla(203, 50%, 30%, 0.2);
    overflow: hidden;
    width: 100%;
    aspect-ratio: 1/1;
    color: #515a72;
  }

  .icon-demo svg {
    width: 30%;
    flex: 1 1 auto;
  }

  .icon-demo .cove-label {
    margin-top: 1rem;
    margin-bottom: 1rem;
    flex: 0 0 0;
    padding: 0.25rem 0.75rem;
    color: #5f72a1;
    font-weight: bold;
    font-family: sans-serif;
    font-size: 12px;
    font-style: italic;
    border-radius: 15px;
    border: 1px solid #d9e6ee;
    user-select: all;
    cursor: pointer;
  }
`})]})}}const i=p.bind({});i.storyName="Example";i.args={display:"mapFolded",size:120,color:"#60a4d5",style:{display:"block",marginLeft:"auto",marginRight:"auto"},base:!0};i.parameters={storySource:{source:`({ ...args
}) => <Icon {...args} />`}};const a={title:"Components/UI/Icon",component:r,tags:["stories-mdx"],includeStories:["example"]};a.parameters=a.parameters||{};a.parameters.docs={...a.parameters.docs||{},page:x};const X=["Template","example"];export{p as Template,X as __namedExportsOrder,a as default,i as example};
//# sourceMappingURL=Icon.stories-fe687846.js.map
