var je = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Pn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function We(e, t) {
  return t = { exports: {} }, e(t, t.exports), t.exports;
}
var pe = 1e3, ge = pe * 60, ye = ge * 60, ue = ye * 24, $n = ue * 7, In = ue * 365.25, Un = function(e, t) {
  t = t || {};
  var n = typeof e;
  if (n === "string" && e.length > 0)
    return Nn(e);
  if (n === "number" && isFinite(e))
    return t.long ? Ln(e) : jn(e);
  throw new Error(
    "val is not a non-empty string or a valid number. val=" + JSON.stringify(e)
  );
};
function Nn(e) {
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
          return n * In;
        case "weeks":
        case "week":
        case "w":
          return n * $n;
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
function jn(e) {
  var t = Math.abs(e);
  return t >= ue ? Math.round(e / ue) + "d" : t >= ye ? Math.round(e / ye) + "h" : t >= ge ? Math.round(e / ge) + "m" : t >= pe ? Math.round(e / pe) + "s" : e + "ms";
}
function Ln(e) {
  var t = Math.abs(e);
  return t >= ue ? Le(e, t, ue, "day") : t >= ye ? Le(e, t, ye, "hour") : t >= ge ? Le(e, t, ge, "minute") : t >= pe ? Le(e, t, pe, "second") : e + " ms";
}
function Le(e, t, n, s) {
  var o = t >= n * 1.5;
  return Math.round(e / n) + " " + s + (o ? "s" : "");
}
function Dn(e) {
  n.debug = n, n.default = n, n.coerce = u, n.disable = a, n.enable = o, n.enabled = l, n.humanize = Un, n.destroy = d, Object.keys(e).forEach((h) => {
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
var kn = Dn, j = We(function(e, t) {
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
    return !u && typeof process < "u" && "env" in process && (u = process.env.DEBUG), u;
  }
  function l() {
    try {
      return localStorage;
    } catch {
    }
  }
  e.exports = kn(t);
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
let Kt, Be = "default", it = "";
const ot = () => {
  Kt = j(it ? `fetch-mock:${Be}:${it}` : `fetch-mock:${Be}`);
}, Bn = (e) => j(`fetch-mock:${Be}:${e}`);
ot();
var le = {
  debug: (...e) => {
    Kt(...e);
  },
  setDebugNamespace: (e) => {
    it = e, ot();
  },
  setDebugPhase: (e) => {
    Be = e || "default", ot();
  },
  getDebug: (e) => Bn(e)
};
const { debug: zn, setDebugPhase: Xt } = le, U = {};
U.mock = function(...e) {
  return Xt("setup"), e.length && this.addRoute(e), this._mock();
};
U.addRoute = function(e) {
  zn("Adding route", e);
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
  return this.isSandbox || (this.realFetch = this.realFetch || this.global.fetch, this.global.fetch = this.fetchHandler), Xt(), this;
};
U.catch = function(e) {
  return this.fallbackResponse && console.warn(
    "calling fetchMock.catch() twice - are you sure you want to overwrite the previous fallback response"
  ), this.fallbackResponse = e || "ok", this._mock();
};
U.spy = function(e) {
  return this._mock(), e ? this.mock(e, this.getNativeFetch()) : this.catch(this.getNativeFetch());
};
const ze = (e, t, n) => {
  U[e] = function(s, o, a) {
    return this[t](
      s,
      o,
      Object.assign(a || {}, n)
    );
  };
}, Ge = (e, t) => {
  U[e] = function(n, s) {
    return this[t]({}, n, s);
  };
};
ze("sticky", "mock", { sticky: !0 });
ze("once", "mock", { repeat: 1 });
Ge("any", "mock");
Ge("anyOnce", "once");
["get", "post", "put", "delete", "head", "patch"].forEach((e) => {
  ze(e, "mock", { method: e }), ze(`${e}Once`, "once", { method: e }), Ge(`${e}Any`, e), Ge(`${e}AnyOnce`, `${e}Once`);
});
const Gn = (e) => {
  typeof e == "function" && (console.warn("Deprecated: Passing fetch-mock reset methods\ndirectly in as handlers for before/after test runner hooks.\nWrap in an arrow function instead e.g. `() => fetchMock.restore()`"), e());
}, qn = ({ sticky: e }) => (t) => e ? [] : t.filter(({ sticky: n }) => n);
U.resetBehavior = function(e = {}) {
  Gn(e);
  const t = qn(e);
  return this.routes = t(this.routes), this._uncompiledRoutes = t(this._uncompiledRoutes), this.realFetch && !this.routes.length && (this.global.fetch = this.realFetch, this.realFetch = void 0), this.fallbackResponse = void 0, this;
};
U.resetHistory = function() {
  return this._calls = [], this._holdingPromises = [], this.routes.forEach((e) => e.reset && e.reset()), this;
};
U.restore = U.reset = function(e) {
  return this.resetBehavior(e), this.resetHistory(), this;
};
var Hn = U;
const { getDebug: Wn } = le, Lt = [
  "body",
  "headers",
  "throws",
  "status",
  "redirectUrl"
];
class Jn {
  constructor(t) {
    this.debug = Wn("ResponseBuilder()"), this.debug("Response builder created with options", t), Object.assign(this, t);
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
    return Lt.some((t) => this.responseConfig[t]) ? !Object.keys(this.responseConfig).every(
      (t) => Lt.includes(t)
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
var Kn = (e) => new Jn(e).exec();
let Y;
const at = new RegExp("^[a-z]+://", "i"), Xn = new RegExp("^//", "i"), Dt = (e) => typeof e.raw == "function" ? Object.entries(e.raw()) : e[Symbol.iterator] ? [...e] : Object.entries(e), kt = (e) => e.reduce((t, [n, s]) => Object.assign(t, { [n]: s }), {}), st = (e) => {
  if (typeof e == "function" || e instanceof RegExp || /^(begin|end|glob|express|path)\:/.test(e))
    return e;
  if (at.test(e))
    return new Y(e).href;
  if (Xn.test(e))
    return new Y(e, "http://dummy").href;
  {
    const t = new Y(e, "http://dummy");
    return t.pathname + t.search;
  }
}, Zn = async (e) => {
  try {
    return "body" in e ? e.body.toString() : e.clone().text();
  } catch {
  }
};
var Je = {
  setUrlImplementation: (e) => {
    Y = e;
  },
  normalizeRequest: (e, t, n) => {
    if (n.prototype.isPrototypeOf(e)) {
      const s = {
        method: e.method
      }, o = Zn(e);
      typeof o < "u" && (s.body = o);
      const a = {
        url: st(e.url),
        options: Object.assign(s, t),
        request: e,
        signal: t && t.signal || e.signal
      }, l = Dt(e.headers);
      return l.length && (a.options.headers = kt(l)), a;
    } else {
      if (typeof e == "string" || // horrible URL object duck-typing
      typeof e == "object" && "href" in e)
        return {
          url: st(e),
          options: t,
          signal: t && t.signal
        };
      throw typeof e == "object" ? new TypeError(
        "fetch-mock: Unrecognised Request object. Read the Config and Installation sections of the docs"
      ) : new TypeError("fetch-mock: Invalid arguments passed to fetch");
    }
  },
  normalizeUrl: st,
  getPath: (e) => (at.test(e) ? new Y(e) : new Y(e, "http://dummy")).pathname,
  getQuery: (e) => {
    const t = at.test(e) ? new Y(e) : new Y(e, "http://dummy");
    return t.search ? t.search.substr(1) : "";
  },
  headers: {
    normalize: (e) => kt(Dt(e)),
    toLowerCase: (e) => Object.keys(e).reduce((t, n) => (t[n.toLowerCase()] = e[n], t), {}),
    equal: (e, t) => (e = Array.isArray(e) ? e : [e], t = Array.isArray(t) ? t : [t], e.length !== t.length ? !1 : e.every((n, s) => n === t[s]))
  }
};
const { debug: xe, setDebugPhase: Zt, getDebug: Ke } = le, L = {};
class Yn extends Error {
  constructor() {
    super(...arguments), this.name = "AbortError", this.message = "The operation was aborted.", Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
  }
}
const Qn = (e) => typeof navigator > "u" || !navigator.vendor || navigator.vendor !== "Apple Computer, Inc." ? e : async (t) => {
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
}, Vn = async ({ response: e, responseIsFetch: t = !1 }, n, s, o) => {
  const a = Ke("resolve()");
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
  Zt("handle");
  const n = Ke("fetchHandler()");
  n("fetch called with:", e, t);
  const s = Je.normalizeRequest(
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
      xe("signal exists - enabling fetch abort");
      const d = () => {
        xe("aborting fetch"), u(
          typeof DOMException < "u" ? new DOMException("The operation was aborted.", "AbortError") : new Yn()
        ), l();
      };
      s.aborted && (xe("signal is already aborted - aborting the fetch"), d()), s.addEventListener("abort", d);
    }
    this.generateResponse({ route: o, url: e, options: t, request: n, callLog: a }).then(g, u).then(l, l).then(() => {
      Zt();
    });
  });
};
L.fetchHandler.isMock = !0;
L.executeRouter = function(e, t, n) {
  const s = Ke("executeRouter()"), o = { url: e, options: t, request: n, isUnmatched: !0 };
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
  const a = Ke("generateResponse()"), l = await Vn(e, t, n, s);
  if (l.throws && typeof l != "function")
    throw a("response.throws is defined - throwing an error"), l.throws;
  if (this.config.Response.prototype.isPrototypeOf(l))
    return a("response is already a Response instance - returning it"), o.response = l, l;
  const [g, u] = Kn({
    url: t,
    responseConfig: l,
    fetchMock: this,
    route: e
  });
  return o.response = g, u;
};
L.router = function(e, t, n) {
  const s = this.routes.find((o, a) => (xe(`Trying to match route ${a}`), o.matcher(e, t, n)));
  if (s)
    return s;
};
L.getNativeFetch = function() {
  const e = this.realFetch || this.isSandbox && this.config.fetch;
  if (!e)
    throw new Error(
      "fetch-mock: Falling back to network only available on global fetch-mock, or by setting config.fetch on sandboxed fetch-mock"
    );
  return Qn(e);
};
L.recordCall = function(e) {
  xe("Recording fetch call", e), e && this._calls.push(e);
};
var es = L, ts = function(e, t) {
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
}, me = rr, rs = ft, ns = as, ss = Vt, is = tr, Yt = "/", Qt = "./", os = new RegExp([
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
function ft(e, t) {
  for (var n = [], s = 0, o = 0, a = "", l = t && t.delimiter || Yt, g = t && t.delimiters || Qt, u = !1, d; (d = os.exec(e)) !== null; ) {
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
    var ee = v !== "" && R !== void 0 && R !== v, fe = E === "+" || E === "*", z = E === "?" || E === "*", te = v || l, Fe = B || be;
    n.push({
      name: M || s++,
      prefix: v,
      delimiter: te,
      optional: z,
      repeat: fe,
      partial: ee,
      pattern: Fe ? cs(Fe) : "[^" + Z(te) + "]+?"
    });
  }
  return (a || o < e.length) && n.push(a + e.substr(o)), n;
}
function as(e, t) {
  return Vt(ft(e, t));
}
function Vt(e) {
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
function cs(e) {
  return e.replace(/([=!:$/()])/g, "\\$1");
}
function er(e) {
  return e && e.sensitive ? "" : "i";
}
function us(e, t) {
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
function ls(e, t, n) {
  for (var s = [], o = 0; o < e.length; o++)
    s.push(rr(e[o], t, n).source);
  return new RegExp("(?:" + s.join("|") + ")", er(n));
}
function fs(e, t, n) {
  return tr(ft(e, n), t, n);
}
function tr(e, t, n) {
  n = n || {};
  for (var s = n.strict, o = n.start !== !1, a = n.end !== !1, l = Z(n.delimiter || Yt), g = n.delimiters || Qt, u = [].concat(n.endsWith || []).map(Z).concat("$").join("|"), d = o ? "^" : "", h = e.length === 0, p = 0; p < e.length; p++) {
    var y = e[p];
    if (typeof y == "string")
      d += Z(y), h = p === e.length - 1 && g.indexOf(y[y.length - 1]) > -1;
    else {
      var v = y.repeat ? "(?:" + y.pattern + ")(?:" + Z(y.delimiter) + "(?:" + y.pattern + "))*" : y.pattern;
      t && t.push(y), y.optional ? y.partial ? d += Z(y.prefix) + "(" + v + ")?" : d += "(?:" + Z(y.prefix) + "(" + v + "))?" : d += Z(y.prefix) + "(" + v + ")";
    }
  }
  return a ? (s || (d += "(?:" + l + ")?"), d += u === "$" ? "$" : "(?=" + u + ")") : (s || (d += "(?:" + l + "(?=" + u + "))?"), h || (d += "(?=" + l + "|" + u + ")")), new RegExp(d, er(n));
}
function rr(e, t, n) {
  return e instanceof RegExp ? us(e, t) : Array.isArray(e) ? ls(
    /** @type {!Array} */
    e,
    t,
    n
  ) : fs(
    /** @type {string} */
    e,
    t,
    n
  );
}
me.parse = rs;
me.compile = ns;
me.tokensToFunction = ss;
me.tokensToRegExp = is;
function hs(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
var ds = function(e, t, n, s) {
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
    h >= 0 ? (p = d.substr(0, h), y = d.substr(h + 1)) : (p = d, y = ""), v = decodeURIComponent(p), R = decodeURIComponent(y), hs(o, v) ? Array.isArray(o[v]) ? o[v].push(R) : o[v] = [o[v], R] : o[v] = R;
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
}, ps = function(e, t, n, s) {
  return t = t || "&", n = n || "=", e === null && (e = void 0), typeof e == "object" ? Object.keys(e).map(function(o) {
    var a = encodeURIComponent(Re(o)) + n;
    return Array.isArray(e[o]) ? e[o].map(function(l) {
      return a + encodeURIComponent(Re(l));
    }).join(t) : a + encodeURIComponent(Re(e[o]));
  }).join(t) : s ? encodeURIComponent(Re(s)) + n + encodeURIComponent(Re(e)) : "";
}, ae = We(function(e, t) {
  t.decode = t.parse = ds, t.encode = t.stringify = ps;
});
ae.decode;
ae.parse;
ae.encode;
ae.stringify;
var nr = We(function(e, t) {
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
Pn(nr);
var sr = We(function(e, t) {
  var n = 200, s = "__lodash_hash_undefined__", o = 1, a = 2, l = 9007199254740991, g = "[object Arguments]", u = "[object Array]", d = "[object AsyncFunction]", h = "[object Boolean]", p = "[object Date]", y = "[object Error]", v = "[object Function]", R = "[object GeneratorFunction]", M = "[object Map]", B = "[object Number]", be = "[object Null]", E = "[object Object]", V = "[object Promise]", ee = "[object Proxy]", fe = "[object RegExp]", z = "[object Set]", te = "[object String]", Fe = "[object Symbol]", ar = "[object Undefined]", Xe = "[object WeakMap]", dt = "[object ArrayBuffer]", Ee = "[object DataView]", cr = "[object Float32Array]", ur = "[object Float64Array]", lr = "[object Int8Array]", fr = "[object Int16Array]", hr = "[object Int32Array]", dr = "[object Uint8Array]", pr = "[object Uint8ClampedArray]", gr = "[object Uint16Array]", yr = "[object Uint32Array]", mr = /[\\^$.*+?()[\]{}|]/g, br = /^\[object .+?Constructor\]$/, vr = /^(?:0|[1-9]\d*)$/, C = {};
  C[cr] = C[ur] = C[lr] = C[fr] = C[hr] = C[dr] = C[pr] = C[gr] = C[yr] = !0, C[g] = C[u] = C[dt] = C[h] = C[Ee] = C[p] = C[y] = C[v] = C[M] = C[B] = C[E] = C[fe] = C[z] = C[te] = C[Xe] = !1;
  var pt = typeof je == "object" && je && je.Object === Object && je, wr = typeof self == "object" && self && self.Object === Object && self, G = pt || wr || Function("return this")(), gt = t && !t.nodeType && t, yt = gt && !0 && e && !e.nodeType && e, mt = yt && yt.exports === gt, Ze = mt && pt.process, bt = function() {
    try {
      return Ze && Ze.binding && Ze.binding("util");
    } catch {
    }
  }(), vt = bt && bt.isTypedArray;
  function Cr(r, i) {
    for (var c = -1, f = r == null ? 0 : r.length, _ = 0, b = []; ++c < f; ) {
      var x = r[c];
      i(x, c, r) && (b[_++] = x);
    }
    return b;
  }
  function _r(r, i) {
    for (var c = -1, f = i.length, _ = r.length; ++c < f; )
      r[_ + c] = i[c];
    return r;
  }
  function Rr(r, i) {
    for (var c = -1, f = r == null ? 0 : r.length; ++c < f; )
      if (i(r[c], c, r))
        return !0;
    return !1;
  }
  function Ar(r, i) {
    for (var c = -1, f = Array(r); ++c < r; )
      f[c] = i(c);
    return f;
  }
  function xr(r) {
    return function(i) {
      return r(i);
    };
  }
  function Tr(r, i) {
    return r.has(i);
  }
  function Fr(r, i) {
    return r == null ? void 0 : r[i];
  }
  function Er(r) {
    var i = -1, c = Array(r.size);
    return r.forEach(function(f, _) {
      c[++i] = [_, f];
    }), c;
  }
  function Or(r, i) {
    return function(c) {
      return r(i(c));
    };
  }
  function Sr(r) {
    var i = -1, c = Array(r.size);
    return r.forEach(function(f) {
      c[++i] = f;
    }), c;
  }
  var Mr = Array.prototype, Pr = Function.prototype, Oe = Object.prototype, Ye = G["__core-js_shared__"], wt = Pr.toString, D = Oe.hasOwnProperty, Ct = function() {
    var r = /[^.]+$/.exec(Ye && Ye.keys && Ye.keys.IE_PROTO || "");
    return r ? "Symbol(src)_1." + r : "";
  }(), _t = Oe.toString, $r = RegExp(
    "^" + wt.call(D).replace(mr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), Rt = mt ? G.Buffer : void 0, Se = G.Symbol, At = G.Uint8Array, xt = Oe.propertyIsEnumerable, Ir = Mr.splice, re = Se ? Se.toStringTag : void 0, Tt = Object.getOwnPropertySymbols, Ur = Rt ? Rt.isBuffer : void 0, Nr = Or(Object.keys, Object), Qe = he(G, "DataView"), ve = he(G, "Map"), Ve = he(G, "Promise"), et = he(G, "Set"), tt = he(G, "WeakMap"), we = he(Object, "create"), jr = ie(Qe), Lr = ie(ve), Dr = ie(Ve), kr = ie(et), Br = ie(tt), Ft = Se ? Se.prototype : void 0, rt = Ft ? Ft.valueOf : void 0;
  function ne(r) {
    var i = -1, c = r == null ? 0 : r.length;
    for (this.clear(); ++i < c; ) {
      var f = r[i];
      this.set(f[0], f[1]);
    }
  }
  function zr() {
    this.__data__ = we ? we(null) : {}, this.size = 0;
  }
  function Gr(r) {
    var i = this.has(r) && delete this.__data__[r];
    return this.size -= i ? 1 : 0, i;
  }
  function qr(r) {
    var i = this.__data__;
    if (we) {
      var c = i[r];
      return c === s ? void 0 : c;
    }
    return D.call(i, r) ? i[r] : void 0;
  }
  function Hr(r) {
    var i = this.__data__;
    return we ? i[r] !== void 0 : D.call(i, r);
  }
  function Wr(r, i) {
    var c = this.__data__;
    return this.size += this.has(r) ? 0 : 1, c[r] = we && i === void 0 ? s : i, this;
  }
  ne.prototype.clear = zr, ne.prototype.delete = Gr, ne.prototype.get = qr, ne.prototype.has = Hr, ne.prototype.set = Wr;
  function q(r) {
    var i = -1, c = r == null ? 0 : r.length;
    for (this.clear(); ++i < c; ) {
      var f = r[i];
      this.set(f[0], f[1]);
    }
  }
  function Jr() {
    this.__data__ = [], this.size = 0;
  }
  function Kr(r) {
    var i = this.__data__, c = Pe(i, r);
    if (c < 0)
      return !1;
    var f = i.length - 1;
    return c == f ? i.pop() : Ir.call(i, c, 1), --this.size, !0;
  }
  function Xr(r) {
    var i = this.__data__, c = Pe(i, r);
    return c < 0 ? void 0 : i[c][1];
  }
  function Zr(r) {
    return Pe(this.__data__, r) > -1;
  }
  function Yr(r, i) {
    var c = this.__data__, f = Pe(c, r);
    return f < 0 ? (++this.size, c.push([r, i])) : c[f][1] = i, this;
  }
  q.prototype.clear = Jr, q.prototype.delete = Kr, q.prototype.get = Xr, q.prototype.has = Zr, q.prototype.set = Yr;
  function se(r) {
    var i = -1, c = r == null ? 0 : r.length;
    for (this.clear(); ++i < c; ) {
      var f = r[i];
      this.set(f[0], f[1]);
    }
  }
  function Qr() {
    this.size = 0, this.__data__ = {
      hash: new ne(),
      map: new (ve || q)(),
      string: new ne()
    };
  }
  function Vr(r) {
    var i = $e(this, r).delete(r);
    return this.size -= i ? 1 : 0, i;
  }
  function en(r) {
    return $e(this, r).get(r);
  }
  function tn(r) {
    return $e(this, r).has(r);
  }
  function rn(r, i) {
    var c = $e(this, r), f = c.size;
    return c.set(r, i), this.size += c.size == f ? 0 : 1, this;
  }
  se.prototype.clear = Qr, se.prototype.delete = Vr, se.prototype.get = en, se.prototype.has = tn, se.prototype.set = rn;
  function Me(r) {
    var i = -1, c = r == null ? 0 : r.length;
    for (this.__data__ = new se(); ++i < c; )
      this.add(r[i]);
  }
  function nn(r) {
    return this.__data__.set(r, s), this;
  }
  function sn(r) {
    return this.__data__.has(r);
  }
  Me.prototype.add = Me.prototype.push = nn, Me.prototype.has = sn;
  function J(r) {
    var i = this.__data__ = new q(r);
    this.size = i.size;
  }
  function on() {
    this.__data__ = new q(), this.size = 0;
  }
  function an(r) {
    var i = this.__data__, c = i.delete(r);
    return this.size = i.size, c;
  }
  function cn(r) {
    return this.__data__.get(r);
  }
  function un(r) {
    return this.__data__.has(r);
  }
  function ln(r, i) {
    var c = this.__data__;
    if (c instanceof q) {
      var f = c.__data__;
      if (!ve || f.length < n - 1)
        return f.push([r, i]), this.size = ++c.size, this;
      c = this.__data__ = new se(f);
    }
    return c.set(r, i), this.size = c.size, this;
  }
  J.prototype.clear = on, J.prototype.delete = an, J.prototype.get = cn, J.prototype.has = un, J.prototype.set = ln;
  function fn(r, i) {
    var c = Ie(r), f = !c && Tn(r), _ = !c && !f && nt(r), b = !c && !f && !_ && Nt(r), x = c || f || _ || b, T = x ? Ar(r.length, String) : [], F = T.length;
    for (var A in r)
      (i || D.call(r, A)) && !(x && // Safari 9 has enumerable `arguments.length` in strict mode.
      (A == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      _ && (A == "offset" || A == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      b && (A == "buffer" || A == "byteLength" || A == "byteOffset") || // Skip index properties.
      Cn(A, F))) && T.push(A);
    return T;
  }
  function Pe(r, i) {
    for (var c = r.length; c--; )
      if (Pt(r[c][0], i))
        return c;
    return -1;
  }
  function hn(r, i, c) {
    var f = i(r);
    return Ie(r) ? f : _r(f, c(r));
  }
  function Ce(r) {
    return r == null ? r === void 0 ? ar : be : re && re in Object(r) ? vn(r) : xn(r);
  }
  function Et(r) {
    return _e(r) && Ce(r) == g;
  }
  function Ot(r, i, c, f, _) {
    return r === i ? !0 : r == null || i == null || !_e(r) && !_e(i) ? r !== r && i !== i : dn(r, i, c, f, Ot, _);
  }
  function dn(r, i, c, f, _, b) {
    var x = Ie(r), T = Ie(i), F = x ? u : K(r), A = T ? u : K(i);
    F = F == g ? E : F, A = A == g ? E : A;
    var P = F == E, N = A == E, O = F == A;
    if (O && nt(r)) {
      if (!nt(i))
        return !1;
      x = !0, P = !1;
    }
    if (O && !P)
      return b || (b = new J()), x || Nt(r) ? St(r, i, c, f, _, b) : mn(r, i, F, c, f, _, b);
    if (!(c & o)) {
      var $ = P && D.call(r, "__wrapped__"), I = N && D.call(i, "__wrapped__");
      if ($ || I) {
        var X = $ ? r.value() : r, H = I ? i.value() : i;
        return b || (b = new J()), _(X, H, c, f, b);
      }
    }
    return O ? (b || (b = new J()), bn(r, i, c, f, _, b)) : !1;
  }
  function pn(r) {
    if (!Ut(r) || Rn(r))
      return !1;
    var i = $t(r) ? $r : br;
    return i.test(ie(r));
  }
  function gn(r) {
    return _e(r) && It(r.length) && !!C[Ce(r)];
  }
  function yn(r) {
    if (!An(r))
      return Nr(r);
    var i = [];
    for (var c in Object(r))
      D.call(r, c) && c != "constructor" && i.push(c);
    return i;
  }
  function St(r, i, c, f, _, b) {
    var x = c & o, T = r.length, F = i.length;
    if (T != F && !(x && F > T))
      return !1;
    var A = b.get(r);
    if (A && b.get(i))
      return A == i;
    var P = -1, N = !0, O = c & a ? new Me() : void 0;
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
        if (!Rr(i, function(H, oe) {
          if (!Tr(O, oe) && ($ === H || _($, H, c, f, b)))
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
  function mn(r, i, c, f, _, b, x) {
    switch (c) {
      case Ee:
        if (r.byteLength != i.byteLength || r.byteOffset != i.byteOffset)
          return !1;
        r = r.buffer, i = i.buffer;
      case dt:
        return !(r.byteLength != i.byteLength || !b(new At(r), new At(i)));
      case h:
      case p:
      case B:
        return Pt(+r, +i);
      case y:
        return r.name == i.name && r.message == i.message;
      case fe:
      case te:
        return r == i + "";
      case M:
        var T = Er;
      case z:
        var F = f & o;
        if (T || (T = Sr), r.size != i.size && !F)
          return !1;
        var A = x.get(r);
        if (A)
          return A == i;
        f |= a, x.set(r, i);
        var P = St(T(r), T(i), f, _, b, x);
        return x.delete(r), P;
      case Fe:
        if (rt)
          return rt.call(r) == rt.call(i);
    }
    return !1;
  }
  function bn(r, i, c, f, _, b) {
    var x = c & o, T = Mt(r), F = T.length, A = Mt(i), P = A.length;
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
        var jt = x ? f(oe, H, O, i, r, b) : f(H, oe, O, r, i, b);
      if (!(jt === void 0 ? H === oe || _(H, oe, c, f, b) : jt)) {
        I = !1;
        break;
      }
      X || (X = O == "constructor");
    }
    if (I && !X) {
      var Ue = r.constructor, Ne = i.constructor;
      Ue != Ne && "constructor" in r && "constructor" in i && !(typeof Ue == "function" && Ue instanceof Ue && typeof Ne == "function" && Ne instanceof Ne) && (I = !1);
    }
    return b.delete(r), b.delete(i), I;
  }
  function Mt(r) {
    return hn(r, On, wn);
  }
  function $e(r, i) {
    var c = r.__data__;
    return _n(i) ? c[typeof i == "string" ? "string" : "hash"] : c.map;
  }
  function he(r, i) {
    var c = Fr(r, i);
    return pn(c) ? c : void 0;
  }
  function vn(r) {
    var i = D.call(r, re), c = r[re];
    try {
      r[re] = void 0;
      var f = !0;
    } catch {
    }
    var _ = _t.call(r);
    return f && (i ? r[re] = c : delete r[re]), _;
  }
  var wn = Tt ? function(r) {
    return r == null ? [] : (r = Object(r), Cr(Tt(r), function(i) {
      return xt.call(r, i);
    }));
  } : Sn, K = Ce;
  (Qe && K(new Qe(new ArrayBuffer(1))) != Ee || ve && K(new ve()) != M || Ve && K(Ve.resolve()) != V || et && K(new et()) != z || tt && K(new tt()) != Xe) && (K = function(r) {
    var i = Ce(r), c = i == E ? r.constructor : void 0, f = c ? ie(c) : "";
    if (f)
      switch (f) {
        case jr:
          return Ee;
        case Lr:
          return M;
        case Dr:
          return V;
        case kr:
          return z;
        case Br:
          return Xe;
      }
    return i;
  });
  function Cn(r, i) {
    return i = i ?? l, !!i && (typeof r == "number" || vr.test(r)) && r > -1 && r % 1 == 0 && r < i;
  }
  function _n(r) {
    var i = typeof r;
    return i == "string" || i == "number" || i == "symbol" || i == "boolean" ? r !== "__proto__" : r === null;
  }
  function Rn(r) {
    return !!Ct && Ct in r;
  }
  function An(r) {
    var i = r && r.constructor, c = typeof i == "function" && i.prototype || Oe;
    return r === c;
  }
  function xn(r) {
    return _t.call(r);
  }
  function ie(r) {
    if (r != null) {
      try {
        return wt.call(r);
      } catch {
      }
      try {
        return r + "";
      } catch {
      }
    }
    return "";
  }
  function Pt(r, i) {
    return r === i || r !== r && i !== i;
  }
  var Tn = Et(function() {
    return arguments;
  }()) ? Et : function(r) {
    return _e(r) && D.call(r, "callee") && !xt.call(r, "callee");
  }, Ie = Array.isArray;
  function Fn(r) {
    return r != null && It(r.length) && !$t(r);
  }
  var nt = Ur || Mn;
  function En(r, i) {
    return Ot(r, i);
  }
  function $t(r) {
    if (!Ut(r))
      return !1;
    var i = Ce(r);
    return i == v || i == R || i == d || i == ee;
  }
  function It(r) {
    return typeof r == "number" && r > -1 && r % 1 == 0 && r <= l;
  }
  function Ut(r) {
    var i = typeof r;
    return r != null && (i == "object" || i == "function");
  }
  function _e(r) {
    return r != null && typeof r == "object";
  }
  var Nt = vt ? xr(vt) : gn;
  function On(r) {
    return Fn(r) ? fn(r) : yn(r);
  }
  function Sn() {
    return [];
  }
  function Mn() {
    return !1;
  }
  e.exports = En;
});
const { debug: m } = le, {
  headers: De,
  getPath: ct,
  getQuery: gs,
  normalizeUrl: Bt
} = Je, Ae = (e) => (t) => (m("Actual url:", t), e(t)), zt = {
  begin: (e) => Ae((t) => t.indexOf(e) === 0),
  end: (e) => Ae(
    (t) => t.substr(-e.length) === e
  ),
  glob: (e) => {
    const t = ts(e);
    return Ae((n) => t.test(n));
  },
  express: (e) => {
    const t = me(e);
    return Ae((n) => t.test(ct(n)));
  },
  path: (e) => Ae((t) => ct(t) === e)
}, ys = ({ headers: e }) => {
  if (m("Generating header matcher"), !e) {
    m("  No header expectations defined - skipping");
    return;
  }
  const t = De.toLowerCase(e);
  return m("  Expected headers:", t), (n, { headers: s = {} }) => {
    m("Attempting to match headers");
    const o = De.toLowerCase(
      De.normalize(s)
    );
    return m("  Expected headers:", t), m("  Actual headers:", o), Object.keys(t).every(
      (a) => De.equal(o[a], t[a])
    );
  };
}, ms = ({ method: e }) => {
  if (m("Generating method matcher"), !e) {
    m("  No method expectations defined - skipping");
    return;
  }
  return m("  Expected method:", e), (t, { method: n }) => {
    m("Attempting to match method");
    const s = n ? n.toLowerCase() : "get";
    return m("  Expected method:", e), m("  Actual method:", s), e === s;
  };
}, bs = ({ query: e }) => {
  if (m("Generating query parameters matcher"), !e) {
    m("  No query parameters expectations defined - skipping");
    return;
  }
  const t = ae.parse(ae.stringify(e));
  m("  Expected query parameters:", e);
  const n = Object.keys(t);
  return (s) => {
    m("Attempting to match query parameters");
    const o = ae.parse(gs(s));
    return m("  Expected query parameters:", t), m("  Actual query parameters:", o), n.every((a) => Array.isArray(o[a]) ? Array.isArray(t[a]) ? sr(o[a].sort(), t[a].sort()) : !1 : o[a] === t[a]);
  };
}, vs = ({ params: e, url: t }) => {
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
    const l = o.exec(ct(a)) || [];
    l.shift();
    const g = s.reduce(
      (u, { name: d }, h) => l[h] ? Object.assign(u, { [d]: l[h] }) : u,
      {}
    );
    return m("  Expected path parameters:", e), m("  Actual path parameters:", g), n.every((u) => g[u] === e[u]);
  };
}, ws = (e, t) => {
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
    return m("Expected body:", s), m("Actual body:", g), n && m("matchPartialBody is true - checking for partial match only"), g && (n ? nr(g, s) : sr(g, s));
  };
}, Gt = (e, t, n) => {
  m("  Matching using full url", t);
  const s = Bt(t);
  return m("  Normalised url to:", t), e.identifier === t && (m("  Updating route identifier to match normalized url:", t), e.identifier = s), (o) => (m("Expected url:", s), m("Actual url:", o), n && s.indexOf("?") ? (m("Ignoring query string when matching url"), o.indexOf(s) === 0) : Bt(o) === s);
}, Cs = ({ functionMatcher: e }) => (m("Detected user defined function matcher", e), (...t) => (m("Calling function matcher with arguments", t), e(...t))), _s = (e) => {
  m("Generating url matcher");
  const { url: t, query: n } = e;
  if (t === "*")
    return m("  Using universal * rule to match any url"), () => !0;
  if (t instanceof RegExp)
    return m("  Using regular expression to match url:", t), (s) => t.test(s);
  if (t.href)
    return m("  Using URL object to match url", t), Gt(e, t.href, n);
  for (const s in zt)
    if (t.indexOf(s + ":") === 0) {
      m(`  Using ${s}: pattern to match url`, t);
      const o = t.replace(new RegExp(`^${s}:`), "");
      return zt[s](o);
    }
  return Gt(e, t, n);
};
var Rs = [
  { name: "query", matcher: bs },
  { name: "method", matcher: ms },
  { name: "headers", matcher: ys },
  { name: "params", matcher: vs },
  { name: "body", matcher: ws, usesBody: !0 },
  { name: "functionMatcher", matcher: Cs },
  { name: "url", matcher: _s }
];
const { debug: qt, setDebugNamespace: Ht, getDebug: ke } = le, Wt = (e) => e instanceof RegExp || typeof e == "string" || typeof e == "object" && "href" in e, As = (e) => typeof e == "function";
class ce {
  constructor(t, n) {
    this.fetchMock = n, ke("compileRoute()")("Compiling route"), this.init(t), this.sanitize(), this.validate(), this.generateMatcher(), this.limit(), this.delayResponse();
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
    Wt(n) || As(n) ? a.matcher = n : Object.assign(a, n), typeof s < "u" && (a.response = s), Object.assign(a, o), Object.assign(this, a);
  }
  sanitize() {
    const t = ke("sanitize()");
    t("Sanitizing route properties"), this.method && (t(`Converting method ${this.method} to lower case`), this.method = this.method.toLowerCase()), Wt(this.matcher) && (t("Mock uses a url matcher", this.matcher), this.url = this.matcher, delete this.matcher), this.functionMatcher = this.matcher || this.functionMatcher, t("Setting route.identifier..."), t(`  route.name is ${this.name}`), t(`  route.url is ${this.url}`), t(`  route.functionMatcher is ${this.functionMatcher}`), this.identifier = this.name || this.url || this.functionMatcher, t(`  -> route.identifier set to ${this.identifier}`);
  }
  generateMatcher() {
    Ht("generateMatcher()"), qt("Compiling matcher for route");
    const t = ce.registeredMatchers.map(
      ({ name: n, matcher: s, usesBody: o }) => this[n] && { matcher: s(this, this.fetchMock), usesBody: o }
    ).filter((n) => !!n);
    this.usesBody = t.some(({ usesBody: n }) => n), qt("Compiled matcher for route"), Ht(), this.matcher = (n, s = {}, o) => t.every(({ matcher: a }) => a(n, s, o));
  }
  limit() {
    const t = ke("limit()");
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
    const t = ke("delayResponse()");
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
Rs.forEach(ce.addMatcher);
var ht = ce;
const { setDebugPhase: qe, setDebugNamespace: He, debug: w } = le, { normalizeUrl: ir } = Je, k = {}, xs = (e) => typeof e == "string" && /^[\da-zA-Z\-]+$/.test(e), Ts = function(e, t = {}, n) {
  return { matcher: e } = new ht(
    [Object.assign({ matcher: e, response: "ok" }, t)],
    this
  ), n.filter(
    ({ url: s, options: o }) => e(ir(s), o)
  );
}, Q = (e) => function(...t) {
  qe("inspect");
  const n = e.call(this, ...t);
  return qe(), n;
}, Fs = (e) => {
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
  ), n = n.filter(({ isUnmatched: o }) => o)) : typeof e > "u" ? (w("Filter provided is undefined. Returning all calls"), n = n) : xs(e) ? (w(
    "Filter provided, looks like the name of a named route. Returning only calls handled by that route"
  ), n = n.filter(({ identifier: o }) => o === e)) : (s = e === "*" ? "*" : ir(e), this.routes.some(({ identifier: o }) => o === s) && (w(
    `Filter provided, ${e}, identifies a route. Returning only calls handled by that route`
  ), n = n.filter((o) => o.identifier === s))), (t || s !== "*") && n.length && (typeof t == "string" && (t = { method: t }), w(
    "Compiling filter and options to route in order to filter all calls",
    e
  ), n = Ts.call(this, s, t, n)), w(`Retrieved ${n.length} calls`), n.map(Fs);
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
  He("flush"), w(
    `flushing all fetch calls. ${e ? "" : "Not "}waiting for response bodies to complete download`
  );
  const t = this._holdingPromises;
  this._holdingPromises = [], w(`${t.length} fetch calls to be awaited`), await Promise.all(t), w("All fetch calls have completed"), e && this._holdingPromises.length && (w("Awaiting all fetch bodies to download"), await this.flush(e), w("All fetch bodies have completed downloading")), He();
});
k.done = Q(function(e) {
  qe("inspect"), He("done"), w("Checking to see if expected calls have been made");
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
  return He(), qe(), n;
});
var Es = k;
const { debug: or } = le, S = Object.assign({}, es, Hn, Es);
S.addMatcher = function(e) {
  ht.addMatcher(e);
};
S.config = {
  fallbackToNetwork: !1,
  includeContentLength: !0,
  sendAsJson: !0,
  warnOnFallback: !0,
  overwriteRoutes: void 0
};
S.createInstance = function() {
  or("Creating fetch-mock instance");
  const e = Object.create(S);
  return e._uncompiledRoutes = (this._uncompiledRoutes || []).slice(), e.routes = e._uncompiledRoutes.map(
    (t) => this.compileRoute(t)
  ), e.fallbackResponse = this.fallbackResponse || void 0, e.config = Object.assign({}, this.config || S.config), e._calls = [], e._holdingPromises = [], e.bindMethods(), e;
};
S.compileRoute = function(e) {
  return new ht(e, this);
};
S.bindMethods = function() {
  this.fetchHandler = S.fetchHandler.bind(this), this.reset = this.restore = S.reset.bind(this), this.resetHistory = S.resetHistory.bind(this), this.resetBehavior = S.resetBehavior.bind(this);
};
S.sandbox = function() {
  or("Creating sandboxed fetch-mock instance");
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
var Te = S;
const Os = {
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
var Ss = Os;
const de = typeof window < "u" ? window : self, { setUrlImplementation: Ms } = Je;
Ms(de.URL);
Te.global = de;
Te.statusTextMap = Ss;
Te.config = Object.assign(Te.config, {
  Promise: de.Promise,
  Request: de.Request,
  Response: de.Response,
  Headers: de.Headers
});
var W = Te.createInstance(), Ps = "fetchMock";
function ut(e) {
  "@babel/helpers - typeof";
  return ut = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ut(e);
}
function $s(e) {
  return js(e) || Ns(e) || Us(e) || Is();
}
function Is() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Us(e, t) {
  if (e) {
    if (typeof e == "string")
      return lt(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return lt(e, t);
  }
}
function Ns(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function js(e) {
  if (Array.isArray(e))
    return lt(e);
}
function lt(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, s = new Array(t); n < t; n++)
    s[n] = e[n];
  return s;
}
const { makeDecorator: Ls } = __STORYBOOK_MODULE_ADDONS__;
function Jt(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "mocks";
  Array.isArray(e) ? e.forEach(function(n) {
    if (Array.isArray(n)) {
      W.mock.apply(W, $s(n));
      return;
    }
    var s = n, o = s.matcher, a = s.response, l = s.options;
    o && W.mock(o, a, l);
  }) : e && console.warn("fetchMock.".concat(t, " should be an array; ").concat(ut(e), " given."));
}
var Ds = Ls({
  name: "withFetchMock",
  parameterName: Ps,
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
    return W.reset(), W.config.fallbackToNetwork = !0, Jt(o.mocks), typeof o.useFetchMock == "function" && o.useFetchMock(W), Jt(o.catchAllMocks, "catchAllMocks"), Array.isArray(o.catchAllURLs) && o.catchAllURLs.forEach(function(l) {
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
}), ks = [Ds];
export {
  ks as decorators
};
