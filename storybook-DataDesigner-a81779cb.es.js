import { R as e, r as p } from "./storybook-index-45401197.es.js";
import { B as i } from "./storybook-Button-d74e310e.es.js";
import { C as o } from "./storybook-Card-6750b07b.es.js";
const h = /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("table", null, /* @__PURE__ */ e.createElement("tbody", null, /* @__PURE__ */ e.createElement("tr", null, /* @__PURE__ */ e.createElement("th", null, "Date"), /* @__PURE__ */ e.createElement("th", null, "Value"), /* @__PURE__ */ e.createElement("th", null, "...")), /* @__PURE__ */ e.createElement("tr", null, /* @__PURE__ */ e.createElement("td", null, "01/01/2020"), /* @__PURE__ */ e.createElement("td", null, "150"), /* @__PURE__ */ e.createElement("td", null, "...")), /* @__PURE__ */ e.createElement("tr", null, /* @__PURE__ */ e.createElement("td", null, "02/01/2020"), /* @__PURE__ */ e.createElement("td", null, "150"), /* @__PURE__ */ e.createElement("td", null, "...")))), /* @__PURE__ */ e.createElement("table", null, /* @__PURE__ */ e.createElement("tbody", null, /* @__PURE__ */ e.createElement("tr", null, /* @__PURE__ */ e.createElement("th", null, "State"), /* @__PURE__ */ e.createElement("th", null, "Value"), /* @__PURE__ */ e.createElement("th", null, "...")), /* @__PURE__ */ e.createElement("tr", null, /* @__PURE__ */ e.createElement("td", null, "Georgia"), /* @__PURE__ */ e.createElement("td", null, "150"), /* @__PURE__ */ e.createElement("td", null, "...")), /* @__PURE__ */ e.createElement("tr", null, /* @__PURE__ */ e.createElement("td", null, "Florida"), /* @__PURE__ */ e.createElement("td", null, "150"), /* @__PURE__ */ e.createElement("td", null, "..."))))), v = /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("table", null, /* @__PURE__ */ e.createElement("tbody", null, /* @__PURE__ */ e.createElement("tr", null, /* @__PURE__ */ e.createElement("th", null, "Date"), /* @__PURE__ */ e.createElement("td", null, "01/01/2020"), /* @__PURE__ */ e.createElement("td", null, "02/01/2020"), /* @__PURE__ */ e.createElement("td", null, "...")), /* @__PURE__ */ e.createElement("tr", null, /* @__PURE__ */ e.createElement("th", null, "Value"), /* @__PURE__ */ e.createElement("td", null, "100"), /* @__PURE__ */ e.createElement("td", null, "150"), /* @__PURE__ */ e.createElement("td", null, "...")))), /* @__PURE__ */ e.createElement("table", null, /* @__PURE__ */ e.createElement("tbody", null, /* @__PURE__ */ e.createElement("tr", null, /* @__PURE__ */ e.createElement("th", null, "State"), /* @__PURE__ */ e.createElement("td", null, "Georgia"), /* @__PURE__ */ e.createElement("td", null, "Florida"), /* @__PURE__ */ e.createElement("td", null, "...")), /* @__PURE__ */ e.createElement("tr", null, /* @__PURE__ */ e.createElement("th", null, "Value"), /* @__PURE__ */ e.createElement("td", null, "100"), /* @__PURE__ */ e.createElement("td", null, "150"), /* @__PURE__ */ e.createElement("td", null, "..."))))), g = /* @__PURE__ */ e.createElement("table", null, /* @__PURE__ */ e.createElement("tbody", null, /* @__PURE__ */ e.createElement("tr", null, /* @__PURE__ */ e.createElement("th", null, "Date"), /* @__PURE__ */ e.createElement("th", null, "Virus 1"), /* @__PURE__ */ e.createElement("th", null, "Virus 2"), /* @__PURE__ */ e.createElement("th", null, "...")), /* @__PURE__ */ e.createElement("tr", null, /* @__PURE__ */ e.createElement("td", null, "01/01/2020"), /* @__PURE__ */ e.createElement("td", null, "100"), /* @__PURE__ */ e.createElement("td", null, "150"), /* @__PURE__ */ e.createElement("td", null, "...")), /* @__PURE__ */ e.createElement("tr", null, /* @__PURE__ */ e.createElement("td", null, "02/01/2020"), /* @__PURE__ */ e.createElement("td", null, "15"), /* @__PURE__ */ e.createElement("td", null, "20"), /* @__PURE__ */ e.createElement("td", null, "...")))), y = /* @__PURE__ */ e.createElement("table", null, /* @__PURE__ */ e.createElement("tbody", null, /* @__PURE__ */ e.createElement("tr", null, /* @__PURE__ */ e.createElement("th", null, "Virus"), /* @__PURE__ */ e.createElement("th", null, "Date"), /* @__PURE__ */ e.createElement("th", null, "Value")), /* @__PURE__ */ e.createElement("tr", null, /* @__PURE__ */ e.createElement("td", null, "Virus 1"), /* @__PURE__ */ e.createElement("td", null, "01/01/2020"), /* @__PURE__ */ e.createElement("td", null, "100")), /* @__PURE__ */ e.createElement("tr", null, /* @__PURE__ */ e.createElement("td", null, "Virus 1"), /* @__PURE__ */ e.createElement("td", null, "02/01/2020"), /* @__PURE__ */ e.createElement("td", null, "150")), /* @__PURE__ */ e.createElement("tr", null, /* @__PURE__ */ e.createElement("td", null, "..."), /* @__PURE__ */ e.createElement("td", null, "..."), /* @__PURE__ */ e.createElement("td", null, "...")), /* @__PURE__ */ e.createElement("tr", null, /* @__PURE__ */ e.createElement("td", null, "Virus 2"), /* @__PURE__ */ e.createElement("td", null, "01/01/2020"), /* @__PURE__ */ e.createElement("td", null, "15")), /* @__PURE__ */ e.createElement("tr", null, /* @__PURE__ */ e.createElement("td", null, "Virus 2"), /* @__PURE__ */ e.createElement("td", null, "02/01/2020"), /* @__PURE__ */ e.createElement("td", null, "20")), /* @__PURE__ */ e.createElement("tr", null, /* @__PURE__ */ e.createElement("td", null, "..."), /* @__PURE__ */ e.createElement("td", null, "..."), /* @__PURE__ */ e.createElement("td", null, "..."))));
const f = (m) => {
  const { configureData: l, updateDescriptionProp: r, config: a, setConfig: c } = m, u = (a == null ? void 0 : a.visualizationType) !== "Forest Plot", d = (a == null ? void 0 : a.visualizationType) !== "Forest Plot", E = (a == null ? void 0 : a.visualizationType) !== "Forest Plot";
  return p.useEffect(() => {
    (a == null ? void 0 : a.visualizationType) === "Forest Plot" && c({
      ...a,
      dataDescription: {
        series: !0,
        horizontal: !1,
        singleRow: !0
      }
    });
  }, []), /* @__PURE__ */ e.createElement("div", { className: "cove-data-designer__container" }, /* @__PURE__ */ e.createElement("div", { className: "mb-2" }, /* @__PURE__ */ e.createElement("div", { className: "cove-heading--3 fw-bold mb-1" }, "Describe Data"), u && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "cove-heading--3 fw-normal mb-1" }, "Data Orientation"), /* @__PURE__ */ e.createElement("div", { className: "grid grid-gap-2 mb-4" }, /* @__PURE__ */ e.createElement("div", { className: "column" }, /* @__PURE__ */ e.createElement(
    "button",
    {
      className: "cove-data-designer__button" + (l.dataDescription && l.dataDescription.horizontal === !1 ? " active" : ""),
      onClick: () => {
        r("horizontal", !1);
      }
    },
    /* @__PURE__ */ e.createElement(o, null, /* @__PURE__ */ e.createElement("strong", { className: "cove-heading--3" }, "Vertical"), /* @__PURE__ */ e.createElement("p", { className: "mb-1" }, "Values for map geography or chart date/category axis are contained in a single ", /* @__PURE__ */ e.createElement("em", null, "column"), "."), h)
  )), /* @__PURE__ */ e.createElement("div", { className: "column" }, /* @__PURE__ */ e.createElement(
    "button",
    {
      className: "cove-data-designer__button" + (l.dataDescription && l.dataDescription.horizontal === !0 ? " active" : ""),
      onClick: () => {
        r("horizontal", !0);
      }
    },
    /* @__PURE__ */ e.createElement(o, null, /* @__PURE__ */ e.createElement("strong", { className: "cove-heading--3" }, "Horizontal"), /* @__PURE__ */ e.createElement("p", { className: "mb-1" }, "Values for map geography or chart date/category axis are contained in a single ", /* @__PURE__ */ e.createElement("em", null, "row")), v)
  ))))), l.dataDescription && /* @__PURE__ */ e.createElement(e.Fragment, null, d && /* @__PURE__ */ e.createElement("div", { className: "mb-2" }, /* @__PURE__ */ e.createElement("div", { className: "mb-1" }, "Are there multiple series represented in your data?"), /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement(
    i,
    {
      style: { backgroundColor: "#00345d" },
      hoverStyle: { backgroundColor: "#015daa" },
      className: "mr-1",
      onClick: () => {
        r("series", !0);
      },
      active: l.dataDescription.series === !0
    },
    "Yes"
  ), /* @__PURE__ */ e.createElement(
    i,
    {
      style: { backgroundColor: "#00345d" },
      hoverStyle: { backgroundColor: "#015daa" },
      onClick: () => {
        r("series", !1);
      },
      active: l.dataDescription.series === !1
    },
    "No"
  ))), l.dataDescription.horizontal === !0 && l.dataDescription.series === !0 && /* @__PURE__ */ e.createElement("div", { className: "mb-2" }, /* @__PURE__ */ e.createElement("div", { className: "mb-1" }, "Which property in the dataset represents which series the row is describing?"), /* @__PURE__ */ e.createElement(
    "select",
    {
      onChange: (t) => {
        r("seriesKey", t.target.value);
      },
      defaultValue: l.dataDescription.seriesKey
    },
    /* @__PURE__ */ e.createElement("option", { value: "" }, "Choose an option"),
    Object.keys(l.data[0]).map((t, n) => /* @__PURE__ */ e.createElement("option", { value: t, key: n }, t))
  )), l.dataDescription.horizontal === !1 && l.dataDescription.series === !0 && E && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "mb-2" }, /* @__PURE__ */ e.createElement("div", { className: "mb-1" }, "Are the series values in your data represented in a single row, or across multiple rows?"), /* @__PURE__ */ e.createElement("div", { className: "grid grid-gap-2 mb-4" }, /* @__PURE__ */ e.createElement("div", { className: "column" }, /* @__PURE__ */ e.createElement(
    "button",
    {
      className: "cove-data-designer__button" + (l.dataDescription.singleRow === !0 ? " active" : ""),
      onClick: () => {
        r("singleRow", !0);
      }
    },
    /* @__PURE__ */ e.createElement(o, null, /* @__PURE__ */ e.createElement("strong", { className: "cove-heading--3" }, "Single Row"), /* @__PURE__ */ e.createElement("p", { className: "mb-1" }, "Each row contains the data for an individual series in itself."), g)
  )), /* @__PURE__ */ e.createElement("div", { className: "column" }, /* @__PURE__ */ e.createElement(
    "button",
    {
      className: "cove-data-designer__button" + (l.dataDescription.singleRow === !1 ? " active" : ""),
      onClick: () => {
        r("singleRow", !1);
      }
    },
    /* @__PURE__ */ e.createElement(o, null, /* @__PURE__ */ e.createElement("strong", { className: "cove-heading--3" }, "Multiple Rows"), /* @__PURE__ */ e.createElement("p", { className: "mb-1" }, "Each series data is broken out into multiple rows."), y)
  )))), l.dataDescription.singleRow === !1 && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "mb-2" }, /* @__PURE__ */ e.createElement("div", { className: "mb-1" }, "Which property in the dataset represents which series the row is describing?"), /* @__PURE__ */ e.createElement(
    "select",
    {
      onChange: (t) => {
        r("seriesKey", t.target.value);
      },
      defaultValue: l.dataDescription.seriesKey
    },
    /* @__PURE__ */ e.createElement("option", { value: "" }, "Choose an option"),
    Object.keys(l.data[0]).map((t, n) => /* @__PURE__ */ e.createElement("option", { value: t, key: n }, t))
  )), /* @__PURE__ */ e.createElement("div", { className: "mb-2" }, /* @__PURE__ */ e.createElement("div", { className: "mb-1" }, "Which property in the dataset represents the values for the category/date axis or map geography?"), /* @__PURE__ */ e.createElement(
    "select",
    {
      onChange: (t) => {
        r("xKey", t.target.value);
      },
      defaultValue: l.dataDescription.xKey
    },
    /* @__PURE__ */ e.createElement("option", { value: "" }, "Choose an option"),
    Object.keys(l.data[0]).map((t, n) => /* @__PURE__ */ e.createElement("option", { value: t, key: n }, t))
  )), /* @__PURE__ */ e.createElement("div", { className: "mb-2" }, /* @__PURE__ */ e.createElement("div", { className: "mb-1" }, "Which properties in the dataset represent the numeric value? (all remaining properties will be treated as filters)"), l.dataDescription.valueKeysTallSupport && l.dataDescription.valueKeysTallSupport.length > 0 && /* @__PURE__ */ e.createElement("ul", { className: "value-list" }, l.dataDescription.valueKeysTallSupport.map((t, n) => /* @__PURE__ */ e.createElement("li", { key: `value-keys-list-${n}` }, t, /* @__PURE__ */ e.createElement(
    "button",
    {
      onClick: () => {
        let s = l.dataDescription.valueKeysTallSupport;
        s.splice(n, 1), r("valueKeysTallSupport", s);
      }
    },
    "X"
  )))), /* @__PURE__ */ e.createElement(
    "select",
    {
      onChange: (t) => {
        t.target.value && (!l.dataDescription.valueKeysTallSupport || l.dataDescription.valueKeysTallSupport.indexOf(t.target.value) === -1) && r("valueKeysTallSupport", [...l.dataDescription.valueKeysTallSupport || [], t.target.value]);
      }
    },
    /* @__PURE__ */ e.createElement("option", { value: "" }, "Choose an option"),
    Object.keys(l.data[0]).filter((t) => !l.dataDescription.valueKeysTallSupport || l.dataDescription.valueKeysTallSupport.indexOf(t) === -1).map((t, n) => /* @__PURE__ */ e.createElement("option", { value: t, key: `value-keys-option-${n}` }, t))
  )), /* @__PURE__ */ e.createElement("div", { className: "mb-2" }, /* @__PURE__ */ e.createElement("div", { className: "mb-1" }, "(Optional) Which properties in the dataset should be ignored? (will not be used or treated as filters)"), l.dataDescription.ignoredKeys && l.dataDescription.ignoredKeys.length > 0 && /* @__PURE__ */ e.createElement("ul", { className: "value-list" }, l.dataDescription.ignoredKeys.map((t, n) => /* @__PURE__ */ e.createElement("li", { key: `value-keys-list-${n}` }, t, /* @__PURE__ */ e.createElement(
    "button",
    {
      onClick: () => {
        let s = l.dataDescription.ignoredKeys;
        s.splice(n, 1), r("ignoredKeys", s);
      }
    },
    "X"
  )))), /* @__PURE__ */ e.createElement(
    "select",
    {
      onChange: (t) => {
        t.target.value && r("ignoredKeys", [...l.dataDescription.ignoredKeys || [], t.target.value]), t.target.value = "";
      }
    },
    /* @__PURE__ */ e.createElement("option", { value: "" }, "Choose an option"),
    Object.keys(l.data[0]).filter((t) => !l.dataDescription.ignoredKeys || l.dataDescription.ignoredKeys.indexOf(t) === -1).map((t, n) => /* @__PURE__ */ e.createElement("option", { value: t, key: `ignored-keys-option-${n}` }, t))
  )))), (a == null ? void 0 : a.visualizationType) === "Forest Plot" && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "mb-2" }, /* @__PURE__ */ e.createElement("div", { className: "mb-1" }, "Which column represents the Study ID?"), /* @__PURE__ */ e.createElement(
    "select",
    {
      onChange: (t) => {
        c({
          ...a,
          xAxis: {
            ...a.xAxis,
            dataKey: t.target.value
          }
        });
      },
      defaultValue: "Select"
    },
    /* @__PURE__ */ e.createElement("option", { value: "" }, "Choose an option"),
    Object.keys(l.data[0]).map((t, n) => /* @__PURE__ */ e.createElement("option", { value: t, key: n }, t))
  )), /* @__PURE__ */ e.createElement("div", { className: "mb-2" }, /* @__PURE__ */ e.createElement("div", { className: "mb-1" }, "Which column represents your estimate field?"), /* @__PURE__ */ e.createElement(
    "select",
    {
      onChange: (t) => {
        c({
          ...a,
          forestPlot: {
            ...a.forestPlot,
            estimateField: t.target.value
          }
        });
      },
      defaultValue: "Select"
    },
    /* @__PURE__ */ e.createElement("option", { value: "" }, "Choose an option"),
    Object.keys(l.data[0]).map((t, n) => /* @__PURE__ */ e.createElement("option", { value: t, key: n }, t))
  )), /* @__PURE__ */ e.createElement("div", { className: "mb-2" }, /* @__PURE__ */ e.createElement("div", { className: "mb-1" }, "Which column represents the low confidence interval?"), /* @__PURE__ */ e.createElement(
    "select",
    {
      onChange: (t) => {
        c({
          ...a,
          forestPlot: {
            ...a.forestPlot,
            lower: t.target.value
          }
        });
      },
      defaultValue: "Select"
    },
    /* @__PURE__ */ e.createElement("option", { value: "" }, "Choose an option"),
    Object.keys(l.data[0]).map((t, n) => /* @__PURE__ */ e.createElement("option", { value: t, key: n }, t))
  )), /* @__PURE__ */ e.createElement("div", { className: "mb-2" }, /* @__PURE__ */ e.createElement("div", { className: "mb-1" }, "Which column represents the high confidence interval?"), /* @__PURE__ */ e.createElement(
    "select",
    {
      onChange: (t) => {
        c({
          ...a,
          forestPlot: {
            ...a.forestPlot,
            upper: t.target.value
          }
        });
      },
      defaultValue: "Select"
    },
    /* @__PURE__ */ e.createElement("option", { value: "" }, "Choose an option"),
    Object.keys(l.data[0]).map((t, n) => /* @__PURE__ */ e.createElement("option", { value: t, key: n }, t))
  )))), l.dataDescription && l.formattedData && /* @__PURE__ */ e.createElement("div", null, "Data configured successfully"));
};
export {
  f as D
};
