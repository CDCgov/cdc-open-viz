const y = [["baseColor", "#333"], ["blue", "#005eaa"], ["lightestGray", "#f2f2f2"], ["lightGray", "#c7c7c7"], ["mediumGray", "#565656"], ["darkGray", "#333"], ["red", "#d8000c"], ["white", "#fff"], ["primary", "#005eaa"], ["secondary", "#88c3ea"], ["tertiary", "#c0e9ff"], ["quaternary", "#edf9ff"], ["purple-primary", "#712177"], ["purple-secondary", "#b890bb"], ["purple-tertiary", "#e3d3e4"], ["purple-quaternary", "#f7f2f7"], ["brown-primary", "#705043"], ["brown-secondary", "#ad907b"], ["brown-tertiary", "#d7ccc8"], ["brown-quaternary", "#f2ebe8"], ["teal-primary", "#00695c"], ["teal-secondary", "#4ebaaa"], ["teal-tertiary", "#ceece7"], ["teal-quaternary", "#ebf7f5"], ["pink-primary", "#af4448"], ["pink-secondary", "#e57373"], ["pink-tertiary", "#ffc2c2"], ["pink-quaternary", "#ffe7e7"], ["orange-primary", "#bb4d00"], ["orange-secondary", "#ffad42"], ["orange-tertiary", "#ffe97d"], ["orange-quaternary", "#fff4cf"], ["slate-primary", "#29434e"], ["slate-secondary", "#7e9ba5"], ["slate-tertiary", "#b6c6d2"], ["slate-quaternary", "#e2e8ed"], ["indigo-primary", "#26418f"], ["indigo-secondary", "#92a6dd"], ["indigo-tertiary", "#dee8ff"], ["indigo-quaternary", "#f2f6ff"], ["cyan-primary", "#006778"], ["cyan-secondary", "#65b0bd"], ["cyan-tertiary", "#cce5e9"], ["cyan-quaternary", "#ebf5f6"], ["green-primary", "#4b830d"], ["green-secondary", "#84bc49"], ["green-tertiary", "#dcedc8"], ["green-quaternary", "#f1f8e9"], ["amber-primary", "#fbab18"], ["amber-secondary", "#ffd54f"], ["amber-tertiary", "#ffecb3"], ["amber-quaternary", "#fff7e1"]], f = () => /* @__PURE__ */ React.createElement("table", {
  className: "table"
}, y.map(([c, r]) => /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", {
  style: {
    background: r,
    width: "60px"
  }
}), /* @__PURE__ */ React.createElement("td", null, c), /* @__PURE__ */ React.createElement("td", null, r)))), o = {
  title: "Components/Atoms/Colors",
  component: f
}, e = {};
var a, t, n;
e.parameters = {
  ...e.parameters,
  docs: {
    ...(a = e.parameters) == null ? void 0 : a.docs,
    source: {
      originalSource: "{}",
      ...(n = (t = e.parameters) == null ? void 0 : t.docs) == null ? void 0 : n.source
    }
  }
};
const d = ["Primary"];
export {
  e as Primary,
  d as __namedExportsOrder,
  o as default
};
