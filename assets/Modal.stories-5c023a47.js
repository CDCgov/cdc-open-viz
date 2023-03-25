import{M as j,C as h,S as p,A as z}from"./index-a3f1b2cb.js";import{u as v}from"./store-cacab8ef.js";import{B as d}from"./Button-f99151a1.js";import{a as r,j as e,F as V}from"./jsx-runtime-670450c2.js";import{r as U}from"./index-f1f749bf.js";import{p as u}from"./index-4d501b15.js";import{I as G}from"./Icon-e6436e69.js";import{O as W}from"./Overlay-b37bfdb5.js";import{u as D}from"./index-4fb8b842.js";import"./iframe-c940d419.js";import"../sb-preview/runtime.mjs";import"./index-6e91e324.js";import"./index-d475d2ea.js";import"./index-c46f0053.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./LoadSpin-71c660ed.js";const N=()=>null,S=()=>null,H=()=>null,o=({fontTheme:n="dark",headerBgColor:l="#fff",showDividerTop:c=!0,showDividerBottom:t=!0,showClose:i=!0,children:m})=>{var x,B,k;let{overlay:I,toggleOverlay:L}=v();const M=U.Children.toArray(m),s=M.find(a=>(a==null?void 0:a.type)===N),f=M.find(a=>(a==null?void 0:a.type)===S),g=M.find(a=>(a==null?void 0:a.type)===H),w=a=>a?null:"none";return r("div",{className:`cove-modal cove-modal__theme--${n}`,children:[(i||s)&&r("div",{className:"cove-modal__header",style:{backgroundColor:l,boxShadow:w(s&&c),padding:s?null:"0",minHeight:s?null:"unset"},children:[s&&((x=s==null?void 0:s.props)==null?void 0:x.children),i&&e("button",{className:"cove-modal--close",onClick:a=>{if(I)return L(!1);a.preventDefault()},children:e(G,{display:"close"})})]}),e("div",{className:"cove-modal__content",children:f&&((B=f==null?void 0:f.props)==null?void 0:B.children)}),g&&e("div",{className:"cove-modal__footer",style:{boxShadow:w(t),paddingTop:t?"1rem":null},children:(k=g==null?void 0:g.props)==null?void 0:k.children})]})};o.Header=N;o.Header.displayName="Modal.Header";o.Content=S;o.Content.displayName="Modal.Content";o.Footer=H;o.Footer.displayName="Modal.Footer";o.propTypes={fontTheme:u.oneOf(["dark","light"]),headerBgColor:u.string,showDividerTop:u.bool,showDividerBottom:u.bool,showClose:u.bool};o.__docgenInfo={description:"",methods:[{name:"Header",docblock:null,modifiers:["static"],params:[],returns:null},{name:"Content",docblock:null,modifiers:["static"],params:[],returns:null},{name:"Footer",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"Modal",props:{fontTheme:{defaultValue:{value:"'dark'",computed:!1},type:{name:"enum",value:[{value:"'dark'",computed:!1},{value:"'light'",computed:!1}]},required:!1,description:""},headerBgColor:{defaultValue:{value:"'#fff'",computed:!1},type:{name:"string"},required:!1,description:""},showDividerTop:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:""},showDividerBottom:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:""},showClose:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:""}}};const O=({header:n,content:l,footer:c,...t})=>r(o,{...t,children:[e(o.Header,{children:n}),e(o.Content,{children:l}),e(o.Footer,{children:c})]}),E=({header:n,content:l,footer:c,...t})=>{const i=v(m=>m.openOverlay);return e(d,{onClick:()=>i(r(o,{...t,children:[e(o.Header,{children:n}),e(o.Content,{children:l})]})),children:"Trigger Modal Open"})};function X(n={}){const{wrapper:l}=Object.assign({},D(),n.components);return l?e(l,{...n,children:e(c,{})}):c();function c(){const t=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3"},D(),n.components);return o||y("Modal",!1),o.Content||y("Modal.Content",!0),o.Footer||y("Modal.Footer",!0),o.Header||y("Modal.Header",!0),r(V,{children:[e(j,{title:"Components/UI/Modal",component:o,argTypes:{header:{table:{disable:!0}},content:{table:{disable:!0}},footer:{table:{disable:!0}},fontTheme:{options:["light","dark"],control:{type:"radio"}},headerBgColor:{control:{type:"color"}},showDividerTop:{control:{type:"boolean"}},showDividerBottom:{control:{type:"boolean"}},showClose:{control:{type:"boolean"}}}}),`
`,`
`,`
`,e(t.h1,{children:"Modal Component"}),`
`,e(t.p,{children:`Use the modal component to display content intended to be informative, but temporary. The content
displayed is usually interactive, often requiring some type of confirmation - or input - from the user.`}),`
`,e("br",{}),`
`,e(h,{sourceState:"shown",withSource:"open",children:e(p,{name:"Default",args:{header:"Default Modal Style",content:"This is a modal that uses the default styles, and does not include any customization options.",footer:e(d,{onClick:i=>i.preventDefault(),children:"Trigger an Action"}),fontTheme:"dark",headerBgColor:"#fff",showDividerTop:!0,showDividerBottom:!0,showClose:!0},children:O.bind({})})}),`
`,e(z,{story:"Default"}),`
`,e(t.h2,{children:"Usage Examples"}),`
`,e(t.p,{children:"Modals can be customized to fix various display requirements, depending on the situation. Below are a few examples highlighting various potential use cases."}),`
`,e(t.h3,{children:"Interaction"}),`
`,e(h,{children:e(p,{name:"ButtonTemplate",args:{header:"Example Modal",content:"This is a popup modal with general information. This serves as an example of how interaction with the modal is intended to work.",fontTheme:"light",headerBgColor:"#824c88"},children:E.bind({})})}),`
`,e("br",{}),`
`,e(t.h3,{children:"Background Close Disabled"}),`
`,e(h,{children:e(p,{name:"BgCloseDisabled",children:()=>{const i=v(m=>m.openOverlay);return e(d,{onClick:()=>i(r(o,{fontTheme:"light",headerBgColor:"#824c88",children:[e(o.Header,{children:"Example Modal"}),e(o.Content,{children:e(t.p,{children:"This is a popup modal with general information. This serves as an example of how interaction with the modal is intended to work."})})]}),!0),children:"Trigger Locked Modal"})}})}),`
`,e("br",{}),`
`,e(t.h3,{children:"Example #1"}),`
`,e(h,{withSource:"open",children:e(p,{name:"Example #1",children:e(o,{fontTheme:"light",headerBgColor:"#d9006e",children:e(o.Content,{children:e("p",{children:"This is a modal that contains a close button and content, but has no header or footer."})})})})}),`
`,e("br",{}),`
`,e(t.h3,{children:"Example #2"}),`
`,e(h,{withSource:"open",children:e(p,{name:"Example #2",children:r(o,{fontTheme:"light",headerBgColor:"#363955",showDividerBottom:!1,children:[e(o.Header,{children:e(t.p,{children:"General Information Modal"})}),e(o.Content,{children:e("p",{children:`This is a modal with some general information. Anything can go here, to provide details or explain
information further. The modal can contain as much information as needed, in order to provide the proper
context for the content.`})}),e(o.Footer,{children:e("sub",{children:e("em",{children:"Last updated 01/02/34"})})})]})})}),`
`,e("br",{}),`
`,e(t.h3,{children:"Example #3"}),`
`,e(h,{withSource:"open",children:e(p,{name:"Example #3",children:r(o,{fontTheme:"light",headerBgColor:"#d73636",showClose:!1,children:[e(o.Header,{children:e("center",{children:"Warning Modal"})}),e(o.Content,{children:r("center",{children:[e("p",{children:"Making these changes will perform an irreversible action."}),`
`,e("p",{children:"No close button is provided; you are required to make a selection below."})]})}),r(o.Footer,{children:[e("div",{style:{textAlign:"center"},children:e("p",{style:{marginBottom:"1rem",fontSize:"1rem"},children:"Are you sure you want to continue?"})}),r("div",{style:{textAlign:"center"},children:[e(d,{className:"warn",onClick:i=>i.preventDefault(),children:"No, Cancel"}),`
`,e(d,{className:"success",onClick:i=>i.preventDefault(),children:"Yes, Continue"})]})]})]})})}),`
`,e(W,{})]})}}function y(n,l){throw new Error("Expected "+(l?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}const b=O.bind({});b.storyName="Default";b.args={header:"Default Modal Style",content:"This is a modal that uses the default styles, and does not include any customization options.",footer:e(d,{onClick:n=>n.preventDefault(),children:"Trigger an Action"}),fontTheme:"dark",headerBgColor:"#fff",showDividerTop:!0,showDividerBottom:!0,showClose:!0};b.parameters={storySource:{source:`({
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
  </Modal>`}};const T=E.bind({});T.storyName="ButtonTemplate";T.args={header:"Example Modal",content:"This is a popup modal with general information. This serves as an example of how interaction with the modal is intended to work.",fontTheme:"light",headerBgColor:"#824c88"};T.parameters={storySource:{source:`({
  header,
  content,
  footer,
  ...args
}) => {
  const openOverlay = useStore(state => state.openOverlay);
  return <Button onClick={() => openOverlay(<Modal {...args}>
          <Modal.Header>
            {header}
          </Modal.Header>
          <Modal.Content>
            {content}
          </Modal.Content>
        </Modal>)}>
      Trigger Modal Open
    </Button>;
}`}};const F=()=>{const n=v(l=>l.openOverlay);return e(d,{onClick:()=>n(r(o,{fontTheme:"light",headerBgColor:"#824c88",children:[e(o.Header,{children:"Example Modal"}),e(o.Content,{children:e("p",{children:"This is a popup modal with general information. This serves as an example of how interaction with the modal is intended to work."})})]}),!0),children:"Trigger Locked Modal"})};F.storyName="BgCloseDisabled";F.parameters={storySource:{source:`() => {
  const openOverlay = useStore(state => state.openOverlay);
  return <Button onClick={() => openOverlay(<Modal fontTheme={"light"} headerBgColor={"#824c88"}>
              <Modal.Header>
                Example Modal
              </Modal.Header>
              <Modal.Content>
                <p>This is a popup modal with general information. This serves as an example of how interaction with the
                  modal is intended to work.</p>
              </Modal.Content>
            </Modal>, true)}>
          Trigger Locked Modal
        </Button>;
}`}};const A=()=>e(o,{fontTheme:"light",headerBgColor:"#d9006e",children:e(o.Content,{children:e("p",{children:"This is a modal that contains a close button and content, but has no header or footer."})})});A.storyName="Example #1";A.parameters={storySource:{source:'<Modal fontTheme={"light"} headerBgColor={"#d9006e"}><Modal.Content><p>{"This is a modal that contains a close button and content, but has no header or footer."}</p></Modal.Content></Modal>'}};const _=()=>r(o,{fontTheme:"light",headerBgColor:"#363955",showDividerBottom:!1,children:[e(o.Header,{children:e("p",{children:"General Information Modal"})}),e(o.Content,{children:e("p",{children:`This is a modal with some general information. Anything can go here, to provide details or explain
information further. The modal can contain as much information as needed, in order to provide the proper
context for the content.`})}),e(o.Footer,{children:e("sub",{children:e("em",{children:"Last updated 01/02/34"})})})]});_.storyName="Example #2";_.parameters={storySource:{source:'<Modal fontTheme={"light"} headerBgColor={"#363955"} showDividerBottom={false}><Modal.Header><p>{"General Information Modal"}</p></Modal.Header><Modal.Content><p>{"This is a modal with some general information. Anything can go here, to provide details or explain\\ninformation further. The modal can contain as much information as needed, in order to provide the proper\\ncontext for the content."}</p></Modal.Content><Modal.Footer><sub><em>{"Last updated 01/02/34"}</em></sub></Modal.Footer></Modal>'}};const q=()=>r(o,{fontTheme:"light",headerBgColor:"#d73636",showClose:!1,children:[e(o.Header,{children:e("center",{children:"Warning Modal"})}),e(o.Content,{children:r("center",{children:[e("p",{children:"Making these changes will perform an irreversible action."}),`
`,e("p",{children:"No close button is provided; you are required to make a selection below."})]})}),r(o.Footer,{children:[e("div",{style:{textAlign:"center"},children:e("p",{style:{marginBottom:"1rem",fontSize:"1rem"},children:"Are you sure you want to continue?"})}),r("div",{style:{textAlign:"center"},children:[e(d,{className:"warn",onClick:n=>n.preventDefault(),children:"No, Cancel"}),`
`,e(d,{className:"success",onClick:n=>n.preventDefault(),children:"Yes, Continue"})]})]})]});q.storyName="Example #3";q.parameters={storySource:{source:`<Modal fontTheme={"light"} headerBgColor={"#d73636"} showClose={false}><Modal.Header><center>{"Warning Modal"}</center></Modal.Header><Modal.Content><center><p>{"Making these changes will perform an irreversible action."}</p>{"\\n"}<p>{"No close button is provided; you are required to make a selection below."}</p></center></Modal.Content><Modal.Footer><div style={{
      textAlign: "center"
    }}><p style={{
        marginBottom: "1rem",
        fontSize: "1rem"
      }}>{"Are you sure you want to continue?"}</p></div><div style={{
      textAlign: "center"
    }}><Button className="warn" onClick={e => e.preventDefault()}>{"No, Cancel"}</Button>{"\\n"}<Button className="success" onClick={e => e.preventDefault()}>{"Yes, Continue"}</Button></div></Modal.Footer></Modal>`}};const C={title:"Components/UI/Modal",component:o,argTypes:{header:{table:{disable:!0}},content:{table:{disable:!0}},footer:{table:{disable:!0}},fontTheme:{options:["light","dark"],control:{type:"radio"}},headerBgColor:{control:{type:"color"}},showDividerTop:{control:{type:"boolean"}},showDividerBottom:{control:{type:"boolean"}},showClose:{control:{type:"boolean"}}},tags:["stories-mdx"],includeStories:["defaultStory","buttonTemplate","bgCloseDisabled","example1","example2","example3"]};C.parameters=C.parameters||{};C.parameters.docs={...C.parameters.docs||{},page:X};const ce=["Template","ButtonTemplate","defaultStory","buttonTemplate","bgCloseDisabled","example1","example2","example3"];export{E as ButtonTemplate,O as Template,ce as __namedExportsOrder,F as bgCloseDisabled,T as buttonTemplate,C as default,b as defaultStory,A as example1,_ as example2,q as example3};
//# sourceMappingURL=Modal.stories-5c023a47.js.map
