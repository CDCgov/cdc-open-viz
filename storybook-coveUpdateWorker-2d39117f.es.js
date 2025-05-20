import { _ as n } from "./storybook-lodash-a4231e1c.es.js";
const m = (e) => {
  e.type === "dashboard" && Object.keys(e.visualizations).forEach((a) => {
    const t = e.visualizations[a];
    t.type === "table" && (t.filters || (t.filters = [], t.filterBehavior = "Filter Change"));
  });
}, b = (e) => {
  const a = "4.24.4", t = n.cloneDeep(e);
  return m(t), t.version = a, t;
}, y = (e) => {
  e.type === "dashboard" && (e.rows = e.rows.map((a) => {
    let t;
    if (a.columns === void 0) {
      t = {};
      const l = a.map((r) => (t.uuid = r.uuid, t.toggle = r.toggle, t.equalHeight = r.equalHeight, n.pick(r, "equalHeight", "width", "hide", "widget", "uuid")));
      t.columns = l;
    }
    return t ?? a;
  }));
}, F = (e) => {
  e.type === "chart" && (e.xAxis.sortDates && (e.xAxis.type = "date-time"), e.table.download = !0, delete e.xAxis.sortDates);
}, z = (e) => {
  e.type === "map" && (e.table.download = !0, e.general.showDownloadButton = !0, e.general.expandDataTable = e.table.expanded);
}, _ = (e) => {
  const a = "4.24.3", t = n.cloneDeep(e);
  return y(t), F(t), z(t), t.version = a, t;
}, w = (e) => {
  e.type === "markup-include" && (e.contentEditor || (e.contentEditor = {
    title: e.title,
    showHeader: e.showHeader,
    srcUrl: e.srcUrl
  }, delete e.title, delete e.showHeader, delete e.srcUrl), e.visual || (e.visual = {}));
}, f = (e) => {
  const a = "4.24.5", t = n.cloneDeep(e);
  return w(t), t.version = a, t;
};
function u(e, a) {
  if (!e)
    return !0;
  const [t, l, r] = e.split(".").map(Number), [s, i, o] = a.split(".").map(Number);
  return s > t || s === t && i > l || s === t && i === l && o > r;
}
const D = (e) => {
  if (!e.dashboard)
    return e;
  const a = e, t = {}, l = (a.dashboard.sharedFilters || []).map((r) => {
    var s, i;
    return ((s = r.apiFilter) == null ? void 0 : s.autoLoad) !== void 0 && delete r.apiFilter.autoLoad, ((i = r.apiFilter) == null ? void 0 : i.defaultValue) !== void 0 && delete r.apiFilter.defaultValue, r;
  });
  if (e.dashboard.sharedFilters = l, Object.keys(a.visualizations).forEach((r) => {
    const s = a.visualizations[r];
    s.hide !== void 0 && (s.sharedFilterIndexes = l.map((i, o) => o).filter((i) => !s.hide.includes(i)), s.type = "dashboardFilters", s.autoLoad ? s.filterBehavior = "Filter Change" : s.filterBehavior = "Apply Button", delete s.hide), s.type === "filter-dropdowns" && (s.type = "dashboardFilters", s.visualizationType = "dashboardFilters", s.sharedFilterIndexes || (s.sharedFilterIndexes = e.dashboard.sharedFilters.map((i, o) => o), s.filterBehavior = e.filterBehavior || "Filter Change")), s.type === "dashboardFilters" && !s.sharedFilterIndexes && (s.sharedFilterIndexes = e.dashboard.sharedFilters.map((i, o) => o), s.filterBehavior = e.filterBehavior || "Filter Change"), t[r] = s;
  }), e.dashboard.sharedFilters.length && !Object.values(t).find((r) => r.type === "dashboardFilters")) {
    const r = {
      type: "dashboardFilters",
      visualizationType: "dashboardFilters",
      sharedFilterIndexes: e.dashboard.sharedFilters.map((o, d) => d),
      filterBehavior: e.filterBehavior || "Filter Change"
    }, s = "legacySharedFilters";
    t[s] = r;
    const i = {
      columns: [
        {
          width: 12,
          widget: s
        }
      ]
    };
    e.rows = [i, ...e.rows], e.dashboard.sharedFilters = e.dashboard.sharedFilters.map((o) => (o.usedBy && (o.usedBy = o.usedBy.map((d) => parseInt(d) > -1 ? String(parseInt(d) + 1) : d)), o));
  }
  e.visualizations = t, delete e.filterBehavior;
}, T = (e) => (((t) => {
  t.type === "map" && t.columns.primary.roundToPlace === void 0 && (t.columns.primary.roundToPlace = 0);
})(e), e), S = (e) => {
  e.useLogScale && e.yAxis.type;
}, I = (e) => {
  const a = "4.24.7", t = n.cloneDeep(e);
  return T(t), D(t), S(t), t.version = u(e.version, a) ? a : e.version, t;
}, B = (e) => {
  var a;
  if (e.type === "dashboard" && Object.values((e == null ? void 0 : e.visualizations) || {}).forEach((t) => {
    var l;
    if (t.type === "map" && ((l = t.general) == null ? void 0 : l.geoType) === "single-state") {
      let r = u(e.version, "4.24.9") ? !1 : t.general.allowMapZoom;
      t.general.allowMapZoom = r;
    }
  }), e.type === "map" && ((a = e.general) == null ? void 0 : a.geoType) === "single-state") {
    let t = u(e.version, "4.24.9") ? !1 : e.general.allowMapZoom;
    e.general.allowMapZoom = t;
  }
}, h = (e) => e == null ? void 0 : e.some((a) => !a.id), x = (e) => {
  var a;
  e.type === "dashboard" ? e.visualizations = Object.keys(e.visualizations).reduce((t, l) => {
    var s;
    const r = e.visualizations[l];
    return (s = r.filters) != null && s.length && h(r.filters) && (t[l].filters = r.filters.map((i, o) => ({ ...i, id: Date.now() + o }))), t;
  }, e.visualizations) : (a = e.filters) != null && a.length && h(e.filters) && (e.filters = e.filters.map((t, l) => ({ ...t, id: Date.now() + l })));
}, M = (e) => {
  var a;
  (a = e.legend) != null && a.lineMode && (e.legend.style = "lines");
}, k = (e) => {
  const a = "4.24.9", t = n.cloneDeep(e);
  return B(t), x(t), M(e), t.version = a, t;
}, E = (e) => {
  var a;
  e.type === "dashboard" && ((a = e.dashboard) == null || a.sharedFilters.forEach((t, l) => {
    t.multiSelect && (e.dashboard.sharedFilters[l].filterStyle = "multi-select", delete e.dashboard.sharedFilters[l].multiSelect);
  }));
}, L = (e) => {
  var a, t;
  return e.type === "dashboard" && Object.keys(e.visualizations).forEach((l) => {
    var s, i;
    const r = e.visualizations[l];
    (i = (s = r.table) == null ? void 0 : s.pivot) != null && i.valueColumn && (e.visualizations[l].table.pivot.valueColumns = [r.table.pivot.valueColumn], delete e.visualizations[l].table.pivot.valueColumn);
  }), (t = (a = e.table) == null ? void 0 : a.pivot) != null && t.valueColumn && (e.table.pivot.valueColumns = [e.table.pivot.valueColumn], delete e.table.pivot.valueColumn), e;
}, V = (e) => {
  var a;
  (a = e.xAxis) != null && a.labelOffset && (e.xAxis.labelOffset = 0);
}, N = (e) => {
  e.filters && (e.filters = e.filters.map((a) => (a.filterStyle || (a.filterStyle = "dropdown"), a)));
}, A = (e) => {
  const a = "4.24.10", t = n.cloneDeep(e);
  return V(t), L(t), E(t), N(t), t.version = a, t;
}, O = (e) => (e.migrations = e.migrations || {}, e.migrations.addColorMigration = !0, e), j = (e) => {
  const a = "4.24.11", t = n.cloneDeep(e);
  return O(t), t.version = a, t;
}, H = (e) => {
  var a;
  return (a = e.general) != null && a.territoriesLabel && delete e.general.territoriesLabel, e;
}, U = (e) => {
  const a = "4.25.1", t = n.cloneDeep(e);
  return H(t), t.version = a, t;
}, p = (e) => {
  var a;
  if (((a = e.general) == null ? void 0 : a.showDownloadButton) !== void 0) {
    const t = e.general.showDownloadButton;
    delete e.general.showDownloadButton, e.table.download = t;
  }
  return e;
}, R = (e) => {
  e.type === "dashboard" && Object.keys(e.visualizations).forEach((a) => {
    const t = e.visualizations[a];
    p(t);
  }), p(e);
}, P = (e) => (e.visualizationType === "Area Chart" && e.visualizationSubType === "regular" && (e.visualizationSubType = "stacked"), e), Z = (e) => {
  const a = "4.25.3", t = n.cloneDeep(e);
  return R(t), p(t), P(t), t.version = a, t;
}, v = (e) => {
  e.type === "chart" ? (e.legend = e.legend || {}, e.legend.unified = !0) : e.type === "dashboard" && Object.values(e.visualizations).forEach((a) => {
    v(a);
  });
}, q = (e) => {
  if (e.type === "map")
    return e.general.showFullGeoNameInCSV && (e.table.showFullGeoNameInCSV = e.general.showFullGeoNameInCSV), delete e.general.showFullGeoNameInCSV, e;
}, G = (e) => e.columns.filter((t) => t.widget).length > 1 && !e.toggle, C = (e, a) => ({
  filters: [],
  filterBehavior: "Filter Change",
  footnotes: a,
  uid: e,
  type: "markup-include",
  visualizationType: "markup-include",
  contentEditor: {
    inlineHTML: "",
    markupVariables: [],
    showHeader: !1,
    srcUrl: "",
    title: "",
    useInlineHTML: !1
  },
  theme: "theme-blue",
  visual: {
    border: !1,
    accent: !1,
    background: !1,
    hideBackgroundColor: !1,
    borderColorTheme: !1
  }
}), $ = (e) => ({ columns: [{ width: 12, widget: e }] }), W = (e) => {
  if (e.type === "dashboard") {
    const a = [
      /*old row index*/
      /*new row object*/
    ];
    e.rows.forEach((t, l) => {
      if (!t.footnotesId)
        return;
      const r = G(t), s = t.footnotesId, i = n.pick(e.visualizations[s], ["dataKey", "dynamicFootnotes", "staticFootnotes"]);
      if (r) {
        const o = `markup-include-${Date.now()}${l}`, d = $(o), c = C(o, i);
        e.visualizations[o] = c, a.push([l, d]);
      } else
        t.columns.forEach((o) => {
          if (!o.widget)
            return;
          const d = e.visualizations[o.widget].footnotes;
          typeof d == "string" && (e.visualizations[o.widget].legacyFootnotes = d), e.visualizations[o.widget].footnotes = i;
        });
      delete e.visualizations[s], delete t.footnotesId;
    }), a.length && a.forEach(([t, l]) => {
      e.rows.splice(t + 1, 0, l);
    });
  }
}, X = (e) => {
  const a = "4.25.4", t = n.cloneDeep(e);
  return v(t), q(t), W(t), t.version = a, t;
}, J = (e, a) => {
  let t = e;
  return a && (t.version = a), [
    ["4.24.3", _],
    ["4.24.4", b],
    ["4.24.5", f],
    ["4.24.7", I, !0],
    ["4.24.9", k],
    ["4.24.10", A, !0],
    ["4.24.11", j],
    ["4.25.1", U],
    ["4.25.3", Z],
    ["4.25.4", X]
  ].forEach(([r, s, i]) => {
    (u(t.version, r) || i) && (t = s(t), t.multiDashboards && t.multiDashboards.forEach((o, d) => {
      o.type = "dashboard", t.multiDashboards[d] = J(o, t.version);
    }));
  }), a && delete t.version, t;
};
export {
  J as c
};
