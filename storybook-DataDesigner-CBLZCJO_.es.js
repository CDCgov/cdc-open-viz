import { R as e, r as p } from "./storybook-index-9_ikpx_Z.es.js";
import { B as i } from "./storybook-Button-JXzouO-M.es.js";
import { C as o } from "./storybook-Card-DY-SPxNI.es.js";
const R = /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("table", null, /* @__PURE__ */ e.createElement("tbody", null, /* @__PURE__ */ e.createElement("tr", null, /* @__PURE__ */ e.createElement("th", null, "Date"), /* @__PURE__ */ e.createElement("th", null, "Value"), /* @__PURE__ */ e.createElement("th", null, "...")), /* @__PURE__ */ e.createElement("tr", null, /* @__PURE__ */ e.createElement("td", null, "01/01/2020"), /* @__PURE__ */ e.createElement("td", null, "150"), /* @__PURE__ */ e.createElement("td", null, "...")), /* @__PURE__ */ e.createElement("tr", null, /* @__PURE__ */ e.createElement("td", null, "02/01/2020"), /* @__PURE__ */ e.createElement("td", null, "150"), /* @__PURE__ */ e.createElement("td", null, "...")))), /* @__PURE__ */ e.createElement("table", null, /* @__PURE__ */ e.createElement("tbody", null, /* @__PURE__ */ e.createElement("tr", null, /* @__PURE__ */ e.createElement("th", null, "State"), /* @__PURE__ */ e.createElement("th", null, "Value"), /* @__PURE__ */ e.createElement("th", null, "...")), /* @__PURE__ */ e.createElement("tr", null, /* @__PURE__ */ e.createElement("td", null, "Georgia"), /* @__PURE__ */ e.createElement("td", null, "150"), /* @__PURE__ */ e.createElement("td", null, "...")), /* @__PURE__ */ e.createElement("tr", null, /* @__PURE__ */ e.createElement("td", null, "Florida"), /* @__PURE__ */ e.createElement("td", null, "150"), /* @__PURE__ */ e.createElement("td", null, "..."))))), h = /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("table", null, /* @__PURE__ */ e.createElement("tbody", null, /* @__PURE__ */ e.createElement("tr", null, /* @__PURE__ */ e.createElement("th", null, "Date"), /* @__PURE__ */ e.createElement("td", null, "01/01/2020"), /* @__PURE__ */ e.createElement("td", null, "02/01/2020"), /* @__PURE__ */ e.createElement("td", null, "...")), /* @__PURE__ */ e.createElement("tr", null, /* @__PURE__ */ e.createElement("th", null, "Value"), /* @__PURE__ */ e.createElement("td", null, "100"), /* @__PURE__ */ e.createElement("td", null, "150"), /* @__PURE__ */ e.createElement("td", null, "...")))), /* @__PURE__ */ e.createElement("table", null, /* @__PURE__ */ e.createElement("tbody", null, /* @__PURE__ */ e.createElement("tr", null, /* @__PURE__ */ e.createElement("th", null, "State"), /* @__PURE__ */ e.createElement("td", null, "Georgia"), /* @__PURE__ */ e.createElement("td", null, "Florida"), /* @__PURE__ */ e.createElement("td", null, "...")), /* @__PURE__ */ e.createElement("tr", null, /* @__PURE__ */ e.createElement("th", null, "Value"), /* @__PURE__ */ e.createElement("td", null, "100"), /* @__PURE__ */ e.createElement("td", null, "150"), /* @__PURE__ */ e.createElement("td", null, "..."))))), v = /* @__PURE__ */ e.createElement("table", null, /* @__PURE__ */ e.createElement("tbody", null, /* @__PURE__ */ e.createElement("tr", null, /* @__PURE__ */ e.createElement("th", null, "Date"), /* @__PURE__ */ e.createElement("th", null, "Virus 1"), /* @__PURE__ */ e.createElement("th", null, "Virus 2"), /* @__PURE__ */ e.createElement("th", null, "...")), /* @__PURE__ */ e.createElement("tr", null, /* @__PURE__ */ e.createElement("td", null, "01/01/2020"), /* @__PURE__ */ e.createElement("td", null, "100"), /* @__PURE__ */ e.createElement("td", null, "150"), /* @__PURE__ */ e.createElement("td", null, "...")), /* @__PURE__ */ e.createElement("tr", null, /* @__PURE__ */ e.createElement("td", null, "02/01/2020"), /* @__PURE__ */ e.createElement("td", null, "15"), /* @__PURE__ */ e.createElement("td", null, "20"), /* @__PURE__ */ e.createElement("td", null, "...")))), g = /* @__PURE__ */ e.createElement("table", null, /* @__PURE__ */ e.createElement("tbody", null, /* @__PURE__ */ e.createElement("tr", null, /* @__PURE__ */ e.createElement("th", null, "Virus"), /* @__PURE__ */ e.createElement("th", null, "Date"), /* @__PURE__ */ e.createElement("th", null, "Value")), /* @__PURE__ */ e.createElement("tr", null, /* @__PURE__ */ e.createElement("td", null, "Virus 1"), /* @__PURE__ */ e.createElement("td", null, "01/01/2020"), /* @__PURE__ */ e.createElement("td", null, "100")), /* @__PURE__ */ e.createElement("tr", null, /* @__PURE__ */ e.createElement("td", null, "Virus 1"), /* @__PURE__ */ e.createElement("td", null, "02/01/2020"), /* @__PURE__ */ e.createElement("td", null, "150")), /* @__PURE__ */ e.createElement("tr", null, /* @__PURE__ */ e.createElement("td", null, "..."), /* @__PURE__ */ e.createElement("td", null, "..."), /* @__PURE__ */ e.createElement("td", null, "...")), /* @__PURE__ */ e.createElement("tr", null, /* @__PURE__ */ e.createElement("td", null, "Virus 2"), /* @__PURE__ */ e.createElement("td", null, "01/01/2020"), /* @__PURE__ */ e.createElement("td", null, "15")), /* @__PURE__ */ e.createElement("tr", null, /* @__PURE__ */ e.createElement("td", null, "Virus 2"), /* @__PURE__ */ e.createElement("td", null, "02/01/2020"), /* @__PURE__ */ e.createElement("td", null, "20")), /* @__PURE__ */ e.createElement("tr", null, /* @__PURE__ */ e.createElement("td", null, "..."), /* @__PURE__ */ e.createElement("td", null, "..."), /* @__PURE__ */ e.createElement("td", null, "...")))), N = (m) => {
  const { configureData: a, updateDescriptionProp: r, config: l, setConfig: c } = m, u = (l == null ? void 0 : l.visualizationType) !== "Forest Plot", d = (l == null ? void 0 : l.visualizationType) !== "Forest Plot", E = (l == null ? void 0 : l.visualizationType) !== "Forest Plot";
  return p.useEffect(() => {
    (l == null ? void 0 : l.visualizationType) === "Forest Plot" && c({
      ...l,
      dataDescription: {
        series: !0,
        horizontal: !1,
        singleRow: !0
      }
    });
  }, []), /* @__PURE__ */ React.createElement("div", { className: "cove-data-designer__container" }, /* @__PURE__ */ React.createElement("div", { className: "mb-2" }, /* @__PURE__ */ React.createElement("div", { className: "cove-heading--3 fw-bold mb-1" }, "Describe Data"), u && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "cove-heading--3 fw-normal mb-1" }, "Data Orientation"), /* @__PURE__ */ React.createElement("div", { className: "grid grid-gap-2 mb-4" }, /* @__PURE__ */ React.createElement("div", { className: "column" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "cove-data-designer__button" + (a.dataDescription && a.dataDescription.horizontal === !1 ? " active" : ""),
      onClick: () => {
        r("horizontal", !1);
      }
    },
    /* @__PURE__ */ React.createElement(o, null, /* @__PURE__ */ React.createElement("strong", { className: "cove-heading--3" }, "Vertical"), /* @__PURE__ */ React.createElement("p", { className: "mb-1" }, "Values for map geography or chart date/category axis are contained in a single ", /* @__PURE__ */ React.createElement("em", null, "column"), "."), R)
  )), /* @__PURE__ */ React.createElement("div", { className: "column" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "cove-data-designer__button" + (a.dataDescription && a.dataDescription.horizontal === !0 ? " active" : ""),
      onClick: () => {
        r("horizontal", !0);
      }
    },
    /* @__PURE__ */ React.createElement(o, null, /* @__PURE__ */ React.createElement("strong", { className: "cove-heading--3" }, "Horizontal"), /* @__PURE__ */ React.createElement("p", { className: "mb-1" }, "Values for map geography or chart date/category axis are contained in a single ", /* @__PURE__ */ React.createElement("em", null, "row")), h)
  ))))), a.dataDescription && /* @__PURE__ */ React.createElement(React.Fragment, null, d && /* @__PURE__ */ React.createElement("div", { className: "mb-2" }, /* @__PURE__ */ React.createElement("div", { className: "mb-1" }, "Are there multiple series represented in your data?"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(
    i,
    {
      style: { backgroundColor: "#00345d" },
      hoverStyle: { backgroundColor: "#015daa" },
      className: "mr-1",
      onClick: () => {
        r("series", !0);
      },
      active: a.dataDescription.series === !0
    },
    "Yes"
  ), /* @__PURE__ */ React.createElement(
    i,
    {
      style: { backgroundColor: "#00345d" },
      hoverStyle: { backgroundColor: "#015daa" },
      onClick: () => {
        r("series", !1);
      },
      active: a.dataDescription.series === !1
    },
    "No"
  ))), a.dataDescription.horizontal === !0 && a.dataDescription.series === !0 && /* @__PURE__ */ React.createElement("div", { className: "mb-2" }, /* @__PURE__ */ React.createElement("div", { className: "mb-1" }, "Which property in the dataset represents which series the row is describing?"), /* @__PURE__ */ React.createElement(
    "select",
    {
      onChange: (t) => {
        r("seriesKey", t.target.value);
      },
      defaultValue: a.dataDescription.seriesKey
    },
    /* @__PURE__ */ React.createElement("option", { value: "" }, "Choose an option"),
    Object.keys(a.data[0]).map((t, n) => /* @__PURE__ */ React.createElement("option", { value: t, key: n }, t))
  )), a.dataDescription.horizontal === !1 && a.dataDescription.series === !0 && E && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "mb-2" }, /* @__PURE__ */ React.createElement("div", { className: "mb-1" }, "Are the series values in your data represented in a single row, or across multiple rows?"), /* @__PURE__ */ React.createElement("div", { className: "grid grid-gap-2 mb-4" }, /* @__PURE__ */ React.createElement("div", { className: "column" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "cove-data-designer__button" + (a.dataDescription.singleRow === !0 ? " active" : ""),
      onClick: () => {
        r("singleRow", !0);
      }
    },
    /* @__PURE__ */ React.createElement(o, null, /* @__PURE__ */ React.createElement("strong", { className: "cove-heading--3" }, "Single Row"), /* @__PURE__ */ React.createElement("p", { className: "mb-1" }, "Each row contains the data for an individual series in itself."), v)
  )), /* @__PURE__ */ React.createElement("div", { className: "column" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "cove-data-designer__button" + (a.dataDescription.singleRow === !1 ? " active" : ""),
      onClick: () => {
        r("singleRow", !1);
      }
    },
    /* @__PURE__ */ React.createElement(o, null, /* @__PURE__ */ React.createElement("strong", { className: "cove-heading--3" }, "Multiple Rows"), /* @__PURE__ */ React.createElement("p", { className: "mb-1" }, "Each series data is broken out into multiple rows."), g)
  )))), a.dataDescription.singleRow === !1 && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "mb-2" }, /* @__PURE__ */ React.createElement("div", { className: "mb-1" }, "Which property in the dataset represents which series the row is describing?"), /* @__PURE__ */ React.createElement(
    "select",
    {
      onChange: (t) => {
        r("seriesKey", t.target.value);
      },
      defaultValue: a.dataDescription.seriesKey
    },
    /* @__PURE__ */ React.createElement("option", { value: "" }, "Choose an option"),
    Object.keys(a.data[0]).map((t, n) => /* @__PURE__ */ React.createElement("option", { value: t, key: n }, t))
  )), /* @__PURE__ */ React.createElement("div", { className: "mb-2" }, /* @__PURE__ */ React.createElement("div", { className: "mb-1" }, "Which property in the dataset represents the values for the category/date axis or map geography?"), /* @__PURE__ */ React.createElement(
    "select",
    {
      onChange: (t) => {
        r("xKey", t.target.value);
      },
      defaultValue: a.dataDescription.xKey
    },
    /* @__PURE__ */ React.createElement("option", { value: "" }, "Choose an option"),
    Object.keys(a.data[0]).map((t, n) => /* @__PURE__ */ React.createElement("option", { value: t, key: n }, t))
  )), /* @__PURE__ */ React.createElement("div", { className: "mb-2" }, /* @__PURE__ */ React.createElement("div", { className: "mb-1" }, "Which properties in the dataset represent the numeric value? (all remaining properties will be treated as filters)"), a.dataDescription.valueKeysTallSupport && a.dataDescription.valueKeysTallSupport.length > 0 && /* @__PURE__ */ React.createElement("ul", { className: "value-list" }, a.dataDescription.valueKeysTallSupport.map((t, n) => /* @__PURE__ */ React.createElement("li", { key: `value-keys-list-${n}` }, t, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => {
        let s = a.dataDescription.valueKeysTallSupport;
        s.splice(n, 1), r("valueKeysTallSupport", s);
      }
    },
    "X"
  )))), /* @__PURE__ */ React.createElement(
    "select",
    {
      onChange: (t) => {
        t.target.value && (!a.dataDescription.valueKeysTallSupport || a.dataDescription.valueKeysTallSupport.indexOf(t.target.value) === -1) && r("valueKeysTallSupport", [...a.dataDescription.valueKeysTallSupport || [], t.target.value]);
      }
    },
    /* @__PURE__ */ React.createElement("option", { value: "" }, "Choose an option"),
    Object.keys(a.data[0]).filter((t) => !a.dataDescription.valueKeysTallSupport || a.dataDescription.valueKeysTallSupport.indexOf(t) === -1).map((t, n) => /* @__PURE__ */ React.createElement("option", { value: t, key: `value-keys-option-${n}` }, t))
  )), /* @__PURE__ */ React.createElement("div", { className: "mb-2" }, /* @__PURE__ */ React.createElement("div", { className: "mb-1" }, "(Optional) Which properties in the dataset should be ignored? (will not be used or treated as filters)"), a.dataDescription.ignoredKeys && a.dataDescription.ignoredKeys.length > 0 && /* @__PURE__ */ React.createElement("ul", { className: "value-list" }, a.dataDescription.ignoredKeys.map((t, n) => /* @__PURE__ */ React.createElement("li", { key: `value-keys-list-${n}` }, t, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => {
        let s = a.dataDescription.ignoredKeys;
        s.splice(n, 1), r("ignoredKeys", s);
      }
    },
    "X"
  )))), /* @__PURE__ */ React.createElement(
    "select",
    {
      onChange: (t) => {
        t.target.value && r("ignoredKeys", [...a.dataDescription.ignoredKeys || [], t.target.value]), t.target.value = "";
      }
    },
    /* @__PURE__ */ React.createElement("option", { value: "" }, "Choose an option"),
    Object.keys(a.data[0]).filter((t) => !a.dataDescription.ignoredKeys || a.dataDescription.ignoredKeys.indexOf(t) === -1).map((t, n) => /* @__PURE__ */ React.createElement("option", { value: t, key: `ignored-keys-option-${n}` }, t))
  )))), (l == null ? void 0 : l.visualizationType) === "Forest Plot" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "mb-2" }, /* @__PURE__ */ React.createElement("div", { className: "mb-1" }, "Which column represents the Study ID?"), /* @__PURE__ */ React.createElement(
    "select",
    {
      onChange: (t) => {
        c({
          ...l,
          xAxis: {
            ...l.xAxis,
            dataKey: t.target.value
          }
        });
      },
      defaultValue: "Select"
    },
    /* @__PURE__ */ React.createElement("option", { value: "" }, "Choose an option"),
    Object.keys(a.data[0]).map((t, n) => /* @__PURE__ */ React.createElement("option", { value: t, key: n }, t))
  )), /* @__PURE__ */ React.createElement("div", { className: "mb-2" }, /* @__PURE__ */ React.createElement("div", { className: "mb-1" }, "Which column represents your estimate field?"), /* @__PURE__ */ React.createElement(
    "select",
    {
      onChange: (t) => {
        c({
          ...l,
          forestPlot: {
            ...l.forestPlot,
            estimateField: t.target.value
          }
        });
      },
      defaultValue: "Select"
    },
    /* @__PURE__ */ React.createElement("option", { value: "" }, "Choose an option"),
    Object.keys(a.data[0]).map((t, n) => /* @__PURE__ */ React.createElement("option", { value: t, key: n }, t))
  )), /* @__PURE__ */ React.createElement("div", { className: "mb-2" }, /* @__PURE__ */ React.createElement("div", { className: "mb-1" }, "Which column represents the low confidence interval?"), /* @__PURE__ */ React.createElement(
    "select",
    {
      onChange: (t) => {
        c({
          ...l,
          forestPlot: {
            ...l.forestPlot,
            lower: t.target.value
          }
        });
      },
      defaultValue: "Select"
    },
    /* @__PURE__ */ React.createElement("option", { value: "" }, "Choose an option"),
    Object.keys(a.data[0]).map((t, n) => /* @__PURE__ */ React.createElement("option", { value: t, key: n }, t))
  )), /* @__PURE__ */ React.createElement("div", { className: "mb-2" }, /* @__PURE__ */ React.createElement("div", { className: "mb-1" }, "Which column represents the high confidence interval?"), /* @__PURE__ */ React.createElement(
    "select",
    {
      onChange: (t) => {
        c({
          ...l,
          forestPlot: {
            ...l.forestPlot,
            upper: t.target.value
          }
        });
      },
      defaultValue: "Select"
    },
    /* @__PURE__ */ React.createElement("option", { value: "" }, "Choose an option"),
    Object.keys(a.data[0]).map((t, n) => /* @__PURE__ */ React.createElement("option", { value: t, key: n }, t))
  )))), a.dataDescription && a.formattedData && /* @__PURE__ */ React.createElement("div", null, "Data configured successfully"));
};
export {
  N as D
};
