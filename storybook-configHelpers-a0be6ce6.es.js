import { l as C } from "./storybook-lodash-a4231e1c.es.js";
function a(r, s) {
  const p = C.cloneDeep(r);
  return s.reduce((e, { path: c, value: i }) => {
    const t = [...c], f = t.pop(), u = t.reduce((o, n) => (o[n] || (o[n] = {}), o[n]), e);
    return u[f] = i, e;
  }, p);
}
export {
  a as e
};
