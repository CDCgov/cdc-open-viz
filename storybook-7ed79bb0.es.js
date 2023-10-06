import s, { useRef as l, useLayoutEffect as R } from "react";
import { r as c } from "./storybook-86ede3a4.es.js";
var n = {}, o = c;
if (process.env.NODE_ENV === "production")
  n.createRoot = o.createRoot, n.hydrateRoot = o.hydrateRoot;
else {
  var a = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  n.createRoot = function(t, e) {
    a.usingClientEntryPoint = !0;
    try {
      return o.createRoot(t, e);
    } finally {
      a.usingClientEntryPoint = !1;
    }
  }, n.hydrateRoot = function(t, e, r) {
    a.usingClientEntryPoint = !0;
    try {
      return o.hydrateRoot(t, e, r);
    } finally {
      a.usingClientEntryPoint = !1;
    }
  };
}
var u = /* @__PURE__ */ new Map(), E = ({ callback: t, children: e }) => {
  let r = l();
  return R(() => {
    r.current !== t && (r.current = t, t());
  }, [t]), e;
}, d = async (t, e) => {
  let r = await _(e);
  return new Promise((i) => {
    r.render(s.createElement(E, { callback: () => i(null) }, t));
  });
}, m = (t, e) => {
  let r = u.get(t);
  r && (r.unmount(), u.delete(t));
}, _ = async (t) => {
  let e = u.get(t);
  return e || (e = n.createRoot(t), u.set(t, e)), e;
};
export {
  d as r,
  m as u
};
