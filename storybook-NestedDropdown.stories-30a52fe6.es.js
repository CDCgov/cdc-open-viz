import { j as c } from "./storybook-jsx-runtime-ea6e0d87.es.js";
import { N as n } from "./storybook-NestedDropdown-92b50717.es.js";
import { r as i } from "./storybook-index-f2fed736.es.js";
import "./storybook-Icon-e250778e.es.js";
import "./storybook-Loader-0256c39d.es.js";
import "./storybook-_commonjsHelpers-c5d32002.es.js";
const p = "New Dashboard Filter 1", d = !0, y = [
  "Age Group",
  "Age Group 2",
  "Age Group 3"
], m = [
  "Age Group",
  "Age Group 2",
  "Age Group 3"
], g = "datafilter", v = "nested-dropdown", S = "StratficationCategory1", G = "", b = {
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
}, w = [
  "chart1724946676832"
], A = 1, F = {
  key: p,
  showDropdown: d,
  values: y,
  orderedValues: m,
  type: g,
  filterStyle: v,
  columnName: S,
  active: G,
  subGrouping: b,
  usedBy: w,
  tier: A
}, k = {
  title: "Components/Molecules/NestedDropdown",
  component: n
}, f = (D) => {
  const [r, a] = i.useState({
    ...F
  });
  return /* @__PURE__ */ c(n, {
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
}, e = f.bind({});
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
const L = ["Primary"];
export {
  e as Primary,
  L as __namedExportsOrder,
  k as default
};
