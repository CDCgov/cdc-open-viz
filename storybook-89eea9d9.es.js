import { r as N, R as i } from "./storybook-e61d95ab.es.js";
import { S as I, b as G } from "./storybook-5071fd94.es.js";
var l = typeof globalThis < "u" && globalThis || typeof self < "u" && self || // eslint-disable-next-line no-undef
typeof global < "u" && global || {}, h = {
  searchParams: "URLSearchParams" in l,
  iterable: "Symbol" in l && "iterator" in Symbol,
  blob: "FileReader" in l && "Blob" in l && function() {
    try {
      return new Blob(), !0;
    } catch {
      return !1;
    }
  }(),
  formData: "FormData" in l,
  arrayBuffer: "ArrayBuffer" in l
};
function K(e) {
  return e && DataView.prototype.isPrototypeOf(e);
}
if (h.arrayBuffer)
  var Y = [
    "[object Int8Array]",
    "[object Uint8Array]",
    "[object Uint8ClampedArray]",
    "[object Int16Array]",
    "[object Uint16Array]",
    "[object Int32Array]",
    "[object Uint32Array]",
    "[object Float32Array]",
    "[object Float64Array]"
  ], $ = ArrayBuffer.isView || function(e) {
    return e && Y.indexOf(Object.prototype.toString.call(e)) > -1;
  };
function A(e) {
  if (typeof e != "string" && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || e === "")
    throw new TypeError('Invalid character in header field name: "' + e + '"');
  return e.toLowerCase();
}
function B(e) {
  return typeof e != "string" && (e = String(e)), e;
}
function D(e) {
  var t = {
    next: function() {
      var r = e.shift();
      return { done: r === void 0, value: r };
    }
  };
  return h.iterable && (t[Symbol.iterator] = function() {
    return t;
  }), t;
}
function c(e) {
  this.map = {}, e instanceof c ? e.forEach(function(t, r) {
    this.append(r, t);
  }, this) : Array.isArray(e) ? e.forEach(function(t) {
    if (t.length != 2)
      throw new TypeError("Headers constructor: expected name/value pair to be length 2, found" + t.length);
    this.append(t[0], t[1]);
  }, this) : e && Object.getOwnPropertyNames(e).forEach(function(t) {
    this.append(t, e[t]);
  }, this);
}
c.prototype.append = function(e, t) {
  e = A(e), t = B(t);
  var r = this.map[e];
  this.map[e] = r ? r + ", " + t : t;
};
c.prototype.delete = function(e) {
  delete this.map[A(e)];
};
c.prototype.get = function(e) {
  return e = A(e), this.has(e) ? this.map[e] : null;
};
c.prototype.has = function(e) {
  return this.map.hasOwnProperty(A(e));
};
c.prototype.set = function(e, t) {
  this.map[A(e)] = B(t);
};
c.prototype.forEach = function(e, t) {
  for (var r in this.map)
    this.map.hasOwnProperty(r) && e.call(t, this.map[r], r, this);
};
c.prototype.keys = function() {
  var e = [];
  return this.forEach(function(t, r) {
    e.push(r);
  }), D(e);
};
c.prototype.values = function() {
  var e = [];
  return this.forEach(function(t) {
    e.push(t);
  }), D(e);
};
c.prototype.entries = function() {
  var e = [];
  return this.forEach(function(t, r) {
    e.push([r, t]);
  }), D(e);
};
h.iterable && (c.prototype[Symbol.iterator] = c.prototype.entries);
function S(e) {
  if (!e._noBody) {
    if (e.bodyUsed)
      return Promise.reject(new TypeError("Already read"));
    e.bodyUsed = !0;
  }
}
function k(e) {
  return new Promise(function(t, r) {
    e.onload = function() {
      t(e.result);
    }, e.onerror = function() {
      r(e.error);
    };
  });
}
function X(e) {
  var t = new FileReader(), r = k(t);
  return t.readAsArrayBuffer(e), r;
}
function Z(e) {
  var t = new FileReader(), r = k(t), n = /charset=([A-Za-z0-9_-]+)/.exec(e.type), s = n ? n[1] : "utf-8";
  return t.readAsText(e, s), r;
}
function Q(e) {
  for (var t = new Uint8Array(e), r = new Array(t.length), n = 0; n < t.length; n++)
    r[n] = String.fromCharCode(t[n]);
  return r.join("");
}
function U(e) {
  if (e.slice)
    return e.slice(0);
  var t = new Uint8Array(e.byteLength);
  return t.set(new Uint8Array(e)), t.buffer;
}
function H() {
  return this.bodyUsed = !1, this._initBody = function(e) {
    this.bodyUsed = this.bodyUsed, this._bodyInit = e, e ? typeof e == "string" ? this._bodyText = e : h.blob && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : h.formData && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : h.searchParams && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : h.arrayBuffer && h.blob && K(e) ? (this._bodyArrayBuffer = U(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : h.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(e) || $(e)) ? this._bodyArrayBuffer = U(e) : this._bodyText = e = Object.prototype.toString.call(e) : (this._noBody = !0, this._bodyText = ""), this.headers.get("content-type") || (typeof e == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : h.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
  }, h.blob && (this.blob = function() {
    var e = S(this);
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
      var e = S(this);
      return e || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(
        this._bodyArrayBuffer.buffer.slice(
          this._bodyArrayBuffer.byteOffset,
          this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength
        )
      ) : Promise.resolve(this._bodyArrayBuffer));
    } else {
      if (h.blob)
        return this.blob().then(X);
      throw new Error("could not read as ArrayBuffer");
    }
  }, this.text = function() {
    var e = S(this);
    if (e)
      return e;
    if (this._bodyBlob)
      return Z(this._bodyBlob);
    if (this._bodyArrayBuffer)
      return Promise.resolve(Q(this._bodyArrayBuffer));
    if (this._bodyFormData)
      throw new Error("could not read FormData body as text");
    return Promise.resolve(this._bodyText);
  }, h.formData && (this.formData = function() {
    return this.text().then(re);
  }), this.json = function() {
    return this.text().then(JSON.parse);
  }, this;
}
var ee = ["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT", "TRACE"];
function te(e) {
  var t = e.toUpperCase();
  return ee.indexOf(t) > -1 ? t : e;
}
function O(e, t) {
  if (!(this instanceof O))
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
  t = t || {};
  var r = t.body;
  if (e instanceof O) {
    if (e.bodyUsed)
      throw new TypeError("Already read");
    this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new c(e.headers)), this.method = e.method, this.mode = e.mode, this.signal = e.signal, !r && e._bodyInit != null && (r = e._bodyInit, e.bodyUsed = !0);
  } else
    this.url = String(e);
  if (this.credentials = t.credentials || this.credentials || "same-origin", (t.headers || !this.headers) && (this.headers = new c(t.headers)), this.method = te(t.method || this.method || "GET"), this.mode = t.mode || this.mode || null, this.signal = t.signal || this.signal || function() {
    if ("AbortController" in l) {
      var o = new AbortController();
      return o.signal;
    }
  }(), this.referrer = null, (this.method === "GET" || this.method === "HEAD") && r)
    throw new TypeError("Body not allowed for GET or HEAD requests");
  if (this._initBody(r), (this.method === "GET" || this.method === "HEAD") && (t.cache === "no-store" || t.cache === "no-cache")) {
    var n = /([?&])_=[^&]*/;
    if (n.test(this.url))
      this.url = this.url.replace(n, "$1_=" + (/* @__PURE__ */ new Date()).getTime());
    else {
      var s = /\?/;
      this.url += (s.test(this.url) ? "&" : "?") + "_=" + (/* @__PURE__ */ new Date()).getTime();
    }
  }
}
O.prototype.clone = function() {
  return new O(this, { body: this._bodyInit });
};
function re(e) {
  var t = new FormData();
  return e.trim().split("&").forEach(function(r) {
    if (r) {
      var n = r.split("="), s = n.shift().replace(/\+/g, " "), o = n.join("=").replace(/\+/g, " ");
      t.append(decodeURIComponent(s), decodeURIComponent(o));
    }
  }), t;
}
function ne(e) {
  var t = new c(), r = e.replace(/\r?\n[\t ]+/g, " ");
  return r.split("\r").map(function(n) {
    return n.indexOf(`
`) === 0 ? n.substr(1, n.length) : n;
  }).forEach(function(n) {
    var s = n.split(":"), o = s.shift().trim();
    if (o) {
      var p = s.join(":").trim();
      try {
        t.append(o, p);
      } catch (d) {
        console.warn("Response " + d.message);
      }
    }
  }), t;
}
H.call(O.prototype);
function m(e, t) {
  if (!(this instanceof m))
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
  if (t || (t = {}), this.type = "default", this.status = t.status === void 0 ? 200 : t.status, this.status < 200 || this.status > 599)
    throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");
  this.ok = this.status >= 200 && this.status < 300, this.statusText = t.statusText === void 0 ? "" : "" + t.statusText, this.headers = new c(t.headers), this.url = t.url || "", this._initBody(e);
}
H.call(m.prototype);
m.prototype.clone = function() {
  return new m(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new c(this.headers),
    url: this.url
  });
};
m.error = function() {
  var e = new m(null, { status: 200, statusText: "" });
  return e.status = 0, e.type = "error", e;
};
var oe = [301, 302, 303, 307, 308];
m.redirect = function(e, t) {
  if (oe.indexOf(t) === -1)
    throw new RangeError("Invalid status code");
  return new m(null, { status: t, headers: { location: e } });
};
var E = l.DOMException;
try {
  new E();
} catch {
  E = function(t, r) {
    this.message = t, this.name = r;
    var n = Error(t);
    this.stack = n.stack;
  }, E.prototype = Object.create(Error.prototype), E.prototype.constructor = E;
}
function q(e, t) {
  return new Promise(function(r, n) {
    var s = new O(e, t);
    if (s.signal && s.signal.aborted)
      return n(new E("Aborted", "AbortError"));
    var o = new XMLHttpRequest();
    function p() {
      o.abort();
    }
    o.onload = function() {
      var a = {
        statusText: o.statusText,
        headers: ne(o.getAllResponseHeaders() || "")
      };
      s.url.startsWith("file://") && (o.status < 200 || o.status > 599) ? a.status = 200 : a.status = o.status, a.url = "responseURL" in o ? o.responseURL : a.headers.get("X-Request-URL");
      var b = "response" in o ? o.response : o.responseText;
      setTimeout(function() {
        r(new m(b, a));
      }, 0);
    }, o.onerror = function() {
      setTimeout(function() {
        n(new TypeError("Network request failed"));
      }, 0);
    }, o.ontimeout = function() {
      setTimeout(function() {
        n(new TypeError("Network request timed out"));
      }, 0);
    }, o.onabort = function() {
      setTimeout(function() {
        n(new E("Aborted", "AbortError"));
      }, 0);
    };
    function d(a) {
      try {
        return a === "" && l.location.href ? l.location.href : a;
      } catch {
        return a;
      }
    }
    if (o.open(s.method, d(s.url), !0), s.credentials === "include" ? o.withCredentials = !0 : s.credentials === "omit" && (o.withCredentials = !1), "responseType" in o && (h.blob ? o.responseType = "blob" : h.arrayBuffer && (o.responseType = "arraybuffer")), t && typeof t.headers == "object" && !(t.headers instanceof c || l.Headers && t.headers instanceof l.Headers)) {
      var u = [];
      Object.getOwnPropertyNames(t.headers).forEach(function(a) {
        u.push(A(a)), o.setRequestHeader(a, B(t.headers[a]));
      }), s.headers.forEach(function(a, b) {
        u.indexOf(b) === -1 && o.setRequestHeader(b, a);
      });
    } else
      s.headers.forEach(function(a, b) {
        o.setRequestHeader(b, a);
      });
    s.signal && (s.signal.addEventListener("abort", p), o.onreadystatechange = function() {
      o.readyState === 4 && s.signal.removeEventListener("abort", p);
    }), o.send(typeof s._bodyInit > "u" ? null : s._bodyInit);
  });
}
q.polyfill = !0;
l.fetch || (l.fetch = q, l.Headers = c, l.Request = O, l.Response = m);
function _(e) {
  "@babel/helpers - typeof";
  return _ = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, _(e);
}
function se(e, t) {
  if (_(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (_(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ie(e) {
  var t = se(e, "string");
  return _(t) === "symbol" ? t : String(t);
}
function ae(e, t, r) {
  return t = ie(t), t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function C(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(s) {
      return Object.getOwnPropertyDescriptor(e, s).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function L(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? C(Object(r), !0).forEach(function(n) {
      ae(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : C(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function y(e) {
  return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. ";
}
var V = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}(), P = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
}, F = {
  INIT: "@@redux/INIT" + P(),
  REPLACE: "@@redux/REPLACE" + P(),
  PROBE_UNKNOWN_ACTION: function() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + P();
  }
};
function ue(e) {
  if (typeof e != "object" || e === null)
    return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function ce(e) {
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
  if (de(e))
    return "date";
  if (le(e))
    return "error";
  var r = fe(e);
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
function fe(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function le(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function de(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function v(e) {
  var t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = ce(e)), t;
}
function pe(e, t, r) {
  var n;
  if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? y(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
    if (typeof r != "function")
      throw new Error(process.env.NODE_ENV === "production" ? y(1) : "Expected the enhancer to be a function. Instead, received: '" + v(r) + "'");
    return r(pe)(e, t);
  }
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? y(2) : "Expected the root reducer to be a function. Instead, received: '" + v(e) + "'");
  var s = e, o = t, p = [], d = p, u = !1;
  function a() {
    d === p && (d = p.slice());
  }
  function b() {
    if (u)
      throw new Error(process.env.NODE_ENV === "production" ? y(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return o;
  }
  function j(f) {
    if (typeof f != "function")
      throw new Error(process.env.NODE_ENV === "production" ? y(4) : "Expected the listener to be a function. Instead, received: '" + v(f) + "'");
    if (u)
      throw new Error(process.env.NODE_ENV === "production" ? y(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    var g = !0;
    return a(), d.push(f), function() {
      if (g) {
        if (u)
          throw new Error(process.env.NODE_ENV === "production" ? y(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        g = !1, a();
        var w = d.indexOf(f);
        d.splice(w, 1), p = null;
      }
    };
  }
  function T(f) {
    if (!ue(f))
      throw new Error(process.env.NODE_ENV === "production" ? y(7) : "Actions must be plain objects. Instead, the actual type was: '" + v(f) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    if (typeof f.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? y(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (u)
      throw new Error(process.env.NODE_ENV === "production" ? y(9) : "Reducers may not dispatch actions.");
    try {
      u = !0, o = s(o, f);
    } finally {
      u = !1;
    }
    for (var g = p = d, x = 0; x < g.length; x++) {
      var w = g[x];
      w();
    }
    return f;
  }
  function z(f) {
    if (typeof f != "function")
      throw new Error(process.env.NODE_ENV === "production" ? y(10) : "Expected the nextReducer to be a function. Instead, received: '" + v(f));
    s = f, T({
      type: F.REPLACE
    });
  }
  function J() {
    var f, g = j;
    return f = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function(w) {
        if (typeof w != "object" || w === null)
          throw new Error(process.env.NODE_ENV === "production" ? y(11) : "Expected the observer to be an object. Instead, received: '" + v(w) + "'");
        function R() {
          w.next && w.next(b());
        }
        R();
        var W = g(R);
        return {
          unsubscribe: W
        };
      }
    }, f[V] = function() {
      return this;
    }, f;
  }
  return T({
    type: F.INIT
  }), n = {
    dispatch: T,
    subscribe: j,
    getState: b,
    replaceReducer: z
  }, n[V] = J, n;
}
function M(e, t) {
  return function() {
    return t(e.apply(this, arguments));
  };
}
function we(e, t) {
  if (typeof e == "function")
    return M(e, t);
  if (typeof e != "object" || e === null)
    throw new Error(process.env.NODE_ENV === "production" ? y(16) : "bindActionCreators expected an object or a function, but instead received: '" + v(e) + `'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`);
  var r = {};
  for (var n in e) {
    var s = e[n];
    typeof s == "function" && (r[n] = M(s, t));
  }
  return r;
}
function he() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return t.length === 0 ? function(n) {
    return n;
  } : t.length === 1 ? t[0] : t.reduce(function(n, s) {
    return function() {
      return n(s.apply(void 0, arguments));
    };
  });
}
function ge() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return function(n) {
    return function() {
      var s = n.apply(void 0, arguments), o = function() {
        throw new Error(process.env.NODE_ENV === "production" ? y(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
      }, p = {
        getState: s.getState,
        dispatch: function() {
          return o.apply(void 0, arguments);
        }
      }, d = t.map(function(u) {
        return u(p);
      });
      return o = he.apply(void 0, d)(s.dispatch), L(L({}, s), {}, {
        dispatch: o
      });
    };
  };
}
const ye = (e) => /* @__PURE__ */ N.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512", ...e }, /* @__PURE__ */ N.createElement("path", { d: "M0 117.66v346.32c0 11.32 11.43 19.06 21.94 14.86L160 416V32L20.12 87.95A32.006 32.006 0 000 117.66zM192 416l192 64V96L192 32v384zM554.06 33.16L416 96v384l139.88-55.95A31.996 31.996 0 00576 394.34V48.02c0-11.32-11.43-19.06-21.94-14.86z" })), ve = ({ loadConfig: e, state: t, convertStateToConfig: r }) => {
  const [n, s] = N.useState(!1), [o, p] = N.useState({});
  N.useEffect(() => {
    let u = t;
    t.type !== "dashboard" ? u = r() : u = JSON.parse(JSON.stringify(u));
    const a = JSON.stringify(u, void 0, 2);
    p(a);
  }, [t]);
  const d = {
    chart: ["Charts", "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/bar-chart.html", /* @__PURE__ */ i.createElement(I, null)],
    dashboard: ["Dashboard", "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/bar-chart.html", /* @__PURE__ */ i.createElement(I, null)],
    map: ["Maps", "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/data-map.html", /* @__PURE__ */ i.createElement(ye, null)],
    "markup-include": ["Markup Include", "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/Markup-Include.html", /* @__PURE__ */ i.createElement(G, null)]
  };
  return t.type ? /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("a", { href: d[t.type][1], target: "_blank", rel: "noopener noreferrer", className: "guidance-link" }, d[t.type][2], /* @__PURE__ */ i.createElement("div", null, /* @__PURE__ */ i.createElement("span", { className: "heading-3" }, "Get Help with ", d[t.type][0]), /* @__PURE__ */ i.createElement("p", null, "Examples and documentation"))), /* @__PURE__ */ i.createElement("div", { className: "advanced" }, /* @__PURE__ */ i.createElement("span", { className: "advanced-toggle-link", onClick: () => s(!n) }, /* @__PURE__ */ i.createElement("span", null, n ? "— " : "+ "), "Advanced Options"), n && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("section", { className: "error-box py-2 px-3 my-2" }, /* @__PURE__ */ i.createElement("div", null, /* @__PURE__ */ i.createElement("strong", { className: "pt-1" }, "Warning"), /* @__PURE__ */ i.createElement("p", null, "This can cause serious errors in your visualization."))), /* @__PURE__ */ i.createElement("p", { className: "pb-2" }, "This tool displays the actual ", /* @__PURE__ */ i.createElement("acronym", { title: "JavaScript Object Notation" }, "JSON"), " configuration that is generated by this editor and allows you to edit properties directly and apply them."), /* @__PURE__ */ i.createElement("textarea", { value: o, onChange: (u) => p(u.target.value) }), /* @__PURE__ */ i.createElement("button", { className: "btn full-width", onClick: () => e(JSON.parse(o)) }, "Apply")))) : /* @__PURE__ */ i.createElement(i.Fragment, null);
};
export {
  ve as A,
  pe as a,
  we as b,
  he as c,
  ge as d
};
