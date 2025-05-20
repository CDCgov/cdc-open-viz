import { j as n, F as m } from "./storybook-jsx-runtime-ea6e0d87.es.js";
import { C as o } from "./storybook-CdcWaffleChart-dfec46a9.es.js";
import "./storybook-index-f2fed736.es.js";
import "./storybook-_commonjsHelpers-c5d32002.es.js";
import "./storybook-index-31bf6905.es.js";
import "./storybook-getViewport-513ec896.es.js";
import "./storybook-useDataVizClasses-2dec1abb.es.js";
import "./storybook-viewports-6b80499f.es.js";
import "./storybook-Icon-e250778e.es.js";
import "./storybook-lodash-a4231e1c.es.js";
import "./storybook-Accordion-edcda35b.es.js";
import "./storybook-index-43433e35.es.js";
import "./storybook-Tooltip-5b6ee371.es.js";
import "./storybook-Button-f953e457.es.js";
import "./storybook-editor-f86b5faa.es.js";
import "./storybook-useDebounce-5d0290fd.es.js";
import "./storybook-InputSelect-4074d1ac.es.js";
import "./storybook-coveUpdateWorker-2d39117f.es.js";
import "./storybook-index-4a64ea6e.es.js";
import "./storybook-linear-395e5b60.es.js";
import "./storybook-linear-d485c82c.es.js";
import "./storybook-year-24bd1dc7.es.js";
const P = {
  title: "Components/Templates/WaffleChart",
  component: o
}, e = {
  args: {
    config: {
      type: "waffle-chart",
      shape: "person",
      title: "Overdose Mortality Rates",
      content: "of overdoses resulted in death.",
      subtext: "This data is an example and does not reflect actual averages",
      orientation: "horizontal",
      data: [{
        "Resulted in Death": 250,
        "Number of Overdoses": 600,
        state: "Alabama",
        Year: "2010"
      }, {
        "Resulted in Death": 16,
        "Number of Overdoses": 80,
        state: "Alaska",
        Year: "2008"
      }, {
        "Resulted in Death": 19,
        "Number of Overdoses": 100,
        state: "Alaska",
        Year: "2010"
      }, {
        "Resulted in Death": 93,
        "Number of Overdoses": 400,
        state: "Alaska",
        Year: "2012"
      }, {
        "Resulted in Death": 82,
        "Number of Overdoses": 400,
        state: "Arizona",
        Year: "2010"
      }],
      filters: [],
      fontSize: null,
      overallFontSize: "medium",
      dataColumn: "Resulted in Death",
      dataFunction: "Sum",
      dataConditionalColumn: "",
      dataConditionalOperator: null,
      dataConditionalComparate: "",
      customDenom: !0,
      dataDenom: null,
      dataDenomColumn: "Number of Overdoses",
      dataDenomFunction: "Sum",
      prefix: "",
      suffix: "%",
      roundToPlace: 0,
      nodeWidth: 10,
      nodeSpacer: 2,
      theme: "theme-blue",
      visualizationType: "Waffle",
      visualizationSubType: "",
      invalidComparate: !1,
      showDenominator: !1,
      showPercent: !0,
      valueDescription: "testing",
      visual: {
        border: !0,
        accent: !0,
        background: !0,
        hideBackgroundColor: !0,
        borderColorTheme: !0
      }
    }
  },
  render: (t) => /* @__PURE__ */ n(m, {
    children: /* @__PURE__ */ n(o, {
      ...t
    })
  })
}, a = {
  args: {
    config: {
      type: "waffle-chart",
      shape: "person",
      title: "Overdose Mortality Rates",
      content: "of overdoses resulted in death.",
      subtext: "This data is an example and does not reflect actual averages",
      orientation: "horizontal",
      data: [{
        "Resulted in Death": 250,
        "Number of Overdoses": 600,
        state: "Alabama",
        Year: "2010"
      }, {
        "Resulted in Death": 16,
        "Number of Overdoses": 80,
        state: "Alaska",
        Year: "2008"
      }, {
        "Resulted in Death": 19,
        "Number of Overdoses": 100,
        state: "Alaska",
        Year: "2010"
      }, {
        "Resulted in Death": 93,
        "Number of Overdoses": 400,
        state: "Alaska",
        Year: "2012"
      }, {
        "Resulted in Death": 82,
        "Number of Overdoses": 400,
        state: "Arizona",
        Year: "2010"
      }],
      filters: [],
      fontSize: null,
      overallFontSize: "medium",
      dataColumn: "Resulted in Death",
      dataFunction: "Sum",
      dataConditionalColumn: "",
      dataConditionalOperator: null,
      dataConditionalComparate: "",
      customDenom: !0,
      dataDenom: null,
      dataDenomColumn: "Number of Overdoses",
      dataDenomFunction: "Sum",
      prefix: "",
      suffix: "%",
      roundToPlace: 0,
      nodeWidth: 10,
      nodeSpacer: 2,
      theme: "theme-blue",
      visualizationType: "Gauge",
      visualizationSubType: "",
      invalidComparate: !1,
      showDenominator: !1,
      showPercent: !0,
      valueDescription: "testing",
      visual: {
        border: !0,
        accent: !0,
        background: !0,
        hideBackgroundColor: !0,
        borderColorTheme: !0
      }
    }
  },
  render: (t) => /* @__PURE__ */ n(m, {
    children: /* @__PURE__ */ n(o, {
      ...t
    })
  })
};
var r, s, i;
e.parameters = {
  ...e.parameters,
  docs: {
    ...(r = e.parameters) == null ? void 0 : r.docs,
    source: {
      originalSource: `{
  args: {
    config: {
      type: 'waffle-chart',
      shape: 'person',
      title: 'Overdose Mortality Rates',
      content: 'of overdoses resulted in death.',
      subtext: 'This data is an example and does not reflect actual averages',
      orientation: 'horizontal',
      data: [{
        'Resulted in Death': 250,
        'Number of Overdoses': 600,
        state: 'Alabama',
        Year: '2010'
      }, {
        'Resulted in Death': 16,
        'Number of Overdoses': 80,
        state: 'Alaska',
        Year: '2008'
      }, {
        'Resulted in Death': 19,
        'Number of Overdoses': 100,
        state: 'Alaska',
        Year: '2010'
      }, {
        'Resulted in Death': 93,
        'Number of Overdoses': 400,
        state: 'Alaska',
        Year: '2012'
      }, {
        'Resulted in Death': 82,
        'Number of Overdoses': 400,
        state: 'Arizona',
        Year: '2010'
      }],
      filters: [],
      fontSize: null,
      overallFontSize: 'medium',
      dataColumn: 'Resulted in Death',
      dataFunction: 'Sum',
      dataConditionalColumn: '',
      dataConditionalOperator: null,
      dataConditionalComparate: '',
      customDenom: true,
      dataDenom: null,
      dataDenomColumn: 'Number of Overdoses',
      dataDenomFunction: 'Sum',
      prefix: '',
      suffix: '%',
      roundToPlace: 0,
      nodeWidth: 10,
      nodeSpacer: 2,
      theme: 'theme-blue',
      visualizationType: 'Waffle',
      visualizationSubType: '',
      invalidComparate: false,
      showDenominator: false,
      showPercent: true,
      valueDescription: 'testing',
      visual: {
        border: true,
        accent: true,
        background: true,
        hideBackgroundColor: true,
        borderColorTheme: true
      }
    }
  },
  render: args => <>\r
      <WaffleChart {...args} />\r
    </>
}`,
      ...(i = (s = e.parameters) == null ? void 0 : s.docs) == null ? void 0 : i.source
    }
  }
};
var l, u, d;
a.parameters = {
  ...a.parameters,
  docs: {
    ...(l = a.parameters) == null ? void 0 : l.docs,
    source: {
      originalSource: `{
  args: {
    config: {
      type: 'waffle-chart',
      shape: 'person',
      title: 'Overdose Mortality Rates',
      content: 'of overdoses resulted in death.',
      subtext: 'This data is an example and does not reflect actual averages',
      orientation: 'horizontal',
      data: [{
        'Resulted in Death': 250,
        'Number of Overdoses': 600,
        state: 'Alabama',
        Year: '2010'
      }, {
        'Resulted in Death': 16,
        'Number of Overdoses': 80,
        state: 'Alaska',
        Year: '2008'
      }, {
        'Resulted in Death': 19,
        'Number of Overdoses': 100,
        state: 'Alaska',
        Year: '2010'
      }, {
        'Resulted in Death': 93,
        'Number of Overdoses': 400,
        state: 'Alaska',
        Year: '2012'
      }, {
        'Resulted in Death': 82,
        'Number of Overdoses': 400,
        state: 'Arizona',
        Year: '2010'
      }],
      filters: [],
      fontSize: null,
      overallFontSize: 'medium',
      dataColumn: 'Resulted in Death',
      dataFunction: 'Sum',
      dataConditionalColumn: '',
      dataConditionalOperator: null,
      dataConditionalComparate: '',
      customDenom: true,
      dataDenom: null,
      dataDenomColumn: 'Number of Overdoses',
      dataDenomFunction: 'Sum',
      prefix: '',
      suffix: '%',
      roundToPlace: 0,
      nodeWidth: 10,
      nodeSpacer: 2,
      theme: 'theme-blue',
      visualizationType: 'Gauge',
      visualizationSubType: '',
      invalidComparate: false,
      showDenominator: false,
      showPercent: true,
      valueDescription: 'testing',
      visual: {
        border: true,
        accent: true,
        background: true,
        hideBackgroundColor: true,
        borderColorTheme: true
      }
    }
  },
  render: args => <>\r
      <WaffleChart {...args} />\r
    </>
}`,
      ...(d = (u = a.parameters) == null ? void 0 : u.docs) == null ? void 0 : d.source
    }
  }
};
const W = ["Person", "Gauge"];
export {
  a as Gauge,
  e as Person,
  W as __namedExportsOrder,
  P as default
};
