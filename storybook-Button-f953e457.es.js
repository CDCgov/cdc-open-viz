import { j as o, F as b, a as v } from "./storybook-jsx-runtime-ea6e0d87.es.js";
import { r } from "./storybook-index-f2fed736.es.js";
import { P as a } from "./storybook-index-43433e35.es.js";
const O = ({ color: l = "#fff", opacity: n = 100, size: d = 100, className: u }) => /* @__PURE__ */ o(b, { children: /* @__PURE__ */ o("div", { className: `cove-loadspin${u ? " " + u : ""}`, style: { width: d, height: d }, children: /* @__PURE__ */ o("div", { className: "cove-loadspin__roller", style: { opacity: n / 100, transform: `scale(${d / 80})` }, children: [...Array(8)].map((p, h) => /* @__PURE__ */ o("div", { style: { backgroundColor: l } }, h)) }) }) });
const F = ({
  style: l,
  role: n,
  hoverStyle: d = {},
  fluid: u = !1,
  loading: s = !1,
  loadingText: p = "Loading...",
  flexCenter: h,
  active: x = !1,
  onClick: C,
  children: i,
  secondary: _,
  ...m
}) => {
  const e = r.useRef(null), [y, f] = r.useState("out"), [B, N] = r.useState({ ...l }), [W, g] = r.useState(), [j, E] = r.useState(), S = {
    ...m,
    style: B,
    className: "cove-button" + (h || n === "loader" ? " cove-button--flex-center" : "") + (u ? " fluid" : "") + (s ? " loading" : "") + (m.className ? " " + m.className : "") + (_ ? " secondary" : ""),
    onMouseOver: () => f("in"),
    onMouseOut: () => f("out"),
    onFocus: () => f("in"),
    onBlur: () => f("out")
  };
  return r.useEffect(() => {
    if (n === "loader" && e.current) {
      const t = document.createElement("span"), L = document.createTextNode(i);
      t.style.opacity = "0", t.style.visibility = "hidden";
      const c = document.createElement("span"), w = document.createTextNode(p);
      c.style.opacity = "0", c.style.visibility = "hidden", t.appendChild(L), c.appendChild(w), e.current.parentNode.insertBefore(t, e.current), e.current.parentNode.insertBefore(c, e.current), g(t.offsetWidth + 2), E(c.offsetWidth + 2), e.current.parentNode.removeChild(t), e.current.parentNode.removeChild(c);
    }
    return () => {
    };
  }, [e, i, p, n]), r.useEffect(() => {
    y === "in" && N((t) => ({ ...t, ...d })), y === "out" && (x || N({ ...l }));
  }, [y, x, l]), /* @__PURE__ */ o(
    "button",
    {
      ...S,
      onClick: (t) => (t.preventDefault(), s || C(t)),
      disabled: s || S.disabled,
      ref: e,
      children: i && /* @__PURE__ */ v(b, { children: [
        n === "loader" && /* @__PURE__ */ v(b, { children: [
          /* @__PURE__ */ v(
            "span",
            {
              className: "cove-button__text",
              style: s ? { width: j + "px" } : { width: W + "px" },
              children: [
                /* @__PURE__ */ o("div", { className: "cove-button__text--loading", style: s ? { opacity: 1 } : null, children: p }),
                /* @__PURE__ */ o("div", { className: "cove-button__text--children", style: s ? { opacity: 0 } : null, children: i })
              ]
            }
          ),
          /* @__PURE__ */ o("div", { className: "cove-button__load-spin", style: s ? { width: "28px", opacity: 1 } : null, children: /* @__PURE__ */ o(O, { className: "ms-1", size: 20 }) })
        ] }),
        n !== "loader" && i
      ] })
    }
  );
};
F.propTypes = {
  /** Specify special role type for button */
  role: a.oneOf(["loader"]),
  /** Provide object with styles that overwrite base styles when hovered */
  hoverStyle: a.object,
  /** Enables button to stretch to the full width of the content */
  fluid: a.bool,
  /** Displays loading spinner on button while condition is true **/
  loading: a.bool,
  /** Set text to appear during loading animation **/
  loadingText: a.string,
  /** Displays button as flex and centers all direct children nodes. Useful for aligning icons and text **/
  flexCenter: a.bool,
  /** When value condition is true, retains any custom, inline `style={}` defined **/
  active: a.bool
};
export {
  F as B
};
