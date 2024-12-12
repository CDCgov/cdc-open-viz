import { R as o } from "./storybook-index-45401197.es.js";
import { M as _ } from "./storybook-MultiSelect-d587cce3.es.js";
import { N as q } from "./storybook-NestedDropdown-59c5aa02.es.js";
import { L as R } from "./storybook-Loader-f4ec7b29.es.js";
import { _ as C } from "./storybook-lodash-a4231e1c.es.js";
const d = {
  nestedDropdown: "nested-dropdown",
  multiSelect: "multi-select",
  dropdown: "dropdown"
}, H = ({
  show: i,
  filters: b,
  apiFilterDropdowns: r,
  handleOnChange: y,
  showSubmit: N,
  applyFilters: h,
  applyFiltersButtonText: w
}) => {
  const G = (e) => {
    const t = e.queuedActive || e.active;
    return t == null || t === "";
  }, E = (e, t, u, n) => {
    y(u, n);
  }, D = (e) => {
    if (!e)
      return [];
    const t = (u, n) => n ? [u, n] : [u];
    return e.map(({ value: u, text: n, subOptions: m }) => [
      t(u, n),
      (m || []).map(({ value: c, text: l }) => t(c, l))
    ]);
  };
  return /* @__PURE__ */ o.createElement("form", { className: "d-flex flex-wrap" }, b.map((e, t) => {
    var g, L, S, $, k;
    const u = e.type === "urlfilter", n = e.key;
    if (!u && !e.showDropdown && e.filterStyle !== d.nestedDropdown || i && !i.includes(t))
      return /* @__PURE__ */ o.createElement(o.Fragment, { key: `${n}-filtersection-${t}-option` });
    const m = [], c = (g = e.apiFilter) == null ? void 0 : g.apiEndpoint, l = r[c] === null, v = [], T = Object.entries(((L = e == null ? void 0 : e.subGrouping) == null ? void 0 : L.valuesLookup) || {}).map(
      ([s, a]) => [
        [s, s],
        // Main option: [value, text]
        Array.isArray(a == null ? void 0 : a.values) ? a.values.map((p) => [p, p]) : []
        // Ensure `values` is an array
      ]
    ), A = C.get(
      (S = e == null ? void 0 : e.subGrouping) == null ? void 0 : S.valuesLookup,
      [e == null ? void 0 : e.active, "values", 0],
      null
      // Default to null if the path is invalid
    );
    c && r[c] ? e.filterStyle !== d.nestedDropdown && r[c].forEach(({ text: s, value: a }, p) => {
      m.push(
        /* @__PURE__ */ o.createElement("option", { key: `${a}-option-${p}`, value: a }, s)
      ), v.push({ value: a, label: s });
    }) : ($ = e.values) == null || $.forEach((s, a) => {
      const p = e.labels && e.labels[s];
      m.push(
        /* @__PURE__ */ o.createElement("option", { key: `${e.key}-option-${a}`, value: s }, p || s)
      ), v.push({ value: s, label: p || s });
    });
    const F = !m.length;
    e.resetLabel && m.unshift(
      /* @__PURE__ */ o.createElement("option", { key: `${e.resetLabel}-option`, value: e.resetLabel }, e.resetLabel)
    );
    const V = `form-group mr-3 mb-1${l ? " loading-filter" : ""}`;
    return /* @__PURE__ */ o.createElement("div", { className: V, key: `${n}-filtersection-${t}` }, n && /* @__PURE__ */ o.createElement("label", { className: "font-weight-bold mt-1 mb-0", htmlFor: `filter-${t}` }, n), e.filterStyle === d.multiSelect ? /* @__PURE__ */ o.createElement(
      _,
      {
        label: n,
        options: v,
        fieldName: t,
        updateField: E,
        selected: e.active,
        limit: e.selectLimit || 5,
        loading: l
      }
    ) : e.filterStyle === d.nestedDropdown ? /* @__PURE__ */ o.createElement(
      q,
      {
        activeGroup: e.active,
        activeSubGroup: c ? (k = e.subGrouping) == null ? void 0 : k.active : A,
        filterIndex: t,
        options: c ? D(r[c]) : T,
        listLabel: n,
        handleSelectedItems: (s) => E(null, null, t, s),
        loading: l
      }
    ) : /* @__PURE__ */ o.createElement(o.Fragment, null, /* @__PURE__ */ o.createElement(
      "select",
      {
        id: `filter-${t}`,
        className: "cove-form-select",
        "data-index": "0",
        value: l ? "Loading..." : e.queuedActive || e.active,
        onChange: (s) => {
          y(t, s.target.value);
        },
        disabled: l || F
      },
      l && /* @__PURE__ */ o.createElement("option", { value: "Loading..." }, "Loading..."),
      G(e) && /* @__PURE__ */ o.createElement("option", { key: "select", value: "" }, e.resetLabel || "- Select -"),
      m
    ), l && /* @__PURE__ */ o.createElement(R, { spinnerType: "text-secondary" })));
  }), N && /* @__PURE__ */ o.createElement(
    "button",
    {
      className: "btn btn-primary mb-1",
      onClick: h,
      disabled: i.some((e) => {
        const t = [void 0, "", "- Select -"];
        return t.includes(b[e].queuedActive) && t.includes(b[e].active);
      })
    },
    w || "GO!"
  ));
};
export {
  H as D,
  d as F
};
