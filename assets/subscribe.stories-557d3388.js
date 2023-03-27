import{M as l}from"./index-a5c7af6f.js";import{j as n,a as t,F as a}from"./jsx-runtime-670450c2.js";import{u as s}from"./index-4fb8b842.js";import"./iframe-9bfe7737.js";import"../sb-preview/runtime.mjs";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-6e91e324.js";import"./index-d475d2ea.js";import"./index-c46f0053.js";import"./index-d37d4223.js";import"./index-356e4a49.js";function h(c={}){const{wrapper:i}=Object.assign({},s(),c.components);return i?n(i,{...c,children:n(o,{})}):o();function o(){const e=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",pre:"pre",code:"code",ul:"ul",li:"li",strong:"strong"},s(),c.components);return t(a,{children:[n(l,{title:"Helpers/CoveHelper/Event/subscribe"}),`
`,n(e.h1,{children:"subscribe"}),`
`,t(e.p,{children:["A ",n(e.a,{href:"./?path=/docs/helpers-covehelper-covehelper-class--docs",children:"CoveHelper"}),` function that registers an event listener for a given event name on the document object. When the specified event is triggered,
the listener function will be executed.`]}),`
`,t(e.p,{children:["See the ",n(e.a,{href:"/?path=/docs/helpers-covehelper-event-unsubscribe--docs",children:"unsubscribe"})," function for removing the event listener."]}),`
`,n(e.p,{children:" "}),`
`,n(e.h2,{children:"Syntax"}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`CoveHelper.Event.subscribe(eventName, listener);
`})}),`
`,n(e.h2,{children:"Parameters"}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:[n(e.code,{children:"eventName"}),": String representing the name of the event to listen for."]}),`
`,t(e.li,{children:[n(e.code,{children:"listener"}),": Function to be executed when the specified event is triggered."]}),`
`]}),`
`,n("br",{}),`
`,t(e.p,{children:[n(e.strong,{children:"Returns:"})," The result of the ",n(e.code,{children:"addEventListener"})," method call."]}),`
`,n(e.p,{children:" "}),`
`,n(e.h2,{children:"Example"}),`
`,t(e.p,{children:["In this example, the ",n(e.code,{children:"handleClick"})," function is registered as an event listener for the click event on a button element using the ",n(e.code,{children:"subscribe"})," function."]}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`function handleClick(event) {
  console.log('Button clicked!', event.target);
}

const button = document.querySelector('button');
subscribe('click', handleClick);
`})})]})}}const d=()=>{throw new Error("Docs-only story")};d.parameters={docsOnly:!0};const r={title:"Helpers/CoveHelper/Event/subscribe",tags:["stories-mdx"],includeStories:["__page"]};r.parameters=r.parameters||{};r.parameters.docs={...r.parameters.docs||{},page:h};const M=["__page"];export{M as __namedExportsOrder,d as __page,r as default};
//# sourceMappingURL=subscribe.stories-557d3388.js.map
