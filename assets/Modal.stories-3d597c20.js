import{M as j,S as p,A as z,C as u}from"./index-f24d5b78.js";import{u as g}from"./store-0ad8816f.js";import{B as d}from"./Button-f99151a1.js";import{a as t,j as e,F as s}from"./jsx-runtime-670450c2.js";import{r as V}from"./index-f1f749bf.js";import{p as f}from"./index-4d501b15.js";import{I as U}from"./Icon-e6436e69.js";import{O as G}from"./Overlay-8b705bae.js";import{u as D}from"./index-4fb8b842.js";import"./iframe-0f1521e3.js";import"../sb-preview/runtime.mjs";import"./index-6e91e324.js";import"./index-d475d2ea.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-d37d4223.js";import"./index-53833bae.js";import"./index-356e4a49.js";import"./visConfigSlice-bf7622bc.js";import"./LoadSpin-71c660ed.js";const N=()=>null,H=()=>null,S=()=>null,o=({fontTheme:n="dark",headerBgColor:l="#fff",showDividerTop:h=!0,showDividerBottom:r=!0,showClose:i=!0,children:m})=>{var x,B,k;let{overlay:q,toggleOverlay:L}=g();const b=V.Children.toArray(m),c=b.find(a=>(a==null?void 0:a.type)===N),y=b.find(a=>(a==null?void 0:a.type)===H),C=b.find(a=>(a==null?void 0:a.type)===S),T=a=>a?null:"none";return t("div",{className:`cove-modal cove-modal__theme--${n}`,children:[(i||c)&&t("div",{className:"cove-modal__header",style:{backgroundColor:l,boxShadow:T(c&&h),padding:c?null:"0",minHeight:c?null:"unset"},children:[c&&((x=c==null?void 0:c.props)==null?void 0:x.children),i&&e("button",{className:"cove-modal--close",onClick:a=>{if(q)return L(!1);a.preventDefault()},children:e(U,{display:"close"})})]}),e("div",{className:"cove-modal__content",children:y&&((B=y==null?void 0:y.props)==null?void 0:B.children)}),C&&e("div",{className:"cove-modal__footer",style:{boxShadow:T(r),paddingTop:r?"1rem":null},children:(k=C==null?void 0:C.props)==null?void 0:k.children})]})};o.Header=N;o.Header.displayName="Modal.Header";o.Content=H;o.Content.displayName="Modal.Content";o.Footer=S;o.Footer.displayName="Modal.Footer";o.propTypes={fontTheme:f.oneOf(["dark","light"]),headerBgColor:f.string,showDividerTop:f.bool,showDividerBottom:f.bool,showClose:f.bool};o.__docgenInfo={description:"",methods:[{name:"Header",docblock:null,modifiers:["static"],params:[],returns:null},{name:"Content",docblock:null,modifiers:["static"],params:[],returns:null},{name:"Footer",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"Modal",props:{fontTheme:{defaultValue:{value:"'dark'",computed:!1},type:{name:"enum",value:[{value:"'dark'",computed:!1},{value:"'light'",computed:!1}]},required:!1,description:""},headerBgColor:{defaultValue:{value:"'#fff'",computed:!1},type:{name:"string"},required:!1,description:""},showDividerTop:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:""},showDividerBottom:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:""},showClose:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:""}}};const O=({header:n,content:l,footer:h,...r})=>t(o,{...r,children:[e(o.Header,{children:n}),e(o.Content,{children:l}),e(o.Footer,{children:h})]});function W(n={}){const{wrapper:l}=Object.assign({},D(),n.components);return l?e(l,{...n,children:e(h,{})}):h();function h(){const r=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3"},D(),n.components);return o||v("Modal",!1),o.Content||v("Modal.Content",!0),o.Footer||v("Modal.Footer",!0),o.Header||v("Modal.Header",!0),t(s,{children:[e(j,{title:"Components/UI/Modal",component:o,argTypes:{header:{table:{disable:!0}},content:{table:{disable:!0}},footer:{table:{disable:!0}},fontTheme:{options:["light","dark"],control:{type:"radio"}},headerBgColor:{control:{type:"color"}},showDividerTop:{control:{type:"boolean"}},showDividerBottom:{control:{type:"boolean"}},showClose:{control:{type:"boolean"}}}}),`
`,`
`,e(r.h1,{children:"Modal Component"}),`
`,e(r.p,{children:`Use the modal component to display content intended to be informative, but temporary. The content
displayed is usually interactive, often requiring some type of confirmation - or input - from the user.`}),`
`,e("br",{}),`
`,e(p,{name:"Default",args:{header:e(s,{children:"Default Modal Style"}),content:e(s,{children:"This is a modal that uses the default styles, and does not include any customization options."}),footer:e(d,{onClick:i=>i.preventDefault(),children:"Trigger an Action"}),fontTheme:"dark",headerBgColor:"#fff",showDividerTop:!0,showDividerBottom:!0,showClose:!0},children:O.bind({})}),`
`,e(z,{story:"Default"}),`
`,e(r.h2,{children:"Usage Examples"}),`
`,e(r.p,{children:"Modals can be customized to fix various display requirements, depending on the situation. Below are a few examples highlighting various potential use cases."}),`
`,e(r.h3,{children:"Interaction"}),`
`,e(u,{children:e(p,{name:"Interaction",children:()=>{const i=g(m=>m.openOverlay);return e(s,{children:e(d,{onClick:()=>i(t(o,{fontTheme:"light",headerBgColor:"#824c88",children:[e(o.Header,{children:"Example Modal"}),e(o.Content,{children:e(r.p,{children:"This is a popup modal with general information. This serves as an example of how interaction with the modal is intended to work."})})]})),children:"Trigger Modal Open"})})}})}),`
`,e("br",{}),`
`,e(r.h3,{children:"Background Close Disabled"}),`
`,e(u,{children:e(p,{name:"BgCloseDisabled",children:()=>{const i=g(m=>m.openOverlay);return e(s,{children:e(d,{onClick:()=>i(t(o,{fontTheme:"light",headerBgColor:"#824c88",children:[e(o.Header,{children:"Example Modal"}),e(o.Content,{children:e(r.p,{children:"This is a popup modal with general information. This serves as an example of how interaction with the modal is intended to work."})})]}),!0),children:"Trigger Locked Modal"})})}})}),`
`,e("br",{}),`
`,e(r.h3,{children:"Example #1"}),`
`,e(u,{withSource:"open",children:e(p,{name:"Example #1",children:e(o,{fontTheme:"light",headerBgColor:"#d9006e",children:e(o.Content,{children:e("p",{children:"This is a modal that contains a close button and content, but has no header or footer."})})})})}),`
`,e("br",{}),`
`,e(r.h3,{children:"Example #2"}),`
`,e(u,{withSource:"open",children:e(p,{name:"Example #2",children:t(o,{fontTheme:"light",headerBgColor:"#363955",showDividerBottom:!1,children:[e(o.Header,{children:e(r.p,{children:"General Information Modal"})}),e(o.Content,{children:e("p",{children:`This is a modal with some general information. Anything can go here, to provide details or explain
information further. The modal can contain as much information as needed, in order to provide the proper
context for the content.`})}),e(o.Footer,{children:e("sub",{children:e("em",{children:"Last updated 01/02/34"})})})]})})}),`
`,e("br",{}),`
`,e(r.h3,{children:"Example #3"}),`
`,e(u,{withSource:"open",children:e(p,{name:"Example #3",children:t(o,{fontTheme:"light",headerBgColor:"#d73636",showClose:!1,children:[e(o.Header,{children:e("center",{children:"Warning Modal"})}),e(o.Content,{children:t("center",{children:[e("p",{children:"Making these changes will perform an irreversible action."}),`
`,e("p",{children:"No close button is provided; you are required to make a selection below."})]})}),t(o.Footer,{children:[e("div",{style:{textAlign:"center"},children:e("p",{style:{marginBottom:"1rem",fontSize:"1rem"},children:"Are you sure you want to continue?"})}),t("div",{style:{textAlign:"center"},children:[e(d,{className:"warn",onClick:i=>i.preventDefault(),children:"No, Cancel"}),`
`,e(d,{className:"success",onClick:i=>i.preventDefault(),children:"Yes, Continue"})]})]})]})})}),`
`,e(G,{})]})}}function v(n,l){throw new Error("Expected "+(l?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}const w=O.bind({});w.storyName="Default";w.args={header:e(s,{children:"Default Modal Style"}),content:e(s,{children:"This is a modal that uses the default styles, and does not include any customization options."}),footer:e(d,{onClick:n=>n.preventDefault(),children:"Trigger an Action"}),fontTheme:"dark",headerBgColor:"#fff",showDividerTop:!0,showDividerBottom:!0,showClose:!0};w.parameters={storySource:{source:`({
  header,
  content,
  footer,
  ...args
}) => <Modal {...args}>
    <Modal.Header>
      {header}
    </Modal.Header>
    <Modal.Content>
      {content}
    </Modal.Content>
    <Modal.Footer>
      {footer}
    </Modal.Footer>
  </Modal>`}};const E=()=>{const n=g(l=>l.openOverlay);return e(s,{children:e(d,{onClick:()=>n(t(o,{fontTheme:"light",headerBgColor:"#824c88",children:[e(o.Header,{children:"Example Modal"}),e(o.Content,{children:e("p",{children:"This is a popup modal with general information. This serves as an example of how interaction with the modal is intended to work."})})]})),children:"Trigger Modal Open"})})};E.storyName="Interaction";E.parameters={storySource:{source:`() => {
  const openOverlay = useStore(state => state.openOverlay);
  return <>
        <Button onClick={() => openOverlay(<Modal fontTheme={"light"} headerBgColor={"#824c88"}>
          <Modal.Header>
            Example Modal
          </Modal.Header>
          <Modal.Content>
            <p>This is a popup modal with general information. This serves as an example of how interaction with the
              modal is intended to work.</p>
          </Modal.Content>
        </Modal>)}>
          Trigger Modal Open
        </Button>
      </>;
}`}};const F=()=>{const n=g(l=>l.openOverlay);return e(s,{children:e(d,{onClick:()=>n(t(o,{fontTheme:"light",headerBgColor:"#824c88",children:[e(o.Header,{children:"Example Modal"}),e(o.Content,{children:e("p",{children:"This is a popup modal with general information. This serves as an example of how interaction with the modal is intended to work."})})]}),!0),children:"Trigger Locked Modal"})})};F.storyName="BgCloseDisabled";F.parameters={storySource:{source:`() => {
  const openOverlay = useStore(state => state.openOverlay);
  return <>
        <Button onClick={() => openOverlay(<Modal fontTheme={"light"} headerBgColor={"#824c88"}>
          <Modal.Header>
            Example Modal
          </Modal.Header>
          <Modal.Content>
            <p>This is a popup modal with general information. This serves as an example of how interaction with the
              modal is intended to work.</p>
          </Modal.Content>
        </Modal>, true)}>
          Trigger Locked Modal
        </Button>
      </>;
}`}};const A=()=>e(o,{fontTheme:"light",headerBgColor:"#d9006e",children:e(o.Content,{children:e("p",{children:"This is a modal that contains a close button and content, but has no header or footer."})})});A.storyName="Example #1";A.parameters={storySource:{source:'<Modal fontTheme={"light"} headerBgColor={"#d9006e"}><Modal.Content><p>{"This is a modal that contains a close button and content, but has no header or footer."}</p></Modal.Content></Modal>'}};const _=()=>t(o,{fontTheme:"light",headerBgColor:"#363955",showDividerBottom:!1,children:[e(o.Header,{children:e("p",{children:"General Information Modal"})}),e(o.Content,{children:e("p",{children:`This is a modal with some general information. Anything can go here, to provide details or explain
information further. The modal can contain as much information as needed, in order to provide the proper
context for the content.`})}),e(o.Footer,{children:e("sub",{children:e("em",{children:"Last updated 01/02/34"})})})]});_.storyName="Example #2";_.parameters={storySource:{source:'<Modal fontTheme={"light"} headerBgColor={"#363955"} showDividerBottom={false}><Modal.Header><p>{"General Information Modal"}</p></Modal.Header><Modal.Content><p>{"This is a modal with some general information. Anything can go here, to provide details or explain\\ninformation further. The modal can contain as much information as needed, in order to provide the proper\\ncontext for the content."}</p></Modal.Content><Modal.Footer><sub><em>{"Last updated 01/02/34"}</em></sub></Modal.Footer></Modal>'}};const I=()=>t(o,{fontTheme:"light",headerBgColor:"#d73636",showClose:!1,children:[e(o.Header,{children:e("center",{children:"Warning Modal"})}),e(o.Content,{children:t("center",{children:[e("p",{children:"Making these changes will perform an irreversible action."}),`
`,e("p",{children:"No close button is provided; you are required to make a selection below."})]})}),t(o.Footer,{children:[e("div",{style:{textAlign:"center"},children:e("p",{style:{marginBottom:"1rem",fontSize:"1rem"},children:"Are you sure you want to continue?"})}),t("div",{style:{textAlign:"center"},children:[e(d,{className:"warn",onClick:n=>n.preventDefault(),children:"No, Cancel"}),`
`,e(d,{className:"success",onClick:n=>n.preventDefault(),children:"Yes, Continue"})]})]})]});I.storyName="Example #3";I.parameters={storySource:{source:`<Modal fontTheme={"light"} headerBgColor={"#d73636"} showClose={false}><Modal.Header><center>{"Warning Modal"}</center></Modal.Header><Modal.Content><center><p>{"Making these changes will perform an irreversible action."}</p>{"\\n"}<p>{"No close button is provided; you are required to make a selection below."}</p></center></Modal.Content><Modal.Footer><div style={{
      textAlign: "center"
    }}><p style={{
        marginBottom: "1rem",
        fontSize: "1rem"
      }}>{"Are you sure you want to continue?"}</p></div><div style={{
      textAlign: "center"
    }}><Button className="warn" onClick={e => e.preventDefault()}>{"No, Cancel"}</Button>{"\\n"}<Button className="success" onClick={e => e.preventDefault()}>{"Yes, Continue"}</Button></div></Modal.Footer></Modal>`}};const M={title:"Components/UI/Modal",component:o,argTypes:{header:{table:{disable:!0}},content:{table:{disable:!0}},footer:{table:{disable:!0}},fontTheme:{options:["light","dark"],control:{type:"radio"}},headerBgColor:{control:{type:"color"}},showDividerTop:{control:{type:"boolean"}},showDividerBottom:{control:{type:"boolean"}},showClose:{control:{type:"boolean"}}},tags:["stories-mdx"],includeStories:["defaultStory","interaction","bgCloseDisabled","example1","example2","example3"]};M.parameters=M.parameters||{};M.parameters.docs={...M.parameters.docs||{},page:W};const he=["Template","defaultStory","interaction","bgCloseDisabled","example1","example2","example3"];export{O as Template,he as __namedExportsOrder,F as bgCloseDisabled,M as default,w as defaultStory,A as example1,_ as example2,I as example3,E as interaction};
//# sourceMappingURL=Modal.stories-3d597c20.js.map
