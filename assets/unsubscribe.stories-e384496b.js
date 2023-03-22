import{M as l}from"./index-cbaed915.js";import{j as n,a as t,F as a}from"./jsx-runtime-670450c2.js";import{u as c}from"./index-4fb8b842.js";import"./iframe-2f398da2.js";import"../sb-preview/runtime.mjs";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-6e91e324.js";import"./index-d475d2ea.js";import"./index-96c5f47c.js";import"./index-d37d4223.js";import"./index-53833bae.js";import"./index-356e4a49.js";function h(o={}){const{wrapper:i}=Object.assign({},c(),o.components);return i?n(i,{...o,children:n(s,{})}):s();function s(){const e=Object.assign({h1:"h1",p:"p",a:"a",code:"code",h2:"h2",pre:"pre",strong:"strong",ul:"ul",li:"li",h3:"h3"},c(),o.components);return t(a,{children:[n(l,{title:"Helpers/CoveHelper/Event/unsubscribe"}),`
`,n(e.h1,{children:"unsubscribe"}),`
`,t(e.p,{children:[`This function removes an event listener for a given event name from the document object. The listener function to be removed should be
the same as the one added previously using the `,n(e.a,{href:"/?path=/docs/helpers-covehelper-event-subscribe--docs",children:"subscribe"})," function."]}),`
`,t(e.p,{children:["The function returns the result of the ",n(e.code,{children:"removeEventListener"})," method call."]}),`
`,n(e.p,{children:" "}),`
`,n(e.h2,{children:"Syntax"}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`CoveHelper.Event.unsubscribe(eventName, listener);
`})}),`
`,n(e.p,{children:n(e.strong,{children:"Parameters"})}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:[n(e.code,{children:"eventName"}),": A string representing the name of the event to remove the listener from."]}),`
`,t(e.li,{children:[n(e.code,{children:"listener"}),": A function to be removed from the event listener list."]}),`
`]}),`
`,n(e.p,{children:" "}),`
`,n(e.h3,{children:"Example"}),`
`,t(e.p,{children:["In this example, the ",n(e.code,{children:"handleClick"})," function is registered as an event listener for the ",n(e.code,{children:"click"}),` event
on a button element using the `,n(e.code,{children:"subscribe"})," function. The same function is later removed as a listener using the ",n(e.code,{children:"unsubscribe"})," function."]}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`function handleClick(event) {
  console.log('Button clicked!', event.target);
}

const button = document.querySelector('button');
subscribe('click', handleClick);

// Later, to remove the listener:
unsubscribe('click', handleClick);
`})})]})}}const d=()=>{throw new Error("Docs-only story")};d.parameters={docsOnly:!0};const r={title:"Helpers/CoveHelper/Event/unsubscribe",tags:["stories-mdx"],includeStories:["__page"]};r.parameters=r.parameters||{};r.parameters.docs={...r.parameters.docs||{},page:h};const E=["__page"];export{E as __namedExportsOrder,d as __page,r as default};
//# sourceMappingURL=unsubscribe.stories-e384496b.js.map
