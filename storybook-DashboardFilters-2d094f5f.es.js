import { R as a } from "./storybook-index-45401197.es.js";
import { M as N } from "./storybook-MultiSelect-25c4ae51.es.js";
import { N as g } from "./storybook-NestedDropdown-7810a864.es.js";
const r = {
  nestedDropdown: "nested-dropdown",
  multiSelect: "multi-select",
  dropdown: "dropdown"
}, G = ({
  show: y,
  filters: $,
  apiFilterDropdowns: d,
  handleOnChange: i,
  showSubmit: h,
  applyFilters: S,
  applyFiltersButtonText: w
}) => {
  const b = (e) => {
    const t = e.queuedActive || e.active;
    return t == null || t === "";
  }, k = (e, t, l, o) => {
    i(l, o);
  }, L = (e) => {
    if (!e)
      return [];
    const t = (l, o) => o ? [l, o] : [l];
    return e.map(({ value: l, text: o, subOptions: n }) => [
      t(l, o),
      (n || []).map(({ value: c, text: m }) => t(c, m))
    ]);
  };
  return /* @__PURE__ */ a.createElement("form", { className: "d-flex flex-wrap" }, $.map((e, t) => {
    var m, v, E;
    if (!(e.type === "urlfilter") && !e.showDropdown && e.filterStyle !== r.nestedDropdown || y && !y.includes(t))
      return /* @__PURE__ */ a.createElement(a.Fragment, { key: `${e.key}-filtersection-${t}-option` });
    const o = [];
    e.resetLabel && o.push(
      /* @__PURE__ */ a.createElement("option", { key: `${e.resetLabel}-option`, value: e.resetLabel }, e.resetLabel)
    );
    const n = (m = e.apiFilter) == null ? void 0 : m.apiEndpoint, c = [];
    return n && d[n] ? e.filterStyle !== r.nestedDropdown && d[n].forEach(({ text: s, value: u }, p) => {
      o.push(
        /* @__PURE__ */ a.createElement("option", { key: `${u}-option-${p}`, value: u }, s)
      ), c.push({ value: u, label: s });
    }) : (v = e.values) == null || v.forEach((s, u) => {
      const p = e.labels && e.labels[s];
      o.push(
        /* @__PURE__ */ a.createElement("option", { key: `${e.key}-option-${u}`, value: s }, p || s)
      ), c.push({ value: s, label: p || s });
    }), e.filterStyle === r.multiSelect ? /* @__PURE__ */ a.createElement(
      N,
      {
        key: `${e.key}-filtersection-${t}`,
        label: e.key,
        options: c,
        fieldName: t,
        updateField: k,
        selected: e.active,
        limit: e.selectLimit || 5
      }
    ) : e.filterStyle === r.nestedDropdown ? /* @__PURE__ */ a.createElement(
      g,
      {
        key: `${e.key}-filtersection-${t}`,
        activeGroup: e.active,
        activeSubGroup: (E = e.subGrouping) == null ? void 0 : E.active,
        options: L(d[n]),
        listLabel: e.key,
        handleSelectedItems: (s) => k(null, null, t, s)
      }
    ) : /* @__PURE__ */ a.createElement("div", { className: "form-group mr-3", key: `${e.key}-filtersection-${t}` }, /* @__PURE__ */ a.createElement("label", { className: "text-capitalize font-weight-bold", htmlFor: `filter-${t}` }, e.key), /* @__PURE__ */ a.createElement(
      "select",
      {
        id: `filter-${t}`,
        className: "form-control",
        "data-index": "0",
        value: e.queuedActive || e.active,
        onChange: (s) => {
          i(t, s.target.value);
        },
        disabled: o.length === 1 && !b(e)
      },
      b(e) && /* @__PURE__ */ a.createElement("option", { key: "select", value: "" }, e.resetLabel || "-Select-"),
      o
    ));
  }), h && /* @__PURE__ */ a.createElement("button", { className: "btn btn-primary", onClick: S }, w || "GO!"));
};
export {
  G as D,
  r as F
};
