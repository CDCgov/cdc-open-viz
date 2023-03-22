import{a as y,F as m,j as a}from"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import{u}from"./useVisConfig-4fe3448c.js";import{p as r}from"./index-4d501b15.js";import{L as q}from"./Label-e733889d.js";import{T as f}from"./Tooltip-5568ada0.js";import{C as g}from"./store-0ad8816f.js";const s={blue:{primary:"#005eaa",secondary:"#88c3ea",tertiary:"#c0e9ff",quaternary:"#edf9ff"},purple:{primary:"#712177",secondary:"#b890bb",tertiary:"#e3d3e4",quaternary:"#f7f2f7"},brown:{primary:"#705043",secondary:"#ad907b",tertiary:"#d7ccc8",quaternary:"#f2ebe8"},teal:{primary:"#00695c",secondary:"#4ebaaa",tertiary:"#ceece7",quaternary:"#ebf7f5"},pink:{primary:"#af4448",secondary:"#e57373",tertiary:"#ffc2c2",quaternary:"#ffe7e7"},orange:{primary:"#bb4d00",secondary:"#ffad42",tertiary:"#ffe97d",quaternary:"#fff4cf"},slate:{primary:"#29434e",secondary:"#7e9ba5",tertiary:"#b6c6d2",quaternary:"#e2e8ed"},indigo:{primary:"#26418f",secondary:"#92a6dd",tertiary:"#dee8ff",quaternary:"#f2f6ff"},cyan:{primary:"#006778",secondary:"#65b0bd",tertiary:"#cce5e9",quaternary:"#ebf5f6"},green:{primary:"#4b830d",secondary:"#84bc49",tertiary:"#dcedc8",quaternary:"#f1f8e9"},amber:{primary:"#fbab18",secondary:"#ffd54f",tertiary:"#ffecb3",quaternary:"#fff7e1"}};const l=({color:n})=>{const{config:o,updateVisConfigField:c}=u(),i=n===o.theme&&{"data-selected":!0};return y("button",{className:"cove-color-picker__button",...i,onClick:()=>{c("theme",n)},children:[a("div",{className:"cove-color-picker__color",style:{backgroundColor:s[n].primary}}),a("div",{className:"cove-color-picker__color--ring"})]})},p=({label:n,colors:o=s,tooltip:c,colorTooltip:i})=>{const d=e=>{if(e.constructor===Object){let t=[];return Object.entries(s).forEach(([b,h])=>t.push(b)),t}else return e.constructor===Array?e:(console.error("Unable to parse colors. Color data must be provided as either an object or an array."),[])};return y(m,{children:[n&&a(q,{tooltip:c,children:n}),a("div",{className:"cove-color-picker",children:i?d(o).map((e,t)=>y(f,{place:"bottom",children:[a(f.Target,{children:a(l,{color:e})}),a(f.Content,{children:g.String.capitalizeFirstLetter(e)})]},t)):d(o).map((e,t)=>a(l,{color:e},t))})]})};p.propTypes={label:r.string,colors:r.oneOfType([r.array,r.object]),tooltip:r.oneOfType([r.string,r.object]),colorTooltip:r.bool};p.__docgenInfo={description:"",methods:[],displayName:"ColorPicker",props:{colors:{defaultValue:{value:`{
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
}`,computed:!1},type:{name:"union",value:[{name:"array"},{name:"object"}]},required:!1,description:"Define the color options to be generated:\n<br/>- `Array` will generate the list based off each entry\n<br/>- `Object` will generate the list based off a `key: value` = `colorName: colorValue` correlation\n<br/><br/>"},label:{type:{name:"string"},required:!1,description:"Add label for the ColorPicker component"},tooltip:{type:{name:"union",value:[{name:"string"},{name:"object"}]},required:!1,description:"Add a tooltip to describe the ColorPicker's usage; JSX markup can also be supplied"},colorTooltip:{type:{name:"bool"},required:!1,description:"Display a tooltip defining the value of a focused color"}}};export{p as C,s as a};
//# sourceMappingURL=ColorPicker-2b442419.js.map
