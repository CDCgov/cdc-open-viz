import r from "react";
const u = r.createContext({});
function f(e) {
  const t = r.useContext(u);
  return r.useMemo(() => typeof e == "function" ? e(t) : { ...t, ...e }, [t, e]);
}
const i = {};
function a({ components: e, children: t, disableParentContext: o }) {
  let n;
  return o ? n = typeof e == "function" ? e({}) : e || i : n = f(e), r.createElement(
    u.Provider,
    { value: n },
    t
  );
}
export {
  u as MDXContext,
  a as MDXProvider,
  f as useMDXComponents
};
