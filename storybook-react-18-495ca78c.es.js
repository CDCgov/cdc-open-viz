import { R, r as s } from "./storybook-index-45401197.es.js";
import { r as c } from "./storybook-index-633d712d.es.js";
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
var u = /* @__PURE__ */ new Map(), l = ({ callback: t, children: e }) => {
  let r = s.useRef();
  return s.useLayoutEffect(() => {
    r.current !== t && (r.current = t, t());
  }, [t]), e;
}, m = async (t, e) => {
  let r = await E(e);
  return new Promise((i) => {
    r.render(R.createElement(l, { callback: () => i(null) }, t));
  });
}, _ = (t, e) => {
  let r = u.get(t);
  r && (r.unmount(), u.delete(t));
}, E = async (t) => {
  let e = u.get(t);
  return e || (e = n.createRoot(t), u.set(t, e)), e;
};
export {
  m as r,
  _ as u
};
