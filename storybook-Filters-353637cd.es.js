import { r as N, R as x } from "./storybook-index-45401197.es.js";
import { r as or, R as ds } from "./storybook-index-633d712d.es.js";
import { _ as Te } from "./storybook-extends-70f3d2a3.es.js";
import { g as fs } from "./storybook-_commonjsHelpers-c5d32002.es.js";
import { i as $r } from "./storybook-tiny-invariant-9f3340e2.es.js";
import { e as Vr, l as ps } from "./storybook-Icon-48ed169f.es.js";
import { B as ms } from "./storybook-Button-d74e310e.es.js";
import { P as Se } from "./storybook-index-43433e35.es.js";
var J = typeof globalThis < "u" && globalThis || typeof self < "u" && self || // eslint-disable-next-line no-undef
typeof global < "u" && global || {}, ee = {
  searchParams: "URLSearchParams" in J,
  iterable: "Symbol" in J && "iterator" in Symbol,
  blob: "FileReader" in J && "Blob" in J && function() {
    try {
      return new Blob(), !0;
    } catch {
      return !1;
    }
  }(),
  formData: "FormData" in J,
  arrayBuffer: "ArrayBuffer" in J
};
function gs(e) {
  return e && DataView.prototype.isPrototypeOf(e);
}
if (ee.arrayBuffer)
  var hs = [
    "[object Int8Array]",
    "[object Uint8Array]",
    "[object Uint8ClampedArray]",
    "[object Int16Array]",
    "[object Uint16Array]",
    "[object Int32Array]",
    "[object Uint32Array]",
    "[object Float32Array]",
    "[object Float64Array]"
  ], bs = ArrayBuffer.isView || function(e) {
    return e && hs.indexOf(Object.prototype.toString.call(e)) > -1;
  };
function Ve(e) {
  if (typeof e != "string" && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || e === "")
    throw new TypeError('Invalid character in header field name: "' + e + '"');
  return e.toLowerCase();
}
function sr(e) {
  return typeof e != "string" && (e = String(e)), e;
}
function ir(e) {
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
function j(e) {
  this.map = {}, e instanceof j ? e.forEach(function(t, r) {
    this.append(r, t);
  }, this) : Array.isArray(e) ? e.forEach(function(t) {
    if (t.length != 2)
      throw new TypeError("Headers constructor: expected name/value pair to be length 2, found" + t.length);
    this.append(t[0], t[1]);
  }, this) : e && Object.getOwnPropertyNames(e).forEach(function(t) {
    this.append(t, e[t]);
  }, this);
}
j.prototype.append = function(e, t) {
  e = Ve(e), t = sr(t);
  var r = this.map[e];
  this.map[e] = r ? r + ", " + t : t;
};
j.prototype.delete = function(e) {
  delete this.map[Ve(e)];
};
j.prototype.get = function(e) {
  return e = Ve(e), this.has(e) ? this.map[e] : null;
};
j.prototype.has = function(e) {
  return this.map.hasOwnProperty(Ve(e));
};
j.prototype.set = function(e, t) {
  this.map[Ve(e)] = sr(t);
};
j.prototype.forEach = function(e, t) {
  for (var r in this.map)
    this.map.hasOwnProperty(r) && e.call(t, this.map[r], r, this);
};
j.prototype.keys = function() {
  var e = [];
  return this.forEach(function(t, r) {
    e.push(r);
  }), ir(e);
};
j.prototype.values = function() {
  var e = [];
  return this.forEach(function(t) {
    e.push(t);
  }), ir(e);
};
j.prototype.entries = function() {
  var e = [];
  return this.forEach(function(t, r) {
    e.push([r, t]);
  }), ir(e);
};
ee.iterable && (j.prototype[Symbol.iterator] = j.prototype.entries);
function Ot(e) {
  if (!e._noBody) {
    if (e.bodyUsed)
      return Promise.reject(new TypeError("Already read"));
    e.bodyUsed = !0;
  }
}
function Hn(e) {
  return new Promise(function(t, r) {
    e.onload = function() {
      t(e.result);
    }, e.onerror = function() {
      r(e.error);
    };
  });
}
function vs(e) {
  var t = new FileReader(), r = Hn(t);
  return t.readAsArrayBuffer(e), r;
}
function ys(e) {
  var t = new FileReader(), r = Hn(t), n = /charset=([A-Za-z0-9_-]+)/.exec(e.type), o = n ? n[1] : "utf-8";
  return t.readAsText(e, o), r;
}
function Es(e) {
  for (var t = new Uint8Array(e), r = new Array(t.length), n = 0; n < t.length; n++)
    r[n] = String.fromCharCode(t[n]);
  return r.join("");
}
function Mr(e) {
  if (e.slice)
    return e.slice(0);
  var t = new Uint8Array(e.byteLength);
  return t.set(new Uint8Array(e)), t.buffer;
}
function jn() {
  return this.bodyUsed = !1, this._initBody = function(e) {
    this.bodyUsed = this.bodyUsed, this._bodyInit = e, e ? typeof e == "string" ? this._bodyText = e : ee.blob && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : ee.formData && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : ee.searchParams && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : ee.arrayBuffer && ee.blob && gs(e) ? (this._bodyArrayBuffer = Mr(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : ee.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(e) || bs(e)) ? this._bodyArrayBuffer = Mr(e) : this._bodyText = e = Object.prototype.toString.call(e) : (this._noBody = !0, this._bodyText = ""), this.headers.get("content-type") || (typeof e == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : ee.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
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
        return this.blob().then(vs);
      throw new Error("could not read as ArrayBuffer");
    }
  }, this.text = function() {
    var e = Ot(this);
    if (e)
      return e;
    if (this._bodyBlob)
      return ys(this._bodyBlob);
    if (this._bodyArrayBuffer)
      return Promise.resolve(Es(this._bodyArrayBuffer));
    if (this._bodyFormData)
      throw new Error("could not read FormData body as text");
    return Promise.resolve(this._bodyText);
  }, ee.formData && (this.formData = function() {
    return this.text().then(Ns);
  }), this.json = function() {
    return this.text().then(JSON.parse);
  }, this;
}
var Ds = ["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT", "TRACE"];
function Ss(e) {
  var t = e.toUpperCase();
  return Ds.indexOf(t) > -1 ? t : e;
}
function Ce(e, t) {
  if (!(this instanceof Ce))
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
  t = t || {};
  var r = t.body;
  if (e instanceof Ce) {
    if (e.bodyUsed)
      throw new TypeError("Already read");
    this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new j(e.headers)), this.method = e.method, this.mode = e.mode, this.signal = e.signal, !r && e._bodyInit != null && (r = e._bodyInit, e.bodyUsed = !0);
  } else
    this.url = String(e);
  if (this.credentials = t.credentials || this.credentials || "same-origin", (t.headers || !this.headers) && (this.headers = new j(t.headers)), this.method = Ss(t.method || this.method || "GET"), this.mode = t.mode || this.mode || null, this.signal = t.signal || this.signal || function() {
    if ("AbortController" in J) {
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
function Ns(e) {
  var t = new FormData();
  return e.trim().split("&").forEach(function(r) {
    if (r) {
      var n = r.split("="), o = n.shift().replace(/\+/g, " "), s = n.join("=").replace(/\+/g, " ");
      t.append(decodeURIComponent(o), decodeURIComponent(s));
    }
  }), t;
}
function ws(e) {
  var t = new j(), r = e.replace(/\r?\n[\t ]+/g, " ");
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
jn.call(Ce.prototype);
function fe(e, t) {
  if (!(this instanceof fe))
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
  if (t || (t = {}), this.type = "default", this.status = t.status === void 0 ? 200 : t.status, this.status < 200 || this.status > 599)
    throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");
  this.ok = this.status >= 200 && this.status < 300, this.statusText = t.statusText === void 0 ? "" : "" + t.statusText, this.headers = new j(t.headers), this.url = t.url || "", this._initBody(e);
}
jn.call(fe.prototype);
fe.prototype.clone = function() {
  return new fe(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new j(this.headers),
    url: this.url
  });
};
fe.error = function() {
  var e = new fe(null, { status: 200, statusText: "" });
  return e.ok = !1, e.status = 0, e.type = "error", e;
};
var xs = [301, 302, 303, 307, 308];
fe.redirect = function(e, t) {
  if (xs.indexOf(t) === -1)
    throw new RangeError("Invalid status code");
  return new fe(null, { status: t, headers: { location: e } });
};
var Oe = J.DOMException;
try {
  new Oe();
} catch {
  Oe = function(t, r) {
    this.message = t, this.name = r;
    var n = Error(t);
    this.stack = n.stack;
  }, Oe.prototype = Object.create(Error.prototype), Oe.prototype.constructor = Oe;
}
function qn(e, t) {
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
        headers: ws(s.getAllResponseHeaders() || "")
      };
      o.url.indexOf("file://") === 0 && (s.status < 200 || s.status > 599) ? u.status = 200 : u.status = s.status, u.url = "responseURL" in s ? s.responseURL : u.headers.get("X-Request-URL");
      var f = "response" in s ? s.response : s.responseText;
      setTimeout(function() {
        r(new fe(f, u));
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
        return u === "" && J.location.href ? J.location.href : u;
      } catch {
        return u;
      }
    }
    if (s.open(o.method, a(o.url), !0), o.credentials === "include" ? s.withCredentials = !0 : o.credentials === "omit" && (s.withCredentials = !1), "responseType" in s && (ee.blob ? s.responseType = "blob" : ee.arrayBuffer && (s.responseType = "arraybuffer")), t && typeof t.headers == "object" && !(t.headers instanceof j || J.Headers && t.headers instanceof J.Headers)) {
      var c = [];
      Object.getOwnPropertyNames(t.headers).forEach(function(u) {
        c.push(Ve(u)), s.setRequestHeader(u, sr(t.headers[u]));
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
qn.polyfill = !0;
J.fetch || (J.fetch = qn, J.Headers = j, J.Request = Ce, J.Response = fe);
function zn(e, t) {
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
function Os(e, t) {
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
function Cs(e) {
  var t = Os(e, "string");
  return qe(t) == "symbol" ? t : String(t);
}
function Is(e, t, r) {
  return t = Cs(t), t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function Fr(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Gr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Fr(Object(r), !0).forEach(function(n) {
      Is(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Fr(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function te(e) {
  return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. ";
}
var Ur = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}(), Ct = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
}, Wr = {
  INIT: "@@redux/INIT" + Ct(),
  REPLACE: "@@redux/REPLACE" + Ct(),
  PROBE_UNKNOWN_ACTION: function() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + Ct();
  }
};
function _s(e) {
  if (typeof e != "object" || e === null)
    return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function As(e) {
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
  if (Ts(e))
    return "date";
  if (Rs(e))
    return "error";
  var r = Ps(e);
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
function Ps(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function Rs(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function Ts(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function we(e) {
  var t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = As(e)), t;
}
function Yn(e, t, r) {
  var n;
  if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? te(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
    if (typeof r != "function")
      throw new Error(process.env.NODE_ENV === "production" ? te(1) : "Expected the enhancer to be a function. Instead, received: '" + we(r) + "'");
    return r(Yn)(e, t);
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
  function l(h) {
    if (typeof h != "function")
      throw new Error(process.env.NODE_ENV === "production" ? te(4) : "Expected the listener to be a function. Instead, received: '" + we(h) + "'");
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? te(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    var g = !0;
    return u(), a.push(h), function() {
      if (g) {
        if (c)
          throw new Error(process.env.NODE_ENV === "production" ? te(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        g = !1, u();
        var D = a.indexOf(h);
        a.splice(D, 1), i = null;
      }
    };
  }
  function d(h) {
    if (!_s(h))
      throw new Error(process.env.NODE_ENV === "production" ? te(7) : "Actions must be plain objects. Instead, the actual type was: '" + we(h) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    if (typeof h.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? te(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? te(9) : "Reducers may not dispatch actions.");
    try {
      c = !0, s = o(s, h);
    } finally {
      c = !1;
    }
    for (var g = i = a, S = 0; S < g.length; S++) {
      var D = g[S];
      D();
    }
    return h;
  }
  function p(h) {
    if (typeof h != "function")
      throw new Error(process.env.NODE_ENV === "production" ? te(10) : "Expected the nextReducer to be a function. Instead, received: '" + we(h));
    o = h, d({
      type: Wr.REPLACE
    });
  }
  function v() {
    var h, g = l;
    return h = {
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
    }, h[Ur] = function() {
      return this;
    }, h;
  }
  return d({
    type: Wr.INIT
  }), n = {
    dispatch: d,
    subscribe: l,
    getState: f,
    replaceReducer: p
  }, n[Ur] = v, n;
}
function kr(e, t) {
  return function() {
    return t(e.apply(this, arguments));
  };
}
function Hr(e, t) {
  if (typeof e == "function")
    return kr(e, t);
  if (typeof e != "object" || e === null)
    throw new Error(process.env.NODE_ENV === "production" ? te(16) : "bindActionCreators expected an object or a function, but instead received: '" + we(e) + `'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`);
  var r = {};
  for (var n in e) {
    var o = e[n];
    typeof o == "function" && (r[n] = kr(o, t));
  }
  return r;
}
function Kn() {
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
function Bs() {
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
      return s = Kn.apply(void 0, a)(o.dispatch), Gr(Gr({}, o), {}, {
        dispatch: s
      });
    };
  };
}
var zt = { exports: {} }, It = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jr;
function Ls() {
  if (jr)
    return It;
  jr = 1;
  var e = N;
  function t(l, d) {
    return l === d && (l !== 0 || 1 / l === 1 / d) || l !== l && d !== d;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, o = e.useEffect, s = e.useLayoutEffect, i = e.useDebugValue;
  function a(l, d) {
    var p = d(), v = n({ inst: { value: p, getSnapshot: d } }), h = v[0].inst, g = v[1];
    return s(function() {
      h.value = p, h.getSnapshot = d, c(h) && g({ inst: h });
    }, [l, p, d]), o(function() {
      return c(h) && g({ inst: h }), l(function() {
        c(h) && g({ inst: h });
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
var qr;
function $s() {
  return qr || (qr = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = N, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function r(E) {
      {
        for (var y = arguments.length, b = new Array(y > 1 ? y - 1 : 0), w = 1; w < y; w++)
          b[w - 1] = arguments[w];
        n("error", E, b);
      }
    }
    function n(E, y, b) {
      {
        var w = t.ReactDebugCurrentFrame, I = w.getStackAddendum();
        I !== "" && (y += "%s", b = b.concat([I]));
        var C = b.map(function(R) {
          return String(R);
        });
        C.unshift("Warning: " + y), Function.prototype.apply.call(console[E], console, C);
      }
    }
    function o(E, y) {
      return E === y && (E !== 0 || 1 / E === 1 / y) || E !== E && y !== y;
    }
    var s = typeof Object.is == "function" ? Object.is : o, i = e.useState, a = e.useEffect, c = e.useLayoutEffect, u = e.useDebugValue, f = !1, l = !1;
    function d(E, y, b) {
      f || e.startTransition !== void 0 && (f = !0, r("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var w = y();
      if (!l) {
        var I = y();
        s(w, I) || (r("The result of getSnapshot should be cached to avoid an infinite loop"), l = !0);
      }
      var C = i({
        inst: {
          value: w,
          getSnapshot: y
        }
      }), R = C[0].inst, P = C[1];
      return c(function() {
        R.value = w, R.getSnapshot = y, p(R) && P({
          inst: R
        });
      }, [E, w, y]), a(function() {
        p(R) && P({
          inst: R
        });
        var L = function() {
          p(R) && P({
            inst: R
          });
        };
        return E(L);
      }, [E]), u(w), w;
    }
    function p(E) {
      var y = E.getSnapshot, b = E.value;
      try {
        var w = y();
        return !s(b, w);
      } catch {
        return !0;
      }
    }
    function v(E, y, b) {
      return y();
    }
    var h = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", g = !h, S = g ? v : d, D = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : S;
    _t.useSyncExternalStore = D, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), _t;
}
process.env.NODE_ENV === "production" ? zt.exports = Ls() : zt.exports = $s();
var ar = zt.exports, At = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zr;
function Vs() {
  if (zr)
    return At;
  zr = 1;
  var e = N, t = ar;
  function r(u, f) {
    return u === f && (u !== 0 || 1 / u === 1 / f) || u !== u && f !== f;
  }
  var n = typeof Object.is == "function" ? Object.is : r, o = t.useSyncExternalStore, s = e.useRef, i = e.useEffect, a = e.useMemo, c = e.useDebugValue;
  return At.useSyncExternalStoreWithSelector = function(u, f, l, d, p) {
    var v = s(null);
    if (v.current === null) {
      var h = { hasValue: !1, value: null };
      v.current = h;
    } else
      h = v.current;
    v = a(function() {
      function S(w) {
        if (!D) {
          if (D = !0, E = w, w = d(w), p !== void 0 && h.hasValue) {
            var I = h.value;
            if (p(I, w))
              return y = I;
          }
          return y = w;
        }
        if (I = y, n(E, w))
          return I;
        var C = d(w);
        return p !== void 0 && p(I, C) ? I : (E = w, y = C);
      }
      var D = !1, E, y, b = l === void 0 ? null : l;
      return [function() {
        return S(f());
      }, b === null ? void 0 : function() {
        return S(b());
      }];
    }, [f, l, d, p]);
    var g = o(u, v[0], v[1]);
    return i(function() {
      h.hasValue = !0, h.value = g;
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
var Yr;
function Ms() {
  return Yr || (Yr = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = N, t = ar;
    function r(f, l) {
      return f === l && (f !== 0 || 1 / f === 1 / l) || f !== f && l !== l;
    }
    var n = typeof Object.is == "function" ? Object.is : r, o = t.useSyncExternalStore, s = e.useRef, i = e.useEffect, a = e.useMemo, c = e.useDebugValue;
    function u(f, l, d, p, v) {
      var h = s(null), g;
      h.current === null ? (g = {
        hasValue: !1,
        value: null
      }, h.current = g) : g = h.current;
      var S = a(function() {
        var b = !1, w, I, C = function(T) {
          if (!b) {
            b = !0, w = T;
            var G = p(T);
            if (v !== void 0 && g.hasValue) {
              var W = g.value;
              if (v(W, G))
                return I = W, W;
            }
            return I = G, G;
          }
          var q = w, K = I;
          if (n(q, T))
            return K;
          var X = p(T);
          return v !== void 0 && v(K, X) ? K : (w = T, I = X, X);
        }, R = d === void 0 ? null : d, P = function() {
          return C(l());
        }, L = R === null ? void 0 : function() {
          return C(R());
        };
        return [P, L];
      }, [l, d, p, v]), D = S[0], E = S[1], y = o(f, D, E);
      return i(function() {
        g.hasValue = !0, g.value = y;
      }, [y]), c(y), y;
    }
    Pt.useSyncExternalStoreWithSelector = u, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Pt;
}
process.env.NODE_ENV === "production" ? Vs() : Ms();
function Fs(e) {
  e();
}
let Xn = Fs;
const Gs = (e) => Xn = e, Us = () => Xn, Kr = Symbol.for("react-redux-context"), Xr = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function Ws() {
  var e;
  if (!N.createContext)
    return {};
  const t = (e = Xr[Kr]) != null ? e : Xr[Kr] = /* @__PURE__ */ new Map();
  let r = t.get(N.createContext);
  return r || (r = N.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(N.createContext, r)), r;
}
const Jn = /* @__PURE__ */ Ws(), ks = () => {
  throw new Error("uSES not initialized!");
};
var Yt = { exports: {} }, $ = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jr;
function Hs() {
  if (Jr)
    return $;
  Jr = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, D = e ? Symbol.for("react.scope") : 60119;
  function E(b) {
    if (typeof b == "object" && b !== null) {
      var w = b.$$typeof;
      switch (w) {
        case t:
          switch (b = b.type, b) {
            case c:
            case u:
            case n:
            case s:
            case o:
            case l:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case a:
                case f:
                case v:
                case p:
                case i:
                  return b;
                default:
                  return w;
              }
          }
        case r:
          return w;
      }
    }
  }
  function y(b) {
    return E(b) === u;
  }
  return $.AsyncMode = c, $.ConcurrentMode = u, $.ContextConsumer = a, $.ContextProvider = i, $.Element = t, $.ForwardRef = f, $.Fragment = n, $.Lazy = v, $.Memo = p, $.Portal = r, $.Profiler = s, $.StrictMode = o, $.Suspense = l, $.isAsyncMode = function(b) {
    return y(b) || E(b) === c;
  }, $.isConcurrentMode = y, $.isContextConsumer = function(b) {
    return E(b) === a;
  }, $.isContextProvider = function(b) {
    return E(b) === i;
  }, $.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === t;
  }, $.isForwardRef = function(b) {
    return E(b) === f;
  }, $.isFragment = function(b) {
    return E(b) === n;
  }, $.isLazy = function(b) {
    return E(b) === v;
  }, $.isMemo = function(b) {
    return E(b) === p;
  }, $.isPortal = function(b) {
    return E(b) === r;
  }, $.isProfiler = function(b) {
    return E(b) === s;
  }, $.isStrictMode = function(b) {
    return E(b) === o;
  }, $.isSuspense = function(b) {
    return E(b) === l;
  }, $.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === n || b === u || b === s || b === o || b === l || b === d || typeof b == "object" && b !== null && (b.$$typeof === v || b.$$typeof === p || b.$$typeof === i || b.$$typeof === a || b.$$typeof === f || b.$$typeof === g || b.$$typeof === S || b.$$typeof === D || b.$$typeof === h);
  }, $.typeOf = E, $;
}
var V = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qr;
function js() {
  return Qr || (Qr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, D = e ? Symbol.for("react.scope") : 60119;
    function E(O) {
      return typeof O == "string" || typeof O == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      O === n || O === u || O === s || O === o || O === l || O === d || typeof O == "object" && O !== null && (O.$$typeof === v || O.$$typeof === p || O.$$typeof === i || O.$$typeof === a || O.$$typeof === f || O.$$typeof === g || O.$$typeof === S || O.$$typeof === D || O.$$typeof === h);
    }
    function y(O) {
      if (typeof O == "object" && O !== null) {
        var ue = O.$$typeof;
        switch (ue) {
          case t:
            var A = O.type;
            switch (A) {
              case c:
              case u:
              case n:
              case s:
              case o:
              case l:
                return A;
              default:
                var Re = A && A.$$typeof;
                switch (Re) {
                  case a:
                  case f:
                  case v:
                  case p:
                  case i:
                    return Re;
                  default:
                    return ue;
                }
            }
          case r:
            return ue;
        }
      }
    }
    var b = c, w = u, I = a, C = i, R = t, P = f, L = n, T = v, G = p, W = r, q = s, K = o, X = l, re = !1;
    function k(O) {
      return re || (re = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), ie(O) || y(O) === c;
    }
    function ie(O) {
      return y(O) === u;
    }
    function pe(O) {
      return y(O) === a;
    }
    function me(O) {
      return y(O) === i;
    }
    function H(O) {
      return typeof O == "object" && O !== null && O.$$typeof === t;
    }
    function Ae(O) {
      return y(O) === f;
    }
    function ye(O) {
      return y(O) === n;
    }
    function Ee(O) {
      return y(O) === v;
    }
    function Pe(O) {
      return y(O) === p;
    }
    function Ge(O) {
      return y(O) === r;
    }
    function ge(O) {
      return y(O) === s;
    }
    function De(O) {
      return y(O) === o;
    }
    function ct(O) {
      return y(O) === l;
    }
    V.AsyncMode = b, V.ConcurrentMode = w, V.ContextConsumer = I, V.ContextProvider = C, V.Element = R, V.ForwardRef = P, V.Fragment = L, V.Lazy = T, V.Memo = G, V.Portal = W, V.Profiler = q, V.StrictMode = K, V.Suspense = X, V.isAsyncMode = k, V.isConcurrentMode = ie, V.isContextConsumer = pe, V.isContextProvider = me, V.isElement = H, V.isForwardRef = Ae, V.isFragment = ye, V.isLazy = Ee, V.isMemo = Pe, V.isPortal = Ge, V.isProfiler = ge, V.isStrictMode = De, V.isSuspense = ct, V.isValidElementType = E, V.typeOf = y;
  }()), V;
}
process.env.NODE_ENV === "production" ? Yt.exports = Hs() : Yt.exports = js();
var qs = Yt.exports, cr = qs, zs = {
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
}, Ys = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, Ks = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Qn = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, lr = {};
lr[cr.ForwardRef] = Ks;
lr[cr.Memo] = Qn;
function Zr(e) {
  return cr.isMemo(e) ? Qn : lr[e.$$typeof] || zs;
}
var Xs = Object.defineProperty, Js = Object.getOwnPropertyNames, en = Object.getOwnPropertySymbols, Qs = Object.getOwnPropertyDescriptor, Zs = Object.getPrototypeOf, tn = Object.prototype;
function Zn(e, t, r) {
  if (typeof t != "string") {
    if (tn) {
      var n = Zs(t);
      n && n !== tn && Zn(e, n, r);
    }
    var o = Js(t);
    en && (o = o.concat(en(t)));
    for (var s = Zr(e), i = Zr(t), a = 0; a < o.length; ++a) {
      var c = o[a];
      if (!Ys[c] && !(r && r[c]) && !(i && i[c]) && !(s && s[c])) {
        var u = Qs(t, c);
        try {
          Xs(e, c, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var ei = Zn;
const rn = /* @__PURE__ */ fs(ei);
var Kt = { exports: {} }, M = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nn;
function ti() {
  if (nn)
    return M;
  nn = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), v;
  v = Symbol.for("react.module.reference");
  function h(g) {
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
  return M.ContextConsumer = i, M.ContextProvider = s, M.Element = e, M.ForwardRef = c, M.Fragment = r, M.Lazy = d, M.Memo = l, M.Portal = t, M.Profiler = o, M.StrictMode = n, M.Suspense = u, M.SuspenseList = f, M.isAsyncMode = function() {
    return !1;
  }, M.isConcurrentMode = function() {
    return !1;
  }, M.isContextConsumer = function(g) {
    return h(g) === i;
  }, M.isContextProvider = function(g) {
    return h(g) === s;
  }, M.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === e;
  }, M.isForwardRef = function(g) {
    return h(g) === c;
  }, M.isFragment = function(g) {
    return h(g) === r;
  }, M.isLazy = function(g) {
    return h(g) === d;
  }, M.isMemo = function(g) {
    return h(g) === l;
  }, M.isPortal = function(g) {
    return h(g) === t;
  }, M.isProfiler = function(g) {
    return h(g) === o;
  }, M.isStrictMode = function(g) {
    return h(g) === n;
  }, M.isSuspense = function(g) {
    return h(g) === u;
  }, M.isSuspenseList = function(g) {
    return h(g) === f;
  }, M.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === r || g === o || g === n || g === u || g === f || g === p || typeof g == "object" && g !== null && (g.$$typeof === d || g.$$typeof === l || g.$$typeof === s || g.$$typeof === i || g.$$typeof === c || g.$$typeof === v || g.getModuleId !== void 0);
  }, M.typeOf = h, M;
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
var on;
function ri() {
  return on || (on = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), v = !1, h = !1, g = !1, S = !1, D = !1, E;
    E = Symbol.for("react.module.reference");
    function y(A) {
      return !!(typeof A == "string" || typeof A == "function" || A === r || A === o || D || A === n || A === u || A === f || S || A === p || v || h || g || typeof A == "object" && A !== null && (A.$$typeof === d || A.$$typeof === l || A.$$typeof === s || A.$$typeof === i || A.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      A.$$typeof === E || A.getModuleId !== void 0));
    }
    function b(A) {
      if (typeof A == "object" && A !== null) {
        var Re = A.$$typeof;
        switch (Re) {
          case e:
            var lt = A.type;
            switch (lt) {
              case r:
              case o:
              case n:
              case u:
              case f:
                return lt;
              default:
                var Lr = lt && lt.$$typeof;
                switch (Lr) {
                  case a:
                  case i:
                  case c:
                  case d:
                  case l:
                  case s:
                    return Lr;
                  default:
                    return Re;
                }
            }
          case t:
            return Re;
        }
      }
    }
    var w = i, I = s, C = e, R = c, P = r, L = d, T = l, G = t, W = o, q = n, K = u, X = f, re = !1, k = !1;
    function ie(A) {
      return re || (re = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function pe(A) {
      return k || (k = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function me(A) {
      return b(A) === i;
    }
    function H(A) {
      return b(A) === s;
    }
    function Ae(A) {
      return typeof A == "object" && A !== null && A.$$typeof === e;
    }
    function ye(A) {
      return b(A) === c;
    }
    function Ee(A) {
      return b(A) === r;
    }
    function Pe(A) {
      return b(A) === d;
    }
    function Ge(A) {
      return b(A) === l;
    }
    function ge(A) {
      return b(A) === t;
    }
    function De(A) {
      return b(A) === o;
    }
    function ct(A) {
      return b(A) === n;
    }
    function O(A) {
      return b(A) === u;
    }
    function ue(A) {
      return b(A) === f;
    }
    F.ContextConsumer = w, F.ContextProvider = I, F.Element = C, F.ForwardRef = R, F.Fragment = P, F.Lazy = L, F.Memo = T, F.Portal = G, F.Profiler = W, F.StrictMode = q, F.Suspense = K, F.SuspenseList = X, F.isAsyncMode = ie, F.isConcurrentMode = pe, F.isContextConsumer = me, F.isContextProvider = H, F.isElement = Ae, F.isForwardRef = ye, F.isFragment = Ee, F.isLazy = Pe, F.isMemo = Ge, F.isPortal = ge, F.isProfiler = De, F.isStrictMode = ct, F.isSuspense = O, F.isSuspenseList = ue, F.isValidElementType = y, F.typeOf = b;
  }()), F;
}
process.env.NODE_ENV === "production" ? Kt.exports = ti() : Kt.exports = ri();
var sn = Kt.exports;
function ur(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function Rt(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || ur(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else
    throw new Error(`Unexpected value for ${t} in connect.`);
}
function ni(e, t, r) {
  Rt(e, "mapStateToProps"), Rt(t, "mapDispatchToProps"), Rt(r, "mergeProps");
}
const oi = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function si(e, t, r, n, {
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
  function h() {
    return e.dependsOnOwnProps && (f = e(c, u)), t.dependsOnOwnProps && (l = t(n, u)), d = r(f, l, u), d;
  }
  function g() {
    const D = e(c, u), E = !i(D, f);
    return f = D, E && (d = r(f, l, u)), d;
  }
  function S(D, E) {
    const y = !s(E, u), b = !o(D, c, E, u);
    return c = D, u = E, y && b ? v() : y ? h() : b ? g() : d;
  }
  return function(E, y) {
    return a ? S(E, y) : p(E, y);
  };
}
function ii(e, t) {
  let {
    initMapStateToProps: r,
    initMapDispatchToProps: n,
    initMergeProps: o
  } = t, s = zn(t, oi);
  const i = r(e, s), a = n(e, s), c = o(e, s);
  return process.env.NODE_ENV !== "production" && ni(i, a, c), si(i, a, c, e, s);
}
function ai(e, t) {
  const r = {};
  for (const n in e) {
    const o = e[n];
    typeof o == "function" && (r[n] = (...s) => t(o(...s)));
  }
  return r;
}
function ci(e) {
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
function eo(e, t, r) {
  ci(e) || ur(`${r}() in ${t} must return a plain object. Instead received ${e}.`);
}
function Xt(e) {
  return function(r) {
    const n = e(r);
    function o() {
      return n;
    }
    return o.dependsOnOwnProps = !1, o;
  };
}
function an(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function to(e, t) {
  return function(n, {
    displayName: o
  }) {
    const s = function(a, c) {
      return s.dependsOnOwnProps ? s.mapToProps(a, c) : s.mapToProps(a, void 0);
    };
    return s.dependsOnOwnProps = !0, s.mapToProps = function(a, c) {
      s.mapToProps = e, s.dependsOnOwnProps = an(e);
      let u = s(a, c);
      return typeof u == "function" && (s.mapToProps = u, s.dependsOnOwnProps = an(u), u = s(a, c)), process.env.NODE_ENV !== "production" && eo(u, o, t), u;
    }, s;
  };
}
function dr(e, t) {
  return (r, n) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${n.wrappedComponentName}.`);
  };
}
function li(e) {
  return e && typeof e == "object" ? Xt((t) => (
    // @ts-ignore
    ai(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    to(e, "mapDispatchToProps")
  ) : dr(e, "mapDispatchToProps") : Xt((t) => ({
    dispatch: t
  }));
}
function ui(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    to(e, "mapStateToProps")
  ) : dr(e, "mapStateToProps") : Xt(() => ({}));
}
function di(e, t, r) {
  return Te({}, r, e, t);
}
function fi(e) {
  return function(r, {
    displayName: n,
    areMergedPropsEqual: o
  }) {
    let s = !1, i;
    return function(c, u, f) {
      const l = e(c, u, f);
      return s ? o(l, i) || (i = l) : (s = !0, i = l, process.env.NODE_ENV !== "production" && eo(i, n, "mergeProps")), i;
    };
  };
}
function pi(e) {
  return e ? typeof e == "function" ? fi(e) : dr(e, "mergeProps") : () => di;
}
function mi() {
  const e = Us();
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
const cn = {
  notify() {
  },
  get: () => []
};
function ro(e, t) {
  let r, n = cn, o = 0, s = !1;
  function i(h) {
    f();
    const g = n.subscribe(h);
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
    o++, r || (r = t ? t.addNestedSub(c) : e.subscribe(c), n = mi());
  }
  function l() {
    o--, r && o === 0 && (r(), r = void 0, n.clear(), n = cn);
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
const gi = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", mt = gi ? N.useLayoutEffect : N.useEffect;
function ln(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Tt(e, t) {
  if (ln(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length)
    return !1;
  for (let o = 0; o < r.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, r[o]) || !ln(e[r[o]], t[r[o]]))
      return !1;
  return !0;
}
const hi = ["reactReduxForwardedRef"];
let no = ks;
const bi = (e) => {
  no = e;
}, vi = [null, null], yi = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function Ei(e, t, r) {
  mt(() => e(...t), r);
}
function Di(e, t, r, n, o, s) {
  e.current = n, r.current = !1, o.current && (o.current = null, s());
}
function Si(e, t, r, n, o, s, i, a, c, u, f) {
  if (!e)
    return () => {
    };
  let l = !1, d = null;
  const p = () => {
    if (l || !a.current)
      return;
    const h = t.getState();
    let g, S;
    try {
      g = n(h, o.current);
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
function Ni(e, t) {
  return e === t;
}
let un = !1;
function oo(e, t, r, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: n,
  areStatesEqual: o = Ni,
  areOwnPropsEqual: s = Tt,
  areStatePropsEqual: i = Tt,
  areMergedPropsEqual: a = Tt,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: c = !1,
  // the context consumer to use
  context: u = Jn
} = {}) {
  process.env.NODE_ENV !== "production" && n !== void 0 && !un && (un = !0, ur('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const f = u, l = ui(e), d = li(t), p = pi(r), v = !!e;
  return (g) => {
    if (process.env.NODE_ENV !== "production" && !sn.isValidElementType(g))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${yi(g)}`);
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
    function y(I) {
      const [C, R, P] = N.useMemo(() => {
        const {
          reactReduxForwardedRef: O
        } = I, ue = zn(I, hi);
        return [I.context, O, ue];
      }, [I]), L = N.useMemo(() => C && C.Consumer && // @ts-ignore
      sn.isContextConsumer(/* @__PURE__ */ N.createElement(C.Consumer, null)) ? C : f, [C, f]), T = N.useContext(L), G = !!I.store && !!I.store.getState && !!I.store.dispatch, W = !!T && !!T.store;
      if (process.env.NODE_ENV !== "production" && !G && !W)
        throw new Error(`Could not find "store" in the context of "${D}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${D} in connect options.`);
      const q = G ? I.store : T.store, K = W ? T.getServerState : q.getState, X = N.useMemo(() => ii(q.dispatch, E), [q]), [re, k] = N.useMemo(() => {
        if (!v)
          return vi;
        const O = ro(q, G ? void 0 : T.subscription), ue = O.notifyNestedSubs.bind(O);
        return [O, ue];
      }, [q, G, T]), ie = N.useMemo(() => G ? T : Te({}, T, {
        subscription: re
      }), [G, T, re]), pe = N.useRef(), me = N.useRef(P), H = N.useRef(), Ae = N.useRef(!1);
      N.useRef(!1);
      const ye = N.useRef(!1), Ee = N.useRef();
      mt(() => (ye.current = !0, () => {
        ye.current = !1;
      }), []);
      const Pe = N.useMemo(() => () => H.current && P === me.current ? H.current : X(q.getState(), P), [q, P]), Ge = N.useMemo(() => (ue) => re ? Si(
        v,
        q,
        re,
        // @ts-ignore
        X,
        me,
        pe,
        Ae,
        ye,
        H,
        k,
        ue
      ) : () => {
      }, [re]);
      Ei(Di, [me, pe, Ae, P, H, k]);
      let ge;
      try {
        ge = no(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          Ge,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          Pe,
          K ? () => X(K(), P) : Pe
        );
      } catch (O) {
        throw Ee.current && (O.message += `
The error may be correlated with this previous error:
${Ee.current.stack}

`), O;
      }
      mt(() => {
        Ee.current = void 0, H.current = void 0, pe.current = ge;
      });
      const De = N.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ N.createElement(g, Te({}, ge, {
          ref: R
        }))
      ), [R, g, ge]);
      return N.useMemo(() => v ? /* @__PURE__ */ N.createElement(L.Provider, {
        value: ie
      }, De) : De, [L, De, ie]);
    }
    const w = N.memo(y);
    if (w.WrappedComponent = g, w.displayName = y.displayName = D, c) {
      const C = N.forwardRef(function(P, L) {
        return /* @__PURE__ */ N.createElement(w, Te({}, P, {
          reactReduxForwardedRef: L
        }));
      });
      return C.displayName = D, C.WrappedComponent = g, rn(C, g);
    }
    return rn(w, g);
  };
}
function wi({
  store: e,
  context: t,
  children: r,
  serverState: n,
  stabilityCheck: o = "once",
  noopCheck: s = "once"
}) {
  const i = N.useMemo(() => {
    const u = ro(e);
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
bi(ar.useSyncExternalStore);
Gs(or.unstable_batchedUpdates);
function xi(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function so(e, t) {
  var r = N.useState(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], n = N.useRef(!0), o = N.useRef(r), s = n.current || !!(t && o.current.inputs && xi(t, o.current.inputs)), i = s ? o.current : {
    inputs: t,
    result: e()
  };
  return N.useEffect(function() {
    n.current = !1, o.current = i;
  }, [i]), i.result;
}
function Oi(e, t) {
  return so(function() {
    return e;
  }, t);
}
var B = so, _ = Oi, de = function(t) {
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
}, fr = function(t, r) {
  return {
    top: t.top - r.top,
    left: t.left - r.left,
    bottom: t.bottom + r.bottom,
    right: t.right + r.right
  };
}, dn = function(t, r) {
  return {
    top: t.top + r.top,
    left: t.left + r.left,
    bottom: t.bottom - r.bottom,
    right: t.right - r.right
  };
}, Ci = function(t, r) {
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
}, pr = function(t) {
  var r = t.borderBox, n = t.margin, o = n === void 0 ? Bt : n, s = t.border, i = s === void 0 ? Bt : s, a = t.padding, c = a === void 0 ? Bt : a, u = de(fr(r, o)), f = de(dn(r, i)), l = de(dn(f, c));
  return {
    marginBox: u,
    borderBox: de(r),
    paddingBox: f,
    contentBox: l,
    margin: o,
    border: i,
    padding: c
  };
}, ae = function(t) {
  var r = t.slice(0, -2), n = t.slice(-2);
  if (n !== "px")
    return 0;
  var o = Number(r);
  return isNaN(o) && (process.env.NODE_ENV !== "production" ? $r(!1, "Could not parse value [raw: " + t + ", without suffix: " + r + "]") : $r(!1)), o;
}, Ii = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, gt = function(t, r) {
  var n = t.borderBox, o = t.border, s = t.margin, i = t.padding, a = Ci(n, r);
  return pr({
    borderBox: a,
    border: o,
    margin: s,
    padding: i
  });
}, ht = function(t, r) {
  return r === void 0 && (r = Ii()), gt(t, r);
}, io = function(t, r) {
  var n = {
    top: ae(r.marginTop),
    right: ae(r.marginRight),
    bottom: ae(r.marginBottom),
    left: ae(r.marginLeft)
  }, o = {
    top: ae(r.paddingTop),
    right: ae(r.paddingRight),
    bottom: ae(r.paddingBottom),
    left: ae(r.paddingLeft)
  }, s = {
    top: ae(r.borderTopWidth),
    right: ae(r.borderRightWidth),
    bottom: ae(r.borderBottomWidth),
    left: ae(r.borderLeftWidth)
  };
  return pr({
    borderBox: t,
    margin: n,
    padding: o,
    border: s
  });
}, ao = function(t) {
  var r = t.getBoundingClientRect(), n = window.getComputedStyle(t);
  return io(r, n);
}, fn = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function _i(e, t) {
  return !!(e === t || fn(e) && fn(t));
}
function Ai(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!_i(e[r], t[r]))
      return !1;
  return !0;
}
function z(e, t) {
  t === void 0 && (t = Ai);
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
var Pi = function(t) {
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
const ze = Pi, Ri = process.env.NODE_ENV === "production", Ti = /[ \t]{2,}/g, Bi = /^[ \t]*/gm, pn = (e) => e.replace(Ti, " ").replace(Bi, "").trim(), Li = (e) => pn(`
  %c@hello-pangea/dnd

  %c${pn(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), $i = (e) => [Li(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], Vi = "__@hello-pangea/dnd-disable-dev-warnings";
function co(e, t) {
  Ri || typeof window < "u" && window[Vi] || console[e](...$i(t));
}
const U = co.bind(null, "warn"), Jt = co.bind(null, "error");
function he() {
}
function Mi(e, t) {
  return {
    ...e,
    ...t
  };
}
function ce(e, t, r) {
  const n = t.map((o) => {
    const s = Mi(r, o.options);
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
const Fi = process.env.NODE_ENV === "production", mn = "Invariant failed";
class Ye extends Error {
}
Ye.prototype.toString = function() {
  return this.message;
};
function m(e, t) {
  if (!e)
    throw Fi ? new Ye(mn) : new Ye(`${mn}: ${t || ""}`);
}
class Gi extends x.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = he, this.onWindowError = (r) => {
      const n = this.getCallbacks();
      n.isDragging() && (n.tryAbort(), process.env.NODE_ENV !== "production" && U(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const o = r.error;
      o instanceof Ye && (r.preventDefault(), process.env.NODE_ENV !== "production" && Jt(o.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (r) => {
      this.callbacks = r;
    };
  }
  componentDidMount() {
    this.unbind = ce(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof Ye) {
      process.env.NODE_ENV !== "production" && Jt(t.message), this.setState({});
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
const Ui = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`, bt = (e) => e + 1, Wi = (e) => `
  You have lifted an item in position ${bt(e.source.index)}
`, lo = (e, t) => {
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
}, uo = (e, t, r) => t.droppableId === r.droppableId ? `
      The item ${e}
      has been combined with ${r.draggableId}` : `
      The item ${e}
      in list ${t.droppableId}
      has been combined with ${r.draggableId}
      in list ${r.droppableId}
    `, ki = (e) => {
  const t = e.destination;
  if (t)
    return lo(e.source, t);
  const r = e.combine;
  return r ? uo(e.draggableId, e.source, r) : "You are over an area that cannot be dropped on";
}, gn = (e) => `
  The item has returned to its starting position
  of ${bt(e.index)}
`, Hi = (e) => {
  if (e.reason === "CANCEL")
    return `
      Movement cancelled.
      ${gn(e.source)}
    `;
  const t = e.destination, r = e.combine;
  return t ? `
      You have dropped the item.
      ${lo(e.source, t)}
    ` : r ? `
      You have dropped the item.
      ${uo(e.draggableId, e.source, r)}
    ` : `
    The item has been dropped while not over a drop area.
    ${gn(e.source)}
  `;
}, ji = {
  dragHandleUsageInstructions: Ui,
  onDragStart: Wi,
  onDragUpdate: ki,
  onDragEnd: Hi
};
var pt = ji;
const Y = {
  x: 0,
  y: 0
}, Q = (e, t) => ({
  x: e.x + t.x,
  y: e.y + t.y
}), ne = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), be = (e, t) => e.x === t.x && e.y === t.y, Me = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), Ie = (e, t, r = 0) => e === "x" ? {
  x: t,
  y: r
} : {
  x: r,
  y: t
}, Ke = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2), hn = (e, t) => Math.min(...t.map((r) => Ke(e, r))), fo = (e) => (t) => ({
  x: e(t.x),
  y: e(t.y)
});
var qi = (e, t) => {
  const r = de({
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
}), bn = (e) => [{
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
}], zi = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, Yi = (e, t) => t ? rt(e, t.scroll.diff.displacement) : e, Ki = (e, t, r) => r && r.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + r.increasedBy[t.line]
} : e, Xi = (e, t) => t && t.shouldClipSubject ? qi(t.pageMarginBox, e) : de(e);
var Be = ({
  page: e,
  withPlaceholder: t,
  axis: r,
  frame: n
}) => {
  const o = Yi(e.marginBox, n), s = Ki(o, r, t), i = Xi(s, n);
  return {
    page: e,
    withPlaceholder: t,
    active: i
  };
}, mr = (e, t) => {
  e.frame || (process.env.NODE_ENV, m(!1));
  const r = e.frame, n = ne(t, r.scroll.initial), o = Me(n), s = {
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
const po = z((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {})), mo = z((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {})), Et = z((e) => Object.values(e)), Ji = z((e) => Object.values(e));
var _e = z((e, t) => Ji(t).filter((n) => e === n.descriptor.droppableId).sort((n, o) => n.descriptor.index - o.descriptor.index));
function gr(e) {
  return e.at && e.at.type === "REORDER" ? e.at.destination : null;
}
function Dt(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
var St = z((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id)), Qi = ({
  isMovingForward: e,
  draggable: t,
  destination: r,
  insideDestination: n,
  previousImpact: o
}) => {
  if (!r.isCombineEnabled || !gr(o))
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
const go = {
  point: Y,
  value: 0
}, Xe = {
  invisible: {},
  visible: {},
  all: []
}, Zi = {
  displaced: Xe,
  displacedBy: go,
  at: null
};
var ea = Zi, le = (e, t) => (r) => e <= r && r <= t, ho = (e) => {
  const t = le(e.top, e.bottom), r = le(e.left, e.right);
  return (n) => {
    if (t(n.top) && t(n.bottom) && r(n.left) && r(n.right))
      return !0;
    const s = t(n.top) || t(n.bottom), i = r(n.left) || r(n.right);
    if (s && i)
      return !0;
    const c = n.top < e.top && n.bottom > e.bottom, u = n.left < e.left && n.right > e.right;
    return c && u ? !0 : c && i || u && s;
  };
}, ta = (e) => {
  const t = le(e.top, e.bottom), r = le(e.left, e.right);
  return (n) => t(n.top) && t(n.bottom) && r(n.left) && r(n.right);
};
const hr = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, bo = {
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
var ra = (e) => (t) => {
  const r = le(t.top, t.bottom), n = le(t.left, t.right);
  return (o) => e === hr ? r(o.top) && r(o.bottom) : n(o.left) && n(o.right);
};
const na = (e, t) => {
  const r = t.frame ? t.frame.scroll.diff.displacement : Y;
  return rt(e, r);
}, oa = (e, t, r) => t.subject.active ? r(t.subject.active)(e) : !1, sa = (e, t, r) => r(t)(e), br = ({
  target: e,
  destination: t,
  viewport: r,
  withDroppableDisplacement: n,
  isVisibleThroughFrameFn: o
}) => {
  const s = n ? na(e, t) : e;
  return oa(s, t, o) && sa(s, r, o);
}, ia = (e) => br({
  ...e,
  isVisibleThroughFrameFn: ho
}), vo = (e) => br({
  ...e,
  isVisibleThroughFrameFn: ta
}), aa = (e) => br({
  ...e,
  isVisibleThroughFrameFn: ra(e.destination.axis)
}), ca = (e, t, r) => {
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
function la(e, t) {
  const r = e.page.marginBox, n = {
    top: t.point.y,
    right: 0,
    bottom: 0,
    left: t.point.x
  };
  return de(fr(r, n));
}
function Je({
  afterDragging: e,
  destination: t,
  displacedBy: r,
  viewport: n,
  forceShouldAnimate: o,
  last: s
}) {
  return e.reduce(function(a, c) {
    const u = la(c, r), f = c.descriptor.id;
    if (a.all.push(f), !ia({
      target: u,
      destination: t,
      viewport: n,
      withDroppableDisplacement: !0
    }))
      return a.invisible[c.descriptor.id] = !0, a;
    const d = ca(f, s, o), p = {
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
function ua(e, t) {
  if (!e.length)
    return 0;
  const r = e[e.length - 1].descriptor.index;
  return t.inHomeList ? r : r + 1;
}
function vn({
  insideDestination: e,
  inHomeList: t,
  displacedBy: r,
  destination: n
}) {
  const o = ua(e, {
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
    return vn({
      insideDestination: t,
      inHomeList: c,
      displacedBy: o,
      destination: r
    });
  const u = t.find((v) => v.descriptor.index === i);
  if (!u)
    return vn({
      insideDestination: t,
      inHomeList: c,
      displacedBy: o,
      destination: r
    });
  const f = St(e, t), l = t.indexOf(u), d = f.slice(l);
  return {
    displaced: Je({
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
function ve(e, t) {
  return !!t.effected[e];
}
var da = ({
  isMovingForward: e,
  destination: t,
  draggables: r,
  combine: n,
  afterCritical: o
}) => {
  if (!t.isCombineEnabled)
    return null;
  const s = n.draggableId, a = r[s].descriptor.index;
  return ve(s, o) ? e ? a : a - 1 : e ? a + 1 : a;
}, fa = ({
  isMovingForward: e,
  isInHomeList: t,
  insideDestination: r,
  location: n
}) => {
  if (!r.length)
    return null;
  const o = n.index, s = e ? o + 1 : o - 1, i = r[0].descriptor.index, a = r[r.length - 1].descriptor.index, c = t ? a : a + 1;
  return s < i || s > c ? null : s;
}, pa = ({
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
    const l = fa({
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
  const f = da({
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
}, ma = ({
  displaced: e,
  afterCritical: t,
  combineWith: r,
  displacedBy: n
}) => {
  const o = !!(e.visible[r] || e.invisible[r]);
  return ve(r, t) ? o ? Y : Me(n.point) : o ? n.point : Y;
}, ga = ({
  afterCritical: e,
  impact: t,
  draggables: r
}) => {
  const n = Dt(t);
  n || (process.env.NODE_ENV, m(!1));
  const o = n.draggableId, s = r[o].page.borderBox.center, i = ma({
    displaced: t.displaced,
    afterCritical: e,
    combineWith: o,
    displacedBy: t.displacedBy
  });
  return Q(s, i);
};
const yo = (e, t) => t.margin[e.start] + t.borderBox[e.size] / 2, ha = (e, t) => t.margin[e.end] + t.borderBox[e.size] / 2, vr = (e, t, r) => t[e.crossAxisStart] + r.margin[e.crossAxisStart] + r.borderBox[e.crossAxisSize] / 2, yn = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: r
}) => Ie(e.line, t.marginBox[e.end] + yo(e, r), vr(e, t.marginBox, r)), En = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: r
}) => Ie(e.line, t.marginBox[e.start] - ha(e, r), vr(e, t.marginBox, r)), ba = ({
  axis: e,
  moveInto: t,
  isMoving: r
}) => Ie(e.line, t.contentBox[e.start] + yo(e, r), vr(e, t.contentBox, r));
var va = ({
  impact: e,
  draggable: t,
  draggables: r,
  droppable: n,
  afterCritical: o
}) => {
  const s = _e(n.descriptor.id, r), i = t.page, a = n.axis;
  if (!s.length)
    return ba({
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
    if (ve(f, o))
      return En({
        axis: a,
        moveRelativeTo: d.page,
        isMoving: i
      });
    const p = gt(d.page, u.point);
    return En({
      axis: a,
      moveRelativeTo: p,
      isMoving: i
    });
  }
  const l = s[s.length - 1];
  if (l.descriptor.id === t.descriptor.id)
    return i.borderBox.center;
  if (ve(l.descriptor.id, o)) {
    const d = gt(l.page, Me(o.displacedBy.point));
    return yn({
      axis: a,
      moveRelativeTo: d,
      isMoving: i
    });
  }
  return yn({
    axis: a,
    moveRelativeTo: l.page,
    isMoving: i
  });
}, Qt = (e, t) => {
  const r = e.frame;
  return r ? Q(t, r.scroll.diff.displacement) : t;
};
const ya = ({
  impact: e,
  draggable: t,
  droppable: r,
  draggables: n,
  afterCritical: o
}) => {
  const s = t.page.borderBox.center, i = e.at;
  return !r || !i ? s : i.type === "REORDER" ? va({
    impact: e,
    draggable: t,
    draggables: n,
    droppable: r,
    afterCritical: o
  }) : ga({
    impact: e,
    draggables: n,
    afterCritical: o
  });
};
var Nt = (e) => {
  const t = ya(e), r = e.droppable;
  return r ? Qt(r, t) : t;
}, Eo = (e, t) => {
  const r = ne(t, e.scroll.initial), n = Me(r);
  return {
    frame: de({
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
function Dn(e, t) {
  return e.map((r) => t[r]);
}
function Ea(e, t) {
  for (let r = 0; r < t.length; r++) {
    const n = t[r].visible[e];
    if (n)
      return n;
  }
  return null;
}
var Da = ({
  impact: e,
  viewport: t,
  destination: r,
  draggables: n,
  maxScrollChange: o
}) => {
  const s = Eo(t, Q(t.scroll.current, o)), i = r.frame ? mr(r, Q(r.frame.scroll.current, o)) : r, a = e.displaced, c = Je({
    afterDragging: Dn(a.all, n),
    destination: r,
    displacedBy: e.displacedBy,
    viewport: s.frame,
    last: a,
    forceShouldAnimate: !1
  }), u = Je({
    afterDragging: Dn(a.all, n),
    destination: i,
    displacedBy: e.displacedBy,
    viewport: t.frame,
    last: a,
    forceShouldAnimate: !1
  }), f = {}, l = {}, d = [a, c, u];
  return a.all.forEach((v) => {
    const h = Ea(v, d);
    if (h) {
      l[v] = h;
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
}, Sa = (e, t) => Q(e.scroll.diff.displacement, t), yr = ({
  pageBorderBoxCenter: e,
  draggable: t,
  viewport: r
}) => {
  const n = Sa(r, e), o = ne(n, t.page.borderBox.center);
  return Q(t.client.borderBox.center, o);
}, Do = ({
  draggable: e,
  destination: t,
  newPageBorderBoxCenter: r,
  viewport: n,
  withDroppableDisplacement: o,
  onlyOnMainAxis: s = !1
}) => {
  const i = ne(r, e.page.borderBox.center), c = {
    target: rt(e.page.borderBox, i),
    destination: t,
    withDroppableDisplacement: o,
    viewport: n
  };
  return s ? aa(c) : vo(c);
}, Na = ({
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
  const u = _e(r.descriptor.id, n), f = Fe(t, r), l = Qi({
    isMovingForward: e,
    draggable: t,
    destination: r,
    insideDestination: u,
    previousImpact: o
  }) || pa({
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
  if (Do({
    draggable: t,
    destination: r,
    newPageBorderBoxCenter: d,
    viewport: s.frame,
    withDroppableDisplacement: !1,
    onlyOnMainAxis: !0
  }))
    return {
      clientSelection: yr({
        pageBorderBoxCenter: d,
        draggable: t,
        viewport: s
      }),
      impact: l,
      scrollJumpRequest: null
    };
  const v = ne(d, i), h = Da({
    impact: l,
    viewport: s,
    destination: r,
    draggables: n,
    maxScrollChange: v
  });
  return {
    clientSelection: a,
    impact: h,
    scrollJumpRequest: v
  };
};
const Z = (e) => {
  const t = e.subject.active;
  return t || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot get clipped area from droppable") : m(!1)), t;
};
var wa = ({
  isMovingForward: e,
  pageBorderBoxCenter: t,
  source: r,
  droppables: n,
  viewport: o
}) => {
  const s = r.subject.active;
  if (!s)
    return null;
  const i = r.axis, a = le(s[i.start], s[i.end]), c = Et(n).filter((f) => f !== r).filter((f) => f.isEnabled).filter((f) => !!f.subject.active).filter((f) => ho(o.frame)(Z(f))).filter((f) => {
    const l = Z(f);
    return e ? s[i.crossAxisEnd] < l[i.crossAxisEnd] : l[i.crossAxisStart] < s[i.crossAxisStart];
  }).filter((f) => {
    const l = Z(f), d = le(l[i.start], l[i.end]);
    return a(l[i.start]) || a(l[i.end]) || d(s[i.start]) || d(s[i.end]);
  }).sort((f, l) => {
    const d = Z(f)[i.crossAxisStart], p = Z(l)[i.crossAxisStart];
    return e ? d - p : p - d;
  }).filter((f, l, d) => Z(f)[i.crossAxisStart] === Z(d[0])[i.crossAxisStart]);
  if (!c.length)
    return null;
  if (c.length === 1)
    return c[0];
  const u = c.filter((f) => le(Z(f)[i.start], Z(f)[i.end])(t[i.line]));
  return u.length === 1 ? u[0] : u.length > 1 ? u.sort((f, l) => Z(f)[i.start] - Z(l)[i.start])[0] : c.sort((f, l) => {
    const d = hn(t, bn(Z(f))), p = hn(t, bn(Z(l)));
    return d !== p ? d - p : Z(f)[i.start] - Z(l)[i.start];
  })[0];
};
const Sn = (e, t) => {
  const r = e.page.borderBox.center;
  return ve(e.descriptor.id, t) ? ne(r, t.displacedBy.point) : r;
}, xa = (e, t) => {
  const r = e.page.borderBox;
  return ve(e.descriptor.id, t) ? rt(r, Me(t.displacedBy.point)) : r;
};
var Oa = ({
  pageBorderBoxCenter: e,
  viewport: t,
  destination: r,
  insideDestination: n,
  afterCritical: o
}) => n.filter((i) => vo({
  target: xa(i, o),
  destination: r,
  viewport: t.frame,
  withDroppableDisplacement: !0
})).sort((i, a) => {
  const c = Ke(e, Qt(r, Sn(i, o))), u = Ke(e, Qt(r, Sn(a, o)));
  return c < u ? -1 : u < c ? 1 : i.descriptor.index - a.descriptor.index;
})[0] || null, nt = z(function(t, r) {
  const n = r[t.line];
  return {
    value: n,
    point: Ie(t.line, n)
  };
});
const Ca = (e, t, r) => {
  const n = e.axis;
  if (e.descriptor.mode === "virtual")
    return Ie(n.line, t[n.line]);
  const o = e.subject.page.contentBox[n.size], c = _e(e.descriptor.id, r).reduce((u, f) => u + f.client.marginBox[n.size], 0) + t[n.line] - o;
  return c <= 0 ? null : Ie(n.line, c);
}, So = (e, t) => ({
  ...e,
  scroll: {
    ...e.scroll,
    max: t
  }
}), No = (e, t, r) => {
  const n = e.frame;
  Fe(t, e) && (process.env.NODE_ENV !== "production" ? m(!1, "Should not add placeholder space to home list") : m(!1)), e.subject.withPlaceholder && (process.env.NODE_ENV !== "production" ? m(!1, "Cannot add placeholder size to a subject when it already has one") : m(!1));
  const o = nt(e.axis, t.displaceBy).point, s = Ca(e, o, r), i = {
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
  const a = s ? Q(n.scroll.max, s) : n.scroll.max, c = So(n, a), u = Be({
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
}, Ia = (e) => {
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
  const o = So(r, n), s = Be({
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
var _a = ({
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
      displacedBy: go,
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
    }), p = Fe(n, s) ? s : No(s, n, o);
    return Do({
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
}, Aa = ({
  isMovingForward: e,
  previousPageBorderBoxCenter: t,
  draggable: r,
  isOver: n,
  draggables: o,
  droppables: s,
  viewport: i,
  afterCritical: a
}) => {
  const c = wa({
    isMovingForward: e,
    pageBorderBoxCenter: t,
    source: n,
    droppables: s,
    viewport: i
  });
  if (!c)
    return null;
  const u = _e(c.descriptor.id, o), f = Oa({
    pageBorderBoxCenter: t,
    viewport: i,
    destination: c,
    insideDestination: u,
    afterCritical: a
  }), l = _a({
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
    clientSelection: yr({
      pageBorderBoxCenter: d,
      draggable: r,
      viewport: i
    }),
    impact: l,
    scrollJumpRequest: null
  };
}, oe = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const Pa = (e, t) => {
  const r = oe(e);
  return r ? t[r] : null;
};
var Ra = ({
  state: e,
  type: t
}) => {
  const r = Pa(e.impact, e.dimensions.droppables), n = !!r, o = e.dimensions.droppables[e.critical.droppable.id], s = r || o, i = s.axis.direction, a = i === "vertical" && (t === "MOVE_UP" || t === "MOVE_DOWN") || i === "horizontal" && (t === "MOVE_LEFT" || t === "MOVE_RIGHT");
  if (a && !n)
    return null;
  const c = t === "MOVE_DOWN" || t === "MOVE_RIGHT", u = e.dimensions.draggables[e.critical.draggable.id], f = e.current.page.borderBoxCenter, {
    draggables: l,
    droppables: d
  } = e.dimensions;
  return a ? Na({
    isMovingForward: c,
    previousPageBorderBoxCenter: f,
    draggable: u,
    destination: s,
    draggables: l,
    viewport: e.viewport,
    previousClientSelection: e.current.client.selection,
    previousImpact: e.impact,
    afterCritical: e.afterCritical
  }) : Aa({
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
function wo(e) {
  const t = le(e.top, e.bottom), r = le(e.left, e.right);
  return function(o) {
    return t(o.y) && r(o.x);
  };
}
function Ta(e, t) {
  return e.left < t.right && e.right > t.left && e.top < t.bottom && e.bottom > t.top;
}
function Ba({
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
function La({
  pageBorderBox: e,
  draggable: t,
  droppables: r
}) {
  const n = Et(r).filter((o) => {
    if (!o.isEnabled)
      return !1;
    const s = o.subject.active;
    if (!s || !Ta(e, s))
      return !1;
    if (wo(s)(e.center))
      return !0;
    const i = o.axis, a = s.center[i.crossAxisLine], c = e[i.crossAxisStart], u = e[i.crossAxisEnd], f = le(s[i.crossAxisStart], s[i.crossAxisEnd]), l = f(c), d = f(u);
    return !l && !d ? !0 : l ? c < a : u > a;
  });
  return n.length ? n.length === 1 ? n[0].descriptor.id : Ba({
    pageBorderBox: e,
    draggable: t,
    candidates: n
  }) : null;
}
const xo = (e, t) => de(rt(e, t));
var $a = (e, t) => {
  const r = e.frame;
  return r ? xo(t, r.scroll.diff.value) : t;
};
function Oo({
  displaced: e,
  id: t
}) {
  return !!(e.visible[t] || e.invisible[t]);
}
function Va({
  draggable: e,
  closest: t,
  inHomeList: r
}) {
  return t ? r && t.descriptor.index > e.descriptor.index ? t.descriptor.index - 1 : t.descriptor.index : null;
}
var Ma = ({
  pageBorderBoxWithDroppableScroll: e,
  draggable: t,
  destination: r,
  insideDestination: n,
  last: o,
  viewport: s,
  afterCritical: i
}) => {
  const a = r.axis, c = nt(r.axis, t.displaceBy), u = c.value, f = e[a.start], l = e[a.end], p = St(t, n).find((h) => {
    const g = h.descriptor.id, S = h.page.borderBox.center[a.line], D = ve(g, i), E = Oo({
      displaced: o,
      id: g
    });
    return D ? E ? l <= S : f < S - u : E ? l <= S + u : f < S;
  }) || null, v = Va({
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
const Fa = 4;
var Ga = ({
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
    const h = v.descriptor.id, g = v.page.borderBox, D = g[i.size] / Fa, E = ve(h, s), y = Oo({
      displaced: r.displaced,
      id: h
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
}, Co = ({
  pageOffset: e,
  draggable: t,
  draggables: r,
  droppables: n,
  previousImpact: o,
  viewport: s,
  afterCritical: i
}) => {
  const a = xo(t.page.borderBox, e), c = La({
    pageBorderBox: a,
    draggable: t,
    droppables: n
  });
  if (!c)
    return ea;
  const u = n[c], f = _e(u.descriptor.id, r), l = $a(u, a);
  return Ga({
    pageBorderBoxWithDroppableScroll: l,
    draggable: t,
    previousImpact: o,
    destination: u,
    insideDestination: f,
    afterCritical: i
  }) || Ma({
    pageBorderBoxWithDroppableScroll: l,
    draggable: t,
    destination: u,
    insideDestination: f,
    last: o.displaced,
    viewport: s,
    afterCritical: i
  });
}, Er = (e, t) => ({
  ...e,
  [t.descriptor.id]: t
});
const Ua = ({
  previousImpact: e,
  impact: t,
  droppables: r
}) => {
  const n = oe(e), o = oe(t);
  if (!n || n === o)
    return r;
  const s = r[n];
  if (!s.subject.withPlaceholder)
    return r;
  const i = Ia(s);
  return Er(r, i);
};
var Wa = ({
  draggable: e,
  draggables: t,
  droppables: r,
  previousImpact: n,
  impact: o
}) => {
  const s = Ua({
    previousImpact: n,
    impact: o,
    droppables: r
  }), i = oe(o);
  if (!i)
    return s;
  const a = r[i];
  if (Fe(e, a) || a.subject.withPlaceholder)
    return s;
  const c = No(a, e, t);
  return Er(s, c);
}, He = ({
  state: e,
  clientSelection: t,
  dimensions: r,
  viewport: n,
  impact: o,
  scrollJumpRequest: s
}) => {
  const i = n || e.viewport, a = r || e.dimensions, c = t || e.current.client.selection, u = ne(c, e.initial.client.selection), f = {
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
  const p = a.draggables[e.critical.draggable.id], v = o || Co({
    pageOffset: l.offset,
    draggable: p,
    draggables: a.draggables,
    droppables: a.droppables,
    previousImpact: e.impact,
    viewport: i,
    afterCritical: e.afterCritical
  }), h = Wa({
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
      droppables: h
    },
    impact: v,
    viewport: i,
    scrollJumpRequest: s || null,
    forceShouldAnimate: s ? !1 : null
  };
};
function ka(e, t) {
  return e.map((r) => t[r]);
}
var Io = ({
  impact: e,
  viewport: t,
  draggables: r,
  destination: n,
  forceShouldAnimate: o
}) => {
  const s = e.displaced, i = ka(s.all, r), a = Je({
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
}, _o = ({
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
  return yr({
    pageBorderBoxCenter: i,
    draggable: t,
    viewport: o
  });
}, Ao = ({
  state: e,
  dimensions: t,
  viewport: r
}) => {
  e.movementMode !== "SNAP" && (process.env.NODE_ENV, m(!1));
  const n = e.impact, o = r || e.viewport, s = t || e.dimensions, {
    draggables: i,
    droppables: a
  } = s, c = i[e.critical.draggable.id], u = oe(n);
  u || (process.env.NODE_ENV !== "production" ? m(!1, "Must be over a destination in SNAP movement mode") : m(!1));
  const f = a[u], l = Io({
    impact: n,
    viewport: o,
    destination: f,
    draggables: i
  }), d = _o({
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
}, Ha = (e) => ({
  index: e.index,
  droppableId: e.droppableId
}), Po = ({
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
      displaced: Je({
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
        destination: Ha(e.descriptor)
      }
    },
    afterCritical: u
  };
}, ja = (e, t) => ({
  draggables: e.draggables,
  droppables: Er(e.droppables, t)
});
const ot = (e) => {
  process.env.NODE_ENV;
}, st = (e) => {
  process.env.NODE_ENV;
};
var qa = ({
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
}, za = (e) => {
  const t = e.frame;
  return t || (process.env.NODE_ENV !== "production" ? m(!1, "Expected Droppable to have a frame") : m(!1)), t;
}, Ya = ({
  additions: e,
  updatedDroppables: t,
  viewport: r
}) => {
  const n = r.scroll.diff.value;
  return e.map((o) => {
    const s = o.descriptor.droppableId, i = t[s], c = za(i).scroll.diff.value, u = Q(n, c);
    return qa({
      draggable: o,
      offset: u,
      initialWindowScroll: r.scroll.initial
    });
  });
}, Ka = ({
  state: e,
  published: t
}) => {
  ot();
  const r = t.modified.map((S) => {
    const D = e.dimensions.droppables[S.droppableId];
    return mr(D, S.scroll);
  }), n = {
    ...e.dimensions.droppables,
    ...po(r)
  }, o = mo(Ya({
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
  }, a = oe(e.impact), c = a ? i.droppables[a] : null, u = i.draggables[e.critical.draggable.id], f = i.droppables[e.critical.droppable.id], {
    impact: l,
    afterCritical: d
  } = Po({
    draggable: u,
    home: f,
    draggables: s,
    viewport: e.viewport
  }), p = c && c.isCombineEnabled ? e.impact : l, v = Co({
    pageOffset: e.current.page.offset,
    draggable: i.draggables[e.critical.draggable.id],
    draggables: i.draggables,
    droppables: i.droppables,
    previousImpact: p,
    viewport: e.viewport,
    afterCritical: d
  });
  st();
  const h = {
    ...e,
    phase: "DRAGGING",
    impact: v,
    onLiftImpact: l,
    dimensions: i,
    afterCritical: d,
    forceShouldAnimate: !1
  };
  return e.phase === "COLLECTING" ? h : {
    ...h,
    phase: "DROP_PENDING",
    reason: e.reason,
    isWaiting: !1
  };
};
const Zt = (e) => e.movementMode === "SNAP", Lt = (e, t, r) => {
  const n = ja(e.dimensions, t);
  return !Zt(e) || r ? He({
    state: e,
    dimensions: n
  }) : Ao({
    state: e,
    dimensions: n
  });
};
function $t(e) {
  return e.isDragging && e.movementMode === "SNAP" ? {
    ...e,
    scrollJumpRequest: null
  } : e;
}
const Nn = {
  phase: "IDLE",
  completed: null,
  shouldFlush: !1
};
var Xa = (e = Nn, t) => {
  if (t.type === "FLUSH")
    return {
      ...Nn,
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
    }, l = Et(s.droppables).every((h) => !h.isFixedOnPage), {
      impact: d,
      afterCritical: p
    } = Po({
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
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? m(!1, `Unexpected ${t.type} received in phase ${e.phase}`) : m(!1)), Ka({
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
    return be(r, e.current.client.selection) ? e : He({
      state: e,
      clientSelection: r,
      impact: Zt(e) ? e.impact : null
    });
  }
  if (t.type === "UPDATE_DROPPABLE_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "COLLECTING")
      return $t(e);
    xe(e) || (process.env.NODE_ENV !== "production" ? m(!1, `${t.type} not permitted in phase ${e.phase}`) : m(!1));
    const {
      id: r,
      newScroll: n
    } = t.payload, o = e.dimensions.droppables[r];
    if (!o)
      return e;
    const s = mr(o, n);
    return Lt(e, s, !1);
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
    return Lt(e, s, !0);
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
    return Lt(e, s, !0);
  }
  if (t.type === "MOVE_BY_WINDOW_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "DROP_ANIMATING")
      return e;
    xe(e) || (process.env.NODE_ENV !== "production" ? m(!1, `Cannot move by window in phase ${e.phase}`) : m(!1)), e.isWindowScrollAllowed || (process.env.NODE_ENV !== "production" ? m(!1, "Window scrolling is currently not supported for fixed lists") : m(!1));
    const r = t.payload.newScroll;
    if (be(e.viewport.scroll.current, r))
      return $t(e);
    const n = Eo(e.viewport, r);
    return Zt(e) ? Ao({
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
    if (be(r, e.viewport.scroll.max))
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
    const r = Ra({
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
const Ja = (e) => ({
  type: "BEFORE_INITIAL_CAPTURE",
  payload: e
}), Qa = (e) => ({
  type: "LIFT",
  payload: e
}), Za = (e) => ({
  type: "INITIAL_PUBLISH",
  payload: e
}), ec = (e) => ({
  type: "PUBLISH_WHILE_DRAGGING",
  payload: e
}), tc = () => ({
  type: "COLLECTION_STARTING",
  payload: null
}), rc = (e) => ({
  type: "UPDATE_DROPPABLE_SCROLL",
  payload: e
}), nc = (e) => ({
  type: "UPDATE_DROPPABLE_IS_ENABLED",
  payload: e
}), oc = (e) => ({
  type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
  payload: e
}), Ro = (e) => ({
  type: "MOVE",
  payload: e
}), sc = (e) => ({
  type: "MOVE_BY_WINDOW_SCROLL",
  payload: e
}), ic = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), ac = () => ({
  type: "MOVE_UP",
  payload: null
}), cc = () => ({
  type: "MOVE_DOWN",
  payload: null
}), lc = () => ({
  type: "MOVE_RIGHT",
  payload: null
}), uc = () => ({
  type: "MOVE_LEFT",
  payload: null
}), Dr = () => ({
  type: "FLUSH",
  payload: null
}), dc = (e) => ({
  type: "DROP_ANIMATE",
  payload: e
}), Sr = (e) => ({
  type: "DROP_COMPLETE",
  payload: e
}), To = (e) => ({
  type: "DROP",
  payload: e
}), fc = (e) => ({
  type: "DROP_PENDING",
  payload: e
}), Bo = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
});
function pc(e) {
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
  process.env.NODE_ENV !== "production" && U(`
    Detected non-consecutive <Draggable /> indexes.

    (This can cause unexpected bugs)

    ${n}
  `);
}
function mc(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const r = _e(e.droppable.id, t.draggables);
    pc(r);
  }
}
var gc = (e) => ({
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
  c.phase === "DROP_ANIMATING" && r(Sr({
    completed: c.completed
  })), t().phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? m(!1, "Unexpected phase to start a drag") : m(!1)), r(Dr()), r(Ja({
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
  mc(l, d), r(Za({
    critical: l,
    dimensions: d,
    clientSelection: i,
    movementMode: a,
    viewport: p
  }));
}, hc = (e) => () => (t) => (r) => {
  r.type === "INITIAL_PUBLISH" && e.dragging(), r.type === "DROP_ANIMATE" && e.dropping(r.payload.completed.result.reason), (r.type === "FLUSH" || r.type === "DROP_COMPLETE") && e.resting(), t(r);
};
const Nr = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, Qe = {
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
}, Ne = `${Lo.outOfTheWay}s ${Nr.outOfTheWay}`, je = {
  fluid: `opacity ${Ne}`,
  snap: `transform ${Ne}, opacity ${Ne}`,
  drop: (e) => {
    const t = `${e}s ${Nr.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${Ne}`,
  placeholder: `height ${Ne}, width ${Ne}, margin ${Ne}`
}, wn = (e) => be(e, Y) ? void 0 : `translate(${e.x}px, ${e.y}px)`, er = {
  moveTo: wn,
  drop: (e, t) => {
    const r = wn(e);
    if (r)
      return t ? `${r} scale(${Qe.scale.drop})` : r;
  }
}, {
  minDropTime: tr,
  maxDropTime: $o
} = Lo, bc = $o - tr, xn = 1500, vc = 0.6;
var yc = ({
  current: e,
  destination: t,
  reason: r
}) => {
  const n = Ke(e, t);
  if (n <= 0)
    return tr;
  if (n >= xn)
    return $o;
  const o = n / xn, s = tr + bc * o, i = r === "CANCEL" ? s * vc : s;
  return Number(i.toFixed(2));
}, Ec = ({
  impact: e,
  draggable: t,
  dimensions: r,
  viewport: n,
  afterCritical: o
}) => {
  const {
    draggables: s,
    droppables: i
  } = r, a = oe(e), c = a ? i[a] : null, u = i[t.descriptor.droppableId], f = _o({
    impact: e,
    draggable: t,
    draggables: s,
    afterCritical: o,
    droppable: c || u,
    viewport: n
  });
  return ne(f, t.client.borderBox.center);
}, Dc = ({
  draggables: e,
  reason: t,
  lastImpact: r,
  home: n,
  viewport: o,
  onLiftImpact: s
}) => !r.at || t !== "DROP" ? {
  impact: Io({
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
const Sc = ({
  getState: e,
  dispatch: t
}) => (r) => (n) => {
  if (n.type !== "DROP") {
    r(n);
    return;
  }
  const o = e(), s = n.payload.reason;
  if (o.phase === "COLLECTING") {
    t(fc({
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
  } = Dc({
    reason: s,
    lastImpact: o.impact,
    afterCritical: o.afterCritical,
    onLiftImpact: o.onLiftImpact,
    home: o.dimensions.droppables[o.critical.droppable.id],
    viewport: o.viewport,
    draggables: o.dimensions.draggables
  }), d = l ? gr(f) : null, p = l ? Dt(f) : null, v = {
    index: a.draggable.index,
    droppableId: a.droppable.id
  }, h = {
    draggableId: u.descriptor.id,
    type: u.descriptor.type,
    source: v,
    reason: s,
    mode: o.movementMode,
    destination: d,
    combine: p
  }, g = Ec({
    impact: f,
    draggable: u,
    dimensions: c,
    viewport: o.viewport,
    afterCritical: o.afterCritical
  }), S = {
    critical: o.critical,
    afterCritical: o.afterCritical,
    result: h,
    impact: f
  };
  if (!(!be(o.current.client.offset, g) || !!h.combine)) {
    t(Sr({
      completed: S
    }));
    return;
  }
  const E = yc({
    current: o.current.client.offset,
    destination: g,
    reason: s
  });
  t(dc({
    newHomeClientOffset: g,
    dropDuration: E,
    completed: S
  }));
};
var Nc = Sc, Vo = () => ({
  x: window.pageXOffset,
  y: window.pageYOffset
});
function wc(e) {
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
function xc({
  onWindowScroll: e
}) {
  function t() {
    e(Vo());
  }
  const r = ze(t), n = wc(r);
  let o = he;
  function s() {
    return o !== he;
  }
  function i() {
    s() && (process.env.NODE_ENV !== "production" ? m(!1, "Cannot start scroll listener when already active") : m(!1)), o = ce(window, [n]);
  }
  function a() {
    s() || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot stop scroll listener when not active") : m(!1)), r.cancel(), o(), o = he;
  }
  return {
    start: i,
    stop: a,
    isActive: s
  };
}
const Oc = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH", Cc = (e) => {
  const t = xc({
    onWindowScroll: (r) => {
      e.dispatch(sc({
        newScroll: r
      }));
    }
  });
  return (r) => (n) => {
    !t.isActive() && n.type === "INITIAL_PUBLISH" && t.start(), t.isActive() && Oc(n) && t.stop(), r(n);
  };
};
var Ic = Cc, _c = (e) => {
  let t = !1, r = !1;
  const n = setTimeout(() => {
    r = !0;
  }), o = (s) => {
    if (t) {
      process.env.NODE_ENV !== "production" && U("Announcement already made. Not making a second announcement");
      return;
    }
    if (r) {
      process.env.NODE_ENV !== "production" && U(`
        Announcements cannot be made asynchronously.
        Default message has already been announced.
      `);
      return;
    }
    t = !0, e(s), clearTimeout(n);
  };
  return o.wasCalled = () => t, o;
}, Ac = () => {
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
const Pc = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.droppableId === t.droppableId && e.index === t.index, Rc = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.draggableId === t.draggableId && e.droppableId === t.droppableId, Tc = (e, t) => {
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
function Vt(e, t, r, n) {
  if (!e) {
    r(n(t));
    return;
  }
  const o = _c(r);
  e(t, {
    announce: o
  }), o.wasCalled() || r(n(t));
}
var Bc = (e, t) => {
  const r = Ac();
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
      Ue("onDragStart", () => Vt(e().onDragStart, p, t, pt.onDragStart));
    });
  }, a = (l, d) => {
    const p = gr(d), v = Dt(d);
    n || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot fire onDragMove when onDragStart has not been called") : m(!1));
    const h = !Tc(l, n.lastCritical);
    h && (n.lastCritical = l);
    const g = !Pc(n.lastLocation, p);
    g && (n.lastLocation = p);
    const S = !Rc(n.lastCombine, v);
    if (S && (n.lastCombine = v), !h && !g && !S)
      return;
    const D = {
      ...ut(l, n.mode),
      combine: v,
      destination: p
    };
    r.add(() => {
      Ue("onDragUpdate", () => Vt(e().onDragUpdate, D, t, pt.onDragUpdate));
    });
  }, c = () => {
    n || (process.env.NODE_ENV !== "production" ? m(!1, "Can only flush responders while dragging") : m(!1)), r.flush();
  }, u = (l) => {
    n || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot fire onDragEnd when there is no matching onDragStart") : m(!1)), n = null, Ue("onDragEnd", () => Vt(e().onDragEnd, l, t, pt.onDragEnd));
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
}, Lc = (e, t) => {
  const r = Bc(e, t);
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
const $c = (e) => (t) => (r) => {
  if (r.type !== "DROP_ANIMATION_FINISHED") {
    t(r);
    return;
  }
  const n = e.getState();
  n.phase !== "DROP_ANIMATING" && (process.env.NODE_ENV !== "production" ? m(!1, "Cannot finish a drop animating when no drop is occurring") : m(!1)), e.dispatch(Sr({
    completed: n.completed
  }));
};
var Vc = $c;
const Mc = (e) => {
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
        e.getState().phase === "DROP_ANIMATING" && e.dispatch(Bo());
      }
    };
    r = requestAnimationFrame(() => {
      r = null, t = ce(window, [i]);
    });
  };
};
var Fc = Mc, Gc = (e) => () => (t) => (r) => {
  (r.type === "DROP_COMPLETE" || r.type === "FLUSH" || r.type === "DROP_ANIMATE") && e.stopPublishing(), t(r);
}, Uc = (e) => {
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
const Wc = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH";
var kc = (e) => (t) => (r) => (n) => {
  if (Wc(n)) {
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
const Hc = (e) => (t) => (r) => {
  if (t(r), r.type !== "PUBLISH_WHILE_DRAGGING")
    return;
  const n = e.getState();
  n.phase === "DROP_PENDING" && (n.isWaiting || e.dispatch(To({
    reason: n.reason
  })));
};
var jc = Hc;
const qc = process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
}) : Kn;
var zc = ({
  dimensionMarshal: e,
  focusMarshal: t,
  styleMarshal: r,
  getResponders: n,
  announce: o,
  autoScroller: s
}) => Yn(Xa, qc(Bs(hc(r), Gc(e), gc(e), Nc, Vc, Fc, jc, kc(s), Ic, Uc(t), Lc(n, o))));
const Mt = () => ({
  additions: {},
  removals: {},
  modified: {}
});
function Yc({
  registry: e,
  callbacks: t
}) {
  let r = Mt(), n = null;
  const o = () => {
    n || (t.collectionStarting(), n = requestAnimationFrame(() => {
      n = null, ot();
      const {
        additions: c,
        removals: u,
        modified: f
      } = r, l = Object.keys(c).map((v) => e.draggable.getById(v).getDimension(Y)).sort((v, h) => v.descriptor.index - h.descriptor.index), d = Object.keys(f).map((v) => {
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
      r = Mt(), st(), t.publish(p);
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
      n && (cancelAnimationFrame(n), n = null, r = Mt());
    }
  };
}
var Mo = ({
  scrollHeight: e,
  scrollWidth: t,
  height: r,
  width: n
}) => {
  const o = ne({
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
}, Fo = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot find document.documentElement") : m(!1)), e;
}, Go = () => {
  const e = Fo();
  return Mo({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
}, Kc = () => {
  const e = Vo(), t = Go(), r = e.y, n = e.x, o = Fo(), s = o.clientWidth, i = o.clientHeight, a = n + s, c = r + i;
  return {
    frame: de({
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
}, Xc = ({
  critical: e,
  scrollOptions: t,
  registry: r
}) => {
  ot();
  const n = Kc(), o = n.scroll.current, s = e.droppable, i = r.droppable.getAllByType(s.type).map((f) => f.callbacks.getDimensionAndWatchScroll(o, t)), a = r.draggable.getAllByType(e.draggable.type).map((f) => f.getDimension(o)), c = {
    draggables: mo(a),
    droppables: po(i)
  };
  return st(), {
    dimensions: c,
    critical: e,
    viewport: n
  };
};
function On(e, t, r) {
  return r.descriptor.id === t.id || r.descriptor.type !== t.type ? !1 : e.droppable.getById(r.descriptor.droppableId).descriptor.mode !== "virtual" ? (process.env.NODE_ENV !== "production" && U(`
      You are attempting to add or remove a Draggable [id: ${r.descriptor.id}]
      while a drag is occurring. This is only supported for virtual lists.

      See https://github.com/hello-pangea/dnd/blob/main/docs/patterns/virtual-lists.md
    `), !1) : !0;
}
var Jc = (e, t) => {
  let r = null;
  const n = Yc({
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
    d.type === "ADDITION" && On(e, p, d.value) && n.add(d.value), d.type === "REMOVAL" && On(e, p, d.value) && n.remove(d.value);
  };
  return {
    updateDroppableIsEnabled: o,
    updateDroppableIsCombineEnabled: s,
    scrollDroppable: a,
    updateDroppableScroll: i,
    startPublishing: (d) => {
      r && (process.env.NODE_ENV !== "production" ? m(!1, "Cannot start capturing critical dimensions as there is already a collection") : m(!1));
      const p = e.draggable.getById(d.draggableId), v = e.droppable.getById(p.descriptor.droppableId), h = {
        draggable: p.descriptor,
        droppable: v.descriptor
      }, g = e.subscribe(u);
      return r = {
        critical: h,
        unsubscribe: g
      }, Xc({
        critical: h,
        registry: e,
        scrollOptions: d.scrollOptions
      });
    },
    stopPublishing: c
  };
}, Uo = (e, t) => e.phase === "IDLE" ? !0 : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === t ? !1 : e.completed.result.reason === "DROP", Qc = (e) => {
  window.scrollBy(e.x, e.y);
};
const Zc = z((e) => Et(e).filter((t) => !(!t.isEnabled || !t.frame))), el = (e, t) => Zc(t).find((n) => (n.frame || (process.env.NODE_ENV !== "production" ? m(!1, "Invalid result") : m(!1)), wo(n.frame.pageMarginBox)(e))) || null;
var tl = ({
  center: e,
  destination: t,
  droppables: r
}) => {
  if (t) {
    const o = r[t];
    return o.frame ? o : null;
  }
  return el(e, r);
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
var rl = (e, t, r = () => Ze) => {
  const n = r(), o = e[t.size] * n.startFromPercentage, s = e[t.size] * n.maxScrollAtPercentage;
  return {
    startScrollingFrom: o,
    maxScrollValueAt: s
  };
}, Wo = ({
  startOfRange: e,
  endOfRange: t,
  current: r
}) => {
  const n = t - e;
  return n === 0 ? (process.env.NODE_ENV !== "production" && U(`
      Detected distance range of 0 in the fluid auto scroller
      This is unexpected and would cause a divide by 0 issue.
      Not allowing an auto scroll
    `), 0) : (r - e) / n;
}, wr = 1, nl = (e, t, r = () => Ze) => {
  const n = r();
  if (e > t.startScrollingFrom)
    return 0;
  if (e <= t.maxScrollValueAt)
    return n.maxPixelScroll;
  if (e === t.startScrollingFrom)
    return wr;
  const s = 1 - Wo({
    startOfRange: t.maxScrollValueAt,
    endOfRange: t.startScrollingFrom,
    current: e
  }), i = n.maxPixelScroll * n.ease(s);
  return Math.ceil(i);
}, ol = (e, t, r) => {
  const n = r(), o = n.durationDampening.accelerateAt, s = n.durationDampening.stopDampeningAt, i = t, a = s, u = Date.now() - i;
  if (u >= s)
    return e;
  if (u < o)
    return wr;
  const f = Wo({
    startOfRange: o,
    endOfRange: a,
    current: u
  }), l = e * n.ease(f);
  return Math.ceil(l);
}, Cn = ({
  distanceToEdge: e,
  thresholds: t,
  dragStartTime: r,
  shouldUseTimeDampening: n,
  getAutoScrollerOptions: o
}) => {
  const s = nl(e, t, o);
  return s === 0 ? 0 : n ? Math.max(ol(s, r, o), wr) : s;
}, In = ({
  container: e,
  distanceToEdges: t,
  dragStartTime: r,
  axis: n,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: s
}) => {
  const i = rl(e, n, s);
  return t[n.end] < t[n.start] ? Cn({
    distanceToEdge: t[n.end],
    thresholds: i,
    dragStartTime: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: s
  }) : -1 * Cn({
    distanceToEdge: t[n.start],
    thresholds: i,
    dragStartTime: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: s
  });
}, sl = ({
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
const il = fo((e) => e === 0 ? 0 : e);
var ko = ({
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
  }, a = In({
    container: t,
    distanceToEdges: i,
    dragStartTime: e,
    axis: hr,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: s
  }), c = In({
    container: t,
    distanceToEdges: i,
    dragStartTime: e,
    axis: bo,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: s
  }), u = il({
    x: c,
    y: a
  });
  if (be(u, Y))
    return null;
  const f = sl({
    container: t,
    subject: r,
    proposedScroll: u
  });
  return f ? be(f, Y) ? null : f : null;
};
const al = fo((e) => e === 0 ? 0 : e > 0 ? 1 : -1), xr = (() => {
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
    return be(s, Y) ? null : s;
  };
})(), Ho = ({
  max: e,
  current: t,
  change: r
}) => {
  const n = {
    x: Math.max(t.x, e.x),
    y: Math.max(t.y, e.y)
  }, o = al(r), s = xr({
    max: n,
    current: t,
    change: o
  });
  return !s || o.x !== 0 && s.x === 0 || o.y !== 0 && s.y === 0;
}, Or = (e, t) => Ho({
  current: e.scroll.current,
  max: e.scroll.max,
  change: t
}), cl = (e, t) => {
  if (!Or(e, t))
    return null;
  const r = e.scroll.max, n = e.scroll.current;
  return xr({
    current: n,
    max: r,
    change: t
  });
}, Cr = (e, t) => {
  const r = e.frame;
  return r ? Ho({
    current: r.scroll.current,
    max: r.scroll.max,
    change: t
  }) : !1;
}, ll = (e, t) => {
  const r = e.frame;
  return !r || !Cr(e, t) ? null : xr({
    current: r.scroll.current,
    max: r.scroll.max,
    change: t
  });
};
var ul = ({
  viewport: e,
  subject: t,
  center: r,
  dragStartTime: n,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: s
}) => {
  const i = ko({
    dragStartTime: n,
    container: e.frame,
    subject: t,
    center: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: s
  });
  return i && Or(e, i) ? i : null;
}, dl = ({
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
  const a = ko({
    dragStartTime: n,
    container: i.pageMarginBox,
    subject: t,
    center: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: s
  });
  return a && Cr(e, a) ? a : null;
}, _n = ({
  state: e,
  dragStartTime: t,
  shouldUseTimeDampening: r,
  scrollWindow: n,
  scrollDroppable: o,
  getAutoScrollerOptions: s
}) => {
  const i = e.current.page.borderBoxCenter, c = e.dimensions.draggables[e.critical.draggable.id].page.marginBox;
  if (e.isWindowScrollAllowed) {
    const l = e.viewport, d = ul({
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
  const u = tl({
    center: i,
    destination: oe(e.impact),
    droppables: e.dimensions.droppables
  });
  if (!u)
    return;
  const f = dl({
    dragStartTime: t,
    droppable: u,
    subject: c,
    center: i,
    shouldUseTimeDampening: r,
    getAutoScrollerOptions: s
  });
  f && o(u.descriptor.id, f);
}, fl = ({
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
    _n({
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
      _n({
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
}, pl = ({
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
    if (!Cr(a, c))
      return c;
    const u = ll(a, c);
    if (!u)
      return t(a.descriptor.id, c), null;
    const f = ne(c, u);
    return t(a.descriptor.id, f), ne(c, f);
  }, s = (a, c, u) => {
    if (!a || !Or(c, u))
      return u;
    const f = cl(c, u);
    if (!f)
      return r(u), null;
    const l = ne(u, f);
    return r(l), ne(u, l);
  };
  return (a) => {
    const c = a.scrollJumpRequest;
    if (!c)
      return;
    const u = oe(a.impact);
    u || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot perform a jump scroll when there is no destination") : m(!1));
    const f = o(a.dimensions.droppables[u], c);
    if (!f)
      return;
    const l = a.viewport, d = s(a.isWindowScrollAllowed, l, f);
    d && n(a, d);
  };
}, ml = ({
  scrollDroppable: e,
  scrollWindow: t,
  move: r,
  getAutoScrollerOptions: n
}) => {
  const o = fl({
    scrollWindow: t,
    scrollDroppable: e,
    getAutoScrollerOptions: n
  }), s = pl({
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
const Le = "data-rfd", $e = (() => {
  const e = `${Le}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), rr = (() => {
  const e = `${Le}-draggable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), gl = (() => {
  const e = `${Le}-droppable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), An = {
  contextId: `${Le}-scroll-container-context-id`
}, hl = (e) => (t) => `[${t}="${e}"]`, We = (e, t) => e.map((r) => {
  const n = r.styles[t];
  return n ? `${r.selector} { ${n} }` : "";
}).join(" "), bl = "pointer-events: none;";
var vl = (e) => {
  const t = hl(e), r = (() => {
    const a = `
      cursor: -webkit-grab;
      cursor: grab;
    `;
    return {
      selector: t($e.contextId),
      styles: {
        always: `
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,
        resting: a,
        dragging: bl,
        dropAnimating: a
      }
    };
  })(), n = (() => {
    const a = `
      transition: ${je.outOfTheWay};
    `;
    return {
      selector: t(rr.contextId),
      styles: {
        dragging: a,
        dropAnimating: a,
        userCancel: a
      }
    };
  })(), o = {
    selector: t(gl.contextId),
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
const yl = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? N.useLayoutEffect : N.useEffect;
var se = yl;
const Ft = () => {
  const e = document.querySelector("head");
  return e || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot find the head to append a style to") : m(!1)), e;
}, Pn = (e) => {
  const t = document.createElement("style");
  return e && t.setAttribute("nonce", e), t.type = "text/css", t;
};
function El(e, t) {
  const r = B(() => vl(e), [e]), n = N.useRef(null), o = N.useRef(null), s = _(z((l) => {
    const d = o.current;
    d || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot set dynamic style element if it is not set") : m(!1)), d.textContent = l;
  }), []), i = _((l) => {
    const d = n.current;
    d || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot set dynamic style element if it is not set") : m(!1)), d.textContent = l;
  }, []);
  se(() => {
    !n.current && !o.current || (process.env.NODE_ENV !== "production" ? m(!1, "style elements already mounted") : m(!1));
    const l = Pn(t), d = Pn(t);
    return n.current = l, o.current = d, l.setAttribute(`${Le}-always`, e), d.setAttribute(`${Le}-dynamic`, e), Ft().appendChild(l), Ft().appendChild(d), i(r.always), s(r.resting), () => {
      const p = (v) => {
        const h = v.current;
        h || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot unmount ref as it is not set") : m(!1)), Ft().removeChild(h), v.current = null;
      };
      p(n), p(o);
    };
  }, [t, i, s, r.always, r.resting, e]);
  const a = _(() => s(r.dragging), [s, r.dragging]), c = _((l) => {
    if (l === "DROP") {
      s(r.dropAnimating);
      return;
    }
    s(r.userCancel);
  }, [s, r.dropAnimating, r.userCancel]), u = _(() => {
    o.current && s(r.resting);
  }, [s, r.resting]);
  return B(() => ({
    dragging: a,
    dropping: c,
    resting: u
  }), [a, c, u]);
}
function jo(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var qo = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function it(e) {
  return e instanceof qo(e).HTMLElement;
}
function zo(e, t) {
  const r = `[${$e.contextId}="${e}"]`, n = jo(document, r);
  if (!n.length)
    return process.env.NODE_ENV !== "production" && U(`Unable to find any drag handles in the context "${e}"`), null;
  const o = n.find((s) => s.getAttribute($e.draggableId) === t);
  return o ? it(o) ? o : (process.env.NODE_ENV !== "production" && U("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && U(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
function Dl(e) {
  const t = N.useRef({}), r = N.useRef(null), n = N.useRef(null), o = N.useRef(!1), s = _(function(d, p) {
    const v = {
      id: d,
      focus: p
    };
    return t.current[d] = v, function() {
      const g = t.current;
      g[d] !== v && delete g[d];
    };
  }, []), i = _(function(d) {
    const p = zo(e, d);
    p && p !== document.activeElement && p.focus();
  }, [e]), a = _(function(d, p) {
    r.current === d && (r.current = p);
  }, []), c = _(function() {
    n.current || o.current && (n.current = requestAnimationFrame(() => {
      n.current = null;
      const d = r.current;
      d && i(d);
    }));
  }, [i]), u = _(function(d) {
    r.current = null;
    const p = document.activeElement;
    p && p.getAttribute($e.draggableId) === d && (r.current = d);
  }, []);
  return se(() => (o.current = !0, function() {
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
function Sl() {
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
function Nl() {
  const e = B(Sl, []);
  return N.useEffect(() => function() {
    x.version.startsWith("16") || x.version.startsWith("17") ? requestAnimationFrame(e.clean) : e.clean();
  }, [e]), e;
}
var Ir = x.createContext(null), et = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot find document.body") : m(!1)), e;
};
const wl = {
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
var xl = wl;
const Ol = (e) => `rfd-announcement-${e}`;
function Cl(e) {
  const t = B(() => Ol(e), [e]), r = N.useRef(null);
  return N.useEffect(function() {
    const s = document.createElement("div");
    return r.current = s, s.id = t, s.setAttribute("aria-live", "assertive"), s.setAttribute("aria-atomic", "true"), Te(s.style, xl), et().appendChild(s), function() {
      setTimeout(function() {
        const c = et();
        c.contains(s) && c.removeChild(s), s === r.current && (r.current = null);
      });
    };
  }, [t]), _((o) => {
    const s = r.current;
    if (s) {
      s.textContent = o;
      return;
    }
    process.env.NODE_ENV !== "production" && U(`
      A screen reader message was trying to be announced but it was unable to do so.
      This can occur if you unmount your <DragDropContext /> in your onDragEnd.
      Consider calling provided.announce() before the unmount so that the instruction will
      not be lost for users relying on a screen reader.

      Message not passed to screen reader:

      "${o}"
    `);
  }, []);
}
let Il = 0;
const Yo = {
  separator: "::"
};
function _l(e, t = Yo) {
  return B(() => `${e}${t.separator}${Il++}`, [t.separator, e]);
}
function Al(e, t = Yo) {
  const r = x.useId();
  return B(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var _r = "useId" in x ? Al : _l;
function Pl({
  contextId: e,
  uniqueId: t
}) {
  return `rfd-hidden-text-${e}-${t}`;
}
function Rl({
  contextId: e,
  text: t
}) {
  const r = _r("hidden-text", {
    separator: "-"
  }), n = B(() => Pl({
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
var wt = x.createContext(null), Tl = {
  react: "^16.8.5 || ^17.0.0 || ^18.0.0",
  "react-dom": "^16.8.5 || ^17.0.0 || ^18.0.0"
};
const Bl = /(\d+)\.(\d+)\.(\d+)/, Rn = (e) => {
  const t = Bl.exec(e);
  t == null && (process.env.NODE_ENV !== "production" ? m(!1, `Unable to parse React version ${e}`) : m(!1));
  const r = Number(t[1]), n = Number(t[2]), o = Number(t[3]);
  return {
    major: r,
    minor: n,
    patch: o,
    raw: e
  };
}, Ll = (e, t) => t.major > e.major ? !0 : t.major < e.major ? !1 : t.minor > e.minor ? !0 : t.minor < e.minor ? !1 : t.patch >= e.patch;
var $l = (e, t) => {
  const r = Rn(e), n = Rn(t);
  Ll(r, n) || process.env.NODE_ENV !== "production" && U(`
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
var Vl = (e) => {
  const t = e.doctype;
  if (!t) {
    process.env.NODE_ENV !== "production" && U(`
      No <!doctype html> found.

      ${Gt}
    `);
    return;
  }
  t.name.toLowerCase() !== "html" && process.env.NODE_ENV !== "production" && U(`
      Unexpected <!doctype> found: (${t.name})

      ${Gt}
    `), t.publicId !== "" && process.env.NODE_ENV !== "production" && U(`
      Unexpected <!doctype> publicId found: (${t.publicId})
      A html5 doctype does not have a publicId

      ${Gt}
    `);
};
function Ar(e) {
  process.env.NODE_ENV !== "production" && e();
}
function at(e, t) {
  Ar(() => {
    N.useEffect(() => {
      try {
        e();
      } catch (r) {
        Jt(`
          A setup problem was encountered.

          > ${r.message}
        `);
      }
    }, t);
  });
}
function Ml() {
  at(() => {
    $l(Tl.react, x.version), Vl(document);
  }, []);
}
function Pr(e) {
  const t = N.useRef(e);
  return N.useEffect(() => {
    t.current = e;
  }), t;
}
function Fl() {
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
const Gl = 9, Ul = 13, Rr = 27, Ko = 32, Wl = 33, kl = 34, Hl = 35, jl = 36, ql = 37, zl = 38, Yl = 39, Kl = 40, Xl = {
  [Ul]: !0,
  [Gl]: !0
};
var Xo = (e) => {
  Xl[e.keyCode] && e.preventDefault();
};
const Jl = (() => {
  const e = "visibilitychange";
  return typeof document > "u" ? e : [e, `ms${e}`, `webkit${e}`, `moz${e}`, `o${e}`].find((n) => `on${n}` in document) || e;
})();
var xt = Jl;
const Jo = 0, Tn = 5;
function Ql(e, t) {
  return Math.abs(t.x - e.x) >= Tn || Math.abs(t.y - e.y) >= Tn;
}
const Bn = {
  type: "IDLE"
};
function Zl({
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
      if (!Ql(f, c))
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
      if (o.keyCode === Rr) {
        o.preventDefault(), e();
        return;
      }
      Xo(o);
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
function eu(e) {
  const t = N.useRef(Bn), r = N.useRef(he), n = B(() => ({
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
  }), [e]), s = _(function() {
    const l = {
      passive: !1,
      capture: !0
    };
    r.current = ce(window, [o, n], l);
  }, [o, n]), i = _(() => {
    t.current.type !== "IDLE" && (t.current = Bn, r.current(), s());
  }, [s]), a = _(() => {
    const f = t.current;
    i(), f.type === "DRAGGING" && f.actions.cancel({
      shouldBlockNextClick: !0
    }), f.type === "PENDING" && f.actions.abort();
  }, [i]), c = _(function() {
    const l = {
      capture: !0,
      passive: !1
    }, d = Zl({
      cancel: a,
      completed: i,
      getPhase: () => t.current,
      setPhase: (p) => {
        t.current = p;
      }
    });
    r.current = ce(window, d, l);
  }, [a, i]), u = _(function(l, d) {
    t.current.type !== "IDLE" && (process.env.NODE_ENV !== "production" ? m(!1, "Expected to move from IDLE to PENDING drag") : m(!1)), t.current = {
      type: "PENDING",
      point: d,
      actions: l
    }, c();
  }, [c]);
  se(function() {
    return s(), function() {
      r.current();
    };
  }, [s]);
}
function tu() {
}
const ru = {
  [kl]: !0,
  [Wl]: !0,
  [jl]: !0,
  [Hl]: !0
};
function nu(e, t) {
  function r() {
    t(), e.cancel();
  }
  function n() {
    t(), e.drop();
  }
  return [{
    eventName: "keydown",
    fn: (o) => {
      if (o.keyCode === Rr) {
        o.preventDefault(), r();
        return;
      }
      if (o.keyCode === Ko) {
        o.preventDefault(), n();
        return;
      }
      if (o.keyCode === Kl) {
        o.preventDefault(), e.moveDown();
        return;
      }
      if (o.keyCode === zl) {
        o.preventDefault(), e.moveUp();
        return;
      }
      if (o.keyCode === Yl) {
        o.preventDefault(), e.moveRight();
        return;
      }
      if (o.keyCode === ql) {
        o.preventDefault(), e.moveLeft();
        return;
      }
      if (ru[o.keyCode]) {
        o.preventDefault();
        return;
      }
      Xo(o);
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
function ou(e) {
  const t = N.useRef(tu), r = B(() => ({
    eventName: "keydown",
    fn: function(s) {
      if (s.defaultPrevented || s.keyCode !== Ko)
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
      t.current = ce(window, nu(u, f), {
        capture: !0,
        passive: !1
      });
    }
  }), [e]), n = _(function() {
    const s = {
      passive: !1,
      capture: !0
    };
    t.current = ce(window, [r], s);
  }, [r]);
  se(function() {
    return n(), function() {
      t.current();
    };
  }, [n]);
}
const Ut = {
  type: "IDLE"
}, su = 120, iu = 0.15;
function au({
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
      r.keyCode === Rr && r.preventDefault(), e();
    }
  }, {
    eventName: xt,
    fn: e
  }];
}
function cu({
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
      if (!s || !(s.force >= iu))
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
function lu(e) {
  const t = N.useRef(Ut), r = N.useRef(he), n = _(function() {
    return t.current;
  }, []), o = _(function(p) {
    t.current = p;
  }, []), s = B(() => ({
    eventName: "touchstart",
    fn: function(p) {
      if (p.defaultPrevented)
        return;
      const v = e.findClosestDraggableId(p);
      if (!v)
        return;
      const h = e.tryGetLock(v, a, {
        sourceEvent: p
      });
      if (!h)
        return;
      const g = p.touches[0], {
        clientX: S,
        clientY: D
      } = g, E = {
        x: S,
        y: D
      };
      r.current(), l(h, E);
    }
  }), [e]), i = _(function() {
    const p = {
      capture: !0,
      passive: !1
    };
    r.current = ce(window, [s], p);
  }, [s]), a = _(() => {
    const d = t.current;
    d.type !== "IDLE" && (d.type === "PENDING" && clearTimeout(d.longPressTimerId), o(Ut), r.current(), i());
  }, [i, o]), c = _(() => {
    const d = t.current;
    a(), d.type === "DRAGGING" && d.actions.cancel({
      shouldBlockNextClick: !0
    }), d.type === "PENDING" && d.actions.abort();
  }, [a]), u = _(function() {
    const p = {
      capture: !0,
      passive: !1
    }, v = {
      cancel: c,
      completed: a,
      getPhase: n
    }, h = ce(window, cu(v), p), g = ce(window, au(v), p);
    r.current = function() {
      h(), g();
    };
  }, [c, n, a]), f = _(function() {
    const p = n();
    p.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? m(!1, `Cannot start dragging from phase ${p.type}`) : m(!1));
    const v = p.actions.fluidLift(p.point);
    o({
      type: "DRAGGING",
      actions: v,
      hasMoved: !1
    });
  }, [n, o]), l = _(function(p, v) {
    n().type !== "IDLE" && (process.env.NODE_ENV !== "production" ? m(!1, "Expected to move from IDLE to PENDING drag") : m(!1));
    const h = setTimeout(f, su);
    o({
      type: "PENDING",
      point: v,
      actions: p,
      longPressTimerId: h
    }), u();
  }, [u, n, o, f]);
  se(function() {
    return i(), function() {
      r.current();
      const v = n();
      v.type === "PENDING" && (clearTimeout(v.longPressTimerId), o(Ut));
    };
  }, [n, i, o]), se(function() {
    return ce(window, [{
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
function uu(e) {
  Ar(() => {
    const t = Pr(e);
    at(() => {
      t.current.length !== e.length && (process.env.NODE_ENV !== "production" ? m(!1, "Cannot change the amount of sensor hooks after mounting") : m(!1));
    });
  });
}
const du = ["input", "button", "textarea", "select", "option", "optgroup", "video", "audio"];
function Qo(e, t) {
  if (t == null)
    return !1;
  if (du.includes(t.tagName.toLowerCase()))
    return !0;
  const n = t.getAttribute("contenteditable");
  return n === "true" || n === "" ? !0 : t === e ? !1 : Qo(e, t.parentElement);
}
function fu(e, t) {
  const r = t.target;
  return it(r) ? Qo(e, r) : !1;
}
var pu = (e) => de(e.getBoundingClientRect()).center;
function mu(e) {
  return e instanceof qo(e).Element;
}
const gu = (() => {
  const e = "matches";
  return typeof document > "u" ? e : [e, "msMatchesSelector", "webkitMatchesSelector"].find((n) => n in Element.prototype) || e;
})();
function Zo(e, t) {
  return e == null ? null : e[gu](t) ? e : Zo(e.parentElement, t);
}
function hu(e, t) {
  return e.closest ? e.closest(t) : Zo(e, t);
}
function bu(e) {
  return `[${$e.contextId}="${e}"]`;
}
function vu(e, t) {
  const r = t.target;
  if (!mu(r))
    return process.env.NODE_ENV !== "production" && U("event.target must be a Element"), null;
  const n = bu(e), o = hu(r, n);
  return o ? it(o) ? o : (process.env.NODE_ENV !== "production" && U("drag handle must be a HTMLElement"), null) : null;
}
function yu(e, t) {
  const r = vu(e, t);
  return r ? r.getAttribute($e.draggableId) : null;
}
function Eu(e, t) {
  const r = `[${rr.contextId}="${e}"]`, o = jo(document, r).find((s) => s.getAttribute(rr.id) === t);
  return o ? it(o) ? o : (process.env.NODE_ENV !== "production" && U("Draggable element is not a HTMLElement"), null) : null;
}
function Du(e) {
  e.preventDefault();
}
function dt({
  expected: e,
  phase: t,
  isLockActive: r,
  shouldWarn: n
}) {
  return r() ? e !== t ? (n && process.env.NODE_ENV !== "production" && U(`
        Cannot perform action.
        The actions you used belong to an outdated phase

        Current phase: ${e}
        You called an action from outdated phase: ${t}

        Tips:

        - Do not use preDragActions actions after calling preDragActions.lift()
      `), !1) : !0 : (n && process.env.NODE_ENV !== "production" && U(`
        Cannot perform action.
        The sensor no longer has an action lock.

        Tips:

        - Throw away your action handlers when forceStop() is called
        - Check actions.isActive() if you really need to
      `), !1);
}
function es({
  lockAPI: e,
  store: t,
  registry: r,
  draggableId: n
}) {
  if (e.isClaimed())
    return !1;
  const o = r.draggable.findById(n);
  return o ? !(!o.options.isEnabled || !Uo(t.getState(), n)) : (process.env.NODE_ENV !== "production" && U(`Unable to find draggable with id: ${n}`), !1);
}
function Su({
  lockAPI: e,
  contextId: t,
  store: r,
  registry: n,
  draggableId: o,
  forceSensorStop: s,
  sourceEvent: i
}) {
  if (!es({
    lockAPI: e,
    store: r,
    registry: n,
    draggableId: o
  }))
    return null;
  const c = n.draggable.getById(o), u = Eu(t, c.descriptor.id);
  if (!u)
    return process.env.NODE_ENV !== "production" && U(`Unable to find draggable element with id: ${o}`), null;
  if (i && !c.options.canDragInteractiveElements && fu(u, i))
    return null;
  const f = e.claim(s || he);
  let l = "PRE_DRAG";
  function d() {
    return c.options.shouldRespectForcePress;
  }
  function p() {
    return e.isActive(f);
  }
  function v(b, w) {
    dt({
      expected: b,
      phase: l,
      isLockActive: p,
      shouldWarn: !0
    }) && r.dispatch(w());
  }
  const h = v.bind(null, "DRAGGING");
  function g(b) {
    function w() {
      e.release(), l = "COMPLETED";
    }
    l !== "PRE_DRAG" && (w(), process.env.NODE_ENV !== "production" ? m(!1, `Cannot lift in phase ${l}`) : m(!1)), r.dispatch(Qa(b.liftActionArgs)), l = "DRAGGING";
    function I(C, R = {
      shouldBlockNextClick: !1
    }) {
      if (b.cleanup(), R.shouldBlockNextClick) {
        const P = ce(window, [{
          eventName: "click",
          fn: Du,
          options: {
            once: !0,
            passive: !1,
            capture: !0
          }
        }]);
        setTimeout(P);
      }
      w(), r.dispatch(To({
        reason: C
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
      drop: (C) => I("DROP", C),
      cancel: (C) => I("CANCEL", C),
      ...b.actions
    };
  }
  function S(b) {
    const w = ze((C) => {
      h(() => Ro({
        client: C
      }));
    });
    return {
      ...g({
        liftActionArgs: {
          id: o,
          clientSelection: b,
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
    const b = {
      moveUp: () => h(ac),
      moveRight: () => h(lc),
      moveDown: () => h(cc),
      moveLeft: () => h(uc)
    };
    return g({
      liftActionArgs: {
        id: o,
        clientSelection: pu(u),
        movementMode: "SNAP"
      },
      cleanup: he,
      actions: b
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
const Nu = [eu, ou, lu];
function wu({
  contextId: e,
  store: t,
  registry: r,
  customSensors: n,
  enableDefaultSensors: o
}) {
  const s = [...o ? Nu : [], ...n || []], i = N.useState(() => Fl())[0], a = _(function(g, S) {
    tt(g) && !tt(S) && i.tryAbandon();
  }, [i]);
  se(function() {
    let g = t.getState();
    return t.subscribe(() => {
      const D = t.getState();
      a(g, D), g = D;
    });
  }, [i, t, a]), se(() => i.tryAbandon, [i.tryAbandon]);
  const c = _((h) => es({
    lockAPI: i,
    registry: r,
    store: t,
    draggableId: h
  }), [i, r, t]), u = _((h, g, S) => Su({
    lockAPI: i,
    registry: r,
    contextId: e,
    store: t,
    draggableId: h,
    forceSensorStop: g || null,
    sourceEvent: S && S.sourceEvent ? S.sourceEvent : null
  }), [e, i, r, t]), f = _((h) => yu(e, h), [e]), l = _((h) => {
    const g = r.draggable.findById(h);
    return g ? g.options : null;
  }, [r.draggable]), d = _(function() {
    i.isClaimed() && (i.tryAbandon(), t.getState().phase !== "IDLE" && t.dispatch(Dr()));
  }, [i, t]), p = _(() => i.isClaimed(), [i]), v = B(() => ({
    canGetLock: c,
    tryGetLock: u,
    findClosestDraggableId: f,
    findOptionsForDraggable: l,
    tryReleaseLock: d,
    isLockClaimed: p
  }), [c, u, f, l, d, p]);
  uu(s);
  for (let h = 0; h < s.length; h++)
    s[h](v);
}
const xu = (e) => ({
  onBeforeCapture: (t) => {
    const r = () => {
      e.onBeforeCapture && e.onBeforeCapture(t);
    };
    x.version.startsWith("16") || x.version.startsWith("17") ? r() : or.flushSync(r);
  },
  onBeforeDragStart: e.onBeforeDragStart,
  onDragStart: e.onDragStart,
  onDragEnd: e.onDragEnd,
  onDragUpdate: e.onDragUpdate
}), Ou = (e) => ({
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
function Cu(e) {
  const {
    contextId: t,
    setCallbacks: r,
    sensors: n,
    nonce: o,
    dragHandleUsageInstructions: s
  } = e, i = N.useRef(null);
  Ml();
  const a = Pr(e), c = _(() => xu(a.current), [a]), u = _(() => Ou(a.current), [a]), f = Cl(t), l = Rl({
    contextId: t,
    text: s
  }), d = El(t, o), p = _((P) => {
    ke(i).dispatch(P);
  }, []), v = B(() => Hr({
    publishWhileDragging: ec,
    updateDroppableScroll: rc,
    updateDroppableIsEnabled: nc,
    updateDroppableIsCombineEnabled: oc,
    collectionStarting: tc
  }, p), [p]), h = Nl(), g = B(() => Jc(h, v), [h, v]), S = B(() => ml({
    scrollWindow: Qc,
    scrollDroppable: g.scrollDroppable,
    getAutoScrollerOptions: u,
    ...Hr({
      move: Ro
    }, p)
  }), [g.scrollDroppable, p, u]), D = Dl(t), E = B(() => zc({
    announce: f,
    autoScroller: S,
    dimensionMarshal: g,
    focusMarshal: D,
    getResponders: c,
    styleMarshal: d
  }), [f, S, g, D, c, d]);
  process.env.NODE_ENV !== "production" && i.current && i.current !== E && process.env.NODE_ENV !== "production" && U("unexpected store change"), i.current = E;
  const y = _(() => {
    const P = ke(i);
    P.getState().phase !== "IDLE" && P.dispatch(Dr());
  }, []), b = _(() => {
    const P = ke(i).getState();
    return P.phase === "DROP_ANIMATING" ? !0 : P.phase === "IDLE" ? !1 : P.isDragging;
  }, []), w = B(() => ({
    isDragging: b,
    tryAbort: y
  }), [b, y]);
  r(w);
  const I = _((P) => Uo(ke(i).getState(), P), []), C = _(() => xe(ke(i).getState()), []), R = B(() => ({
    marshal: g,
    focus: D,
    contextId: t,
    canLift: I,
    isMovementAllowed: C,
    dragHandleUsageInstructionsId: l,
    registry: h
  }), [t, g, l, D, I, C, h]);
  return wu({
    contextId: t,
    store: E,
    registry: h,
    customSensors: n || null,
    enableDefaultSensors: e.enableDefaultSensors !== !1
  }), N.useEffect(() => y, [y]), x.createElement(wt.Provider, {
    value: R
  }, x.createElement(wi, {
    context: Ir,
    store: E
  }, e.children));
}
let Iu = 0;
function _u() {
  return B(() => `${Iu++}`, []);
}
function Au() {
  return x.useId();
}
var Pu = "useId" in x ? Au : _u;
function Ud(e) {
  const t = Pu(), r = e.dragHandleUsageInstructions || pt.dragHandleUsageInstructions;
  return x.createElement(Gi, null, (n) => x.createElement(Cu, {
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
const Ln = {
  dragging: 5e3,
  dropAnimating: 4500
}, Ru = (e, t) => t ? je.drop(t.duration) : e ? je.snap : je.fluid, Tu = (e, t) => {
  if (e)
    return t ? Qe.opacity.drop : Qe.opacity.combining;
}, Bu = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function Lu(e) {
  const r = e.dimension.client, {
    offset: n,
    combineWith: o,
    dropping: s
  } = e, i = !!o, a = Bu(e), c = !!s, u = c ? er.drop(n, i) : er.moveTo(n);
  return {
    position: "fixed",
    top: r.marginBox.top,
    left: r.marginBox.left,
    boxSizing: "border-box",
    width: r.borderBox.width,
    height: r.borderBox.height,
    transition: Ru(a, s),
    transform: u,
    opacity: Tu(i, c),
    zIndex: c ? Ln.dropAnimating : Ln.dragging,
    pointerEvents: "none"
  };
}
function $u(e) {
  return {
    transform: er.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function Vu(e) {
  return e.type === "DRAGGING" ? Lu(e) : $u(e);
}
function Mu(e, t, r = Y) {
  const n = window.getComputedStyle(t), o = t.getBoundingClientRect(), s = io(o, n), i = ht(s, r), a = {
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
function Fu(e) {
  const t = _r("draggable"), {
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
  }), [s, a, i]), u = _((p) => {
    const v = o();
    return v || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot get dimension when no ref is set") : m(!1)), Mu(r, v, p);
  }, [r, o]), f = B(() => ({
    uniqueId: t,
    descriptor: r,
    options: c,
    getDimension: u
  }), [r, u, c, t]), l = N.useRef(f), d = N.useRef(!0);
  se(() => (n.draggable.register(l.current), () => n.draggable.unregister(l.current)), [n.draggable]), se(() => {
    if (d.current) {
      d.current = !1;
      return;
    }
    const p = l.current;
    l.current = f, n.draggable.update(f, p);
  }, [f, n.draggable]);
}
var Tr = x.createContext(null);
function ts(e) {
  e && it(e) || (process.env.NODE_ENV !== "production" ? m(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : m(!1));
}
function Gu(e, t, r) {
  at(() => {
    function n(s) {
      return `Draggable[id: ${s}]: `;
    }
    const o = e.draggableId;
    o || (process.env.NODE_ENV !== "production" ? m(!1, "Draggable requires a draggableId") : m(!1)), typeof o != "string" && (process.env.NODE_ENV !== "production" ? m(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof o}] (value: ${o})`) : m(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? m(!1, `${n(o)} requires an integer index prop`) : m(!1)), e.mapped.type !== "DRAGGING" && (ts(r()), e.isEnabled && (zo(t, o) || (process.env.NODE_ENV !== "production" ? m(!1, `${n(o)} Unable to find drag handle`) : m(!1))));
  });
}
function Uu(e) {
  Ar(() => {
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
function Wu(e) {
  e.preventDefault();
}
const ku = (e) => {
  const t = N.useRef(null), r = _((w = null) => {
    t.current = w;
  }, []), n = _(() => t.current, []), {
    contextId: o,
    dragHandleUsageInstructionsId: s,
    registry: i
  } = yt(wt), {
    type: a,
    droppableId: c
  } = yt(Tr), u = B(() => ({
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
    isClone: h,
    mapped: g,
    dropAnimationFinished: S
  } = e;
  if (Gu(e, o, n), Uu(h), !h) {
    const w = B(() => ({
      descriptor: u,
      registry: i,
      getDraggableRef: n,
      canDragInteractiveElements: v,
      shouldRespectForcePress: p,
      isEnabled: d
    }), [u, i, n, v, p, d]);
    Fu(w);
  }
  const D = B(() => d ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": s,
    "data-rfd-drag-handle-draggable-id": l,
    "data-rfd-drag-handle-context-id": o,
    draggable: !1,
    onDragStart: Wu
  } : null, [o, s, l, d]), E = _((w) => {
    g.type === "DRAGGING" && g.dropping && w.propertyName === "transform" && (x.version.startsWith("16") || x.version.startsWith("17") ? S() : or.flushSync(S));
  }, [S, g]), y = B(() => {
    const w = Vu(g), I = g.type === "DRAGGING" && g.dropping ? E : void 0;
    return {
      innerRef: r,
      draggableProps: {
        "data-rfd-draggable-context-id": o,
        "data-rfd-draggable-id": l,
        style: w,
        onTransitionEnd: I
      },
      dragHandleProps: D
    };
  }, [o, D, l, g, E, r]), b = B(() => ({
    draggableId: u.id,
    type: u.type,
    source: {
      index: u.index,
      droppableId: u.droppableId
    }
  }), [u.droppableId, u.id, u.index, u.type]);
  return x.createElement(x.Fragment, null, f(y, g.snapshot, b));
};
var Hu = ku, rs = (e, t) => e === t, ns = (e) => {
  const {
    combine: t,
    destination: r
  } = e;
  return r ? r.droppableId : t ? t.droppableId : null;
};
const ju = (e) => e.combine ? e.combine.draggableId : null, qu = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function zu() {
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
      const i = o.current.client.offset, a = o.dimensions.draggables[s.draggableId], c = oe(o.impact), u = qu(o.impact), f = o.forceShouldAnimate;
      return r(e(i.x, i.y), o.movementMode, a, s.isClone, c, u, f);
    }
    if (o.phase === "DROP_ANIMATING") {
      const i = o.completed;
      if (i.result.draggableId !== s.draggableId)
        return null;
      const a = s.isClone, c = o.dimensions.draggables[s.draggableId], u = i.result, f = u.mode, l = ns(u), d = ju(u), v = {
        duration: o.dropDuration,
        curve: Nr.drop,
        moveTo: o.newHomeClientOffset,
        opacity: d ? Qe.opacity.drop : null,
        scale: d ? Qe.scale.drop : null
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
function os(e = null) {
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
const Yu = {
  mapped: {
    type: "SECONDARY",
    offset: Y,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: os(null)
  }
};
function Ku() {
  const e = z((i, a) => ({
    x: i,
    y: a
  })), t = z(os), r = z((i, a = null, c) => ({
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
      const g = Me(u.displacedBy.point), S = e(g.x, g.y);
      return r(S, p, !0);
    }
    if (l)
      return n(p);
    const v = c.displacedBy.point, h = e(v.x, v.y);
    return r(h, p, f.shouldAnimate);
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
const Xu = () => {
  const e = zu(), t = Ku();
  return (n, o) => e(n, o) || t(n, o) || Yu;
}, Ju = {
  dropAnimationFinished: Bo
}, Qu = oo(Xu, Ju, null, {
  context: Ir,
  areStatePropsEqual: rs
})(Hu);
var Zu = Qu;
function ss(e) {
  return yt(Tr).isUsingCloneFor === e.draggableId && !e.isClone ? null : x.createElement(Zu, e);
}
function Wd(e) {
  const t = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0, r = !!e.disableInteractiveElementBlocking, n = !!e.shouldRespectForcePress;
  return x.createElement(ss, Te({}, e, {
    isClone: !1,
    isEnabled: t,
    canDragInteractiveElements: r,
    shouldRespectForcePress: n
  }));
}
const Br = (e) => (t) => e === t, ed = Br("scroll"), td = Br("auto"), rd = Br("visible"), $n = (e, t) => t(e.overflowX) || t(e.overflowY), nd = (e, t) => t(e.overflowX) && t(e.overflowY), is = (e) => {
  const t = window.getComputedStyle(e), r = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return $n(r, ed) || $n(r, td);
}, od = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = et(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, m(!1)), !is(e))
    return !1;
  const r = window.getComputedStyle(t), n = {
    overflowX: r.overflowX,
    overflowY: r.overflowY
  };
  return nd(n, rd) || process.env.NODE_ENV !== "production" && U(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, as = (e) => e == null ? null : e === document.body ? od() ? e : null : e === document.documentElement ? null : is(e) ? e : as(e.parentElement);
var cs = as, sd = (e) => {
  !e || !cs(e.parentElement) || process.env.NODE_ENV !== "production" && U(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, nr = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const ls = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : ls(e.parentElement) : !1;
var id = (e) => {
  const t = cs(e), r = ls(e);
  return {
    closestScrollable: t,
    isFixedOnPage: r
  };
}, ad = ({
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
    } = a, v = Mo({
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
  })(), u = o === "vertical" ? hr : bo, f = Be({
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
const cd = (e, t) => {
  const r = ao(e);
  if (!t || e !== t)
    return r;
  const n = r.paddingBox.top - t.scrollTop, o = r.paddingBox.left - t.scrollLeft, s = n + t.scrollHeight, i = o + t.scrollWidth, c = fr({
    top: n,
    right: i,
    bottom: s,
    left: o
  }, r.border);
  return pr({
    borderBox: c,
    margin: r.margin,
    border: r.border,
    padding: r.padding
  });
};
var ld = ({
  ref: e,
  descriptor: t,
  env: r,
  windowScroll: n,
  direction: o,
  isDropDisabled: s,
  isCombineEnabled: i,
  shouldClipSubject: a
}) => {
  const c = r.closestScrollable, u = cd(e, c), f = ht(u, n), l = (() => {
    if (!c)
      return null;
    const p = ao(c), v = {
      scrollHeight: c.scrollHeight,
      scrollWidth: c.scrollWidth
    };
    return {
      client: p,
      page: ht(p, n),
      scroll: nr(c),
      scrollSize: v,
      shouldClipSubject: a
    };
  })();
  return ad({
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
const ud = {
  passive: !1
}, dd = {
  passive: !0
};
var Vn = (e) => e.shouldPublishImmediately ? ud : dd;
const ft = (e) => e && e.env.closestScrollable || null;
function fd(e) {
  const t = N.useRef(null), r = yt(wt), n = _r("droppable"), {
    registry: o,
    marshal: s
  } = r, i = Pr(e), a = B(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), c = N.useRef(a), u = B(() => z((y, b) => {
    t.current || (process.env.NODE_ENV !== "production" ? m(!1, "Can only update scroll when dragging") : m(!1));
    const w = {
      x: y,
      y: b
    };
    s.updateDroppableScroll(a.id, w);
  }), [a.id, s]), f = _(() => {
    const y = t.current;
    return !y || !y.env.closestScrollable ? Y : nr(y.env.closestScrollable);
  }, []), l = _(() => {
    const y = f();
    u(y.x, y.y);
  }, [f, u]), d = B(() => ze(l), [l]), p = _(() => {
    const y = t.current, b = ft(y);
    if (y && b || (process.env.NODE_ENV !== "production" ? m(!1, "Could not find scroll options while scrolling") : m(!1)), y.scrollOptions.shouldPublishImmediately) {
      l();
      return;
    }
    d();
  }, [d, l]), v = _((y, b) => {
    t.current && (process.env.NODE_ENV !== "production" ? m(!1, "Cannot collect a droppable while a drag is occurring") : m(!1));
    const w = i.current, I = w.getDroppableRef();
    I || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot collect without a droppable ref") : m(!1));
    const C = id(I), R = {
      ref: I,
      descriptor: a,
      env: C,
      scrollOptions: b
    };
    t.current = R;
    const P = ld({
      ref: I,
      descriptor: a,
      env: C,
      windowScroll: y,
      direction: w.direction,
      isDropDisabled: w.isDropDisabled,
      isCombineEnabled: w.isCombineEnabled,
      shouldClipSubject: !w.ignoreContainerClipping
    }), L = C.closestScrollable;
    return L && (L.setAttribute(An.contextId, r.contextId), L.addEventListener("scroll", p, Vn(R.scrollOptions)), process.env.NODE_ENV !== "production" && sd(L)), P;
  }, [r.contextId, a, p, i]), h = _(() => {
    const y = t.current, b = ft(y);
    return y && b || (process.env.NODE_ENV !== "production" ? m(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : m(!1)), nr(b);
  }, []), g = _(() => {
    const y = t.current;
    y || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot stop drag when no active drag") : m(!1));
    const b = ft(y);
    t.current = null, b && (d.cancel(), b.removeAttribute(An.contextId), b.removeEventListener("scroll", p, Vn(y.scrollOptions)));
  }, [p, d]), S = _((y) => {
    const b = t.current;
    b || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot scroll when there is no drag") : m(!1));
    const w = ft(b);
    w || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot scroll a droppable with no closest scrollable") : m(!1)), w.scrollTop += y.y, w.scrollLeft += y.x;
  }, []), D = B(() => ({
    getDimensionAndWatchScroll: v,
    getScrollWhileDragging: h,
    dragStopped: g,
    scroll: S
  }), [g, v, h, S]), E = B(() => ({
    uniqueId: n,
    descriptor: a,
    callbacks: D
  }), [D, a, n]);
  se(() => (c.current = E.descriptor, o.droppable.register(E), () => {
    t.current && (process.env.NODE_ENV !== "production" && U("Unsupported: changing the droppableId or type of a Droppable during a drag"), g()), o.droppable.unregister(E);
  }), [D, a, g, E, s, o.droppable]), se(() => {
    t.current && s.updateDroppableIsEnabled(c.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, s]), se(() => {
    t.current && s.updateDroppableIsCombineEnabled(c.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, s]);
}
function Wt() {
}
const Mn = {
  width: 0,
  height: 0,
  margin: zi
}, pd = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => e || r === "close" ? Mn : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, md = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => {
  const n = pd({
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
}, gd = (e) => {
  const t = N.useRef(null), r = _(() => {
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
  const u = _((l) => {
    l.propertyName === "height" && (o(), n === "close" && s());
  }, [n, s, o]), f = md({
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
var hd = x.memo(gd);
function kt(e) {
  return typeof e == "boolean";
}
function Ht(e, t) {
  t.forEach((r) => r(e));
}
const bd = [function({
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
  ts(t());
}], vd = [function({
  props: t,
  getPlaceholderRef: r
}) {
  !t.placeholder || r() || process.env.NODE_ENV !== "production" && U(`
      Droppable setup issue [droppableId: "${t.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], yd = [function({
  props: t
}) {
  t.renderClone || (process.env.NODE_ENV !== "production" ? m(!1, "Must provide a clone render function (renderClone) for virtual lists") : m(!1));
}, function({
  getPlaceholderRef: t
}) {
  t() && (process.env.NODE_ENV !== "production" ? m(!1, "Expected virtual list to not have a placeholder") : m(!1));
}];
function Ed(e) {
  at(() => {
    Ht(e, bd), e.props.mode === "standard" && Ht(e, vd), e.props.mode === "virtual" && Ht(e, yd);
  });
}
class Dd extends x.PureComponent {
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
const Sd = (e) => {
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
    useClone: h,
    updateViewportMaxScroll: g,
    getContainerForClone: S
  } = e, D = _(() => o.current, []), E = _((T = null) => {
    o.current = T;
  }, []), y = _(() => s.current, []), b = _((T = null) => {
    s.current = T;
  }, []);
  Ed({
    props: e,
    getDroppableRef: D,
    getPlaceholderRef: y
  });
  const w = _(() => {
    n() && g({
      maxScroll: Go()
    });
  }, [n, g]);
  fd({
    droppableId: a,
    type: c,
    mode: u,
    direction: f,
    isDropDisabled: d,
    isCombineEnabled: p,
    ignoreContainerClipping: l,
    getDroppableRef: D
  });
  const I = B(() => x.createElement(Dd, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: T,
    data: G,
    animate: W
  }) => x.createElement(hd, {
    placeholder: G,
    onClose: T,
    innerRef: b,
    animate: W,
    contextId: r,
    onTransitionEnd: w
  })), [r, w, e.placeholder, e.shouldAnimatePlaceholder, b]), C = B(() => ({
    innerRef: E,
    placeholder: I,
    droppableProps: {
      "data-rfd-droppable-id": a,
      "data-rfd-droppable-context-id": r
    }
  }), [r, a, I, E]), R = h ? h.dragging.draggableId : null, P = B(() => ({
    droppableId: a,
    type: c,
    isUsingCloneFor: R
  }), [a, R, c]);
  function L() {
    if (!h)
      return null;
    const {
      dragging: T,
      render: G
    } = h, W = x.createElement(ss, {
      draggableId: T.draggableId,
      index: T.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (q, K) => G(q, K, T));
    return ds.createPortal(W, S());
  }
  return x.createElement(Tr.Provider, {
    value: P
  }, i(C, v), L());
};
var Nd = Sd;
function wd() {
  return document.body || (process.env.NODE_ENV !== "production" ? m(!1, "document.body is not ready") : m(!1)), document.body;
}
const Fn = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: wd
}, us = (e) => {
  let t = {
    ...e
  }, r;
  for (r in Fn)
    e[r] === void 0 && (t = {
      ...t,
      [r]: Fn[r]
    });
  return t;
}, jt = (e, t) => e === t.droppable.type, Gn = (e, t) => t.draggables[e.draggable.id], xd = () => {
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
      } : null, h = {
        isDraggingOver: a,
        draggingOverWith: a ? l : null,
        draggingFromThisWith: l,
        isUsingPlaceholder: !0
      };
      return {
        placeholder: u.placeholder,
        shouldAnimatePlaceholder: !1,
        snapshot: h,
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
    const a = us(i), c = a.droppableId, u = a.type, f = !a.isDropDisabled, l = a.renderClone;
    if (tt(s)) {
      const d = s.critical;
      if (!jt(u, d))
        return t;
      const p = Gn(d, s.dimensions), v = oe(s.impact) === c;
      return n(c, f, v, v, p, l);
    }
    if (s.phase === "DROP_ANIMATING") {
      const d = s.completed;
      if (!jt(u, d.critical))
        return t;
      const p = Gn(d.critical, s.dimensions);
      return n(c, f, ns(d.result) === c, oe(d.impact) === c, p, l);
    }
    if (s.phase === "IDLE" && s.completed && !s.shouldFlush) {
      const d = s.completed;
      if (!jt(u, d.critical))
        return t;
      const p = oe(d.impact) === c, v = !!(d.impact.at && d.impact.at.type === "COMBINE"), h = d.critical.droppable.id === c;
      return p ? v ? e : t : h ? e : t;
    }
    return t;
  };
}, Od = {
  updateViewportMaxScroll: ic
}, Cd = oo(xd, Od, (e, t, r) => ({
  ...us(r),
  ...e,
  ...t
}), {
  context: Ir,
  areStatePropsEqual: rs
})(Nd);
var kd = Cd;
const Id = (e) => /* @__PURE__ */ N.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512", ...e }, /* @__PURE__ */ N.createElement("path", { d: "M0 117.66v346.32c0 11.32 11.43 19.06 21.94 14.86L160 416V32L20.12 87.95A32.006 32.006 0 000 117.66zM192 416l192 64V96L192 32v384zM554.06 33.16L416 96v384l139.88-55.95A31.996 31.996 0 00576 394.34V48.02c0-11.32-11.43-19.06-21.94-14.86z" })), Hd = ({ loadConfig: e, state: t, convertStateToConfig: r }) => {
  const [n, o] = N.useState(!1), [s, i] = N.useState({});
  N.useEffect(() => {
    let c = t;
    t.type !== "dashboard" ? c = r() : c = JSON.parse(JSON.stringify(c));
    const u = JSON.stringify(c, void 0, 2);
    i(u);
  }, [t]);
  const a = {
    chart: ["Charts", "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/bar-chart.html", /* @__PURE__ */ x.createElement(Vr, null)],
    dashboard: ["Dashboard", "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/bar-chart.html", /* @__PURE__ */ x.createElement(Vr, null)],
    map: ["Maps", "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/data-map.html", /* @__PURE__ */ x.createElement(Id, null)],
    "markup-include": ["Markup Include", "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/Markup-Include.html", /* @__PURE__ */ x.createElement(ps, null)]
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
function jd(e) {
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
function Un(e) {
  const t = {};
  for (const [r, n] of new URLSearchParams(window.location.search).entries())
    t[r] = n;
  return t;
}
function Wn(e) {
  const t = `${window.location.origin}${window.location.pathname}?${Object.keys(e).map((r) => `${r}=${encodeURIComponent(e[r])}`).join("&")}`;
  window.history.pushState({ path: t }, "", t);
}
const _d = ["dropdown", "pill", "tab", "tab bar"], Ad = [
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
], kn = (e) => {
  const { order: t } = e, r = (o, s) => o.toString().localeCompare(s.toString(), "en", { numeric: !0 }), n = (o, s) => s.toString().localeCompare(o.toString(), "en", { numeric: !0 });
  return (!t || t === "") && (e.order = "asc"), t === "desc" && (e.values = e.values.sort(n)), t === "asc" && (e.values = e.values.sort(r)), e;
}, qt = ["chart", "table"], Pd = (e) => {
  const [t, r] = N.useState(!1), { config: n, setConfig: o, filteredData: s, setFilteredData: i, excludedData: a, filterData: c } = e, { type: u } = n;
  return {
    handleApplyButton: (g) => {
      let S = !1;
      const D = Un();
      g.forEach((E) => {
        E.queuedActive && (E.active = E.queuedActive, delete E.queuedActive, E.setByQueryParameter && D[E.setByQueryParameter] !== E.active && (D[E.setByQueryParameter] = E.active, S = !0));
      }), S && Wn(D), o({ ...n, filters: g }), u === "map" && i(g, a), qt.includes(n.type) && i(c(g, a)), r(!1);
    },
    changeFilterActive: (g, S) => {
      const D = n.type === "map" ? [...s] : [...n.filters];
      if (n.filterBehavior === "Apply Button")
        D[g].queuedActive = S, r(!0);
      else {
        const E = D[g];
        E.active = S;
        const y = Un();
        E.setByQueryParameter && y[E.setByQueryParameter] !== E.active && (y[E.setByQueryParameter] = E.active, Wn(y));
      }
      o({
        ...n,
        filters: D
      }), n.type === "map" && n.filterBehavior === "Filter Change" && i(D), qt.includes(n.type) && n.filterBehavior === "Filter Change" && i(c(D, a));
    },
    announceChange: (g) => {
    },
    showApplyButton: t,
    handleReset: (g) => {
      let S = [...n.filters];
      g.preventDefault(), S.map((D) => (D = kn(D), D.active = D.values[0], D)), u === "map" ? i(S, a) : i(c(S, a)), o({ ...n, filters: S });
    },
    filterConstants: {
      buttonText: "Apply Filters",
      resetText: "Reset All",
      introText: "Make a selection from the filters to change the visualization information.",
      applyText: "Select the apply button to update the visualization information."
    },
    filterStyleOptions: _d,
    filterOrderOptions: Ad,
    handleFilterOrder: (g, S, D, E) => {
      const y = [...E.values], [b] = y.splice(g, 1);
      y.splice(S, 0, b);
      const w = qt.includes(n.type) ? [...n.filters] : [...s], I = { ...w[D] };
      I.values = y, I.orderedValues = y, I.active = y[0], I.order = "cust", w[D] = I, n.type === "map" && i(w), o({ ...n, filters: w });
    },
    handleSorting: kn
  };
}, Rd = (e) => {
  var I;
  const { config: t, filteredData: r, dimensions: n } = e, { filters: o, type: s, general: i, theme: a, filterBehavior: c } = t, [u, f] = N.useState(!1), [l, d] = N.useState(""), p = N.useId(), {
    handleApplyButton: v,
    changeFilterActive: h,
    announceChange: g,
    showApplyButton: S,
    handleReset: D,
    filterConstants: E,
    handleSorting: y
  } = Pd(e);
  N.useEffect(() => {
    n && (n[0] < 768 && (o == null ? void 0 : o.length) > 0 ? f(!0) : f(!1));
  }, [n]), N.useEffect(() => {
    if (l) {
      let C = document.getElementById(l.id);
      C && C.focus();
    }
  }, [h, l]);
  const b = (C) => C.children, w = ["filters-section", s === "map" ? i.headerColor : (t == null ? void 0 : t.visualizationType) === "Spark Line" ? null : a];
  if (b.Section = (C) => (t == null ? void 0 : t.filters) && /* @__PURE__ */ x.createElement("section", { className: w.join(" ") }, /* @__PURE__ */ x.createElement("p", { className: "filters-section__intro-text" }, o != null && o.some((R) => R.active) ? E.introText : "", " ", t.filterBehavior === "Apply Button" && E.applyText), /* @__PURE__ */ x.createElement("div", { className: "filters-section__wrapper" }, C.children)), b.ApplyBehavior = (C) => {
    if (c !== "Apply Button")
      return;
    const R = [i != null && i.headerColor ? i.headerColor : a, "apply"];
    return /* @__PURE__ */ x.createElement("div", { className: "filters-section__buttons" }, /* @__PURE__ */ x.createElement(ms, { onClick: () => v(o), disabled: !S, className: R.join(" ") }, E.buttonText), /* @__PURE__ */ x.createElement("a", { href: "#!", role: "button", onClick: D }, E.resetText));
  }, b.TabBar = (C) => {
    const { filter: R, index: P } = C;
    return /* @__PURE__ */ x.createElement("section", { className: "single-filters__tab-bar" }, R.values.map((L, T) => {
      const G = ["button__tab-bar", R.active === L ? "button__tab-bar--active" : ""];
      return /* @__PURE__ */ x.createElement(
        "button",
        {
          id: `${L}-${P}-${T}-${p}`,
          className: G.join(" "),
          key: L,
          onClick: (W) => {
            h(P, L), d(W.target);
          },
          onKeyDown: (W) => {
            W.keyCode === 13 && (h(P, L), d(W.target));
          }
        },
        L
      );
    }));
  }, b.Pills = (C) => C.pills, b.Tabs = (C) => C.tabs, b.Dropdown = (C) => {
    const { index: R, label: P, active: L, filters: T } = C;
    return /* @__PURE__ */ x.createElement(
      "select",
      {
        id: `filter-${R}`,
        name: P,
        "aria-label": `Filter by ${P}`,
        className: "filter-select",
        "data-index": "0",
        value: L,
        onChange: (G) => {
          h(R, G.target.value), g(`Filter ${P} value has been changed to ${G.target.value}, please reference the data table to see updated values.`);
        }
      },
      T
    );
  }, b.Style = () => {
    if (o || r) {
      let C = s === "map" ? r : o;
      return delete C.fromHash, C.map((R, P) => {
        if (R.showDropdown === !1)
          return;
        const L = [], T = [], G = [], { active: W, queuedActive: q, label: K, filterStyle: X } = R;
        y(R), R.values.forEach((k, ie) => {
          const pe = ["pill", W === k ? "pill--active" : null, a && a], me = ["tab", W === k && "tab--active", a && a];
          T.push(
            /* @__PURE__ */ x.createElement("div", { className: "pill__wrapper", key: `pill-${ie}` }, /* @__PURE__ */ x.createElement(
              "button",
              {
                id: `${k}-${P}-${ie}-${p}`,
                className: pe.join(" "),
                onKeyDown: (H) => {
                  H.keyCode === 13 && (h(P, k), d(H.target));
                },
                onClick: (H) => {
                  h(P, k), d(H.target);
                },
                name: K
              },
              k
            ))
          ), L.push(
            /* @__PURE__ */ x.createElement("option", { key: ie, value: k, "aria-label": k }, R.labels && R.labels[k] ? R.labels[k] : k)
          ), G.push(
            /* @__PURE__ */ x.createElement(
              "button",
              {
                id: `${k}-${P}-${ie}-${p}`,
                className: me.join(" "),
                onClick: (H) => {
                  h(P, k), d(H.target);
                },
                onKeyDown: (H) => {
                  H.keyCode === 13 && (h(P, k), d(H.target));
                }
              },
              k
            )
          );
        });
        const re = ["single-filters", u ? "single-filters--dropdown" : `single-filters--${X}`];
        return /* @__PURE__ */ x.createElement("div", { className: re.join(" "), key: P }, /* @__PURE__ */ x.createElement(x.Fragment, null, K && /* @__PURE__ */ x.createElement("label", { htmlFor: `filter-${P}` }, K), X === "tab" && !u && /* @__PURE__ */ x.createElement(b.Tabs, { tabs: G }), X === "pill" && !u && /* @__PURE__ */ x.createElement(b.Pills, { pills: T }), X === "tab bar" && !u && /* @__PURE__ */ x.createElement(b.TabBar, { filter: R, index: P }), (X === "dropdown" || u) && /* @__PURE__ */ x.createElement(b.Dropdown, { filter: R, index: P, label: K, active: q || W, filters: L })));
      });
    }
  }, ((I = t == null ? void 0 : t.filters) == null ? void 0 : I.length) !== 0)
    return /* @__PURE__ */ x.createElement(b, null, /* @__PURE__ */ x.createElement(b.Section, null, /* @__PURE__ */ x.createElement(b.Style, null), /* @__PURE__ */ x.createElement(b.ApplyBehavior, null)));
};
Rd.propTypes = {
  // runtimeFilters in place
  filteredData: Se.array,
  // function for updating the runtime filters
  setFilteredData: Se.func,
  // the full apps config
  config: Se.object,
  // updating function for setting fitlerBehavior
  setConfig: Se.func,
  // exclusions
  excludedData: Se.array,
  // function for filtering the data
  filterData: Se.func,
  dimensions: Se.array
};
export {
  Hd as A,
  kd as C,
  Ud as D,
  Rd as F,
  Wd as P,
  zn as _,
  Ad as a,
  Un as b,
  Yn as c,
  Pd as d,
  _d as f,
  jd as g,
  kn as h,
  Wn as u
};
