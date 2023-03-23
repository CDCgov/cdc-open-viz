import{M as T,C as k,S as x,A as q}from"./index-c4e09ba2.js";import{a as p,F as h,j as e}from"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import{u as v}from"./useVisConfig-ebd632ff.js";import{p as n}from"./index-4d501b15.js";import{L as j}from"./Label-90f045e3.js";import{T as m}from"./Tooltip-e87d4e0c.js";import{C as d}from"./componentThemes-06b90995.js";import{C as _}from"./store-e4d3035e.js";import{u}from"./index-4fb8b842.js";import"./iframe-4ea23a2e.js";import"../sb-preview/runtime.mjs";import"./index-6e91e324.js";import"./index-d475d2ea.js";import"./index-c46f0053.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./visConfigSlice-d502a2ab.js";import"./index-e3f86ac2.js";import"./Icon-e6436e69.js";const b=({color:r})=>{const{config:t,updateVisConfigField:a}=v(),i=r===t.theme&&{"data-selected":!0};return p("button",{className:"cove-color-picker__button",...i,onClick:()=>{a("theme",r)},children:[e("div",{className:"cove-color-picker__color",style:{backgroundColor:d[r].primary}}),e("div",{className:"cove-color-picker__color--ring"})]})},c=({label:r,colors:t=d,tooltip:a,colorTooltip:i})=>{const y=o=>{if(o.constructor===Object){let s=[];return Object.entries(d).forEach(([C,O])=>s.push(C)),s}else return o.constructor===Array?o:(console.error("Unable to parse colors. Color data must be provided as either an object or an array."),[])};return p(h,{children:[r&&e(j,{tooltip:a,children:r}),e("div",{className:"cove-color-picker",children:i?y(t).map((o,s)=>p(m,{place:"bottom",children:[e(m.Target,{children:e(b,{color:o})}),e(m.Content,{children:_.String.capitalizeFirstLetter(o)})]},s)):y(t).map((o,s)=>e(b,{color:o},s))})]})};c.propTypes={label:n.string,colors:n.oneOfType([n.array,n.object]),tooltip:n.oneOfType([n.string,n.object]),colorTooltip:n.bool};c.__docgenInfo={description:"",methods:[],displayName:"ColorPicker",props:{colors:{defaultValue:{value:`{
  'blue': {
    primary: '#005eaa',
    secondary: '#88c3ea',
    tertiary: '#c0e9ff',
    quaternary: '#edf9ff'
  },
  'purple': {
    primary: '#712177',
    secondary: '#b890bb',
    tertiary: '#e3d3e4',
    quaternary: '#f7f2f7'
  },
  'brown': {
    primary: '#705043',
    secondary: '#ad907b',
    tertiary: '#d7ccc8',
    quaternary: '#f2ebe8'
  },
  'teal': {
    primary: '#00695c',
    secondary: '#4ebaaa',
    tertiary: '#ceece7',
    quaternary: '#ebf7f5'
  },
  'pink': {
    primary: '#af4448',
    secondary: '#e57373',
    tertiary: '#ffc2c2',
    quaternary: '#ffe7e7'
  },
  'orange': {
    primary: '#bb4d00',
    secondary: '#ffad42',
    tertiary: '#ffe97d',
    quaternary: '#fff4cf'
  },
  'slate': {
    primary: '#29434e',
    secondary: '#7e9ba5',
    tertiary: '#b6c6d2',
    quaternary: '#e2e8ed'
  },
  'indigo': {
    primary: '#26418f',
    secondary: '#92a6dd',
    tertiary: '#dee8ff',
    quaternary: '#f2f6ff'
  },
  'cyan': {
    primary: '#006778',
    secondary: '#65b0bd',
    tertiary: '#cce5e9',
    quaternary: '#ebf5f6'
  },
  'green': {
    primary: '#4b830d',
    secondary: '#84bc49',
    tertiary: '#dcedc8',
    quaternary: '#f1f8e9'
  },
  'amber': {
    primary: '#fbab18',
    secondary: '#ffd54f',
    tertiary: '#ffecb3',
    quaternary: '#fff7e1'
  }
}`,computed:!1},type:{name:"union",value:[{name:"array"},{name:"object"}]},required:!1,description:"Define the color options to be generated:\n<br/>- `Array` will generate the list based off each entry\n<br/>- `Object` will generate the list based off a `key: value` = `colorName: colorValue` correlation\n<br/><br/>"},label:{type:{name:"string"},required:!1,description:"Add label for the ColorPicker component"},tooltip:{type:{name:"union",value:[{name:"string"},{name:"object"}]},required:!1,description:"Add a tooltip to describe the ColorPicker's usage; JSX markup can also be supplied"},colorTooltip:{type:{name:"bool"},required:!1,description:"Display a tooltip defining the value of a focused color"}}};const g=({...r})=>e(c,{...r});function E(r={}){const{wrapper:t}=Object.assign({},u(),r.components);return t?e(t,{...r,children:e(a,{})}):a();function a(){const i=Object.assign({h1:"h1",p:"p"},u(),r.components);return p(h,{children:[e(T,{title:"Components/UI/ColorPicker",component:c}),`
`,e(i.h1,{children:"ColorPicker Component"}),`
`,e(i.p,{children:"Content Text"}),`
`,e(k,{sourceState:"shown",withSource:"open",children:e(x,{name:"Example",args:{label:"Example Theme Color",tooltip:"This is an <strong>example</strong> tooltip"},children:g.bind({})})}),`
`,e(q,{story:"Example"})]})}}const f=g.bind({});f.storyName="Example";f.args={label:"Example Theme Color",tooltip:"This is an <strong>example</strong> tooltip"};f.parameters={storySource:{source:`({ ...args
}) => <ColorPicker {...args} />`}};const l={title:"Components/UI/ColorPicker",component:c,tags:["stories-mdx"],includeStories:["example"]};l.parameters=l.parameters||{};l.parameters.docs={...l.parameters.docs||{},page:E};const W=["Template","example"];export{g as Template,W as __namedExportsOrder,l as default,f as example};
//# sourceMappingURL=ColorPicker.stories-32774a84.js.map
