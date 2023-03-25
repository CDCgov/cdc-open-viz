import"./index-f1f749bf.js";import{M as g,C as _,S as n}from"./index-2f5af72e.js";import{a as d,j as e,F as m}from"./jsx-runtime-670450c2.js";import{u as s}from"./index-4fb8b842.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-82ea261c.js";import"../sb-preview/runtime.mjs";import"./index-6e91e324.js";import"./index-d475d2ea.js";import"./index-c46f0053.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const a=({...r})=>{const c=Object.assign({div:"div"},s());return d(c.div,{className:"cove-grid cove-grid--gap--2",children:[e(c.div,{className:"cove-grid__col--4 cove-grid__col--md-3 cove-grid__col--lg-2 cove-grid--demo-square"}),e(c.div,{className:"cove-grid__col--4 cove-grid__col--md-3 cove-grid__col--lg-2 cove-grid--demo-square"}),e(c.div,{className:"cove-grid__col--4 cove-grid__col--md-3 cove-grid__col--lg-2 cove-grid--demo-square"}),e(c.div,{className:"cove-grid__col--4 cove-grid__col--md-3 cove-grid__col--lg-2 cove-grid--demo-square"}),e(c.div,{className:"cove-grid__col--4 cove-grid__col--md-3 cove-grid__col--lg-2 cove-grid--demo-square"}),e(c.div,{className:"cove-grid__col--4 cove-grid__col--md-3 cove-grid__col--lg-2 cove-grid--demo-square"}),e(c.div,{className:"cove-grid__col--4 cove-grid__col--md-3 cove-grid__col--lg-2 cove-grid--demo-square"}),e(c.div,{className:"cove-grid__col--4 cove-grid__col--md-3 cove-grid__col--lg-2 cove-grid--demo-square"}),e(c.div,{className:"cove-grid__col--4 cove-grid__col--md-3 cove-grid__col--lg-2 cove-grid--demo-square"}),e(c.div,{className:"cove-grid__col--4 cove-grid__col--md-3 cove-grid__col--lg-2 cove-grid--demo-square"}),e(c.div,{className:"cove-grid__col--4 cove-grid__col--md-3 cove-grid__col--lg-2 cove-grid--demo-square"}),e(c.div,{className:"cove-grid__col--4 cove-grid__col--md-3 cove-grid__col--lg-2 cove-grid--demo-square"})]})};function t(r={}){const{wrapper:c}=Object.assign({},s(),r.components);return c?e(c,{...r,children:e(l,{})}):l();function l(){const o=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre"},s(),r.components);return d(m,{children:[e(g,{title:"CSS Systems/Grid"}),`
`,e("style",{children:`
  .cove-grid--demo-square {
    background-color: rgb(58 86 155 / 25%);
    width: 100%;
    aspect-ratio: 1/1;
  }
`}),`
`,e(o.h1,{children:"Grid System"}),`
`,e(o.p,{children:"COVE uses it's own customized, responsive CSS grid system for displaying grid-based layouts."}),`
`,d(o.p,{children:["Unlike most CSS grid systems, this uses a pure ",e(o.code,{children:"grid"})," solution vs ",e(o.code,{children:"flex"})]}),`
`,e(_,{sourceState:"shown",withSource:"open",children:e(n,{name:"Grid",children:a.bind({})})}),`
`,d(o.p,{children:["The grid system allows users to create a CSS grid using the ",e(o.code,{children:".cove-grid"})," class name, as well as several other class names to modify the grid:"]}),`
`,d(o.p,{children:["To create different grid gaps, use the ",e(o.code,{children:".cove-grid--gap--#"})," class, where ",e(o.code,{children:"#"})," is replaced by the number of cove-grid-gap-offsets to use. This sets grid gaps for both columns and rows simultaneously."]}),`
`,e(o.pre,{children:e(o.code,{className:"language-html",children:`<div class="cove-grid cove-grid--gap--2">
  <div class="cove-grid__col--6">Column 1</div>
  <div class="cove-grid__col--6">Column 2</div>
</div>
`})}),`
`,d(o.p,{children:["To modify the number of columns, append ",e(o.code,{children:"--#"})," followed by the desired number of columns to the ",e(o.code,{children:".cove-grid__col"})," class name."]}),`
`,e(o.pre,{children:e(o.code,{className:"language-html",children:`<div class="cove-grid">
  <div class="cove-grid__col--3">Column 1</div>
  <div class="cove-grid__col--9">Column 2</div>
</div>
`})}),`
`,d(o.p,{children:["To modify the number of rows, append ",e(o.code,{children:"--#"})," followed by the desired number of rows to the ",e(o.code,{children:".cove-grid__row"})," class name."]}),`
`,e(o.pre,{children:e(o.code,{className:"language-html",children:`<div class="cove-grid">
<div class="cove-grid__row--3">Row 1</div>
<div class="cove-grid__row--9">Row 2</div>
</div>
`})}),`
`,d(o.p,{children:["To create a column offset, append ",e(o.code,{children:"--#"})," followed by the number of columns you want to offset to the ",e(o.code,{children:".cove-grid__col-offset"})," class name."]}),`
`,e(o.pre,{children:e(o.code,{className:"language-html",children:`<div class="cove-grid">
  <div class="cove-grid__col--4">Column 1</div>
  <div class="cove-grid__col-offset--2">Column 2</div>
  <div class="cove-grid__col--6">Column 3</div>
</div>
`})}),`
`,d(o.p,{children:["To create a row offset, append ",e(o.code,{children:"--#"})," followed by the number of rows you want to offset to the ",e(o.code,{children:".cove-grid__row-offset"})," class name."]}),`
`,e(o.pre,{children:e(o.code,{className:"language-html",children:`<div class="cove-grid">
  <div class="cove-grid__row--4">Row 1</div>
  <div class="cove-grid__row-offset--2">Row 2</div>
  <div class="cove-grid__row--6">Row 3</div>
</div>
`})})]})}}const v=a.bind({});v.storyName="Grid";v.parameters={storySource:{source:`({ ...args
}) => <div className="cove-grid cove-grid--gap--2">
  <div className="cove-grid__col--4 cove-grid__col--md-3 cove-grid__col--lg-2 cove-grid--demo-square" />
  <div className="cove-grid__col--4 cove-grid__col--md-3 cove-grid__col--lg-2 cove-grid--demo-square" />
  <div className="cove-grid__col--4 cove-grid__col--md-3 cove-grid__col--lg-2 cove-grid--demo-square" />
  <div className="cove-grid__col--4 cove-grid__col--md-3 cove-grid__col--lg-2 cove-grid--demo-square" />
  <div className="cove-grid__col--4 cove-grid__col--md-3 cove-grid__col--lg-2 cove-grid--demo-square" />
  <div className="cove-grid__col--4 cove-grid__col--md-3 cove-grid__col--lg-2 cove-grid--demo-square" />
  <div className="cove-grid__col--4 cove-grid__col--md-3 cove-grid__col--lg-2 cove-grid--demo-square" />
  <div className="cove-grid__col--4 cove-grid__col--md-3 cove-grid__col--lg-2 cove-grid--demo-square" />
  <div className="cove-grid__col--4 cove-grid__col--md-3 cove-grid__col--lg-2 cove-grid--demo-square" />
  <div className="cove-grid__col--4 cove-grid__col--md-3 cove-grid__col--lg-2 cove-grid--demo-square" />
  <div className="cove-grid__col--4 cove-grid__col--md-3 cove-grid__col--lg-2 cove-grid--demo-square" />
  <div className="cove-grid__col--4 cove-grid__col--md-3 cove-grid__col--lg-2 cove-grid--demo-square" />
</div>`}};const i={title:"CSS Systems/Grid",tags:["stories-mdx"],includeStories:["grid"]};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:t};const G=["Grid","grid"];export{a as Grid,G as __namedExportsOrder,i as default,v as grid};
//# sourceMappingURL=CSS.Grid.stories-0d24c79d.js.map
