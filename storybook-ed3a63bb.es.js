import { d as xe } from "./storybook-2d1b80a2.es.js";
var Le = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof xe.global < "u" ? xe.global : typeof self < "u" ? self : {};
function $n(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Je(e, t) {
  return t = { exports: {} }, e(t, t.exports), t.exports;
}
var pe = 1e3, ge = pe * 60, ye = ge * 60, ue = ye * 24, In = ue * 7, Un = ue * 365.25, Nn = function(e, t) {
  t = t || {};
  var n = typeof e;
  if (n === "string" && e.length > 0)
    return jn(e);
  if (n === "number" && isFinite(e))
    return t.long ? Dn(e) : Ln(e);
  throw new Error(
    "val is not a non-empty string or a valid number. val=" + JSON.stringify(e)
  );
};
function jn(e) {
  if (e = String(e), !(e.length > 100)) {
    var t = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
      e
    );
    if (t) {
      var n = parseFloat(t[1]), s = (t[2] || "ms").toLowerCase();
      switch (s) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n * Un;
        case "weeks":
        case "week":
        case "w":
          return n * In;
        case "days":
        case "day":
        case "d":
          return n * ue;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n * ye;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n * ge;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n * pe;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n;
        default:
          return;
      }
    }
  }
}
function Ln(e) {
  var t = Math.abs(e);
  return t >= ue ? Math.round(e / ue) + "d" : t >= ye ? Math.round(e / ye) + "h" : t >= ge ? Math.round(e / ge) + "m" : t >= pe ? Math.round(e / pe) + "s" : e + "ms";
}
function Dn(e) {
  var t = Math.abs(e);
  return t >= ue ? De(e, t, ue, "day") : t >= ye ? De(e, t, ye, "hour") : t >= ge ? De(e, t, ge, "minute") : t >= pe ? De(e, t, pe, "second") : e + " ms";
}
function De(e, t, n, s) {
  var o = t >= n * 1.5;
  return Math.round(e / n) + " " + s + (o ? "s" : "");
}
function kn(e) {
  n.debug = n, n.default = n, n.coerce = u, n.disable = a, n.enable = o, n.enabled = l, n.humanize = Nn, n.destroy = d, Object.keys(e).forEach((h) => {
    n[h] = e[h];
  }), n.names = [], n.skips = [], n.formatters = {};
  function t(h) {
    let p = 0;
    for (let y = 0; y < h.length; y++)
      p = (p << 5) - p + h.charCodeAt(y), p |= 0;
    return n.colors[Math.abs(p) % n.colors.length];
  }
  n.selectColor = t;
  function n(h) {
    let p, y = null;
    function v(...R) {
      if (!v.enabled)
        return;
      const M = v, B = Number(/* @__PURE__ */ new Date()), be = B - (p || B);
      M.diff = be, M.prev = p, M.curr = B, p = B, R[0] = n.coerce(R[0]), typeof R[0] != "string" && R.unshift("%O");
      let E = 0;
      R[0] = R[0].replace(/%([a-zA-Z%])/g, (ee, fe) => {
        if (ee === "%%")
          return "%";
        E++;
        const z = n.formatters[fe];
        if (typeof z == "function") {
          const te = R[E];
          ee = z.call(M, te), R.splice(E, 1), E--;
        }
        return ee;
      }), n.formatArgs.call(M, R), (M.log || n.log).apply(M, R);
    }
    return v.namespace = h, v.useColors = n.useColors(), v.color = n.selectColor(h), v.extend = s, v.destroy = n.destroy, Object.defineProperty(v, "enabled", {
      enumerable: !0,
      configurable: !1,
      get: () => y === null ? n.enabled(h) : y,
      set: (R) => {
        y = R;
      }
    }), typeof n.init == "function" && n.init(v), v;
  }
  function s(h, p) {
    const y = n(this.namespace + (typeof p > "u" ? ":" : p) + h);
    return y.log = this.log, y;
  }
  function o(h) {
    n.save(h), n.names = [], n.skips = [];
    let p;
    const y = (typeof h == "string" ? h : "").split(/[\s,]+/), v = y.length;
    for (p = 0; p < v; p++)
      y[p] && (h = y[p].replace(/\*/g, ".*?"), h[0] === "-" ? n.skips.push(new RegExp("^" + h.substr(1) + "$")) : n.names.push(new RegExp("^" + h + "$")));
  }
  function a() {
    const h = [
      ...n.names.map(g),
      ...n.skips.map(g).map((p) => "-" + p)
    ].join(",");
    return n.enable(""), h;
  }
  function l(h) {
    if (h[h.length - 1] === "*")
      return !0;
    let p, y;
    for (p = 0, y = n.skips.length; p < y; p++)
      if (n.skips[p].test(h))
        return !1;
    for (p = 0, y = n.names.length; p < y; p++)
      if (n.names[p].test(h))
        return !0;
    return !1;
  }
  function g(h) {
    return h.toString().substring(2, h.toString().length - 2).replace(/\.\*\?$/, "*");
  }
  function u(h) {
    return h instanceof Error ? h.stack || h.message : h;
  }
  function d() {
    console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
  }
  return n.enable(n.load()), n;
}
var Bn = kn, j = Je(function(e, t) {
  t.formatArgs = s, t.save = o, t.load = a, t.useColors = n, t.storage = l(), t.destroy = (() => {
    let u = !1;
    return () => {
      u || (u = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
    };
  })(), t.colors = [
    "#0000CC",
    "#0000FF",
    "#0033CC",
    "#0033FF",
    "#0066CC",
    "#0066FF",
    "#0099CC",
    "#0099FF",
    "#00CC00",
    "#00CC33",
    "#00CC66",
    "#00CC99",
    "#00CCCC",
    "#00CCFF",
    "#3300CC",
    "#3300FF",
    "#3333CC",
    "#3333FF",
    "#3366CC",
    "#3366FF",
    "#3399CC",
    "#3399FF",
    "#33CC00",
    "#33CC33",
    "#33CC66",
    "#33CC99",
    "#33CCCC",
    "#33CCFF",
    "#6600CC",
    "#6600FF",
    "#6633CC",
    "#6633FF",
    "#66CC00",
    "#66CC33",
    "#9900CC",
    "#9900FF",
    "#9933CC",
    "#9933FF",
    "#99CC00",
    "#99CC33",
    "#CC0000",
    "#CC0033",
    "#CC0066",
    "#CC0099",
    "#CC00CC",
    "#CC00FF",
    "#CC3300",
    "#CC3333",
    "#CC3366",
    "#CC3399",
    "#CC33CC",
    "#CC33FF",
    "#CC6600",
    "#CC6633",
    "#CC9900",
    "#CC9933",
    "#CCCC00",
    "#CCCC33",
    "#FF0000",
    "#FF0033",
    "#FF0066",
    "#FF0099",
    "#FF00CC",
    "#FF00FF",
    "#FF3300",
    "#FF3333",
    "#FF3366",
    "#FF3399",
    "#FF33CC",
    "#FF33FF",
    "#FF6600",
    "#FF6633",
    "#FF9900",
    "#FF9933",
    "#FFCC00",
    "#FFCC33"
  ];
  function n() {
    return typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs) ? !0 : typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? !1 : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
    typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
    typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }
  function s(u) {
    if (u[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + u[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !this.useColors)
      return;
    const d = "color: " + this.color;
    u.splice(1, 0, d, "color: inherit");
    let h = 0, p = 0;
    u[0].replace(/%[a-zA-Z%]/g, (y) => {
      y !== "%%" && (h++, y === "%c" && (p = h));
    }), u.splice(p, 0, d);
  }
  t.log = console.debug || console.log || (() => {
  });
  function o(u) {
    try {
      u ? t.storage.setItem("debug", u) : t.storage.removeItem("debug");
    } catch {
    }
  }
  function a() {
    let u;
    try {
      u = t.storage.getItem("debug");
    } catch {
    }
    return !u && typeof xe.process < "u" && "env" in xe.process && (u = xe.process.env.DEBUG), u;
  }
  function l() {
    try {
      return localStorage;
    } catch {
    }
  }
  e.exports = Bn(t);
  const { formatters: g } = e.exports;
  g.j = function(u) {
    try {
      return JSON.stringify(u);
    } catch (d) {
      return "[UnexpectedJSONParseError]: " + d.message;
    }
  };
});
j.formatArgs;
j.save;
j.load;
j.useColors;
j.storage;
j.destroy;
j.colors;
j.log;
let Xt, ze = "default", ot = "";
const at = () => {
  Xt = j(ot ? `fetch-mock:${ze}:${ot}` : `fetch-mock:${ze}`);
}, zn = (e) => j(`fetch-mock:${ze}:${e}`);
at();
var le = {
  debug: (...e) => {
    Xt(...e);
  },
  setDebugNamespace: (e) => {
    ot = e, at();
  },
  setDebugPhase: (e) => {
    ze = e || "default", at();
  },
  getDebug: (e) => zn(e)
};
const { debug: Gn, setDebugPhase: Zt } = le, U = {};
U.mock = function(...e) {
  return Zt("setup"), e.length && this.addRoute(e), this._mock();
};
U.addRoute = function(e) {
  Gn("Adding route", e);
  const t = this.compileRoute(e), n = this.routes.filter(({ identifier: s, method: o }) => (typeof s == "function" ? s === t.identifier : String(s) === String(t.identifier)) && (!o || !t.method || o === t.method));
  if (this.getOption("overwriteRoutes", t) === !1 || !n.length)
    return this._uncompiledRoutes.push(e), this.routes.push(t);
  if (this.getOption("overwriteRoutes", t) === !0)
    return n.forEach((s) => {
      const o = this.routes.indexOf(s);
      this._uncompiledRoutes.splice(o, 1, e), this.routes.splice(o, 1, t);
    }), this.routes;
  if (n.length)
    throw new Error(
      "fetch-mock: Adding route with same name or matcher as existing route. See `overwriteRoutes` option."
    );
  this._uncompiledRoutes.push(e), this.routes.push(t);
};
U._mock = function() {
  return this.isSandbox || (this.realFetch = this.realFetch || this.global.fetch, this.global.fetch = this.fetchHandler), Zt(), this;
};
U.catch = function(e) {
  return this.fallbackResponse && console.warn(
    "calling fetchMock.catch() twice - are you sure you want to overwrite the previous fallback response"
  ), this.fallbackResponse = e || "ok", this._mock();
};
U.spy = function(e) {
  return this._mock(), e ? this.mock(e, this.getNativeFetch()) : this.catch(this.getNativeFetch());
};
const Ge = (e, t, n) => {
  U[e] = function(s, o, a) {
    return this[t](
      s,
      o,
      Object.assign(a || {}, n)
    );
  };
}, qe = (e, t) => {
  U[e] = function(n, s) {
    return this[t]({}, n, s);
  };
};
Ge("sticky", "mock", { sticky: !0 });
Ge("once", "mock", { repeat: 1 });
qe("any", "mock");
qe("anyOnce", "once");
["get", "post", "put", "delete", "head", "patch"].forEach((e) => {
  Ge(e, "mock", { method: e }), Ge(`${e}Once`, "once", { method: e }), qe(`${e}Any`, e), qe(`${e}AnyOnce`, `${e}Once`);
});
const qn = (e) => {
  typeof e == "function" && (console.warn("Deprecated: Passing fetch-mock reset methods\ndirectly in as handlers for before/after test runner hooks.\nWrap in an arrow function instead e.g. `() => fetchMock.restore()`"), e());
}, Hn = ({ sticky: e }) => (t) => e ? [] : t.filter(({ sticky: n }) => n);
U.resetBehavior = function(e = {}) {
  qn(e);
  const t = Hn(e);
  return this.routes = t(this.routes), this._uncompiledRoutes = t(this._uncompiledRoutes), this.realFetch && !this.routes.length && (this.global.fetch = this.realFetch, this.realFetch = void 0), this.fallbackResponse = void 0, this;
};
U.resetHistory = function() {
  return this._calls = [], this._holdingPromises = [], this.routes.forEach((e) => e.reset && e.reset()), this;
};
U.restore = U.reset = function(e) {
  return this.resetBehavior(e), this.resetHistory(), this;
};
var Wn = U;
const { getDebug: Jn } = le, Dt = [
  "body",
  "headers",
  "throws",
  "status",
  "redirectUrl"
];
class Kn {
  constructor(t) {
    this.debug = Jn("ResponseBuilder()"), this.debug("Response builder created with options", t), Object.assign(this, t);
  }
  exec() {
    this.debug("building response"), this.normalizeResponseConfig(), this.constructFetchOpts(), this.constructResponseBody();
    const t = new this.fetchMock.config.Response(
      this.body,
      this.options
    ), n = this.buildObservableResponse(t);
    return [t, n];
  }
  sendAsObject() {
    return Dt.some((t) => this.responseConfig[t]) ? !Object.keys(this.responseConfig).every(
      (t) => Dt.includes(t)
    ) : !0;
  }
  normalizeResponseConfig() {
    typeof this.responseConfig == "number" ? (this.debug("building response using status", this.responseConfig), this.responseConfig = {
      status: this.responseConfig
    }) : (typeof this.responseConfig == "string" || this.sendAsObject()) && (this.debug("building text response from", this.responseConfig), this.responseConfig = {
      body: this.responseConfig
    });
  }
  validateStatus(t) {
    if (!t)
      return this.debug("No status provided. Defaulting to 200"), 200;
    if (typeof t == "number" && parseInt(t, 10) !== t && t >= 200 || t < 600)
      return this.debug("Valid status provided", t), t;
    throw new TypeError(`fetch-mock: Invalid status ${t} passed on response object.
To respond with a JSON object that has status as a property assign the object to body
e.g. {"body": {"status: "registered"}}`);
  }
  constructFetchOpts() {
    this.options = this.responseConfig.options || {}, this.options.url = this.responseConfig.redirectUrl || this.url, this.options.status = this.validateStatus(this.responseConfig.status), this.options.statusText = this.fetchMock.statusTextMap[String(this.options.status)], this.options.headers = new this.fetchMock.config.Headers(
      this.responseConfig.headers || {}
    );
  }
  getOption(t) {
    return this.fetchMock.getOption(t, this.route);
  }
  convertToJson() {
    this.getOption("sendAsJson") && this.responseConfig.body != null && //eslint-disable-line
    typeof this.body == "object" && (this.debug("Stringifying JSON response body"), this.body = JSON.stringify(this.body), this.options.headers.has("Content-Type") || this.options.headers.set("Content-Type", "application/json"));
  }
  setContentLength() {
    this.getOption("includeContentLength") && typeof this.body == "string" && !this.options.headers.has("Content-Length") && (this.debug("Setting content-length header:", this.body.length.toString()), this.options.headers.set("Content-Length", this.body.length.toString()));
  }
  constructResponseBody() {
    if (this.body = this.responseConfig.body, this.convertToJson(), this.setContentLength(), this.Stream) {
      this.debug("Creating response stream");
      const t = new this.Stream.Readable();
      this.body != null && t.push(this.body, "utf-8"), t.push(null), this.body = t;
    }
    this.body = this.body;
  }
  buildObservableResponse(t) {
    const n = this.fetchMock;
    return t._fmResults = {}, this.debug("Wrapping Response in ES proxy for observability"), new Proxy(t, {
      get: (s, o) => {
        if (this.responseConfig.redirectUrl) {
          if (o === "url")
            return this.debug(
              "Retrieving redirect url",
              this.responseConfig.redirectUrl
            ), this.responseConfig.redirectUrl;
          if (o === "redirected")
            return this.debug("Retrieving redirected status", !0), !0;
        }
        return typeof s[o] == "function" ? (this.debug("Wrapping body promises in ES proxies for observability"), new Proxy(s[o], {
          apply: (a, l, g) => {
            this.debug(`Calling res.${o}`);
            const u = a.apply(t, g);
            return u.then && (n._holdingPromises.push(u.catch(() => null)), s._fmResults[o] = u), u;
          }
        })) : s[o];
      }
    });
  }
}
var Xn = (e) => new Kn(e).exec();
let Y;
const ct = new RegExp("^[a-z]+://", "i"), Zn = new RegExp("^//", "i"), kt = (e) => typeof e.raw == "function" ? Object.entries(e.raw()) : e[Symbol.iterator] ? [...e] : Object.entries(e), Bt = (e) => e.reduce((t, [n, s]) => Object.assign(t, { [n]: s }), {}), it = (e) => {
  if (typeof e == "function" || e instanceof RegExp || /^(begin|end|glob|express|path)\:/.test(e))
    return e;
  if (ct.test(e))
    return new Y(e).href;
  if (Zn.test(e))
    return new Y(e, "http://dummy").href;
  {
    const t = new Y(e, "http://dummy");
    return t.pathname + t.search;
  }
}, Yn = async (e) => {
  try {
    return "body" in e ? e.body.toString() : e.clone().text();
  } catch {
  }
};
var Ke = {
  setUrlImplementation: (e) => {
    Y = e;
  },
  normalizeRequest: (e, t, n) => {
    if (n.prototype.isPrototypeOf(e)) {
      const s = {
        method: e.method
      }, o = Yn(e);
      typeof o < "u" && (s.body = o);
      const a = {
        url: it(e.url),
        options: Object.assign(s, t),
        request: e,
        signal: t && t.signal || e.signal
      }, l = kt(e.headers);
      return l.length && (a.options.headers = Bt(l)), a;
    } else {
      if (typeof e == "string" || // horrible URL object duck-typing
      typeof e == "object" && "href" in e)
        return {
          url: it(e),
          options: t,
          signal: t && t.signal
        };
      throw typeof e == "object" ? new TypeError(
        "fetch-mock: Unrecognised Request object. Read the Config and Installation sections of the docs"
      ) : new TypeError("fetch-mock: Invalid arguments passed to fetch");
    }
  },
  normalizeUrl: it,
  getPath: (e) => (ct.test(e) ? new Y(e) : new Y(e, "http://dummy")).pathname,
  getQuery: (e) => {
    const t = ct.test(e) ? new Y(e) : new Y(e, "http://dummy");
    return t.search ? t.search.substr(1) : "";
  },
  headers: {
    normalize: (e) => Bt(kt(e)),
    toLowerCase: (e) => Object.keys(e).reduce((t, n) => (t[n.toLowerCase()] = e[n], t), {}),
    equal: (e, t) => (e = Array.isArray(e) ? e : [e], t = Array.isArray(t) ? t : [t], e.length !== t.length ? !1 : e.every((n, s) => n === t[s]))
  }
};
const { debug: Te, setDebugPhase: Yt, getDebug: Xe } = le, L = {};
class Qn extends Error {
  constructor() {
    super(...arguments), this.name = "AbortError", this.message = "The operation was aborted.", Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
  }
}
const Vn = (e) => typeof navigator > "u" || !navigator.vendor || navigator.vendor !== "Apple Computer, Inc." ? e : async (t) => {
  const { method: n } = t;
  if (!["POST", "PUT", "PATCH"].includes(n))
    return e(t);
  const s = await t.clone().text(), {
    cache: o,
    credentials: a,
    headers: l,
    integrity: g,
    mode: u,
    redirect: d,
    referrer: h
  } = t, p = {
    body: s,
    cache: o,
    credentials: a,
    headers: l,
    integrity: g,
    mode: u,
    redirect: d,
    referrer: h,
    method: n
  };
  return e(t.url, p);
}, es = async ({ response: e, responseIsFetch: t = !1 }, n, s, o) => {
  const a = Xe("resolve()");
  for (a("Recursively resolving function and promise responses"); ; )
    if (typeof e == "function") {
      if (a("  Response is a function"), t)
        return o ? (a("  -> Calling fetch with Request instance"), e(o)) : (a("  -> Calling fetch with url and options"), e(n, s));
      a("  -> Calling response function"), e = e(n, s, o);
    } else if (typeof e.then == "function")
      a("  Response is a promise"), a("  -> Resolving promise"), e = await e;
    else
      return a("  Response is not a function or a promise"), a("  -> Exiting response resolution recursion"), e;
};
L.needsAsyncBodyExtraction = function({ request: e }) {
  return e && this.routes.some(({ usesBody: t }) => t);
};
L.fetchHandler = function(e, t) {
  Yt("handle");
  const n = Xe("fetchHandler()");
  n("fetch called with:", e, t);
  const s = Ke.normalizeRequest(
    e,
    t,
    this.config.Request
  );
  return n("Request normalised"), n("  url", s.url), n("  options", s.options), n("  request", s.request), n("  signal", s.signal), this.needsAsyncBodyExtraction(s) ? (n(
    "Need to wait for Body to be streamed before calling router: switching to async mode"
  ), this._extractBodyThenHandle(s)) : this._fetchHandler(s);
};
L._extractBodyThenHandle = async function(e) {
  return e.options.body = await e.options.body, this._fetchHandler(e);
};
L._fetchHandler = function({ url: e, options: t, request: n, signal: s }) {
  const { route: o, callLog: a } = this.executeRouter(e, t, n);
  this.recordCall(a);
  let l;
  return this._holdingPromises.push(new this.config.Promise((g) => l = g)), new this.config.Promise((g, u) => {
    if (s) {
      Te("signal exists - enabling fetch abort");
      const d = () => {
        Te("aborting fetch"), u(
          typeof DOMException < "u" ? new DOMException("The operation was aborted.", "AbortError") : new Qn()
        ), l();
      };
      s.aborted && (Te("signal is already aborted - aborting the fetch"), d()), s.addEventListener("abort", d);
    }
    this.generateResponse({ route: o, url: e, options: t, request: n, callLog: a }).then(g, u).then(l, l).then(() => {
      Yt();
    });
  });
};
L.fetchHandler.isMock = !0;
L.executeRouter = function(e, t, n) {
  const s = Xe("executeRouter()"), o = { url: e, options: t, request: n, isUnmatched: !0 };
  if (s("Attempting to match request to a route"), this.getOption("fallbackToNetwork") === "always")
    return s(
      "  Configured with fallbackToNetwork=always - passing through to fetch"
    ), {
      route: { response: this.getNativeFetch(), responseIsFetch: !0 }
      // BUG - this callLog never used to get sent. Discovered the bug
      // but can't fix outside a major release as it will potentially
      // cause too much disruption
      //
      // callLog,
    };
  const a = this.router(e, t, n);
  if (a)
    return s("  Matching route found"), {
      route: a,
      callLog: {
        url: e,
        options: t,
        request: n,
        identifier: a.identifier
      }
    };
  if (this.getOption("warnOnFallback") && console.warn(`Unmatched ${t && t.method || "GET"} to ${e}`), this.fallbackResponse)
    return s("  No matching route found - using fallbackResponse"), { route: { response: this.fallbackResponse }, callLog: o };
  if (!this.getOption("fallbackToNetwork"))
    throw new Error(
      `fetch-mock: No fallback response defined for ${t && t.method || "GET"} to ${e}`
    );
  return s("  Configured to fallbackToNetwork - passing through to fetch"), {
    route: { response: this.getNativeFetch(), responseIsFetch: !0 },
    callLog: o
  };
};
L.generateResponse = async function({
  route: e,
  url: t,
  options: n,
  request: s,
  callLog: o = {}
}) {
  const a = Xe("generateResponse()"), l = await es(e, t, n, s);
  if (l.throws && typeof l != "function")
    throw a("response.throws is defined - throwing an error"), l.throws;
  if (this.config.Response.prototype.isPrototypeOf(l))
    return a("response is already a Response instance - returning it"), o.response = l, l;
  const [g, u] = Xn({
    url: t,
    responseConfig: l,
    fetchMock: this,
    route: e
  });
  return o.response = g, u;
};
L.router = function(e, t, n) {
  const s = this.routes.find((o, a) => (Te(`Trying to match route ${a}`), o.matcher(e, t, n)));
  if (s)
    return s;
};
L.getNativeFetch = function() {
  const e = this.realFetch || this.isSandbox && this.config.fetch;
  if (!e)
    throw new Error(
      "fetch-mock: Falling back to network only available on global fetch-mock, or by setting config.fetch on sandboxed fetch-mock"
    );
  return Vn(e);
};
L.recordCall = function(e) {
  Te("Recording fetch call", e), e && this._calls.push(e);
};
var ts = L, rs = function(e, t) {
  if (typeof e != "string")
    throw new TypeError("Expected a string");
  for (var n = String(e), s = "", o = t ? !!t.extended : !1, a = t ? !!t.globstar : !1, l = !1, g = t && typeof t.flags == "string" ? t.flags : "", u, d = 0, h = n.length; d < h; d++)
    switch (u = n[d], u) {
      case "/":
      case "$":
      case "^":
      case "+":
      case ".":
      case "(":
      case ")":
      case "=":
      case "!":
      case "|":
        s += "\\" + u;
        break;
      case "?":
        if (o) {
          s += ".";
          break;
        }
      case "[":
      case "]":
        if (o) {
          s += u;
          break;
        }
      case "{":
        if (o) {
          l = !0, s += "(";
          break;
        }
      case "}":
        if (o) {
          l = !1, s += ")";
          break;
        }
      case ",":
        if (l) {
          s += "|";
          break;
        }
        s += "\\" + u;
        break;
      case "*":
        for (var p = n[d - 1], y = 1; n[d + 1] === "*"; )
          y++, d++;
        var v = n[d + 1];
        if (!a)
          s += ".*";
        else {
          var R = y > 1 && (p === "/" || p === void 0) && (v === "/" || v === void 0);
          R ? (s += "((?:[^/]*(?:/|$))*)", d++) : s += "([^/]*)";
        }
        break;
      default:
        s += u;
    }
  return (!g || !~g.indexOf("g")) && (s = "^" + s + "$"), new RegExp(s, g);
}, me = nr, ns = ht, ss = cs, is = er, os = rr, Qt = "/", Vt = "./", as = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  "(\\\\.)",
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // ":test(\\d+)?" => ["test", "\d+", undefined, "?"]
  // "(\\d+)"  => [undefined, undefined, "\d+", undefined]
  "(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"
].join("|"), "g");
function ht(e, t) {
  for (var n = [], s = 0, o = 0, a = "", l = t && t.delimiter || Qt, g = t && t.delimiters || Vt, u = !1, d; (d = as.exec(e)) !== null; ) {
    var h = d[0], p = d[1], y = d.index;
    if (a += e.slice(o, y), o = y + h.length, p) {
      a += p[1], u = !0;
      continue;
    }
    var v = "", R = e[o], M = d[2], B = d[3], be = d[4], E = d[5];
    if (!u && a.length) {
      var V = a.length - 1;
      g.indexOf(a[V]) > -1 && (v = a[V], a = a.slice(0, V));
    }
    a && (n.push(a), a = "", u = !1);
    var ee = v !== "" && R !== void 0 && R !== v, fe = E === "+" || E === "*", z = E === "?" || E === "*", te = v || l, Ee = B || be;
    n.push({
      name: M || s++,
      prefix: v,
      delimiter: te,
      optional: z,
      repeat: fe,
      partial: ee,
      pattern: Ee ? us(Ee) : "[^" + Z(te) + "]+?"
    });
  }
  return (a || o < e.length) && n.push(a + e.substr(o)), n;
}
function cs(e, t) {
  return er(ht(e, t));
}
function er(e) {
  for (var t = new Array(e.length), n = 0; n < e.length; n++)
    typeof e[n] == "object" && (t[n] = new RegExp("^(?:" + e[n].pattern + ")$"));
  return function(s, o) {
    for (var a = "", l = o && o.encode || encodeURIComponent, g = 0; g < e.length; g++) {
      var u = e[g];
      if (typeof u == "string") {
        a += u;
        continue;
      }
      var d = s ? s[u.name] : void 0, h;
      if (Array.isArray(d)) {
        if (!u.repeat)
          throw new TypeError('Expected "' + u.name + '" to not repeat, but got array');
        if (d.length === 0) {
          if (u.optional)
            continue;
          throw new TypeError('Expected "' + u.name + '" to not be empty');
        }
        for (var p = 0; p < d.length; p++) {
          if (h = l(d[p], u), !t[g].test(h))
            throw new TypeError('Expected all "' + u.name + '" to match "' + u.pattern + '"');
          a += (p === 0 ? u.prefix : u.delimiter) + h;
        }
        continue;
      }
      if (typeof d == "string" || typeof d == "number" || typeof d == "boolean") {
        if (h = l(String(d), u), !t[g].test(h))
          throw new TypeError('Expected "' + u.name + '" to match "' + u.pattern + '", but got "' + h + '"');
        a += u.prefix + h;
        continue;
      }
      if (u.optional) {
        u.partial && (a += u.prefix);
        continue;
      }
      throw new TypeError('Expected "' + u.name + '" to be ' + (u.repeat ? "an array" : "a string"));
    }
    return a;
  };
}
function Z(e) {
  return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
function us(e) {
  return e.replace(/([=!:$/()])/g, "\\$1");
}
function tr(e) {
  return e && e.sensitive ? "" : "i";
}
function ls(e, t) {
  if (!t)
    return e;
  var n = e.source.match(/\((?!\?)/g);
  if (n)
    for (var s = 0; s < n.length; s++)
      t.push({
        name: s,
        prefix: null,
        delimiter: null,
        optional: !1,
        repeat: !1,
        partial: !1,
        pattern: null
      });
  return e;
}
function fs(e, t, n) {
  for (var s = [], o = 0; o < e.length; o++)
    s.push(nr(e[o], t, n).source);
  return new RegExp("(?:" + s.join("|") + ")", tr(n));
}
function hs(e, t, n) {
  return rr(ht(e, n), t, n);
}
function rr(e, t, n) {
  n = n || {};
  for (var s = n.strict, o = n.start !== !1, a = n.end !== !1, l = Z(n.delimiter || Qt), g = n.delimiters || Vt, u = [].concat(n.endsWith || []).map(Z).concat("$").join("|"), d = o ? "^" : "", h = e.length === 0, p = 0; p < e.length; p++) {
    var y = e[p];
    if (typeof y == "string")
      d += Z(y), h = p === e.length - 1 && g.indexOf(y[y.length - 1]) > -1;
    else {
      var v = y.repeat ? "(?:" + y.pattern + ")(?:" + Z(y.delimiter) + "(?:" + y.pattern + "))*" : y.pattern;
      t && t.push(y), y.optional ? y.partial ? d += Z(y.prefix) + "(" + v + ")?" : d += "(?:" + Z(y.prefix) + "(" + v + "))?" : d += Z(y.prefix) + "(" + v + ")";
    }
  }
  return a ? (s || (d += "(?:" + l + ")?"), d += u === "$" ? "$" : "(?=" + u + ")") : (s || (d += "(?:" + l + "(?=" + u + "))?"), h || (d += "(?=" + l + "|" + u + ")")), new RegExp(d, tr(n));
}
function nr(e, t, n) {
  return e instanceof RegExp ? ls(e, t) : Array.isArray(e) ? fs(
    /** @type {!Array} */
    e,
    t,
    n
  ) : hs(
    /** @type {string} */
    e,
    t,
    n
  );
}
me.parse = ns;
me.compile = ss;
me.tokensToFunction = is;
me.tokensToRegExp = os;
function ds(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
var ps = function(e, t, n, s) {
  t = t || "&", n = n || "=";
  var o = {};
  if (typeof e != "string" || e.length === 0)
    return o;
  var a = /\+/g;
  e = e.split(t);
  var l = 1e3;
  s && typeof s.maxKeys == "number" && (l = s.maxKeys);
  var g = e.length;
  l > 0 && g > l && (g = l);
  for (var u = 0; u < g; ++u) {
    var d = e[u].replace(a, "%20"), h = d.indexOf(n), p, y, v, R;
    h >= 0 ? (p = d.substr(0, h), y = d.substr(h + 1)) : (p = d, y = ""), v = decodeURIComponent(p), R = decodeURIComponent(y), ds(o, v) ? Array.isArray(o[v]) ? o[v].push(R) : o[v] = [o[v], R] : o[v] = R;
  }
  return o;
}, Re = function(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "boolean":
      return e ? "true" : "false";
    case "number":
      return isFinite(e) ? e : "";
    default:
      return "";
  }
}, gs = function(e, t, n, s) {
  return t = t || "&", n = n || "=", e === null && (e = void 0), typeof e == "object" ? Object.keys(e).map(function(o) {
    var a = encodeURIComponent(Re(o)) + n;
    return Array.isArray(e[o]) ? e[o].map(function(l) {
      return a + encodeURIComponent(Re(l));
    }).join(t) : a + encodeURIComponent(Re(e[o]));
  }).join(t) : s ? encodeURIComponent(Re(s)) + n + encodeURIComponent(Re(e)) : "";
}, ae = Je(function(e, t) {
  t.decode = t.parse = ps, t.encode = t.stringify = gs;
});
ae.decode;
ae.parse;
ae.encode;
ae.stringify;
var sr = Je(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var n = function(s) {
    function o(a, l) {
      return s.apply(this, arguments);
    }
    return o.toString = function() {
      return s.toString();
    }, o;
  }(function(s, o) {
    return typeof s != "object" || s === null || typeof o != "object" || o === null ? !1 : Object.keys(o).every(function(a) {
      if (!s.propertyIsEnumerable(a))
        return !1;
      var l = o[a], g = s[a];
      return !(typeof l == "object" && l !== null ? !n(g, l) : g !== l);
    });
  });
  t.default = n, e.exports = t.default;
});
$n(sr);
var ir = Je(function(e, t) {
  var n = 200, s = "__lodash_hash_undefined__", o = 1, a = 2, l = 9007199254740991, g = "[object Arguments]", u = "[object Array]", d = "[object AsyncFunction]", h = "[object Boolean]", p = "[object Date]", y = "[object Error]", v = "[object Function]", R = "[object GeneratorFunction]", M = "[object Map]", B = "[object Number]", be = "[object Null]", E = "[object Object]", V = "[object Promise]", ee = "[object Proxy]", fe = "[object RegExp]", z = "[object Set]", te = "[object String]", Ee = "[object Symbol]", cr = "[object Undefined]", Ze = "[object WeakMap]", pt = "[object ArrayBuffer]", Oe = "[object DataView]", ur = "[object Float32Array]", lr = "[object Float64Array]", fr = "[object Int8Array]", hr = "[object Int16Array]", dr = "[object Int32Array]", pr = "[object Uint8Array]", gr = "[object Uint8ClampedArray]", yr = "[object Uint16Array]", mr = "[object Uint32Array]", br = /[\\^$.*+?()[\]{}|]/g, vr = /^\[object .+?Constructor\]$/, wr = /^(?:0|[1-9]\d*)$/, C = {};
  C[ur] = C[lr] = C[fr] = C[hr] = C[dr] = C[pr] = C[gr] = C[yr] = C[mr] = !0, C[g] = C[u] = C[pt] = C[h] = C[Oe] = C[p] = C[y] = C[v] = C[M] = C[B] = C[E] = C[fe] = C[z] = C[te] = C[Ze] = !1;
  var gt = typeof Le == "object" && Le && Le.Object === Object && Le, Cr = typeof self == "object" && self && self.Object === Object && self, G = gt || Cr || Function("return this")(), yt = t && !t.nodeType && t, mt = yt && !0 && e && !e.nodeType && e, bt = mt && mt.exports === yt, Ye = bt && gt.process, vt = function() {
    try {
      return Ye && Ye.binding && Ye.binding("util");
    } catch {
    }
  }(), wt = vt && vt.isTypedArray;
  function _r(r, i) {
    for (var c = -1, f = r == null ? 0 : r.length, _ = 0, b = []; ++c < f; ) {
      var x = r[c];
      i(x, c, r) && (b[_++] = x);
    }
    return b;
  }
  function Rr(r, i) {
    for (var c = -1, f = i.length, _ = r.length; ++c < f; )
      r[_ + c] = i[c];
    return r;
  }
  function Ar(r, i) {
    for (var c = -1, f = r == null ? 0 : r.length; ++c < f; )
      if (i(r[c], c, r))
        return !0;
    return !1;
  }
  function xr(r, i) {
    for (var c = -1, f = Array(r); ++c < r; )
      f[c] = i(c);
    return f;
  }
  function Tr(r) {
    return function(i) {
      return r(i);
    };
  }
  function Fr(r, i) {
    return r.has(i);
  }
  function Er(r, i) {
    return r == null ? void 0 : r[i];
  }
  function Or(r) {
    var i = -1, c = Array(r.size);
    return r.forEach(function(f, _) {
      c[++i] = [_, f];
    }), c;
  }
  function Sr(r, i) {
    return function(c) {
      return r(i(c));
    };
  }
  function Mr(r) {
    var i = -1, c = Array(r.size);
    return r.forEach(function(f) {
      c[++i] = f;
    }), c;
  }
  var Pr = Array.prototype, $r = Function.prototype, Se = Object.prototype, Qe = G["__core-js_shared__"], Ct = $r.toString, D = Se.hasOwnProperty, _t = function() {
    var r = /[^.]+$/.exec(Qe && Qe.keys && Qe.keys.IE_PROTO || "");
    return r ? "Symbol(src)_1." + r : "";
  }(), Rt = Se.toString, Ir = RegExp(
    "^" + Ct.call(D).replace(br, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), At = bt ? G.Buffer : void 0, Me = G.Symbol, xt = G.Uint8Array, Tt = Se.propertyIsEnumerable, Ur = Pr.splice, re = Me ? Me.toStringTag : void 0, Ft = Object.getOwnPropertySymbols, Nr = At ? At.isBuffer : void 0, jr = Sr(Object.keys, Object), Ve = he(G, "DataView"), ve = he(G, "Map"), et = he(G, "Promise"), tt = he(G, "Set"), rt = he(G, "WeakMap"), we = he(Object, "create"), Lr = ie(Ve), Dr = ie(ve), kr = ie(et), Br = ie(tt), zr = ie(rt), Et = Me ? Me.prototype : void 0, nt = Et ? Et.valueOf : void 0;
  function ne(r) {
    var i = -1, c = r == null ? 0 : r.length;
    for (this.clear(); ++i < c; ) {
      var f = r[i];
      this.set(f[0], f[1]);
    }
  }
  function Gr() {
    this.__data__ = we ? we(null) : {}, this.size = 0;
  }
  function qr(r) {
    var i = this.has(r) && delete this.__data__[r];
    return this.size -= i ? 1 : 0, i;
  }
  function Hr(r) {
    var i = this.__data__;
    if (we) {
      var c = i[r];
      return c === s ? void 0 : c;
    }
    return D.call(i, r) ? i[r] : void 0;
  }
  function Wr(r) {
    var i = this.__data__;
    return we ? i[r] !== void 0 : D.call(i, r);
  }
  function Jr(r, i) {
    var c = this.__data__;
    return this.size += this.has(r) ? 0 : 1, c[r] = we && i === void 0 ? s : i, this;
  }
  ne.prototype.clear = Gr, ne.prototype.delete = qr, ne.prototype.get = Hr, ne.prototype.has = Wr, ne.prototype.set = Jr;
  function q(r) {
    var i = -1, c = r == null ? 0 : r.length;
    for (this.clear(); ++i < c; ) {
      var f = r[i];
      this.set(f[0], f[1]);
    }
  }
  function Kr() {
    this.__data__ = [], this.size = 0;
  }
  function Xr(r) {
    var i = this.__data__, c = $e(i, r);
    if (c < 0)
      return !1;
    var f = i.length - 1;
    return c == f ? i.pop() : Ur.call(i, c, 1), --this.size, !0;
  }
  function Zr(r) {
    var i = this.__data__, c = $e(i, r);
    return c < 0 ? void 0 : i[c][1];
  }
  function Yr(r) {
    return $e(this.__data__, r) > -1;
  }
  function Qr(r, i) {
    var c = this.__data__, f = $e(c, r);
    return f < 0 ? (++this.size, c.push([r, i])) : c[f][1] = i, this;
  }
  q.prototype.clear = Kr, q.prototype.delete = Xr, q.prototype.get = Zr, q.prototype.has = Yr, q.prototype.set = Qr;
  function se(r) {
    var i = -1, c = r == null ? 0 : r.length;
    for (this.clear(); ++i < c; ) {
      var f = r[i];
      this.set(f[0], f[1]);
    }
  }
  function Vr() {
    this.size = 0, this.__data__ = {
      hash: new ne(),
      map: new (ve || q)(),
      string: new ne()
    };
  }
  function en(r) {
    var i = Ie(this, r).delete(r);
    return this.size -= i ? 1 : 0, i;
  }
  function tn(r) {
    return Ie(this, r).get(r);
  }
  function rn(r) {
    return Ie(this, r).has(r);
  }
  function nn(r, i) {
    var c = Ie(this, r), f = c.size;
    return c.set(r, i), this.size += c.size == f ? 0 : 1, this;
  }
  se.prototype.clear = Vr, se.prototype.delete = en, se.prototype.get = tn, se.prototype.has = rn, se.prototype.set = nn;
  function Pe(r) {
    var i = -1, c = r == null ? 0 : r.length;
    for (this.__data__ = new se(); ++i < c; )
      this.add(r[i]);
  }
  function sn(r) {
    return this.__data__.set(r, s), this;
  }
  function on(r) {
    return this.__data__.has(r);
  }
  Pe.prototype.add = Pe.prototype.push = sn, Pe.prototype.has = on;
  function J(r) {
    var i = this.__data__ = new q(r);
    this.size = i.size;
  }
  function an() {
    this.__data__ = new q(), this.size = 0;
  }
  function cn(r) {
    var i = this.__data__, c = i.delete(r);
    return this.size = i.size, c;
  }
  function un(r) {
    return this.__data__.get(r);
  }
  function ln(r) {
    return this.__data__.has(r);
  }
  function fn(r, i) {
    var c = this.__data__;
    if (c instanceof q) {
      var f = c.__data__;
      if (!ve || f.length < n - 1)
        return f.push([r, i]), this.size = ++c.size, this;
      c = this.__data__ = new se(f);
    }
    return c.set(r, i), this.size = c.size, this;
  }
  J.prototype.clear = an, J.prototype.delete = cn, J.prototype.get = un, J.prototype.has = ln, J.prototype.set = fn;
  function hn(r, i) {
    var c = Ue(r), f = !c && Fn(r), _ = !c && !f && st(r), b = !c && !f && !_ && jt(r), x = c || f || _ || b, T = x ? xr(r.length, String) : [], F = T.length;
    for (var A in r)
      (i || D.call(r, A)) && !(x && // Safari 9 has enumerable `arguments.length` in strict mode.
      (A == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      _ && (A == "offset" || A == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      b && (A == "buffer" || A == "byteLength" || A == "byteOffset") || // Skip index properties.
      _n(A, F))) && T.push(A);
    return T;
  }
  function $e(r, i) {
    for (var c = r.length; c--; )
      if ($t(r[c][0], i))
        return c;
    return -1;
  }
  function dn(r, i, c) {
    var f = i(r);
    return Ue(r) ? f : Rr(f, c(r));
  }
  function Ce(r) {
    return r == null ? r === void 0 ? cr : be : re && re in Object(r) ? wn(r) : Tn(r);
  }
  function Ot(r) {
    return _e(r) && Ce(r) == g;
  }
  function St(r, i, c, f, _) {
    return r === i ? !0 : r == null || i == null || !_e(r) && !_e(i) ? r !== r && i !== i : pn(r, i, c, f, St, _);
  }
  function pn(r, i, c, f, _, b) {
    var x = Ue(r), T = Ue(i), F = x ? u : K(r), A = T ? u : K(i);
    F = F == g ? E : F, A = A == g ? E : A;
    var P = F == E, N = A == E, O = F == A;
    if (O && st(r)) {
      if (!st(i))
        return !1;
      x = !0, P = !1;
    }
    if (O && !P)
      return b || (b = new J()), x || jt(r) ? Mt(r, i, c, f, _, b) : bn(r, i, F, c, f, _, b);
    if (!(c & o)) {
      var $ = P && D.call(r, "__wrapped__"), I = N && D.call(i, "__wrapped__");
      if ($ || I) {
        var X = $ ? r.value() : r, H = I ? i.value() : i;
        return b || (b = new J()), _(X, H, c, f, b);
      }
    }
    return O ? (b || (b = new J()), vn(r, i, c, f, _, b)) : !1;
  }
  function gn(r) {
    if (!Nt(r) || An(r))
      return !1;
    var i = It(r) ? Ir : vr;
    return i.test(ie(r));
  }
  function yn(r) {
    return _e(r) && Ut(r.length) && !!C[Ce(r)];
  }
  function mn(r) {
    if (!xn(r))
      return jr(r);
    var i = [];
    for (var c in Object(r))
      D.call(r, c) && c != "constructor" && i.push(c);
    return i;
  }
  function Mt(r, i, c, f, _, b) {
    var x = c & o, T = r.length, F = i.length;
    if (T != F && !(x && F > T))
      return !1;
    var A = b.get(r);
    if (A && b.get(i))
      return A == i;
    var P = -1, N = !0, O = c & a ? new Pe() : void 0;
    for (b.set(r, i), b.set(i, r); ++P < T; ) {
      var $ = r[P], I = i[P];
      if (f)
        var X = x ? f(I, $, P, i, r, b) : f($, I, P, r, i, b);
      if (X !== void 0) {
        if (X)
          continue;
        N = !1;
        break;
      }
      if (O) {
        if (!Ar(i, function(H, oe) {
          if (!Fr(O, oe) && ($ === H || _($, H, c, f, b)))
            return O.push(oe);
        })) {
          N = !1;
          break;
        }
      } else if (!($ === I || _($, I, c, f, b))) {
        N = !1;
        break;
      }
    }
    return b.delete(r), b.delete(i), N;
  }
  function bn(r, i, c, f, _, b, x) {
    switch (c) {
      case Oe:
        if (r.byteLength != i.byteLength || r.byteOffset != i.byteOffset)
          return !1;
        r = r.buffer, i = i.buffer;
      case pt:
        return !(r.byteLength != i.byteLength || !b(new xt(r), new xt(i)));
      case h:
      case p:
      case B:
        return $t(+r, +i);
      case y:
        return r.name == i.name && r.message == i.message;
      case fe:
      case te:
        return r == i + "";
      case M:
        var T = Or;
      case z:
        var F = f & o;
        if (T || (T = Mr), r.size != i.size && !F)
          return !1;
        var A = x.get(r);
        if (A)
          return A == i;
        f |= a, x.set(r, i);
        var P = Mt(T(r), T(i), f, _, b, x);
        return x.delete(r), P;
      case Ee:
        if (nt)
          return nt.call(r) == nt.call(i);
    }
    return !1;
  }
  function vn(r, i, c, f, _, b) {
    var x = c & o, T = Pt(r), F = T.length, A = Pt(i), P = A.length;
    if (F != P && !x)
      return !1;
    for (var N = F; N--; ) {
      var O = T[N];
      if (!(x ? O in i : D.call(i, O)))
        return !1;
    }
    var $ = b.get(r);
    if ($ && b.get(i))
      return $ == i;
    var I = !0;
    b.set(r, i), b.set(i, r);
    for (var X = x; ++N < F; ) {
      O = T[N];
      var H = r[O], oe = i[O];
      if (f)
        var Lt = x ? f(oe, H, O, i, r, b) : f(H, oe, O, r, i, b);
      if (!(Lt === void 0 ? H === oe || _(H, oe, c, f, b) : Lt)) {
        I = !1;
        break;
      }
      X || (X = O == "constructor");
    }
    if (I && !X) {
      var Ne = r.constructor, je = i.constructor;
      Ne != je && "constructor" in r && "constructor" in i && !(typeof Ne == "function" && Ne instanceof Ne && typeof je == "function" && je instanceof je) && (I = !1);
    }
    return b.delete(r), b.delete(i), I;
  }
  function Pt(r) {
    return dn(r, Sn, Cn);
  }
  function Ie(r, i) {
    var c = r.__data__;
    return Rn(i) ? c[typeof i == "string" ? "string" : "hash"] : c.map;
  }
  function he(r, i) {
    var c = Er(r, i);
    return gn(c) ? c : void 0;
  }
  function wn(r) {
    var i = D.call(r, re), c = r[re];
    try {
      r[re] = void 0;
      var f = !0;
    } catch {
    }
    var _ = Rt.call(r);
    return f && (i ? r[re] = c : delete r[re]), _;
  }
  var Cn = Ft ? function(r) {
    return r == null ? [] : (r = Object(r), _r(Ft(r), function(i) {
      return Tt.call(r, i);
    }));
  } : Mn, K = Ce;
  (Ve && K(new Ve(new ArrayBuffer(1))) != Oe || ve && K(new ve()) != M || et && K(et.resolve()) != V || tt && K(new tt()) != z || rt && K(new rt()) != Ze) && (K = function(r) {
    var i = Ce(r), c = i == E ? r.constructor : void 0, f = c ? ie(c) : "";
    if (f)
      switch (f) {
        case Lr:
          return Oe;
        case Dr:
          return M;
        case kr:
          return V;
        case Br:
          return z;
        case zr:
          return Ze;
      }
    return i;
  });
  function _n(r, i) {
    return i = i ?? l, !!i && (typeof r == "number" || wr.test(r)) && r > -1 && r % 1 == 0 && r < i;
  }
  function Rn(r) {
    var i = typeof r;
    return i == "string" || i == "number" || i == "symbol" || i == "boolean" ? r !== "__proto__" : r === null;
  }
  function An(r) {
    return !!_t && _t in r;
  }
  function xn(r) {
    var i = r && r.constructor, c = typeof i == "function" && i.prototype || Se;
    return r === c;
  }
  function Tn(r) {
    return Rt.call(r);
  }
  function ie(r) {
    if (r != null) {
      try {
        return Ct.call(r);
      } catch {
      }
      try {
        return r + "";
      } catch {
      }
    }
    return "";
  }
  function $t(r, i) {
    return r === i || r !== r && i !== i;
  }
  var Fn = Ot(function() {
    return arguments;
  }()) ? Ot : function(r) {
    return _e(r) && D.call(r, "callee") && !Tt.call(r, "callee");
  }, Ue = Array.isArray;
  function En(r) {
    return r != null && Ut(r.length) && !It(r);
  }
  var st = Nr || Pn;
  function On(r, i) {
    return St(r, i);
  }
  function It(r) {
    if (!Nt(r))
      return !1;
    var i = Ce(r);
    return i == v || i == R || i == d || i == ee;
  }
  function Ut(r) {
    return typeof r == "number" && r > -1 && r % 1 == 0 && r <= l;
  }
  function Nt(r) {
    var i = typeof r;
    return r != null && (i == "object" || i == "function");
  }
  function _e(r) {
    return r != null && typeof r == "object";
  }
  var jt = wt ? Tr(wt) : yn;
  function Sn(r) {
    return En(r) ? hn(r) : mn(r);
  }
  function Mn() {
    return [];
  }
  function Pn() {
    return !1;
  }
  e.exports = On;
});
const { debug: m } = le, {
  headers: ke,
  getPath: ut,
  getQuery: ys,
  normalizeUrl: zt
} = Ke, Ae = (e) => (t) => (m("Actual url:", t), e(t)), Gt = {
  begin: (e) => Ae((t) => t.indexOf(e) === 0),
  end: (e) => Ae(
    (t) => t.substr(-e.length) === e
  ),
  glob: (e) => {
    const t = rs(e);
    return Ae((n) => t.test(n));
  },
  express: (e) => {
    const t = me(e);
    return Ae((n) => t.test(ut(n)));
  },
  path: (e) => Ae((t) => ut(t) === e)
}, ms = ({ headers: e }) => {
  if (m("Generating header matcher"), !e) {
    m("  No header expectations defined - skipping");
    return;
  }
  const t = ke.toLowerCase(e);
  return m("  Expected headers:", t), (n, { headers: s = {} }) => {
    m("Attempting to match headers");
    const o = ke.toLowerCase(
      ke.normalize(s)
    );
    return m("  Expected headers:", t), m("  Actual headers:", o), Object.keys(t).every(
      (a) => ke.equal(o[a], t[a])
    );
  };
}, bs = ({ method: e }) => {
  if (m("Generating method matcher"), !e) {
    m("  No method expectations defined - skipping");
    return;
  }
  return m("  Expected method:", e), (t, { method: n }) => {
    m("Attempting to match method");
    const s = n ? n.toLowerCase() : "get";
    return m("  Expected method:", e), m("  Actual method:", s), e === s;
  };
}, vs = ({ query: e }) => {
  if (m("Generating query parameters matcher"), !e) {
    m("  No query parameters expectations defined - skipping");
    return;
  }
  const t = ae.parse(ae.stringify(e));
  m("  Expected query parameters:", e);
  const n = Object.keys(t);
  return (s) => {
    m("Attempting to match query parameters");
    const o = ae.parse(ys(s));
    return m("  Expected query parameters:", t), m("  Actual query parameters:", o), n.every((a) => Array.isArray(o[a]) ? Array.isArray(t[a]) ? ir(o[a].sort(), t[a].sort()) : !1 : o[a] === t[a]);
  };
}, ws = ({ params: e, url: t }) => {
  if (m("Generating path parameters matcher"), !e) {
    m("  No path parameters expectations defined - skipping");
    return;
  }
  if (!/express:/.test(t))
    throw new Error(
      "fetch-mock: matching on params is only possible when using an express: matcher"
    );
  m("  Expected path parameters:", e);
  const n = Object.keys(e), s = [], o = me(t.replace(/^express:/, ""), s);
  return (a) => {
    m("Attempting to match path parameters");
    const l = o.exec(ut(a)) || [];
    l.shift();
    const g = s.reduce(
      (u, { name: d }, h) => l[h] ? Object.assign(u, { [d]: l[h] }) : u,
      {}
    );
    return m("  Expected path parameters:", e), m("  Actual path parameters:", g), n.every((u) => g[u] === e[u]);
  };
}, Cs = (e, t) => {
  const n = t.getOption("matchPartialBody", e), { body: s } = e;
  return m("Generating body matcher"), (o, { body: a, method: l = "get" }) => {
    if (m("Attempting to match body"), l.toLowerCase() === "get")
      return m("  GET request - skip matching body"), !0;
    let g;
    try {
      m("  Parsing request body as JSON"), g = JSON.parse(a);
    } catch (u) {
      m("  Failed to parse request body as JSON", u);
    }
    return m("Expected body:", s), m("Actual body:", g), n && m("matchPartialBody is true - checking for partial match only"), g && (n ? sr(g, s) : ir(g, s));
  };
}, qt = (e, t, n) => {
  m("  Matching using full url", t);
  const s = zt(t);
  return m("  Normalised url to:", t), e.identifier === t && (m("  Updating route identifier to match normalized url:", t), e.identifier = s), (o) => (m("Expected url:", s), m("Actual url:", o), n && s.indexOf("?") ? (m("Ignoring query string when matching url"), o.indexOf(s) === 0) : zt(o) === s);
}, _s = ({ functionMatcher: e }) => (m("Detected user defined function matcher", e), (...t) => (m("Calling function matcher with arguments", t), e(...t))), Rs = (e) => {
  m("Generating url matcher");
  const { url: t, query: n } = e;
  if (t === "*")
    return m("  Using universal * rule to match any url"), () => !0;
  if (t instanceof RegExp)
    return m("  Using regular expression to match url:", t), (s) => t.test(s);
  if (t.href)
    return m("  Using URL object to match url", t), qt(e, t.href, n);
  for (const s in Gt)
    if (t.indexOf(s + ":") === 0) {
      m(`  Using ${s}: pattern to match url`, t);
      const o = t.replace(new RegExp(`^${s}:`), "");
      return Gt[s](o);
    }
  return qt(e, t, n);
};
var As = [
  { name: "query", matcher: vs },
  { name: "method", matcher: bs },
  { name: "headers", matcher: ms },
  { name: "params", matcher: ws },
  { name: "body", matcher: Cs, usesBody: !0 },
  { name: "functionMatcher", matcher: _s },
  { name: "url", matcher: Rs }
];
const { debug: Ht, setDebugNamespace: Wt, getDebug: Be } = le, Jt = (e) => e instanceof RegExp || typeof e == "string" || typeof e == "object" && "href" in e, xs = (e) => typeof e == "function";
class ce {
  constructor(t, n) {
    this.fetchMock = n, Be("compileRoute()")("Compiling route"), this.init(t), this.sanitize(), this.validate(), this.generateMatcher(), this.limit(), this.delayResponse();
  }
  validate() {
    if (!("response" in this))
      throw new Error("fetch-mock: Each route must define a response");
    if (!ce.registeredMatchers.some(({ name: t }) => t in this))
      throw new Error(
        "fetch-mock: Each route must specify some criteria for matching calls to fetch. To match all calls use '*'"
      );
  }
  init(t) {
    const [n, s, o = {}] = t, a = {};
    Jt(n) || xs(n) ? a.matcher = n : Object.assign(a, n), typeof s < "u" && (a.response = s), Object.assign(a, o), Object.assign(this, a);
  }
  sanitize() {
    const t = Be("sanitize()");
    t("Sanitizing route properties"), this.method && (t(`Converting method ${this.method} to lower case`), this.method = this.method.toLowerCase()), Jt(this.matcher) && (t("Mock uses a url matcher", this.matcher), this.url = this.matcher, delete this.matcher), this.functionMatcher = this.matcher || this.functionMatcher, t("Setting route.identifier..."), t(`  route.name is ${this.name}`), t(`  route.url is ${this.url}`), t(`  route.functionMatcher is ${this.functionMatcher}`), this.identifier = this.name || this.url || this.functionMatcher, t(`  -> route.identifier set to ${this.identifier}`);
  }
  generateMatcher() {
    Wt("generateMatcher()"), Ht("Compiling matcher for route");
    const t = ce.registeredMatchers.map(
      ({ name: n, matcher: s, usesBody: o }) => this[n] && { matcher: s(this, this.fetchMock), usesBody: o }
    ).filter((n) => !!n);
    this.usesBody = t.some(({ usesBody: n }) => n), Ht("Compiled matcher for route"), Wt(), this.matcher = (n, s = {}, o) => t.every(({ matcher: a }) => a(n, s, o));
  }
  limit() {
    const t = Be("limit()");
    if (t("Limiting number of requests to handle by route"), !this.repeat) {
      t(
        "  No `repeat` value set on route. Will match any number of requests"
      );
      return;
    }
    t(`  Route set to repeat ${this.repeat} times`);
    const n = this.matcher;
    let s = this.repeat;
    this.matcher = (o, a) => {
      if (s && n(o, a))
        return s--, !0;
    }, this.reset = () => s = this.repeat;
  }
  delayResponse() {
    const t = Be("delayResponse()");
    if (t("Applying response delay settings"), this.delay) {
      t(`  Wrapping response in delay of ${this.delay} miliseconds`);
      const n = this.response;
      this.response = () => (t(`Delaying response by ${this.delay} miliseconds`), new Promise(
        (s) => setTimeout(() => s(n), this.delay)
      ));
    } else
      t(
        "  No delay set on route. Will respond 'immediately' (but asynchronously)"
      );
  }
  static addMatcher(t) {
    ce.registeredMatchers.push(t);
  }
}
ce.registeredMatchers = [];
As.forEach(ce.addMatcher);
var dt = ce;
const { setDebugPhase: He, setDebugNamespace: We, debug: w } = le, { normalizeUrl: or } = Ke, k = {}, Ts = (e) => typeof e == "string" && /^[\da-zA-Z\-]+$/.test(e), Fs = function(e, t = {}, n) {
  return { matcher: e } = new dt(
    [Object.assign({ matcher: e, response: "ok" }, t)],
    this
  ), n.filter(
    ({ url: s, options: o }) => e(or(s), o)
  );
}, Q = (e) => function(...t) {
  He("inspect");
  const n = e.call(this, ...t);
  return He(), n;
}, Es = (e) => {
  if (!e)
    return;
  const { url: t, options: n, request: s, identifier: o, isUnmatched: a, response: l } = e, g = [t, n];
  return g.request = s, g.identifier = o, g.isUnmatched = a, g.response = l, g;
};
k.filterCalls = function(e, t) {
  w("Filtering fetch calls");
  let n = this._calls, s = "*";
  return [!0, "matched"].includes(e) ? (w(`Filter provided is ${e}. Returning matched calls only`), n = n.filter(({ isUnmatched: o }) => !o)) : [!1, "unmatched"].includes(e) ? (w(
    `Filter provided is ${e}. Returning unmatched calls only`
  ), n = n.filter(({ isUnmatched: o }) => o)) : typeof e > "u" ? (w("Filter provided is undefined. Returning all calls"), n = n) : Ts(e) ? (w(
    "Filter provided, looks like the name of a named route. Returning only calls handled by that route"
  ), n = n.filter(({ identifier: o }) => o === e)) : (s = e === "*" ? "*" : or(e), this.routes.some(({ identifier: o }) => o === s) && (w(
    `Filter provided, ${e}, identifies a route. Returning only calls handled by that route`
  ), n = n.filter((o) => o.identifier === s))), (t || s !== "*") && n.length && (typeof t == "string" && (t = { method: t }), w(
    "Compiling filter and options to route in order to filter all calls",
    e
  ), n = Fs.call(this, s, t, n)), w(`Retrieved ${n.length} calls`), n.map(Es);
};
k.calls = Q(function(e, t) {
  return w("retrieving matching calls"), this.filterCalls(e, t);
});
k.lastCall = Q(function(e, t) {
  return w("retrieving last matching call"), [...this.filterCalls(e, t)].pop();
});
k.lastUrl = Q(function(e, t) {
  return w("retrieving url of last matching call"), (this.lastCall(e, t) || [])[0];
});
k.lastOptions = Q(function(e, t) {
  return w("retrieving options of last matching call"), (this.lastCall(e, t) || [])[1];
});
k.lastResponse = Q(function(e, t) {
  w("retrieving respose of last matching call"), console.warn(`When doing all the following:
- using node-fetch
- responding with a real network response (using spy() or fallbackToNetwork)
- using \`fetchMock.LastResponse()\`
- awaiting the body content
... the response will hang unless your source code also awaits the response body.
This is an unavoidable consequence of the nodejs implementation of streams.
`);
  const n = (this.lastCall(e, t) || []).response;
  try {
    return n.clone();
  } catch {
    return Object.entries(n._fmResults).forEach(([o, a]) => {
      n[o] = () => a;
    }), n;
  }
});
k.called = Q(function(e, t) {
  return w("checking if matching call was made"), !!this.filterCalls(e, t).length;
});
k.flush = Q(async function(e) {
  We("flush"), w(
    `flushing all fetch calls. ${e ? "" : "Not "}waiting for response bodies to complete download`
  );
  const t = this._holdingPromises;
  this._holdingPromises = [], w(`${t.length} fetch calls to be awaited`), await Promise.all(t), w("All fetch calls have completed"), e && this._holdingPromises.length && (w("Awaiting all fetch bodies to download"), await this.flush(e), w("All fetch bodies have completed downloading")), We();
});
k.done = Q(function(e) {
  He("inspect"), We("done"), w("Checking to see if expected calls have been made");
  let t;
  e && typeof e != "boolean" ? (w(
    "Checking to see if expected calls have been made for single route:",
    e
  ), t = [{ identifier: e }]) : (w("Checking to see if expected calls have been made for all routes"), t = this.routes);
  const n = t.map(({ identifier: s }) => {
    if (!this.called(s))
      return w("No calls made for route:", s), console.warn(`Warning: ${s} not called`), !1;
    const o = (this.routes.find((l) => l.identifier === s) || {}).repeat;
    if (!o)
      return w(
        "Route has been called at least once, and no expectation of more set:",
        s
      ), !0;
    const a = this.filterCalls(s).length;
    return w(`Route called ${a} times:`, s), o > a ? (w(
      `Route called ${a} times, but expected ${o}:`,
      s
    ), console.warn(
      `Warning: ${s} only called ${a} times, but ${o} expected`
    ), !1) : !0;
  }).every((s) => s);
  return We(), He(), n;
});
var Os = k;
const { debug: ar } = le, S = Object.assign({}, ts, Wn, Os);
S.addMatcher = function(e) {
  dt.addMatcher(e);
};
S.config = {
  fallbackToNetwork: !1,
  includeContentLength: !0,
  sendAsJson: !0,
  warnOnFallback: !0,
  overwriteRoutes: void 0
};
S.createInstance = function() {
  ar("Creating fetch-mock instance");
  const e = Object.create(S);
  return e._uncompiledRoutes = (this._uncompiledRoutes || []).slice(), e.routes = e._uncompiledRoutes.map(
    (t) => this.compileRoute(t)
  ), e.fallbackResponse = this.fallbackResponse || void 0, e.config = Object.assign({}, this.config || S.config), e._calls = [], e._holdingPromises = [], e.bindMethods(), e;
};
S.compileRoute = function(e) {
  return new dt(e, this);
};
S.bindMethods = function() {
  this.fetchHandler = S.fetchHandler.bind(this), this.reset = this.restore = S.reset.bind(this), this.resetHistory = S.resetHistory.bind(this), this.resetBehavior = S.resetBehavior.bind(this);
};
S.sandbox = function() {
  ar("Creating sandboxed fetch-mock instance");
  const t = Object.assign(
    (n, s) => t.fetchHandler(n, s),
    // Ensures that the entire returned object is a callable function
    S,
    // prototype methods
    this.createInstance(),
    // instance data
    {
      Headers: this.config.Headers,
      Request: this.config.Request,
      Response: this.config.Response
    }
  );
  return t.bindMethods(), t.isSandbox = !0, t.default = t, t;
};
S.getOption = function(e, t = {}) {
  return e in t ? t[e] : this.config[e];
};
var Fe = S;
const Ss = {
  100: "Continue",
  101: "Switching Protocols",
  102: "Processing",
  200: "OK",
  201: "Created",
  202: "Accepted",
  203: "Non-Authoritative Information",
  204: "No Content",
  205: "Reset Content",
  206: "Partial Content",
  207: "Multi-Status",
  208: "Already Reported",
  226: "IM Used",
  300: "Multiple Choices",
  301: "Moved Permanently",
  302: "Found",
  303: "See Other",
  304: "Not Modified",
  305: "Use Proxy",
  307: "Temporary Redirect",
  308: "Permanent Redirect",
  400: "Bad Request",
  401: "Unauthorized",
  402: "Payment Required",
  403: "Forbidden",
  404: "Not Found",
  405: "Method Not Allowed",
  406: "Not Acceptable",
  407: "Proxy Authentication Required",
  408: "Request Timeout",
  409: "Conflict",
  410: "Gone",
  411: "Length Required",
  412: "Precondition Failed",
  413: "Payload Too Large",
  414: "URI Too Long",
  415: "Unsupported Media Type",
  416: "Range Not Satisfiable",
  417: "Expectation Failed",
  418: "I'm a teapot",
  421: "Misdirected Request",
  422: "Unprocessable Entity",
  423: "Locked",
  424: "Failed Dependency",
  425: "Unordered Collection",
  426: "Upgrade Required",
  428: "Precondition Required",
  429: "Too Many Requests",
  431: "Request Header Fields Too Large",
  451: "Unavailable For Legal Reasons",
  500: "Internal Server Error",
  501: "Not Implemented",
  502: "Bad Gateway",
  503: "Service Unavailable",
  504: "Gateway Timeout",
  505: "HTTP Version Not Supported",
  506: "Variant Also Negotiates",
  507: "Insufficient Storage",
  508: "Loop Detected",
  509: "Bandwidth Limit Exceeded",
  510: "Not Extended",
  511: "Network Authentication Required"
};
var Ms = Ss;
const de = typeof window < "u" ? window : self, { setUrlImplementation: Ps } = Ke;
Ps(de.URL);
Fe.global = de;
Fe.statusTextMap = Ms;
Fe.config = Object.assign(Fe.config, {
  Promise: de.Promise,
  Request: de.Request,
  Response: de.Response,
  Headers: de.Headers
});
var W = Fe.createInstance(), $s = "fetchMock";
function lt(e) {
  "@babel/helpers - typeof";
  return lt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, lt(e);
}
function Is(e) {
  return Ls(e) || js(e) || Ns(e) || Us();
}
function Us() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ns(e, t) {
  if (e) {
    if (typeof e == "string")
      return ft(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return ft(e, t);
  }
}
function js(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Ls(e) {
  if (Array.isArray(e))
    return ft(e);
}
function ft(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, s = new Array(t); n < t; n++)
    s[n] = e[n];
  return s;
}
const { makeDecorator: Ds } = __STORYBOOK_MODULE_ADDONS__;
function Kt(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "mocks";
  Array.isArray(e) ? e.forEach(function(n) {
    if (Array.isArray(n)) {
      W.mock.apply(W, Is(n));
      return;
    }
    var s = n, o = s.matcher, a = s.response, l = s.options;
    o && W.mock(o, a, l);
  }) : e && console.warn("fetchMock.".concat(t, " should be an array; ").concat(lt(e), " given."));
}
var ks = Ds({
  name: "withFetchMock",
  parameterName: $s,
  // TODO: If a story doesn't have any fetchMock parameters, we still need to
  //   reset fetch-mock.
  skipIfNoParametersOrOptions: !1,
  wrapper: function(t, n, s) {
    var o = s.parameters;
    if (W.called() && o && o.debug) {
      var a = {};
      W.calls().forEach(function(l) {
        a[l.identifier] = l;
      }), console.log({
        "fetch-mock matched these mocks": a
      });
    }
    return W.reset(), W.config.fallbackToNetwork = !0, Kt(o.mocks), typeof o.useFetchMock == "function" && o.useFetchMock(W), Kt(o.catchAllMocks, "catchAllMocks"), Array.isArray(o.catchAllURLs) && o.catchAllURLs.forEach(function(l) {
      W.mock(
        {
          // Add descriptive name for debugging.
          name: "catchAllURLs[ ".concat(l, " ]"),
          url: "begin:".concat(l)
        },
        // Catch-all mocks will respond with 404 to make it easy to determine
        // one of the catch-all mocks was used.
        404
      );
    }), t(n);
  }
}), zs = [ks];
export {
  zs as decorators
};
