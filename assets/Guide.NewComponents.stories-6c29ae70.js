import{M as s}from"./index-44deb343.js";import{j as n,a as o,F as c}from"./jsx-runtime-91a467a5.js";import{u as a}from"./index-1d576ef5.js";import"./iframe-34914215.js";import"../sb-preview/runtime.js";import"./chunk-6P7RB4HF-36fee097.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-80ae7d84.js";import"./index-d37d4223.js";import"./index-356e4a49.js";function i(t){const e=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",code:"code",strong:"strong",pre:"pre"},a(),t.components);return o(c,{children:[n(s,{title:"Guides/New Components"}),`
`,n(e.h1,{id:"adding-new-components",children:"Adding New Components"}),`
`,n(e.p,{children:"This guide will walk you through the process of creating a new component."}),`
`,n("br",{}),`
`,n(e.h2,{id:"naming-conventions",children:"Naming Conventions"}),`
`,o(e.ul,{children:[`
`,o(e.li,{children:[`
`,o(e.p,{children:["Because the components are imported directly from COVE related files, there is no need to reference ",n(e.code,{children:"COVE"})," in the component name. For example, ",n(e.code,{children:"CoveButton"})," should just be named ",n(e.code,{children:"Button"}),"."]}),`
`]}),`
`,o(e.li,{children:[`
`,o(e.p,{children:["Components should be named in PascalCase, and should be named after the component itself. For example, a component that renders a button should be named ",n(e.code,{children:"Button"}),", not ",n(e.code,{children:"ButtonComponent"}),"."]}),`
`]}),`
`,o(e.li,{children:[`
`,n(e.p,{children:"Subcomponents should include the name of the parent component, then list its variation, subvariation, etc. The file name should have variation separated by a period in the file name."}),`
`,n(e.p,{children:n(e.strong,{children:"Example"})}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`Map.jsx -> Map.Marker.jsx -> Map.Marker.Icon.jsx
`})}),`
`,n(e.p,{children:" "}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`Map() -> MapMarker() -> MapMarkerIcon()
`})}),`
`,n(e.p,{children:" "}),`
`]}),`
`]}),`
`,n(e.h2,{id:"file-structure",children:"File Structure"}),`
`,o(e.p,{children:["All global components should be placed in its related ",n(e.code,{children:"./packages/core/components/***"})," directory."]}),`
`,o(e.p,{children:["The ",n(e.code,{children:"***"})," directory should be representative of the type of component being created:"]}),`
`,o(e.ul,{children:[`
`,o(e.li,{children:[n(e.code,{children:"editor"})," - Components/subcomponents specific to the Editor view of a component, where visualization settings are set/modified."]}),`
`,o(e.li,{children:[n(e.code,{children:"element"})," - Elements that are consumed for use in COVE, and can be recycled, but do not necessarily function as a direct part of the UI."]}),`
`,o(e.li,{children:[n(e.code,{children:"hoc"})," - Components that are intended to be used as wrappers around other components. These usually provide higher, specific logic or functionality to a component/group of components."]}),`
`,o(e.li,{children:[n(e.code,{children:"input"})," - Components that are intended to be used as inputs for Editor Panels, or - in rare cases - as inputs on visualizations."]}),`
`,o(e.li,{children:[n(e.code,{children:"loader"})," - Components that are intended to be used as loaders for suspense/lazy loading of components."]}),`
`,o(e.li,{children:[n(e.code,{children:"manager"})," - Components specifically intended to be used as tools for managing/interfacing with processed data, usually to interactively modify or manipulate data values or structure."]}),`
`,o(e.li,{children:[n(e.code,{children:"ui"})," - Not to be confused with ",n(e.code,{children:"element"})," - UI components are the most basic building blocks of an interface. These control the visual appearance of a component, and are usually the most reusable components in the system."]}),`
`]}),`
`,n(e.p,{children:" "}),`
`,n(e.h2,{id:"component-structure",children:"Component Structure"}),`
`,n(e.p,{children:"All components should adhere loosely to the following format, using the comments to organize import uses and types:"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`import React from 'react'

// Third Party
// Store
// Context
// Data
// Constants
// Hooks
// Helpers
// Components - Core
// Components - Local
// Styles

// Visualization
const Component = () => {
  return (
    <div>
      <h1>Component</h1>
    </div>
  )
}
export default Component
`})}),`
`,n(e.p,{children:"While directly exporting a non-variable function does work, exporting functions this way allows for a cleaner method of attaching memoization, or adding extension optimizations to a component. It allows us to reference the exported const directly, vs wrapping the entire function itself (which can get lengthy, and cluttered with other function wrappers):"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`export default memo(Component)
`})})]})}function d(t={}){const{wrapper:e}=Object.assign({},a(),t.components);return e?n(e,{...t,children:n(i,{...t})}):i(t)}const l=()=>{throw new Error("Docs-only story")};l.parameters={docsOnly:!0};const r={title:"Guides/New Components",tags:["stories-mdx"],includeStories:["__page"]};r.parameters=r.parameters||{};r.parameters.docs={...r.parameters.docs||{},page:d};const v=["__page"];export{v as __namedExportsOrder,l as __page,r as default};
//# sourceMappingURL=Guide.NewComponents.stories-6c29ae70.js.map
