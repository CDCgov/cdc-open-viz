import { j as o, F as b, a as v } from "./storybook-8087091f.es.js";
import { useRef as E, useState as f, useEffect as _ } from "react";
import { P as r } from "./storybook-38eee769.es.js";
const F = ({ color: a = "#fff", opacity: s = 100, size: c = 100, className: d }) => /* @__PURE__ */ o(b, { children: /* @__PURE__ */ o("div", { className: `cove-loadspin${d ? " " + d : ""}`, style: { width: c, height: c }, children: /* @__PURE__ */ o("div", { className: "cove-loadspin__roller", style: { opacity: s / 100, transform: `scale(${c / 80})` }, children: [...Array(8)].map((u, h) => /* @__PURE__ */ o("div", { style: { backgroundColor: a } }, h)) }) }) });
const T = ({ style: a, role: s, hoverStyle: c = {}, fluid: d = !1, loading: n = !1, loadingText: u = "Loading...", flexCenter: h, active: N = !1, onClick: S, children: i, ...m }) => {
  const e = E(null), [y, p] = f("out"), [B, x] = f({ ...a }), [W, g] = f(), [j, L] = f(), C = {
    ...m,
    style: B,
    className: "cove-button" + (h || s === "loader" ? " cove-button--flex-center" : "") + (d ? " fluid" : "") + (n ? " loading" : "") + (m.className ? " " + m.className : ""),
    onMouseOver: () => p("in"),
    onMouseOut: () => p("out"),
    onFocus: () => p("in"),
    onBlur: () => p("out")
  };
  return _(() => {
    if (s === "loader" && e.current) {
      const t = document.createElement("span"), w = document.createTextNode(i);
      t.style.opacity = "0", t.style.visibility = "hidden";
      const l = document.createElement("span"), O = document.createTextNode(u);
      l.style.opacity = "0", l.style.visibility = "hidden", t.appendChild(w), l.appendChild(O), e.current.parentNode.insertBefore(t, e.current), e.current.parentNode.insertBefore(l, e.current), g(t.offsetWidth + 2), L(l.offsetWidth + 2), e.current.parentNode.removeChild(t), e.current.parentNode.removeChild(l);
    }
    return () => {
    };
  }, [e, i, u, s]), _(() => {
    y === "in" && x((t) => ({ ...t, ...c })), y === "out" && (N || x({ ...a }));
  }, [y, N, a]), /* @__PURE__ */ o(
    "button",
    {
      ...C,
      onClick: (t) => (t.preventDefault(), n || S()),
      disabled: n || C.disabled,
      ref: e,
      children: i && /* @__PURE__ */ v(b, { children: [
        s === "loader" && /* @__PURE__ */ v(b, { children: [
          /* @__PURE__ */ v("span", { className: "cove-button__text", style: n ? { width: j + "px" } : { width: W + "px" }, children: [
            /* @__PURE__ */ o("div", { className: "cove-button__text--loading", style: n ? { opacity: 1 } : null, children: u }),
            /* @__PURE__ */ o("div", { className: "cove-button__text--children", style: n ? { opacity: 0 } : null, children: i })
          ] }),
          /* @__PURE__ */ o("div", { className: "cove-button__load-spin", style: n ? { width: "28px", opacity: 1 } : null, children: /* @__PURE__ */ o(F, { className: "ml-1", size: 20 }) })
        ] }),
        s !== "loader" && i
      ] })
    }
  );
};
T.propTypes = {
  /** Specify special role type for button */
  role: r.oneOf(["loader"]),
  /** Provide object with styles that overwrite base styles when hovered */
  hoverStyle: r.object,
  /** Enables button to stretch to the full width of the content */
  fluid: r.bool,
  /** Displays loading spinner on button while condition is true **/
  loading: r.bool,
  /** Set text to appear during loading animation **/
  loadingText: r.string,
  /** Displays button as flex and centers all direct children nodes. Useful for aligning icons and text **/
  flexCenter: r.bool,
  /** When value condition is true, retains any custom, inline `style={}` defined **/
  active: r.bool
};
export {
  T as B
};
