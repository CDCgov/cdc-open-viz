import { j as e, a as i, F as re } from "./storybook-jsx-runtime-36872362.es.js";
import { r as g } from "./storybook-index-45401197.es.js";
import { A as ke, a as ie, b as oe, c as ce, d as se, e as we, D as Pe } from "./storybook-DataTransform-12e90958.es.js";
import { a as de, b as Me } from "./storybook-Icon-5df8fab3.es.js";
import { T as X } from "./storybook-Tooltip-b155742f.es.js";
import { E as Le, L as Be } from "./storybook-viewports-678eca6e.es.js";
import { u as Ve } from "./storybook-updateFieldFactory-c006040a.es.js";
import { T as ze, H as fe } from "./storybook-index-88ba5a71.es.js";
import { L as le, u as Ue, p as he, c as qe } from "./storybook-coveUpdateWorker-f0e4685a.es.js";
import { b as Ge, g as je, f as We } from "./storybook-getViewport-7dc50c16.es.js";
import { n as He } from "./storybook-numberFromString-24623c03.es.js";
const ue = {
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
    borderColorTheme: !1
  },
  general: {
    isCompactStyle: !1
  }
}, Ne = g.createContext({});
function $e(t, l, d) {
  var v = this, m = g.useRef(null), E = g.useRef(0), T = g.useRef(null), A = g.useRef([]), I = g.useRef(), c = g.useRef(), a = g.useRef(t), C = g.useRef(!0);
  a.current = t;
  var P = !l && l !== 0 && typeof window < "u";
  if (typeof t != "function")
    throw new TypeError("Expected a function");
  l = +l || 0, d = d || {};
  var j = !!d.leading, U = "trailing" in d ? !!d.trailing : !0, M = "maxWait" in d, B = M ? Math.max(+d.maxWait || 0, l) : null;
  g.useEffect(function() {
    return C.current = !0, function() {
      C.current = !1;
    };
  }, []);
  var x = g.useMemo(function() {
    var _ = function(D) {
      var w = A.current, V = I.current;
      return A.current = I.current = null, E.current = D, c.current = a.current.apply(V, w);
    }, Y = function(D, w) {
      P && cancelAnimationFrame(T.current), T.current = P ? requestAnimationFrame(D) : setTimeout(D, w);
    }, W = function(D) {
      if (!C.current)
        return !1;
      var w = D - m.current, V = D - E.current;
      return !m.current || w >= l || w < 0 || M && V >= B;
    }, H = function(D) {
      return T.current = null, U && A.current ? _(D) : (A.current = I.current = null, c.current);
    }, k = function() {
      var D = Date.now();
      if (W(D))
        return H(D);
      if (C.current) {
        var w = D - m.current, V = D - E.current, r = l - w, o = M ? Math.min(r, B - V) : r;
        Y(k, o);
      }
    }, Q = function() {
      for (var D = [], w = 0; w < arguments.length; w++)
        D[w] = arguments[w];
      var V = Date.now(), r = W(V);
      if (A.current = D, I.current = v, m.current = V, r) {
        if (!T.current && C.current)
          return E.current = m.current, Y(k, l), j ? _(m.current) : c.current;
        if (M)
          return Y(k, l), _(m.current);
      }
      return T.current || Y(k, l), c.current;
    };
    return Q.cancel = function() {
      T.current && (P ? cancelAnimationFrame(T.current) : clearTimeout(T.current)), E.current = 0, A.current = m.current = I.current = T.current = null;
    }, Q.isPending = function() {
      return !!T.current;
    }, Q.flush = function() {
      return T.current ? H(Date.now()) : c.current;
    }, Q;
  }, [j, M, l, B, U, P]);
  return x;
}
function Ze(t, l) {
  return t === l;
}
function ge(t) {
  return typeof t == "function" ? function() {
    return t;
  } : t;
}
function Je(t) {
  var l = g.useState(ge(t)), d = l[0], v = l[1], m = g.useCallback(function(E) {
    return v(ge(E));
  }, []);
  return [d, m];
}
function Qe(t, l, d) {
  var v = d && d.equalityFn || Ze, m = Je(t), E = m[0], T = m[1], A = $e(g.useCallback(function(c) {
    return T(c);
  }, [T]), l, d), I = g.useRef(t);
  return v(I.current, t) || (A(t), I.current = t), [E, A];
}
const Z = g.memo(
  ({
    label: t,
    section: l = null,
    subsection: d = null,
    fieldName: v,
    updateField: m,
    value: E,
    tooltip: T,
    type: A = "input",
    i: I = null,
    min: c = null,
    max: a = null,
    ...C
  }) => {
    const [P, j] = g.useState(E), [U] = Qe(P, 500);
    g.useEffect(() => {
      typeof U == "string" && E !== U && m(l, d, v, U, I);
    }, [U, l, d, v, I, E, m]);
    let M = d ? `${l}-${d}-${v}` : `${l}-${d}-${v}`;
    const B = (_) => {
      A !== "number" || c === null || !_.target.value || parseFloat(c) <= parseFloat(_.target.value) & parseFloat(a) >= parseFloat(_.target.value) ? j(_.target.value) : j(c.toString());
    };
    let x = /* @__PURE__ */ e("input", { type: "text", name: M, onChange: B, ...C, value: P });
    return A === "textarea" && (x = /* @__PURE__ */ e("textarea", { name: M, onChange: B, ...C, value: P })), A === "number" && (x = /* @__PURE__ */ e("input", { type: "number", name: M, onChange: B, ...C, value: P })), /* @__PURE__ */ i(re, { children: [
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
), ee = g.memo(
  ({ label: t, value: l, fieldName: d, section: v = null, subsection: m = null, tooltip: E, updateField: T, ...A }) => /* @__PURE__ */ i("label", { className: "checkbox", children: [
    /* @__PURE__ */ e(
      "input",
      {
        type: "checkbox",
        name: d,
        checked: l,
        onChange: () => {
          T(v, m, d, !l);
        },
        ...A
      }
    ),
    /* @__PURE__ */ e("span", { className: "edit-label column-heading", children: t }),
    /* @__PURE__ */ e("span", { className: "cove-icon", children: E })
  ] })
), ne = g.memo(
  ({
    label: t,
    value: l,
    options: d,
    fieldName: v,
    section: m = null,
    subsection: E = null,
    required: T = !1,
    updateField: A,
    initial: I,
    ...c
  }) => {
    let a = "";
    if (Array.isArray(d))
      a = d.map((C) => /* @__PURE__ */ e("option", { value: C, children: C }, C));
    else {
      a = [];
      for (const [C, P] of Object.entries(d))
        a.push(
          /* @__PURE__ */ e("option", { value: C, children: P }, C)
        );
    }
    return I && a.unshift(
      /* @__PURE__ */ e("option", { value: "", children: I }, "initial")
    ), /* @__PURE__ */ i("label", { children: [
      /* @__PURE__ */ e("span", { className: "edit-label", children: t }),
      /* @__PURE__ */ e(
        "select",
        {
          className: T && !l ? "warning" : "",
          name: v,
          value: l,
          onChange: (C) => {
            A(m, E, v, C.target.value);
          },
          ...c,
          children: a
        }
      )
    ] });
  }
), Xe = [
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
], pe = g.memo(() => {
  var k, Q, D, w, V;
  const { config: t, updateConfig: l, loading: d, data: v, setParentConfig: m, isDashboard: E, isEditor: T } = g.useContext(Ne), [A, I] = g.useState(!0), c = Ve(t, l, !0);
  g.useEffect(() => {
    if (m) {
      const r = C();
      delete r.newViz, m(r);
    }
  }, [t]);
  const a = () => {
    I(!A), l({
      ...t,
      showEditorPanel: !A
    });
  }, C = () => {
    let r = JSON.parse(JSON.stringify(t));
    return delete r.runtime, r;
  }, P = (r) => {
    let o = [...t.filters];
    o.splice(r, 1), l({ ...t, filters: o });
  }, j = (r, o, f) => {
    let b = [...t.filters];
    b[o][r] = f, l({ ...t, filters: b });
  }, U = () => {
    let r = t.filters ? [...t.filters] : [];
    r.push({ values: [] }), l({ ...t, filters: r });
  }, M = (r = !0) => {
    let o = {};
    return v.length && v.map((f) => Object.keys(f).forEach((b) => o[b] = !0)), Object.keys(o);
  }, B = (r) => {
    let o = [];
    const f = t.filters[r].columnName;
    return v && f && (v.forEach(function(b) {
      b[f] !== void 0 && o.indexOf(b[f]) === -1 && o.push(b[f]);
    }), o.sort()), o;
  }, x = (r, o, f = null, b) => {
    let F = [...t.imageData.options];
    f === null ? F[o][r] = b : F[o].arguments[f][r] = b;
    let J = { ...t.imageData, options: F };
    l({ ...t, imageData: J });
  }, _ = (r, o, f) => {
    let b = [...t.imageData.options[r].arguments];
    b[1] = { ...b[1], [o]: f };
    let F = { ...t.imageData.options[r], arguments: b }, J = [...t.imageData.options];
    J[r] = F;
    let y = { ...t.imageData, options: J };
    l({ ...t, imageData: y });
  }, Y = (r) => {
    if (t.imageData.options[r].arguments.length > 1) {
      let o = [...t.imageData.options[r].arguments];
      o.pop();
      let f = { ...t.imageData.options[r], arguments: o }, b = [...t.imageData.options];
      b[r] = f;
      let F = { ...t.imageData, options: b };
      l({ ...t, imageData: F });
    }
  }, W = () => {
    let r = t.imageData.options ? [...t.imageData.options] : [];
    r.push({ source: "", arguments: [{ operator: "", threshold: "" }], alt: "", secondArgument: !1 });
    let o = { ...t.imageData, options: r };
    l({ ...t, imageData: o });
  }, H = (r) => {
    let o = [...t.imageData.options];
    o.splice(r, 1);
    let f = { ...t.imageData, options: o };
    l({ ...t, imageData: f });
  };
  return d ? null : /* @__PURE__ */ e(Le, { component: "EditorPanel", children: /* @__PURE__ */ e(
    le.Sidebar,
    {
      isEditor: !0,
      config: t,
      title: "Configure Data Bites",
      onBackClick: a,
      displayPanel: A,
      children: /* @__PURE__ */ e("section", { className: "form-container", children: /* @__PURE__ */ e("form", { children: /* @__PURE__ */ i(ke, { allowZeroExpanded: !0, children: [
        /* @__PURE__ */ i(ie, { children: [
          " ",
          /* @__PURE__ */ e(oe, { children: /* @__PURE__ */ e(ce, { children: "General" }) }),
          /* @__PURE__ */ i(se, { children: [
            /* @__PURE__ */ e(
              ne,
              {
                value: t.biteStyle,
                fieldName: "biteStyle",
                label: "Data Bite Style",
                updateField: c,
                options: at,
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
              Z,
              {
                type: "textarea",
                value: t.biteBody,
                fieldName: "biteBody",
                label: "Message",
                updateField: c,
                tooltip: /* @__PURE__ */ i(X, { style: { textTransform: "none" }, children: [
                  /* @__PURE__ */ e(X.Target, { children: /* @__PURE__ */ e(de, { display: "question", style: { marginLeft: "0.5rem" } }) }),
                  /* @__PURE__ */ e(X.Content, { children: /* @__PURE__ */ e("p", { children: "Enter the message text for the visualization. The following HTML tags are supported: strong, em, sup, and sub." }) })
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
                tooltip: /* @__PURE__ */ i(X, { style: { textTransform: "none" }, children: [
                  /* @__PURE__ */ e(X.Target, { children: /* @__PURE__ */ e(de, { display: "question", style: { marginLeft: "0.5rem" } }) }),
                  /* @__PURE__ */ e(X.Content, { children: /* @__PURE__ */ e("p", { children: "Enter supporting text to display below the data visualization, if applicable. The following HTML tags are supported: strong, em, sup, and sub." }) })
                ] })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ i(ie, { children: [
          " ",
          /* @__PURE__ */ e(oe, { children: /* @__PURE__ */ i(ce, { children: [
            "Data",
            " ",
            (!t.dataColumn || !t.dataFunction) && /* @__PURE__ */ e(Me, { width: "25", className: "warning-icon" })
          ] }) }),
          /* @__PURE__ */ i(se, { children: [
            /* @__PURE__ */ e("ul", { className: "column-edit", children: /* @__PURE__ */ i("li", { className: "two-col", children: [
              /* @__PURE__ */ e(
                ne,
                {
                  value: t.dataColumn || "",
                  fieldName: "dataColumn",
                  label: "Data Column",
                  updateField: c,
                  initial: "Select",
                  required: !0,
                  options: M()
                }
              ),
              /* @__PURE__ */ e(
                ne,
                {
                  value: t.dataFunction || "",
                  fieldName: "dataFunction",
                  label: "Data Function",
                  updateField: c,
                  initial: "Select",
                  required: !0,
                  options: tt
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
              /* @__PURE__ */ i(X, { style: { textTransform: "none" }, children: [
                /* @__PURE__ */ e(X.Target, { children: /* @__PURE__ */ e(de, { display: "question", style: { marginLeft: "0.5rem" } }) }),
                /* @__PURE__ */ e(X.Content, { children: /* @__PURE__ */ e("p", { children: 'To refine the highlighted data point, specify one or more filters (e.g., "Male" and "Female" for a column called "Sex").' }) })
              ] })
            ] }) }),
            t.filters && /* @__PURE__ */ e("ul", { className: "filters-list", children: t.filters.map((r, o) => /* @__PURE__ */ i("fieldset", { className: "edit-block", children: [
              /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  className: "remove-column",
                  onClick: () => {
                    P(o);
                  },
                  children: "Remove"
                }
              ),
              /* @__PURE__ */ i("label", { children: [
                /* @__PURE__ */ e("span", { className: "edit-label column-heading", children: "Column" }),
                /* @__PURE__ */ i(
                  "select",
                  {
                    value: r.columnName ? r.columnName : "",
                    onChange: (f) => {
                      j("columnName", o, f.target.value);
                    },
                    children: [
                      /* @__PURE__ */ e("option", { value: "", children: "- Select Option -" }),
                      M().map((f, b) => /* @__PURE__ */ e("option", { value: f, children: f }, b))
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ i("label", { children: [
                /* @__PURE__ */ e("span", { className: "edit-label column-heading", children: "Column Value" }),
                /* @__PURE__ */ i(
                  "select",
                  {
                    value: r.columnValue,
                    onChange: (f) => {
                      j("columnValue", o, f.target.value);
                    },
                    children: [
                      /* @__PURE__ */ e("option", { value: "", children: "- Select Option -" }),
                      B(o).map((f, b) => /* @__PURE__ */ e("option", { value: f, children: f }, b))
                    ]
                  }
                )
              ] })
            ] }, o)) }),
            (!t.filters || t.filters.length === 0) && /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("fieldset", { className: "edit-block", children: /* @__PURE__ */ e("p", { style: { textAlign: "center" }, children: "There are currently no filters." }) }) }),
            /* @__PURE__ */ e("button", { type: "button", onClick: U, className: "btn btn-primary full-width", children: "Add Filter" })
          ] })
        ] }),
        /* @__PURE__ */ i(ie, { children: [
          " ",
          /* @__PURE__ */ e(oe, { children: /* @__PURE__ */ e(ce, { children: "Visual" }) }),
          /* @__PURE__ */ i(se, { children: [
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
              ne,
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
                  value: (k = t.visual) == null ? void 0 : k.border,
                  section: "visual",
                  fieldName: "border",
                  label: "Display Border",
                  updateField: c
                }
              ),
              /* @__PURE__ */ e(
                ee,
                {
                  value: (Q = t.visual) == null ? void 0 : Q.borderColorTheme,
                  section: "visual",
                  fieldName: "borderColorTheme",
                  label: "Use Border Color Theme",
                  updateField: c
                }
              ),
              /* @__PURE__ */ e(
                ee,
                {
                  value: (D = t.visual) == null ? void 0 : D.accent,
                  section: "visual",
                  fieldName: "accent",
                  label: "Use Accent Style",
                  updateField: c
                }
              ),
              /* @__PURE__ */ e(
                ee,
                {
                  value: (w = t.visual) == null ? void 0 : w.background,
                  section: "visual",
                  fieldName: "background",
                  label: "Use Theme Background Color",
                  updateField: c
                }
              ),
              /* @__PURE__ */ e(
                ee,
                {
                  value: (V = t.visual) == null ? void 0 : V.hideBackgroundColor,
                  section: "visual",
                  fieldName: "hideBackgroundColor",
                  label: "Hide Background Color",
                  updateField: c
                }
              )
            ] }),
            /* @__PURE__ */ i("label", { children: [
              /* @__PURE__ */ e("span", { className: "edit-label", children: "Theme" }),
              /* @__PURE__ */ e("ul", { className: "color-palette", children: Xe.map((r) => /* @__PURE__ */ e(
                "li",
                {
                  title: r,
                  onClick: () => {
                    l({ ...t, theme: r });
                  },
                  className: t.theme === r ? "selected " + r : r
                },
                r
              )) })
            ] })
          ] })
        ] }),
        ["title", "body", "graphic"].includes(t.biteStyle) && /* @__PURE__ */ i(ie, { children: [
          " ",
          /* @__PURE__ */ e(oe, { children: /* @__PURE__ */ i(ce, { children: [
            "Image",
            ["dynamic"].includes(t.imageData.display) && "s"
          ] }) }),
          /* @__PURE__ */ i(se, { children: [
            /* @__PURE__ */ e(
              ne,
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
              ne,
              {
                value: t.bitePosition || "",
                fieldName: "bitePosition",
                label: "Image/Graphic Position",
                updateField: c,
                initial: "Select",
                options: nt
              }
            ),
            ["static"].includes(t.imageData.display) && /* @__PURE__ */ i(re, { children: [
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
            ["dynamic"].includes(t.imageData.display) && /* @__PURE__ */ i(re, { children: [
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
              t.imageData.options && t.imageData.options.length > 0 && /* @__PURE__ */ e(re, { children: /* @__PURE__ */ e("ul", { children: t.imageData.options.map((r, o) => {
                var f, b, F, J;
                return /* @__PURE__ */ i("fieldset", { className: "edit-block", children: [
                  /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      className: "remove-column",
                      onClick: () => {
                        H(o);
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
                          value: ((f = r.arguments[0]) == null ? void 0 : f.operator) || "",
                          onChange: (y) => {
                            x("operator", o, 0, y.target.value);
                          },
                          children: [
                            /* @__PURE__ */ e("option", { value: "", disabled: !0 }),
                            ye.map((y, te) => /* @__PURE__ */ e("option", { value: y, children: y }, te))
                          ]
                        }
                      ) }),
                      /* @__PURE__ */ e("div", { className: "accordion__panel-col flex-grow flex-shrink", children: /* @__PURE__ */ e(
                        "input",
                        {
                          type: "number",
                          value: ((b = r.arguments[0]) == null ? void 0 : b.threshold) || "",
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
                        value: r.secondArgument ? "and" : "then",
                        onChange: (y) => {
                          y.target.value === "then" && (x("secondArgument", o, null, !1), Y(o)), y.target.value === "and" && x("secondArgument", o, null, !0);
                        },
                        children: [
                          /* @__PURE__ */ e("option", { value: "then", children: "Then" }),
                          /* @__PURE__ */ e("option", { value: "and", children: "And" })
                        ]
                      }
                    ) }) }),
                    r.secondArgument && r.secondArgument === !0 && /* @__PURE__ */ i(re, { children: [
                      /* @__PURE__ */ i("div", { className: "accordion__panel-row align-center", children: [
                        /* @__PURE__ */ e("div", { className: "accordion__panel-col flex-auto", children: "If Value" }),
                        /* @__PURE__ */ e("div", { className: "accordion__panel-col flex-auto", children: /* @__PURE__ */ i(
                          "select",
                          {
                            value: ((F = r.arguments[1]) == null ? void 0 : F.operator) || "",
                            onChange: (y) => {
                              _(o, "operator", y.target.value);
                            },
                            children: [
                              /* @__PURE__ */ e("option", { value: "", disabled: !0 }),
                              ye.map((y, te) => /* @__PURE__ */ e("option", { value: y, children: y }, te))
                            ]
                          }
                        ) }),
                        /* @__PURE__ */ e("div", { className: "accordion__panel-col flex-grow flex-shrink", children: /* @__PURE__ */ e(
                          "input",
                          {
                            type: "number",
                            value: ((J = r.arguments[1]) == null ? void 0 : J.threshold) || "",
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
                          value: r.source || "",
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
                          value: r.alt || "",
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
}), be = {
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
}, ve = ({ text: t, theme: l = "theme-blue", dataFormat: d, biteFontSize: v }) => {
  const m = {
    outerRing: {
      fill: be[l].primary
    },
    innerRing: {
      fill: we(be[l].primary).darken(0.5)
    },
    text: {
      fill: "#FFF"
    }
  };
  return /* @__PURE__ */ i("svg", { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg", className: "circle-callout callout", children: [
    /* @__PURE__ */ e("circle", { cx: "50", cy: "50", r: "45", style: m.innerRing, strokeWidth: "10", stroke: m.outerRing.fill }),
    /* @__PURE__ */ e("text", { y: "50%", x: "50%", fontSize: v, style: m.text, textAnchor: "middle", dominantBaseline: "central", children: t })
  ] });
};
const Ye = ({ label: t, value: l }) => /* @__PURE__ */ e("div", { className: "cove-component__content kpi-container", children: /* @__PURE__ */ i("div", { className: "kpi-content", children: [
  /* @__PURE__ */ e("div", { className: "label-container", children: /* @__PURE__ */ e("span", { className: "label", children: /* @__PURE__ */ e("strong", { children: t }) }) }),
  /* @__PURE__ */ e("div", { className: "value-container", children: /* @__PURE__ */ e("span", { className: "value", children: /* @__PURE__ */ e("strong", { children: l }) }) })
] }) });
function Ke() {
  const l = /* @__PURE__ */ new Date();
  return new Date(l.getTime() - l.getTime() % 9e5).toISOString();
}
const et = (t, l) => {
  switch (l.type) {
    case "SET_CONFIG":
      return { ...t, config: l.payload };
    case "SET_LOADING":
      return { ...t, loading: l.payload };
    case "SET_CURRENT_VIEWPORT":
      return { ...t, currentViewport: l.payload };
    case "SET_COVE_LOADED_HAS_RAN":
      return { ...t, coveLoadedHasRan: l.payload };
    case "SET_CONTAINER":
      return { ...t, container: l.payload };
  }
};
const Tt = (t) => {
  const {
    configUrl: l,
    config: d,
    isDashboard: v = !1,
    isEditor: m = !1,
    setConfig: E,
    link: T
  } = t, A = {
    config: d ?? ue,
    loading: !0,
    currentViewport: "lg",
    coveLoadedHasRan: !1,
    container: null
  }, [I, c] = g.useReducer(et, A), { config: a, loading: C, currentViewport: P, coveLoadedHasRan: j, container: U } = I, {
    title: M,
    dataColumn: B,
    dataFunction: x,
    imageData: _,
    biteBody: Y,
    biteFontSize: W,
    dataFormat: H,
    biteStyle: k,
    filters: Q,
    subtext: D
  } = a, { innerContainerClasses: w, contentClasses: V } = Ue(a), r = new Pe(), o = new Ge((u) => {
    for (let h of u) {
      let q = je(h.contentRect.width * 2);
      c({ type: "SET_CURRENT_VIEWPORT", payload: q });
    }
  }), f = (u) => {
    Object.keys(ue).forEach((h) => {
      u[h] && typeof u[h] == "object" && !Array.isArray(u[h]) && (u[h] = { ...ue[h], ...u[h] });
    }), u.runtime = {}, u.runtime.uniqueId = Date.now(), u.runtime.editorErrorMessage = "", c({ type: "SET_CONFIG", payload: u });
  }, b = async () => {
    let u = d || await (await fetch(l)).json(), h = u.data ?? [];
    if (u.dataUrl) {
      u.dataUrl = `${u.dataUrl}?${Ke()}`;
      let L = await We(u.dataUrl);
      L && u.dataDescription && (L = r.autoStandardize(L), L = r.developerStandardize(L, u.dataDescription)), L && (h = L);
    }
    u.data = h;
    const q = { ...qe(u) };
    f({ ...ue, ...q }), c({ type: "SET_LOADING", payload: !1 });
  }, F = (u = !0) => {
    if (!B || !x)
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
    }, q = (n) => (a.dataFormat.ignoreZeros && (S = S.filter((s) => s && s)), S.length), L = (n) => {
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
    }, R = (n) => {
      if (n == null || !Array.isArray(n)) {
        console.error("Enter valid parameter getColumnMean function");
        return;
      }
      a.dataFormat.ignoreZeros && (n = n.filter((N) => N !== 0));
      let s = 0;
      return n.length > 1 ? s = n.map((N) => Number(N)).reduce((N, z) => N + z) / n.length : s = Number(n[0]), h(s);
    }, O = (n = []) => {
      let s = {}, N = -1 / 0;
      for (let G = 0; G < n.length; G++)
        s[n[G]] ? s[n[G]] += 1 : s[n[G]] = 1, s[n[G]] > N && (N = s[n[G]]);
      let z = [];
      for (let G in s)
        s[G] === N && z.push(G);
      return z;
    }, $ = (n) => {
      if (!n.length)
        return;
      const s = Math.floor(n.length / 2), N = [...n].sort((G, Re) => G - Re), z = n.length % 2 !== 0 ? N[s] : (N[s - 1] + N[s]) / 2;
      return h(z);
    }, ae = (n) => {
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
    let p = "", K = a.data;
    Q.map((n) => n.columnName && n.columnValue ? K = K.filter(function(s) {
      return s[n.columnName] === n.columnValue;
    }) : !1);
    let S = [];
    switch (K.length ? K.forEach((n) => {
      let s = He(n[B]);
      typeof s == "number" && S.push(s);
    }) : a.dataColumn && a.data && (S = a.data.map((n) => Number(n[a.dataColumn]))), x) {
      case Ae:
        p = q();
        break;
      case Ee:
        p = L(S);
        break;
      case Ce:
        p = R(S);
        break;
      case De:
        p = $(S);
        break;
      case Te:
        p = Math.max(...S);
        break;
      case _e:
        p = Math.min(...S);
        break;
      case Se:
        p = O(S).join("");
        break;
      case me:
        let n = Math.min(...S), s = Math.max(...S);
        n = h(n), s = h(s), a.dataFormat.commas && (n = ae(n), s = ae(s)), p = a.dataFormat.prefix + n + a.dataFormat.suffix + " - " + a.dataFormat.prefix + s + a.dataFormat.suffix;
        break;
      default:
        console.warn("Data bite function not recognized: " + x);
    }
    return x !== me && (p = h(p), a.dataFormat.commas && (p = ae(p))), u ? H.prefix + p + H.suffix : p;
  }, J = g.useCallback((u) => {
    u !== null && o.observe(u), c({ type: "SET_CONTAINER", payload: u });
  }, []);
  g.useEffect(() => {
    b(), he("cove_loaded", { loadConfigHasRun: !0 });
  }, []), g.useEffect(() => {
    a && !j && U && (he("cove_loaded", { config: a }), c({ type: "SET_COVE_LOADED_HAS_RAN", payload: !0 }));
  }, [a, U]), d && a && JSON.stringify(d.data) !== JSON.stringify(a.data) && b();
  let y = /* @__PURE__ */ e(Be, {});
  const te = g.useCallback(() => {
    var L;
    let u = {
      "<": (R, O) => R < O,
      ">": (R, O) => R > O,
      "<=": (R, O) => R <= O,
      ">=": (R, O) => R >= O,
      "≠": (R, O) => R !== O,
      "=": (R, O) => R === O
    }, h = _.url, q = _.alt;
    if (_.display === "dynamic" && _.options && ((L = _.options) == null ? void 0 : L.length) > 0) {
      let R = Number(F(!1)), O = !1;
      _.options.forEach(($, ae) => {
        var n, s;
        let p = $.arguments, { source: K, alt: S } = $;
        O === !1 && p.length > 0 && p[0].operator.length > 0 && p[0].threshold.length > 0 && u[p[0].operator](R, p[0].threshold) && (p[1] !== void 0 ? ((n = p[1].operator) == null ? void 0 : n.length) > 0 && ((s = p[1].threshold) == null ? void 0 : s.length) > 0 && u[p[1].operator](R, p[1].threshold) && (h = K, S !== "" && S !== void 0 && (q = S), O = !0) : (h = K, S !== "" && S !== void 0 && (q = S), O = !0));
      });
    }
    return h.length > 0 && k !== "graphic" && _.display !== "none" ? /* @__PURE__ */ e("img", { alt: q, src: h, className: "bite-image callout" }) : null;
  }, [_]);
  if (C === !1) {
    let u = [], h = !1, q = !1;
    switch (a.bitePosition) {
      case xe:
        u.push("bite-left"), h = !0;
        break;
      case Fe:
        u.push("bite-right"), h = !0;
        break;
      case Oe:
        u.push("bite-top"), h = !0;
        break;
      case Ie:
        u.push("bite-bottom"), q = !0;
        break;
    }
    const L = () => !1, R = () => /* @__PURE__ */ e("section", { className: "waiting", style: {
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
    ] }) }), O = () => /* @__PURE__ */ e("section", { className: "waiting", style: {
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
          disabled: L(),
          onClick: (p) => {
            p.preventDefault(), f({ ...a, newViz: !1 });
          },
          children: "I'm Done"
        }
      )
    ] }) }), $ = B !== void 0 && x !== void 0;
    y = /* @__PURE__ */ i(re, { children: [
      m && /* @__PURE__ */ e(pe, {}),
      /* @__PURE__ */ i(le.Responsive, { isEditor: m, children: [
        /* @__PURE__ */ i("div", { className: "cove-component__content", children: [
          !a.newViz && a.runtime && a.runtime.editorErrorMessage && /* @__PURE__ */ e(R, {}),
          (!a.dataColumn || !a.dataFunction) && /* @__PURE__ */ e(O, {}),
          /* @__PURE__ */ e(
            ze,
            {
              config: a,
              title: M,
              isDashboard: v,
              classes: ["bite-header", `${a.theme}`]
            }
          ),
          /* @__PURE__ */ e("div", { className: `bite ${u.join(" ")}`, children: /* @__PURE__ */ i("div", { className: `bite-content-container ${V.join(" ")}`, children: [
            $ && k === "graphic" && h && /* @__PURE__ */ e(
              ve,
              {
                theme: a.theme,
                text: F(),
                biteFontSize: W,
                dataFormat: H
              }
            ),
            h && /* @__PURE__ */ e(te, {}),
            /* @__PURE__ */ i("div", { className: "bite-content", children: [
              $ && k === "title" && /* @__PURE__ */ e("div", { className: "bite-value", style: { fontSize: W + "px" }, children: F() }),
              $ && k === "split" && /* @__PURE__ */ e("div", { className: "bite-value", style: { fontSize: W + "px" }, children: F() }),
              /* @__PURE__ */ e(g.Fragment, { children: /* @__PURE__ */ i("div", { className: "bite-content__text-wrap", children: [
                /* @__PURE__ */ i("p", { className: "bite-text", children: [
                  $ && k === "body" && /* @__PURE__ */ e("span", { className: "bite-value data-bite-body", style: { fontSize: W + "px" }, children: F() }),
                  fe(Y)
                ] }),
                $ && k === "end" && /* @__PURE__ */ e("span", { className: "bite-value data-bite-body", style: { fontSize: W + "px" }, children: F() }),
                D && !a.general.isCompactStyle && /* @__PURE__ */ e("p", { className: "bite-subtext", children: fe(D) })
              ] }) })
            ] }),
            q && /* @__PURE__ */ e(te, {}),
            $ && k === "graphic" && !h && /* @__PURE__ */ e(
              ve,
              {
                theme: a.theme,
                text: F(),
                biteFontSize: W,
                dataFormat: H
              }
            )
          ] }) })
        ] }),
        T && T
      ] })
    ] });
  }
  return /* @__PURE__ */ i(Ne.Provider, { value: { config: a, updateConfig: f, loading: C, data: a.data, setParentConfig: E, isDashboard: v }, children: [
    k !== "gradient" && /* @__PURE__ */ e(
      le.VisualizationWrapper,
      {
        ref: J,
        config: a,
        isEditor: m,
        showEditorPanel: a == null ? void 0 : a.showEditorPanel,
        children: y
      }
    ),
    k === "gradient" && /* @__PURE__ */ i(
      le.VisualizationWrapper,
      {
        ref: J,
        config: a,
        isEditor: m,
        showEditorPanel: a == null ? void 0 : a.showEditorPanel,
        children: [
          m && /* @__PURE__ */ e(pe, {}),
          /* @__PURE__ */ i(le.Responsive, { isEditor: m, children: [
            !a.newViz && a.runtime && a.runtime.editorErrorMessage && /* @__PURE__ */ e(Error, {}),
            (!a.dataColumn || !a.dataFunction) && /* @__PURE__ */ e(Confirm, {}),
            /* @__PURE__ */ e(Ye, { label: a.title, value: F() })
          ] })
        ]
      }
    )
  ] });
}, Te = "Max", Ae = "Count", Ce = "Mean (Average)", De = "Median", _e = "Min", Se = "Mode", me = "Range", Ee = "Sum", tt = [
  Ae,
  Te,
  Ce,
  De,
  _e,
  Se,
  me,
  Ee
], at = {
  graphic: "Graphic",
  split: "Split Graphic and Message",
  title: "Value above Message",
  body: "Value before Message",
  end: "Value after Message",
  gradient: "Gradient"
}, xe = "Left", Fe = "Right", Oe = "Top", Ie = "Bottom", nt = [xe, Fe, Oe, Ie], rt = "<", lt = ">", it = "<=", ot = ">=", ct = "=", st = "≠", ye = [
  rt,
  lt,
  it,
  ot,
  ct,
  st
];
export {
  Tt as C
};
