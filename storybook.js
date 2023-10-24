import "./sb-preview/runtime.js";
(function() {
  const s = document.createElement("link").relList;
  if (s && s.supports && s.supports("modulepreload"))
    return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]'))
    n(e);
  new MutationObserver((e) => {
    for (const t of e)
      if (t.type === "childList")
        for (const r of t.addedNodes)
          r.tagName === "LINK" && r.rel === "modulepreload" && n(r);
  }).observe(document, { childList: !0, subtree: !0 });
  function _(e) {
    const t = {};
    return e.integrity && (t.integrity = e.integrity), e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy), e.crossOrigin === "use-credentials" ? t.credentials = "include" : e.crossOrigin === "anonymous" ? t.credentials = "omit" : t.credentials = "same-origin", t;
  }
  function n(e) {
    if (e.ep)
      return;
    e.ep = !0;
    const t = _(e);
    fetch(e.href, t);
  }
})();
const { createBrowserChannel: c } = __STORYBOOK_MODULE_CHANNELS__, { addons: a } = __STORYBOOK_MODULE_PREVIEW_API__, i = c({ page: "preview" });
a.setChannel(i);
window.__STORYBOOK_ADDONS_CHANNEL__ = i;
window.CONFIG_TYPE === "DEVELOPMENT" && (window.__STORYBOOK_SERVER_CHANNEL__ = i);
const p = {
  "./_stories/Introduction.stories.mdx": async () => import("./storybook-c40d9037.es.js"),
  "./_stories/Guide.NewStories.stories.mdx": async () => import("./storybook-769dcac1.es.js"),
  "./_stories/Guide.NewIcons.stories.mdx": async () => import("./storybook-fc9de403.es.js"),
  "./_stories/Guide.NewComponents.stories.mdx": async () => import("./storybook-8591e09c.es.js"),
  "./_stories/Contributions.stories.mdx": async () => import("./storybook-c381822c.es.js"),
  "./packages/waffle-chart/src/_stories/WaffleChart.stories.tsx": async () => import("./storybook-dbdc25c2.es.js"),
  "./packages/markup-include/src/_stories/MarkupInclude.stories.tsx": async () => import("./storybook-a44c9aea.es.js"),
  "./packages/data-bite/src/_stories/DataBite.stories.tsx": async () => import("./storybook-9a40c727.es.js"),
  "./packages/dashboard/src/_stories/Dashboard.stories.tsx": async () => import("./storybook-35097af5.es.js"),
  "./packages/core/components/ui/_stories/Icon.stories.tsx": async () => import("./storybook-65ea2b14.es.js"),
  "./packages/core/components/ui/_stories/Accordion.stories.tsx": async () => import("./storybook-1cebfdaa.es.js"),
  "./packages/core/components/managers/_stories/DataDesigner.stories.tsx": async () => import("./storybook-25b604b3.es.js"),
  "./packages/core/components/elements/_stories/Card.stories.tsx": async () => import("./storybook-1810f8d1.es.js"),
  "./packages/core/components/elements/_stories/Button.stories.tsx": async () => import("./storybook-4dc5e6f6.es.js")
};
async function O(o) {
  return p[o]();
}
const { composeConfigs: m, PreviewWeb: d, ClientApi: u } = __STORYBOOK_MODULE_PREVIEW_API__, l = async () => {
  const o = await Promise.all([
    import("./storybook-06b0f87c.es.js"),
    import("./storybook-a402ffe6.es.js"),
    import("./storybook-f74a5d48.es.js"),
    import("./storybook-cbc34baf.es.js"),
    import("./storybook-a0b578d2.es.js"),
    import("./storybook-5495d9d8.es.js"),
    import("./storybook-e1239275.es.js"),
    import("./storybook-b7e238f0.es.js"),
    import("./storybook-dfe67e85.es.js"),
    import("./storybook-22bc17d8.es.js"),
    import("./storybook-0b530603.es.js")
  ]);
  return m(o);
};
window.__STORYBOOK_PREVIEW__ = window.__STORYBOOK_PREVIEW__ || new d();
window.__STORYBOOK_STORY_STORE__ = window.__STORYBOOK_STORY_STORE__ || window.__STORYBOOK_PREVIEW__.storyStore;
window.__STORYBOOK_CLIENT_API__ = window.__STORYBOOK_CLIENT_API__ || new u({ storyStore: window.__STORYBOOK_PREVIEW__.storyStore });
window.__STORYBOOK_PREVIEW__.initialize({ importFn: O, getProjectAnnotations: l });
