import { j as e, a as i, F as le } from "./storybook-jsx-runtime-ea6e0d87.es.js";
import { r as p } from "./storybook-index-f2fed736.es.js";
import { _ as ke } from "./storybook-lodash-a4231e1c.es.js";
import { A as Pe, a as oe, b as ce, c as se, d as ue, D as Me } from "./storybook-DataTransform-d4bb56a2.es.js";
import { a as me, b as Le } from "./storybook-Icon-e250778e.es.js";
import { T as Y } from "./storybook-Tooltip-7cf39805.es.js";
import { E as Be, L as Ve } from "./storybook-viewports-61111b6b.es.js";
import { u as ze } from "./storybook-updateFieldFactory-c006040a.es.js";
import { T as Ue } from "./storybook-index-4a64ea6e.es.js";
import { c as qe, n as Ge } from "./storybook-index-80cf478c.es.js";
import { L as ie, u as je, p as he } from "./storybook-useDataVizClasses-3bf30247.es.js";
import { b as We, g as $e } from "./storybook-getViewport-cf99c09b.es.js";
import { p as pe } from "./storybook-index-31bf6905.es.js";
import { f as He } from "./storybook-fetchRemoteData-d0119f0b.es.js";
import { c as Ze } from "./storybook-coveUpdateWorker-2b7600bb.es.js";
const de = {
  type: "data-bite",
  data: [],
  dataBite: "",
  dataFunction: "",
  dataColumn: "",
  bitePosition: "Left",
  biteFontSize: 24,
  fontSize: "medium",
  biteBody: "",
  imageData: {
    display: "none",
    url: "",
    alt: "",
    options: []
  },
  dataFormat: {
    roundToPlace: 0,
    commas: !0,
    prefix: "",
    suffix: "%"
  },
  biteStyle: "graphic",
  filters: [],
  subtext: "",
  title: "",
  theme: "theme-blue",
  shadow: !1,
  visual: {
    border: !1,
    accent: !1,
    background: !1,
    hideBackgroundColor: !1,
    borderColorTheme: !1,
    showTitle: !0
  },
  general: {
    isCompactStyle: !1
  }
}, Te = p.createContext({});
function Qe(t, r, m) {
  var v = this, f = p.useRef(null), E = p.useRef(0), T = p.useRef(null), A = p.useRef([]), O = p.useRef(), c = p.useRef(), a = p.useRef(t), C = p.useRef(!0);
  a.current = t;
  var k = !r && r !== 0 && typeof window < "u";
  if (typeof t != "function")
    throw new TypeError("Expected a function");
  r = +r || 0, m = m || {};
  var j = !!m.leading, U = "trailing" in m ? !!m.trailing : !0, P = "maxWait" in m, L = P ? Math.max(+m.maxWait || 0, r) : null;
  p.useEffect(function() {
    return C.current = !0, function() {
      C.current = !1;
    };
  }, []);
  var x = p.useMemo(function() {
    var _ = function(D) {
      var R = A.current, B = O.current;
      return A.current = O.current = null, E.current = D, c.current = a.current.apply(B, R);
    }, K = function(D, R) {
      k && cancelAnimationFrame(T.current), T.current = k ? requestAnimationFrame(D) : setTimeout(D, R);
    }, W = function(D) {
      if (!C.current)
        return !1;
      var R = D - f.current, B = D - E.current;
      return !f.current || R >= r || R < 0 || P && B >= L;
    }, $ = function(D) {
      return T.current = null, U && A.current ? _(D) : (A.current = O.current = null, c.current);
    }, I = function() {
      var D = Date.now();
      if (W(D))
        return $(D);
      if (C.current) {
        var R = D - f.current, B = D - E.current, Q = r - R, ae = P ? Math.min(Q, L - B) : Q;
        K(I, ae);
      }
    }, X = function() {
      for (var D = [], R = 0; R < arguments.length; R++)
        D[R] = arguments[R];
      var B = Date.now(), Q = W(B);
      if (A.current = D, O.current = v, f.current = B, Q) {
        if (!T.current && C.current)
          return E.current = f.current, K(I, r), j ? _(f.current) : c.current;
        if (P)
          return K(I, r), _(f.current);
      }
      return T.current || K(I, r), c.current;
    };
    return X.cancel = function() {
      T.current && (k ? cancelAnimationFrame(T.current) : clearTimeout(T.current)), E.current = 0, A.current = f.current = O.current = T.current = null;
    }, X.isPending = function() {
      return !!T.current;
    }, X.flush = function() {
      return T.current ? $(Date.now()) : c.current;
    }, X;
  }, [j, P, r, L, U, k]);
  return x;
}
function Je(t, r) {
  return t === r;
}
function ge(t) {
  return typeof t == "function" ? function() {
    return t;
  } : t;
}
function Xe(t) {
  var r = p.useState(ge(t)), m = r[0], v = r[1], f = p.useCallback(function(E) {
    return v(ge(E));
  }, []);
  return [m, f];
}
function Ye(t, r, m) {
  var v = m && m.equalityFn || Je, f = Xe(t), E = f[0], T = f[1], A = Qe(p.useCallback(function(c) {
    return T(c);
  }, [T]), r, m), O = p.useRef(t);
  return v(O.current, t) || (A(t), O.current = t), [E, A];
}
const Z = p.memo(
  ({
    label: t,
    section: r = null,
    subsection: m = null,
    fieldName: v,
    updateField: f,
    value: E,
    tooltip: T,
    type: A = "input",
    i: O = null,
    min: c = null,
    max: a = null,
    ...C
  }) => {
    const [k, j] = p.useState(E), [U] = Ye(k, 500);
    p.useEffect(() => {
      typeof U == "string" && E !== U && f(r, m, v, U, O);
    }, [U, r, m, v, O, E, f]);
    let P = m ? `${r}-${m}-${v}` : `${r}-${m}-${v}`;
    const L = (_) => {
      A !== "number" || c === null || !_.target.value || parseFloat(c) <= parseFloat(_.target.value) & parseFloat(a) >= parseFloat(_.target.value) ? j(_.target.value) : j(c.toString());
    };
    let x = /* @__PURE__ */ e("input", { type: "text", name: P, onChange: L, ...C, value: k });
    return A === "textarea" && (x = /* @__PURE__ */ e("textarea", { name: P, onChange: L, ...C, value: k })), A === "number" && (x = /* @__PURE__ */ e("input", { type: "number", name: P, onChange: L, ...C, value: k })), /* @__PURE__ */ i(le, { children: [
      t && t.length > 0 && /* @__PURE__ */ i("label", { children: [
        /* @__PURE__ */ i("span", { className: "edit-label column-heading", children: [
          t,
          T
        ] }),
        x
      ] }),
      (!t || t.length === 0) && x
    ] });
  }
), ee = p.memo(
  ({ label: t, value: r, fieldName: m, section: v = null, subsection: f = null, tooltip: E, updateField: T, ...A }) => /* @__PURE__ */ i("label", { className: "checkbox", children: [
    /* @__PURE__ */ e(
      "input",
      {
        type: "checkbox",
        name: m,
        checked: r,
        onChange: () => {
          T(v, f, m, !r);
        },
        ...A
      }
    ),
    /* @__PURE__ */ e("span", { className: "edit-label column-heading", children: t }),
    /* @__PURE__ */ e("span", { className: "cove-icon", children: E })
  ] })
), re = p.memo(
  ({
    label: t,
    value: r,
    options: m,
    fieldName: v,
    section: f = null,
    subsection: E = null,
    required: T = !1,
    updateField: A,
    initial: O,
    ...c
  }) => {
    let a = "";
    if (Array.isArray(m))
      a = m.map((C) => /* @__PURE__ */ e("option", { value: C, children: C }, C));
    else {
      a = [];
      for (const [C, k] of Object.entries(m))
        a.push(
          /* @__PURE__ */ e("option", { value: C, children: k }, C)
        );
    }
    return O && a.unshift(
      /* @__PURE__ */ e("option", { value: "", children: O }, "initial")
    ), /* @__PURE__ */ i("label", { children: [
      /* @__PURE__ */ e("span", { className: "edit-label", children: t }),
      /* @__PURE__ */ e(
        "select",
        {
          className: T && !r ? "warning" : "",
          name: v,
          value: r,
          onChange: (C) => {
            A(f, E, v, C.target.value);
          },
          ...c,
          children: a
        }
      )
    ] });
  }
), Ke = [
  "theme-blue",
  "theme-purple",
  "theme-brown",
  "theme-teal",
  "theme-pink",
  "theme-orange",
  "theme-slate",
  "theme-indigo",
  "theme-cyan",
  "theme-green",
  "theme-amber"
], be = p.memo(() => {
  var I, X, D, R, B, Q, ae;
  const { config: t, updateConfig: r, loading: m, data: v, setParentConfig: f, isDashboard: E, isEditor: T } = p.useContext(Te), [A, O] = p.useState(!0), c = ze(t, r, !0);
  p.useEffect(() => {
    if (f) {
      const l = C();
      delete l.newViz, f(l);
    }
  }, [t]);
  const a = () => {
    O(!A), r({
      ...t,
      showEditorPanel: !A
    });
  }, C = () => {
    let l = ke.cloneDeep(t);
    return delete l.runtime, l;
  }, k = (l) => {
    let o = [...t.filters];
    o.splice(l, 1), r({ ...t, filters: o });
  }, j = (l, o, d) => {
    let b = [...t.filters];
    b[o][l] = d, r({ ...t, filters: b });
  }, U = () => {
    let l = t.filters ? [...t.filters] : [];
    l.push({ values: [] }), r({ ...t, filters: l });
  }, P = (l = !0) => {
    let o = {};
    return v.length && v.map((d) => Object.keys(d).forEach((b) => o[b] = !0)), Object.keys(o);
  }, L = (l) => {
    let o = [];
    const d = t.filters[l].columnName;
    return v && d && (v.forEach(function(b) {
      b[d] !== void 0 && o.indexOf(b[d]) === -1 && o.push(b[d]);
    }), o.sort()), o;
  }, x = (l, o, d = null, b) => {
    let V = [...t.imageData.options];
    d === null ? V[o][l] = b : V[o].arguments[d][l] = b;
    let J = { ...t.imageData, options: V };
    r({ ...t, imageData: J });
  }, _ = (l, o, d) => {
    let b = [...t.imageData.options[l].arguments];
    b[1] = { ...b[1], [o]: d };
    let V = { ...t.imageData.options[l], arguments: b }, J = [...t.imageData.options];
    J[l] = V;
    let y = { ...t.imageData, options: J };
    r({ ...t, imageData: y });
  }, K = (l) => {
    if (t.imageData.options[l].arguments.length > 1) {
      let o = [...t.imageData.options[l].arguments];
      o.pop();
      let d = { ...t.imageData.options[l], arguments: o }, b = [...t.imageData.options];
      b[l] = d;
      let V = { ...t.imageData, options: b };
      r({ ...t, imageData: V });
    }
  }, W = () => {
    let l = t.imageData.options ? [...t.imageData.options] : [];
    l.push({ source: "", arguments: [{ operator: "", threshold: "" }], alt: "", secondArgument: !1 });
    let o = { ...t.imageData, options: l };
    r({ ...t, imageData: o });
  }, $ = (l) => {
    let o = [...t.imageData.options];
    o.splice(l, 1);
    let d = { ...t.imageData, options: o };
    r({ ...t, imageData: d });
  };
  return m ? null : /* @__PURE__ */ e(Be, { component: "EditorPanel", children: /* @__PURE__ */ e(
    ie.Sidebar,
    {
      isEditor: !0,
      config: t,
      title: "Configure Data Bites",
      onBackClick: a,
      displayPanel: A,
      children: /* @__PURE__ */ e("section", { className: "form-container", children: /* @__PURE__ */ e("form", { children: /* @__PURE__ */ i(Pe, { allowZeroExpanded: !0, children: [
        /* @__PURE__ */ i(oe, { children: [
          " ",
          /* @__PURE__ */ e(ce, { children: /* @__PURE__ */ e(se, { children: "General" }) }),
          /* @__PURE__ */ i(ue, { children: [
            /* @__PURE__ */ e(
              re,
              {
                value: t.biteStyle,
                fieldName: "biteStyle",
                label: "Data Bite Style",
                updateField: c,
                options: rt,
                initial: "Select"
              }
            ),
            /* @__PURE__ */ e(
              Z,
              {
                value: t.title,
                fieldName: "title",
                label: "Title",
                placeholder: "Data Bite Title",
                updateField: c
              }
            ),
            /* @__PURE__ */ e(
              ee,
              {
                value: (I = t.visual) == null ? void 0 : I.showTitle,
                section: "visual",
                checked: (X = t.visual) == null ? void 0 : X.showTitle,
                fieldName: "showTitle",
                label: "Show Title",
                updateField: c
              }
            ),
            /* @__PURE__ */ e(
              Z,
              {
                type: "textarea",
                value: t.biteBody,
                fieldName: "biteBody",
                label: "Message",
                updateField: c,
                tooltip: /* @__PURE__ */ i(Y, { style: { textTransform: "none" }, children: [
                  /* @__PURE__ */ e(Y.Target, { children: /* @__PURE__ */ e(me, { display: "question", style: { marginLeft: "0.5rem" } }) }),
                  /* @__PURE__ */ e(Y.Content, { children: /* @__PURE__ */ e("p", { children: "Enter the message text for the visualization. The following HTML tags are supported: strong, em, sup, and sub." }) })
                ] })
              }
            ),
            /* @__PURE__ */ e(
              Z,
              {
                value: t.subtext,
                fieldName: "subtext",
                label: "Subtext/Citation",
                placeholder: "Data Bite Subtext or Citation",
                updateField: c,
                tooltip: /* @__PURE__ */ i(Y, { style: { textTransform: "none" }, children: [
                  /* @__PURE__ */ e(Y.Target, { children: /* @__PURE__ */ e(me, { display: "question", style: { marginLeft: "0.5rem" } }) }),
                  /* @__PURE__ */ e(Y.Content, { children: /* @__PURE__ */ e("p", { children: "Enter supporting text to display below the data visualization, if applicable. The following HTML tags are supported: strong, em, sup, and sub." }) })
                ] })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ i(oe, { children: [
          " ",
          /* @__PURE__ */ e(ce, { children: /* @__PURE__ */ i(se, { children: [
            "Data",
            " ",
            (!t.dataColumn || !t.dataFunction) && /* @__PURE__ */ e(Le, { width: "25", className: "warning-icon" })
          ] }) }),
          /* @__PURE__ */ i(ue, { children: [
            /* @__PURE__ */ e("ul", { className: "column-edit", children: /* @__PURE__ */ i("li", { className: "two-col", children: [
              /* @__PURE__ */ e(
                re,
                {
                  value: t.dataColumn || "",
                  fieldName: "dataColumn",
                  label: "Data Column",
                  updateField: c,
                  initial: "Select",
                  required: !0,
                  options: P()
                }
              ),
              /* @__PURE__ */ e(
                re,
                {
                  value: t.dataFunction || "",
                  fieldName: "dataFunction",
                  label: "Data Function",
                  updateField: c,
                  initial: "Select",
                  required: !0,
                  options: nt
                }
              )
            ] }) }),
            /* @__PURE__ */ e("span", { className: "divider-heading", children: "Number Formatting" }),
            /* @__PURE__ */ e("ul", { className: "column-edit", children: /* @__PURE__ */ i("li", { className: "three-col", children: [
              /* @__PURE__ */ e(
                Z,
                {
                  value: t.dataFormat.prefix,
                  section: "dataFormat",
                  fieldName: "prefix",
                  label: "Prefix",
                  updateField: c
                }
              ),
              /* @__PURE__ */ e(
                Z,
                {
                  value: t.dataFormat.suffix,
                  section: "dataFormat",
                  fieldName: "suffix",
                  label: "Suffix",
                  updateField: c
                }
              ),
              /* @__PURE__ */ e(
                Z,
                {
                  type: "number",
                  value: t.dataFormat.roundToPlace,
                  section: "dataFormat",
                  fieldName: "roundToPlace",
                  label: "Round",
                  updateField: c,
                  min: "0",
                  max: "99"
                }
              )
            ] }) }),
            /* @__PURE__ */ e(
              ee,
              {
                value: t.dataFormat.commas,
                section: "dataFormat",
                fieldName: "commas",
                label: "Add commas",
                updateField: c
              }
            ),
            /* @__PURE__ */ e(
              ee,
              {
                value: t.dataFormat.ignoreZeros,
                section: "dataFormat",
                fieldName: "ignoreZeros",
                label: "Ignore Zeros",
                updateField: c
              }
            ),
            /* @__PURE__ */ e("hr", { className: "accordion__divider" }),
            /* @__PURE__ */ e("label", { style: { marginBottom: "1rem" }, children: /* @__PURE__ */ i("span", { className: "edit-label", children: [
              "Data Point Filters",
              /* @__PURE__ */ i(Y, { style: { textTransform: "none" }, children: [
                /* @__PURE__ */ e(Y.Target, { children: /* @__PURE__ */ e(me, { display: "question", style: { marginLeft: "0.5rem" } }) }),
                /* @__PURE__ */ e(Y.Content, { children: /* @__PURE__ */ e("p", { children: 'To refine the highlighted data point, specify one or more filters (e.g., "Male" and "Female" for a column called "Sex").' }) })
              ] })
            ] }) }),
            t.filters && /* @__PURE__ */ e("ul", { className: "filters-list", children: t.filters.map((l, o) => /* @__PURE__ */ i("fieldset", { className: "edit-block", children: [
              /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  className: "remove-column",
                  onClick: () => {
                    k(o);
                  },
                  children: "Remove"
                }
              ),
              /* @__PURE__ */ i("label", { children: [
                /* @__PURE__ */ e("span", { className: "edit-label column-heading", children: "Column" }),
                /* @__PURE__ */ i(
                  "select",
                  {
                    value: l.columnName ? l.columnName : "",
                    onChange: (d) => {
                      j("columnName", o, d.target.value);
                    },
                    children: [
                      /* @__PURE__ */ e("option", { value: "", children: "- Select Option -" }),
                      P().map((d, b) => /* @__PURE__ */ e("option", { value: d, children: d }, b))
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ i("label", { children: [
                /* @__PURE__ */ e("span", { className: "edit-label column-heading", children: "Column Value" }),
                /* @__PURE__ */ i(
                  "select",
                  {
                    value: l.columnValue,
                    onChange: (d) => {
                      j("columnValue", o, d.target.value);
                    },
                    children: [
                      /* @__PURE__ */ e("option", { value: "", children: "- Select Option -" }),
                      L(o).map((d, b) => /* @__PURE__ */ e("option", { value: d, children: d }, b))
                    ]
                  }
                )
              ] })
            ] }, o)) }),
            (!t.filters || t.filters.length === 0) && /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("fieldset", { className: "edit-block", children: /* @__PURE__ */ e("p", { style: { textAlign: "center" }, children: "There are currently no filters." }) }) }),
            /* @__PURE__ */ e("button", { type: "button", onClick: U, className: "btn btn-primary full-width", children: "Add Filter" })
          ] })
        ] }),
        /* @__PURE__ */ i(oe, { children: [
          " ",
          /* @__PURE__ */ e(ce, { children: /* @__PURE__ */ e(se, { children: "Visual" }) }),
          /* @__PURE__ */ i(ue, { children: [
            /* @__PURE__ */ e(
              Z,
              {
                type: "number",
                value: t.biteFontSize,
                fieldName: "biteFontSize",
                label: "Bite Font Size",
                updateField: c,
                min: "17",
                max: "65"
              }
            ),
            /* @__PURE__ */ e(
              re,
              {
                value: t.fontSize,
                fieldName: "fontSize",
                label: "Overall Font Size",
                updateField: c,
                options: ["small", "medium", "large"]
              }
            ),
            /* @__PURE__ */ i("div", { className: "checkbox-group", children: [
              /* @__PURE__ */ e(
                ee,
                {
                  value: (D = t.visual) == null ? void 0 : D.border,
                  section: "visual",
                  fieldName: "border",
                  label: "Display Border",
                  updateField: c
                }
              ),
              /* @__PURE__ */ e(
                ee,
                {
                  value: (R = t.visual) == null ? void 0 : R.borderColorTheme,
                  section: "visual",
                  fieldName: "borderColorTheme",
                  label: "Use Border Color Theme",
                  updateField: c
                }
              ),
              /* @__PURE__ */ e(
                ee,
                {
                  value: (B = t.visual) == null ? void 0 : B.accent,
                  section: "visual",
                  fieldName: "accent",
                  label: "Use Accent Style",
                  updateField: c
                }
              ),
              /* @__PURE__ */ e(
                ee,
                {
                  value: (Q = t.visual) == null ? void 0 : Q.background,
                  section: "visual",
                  fieldName: "background",
                  label: "Use Theme Background Color",
                  updateField: c
                }
              ),
              /* @__PURE__ */ e(
                ee,
                {
                  value: (ae = t.visual) == null ? void 0 : ae.hideBackgroundColor,
                  section: "visual",
                  fieldName: "hideBackgroundColor",
                  label: "Hide Background Color",
                  updateField: c
                }
              )
            ] }),
            /* @__PURE__ */ i("label", { children: [
              /* @__PURE__ */ e("span", { className: "edit-label", children: "Theme" }),
              /* @__PURE__ */ e("ul", { className: "color-palette", children: Ke.map((l) => /* @__PURE__ */ e(
                "li",
                {
                  title: l,
                  onClick: () => {
                    r({ ...t, theme: l });
                  },
                  className: t.theme === l ? "selected " + l : l
                },
                l
              )) })
            ] })
          ] })
        ] }),
        ["title", "body", "graphic"].includes(t.biteStyle) && /* @__PURE__ */ i(oe, { children: [
          " ",
          /* @__PURE__ */ e(ce, { children: /* @__PURE__ */ i(se, { children: [
            "Image",
            ["dynamic"].includes(t.imageData.display) && "s"
          ] }) }),
          /* @__PURE__ */ i(ue, { children: [
            /* @__PURE__ */ e(
              re,
              {
                value: t.imageData.display || "",
                section: "imageData",
                fieldName: "display",
                label: "Image Display Type",
                updateField: c,
                options: ["none", "static", "dynamic"]
              }
            ),
            /* @__PURE__ */ e(
              re,
              {
                value: t.bitePosition || "",
                fieldName: "bitePosition",
                label: "Image/Graphic Position",
                updateField: c,
                initial: "Select",
                options: lt
              }
            ),
            ["static"].includes(t.imageData.display) && /* @__PURE__ */ i(le, { children: [
              /* @__PURE__ */ e(
                Z,
                {
                  value: t.imageData.url,
                  section: "imageData",
                  fieldName: "url",
                  label: "Image URL",
                  updateField: c
                }
              ),
              /* @__PURE__ */ e(
                Z,
                {
                  value: t.imageData.alt,
                  section: "imageData",
                  fieldName: "alt",
                  label: "Alt Text",
                  updateField: c
                }
              )
            ] }),
            ["dynamic"].includes(t.imageData.display) && /* @__PURE__ */ i(le, { children: [
              /* @__PURE__ */ e(
                Z,
                {
                  value: t.imageData.url || "",
                  section: "imageData",
                  fieldName: "url",
                  label: "Image URL (default)",
                  updateField: c
                }
              ),
              /* @__PURE__ */ e(
                Z,
                {
                  value: t.imageData.alt,
                  section: "imageData",
                  fieldName: "alt",
                  label: "Alt Text (default)",
                  updateField: c
                }
              ),
              /* @__PURE__ */ e("hr", { className: "accordion__divider" }),
              (!t.imageData.options || t.imageData.options.length === 0) && /* @__PURE__ */ e("p", { style: { textAlign: "center" }, children: "There are currently no dynamic images." }),
              t.imageData.options && t.imageData.options.length > 0 && /* @__PURE__ */ e(le, { children: /* @__PURE__ */ e("ul", { children: t.imageData.options.map((l, o) => {
                var d, b, V, J;
                return /* @__PURE__ */ i("fieldset", { className: "edit-block", children: [
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      className: "remove-column",
                      onClick: () => {
                        $(o);
                      },
                      children: "Remove"
                    }
                  ),
                  /* @__PURE__ */ i("label", { children: [
                    /* @__PURE__ */ e("span", { className: "edit-label column-heading", children: /* @__PURE__ */ e("strong", { children: "Image #" + (o + 1) }) }),
                    /* @__PURE__ */ i("div", { className: "accordion__panel-row align-center", children: [
                      /* @__PURE__ */ e("div", { className: "accordion__panel-col flex-auto", children: "If Value" }),
                      /* @__PURE__ */ e("div", { className: "accordion__panel-col flex-auto", children: /* @__PURE__ */ i(
                        "select",
                        {
                          value: ((d = l.arguments[0]) == null ? void 0 : d.operator) || "",
                          onChange: (y) => {
                            x("operator", o, 0, y.target.value);
                          },
                          children: [
                            /* @__PURE__ */ e("option", { value: "", disabled: !0 }),
                            Ne.map((y, u) => /* @__PURE__ */ e("option", { value: y, children: y }, u))
                          ]
                        }
                      ) }),
                      /* @__PURE__ */ e("div", { className: "accordion__panel-col flex-grow flex-shrink", children: /* @__PURE__ */ e(
                        "input",
                        {
                          type: "number",
                          value: ((b = l.arguments[0]) == null ? void 0 : b.threshold) || "",
                          onChange: (y) => {
                            x("threshold", o, 0, y.target.value);
                          }
                        }
                      ) })
                    ] }),
                    /* @__PURE__ */ e("div", { className: "accordion__panel-row mb-2 align-center", children: /* @__PURE__ */ e("div", { className: "accordion__panel-col flex-grow", children: /* @__PURE__ */ i(
                      "select",
                      {
                        className: "border-dashed text-center",
                        value: l.secondArgument ? "and" : "then",
                        onChange: (y) => {
                          y.target.value === "then" && (x("secondArgument", o, null, !1), K(o)), y.target.value === "and" && x("secondArgument", o, null, !0);
                        },
                        children: [
                          /* @__PURE__ */ e("option", { value: "then", children: "Then" }),
                          /* @__PURE__ */ e("option", { value: "and", children: "And" })
                        ]
                      }
                    ) }) }),
                    l.secondArgument && l.secondArgument === !0 && /* @__PURE__ */ i(le, { children: [
                      /* @__PURE__ */ i("div", { className: "accordion__panel-row align-center", children: [
                        /* @__PURE__ */ e("div", { className: "accordion__panel-col flex-auto", children: "If Value" }),
                        /* @__PURE__ */ e("div", { className: "accordion__panel-col flex-auto", children: /* @__PURE__ */ i(
                          "select",
                          {
                            value: ((V = l.arguments[1]) == null ? void 0 : V.operator) || "",
                            onChange: (y) => {
                              _(o, "operator", y.target.value);
                            },
                            children: [
                              /* @__PURE__ */ e("option", { value: "", disabled: !0 }),
                              Ne.map((y, u) => /* @__PURE__ */ e("option", { value: y, children: y }, u))
                            ]
                          }
                        ) }),
                        /* @__PURE__ */ e("div", { className: "accordion__panel-col flex-grow flex-shrink", children: /* @__PURE__ */ e(
                          "input",
                          {
                            type: "number",
                            value: ((J = l.arguments[1]) == null ? void 0 : J.threshold) || "",
                            onChange: (y) => {
                              _(o, "threshold", y.target.value);
                            }
                          }
                        ) })
                      ] }),
                      /* @__PURE__ */ e("div", { className: "accordion__panel-row mb-2 align-center text-center text-capitalize", children: /* @__PURE__ */ e("div", { className: "accordion__panel-col flex-grow", children: "Then" }) })
                    ] }),
                    /* @__PURE__ */ i("div", { className: "accordion__panel-row mb-2 align-center", children: [
                      /* @__PURE__ */ e("div", { className: "accordion__panel-col flex-auto", children: "Show" }),
                      /* @__PURE__ */ e("div", { className: "accordion__panel-col flex-grow", children: /* @__PURE__ */ e(
                        "input",
                        {
                          type: "text",
                          value: l.source || "",
                          onChange: (y) => {
                            x("source", o, null, y.target.value);
                          }
                        }
                      ) })
                    ] }),
                    /* @__PURE__ */ i("div", { className: "accordion__panel-row mb-2 align-center", children: [
                      /* @__PURE__ */ e("div", { className: "accordion__panel-col flex-auto", children: "Alt Text" }),
                      /* @__PURE__ */ e("div", { className: "accordion__panel-col flex-grow", children: /* @__PURE__ */ e(
                        "input",
                        {
                          type: "text",
                          value: l.alt || "",
                          onChange: (y) => {
                            x("alt", o, null, y.target.value);
                          }
                        }
                      ) })
                    ] })
                  ] })
                ] }, o);
              }) }) }),
              /* @__PURE__ */ e("button", { type: "button", onClick: W, className: "btn btn-primary full-width", children: "Add Dynamic Image" })
            ] })
          ] })
        ] })
      ] }) }) })
    }
  ) });
}), ve = {
  "theme-blue": {
    primary: "#005eaa",
    secondary: "#88c3ea",
    tertiary: "#c0e9ff",
    quaternary: "#edf9ff"
  },
  "theme-purple": {
    primary: "#712177",
    secondary: "#b890bb",
    tertiary: "#e3d3e4",
    quaternary: "#f7f2f7"
  },
  "theme-brown": {
    primary: "#705043",
    secondary: "#ad907b",
    tertiary: "#d7ccc8",
    quaternary: "#f2ebe8"
  },
  "theme-teal": {
    primary: "#00695c",
    secondary: "#4ebaaa",
    tertiary: "#ceece7",
    quaternary: "#ebf7f5"
  },
  "theme-pink": {
    primary: "#af4448",
    secondary: "#e57373",
    tertiary: "#ffc2c2",
    quaternary: "#ffe7e7"
  },
  "theme-orange": {
    primary: "#bb4d00",
    secondary: "#ffad42",
    tertiary: "#ffe97d",
    quaternary: "#fff4cf"
  },
  "theme-slate": {
    primary: "#29434e",
    secondary: "#7e9ba5",
    tertiary: "#b6c6d2",
    quaternary: "#e2e8ed"
  },
  "theme-indigo": {
    primary: "#26418f",
    secondary: "#92a6dd",
    tertiary: "#dee8ff",
    quaternary: "#f2f6ff"
  },
  "theme-cyan": {
    primary: "#006778",
    secondary: "#65b0bd",
    tertiary: "#cce5e9",
    quaternary: "#ebf5f6"
  },
  "theme-green": {
    primary: "#4b830d",
    secondary: "#84bc49",
    tertiary: "#dcedc8",
    quaternary: "#f1f8e9"
  },
  "theme-amber": {
    primary: "#fbab18",
    secondary: "#ffd54f",
    tertiary: "#ffecb3",
    quaternary: "#fff7e1"
  }
}, ye = ({ text: t, theme: r = "theme-blue", dataFormat: m, biteFontSize: v }) => {
  const f = {
    outerRing: {
      fill: ve[r].primary
    },
    innerRing: {
      fill: qe(ve[r].primary).darken(0.5)
    },
    text: {
      fill: "#FFF"
    }
  };
  return /* @__PURE__ */ i("svg", { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg", className: "circle-callout callout", children: [
    /* @__PURE__ */ e("circle", { cx: "50", cy: "50", r: "45", style: f.innerRing, strokeWidth: "10", stroke: f.outerRing.fill }),
    /* @__PURE__ */ e("text", { y: "50%", x: "50%", fontSize: v, style: f.text, textAnchor: "middle", dominantBaseline: "central", children: t })
  ] });
};
const et = ({ label: t, value: r }) => /* @__PURE__ */ e("div", { className: "cove-component__content kpi-container", children: /* @__PURE__ */ i("div", { className: "kpi-content", children: [
  /* @__PURE__ */ e("div", { className: "label-container", children: /* @__PURE__ */ e("span", { className: "label", children: /* @__PURE__ */ e("strong", { children: t }) }) }),
  /* @__PURE__ */ e("div", { className: "value-container", children: /* @__PURE__ */ e("span", { className: "value", children: /* @__PURE__ */ e("strong", { children: r }) }) })
] }) });
function tt() {
  const r = /* @__PURE__ */ new Date();
  return new Date(r.getTime() - r.getTime() % 9e5).toISOString();
}
const at = (t, r) => {
  switch (r.type) {
    case "SET_CONFIG":
      return { ...t, config: r.payload };
    case "SET_LOADING":
      return { ...t, loading: r.payload };
    case "SET_CURRENT_VIEWPORT":
      return { ...t, currentViewport: r.payload };
    case "SET_COVE_LOADED_HAS_RAN":
      return { ...t, coveLoadedHasRan: r.payload };
    case "SET_CONTAINER":
      return { ...t, container: r.payload };
  }
};
const Et = (t) => {
  var y;
  const {
    configUrl: r,
    config: m,
    isDashboard: v = !1,
    isEditor: f = !1,
    setConfig: E,
    link: T
  } = t, A = {
    config: m ?? de,
    loading: !0,
    currentViewport: "lg",
    coveLoadedHasRan: !1,
    container: null
  }, [O, c] = p.useReducer(at, A), { config: a, loading: C, currentViewport: k, coveLoadedHasRan: j, container: U } = O, {
    title: P,
    dataColumn: L,
    dataFunction: x,
    imageData: _,
    biteBody: K,
    biteFontSize: W,
    dataFormat: $,
    biteStyle: I,
    filters: X,
    subtext: D
  } = a, { innerContainerClasses: R, contentClasses: B } = je(a), Q = new Me(), ae = new We((u) => {
    for (let h of u) {
      let q = $e(h.contentRect.width * 2);
      c({ type: "SET_CURRENT_VIEWPORT", payload: q });
    }
  }), l = (u) => {
    Object.keys(de).forEach((h) => {
      u[h] && typeof u[h] == "object" && !Array.isArray(u[h]) && (u[h] = { ...de[h], ...u[h] });
    }), u.runtime = {}, u.runtime.uniqueId = Date.now(), u.runtime.editorErrorMessage = "", c({ type: "SET_CONFIG", payload: u });
  }, o = async () => {
    let u = m || await (await fetch(r)).json(), h = u.data ?? [];
    if (u.dataUrl) {
      u.dataUrl = `${u.dataUrl}?${tt()}`;
      let M = await He(u.dataUrl);
      M && u.dataDescription && (M = Q.autoStandardize(M), M = Q.developerStandardize(M, u.dataDescription)), M && (h = M);
    }
    u.data = h;
    const q = { ...Ze(u) };
    l({ ...de, ...q }), c({ type: "SET_LOADING", payload: !1 });
  }, d = (u = !0) => {
    if (!L || !x)
      return "";
    const h = (n) => {
      if (n == null) {
        console.error('Enter correct value to "applyPrecision()" function ');
        return;
      }
      if (Number.isNaN(n)) {
        console.error(' Argunment isNaN, "applyPrecision()" function ');
        return;
      }
      let s = n, N = Number(a.dataFormat.roundToPlace);
      if (N < 0) {
        console.error(' ROUND field is below "0", "applyPrecision()" function ');
        return;
      }
      return typeof N == "number" && N > -1 && (s = Number(s).toFixed(N)), String(s);
    }, q = (n) => (a.dataFormat.ignoreZeros && (S = S.filter((s) => s && s)), S.length), M = (n) => {
      if (n == null) {
        console.error("Enter valid value for getColumnSum function ");
        return;
      }
      if (n.length === 0 || !Array.isArray(n)) {
        console.error("Arguments are not valid getColumnSum function ");
        return;
      }
      let s = 0;
      return n.length > 1 ? s = n.map((N) => Number(N)).reduce((N, z) => N + z) : s = Number(n[0]), h(s);
    }, w = (n) => {
      if (n == null || !Array.isArray(n)) {
        console.error("Enter valid parameter getColumnMean function");
        return;
      }
      a.dataFormat.ignoreZeros && (n = n.filter((N) => N !== 0));
      let s = 0;
      return n.length > 1 ? s = n.map((N) => Number(N)).reduce((N, z) => N + z) / n.length : s = Number(n[0]), h(s);
    }, F = (n = []) => {
      let s = {}, N = -1 / 0;
      for (let G = 0; G < n.length; G++)
        s[n[G]] ? s[n[G]] += 1 : s[n[G]] = 1, s[n[G]] > N && (N = s[n[G]]);
      let z = [];
      for (let G in s)
        s[G] === N && z.push(G);
      return z;
    }, H = (n) => {
      if (!n.length)
        return;
      const s = Math.floor(n.length / 2), N = [...n].sort((G, Re) => G - Re), z = n.length % 2 !== 0 ? N[s] : (N[s - 1] + N[s]) / 2;
      return h(z);
    }, ne = (n) => {
      if (n == null)
        return;
      (Number.isNaN(n) || typeof n == "number") && (n = String(n));
      const s = "en-US";
      let N = parseFloat(n).toLocaleString(s, {
        useGrouping: !0,
        maximumFractionDigits: 6
      });
      const z = n.match(/\.\d*?(0*)$/);
      return z && (N += /[1-9]/.test(z[0]) ? z[1] : z[0]), N;
    };
    let g = "", te = a.data;
    X.map((n) => n.columnName && n.columnValue ? te = te.filter(function(s) {
      return s[n.columnName] === n.columnValue;
    }) : !1);
    let S = [];
    switch (te.length ? te.forEach((n) => {
      let s = Ge(n[L]);
      typeof s == "number" && S.push(s);
    }) : a.dataColumn && a.data && (S = a.data.map((n) => Number(n[a.dataColumn]))), x) {
      case Ce:
        g = q();
        break;
      case xe:
        g = M(S);
        break;
      case De:
        g = w(S);
        break;
      case _e:
        g = H(S);
        break;
      case Ae:
        g = Math.max(...S);
        break;
      case Se:
        g = Math.min(...S);
        break;
      case Ee:
        g = F(S).join("");
        break;
      case fe:
        let n = Math.min(...S), s = Math.max(...S);
        n = h(n), s = h(s), a.dataFormat.commas && (n = ne(n), s = ne(s)), g = a.dataFormat.prefix + n + a.dataFormat.suffix + " - " + a.dataFormat.prefix + s + a.dataFormat.suffix;
        break;
      default:
        console.warn("Data bite function not recognized: " + x);
    }
    return x !== fe && (g = h(g), a.dataFormat.commas && (g = ne(g))), u ? $.prefix + g + $.suffix : g;
  }, b = p.useCallback((u) => {
    u !== null && ae.observe(u), c({ type: "SET_CONTAINER", payload: u });
  }, []);
  p.useEffect(() => {
    o(), he("cove_loaded", { loadConfigHasRun: !0 });
  }, []), p.useEffect(() => {
    a && !j && U && (he("cove_loaded", { config: a }), c({ type: "SET_COVE_LOADED_HAS_RAN", payload: !0 }));
  }, [a, U]), m && a && JSON.stringify(m.data) !== JSON.stringify(a.data) && o();
  let V = /* @__PURE__ */ e(Ve, {});
  const J = p.useCallback(() => {
    var M;
    let u = {
      "<": (w, F) => w < F,
      ">": (w, F) => w > F,
      "<=": (w, F) => w <= F,
      ">=": (w, F) => w >= F,
      "≠": (w, F) => w !== F,
      "=": (w, F) => w === F
    }, h = _.url, q = _.alt;
    if (_.display === "dynamic" && _.options && ((M = _.options) == null ? void 0 : M.length) > 0) {
      let w = Number(d(!1)), F = !1;
      _.options.forEach((H, ne) => {
        var n, s;
        let g = H.arguments, { source: te, alt: S } = H;
        F === !1 && g.length > 0 && g[0].operator.length > 0 && g[0].threshold.length > 0 && u[g[0].operator](w, g[0].threshold) && (g[1] !== void 0 ? ((n = g[1].operator) == null ? void 0 : n.length) > 0 && ((s = g[1].threshold) == null ? void 0 : s.length) > 0 && u[g[1].operator](w, g[1].threshold) && (h = te, S !== "" && S !== void 0 && (q = S), F = !0) : (h = te, S !== "" && S !== void 0 && (q = S), F = !0));
      });
    }
    return h.length > 0 && I !== "graphic" && _.display !== "none" ? /* @__PURE__ */ e("img", { alt: q, src: h, className: "bite-image callout" }) : null;
  }, [_]);
  if (C === !1) {
    let u = [], h = !1, q = !1;
    switch (a.bitePosition) {
      case Fe:
        u.push("bite-left"), h = !0;
        break;
      case Oe:
        u.push("bite-right"), h = !0;
        break;
      case we:
        u.push("bite-top"), h = !0;
        break;
      case Ie:
        u.push("bite-bottom"), q = !0;
        break;
    }
    const M = () => !1, w = () => /* @__PURE__ */ e("section", { className: "waiting", style: {
      position: "absolute",
      background: "white",
      zIndex: "999",
      height: "100vh",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gridArea: "content"
    }, children: /* @__PURE__ */ i("section", { className: "waiting-container", children: [
      /* @__PURE__ */ e("h3", { children: "Error With Configuration" }),
      /* @__PURE__ */ e("p", { children: a.runtime.editorErrorMessage })
    ] }) }), F = () => /* @__PURE__ */ e("section", { className: "waiting", style: {
      position: "absolute",
      background: "white",
      zIndex: "999",
      height: "100vh",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gridArea: "content"
    }, children: /* @__PURE__ */ i("section", { className: "waiting-container", children: [
      /* @__PURE__ */ e("h3", { children: "Finish Configuring" }),
      /* @__PURE__ */ e("p", { children: "Set all required options to the left and confirm below to display a preview of the chart." }),
      /* @__PURE__ */ e(
        "button",
        {
          className: "btn btn-primary",
          style: { margin: "1em auto" },
          disabled: M(),
          onClick: (g) => {
            g.preventDefault(), l({ ...a, newViz: !1 });
          },
          children: "I'm Done"
        }
      )
    ] }) }), H = L !== void 0 && x !== void 0;
    V = /* @__PURE__ */ i(le, { children: [
      f && /* @__PURE__ */ e(be, {}),
      /* @__PURE__ */ i(ie.Responsive, { isEditor: f, children: [
        /* @__PURE__ */ i("div", { className: "cove-component__content", children: [
          !a.newViz && a.runtime && a.runtime.editorErrorMessage && /* @__PURE__ */ e(w, {}),
          (!a.dataColumn || !a.dataFunction) && /* @__PURE__ */ e(F, {}),
          /* @__PURE__ */ e(
            Ue,
            {
              showTitle: (y = a.visual) == null ? void 0 : y.showTitle,
              config: a,
              title: P,
              isDashboard: v,
              classes: ["bite-header", `${a.theme}`]
            }
          ),
          /* @__PURE__ */ e("div", { className: `bite ${u.join(" ")}`, children: /* @__PURE__ */ i("div", { className: `bite-content-container ${B.join(" ")}`, children: [
            H && I === "graphic" && h && /* @__PURE__ */ e(
              ye,
              {
                theme: a.theme,
                text: d(),
                biteFontSize: W,
                dataFormat: $
              }
            ),
            h && /* @__PURE__ */ e(J, {}),
            /* @__PURE__ */ i("div", { className: "bite-content", children: [
              H && I === "title" && /* @__PURE__ */ e("div", { className: "bite-value", style: { fontSize: W + "px" }, children: d() }),
              H && I === "split" && /* @__PURE__ */ e("div", { className: "bite-value", style: { fontSize: W + "px" }, children: d() }),
              /* @__PURE__ */ e(p.Fragment, { children: /* @__PURE__ */ i("div", { className: "bite-content__text-wrap", children: [
                /* @__PURE__ */ i("p", { className: "bite-text", children: [
                  H && I === "body" && /* @__PURE__ */ e("span", { className: "bite-value data-bite-body", style: { fontSize: W + "px" }, children: d() }),
                  pe(K)
                ] }),
                H && I === "end" && /* @__PURE__ */ e("span", { className: "bite-value data-bite-body", style: { fontSize: W + "px" }, children: d() }),
                D && !a.general.isCompactStyle && /* @__PURE__ */ e("p", { className: "bite-subtext", children: pe(D) })
              ] }) })
            ] }),
            q && /* @__PURE__ */ e(J, {}),
            H && I === "graphic" && !h && /* @__PURE__ */ e(
              ye,
              {
                theme: a.theme,
                text: d(),
                biteFontSize: W,
                dataFormat: $
              }
            )
          ] }) })
        ] }),
        T && T
      ] })
    ] });
  }
  return /* @__PURE__ */ i(Te.Provider, { value: { config: a, updateConfig: l, loading: C, data: a.data, setParentConfig: E, isDashboard: v }, children: [
    I !== "gradient" && /* @__PURE__ */ e(
      ie.VisualizationWrapper,
      {
        ref: b,
        config: a,
        isEditor: f,
        showEditorPanel: a == null ? void 0 : a.showEditorPanel,
        children: V
      }
    ),
    I === "gradient" && /* @__PURE__ */ i(
      ie.VisualizationWrapper,
      {
        ref: b,
        config: a,
        isEditor: f,
        showEditorPanel: a == null ? void 0 : a.showEditorPanel,
        children: [
          f && /* @__PURE__ */ e(be, {}),
          /* @__PURE__ */ i(ie.Responsive, { isEditor: f, children: [
            !a.newViz && a.runtime && a.runtime.editorErrorMessage && /* @__PURE__ */ e(Error, {}),
            (!a.dataColumn || !a.dataFunction) && /* @__PURE__ */ e(Confirm, {}),
            /* @__PURE__ */ e(et, { label: a.title, value: d() })
          ] })
        ]
      }
    )
  ] });
}, Ae = "Max", Ce = "Count", De = "Mean (Average)", _e = "Median", Se = "Min", Ee = "Mode", fe = "Range", xe = "Sum", nt = [
  Ce,
  Ae,
  De,
  _e,
  Se,
  Ee,
  fe,
  xe
], rt = {
  graphic: "Graphic",
  split: "Split Graphic and Message",
  title: "Value above Message",
  body: "Value before Message",
  end: "Value after Message",
  gradient: "Gradient"
}, Fe = "Left", Oe = "Right", we = "Top", Ie = "Bottom", lt = [Fe, Oe, we, Ie], it = "<", ot = ">", ct = "<=", st = ">=", ut = "=", dt = "≠", Ne = [
  it,
  ot,
  ct,
  st,
  ut,
  dt
];
export {
  Et as C
};
