import{M as c}from"./index-a3f1b2cb.js";import{j as n,a as t,F as d}from"./jsx-runtime-670450c2.js";import{u as s}from"./index-4fb8b842.js";import"./iframe-c940d419.js";import"../sb-preview/runtime.mjs";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-6e91e324.js";import"./index-d475d2ea.js";import"./index-c46f0053.js";import"./index-d37d4223.js";import"./index-356e4a49.js";function l(r={}){const{wrapper:i}=Object.assign({},s(),r.components);return i?n(i,{...r,children:n(a,{})}):a();function a(){const e=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",strong:"strong",ul:"ul",li:"li",h3:"h3"},s(),r.components);return t(d,{children:[n(c,{title:"Helpers/CoveHelper/Event/publish"}),`
`,n(e.h1,{children:"publish"}),`
`,n(e.p,{children:`This function dispatches a custom event with the specified event name and optional data payload. The event can be listened to by any event listener
registered to the document object, regardless of where the event was dispatched from.`}),`
`,t(e.p,{children:["The function returns the result of the ",n(e.code,{children:"dispatchEvent"})," method call."]}),`
`,n(e.p,{children:" "}),`
`,n(e.h2,{children:"Syntax"}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`CoveHelper.Event.publish(eventName, data);
`})}),`
`,n(e.p,{children:n(e.strong,{children:"Parameters"})}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:[n(e.code,{children:"eventName"}),": A string representing the name of the custom event to dispatch."]}),`
`,t(e.li,{children:[n(e.code,{children:"data"}),": Optional data payload to be included with the event. The data can be accessed in the event listener using the detail property of the event object."]}),`
`]}),`
`,n(e.p,{children:" "}),`
`,n(e.h3,{children:"Example"}),`
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

`})})]})}}const h=()=>{throw new Error("Docs-only story")};h.parameters={docsOnly:!0};const o={title:"Helpers/CoveHelper/Event/publish",tags:["stories-mdx"],includeStories:["__page"]};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:l};const w=["__page"];export{w as __namedExportsOrder,h as __page,o as default};
//# sourceMappingURL=publish.stories-247bfacc.js.map
