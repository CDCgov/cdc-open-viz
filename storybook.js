import "./sb-preview/runtime.js";
(function() {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload"))
    return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]'))
    a(s);
  new MutationObserver((s) => {
    for (const t of s)
      if (t.type === "childList")
        for (const o of t.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && a(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function c(s) {
    const t = {};
    return s.integrity && (t.integrity = s.integrity), s.referrerPolicy && (t.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? t.credentials = "include" : s.crossOrigin === "anonymous" ? t.credentials = "omit" : t.credentials = "same-origin", t;
  }
  function a(s) {
    if (s.ep)
      return;
    s.ep = !0;
    const t = c(s);
    fetch(s.href, t);
  }
})();
const { createBrowserChannel: n } = __STORYBOOK_MODULE_CHANNELS__, { addons: p } = __STORYBOOK_MODULE_PREVIEW_API__, i = n({ page: "preview" });
p.setChannel(i);
window.__STORYBOOK_ADDONS_CHANNEL__ = i;
window.CONFIG_TYPE === "DEVELOPMENT" && (window.__STORYBOOK_SERVER_CHANNEL__ = i);
const _ = {
  "./_stories/Guide.NewComponents.stories.mdx": async () => import("./storybook-Guide.NewComponents.stories-7b2614dc.es.js"),
  "./_stories/Guide.NewIcons.stories.mdx": async () => import("./storybook-Guide.NewIcons.stories-e3478325.es.js"),
  "./_stories/Guide.NewStories.stories.mdx": async () => import("./storybook-Guide.NewStories.stories-2d1587ac.es.js"),
  "./packages/chart/src/_stories/Chart.Anchors.stories.tsx": async () => import("./storybook-Chart.Anchors.stories-12f61b41.es.js"),
  "./packages/chart/src/_stories/Chart.CI.stories.tsx": async () => import("./storybook-Chart.CI.stories-bb1f3ce8.es.js"),
  "./packages/chart/src/_stories/Chart.CustomColors.stories.tsx": async () => import("./storybook-Chart.CustomColors.stories-fe3dfaca.es.js"),
  "./packages/chart/src/_stories/Chart.DynamicSeries.stories.tsx": async () => import("./storybook-Chart.DynamicSeries.stories-f3f6c7a1.es.js"),
  "./packages/chart/src/_stories/Chart.Filters.stories.tsx": async () => import("./storybook-Chart.Filters.stories-a4a3eb77.es.js"),
  "./packages/chart/src/_stories/Chart.Legend.Gradient.stories.tsx": async () => import("./storybook-Chart.Legend.Gradient.stories-a68eb372.es.js"),
  "./packages/chart/src/_stories/Chart.ScatterPlot.stories.tsx": async () => import("./storybook-Chart.ScatterPlot.stories-30a14522.es.js"),
  "./packages/chart/src/_stories/Chart.stories.tsx": async () => import("./storybook-Chart.stories-9c7752a7.es.js"),
  "./packages/chart/src/_stories/Chart.tooltip.stories.tsx": async () => import("./storybook-Chart.tooltip.stories-3cbbcdc6.es.js"),
  "./packages/chart/src/_stories/ChartAnnotation.stories.tsx": async () => import("./storybook-ChartAnnotation.stories-630eec98.es.js"),
  "./packages/chart/src/_stories/ChartAxisLabels.stories.tsx": async () => import("./storybook-ChartAxisLabels.stories-e9b98e93.es.js"),
  "./packages/chart/src/_stories/ChartAxisTitles.stories.tsx": async () => import("./storybook-ChartAxisTitles.stories-736ba7b9.es.js"),
  "./packages/chart/src/_stories/ChartEditor.stories.tsx": async () => import("./storybook-ChartEditor.stories-b3512975.es.js"),
  "./packages/chart/src/_stories/ChartLine.Suppression.stories.tsx": async () => import("./storybook-ChartLine.Suppression.stories-c5e08297.es.js"),
  "./packages/chart/src/_stories/ChartLine.Symbols.stories.tsx": async () => import("./storybook-ChartLine.Symbols.stories-08928e73.es.js"),
  "./packages/chart/src/_stories/ChartPrefixSuffix.stories.tsx": async () => import("./storybook-ChartPrefixSuffix.stories-90f70ca4.es.js"),
  "./packages/core/components/_stories/BlurStrokeTest.stories.tsx": async () => import("./storybook-BlurStrokeTest.stories-4a61107b.es.js"),
  "./packages/core/components/_stories/DataTable.stories.tsx": async () => import("./storybook-DataTable.stories-f1b94667.es.js"),
  "./packages/core/components/_stories/Filters.stories.tsx": async () => import("./storybook-Filters.stories-8d1c6e35.es.js"),
  "./packages/core/components/_stories/Footnotes.stories.tsx": async () => import("./storybook-Footnotes.stories-70ece464.es.js"),
  "./packages/core/components/_stories/Inputs.stories.tsx": async () => import("./storybook-Inputs.stories-8443ca7c.es.js"),
  "./packages/core/components/_stories/MultiSelect.stories.tsx": async () => import("./storybook-MultiSelect.stories-bbadd6e4.es.js"),
  "./packages/core/components/_stories/NestedDropdown.stories.tsx": async () => import("./storybook-NestedDropdown.stories-30a52fe6.es.js"),
  "./packages/core/components/_stories/Table.stories.tsx": async () => import("./storybook-Table.stories-56994543.es.js"),
  "./packages/core/components/elements/_stories/Button.stories.tsx": async () => import("./storybook-Button.stories-4dd81a98.es.js"),
  "./packages/core/components/elements/_stories/Card.stories.tsx": async () => import("./storybook-Card.stories-5a184e28.es.js"),
  "./packages/core/components/managers/_stories/DataDesigner.stories.tsx": async () => import("./storybook-DataDesigner.stories-d5196555.es.js"),
  "./packages/core/components/ui/_stories/Accordion.stories.tsx": async () => import("./storybook-Accordion.stories-a93da571.es.js"),
  "./packages/core/components/ui/_stories/Colors.stories.mdx": async () => import("./storybook-Colors.stories-48a99500.es.js"),
  "./packages/core/components/ui/_stories/IconGallery.stories.mdx": async () => import("./storybook-IconGallery.stories-5d366b89.es.js"),
  "./packages/core/components/ui/_stories/Title.stories.tsx": async () => import("./storybook-Title.stories-5aeaeec0.es.js"),
  "./packages/dashboard/src/_stories/Dashboard.stories.tsx": async () => import("./storybook-Dashboard.stories-428fc89c.es.js"),
  "./packages/dashboard/src/components/DashboardFilters/_stories/DashboardFilters.stories.tsx": async () => import("./storybook-DashboardFilters.stories-47f87872.es.js"),
  "./packages/data-bite/src/_stories/DataBite.stories.tsx": async () => import("./storybook-DataBite.stories-14396e2b.es.js"),
  "./packages/editor/src/_stories/Editor.stories.tsx": async () => import("./storybook-Editor.stories-ea761d9a.es.js"),
  "./packages/map/src/_stories/CdcMap.Filters.stories.tsx": async () => import("./storybook-CdcMap.Filters.stories-204b74b8.es.js"),
  "./packages/map/src/_stories/CdcMap.Legend.Gradient.stories.tsx": async () => import("./storybook-CdcMap.Legend.Gradient.stories-44ec168f.es.js"),
  "./packages/map/src/_stories/CdcMap.Legend.stories.tsx": async () => import("./storybook-CdcMap.Legend.stories-b1388f7d.es.js"),
  "./packages/map/src/_stories/CdcMap.Patterns.stories.tsx": async () => import("./storybook-CdcMap.Patterns.stories-63df7131.es.js"),
  "./packages/map/src/_stories/CdcMap.stories.tsx": async () => import("./storybook-CdcMap.stories-e4f746c3.es.js"),
  "./packages/map/src/_stories/GoogleMap.stories.tsx": async () => import("./storybook-GoogleMap.stories-67d0a7ab.es.js"),
  "./packages/map/src/_stories/UsaMap.NoData.stories.tsx": async () => import("./storybook-UsaMap.NoData.stories-c8924bbc.es.js"),
  "./packages/markup-include/src/_stories/MarkupInclude.stories.tsx": async () => import("./storybook-MarkupInclude.stories-f1fb7901.es.js"),
  "./packages/waffle-chart/src/_stories/WaffleChart.stories.tsx": async () => import("./storybook-WaffleChart.stories-a070c8be.es.js")
};
async function m(r) {
  return _[r]();
}
const { composeConfigs: d, PreviewWeb: y, ClientApi: g } = __STORYBOOK_MODULE_PREVIEW_API__, l = async () => {
  const r = await Promise.all([
    import("./storybook-preview-06b0f87c.es.js"),
    import("./storybook-entry-preview-8eca4d51.es.js"),
    import("./storybook-entry-preview-docs-8bf6a5f6.es.js"),
    import("./storybook-preview-790930ca.es.js"),
    import("./storybook-preview-31da732d.es.js"),
    import("./storybook-preview-66996a5b.es.js"),
    import("./storybook-preview-87adf5c3.es.js"),
    import("./storybook-preview-45697d7c.es.js"),
    import("./storybook-preview-e76341c4.es.js"),
    import("./storybook-preview-a0795a53.es.js"),
    import("./storybook-preview-b74357e6.es.js"),
    import("./storybook-preview-599605bb.es.js"),
    import("./storybook-preview-04f6d498.es.js")
  ]);
  return d(r);
};
window.__STORYBOOK_PREVIEW__ = window.__STORYBOOK_PREVIEW__ || new y();
window.__STORYBOOK_STORY_STORE__ = window.__STORYBOOK_STORY_STORE__ || window.__STORYBOOK_PREVIEW__.storyStore;
window.__STORYBOOK_CLIENT_API__ = window.__STORYBOOK_CLIENT_API__ || new g({ storyStore: window.__STORYBOOK_PREVIEW__.storyStore });
window.__STORYBOOK_PREVIEW__.initialize({ importFn: m, getProjectAnnotations: l });
