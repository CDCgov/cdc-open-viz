import { r as s, R as t } from "./storybook-index-45401197.es.js";
const a = ({ spinnerType: r }) => /* @__PURE__ */ t.createElement("div", { className: `spinner-border ${r}`, role: "status" }, /* @__PURE__ */ t.createElement("span", { className: "sr-only" }, "Loading...")), o = ({ fullScreen: r = !1, spinnerType: n }) => {
  const e = s.useRef(null);
  return s.useEffect(() => {
    if (e != null && e.current) {
      const c = e.current.parentElement.clientHeight;
      e.current.style.height = `${c}px`;
    }
  }, []), r ? /* @__PURE__ */ t.createElement("div", { ref: e, className: "cove-loader fullscreen" }, /* @__PURE__ */ t.createElement(a, { spinnerType: n || "text-primary" })) : /* @__PURE__ */ t.createElement(a, { spinnerType: n || "text-primary" });
};
export {
  o as L
};
