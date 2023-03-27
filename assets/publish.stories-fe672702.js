import{M as c}from"./index-a5c7af6f.js";import{j as n,a as t,F as l}from"./jsx-runtime-670450c2.js";import{u as i}from"./index-4fb8b842.js";import"./iframe-9bfe7737.js";import"../sb-preview/runtime.mjs";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-6e91e324.js";import"./index-d475d2ea.js";import"./index-c46f0053.js";import"./index-d37d4223.js";import"./index-356e4a49.js";function d(r={}){const{wrapper:a}=Object.assign({},i(),r.components);return a?n(a,{...r,children:n(s,{})}):s();function s(){const e=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",pre:"pre",code:"code",ul:"ul",li:"li",em:"em",strong:"strong"},i(),r.components);return t(l,{children:[n(c,{title:"Helpers/CoveHelper/Event/publish"}),`
`,n(e.h1,{children:"publish"}),`
`,t(e.p,{children:["A ",n(e.a,{href:"./?path=/docs/helpers-covehelper-covehelper-class--docs",children:"CoveHelper"}),` function that dispatches a custom event with the specified event name and optional data payload. The event can be listened to by any event listener
registered to the document object, regardless of where the event was dispatched from.`]}),`
`,n(e.p,{children:" "}),`
`,n(e.h2,{children:"Syntax"}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`CoveHelper.Event.publish(eventName, data);
`})}),`
`,n(e.h2,{children:"Parameters"}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:[n(e.code,{children:"eventName"}),": String representing the name of the custom event to dispatch."]}),`
`,t(e.li,{children:[n(e.code,{children:"data"}),": ",n(e.em,{children:"(Optional)"})," Data payload to be included with the event. The data can be accessed in the event listener using the detail property of the event object."]}),`
`]}),`
`,n("br",{}),`
`,t(e.p,{children:[n(e.strong,{children:"Returns:"})," The result of the ",n(e.code,{children:"dispatchEvent"})," method call."]}),`
`,n(e.p,{children:" "}),`
`,n(e.h2,{children:"Example"}),`
`,t(e.p,{children:["In this example, a custom event named ",n(e.code,{children:"customEvent"})," is dispatched with a payload ",n(e.code,{children:"{ data: 'example' }"})," from one module."]}),`
`,t(e.p,{children:["The event is listened to by a listener function ",n(e.code,{children:"handleCustomEvent"})," registered using ",n(e.code,{children:"subscribe"})," in another module."]}),`
`,n(e.p,{children:"When the custom event is triggered, the listener function logs the data to the console."}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`// Module A
function doSomething() {
  // ...
  publish('customEvent', { data: 'example' });
}

// Module B
function handleCustomEvent(event) {
  console.log(event.detail.data);
}

subscribe('customEvent', handleCustomEvent);

// Later, when doSomething is called:
doSomething(); // Logs "example" to the console.

`})})]})}}const h=()=>{throw new Error("Docs-only story")};h.parameters={docsOnly:!0};const o={title:"Helpers/CoveHelper/Event/publish",tags:["stories-mdx"],includeStories:["__page"]};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:d};const j=["__page"];export{j as __namedExportsOrder,h as __page,o as default};
//# sourceMappingURL=publish.stories-fe672702.js.map
