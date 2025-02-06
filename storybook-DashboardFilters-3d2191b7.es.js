import { R as t } from "./storybook-index-45401197.es.js";
import { M as R } from "./storybook-MultiSelect-d587cce3.es.js";
import { F as b } from "./storybook-FilterStyles-fd509eb9.es.js";
import { N as C } from "./storybook-NestedDropdown-bc9acc77.es.js";
import { L as H } from "./storybook-Loader-f4ec7b29.es.js";
import { _ as j } from "./storybook-lodash-a4231e1c.es.js";
const U = ({
  show: v,
  filters: d,
  apiFilterDropdowns: r,
  handleOnChange: y,
  showSubmit: G,
  applyFilters: A,
  applyFiltersButtonText: D
}) => {
  const T = (e) => {
    const a = e.queuedActive || e.active;
    return a == null || a === "";
  }, E = (e, a, m, o) => {
    y(m, o);
  }, q = (e) => e.replace(/\s\(\d+\)$/, ""), F = (e) => {
    if (!e)
      return [];
    const a = (m, o) => o ? [m, o] : [m];
    return e.map(({ value: m, text: o, subOptions: p }) => [
      a(m, o),
      (p || []).map(({ value: c, text: u }) => a(c, u))
    ]);
  };
  return /* @__PURE__ */ t.createElement("form", { className: "d-flex flex-wrap" }, d.map((e, a) => {
    var L, g, k, $, S, h, N;
    const m = e.type === "urlfilter", o = q(e.key || "");
    if (!m && !e.showDropdown && e.filterStyle !== b.nestedDropdown || v && !v.includes(a))
      return /* @__PURE__ */ t.createElement(t.Fragment, { key: `${e.key}-filtersection-${a}-option` });
    const p = [], c = (L = e.apiFilter) == null ? void 0 : L.apiEndpoint, u = r[c] === null, i = [], V = Object.entries(((g = e == null ? void 0 : e.subGrouping) == null ? void 0 : g.valuesLookup) || {}).map(
      ([s, n]) => [
        [s, s],
        // Main option: [value, text]
        Array.isArray(n == null ? void 0 : n.values) ? n.values.map((l) => [l, l]) : []
        // Ensure `values` is an array
      ]
    ), _ = j.get(
      (k = e == null ? void 0 : e.subGrouping) == null ? void 0 : k.valuesLookup,
      [e == null ? void 0 : e.active, "values", 0],
      null
      // Default to null if the path is invalid
    );
    c && r[c] ? e.filterStyle !== b.nestedDropdown && r[c].forEach(({ text: s, value: n }, l) => {
      p.push(
        /* @__PURE__ */ t.createElement("option", { key: `${n}-option-${l}`, value: n }, s)
      ), i.push({ value: n, label: s });
    }) : ($ = e.values) == null || $.forEach((s, n) => {
      const l = e.labels && e.labels[s];
      (s || l) === e.resetLabel ? p.unshift(
        /* @__PURE__ */ t.createElement("option", { key: `${e.key}-option-${n}`, value: s }, l || s)
      ) : p.push(
        /* @__PURE__ */ t.createElement("option", { key: `${e.key}-option-${n}`, value: s }, l || s)
      ), i.push({ value: s, label: l || s });
    });
    const w = !p.length;
    e.resetLabel && !e.values.includes(e.resetLabel) && p.unshift(
      /* @__PURE__ */ t.createElement("option", { key: `${e.resetLabel}-option`, value: e.resetLabel }, e.resetLabel)
    );
    const M = `form-group me-4 mb-1${u ? " loading-filter" : ""}`;
    return /* @__PURE__ */ t.createElement("div", { className: M, key: `${e.key}-filtersection-${a}` }, o && /* @__PURE__ */ t.createElement("label", { className: "font-weight-bold mb-2", htmlFor: `filter-${a}` }, o), e.filterStyle === b.multiSelect ? /* @__PURE__ */ t.createElement(
      R,
      {
        label: o,
        options: i,
        fieldName: a,
        updateField: E,
        selected: e.active,
        limit: e.selectLimit || 5,
        loading: u
      }
    ) : e.filterStyle === b.nestedDropdown ? /* @__PURE__ */ t.createElement(
      C,
      {
        activeGroup: ((S = e.queuedActive) == null ? void 0 : S[0]) || e.active,
        activeSubGroup: c ? ((h = e.queuedActive) == null ? void 0 : h[1]) || ((N = e.subGrouping) == null ? void 0 : N.active) : _,
        filterIndex: a,
        options: c ? F(r[c]) : V,
        listLabel: o,
        handleSelectedItems: (s) => E(null, null, a, s),
        loading: u
      }
    ) : /* @__PURE__ */ t.createElement(t.Fragment, null, /* @__PURE__ */ t.createElement(
      "select",
      {
        id: `filter-${a}`,
        className: "cove-form-select",
        "data-index": "0",
        value: u ? "Loading..." : e.queuedActive || e.active,
        onChange: (s) => {
          y(a, s.target.value);
        },
        disabled: u || w
      },
      u && /* @__PURE__ */ t.createElement("option", { value: "Loading..." }, "Loading..."),
      T(e) && /* @__PURE__ */ t.createElement("option", { key: "select", value: "" }, e.resetLabel || "- Select -"),
      p
    ), u && /* @__PURE__ */ t.createElement(H, { spinnerType: "text-secondary" })));
  }), G && /* @__PURE__ */ t.createElement(
    "button",
    {
      className: "btn btn-primary mb-1",
      onClick: A,
      disabled: v.some((e) => {
        const a = [void 0, "", "- Select -"];
        return a.includes(d[e].queuedActive) && a.includes(d[e].active);
      })
    },
    D || "GO!"
  ));
};
export {
  U as D
};
