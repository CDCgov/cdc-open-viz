import{M as m,C as h,S as g,A as u}from"./index-a5c7af6f.js";import{I as r,i as f}from"./Icon-84bbcad3.js";import{L as b}from"./Label-a6b7661b.js";import{j as e,a as s,F as y}from"./jsx-runtime-670450c2.js";import{u as p}from"./index-4fb8b842.js";import"./iframe-9bfe7737.js";import"../sb-preview/runtime.mjs";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-6e91e324.js";import"./index-d475d2ea.js";import"./index-c46f0053.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./index-4d501b15.js";import"./Tooltip-2e67733b.js";const d=({...n})=>e(r,{...n});function x(n={}){const{wrapper:c}=Object.assign({},p(),n.components);return c?e(c,{...n,children:e(l,{})}):l();function l(){const o=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",div:"div"},p(),n.components);return s(y,{children:[e(m,{title:"Components/UI/Icon",component:r}),`
`,`
`,e(o.h1,{children:"Icon Component"}),`
`,e(o.p,{children:"The Icon component allows you to reference, and insert, a pre-defined svg image anywhere in your code. A full list of available icons can be found below."}),`
`,e(h,{sourceState:"shown",withSource:"open",children:e(g,{name:"Example",args:{display:"mapFolded",size:120,color:"#60a4d5",style:{display:"block",marginLeft:"auto",marginRight:"auto"},base:!0},children:d.bind({})})}),`
`,e(u,{story:"Example"}),`
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
`,e("div",{className:"cove-grid cove-grid--gap--3",children:Object.entries(f).map(([a])=>s(o.div,{className:"icon-grid cove-grid__col--4 cove-grid__col--md-3 cove-grid__col--lg-2 mb-1",children:[e(o.div,{className:"icon-demo",children:e(r,{display:a,base:!0})}),e(b,{upperCase:!1,children:a})]},a))}),`
`,e("style",{children:`
  @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
  .icon-grid {
    font-family: 'Inter', sans-serif;
  }

  .icon-demo {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 12px;
    background: #fff;
    border: 1px solid #e5e7eb;
    overflow: hidden;
    width: 100%;
    aspect-ratio: 1/1;
    color: #43556f;
  }

  .icon-demo svg {
    width: 55px;
    max-height: 40px;
    flex: 1 1 auto;
  }

  .icon-grid .cove-label {
    display: block;
    text-align: center;
    margin-top: 1rem;
    color: rgb(100, 116, 139);
    font-family: sans-serif;
    font-size: 14px;
    cursor: text;
    user-select: text;
  }
`})]})}}const i=d.bind({});i.storyName="Example";i.args={display:"mapFolded",size:120,color:"#60a4d5",style:{display:"block",marginLeft:"auto",marginRight:"auto"},base:!0};i.parameters={storySource:{source:`({ ...args
}) => <Icon {...args} />`}};const t={title:"Components/UI/Icon",component:r,tags:["stories-mdx"],includeStories:["example"]};t.parameters=t.parameters||{};t.parameters.docs={...t.parameters.docs||{},page:x};const T=["Template","example"];export{d as Template,T as __namedExportsOrder,t as default,i as example};
//# sourceMappingURL=Icon.stories-a6b95f60.js.map
