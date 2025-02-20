import { a as i, j as n, F as M } from "./storybook-jsx-runtime-36872362.es.js";
import { R as C } from "./storybook-index-45401197.es.js";
import { M as R } from "./storybook-MultiSelect-09077870.es.js";
import { F as r } from "./storybook-FilterStyles-fd509eb9.es.js";
import { N as H } from "./storybook-NestedDropdown-43ca2e78.es.js";
import { L as Y } from "./storybook-Loader-2db99cd1.es.js";
import { _ as z } from "./storybook-lodash-a4231e1c.es.js";
const x = ({
  show: v,
  filters: h,
  apiFilterDropdowns: d,
  handleOnChange: g,
  showSubmit: D,
  applyFilters: T,
  applyFiltersButtonText: q
}) => {
  const E = (e) => {
    const s = e.queuedActive || e.active;
    return s == null || s === "";
  }, y = (e, s, l, c) => {
    g(l, c);
  }, F = (e) => e.replace(/\s\(\d+\)$/, ""), V = (e) => {
    if (!e)
      return [];
    const s = (l, c) => c ? [l, c] : [l];
    return e.map(({ value: l, text: c, subOptions: p }) => [
      s(l, c),
      (p || []).map(({ value: u, text: t }) => s(u, t))
    ]);
  };
  return /* @__PURE__ */ i("form", { className: "d-flex flex-wrap", children: [
    h.map((e, s) => {
      var $, S, G, N, k, A;
      const l = e.type === "urlfilter", c = F(e.key || "");
      if (!l && !e.showDropdown && e.filterStyle !== r.nestedDropdown || v && !v.includes(s))
        return /* @__PURE__ */ n(C.Fragment, {}, `${e.key}-filtersection-${s}-option`);
      const p = [], u = ($ = e.apiFilter) == null ? void 0 : $.apiEndpoint, t = d[u] === null, L = [], _ = Object.entries(((S = e == null ? void 0 : e.subGrouping) == null ? void 0 : S.valuesLookup) || {}).map(
        ([a, o]) => [
          [a, a],
          // Main option: [value, text]
          Array.isArray(o == null ? void 0 : o.values) ? o.values.map((m) => [m, m]) : []
          // Ensure `values` is an array
        ]
      ), j = z.get(
        (G = e == null ? void 0 : e.subGrouping) == null ? void 0 : G.valuesLookup,
        [e == null ? void 0 : e.active, "values", 0],
        null
        // Default to null if the path is invalid
      );
      if (u && d[u])
        e.filterStyle !== r.nestedDropdown && d[u].forEach(({ text: a, value: o }, m) => {
          p.push(
            /* @__PURE__ */ n("option", { value: o, children: a }, `${o}-option-${m}`)
          ), L.push({ value: o, label: a });
        });
      else {
        const a = e.orderedValues || e.values;
        a == null || a.forEach((o, m) => {
          const b = e.labels && e.labels[o];
          (o || b) === e.resetLabel ? p.unshift(
            /* @__PURE__ */ n("option", { value: o, children: b || o }, `${e.key}-option-${m}`)
          ) : p.push(
            /* @__PURE__ */ n("option", { value: o, children: b || o }, `${e.key}-option-${m}`)
          ), L.push({ value: o, label: b || o });
        });
      }
      const w = !p.length;
      return e.resetLabel && !e.values.includes(e.resetLabel) && p.unshift(
        /* @__PURE__ */ n("option", { value: e.resetLabel, children: e.resetLabel }, `${e.resetLabel}-option`)
      ), /* @__PURE__ */ i("div", { className: `form-group me-4 mb-1${t ? " loading-filter" : ""}`, children: [
        c && /* @__PURE__ */ n("label", { className: "font-weight-bold mb-2", htmlFor: `filter-${s}`, children: c }),
        e.filterStyle === r.multiSelect ? /* @__PURE__ */ n(
          R,
          {
            label: c,
            options: L,
            fieldName: s,
            updateField: y,
            selected: e.active,
            limit: e.selectLimit || 5,
            loading: t
          }
        ) : e.filterStyle === r.nestedDropdown ? /* @__PURE__ */ n(
          H,
          {
            activeGroup: ((N = e.queuedActive) == null ? void 0 : N[0]) || e.active,
            activeSubGroup: u ? ((k = e.queuedActive) == null ? void 0 : k[1]) || ((A = e.subGrouping) == null ? void 0 : A.active) : j,
            filterIndex: s,
            options: u ? V(d[u]) : _,
            listLabel: c,
            handleSelectedItems: (a) => y(null, null, s, a),
            loading: t
          }
        ) : /* @__PURE__ */ i(M, { children: [
          /* @__PURE__ */ i(
            "select",
            {
              id: `filter-${s}`,
              className: "cove-form-select",
              "data-index": "0",
              value: t ? "Loading..." : e.queuedActive || e.active,
              onChange: (a) => {
                g(s, a.target.value);
              },
              disabled: t || w,
              children: [
                t && /* @__PURE__ */ n("option", { value: "Loading...", children: "Loading..." }),
                E(e) && /* @__PURE__ */ n("option", { value: "", children: e.resetLabel || "- Select -" }, "select"),
                p
              ]
            }
          ),
          t && /* @__PURE__ */ n(Y, { spinnerType: "text-secondary" })
        ] })
      ] }, `${e.key}-filtersection-${s}`);
    }),
    D && /* @__PURE__ */ n(
      "button",
      {
        className: "btn btn-primary mb-1",
        onClick: T,
        disabled: v.some((e) => {
          const s = [void 0, "", "- Select -"];
          return s.includes(h[e].queuedActive) && s.includes(h[e].active);
        }),
        children: q || "GO!"
      }
    )
  ] });
};
export {
  x as D
};
