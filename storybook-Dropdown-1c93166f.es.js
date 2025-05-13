import { j as t } from "./storybook-jsx-runtime-ea6e0d87.es.js";
const d = "py-2 ps-2 w-100 d-block", p = ({ index: s, label: n, filter: e, changeFilterActive: c }) => {
  var o;
  const { active: l, queuedActive: r } = e;
  return /* @__PURE__ */ t(
    "select",
    {
      id: `filter-${s}`,
      name: n,
      "aria-label": `Filter by ${n}`,
      className: `cove-form-select ${d} bg-white`,
      "data-index": "0",
      value: r || l,
      onChange: (a) => {
        c(s, a.target.value);
      },
      children: (o = e.values) == null ? void 0 : o.map((a, i) => /* @__PURE__ */ t("option", { value: a, "aria-label": a, children: e.labels && e.labels[a] ? e.labels[a] : a }, i))
    }
  );
};
export {
  d as D,
  p as a
};
