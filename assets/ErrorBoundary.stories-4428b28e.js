import{M as c,C as l,S as d,A as h}from"./index-045bade3.js";import{E as a}from"./ErrorBoundary-d4835eb6.js";import{j as r,a as u,F as x}from"./jsx-runtime-670450c2.js";import{u as p}from"./index-4fb8b842.js";import"./iframe-ad710d4e.js";import"../sb-preview/runtime.mjs";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-6e91e324.js";import"./index-d475d2ea.js";import"./index-96c5f47c.js";import"./index-d37d4223.js";import"./index-53833bae.js";import"./index-356e4a49.js";import"./index-4d501b15.js";const i=({...e})=>r(a,{...e,children:r(()=>{throw new Error},{})});function E(e={}){const{wrapper:t}=Object.assign({},p(),e.components);return t?r(t,{...e,children:r(s,{})}):s();function s(){const m=Object.assign({h1:"h1",p:"p"},p(),e.components);return u(x,{children:[r(c,{title:"Components/HOC/ErrorBoundary",component:a}),`
`,r(m.h1,{children:"ErrorBoundary Component"}),`
`,r(m.p,{children:"Provides a generic error boundary container for its children. Used to contain any errored component renders. This helps locate where the error originates, and prevent other component rengers from failing as a result."}),`
`,r(l,{sourceState:"shown",withSource:"open",children:r(d,{name:"Example",args:{component:"Example Child"},argTypes:{component:{control:"text"}},children:i.bind({})})}),`
`,r(h,{story:"Example"})]})}}const n=i.bind({});n.storyName="Example";n.argTypes={component:{control:"text"}};n.args={component:"Example Child"};n.parameters={storySource:{source:`({ ...args
}) => {
  const ExampleChild = () => {
    throw new Error();
  };

  return <ErrorBoundary {...args}>
    <ExampleChild />
  </ErrorBoundary>;
}`}};const o={title:"Components/HOC/ErrorBoundary",component:a,tags:["stories-mdx"],includeStories:["example"]};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:E};const X=["Template","example"];export{i as Template,X as __namedExportsOrder,o as default,n as example};
//# sourceMappingURL=ErrorBoundary.stories-4428b28e.js.map
