import { r as s, R as o } from "./storybook-index-45401197.es.js";
import { A as l, a as m, b as d, c as E, d as A } from "./storybook-index-e502eacf.es.js";
import { P as r } from "./storybook-index-43433e35.es.js";
import { a as u } from "./storybook-Icon-b09f76c0.es.js";
import { T as c } from "./storybook-Tooltip-edc0f7ab.es.js";
const n = (t) => t, i = ({ children: t }) => {
  const a = s.Children.toArray(t).filter((e) => (e == null ? void 0 : e.type) === n);
  return /* @__PURE__ */ o.createElement(l, { allowZeroExpanded: !0 }, a && a.map((e, p) => /* @__PURE__ */ o.createElement(m, { className: "cove-accordion__item", key: p }, /* @__PURE__ */ o.createElement(d, { className: "cove-accordion__heading" }, /* @__PURE__ */ o.createElement(E, { className: "cove-accordion__button" }, e.props.icon, e.props.title, e.props.tooltipText ? /* @__PURE__ */ o.createElement(c, { position: "bottom" }, /* @__PURE__ */ o.createElement(c.Target, null, /* @__PURE__ */ o.createElement(u, { display: "question", size: 14 })), /* @__PURE__ */ o.createElement(c.Content, null, e.props.tooltipText)) : null)), /* @__PURE__ */ o.createElement(A, { className: "cove-accordion__panel" }, e.props.children))));
};
i.Section = n;
i.Section.propTypes = {
  /* Icon for the accordion label */
  icon: r.node,
  /* Title for the accordion label*/
  title: r.string,
  /* Tooltip for the accordion label*/
  tooltipText: r.object
};
export {
  i as A
};
