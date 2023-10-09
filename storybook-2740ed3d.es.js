import s, { useRef as l, useLayoutEffect as R } from "react";
import { d as c } from "./storybook-2d1b80a2.es.js";
import { r as E } from "./storybook-991eacfa.es.js";
var n = {}, o = E;
if (c.process.env.NODE_ENV === "production")
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
var u = /* @__PURE__ */ new Map(), _ = ({ callback: t, children: e }) => {
  let r = l();
  return R(() => {
    r.current !== t && (r.current = t, t());
  }, [t]), e;
}, p = async (t, e) => {
  let r = await f(e);
  return new Promise((i) => {
    r.render(s.createElement(_, { callback: () => i(null) }, t));
  });
}, g = (t, e) => {
  let r = u.get(t);
  r && (r.unmount(), u.delete(t));
}, f = async (t) => {
  let e = u.get(t);
  return e || (e = n.createRoot(t), u.set(t, e)), e;
};
export {
  p as r,
  g as u
};
