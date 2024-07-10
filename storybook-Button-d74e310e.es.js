import { R as e, r as a } from "./storybook-index-45401197.es.js";
import { P as l } from "./storybook-index-43433e35.es.js";
const L = ({ color: c = "#fff", opacity: s = 100, size: u = 100, className: i }) => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: `cove-loadspin${i ? " " + i : ""}`, style: { width: u, height: u } }, /* @__PURE__ */ e.createElement("div", { className: "cove-loadspin__roller", style: { opacity: s / 100, transform: `scale(${u / 80})` } }, [...Array(8)].map((m, f) => /* @__PURE__ */ e.createElement("div", { key: f, style: { backgroundColor: c } })))));
const w = ({ style: c, role: s, hoverStyle: u = {}, fluid: i = !1, loading: n = !1, loadingText: m = "Loading...", flexCenter: f, active: v = !1, onClick: N, children: d, ...y }) => {
  const o = a.useRef(null), [h, p] = a.useState("out"), [x, b] = a.useState({ ...c }), [S, C] = a.useState(), [_, g] = a.useState(), E = {
    ...y,
    style: x,
    className: "cove-button" + (f || s === "loader" ? " cove-button--flex-center" : "") + (i ? " fluid" : "") + (n ? " loading" : "") + (y.className ? " " + y.className : ""),
    onMouseOver: () => p("in"),
    onMouseOut: () => p("out"),
    onFocus: () => p("in"),
    onBlur: () => p("out")
  };
  return a.useEffect(() => {
    if (s === "loader" && o.current) {
      const t = document.createElement("span"), B = document.createTextNode(d);
      t.style.opacity = "0", t.style.visibility = "hidden";
      const r = document.createElement("span"), W = document.createTextNode(m);
      r.style.opacity = "0", r.style.visibility = "hidden", t.appendChild(B), r.appendChild(W), o.current.parentNode.insertBefore(t, o.current), o.current.parentNode.insertBefore(r, o.current), C(t.offsetWidth + 2), g(r.offsetWidth + 2), o.current.parentNode.removeChild(t), o.current.parentNode.removeChild(r);
    }
    return () => {
    };
  }, [o, d, m, s]), a.useEffect(() => {
    h === "in" && b((t) => ({ ...t, ...u })), h === "out" && (v || b({ ...c }));
  }, [h, v, c]), /* @__PURE__ */ e.createElement(
    "button",
    {
      ...E,
      onClick: (t) => (t.preventDefault(), n || N()),
      disabled: n || E.disabled,
      ref: o
    },
    d && /* @__PURE__ */ e.createElement(e.Fragment, null, s === "loader" && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("span", { className: "cove-button__text", style: n ? { width: _ + "px" } : { width: S + "px" } }, /* @__PURE__ */ e.createElement("div", { className: "cove-button__text--loading", style: n ? { opacity: 1 } : null }, m), /* @__PURE__ */ e.createElement("div", { className: "cove-button__text--children", style: n ? { opacity: 0 } : null }, d)), /* @__PURE__ */ e.createElement("div", { className: "cove-button__load-spin", style: n ? { width: "28px", opacity: 1 } : null }, /* @__PURE__ */ e.createElement(L, { className: "ml-1", size: 20 }))), s !== "loader" && d)
  );
};
w.propTypes = {
  /** Specify special role type for button */
  role: l.oneOf(["loader"]),
  /** Provide object with styles that overwrite base styles when hovered */
  hoverStyle: l.object,
  /** Enables button to stretch to the full width of the content */
  fluid: l.bool,
  /** Displays loading spinner on button while condition is true **/
  loading: l.bool,
  /** Set text to appear during loading animation **/
  loadingText: l.string,
  /** Displays button as flex and centers all direct children nodes. Useful for aligning icons and text **/
  flexCenter: l.bool,
  /** When value condition is true, retains any custom, inline `style={}` defined **/
  active: l.bool
};
export {
  w as B
};
