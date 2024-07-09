import { r as s, R as o } from "./storybook-index-BmAYD2Ot.es.js";
import { A as l, a as m, b as d, c as E, d as A } from "./storybook-index-S2sDPfKi.es.js";
import { P as r } from "./storybook-index-Cdio1Uc1.es.js";
import { a as u } from "./storybook-Icon-B5TlldJZ.es.js";
import { T as c } from "./storybook-Tooltip-BxtpAmS8.es.js";
const n = (t) => t, p = ({ children: t }) => {
  const a = s.Children.toArray(t).filter((e) => (e == null ? void 0 : e.type) === n);
  return /* @__PURE__ */ o.createElement(l, { allowZeroExpanded: !0 }, a && a.map((e, i) => /* @__PURE__ */ o.createElement(m, { className: "cove-accordion__item", key: i }, /* @__PURE__ */ o.createElement(d, { className: "cove-accordion__heading" }, /* @__PURE__ */ o.createElement(E, { className: "cove-accordion__button" }, e.props.icon, e.props.title, e.props.tooltipText ? /* @__PURE__ */ o.createElement(c, { position: "bottom" }, /* @__PURE__ */ o.createElement(c.Target, null, /* @__PURE__ */ o.createElement(u, { display: "question", size: 14 })), /* @__PURE__ */ o.createElement(c.Content, null, e.props.tooltipText)) : null)), /* @__PURE__ */ o.createElement(A, { className: "cove-accordion__panel" }, e.props.children))));
};
p.Section = n;
p.Section.propTypes = {
  /* Icon for the accordion label */
  icon: r.node,
  /* Title for the accordion label*/
  title: r.string,
  /* Tooltip for the accordion label*/
  tooltipText: r.object
};
export {
  p as A
};
