import{M as c}from"./index-41cddf45.js";import{j as n,a as t,F as d}from"./jsx-runtime-f14b59b8.js";import{u as s}from"./index-093f7bde.js";import"./iframe-1badc4b0.js";import"../sb-preview/runtime.mjs";import"./index-18f6e4ac.js";import"./_commonjsHelpers-53f7dec1.js";import"./index-6820418a.js";import"./index-3e075a63.js";import"./index-8052939a.js";import"./index-87c76d85.js";import"./index-f4cbaf5b.js";import"./index-edb31f89.js";function l(r={}){const{wrapper:i}=Object.assign({},s(),r.components);return i?n(i,{...r,children:n(a,{})}):a();function a(){const e=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",strong:"strong",ul:"ul",li:"li",h3:"h3"},s(),r.components);return t(d,{children:[n(c,{title:"Helpers/CoveHelper/Event/publish"}),"\n",n(e.h1,{children:"publish"}),"\n",n(e.p,{children:"This function dispatches a custom event with the specified event name and optional data payload. The event can be listened to by any event listener\nregistered to the document object, regardless of where the event was dispatched from."}),"\n",t(e.p,{children:["The function returns the result of the ",n(e.code,{children:"dispatchEvent"})," method call."]}),"\n",n(e.p,{children:" "}),"\n",n(e.h2,{children:"Syntax"}),"\n",n(e.pre,{children:n(e.code,{className:"language-js",children:"CoveHelper.Event.publish(eventName, data);\n"})}),"\n",n(e.p,{children:n(e.strong,{children:"Parameters"})}),"\n",t(e.ul,{children:["\n",t(e.li,{children:[n(e.code,{children:"eventName"}),": A string representing the name of the custom event to dispatch."]}),"\n",t(e.li,{children:[n(e.code,{children:"data"}),": Optional data payload to be included with the event. The data can be accessed in the event listener using the detail property of the event object."]}),"\n"]}),"\n",n(e.p,{children:" "}),"\n",n(e.h3,{children:"Example"}),"\n",t(e.p,{children:["In this example, a custom event named ",n(e.code,{children:"customEvent"})," is dispatched with a payload ",n(e.code,{children:"{ data: 'example' }"})," from one module."]}),"\n",t(e.p,{children:["The event is listened to by a listener function ",n(e.code,{children:"handleCustomEvent"})," registered using ",n(e.code,{children:"subscribe"})," in another module."]}),"\n",n(e.p,{children:"When the custom event is triggered, the listener function logs the data to the console."}),"\n",n(e.pre,{children:n(e.code,{className:"language-js",children:`// Module A
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

`})})]})}}const h=()=>{throw new Error("Docs-only story")};h.parameters={docsOnly:true};const o={title:"Helpers/CoveHelper/Event/publish",tags:["stories-mdx"],includeStories:["__page"]};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:l};const C=["__page"];export{C as __namedExportsOrder,h as __page,o as default};
//# sourceMappingURL=publish.stories-c843dec7.js.map
