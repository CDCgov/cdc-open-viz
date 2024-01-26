import { R as e, r as v } from "./storybook-e61d95ab.es.js";
import { B as u } from "./storybook-8d78bf52.es.js";
import { C as m } from "./storybook-c11e9ca9.es.js";
const g = /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("table", null, /* @__PURE__ */ e.createElement("tbody", null, /* @__PURE__ */ e.createElement("tr", null, /* @__PURE__ */ e.createElement("th", null, "Date"), /* @__PURE__ */ e.createElement("th", null, "Value"), /* @__PURE__ */ e.createElement("th", null, "...")), /* @__PURE__ */ e.createElement("tr", null, /* @__PURE__ */ e.createElement("td", null, "01/01/2020"), /* @__PURE__ */ e.createElement("td", null, "150"), /* @__PURE__ */ e.createElement("td", null, "...")), /* @__PURE__ */ e.createElement("tr", null, /* @__PURE__ */ e.createElement("td", null, "02/01/2020"), /* @__PURE__ */ e.createElement("td", null, "150"), /* @__PURE__ */ e.createElement("td", null, "...")))), /* @__PURE__ */ e.createElement("table", null, /* @__PURE__ */ e.createElement("tbody", null, /* @__PURE__ */ e.createElement("tr", null, /* @__PURE__ */ e.createElement("th", null, "State"), /* @__PURE__ */ e.createElement("th", null, "Value"), /* @__PURE__ */ e.createElement("th", null, "...")), /* @__PURE__ */ e.createElement("tr", null, /* @__PURE__ */ e.createElement("td", null, "Georgia"), /* @__PURE__ */ e.createElement("td", null, "150"), /* @__PURE__ */ e.createElement("td", null, "...")), /* @__PURE__ */ e.createElement("tr", null, /* @__PURE__ */ e.createElement("td", null, "Florida"), /* @__PURE__ */ e.createElement("td", null, "150"), /* @__PURE__ */ e.createElement("td", null, "..."))))), y = /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("table", null, /* @__PURE__ */ e.createElement("tbody", null, /* @__PURE__ */ e.createElement("tr", null, /* @__PURE__ */ e.createElement("th", null, "Date"), /* @__PURE__ */ e.createElement("td", null, "01/01/2020"), /* @__PURE__ */ e.createElement("td", null, "02/01/2020"), /* @__PURE__ */ e.createElement("td", null, "...")), /* @__PURE__ */ e.createElement("tr", null, /* @__PURE__ */ e.createElement("th", null, "Value"), /* @__PURE__ */ e.createElement("td", null, "100"), /* @__PURE__ */ e.createElement("td", null, "150"), /* @__PURE__ */ e.createElement("td", null, "...")))), /* @__PURE__ */ e.createElement("table", null, /* @__PURE__ */ e.createElement("tbody", null, /* @__PURE__ */ e.createElement("tr", null, /* @__PURE__ */ e.createElement("th", null, "State"), /* @__PURE__ */ e.createElement("td", null, "Georgia"), /* @__PURE__ */ e.createElement("td", null, "Florida"), /* @__PURE__ */ e.createElement("td", null, "...")), /* @__PURE__ */ e.createElement("tr", null, /* @__PURE__ */ e.createElement("th", null, "Value"), /* @__PURE__ */ e.createElement("td", null, "100"), /* @__PURE__ */ e.createElement("td", null, "150"), /* @__PURE__ */ e.createElement("td", null, "..."))))), b = /* @__PURE__ */ e.createElement("table", null, /* @__PURE__ */ e.createElement("tbody", null, /* @__PURE__ */ e.createElement("tr", null, /* @__PURE__ */ e.createElement("th", null, "Date"), /* @__PURE__ */ e.createElement("th", null, "Virus 1"), /* @__PURE__ */ e.createElement("th", null, "Virus 2"), /* @__PURE__ */ e.createElement("th", null, "...")), /* @__PURE__ */ e.createElement("tr", null, /* @__PURE__ */ e.createElement("td", null, "01/01/2020"), /* @__PURE__ */ e.createElement("td", null, "100"), /* @__PURE__ */ e.createElement("td", null, "150"), /* @__PURE__ */ e.createElement("td", null, "...")), /* @__PURE__ */ e.createElement("tr", null, /* @__PURE__ */ e.createElement("td", null, "02/01/2020"), /* @__PURE__ */ e.createElement("td", null, "15"), /* @__PURE__ */ e.createElement("td", null, "20"), /* @__PURE__ */ e.createElement("td", null, "...")))), D = /* @__PURE__ */ e.createElement("table", null, /* @__PURE__ */ e.createElement("tbody", null, /* @__PURE__ */ e.createElement("tr", null, /* @__PURE__ */ e.createElement("th", null, "Virus"), /* @__PURE__ */ e.createElement("th", null, "Date"), /* @__PURE__ */ e.createElement("th", null, "Value")), /* @__PURE__ */ e.createElement("tr", null, /* @__PURE__ */ e.createElement("td", null, "Virus 1"), /* @__PURE__ */ e.createElement("td", null, "01/01/2020"), /* @__PURE__ */ e.createElement("td", null, "100")), /* @__PURE__ */ e.createElement("tr", null, /* @__PURE__ */ e.createElement("td", null, "Virus 1"), /* @__PURE__ */ e.createElement("td", null, "02/01/2020"), /* @__PURE__ */ e.createElement("td", null, "150")), /* @__PURE__ */ e.createElement("tr", null, /* @__PURE__ */ e.createElement("td", null, "..."), /* @__PURE__ */ e.createElement("td", null, "..."), /* @__PURE__ */ e.createElement("td", null, "...")), /* @__PURE__ */ e.createElement("tr", null, /* @__PURE__ */ e.createElement("td", null, "Virus 2"), /* @__PURE__ */ e.createElement("td", null, "01/01/2020"), /* @__PURE__ */ e.createElement("td", null, "15")), /* @__PURE__ */ e.createElement("tr", null, /* @__PURE__ */ e.createElement("td", null, "Virus 2"), /* @__PURE__ */ e.createElement("td", null, "02/01/2020"), /* @__PURE__ */ e.createElement("td", null, "20")), /* @__PURE__ */ e.createElement("tr", null, /* @__PURE__ */ e.createElement("td", null, "..."), /* @__PURE__ */ e.createElement("td", null, "..."), /* @__PURE__ */ e.createElement("td", null, "..."))));
const C = (d) => {
  const { configureData: l, updateDescriptionProp: r, visualizationKey: c, dataKey: s, config: a, setConfig: o } = d, E = (a == null ? void 0 : a.visualizationType) !== "Forest Plot", p = (a == null ? void 0 : a.visualizationType) !== "Forest Plot", h = (a == null ? void 0 : a.visualizationType) !== "Forest Plot";
  return v.useEffect(() => {
    (a == null ? void 0 : a.visualizationType) === "Forest Plot" && o({
      ...a,
      dataDescription: {
        series: !0,
        horizontal: !1,
        singleRow: !0
      }
    });
  }, []), /* @__PURE__ */ e.createElement("div", { className: "cove-data-designer__container" }, /* @__PURE__ */ e.createElement("div", { className: "mb-2" }, /* @__PURE__ */ e.createElement("div", { className: "cove-heading--3 fw-bold mb-1" }, "Describe Data"), E && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "cove-heading--3 fw-normal mb-1" }, "Data Orientation"), /* @__PURE__ */ e.createElement("div", { className: "grid grid-gap-2 mb-4" }, /* @__PURE__ */ e.createElement("div", { className: "column" }, /* @__PURE__ */ e.createElement(
    "button",
    {
      className: "cove-data-designer__button" + (l.dataDescription && l.dataDescription.horizontal === !1 ? " active" : ""),
      onClick: () => {
        r(c, s, "horizontal", !1);
      }
    },
    /* @__PURE__ */ e.createElement(m, null, /* @__PURE__ */ e.createElement("strong", { className: "cove-heading--3" }, "Vertical"), /* @__PURE__ */ e.createElement("p", { className: "mb-1" }, "Values for map geography or chart date/category axis are contained in a single ", /* @__PURE__ */ e.createElement("em", null, "column"), "."), g)
  )), /* @__PURE__ */ e.createElement("div", { className: "column" }, /* @__PURE__ */ e.createElement(
    "button",
    {
      className: "cove-data-designer__button" + (l.dataDescription && l.dataDescription.horizontal === !0 ? " active" : ""),
      onClick: () => {
        r(c, s, "horizontal", !0);
      }
    },
    /* @__PURE__ */ e.createElement(m, null, /* @__PURE__ */ e.createElement("strong", { className: "cove-heading--3" }, "Horizontal"), /* @__PURE__ */ e.createElement("p", { className: "mb-1" }, "Values for map geography or chart date/category axis are contained in a single ", /* @__PURE__ */ e.createElement("em", null, "row")), y)
  ))))), l.dataDescription && /* @__PURE__ */ e.createElement(e.Fragment, null, p && /* @__PURE__ */ e.createElement("div", { className: "mb-2" }, /* @__PURE__ */ e.createElement("div", { className: "mb-1" }, "Are there multiple series represented in your data?"), /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement(
    u,
    {
      style: { backgroundColor: "#00345d" },
      hoverStyle: { backgroundColor: "#015daa" },
      className: "mr-1",
      onClick: () => {
        r(c, s, "series", !0);
      },
      active: l.dataDescription.series === !0
    },
    "Yes"
  ), /* @__PURE__ */ e.createElement(
    u,
    {
      style: { backgroundColor: "#00345d" },
      hoverStyle: { backgroundColor: "#015daa" },
      onClick: () => {
        r(c, s, "series", !1);
      },
      active: l.dataDescription.series === !1
    },
    "No"
  ))), l.dataDescription.horizontal === !0 && l.dataDescription.series === !0 && /* @__PURE__ */ e.createElement("div", { className: "mb-2" }, /* @__PURE__ */ e.createElement("div", { className: "mb-1" }, "Which property in the dataset represents which series the row is describing?"), /* @__PURE__ */ e.createElement(
    "select",
    {
      onChange: (t) => {
        r(c, s, "seriesKey", t.target.value);
      },
      defaultValue: l.dataDescription.seriesKey
    },
    /* @__PURE__ */ e.createElement("option", { value: "" }, "Choose an option"),
    Object.keys(l.data[0]).map((t, n) => /* @__PURE__ */ e.createElement("option", { value: t, key: n }, t))
  )), l.dataDescription.horizontal === !1 && l.dataDescription.series === !0 && h && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "mb-2" }, /* @__PURE__ */ e.createElement("div", { className: "mb-1" }, "Are the series values in your data represented in a single row, or across multiple rows?"), /* @__PURE__ */ e.createElement("div", { className: "grid grid-gap-2 mb-4" }, /* @__PURE__ */ e.createElement("div", { className: "column" }, /* @__PURE__ */ e.createElement(
    "button",
    {
      className: "cove-data-designer__button" + (l.dataDescription.singleRow === !0 ? " active" : ""),
      onClick: () => {
        r(c, s, "singleRow", !0);
      }
    },
    /* @__PURE__ */ e.createElement(m, null, /* @__PURE__ */ e.createElement("strong", { className: "cove-heading--3" }, "Single Row"), /* @__PURE__ */ e.createElement("p", { className: "mb-1" }, "Each row contains the data for an individual series in itself."), b)
  )), /* @__PURE__ */ e.createElement("div", { className: "column" }, /* @__PURE__ */ e.createElement(
    "button",
    {
      className: "cove-data-designer__button" + (l.dataDescription.singleRow === !1 ? " active" : ""),
      onClick: () => {
        r(c, s, "singleRow", !1);
      }
    },
    /* @__PURE__ */ e.createElement(m, null, /* @__PURE__ */ e.createElement("strong", { className: "cove-heading--3" }, "Multiple Rows"), /* @__PURE__ */ e.createElement("p", { className: "mb-1" }, "Each series data is broken out into multiple rows."), D)
  )))), l.dataDescription.singleRow === !1 && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "mb-2" }, /* @__PURE__ */ e.createElement("div", { className: "mb-1" }, "Which property in the dataset represents which series the row is describing?"), /* @__PURE__ */ e.createElement(
    "select",
    {
      onChange: (t) => {
        r(c, s, "seriesKey", t.target.value);
      },
      defaultValue: l.dataDescription.seriesKey
    },
    /* @__PURE__ */ e.createElement("option", { value: "" }, "Choose an option"),
    Object.keys(l.data[0]).map((t, n) => /* @__PURE__ */ e.createElement("option", { value: t, key: n }, t))
  )), /* @__PURE__ */ e.createElement("div", { className: "mb-2" }, /* @__PURE__ */ e.createElement("div", { className: "mb-1" }, "Which property in the dataset represents the values for the category/date axis or map geography?"), /* @__PURE__ */ e.createElement(
    "select",
    {
      onChange: (t) => {
        r(c, s, "xKey", t.target.value);
      },
      defaultValue: l.dataDescription.xKey
    },
    /* @__PURE__ */ e.createElement("option", { value: "" }, "Choose an option"),
    Object.keys(l.data[0]).map((t, n) => /* @__PURE__ */ e.createElement("option", { value: t, key: n }, t))
  )), /* @__PURE__ */ e.createElement("div", { className: "mb-2" }, /* @__PURE__ */ e.createElement("div", { className: "mb-1" }, "Which properties in the dataset represent the numeric value? (all remaining properties will be treated as filters)"), l.dataDescription.valueKeysTallSupport && l.dataDescription.valueKeysTallSupport.length > 0 && /* @__PURE__ */ e.createElement("ul", { className: "value-list" }, l.dataDescription.valueKeysTallSupport.map((t, n) => /* @__PURE__ */ e.createElement("li", { key: `value-keys-list-${n}` }, t, /* @__PURE__ */ e.createElement(
    "button",
    {
      onClick: () => {
        let i = l.dataDescription.valueKeysTallSupport;
        i.splice(n, 1), r(c, s, "valueKeysTallSupport", i);
      }
    },
    "X"
  )))), /* @__PURE__ */ e.createElement(
    "select",
    {
      onChange: (t) => {
        t.target.value && (!l.dataDescription.valueKeysTallSupport || l.dataDescription.valueKeysTallSupport.indexOf(t.target.value) === -1) && r(c, s, "valueKeysTallSupport", [...l.dataDescription.valueKeysTallSupport || [], t.target.value]);
      }
    },
    /* @__PURE__ */ e.createElement("option", { value: "" }, "Choose an option"),
    Object.keys(l.data[0]).filter((t) => !l.dataDescription.valueKeysTallSupport || l.dataDescription.valueKeysTallSupport.indexOf(t) === -1).map((t, n) => /* @__PURE__ */ e.createElement("option", { value: t, key: `value-keys-option-${n}` }, t))
  )), /* @__PURE__ */ e.createElement("div", { className: "mb-2" }, /* @__PURE__ */ e.createElement("div", { className: "mb-1" }, "(Optional) Which properties in the dataset should be ignored? (will not be used or treated as filters)"), l.dataDescription.ignoredKeys && l.dataDescription.ignoredKeys.length > 0 && /* @__PURE__ */ e.createElement("ul", { className: "value-list" }, l.dataDescription.ignoredKeys.map((t, n) => /* @__PURE__ */ e.createElement("li", { key: `value-keys-list-${n}` }, t, /* @__PURE__ */ e.createElement(
    "button",
    {
      onClick: () => {
        let i = l.dataDescription.ignoredKeys;
        i.splice(n, 1), r(c, s, "ignoredKeys", i);
      }
    },
    "X"
  )))), /* @__PURE__ */ e.createElement(
    "select",
    {
      onChange: (t) => {
        t.target.value && r(c, s, "ignoredKeys", [...l.dataDescription.ignoredKeys || [], t.target.value]), t.target.value = "";
      }
    },
    /* @__PURE__ */ e.createElement("option", { value: "" }, "Choose an option"),
    Object.keys(l.data[0]).filter((t) => !l.dataDescription.ignoredKeys || l.dataDescription.ignoredKeys.indexOf(t) === -1).map((t, n) => /* @__PURE__ */ e.createElement("option", { value: t, key: `ignored-keys-option-${n}` }, t))
  )))), (a == null ? void 0 : a.visualizationType) === "Forest Plot" && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "mb-2" }, /* @__PURE__ */ e.createElement("div", { className: "mb-1" }, "Which column represents the Study ID?"), /* @__PURE__ */ e.createElement(
    "select",
    {
      onChange: (t) => {
        o({
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
        o({
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
        o({
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
        o({
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
  C as D
};
