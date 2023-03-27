import{M as s,C as a,S as p}from"./index-a5c7af6f.js";import{a as i,j as n,F as m}from"./jsx-runtime-670450c2.js";import{u as c}from"./index-4fb8b842.js";import"./iframe-9bfe7737.js";import"../sb-preview/runtime.mjs";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-6e91e324.js";import"./index-d475d2ea.js";import"./index-c46f0053.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const t=({...l})=>{const r=Object.assign({div:"div"},c());return i(r.div,{style:{display:"flex",height:"30vh"},className:"cove-justify-content-center cove-align-items-center",children:[n(r.div,{class:"cove-grid--demo-square mr-4 p-6",children:n(r.div,{class:"cove-grid--demo-square"})}),n(r.div,{class:"cove-grid--demo-square"})]})};function g(l={}){const{wrapper:r}=Object.assign({},c(),l.components);return r?n(r,{...l,children:n(o,{})}):o();function o(){const e=Object.assign({h1:"h1",p:"p",h2:"h2",strong:"strong",ul:"ul",li:"li",code:"code"},c(),l.components);return i(m,{children:[n(s,{title:"CSS Systems/Spacers"}),`
`,n("style",{children:`
  .cove-grid--demo-square {
    background-color: rgb(58 86 155 / 25%);
    width: 150px;
    aspect-ratio: 1/1;
  }
`}),`
`,n(e.h1,{children:"Spacing System"}),`
`,n(e.p,{children:"COVE provides a basic, custom spacing system for quickly applying padding or margins to elements."}),`
`,n(a,{sourceState:"shown",withSource:"open",children:n(p,{name:"Grid",children:t.bind({})})}),`
`,n(e.h2,{children:"Available Classes & Values"}),`
`,n(e.p,{children:"The following classes and position values are available:"}),`
`,n(e.p,{children:n(e.strong,{children:"Padding"})}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[n(e.code,{children:".p-"}),": Padding for all sides of the element."]}),`
`,i(e.li,{children:[n(e.code,{children:".pt-"}),": Padding for the top of the element."]}),`
`,i(e.li,{children:[n(e.code,{children:".pr-"}),": Padding for the right of the element."]}),`
`,i(e.li,{children:[n(e.code,{children:".pb-"}),": Padding for the bottom of the element."]}),`
`,i(e.li,{children:[n(e.code,{children:".pl-"}),": Padding for the left of the element."]}),`
`,i(e.li,{children:[n(e.code,{children:".px-"}),": Padding for the left and right of the element."]}),`
`,i(e.li,{children:[n(e.code,{children:".py-"}),": Padding for the top and bottom of the element."]}),`
`]}),`
`,n("br",{}),`
`,n(e.p,{children:n(e.strong,{children:"Margin"})}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[n(e.code,{children:".m-"}),": Margin for all sides of the element."]}),`
`,i(e.li,{children:[n(e.code,{children:".mt-"}),": Margin for the top of the element."]}),`
`,i(e.li,{children:[n(e.code,{children:".mr-"}),": Margin for the right of the element."]}),`
`,i(e.li,{children:[n(e.code,{children:".mb-"}),": Margin for the bottom of the element."]}),`
`,i(e.li,{children:[n(e.code,{children:".ml-"}),": Margin for the left of the element."]}),`
`,i(e.li,{children:[n(e.code,{children:".mx-"}),": Margin for the left and right of the element."]}),`
`,i(e.li,{children:[n(e.code,{children:".my-"}),": Margin for the top and bottom of the element."]}),`
`]}),`
`,n("br",{}),`
`,n(e.p,{children:n(e.strong,{children:"Size Values"})}),`
`,n(e.p,{children:"The size values are based on 8px increments per 1 unit. The following values are available:"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[`
`,i(e.p,{children:[n(e.code,{children:"auto"}),": auto (margin only)"]}),`
`]}),`
`,i(e.li,{children:[`
`,i(e.p,{children:[n(e.code,{children:"0"}),": 0px"]}),`
`]}),`
`,i(e.li,{children:[`
`,i(e.p,{children:[n(e.code,{children:"1"}),": 8px"]}),`
`]}),`
`,i(e.li,{children:[`
`,i(e.p,{children:[n(e.code,{children:"2"}),": 16px"]}),`
`]}),`
`,i(e.li,{children:[`
`,i(e.p,{children:[n(e.code,{children:"3"}),": 24px"]}),`
`]}),`
`,i(e.li,{children:[`
`,i(e.p,{children:[n(e.code,{children:"4"}),": 32px"]}),`
`]}),`
`,i(e.li,{children:[`
`,i(e.p,{children:[n(e.code,{children:"5"}),": 40px"]}),`
`]}),`
`,i(e.li,{children:[`
`,i(e.p,{children:[n(e.code,{children:"6"}),": 48px"]}),`
`]}),`
`,i(e.li,{children:[`
`,i(e.p,{children:[n(e.code,{children:"7"}),": 56px"]}),`
`]}),`
`,i(e.li,{children:[`
`,i(e.p,{children:[n(e.code,{children:"8"}),": 64px"]}),`
`]}),`
`]})]})}}const h=t.bind({});h.storyName="Grid";h.parameters={storySource:{source:`({ ...args
}) => <div style={{
  display: "flex",
  height: "30vh"
}} className="cove-justify-content-center cove-align-items-center">
  <div class="cove-grid--demo-square mr-4 p-6">
    <div class="cove-grid--demo-square" />
  </div>

  <div class="cove-grid--demo-square" />
</div>`}};const d={title:"CSS Systems/Spacers",tags:["stories-mdx"],includeStories:["grid"]};d.parameters=d.parameters||{};d.parameters.docs={...d.parameters.docs||{},page:g};const w=["Example","grid"];export{t as Example,w as __namedExportsOrder,d as default,h as grid};
//# sourceMappingURL=CSS.Spacers.stories-a7b23b3b.js.map
