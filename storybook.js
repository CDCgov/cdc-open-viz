import "./sb-preview/runtime.js";
(function() {
  const o = document.createElement("link").relList;
  if (o && o.supports && o.supports("modulepreload"))
    return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]'))
    n(s);
  new MutationObserver((s) => {
    for (const e of s)
      if (e.type === "childList")
        for (const r of e.addedNodes)
          r.tagName === "LINK" && r.rel === "modulepreload" && n(r);
  }).observe(document, { childList: !0, subtree: !0 });
  function c(s) {
    const e = {};
    return s.integrity && (e.integrity = s.integrity), s.referrerPolicy && (e.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? e.credentials = "include" : s.crossOrigin === "anonymous" ? e.credentials = "omit" : e.credentials = "same-origin", e;
  }
  function n(s) {
    if (s.ep)
      return;
    s.ep = !0;
    const e = c(s);
    fetch(s.href, e);
  }
})();
const { createBrowserChannel: _ } = __STORYBOOK_MODULE_CHANNELS__, { addons: a } = __STORYBOOK_MODULE_PREVIEW_API__, i = _({ page: "preview" });
a.setChannel(i);
window.__STORYBOOK_ADDONS_CHANNEL__ = i;
window.CONFIG_TYPE === "DEVELOPMENT" && (window.__STORYBOOK_SERVER_CHANNEL__ = i);
const p = {
  "./_stories/Introduction.stories.mdx": async () => import("./storybook-b8bd48d3.es.js"),
  "./_stories/Guide.NewStories.stories.mdx": async () => import("./storybook-54db61e9.es.js"),
  "./_stories/Guide.NewIcons.stories.mdx": async () => import("./storybook-622ef718.es.js"),
  "./_stories/Guide.NewComponents.stories.mdx": async () => import("./storybook-826dcfa2.es.js"),
  "./_stories/Contributions.stories.mdx": async () => import("./storybook-0becf884.es.js"),
  "./packages/waffle-chart/src/_stories/WaffleChart.stories.tsx": async () => import("./storybook-af95bd18.es.js"),
  "./packages/markup-include/src/_stories/MarkupInclude.stories.tsx": async () => import("./storybook-29d0a981.es.js"),
  "./packages/data-bite/src/_stories/DataBite.stories.tsx": async () => import("./storybook-5a2c604f.es.js"),
  "./packages/dashboard/src/_stories/Dashboard.stories.tsx": async () => import("./storybook-775f9088.es.js"),
  "./packages/chart/src/_stories/ChartBrush.stories.tsx": async () => import("./storybook-1f9b48dc.es.js"),
  "./packages/chart/src/_stories/Chart.stories.tsx": async () => import("./storybook-04e599b1.es.js"),
  "./packages/core/components/ui/_stories/Title.stories.tsx": async () => import("./storybook-074f4ef7.es.js"),
  "./packages/core/components/ui/_stories/Icon.stories.tsx": async () => import("./storybook-496b1f1c.es.js"),
  "./packages/core/components/ui/_stories/Accordion.stories.tsx": async () => import("./storybook-3f046ea0.es.js"),
  "./packages/core/components/managers/_stories/DataDesigner.stories.tsx": async () => import("./storybook-851b9271.es.js"),
  "./packages/core/components/elements/_stories/Card.stories.tsx": async () => import("./storybook-1810f8d1.es.js"),
  "./packages/core/components/elements/_stories/Button.stories.tsx": async () => import("./storybook-6a99d8d9.es.js")
};
async function m(t) {
  return p[t]();
}
const { composeConfigs: O, PreviewWeb: d, ClientApi: u } = __STORYBOOK_MODULE_PREVIEW_API__, l = async () => {
  const t = await Promise.all([
    import("./storybook-06b0f87c.es.js"),
    import("./storybook-692a05fa.es.js"),
    import("./storybook-f74a5d48.es.js"),
    import("./storybook-a74b578e.es.js"),
    import("./storybook-a0b578d2.es.js"),
    import("./storybook-5495d9d8.es.js"),
    import("./storybook-4185a951.es.js"),
    import("./storybook-b7e238f0.es.js"),
    import("./storybook-dfe67e85.es.js"),
    import("./storybook-22bc17d8.es.js"),
    import("./storybook-0b530603.es.js")
  ]);
  return O(t);
};
window.__STORYBOOK_PREVIEW__ = window.__STORYBOOK_PREVIEW__ || new d();
window.__STORYBOOK_STORY_STORE__ = window.__STORYBOOK_STORY_STORE__ || window.__STORYBOOK_PREVIEW__.storyStore;
window.__STORYBOOK_CLIENT_API__ = window.__STORYBOOK_CLIENT_API__ || new u({ storyStore: window.__STORYBOOK_PREVIEW__.storyStore });
window.__STORYBOOK_PREVIEW__.initialize({ importFn: m, getProjectAnnotations: l });
