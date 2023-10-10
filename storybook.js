import "./sb-preview/runtime.js";
(function() {
  const s = document.createElement("link").relList;
  if (s && s.supports && s.supports("modulepreload"))
    return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]'))
    n(e);
  new MutationObserver((e) => {
    for (const o of e)
      if (o.type === "childList")
        for (const r of o.addedNodes)
          r.tagName === "LINK" && r.rel === "modulepreload" && n(r);
  }).observe(document, { childList: !0, subtree: !0 });
  function _(e) {
    const o = {};
    return e.integrity && (o.integrity = e.integrity), e.referrerPolicy && (o.referrerPolicy = e.referrerPolicy), e.crossOrigin === "use-credentials" ? o.credentials = "include" : e.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o;
  }
  function n(e) {
    if (e.ep)
      return;
    e.ep = !0;
    const o = _(e);
    fetch(e.href, o);
  }
})();
const { createBrowserChannel: c } = __STORYBOOK_MODULE_CHANNELS__, { addons: a } = __STORYBOOK_MODULE_PREVIEW_API__, i = c({ page: "preview" });
a.setChannel(i);
window.__STORYBOOK_ADDONS_CHANNEL__ = i;
window.CONFIG_TYPE === "DEVELOPMENT" && (window.__STORYBOOK_SERVER_CHANNEL__ = i);
const p = {
  "./_stories/Introduction.stories..mdx": async () => import("./storybook-0df6d5bb.es.js"),
  "./_stories/Guide.NewStories.stories.mdx": async () => import("./storybook-2b3a0ef1.es.js"),
  "./_stories/Guide.NewIcons.stories.mdx": async () => import("./storybook-c7405b3f.es.js"),
  "./_stories/Guide.NewComponents.stories.mdx": async () => import("./storybook-5dc89b29.es.js"),
  "./_stories/Contributions.stories.mdx": async () => import("./storybook-c8fd4d82.es.js"),
  "./packages/waffle-chart/src/_stories/WaffleChart.stories.tsx": async () => import("./storybook-29b329af.es.js"),
  "./packages/dashboard/src/_stories/Dashboard.stories.tsx": async () => import("./storybook-084078aa.es.js"),
  "./packages/core/components/ui/_stories/Icon.stories.tsx": async () => import("./storybook-82b127ab.es.js"),
  "./packages/core/components/ui/_stories/Accordion.stories.tsx": async () => import("./storybook-e359b63e.es.js"),
  "./packages/core/components/managers/_stories/DataDesigner.stories.tsx": async () => import("./storybook-07d78447.es.js"),
  "./packages/core/components/elements/_stories/Card.stories.tsx": async () => import("./storybook-897b2b97.es.js"),
  "./packages/core/components/elements/_stories/Button.stories.tsx": async () => import("./storybook-12174eaf.es.js")
};
async function O(t) {
  return p[t]();
}
const { composeConfigs: m, PreviewWeb: d, ClientApi: u } = __STORYBOOK_MODULE_PREVIEW_API__, l = async () => {
  const t = await Promise.all([
    import("./storybook-06b0f87c.es.js"),
    import("./storybook-1dd26d69.es.js"),
    import("./storybook-f74a5d48.es.js"),
    import("./storybook-afcc5d0e.es.js"),
    import("./storybook-6d6b1c34.es.js"),
    import("./storybook-2d321ed0.es.js"),
    import("./storybook-e1239275.es.js"),
    import("./storybook-b7e238f0.es.js"),
    import("./storybook-dfe67e85.es.js"),
    import("./storybook-485a2296.es.js"),
    import("./storybook-d4172a9b.es.js")
  ]);
  return m(t);
};
window.__STORYBOOK_PREVIEW__ = window.__STORYBOOK_PREVIEW__ || new d();
window.__STORYBOOK_STORY_STORE__ = window.__STORYBOOK_STORY_STORE__ || window.__STORYBOOK_PREVIEW__.storyStore;
window.__STORYBOOK_CLIENT_API__ = window.__STORYBOOK_CLIENT_API__ || new u({ storyStore: window.__STORYBOOK_PREVIEW__.storyStore });
window.__STORYBOOK_PREVIEW__.initialize({ importFn: O, getProjectAnnotations: l });
