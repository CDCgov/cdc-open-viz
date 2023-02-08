import{M as c,C as l,S as d,A as h}from"./index-676c21af.js";import{E as a}from"./ErrorBoundary-3848b076.js";import{a as r,j as u,F as x}from"./jsx-runtime-68f49b4e.js";import{u as p}from"./index-9ec211f2.js";import"./preload-helper-41c905a7.js";import"./chunk-GWAJ4KRU-d69fdc61.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-c4724429.js";import"./index-d475d2ea.js";import"./memoizerific-a8c4a000.js";import"./index-a253c635.js";import"./chunk-XHUUYXNA-19dd1a76.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-3EFM6HRY-4c51b38f.js";import"./_getTag-6acf5a83.js";import"./_baseIsEqual-0821e666.js";import"./index-8796c665.js";import"./index-356e4a49.js";import"./index-4d501b15.js";const i=({...o})=>r(a,{...o,children:r(()=>{throw new Error},{})});function E(o={}){const{wrapper:t}=Object.assign({},p(),o.components);return t?r(t,{...o,children:r(m,{})}):m();function m(){const s=Object.assign({h1:"h1",p:"p"},p(),o.components);return u(x,{children:[r(c,{title:"Components/HOC/ErrorBoundary",component:a}),`
`,r(s.h1,{children:"ErrorBoundary Component"}),`
`,r(s.p,{children:"Provides a generic error boundary container for its children. Used to contain any errored component renders. This helps locate where the error originates, and prevent other component rengers from failing as a result."}),`
`,r(l,{sourceState:"shown",withSource:"open",children:r(d,{name:"Example",args:{component:"Example Child"},argTypes:{component:{control:"text"}},children:i.bind({})})}),`
`,r(h,{story:"Example"})]})}}const n=i.bind({});n.storyName="Example";n.argTypes={component:{control:"text"}};n.args={component:"Example Child"};n.parameters={storySource:{source:`({ ...args
}) => {
  const ExampleChild = () => {
    throw new Error();
  };

  return <ErrorBoundary {...args}>
    <ExampleChild />
  </ErrorBoundary>;
}`}};const e={title:"Components/HOC/ErrorBoundary",component:a,tags:["stories-mdx"],includeStories:["example"]};e.parameters=e.parameters||{};e.parameters.docs={...e.parameters.docs||{},page:E};const P=["Template","example"];export{i as Template,P as __namedExportsOrder,e as default,n as example};
//# sourceMappingURL=ErrorBoundary.stories-ed34ddbc.js.map
