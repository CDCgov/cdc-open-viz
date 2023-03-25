import{M as d,C as h,S as l,A as u}from"./index-b657acfb.js";import{a as m,j as r,F as g}from"./jsx-runtime-670450c2.js";import{R as E}from"./index-f1f749bf.js";import{p as x}from"./index-4d501b15.js";import{u as i}from"./index-4fb8b842.js";import"./iframe-a9b7e9f3.js";import"../sb-preview/runtime.mjs";import"./index-6e91e324.js";import"./index-d475d2ea.js";import"./index-c46f0053.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-d37d4223.js";import"./index-356e4a49.js";class n extends E.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(e){return{hasError:!0}}componentDidCatch(e,t){console.warn(e,t)}render(){return this.state.hasError?this.props.component?m("h1",{children:["Something went wrong with component ",this.props.component,"."]}):r("h1",{children:"Something went wrong."}):this.props.children}}n.propTypes={component:x.string};n.__docgenInfo={description:"",methods:[],displayName:"ErrorBoundary",props:{component:{type:{name:"string"},required:!1,description:"Supply the name of the component that the ErrorBoundary is referencing"}}};const c=({...o})=>r(n,{...o,children:r(()=>{throw new Error},{})});function y(o={}){const{wrapper:e}=Object.assign({},i(),o.components);return e?r(e,{...o,children:r(t,{})}):t();function t(){const p=Object.assign({h1:"h1",p:"p"},i(),o.components);return m(g,{children:[r(d,{title:"Components/HOC/ErrorBoundary",component:n}),`
`,r(p.h1,{children:"ErrorBoundary Component"}),`
`,r(p.p,{children:"Provides a generic error boundary container for its children. Used to contain any errored component renders. This helps locate where the error originates, and prevent other component rengers from failing as a result."}),`
`,r(h,{sourceState:"shown",withSource:"open",children:r(l,{name:"Example",args:{component:"Example Child"},argTypes:{component:{control:"text"}},children:c.bind({})})}),`
`,r(u,{story:"Example"})]})}}const a=c.bind({});a.storyName="Example";a.argTypes={component:{control:"text"}};a.args={component:"Example Child"};a.parameters={storySource:{source:`({ ...args
}) => {
  const ExampleChild = () => {
    throw new Error();
  };

  return <ErrorBoundary {...args}>
    <ExampleChild />
  </ErrorBoundary>;
}`}};const s={title:"Components/HOC/ErrorBoundary",component:n,tags:["stories-mdx"],includeStories:["example"]};s.parameters=s.parameters||{};s.parameters.docs={...s.parameters.docs||{},page:y};const F=["Template","example"];export{c as Template,F as __namedExportsOrder,s as default,a as example};
//# sourceMappingURL=ErrorBoundary.stories-475fb3d1.js.map
