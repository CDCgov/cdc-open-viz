import { N as t } from "./storybook-NestedDropdown-b706d3ab.es.js";
import "./storybook-index-45401197.es.js";
import "./storybook-_commonjsHelpers-c5d32002.es.js";
import "./storybook-Icon-9a8d8f01.es.js";
const y = {
  title: "Components/Molecules/NestedDropdown",
  component: t
}, n = {
  args: {
    data: [{
      country: "USA",
      region: "Region1"
    }, {
      country: "USA",
      region: "Florida"
    }, {
      country: "USA",
      region: "Iowa"
    }, {
      country: "Country2",
      region: "Region1"
    }, {
      country: "Country2",
      region: "Region2"
    }, {
      country: "Country2",
      region: "Region3"
    }, {
      country: "Italy",
      region: "Region1"
    }, {
      country: "Italy",
      region: "Naples"
    }, {
      country: "Italy",
      region: "Region3"
    }],
    tiers: ["country", "region"],
    listLabel: "Countries of the World",
    handleSelectedItems: console.log
  }
};
var o, r, e;
n.parameters = {
  ...n.parameters,
  docs: {
    ...(o = n.parameters) == null ? void 0 : o.docs,
    source: {
      originalSource: `{
  args: {
    data: [{
      country: 'USA',
      region: 'Region1'
    }, {
      country: 'USA',
      region: 'Florida'
    }, {
      country: 'USA',
      region: 'Iowa'
    }, {
      country: 'Country2',
      region: 'Region1'
    }, {
      country: 'Country2',
      region: 'Region2'
    }, {
      country: 'Country2',
      region: 'Region3'
    }, {
      country: 'Italy',
      region: 'Region1'
    }, {
      country: 'Italy',
      region: 'Naples'
    }, {
      country: 'Italy',
      region: 'Region3'
    }],
    tiers: ['country', 'region'],
    listLabel: 'Countries of the World',
    handleSelectedItems: console.log
  }
}`,
      ...(e = (r = n.parameters) == null ? void 0 : r.docs) == null ? void 0 : e.source
    }
  }
};
const s = ["Primary"];
export {
  n as Primary,
  s as __namedExportsOrder,
  y as default
};
