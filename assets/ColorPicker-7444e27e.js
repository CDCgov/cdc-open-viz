import{a as y,F as u,j as i}from"./jsx-runtime-670450c2.js";import{u as m}from"./configStore-d2c2b356.js";import{p as c}from"./index-4d501b15.js";import{L as g}from"./Label-ecfa30b4.js";import{T as s}from"./Tooltip-ed90ab02.js";const d={blue:{primary:"#005eaa",secondary:"#88c3ea",tertiary:"#c0e9ff",quaternary:"#edf9ff"},purple:{primary:"#712177",secondary:"#b890bb",tertiary:"#e3d3e4",quaternary:"#f7f2f7"},brown:{primary:"#705043",secondary:"#ad907b",tertiary:"#d7ccc8",quaternary:"#f2ebe8"},teal:{primary:"#00695c",secondary:"#4ebaaa",tertiary:"#ceece7",quaternary:"#ebf7f5"},pink:{primary:"#af4448",secondary:"#e57373",tertiary:"#ffc2c2",quaternary:"#ffe7e7"},orange:{primary:"#bb4d00",secondary:"#ffad42",tertiary:"#ffe97d",quaternary:"#fff4cf"},slate:{primary:"#29434e",secondary:"#7e9ba5",tertiary:"#b6c6d2",quaternary:"#e2e8ed"},indigo:{primary:"#26418f",secondary:"#92a6dd",tertiary:"#dee8ff",quaternary:"#f2f6ff"},cyan:{primary:"#006778",secondary:"#65b0bd",tertiary:"#cce5e9",quaternary:"#ebf5f6"},green:{primary:"#4b830d",secondary:"#84bc49",tertiary:"#dcedc8",quaternary:"#f1f8e9"},amber:{primary:"#fbab18",secondary:"#ffd54f",tertiary:"#ffecb3",quaternary:"#fff7e1"}},h=e=>e.charAt(0).toUpperCase()+e.slice(1),_=e=>{if(Array.isArray(e)&&e.length>0)return e.reduce((r,a)=>r+a)},A=e=>e.length>1?e.reduce((r,a)=>r+a)/e.length:e[0],T=e=>{const r=Math.floor(e.length/2),a=[...e].sort((t,n)=>t-n);return e.length%2!==0?a[r]:(a[r-1]+a[r])/2},O=e=>{let r=[],a={},t=-1/0;for(let n=0;n<e.length;n++)a[e[n]]?a[e[n]]+=1:a[e[n]]=1,a[e[n]]>t&&(t=a[e[n]]);for(let n in a)a[n]===t&&r.push(n);return r},x=(e,r)=>(r!==""&&!isNaN(r)&&Number(r)>-1&&(e=Number(e).toFixed(Number(r))),e);const l=({color:e})=>{const{config:r,updateConfig:a}=m(),t=e===r.theme&&{"data-selected":!0};return y("button",{className:"cove-color-picker__button",...t,onClick:()=>{a({theme:e})},children:[i("div",{className:"cove-color-picker__color",style:{backgroundColor:d[e].primary}}),i("div",{className:"cove-color-picker__color--ring"})]})},p=({label:e,colors:r=d,tooltip:a,colorTooltip:t})=>{const n=o=>{if(o.constructor===Object){let f=[];return Object.entries(d).forEach(([b,q])=>f.push(b)),f}else return o.constructor===Array?o:(console.error("Unable to parse colors. Color data must be provided as either an object or an array."),[])};return y(u,{children:[e&&i(g,{tooltip:a,children:e}),i("div",{className:"cove-color-picker",children:t?n(r).map((o,f)=>y(s,{position:"bottom",children:[i(s.Target,{children:i(l,{color:o})}),i(s.Content,{children:h(o)})]},f)):n(r).map((o,f)=>i(l,{color:o},f))})]})};p.propTypes={label:c.string,colors:c.oneOfType([c.array,c.object]),tooltip:c.oneOfType([c.string,c.object]),colorTooltip:c.bool};p.__docgenInfo={description:"",methods:[],displayName:"ColorPicker",props:{colors:{defaultValue:{value:`{
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
}`,computed:!1},type:{name:"union",value:[{name:"array"},{name:"object"}]},required:!1,description:"Define the color options to be generated:\n<br/>- `Array` will generate the list based off each entry\n<br/>- `Object` will generate the list based off a `key: value` = `colorName: colorValue` correlation\n<br/><br/>"},label:{type:{name:"string"},required:!1,description:"Add label for the ColorPicker component"},tooltip:{type:{name:"union",value:[{name:"string"},{name:"object"}]},required:!1,description:"Add a tooltip to describe the ColorPicker's usage; JSX markup can also be supplied"},colorTooltip:{type:{name:"bool"},required:!1,description:"Display a tooltip defining the value of a focused color"}}};export{p as C,d as a,x as b,A as c,T as d,O as e,_ as g};
//# sourceMappingURL=ColorPicker-7444e27e.js.map
