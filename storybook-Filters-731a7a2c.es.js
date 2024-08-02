import { r as C, R as N } from "./storybook-index-45401197.es.js";
import { r as Cr, R as mu } from "./storybook-index-633d712d.es.js";
import { _ as Et } from "./storybook-extends-70f3d2a3.es.js";
import { g as hu } from "./storybook-_commonjsHelpers-c5d32002.es.js";
import { e as mo, l as gu } from "./storybook-Icon-b09f76c0.es.js";
import { j as w, a as he, F as Ar } from "./storybook-jsx-runtime-36872362.es.js";
import { _ as Dn } from "./storybook-lodash-c15d8e1c.es.js";
import { B as Eu } from "./storybook-Button-d74e310e.es.js";
import { P as gt } from "./storybook-index-43433e35.es.js";
import { M as bu } from "./storybook-MultiSelect-4068d9a0.es.js";
var Ce = typeof globalThis < "u" && globalThis || typeof self < "u" && self || // eslint-disable-next-line no-undef
typeof global < "u" && global || {}, Ne = {
  searchParams: "URLSearchParams" in Ce,
  iterable: "Symbol" in Ce && "iterator" in Symbol,
  blob: "FileReader" in Ce && "Blob" in Ce && function() {
    try {
      return new Blob(), !0;
    } catch {
      return !1;
    }
  }(),
  formData: "FormData" in Ce,
  arrayBuffer: "ArrayBuffer" in Ce
};
function yu(e) {
  return e && DataView.prototype.isPrototypeOf(e);
}
if (Ne.arrayBuffer)
  var vu = [
    "[object Int8Array]",
    "[object Uint8Array]",
    "[object Uint8ClampedArray]",
    "[object Int16Array]",
    "[object Uint16Array]",
    "[object Int32Array]",
    "[object Uint32Array]",
    "[object Float32Array]",
    "[object Float64Array]"
  ], Cu = ArrayBuffer.isView || function(e) {
    return e && vu.indexOf(Object.prototype.toString.call(e)) > -1;
  };
function At(e) {
  if (typeof e != "string" && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || e === "")
    throw new TypeError('Invalid character in header field name: "' + e + '"');
  return e.toLowerCase();
}
function Fr(e) {
  return typeof e != "string" && (e = String(e)), e;
}
function Sr(e) {
  var t = {
    next: function() {
      var n = e.shift();
      return { done: n === void 0, value: n };
    }
  };
  return Ne.iterable && (t[Symbol.iterator] = function() {
    return t;
  }), t;
}
function ge(e) {
  this.map = {}, e instanceof ge ? e.forEach(function(t, n) {
    this.append(n, t);
  }, this) : Array.isArray(e) ? e.forEach(function(t) {
    if (t.length != 2)
      throw new TypeError("Headers constructor: expected name/value pair to be length 2, found" + t.length);
    this.append(t[0], t[1]);
  }, this) : e && Object.getOwnPropertyNames(e).forEach(function(t) {
    this.append(t, e[t]);
  }, this);
}
ge.prototype.append = function(e, t) {
  e = At(e), t = Fr(t);
  var n = this.map[e];
  this.map[e] = n ? n + ", " + t : t;
};
ge.prototype.delete = function(e) {
  delete this.map[At(e)];
};
ge.prototype.get = function(e) {
  return e = At(e), this.has(e) ? this.map[e] : null;
};
ge.prototype.has = function(e) {
  return this.map.hasOwnProperty(At(e));
};
ge.prototype.set = function(e, t) {
  this.map[At(e)] = Fr(t);
};
ge.prototype.forEach = function(e, t) {
  for (var n in this.map)
    this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this);
};
ge.prototype.keys = function() {
  var e = [];
  return this.forEach(function(t, n) {
    e.push(n);
  }), Sr(e);
};
ge.prototype.values = function() {
  var e = [];
  return this.forEach(function(t) {
    e.push(t);
  }), Sr(e);
};
ge.prototype.entries = function() {
  var e = [];
  return this.forEach(function(t, n) {
    e.push([n, t]);
  }), Sr(e);
};
Ne.iterable && (ge.prototype[Symbol.iterator] = ge.prototype.entries);
function _n(e) {
  if (!e._noBody) {
    if (e.bodyUsed)
      return Promise.reject(new TypeError("Already read"));
    e.bodyUsed = !0;
  }
}
function Ni(e) {
  return new Promise(function(t, n) {
    e.onload = function() {
      t(e.result);
    }, e.onerror = function() {
      n(e.error);
    };
  });
}
function Au(e) {
  var t = new FileReader(), n = Ni(t);
  return t.readAsArrayBuffer(e), n;
}
function Fu(e) {
  var t = new FileReader(), n = Ni(t), r = /charset=([A-Za-z0-9_-]+)/.exec(e.type), o = r ? r[1] : "utf-8";
  return t.readAsText(e, o), n;
}
function Su(e) {
  for (var t = new Uint8Array(e), n = new Array(t.length), r = 0; r < t.length; r++)
    n[r] = String.fromCharCode(t[r]);
  return n.join("");
}
function ho(e) {
  if (e.slice)
    return e.slice(0);
  var t = new Uint8Array(e.byteLength);
  return t.set(new Uint8Array(e)), t.buffer;
}
function Oi() {
  return this.bodyUsed = !1, this._initBody = function(e) {
    this.bodyUsed = this.bodyUsed, this._bodyInit = e, e ? typeof e == "string" ? this._bodyText = e : Ne.blob && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : Ne.formData && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : Ne.searchParams && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : Ne.arrayBuffer && Ne.blob && yu(e) ? (this._bodyArrayBuffer = ho(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : Ne.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(e) || Cu(e)) ? this._bodyArrayBuffer = ho(e) : this._bodyText = e = Object.prototype.toString.call(e) : (this._noBody = !0, this._bodyText = ""), this.headers.get("content-type") || (typeof e == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : Ne.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
  }, Ne.blob && (this.blob = function() {
    var e = _n(this);
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
      var e = _n(this);
      return e || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(
        this._bodyArrayBuffer.buffer.slice(
          this._bodyArrayBuffer.byteOffset,
          this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength
        )
      ) : Promise.resolve(this._bodyArrayBuffer));
    } else {
      if (Ne.blob)
        return this.blob().then(Au);
      throw new Error("could not read as ArrayBuffer");
    }
  }, this.text = function() {
    var e = _n(this);
    if (e)
      return e;
    if (this._bodyBlob)
      return Fu(this._bodyBlob);
    if (this._bodyArrayBuffer)
      return Promise.resolve(Su(this._bodyArrayBuffer));
    if (this._bodyFormData)
      throw new Error("could not read FormData body as text");
    return Promise.resolve(this._bodyText);
  }, Ne.formData && (this.formData = function() {
    return this.text().then(Ou);
  }), this.json = function() {
    return this.text().then(JSON.parse);
  }, this;
}
var wu = ["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT", "TRACE"];
function Nu(e) {
  var t = e.toUpperCase();
  return wu.indexOf(t) > -1 ? t : e;
}
function pt(e, t) {
  if (!(this instanceof pt))
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
  t = t || {};
  var n = t.body;
  if (e instanceof pt) {
    if (e.bodyUsed)
      throw new TypeError("Already read");
    this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new ge(e.headers)), this.method = e.method, this.mode = e.mode, this.signal = e.signal, !n && e._bodyInit != null && (n = e._bodyInit, e.bodyUsed = !0);
  } else
    this.url = String(e);
  if (this.credentials = t.credentials || this.credentials || "same-origin", (t.headers || !this.headers) && (this.headers = new ge(t.headers)), this.method = Nu(t.method || this.method || "GET"), this.mode = t.mode || this.mode || null, this.signal = t.signal || this.signal || function() {
    if ("AbortController" in Ce) {
      var i = new AbortController();
      return i.signal;
    }
  }(), this.referrer = null, (this.method === "GET" || this.method === "HEAD") && n)
    throw new TypeError("Body not allowed for GET or HEAD requests");
  if (this._initBody(n), (this.method === "GET" || this.method === "HEAD") && (t.cache === "no-store" || t.cache === "no-cache")) {
    var r = /([?&])_=[^&]*/;
    if (r.test(this.url))
      this.url = this.url.replace(r, "$1_=" + (/* @__PURE__ */ new Date()).getTime());
    else {
      var o = /\?/;
      this.url += (o.test(this.url) ? "&" : "?") + "_=" + (/* @__PURE__ */ new Date()).getTime();
    }
  }
}
pt.prototype.clone = function() {
  return new pt(this, { body: this._bodyInit });
};
function Ou(e) {
  var t = new FormData();
  return e.trim().split("&").forEach(function(n) {
    if (n) {
      var r = n.split("="), o = r.shift().replace(/\+/g, " "), i = r.join("=").replace(/\+/g, " ");
      t.append(decodeURIComponent(o), decodeURIComponent(i));
    }
  }), t;
}
function Bu(e) {
  var t = new ge(), n = e.replace(/\r?\n[\t ]+/g, " ");
  return n.split("\r").map(function(r) {
    return r.indexOf(`
`) === 0 ? r.substr(1, r.length) : r;
  }).forEach(function(r) {
    var o = r.split(":"), i = o.shift().trim();
    if (i) {
      var s = o.join(":").trim();
      try {
        t.append(i, s);
      } catch (u) {
        console.warn("Response " + u.message);
      }
    }
  }), t;
}
Oi.call(pt.prototype);
function Je(e, t) {
  if (!(this instanceof Je))
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
  if (t || (t = {}), this.type = "default", this.status = t.status === void 0 ? 200 : t.status, this.status < 200 || this.status > 599)
    throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");
  this.ok = this.status >= 200 && this.status < 300, this.statusText = t.statusText === void 0 ? "" : "" + t.statusText, this.headers = new ge(t.headers), this.url = t.url || "", this._initBody(e);
}
Oi.call(Je.prototype);
Je.prototype.clone = function() {
  return new Je(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new ge(this.headers),
    url: this.url
  });
};
Je.error = function() {
  var e = new Je(null, { status: 200, statusText: "" });
  return e.ok = !1, e.status = 0, e.type = "error", e;
};
var xu = [301, 302, 303, 307, 308];
Je.redirect = function(e, t) {
  if (xu.indexOf(t) === -1)
    throw new RangeError("Invalid status code");
  return new Je(null, { status: t, headers: { location: e } });
};
var lt = Ce.DOMException;
try {
  new lt();
} catch {
  lt = function(t, n) {
    this.message = t, this.name = n;
    var r = Error(t);
    this.stack = r.stack;
  }, lt.prototype = Object.create(Error.prototype), lt.prototype.constructor = lt;
}
function Bi(e, t) {
  return new Promise(function(n, r) {
    var o = new pt(e, t);
    if (o.signal && o.signal.aborted)
      return r(new lt("Aborted", "AbortError"));
    var i = new XMLHttpRequest();
    function s() {
      i.abort();
    }
    i.onload = function() {
      var l = {
        statusText: i.statusText,
        headers: Bu(i.getAllResponseHeaders() || "")
      };
      o.url.indexOf("file://") === 0 && (i.status < 200 || i.status > 599) ? l.status = 200 : l.status = i.status, l.url = "responseURL" in i ? i.responseURL : l.headers.get("X-Request-URL");
      var f = "response" in i ? i.response : i.responseText;
      setTimeout(function() {
        n(new Je(f, l));
      }, 0);
    }, i.onerror = function() {
      setTimeout(function() {
        r(new TypeError("Network request failed"));
      }, 0);
    }, i.ontimeout = function() {
      setTimeout(function() {
        r(new TypeError("Network request timed out"));
      }, 0);
    }, i.onabort = function() {
      setTimeout(function() {
        r(new lt("Aborted", "AbortError"));
      }, 0);
    };
    function u(l) {
      try {
        return l === "" && Ce.location.href ? Ce.location.href : l;
      } catch {
        return l;
      }
    }
    if (i.open(o.method, u(o.url), !0), o.credentials === "include" ? i.withCredentials = !0 : o.credentials === "omit" && (i.withCredentials = !1), "responseType" in i && (Ne.blob ? i.responseType = "blob" : Ne.arrayBuffer && (i.responseType = "arraybuffer")), t && typeof t.headers == "object" && !(t.headers instanceof ge || Ce.Headers && t.headers instanceof Ce.Headers)) {
      var c = [];
      Object.getOwnPropertyNames(t.headers).forEach(function(l) {
        c.push(At(l)), i.setRequestHeader(l, Fr(t.headers[l]));
      }), o.headers.forEach(function(l, f) {
        c.indexOf(f) === -1 && i.setRequestHeader(f, l);
      });
    } else
      o.headers.forEach(function(l, f) {
        i.setRequestHeader(f, l);
      });
    o.signal && (o.signal.addEventListener("abort", s), i.onreadystatechange = function() {
      i.readyState === 4 && o.signal.removeEventListener("abort", s);
    }), i.send(typeof o._bodyInit > "u" ? null : o._bodyInit);
  });
}
Bi.polyfill = !0;
Ce.fetch || (Ce.fetch = Bi, Ce.Headers = ge, Ce.Request = pt, Ce.Response = Je);
function xi(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Lt(e) {
  "@babel/helpers - typeof";
  return Lt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Lt(e);
}
function Iu(e, t) {
  if (Lt(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Lt(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function _u(e) {
  var t = Iu(e, "string");
  return Lt(t) == "symbol" ? t : String(t);
}
function Pu(e, t, n) {
  return t = _u(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function go(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Eo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? go(Object(n), !0).forEach(function(r) {
      Pu(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : go(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Ie(e) {
  return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. ";
}
var bo = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}(), Pn = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
}, yo = {
  INIT: "@@redux/INIT" + Pn(),
  REPLACE: "@@redux/REPLACE" + Pn(),
  PROBE_UNKNOWN_ACTION: function() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + Pn();
  }
};
function Ru(e) {
  if (typeof e != "object" || e === null)
    return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function Tu(e) {
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
  if (ju(e))
    return "date";
  if (Lu(e))
    return "error";
  var n = Vu(e);
  switch (n) {
    case "Symbol":
    case "Promise":
    case "WeakMap":
    case "WeakSet":
    case "Map":
    case "Set":
      return n;
  }
  return t.slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function Vu(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function Lu(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function ju(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function at(e) {
  var t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = Tu(e)), t;
}
function Ii(e, t, n) {
  var r;
  if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? Ie(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
    if (typeof n != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Ie(1) : "Expected the enhancer to be a function. Instead, received: '" + at(n) + "'");
    return n(Ii)(e, t);
  }
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? Ie(2) : "Expected the root reducer to be a function. Instead, received: '" + at(e) + "'");
  var o = e, i = t, s = [], u = s, c = !1;
  function l() {
    u === s && (u = s.slice());
  }
  function f() {
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? Ie(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return i;
  }
  function a(m) {
    if (typeof m != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Ie(4) : "Expected the listener to be a function. Instead, received: '" + at(m) + "'");
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? Ie(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    var D = !0;
    return l(), u.push(m), function() {
      if (D) {
        if (c)
          throw new Error(process.env.NODE_ENV === "production" ? Ie(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        D = !1, l();
        var A = u.indexOf(m);
        u.splice(A, 1), s = null;
      }
    };
  }
  function d(m) {
    if (!Ru(m))
      throw new Error(process.env.NODE_ENV === "production" ? Ie(7) : "Actions must be plain objects. Instead, the actual type was: '" + at(m) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    if (typeof m.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? Ie(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? Ie(9) : "Reducers may not dispatch actions.");
    try {
      c = !0, i = o(i, m);
    } finally {
      c = !1;
    }
    for (var D = s = u, y = 0; y < D.length; y++) {
      var A = D[y];
      A();
    }
    return m;
  }
  function p(m) {
    if (typeof m != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Ie(10) : "Expected the nextReducer to be a function. Instead, received: '" + at(m));
    o = m, d({
      type: yo.REPLACE
    });
  }
  function E() {
    var m, D = a;
    return m = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function(A) {
        if (typeof A != "object" || A === null)
          throw new Error(process.env.NODE_ENV === "production" ? Ie(11) : "Expected the observer to be an object. Instead, received: '" + at(A) + "'");
        function v() {
          A.next && A.next(f());
        }
        v();
        var b = D(v);
        return {
          unsubscribe: b
        };
      }
    }, m[bo] = function() {
      return this;
    }, m;
  }
  return d({
    type: yo.INIT
  }), r = {
    dispatch: d,
    subscribe: a,
    getState: f,
    replaceReducer: p
  }, r[bo] = E, r;
}
function vo(e, t) {
  return function() {
    return t(e.apply(this, arguments));
  };
}
function Co(e, t) {
  if (typeof e == "function")
    return vo(e, t);
  if (typeof e != "object" || e === null)
    throw new Error(process.env.NODE_ENV === "production" ? Ie(16) : "bindActionCreators expected an object or a function, but instead received: '" + at(e) + `'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`);
  var n = {};
  for (var r in e) {
    var o = e[r];
    typeof o == "function" && (n[r] = vo(o, t));
  }
  return n;
}
function _i() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return t.length === 0 ? function(r) {
    return r;
  } : t.length === 1 ? t[0] : t.reduce(function(r, o) {
    return function() {
      return r(o.apply(void 0, arguments));
    };
  });
}
function $u() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function(r) {
    return function() {
      var o = r.apply(void 0, arguments), i = function() {
        throw new Error(process.env.NODE_ENV === "production" ? Ie(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
      }, s = {
        getState: o.getState,
        dispatch: function() {
          return i.apply(void 0, arguments);
        }
      }, u = t.map(function(c) {
        return c(s);
      });
      return i = _i.apply(void 0, u)(o.dispatch), Eo(Eo({}, o), {}, {
        dispatch: i
      });
    };
  };
}
var ur = { exports: {} }, Rn = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ao;
function Mu() {
  if (Ao)
    return Rn;
  Ao = 1;
  var e = C;
  function t(a, d) {
    return a === d && (a !== 0 || 1 / a === 1 / d) || a !== a && d !== d;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useState, o = e.useEffect, i = e.useLayoutEffect, s = e.useDebugValue;
  function u(a, d) {
    var p = d(), E = r({ inst: { value: p, getSnapshot: d } }), m = E[0].inst, D = E[1];
    return i(function() {
      m.value = p, m.getSnapshot = d, c(m) && D({ inst: m });
    }, [a, p, d]), o(function() {
      return c(m) && D({ inst: m }), a(function() {
        c(m) && D({ inst: m });
      });
    }, [a]), s(p), p;
  }
  function c(a) {
    var d = a.getSnapshot;
    a = a.value;
    try {
      var p = d();
      return !n(a, p);
    } catch {
      return !0;
    }
  }
  function l(a, d) {
    return d();
  }
  var f = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? l : u;
  return Rn.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : f, Rn;
}
var Tn = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fo;
function ku() {
  return Fo || (Fo = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = C, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function n(v) {
      {
        for (var b = arguments.length, g = new Array(b > 1 ? b - 1 : 0), S = 1; S < b; S++)
          g[S - 1] = arguments[S];
        r("error", v, g);
      }
    }
    function r(v, b, g) {
      {
        var S = t.ReactDebugCurrentFrame, I = S.getStackAddendum();
        I !== "" && (b += "%s", g = g.concat([I]));
        var B = g.map(function(x) {
          return String(x);
        });
        B.unshift("Warning: " + b), Function.prototype.apply.call(console[v], console, B);
      }
    }
    function o(v, b) {
      return v === b && (v !== 0 || 1 / v === 1 / b) || v !== v && b !== b;
    }
    var i = typeof Object.is == "function" ? Object.is : o, s = e.useState, u = e.useEffect, c = e.useLayoutEffect, l = e.useDebugValue, f = !1, a = !1;
    function d(v, b, g) {
      f || e.startTransition !== void 0 && (f = !0, n("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var S = b();
      if (!a) {
        var I = b();
        i(S, I) || (n("The result of getSnapshot should be cached to avoid an infinite loop"), a = !0);
      }
      var B = s({
        inst: {
          value: S,
          getSnapshot: b
        }
      }), x = B[0].inst, _ = B[1];
      return c(function() {
        x.value = S, x.getSnapshot = b, p(x) && _({
          inst: x
        });
      }, [v, S, b]), u(function() {
        p(x) && _({
          inst: x
        });
        var M = function() {
          p(x) && _({
            inst: x
          });
        };
        return v(M);
      }, [v]), l(S), S;
    }
    function p(v) {
      var b = v.getSnapshot, g = v.value;
      try {
        var S = b();
        return !i(g, S);
      } catch {
        return !0;
      }
    }
    function E(v, b, g) {
      return b();
    }
    var m = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", D = !m, y = D ? E : d, A = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : y;
    Tn.useSyncExternalStore = A, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Tn;
}
process.env.NODE_ENV === "production" ? ur.exports = Mu() : ur.exports = ku();
var wr = ur.exports, Vn = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var So;
function Gu() {
  if (So)
    return Vn;
  So = 1;
  var e = C, t = wr;
  function n(l, f) {
    return l === f && (l !== 0 || 1 / l === 1 / f) || l !== l && f !== f;
  }
  var r = typeof Object.is == "function" ? Object.is : n, o = t.useSyncExternalStore, i = e.useRef, s = e.useEffect, u = e.useMemo, c = e.useDebugValue;
  return Vn.useSyncExternalStoreWithSelector = function(l, f, a, d, p) {
    var E = i(null);
    if (E.current === null) {
      var m = { hasValue: !1, value: null };
      E.current = m;
    } else
      m = E.current;
    E = u(function() {
      function y(S) {
        if (!A) {
          if (A = !0, v = S, S = d(S), p !== void 0 && m.hasValue) {
            var I = m.value;
            if (p(I, S))
              return b = I;
          }
          return b = S;
        }
        if (I = b, r(v, S))
          return I;
        var B = d(S);
        return p !== void 0 && p(I, B) ? I : (v = S, b = B);
      }
      var A = !1, v, b, g = a === void 0 ? null : a;
      return [function() {
        return y(f());
      }, g === null ? void 0 : function() {
        return y(g());
      }];
    }, [f, a, d, p]);
    var D = o(l, E[0], E[1]);
    return s(function() {
      m.hasValue = !0, m.value = D;
    }, [D]), c(D), D;
  }, Vn;
}
var Ln = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wo;
function Wu() {
  return wo || (wo = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = C, t = wr;
    function n(f, a) {
      return f === a && (f !== 0 || 1 / f === 1 / a) || f !== f && a !== a;
    }
    var r = typeof Object.is == "function" ? Object.is : n, o = t.useSyncExternalStore, i = e.useRef, s = e.useEffect, u = e.useMemo, c = e.useDebugValue;
    function l(f, a, d, p, E) {
      var m = i(null), D;
      m.current === null ? (D = {
        hasValue: !1,
        value: null
      }, m.current = D) : D = m.current;
      var y = u(function() {
        var g = !1, S, I, B = function($) {
          if (!g) {
            g = !0, S = $;
            var j = p($);
            if (E !== void 0 && D.hasValue) {
              var G = D.value;
              if (E(G, j))
                return I = G, G;
            }
            return I = j, j;
          }
          var q = S, ee = I;
          if (r(q, $))
            return ee;
          var K = p($);
          return E !== void 0 && E(ee, K) ? ee : (S = $, I = K, K);
        }, x = d === void 0 ? null : d, _ = function() {
          return B(a());
        }, M = x === null ? void 0 : function() {
          return B(x());
        };
        return [_, M];
      }, [a, d, p, E]), A = y[0], v = y[1], b = o(f, A, v);
      return s(function() {
        D.hasValue = !0, D.value = b;
      }, [b]), c(b), b;
    }
    Ln.useSyncExternalStoreWithSelector = l, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Ln;
}
process.env.NODE_ENV === "production" ? Gu() : Wu();
function Uu(e) {
  e();
}
let Pi = Uu;
const zu = (e) => Pi = e, Hu = () => Pi, No = Symbol.for("react-redux-context"), Oo = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function qu() {
  var e;
  if (!C.createContext)
    return {};
  const t = (e = Oo[No]) != null ? e : Oo[No] = /* @__PURE__ */ new Map();
  let n = t.get(C.createContext);
  return n || (n = C.createContext(null), process.env.NODE_ENV !== "production" && (n.displayName = "ReactRedux"), t.set(C.createContext, n)), n;
}
const Ri = /* @__PURE__ */ qu(), Yu = () => {
  throw new Error("uSES not initialized!");
};
var ar = { exports: {} }, J = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bo;
function Ku() {
  if (Bo)
    return J;
  Bo = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, a = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, E = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, D = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, A = e ? Symbol.for("react.scope") : 60119;
  function v(g) {
    if (typeof g == "object" && g !== null) {
      var S = g.$$typeof;
      switch (S) {
        case t:
          switch (g = g.type, g) {
            case c:
            case l:
            case r:
            case i:
            case o:
            case a:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case u:
                case f:
                case E:
                case p:
                case s:
                  return g;
                default:
                  return S;
              }
          }
        case n:
          return S;
      }
    }
  }
  function b(g) {
    return v(g) === l;
  }
  return J.AsyncMode = c, J.ConcurrentMode = l, J.ContextConsumer = u, J.ContextProvider = s, J.Element = t, J.ForwardRef = f, J.Fragment = r, J.Lazy = E, J.Memo = p, J.Portal = n, J.Profiler = i, J.StrictMode = o, J.Suspense = a, J.isAsyncMode = function(g) {
    return b(g) || v(g) === c;
  }, J.isConcurrentMode = b, J.isContextConsumer = function(g) {
    return v(g) === u;
  }, J.isContextProvider = function(g) {
    return v(g) === s;
  }, J.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === t;
  }, J.isForwardRef = function(g) {
    return v(g) === f;
  }, J.isFragment = function(g) {
    return v(g) === r;
  }, J.isLazy = function(g) {
    return v(g) === E;
  }, J.isMemo = function(g) {
    return v(g) === p;
  }, J.isPortal = function(g) {
    return v(g) === n;
  }, J.isProfiler = function(g) {
    return v(g) === i;
  }, J.isStrictMode = function(g) {
    return v(g) === o;
  }, J.isSuspense = function(g) {
    return v(g) === a;
  }, J.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === r || g === l || g === i || g === o || g === a || g === d || typeof g == "object" && g !== null && (g.$$typeof === E || g.$$typeof === p || g.$$typeof === s || g.$$typeof === u || g.$$typeof === f || g.$$typeof === D || g.$$typeof === y || g.$$typeof === A || g.$$typeof === m);
  }, J.typeOf = v, J;
}
var X = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xo;
function Ju() {
  return xo || (xo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, a = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, E = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, D = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, A = e ? Symbol.for("react.scope") : 60119;
    function v(O) {
      return typeof O == "string" || typeof O == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      O === r || O === l || O === i || O === o || O === a || O === d || typeof O == "object" && O !== null && (O.$$typeof === E || O.$$typeof === p || O.$$typeof === s || O.$$typeof === u || O.$$typeof === f || O.$$typeof === D || O.$$typeof === y || O.$$typeof === A || O.$$typeof === m);
    }
    function b(O) {
      if (typeof O == "object" && O !== null) {
        var de = O.$$typeof;
        switch (de) {
          case t:
            var P = O.type;
            switch (P) {
              case c:
              case l:
              case r:
              case i:
              case o:
              case a:
                return P;
              default:
                var Pe = P && P.$$typeof;
                switch (Pe) {
                  case u:
                  case f:
                  case E:
                  case p:
                  case s:
                    return Pe;
                  default:
                    return de;
                }
            }
          case n:
            return de;
        }
      }
    }
    var g = c, S = l, I = u, B = s, x = t, _ = f, M = r, $ = E, j = p, G = n, q = i, ee = o, K = a, te = !1;
    function me(O) {
      return te || (te = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), U(O) || b(O) === c;
    }
    function U(O) {
      return b(O) === l;
    }
    function fe(O) {
      return b(O) === u;
    }
    function ce(O) {
      return b(O) === s;
    }
    function le(O) {
      return typeof O == "object" && O !== null && O.$$typeof === t;
    }
    function T(O) {
      return b(O) === f;
    }
    function Y(O) {
      return b(O) === r;
    }
    function De(O) {
      return b(O) === E;
    }
    function _e(O) {
      return b(O) === p;
    }
    function ne(O) {
      return b(O) === n;
    }
    function re(O) {
      return b(O) === i;
    }
    function Ee(O) {
      return b(O) === o;
    }
    function Be(O) {
      return b(O) === a;
    }
    X.AsyncMode = g, X.ConcurrentMode = S, X.ContextConsumer = I, X.ContextProvider = B, X.Element = x, X.ForwardRef = _, X.Fragment = M, X.Lazy = $, X.Memo = j, X.Portal = G, X.Profiler = q, X.StrictMode = ee, X.Suspense = K, X.isAsyncMode = me, X.isConcurrentMode = U, X.isContextConsumer = fe, X.isContextProvider = ce, X.isElement = le, X.isForwardRef = T, X.isFragment = Y, X.isLazy = De, X.isMemo = _e, X.isPortal = ne, X.isProfiler = re, X.isStrictMode = Ee, X.isSuspense = Be, X.isValidElementType = v, X.typeOf = b;
  }()), X;
}
process.env.NODE_ENV === "production" ? ar.exports = Ku() : ar.exports = Ju();
var Xu = ar.exports, Nr = Xu, Qu = {
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
}, Zu = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, ea = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Ti = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Or = {};
Or[Nr.ForwardRef] = ea;
Or[Nr.Memo] = Ti;
function Io(e) {
  return Nr.isMemo(e) ? Ti : Or[e.$$typeof] || Qu;
}
var ta = Object.defineProperty, na = Object.getOwnPropertyNames, _o = Object.getOwnPropertySymbols, ra = Object.getOwnPropertyDescriptor, oa = Object.getPrototypeOf, Po = Object.prototype;
function Vi(e, t, n) {
  if (typeof t != "string") {
    if (Po) {
      var r = oa(t);
      r && r !== Po && Vi(e, r, n);
    }
    var o = na(t);
    _o && (o = o.concat(_o(t)));
    for (var i = Io(e), s = Io(t), u = 0; u < o.length; ++u) {
      var c = o[u];
      if (!Zu[c] && !(n && n[c]) && !(s && s[c]) && !(i && i[c])) {
        var l = ra(t, c);
        try {
          ta(e, c, l);
        } catch {
        }
      }
    }
  }
  return e;
}
var ia = Vi;
const Ro = /* @__PURE__ */ hu(ia);
var cr = { exports: {} }, Q = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var To;
function sa() {
  if (To)
    return Q;
  To = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), u = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), a = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), E;
  E = Symbol.for("react.module.reference");
  function m(D) {
    if (typeof D == "object" && D !== null) {
      var y = D.$$typeof;
      switch (y) {
        case e:
          switch (D = D.type, D) {
            case n:
            case o:
            case r:
            case l:
            case f:
              return D;
            default:
              switch (D = D && D.$$typeof, D) {
                case u:
                case s:
                case c:
                case d:
                case a:
                case i:
                  return D;
                default:
                  return y;
              }
          }
        case t:
          return y;
      }
    }
  }
  return Q.ContextConsumer = s, Q.ContextProvider = i, Q.Element = e, Q.ForwardRef = c, Q.Fragment = n, Q.Lazy = d, Q.Memo = a, Q.Portal = t, Q.Profiler = o, Q.StrictMode = r, Q.Suspense = l, Q.SuspenseList = f, Q.isAsyncMode = function() {
    return !1;
  }, Q.isConcurrentMode = function() {
    return !1;
  }, Q.isContextConsumer = function(D) {
    return m(D) === s;
  }, Q.isContextProvider = function(D) {
    return m(D) === i;
  }, Q.isElement = function(D) {
    return typeof D == "object" && D !== null && D.$$typeof === e;
  }, Q.isForwardRef = function(D) {
    return m(D) === c;
  }, Q.isFragment = function(D) {
    return m(D) === n;
  }, Q.isLazy = function(D) {
    return m(D) === d;
  }, Q.isMemo = function(D) {
    return m(D) === a;
  }, Q.isPortal = function(D) {
    return m(D) === t;
  }, Q.isProfiler = function(D) {
    return m(D) === o;
  }, Q.isStrictMode = function(D) {
    return m(D) === r;
  }, Q.isSuspense = function(D) {
    return m(D) === l;
  }, Q.isSuspenseList = function(D) {
    return m(D) === f;
  }, Q.isValidElementType = function(D) {
    return typeof D == "string" || typeof D == "function" || D === n || D === o || D === r || D === l || D === f || D === p || typeof D == "object" && D !== null && (D.$$typeof === d || D.$$typeof === a || D.$$typeof === i || D.$$typeof === s || D.$$typeof === c || D.$$typeof === E || D.getModuleId !== void 0);
  }, Q.typeOf = m, Q;
}
var Z = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vo;
function ua() {
  return Vo || (Vo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), u = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), a = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), E = !1, m = !1, D = !1, y = !1, A = !1, v;
    v = Symbol.for("react.module.reference");
    function b(P) {
      return !!(typeof P == "string" || typeof P == "function" || P === n || P === o || A || P === r || P === l || P === f || y || P === p || E || m || D || typeof P == "object" && P !== null && (P.$$typeof === d || P.$$typeof === a || P.$$typeof === i || P.$$typeof === s || P.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      P.$$typeof === v || P.getModuleId !== void 0));
    }
    function g(P) {
      if (typeof P == "object" && P !== null) {
        var Pe = P.$$typeof;
        switch (Pe) {
          case e:
            var Re = P.type;
            switch (Re) {
              case n:
              case o:
              case r:
              case l:
              case f:
                return Re;
              default:
                var xe = Re && Re.$$typeof;
                switch (xe) {
                  case u:
                  case s:
                  case c:
                  case d:
                  case a:
                  case i:
                    return xe;
                  default:
                    return Pe;
                }
            }
          case t:
            return Pe;
        }
      }
    }
    var S = s, I = i, B = e, x = c, _ = n, M = d, $ = a, j = t, G = o, q = r, ee = l, K = f, te = !1, me = !1;
    function U(P) {
      return te || (te = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function fe(P) {
      return me || (me = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ce(P) {
      return g(P) === s;
    }
    function le(P) {
      return g(P) === i;
    }
    function T(P) {
      return typeof P == "object" && P !== null && P.$$typeof === e;
    }
    function Y(P) {
      return g(P) === c;
    }
    function De(P) {
      return g(P) === n;
    }
    function _e(P) {
      return g(P) === d;
    }
    function ne(P) {
      return g(P) === a;
    }
    function re(P) {
      return g(P) === t;
    }
    function Ee(P) {
      return g(P) === o;
    }
    function Be(P) {
      return g(P) === r;
    }
    function O(P) {
      return g(P) === l;
    }
    function de(P) {
      return g(P) === f;
    }
    Z.ContextConsumer = S, Z.ContextProvider = I, Z.Element = B, Z.ForwardRef = x, Z.Fragment = _, Z.Lazy = M, Z.Memo = $, Z.Portal = j, Z.Profiler = G, Z.StrictMode = q, Z.Suspense = ee, Z.SuspenseList = K, Z.isAsyncMode = U, Z.isConcurrentMode = fe, Z.isContextConsumer = ce, Z.isContextProvider = le, Z.isElement = T, Z.isForwardRef = Y, Z.isFragment = De, Z.isLazy = _e, Z.isMemo = ne, Z.isPortal = re, Z.isProfiler = Ee, Z.isStrictMode = Be, Z.isSuspense = O, Z.isSuspenseList = de, Z.isValidElementType = b, Z.typeOf = g;
  }()), Z;
}
process.env.NODE_ENV === "production" ? cr.exports = sa() : cr.exports = ua();
var Lo = cr.exports;
function Br(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function jn(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || Br(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else
    throw new Error(`Unexpected value for ${t} in connect.`);
}
function aa(e, t, n) {
  jn(e, "mapStateToProps"), jn(t, "mapDispatchToProps"), jn(n, "mergeProps");
}
const ca = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function la(e, t, n, r, {
  areStatesEqual: o,
  areOwnPropsEqual: i,
  areStatePropsEqual: s
}) {
  let u = !1, c, l, f, a, d;
  function p(A, v) {
    return c = A, l = v, f = e(c, l), a = t(r, l), d = n(f, a, l), u = !0, d;
  }
  function E() {
    return f = e(c, l), t.dependsOnOwnProps && (a = t(r, l)), d = n(f, a, l), d;
  }
  function m() {
    return e.dependsOnOwnProps && (f = e(c, l)), t.dependsOnOwnProps && (a = t(r, l)), d = n(f, a, l), d;
  }
  function D() {
    const A = e(c, l), v = !s(A, f);
    return f = A, v && (d = n(f, a, l)), d;
  }
  function y(A, v) {
    const b = !i(v, l), g = !o(A, c, v, l);
    return c = A, l = v, b && g ? E() : b ? m() : g ? D() : d;
  }
  return function(v, b) {
    return u ? y(v, b) : p(v, b);
  };
}
function da(e, t) {
  let {
    initMapStateToProps: n,
    initMapDispatchToProps: r,
    initMergeProps: o
  } = t, i = xi(t, ca);
  const s = n(e, i), u = r(e, i), c = o(e, i);
  return process.env.NODE_ENV !== "production" && aa(s, u, c), la(s, u, c, e, i);
}
function fa(e, t) {
  const n = {};
  for (const r in e) {
    const o = e[r];
    typeof o == "function" && (n[r] = (...i) => t(o(...i)));
  }
  return n;
}
function pa(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null)
    return !0;
  let n = t;
  for (; Object.getPrototypeOf(n) !== null; )
    n = Object.getPrototypeOf(n);
  return t === n;
}
function Li(e, t, n) {
  pa(e) || Br(`${n}() in ${t} must return a plain object. Instead received ${e}.`);
}
function lr(e) {
  return function(n) {
    const r = e(n);
    function o() {
      return r;
    }
    return o.dependsOnOwnProps = !1, o;
  };
}
function jo(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function ji(e, t) {
  return function(r, {
    displayName: o
  }) {
    const i = function(u, c) {
      return i.dependsOnOwnProps ? i.mapToProps(u, c) : i.mapToProps(u, void 0);
    };
    return i.dependsOnOwnProps = !0, i.mapToProps = function(u, c) {
      i.mapToProps = e, i.dependsOnOwnProps = jo(e);
      let l = i(u, c);
      return typeof l == "function" && (i.mapToProps = l, i.dependsOnOwnProps = jo(l), l = i(u, c)), process.env.NODE_ENV !== "production" && Li(l, o, t), l;
    }, i;
  };
}
function xr(e, t) {
  return (n, r) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${r.wrappedComponentName}.`);
  };
}
function Da(e) {
  return e && typeof e == "object" ? lr((t) => (
    // @ts-ignore
    fa(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    ji(e, "mapDispatchToProps")
  ) : xr(e, "mapDispatchToProps") : lr((t) => ({
    dispatch: t
  }));
}
function ma(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    ji(e, "mapStateToProps")
  ) : xr(e, "mapStateToProps") : lr(() => ({}));
}
function ha(e, t, n) {
  return Et({}, n, e, t);
}
function ga(e) {
  return function(n, {
    displayName: r,
    areMergedPropsEqual: o
  }) {
    let i = !1, s;
    return function(c, l, f) {
      const a = e(c, l, f);
      return i ? o(a, s) || (s = a) : (i = !0, s = a, process.env.NODE_ENV !== "production" && Li(s, r, "mergeProps")), s;
    };
  };
}
function Ea(e) {
  return e ? typeof e == "function" ? ga(e) : xr(e, "mergeProps") : () => ha;
}
function ba() {
  const e = Hu();
  let t = null, n = null;
  return {
    clear() {
      t = null, n = null;
    },
    notify() {
      e(() => {
        let r = t;
        for (; r; )
          r.callback(), r = r.next;
      });
    },
    get() {
      let r = [], o = t;
      for (; o; )
        r.push(o), o = o.next;
      return r;
    },
    subscribe(r) {
      let o = !0, i = n = {
        callback: r,
        next: null,
        prev: n
      };
      return i.prev ? i.prev.next = i : t = i, function() {
        !o || t === null || (o = !1, i.next ? i.next.prev = i.prev : n = i.prev, i.prev ? i.prev.next = i.next : t = i.next);
      };
    }
  };
}
const $o = {
  notify() {
  },
  get: () => []
};
function $i(e, t) {
  let n, r = $o, o = 0, i = !1;
  function s(m) {
    f();
    const D = r.subscribe(m);
    let y = !1;
    return () => {
      y || (y = !0, D(), a());
    };
  }
  function u() {
    r.notify();
  }
  function c() {
    E.onStateChange && E.onStateChange();
  }
  function l() {
    return i;
  }
  function f() {
    o++, n || (n = t ? t.addNestedSub(c) : e.subscribe(c), r = ba());
  }
  function a() {
    o--, n && o === 0 && (n(), n = void 0, r.clear(), r = $o);
  }
  function d() {
    i || (i = !0, f());
  }
  function p() {
    i && (i = !1, a());
  }
  const E = {
    addNestedSub: s,
    notifyNestedSubs: u,
    handleChangeWrapper: c,
    isSubscribed: l,
    trySubscribe: d,
    tryUnsubscribe: p,
    getListeners: () => r
  };
  return E;
}
const ya = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", mn = ya ? C.useLayoutEffect : C.useEffect;
function Mo(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function $n(e, t) {
  if (Mo(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (let o = 0; o < n.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, n[o]) || !Mo(e[n[o]], t[n[o]]))
      return !1;
  return !0;
}
const va = ["reactReduxForwardedRef"];
let Mi = Yu;
const Ca = (e) => {
  Mi = e;
}, Aa = [null, null], Fa = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function Sa(e, t, n) {
  mn(() => e(...t), n);
}
function wa(e, t, n, r, o, i) {
  e.current = r, n.current = !1, o.current && (o.current = null, i());
}
function Na(e, t, n, r, o, i, s, u, c, l, f) {
  if (!e)
    return () => {
    };
  let a = !1, d = null;
  const p = () => {
    if (a || !u.current)
      return;
    const m = t.getState();
    let D, y;
    try {
      D = r(m, o.current);
    } catch (A) {
      y = A, d = A;
    }
    y || (d = null), D === i.current ? s.current || l() : (i.current = D, c.current = D, s.current = !0, f());
  };
  return n.onStateChange = p, n.trySubscribe(), p(), () => {
    if (a = !0, n.tryUnsubscribe(), n.onStateChange = null, d)
      throw d;
  };
}
function Oa(e, t) {
  return e === t;
}
let ko = !1;
function ki(e, t, n, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: r,
  areStatesEqual: o = Oa,
  areOwnPropsEqual: i = $n,
  areStatePropsEqual: s = $n,
  areMergedPropsEqual: u = $n,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: c = !1,
  // the context consumer to use
  context: l = Ri
} = {}) {
  process.env.NODE_ENV !== "production" && r !== void 0 && !ko && (ko = !0, Br('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const f = l, a = ma(e), d = Da(t), p = Ea(n), E = !!e;
  return (D) => {
    if (process.env.NODE_ENV !== "production" && !Lo.isValidElementType(D))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${Fa(D)}`);
    const y = D.displayName || D.name || "Component", A = `Connect(${y})`, v = {
      shouldHandleStateChanges: E,
      displayName: A,
      wrappedComponentName: y,
      WrappedComponent: D,
      // @ts-ignore
      initMapStateToProps: a,
      // @ts-ignore
      initMapDispatchToProps: d,
      initMergeProps: p,
      areStatesEqual: o,
      areStatePropsEqual: s,
      areOwnPropsEqual: i,
      areMergedPropsEqual: u
    };
    function b(I) {
      const [B, x, _] = C.useMemo(() => {
        const {
          reactReduxForwardedRef: O
        } = I, de = xi(I, va);
        return [I.context, O, de];
      }, [I]), M = C.useMemo(() => B && B.Consumer && // @ts-ignore
      Lo.isContextConsumer(/* @__PURE__ */ C.createElement(B.Consumer, null)) ? B : f, [B, f]), $ = C.useContext(M), j = !!I.store && !!I.store.getState && !!I.store.dispatch, G = !!$ && !!$.store;
      if (process.env.NODE_ENV !== "production" && !j && !G)
        throw new Error(`Could not find "store" in the context of "${A}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${A} in connect options.`);
      const q = j ? I.store : $.store, ee = G ? $.getServerState : q.getState, K = C.useMemo(() => da(q.dispatch, v), [q]), [te, me] = C.useMemo(() => {
        if (!E)
          return Aa;
        const O = $i(q, j ? void 0 : $.subscription), de = O.notifyNestedSubs.bind(O);
        return [O, de];
      }, [q, j, $]), U = C.useMemo(() => j ? $ : Et({}, $, {
        subscription: te
      }), [j, $, te]), fe = C.useRef(), ce = C.useRef(_), le = C.useRef(), T = C.useRef(!1);
      C.useRef(!1);
      const Y = C.useRef(!1), De = C.useRef();
      mn(() => (Y.current = !0, () => {
        Y.current = !1;
      }), []);
      const _e = C.useMemo(() => () => le.current && _ === ce.current ? le.current : K(q.getState(), _), [q, _]), ne = C.useMemo(() => (de) => te ? Na(
        E,
        q,
        te,
        // @ts-ignore
        K,
        ce,
        fe,
        T,
        Y,
        le,
        me,
        de
      ) : () => {
      }, [te]);
      Sa(wa, [ce, fe, T, _, le, me]);
      let re;
      try {
        re = Mi(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          ne,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          _e,
          ee ? () => K(ee(), _) : _e
        );
      } catch (O) {
        throw De.current && (O.message += `
The error may be correlated with this previous error:
${De.current.stack}

`), O;
      }
      mn(() => {
        De.current = void 0, le.current = void 0, fe.current = re;
      });
      const Ee = C.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ C.createElement(D, Et({}, re, {
          ref: x
        }))
      ), [x, D, re]);
      return C.useMemo(() => E ? /* @__PURE__ */ C.createElement(M.Provider, {
        value: U
      }, Ee) : Ee, [M, Ee, U]);
    }
    const S = C.memo(b);
    if (S.WrappedComponent = D, S.displayName = b.displayName = A, c) {
      const B = C.forwardRef(function(_, M) {
        return /* @__PURE__ */ C.createElement(S, Et({}, _, {
          reactReduxForwardedRef: M
        }));
      });
      return B.displayName = A, B.WrappedComponent = D, Ro(B, D);
    }
    return Ro(S, D);
  };
}
function Ba({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: o = "once",
  noopCheck: i = "once"
}) {
  const s = C.useMemo(() => {
    const l = $i(e);
    return {
      store: e,
      subscription: l,
      getServerState: r ? () => r : void 0,
      stabilityCheck: o,
      noopCheck: i
    };
  }, [e, r, o, i]), u = C.useMemo(() => e.getState(), [e]);
  mn(() => {
    const {
      subscription: l
    } = s;
    return l.onStateChange = l.notifyNestedSubs, l.trySubscribe(), u !== e.getState() && l.notifyNestedSubs(), () => {
      l.tryUnsubscribe(), l.onStateChange = void 0;
    };
  }, [s, u]);
  const c = t || Ri;
  return /* @__PURE__ */ C.createElement(c.Provider, {
    value: s
  }, n);
}
Ca(wr.useSyncExternalStore);
zu(Cr.unstable_batchedUpdates);
function xa(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function Gi(e, t) {
  var n = C.useState(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], r = C.useRef(!0), o = C.useRef(n), i = r.current || !!(t && o.current.inputs && xa(t, o.current.inputs)), s = i ? o.current : {
    inputs: t,
    result: e()
  };
  return C.useEffect(function() {
    r.current = !1, o.current = s;
  }, [s]), s.result;
}
function Ia(e, t) {
  return Gi(function() {
    return e;
  }, t);
}
var H = Gi, R = Ia, _a = process.env.NODE_ENV === "production", Mn = "Invariant failed";
function Go(e, t) {
  if (!e) {
    if (_a)
      throw new Error(Mn);
    var n = typeof t == "function" ? t() : t, r = n ? "".concat(Mn, ": ").concat(n) : Mn;
    throw new Error(r);
  }
}
var ze = function(t) {
  var n = t.top, r = t.right, o = t.bottom, i = t.left, s = r - i, u = o - n, c = {
    top: n,
    right: r,
    bottom: o,
    left: i,
    width: s,
    height: u,
    x: i,
    y: n,
    center: {
      x: (r + i) / 2,
      y: (o + n) / 2
    }
  };
  return c;
}, Ir = function(t, n) {
  return {
    top: t.top - n.top,
    left: t.left - n.left,
    bottom: t.bottom + n.bottom,
    right: t.right + n.right
  };
}, Wo = function(t, n) {
  return {
    top: t.top + n.top,
    left: t.left + n.left,
    bottom: t.bottom - n.bottom,
    right: t.right - n.right
  };
}, Pa = function(t, n) {
  return {
    top: t.top + n.y,
    left: t.left + n.x,
    bottom: t.bottom + n.y,
    right: t.right + n.x
  };
}, kn = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, _r = function(t) {
  var n = t.borderBox, r = t.margin, o = r === void 0 ? kn : r, i = t.border, s = i === void 0 ? kn : i, u = t.padding, c = u === void 0 ? kn : u, l = ze(Ir(n, o)), f = ze(Wo(n, s)), a = ze(Wo(f, c));
  return {
    marginBox: l,
    borderBox: ze(n),
    paddingBox: f,
    contentBox: a,
    margin: o,
    border: s,
    padding: c
  };
}, Ge = function(t) {
  var n = t.slice(0, -2), r = t.slice(-2);
  if (r !== "px")
    return 0;
  var o = Number(n);
  return isNaN(o) && (process.env.NODE_ENV !== "production" ? Go(!1, "Could not parse value [raw: " + t + ", without suffix: " + n + "]") : Go(!1)), o;
}, Ra = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, hn = function(t, n) {
  var r = t.borderBox, o = t.border, i = t.margin, s = t.padding, u = Pa(r, n);
  return _r({
    borderBox: u,
    border: o,
    margin: i,
    padding: s
  });
}, gn = function(t, n) {
  return n === void 0 && (n = Ra()), hn(t, n);
}, Wi = function(t, n) {
  var r = {
    top: Ge(n.marginTop),
    right: Ge(n.marginRight),
    bottom: Ge(n.marginBottom),
    left: Ge(n.marginLeft)
  }, o = {
    top: Ge(n.paddingTop),
    right: Ge(n.paddingRight),
    bottom: Ge(n.paddingBottom),
    left: Ge(n.paddingLeft)
  }, i = {
    top: Ge(n.borderTopWidth),
    right: Ge(n.borderRightWidth),
    bottom: Ge(n.borderBottomWidth),
    left: Ge(n.borderLeftWidth)
  };
  return _r({
    borderBox: t,
    margin: r,
    padding: o,
    border: i
  });
}, Ui = function(t) {
  var n = t.getBoundingClientRect(), r = window.getComputedStyle(t);
  return Wi(n, r);
}, Uo = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function Ta(e, t) {
  return !!(e === t || Uo(e) && Uo(t));
}
function Va(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (!Ta(e[n], t[n]))
      return !1;
  return !0;
}
function ye(e, t) {
  t === void 0 && (t = Va);
  var n = null;
  function r() {
    for (var o = [], i = 0; i < arguments.length; i++)
      o[i] = arguments[i];
    if (n && n.lastThis === this && t(o, n.lastArgs))
      return n.lastResult;
    var s = e.apply(this, o);
    return n = {
      lastResult: s,
      lastArgs: o,
      lastThis: this
    }, s;
  }
  return r.clear = function() {
    n = null;
  }, r;
}
var La = function(t) {
  var n = [], r = null, o = function() {
    for (var s = arguments.length, u = new Array(s), c = 0; c < s; c++)
      u[c] = arguments[c];
    n = u, !r && (r = requestAnimationFrame(function() {
      r = null, t.apply(void 0, n);
    }));
  };
  return o.cancel = function() {
    r && (cancelAnimationFrame(r), r = null);
  }, o;
};
const jt = La, ja = process.env.NODE_ENV === "production", $a = /[ \t]{2,}/g, Ma = /^[ \t]*/gm, zo = (e) => e.replace($a, " ").replace(Ma, "").trim(), ka = (e) => zo(`
  %c@hello-pangea/dnd

  %c${zo(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), Ga = (e) => [ka(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], Wa = "__@hello-pangea/dnd-disable-dev-warnings";
function zi(e, t) {
  ja || typeof window < "u" && window[Wa] || console[e](...Ga(t));
}
const ie = zi.bind(null, "warn"), dr = zi.bind(null, "error");
function tt() {
}
function Ua(e, t) {
  return {
    ...e,
    ...t
  };
}
function We(e, t, n) {
  const r = t.map((o) => {
    const i = Ua(n, o.options);
    return e.addEventListener(o.eventName, o.fn, i), function() {
      e.removeEventListener(o.eventName, o.fn, i);
    };
  });
  return function() {
    r.forEach((i) => {
      i();
    });
  };
}
const za = process.env.NODE_ENV === "production", Ho = "Invariant failed";
class $t extends Error {
}
$t.prototype.toString = function() {
  return this.message;
};
function h(e, t) {
  if (!e)
    throw za ? new $t(Ho) : new $t(`${Ho}: ${t || ""}`);
}
class Ha extends N.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = tt, this.onWindowError = (n) => {
      const r = this.getCallbacks();
      r.isDragging() && (r.tryAbort(), process.env.NODE_ENV !== "production" && ie(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const o = n.error;
      o instanceof $t && (n.preventDefault(), process.env.NODE_ENV !== "production" && dr(o.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (n) => {
      this.callbacks = n;
    };
  }
  componentDidMount() {
    this.unbind = We(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof $t) {
      process.env.NODE_ENV !== "production" && dr(t.message), this.setState({});
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
const qa = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`, En = (e) => e + 1, Ya = (e) => `
  You have lifted an item in position ${En(e.source.index)}
`, Hi = (e, t) => {
  const n = e.droppableId === t.droppableId, r = En(e.index), o = En(t.index);
  return n ? `
      You have moved the item from position ${r}
      to position ${o}
    ` : `
    You have moved the item from position ${r}
    in list ${e.droppableId}
    to list ${t.droppableId}
    in position ${o}
  `;
}, qi = (e, t, n) => t.droppableId === n.droppableId ? `
      The item ${e}
      has been combined with ${n.draggableId}` : `
      The item ${e}
      in list ${t.droppableId}
      has been combined with ${n.draggableId}
      in list ${n.droppableId}
    `, Ka = (e) => {
  const t = e.destination;
  if (t)
    return Hi(e.source, t);
  const n = e.combine;
  return n ? qi(e.draggableId, e.source, n) : "You are over an area that cannot be dropped on";
}, qo = (e) => `
  The item has returned to its starting position
  of ${En(e.index)}
`, Ja = (e) => {
  if (e.reason === "CANCEL")
    return `
      Movement cancelled.
      ${qo(e.source)}
    `;
  const t = e.destination, n = e.combine;
  return t ? `
      You have dropped the item.
      ${Hi(e.source, t)}
    ` : n ? `
      You have dropped the item.
      ${qi(e.draggableId, e.source, n)}
    ` : `
    The item has been dropped while not over a drop area.
    ${qo(e.source)}
  `;
}, Xa = {
  dragHandleUsageInstructions: qa,
  onDragStart: Ya,
  onDragUpdate: Ka,
  onDragEnd: Ja
};
var dn = Xa;
const ve = {
  x: 0,
  y: 0
}, Ae = (e, t) => ({
  x: e.x + t.x,
  y: e.y + t.y
}), je = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), nt = (e, t) => e.x === t.x && e.y === t.y, Ft = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), Dt = (e, t, n = 0) => e === "x" ? {
  x: t,
  y: n
} : {
  x: n,
  y: t
}, Mt = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2), Yo = (e, t) => Math.min(...t.map((n) => Mt(e, n))), Yi = (e) => (t) => ({
  x: e(t.x),
  y: e(t.y)
});
var Qa = (e, t) => {
  const n = ze({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return n.width <= 0 || n.height <= 0 ? null : n;
};
const qt = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), Ko = (e) => [{
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
}], Za = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, ec = (e, t) => t ? qt(e, t.scroll.diff.displacement) : e, tc = (e, t, n) => n && n.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + n.increasedBy[t.line]
} : e, nc = (e, t) => t && t.shouldClipSubject ? Qa(t.pageMarginBox, e) : ze(e);
var bt = ({
  page: e,
  withPlaceholder: t,
  axis: n,
  frame: r
}) => {
  const o = ec(e.marginBox, r), i = tc(o, n, t), s = nc(i, r);
  return {
    page: e,
    withPlaceholder: t,
    active: s
  };
}, Pr = (e, t) => {
  e.frame || (process.env.NODE_ENV, h(!1));
  const n = e.frame, r = je(t, n.scroll.initial), o = Ft(r), i = {
    ...n,
    scroll: {
      initial: n.scroll.initial,
      current: t,
      diff: {
        value: r,
        displacement: o
      },
      max: n.scroll.max
    }
  }, s = bt({
    page: e.subject.page,
    withPlaceholder: e.subject.withPlaceholder,
    axis: e.axis,
    frame: i
  });
  return {
    ...e,
    frame: i,
    subject: s
  };
};
const Ki = ye((e) => e.reduce((t, n) => (t[n.descriptor.id] = n, t), {})), Ji = ye((e) => e.reduce((t, n) => (t[n.descriptor.id] = n, t), {})), Sn = ye((e) => Object.values(e)), rc = ye((e) => Object.values(e));
var mt = ye((e, t) => rc(t).filter((r) => e === r.descriptor.droppableId).sort((r, o) => r.descriptor.index - o.descriptor.index));
function Rr(e) {
  return e.at && e.at.type === "REORDER" ? e.at.destination : null;
}
function wn(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
var Nn = ye((e, t) => t.filter((n) => n.descriptor.id !== e.descriptor.id)), oc = ({
  isMovingForward: e,
  draggable: t,
  destination: n,
  insideDestination: r,
  previousImpact: o
}) => {
  if (!n.isCombineEnabled || !Rr(o))
    return null;
  function s(p) {
    const E = {
      type: "COMBINE",
      combine: {
        draggableId: p,
        droppableId: n.descriptor.id
      }
    };
    return {
      ...o,
      at: E
    };
  }
  const u = o.displaced.all, c = u.length ? u[0] : null;
  if (e)
    return c ? s(c) : null;
  const l = Nn(t, r);
  if (!c) {
    if (!l.length)
      return null;
    const p = l[l.length - 1];
    return s(p.descriptor.id);
  }
  const f = l.findIndex((p) => p.descriptor.id === c);
  f === -1 && (process.env.NODE_ENV !== "production" ? h(!1, "Could not find displaced item in set") : h(!1));
  const a = f - 1;
  if (a < 0)
    return null;
  const d = l[a];
  return s(d.descriptor.id);
}, St = (e, t) => e.descriptor.droppableId === t.descriptor.id;
const Xi = {
  point: ve,
  value: 0
}, kt = {
  invisible: {},
  visible: {},
  all: []
}, ic = {
  displaced: kt,
  displacedBy: Xi,
  at: null
};
var sc = ic, Ue = (e, t) => (n) => e <= n && n <= t, Qi = (e) => {
  const t = Ue(e.top, e.bottom), n = Ue(e.left, e.right);
  return (r) => {
    if (t(r.top) && t(r.bottom) && n(r.left) && n(r.right))
      return !0;
    const i = t(r.top) || t(r.bottom), s = n(r.left) || n(r.right);
    if (i && s)
      return !0;
    const c = r.top < e.top && r.bottom > e.bottom, l = r.left < e.left && r.right > e.right;
    return c && l ? !0 : c && s || l && i;
  };
}, uc = (e) => {
  const t = Ue(e.top, e.bottom), n = Ue(e.left, e.right);
  return (r) => t(r.top) && t(r.bottom) && n(r.left) && n(r.right);
};
const Tr = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, Zi = {
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
var ac = (e) => (t) => {
  const n = Ue(t.top, t.bottom), r = Ue(t.left, t.right);
  return (o) => e === Tr ? n(o.top) && n(o.bottom) : r(o.left) && r(o.right);
};
const cc = (e, t) => {
  const n = t.frame ? t.frame.scroll.diff.displacement : ve;
  return qt(e, n);
}, lc = (e, t, n) => t.subject.active ? n(t.subject.active)(e) : !1, dc = (e, t, n) => n(t)(e), Vr = ({
  target: e,
  destination: t,
  viewport: n,
  withDroppableDisplacement: r,
  isVisibleThroughFrameFn: o
}) => {
  const i = r ? cc(e, t) : e;
  return lc(i, t, o) && dc(i, n, o);
}, fc = (e) => Vr({
  ...e,
  isVisibleThroughFrameFn: Qi
}), es = (e) => Vr({
  ...e,
  isVisibleThroughFrameFn: uc
}), pc = (e) => Vr({
  ...e,
  isVisibleThroughFrameFn: ac(e.destination.axis)
}), Dc = (e, t, n) => {
  if (typeof n == "boolean")
    return n;
  if (!t)
    return !0;
  const {
    invisible: r,
    visible: o
  } = t;
  if (r[e])
    return !1;
  const i = o[e];
  return i ? i.shouldAnimate : !0;
};
function mc(e, t) {
  const n = e.page.marginBox, r = {
    top: t.point.y,
    right: 0,
    bottom: 0,
    left: t.point.x
  };
  return ze(Ir(n, r));
}
function Gt({
  afterDragging: e,
  destination: t,
  displacedBy: n,
  viewport: r,
  forceShouldAnimate: o,
  last: i
}) {
  return e.reduce(function(u, c) {
    const l = mc(c, n), f = c.descriptor.id;
    if (u.all.push(f), !fc({
      target: l,
      destination: t,
      viewport: r,
      withDroppableDisplacement: !0
    }))
      return u.invisible[c.descriptor.id] = !0, u;
    const d = Dc(f, i, o), p = {
      draggableId: f,
      shouldAnimate: d
    };
    return u.visible[f] = p, u;
  }, {
    all: [],
    visible: {},
    invisible: {}
  });
}
function hc(e, t) {
  if (!e.length)
    return 0;
  const n = e[e.length - 1].descriptor.index;
  return t.inHomeList ? n : n + 1;
}
function Jo({
  insideDestination: e,
  inHomeList: t,
  displacedBy: n,
  destination: r
}) {
  const o = hc(e, {
    inHomeList: t
  });
  return {
    displaced: kt,
    displacedBy: n,
    at: {
      type: "REORDER",
      destination: {
        droppableId: r.descriptor.id,
        index: o
      }
    }
  };
}
function bn({
  draggable: e,
  insideDestination: t,
  destination: n,
  viewport: r,
  displacedBy: o,
  last: i,
  index: s,
  forceShouldAnimate: u
}) {
  const c = St(e, n);
  if (s == null)
    return Jo({
      insideDestination: t,
      inHomeList: c,
      displacedBy: o,
      destination: n
    });
  const l = t.find((E) => E.descriptor.index === s);
  if (!l)
    return Jo({
      insideDestination: t,
      inHomeList: c,
      displacedBy: o,
      destination: n
    });
  const f = Nn(e, t), a = t.indexOf(l), d = f.slice(a);
  return {
    displaced: Gt({
      afterDragging: d,
      destination: n,
      displacedBy: o,
      last: i,
      viewport: r.frame,
      forceShouldAnimate: u
    }),
    displacedBy: o,
    at: {
      type: "REORDER",
      destination: {
        droppableId: n.descriptor.id,
        index: s
      }
    }
  };
}
function rt(e, t) {
  return !!t.effected[e];
}
var gc = ({
  isMovingForward: e,
  destination: t,
  draggables: n,
  combine: r,
  afterCritical: o
}) => {
  if (!t.isCombineEnabled)
    return null;
  const i = r.draggableId, u = n[i].descriptor.index;
  return rt(i, o) ? e ? u : u - 1 : e ? u + 1 : u;
}, Ec = ({
  isMovingForward: e,
  isInHomeList: t,
  insideDestination: n,
  location: r
}) => {
  if (!n.length)
    return null;
  const o = r.index, i = e ? o + 1 : o - 1, s = n[0].descriptor.index, u = n[n.length - 1].descriptor.index, c = t ? u : u + 1;
  return i < s || i > c ? null : i;
}, bc = ({
  isMovingForward: e,
  isInHomeList: t,
  draggable: n,
  draggables: r,
  destination: o,
  insideDestination: i,
  previousImpact: s,
  viewport: u,
  afterCritical: c
}) => {
  const l = s.at;
  if (l || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot move in direction without previous impact location") : h(!1)), l.type === "REORDER") {
    const a = Ec({
      isMovingForward: e,
      isInHomeList: t,
      location: l.destination,
      insideDestination: i
    });
    return a == null ? null : bn({
      draggable: n,
      insideDestination: i,
      destination: o,
      viewport: u,
      last: s.displaced,
      displacedBy: s.displacedBy,
      index: a
    });
  }
  const f = gc({
    isMovingForward: e,
    destination: o,
    displaced: s.displaced,
    draggables: r,
    combine: l.combine,
    afterCritical: c
  });
  return f == null ? null : bn({
    draggable: n,
    insideDestination: i,
    destination: o,
    viewport: u,
    last: s.displaced,
    displacedBy: s.displacedBy,
    index: f
  });
}, yc = ({
  displaced: e,
  afterCritical: t,
  combineWith: n,
  displacedBy: r
}) => {
  const o = !!(e.visible[n] || e.invisible[n]);
  return rt(n, t) ? o ? ve : Ft(r.point) : o ? r.point : ve;
}, vc = ({
  afterCritical: e,
  impact: t,
  draggables: n
}) => {
  const r = wn(t);
  r || (process.env.NODE_ENV, h(!1));
  const o = r.draggableId, i = n[o].page.borderBox.center, s = yc({
    displaced: t.displaced,
    afterCritical: e,
    combineWith: o,
    displacedBy: t.displacedBy
  });
  return Ae(i, s);
};
const ts = (e, t) => t.margin[e.start] + t.borderBox[e.size] / 2, Cc = (e, t) => t.margin[e.end] + t.borderBox[e.size] / 2, Lr = (e, t, n) => t[e.crossAxisStart] + n.margin[e.crossAxisStart] + n.borderBox[e.crossAxisSize] / 2, Xo = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: n
}) => Dt(e.line, t.marginBox[e.end] + ts(e, n), Lr(e, t.marginBox, n)), Qo = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: n
}) => Dt(e.line, t.marginBox[e.start] - Cc(e, n), Lr(e, t.marginBox, n)), Ac = ({
  axis: e,
  moveInto: t,
  isMoving: n
}) => Dt(e.line, t.contentBox[e.start] + ts(e, n), Lr(e, t.contentBox, n));
var Fc = ({
  impact: e,
  draggable: t,
  draggables: n,
  droppable: r,
  afterCritical: o
}) => {
  const i = mt(r.descriptor.id, n), s = t.page, u = r.axis;
  if (!i.length)
    return Ac({
      axis: u,
      moveInto: r.page,
      isMoving: s
    });
  const {
    displaced: c,
    displacedBy: l
  } = e, f = c.all[0];
  if (f) {
    const d = n[f];
    if (rt(f, o))
      return Qo({
        axis: u,
        moveRelativeTo: d.page,
        isMoving: s
      });
    const p = hn(d.page, l.point);
    return Qo({
      axis: u,
      moveRelativeTo: p,
      isMoving: s
    });
  }
  const a = i[i.length - 1];
  if (a.descriptor.id === t.descriptor.id)
    return s.borderBox.center;
  if (rt(a.descriptor.id, o)) {
    const d = hn(a.page, Ft(o.displacedBy.point));
    return Xo({
      axis: u,
      moveRelativeTo: d,
      isMoving: s
    });
  }
  return Xo({
    axis: u,
    moveRelativeTo: a.page,
    isMoving: s
  });
}, fr = (e, t) => {
  const n = e.frame;
  return n ? Ae(t, n.scroll.diff.displacement) : t;
};
const Sc = ({
  impact: e,
  draggable: t,
  droppable: n,
  draggables: r,
  afterCritical: o
}) => {
  const i = t.page.borderBox.center, s = e.at;
  return !n || !s ? i : s.type === "REORDER" ? Fc({
    impact: e,
    draggable: t,
    draggables: r,
    droppable: n,
    afterCritical: o
  }) : vc({
    impact: e,
    draggables: r,
    afterCritical: o
  });
};
var On = (e) => {
  const t = Sc(e), n = e.droppable;
  return n ? fr(n, t) : t;
}, ns = (e, t) => {
  const n = je(t, e.scroll.initial), r = Ft(n);
  return {
    frame: ze({
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
        value: n,
        displacement: r
      }
    }
  };
};
function Zo(e, t) {
  return e.map((n) => t[n]);
}
function wc(e, t) {
  for (let n = 0; n < t.length; n++) {
    const r = t[n].visible[e];
    if (r)
      return r;
  }
  return null;
}
var Nc = ({
  impact: e,
  viewport: t,
  destination: n,
  draggables: r,
  maxScrollChange: o
}) => {
  const i = ns(t, Ae(t.scroll.current, o)), s = n.frame ? Pr(n, Ae(n.frame.scroll.current, o)) : n, u = e.displaced, c = Gt({
    afterDragging: Zo(u.all, r),
    destination: n,
    displacedBy: e.displacedBy,
    viewport: i.frame,
    last: u,
    forceShouldAnimate: !1
  }), l = Gt({
    afterDragging: Zo(u.all, r),
    destination: s,
    displacedBy: e.displacedBy,
    viewport: t.frame,
    last: u,
    forceShouldAnimate: !1
  }), f = {}, a = {}, d = [u, c, l];
  return u.all.forEach((E) => {
    const m = wc(E, d);
    if (m) {
      a[E] = m;
      return;
    }
    f[E] = !0;
  }), {
    ...e,
    displaced: {
      all: u.all,
      invisible: f,
      visible: a
    }
  };
}, Oc = (e, t) => Ae(e.scroll.diff.displacement, t), jr = ({
  pageBorderBoxCenter: e,
  draggable: t,
  viewport: n
}) => {
  const r = Oc(n, e), o = je(r, t.page.borderBox.center);
  return Ae(t.client.borderBox.center, o);
}, rs = ({
  draggable: e,
  destination: t,
  newPageBorderBoxCenter: n,
  viewport: r,
  withDroppableDisplacement: o,
  onlyOnMainAxis: i = !1
}) => {
  const s = je(n, e.page.borderBox.center), c = {
    target: qt(e.page.borderBox, s),
    destination: t,
    withDroppableDisplacement: o,
    viewport: r
  };
  return i ? pc(c) : es(c);
}, Bc = ({
  isMovingForward: e,
  draggable: t,
  destination: n,
  draggables: r,
  previousImpact: o,
  viewport: i,
  previousPageBorderBoxCenter: s,
  previousClientSelection: u,
  afterCritical: c
}) => {
  if (!n.isEnabled)
    return null;
  const l = mt(n.descriptor.id, r), f = St(t, n), a = oc({
    isMovingForward: e,
    draggable: t,
    destination: n,
    insideDestination: l,
    previousImpact: o
  }) || bc({
    isMovingForward: e,
    isInHomeList: f,
    draggable: t,
    draggables: r,
    destination: n,
    insideDestination: l,
    previousImpact: o,
    viewport: i,
    afterCritical: c
  });
  if (!a)
    return null;
  const d = On({
    impact: a,
    draggable: t,
    droppable: n,
    draggables: r,
    afterCritical: c
  });
  if (rs({
    draggable: t,
    destination: n,
    newPageBorderBoxCenter: d,
    viewport: i.frame,
    withDroppableDisplacement: !1,
    onlyOnMainAxis: !0
  }))
    return {
      clientSelection: jr({
        pageBorderBoxCenter: d,
        draggable: t,
        viewport: i
      }),
      impact: a,
      scrollJumpRequest: null
    };
  const E = je(d, s), m = Nc({
    impact: a,
    viewport: i,
    destination: n,
    draggables: r,
    maxScrollChange: E
  });
  return {
    clientSelection: u,
    impact: m,
    scrollJumpRequest: E
  };
};
const we = (e) => {
  const t = e.subject.active;
  return t || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot get clipped area from droppable") : h(!1)), t;
};
var xc = ({
  isMovingForward: e,
  pageBorderBoxCenter: t,
  source: n,
  droppables: r,
  viewport: o
}) => {
  const i = n.subject.active;
  if (!i)
    return null;
  const s = n.axis, u = Ue(i[s.start], i[s.end]), c = Sn(r).filter((f) => f !== n).filter((f) => f.isEnabled).filter((f) => !!f.subject.active).filter((f) => Qi(o.frame)(we(f))).filter((f) => {
    const a = we(f);
    return e ? i[s.crossAxisEnd] < a[s.crossAxisEnd] : a[s.crossAxisStart] < i[s.crossAxisStart];
  }).filter((f) => {
    const a = we(f), d = Ue(a[s.start], a[s.end]);
    return u(a[s.start]) || u(a[s.end]) || d(i[s.start]) || d(i[s.end]);
  }).sort((f, a) => {
    const d = we(f)[s.crossAxisStart], p = we(a)[s.crossAxisStart];
    return e ? d - p : p - d;
  }).filter((f, a, d) => we(f)[s.crossAxisStart] === we(d[0])[s.crossAxisStart]);
  if (!c.length)
    return null;
  if (c.length === 1)
    return c[0];
  const l = c.filter((f) => Ue(we(f)[s.start], we(f)[s.end])(t[s.line]));
  return l.length === 1 ? l[0] : l.length > 1 ? l.sort((f, a) => we(f)[s.start] - we(a)[s.start])[0] : c.sort((f, a) => {
    const d = Yo(t, Ko(we(f))), p = Yo(t, Ko(we(a)));
    return d !== p ? d - p : we(f)[s.start] - we(a)[s.start];
  })[0];
};
const ei = (e, t) => {
  const n = e.page.borderBox.center;
  return rt(e.descriptor.id, t) ? je(n, t.displacedBy.point) : n;
}, Ic = (e, t) => {
  const n = e.page.borderBox;
  return rt(e.descriptor.id, t) ? qt(n, Ft(t.displacedBy.point)) : n;
};
var _c = ({
  pageBorderBoxCenter: e,
  viewport: t,
  destination: n,
  insideDestination: r,
  afterCritical: o
}) => r.filter((s) => es({
  target: Ic(s, o),
  destination: n,
  viewport: t.frame,
  withDroppableDisplacement: !0
})).sort((s, u) => {
  const c = Mt(e, fr(n, ei(s, o))), l = Mt(e, fr(n, ei(u, o)));
  return c < l ? -1 : l < c ? 1 : s.descriptor.index - u.descriptor.index;
})[0] || null, Yt = ye(function(t, n) {
  const r = n[t.line];
  return {
    value: r,
    point: Dt(t.line, r)
  };
});
const Pc = (e, t, n) => {
  const r = e.axis;
  if (e.descriptor.mode === "virtual")
    return Dt(r.line, t[r.line]);
  const o = e.subject.page.contentBox[r.size], c = mt(e.descriptor.id, n).reduce((l, f) => l + f.client.marginBox[r.size], 0) + t[r.line] - o;
  return c <= 0 ? null : Dt(r.line, c);
}, os = (e, t) => ({
  ...e,
  scroll: {
    ...e.scroll,
    max: t
  }
}), is = (e, t, n) => {
  const r = e.frame;
  St(t, e) && (process.env.NODE_ENV !== "production" ? h(!1, "Should not add placeholder space to home list") : h(!1)), e.subject.withPlaceholder && (process.env.NODE_ENV !== "production" ? h(!1, "Cannot add placeholder size to a subject when it already has one") : h(!1));
  const o = Yt(e.axis, t.displaceBy).point, i = Pc(e, o, n), s = {
    placeholderSize: o,
    increasedBy: i,
    oldFrameMaxScroll: e.frame ? e.frame.scroll.max : null
  };
  if (!r) {
    const f = bt({
      page: e.subject.page,
      withPlaceholder: s,
      axis: e.axis,
      frame: e.frame
    });
    return {
      ...e,
      subject: f
    };
  }
  const u = i ? Ae(r.scroll.max, i) : r.scroll.max, c = os(r, u), l = bt({
    page: e.subject.page,
    withPlaceholder: s,
    axis: e.axis,
    frame: c
  });
  return {
    ...e,
    subject: l,
    frame: c
  };
}, Rc = (e) => {
  const t = e.subject.withPlaceholder;
  t || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot remove placeholder form subject when there was none") : h(!1));
  const n = e.frame;
  if (!n) {
    const s = bt({
      page: e.subject.page,
      axis: e.axis,
      frame: null,
      withPlaceholder: null
    });
    return {
      ...e,
      subject: s
    };
  }
  const r = t.oldFrameMaxScroll;
  r || (process.env.NODE_ENV !== "production" ? h(!1, "Expected droppable with frame to have old max frame scroll when removing placeholder") : h(!1));
  const o = os(n, r), i = bt({
    page: e.subject.page,
    axis: e.axis,
    frame: o,
    withPlaceholder: null
  });
  return {
    ...e,
    subject: i,
    frame: o
  };
};
var Tc = ({
  previousPageBorderBoxCenter: e,
  moveRelativeTo: t,
  insideDestination: n,
  draggable: r,
  draggables: o,
  destination: i,
  viewport: s,
  afterCritical: u
}) => {
  if (!t) {
    if (n.length)
      return null;
    const a = {
      displaced: kt,
      displacedBy: Xi,
      at: {
        type: "REORDER",
        destination: {
          droppableId: i.descriptor.id,
          index: 0
        }
      }
    }, d = On({
      impact: a,
      draggable: r,
      droppable: i,
      draggables: o,
      afterCritical: u
    }), p = St(r, i) ? i : is(i, r, o);
    return rs({
      draggable: r,
      destination: p,
      newPageBorderBoxCenter: d,
      viewport: s.frame,
      withDroppableDisplacement: !1,
      onlyOnMainAxis: !0
    }) ? a : null;
  }
  const c = e[i.axis.line] <= t.page.borderBox.center[i.axis.line], l = (() => {
    const a = t.descriptor.index;
    return t.descriptor.id === r.descriptor.id || c ? a : a + 1;
  })(), f = Yt(i.axis, r.displaceBy);
  return bn({
    draggable: r,
    insideDestination: n,
    destination: i,
    viewport: s,
    displacedBy: f,
    last: kt,
    index: l
  });
}, Vc = ({
  isMovingForward: e,
  previousPageBorderBoxCenter: t,
  draggable: n,
  isOver: r,
  draggables: o,
  droppables: i,
  viewport: s,
  afterCritical: u
}) => {
  const c = xc({
    isMovingForward: e,
    pageBorderBoxCenter: t,
    source: r,
    droppables: i,
    viewport: s
  });
  if (!c)
    return null;
  const l = mt(c.descriptor.id, o), f = _c({
    pageBorderBoxCenter: t,
    viewport: s,
    destination: c,
    insideDestination: l,
    afterCritical: u
  }), a = Tc({
    previousPageBorderBoxCenter: t,
    destination: c,
    draggable: n,
    draggables: o,
    moveRelativeTo: f,
    insideDestination: l,
    viewport: s,
    afterCritical: u
  });
  if (!a)
    return null;
  const d = On({
    impact: a,
    draggable: n,
    droppable: c,
    draggables: o,
    afterCritical: u
  });
  return {
    clientSelection: jr({
      pageBorderBoxCenter: d,
      draggable: n,
      viewport: s
    }),
    impact: a,
    scrollJumpRequest: null
  };
}, $e = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const Lc = (e, t) => {
  const n = $e(e);
  return n ? t[n] : null;
};
var jc = ({
  state: e,
  type: t
}) => {
  const n = Lc(e.impact, e.dimensions.droppables), r = !!n, o = e.dimensions.droppables[e.critical.droppable.id], i = n || o, s = i.axis.direction, u = s === "vertical" && (t === "MOVE_UP" || t === "MOVE_DOWN") || s === "horizontal" && (t === "MOVE_LEFT" || t === "MOVE_RIGHT");
  if (u && !r)
    return null;
  const c = t === "MOVE_DOWN" || t === "MOVE_RIGHT", l = e.dimensions.draggables[e.critical.draggable.id], f = e.current.page.borderBoxCenter, {
    draggables: a,
    droppables: d
  } = e.dimensions;
  return u ? Bc({
    isMovingForward: c,
    previousPageBorderBoxCenter: f,
    draggable: l,
    destination: i,
    draggables: a,
    viewport: e.viewport,
    previousClientSelection: e.current.client.selection,
    previousImpact: e.impact,
    afterCritical: e.afterCritical
  }) : Vc({
    isMovingForward: c,
    previousPageBorderBoxCenter: f,
    draggable: l,
    isOver: i,
    draggables: a,
    droppables: d,
    viewport: e.viewport,
    afterCritical: e.afterCritical
  });
};
function ct(e) {
  return e.phase === "DRAGGING" || e.phase === "COLLECTING";
}
function ss(e) {
  const t = Ue(e.top, e.bottom), n = Ue(e.left, e.right);
  return function(o) {
    return t(o.y) && n(o.x);
  };
}
function $c(e, t) {
  return e.left < t.right && e.right > t.left && e.top < t.bottom && e.bottom > t.top;
}
function Mc({
  pageBorderBox: e,
  draggable: t,
  candidates: n
}) {
  const r = t.page.borderBox.center, o = n.map((i) => {
    const s = i.axis, u = Dt(i.axis.line, e.center[s.line], i.page.borderBox.center[s.crossAxisLine]);
    return {
      id: i.descriptor.id,
      distance: Mt(r, u)
    };
  }).sort((i, s) => s.distance - i.distance);
  return o[0] ? o[0].id : null;
}
function kc({
  pageBorderBox: e,
  draggable: t,
  droppables: n
}) {
  const r = Sn(n).filter((o) => {
    if (!o.isEnabled)
      return !1;
    const i = o.subject.active;
    if (!i || !$c(e, i))
      return !1;
    if (ss(i)(e.center))
      return !0;
    const s = o.axis, u = i.center[s.crossAxisLine], c = e[s.crossAxisStart], l = e[s.crossAxisEnd], f = Ue(i[s.crossAxisStart], i[s.crossAxisEnd]), a = f(c), d = f(l);
    return !a && !d ? !0 : a ? c < u : l > u;
  });
  return r.length ? r.length === 1 ? r[0].descriptor.id : Mc({
    pageBorderBox: e,
    draggable: t,
    candidates: r
  }) : null;
}
const us = (e, t) => ze(qt(e, t));
var Gc = (e, t) => {
  const n = e.frame;
  return n ? us(t, n.scroll.diff.value) : t;
};
function as({
  displaced: e,
  id: t
}) {
  return !!(e.visible[t] || e.invisible[t]);
}
function Wc({
  draggable: e,
  closest: t,
  inHomeList: n
}) {
  return t ? n && t.descriptor.index > e.descriptor.index ? t.descriptor.index - 1 : t.descriptor.index : null;
}
var Uc = ({
  pageBorderBoxWithDroppableScroll: e,
  draggable: t,
  destination: n,
  insideDestination: r,
  last: o,
  viewport: i,
  afterCritical: s
}) => {
  const u = n.axis, c = Yt(n.axis, t.displaceBy), l = c.value, f = e[u.start], a = e[u.end], p = Nn(t, r).find((m) => {
    const D = m.descriptor.id, y = m.page.borderBox.center[u.line], A = rt(D, s), v = as({
      displaced: o,
      id: D
    });
    return A ? v ? a <= y : f < y - l : v ? a <= y + l : f < y;
  }) || null, E = Wc({
    draggable: t,
    closest: p,
    inHomeList: St(t, n)
  });
  return bn({
    draggable: t,
    insideDestination: r,
    destination: n,
    viewport: i,
    last: o,
    displacedBy: c,
    index: E
  });
};
const zc = 4;
var Hc = ({
  draggable: e,
  pageBorderBoxWithDroppableScroll: t,
  previousImpact: n,
  destination: r,
  insideDestination: o,
  afterCritical: i
}) => {
  if (!r.isCombineEnabled)
    return null;
  const s = r.axis, u = Yt(r.axis, e.displaceBy), c = u.value, l = t[s.start], f = t[s.end], d = Nn(e, o).find((E) => {
    const m = E.descriptor.id, D = E.page.borderBox, A = D[s.size] / zc, v = rt(m, i), b = as({
      displaced: n.displaced,
      id: m
    });
    return v ? b ? f > D[s.start] + A && f < D[s.end] - A : l > D[s.start] - c + A && l < D[s.end] - c - A : b ? f > D[s.start] + c + A && f < D[s.end] + c - A : l > D[s.start] + A && l < D[s.end] - A;
  });
  return d ? {
    displacedBy: u,
    displaced: n.displaced,
    at: {
      type: "COMBINE",
      combine: {
        draggableId: d.descriptor.id,
        droppableId: r.descriptor.id
      }
    }
  } : null;
}, cs = ({
  pageOffset: e,
  draggable: t,
  draggables: n,
  droppables: r,
  previousImpact: o,
  viewport: i,
  afterCritical: s
}) => {
  const u = us(t.page.borderBox, e), c = kc({
    pageBorderBox: u,
    draggable: t,
    droppables: r
  });
  if (!c)
    return sc;
  const l = r[c], f = mt(l.descriptor.id, n), a = Gc(l, u);
  return Hc({
    pageBorderBoxWithDroppableScroll: a,
    draggable: t,
    previousImpact: o,
    destination: l,
    insideDestination: f,
    afterCritical: s
  }) || Uc({
    pageBorderBoxWithDroppableScroll: a,
    draggable: t,
    destination: l,
    insideDestination: f,
    last: o.displaced,
    viewport: i,
    afterCritical: s
  });
}, $r = (e, t) => ({
  ...e,
  [t.descriptor.id]: t
});
const qc = ({
  previousImpact: e,
  impact: t,
  droppables: n
}) => {
  const r = $e(e), o = $e(t);
  if (!r || r === o)
    return n;
  const i = n[r];
  if (!i.subject.withPlaceholder)
    return n;
  const s = Rc(i);
  return $r(n, s);
};
var Yc = ({
  draggable: e,
  draggables: t,
  droppables: n,
  previousImpact: r,
  impact: o
}) => {
  const i = qc({
    previousImpact: r,
    impact: o,
    droppables: n
  }), s = $e(o);
  if (!s)
    return i;
  const u = n[s];
  if (St(e, u) || u.subject.withPlaceholder)
    return i;
  const c = is(u, e, t);
  return $r(i, c);
}, Rt = ({
  state: e,
  clientSelection: t,
  dimensions: n,
  viewport: r,
  impact: o,
  scrollJumpRequest: i
}) => {
  const s = r || e.viewport, u = n || e.dimensions, c = t || e.current.client.selection, l = je(c, e.initial.client.selection), f = {
    offset: l,
    selection: c,
    borderBoxCenter: Ae(e.initial.client.borderBoxCenter, l)
  }, a = {
    selection: Ae(f.selection, s.scroll.current),
    borderBoxCenter: Ae(f.borderBoxCenter, s.scroll.current),
    offset: Ae(f.offset, s.scroll.diff.value)
  }, d = {
    client: f,
    page: a
  };
  if (e.phase === "COLLECTING")
    return {
      ...e,
      dimensions: u,
      viewport: s,
      current: d
    };
  const p = u.draggables[e.critical.draggable.id], E = o || cs({
    pageOffset: a.offset,
    draggable: p,
    draggables: u.draggables,
    droppables: u.droppables,
    previousImpact: e.impact,
    viewport: s,
    afterCritical: e.afterCritical
  }), m = Yc({
    draggable: p,
    impact: E,
    previousImpact: e.impact,
    draggables: u.draggables,
    droppables: u.droppables
  });
  return {
    ...e,
    current: d,
    dimensions: {
      draggables: u.draggables,
      droppables: m
    },
    impact: E,
    viewport: s,
    scrollJumpRequest: i || null,
    forceShouldAnimate: i ? !1 : null
  };
};
function Kc(e, t) {
  return e.map((n) => t[n]);
}
var ls = ({
  impact: e,
  viewport: t,
  draggables: n,
  destination: r,
  forceShouldAnimate: o
}) => {
  const i = e.displaced, s = Kc(i.all, n), u = Gt({
    afterDragging: s,
    destination: r,
    displacedBy: e.displacedBy,
    viewport: t.frame,
    forceShouldAnimate: o,
    last: i
  });
  return {
    ...e,
    displaced: u
  };
}, ds = ({
  impact: e,
  draggable: t,
  droppable: n,
  draggables: r,
  viewport: o,
  afterCritical: i
}) => {
  const s = On({
    impact: e,
    draggable: t,
    draggables: r,
    droppable: n,
    afterCritical: i
  });
  return jr({
    pageBorderBoxCenter: s,
    draggable: t,
    viewport: o
  });
}, fs = ({
  state: e,
  dimensions: t,
  viewport: n
}) => {
  e.movementMode !== "SNAP" && (process.env.NODE_ENV, h(!1));
  const r = e.impact, o = n || e.viewport, i = t || e.dimensions, {
    draggables: s,
    droppables: u
  } = i, c = s[e.critical.draggable.id], l = $e(r);
  l || (process.env.NODE_ENV !== "production" ? h(!1, "Must be over a destination in SNAP movement mode") : h(!1));
  const f = u[l], a = ls({
    impact: r,
    viewport: o,
    destination: f,
    draggables: s
  }), d = ds({
    impact: a,
    draggable: c,
    droppable: f,
    draggables: s,
    viewport: o,
    afterCritical: e.afterCritical
  });
  return Rt({
    impact: a,
    clientSelection: d,
    state: e,
    dimensions: i,
    viewport: o
  });
}, Jc = (e) => ({
  index: e.index,
  droppableId: e.droppableId
}), ps = ({
  draggable: e,
  home: t,
  draggables: n,
  viewport: r
}) => {
  const o = Yt(t.axis, e.displaceBy), i = mt(t.descriptor.id, n), s = i.indexOf(e);
  s === -1 && (process.env.NODE_ENV !== "production" ? h(!1, "Expected draggable to be inside home list") : h(!1));
  const u = i.slice(s + 1), c = u.reduce((d, p) => (d[p.descriptor.id] = !0, d), {}), l = {
    inVirtualList: t.descriptor.mode === "virtual",
    displacedBy: o,
    effected: c
  };
  return {
    impact: {
      displaced: Gt({
        afterDragging: u,
        destination: t,
        displacedBy: o,
        last: null,
        viewport: r.frame,
        forceShouldAnimate: !1
      }),
      displacedBy: o,
      at: {
        type: "REORDER",
        destination: Jc(e.descriptor)
      }
    },
    afterCritical: l
  };
}, Xc = (e, t) => ({
  draggables: e.draggables,
  droppables: $r(e.droppables, t)
});
const Kt = (e) => {
  process.env.NODE_ENV;
}, Jt = (e) => {
  process.env.NODE_ENV;
};
var Qc = ({
  draggable: e,
  offset: t,
  initialWindowScroll: n
}) => {
  const r = hn(e.client, t), o = gn(r, n);
  return {
    ...e,
    placeholder: {
      ...e.placeholder,
      client: r
    },
    client: r,
    page: o
  };
}, Zc = (e) => {
  const t = e.frame;
  return t || (process.env.NODE_ENV !== "production" ? h(!1, "Expected Droppable to have a frame") : h(!1)), t;
}, el = ({
  additions: e,
  updatedDroppables: t,
  viewport: n
}) => {
  const r = n.scroll.diff.value;
  return e.map((o) => {
    const i = o.descriptor.droppableId, s = t[i], c = Zc(s).scroll.diff.value, l = Ae(r, c);
    return Qc({
      draggable: o,
      offset: l,
      initialWindowScroll: n.scroll.initial
    });
  });
}, tl = ({
  state: e,
  published: t
}) => {
  Kt();
  const n = t.modified.map((y) => {
    const A = e.dimensions.droppables[y.droppableId];
    return Pr(A, y.scroll);
  }), r = {
    ...e.dimensions.droppables,
    ...Ki(n)
  }, o = Ji(el({
    additions: t.additions,
    updatedDroppables: r,
    viewport: e.viewport
  })), i = {
    ...e.dimensions.draggables,
    ...o
  };
  t.removals.forEach((y) => {
    delete i[y];
  });
  const s = {
    droppables: r,
    draggables: i
  }, u = $e(e.impact), c = u ? s.droppables[u] : null, l = s.draggables[e.critical.draggable.id], f = s.droppables[e.critical.droppable.id], {
    impact: a,
    afterCritical: d
  } = ps({
    draggable: l,
    home: f,
    draggables: i,
    viewport: e.viewport
  }), p = c && c.isCombineEnabled ? e.impact : a, E = cs({
    pageOffset: e.current.page.offset,
    draggable: s.draggables[e.critical.draggable.id],
    draggables: s.draggables,
    droppables: s.droppables,
    previousImpact: p,
    viewport: e.viewport,
    afterCritical: d
  });
  Jt();
  const m = {
    ...e,
    phase: "DRAGGING",
    impact: E,
    onLiftImpact: a,
    dimensions: s,
    afterCritical: d,
    forceShouldAnimate: !1
  };
  return e.phase === "COLLECTING" ? m : {
    ...m,
    phase: "DROP_PENDING",
    reason: e.reason,
    isWaiting: !1
  };
};
const pr = (e) => e.movementMode === "SNAP", Gn = (e, t, n) => {
  const r = Xc(e.dimensions, t);
  return !pr(e) || n ? Rt({
    state: e,
    dimensions: r
  }) : fs({
    state: e,
    dimensions: r
  });
};
function Wn(e) {
  return e.isDragging && e.movementMode === "SNAP" ? {
    ...e,
    scrollJumpRequest: null
  } : e;
}
const ti = {
  phase: "IDLE",
  completed: null,
  shouldFlush: !1
};
var nl = (e = ti, t) => {
  if (t.type === "FLUSH")
    return {
      ...ti,
      shouldFlush: !0
    };
  if (t.type === "INITIAL_PUBLISH") {
    e.phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? h(!1, "INITIAL_PUBLISH must come after a IDLE phase") : h(!1));
    const {
      critical: n,
      clientSelection: r,
      viewport: o,
      dimensions: i,
      movementMode: s
    } = t.payload, u = i.draggables[n.draggable.id], c = i.droppables[n.droppable.id], l = {
      selection: r,
      borderBoxCenter: u.client.borderBox.center,
      offset: ve
    }, f = {
      client: l,
      page: {
        selection: Ae(l.selection, o.scroll.initial),
        borderBoxCenter: Ae(l.selection, o.scroll.initial),
        offset: Ae(l.selection, o.scroll.diff.value)
      }
    }, a = Sn(i.droppables).every((m) => !m.isFixedOnPage), {
      impact: d,
      afterCritical: p
    } = ps({
      draggable: u,
      home: c,
      draggables: i.draggables,
      viewport: o
    });
    return {
      phase: "DRAGGING",
      isDragging: !0,
      critical: n,
      movementMode: s,
      dimensions: i,
      initial: f,
      current: f,
      isWindowScrollAllowed: a,
      impact: d,
      afterCritical: p,
      onLiftImpact: d,
      viewport: o,
      scrollJumpRequest: null,
      forceShouldAnimate: null
    };
  }
  if (t.type === "COLLECTION_STARTING")
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" ? e : (e.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? h(!1, `Collection cannot start from phase ${e.phase}`) : h(!1)), {
      ...e,
      phase: "COLLECTING"
    });
  if (t.type === "PUBLISH_WHILE_DRAGGING")
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? h(!1, `Unexpected ${t.type} received in phase ${e.phase}`) : h(!1)), tl({
      state: e,
      published: t.payload
    });
  if (t.type === "MOVE") {
    if (e.phase === "DROP_PENDING")
      return e;
    ct(e) || (process.env.NODE_ENV !== "production" ? h(!1, `${t.type} not permitted in phase ${e.phase}`) : h(!1));
    const {
      client: n
    } = t.payload;
    return nt(n, e.current.client.selection) ? e : Rt({
      state: e,
      clientSelection: n,
      impact: pr(e) ? e.impact : null
    });
  }
  if (t.type === "UPDATE_DROPPABLE_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "COLLECTING")
      return Wn(e);
    ct(e) || (process.env.NODE_ENV !== "production" ? h(!1, `${t.type} not permitted in phase ${e.phase}`) : h(!1));
    const {
      id: n,
      newScroll: r
    } = t.payload, o = e.dimensions.droppables[n];
    if (!o)
      return e;
    const i = Pr(o, r);
    return Gn(e, i, !1);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    ct(e) || (process.env.NODE_ENV !== "production" ? h(!1, `Attempting to move in an unsupported phase ${e.phase}`) : h(!1));
    const {
      id: n,
      isEnabled: r
    } = t.payload, o = e.dimensions.droppables[n];
    o || (process.env.NODE_ENV !== "production" ? h(!1, `Cannot find Droppable[id: ${n}] to toggle its enabled state`) : h(!1)), o.isEnabled === r && (process.env.NODE_ENV !== "production" ? h(!1, `Trying to set droppable isEnabled to ${String(r)}
      but it is already ${String(o.isEnabled)}`) : h(!1));
    const i = {
      ...o,
      isEnabled: r
    };
    return Gn(e, i, !0);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_COMBINE_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    ct(e) || (process.env.NODE_ENV !== "production" ? h(!1, `Attempting to move in an unsupported phase ${e.phase}`) : h(!1));
    const {
      id: n,
      isCombineEnabled: r
    } = t.payload, o = e.dimensions.droppables[n];
    o || (process.env.NODE_ENV !== "production" ? h(!1, `Cannot find Droppable[id: ${n}] to toggle its isCombineEnabled state`) : h(!1)), o.isCombineEnabled === r && (process.env.NODE_ENV !== "production" ? h(!1, `Trying to set droppable isCombineEnabled to ${String(r)}
      but it is already ${String(o.isCombineEnabled)}`) : h(!1));
    const i = {
      ...o,
      isCombineEnabled: r
    };
    return Gn(e, i, !0);
  }
  if (t.type === "MOVE_BY_WINDOW_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "DROP_ANIMATING")
      return e;
    ct(e) || (process.env.NODE_ENV !== "production" ? h(!1, `Cannot move by window in phase ${e.phase}`) : h(!1)), e.isWindowScrollAllowed || (process.env.NODE_ENV !== "production" ? h(!1, "Window scrolling is currently not supported for fixed lists") : h(!1));
    const n = t.payload.newScroll;
    if (nt(e.viewport.scroll.current, n))
      return Wn(e);
    const r = ns(e.viewport, n);
    return pr(e) ? fs({
      state: e,
      viewport: r
    }) : Rt({
      state: e,
      viewport: r
    });
  }
  if (t.type === "UPDATE_VIEWPORT_MAX_SCROLL") {
    if (!ct(e))
      return e;
    const n = t.payload.maxScroll;
    if (nt(n, e.viewport.scroll.max))
      return e;
    const r = {
      ...e.viewport,
      scroll: {
        ...e.viewport.scroll,
        max: n
      }
    };
    return {
      ...e,
      viewport: r
    };
  }
  if (t.type === "MOVE_UP" || t.type === "MOVE_DOWN" || t.type === "MOVE_LEFT" || t.type === "MOVE_RIGHT") {
    if (e.phase === "COLLECTING" || e.phase === "DROP_PENDING")
      return e;
    e.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? h(!1, `${t.type} received while not in DRAGGING phase`) : h(!1));
    const n = jc({
      state: e,
      type: t.type
    });
    return n ? Rt({
      state: e,
      impact: n.impact,
      clientSelection: n.clientSelection,
      scrollJumpRequest: n.scrollJumpRequest
    }) : e;
  }
  if (t.type === "DROP_PENDING") {
    const n = t.payload.reason;
    return e.phase !== "COLLECTING" && (process.env.NODE_ENV !== "production" ? h(!1, "Can only move into the DROP_PENDING phase from the COLLECTING phase") : h(!1)), {
      ...e,
      phase: "DROP_PENDING",
      isWaiting: !0,
      reason: n
    };
  }
  if (t.type === "DROP_ANIMATE") {
    const {
      completed: n,
      dropDuration: r,
      newHomeClientOffset: o
    } = t.payload;
    return e.phase === "DRAGGING" || e.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? h(!1, `Cannot animate drop from phase ${e.phase}`) : h(!1)), {
      phase: "DROP_ANIMATING",
      completed: n,
      dropDuration: r,
      newHomeClientOffset: o,
      dimensions: e.dimensions
    };
  }
  if (t.type === "DROP_COMPLETE") {
    const {
      completed: n
    } = t.payload;
    return {
      phase: "IDLE",
      completed: n,
      shouldFlush: !1
    };
  }
  return e;
};
const rl = (e) => ({
  type: "BEFORE_INITIAL_CAPTURE",
  payload: e
}), ol = (e) => ({
  type: "LIFT",
  payload: e
}), il = (e) => ({
  type: "INITIAL_PUBLISH",
  payload: e
}), sl = (e) => ({
  type: "PUBLISH_WHILE_DRAGGING",
  payload: e
}), ul = () => ({
  type: "COLLECTION_STARTING",
  payload: null
}), al = (e) => ({
  type: "UPDATE_DROPPABLE_SCROLL",
  payload: e
}), cl = (e) => ({
  type: "UPDATE_DROPPABLE_IS_ENABLED",
  payload: e
}), ll = (e) => ({
  type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
  payload: e
}), Ds = (e) => ({
  type: "MOVE",
  payload: e
}), dl = (e) => ({
  type: "MOVE_BY_WINDOW_SCROLL",
  payload: e
}), fl = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), pl = () => ({
  type: "MOVE_UP",
  payload: null
}), Dl = () => ({
  type: "MOVE_DOWN",
  payload: null
}), ml = () => ({
  type: "MOVE_RIGHT",
  payload: null
}), hl = () => ({
  type: "MOVE_LEFT",
  payload: null
}), Mr = () => ({
  type: "FLUSH",
  payload: null
}), gl = (e) => ({
  type: "DROP_ANIMATE",
  payload: e
}), kr = (e) => ({
  type: "DROP_COMPLETE",
  payload: e
}), ms = (e) => ({
  type: "DROP",
  payload: e
}), El = (e) => ({
  type: "DROP_PENDING",
  payload: e
}), hs = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
});
function bl(e) {
  if (e.length <= 1)
    return;
  const t = e.map((o) => o.descriptor.index), n = {};
  for (let o = 1; o < t.length; o++) {
    const i = t[o], s = t[o - 1];
    i !== s + 1 && (n[i] = !0);
  }
  if (!Object.keys(n).length)
    return;
  const r = t.map((o) => !!n[o] ? `[🔥${o}]` : `${o}`).join(", ");
  process.env.NODE_ENV !== "production" && ie(`
    Detected non-consecutive <Draggable /> indexes.

    (This can cause unexpected bugs)

    ${r}
  `);
}
function yl(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = mt(e.droppable.id, t.draggables);
    bl(n);
  }
}
var vl = (e) => ({
  getState: t,
  dispatch: n
}) => (r) => (o) => {
  if (o.type !== "LIFT") {
    r(o);
    return;
  }
  const {
    id: i,
    clientSelection: s,
    movementMode: u
  } = o.payload, c = t();
  c.phase === "DROP_ANIMATING" && n(kr({
    completed: c.completed
  })), t().phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? h(!1, "Unexpected phase to start a drag") : h(!1)), n(Mr()), n(rl({
    draggableId: i,
    movementMode: u
  }));
  const f = {
    draggableId: i,
    scrollOptions: {
      shouldPublishImmediately: u === "SNAP"
    }
  }, {
    critical: a,
    dimensions: d,
    viewport: p
  } = e.startPublishing(f);
  yl(a, d), n(il({
    critical: a,
    dimensions: d,
    clientSelection: s,
    movementMode: u,
    viewport: p
  }));
}, Cl = (e) => () => (t) => (n) => {
  n.type === "INITIAL_PUBLISH" && e.dragging(), n.type === "DROP_ANIMATE" && e.dropping(n.payload.completed.result.reason), (n.type === "FLUSH" || n.type === "DROP_COMPLETE") && e.resting(), t(n);
};
const Gr = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, Wt = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, gs = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, it = `${gs.outOfTheWay}s ${Gr.outOfTheWay}`, Tt = {
  fluid: `opacity ${it}`,
  snap: `transform ${it}, opacity ${it}`,
  drop: (e) => {
    const t = `${e}s ${Gr.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${it}`,
  placeholder: `height ${it}, width ${it}, margin ${it}`
}, ni = (e) => nt(e, ve) ? void 0 : `translate(${e.x}px, ${e.y}px)`, Dr = {
  moveTo: ni,
  drop: (e, t) => {
    const n = ni(e);
    if (n)
      return t ? `${n} scale(${Wt.scale.drop})` : n;
  }
}, {
  minDropTime: mr,
  maxDropTime: Es
} = gs, Al = Es - mr, ri = 1500, Fl = 0.6;
var Sl = ({
  current: e,
  destination: t,
  reason: n
}) => {
  const r = Mt(e, t);
  if (r <= 0)
    return mr;
  if (r >= ri)
    return Es;
  const o = r / ri, i = mr + Al * o, s = n === "CANCEL" ? i * Fl : i;
  return Number(s.toFixed(2));
}, wl = ({
  impact: e,
  draggable: t,
  dimensions: n,
  viewport: r,
  afterCritical: o
}) => {
  const {
    draggables: i,
    droppables: s
  } = n, u = $e(e), c = u ? s[u] : null, l = s[t.descriptor.droppableId], f = ds({
    impact: e,
    draggable: t,
    draggables: i,
    afterCritical: o,
    droppable: c || l,
    viewport: r
  });
  return je(f, t.client.borderBox.center);
}, Nl = ({
  draggables: e,
  reason: t,
  lastImpact: n,
  home: r,
  viewport: o,
  onLiftImpact: i
}) => !n.at || t !== "DROP" ? {
  impact: ls({
    draggables: e,
    impact: i,
    destination: r,
    viewport: o,
    forceShouldAnimate: !0
  }),
  didDropInsideDroppable: !1
} : n.at.type === "REORDER" ? {
  impact: n,
  didDropInsideDroppable: !0
} : {
  impact: {
    ...n,
    displaced: kt
  },
  didDropInsideDroppable: !0
};
const Ol = ({
  getState: e,
  dispatch: t
}) => (n) => (r) => {
  if (r.type !== "DROP") {
    n(r);
    return;
  }
  const o = e(), i = r.payload.reason;
  if (o.phase === "COLLECTING") {
    t(El({
      reason: i
    }));
    return;
  }
  if (o.phase === "IDLE")
    return;
  o.phase === "DROP_PENDING" && o.isWaiting && (process.env.NODE_ENV !== "production" ? h(!1, "A DROP action occurred while DROP_PENDING and still waiting") : h(!1)), o.phase === "DRAGGING" || o.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? h(!1, `Cannot drop in phase: ${o.phase}`) : h(!1));
  const u = o.critical, c = o.dimensions, l = c.draggables[o.critical.draggable.id], {
    impact: f,
    didDropInsideDroppable: a
  } = Nl({
    reason: i,
    lastImpact: o.impact,
    afterCritical: o.afterCritical,
    onLiftImpact: o.onLiftImpact,
    home: o.dimensions.droppables[o.critical.droppable.id],
    viewport: o.viewport,
    draggables: o.dimensions.draggables
  }), d = a ? Rr(f) : null, p = a ? wn(f) : null, E = {
    index: u.draggable.index,
    droppableId: u.droppable.id
  }, m = {
    draggableId: l.descriptor.id,
    type: l.descriptor.type,
    source: E,
    reason: i,
    mode: o.movementMode,
    destination: d,
    combine: p
  }, D = wl({
    impact: f,
    draggable: l,
    dimensions: c,
    viewport: o.viewport,
    afterCritical: o.afterCritical
  }), y = {
    critical: o.critical,
    afterCritical: o.afterCritical,
    result: m,
    impact: f
  };
  if (!(!nt(o.current.client.offset, D) || !!m.combine)) {
    t(kr({
      completed: y
    }));
    return;
  }
  const v = Sl({
    current: o.current.client.offset,
    destination: D,
    reason: i
  });
  t(gl({
    newHomeClientOffset: D,
    dropDuration: v,
    completed: y
  }));
};
var Bl = Ol, bs = () => ({
  x: window.pageXOffset,
  y: window.pageYOffset
});
function xl(e) {
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
function Il({
  onWindowScroll: e
}) {
  function t() {
    e(bs());
  }
  const n = jt(t), r = xl(n);
  let o = tt;
  function i() {
    return o !== tt;
  }
  function s() {
    i() && (process.env.NODE_ENV !== "production" ? h(!1, "Cannot start scroll listener when already active") : h(!1)), o = We(window, [r]);
  }
  function u() {
    i() || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot stop scroll listener when not active") : h(!1)), n.cancel(), o(), o = tt;
  }
  return {
    start: s,
    stop: u,
    isActive: i
  };
}
const _l = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH", Pl = (e) => {
  const t = Il({
    onWindowScroll: (n) => {
      e.dispatch(dl({
        newScroll: n
      }));
    }
  });
  return (n) => (r) => {
    !t.isActive() && r.type === "INITIAL_PUBLISH" && t.start(), t.isActive() && _l(r) && t.stop(), n(r);
  };
};
var Rl = Pl, Tl = (e) => {
  let t = !1, n = !1;
  const r = setTimeout(() => {
    n = !0;
  }), o = (i) => {
    if (t) {
      process.env.NODE_ENV !== "production" && ie("Announcement already made. Not making a second announcement");
      return;
    }
    if (n) {
      process.env.NODE_ENV !== "production" && ie(`
        Announcements cannot be made asynchronously.
        Default message has already been announced.
      `);
      return;
    }
    t = !0, e(i), clearTimeout(r);
  };
  return o.wasCalled = () => t, o;
}, Vl = () => {
  const e = [], t = (o) => {
    const i = e.findIndex((u) => u.timerId === o);
    i === -1 && (process.env.NODE_ENV !== "production" ? h(!1, "Could not find timer") : h(!1));
    const [s] = e.splice(i, 1);
    s.callback();
  };
  return {
    add: (o) => {
      const i = setTimeout(() => t(i)), s = {
        timerId: i,
        callback: o
      };
      e.push(s);
    },
    flush: () => {
      if (!e.length)
        return;
      const o = [...e];
      e.length = 0, o.forEach((i) => {
        clearTimeout(i.timerId), i.callback();
      });
    }
  };
};
const Ll = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.droppableId === t.droppableId && e.index === t.index, jl = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.draggableId === t.draggableId && e.droppableId === t.droppableId, $l = (e, t) => {
  if (e === t)
    return !0;
  const n = e.draggable.id === t.draggable.id && e.draggable.droppableId === t.draggable.droppableId && e.draggable.type === t.draggable.type && e.draggable.index === t.draggable.index, r = e.droppable.id === t.droppable.id && e.droppable.type === t.droppable.type;
  return n && r;
}, Nt = (e, t) => {
  Kt(), t(), Jt();
}, rn = (e, t) => ({
  draggableId: e.draggable.id,
  type: e.droppable.type,
  source: {
    droppableId: e.droppable.id,
    index: e.draggable.index
  },
  mode: t
});
function Un(e, t, n, r) {
  if (!e) {
    n(r(t));
    return;
  }
  const o = Tl(n);
  e(t, {
    announce: o
  }), o.wasCalled() || n(r(t));
}
var Ml = (e, t) => {
  const n = Vl();
  let r = null;
  const o = (a, d) => {
    r && (process.env.NODE_ENV !== "production" ? h(!1, "Cannot fire onBeforeCapture as a drag start has already been published") : h(!1)), Nt("onBeforeCapture", () => {
      const p = e().onBeforeCapture;
      p && p({
        draggableId: a,
        mode: d
      });
    });
  }, i = (a, d) => {
    r && (process.env.NODE_ENV !== "production" ? h(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : h(!1)), Nt("onBeforeDragStart", () => {
      const p = e().onBeforeDragStart;
      p && p(rn(a, d));
    });
  }, s = (a, d) => {
    r && (process.env.NODE_ENV !== "production" ? h(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : h(!1));
    const p = rn(a, d);
    r = {
      mode: d,
      lastCritical: a,
      lastLocation: p.source,
      lastCombine: null
    }, n.add(() => {
      Nt("onDragStart", () => Un(e().onDragStart, p, t, dn.onDragStart));
    });
  }, u = (a, d) => {
    const p = Rr(d), E = wn(d);
    r || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot fire onDragMove when onDragStart has not been called") : h(!1));
    const m = !$l(a, r.lastCritical);
    m && (r.lastCritical = a);
    const D = !Ll(r.lastLocation, p);
    D && (r.lastLocation = p);
    const y = !jl(r.lastCombine, E);
    if (y && (r.lastCombine = E), !m && !D && !y)
      return;
    const A = {
      ...rn(a, r.mode),
      combine: E,
      destination: p
    };
    n.add(() => {
      Nt("onDragUpdate", () => Un(e().onDragUpdate, A, t, dn.onDragUpdate));
    });
  }, c = () => {
    r || (process.env.NODE_ENV !== "production" ? h(!1, "Can only flush responders while dragging") : h(!1)), n.flush();
  }, l = (a) => {
    r || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot fire onDragEnd when there is no matching onDragStart") : h(!1)), r = null, Nt("onDragEnd", () => Un(e().onDragEnd, a, t, dn.onDragEnd));
  };
  return {
    beforeCapture: o,
    beforeStart: i,
    start: s,
    update: u,
    flush: c,
    drop: l,
    abort: () => {
      if (!r)
        return;
      const a = {
        ...rn(r.lastCritical, r.mode),
        combine: null,
        destination: null,
        reason: "CANCEL"
      };
      l(a);
    }
  };
}, kl = (e, t) => {
  const n = Ml(e, t);
  return (r) => (o) => (i) => {
    if (i.type === "BEFORE_INITIAL_CAPTURE") {
      n.beforeCapture(i.payload.draggableId, i.payload.movementMode);
      return;
    }
    if (i.type === "INITIAL_PUBLISH") {
      const u = i.payload.critical;
      n.beforeStart(u, i.payload.movementMode), o(i), n.start(u, i.payload.movementMode);
      return;
    }
    if (i.type === "DROP_COMPLETE") {
      const u = i.payload.completed.result;
      n.flush(), o(i), n.drop(u);
      return;
    }
    if (o(i), i.type === "FLUSH") {
      n.abort();
      return;
    }
    const s = r.getState();
    s.phase === "DRAGGING" && n.update(s.critical, s.impact);
  };
};
const Gl = (e) => (t) => (n) => {
  if (n.type !== "DROP_ANIMATION_FINISHED") {
    t(n);
    return;
  }
  const r = e.getState();
  r.phase !== "DROP_ANIMATING" && (process.env.NODE_ENV !== "production" ? h(!1, "Cannot finish a drop animating when no drop is occurring") : h(!1)), e.dispatch(kr({
    completed: r.completed
  }));
};
var Wl = Gl;
const Ul = (e) => {
  let t = null, n = null;
  function r() {
    n && (cancelAnimationFrame(n), n = null), t && (t(), t = null);
  }
  return (o) => (i) => {
    if ((i.type === "FLUSH" || i.type === "DROP_COMPLETE" || i.type === "DROP_ANIMATION_FINISHED") && r(), o(i), i.type !== "DROP_ANIMATE")
      return;
    const s = {
      eventName: "scroll",
      options: {
        capture: !0,
        passive: !1,
        once: !0
      },
      fn: function() {
        e.getState().phase === "DROP_ANIMATING" && e.dispatch(hs());
      }
    };
    n = requestAnimationFrame(() => {
      n = null, t = We(window, [s]);
    });
  };
};
var zl = Ul, Hl = (e) => () => (t) => (n) => {
  (n.type === "DROP_COMPLETE" || n.type === "FLUSH" || n.type === "DROP_ANIMATE") && e.stopPublishing(), t(n);
}, ql = (e) => {
  let t = !1;
  return () => (n) => (r) => {
    if (r.type === "INITIAL_PUBLISH") {
      t = !0, e.tryRecordFocus(r.payload.critical.draggable.id), n(r), e.tryRestoreFocusRecorded();
      return;
    }
    if (n(r), !!t) {
      if (r.type === "FLUSH") {
        t = !1, e.tryRestoreFocusRecorded();
        return;
      }
      if (r.type === "DROP_COMPLETE") {
        t = !1;
        const o = r.payload.completed.result;
        o.combine && e.tryShiftRecord(o.draggableId, o.combine.draggableId), e.tryRestoreFocusRecorded();
      }
    }
  };
};
const Yl = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH";
var Kl = (e) => (t) => (n) => (r) => {
  if (Yl(r)) {
    e.stop(), n(r);
    return;
  }
  if (r.type === "INITIAL_PUBLISH") {
    n(r);
    const o = t.getState();
    o.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? h(!1, "Expected phase to be DRAGGING after INITIAL_PUBLISH") : h(!1)), e.start(o);
    return;
  }
  n(r), e.scroll(t.getState());
};
const Jl = (e) => (t) => (n) => {
  if (t(n), n.type !== "PUBLISH_WHILE_DRAGGING")
    return;
  const r = e.getState();
  r.phase === "DROP_PENDING" && (r.isWaiting || e.dispatch(ms({
    reason: r.reason
  })));
};
var Xl = Jl;
const Ql = process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
}) : _i;
var Zl = ({
  dimensionMarshal: e,
  focusMarshal: t,
  styleMarshal: n,
  getResponders: r,
  announce: o,
  autoScroller: i
}) => Ii(nl, Ql($u(Cl(n), Hl(e), vl(e), Bl, Wl, zl, Xl, Kl(i), Rl, ql(t), kl(r, o))));
const zn = () => ({
  additions: {},
  removals: {},
  modified: {}
});
function ed({
  registry: e,
  callbacks: t
}) {
  let n = zn(), r = null;
  const o = () => {
    r || (t.collectionStarting(), r = requestAnimationFrame(() => {
      r = null, Kt();
      const {
        additions: c,
        removals: l,
        modified: f
      } = n, a = Object.keys(c).map((E) => e.draggable.getById(E).getDimension(ve)).sort((E, m) => E.descriptor.index - m.descriptor.index), d = Object.keys(f).map((E) => {
        const D = e.droppable.getById(E).callbacks.getScrollWhileDragging();
        return {
          droppableId: E,
          scroll: D
        };
      }), p = {
        additions: a,
        removals: Object.keys(l),
        modified: d
      };
      n = zn(), Jt(), t.publish(p);
    }));
  };
  return {
    add: (c) => {
      const l = c.descriptor.id;
      n.additions[l] = c, n.modified[c.descriptor.droppableId] = !0, n.removals[l] && delete n.removals[l], o();
    },
    remove: (c) => {
      const l = c.descriptor;
      n.removals[l.id] = !0, n.modified[l.droppableId] = !0, n.additions[l.id] && delete n.additions[l.id], o();
    },
    stop: () => {
      r && (cancelAnimationFrame(r), r = null, n = zn());
    }
  };
}
var ys = ({
  scrollHeight: e,
  scrollWidth: t,
  height: n,
  width: r
}) => {
  const o = je({
    x: t,
    y: e
  }, {
    x: r,
    y: n
  });
  return {
    x: Math.max(0, o.x),
    y: Math.max(0, o.y)
  };
}, vs = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot find document.documentElement") : h(!1)), e;
}, Cs = () => {
  const e = vs();
  return ys({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
}, td = () => {
  const e = bs(), t = Cs(), n = e.y, r = e.x, o = vs(), i = o.clientWidth, s = o.clientHeight, u = r + i, c = n + s;
  return {
    frame: ze({
      top: n,
      left: r,
      right: u,
      bottom: c
    }),
    scroll: {
      initial: e,
      current: e,
      max: t,
      diff: {
        value: ve,
        displacement: ve
      }
    }
  };
}, nd = ({
  critical: e,
  scrollOptions: t,
  registry: n
}) => {
  Kt();
  const r = td(), o = r.scroll.current, i = e.droppable, s = n.droppable.getAllByType(i.type).map((f) => f.callbacks.getDimensionAndWatchScroll(o, t)), u = n.draggable.getAllByType(e.draggable.type).map((f) => f.getDimension(o)), c = {
    draggables: Ji(u),
    droppables: Ki(s)
  };
  return Jt(), {
    dimensions: c,
    critical: e,
    viewport: r
  };
};
function oi(e, t, n) {
  return n.descriptor.id === t.id || n.descriptor.type !== t.type ? !1 : e.droppable.getById(n.descriptor.droppableId).descriptor.mode !== "virtual" ? (process.env.NODE_ENV !== "production" && ie(`
      You are attempting to add or remove a Draggable [id: ${n.descriptor.id}]
      while a drag is occurring. This is only supported for virtual lists.

      See https://github.com/hello-pangea/dnd/blob/main/docs/patterns/virtual-lists.md
    `), !1) : !0;
}
var rd = (e, t) => {
  let n = null;
  const r = ed({
    callbacks: {
      publish: t.publishWhileDragging,
      collectionStarting: t.collectionStarting
    },
    registry: e
  }), o = (d, p) => {
    e.droppable.exists(d) || (process.env.NODE_ENV !== "production" ? h(!1, `Cannot update is enabled flag of Droppable ${d} as it is not registered`) : h(!1)), n && t.updateDroppableIsEnabled({
      id: d,
      isEnabled: p
    });
  }, i = (d, p) => {
    n && (e.droppable.exists(d) || (process.env.NODE_ENV !== "production" ? h(!1, `Cannot update isCombineEnabled flag of Droppable ${d} as it is not registered`) : h(!1)), t.updateDroppableIsCombineEnabled({
      id: d,
      isCombineEnabled: p
    }));
  }, s = (d, p) => {
    n && (e.droppable.exists(d) || (process.env.NODE_ENV !== "production" ? h(!1, `Cannot update the scroll on Droppable ${d} as it is not registered`) : h(!1)), t.updateDroppableScroll({
      id: d,
      newScroll: p
    }));
  }, u = (d, p) => {
    n && e.droppable.getById(d).callbacks.scroll(p);
  }, c = () => {
    if (!n)
      return;
    r.stop();
    const d = n.critical.droppable;
    e.droppable.getAllByType(d.type).forEach((p) => p.callbacks.dragStopped()), n.unsubscribe(), n = null;
  }, l = (d) => {
    n || (process.env.NODE_ENV !== "production" ? h(!1, "Should only be subscribed when a collection is occurring") : h(!1));
    const p = n.critical.draggable;
    d.type === "ADDITION" && oi(e, p, d.value) && r.add(d.value), d.type === "REMOVAL" && oi(e, p, d.value) && r.remove(d.value);
  };
  return {
    updateDroppableIsEnabled: o,
    updateDroppableIsCombineEnabled: i,
    scrollDroppable: u,
    updateDroppableScroll: s,
    startPublishing: (d) => {
      n && (process.env.NODE_ENV !== "production" ? h(!1, "Cannot start capturing critical dimensions as there is already a collection") : h(!1));
      const p = e.draggable.getById(d.draggableId), E = e.droppable.getById(p.descriptor.droppableId), m = {
        draggable: p.descriptor,
        droppable: E.descriptor
      }, D = e.subscribe(l);
      return n = {
        critical: m,
        unsubscribe: D
      }, nd({
        critical: m,
        registry: e,
        scrollOptions: d.scrollOptions
      });
    },
    stopPublishing: c
  };
}, As = (e, t) => e.phase === "IDLE" ? !0 : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === t ? !1 : e.completed.result.reason === "DROP", od = (e) => {
  window.scrollBy(e.x, e.y);
};
const id = ye((e) => Sn(e).filter((t) => !(!t.isEnabled || !t.frame))), sd = (e, t) => id(t).find((r) => (r.frame || (process.env.NODE_ENV !== "production" ? h(!1, "Invalid result") : h(!1)), ss(r.frame.pageMarginBox)(e))) || null;
var ud = ({
  center: e,
  destination: t,
  droppables: n
}) => {
  if (t) {
    const o = n[t];
    return o.frame ? o : null;
  }
  return sd(e, n);
};
const Ut = {
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
var ad = (e, t, n = () => Ut) => {
  const r = n(), o = e[t.size] * r.startFromPercentage, i = e[t.size] * r.maxScrollAtPercentage;
  return {
    startScrollingFrom: o,
    maxScrollValueAt: i
  };
}, Fs = ({
  startOfRange: e,
  endOfRange: t,
  current: n
}) => {
  const r = t - e;
  return r === 0 ? (process.env.NODE_ENV !== "production" && ie(`
      Detected distance range of 0 in the fluid auto scroller
      This is unexpected and would cause a divide by 0 issue.
      Not allowing an auto scroll
    `), 0) : (n - e) / r;
}, Wr = 1, cd = (e, t, n = () => Ut) => {
  const r = n();
  if (e > t.startScrollingFrom)
    return 0;
  if (e <= t.maxScrollValueAt)
    return r.maxPixelScroll;
  if (e === t.startScrollingFrom)
    return Wr;
  const i = 1 - Fs({
    startOfRange: t.maxScrollValueAt,
    endOfRange: t.startScrollingFrom,
    current: e
  }), s = r.maxPixelScroll * r.ease(i);
  return Math.ceil(s);
}, ld = (e, t, n) => {
  const r = n(), o = r.durationDampening.accelerateAt, i = r.durationDampening.stopDampeningAt, s = t, u = i, l = Date.now() - s;
  if (l >= i)
    return e;
  if (l < o)
    return Wr;
  const f = Fs({
    startOfRange: o,
    endOfRange: u,
    current: l
  }), a = e * r.ease(f);
  return Math.ceil(a);
}, ii = ({
  distanceToEdge: e,
  thresholds: t,
  dragStartTime: n,
  shouldUseTimeDampening: r,
  getAutoScrollerOptions: o
}) => {
  const i = cd(e, t, o);
  return i === 0 ? 0 : r ? Math.max(ld(i, n, o), Wr) : i;
}, si = ({
  container: e,
  distanceToEdges: t,
  dragStartTime: n,
  axis: r,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const s = ad(e, r, i);
  return t[r.end] < t[r.start] ? ii({
    distanceToEdge: t[r.end],
    thresholds: s,
    dragStartTime: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }) : -1 * ii({
    distanceToEdge: t[r.start],
    thresholds: s,
    dragStartTime: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
}, dd = ({
  container: e,
  subject: t,
  proposedScroll: n
}) => {
  const r = t.height > e.height, o = t.width > e.width;
  return !o && !r ? n : o && r ? null : {
    x: o ? 0 : n.x,
    y: r ? 0 : n.y
  };
};
const fd = Yi((e) => e === 0 ? 0 : e);
var Ss = ({
  dragStartTime: e,
  container: t,
  subject: n,
  center: r,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const s = {
    top: r.y - t.top,
    right: t.right - r.x,
    bottom: t.bottom - r.y,
    left: r.x - t.left
  }, u = si({
    container: t,
    distanceToEdges: s,
    dragStartTime: e,
    axis: Tr,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), c = si({
    container: t,
    distanceToEdges: s,
    dragStartTime: e,
    axis: Zi,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), l = fd({
    x: c,
    y: u
  });
  if (nt(l, ve))
    return null;
  const f = dd({
    container: t,
    subject: n,
    proposedScroll: l
  });
  return f ? nt(f, ve) ? null : f : null;
};
const pd = Yi((e) => e === 0 ? 0 : e > 0 ? 1 : -1), Ur = (() => {
  const e = (t, n) => t < 0 ? t : t > n ? t - n : 0;
  return ({
    current: t,
    max: n,
    change: r
  }) => {
    const o = Ae(t, r), i = {
      x: e(o.x, n.x),
      y: e(o.y, n.y)
    };
    return nt(i, ve) ? null : i;
  };
})(), ws = ({
  max: e,
  current: t,
  change: n
}) => {
  const r = {
    x: Math.max(t.x, e.x),
    y: Math.max(t.y, e.y)
  }, o = pd(n), i = Ur({
    max: r,
    current: t,
    change: o
  });
  return !i || o.x !== 0 && i.x === 0 || o.y !== 0 && i.y === 0;
}, zr = (e, t) => ws({
  current: e.scroll.current,
  max: e.scroll.max,
  change: t
}), Dd = (e, t) => {
  if (!zr(e, t))
    return null;
  const n = e.scroll.max, r = e.scroll.current;
  return Ur({
    current: r,
    max: n,
    change: t
  });
}, Hr = (e, t) => {
  const n = e.frame;
  return n ? ws({
    current: n.scroll.current,
    max: n.scroll.max,
    change: t
  }) : !1;
}, md = (e, t) => {
  const n = e.frame;
  return !n || !Hr(e, t) ? null : Ur({
    current: n.scroll.current,
    max: n.scroll.max,
    change: t
  });
};
var hd = ({
  viewport: e,
  subject: t,
  center: n,
  dragStartTime: r,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const s = Ss({
    dragStartTime: r,
    container: e.frame,
    subject: t,
    center: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
  return s && zr(e, s) ? s : null;
}, gd = ({
  droppable: e,
  subject: t,
  center: n,
  dragStartTime: r,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const s = e.frame;
  if (!s)
    return null;
  const u = Ss({
    dragStartTime: r,
    container: s.pageMarginBox,
    subject: t,
    center: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
  return u && Hr(e, u) ? u : null;
}, ui = ({
  state: e,
  dragStartTime: t,
  shouldUseTimeDampening: n,
  scrollWindow: r,
  scrollDroppable: o,
  getAutoScrollerOptions: i
}) => {
  const s = e.current.page.borderBoxCenter, c = e.dimensions.draggables[e.critical.draggable.id].page.marginBox;
  if (e.isWindowScrollAllowed) {
    const a = e.viewport, d = hd({
      dragStartTime: t,
      viewport: a,
      subject: c,
      center: s,
      shouldUseTimeDampening: n,
      getAutoScrollerOptions: i
    });
    if (d) {
      r(d);
      return;
    }
  }
  const l = ud({
    center: s,
    destination: $e(e.impact),
    droppables: e.dimensions.droppables
  });
  if (!l)
    return;
  const f = gd({
    dragStartTime: t,
    droppable: l,
    subject: c,
    center: s,
    shouldUseTimeDampening: n,
    getAutoScrollerOptions: i
  });
  f && o(l.descriptor.id, f);
}, Ed = ({
  scrollWindow: e,
  scrollDroppable: t,
  getAutoScrollerOptions: n = () => Ut
}) => {
  const r = jt(e), o = jt(t);
  let i = null;
  const s = (l) => {
    i || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot fluid scroll if not dragging") : h(!1));
    const {
      shouldUseTimeDampening: f,
      dragStartTime: a
    } = i;
    ui({
      state: l,
      scrollWindow: r,
      scrollDroppable: o,
      dragStartTime: a,
      shouldUseTimeDampening: f,
      getAutoScrollerOptions: n
    });
  };
  return {
    start: (l) => {
      Kt(), i && (process.env.NODE_ENV !== "production" ? h(!1, "Cannot start auto scrolling when already started") : h(!1));
      const f = Date.now();
      let a = !1;
      const d = () => {
        a = !0;
      };
      ui({
        state: l,
        dragStartTime: 0,
        shouldUseTimeDampening: !1,
        scrollWindow: d,
        scrollDroppable: d,
        getAutoScrollerOptions: n
      }), i = {
        dragStartTime: f,
        shouldUseTimeDampening: a
      }, Jt(), a && s(l);
    },
    stop: () => {
      i && (r.cancel(), o.cancel(), i = null);
    },
    scroll: s
  };
}, bd = ({
  move: e,
  scrollDroppable: t,
  scrollWindow: n
}) => {
  const r = (u, c) => {
    const l = Ae(u.current.client.selection, c);
    e({
      client: l
    });
  }, o = (u, c) => {
    if (!Hr(u, c))
      return c;
    const l = md(u, c);
    if (!l)
      return t(u.descriptor.id, c), null;
    const f = je(c, l);
    return t(u.descriptor.id, f), je(c, f);
  }, i = (u, c, l) => {
    if (!u || !zr(c, l))
      return l;
    const f = Dd(c, l);
    if (!f)
      return n(l), null;
    const a = je(l, f);
    return n(a), je(l, a);
  };
  return (u) => {
    const c = u.scrollJumpRequest;
    if (!c)
      return;
    const l = $e(u.impact);
    l || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot perform a jump scroll when there is no destination") : h(!1));
    const f = o(u.dimensions.droppables[l], c);
    if (!f)
      return;
    const a = u.viewport, d = i(u.isWindowScrollAllowed, a, f);
    d && r(u, d);
  };
}, yd = ({
  scrollDroppable: e,
  scrollWindow: t,
  move: n,
  getAutoScrollerOptions: r
}) => {
  const o = Ed({
    scrollWindow: t,
    scrollDroppable: e,
    getAutoScrollerOptions: r
  }), i = bd({
    move: n,
    scrollWindow: t,
    scrollDroppable: e
  });
  return {
    scroll: (c) => {
      if (!(r().disabled || c.phase !== "DRAGGING")) {
        if (c.movementMode === "FLUID") {
          o.scroll(c);
          return;
        }
        c.scrollJumpRequest && i(c);
      }
    },
    start: o.start,
    stop: o.stop
  };
};
const yt = "data-rfd", vt = (() => {
  const e = `${yt}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), hr = (() => {
  const e = `${yt}-draggable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), vd = (() => {
  const e = `${yt}-droppable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), ai = {
  contextId: `${yt}-scroll-container-context-id`
}, Cd = (e) => (t) => `[${t}="${e}"]`, Ot = (e, t) => e.map((n) => {
  const r = n.styles[t];
  return r ? `${n.selector} { ${r} }` : "";
}).join(" "), Ad = "pointer-events: none;";
var Fd = (e) => {
  const t = Cd(e), n = (() => {
    const u = `
      cursor: -webkit-grab;
      cursor: grab;
    `;
    return {
      selector: t(vt.contextId),
      styles: {
        always: `
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,
        resting: u,
        dragging: Ad,
        dropAnimating: u
      }
    };
  })(), r = (() => {
    const u = `
      transition: ${Tt.outOfTheWay};
    `;
    return {
      selector: t(hr.contextId),
      styles: {
        dragging: u,
        dropAnimating: u,
        userCancel: u
      }
    };
  })(), o = {
    selector: t(vd.contextId),
    styles: {
      always: "overflow-anchor: none;"
    }
  }, s = [r, n, o, {
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
    always: Ot(s, "always"),
    resting: Ot(s, "resting"),
    dragging: Ot(s, "dragging"),
    dropAnimating: Ot(s, "dropAnimating"),
    userCancel: Ot(s, "userCancel")
  };
};
const Sd = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? C.useLayoutEffect : C.useEffect;
var Me = Sd;
const Hn = () => {
  const e = document.querySelector("head");
  return e || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot find the head to append a style to") : h(!1)), e;
}, ci = (e) => {
  const t = document.createElement("style");
  return e && t.setAttribute("nonce", e), t.type = "text/css", t;
};
function wd(e, t) {
  const n = H(() => Fd(e), [e]), r = C.useRef(null), o = C.useRef(null), i = R(ye((a) => {
    const d = o.current;
    d || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot set dynamic style element if it is not set") : h(!1)), d.textContent = a;
  }), []), s = R((a) => {
    const d = r.current;
    d || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot set dynamic style element if it is not set") : h(!1)), d.textContent = a;
  }, []);
  Me(() => {
    !r.current && !o.current || (process.env.NODE_ENV !== "production" ? h(!1, "style elements already mounted") : h(!1));
    const a = ci(t), d = ci(t);
    return r.current = a, o.current = d, a.setAttribute(`${yt}-always`, e), d.setAttribute(`${yt}-dynamic`, e), Hn().appendChild(a), Hn().appendChild(d), s(n.always), i(n.resting), () => {
      const p = (E) => {
        const m = E.current;
        m || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot unmount ref as it is not set") : h(!1)), Hn().removeChild(m), E.current = null;
      };
      p(r), p(o);
    };
  }, [t, s, i, n.always, n.resting, e]);
  const u = R(() => i(n.dragging), [i, n.dragging]), c = R((a) => {
    if (a === "DROP") {
      i(n.dropAnimating);
      return;
    }
    i(n.userCancel);
  }, [i, n.dropAnimating, n.userCancel]), l = R(() => {
    o.current && i(n.resting);
  }, [i, n.resting]);
  return H(() => ({
    dragging: u,
    dropping: c,
    resting: l
  }), [u, c, l]);
}
function Ns(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var Os = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function Xt(e) {
  return e instanceof Os(e).HTMLElement;
}
function Bs(e, t) {
  const n = `[${vt.contextId}="${e}"]`, r = Ns(document, n);
  if (!r.length)
    return process.env.NODE_ENV !== "production" && ie(`Unable to find any drag handles in the context "${e}"`), null;
  const o = r.find((i) => i.getAttribute(vt.draggableId) === t);
  return o ? Xt(o) ? o : (process.env.NODE_ENV !== "production" && ie("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && ie(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
function Nd(e) {
  const t = C.useRef({}), n = C.useRef(null), r = C.useRef(null), o = C.useRef(!1), i = R(function(d, p) {
    const E = {
      id: d,
      focus: p
    };
    return t.current[d] = E, function() {
      const D = t.current;
      D[d] !== E && delete D[d];
    };
  }, []), s = R(function(d) {
    const p = Bs(e, d);
    p && p !== document.activeElement && p.focus();
  }, [e]), u = R(function(d, p) {
    n.current === d && (n.current = p);
  }, []), c = R(function() {
    r.current || o.current && (r.current = requestAnimationFrame(() => {
      r.current = null;
      const d = n.current;
      d && s(d);
    }));
  }, [s]), l = R(function(d) {
    n.current = null;
    const p = document.activeElement;
    p && p.getAttribute(vt.draggableId) === d && (n.current = d);
  }, []);
  return Me(() => (o.current = !0, function() {
    o.current = !1;
    const d = r.current;
    d && cancelAnimationFrame(d);
  }), []), H(() => ({
    register: i,
    tryRecordFocus: l,
    tryRestoreFocusRecorded: c,
    tryShiftRecord: u
  }), [i, l, c, u]);
}
function Od() {
  const e = {
    draggables: {},
    droppables: {}
  }, t = [];
  function n(a) {
    return t.push(a), function() {
      const p = t.indexOf(a);
      p !== -1 && t.splice(p, 1);
    };
  }
  function r(a) {
    t.length && t.forEach((d) => d(a));
  }
  function o(a) {
    return e.draggables[a] || null;
  }
  function i(a) {
    const d = o(a);
    return d || (process.env.NODE_ENV !== "production" ? h(!1, `Cannot find draggable entry with id [${a}]`) : h(!1)), d;
  }
  const s = {
    register: (a) => {
      e.draggables[a.descriptor.id] = a, r({
        type: "ADDITION",
        value: a
      });
    },
    update: (a, d) => {
      const p = e.draggables[d.descriptor.id];
      p && p.uniqueId === a.uniqueId && (delete e.draggables[d.descriptor.id], e.draggables[a.descriptor.id] = a);
    },
    unregister: (a) => {
      const d = a.descriptor.id, p = o(d);
      p && a.uniqueId === p.uniqueId && (delete e.draggables[d], e.droppables[a.descriptor.droppableId] && r({
        type: "REMOVAL",
        value: a
      }));
    },
    getById: i,
    findById: o,
    exists: (a) => !!o(a),
    getAllByType: (a) => Object.values(e.draggables).filter((d) => d.descriptor.type === a)
  };
  function u(a) {
    return e.droppables[a] || null;
  }
  function c(a) {
    const d = u(a);
    return d || (process.env.NODE_ENV !== "production" ? h(!1, `Cannot find droppable entry with id [${a}]`) : h(!1)), d;
  }
  const l = {
    register: (a) => {
      e.droppables[a.descriptor.id] = a;
    },
    unregister: (a) => {
      const d = u(a.descriptor.id);
      d && a.uniqueId === d.uniqueId && delete e.droppables[a.descriptor.id];
    },
    getById: c,
    findById: u,
    exists: (a) => !!u(a),
    getAllByType: (a) => Object.values(e.droppables).filter((d) => d.descriptor.type === a)
  };
  function f() {
    e.draggables = {}, e.droppables = {}, t.length = 0;
  }
  return {
    draggable: s,
    droppable: l,
    subscribe: n,
    clean: f
  };
}
function Bd() {
  const e = H(Od, []);
  return C.useEffect(() => function() {
    N.version.startsWith("16") || N.version.startsWith("17") ? requestAnimationFrame(e.clean) : e.clean();
  }, [e]), e;
}
var qr = N.createContext(null), zt = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot find document.body") : h(!1)), e;
};
const xd = {
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
var Id = xd;
const _d = (e) => `rfd-announcement-${e}`;
function Pd(e) {
  const t = H(() => _d(e), [e]), n = C.useRef(null);
  return C.useEffect(function() {
    const i = document.createElement("div");
    return n.current = i, i.id = t, i.setAttribute("aria-live", "assertive"), i.setAttribute("aria-atomic", "true"), Et(i.style, Id), zt().appendChild(i), function() {
      setTimeout(function() {
        const c = zt();
        c.contains(i) && c.removeChild(i), i === n.current && (n.current = null);
      });
    };
  }, [t]), R((o) => {
    const i = n.current;
    if (i) {
      i.textContent = o;
      return;
    }
    process.env.NODE_ENV !== "production" && ie(`
      A screen reader message was trying to be announced but it was unable to do so.
      This can occur if you unmount your <DragDropContext /> in your onDragEnd.
      Consider calling provided.announce() before the unmount so that the instruction will
      not be lost for users relying on a screen reader.

      Message not passed to screen reader:

      "${o}"
    `);
  }, []);
}
let Rd = 0;
const xs = {
  separator: "::"
};
function Td(e, t = xs) {
  return H(() => `${e}${t.separator}${Rd++}`, [t.separator, e]);
}
function Vd(e, t = xs) {
  const n = N.useId();
  return H(() => `${e}${t.separator}${n}`, [t.separator, e, n]);
}
var Yr = "useId" in N ? Vd : Td;
function Ld({
  contextId: e,
  uniqueId: t
}) {
  return `rfd-hidden-text-${e}-${t}`;
}
function jd({
  contextId: e,
  text: t
}) {
  const n = Yr("hidden-text", {
    separator: "-"
  }), r = H(() => Ld({
    contextId: e,
    uniqueId: n
  }), [n, e]);
  return C.useEffect(function() {
    const i = document.createElement("div");
    return i.id = r, i.textContent = t, i.style.display = "none", zt().appendChild(i), function() {
      const u = zt();
      u.contains(i) && u.removeChild(i);
    };
  }, [r, t]), r;
}
var Bn = N.createContext(null), $d = {
  react: "^16.8.5 || ^17.0.0 || ^18.0.0",
  "react-dom": "^16.8.5 || ^17.0.0 || ^18.0.0"
};
const Md = /(\d+)\.(\d+)\.(\d+)/, li = (e) => {
  const t = Md.exec(e);
  t == null && (process.env.NODE_ENV !== "production" ? h(!1, `Unable to parse React version ${e}`) : h(!1));
  const n = Number(t[1]), r = Number(t[2]), o = Number(t[3]);
  return {
    major: n,
    minor: r,
    patch: o,
    raw: e
  };
}, kd = (e, t) => t.major > e.major ? !0 : t.major < e.major ? !1 : t.minor > e.minor ? !0 : t.minor < e.minor ? !1 : t.patch >= e.patch;
var Gd = (e, t) => {
  const n = li(e), r = li(t);
  kd(n, r) || process.env.NODE_ENV !== "production" && ie(`
    React version: [${r.raw}]
    does not satisfy expected peer dependency version: [${n.raw}]

    This can result in run time bugs, and even fatal crashes
  `);
};
const qn = `
  We expect a html5 doctype: <!doctype html>
  This is to ensure consistent browser layout and measurement

  More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/doctype.md
`;
var Wd = (e) => {
  const t = e.doctype;
  if (!t) {
    process.env.NODE_ENV !== "production" && ie(`
      No <!doctype html> found.

      ${qn}
    `);
    return;
  }
  t.name.toLowerCase() !== "html" && process.env.NODE_ENV !== "production" && ie(`
      Unexpected <!doctype> found: (${t.name})

      ${qn}
    `), t.publicId !== "" && process.env.NODE_ENV !== "production" && ie(`
      Unexpected <!doctype> publicId found: (${t.publicId})
      A html5 doctype does not have a publicId

      ${qn}
    `);
};
function Kr(e) {
  process.env.NODE_ENV !== "production" && e();
}
function Qt(e, t) {
  Kr(() => {
    C.useEffect(() => {
      try {
        e();
      } catch (n) {
        dr(`
          A setup problem was encountered.

          > ${n.message}
        `);
      }
    }, t);
  });
}
function Ud() {
  Qt(() => {
    Gd($d.react, N.version), Wd(document);
  }, []);
}
function Jr(e) {
  const t = C.useRef(e);
  return C.useEffect(() => {
    t.current = e;
  }), t;
}
function zd() {
  let e = null;
  function t() {
    return !!e;
  }
  function n(s) {
    return s === e;
  }
  function r(s) {
    e && (process.env.NODE_ENV !== "production" ? h(!1, "Cannot claim lock as it is already claimed") : h(!1));
    const u = {
      abandon: s
    };
    return e = u, u;
  }
  function o() {
    e || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot release lock when there is no lock") : h(!1)), e = null;
  }
  function i() {
    e && (e.abandon(), o());
  }
  return {
    isClaimed: t,
    isActive: n,
    claim: r,
    release: o,
    tryAbandon: i
  };
}
function Ht(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const Hd = 9, qd = 13, Xr = 27, Is = 32, Yd = 33, Kd = 34, Jd = 35, Xd = 36, Qd = 37, Zd = 38, ef = 39, tf = 40, nf = {
  [qd]: !0,
  [Hd]: !0
};
var _s = (e) => {
  nf[e.keyCode] && e.preventDefault();
};
const rf = (() => {
  const e = "visibilitychange";
  return typeof document > "u" ? e : [e, `ms${e}`, `webkit${e}`, `moz${e}`, `o${e}`].find((r) => `on${r}` in document) || e;
})();
var xn = rf;
const Ps = 0, di = 5;
function of(e, t) {
  return Math.abs(t.x - e.x) >= di || Math.abs(t.y - e.y) >= di;
}
const fi = {
  type: "IDLE"
};
function sf({
  cancel: e,
  completed: t,
  getPhase: n,
  setPhase: r
}) {
  return [{
    eventName: "mousemove",
    fn: (o) => {
      const {
        button: i,
        clientX: s,
        clientY: u
      } = o;
      if (i !== Ps)
        return;
      const c = {
        x: s,
        y: u
      }, l = n();
      if (l.type === "DRAGGING") {
        o.preventDefault(), l.actions.move(c);
        return;
      }
      l.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? h(!1, "Cannot be IDLE") : h(!1));
      const f = l.point;
      if (!of(f, c))
        return;
      o.preventDefault();
      const a = l.actions.fluidLift(c);
      r({
        type: "DRAGGING",
        actions: a
      });
    }
  }, {
    eventName: "mouseup",
    fn: (o) => {
      const i = n();
      if (i.type !== "DRAGGING") {
        e();
        return;
      }
      o.preventDefault(), i.actions.drop({
        shouldBlockNextClick: !0
      }), t();
    }
  }, {
    eventName: "mousedown",
    fn: (o) => {
      n().type === "DRAGGING" && o.preventDefault(), e();
    }
  }, {
    eventName: "keydown",
    fn: (o) => {
      if (n().type === "PENDING") {
        e();
        return;
      }
      if (o.keyCode === Xr) {
        o.preventDefault(), e();
        return;
      }
      _s(o);
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
      n().type === "PENDING" && e();
    }
  }, {
    eventName: "webkitmouseforcedown",
    fn: (o) => {
      const i = n();
      if (i.type === "IDLE" && (process.env.NODE_ENV !== "production" ? h(!1, "Unexpected phase") : h(!1)), i.actions.shouldRespectForcePress()) {
        e();
        return;
      }
      o.preventDefault();
    }
  }, {
    eventName: xn,
    fn: e
  }];
}
function uf(e) {
  const t = C.useRef(fi), n = C.useRef(tt), r = H(() => ({
    eventName: "mousedown",
    fn: function(a) {
      if (a.defaultPrevented || a.button !== Ps || a.ctrlKey || a.metaKey || a.shiftKey || a.altKey)
        return;
      const d = e.findClosestDraggableId(a);
      if (!d)
        return;
      const p = e.tryGetLock(d, s, {
        sourceEvent: a
      });
      if (!p)
        return;
      a.preventDefault();
      const E = {
        x: a.clientX,
        y: a.clientY
      };
      n.current(), l(p, E);
    }
  }), [e]), o = H(() => ({
    eventName: "webkitmouseforcewillbegin",
    fn: (f) => {
      if (f.defaultPrevented)
        return;
      const a = e.findClosestDraggableId(f);
      if (!a)
        return;
      const d = e.findOptionsForDraggable(a);
      d && (d.shouldRespectForcePress || e.canGetLock(a) && f.preventDefault());
    }
  }), [e]), i = R(function() {
    const a = {
      passive: !1,
      capture: !0
    };
    n.current = We(window, [o, r], a);
  }, [o, r]), s = R(() => {
    t.current.type !== "IDLE" && (t.current = fi, n.current(), i());
  }, [i]), u = R(() => {
    const f = t.current;
    s(), f.type === "DRAGGING" && f.actions.cancel({
      shouldBlockNextClick: !0
    }), f.type === "PENDING" && f.actions.abort();
  }, [s]), c = R(function() {
    const a = {
      capture: !0,
      passive: !1
    }, d = sf({
      cancel: u,
      completed: s,
      getPhase: () => t.current,
      setPhase: (p) => {
        t.current = p;
      }
    });
    n.current = We(window, d, a);
  }, [u, s]), l = R(function(a, d) {
    t.current.type !== "IDLE" && (process.env.NODE_ENV !== "production" ? h(!1, "Expected to move from IDLE to PENDING drag") : h(!1)), t.current = {
      type: "PENDING",
      point: d,
      actions: a
    }, c();
  }, [c]);
  Me(function() {
    return i(), function() {
      n.current();
    };
  }, [i]);
}
function af() {
}
const cf = {
  [Kd]: !0,
  [Yd]: !0,
  [Xd]: !0,
  [Jd]: !0
};
function lf(e, t) {
  function n() {
    t(), e.cancel();
  }
  function r() {
    t(), e.drop();
  }
  return [{
    eventName: "keydown",
    fn: (o) => {
      if (o.keyCode === Xr) {
        o.preventDefault(), n();
        return;
      }
      if (o.keyCode === Is) {
        o.preventDefault(), r();
        return;
      }
      if (o.keyCode === tf) {
        o.preventDefault(), e.moveDown();
        return;
      }
      if (o.keyCode === Zd) {
        o.preventDefault(), e.moveUp();
        return;
      }
      if (o.keyCode === ef) {
        o.preventDefault(), e.moveRight();
        return;
      }
      if (o.keyCode === Qd) {
        o.preventDefault(), e.moveLeft();
        return;
      }
      if (cf[o.keyCode]) {
        o.preventDefault();
        return;
      }
      _s(o);
    }
  }, {
    eventName: "mousedown",
    fn: n
  }, {
    eventName: "mouseup",
    fn: n
  }, {
    eventName: "click",
    fn: n
  }, {
    eventName: "touchstart",
    fn: n
  }, {
    eventName: "resize",
    fn: n
  }, {
    eventName: "wheel",
    fn: n,
    options: {
      passive: !0
    }
  }, {
    eventName: xn,
    fn: n
  }];
}
function df(e) {
  const t = C.useRef(af), n = H(() => ({
    eventName: "keydown",
    fn: function(i) {
      if (i.defaultPrevented || i.keyCode !== Is)
        return;
      const s = e.findClosestDraggableId(i);
      if (!s)
        return;
      const u = e.tryGetLock(s, f, {
        sourceEvent: i
      });
      if (!u)
        return;
      i.preventDefault();
      let c = !0;
      const l = u.snapLift();
      t.current();
      function f() {
        c || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot stop capturing a keyboard drag when not capturing") : h(!1)), c = !1, t.current(), r();
      }
      t.current = We(window, lf(l, f), {
        capture: !0,
        passive: !1
      });
    }
  }), [e]), r = R(function() {
    const i = {
      passive: !1,
      capture: !0
    };
    t.current = We(window, [n], i);
  }, [n]);
  Me(function() {
    return r(), function() {
      t.current();
    };
  }, [r]);
}
const Yn = {
  type: "IDLE"
}, ff = 120, pf = 0.15;
function Df({
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
    fn: (n) => {
      n.preventDefault();
    }
  }, {
    eventName: "keydown",
    fn: (n) => {
      if (t().type !== "DRAGGING") {
        e();
        return;
      }
      n.keyCode === Xr && n.preventDefault(), e();
    }
  }, {
    eventName: xn,
    fn: e
  }];
}
function mf({
  cancel: e,
  completed: t,
  getPhase: n
}) {
  return [{
    eventName: "touchmove",
    options: {
      capture: !1
    },
    fn: (r) => {
      const o = n();
      if (o.type !== "DRAGGING") {
        e();
        return;
      }
      o.hasMoved = !0;
      const {
        clientX: i,
        clientY: s
      } = r.touches[0], u = {
        x: i,
        y: s
      };
      r.preventDefault(), o.actions.move(u);
    }
  }, {
    eventName: "touchend",
    fn: (r) => {
      const o = n();
      if (o.type !== "DRAGGING") {
        e();
        return;
      }
      r.preventDefault(), o.actions.drop({
        shouldBlockNextClick: !0
      }), t();
    }
  }, {
    eventName: "touchcancel",
    fn: (r) => {
      if (n().type !== "DRAGGING") {
        e();
        return;
      }
      r.preventDefault(), e();
    }
  }, {
    eventName: "touchforcechange",
    fn: (r) => {
      const o = n();
      o.type === "IDLE" && (process.env.NODE_ENV, h(!1));
      const i = r.touches[0];
      if (!i || !(i.force >= pf))
        return;
      const u = o.actions.shouldRespectForcePress();
      if (o.type === "PENDING") {
        u && e();
        return;
      }
      if (u) {
        if (o.hasMoved) {
          r.preventDefault();
          return;
        }
        e();
        return;
      }
      r.preventDefault();
    }
  }, {
    eventName: xn,
    fn: e
  }];
}
function hf(e) {
  const t = C.useRef(Yn), n = C.useRef(tt), r = R(function() {
    return t.current;
  }, []), o = R(function(p) {
    t.current = p;
  }, []), i = H(() => ({
    eventName: "touchstart",
    fn: function(p) {
      if (p.defaultPrevented)
        return;
      const E = e.findClosestDraggableId(p);
      if (!E)
        return;
      const m = e.tryGetLock(E, u, {
        sourceEvent: p
      });
      if (!m)
        return;
      const D = p.touches[0], {
        clientX: y,
        clientY: A
      } = D, v = {
        x: y,
        y: A
      };
      n.current(), a(m, v);
    }
  }), [e]), s = R(function() {
    const p = {
      capture: !0,
      passive: !1
    };
    n.current = We(window, [i], p);
  }, [i]), u = R(() => {
    const d = t.current;
    d.type !== "IDLE" && (d.type === "PENDING" && clearTimeout(d.longPressTimerId), o(Yn), n.current(), s());
  }, [s, o]), c = R(() => {
    const d = t.current;
    u(), d.type === "DRAGGING" && d.actions.cancel({
      shouldBlockNextClick: !0
    }), d.type === "PENDING" && d.actions.abort();
  }, [u]), l = R(function() {
    const p = {
      capture: !0,
      passive: !1
    }, E = {
      cancel: c,
      completed: u,
      getPhase: r
    }, m = We(window, mf(E), p), D = We(window, Df(E), p);
    n.current = function() {
      m(), D();
    };
  }, [c, r, u]), f = R(function() {
    const p = r();
    p.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? h(!1, `Cannot start dragging from phase ${p.type}`) : h(!1));
    const E = p.actions.fluidLift(p.point);
    o({
      type: "DRAGGING",
      actions: E,
      hasMoved: !1
    });
  }, [r, o]), a = R(function(p, E) {
    r().type !== "IDLE" && (process.env.NODE_ENV !== "production" ? h(!1, "Expected to move from IDLE to PENDING drag") : h(!1));
    const m = setTimeout(f, ff);
    o({
      type: "PENDING",
      point: E,
      actions: p,
      longPressTimerId: m
    }), l();
  }, [l, r, o, f]);
  Me(function() {
    return s(), function() {
      n.current();
      const E = r();
      E.type === "PENDING" && (clearTimeout(E.longPressTimerId), o(Yn));
    };
  }, [r, s, o]), Me(function() {
    return We(window, [{
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
function gf(e) {
  Kr(() => {
    const t = Jr(e);
    Qt(() => {
      t.current.length !== e.length && (process.env.NODE_ENV !== "production" ? h(!1, "Cannot change the amount of sensor hooks after mounting") : h(!1));
    });
  });
}
const Ef = ["input", "button", "textarea", "select", "option", "optgroup", "video", "audio"];
function Rs(e, t) {
  if (t == null)
    return !1;
  if (Ef.includes(t.tagName.toLowerCase()))
    return !0;
  const r = t.getAttribute("contenteditable");
  return r === "true" || r === "" ? !0 : t === e ? !1 : Rs(e, t.parentElement);
}
function bf(e, t) {
  const n = t.target;
  return Xt(n) ? Rs(e, n) : !1;
}
var yf = (e) => ze(e.getBoundingClientRect()).center;
function vf(e) {
  return e instanceof Os(e).Element;
}
const Cf = (() => {
  const e = "matches";
  return typeof document > "u" ? e : [e, "msMatchesSelector", "webkitMatchesSelector"].find((r) => r in Element.prototype) || e;
})();
function Ts(e, t) {
  return e == null ? null : e[Cf](t) ? e : Ts(e.parentElement, t);
}
function Af(e, t) {
  return e.closest ? e.closest(t) : Ts(e, t);
}
function Ff(e) {
  return `[${vt.contextId}="${e}"]`;
}
function Sf(e, t) {
  const n = t.target;
  if (!vf(n))
    return process.env.NODE_ENV !== "production" && ie("event.target must be a Element"), null;
  const r = Ff(e), o = Af(n, r);
  return o ? Xt(o) ? o : (process.env.NODE_ENV !== "production" && ie("drag handle must be a HTMLElement"), null) : null;
}
function wf(e, t) {
  const n = Sf(e, t);
  return n ? n.getAttribute(vt.draggableId) : null;
}
function Nf(e, t) {
  const n = `[${hr.contextId}="${e}"]`, o = Ns(document, n).find((i) => i.getAttribute(hr.id) === t);
  return o ? Xt(o) ? o : (process.env.NODE_ENV !== "production" && ie("Draggable element is not a HTMLElement"), null) : null;
}
function Of(e) {
  e.preventDefault();
}
function on({
  expected: e,
  phase: t,
  isLockActive: n,
  shouldWarn: r
}) {
  return n() ? e !== t ? (r && process.env.NODE_ENV !== "production" && ie(`
        Cannot perform action.
        The actions you used belong to an outdated phase

        Current phase: ${e}
        You called an action from outdated phase: ${t}

        Tips:

        - Do not use preDragActions actions after calling preDragActions.lift()
      `), !1) : !0 : (r && process.env.NODE_ENV !== "production" && ie(`
        Cannot perform action.
        The sensor no longer has an action lock.

        Tips:

        - Throw away your action handlers when forceStop() is called
        - Check actions.isActive() if you really need to
      `), !1);
}
function Vs({
  lockAPI: e,
  store: t,
  registry: n,
  draggableId: r
}) {
  if (e.isClaimed())
    return !1;
  const o = n.draggable.findById(r);
  return o ? !(!o.options.isEnabled || !As(t.getState(), r)) : (process.env.NODE_ENV !== "production" && ie(`Unable to find draggable with id: ${r}`), !1);
}
function Bf({
  lockAPI: e,
  contextId: t,
  store: n,
  registry: r,
  draggableId: o,
  forceSensorStop: i,
  sourceEvent: s
}) {
  if (!Vs({
    lockAPI: e,
    store: n,
    registry: r,
    draggableId: o
  }))
    return null;
  const c = r.draggable.getById(o), l = Nf(t, c.descriptor.id);
  if (!l)
    return process.env.NODE_ENV !== "production" && ie(`Unable to find draggable element with id: ${o}`), null;
  if (s && !c.options.canDragInteractiveElements && bf(l, s))
    return null;
  const f = e.claim(i || tt);
  let a = "PRE_DRAG";
  function d() {
    return c.options.shouldRespectForcePress;
  }
  function p() {
    return e.isActive(f);
  }
  function E(g, S) {
    on({
      expected: g,
      phase: a,
      isLockActive: p,
      shouldWarn: !0
    }) && n.dispatch(S());
  }
  const m = E.bind(null, "DRAGGING");
  function D(g) {
    function S() {
      e.release(), a = "COMPLETED";
    }
    a !== "PRE_DRAG" && (S(), process.env.NODE_ENV !== "production" ? h(!1, `Cannot lift in phase ${a}`) : h(!1)), n.dispatch(ol(g.liftActionArgs)), a = "DRAGGING";
    function I(B, x = {
      shouldBlockNextClick: !1
    }) {
      if (g.cleanup(), x.shouldBlockNextClick) {
        const _ = We(window, [{
          eventName: "click",
          fn: Of,
          options: {
            once: !0,
            passive: !1,
            capture: !0
          }
        }]);
        setTimeout(_);
      }
      S(), n.dispatch(ms({
        reason: B
      }));
    }
    return {
      isActive: () => on({
        expected: "DRAGGING",
        phase: a,
        isLockActive: p,
        shouldWarn: !1
      }),
      shouldRespectForcePress: d,
      drop: (B) => I("DROP", B),
      cancel: (B) => I("CANCEL", B),
      ...g.actions
    };
  }
  function y(g) {
    const S = jt((B) => {
      m(() => Ds({
        client: B
      }));
    });
    return {
      ...D({
        liftActionArgs: {
          id: o,
          clientSelection: g,
          movementMode: "FLUID"
        },
        cleanup: () => S.cancel(),
        actions: {
          move: S
        }
      }),
      move: S
    };
  }
  function A() {
    const g = {
      moveUp: () => m(pl),
      moveRight: () => m(ml),
      moveDown: () => m(Dl),
      moveLeft: () => m(hl)
    };
    return D({
      liftActionArgs: {
        id: o,
        clientSelection: yf(l),
        movementMode: "SNAP"
      },
      cleanup: tt,
      actions: g
    });
  }
  function v() {
    on({
      expected: "PRE_DRAG",
      phase: a,
      isLockActive: p,
      shouldWarn: !0
    }) && e.release();
  }
  return {
    isActive: () => on({
      expected: "PRE_DRAG",
      phase: a,
      isLockActive: p,
      shouldWarn: !1
    }),
    shouldRespectForcePress: d,
    fluidLift: y,
    snapLift: A,
    abort: v
  };
}
const xf = [uf, df, hf];
function If({
  contextId: e,
  store: t,
  registry: n,
  customSensors: r,
  enableDefaultSensors: o
}) {
  const i = [...o ? xf : [], ...r || []], s = C.useState(() => zd())[0], u = R(function(D, y) {
    Ht(D) && !Ht(y) && s.tryAbandon();
  }, [s]);
  Me(function() {
    let D = t.getState();
    return t.subscribe(() => {
      const A = t.getState();
      u(D, A), D = A;
    });
  }, [s, t, u]), Me(() => s.tryAbandon, [s.tryAbandon]);
  const c = R((m) => Vs({
    lockAPI: s,
    registry: n,
    store: t,
    draggableId: m
  }), [s, n, t]), l = R((m, D, y) => Bf({
    lockAPI: s,
    registry: n,
    contextId: e,
    store: t,
    draggableId: m,
    forceSensorStop: D || null,
    sourceEvent: y && y.sourceEvent ? y.sourceEvent : null
  }), [e, s, n, t]), f = R((m) => wf(e, m), [e]), a = R((m) => {
    const D = n.draggable.findById(m);
    return D ? D.options : null;
  }, [n.draggable]), d = R(function() {
    s.isClaimed() && (s.tryAbandon(), t.getState().phase !== "IDLE" && t.dispatch(Mr()));
  }, [s, t]), p = R(() => s.isClaimed(), [s]), E = H(() => ({
    canGetLock: c,
    tryGetLock: l,
    findClosestDraggableId: f,
    findOptionsForDraggable: a,
    tryReleaseLock: d,
    isLockClaimed: p
  }), [c, l, f, a, d, p]);
  gf(i);
  for (let m = 0; m < i.length; m++)
    i[m](E);
}
const _f = (e) => ({
  onBeforeCapture: (t) => {
    const n = () => {
      e.onBeforeCapture && e.onBeforeCapture(t);
    };
    N.version.startsWith("16") || N.version.startsWith("17") ? n() : Cr.flushSync(n);
  },
  onBeforeDragStart: e.onBeforeDragStart,
  onDragStart: e.onDragStart,
  onDragEnd: e.onDragEnd,
  onDragUpdate: e.onDragUpdate
}), Pf = (e) => ({
  ...Ut,
  ...e.autoScrollerOptions,
  durationDampening: {
    ...Ut.durationDampening,
    ...e.autoScrollerOptions
  }
});
function Bt(e) {
  return e.current || (process.env.NODE_ENV !== "production" ? h(!1, "Could not find store from lazy ref") : h(!1)), e.current;
}
function Rf(e) {
  const {
    contextId: t,
    setCallbacks: n,
    sensors: r,
    nonce: o,
    dragHandleUsageInstructions: i
  } = e, s = C.useRef(null);
  Ud();
  const u = Jr(e), c = R(() => _f(u.current), [u]), l = R(() => Pf(u.current), [u]), f = Pd(t), a = jd({
    contextId: t,
    text: i
  }), d = wd(t, o), p = R((_) => {
    Bt(s).dispatch(_);
  }, []), E = H(() => Co({
    publishWhileDragging: sl,
    updateDroppableScroll: al,
    updateDroppableIsEnabled: cl,
    updateDroppableIsCombineEnabled: ll,
    collectionStarting: ul
  }, p), [p]), m = Bd(), D = H(() => rd(m, E), [m, E]), y = H(() => yd({
    scrollWindow: od,
    scrollDroppable: D.scrollDroppable,
    getAutoScrollerOptions: l,
    ...Co({
      move: Ds
    }, p)
  }), [D.scrollDroppable, p, l]), A = Nd(t), v = H(() => Zl({
    announce: f,
    autoScroller: y,
    dimensionMarshal: D,
    focusMarshal: A,
    getResponders: c,
    styleMarshal: d
  }), [f, y, D, A, c, d]);
  process.env.NODE_ENV !== "production" && s.current && s.current !== v && process.env.NODE_ENV !== "production" && ie("unexpected store change"), s.current = v;
  const b = R(() => {
    const _ = Bt(s);
    _.getState().phase !== "IDLE" && _.dispatch(Mr());
  }, []), g = R(() => {
    const _ = Bt(s).getState();
    return _.phase === "DROP_ANIMATING" ? !0 : _.phase === "IDLE" ? !1 : _.isDragging;
  }, []), S = H(() => ({
    isDragging: g,
    tryAbort: b
  }), [g, b]);
  n(S);
  const I = R((_) => As(Bt(s).getState(), _), []), B = R(() => ct(Bt(s).getState()), []), x = H(() => ({
    marshal: D,
    focus: A,
    contextId: t,
    canLift: I,
    isMovementAllowed: B,
    dragHandleUsageInstructionsId: a,
    registry: m
  }), [t, D, a, A, I, B, m]);
  return If({
    contextId: t,
    store: v,
    registry: m,
    customSensors: r || null,
    enableDefaultSensors: e.enableDefaultSensors !== !1
  }), C.useEffect(() => b, [b]), N.createElement(Bn.Provider, {
    value: x
  }, N.createElement(Ba, {
    context: qr,
    store: v
  }, e.children));
}
let Tf = 0;
function Vf() {
  return H(() => `${Tf++}`, []);
}
function Lf() {
  return N.useId();
}
var jf = "useId" in N ? Lf : Vf;
function KD(e) {
  const t = jf(), n = e.dragHandleUsageInstructions || dn.dragHandleUsageInstructions;
  return N.createElement(Ha, null, (r) => N.createElement(Rf, {
    nonce: e.nonce,
    contextId: t,
    setCallbacks: r,
    dragHandleUsageInstructions: n,
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
const pi = {
  dragging: 5e3,
  dropAnimating: 4500
}, $f = (e, t) => t ? Tt.drop(t.duration) : e ? Tt.snap : Tt.fluid, Mf = (e, t) => {
  if (e)
    return t ? Wt.opacity.drop : Wt.opacity.combining;
}, kf = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function Gf(e) {
  const n = e.dimension.client, {
    offset: r,
    combineWith: o,
    dropping: i
  } = e, s = !!o, u = kf(e), c = !!i, l = c ? Dr.drop(r, s) : Dr.moveTo(r);
  return {
    position: "fixed",
    top: n.marginBox.top,
    left: n.marginBox.left,
    boxSizing: "border-box",
    width: n.borderBox.width,
    height: n.borderBox.height,
    transition: $f(u, i),
    transform: l,
    opacity: Mf(s, c),
    zIndex: c ? pi.dropAnimating : pi.dragging,
    pointerEvents: "none"
  };
}
function Wf(e) {
  return {
    transform: Dr.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function Uf(e) {
  return e.type === "DRAGGING" ? Gf(e) : Wf(e);
}
function zf(e, t, n = ve) {
  const r = window.getComputedStyle(t), o = t.getBoundingClientRect(), i = Wi(o, r), s = gn(i, n), u = {
    client: i,
    tagName: t.tagName.toLowerCase(),
    display: r.display
  }, c = {
    x: i.marginBox.width,
    y: i.marginBox.height
  };
  return {
    descriptor: e,
    placeholder: u,
    displaceBy: c,
    client: i,
    page: s
  };
}
function Hf(e) {
  const t = Yr("draggable"), {
    descriptor: n,
    registry: r,
    getDraggableRef: o,
    canDragInteractiveElements: i,
    shouldRespectForcePress: s,
    isEnabled: u
  } = e, c = H(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: s,
    isEnabled: u
  }), [i, u, s]), l = R((p) => {
    const E = o();
    return E || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot get dimension when no ref is set") : h(!1)), zf(n, E, p);
  }, [n, o]), f = H(() => ({
    uniqueId: t,
    descriptor: n,
    options: c,
    getDimension: l
  }), [n, l, c, t]), a = C.useRef(f), d = C.useRef(!0);
  Me(() => (r.draggable.register(a.current), () => r.draggable.unregister(a.current)), [r.draggable]), Me(() => {
    if (d.current) {
      d.current = !1;
      return;
    }
    const p = a.current;
    a.current = f, r.draggable.update(f, p);
  }, [f, r.draggable]);
}
var Qr = N.createContext(null);
function Ls(e) {
  e && Xt(e) || (process.env.NODE_ENV !== "production" ? h(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : h(!1));
}
function qf(e, t, n) {
  Qt(() => {
    function r(i) {
      return `Draggable[id: ${i}]: `;
    }
    const o = e.draggableId;
    o || (process.env.NODE_ENV !== "production" ? h(!1, "Draggable requires a draggableId") : h(!1)), typeof o != "string" && (process.env.NODE_ENV !== "production" ? h(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof o}] (value: ${o})`) : h(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? h(!1, `${r(o)} requires an integer index prop`) : h(!1)), e.mapped.type !== "DRAGGING" && (Ls(n()), e.isEnabled && (Bs(t, o) || (process.env.NODE_ENV !== "production" ? h(!1, `${r(o)} Unable to find drag handle`) : h(!1))));
  });
}
function Yf(e) {
  Kr(() => {
    const t = C.useRef(e);
    Qt(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? h(!1, "Draggable isClone prop value changed during component life") : h(!1));
    }, [e]);
  });
}
function yn(e) {
  const t = C.useContext(e);
  return t || (process.env.NODE_ENV !== "production" ? h(!1, "Could not find required context") : h(!1)), t;
}
function Kf(e) {
  e.preventDefault();
}
const Jf = (e) => {
  const t = C.useRef(null), n = R((S = null) => {
    t.current = S;
  }, []), r = R(() => t.current, []), {
    contextId: o,
    dragHandleUsageInstructionsId: i,
    registry: s
  } = yn(Bn), {
    type: u,
    droppableId: c
  } = yn(Qr), l = H(() => ({
    id: e.draggableId,
    index: e.index,
    type: u,
    droppableId: c
  }), [e.draggableId, e.index, u, c]), {
    children: f,
    draggableId: a,
    isEnabled: d,
    shouldRespectForcePress: p,
    canDragInteractiveElements: E,
    isClone: m,
    mapped: D,
    dropAnimationFinished: y
  } = e;
  if (qf(e, o, r), Yf(m), !m) {
    const S = H(() => ({
      descriptor: l,
      registry: s,
      getDraggableRef: r,
      canDragInteractiveElements: E,
      shouldRespectForcePress: p,
      isEnabled: d
    }), [l, s, r, E, p, d]);
    Hf(S);
  }
  const A = H(() => d ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": a,
    "data-rfd-drag-handle-context-id": o,
    draggable: !1,
    onDragStart: Kf
  } : null, [o, i, a, d]), v = R((S) => {
    D.type === "DRAGGING" && D.dropping && S.propertyName === "transform" && (N.version.startsWith("16") || N.version.startsWith("17") ? y() : Cr.flushSync(y));
  }, [y, D]), b = H(() => {
    const S = Uf(D), I = D.type === "DRAGGING" && D.dropping ? v : void 0;
    return {
      innerRef: n,
      draggableProps: {
        "data-rfd-draggable-context-id": o,
        "data-rfd-draggable-id": a,
        style: S,
        onTransitionEnd: I
      },
      dragHandleProps: A
    };
  }, [o, A, a, D, v, n]), g = H(() => ({
    draggableId: l.id,
    type: l.type,
    source: {
      index: l.index,
      droppableId: l.droppableId
    }
  }), [l.droppableId, l.id, l.index, l.type]);
  return N.createElement(N.Fragment, null, f(b, D.snapshot, g));
};
var Xf = Jf, js = (e, t) => e === t, $s = (e) => {
  const {
    combine: t,
    destination: n
  } = e;
  return n ? n.droppableId : t ? t.droppableId : null;
};
const Qf = (e) => e.combine ? e.combine.draggableId : null, Zf = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function ep() {
  const e = ye((o, i) => ({
    x: o,
    y: i
  })), t = ye((o, i, s = null, u = null, c = null) => ({
    isDragging: !0,
    isClone: i,
    isDropAnimating: !!c,
    dropAnimation: c,
    mode: o,
    draggingOver: s,
    combineWith: u,
    combineTargetFor: null
  })), n = ye((o, i, s, u, c = null, l = null, f = null) => ({
    mapped: {
      type: "DRAGGING",
      dropping: null,
      draggingOver: c,
      combineWith: l,
      mode: i,
      offset: o,
      dimension: s,
      forceShouldAnimate: f,
      snapshot: t(i, u, c, l, null)
    }
  }));
  return (o, i) => {
    if (Ht(o)) {
      if (o.critical.draggable.id !== i.draggableId)
        return null;
      const s = o.current.client.offset, u = o.dimensions.draggables[i.draggableId], c = $e(o.impact), l = Zf(o.impact), f = o.forceShouldAnimate;
      return n(e(s.x, s.y), o.movementMode, u, i.isClone, c, l, f);
    }
    if (o.phase === "DROP_ANIMATING") {
      const s = o.completed;
      if (s.result.draggableId !== i.draggableId)
        return null;
      const u = i.isClone, c = o.dimensions.draggables[i.draggableId], l = s.result, f = l.mode, a = $s(l), d = Qf(l), E = {
        duration: o.dropDuration,
        curve: Gr.drop,
        moveTo: o.newHomeClientOffset,
        opacity: d ? Wt.opacity.drop : null,
        scale: d ? Wt.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: o.newHomeClientOffset,
          dimension: c,
          dropping: E,
          draggingOver: a,
          combineWith: d,
          mode: f,
          forceShouldAnimate: null,
          snapshot: t(f, u, a, d, E)
        }
      };
    }
    return null;
  };
}
function Ms(e = null) {
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
const tp = {
  mapped: {
    type: "SECONDARY",
    offset: ve,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: Ms(null)
  }
};
function np() {
  const e = ye((s, u) => ({
    x: s,
    y: u
  })), t = ye(Ms), n = ye((s, u = null, c) => ({
    mapped: {
      type: "SECONDARY",
      offset: s,
      combineTargetFor: u,
      shouldAnimateDisplacement: c,
      snapshot: t(u)
    }
  })), r = (s) => s ? n(ve, s, !0) : null, o = (s, u, c, l) => {
    const f = c.displaced.visible[s], a = !!(l.inVirtualList && l.effected[s]), d = wn(c), p = d && d.draggableId === s ? u : null;
    if (!f) {
      if (!a)
        return r(p);
      if (c.displaced.invisible[s])
        return null;
      const D = Ft(l.displacedBy.point), y = e(D.x, D.y);
      return n(y, p, !0);
    }
    if (a)
      return r(p);
    const E = c.displacedBy.point, m = e(E.x, E.y);
    return n(m, p, f.shouldAnimate);
  };
  return (s, u) => {
    if (Ht(s))
      return s.critical.draggable.id === u.draggableId ? null : o(u.draggableId, s.critical.draggable.id, s.impact, s.afterCritical);
    if (s.phase === "DROP_ANIMATING") {
      const c = s.completed;
      return c.result.draggableId === u.draggableId ? null : o(u.draggableId, c.result.draggableId, c.impact, c.afterCritical);
    }
    return null;
  };
}
const rp = () => {
  const e = ep(), t = np();
  return (r, o) => e(r, o) || t(r, o) || tp;
}, op = {
  dropAnimationFinished: hs
}, ip = ki(rp, op, null, {
  context: qr,
  areStatePropsEqual: js
})(Xf);
var sp = ip;
function ks(e) {
  return yn(Qr).isUsingCloneFor === e.draggableId && !e.isClone ? null : N.createElement(sp, e);
}
function JD(e) {
  const t = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0, n = !!e.disableInteractiveElementBlocking, r = !!e.shouldRespectForcePress;
  return N.createElement(ks, Et({}, e, {
    isClone: !1,
    isEnabled: t,
    canDragInteractiveElements: n,
    shouldRespectForcePress: r
  }));
}
const Zr = (e) => (t) => e === t, up = Zr("scroll"), ap = Zr("auto"), cp = Zr("visible"), Di = (e, t) => t(e.overflowX) || t(e.overflowY), lp = (e, t) => t(e.overflowX) && t(e.overflowY), Gs = (e) => {
  const t = window.getComputedStyle(e), n = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return Di(n, up) || Di(n, ap);
}, dp = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = zt(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, h(!1)), !Gs(e))
    return !1;
  const n = window.getComputedStyle(t), r = {
    overflowX: n.overflowX,
    overflowY: n.overflowY
  };
  return lp(r, cp) || process.env.NODE_ENV !== "production" && ie(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, Ws = (e) => e == null ? null : e === document.body ? dp() ? e : null : e === document.documentElement ? null : Gs(e) ? e : Ws(e.parentElement);
var Us = Ws, fp = (e) => {
  !e || !Us(e.parentElement) || process.env.NODE_ENV !== "production" && ie(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, gr = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const zs = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : zs(e.parentElement) : !1;
var pp = (e) => {
  const t = Us(e), n = zs(e);
  return {
    closestScrollable: t,
    isFixedOnPage: n
  };
}, Dp = ({
  descriptor: e,
  isEnabled: t,
  isCombineEnabled: n,
  isFixedOnPage: r,
  direction: o,
  client: i,
  page: s,
  closest: u
}) => {
  const c = (() => {
    if (!u)
      return null;
    const {
      scrollSize: d,
      client: p
    } = u, E = ys({
      scrollHeight: d.scrollHeight,
      scrollWidth: d.scrollWidth,
      height: p.paddingBox.height,
      width: p.paddingBox.width
    });
    return {
      pageMarginBox: u.page.marginBox,
      frameClient: p,
      scrollSize: d,
      shouldClipSubject: u.shouldClipSubject,
      scroll: {
        initial: u.scroll,
        current: u.scroll,
        max: E,
        diff: {
          value: ve,
          displacement: ve
        }
      }
    };
  })(), l = o === "vertical" ? Tr : Zi, f = bt({
    page: s,
    withPlaceholder: null,
    axis: l,
    frame: c
  });
  return {
    descriptor: e,
    isCombineEnabled: n,
    isFixedOnPage: r,
    axis: l,
    isEnabled: t,
    client: i,
    page: s,
    frame: c,
    subject: f
  };
};
const mp = (e, t) => {
  const n = Ui(e);
  if (!t || e !== t)
    return n;
  const r = n.paddingBox.top - t.scrollTop, o = n.paddingBox.left - t.scrollLeft, i = r + t.scrollHeight, s = o + t.scrollWidth, c = Ir({
    top: r,
    right: s,
    bottom: i,
    left: o
  }, n.border);
  return _r({
    borderBox: c,
    margin: n.margin,
    border: n.border,
    padding: n.padding
  });
};
var hp = ({
  ref: e,
  descriptor: t,
  env: n,
  windowScroll: r,
  direction: o,
  isDropDisabled: i,
  isCombineEnabled: s,
  shouldClipSubject: u
}) => {
  const c = n.closestScrollable, l = mp(e, c), f = gn(l, r), a = (() => {
    if (!c)
      return null;
    const p = Ui(c), E = {
      scrollHeight: c.scrollHeight,
      scrollWidth: c.scrollWidth
    };
    return {
      client: p,
      page: gn(p, r),
      scroll: gr(c),
      scrollSize: E,
      shouldClipSubject: u
    };
  })();
  return Dp({
    descriptor: t,
    isEnabled: !i,
    isCombineEnabled: s,
    isFixedOnPage: n.isFixedOnPage,
    direction: o,
    client: l,
    page: f,
    closest: a
  });
};
const gp = {
  passive: !1
}, Ep = {
  passive: !0
};
var mi = (e) => e.shouldPublishImmediately ? gp : Ep;
const sn = (e) => e && e.env.closestScrollable || null;
function bp(e) {
  const t = C.useRef(null), n = yn(Bn), r = Yr("droppable"), {
    registry: o,
    marshal: i
  } = n, s = Jr(e), u = H(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), c = C.useRef(u), l = H(() => ye((b, g) => {
    t.current || (process.env.NODE_ENV !== "production" ? h(!1, "Can only update scroll when dragging") : h(!1));
    const S = {
      x: b,
      y: g
    };
    i.updateDroppableScroll(u.id, S);
  }), [u.id, i]), f = R(() => {
    const b = t.current;
    return !b || !b.env.closestScrollable ? ve : gr(b.env.closestScrollable);
  }, []), a = R(() => {
    const b = f();
    l(b.x, b.y);
  }, [f, l]), d = H(() => jt(a), [a]), p = R(() => {
    const b = t.current, g = sn(b);
    if (b && g || (process.env.NODE_ENV !== "production" ? h(!1, "Could not find scroll options while scrolling") : h(!1)), b.scrollOptions.shouldPublishImmediately) {
      a();
      return;
    }
    d();
  }, [d, a]), E = R((b, g) => {
    t.current && (process.env.NODE_ENV !== "production" ? h(!1, "Cannot collect a droppable while a drag is occurring") : h(!1));
    const S = s.current, I = S.getDroppableRef();
    I || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot collect without a droppable ref") : h(!1));
    const B = pp(I), x = {
      ref: I,
      descriptor: u,
      env: B,
      scrollOptions: g
    };
    t.current = x;
    const _ = hp({
      ref: I,
      descriptor: u,
      env: B,
      windowScroll: b,
      direction: S.direction,
      isDropDisabled: S.isDropDisabled,
      isCombineEnabled: S.isCombineEnabled,
      shouldClipSubject: !S.ignoreContainerClipping
    }), M = B.closestScrollable;
    return M && (M.setAttribute(ai.contextId, n.contextId), M.addEventListener("scroll", p, mi(x.scrollOptions)), process.env.NODE_ENV !== "production" && fp(M)), _;
  }, [n.contextId, u, p, s]), m = R(() => {
    const b = t.current, g = sn(b);
    return b && g || (process.env.NODE_ENV !== "production" ? h(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : h(!1)), gr(g);
  }, []), D = R(() => {
    const b = t.current;
    b || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot stop drag when no active drag") : h(!1));
    const g = sn(b);
    t.current = null, g && (d.cancel(), g.removeAttribute(ai.contextId), g.removeEventListener("scroll", p, mi(b.scrollOptions)));
  }, [p, d]), y = R((b) => {
    const g = t.current;
    g || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot scroll when there is no drag") : h(!1));
    const S = sn(g);
    S || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot scroll a droppable with no closest scrollable") : h(!1)), S.scrollTop += b.y, S.scrollLeft += b.x;
  }, []), A = H(() => ({
    getDimensionAndWatchScroll: E,
    getScrollWhileDragging: m,
    dragStopped: D,
    scroll: y
  }), [D, E, m, y]), v = H(() => ({
    uniqueId: r,
    descriptor: u,
    callbacks: A
  }), [A, u, r]);
  Me(() => (c.current = v.descriptor, o.droppable.register(v), () => {
    t.current && (process.env.NODE_ENV !== "production" && ie("Unsupported: changing the droppableId or type of a Droppable during a drag"), D()), o.droppable.unregister(v);
  }), [A, u, D, v, i, o.droppable]), Me(() => {
    t.current && i.updateDroppableIsEnabled(c.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), Me(() => {
    t.current && i.updateDroppableIsCombineEnabled(c.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function Kn() {
}
const hi = {
  width: 0,
  height: 0,
  margin: Za
}, yp = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: n
}) => e || n === "close" ? hi : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, vp = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: n
}) => {
  const r = yp({
    isAnimatingOpenOnMount: e,
    placeholder: t,
    animate: n
  });
  return {
    display: t.display,
    boxSizing: "border-box",
    width: r.width,
    height: r.height,
    marginTop: r.margin.top,
    marginRight: r.margin.right,
    marginBottom: r.margin.bottom,
    marginLeft: r.margin.left,
    flexShrink: "0",
    flexGrow: "0",
    pointerEvents: "none",
    transition: n !== "none" ? Tt.placeholder : null
  };
}, Cp = (e) => {
  const t = C.useRef(null), n = R(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: r,
    onTransitionEnd: o,
    onClose: i,
    contextId: s
  } = e, [u, c] = C.useState(e.animate === "open");
  C.useEffect(() => u ? r !== "open" ? (n(), c(!1), Kn) : t.current ? Kn : (t.current = setTimeout(() => {
    t.current = null, c(!1);
  }), n) : Kn, [r, u, n]);
  const l = R((a) => {
    a.propertyName === "height" && (o(), r === "close" && i());
  }, [r, i, o]), f = vp({
    isAnimatingOpenOnMount: u,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return N.createElement(e.placeholder.tagName, {
    style: f,
    "data-rfd-placeholder-context-id": s,
    onTransitionEnd: l,
    ref: e.innerRef
  });
};
var Ap = N.memo(Cp);
function Jn(e) {
  return typeof e == "boolean";
}
function Xn(e, t) {
  t.forEach((n) => n(e));
}
const Fp = [function({
  props: t
}) {
  t.droppableId || (process.env.NODE_ENV !== "production" ? h(!1, "A Droppable requires a droppableId prop") : h(!1)), typeof t.droppableId != "string" && (process.env.NODE_ENV !== "production" ? h(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof t.droppableId}]`) : h(!1));
}, function({
  props: t
}) {
  Jn(t.isDropDisabled) || (process.env.NODE_ENV !== "production" ? h(!1, "isDropDisabled must be a boolean") : h(!1)), Jn(t.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? h(!1, "isCombineEnabled must be a boolean") : h(!1)), Jn(t.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? h(!1, "ignoreContainerClipping must be a boolean") : h(!1));
}, function({
  getDroppableRef: t
}) {
  Ls(t());
}], Sp = [function({
  props: t,
  getPlaceholderRef: n
}) {
  !t.placeholder || n() || process.env.NODE_ENV !== "production" && ie(`
      Droppable setup issue [droppableId: "${t.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], wp = [function({
  props: t
}) {
  t.renderClone || (process.env.NODE_ENV !== "production" ? h(!1, "Must provide a clone render function (renderClone) for virtual lists") : h(!1));
}, function({
  getPlaceholderRef: t
}) {
  t() && (process.env.NODE_ENV !== "production" ? h(!1, "Expected virtual list to not have a placeholder") : h(!1));
}];
function Np(e) {
  Qt(() => {
    Xn(e, Fp), e.props.mode === "standard" && Xn(e, Sp), e.props.mode === "virtual" && Xn(e, wp);
  });
}
class Op extends N.PureComponent {
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
  static getDerivedStateFromProps(t, n) {
    return t.shouldAnimate ? t.on ? {
      isVisible: !0,
      data: t.on,
      animate: "open"
    } : n.isVisible ? {
      isVisible: !0,
      data: n.data,
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
const Bp = (e) => {
  const t = C.useContext(Bn);
  t || (process.env.NODE_ENV !== "production" ? h(!1, "Could not find app context") : h(!1));
  const {
    contextId: n,
    isMovementAllowed: r
  } = t, o = C.useRef(null), i = C.useRef(null), {
    children: s,
    droppableId: u,
    type: c,
    mode: l,
    direction: f,
    ignoreContainerClipping: a,
    isDropDisabled: d,
    isCombineEnabled: p,
    snapshot: E,
    useClone: m,
    updateViewportMaxScroll: D,
    getContainerForClone: y
  } = e, A = R(() => o.current, []), v = R(($ = null) => {
    o.current = $;
  }, []), b = R(() => i.current, []), g = R(($ = null) => {
    i.current = $;
  }, []);
  Np({
    props: e,
    getDroppableRef: A,
    getPlaceholderRef: b
  });
  const S = R(() => {
    r() && D({
      maxScroll: Cs()
    });
  }, [r, D]);
  bp({
    droppableId: u,
    type: c,
    mode: l,
    direction: f,
    isDropDisabled: d,
    isCombineEnabled: p,
    ignoreContainerClipping: a,
    getDroppableRef: A
  });
  const I = H(() => N.createElement(Op, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: $,
    data: j,
    animate: G
  }) => N.createElement(Ap, {
    placeholder: j,
    onClose: $,
    innerRef: g,
    animate: G,
    contextId: n,
    onTransitionEnd: S
  })), [n, S, e.placeholder, e.shouldAnimatePlaceholder, g]), B = H(() => ({
    innerRef: v,
    placeholder: I,
    droppableProps: {
      "data-rfd-droppable-id": u,
      "data-rfd-droppable-context-id": n
    }
  }), [n, u, I, v]), x = m ? m.dragging.draggableId : null, _ = H(() => ({
    droppableId: u,
    type: c,
    isUsingCloneFor: x
  }), [u, x, c]);
  function M() {
    if (!m)
      return null;
    const {
      dragging: $,
      render: j
    } = m, G = N.createElement(ks, {
      draggableId: $.draggableId,
      index: $.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (q, ee) => j(q, ee, $));
    return mu.createPortal(G, y());
  }
  return N.createElement(Qr.Provider, {
    value: _
  }, s(B, E), M());
};
var xp = Bp;
function Ip() {
  return document.body || (process.env.NODE_ENV !== "production" ? h(!1, "document.body is not ready") : h(!1)), document.body;
}
const gi = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: Ip
}, Hs = (e) => {
  let t = {
    ...e
  }, n;
  for (n in gi)
    e[n] === void 0 && (t = {
      ...t,
      [n]: gi[n]
    });
  return t;
}, Qn = (e, t) => e === t.droppable.type, Ei = (e, t) => t.draggables[e.draggable.id], _p = () => {
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
  }, n = ye((i) => ({
    draggableId: i.id,
    type: i.type,
    source: {
      index: i.index,
      droppableId: i.droppableId
    }
  })), r = ye((i, s, u, c, l, f) => {
    const a = l.descriptor.id;
    if (l.descriptor.droppableId === i) {
      const E = f ? {
        render: f,
        dragging: n(l.descriptor)
      } : null, m = {
        isDraggingOver: u,
        draggingOverWith: u ? a : null,
        draggingFromThisWith: a,
        isUsingPlaceholder: !0
      };
      return {
        placeholder: l.placeholder,
        shouldAnimatePlaceholder: !1,
        snapshot: m,
        useClone: E
      };
    }
    if (!s)
      return t;
    if (!c)
      return e;
    const p = {
      isDraggingOver: u,
      draggingOverWith: a,
      draggingFromThisWith: null,
      isUsingPlaceholder: !0
    };
    return {
      placeholder: l.placeholder,
      shouldAnimatePlaceholder: !0,
      snapshot: p,
      useClone: null
    };
  });
  return (i, s) => {
    const u = Hs(s), c = u.droppableId, l = u.type, f = !u.isDropDisabled, a = u.renderClone;
    if (Ht(i)) {
      const d = i.critical;
      if (!Qn(l, d))
        return t;
      const p = Ei(d, i.dimensions), E = $e(i.impact) === c;
      return r(c, f, E, E, p, a);
    }
    if (i.phase === "DROP_ANIMATING") {
      const d = i.completed;
      if (!Qn(l, d.critical))
        return t;
      const p = Ei(d.critical, i.dimensions);
      return r(c, f, $s(d.result) === c, $e(d.impact) === c, p, a);
    }
    if (i.phase === "IDLE" && i.completed && !i.shouldFlush) {
      const d = i.completed;
      if (!Qn(l, d.critical))
        return t;
      const p = $e(d.impact) === c, E = !!(d.impact.at && d.impact.at.type === "COMBINE"), m = d.critical.droppable.id === c;
      return p ? E ? e : t : m ? e : t;
    }
    return t;
  };
}, Pp = {
  updateViewportMaxScroll: fl
}, Rp = ki(_p, Pp, (e, t, n) => ({
  ...Hs(n),
  ...e,
  ...t
}), {
  context: qr,
  areStatePropsEqual: js
})(xp);
var XD = Rp;
const Tp = (e) => /* @__PURE__ */ C.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512", ...e }, /* @__PURE__ */ C.createElement("path", { d: "M0 117.66v346.32c0 11.32 11.43 19.06 21.94 14.86L160 416V32L20.12 87.95A32.006 32.006 0 000 117.66zM192 416l192 64V96L192 32v384zM554.06 33.16L416 96v384l139.88-55.95A31.996 31.996 0 00576 394.34V48.02c0-11.32-11.43-19.06-21.94-14.86z" })), dt = (e, t, n, r, o) => {
  if (!r)
    throw new Error(o ?? `Invalid property path: ${t}
Couldn't access "${n}" in ${JSON.stringify(e)}`);
}, bi = (e) => typeof e == "object" && e !== null && !Array.isArray(e), fn = (e) => Array.isArray(e), qs = (e, t) => e.filter((n, r) => r !== t), Vp = (e, t, n, r = {}) => {
  const { remove: o = !1, createNew: i = !0, noError: s = !1 } = r, u = e, c = typeof (l = t) == "string" ? l : typeof l == "number" ? String(l) : l.reduce((d, p) => typeof p == "number" ? `${d}[${p}]` : d === "" ? p : `${d}.${p}`, "");
  var l;
  const f = Object.assign(Object.assign({}, r), { remove: o, createNew: i, noError: s, fullData: u, fullPath: c }), a = Array.isArray(t) ? t : ((d) => Array.isArray(d) ? d : d.split(/(\.|\[\d+\])/).filter((p) => p !== "." && p !== "").map((p) => {
    const E = /\[(\d+)\]/.exec(p);
    return E ? Number(E[1]) : p;
  }).flat())(t).filter((d) => d !== "");
  return fn(e) && o && a.length === 1 ? qs(e, a[0]) : It(e, a, n, f);
}, It = (e, t, n, r) => {
  const o = bi(e) ? Object.assign({}, e) : null, i = fn(e) ? [...e] : null;
  if (t.length === 0)
    return e;
  if (!o && !i)
    throw new Error("Can't assign property -- invalid input object");
  const { createNew: s, remove: u, noError: c, fullData: l, fullPath: f } = r, a = t[0];
  if (i && typeof a == "string")
    return i.map((m) => It(m, t, n, r));
  if (t.length === 1) {
    if (o && typeof a == "string") {
      const m = Lp(o, a, n, r);
      return m ?? o;
    }
    return i && typeof a == "number" ? (jp(i, a, n, r), i) : (dt(l, f, a, c), e);
  }
  const d = o || i || [];
  if (u && t.length === 2 && typeof t[1] == "number") {
    const m = d[a], D = t[1];
    return fn(m) ? d[a] = qs(m, D) : dt(l, f, a, c, "Trying to remove an indexed item from an object that is not an array"), d;
  }
  const p = t.slice(1);
  if (a in e) {
    if (E = d[a], !fn(E) && !bi(E)) {
      if (!s)
        return dt(l, f, a, c), d;
      d[a] = {};
    }
    return d[a] = It(d[a], p, n, r), d;
  }
  var E;
  if (s) {
    const m = typeof p[0] == "number" ? [] : {};
    if (o)
      return d[a] = m, d[a] = It(d[a], p, n, r), d;
    if (i && Array.isArray(d)) {
      d.push(m);
      const D = d.length - 1;
      return d[D] = It(d[D], p, n, r), d;
    }
  }
  return dt(l, f, a, c), d;
}, Lp = (e, t, n, r) => {
  const { remove: o, createNew: i, noError: s, insertAfter: u, insertBefore: c, fullData: l, fullPath: f } = r;
  if (c || u) {
    const d = Object.entries(e);
    let p = d.findIndex(([E, m]) => E === (c ?? u));
    return u && p++, d.splice(p, 0, [t, n]), Object.fromEntries(d);
  }
  const a = t in e;
  o ? a ? delete e[t] : dt(l, f, t, s) : i || a ? e[t] = n : dt(l, f, t, s);
}, jp = (e, t, n, r) => {
  const { noError: o, fullData: i, fullPath: s, createNew: u, insert: c } = r;
  c && e.splice(t, 0, n), t in e ? e[t] = n : u ? e.push(n) : dt(i, s, t, o);
}, vn = (e, t, n) => {
  const r = Array.isArray(t) ? t : $p(t);
  if (r.length === 0)
    return e;
  const o = r[0];
  if (Array.isArray(e) && typeof o != "number")
    return e.map((s) => vn(s, r, n));
  if (typeof e != "object" || e === null || !(o in e))
    return Mp(e, o, n);
  const i = e[o];
  return r.length === 1 ? i : vn(i, r.slice(1), n);
}, $p = (e) => e.split(/(\.|\[\d+\])/).filter((t) => t !== "." && t !== "").map((t) => {
  const n = /\[(\d+)\]/.exec(t);
  return n ? Number(n[1]) : t;
}).flat(), Mp = (e, t, n) => {
  if (n === void 0)
    throw new Error(`Unable to extract object property
Looking for property: ${t}
In object: ${JSON.stringify(e)}`);
  return n;
};
var kp = /[\u1680\u2000-\u200A\u202F\u205F\u3000]/, Gp = /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/, Wp = /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/, Zn = {
  Space_Separator: kp,
  ID_Start: Gp,
  ID_Continue: Wp
}, pe = {
  isSpaceSeparator(e) {
    return typeof e == "string" && Zn.Space_Separator.test(e);
  },
  isIdStartChar(e) {
    return typeof e == "string" && (e >= "a" && e <= "z" || e >= "A" && e <= "Z" || e === "$" || e === "_" || Zn.ID_Start.test(e));
  },
  isIdContinueChar(e) {
    return typeof e == "string" && (e >= "a" && e <= "z" || e >= "A" && e <= "Z" || e >= "0" && e <= "9" || e === "$" || e === "_" || e === "‌" || e === "‍" || Zn.ID_Continue.test(e));
  },
  isDigit(e) {
    return typeof e == "string" && /[0-9]/.test(e);
  },
  isHexDigit(e) {
    return typeof e == "string" && /[0-9A-Fa-f]/.test(e);
  }
};
let Er, Oe, Qe, Cn, ot, He, be, eo, Vt;
var Up = function(t, n) {
  Er = String(t), Oe = "start", Qe = [], Cn = 0, ot = 1, He = 0, be = void 0, eo = void 0, Vt = void 0;
  do
    be = zp(), Yp[Oe]();
  while (be.type !== "eof");
  return typeof n == "function" ? br({ "": Vt }, "", n) : Vt;
};
function br(e, t, n) {
  const r = e[t];
  if (r != null && typeof r == "object")
    if (Array.isArray(r))
      for (let o = 0; o < r.length; o++) {
        const i = String(o), s = br(r, i, n);
        s === void 0 ? delete r[i] : Object.defineProperty(r, i, {
          value: s,
          writable: !0,
          enumerable: !0,
          configurable: !0
        });
      }
    else
      for (const o in r) {
        const i = br(r, o, n);
        i === void 0 ? delete r[o] : Object.defineProperty(r, o, {
          value: i,
          writable: !0,
          enumerable: !0,
          configurable: !0
        });
      }
  return n.call(e, t, r);
}
let W, k, _t, Xe, z;
function zp() {
  for (W = "default", k = "", _t = !1, Xe = 1; ; ) {
    z = Ze();
    const e = Ys[W]();
    if (e)
      return e;
  }
}
function Ze() {
  if (Er[Cn])
    return String.fromCodePoint(Er.codePointAt(Cn));
}
function F() {
  const e = Ze();
  return e === `
` ? (ot++, He = 0) : e ? He += e.length : He++, e && (Cn += e.length), e;
}
const Ys = {
  default() {
    switch (z) {
      case "	":
      case "\v":
      case "\f":
      case " ":
      case " ":
      case "\uFEFF":
      case `
`:
      case "\r":
      case "\u2028":
      case "\u2029":
        F();
        return;
      case "/":
        F(), W = "comment";
        return;
      case void 0:
        return F(), ue("eof");
    }
    if (pe.isSpaceSeparator(z)) {
      F();
      return;
    }
    return Ys[Oe]();
  },
  comment() {
    switch (z) {
      case "*":
        F(), W = "multiLineComment";
        return;
      case "/":
        F(), W = "singleLineComment";
        return;
    }
    throw ae(F());
  },
  multiLineComment() {
    switch (z) {
      case "*":
        F(), W = "multiLineCommentAsterisk";
        return;
      case void 0:
        throw ae(F());
    }
    F();
  },
  multiLineCommentAsterisk() {
    switch (z) {
      case "*":
        F();
        return;
      case "/":
        F(), W = "default";
        return;
      case void 0:
        throw ae(F());
    }
    F(), W = "multiLineComment";
  },
  singleLineComment() {
    switch (z) {
      case `
`:
      case "\r":
      case "\u2028":
      case "\u2029":
        F(), W = "default";
        return;
      case void 0:
        return F(), ue("eof");
    }
    F();
  },
  value() {
    switch (z) {
      case "{":
      case "[":
        return ue("punctuator", F());
      case "n":
        return F(), st("ull"), ue("null", null);
      case "t":
        return F(), st("rue"), ue("boolean", !0);
      case "f":
        return F(), st("alse"), ue("boolean", !1);
      case "-":
      case "+":
        F() === "-" && (Xe = -1), W = "sign";
        return;
      case ".":
        k = F(), W = "decimalPointLeading";
        return;
      case "0":
        k = F(), W = "zero";
        return;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        k = F(), W = "decimalInteger";
        return;
      case "I":
        return F(), st("nfinity"), ue("numeric", 1 / 0);
      case "N":
        return F(), st("aN"), ue("numeric", NaN);
      case '"':
      case "'":
        _t = F() === '"', k = "", W = "string";
        return;
    }
    throw ae(F());
  },
  identifierNameStartEscape() {
    if (z !== "u")
      throw ae(F());
    F();
    const e = yr();
    switch (e) {
      case "$":
      case "_":
        break;
      default:
        if (!pe.isIdStartChar(e))
          throw yi();
        break;
    }
    k += e, W = "identifierName";
  },
  identifierName() {
    switch (z) {
      case "$":
      case "_":
      case "‌":
      case "‍":
        k += F();
        return;
      case "\\":
        F(), W = "identifierNameEscape";
        return;
    }
    if (pe.isIdContinueChar(z)) {
      k += F();
      return;
    }
    return ue("identifier", k);
  },
  identifierNameEscape() {
    if (z !== "u")
      throw ae(F());
    F();
    const e = yr();
    switch (e) {
      case "$":
      case "_":
      case "‌":
      case "‍":
        break;
      default:
        if (!pe.isIdContinueChar(e))
          throw yi();
        break;
    }
    k += e, W = "identifierName";
  },
  sign() {
    switch (z) {
      case ".":
        k = F(), W = "decimalPointLeading";
        return;
      case "0":
        k = F(), W = "zero";
        return;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        k = F(), W = "decimalInteger";
        return;
      case "I":
        return F(), st("nfinity"), ue("numeric", Xe * (1 / 0));
      case "N":
        return F(), st("aN"), ue("numeric", NaN);
    }
    throw ae(F());
  },
  zero() {
    switch (z) {
      case ".":
        k += F(), W = "decimalPoint";
        return;
      case "e":
      case "E":
        k += F(), W = "decimalExponent";
        return;
      case "x":
      case "X":
        k += F(), W = "hexadecimal";
        return;
    }
    return ue("numeric", Xe * 0);
  },
  decimalInteger() {
    switch (z) {
      case ".":
        k += F(), W = "decimalPoint";
        return;
      case "e":
      case "E":
        k += F(), W = "decimalExponent";
        return;
    }
    if (pe.isDigit(z)) {
      k += F();
      return;
    }
    return ue("numeric", Xe * Number(k));
  },
  decimalPointLeading() {
    if (pe.isDigit(z)) {
      k += F(), W = "decimalFraction";
      return;
    }
    throw ae(F());
  },
  decimalPoint() {
    switch (z) {
      case "e":
      case "E":
        k += F(), W = "decimalExponent";
        return;
    }
    if (pe.isDigit(z)) {
      k += F(), W = "decimalFraction";
      return;
    }
    return ue("numeric", Xe * Number(k));
  },
  decimalFraction() {
    switch (z) {
      case "e":
      case "E":
        k += F(), W = "decimalExponent";
        return;
    }
    if (pe.isDigit(z)) {
      k += F();
      return;
    }
    return ue("numeric", Xe * Number(k));
  },
  decimalExponent() {
    switch (z) {
      case "+":
      case "-":
        k += F(), W = "decimalExponentSign";
        return;
    }
    if (pe.isDigit(z)) {
      k += F(), W = "decimalExponentInteger";
      return;
    }
    throw ae(F());
  },
  decimalExponentSign() {
    if (pe.isDigit(z)) {
      k += F(), W = "decimalExponentInteger";
      return;
    }
    throw ae(F());
  },
  decimalExponentInteger() {
    if (pe.isDigit(z)) {
      k += F();
      return;
    }
    return ue("numeric", Xe * Number(k));
  },
  hexadecimal() {
    if (pe.isHexDigit(z)) {
      k += F(), W = "hexadecimalInteger";
      return;
    }
    throw ae(F());
  },
  hexadecimalInteger() {
    if (pe.isHexDigit(z)) {
      k += F();
      return;
    }
    return ue("numeric", Xe * Number(k));
  },
  string() {
    switch (z) {
      case "\\":
        F(), k += Hp();
        return;
      case '"':
        if (_t)
          return F(), ue("string", k);
        k += F();
        return;
      case "'":
        if (!_t)
          return F(), ue("string", k);
        k += F();
        return;
      case `
`:
      case "\r":
        throw ae(F());
      case "\u2028":
      case "\u2029":
        Kp(z);
        break;
      case void 0:
        throw ae(F());
    }
    k += F();
  },
  start() {
    switch (z) {
      case "{":
      case "[":
        return ue("punctuator", F());
    }
    W = "value";
  },
  beforePropertyName() {
    switch (z) {
      case "$":
      case "_":
        k = F(), W = "identifierName";
        return;
      case "\\":
        F(), W = "identifierNameStartEscape";
        return;
      case "}":
        return ue("punctuator", F());
      case '"':
      case "'":
        _t = F() === '"', W = "string";
        return;
    }
    if (pe.isIdStartChar(z)) {
      k += F(), W = "identifierName";
      return;
    }
    throw ae(F());
  },
  afterPropertyName() {
    if (z === ":")
      return ue("punctuator", F());
    throw ae(F());
  },
  beforePropertyValue() {
    W = "value";
  },
  afterPropertyValue() {
    switch (z) {
      case ",":
      case "}":
        return ue("punctuator", F());
    }
    throw ae(F());
  },
  beforeArrayValue() {
    if (z === "]")
      return ue("punctuator", F());
    W = "value";
  },
  afterArrayValue() {
    switch (z) {
      case ",":
      case "]":
        return ue("punctuator", F());
    }
    throw ae(F());
  },
  end() {
    throw ae(F());
  }
};
function ue(e, t) {
  return {
    type: e,
    value: t,
    line: ot,
    column: He
  };
}
function st(e) {
  for (const t of e) {
    if (Ze() !== t)
      throw ae(F());
    F();
  }
}
function Hp() {
  switch (Ze()) {
    case "b":
      return F(), "\b";
    case "f":
      return F(), "\f";
    case "n":
      return F(), `
`;
    case "r":
      return F(), "\r";
    case "t":
      return F(), "	";
    case "v":
      return F(), "\v";
    case "0":
      if (F(), pe.isDigit(Ze()))
        throw ae(F());
      return "\0";
    case "x":
      return F(), qp();
    case "u":
      return F(), yr();
    case `
`:
    case "\u2028":
    case "\u2029":
      return F(), "";
    case "\r":
      return F(), Ze() === `
` && F(), "";
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      throw ae(F());
    case void 0:
      throw ae(F());
  }
  return F();
}
function qp() {
  let e = "", t = Ze();
  if (!pe.isHexDigit(t) || (e += F(), t = Ze(), !pe.isHexDigit(t)))
    throw ae(F());
  return e += F(), String.fromCodePoint(parseInt(e, 16));
}
function yr() {
  let e = "", t = 4;
  for (; t-- > 0; ) {
    const n = Ze();
    if (!pe.isHexDigit(n))
      throw ae(F());
    e += F();
  }
  return String.fromCodePoint(parseInt(e, 16));
}
const Yp = {
  start() {
    if (be.type === "eof")
      throw ut();
    er();
  },
  beforePropertyName() {
    switch (be.type) {
      case "identifier":
      case "string":
        eo = be.value, Oe = "afterPropertyName";
        return;
      case "punctuator":
        un();
        return;
      case "eof":
        throw ut();
    }
  },
  afterPropertyName() {
    if (be.type === "eof")
      throw ut();
    Oe = "beforePropertyValue";
  },
  beforePropertyValue() {
    if (be.type === "eof")
      throw ut();
    er();
  },
  beforeArrayValue() {
    if (be.type === "eof")
      throw ut();
    if (be.type === "punctuator" && be.value === "]") {
      un();
      return;
    }
    er();
  },
  afterPropertyValue() {
    if (be.type === "eof")
      throw ut();
    switch (be.value) {
      case ",":
        Oe = "beforePropertyName";
        return;
      case "}":
        un();
    }
  },
  afterArrayValue() {
    if (be.type === "eof")
      throw ut();
    switch (be.value) {
      case ",":
        Oe = "beforeArrayValue";
        return;
      case "]":
        un();
    }
  },
  end() {
  }
};
function er() {
  let e;
  switch (be.type) {
    case "punctuator":
      switch (be.value) {
        case "{":
          e = {};
          break;
        case "[":
          e = [];
          break;
      }
      break;
    case "null":
    case "boolean":
    case "numeric":
    case "string":
      e = be.value;
      break;
  }
  if (Vt === void 0)
    Vt = e;
  else {
    const t = Qe[Qe.length - 1];
    Array.isArray(t) ? t.push(e) : Object.defineProperty(t, eo, {
      value: e,
      writable: !0,
      enumerable: !0,
      configurable: !0
    });
  }
  if (e !== null && typeof e == "object")
    Qe.push(e), Array.isArray(e) ? Oe = "beforeArrayValue" : Oe = "beforePropertyName";
  else {
    const t = Qe[Qe.length - 1];
    t == null ? Oe = "end" : Array.isArray(t) ? Oe = "afterArrayValue" : Oe = "afterPropertyValue";
  }
}
function un() {
  Qe.pop();
  const e = Qe[Qe.length - 1];
  e == null ? Oe = "end" : Array.isArray(e) ? Oe = "afterArrayValue" : Oe = "afterPropertyValue";
}
function ae(e) {
  return An(e === void 0 ? `JSON5: invalid end of input at ${ot}:${He}` : `JSON5: invalid character '${Ks(e)}' at ${ot}:${He}`);
}
function ut() {
  return An(`JSON5: invalid end of input at ${ot}:${He}`);
}
function yi() {
  return He -= 5, An(`JSON5: invalid identifier character at ${ot}:${He}`);
}
function Kp(e) {
  console.warn(`JSON5: '${Ks(e)}' in strings is not valid ECMAScript; consider escaping`);
}
function Ks(e) {
  const t = {
    "'": "\\'",
    '"': '\\"',
    "\\": "\\\\",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "	": "\\t",
    "\v": "\\v",
    "\0": "\\0",
    "\u2028": "\\u2028",
    "\u2029": "\\u2029"
  };
  if (t[e])
    return t[e];
  if (e < " ") {
    const n = e.charCodeAt(0).toString(16);
    return "\\x" + ("00" + n).substring(n.length);
  }
  return e;
}
function An(e) {
  const t = new SyntaxError(e);
  return t.lineNumber = ot, t.columnNumber = He, t;
}
var Jp = function(t, n, r) {
  const o = [];
  let i = "", s, u, c = "", l;
  if (n != null && typeof n == "object" && !Array.isArray(n) && (r = n.space, l = n.quote, n = n.replacer), typeof n == "function")
    u = n;
  else if (Array.isArray(n)) {
    s = [];
    for (const m of n) {
      let D;
      typeof m == "string" ? D = m : (typeof m == "number" || m instanceof String || m instanceof Number) && (D = String(m)), D !== void 0 && s.indexOf(D) < 0 && s.push(D);
    }
  }
  return r instanceof Number ? r = Number(r) : r instanceof String && (r = String(r)), typeof r == "number" ? r > 0 && (r = Math.min(10, Math.floor(r)), c = "          ".substr(0, r)) : typeof r == "string" && (c = r.substr(0, 10)), f("", { "": t });
  function f(m, D) {
    let y = D[m];
    switch (y != null && (typeof y.toJSON5 == "function" ? y = y.toJSON5(m) : typeof y.toJSON == "function" && (y = y.toJSON(m))), u && (y = u.call(D, m, y)), y instanceof Number ? y = Number(y) : y instanceof String ? y = String(y) : y instanceof Boolean && (y = y.valueOf()), y) {
      case null:
        return "null";
      case !0:
        return "true";
      case !1:
        return "false";
    }
    if (typeof y == "string")
      return a(y);
    if (typeof y == "number")
      return String(y);
    if (typeof y == "object")
      return Array.isArray(y) ? E(y) : d(y);
  }
  function a(m) {
    const D = {
      "'": 0.1,
      '"': 0.2
    }, y = {
      "'": "\\'",
      '"': '\\"',
      "\\": "\\\\",
      "\b": "\\b",
      "\f": "\\f",
      "\n": "\\n",
      "\r": "\\r",
      "	": "\\t",
      "\v": "\\v",
      "\0": "\\0",
      "\u2028": "\\u2028",
      "\u2029": "\\u2029"
    };
    let A = "";
    for (let b = 0; b < m.length; b++) {
      const g = m[b];
      switch (g) {
        case "'":
        case '"':
          D[g]++, A += g;
          continue;
        case "\0":
          if (pe.isDigit(m[b + 1])) {
            A += "\\x00";
            continue;
          }
      }
      if (y[g]) {
        A += y[g];
        continue;
      }
      if (g < " ") {
        let S = g.charCodeAt(0).toString(16);
        A += "\\x" + ("00" + S).substring(S.length);
        continue;
      }
      A += g;
    }
    const v = l || Object.keys(D).reduce((b, g) => D[b] < D[g] ? b : g);
    return A = A.replace(new RegExp(v, "g"), y[v]), v + A + v;
  }
  function d(m) {
    if (o.indexOf(m) >= 0)
      throw TypeError("Converting circular structure to JSON5");
    o.push(m);
    let D = i;
    i = i + c;
    let y = s || Object.keys(m), A = [];
    for (const b of y) {
      const g = f(b, m);
      if (g !== void 0) {
        let S = p(b) + ":";
        c !== "" && (S += " "), S += g, A.push(S);
      }
    }
    let v;
    if (A.length === 0)
      v = "{}";
    else {
      let b;
      if (c === "")
        b = A.join(","), v = "{" + b + "}";
      else {
        let g = `,
` + i;
        b = A.join(g), v = `{
` + i + b + `,
` + D + "}";
      }
    }
    return o.pop(), i = D, v;
  }
  function p(m) {
    if (m.length === 0)
      return a(m);
    const D = String.fromCodePoint(m.codePointAt(0));
    if (!pe.isIdStartChar(D))
      return a(m);
    for (let y = D.length; y < m.length; y++)
      if (!pe.isIdContinueChar(String.fromCodePoint(m.codePointAt(y))))
        return a(m);
    return m;
  }
  function E(m) {
    if (o.indexOf(m) >= 0)
      throw TypeError("Converting circular structure to JSON5");
    o.push(m);
    let D = i;
    i = i + c;
    let y = [];
    for (let v = 0; v < m.length; v++) {
      const b = f(String(v), m);
      y.push(b !== void 0 ? b : "null");
    }
    let A;
    if (y.length === 0)
      A = "[]";
    else if (c === "")
      A = "[" + y.join(",") + "]";
    else {
      let v = `,
` + i, b = y.join(v);
      A = `[
` + i + b + `,
` + D + "]";
    }
    return o.pop(), i = D, A;
  }
};
const Xp = {
  parse: Up,
  stringify: Jp
};
var tr = Xp, Qp = Pt;
function Pt(e) {
  let t = e;
  var n = {}.toString.call(e).slice(8, -1);
  if (n == "Set")
    return new Set([...e].map((o) => Pt(o)));
  if (n == "Map")
    return new Map([...e].map((o) => [Pt(o[0]), Pt(o[1])]));
  if (n == "Date")
    return new Date(e.getTime());
  if (n == "RegExp")
    return RegExp(e.source, Zp(e));
  if (n == "Array" || n == "Object") {
    t = Array.isArray(e) ? [] : {};
    for (var r in e)
      t[r] = Pt(e[r]);
  }
  return t;
}
function Zp(e) {
  if (typeof e.source.flags == "string")
    return e.source.flags;
  var t = [];
  return e.global && t.push("g"), e.ignoreCase && t.push("i"), e.multiline && t.push("m"), e.sticky && t.push("y"), e.unicode && t.push("u"), t.join("");
}
function Js(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") {
    var o = 0;
    for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  }
  return n;
}
function pn(e, t, n, r) {
  return new (n || (n = Promise))(function(o, i) {
    function s(l) {
      try {
        c(r.next(l));
      } catch (f) {
        i(f);
      }
    }
    function u(l) {
      try {
        c(r.throw(l));
      } catch (f) {
        i(f);
      }
    }
    function c(l) {
      var f;
      l.done ? o(l.value) : (f = l.value, f instanceof n ? f : new n(function(a) {
        a(f);
      })).then(s, u);
    }
    c((r = r.apply(e, t || [])).next());
  });
}
var vi = [], xt = [];
(function(e, t) {
  if (e && typeof document < "u") {
    var n, r = t.prepend === !0 ? "prepend" : "append", o = t.singleTag === !0, i = typeof t.container == "string" ? document.querySelector(t.container) : document.getElementsByTagName("head")[0];
    if (o) {
      var s = vi.indexOf(i);
      s === -1 && (s = vi.push(i) - 1, xt[s] = {}), n = xt[s] && xt[s][r] ? xt[s][r] : xt[s][r] = u();
    } else
      n = u();
    e.charCodeAt(0) === 65279 && (e = e.substring(1)), n.styleSheet ? n.styleSheet.cssText += e : n.appendChild(document.createTextNode(e));
  }
  function u() {
    var c = document.createElement("style");
    if (c.setAttribute("type", "text/css"), t.attributes)
      for (var l = Object.keys(t.attributes), f = 0; f < l.length; f++)
        c.setAttribute(l[f], t.attributes[l[f]]);
    var a = r === "prepend" ? "afterbegin" : "beforeend";
    return i.insertAdjacentElement(a, c), c;
  }
})(`:root {
  --jer-select-border: #b6b6b6;
  --jer-select-focus: #777;
  --jer-select-arrow: #777;
  --jer-form-border: 1px solid #ededf0;
  --jer-form-border-focus: 1px solid #e2e2e2;
  --jer-expand-transition-time: 0.5s;
  --jer-highlight-color: #b3d8ff;
}

.jer-visible {
  opacity: 1;
  transition: var(--jer-expand-transition-time);
}

.jer-hidden {
  opacity: 0;
  transition: var(--jer-expand-transition-time);
}

/* Select styled as per:
https://moderncss.dev/custom-select-styles-with-pure-css/
*/

.jer-select select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent;
  border: none;
  padding: 0 1em 0 0;
  margin: 0;
  /* width: 100%; */
  font-family: inherit;
  font-size: 0.8em;
  color: black;
  cursor: inherit;
  line-height: inherit;
  z-index: 1;
  outline: none;
}
select::-ms-expand {
  display: none;
}

.jer-select {
  display: grid;
  grid-template-areas: 'select';
  align-items: center;
  position: relative;
  min-width: 12ch;
  max-width: 15ch;
  border: 1px solid var(--jer-select-border);
  border-radius: 0.25em;
  padding: 0.25em 0.5em;
  cursor: pointer;
  line-height: 1.1;
  background-color: #fff;
  background-image: linear-gradient(to top, #f9f9f9, #fff 33%);
}
.jer-select select,
.jer-select::after {
  grid-area: select;
}
.jer-select:not(.jer-select--multiple)::after {
  content: '';
  justify-self: end;
  width: 0.8em;
  height: 0.5em;
  background-color: var(--jer-select-arrow);
  -webkit-clip-path: polygon(100% 0%, 0 0%, 50% 100%);
  clip-path: polygon(100% 0%, 0 0%, 50% 100%);
}

select:focus + .focus {
  position: absolute;
  top: -1px;
  left: -1px;
  right: -1px;
  bottom: -1px;
  border: 1px solid var(--jer-select-focus);
  border-radius: inherit;
}

.jer-editor-container {
  font-size: 16px;
  line-height: 1;
  padding: 1em;
  padding-left: 2em;
  /* margin-top: 1em; */
  /* margin-bottom: 1em; */
  border-radius: 0.5em;
  text-align: left;
}

.jer-editor-container textarea {
  color: var(--jer-input-color);
  border: var(--jer-form-border);
  border-radius: 0.3em;
  outline: none;
}

.jer-editor-container textarea:focus {
  border: var(--jer-form-border-focus);
}

.jer-editor-container input {
  border: var(--jer-form-border);
  border-radius: 0.3em;
  outline: none;
  font-family: inherit;
}

.jer-editor-container input:focus {
  border: var(--jer-form-border-focus);
}

/* Input highlighted text */
.jer-editor-container ::selection {
  background-color: var(--jer-highlight-color);
}

.jer-editor-container select {
  /* color: red; */
}

.jer-component {
}

.jer-collection-header-row,
.jer-value-main-row {
  display: flex;
  min-height: 1.7em;
  gap: 0.3em;
  align-items: center;
}

.jer-collection-header-row {
  display: flex;
  flex-wrap: wrap;
}

.jer-brackets {
}

.jer-bracket-outside {
}

.jer-collection-item-count {
}

.jer-collapse-icon {
  position: absolute;
  left: -1.2em;
  top: 0.35em;
}

.jer-collection-inner {
  position: relative;
}

.jer-collection-text-edit {
  display: flex;
  flex-direction: column;
  gap: 0.3em;
  align-items: flex-start;
}

.jer-collection-text-area {
  resize: both;
  padding-top: 0.2em;
  padding-left: 0.5em;
  padding-right: 0.5em;
  padding-bottom: 0;
  overflow: hidden;
  max-height: 40em;
  font-family: inherit;
  font-size: 0.85em;
}

.jer-collection-input-button-row {
  display: flex;
  justify-content: flex-end;
  font-size: 150%;
  margin-top: 0.4em;
}

.jer-collection-element {
}

.jer-collection-error-row {
  position: absolute;
  bottom: 0.5em;
}

.jer-collection-error-row-edit {
}

.jer-error-slug {
  margin-left: 1em;
}

.jer-value-component {
  position: relative;
}

.jer-value-main-row {
  display: flex;
  gap: 0;
}

.jer-value-and-buttons {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 0.5em;
}

.jer-value-error-row {
  position: absolute;
}

.jer-value-string {
  line-height: 1.3em;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}

.jer-hyperlink {
  text-decoration: underline;
}

.jer-input-text {
  resize: none;
  margin: 0;
  height: 1.4em;
  padding-left: 0.5em;
  padding-right: 0.5em;
  padding-top: 0.25em;
  padding-bottom: 0.2em;
  min-width: 6em;
  overflow: hidden;
  line-height: 1.2em;
  font-family: inherit;
  font-size: 0.9em;
}

.jer-value-number {
}

.jer-value-boolean {
}

.jer-input-boolean {
  transform: scale(1.5);
  margin-left: 0.3em;
  margin-right: 0.3em;
}

.jer-value-null {
}

.jer-value-object {
}

.jer-key-text {
  word-break: break-word;
  line-height: 1.1em;
  white-space: pre-wrap;
}

.jer-key-edit {
  padding: 0 0.3em;
  font-size: inherit;
  font-size: 0.9em;
}

.jer-value-array {
}

.jer-value-invalid {
  opacity: 0.5;
  font-style: italic;
}

.jer-input-number {
  min-width: 3em;
  font-size: 90%;
}

.jer-input-component {
}

.jer-edit-buttons,
.jer-confirm-buttons {
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 1em;
}

.jer-input-buttons {
  gap: 0.4em;
}

.jer-edit-buttons {
  gap: 0.4em;
  margin-left: 0.5em;
  opacity: 0;
}

.jer-confirm-buttons {
  gap: 0.2em;
  margin-left: 0.4em;
}

.jer-edit-buttons:hover {
  opacity: 1;
  position: relative;
}

.jer-collection-header-row:hover > .jer-edit-buttons {
  opacity: 1;
}

.jer-value-main-row:hover > .jer-edit-buttons {
  opacity: 1;
}

.jer-value-and-buttons:hover > .jer-edit-buttons {
  opacity: 1;
}

.jer-input-buttons {
}

.jer-copy-pulse {
  position: relative;
  transition: transform var(--jer-expand-transition-time);
}

.jer-copy-pulse:hover {
  opacity: 0.85;
  transition: 0.3s;
  transform: scale(1.2);
}

.jer-copy-pulse:after {
  content: '';
  display: block;
  position: absolute;
  border-radius: 50%;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all 0.5s;
  box-shadow: 0 0 15px 5px var(--jer-icon-copy-color);
}

.jer-copy-pulse:active:after {
  box-shadow: 0 0 0 0 var(--jer-icon-copy-color);
  position: absolute;
  border-radius: 4em;
  left: 0;
  top: 0;
  opacity: 1;
  transition: 0s;
}

.jer-copy-pulse:active {
  top: 0.07em;
}

.jer-rotate-90 {
  transform: rotate(-90deg);
  transition: transform var(--jer-expand-transition-time);
}

.jer-accordion-icon {
  /* font-size: '2em'; */
  transition: transform var(--jer-expand-transition-time);
}

.jer-icon:hover {
  opacity: 0.85;
  transition: 0.3s;
  transform: scale(1.2);
}

/* For displaying keys that are purely <empty string> "" */
.jer-empty-string::after {
  content: '<empty string>';
  font-style: italic;
  font-size: 90%;
}
`, {});
const Xs = ({ className: e, name: t, value: n, setValue: r, handleKeyPress: o, styles: i }) => {
  const s = n.slice(-1) === `
` ? n + "." : n;
  return he("div", { style: { display: "grid" }, children: [w("textarea", { id: `${t}_textarea`, style: Object.assign({ height: "auto", gridArea: "1 / 1 / 2 / 2", overflowY: "auto", whiteSpace: "pre-wrap" }, i), rows: 1, className: e, name: `${t}_textarea`, value: n, onChange: (u) => r(u.target.value), autoFocus: !0, onFocus: (u) => {
    n.length < 40 && u.target.select();
  }, onKeyDown: o }), w("span", { className: e, style: Object.assign({ visibility: "hidden", height: "auto", gridArea: "1 / 1 / 2 / 2", color: "red", opacity: 0.9, whiteSpace: "pre-wrap", overflowY: "auto", border: "1px solid transparent" }, i), children: s })] });
}, Qs = { default: { displayName: "Default", fragments: { edit: "rgb(42, 161, 152)" }, styles: { container: { backgroundColor: "#f6f6f6", fontFamily: "monospace" }, collection: {}, collectionInner: {}, collectionElement: {}, property: "#292929", bracket: { color: "rgb(0, 43, 54)", fontWeight: "bold" }, itemCount: { color: "rgba(0, 0, 0, 0.3)", fontStyle: "italic" }, string: "rgb(203, 75, 22)", number: "rgb(38, 139, 210)", boolean: "green", null: { color: "rgb(220, 50, 47)", fontVariant: "small-caps", fontWeight: "bold" }, input: ["#292929"], inputHighlight: "#b3d8ff", error: { fontSize: "0.8em", color: "red", fontWeight: "bold" }, iconCollection: "rgb(0, 43, 54)", iconEdit: "edit", iconDelete: "rgb(203, 75, 22)", iconAdd: "edit", iconCopy: "rgb(38, 139, 210)", iconOk: "green", iconCancel: "rgb(203, 75, 22)" } }, githubDark: { displayName: "Github Dark", styles: { container: { backgroundColor: "#0d1117", color: "white" }, property: "#E6EDF3", bracket: "#56d364", itemCount: "#8B949E", string: "#A5D6FF", number: "#D2A8FF", boolean: { color: "#FF7B72", fontSize: "90%", fontWeight: "bold" }, null: "green", iconCollection: "#D2A8FF", iconEdit: "#D2A8FF", iconDelete: "rgb(203, 75, 22)", iconAdd: "rgb(203, 75, 22)", iconCopy: "#A5D6FF", iconOk: "#56d364", iconCancel: "rgb(203, 75, 22)" } }, githubLight: { displayName: "Github Light", styles: { container: "white", property: "#1F2328", bracket: "#00802e", itemCount: "#8B949E", string: "#0A3069", number: "#953800", boolean: { color: "#CF222E", fontSize: "90%", fontWeight: "bold" }, null: "#FF7B72", iconCollection: "#8250DF", iconEdit: "#8250DF", iconDelete: "rgb(203, 75, 22)", iconAdd: "#8250DF", iconCopy: "#57606A" } }, monoDark: { displayName: "Black & White", fragments: { lightText: { color: "white" }, midGrey: "#5c5c5c" }, styles: { container: ["lightText", { backgroundColor: "black" }], property: "lightText", bracket: "midGrey", itemCount: "#4a4a4a", string: "#a8a8a8", number: "#666666", boolean: { color: "#848484", fontStyle: "italic" }, null: "#333333", iconCollection: "midGrey", iconEdit: "midGrey", iconDelete: "midGrey", iconAdd: "midGrey", iconCopy: "midGrey", iconOk: "midGrey", iconCancel: "midGrey" } }, monoLight: { fragments: { midGrey: "#a3a3a3" }, displayName: "White & Black", styles: { container: "white", property: "black", bracket: "midGrey", itemCount: "#b5b5b5", string: "#575757", number: "#999999", boolean: { color: "#7b7b7b", fontStyle: "italic" }, null: "#cccccc", iconCollection: "midGrey", iconEdit: "midGrey", iconDelete: "midGrey", iconAdd: "midGrey", iconCopy: "midGrey", iconOk: "midGrey", iconCancel: "midGrey" } }, candyWrapper: { displayName: "Candy Wrapper", fragments: { minty: { backgroundColor: "#F1FAEE" }, pale: { color: "#A8DADC" }, mid: { color: "#457B9D" }, dark: { color: "#1D3557" }, pop: { color: "#E63946" }, darkBlue: { color: "#2B2D42" } }, styles: { container: "minty", property: "pop", bracket: "dark", itemCount: "pale", string: "mid", number: ["darkBlue", { fontSize: "85%" }], boolean: ["mid", { fontStyle: "italic", fontWeight: "bold", fontSize: "80%" }], null: ["#cccccc", { fontWeight: "bold" }], input: { border: "1px solid rgb(115, 194, 198)" }, iconCollection: "#1D3557", iconEdit: "#457B9D", iconDelete: "#E63946", iconAdd: "#2B2D42", iconCopy: "#1D3557", iconCancel: "#E63946" } }, psychedelic: { displayName: "Psychedelic", fragments: { minty: { backgroundColor: "#F1FAEE" }, pale: { color: "#A8DADC" }, mid: { color: "#457B9D" }, dark: { color: "#1D3557" }, pop: { color: "#E63946" }, fluroYellow: "rgb(242, 228, 21)", fluroGreen: "rgb(68, 255, 62)", hotPink: "#f7379a" }, styles: { container: { backgroundColor: "unset", background: "linear-gradient(90deg, hsla(333, 100%, 53%, 1) 0%, hsla(33, 94%, 57%, 1) 100%)", color: "black" }, property: "black", bracket: "fluroYellow", itemCount: ["pale", { opacity: 0.7 }], string: "white", number: ["#33d9ff", { fontSize: "90%", fontWeight: "bold" }], boolean: ["fluroGreen", { fontWeight: "bold", fontSize: "80%" }], null: ["black", { fontWeight: "bold", opacity: 0.3, backgroundColor: "rgb(255, 255, 255, 0.5)", padding: "0 0.4em", borderRadius: "0.4em" }], iconCollection: "fluroYellow", iconEdit: ["black"], iconDelete: ["white", { opacity: 0.5 }], iconAdd: ["white", { opacity: 0.5 }], iconCopy: "rgb(32, 84, 242)", iconOk: "fluroGreen", iconCancel: "hotPink" } } }, eD = { container: {}, collection: {}, collectionInner: {}, collectionElement: {}, property: {}, bracket: {}, itemCount: {}, string: {}, number: {}, boolean: {}, null: {}, input: {}, inputHighlight: {}, error: {}, iconCollection: {}, iconEdit: {}, iconDelete: {}, iconAdd: {}, iconCopy: {}, iconOk: {}, iconCancel: {} }, tD = Qs.default, Zs = C.createContext({ getStyles: () => ({}), setTheme: (e) => {
}, icons: {}, setIcons: () => {
} }), nD = ({ children: e }) => {
  const [t, n] = C.useState(eD), [r, o] = C.useState({});
  return w(Zs.Provider, { value: { getStyles: (i, s) => typeof t[i] == "function" ? t[i](s) : t[i], setTheme: (i) => {
    const s = rD(i);
    n(s);
  }, icons: r, setIcons: o }, children: e });
}, et = () => C.useContext(Zs), rD = (e) => {
  var t, n, r, o;
  const i = {}, s = (Array.isArray(e) ? e : [e]).map((l) => e === "default" ? {} : typeof l == "string" ? an(Qs[l], i) : oD(l) ? an({ fragments: {}, styles: l }, i) : an(l, i)), u = an(tD, {});
  Object.keys(u).forEach((l) => {
    const f = l;
    s.forEach((a) => {
      a[f] && (u[f] = Object.assign(Object.assign({}, u[f]), a[f]));
    });
  });
  const c = Object.assign({}, u);
  return Object.entries(i).forEach(([l, f]) => {
    const a = l;
    c[a] = (d) => {
      const p = f(d) || {};
      return Object.assign(Object.assign({}, u[a]), p);
    };
  }), typeof (c == null ? void 0 : c.inputHighlight) != "function" && (!((t = c == null ? void 0 : c.inputHighlight) === null || t === void 0) && t.backgroundColor) && document.documentElement.style.setProperty("--jer-highlight-color", (n = c == null ? void 0 : c.inputHighlight) === null || n === void 0 ? void 0 : n.backgroundColor), typeof (c == null ? void 0 : c.iconCopy) != "function" && (!((r = c == null ? void 0 : c.iconCopy) === null || r === void 0) && r.color) && document.documentElement.style.setProperty("--jer-icon-copy-color", (o = c == null ? void 0 : c.iconCopy) === null || o === void 0 ? void 0 : o.color), c;
}, an = (e, t) => {
  const { fragments: n, styles: r } = e, o = {};
  return Object.entries(r).forEach(([i, s]) => {
    const u = (Array.isArray(s) ? s : [s]).reduce((c, l) => {
      var f;
      if (typeof l == "function")
        return t[i] = l, Object.assign({}, c);
      if (typeof l == "string") {
        const a = (f = n == null ? void 0 : n[l]) !== null && f !== void 0 ? f : l;
        return typeof a == "string" ? Object.assign(Object.assign({}, c), { [iD[i]]: a }) : Object.assign(Object.assign({}, c), a);
      }
      return Object.assign(Object.assign({}, c), l);
    }, {});
    o[i] = u;
  }), o;
}, oD = (e) => !("styles" in e), iD = { container: "backgroundColor", collection: "backgroundColor", collectionInner: "backgroundColor", collectionElement: "backgroundColor", property: "color", bracket: "color", itemCount: "color", string: "color", number: "color", boolean: "color", null: "color", input: "color", inputHighlight: "backgroundColor", error: "color", iconCollection: "color", iconEdit: "color", iconDelete: "color", iconAdd: "color", iconCopy: "color", iconOk: "color", iconCancel: "color" }, sD = (e, t = 200) => typeof e == "string" ? e.length < t ? e : `${e.slice(0, t - 2).trim()}...` : e, Zt = (e) => e.map((t) => t === "" ? String.fromCharCode(0) : t).join("."), uD = ({ value: e, setValue: t, isEditing: n, path: r, setIsEditing: o, handleEdit: i, handleCancel: s, stringTruncate: u, showStringQuotes: c, nodeData: l }) => {
  const { getStyles: f } = et(), a = Zt(r), d = c ? '"' : "";
  return n ? w(Xs, { className: "jer-input-text", name: a, value: e, setValue: t, isEditing: n, handleKeyPress: (p) => {
    p.key !== "Enter" || p.shiftKey ? p.key === "Escape" && s() : i();
  }, styles: f("input", l) }) : he("div", { id: `${a}_display`, onDoubleClick: () => o(!0), onClick: (p) => {
    (p.getModifierState("Control") || p.getModifierState("Meta")) && o(!0);
  }, className: "jer-value-string", style: f("string", l), children: [d, sD(e, u), d] });
}, aD = ({ value: e, setValue: t, isEditing: n, path: r, setIsEditing: o, handleEdit: i, handleCancel: s, nodeData: u }) => {
  const { getStyles: c } = et();
  return n ? w("input", { className: "jer-input-number", type: "text", name: Zt(r), value: e, onChange: (l) => t(l.target.value.replace(/[^0-9.-]/g, "")), autoFocus: !0, onFocus: (l) => l.target.select(), onKeyDown: (l) => {
    switch (l.key) {
      case "Enter":
        i();
        break;
      case "Escape":
        s();
        break;
      case "ArrowUp":
        l.preventDefault(), t(Number(e) + 1);
        break;
      case "ArrowDown":
        l.preventDefault(), t(Number(e) - 1);
    }
  }, style: { width: String(e).length / 1.5 + 2 + "em" } }) : w("span", { onDoubleClick: () => o(!0), className: "jer-value-number", style: c("number", u), children: e });
}, cD = ({ value: e, setValue: t, isEditing: n, path: r, setIsEditing: o, handleEdit: i, handleCancel: s, nodeData: u }) => {
  const { getStyles: c } = et();
  C.useEffect(() => (n && document.addEventListener("keydown", l), () => document.removeEventListener("keydown", l)), [n, i]);
  const l = (f) => {
    f.key === "Enter" ? i() : f.key === "Escape" && s();
  };
  return n ? w("input", { className: "jer-input-boolean", type: "checkbox", name: Zt(r), checked: e, onChange: () => t(!e) }) : w("span", { onDoubleClick: () => o(!0), className: "jer-value-boolean", style: c("boolean", u), children: String(e) });
}, lD = ({ value: e, isEditing: t, setIsEditing: n, handleEdit: r, handleCancel: o, nodeData: i }) => {
  const { getStyles: s } = et();
  C.useEffect(() => (t && document.addEventListener("keydown", u), () => document.removeEventListener("keydown", u)), [t]);
  const u = (c) => {
    c.key === "Enter" ? r() : c.key === "Escape" && o();
  };
  return w("div", { onDoubleClick: () => n(!0), className: "jer-value-null", style: s("null", i), children: String(e) });
}, dD = ({ value: e, translate: t, isEditing: n, handleEdit: r, handleCancel: o, nodeData: i }) => {
  C.useEffect(() => (n && document.addEventListener("keydown", s), () => document.removeEventListener("keydown", s)), []);
  const s = (u) => {
    u.key === "Enter" ? r() : u.key === "Escape" && o();
  };
  return w("span", { className: "jer-value-object", children: `{${t("DEFAULT_NEW_KEY", i)}: "${String(e)}" }` });
}, fD = ({ value: e, isEditing: t, handleEdit: n, handleCancel: r }) => {
  C.useEffect(() => (t && document.addEventListener("keydown", o), () => document.removeEventListener("keydown", o)), []);
  const o = (i) => {
    i.key === "Enter" ? n() : i.key === "Escape" && r();
  };
  return w("span", { className: "jer-value-array", children: `[${e === null ? "" : String(e)}]` });
}, pD = ({ value: e }) => {
  let t = "Error!";
  switch (typeof e) {
    case "string":
      e === "**INVALID_FUNCTION**" && (t = "Function");
      break;
    case "undefined":
      t = "Undefined";
      break;
    case "symbol":
      t = "Symbol";
  }
  return w("span", { className: "jer-value-invalid", children: t });
}, DD = ({ size: e, style: t, className: n }) => he("svg", { viewBox: "0 0 24 24", fill: "currentColor", width: e, height: e, className: n, style: t, children: [w("path", { d: "M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4z" }), w("path", { d: "M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" })] }), mD = ({ size: e, style: t, className: n }) => he("svg", { viewBox: "0 0 24 24", fill: "currentColor", width: e, height: e, className: n, style: t, transform: "translate(0, 0.5)", children: [w("path", { d: "M7 17.013l4.413-.015 9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583v4.43zM18.045 4.458l1.589 1.583-1.597 1.582-1.586-1.585 1.594-1.58zM9 13.417l6.03-5.973 1.586 1.586-6.029 5.971L9 15.006v-1.589z" }), w("path", { d: "M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2z" })] }), hD = ({ size: e, style: t, className: n }) => w("svg", { viewBox: "0 0 24 24", fill: "currentColor", width: e, height: e, className: n, style: t, children: w("path", { d: "M6 19a2 2 0 002 2h8a2 2 0 002-2V7H6v12m2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12M15.5 4l-1-1h-5l-1 1H5v2h14V4h-3.5z" }) }), gD = ({ size: e, style: t, className: n }) => he("svg", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, viewBox: "0 0 24 24", width: e, height: e, className: n, style: t, children: [w("path", { d: "M9 2 H15 A1 1 0 0 1 16 3 V5 A1 1 0 0 1 15 6 H9 A1 1 0 0 1 8 5 V3 A1 1 0 0 1 9 2 z" }), w("path", { d: "M8 4H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2v-2M16 4h2a2 2 0 012 2v4M21 14H11" }), w("path", { d: "M15 10l-4 4 4 4" })] }), ED = ({ size: e, style: t, className: n }) => he("svg", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, viewBox: "0 0 24 24", width: e, height: e, className: n, style: t, children: [w("path", { d: "M22 11.08V12a10 10 0 11-5.93-9.14" }), w("path", { d: "M22 4L12 14.01l-3-3" })] }), bD = ({ size: e, style: t, className: n }) => w("svg", { baseProfile: "tiny", viewBox: "0 0 24 24", fill: "currentColor", width: e, height: e, className: n, style: t, children: w("path", { d: "M12 4c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm-5 8c0-.832.224-1.604.584-2.295l6.711 6.711A4.943 4.943 0 0112 17c-2.757 0-5-2.243-5-5zm9.416 2.295L9.705 7.584A4.943 4.943 0 0112 7c2.757 0 5 2.243 5 5 0 .832-.224 1.604-.584 2.295z" }) }), yD = ({ size: e, style: t, className: n }) => w("svg", { viewBox: "0 0 512 512", fill: "currentColor", width: e, height: e, className: n, style: t, children: w("path", { d: "M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" }) }), ft = ({ name: e, nodeData: t, rotate: n }) => {
  var r, o, i, s, u, c, l;
  const { getStyles: f, icons: a } = et(), d = { size: "1.4em", className: "jer-icon" };
  switch (e) {
    case "add":
      return (r = a == null ? void 0 : a.add) !== null && r !== void 0 ? r : w(DD, Object.assign({}, d, { style: f("iconAdd", t) }));
    case "edit":
      return (o = a == null ? void 0 : a.edit) !== null && o !== void 0 ? o : w(mD, Object.assign({}, d, { style: f("iconEdit", t) }));
    case "delete":
      return (i = a == null ? void 0 : a.delete) !== null && i !== void 0 ? i : w(hD, Object.assign({}, d, { style: f("iconDelete", t), size: "1.45em" }));
    case "copy":
      return (s = a == null ? void 0 : a.copy) !== null && s !== void 0 ? s : w(gD, Object.assign({}, d, { style: f("iconCopy", t), size: "1.2em" }));
    case "ok":
      return (u = a == null ? void 0 : a.ok) !== null && u !== void 0 ? u : w(ED, Object.assign({}, d, { style: Object.assign({ fontSize: "90%" }, f("iconOk", t)) }));
    case "cancel":
      return (c = a == null ? void 0 : a.cancel) !== null && c !== void 0 ? c : w(bD, Object.assign({}, d, { style: Object.assign({ fontSize: "130%" }, f("iconCancel", t)) }));
    case "chevron":
      return (l = a == null ? void 0 : a.chevron) !== null && l !== void 0 ? l : w(yD, { className: "jer-accordion-icon" + (n ? " jer-rotate-90" : ""), size: "1em", style: f("iconCollection", t) });
    default:
      return w(Ar, {});
  }
}, eu = ({ startEdit: e, handleDelete: t, handleAdd: n, enableClipboard: r, type: o, nodeData: i, translate: s }) => {
  const { getStyles: u } = et(), c = s("KEY_NEW", i), [l, f] = C.useState(!1), [a, d] = C.useState(c), { key: p, path: E, value: m } = i;
  return C.useEffect(() => {
    l || d(c);
  }, [l]), he("div", { className: "jer-edit-buttons", style: l ? { opacity: 1 } : void 0, children: [r && w("div", { onClick: (D) => {
    let y, A = "value", v = "";
    r && ((D.ctrlKey || D.metaKey) === !0 ? (y = vD(E), v = y, A = "path") : (y = m, v = o ? JSON.stringify(m, null, 2) : String(y)), navigator.clipboard.writeText(v)), typeof r == "function" && r({ value: y, stringValue: v, path: E, key: p, type: A });
  }, className: "jer-copy-pulse", children: w(ft, { name: "copy", nodeData: i }) }), e && w("div", { onClick: e, children: w(ft, { name: "edit", nodeData: i }) }), t && w("div", { onClick: t, children: w(ft, { name: "delete", nodeData: i }) }), n && w("div", { onClick: () => {
    o === "object" ? f(!0) : n("");
  }, children: w(ft, { name: "add", nodeData: i }) }), l && n && o === "object" && he(Ar, { children: [w("input", { className: "jer-input-new-key", type: "text", name: "new-object-key", value: a, onChange: (D) => d(D.target.value), autoFocus: !0, onFocus: (D) => D.target.select(), onKeyDown: (D) => {
    D.key === "Enter" && n ? (f(!1), n(a)) : D.key === "Escape" && f(!1);
  }, style: u("input", i) }), w(to, { onOk: () => {
    a && (f(!1), n(a));
  }, onCancel: () => {
    f(!1);
  }, nodeData: i })] })] });
}, to = ({ onOk: e, onCancel: t, nodeData: n }) => he("div", { className: "jer-confirm-buttons", children: [w("div", { onClick: e, children: w(ft, { name: "ok", nodeData: n }) }), w("div", { onClick: t, children: w(ft, { name: "cancel", nodeData: n }) })] }), vD = (e) => e.reduce((t, n) => typeof n == "number" ? `${t}[${n}]` : t === "" ? n : `${t}.${n}`, ""), CD = ["string", "number", "boolean", "null", "object", "array"], tu = (e = [], t) => {
  const n = e.filter(({ condition: E }) => E(t));
  if (n.length === 0)
    return {};
  const r = n[0], { element: o, wrapperElement: i, customNodeProps: s, wrapperProps: u, hideKey: c = !1, showEditTools: l = !0, showOnEdit: f = !1, showOnView: a = !0, showCollectionWrapper: d = !0 } = r, p = Js(r, ["element", "wrapperElement", "customNodeProps", "wrapperProps", "hideKey", "showEditTools", "showOnEdit", "showOnView", "showCollectionWrapper"]);
  return Object.assign({ CustomNode: o, CustomWrapper: i, customNodeProps: s, wrapperProps: u, hideKey: c, showEditTools: l, showOnEdit: f, showOnView: a, showCollectionWrapper: d }, p);
}, Fn = (e) => e !== null && typeof e == "object", nu = (e, t, n, r = "") => {
  if (!n && !r)
    return !0;
  switch (e) {
    case "collection":
      if (n) {
        if (n(t, r))
          return !0;
        if (!vr(r, t, n))
          return !1;
      }
      if (!n && r && !vr(r, t))
        return !1;
      break;
    case "value":
      if (n && !n(t, r) || !n && r && !Ct(t, r))
        return !1;
  }
  return !0;
}, vr = (e = "", t, n = Ct) => {
  const r = t.value;
  return Object.entries(r).some(([o, i]) => {
    const s = [...t.path, o], u = Object.assign(Object.assign({}, t), { key: o, path: s, level: t.level + 1, value: i, size: s.length, parentData: r });
    return Fn(i) ? vr(e, u, n) : n(u, e);
  });
}, Ct = (e, t = "") => {
  const { value: n } = e;
  if (n === null && "null".includes(t.toLowerCase()))
    return !0;
  switch (typeof n) {
    case "string":
      return n.toLowerCase().includes(t.toLowerCase());
    case "number":
      return !!String(n).includes(t);
    case "boolean":
      return n ? "true".includes(t.toLowerCase()) || t === "1" : "false".includes(t.toLowerCase()) || t === "0";
    default:
      return !1;
  }
}, Ci = ({ key: e, path: t }, n = "") => !!Ct({ value: e }, n) || !!t.some((r) => Ct({ value: r }, n)), ru = C.createContext({ collapseState: null, setCollapseState: () => {
}, doesPathMatch: () => !1, currentlyEditingElement: null, setCurrentlyEditingElement: () => {
}, areChildrenBeingEdited: () => !1 }), AD = ({ children: e }) => {
  const [t, n] = C.useState(null), [r, o] = C.useState(null);
  return w(ru.Provider, { value: { collapseState: t, setCollapseState: n, doesPathMatch: (i) => {
    if (t === null)
      return !1;
    for (const [s, u] of t.path.entries())
      if (u !== i[s])
        return !1;
    return !0;
  }, currentlyEditingElement: r, setCurrentlyEditingElement: o, areChildrenBeingEdited: (i) => r !== null && r.includes(i) }, children: e });
}, no = () => C.useContext(ru), ou = (e) => {
  const { data: t, parentData: n, nodeData: r, onEdit: o, onDelete: i, onChange: s, onError: u, showErrorMessages: c, enableClipboard: l, restrictEditFilter: f, restrictDeleteFilter: a, restrictTypeSelection: d, searchFilter: p, searchText: E, showLabel: m, stringTruncate: D, showStringQuotes: y, indent: A, translate: v, customNodeDefinitions: b } = e, { getStyles: g } = et(), { currentlyEditingElement: S, setCurrentlyEditingElement: I, setCollapseState: B } = no(), [x, _] = C.useState(typeof t == "function" ? "**INVALID_FUNCTION**" : t), [M, $] = C.useState(null), { key: j, path: G } = r, q = tu(b, r), [ee, K] = C.useState(cn(t, q)), te = Zt(G), me = C.useCallback((V) => {
    if (!s)
      return void _(V);
    const se = s({ currentData: r.fullData, newValue: V, currentValue: x, name: j, path: G });
    _(se);
  }, [s]);
  C.useEffect(() => {
    _(typeof t == "function" ? "**INVALID_FUNCTION**" : t), K(cn(t, q));
  }, [t, M]);
  const U = C.useMemo(() => !f(r), [r]), fe = C.useMemo(() => !a(r), [r]), ce = C.useMemo(() => (V, se) => {
    var Se;
    Se = V.message, c && ($(Se), setTimeout(() => $(null), 2500)), console.warn("Error", Se), u && u({ currentData: r.fullData, errorValue: se, currentValue: x, name: j, path: G, error: V });
  }, [u, c]), { CustomNode: le, customNodeProps: T, hideKey: Y, showEditTools: De = !0, showOnEdit: _e, showOnView: ne } = q, re = [...CD, ...b.filter(({ showInTypesSelector: V = !1, name: se }) => V && !!se).map(({ name: V }) => V)], Ee = C.useMemo(() => {
    if (typeof d == "boolean")
      return d ? [] : re;
    if (Array.isArray(d))
      return d;
    const V = d(r);
    return typeof V == "boolean" ? V ? [] : re : V;
  }, [r, d]);
  if (!nu("value", r, p, E))
    return null;
  const Be = () => {
    let V;
    switch (I(null), ee) {
      case "object":
        V = { [v("DEFAULT_NEW_KEY", r)]: x };
        break;
      case "array":
        V = x ?? [];
        break;
      case "number": {
        const se = Number(x);
        V = isNaN(se) ? 0 : se;
        break;
      }
      default:
        V = x;
    }
    o(V, G).then((se) => {
      se && ce({ code: "UPDATE_ERROR", message: se }, V);
    });
  }, O = () => {
    I(null), _(t), K(cn(t, q));
  }, de = S === te, P = S === `key_${te}`, Pe = typeof G.slice(-1)[0] != "number" && U && fe, Re = !de && M, xe = de && Ee.length > 0, Fe = ee !== "invalid" && !M && De, ke = m && P, Te = m && !P && !Y, qe = { value: x, parentData: n, setValue: me, isEditing: de, setIsEditing: U ? () => I(te) : () => {
  }, handleEdit: Be, handleCancel: O, path: G, stringTruncate: D, showStringQuotes: y, nodeData: r, translate: v }, Ye = le && (de && _e || !de && ne) ? w(le, Object.assign({}, e, { value: x, customNodeProps: T, setValue: me, handleEdit: Be, handleCancel: O, handleKeyPress: (V) => {
    V.key === "Enter" ? Be() : V.key === "Escape" && O();
  }, isEditing: de, setIsEditing: () => I(te), getStyles: g })) : FD(cn(t), qe);
  return w("div", { className: "jer-component jer-value-component", style: { marginLeft: A / 2 + "em" }, children: he("div", { className: "jer-value-main-row", style: { flexWrap: j.length > 10 ? "wrap" : "nowrap" }, children: [Te && he("span", { className: "jer-key-text", style: Object.assign(Object.assign({}, g("property", r)), { minWidth: `${Math.min(String(j).length + 1, 5)}ch`, flexShrink: j.length > 10 ? 1 : 0 }), onDoubleClick: () => Pe && I(`key_${te}`), children: [j === "" ? w("span", { className: "jer-empty-string" }) : j, ":"] }), ke && w("input", { className: "jer-input-text jer-key-edit", type: "text", name: te, defaultValue: j, autoFocus: !0, onFocus: (V) => V.target.select(), onKeyDown: (V) => {
    V.key === "Enter" ? ((se) => {
      if (I(null), j === se || !n)
        return;
      const Se = G.slice(0, -1);
      if (Object.keys(n).includes(se))
        return void ce({ code: "KEY_EXISTS", message: v("ERROR_KEY_EXISTS", r) }, se);
      const Ve = Object.fromEntries(Object.entries(n).map(([ht, en]) => ht === j ? [se, en] : [ht, en]));
      o(Ve, Se);
    })(V.target.value) : V.key === "Escape" && O();
  }, style: { width: String(j).length / 1.5 + 0.5 + "em" } }), he("div", { className: "jer-value-and-buttons", children: [w("div", { className: "jer-input-component", children: Ye }), de ? w(to, { onOk: Be, onCancel: O, nodeData: r }) : Fe && w(eu, { startEdit: U ? () => I(te) : void 0, handleDelete: fe ? () => {
    i(x, G).then((V) => {
      V && ce({ code: "DELETE_ERROR", message: V }, x);
    });
  } : void 0, enableClipboard: l, translate: v, nodeData: r }), xe && he("div", { className: "jer-select", children: [w("select", { name: `${j}-type-select`, className: "jer-type-select", onChange: (V) => ((se) => {
    const Se = b.find((Ve) => Ve.name === se);
    if (Se)
      o(Se.defaultValue, G), K(se);
    else {
      const Ve = SD(x, se, v("DEFAULT_NEW_KEY", r), q != null && q.CustomNode ? v("DEFAULT_STRING", r) : void 0);
      me(Ve), o(Ve, G), B({ path: G, collapsed: !1 }), K(se);
    }
  })(V.target.value), value: ee, children: Ee.map((V) => w("option", { value: V, children: V }, V)) }), w("span", { className: "focus" })] }), Re && w("span", { className: "jer-error-slug", style: g("error", r), children: M })] })] }) });
}, cn = (e, t) => t != null && t.CustomNode && (t != null && t.name) && t.showInTypesSelector ? t.name : typeof e == "string" ? "string" : typeof e == "number" ? "number" : typeof e == "boolean" ? "boolean" : e === null ? "null" : "invalid", FD = (e, t) => {
  const n = t.value;
  switch (e) {
    case "string":
      return w(uD, Object.assign({}, t, { value: n }));
    case "number":
      return w(aD, Object.assign({}, t, { value: n }));
    case "boolean":
      return w(cD, Object.assign({}, t, { value: n }));
    case "null":
      return w(lD, Object.assign({}, t));
    case "object":
      return w(dD, Object.assign({}, t, { value: n }));
    case "array":
      return w(fD, Object.assign({}, t));
    default:
      return w(pD, Object.assign({}, t));
  }
}, SD = (e, t, n, r) => {
  switch (t) {
    case "string":
      return r ?? String(e);
    case "number": {
      const o = Number(e);
      return isNaN(o) ? 0 : o;
    }
    case "boolean":
      return !!e;
    case "null":
      return null;
    case "object":
      return { [n]: e };
    case "array":
      return [e];
    default:
      return String(e);
  }
}, iu = (e) => {
  var { data: t, nodeData: n, parentData: r, showCollectionCount: o } = e, i = Js(e, ["data", "nodeData", "parentData", "showCollectionCount"]);
  const { getStyles: s } = et(), { collapseState: u, setCollapseState: c, doesPathMatch: l, currentlyEditingElement: f, setCurrentlyEditingElement: a, areChildrenBeingEdited: d } = no(), { onEdit: p, onAdd: E, onDelete: m, onError: D, showErrorMessages: y, restrictEditFilter: A, restrictDeleteFilter: v, restrictAddFilter: b, collapseFilter: g, enableClipboard: S, searchFilter: I, searchText: B, indent: x, keySort: _, showArrayIndices: M, defaultValue: $, translate: j, customNodeDefinitions: G, useJSON5Editor: q } = i, ee = C.useMemo(() => q ? q instanceof Object ? (L) => tr.stringify(L, q) : (L) => tr.stringify(L, { space: 2 }) : (L) => JSON.stringify(L, null, 2), [q]), [K, te] = C.useState(ee(t)), [me, U] = C.useState(null), fe = g(n), [ce, le] = C.useState(fe), T = Object.assign(Object.assign({}, n), { collapsed: ce }), { path: Y, key: De, size: _e } = T, ne = Zt(Y), re = C.useRef(!fe), [Ee, Be] = C.useState(!1);
  C.useEffect(() => {
    te(ee(t));
  }, [t]), C.useEffect(() => {
    const L = g(T);
    re.current = !L, le(L);
  }, [g]), C.useEffect(() => {
    u !== null && l(Y) && (re.current = !0, le(u.collapsed));
  }, [u]);
  const O = C.useMemo(() => !A(T), [T]), de = C.useMemo(() => !v(T), [T]), P = C.useMemo(() => !b(T), [T]), Pe = C.useMemo(() => (L) => typeof $ != "function" ? $ : $(L), [$]), { CustomNode: Re, customNodeProps: xe, CustomWrapper: Fe, wrapperProps: ke = {}, hideKey: Te, showEditTools: qe = !0, showOnEdit: Ye, showOnView: V, showCollectionWrapper: se = !0 } = C.useMemo(() => tu(G, T), []), Se = C.useMemo(() => (L, oe) => {
    var Le;
    Le = L.message, y && (U(Le), setTimeout(() => U(null), 2500)), console.warn("Error", Le), D && D({ currentData: T.fullData, errorValue: oe, currentValue: t, name: De, path: Y, error: L });
  }, [D, y]);
  if (!nu("collection", T, I, B) && T.level > 0)
    return null;
  const Ve = Array.isArray(t) ? "array" : "object", ht = Ve === "array" ? { open: "[", close: "]" } : { open: "{", close: "}" }, en = getComputedStyle(document.documentElement).getPropertyValue("--jer-expand-transition-time"), ro = (L) => {
    L.key === "Enter" && (L.metaKey || L.shiftKey || L.ctrlKey) ? In() : L.key === "Escape" && tn();
  }, In = () => {
    try {
      const L = tr.parse(K);
      if (a(null), U(null), JSON.stringify(L) === JSON.stringify(t))
        return;
      p(L, Y).then((oe) => {
        oe && Se({ code: "UPDATE_ERROR", message: oe }, L);
      });
    } catch {
      Se({ code: "INVALID_JSON", message: j("ERROR_INVALID_JSON", T) }, K);
    }
  }, su = Y.length > 0 ? () => {
    m(t, Y).then((L) => {
      L && Se({ code: "DELETE_ERROR", message: L }, vn(t, Y));
    });
  } : void 0, tn = () => {
    a(null), U(null), te(ee(t));
  }, Ke = f === ne, uu = f === `key_${ne}`, oo = typeof Y.slice(-1)[0] == "number", au = r !== null && O && P && de && !oo, io = o === "when-closed" ? ce : o, cu = !Ke && qe, lu = (M || !oo) && !Te && De !== void 0, du = Re && (Ke && Ye || !Ke && V), fu = _ && Ve === "object", so = Object.entries(t).map(([L, oe]) => [Ve === "array" ? Number(L) : L, oe]);
  fu && so.sort(typeof _ == "function" ? (L, oe) => _(L[0], oe[0]) : void 0);
  const pu = JSON.stringify(t, null, 2).replace(/\\n/g, `
`).split(`
`).length, uo = re.current ? Ke ? w("div", { className: "jer-collection-text-edit", children: he("div", { children: [w(Xs, { className: "jer-collection-text-area", name: ne, value: K, setValue: te, isEditing: Ke, handleKeyPress: ro, styles: s("input", T) }), w("div", { className: "jer-collection-input-button-row", children: w(to, { onOk: In, onCancel: tn, nodeData: T }) })] }) }) : so.map(([L, oe], Le) => {
    const wt = { key: L, value: oe, path: [...Y, L], level: Y.length + 1, index: Le, size: Fn(oe) ? Object.keys(oe).length : 1, parentData: t, fullData: T.fullData };
    return w("div", { className: "jer-collection-element", style: s("collectionElement", wt), children: Fn(oe) ? w(iu, Object.assign({ data: oe, parentData: t, nodeData: wt, showCollectionCount: o }, i), L) : w(ou, Object.assign({ data: oe, parentData: t, nodeData: wt }, i, { showLabel: Ve === "object" || M }), L) }, L);
  }) : null, nn = !!se && ce;
  nn || (re.current = !0);
  const ao = Object.assign(Object.assign({}, i), { data: t, value: t, parentData: r, nodeData: T, setValue: (L) => pn(void 0, void 0, void 0, function* () {
    return yield p(L, Y);
  }), handleEdit: In, handleCancel: tn, handleKeyPress: ro, isEditing: Ke, setIsEditing: () => a(ne), getStyles: s }), Du = du ? w(Re, Object.assign({ customNodeProps: xe }, ao, { children: uo })) : uo, co = uu ? w("input", { className: "jer-input-text jer-key-edit", type: "text", name: ne, defaultValue: De, autoFocus: !0, onFocus: (L) => L.target.select(), onKeyDown: (L) => {
    L.key === "Enter" ? ((oe) => {
      if (a(null), De === oe || !r)
        return;
      const Le = Y.slice(0, -1);
      if (Object.keys(r).includes(oe))
        return void Se({ code: "KEY_EXISTS", message: j("ERROR_KEY_EXISTS", T) }, oe);
      const wt = Object.fromEntries(Object.entries(r).map(([po, Do]) => po === De ? [oe, Do] : [po, Do]));
      p(wt, Le);
    })(L.target.value) : L.key === "Escape" && tn();
  }, style: { width: String(De).length / 1.5 + 0.5 + "em" } }) : lu && w("span", { className: "jer-key-text", style: s("property", T), onDoubleClick: () => au && a(`key_${ne}`), children: De === "" ? w("span", { className: Y.length > 0 ? "jer-empty-string" : void 0 }) : `${De}:` }), lo = cu && w(eu, { startEdit: O ? () => {
    re.current = !0, a(ne), le(!1);
  } : void 0, handleAdd: P ? (L) => {
    le(!1);
    const oe = Pe(T);
    Ve === "array" ? E(oe, [...Y, t.length]).then((Le) => {
      Le && Se({ code: "ADD_ERROR", message: Le }, oe);
    }) : L in t ? Se({ code: "KEY_EXISTS", message: j("ERROR_KEY_EXISTS", T) }, L) : E(oe, [...Y, L]).then((Le) => {
      Le && Se({ code: "ADD_ERROR", message: Le }, oe);
    });
  } : void 0, handleDelete: de ? su : void 0, enableClipboard: S, type: Ve, nodeData: T, translate: j }), fo = he("div", { className: "jer-component jer-collection-component", style: Object.assign({ marginLeft: (Y.length === 0 ? 0 : x / 2) + "em" }, s("collection", T)), children: [se ? he("div", { className: "jer-collection-header-row", style: { position: "relative" }, children: [he("div", { className: "jer-collection-name", children: [w("div", { className: "jer-collapse-icon", onClick: (L) => ((oe) => {
    if (oe.getModifierState("Alt"))
      return re.current = !0, void c({ collapsed: !ce, path: Y });
    f && f.includes(ne) || (Be(!0), re.current = !0, le(!ce), setTimeout(() => Be(!1), 500));
  })(L), children: w(ft, { name: "chevron", rotate: ce, nodeData: T }) }), co, !Ke && w("span", { className: "jer-brackets jer-bracket-open", style: s("bracket", T), children: ht.open })] }), !Ke && io && w("div", { className: "jer-collection-item-count" + (io ? " jer-visible" : " jer-hidden"), style: s("itemCount", T), children: _e === 1 ? j("ITEM_SINGLE", Object.assign(Object.assign({}, T), { size: 1 }), 1) : j("ITEMS_MULTIPLE", T, _e) }), w("div", { className: "jer-brackets" + (nn ? " jer-visible" : " jer-hidden"), style: s("bracket", T), children: ht.close }), lo] }) : Te ? w(Ar, {}) : he("div", { className: "jer-collection-header-row", style: { position: "relative" }, children: [co, lo] }), he("div", { className: "jer-collection-inner", style: Object.assign({ maxHeight: nn ? 0 : d(ne) ? void 0 : 3 * pu + "em", overflowY: nn || Ee ? "hidden" : "visible", transition: `max-height ${en}` }, s("collectionInner", T)), children: [Du, w("div", { className: Ke ? "jer-collection-error-row" : "jer-collection-error-row-edit", children: me && w("span", { className: "jer-error-slug", style: s("error", T), children: me }) }), !Ke && se && w("div", { className: "jer-brackets jer-bracket-outside", style: s("bracket", T), children: ht.close })] })] });
  return Fe ? w(Fe, Object.assign({ customNodeProps: ke }, ao, { children: fo })) : fo;
}, wD = { ITEM_SINGLE: "{{count}} item", ITEMS_MULTIPLE: "{{count}} items", KEY_NEW: "Enter new key", ERROR_KEY_EXISTS: "Key already exists", ERROR_INVALID_JSON: "Invalid JSON", ERROR_UPDATE: "Update unsuccessful", ERROR_DELETE: "Delete unsuccessful", ERROR_ADD: "Adding node unsuccessful", DEFAULT_STRING: "New data!", DEFAULT_NEW_KEY: "key" }, ND = (e, t) => (n, r, o) => ((i, s, u, c, l) => {
  if (s[c]) {
    const a = s[c](u);
    if (a !== null)
      return a;
  }
  const f = c in i ? i[c] : wD[c];
  return l === void 0 ? f : f == null ? void 0 : f.replace("{{count}}", String(l));
})(e, t, r, n, o), OD = ({ data: e, rootName: t = "root", onUpdate: n = () => {
}, onEdit: r = n, onDelete: o = n, onAdd: i = n, onChange: s, onError: u, showErrorMessages: c = !0, enableClipboard: l = !0, theme: f = "default", icons: a, indent: d = 3, collapse: p = !1, showCollectionCount: E = !0, restrictEdit: m = !1, restrictDelete: D = !1, restrictAdd: y = !1, restrictTypeSelection: A = !1, searchFilter: v, searchText: b, searchDebounceTime: g = 350, keySort: S = !1, showArrayIndices: I = !0, showStringQuotes: B = !0, defaultValue: x = null, minWidth: _ = 250, maxWidth: M = "min(600px, 90vw)", rootFontSize: $, stringTruncate: j = 250, translations: G = {}, className: q, id: ee, customText: K = {}, customNodeDefinitions: te = [], useJSON5Editor: me = !1 }) => {
  const { getStyles: U, setTheme: fe, setIcons: ce } = et(), { setCollapseState: le } = no(), T = C.useCallback(ln(p), [p]), Y = C.useCallback(ND(G, K), [G, K]), [De, _e] = C.useState(b), [ne, re] = C.useState(e);
  C.useEffect(() => {
    f && fe(f), a && ce(a);
  }, [f, a]), C.useEffect(() => {
    le(null), re(e);
  }, [e]), C.useEffect(() => {
    const xe = setTimeout(() => _e(b), g);
    return () => clearTimeout(xe);
  }, [b, g]);
  const Ee = { key: t, path: [], level: 0, index: 0, value: ne, size: Object.keys(ne).length, parentData: null, fullData: ne }, Be = ln(m), O = ln(D), de = ln(y), P = xD(v), Pe = { name: t, nodeData: Ee, onEdit: (xe, Fe) => pn(void 0, void 0, void 0, function* () {
    const { currentData: ke, newData: Te, currentValue: qe, newValue: Ye } = nr(ne, Fe, xe, "update");
    if (qe === Ye)
      return;
    re(Te);
    const V = yield r({ currentData: ke, newData: Te, currentValue: qe, newValue: Ye, name: Fe.slice(-1)[0], path: Fe });
    return V !== void 0 ? (re(ke), V === !1 ? Y("ERROR_UPDATE", Ee) : V) : void 0;
  }), onDelete: (xe, Fe) => pn(void 0, void 0, void 0, function* () {
    const { currentData: ke, newData: Te, currentValue: qe, newValue: Ye } = nr(ne, Fe, xe, "delete");
    re(Te);
    const V = yield o({ currentData: ke, newData: Te, currentValue: qe, newValue: Ye, name: Fe.slice(-1)[0], path: Fe });
    if (V !== void 0)
      return re(ke), V === !1 ? Y("ERROR_UPDATE", Ee) : V;
  }), onAdd: (xe, Fe) => pn(void 0, void 0, void 0, function* () {
    const { currentData: ke, newData: Te, currentValue: qe, newValue: Ye } = nr(ne, Fe, xe, "add");
    re(Te);
    const V = yield i({ currentData: ke, newData: Te, currentValue: qe, newValue: Ye, name: Fe.slice(-1)[0], path: Fe });
    if (V !== void 0)
      return re(ke), V === !1 ? Y("ERROR_UPDATE", Ee) : V;
  }), onChange: s, onError: u, showErrorMessages: c, showCollectionCount: E, collapseFilter: T, restrictEditFilter: Be, restrictDeleteFilter: O, restrictAddFilter: de, restrictTypeSelection: A, searchFilter: P, searchText: De, enableClipboard: l, keySort: S, showArrayIndices: I, showStringQuotes: B, indent: d, defaultValue: x, stringTruncate: j, translate: Y, customNodeDefinitions: te, parentData: null, useJSON5Editor: me }, Re = Object.assign(Object.assign({}, U("container", Ee)), { minWidth: _, maxWidth: M });
  return Re.fontSize = $ ?? Re.fontSize, w("div", { id: ee, className: "jer-editor-container " + q, style: Re, children: Fn(ne) ? w(iu, Object.assign({ data: ne }, Pe)) : w(ou, Object.assign({ data: ne, showLabel: !0 }, Pe)) });
}, BD = (e) => w(nD, { children: w(AD, { children: w(OD, Object.assign({}, e)) }) }), nr = (e, t, n, r) => {
  if (t.length === 0)
    return { currentData: e, newData: n, currentValue: e, newValue: n };
  const o = r !== "add" ? vn(e, t) : void 0;
  return { currentData: e, newData: Vp(Qp(e), t, n, { remove: r === "delete" }), currentValue: o, newValue: r !== "delete" ? n : void 0 };
}, ln = (e) => typeof e == "boolean" ? () => e : typeof e == "number" ? ({ level: t }) => t >= e : e, xD = (e) => {
  if (e !== void 0)
    return e === "value" ? Ct : e === "key" ? Ci : e === "all" ? (t, n) => Ct(t, n) || Ci(t, n) : e;
}, Ai = (e) => {
  const t = [];
  e.rows && e.rows.forEach((n) => {
    if (n.footnotesId) {
      const { dataKey: r, staticFootnotes: o } = e.visualizations[n.footnotesId];
      !r && !(o != null && o.length) ? delete e.visualizations[n.footnotesId] : t.push(n.footnotesId);
    }
  }), e.visualizations && Object.keys(e.visualizations).forEach((n) => {
    e.visualizations[n].type === "footnotes" && !t.includes(n) && delete e.visualizations[n];
  });
}, Fi = (e) => {
  e.datasets && Object.keys(e.datasets).forEach((t) => {
    delete e.datasets[t].formattedData, e.datasets[t].dataUrl && delete e.datasets[t].data;
  }), e.visualizations && Object.keys(e.visualizations).forEach((t) => {
    e.visualizations[t] = Dn.omit(e.visualizations[t], ["runtime", "formattedData", "data"]);
  }), e.rows && e.rows.forEach((t, n) => {
    t.dataKey && (e.rows[n] = Dn.omit(t, ["data", "formattedData"]));
  });
}, Si = (e) => {
  var t;
  (t = e.dashboard) != null && t.sharedFilters && e.dashboard.sharedFilters.forEach((n, r) => {
    delete e.dashboard.sharedFilters[r].active, n.type === "urlfilter" && delete e.dashboard.sharedFilters[r].values;
  });
}, ID = (e) => {
  let t = Dn.cloneDeep(e);
  return t.type === "dashboard" ? (t.multiDashboards && t.multiDashboards.forEach((n, r) => {
    Fi(t.multiDashboards[r]), Si(t.multiDashboards[r]), Ai(t.multiDashboards[r]);
  }), Fi(t), Si(t), Ai(t)) : (delete t.runtime, delete t.formattedData, t.dataUrl && delete t.data), t;
};
const QD = ({ loadConfig: e, config: t, convertStateToConfig: n, onExpandCollapse: r = () => {
} }) => {
  const [o, i] = C.useState(!1), [s, u] = C.useState({}), c = (d) => {
    i(d), r();
  }, l = (d) => !!["datasets", "data", "originalFormattedData", "formattedData"].includes(String(d.key)), f = (d) => {
    u(d.newData);
  };
  C.useEffect(() => {
    let d = ID(t);
    t.type !== "dashboard" && (d = n()), u(d);
  }, [t]);
  const a = {
    chart: ["Charts", "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/bar-chart.html", /* @__PURE__ */ N.createElement(mo, null)],
    dashboard: ["Dashboard", "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/bar-chart.html", /* @__PURE__ */ N.createElement(mo, null)],
    map: ["Maps", "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/data-map.html", /* @__PURE__ */ N.createElement(Tp, null)],
    "markup-include": ["Markup Include", "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/Markup-Include.html", /* @__PURE__ */ N.createElement(gu, null)]
  };
  return t.type ? /* @__PURE__ */ N.createElement(N.Fragment, null, /* @__PURE__ */ N.createElement("a", { href: a[t.type][1], target: "_blank", rel: "noopener noreferrer", className: "guidance-link" }, a[t.type][2], /* @__PURE__ */ N.createElement("div", null, /* @__PURE__ */ N.createElement("span", { className: "heading-3" }, "Get Help with ", a[t.type][0]), /* @__PURE__ */ N.createElement("p", null, "Examples and documentation"))), /* @__PURE__ */ N.createElement("div", { className: "advanced" }, /* @__PURE__ */ N.createElement("span", { className: "advanced-toggle-link", onClick: () => c(!o) }, /* @__PURE__ */ N.createElement("span", null, o ? "— " : "+ "), "Advanced Options"), o && /* @__PURE__ */ N.createElement(N.Fragment, null, /* @__PURE__ */ N.createElement("section", { className: "error-box py-2 px-3 my-2" }, /* @__PURE__ */ N.createElement("div", null, /* @__PURE__ */ N.createElement("strong", { className: "pt-1" }, "Warning"), /* @__PURE__ */ N.createElement("p", null, "This can cause serious errors in your visualization."))), /* @__PURE__ */ N.createElement("p", { className: "pb-2" }, "This tool displays the actual ", /* @__PURE__ */ N.createElement("acronym", { title: "JavaScript Object Notation" }, "JSON"), " configuration that is generated by this editor and allows you to edit properties directly and apply them."), /* @__PURE__ */ N.createElement(
    "button",
    {
      className: "btn ",
      onClick: () => {
        navigator.clipboard.writeText(JSON.stringify(s));
      }
    },
    "Copy to Clipboard"
  ), /* @__PURE__ */ N.createElement(BD, { className: "advanced-json-editor", data: s, onUpdate: f, rootName: "", collapse: l }), /* @__PURE__ */ N.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: () => {
        e(s), c(!o);
      }
    },
    "Apply"
  )))) : /* @__PURE__ */ N.createElement(N.Fragment, null);
};
function _D(e) {
  const t = new URLSearchParams(window.location.search);
  if (e.setByQueryParameter) {
    const n = t.get(e.setByQueryParameter);
    if (n && e.values) {
      for (let r = 0; r < e.values.length; r++)
        if (e.values[r] && e.values[r].toLowerCase() === n.toLowerCase())
          return e.values[r];
    }
  }
}
function rr() {
  const e = {};
  for (const [t, n] of Array.from(new URLSearchParams(window.location.search).entries()))
    e[t] = n;
  return e;
}
function or(e) {
  const t = `${window.location.origin}${window.location.pathname}?${Object.keys(e).map((n) => `${n}=${encodeURIComponent(e[n])}`).join("&")}`;
  window.history.pushState({ path: t }, "", t);
}
const ir = (e, t) => {
  if (!t)
    return console.warn("COVE: No data to filter"), [];
  if (!e)
    return t;
  const n = [];
  return t == null || t.forEach((r) => {
    let o = !0;
    e.filter((i) => i.type !== "url").forEach((i) => {
      const s = r[i.columnName];
      i.active !== void 0 && (Array.isArray(i.active) ? i.active.includes(s) || (o = !1) : s != i.active && (o = !1));
    }), o && n.push(r);
  }), n;
}, PD = (e, t) => {
  const n = [];
  return Array.isArray(t) ? t.forEach((r) => {
    const o = r[e];
    n.includes(o) || n.push(o);
  }) : Object.values(t).forEach((r) => {
    r.forEach((o) => {
      const i = o[e];
      n.includes(i) || n.push(i);
    });
  }), n;
}, RD = (e, t) => e == null ? void 0 : e.map((n) => {
  const r = Dn.cloneDeep(n), o = PD(n.columnName, t);
  if (r.values = o, o.length > 0) {
    const i = r.filterStyle === "multi-select" ? r.values : r.values[0], s = _D(r);
    s ? r.active = s : r.active = r.active || i;
  }
  return r;
}), TD = ["dropdown", "pill", "tab", "tab bar", "multi-select"], VD = [
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
], wi = (e) => {
  const { order: t } = e, n = (o, i) => o.toString().localeCompare(i.toString(), "en", { numeric: !0 }), r = (o, i) => i.toString().localeCompare(o.toString(), "en", { numeric: !0 });
  return (!t || t === "") && (e.order = "asc"), t === "desc" && (e.values = e.values.sort(r)), t === "asc" && (e.values = e.values.sort(n)), e;
}, sr = ["chart", "table"], LD = (e) => {
  const [t, n] = C.useState(!1), { config: r, setConfig: o, filteredData: i, setFilteredData: s, excludedData: u, getUniqueValues: c } = e, { type: l, data: f } = r;
  return {
    handleApplyButton: (y) => {
      let A = !1;
      const v = rr();
      y.forEach((b) => {
        b.queuedActive && (b.active = b.queuedActive, delete b.queuedActive, b.setByQueryParameter && v[b.setByQueryParameter] !== b.active && (v[b.setByQueryParameter] = b.active, A = !0));
      }), A && or(v), o({ ...r, filters: y }), l === "map" && s(y, u), sr.includes(r.type) && s(ir(y, u)), n(!1);
    },
    changeFilterActive: (y, A) => {
      const v = r.type === "map" ? [...i] : [...r.filters];
      if (r.filterBehavior === "Apply Button")
        v[y].queuedActive = A, n(!0);
      else {
        const b = v[y];
        b.active = A;
        const g = rr();
        b.setByQueryParameter && g[b.setByQueryParameter] !== b.active && (g[b.setByQueryParameter] = b.active, or(g));
      }
      o({
        ...r,
        filters: v
      }), r.type === "map" && r.filterBehavior === "Filter Change" && s(v), sr.includes(r.type) && r.filterBehavior === "Filter Change" && s(ir(v, u));
    },
    announceChange: (y) => {
    },
    showApplyButton: t,
    handleReset: (y) => {
      let A = [...r.filters];
      y.preventDefault();
      let v = !1;
      const b = rr();
      A.forEach((g, S) => {
        (!g.values || g.values.length === 0) && (g.values = c(f, g.columnName)), A[S].active = wi(g).values[0], g.setByQueryParameter && b[g.setByQueryParameter] !== g.active && (b[g.setByQueryParameter] = g.active, v = !0);
      }), v && or(b), o({ ...r, filters: A }), l === "map" ? s(A, u) : s(ir(A, u));
    },
    filterConstants: {
      buttonText: "Apply Filters",
      resetText: "Reset All",
      introText: "Make a selection from the filters to change the visualization information.",
      applyText: "Select the apply button to update the visualization information."
    },
    filterStyleOptions: TD,
    filterOrderOptions: VD,
    handleFilterOrder: (y, A, v, b) => {
      const g = [...b.values], [S] = g.splice(y, 1);
      g.splice(A, 0, S);
      const I = sr.includes(r.type) ? [...r.filters] : [...i], B = { ...I[v] };
      B.values = g, B.orderedValues = g, B.active = g[0], B.order = "cust", I[v] = B, r.type === "map" && s(I), o({ ...r, filters: I });
    },
    handleSorting: wi
  };
}, jD = (e) => {
  var I;
  const { config: t, filteredData: n, dimensions: r } = e, { filters: o, type: i, general: s, theme: u, filterBehavior: c } = t, [l, f] = C.useState(!1), [a, d] = C.useState(null), p = C.useId(), {
    handleApplyButton: E,
    changeFilterActive: m,
    announceChange: D,
    showApplyButton: y,
    handleReset: A,
    filterConstants: v,
    handleSorting: b
  } = LD(e);
  C.useEffect(() => {
    r && (r[0] < 768 && (o == null ? void 0 : o.length) > 0 ? f(!0) : f(!1));
  }, [r]), C.useEffect(() => {
    if (a) {
      const B = document.getElementById(a.id);
      B && B.focus();
    }
  }, [m, a]);
  const g = (B) => B.children, S = ["filters-section", i === "map" ? s.headerColor : (t == null ? void 0 : t.visualizationType) === "Spark Line" ? null : u];
  if (g.Section = ({ children: B }) => (t == null ? void 0 : t.filters) && /* @__PURE__ */ N.createElement("section", { className: S.join(" ") }, /* @__PURE__ */ N.createElement("p", { className: "filters-section__intro-text" }, o != null && o.some((x) => x.active) ? v.introText : "", " ", t.filterBehavior === "Apply Button" && v.applyText), /* @__PURE__ */ N.createElement("div", { className: "filters-section__wrapper" }, B)), g.ApplyBehavior = () => {
    if (c !== "Apply Button")
      return;
    const B = [s != null && s.headerColor ? s.headerColor : u, "apply"];
    return /* @__PURE__ */ N.createElement("div", { className: "filters-section__buttons" }, /* @__PURE__ */ N.createElement(Eu, { onClick: () => E(o), disabled: !y, className: B.join(" ") }, v.buttonText), /* @__PURE__ */ N.createElement("a", { href: "#!", role: "button", onClick: A }, v.resetText));
  }, g.TabBar = (B) => {
    const { filter: x, index: _ } = B;
    return /* @__PURE__ */ N.createElement("section", { className: "single-filters__tab-bar" }, x.values.map((M, $) => {
      const j = ["button__tab-bar", x.active === M ? "button__tab-bar--active" : ""];
      return /* @__PURE__ */ N.createElement(
        "button",
        {
          id: `${M}-${_}-${$}-${p}`,
          className: j.join(" "),
          key: M,
          onClick: (G) => {
            m(_, M), d(G.target);
          },
          onKeyDown: (G) => {
            G.keyCode === 13 && (m(_, M), d(G.target));
          }
        },
        M
      );
    }));
  }, g.Pills = (B) => B.pills, g.Tabs = (B) => B.tabs, g.Dropdown = (B) => {
    const { index: x, label: _, active: M, filters: $ } = B;
    return /* @__PURE__ */ N.createElement(
      "select",
      {
        id: `filter-${x}`,
        name: _,
        "aria-label": `Filter by ${_}`,
        className: "filter-select",
        "data-index": "0",
        value: M,
        onChange: (j) => {
          m(x, j.target.value), D(`Filter ${_} value has been changed to ${j.target.value}, please reference the data table to see updated values.`);
        }
      },
      $
    );
  }, g.Style = () => {
    if (o || n) {
      let B = i === "map" ? n : o;
      return delete B.fromHash, RD(B, t.data).map((x, _) => {
        var me;
        if (x.showDropdown === !1)
          return;
        const M = [], $ = [], j = [], { active: G, queuedActive: q, label: ee, filterStyle: K } = x;
        b(x), (me = x.values) == null || me.forEach((U, fe) => {
          const ce = ["pill", G === U ? "pill--active" : null, u && u], le = ["tab", G === U && "tab--active", u && u];
          $.push(
            /* @__PURE__ */ N.createElement("div", { className: "pill__wrapper", key: `pill-${fe}` }, /* @__PURE__ */ N.createElement(
              "button",
              {
                id: `${U}-${_}-${fe}-${p}`,
                className: ce.join(" "),
                onKeyDown: (T) => {
                  T.keyCode === 13 && (m(_, U), d(T.target));
                },
                onClick: (T) => {
                  m(_, U), d(T.target);
                },
                name: ee
              },
              U
            ))
          ), M.push(
            /* @__PURE__ */ N.createElement("option", { key: fe, value: U, "aria-label": U }, x.labels && x.labels[U] ? x.labels[U] : U)
          ), j.push(
            /* @__PURE__ */ N.createElement(
              "button",
              {
                id: `${U}-${_}-${fe}-${p}`,
                className: le.join(" "),
                onClick: (T) => {
                  m(_, U), d(T.target);
                },
                onKeyDown: (T) => {
                  T.keyCode === 13 && (m(_, U), d(T.target));
                }
              },
              U
            )
          );
        });
        const te = ["single-filters", l ? "single-filters--dropdown" : `single-filters--${K}`];
        return /* @__PURE__ */ N.createElement("div", { className: te.join(" "), key: _ }, /* @__PURE__ */ N.createElement(N.Fragment, null, ee && /* @__PURE__ */ N.createElement("label", { htmlFor: `filter-${_}` }, ee), K === "tab" && !l && /* @__PURE__ */ N.createElement(g.Tabs, { tabs: j }), K === "pill" && !l && /* @__PURE__ */ N.createElement(g.Pills, { pills: $ }), K === "tab bar" && !l && /* @__PURE__ */ N.createElement(g.TabBar, { filter: x, index: _ }), (K === "dropdown" || l) && /* @__PURE__ */ N.createElement(g.Dropdown, { filter: x, index: _, label: ee, active: q || G, filters: M }), K === "multi-select" && /* @__PURE__ */ N.createElement(
          bu,
          {
            options: x.values.map((U) => ({ value: U, label: U })),
            fieldName: _,
            updateField: (U, fe, ce, le) => m(ce, le),
            selected: x.active,
            limit: x.selectLimit || 5
          }
        )));
      });
    }
  }, ((I = t == null ? void 0 : t.filters) == null ? void 0 : I.length) !== 0)
    return /* @__PURE__ */ N.createElement(g, null, /* @__PURE__ */ N.createElement(g.Section, null, /* @__PURE__ */ N.createElement(g.Style, null), /* @__PURE__ */ N.createElement(g.ApplyBehavior, null)));
};
jD.propTypes = {
  // runtimeFilters in place
  filteredData: gt.array,
  // function for updating the runtime filters
  setFilteredData: gt.func,
  // the full apps config
  config: gt.object,
  // updating function for setting fitlerBehavior
  setConfig: gt.func,
  // exclusions
  excludedData: gt.array,
  dimensions: gt.array
};
export {
  QD as A,
  XD as C,
  KD as D,
  jD as F,
  JD as P,
  xi as _,
  TD as a,
  ID as b,
  Ii as c,
  ir as d,
  rr as e,
  VD as f,
  _D as g,
  wi as h,
  RD as i,
  LD as j,
  or as u
};
