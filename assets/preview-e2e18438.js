import{s as a}from"./index-3e075a63.js";var n="storybook/highlight";var d="storybookHighlight";var _=`${n}/add`;var g=`${n}/reset`;const{addons:E}=__STORYBOOK_MODULE_PREVIEW_API__;const{STORY_CHANGED:H}=__STORYBOOK_MODULE_CORE_EVENTS__;var{document:h}=a;var O=(e="#FF4785",t="dashed")=>`
  outline: 2px ${t} ${e};
  outline-offset: 2px;
  box-shadow: 0 0 0 6px rgba(255,255,255,0.6);
`;var I=e=>({outline:`2px dashed ${e}`,outlineOffset:2,boxShadow:"0 0 0 6px rgba(255,255,255,0.6)"});var l=E.getChannel();var p=e=>{let t=d;i();let r=Array.from(new Set(e.elements)),o=h.createElement("style");o.setAttribute("id",t),o.innerHTML=r.map(s=>`${s}{
          ${O(e.color,e.style)}
         }`).join(" "),h.head.appendChild(o)};var i=()=>{let e=d,t=h.getElementById(e);t&&t.parentNode.removeChild(t)};l.on(H,i);l.on(g,i);l.on(_,p);export{I as highlightObject,O as highlightStyle};
//# sourceMappingURL=preview-e2e18438.js.map
