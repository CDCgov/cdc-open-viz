const { global: N } = __STORYBOOK_MODULE_GLOBAL__, { addons: y } = __STORYBOOK_MODULE_PREVIEW_API__;
var r = "storybook/a11y", T = `${r}/result`, U = `${r}/request`, g = `${r}/running`, w = `${r}/error`, f = `${r}/manual`, a = { RESULT: T, REQUEST: U, RUNNING: g, ERROR: w, MANUAL: f }, { document: L, window: A } = N, n = y.getChannel(), o = !1, l, d = async (t) => {
  let { manual: e } = await s(t);
  e || await _(t);
}, _ = async (t) => {
  l = t;
  try {
    let e = await s(t);
    if (!o) {
      o = !0, n.emit(a.RUNNING);
      let i = (await import("./storybook-axe-Cbake4ua.es.js").then((m) => m.a)).default, { element: u = "#storybook-root", config: O, options: E = {} } = e, R = L.querySelector(u);
      if (!R)
        return;
      i.reset(), O && i.configure(O);
      let c = await i.run(R, E), S = JSON.parse(JSON.stringify(c));
      l === t ? n.emit(a.RESULT, S) : (o = !1, _(l));
    }
  } catch (e) {
    n.emit(a.ERROR, e);
  } finally {
    o = !1;
  }
}, s = async (t) => {
  let { parameters: e } = await A.__STORYBOOK_STORY_STORE__.loadStory({ storyId: t }) || {};
  return e.a11y || { config: {}, options: {} };
};
n.on(a.REQUEST, d);
n.on(a.MANUAL, _);
