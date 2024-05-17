import { r as w, R as x } from "./storybook-index-45401197.es.js";
import { r as ir, R as ds } from "./storybook-index-633d712d.es.js";
import { _ as Te } from "./storybook-extends-70f3d2a3.es.js";
import { g as fs } from "./storybook-_commonjsHelpers-c5d32002.es.js";
import { i as Mr } from "./storybook-tiny-invariant-9f3340e2.es.js";
import { e as Fr, l as ps } from "./storybook-Icon-48ed169f.es.js";
import { B as ms } from "./storybook-Button-d74e310e.es.js";
import { P as Ne } from "./storybook-index-43433e35.es.js";
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
function ar(e) {
  return typeof e != "string" && (e = String(e)), e;
}
function cr(e) {
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
function q(e) {
  this.map = {}, e instanceof q ? e.forEach(function(t, r) {
    this.append(r, t);
  }, this) : Array.isArray(e) ? e.forEach(function(t) {
    if (t.length != 2)
      throw new TypeError("Headers constructor: expected name/value pair to be length 2, found" + t.length);
    this.append(t[0], t[1]);
  }, this) : e && Object.getOwnPropertyNames(e).forEach(function(t) {
    this.append(t, e[t]);
  }, this);
}
q.prototype.append = function(e, t) {
  e = Ve(e), t = ar(t);
  var r = this.map[e];
  this.map[e] = r ? r + ", " + t : t;
};
q.prototype.delete = function(e) {
  delete this.map[Ve(e)];
};
q.prototype.get = function(e) {
  return e = Ve(e), this.has(e) ? this.map[e] : null;
};
q.prototype.has = function(e) {
  return this.map.hasOwnProperty(Ve(e));
};
q.prototype.set = function(e, t) {
  this.map[Ve(e)] = ar(t);
};
q.prototype.forEach = function(e, t) {
  for (var r in this.map)
    this.map.hasOwnProperty(r) && e.call(t, this.map[r], r, this);
};
q.prototype.keys = function() {
  var e = [];
  return this.forEach(function(t, r) {
    e.push(r);
  }), cr(e);
};
q.prototype.values = function() {
  var e = [];
  return this.forEach(function(t) {
    e.push(t);
  }), cr(e);
};
q.prototype.entries = function() {
  var e = [];
  return this.forEach(function(t, r) {
    e.push([r, t]);
  }), cr(e);
};
ee.iterable && (q.prototype[Symbol.iterator] = q.prototype.entries);
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
function Gr(e) {
  if (e.slice)
    return e.slice(0);
  var t = new Uint8Array(e.byteLength);
  return t.set(new Uint8Array(e)), t.buffer;
}
function jn() {
  return this.bodyUsed = !1, this._initBody = function(e) {
    this.bodyUsed = this.bodyUsed, this._bodyInit = e, e ? typeof e == "string" ? this._bodyText = e : ee.blob && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : ee.formData && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : ee.searchParams && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : ee.arrayBuffer && ee.blob && gs(e) ? (this._bodyArrayBuffer = Gr(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : ee.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(e) || bs(e)) ? this._bodyArrayBuffer = Gr(e) : this._bodyText = e = Object.prototype.toString.call(e) : (this._noBody = !0, this._bodyText = ""), this.headers.get("content-type") || (typeof e == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : ee.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
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
function Ie(e, t) {
  if (!(this instanceof Ie))
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
  t = t || {};
  var r = t.body;
  if (e instanceof Ie) {
    if (e.bodyUsed)
      throw new TypeError("Already read");
    this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new q(e.headers)), this.method = e.method, this.mode = e.mode, this.signal = e.signal, !r && e._bodyInit != null && (r = e._bodyInit, e.bodyUsed = !0);
  } else
    this.url = String(e);
  if (this.credentials = t.credentials || this.credentials || "same-origin", (t.headers || !this.headers) && (this.headers = new q(t.headers)), this.method = Ss(t.method || this.method || "GET"), this.mode = t.mode || this.mode || null, this.signal = t.signal || this.signal || function() {
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
Ie.prototype.clone = function() {
  return new Ie(this, { body: this._bodyInit });
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
  var t = new q(), r = e.replace(/\r?\n[\t ]+/g, " ");
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
jn.call(Ie.prototype);
function me(e, t) {
  if (!(this instanceof me))
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
  if (t || (t = {}), this.type = "default", this.status = t.status === void 0 ? 200 : t.status, this.status < 200 || this.status > 599)
    throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");
  this.ok = this.status >= 200 && this.status < 300, this.statusText = t.statusText === void 0 ? "" : "" + t.statusText, this.headers = new q(t.headers), this.url = t.url || "", this._initBody(e);
}
jn.call(me.prototype);
me.prototype.clone = function() {
  return new me(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new q(this.headers),
    url: this.url
  });
};
me.error = function() {
  var e = new me(null, { status: 200, statusText: "" });
  return e.ok = !1, e.status = 0, e.type = "error", e;
};
var xs = [301, 302, 303, 307, 308];
me.redirect = function(e, t) {
  if (xs.indexOf(t) === -1)
    throw new RangeError("Invalid status code");
  return new me(null, { status: t, headers: { location: e } });
};
var Ce = X.DOMException;
try {
  new Ce();
} catch {
  Ce = function(t, r) {
    this.message = t, this.name = r;
    var n = Error(t);
    this.stack = n.stack;
  }, Ce.prototype = Object.create(Error.prototype), Ce.prototype.constructor = Ce;
}
function qn(e, t) {
  return new Promise(function(r, n) {
    var o = new Ie(e, t);
    if (o.signal && o.signal.aborted)
      return n(new Ce("Aborted", "AbortError"));
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
        r(new me(f, u));
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
        n(new Ce("Aborted", "AbortError"));
      }, 0);
    };
    function a(u) {
      try {
        return u === "" && X.location.href ? X.location.href : u;
      } catch {
        return u;
      }
    }
    if (s.open(o.method, a(o.url), !0), o.credentials === "include" ? s.withCredentials = !0 : o.credentials === "omit" && (s.withCredentials = !1), "responseType" in s && (ee.blob ? s.responseType = "blob" : ee.arrayBuffer && (s.responseType = "arraybuffer")), t && typeof t.headers == "object" && !(t.headers instanceof q || X.Headers && t.headers instanceof X.Headers)) {
      var c = [];
      Object.getOwnPropertyNames(t.headers).forEach(function(u) {
        c.push(Ve(u)), s.setRequestHeader(u, ar(t.headers[u]));
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
X.fetch || (X.fetch = qn, X.Headers = q, X.Request = Ie, X.Response = me);
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
function Ur(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Wr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ur(Object(r), !0).forEach(function(n) {
      Is(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ur(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function te(e) {
  return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. ";
}
var kr = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}(), Ct = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
}, Hr = {
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
function xe(e) {
  var t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = As(e)), t;
}
function Yn(e, t, r) {
  var n;
  if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? te(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
    if (typeof r != "function")
      throw new Error(process.env.NODE_ENV === "production" ? te(1) : "Expected the enhancer to be a function. Instead, received: '" + xe(r) + "'");
    return r(Yn)(e, t);
  }
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? te(2) : "Expected the root reducer to be a function. Instead, received: '" + xe(e) + "'");
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
      throw new Error(process.env.NODE_ENV === "production" ? te(4) : "Expected the listener to be a function. Instead, received: '" + xe(b) + "'");
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? te(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    var g = !0;
    return u(), a.push(b), function() {
      if (g) {
        if (c)
          throw new Error(process.env.NODE_ENV === "production" ? te(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        g = !1, u();
        var S = a.indexOf(b);
        a.splice(S, 1), i = null;
      }
    };
  }
  function d(b) {
    if (!_s(b))
      throw new Error(process.env.NODE_ENV === "production" ? te(7) : "Actions must be plain objects. Instead, the actual type was: '" + xe(b) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    if (typeof b.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? te(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? te(9) : "Reducers may not dispatch actions.");
    try {
      c = !0, s = o(s, b);
    } finally {
      c = !1;
    }
    for (var g = i = a, N = 0; N < g.length; N++) {
      var S = g[N];
      S();
    }
    return b;
  }
  function p(b) {
    if (typeof b != "function")
      throw new Error(process.env.NODE_ENV === "production" ? te(10) : "Expected the nextReducer to be a function. Instead, received: '" + xe(b));
    o = b, d({
      type: Hr.REPLACE
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
      subscribe: function(S) {
        if (typeof S != "object" || S === null)
          throw new Error(process.env.NODE_ENV === "production" ? te(11) : "Expected the observer to be an object. Instead, received: '" + xe(S) + "'");
        function E() {
          S.next && S.next(f());
        }
        E();
        var y = g(E);
        return {
          unsubscribe: y
        };
      }
    }, b[kr] = function() {
      return this;
    }, b;
  }
  return d({
    type: Hr.INIT
  }), n = {
    dispatch: d,
    subscribe: l,
    getState: f,
    replaceReducer: p
  }, n[kr] = v, n;
}
function jr(e, t) {
  return function() {
    return t(e.apply(this, arguments));
  };
}
function qr(e, t) {
  if (typeof e == "function")
    return jr(e, t);
  if (typeof e != "object" || e === null)
    throw new Error(process.env.NODE_ENV === "production" ? te(16) : "bindActionCreators expected an object or a function, but instead received: '" + xe(e) + `'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`);
  var r = {};
  for (var n in e) {
    var o = e[n];
    typeof o == "function" && (r[n] = jr(o, t));
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
      return s = Kn.apply(void 0, a)(o.dispatch), Wr(Wr({}, o), {}, {
        dispatch: s
      });
    };
  };
}
var Kt = { exports: {} }, It = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zr;
function Ls() {
  if (zr)
    return It;
  zr = 1;
  var e = w;
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
var Yr;
function $s() {
  return Yr || (Yr = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = w, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function r(E) {
      {
        for (var y = arguments.length, h = new Array(y > 1 ? y - 1 : 0), D = 1; D < y; D++)
          h[D - 1] = arguments[D];
        n("error", E, h);
      }
    }
    function n(E, y, h) {
      {
        var D = t.ReactDebugCurrentFrame, O = D.getStackAddendum();
        O !== "" && (y += "%s", h = h.concat([O]));
        var P = h.map(function(B) {
          return String(B);
        });
        P.unshift("Warning: " + y), Function.prototype.apply.call(console[E], console, P);
      }
    }
    function o(E, y) {
      return E === y && (E !== 0 || 1 / E === 1 / y) || E !== E && y !== y;
    }
    var s = typeof Object.is == "function" ? Object.is : o, i = e.useState, a = e.useEffect, c = e.useLayoutEffect, u = e.useDebugValue, f = !1, l = !1;
    function d(E, y, h) {
      f || e.startTransition !== void 0 && (f = !0, r("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var D = y();
      if (!l) {
        var O = y();
        s(D, O) || (r("The result of getSnapshot should be cached to avoid an infinite loop"), l = !0);
      }
      var P = i({
        inst: {
          value: D,
          getSnapshot: y
        }
      }), B = P[0].inst, A = P[1];
      return c(function() {
        B.value = D, B.getSnapshot = y, p(B) && A({
          inst: B
        });
      }, [E, D, y]), a(function() {
        p(B) && A({
          inst: B
        });
        var T = function() {
          p(B) && A({
            inst: B
          });
        };
        return E(T);
      }, [E]), u(D), D;
    }
    function p(E) {
      var y = E.getSnapshot, h = E.value;
      try {
        var D = y();
        return !s(h, D);
      } catch {
        return !0;
      }
    }
    function v(E, y, h) {
      return y();
    }
    var b = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", g = !b, N = g ? v : d, S = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : N;
    _t.useSyncExternalStore = S, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), _t;
}
process.env.NODE_ENV === "production" ? Kt.exports = Ls() : Kt.exports = $s();
var lr = Kt.exports, At = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kr;
function Vs() {
  if (Kr)
    return At;
  Kr = 1;
  var e = w, t = lr;
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
      function N(D) {
        if (!S) {
          if (S = !0, E = D, D = d(D), p !== void 0 && b.hasValue) {
            var O = b.value;
            if (p(O, D))
              return y = O;
          }
          return y = D;
        }
        if (O = y, n(E, D))
          return O;
        var P = d(D);
        return p !== void 0 && p(O, P) ? O : (E = D, y = P);
      }
      var S = !1, E, y, h = l === void 0 ? null : l;
      return [function() {
        return N(f());
      }, h === null ? void 0 : function() {
        return N(h());
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
var Xr;
function Ms() {
  return Xr || (Xr = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = w, t = lr;
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
      var N = a(function() {
        var h = !1, D, O, P = function(R) {
          if (!h) {
            h = !0, D = R;
            var $ = p(R);
            if (v !== void 0 && g.hasValue) {
              var H = g.value;
              if (v(H, $))
                return O = H, H;
            }
            return O = $, $;
          }
          var W = D, j = O;
          if (n(W, R))
            return j;
          var re = p(R);
          return v !== void 0 && v(j, re) ? j : (D = R, O = re, re);
        }, B = d === void 0 ? null : d, A = function() {
          return P(l());
        }, T = B === null ? void 0 : function() {
          return P(B());
        };
        return [A, T];
      }, [l, d, p, v]), S = N[0], E = N[1], y = o(f, S, E);
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
const Gs = (e) => Xn = e, Us = () => Xn, Jr = Symbol.for("react-redux-context"), Qr = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function Ws() {
  var e;
  if (!w.createContext)
    return {};
  const t = (e = Qr[Jr]) != null ? e : Qr[Jr] = /* @__PURE__ */ new Map();
  let r = t.get(w.createContext);
  return r || (r = w.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(w.createContext, r)), r;
}
const Jn = /* @__PURE__ */ Ws(), ks = () => {
  throw new Error("uSES not initialized!");
};
var Xt = { exports: {} }, V = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zr;
function Hs() {
  if (Zr)
    return V;
  Zr = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, N = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
  function E(h) {
    if (typeof h == "object" && h !== null) {
      var D = h.$$typeof;
      switch (D) {
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
                  return D;
              }
          }
        case r:
          return D;
      }
    }
  }
  function y(h) {
    return E(h) === u;
  }
  return V.AsyncMode = c, V.ConcurrentMode = u, V.ContextConsumer = a, V.ContextProvider = i, V.Element = t, V.ForwardRef = f, V.Fragment = n, V.Lazy = v, V.Memo = p, V.Portal = r, V.Profiler = s, V.StrictMode = o, V.Suspense = l, V.isAsyncMode = function(h) {
    return y(h) || E(h) === c;
  }, V.isConcurrentMode = y, V.isContextConsumer = function(h) {
    return E(h) === a;
  }, V.isContextProvider = function(h) {
    return E(h) === i;
  }, V.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === t;
  }, V.isForwardRef = function(h) {
    return E(h) === f;
  }, V.isFragment = function(h) {
    return E(h) === n;
  }, V.isLazy = function(h) {
    return E(h) === v;
  }, V.isMemo = function(h) {
    return E(h) === p;
  }, V.isPortal = function(h) {
    return E(h) === r;
  }, V.isProfiler = function(h) {
    return E(h) === s;
  }, V.isStrictMode = function(h) {
    return E(h) === o;
  }, V.isSuspense = function(h) {
    return E(h) === l;
  }, V.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === n || h === u || h === s || h === o || h === l || h === d || typeof h == "object" && h !== null && (h.$$typeof === v || h.$$typeof === p || h.$$typeof === i || h.$$typeof === a || h.$$typeof === f || h.$$typeof === g || h.$$typeof === N || h.$$typeof === S || h.$$typeof === b);
  }, V.typeOf = E, V;
}
var M = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var en;
function js() {
  return en || (en = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, N = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
    function E(C) {
      return typeof C == "string" || typeof C == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      C === n || C === u || C === s || C === o || C === l || C === d || typeof C == "object" && C !== null && (C.$$typeof === v || C.$$typeof === p || C.$$typeof === i || C.$$typeof === a || C.$$typeof === f || C.$$typeof === g || C.$$typeof === N || C.$$typeof === S || C.$$typeof === b);
    }
    function y(C) {
      if (typeof C == "object" && C !== null) {
        var fe = C.$$typeof;
        switch (fe) {
          case t:
            var _ = C.type;
            switch (_) {
              case c:
              case u:
              case n:
              case s:
              case o:
              case l:
                return _;
              default:
                var Re = _ && _.$$typeof;
                switch (Re) {
                  case a:
                  case f:
                  case v:
                  case p:
                  case i:
                    return Re;
                  default:
                    return fe;
                }
            }
          case r:
            return fe;
        }
      }
    }
    var h = c, D = u, O = a, P = i, B = t, A = f, T = n, R = v, $ = p, H = r, W = s, j = o, re = l, Q = !1;
    function ne(C) {
      return Q || (Q = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), ge(C) || y(C) === c;
    }
    function ge(C) {
      return y(C) === u;
    }
    function k(C) {
      return y(C) === a;
    }
    function ae(C) {
      return y(C) === i;
    }
    function de(C) {
      return typeof C == "object" && C !== null && C.$$typeof === t;
    }
    function he(C) {
      return y(C) === f;
    }
    function K(C) {
      return y(C) === n;
    }
    function De(C) {
      return y(C) === v;
    }
    function Pe(C) {
      return y(C) === p;
    }
    function Ge(C) {
      return y(C) === r;
    }
    function be(C) {
      return y(C) === s;
    }
    function Se(C) {
      return y(C) === o;
    }
    function ct(C) {
      return y(C) === l;
    }
    M.AsyncMode = h, M.ConcurrentMode = D, M.ContextConsumer = O, M.ContextProvider = P, M.Element = B, M.ForwardRef = A, M.Fragment = T, M.Lazy = R, M.Memo = $, M.Portal = H, M.Profiler = W, M.StrictMode = j, M.Suspense = re, M.isAsyncMode = ne, M.isConcurrentMode = ge, M.isContextConsumer = k, M.isContextProvider = ae, M.isElement = de, M.isForwardRef = he, M.isFragment = K, M.isLazy = De, M.isMemo = Pe, M.isPortal = Ge, M.isProfiler = be, M.isStrictMode = Se, M.isSuspense = ct, M.isValidElementType = E, M.typeOf = y;
  }()), M;
}
process.env.NODE_ENV === "production" ? Xt.exports = Hs() : Xt.exports = js();
var qs = Xt.exports, ur = qs, zs = {
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
}, dr = {};
dr[ur.ForwardRef] = Ks;
dr[ur.Memo] = Qn;
function tn(e) {
  return ur.isMemo(e) ? Qn : dr[e.$$typeof] || zs;
}
var Xs = Object.defineProperty, Js = Object.getOwnPropertyNames, rn = Object.getOwnPropertySymbols, Qs = Object.getOwnPropertyDescriptor, Zs = Object.getPrototypeOf, nn = Object.prototype;
function Zn(e, t, r) {
  if (typeof t != "string") {
    if (nn) {
      var n = Zs(t);
      n && n !== nn && Zn(e, n, r);
    }
    var o = Js(t);
    rn && (o = o.concat(rn(t)));
    for (var s = tn(e), i = tn(t), a = 0; a < o.length; ++a) {
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
const on = /* @__PURE__ */ fs(ei);
var Jt = { exports: {} }, F = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sn;
function ti() {
  if (sn)
    return F;
  sn = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), v;
  v = Symbol.for("react.module.reference");
  function b(g) {
    if (typeof g == "object" && g !== null) {
      var N = g.$$typeof;
      switch (N) {
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
                  return N;
              }
          }
        case t:
          return N;
      }
    }
  }
  return F.ContextConsumer = i, F.ContextProvider = s, F.Element = e, F.ForwardRef = c, F.Fragment = r, F.Lazy = d, F.Memo = l, F.Portal = t, F.Profiler = o, F.StrictMode = n, F.Suspense = u, F.SuspenseList = f, F.isAsyncMode = function() {
    return !1;
  }, F.isConcurrentMode = function() {
    return !1;
  }, F.isContextConsumer = function(g) {
    return b(g) === i;
  }, F.isContextProvider = function(g) {
    return b(g) === s;
  }, F.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === e;
  }, F.isForwardRef = function(g) {
    return b(g) === c;
  }, F.isFragment = function(g) {
    return b(g) === r;
  }, F.isLazy = function(g) {
    return b(g) === d;
  }, F.isMemo = function(g) {
    return b(g) === l;
  }, F.isPortal = function(g) {
    return b(g) === t;
  }, F.isProfiler = function(g) {
    return b(g) === o;
  }, F.isStrictMode = function(g) {
    return b(g) === n;
  }, F.isSuspense = function(g) {
    return b(g) === u;
  }, F.isSuspenseList = function(g) {
    return b(g) === f;
  }, F.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === r || g === o || g === n || g === u || g === f || g === p || typeof g == "object" && g !== null && (g.$$typeof === d || g.$$typeof === l || g.$$typeof === s || g.$$typeof === i || g.$$typeof === c || g.$$typeof === v || g.getModuleId !== void 0);
  }, F.typeOf = b, F;
}
var G = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var an;
function ri() {
  return an || (an = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), v = !1, b = !1, g = !1, N = !1, S = !1, E;
    E = Symbol.for("react.module.reference");
    function y(_) {
      return !!(typeof _ == "string" || typeof _ == "function" || _ === r || _ === o || S || _ === n || _ === u || _ === f || N || _ === p || v || b || g || typeof _ == "object" && _ !== null && (_.$$typeof === d || _.$$typeof === l || _.$$typeof === s || _.$$typeof === i || _.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      _.$$typeof === E || _.getModuleId !== void 0));
    }
    function h(_) {
      if (typeof _ == "object" && _ !== null) {
        var Re = _.$$typeof;
        switch (Re) {
          case e:
            var lt = _.type;
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
                    return Re;
                }
            }
          case t:
            return Re;
        }
      }
    }
    var D = i, O = s, P = e, B = c, A = r, T = d, R = l, $ = t, H = o, W = n, j = u, re = f, Q = !1, ne = !1;
    function ge(_) {
      return Q || (Q = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function k(_) {
      return ne || (ne = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ae(_) {
      return h(_) === i;
    }
    function de(_) {
      return h(_) === s;
    }
    function he(_) {
      return typeof _ == "object" && _ !== null && _.$$typeof === e;
    }
    function K(_) {
      return h(_) === c;
    }
    function De(_) {
      return h(_) === r;
    }
    function Pe(_) {
      return h(_) === d;
    }
    function Ge(_) {
      return h(_) === l;
    }
    function be(_) {
      return h(_) === t;
    }
    function Se(_) {
      return h(_) === o;
    }
    function ct(_) {
      return h(_) === n;
    }
    function C(_) {
      return h(_) === u;
    }
    function fe(_) {
      return h(_) === f;
    }
    G.ContextConsumer = D, G.ContextProvider = O, G.Element = P, G.ForwardRef = B, G.Fragment = A, G.Lazy = T, G.Memo = R, G.Portal = $, G.Profiler = H, G.StrictMode = W, G.Suspense = j, G.SuspenseList = re, G.isAsyncMode = ge, G.isConcurrentMode = k, G.isContextConsumer = ae, G.isContextProvider = de, G.isElement = he, G.isForwardRef = K, G.isFragment = De, G.isLazy = Pe, G.isMemo = Ge, G.isPortal = be, G.isProfiler = Se, G.isStrictMode = ct, G.isSuspense = C, G.isSuspenseList = fe, G.isValidElementType = y, G.typeOf = h;
  }()), G;
}
process.env.NODE_ENV === "production" ? Jt.exports = ti() : Jt.exports = ri();
var cn = Jt.exports;
function fr(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function Rt(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || fr(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
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
  function p(S, E) {
    return c = S, u = E, f = e(c, u), l = t(n, u), d = r(f, l, u), a = !0, d;
  }
  function v() {
    return f = e(c, u), t.dependsOnOwnProps && (l = t(n, u)), d = r(f, l, u), d;
  }
  function b() {
    return e.dependsOnOwnProps && (f = e(c, u)), t.dependsOnOwnProps && (l = t(n, u)), d = r(f, l, u), d;
  }
  function g() {
    const S = e(c, u), E = !i(S, f);
    return f = S, E && (d = r(f, l, u)), d;
  }
  function N(S, E) {
    const y = !s(E, u), h = !o(S, c, E, u);
    return c = S, u = E, y && h ? v() : y ? b() : h ? g() : d;
  }
  return function(E, y) {
    return a ? N(E, y) : p(E, y);
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
  ci(e) || fr(`${r}() in ${t} must return a plain object. Instead received ${e}.`);
}
function Qt(e) {
  return function(r) {
    const n = e(r);
    function o() {
      return n;
    }
    return o.dependsOnOwnProps = !1, o;
  };
}
function ln(e) {
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
      s.mapToProps = e, s.dependsOnOwnProps = ln(e);
      let u = s(a, c);
      return typeof u == "function" && (s.mapToProps = u, s.dependsOnOwnProps = ln(u), u = s(a, c)), process.env.NODE_ENV !== "production" && eo(u, o, t), u;
    }, s;
  };
}
function pr(e, t) {
  return (r, n) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${n.wrappedComponentName}.`);
  };
}
function li(e) {
  return e && typeof e == "object" ? Qt((t) => (
    // @ts-ignore
    ai(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    to(e, "mapDispatchToProps")
  ) : pr(e, "mapDispatchToProps") : Qt((t) => ({
    dispatch: t
  }));
}
function ui(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    to(e, "mapStateToProps")
  ) : pr(e, "mapStateToProps") : Qt(() => ({}));
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
  return e ? typeof e == "function" ? fi(e) : pr(e, "mergeProps") : () => di;
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
const un = {
  notify() {
  },
  get: () => []
};
function ro(e, t) {
  let r, n = un, o = 0, s = !1;
  function i(b) {
    f();
    const g = n.subscribe(b);
    let N = !1;
    return () => {
      N || (N = !0, g(), l());
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
    o--, r && o === 0 && (r(), r = void 0, n.clear(), n = un);
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
const gi = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", mt = gi ? w.useLayoutEffect : w.useEffect;
function dn(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Tt(e, t) {
  if (dn(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length)
    return !1;
  for (let o = 0; o < r.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, r[o]) || !dn(e[r[o]], t[r[o]]))
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
    const b = t.getState();
    let g, N;
    try {
      g = n(b, o.current);
    } catch (S) {
      N = S, d = S;
    }
    N || (d = null), g === s.current ? i.current || u() : (s.current = g, c.current = g, i.current = !0, f());
  };
  return r.onStateChange = p, r.trySubscribe(), p(), () => {
    if (l = !0, r.tryUnsubscribe(), r.onStateChange = null, d)
      throw d;
  };
}
function Ni(e, t) {
  return e === t;
}
let fn = !1;
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
  process.env.NODE_ENV !== "production" && n !== void 0 && !fn && (fn = !0, fr('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const f = u, l = ui(e), d = li(t), p = pi(r), v = !!e;
  return (g) => {
    if (process.env.NODE_ENV !== "production" && !cn.isValidElementType(g))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${yi(g)}`);
    const N = g.displayName || g.name || "Component", S = `Connect(${N})`, E = {
      shouldHandleStateChanges: v,
      displayName: S,
      wrappedComponentName: N,
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
    function y(O) {
      const [P, B, A] = w.useMemo(() => {
        const {
          reactReduxForwardedRef: C
        } = O, fe = zn(O, hi);
        return [O.context, C, fe];
      }, [O]), T = w.useMemo(() => P && P.Consumer && // @ts-ignore
      cn.isContextConsumer(/* @__PURE__ */ w.createElement(P.Consumer, null)) ? P : f, [P, f]), R = w.useContext(T), $ = !!O.store && !!O.store.getState && !!O.store.dispatch, H = !!R && !!R.store;
      if (process.env.NODE_ENV !== "production" && !$ && !H)
        throw new Error(`Could not find "store" in the context of "${S}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${S} in connect options.`);
      const W = $ ? O.store : R.store, j = H ? R.getServerState : W.getState, re = w.useMemo(() => ii(W.dispatch, E), [W]), [Q, ne] = w.useMemo(() => {
        if (!v)
          return vi;
        const C = ro(W, $ ? void 0 : R.subscription), fe = C.notifyNestedSubs.bind(C);
        return [C, fe];
      }, [W, $, R]), ge = w.useMemo(() => $ ? R : Te({}, R, {
        subscription: Q
      }), [$, R, Q]), k = w.useRef(), ae = w.useRef(A), de = w.useRef(), he = w.useRef(!1);
      w.useRef(!1);
      const K = w.useRef(!1), De = w.useRef();
      mt(() => (K.current = !0, () => {
        K.current = !1;
      }), []);
      const Pe = w.useMemo(() => () => de.current && A === ae.current ? de.current : re(W.getState(), A), [W, A]), Ge = w.useMemo(() => (fe) => Q ? Si(
        v,
        W,
        Q,
        // @ts-ignore
        re,
        ae,
        k,
        he,
        K,
        de,
        ne,
        fe
      ) : () => {
      }, [Q]);
      Ei(Di, [ae, k, he, A, de, ne]);
      let be;
      try {
        be = no(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          Ge,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          Pe,
          j ? () => re(j(), A) : Pe
        );
      } catch (C) {
        throw De.current && (C.message += `
The error may be correlated with this previous error:
${De.current.stack}

`), C;
      }
      mt(() => {
        De.current = void 0, de.current = void 0, k.current = be;
      });
      const Se = w.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ w.createElement(g, Te({}, be, {
          ref: B
        }))
      ), [B, g, be]);
      return w.useMemo(() => v ? /* @__PURE__ */ w.createElement(T.Provider, {
        value: ge
      }, Se) : Se, [T, Se, ge]);
    }
    const D = w.memo(y);
    if (D.WrappedComponent = g, D.displayName = y.displayName = S, c) {
      const P = w.forwardRef(function(A, T) {
        return /* @__PURE__ */ w.createElement(D, Te({}, A, {
          reactReduxForwardedRef: T
        }));
      });
      return P.displayName = S, P.WrappedComponent = g, on(P, g);
    }
    return on(D, g);
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
  const i = w.useMemo(() => {
    const u = ro(e);
    return {
      store: e,
      subscription: u,
      getServerState: n ? () => n : void 0,
      stabilityCheck: o,
      noopCheck: s
    };
  }, [e, n, o, s]), a = w.useMemo(() => e.getState(), [e]);
  mt(() => {
    const {
      subscription: u
    } = i;
    return u.onStateChange = u.notifyNestedSubs, u.trySubscribe(), a !== e.getState() && u.notifyNestedSubs(), () => {
      u.tryUnsubscribe(), u.onStateChange = void 0;
    };
  }, [i, a]);
  const c = t || Jn;
  return /* @__PURE__ */ w.createElement(c.Provider, {
    value: i
  }, r);
}
bi(lr.useSyncExternalStore);
Gs(ir.unstable_batchedUpdates);
function xi(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function so(e, t) {
  var r = w.useState(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], n = w.useRef(!0), o = w.useRef(r), s = n.current || !!(t && o.current.inputs && xi(t, o.current.inputs)), i = s ? o.current : {
    inputs: t,
    result: e()
  };
  return w.useEffect(function() {
    n.current = !1, o.current = i;
  }, [i]), i.result;
}
function Oi(e, t) {
  return so(function() {
    return e;
  }, t);
}
var L = so, I = Oi, pe = function(t) {
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
}, mr = function(t, r) {
  return {
    top: t.top - r.top,
    left: t.left - r.left,
    bottom: t.bottom + r.bottom,
    right: t.right + r.right
  };
}, pn = function(t, r) {
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
}, gr = function(t) {
  var r = t.borderBox, n = t.margin, o = n === void 0 ? Bt : n, s = t.border, i = s === void 0 ? Bt : s, a = t.padding, c = a === void 0 ? Bt : a, u = pe(mr(r, o)), f = pe(pn(r, i)), l = pe(pn(f, c));
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
  return isNaN(o) && (process.env.NODE_ENV !== "production" ? Mr(!1, "Could not parse value [raw: " + t + ", without suffix: " + r + "]") : Mr(!1)), o;
}, Ii = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, gt = function(t, r) {
  var n = t.borderBox, o = t.border, s = t.margin, i = t.padding, a = Ci(n, r);
  return gr({
    borderBox: a,
    border: o,
    margin: s,
    padding: i
  });
}, ht = function(t, r) {
  return r === void 0 && (r = Ii()), gt(t, r);
}, io = function(t, r) {
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
  return gr({
    borderBox: t,
    margin: n,
    padding: o,
    border: s
  });
}, ao = function(t) {
  var r = t.getBoundingClientRect(), n = window.getComputedStyle(t);
  return io(r, n);
}, mn = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function _i(e, t) {
  return !!(e === t || mn(e) && mn(t));
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
const ze = Pi, Ri = process.env.NODE_ENV === "production", Ti = /[ \t]{2,}/g, Bi = /^[ \t]*/gm, gn = (e) => e.replace(Ti, " ").replace(Bi, "").trim(), Li = (e) => gn(`
  %c@hello-pangea/dnd

  %c${gn(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), $i = (e) => [Li(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], Vi = "__@hello-pangea/dnd-disable-dev-warnings";
function co(e, t) {
  Ri || typeof window < "u" && window[Vi] || console[e](...$i(t));
}
const U = co.bind(null, "warn"), Zt = co.bind(null, "error");
function ve() {
}
function Mi(e, t) {
  return {
    ...e,
    ...t
  };
}
function le(e, t, r) {
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
const Fi = process.env.NODE_ENV === "production", hn = "Invariant failed";
class Ye extends Error {
}
Ye.prototype.toString = function() {
  return this.message;
};
function m(e, t) {
  if (!e)
    throw Fi ? new Ye(hn) : new Ye(`${hn}: ${t || ""}`);
}
class Gi extends x.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = ve, this.onWindowError = (r) => {
      const n = this.getCallbacks();
      n.isDragging() && (n.tryAbort(), process.env.NODE_ENV !== "production" && U(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const o = r.error;
      o instanceof Ye && (r.preventDefault(), process.env.NODE_ENV !== "production" && Zt(o.message));
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
      process.env.NODE_ENV !== "production" && Zt(t.message), this.setState({});
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
}, bn = (e) => `
  The item has returned to its starting position
  of ${bt(e.index)}
`, Hi = (e) => {
  if (e.reason === "CANCEL")
    return `
      Movement cancelled.
      ${bn(e.source)}
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
    ${bn(e.source)}
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
}, J = (e, t) => ({
  x: e.x + t.x,
  y: e.y + t.y
}), oe = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), ye = (e, t) => e.x === t.x && e.y === t.y, Me = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), _e = (e, t, r = 0) => e === "x" ? {
  x: t,
  y: r
} : {
  x: r,
  y: t
}, Ke = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2), vn = (e, t) => Math.min(...t.map((r) => Ke(e, r))), fo = (e) => (t) => ({
  x: e(t.x),
  y: e(t.y)
});
var qi = (e, t) => {
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
}), yn = (e) => [{
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
} : e, Xi = (e, t) => t && t.shouldClipSubject ? qi(t.pageMarginBox, e) : pe(e);
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
}, hr = (e, t) => {
  e.frame || (process.env.NODE_ENV, m(!1));
  const r = e.frame, n = oe(t, r.scroll.initial), o = Me(n), s = {
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
var Ae = z((e, t) => Ji(t).filter((n) => e === n.descriptor.droppableId).sort((n, o) => n.descriptor.index - o.descriptor.index));
function br(e) {
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
  if (!r.isCombineEnabled || !br(o))
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
var ea = Zi, ue = (e, t) => (r) => e <= r && r <= t, ho = (e) => {
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
}, ta = (e) => {
  const t = ue(e.top, e.bottom), r = ue(e.left, e.right);
  return (n) => t(n.top) && t(n.bottom) && r(n.left) && r(n.right);
};
const vr = {
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
  const r = ue(t.top, t.bottom), n = ue(t.left, t.right);
  return (o) => e === vr ? r(o.top) && r(o.bottom) : n(o.left) && n(o.right);
};
const na = (e, t) => {
  const r = t.frame ? t.frame.scroll.diff.displacement : Y;
  return rt(e, r);
}, oa = (e, t, r) => t.subject.active ? r(t.subject.active)(e) : !1, sa = (e, t, r) => r(t)(e), yr = ({
  target: e,
  destination: t,
  viewport: r,
  withDroppableDisplacement: n,
  isVisibleThroughFrameFn: o
}) => {
  const s = n ? na(e, t) : e;
  return oa(s, t, o) && sa(s, r, o);
}, ia = (e) => yr({
  ...e,
  isVisibleThroughFrameFn: ho
}), vo = (e) => yr({
  ...e,
  isVisibleThroughFrameFn: ta
}), aa = (e) => yr({
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
  return pe(mr(r, n));
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
function En({
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
    return En({
      insideDestination: t,
      inHomeList: c,
      displacedBy: o,
      destination: r
    });
  const u = t.find((v) => v.descriptor.index === i);
  if (!u)
    return En({
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
function Ee(e, t) {
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
  return Ee(s, o) ? e ? a : a - 1 : e ? a + 1 : a;
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
  return Ee(r, t) ? o ? Y : Me(n.point) : o ? n.point : Y;
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
  return J(s, i);
};
const yo = (e, t) => t.margin[e.start] + t.borderBox[e.size] / 2, ha = (e, t) => t.margin[e.end] + t.borderBox[e.size] / 2, Er = (e, t, r) => t[e.crossAxisStart] + r.margin[e.crossAxisStart] + r.borderBox[e.crossAxisSize] / 2, Dn = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: r
}) => _e(e.line, t.marginBox[e.end] + yo(e, r), Er(e, t.marginBox, r)), Sn = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: r
}) => _e(e.line, t.marginBox[e.start] - ha(e, r), Er(e, t.marginBox, r)), ba = ({
  axis: e,
  moveInto: t,
  isMoving: r
}) => _e(e.line, t.contentBox[e.start] + yo(e, r), Er(e, t.contentBox, r));
var va = ({
  impact: e,
  draggable: t,
  draggables: r,
  droppable: n,
  afterCritical: o
}) => {
  const s = Ae(n.descriptor.id, r), i = t.page, a = n.axis;
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
    if (Ee(f, o))
      return Sn({
        axis: a,
        moveRelativeTo: d.page,
        isMoving: i
      });
    const p = gt(d.page, u.point);
    return Sn({
      axis: a,
      moveRelativeTo: p,
      isMoving: i
    });
  }
  const l = s[s.length - 1];
  if (l.descriptor.id === t.descriptor.id)
    return i.borderBox.center;
  if (Ee(l.descriptor.id, o)) {
    const d = gt(l.page, Me(o.displacedBy.point));
    return Dn({
      axis: a,
      moveRelativeTo: d,
      isMoving: i
    });
  }
  return Dn({
    axis: a,
    moveRelativeTo: l.page,
    isMoving: i
  });
}, er = (e, t) => {
  const r = e.frame;
  return r ? J(t, r.scroll.diff.displacement) : t;
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
  return r ? er(r, t) : t;
}, Eo = (e, t) => {
  const r = oe(t, e.scroll.initial), n = Me(r);
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
function Nn(e, t) {
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
  const s = Eo(t, J(t.scroll.current, o)), i = r.frame ? hr(r, J(r.frame.scroll.current, o)) : r, a = e.displaced, c = Je({
    afterDragging: Nn(a.all, n),
    destination: r,
    displacedBy: e.displacedBy,
    viewport: s.frame,
    last: a,
    forceShouldAnimate: !1
  }), u = Je({
    afterDragging: Nn(a.all, n),
    destination: i,
    displacedBy: e.displacedBy,
    viewport: t.frame,
    last: a,
    forceShouldAnimate: !1
  }), f = {}, l = {}, d = [a, c, u];
  return a.all.forEach((v) => {
    const b = Ea(v, d);
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
}, Sa = (e, t) => J(e.scroll.diff.displacement, t), Dr = ({
  pageBorderBoxCenter: e,
  draggable: t,
  viewport: r
}) => {
  const n = Sa(r, e), o = oe(n, t.page.borderBox.center);
  return J(t.client.borderBox.center, o);
}, Do = ({
  draggable: e,
  destination: t,
  newPageBorderBoxCenter: r,
  viewport: n,
  withDroppableDisplacement: o,
  onlyOnMainAxis: s = !1
}) => {
  const i = oe(r, e.page.borderBox.center), c = {
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
  const u = Ae(r.descriptor.id, n), f = Fe(t, r), l = Qi({
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
      clientSelection: Dr({
        pageBorderBoxCenter: d,
        draggable: t,
        viewport: s
      }),
      impact: l,
      scrollJumpRequest: null
    };
  const v = oe(d, i), b = Da({
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
  const i = r.axis, a = ue(s[i.start], s[i.end]), c = Et(n).filter((f) => f !== r).filter((f) => f.isEnabled).filter((f) => !!f.subject.active).filter((f) => ho(o.frame)(Z(f))).filter((f) => {
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
    const d = vn(t, yn(Z(f))), p = vn(t, yn(Z(l)));
    return d !== p ? d - p : Z(f)[i.start] - Z(l)[i.start];
  })[0];
};
const wn = (e, t) => {
  const r = e.page.borderBox.center;
  return Ee(e.descriptor.id, t) ? oe(r, t.displacedBy.point) : r;
}, xa = (e, t) => {
  const r = e.page.borderBox;
  return Ee(e.descriptor.id, t) ? rt(r, Me(t.displacedBy.point)) : r;
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
  const c = Ke(e, er(r, wn(i, o))), u = Ke(e, er(r, wn(a, o)));
  return c < u ? -1 : u < c ? 1 : i.descriptor.index - a.descriptor.index;
})[0] || null, nt = z(function(t, r) {
  const n = r[t.line];
  return {
    value: n,
    point: _e(t.line, n)
  };
});
const Ca = (e, t, r) => {
  const n = e.axis;
  if (e.descriptor.mode === "virtual")
    return _e(n.line, t[n.line]);
  const o = e.subject.page.contentBox[n.size], c = Ae(e.descriptor.id, r).reduce((u, f) => u + f.client.marginBox[n.size], 0) + t[n.line] - o;
  return c <= 0 ? null : _e(n.line, c);
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
  const a = s ? J(n.scroll.max, s) : n.scroll.max, c = So(n, a), u = Be({
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
  const u = Ae(c.descriptor.id, o), f = Oa({
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
    clientSelection: Dr({
      pageBorderBoxCenter: d,
      draggable: r,
      viewport: i
    }),
    impact: l,
    scrollJumpRequest: null
  };
}, se = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const Pa = (e, t) => {
  const r = se(e);
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
function Oe(e) {
  return e.phase === "DRAGGING" || e.phase === "COLLECTING";
}
function wo(e) {
  const t = ue(e.top, e.bottom), r = ue(e.left, e.right);
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
    const i = s.axis, a = _e(s.axis.line, e.center[i.line], s.page.borderBox.center[i.crossAxisLine]);
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
    const i = o.axis, a = s.center[i.crossAxisLine], c = e[i.crossAxisStart], u = e[i.crossAxisEnd], f = ue(s[i.crossAxisStart], s[i.crossAxisEnd]), l = f(c), d = f(u);
    return !l && !d ? !0 : l ? c < a : u > a;
  });
  return n.length ? n.length === 1 ? n[0].descriptor.id : Ba({
    pageBorderBox: e,
    draggable: t,
    candidates: n
  }) : null;
}
const xo = (e, t) => pe(rt(e, t));
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
  const a = r.axis, c = nt(r.axis, t.displaceBy), u = c.value, f = e[a.start], l = e[a.end], p = St(t, n).find((b) => {
    const g = b.descriptor.id, N = b.page.borderBox.center[a.line], S = Ee(g, i), E = Oo({
      displaced: o,
      id: g
    });
    return S ? E ? l <= N : f < N - u : E ? l <= N + u : f < N;
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
    const b = v.descriptor.id, g = v.page.borderBox, S = g[i.size] / Fa, E = Ee(b, s), y = Oo({
      displaced: r.displaced,
      id: b
    });
    return E ? y ? f > g[i.start] + S && f < g[i.end] - S : u > g[i.start] - c + S && u < g[i.end] - c - S : y ? f > g[i.start] + c + S && f < g[i.end] + c - S : u > g[i.start] + S && u < g[i.end] - S;
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
  const u = n[c], f = Ae(u.descriptor.id, r), l = $a(u, a);
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
}, Sr = (e, t) => ({
  ...e,
  [t.descriptor.id]: t
});
const Ua = ({
  previousImpact: e,
  impact: t,
  droppables: r
}) => {
  const n = se(e), o = se(t);
  if (!n || n === o)
    return r;
  const s = r[n];
  if (!s.subject.withPlaceholder)
    return r;
  const i = Ia(s);
  return Sr(r, i);
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
  }), i = se(o);
  if (!i)
    return s;
  const a = r[i];
  if (Fe(e, a) || a.subject.withPlaceholder)
    return s;
  const c = No(a, e, t);
  return Sr(s, c);
}, He = ({
  state: e,
  clientSelection: t,
  dimensions: r,
  viewport: n,
  impact: o,
  scrollJumpRequest: s
}) => {
  const i = n || e.viewport, a = r || e.dimensions, c = t || e.current.client.selection, u = oe(c, e.initial.client.selection), f = {
    offset: u,
    selection: c,
    borderBoxCenter: J(e.initial.client.borderBoxCenter, u)
  }, l = {
    selection: J(f.selection, i.scroll.current),
    borderBoxCenter: J(f.borderBoxCenter, i.scroll.current),
    offset: J(f.offset, i.scroll.diff.value)
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
  }), b = Wa({
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
  return Dr({
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
  } = s, c = i[e.critical.draggable.id], u = se(n);
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
  const o = nt(t.axis, e.displaceBy), s = Ae(t.descriptor.id, r), i = s.indexOf(e);
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
  droppables: Sr(e.droppables, t)
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
    const s = o.descriptor.droppableId, i = t[s], c = za(i).scroll.diff.value, u = J(n, c);
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
  const r = t.modified.map((N) => {
    const S = e.dimensions.droppables[N.droppableId];
    return hr(S, N.scroll);
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
  t.removals.forEach((N) => {
    delete s[N];
  });
  const i = {
    droppables: n,
    draggables: s
  }, a = se(e.impact), c = a ? i.droppables[a] : null, u = i.draggables[e.critical.draggable.id], f = i.droppables[e.critical.droppable.id], {
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
const tr = (e) => e.movementMode === "SNAP", Lt = (e, t, r) => {
  const n = ja(e.dimensions, t);
  return !tr(e) || r ? He({
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
const xn = {
  phase: "IDLE",
  completed: null,
  shouldFlush: !1
};
var Xa = (e = xn, t) => {
  if (t.type === "FLUSH")
    return {
      ...xn,
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
        selection: J(u.selection, o.scroll.initial),
        borderBoxCenter: J(u.selection, o.scroll.initial),
        offset: J(u.selection, o.scroll.diff.value)
      }
    }, l = Et(s.droppables).every((b) => !b.isFixedOnPage), {
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
    Oe(e) || (process.env.NODE_ENV !== "production" ? m(!1, `${t.type} not permitted in phase ${e.phase}`) : m(!1));
    const {
      client: r
    } = t.payload;
    return ye(r, e.current.client.selection) ? e : He({
      state: e,
      clientSelection: r,
      impact: tr(e) ? e.impact : null
    });
  }
  if (t.type === "UPDATE_DROPPABLE_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "COLLECTING")
      return $t(e);
    Oe(e) || (process.env.NODE_ENV !== "production" ? m(!1, `${t.type} not permitted in phase ${e.phase}`) : m(!1));
    const {
      id: r,
      newScroll: n
    } = t.payload, o = e.dimensions.droppables[r];
    if (!o)
      return e;
    const s = hr(o, n);
    return Lt(e, s, !1);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    Oe(e) || (process.env.NODE_ENV !== "production" ? m(!1, `Attempting to move in an unsupported phase ${e.phase}`) : m(!1));
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
    Oe(e) || (process.env.NODE_ENV !== "production" ? m(!1, `Attempting to move in an unsupported phase ${e.phase}`) : m(!1));
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
    Oe(e) || (process.env.NODE_ENV !== "production" ? m(!1, `Cannot move by window in phase ${e.phase}`) : m(!1)), e.isWindowScrollAllowed || (process.env.NODE_ENV !== "production" ? m(!1, "Window scrolling is currently not supported for fixed lists") : m(!1));
    const r = t.payload.newScroll;
    if (ye(e.viewport.scroll.current, r))
      return $t(e);
    const n = Eo(e.viewport, r);
    return tr(e) ? Ao({
      state: e,
      viewport: n
    }) : He({
      state: e,
      viewport: n
    });
  }
  if (t.type === "UPDATE_VIEWPORT_MAX_SCROLL") {
    if (!Oe(e))
      return e;
    const r = t.payload.maxScroll;
    if (ye(r, e.viewport.scroll.max))
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
}), Nr = () => ({
  type: "FLUSH",
  payload: null
}), dc = (e) => ({
  type: "DROP_ANIMATE",
  payload: e
}), wr = (e) => ({
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
    const r = Ae(e.droppable.id, t.draggables);
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
  c.phase === "DROP_ANIMATING" && r(wr({
    completed: c.completed
  })), t().phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? m(!1, "Unexpected phase to start a drag") : m(!1)), r(Nr()), r(Ja({
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
const xr = {
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
}, we = `${Lo.outOfTheWay}s ${xr.outOfTheWay}`, je = {
  fluid: `opacity ${we}`,
  snap: `transform ${we}, opacity ${we}`,
  drop: (e) => {
    const t = `${e}s ${xr.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${we}`,
  placeholder: `height ${we}, width ${we}, margin ${we}`
}, On = (e) => ye(e, Y) ? void 0 : `translate(${e.x}px, ${e.y}px)`, rr = {
  moveTo: On,
  drop: (e, t) => {
    const r = On(e);
    if (r)
      return t ? `${r} scale(${Qe.scale.drop})` : r;
  }
}, {
  minDropTime: nr,
  maxDropTime: $o
} = Lo, bc = $o - nr, Cn = 1500, vc = 0.6;
var yc = ({
  current: e,
  destination: t,
  reason: r
}) => {
  const n = Ke(e, t);
  if (n <= 0)
    return nr;
  if (n >= Cn)
    return $o;
  const o = n / Cn, s = nr + bc * o, i = r === "CANCEL" ? s * vc : s;
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
  } = r, a = se(e), c = a ? i[a] : null, u = i[t.descriptor.droppableId], f = _o({
    impact: e,
    draggable: t,
    draggables: s,
    afterCritical: o,
    droppable: c || u,
    viewport: n
  });
  return oe(f, t.client.borderBox.center);
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
  }), d = l ? br(f) : null, p = l ? Dt(f) : null, v = {
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
  }, g = Ec({
    impact: f,
    draggable: u,
    dimensions: c,
    viewport: o.viewport,
    afterCritical: o.afterCritical
  }), N = {
    critical: o.critical,
    afterCritical: o.afterCritical,
    result: b,
    impact: f
  };
  if (!(!ye(o.current.client.offset, g) || !!b.combine)) {
    t(wr({
      completed: N
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
    completed: N
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
  let o = ve;
  function s() {
    return o !== ve;
  }
  function i() {
    s() && (process.env.NODE_ENV !== "production" ? m(!1, "Cannot start scroll listener when already active") : m(!1)), o = le(window, [n]);
  }
  function a() {
    s() || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot stop scroll listener when not active") : m(!1)), r.cancel(), o(), o = ve;
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
    const p = br(d), v = Dt(d);
    n || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot fire onDragMove when onDragStart has not been called") : m(!1));
    const b = !Tc(l, n.lastCritical);
    b && (n.lastCritical = l);
    const g = !Pc(n.lastLocation, p);
    g && (n.lastLocation = p);
    const N = !Rc(n.lastCombine, v);
    if (N && (n.lastCombine = v), !b && !g && !N)
      return;
    const S = {
      ...ut(l, n.mode),
      combine: v,
      destination: p
    };
    r.add(() => {
      Ue("onDragUpdate", () => Vt(e().onDragUpdate, S, t, pt.onDragUpdate));
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
  n.phase !== "DROP_ANIMATING" && (process.env.NODE_ENV !== "production" ? m(!1, "Cannot finish a drop animating when no drop is occurring") : m(!1)), e.dispatch(wr({
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
      r = null, t = le(window, [i]);
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
  const o = oe({
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
function In(e, t, r) {
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
    d.type === "ADDITION" && In(e, p, d.value) && n.add(d.value), d.type === "REMOVAL" && In(e, p, d.value) && n.remove(d.value);
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
      }, Xc({
        critical: b,
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
}, Or = 1, nl = (e, t, r = () => Ze) => {
  const n = r();
  if (e > t.startScrollingFrom)
    return 0;
  if (e <= t.maxScrollValueAt)
    return n.maxPixelScroll;
  if (e === t.startScrollingFrom)
    return Or;
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
    return Or;
  const f = Wo({
    startOfRange: o,
    endOfRange: a,
    current: u
  }), l = e * n.ease(f);
  return Math.ceil(l);
}, _n = ({
  distanceToEdge: e,
  thresholds: t,
  dragStartTime: r,
  shouldUseTimeDampening: n,
  getAutoScrollerOptions: o
}) => {
  const s = nl(e, t, o);
  return s === 0 ? 0 : n ? Math.max(ol(s, r, o), Or) : s;
}, An = ({
  container: e,
  distanceToEdges: t,
  dragStartTime: r,
  axis: n,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: s
}) => {
  const i = rl(e, n, s);
  return t[n.end] < t[n.start] ? _n({
    distanceToEdge: t[n.end],
    thresholds: i,
    dragStartTime: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: s
  }) : -1 * _n({
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
  }, a = An({
    container: t,
    distanceToEdges: i,
    dragStartTime: e,
    axis: vr,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: s
  }), c = An({
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
  if (ye(u, Y))
    return null;
  const f = sl({
    container: t,
    subject: r,
    proposedScroll: u
  });
  return f ? ye(f, Y) ? null : f : null;
};
const al = fo((e) => e === 0 ? 0 : e > 0 ? 1 : -1), Cr = (() => {
  const e = (t, r) => t < 0 ? t : t > r ? t - r : 0;
  return ({
    current: t,
    max: r,
    change: n
  }) => {
    const o = J(t, n), s = {
      x: e(o.x, r.x),
      y: e(o.y, r.y)
    };
    return ye(s, Y) ? null : s;
  };
})(), Ho = ({
  max: e,
  current: t,
  change: r
}) => {
  const n = {
    x: Math.max(t.x, e.x),
    y: Math.max(t.y, e.y)
  }, o = al(r), s = Cr({
    max: n,
    current: t,
    change: o
  });
  return !s || o.x !== 0 && s.x === 0 || o.y !== 0 && s.y === 0;
}, Ir = (e, t) => Ho({
  current: e.scroll.current,
  max: e.scroll.max,
  change: t
}), cl = (e, t) => {
  if (!Ir(e, t))
    return null;
  const r = e.scroll.max, n = e.scroll.current;
  return Cr({
    current: n,
    max: r,
    change: t
  });
}, _r = (e, t) => {
  const r = e.frame;
  return r ? Ho({
    current: r.scroll.current,
    max: r.scroll.max,
    change: t
  }) : !1;
}, ll = (e, t) => {
  const r = e.frame;
  return !r || !_r(e, t) ? null : Cr({
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
  return i && Ir(e, i) ? i : null;
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
  return a && _r(e, a) ? a : null;
}, Pn = ({
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
    destination: se(e.impact),
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
    Pn({
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
      Pn({
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
    const u = J(a.current.client.selection, c);
    e({
      client: u
    });
  }, o = (a, c) => {
    if (!_r(a, c))
      return c;
    const u = ll(a, c);
    if (!u)
      return t(a.descriptor.id, c), null;
    const f = oe(c, u);
    return t(a.descriptor.id, f), oe(c, f);
  }, s = (a, c, u) => {
    if (!a || !Ir(c, u))
      return u;
    const f = cl(c, u);
    if (!f)
      return r(u), null;
    const l = oe(u, f);
    return r(l), oe(u, l);
  };
  return (a) => {
    const c = a.scrollJumpRequest;
    if (!c)
      return;
    const u = se(a.impact);
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
})(), or = (() => {
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
})(), Rn = {
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
      selector: t(or.contextId),
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
const yl = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? w.useLayoutEffect : w.useEffect;
var ie = yl;
const Ft = () => {
  const e = document.querySelector("head");
  return e || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot find the head to append a style to") : m(!1)), e;
}, Tn = (e) => {
  const t = document.createElement("style");
  return e && t.setAttribute("nonce", e), t.type = "text/css", t;
};
function El(e, t) {
  const r = L(() => vl(e), [e]), n = w.useRef(null), o = w.useRef(null), s = I(z((l) => {
    const d = o.current;
    d || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot set dynamic style element if it is not set") : m(!1)), d.textContent = l;
  }), []), i = I((l) => {
    const d = n.current;
    d || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot set dynamic style element if it is not set") : m(!1)), d.textContent = l;
  }, []);
  ie(() => {
    !n.current && !o.current || (process.env.NODE_ENV !== "production" ? m(!1, "style elements already mounted") : m(!1));
    const l = Tn(t), d = Tn(t);
    return n.current = l, o.current = d, l.setAttribute(`${Le}-always`, e), d.setAttribute(`${Le}-dynamic`, e), Ft().appendChild(l), Ft().appendChild(d), i(r.always), s(r.resting), () => {
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
  return L(() => ({
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
  const t = w.useRef({}), r = w.useRef(null), n = w.useRef(null), o = w.useRef(!1), s = I(function(d, p) {
    const v = {
      id: d,
      focus: p
    };
    return t.current[d] = v, function() {
      const g = t.current;
      g[d] !== v && delete g[d];
    };
  }, []), i = I(function(d) {
    const p = zo(e, d);
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
    p && p.getAttribute($e.draggableId) === d && (r.current = d);
  }, []);
  return ie(() => (o.current = !0, function() {
    o.current = !1;
    const d = n.current;
    d && cancelAnimationFrame(d);
  }), []), L(() => ({
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
  const e = L(Sl, []);
  return w.useEffect(() => function() {
    x.version.startsWith("16") || x.version.startsWith("17") ? requestAnimationFrame(e.clean) : e.clean();
  }, [e]), e;
}
var Ar = x.createContext(null), et = () => {
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
  const t = L(() => Ol(e), [e]), r = w.useRef(null);
  return w.useEffect(function() {
    const s = document.createElement("div");
    return r.current = s, s.id = t, s.setAttribute("aria-live", "assertive"), s.setAttribute("aria-atomic", "true"), Te(s.style, xl), et().appendChild(s), function() {
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
  return L(() => `${e}${t.separator}${Il++}`, [t.separator, e]);
}
function Al(e, t = Yo) {
  const r = x.useId();
  return L(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var Pr = "useId" in x ? Al : _l;
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
  const r = Pr("hidden-text", {
    separator: "-"
  }), n = L(() => Pl({
    contextId: e,
    uniqueId: r
  }), [r, e]);
  return w.useEffect(function() {
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
const Bl = /(\d+)\.(\d+)\.(\d+)/, Bn = (e) => {
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
  const r = Bn(e), n = Bn(t);
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
function Rr(e) {
  process.env.NODE_ENV !== "production" && e();
}
function at(e, t) {
  Rr(() => {
    w.useEffect(() => {
      try {
        e();
      } catch (r) {
        Zt(`
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
function Tr(e) {
  const t = w.useRef(e);
  return w.useEffect(() => {
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
const Gl = 9, Ul = 13, Br = 27, Ko = 32, Wl = 33, kl = 34, Hl = 35, jl = 36, ql = 37, zl = 38, Yl = 39, Kl = 40, Xl = {
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
const Jo = 0, Ln = 5;
function Ql(e, t) {
  return Math.abs(t.x - e.x) >= Ln || Math.abs(t.y - e.y) >= Ln;
}
const $n = {
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
      if (o.keyCode === Br) {
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
  const t = w.useRef($n), r = w.useRef(ve), n = L(() => ({
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
  }), [e]), o = L(() => ({
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
    }, d = Zl({
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
  ie(function() {
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
      if (o.keyCode === Br) {
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
  const t = w.useRef(tu), r = L(() => ({
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
      t.current = le(window, nu(u, f), {
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
  ie(function() {
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
      r.keyCode === Br && r.preventDefault(), e();
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
  const t = w.useRef(Ut), r = w.useRef(ve), n = I(function() {
    return t.current;
  }, []), o = I(function(p) {
    t.current = p;
  }, []), s = L(() => ({
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
        clientX: N,
        clientY: S
      } = g, E = {
        x: N,
        y: S
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
    }, b = le(window, cu(v), p), g = le(window, au(v), p);
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
    const b = setTimeout(f, su);
    o({
      type: "PENDING",
      point: v,
      actions: p,
      longPressTimerId: b
    }), u();
  }, [u, n, o, f]);
  ie(function() {
    return i(), function() {
      r.current();
      const v = n();
      v.type === "PENDING" && (clearTimeout(v.longPressTimerId), o(Ut));
    };
  }, [n, i, o]), ie(function() {
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
function uu(e) {
  Rr(() => {
    const t = Tr(e);
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
var pu = (e) => pe(e.getBoundingClientRect()).center;
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
  const r = `[${or.contextId}="${e}"]`, o = jo(document, r).find((s) => s.getAttribute(or.id) === t);
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
  const f = e.claim(s || ve);
  let l = "PRE_DRAG";
  function d() {
    return c.options.shouldRespectForcePress;
  }
  function p() {
    return e.isActive(f);
  }
  function v(h, D) {
    dt({
      expected: h,
      phase: l,
      isLockActive: p,
      shouldWarn: !0
    }) && r.dispatch(D());
  }
  const b = v.bind(null, "DRAGGING");
  function g(h) {
    function D() {
      e.release(), l = "COMPLETED";
    }
    l !== "PRE_DRAG" && (D(), process.env.NODE_ENV !== "production" ? m(!1, `Cannot lift in phase ${l}`) : m(!1)), r.dispatch(Qa(h.liftActionArgs)), l = "DRAGGING";
    function O(P, B = {
      shouldBlockNextClick: !1
    }) {
      if (h.cleanup(), B.shouldBlockNextClick) {
        const A = le(window, [{
          eventName: "click",
          fn: Du,
          options: {
            once: !0,
            passive: !1,
            capture: !0
          }
        }]);
        setTimeout(A);
      }
      D(), r.dispatch(To({
        reason: P
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
      drop: (P) => O("DROP", P),
      cancel: (P) => O("CANCEL", P),
      ...h.actions
    };
  }
  function N(h) {
    const D = ze((P) => {
      b(() => Ro({
        client: P
      }));
    });
    return {
      ...g({
        liftActionArgs: {
          id: o,
          clientSelection: h,
          movementMode: "FLUID"
        },
        cleanup: () => D.cancel(),
        actions: {
          move: D
        }
      }),
      move: D
    };
  }
  function S() {
    const h = {
      moveUp: () => b(ac),
      moveRight: () => b(lc),
      moveDown: () => b(cc),
      moveLeft: () => b(uc)
    };
    return g({
      liftActionArgs: {
        id: o,
        clientSelection: pu(u),
        movementMode: "SNAP"
      },
      cleanup: ve,
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
    fluidLift: N,
    snapLift: S,
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
  const s = [...o ? Nu : [], ...n || []], i = w.useState(() => Fl())[0], a = I(function(g, N) {
    tt(g) && !tt(N) && i.tryAbandon();
  }, [i]);
  ie(function() {
    let g = t.getState();
    return t.subscribe(() => {
      const S = t.getState();
      a(g, S), g = S;
    });
  }, [i, t, a]), ie(() => i.tryAbandon, [i.tryAbandon]);
  const c = I((b) => es({
    lockAPI: i,
    registry: r,
    store: t,
    draggableId: b
  }), [i, r, t]), u = I((b, g, N) => Su({
    lockAPI: i,
    registry: r,
    contextId: e,
    store: t,
    draggableId: b,
    forceSensorStop: g || null,
    sourceEvent: N && N.sourceEvent ? N.sourceEvent : null
  }), [e, i, r, t]), f = I((b) => yu(e, b), [e]), l = I((b) => {
    const g = r.draggable.findById(b);
    return g ? g.options : null;
  }, [r.draggable]), d = I(function() {
    i.isClaimed() && (i.tryAbandon(), t.getState().phase !== "IDLE" && t.dispatch(Nr()));
  }, [i, t]), p = I(() => i.isClaimed(), [i]), v = L(() => ({
    canGetLock: c,
    tryGetLock: u,
    findClosestDraggableId: f,
    findOptionsForDraggable: l,
    tryReleaseLock: d,
    isLockClaimed: p
  }), [c, u, f, l, d, p]);
  uu(s);
  for (let b = 0; b < s.length; b++)
    s[b](v);
}
const xu = (e) => ({
  onBeforeCapture: (t) => {
    const r = () => {
      e.onBeforeCapture && e.onBeforeCapture(t);
    };
    x.version.startsWith("16") || x.version.startsWith("17") ? r() : ir.flushSync(r);
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
  } = e, i = w.useRef(null);
  Ml();
  const a = Tr(e), c = I(() => xu(a.current), [a]), u = I(() => Ou(a.current), [a]), f = Cl(t), l = Rl({
    contextId: t,
    text: s
  }), d = El(t, o), p = I((A) => {
    ke(i).dispatch(A);
  }, []), v = L(() => qr({
    publishWhileDragging: ec,
    updateDroppableScroll: rc,
    updateDroppableIsEnabled: nc,
    updateDroppableIsCombineEnabled: oc,
    collectionStarting: tc
  }, p), [p]), b = Nl(), g = L(() => Jc(b, v), [b, v]), N = L(() => ml({
    scrollWindow: Qc,
    scrollDroppable: g.scrollDroppable,
    getAutoScrollerOptions: u,
    ...qr({
      move: Ro
    }, p)
  }), [g.scrollDroppable, p, u]), S = Dl(t), E = L(() => zc({
    announce: f,
    autoScroller: N,
    dimensionMarshal: g,
    focusMarshal: S,
    getResponders: c,
    styleMarshal: d
  }), [f, N, g, S, c, d]);
  process.env.NODE_ENV !== "production" && i.current && i.current !== E && process.env.NODE_ENV !== "production" && U("unexpected store change"), i.current = E;
  const y = I(() => {
    const A = ke(i);
    A.getState().phase !== "IDLE" && A.dispatch(Nr());
  }, []), h = I(() => {
    const A = ke(i).getState();
    return A.phase === "DROP_ANIMATING" ? !0 : A.phase === "IDLE" ? !1 : A.isDragging;
  }, []), D = L(() => ({
    isDragging: h,
    tryAbort: y
  }), [h, y]);
  r(D);
  const O = I((A) => Uo(ke(i).getState(), A), []), P = I(() => Oe(ke(i).getState()), []), B = L(() => ({
    marshal: g,
    focus: S,
    contextId: t,
    canLift: O,
    isMovementAllowed: P,
    dragHandleUsageInstructionsId: l,
    registry: b
  }), [t, g, l, S, O, P, b]);
  return wu({
    contextId: t,
    store: E,
    registry: b,
    customSensors: n || null,
    enableDefaultSensors: e.enableDefaultSensors !== !1
  }), w.useEffect(() => y, [y]), x.createElement(wt.Provider, {
    value: B
  }, x.createElement(wi, {
    context: Ar,
    store: E
  }, e.children));
}
let Iu = 0;
function _u() {
  return L(() => `${Iu++}`, []);
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
const Vn = {
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
  } = e, i = !!o, a = Bu(e), c = !!s, u = c ? rr.drop(n, i) : rr.moveTo(n);
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
    zIndex: c ? Vn.dropAnimating : Vn.dragging,
    pointerEvents: "none"
  };
}
function $u(e) {
  return {
    transform: rr.moveTo(e.offset),
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
  const t = Pr("draggable"), {
    descriptor: r,
    registry: n,
    getDraggableRef: o,
    canDragInteractiveElements: s,
    shouldRespectForcePress: i,
    isEnabled: a
  } = e, c = L(() => ({
    canDragInteractiveElements: s,
    shouldRespectForcePress: i,
    isEnabled: a
  }), [s, a, i]), u = I((p) => {
    const v = o();
    return v || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot get dimension when no ref is set") : m(!1)), Mu(r, v, p);
  }, [r, o]), f = L(() => ({
    uniqueId: t,
    descriptor: r,
    options: c,
    getDimension: u
  }), [r, u, c, t]), l = w.useRef(f), d = w.useRef(!0);
  ie(() => (n.draggable.register(l.current), () => n.draggable.unregister(l.current)), [n.draggable]), ie(() => {
    if (d.current) {
      d.current = !1;
      return;
    }
    const p = l.current;
    l.current = f, n.draggable.update(f, p);
  }, [f, n.draggable]);
}
var Lr = x.createContext(null);
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
  Rr(() => {
    const t = w.useRef(e);
    at(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? m(!1, "Draggable isClone prop value changed during component life") : m(!1));
    }, [e]);
  });
}
function yt(e) {
  const t = w.useContext(e);
  return t || (process.env.NODE_ENV !== "production" ? m(!1, "Could not find required context") : m(!1)), t;
}
function Wu(e) {
  e.preventDefault();
}
const ku = (e) => {
  const t = w.useRef(null), r = I((D = null) => {
    t.current = D;
  }, []), n = I(() => t.current, []), {
    contextId: o,
    dragHandleUsageInstructionsId: s,
    registry: i
  } = yt(wt), {
    type: a,
    droppableId: c
  } = yt(Lr), u = L(() => ({
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
    dropAnimationFinished: N
  } = e;
  if (Gu(e, o, n), Uu(b), !b) {
    const D = L(() => ({
      descriptor: u,
      registry: i,
      getDraggableRef: n,
      canDragInteractiveElements: v,
      shouldRespectForcePress: p,
      isEnabled: d
    }), [u, i, n, v, p, d]);
    Fu(D);
  }
  const S = L(() => d ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": s,
    "data-rfd-drag-handle-draggable-id": l,
    "data-rfd-drag-handle-context-id": o,
    draggable: !1,
    onDragStart: Wu
  } : null, [o, s, l, d]), E = I((D) => {
    g.type === "DRAGGING" && g.dropping && D.propertyName === "transform" && (x.version.startsWith("16") || x.version.startsWith("17") ? N() : ir.flushSync(N));
  }, [N, g]), y = L(() => {
    const D = Vu(g), O = g.type === "DRAGGING" && g.dropping ? E : void 0;
    return {
      innerRef: r,
      draggableProps: {
        "data-rfd-draggable-context-id": o,
        "data-rfd-draggable-id": l,
        style: D,
        onTransitionEnd: O
      },
      dragHandleProps: S
    };
  }, [o, S, l, g, E, r]), h = L(() => ({
    draggableId: u.id,
    type: u.type,
    source: {
      index: u.index,
      droppableId: u.droppableId
    }
  }), [u.droppableId, u.id, u.index, u.type]);
  return x.createElement(x.Fragment, null, f(y, g.snapshot, h));
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
      const i = o.current.client.offset, a = o.dimensions.draggables[s.draggableId], c = se(o.impact), u = qu(o.impact), f = o.forceShouldAnimate;
      return r(e(i.x, i.y), o.movementMode, a, s.isClone, c, u, f);
    }
    if (o.phase === "DROP_ANIMATING") {
      const i = o.completed;
      if (i.result.draggableId !== s.draggableId)
        return null;
      const a = s.isClone, c = o.dimensions.draggables[s.draggableId], u = i.result, f = u.mode, l = ns(u), d = ju(u), v = {
        duration: o.dropDuration,
        curve: xr.drop,
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
      const g = Me(u.displacedBy.point), N = e(g.x, g.y);
      return r(N, p, !0);
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
const Xu = () => {
  const e = zu(), t = Ku();
  return (n, o) => e(n, o) || t(n, o) || Yu;
}, Ju = {
  dropAnimationFinished: Bo
}, Qu = oo(Xu, Ju, null, {
  context: Ar,
  areStatePropsEqual: rs
})(Hu);
var Zu = Qu;
function ss(e) {
  return yt(Lr).isUsingCloneFor === e.draggableId && !e.isClone ? null : x.createElement(Zu, e);
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
const $r = (e) => (t) => e === t, ed = $r("scroll"), td = $r("auto"), rd = $r("visible"), Mn = (e, t) => t(e.overflowX) || t(e.overflowY), nd = (e, t) => t(e.overflowX) && t(e.overflowY), is = (e) => {
  const t = window.getComputedStyle(e), r = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return Mn(r, ed) || Mn(r, td);
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
}, sr = (e) => ({
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
  })(), u = o === "vertical" ? vr : bo, f = Be({
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
  const n = r.paddingBox.top - t.scrollTop, o = r.paddingBox.left - t.scrollLeft, s = n + t.scrollHeight, i = o + t.scrollWidth, c = mr({
    top: n,
    right: i,
    bottom: s,
    left: o
  }, r.border);
  return gr({
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
      scroll: sr(c),
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
var Fn = (e) => e.shouldPublishImmediately ? ud : dd;
const ft = (e) => e && e.env.closestScrollable || null;
function fd(e) {
  const t = w.useRef(null), r = yt(wt), n = Pr("droppable"), {
    registry: o,
    marshal: s
  } = r, i = Tr(e), a = L(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), c = w.useRef(a), u = L(() => z((y, h) => {
    t.current || (process.env.NODE_ENV !== "production" ? m(!1, "Can only update scroll when dragging") : m(!1));
    const D = {
      x: y,
      y: h
    };
    s.updateDroppableScroll(a.id, D);
  }), [a.id, s]), f = I(() => {
    const y = t.current;
    return !y || !y.env.closestScrollable ? Y : sr(y.env.closestScrollable);
  }, []), l = I(() => {
    const y = f();
    u(y.x, y.y);
  }, [f, u]), d = L(() => ze(l), [l]), p = I(() => {
    const y = t.current, h = ft(y);
    if (y && h || (process.env.NODE_ENV !== "production" ? m(!1, "Could not find scroll options while scrolling") : m(!1)), y.scrollOptions.shouldPublishImmediately) {
      l();
      return;
    }
    d();
  }, [d, l]), v = I((y, h) => {
    t.current && (process.env.NODE_ENV !== "production" ? m(!1, "Cannot collect a droppable while a drag is occurring") : m(!1));
    const D = i.current, O = D.getDroppableRef();
    O || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot collect without a droppable ref") : m(!1));
    const P = id(O), B = {
      ref: O,
      descriptor: a,
      env: P,
      scrollOptions: h
    };
    t.current = B;
    const A = ld({
      ref: O,
      descriptor: a,
      env: P,
      windowScroll: y,
      direction: D.direction,
      isDropDisabled: D.isDropDisabled,
      isCombineEnabled: D.isCombineEnabled,
      shouldClipSubject: !D.ignoreContainerClipping
    }), T = P.closestScrollable;
    return T && (T.setAttribute(Rn.contextId, r.contextId), T.addEventListener("scroll", p, Fn(B.scrollOptions)), process.env.NODE_ENV !== "production" && sd(T)), A;
  }, [r.contextId, a, p, i]), b = I(() => {
    const y = t.current, h = ft(y);
    return y && h || (process.env.NODE_ENV !== "production" ? m(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : m(!1)), sr(h);
  }, []), g = I(() => {
    const y = t.current;
    y || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot stop drag when no active drag") : m(!1));
    const h = ft(y);
    t.current = null, h && (d.cancel(), h.removeAttribute(Rn.contextId), h.removeEventListener("scroll", p, Fn(y.scrollOptions)));
  }, [p, d]), N = I((y) => {
    const h = t.current;
    h || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot scroll when there is no drag") : m(!1));
    const D = ft(h);
    D || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot scroll a droppable with no closest scrollable") : m(!1)), D.scrollTop += y.y, D.scrollLeft += y.x;
  }, []), S = L(() => ({
    getDimensionAndWatchScroll: v,
    getScrollWhileDragging: b,
    dragStopped: g,
    scroll: N
  }), [g, v, b, N]), E = L(() => ({
    uniqueId: n,
    descriptor: a,
    callbacks: S
  }), [S, a, n]);
  ie(() => (c.current = E.descriptor, o.droppable.register(E), () => {
    t.current && (process.env.NODE_ENV !== "production" && U("Unsupported: changing the droppableId or type of a Droppable during a drag"), g()), o.droppable.unregister(E);
  }), [S, a, g, E, s, o.droppable]), ie(() => {
    t.current && s.updateDroppableIsEnabled(c.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, s]), ie(() => {
    t.current && s.updateDroppableIsCombineEnabled(c.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, s]);
}
function Wt() {
}
const Gn = {
  width: 0,
  height: 0,
  margin: zi
}, pd = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => e || r === "close" ? Gn : {
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
  const t = w.useRef(null), r = I(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: n,
    onTransitionEnd: o,
    onClose: s,
    contextId: i
  } = e, [a, c] = w.useState(e.animate === "open");
  w.useEffect(() => a ? n !== "open" ? (r(), c(!1), Wt) : t.current ? Wt : (t.current = setTimeout(() => {
    t.current = null, c(!1);
  }), r) : Wt, [n, a, r]);
  const u = I((l) => {
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
  const t = w.useContext(wt);
  t || (process.env.NODE_ENV !== "production" ? m(!1, "Could not find app context") : m(!1));
  const {
    contextId: r,
    isMovementAllowed: n
  } = t, o = w.useRef(null), s = w.useRef(null), {
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
    getContainerForClone: N
  } = e, S = I(() => o.current, []), E = I((R = null) => {
    o.current = R;
  }, []), y = I(() => s.current, []), h = I((R = null) => {
    s.current = R;
  }, []);
  Ed({
    props: e,
    getDroppableRef: S,
    getPlaceholderRef: y
  });
  const D = I(() => {
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
    getDroppableRef: S
  });
  const O = L(() => x.createElement(Dd, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: R,
    data: $,
    animate: H
  }) => x.createElement(hd, {
    placeholder: $,
    onClose: R,
    innerRef: h,
    animate: H,
    contextId: r,
    onTransitionEnd: D
  })), [r, D, e.placeholder, e.shouldAnimatePlaceholder, h]), P = L(() => ({
    innerRef: E,
    placeholder: O,
    droppableProps: {
      "data-rfd-droppable-id": a,
      "data-rfd-droppable-context-id": r
    }
  }), [r, a, O, E]), B = b ? b.dragging.draggableId : null, A = L(() => ({
    droppableId: a,
    type: c,
    isUsingCloneFor: B
  }), [a, B, c]);
  function T() {
    if (!b)
      return null;
    const {
      dragging: R,
      render: $
    } = b, H = x.createElement(ss, {
      draggableId: R.draggableId,
      index: R.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (W, j) => $(W, j, R));
    return ds.createPortal(H, N());
  }
  return x.createElement(Lr.Provider, {
    value: A
  }, i(P, v), T());
};
var Nd = Sd;
function wd() {
  return document.body || (process.env.NODE_ENV !== "production" ? m(!1, "document.body is not ready") : m(!1)), document.body;
}
const Un = {
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
  for (r in Un)
    e[r] === void 0 && (t = {
      ...t,
      [r]: Un[r]
    });
  return t;
}, jt = (e, t) => e === t.droppable.type, Wn = (e, t) => t.draggables[e.draggable.id], xd = () => {
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
    const a = us(i), c = a.droppableId, u = a.type, f = !a.isDropDisabled, l = a.renderClone;
    if (tt(s)) {
      const d = s.critical;
      if (!jt(u, d))
        return t;
      const p = Wn(d, s.dimensions), v = se(s.impact) === c;
      return n(c, f, v, v, p, l);
    }
    if (s.phase === "DROP_ANIMATING") {
      const d = s.completed;
      if (!jt(u, d.critical))
        return t;
      const p = Wn(d.critical, s.dimensions);
      return n(c, f, ns(d.result) === c, se(d.impact) === c, p, l);
    }
    if (s.phase === "IDLE" && s.completed && !s.shouldFlush) {
      const d = s.completed;
      if (!jt(u, d.critical))
        return t;
      const p = se(d.impact) === c, v = !!(d.impact.at && d.impact.at.type === "COMBINE"), b = d.critical.droppable.id === c;
      return p ? v ? e : t : b ? e : t;
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
  context: Ar,
  areStatePropsEqual: rs
})(Nd);
var kd = Cd;
const Id = (e) => /* @__PURE__ */ w.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512", ...e }, /* @__PURE__ */ w.createElement("path", { d: "M0 117.66v346.32c0 11.32 11.43 19.06 21.94 14.86L160 416V32L20.12 87.95A32.006 32.006 0 000 117.66zM192 416l192 64V96L192 32v384zM554.06 33.16L416 96v384l139.88-55.95A31.996 31.996 0 00576 394.34V48.02c0-11.32-11.43-19.06-21.94-14.86z" })), Hd = ({ loadConfig: e, state: t, convertStateToConfig: r }) => {
  const [n, o] = w.useState(!1), [s, i] = w.useState({});
  w.useEffect(() => {
    let c = t;
    t.type !== "dashboard" ? c = r() : c = JSON.parse(JSON.stringify(c));
    const u = JSON.stringify(c, void 0, 2);
    i(u);
  }, [t]);
  const a = {
    chart: ["Charts", "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/bar-chart.html", /* @__PURE__ */ x.createElement(Fr, null)],
    dashboard: ["Dashboard", "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/bar-chart.html", /* @__PURE__ */ x.createElement(Fr, null)],
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
function qt(e) {
  const t = {};
  for (const [r, n] of new URLSearchParams(window.location.search).entries())
    t[r] = n;
  return t;
}
function zt(e) {
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
}, Yt = ["chart", "table"], Pd = (e) => {
  const [t, r] = w.useState(!1), { config: n, setConfig: o, filteredData: s, setFilteredData: i, excludedData: a, filterData: c, getUniqueValues: u } = e, { type: f, data: l } = n;
  return {
    handleApplyButton: (S) => {
      let E = !1;
      const y = qt();
      S.forEach((h) => {
        h.queuedActive && (h.active = h.queuedActive, delete h.queuedActive, h.setByQueryParameter && y[h.setByQueryParameter] !== h.active && (y[h.setByQueryParameter] = h.active, E = !0));
      }), E && zt(y), o({ ...n, filters: S }), f === "map" && i(S, a), Yt.includes(n.type) && i(c(S, a)), r(!1);
    },
    changeFilterActive: (S, E) => {
      const y = n.type === "map" ? [...s] : [...n.filters];
      if (n.filterBehavior === "Apply Button")
        y[S].queuedActive = E, r(!0);
      else {
        const h = y[S];
        h.active = E;
        const D = qt();
        h.setByQueryParameter && D[h.setByQueryParameter] !== h.active && (D[h.setByQueryParameter] = h.active, zt(D));
      }
      o({
        ...n,
        filters: y
      }), n.type === "map" && n.filterBehavior === "Filter Change" && i(y), Yt.includes(n.type) && n.filterBehavior === "Filter Change" && i(c(y, a));
    },
    announceChange: (S) => {
    },
    showApplyButton: t,
    handleReset: (S) => {
      let E = [...n.filters];
      S.preventDefault();
      let y = !1;
      const h = qt();
      E.forEach((D, O) => {
        (!D.values || D.values.length === 0) && (D.values = u(l, D.columnName)), E[O].active = kn(D).values[0], D.setByQueryParameter && h[D.setByQueryParameter] !== D.active && (h[D.setByQueryParameter] = D.active, y = !0);
      }), y && zt(h), o({ ...n, filters: E }), f === "map" ? i(E, a) : i(c(E, a));
    },
    filterConstants: {
      buttonText: "Apply Filters",
      resetText: "Reset All",
      introText: "Make a selection from the filters to change the visualization information.",
      applyText: "Select the apply button to update the visualization information."
    },
    filterStyleOptions: _d,
    filterOrderOptions: Ad,
    handleFilterOrder: (S, E, y, h) => {
      const D = [...h.values], [O] = D.splice(S, 1);
      D.splice(E, 0, O);
      const P = Yt.includes(n.type) ? [...n.filters] : [...s], B = { ...P[y] };
      B.values = D, B.orderedValues = D, B.active = D[0], B.order = "cust", P[y] = B, n.type === "map" && i(P), o({ ...n, filters: P });
    },
    handleSorting: kn
  };
}, Rd = (e) => {
  var B;
  const { config: t, filteredData: r, dimensions: n, getUniqueValues: o } = e, { filters: s, type: i, general: a, theme: c, filterBehavior: u, data: f } = t, [l, d] = w.useState(!1), [p, v] = w.useState(""), b = w.useId(), {
    handleApplyButton: g,
    changeFilterActive: N,
    announceChange: S,
    showApplyButton: E,
    handleReset: y,
    filterConstants: h,
    handleSorting: D
  } = Pd(e);
  w.useEffect(() => {
    n && (n[0] < 768 && (s == null ? void 0 : s.length) > 0 ? d(!0) : d(!1));
  }, [n]), w.useEffect(() => {
    if (p) {
      let A = document.getElementById(p.id);
      A && A.focus();
    }
  }, [N, p]);
  const O = (A) => A.children, P = ["filters-section", i === "map" ? a.headerColor : (t == null ? void 0 : t.visualizationType) === "Spark Line" ? null : c];
  if (O.Section = (A) => (t == null ? void 0 : t.filters) && /* @__PURE__ */ x.createElement("section", { className: P.join(" ") }, /* @__PURE__ */ x.createElement("p", { className: "filters-section__intro-text" }, s != null && s.some((T) => T.active) ? h.introText : "", " ", t.filterBehavior === "Apply Button" && h.applyText), /* @__PURE__ */ x.createElement("div", { className: "filters-section__wrapper" }, A.children)), O.ApplyBehavior = (A) => {
    if (u !== "Apply Button")
      return;
    const T = [a != null && a.headerColor ? a.headerColor : c, "apply"];
    return /* @__PURE__ */ x.createElement("div", { className: "filters-section__buttons" }, /* @__PURE__ */ x.createElement(ms, { onClick: () => g(s), disabled: !E, className: T.join(" ") }, h.buttonText), /* @__PURE__ */ x.createElement("a", { href: "#!", role: "button", onClick: y }, h.resetText));
  }, O.TabBar = (A) => {
    const { filter: T, index: R } = A;
    return /* @__PURE__ */ x.createElement("section", { className: "single-filters__tab-bar" }, T.values.map(($, H) => {
      const W = ["button__tab-bar", T.active === $ ? "button__tab-bar--active" : ""];
      return /* @__PURE__ */ x.createElement(
        "button",
        {
          id: `${$}-${R}-${H}-${b}`,
          className: W.join(" "),
          key: $,
          onClick: (j) => {
            N(R, $), v(j.target);
          },
          onKeyDown: (j) => {
            j.keyCode === 13 && (N(R, $), v(j.target));
          }
        },
        $
      );
    }));
  }, O.Pills = (A) => A.pills, O.Tabs = (A) => A.tabs, O.Dropdown = (A) => {
    const { index: T, label: R, active: $, filters: H } = A;
    return /* @__PURE__ */ x.createElement(
      "select",
      {
        id: `filter-${T}`,
        name: R,
        "aria-label": `Filter by ${R}`,
        className: "filter-select",
        "data-index": "0",
        value: $,
        onChange: (W) => {
          N(T, W.target.value), S(`Filter ${R} value has been changed to ${W.target.value}, please reference the data table to see updated values.`);
        }
      },
      H
    );
  }, O.Style = () => {
    if (s || r) {
      let A = i === "map" ? r : s;
      return delete A.fromHash, A.map((T, R) => {
        if (T.showDropdown === !1)
          return;
        const $ = [], H = [], W = [], { active: j, queuedActive: re, label: Q, filterStyle: ne } = T;
        D(T), T.values.forEach((k, ae) => {
          const de = ["pill", j === k ? "pill--active" : null, c && c], he = ["tab", j === k && "tab--active", c && c];
          H.push(
            /* @__PURE__ */ x.createElement("div", { className: "pill__wrapper", key: `pill-${ae}` }, /* @__PURE__ */ x.createElement(
              "button",
              {
                id: `${k}-${R}-${ae}-${b}`,
                className: de.join(" "),
                onKeyDown: (K) => {
                  K.keyCode === 13 && (N(R, k), v(K.target));
                },
                onClick: (K) => {
                  N(R, k), v(K.target);
                },
                name: Q
              },
              k
            ))
          ), $.push(
            /* @__PURE__ */ x.createElement("option", { key: ae, value: k, "aria-label": k }, T.labels && T.labels[k] ? T.labels[k] : k)
          ), W.push(
            /* @__PURE__ */ x.createElement(
              "button",
              {
                id: `${k}-${R}-${ae}-${b}`,
                className: he.join(" "),
                onClick: (K) => {
                  N(R, k), v(K.target);
                },
                onKeyDown: (K) => {
                  K.keyCode === 13 && (N(R, k), v(K.target));
                }
              },
              k
            )
          );
        });
        const ge = ["single-filters", l ? "single-filters--dropdown" : `single-filters--${ne}`];
        return /* @__PURE__ */ x.createElement("div", { className: ge.join(" "), key: R }, /* @__PURE__ */ x.createElement(x.Fragment, null, Q && /* @__PURE__ */ x.createElement("label", { htmlFor: `filter-${R}` }, Q), ne === "tab" && !l && /* @__PURE__ */ x.createElement(O.Tabs, { tabs: W }), ne === "pill" && !l && /* @__PURE__ */ x.createElement(O.Pills, { pills: H }), ne === "tab bar" && !l && /* @__PURE__ */ x.createElement(O.TabBar, { filter: T, index: R }), (ne === "dropdown" || l) && /* @__PURE__ */ x.createElement(O.Dropdown, { filter: T, index: R, label: Q, active: re || j, filters: $ })));
      });
    }
  }, ((B = t == null ? void 0 : t.filters) == null ? void 0 : B.length) !== 0)
    return /* @__PURE__ */ x.createElement(O, null, /* @__PURE__ */ x.createElement(O.Section, null, /* @__PURE__ */ x.createElement(O.Style, null), /* @__PURE__ */ x.createElement(O.ApplyBehavior, null)));
};
Rd.propTypes = {
  // runtimeFilters in place
  filteredData: Ne.array,
  // function for updating the runtime filters
  setFilteredData: Ne.func,
  // the full apps config
  config: Ne.object,
  // updating function for setting fitlerBehavior
  setConfig: Ne.func,
  // exclusions
  excludedData: Ne.array,
  // function for filtering the data
  filterData: Ne.func,
  dimensions: Ne.array
};
export {
  Hd as A,
  kd as C,
  Ud as D,
  Rd as F,
  Wd as P,
  zn as _,
  Ad as a,
  qt as b,
  Yn as c,
  Pd as d,
  _d as f,
  jd as g,
  kn as h,
  zt as u
};
