import{M as v,S as i,A as o}from"./index-2f5af72e.js";import{j as n,a as t,F as y}from"./jsx-runtime-670450c2.js";import{u as c}from"./index-4fb8b842.js";import"./iframe-82ea261c.js";import"../sb-preview/runtime.mjs";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-6e91e324.js";import"./index-d475d2ea.js";import"./index-c46f0053.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const r=({...s})=>{const l=Object.assign({div:"div"},c());return n(l.div,{className:"example-wrapper"})};function f(s={}){const{wrapper:l}=Object.assign({},c(),s.components);return l?n(l,{...s,children:n(m,{})}):m();function m(){const e=Object.assign({h1:"h1",p:"p",strong:"strong",code:"code",h2:"h2",pre:"pre",ul:"ul",li:"li",a:"a",h3:"h3"},c(),s.components);return t(y,{children:[n(v,{title:"Store/Slices/globalSlice"}),`
`,`
`,n(e.h1,{children:"globalSlice"}),`
`,t(e.p,{children:["The ",n(e.strong,{children:"globalSlice"})," of the COVE store contains global state that is used throughout the application. This includes general data like viewport information, operating system, modal states, and more."]}),`
`,t(e.p,{children:["It also provides a set list of functions that can be used to modify the ",n(e.code,{children:"global"})," state:"]}),`
`,n(e.p,{children:" "}),`
`,n(e.h2,{children:"Structure"}),`
`,t(e.p,{children:["The ",n(e.code,{children:"globalSlice"})," structure is as follows:"]}),`
`,n(e.pre,{children:n(e.code,{className:"language-json",children:`{
  "viewMode": {
    "isEditor": false,
    "isDashboard": false,
    "isWizard": false
  },
  "os": navigator.userAgent.indexOf('Win') !== -1 ? 'Win' : navigator.userAgent.indexOf('Mac') !== -1 ? 'MacOS' : null,
  "overlay": {
    "object": null,
    "show": false,
    "disableBgClose": false
  },
  "viewport": "lg",
  "dimensions": null
}
`})}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:[n(e.strong,{children:"viewMode"}),": An object that contains boolean flags for indicating what state the application is in:",`
`,t(e.ul,{children:[`
`,t(e.li,{children:[n(e.strong,{children:"isEditor"}),": Defines if the visualization is displayed in its Editor Mode - this value is set by the ",n(e.a,{href:"./?path=/docs/components-hoc-view--docs",children:"<View/>"})," component when mounted, which checks the URL for the ",n(e.code,{children:"?editor=true"})," query parameter."]}),`
`,t(e.li,{children:[n(e.strong,{children:"isDashboard"}),": Defines if the user is viewing the Dashboard; this further affects how the ",n(e.code,{children:"viewMode.isEditor"})," flag behaves, depending on whether the user is viewing the dashboard, a visualization, or is in preview mode."]}),`
`,t(e.li,{children:[n(e.strong,{children:"isWizard"}),": Defines if the user is viewing the visualization Wizard."]}),`
`]}),`
`]}),`
`,t(e.li,{children:[n(e.strong,{children:"os"}),": A string that represents the user's operating system, either ",n(e.code,{children:'"Win"'}),", ",n(e.code,{children:'"MacOS"'}),", or ",n(e.code,{children:"null"}),"."]}),`
`,t(e.li,{children:[n(e.strong,{children:"overlay"}),": An object that contains the properties of the current overlay:",`
`,t(e.ul,{children:[`
`,t(e.li,{children:[n(e.strong,{children:"object"}),": The object to in the overlay, such as a modal"]}),`
`,t(e.li,{children:[n(e.strong,{children:"show"}),": Defines whether to show the overlay"]}),`
`,t(e.li,{children:[n(e.strong,{children:"disableBgClose"}),": Defines whether to disable the overlay from closing when the user clicks outside of it"]}),`
`]}),`
`]}),`
`,t(e.li,{children:[n(e.strong,{children:"viewport"}),": A string that represents the current viewport size, such as ",n(e.code,{children:'"lg"'})," for large screens, ",n(e.code,{children:'"md"'})," for medium screens, and so on."]}),`
`,t(e.li,{children:[n(e.strong,{children:"dimensions"}),": An object that contains the current dimensions of the application."]}),`
`]}),`
`,n(e.p,{children:" "}),`
`,n(e.h2,{children:"Functions"}),`
`,n("br",{}),`
`,n(e.h3,{children:"setViewMode()"}),`
`,n(e.p,{children:"This function sets the viewMode property of the state object for a specific view."}),`
`,n(e.p,{children:n(e.strong,{children:"Syntax"})}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`setViewMode(view, value)
`})}),`
`,n(e.p,{children:n(e.strong,{children:"Arguments"})}),`
`,n(i,{name:"setViewMode",argTypes:{view:{description:'A `"string"` that represents the name of the `viewMode.xxx` key to set the supplied **value** to.',control:!1},value:{description:"A `boolean` flag that indicates whether a specific view mode is active or inactive.",control:!1}},children:r.bind({})}),`
`,n(o,{story:"setViewMode"}),`
`,n(e.p,{children:" "}),`
`,n(e.h3,{children:"setViewport()"}),`
`,t(e.p,{children:["This function sets the ",n(e.code,{children:"viewport"})," property of the state object."]}),`
`,n(e.p,{children:n(e.strong,{children:"Syntax"})}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`setViewport(width)
`})}),`
`,n(e.p,{children:n(e.strong,{children:"Arguments"})}),`
`,n(i,{name:"setViewport",argTypes:{width:{description:'Takes the `number` value of the current viewport width of the application, measured by px. <br/><br/>Calculates and returns the equivalent `"string"` value by using the [getViewport()](./?path=/docs/helpers-covehelper-general-getviewport--docs) helper.',control:!1}},children:r.bind({})}),`
`,n(o,{story:"setViewport"}),`
`,n(e.p,{children:" "}),`
`,n(e.h3,{children:"setDimensions()"}),`
`,n(e.p,{children:n(e.strong,{children:"[ setDimensions() is currently unused and may be deprecated ]"})}),`
`,t(e.p,{children:["This function sets the ",n(e.code,{children:"dimensions"})," property of the state object defines the width and height dimensions of the visualization component."]}),`
`,n(e.p,{children:n(e.strong,{children:"Syntax"})}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`setDimensions(dimensions)
`})}),`
`,n(e.p,{children:n(e.strong,{children:"Arguments"})}),`
`,n(i,{name:"setDimensions",argTypes:{dimensions:{description:"An `{object}` that represents the current dimensions of the visualization.",control:!1}},children:r.bind({})}),`
`,n(o,{story:"setDimensions"}),`
`,n(e.p,{children:n(e.strong,{children:"Example"})}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`setDimensions({ width: 100, height: 100 })
`})}),`
`,n(e.p,{children:" "}),`
`,n(e.h3,{children:"openOverlay()"}),`
`,n(e.p,{children:"This function opens an overlay with the specified object as its content, and updates the overlay property of the state object by:"}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:["Setting the ",n(e.code,{children:"overlay.object"})," property to the provided ",n(e.code,{children:"{object}"})]}),`
`,t(e.li,{children:["Setting the ",n(e.code,{children:"overlay.show"})," property to ",n(e.code,{children:"true"})]}),`
`,t(e.li,{children:["Setting the ",n(e.code,{children:"overlay.disableBgClose"})," property to the provided ",n(e.code,{children:"boolean"})," value"]}),`
`]}),`
`,n(e.p,{children:n(e.strong,{children:"Syntax"})}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`openOverlay(object, disableBgClose = false)
`})}),`
`,n(e.p,{children:n(e.strong,{children:"Arguments"})}),`
`,n(i,{name:"openOverlay",argTypes:{object:{description:"The `{object}` to be used as the content of the overlay.",control:!1},disableBgClose:{description:"(Optional) A `boolean` flag that indicates whether to disable the closing an overlay by clicking outside of its provided object. <br/> <br/> **Default:** `false`",control:!1}},children:r.bind({})}),`
`,n(o,{story:"openOverlay"}),`
`,n(e.p,{children:n(e.strong,{children:"Example"})}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`openOverlay(
  <Modal>
    <Modal.Header>
      <Modal.Title>Modal Title</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>Modal body text goes here.</p>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={() => toggleOverlay()}>Close</Button>
    </Modal.Footer>
  </Modal>, true
)
`})}),`
`,n(e.p,{children:" "}),`
`,n(e.h3,{children:"toggleOverlay()"}),`
`,t(e.p,{children:["This function toggles the overlay property of the state object by setting the ",n(e.code,{children:"overlay.show"})," property to the provided ",n(e.code,{children:"display"})," value."]}),`
`,n(e.p,{children:n(e.strong,{children:"Syntax"})}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`toggleOverlay(display = false)
`})}),`
`,n(e.p,{children:n(e.strong,{children:"Arguments"})}),`
`,n(i,{name:"toggleOverlay",argTypes:{display:{description:"A `boolean` flag that indicates whether to show or hide the overlay. <br/><br/> **Default:** `false`",control:!1}},children:r.bind({})}),`
`,n(o,{story:"toggleOverlay"}),`
`,n(e.p,{children:n(e.strong,{children:"Example"})}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<Button onClick={() => toggleOverlay(false)}>Close Modal</Button>
`})})]})}}const d=r.bind({});d.storyName="setViewMode";d.argTypes={view:{description:'A `"string"` that represents the name of the `viewMode.xxx` key to set the supplied **value** to.',control:!1},value:{description:"A `boolean` flag that indicates whether a specific view mode is active or inactive.",control:!1}};d.parameters={storySource:{source:`({ ...args
}) => {
  return <div className="example-wrapper">
    </div>;
}`}};const h=r.bind({});h.storyName="setViewport";h.argTypes={width:{description:'Takes the `number` value of the current viewport width of the application, measured by px. <br/><br/>Calculates and returns the equivalent `"string"` value by using the [getViewport()](./?path=/docs/helpers-covehelper-general-getviewport--docs) helper.',control:!1}};h.parameters={storySource:{source:`({ ...args
}) => {
  return <div className="example-wrapper">
    </div>;
}`}};const p=r.bind({});p.storyName="setDimensions";p.argTypes={dimensions:{description:"An `{object}` that represents the current dimensions of the visualization.",control:!1}};p.parameters={storySource:{source:`({ ...args
}) => {
  return <div className="example-wrapper">
    </div>;
}`}};const g=r.bind({});g.storyName="openOverlay";g.argTypes={object:{description:"The `{object}` to be used as the content of the overlay.",control:!1},disableBgClose:{description:"(Optional) A `boolean` flag that indicates whether to disable the closing an overlay by clicking outside of its provided object. <br/> <br/> **Default:** `false`",control:!1}};g.parameters={storySource:{source:`({ ...args
}) => {
  return <div className="example-wrapper">
    </div>;
}`}};const u=r.bind({});u.storyName="toggleOverlay";u.argTypes={display:{description:"A `boolean` flag that indicates whether to show or hide the overlay. <br/><br/> **Default:** `false`",control:!1}};u.parameters={storySource:{source:`({ ...args
}) => {
  return <div className="example-wrapper">
    </div>;
}`}};const a={title:"Store/Slices/globalSlice",tags:["stories-mdx"],includeStories:["setViewMode","setViewport","setDimensions","openOverlay","toggleOverlay"]};a.parameters=a.parameters||{};a.parameters.docs={...a.parameters.docs||{},page:f};const C=["Template","setViewMode","setViewport","setDimensions","openOverlay","toggleOverlay"];export{r as Template,C as __namedExportsOrder,a as default,g as openOverlay,p as setDimensions,d as setViewMode,h as setViewport,u as toggleOverlay};
//# sourceMappingURL=globalSlice.stories-e4dd6790.js.map
