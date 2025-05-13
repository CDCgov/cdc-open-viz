import { b as pa, h as ua } from "./storybook-horizontal_bar-4e46191a.es.js";
import { a as t } from "./storybook-annotation_category_mock-49899352.es.js";
import { s as fa } from "./storybook-scatterplot_mock-4c967616.es.js";
import { C as ma } from "./storybook-CdcChartComponent-9be245f2.es.js";
import { e as a } from "./storybook-configHelpers-a0be6ce6.es.js";
import "./storybook-jsx-runtime-ea6e0d87.es.js";
import "./storybook-index-f2fed736.es.js";
import "./storybook-_commonjsHelpers-c5d32002.es.js";
import "./storybook-getViewport-cf99c09b.es.js";
import "./storybook-ConfigContext-54fe77a4.es.js";
import "./storybook-linear-5c281d48.es.js";
import "./storybook-index-43433e35.es.js";
import "./storybook-Tooltip-7cf39805.es.js";
import "./storybook-index-80cf478c.es.js";
import "./storybook-lodash-a4231e1c.es.js";
import "./storybook-Text-0ce4510d.es.js";
import "./storybook-memoize-b2d53f3a.es.js";
import "./storybook-Icon-e250778e.es.js";
import "./storybook-Inputs-f2c63984.es.js";
import "./storybook-useDebounce-5d0290fd.es.js";
import "./storybook-Dropdown-1c93166f.es.js";
import "./storybook-Filters-caf19344.es.js";
import "./storybook-Button-f953e457.es.js";
import "./storybook-MultiSelect-cda00383.es.js";
import "./storybook-Loader-0256c39d.es.js";
import "./storybook-FilterStyles-fd509eb9.es.js";
import "./storybook-NestedDropdown-92b50717.es.js";
import "./storybook-index-8cf78369.es.js";
import "./storybook-extends-0a3e0827.es.js";
import "./storybook-tiny-invariant-9f3340e2.es.js";
import "./storybook-index-4ed993c7.es.js";
import "./storybook-fetchRemoteData-d0119f0b.es.js";
import "./storybook-papaparse.min-9df418d0.es.js";
import "./storybook-useDataVizClasses-3bf30247.es.js";
import "./storybook-viewports-61111b6b.es.js";
import "./storybook-DataTable-577422ab.es.js";
import "./storybook-year-24bd1dc7.es.js";
import "./storybook-index-31bf6905.es.js";
import "./storybook-colorPalettes-bc80e395.es.js";
import "./storybook-Table-7ddd1662.es.js";
import "./storybook-index-8e186da8.es.js";
import "./storybook-debounce-cc216a80.es.js";
import "./storybook-isSymbol-227578c5.es.js";
import "./storybook-linear-7d6b225d.es.js";
import "./storybook-BlurStrokeText-f87cf8cc.es.js";
import "./storybook-DataTransform-d4bb56a2.es.js";
import "./storybook-InputSelect-368b8698.es.js";
import "./storybook-Accordion-e71370da.es.js";
import "./storybook-coveUpdateWorker-2b7600bb.es.js";
const st = {
  title: "Components/Templates/Chart/Prefix Suffix",
  component: ma
}, e = {
  args: {
    config: a(pa, [{
      path: ["dataFormat", "onlyShowTopPrefixSuffix"],
      value: !0
    }, {
      path: ["dataFormat", "suffix"],
      value: " Somethings per Something"
    }, {
      path: ["yAxis", "gridLines"],
      value: !0
    }])
  }
}, o = {
  args: {
    config: a(t, [{
      path: ["dataFormat", "onlyShowTopPrefixSuffix"],
      value: !0
    }, {
      path: ["dataFormat", "suffix"],
      value: " Somethings per Something"
    }])
  }
}, r = {
  args: {
    config: a(t, [{
      path: ["dataFormat", "onlyShowTopPrefixSuffix"],
      value: !0
    }, {
      path: ["yAxis", "tickRotation"],
      value: 45
    }, {
      path: ["yAxis", "tickLabelColor"],
      value: "red"
    }])
  }
}, i = {
  args: {
    config: a(t, [{
      path: ["dataFormat", "onlyShowTopPrefixSuffix"],
      value: !0
    }, {
      path: ["dataFormat", "suffix"],
      value: "lbs"
    }])
  }
}, n = {
  args: {
    config: a(t, [{
      path: ["dataFormat", "onlyShowTopPrefixSuffix"],
      value: !0
    }, {
      path: ["dataFormat", "suffix"],
      value: "lbs of something"
    }])
  }
}, s = {
  args: {
    config: t
  }
}, p = {
  args: {
    config: a(t, [{
      path: ["dataFormat", "onlyShowTopPrefixSuffix"],
      value: !0
    }, {
      path: ["dataFormat", "prefix"],
      value: "$"
    }, {
      path: ["dataFormat", "suffix"],
      value: ""
    }])
  }
}, u = {
  args: {
    config: a(t, [{
      path: ["dataFormat", "prefix"],
      value: "$"
    }, {
      path: ["dataFormat", "suffix"],
      value: ""
    }])
  }
}, f = {
  args: {
    config: a(t, [{
      path: ["dataFormat", "onlyShowTopPrefixSuffix"],
      value: !0
    }, {
      path: ["dataFormat", "prefix"],
      value: "$"
    }])
  }
}, m = {
  args: {
    config: a(ua, [{
      path: ["dataFormat", "suffix"],
      value: " suf"
    }, {
      path: ["dataFormat", "prefix"],
      value: "pre"
    }])
  }
}, l = {
  args: {
    config: a(pa, [{
      path: ["dataFormat", "onlyShowTopPrefixSuffix"],
      value: !0
    }, {
      path: ["dataFormat", "suffix"],
      value: " Somethings per Something"
    }, {
      path: ["yAxis", "gridLines"],
      value: !0
    }, {
      path: ["yAxis", "labelsAboveGridlines"],
      value: !0
    }, {
      path: ["yAxis", "hideAxis"],
      value: !0
    }])
  }
}, c = {
  args: {
    config: a(t, [{
      path: ["yAxis", "labelsAboveGridlines"],
      value: !0
    }, {
      path: ["dataFormat", "suffix"],
      value: " units"
    }, {
      path: ["yAxis", "gridLines"],
      value: !0
    }, {
      path: ["yAxis", "hideAxis"],
      value: !0
    }])
  }
}, d = {
  args: {
    config: a(t, [{
      path: ["dataFormat", "onlyShowTopPrefixSuffix"],
      value: !0
    }, {
      path: ["dataFormat", "prefix"],
      value: "pre"
    }, {
      path: ["dataFormat", "suffix"],
      value: " Somethings per Something"
    }, {
      path: ["yAxis", "labelsAboveGridlines"],
      value: !0
    }, {
      path: ["yAxis", "gridLines"],
      value: !0
    }])
  }
}, x = {
  args: {
    config: a(t, [{
      path: ["yAxis", "tickRotation"],
      value: 45
    }, {
      path: ["yAxis", "tickLabelColor"],
      value: "red"
    }, {
      path: ["yAxis", "labelsAboveGridlines"],
      value: !0
    }, {
      path: ["yAxis", "gridLines"],
      value: !0
    }, {
      path: ["yAxis", "hideAxis"],
      value: !0
    }])
  }
}, g = {
  args: {
    config: a(fa, [{
      path: ["dataFormat", "bottomCommas"],
      value: !0
    }])
  },
  isEditor: !0
};
var h, S, v;
e.parameters = {
  ...e.parameters,
  docs: {
    ...(h = e.parameters) == null ? void 0 : h.docs,
    source: {
      originalSource: `{
  args: {
    config: editConfigKeys(barConfig, [{
      path: ['dataFormat', 'onlyShowTopPrefixSuffix'],
      value: true
    }, {
      path: ['dataFormat', 'suffix'],
      value: ' Somethings per Something'
    }, {
      path: ['yAxis', 'gridLines'],
      value: true
    }])
  }
}`,
      ...(v = (S = e.parameters) == null ? void 0 : S.docs) == null ? void 0 : v.source
    }
  }
};
var _, y, A;
o.parameters = {
  ...o.parameters,
  docs: {
    ...(_ = o.parameters) == null ? void 0 : _.docs,
    source: {
      originalSource: `{
  args: {
    config: editConfigKeys(annotationConfig, [{
      path: ['dataFormat', 'onlyShowTopPrefixSuffix'],
      value: true
    }, {
      path: ['dataFormat', 'suffix'],
      value: ' Somethings per Something'
    }])
  }
}`,
      ...(A = (y = o.parameters) == null ? void 0 : y.docs) == null ? void 0 : A.source
    }
  }
};
var C, F, T;
r.parameters = {
  ...r.parameters,
  docs: {
    ...(C = r.parameters) == null ? void 0 : C.docs,
    source: {
      originalSource: `{
  args: {
    config: editConfigKeys(annotationConfig, [{
      path: ['dataFormat', 'onlyShowTopPrefixSuffix'],
      value: true
    }, {
      path: ['yAxis', 'tickRotation'],
      value: 45
    }, {
      path: ['yAxis', 'tickLabelColor'],
      value: 'red'
    }])
  }
}`,
      ...(T = (F = r.parameters) == null ? void 0 : F.docs) == null ? void 0 : T.source
    }
  }
};
var b, P, L;
i.parameters = {
  ...i.parameters,
  docs: {
    ...(b = i.parameters) == null ? void 0 : b.docs,
    source: {
      originalSource: `{
  args: {
    config: editConfigKeys(annotationConfig, [{
      path: ['dataFormat', 'onlyShowTopPrefixSuffix'],
      value: true
    }, {
      path: ['dataFormat', 'suffix'],
      value: 'lbs'
    }])
  }
}`,
      ...(L = (P = i.parameters) == null ? void 0 : P.docs) == null ? void 0 : L.source
    }
  }
};
var w, K, O;
n.parameters = {
  ...n.parameters,
  docs: {
    ...(w = n.parameters) == null ? void 0 : w.docs,
    source: {
      originalSource: `{
  args: {
    config: editConfigKeys(annotationConfig, [{
      path: ['dataFormat', 'onlyShowTopPrefixSuffix'],
      value: true
    }, {
      path: ['dataFormat', 'suffix'],
      value: 'lbs of something'
    }])
  }
}`,
      ...(O = (K = n.parameters) == null ? void 0 : K.docs) == null ? void 0 : O.source
    }
  }
};
var G, W, k;
s.parameters = {
  ...s.parameters,
  docs: {
    ...(G = s.parameters) == null ? void 0 : G.docs,
    source: {
      originalSource: `{
  args: {
    config: annotationConfig
  }
}`,
      ...(k = (W = s.parameters) == null ? void 0 : W.docs) == null ? void 0 : k.source
    }
  }
};
var B, $, z;
p.parameters = {
  ...p.parameters,
  docs: {
    ...(B = p.parameters) == null ? void 0 : B.docs,
    source: {
      originalSource: `{
  args: {
    config: editConfigKeys(annotationConfig, [{
      path: ['dataFormat', 'onlyShowTopPrefixSuffix'],
      value: true
    }, {
      path: ['dataFormat', 'prefix'],
      value: '$'
    }, {
      path: ['dataFormat', 'suffix'],
      value: ''
    }])
  }
}`,
      ...(z = ($ = p.parameters) == null ? void 0 : $.docs) == null ? void 0 : z.source
    }
  }
};
var R, V, E;
u.parameters = {
  ...u.parameters,
  docs: {
    ...(R = u.parameters) == null ? void 0 : R.docs,
    source: {
      originalSource: `{
  args: {
    config: editConfigKeys(areaPrefix, [{
      path: ['dataFormat', 'prefix'],
      value: '$'
    }, {
      path: ['dataFormat', 'suffix'],
      value: ''
    }])
  }
}`,
      ...(E = (V = u.parameters) == null ? void 0 : V.docs) == null ? void 0 : E.source
    }
  }
};
var H, N, j;
f.parameters = {
  ...f.parameters,
  docs: {
    ...(H = f.parameters) == null ? void 0 : H.docs,
    source: {
      originalSource: `{
  args: {
    config: editConfigKeys(annotationConfig, [{
      path: ['dataFormat', 'onlyShowTopPrefixSuffix'],
      value: true
    }, {
      path: ['dataFormat', 'prefix'],
      value: '$'
    }])
  }
}`,
      ...(j = (N = f.parameters) == null ? void 0 : N.docs) == null ? void 0 : j.source
    }
  }
};
var q, D, I;
m.parameters = {
  ...m.parameters,
  docs: {
    ...(q = m.parameters) == null ? void 0 : q.docs,
    source: {
      originalSource: `{
  args: {
    config: editConfigKeys(horizontalBarConfig, [{
      path: ['dataFormat', 'suffix'],
      value: ' suf'
    }, {
      path: ['dataFormat', 'prefix'],
      value: 'pre'
    }])
  }
}`,
      ...(I = (D = m.parameters) == null ? void 0 : D.docs) == null ? void 0 : I.source
    }
  }
};
var J, M, Q;
l.parameters = {
  ...l.parameters,
  docs: {
    ...(J = l.parameters) == null ? void 0 : J.docs,
    source: {
      originalSource: `{
  args: {
    config: editConfigKeys(barConfig, [{
      path: ['dataFormat', 'onlyShowTopPrefixSuffix'],
      value: true
    }, {
      path: ['dataFormat', 'suffix'],
      value: ' Somethings per Something'
    }, {
      path: ['yAxis', 'gridLines'],
      value: true
    }, {
      path: ['yAxis', 'labelsAboveGridlines'],
      value: true
    }, {
      path: ['yAxis', 'hideAxis'],
      value: true
    }])
  }
}`,
      ...(Q = (M = l.parameters) == null ? void 0 : M.docs) == null ? void 0 : Q.source
    }
  }
};
var U, X, Y;
c.parameters = {
  ...c.parameters,
  docs: {
    ...(U = c.parameters) == null ? void 0 : U.docs,
    source: {
      originalSource: `{
  args: {
    config: editConfigKeys(annotationConfig, [{
      path: ['yAxis', 'labelsAboveGridlines'],
      value: true
    }, {
      path: ['dataFormat', 'suffix'],
      value: ' units'
    }, {
      path: ['yAxis', 'gridLines'],
      value: true
    }, {
      path: ['yAxis', 'hideAxis'],
      value: true
    }])
  }
}`,
      ...(Y = (X = c.parameters) == null ? void 0 : X.docs) == null ? void 0 : Y.source
    }
  }
};
var Z, aa, ta;
d.parameters = {
  ...d.parameters,
  docs: {
    ...(Z = d.parameters) == null ? void 0 : Z.docs,
    source: {
      originalSource: `{
  args: {
    config: editConfigKeys(annotationConfig, [{
      path: ['dataFormat', 'onlyShowTopPrefixSuffix'],
      value: true
    }, {
      path: ['dataFormat', 'prefix'],
      value: 'pre'
    }, {
      path: ['dataFormat', 'suffix'],
      value: ' Somethings per Something'
    }, {
      path: ['yAxis', 'labelsAboveGridlines'],
      value: true
    }, {
      path: ['yAxis', 'gridLines'],
      value: true
    }])
  }
}`,
      ...(ta = (aa = d.parameters) == null ? void 0 : aa.docs) == null ? void 0 : ta.source
    }
  }
};
var ea, oa, ra;
x.parameters = {
  ...x.parameters,
  docs: {
    ...(ea = x.parameters) == null ? void 0 : ea.docs,
    source: {
      originalSource: `{
  args: {
    config: editConfigKeys(annotationConfig, [{
      path: ['yAxis', 'tickRotation'],
      value: 45
    }, {
      path: ['yAxis', 'tickLabelColor'],
      value: 'red'
    }, {
      path: ['yAxis', 'labelsAboveGridlines'],
      value: true
    }, {
      path: ['yAxis', 'gridLines'],
      value: true
    }, {
      path: ['yAxis', 'hideAxis'],
      value: true
    }])
  }
}`,
      ...(ra = (oa = x.parameters) == null ? void 0 : oa.docs) == null ? void 0 : ra.source
    }
  }
};
var ia, na, sa;
g.parameters = {
  ...g.parameters,
  docs: {
    ...(ia = g.parameters) == null ? void 0 : ia.docs,
    source: {
      originalSource: `{
  args: {
    config: editConfigKeys(scatterPlotConfig, [{
      path: ['dataFormat', 'bottomCommas'],
      value: true
    }])
  },
  isEditor: true
}`,
      ...(sa = (na = g.parameters) == null ? void 0 : na.docs) == null ? void 0 : sa.source
    }
  }
};
const pt = ["Top_Suffix", "Top_Suffix_Worst_Case", "Top_Suffix_With_Options", "Top_Suffix_No_Space", "Top_Suffix_With_Space", "Suffix", "Top_Prefix", "Prefix", "Top_Prefix_And_Suffix", "Horizontal_Bar", "Top_Suffix_On_Line", "Values_On_Line_All_Suffix", "Values_on_Line_Top_Suffix_Only_Area_Worst_Case", "Top_Suffix_Above_Gridlines_With_Options", "ScatterPlot_Bottom_Commas"];
export {
  m as Horizontal_Bar,
  u as Prefix,
  g as ScatterPlot_Bottom_Commas,
  s as Suffix,
  p as Top_Prefix,
  f as Top_Prefix_And_Suffix,
  e as Top_Suffix,
  x as Top_Suffix_Above_Gridlines_With_Options,
  i as Top_Suffix_No_Space,
  l as Top_Suffix_On_Line,
  r as Top_Suffix_With_Options,
  n as Top_Suffix_With_Space,
  o as Top_Suffix_Worst_Case,
  c as Values_On_Line_All_Suffix,
  d as Values_on_Line_Top_Suffix_Only_Area_Worst_Case,
  pt as __namedExportsOrder,
  st as default
};
