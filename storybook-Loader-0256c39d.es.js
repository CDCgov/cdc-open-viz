import { j as r } from "./storybook-jsx-runtime-ea6e0d87.es.js";
import { r as n } from "./storybook-index-f2fed736.es.js";
const a = ({ spinnerType: s }) => /* @__PURE__ */ r("div", { className: `spinner-border ${s}`, role: "status", children: /* @__PURE__ */ r("span", { className: "sr-only", children: "Loading..." }) }), i = ({ fullScreen: s = !1, spinnerType: t }) => {
  const e = n.useRef(null);
  return n.useEffect(() => {
    if (e != null && e.current) {
      const c = e.current.parentElement.clientHeight;
      e.current.style.height = `${c}px`;
    }
  }, []), s ? /* @__PURE__ */ r("div", { ref: e, className: "cove-loader fullscreen", children: /* @__PURE__ */ r(a, { spinnerType: t || "text-primary" }) }) : /* @__PURE__ */ r(a, { spinnerType: t || "text-primary" });
};
export {
  i as L
};
