import { d as N } from "./storybook-index-a9S0yb2f.es.js";
let R;
const V = new Uint8Array(16);
function A() {
  if (!R && (R = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !R))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return R(V);
}
const i = [];
for (let t = 0; t < 256; ++t)
  i.push((t + 256).toString(16).slice(1));
function D(t, e = 0) {
  return i[t[e + 0]] + i[t[e + 1]] + i[t[e + 2]] + i[t[e + 3]] + "-" + i[t[e + 4]] + i[t[e + 5]] + "-" + i[t[e + 6]] + i[t[e + 7]] + "-" + i[t[e + 8]] + i[t[e + 9]] + "-" + i[t[e + 10]] + i[t[e + 11]] + i[t[e + 12]] + i[t[e + 13]] + i[t[e + 14]] + i[t[e + 15]];
}
const P = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), h = {
  randomUUID: P
};
function S(t, e, o) {
  if (h.randomUUID && !e && !t)
    return h.randomUUID();
  t = t || {};
  const n = t.random || (t.rng || A)();
  return n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, D(n);
}
var b = class extends Error {
  constructor() {
    super(...arguments), this.data = {}, this.documentation = !1, this.fromStorybook = !0;
  }
  get fullErrorCode() {
    let t = String(this.code).padStart(4, "0");
    return `SB_${this.category}_${t}`;
  }
  get name() {
    let t = this.constructor.name;
    return `${this.fullErrorCode} (${t})`;
  }
  get message() {
    let t;
    return this.documentation === !0 ? t = `https://storybook.js.org/error/${this.fullErrorCode}` : typeof this.documentation == "string" ? t = this.documentation : Array.isArray(this.documentation) && (t = `
${this.documentation.map((e) => `	- ${e}`).join(`
`)}`), `${this.template()}${t != null ? `

More info: ${t}
` : ""}`;
  }
}, f = ((t) => (t.PREVIEW_CLIENT_LOGGER = "PREVIEW_CLIENT-LOGGER", t.PREVIEW_CHANNELS = "PREVIEW_CHANNELS", t.PREVIEW_CORE_EVENTS = "PREVIEW_CORE-EVENTS", t.PREVIEW_INSTRUMENTER = "PREVIEW_INSTRUMENTER", t.PREVIEW_API = "PREVIEW_API", t.PREVIEW_REACT_DOM_SHIM = "PREVIEW_REACT-DOM-SHIM", t.PREVIEW_ROUTER = "PREVIEW_ROUTER", t.PREVIEW_THEMING = "PREVIEW_THEMING", t.RENDERER_HTML = "RENDERER_HTML", t.RENDERER_PREACT = "RENDERER_PREACT", t.RENDERER_REACT = "RENDERER_REACT", t.RENDERER_SERVER = "RENDERER_SERVER", t.RENDERER_SVELTE = "RENDERER_SVELTE", t.RENDERER_VUE = "RENDERER_VUE", t.RENDERER_VUE3 = "RENDERER_VUE3", t.RENDERER_WEB_COMPONENTS = "RENDERER_WEB-COMPONENTS", t))(f || {}), W = class extends b {
  constructor(t) {
    super(), this.data = t, this.category = "PREVIEW_API", this.code = 2, this.documentation = "https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#using-implicit-actions-during-rendering-is-deprecated-for-example-in-the-play-function";
  }
  template() {
    return N`
      We detected that you use an implicit action arg during ${this.data.phase} of your story.  
      ${this.data.deprecated ? `
This is deprecated and won't work in Storybook 8 anymore.
` : ""}
      Please provide an explicit spy to your args like this:
        import { fn } from '@storybook/test';
        ... 
        args: {
         ${this.data.name}: fn()
        }
    `;
  }
};
const { addons: U } = __STORYBOOK_MODULE_PREVIEW_API__, { global: g } = __STORYBOOK_MODULE_GLOBAL__;
var M = "storybook/actions", w = `${M}/action-event`, x = { depth: 10, clearOnStoryChange: !0, limit: 50 }, y = (t, e) => {
  let o = Object.getPrototypeOf(t);
  return !o || e(o) ? o : y(o, e);
}, j = (t) => !!(typeof t == "object" && t && y(t, (e) => /^Synthetic(?:Base)?Event$/.test(e.constructor.name)) && typeof t.persist == "function"), $ = (t) => {
  if (j(t)) {
    let e = Object.create(t.constructor.prototype, Object.getOwnPropertyDescriptors(t));
    e.persist();
    let o = Object.getOwnPropertyDescriptor(e, "view"), n = o == null ? void 0 : o.value;
    return typeof n == "object" && (n == null ? void 0 : n.constructor.name) === "Window" && Object.defineProperty(e, "view", { ...o, value: Object.create(n.constructor.prototype) }), e;
  }
  return t;
}, k = () => typeof crypto == "object" && typeof crypto.getRandomValues == "function" ? S() : Date.now().toString(36) + Math.random().toString(36).substring(2);
function p(t, e = {}) {
  let o = { ...x, ...e }, n = function(...E) {
    var l, u;
    if (e.implicit) {
      let _ = (l = "__STORYBOOK_PREVIEW__" in g ? g.__STORYBOOK_PREVIEW__ : void 0) == null ? void 0 : l.storyRenders.find((a) => a.phase === "playing" || a.phase === "rendering");
      if (_) {
        let a = !((u = window == null ? void 0 : window.FEATURES) != null && u.disallowImplicitActionsInRenderV8), m = new W({ phase: _.phase, name: t, deprecated: a });
        if (a)
          console.warn(m);
        else
          throw m;
      }
    }
    let r = U.getChannel(), s = k(), c = 5, d = E.map($), O = E.length > 1 ? d : d[0], T = { id: s, count: 0, data: { name: t, args: O }, options: { ...o, maxDepth: c + (o.depth || 3), allowFunction: o.allowFunction || !1 } };
    r.emit(w, T);
  };
  return n.isAction = !0, n;
}
var I = (t, e) => typeof e[t] > "u" && !(t in e), L = (t) => {
  let { initialArgs: e, argTypes: o, id: n, parameters: { actions: E } } = t;
  if (!E || E.disable || !E.argTypesRegex || !o)
    return {};
  let r = new RegExp(E.argTypesRegex);
  return Object.entries(o).filter(([s]) => !!r.test(s)).reduce((s, [c, d]) => (I(c, e) && (s[c] = p(c, { implicit: !0, id: n })), s), {});
}, v = (t) => {
  let { initialArgs: e, argTypes: o, parameters: { actions: n } } = t;
  return n != null && n.disable || !o ? {} : Object.entries(o).filter(([E, r]) => !!r.action).reduce((E, [r, s]) => (I(r, e) && (E[r] = p(typeof s.action == "string" ? s.action : r)), E), {});
}, F = [v, L], B = (t) => {
  let { args: e, parameters: { actions: o } } = t;
  o != null && o.disable || Object.entries(e).filter(([, n]) => typeof n == "function" && "_isMockFunction" in n && n._isMockFunction).forEach(([n, E]) => {
    let r = E.getMockImplementation();
    if ((r == null ? void 0 : r._actionAttached) !== !0 && (r == null ? void 0 : r.isAction) !== !0) {
      let s = (...c) => (p(n)(...c), r == null ? void 0 : r(...c));
      s._actionAttached = !0, E.mockImplementation(s);
    }
  });
}, G = [B];
export {
  F as argsEnhancers,
  G as loaders
};