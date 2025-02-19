import { R as s } from "./storybook-index-45401197.es.js";
import { M as R } from "./storybook-MultiSelect-fb96d51f.es.js";
import { F as v } from "./storybook-FilterStyles-fd509eb9.es.js";
import { N as C } from "./storybook-NestedDropdown-c8ea7d17.es.js";
import { L as H } from "./storybook-Loader-f4ec7b29.es.js";
import { _ as j } from "./storybook-lodash-a4231e1c.es.js";
const U = ({
  show: d,
  filters: y,
  apiFilterDropdowns: b,
  handleOnChange: E,
  showSubmit: G,
  applyFilters: A,
  applyFiltersButtonText: D
}) => {
  const T = (e) => {
    const a = e.queuedActive || e.active;
    return a == null || a === "";
  }, L = (e, a, l, n) => {
    E(l, n);
  }, q = (e) => e.replace(/\s\(\d+\)$/, ""), V = (e) => {
    if (!e)
      return [];
    const a = (l, n) => n ? [l, n] : [l];
    return e.map(({ value: l, text: n, subOptions: m }) => [
      a(l, n),
      (m || []).map(({ value: c, text: u }) => a(c, u))
    ]);
  };
  return /* @__PURE__ */ s.createElement("form", { className: "d-flex flex-wrap" }, y.map((e, a) => {
    var g, k, $, S, h, N;
    const l = e.type === "urlfilter", n = q(e.key || "");
    if (!l && !e.showDropdown && e.filterStyle !== v.nestedDropdown || d && !d.includes(a))
      return /* @__PURE__ */ s.createElement(s.Fragment, { key: `${e.key}-filtersection-${a}-option` });
    const m = [], c = (g = e.apiFilter) == null ? void 0 : g.apiEndpoint, u = b[c] === null, i = [], _ = Object.entries(((k = e == null ? void 0 : e.subGrouping) == null ? void 0 : k.valuesLookup) || {}).map(
      ([o, t]) => [
        [o, o],
        // Main option: [value, text]
        Array.isArray(t == null ? void 0 : t.values) ? t.values.map((p) => [p, p]) : []
        // Ensure `values` is an array
      ]
    ), w = j.get(
      ($ = e == null ? void 0 : e.subGrouping) == null ? void 0 : $.valuesLookup,
      [e == null ? void 0 : e.active, "values", 0],
      null
      // Default to null if the path is invalid
    );
    if (c && b[c])
      e.filterStyle !== v.nestedDropdown && b[c].forEach(({ text: o, value: t }, p) => {
        m.push(
          /* @__PURE__ */ s.createElement("option", { key: `${t}-option-${p}`, value: t }, o)
        ), i.push({ value: t, label: o });
      });
    else {
      const o = e.orderedValues || e.values;
      o == null || o.forEach((t, p) => {
        const r = e.labels && e.labels[t];
        (t || r) === e.resetLabel ? m.unshift(
          /* @__PURE__ */ s.createElement("option", { key: `${e.key}-option-${p}`, value: t }, r || t)
        ) : m.push(
          /* @__PURE__ */ s.createElement("option", { key: `${e.key}-option-${p}`, value: t }, r || t)
        ), i.push({ value: t, label: r || t });
      });
    }
    const F = !m.length;
    e.resetLabel && !e.values.includes(e.resetLabel) && m.unshift(
      /* @__PURE__ */ s.createElement("option", { key: `${e.resetLabel}-option`, value: e.resetLabel }, e.resetLabel)
    );
    const M = `form-group me-4 mb-1${u ? " loading-filter" : ""}`;
    return /* @__PURE__ */ s.createElement("div", { className: M, key: `${e.key}-filtersection-${a}` }, n && /* @__PURE__ */ s.createElement("label", { className: "font-weight-bold mb-2", htmlFor: `filter-${a}` }, n), e.filterStyle === v.multiSelect ? /* @__PURE__ */ s.createElement(
      R,
      {
        label: n,
        options: i,
        fieldName: a,
        updateField: L,
        selected: e.active,
        limit: e.selectLimit || 5,
        loading: u
      }
    ) : e.filterStyle === v.nestedDropdown ? /* @__PURE__ */ s.createElement(
      C,
      {
        activeGroup: ((S = e.queuedActive) == null ? void 0 : S[0]) || e.active,
        activeSubGroup: c ? ((h = e.queuedActive) == null ? void 0 : h[1]) || ((N = e.subGrouping) == null ? void 0 : N.active) : w,
        filterIndex: a,
        options: c ? V(b[c]) : _,
        listLabel: n,
        handleSelectedItems: (o) => L(null, null, a, o),
        loading: u
      }
    ) : /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(
      "select",
      {
        id: `filter-${a}`,
        className: "cove-form-select",
        "data-index": "0",
        value: u ? "Loading..." : e.queuedActive || e.active,
        onChange: (o) => {
          E(a, o.target.value);
        },
        disabled: u || F
      },
      u && /* @__PURE__ */ s.createElement("option", { value: "Loading..." }, "Loading..."),
      T(e) && /* @__PURE__ */ s.createElement("option", { key: "select", value: "" }, e.resetLabel || "- Select -"),
      m
    ), u && /* @__PURE__ */ s.createElement(H, { spinnerType: "text-secondary" })));
  }), G && /* @__PURE__ */ s.createElement(
    "button",
    {
      className: "btn btn-primary mb-1",
      onClick: A,
      disabled: d.some((e) => {
        const a = [void 0, "", "- Select -"];
        return a.includes(y[e].queuedActive) && a.includes(y[e].active);
      })
    },
    D || "GO!"
  ));
};
export {
  U as D
};
