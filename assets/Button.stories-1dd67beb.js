import{M as x,C as s,S as a,A as w}from"./index-a5c7af6f.js";import{r as T}from"./index-f1f749bf.js";import{B as t}from"./Button-f99151a1.js";import{j as e,a as r,F as u}from"./jsx-runtime-670450c2.js";import{u as g}from"./index-4fb8b842.js";import"./iframe-9bfe7737.js";import"../sb-preview/runtime.mjs";import"./index-6e91e324.js";import"./index-d475d2ea.js";import"./index-c46f0053.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./index-4d501b15.js";import"./LoadSpin-71c660ed.js";const d=({...o})=>e(t,{...o}),y=({...o})=>{const[i,l]=T.useState(!1),n=()=>(l(!0),setTimeout(()=>{l(!1)},1e3),()=>{});return e(t,{disabled:i,onClick:()=>n(),...o})},b=({...o})=>r(u,{children:[e(t,{children:"Default"}),e(t,{className:"cove-button--success",children:"Success"}),e(t,{className:"cove-button--warn",children:"Warning"}),e(t,{className:"cove-button--muted",children:"Muted"})]}),S=({...o})=>e(t,{style:{padding:"14px 8px",fontSize:"12px",minWidth:"unset",borderTopLeftRadius:"20px",borderBottomRightRadius:"10px"},children:"Custom CSS Styles"}),f=({...o})=>r(u,{children:[e(t,{hoverStyle:{backgroundColor:"yellow",color:"blue"},children:"String Values"}),e(t,{style:{maxWidth:"unset",padding:"1rem",backgroundColor:"red",color:"black"},hoverStyle:{padding:"1rem 3rem",backgroundColor:"purple",color:"white"},children:"Array Values"})]});function L(o={}){const{wrapper:i}=Object.assign({},g(),o.components);return i?e(i,{...o,children:e(l,{})}):l();function l(){const n=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",em:"em",code:"code",h3:"h3"},g(),o.components);return r(u,{children:[e(x,{title:"Components/Element/Button",component:t}),`
`,e(n.h1,{children:"Button Component"}),`
`,e("p",{children:`Use the Button component to provide users with a method to interface with a major component, or trigger certain
actions.`}),`
`,e(s,{sourceState:"shown",withSource:"open",children:e(a,{name:"Example",args:{children:"Button Text",fluid:!1,disabled:!1,flexCenter:!1},children:d.bind({})})}),`
`,e(w,{story:"Example"}),`
`,e("br",{}),`
`,e("br",{}),`
`,e(n.h2,{children:"Loader Displays"}),`
`,e(n.p,{children:"The Button component can also serve as a dynamic display for a variety of interactive event states:"}),`
`,r(n.ul,{children:[`
`,e(n.li,{children:"Loading a file"}),`
`,e(n.li,{children:'After clicking "save"'}),`
`,e(n.li,{children:"Awaiting any asynchronous operation(s) to complete"}),`
`]}),`
`,r(n.p,{children:["This display can be toggled on/off by passing a ",e(n.em,{children:"boolean"})," value to the ",e(n.code,{children:"disabled"})," property."]}),`
`,e(s,{children:e(a,{name:"Loader",args:{role:"loader",loadingText:"Saving your changes...",children:"Click To Save"},children:y.bind({})})}),`
`,e("br",{}),`
`,e(n.h2,{children:"Styling Options"}),`
`,e("br",{}),`
`,e(n.h3,{children:"Classes"}),`
`,e(n.p,{children:"The Button component has several, basic color classes that can be applied out of the box."}),`
`,e(s,{sourceState:"hidden",children:e(a,{name:"Classes",children:b.bind({})})}),`
`,e("br",{}),`
`,e(n.h3,{children:"Fluid (Fullwidth)"}),`
`,r(n.p,{children:["The Button component can be made fullwidth inside it's containing parent, or a page by adding the ",e(n.code,{children:"fluid"})," property."]}),`
`,e(s,{sourceState:"hidden",children:e(a,{name:"Fluid",args:{fluid:!0,children:"Fluid Button"},children:d.bind({})})}),`
`,e("br",{}),`
`,e(n.h3,{children:"Custom Styles"}),`
`,e(n.p,{children:"Button component styles can be overwritten, just like any other element."}),`
`,e(s,{sourceState:"hidden",children:e(a,{name:"Custom Styles",children:S.bind({})})}),`
`,e("br",{}),`
`,e(n.h3,{children:"Custom Hover Styles"}),`
`,r(n.p,{children:["You can also add custom hover styles to the button. The ",e(n.code,{children:"hoverStyle"})," property will accept an object with style definitions. These will overwrite any styles defined previously through the ",e(n.code,{children:"style"})," property when the element is hovered."]}),`
`,e(s,{sourceState:"hidden",children:e(a,{name:"Custom Hover Styles",children:f.bind({})})})]})}}const m=d.bind({});m.storyName="Example";m.args={children:"Button Text",fluid:!1,disabled:!1,flexCenter:!1};m.parameters={storySource:{source:`({ ...args
}) => <Button {...args} />`}};const h=y.bind({});h.storyName="Loader";h.args={role:"loader",loadingText:"Saving your changes...",children:"Click To Save"};h.parameters={storySource:{source:`({ ...args
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const loadingHandler = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => {};
  };

  return <Button disabled={isLoading} onClick={() => loadingHandler()} {...args} />;
}`}};const C=b.bind({});C.storyName="Classes";C.parameters={storySource:{source:`({ ...args
}) => <>
    <Button>Default</Button>
    <Button className="cove-button--success">Success</Button>
    <Button className="cove-button--warn">Warning</Button>
    <Button className="cove-button--muted">Muted</Button>
  </>`}};const p=d.bind({});p.storyName="Fluid";p.args={fluid:!0,children:"Fluid Button"};p.parameters={storySource:{source:`({ ...args
}) => <Button {...args} />`}};const v=S.bind({});v.storyName="Custom Styles";v.parameters={storySource:{source:`({ ...args
}) => <Button style={{
  padding: "14px 8px",
  fontSize: "12px",
  minWidth: "unset",
  borderTopLeftRadius: "20px",
  borderBottomRightRadius: "10px"
}}>
    Custom CSS Styles
  </Button>`}};const B=f.bind({});B.storyName="Custom Hover Styles";B.parameters={storySource:{source:`({ ...args
}) => <>
    <Button hoverStyle={{
    backgroundColor: "yellow",
    color: "blue"
  }}>
      String Values
    </Button>
    <Button style={{
    maxWidth: "unset",
    padding: "1rem",
    backgroundColor: "red",
    color: "black"
  }} hoverStyle={{
    padding: "1rem 3rem",
    backgroundColor: "purple",
    color: "white"
  }}>
      Array Values
    </Button>
  </>`}};const c={title:"Components/Element/Button",component:t,tags:["stories-mdx"],includeStories:["example","loader","classes","fluid","customStyles","customHoverStyles"]};c.parameters=c.parameters||{};c.parameters.docs={...c.parameters.docs||{},page:L};const X=["Template","Loader","Classes","CustomClasses","CustomHover","example","loader","classes","fluid","customStyles","customHoverStyles"];export{b as Classes,S as CustomClasses,f as CustomHover,y as Loader,d as Template,X as __namedExportsOrder,C as classes,B as customHoverStyles,v as customStyles,c as default,m as example,p as fluid,h as loader};
//# sourceMappingURL=Button.stories-1dd67beb.js.map
