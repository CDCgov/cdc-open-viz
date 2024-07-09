const m = ({ footnotes: t }) => /* @__PURE__ */ React.createElement("footer", { className: "col-12 m-3 mt-1 mb-0" }, /* @__PURE__ */ React.createElement("ul", { className: "cove-footnotes" }, t.map((e, a) => /* @__PURE__ */ React.createElement("li", { key: e.symbol + a, className: "mb-1" }, e.symbol && /* @__PURE__ */ React.createElement("span", { className: "mr-1" }, e.symbol), e.text))));
export {
  m as F
};
