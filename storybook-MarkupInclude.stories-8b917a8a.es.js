import { C as H } from "./storybook-CdcMarkupInclude-44042fca.es.js";
import "./storybook-index-45401197.es.js";
import "./storybook-_commonjsHelpers-c5d32002.es.js";
import "./storybook-lodash-a4231e1c.es.js";
import "./storybook-coveUpdateWorker-91c2d978.es.js";
import "./storybook-Icon-4f5978ba.es.js";
import "./storybook-updateFieldFactory-c006040a.es.js";
import "./storybook-editor-57986c01.es.js";
import "./storybook-useDebounce-78f40efd.es.js";
import "./storybook-index-4ed993c7.es.js";
import "./storybook-index-43433e35.es.js";
import "./storybook-Loading-f180d060.es.js";
import "./storybook-Tooltip-4102bd69.es.js";
import "./storybook-Accordion-2501c7d9.es.js";
import "./storybook-Inputs-b80d0cf3.es.js";
import "./storybook-index-e5bf02db.es.js";
const R = {
  inlineHTML: "<h2>Inline HTML</h2>",
  markupVariables: [],
  showHeader: !0,
  srcUrl: "#example",
  title: "Markup Include",
  useInlineHTML: !1
}, k = [], b = {}, I = !0, L = "theme-blue", j = "markup-include", x = null, C = {
  border: !1,
  accent: !1,
  background: !1,
  hideBackgroundColor: !1,
  borderColorTheme: !1
}, V = {
  contentEditor: R,
  data: k,
  legend: b,
  newViz: I,
  theme: L,
  type: j,
  runtime: x,
  visual: C
}, M = {
  inlineHTML: "<div>In the state of {{state}}, the overall rate was {{rate}} for {{location}}</div> <div>For more information visit {{url}}{{state}}/{{location}}</div>",
  markupVariables: [
    {
      name: "state",
      tag: "{{state}}",
      columnName: "STATE",
      conditions: []
    },
    {
      name: "rate",
      tag: "{{rate}}",
      columnName: "Rate",
      conditions: []
    },
    {
      name: "location",
      tag: "{{location}}",
      columnName: "Location",
      conditions: []
    },
    {
      name: "url",
      tag: "{{url}}",
      columnName: "URL",
      conditions: []
    }
  ],
  showHeader: !0,
  srcUrl: "#example",
  title: "Current Rate by Location",
  useInlineHTML: !0
}, _ = [
  {
    STATE: "Alabama",
    Rate: "130",
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Alaska",
    Rate: "80",
    Location: "Home",
    URL: "https://www.cdc.gov/"
  }
], y = {}, S = !0, z = "theme-blue", B = "markup-include", U = null, P = {
  border: !1,
  accent: !1,
  background: !1,
  hideBackgroundColor: !1,
  borderColorTheme: !1
}, O = {
  contentEditor: M,
  data: _,
  legend: y,
  newViz: S,
  theme: z,
  type: B,
  runtime: U,
  visual: P
}, W = {
  inlineHTML: "<div>{{state}} does have a rate 130 compared to the over all rate of {{overall-rate}}</div>",
  markupVariables: [
    {
      name: "state",
      tag: "{{state}}",
      columnName: "STATE",
      conditions: [
        {
          columnName: "Rate",
          isOrIsNotEqualTo: "is",
          value: "130"
        }
      ]
    },
    {
      name: "overall-rate",
      tag: "{{overall-rate}}",
      columnName: "Rate",
      conditions: [
        {
          columnName: "STATE",
          isOrIsNotEqualTo: "is",
          value: "Overall"
        }
      ]
    }
  ],
  showHeader: !0,
  srcUrl: "#example",
  title: "",
  useInlineHTML: !0
}, q = [
  {
    STATE: "Overall",
    Rate: "80",
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  },
  {
    STATE: "Alabama",
    Rate: "130",
    Location: "Vehicle",
    URL: "https://www.cdc.gov/"
  }
], F = {}, D = !0, G = "theme-amber", J = "markup-include", K = null, Q = {
  border: !1,
  accent: !0,
  background: !0,
  hideBackgroundColor: !1,
  borderColorTheme: !1
}, X = {
  contentEditor: W,
  data: q,
  legend: F,
  newViz: D,
  theme: G,
  type: J,
  runtime: K,
  visual: Q
}, Y = {
  inlineHTML: "<div>The age adjusted rate for {{race}} was 644.2, compared to Non-Hispanic American Indian, which was {{ageAdjustedRate}}.</div>",
  markupVariables: [
    {
      name: "race",
      tag: "{{race}}",
      columnName: "Race",
      conditions: [
        {
          columnName: "Age-adjusted rate",
          isOrIsNotEqualTo: "is",
          value: "644.2"
        }
      ]
    },
    {
      name: "ageAdjustedRate",
      tag: "{{ageAdjustedRate}}",
      columnName: "Age-adjusted rate",
      conditions: [
        {
          columnName: "Race",
          isOrIsNotEqualTo: "is",
          value: "Non-Hispanic American Indian"
        }
      ]
    }
  ],
  showHeader: !1,
  srcUrl: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Markup-Include-Button-and-Text.html",
  title: "",
  useInlineHTML: !1
}, Z = [
  {
    Race: "Hispanic or Latino",
    "Age-adjusted rate": "644.2"
  },
  {
    Race: "Non-Hispanic American Indian",
    "Age-adjusted rate": "636.1"
  },
  {
    Race: "Non-Hispanic Black",
    "Age-adjusted rate": "563.7"
  },
  {
    Race: "Non-Hispanic Asian or Pacific Islander",
    "Age-adjusted rate": "202.5"
  },
  {
    Race: "Non-Hispanic White",
    "Age-adjusted rate": "183.6"
  }
], ee = {}, te = !0, ae = "theme-amber", ne = "markup-include", oe = null, re = {
  border: !1,
  accent: !0,
  background: !0,
  hideBackgroundColor: !1,
  borderColorTheme: !1
}, se = {
  contentEditor: Y,
  data: Z,
  legend: ee,
  newViz: te,
  theme: ae,
  type: ne,
  runtime: oe,
  visual: re
}, ie = {
  inlineHTML: "<div>{{race}} did not have an age adjusted rate of 644.2.</div>",
  markupVariables: [
    {
      name: "race",
      tag: "{{race}}",
      columnName: "Race",
      conditions: [
        {
          columnName: "Age-adjusted rate",
          isOrIsNotEqualTo: "isNot",
          value: "644.2"
        }
      ]
    }
  ],
  showHeader: !1,
  srcUrl: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/SSI-Example-Markup-Include.html",
  title: "",
  useInlineHTML: !1
}, ce = [
  {
    Race: "Hispanic or Latino",
    "Age-adjusted rate": "644.2"
  },
  {
    Race: "Non-Hispanic American Indian",
    "Age-adjusted rate": "636.1"
  },
  {
    Race: "Non-Hispanic Black",
    "Age-adjusted rate": "563.7"
  },
  {
    Race: "Non-Hispanic Asian or Pacific Islander",
    "Age-adjusted rate": "202.5"
  },
  {
    Race: "Non-Hispanic White",
    "Age-adjusted rate": "183.6"
  }
], de = {}, le = !0, ue = "theme-purple", me = "markup-include", pe = null, ge = {
  border: !0,
  accent: !0,
  background: !1,
  hideBackgroundColor: !0,
  borderColorTheme: !1
}, he = !0, fe = !0, we = {
  contentEditor: ie,
  data: ce,
  legend: de,
  newViz: le,
  theme: ue,
  type: me,
  runtime: pe,
  visual: ge,
  isEditor: he,
  showEditorPanel: fe
}, Te = {
  inlineHTML: "<div>{{race}} did not have an age adjusted rate of 644.2.</div>",
  markupVariables: [
    {
      name: "race",
      tag: "{{race}}",
      columnName: "Race",
      conditions: [
        {
          columnName: "Age-adjusted rate",
          isOrIsNotEqualTo: "isNot",
          value: "644.2"
        }
      ]
    }
  ],
  showHeader: !1,
  srcUrl: "/wcms/4.0/cdc-wp/data-presentation/examples/SSI-Image-With-Text.html",
  title: "<strong>Markup Include</strong> - Image with Text",
  useInlineHTML: !1
}, ve = [
  {
    Race: "Hispanic or Latino",
    "Age-adjusted rate": "644.2"
  },
  {
    Race: "Non-Hispanic American Indian",
    "Age-adjusted rate": "636.1"
  },
  {
    Race: "Non-Hispanic Black",
    "Age-adjusted rate": "563.7"
  },
  {
    Race: "Non-Hispanic Asian or Pacific Islander",
    "Age-adjusted rate": "202.5"
  },
  {
    Race: "Non-Hispanic White",
    "Age-adjusted rate": "183.6"
  }
], Ee = {}, Ae = !0, Ne = "theme-slate", $e = "markup-include", He = null, Re = {
  border: !1,
  accent: !0,
  background: !0,
  hideBackgroundColor: !1,
  borderColorTheme: !1
}, ke = !0, be = !0, Ie = {
  contentEditor: Te,
  data: ve,
  legend: Ee,
  newViz: Ae,
  theme: Ne,
  type: $e,
  runtime: He,
  visual: Re,
  isEditor: ke,
  showEditorPanel: be
}, Fe = {
  title: "Components/Pages/Markup Include",
  component: H
}, e = {
  args: {
    config: V,
    isEditor: !1
  }
}, t = {
  args: {
    config: O,
    isEditor: !1
  }
}, a = {
  args: {
    config: X,
    isEditor: !1
  }
}, n = {
  args: {
    config: se,
    isEditor: !1
  }
}, o = {
  args: {
    config: we,
    isEditor: !1
  }
}, r = {
  args: {
    config: Ie,
    isEditor: !1
  }
};
var s, i, c;
e.parameters = {
  ...e.parameters,
  docs: {
    ...(s = e.parameters) == null ? void 0 : s.docs,
    source: {
      originalSource: `{
  args: {
    config: primary,
    isEditor: false
  }
}`,
      ...(c = (i = e.parameters) == null ? void 0 : i.docs) == null ? void 0 : c.source
    }
  }
};
var d, l, u;
t.parameters = {
  ...t.parameters,
  docs: {
    ...(d = t.parameters) == null ? void 0 : d.docs,
    source: {
      originalSource: `{
  args: {
    config: noConditions,
    isEditor: false
  }
}`,
      ...(u = (l = t.parameters) == null ? void 0 : l.docs) == null ? void 0 : u.source
    }
  }
};
var m, p, g;
a.parameters = {
  ...a.parameters,
  docs: {
    ...(m = a.parameters) == null ? void 0 : m.docs,
    source: {
      originalSource: `{
  args: {
    config: withConditions,
    isEditor: false
  }
}`,
      ...(g = (p = a.parameters) == null ? void 0 : p.docs) == null ? void 0 : g.source
    }
  }
};
var h, f, w;
n.parameters = {
  ...n.parameters,
  docs: {
    ...(h = n.parameters) == null ? void 0 : h.docs,
    source: {
      originalSource: `{
  args: {
    config: buttonAndText,
    isEditor: false
  }
}`,
      ...(w = (f = n.parameters) == null ? void 0 : f.docs) == null ? void 0 : w.source
    }
  }
};
var T, v, E;
o.parameters = {
  ...o.parameters,
  docs: {
    ...(T = o.parameters) == null ? void 0 : T.docs,
    source: {
      originalSource: `{
  args: {
    config: iconNoText,
    isEditor: false
  }
}`,
      ...(E = (v = o.parameters) == null ? void 0 : v.docs) == null ? void 0 : E.source
    }
  }
};
var A, N, $;
r.parameters = {
  ...r.parameters,
  docs: {
    ...(A = r.parameters) == null ? void 0 : A.docs,
    source: {
      originalSource: `{
  args: {
    config: imageWithText,
    isEditor: false
  }
}`,
      ...($ = (N = r.parameters) == null ? void 0 : N.docs) == null ? void 0 : $.source
    }
  }
};
const De = ["Primary", "No_Conditions", "With_conditions", "Button_and_text", "icon_no_text", "image_with_text"];
export {
  n as Button_and_text,
  t as No_Conditions,
  e as Primary,
  a as With_conditions,
  De as __namedExportsOrder,
  Fe as default,
  o as icon_no_text,
  r as image_with_text
};
