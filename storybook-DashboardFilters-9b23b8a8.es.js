import { a as r, j as n, F as M } from "./storybook-jsx-runtime-ea6e0d87.es.js";
import { R } from "./storybook-index-f2fed736.es.js";
import { M as C } from "./storybook-MultiSelect-cda00383.es.js";
import { F as b } from "./storybook-FilterStyles-fd509eb9.es.js";
import { N as H } from "./storybook-NestedDropdown-92b50717.es.js";
import { L as Y } from "./storybook-Loader-0256c39d.es.js";
import { _ as P } from "./storybook-lodash-a4231e1c.es.js";
import { D as W } from "./storybook-Dropdown-1c93166f.es.js";
const I = ({
  show: v,
  filters: h,
  apiFilterDropdowns: d,
  handleOnChange: g,
  showSubmit: A,
  applyFilters: T,
  applyFiltersButtonText: E
}) => {
  const _ = (e) => {
    const s = e.queuedActive || e.active;
    return s == null || s === "";
  }, y = (e, s, l, c) => {
    g(l, c);
  }, q = (e) => e.replace(/\s\(\d+\)$/, ""), F = (e) => {
    if (!e)
      return [];
    const s = (l, c) => c ? [l, c] : [l];
    return e.map(({ value: l, text: c, subOptions: p }) => [
      s(l, c),
      (p || []).map(({ value: u, text: t }) => s(u, t))
    ]);
  };
  return /* @__PURE__ */ r("form", { className: "d-flex flex-wrap", children: [
    h.map((e, s) => {
      var $, S, D, N, G, k;
      const l = e.type === "urlfilter", c = q(e.key || "");
      if (!l && !e.showDropdown && e.filterStyle !== b.nestedDropdown || v && !v.includes(s))
        return /* @__PURE__ */ n(R.Fragment, {}, `${e.key}-filtersection-${s}-option`);
      const p = [], u = ($ = e.apiFilter) == null ? void 0 : $.apiEndpoint, t = d[u] === null, L = [], V = Object.entries(((S = e == null ? void 0 : e.subGrouping) == null ? void 0 : S.valuesLookup) || {}).map(
        ([a, o]) => [
          [a, a],
          // Main option: [value, text]
          Array.isArray(o == null ? void 0 : o.values) ? o.values.map((m) => [m, m]) : []
          // Ensure `values` is an array
        ]
      ), j = P.get(
        (D = e == null ? void 0 : e.subGrouping) == null ? void 0 : D.valuesLookup,
        [e == null ? void 0 : e.active, "values", 0],
        null
        // Default to null if the path is invalid
      );
      if (u && d[u])
        e.filterStyle !== b.nestedDropdown && d[u].forEach(({ text: a, value: o }, m) => {
          p.push(
            /* @__PURE__ */ n("option", { value: o, children: a }, `${o}-option-${m}`)
          ), L.push({ value: o, label: a });
        });
      else {
        const a = e.orderedValues || e.values;
        a == null || a.forEach((o, m) => {
          const i = e.labels && e.labels[o];
          (o || i) === e.resetLabel ? p.unshift(
            /* @__PURE__ */ n("option", { value: o, children: i || o }, `${e.key}-option-${m}`)
          ) : p.push(
            /* @__PURE__ */ n("option", { value: o, children: i || o }, `${e.key}-option-${m}`)
          ), L.push({ value: o, label: i || o });
        });
      }
      const w = !p.length;
      return e.resetLabel && !e.values.includes(e.resetLabel) && p.unshift(
        /* @__PURE__ */ n("option", { value: e.resetLabel, children: e.resetLabel }, `${e.resetLabel}-option`)
      ), /* @__PURE__ */ r("div", { className: `form-group me-4 mb-1${t ? " loading-filter" : ""}`, children: [
        c && /* @__PURE__ */ n("label", { className: "font-weight-bold mb-2", htmlFor: `filter-${s}`, children: c }),
        e.filterStyle === b.multiSelect ? /* @__PURE__ */ n(
          C,
          {
            label: c,
            options: L,
            fieldName: s,
            updateField: y,
            selected: e.active,
            limit: e.selectLimit || 5,
            loading: t
          }
        ) : e.filterStyle === b.nestedDropdown ? /* @__PURE__ */ n(
          H,
          {
            activeGroup: ((N = e.queuedActive) == null ? void 0 : N[0]) || e.active,
            activeSubGroup: u ? ((G = e.queuedActive) == null ? void 0 : G[1]) || ((k = e.subGrouping) == null ? void 0 : k.active) : j,
            filterIndex: s,
            options: u ? F(d[u]) : V,
            listLabel: c,
            handleSelectedItems: (a) => y(null, null, s, a),
            loading: t
          }
        ) : /* @__PURE__ */ r(M, { children: [
          /* @__PURE__ */ r(
            "select",
            {
              id: `filter-${s}`,
              className: `cove-form-select ${W}`,
              "data-index": "0",
              value: t ? "Loading..." : e.queuedActive || e.active,
              onChange: (a) => {
                g(s, a.target.value);
              },
              disabled: t || w,
              children: [
                t && /* @__PURE__ */ n("option", { value: "Loading...", children: "Loading..." }),
                _(e) && /* @__PURE__ */ n("option", { value: "", children: e.resetLabel || "- Select -" }, "select"),
                p
              ]
            }
          ),
          t && /* @__PURE__ */ n(Y, { spinnerType: "text-secondary" })
        ] })
      ] }, `${e.key}-filtersection-${s}`);
    }),
    A && /* @__PURE__ */ n(
      "button",
      {
        className: "btn btn-primary mb-1",
        onClick: T,
        disabled: v.some((e) => {
          const s = [void 0, "", "- Select -"];
          return s.includes(h[e].queuedActive) && s.includes(h[e].active);
        }),
        children: E || "GO!"
      }
    )
  ] });
};
export {
  I as D
};
