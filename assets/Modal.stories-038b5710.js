import{M as q,S as m,A as I,C as p}from"./index-676c21af.js";import{u as f}from"./globalStore-3225bb68.js";import{B as i}from"./Button-d396fa8c.js";import{j as t,a as e,F as d}from"./jsx-runtime-68f49b4e.js";import{r as L}from"./index-f1f749bf.js";import{p as u}from"./index-4d501b15.js";import{I as j}from"./Icon-36492f7a.js";import{O as z}from"./Overlay-5e2568bd.js";import{u as T}from"./index-9ec211f2.js";import"./preload-helper-41c905a7.js";import"./chunk-GWAJ4KRU-d69fdc61.js";import"./index-c4724429.js";import"./index-d475d2ea.js";import"./memoizerific-a8c4a000.js";import"./index-a253c635.js";import"./chunk-XHUUYXNA-19dd1a76.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-3EFM6HRY-4c51b38f.js";import"./_getTag-6acf5a83.js";import"./_commonjsHelpers-042e6b4d.js";import"./_baseIsEqual-0821e666.js";import"./index-8796c665.js";import"./index-356e4a49.js";import"./middleware-8046ed8c.js";import"./LoadSpin-b0b37777.js";import"./index-96c5f47c.js";const x=()=>null,B=()=>null,k=()=>null,o=({fontTheme:n="dark",headerBgColor:s="#fff",showDividerTop:c=!0,showDividerBottom:r=!0,showClose:l=!0,children:O,override:V=null})=>{let{overlay:A,toggleOverlay:_}=f();const y=L.Children.toArray(O),h=y.find(a=>(a==null?void 0:a.type)===x),M=y.find(a=>(a==null?void 0:a.type)===B),b=y.find(a=>(a==null?void 0:a.type)===k),w=a=>a?null:"none";return t("div",{className:`cove-modal cove-modal__theme--${n}`,children:[(l||h)&&t("div",{className:"cove-modal__header",style:{backgroundColor:s,boxShadow:w(h&&c),padding:h?null:"0",minHeight:h?null:"unset"},children:[h&&h.props.children,l&&e("button",{className:"cove-modal--close",onClick:a=>{if(A)return _(!1);a.preventDefault()},children:e(j,{display:"close"})})]}),e("div",{className:"cove-modal__content",children:M&&M.props.children}),b&&e("div",{className:"cove-modal__footer",style:{boxShadow:w(r),paddingTop:r?"1rem":null},children:b.props.children})]})};o.Header=x;o.Content=B;o.Footer=k;o.propTypes={fontTheme:u.oneOf(["dark","light"]),headerBgColor:u.string,showDividerTop:u.bool,showDividerBottom:u.bool,showClose:u.bool};o.__docgenInfo={description:"",methods:[{name:"Header",docblock:null,modifiers:["static"],params:[],returns:null},{name:"Content",docblock:null,modifiers:["static"],params:[],returns:null},{name:"Footer",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"Modal",props:{fontTheme:{defaultValue:{value:"'dark'",computed:!1},type:{name:"enum",value:[{value:"'dark'",computed:!1},{value:"'light'",computed:!1}]},required:!1,description:""},headerBgColor:{defaultValue:{value:"'#fff'",computed:!1},type:{name:"string"},required:!1,description:""},showDividerTop:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:""},showDividerBottom:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:""},showClose:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:""},override:{defaultValue:{value:"null",computed:!1},required:!1}}};const D=({header:n,content:s,footer:c,...r})=>t(o,{...r,children:[e(o.Header,{children:n}),e(o.Content,{children:s}),e(o.Footer,{children:c})]});function G(n={}){const{wrapper:s}=Object.assign({},T(),n.components);return s?e(s,{...n,children:e(c,{})}):c();function c(){const r=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3"},T(),n.components);return o||g("Modal",!1),o.Content||g("Modal.Content",!0),o.Footer||g("Modal.Footer",!0),o.Header||g("Modal.Header",!0),t(d,{children:[e(q,{title:"Components/UI/Modal",component:o,argTypes:{header:{table:{disable:!0}},content:{table:{disable:!0}},footer:{table:{disable:!0}},fontTheme:{options:["light","dark"],control:{type:"radio"}},headerBgColor:{control:{type:"color"}},showDividerTop:{control:{type:"boolean"}},showDividerBottom:{control:{type:"boolean"}},showClose:{control:{type:"boolean"}}}}),`
`,`
`,e(r.h1,{children:"Modal Component"}),`
`,e(r.p,{children:`Use the modal component to display content intended to be informative, but temporary. The content
displayed is usually interactive, often requiring some type of confirmation - or input - from the user.`}),`
`,e("br",{}),`
`,e(m,{name:"Default",args:{header:e(d,{children:"Default Modal Style"}),content:e(d,{children:"This is a modal that uses the default styles, and does not include any customization options."}),footer:e(i,{onClick:l=>l.preventDefault(),children:"Trigger an Action"}),fontTheme:"dark",headerBgColor:"#fff",showDividerTop:!0,showDividerBottom:!0,showClose:!0},children:D.bind({})}),`
`,e(I,{story:"Default"}),`
`,e(r.h2,{children:"Usage Examples"}),`
`,e(r.p,{children:"Modals can be customized to fix various display requirements, depending on the situation. Below are a few examples highlighting various potential use cases."}),`
`,e(r.h3,{children:"Interaction"}),`
`,e(p,{children:e(m,{name:"Interaction",children:()=>{const{openOverlay:l}=f();return e(d,{children:e(i,{onClick:()=>l(t(o,{fontTheme:"light",headerBgColor:"#824c88",children:[e(o.Header,{children:"Example Modal"}),e(o.Content,{children:e(r.p,{children:"This is a popup modal with general information. This serves as an example of how interaction with the modal is intended to work."})})]})),children:"Trigger Modal Open"})})}})}),`
`,e("br",{}),`
`,e(r.h3,{children:"Background Close Disabled"}),`
`,e(p,{children:e(m,{name:"BgCloseDisabled",children:()=>{const{openOverlay:l}=f();return e(d,{children:e(i,{onClick:()=>l(t(o,{fontTheme:"light",headerBgColor:"#824c88",children:[e(o.Header,{children:"Example Modal"}),e(o.Content,{children:e(r.p,{children:"This is a popup modal with general information. This serves as an example of how interaction with the modal is intended to work."})})]}),!0),children:"Trigger Locked Modal"})})}})}),`
`,e("br",{}),`
`,e(r.h3,{children:"Example #1"}),`
`,e(p,{withSource:"open",children:e(m,{name:"Example #1",children:e(o,{fontTheme:"light",headerBgColor:"#d9006e",children:e(o.Content,{children:e("p",{children:"This is a modal that contains a close button and content, but has no header or footer."})})})})}),`
`,e("br",{}),`
`,e(r.h3,{children:"Example #2"}),`
`,e(p,{withSource:"open",children:e(m,{name:"Example #2",children:t(o,{fontTheme:"light",headerBgColor:"#363955",showDividerBottom:!1,children:[e(o.Header,{children:e(r.p,{children:"General Information Modal"})}),e(o.Content,{children:e("p",{children:`This is a modal with some general information. Anything can go here, to provide details or explain
information further. The modal can contain as much information as needed, in order to provide the proper
context for the content.`})}),e(o.Footer,{children:e("sub",{children:e("em",{children:"Last updated 01/02/34"})})})]})})}),`
`,e("br",{}),`
`,e(r.h3,{children:"Example #3"}),`
`,e(p,{withSource:"open",children:e(m,{name:"Example #3",children:t(o,{fontTheme:"light",headerBgColor:"#d73636",showClose:!1,children:[e(o.Header,{children:e("center",{children:"Warning Modal"})}),e(o.Content,{children:t("center",{children:[e("p",{children:"Making these changes will perform an irreversible action."}),`
`,e("p",{children:"No close button is provided; you are required to make a selection below."})]})}),t(o.Footer,{children:[e("div",{style:{textAlign:"center"},children:e("p",{style:{marginBottom:"1rem",fontSize:"1rem"},children:"Are you sure you want to continue?"})}),t("div",{style:{textAlign:"center"},children:[e(i,{className:"warn",onClick:l=>l.preventDefault(),children:"No, Cancel"}),`
`,e(i,{className:"success",onClick:l=>l.preventDefault(),children:"Yes, Continue"})]})]})]})})}),`
`,e(z,{})]})}}function g(n,s){throw new Error("Expected "+(s?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}const v=D.bind({});v.storyName="Default";v.args={header:e(d,{children:"Default Modal Style"}),content:e(d,{children:"This is a modal that uses the default styles, and does not include any customization options."}),footer:e(i,{onClick:n=>n.preventDefault(),children:"Trigger an Action"}),fontTheme:"dark",headerBgColor:"#fff",showDividerTop:!0,showDividerBottom:!0,showClose:!0};v.parameters={storySource:{source:`({
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
  </Modal>`}};const H=()=>{const{openOverlay:n}=f();return e(d,{children:e(i,{onClick:()=>n(t(o,{fontTheme:"light",headerBgColor:"#824c88",children:[e(o.Header,{children:"Example Modal"}),e(o.Content,{children:e("p",{children:"This is a popup modal with general information. This serves as an example of how interaction with the modal is intended to work."})})]})),children:"Trigger Modal Open"})})};H.storyName="Interaction";H.parameters={storySource:{source:`() => {
  const {
    openOverlay
  } = useGlobalStore();
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
}`}};const N=()=>{const{openOverlay:n}=f();return e(d,{children:e(i,{onClick:()=>n(t(o,{fontTheme:"light",headerBgColor:"#824c88",children:[e(o.Header,{children:"Example Modal"}),e(o.Content,{children:e("p",{children:"This is a popup modal with general information. This serves as an example of how interaction with the modal is intended to work."})})]}),!0),children:"Trigger Locked Modal"})})};N.storyName="BgCloseDisabled";N.parameters={storySource:{source:`() => {
  const {
    openOverlay
  } = useGlobalStore();
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
}`}};const S=()=>e(o,{fontTheme:"light",headerBgColor:"#d9006e",children:e(o.Content,{children:e("p",{children:"This is a modal that contains a close button and content, but has no header or footer."})})});S.storyName="Example #1";S.parameters={storySource:{source:'<Modal fontTheme={"light"} headerBgColor={"#d9006e"}><Modal.Content><p>{"This is a modal that contains a close button and content, but has no header or footer."}</p></Modal.Content></Modal>'}};const E=()=>t(o,{fontTheme:"light",headerBgColor:"#363955",showDividerBottom:!1,children:[e(o.Header,{children:e("p",{children:"General Information Modal"})}),e(o.Content,{children:e("p",{children:`This is a modal with some general information. Anything can go here, to provide details or explain
information further. The modal can contain as much information as needed, in order to provide the proper
context for the content.`})}),e(o.Footer,{children:e("sub",{children:e("em",{children:"Last updated 01/02/34"})})})]});E.storyName="Example #2";E.parameters={storySource:{source:'<Modal fontTheme={"light"} headerBgColor={"#363955"} showDividerBottom={false}><Modal.Header><p>{"General Information Modal"}</p></Modal.Header><Modal.Content><p>{"This is a modal with some general information. Anything can go here, to provide details or explain\\ninformation further. The modal can contain as much information as needed, in order to provide the proper\\ncontext for the content."}</p></Modal.Content><Modal.Footer><sub><em>{"Last updated 01/02/34"}</em></sub></Modal.Footer></Modal>'}};const F=()=>t(o,{fontTheme:"light",headerBgColor:"#d73636",showClose:!1,children:[e(o.Header,{children:e("center",{children:"Warning Modal"})}),e(o.Content,{children:t("center",{children:[e("p",{children:"Making these changes will perform an irreversible action."}),`
`,e("p",{children:"No close button is provided; you are required to make a selection below."})]})}),t(o.Footer,{children:[e("div",{style:{textAlign:"center"},children:e("p",{style:{marginBottom:"1rem",fontSize:"1rem"},children:"Are you sure you want to continue?"})}),t("div",{style:{textAlign:"center"},children:[e(i,{className:"warn",onClick:n=>n.preventDefault(),children:"No, Cancel"}),`
`,e(i,{className:"success",onClick:n=>n.preventDefault(),children:"Yes, Continue"})]})]})]});F.storyName="Example #3";F.parameters={storySource:{source:`<Modal fontTheme={"light"} headerBgColor={"#d73636"} showClose={false}><Modal.Header><center>{"Warning Modal"}</center></Modal.Header><Modal.Content><center><p>{"Making these changes will perform an irreversible action."}</p>{"\\n"}<p>{"No close button is provided; you are required to make a selection below."}</p></center></Modal.Content><Modal.Footer><div style={{
      textAlign: "center"
    }}><p style={{
        marginBottom: "1rem",
        fontSize: "1rem"
      }}>{"Are you sure you want to continue?"}</p></div><div style={{
      textAlign: "center"
    }}><Button className="warn" onClick={e => e.preventDefault()}>{"No, Cancel"}</Button>{"\\n"}<Button className="success" onClick={e => e.preventDefault()}>{"Yes, Continue"}</Button></div></Modal.Footer></Modal>`}};const C={title:"Components/UI/Modal",component:o,argTypes:{header:{table:{disable:!0}},content:{table:{disable:!0}},footer:{table:{disable:!0}},fontTheme:{options:["light","dark"],control:{type:"radio"}},headerBgColor:{control:{type:"color"}},showDividerTop:{control:{type:"boolean"}},showDividerBottom:{control:{type:"boolean"}},showClose:{control:{type:"boolean"}}},tags:["stories-mdx"],includeStories:["defaultStory","interaction","bgCloseDisabled","example1","example2","example3"]};C.parameters=C.parameters||{};C.parameters.docs={...C.parameters.docs||{},page:G};const ge=["Template","defaultStory","interaction","bgCloseDisabled","example1","example2","example3"];export{D as Template,ge as __namedExportsOrder,N as bgCloseDisabled,C as default,v as defaultStory,S as example1,E as example2,F as example3,H as interaction};
//# sourceMappingURL=Modal.stories-038b5710.js.map
