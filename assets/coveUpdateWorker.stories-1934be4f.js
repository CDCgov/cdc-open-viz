import{M as d}from"./index-f24d5b78.js";import{j as n,a as r,F as s}from"./jsx-runtime-670450c2.js";import{u as c}from"./index-4fb8b842.js";import"./iframe-0f1521e3.js";import"../sb-preview/runtime.mjs";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-6e91e324.js";import"./index-d475d2ea.js";import"./index-96c5f47c.js";import"./index-d37d4223.js";import"./index-53833bae.js";import"./index-356e4a49.js";function l(t={}){const{wrapper:i}=Object.assign({},c(),t.components);return i?n(i,{...t,children:n(a,{})}):a();function a(){const e=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",code:"code",strong:"strong",pre:"pre"},c(),t.components);return r(s,{children:[n(d,{title:"Helpers/coveUpdateWorker"}),`
`,n(e.h1,{children:"coveUpdateWorker"}),`
`,n(e.p,{children:"The coveUpdateWorker is a config worker used to update COVE config data automatically. It allows for key values to be updated with new values, transferred to new key entries, and/or removed from the config entirely."}),`
`,n(e.h2,{children:"Usage"}),`
`,r(e.ul,{children:[`
`,r(e.li,{children:[`
`,r(e.p,{children:["The update workers can be found in the ",n(e.code,{children:"./packages/core/helpers/update"})," directory. The ",n(e.code,{children:"coveUpdateWorker"})," is the main worker, with the ",n(e.code,{children:"./packages/core/helpers/update/ver/..."})," directory housing semantically versioned update workers (ie, ",n(e.code,{children:"4.23.js"}),", ",n(e.code,{children:"4.3.js"}),", etc)."]}),`
`]}),`
`,r(e.li,{children:[`
`,r(e.p,{children:["Versioned workers can be asyncronously chain-called in the ",n(e.code,{children:"coveUpdateWorker"})," in order to step through multiple version updates for a config object."]}),`
`]}),`
`,r(e.li,{children:[`
`,r(e.p,{children:["Once a worker processes a config object, it tags the processed config with a supplied version number as a ",n(e.code,{children:'validated="4.x.x'})," entry."]}),`
`]}),`
`,r(e.li,{children:[`
`,r(e.p,{children:["If a config object is either unversioned (doesn't have a ",n(e.code,{children:"config.validated"})," entry), or the current ",n(e.code,{children:"validated"})," version is less than the version of the worker, ",n(e.code,{children:"coveUpdateWorker"})," automatically calls the next versioned worker."]}),`
`,n(e.p,{children:n(e.strong,{children:"Example:"})}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`// For example, an update_4_23 worker might change the theme key
// of a config from 'theme-blue' to 'blue', by removing the 'theme-' prefix:

// Config object provided
const genConfig = {
  title: 'My Config',
  theme: 'theme-blue',
  description: 'This is my config',
  //validated: undefined, <-- config does not have a validated value, so an entry will be set by the 4.23 worker
}

update_4_23(genConfig) // <-- 4.23 worker processes the config

// New Config object result
genConfig = {
  title: 'My Config',
  theme: 'blue', //<-- theme key value has been updated
  description: 'This is my config',
  validated: '4.23', //<-- config has been marked validated after being processed by the 4.23 worker
}
`})}),`
`]}),`
`]})]})}}const h=()=>{throw new Error("Docs-only story")};h.parameters={docsOnly:!0};const o={title:"Helpers/coveUpdateWorker",tags:["stories-mdx"],includeStories:["__page"]};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:l};const C=["__page"];export{C as __namedExportsOrder,h as __page,o as default};
//# sourceMappingURL=coveUpdateWorker.stories-1934be4f.js.map
