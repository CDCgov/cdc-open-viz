import { N as n } from "./storybook-NestedDropdown-c8ea7d17.es.js";
import { r as c } from "./storybook-index-45401197.es.js";
import "./storybook-Icon-d8cd8abc.es.js";
import "./storybook-Loader-f4ec7b29.es.js";
import "./storybook-_commonjsHelpers-c5d32002.es.js";
const i = "New Dashboard Filter 1", p = !0, d = [
  "Age Group",
  "Age Group 2",
  "Age Group 3"
], y = [
  "Age Group",
  "Age Group 2",
  "Age Group 3"
], m = "datafilter", g = "nested-dropdown", v = "StratficationCategory1", S = "", G = {
  columnName: "Stratification1",
  active: "",
  valuesLookup: {
    "Age Group": {
      orderedValues: [
        "50-64 years",
        "65 years or older",
        "Overall"
      ],
      values: [
        "50-64 years",
        "65 years or older",
        "Overall"
      ]
    },
    "Age Group 2": {
      orderedValues: [
        "65 years or older",
        "Overall"
      ],
      values: [
        "65 years or older",
        "Overall"
      ]
    },
    "Age Group 3": {
      orderedValues: [
        "50-64 years",
        "Overall"
      ],
      values: [
        "50-64 years",
        "Overall"
      ]
    }
  }
}, b = [
  "chart1724946676832"
], w = 1, A = {
  key: i,
  showDropdown: p,
  values: d,
  orderedValues: y,
  type: m,
  filterStyle: g,
  columnName: v,
  active: S,
  subGrouping: G,
  usedBy: b,
  tier: w
}, V = {
  title: "Components/Molecules/NestedDropdown",
  component: n
}, F = (f) => {
  const [r, a] = c.useState({
    ...A
  });
  return /* @__PURE__ */ React.createElement(n, {
    listLabel: "Age",
    handleSelectedItems: ([u, l]) => {
      a({
        ...r,
        active: u,
        subGrouping: {
          ...r.subGrouping,
          active: l
        }
      });
    },
    currentFilter: r
  });
}, e = F.bind({});
var t, o, s;
e.parameters = {
  ...e.parameters,
  docs: {
    ...(t = e.parameters) == null ? void 0 : t.docs,
    source: {
      originalSource: `args => {
  const [currentStoryFilter, setCurrentStoryFilter] = useState({
    ...nestedDropdownStory
  });
  return <NestedDropdown listLabel='Age' handleSelectedItems={([group, subGroup]) => {
    setCurrentStoryFilter({
      ...currentStoryFilter,
      active: group,
      subGrouping: {
        ...currentStoryFilter.subGrouping,
        active: subGroup
      }
    });
  }} currentFilter={currentStoryFilter} />;
}`,
      ...(s = (o = e.parameters) == null ? void 0 : o.docs) == null ? void 0 : s.source
    }
  }
};
const k = ["Primary"];
export {
  e as Primary,
  k as __namedExportsOrder,
  V as default
};
