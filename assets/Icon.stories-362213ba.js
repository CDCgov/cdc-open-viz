import{M as m,C as h,S as u,A as g}from"./index-41cddf45.js";import{I as r,i as f}from"./Icon-ce256261.js";import{L as b}from"./Label-8ac46115.js";import{j as e,a as s,F as y}from"./jsx-runtime-f14b59b8.js";import{u as d}from"./index-093f7bde.js";import"./iframe-1badc4b0.js";import"../sb-preview/runtime.mjs";import"./index-18f6e4ac.js";import"./_commonjsHelpers-53f7dec1.js";import"./index-6820418a.js";import"./index-3e075a63.js";import"./index-8052939a.js";import"./index-87c76d85.js";import"./index-f4cbaf5b.js";import"./index-edb31f89.js";import"./index-780fc102.js";import"./index-4337b338.js";import"./Tooltip-8b5fc730.js";const p=({...n})=>e(r,{...n});function x(n={}){const{wrapper:c}=Object.assign({},d(),n.components);return c?e(c,{...n,children:e(l,{})}):l();function l(){const o=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",div:"div"},d(),n.components);return s(y,{children:[e(m,{title:"Components/UI/Icon",component:r}),"\n","\n",e(o.h1,{children:"Icon Component"}),"\n",e(o.p,{children:"The Icon component allows you to reference, and insert, a pre-defined svg image anywhere in your code. A full list of available icons can be found below."}),"\n",e(h,{sourceState:"shown",withSource:"open",children:e(u,{name:"Example",args:{display:"mapFolded",size:120,color:"#60a4d5",style:{display:"block",marginLeft:"auto",marginRight:"auto"},base:true},children:p.bind({})})}),"\n",e(g,{story:"Example"}),"\n",e("br",{}),"\n",e("br",{}),"\n",e(o.h2,{children:"Display Options"}),"\n",e(o.p,{children:"By default, the Icon component displays the svg inside a styled span which inherits your current font color and size."}),"\n",e(o.pre,{children:e(o.code,{className:"language-html",children:'<span class="cove-icon">\n    <svg ... />\n</span>\n'})}),"\n",s(o.p,{children:["If you prefer to use just the base svg - without the wrapping span - simply add the ",e(o.code,{children:"base"})," property to the component."]}),"\n",e(o.pre,{children:e(o.code,{className:"language-jsx",children:'  <Icon display="iconHash" base />\n'})}),"\n",e("br",{}),"\n",e("br",{}),"\n",e(o.h2,{children:"Available Icons"}),"\n",e("br",{}),"\n",e("div",{className:"cove-grid cove-grid--gap--2",children:Object.entries(f).map(([t])=>e(o.div,{className:"cove-grid__col--4 cove-grid__col--md-3 cove-grid__col--lg-2",children:s(o.div,{className:"icon-demo",children:[e(r,{display:t,base:true}),e(b,{upperCase:false,children:t})]})},t))}),"\n",e("style",{children:`
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
`})]})}}const i=p.bind({});i.storyName="Example";i.args={display:"mapFolded",size:120,color:"#60a4d5",style:{display:"block",marginLeft:"auto",marginRight:"auto"},base:true};i.parameters={storySource:{source:"({ ...args\n}) => <Icon {...args} />"}};const a={title:"Components/UI/Icon",component:r,tags:["stories-mdx"],includeStories:["example"]};a.parameters=a.parameters||{};a.parameters.docs={...a.parameters.docs||{},page:x};const H=["Template","example"];export{p as Template,H as __namedExportsOrder,a as default,i as example};
//# sourceMappingURL=Icon.stories-362213ba.js.map
