import { R as e } from "./storybook-index-45401197.es.js";
import { C as o } from "./storybook-CdcWaffleChart-89d05418.es.js";
import "./storybook-_commonjsHelpers-c5d32002.es.js";
import "./storybook-index-3b47b3f7.es.js";
import "./storybook-getViewport-513ec896.es.js";
import "./storybook-fetchRemoteData-1d0a5295.es.js";
import "./storybook-papaparse.min-b07ddc33.es.js";
import "./storybook-isSolr-4154a32f.es.js";
import "./storybook-viewports-5c5d7af1.es.js";
import "./storybook-Accordion-2501c7d9.es.js";
import "./storybook-index-43433e35.es.js";
import "./storybook-Icon-4f5978ba.es.js";
import "./storybook-Tooltip-4102bd69.es.js";
import "./storybook-Button-63da743c.es.js";
import "./storybook-editor-57986c01.es.js";
import "./storybook-useDebounce-78f40efd.es.js";
import "./storybook-index-4ed993c7.es.js";
import "./storybook-InputSelect-20478396.es.js";
import "./storybook-updateFieldFactory-c006040a.es.js";
import "./storybook-coveUpdateWorker-4c7dbbf1.es.js";
import "./storybook-lodash-a4231e1c.es.js";
import "./storybook-linear-bc5fb9aa.es.js";
import "./storybook-linear-ef79b404.es.js";
import "./storybook-year-24bd1dc7.es.js";
const W = {
  title: "Components/Templates/WaffleChart",
  component: o
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
  render: (n) => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(o, {
    ...n
  }))
}, t = {
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
  render: (n) => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(o, {
    ...n
  }))
};
var r, s, i;
a.parameters = {
  ...a.parameters,
  docs: {
    ...(r = a.parameters) == null ? void 0 : r.docs,
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
      ...(i = (s = a.parameters) == null ? void 0 : s.docs) == null ? void 0 : i.source
    }
  }
};
var l, u, d;
t.parameters = {
  ...t.parameters,
  docs: {
    ...(l = t.parameters) == null ? void 0 : l.docs,
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
      ...(d = (u = t.parameters) == null ? void 0 : u.docs) == null ? void 0 : d.source
    }
  }
};
const E = ["Person", "Gauge"];
export {
  t as Gauge,
  a as Person,
  E as __namedExportsOrder,
  W as default
};
