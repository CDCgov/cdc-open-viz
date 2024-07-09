import { r as N, R as _ } from "./storybook-index-BmAYD2Ot.es.js";
import { r as cr, R as ps } from "./storybook-index-vT4_U9I1.es.js";
import { g as ms } from "./storybook-_commonjsHelpers-CT_km90n.es.js";
import { e as Gr, l as gs } from "./storybook-Icon-B5TlldJZ.es.js";
import { B as hs } from "./storybook-Button-Djy4jtV0.es.js";
import { P as Te } from "./storybook-index-Cdio1Uc1.es.js";
import { M as bs } from "./storybook-MultiSelect-Bb0EhWsv.es.js";
import { _ as vs } from "./storybook-lodash-QEop74tm.es.js";
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
function ys(e) {
  return e && DataView.prototype.isPrototypeOf(e);
}
if (ee.arrayBuffer)
  var Es = [
    "[object Int8Array]",
    "[object Uint8Array]",
    "[object Uint8ClampedArray]",
    "[object Int16Array]",
    "[object Uint16Array]",
    "[object Int32Array]",
    "[object Uint32Array]",
    "[object Float32Array]",
    "[object Float64Array]"
  ], Ds = ArrayBuffer.isView || function(e) {
    return e && Es.indexOf(Object.prototype.toString.call(e)) > -1;
  };
function $e(e) {
  if (typeof e != "string" && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || e === "")
    throw new TypeError('Invalid character in header field name: "' + e + '"');
  return e.toLowerCase();
}
function lr(e) {
  return typeof e != "string" && (e = String(e)), e;
}
function ur(e) {
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
  e = $e(e), t = lr(t);
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
  this.map[$e(e)] = lr(t);
};
H.prototype.forEach = function(e, t) {
  for (var r in this.map)
    this.map.hasOwnProperty(r) && e.call(t, this.map[r], r, this);
};
H.prototype.keys = function() {
  var e = [];
  return this.forEach(function(t, r) {
    e.push(r);
  }), ur(e);
};
H.prototype.values = function() {
  var e = [];
  return this.forEach(function(t) {
    e.push(t);
  }), ur(e);
};
H.prototype.entries = function() {
  var e = [];
  return this.forEach(function(t, r) {
    e.push([r, t]);
  }), ur(e);
};
ee.iterable && (H.prototype[Symbol.iterator] = H.prototype.entries);
function Ot(e) {
  if (!e._noBody) {
    if (e.bodyUsed)
      return Promise.reject(new TypeError("Already read"));
    e.bodyUsed = !0;
  }
}
function qn(e) {
  return new Promise(function(t, r) {
    e.onload = function() {
      t(e.result);
    }, e.onerror = function() {
      r(e.error);
    };
  });
}
function Ss(e) {
  var t = new FileReader(), r = qn(t);
  return t.readAsArrayBuffer(e), r;
}
function Ns(e) {
  var t = new FileReader(), r = qn(t), n = /charset=([A-Za-z0-9_-]+)/.exec(e.type), o = n ? n[1] : "utf-8";
  return t.readAsText(e, o), r;
}
function ws(e) {
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
function zn() {
  return this.bodyUsed = !1, this._initBody = function(e) {
    this.bodyUsed = this.bodyUsed, this._bodyInit = e, e ? typeof e == "string" ? this._bodyText = e : ee.blob && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : ee.formData && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : ee.searchParams && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : ee.arrayBuffer && ee.blob && ys(e) ? (this._bodyArrayBuffer = Ur(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : ee.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(e) || Ds(e)) ? this._bodyArrayBuffer = Ur(e) : this._bodyText = e = Object.prototype.toString.call(e) : (this._noBody = !0, this._bodyText = ""), this.headers.get("content-type") || (typeof e == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : ee.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
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
        return this.blob().then(Ss);
      throw new Error("could not read as ArrayBuffer");
    }
  }, this.text = function() {
    var e = Ot(this);
    if (e)
      return e;
    if (this._bodyBlob)
      return Ns(this._bodyBlob);
    if (this._bodyArrayBuffer)
      return Promise.resolve(ws(this._bodyArrayBuffer));
    if (this._bodyFormData)
      throw new Error("could not read FormData body as text");
    return Promise.resolve(this._bodyText);
  }, ee.formData && (this.formData = function() {
    return this.text().then(Cs);
  }), this.json = function() {
    return this.text().then(JSON.parse);
  }, this;
}
var xs = ["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT", "TRACE"];
function Os(e) {
  var t = e.toUpperCase();
  return xs.indexOf(t) > -1 ? t : e;
}
function Ie(e, t) {
  if (!(this instanceof Ie))
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
  t = t || {};
  var r = t.body;
  if (e instanceof Ie) {
    if (e.bodyUsed)
      throw new TypeError("Already read");
    this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new H(e.headers)), this.method = e.method, this.mode = e.mode, this.signal = e.signal, !r && e._bodyInit != null && (r = e._bodyInit, e.bodyUsed = !0);
  } else
    this.url = String(e);
  if (this.credentials = t.credentials || this.credentials || "same-origin", (t.headers || !this.headers) && (this.headers = new H(t.headers)), this.method = Os(t.method || this.method || "GET"), this.mode = t.mode || this.mode || null, this.signal = t.signal || this.signal || function() {
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
function Cs(e) {
  var t = new FormData();
  return e.trim().split("&").forEach(function(r) {
    if (r) {
      var n = r.split("="), o = n.shift().replace(/\+/g, " "), s = n.join("=").replace(/\+/g, " ");
      t.append(decodeURIComponent(o), decodeURIComponent(s));
    }
  }), t;
}
function Is(e) {
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
zn.call(Ie.prototype);
function ge(e, t) {
  if (!(this instanceof ge))
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
  if (t || (t = {}), this.type = "default", this.status = t.status === void 0 ? 200 : t.status, this.status < 200 || this.status > 599)
    throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");
  this.ok = this.status >= 200 && this.status < 300, this.statusText = t.statusText === void 0 ? "" : "" + t.statusText, this.headers = new H(t.headers), this.url = t.url || "", this._initBody(e);
}
zn.call(ge.prototype);
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
var _s = [301, 302, 303, 307, 308];
ge.redirect = function(e, t) {
  if (_s.indexOf(t) === -1)
    throw new RangeError("Invalid status code");
  return new ge(null, { status: t, headers: { location: e } });
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
function Yn(e, t) {
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
        headers: Is(s.getAllResponseHeaders() || "")
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
    if (s.open(o.method, a(o.url), !0), o.credentials === "include" ? s.withCredentials = !0 : o.credentials === "omit" && (s.withCredentials = !1), "responseType" in s && (ee.blob ? s.responseType = "blob" : ee.arrayBuffer && (s.responseType = "arraybuffer")), t && typeof t.headers == "object" && !(t.headers instanceof H || X.Headers && t.headers instanceof X.Headers)) {
      var c = [];
      Object.getOwnPropertyNames(t.headers).forEach(function(u) {
        c.push($e(u)), s.setRequestHeader(u, lr(t.headers[u]));
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
Yn.polyfill = !0;
X.fetch || (X.fetch = Yn, X.Headers = H, X.Request = Ie, X.Response = ge);
function qe(e) {
  "@babel/helpers - typeof";
  return qe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, qe(e);
}
function As(e, t) {
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
function Rs(e) {
  var t = As(e, "string");
  return qe(t) == "symbol" ? t : String(t);
}
function Ps(e, t, r) {
  return t = Rs(t), t in e ? Object.defineProperty(e, t, {
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
function Ts(e) {
  if (typeof e != "object" || e === null)
    return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function Bs(e) {
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
  if ($s(e))
    return "date";
  if (Vs(e))
    return "error";
  var r = Ls(e);
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
function Ls(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function Vs(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function $s(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function xe(e) {
  var t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = Bs(e)), t;
}
function Kn(e, t, r) {
  var n;
  if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? te(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
    if (typeof r != "function")
      throw new Error(process.env.NODE_ENV === "production" ? te(1) : "Expected the enhancer to be a function. Instead, received: '" + xe(r) + "'");
    return r(Kn)(e, t);
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
        var D = a.indexOf(b);
        a.splice(D, 1), i = null;
      }
    };
  }
  function d(b) {
    if (!Ts(b))
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
    for (var g = i = a, S = 0; S < g.length; S++) {
      var D = g[S];
      D();
    }
    return b;
  }
  function p(b) {
    if (typeof b != "function")
      throw new Error(process.env.NODE_ENV === "production" ? te(10) : "Expected the nextReducer to be a function. Instead, received: '" + xe(b));
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
          throw new Error(process.env.NODE_ENV === "production" ? te(11) : "Expected the observer to be an object. Instead, received: '" + xe(D) + "'");
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
    throw new Error(process.env.NODE_ENV === "production" ? te(16) : "bindActionCreators expected an object or a function, but instead received: '" + xe(e) + `'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`);
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
function Ms() {
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
var Jt = { exports: {} }, It = {};
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
function Fs() {
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
function Gs() {
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
        var w = t.ReactDebugCurrentFrame, I = w.getStackAddendum();
        I !== "" && (y += "%s", h = h.concat([I]));
        var x = h.map(function(P) {
          return String(P);
        });
        x.unshift("Warning: " + y), Function.prototype.apply.call(console[E], console, x);
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
        var I = y();
        s(w, I) || (r("The result of getSnapshot should be cached to avoid an infinite loop"), l = !0);
      }
      var x = i({
        inst: {
          value: w,
          getSnapshot: y
        }
      }), P = x[0].inst, A = x[1];
      return c(function() {
        P.value = w, P.getSnapshot = y, p(P) && A({
          inst: P
        });
      }, [E, w, y]), a(function() {
        p(P) && A({
          inst: P
        });
        var L = function() {
          p(P) && A({
            inst: P
          });
        };
        return E(L);
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
process.env.NODE_ENV === "production" ? Jt.exports = Fs() : Jt.exports = Gs();
var dr = Jt.exports, At = {};
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
function Us() {
  if (Xr)
    return At;
  Xr = 1;
  var e = N, t = dr;
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
            var I = b.value;
            if (p(I, w))
              return y = I;
          }
          return y = w;
        }
        if (I = y, n(E, w))
          return I;
        var x = d(w);
        return p !== void 0 && p(I, x) ? I : (E = w, y = x);
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
var Rt = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jr;
function Ws() {
  return Jr || (Jr = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = N, t = dr;
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
        var h = !1, w, I, x = function(T) {
          if (!h) {
            h = !0, w = T;
            var U = p(T);
            if (v !== void 0 && g.hasValue) {
              var k = g.value;
              if (v(k, U))
                return I = k, k;
            }
            return I = U, U;
          }
          var j = w, K = I;
          if (n(j, T))
            return K;
          var q = p(T);
          return v !== void 0 && v(K, q) ? K : (w = T, I = q, q);
        }, P = d === void 0 ? null : d, A = function() {
          return x(l());
        }, L = P === null ? void 0 : function() {
          return x(P());
        };
        return [A, L];
      }, [l, d, p, v]), D = S[0], E = S[1], y = o(f, D, E);
      return i(function() {
        g.hasValue = !0, g.value = y;
      }, [y]), c(y), y;
    }
    Rt.useSyncExternalStoreWithSelector = u, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Rt;
}
process.env.NODE_ENV === "production" ? Us() : Ws();
function ks(e) {
  e();
}
let Jn = ks;
const Hs = (e) => Jn = e, js = () => Jn, Qr = Symbol.for("react-redux-context"), Zr = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function qs() {
  var e;
  if (!N.createContext)
    return {};
  const t = (e = Zr[Qr]) != null ? e : Zr[Qr] = /* @__PURE__ */ new Map();
  let r = t.get(N.createContext);
  return r || (r = N.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(N.createContext, r)), r;
}
const Qn = /* @__PURE__ */ qs(), zs = () => {
  throw new Error("uSES not initialized!");
};
function be() {
  return be = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, be.apply(this, arguments);
}
function Zn(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), o, s;
  for (s = 0; s < n.length; s++)
    o = n[s], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
var Qt = { exports: {} }, V = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var en;
function Ys() {
  if (en)
    return V;
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
    return typeof h == "string" || typeof h == "function" || h === n || h === u || h === s || h === o || h === l || h === d || typeof h == "object" && h !== null && (h.$$typeof === v || h.$$typeof === p || h.$$typeof === i || h.$$typeof === a || h.$$typeof === f || h.$$typeof === g || h.$$typeof === S || h.$$typeof === D || h.$$typeof === b);
  }, V.typeOf = E, V;
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
function Ks() {
  return tn || (tn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, D = e ? Symbol.for("react.scope") : 60119;
    function E(O) {
      return typeof O == "string" || typeof O == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      O === n || O === u || O === s || O === o || O === l || O === d || typeof O == "object" && O !== null && (O.$$typeof === v || O.$$typeof === p || O.$$typeof === i || O.$$typeof === a || O.$$typeof === f || O.$$typeof === g || O.$$typeof === S || O.$$typeof === D || O.$$typeof === b);
    }
    function y(O) {
      if (typeof O == "object" && O !== null) {
        var fe = O.$$typeof;
        switch (fe) {
          case t:
            var R = O.type;
            switch (R) {
              case c:
              case u:
              case n:
              case s:
              case o:
              case l:
                return R;
              default:
                var Pe = R && R.$$typeof;
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
    var h = c, w = u, I = a, x = i, P = t, A = f, L = n, T = v, U = p, k = r, j = s, K = o, q = l, re = !1;
    function me(O) {
      return re || (re = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), G(O) || y(O) === c;
    }
    function G(O) {
      return y(O) === u;
    }
    function ne(O) {
      return y(O) === a;
    }
    function de(O) {
      return y(O) === i;
    }
    function oe(O) {
      return typeof O == "object" && O !== null && O.$$typeof === t;
    }
    function Q(O) {
      return y(O) === f;
    }
    function De(O) {
      return y(O) === n;
    }
    function Se(O) {
      return y(O) === v;
    }
    function Re(O) {
      return y(O) === p;
    }
    function Ge(O) {
      return y(O) === r;
    }
    function he(O) {
      return y(O) === s;
    }
    function Ne(O) {
      return y(O) === o;
    }
    function ct(O) {
      return y(O) === l;
    }
    $.AsyncMode = h, $.ConcurrentMode = w, $.ContextConsumer = I, $.ContextProvider = x, $.Element = P, $.ForwardRef = A, $.Fragment = L, $.Lazy = T, $.Memo = U, $.Portal = k, $.Profiler = j, $.StrictMode = K, $.Suspense = q, $.isAsyncMode = me, $.isConcurrentMode = G, $.isContextConsumer = ne, $.isContextProvider = de, $.isElement = oe, $.isForwardRef = Q, $.isFragment = De, $.isLazy = Se, $.isMemo = Re, $.isPortal = Ge, $.isProfiler = he, $.isStrictMode = Ne, $.isSuspense = ct, $.isValidElementType = E, $.typeOf = y;
  }()), $;
}
process.env.NODE_ENV === "production" ? Qt.exports = Ys() : Qt.exports = Ks();
var Xs = Qt.exports, fr = Xs, Js = {
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
}, Zs = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, eo = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, pr = {};
pr[fr.ForwardRef] = Zs;
pr[fr.Memo] = eo;
function rn(e) {
  return fr.isMemo(e) ? eo : pr[e.$$typeof] || Js;
}
var ei = Object.defineProperty, ti = Object.getOwnPropertyNames, nn = Object.getOwnPropertySymbols, ri = Object.getOwnPropertyDescriptor, ni = Object.getPrototypeOf, on = Object.prototype;
function to(e, t, r) {
  if (typeof t != "string") {
    if (on) {
      var n = ni(t);
      n && n !== on && to(e, n, r);
    }
    var o = ti(t);
    nn && (o = o.concat(nn(t)));
    for (var s = rn(e), i = rn(t), a = 0; a < o.length; ++a) {
      var c = o[a];
      if (!Qs[c] && !(r && r[c]) && !(i && i[c]) && !(s && s[c])) {
        var u = ri(t, c);
        try {
          ei(e, c, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var oi = to;
const sn = /* @__PURE__ */ ms(oi);
var Zt = { exports: {} }, M = {};
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
function si() {
  if (an)
    return M;
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
  return M.ContextConsumer = i, M.ContextProvider = s, M.Element = e, M.ForwardRef = c, M.Fragment = r, M.Lazy = d, M.Memo = l, M.Portal = t, M.Profiler = o, M.StrictMode = n, M.Suspense = u, M.SuspenseList = f, M.isAsyncMode = function() {
    return !1;
  }, M.isConcurrentMode = function() {
    return !1;
  }, M.isContextConsumer = function(g) {
    return b(g) === i;
  }, M.isContextProvider = function(g) {
    return b(g) === s;
  }, M.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === e;
  }, M.isForwardRef = function(g) {
    return b(g) === c;
  }, M.isFragment = function(g) {
    return b(g) === r;
  }, M.isLazy = function(g) {
    return b(g) === d;
  }, M.isMemo = function(g) {
    return b(g) === l;
  }, M.isPortal = function(g) {
    return b(g) === t;
  }, M.isProfiler = function(g) {
    return b(g) === o;
  }, M.isStrictMode = function(g) {
    return b(g) === n;
  }, M.isSuspense = function(g) {
    return b(g) === u;
  }, M.isSuspenseList = function(g) {
    return b(g) === f;
  }, M.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === r || g === o || g === n || g === u || g === f || g === p || typeof g == "object" && g !== null && (g.$$typeof === d || g.$$typeof === l || g.$$typeof === s || g.$$typeof === i || g.$$typeof === c || g.$$typeof === v || g.getModuleId !== void 0);
  }, M.typeOf = b, M;
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
function ii() {
  return cn || (cn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), v = !1, b = !1, g = !1, S = !1, D = !1, E;
    E = Symbol.for("react.module.reference");
    function y(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === r || R === o || D || R === n || R === u || R === f || S || R === p || v || b || g || typeof R == "object" && R !== null && (R.$$typeof === d || R.$$typeof === l || R.$$typeof === s || R.$$typeof === i || R.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === E || R.getModuleId !== void 0));
    }
    function h(R) {
      if (typeof R == "object" && R !== null) {
        var Pe = R.$$typeof;
        switch (Pe) {
          case e:
            var lt = R.type;
            switch (lt) {
              case r:
              case o:
              case n:
              case u:
              case f:
                return lt;
              default:
                var Fr = lt && lt.$$typeof;
                switch (Fr) {
                  case a:
                  case i:
                  case c:
                  case d:
                  case l:
                  case s:
                    return Fr;
                  default:
                    return Pe;
                }
            }
          case t:
            return Pe;
        }
      }
    }
    var w = i, I = s, x = e, P = c, A = r, L = d, T = l, U = t, k = o, j = n, K = u, q = f, re = !1, me = !1;
    function G(R) {
      return re || (re = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ne(R) {
      return me || (me = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function de(R) {
      return h(R) === i;
    }
    function oe(R) {
      return h(R) === s;
    }
    function Q(R) {
      return typeof R == "object" && R !== null && R.$$typeof === e;
    }
    function De(R) {
      return h(R) === c;
    }
    function Se(R) {
      return h(R) === r;
    }
    function Re(R) {
      return h(R) === d;
    }
    function Ge(R) {
      return h(R) === l;
    }
    function he(R) {
      return h(R) === t;
    }
    function Ne(R) {
      return h(R) === o;
    }
    function ct(R) {
      return h(R) === n;
    }
    function O(R) {
      return h(R) === u;
    }
    function fe(R) {
      return h(R) === f;
    }
    F.ContextConsumer = w, F.ContextProvider = I, F.Element = x, F.ForwardRef = P, F.Fragment = A, F.Lazy = L, F.Memo = T, F.Portal = U, F.Profiler = k, F.StrictMode = j, F.Suspense = K, F.SuspenseList = q, F.isAsyncMode = G, F.isConcurrentMode = ne, F.isContextConsumer = de, F.isContextProvider = oe, F.isElement = Q, F.isForwardRef = De, F.isFragment = Se, F.isLazy = Re, F.isMemo = Ge, F.isPortal = he, F.isProfiler = Ne, F.isStrictMode = ct, F.isSuspense = O, F.isSuspenseList = fe, F.isValidElementType = y, F.typeOf = h;
  }()), F;
}
process.env.NODE_ENV === "production" ? Zt.exports = si() : Zt.exports = ii();
var ln = Zt.exports;
function mr(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function Pt(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || mr(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else
    throw new Error(`Unexpected value for ${t} in connect.`);
}
function ai(e, t, r) {
  Pt(e, "mapStateToProps"), Pt(t, "mapDispatchToProps"), Pt(r, "mergeProps");
}
const ci = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function li(e, t, r, n, {
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
function ui(e, t) {
  let {
    initMapStateToProps: r,
    initMapDispatchToProps: n,
    initMergeProps: o
  } = t, s = Zn(t, ci);
  const i = r(e, s), a = n(e, s), c = o(e, s);
  return process.env.NODE_ENV !== "production" && ai(i, a, c), li(i, a, c, e, s);
}
function di(e, t) {
  const r = {};
  for (const n in e) {
    const o = e[n];
    typeof o == "function" && (r[n] = (...s) => t(o(...s)));
  }
  return r;
}
function fi(e) {
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
function ro(e, t, r) {
  fi(e) || mr(`${r}() in ${t} must return a plain object. Instead received ${e}.`);
}
function er(e) {
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
function no(e, t) {
  return function(n, {
    displayName: o
  }) {
    const s = function(a, c) {
      return s.dependsOnOwnProps ? s.mapToProps(a, c) : s.mapToProps(a, void 0);
    };
    return s.dependsOnOwnProps = !0, s.mapToProps = function(a, c) {
      s.mapToProps = e, s.dependsOnOwnProps = un(e);
      let u = s(a, c);
      return typeof u == "function" && (s.mapToProps = u, s.dependsOnOwnProps = un(u), u = s(a, c)), process.env.NODE_ENV !== "production" && ro(u, o, t), u;
    }, s;
  };
}
function gr(e, t) {
  return (r, n) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${n.wrappedComponentName}.`);
  };
}
function pi(e) {
  return e && typeof e == "object" ? er((t) => (
    // @ts-ignore
    di(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    no(e, "mapDispatchToProps")
  ) : gr(e, "mapDispatchToProps") : er((t) => ({
    dispatch: t
  }));
}
function mi(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    no(e, "mapStateToProps")
  ) : gr(e, "mapStateToProps") : er(() => ({}));
}
function gi(e, t, r) {
  return be({}, r, e, t);
}
function hi(e) {
  return function(r, {
    displayName: n,
    areMergedPropsEqual: o
  }) {
    let s = !1, i;
    return function(c, u, f) {
      const l = e(c, u, f);
      return s ? o(l, i) || (i = l) : (s = !0, i = l, process.env.NODE_ENV !== "production" && ro(i, n, "mergeProps")), i;
    };
  };
}
function bi(e) {
  return e ? typeof e == "function" ? hi(e) : gr(e, "mergeProps") : () => gi;
}
function vi() {
  const e = js();
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
function oo(e, t) {
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
    o++, r || (r = t ? t.addNestedSub(c) : e.subscribe(c), n = vi());
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
const yi = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", mt = yi ? N.useLayoutEffect : N.useEffect;
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
const Ei = ["reactReduxForwardedRef"];
let so = zs;
const Di = (e) => {
  so = e;
}, Si = [null, null], Ni = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function wi(e, t, r) {
  mt(() => e(...t), r);
}
function xi(e, t, r, n, o, s) {
  e.current = n, r.current = !1, o.current && (o.current = null, s());
}
function Oi(e, t, r, n, o, s, i, a, c, u, f) {
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
function Ci(e, t) {
  return e === t;
}
let pn = !1;
function io(e, t, r, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: n,
  areStatesEqual: o = Ci,
  areOwnPropsEqual: s = Tt,
  areStatePropsEqual: i = Tt,
  areMergedPropsEqual: a = Tt,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: c = !1,
  // the context consumer to use
  context: u = Qn
} = {}) {
  process.env.NODE_ENV !== "production" && n !== void 0 && !pn && (pn = !0, mr('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const f = u, l = mi(e), d = pi(t), p = bi(r), v = !!e;
  return (g) => {
    if (process.env.NODE_ENV !== "production" && !ln.isValidElementType(g))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${Ni(g)}`);
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
      const [x, P, A] = N.useMemo(() => {
        const {
          reactReduxForwardedRef: O
        } = I, fe = Zn(I, Ei);
        return [I.context, O, fe];
      }, [I]), L = N.useMemo(() => x && x.Consumer && // @ts-ignore
      ln.isContextConsumer(/* @__PURE__ */ N.createElement(x.Consumer, null)) ? x : f, [x, f]), T = N.useContext(L), U = !!I.store && !!I.store.getState && !!I.store.dispatch, k = !!T && !!T.store;
      if (process.env.NODE_ENV !== "production" && !U && !k)
        throw new Error(`Could not find "store" in the context of "${D}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${D} in connect options.`);
      const j = U ? I.store : T.store, K = k ? T.getServerState : j.getState, q = N.useMemo(() => ui(j.dispatch, E), [j]), [re, me] = N.useMemo(() => {
        if (!v)
          return Si;
        const O = oo(j, U ? void 0 : T.subscription), fe = O.notifyNestedSubs.bind(O);
        return [O, fe];
      }, [j, U, T]), G = N.useMemo(() => U ? T : be({}, T, {
        subscription: re
      }), [U, T, re]), ne = N.useRef(), de = N.useRef(A), oe = N.useRef(), Q = N.useRef(!1);
      N.useRef(!1);
      const De = N.useRef(!1), Se = N.useRef();
      mt(() => (De.current = !0, () => {
        De.current = !1;
      }), []);
      const Re = N.useMemo(() => () => oe.current && A === de.current ? oe.current : q(j.getState(), A), [j, A]), Ge = N.useMemo(() => (fe) => re ? Oi(
        v,
        j,
        re,
        // @ts-ignore
        q,
        de,
        ne,
        Q,
        De,
        oe,
        me,
        fe
      ) : () => {
      }, [re]);
      wi(xi, [de, ne, Q, A, oe, me]);
      let he;
      try {
        he = so(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          Ge,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          Re,
          K ? () => q(K(), A) : Re
        );
      } catch (O) {
        throw Se.current && (O.message += `
The error may be correlated with this previous error:
${Se.current.stack}

`), O;
      }
      mt(() => {
        Se.current = void 0, oe.current = void 0, ne.current = he;
      });
      const Ne = N.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ N.createElement(g, be({}, he, {
          ref: P
        }))
      ), [P, g, he]);
      return N.useMemo(() => v ? /* @__PURE__ */ N.createElement(L.Provider, {
        value: G
      }, Ne) : Ne, [L, Ne, G]);
    }
    const w = N.memo(y);
    if (w.WrappedComponent = g, w.displayName = y.displayName = D, c) {
      const x = N.forwardRef(function(A, L) {
        return /* @__PURE__ */ N.createElement(w, be({}, A, {
          reactReduxForwardedRef: L
        }));
      });
      return x.displayName = D, x.WrappedComponent = g, sn(x, g);
    }
    return sn(w, g);
  };
}
function Ii({
  store: e,
  context: t,
  children: r,
  serverState: n,
  stabilityCheck: o = "once",
  noopCheck: s = "once"
}) {
  const i = N.useMemo(() => {
    const u = oo(e);
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
  const c = t || Qn;
  return /* @__PURE__ */ N.createElement(c.Provider, {
    value: i
  }, r);
}
Di(dr.useSyncExternalStore);
Hs(cr.unstable_batchedUpdates);
function _i(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function ao(e, t) {
  var r = N.useState(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], n = N.useRef(!0), o = N.useRef(r), s = n.current || !!(t && o.current.inputs && _i(t, o.current.inputs)), i = s ? o.current : {
    inputs: t,
    result: e()
  };
  return N.useEffect(function() {
    n.current = !1, o.current = i;
  }, [i]), i.result;
}
function Ai(e, t) {
  return ao(function() {
    return e;
  }, t);
}
var B = ao, C = Ai, Ri = process.env.NODE_ENV === "production", Bt = "Invariant failed";
function mn(e, t) {
  if (Ri)
    throw new Error(Bt);
  var r = typeof t == "function" ? t() : t, n = r ? "".concat(Bt, ": ").concat(r) : Bt;
  throw new Error(n);
}
var pe = function(t) {
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
}, hr = function(t, r) {
  return {
    top: t.top - r.top,
    left: t.left - r.left,
    bottom: t.bottom + r.bottom,
    right: t.right + r.right
  };
}, gn = function(t, r) {
  return {
    top: t.top + r.top,
    left: t.left + r.left,
    bottom: t.bottom - r.bottom,
    right: t.right - r.right
  };
}, Pi = function(t, r) {
  return {
    top: t.top + r.y,
    left: t.left + r.x,
    bottom: t.bottom + r.y,
    right: t.right + r.x
  };
}, Lt = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, br = function(t) {
  var r = t.borderBox, n = t.margin, o = n === void 0 ? Lt : n, s = t.border, i = s === void 0 ? Lt : s, a = t.padding, c = a === void 0 ? Lt : a, u = pe(hr(r, o)), f = pe(gn(r, i)), l = pe(gn(f, c));
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
  return isNaN(o) && (process.env.NODE_ENV !== "production" ? mn(!1, "Could not parse value [raw: " + t + ", without suffix: " + r + "]") : mn()), o;
}, Ti = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, gt = function(t, r) {
  var n = t.borderBox, o = t.border, s = t.margin, i = t.padding, a = Pi(n, r);
  return br({
    borderBox: a,
    border: o,
    margin: s,
    padding: i
  });
}, ht = function(t, r) {
  return r === void 0 && (r = Ti()), gt(t, r);
}, co = function(t, r) {
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
  return br({
    borderBox: t,
    margin: n,
    padding: o,
    border: s
  });
}, lo = function(t) {
  var r = t.getBoundingClientRect(), n = window.getComputedStyle(t);
  return co(r, n);
}, hn = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function Bi(e, t) {
  return !!(e === t || hn(e) && hn(t));
}
function Li(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!Bi(e[r], t[r]))
      return !1;
  return !0;
}
function z(e, t) {
  t === void 0 && (t = Li);
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
var ze = function(t) {
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
const Vi = process.env.NODE_ENV === "production", $i = /[ \t]{2,}/g, Mi = /^[ \t]*/gm, bn = (e) => e.replace($i, " ").replace(Mi, "").trim(), Fi = (e) => bn(`
  %c@hello-pangea/dnd

  %c${bn(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), Gi = (e) => [Fi(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], Ui = "__@hello-pangea/dnd-disable-dev-warnings";
function uo(e, t) {
  Vi || typeof window < "u" && window[Ui] || console[e](...Gi(t));
}
const W = uo.bind(null, "warn"), tr = uo.bind(null, "error");
function ve() {
}
function Wi(e, t) {
  return {
    ...e,
    ...t
  };
}
function le(e, t, r) {
  const n = t.map((o) => {
    const s = Wi(r, o.options);
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
const ki = process.env.NODE_ENV === "production", vn = "Invariant failed";
class Ye extends Error {
}
Ye.prototype.toString = function() {
  return this.message;
};
function m(e, t) {
  throw ki ? new Ye(vn) : new Ye(`${vn}: ${t || ""}`);
}
class Hi extends _.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = ve, this.onWindowError = (r) => {
      const n = this.getCallbacks();
      n.isDragging() && (n.tryAbort(), process.env.NODE_ENV !== "production" && W(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const o = r.error;
      o instanceof Ye && (r.preventDefault(), process.env.NODE_ENV !== "production" && tr(o.message));
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
      process.env.NODE_ENV !== "production" && tr(t.message), this.setState({});
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
const ji = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`, bt = (e) => e + 1, qi = (e) => `
  You have lifted an item in position ${bt(e.source.index)}
`, fo = (e, t) => {
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
}, po = (e, t, r) => t.droppableId === r.droppableId ? `
      The item ${e}
      has been combined with ${r.draggableId}` : `
      The item ${e}
      in list ${t.droppableId}
      has been combined with ${r.draggableId}
      in list ${r.droppableId}
    `, zi = (e) => {
  const t = e.destination;
  if (t)
    return fo(e.source, t);
  const r = e.combine;
  return r ? po(e.draggableId, e.source, r) : "You are over an area that cannot be dropped on";
}, yn = (e) => `
  The item has returned to its starting position
  of ${bt(e.index)}
`, Yi = (e) => {
  if (e.reason === "CANCEL")
    return `
      Movement cancelled.
      ${yn(e.source)}
    `;
  const t = e.destination, r = e.combine;
  return t ? `
      You have dropped the item.
      ${fo(e.source, t)}
    ` : r ? `
      You have dropped the item.
      ${po(e.draggableId, e.source, r)}
    ` : `
    The item has been dropped while not over a drop area.
    ${yn(e.source)}
  `;
}, Ki = {
  dragHandleUsageInstructions: ji,
  onDragStart: qi,
  onDragUpdate: zi,
  onDragEnd: Yi
};
var pt = Ki;
const Y = {
  x: 0,
  y: 0
}, J = (e, t) => ({
  x: e.x + t.x,
  y: e.y + t.y
}), se = (e, t) => ({
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
}, Ke = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2), En = (e, t) => Math.min(...t.map((r) => Ke(e, r))), mo = (e) => (t) => ({
  x: e(t.x),
  y: e(t.y)
});
var Xi = (e, t) => {
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
}), Dn = (e) => [{
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
}], Ji = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, Qi = (e, t) => t ? rt(e, t.scroll.diff.displacement) : e, Zi = (e, t, r) => r && r.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + r.increasedBy[t.line]
} : e, ea = (e, t) => t && t.shouldClipSubject ? Xi(t.pageMarginBox, e) : pe(e);
var Be = ({
  page: e,
  withPlaceholder: t,
  axis: r,
  frame: n
}) => {
  const o = Qi(e.marginBox, n), s = Zi(o, r, t), i = ea(s, n);
  return {
    page: e,
    withPlaceholder: t,
    active: i
  };
}, vr = (e, t) => {
  e.frame || (process.env.NODE_ENV, m());
  const r = e.frame, n = se(t, r.scroll.initial), o = Me(n), s = {
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
const go = z((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {})), ho = z((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {})), Et = z((e) => Object.values(e)), ta = z((e) => Object.values(e));
var Ae = z((e, t) => ta(t).filter((n) => e === n.descriptor.droppableId).sort((n, o) => n.descriptor.index - o.descriptor.index));
function yr(e) {
  return e.at && e.at.type === "REORDER" ? e.at.destination : null;
}
function Dt(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
var St = z((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id)), ra = ({
  isMovingForward: e,
  draggable: t,
  destination: r,
  insideDestination: n,
  previousImpact: o
}) => {
  if (!r.isCombineEnabled || !yr(o))
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
  f === -1 && (process.env.NODE_ENV !== "production" ? m(!1, "Could not find displaced item in set") : m());
  const l = f - 1;
  if (l < 0)
    return null;
  const d = u[l];
  return i(d.descriptor.id);
}, Fe = (e, t) => e.descriptor.droppableId === t.descriptor.id;
const bo = {
  point: Y,
  value: 0
}, Xe = {
  invisible: {},
  visible: {},
  all: []
}, na = {
  displaced: Xe,
  displacedBy: bo,
  at: null
};
var oa = na, ue = (e, t) => (r) => e <= r && r <= t, vo = (e) => {
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
}, sa = (e) => {
  const t = ue(e.top, e.bottom), r = ue(e.left, e.right);
  return (n) => t(n.top) && t(n.bottom) && r(n.left) && r(n.right);
};
const Er = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, yo = {
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
var ia = (e) => (t) => {
  const r = ue(t.top, t.bottom), n = ue(t.left, t.right);
  return (o) => e === Er ? r(o.top) && r(o.bottom) : n(o.left) && n(o.right);
};
const aa = (e, t) => {
  const r = t.frame ? t.frame.scroll.diff.displacement : Y;
  return rt(e, r);
}, ca = (e, t, r) => t.subject.active ? r(t.subject.active)(e) : !1, la = (e, t, r) => r(t)(e), Dr = ({
  target: e,
  destination: t,
  viewport: r,
  withDroppableDisplacement: n,
  isVisibleThroughFrameFn: o
}) => {
  const s = n ? aa(e, t) : e;
  return ca(s, t, o) && la(s, r, o);
}, ua = (e) => Dr({
  ...e,
  isVisibleThroughFrameFn: vo
}), Eo = (e) => Dr({
  ...e,
  isVisibleThroughFrameFn: sa
}), da = (e) => Dr({
  ...e,
  isVisibleThroughFrameFn: ia(e.destination.axis)
}), fa = (e, t, r) => {
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
function pa(e, t) {
  const r = e.page.marginBox, n = {
    top: t.point.y,
    right: 0,
    bottom: 0,
    left: t.point.x
  };
  return pe(hr(r, n));
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
    const u = pa(c, r), f = c.descriptor.id;
    if (a.all.push(f), !ua({
      target: u,
      destination: t,
      viewport: n,
      withDroppableDisplacement: !0
    }))
      return a.invisible[c.descriptor.id] = !0, a;
    const d = fa(f, s, o), p = {
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
function ma(e, t) {
  if (!e.length)
    return 0;
  const r = e[e.length - 1].descriptor.index;
  return t.inHomeList ? r : r + 1;
}
function Sn({
  insideDestination: e,
  inHomeList: t,
  displacedBy: r,
  destination: n
}) {
  const o = ma(e, {
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
    return Sn({
      insideDestination: t,
      inHomeList: c,
      displacedBy: o,
      destination: r
    });
  const u = t.find((v) => v.descriptor.index === i);
  if (!u)
    return Sn({
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
var ga = ({
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
}, ha = ({
  isMovingForward: e,
  isInHomeList: t,
  insideDestination: r,
  location: n
}) => {
  if (!r.length)
    return null;
  const o = n.index, s = e ? o + 1 : o - 1, i = r[0].descriptor.index, a = r[r.length - 1].descriptor.index, c = t ? a : a + 1;
  return s < i || s > c ? null : s;
}, ba = ({
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
  if (u || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot move in direction without previous impact location") : m()), u.type === "REORDER") {
    const l = ha({
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
  const f = ga({
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
}, va = ({
  displaced: e,
  afterCritical: t,
  combineWith: r,
  displacedBy: n
}) => {
  const o = !!(e.visible[r] || e.invisible[r]);
  return Ee(r, t) ? o ? Y : Me(n.point) : o ? n.point : Y;
}, ya = ({
  afterCritical: e,
  impact: t,
  draggables: r
}) => {
  const n = Dt(t);
  n || (process.env.NODE_ENV, m());
  const o = n.draggableId, s = r[o].page.borderBox.center, i = va({
    displaced: t.displaced,
    afterCritical: e,
    combineWith: o,
    displacedBy: t.displacedBy
  });
  return J(s, i);
};
const Do = (e, t) => t.margin[e.start] + t.borderBox[e.size] / 2, Ea = (e, t) => t.margin[e.end] + t.borderBox[e.size] / 2, Sr = (e, t, r) => t[e.crossAxisStart] + r.margin[e.crossAxisStart] + r.borderBox[e.crossAxisSize] / 2, Nn = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: r
}) => _e(e.line, t.marginBox[e.end] + Do(e, r), Sr(e, t.marginBox, r)), wn = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: r
}) => _e(e.line, t.marginBox[e.start] - Ea(e, r), Sr(e, t.marginBox, r)), Da = ({
  axis: e,
  moveInto: t,
  isMoving: r
}) => _e(e.line, t.contentBox[e.start] + Do(e, r), Sr(e, t.contentBox, r));
var Sa = ({
  impact: e,
  draggable: t,
  draggables: r,
  droppable: n,
  afterCritical: o
}) => {
  const s = Ae(n.descriptor.id, r), i = t.page, a = n.axis;
  if (!s.length)
    return Da({
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
      return wn({
        axis: a,
        moveRelativeTo: d.page,
        isMoving: i
      });
    const p = gt(d.page, u.point);
    return wn({
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
    return Nn({
      axis: a,
      moveRelativeTo: d,
      isMoving: i
    });
  }
  return Nn({
    axis: a,
    moveRelativeTo: l.page,
    isMoving: i
  });
}, rr = (e, t) => {
  const r = e.frame;
  return r ? J(t, r.scroll.diff.displacement) : t;
};
const Na = ({
  impact: e,
  draggable: t,
  droppable: r,
  draggables: n,
  afterCritical: o
}) => {
  const s = t.page.borderBox.center, i = e.at;
  return !r || !i ? s : i.type === "REORDER" ? Sa({
    impact: e,
    draggable: t,
    draggables: n,
    droppable: r,
    afterCritical: o
  }) : ya({
    impact: e,
    draggables: n,
    afterCritical: o
  });
};
var Nt = (e) => {
  const t = Na(e), r = e.droppable;
  return r ? rr(r, t) : t;
}, So = (e, t) => {
  const r = se(t, e.scroll.initial), n = Me(r);
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
function xn(e, t) {
  return e.map((r) => t[r]);
}
function wa(e, t) {
  for (let r = 0; r < t.length; r++) {
    const n = t[r].visible[e];
    if (n)
      return n;
  }
  return null;
}
var xa = ({
  impact: e,
  viewport: t,
  destination: r,
  draggables: n,
  maxScrollChange: o
}) => {
  const s = So(t, J(t.scroll.current, o)), i = r.frame ? vr(r, J(r.frame.scroll.current, o)) : r, a = e.displaced, c = Je({
    afterDragging: xn(a.all, n),
    destination: r,
    displacedBy: e.displacedBy,
    viewport: s.frame,
    last: a,
    forceShouldAnimate: !1
  }), u = Je({
    afterDragging: xn(a.all, n),
    destination: i,
    displacedBy: e.displacedBy,
    viewport: t.frame,
    last: a,
    forceShouldAnimate: !1
  }), f = {}, l = {}, d = [a, c, u];
  return a.all.forEach((v) => {
    const b = wa(v, d);
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
}, Oa = (e, t) => J(e.scroll.diff.displacement, t), Nr = ({
  pageBorderBoxCenter: e,
  draggable: t,
  viewport: r
}) => {
  const n = Oa(r, e), o = se(n, t.page.borderBox.center);
  return J(t.client.borderBox.center, o);
}, No = ({
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
  return s ? da(c) : Eo(c);
}, Ca = ({
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
  const u = Ae(r.descriptor.id, n), f = Fe(t, r), l = ra({
    isMovingForward: e,
    draggable: t,
    destination: r,
    insideDestination: u,
    previousImpact: o
  }) || ba({
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
  if (No({
    draggable: t,
    destination: r,
    newPageBorderBoxCenter: d,
    viewport: s.frame,
    withDroppableDisplacement: !1,
    onlyOnMainAxis: !0
  }))
    return {
      clientSelection: Nr({
        pageBorderBoxCenter: d,
        draggable: t,
        viewport: s
      }),
      impact: l,
      scrollJumpRequest: null
    };
  const v = se(d, i), b = xa({
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
  return t || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot get clipped area from droppable") : m()), t;
};
var Ia = ({
  isMovingForward: e,
  pageBorderBoxCenter: t,
  source: r,
  droppables: n,
  viewport: o
}) => {
  const s = r.subject.active;
  if (!s)
    return null;
  const i = r.axis, a = ue(s[i.start], s[i.end]), c = Et(n).filter((f) => f !== r).filter((f) => f.isEnabled).filter((f) => !!f.subject.active).filter((f) => vo(o.frame)(Z(f))).filter((f) => {
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
    const d = En(t, Dn(Z(f))), p = En(t, Dn(Z(l)));
    return d !== p ? d - p : Z(f)[i.start] - Z(l)[i.start];
  })[0];
};
const On = (e, t) => {
  const r = e.page.borderBox.center;
  return Ee(e.descriptor.id, t) ? se(r, t.displacedBy.point) : r;
}, _a = (e, t) => {
  const r = e.page.borderBox;
  return Ee(e.descriptor.id, t) ? rt(r, Me(t.displacedBy.point)) : r;
};
var Aa = ({
  pageBorderBoxCenter: e,
  viewport: t,
  destination: r,
  insideDestination: n,
  afterCritical: o
}) => n.filter((i) => Eo({
  target: _a(i, o),
  destination: r,
  viewport: t.frame,
  withDroppableDisplacement: !0
})).sort((i, a) => {
  const c = Ke(e, rr(r, On(i, o))), u = Ke(e, rr(r, On(a, o)));
  return c < u ? -1 : u < c ? 1 : i.descriptor.index - a.descriptor.index;
})[0] || null, nt = z(function(t, r) {
  const n = r[t.line];
  return {
    value: n,
    point: _e(t.line, n)
  };
});
const Ra = (e, t, r) => {
  const n = e.axis;
  if (e.descriptor.mode === "virtual")
    return _e(n.line, t[n.line]);
  const o = e.subject.page.contentBox[n.size], c = Ae(e.descriptor.id, r).reduce((u, f) => u + f.client.marginBox[n.size], 0) + t[n.line] - o;
  return c <= 0 ? null : _e(n.line, c);
}, wo = (e, t) => ({
  ...e,
  scroll: {
    ...e.scroll,
    max: t
  }
}), xo = (e, t, r) => {
  const n = e.frame;
  Fe(t, e) && (process.env.NODE_ENV !== "production" ? m(!1, "Should not add placeholder space to home list") : m()), e.subject.withPlaceholder && (process.env.NODE_ENV !== "production" ? m(!1, "Cannot add placeholder size to a subject when it already has one") : m());
  const o = nt(e.axis, t.displaceBy).point, s = Ra(e, o, r), i = {
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
  const a = s ? J(n.scroll.max, s) : n.scroll.max, c = wo(n, a), u = Be({
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
  t || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot remove placeholder form subject when there was none") : m());
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
  n || (process.env.NODE_ENV !== "production" ? m(!1, "Expected droppable with frame to have old max frame scroll when removing placeholder") : m());
  const o = wo(r, n), s = Be({
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
var Ta = ({
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
      displacedBy: bo,
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
    }), p = Fe(n, s) ? s : xo(s, n, o);
    return No({
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
}, Ba = ({
  isMovingForward: e,
  previousPageBorderBoxCenter: t,
  draggable: r,
  isOver: n,
  draggables: o,
  droppables: s,
  viewport: i,
  afterCritical: a
}) => {
  const c = Ia({
    isMovingForward: e,
    pageBorderBoxCenter: t,
    source: n,
    droppables: s,
    viewport: i
  });
  if (!c)
    return null;
  const u = Ae(c.descriptor.id, o), f = Aa({
    pageBorderBoxCenter: t,
    viewport: i,
    destination: c,
    insideDestination: u,
    afterCritical: a
  }), l = Ta({
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
    clientSelection: Nr({
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
const La = (e, t) => {
  const r = ie(e);
  return r ? t[r] : null;
};
var Va = ({
  state: e,
  type: t
}) => {
  const r = La(e.impact, e.dimensions.droppables), n = !!r, o = e.dimensions.droppables[e.critical.droppable.id], s = r || o, i = s.axis.direction, a = i === "vertical" && (t === "MOVE_UP" || t === "MOVE_DOWN") || i === "horizontal" && (t === "MOVE_LEFT" || t === "MOVE_RIGHT");
  if (a && !n)
    return null;
  const c = t === "MOVE_DOWN" || t === "MOVE_RIGHT", u = e.dimensions.draggables[e.critical.draggable.id], f = e.current.page.borderBoxCenter, {
    draggables: l,
    droppables: d
  } = e.dimensions;
  return a ? Ca({
    isMovingForward: c,
    previousPageBorderBoxCenter: f,
    draggable: u,
    destination: s,
    draggables: l,
    viewport: e.viewport,
    previousClientSelection: e.current.client.selection,
    previousImpact: e.impact,
    afterCritical: e.afterCritical
  }) : Ba({
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
function Oo(e) {
  const t = ue(e.top, e.bottom), r = ue(e.left, e.right);
  return function(o) {
    return t(o.y) && r(o.x);
  };
}
function $a(e, t) {
  return e.left < t.right && e.right > t.left && e.top < t.bottom && e.bottom > t.top;
}
function Ma({
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
function Fa({
  pageBorderBox: e,
  draggable: t,
  droppables: r
}) {
  const n = Et(r).filter((o) => {
    if (!o.isEnabled)
      return !1;
    const s = o.subject.active;
    if (!s || !$a(e, s))
      return !1;
    if (Oo(s)(e.center))
      return !0;
    const i = o.axis, a = s.center[i.crossAxisLine], c = e[i.crossAxisStart], u = e[i.crossAxisEnd], f = ue(s[i.crossAxisStart], s[i.crossAxisEnd]), l = f(c), d = f(u);
    return !l && !d ? !0 : l ? c < a : u > a;
  });
  return n.length ? n.length === 1 ? n[0].descriptor.id : Ma({
    pageBorderBox: e,
    draggable: t,
    candidates: n
  }) : null;
}
const Co = (e, t) => pe(rt(e, t));
var Ga = (e, t) => {
  const r = e.frame;
  return r ? Co(t, r.scroll.diff.value) : t;
};
function Io({
  displaced: e,
  id: t
}) {
  return !!(e.visible[t] || e.invisible[t]);
}
function Ua({
  draggable: e,
  closest: t,
  inHomeList: r
}) {
  return t ? r && t.descriptor.index > e.descriptor.index ? t.descriptor.index - 1 : t.descriptor.index : null;
}
var Wa = ({
  pageBorderBoxWithDroppableScroll: e,
  draggable: t,
  destination: r,
  insideDestination: n,
  last: o,
  viewport: s,
  afterCritical: i
}) => {
  const a = r.axis, c = nt(r.axis, t.displaceBy), u = c.value, f = e[a.start], l = e[a.end], p = St(t, n).find((b) => {
    const g = b.descriptor.id, S = b.page.borderBox.center[a.line], D = Ee(g, i), E = Io({
      displaced: o,
      id: g
    });
    return D ? E ? l <= S : f < S - u : E ? l <= S + u : f < S;
  }) || null, v = Ua({
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
const ka = 4;
var Ha = ({
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
    const b = v.descriptor.id, g = v.page.borderBox, D = g[i.size] / ka, E = Ee(b, s), y = Io({
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
}, _o = ({
  pageOffset: e,
  draggable: t,
  draggables: r,
  droppables: n,
  previousImpact: o,
  viewport: s,
  afterCritical: i
}) => {
  const a = Co(t.page.borderBox, e), c = Fa({
    pageBorderBox: a,
    draggable: t,
    droppables: n
  });
  if (!c)
    return oa;
  const u = n[c], f = Ae(u.descriptor.id, r), l = Ga(u, a);
  return Ha({
    pageBorderBoxWithDroppableScroll: l,
    draggable: t,
    previousImpact: o,
    destination: u,
    insideDestination: f,
    afterCritical: i
  }) || Wa({
    pageBorderBoxWithDroppableScroll: l,
    draggable: t,
    destination: u,
    insideDestination: f,
    last: o.displaced,
    viewport: s,
    afterCritical: i
  });
}, wr = (e, t) => ({
  ...e,
  [t.descriptor.id]: t
});
const ja = ({
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
  return wr(r, i);
};
var qa = ({
  draggable: e,
  draggables: t,
  droppables: r,
  previousImpact: n,
  impact: o
}) => {
  const s = ja({
    previousImpact: n,
    impact: o,
    droppables: r
  }), i = ie(o);
  if (!i)
    return s;
  const a = r[i];
  if (Fe(e, a) || a.subject.withPlaceholder)
    return s;
  const c = xo(a, e, t);
  return wr(s, c);
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
  const p = a.draggables[e.critical.draggable.id], v = o || _o({
    pageOffset: l.offset,
    draggable: p,
    draggables: a.draggables,
    droppables: a.droppables,
    previousImpact: e.impact,
    viewport: i,
    afterCritical: e.afterCritical
  }), b = qa({
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
function za(e, t) {
  return e.map((r) => t[r]);
}
var Ao = ({
  impact: e,
  viewport: t,
  draggables: r,
  destination: n,
  forceShouldAnimate: o
}) => {
  const s = e.displaced, i = za(s.all, r), a = Je({
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
}, Ro = ({
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
  return Nr({
    pageBorderBoxCenter: i,
    draggable: t,
    viewport: o
  });
}, Po = ({
  state: e,
  dimensions: t,
  viewport: r
}) => {
  e.movementMode !== "SNAP" && (process.env.NODE_ENV, m());
  const n = e.impact, o = r || e.viewport, s = t || e.dimensions, {
    draggables: i,
    droppables: a
  } = s, c = i[e.critical.draggable.id], u = ie(n);
  u || (process.env.NODE_ENV !== "production" ? m(!1, "Must be over a destination in SNAP movement mode") : m());
  const f = a[u], l = Ao({
    impact: n,
    viewport: o,
    destination: f,
    draggables: i
  }), d = Ro({
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
}, Ya = (e) => ({
  index: e.index,
  droppableId: e.droppableId
}), To = ({
  draggable: e,
  home: t,
  draggables: r,
  viewport: n
}) => {
  const o = nt(t.axis, e.displaceBy), s = Ae(t.descriptor.id, r), i = s.indexOf(e);
  i === -1 && (process.env.NODE_ENV !== "production" ? m(!1, "Expected draggable to be inside home list") : m());
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
        destination: Ya(e.descriptor)
      }
    },
    afterCritical: u
  };
}, Ka = (e, t) => ({
  draggables: e.draggables,
  droppables: wr(e.droppables, t)
});
const ot = (e) => {
  process.env.NODE_ENV;
}, st = (e) => {
  process.env.NODE_ENV;
};
var Xa = ({
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
}, Ja = (e) => {
  const t = e.frame;
  return t || (process.env.NODE_ENV !== "production" ? m(!1, "Expected Droppable to have a frame") : m()), t;
}, Qa = ({
  additions: e,
  updatedDroppables: t,
  viewport: r
}) => {
  const n = r.scroll.diff.value;
  return e.map((o) => {
    const s = o.descriptor.droppableId, i = t[s], c = Ja(i).scroll.diff.value, u = J(n, c);
    return Xa({
      draggable: o,
      offset: u,
      initialWindowScroll: r.scroll.initial
    });
  });
}, Za = ({
  state: e,
  published: t
}) => {
  ot();
  const r = t.modified.map((S) => {
    const D = e.dimensions.droppables[S.droppableId];
    return vr(D, S.scroll);
  }), n = {
    ...e.dimensions.droppables,
    ...go(r)
  }, o = ho(Qa({
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
  } = To({
    draggable: u,
    home: f,
    draggables: s,
    viewport: e.viewport
  }), p = c && c.isCombineEnabled ? e.impact : l, v = _o({
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
const nr = (e) => e.movementMode === "SNAP", Vt = (e, t, r) => {
  const n = Ka(e.dimensions, t);
  return !nr(e) || r ? He({
    state: e,
    dimensions: n
  }) : Po({
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
const Cn = {
  phase: "IDLE",
  completed: null,
  shouldFlush: !1
};
var ec = (e = Cn, t) => {
  if (t.type === "FLUSH")
    return {
      ...Cn,
      shouldFlush: !0
    };
  if (t.type === "INITIAL_PUBLISH") {
    e.phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? m(!1, "INITIAL_PUBLISH must come after a IDLE phase") : m());
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
    } = To({
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
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" ? e : (e.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? m(!1, `Collection cannot start from phase ${e.phase}`) : m()), {
      ...e,
      phase: "COLLECTING"
    });
  if (t.type === "PUBLISH_WHILE_DRAGGING")
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? m(!1, `Unexpected ${t.type} received in phase ${e.phase}`) : m()), Za({
      state: e,
      published: t.payload
    });
  if (t.type === "MOVE") {
    if (e.phase === "DROP_PENDING")
      return e;
    Oe(e) || (process.env.NODE_ENV !== "production" ? m(!1, `${t.type} not permitted in phase ${e.phase}`) : m());
    const {
      client: r
    } = t.payload;
    return ye(r, e.current.client.selection) ? e : He({
      state: e,
      clientSelection: r,
      impact: nr(e) ? e.impact : null
    });
  }
  if (t.type === "UPDATE_DROPPABLE_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "COLLECTING")
      return $t(e);
    Oe(e) || (process.env.NODE_ENV !== "production" ? m(!1, `${t.type} not permitted in phase ${e.phase}`) : m());
    const {
      id: r,
      newScroll: n
    } = t.payload, o = e.dimensions.droppables[r];
    if (!o)
      return e;
    const s = vr(o, n);
    return Vt(e, s, !1);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    Oe(e) || (process.env.NODE_ENV !== "production" ? m(!1, `Attempting to move in an unsupported phase ${e.phase}`) : m());
    const {
      id: r,
      isEnabled: n
    } = t.payload, o = e.dimensions.droppables[r];
    o || (process.env.NODE_ENV !== "production" ? m(!1, `Cannot find Droppable[id: ${r}] to toggle its enabled state`) : m()), o.isEnabled === n && (process.env.NODE_ENV !== "production" ? m(!1, `Trying to set droppable isEnabled to ${String(n)}
      but it is already ${String(o.isEnabled)}`) : m());
    const s = {
      ...o,
      isEnabled: n
    };
    return Vt(e, s, !0);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_COMBINE_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    Oe(e) || (process.env.NODE_ENV !== "production" ? m(!1, `Attempting to move in an unsupported phase ${e.phase}`) : m());
    const {
      id: r,
      isCombineEnabled: n
    } = t.payload, o = e.dimensions.droppables[r];
    o || (process.env.NODE_ENV !== "production" ? m(!1, `Cannot find Droppable[id: ${r}] to toggle its isCombineEnabled state`) : m()), o.isCombineEnabled === n && (process.env.NODE_ENV !== "production" ? m(!1, `Trying to set droppable isCombineEnabled to ${String(n)}
      but it is already ${String(o.isCombineEnabled)}`) : m());
    const s = {
      ...o,
      isCombineEnabled: n
    };
    return Vt(e, s, !0);
  }
  if (t.type === "MOVE_BY_WINDOW_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "DROP_ANIMATING")
      return e;
    Oe(e) || (process.env.NODE_ENV !== "production" ? m(!1, `Cannot move by window in phase ${e.phase}`) : m()), e.isWindowScrollAllowed || (process.env.NODE_ENV !== "production" ? m(!1, "Window scrolling is currently not supported for fixed lists") : m());
    const r = t.payload.newScroll;
    if (ye(e.viewport.scroll.current, r))
      return $t(e);
    const n = So(e.viewport, r);
    return nr(e) ? Po({
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
    e.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? m(!1, `${t.type} received while not in DRAGGING phase`) : m());
    const r = Va({
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
    return e.phase !== "COLLECTING" && (process.env.NODE_ENV !== "production" ? m(!1, "Can only move into the DROP_PENDING phase from the COLLECTING phase") : m()), {
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
    return e.phase === "DRAGGING" || e.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? m(!1, `Cannot animate drop from phase ${e.phase}`) : m()), {
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
const tc = (e) => ({
  type: "BEFORE_INITIAL_CAPTURE",
  payload: e
}), rc = (e) => ({
  type: "LIFT",
  payload: e
}), nc = (e) => ({
  type: "INITIAL_PUBLISH",
  payload: e
}), oc = (e) => ({
  type: "PUBLISH_WHILE_DRAGGING",
  payload: e
}), sc = () => ({
  type: "COLLECTION_STARTING",
  payload: null
}), ic = (e) => ({
  type: "UPDATE_DROPPABLE_SCROLL",
  payload: e
}), ac = (e) => ({
  type: "UPDATE_DROPPABLE_IS_ENABLED",
  payload: e
}), cc = (e) => ({
  type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
  payload: e
}), Bo = (e) => ({
  type: "MOVE",
  payload: e
}), lc = (e) => ({
  type: "MOVE_BY_WINDOW_SCROLL",
  payload: e
}), uc = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), dc = () => ({
  type: "MOVE_UP",
  payload: null
}), fc = () => ({
  type: "MOVE_DOWN",
  payload: null
}), pc = () => ({
  type: "MOVE_RIGHT",
  payload: null
}), mc = () => ({
  type: "MOVE_LEFT",
  payload: null
}), xr = () => ({
  type: "FLUSH",
  payload: null
}), gc = (e) => ({
  type: "DROP_ANIMATE",
  payload: e
}), Or = (e) => ({
  type: "DROP_COMPLETE",
  payload: e
}), Lo = (e) => ({
  type: "DROP",
  payload: e
}), hc = (e) => ({
  type: "DROP_PENDING",
  payload: e
}), Vo = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
});
function bc(e) {
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
function vc(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const r = Ae(e.droppable.id, t.draggables);
    bc(r);
  }
}
var yc = (e) => ({
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
  c.phase === "DROP_ANIMATING" && r(Or({
    completed: c.completed
  })), t().phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? m(!1, "Unexpected phase to start a drag") : m()), r(xr()), r(tc({
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
  vc(l, d), r(nc({
    critical: l,
    dimensions: d,
    clientSelection: i,
    movementMode: a,
    viewport: p
  }));
}, Ec = (e) => () => (t) => (r) => {
  r.type === "INITIAL_PUBLISH" && e.dragging(), r.type === "DROP_ANIMATE" && e.dropping(r.payload.completed.result.reason), (r.type === "FLUSH" || r.type === "DROP_COMPLETE") && e.resting(), t(r);
};
const Cr = {
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
}, $o = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, we = `${$o.outOfTheWay}s ${Cr.outOfTheWay}`, je = {
  fluid: `opacity ${we}`,
  snap: `transform ${we}, opacity ${we}`,
  drop: (e) => {
    const t = `${e}s ${Cr.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${we}`,
  placeholder: `height ${we}, width ${we}, margin ${we}`
}, In = (e) => ye(e, Y) ? void 0 : `translate(${e.x}px, ${e.y}px)`, or = {
  moveTo: In,
  drop: (e, t) => {
    const r = In(e);
    if (r)
      return t ? `${r} scale(${Qe.scale.drop})` : r;
  }
}, {
  minDropTime: sr,
  maxDropTime: Mo
} = $o, Dc = Mo - sr, _n = 1500, Sc = 0.6;
var Nc = ({
  current: e,
  destination: t,
  reason: r
}) => {
  const n = Ke(e, t);
  if (n <= 0)
    return sr;
  if (n >= _n)
    return Mo;
  const o = n / _n, s = sr + Dc * o, i = r === "CANCEL" ? s * Sc : s;
  return Number(i.toFixed(2));
}, wc = ({
  impact: e,
  draggable: t,
  dimensions: r,
  viewport: n,
  afterCritical: o
}) => {
  const {
    draggables: s,
    droppables: i
  } = r, a = ie(e), c = a ? i[a] : null, u = i[t.descriptor.droppableId], f = Ro({
    impact: e,
    draggable: t,
    draggables: s,
    afterCritical: o,
    droppable: c || u,
    viewport: n
  });
  return se(f, t.client.borderBox.center);
}, xc = ({
  draggables: e,
  reason: t,
  lastImpact: r,
  home: n,
  viewport: o,
  onLiftImpact: s
}) => !r.at || t !== "DROP" ? {
  impact: Ao({
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
const Oc = ({
  getState: e,
  dispatch: t
}) => (r) => (n) => {
  if (n.type !== "DROP") {
    r(n);
    return;
  }
  const o = e(), s = n.payload.reason;
  if (o.phase === "COLLECTING") {
    t(hc({
      reason: s
    }));
    return;
  }
  if (o.phase === "IDLE")
    return;
  o.phase === "DROP_PENDING" && o.isWaiting && (process.env.NODE_ENV !== "production" ? m(!1, "A DROP action occurred while DROP_PENDING and still waiting") : m()), o.phase === "DRAGGING" || o.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? m(!1, `Cannot drop in phase: ${o.phase}`) : m());
  const a = o.critical, c = o.dimensions, u = c.draggables[o.critical.draggable.id], {
    impact: f,
    didDropInsideDroppable: l
  } = xc({
    reason: s,
    lastImpact: o.impact,
    afterCritical: o.afterCritical,
    onLiftImpact: o.onLiftImpact,
    home: o.dimensions.droppables[o.critical.droppable.id],
    viewport: o.viewport,
    draggables: o.dimensions.draggables
  }), d = l ? yr(f) : null, p = l ? Dt(f) : null, v = {
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
  }, g = wc({
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
  if (!(!ye(o.current.client.offset, g) || !!b.combine)) {
    t(Or({
      completed: S
    }));
    return;
  }
  const E = Nc({
    current: o.current.client.offset,
    destination: g,
    reason: s
  });
  t(gc({
    newHomeClientOffset: g,
    dropDuration: E,
    completed: S
  }));
};
var Cc = Oc, Fo = () => ({
  x: window.pageXOffset,
  y: window.pageYOffset
});
function Ic(e) {
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
function _c({
  onWindowScroll: e
}) {
  function t() {
    e(Fo());
  }
  const r = ze(t), n = Ic(r);
  let o = ve;
  function s() {
    return o !== ve;
  }
  function i() {
    s() && (process.env.NODE_ENV !== "production" ? m(!1, "Cannot start scroll listener when already active") : m()), o = le(window, [n]);
  }
  function a() {
    s() || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot stop scroll listener when not active") : m()), r.cancel(), o(), o = ve;
  }
  return {
    start: i,
    stop: a,
    isActive: s
  };
}
const Ac = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH", Rc = (e) => {
  const t = _c({
    onWindowScroll: (r) => {
      e.dispatch(lc({
        newScroll: r
      }));
    }
  });
  return (r) => (n) => {
    !t.isActive() && n.type === "INITIAL_PUBLISH" && t.start(), t.isActive() && Ac(n) && t.stop(), r(n);
  };
};
var Pc = Rc, Tc = (e) => {
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
}, Bc = () => {
  const e = [], t = (o) => {
    const s = e.findIndex((a) => a.timerId === o);
    s === -1 && (process.env.NODE_ENV !== "production" ? m(!1, "Could not find timer") : m());
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
const Lc = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.droppableId === t.droppableId && e.index === t.index, Vc = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.draggableId === t.draggableId && e.droppableId === t.droppableId, $c = (e, t) => {
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
function Mt(e, t, r, n) {
  if (!e) {
    r(n(t));
    return;
  }
  const o = Tc(r);
  e(t, {
    announce: o
  }), o.wasCalled() || r(n(t));
}
var Mc = (e, t) => {
  const r = Bc();
  let n = null;
  const o = (l, d) => {
    n && (process.env.NODE_ENV !== "production" ? m(!1, "Cannot fire onBeforeCapture as a drag start has already been published") : m()), Ue("onBeforeCapture", () => {
      const p = e().onBeforeCapture;
      p && p({
        draggableId: l,
        mode: d
      });
    });
  }, s = (l, d) => {
    n && (process.env.NODE_ENV !== "production" ? m(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : m()), Ue("onBeforeDragStart", () => {
      const p = e().onBeforeDragStart;
      p && p(ut(l, d));
    });
  }, i = (l, d) => {
    n && (process.env.NODE_ENV !== "production" ? m(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : m());
    const p = ut(l, d);
    n = {
      mode: d,
      lastCritical: l,
      lastLocation: p.source,
      lastCombine: null
    }, r.add(() => {
      Ue("onDragStart", () => Mt(e().onDragStart, p, t, pt.onDragStart));
    });
  }, a = (l, d) => {
    const p = yr(d), v = Dt(d);
    n || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot fire onDragMove when onDragStart has not been called") : m());
    const b = !$c(l, n.lastCritical);
    b && (n.lastCritical = l);
    const g = !Lc(n.lastLocation, p);
    g && (n.lastLocation = p);
    const S = !Vc(n.lastCombine, v);
    if (S && (n.lastCombine = v), !b && !g && !S)
      return;
    const D = {
      ...ut(l, n.mode),
      combine: v,
      destination: p
    };
    r.add(() => {
      Ue("onDragUpdate", () => Mt(e().onDragUpdate, D, t, pt.onDragUpdate));
    });
  }, c = () => {
    n || (process.env.NODE_ENV !== "production" ? m(!1, "Can only flush responders while dragging") : m()), r.flush();
  }, u = (l) => {
    n || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot fire onDragEnd when there is no matching onDragStart") : m()), n = null, Ue("onDragEnd", () => Mt(e().onDragEnd, l, t, pt.onDragEnd));
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
}, Fc = (e, t) => {
  const r = Mc(e, t);
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
const Gc = (e) => (t) => (r) => {
  if (r.type !== "DROP_ANIMATION_FINISHED") {
    t(r);
    return;
  }
  const n = e.getState();
  n.phase !== "DROP_ANIMATING" && (process.env.NODE_ENV !== "production" ? m(!1, "Cannot finish a drop animating when no drop is occurring") : m()), e.dispatch(Or({
    completed: n.completed
  }));
};
var Uc = Gc;
const Wc = (e) => {
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
        e.getState().phase === "DROP_ANIMATING" && e.dispatch(Vo());
      }
    };
    r = requestAnimationFrame(() => {
      r = null, t = le(window, [i]);
    });
  };
};
var kc = Wc, Hc = (e) => () => (t) => (r) => {
  (r.type === "DROP_COMPLETE" || r.type === "FLUSH" || r.type === "DROP_ANIMATE") && e.stopPublishing(), t(r);
}, jc = (e) => {
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
const qc = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH";
var zc = (e) => (t) => (r) => (n) => {
  if (qc(n)) {
    e.stop(), r(n);
    return;
  }
  if (n.type === "INITIAL_PUBLISH") {
    r(n);
    const o = t.getState();
    o.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? m(!1, "Expected phase to be DRAGGING after INITIAL_PUBLISH") : m()), e.start(o);
    return;
  }
  r(n), e.scroll(t.getState());
};
const Yc = (e) => (t) => (r) => {
  if (t(r), r.type !== "PUBLISH_WHILE_DRAGGING")
    return;
  const n = e.getState();
  n.phase === "DROP_PENDING" && (n.isWaiting || e.dispatch(Lo({
    reason: n.reason
  })));
};
var Kc = Yc;
const Xc = process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
}) : Xn;
var Jc = ({
  dimensionMarshal: e,
  focusMarshal: t,
  styleMarshal: r,
  getResponders: n,
  announce: o,
  autoScroller: s
}) => Kn(ec, Xc(Ms(Ec(r), Hc(e), yc(e), Cc, Uc, kc, Kc, zc(s), Pc, jc(t), Fc(n, o))));
const Ft = () => ({
  additions: {},
  removals: {},
  modified: {}
});
function Qc({
  registry: e,
  callbacks: t
}) {
  let r = Ft(), n = null;
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
      r = Ft(), st(), t.publish(p);
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
      n && (cancelAnimationFrame(n), n = null, r = Ft());
    }
  };
}
var Go = ({
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
}, Uo = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot find document.documentElement") : m()), e;
}, Wo = () => {
  const e = Uo();
  return Go({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
}, Zc = () => {
  const e = Fo(), t = Wo(), r = e.y, n = e.x, o = Uo(), s = o.clientWidth, i = o.clientHeight, a = n + s, c = r + i;
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
}, el = ({
  critical: e,
  scrollOptions: t,
  registry: r
}) => {
  ot();
  const n = Zc(), o = n.scroll.current, s = e.droppable, i = r.droppable.getAllByType(s.type).map((f) => f.callbacks.getDimensionAndWatchScroll(o, t)), a = r.draggable.getAllByType(e.draggable.type).map((f) => f.getDimension(o)), c = {
    draggables: ho(a),
    droppables: go(i)
  };
  return st(), {
    dimensions: c,
    critical: e,
    viewport: n
  };
};
function An(e, t, r) {
  return r.descriptor.id === t.id || r.descriptor.type !== t.type ? !1 : e.droppable.getById(r.descriptor.droppableId).descriptor.mode !== "virtual" ? (process.env.NODE_ENV !== "production" && W(`
      You are attempting to add or remove a Draggable [id: ${r.descriptor.id}]
      while a drag is occurring. This is only supported for virtual lists.

      See https://github.com/hello-pangea/dnd/blob/main/docs/patterns/virtual-lists.md
    `), !1) : !0;
}
var tl = (e, t) => {
  let r = null;
  const n = Qc({
    callbacks: {
      publish: t.publishWhileDragging,
      collectionStarting: t.collectionStarting
    },
    registry: e
  }), o = (d, p) => {
    e.droppable.exists(d) || (process.env.NODE_ENV !== "production" ? m(!1, `Cannot update is enabled flag of Droppable ${d} as it is not registered`) : m()), r && t.updateDroppableIsEnabled({
      id: d,
      isEnabled: p
    });
  }, s = (d, p) => {
    r && (e.droppable.exists(d) || (process.env.NODE_ENV !== "production" ? m(!1, `Cannot update isCombineEnabled flag of Droppable ${d} as it is not registered`) : m()), t.updateDroppableIsCombineEnabled({
      id: d,
      isCombineEnabled: p
    }));
  }, i = (d, p) => {
    r && (e.droppable.exists(d) || (process.env.NODE_ENV !== "production" ? m(!1, `Cannot update the scroll on Droppable ${d} as it is not registered`) : m()), t.updateDroppableScroll({
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
    r || (process.env.NODE_ENV !== "production" ? m(!1, "Should only be subscribed when a collection is occurring") : m());
    const p = r.critical.draggable;
    d.type === "ADDITION" && An(e, p, d.value) && n.add(d.value), d.type === "REMOVAL" && An(e, p, d.value) && n.remove(d.value);
  };
  return {
    updateDroppableIsEnabled: o,
    updateDroppableIsCombineEnabled: s,
    scrollDroppable: a,
    updateDroppableScroll: i,
    startPublishing: (d) => {
      r && (process.env.NODE_ENV !== "production" ? m(!1, "Cannot start capturing critical dimensions as there is already a collection") : m());
      const p = e.draggable.getById(d.draggableId), v = e.droppable.getById(p.descriptor.droppableId), b = {
        draggable: p.descriptor,
        droppable: v.descriptor
      }, g = e.subscribe(u);
      return r = {
        critical: b,
        unsubscribe: g
      }, el({
        critical: b,
        registry: e,
        scrollOptions: d.scrollOptions
      });
    },
    stopPublishing: c
  };
}, ko = (e, t) => e.phase === "IDLE" ? !0 : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === t ? !1 : e.completed.result.reason === "DROP", rl = (e) => {
  window.scrollBy(e.x, e.y);
};
const nl = z((e) => Et(e).filter((t) => !(!t.isEnabled || !t.frame))), ol = (e, t) => nl(t).find((n) => (n.frame || (process.env.NODE_ENV !== "production" ? m(!1, "Invalid result") : m()), Oo(n.frame.pageMarginBox)(e))) || null;
var sl = ({
  center: e,
  destination: t,
  droppables: r
}) => {
  if (t) {
    const o = r[t];
    return o.frame ? o : null;
  }
  return ol(e, r);
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
var il = (e, t, r = () => Ze) => {
  const n = r(), o = e[t.size] * n.startFromPercentage, s = e[t.size] * n.maxScrollAtPercentage;
  return {
    startScrollingFrom: o,
    maxScrollValueAt: s
  };
}, Ho = ({
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
}, Ir = 1, al = (e, t, r = () => Ze) => {
  const n = r();
  if (e > t.startScrollingFrom)
    return 0;
  if (e <= t.maxScrollValueAt)
    return n.maxPixelScroll;
  if (e === t.startScrollingFrom)
    return Ir;
  const s = 1 - Ho({
    startOfRange: t.maxScrollValueAt,
    endOfRange: t.startScrollingFrom,
    current: e
  }), i = n.maxPixelScroll * n.ease(s);
  return Math.ceil(i);
}, cl = (e, t, r) => {
  const n = r(), o = n.durationDampening.accelerateAt, s = n.durationDampening.stopDampeningAt, i = t, a = s, u = Date.now() - i;
  if (u >= s)
    return e;
  if (u < o)
    return Ir;
  const f = Ho({
    startOfRange: o,
    endOfRange: a,
    current: u
  }), l = e * n.ease(f);
  return Math.ceil(l);
}, Rn = ({
  distanceToEdge: e,
  thresholds: t,
  dragStartTime: r,
  shouldUseTimeDampening: n,
  getAutoScrollerOptions: o
}) => {
  const s = al(e, t, o);
  return s === 0 ? 0 : n ? Math.max(cl(s, r, o), Ir) : s;
}, Pn = ({
  container: e,
  distanceToEdges: t,
  dragStartTime: r,
  axis: n,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: s
}) => {
  const i = il(e, n, s);
  return t[n.end] < t[n.start] ? Rn({
    distanceToEdge: t[n.end],
    thresholds: i,
    dragStartTime: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: s
  }) : -1 * Rn({
    distanceToEdge: t[n.start],
    thresholds: i,
    dragStartTime: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: s
  });
}, ll = ({
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
const ul = mo((e) => e === 0 ? 0 : e);
var jo = ({
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
    axis: Er,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: s
  }), c = Pn({
    container: t,
    distanceToEdges: i,
    dragStartTime: e,
    axis: yo,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: s
  }), u = ul({
    x: c,
    y: a
  });
  if (ye(u, Y))
    return null;
  const f = ll({
    container: t,
    subject: r,
    proposedScroll: u
  });
  return f ? ye(f, Y) ? null : f : null;
};
const dl = mo((e) => e === 0 ? 0 : e > 0 ? 1 : -1), _r = /* @__PURE__ */ (() => {
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
})(), qo = ({
  max: e,
  current: t,
  change: r
}) => {
  const n = {
    x: Math.max(t.x, e.x),
    y: Math.max(t.y, e.y)
  }, o = dl(r), s = _r({
    max: n,
    current: t,
    change: o
  });
  return !s || o.x !== 0 && s.x === 0 || o.y !== 0 && s.y === 0;
}, Ar = (e, t) => qo({
  current: e.scroll.current,
  max: e.scroll.max,
  change: t
}), fl = (e, t) => {
  if (!Ar(e, t))
    return null;
  const r = e.scroll.max, n = e.scroll.current;
  return _r({
    current: n,
    max: r,
    change: t
  });
}, Rr = (e, t) => {
  const r = e.frame;
  return r ? qo({
    current: r.scroll.current,
    max: r.scroll.max,
    change: t
  }) : !1;
}, pl = (e, t) => {
  const r = e.frame;
  return !r || !Rr(e, t) ? null : _r({
    current: r.scroll.current,
    max: r.scroll.max,
    change: t
  });
};
var ml = ({
  viewport: e,
  subject: t,
  center: r,
  dragStartTime: n,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: s
}) => {
  const i = jo({
    dragStartTime: n,
    container: e.frame,
    subject: t,
    center: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: s
  });
  return i && Ar(e, i) ? i : null;
}, gl = ({
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
  const a = jo({
    dragStartTime: n,
    container: i.pageMarginBox,
    subject: t,
    center: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: s
  });
  return a && Rr(e, a) ? a : null;
}, Tn = ({
  state: e,
  dragStartTime: t,
  shouldUseTimeDampening: r,
  scrollWindow: n,
  scrollDroppable: o,
  getAutoScrollerOptions: s
}) => {
  const i = e.current.page.borderBoxCenter, c = e.dimensions.draggables[e.critical.draggable.id].page.marginBox;
  if (e.isWindowScrollAllowed) {
    const l = e.viewport, d = ml({
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
  const u = sl({
    center: i,
    destination: ie(e.impact),
    droppables: e.dimensions.droppables
  });
  if (!u)
    return;
  const f = gl({
    dragStartTime: t,
    droppable: u,
    subject: c,
    center: i,
    shouldUseTimeDampening: r,
    getAutoScrollerOptions: s
  });
  f && o(u.descriptor.id, f);
}, hl = ({
  scrollWindow: e,
  scrollDroppable: t,
  getAutoScrollerOptions: r = () => Ze
}) => {
  const n = ze(e), o = ze(t);
  let s = null;
  const i = (u) => {
    s || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot fluid scroll if not dragging") : m());
    const {
      shouldUseTimeDampening: f,
      dragStartTime: l
    } = s;
    Tn({
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
      ot(), s && (process.env.NODE_ENV !== "production" ? m(!1, "Cannot start auto scrolling when already started") : m());
      const f = Date.now();
      let l = !1;
      const d = () => {
        l = !0;
      };
      Tn({
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
}, bl = ({
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
    if (!Rr(a, c))
      return c;
    const u = pl(a, c);
    if (!u)
      return t(a.descriptor.id, c), null;
    const f = se(c, u);
    return t(a.descriptor.id, f), se(c, f);
  }, s = (a, c, u) => {
    if (!a || !Ar(c, u))
      return u;
    const f = fl(c, u);
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
    u || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot perform a jump scroll when there is no destination") : m());
    const f = o(a.dimensions.droppables[u], c);
    if (!f)
      return;
    const l = a.viewport, d = s(a.isWindowScrollAllowed, l, f);
    d && n(a, d);
  };
}, vl = ({
  scrollDroppable: e,
  scrollWindow: t,
  move: r,
  getAutoScrollerOptions: n
}) => {
  const o = hl({
    scrollWindow: t,
    scrollDroppable: e,
    getAutoScrollerOptions: n
  }), s = bl({
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
const Le = "data-rfd", Ve = (() => {
  const e = `${Le}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), ir = (() => {
  const e = `${Le}-draggable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), yl = (() => {
  const e = `${Le}-droppable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), Bn = {
  contextId: `${Le}-scroll-container-context-id`
}, El = (e) => (t) => `[${t}="${e}"]`, We = (e, t) => e.map((r) => {
  const n = r.styles[t];
  return n ? `${r.selector} { ${n} }` : "";
}).join(" "), Dl = "pointer-events: none;";
var Sl = (e) => {
  const t = El(e), r = (() => {
    const a = `
      cursor: -webkit-grab;
      cursor: grab;
    `;
    return {
      selector: t(Ve.contextId),
      styles: {
        always: `
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,
        resting: a,
        dragging: Dl,
        dropAnimating: a
      }
    };
  })(), n = (() => {
    const a = `
      transition: ${je.outOfTheWay};
    `;
    return {
      selector: t(ir.contextId),
      styles: {
        dragging: a,
        dropAnimating: a,
        userCancel: a
      }
    };
  })(), o = {
    selector: t(yl.contextId),
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
const Nl = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? N.useLayoutEffect : N.useEffect;
var ae = Nl;
const Gt = () => {
  const e = document.querySelector("head");
  return e || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot find the head to append a style to") : m()), e;
}, Ln = (e) => {
  const t = document.createElement("style");
  return e && t.setAttribute("nonce", e), t.type = "text/css", t;
};
function wl(e, t) {
  const r = B(() => Sl(e), [e]), n = N.useRef(null), o = N.useRef(null), s = C(z((l) => {
    const d = o.current;
    d || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot set dynamic style element if it is not set") : m()), d.textContent = l;
  }), []), i = C((l) => {
    const d = n.current;
    d || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot set dynamic style element if it is not set") : m()), d.textContent = l;
  }, []);
  ae(() => {
    !n.current && !o.current || (process.env.NODE_ENV !== "production" ? m(!1, "style elements already mounted") : m());
    const l = Ln(t), d = Ln(t);
    return n.current = l, o.current = d, l.setAttribute(`${Le}-always`, e), d.setAttribute(`${Le}-dynamic`, e), Gt().appendChild(l), Gt().appendChild(d), i(r.always), s(r.resting), () => {
      const p = (v) => {
        const b = v.current;
        b || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot unmount ref as it is not set") : m()), Gt().removeChild(b), v.current = null;
      };
      p(n), p(o);
    };
  }, [t, i, s, r.always, r.resting, e]);
  const a = C(() => s(r.dragging), [s, r.dragging]), c = C((l) => {
    if (l === "DROP") {
      s(r.dropAnimating);
      return;
    }
    s(r.userCancel);
  }, [s, r.dropAnimating, r.userCancel]), u = C(() => {
    o.current && s(r.resting);
  }, [s, r.resting]);
  return B(() => ({
    dragging: a,
    dropping: c,
    resting: u
  }), [a, c, u]);
}
function zo(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var Yo = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function it(e) {
  return e instanceof Yo(e).HTMLElement;
}
function Ko(e, t) {
  const r = `[${Ve.contextId}="${e}"]`, n = zo(document, r);
  if (!n.length)
    return process.env.NODE_ENV !== "production" && W(`Unable to find any drag handles in the context "${e}"`), null;
  const o = n.find((s) => s.getAttribute(Ve.draggableId) === t);
  return o ? it(o) ? o : (process.env.NODE_ENV !== "production" && W("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && W(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
function xl(e) {
  const t = N.useRef({}), r = N.useRef(null), n = N.useRef(null), o = N.useRef(!1), s = C(function(d, p) {
    const v = {
      id: d,
      focus: p
    };
    return t.current[d] = v, function() {
      const g = t.current;
      g[d] !== v && delete g[d];
    };
  }, []), i = C(function(d) {
    const p = Ko(e, d);
    p && p !== document.activeElement && p.focus();
  }, [e]), a = C(function(d, p) {
    r.current === d && (r.current = p);
  }, []), c = C(function() {
    n.current || o.current && (n.current = requestAnimationFrame(() => {
      n.current = null;
      const d = r.current;
      d && i(d);
    }));
  }, [i]), u = C(function(d) {
    r.current = null;
    const p = document.activeElement;
    p && p.getAttribute(Ve.draggableId) === d && (r.current = d);
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
function Ol() {
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
    return d || (process.env.NODE_ENV !== "production" ? m(!1, `Cannot find draggable entry with id [${l}]`) : m()), d;
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
    return d || (process.env.NODE_ENV !== "production" ? m(!1, `Cannot find droppable entry with id [${l}]`) : m()), d;
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
function Cl() {
  const e = B(Ol, []);
  return N.useEffect(() => function() {
    _.version.startsWith("16") || _.version.startsWith("17") ? requestAnimationFrame(e.clean) : e.clean();
  }, [e]), e;
}
var Pr = _.createContext(null), et = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot find document.body") : m()), e;
};
const Il = {
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
var _l = Il;
const Al = (e) => `rfd-announcement-${e}`;
function Rl(e) {
  const t = B(() => Al(e), [e]), r = N.useRef(null);
  return N.useEffect(function() {
    const s = document.createElement("div");
    return r.current = s, s.id = t, s.setAttribute("aria-live", "assertive"), s.setAttribute("aria-atomic", "true"), be(s.style, _l), et().appendChild(s), function() {
      setTimeout(function() {
        const c = et();
        c.contains(s) && c.removeChild(s), s === r.current && (r.current = null);
      });
    };
  }, [t]), C((o) => {
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
const Xo = {
  separator: "::"
};
function Tl(e, t = Xo) {
  return B(() => `${e}${t.separator}${Pl++}`, [t.separator, e]);
}
function Bl(e, t = Xo) {
  const r = _.useId();
  return B(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var Tr = "useId" in _ ? Bl : Tl;
function Ll({
  contextId: e,
  uniqueId: t
}) {
  return `rfd-hidden-text-${e}-${t}`;
}
function Vl({
  contextId: e,
  text: t
}) {
  const r = Tr("hidden-text", {
    separator: "-"
  }), n = B(() => Ll({
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
var wt = _.createContext(null), $l = {
  react: "^16.8.5 || ^17.0.0 || ^18.0.0",
  "react-dom": "^16.8.5 || ^17.0.0 || ^18.0.0"
};
const Ml = /(\d+)\.(\d+)\.(\d+)/, Vn = (e) => {
  const t = Ml.exec(e);
  t == null && (process.env.NODE_ENV !== "production" ? m(!1, `Unable to parse React version ${e}`) : m());
  const r = Number(t[1]), n = Number(t[2]), o = Number(t[3]);
  return {
    major: r,
    minor: n,
    patch: o,
    raw: e
  };
}, Fl = (e, t) => t.major > e.major ? !0 : t.major < e.major ? !1 : t.minor > e.minor ? !0 : t.minor < e.minor ? !1 : t.patch >= e.patch;
var Gl = (e, t) => {
  const r = Vn(e), n = Vn(t);
  Fl(r, n) || process.env.NODE_ENV !== "production" && W(`
    React version: [${n.raw}]
    does not satisfy expected peer dependency version: [${r.raw}]

    This can result in run time bugs, and even fatal crashes
  `);
};
const Ut = `
  We expect a html5 doctype: <!doctype html>
  This is to ensure consistent browser layout and measurement

  More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/doctype.md
`;
var Ul = (e) => {
  const t = e.doctype;
  if (!t) {
    process.env.NODE_ENV !== "production" && W(`
      No <!doctype html> found.

      ${Ut}
    `);
    return;
  }
  t.name.toLowerCase() !== "html" && process.env.NODE_ENV !== "production" && W(`
      Unexpected <!doctype> found: (${t.name})

      ${Ut}
    `), t.publicId !== "" && process.env.NODE_ENV !== "production" && W(`
      Unexpected <!doctype> publicId found: (${t.publicId})
      A html5 doctype does not have a publicId

      ${Ut}
    `);
};
function Br(e) {
  process.env.NODE_ENV !== "production" && e();
}
function at(e, t) {
  Br(() => {
    N.useEffect(() => {
      try {
        e();
      } catch (r) {
        tr(`
          A setup problem was encountered.

          > ${r.message}
        `);
      }
    }, t);
  });
}
function Wl() {
  at(() => {
    Gl($l.react, _.version), Ul(document);
  }, []);
}
function Lr(e) {
  const t = N.useRef(e);
  return N.useEffect(() => {
    t.current = e;
  }), t;
}
function kl() {
  let e = null;
  function t() {
    return !!e;
  }
  function r(i) {
    return i === e;
  }
  function n(i) {
    e && (process.env.NODE_ENV !== "production" ? m(!1, "Cannot claim lock as it is already claimed") : m());
    const a = {
      abandon: i
    };
    return e = a, a;
  }
  function o() {
    e || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot release lock when there is no lock") : m()), e = null;
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
const Hl = 9, jl = 13, Vr = 27, Jo = 32, ql = 33, zl = 34, Yl = 35, Kl = 36, Xl = 37, Jl = 38, Ql = 39, Zl = 40, eu = {
  [jl]: !0,
  [Hl]: !0
};
var Qo = (e) => {
  eu[e.keyCode] && e.preventDefault();
};
const tu = (() => {
  const e = "visibilitychange";
  return typeof document > "u" ? e : [e, `ms${e}`, `webkit${e}`, `moz${e}`, `o${e}`].find((n) => `on${n}` in document) || e;
})();
var xt = tu;
const Zo = 0, $n = 5;
function ru(e, t) {
  return Math.abs(t.x - e.x) >= $n || Math.abs(t.y - e.y) >= $n;
}
const Mn = {
  type: "IDLE"
};
function nu({
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
      if (s !== Zo)
        return;
      const c = {
        x: i,
        y: a
      }, u = r();
      if (u.type === "DRAGGING") {
        o.preventDefault(), u.actions.move(c);
        return;
      }
      u.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? m(!1, "Cannot be IDLE") : m());
      const f = u.point;
      if (!ru(f, c))
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
      if (o.keyCode === Vr) {
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
      if (s.type === "IDLE" && (process.env.NODE_ENV !== "production" ? m(!1, "Unexpected phase") : m()), s.actions.shouldRespectForcePress()) {
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
function ou(e) {
  const t = N.useRef(Mn), r = N.useRef(ve), n = B(() => ({
    eventName: "mousedown",
    fn: function(l) {
      if (l.defaultPrevented || l.button !== Zo || l.ctrlKey || l.metaKey || l.shiftKey || l.altKey)
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
  }), [e]), s = C(function() {
    const l = {
      passive: !1,
      capture: !0
    };
    r.current = le(window, [o, n], l);
  }, [o, n]), i = C(() => {
    t.current.type !== "IDLE" && (t.current = Mn, r.current(), s());
  }, [s]), a = C(() => {
    const f = t.current;
    i(), f.type === "DRAGGING" && f.actions.cancel({
      shouldBlockNextClick: !0
    }), f.type === "PENDING" && f.actions.abort();
  }, [i]), c = C(function() {
    const l = {
      capture: !0,
      passive: !1
    }, d = nu({
      cancel: a,
      completed: i,
      getPhase: () => t.current,
      setPhase: (p) => {
        t.current = p;
      }
    });
    r.current = le(window, d, l);
  }, [a, i]), u = C(function(l, d) {
    t.current.type !== "IDLE" && (process.env.NODE_ENV !== "production" ? m(!1, "Expected to move from IDLE to PENDING drag") : m()), t.current = {
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
function su() {
}
const iu = {
  [zl]: !0,
  [ql]: !0,
  [Kl]: !0,
  [Yl]: !0
};
function au(e, t) {
  function r() {
    t(), e.cancel();
  }
  function n() {
    t(), e.drop();
  }
  return [{
    eventName: "keydown",
    fn: (o) => {
      if (o.keyCode === Vr) {
        o.preventDefault(), r();
        return;
      }
      if (o.keyCode === Jo) {
        o.preventDefault(), n();
        return;
      }
      if (o.keyCode === Zl) {
        o.preventDefault(), e.moveDown();
        return;
      }
      if (o.keyCode === Jl) {
        o.preventDefault(), e.moveUp();
        return;
      }
      if (o.keyCode === Ql) {
        o.preventDefault(), e.moveRight();
        return;
      }
      if (o.keyCode === Xl) {
        o.preventDefault(), e.moveLeft();
        return;
      }
      if (iu[o.keyCode]) {
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
function cu(e) {
  const t = N.useRef(su), r = B(() => ({
    eventName: "keydown",
    fn: function(s) {
      if (s.defaultPrevented || s.keyCode !== Jo)
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
        c || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot stop capturing a keyboard drag when not capturing") : m()), c = !1, t.current(), n();
      }
      t.current = le(window, au(u, f), {
        capture: !0,
        passive: !1
      });
    }
  }), [e]), n = C(function() {
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
const Wt = {
  type: "IDLE"
}, lu = 120, uu = 0.15;
function du({
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
      r.keyCode === Vr && r.preventDefault(), e();
    }
  }, {
    eventName: xt,
    fn: e
  }];
}
function fu({
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
      o.type === "IDLE" && (process.env.NODE_ENV, m());
      const s = n.touches[0];
      if (!s || !(s.force >= uu))
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
function pu(e) {
  const t = N.useRef(Wt), r = N.useRef(ve), n = C(function() {
    return t.current;
  }, []), o = C(function(p) {
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
  }), [e]), i = C(function() {
    const p = {
      capture: !0,
      passive: !1
    };
    r.current = le(window, [s], p);
  }, [s]), a = C(() => {
    const d = t.current;
    d.type !== "IDLE" && (d.type === "PENDING" && clearTimeout(d.longPressTimerId), o(Wt), r.current(), i());
  }, [i, o]), c = C(() => {
    const d = t.current;
    a(), d.type === "DRAGGING" && d.actions.cancel({
      shouldBlockNextClick: !0
    }), d.type === "PENDING" && d.actions.abort();
  }, [a]), u = C(function() {
    const p = {
      capture: !0,
      passive: !1
    }, v = {
      cancel: c,
      completed: a,
      getPhase: n
    }, b = le(window, fu(v), p), g = le(window, du(v), p);
    r.current = function() {
      b(), g();
    };
  }, [c, n, a]), f = C(function() {
    const p = n();
    p.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? m(!1, `Cannot start dragging from phase ${p.type}`) : m());
    const v = p.actions.fluidLift(p.point);
    o({
      type: "DRAGGING",
      actions: v,
      hasMoved: !1
    });
  }, [n, o]), l = C(function(p, v) {
    n().type !== "IDLE" && (process.env.NODE_ENV !== "production" ? m(!1, "Expected to move from IDLE to PENDING drag") : m());
    const b = setTimeout(f, lu);
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
      v.type === "PENDING" && (clearTimeout(v.longPressTimerId), o(Wt));
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
function mu(e) {
  Br(() => {
    const t = Lr(e);
    at(() => {
      t.current.length !== e.length && (process.env.NODE_ENV !== "production" ? m(!1, "Cannot change the amount of sensor hooks after mounting") : m(!1));
    });
  });
}
const gu = ["input", "button", "textarea", "select", "option", "optgroup", "video", "audio"];
function es(e, t) {
  if (t == null)
    return !1;
  if (gu.includes(t.tagName.toLowerCase()))
    return !0;
  const n = t.getAttribute("contenteditable");
  return n === "true" || n === "" ? !0 : t === e ? !1 : es(e, t.parentElement);
}
function hu(e, t) {
  const r = t.target;
  return it(r) ? es(e, r) : !1;
}
var bu = (e) => pe(e.getBoundingClientRect()).center;
function vu(e) {
  return e instanceof Yo(e).Element;
}
const yu = (() => {
  const e = "matches";
  return typeof document > "u" ? e : [e, "msMatchesSelector", "webkitMatchesSelector"].find((n) => n in Element.prototype) || e;
})();
function ts(e, t) {
  return e == null ? null : e[yu](t) ? e : ts(e.parentElement, t);
}
function Eu(e, t) {
  return e.closest ? e.closest(t) : ts(e, t);
}
function Du(e) {
  return `[${Ve.contextId}="${e}"]`;
}
function Su(e, t) {
  const r = t.target;
  if (!vu(r))
    return process.env.NODE_ENV !== "production" && W("event.target must be a Element"), null;
  const n = Du(e), o = Eu(r, n);
  return o ? it(o) ? o : (process.env.NODE_ENV !== "production" && W("drag handle must be a HTMLElement"), null) : null;
}
function Nu(e, t) {
  const r = Su(e, t);
  return r ? r.getAttribute(Ve.draggableId) : null;
}
function wu(e, t) {
  const r = `[${ir.contextId}="${e}"]`, o = zo(document, r).find((s) => s.getAttribute(ir.id) === t);
  return o ? it(o) ? o : (process.env.NODE_ENV !== "production" && W("Draggable element is not a HTMLElement"), null) : null;
}
function xu(e) {
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
function rs({
  lockAPI: e,
  store: t,
  registry: r,
  draggableId: n
}) {
  if (e.isClaimed())
    return !1;
  const o = r.draggable.findById(n);
  return o ? !(!o.options.isEnabled || !ko(t.getState(), n)) : (process.env.NODE_ENV !== "production" && W(`Unable to find draggable with id: ${n}`), !1);
}
function Ou({
  lockAPI: e,
  contextId: t,
  store: r,
  registry: n,
  draggableId: o,
  forceSensorStop: s,
  sourceEvent: i
}) {
  if (!rs({
    lockAPI: e,
    store: r,
    registry: n,
    draggableId: o
  }))
    return null;
  const c = n.draggable.getById(o), u = wu(t, c.descriptor.id);
  if (!u)
    return process.env.NODE_ENV !== "production" && W(`Unable to find draggable element with id: ${o}`), null;
  if (i && !c.options.canDragInteractiveElements && hu(u, i))
    return null;
  const f = e.claim(s || ve);
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
    l !== "PRE_DRAG" && (w(), process.env.NODE_ENV !== "production" ? m(!1, `Cannot lift in phase ${l}`) : m()), r.dispatch(rc(h.liftActionArgs)), l = "DRAGGING";
    function I(x, P = {
      shouldBlockNextClick: !1
    }) {
      if (h.cleanup(), P.shouldBlockNextClick) {
        const A = le(window, [{
          eventName: "click",
          fn: xu,
          options: {
            once: !0,
            passive: !1,
            capture: !0
          }
        }]);
        setTimeout(A);
      }
      w(), r.dispatch(Lo({
        reason: x
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
      drop: (x) => I("DROP", x),
      cancel: (x) => I("CANCEL", x),
      ...h.actions
    };
  }
  function S(h) {
    const w = ze((x) => {
      b(() => Bo({
        client: x
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
      moveUp: () => b(dc),
      moveRight: () => b(pc),
      moveDown: () => b(fc),
      moveLeft: () => b(mc)
    };
    return g({
      liftActionArgs: {
        id: o,
        clientSelection: bu(u),
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
    fluidLift: S,
    snapLift: D,
    abort: E
  };
}
const Cu = [ou, cu, pu];
function Iu({
  contextId: e,
  store: t,
  registry: r,
  customSensors: n,
  enableDefaultSensors: o
}) {
  const s = [...o ? Cu : [], ...n || []], i = N.useState(() => kl())[0], a = C(function(g, S) {
    tt(g) && !tt(S) && i.tryAbandon();
  }, [i]);
  ae(function() {
    let g = t.getState();
    return t.subscribe(() => {
      const D = t.getState();
      a(g, D), g = D;
    });
  }, [i, t, a]), ae(() => i.tryAbandon, [i.tryAbandon]);
  const c = C((b) => rs({
    lockAPI: i,
    registry: r,
    store: t,
    draggableId: b
  }), [i, r, t]), u = C((b, g, S) => Ou({
    lockAPI: i,
    registry: r,
    contextId: e,
    store: t,
    draggableId: b,
    forceSensorStop: g || null,
    sourceEvent: S && S.sourceEvent ? S.sourceEvent : null
  }), [e, i, r, t]), f = C((b) => Nu(e, b), [e]), l = C((b) => {
    const g = r.draggable.findById(b);
    return g ? g.options : null;
  }, [r.draggable]), d = C(function() {
    i.isClaimed() && (i.tryAbandon(), t.getState().phase !== "IDLE" && t.dispatch(xr()));
  }, [i, t]), p = C(() => i.isClaimed(), [i]), v = B(() => ({
    canGetLock: c,
    tryGetLock: u,
    findClosestDraggableId: f,
    findOptionsForDraggable: l,
    tryReleaseLock: d,
    isLockClaimed: p
  }), [c, u, f, l, d, p]);
  mu(s);
  for (let b = 0; b < s.length; b++)
    s[b](v);
}
const _u = (e) => ({
  onBeforeCapture: (t) => {
    const r = () => {
      e.onBeforeCapture && e.onBeforeCapture(t);
    };
    _.version.startsWith("16") || _.version.startsWith("17") ? r() : cr.flushSync(r);
  },
  onBeforeDragStart: e.onBeforeDragStart,
  onDragStart: e.onDragStart,
  onDragEnd: e.onDragEnd,
  onDragUpdate: e.onDragUpdate
}), Au = (e) => ({
  ...Ze,
  ...e.autoScrollerOptions,
  durationDampening: {
    ...Ze.durationDampening,
    ...e.autoScrollerOptions
  }
});
function ke(e) {
  return e.current || (process.env.NODE_ENV !== "production" ? m(!1, "Could not find store from lazy ref") : m()), e.current;
}
function Ru(e) {
  const {
    contextId: t,
    setCallbacks: r,
    sensors: n,
    nonce: o,
    dragHandleUsageInstructions: s
  } = e, i = N.useRef(null);
  Wl();
  const a = Lr(e), c = C(() => _u(a.current), [a]), u = C(() => Au(a.current), [a]), f = Rl(t), l = Vl({
    contextId: t,
    text: s
  }), d = wl(t, o), p = C((A) => {
    ke(i).dispatch(A);
  }, []), v = B(() => zr({
    publishWhileDragging: oc,
    updateDroppableScroll: ic,
    updateDroppableIsEnabled: ac,
    updateDroppableIsCombineEnabled: cc,
    collectionStarting: sc
  }, p), [p]), b = Cl(), g = B(() => tl(b, v), [b, v]), S = B(() => vl({
    scrollWindow: rl,
    scrollDroppable: g.scrollDroppable,
    getAutoScrollerOptions: u,
    ...zr({
      move: Bo
    }, p)
  }), [g.scrollDroppable, p, u]), D = xl(t), E = B(() => Jc({
    announce: f,
    autoScroller: S,
    dimensionMarshal: g,
    focusMarshal: D,
    getResponders: c,
    styleMarshal: d
  }), [f, S, g, D, c, d]);
  process.env.NODE_ENV !== "production" && i.current && i.current !== E && process.env.NODE_ENV !== "production" && W("unexpected store change"), i.current = E;
  const y = C(() => {
    const A = ke(i);
    A.getState().phase !== "IDLE" && A.dispatch(xr());
  }, []), h = C(() => {
    const A = ke(i).getState();
    return A.phase === "DROP_ANIMATING" ? !0 : A.phase === "IDLE" ? !1 : A.isDragging;
  }, []), w = B(() => ({
    isDragging: h,
    tryAbort: y
  }), [h, y]);
  r(w);
  const I = C((A) => ko(ke(i).getState(), A), []), x = C(() => Oe(ke(i).getState()), []), P = B(() => ({
    marshal: g,
    focus: D,
    contextId: t,
    canLift: I,
    isMovementAllowed: x,
    dragHandleUsageInstructionsId: l,
    registry: b
  }), [t, g, l, D, I, x, b]);
  return Iu({
    contextId: t,
    store: E,
    registry: b,
    customSensors: n || null,
    enableDefaultSensors: e.enableDefaultSensors !== !1
  }), N.useEffect(() => y, [y]), _.createElement(wt.Provider, {
    value: P
  }, _.createElement(Ii, {
    context: Pr,
    store: E
  }, e.children));
}
let Pu = 0;
function Tu() {
  return B(() => `${Pu++}`, []);
}
function Bu() {
  return _.useId();
}
var Lu = "useId" in _ ? Bu : Tu;
function Yd(e) {
  const t = Lu(), r = e.dragHandleUsageInstructions || pt.dragHandleUsageInstructions;
  return _.createElement(Hi, null, (n) => _.createElement(Ru, {
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
const Fn = {
  dragging: 5e3,
  dropAnimating: 4500
}, Vu = (e, t) => t ? je.drop(t.duration) : e ? je.snap : je.fluid, $u = (e, t) => {
  if (e)
    return t ? Qe.opacity.drop : Qe.opacity.combining;
}, Mu = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function Fu(e) {
  const r = e.dimension.client, {
    offset: n,
    combineWith: o,
    dropping: s
  } = e, i = !!o, a = Mu(e), c = !!s, u = c ? or.drop(n, i) : or.moveTo(n);
  return {
    position: "fixed",
    top: r.marginBox.top,
    left: r.marginBox.left,
    boxSizing: "border-box",
    width: r.borderBox.width,
    height: r.borderBox.height,
    transition: Vu(a, s),
    transform: u,
    opacity: $u(i, c),
    zIndex: c ? Fn.dropAnimating : Fn.dragging,
    pointerEvents: "none"
  };
}
function Gu(e) {
  return {
    transform: or.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function Uu(e) {
  return e.type === "DRAGGING" ? Fu(e) : Gu(e);
}
function Wu(e, t, r = Y) {
  const n = window.getComputedStyle(t), o = t.getBoundingClientRect(), s = co(o, n), i = ht(s, r), a = {
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
function ku(e) {
  const t = Tr("draggable"), {
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
  }), [s, a, i]), u = C((p) => {
    const v = o();
    return v || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot get dimension when no ref is set") : m()), Wu(r, v, p);
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
var $r = _.createContext(null);
function ns(e) {
  e && it(e) || (process.env.NODE_ENV !== "production" ? m(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : m());
}
function Hu(e, t, r) {
  at(() => {
    function n(s) {
      return `Draggable[id: ${s}]: `;
    }
    const o = e.draggableId;
    o || (process.env.NODE_ENV !== "production" ? m(!1, "Draggable requires a draggableId") : m(!1)), typeof o != "string" && (process.env.NODE_ENV !== "production" ? m(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof o}] (value: ${o})`) : m(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? m(!1, `${n(o)} requires an integer index prop`) : m(!1)), e.mapped.type !== "DRAGGING" && (ns(r()), e.isEnabled && (Ko(t, o) || (process.env.NODE_ENV !== "production" ? m(!1, `${n(o)} Unable to find drag handle`) : m(!1))));
  });
}
function ju(e) {
  Br(() => {
    const t = N.useRef(e);
    at(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? m(!1, "Draggable isClone prop value changed during component life") : m(!1));
    }, [e]);
  });
}
function yt(e) {
  const t = N.useContext(e);
  return t || (process.env.NODE_ENV !== "production" ? m(!1, "Could not find required context") : m()), t;
}
function qu(e) {
  e.preventDefault();
}
const zu = (e) => {
  const t = N.useRef(null), r = C((w = null) => {
    t.current = w;
  }, []), n = C(() => t.current, []), {
    contextId: o,
    dragHandleUsageInstructionsId: s,
    registry: i
  } = yt(wt), {
    type: a,
    droppableId: c
  } = yt($r), u = B(() => ({
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
  if (Hu(e, o, n), ju(b), !b) {
    const w = B(() => ({
      descriptor: u,
      registry: i,
      getDraggableRef: n,
      canDragInteractiveElements: v,
      shouldRespectForcePress: p,
      isEnabled: d
    }), [u, i, n, v, p, d]);
    ku(w);
  }
  const D = B(() => d ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": s,
    "data-rfd-drag-handle-draggable-id": l,
    "data-rfd-drag-handle-context-id": o,
    draggable: !1,
    onDragStart: qu
  } : null, [o, s, l, d]), E = C((w) => {
    g.type === "DRAGGING" && g.dropping && w.propertyName === "transform" && (_.version.startsWith("16") || _.version.startsWith("17") ? S() : cr.flushSync(S));
  }, [S, g]), y = B(() => {
    const w = Uu(g), I = g.type === "DRAGGING" && g.dropping ? E : void 0;
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
  }, [o, D, l, g, E, r]), h = B(() => ({
    draggableId: u.id,
    type: u.type,
    source: {
      index: u.index,
      droppableId: u.droppableId
    }
  }), [u.droppableId, u.id, u.index, u.type]);
  return _.createElement(_.Fragment, null, f(y, g.snapshot, h));
};
var Yu = zu, os = (e, t) => e === t, ss = (e) => {
  const {
    combine: t,
    destination: r
  } = e;
  return r ? r.droppableId : t ? t.droppableId : null;
};
const Ku = (e) => e.combine ? e.combine.draggableId : null, Xu = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function Ju() {
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
      const i = o.current.client.offset, a = o.dimensions.draggables[s.draggableId], c = ie(o.impact), u = Xu(o.impact), f = o.forceShouldAnimate;
      return r(e(i.x, i.y), o.movementMode, a, s.isClone, c, u, f);
    }
    if (o.phase === "DROP_ANIMATING") {
      const i = o.completed;
      if (i.result.draggableId !== s.draggableId)
        return null;
      const a = s.isClone, c = o.dimensions.draggables[s.draggableId], u = i.result, f = u.mode, l = ss(u), d = Ku(u), v = {
        duration: o.dropDuration,
        curve: Cr.drop,
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
function is(e = null) {
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
    snapshot: is(null)
  }
};
function Zu() {
  const e = z((i, a) => ({
    x: i,
    y: a
  })), t = z(is), r = z((i, a = null, c) => ({
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
const ed = () => {
  const e = Ju(), t = Zu();
  return (n, o) => e(n, o) || t(n, o) || Qu;
}, td = {
  dropAnimationFinished: Vo
}, rd = io(ed, td, null, {
  context: Pr,
  areStatePropsEqual: os
})(Yu);
var nd = rd;
function as(e) {
  return yt($r).isUsingCloneFor === e.draggableId && !e.isClone ? null : _.createElement(nd, e);
}
function Kd(e) {
  const t = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0, r = !!e.disableInteractiveElementBlocking, n = !!e.shouldRespectForcePress;
  return _.createElement(as, be({}, e, {
    isClone: !1,
    isEnabled: t,
    canDragInteractiveElements: r,
    shouldRespectForcePress: n
  }));
}
const Mr = (e) => (t) => e === t, od = Mr("scroll"), sd = Mr("auto"), id = Mr("visible"), Gn = (e, t) => t(e.overflowX) || t(e.overflowY), ad = (e, t) => t(e.overflowX) && t(e.overflowY), cs = (e) => {
  const t = window.getComputedStyle(e), r = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return Gn(r, od) || Gn(r, sd);
}, cd = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = et(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, m()), !cs(e))
    return !1;
  const r = window.getComputedStyle(t), n = {
    overflowX: r.overflowX,
    overflowY: r.overflowY
  };
  return ad(n, id) || process.env.NODE_ENV !== "production" && W(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, ls = (e) => e == null ? null : e === document.body ? cd() ? e : null : e === document.documentElement ? null : cs(e) ? e : ls(e.parentElement);
var us = ls, ld = (e) => {
  !e || !us(e.parentElement) || process.env.NODE_ENV !== "production" && W(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, ar = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const ds = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : ds(e.parentElement) : !1;
var ud = (e) => {
  const t = us(e), r = ds(e);
  return {
    closestScrollable: t,
    isFixedOnPage: r
  };
}, dd = ({
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
    } = a, v = Go({
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
  })(), u = o === "vertical" ? Er : yo, f = Be({
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
const fd = (e, t) => {
  const r = lo(e);
  if (!t || e !== t)
    return r;
  const n = r.paddingBox.top - t.scrollTop, o = r.paddingBox.left - t.scrollLeft, s = n + t.scrollHeight, i = o + t.scrollWidth, c = hr({
    top: n,
    right: i,
    bottom: s,
    left: o
  }, r.border);
  return br({
    borderBox: c,
    margin: r.margin,
    border: r.border,
    padding: r.padding
  });
};
var pd = ({
  ref: e,
  descriptor: t,
  env: r,
  windowScroll: n,
  direction: o,
  isDropDisabled: s,
  isCombineEnabled: i,
  shouldClipSubject: a
}) => {
  const c = r.closestScrollable, u = fd(e, c), f = ht(u, n), l = (() => {
    if (!c)
      return null;
    const p = lo(c), v = {
      scrollHeight: c.scrollHeight,
      scrollWidth: c.scrollWidth
    };
    return {
      client: p,
      page: ht(p, n),
      scroll: ar(c),
      scrollSize: v,
      shouldClipSubject: a
    };
  })();
  return dd({
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
const md = {
  passive: !1
}, gd = {
  passive: !0
};
var Un = (e) => e.shouldPublishImmediately ? md : gd;
const ft = (e) => e && e.env.closestScrollable || null;
function hd(e) {
  const t = N.useRef(null), r = yt(wt), n = Tr("droppable"), {
    registry: o,
    marshal: s
  } = r, i = Lr(e), a = B(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), c = N.useRef(a), u = B(() => z((y, h) => {
    t.current || (process.env.NODE_ENV !== "production" ? m(!1, "Can only update scroll when dragging") : m());
    const w = {
      x: y,
      y: h
    };
    s.updateDroppableScroll(a.id, w);
  }), [a.id, s]), f = C(() => {
    const y = t.current;
    return !y || !y.env.closestScrollable ? Y : ar(y.env.closestScrollable);
  }, []), l = C(() => {
    const y = f();
    u(y.x, y.y);
  }, [f, u]), d = B(() => ze(l), [l]), p = C(() => {
    const y = t.current, h = ft(y);
    if (y && h || (process.env.NODE_ENV !== "production" ? m(!1, "Could not find scroll options while scrolling") : m()), y.scrollOptions.shouldPublishImmediately) {
      l();
      return;
    }
    d();
  }, [d, l]), v = C((y, h) => {
    t.current && (process.env.NODE_ENV !== "production" ? m(!1, "Cannot collect a droppable while a drag is occurring") : m());
    const w = i.current, I = w.getDroppableRef();
    I || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot collect without a droppable ref") : m());
    const x = ud(I), P = {
      ref: I,
      descriptor: a,
      env: x,
      scrollOptions: h
    };
    t.current = P;
    const A = pd({
      ref: I,
      descriptor: a,
      env: x,
      windowScroll: y,
      direction: w.direction,
      isDropDisabled: w.isDropDisabled,
      isCombineEnabled: w.isCombineEnabled,
      shouldClipSubject: !w.ignoreContainerClipping
    }), L = x.closestScrollable;
    return L && (L.setAttribute(Bn.contextId, r.contextId), L.addEventListener("scroll", p, Un(P.scrollOptions)), process.env.NODE_ENV !== "production" && ld(L)), A;
  }, [r.contextId, a, p, i]), b = C(() => {
    const y = t.current, h = ft(y);
    return y && h || (process.env.NODE_ENV !== "production" ? m(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : m()), ar(h);
  }, []), g = C(() => {
    const y = t.current;
    y || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot stop drag when no active drag") : m());
    const h = ft(y);
    t.current = null, h && (d.cancel(), h.removeAttribute(Bn.contextId), h.removeEventListener("scroll", p, Un(y.scrollOptions)));
  }, [p, d]), S = C((y) => {
    const h = t.current;
    h || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot scroll when there is no drag") : m());
    const w = ft(h);
    w || (process.env.NODE_ENV !== "production" ? m(!1, "Cannot scroll a droppable with no closest scrollable") : m()), w.scrollTop += y.y, w.scrollLeft += y.x;
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
function kt() {
}
const Wn = {
  width: 0,
  height: 0,
  margin: Ji
}, bd = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => e || r === "close" ? Wn : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, vd = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => {
  const n = bd({
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
}, yd = (e) => {
  const t = N.useRef(null), r = C(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: n,
    onTransitionEnd: o,
    onClose: s,
    contextId: i
  } = e, [a, c] = N.useState(e.animate === "open");
  N.useEffect(() => a ? n !== "open" ? (r(), c(!1), kt) : t.current ? kt : (t.current = setTimeout(() => {
    t.current = null, c(!1);
  }), r) : kt, [n, a, r]);
  const u = C((l) => {
    l.propertyName === "height" && (o(), n === "close" && s());
  }, [n, s, o]), f = vd({
    isAnimatingOpenOnMount: a,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return _.createElement(e.placeholder.tagName, {
    style: f,
    "data-rfd-placeholder-context-id": i,
    onTransitionEnd: u,
    ref: e.innerRef
  });
};
var Ed = _.memo(yd);
function Ht(e) {
  return typeof e == "boolean";
}
function jt(e, t) {
  t.forEach((r) => r(e));
}
const Dd = [function({
  props: t
}) {
  t.droppableId || (process.env.NODE_ENV !== "production" ? m(!1, "A Droppable requires a droppableId prop") : m()), typeof t.droppableId != "string" && (process.env.NODE_ENV !== "production" ? m(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof t.droppableId}]`) : m());
}, function({
  props: t
}) {
  Ht(t.isDropDisabled) || (process.env.NODE_ENV !== "production" ? m(!1, "isDropDisabled must be a boolean") : m()), Ht(t.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? m(!1, "isCombineEnabled must be a boolean") : m()), Ht(t.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? m(!1, "ignoreContainerClipping must be a boolean") : m());
}, function({
  getDroppableRef: t
}) {
  ns(t());
}], Sd = [function({
  props: t,
  getPlaceholderRef: r
}) {
  !t.placeholder || r() || process.env.NODE_ENV !== "production" && W(`
      Droppable setup issue [droppableId: "${t.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], Nd = [function({
  props: t
}) {
  t.renderClone || (process.env.NODE_ENV !== "production" ? m(!1, "Must provide a clone render function (renderClone) for virtual lists") : m());
}, function({
  getPlaceholderRef: t
}) {
  t() && (process.env.NODE_ENV !== "production" ? m(!1, "Expected virtual list to not have a placeholder") : m());
}];
function wd(e) {
  at(() => {
    jt(e, Dd), e.props.mode === "standard" && jt(e, Sd), e.props.mode === "virtual" && jt(e, Nd);
  });
}
class xd extends _.PureComponent {
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
const Od = (e) => {
  const t = N.useContext(wt);
  t || (process.env.NODE_ENV !== "production" ? m(!1, "Could not find app context") : m());
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
  } = e, D = C(() => o.current, []), E = C((T = null) => {
    o.current = T;
  }, []), y = C(() => s.current, []), h = C((T = null) => {
    s.current = T;
  }, []);
  wd({
    props: e,
    getDroppableRef: D,
    getPlaceholderRef: y
  });
  const w = C(() => {
    n() && g({
      maxScroll: Wo()
    });
  }, [n, g]);
  hd({
    droppableId: a,
    type: c,
    mode: u,
    direction: f,
    isDropDisabled: d,
    isCombineEnabled: p,
    ignoreContainerClipping: l,
    getDroppableRef: D
  });
  const I = B(() => _.createElement(xd, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: T,
    data: U,
    animate: k
  }) => _.createElement(Ed, {
    placeholder: U,
    onClose: T,
    innerRef: h,
    animate: k,
    contextId: r,
    onTransitionEnd: w
  })), [r, w, e.placeholder, e.shouldAnimatePlaceholder, h]), x = B(() => ({
    innerRef: E,
    placeholder: I,
    droppableProps: {
      "data-rfd-droppable-id": a,
      "data-rfd-droppable-context-id": r
    }
  }), [r, a, I, E]), P = b ? b.dragging.draggableId : null, A = B(() => ({
    droppableId: a,
    type: c,
    isUsingCloneFor: P
  }), [a, P, c]);
  function L() {
    if (!b)
      return null;
    const {
      dragging: T,
      render: U
    } = b, k = _.createElement(as, {
      draggableId: T.draggableId,
      index: T.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (j, K) => U(j, K, T));
    return ps.createPortal(k, S());
  }
  return _.createElement($r.Provider, {
    value: A
  }, i(x, v), L());
};
var Cd = Od;
function Id() {
  return document.body || (process.env.NODE_ENV !== "production" ? m(!1, "document.body is not ready") : m()), document.body;
}
const kn = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: Id
}, fs = (e) => {
  let t = {
    ...e
  }, r;
  for (r in kn)
    e[r] === void 0 && (t = {
      ...t,
      [r]: kn[r]
    });
  return t;
}, qt = (e, t) => e === t.droppable.type, Hn = (e, t) => t.draggables[e.draggable.id], _d = () => {
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
    const a = fs(i), c = a.droppableId, u = a.type, f = !a.isDropDisabled, l = a.renderClone;
    if (tt(s)) {
      const d = s.critical;
      if (!qt(u, d))
        return t;
      const p = Hn(d, s.dimensions), v = ie(s.impact) === c;
      return n(c, f, v, v, p, l);
    }
    if (s.phase === "DROP_ANIMATING") {
      const d = s.completed;
      if (!qt(u, d.critical))
        return t;
      const p = Hn(d.critical, s.dimensions);
      return n(c, f, ss(d.result) === c, ie(d.impact) === c, p, l);
    }
    if (s.phase === "IDLE" && s.completed && !s.shouldFlush) {
      const d = s.completed;
      if (!qt(u, d.critical))
        return t;
      const p = ie(d.impact) === c, v = !!(d.impact.at && d.impact.at.type === "COMBINE"), b = d.critical.droppable.id === c;
      return p ? v ? e : t : b ? e : t;
    }
    return t;
  };
}, Ad = {
  updateViewportMaxScroll: uc
}, Rd = io(_d, Ad, (e, t, r) => ({
  ...fs(r),
  ...e,
  ...t
}), {
  context: Pr,
  areStatePropsEqual: os
})(Cd);
var Xd = Rd;
const Pd = (e) => /* @__PURE__ */ N.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512", ...e }, /* @__PURE__ */ N.createElement("path", { d: "M0 117.66v346.32c0 11.32 11.43 19.06 21.94 14.86L160 416V32L20.12 87.95A32.006 32.006 0 000 117.66zM192 416l192 64V96L192 32v384zM554.06 33.16L416 96v384l139.88-55.95A31.996 31.996 0 00576 394.34V48.02c0-11.32-11.43-19.06-21.94-14.86z" })), Jd = ({ loadConfig: e, state: t, convertStateToConfig: r }) => {
  const [n, o] = N.useState(!1), [s, i] = N.useState({});
  N.useEffect(() => {
    let c = t;
    t.type !== "dashboard" ? c = r() : c = JSON.parse(JSON.stringify(c));
    const u = JSON.stringify(c, void 0, 2);
    i(u);
  }, [t]);
  const a = {
    chart: ["Charts", "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/bar-chart.html", /* @__PURE__ */ _.createElement(Gr, null)],
    dashboard: ["Dashboard", "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/bar-chart.html", /* @__PURE__ */ _.createElement(Gr, null)],
    map: ["Maps", "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/data-map.html", /* @__PURE__ */ _.createElement(Pd, null)],
    "markup-include": ["Markup Include", "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/Markup-Include.html", /* @__PURE__ */ _.createElement(gs, null)]
  };
  return t.type ? /* @__PURE__ */ _.createElement(_.Fragment, null, /* @__PURE__ */ _.createElement("a", { href: a[t.type][1], target: "_blank", rel: "noopener noreferrer", className: "guidance-link" }, a[t.type][2], /* @__PURE__ */ _.createElement("div", null, /* @__PURE__ */ _.createElement("span", { className: "heading-3" }, "Get Help with ", a[t.type][0]), /* @__PURE__ */ _.createElement("p", null, "Examples and documentation"))), /* @__PURE__ */ _.createElement("div", { className: "advanced" }, /* @__PURE__ */ _.createElement("span", { className: "advanced-toggle-link", onClick: () => o(!n) }, /* @__PURE__ */ _.createElement("span", null, n ? "— " : "+ "), "Advanced Options"), n && /* @__PURE__ */ _.createElement(_.Fragment, null, /* @__PURE__ */ _.createElement("section", { className: "error-box py-2 px-3 my-2" }, /* @__PURE__ */ _.createElement("div", null, /* @__PURE__ */ _.createElement("strong", { className: "pt-1" }, "Warning"), /* @__PURE__ */ _.createElement("p", null, "This can cause serious errors in your visualization."))), /* @__PURE__ */ _.createElement("p", { className: "pb-2" }, "This tool displays the actual ", /* @__PURE__ */ _.createElement("acronym", { title: "JavaScript Object Notation" }, "JSON"), " configuration that is generated by this editor and allows you to edit properties directly and apply them."), /* @__PURE__ */ _.createElement(
    "button",
    {
      className: "btn",
      onClick: () => {
        navigator.clipboard.writeText(s), alert("Copied!");
      }
    },
    "Copy to Clipboard"
  ), /* @__PURE__ */ _.createElement("textarea", { value: s, onChange: (c) => i(c.target.value) }), /* @__PURE__ */ _.createElement("button", { className: "btn full-width", onClick: () => e(JSON.parse(s)) }, "Apply")))) : /* @__PURE__ */ _.createElement(_.Fragment, null);
};
function Td(e) {
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
function zt() {
  const e = {};
  for (const [t, r] of Array.from(new URLSearchParams(window.location.search).entries()))
    e[t] = r;
  return e;
}
function Yt(e) {
  const t = `${window.location.origin}${window.location.pathname}?${Object.keys(e).map((r) => `${r}=${encodeURIComponent(e[r])}`).join("&")}`;
  window.history.pushState({ path: t }, "", t);
}
const Kt = (e, t) => {
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
}, Bd = (e, t) => {
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
}, Ld = (e, t) => e.map((r) => {
  const n = vs.cloneDeep(r), o = Bd(r.columnName, t);
  if (n.values = o, o.length > 0) {
    const s = n.filterStyle === "multi-select" ? n.values : n.values[0], i = Td(n);
    i ? n.active = i : n.active = n.active || s;
  }
  return n;
}), Vd = ["dropdown", "pill", "tab", "tab bar", "multi-select"], $d = [
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
], jn = (e) => {
  const { order: t } = e, r = (o, s) => o.toString().localeCompare(s.toString(), "en", { numeric: !0 }), n = (o, s) => s.toString().localeCompare(o.toString(), "en", { numeric: !0 });
  return (!t || t === "") && (e.order = "asc"), t === "desc" && (e.values = e.values.sort(n)), t === "asc" && (e.values = e.values.sort(r)), e;
}, Xt = ["chart", "table"], Md = (e) => {
  const [t, r] = N.useState(!1), { config: n, setConfig: o, filteredData: s, setFilteredData: i, excludedData: a, getUniqueValues: c } = e, { type: u, data: f } = n;
  return {
    handleApplyButton: (S) => {
      let D = !1;
      const E = zt();
      S.forEach((y) => {
        y.queuedActive && (y.active = y.queuedActive, delete y.queuedActive, y.setByQueryParameter && E[y.setByQueryParameter] !== y.active && (E[y.setByQueryParameter] = y.active, D = !0));
      }), D && Yt(E), o({ ...n, filters: S }), u === "map" && i(S, a), Xt.includes(n.type) && i(Kt(S, a)), r(!1);
    },
    changeFilterActive: (S, D) => {
      const E = n.type === "map" ? [...s] : [...n.filters];
      if (n.filterBehavior === "Apply Button")
        E[S].queuedActive = D, r(!0);
      else {
        const y = E[S];
        y.active = D;
        const h = zt();
        y.setByQueryParameter && h[y.setByQueryParameter] !== y.active && (h[y.setByQueryParameter] = y.active, Yt(h));
      }
      o({
        ...n,
        filters: E
      }), n.type === "map" && n.filterBehavior === "Filter Change" && i(E), Xt.includes(n.type) && n.filterBehavior === "Filter Change" && i(Kt(E, a));
    },
    announceChange: (S) => {
    },
    showApplyButton: t,
    handleReset: (S) => {
      let D = [...n.filters];
      S.preventDefault();
      let E = !1;
      const y = zt();
      D.forEach((h, w) => {
        (!h.values || h.values.length === 0) && (h.values = c(f, h.columnName)), D[w].active = jn(h).values[0], h.setByQueryParameter && y[h.setByQueryParameter] !== h.active && (y[h.setByQueryParameter] = h.active, E = !0);
      }), E && Yt(y), o({ ...n, filters: D }), u === "map" ? i(D, a) : i(Kt(D, a));
    },
    filterConstants: {
      buttonText: "Apply Filters",
      resetText: "Reset All",
      introText: "Make a selection from the filters to change the visualization information.",
      applyText: "Select the apply button to update the visualization information."
    },
    filterStyleOptions: Vd,
    filterOrderOptions: $d,
    handleFilterOrder: (S, D, E, y) => {
      const h = [...y.values], [w] = h.splice(S, 1);
      h.splice(D, 0, w);
      const I = Xt.includes(n.type) ? [...n.filters] : [...s], x = { ...I[E] };
      x.values = h, x.orderedValues = h, x.active = h[0], x.order = "cust", I[E] = x, n.type === "map" && i(I), o({ ...n, filters: I });
    },
    handleSorting: jn
  };
}, Fd = (e) => {
  var I;
  const { config: t, filteredData: r, dimensions: n } = e, { filters: o, type: s, general: i, theme: a, filterBehavior: c } = t, [u, f] = N.useState(!1), [l, d] = N.useState(null), p = N.useId(), {
    handleApplyButton: v,
    changeFilterActive: b,
    announceChange: g,
    showApplyButton: S,
    handleReset: D,
    filterConstants: E,
    handleSorting: y
  } = Md(e);
  N.useEffect(() => {
    n && (n[0] < 768 && (o == null ? void 0 : o.length) > 0 ? f(!0) : f(!1));
  }, [n]), N.useEffect(() => {
    if (l) {
      const x = document.getElementById(l.id);
      x && x.focus();
    }
  }, [b, l]);
  const h = (x) => x.children, w = ["filters-section", s === "map" ? i.headerColor : (t == null ? void 0 : t.visualizationType) === "Spark Line" ? null : a];
  if (h.Section = ({ children: x }) => (t == null ? void 0 : t.filters) && /* @__PURE__ */ React.createElement("section", { className: w.join(" ") }, /* @__PURE__ */ React.createElement("p", { className: "filters-section__intro-text" }, o != null && o.some((P) => P.active) ? E.introText : "", " ", t.filterBehavior === "Apply Button" && E.applyText), /* @__PURE__ */ React.createElement("div", { className: "filters-section__wrapper" }, x)), h.ApplyBehavior = () => {
    if (c !== "Apply Button")
      return;
    const x = [i != null && i.headerColor ? i.headerColor : a, "apply"];
    return /* @__PURE__ */ React.createElement("div", { className: "filters-section__buttons" }, /* @__PURE__ */ React.createElement(hs, { onClick: () => v(o), disabled: !S, className: x.join(" ") }, E.buttonText), /* @__PURE__ */ React.createElement("a", { href: "#!", role: "button", onClick: D }, E.resetText));
  }, h.TabBar = (x) => {
    const { filter: P, index: A } = x;
    return /* @__PURE__ */ React.createElement("section", { className: "single-filters__tab-bar" }, P.values.map((L, T) => {
      const U = ["button__tab-bar", P.active === L ? "button__tab-bar--active" : ""];
      return /* @__PURE__ */ React.createElement(
        "button",
        {
          id: `${L}-${A}-${T}-${p}`,
          className: U.join(" "),
          key: L,
          onClick: (k) => {
            b(A, L), d(k.target);
          },
          onKeyDown: (k) => {
            k.keyCode === 13 && (b(A, L), d(k.target));
          }
        },
        L
      );
    }));
  }, h.Pills = (x) => x.pills, h.Tabs = (x) => x.tabs, h.Dropdown = (x) => {
    const { index: P, label: A, active: L, filters: T } = x;
    return /* @__PURE__ */ React.createElement(
      "select",
      {
        id: `filter-${P}`,
        name: A,
        "aria-label": `Filter by ${A}`,
        className: "filter-select",
        "data-index": "0",
        value: L,
        onChange: (U) => {
          b(P, U.target.value), g(`Filter ${A} value has been changed to ${U.target.value}, please reference the data table to see updated values.`);
        }
      },
      T
    );
  }, h.Style = () => {
    if (o || r) {
      let x = s === "map" ? r : o;
      return delete x.fromHash, Ld(x, t.data).map((P, A) => {
        var me;
        if (P.showDropdown === !1)
          return;
        const L = [], T = [], U = [], { active: k, queuedActive: j, label: K, filterStyle: q } = P;
        y(P), (me = P.values) == null || me.forEach((G, ne) => {
          const de = ["pill", k === G ? "pill--active" : null, a && a], oe = ["tab", k === G && "tab--active", a && a];
          T.push(
            /* @__PURE__ */ React.createElement("div", { className: "pill__wrapper", key: `pill-${ne}` }, /* @__PURE__ */ React.createElement(
              "button",
              {
                id: `${G}-${A}-${ne}-${p}`,
                className: de.join(" "),
                onKeyDown: (Q) => {
                  Q.keyCode === 13 && (b(A, G), d(Q.target));
                },
                onClick: (Q) => {
                  b(A, G), d(Q.target);
                },
                name: K
              },
              G
            ))
          ), L.push(
            /* @__PURE__ */ React.createElement("option", { key: ne, value: G, "aria-label": G }, P.labels && P.labels[G] ? P.labels[G] : G)
          ), U.push(
            /* @__PURE__ */ React.createElement(
              "button",
              {
                id: `${G}-${A}-${ne}-${p}`,
                className: oe.join(" "),
                onClick: (Q) => {
                  b(A, G), d(Q.target);
                },
                onKeyDown: (Q) => {
                  Q.keyCode === 13 && (b(A, G), d(Q.target));
                }
              },
              G
            )
          );
        });
        const re = ["single-filters", u ? "single-filters--dropdown" : `single-filters--${q}`];
        return /* @__PURE__ */ React.createElement("div", { className: re.join(" "), key: A }, /* @__PURE__ */ React.createElement(React.Fragment, null, K && /* @__PURE__ */ React.createElement("label", { htmlFor: `filter-${A}` }, K), q === "tab" && !u && /* @__PURE__ */ React.createElement(h.Tabs, { tabs: U }), q === "pill" && !u && /* @__PURE__ */ React.createElement(h.Pills, { pills: T }), q === "tab bar" && !u && /* @__PURE__ */ React.createElement(h.TabBar, { filter: P, index: A }), (q === "dropdown" || u) && /* @__PURE__ */ React.createElement(h.Dropdown, { filter: P, index: A, label: K, active: j || k, filters: L }), q === "multi-select" && /* @__PURE__ */ React.createElement(
          bs,
          {
            options: P.values.map((G) => ({ value: G, label: G })),
            fieldName: A,
            updateField: (G, ne, de, oe) => b(de, oe),
            selected: P.active,
            limit: P.selectLimit || 5
          }
        )));
      });
    }
  }, ((I = t == null ? void 0 : t.filters) == null ? void 0 : I.length) !== 0)
    return /* @__PURE__ */ React.createElement(h, null, /* @__PURE__ */ React.createElement(h.Section, null, /* @__PURE__ */ React.createElement(h.Style, null), /* @__PURE__ */ React.createElement(h.ApplyBehavior, null)));
};
Fd.propTypes = {
  // runtimeFilters in place
  filteredData: Te.array,
  // function for updating the runtime filters
  setFilteredData: Te.func,
  // the full apps config
  config: Te.object,
  // updating function for setting fitlerBehavior
  setConfig: Te.func,
  // exclusions
  excludedData: Te.array,
  dimensions: Te.array
};
export {
  Jd as A,
  Xd as C,
  Yd as D,
  Fd as F,
  Kd as P,
  Vd as a,
  Kt as b,
  Kn as c,
  zt as d,
  Ld as e,
  $d as f,
  Td as g,
  jn as h,
  Md as i,
  Yt as u
};
