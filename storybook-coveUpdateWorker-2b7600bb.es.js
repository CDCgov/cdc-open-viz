import { _ as d } from "./storybook-lodash-a4231e1c.es.js";
const m = (e) => {
  e.type === "dashboard" && Object.keys(e.visualizations).forEach((a) => {
    const t = e.visualizations[a];
    t.type === "table" && (t.filters || (t.filters = [], t.filterBehavior = "Filter Change"));
  });
}, c = (e) => {
  const a = "4.24.4", t = d.cloneDeep(e);
  return m(t), t.version = a, t;
}, b = (e) => {
  e.type === "dashboard" && (e.rows = e.rows.map((a) => {
    let t;
    if (a.columns === void 0) {
      t = {};
      const l = a.map((s) => (t.uuid = s.uuid, t.toggle = s.toggle, t.equalHeight = s.equalHeight, d.pick(s, "equalHeight", "width", "hide", "widget", "uuid")));
      t.columns = l;
    }
    return t ?? a;
  }));
}, y = (e) => {
  e.type === "chart" && (e.xAxis.sortDates && (e.xAxis.type = "date-time"), e.table.download = !0, delete e.xAxis.sortDates);
}, F = (e) => {
  e.type === "map" && (e.table.download = !0, e.general.showDownloadButton = !0, e.general.expandDataTable = e.table.expanded);
}, _ = (e) => {
  const a = "4.24.3", t = d.cloneDeep(e);
  return b(t), y(t), F(t), t.version = a, t;
}, z = (e) => {
  e.type === "markup-include" && (e.contentEditor || (e.contentEditor = {
    title: e.title,
    showHeader: e.showHeader,
    srcUrl: e.srcUrl
  }, delete e.title, delete e.showHeader, delete e.srcUrl), e.visual || (e.visual = {}));
}, D = (e) => {
  const a = "4.24.5", t = d.cloneDeep(e);
  return z(t), t.version = a, t;
};
function n(e, a) {
  if (!e)
    return !0;
  const [t, l, s] = e.split(".").map(Number), [r, o, i] = a.split(".").map(Number);
  return r > t || r === t && o > l || r === t && o === l && i > s;
}
const S = (e) => {
  if (!e.dashboard)
    return e;
  const a = e, t = {}, l = (a.dashboard.sharedFilters || []).map((s) => {
    var r, o;
    return ((r = s.apiFilter) == null ? void 0 : r.autoLoad) !== void 0 && delete s.apiFilter.autoLoad, ((o = s.apiFilter) == null ? void 0 : o.defaultValue) !== void 0 && delete s.apiFilter.defaultValue, s;
  });
  if (e.dashboard.sharedFilters = l, Object.keys(a.visualizations).forEach((s) => {
    const r = a.visualizations[s];
    r.hide !== void 0 && (r.sharedFilterIndexes = l.map((o, i) => i).filter((o) => !r.hide.includes(o)), r.type = "dashboardFilters", r.autoLoad ? r.filterBehavior = "Filter Change" : r.filterBehavior = "Apply Button", delete r.hide), r.type === "filter-dropdowns" && (r.type = "dashboardFilters", r.visualizationType = "dashboardFilters", r.sharedFilterIndexes || (r.sharedFilterIndexes = e.dashboard.sharedFilters.map((o, i) => i), r.filterBehavior = e.filterBehavior || "Filter Change")), r.type === "dashboardFilters" && !r.sharedFilterIndexes && (r.sharedFilterIndexes = e.dashboard.sharedFilters.map((o, i) => i), r.filterBehavior = e.filterBehavior || "Filter Change"), t[s] = r;
  }), e.dashboard.sharedFilters.length && !Object.values(t).find((s) => s.type === "dashboardFilters")) {
    const s = {
      type: "dashboardFilters",
      visualizationType: "dashboardFilters",
      sharedFilterIndexes: e.dashboard.sharedFilters.map((i, u) => u),
      filterBehavior: e.filterBehavior || "Filter Change"
    }, r = "legacySharedFilters";
    t[r] = s;
    const o = {
      columns: [
        {
          width: 12,
          widget: r
        }
      ]
    };
    e.rows = [o, ...e.rows], e.dashboard.sharedFilters = e.dashboard.sharedFilters.map((i) => (i.usedBy && (i.usedBy = i.usedBy.map((u) => parseInt(u) > -1 ? String(parseInt(u) + 1) : u)), i));
  }
  e.visualizations = t, delete e.filterBehavior;
}, x = (e) => (((t) => {
  t.type === "map" && t.columns.primary.roundToPlace === void 0 && (t.columns.primary.roundToPlace = 0);
})(e), e), B = (e) => {
  e.useLogScale && e.yAxis.type;
}, T = (e) => {
  const a = "4.24.7", t = d.cloneDeep(e);
  return x(t), S(t), B(t), t.version = n(e.version, a) ? a : e.version, t;
}, I = (e) => {
  var a;
  if (e.type === "dashboard" && Object.values((e == null ? void 0 : e.visualizations) || {}).forEach((t) => {
    var l;
    if (t.type === "map" && ((l = t.general) == null ? void 0 : l.geoType) === "single-state") {
      let s = n(e.version, "4.24.9") ? !1 : t.general.allowMapZoom;
      t.general.allowMapZoom = s;
    }
  }), e.type === "map" && ((a = e.general) == null ? void 0 : a.geoType) === "single-state") {
    let t = n(e.version, "4.24.9") ? !1 : e.general.allowMapZoom;
    e.general.allowMapZoom = t;
  }
}, h = (e) => e == null ? void 0 : e.some((a) => !a.id), M = (e) => {
  var a;
  e.type === "dashboard" ? e.visualizations = Object.keys(e.visualizations).reduce((t, l) => {
    var r;
    const s = e.visualizations[l];
    return (r = s.filters) != null && r.length && h(s.filters) && (t[l].filters = s.filters.map((o, i) => ({ ...o, id: Date.now() + i }))), t;
  }, e.visualizations) : (a = e.filters) != null && a.length && h(e.filters) && (e.filters = e.filters.map((t, l) => ({ ...t, id: Date.now() + l })));
}, w = (e) => {
  var a;
  (a = e.legend) != null && a.lineMode && (e.legend.style = "lines");
}, L = (e) => {
  const a = "4.24.9", t = d.cloneDeep(e);
  return I(t), M(t), w(e), t.version = a, t;
}, E = (e) => {
  var a;
  e.type === "dashboard" && ((a = e.dashboard) == null || a.sharedFilters.forEach((t, l) => {
    t.multiSelect && (e.dashboard.sharedFilters[l].filterStyle = "multi-select", delete e.dashboard.sharedFilters[l].multiSelect);
  }));
}, O = (e) => {
  var a, t;
  return e.type === "dashboard" && Object.keys(e.visualizations).forEach((l) => {
    var r, o;
    const s = e.visualizations[l];
    (o = (r = s.table) == null ? void 0 : r.pivot) != null && o.valueColumn && (e.visualizations[l].table.pivot.valueColumns = [s.table.pivot.valueColumn], delete e.visualizations[l].table.pivot.valueColumn);
  }), (t = (a = e.table) == null ? void 0 : a.pivot) != null && t.valueColumn && (e.table.pivot.valueColumns = [e.table.pivot.valueColumn], delete e.table.pivot.valueColumn), e;
}, j = (e) => {
  var a;
  (a = e.xAxis) != null && a.labelOffset && (e.xAxis.labelOffset = 0);
}, A = (e) => {
  e.filters && (e.filters = e.filters.map((a) => (a.filterStyle || (a.filterStyle = "dropdown"), a)));
}, N = (e) => {
  const a = "4.24.10", t = d.cloneDeep(e);
  return j(t), O(t), E(t), A(t), t.version = a, t;
}, V = (e) => (e.migrations = e.migrations || {}, e.migrations.addColorMigration = !0, e), f = (e) => {
  const a = "4.24.11", t = d.cloneDeep(e);
  return V(t), t.version = a, t;
}, U = (e) => {
  var a;
  return (a = e.general) != null && a.territoriesLabel && delete e.general.territoriesLabel, e;
}, k = (e) => {
  const a = "4.25.1", t = d.cloneDeep(e);
  return U(t), t.version = a, t;
}, p = (e) => {
  var a;
  if (((a = e.general) == null ? void 0 : a.showDownloadButton) !== void 0) {
    const t = e.general.showDownloadButton;
    delete e.general.showDownloadButton, e.table.download = t;
  }
  return e;
}, P = (e) => {
  e.type === "dashboard" && Object.keys(e.visualizations).forEach((a) => {
    const t = e.visualizations[a];
    p(t);
  }), p(e);
}, Z = (e) => (e.visualizationType === "Area Chart" && e.visualizationSubType === "regular" && (e.visualizationSubType = "stacked"), e), H = (e) => {
  const a = "4.25.3", t = d.cloneDeep(e);
  return P(t), p(t), Z(t), t.version = a, t;
}, v = (e) => {
  e.type === "chart" ? (e.legend = e.legend || {}, e.legend.unified = !0) : e.type === "dashboard" && Object.values(e.visualizations).forEach((a) => {
    v(a);
  });
}, q = (e) => {
  if (e.type === "map")
    return e.general.showFullGeoNameInCSV && (e.table.showFullGeoNameInCSV = e.general.showFullGeoNameInCSV), delete e.general.showFullGeoNameInCSV, e;
}, G = (e) => {
  const a = "4.25.4", t = d.cloneDeep(e);
  return v(t), q(t), t.version = a, t;
}, R = (e, a) => {
  let t = e;
  return a && (t.version = a), [
    ["4.24.3", _],
    ["4.24.4", c],
    ["4.24.5", D],
    ["4.24.7", T, !0],
    ["4.24.9", L],
    ["4.24.10", N, !0],
    ["4.24.11", f],
    ["4.25.1", k],
    ["4.25.3", H],
    ["4.25.4", G]
  ].forEach(([s, r, o]) => {
    (n(t.version, s) || o) && (t = r(t), t.multiDashboards && t.multiDashboards.forEach((i, u) => {
      i.type = "dashboard", t.multiDashboards[u] = R(i, t.version);
    }));
  }), a && delete t.version, t;
};
export {
  R as c
};
