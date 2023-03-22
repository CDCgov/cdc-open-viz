import{r as i}from"./index-18f6e4ac.js";var o={};var u={get exports(){return o},set exports(t){o=t}};var n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x=i;var m=Symbol.for("react.element");var l=Symbol.for("react.fragment");var c=Object.prototype.hasOwnProperty;var y=x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;var j={key:true,ref:true,__self:true,__source:true};function a(t,r,f){var e,s={},p=null,_=null;void 0!==f&&(p=""+f);void 0!==r.key&&(p=""+r.key);void 0!==r.ref&&(_=r.ref);for(e in r)c.call(r,e)&&!j.hasOwnProperty(e)&&(s[e]=r[e]);if(t&&t.defaultProps)for(e in r=t.defaultProps,r)void 0===s[e]&&(s[e]=r[e]);return{$$typeof:m,type:t,key:p,ref:_,props:s,_owner:y.current}}n.Fragment=l;n.jsx=a;n.jsxs=a;(function(t){{t.exports=n}})(u);const d=o.Fragment;const E=o.jsx;const O=o.jsxs;export{d as F,O as a,E as j};
//# sourceMappingURL=jsx-runtime-f14b59b8.js.map
