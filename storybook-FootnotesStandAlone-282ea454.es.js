import { j as e, F as A, a as b } from "./storybook-jsx-runtime-ea6e0d87.es.js";
import { r as h } from "./storybook-index-f2fed736.es.js";
import { _ as O } from "./storybook-lodash-a4231e1c.es.js";
import { f as L } from "./storybook-footnoteSymbols-a3828433.es.js";
import { I as w } from "./storybook-InputSelect-4074d1ac.es.js";
import { u as I } from "./storybook-useDebounce-5d0290fd.es.js";
import { D as P } from "./storybook-Dropdown-1c93166f.es.js";
import { D as M } from "./storybook-DataTransform-cd90df2e.es.js";
import { f as R } from "./storybook-useDataVizClasses-2dec1abb.es.js";
import { L as _ } from "./storybook-Loader-0256c39d.es.js";
import { F as z } from "./storybook-Footnotes-42c638ea.es.js";
const U = h.memo((c) => {
  const {
    display: a = !0,
    label: p,
    tooltip: o,
    section: s = null,
    subsection: t = null,
    fieldName: u,
    updateField: m,
    value: l,
    type: r = "text",
    i: v = null,
    min: N = null,
    ...C
  } = c, [f, d] = h.useState(l), [y] = I(f, 500);
  h.useEffect(() => {
    typeof y == "string" && l !== y && m(s, t, u, y, v);
  }, [y]), h.useEffect(() => {
    d(l);
  }, [l]);
  let S = t ? `${s}-${t}-${u}` : `${s}-${t}-${u}`;
  const x = (D) => {
    r !== "number" || N === null || !D.target.value || N <= parseFloat(D.target.value) ? d(D.target.value) : d(N.toString());
  };
  let E = /* @__PURE__ */ e("input", { type: "text", name: S, onChange: x, ...C, value: f });
  return r === "textarea" && (E = /* @__PURE__ */ e("textarea", { name: S, onChange: x, ...C, value: f })), r === "number" && (E = /* @__PURE__ */ e("input", { type: "number", name: S, onChange: x, ...C, value: f })), r === "date" && (E = /* @__PURE__ */ e("input", { type: "date", name: S, onChange: x, ...C, value: f })), a ? /* @__PURE__ */ b("label", { children: [
    /* @__PURE__ */ b("span", { className: "edit-label column-heading", children: [
      p,
      o
    ] }),
    E
  ] }) : /* @__PURE__ */ e(A, {});
}), nt = h.memo((c) => {
  const {
    display: a = !0,
    label: p,
    value: o,
    fieldName: s,
    section: t = null,
    subsection: u = null,
    tooltip: m,
    updateField: l,
    ...r
  } = c;
  return a ? /* @__PURE__ */ b("label", { className: "checkbox column-heading", children: [
    /* @__PURE__ */ e(
      "input",
      {
        type: "checkbox",
        name: s,
        checked: o,
        onChange: (v) => {
          l(t, u, s, !o);
        },
        ...r
      }
    ),
    /* @__PURE__ */ b("span", { className: "edit-label", children: [
      p,
      m
    ] })
  ] }) : /* @__PURE__ */ e(A, {});
}), st = h.memo((c) => {
  const {
    display: a = !0,
    label: p,
    value: o,
    options: s,
    fieldName: t,
    section: u = null,
    subsection: m = null,
    required: l = !1,
    tooltip: r,
    updateField: v,
    initial: N,
    ...C
  } = c, f = s == null ? void 0 : s.map((d, y) => typeof d == "string" ? /* @__PURE__ */ e("option", { value: d, children: d }, y) : /* @__PURE__ */ e("option", { value: d.value, children: d.label }, y));
  return N && (f == null || f.unshift(
    /* @__PURE__ */ e("option", { value: "", children: N }, "initial")
  )), a ? /* @__PURE__ */ b("label", { children: [
    /* @__PURE__ */ b("span", { className: "edit-label", children: [
      p,
      r
    ] }),
    /* @__PURE__ */ e(
      "select",
      {
        className: `cove-form-select ${l && !o ? "warning" : ""} ${P}`,
        name: t,
        value: o,
        onChange: (d) => {
          v(u, m, t, d.target.value);
        },
        ...C,
        children: f
      }
    )
  ] }) : /* @__PURE__ */ e(A, {});
}), lt = ({ config: c, updateField: a, datasets: p }) => {
  var D, T, $, V, j, G;
  const o = c.footnotes || {}, [s, t] = h.useState(""), [u, m] = h.useState(!1), [l, r] = h.useState(p || {}), v = new M(), N = async (n) => {
    const { data: i, dataUrl: F } = l[n];
    if (!F)
      return i;
    let g = i;
    const K = F && !i, k = n !== o.dataKey;
    if (t(""), k || K) {
      m(!0);
      try {
        g = await R(F), g = v.autoStandardize(g);
      } catch {
        t("There was an issue loading the data source. Please check the datasource URL and try again.");
      }
      m(!1);
    }
    return g;
  }, C = () => {
    const n = [...o.staticFootnotes || [], { text: "Add Footnote Text" }];
    a("footnotes", null, "staticFootnotes", n);
  }, f = (n, i) => {
    const F = O.cloneDeep(o.staticFootnotes);
    F[n] = i, a("footnotes", null, "staticFootnotes", F);
  }, d = (n) => {
    const i = O.cloneDeep(o.staticFootnotes);
    i.splice(n, 1), a("footnotes", null, "staticFootnotes", i);
  }, y = (n) => [["", "--Select--"]].concat(n.map((i) => [i, i])), S = o.dataKey ? y(Object.keys(((T = (D = l[o.dataKey]) == null ? void 0 : D.data) == null ? void 0 : T[0]) || {})) : [], x = y(Object.keys(l)), E = async (n) => {
    if (n) {
      if (!l[n]) {
        const i = await N(n);
        r({ ...l, [n]: { ...l[n], data: i } });
      }
    } else
      a("footnotes", null, "dynamicFootnotes", {});
    a("footnotes", null, "dataKey", n);
  };
  return /* @__PURE__ */ b(A, { children: [
    u && /* @__PURE__ */ e(_, { fullScreen: !0 }),
    /* @__PURE__ */ e("em", { children: "Dynamic Footnotes" }),
    /* @__PURE__ */ b("div", { className: "row border p-2", children: [
      /* @__PURE__ */ e(
        w,
        {
          label: "Select a Footnote Dataset",
          value: o.dataKey,
          options: x,
          fieldName: "dataKey",
          updateField: (n, i, F, g) => {
            E(g);
          }
        }
      ),
      s && /* @__PURE__ */ e("p", { className: "text-danger", children: s }),
      o.dataKey && /* @__PURE__ */ b("div", { className: "p-3", children: [
        /* @__PURE__ */ e(
          w,
          {
            label: "Footnote Symbol Column",
            value: ($ = o.dynamicFootnotes) == null ? void 0 : $.symbolColumn,
            options: S,
            section: "footnotes",
            subsection: "dynamicFootnotes",
            fieldName: "symbolColumn",
            updateField: a
          }
        ),
        /* @__PURE__ */ e(
          w,
          {
            label: "Footnote Text Column",
            value: (V = o.dynamicFootnotes) == null ? void 0 : V.textColumn,
            options: S,
            section: "footnotes",
            subsection: "dynamicFootnotes",
            fieldName: "textColumn",
            updateField: a
          }
        ),
        /* @__PURE__ */ e(
          w,
          {
            label: "Footnote Order Column",
            value: (j = o.dynamicFootnotes) == null ? void 0 : j.orderColumn,
            options: S,
            section: "footnotes",
            subsection: "dynamicFootnotes",
            fieldName: "orderColumn",
            updateField: a
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e("hr", {}),
    /* @__PURE__ */ e("em", { children: "Static Footnotes" }),
    (G = o.staticFootnotes) == null ? void 0 : G.map((n, i) => /* @__PURE__ */ b("div", { className: "row border p-2", children: [
      /* @__PURE__ */ b("div", { className: "col-8", children: [
        /* @__PURE__ */ e(
          w,
          {
            label: "Symbol",
            value: n.symbol,
            options: [["", "--Select--"], ...L],
            fieldName: "symbol",
            updateField: (F, g, K, k) => f(i, { ...n, symbol: k })
          }
        ),
        " ",
        /* @__PURE__ */ e(
          U,
          {
            label: "Text",
            value: n.text,
            fieldName: "text",
            updateField: (F, g, K, k) => f(i, { ...n, text: k })
          }
        )
      ] }),
      /* @__PURE__ */ e("div", { className: "col-2 ms-4", children: /* @__PURE__ */ e("button", { className: "btn btn-danger p-1", onClick: () => d(i), children: "Delete" }) })
    ] }, i)),
    /* @__PURE__ */ e("button", { className: "btn btn-primary", onClick: C, children: "Add Static Footnote" })
  ] });
}, q = (c, a) => {
  if (!a)
    return console.warn("COVE: No data to filter"), [];
  if (!c)
    return a;
  const p = [];
  return a == null || a.forEach((o) => {
    let s = !0;
    c.filter((t) => t.type !== "url").forEach((t) => {
      if (t.active === void 0)
        return;
      const u = o[t.columnName];
      if (Array.isArray(t.active) ? t.active.includes(u) || (s = !1) : u != t.active && (s = !1), t.filterStyle === "nested-dropdown" && t.subGrouping && s === !0) {
        const m = t.subGrouping.active, l = o[t.subGrouping.columnName];
        if (m === void 0)
          return;
        l != m && (s = !1);
      }
    }), s && p.push(o);
  }), p;
}, ct = ({ config: c, filters: a }) => {
  if (!c)
    return null;
  const p = h.useMemo(() => {
    const s = q(a, c.data);
    if (s && c.dataKey && c.dynamicFootnotes) {
      const { symbolColumn: t, textColumn: u, orderColumn: m } = c.dynamicFootnotes, l = s.map((r) => O.pick(r, [t, u, m]));
      return l.sort((r, v) => r[m] - v[m]), l.map((r) => ({ symbol: r[t], text: r[u] }));
    }
    return [];
  }, [c.dynamicFootnotes, c.data, a]), o = c.staticFootnotes || [];
  return /* @__PURE__ */ e(z, { footnotes: [...p, ...o] });
};
export {
  nt as C,
  lt as F,
  st as S,
  U as T,
  ct as a,
  q as f
};
