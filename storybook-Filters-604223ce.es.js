import { r as N, R as x } from "./storybook-index-45401197.es.js";
import { r as ar, R as fs } from "./storybook-index-633d712d.es.js";
import { _ as Te } from "./storybook-extends-70f3d2a3.es.js";
import { g as ps } from "./storybook-_commonjsHelpers-c5d32002.es.js";
import { i as Fr } from "./storybook-tiny-invariant-9f3340e2.es.js";
import { B as Gr, M as ms } from "./storybook-Icon-736fb775.es.js";
import { B as gs } from "./storybook-Button-d74e310e.es.js";
import { P as Re } from "./storybook-index-43433e35.es.js";
import { M as hs } from "./storybook-MultiSelect-5b27422b.es.js";
import { _ as bs } from "./storybook-lodash-c15d8e1c.es.js";
var X = typeof globalThis < "u" && globalThis || typeof self < "u" && self || // eslint-disable-next-line no-undef
typeof global < "u" && global || {}, ee = {
  searchParams: "URLSearchParams" in X,
  iterable: "Symbol" in X && "iterator" in Symbol,
  blob: "FileReader" in X && "Blob" in X && function() {
    try {
      return new Blob(), !0;
    } catch {
      return !1;
    }
  }(),
  formData: "FormData" in X,
  arrayBuffer: "ArrayBuffer" in X
};
function vs(e) {
  return e && DataView.prototype.isPrototypeOf(e);
}
if (ee.arrayBuffer)
  var ys = [
    "[object Int8Array]",
    "[object Uint8Array]",
    "[object Uint8ClampedArray]",
    "[object Int16Array]",
    "[object Uint16Array]",
    "[object Int32Array]",
    "[object Uint32Array]",
    "[object Float32Array]",
    "[object Float64Array]"
  ], Es = ArrayBuffer.isView || function(e) {
    return e && ys.indexOf(Object.prototype.toString.call(e)) > -1;
  };
function $e(e) {
  if (typeof e != "string" && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || e === "")
    throw new TypeError('Invalid character in header field name: "' + e + '"');
  return e.toLowerCase();
}
function cr(e) {
  return typeof e != "string" && (e = String(e)), e;
}
function lr(e) {
  var t = {
    next: function() {
      var r = e.shift();
      return { done: r === void 0, value: r };
    }
  };
  return ee.iterable && (t[Symbol.iterator] = function() {
    return t;
  }), t;
}
function H(e) {
  this.map = {}, e instanceof H ? e.forEach(function(t, r) {
    this.append(r, t);
  }, this) : Array.isArray(e) ? e.forEach(function(t) {
    if (t.length != 2)
      throw new TypeError("Headers constructor: expected name/value pair to be length 2, found" + t.length);
    this.append(t[0], t[1]);
  }, this) : e && Object.getOwnPropertyNames(e).forEach(function(t) {
    this.append(t, e[t]);
  }, this);
}
H.prototype.append = function(e, t) {
  e = $e(e), t = cr(t);
  var r = this.map[e];
  this.map[e] = r ? r + ", " + t : t;
};
H.prototype.delete = function(e) {
  delete this.map[$e(e)];
};
H.prototype.get = function(e) {
  return e = $e(e), this.has(e) ? this.map[e] : null;
};
H.prototype.has = function(e) {
  return this.map.hasOwnProperty($e(e));
};
H.prototype.set = function(e, t) {
  this.map[$e(e)] = cr(t);
};
H.prototype.forEach = function(e, t) {
  for (var r in this.map)
    this.map.hasOwnProperty(r) && e.call(t, this.map[r], r, this);
};
H.prototype.keys = function() {
  var e = [];
  return this.forEach(function(t, r) {
    e.push(r);
  }), lr(e);
};
H.prototype.values = function() {
  var e = [];
  return this.forEach(function(t) {
    e.push(t);
  }), lr(e);
};
H.prototype.entries = function() {
  var e = [];
  return this.forEach(function(t, r) {
    e.push([r, t]);
  }), lr(e);
};
ee.iterable && (H.prototype[Symbol.iterator] = H.prototype.entries);
function Ot(e) {
  if (!e._noBody) {
    if (e.bodyUsed)
      return Promise.reject(new TypeError("Already read"));
    e.bodyUsed = !0;
  }
}
function jn(e) {
  return new Promise(function(t, r) {
    e.onload = function() {
      t(e.result);
    }, e.onerror = function() {
      r(e.error);
    };
  });
}
function Ds(e) {
  var t = new FileReader(), r = jn(t);
  return t.readAsArrayBuffer(e), r;
}
function Ss(e) {
  var t = new FileReader(), r = jn(t), n = /charset=([A-Za-z0-9_-]+)/.exec(e.type), o = n ? n[1] : "utf-8";
  return t.readAsText(e, o), r;
}
function Ns(e) {
  for (var t = new Uint8Array(e), r = new Array(t.length), n = 0; n < t.length; n++)
    r[n] = String.fromCharCode(t[n]);
  return r.join("");
}
function Ur(e) {
  if (e.slice)
    return e.slice(0);
  var t = new Uint8Array(e.byteLength);
  return t.set(new Uint8Array(e)), t.buffer;
}
function qn() {
  return this.bodyUsed = !1, this._initBody = function(e) {
    this.bodyUsed = this.bodyUsed, this._bodyInit = e, e ? typeof e == "string" ? this._bodyText = e : ee.blob && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : ee.formData && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : ee.searchParams && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : ee.arrayBuffer && ee.blob && vs(e) ? (this._bodyArrayBuffer = Ur(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : ee.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(e) || Es(e)) ? this._bodyArrayBuffer = Ur(e) : this._bodyText = e = Object.prototype.toString.call(e) : (this._noBody = !0, this._bodyText = ""), this.headers.get("content-type") || (typeof e == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : ee.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
  }, ee.blob && (this.blob = function() {
    var e = Ot(this);
    if (e)
      return e;
    if (this._bodyBlob)
      return Promise.resolve(this._bodyBlob);
    if (this._bodyArrayBuffer)
      return Promise.resolve(new Blob([this._bodyArrayBuffer]));
    if (this._bodyFormData)
      throw new Error("could not read FormData body as blob");
    return Promise.resolve(new Blob([this._bodyText]));
  }), this.arrayBuffer = function() {
    if (this._bodyArrayBuffer) {
      var e = Ot(this);
      return e || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(
        this._bodyArrayBuffer.buffer.slice(
          this._bodyArrayBuffer.byteOffset,
          this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength
        )
      ) : Promise.resolve(this._bodyArrayBuffer));
    } else {
      if (ee.blob)
        return this.blob().then(Ds);
      throw new Error("could not read as ArrayBuffer");
    }
  }, this.text = function() {
    var e = Ot(this);
    if (e)
      return e;
    if (this._bodyBlob)
      return Ss(this._bodyBlob);
    if (this._bodyArrayBuffer)
      return Promise.resolve(Ns(this._bodyArrayBuffer));
    if (this._bodyFormData)
      throw new Error("could not read FormData body as text");
    return Promise.resolve(this._bodyText);
  }, ee.formData && (this.formData = function() {
    return this.text().then(Os);
  }), this.json = function() {
    return this.text().then(JSON.parse);
  }, this;
}
var ws = ["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT", "TRACE"];
function xs(e) {
  var t = e.toUpperCase();
  return ws.indexOf(t) > -1 ? t : e;
}
function Ce(e, t) {
  if (!(this instanceof Ce))
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
  t = t || {};
  var r = t.body;
  if (e instanceof Ce) {
    if (e.bodyUsed)
      throw new TypeError("Already read");
    this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new H(e.headers)), this.method = e.method, this.mode = e.mode, this.signal = e.signal, !r && e._bodyInit != null && (r = e._bodyInit, e.bodyUsed = !0);
  } else
    this.url = String(e);
  if (this.credentials = t.credentials || this.credentials || "same-origin", (t.headers || !this.headers) && (this.headers = new H(t.headers)), this.method = xs(t.method || this.method || "GET"), this.mode = t.mode || this.mode || null, this.signal = t.signal || this.signal || function() {
    if ("AbortController" in X) {
      var s = new AbortController();
      return s.signal;
    }
  }(), this.referrer = null, (this.method === "GET" || this.method === "HEAD") && r)
    throw new TypeError("Body not allowed for GET or HEAD requests");
  if (this._initBody(r), (this.method === "GET" || this.method === "HEAD") && (t.cache === "no-store" || t.cache === "no-cache")) {
    var n = /([?&])_=[^&]*/;
    if (n.test(this.url))
      this.url = this.url.replace(n, "$1_=" + (/* @__PURE__ */ new Date()).getTime());
    else {
      var o = /\?/;
      this.url += (o.test(this.url) ? "&" : "?") + "_=" + (/* @__PURE__ */ new Date()).getTime();
    }
  }
}
Ce.prototype.clone = function() {
  return new Ce(this, { body: this._bodyInit });
};
function Os(e) {
  var t = new FormData();
  return e.trim().split("&").forEach(function(r) {
    if (r) {
      var n = r.split("="), o = n.shift().replace(/\+/g, " "), s = n.join("=").replace(/\+/g, " ");
      t.append(decodeURIComponent(o), decodeURIComponent(s));
    }
  }), t;
}
function Cs(e) {
  var t = new H(), r = e.replace(/\r?\n[\t ]+/g, " ");
  return r.split("\r").map(function(n) {
    return n.indexOf(`
`) === 0 ? n.substr(1, n.length) : n;
  }).forEach(function(n) {
    var o = n.split(":"), s = o.shift().trim();
    if (s) {
      var i = o.join(":").trim();
      try {
        t.append(s, i);
      } catch (a) {
        console.warn("Response " + a.message);
      }
    }
  }), t;
}
qn.call(Ce.prototype);
function ge(e, t) {
  if (!(this instanceof ge))
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
  if (t || (t = {}), this.type = "default", this.status = t.status === void 0 ? 200 : t.status, this.status < 200 || this.status > 599)
    throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");
  this.ok = this.status >= 200 && this.status < 300, this.statusText = t.statusText === void 0 ? "" : "" + t.statusText, this.headers = new H(t.headers), this.url = t.url || "", this._initBody(e);
}
qn.call(ge.prototype);
ge.prototype.clone = function() {
  return new ge(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new H(this.headers),
    url: this.url
  });
};
ge.error = function() {
  var e = new ge(null, { status: 200, statusText: "" });
  return e.ok = !1, e.status = 0, e.type = "error", e;
};
var Is = [301, 302, 303, 307, 308];
ge.redirect = function(e, t) {
  if (Is.indexOf(t) === -1)
    throw new RangeError("Invalid status code");
  return new ge(null, { status: t, headers: { location: e } });
};
var Oe = X.DOMException;
try {
  new Oe();
} catch {
  Oe = function(t, r) {
    this.message = t, this.name = r;
    var n = Error(t);
    this.stack = n.stack;
  }, Oe.prototype = Object.create(Error.prototype), Oe.prototype.constructor = Oe;
}
function zn(e, t) {
  return new Promise(function(r, n) {
    var o = new Ce(e, t);
    if (o.signal && o.signal.aborted)
      return n(new Oe("Aborted", "AbortError"));
    var s = new XMLHttpRequest();
    function i() {
      s.abort();
    }
    s.onload = function() {
      var u = {
        statusText: s.statusText,
        headers: Cs(s.getAllResponseHeaders() || "")
      };
      o.url.indexOf("file://") === 0 && (s.status < 200 || s.status > 599) ? u.status = 200 : u.status = s.status, u.url = "responseURL" in s ? s.responseURL : u.headers.get("X-Request-URL");
      var f = "response" in s ? s.response : s.responseText;
      setTimeout(function() {
        r(new ge(f, u));
      }, 0);
    }, s.onerror = function() {
      setTimeout(function() {
        n(new TypeError("Network request failed"));
      }, 0);
    }, s.ontimeout = function() {
      setTimeout(function() {
        n(new TypeError("Network request timed out"));
      }, 0);
    }, s.onabort = function() {
      setTimeout(function() {
        n(new Oe("Aborted", "AbortError"));
      }, 0);
    };
    function a(u) {
      try {
        return u === "" && X.location.href ? X.location.href : u;
      } catch {
        return u;
      }
    }
    if (s.open(o.method, a(o.url), !0), o.credentials === "include" ? s.withCredentials = !0 : o.credentials === "omit" && (s.withCredentials = !1), "responseType" in s && (ee.blob ? s.responseType = "blob" : ee.arrayBuffer && (s.responseType = "arraybuffer")), t && typeof t.headers == "object" && !(t.headers instanceof H || X.Headers && t.headers instanceof X.Headers)) {
      var c = [];
      Object.getOwnPropertyNames(t.headers).forEach(function(u) {
        c.push($e(u)), s.setRequestHeader(u, cr(t.headers[u]));
      }), o.headers.forEach(function(u, f) {
        c.indexOf(f) === -1 && s.setRequestHeader(f, u);
      });
    } else
      o.headers.forEach(function(u, f) {
        s.setRequestHeader(f, u);
      });
    o.signal && (o.signal.addEventListener("abort", i), s.onreadystatechange = function() {
      s.readyState === 4 && o.signal.removeEventListener("abort", i);
    }), s.send(typeof o._bodyInit > "u" ? null : o._bodyInit);
  });
}
zn.polyfill = !0;
X.fetch || (X.fetch = zn, X.Headers = H, X.Request = Ce, X.Response = ge);
function Yn(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), o, s;
  for (s = 0; s < n.length; s++)
    o = n[s], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function qe(e) {
  "@babel/helpers - typeof";
  return qe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, qe(e);
}
function _s(e, t) {
  if (qe(e) != "object" || !e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (qe(n) != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function As(e) {
  var t = _s(e, "string");
  return qe(t) == "symbol" ? t : String(t);
}
function Ps(e, t, r) {
  return t = As(t), t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function Wr(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function kr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Wr(Object(r), !0).forEach(function(n) {
      Ps(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Wr(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function te(e) {
  return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. ";
}
var Hr = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}(), Ct = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
}, jr = {
  INIT: "@@redux/INIT" + Ct(),
  REPLACE: "@@redux/REPLACE" + Ct(),
  PROBE_UNKNOWN_ACTION: function() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + Ct();
  }
};
function Rs(e) {
  if (typeof e != "object" || e === null)
    return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function Ts(e) {
  if (e === void 0)
    return "undefined";
  if (e === null)
    return "null";
  var t = typeof e;
  switch (t) {
    case "boolean":
    case "string":
    case "number":
    case "symbol":
    case "function":
      return t;
  }
  if (Array.isArray(e))
    return "array";
  if (Ls(e))
    return "date";
  if (Ms(e))
    return "error";
  var r = Bs(e);
  switch (r) {
    case "Symbol":
    case "Promise":
    case "WeakMap":
    case "WeakSet":
    case "Map":
    case "Set":
      return r;
  }
  return t.slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function Bs(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function Ms(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function Ls(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function we(e) {
  var t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = Ts(e)), t;
}
function Kn(e, t, r) {
  var n;
  if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? te(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
    if (typeof r != "function")
      throw new Error(process.env.NODE_ENV === "production" ? te(1) : "Expected the enhancer to be a function. Instead, received: '" + we(r) + "'");
    return r(Kn)(e, t);
  }
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? te(2) : "Expected the root reducer to be a function. Instead, received: '" + we(e) + "'");
  var o = e, s = t, i = [], a = i, c = !1;
  function u() {
    a === i && (a = i.slice());
  }
  function f() {
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? te(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return s;
  }
  function l(b) {
    if (typeof b != "function")
      throw new Error(process.env.NODE_ENV === "production" ? te(4) : "Expected the listener to be a function. Instead, received: '" + we(b) + "'");
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? te(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    var g = !0;
    return u(), a.push(b), function() {
      if (g) {
        if (c)
          throw new Error(process.env.NODE_ENV === "production" ? te(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        g = !1, u();
        var D = a.indexOf(b);
        a.splice(D, 1), i = null;
      }
    };
  }
  function d(b) {
    if (!Rs(b))
      throw new Error(process.env.NODE_ENV === "production" ? te(7) : "Actions must be plain objects. Instead, the actual type was: '" + we(b) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    if (typeof b.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? te(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? te(9) : "Reducers may not dispatch actions.");
    try {
      c = !0, s = o(s, b);
    } finally {
      c = !1;
    }
    for (var g = i = a, S = 0; S < g.length; S++) {
      var D = g[S];
      D();
    }
    return b;
  }
  function p(b) {
    if (typeof b != "function")
      throw new Error(process.env.NODE_ENV === "production" ? te(10) : "Expected the nextReducer to be a function. Instead, received: '" + we(b));
    o = b, d({
      type: jr.REPLACE
    });
  }
  function v() {
    var b, g = l;
    return b = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function(D) {
        if (typeof D != "object" || D === null)
          throw new Error(process.env.NODE_ENV === "production" ? te(11) : "Expected the observer to be an object. Instead, received: '" + we(D) + "'");
        function E() {
          D.next && D.next(f());
        }
        E();
        var y = g(E);
        return {
          unsubscribe: y
        };
      }
    }, b[Hr] = function() {
      return this;
    }, b;
  }
  return d({
    type: jr.INIT
  }), n = {
    dispatch: d,
    subscribe: l,
    getState: f,
    replaceReducer: p
  }, n[Hr] = v, n;
}
function qr(e, t) {
  return function() {
    return t(e.apply(this, arguments));
  };
}
function zr(e, t) {
  if (typeof e == "function")
    return qr(e, t);
  if (typeof e != "object" || e === null)
    throw new Error(process.env.NODE_ENV === "production" ? te(16) : "bindActionCreators expected an object or a function, but instead received: '" + we(e) + `'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`);
  var r = {};
  for (var n in e) {
    var o = e[n];
    typeof o == "function" && (r[n] = qr(o, t));
  }
  return r;
}
function Xn() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return t.length === 0 ? function(n) {
    return n;
  } : t.length === 1 ? t[0] : t.reduce(function(n, o) {
    return function() {
      return n(o.apply(void 0, arguments));
    };
  });
}
function $s() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return function(n) {
    return function() {
      var o = n.apply(void 0, arguments), s = function() {
        throw new Error(process.env.NODE_ENV === "production" ? te(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
      }, i = {
        getState: o.getState,
        dispatch: function() {
          return s.apply(void 0, arguments);
        }
      }, a = t.map(function(c) {
        return c(i);
      });
      return s = Xn.apply(void 0, a)(o.dispatch), kr(kr({}, o), {}, {
        dispatch: s
      });
    };
  };
}
var Xt = { exports: {} }, It = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yr;
function Vs() {
  if (Yr)
    return It;
  Yr = 1;
  var e = N;
  function t(l, d) {
    return l === d && (l !== 0 || 1 / l === 1 / d) || l !== l && d !== d;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, o = e.useEffect, s = e.useLayoutEffect, i = e.useDebugValue;
  function a(l, d) {
    var p = d(), v = n({ inst: { value: p, getSnapshot: d } }), b = v[0].inst, g = v[1];
    return s(function() {
      b.value = p, b.getSnapshot = d, c(b) && g({ inst: b });
    }, [l, p, d]), o(function() {
      return c(b) && g({ inst: b }), l(function() {
        c(b) && g({ inst: b });
      });
    }, [l]), i(p), p;
  }
  function c(l) {
    var d = l.getSnapshot;
    l = l.value;
    try {
      var p = d();
      return !r(l, p);
    } catch {
      return !0;
    }
  }
  function u(l, d) {
    return d();
  }
  var f = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : a;
  return It.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : f, It;
}
var _t = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kr;
function Fs() {
  return Kr || (Kr = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = N, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function r(E) {
      {
        for (var y = arguments.length, h = new Array(y > 1 ? y - 1 : 0), w = 1; w < y; w++)
          h[w - 1] = arguments[w];
        n("error", E, h);
      }
    }
    function n(E, y, h) {
      {
        var w = t.ReactDebugCurrentFrame, _ = w.getStackAddendum();
        _ !== "" && (y += "%s", h = h.concat([_]));
        var O = h.map(function(R) {
          return String(R);
        });
        O.unshift("Warning: " + y), Function.prototype.apply.call(console[E], console, O);
      }
    }
    function o(E, y) {
      return E === y && (E !== 0 || 1 / E === 1 / y) || E !== E && y !== y;
    }
    var s = typeof Object.is == "function" ? Object.is : o, i = e.useState, a = e.useEffect, c = e.useLayoutEffect, u = e.useDebugValue, f = !1, l = !1;
    function d(E, y, h) {
      f || e.startTransition !== void 0 && (f = !0, r("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var w = y();
      if (!l) {
        var _ = y();
        s(w, _) || (r("The result of getSnapshot should be cached to avoid an infinite loop"), l = !0);
      }
      var O = i({
        inst: {
          value: w,
          getSnapshot: y
        }
      }), R = O[0].inst, A = O[1];
      return c(function() {
        R.value = w, R.getSnapshot = y, p(R) && A({
          inst: R
        });
      }, [E, w, y]), a(function() {
        p(R) && A({
          inst: R
        });
        var M = function() {
          p(R) && A({
            inst: R
          });
        };
        return E(M);
      }, [E]), u(w), w;
    }
    function p(E) {
      var y = E.getSnapshot, h = E.value;
      try {
        var w = y();
        return !s(h, w);
      } catch {
        return !0;
      }
    }
    function v(E, y, h) {
      return y();
    }
    var b = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", g = !b, S = g ? v : d, D = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : S;
    _t.useSyncExternalStore = D, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), _t;
}
process.env.NODE_ENV === "production" ? Xt.exports = Vs() : Xt.exports = Fs();
var ur = Xt.exports, At = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xr;
function Gs() {
  if (Xr)
    return At;
  Xr = 1;
  var e = N, t = ur;
  function r(u, f) {
    return u === f && (u !== 0 || 1 / u === 1 / f) || u !== u && f !== f;
  }
  var n = typeof Object.is == "function" ? Object.is : r, o = t.useSyncExternalStore, s = e.useRef, i = e.useEffect, a = e.useMemo, c = e.useDebugValue;
  return At.useSyncExternalStoreWithSelector = function(u, f, l, d, p) {
    var v = s(null);
    if (v.current === null) {
      var b = { hasValue: !1, value: null };
      v.current = b;
    } else
      b = v.current;
    v = a(function() {
      function S(w) {
        if (!D) {
          if (D = !0, E = w, w = d(w), p !== void 0 && b.hasValue) {
            var _ = b.value;
            if (p(_, w))
              return y = _;
          }
          return y = w;
        }
        if (_ = y, n(E, w))
          return _;
        var O = d(w);
        return p !== void 0 && p(_, O) ? _ : (E = w, y = O);
      }
      var D = !1, E, y, h = l === void 0 ? null : l;
      return [function() {
        return S(f());
      }, h === null ? void 0 : function() {
        return S(h());
      }];
    }, [f, l, d, p]);
    var g = o(u, v[0], v[1]);
    return i(function() {
      b.hasValue = !0, b.value = g;
    }, [g]), c(g), g;
  }, At;
}
var Pt = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qr;
function Us() {
  return Qr || (Qr = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = N, t = ur;
    function r(f, l) {
      return f === l && (f !== 0 || 1 / f === 1 / l) || f !== f && l !== l;
    }
    var n = typeof Object.is == "function" ? Object.is : r, o = t.useSyncExternalStore, s = e.useRef, i = e.useEffect, a = e.useMemo, c = e.useDebugValue;
    function u(f, l, d, p, v) {
      var b = s(null), g;
      b.current === null ? (g = {
        hasValue: !1,
        value: null
      }, b.current = g) : g = b.current;
      var S = a(function() {
        var h = !1, w, _, O = function(T) {
          if (!h) {
            h = !0, w = T;
            var U = p(T);
            if (v !== void 0 && g.hasValue) {
              var k = g.value;
              if (v(k, U))
                return _ = k, k;
            }
            return _ = U, U;
          }
          var j = w, K = _;
          if (n(j, T))
            return K;
          var q = p(T);
          return v !== void 0 && v(K, q) ? K : (w = T, _ = q, q);
        }, R = d === void 0 ? null : d, A = function() {
          return O(l());
        }, M = R === null ? void 0 : function() {
          return O(R());
        };
        return [A, M];
      }, [l, d, p, v]), D = S[0], E = S[1], y = o(f, D, E);
      return i(function() {
        g.hasValue = !0, g.value = y;
      }, [y]), c(y), y;
    }
    Pt.useSyncExternalStoreWithSelector = u, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Pt;
}
process.env.NODE_ENV === "production" ? Gs() : Us();
function Ws(e) {
  e();
}
let Qn = Ws;
const ks = (e) => Qn = e, Hs = () => Qn, Jr = Symbol.for("react-redux-context"), Zr = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function js() {
  var e;
  if (!N.createContext)
    return {};
  const t = (e = Zr[Jr]) != null ? e : Zr[Jr] = /* @__PURE__ */ new Map();
  let r = t.get(N.createContext);
  return r || (r = N.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(N.createContext, r)), r;
}
const Jn = /* @__PURE__ */ js(), qs = () => {
  throw new Error("uSES not initialized!");
};
var Qt = { exports: {} }, L = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var en;
function zs() {
  if (en)
    return L;
  en = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, D = e ? Symbol.for("react.scope") : 60119;
  function E(h) {
    if (typeof h == "object" && h !== null) {
      var w = h.$$typeof;
      switch (w) {
        case t:
          switch (h = h.type, h) {
            case c:
            case u:
            case n:
            case s:
            case o:
            case l:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case a:
                case f:
                case v:
                case p:
                case i:
                  return h;
                default:
                  return w;
              }
          }
        case r:
          return w;
      }
    }
  }
  function y(h) {
    return E(h) === u;
  }
  return L.AsyncMode = c, L.ConcurrentMode = u, L.ContextConsumer = a, L.ContextProvider = i, L.Element = t, L.ForwardRef = f, L.Fragment = n, L.Lazy = v, L.Memo = p, L.Portal = r, L.Profiler = s, L.StrictMode = o, L.Suspense = l, L.isAsyncMode = function(h) {
    return y(h) || E(h) === c;
  }, L.isConcurrentMode = y, L.isContextConsumer = function(h) {
    return E(h) === a;
  }, L.isContextProvider = function(h) {
    return E(h) === i;
  }, L.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === t;
  }, L.isForwardRef = function(h) {
    return E(h) === f;
  }, L.isFragment = function(h) {
    return E(h) === n;
  }, L.isLazy = function(h) {
    return E(h) === v;
  }, L.isMemo = function(h) {
    return E(h) === p;
  }, L.isPortal = function(h) {
    return E(h) === r;
  }, L.isProfiler = function(h) {
    return E(h) === s;
  }, L.isStrictMode = function(h) {
    return E(h) === o;
  }, L.isSuspense = function(h) {
    return E(h) === l;
  }, L.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === n || h === u || h === s || h === o || h === l || h === d || typeof h == "object" && h !== null && (h.$$typeof === v || h.$$typeof === p || h.$$typeof === i || h.$$typeof === a || h.$$typeof === f || h.$$typeof === g || h.$$typeof === S || h.$$typeof === D || h.$$typeof === b);
  }, L.typeOf = E, L;
}
var $ = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tn;
function Ys() {
  return tn || (tn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, D = e ? Symbol.for("react.scope") : 60119;
    function E(C) {
      return typeof C == "string" || typeof C == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      C === n || C === u || C === s || C === o || C === l || C === d || typeof C == "object" && C !== null && (C.$$typeof === v || C.$$typeof === p || C.$$typeof === i || C.$$typeof === a || C.$$typeof === f || C.$$typeof === g || C.$$typeof === S || C.$$typeof === D || C.$$typeof === b);
    }
    function y(C) {
      if (typeof C == "object" && C !== null) {
        var fe = C.$$typeof;
        switch (fe) {
          case t:
            var P = C.type;
            switch (P) {
              case c:
              case u:
              case n:
              case s:
              case o:
              case l:
                return P;
              default:
                var Pe = P && P.$$typeof;
                switch (Pe) {
                  case a:
                  case f:
                  case v:
                  case p:
                  case i:
                    return Pe;
                  default:
                    return fe;
                }
            }
          case r:
            return fe;
        }
      }
    }
    var h = c, w = u, _ = a, O = i, R = t, A = f, M = n, T = v, U = p, k = r, j = s, K = o, q = l, re = !1;
    function me(C) {
      return re || (re = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), G(C) || y(C) === c;
    }
    function G(C) {
      return y(C) === u;
    }
    function ne(C) {
      return y(C) === a;
    }
    function de(C) {
      return y(C) === i;
    }
    function oe(C) {
      return typeof C == "object" && C !== null && C.$$typeof === t;
    }
    function J(C) {
      return y(C) === f;
    }
    function Ee(C) {
      return y(C) === n;
    }
    function De(C) {
      return y(C) === v;
    }
    function Ae(C) {
      return y(C) === p;
    }
    function Ge(C) {
      return y(C) === r;
    }
    function he(C) {
      return y(C) === s;
    }
    function Se(C) {
      return y(C) === o;
    }
    function ct(C) {
      return y(C) === l;
    }
    $.AsyncMode = h, $.ConcurrentMode = w, $.ContextConsumer = _, $.ContextProvider = O, $.Element = R, $.ForwardRef = A, $.Fragment = M, $.Lazy = T, $.Memo = U, $.Portal = k, $.Profiler = j, $.StrictMode = K, $.Suspense = q, $.isAsyncMode = me, $.isConcurrentMode = G, $.isContextConsumer = ne, $.isContextProvider = de, $.isElement = oe, $.isForwardRef = J, $.isFragment = Ee, $.isLazy = De, $.isMemo = Ae, $.isPortal = Ge, $.isProfiler = he, $.isStrictMode = Se, $.isSuspense = ct, $.isValidElementType = E, $.typeOf = y;
  }()), $;
}
process.env.NODE_ENV === "production" ? Qt.exports = zs() : Qt.exports = Ys();
var Ks = Qt.exports, dr = Ks, Xs = {
  childContextTypes: !0,
  contextType: !0,
  contextTypes: !0,
  defaultProps: !0,
  displayName: !0,
  getDefaultProps: !0,
  getDerivedStateFromError: !0,
  getDerivedStateFromProps: !0,
  mixins: !0,
  propTypes: !0,
  type: !0
}, Qs = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, Js = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Zn = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, fr = {};
fr[dr.ForwardRef] = Js;
fr[dr.Memo] = Zn;
function rn(e) {
  return dr.isMemo(e) ? Zn : fr[e.$$typeof] || Xs;
}
var Zs = Object.defineProperty, ei = Object.getOwnPropertyNames, nn = Object.getOwnPropertySymbols, ti = Object.getOwnPropertyDescriptor, ri = Object.getPrototypeOf, on = Object.prototype;
function eo(e, t, r) {
  if (typeof t != "string") {
    if (on) {
      var n = ri(t);
      n && n !== on && eo(e, n, r);
    }
    var o = ei(t);
    nn && (o = o.concat(nn(t)));
    for (var s = rn(e), i = rn(t), a = 0; a < o.length; ++a) {
      var c = o[a];
      if (!Qs[c] && !(r && r[c]) && !(i && i[c]) && !(s && s[c])) {
        var u = ti(t, c);
        try {
          Zs(e, c, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var ni = eo;
const sn = /* @__PURE__ */ ps(ni);
var Jt = { exports: {} }, V = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var an;
function oi() {
  if (an)
    return V;
  an = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), v;
  v = Symbol.for("react.module.reference");
  function b(g) {
    if (typeof g == "object" && g !== null) {
      var S = g.$$typeof;
      switch (S) {
        case e:
          switch (g = g.type, g) {
            case r:
            case o:
            case n:
            case u:
            case f:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case a:
                case i:
                case c:
                case d:
                case l:
                case s:
                  return g;
                default:
                  return S;
              }
          }
        case t:
          return S;
      }
    }
  }
  return V.ContextConsumer = i, V.ContextProvider = s, V.Element = e, V.ForwardRef = c, V.Fragment = r, V.Lazy = d, V.Memo = l, V.Portal = t, V.Profiler = o, V.StrictMode = n, V.Suspense = u, V.SuspenseList = f, V.isAsyncMode = function() {
    return !1;
  }, V.isConcurrentMode = function() {
    return !1;
  }, V.isContextConsumer = function(g) {
    return b(g) === i;
  }, V.isContextProvider = function(g) {
    return b(g) === s;
  }, V.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === e;
  }, V.isForwardRef = function(g) {
    return b(g) === c;
  }, V.isFragment = function(g) {
    return b(g) === r;
  }, V.isLazy = function(g) {
    return b(g) === d;
  }, V.isMemo = function(g) {
    return b(g) === l;
  }, V.isPortal = function(g) {
    return b(g) === t;
  }, V.isProfiler = function(g) {
    return b(g) === o;
  }, V.isStrictMode = function(g) {
    return b(g) === n;
  }, V.isSuspense = function(g) {
    return b(g) === u;
  }, V.isSuspenseList = function(g) {
    return b(g) === f;
  }, V.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === r || g === o || g === n || g === u || g === f || g === p || typeof g == "object" && g !== null && (g.$$typeof === d || g.$$typeof === l || g.$$typeof === s || g.$$typeof === i || g.$$typeof === c || g.$$typeof === v || g.getModuleId !== void 0);
  }, V.typeOf = b, V;
}
var F = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cn;
function si() {
  return cn || (cn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), v = !1, b = !1, g = !1, S = !1, D = !1, E;
    E = Symbol.for("react.module.reference");
    function y(P) {
      return !!(typeof P == "string" || typeof P == "function" || P === r || P === o || D || P === n || P === u || P === f || S || P === p || v || b || g || typeof P == "object" && P !== null && (P.$$typeof === d || P.$$typeof === l || P.$$typeof === s || P.$$typeof === i || P.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      P.$$typeof === E || P.getModuleId !== void 0));
    }
    function h(P) {
      if (typeof P == "object" && P !== null) {
        var Pe = P.$$typeof;
        switch (Pe) {
          case e:
            var lt = P.type;
            switch (lt) {
              case r:
              case o:
              case n:
              case u:
              case f:
                return lt;
              default:
                var Vr = lt && lt.$$typeof;
                switch (Vr) {
                  case a:
                  case i:
                  case c:
                  case d:
                  case l:
                  case s:
                    return Vr;
                  default:
                    return Pe;
                }
            }
          case t:
            return Pe;
        }
      }
    }
    var w = i, _ = s, O = e, R = c, A = r, M = d, T = l, U = t, k = o, j = n, K = u, q = f, re = !1, me = !1;
    function G(P) {
      return re || (re = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ne(P) {
      return me || (me = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function de(P) {
      return h(P) === i;
    }
    function oe(P) {
      return h(P) === s;
    }
    function J(P) {
      return typeof P == "object" && P !== null && P.$$typeof === e;
    }
    function Ee(P) {
      return h(P) === c;
    }
    function De(P) {
      return h(P) === r;
    }
    function Ae(P) {
      return h(P) === d;
    }
    function Ge(P) {
      return h(P) === l;
    }
    function he(P) {
      return h(P) === t;
    }
    function Se(P) {
      return h(P) === o;
    }
    function ct(P) {
      return h(P) === n;
    }
    function C(P) {
      return h(P) === u;
    }
    function fe(P) {
      return h(P) === f;
    }
    F.ContextConsumer = w, F.ContextProvider = _, F.Element = O, F.ForwardRef = R, F.Fragment = A, F.Lazy = M, F.Memo = T, F.Portal = U, F.Profiler = k, F.StrictMode = j, F.Suspense = K, F.SuspenseList = q, F.isAsyncMode = G, F.isConcurrentMode = ne, F.isContextConsumer = de, F.isContextProvider = oe, F.isElement = J, F.isForwardRef = Ee, F.isFragment = De, F.isLazy = Ae, F.isMemo = Ge, F.isPortal = he, F.isProfiler = Se, F.isStrictMode = ct, F.isSuspense = C, F.isSuspenseList = fe, F.isValidElementType = y, F.typeOf = h;
  }()), F;
}
process.env.NODE_ENV === "production" ? Jt.exports = oi() : Jt.exports = si();
var ln = Jt.exports;
function pr(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function Rt(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || pr(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else
    throw new Error(`Unexpected value for ${t} in connect.`);
}
function ii(e, t, r) {
  Rt(e, "mapStateToProps"), Rt(t, "mapDispatchToProps"), Rt(r, "mergeProps");
}
const ai = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function ci(e, t, r, n, {
  areStatesEqual: o,
  areOwnPropsEqual: s,
  areStatePropsEqual: i
}) {
  let a = !1, c, u, f, l, d;
  function p(D, E) {
    return c = D, u = E, f = e(c, u), l = t(n, u), d = r(f, l, u), a = !0, d;
  }
  function v() {
    return f = e(c, u), t.dependsOnOwnProps && (l = t(n, u)), d = r(f, l, u), d;
  }
  function b() {
    return e.dependsOnOwnProps && (f = e(c, u)), t.dependsOnOwnProps && (l = t(n, u)), d = r(f, l, u), d;
  }
  function g() {
    const D = e(c, u), E = !i(D, f);
    return f = D, E && (d = r(f, l, u)), d;
  }
  function S(D, E) {
    const y = !s(E, u), h = !o(D, c, E, u);
    return c = D, u = E, y && h ? v() : y ? b() : h ? g() : d;
  }
  return function(E, y) {
    return a ? S(E, y) : p(E, y);
  };
}
function li(e, t) {
  let {
    initMapStateToProps: r,
    initMapDispatchToProps: n,
    initMergeProps: o
  } = t, s = Yn(t, ai);
  const i = r(e, s), a = n(e, s), c = o(e, s);
  return process.env.NODE_ENV !== "production" && ii(i, a, c), ci(i, a, c, e, s);
}
function ui(e, t) {
  const r = {};
  for (const n in e) {
    const o = e[n];
    typeof o == "function" && (r[n] = (...s) => t(o(...s)));
  }
  return r;
}
function di(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null)
    return !0;
  let r = t;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
function to(e, t, r) {
  di(e) || pr(`${r}() in ${t} must return a plain object. Instead received ${e}.`);
}
function Zt(e) {
  return function(r) {
    const n = e(r);
    function o() {
      return n;
    }
    return o.dependsOnOwnProps = !1, o;
  };
}
function un(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function ro(e, t) {
  return function(n, {
    displayName: o
  }) {
    const s = function(a, c) {
      return s.dependsOnOwnProps ? s.mapToProps(a, c) : s.mapToProps(a, void 0);
    };
    return s.dependsOnOwnProps = !0, s.mapToProps = function(a, c) {
      s.mapToProps = e, s.dependsOnOwnProps = un(e);
      let u = s(a, c);
      return typeof u == "function" && (s.mapToProps = u, s.dependsOnOwnProps = un(u), u = s(a, c)), process.env.NODE_ENV !== "production" && to(u, o, t), u;
    }, s;
  };
}
function mr(e, t) {
  return (r, n) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${n.wrappedComponentName}.`);
  };
}
function fi(e) {
  return e && typeof e == "object" ? Zt((t) => (
    // @ts-ignore
    ui(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    ro(e, "mapDispatchToProps")
  ) : mr(e, "mapDispatchToProps") : Zt((t) => ({
    dispatch: t
  }));
}
function pi(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    ro(e, "mapStateToProps")
  ) : mr(e, "mapStateToProps") : Zt(() => ({}));
}
function mi(e, t, r) {
  return Te({}, r, e, t);
}
function gi(e) {
  return function(r, {
    displayName: n,
    areMergedPropsEqual: o
  }) {
    let s = !1, i;
    return function(c, u, f) {
      const l = e(c, u, f);
      return s ? o(l, i) || (i = l) : (s = !0, i = l, process.env.NODE_ENV !== "production" && to(i, n, "mergeProps")), i;
    };
  };
}
function hi(e) {
  return e ? typeof e == "function" ? gi(e) : mr(e, "mergeProps") : () => mi;
}
function bi() {
  const e = Hs();
  let t = null, r = null;
  return {
    clear() {
      t = null, r = null;
    },
    notify() {
      e(() => {
        let n = t;
        for (; n; )
          n.callback(), n = n.next;
      });
    },
    get() {
      let n = [], o = t;
      for (; o; )
        n.push(o), o = o.next;
      return n;
    },
    subscribe(n) {
      let o = !0, s = r = {
        callback: n,
        next: null,
        prev: r
      };
      return s.prev ? s.prev.next = s : t = s, function() {
        !o || t === null || (o = !1, s.next ? s.next.prev = s.prev : r = s.prev, s.prev ? s.prev.next = s.next : t = s.next);
      };
    }
  };
}
const dn = {
  notify() {
  },
  get: () => []
};
function no(e, t) {
  let r, n = dn, o = 0, s = !1;
  function i(b) {
    f();
    const g = n.subscribe(b);
    let S = !1;
    return () => {
      S || (S = !0, g(), l());
    };
  }
  function a() {
    n.notify();
  }
  function c() {
    v.onStateChange && v.onStateChange();
  }
  function u() {
    return s;
  }
  function f() {
    o++, r || (r = t ? t.addNestedSub(c) : e.subscribe(c), n = bi());
  }
  function l() {
    o--, r && o === 0 && (r(), r = void 0, n.clear(), n = dn);
  }
  function d() {
    s || (s = !0, f());
  }
  function p() {
    s && (s = !1, l());
  }
  const v = {
    addNestedSub: i,
    notifyNestedSubs: a,
    handleChangeWrapper: c,
    isSubscribed: u,
    trySubscribe: d,
    tryUnsubscribe: p,
    getListeners: () => n
  };
  return v;
}
const vi = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", mt = vi ? N.useLayoutEffect : N.useEffect;
function fn(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Tt(e, t) {
  if (fn(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length)
    return !1;
  for (let o = 0; o < r.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, r[o]) || !fn(e[r[o]], t[r[o]]))
      return !1;
  return !0;
}
const yi = ["reactReduxForwardedRef"];
let oo = qs;
const Ei = (e) => {
  oo = e;
}, Di = [null, null], Si = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function Ni(e, t, r) {
  mt(() => e(...t), r);
}
function wi(e, t, r, n, o, s) {
  e.current = n, r.current = !1, o.current && (o.current = null, s());
}
function xi(e, t, r, n, o, s, i, a, c, u, f) {
  if (!e)
    return () => {
    };
  let l = !1, d = null;
  const p = () => {
    if (l || !a.current)
      return;
    const b = t.getState();
    let g, S;
    try {
      g = n(b, o.current);
    } catch (D) {
      S = D, d = D;
    }
    S || (d = null), g === s.current ? i.current || u() : (s.current = g, c.current = g, i.current = !0, f());
  };
  return r.onStateChange = p, r.trySubscribe(), p(), () => {
    if (l = !0, r.tryUnsubscribe(), r.onStateChange = null, d)
      throw d;
  };
}
function Oi(e, t) {
  return e === t;
}
let pn = !1;
function so(e, t, r, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: n,
  areStatesEqual: o = Oi,
  areOwnPropsEqual: s = Tt,
  areStatePropsEqual: i = Tt,
  areMergedPropsEqual: a = Tt,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: c = !1,
  // the context consumer to use
  context: u = Jn
} = {}) {
  process.env.NODE_ENV !== "production" && n !== void 0 && !pn && (pn = !0, pr('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const f = u, l = pi(e), d = fi(t), p = hi(r), v = !!e;
  return (g) => {
    if (process.env.NODE_ENV !== "production" && !ln.isValidElementType(g))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${Si(g)}`);
    const S = g.displayName || g.name || "Component", D = `Connect(${S})`, E = {
      shouldHandleStateChanges: v,
      displayName: D,
      wrappedComponentName: S,
      WrappedComponent: g,
      // @ts-ignore
      initMapStateToProps: l,
      // @ts-ignore
      initMapDispatchToProps: d,
      initMergeProps: p,
      areStatesEqual: o,
      areStatePropsEqual: i,
      areOwnPropsEqual: s,
      areMergedPropsEqual: a
    };
    function y(_) {
      const [O, R, A] = N.useMemo(() => {
        const {
          reactReduxForwardedRef: C
        } = _, fe = Yn(_, yi);
        return [_.context, C, fe];
      }, [_]), M = N.useMemo(() => O && O.Consumer && // @ts-ignore
      ln.isContextConsumer(/* @__PURE__ */ N.createElement(O.Consumer, null)) ? O : f, [O, f]), T = N.useContext(M), U = !!_.store && !!_.store.getState && !!_.store.dispatch, k = !!T && !!T.store;
      if (process.env.NODE_ENV !== "production" && !U && !k)
        throw new Error(`Could not find "store" in the context of "${D}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${D} in connect options.`);
      const j = U ? _.store : T.store, K = k ? T.getServerState : j.getState, q = N.useMemo(() => li(j.dispatch, E), [j]), [re, me] = N.useMemo(() => {
        if (!v)
          return Di;
        const C = no(j, U ? void 0 : T.subscription), fe = C.notifyNestedSubs.bind(C);
        return [C, fe];
      }, [j, U, T]), G = N.useMemo(() => U ? T : Te({}, T, {
        subscription: re
      }), [U, T, re]), ne = N.useRef(), de = N.useRef(A), oe = N.useRef(), J = N.useRef(!1);
      N.useRef(!1);
      const Ee = N.useRef(!1), De = N.useRef();
      mt(() => (Ee.current = !0, () => {
        Ee.current = !1;
      }), []);
      const Ae = N.useMemo(() => () => oe.current && A === de.current ? oe.current : q(j.getState(), A), [j, A]), Ge = N.useMemo(() => (fe) => re ? xi(
        v,
        j,
        re,
        // @ts-ignore
        q,
        de,
        ne,
        J,
        Ee,
        oe,
        me,
        fe
      ) : () => {
      }, [re]);
      Ni(wi, [de, ne, J, A, oe, me]);
      let he;
      try {
        he = oo(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          Ge,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          Ae,
          K ? () => q(K(), A) : Ae
        );
      } catch (C) {
        throw De.current && (C.message += `
The error may be correlated with this previous error:
${De.current.stack}

`), C;
      }
      mt(() => {
        De.current = void 0, oe.current = void 0, ne.current = he;
      });
      const Se = N.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ N.createElement(g, Te({}, he, {
          ref: R
        }))
      ), [R, g, he]);
      return N.useMemo(() => v ? /* @__PURE__ */ N.createElement(M.Provider, {
        value: G
      }, Se) : Se, [M, Se, G]);
    }
    const w = N.memo(y);
    if (w.WrappedComponent = g, w.displayName = y.displayName = D, c) {
      const O = N.forwardRef(function(A, M) {
        return /* @__PURE__ */ N.createElement(w, Te({}, A, {
          reactReduxForwardedRef: M
        }));
      });
      return O.displayName = D, O.WrappedComponent = g, sn(O, g);
    }
    return sn(w, g);
  };
}
function Ci({
  store: e,
  context: t,
  children: r,
  serverState: n,
  stabilityCheck: o = "once",
  noopCheck: s = "once"
}) {
  const i = N.useMemo(() => {
    const u = no(e);
    return {
      store: e,
      subscription: u,
      getServerState: n ? () => n : void 0,
      stabilityCheck: o,
      noopCheck: s
    };
  }, [e, n, o, s]), a = N.useMemo(() => e.getState(), [e]);
  mt(() => {
    const {
      subscription: u
    } = i;
    return u.onStateChange = u.notifyNestedSubs, u.trySubscribe(), a !== e.getState() && u.notifyNestedSubs(), () => {
      u.tryUnsubscribe(), u.onStateChange = void 0;
    };
  }, [i, a]);
  const c = t || Jn;
  return /* @__PURE__ */ N.createElement(c.Provider, {
    value: i
  }, r);
}
Ei(ur.useSyncExternalStore);
ks(ar.unstable_batchedUpdates);
function Ii(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function io(e, t) {
  var r = N.useState(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], n = N.useRef(!0), o = N.useRef(r), s = n.current || !!(t && o.current.inputs && Ii(t, o.current.inputs)), i = s ? o.current : {
    inputs: t,
    result: e()
  };
  return N.useEffect(function() {
    n.current = !1, o.current = i;
  }, [i]), i.result;
}
function _i(e, t) {
  return io(function() {
    return e;
  }, t);
}
var B = io, I = _i, pe = function(t) {
  var r = t.top, n = t.right, o = t.bottom, s = t.left, i = n - s, a = o - r, c = {
    top: r,
    right: n,
    bottom: o,
    left: s,
    width: i,
    height: a,
    x: s,
    y: r,
    center: {
      x: (n + s) / 2,
      y: (o + r) / 2
    }
  };
  return c;
}, gr = function(t, r) {
  return {
    top: t.top - r.top,
    left: t.left - r.left,
    bottom: t.bottom + r.bottom,
    right: t.right + r.right
  };
}, mn = function(t, r) {
  return {
    top: t.top + r.top,
    left: t.left + r.left,
    bottom: t.bottom - r.bottom,
    right: t.right - r.right
  };
}, Ai = function(t, r) {
  return {
    top: t.top + r.y,
    left: t.left + r.x,
    bottom: t.bottom + r.y,
    right: t.right + r.x
  };
}, Bt = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, hr = function(t) {
  var r = t.borderBox, n = t.margin, o = n === void 0 ? Bt : n, s = t.border, i = s === void 0 ? Bt : s, a = t.padding, c = a === void 0 ? Bt : a, u = pe(gr(r, o)), f = pe(mn(r, i)), l = pe(mn(f, c));
  return {
    marginBox: u,
    borderBox: pe(r),
    paddingBox: f,
    contentBox: l,
    margin: o,
    border: i,
    padding: c
  };
}, ce = function(t) {
  var r = t.slice(0, -2), n = t.slice(-2);
  if (n !== "px")
    return 0;
  var o = Number(r);
  return isNaN(o) && (process.env.NODE_ENV !== "production" ? Fr(!1, "Could not parse value [raw: " + t + ", without suffix: " + r + "]") : Fr(!1)), o;
}, Pi = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, gt = function(t, r) {
  var n = t.borderBox, o = t.border, s = t.margin, i = t.padding, a = Ai(n, r);
  return hr({
    borderBox: a,
    border: o,
    margin: s,
    padding: i
  });
}, ht = function(t, r) {
  return r === void 0 && (r = Pi()), gt(t, r);
}, ao = function(t, r) {
  var n = {
    top: ce(r.marginTop),
    right: ce(r.marginRight),
    bottom: ce(r.marginBottom),
    left: ce(r.marginLeft)
  }, o = {
    top: ce(r.paddingTop),
    right: ce(r.paddingRight),
    bottom: ce(r.paddingBottom),
    left: ce(r.paddingLeft)
  }, s = {
    top: ce(r.borderTopWidth),
    right: ce(r.borderRightWidth),
    bottom: ce(r.borderBottomWidth),
    left: ce(r.borderLeftWidth)
  };
  return hr({
    borderBox: t,
    margin: n,
    padding: o,
    border: s
  });
}, co = function(t) {
  var r = t.getBoundingClientRect(), n = window.getComputedStyle(t);
  return ao(r, n);
}, gn = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function Ri(e, t) {
  return !!(e === t || gn(e) && gn(t));
}
function Ti(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!Ri(e[r], t[r]))
      return !1;
  return !0;
}
function z(e, t) {
  t === void 0 && (t = Ti);
  var r = null;
  function n() {
    for (var o = [], s = 0; s < arguments.length; s++)
      o[s] = arguments[s];
    if (r && r.lastThis === this && t(o, r.lastArgs))
      return r.lastResult;
    var i = e.apply(this, o);
    return r = {
      lastResult: i,
      lastArgs: o,
      lastThis: this
    }, i;
  }
  return n.clear = function() {
    r = null;
  }, n;
}
var Bi = function(t) {
  var r = [], n = null, o = function() {
    for (var i = arguments.length, a = new Array(i), c = 0; c < i; c++)
      a[c] = arguments[c];
    r = a, !n && (n = requestAnimationFrame(function() {
      n = null, t.apply(void 0, r);
    }));
  };
  return o.cancel = function() {
    n && (cancelAnimationFrame(n), n = null);
  }, o;
};
const ze = Bi, Mi = process.env.NODE_ENV === "production", Li = /[ \t]{2,}/g, $i = /^[ \t]*/gm, hn = (e) => e.replace(Li, " ").replace($i, "").trim(), Vi = (e) => hn(`
  %c@hello-pangea/dnd

  %c${hn(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), Fi = (e) => [Vi(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], Gi = "__@hello-pangea/dnd-disable-dev-warnings";
function lo(e, t) {
  Mi || typeof window < "u" && window[Gi] || console[e](...Fi(t));
}
const W = lo.bind(null, "warn"), er = lo.bind(null, "error");
function be() {
}
function Ui(e, t) {
  return {
    ...e,
    ...t
  };
}
function le(e, t, r) {
  const n = t.map((o) => {
    const s = Ui(r, o.options);
    return e.addEventListener(o.eventName, o.fn, s), function() {
      e.removeEventListener(o.eventName, o.fn, s);
    };
  });
  return function() {
    n.forEach((s) => {
      s();
    });
  };
}
const Wi = process.env.NODE_ENV === "production", bn = "Invariant failed";
class Ye extends Error {
}
Ye.prototype.toString = function() {
  return this.message;
};
function m(e, t) {
  if (!e)
    throw Wi ? new Ye(bn) : new Ye(`${bn}: ${t || ""}`);
}
class ki extends x.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = be, this.onWindowError = (r) => {
      const n = this.getCallbacks();
      n.isDragging() && (n.tryAbort(), process.env.NODE_ENV !== "production" && W(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const o = r.error;
      o instanceof Ye && (r.preventDefault(), process.env.NODE_ENV !== "production" && er(o.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (r) => {
      this.callbacks = r;
    };
  }
  componentDidMount() {
    this.unbind = le(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof Ye) {
      process.env.NODE_ENV !== "production" && er(t.message), this.setState({});
      return;
    }
    throw t;
  }
  componentWillUnmount() {
    this.unbind();
  }
  render() {
    return this.props.children(this.setCallbacks);
  }
}
const Hi = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`, bt = (e) => e + 1, ji = (e) => `
  You have lifted an item in position ${bt(e.source.index)}
`, uo = (e, t) => {
  const r = e.droppableId === t.droppableId, n = bt(e.index), o = bt(t.index);
  return r ? `
      You have moved the item from position ${n}
      to position ${o}
    ` : `
    You have moved the item from position ${n}
    in list ${e.droppableId}
    to list ${t.droppableId}
    in position ${o}
  `;
}, fo = (e, t, r) => t.droppableId === r.droppableId ? `
      The item ${e}
      has been combined with ${r.draggableId}` : `
      The item ${e}
      in list ${t.droppableId}
      has been combined with ${r.draggableId}
      in list ${r.droppableId}
    `, qi = (e) => {
  const t = e.destination;
  if (t)
    return uo(e.source, t);
  const r = e.combine;
  return r ? fo(e.draggableId, e.source, r) : "You are over an area that cannot be dropped on";
}, vn = (e) => `
  The item has returned to its starting position
  of ${bt(e.index)}
`, zi = (e) => {
  if (e.reason === "CANCEL")
    return `
      Movement cancelled.
      ${vn(e.source)}
    `;
  const t = e.destination, r = e.combine;
  return t ? `
      You have dropped the item.
      ${uo(e.source, t)}
    ` : r ? `
      You have dropped the item.
      ${fo(e.draggableId, e.source, r)}
    ` : `
    The item has been dropped while not over a drop area.
    ${vn(e.source)}
  `;
}, Yi = {
  dragHandleUsageInstructions: Hi,
  onDragStart: ji,
  onDragUpdate: qi,
  onDragEnd: zi
};
var pt = Yi;
const Y = {
  x: 0,
  y: 0
}, Q = (e, t) => ({
  x: e.x + t.x,
  y: e.y + t.y
}), se = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), ve = (e, t) => e.x === t.x && e.y === t.y, Ve = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), Ie = (e, t, r = 0) => e === "x" ? {
  x: t,
  y: r
} : {
  x: r,
  y: t
}, Ke = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2), yn = (e, t) => Math.min(...t.map((r) => Ke(e, r))), po = (e) => (t) => ({
  x: e(t.x),
  y: e(t.y)
});
var Ki = (e, t) => {
  const r = pe({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return r.width <= 0 || r.height <= 0 ? null : r;
};
const rt = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), En = (e) => [{
  x: e.left,
  y: e.top
}, {
  x: e.right,
  y: e.top
}, {
  x: e.left,
  y: e.bottom
}, {
  x: e.right,
  y: e.bottom
}], Xi = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, Qi = (e, t) => t ? rt(e, t.scroll.diff.displacement) : e, Ji = (e, t, r) => r && r.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + r.increasedBy[t.line]
} : e, Zi = (e, t) => t && t.shouldClipSubject ? Ki(t.pageMarginBox, e) : pe(e);
var Be = ({
  page: e,
  withPlaceholder: t,
  axis: r,
  frame: n
}) => {
  const o = Qi(e.marginBox, n), s = Ji(o, r, t), i = Zi(s, n);
  return {
    page: e,
    withPlaceholder: t,
    active: i
  };
}, br = (e, t) => {
  e.frame || (process.env.NODE_ENV, m(!1));
  const r = e.frame, n = se(t, r.scroll.initial), o = Ve(n), s = {
    ...r,
    scroll: {
      initial: r.scroll.initial,
      current: t,
      diff: {
        value: n,
        displacement: o
      },
      max: r.scroll.max
    }
  }, i = Be({
    page: e.subject.page,
    withPlaceholder: e.subject.withPlaceholder,
    axis: e.axis,
    frame: s
  });
  return {
    ...e,
    frame: s,
    subject: i
  };
};
const mo = z((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {})), go = z((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {})), Et = z((e) => Object.values(e)), ea = z((e) => Object.values(e));
var _e = z((e, t) => ea(t).filter((n) => e === n.descriptor.droppableId).sort((n, o) => n.descriptor.index - o.descriptor.index));
function vr(e) {
  return e.at && e.at.type === "REORDER" ? e.at.destination : null;
}
function Dt(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
var St = z((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id)), ta = ({
  isMovingForward: e,
  draggable: t,
  destination: r,
  insideDestination: n,
  previousImpact: o
}) => {
  if (!r.isCombineEnabled || !vr(o))
    return null;
  function i(p) {
    const v = {
      type: "COMBINE",
      combine: {
        draggableId: p,
        droppableId: r.descriptor.id
      }
    };
    return {
      ...o,
      at: v
    };
  }
  const a = o.displaced.all, c = a.length ? a[0] : null;
  if (e)
    return c ? i(c) : null;
  const u = St(t, n);
  if (!c) {
    if (!u.length)
      return null;
    const p = u[u.length - 1];
    return i(p.descriptor.id);
  }
  const f = u.findIndex((p) => p.descriptor.id === c);
  f === -1 && (process.env.NODE_ENV !== "production" ? m(!1, "Could not find displaced item in set") : m(!1));
  const l = f - 1;
  if (l < 0)
    return null;
  const d = u[l];
  return i(d.descriptor.id);
}, Fe = (e, t) => e.descriptor.droppableId === t.descriptor.id;
const ho = {
  point: Y,
  value: 0
}, Xe = {
  invisible: {},
  visible: {},
  all: []
}, ra = {
  displaced: Xe,
  displacedBy: ho,
  at: null
};
var na = ra, ue = (e, t) => (r) => e <= r && r <= t, bo = (e) => {
  const t = ue(e.top, e.bottom), r = ue(e.left, e.right);
  return (n) => {
    if (t(n.top) && t(n.bottom) && r(n.left) && r(n.right))
      return !0;
    const s = t(n.top) || t(n.bottom), i = r(n.left) || r(n.right);
    if (s && i)
      return !0;
    const c = n.top < e.top && n.bottom > e.bottom, u = n.left < e.left && n.right > e.right;
    return c && u ? !0 : c && i || u && s;
  };
}, oa = (e) => {
  const t = ue(e.top, e.bottom), r = ue(e.left, e.right);
  return (n) => t(n.top) && t(n.bottom) && r(n.left) && r(n.right);
};
const yr = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, vo = {
  direction: "horizontal",
  line: "x",
  crossAxisLine: "y",
  start: "left",
  end: "right",
  size: "width",
  crossAxisStart: "top",
  crossAxisEnd: "bottom",
  crossAxisSize: "height"
};
var sa = (e) => (t) => {
  const r = ue(t.top, t.bottom), n = ue(t.left, t.right);
  return (o) => e === yr ? r(o.top) && r(o.bottom) : n(o.left) && n(o.right);
};
const ia = (e, t) => {
  const r = t.frame ? t.frame.scroll.diff.displacement : Y;
  return rt(e, r);
}, aa = (e, t, r) => t.subject.active ? r(t.subject.active)(e) : !1, ca = (e, t, r) => r(t)(e), Er = ({
  target: e,
  destination: t,
  viewport: r,
  withDroppableDisplacement: n,
  isVisibleThroughFrameFn: o
}) => {
  const s = n ? ia(e, t) : e;
  return aa(s, t, o) && ca(s, r, o);
}, la = (e) => Er({
  ...e,
  isVisibleThroughFrameFn: bo
}), yo = (e) => Er({
  ...e,
  isVisibleThroughFrameFn: oa
}), ua = (e) => Er({
  ...e,
  isVisibleThroughFrameFn: sa(e.destination.axis)
}), da = (e, t, r) => {
  if (typeof r == "boolean")
    return r;
  if (!t)
    return !0;
  const {
    invisible: n,
    visible: o
  } = t;
  if (n[e])
    return !1;
  const s = o[e];
  return s ? s.shouldAnimate : !0;
};
function fa(e, t) {
  const r = e.page.marginBox, n = {
    top: t.point.y,
    right: 0,
    bottom: 0,
    left: t.point.x
  };
  return pe(gr(r, n));
}
function Qe({
  afterDragging: e,
  destination: t,
  displacedBy: r,
  viewport: n,
  forceShouldAnimate: o,
  last: s
}) {
  return e.reduce(function(a, c) {
    const u = fa(c, r), f = c.descriptor.id;
    if (a.all.push(f), !la({
      target: u,
      destination: t,
      viewport: n,
      withDroppableDisplacement: !0
    }))
      return a.invisible[c.descriptor.id] = !0, a;
    const d = da(f, s, o), p = {
      draggableId: f,
      shouldAnimate: d
    };
    return a.visible[f] = p, a;
  }, {
    all: [],
    visible: {},
    invisible: {}
  });
}
function pa(e, t) {
  if (!e.length)
    return 0;
  const r = e[e.length - 1].descriptor.index;
  return t.inHomeList ? r : r + 1;
}
function Dn({
  insideDestination: e,
  inHomeList: t,
  displacedBy: r,
  destination: n
}) {
  const o = pa(e, {
    inHomeList: t
  });
  return {
    displaced: Xe,
    displacedBy: r,
    at: {
      type: "REORDER",
      destination: {
        droppableId: n.descriptor.id,
        index: o
      }
    }
  };
}
function vt({
  draggable: e,
  insideDestination: t,
  destination: r,
  viewport: n,
  displacedBy: o,
  last: s,
  index: i,
  forceShouldAnimate: a
}) {
  const c = Fe(e, r);
  if (i == null)
    return Dn({
      insideDestination: t,
      inHomeList: c,
      displacedBy: o,
      destination: r
    });
  const u = t.find((v) => v.descriptor.index === i);
  if (!u)
    return Dn({
      insideDestination: t,
      inHomeList: c,
      displacedBy: o,
      destination: r
    });
  const f = St(e, t), l = t.indexOf(u), d = f.slice(l);
  return {
    displaced: Qe({
      afterDragging: d,
      destination: r,
      displacedBy: o,
      last: s,
      viewport: n.frame,
      forceShouldAnimate: a
    }),
    displacedBy: o,
    at: {
      type: "REORDER",
      destination: {
        droppableId: r.descriptor.id,
        index: i
      }
    }
  };
}
function ye(e, t) {
  return !!t.effected[e];
}
var ma = ({
  isMovingForward: e,
  destination: t,
  draggables: r,
  combine: n,
  afterCritical: o
}) => {
  if (!t.isCombineEnabled)
    return null;
  const s = n.draggableId, a = r[s].descriptor.index;
  return ye(s, o) ? e ? a : a - 1 : e ? a + 1 : a;
}, ga = ({
  isMovingForward: e,
  isInHomeList: t,
  insideDestination: r,
  location: n
}) => {
  if (!r.length)
    return null;
  const o = n.index, s = e ? o + 1 : o - 1, i = r[0].descriptor.index, a = r[r.length - 1].descriptor.index, c = t ? a : a + 1;
  return s < i || s > c ? null : s;
}, ha = ({
  isMovingForward: e,
  isInHomeList: t,
  draggable: r,
  draggables: n,
  destination: o,
  insideDestination: s,
  previousImpact: i,
  viewport: a,
  afterCritical: c
}) => {
  const u = i.at;
  if (u || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot move in direction without previous impact location") : m(!1)), u.type === "REORDER") {
    const l = ga({
      isMovingForward: e,
      isInHomeList: t,
      location: u.destination,
      insideDestination: s
    });
    return l == null ? null : vt({
      draggable: r,
      insideDestination: s,
      destination: o,
      viewport: a,
      last: i.displaced,
      displacedBy: i.displacedBy,
      index: l
    });
  }
  const f = ma({
    isMovingForward: e,
    destination: o,
    displaced: i.displaced,
    draggables: n,
    combine: u.combine,
    afterCritical: c
  });
  return f == null ? null : vt({
    draggable: r,
    insideDestination: s,
    destination: o,
    viewport: a,
    last: i.displaced,
    displacedBy: i.displacedBy,
    index: f
  });
}, ba = ({
  displaced: e,
  afterCritical: t,
  combineWith: r,
  displacedBy: n
}) => {
  const o = !!(e.visible[r] || e.invisible[r]);
  return ye(r, t) ? o ? Y : Ve(n.point) : o ? n.point : Y;
}, va = ({
  afterCritical: e,
  impact: t,
  draggables: r
}) => {
  const n = Dt(t);
  n || (process.env.NODE_ENV, m(!1));
  const o = n.draggableId, s = r[o].page.borderBox.center, i = ba({
    displaced: t.displaced,
    afterCritical: e,
    combineWith: o,
    displacedBy: t.displacedBy
  });
  return Q(s, i);
};
const Eo = (e, t) => t.margin[e.start] + t.borderBox[e.size] / 2, ya = (e, t) => t.margin[e.end] + t.borderBox[e.size] / 2, Dr = (e, t, r) => t[e.crossAxisStart] + r.margin[e.crossAxisStart] + r.borderBox[e.crossAxisSize] / 2, Sn = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: r
}) => Ie(e.line, t.marginBox[e.end] + Eo(e, r), Dr(e, t.marginBox, r)), Nn = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: r
}) => Ie(e.line, t.marginBox[e.start] - ya(e, r), Dr(e, t.marginBox, r)), Ea = ({
  axis: e,
  moveInto: t,
  isMoving: r
}) => Ie(e.line, t.contentBox[e.start] + Eo(e, r), Dr(e, t.contentBox, r));
var Da = ({
  impact: e,
  draggable: t,
  draggables: r,
  droppable: n,
  afterCritical: o
}) => {
  const s = _e(n.descriptor.id, r), i = t.page, a = n.axis;
  if (!s.length)
    return Ea({
      axis: a,
      moveInto: n.page,
      isMoving: i
    });
  const {
    displaced: c,
    displacedBy: u
  } = e, f = c.all[0];
  if (f) {
    const d = r[f];
    if (ye(f, o))
      return Nn({
        axis: a,
        moveRelativeTo: d.page,
        isMoving: i
      });
    const p = gt(d.page, u.point);
    return Nn({
      axis: a,
      moveRelativeTo: p,
      isMoving: i
    });
  }
  const l = s[s.length - 1];
  if (l.descriptor.id === t.descriptor.id)
    return i.borderBox.center;
  if (ye(l.descriptor.id, o)) {
    const d = gt(l.page, Ve(o.displacedBy.point));
    return Sn({
      axis: a,
      moveRelativeTo: d,
      isMoving: i
    });
  }
  return Sn({
    axis: a,
    moveRelativeTo: l.page,
    isMoving: i
  });
}, tr = (e, t) => {
  const r = e.frame;
  return r ? Q(t, r.scroll.diff.displacement) : t;
};
const Sa = ({
  impact: e,
  draggable: t,
  droppable: r,
  draggables: n,
  afterCritical: o
}) => {
  const s = t.page.borderBox.center, i = e.at;
  return !r || !i ? s : i.type === "REORDER" ? Da({
    impact: e,
    draggable: t,
    draggables: n,
    droppable: r,
    afterCritical: o
  }) : va({
    impact: e,
    draggables: n,
    afterCritical: o
  });
};
var Nt = (e) => {
  const t = Sa(e), r = e.droppable;
  return r ? tr(r, t) : t;
}, Do = (e, t) => {
  const r = se(t, e.scroll.initial), n = Ve(r);
  return {
    frame: pe({
      top: t.y,
      bottom: t.y + e.frame.height,
      left: t.x,
      right: t.x + e.frame.width
    }),
    scroll: {
      initial: e.scroll.initial,
      max: e.scroll.max,
      current: t,
      diff: {
        value: r,
        displacement: n
      }
    }
  };
};
function wn(e, t) {
  return e.map((r) => t[r]);
}
function Na(e, t) {
  for (let r = 0; r < t.length; r++) {
    const n = t[r].visible[e];
    if (n)
      return n;
  }
  return null;
}
var wa = ({
  impact: e,
  viewport: t,
  destination: r,
  draggables: n,
  maxScrollChange: o
}) => {
  const s = Do(t, Q(t.scroll.current, o)), i = r.frame ? br(r, Q(r.frame.scroll.current, o)) : r, a = e.displaced, c = Qe({
    afterDragging: wn(a.all, n),
    destination: r,
    displacedBy: e.displacedBy,
    viewport: s.frame,
    last: a,
    forceShouldAnimate: !1
  }), u = Qe({
    afterDragging: wn(a.all, n),
    destination: i,
    displacedBy: e.displacedBy,
    viewport: t.frame,
    last: a,
    forceShouldAnimate: !1
  }), f = {}, l = {}, d = [a, c, u];
  return a.all.forEach((v) => {
    const b = Na(v, d);
    if (b) {
      l[v] = b;
      return;
    }
    f[v] = !0;
  }), {
    ...e,
    displaced: {
      all: a.all,
      invisible: f,
      visible: l
    }
  };
}, xa = (e, t) => Q(e.scroll.diff.displacement, t), Sr = ({
  pageBorderBoxCenter: e,
  draggable: t,
  viewport: r
}) => {
  const n = xa(r, e), o = se(n, t.page.borderBox.center);
  return Q(t.client.borderBox.center, o);
}, So = ({
  draggable: e,
  destination: t,
  newPageBorderBoxCenter: r,
  viewport: n,
  withDroppableDisplacement: o,
  onlyOnMainAxis: s = !1
}) => {
  const i = se(r, e.page.borderBox.center), c = {
    target: rt(e.page.borderBox, i),
    destination: t,
    withDroppableDisplacement: o,
    viewport: n
  };
  return s ? ua(c) : yo(c);
}, Oa = ({
  isMovingForward: e,
  draggable: t,
  destination: r,
  draggables: n,
  previousImpact: o,
  viewport: s,
  previousPageBorderBoxCenter: i,
  previousClientSelection: a,
  afterCritical: c
}) => {
  if (!r.isEnabled)
    return null;
  const u = _e(r.descriptor.id, n), f = Fe(t, r), l = ta({
    isMovingForward: e,
    draggable: t,
    destination: r,
    insideDestination: u,
    previousImpact: o
  }) || ha({
    isMovingForward: e,
    isInHomeList: f,
    draggable: t,
    draggables: n,
    destination: r,
    insideDestination: u,
    previousImpact: o,
    viewport: s,
    afterCritical: c
  });
  if (!l)
    return null;
  const d = Nt({
    impact: l,
    draggable: t,
    droppable: r,
    draggables: n,
    afterCritical: c
  });
  if (So({
    draggable: t,
    destination: r,
    newPageBorderBoxCenter: d,
    viewport: s.frame,
    withDroppableDisplacement: !1,
    onlyOnMainAxis: !0
  }))
    return {
      clientSelection: Sr({
        pageBorderBoxCenter: d,
        draggable: t,
        viewport: s
      }),
      impact: l,
      scrollJumpRequest: null
    };
  const v = se(d, i), b = wa({
    impact: l,
    viewport: s,
    destination: r,
    draggables: n,
    maxScrollChange: v
  });
  return {
    clientSelection: a,
    impact: b,
    scrollJumpRequest: v
  };
};
const Z = (e) => {
  const t = e.subject.active;
  return t || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot get clipped area from droppable") : m(!1)), t;
};
var Ca = ({
  isMovingForward: e,
  pageBorderBoxCenter: t,
  source: r,
  droppables: n,
  viewport: o
}) => {
  const s = r.subject.active;
  if (!s)
    return null;
  const i = r.axis, a = ue(s[i.start], s[i.end]), c = Et(n).filter((f) => f !== r).filter((f) => f.isEnabled).filter((f) => !!f.subject.active).filter((f) => bo(o.frame)(Z(f))).filter((f) => {
    const l = Z(f);
    return e ? s[i.crossAxisEnd] < l[i.crossAxisEnd] : l[i.crossAxisStart] < s[i.crossAxisStart];
  }).filter((f) => {
    const l = Z(f), d = ue(l[i.start], l[i.end]);
    return a(l[i.start]) || a(l[i.end]) || d(s[i.start]) || d(s[i.end]);
  }).sort((f, l) => {
    const d = Z(f)[i.crossAxisStart], p = Z(l)[i.crossAxisStart];
    return e ? d - p : p - d;
  }).filter((f, l, d) => Z(f)[i.crossAxisStart] === Z(d[0])[i.crossAxisStart]);
  if (!c.length)
    return null;
  if (c.length === 1)
    return c[0];
  const u = c.filter((f) => ue(Z(f)[i.start], Z(f)[i.end])(t[i.line]));
  return u.length === 1 ? u[0] : u.length > 1 ? u.sort((f, l) => Z(f)[i.start] - Z(l)[i.start])[0] : c.sort((f, l) => {
    const d = yn(t, En(Z(f))), p = yn(t, En(Z(l)));
    return d !== p ? d - p : Z(f)[i.start] - Z(l)[i.start];
  })[0];
};
const xn = (e, t) => {
  const r = e.page.borderBox.center;
  return ye(e.descriptor.id, t) ? se(r, t.displacedBy.point) : r;
}, Ia = (e, t) => {
  const r = e.page.borderBox;
  return ye(e.descriptor.id, t) ? rt(r, Ve(t.displacedBy.point)) : r;
};
var _a = ({
  pageBorderBoxCenter: e,
  viewport: t,
  destination: r,
  insideDestination: n,
  afterCritical: o
}) => n.filter((i) => yo({
  target: Ia(i, o),
  destination: r,
  viewport: t.frame,
  withDroppableDisplacement: !0
})).sort((i, a) => {
  const c = Ke(e, tr(r, xn(i, o))), u = Ke(e, tr(r, xn(a, o)));
  return c < u ? -1 : u < c ? 1 : i.descriptor.index - a.descriptor.index;
})[0] || null, nt = z(function(t, r) {
  const n = r[t.line];
  return {
    value: n,
    point: Ie(t.line, n)
  };
});
const Aa = (e, t, r) => {
  const n = e.axis;
  if (e.descriptor.mode === "virtual")
    return Ie(n.line, t[n.line]);
  const o = e.subject.page.contentBox[n.size], c = _e(e.descriptor.id, r).reduce((u, f) => u + f.client.marginBox[n.size], 0) + t[n.line] - o;
  return c <= 0 ? null : Ie(n.line, c);
}, No = (e, t) => ({
  ...e,
  scroll: {
    ...e.scroll,
    max: t
  }
}), wo = (e, t, r) => {
  const n = e.frame;
  Fe(t, e) && (process.env.NODE_ENV !== "production" ? m(!1, "Should not add placeholder space to home list") : m(!1)), e.subject.withPlaceholder && (process.env.NODE_ENV !== "production" ? m(!1, "Cannot add placeholder size to a subject when it already has one") : m(!1));
  const o = nt(e.axis, t.displaceBy).point, s = Aa(e, o, r), i = {
    placeholderSize: o,
    increasedBy: s,
    oldFrameMaxScroll: e.frame ? e.frame.scroll.max : null
  };
  if (!n) {
    const f = Be({
      page: e.subject.page,
      withPlaceholder: i,
      axis: e.axis,
      frame: e.frame
    });
    return {
      ...e,
      subject: f
    };
  }
  const a = s ? Q(n.scroll.max, s) : n.scroll.max, c = No(n, a), u = Be({
    page: e.subject.page,
    withPlaceholder: i,
    axis: e.axis,
    frame: c
  });
  return {
    ...e,
    subject: u,
    frame: c
  };
}, Pa = (e) => {
  const t = e.subject.withPlaceholder;
  t || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot remove placeholder form subject when there was none") : m(!1));
  const r = e.frame;
  if (!r) {
    const i = Be({
      page: e.subject.page,
      axis: e.axis,
      frame: null,
      withPlaceholder: null
    });
    return {
      ...e,
      subject: i
    };
  }
  const n = t.oldFrameMaxScroll;
  n || (process.env.NODE_ENV !== "production" ? m(!1, "Expected droppable with frame to have old max frame scroll when removing placeholder") : m(!1));
  const o = No(r, n), s = Be({
    page: e.subject.page,
    axis: e.axis,
    frame: o,
    withPlaceholder: null
  });
  return {
    ...e,
    subject: s,
    frame: o
  };
};
var Ra = ({
  previousPageBorderBoxCenter: e,
  moveRelativeTo: t,
  insideDestination: r,
  draggable: n,
  draggables: o,
  destination: s,
  viewport: i,
  afterCritical: a
}) => {
  if (!t) {
    if (r.length)
      return null;
    const l = {
      displaced: Xe,
      displacedBy: ho,
      at: {
        type: "REORDER",
        destination: {
          droppableId: s.descriptor.id,
          index: 0
        }
      }
    }, d = Nt({
      impact: l,
      draggable: n,
      droppable: s,
      draggables: o,
      afterCritical: a
    }), p = Fe(n, s) ? s : wo(s, n, o);
    return So({
      draggable: n,
      destination: p,
      newPageBorderBoxCenter: d,
      viewport: i.frame,
      withDroppableDisplacement: !1,
      onlyOnMainAxis: !0
    }) ? l : null;
  }
  const c = e[s.axis.line] <= t.page.borderBox.center[s.axis.line], u = (() => {
    const l = t.descriptor.index;
    return t.descriptor.id === n.descriptor.id || c ? l : l + 1;
  })(), f = nt(s.axis, n.displaceBy);
  return vt({
    draggable: n,
    insideDestination: r,
    destination: s,
    viewport: i,
    displacedBy: f,
    last: Xe,
    index: u
  });
}, Ta = ({
  isMovingForward: e,
  previousPageBorderBoxCenter: t,
  draggable: r,
  isOver: n,
  draggables: o,
  droppables: s,
  viewport: i,
  afterCritical: a
}) => {
  const c = Ca({
    isMovingForward: e,
    pageBorderBoxCenter: t,
    source: n,
    droppables: s,
    viewport: i
  });
  if (!c)
    return null;
  const u = _e(c.descriptor.id, o), f = _a({
    pageBorderBoxCenter: t,
    viewport: i,
    destination: c,
    insideDestination: u,
    afterCritical: a
  }), l = Ra({
    previousPageBorderBoxCenter: t,
    destination: c,
    draggable: r,
    draggables: o,
    moveRelativeTo: f,
    insideDestination: u,
    viewport: i,
    afterCritical: a
  });
  if (!l)
    return null;
  const d = Nt({
    impact: l,
    draggable: r,
    droppable: c,
    draggables: o,
    afterCritical: a
  });
  return {
    clientSelection: Sr({
      pageBorderBoxCenter: d,
      draggable: r,
      viewport: i
    }),
    impact: l,
    scrollJumpRequest: null
  };
}, ie = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const Ba = (e, t) => {
  const r = ie(e);
  return r ? t[r] : null;
};
var Ma = ({
  state: e,
  type: t
}) => {
  const r = Ba(e.impact, e.dimensions.droppables), n = !!r, o = e.dimensions.droppables[e.critical.droppable.id], s = r || o, i = s.axis.direction, a = i === "vertical" && (t === "MOVE_UP" || t === "MOVE_DOWN") || i === "horizontal" && (t === "MOVE_LEFT" || t === "MOVE_RIGHT");
  if (a && !n)
    return null;
  const c = t === "MOVE_DOWN" || t === "MOVE_RIGHT", u = e.dimensions.draggables[e.critical.draggable.id], f = e.current.page.borderBoxCenter, {
    draggables: l,
    droppables: d
  } = e.dimensions;
  return a ? Oa({
    isMovingForward: c,
    previousPageBorderBoxCenter: f,
    draggable: u,
    destination: s,
    draggables: l,
    viewport: e.viewport,
    previousClientSelection: e.current.client.selection,
    previousImpact: e.impact,
    afterCritical: e.afterCritical
  }) : Ta({
    isMovingForward: c,
    previousPageBorderBoxCenter: f,
    draggable: u,
    isOver: s,
    draggables: l,
    droppables: d,
    viewport: e.viewport,
    afterCritical: e.afterCritical
  });
};
function xe(e) {
  return e.phase === "DRAGGING" || e.phase === "COLLECTING";
}
function xo(e) {
  const t = ue(e.top, e.bottom), r = ue(e.left, e.right);
  return function(o) {
    return t(o.y) && r(o.x);
  };
}
function La(e, t) {
  return e.left < t.right && e.right > t.left && e.top < t.bottom && e.bottom > t.top;
}
function $a({
  pageBorderBox: e,
  draggable: t,
  candidates: r
}) {
  const n = t.page.borderBox.center, o = r.map((s) => {
    const i = s.axis, a = Ie(s.axis.line, e.center[i.line], s.page.borderBox.center[i.crossAxisLine]);
    return {
      id: s.descriptor.id,
      distance: Ke(n, a)
    };
  }).sort((s, i) => i.distance - s.distance);
  return o[0] ? o[0].id : null;
}
function Va({
  pageBorderBox: e,
  draggable: t,
  droppables: r
}) {
  const n = Et(r).filter((o) => {
    if (!o.isEnabled)
      return !1;
    const s = o.subject.active;
    if (!s || !La(e, s))
      return !1;
    if (xo(s)(e.center))
      return !0;
    const i = o.axis, a = s.center[i.crossAxisLine], c = e[i.crossAxisStart], u = e[i.crossAxisEnd], f = ue(s[i.crossAxisStart], s[i.crossAxisEnd]), l = f(c), d = f(u);
    return !l && !d ? !0 : l ? c < a : u > a;
  });
  return n.length ? n.length === 1 ? n[0].descriptor.id : $a({
    pageBorderBox: e,
    draggable: t,
    candidates: n
  }) : null;
}
const Oo = (e, t) => pe(rt(e, t));
var Fa = (e, t) => {
  const r = e.frame;
  return r ? Oo(t, r.scroll.diff.value) : t;
};
function Co({
  displaced: e,
  id: t
}) {
  return !!(e.visible[t] || e.invisible[t]);
}
function Ga({
  draggable: e,
  closest: t,
  inHomeList: r
}) {
  return t ? r && t.descriptor.index > e.descriptor.index ? t.descriptor.index - 1 : t.descriptor.index : null;
}
var Ua = ({
  pageBorderBoxWithDroppableScroll: e,
  draggable: t,
  destination: r,
  insideDestination: n,
  last: o,
  viewport: s,
  afterCritical: i
}) => {
  const a = r.axis, c = nt(r.axis, t.displaceBy), u = c.value, f = e[a.start], l = e[a.end], p = St(t, n).find((b) => {
    const g = b.descriptor.id, S = b.page.borderBox.center[a.line], D = ye(g, i), E = Co({
      displaced: o,
      id: g
    });
    return D ? E ? l <= S : f < S - u : E ? l <= S + u : f < S;
  }) || null, v = Ga({
    draggable: t,
    closest: p,
    inHomeList: Fe(t, r)
  });
  return vt({
    draggable: t,
    insideDestination: n,
    destination: r,
    viewport: s,
    last: o,
    displacedBy: c,
    index: v
  });
};
const Wa = 4;
var ka = ({
  draggable: e,
  pageBorderBoxWithDroppableScroll: t,
  previousImpact: r,
  destination: n,
  insideDestination: o,
  afterCritical: s
}) => {
  if (!n.isCombineEnabled)
    return null;
  const i = n.axis, a = nt(n.axis, e.displaceBy), c = a.value, u = t[i.start], f = t[i.end], d = St(e, o).find((v) => {
    const b = v.descriptor.id, g = v.page.borderBox, D = g[i.size] / Wa, E = ye(b, s), y = Co({
      displaced: r.displaced,
      id: b
    });
    return E ? y ? f > g[i.start] + D && f < g[i.end] - D : u > g[i.start] - c + D && u < g[i.end] - c - D : y ? f > g[i.start] + c + D && f < g[i.end] + c - D : u > g[i.start] + D && u < g[i.end] - D;
  });
  return d ? {
    displacedBy: a,
    displaced: r.displaced,
    at: {
      type: "COMBINE",
      combine: {
        draggableId: d.descriptor.id,
        droppableId: n.descriptor.id
      }
    }
  } : null;
}, Io = ({
  pageOffset: e,
  draggable: t,
  draggables: r,
  droppables: n,
  previousImpact: o,
  viewport: s,
  afterCritical: i
}) => {
  const a = Oo(t.page.borderBox, e), c = Va({
    pageBorderBox: a,
    draggable: t,
    droppables: n
  });
  if (!c)
    return na;
  const u = n[c], f = _e(u.descriptor.id, r), l = Fa(u, a);
  return ka({
    pageBorderBoxWithDroppableScroll: l,
    draggable: t,
    previousImpact: o,
    destination: u,
    insideDestination: f,
    afterCritical: i
  }) || Ua({
    pageBorderBoxWithDroppableScroll: l,
    draggable: t,
    destination: u,
    insideDestination: f,
    last: o.displaced,
    viewport: s,
    afterCritical: i
  });
}, Nr = (e, t) => ({
  ...e,
  [t.descriptor.id]: t
});
const Ha = ({
  previousImpact: e,
  impact: t,
  droppables: r
}) => {
  const n = ie(e), o = ie(t);
  if (!n || n === o)
    return r;
  const s = r[n];
  if (!s.subject.withPlaceholder)
    return r;
  const i = Pa(s);
  return Nr(r, i);
};
var ja = ({
  draggable: e,
  draggables: t,
  droppables: r,
  previousImpact: n,
  impact: o
}) => {
  const s = Ha({
    previousImpact: n,
    impact: o,
    droppables: r
  }), i = ie(o);
  if (!i)
    return s;
  const a = r[i];
  if (Fe(e, a) || a.subject.withPlaceholder)
    return s;
  const c = wo(a, e, t);
  return Nr(s, c);
}, He = ({
  state: e,
  clientSelection: t,
  dimensions: r,
  viewport: n,
  impact: o,
  scrollJumpRequest: s
}) => {
  const i = n || e.viewport, a = r || e.dimensions, c = t || e.current.client.selection, u = se(c, e.initial.client.selection), f = {
    offset: u,
    selection: c,
    borderBoxCenter: Q(e.initial.client.borderBoxCenter, u)
  }, l = {
    selection: Q(f.selection, i.scroll.current),
    borderBoxCenter: Q(f.borderBoxCenter, i.scroll.current),
    offset: Q(f.offset, i.scroll.diff.value)
  }, d = {
    client: f,
    page: l
  };
  if (e.phase === "COLLECTING")
    return {
      ...e,
      dimensions: a,
      viewport: i,
      current: d
    };
  const p = a.draggables[e.critical.draggable.id], v = o || Io({
    pageOffset: l.offset,
    draggable: p,
    draggables: a.draggables,
    droppables: a.droppables,
    previousImpact: e.impact,
    viewport: i,
    afterCritical: e.afterCritical
  }), b = ja({
    draggable: p,
    impact: v,
    previousImpact: e.impact,
    draggables: a.draggables,
    droppables: a.droppables
  });
  return {
    ...e,
    current: d,
    dimensions: {
      draggables: a.draggables,
      droppables: b
    },
    impact: v,
    viewport: i,
    scrollJumpRequest: s || null,
    forceShouldAnimate: s ? !1 : null
  };
};
function qa(e, t) {
  return e.map((r) => t[r]);
}
var _o = ({
  impact: e,
  viewport: t,
  draggables: r,
  destination: n,
  forceShouldAnimate: o
}) => {
  const s = e.displaced, i = qa(s.all, r), a = Qe({
    afterDragging: i,
    destination: n,
    displacedBy: e.displacedBy,
    viewport: t.frame,
    forceShouldAnimate: o,
    last: s
  });
  return {
    ...e,
    displaced: a
  };
}, Ao = ({
  impact: e,
  draggable: t,
  droppable: r,
  draggables: n,
  viewport: o,
  afterCritical: s
}) => {
  const i = Nt({
    impact: e,
    draggable: t,
    draggables: n,
    droppable: r,
    afterCritical: s
  });
  return Sr({
    pageBorderBoxCenter: i,
    draggable: t,
    viewport: o
  });
}, Po = ({
  state: e,
  dimensions: t,
  viewport: r
}) => {
  e.movementMode !== "SNAP" && (process.env.NODE_ENV, m(!1));
  const n = e.impact, o = r || e.viewport, s = t || e.dimensions, {
    draggables: i,
    droppables: a
  } = s, c = i[e.critical.draggable.id], u = ie(n);
  u || (process.env.NODE_ENV !== "production" ? m(!1, "Must be over a destination in SNAP movement mode") : m(!1));
  const f = a[u], l = _o({
    impact: n,
    viewport: o,
    destination: f,
    draggables: i
  }), d = Ao({
    impact: l,
    draggable: c,
    droppable: f,
    draggables: i,
    viewport: o,
    afterCritical: e.afterCritical
  });
  return He({
    impact: l,
    clientSelection: d,
    state: e,
    dimensions: s,
    viewport: o
  });
}, za = (e) => ({
  index: e.index,
  droppableId: e.droppableId
}), Ro = ({
  draggable: e,
  home: t,
  draggables: r,
  viewport: n
}) => {
  const o = nt(t.axis, e.displaceBy), s = _e(t.descriptor.id, r), i = s.indexOf(e);
  i === -1 && (process.env.NODE_ENV !== "production" ? m(!1, "Expected draggable to be inside home list") : m(!1));
  const a = s.slice(i + 1), c = a.reduce((d, p) => (d[p.descriptor.id] = !0, d), {}), u = {
    inVirtualList: t.descriptor.mode === "virtual",
    displacedBy: o,
    effected: c
  };
  return {
    impact: {
      displaced: Qe({
        afterDragging: a,
        destination: t,
        displacedBy: o,
        last: null,
        viewport: n.frame,
        forceShouldAnimate: !1
      }),
      displacedBy: o,
      at: {
        type: "REORDER",
        destination: za(e.descriptor)
      }
    },
    afterCritical: u
  };
}, Ya = (e, t) => ({
  draggables: e.draggables,
  droppables: Nr(e.droppables, t)
});
const ot = (e) => {
  process.env.NODE_ENV;
}, st = (e) => {
  process.env.NODE_ENV;
};
var Ka = ({
  draggable: e,
  offset: t,
  initialWindowScroll: r
}) => {
  const n = gt(e.client, t), o = ht(n, r);
  return {
    ...e,
    placeholder: {
      ...e.placeholder,
      client: n
    },
    client: n,
    page: o
  };
}, Xa = (e) => {
  const t = e.frame;
  return t || (process.env.NODE_ENV !== "production" ? m(!1, "Expected Droppable to have a frame") : m(!1)), t;
}, Qa = ({
  additions: e,
  updatedDroppables: t,
  viewport: r
}) => {
  const n = r.scroll.diff.value;
  return e.map((o) => {
    const s = o.descriptor.droppableId, i = t[s], c = Xa(i).scroll.diff.value, u = Q(n, c);
    return Ka({
      draggable: o,
      offset: u,
      initialWindowScroll: r.scroll.initial
    });
  });
}, Ja = ({
  state: e,
  published: t
}) => {
  ot();
  const r = t.modified.map((S) => {
    const D = e.dimensions.droppables[S.droppableId];
    return br(D, S.scroll);
  }), n = {
    ...e.dimensions.droppables,
    ...mo(r)
  }, o = go(Qa({
    additions: t.additions,
    updatedDroppables: n,
    viewport: e.viewport
  })), s = {
    ...e.dimensions.draggables,
    ...o
  };
  t.removals.forEach((S) => {
    delete s[S];
  });
  const i = {
    droppables: n,
    draggables: s
  }, a = ie(e.impact), c = a ? i.droppables[a] : null, u = i.draggables[e.critical.draggable.id], f = i.droppables[e.critical.droppable.id], {
    impact: l,
    afterCritical: d
  } = Ro({
    draggable: u,
    home: f,
    draggables: s,
    viewport: e.viewport
  }), p = c && c.isCombineEnabled ? e.impact : l, v = Io({
    pageOffset: e.current.page.offset,
    draggable: i.draggables[e.critical.draggable.id],
    draggables: i.draggables,
    droppables: i.droppables,
    previousImpact: p,
    viewport: e.viewport,
    afterCritical: d
  });
  st();
  const b = {
    ...e,
    phase: "DRAGGING",
    impact: v,
    onLiftImpact: l,
    dimensions: i,
    afterCritical: d,
    forceShouldAnimate: !1
  };
  return e.phase === "COLLECTING" ? b : {
    ...b,
    phase: "DROP_PENDING",
    reason: e.reason,
    isWaiting: !1
  };
};
const rr = (e) => e.movementMode === "SNAP", Mt = (e, t, r) => {
  const n = Ya(e.dimensions, t);
  return !rr(e) || r ? He({
    state: e,
    dimensions: n
  }) : Po({
    state: e,
    dimensions: n
  });
};
function Lt(e) {
  return e.isDragging && e.movementMode === "SNAP" ? {
    ...e,
    scrollJumpRequest: null
  } : e;
}
const On = {
  phase: "IDLE",
  completed: null,
  shouldFlush: !1
};
var Za = (e = On, t) => {
  if (t.type === "FLUSH")
    return {
      ...On,
      shouldFlush: !0
    };
  if (t.type === "INITIAL_PUBLISH") {
    e.phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? m(!1, "INITIAL_PUBLISH must come after a IDLE phase") : m(!1));
    const {
      critical: r,
      clientSelection: n,
      viewport: o,
      dimensions: s,
      movementMode: i
    } = t.payload, a = s.draggables[r.draggable.id], c = s.droppables[r.droppable.id], u = {
      selection: n,
      borderBoxCenter: a.client.borderBox.center,
      offset: Y
    }, f = {
      client: u,
      page: {
        selection: Q(u.selection, o.scroll.initial),
        borderBoxCenter: Q(u.selection, o.scroll.initial),
        offset: Q(u.selection, o.scroll.diff.value)
      }
    }, l = Et(s.droppables).every((b) => !b.isFixedOnPage), {
      impact: d,
      afterCritical: p
    } = Ro({
      draggable: a,
      home: c,
      draggables: s.draggables,
      viewport: o
    });
    return {
      phase: "DRAGGING",
      isDragging: !0,
      critical: r,
      movementMode: i,
      dimensions: s,
      initial: f,
      current: f,
      isWindowScrollAllowed: l,
      impact: d,
      afterCritical: p,
      onLiftImpact: d,
      viewport: o,
      scrollJumpRequest: null,
      forceShouldAnimate: null
    };
  }
  if (t.type === "COLLECTION_STARTING")
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" ? e : (e.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? m(!1, `Collection cannot start from phase ${e.phase}`) : m(!1)), {
      ...e,
      phase: "COLLECTING"
    });
  if (t.type === "PUBLISH_WHILE_DRAGGING")
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? m(!1, `Unexpected ${t.type} received in phase ${e.phase}`) : m(!1)), Ja({
      state: e,
      published: t.payload
    });
  if (t.type === "MOVE") {
    if (e.phase === "DROP_PENDING")
      return e;
    xe(e) || (process.env.NODE_ENV !== "production" ? m(!1, `${t.type} not permitted in phase ${e.phase}`) : m(!1));
    const {
      client: r
    } = t.payload;
    return ve(r, e.current.client.selection) ? e : He({
      state: e,
      clientSelection: r,
      impact: rr(e) ? e.impact : null
    });
  }
  if (t.type === "UPDATE_DROPPABLE_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "COLLECTING")
      return Lt(e);
    xe(e) || (process.env.NODE_ENV !== "production" ? m(!1, `${t.type} not permitted in phase ${e.phase}`) : m(!1));
    const {
      id: r,
      newScroll: n
    } = t.payload, o = e.dimensions.droppables[r];
    if (!o)
      return e;
    const s = br(o, n);
    return Mt(e, s, !1);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    xe(e) || (process.env.NODE_ENV !== "production" ? m(!1, `Attempting to move in an unsupported phase ${e.phase}`) : m(!1));
    const {
      id: r,
      isEnabled: n
    } = t.payload, o = e.dimensions.droppables[r];
    o || (process.env.NODE_ENV !== "production" ? m(!1, `Cannot find Droppable[id: ${r}] to toggle its enabled state`) : m(!1)), o.isEnabled === n && (process.env.NODE_ENV !== "production" ? m(!1, `Trying to set droppable isEnabled to ${String(n)}
      but it is already ${String(o.isEnabled)}`) : m(!1));
    const s = {
      ...o,
      isEnabled: n
    };
    return Mt(e, s, !0);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_COMBINE_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    xe(e) || (process.env.NODE_ENV !== "production" ? m(!1, `Attempting to move in an unsupported phase ${e.phase}`) : m(!1));
    const {
      id: r,
      isCombineEnabled: n
    } = t.payload, o = e.dimensions.droppables[r];
    o || (process.env.NODE_ENV !== "production" ? m(!1, `Cannot find Droppable[id: ${r}] to toggle its isCombineEnabled state`) : m(!1)), o.isCombineEnabled === n && (process.env.NODE_ENV !== "production" ? m(!1, `Trying to set droppable isCombineEnabled to ${String(n)}
      but it is already ${String(o.isCombineEnabled)}`) : m(!1));
    const s = {
      ...o,
      isCombineEnabled: n
    };
    return Mt(e, s, !0);
  }
  if (t.type === "MOVE_BY_WINDOW_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "DROP_ANIMATING")
      return e;
    xe(e) || (process.env.NODE_ENV !== "production" ? m(!1, `Cannot move by window in phase ${e.phase}`) : m(!1)), e.isWindowScrollAllowed || (process.env.NODE_ENV !== "production" ? m(!1, "Window scrolling is currently not supported for fixed lists") : m(!1));
    const r = t.payload.newScroll;
    if (ve(e.viewport.scroll.current, r))
      return Lt(e);
    const n = Do(e.viewport, r);
    return rr(e) ? Po({
      state: e,
      viewport: n
    }) : He({
      state: e,
      viewport: n
    });
  }
  if (t.type === "UPDATE_VIEWPORT_MAX_SCROLL") {
    if (!xe(e))
      return e;
    const r = t.payload.maxScroll;
    if (ve(r, e.viewport.scroll.max))
      return e;
    const n = {
      ...e.viewport,
      scroll: {
        ...e.viewport.scroll,
        max: r
      }
    };
    return {
      ...e,
      viewport: n
    };
  }
  if (t.type === "MOVE_UP" || t.type === "MOVE_DOWN" || t.type === "MOVE_LEFT" || t.type === "MOVE_RIGHT") {
    if (e.phase === "COLLECTING" || e.phase === "DROP_PENDING")
      return e;
    e.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? m(!1, `${t.type} received while not in DRAGGING phase`) : m(!1));
    const r = Ma({
      state: e,
      type: t.type
    });
    return r ? He({
      state: e,
      impact: r.impact,
      clientSelection: r.clientSelection,
      scrollJumpRequest: r.scrollJumpRequest
    }) : e;
  }
  if (t.type === "DROP_PENDING") {
    const r = t.payload.reason;
    return e.phase !== "COLLECTING" && (process.env.NODE_ENV !== "production" ? m(!1, "Can only move into the DROP_PENDING phase from the COLLECTING phase") : m(!1)), {
      ...e,
      phase: "DROP_PENDING",
      isWaiting: !0,
      reason: r
    };
  }
  if (t.type === "DROP_ANIMATE") {
    const {
      completed: r,
      dropDuration: n,
      newHomeClientOffset: o
    } = t.payload;
    return e.phase === "DRAGGING" || e.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? m(!1, `Cannot animate drop from phase ${e.phase}`) : m(!1)), {
      phase: "DROP_ANIMATING",
      completed: r,
      dropDuration: n,
      newHomeClientOffset: o,
      dimensions: e.dimensions
    };
  }
  if (t.type === "DROP_COMPLETE") {
    const {
      completed: r
    } = t.payload;
    return {
      phase: "IDLE",
      completed: r,
      shouldFlush: !1
    };
  }
  return e;
};
const ec = (e) => ({
  type: "BEFORE_INITIAL_CAPTURE",
  payload: e
}), tc = (e) => ({
  type: "LIFT",
  payload: e
}), rc = (e) => ({
  type: "INITIAL_PUBLISH",
  payload: e
}), nc = (e) => ({
  type: "PUBLISH_WHILE_DRAGGING",
  payload: e
}), oc = () => ({
  type: "COLLECTION_STARTING",
  payload: null
}), sc = (e) => ({
  type: "UPDATE_DROPPABLE_SCROLL",
  payload: e
}), ic = (e) => ({
  type: "UPDATE_DROPPABLE_IS_ENABLED",
  payload: e
}), ac = (e) => ({
  type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
  payload: e
}), To = (e) => ({
  type: "MOVE",
  payload: e
}), cc = (e) => ({
  type: "MOVE_BY_WINDOW_SCROLL",
  payload: e
}), lc = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), uc = () => ({
  type: "MOVE_UP",
  payload: null
}), dc = () => ({
  type: "MOVE_DOWN",
  payload: null
}), fc = () => ({
  type: "MOVE_RIGHT",
  payload: null
}), pc = () => ({
  type: "MOVE_LEFT",
  payload: null
}), wr = () => ({
  type: "FLUSH",
  payload: null
}), mc = (e) => ({
  type: "DROP_ANIMATE",
  payload: e
}), xr = (e) => ({
  type: "DROP_COMPLETE",
  payload: e
}), Bo = (e) => ({
  type: "DROP",
  payload: e
}), gc = (e) => ({
  type: "DROP_PENDING",
  payload: e
}), Mo = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
});
function hc(e) {
  if (e.length <= 1)
    return;
  const t = e.map((o) => o.descriptor.index), r = {};
  for (let o = 1; o < t.length; o++) {
    const s = t[o], i = t[o - 1];
    s !== i + 1 && (r[s] = !0);
  }
  if (!Object.keys(r).length)
    return;
  const n = t.map((o) => !!r[o] ? `[🔥${o}]` : `${o}`).join(", ");
  process.env.NODE_ENV !== "production" && W(`
    Detected non-consecutive <Draggable /> indexes.

    (This can cause unexpected bugs)

    ${n}
  `);
}
function bc(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const r = _e(e.droppable.id, t.draggables);
    hc(r);
  }
}
var vc = (e) => ({
  getState: t,
  dispatch: r
}) => (n) => (o) => {
  if (o.type !== "LIFT") {
    n(o);
    return;
  }
  const {
    id: s,
    clientSelection: i,
    movementMode: a
  } = o.payload, c = t();
  c.phase === "DROP_ANIMATING" && r(xr({
    completed: c.completed
  })), t().phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? m(!1, "Unexpected phase to start a drag") : m(!1)), r(wr()), r(ec({
    draggableId: s,
    movementMode: a
  }));
  const f = {
    draggableId: s,
    scrollOptions: {
      shouldPublishImmediately: a === "SNAP"
    }
  }, {
    critical: l,
    dimensions: d,
    viewport: p
  } = e.startPublishing(f);
  bc(l, d), r(rc({
    critical: l,
    dimensions: d,
    clientSelection: i,
    movementMode: a,
    viewport: p
  }));
}, yc = (e) => () => (t) => (r) => {
  r.type === "INITIAL_PUBLISH" && e.dragging(), r.type === "DROP_ANIMATE" && e.dropping(r.payload.completed.result.reason), (r.type === "FLUSH" || r.type === "DROP_COMPLETE") && e.resting(), t(r);
};
const Or = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, Je = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, Lo = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, Ne = `${Lo.outOfTheWay}s ${Or.outOfTheWay}`, je = {
  fluid: `opacity ${Ne}`,
  snap: `transform ${Ne}, opacity ${Ne}`,
  drop: (e) => {
    const t = `${e}s ${Or.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${Ne}`,
  placeholder: `height ${Ne}, width ${Ne}, margin ${Ne}`
}, Cn = (e) => ve(e, Y) ? void 0 : `translate(${e.x}px, ${e.y}px)`, nr = {
  moveTo: Cn,
  drop: (e, t) => {
    const r = Cn(e);
    if (r)
      return t ? `${r} scale(${Je.scale.drop})` : r;
  }
}, {
  minDropTime: or,
  maxDropTime: $o
} = Lo, Ec = $o - or, In = 1500, Dc = 0.6;
var Sc = ({
  current: e,
  destination: t,
  reason: r
}) => {
  const n = Ke(e, t);
  if (n <= 0)
    return or;
  if (n >= In)
    return $o;
  const o = n / In, s = or + Ec * o, i = r === "CANCEL" ? s * Dc : s;
  return Number(i.toFixed(2));
}, Nc = ({
  impact: e,
  draggable: t,
  dimensions: r,
  viewport: n,
  afterCritical: o
}) => {
  const {
    draggables: s,
    droppables: i
  } = r, a = ie(e), c = a ? i[a] : null, u = i[t.descriptor.droppableId], f = Ao({
    impact: e,
    draggable: t,
    draggables: s,
    afterCritical: o,
    droppable: c || u,
    viewport: n
  });
  return se(f, t.client.borderBox.center);
}, wc = ({
  draggables: e,
  reason: t,
  lastImpact: r,
  home: n,
  viewport: o,
  onLiftImpact: s
}) => !r.at || t !== "DROP" ? {
  impact: _o({
    draggables: e,
    impact: s,
    destination: n,
    viewport: o,
    forceShouldAnimate: !0
  }),
  didDropInsideDroppable: !1
} : r.at.type === "REORDER" ? {
  impact: r,
  didDropInsideDroppable: !0
} : {
  impact: {
    ...r,
    displaced: Xe
  },
  didDropInsideDroppable: !0
};
const xc = ({
  getState: e,
  dispatch: t
}) => (r) => (n) => {
  if (n.type !== "DROP") {
    r(n);
    return;
  }
  const o = e(), s = n.payload.reason;
  if (o.phase === "COLLECTING") {
    t(gc({
      reason: s
    }));
    return;
  }
  if (o.phase === "IDLE")
    return;
  o.phase === "DROP_PENDING" && o.isWaiting && (process.env.NODE_ENV !== "production" ? m(!1, "A DROP action occurred while DROP_PENDING and still waiting") : m(!1)), o.phase === "DRAGGING" || o.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? m(!1, `Cannot drop in phase: ${o.phase}`) : m(!1));
  const a = o.critical, c = o.dimensions, u = c.draggables[o.critical.draggable.id], {
    impact: f,
    didDropInsideDroppable: l
  } = wc({
    reason: s,
    lastImpact: o.impact,
    afterCritical: o.afterCritical,
    onLiftImpact: o.onLiftImpact,
    home: o.dimensions.droppables[o.critical.droppable.id],
    viewport: o.viewport,
    draggables: o.dimensions.draggables
  }), d = l ? vr(f) : null, p = l ? Dt(f) : null, v = {
    index: a.draggable.index,
    droppableId: a.droppable.id
  }, b = {
    draggableId: u.descriptor.id,
    type: u.descriptor.type,
    source: v,
    reason: s,
    mode: o.movementMode,
    destination: d,
    combine: p
  }, g = Nc({
    impact: f,
    draggable: u,
    dimensions: c,
    viewport: o.viewport,
    afterCritical: o.afterCritical
  }), S = {
    critical: o.critical,
    afterCritical: o.afterCritical,
    result: b,
    impact: f
  };
  if (!(!ve(o.current.client.offset, g) || !!b.combine)) {
    t(xr({
      completed: S
    }));
    return;
  }
  const E = Sc({
    current: o.current.client.offset,
    destination: g,
    reason: s
  });
  t(mc({
    newHomeClientOffset: g,
    dropDuration: E,
    completed: S
  }));
};
var Oc = xc, Vo = () => ({
  x: window.pageXOffset,
  y: window.pageYOffset
});
function Cc(e) {
  return {
    eventName: "scroll",
    options: {
      passive: !0,
      capture: !1
    },
    fn: (t) => {
      t.target !== window && t.target !== window.document || e();
    }
  };
}
function Ic({
  onWindowScroll: e
}) {
  function t() {
    e(Vo());
  }
  const r = ze(t), n = Cc(r);
  let o = be;
  function s() {
    return o !== be;
  }
  function i() {
    s() && (process.env.NODE_ENV !== "production" ? m(!1, "Cannot start scroll listener when already active") : m(!1)), o = le(window, [n]);
  }
  function a() {
    s() || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot stop scroll listener when not active") : m(!1)), r.cancel(), o(), o = be;
  }
  return {
    start: i,
    stop: a,
    isActive: s
  };
}
const _c = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH", Ac = (e) => {
  const t = Ic({
    onWindowScroll: (r) => {
      e.dispatch(cc({
        newScroll: r
      }));
    }
  });
  return (r) => (n) => {
    !t.isActive() && n.type === "INITIAL_PUBLISH" && t.start(), t.isActive() && _c(n) && t.stop(), r(n);
  };
};
var Pc = Ac, Rc = (e) => {
  let t = !1, r = !1;
  const n = setTimeout(() => {
    r = !0;
  }), o = (s) => {
    if (t) {
      process.env.NODE_ENV !== "production" && W("Announcement already made. Not making a second announcement");
      return;
    }
    if (r) {
      process.env.NODE_ENV !== "production" && W(`
        Announcements cannot be made asynchronously.
        Default message has already been announced.
      `);
      return;
    }
    t = !0, e(s), clearTimeout(n);
  };
  return o.wasCalled = () => t, o;
}, Tc = () => {
  const e = [], t = (o) => {
    const s = e.findIndex((a) => a.timerId === o);
    s === -1 && (process.env.NODE_ENV !== "production" ? m(!1, "Could not find timer") : m(!1));
    const [i] = e.splice(s, 1);
    i.callback();
  };
  return {
    add: (o) => {
      const s = setTimeout(() => t(s)), i = {
        timerId: s,
        callback: o
      };
      e.push(i);
    },
    flush: () => {
      if (!e.length)
        return;
      const o = [...e];
      e.length = 0, o.forEach((s) => {
        clearTimeout(s.timerId), s.callback();
      });
    }
  };
};
const Bc = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.droppableId === t.droppableId && e.index === t.index, Mc = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.draggableId === t.draggableId && e.droppableId === t.droppableId, Lc = (e, t) => {
  if (e === t)
    return !0;
  const r = e.draggable.id === t.draggable.id && e.draggable.droppableId === t.draggable.droppableId && e.draggable.type === t.draggable.type && e.draggable.index === t.draggable.index, n = e.droppable.id === t.droppable.id && e.droppable.type === t.droppable.type;
  return r && n;
}, Ue = (e, t) => {
  ot(), t(), st();
}, ut = (e, t) => ({
  draggableId: e.draggable.id,
  type: e.droppable.type,
  source: {
    droppableId: e.droppable.id,
    index: e.draggable.index
  },
  mode: t
});
function $t(e, t, r, n) {
  if (!e) {
    r(n(t));
    return;
  }
  const o = Rc(r);
  e(t, {
    announce: o
  }), o.wasCalled() || r(n(t));
}
var $c = (e, t) => {
  const r = Tc();
  let n = null;
  const o = (l, d) => {
    n && (process.env.NODE_ENV !== "production" ? m(!1, "Cannot fire onBeforeCapture as a drag start has already been published") : m(!1)), Ue("onBeforeCapture", () => {
      const p = e().onBeforeCapture;
      p && p({
        draggableId: l,
        mode: d
      });
    });
  }, s = (l, d) => {
    n && (process.env.NODE_ENV !== "production" ? m(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : m(!1)), Ue("onBeforeDragStart", () => {
      const p = e().onBeforeDragStart;
      p && p(ut(l, d));
    });
  }, i = (l, d) => {
    n && (process.env.NODE_ENV !== "production" ? m(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : m(!1));
    const p = ut(l, d);
    n = {
      mode: d,
      lastCritical: l,
      lastLocation: p.source,
      lastCombine: null
    }, r.add(() => {
      Ue("onDragStart", () => $t(e().onDragStart, p, t, pt.onDragStart));
    });
  }, a = (l, d) => {
    const p = vr(d), v = Dt(d);
    n || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot fire onDragMove when onDragStart has not been called") : m(!1));
    const b = !Lc(l, n.lastCritical);
    b && (n.lastCritical = l);
    const g = !Bc(n.lastLocation, p);
    g && (n.lastLocation = p);
    const S = !Mc(n.lastCombine, v);
    if (S && (n.lastCombine = v), !b && !g && !S)
      return;
    const D = {
      ...ut(l, n.mode),
      combine: v,
      destination: p
    };
    r.add(() => {
      Ue("onDragUpdate", () => $t(e().onDragUpdate, D, t, pt.onDragUpdate));
    });
  }, c = () => {
    n || (process.env.NODE_ENV !== "production" ? m(!1, "Can only flush responders while dragging") : m(!1)), r.flush();
  }, u = (l) => {
    n || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot fire onDragEnd when there is no matching onDragStart") : m(!1)), n = null, Ue("onDragEnd", () => $t(e().onDragEnd, l, t, pt.onDragEnd));
  };
  return {
    beforeCapture: o,
    beforeStart: s,
    start: i,
    update: a,
    flush: c,
    drop: u,
    abort: () => {
      if (!n)
        return;
      const l = {
        ...ut(n.lastCritical, n.mode),
        combine: null,
        destination: null,
        reason: "CANCEL"
      };
      u(l);
    }
  };
}, Vc = (e, t) => {
  const r = $c(e, t);
  return (n) => (o) => (s) => {
    if (s.type === "BEFORE_INITIAL_CAPTURE") {
      r.beforeCapture(s.payload.draggableId, s.payload.movementMode);
      return;
    }
    if (s.type === "INITIAL_PUBLISH") {
      const a = s.payload.critical;
      r.beforeStart(a, s.payload.movementMode), o(s), r.start(a, s.payload.movementMode);
      return;
    }
    if (s.type === "DROP_COMPLETE") {
      const a = s.payload.completed.result;
      r.flush(), o(s), r.drop(a);
      return;
    }
    if (o(s), s.type === "FLUSH") {
      r.abort();
      return;
    }
    const i = n.getState();
    i.phase === "DRAGGING" && r.update(i.critical, i.impact);
  };
};
const Fc = (e) => (t) => (r) => {
  if (r.type !== "DROP_ANIMATION_FINISHED") {
    t(r);
    return;
  }
  const n = e.getState();
  n.phase !== "DROP_ANIMATING" && (process.env.NODE_ENV !== "production" ? m(!1, "Cannot finish a drop animating when no drop is occurring") : m(!1)), e.dispatch(xr({
    completed: n.completed
  }));
};
var Gc = Fc;
const Uc = (e) => {
  let t = null, r = null;
  function n() {
    r && (cancelAnimationFrame(r), r = null), t && (t(), t = null);
  }
  return (o) => (s) => {
    if ((s.type === "FLUSH" || s.type === "DROP_COMPLETE" || s.type === "DROP_ANIMATION_FINISHED") && n(), o(s), s.type !== "DROP_ANIMATE")
      return;
    const i = {
      eventName: "scroll",
      options: {
        capture: !0,
        passive: !1,
        once: !0
      },
      fn: function() {
        e.getState().phase === "DROP_ANIMATING" && e.dispatch(Mo());
      }
    };
    r = requestAnimationFrame(() => {
      r = null, t = le(window, [i]);
    });
  };
};
var Wc = Uc, kc = (e) => () => (t) => (r) => {
  (r.type === "DROP_COMPLETE" || r.type === "FLUSH" || r.type === "DROP_ANIMATE") && e.stopPublishing(), t(r);
}, Hc = (e) => {
  let t = !1;
  return () => (r) => (n) => {
    if (n.type === "INITIAL_PUBLISH") {
      t = !0, e.tryRecordFocus(n.payload.critical.draggable.id), r(n), e.tryRestoreFocusRecorded();
      return;
    }
    if (r(n), !!t) {
      if (n.type === "FLUSH") {
        t = !1, e.tryRestoreFocusRecorded();
        return;
      }
      if (n.type === "DROP_COMPLETE") {
        t = !1;
        const o = n.payload.completed.result;
        o.combine && e.tryShiftRecord(o.draggableId, o.combine.draggableId), e.tryRestoreFocusRecorded();
      }
    }
  };
};
const jc = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH";
var qc = (e) => (t) => (r) => (n) => {
  if (jc(n)) {
    e.stop(), r(n);
    return;
  }
  if (n.type === "INITIAL_PUBLISH") {
    r(n);
    const o = t.getState();
    o.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? m(!1, "Expected phase to be DRAGGING after INITIAL_PUBLISH") : m(!1)), e.start(o);
    return;
  }
  r(n), e.scroll(t.getState());
};
const zc = (e) => (t) => (r) => {
  if (t(r), r.type !== "PUBLISH_WHILE_DRAGGING")
    return;
  const n = e.getState();
  n.phase === "DROP_PENDING" && (n.isWaiting || e.dispatch(Bo({
    reason: n.reason
  })));
};
var Yc = zc;
const Kc = process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
}) : Xn;
var Xc = ({
  dimensionMarshal: e,
  focusMarshal: t,
  styleMarshal: r,
  getResponders: n,
  announce: o,
  autoScroller: s
}) => Kn(Za, Kc($s(yc(r), kc(e), vc(e), Oc, Gc, Wc, Yc, qc(s), Pc, Hc(t), Vc(n, o))));
const Vt = () => ({
  additions: {},
  removals: {},
  modified: {}
});
function Qc({
  registry: e,
  callbacks: t
}) {
  let r = Vt(), n = null;
  const o = () => {
    n || (t.collectionStarting(), n = requestAnimationFrame(() => {
      n = null, ot();
      const {
        additions: c,
        removals: u,
        modified: f
      } = r, l = Object.keys(c).map((v) => e.draggable.getById(v).getDimension(Y)).sort((v, b) => v.descriptor.index - b.descriptor.index), d = Object.keys(f).map((v) => {
        const g = e.droppable.getById(v).callbacks.getScrollWhileDragging();
        return {
          droppableId: v,
          scroll: g
        };
      }), p = {
        additions: l,
        removals: Object.keys(u),
        modified: d
      };
      r = Vt(), st(), t.publish(p);
    }));
  };
  return {
    add: (c) => {
      const u = c.descriptor.id;
      r.additions[u] = c, r.modified[c.descriptor.droppableId] = !0, r.removals[u] && delete r.removals[u], o();
    },
    remove: (c) => {
      const u = c.descriptor;
      r.removals[u.id] = !0, r.modified[u.droppableId] = !0, r.additions[u.id] && delete r.additions[u.id], o();
    },
    stop: () => {
      n && (cancelAnimationFrame(n), n = null, r = Vt());
    }
  };
}
var Fo = ({
  scrollHeight: e,
  scrollWidth: t,
  height: r,
  width: n
}) => {
  const o = se({
    x: t,
    y: e
  }, {
    x: n,
    y: r
  });
  return {
    x: Math.max(0, o.x),
    y: Math.max(0, o.y)
  };
}, Go = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot find document.documentElement") : m(!1)), e;
}, Uo = () => {
  const e = Go();
  return Fo({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
}, Jc = () => {
  const e = Vo(), t = Uo(), r = e.y, n = e.x, o = Go(), s = o.clientWidth, i = o.clientHeight, a = n + s, c = r + i;
  return {
    frame: pe({
      top: r,
      left: n,
      right: a,
      bottom: c
    }),
    scroll: {
      initial: e,
      current: e,
      max: t,
      diff: {
        value: Y,
        displacement: Y
      }
    }
  };
}, Zc = ({
  critical: e,
  scrollOptions: t,
  registry: r
}) => {
  ot();
  const n = Jc(), o = n.scroll.current, s = e.droppable, i = r.droppable.getAllByType(s.type).map((f) => f.callbacks.getDimensionAndWatchScroll(o, t)), a = r.draggable.getAllByType(e.draggable.type).map((f) => f.getDimension(o)), c = {
    draggables: go(a),
    droppables: mo(i)
  };
  return st(), {
    dimensions: c,
    critical: e,
    viewport: n
  };
};
function _n(e, t, r) {
  return r.descriptor.id === t.id || r.descriptor.type !== t.type ? !1 : e.droppable.getById(r.descriptor.droppableId).descriptor.mode !== "virtual" ? (process.env.NODE_ENV !== "production" && W(`
      You are attempting to add or remove a Draggable [id: ${r.descriptor.id}]
      while a drag is occurring. This is only supported for virtual lists.

      See https://github.com/hello-pangea/dnd/blob/main/docs/patterns/virtual-lists.md
    `), !1) : !0;
}
var el = (e, t) => {
  let r = null;
  const n = Qc({
    callbacks: {
      publish: t.publishWhileDragging,
      collectionStarting: t.collectionStarting
    },
    registry: e
  }), o = (d, p) => {
    e.droppable.exists(d) || (process.env.NODE_ENV !== "production" ? m(!1, `Cannot update is enabled flag of Droppable ${d} as it is not registered`) : m(!1)), r && t.updateDroppableIsEnabled({
      id: d,
      isEnabled: p
    });
  }, s = (d, p) => {
    r && (e.droppable.exists(d) || (process.env.NODE_ENV !== "production" ? m(!1, `Cannot update isCombineEnabled flag of Droppable ${d} as it is not registered`) : m(!1)), t.updateDroppableIsCombineEnabled({
      id: d,
      isCombineEnabled: p
    }));
  }, i = (d, p) => {
    r && (e.droppable.exists(d) || (process.env.NODE_ENV !== "production" ? m(!1, `Cannot update the scroll on Droppable ${d} as it is not registered`) : m(!1)), t.updateDroppableScroll({
      id: d,
      newScroll: p
    }));
  }, a = (d, p) => {
    r && e.droppable.getById(d).callbacks.scroll(p);
  }, c = () => {
    if (!r)
      return;
    n.stop();
    const d = r.critical.droppable;
    e.droppable.getAllByType(d.type).forEach((p) => p.callbacks.dragStopped()), r.unsubscribe(), r = null;
  }, u = (d) => {
    r || (process.env.NODE_ENV !== "production" ? m(!1, "Should only be subscribed when a collection is occurring") : m(!1));
    const p = r.critical.draggable;
    d.type === "ADDITION" && _n(e, p, d.value) && n.add(d.value), d.type === "REMOVAL" && _n(e, p, d.value) && n.remove(d.value);
  };
  return {
    updateDroppableIsEnabled: o,
    updateDroppableIsCombineEnabled: s,
    scrollDroppable: a,
    updateDroppableScroll: i,
    startPublishing: (d) => {
      r && (process.env.NODE_ENV !== "production" ? m(!1, "Cannot start capturing critical dimensions as there is already a collection") : m(!1));
      const p = e.draggable.getById(d.draggableId), v = e.droppable.getById(p.descriptor.droppableId), b = {
        draggable: p.descriptor,
        droppable: v.descriptor
      }, g = e.subscribe(u);
      return r = {
        critical: b,
        unsubscribe: g
      }, Zc({
        critical: b,
        registry: e,
        scrollOptions: d.scrollOptions
      });
    },
    stopPublishing: c
  };
}, Wo = (e, t) => e.phase === "IDLE" ? !0 : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === t ? !1 : e.completed.result.reason === "DROP", tl = (e) => {
  window.scrollBy(e.x, e.y);
};
const rl = z((e) => Et(e).filter((t) => !(!t.isEnabled || !t.frame))), nl = (e, t) => rl(t).find((n) => (n.frame || (process.env.NODE_ENV !== "production" ? m(!1, "Invalid result") : m(!1)), xo(n.frame.pageMarginBox)(e))) || null;
var ol = ({
  center: e,
  destination: t,
  droppables: r
}) => {
  if (t) {
    const o = r[t];
    return o.frame ? o : null;
  }
  return nl(e, r);
};
const Ze = {
  startFromPercentage: 0.25,
  maxScrollAtPercentage: 0.05,
  maxPixelScroll: 28,
  ease: (e) => e ** 2,
  durationDampening: {
    stopDampeningAt: 1200,
    accelerateAt: 360
  },
  disabled: !1
};
var sl = (e, t, r = () => Ze) => {
  const n = r(), o = e[t.size] * n.startFromPercentage, s = e[t.size] * n.maxScrollAtPercentage;
  return {
    startScrollingFrom: o,
    maxScrollValueAt: s
  };
}, ko = ({
  startOfRange: e,
  endOfRange: t,
  current: r
}) => {
  const n = t - e;
  return n === 0 ? (process.env.NODE_ENV !== "production" && W(`
      Detected distance range of 0 in the fluid auto scroller
      This is unexpected and would cause a divide by 0 issue.
      Not allowing an auto scroll
    `), 0) : (r - e) / n;
}, Cr = 1, il = (e, t, r = () => Ze) => {
  const n = r();
  if (e > t.startScrollingFrom)
    return 0;
  if (e <= t.maxScrollValueAt)
    return n.maxPixelScroll;
  if (e === t.startScrollingFrom)
    return Cr;
  const s = 1 - ko({
    startOfRange: t.maxScrollValueAt,
    endOfRange: t.startScrollingFrom,
    current: e
  }), i = n.maxPixelScroll * n.ease(s);
  return Math.ceil(i);
}, al = (e, t, r) => {
  const n = r(), o = n.durationDampening.accelerateAt, s = n.durationDampening.stopDampeningAt, i = t, a = s, u = Date.now() - i;
  if (u >= s)
    return e;
  if (u < o)
    return Cr;
  const f = ko({
    startOfRange: o,
    endOfRange: a,
    current: u
  }), l = e * n.ease(f);
  return Math.ceil(l);
}, An = ({
  distanceToEdge: e,
  thresholds: t,
  dragStartTime: r,
  shouldUseTimeDampening: n,
  getAutoScrollerOptions: o
}) => {
  const s = il(e, t, o);
  return s === 0 ? 0 : n ? Math.max(al(s, r, o), Cr) : s;
}, Pn = ({
  container: e,
  distanceToEdges: t,
  dragStartTime: r,
  axis: n,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: s
}) => {
  const i = sl(e, n, s);
  return t[n.end] < t[n.start] ? An({
    distanceToEdge: t[n.end],
    thresholds: i,
    dragStartTime: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: s
  }) : -1 * An({
    distanceToEdge: t[n.start],
    thresholds: i,
    dragStartTime: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: s
  });
}, cl = ({
  container: e,
  subject: t,
  proposedScroll: r
}) => {
  const n = t.height > e.height, o = t.width > e.width;
  return !o && !n ? r : o && n ? null : {
    x: o ? 0 : r.x,
    y: n ? 0 : r.y
  };
};
const ll = po((e) => e === 0 ? 0 : e);
var Ho = ({
  dragStartTime: e,
  container: t,
  subject: r,
  center: n,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: s
}) => {
  const i = {
    top: n.y - t.top,
    right: t.right - n.x,
    bottom: t.bottom - n.y,
    left: n.x - t.left
  }, a = Pn({
    container: t,
    distanceToEdges: i,
    dragStartTime: e,
    axis: yr,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: s
  }), c = Pn({
    container: t,
    distanceToEdges: i,
    dragStartTime: e,
    axis: vo,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: s
  }), u = ll({
    x: c,
    y: a
  });
  if (ve(u, Y))
    return null;
  const f = cl({
    container: t,
    subject: r,
    proposedScroll: u
  });
  return f ? ve(f, Y) ? null : f : null;
};
const ul = po((e) => e === 0 ? 0 : e > 0 ? 1 : -1), Ir = (() => {
  const e = (t, r) => t < 0 ? t : t > r ? t - r : 0;
  return ({
    current: t,
    max: r,
    change: n
  }) => {
    const o = Q(t, n), s = {
      x: e(o.x, r.x),
      y: e(o.y, r.y)
    };
    return ve(s, Y) ? null : s;
  };
})(), jo = ({
  max: e,
  current: t,
  change: r
}) => {
  const n = {
    x: Math.max(t.x, e.x),
    y: Math.max(t.y, e.y)
  }, o = ul(r), s = Ir({
    max: n,
    current: t,
    change: o
  });
  return !s || o.x !== 0 && s.x === 0 || o.y !== 0 && s.y === 0;
}, _r = (e, t) => jo({
  current: e.scroll.current,
  max: e.scroll.max,
  change: t
}), dl = (e, t) => {
  if (!_r(e, t))
    return null;
  const r = e.scroll.max, n = e.scroll.current;
  return Ir({
    current: n,
    max: r,
    change: t
  });
}, Ar = (e, t) => {
  const r = e.frame;
  return r ? jo({
    current: r.scroll.current,
    max: r.scroll.max,
    change: t
  }) : !1;
}, fl = (e, t) => {
  const r = e.frame;
  return !r || !Ar(e, t) ? null : Ir({
    current: r.scroll.current,
    max: r.scroll.max,
    change: t
  });
};
var pl = ({
  viewport: e,
  subject: t,
  center: r,
  dragStartTime: n,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: s
}) => {
  const i = Ho({
    dragStartTime: n,
    container: e.frame,
    subject: t,
    center: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: s
  });
  return i && _r(e, i) ? i : null;
}, ml = ({
  droppable: e,
  subject: t,
  center: r,
  dragStartTime: n,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: s
}) => {
  const i = e.frame;
  if (!i)
    return null;
  const a = Ho({
    dragStartTime: n,
    container: i.pageMarginBox,
    subject: t,
    center: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: s
  });
  return a && Ar(e, a) ? a : null;
}, Rn = ({
  state: e,
  dragStartTime: t,
  shouldUseTimeDampening: r,
  scrollWindow: n,
  scrollDroppable: o,
  getAutoScrollerOptions: s
}) => {
  const i = e.current.page.borderBoxCenter, c = e.dimensions.draggables[e.critical.draggable.id].page.marginBox;
  if (e.isWindowScrollAllowed) {
    const l = e.viewport, d = pl({
      dragStartTime: t,
      viewport: l,
      subject: c,
      center: i,
      shouldUseTimeDampening: r,
      getAutoScrollerOptions: s
    });
    if (d) {
      n(d);
      return;
    }
  }
  const u = ol({
    center: i,
    destination: ie(e.impact),
    droppables: e.dimensions.droppables
  });
  if (!u)
    return;
  const f = ml({
    dragStartTime: t,
    droppable: u,
    subject: c,
    center: i,
    shouldUseTimeDampening: r,
    getAutoScrollerOptions: s
  });
  f && o(u.descriptor.id, f);
}, gl = ({
  scrollWindow: e,
  scrollDroppable: t,
  getAutoScrollerOptions: r = () => Ze
}) => {
  const n = ze(e), o = ze(t);
  let s = null;
  const i = (u) => {
    s || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot fluid scroll if not dragging") : m(!1));
    const {
      shouldUseTimeDampening: f,
      dragStartTime: l
    } = s;
    Rn({
      state: u,
      scrollWindow: n,
      scrollDroppable: o,
      dragStartTime: l,
      shouldUseTimeDampening: f,
      getAutoScrollerOptions: r
    });
  };
  return {
    start: (u) => {
      ot(), s && (process.env.NODE_ENV !== "production" ? m(!1, "Cannot start auto scrolling when already started") : m(!1));
      const f = Date.now();
      let l = !1;
      const d = () => {
        l = !0;
      };
      Rn({
        state: u,
        dragStartTime: 0,
        shouldUseTimeDampening: !1,
        scrollWindow: d,
        scrollDroppable: d,
        getAutoScrollerOptions: r
      }), s = {
        dragStartTime: f,
        shouldUseTimeDampening: l
      }, st(), l && i(u);
    },
    stop: () => {
      s && (n.cancel(), o.cancel(), s = null);
    },
    scroll: i
  };
}, hl = ({
  move: e,
  scrollDroppable: t,
  scrollWindow: r
}) => {
  const n = (a, c) => {
    const u = Q(a.current.client.selection, c);
    e({
      client: u
    });
  }, o = (a, c) => {
    if (!Ar(a, c))
      return c;
    const u = fl(a, c);
    if (!u)
      return t(a.descriptor.id, c), null;
    const f = se(c, u);
    return t(a.descriptor.id, f), se(c, f);
  }, s = (a, c, u) => {
    if (!a || !_r(c, u))
      return u;
    const f = dl(c, u);
    if (!f)
      return r(u), null;
    const l = se(u, f);
    return r(l), se(u, l);
  };
  return (a) => {
    const c = a.scrollJumpRequest;
    if (!c)
      return;
    const u = ie(a.impact);
    u || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot perform a jump scroll when there is no destination") : m(!1));
    const f = o(a.dimensions.droppables[u], c);
    if (!f)
      return;
    const l = a.viewport, d = s(a.isWindowScrollAllowed, l, f);
    d && n(a, d);
  };
}, bl = ({
  scrollDroppable: e,
  scrollWindow: t,
  move: r,
  getAutoScrollerOptions: n
}) => {
  const o = gl({
    scrollWindow: t,
    scrollDroppable: e,
    getAutoScrollerOptions: n
  }), s = hl({
    move: r,
    scrollWindow: t,
    scrollDroppable: e
  });
  return {
    scroll: (c) => {
      if (!(n().disabled || c.phase !== "DRAGGING")) {
        if (c.movementMode === "FLUID") {
          o.scroll(c);
          return;
        }
        c.scrollJumpRequest && s(c);
      }
    },
    start: o.start,
    stop: o.stop
  };
};
const Me = "data-rfd", Le = (() => {
  const e = `${Me}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), sr = (() => {
  const e = `${Me}-draggable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), vl = (() => {
  const e = `${Me}-droppable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), Tn = {
  contextId: `${Me}-scroll-container-context-id`
}, yl = (e) => (t) => `[${t}="${e}"]`, We = (e, t) => e.map((r) => {
  const n = r.styles[t];
  return n ? `${r.selector} { ${n} }` : "";
}).join(" "), El = "pointer-events: none;";
var Dl = (e) => {
  const t = yl(e), r = (() => {
    const a = `
      cursor: -webkit-grab;
      cursor: grab;
    `;
    return {
      selector: t(Le.contextId),
      styles: {
        always: `
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,
        resting: a,
        dragging: El,
        dropAnimating: a
      }
    };
  })(), n = (() => {
    const a = `
      transition: ${je.outOfTheWay};
    `;
    return {
      selector: t(sr.contextId),
      styles: {
        dragging: a,
        dropAnimating: a,
        userCancel: a
      }
    };
  })(), o = {
    selector: t(vl.contextId),
    styles: {
      always: "overflow-anchor: none;"
    }
  }, i = [n, r, o, {
    selector: "body",
    styles: {
      dragging: `
        cursor: grabbing;
        cursor: -webkit-grabbing;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        overflow-anchor: none;
      `
    }
  }];
  return {
    always: We(i, "always"),
    resting: We(i, "resting"),
    dragging: We(i, "dragging"),
    dropAnimating: We(i, "dropAnimating"),
    userCancel: We(i, "userCancel")
  };
};
const Sl = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? N.useLayoutEffect : N.useEffect;
var ae = Sl;
const Ft = () => {
  const e = document.querySelector("head");
  return e || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot find the head to append a style to") : m(!1)), e;
}, Bn = (e) => {
  const t = document.createElement("style");
  return e && t.setAttribute("nonce", e), t.type = "text/css", t;
};
function Nl(e, t) {
  const r = B(() => Dl(e), [e]), n = N.useRef(null), o = N.useRef(null), s = I(z((l) => {
    const d = o.current;
    d || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot set dynamic style element if it is not set") : m(!1)), d.textContent = l;
  }), []), i = I((l) => {
    const d = n.current;
    d || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot set dynamic style element if it is not set") : m(!1)), d.textContent = l;
  }, []);
  ae(() => {
    !n.current && !o.current || (process.env.NODE_ENV !== "production" ? m(!1, "style elements already mounted") : m(!1));
    const l = Bn(t), d = Bn(t);
    return n.current = l, o.current = d, l.setAttribute(`${Me}-always`, e), d.setAttribute(`${Me}-dynamic`, e), Ft().appendChild(l), Ft().appendChild(d), i(r.always), s(r.resting), () => {
      const p = (v) => {
        const b = v.current;
        b || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot unmount ref as it is not set") : m(!1)), Ft().removeChild(b), v.current = null;
      };
      p(n), p(o);
    };
  }, [t, i, s, r.always, r.resting, e]);
  const a = I(() => s(r.dragging), [s, r.dragging]), c = I((l) => {
    if (l === "DROP") {
      s(r.dropAnimating);
      return;
    }
    s(r.userCancel);
  }, [s, r.dropAnimating, r.userCancel]), u = I(() => {
    o.current && s(r.resting);
  }, [s, r.resting]);
  return B(() => ({
    dragging: a,
    dropping: c,
    resting: u
  }), [a, c, u]);
}
function qo(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var zo = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function it(e) {
  return e instanceof zo(e).HTMLElement;
}
function Yo(e, t) {
  const r = `[${Le.contextId}="${e}"]`, n = qo(document, r);
  if (!n.length)
    return process.env.NODE_ENV !== "production" && W(`Unable to find any drag handles in the context "${e}"`), null;
  const o = n.find((s) => s.getAttribute(Le.draggableId) === t);
  return o ? it(o) ? o : (process.env.NODE_ENV !== "production" && W("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && W(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
function wl(e) {
  const t = N.useRef({}), r = N.useRef(null), n = N.useRef(null), o = N.useRef(!1), s = I(function(d, p) {
    const v = {
      id: d,
      focus: p
    };
    return t.current[d] = v, function() {
      const g = t.current;
      g[d] !== v && delete g[d];
    };
  }, []), i = I(function(d) {
    const p = Yo(e, d);
    p && p !== document.activeElement && p.focus();
  }, [e]), a = I(function(d, p) {
    r.current === d && (r.current = p);
  }, []), c = I(function() {
    n.current || o.current && (n.current = requestAnimationFrame(() => {
      n.current = null;
      const d = r.current;
      d && i(d);
    }));
  }, [i]), u = I(function(d) {
    r.current = null;
    const p = document.activeElement;
    p && p.getAttribute(Le.draggableId) === d && (r.current = d);
  }, []);
  return ae(() => (o.current = !0, function() {
    o.current = !1;
    const d = n.current;
    d && cancelAnimationFrame(d);
  }), []), B(() => ({
    register: s,
    tryRecordFocus: u,
    tryRestoreFocusRecorded: c,
    tryShiftRecord: a
  }), [s, u, c, a]);
}
function xl() {
  const e = {
    draggables: {},
    droppables: {}
  }, t = [];
  function r(l) {
    return t.push(l), function() {
      const p = t.indexOf(l);
      p !== -1 && t.splice(p, 1);
    };
  }
  function n(l) {
    t.length && t.forEach((d) => d(l));
  }
  function o(l) {
    return e.draggables[l] || null;
  }
  function s(l) {
    const d = o(l);
    return d || (process.env.NODE_ENV !== "production" ? m(!1, `Cannot find draggable entry with id [${l}]`) : m(!1)), d;
  }
  const i = {
    register: (l) => {
      e.draggables[l.descriptor.id] = l, n({
        type: "ADDITION",
        value: l
      });
    },
    update: (l, d) => {
      const p = e.draggables[d.descriptor.id];
      p && p.uniqueId === l.uniqueId && (delete e.draggables[d.descriptor.id], e.draggables[l.descriptor.id] = l);
    },
    unregister: (l) => {
      const d = l.descriptor.id, p = o(d);
      p && l.uniqueId === p.uniqueId && (delete e.draggables[d], e.droppables[l.descriptor.droppableId] && n({
        type: "REMOVAL",
        value: l
      }));
    },
    getById: s,
    findById: o,
    exists: (l) => !!o(l),
    getAllByType: (l) => Object.values(e.draggables).filter((d) => d.descriptor.type === l)
  };
  function a(l) {
    return e.droppables[l] || null;
  }
  function c(l) {
    const d = a(l);
    return d || (process.env.NODE_ENV !== "production" ? m(!1, `Cannot find droppable entry with id [${l}]`) : m(!1)), d;
  }
  const u = {
    register: (l) => {
      e.droppables[l.descriptor.id] = l;
    },
    unregister: (l) => {
      const d = a(l.descriptor.id);
      d && l.uniqueId === d.uniqueId && delete e.droppables[l.descriptor.id];
    },
    getById: c,
    findById: a,
    exists: (l) => !!a(l),
    getAllByType: (l) => Object.values(e.droppables).filter((d) => d.descriptor.type === l)
  };
  function f() {
    e.draggables = {}, e.droppables = {}, t.length = 0;
  }
  return {
    draggable: i,
    droppable: u,
    subscribe: r,
    clean: f
  };
}
function Ol() {
  const e = B(xl, []);
  return N.useEffect(() => function() {
    x.version.startsWith("16") || x.version.startsWith("17") ? requestAnimationFrame(e.clean) : e.clean();
  }, [e]), e;
}
var Pr = x.createContext(null), et = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot find document.body") : m(!1)), e;
};
const Cl = {
  position: "absolute",
  width: "1px",
  height: "1px",
  margin: "-1px",
  border: "0",
  padding: "0",
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  "clip-path": "inset(100%)"
};
var Il = Cl;
const _l = (e) => `rfd-announcement-${e}`;
function Al(e) {
  const t = B(() => _l(e), [e]), r = N.useRef(null);
  return N.useEffect(function() {
    const s = document.createElement("div");
    return r.current = s, s.id = t, s.setAttribute("aria-live", "assertive"), s.setAttribute("aria-atomic", "true"), Te(s.style, Il), et().appendChild(s), function() {
      setTimeout(function() {
        const c = et();
        c.contains(s) && c.removeChild(s), s === r.current && (r.current = null);
      });
    };
  }, [t]), I((o) => {
    const s = r.current;
    if (s) {
      s.textContent = o;
      return;
    }
    process.env.NODE_ENV !== "production" && W(`
      A screen reader message was trying to be announced but it was unable to do so.
      This can occur if you unmount your <DragDropContext /> in your onDragEnd.
      Consider calling provided.announce() before the unmount so that the instruction will
      not be lost for users relying on a screen reader.

      Message not passed to screen reader:

      "${o}"
    `);
  }, []);
}
let Pl = 0;
const Ko = {
  separator: "::"
};
function Rl(e, t = Ko) {
  return B(() => `${e}${t.separator}${Pl++}`, [t.separator, e]);
}
function Tl(e, t = Ko) {
  const r = x.useId();
  return B(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var Rr = "useId" in x ? Tl : Rl;
function Bl({
  contextId: e,
  uniqueId: t
}) {
  return `rfd-hidden-text-${e}-${t}`;
}
function Ml({
  contextId: e,
  text: t
}) {
  const r = Rr("hidden-text", {
    separator: "-"
  }), n = B(() => Bl({
    contextId: e,
    uniqueId: r
  }), [r, e]);
  return N.useEffect(function() {
    const s = document.createElement("div");
    return s.id = n, s.textContent = t, s.style.display = "none", et().appendChild(s), function() {
      const a = et();
      a.contains(s) && a.removeChild(s);
    };
  }, [n, t]), n;
}
var wt = x.createContext(null), Ll = {
  react: "^16.8.5 || ^17.0.0 || ^18.0.0",
  "react-dom": "^16.8.5 || ^17.0.0 || ^18.0.0"
};
const $l = /(\d+)\.(\d+)\.(\d+)/, Mn = (e) => {
  const t = $l.exec(e);
  t == null && (process.env.NODE_ENV !== "production" ? m(!1, `Unable to parse React version ${e}`) : m(!1));
  const r = Number(t[1]), n = Number(t[2]), o = Number(t[3]);
  return {
    major: r,
    minor: n,
    patch: o,
    raw: e
  };
}, Vl = (e, t) => t.major > e.major ? !0 : t.major < e.major ? !1 : t.minor > e.minor ? !0 : t.minor < e.minor ? !1 : t.patch >= e.patch;
var Fl = (e, t) => {
  const r = Mn(e), n = Mn(t);
  Vl(r, n) || process.env.NODE_ENV !== "production" && W(`
    React version: [${n.raw}]
    does not satisfy expected peer dependency version: [${r.raw}]

    This can result in run time bugs, and even fatal crashes
  `);
};
const Gt = `
  We expect a html5 doctype: <!doctype html>
  This is to ensure consistent browser layout and measurement

  More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/doctype.md
`;
var Gl = (e) => {
  const t = e.doctype;
  if (!t) {
    process.env.NODE_ENV !== "production" && W(`
      No <!doctype html> found.

      ${Gt}
    `);
    return;
  }
  t.name.toLowerCase() !== "html" && process.env.NODE_ENV !== "production" && W(`
      Unexpected <!doctype> found: (${t.name})

      ${Gt}
    `), t.publicId !== "" && process.env.NODE_ENV !== "production" && W(`
      Unexpected <!doctype> publicId found: (${t.publicId})
      A html5 doctype does not have a publicId

      ${Gt}
    `);
};
function Tr(e) {
  process.env.NODE_ENV !== "production" && e();
}
function at(e, t) {
  Tr(() => {
    N.useEffect(() => {
      try {
        e();
      } catch (r) {
        er(`
          A setup problem was encountered.

          > ${r.message}
        `);
      }
    }, t);
  });
}
function Ul() {
  at(() => {
    Fl(Ll.react, x.version), Gl(document);
  }, []);
}
function Br(e) {
  const t = N.useRef(e);
  return N.useEffect(() => {
    t.current = e;
  }), t;
}
function Wl() {
  let e = null;
  function t() {
    return !!e;
  }
  function r(i) {
    return i === e;
  }
  function n(i) {
    e && (process.env.NODE_ENV !== "production" ? m(!1, "Cannot claim lock as it is already claimed") : m(!1));
    const a = {
      abandon: i
    };
    return e = a, a;
  }
  function o() {
    e || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot release lock when there is no lock") : m(!1)), e = null;
  }
  function s() {
    e && (e.abandon(), o());
  }
  return {
    isClaimed: t,
    isActive: r,
    claim: n,
    release: o,
    tryAbandon: s
  };
}
function tt(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const kl = 9, Hl = 13, Mr = 27, Xo = 32, jl = 33, ql = 34, zl = 35, Yl = 36, Kl = 37, Xl = 38, Ql = 39, Jl = 40, Zl = {
  [Hl]: !0,
  [kl]: !0
};
var Qo = (e) => {
  Zl[e.keyCode] && e.preventDefault();
};
const eu = (() => {
  const e = "visibilitychange";
  return typeof document > "u" ? e : [e, `ms${e}`, `webkit${e}`, `moz${e}`, `o${e}`].find((n) => `on${n}` in document) || e;
})();
var xt = eu;
const Jo = 0, Ln = 5;
function tu(e, t) {
  return Math.abs(t.x - e.x) >= Ln || Math.abs(t.y - e.y) >= Ln;
}
const $n = {
  type: "IDLE"
};
function ru({
  cancel: e,
  completed: t,
  getPhase: r,
  setPhase: n
}) {
  return [{
    eventName: "mousemove",
    fn: (o) => {
      const {
        button: s,
        clientX: i,
        clientY: a
      } = o;
      if (s !== Jo)
        return;
      const c = {
        x: i,
        y: a
      }, u = r();
      if (u.type === "DRAGGING") {
        o.preventDefault(), u.actions.move(c);
        return;
      }
      u.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? m(!1, "Cannot be IDLE") : m(!1));
      const f = u.point;
      if (!tu(f, c))
        return;
      o.preventDefault();
      const l = u.actions.fluidLift(c);
      n({
        type: "DRAGGING",
        actions: l
      });
    }
  }, {
    eventName: "mouseup",
    fn: (o) => {
      const s = r();
      if (s.type !== "DRAGGING") {
        e();
        return;
      }
      o.preventDefault(), s.actions.drop({
        shouldBlockNextClick: !0
      }), t();
    }
  }, {
    eventName: "mousedown",
    fn: (o) => {
      r().type === "DRAGGING" && o.preventDefault(), e();
    }
  }, {
    eventName: "keydown",
    fn: (o) => {
      if (r().type === "PENDING") {
        e();
        return;
      }
      if (o.keyCode === Mr) {
        o.preventDefault(), e();
        return;
      }
      Qo(o);
    }
  }, {
    eventName: "resize",
    fn: e
  }, {
    eventName: "scroll",
    options: {
      passive: !0,
      capture: !1
    },
    fn: () => {
      r().type === "PENDING" && e();
    }
  }, {
    eventName: "webkitmouseforcedown",
    fn: (o) => {
      const s = r();
      if (s.type === "IDLE" && (process.env.NODE_ENV !== "production" ? m(!1, "Unexpected phase") : m(!1)), s.actions.shouldRespectForcePress()) {
        e();
        return;
      }
      o.preventDefault();
    }
  }, {
    eventName: xt,
    fn: e
  }];
}
function nu(e) {
  const t = N.useRef($n), r = N.useRef(be), n = B(() => ({
    eventName: "mousedown",
    fn: function(l) {
      if (l.defaultPrevented || l.button !== Jo || l.ctrlKey || l.metaKey || l.shiftKey || l.altKey)
        return;
      const d = e.findClosestDraggableId(l);
      if (!d)
        return;
      const p = e.tryGetLock(d, i, {
        sourceEvent: l
      });
      if (!p)
        return;
      l.preventDefault();
      const v = {
        x: l.clientX,
        y: l.clientY
      };
      r.current(), u(p, v);
    }
  }), [e]), o = B(() => ({
    eventName: "webkitmouseforcewillbegin",
    fn: (f) => {
      if (f.defaultPrevented)
        return;
      const l = e.findClosestDraggableId(f);
      if (!l)
        return;
      const d = e.findOptionsForDraggable(l);
      d && (d.shouldRespectForcePress || e.canGetLock(l) && f.preventDefault());
    }
  }), [e]), s = I(function() {
    const l = {
      passive: !1,
      capture: !0
    };
    r.current = le(window, [o, n], l);
  }, [o, n]), i = I(() => {
    t.current.type !== "IDLE" && (t.current = $n, r.current(), s());
  }, [s]), a = I(() => {
    const f = t.current;
    i(), f.type === "DRAGGING" && f.actions.cancel({
      shouldBlockNextClick: !0
    }), f.type === "PENDING" && f.actions.abort();
  }, [i]), c = I(function() {
    const l = {
      capture: !0,
      passive: !1
    }, d = ru({
      cancel: a,
      completed: i,
      getPhase: () => t.current,
      setPhase: (p) => {
        t.current = p;
      }
    });
    r.current = le(window, d, l);
  }, [a, i]), u = I(function(l, d) {
    t.current.type !== "IDLE" && (process.env.NODE_ENV !== "production" ? m(!1, "Expected to move from IDLE to PENDING drag") : m(!1)), t.current = {
      type: "PENDING",
      point: d,
      actions: l
    }, c();
  }, [c]);
  ae(function() {
    return s(), function() {
      r.current();
    };
  }, [s]);
}
function ou() {
}
const su = {
  [ql]: !0,
  [jl]: !0,
  [Yl]: !0,
  [zl]: !0
};
function iu(e, t) {
  function r() {
    t(), e.cancel();
  }
  function n() {
    t(), e.drop();
  }
  return [{
    eventName: "keydown",
    fn: (o) => {
      if (o.keyCode === Mr) {
        o.preventDefault(), r();
        return;
      }
      if (o.keyCode === Xo) {
        o.preventDefault(), n();
        return;
      }
      if (o.keyCode === Jl) {
        o.preventDefault(), e.moveDown();
        return;
      }
      if (o.keyCode === Xl) {
        o.preventDefault(), e.moveUp();
        return;
      }
      if (o.keyCode === Ql) {
        o.preventDefault(), e.moveRight();
        return;
      }
      if (o.keyCode === Kl) {
        o.preventDefault(), e.moveLeft();
        return;
      }
      if (su[o.keyCode]) {
        o.preventDefault();
        return;
      }
      Qo(o);
    }
  }, {
    eventName: "mousedown",
    fn: r
  }, {
    eventName: "mouseup",
    fn: r
  }, {
    eventName: "click",
    fn: r
  }, {
    eventName: "touchstart",
    fn: r
  }, {
    eventName: "resize",
    fn: r
  }, {
    eventName: "wheel",
    fn: r,
    options: {
      passive: !0
    }
  }, {
    eventName: xt,
    fn: r
  }];
}
function au(e) {
  const t = N.useRef(ou), r = B(() => ({
    eventName: "keydown",
    fn: function(s) {
      if (s.defaultPrevented || s.keyCode !== Xo)
        return;
      const i = e.findClosestDraggableId(s);
      if (!i)
        return;
      const a = e.tryGetLock(i, f, {
        sourceEvent: s
      });
      if (!a)
        return;
      s.preventDefault();
      let c = !0;
      const u = a.snapLift();
      t.current();
      function f() {
        c || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot stop capturing a keyboard drag when not capturing") : m(!1)), c = !1, t.current(), n();
      }
      t.current = le(window, iu(u, f), {
        capture: !0,
        passive: !1
      });
    }
  }), [e]), n = I(function() {
    const s = {
      passive: !1,
      capture: !0
    };
    t.current = le(window, [r], s);
  }, [r]);
  ae(function() {
    return n(), function() {
      t.current();
    };
  }, [n]);
}
const Ut = {
  type: "IDLE"
}, cu = 120, lu = 0.15;
function uu({
  cancel: e,
  getPhase: t
}) {
  return [{
    eventName: "orientationchange",
    fn: e
  }, {
    eventName: "resize",
    fn: e
  }, {
    eventName: "contextmenu",
    fn: (r) => {
      r.preventDefault();
    }
  }, {
    eventName: "keydown",
    fn: (r) => {
      if (t().type !== "DRAGGING") {
        e();
        return;
      }
      r.keyCode === Mr && r.preventDefault(), e();
    }
  }, {
    eventName: xt,
    fn: e
  }];
}
function du({
  cancel: e,
  completed: t,
  getPhase: r
}) {
  return [{
    eventName: "touchmove",
    options: {
      capture: !1
    },
    fn: (n) => {
      const o = r();
      if (o.type !== "DRAGGING") {
        e();
        return;
      }
      o.hasMoved = !0;
      const {
        clientX: s,
        clientY: i
      } = n.touches[0], a = {
        x: s,
        y: i
      };
      n.preventDefault(), o.actions.move(a);
    }
  }, {
    eventName: "touchend",
    fn: (n) => {
      const o = r();
      if (o.type !== "DRAGGING") {
        e();
        return;
      }
      n.preventDefault(), o.actions.drop({
        shouldBlockNextClick: !0
      }), t();
    }
  }, {
    eventName: "touchcancel",
    fn: (n) => {
      if (r().type !== "DRAGGING") {
        e();
        return;
      }
      n.preventDefault(), e();
    }
  }, {
    eventName: "touchforcechange",
    fn: (n) => {
      const o = r();
      o.type === "IDLE" && (process.env.NODE_ENV, m(!1));
      const s = n.touches[0];
      if (!s || !(s.force >= lu))
        return;
      const a = o.actions.shouldRespectForcePress();
      if (o.type === "PENDING") {
        a && e();
        return;
      }
      if (a) {
        if (o.hasMoved) {
          n.preventDefault();
          return;
        }
        e();
        return;
      }
      n.preventDefault();
    }
  }, {
    eventName: xt,
    fn: e
  }];
}
function fu(e) {
  const t = N.useRef(Ut), r = N.useRef(be), n = I(function() {
    return t.current;
  }, []), o = I(function(p) {
    t.current = p;
  }, []), s = B(() => ({
    eventName: "touchstart",
    fn: function(p) {
      if (p.defaultPrevented)
        return;
      const v = e.findClosestDraggableId(p);
      if (!v)
        return;
      const b = e.tryGetLock(v, a, {
        sourceEvent: p
      });
      if (!b)
        return;
      const g = p.touches[0], {
        clientX: S,
        clientY: D
      } = g, E = {
        x: S,
        y: D
      };
      r.current(), l(b, E);
    }
  }), [e]), i = I(function() {
    const p = {
      capture: !0,
      passive: !1
    };
    r.current = le(window, [s], p);
  }, [s]), a = I(() => {
    const d = t.current;
    d.type !== "IDLE" && (d.type === "PENDING" && clearTimeout(d.longPressTimerId), o(Ut), r.current(), i());
  }, [i, o]), c = I(() => {
    const d = t.current;
    a(), d.type === "DRAGGING" && d.actions.cancel({
      shouldBlockNextClick: !0
    }), d.type === "PENDING" && d.actions.abort();
  }, [a]), u = I(function() {
    const p = {
      capture: !0,
      passive: !1
    }, v = {
      cancel: c,
      completed: a,
      getPhase: n
    }, b = le(window, du(v), p), g = le(window, uu(v), p);
    r.current = function() {
      b(), g();
    };
  }, [c, n, a]), f = I(function() {
    const p = n();
    p.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? m(!1, `Cannot start dragging from phase ${p.type}`) : m(!1));
    const v = p.actions.fluidLift(p.point);
    o({
      type: "DRAGGING",
      actions: v,
      hasMoved: !1
    });
  }, [n, o]), l = I(function(p, v) {
    n().type !== "IDLE" && (process.env.NODE_ENV !== "production" ? m(!1, "Expected to move from IDLE to PENDING drag") : m(!1));
    const b = setTimeout(f, cu);
    o({
      type: "PENDING",
      point: v,
      actions: p,
      longPressTimerId: b
    }), u();
  }, [u, n, o, f]);
  ae(function() {
    return i(), function() {
      r.current();
      const v = n();
      v.type === "PENDING" && (clearTimeout(v.longPressTimerId), o(Ut));
    };
  }, [n, i, o]), ae(function() {
    return le(window, [{
      eventName: "touchmove",
      fn: () => {
      },
      options: {
        capture: !1,
        passive: !1
      }
    }]);
  }, []);
}
function pu(e) {
  Tr(() => {
    const t = Br(e);
    at(() => {
      t.current.length !== e.length && (process.env.NODE_ENV !== "production" ? m(!1, "Cannot change the amount of sensor hooks after mounting") : m(!1));
    });
  });
}
const mu = ["input", "button", "textarea", "select", "option", "optgroup", "video", "audio"];
function Zo(e, t) {
  if (t == null)
    return !1;
  if (mu.includes(t.tagName.toLowerCase()))
    return !0;
  const n = t.getAttribute("contenteditable");
  return n === "true" || n === "" ? !0 : t === e ? !1 : Zo(e, t.parentElement);
}
function gu(e, t) {
  const r = t.target;
  return it(r) ? Zo(e, r) : !1;
}
var hu = (e) => pe(e.getBoundingClientRect()).center;
function bu(e) {
  return e instanceof zo(e).Element;
}
const vu = (() => {
  const e = "matches";
  return typeof document > "u" ? e : [e, "msMatchesSelector", "webkitMatchesSelector"].find((n) => n in Element.prototype) || e;
})();
function es(e, t) {
  return e == null ? null : e[vu](t) ? e : es(e.parentElement, t);
}
function yu(e, t) {
  return e.closest ? e.closest(t) : es(e, t);
}
function Eu(e) {
  return `[${Le.contextId}="${e}"]`;
}
function Du(e, t) {
  const r = t.target;
  if (!bu(r))
    return process.env.NODE_ENV !== "production" && W("event.target must be a Element"), null;
  const n = Eu(e), o = yu(r, n);
  return o ? it(o) ? o : (process.env.NODE_ENV !== "production" && W("drag handle must be a HTMLElement"), null) : null;
}
function Su(e, t) {
  const r = Du(e, t);
  return r ? r.getAttribute(Le.draggableId) : null;
}
function Nu(e, t) {
  const r = `[${sr.contextId}="${e}"]`, o = qo(document, r).find((s) => s.getAttribute(sr.id) === t);
  return o ? it(o) ? o : (process.env.NODE_ENV !== "production" && W("Draggable element is not a HTMLElement"), null) : null;
}
function wu(e) {
  e.preventDefault();
}
function dt({
  expected: e,
  phase: t,
  isLockActive: r,
  shouldWarn: n
}) {
  return r() ? e !== t ? (n && process.env.NODE_ENV !== "production" && W(`
        Cannot perform action.
        The actions you used belong to an outdated phase

        Current phase: ${e}
        You called an action from outdated phase: ${t}

        Tips:

        - Do not use preDragActions actions after calling preDragActions.lift()
      `), !1) : !0 : (n && process.env.NODE_ENV !== "production" && W(`
        Cannot perform action.
        The sensor no longer has an action lock.

        Tips:

        - Throw away your action handlers when forceStop() is called
        - Check actions.isActive() if you really need to
      `), !1);
}
function ts({
  lockAPI: e,
  store: t,
  registry: r,
  draggableId: n
}) {
  if (e.isClaimed())
    return !1;
  const o = r.draggable.findById(n);
  return o ? !(!o.options.isEnabled || !Wo(t.getState(), n)) : (process.env.NODE_ENV !== "production" && W(`Unable to find draggable with id: ${n}`), !1);
}
function xu({
  lockAPI: e,
  contextId: t,
  store: r,
  registry: n,
  draggableId: o,
  forceSensorStop: s,
  sourceEvent: i
}) {
  if (!ts({
    lockAPI: e,
    store: r,
    registry: n,
    draggableId: o
  }))
    return null;
  const c = n.draggable.getById(o), u = Nu(t, c.descriptor.id);
  if (!u)
    return process.env.NODE_ENV !== "production" && W(`Unable to find draggable element with id: ${o}`), null;
  if (i && !c.options.canDragInteractiveElements && gu(u, i))
    return null;
  const f = e.claim(s || be);
  let l = "PRE_DRAG";
  function d() {
    return c.options.shouldRespectForcePress;
  }
  function p() {
    return e.isActive(f);
  }
  function v(h, w) {
    dt({
      expected: h,
      phase: l,
      isLockActive: p,
      shouldWarn: !0
    }) && r.dispatch(w());
  }
  const b = v.bind(null, "DRAGGING");
  function g(h) {
    function w() {
      e.release(), l = "COMPLETED";
    }
    l !== "PRE_DRAG" && (w(), process.env.NODE_ENV !== "production" ? m(!1, `Cannot lift in phase ${l}`) : m(!1)), r.dispatch(tc(h.liftActionArgs)), l = "DRAGGING";
    function _(O, R = {
      shouldBlockNextClick: !1
    }) {
      if (h.cleanup(), R.shouldBlockNextClick) {
        const A = le(window, [{
          eventName: "click",
          fn: wu,
          options: {
            once: !0,
            passive: !1,
            capture: !0
          }
        }]);
        setTimeout(A);
      }
      w(), r.dispatch(Bo({
        reason: O
      }));
    }
    return {
      isActive: () => dt({
        expected: "DRAGGING",
        phase: l,
        isLockActive: p,
        shouldWarn: !1
      }),
      shouldRespectForcePress: d,
      drop: (O) => _("DROP", O),
      cancel: (O) => _("CANCEL", O),
      ...h.actions
    };
  }
  function S(h) {
    const w = ze((O) => {
      b(() => To({
        client: O
      }));
    });
    return {
      ...g({
        liftActionArgs: {
          id: o,
          clientSelection: h,
          movementMode: "FLUID"
        },
        cleanup: () => w.cancel(),
        actions: {
          move: w
        }
      }),
      move: w
    };
  }
  function D() {
    const h = {
      moveUp: () => b(uc),
      moveRight: () => b(fc),
      moveDown: () => b(dc),
      moveLeft: () => b(pc)
    };
    return g({
      liftActionArgs: {
        id: o,
        clientSelection: hu(u),
        movementMode: "SNAP"
      },
      cleanup: be,
      actions: h
    });
  }
  function E() {
    dt({
      expected: "PRE_DRAG",
      phase: l,
      isLockActive: p,
      shouldWarn: !0
    }) && e.release();
  }
  return {
    isActive: () => dt({
      expected: "PRE_DRAG",
      phase: l,
      isLockActive: p,
      shouldWarn: !1
    }),
    shouldRespectForcePress: d,
    fluidLift: S,
    snapLift: D,
    abort: E
  };
}
const Ou = [nu, au, fu];
function Cu({
  contextId: e,
  store: t,
  registry: r,
  customSensors: n,
  enableDefaultSensors: o
}) {
  const s = [...o ? Ou : [], ...n || []], i = N.useState(() => Wl())[0], a = I(function(g, S) {
    tt(g) && !tt(S) && i.tryAbandon();
  }, [i]);
  ae(function() {
    let g = t.getState();
    return t.subscribe(() => {
      const D = t.getState();
      a(g, D), g = D;
    });
  }, [i, t, a]), ae(() => i.tryAbandon, [i.tryAbandon]);
  const c = I((b) => ts({
    lockAPI: i,
    registry: r,
    store: t,
    draggableId: b
  }), [i, r, t]), u = I((b, g, S) => xu({
    lockAPI: i,
    registry: r,
    contextId: e,
    store: t,
    draggableId: b,
    forceSensorStop: g || null,
    sourceEvent: S && S.sourceEvent ? S.sourceEvent : null
  }), [e, i, r, t]), f = I((b) => Su(e, b), [e]), l = I((b) => {
    const g = r.draggable.findById(b);
    return g ? g.options : null;
  }, [r.draggable]), d = I(function() {
    i.isClaimed() && (i.tryAbandon(), t.getState().phase !== "IDLE" && t.dispatch(wr()));
  }, [i, t]), p = I(() => i.isClaimed(), [i]), v = B(() => ({
    canGetLock: c,
    tryGetLock: u,
    findClosestDraggableId: f,
    findOptionsForDraggable: l,
    tryReleaseLock: d,
    isLockClaimed: p
  }), [c, u, f, l, d, p]);
  pu(s);
  for (let b = 0; b < s.length; b++)
    s[b](v);
}
const Iu = (e) => ({
  onBeforeCapture: (t) => {
    const r = () => {
      e.onBeforeCapture && e.onBeforeCapture(t);
    };
    x.version.startsWith("16") || x.version.startsWith("17") ? r() : ar.flushSync(r);
  },
  onBeforeDragStart: e.onBeforeDragStart,
  onDragStart: e.onDragStart,
  onDragEnd: e.onDragEnd,
  onDragUpdate: e.onDragUpdate
}), _u = (e) => ({
  ...Ze,
  ...e.autoScrollerOptions,
  durationDampening: {
    ...Ze.durationDampening,
    ...e.autoScrollerOptions
  }
});
function ke(e) {
  return e.current || (process.env.NODE_ENV !== "production" ? m(!1, "Could not find store from lazy ref") : m(!1)), e.current;
}
function Au(e) {
  const {
    contextId: t,
    setCallbacks: r,
    sensors: n,
    nonce: o,
    dragHandleUsageInstructions: s
  } = e, i = N.useRef(null);
  Ul();
  const a = Br(e), c = I(() => Iu(a.current), [a]), u = I(() => _u(a.current), [a]), f = Al(t), l = Ml({
    contextId: t,
    text: s
  }), d = Nl(t, o), p = I((A) => {
    ke(i).dispatch(A);
  }, []), v = B(() => zr({
    publishWhileDragging: nc,
    updateDroppableScroll: sc,
    updateDroppableIsEnabled: ic,
    updateDroppableIsCombineEnabled: ac,
    collectionStarting: oc
  }, p), [p]), b = Ol(), g = B(() => el(b, v), [b, v]), S = B(() => bl({
    scrollWindow: tl,
    scrollDroppable: g.scrollDroppable,
    getAutoScrollerOptions: u,
    ...zr({
      move: To
    }, p)
  }), [g.scrollDroppable, p, u]), D = wl(t), E = B(() => Xc({
    announce: f,
    autoScroller: S,
    dimensionMarshal: g,
    focusMarshal: D,
    getResponders: c,
    styleMarshal: d
  }), [f, S, g, D, c, d]);
  process.env.NODE_ENV !== "production" && i.current && i.current !== E && process.env.NODE_ENV !== "production" && W("unexpected store change"), i.current = E;
  const y = I(() => {
    const A = ke(i);
    A.getState().phase !== "IDLE" && A.dispatch(wr());
  }, []), h = I(() => {
    const A = ke(i).getState();
    return A.phase === "DROP_ANIMATING" ? !0 : A.phase === "IDLE" ? !1 : A.isDragging;
  }, []), w = B(() => ({
    isDragging: h,
    tryAbort: y
  }), [h, y]);
  r(w);
  const _ = I((A) => Wo(ke(i).getState(), A), []), O = I(() => xe(ke(i).getState()), []), R = B(() => ({
    marshal: g,
    focus: D,
    contextId: t,
    canLift: _,
    isMovementAllowed: O,
    dragHandleUsageInstructionsId: l,
    registry: b
  }), [t, g, l, D, _, O, b]);
  return Cu({
    contextId: t,
    store: E,
    registry: b,
    customSensors: n || null,
    enableDefaultSensors: e.enableDefaultSensors !== !1
  }), N.useEffect(() => y, [y]), x.createElement(wt.Provider, {
    value: R
  }, x.createElement(Ci, {
    context: Pr,
    store: E
  }, e.children));
}
let Pu = 0;
function Ru() {
  return B(() => `${Pu++}`, []);
}
function Tu() {
  return x.useId();
}
var Bu = "useId" in x ? Tu : Ru;
function Kd(e) {
  const t = Bu(), r = e.dragHandleUsageInstructions || pt.dragHandleUsageInstructions;
  return x.createElement(ki, null, (n) => x.createElement(Au, {
    nonce: e.nonce,
    contextId: t,
    setCallbacks: n,
    dragHandleUsageInstructions: r,
    enableDefaultSensors: e.enableDefaultSensors,
    sensors: e.sensors,
    onBeforeCapture: e.onBeforeCapture,
    onBeforeDragStart: e.onBeforeDragStart,
    onDragStart: e.onDragStart,
    onDragUpdate: e.onDragUpdate,
    onDragEnd: e.onDragEnd,
    autoScrollerOptions: e.autoScrollerOptions
  }, e.children));
}
const Vn = {
  dragging: 5e3,
  dropAnimating: 4500
}, Mu = (e, t) => t ? je.drop(t.duration) : e ? je.snap : je.fluid, Lu = (e, t) => {
  if (e)
    return t ? Je.opacity.drop : Je.opacity.combining;
}, $u = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function Vu(e) {
  const r = e.dimension.client, {
    offset: n,
    combineWith: o,
    dropping: s
  } = e, i = !!o, a = $u(e), c = !!s, u = c ? nr.drop(n, i) : nr.moveTo(n);
  return {
    position: "fixed",
    top: r.marginBox.top,
    left: r.marginBox.left,
    boxSizing: "border-box",
    width: r.borderBox.width,
    height: r.borderBox.height,
    transition: Mu(a, s),
    transform: u,
    opacity: Lu(i, c),
    zIndex: c ? Vn.dropAnimating : Vn.dragging,
    pointerEvents: "none"
  };
}
function Fu(e) {
  return {
    transform: nr.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function Gu(e) {
  return e.type === "DRAGGING" ? Vu(e) : Fu(e);
}
function Uu(e, t, r = Y) {
  const n = window.getComputedStyle(t), o = t.getBoundingClientRect(), s = ao(o, n), i = ht(s, r), a = {
    client: s,
    tagName: t.tagName.toLowerCase(),
    display: n.display
  }, c = {
    x: s.marginBox.width,
    y: s.marginBox.height
  };
  return {
    descriptor: e,
    placeholder: a,
    displaceBy: c,
    client: s,
    page: i
  };
}
function Wu(e) {
  const t = Rr("draggable"), {
    descriptor: r,
    registry: n,
    getDraggableRef: o,
    canDragInteractiveElements: s,
    shouldRespectForcePress: i,
    isEnabled: a
  } = e, c = B(() => ({
    canDragInteractiveElements: s,
    shouldRespectForcePress: i,
    isEnabled: a
  }), [s, a, i]), u = I((p) => {
    const v = o();
    return v || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot get dimension when no ref is set") : m(!1)), Uu(r, v, p);
  }, [r, o]), f = B(() => ({
    uniqueId: t,
    descriptor: r,
    options: c,
    getDimension: u
  }), [r, u, c, t]), l = N.useRef(f), d = N.useRef(!0);
  ae(() => (n.draggable.register(l.current), () => n.draggable.unregister(l.current)), [n.draggable]), ae(() => {
    if (d.current) {
      d.current = !1;
      return;
    }
    const p = l.current;
    l.current = f, n.draggable.update(f, p);
  }, [f, n.draggable]);
}
var Lr = x.createContext(null);
function rs(e) {
  e && it(e) || (process.env.NODE_ENV !== "production" ? m(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : m(!1));
}
function ku(e, t, r) {
  at(() => {
    function n(s) {
      return `Draggable[id: ${s}]: `;
    }
    const o = e.draggableId;
    o || (process.env.NODE_ENV !== "production" ? m(!1, "Draggable requires a draggableId") : m(!1)), typeof o != "string" && (process.env.NODE_ENV !== "production" ? m(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof o}] (value: ${o})`) : m(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? m(!1, `${n(o)} requires an integer index prop`) : m(!1)), e.mapped.type !== "DRAGGING" && (rs(r()), e.isEnabled && (Yo(t, o) || (process.env.NODE_ENV !== "production" ? m(!1, `${n(o)} Unable to find drag handle`) : m(!1))));
  });
}
function Hu(e) {
  Tr(() => {
    const t = N.useRef(e);
    at(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? m(!1, "Draggable isClone prop value changed during component life") : m(!1));
    }, [e]);
  });
}
function yt(e) {
  const t = N.useContext(e);
  return t || (process.env.NODE_ENV !== "production" ? m(!1, "Could not find required context") : m(!1)), t;
}
function ju(e) {
  e.preventDefault();
}
const qu = (e) => {
  const t = N.useRef(null), r = I((w = null) => {
    t.current = w;
  }, []), n = I(() => t.current, []), {
    contextId: o,
    dragHandleUsageInstructionsId: s,
    registry: i
  } = yt(wt), {
    type: a,
    droppableId: c
  } = yt(Lr), u = B(() => ({
    id: e.draggableId,
    index: e.index,
    type: a,
    droppableId: c
  }), [e.draggableId, e.index, a, c]), {
    children: f,
    draggableId: l,
    isEnabled: d,
    shouldRespectForcePress: p,
    canDragInteractiveElements: v,
    isClone: b,
    mapped: g,
    dropAnimationFinished: S
  } = e;
  if (ku(e, o, n), Hu(b), !b) {
    const w = B(() => ({
      descriptor: u,
      registry: i,
      getDraggableRef: n,
      canDragInteractiveElements: v,
      shouldRespectForcePress: p,
      isEnabled: d
    }), [u, i, n, v, p, d]);
    Wu(w);
  }
  const D = B(() => d ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": s,
    "data-rfd-drag-handle-draggable-id": l,
    "data-rfd-drag-handle-context-id": o,
    draggable: !1,
    onDragStart: ju
  } : null, [o, s, l, d]), E = I((w) => {
    g.type === "DRAGGING" && g.dropping && w.propertyName === "transform" && (x.version.startsWith("16") || x.version.startsWith("17") ? S() : ar.flushSync(S));
  }, [S, g]), y = B(() => {
    const w = Gu(g), _ = g.type === "DRAGGING" && g.dropping ? E : void 0;
    return {
      innerRef: r,
      draggableProps: {
        "data-rfd-draggable-context-id": o,
        "data-rfd-draggable-id": l,
        style: w,
        onTransitionEnd: _
      },
      dragHandleProps: D
    };
  }, [o, D, l, g, E, r]), h = B(() => ({
    draggableId: u.id,
    type: u.type,
    source: {
      index: u.index,
      droppableId: u.droppableId
    }
  }), [u.droppableId, u.id, u.index, u.type]);
  return x.createElement(x.Fragment, null, f(y, g.snapshot, h));
};
var zu = qu, ns = (e, t) => e === t, os = (e) => {
  const {
    combine: t,
    destination: r
  } = e;
  return r ? r.droppableId : t ? t.droppableId : null;
};
const Yu = (e) => e.combine ? e.combine.draggableId : null, Ku = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function Xu() {
  const e = z((o, s) => ({
    x: o,
    y: s
  })), t = z((o, s, i = null, a = null, c = null) => ({
    isDragging: !0,
    isClone: s,
    isDropAnimating: !!c,
    dropAnimation: c,
    mode: o,
    draggingOver: i,
    combineWith: a,
    combineTargetFor: null
  })), r = z((o, s, i, a, c = null, u = null, f = null) => ({
    mapped: {
      type: "DRAGGING",
      dropping: null,
      draggingOver: c,
      combineWith: u,
      mode: s,
      offset: o,
      dimension: i,
      forceShouldAnimate: f,
      snapshot: t(s, a, c, u, null)
    }
  }));
  return (o, s) => {
    if (tt(o)) {
      if (o.critical.draggable.id !== s.draggableId)
        return null;
      const i = o.current.client.offset, a = o.dimensions.draggables[s.draggableId], c = ie(o.impact), u = Ku(o.impact), f = o.forceShouldAnimate;
      return r(e(i.x, i.y), o.movementMode, a, s.isClone, c, u, f);
    }
    if (o.phase === "DROP_ANIMATING") {
      const i = o.completed;
      if (i.result.draggableId !== s.draggableId)
        return null;
      const a = s.isClone, c = o.dimensions.draggables[s.draggableId], u = i.result, f = u.mode, l = os(u), d = Yu(u), v = {
        duration: o.dropDuration,
        curve: Or.drop,
        moveTo: o.newHomeClientOffset,
        opacity: d ? Je.opacity.drop : null,
        scale: d ? Je.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: o.newHomeClientOffset,
          dimension: c,
          dropping: v,
          draggingOver: l,
          combineWith: d,
          mode: f,
          forceShouldAnimate: null,
          snapshot: t(f, a, l, d, v)
        }
      };
    }
    return null;
  };
}
function ss(e = null) {
  return {
    isDragging: !1,
    isDropAnimating: !1,
    isClone: !1,
    dropAnimation: null,
    mode: null,
    draggingOver: null,
    combineTargetFor: e,
    combineWith: null
  };
}
const Qu = {
  mapped: {
    type: "SECONDARY",
    offset: Y,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: ss(null)
  }
};
function Ju() {
  const e = z((i, a) => ({
    x: i,
    y: a
  })), t = z(ss), r = z((i, a = null, c) => ({
    mapped: {
      type: "SECONDARY",
      offset: i,
      combineTargetFor: a,
      shouldAnimateDisplacement: c,
      snapshot: t(a)
    }
  })), n = (i) => i ? r(Y, i, !0) : null, o = (i, a, c, u) => {
    const f = c.displaced.visible[i], l = !!(u.inVirtualList && u.effected[i]), d = Dt(c), p = d && d.draggableId === i ? a : null;
    if (!f) {
      if (!l)
        return n(p);
      if (c.displaced.invisible[i])
        return null;
      const g = Ve(u.displacedBy.point), S = e(g.x, g.y);
      return r(S, p, !0);
    }
    if (l)
      return n(p);
    const v = c.displacedBy.point, b = e(v.x, v.y);
    return r(b, p, f.shouldAnimate);
  };
  return (i, a) => {
    if (tt(i))
      return i.critical.draggable.id === a.draggableId ? null : o(a.draggableId, i.critical.draggable.id, i.impact, i.afterCritical);
    if (i.phase === "DROP_ANIMATING") {
      const c = i.completed;
      return c.result.draggableId === a.draggableId ? null : o(a.draggableId, c.result.draggableId, c.impact, c.afterCritical);
    }
    return null;
  };
}
const Zu = () => {
  const e = Xu(), t = Ju();
  return (n, o) => e(n, o) || t(n, o) || Qu;
}, ed = {
  dropAnimationFinished: Mo
}, td = so(Zu, ed, null, {
  context: Pr,
  areStatePropsEqual: ns
})(zu);
var rd = td;
function is(e) {
  return yt(Lr).isUsingCloneFor === e.draggableId && !e.isClone ? null : x.createElement(rd, e);
}
function Xd(e) {
  const t = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0, r = !!e.disableInteractiveElementBlocking, n = !!e.shouldRespectForcePress;
  return x.createElement(is, Te({}, e, {
    isClone: !1,
    isEnabled: t,
    canDragInteractiveElements: r,
    shouldRespectForcePress: n
  }));
}
const $r = (e) => (t) => e === t, nd = $r("scroll"), od = $r("auto"), sd = $r("visible"), Fn = (e, t) => t(e.overflowX) || t(e.overflowY), id = (e, t) => t(e.overflowX) && t(e.overflowY), as = (e) => {
  const t = window.getComputedStyle(e), r = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return Fn(r, nd) || Fn(r, od);
}, ad = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = et(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, m(!1)), !as(e))
    return !1;
  const r = window.getComputedStyle(t), n = {
    overflowX: r.overflowX,
    overflowY: r.overflowY
  };
  return id(n, sd) || process.env.NODE_ENV !== "production" && W(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, cs = (e) => e == null ? null : e === document.body ? ad() ? e : null : e === document.documentElement ? null : as(e) ? e : cs(e.parentElement);
var ls = cs, cd = (e) => {
  !e || !ls(e.parentElement) || process.env.NODE_ENV !== "production" && W(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, ir = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const us = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : us(e.parentElement) : !1;
var ld = (e) => {
  const t = ls(e), r = us(e);
  return {
    closestScrollable: t,
    isFixedOnPage: r
  };
}, ud = ({
  descriptor: e,
  isEnabled: t,
  isCombineEnabled: r,
  isFixedOnPage: n,
  direction: o,
  client: s,
  page: i,
  closest: a
}) => {
  const c = (() => {
    if (!a)
      return null;
    const {
      scrollSize: d,
      client: p
    } = a, v = Fo({
      scrollHeight: d.scrollHeight,
      scrollWidth: d.scrollWidth,
      height: p.paddingBox.height,
      width: p.paddingBox.width
    });
    return {
      pageMarginBox: a.page.marginBox,
      frameClient: p,
      scrollSize: d,
      shouldClipSubject: a.shouldClipSubject,
      scroll: {
        initial: a.scroll,
        current: a.scroll,
        max: v,
        diff: {
          value: Y,
          displacement: Y
        }
      }
    };
  })(), u = o === "vertical" ? yr : vo, f = Be({
    page: i,
    withPlaceholder: null,
    axis: u,
    frame: c
  });
  return {
    descriptor: e,
    isCombineEnabled: r,
    isFixedOnPage: n,
    axis: u,
    isEnabled: t,
    client: s,
    page: i,
    frame: c,
    subject: f
  };
};
const dd = (e, t) => {
  const r = co(e);
  if (!t || e !== t)
    return r;
  const n = r.paddingBox.top - t.scrollTop, o = r.paddingBox.left - t.scrollLeft, s = n + t.scrollHeight, i = o + t.scrollWidth, c = gr({
    top: n,
    right: i,
    bottom: s,
    left: o
  }, r.border);
  return hr({
    borderBox: c,
    margin: r.margin,
    border: r.border,
    padding: r.padding
  });
};
var fd = ({
  ref: e,
  descriptor: t,
  env: r,
  windowScroll: n,
  direction: o,
  isDropDisabled: s,
  isCombineEnabled: i,
  shouldClipSubject: a
}) => {
  const c = r.closestScrollable, u = dd(e, c), f = ht(u, n), l = (() => {
    if (!c)
      return null;
    const p = co(c), v = {
      scrollHeight: c.scrollHeight,
      scrollWidth: c.scrollWidth
    };
    return {
      client: p,
      page: ht(p, n),
      scroll: ir(c),
      scrollSize: v,
      shouldClipSubject: a
    };
  })();
  return ud({
    descriptor: t,
    isEnabled: !s,
    isCombineEnabled: i,
    isFixedOnPage: r.isFixedOnPage,
    direction: o,
    client: u,
    page: f,
    closest: l
  });
};
const pd = {
  passive: !1
}, md = {
  passive: !0
};
var Gn = (e) => e.shouldPublishImmediately ? pd : md;
const ft = (e) => e && e.env.closestScrollable || null;
function gd(e) {
  const t = N.useRef(null), r = yt(wt), n = Rr("droppable"), {
    registry: o,
    marshal: s
  } = r, i = Br(e), a = B(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), c = N.useRef(a), u = B(() => z((y, h) => {
    t.current || (process.env.NODE_ENV !== "production" ? m(!1, "Can only update scroll when dragging") : m(!1));
    const w = {
      x: y,
      y: h
    };
    s.updateDroppableScroll(a.id, w);
  }), [a.id, s]), f = I(() => {
    const y = t.current;
    return !y || !y.env.closestScrollable ? Y : ir(y.env.closestScrollable);
  }, []), l = I(() => {
    const y = f();
    u(y.x, y.y);
  }, [f, u]), d = B(() => ze(l), [l]), p = I(() => {
    const y = t.current, h = ft(y);
    if (y && h || (process.env.NODE_ENV !== "production" ? m(!1, "Could not find scroll options while scrolling") : m(!1)), y.scrollOptions.shouldPublishImmediately) {
      l();
      return;
    }
    d();
  }, [d, l]), v = I((y, h) => {
    t.current && (process.env.NODE_ENV !== "production" ? m(!1, "Cannot collect a droppable while a drag is occurring") : m(!1));
    const w = i.current, _ = w.getDroppableRef();
    _ || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot collect without a droppable ref") : m(!1));
    const O = ld(_), R = {
      ref: _,
      descriptor: a,
      env: O,
      scrollOptions: h
    };
    t.current = R;
    const A = fd({
      ref: _,
      descriptor: a,
      env: O,
      windowScroll: y,
      direction: w.direction,
      isDropDisabled: w.isDropDisabled,
      isCombineEnabled: w.isCombineEnabled,
      shouldClipSubject: !w.ignoreContainerClipping
    }), M = O.closestScrollable;
    return M && (M.setAttribute(Tn.contextId, r.contextId), M.addEventListener("scroll", p, Gn(R.scrollOptions)), process.env.NODE_ENV !== "production" && cd(M)), A;
  }, [r.contextId, a, p, i]), b = I(() => {
    const y = t.current, h = ft(y);
    return y && h || (process.env.NODE_ENV !== "production" ? m(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : m(!1)), ir(h);
  }, []), g = I(() => {
    const y = t.current;
    y || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot stop drag when no active drag") : m(!1));
    const h = ft(y);
    t.current = null, h && (d.cancel(), h.removeAttribute(Tn.contextId), h.removeEventListener("scroll", p, Gn(y.scrollOptions)));
  }, [p, d]), S = I((y) => {
    const h = t.current;
    h || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot scroll when there is no drag") : m(!1));
    const w = ft(h);
    w || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot scroll a droppable with no closest scrollable") : m(!1)), w.scrollTop += y.y, w.scrollLeft += y.x;
  }, []), D = B(() => ({
    getDimensionAndWatchScroll: v,
    getScrollWhileDragging: b,
    dragStopped: g,
    scroll: S
  }), [g, v, b, S]), E = B(() => ({
    uniqueId: n,
    descriptor: a,
    callbacks: D
  }), [D, a, n]);
  ae(() => (c.current = E.descriptor, o.droppable.register(E), () => {
    t.current && (process.env.NODE_ENV !== "production" && W("Unsupported: changing the droppableId or type of a Droppable during a drag"), g()), o.droppable.unregister(E);
  }), [D, a, g, E, s, o.droppable]), ae(() => {
    t.current && s.updateDroppableIsEnabled(c.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, s]), ae(() => {
    t.current && s.updateDroppableIsCombineEnabled(c.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, s]);
}
function Wt() {
}
const Un = {
  width: 0,
  height: 0,
  margin: Xi
}, hd = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => e || r === "close" ? Un : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, bd = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => {
  const n = hd({
    isAnimatingOpenOnMount: e,
    placeholder: t,
    animate: r
  });
  return {
    display: t.display,
    boxSizing: "border-box",
    width: n.width,
    height: n.height,
    marginTop: n.margin.top,
    marginRight: n.margin.right,
    marginBottom: n.margin.bottom,
    marginLeft: n.margin.left,
    flexShrink: "0",
    flexGrow: "0",
    pointerEvents: "none",
    transition: r !== "none" ? je.placeholder : null
  };
}, vd = (e) => {
  const t = N.useRef(null), r = I(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: n,
    onTransitionEnd: o,
    onClose: s,
    contextId: i
  } = e, [a, c] = N.useState(e.animate === "open");
  N.useEffect(() => a ? n !== "open" ? (r(), c(!1), Wt) : t.current ? Wt : (t.current = setTimeout(() => {
    t.current = null, c(!1);
  }), r) : Wt, [n, a, r]);
  const u = I((l) => {
    l.propertyName === "height" && (o(), n === "close" && s());
  }, [n, s, o]), f = bd({
    isAnimatingOpenOnMount: a,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return x.createElement(e.placeholder.tagName, {
    style: f,
    "data-rfd-placeholder-context-id": i,
    onTransitionEnd: u,
    ref: e.innerRef
  });
};
var yd = x.memo(vd);
function kt(e) {
  return typeof e == "boolean";
}
function Ht(e, t) {
  t.forEach((r) => r(e));
}
const Ed = [function({
  props: t
}) {
  t.droppableId || (process.env.NODE_ENV !== "production" ? m(!1, "A Droppable requires a droppableId prop") : m(!1)), typeof t.droppableId != "string" && (process.env.NODE_ENV !== "production" ? m(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof t.droppableId}]`) : m(!1));
}, function({
  props: t
}) {
  kt(t.isDropDisabled) || (process.env.NODE_ENV !== "production" ? m(!1, "isDropDisabled must be a boolean") : m(!1)), kt(t.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? m(!1, "isCombineEnabled must be a boolean") : m(!1)), kt(t.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? m(!1, "ignoreContainerClipping must be a boolean") : m(!1));
}, function({
  getDroppableRef: t
}) {
  rs(t());
}], Dd = [function({
  props: t,
  getPlaceholderRef: r
}) {
  !t.placeholder || r() || process.env.NODE_ENV !== "production" && W(`
      Droppable setup issue [droppableId: "${t.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], Sd = [function({
  props: t
}) {
  t.renderClone || (process.env.NODE_ENV !== "production" ? m(!1, "Must provide a clone render function (renderClone) for virtual lists") : m(!1));
}, function({
  getPlaceholderRef: t
}) {
  t() && (process.env.NODE_ENV !== "production" ? m(!1, "Expected virtual list to not have a placeholder") : m(!1));
}];
function Nd(e) {
  at(() => {
    Ht(e, Ed), e.props.mode === "standard" && Ht(e, Dd), e.props.mode === "virtual" && Ht(e, Sd);
  });
}
class wd extends x.PureComponent {
  constructor(...t) {
    super(...t), this.state = {
      isVisible: !!this.props.on,
      data: this.props.on,
      animate: this.props.shouldAnimate && this.props.on ? "open" : "none"
    }, this.onClose = () => {
      this.state.animate === "close" && this.setState({
        isVisible: !1
      });
    };
  }
  static getDerivedStateFromProps(t, r) {
    return t.shouldAnimate ? t.on ? {
      isVisible: !0,
      data: t.on,
      animate: "open"
    } : r.isVisible ? {
      isVisible: !0,
      data: r.data,
      animate: "close"
    } : {
      isVisible: !1,
      animate: "close",
      data: null
    } : {
      isVisible: !!t.on,
      data: t.on,
      animate: "none"
    };
  }
  render() {
    if (!this.state.isVisible)
      return null;
    const t = {
      onClose: this.onClose,
      data: this.state.data,
      animate: this.state.animate
    };
    return this.props.children(t);
  }
}
const xd = (e) => {
  const t = N.useContext(wt);
  t || (process.env.NODE_ENV !== "production" ? m(!1, "Could not find app context") : m(!1));
  const {
    contextId: r,
    isMovementAllowed: n
  } = t, o = N.useRef(null), s = N.useRef(null), {
    children: i,
    droppableId: a,
    type: c,
    mode: u,
    direction: f,
    ignoreContainerClipping: l,
    isDropDisabled: d,
    isCombineEnabled: p,
    snapshot: v,
    useClone: b,
    updateViewportMaxScroll: g,
    getContainerForClone: S
  } = e, D = I(() => o.current, []), E = I((T = null) => {
    o.current = T;
  }, []), y = I(() => s.current, []), h = I((T = null) => {
    s.current = T;
  }, []);
  Nd({
    props: e,
    getDroppableRef: D,
    getPlaceholderRef: y
  });
  const w = I(() => {
    n() && g({
      maxScroll: Uo()
    });
  }, [n, g]);
  gd({
    droppableId: a,
    type: c,
    mode: u,
    direction: f,
    isDropDisabled: d,
    isCombineEnabled: p,
    ignoreContainerClipping: l,
    getDroppableRef: D
  });
  const _ = B(() => x.createElement(wd, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: T,
    data: U,
    animate: k
  }) => x.createElement(yd, {
    placeholder: U,
    onClose: T,
    innerRef: h,
    animate: k,
    contextId: r,
    onTransitionEnd: w
  })), [r, w, e.placeholder, e.shouldAnimatePlaceholder, h]), O = B(() => ({
    innerRef: E,
    placeholder: _,
    droppableProps: {
      "data-rfd-droppable-id": a,
      "data-rfd-droppable-context-id": r
    }
  }), [r, a, _, E]), R = b ? b.dragging.draggableId : null, A = B(() => ({
    droppableId: a,
    type: c,
    isUsingCloneFor: R
  }), [a, R, c]);
  function M() {
    if (!b)
      return null;
    const {
      dragging: T,
      render: U
    } = b, k = x.createElement(is, {
      draggableId: T.draggableId,
      index: T.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (j, K) => U(j, K, T));
    return fs.createPortal(k, S());
  }
  return x.createElement(Lr.Provider, {
    value: A
  }, i(O, v), M());
};
var Od = xd;
function Cd() {
  return document.body || (process.env.NODE_ENV !== "production" ? m(!1, "document.body is not ready") : m(!1)), document.body;
}
const Wn = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: Cd
}, ds = (e) => {
  let t = {
    ...e
  }, r;
  for (r in Wn)
    e[r] === void 0 && (t = {
      ...t,
      [r]: Wn[r]
    });
  return t;
}, jt = (e, t) => e === t.droppable.type, kn = (e, t) => t.draggables[e.draggable.id], Id = () => {
  const e = {
    placeholder: null,
    shouldAnimatePlaceholder: !0,
    snapshot: {
      isDraggingOver: !1,
      draggingOverWith: null,
      draggingFromThisWith: null,
      isUsingPlaceholder: !1
    },
    useClone: null
  }, t = {
    ...e,
    shouldAnimatePlaceholder: !1
  }, r = z((s) => ({
    draggableId: s.id,
    type: s.type,
    source: {
      index: s.index,
      droppableId: s.droppableId
    }
  })), n = z((s, i, a, c, u, f) => {
    const l = u.descriptor.id;
    if (u.descriptor.droppableId === s) {
      const v = f ? {
        render: f,
        dragging: r(u.descriptor)
      } : null, b = {
        isDraggingOver: a,
        draggingOverWith: a ? l : null,
        draggingFromThisWith: l,
        isUsingPlaceholder: !0
      };
      return {
        placeholder: u.placeholder,
        shouldAnimatePlaceholder: !1,
        snapshot: b,
        useClone: v
      };
    }
    if (!i)
      return t;
    if (!c)
      return e;
    const p = {
      isDraggingOver: a,
      draggingOverWith: l,
      draggingFromThisWith: null,
      isUsingPlaceholder: !0
    };
    return {
      placeholder: u.placeholder,
      shouldAnimatePlaceholder: !0,
      snapshot: p,
      useClone: null
    };
  });
  return (s, i) => {
    const a = ds(i), c = a.droppableId, u = a.type, f = !a.isDropDisabled, l = a.renderClone;
    if (tt(s)) {
      const d = s.critical;
      if (!jt(u, d))
        return t;
      const p = kn(d, s.dimensions), v = ie(s.impact) === c;
      return n(c, f, v, v, p, l);
    }
    if (s.phase === "DROP_ANIMATING") {
      const d = s.completed;
      if (!jt(u, d.critical))
        return t;
      const p = kn(d.critical, s.dimensions);
      return n(c, f, os(d.result) === c, ie(d.impact) === c, p, l);
    }
    if (s.phase === "IDLE" && s.completed && !s.shouldFlush) {
      const d = s.completed;
      if (!jt(u, d.critical))
        return t;
      const p = ie(d.impact) === c, v = !!(d.impact.at && d.impact.at.type === "COMBINE"), b = d.critical.droppable.id === c;
      return p ? v ? e : t : b ? e : t;
    }
    return t;
  };
}, _d = {
  updateViewportMaxScroll: lc
}, Ad = so(Id, _d, (e, t, r) => ({
  ...ds(r),
  ...e,
  ...t
}), {
  context: Pr,
  areStatePropsEqual: ns
})(Od);
var Qd = Ad;
const Pd = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48cGF0aCBkPSJNMCAxMTcuNjZ2MzQ2LjMyYzAgMTEuMzIgMTEuNDMgMTkuMDYgMjEuOTQgMTQuODZMMTYwIDQxNlYzMkwyMC4xMiA4Ny45NUEzMi4wMDYgMzIuMDA2IDAgMDAwIDExNy42NnpNMTkyIDQxNmwxOTIgNjRWOTZMMTkyIDMydjM4NHpNNTU0LjA2IDMzLjE2TDQxNiA5NnYzODRsMTM5Ljg4LTU1Ljk1QTMxLjk5NiAzMS45OTYgMCAwMDU3NiAzOTQuMzRWNDguMDJjMC0xMS4zMi0xMS40My0xOS4wNi0yMS45NC0xNC44NnoiLz48L3N2Zz4=", Jd = ({ loadConfig: e, state: t, convertStateToConfig: r }) => {
  const [n, o] = N.useState(!1), [s, i] = N.useState({});
  N.useEffect(() => {
    let c = t;
    t.type !== "dashboard" ? c = r() : c = JSON.parse(JSON.stringify(c));
    const u = JSON.stringify(c, void 0, 2);
    i(u);
  }, [t]);
  const a = {
    chart: ["Charts", "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/bar-chart.html", /* @__PURE__ */ x.createElement(Gr, null)],
    dashboard: ["Dashboard", "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/bar-chart.html", /* @__PURE__ */ x.createElement(Gr, null)],
    map: ["Maps", "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/data-map.html", /* @__PURE__ */ x.createElement(Pd, null)],
    "markup-include": ["Markup Include", "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/Markup-Include.html", /* @__PURE__ */ x.createElement(ms, null)]
  };
  return t.type ? /* @__PURE__ */ x.createElement(x.Fragment, null, /* @__PURE__ */ x.createElement("a", { href: a[t.type][1], target: "_blank", rel: "noopener noreferrer", className: "guidance-link" }, a[t.type][2], /* @__PURE__ */ x.createElement("div", null, /* @__PURE__ */ x.createElement("span", { className: "heading-3" }, "Get Help with ", a[t.type][0]), /* @__PURE__ */ x.createElement("p", null, "Examples and documentation"))), /* @__PURE__ */ x.createElement("div", { className: "advanced" }, /* @__PURE__ */ x.createElement("span", { className: "advanced-toggle-link", onClick: () => o(!n) }, /* @__PURE__ */ x.createElement("span", null, n ? "— " : "+ "), "Advanced Options"), n && /* @__PURE__ */ x.createElement(x.Fragment, null, /* @__PURE__ */ x.createElement("section", { className: "error-box py-2 px-3 my-2" }, /* @__PURE__ */ x.createElement("div", null, /* @__PURE__ */ x.createElement("strong", { className: "pt-1" }, "Warning"), /* @__PURE__ */ x.createElement("p", null, "This can cause serious errors in your visualization."))), /* @__PURE__ */ x.createElement("p", { className: "pb-2" }, "This tool displays the actual ", /* @__PURE__ */ x.createElement("acronym", { title: "JavaScript Object Notation" }, "JSON"), " configuration that is generated by this editor and allows you to edit properties directly and apply them."), /* @__PURE__ */ x.createElement(
    "button",
    {
      className: "btn",
      onClick: () => {
        navigator.clipboard.writeText(s), alert("Copied!");
      }
    },
    "Copy to Clipboard"
  ), /* @__PURE__ */ x.createElement("textarea", { value: s, onChange: (c) => i(c.target.value) }), /* @__PURE__ */ x.createElement("button", { className: "btn full-width", onClick: () => e(JSON.parse(s)) }, "Apply")))) : /* @__PURE__ */ x.createElement(x.Fragment, null);
};
function Rd(e) {
  const t = new URLSearchParams(window.location.search);
  if (e.setByQueryParameter) {
    const r = t.get(e.setByQueryParameter);
    if (r && e.values) {
      for (let n = 0; n < e.values.length; n++)
        if (e.values[n] && e.values[n].toLowerCase() === r.toLowerCase())
          return e.values[n];
    }
  }
}
function qt() {
  const e = {};
  for (const [t, r] of Array.from(new URLSearchParams(window.location.search).entries()))
    e[t] = r;
  return e;
}
function zt(e) {
  const t = `${window.location.origin}${window.location.pathname}?${Object.keys(e).map((r) => `${r}=${encodeURIComponent(e[r])}`).join("&")}`;
  window.history.pushState({ path: t }, "", t);
}
const Yt = (e, t) => {
  if (!e)
    return t;
  const r = [];
  return t.forEach((n) => {
    let o = !0;
    e.filter((s) => s.type !== "url").forEach((s) => {
      const i = n[s.columnName];
      s.active !== void 0 && (Array.isArray(s.active) ? s.active.includes(i) || (o = !1) : i != s.active && (o = !1));
    }), o && r.push(n);
  }), r;
}, Td = (e, t) => {
  const r = [];
  return Array.isArray(t) ? t.forEach((n) => {
    const o = n[e];
    r.includes(o) || r.push(o);
  }) : Object.values(t).forEach((n) => {
    n.forEach((o) => {
      const s = o[e];
      r.includes(s) || r.push(s);
    });
  }), r;
}, Bd = (e, t) => e.map((r) => {
  const n = bs.cloneDeep(r), o = Td(r.columnName, t);
  if (n.values = o, o.length > 0) {
    const s = n.filterStyle === "multi-select" ? n.values : n.values[0], i = Rd(n);
    i ? n.active = i : n.active = n.active || s;
  }
  return n;
}), Md = ["dropdown", "pill", "tab", "tab bar", "multi-select"], Ld = [
  {
    label: "Ascending Alphanumeric",
    value: "asc"
  },
  {
    label: "Descending Alphanumeric",
    value: "desc"
  },
  {
    label: "Custom",
    value: "cust"
  }
], Hn = (e) => {
  const { order: t } = e, r = (o, s) => o.toString().localeCompare(s.toString(), "en", { numeric: !0 }), n = (o, s) => s.toString().localeCompare(o.toString(), "en", { numeric: !0 });
  return (!t || t === "") && (e.order = "asc"), t === "desc" && (e.values = e.values.sort(n)), t === "asc" && (e.values = e.values.sort(r)), e;
}, Kt = ["chart", "table"], $d = (e) => {
  const [t, r] = N.useState(!1), { config: n, setConfig: o, filteredData: s, setFilteredData: i, excludedData: a, getUniqueValues: c } = e, { type: u, data: f } = n;
  return {
    handleApplyButton: (S) => {
      let D = !1;
      const E = qt();
      S.forEach((y) => {
        y.queuedActive && (y.active = y.queuedActive, delete y.queuedActive, y.setByQueryParameter && E[y.setByQueryParameter] !== y.active && (E[y.setByQueryParameter] = y.active, D = !0));
      }), D && zt(E), o({ ...n, filters: S }), u === "map" && i(S, a), Kt.includes(n.type) && i(Yt(S, a)), r(!1);
    },
    changeFilterActive: (S, D) => {
      const E = n.type === "map" ? [...s] : [...n.filters];
      if (n.filterBehavior === "Apply Button")
        E[S].queuedActive = D, r(!0);
      else {
        const y = E[S];
        y.active = D;
        const h = qt();
        y.setByQueryParameter && h[y.setByQueryParameter] !== y.active && (h[y.setByQueryParameter] = y.active, zt(h));
      }
      o({
        ...n,
        filters: E
      }), n.type === "map" && n.filterBehavior === "Filter Change" && i(E), Kt.includes(n.type) && n.filterBehavior === "Filter Change" && i(Yt(E, a));
    },
    announceChange: (S) => {
    },
    showApplyButton: t,
    handleReset: (S) => {
      let D = [...n.filters];
      S.preventDefault();
      let E = !1;
      const y = qt();
      D.forEach((h, w) => {
        (!h.values || h.values.length === 0) && (h.values = c(f, h.columnName)), D[w].active = Hn(h).values[0], h.setByQueryParameter && y[h.setByQueryParameter] !== h.active && (y[h.setByQueryParameter] = h.active, E = !0);
      }), E && zt(y), o({ ...n, filters: D }), u === "map" ? i(D, a) : i(Yt(D, a));
    },
    filterConstants: {
      buttonText: "Apply Filters",
      resetText: "Reset All",
      introText: "Make a selection from the filters to change the visualization information.",
      applyText: "Select the apply button to update the visualization information."
    },
    filterStyleOptions: Md,
    filterOrderOptions: Ld,
    handleFilterOrder: (S, D, E, y) => {
      const h = [...y.values], [w] = h.splice(S, 1);
      h.splice(D, 0, w);
      const _ = Kt.includes(n.type) ? [...n.filters] : [...s], O = { ..._[E] };
      O.values = h, O.orderedValues = h, O.active = h[0], O.order = "cust", _[E] = O, n.type === "map" && i(_), o({ ...n, filters: _ });
    },
    handleSorting: Hn
  };
}, Vd = (e) => {
  var _;
  const { config: t, filteredData: r, dimensions: n } = e, { filters: o, type: s, general: i, theme: a, filterBehavior: c } = t, [u, f] = N.useState(!1), [l, d] = N.useState(null), p = N.useId(), {
    handleApplyButton: v,
    changeFilterActive: b,
    announceChange: g,
    showApplyButton: S,
    handleReset: D,
    filterConstants: E,
    handleSorting: y
  } = $d(e);
  N.useEffect(() => {
    n && (n[0] < 768 && (o == null ? void 0 : o.length) > 0 ? f(!0) : f(!1));
  }, [n]), N.useEffect(() => {
    if (l) {
      const O = document.getElementById(l.id);
      O && O.focus();
    }
  }, [b, l]);
  const h = (O) => O.children, w = ["filters-section", s === "map" ? i.headerColor : (t == null ? void 0 : t.visualizationType) === "Spark Line" ? null : a];
  if (h.Section = ({ children: O }) => (t == null ? void 0 : t.filters) && /* @__PURE__ */ x.createElement("section", { className: w.join(" ") }, /* @__PURE__ */ x.createElement("p", { className: "filters-section__intro-text" }, o != null && o.some((R) => R.active) ? E.introText : "", " ", t.filterBehavior === "Apply Button" && E.applyText), /* @__PURE__ */ x.createElement("div", { className: "filters-section__wrapper" }, O)), h.ApplyBehavior = () => {
    if (c !== "Apply Button")
      return;
    const O = [i != null && i.headerColor ? i.headerColor : a, "apply"];
    return /* @__PURE__ */ x.createElement("div", { className: "filters-section__buttons" }, /* @__PURE__ */ x.createElement(gs, { onClick: () => v(o), disabled: !S, className: O.join(" ") }, E.buttonText), /* @__PURE__ */ x.createElement("a", { href: "#!", role: "button", onClick: D }, E.resetText));
  }, h.TabBar = (O) => {
    const { filter: R, index: A } = O;
    return /* @__PURE__ */ x.createElement("section", { className: "single-filters__tab-bar" }, R.values.map((M, T) => {
      const U = ["button__tab-bar", R.active === M ? "button__tab-bar--active" : ""];
      return /* @__PURE__ */ x.createElement(
        "button",
        {
          id: `${M}-${A}-${T}-${p}`,
          className: U.join(" "),
          key: M,
          onClick: (k) => {
            b(A, M), d(k.target);
          },
          onKeyDown: (k) => {
            k.keyCode === 13 && (b(A, M), d(k.target));
          }
        },
        M
      );
    }));
  }, h.Pills = (O) => O.pills, h.Tabs = (O) => O.tabs, h.Dropdown = (O) => {
    const { index: R, label: A, active: M, filters: T } = O;
    return /* @__PURE__ */ x.createElement(
      "select",
      {
        id: `filter-${R}`,
        name: A,
        "aria-label": `Filter by ${A}`,
        className: "filter-select",
        "data-index": "0",
        value: M,
        onChange: (U) => {
          b(R, U.target.value), g(`Filter ${A} value has been changed to ${U.target.value}, please reference the data table to see updated values.`);
        }
      },
      T
    );
  }, h.Style = () => {
    if (o || r) {
      let O = s === "map" ? r : o;
      return delete O.fromHash, Bd(O, t.data).map((R, A) => {
        var me;
        if (R.showDropdown === !1)
          return;
        const M = [], T = [], U = [], { active: k, queuedActive: j, label: K, filterStyle: q } = R;
        y(R), (me = R.values) == null || me.forEach((G, ne) => {
          const de = ["pill", k === G ? "pill--active" : null, a && a], oe = ["tab", k === G && "tab--active", a && a];
          T.push(
            /* @__PURE__ */ x.createElement("div", { className: "pill__wrapper", key: `pill-${ne}` }, /* @__PURE__ */ x.createElement(
              "button",
              {
                id: `${G}-${A}-${ne}-${p}`,
                className: de.join(" "),
                onKeyDown: (J) => {
                  J.keyCode === 13 && (b(A, G), d(J.target));
                },
                onClick: (J) => {
                  b(A, G), d(J.target);
                },
                name: K
              },
              G
            ))
          ), M.push(
            /* @__PURE__ */ x.createElement("option", { key: ne, value: G, "aria-label": G }, R.labels && R.labels[G] ? R.labels[G] : G)
          ), U.push(
            /* @__PURE__ */ x.createElement(
              "button",
              {
                id: `${G}-${A}-${ne}-${p}`,
                className: oe.join(" "),
                onClick: (J) => {
                  b(A, G), d(J.target);
                },
                onKeyDown: (J) => {
                  J.keyCode === 13 && (b(A, G), d(J.target));
                }
              },
              G
            )
          );
        });
        const re = ["single-filters", u ? "single-filters--dropdown" : `single-filters--${q}`];
        return /* @__PURE__ */ x.createElement("div", { className: re.join(" "), key: A }, /* @__PURE__ */ x.createElement(x.Fragment, null, K && /* @__PURE__ */ x.createElement("label", { htmlFor: `filter-${A}` }, K), q === "tab" && !u && /* @__PURE__ */ x.createElement(h.Tabs, { tabs: U }), q === "pill" && !u && /* @__PURE__ */ x.createElement(h.Pills, { pills: T }), q === "tab bar" && !u && /* @__PURE__ */ x.createElement(h.TabBar, { filter: R, index: A }), (q === "dropdown" || u) && /* @__PURE__ */ x.createElement(h.Dropdown, { filter: R, index: A, label: K, active: j || k, filters: M }), q === "multi-select" && /* @__PURE__ */ x.createElement(
          hs,
          {
            options: R.values.map((G) => ({ value: G, label: G })),
            fieldName: A,
            updateField: (G, ne, de, oe) => b(de, oe),
            selected: R.active,
            limit: R.selectLimit || 5
          }
        )));
      });
    }
  }, ((_ = t == null ? void 0 : t.filters) == null ? void 0 : _.length) !== 0)
    return /* @__PURE__ */ x.createElement(h, null, /* @__PURE__ */ x.createElement(h.Section, null, /* @__PURE__ */ x.createElement(h.Style, null), /* @__PURE__ */ x.createElement(h.ApplyBehavior, null)));
};
Vd.propTypes = {
  // runtimeFilters in place
  filteredData: Re.array,
  // function for updating the runtime filters
  setFilteredData: Re.func,
  // the full apps config
  config: Re.object,
  // updating function for setting fitlerBehavior
  setConfig: Re.func,
  // exclusions
  excludedData: Re.array,
  dimensions: Re.array
};
export {
  Jd as A,
  Qd as C,
  Kd as D,
  Vd as F,
  Xd as P,
  Yn as _,
  Md as a,
  Yt as b,
  Kn as c,
  qt as d,
  Bd as e,
  Ld as f,
  Rd as g,
  Hn as h,
  $d as i,
  zt as u
};