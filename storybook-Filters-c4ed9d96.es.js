import { r as C, R as N } from "./storybook-index-45401197.es.js";
import { r as Cr, R as mu } from "./storybook-index-633d712d.es.js";
import { _ as Et } from "./storybook-extends-70f3d2a3.es.js";
import { g as hu } from "./storybook-_commonjsHelpers-c5d32002.es.js";
import { e as mo, l as gu } from "./storybook-Icon-96a1fdd8.es.js";
import { j as S, a as ge, F as Ar } from "./storybook-jsx-runtime-36872362.es.js";
import { _ as Lt } from "./storybook-lodash-c15d8e1c.es.js";
import { B as Eu } from "./storybook-Button-d74e310e.es.js";
import { P as gt } from "./storybook-index-43433e35.es.js";
import { M as bu } from "./storybook-MultiSelect-1c07e577.es.js";
import { N as yu } from "./storybook-NestedDropdown-00da5d7e.es.js";
var Ae = typeof globalThis < "u" && globalThis || typeof self < "u" && self || // eslint-disable-next-line no-undef
typeof global < "u" && global || {}, Oe = {
  searchParams: "URLSearchParams" in Ae,
  iterable: "Symbol" in Ae && "iterator" in Symbol,
  blob: "FileReader" in Ae && "Blob" in Ae && function() {
    try {
      return new Blob(), !0;
    } catch {
      return !1;
    }
  }(),
  formData: "FormData" in Ae,
  arrayBuffer: "ArrayBuffer" in Ae
};
function vu(e) {
  return e && DataView.prototype.isPrototypeOf(e);
}
if (Oe.arrayBuffer)
  var Cu = [
    "[object Int8Array]",
    "[object Uint8Array]",
    "[object Uint8ClampedArray]",
    "[object Int16Array]",
    "[object Uint16Array]",
    "[object Int32Array]",
    "[object Uint32Array]",
    "[object Float32Array]",
    "[object Float64Array]"
  ], Au = ArrayBuffer.isView || function(e) {
    return e && Cu.indexOf(Object.prototype.toString.call(e)) > -1;
  };
function At(e) {
  if (typeof e != "string" && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || e === "")
    throw new TypeError('Invalid character in header field name: "' + e + '"');
  return e.toLowerCase();
}
function Fr(e) {
  return typeof e != "string" && (e = String(e)), e;
}
function wr(e) {
  var t = {
    next: function() {
      var n = e.shift();
      return { done: n === void 0, value: n };
    }
  };
  return Oe.iterable && (t[Symbol.iterator] = function() {
    return t;
  }), t;
}
function Ee(e) {
  this.map = {}, e instanceof Ee ? e.forEach(function(t, n) {
    this.append(n, t);
  }, this) : Array.isArray(e) ? e.forEach(function(t) {
    if (t.length != 2)
      throw new TypeError("Headers constructor: expected name/value pair to be length 2, found" + t.length);
    this.append(t[0], t[1]);
  }, this) : e && Object.getOwnPropertyNames(e).forEach(function(t) {
    this.append(t, e[t]);
  }, this);
}
Ee.prototype.append = function(e, t) {
  e = At(e), t = Fr(t);
  var n = this.map[e];
  this.map[e] = n ? n + ", " + t : t;
};
Ee.prototype.delete = function(e) {
  delete this.map[At(e)];
};
Ee.prototype.get = function(e) {
  return e = At(e), this.has(e) ? this.map[e] : null;
};
Ee.prototype.has = function(e) {
  return this.map.hasOwnProperty(At(e));
};
Ee.prototype.set = function(e, t) {
  this.map[At(e)] = Fr(t);
};
Ee.prototype.forEach = function(e, t) {
  for (var n in this.map)
    this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this);
};
Ee.prototype.keys = function() {
  var e = [];
  return this.forEach(function(t, n) {
    e.push(n);
  }), wr(e);
};
Ee.prototype.values = function() {
  var e = [];
  return this.forEach(function(t) {
    e.push(t);
  }), wr(e);
};
Ee.prototype.entries = function() {
  var e = [];
  return this.forEach(function(t, n) {
    e.push([n, t]);
  }), wr(e);
};
Oe.iterable && (Ee.prototype[Symbol.iterator] = Ee.prototype.entries);
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
function Fu(e) {
  var t = new FileReader(), n = Ni(t);
  return t.readAsArrayBuffer(e), n;
}
function wu(e) {
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
    this.bodyUsed = this.bodyUsed, this._bodyInit = e, e ? typeof e == "string" ? this._bodyText = e : Oe.blob && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : Oe.formData && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : Oe.searchParams && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : Oe.arrayBuffer && Oe.blob && vu(e) ? (this._bodyArrayBuffer = ho(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : Oe.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(e) || Au(e)) ? this._bodyArrayBuffer = ho(e) : this._bodyText = e = Object.prototype.toString.call(e) : (this._noBody = !0, this._bodyText = ""), this.headers.get("content-type") || (typeof e == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : Oe.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
  }, Oe.blob && (this.blob = function() {
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
      if (Oe.blob)
        return this.blob().then(Fu);
      throw new Error("could not read as ArrayBuffer");
    }
  }, this.text = function() {
    var e = _n(this);
    if (e)
      return e;
    if (this._bodyBlob)
      return wu(this._bodyBlob);
    if (this._bodyArrayBuffer)
      return Promise.resolve(Su(this._bodyArrayBuffer));
    if (this._bodyFormData)
      throw new Error("could not read FormData body as text");
    return Promise.resolve(this._bodyText);
  }, Oe.formData && (this.formData = function() {
    return this.text().then(Bu);
  }), this.json = function() {
    return this.text().then(JSON.parse);
  }, this;
}
var Nu = ["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT", "TRACE"];
function Ou(e) {
  var t = e.toUpperCase();
  return Nu.indexOf(t) > -1 ? t : e;
}
function pt(e, t) {
  if (!(this instanceof pt))
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
  t = t || {};
  var n = t.body;
  if (e instanceof pt) {
    if (e.bodyUsed)
      throw new TypeError("Already read");
    this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new Ee(e.headers)), this.method = e.method, this.mode = e.mode, this.signal = e.signal, !n && e._bodyInit != null && (n = e._bodyInit, e.bodyUsed = !0);
  } else
    this.url = String(e);
  if (this.credentials = t.credentials || this.credentials || "same-origin", (t.headers || !this.headers) && (this.headers = new Ee(t.headers)), this.method = Ou(t.method || this.method || "GET"), this.mode = t.mode || this.mode || null, this.signal = t.signal || this.signal || function() {
    if ("AbortController" in Ae) {
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
function Bu(e) {
  var t = new FormData();
  return e.trim().split("&").forEach(function(n) {
    if (n) {
      var r = n.split("="), o = r.shift().replace(/\+/g, " "), i = r.join("=").replace(/\+/g, " ");
      t.append(decodeURIComponent(o), decodeURIComponent(i));
    }
  }), t;
}
function xu(e) {
  var t = new Ee(), n = e.replace(/\r?\n[\t ]+/g, " ");
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
  this.ok = this.status >= 200 && this.status < 300, this.statusText = t.statusText === void 0 ? "" : "" + t.statusText, this.headers = new Ee(t.headers), this.url = t.url || "", this._initBody(e);
}
Oi.call(Je.prototype);
Je.prototype.clone = function() {
  return new Je(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new Ee(this.headers),
    url: this.url
  });
};
Je.error = function() {
  var e = new Je(null, { status: 200, statusText: "" });
  return e.ok = !1, e.status = 0, e.type = "error", e;
};
var Iu = [301, 302, 303, 307, 308];
Je.redirect = function(e, t) {
  if (Iu.indexOf(t) === -1)
    throw new RangeError("Invalid status code");
  return new Je(null, { status: t, headers: { location: e } });
};
var lt = Ae.DOMException;
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
        headers: xu(i.getAllResponseHeaders() || "")
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
        return l === "" && Ae.location.href ? Ae.location.href : l;
      } catch {
        return l;
      }
    }
    if (i.open(o.method, u(o.url), !0), o.credentials === "include" ? i.withCredentials = !0 : o.credentials === "omit" && (i.withCredentials = !1), "responseType" in i && (Oe.blob ? i.responseType = "blob" : Oe.arrayBuffer && (i.responseType = "arraybuffer")), t && typeof t.headers == "object" && !(t.headers instanceof Ee || Ae.Headers && t.headers instanceof Ae.Headers)) {
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
Ae.fetch || (Ae.fetch = Bi, Ae.Headers = Ee, Ae.Request = pt, Ae.Response = Je);
function xi(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function jt(e) {
  "@babel/helpers - typeof";
  return jt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, jt(e);
}
function _u(e, t) {
  if (jt(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (jt(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Pu(e) {
  var t = _u(e, "string");
  return jt(t) == "symbol" ? t : String(t);
}
function Ru(e, t, n) {
  return t = Pu(t), t in e ? Object.defineProperty(e, t, {
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
      Ru(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : go(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function _e(e) {
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
function Tu(e) {
  if (typeof e != "object" || e === null)
    return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function Vu(e) {
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
  if ($u(e))
    return "date";
  if (ju(e))
    return "error";
  var n = Lu(e);
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
function Lu(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function ju(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function $u(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function at(e) {
  var t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = Vu(e)), t;
}
function Ii(e, t, n) {
  var r;
  if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? _e(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
    if (typeof n != "function")
      throw new Error(process.env.NODE_ENV === "production" ? _e(1) : "Expected the enhancer to be a function. Instead, received: '" + at(n) + "'");
    return n(Ii)(e, t);
  }
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? _e(2) : "Expected the root reducer to be a function. Instead, received: '" + at(e) + "'");
  var o = e, i = t, s = [], u = s, c = !1;
  function l() {
    u === s && (u = s.slice());
  }
  function f() {
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? _e(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return i;
  }
  function a(m) {
    if (typeof m != "function")
      throw new Error(process.env.NODE_ENV === "production" ? _e(4) : "Expected the listener to be a function. Instead, received: '" + at(m) + "'");
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? _e(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    var D = !0;
    return l(), u.push(m), function() {
      if (D) {
        if (c)
          throw new Error(process.env.NODE_ENV === "production" ? _e(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        D = !1, l();
        var A = u.indexOf(m);
        u.splice(A, 1), s = null;
      }
    };
  }
  function d(m) {
    if (!Tu(m))
      throw new Error(process.env.NODE_ENV === "production" ? _e(7) : "Actions must be plain objects. Instead, the actual type was: '" + at(m) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    if (typeof m.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? _e(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? _e(9) : "Reducers may not dispatch actions.");
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
      throw new Error(process.env.NODE_ENV === "production" ? _e(10) : "Expected the nextReducer to be a function. Instead, received: '" + at(m));
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
          throw new Error(process.env.NODE_ENV === "production" ? _e(11) : "Expected the observer to be an object. Instead, received: '" + at(A) + "'");
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
    throw new Error(process.env.NODE_ENV === "production" ? _e(16) : "bindActionCreators expected an object or a function, but instead received: '" + at(e) + `'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`);
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
function Mu() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function(r) {
    return function() {
      var o = r.apply(void 0, arguments), i = function() {
        throw new Error(process.env.NODE_ENV === "production" ? _e(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
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
function ku() {
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
function Gu() {
  return Fo || (Fo = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = C, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function n(v) {
      {
        for (var b = arguments.length, g = new Array(b > 1 ? b - 1 : 0), F = 1; F < b; F++)
          g[F - 1] = arguments[F];
        r("error", v, g);
      }
    }
    function r(v, b, g) {
      {
        var F = t.ReactDebugCurrentFrame, x = F.getStackAddendum();
        x !== "" && (b += "%s", g = g.concat([x]));
        var P = g.map(function(B) {
          return String(B);
        });
        P.unshift("Warning: " + b), Function.prototype.apply.call(console[v], console, P);
      }
    }
    function o(v, b) {
      return v === b && (v !== 0 || 1 / v === 1 / b) || v !== v && b !== b;
    }
    var i = typeof Object.is == "function" ? Object.is : o, s = e.useState, u = e.useEffect, c = e.useLayoutEffect, l = e.useDebugValue, f = !1, a = !1;
    function d(v, b, g) {
      f || e.startTransition !== void 0 && (f = !0, n("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var F = b();
      if (!a) {
        var x = b();
        i(F, x) || (n("The result of getSnapshot should be cached to avoid an infinite loop"), a = !0);
      }
      var P = s({
        inst: {
          value: F,
          getSnapshot: b
        }
      }), B = P[0].inst, I = P[1];
      return c(function() {
        B.value = F, B.getSnapshot = b, p(B) && I({
          inst: B
        });
      }, [v, F, b]), u(function() {
        p(B) && I({
          inst: B
        });
        var T = function() {
          p(B) && I({
            inst: B
          });
        };
        return v(T);
      }, [v]), l(F), F;
    }
    function p(v) {
      var b = v.getSnapshot, g = v.value;
      try {
        var F = b();
        return !i(g, F);
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
process.env.NODE_ENV === "production" ? ur.exports = ku() : ur.exports = Gu();
var Sr = ur.exports, Vn = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wo;
function Wu() {
  if (wo)
    return Vn;
  wo = 1;
  var e = C, t = Sr;
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
      function y(F) {
        if (!A) {
          if (A = !0, v = F, F = d(F), p !== void 0 && m.hasValue) {
            var x = m.value;
            if (p(x, F))
              return b = x;
          }
          return b = F;
        }
        if (x = b, r(v, F))
          return x;
        var P = d(F);
        return p !== void 0 && p(x, P) ? x : (v = F, b = P);
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
var So;
function Uu() {
  return So || (So = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = C, t = Sr;
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
        var g = !1, F, x, P = function(V) {
          if (!g) {
            g = !0, F = V;
            var $ = p(V);
            if (E !== void 0 && D.hasValue) {
              var U = D.value;
              if (E(U, $))
                return x = U, U;
            }
            return x = $, $;
          }
          var z = F, de = x;
          if (r(z, V))
            return de;
          var ne = p(V);
          return E !== void 0 && E(de, ne) ? de : (F = V, x = ne, ne);
        }, B = d === void 0 ? null : d, I = function() {
          return P(a());
        }, T = B === null ? void 0 : function() {
          return P(B());
        };
        return [I, T];
      }, [a, d, p, E]), A = y[0], v = y[1], b = o(f, A, v);
      return s(function() {
        D.hasValue = !0, D.value = b;
      }, [b]), c(b), b;
    }
    Ln.useSyncExternalStoreWithSelector = l, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Ln;
}
process.env.NODE_ENV === "production" ? Wu() : Uu();
function zu(e) {
  e();
}
let Pi = zu;
const Hu = (e) => Pi = e, qu = () => Pi, No = Symbol.for("react-redux-context"), Oo = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function Yu() {
  var e;
  if (!C.createContext)
    return {};
  const t = (e = Oo[No]) != null ? e : Oo[No] = /* @__PURE__ */ new Map();
  let n = t.get(C.createContext);
  return n || (n = C.createContext(null), process.env.NODE_ENV !== "production" && (n.displayName = "ReactRedux"), t.set(C.createContext, n)), n;
}
const Ri = /* @__PURE__ */ Yu(), Ku = () => {
  throw new Error("uSES not initialized!");
};
var ar = { exports: {} }, Q = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bo;
function Ju() {
  if (Bo)
    return Q;
  Bo = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, a = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, E = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, D = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, A = e ? Symbol.for("react.scope") : 60119;
  function v(g) {
    if (typeof g == "object" && g !== null) {
      var F = g.$$typeof;
      switch (F) {
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
                  return F;
              }
          }
        case n:
          return F;
      }
    }
  }
  function b(g) {
    return v(g) === l;
  }
  return Q.AsyncMode = c, Q.ConcurrentMode = l, Q.ContextConsumer = u, Q.ContextProvider = s, Q.Element = t, Q.ForwardRef = f, Q.Fragment = r, Q.Lazy = E, Q.Memo = p, Q.Portal = n, Q.Profiler = i, Q.StrictMode = o, Q.Suspense = a, Q.isAsyncMode = function(g) {
    return b(g) || v(g) === c;
  }, Q.isConcurrentMode = b, Q.isContextConsumer = function(g) {
    return v(g) === u;
  }, Q.isContextProvider = function(g) {
    return v(g) === s;
  }, Q.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === t;
  }, Q.isForwardRef = function(g) {
    return v(g) === f;
  }, Q.isFragment = function(g) {
    return v(g) === r;
  }, Q.isLazy = function(g) {
    return v(g) === E;
  }, Q.isMemo = function(g) {
    return v(g) === p;
  }, Q.isPortal = function(g) {
    return v(g) === n;
  }, Q.isProfiler = function(g) {
    return v(g) === i;
  }, Q.isStrictMode = function(g) {
    return v(g) === o;
  }, Q.isSuspense = function(g) {
    return v(g) === a;
  }, Q.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === r || g === l || g === i || g === o || g === a || g === d || typeof g == "object" && g !== null && (g.$$typeof === E || g.$$typeof === p || g.$$typeof === s || g.$$typeof === u || g.$$typeof === f || g.$$typeof === D || g.$$typeof === y || g.$$typeof === A || g.$$typeof === m);
  }, Q.typeOf = v, Q;
}
var Z = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xo;
function Xu() {
  return xo || (xo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, a = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, E = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, D = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, A = e ? Symbol.for("react.scope") : 60119;
    function v(O) {
      return typeof O == "string" || typeof O == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      O === r || O === l || O === i || O === o || O === a || O === d || typeof O == "object" && O !== null && (O.$$typeof === E || O.$$typeof === p || O.$$typeof === s || O.$$typeof === u || O.$$typeof === f || O.$$typeof === D || O.$$typeof === y || O.$$typeof === A || O.$$typeof === m);
    }
    function b(O) {
      if (typeof O == "object" && O !== null) {
        var fe = O.$$typeof;
        switch (fe) {
          case t:
            var _ = O.type;
            switch (_) {
              case c:
              case l:
              case r:
              case i:
              case o:
              case a:
                return _;
              default:
                var Pe = _ && _.$$typeof;
                switch (Pe) {
                  case u:
                  case f:
                  case E:
                  case p:
                  case s:
                    return Pe;
                  default:
                    return fe;
                }
            }
          case n:
            return fe;
        }
      }
    }
    var g = c, F = l, x = u, P = s, B = t, I = f, T = r, V = E, $ = p, U = n, z = i, de = o, ne = a, q = !1;
    function he(O) {
      return q || (q = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), re(O) || b(O) === c;
    }
    function re(O) {
      return b(O) === l;
    }
    function Ce(O) {
      return b(O) === u;
    }
    function pe(O) {
      return b(O) === s;
    }
    function De(O) {
      return typeof O == "object" && O !== null && O.$$typeof === t;
    }
    function M(O) {
      return b(O) === f;
    }
    function Y(O) {
      return b(O) === r;
    }
    function k(O) {
      return b(O) === E;
    }
    function ue(O) {
      return b(O) === p;
    }
    function K(O) {
      return b(O) === n;
    }
    function X(O) {
      return b(O) === i;
    }
    function oe(O) {
      return b(O) === o;
    }
    function xe(O) {
      return b(O) === a;
    }
    Z.AsyncMode = g, Z.ConcurrentMode = F, Z.ContextConsumer = x, Z.ContextProvider = P, Z.Element = B, Z.ForwardRef = I, Z.Fragment = T, Z.Lazy = V, Z.Memo = $, Z.Portal = U, Z.Profiler = z, Z.StrictMode = de, Z.Suspense = ne, Z.isAsyncMode = he, Z.isConcurrentMode = re, Z.isContextConsumer = Ce, Z.isContextProvider = pe, Z.isElement = De, Z.isForwardRef = M, Z.isFragment = Y, Z.isLazy = k, Z.isMemo = ue, Z.isPortal = K, Z.isProfiler = X, Z.isStrictMode = oe, Z.isSuspense = xe, Z.isValidElementType = v, Z.typeOf = b;
  }()), Z;
}
process.env.NODE_ENV === "production" ? ar.exports = Ju() : ar.exports = Xu();
var Qu = ar.exports, Nr = Qu, Zu = {
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
}, ea = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, ta = {
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
Or[Nr.ForwardRef] = ta;
Or[Nr.Memo] = Ti;
function Io(e) {
  return Nr.isMemo(e) ? Ti : Or[e.$$typeof] || Zu;
}
var na = Object.defineProperty, ra = Object.getOwnPropertyNames, _o = Object.getOwnPropertySymbols, oa = Object.getOwnPropertyDescriptor, ia = Object.getPrototypeOf, Po = Object.prototype;
function Vi(e, t, n) {
  if (typeof t != "string") {
    if (Po) {
      var r = ia(t);
      r && r !== Po && Vi(e, r, n);
    }
    var o = ra(t);
    _o && (o = o.concat(_o(t)));
    for (var i = Io(e), s = Io(t), u = 0; u < o.length; ++u) {
      var c = o[u];
      if (!ea[c] && !(n && n[c]) && !(s && s[c]) && !(i && i[c])) {
        var l = oa(t, c);
        try {
          na(e, c, l);
        } catch {
        }
      }
    }
  }
  return e;
}
var sa = Vi;
const Ro = /* @__PURE__ */ hu(sa);
var cr = { exports: {} }, ee = {};
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
function ua() {
  if (To)
    return ee;
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
  return ee.ContextConsumer = s, ee.ContextProvider = i, ee.Element = e, ee.ForwardRef = c, ee.Fragment = n, ee.Lazy = d, ee.Memo = a, ee.Portal = t, ee.Profiler = o, ee.StrictMode = r, ee.Suspense = l, ee.SuspenseList = f, ee.isAsyncMode = function() {
    return !1;
  }, ee.isConcurrentMode = function() {
    return !1;
  }, ee.isContextConsumer = function(D) {
    return m(D) === s;
  }, ee.isContextProvider = function(D) {
    return m(D) === i;
  }, ee.isElement = function(D) {
    return typeof D == "object" && D !== null && D.$$typeof === e;
  }, ee.isForwardRef = function(D) {
    return m(D) === c;
  }, ee.isFragment = function(D) {
    return m(D) === n;
  }, ee.isLazy = function(D) {
    return m(D) === d;
  }, ee.isMemo = function(D) {
    return m(D) === a;
  }, ee.isPortal = function(D) {
    return m(D) === t;
  }, ee.isProfiler = function(D) {
    return m(D) === o;
  }, ee.isStrictMode = function(D) {
    return m(D) === r;
  }, ee.isSuspense = function(D) {
    return m(D) === l;
  }, ee.isSuspenseList = function(D) {
    return m(D) === f;
  }, ee.isValidElementType = function(D) {
    return typeof D == "string" || typeof D == "function" || D === n || D === o || D === r || D === l || D === f || D === p || typeof D == "object" && D !== null && (D.$$typeof === d || D.$$typeof === a || D.$$typeof === i || D.$$typeof === s || D.$$typeof === c || D.$$typeof === E || D.getModuleId !== void 0);
  }, ee.typeOf = m, ee;
}
var te = {};
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
function aa() {
  return Vo || (Vo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), u = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), a = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), E = !1, m = !1, D = !1, y = !1, A = !1, v;
    v = Symbol.for("react.module.reference");
    function b(_) {
      return !!(typeof _ == "string" || typeof _ == "function" || _ === n || _ === o || A || _ === r || _ === l || _ === f || y || _ === p || E || m || D || typeof _ == "object" && _ !== null && (_.$$typeof === d || _.$$typeof === a || _.$$typeof === i || _.$$typeof === s || _.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      _.$$typeof === v || _.getModuleId !== void 0));
    }
    function g(_) {
      if (typeof _ == "object" && _ !== null) {
        var Pe = _.$$typeof;
        switch (Pe) {
          case e:
            var Re = _.type;
            switch (Re) {
              case n:
              case o:
              case r:
              case l:
              case f:
                return Re;
              default:
                var Ie = Re && Re.$$typeof;
                switch (Ie) {
                  case u:
                  case s:
                  case c:
                  case d:
                  case a:
                  case i:
                    return Ie;
                  default:
                    return Pe;
                }
            }
          case t:
            return Pe;
        }
      }
    }
    var F = s, x = i, P = e, B = c, I = n, T = d, V = a, $ = t, U = o, z = r, de = l, ne = f, q = !1, he = !1;
    function re(_) {
      return q || (q = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Ce(_) {
      return he || (he = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function pe(_) {
      return g(_) === s;
    }
    function De(_) {
      return g(_) === i;
    }
    function M(_) {
      return typeof _ == "object" && _ !== null && _.$$typeof === e;
    }
    function Y(_) {
      return g(_) === c;
    }
    function k(_) {
      return g(_) === n;
    }
    function ue(_) {
      return g(_) === d;
    }
    function K(_) {
      return g(_) === a;
    }
    function X(_) {
      return g(_) === t;
    }
    function oe(_) {
      return g(_) === o;
    }
    function xe(_) {
      return g(_) === r;
    }
    function O(_) {
      return g(_) === l;
    }
    function fe(_) {
      return g(_) === f;
    }
    te.ContextConsumer = F, te.ContextProvider = x, te.Element = P, te.ForwardRef = B, te.Fragment = I, te.Lazy = T, te.Memo = V, te.Portal = $, te.Profiler = U, te.StrictMode = z, te.Suspense = de, te.SuspenseList = ne, te.isAsyncMode = re, te.isConcurrentMode = Ce, te.isContextConsumer = pe, te.isContextProvider = De, te.isElement = M, te.isForwardRef = Y, te.isFragment = k, te.isLazy = ue, te.isMemo = K, te.isPortal = X, te.isProfiler = oe, te.isStrictMode = xe, te.isSuspense = O, te.isSuspenseList = fe, te.isValidElementType = b, te.typeOf = g;
  }()), te;
}
process.env.NODE_ENV === "production" ? cr.exports = ua() : cr.exports = aa();
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
function ca(e, t, n) {
  jn(e, "mapStateToProps"), jn(t, "mapDispatchToProps"), jn(n, "mergeProps");
}
const la = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function da(e, t, n, r, {
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
function fa(e, t) {
  let {
    initMapStateToProps: n,
    initMapDispatchToProps: r,
    initMergeProps: o
  } = t, i = xi(t, la);
  const s = n(e, i), u = r(e, i), c = o(e, i);
  return process.env.NODE_ENV !== "production" && ca(s, u, c), da(s, u, c, e, i);
}
function pa(e, t) {
  const n = {};
  for (const r in e) {
    const o = e[r];
    typeof o == "function" && (n[r] = (...i) => t(o(...i)));
  }
  return n;
}
function Da(e) {
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
  Da(e) || Br(`${n}() in ${t} must return a plain object. Instead received ${e}.`);
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
function ma(e) {
  return e && typeof e == "object" ? lr((t) => (
    // @ts-ignore
    pa(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    ji(e, "mapDispatchToProps")
  ) : xr(e, "mapDispatchToProps") : lr((t) => ({
    dispatch: t
  }));
}
function ha(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    ji(e, "mapStateToProps")
  ) : xr(e, "mapStateToProps") : lr(() => ({}));
}
function ga(e, t, n) {
  return Et({}, n, e, t);
}
function Ea(e) {
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
function ba(e) {
  return e ? typeof e == "function" ? Ea(e) : xr(e, "mergeProps") : () => ga;
}
function ya() {
  const e = qu();
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
    o++, n || (n = t ? t.addNestedSub(c) : e.subscribe(c), r = ya());
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
const va = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", mn = va ? C.useLayoutEffect : C.useEffect;
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
const Ca = ["reactReduxForwardedRef"];
let Mi = Ku;
const Aa = (e) => {
  Mi = e;
}, Fa = [null, null], wa = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function Sa(e, t, n) {
  mn(() => e(...t), n);
}
function Na(e, t, n, r, o, i) {
  e.current = r, n.current = !1, o.current && (o.current = null, i());
}
function Oa(e, t, n, r, o, i, s, u, c, l, f) {
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
function Ba(e, t) {
  return e === t;
}
let ko = !1;
function ki(e, t, n, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: r,
  areStatesEqual: o = Ba,
  areOwnPropsEqual: i = $n,
  areStatePropsEqual: s = $n,
  areMergedPropsEqual: u = $n,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: c = !1,
  // the context consumer to use
  context: l = Ri
} = {}) {
  process.env.NODE_ENV !== "production" && r !== void 0 && !ko && (ko = !0, Br('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const f = l, a = ha(e), d = ma(t), p = ba(n), E = !!e;
  return (D) => {
    if (process.env.NODE_ENV !== "production" && !Lo.isValidElementType(D))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${wa(D)}`);
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
    function b(x) {
      const [P, B, I] = C.useMemo(() => {
        const {
          reactReduxForwardedRef: O
        } = x, fe = xi(x, Ca);
        return [x.context, O, fe];
      }, [x]), T = C.useMemo(() => P && P.Consumer && // @ts-ignore
      Lo.isContextConsumer(/* @__PURE__ */ C.createElement(P.Consumer, null)) ? P : f, [P, f]), V = C.useContext(T), $ = !!x.store && !!x.store.getState && !!x.store.dispatch, U = !!V && !!V.store;
      if (process.env.NODE_ENV !== "production" && !$ && !U)
        throw new Error(`Could not find "store" in the context of "${A}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${A} in connect options.`);
      const z = $ ? x.store : V.store, de = U ? V.getServerState : z.getState, ne = C.useMemo(() => fa(z.dispatch, v), [z]), [q, he] = C.useMemo(() => {
        if (!E)
          return Fa;
        const O = $i(z, $ ? void 0 : V.subscription), fe = O.notifyNestedSubs.bind(O);
        return [O, fe];
      }, [z, $, V]), re = C.useMemo(() => $ ? V : Et({}, V, {
        subscription: q
      }), [$, V, q]), Ce = C.useRef(), pe = C.useRef(I), De = C.useRef(), M = C.useRef(!1);
      C.useRef(!1);
      const Y = C.useRef(!1), k = C.useRef();
      mn(() => (Y.current = !0, () => {
        Y.current = !1;
      }), []);
      const ue = C.useMemo(() => () => De.current && I === pe.current ? De.current : ne(z.getState(), I), [z, I]), K = C.useMemo(() => (fe) => q ? Oa(
        E,
        z,
        q,
        // @ts-ignore
        ne,
        pe,
        Ce,
        M,
        Y,
        De,
        he,
        fe
      ) : () => {
      }, [q]);
      Sa(Na, [pe, Ce, M, I, De, he]);
      let X;
      try {
        X = Mi(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          K,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          ue,
          de ? () => ne(de(), I) : ue
        );
      } catch (O) {
        throw k.current && (O.message += `
The error may be correlated with this previous error:
${k.current.stack}

`), O;
      }
      mn(() => {
        k.current = void 0, De.current = void 0, Ce.current = X;
      });
      const oe = C.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ C.createElement(D, Et({}, X, {
          ref: B
        }))
      ), [B, D, X]);
      return C.useMemo(() => E ? /* @__PURE__ */ C.createElement(T.Provider, {
        value: re
      }, oe) : oe, [T, oe, re]);
    }
    const F = C.memo(b);
    if (F.WrappedComponent = D, F.displayName = b.displayName = A, c) {
      const P = C.forwardRef(function(I, T) {
        return /* @__PURE__ */ C.createElement(F, Et({}, I, {
          reactReduxForwardedRef: T
        }));
      });
      return P.displayName = A, P.WrappedComponent = D, Ro(P, D);
    }
    return Ro(F, D);
  };
}
function xa({
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
Aa(Sr.useSyncExternalStore);
Hu(Cr.unstable_batchedUpdates);
function Ia(e, t) {
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
  })[0], r = C.useRef(!0), o = C.useRef(n), i = r.current || !!(t && o.current.inputs && Ia(t, o.current.inputs)), s = i ? o.current : {
    inputs: t,
    result: e()
  };
  return C.useEffect(function() {
    r.current = !1, o.current = s;
  }, [s]), s.result;
}
function _a(e, t) {
  return Gi(function() {
    return e;
  }, t);
}
var J = Gi, R = _a, Pa = process.env.NODE_ENV === "production", Mn = "Invariant failed";
function Go(e, t) {
  if (!e) {
    if (Pa)
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
}, Ra = function(t, n) {
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
}, Ta = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, hn = function(t, n) {
  var r = t.borderBox, o = t.border, i = t.margin, s = t.padding, u = Ra(r, n);
  return _r({
    borderBox: u,
    border: o,
    margin: i,
    padding: s
  });
}, gn = function(t, n) {
  return n === void 0 && (n = Ta()), hn(t, n);
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
function Va(e, t) {
  return !!(e === t || Uo(e) && Uo(t));
}
function La(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (!Va(e[n], t[n]))
      return !1;
  return !0;
}
function ye(e, t) {
  t === void 0 && (t = La);
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
var ja = function(t) {
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
const $t = ja, $a = process.env.NODE_ENV === "production", Ma = /[ \t]{2,}/g, ka = /^[ \t]*/gm, zo = (e) => e.replace(Ma, " ").replace(ka, "").trim(), Ga = (e) => zo(`
  %c@hello-pangea/dnd

  %c${zo(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), Wa = (e) => [Ga(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], Ua = "__@hello-pangea/dnd-disable-dev-warnings";
function zi(e, t) {
  $a || typeof window < "u" && window[Ua] || console[e](...Wa(t));
}
const se = zi.bind(null, "warn"), dr = zi.bind(null, "error");
function tt() {
}
function za(e, t) {
  return {
    ...e,
    ...t
  };
}
function We(e, t, n) {
  const r = t.map((o) => {
    const i = za(n, o.options);
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
const Ha = process.env.NODE_ENV === "production", Ho = "Invariant failed";
class Mt extends Error {
}
Mt.prototype.toString = function() {
  return this.message;
};
function h(e, t) {
  if (!e)
    throw Ha ? new Mt(Ho) : new Mt(`${Ho}: ${t || ""}`);
}
class qa extends N.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = tt, this.onWindowError = (n) => {
      const r = this.getCallbacks();
      r.isDragging() && (r.tryAbort(), process.env.NODE_ENV !== "production" && se(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const o = n.error;
      o instanceof Mt && (n.preventDefault(), process.env.NODE_ENV !== "production" && dr(o.message));
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
    if (t instanceof Mt) {
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
const Ya = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`, En = (e) => e + 1, Ka = (e) => `
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
    `, Ja = (e) => {
  const t = e.destination;
  if (t)
    return Hi(e.source, t);
  const n = e.combine;
  return n ? qi(e.draggableId, e.source, n) : "You are over an area that cannot be dropped on";
}, qo = (e) => `
  The item has returned to its starting position
  of ${En(e.index)}
`, Xa = (e) => {
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
}, Qa = {
  dragHandleUsageInstructions: Ya,
  onDragStart: Ka,
  onDragUpdate: Ja,
  onDragEnd: Xa
};
var fn = Qa;
const ve = {
  x: 0,
  y: 0
}, Fe = (e, t) => ({
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
}, kt = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2), Yo = (e, t) => Math.min(...t.map((n) => kt(e, n))), Yi = (e) => (t) => ({
  x: e(t.x),
  y: e(t.y)
});
var Za = (e, t) => {
  const n = ze({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return n.width <= 0 || n.height <= 0 ? null : n;
};
const Yt = (e, t) => ({
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
}], ec = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, tc = (e, t) => t ? Yt(e, t.scroll.diff.displacement) : e, nc = (e, t, n) => n && n.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + n.increasedBy[t.line]
} : e, rc = (e, t) => t && t.shouldClipSubject ? Za(t.pageMarginBox, e) : ze(e);
var bt = ({
  page: e,
  withPlaceholder: t,
  axis: n,
  frame: r
}) => {
  const o = tc(e.marginBox, r), i = nc(o, n, t), s = rc(i, r);
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
const Ki = ye((e) => e.reduce((t, n) => (t[n.descriptor.id] = n, t), {})), Ji = ye((e) => e.reduce((t, n) => (t[n.descriptor.id] = n, t), {})), wn = ye((e) => Object.values(e)), oc = ye((e) => Object.values(e));
var mt = ye((e, t) => oc(t).filter((r) => e === r.descriptor.droppableId).sort((r, o) => r.descriptor.index - o.descriptor.index));
function Rr(e) {
  return e.at && e.at.type === "REORDER" ? e.at.destination : null;
}
function Sn(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
var Nn = ye((e, t) => t.filter((n) => n.descriptor.id !== e.descriptor.id)), ic = ({
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
}, wt = (e, t) => e.descriptor.droppableId === t.descriptor.id;
const Xi = {
  point: ve,
  value: 0
}, Gt = {
  invisible: {},
  visible: {},
  all: []
}, sc = {
  displaced: Gt,
  displacedBy: Xi,
  at: null
};
var uc = sc, Ue = (e, t) => (n) => e <= n && n <= t, Qi = (e) => {
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
}, ac = (e) => {
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
var cc = (e) => (t) => {
  const n = Ue(t.top, t.bottom), r = Ue(t.left, t.right);
  return (o) => e === Tr ? n(o.top) && n(o.bottom) : r(o.left) && r(o.right);
};
const lc = (e, t) => {
  const n = t.frame ? t.frame.scroll.diff.displacement : ve;
  return Yt(e, n);
}, dc = (e, t, n) => t.subject.active ? n(t.subject.active)(e) : !1, fc = (e, t, n) => n(t)(e), Vr = ({
  target: e,
  destination: t,
  viewport: n,
  withDroppableDisplacement: r,
  isVisibleThroughFrameFn: o
}) => {
  const i = r ? lc(e, t) : e;
  return dc(i, t, o) && fc(i, n, o);
}, pc = (e) => Vr({
  ...e,
  isVisibleThroughFrameFn: Qi
}), es = (e) => Vr({
  ...e,
  isVisibleThroughFrameFn: ac
}), Dc = (e) => Vr({
  ...e,
  isVisibleThroughFrameFn: cc(e.destination.axis)
}), mc = (e, t, n) => {
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
function hc(e, t) {
  const n = e.page.marginBox, r = {
    top: t.point.y,
    right: 0,
    bottom: 0,
    left: t.point.x
  };
  return ze(Ir(n, r));
}
function Wt({
  afterDragging: e,
  destination: t,
  displacedBy: n,
  viewport: r,
  forceShouldAnimate: o,
  last: i
}) {
  return e.reduce(function(u, c) {
    const l = hc(c, n), f = c.descriptor.id;
    if (u.all.push(f), !pc({
      target: l,
      destination: t,
      viewport: r,
      withDroppableDisplacement: !0
    }))
      return u.invisible[c.descriptor.id] = !0, u;
    const d = mc(f, i, o), p = {
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
function gc(e, t) {
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
  const o = gc(e, {
    inHomeList: t
  });
  return {
    displaced: Gt,
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
  const c = wt(e, n);
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
    displaced: Wt({
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
var Ec = ({
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
}, bc = ({
  isMovingForward: e,
  isInHomeList: t,
  insideDestination: n,
  location: r
}) => {
  if (!n.length)
    return null;
  const o = r.index, i = e ? o + 1 : o - 1, s = n[0].descriptor.index, u = n[n.length - 1].descriptor.index, c = t ? u : u + 1;
  return i < s || i > c ? null : i;
}, yc = ({
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
    const a = bc({
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
  const f = Ec({
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
}, vc = ({
  displaced: e,
  afterCritical: t,
  combineWith: n,
  displacedBy: r
}) => {
  const o = !!(e.visible[n] || e.invisible[n]);
  return rt(n, t) ? o ? ve : Ft(r.point) : o ? r.point : ve;
}, Cc = ({
  afterCritical: e,
  impact: t,
  draggables: n
}) => {
  const r = Sn(t);
  r || (process.env.NODE_ENV, h(!1));
  const o = r.draggableId, i = n[o].page.borderBox.center, s = vc({
    displaced: t.displaced,
    afterCritical: e,
    combineWith: o,
    displacedBy: t.displacedBy
  });
  return Fe(i, s);
};
const ts = (e, t) => t.margin[e.start] + t.borderBox[e.size] / 2, Ac = (e, t) => t.margin[e.end] + t.borderBox[e.size] / 2, Lr = (e, t, n) => t[e.crossAxisStart] + n.margin[e.crossAxisStart] + n.borderBox[e.crossAxisSize] / 2, Xo = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: n
}) => Dt(e.line, t.marginBox[e.end] + ts(e, n), Lr(e, t.marginBox, n)), Qo = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: n
}) => Dt(e.line, t.marginBox[e.start] - Ac(e, n), Lr(e, t.marginBox, n)), Fc = ({
  axis: e,
  moveInto: t,
  isMoving: n
}) => Dt(e.line, t.contentBox[e.start] + ts(e, n), Lr(e, t.contentBox, n));
var wc = ({
  impact: e,
  draggable: t,
  draggables: n,
  droppable: r,
  afterCritical: o
}) => {
  const i = mt(r.descriptor.id, n), s = t.page, u = r.axis;
  if (!i.length)
    return Fc({
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
  return n ? Fe(t, n.scroll.diff.displacement) : t;
};
const Sc = ({
  impact: e,
  draggable: t,
  droppable: n,
  draggables: r,
  afterCritical: o
}) => {
  const i = t.page.borderBox.center, s = e.at;
  return !n || !s ? i : s.type === "REORDER" ? wc({
    impact: e,
    draggable: t,
    draggables: r,
    droppable: n,
    afterCritical: o
  }) : Cc({
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
function Nc(e, t) {
  for (let n = 0; n < t.length; n++) {
    const r = t[n].visible[e];
    if (r)
      return r;
  }
  return null;
}
var Oc = ({
  impact: e,
  viewport: t,
  destination: n,
  draggables: r,
  maxScrollChange: o
}) => {
  const i = ns(t, Fe(t.scroll.current, o)), s = n.frame ? Pr(n, Fe(n.frame.scroll.current, o)) : n, u = e.displaced, c = Wt({
    afterDragging: Zo(u.all, r),
    destination: n,
    displacedBy: e.displacedBy,
    viewport: i.frame,
    last: u,
    forceShouldAnimate: !1
  }), l = Wt({
    afterDragging: Zo(u.all, r),
    destination: s,
    displacedBy: e.displacedBy,
    viewport: t.frame,
    last: u,
    forceShouldAnimate: !1
  }), f = {}, a = {}, d = [u, c, l];
  return u.all.forEach((E) => {
    const m = Nc(E, d);
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
}, Bc = (e, t) => Fe(e.scroll.diff.displacement, t), jr = ({
  pageBorderBoxCenter: e,
  draggable: t,
  viewport: n
}) => {
  const r = Bc(n, e), o = je(r, t.page.borderBox.center);
  return Fe(t.client.borderBox.center, o);
}, rs = ({
  draggable: e,
  destination: t,
  newPageBorderBoxCenter: n,
  viewport: r,
  withDroppableDisplacement: o,
  onlyOnMainAxis: i = !1
}) => {
  const s = je(n, e.page.borderBox.center), c = {
    target: Yt(e.page.borderBox, s),
    destination: t,
    withDroppableDisplacement: o,
    viewport: r
  };
  return i ? Dc(c) : es(c);
}, xc = ({
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
  const l = mt(n.descriptor.id, r), f = wt(t, n), a = ic({
    isMovingForward: e,
    draggable: t,
    destination: n,
    insideDestination: l,
    previousImpact: o
  }) || yc({
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
  const E = je(d, s), m = Oc({
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
const Ne = (e) => {
  const t = e.subject.active;
  return t || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot get clipped area from droppable") : h(!1)), t;
};
var Ic = ({
  isMovingForward: e,
  pageBorderBoxCenter: t,
  source: n,
  droppables: r,
  viewport: o
}) => {
  const i = n.subject.active;
  if (!i)
    return null;
  const s = n.axis, u = Ue(i[s.start], i[s.end]), c = wn(r).filter((f) => f !== n).filter((f) => f.isEnabled).filter((f) => !!f.subject.active).filter((f) => Qi(o.frame)(Ne(f))).filter((f) => {
    const a = Ne(f);
    return e ? i[s.crossAxisEnd] < a[s.crossAxisEnd] : a[s.crossAxisStart] < i[s.crossAxisStart];
  }).filter((f) => {
    const a = Ne(f), d = Ue(a[s.start], a[s.end]);
    return u(a[s.start]) || u(a[s.end]) || d(i[s.start]) || d(i[s.end]);
  }).sort((f, a) => {
    const d = Ne(f)[s.crossAxisStart], p = Ne(a)[s.crossAxisStart];
    return e ? d - p : p - d;
  }).filter((f, a, d) => Ne(f)[s.crossAxisStart] === Ne(d[0])[s.crossAxisStart]);
  if (!c.length)
    return null;
  if (c.length === 1)
    return c[0];
  const l = c.filter((f) => Ue(Ne(f)[s.start], Ne(f)[s.end])(t[s.line]));
  return l.length === 1 ? l[0] : l.length > 1 ? l.sort((f, a) => Ne(f)[s.start] - Ne(a)[s.start])[0] : c.sort((f, a) => {
    const d = Yo(t, Ko(Ne(f))), p = Yo(t, Ko(Ne(a)));
    return d !== p ? d - p : Ne(f)[s.start] - Ne(a)[s.start];
  })[0];
};
const ei = (e, t) => {
  const n = e.page.borderBox.center;
  return rt(e.descriptor.id, t) ? je(n, t.displacedBy.point) : n;
}, _c = (e, t) => {
  const n = e.page.borderBox;
  return rt(e.descriptor.id, t) ? Yt(n, Ft(t.displacedBy.point)) : n;
};
var Pc = ({
  pageBorderBoxCenter: e,
  viewport: t,
  destination: n,
  insideDestination: r,
  afterCritical: o
}) => r.filter((s) => es({
  target: _c(s, o),
  destination: n,
  viewport: t.frame,
  withDroppableDisplacement: !0
})).sort((s, u) => {
  const c = kt(e, fr(n, ei(s, o))), l = kt(e, fr(n, ei(u, o)));
  return c < l ? -1 : l < c ? 1 : s.descriptor.index - u.descriptor.index;
})[0] || null, Kt = ye(function(t, n) {
  const r = n[t.line];
  return {
    value: r,
    point: Dt(t.line, r)
  };
});
const Rc = (e, t, n) => {
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
  wt(t, e) && (process.env.NODE_ENV !== "production" ? h(!1, "Should not add placeholder space to home list") : h(!1)), e.subject.withPlaceholder && (process.env.NODE_ENV !== "production" ? h(!1, "Cannot add placeholder size to a subject when it already has one") : h(!1));
  const o = Kt(e.axis, t.displaceBy).point, i = Rc(e, o, n), s = {
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
  const u = i ? Fe(r.scroll.max, i) : r.scroll.max, c = os(r, u), l = bt({
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
}, Tc = (e) => {
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
var Vc = ({
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
      displaced: Gt,
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
    }), p = wt(r, i) ? i : is(i, r, o);
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
  })(), f = Kt(i.axis, r.displaceBy);
  return bn({
    draggable: r,
    insideDestination: n,
    destination: i,
    viewport: s,
    displacedBy: f,
    last: Gt,
    index: l
  });
}, Lc = ({
  isMovingForward: e,
  previousPageBorderBoxCenter: t,
  draggable: n,
  isOver: r,
  draggables: o,
  droppables: i,
  viewport: s,
  afterCritical: u
}) => {
  const c = Ic({
    isMovingForward: e,
    pageBorderBoxCenter: t,
    source: r,
    droppables: i,
    viewport: s
  });
  if (!c)
    return null;
  const l = mt(c.descriptor.id, o), f = Pc({
    pageBorderBoxCenter: t,
    viewport: s,
    destination: c,
    insideDestination: l,
    afterCritical: u
  }), a = Vc({
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
const jc = (e, t) => {
  const n = $e(e);
  return n ? t[n] : null;
};
var $c = ({
  state: e,
  type: t
}) => {
  const n = jc(e.impact, e.dimensions.droppables), r = !!n, o = e.dimensions.droppables[e.critical.droppable.id], i = n || o, s = i.axis.direction, u = s === "vertical" && (t === "MOVE_UP" || t === "MOVE_DOWN") || s === "horizontal" && (t === "MOVE_LEFT" || t === "MOVE_RIGHT");
  if (u && !r)
    return null;
  const c = t === "MOVE_DOWN" || t === "MOVE_RIGHT", l = e.dimensions.draggables[e.critical.draggable.id], f = e.current.page.borderBoxCenter, {
    draggables: a,
    droppables: d
  } = e.dimensions;
  return u ? xc({
    isMovingForward: c,
    previousPageBorderBoxCenter: f,
    draggable: l,
    destination: i,
    draggables: a,
    viewport: e.viewport,
    previousClientSelection: e.current.client.selection,
    previousImpact: e.impact,
    afterCritical: e.afterCritical
  }) : Lc({
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
function Mc(e, t) {
  return e.left < t.right && e.right > t.left && e.top < t.bottom && e.bottom > t.top;
}
function kc({
  pageBorderBox: e,
  draggable: t,
  candidates: n
}) {
  const r = t.page.borderBox.center, o = n.map((i) => {
    const s = i.axis, u = Dt(i.axis.line, e.center[s.line], i.page.borderBox.center[s.crossAxisLine]);
    return {
      id: i.descriptor.id,
      distance: kt(r, u)
    };
  }).sort((i, s) => s.distance - i.distance);
  return o[0] ? o[0].id : null;
}
function Gc({
  pageBorderBox: e,
  draggable: t,
  droppables: n
}) {
  const r = wn(n).filter((o) => {
    if (!o.isEnabled)
      return !1;
    const i = o.subject.active;
    if (!i || !Mc(e, i))
      return !1;
    if (ss(i)(e.center))
      return !0;
    const s = o.axis, u = i.center[s.crossAxisLine], c = e[s.crossAxisStart], l = e[s.crossAxisEnd], f = Ue(i[s.crossAxisStart], i[s.crossAxisEnd]), a = f(c), d = f(l);
    return !a && !d ? !0 : a ? c < u : l > u;
  });
  return r.length ? r.length === 1 ? r[0].descriptor.id : kc({
    pageBorderBox: e,
    draggable: t,
    candidates: r
  }) : null;
}
const us = (e, t) => ze(Yt(e, t));
var Wc = (e, t) => {
  const n = e.frame;
  return n ? us(t, n.scroll.diff.value) : t;
};
function as({
  displaced: e,
  id: t
}) {
  return !!(e.visible[t] || e.invisible[t]);
}
function Uc({
  draggable: e,
  closest: t,
  inHomeList: n
}) {
  return t ? n && t.descriptor.index > e.descriptor.index ? t.descriptor.index - 1 : t.descriptor.index : null;
}
var zc = ({
  pageBorderBoxWithDroppableScroll: e,
  draggable: t,
  destination: n,
  insideDestination: r,
  last: o,
  viewport: i,
  afterCritical: s
}) => {
  const u = n.axis, c = Kt(n.axis, t.displaceBy), l = c.value, f = e[u.start], a = e[u.end], p = Nn(t, r).find((m) => {
    const D = m.descriptor.id, y = m.page.borderBox.center[u.line], A = rt(D, s), v = as({
      displaced: o,
      id: D
    });
    return A ? v ? a <= y : f < y - l : v ? a <= y + l : f < y;
  }) || null, E = Uc({
    draggable: t,
    closest: p,
    inHomeList: wt(t, n)
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
const Hc = 4;
var qc = ({
  draggable: e,
  pageBorderBoxWithDroppableScroll: t,
  previousImpact: n,
  destination: r,
  insideDestination: o,
  afterCritical: i
}) => {
  if (!r.isCombineEnabled)
    return null;
  const s = r.axis, u = Kt(r.axis, e.displaceBy), c = u.value, l = t[s.start], f = t[s.end], d = Nn(e, o).find((E) => {
    const m = E.descriptor.id, D = E.page.borderBox, A = D[s.size] / Hc, v = rt(m, i), b = as({
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
  const u = us(t.page.borderBox, e), c = Gc({
    pageBorderBox: u,
    draggable: t,
    droppables: r
  });
  if (!c)
    return uc;
  const l = r[c], f = mt(l.descriptor.id, n), a = Wc(l, u);
  return qc({
    pageBorderBoxWithDroppableScroll: a,
    draggable: t,
    previousImpact: o,
    destination: l,
    insideDestination: f,
    afterCritical: s
  }) || zc({
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
const Yc = ({
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
  const s = Tc(i);
  return $r(n, s);
};
var Kc = ({
  draggable: e,
  draggables: t,
  droppables: n,
  previousImpact: r,
  impact: o
}) => {
  const i = Yc({
    previousImpact: r,
    impact: o,
    droppables: n
  }), s = $e(o);
  if (!s)
    return i;
  const u = n[s];
  if (wt(e, u) || u.subject.withPlaceholder)
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
    borderBoxCenter: Fe(e.initial.client.borderBoxCenter, l)
  }, a = {
    selection: Fe(f.selection, s.scroll.current),
    borderBoxCenter: Fe(f.borderBoxCenter, s.scroll.current),
    offset: Fe(f.offset, s.scroll.diff.value)
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
  }), m = Kc({
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
function Jc(e, t) {
  return e.map((n) => t[n]);
}
var ls = ({
  impact: e,
  viewport: t,
  draggables: n,
  destination: r,
  forceShouldAnimate: o
}) => {
  const i = e.displaced, s = Jc(i.all, n), u = Wt({
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
}, Xc = (e) => ({
  index: e.index,
  droppableId: e.droppableId
}), ps = ({
  draggable: e,
  home: t,
  draggables: n,
  viewport: r
}) => {
  const o = Kt(t.axis, e.displaceBy), i = mt(t.descriptor.id, n), s = i.indexOf(e);
  s === -1 && (process.env.NODE_ENV !== "production" ? h(!1, "Expected draggable to be inside home list") : h(!1));
  const u = i.slice(s + 1), c = u.reduce((d, p) => (d[p.descriptor.id] = !0, d), {}), l = {
    inVirtualList: t.descriptor.mode === "virtual",
    displacedBy: o,
    effected: c
  };
  return {
    impact: {
      displaced: Wt({
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
        destination: Xc(e.descriptor)
      }
    },
    afterCritical: l
  };
}, Qc = (e, t) => ({
  draggables: e.draggables,
  droppables: $r(e.droppables, t)
});
const Jt = (e) => {
  process.env.NODE_ENV;
}, Xt = (e) => {
  process.env.NODE_ENV;
};
var Zc = ({
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
}, el = (e) => {
  const t = e.frame;
  return t || (process.env.NODE_ENV !== "production" ? h(!1, "Expected Droppable to have a frame") : h(!1)), t;
}, tl = ({
  additions: e,
  updatedDroppables: t,
  viewport: n
}) => {
  const r = n.scroll.diff.value;
  return e.map((o) => {
    const i = o.descriptor.droppableId, s = t[i], c = el(s).scroll.diff.value, l = Fe(r, c);
    return Zc({
      draggable: o,
      offset: l,
      initialWindowScroll: n.scroll.initial
    });
  });
}, nl = ({
  state: e,
  published: t
}) => {
  Jt();
  const n = t.modified.map((y) => {
    const A = e.dimensions.droppables[y.droppableId];
    return Pr(A, y.scroll);
  }), r = {
    ...e.dimensions.droppables,
    ...Ki(n)
  }, o = Ji(tl({
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
  Xt();
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
  const r = Qc(e.dimensions, t);
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
var rl = (e = ti, t) => {
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
        selection: Fe(l.selection, o.scroll.initial),
        borderBoxCenter: Fe(l.selection, o.scroll.initial),
        offset: Fe(l.selection, o.scroll.diff.value)
      }
    }, a = wn(i.droppables).every((m) => !m.isFixedOnPage), {
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
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? h(!1, `Unexpected ${t.type} received in phase ${e.phase}`) : h(!1)), nl({
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
    const n = $c({
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
const ol = (e) => ({
  type: "BEFORE_INITIAL_CAPTURE",
  payload: e
}), il = (e) => ({
  type: "LIFT",
  payload: e
}), sl = (e) => ({
  type: "INITIAL_PUBLISH",
  payload: e
}), ul = (e) => ({
  type: "PUBLISH_WHILE_DRAGGING",
  payload: e
}), al = () => ({
  type: "COLLECTION_STARTING",
  payload: null
}), cl = (e) => ({
  type: "UPDATE_DROPPABLE_SCROLL",
  payload: e
}), ll = (e) => ({
  type: "UPDATE_DROPPABLE_IS_ENABLED",
  payload: e
}), dl = (e) => ({
  type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
  payload: e
}), Ds = (e) => ({
  type: "MOVE",
  payload: e
}), fl = (e) => ({
  type: "MOVE_BY_WINDOW_SCROLL",
  payload: e
}), pl = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), Dl = () => ({
  type: "MOVE_UP",
  payload: null
}), ml = () => ({
  type: "MOVE_DOWN",
  payload: null
}), hl = () => ({
  type: "MOVE_RIGHT",
  payload: null
}), gl = () => ({
  type: "MOVE_LEFT",
  payload: null
}), Mr = () => ({
  type: "FLUSH",
  payload: null
}), El = (e) => ({
  type: "DROP_ANIMATE",
  payload: e
}), kr = (e) => ({
  type: "DROP_COMPLETE",
  payload: e
}), ms = (e) => ({
  type: "DROP",
  payload: e
}), bl = (e) => ({
  type: "DROP_PENDING",
  payload: e
}), hs = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
});
function yl(e) {
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
  process.env.NODE_ENV !== "production" && se(`
    Detected non-consecutive <Draggable /> indexes.

    (This can cause unexpected bugs)

    ${r}
  `);
}
function vl(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = mt(e.droppable.id, t.draggables);
    yl(n);
  }
}
var Cl = (e) => ({
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
  })), t().phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? h(!1, "Unexpected phase to start a drag") : h(!1)), n(Mr()), n(ol({
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
  vl(a, d), n(sl({
    critical: a,
    dimensions: d,
    clientSelection: s,
    movementMode: u,
    viewport: p
  }));
}, Al = (e) => () => (t) => (n) => {
  n.type === "INITIAL_PUBLISH" && e.dragging(), n.type === "DROP_ANIMATE" && e.dropping(n.payload.completed.result.reason), (n.type === "FLUSH" || n.type === "DROP_COMPLETE") && e.resting(), t(n);
};
const Gr = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, Ut = {
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
      return t ? `${n} scale(${Ut.scale.drop})` : n;
  }
}, {
  minDropTime: mr,
  maxDropTime: Es
} = gs, Fl = Es - mr, ri = 1500, wl = 0.6;
var Sl = ({
  current: e,
  destination: t,
  reason: n
}) => {
  const r = kt(e, t);
  if (r <= 0)
    return mr;
  if (r >= ri)
    return Es;
  const o = r / ri, i = mr + Fl * o, s = n === "CANCEL" ? i * wl : i;
  return Number(s.toFixed(2));
}, Nl = ({
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
}, Ol = ({
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
    displaced: Gt
  },
  didDropInsideDroppable: !0
};
const Bl = ({
  getState: e,
  dispatch: t
}) => (n) => (r) => {
  if (r.type !== "DROP") {
    n(r);
    return;
  }
  const o = e(), i = r.payload.reason;
  if (o.phase === "COLLECTING") {
    t(bl({
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
  } = Ol({
    reason: i,
    lastImpact: o.impact,
    afterCritical: o.afterCritical,
    onLiftImpact: o.onLiftImpact,
    home: o.dimensions.droppables[o.critical.droppable.id],
    viewport: o.viewport,
    draggables: o.dimensions.draggables
  }), d = a ? Rr(f) : null, p = a ? Sn(f) : null, E = {
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
  }, D = Nl({
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
  t(El({
    newHomeClientOffset: D,
    dropDuration: v,
    completed: y
  }));
};
var xl = Bl, bs = () => ({
  x: window.pageXOffset,
  y: window.pageYOffset
});
function Il(e) {
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
function _l({
  onWindowScroll: e
}) {
  function t() {
    e(bs());
  }
  const n = $t(t), r = Il(n);
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
const Pl = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH", Rl = (e) => {
  const t = _l({
    onWindowScroll: (n) => {
      e.dispatch(fl({
        newScroll: n
      }));
    }
  });
  return (n) => (r) => {
    !t.isActive() && r.type === "INITIAL_PUBLISH" && t.start(), t.isActive() && Pl(r) && t.stop(), n(r);
  };
};
var Tl = Rl, Vl = (e) => {
  let t = !1, n = !1;
  const r = setTimeout(() => {
    n = !0;
  }), o = (i) => {
    if (t) {
      process.env.NODE_ENV !== "production" && se("Announcement already made. Not making a second announcement");
      return;
    }
    if (n) {
      process.env.NODE_ENV !== "production" && se(`
        Announcements cannot be made asynchronously.
        Default message has already been announced.
      `);
      return;
    }
    t = !0, e(i), clearTimeout(r);
  };
  return o.wasCalled = () => t, o;
}, Ll = () => {
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
const jl = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.droppableId === t.droppableId && e.index === t.index, $l = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.draggableId === t.draggableId && e.droppableId === t.droppableId, Ml = (e, t) => {
  if (e === t)
    return !0;
  const n = e.draggable.id === t.draggable.id && e.draggable.droppableId === t.draggable.droppableId && e.draggable.type === t.draggable.type && e.draggable.index === t.draggable.index, r = e.droppable.id === t.droppable.id && e.droppable.type === t.droppable.type;
  return n && r;
}, Nt = (e, t) => {
  Jt(), t(), Xt();
}, on = (e, t) => ({
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
  const o = Vl(n);
  e(t, {
    announce: o
  }), o.wasCalled() || n(r(t));
}
var kl = (e, t) => {
  const n = Ll();
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
      p && p(on(a, d));
    });
  }, s = (a, d) => {
    r && (process.env.NODE_ENV !== "production" ? h(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : h(!1));
    const p = on(a, d);
    r = {
      mode: d,
      lastCritical: a,
      lastLocation: p.source,
      lastCombine: null
    }, n.add(() => {
      Nt("onDragStart", () => Un(e().onDragStart, p, t, fn.onDragStart));
    });
  }, u = (a, d) => {
    const p = Rr(d), E = Sn(d);
    r || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot fire onDragMove when onDragStart has not been called") : h(!1));
    const m = !Ml(a, r.lastCritical);
    m && (r.lastCritical = a);
    const D = !jl(r.lastLocation, p);
    D && (r.lastLocation = p);
    const y = !$l(r.lastCombine, E);
    if (y && (r.lastCombine = E), !m && !D && !y)
      return;
    const A = {
      ...on(a, r.mode),
      combine: E,
      destination: p
    };
    n.add(() => {
      Nt("onDragUpdate", () => Un(e().onDragUpdate, A, t, fn.onDragUpdate));
    });
  }, c = () => {
    r || (process.env.NODE_ENV !== "production" ? h(!1, "Can only flush responders while dragging") : h(!1)), n.flush();
  }, l = (a) => {
    r || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot fire onDragEnd when there is no matching onDragStart") : h(!1)), r = null, Nt("onDragEnd", () => Un(e().onDragEnd, a, t, fn.onDragEnd));
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
        ...on(r.lastCritical, r.mode),
        combine: null,
        destination: null,
        reason: "CANCEL"
      };
      l(a);
    }
  };
}, Gl = (e, t) => {
  const n = kl(e, t);
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
const Wl = (e) => (t) => (n) => {
  if (n.type !== "DROP_ANIMATION_FINISHED") {
    t(n);
    return;
  }
  const r = e.getState();
  r.phase !== "DROP_ANIMATING" && (process.env.NODE_ENV !== "production" ? h(!1, "Cannot finish a drop animating when no drop is occurring") : h(!1)), e.dispatch(kr({
    completed: r.completed
  }));
};
var Ul = Wl;
const zl = (e) => {
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
var Hl = zl, ql = (e) => () => (t) => (n) => {
  (n.type === "DROP_COMPLETE" || n.type === "FLUSH" || n.type === "DROP_ANIMATE") && e.stopPublishing(), t(n);
}, Yl = (e) => {
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
const Kl = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH";
var Jl = (e) => (t) => (n) => (r) => {
  if (Kl(r)) {
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
const Xl = (e) => (t) => (n) => {
  if (t(n), n.type !== "PUBLISH_WHILE_DRAGGING")
    return;
  const r = e.getState();
  r.phase === "DROP_PENDING" && (r.isWaiting || e.dispatch(ms({
    reason: r.reason
  })));
};
var Ql = Xl;
const Zl = process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
}) : _i;
var ed = ({
  dimensionMarshal: e,
  focusMarshal: t,
  styleMarshal: n,
  getResponders: r,
  announce: o,
  autoScroller: i
}) => Ii(rl, Zl(Mu(Al(n), ql(e), Cl(e), xl, Ul, Hl, Ql, Jl(i), Tl, Yl(t), Gl(r, o))));
const zn = () => ({
  additions: {},
  removals: {},
  modified: {}
});
function td({
  registry: e,
  callbacks: t
}) {
  let n = zn(), r = null;
  const o = () => {
    r || (t.collectionStarting(), r = requestAnimationFrame(() => {
      r = null, Jt();
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
      n = zn(), Xt(), t.publish(p);
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
}, nd = () => {
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
}, rd = ({
  critical: e,
  scrollOptions: t,
  registry: n
}) => {
  Jt();
  const r = nd(), o = r.scroll.current, i = e.droppable, s = n.droppable.getAllByType(i.type).map((f) => f.callbacks.getDimensionAndWatchScroll(o, t)), u = n.draggable.getAllByType(e.draggable.type).map((f) => f.getDimension(o)), c = {
    draggables: Ji(u),
    droppables: Ki(s)
  };
  return Xt(), {
    dimensions: c,
    critical: e,
    viewport: r
  };
};
function oi(e, t, n) {
  return n.descriptor.id === t.id || n.descriptor.type !== t.type ? !1 : e.droppable.getById(n.descriptor.droppableId).descriptor.mode !== "virtual" ? (process.env.NODE_ENV !== "production" && se(`
      You are attempting to add or remove a Draggable [id: ${n.descriptor.id}]
      while a drag is occurring. This is only supported for virtual lists.

      See https://github.com/hello-pangea/dnd/blob/main/docs/patterns/virtual-lists.md
    `), !1) : !0;
}
var od = (e, t) => {
  let n = null;
  const r = td({
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
      }, rd({
        critical: m,
        registry: e,
        scrollOptions: d.scrollOptions
      });
    },
    stopPublishing: c
  };
}, As = (e, t) => e.phase === "IDLE" ? !0 : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === t ? !1 : e.completed.result.reason === "DROP", id = (e) => {
  window.scrollBy(e.x, e.y);
};
const sd = ye((e) => wn(e).filter((t) => !(!t.isEnabled || !t.frame))), ud = (e, t) => sd(t).find((r) => (r.frame || (process.env.NODE_ENV !== "production" ? h(!1, "Invalid result") : h(!1)), ss(r.frame.pageMarginBox)(e))) || null;
var ad = ({
  center: e,
  destination: t,
  droppables: n
}) => {
  if (t) {
    const o = n[t];
    return o.frame ? o : null;
  }
  return ud(e, n);
};
const zt = {
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
var cd = (e, t, n = () => zt) => {
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
  return r === 0 ? (process.env.NODE_ENV !== "production" && se(`
      Detected distance range of 0 in the fluid auto scroller
      This is unexpected and would cause a divide by 0 issue.
      Not allowing an auto scroll
    `), 0) : (n - e) / r;
}, Wr = 1, ld = (e, t, n = () => zt) => {
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
}, dd = (e, t, n) => {
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
  const i = ld(e, t, o);
  return i === 0 ? 0 : r ? Math.max(dd(i, n, o), Wr) : i;
}, si = ({
  container: e,
  distanceToEdges: t,
  dragStartTime: n,
  axis: r,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const s = cd(e, r, i);
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
}, fd = ({
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
const pd = Yi((e) => e === 0 ? 0 : e);
var ws = ({
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
  }), l = pd({
    x: c,
    y: u
  });
  if (nt(l, ve))
    return null;
  const f = fd({
    container: t,
    subject: n,
    proposedScroll: l
  });
  return f ? nt(f, ve) ? null : f : null;
};
const Dd = Yi((e) => e === 0 ? 0 : e > 0 ? 1 : -1), Ur = (() => {
  const e = (t, n) => t < 0 ? t : t > n ? t - n : 0;
  return ({
    current: t,
    max: n,
    change: r
  }) => {
    const o = Fe(t, r), i = {
      x: e(o.x, n.x),
      y: e(o.y, n.y)
    };
    return nt(i, ve) ? null : i;
  };
})(), Ss = ({
  max: e,
  current: t,
  change: n
}) => {
  const r = {
    x: Math.max(t.x, e.x),
    y: Math.max(t.y, e.y)
  }, o = Dd(n), i = Ur({
    max: r,
    current: t,
    change: o
  });
  return !i || o.x !== 0 && i.x === 0 || o.y !== 0 && i.y === 0;
}, zr = (e, t) => Ss({
  current: e.scroll.current,
  max: e.scroll.max,
  change: t
}), md = (e, t) => {
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
  return n ? Ss({
    current: n.scroll.current,
    max: n.scroll.max,
    change: t
  }) : !1;
}, hd = (e, t) => {
  const n = e.frame;
  return !n || !Hr(e, t) ? null : Ur({
    current: n.scroll.current,
    max: n.scroll.max,
    change: t
  });
};
var gd = ({
  viewport: e,
  subject: t,
  center: n,
  dragStartTime: r,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const s = ws({
    dragStartTime: r,
    container: e.frame,
    subject: t,
    center: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
  return s && zr(e, s) ? s : null;
}, Ed = ({
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
  const u = ws({
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
    const a = e.viewport, d = gd({
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
  const l = ad({
    center: s,
    destination: $e(e.impact),
    droppables: e.dimensions.droppables
  });
  if (!l)
    return;
  const f = Ed({
    dragStartTime: t,
    droppable: l,
    subject: c,
    center: s,
    shouldUseTimeDampening: n,
    getAutoScrollerOptions: i
  });
  f && o(l.descriptor.id, f);
}, bd = ({
  scrollWindow: e,
  scrollDroppable: t,
  getAutoScrollerOptions: n = () => zt
}) => {
  const r = $t(e), o = $t(t);
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
      Jt(), i && (process.env.NODE_ENV !== "production" ? h(!1, "Cannot start auto scrolling when already started") : h(!1));
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
      }, Xt(), a && s(l);
    },
    stop: () => {
      i && (r.cancel(), o.cancel(), i = null);
    },
    scroll: s
  };
}, yd = ({
  move: e,
  scrollDroppable: t,
  scrollWindow: n
}) => {
  const r = (u, c) => {
    const l = Fe(u.current.client.selection, c);
    e({
      client: l
    });
  }, o = (u, c) => {
    if (!Hr(u, c))
      return c;
    const l = hd(u, c);
    if (!l)
      return t(u.descriptor.id, c), null;
    const f = je(c, l);
    return t(u.descriptor.id, f), je(c, f);
  }, i = (u, c, l) => {
    if (!u || !zr(c, l))
      return l;
    const f = md(c, l);
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
}, vd = ({
  scrollDroppable: e,
  scrollWindow: t,
  move: n,
  getAutoScrollerOptions: r
}) => {
  const o = bd({
    scrollWindow: t,
    scrollDroppable: e,
    getAutoScrollerOptions: r
  }), i = yd({
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
})(), Cd = (() => {
  const e = `${yt}-droppable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), ai = {
  contextId: `${yt}-scroll-container-context-id`
}, Ad = (e) => (t) => `[${t}="${e}"]`, Ot = (e, t) => e.map((n) => {
  const r = n.styles[t];
  return r ? `${n.selector} { ${r} }` : "";
}).join(" "), Fd = "pointer-events: none;";
var wd = (e) => {
  const t = Ad(e), n = (() => {
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
        dragging: Fd,
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
    selector: t(Cd.contextId),
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
function Nd(e, t) {
  const n = J(() => wd(e), [e]), r = C.useRef(null), o = C.useRef(null), i = R(ye((a) => {
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
  return J(() => ({
    dragging: u,
    dropping: c,
    resting: l
  }), [u, c, l]);
}
function Ns(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var Os = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function Qt(e) {
  return e instanceof Os(e).HTMLElement;
}
function Bs(e, t) {
  const n = `[${vt.contextId}="${e}"]`, r = Ns(document, n);
  if (!r.length)
    return process.env.NODE_ENV !== "production" && se(`Unable to find any drag handles in the context "${e}"`), null;
  const o = r.find((i) => i.getAttribute(vt.draggableId) === t);
  return o ? Qt(o) ? o : (process.env.NODE_ENV !== "production" && se("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && se(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
function Od(e) {
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
  }), []), J(() => ({
    register: i,
    tryRecordFocus: l,
    tryRestoreFocusRecorded: c,
    tryShiftRecord: u
  }), [i, l, c, u]);
}
function Bd() {
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
function xd() {
  const e = J(Bd, []);
  return C.useEffect(() => function() {
    N.version.startsWith("16") || N.version.startsWith("17") ? requestAnimationFrame(e.clean) : e.clean();
  }, [e]), e;
}
var qr = N.createContext(null), Ht = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot find document.body") : h(!1)), e;
};
const Id = {
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
var _d = Id;
const Pd = (e) => `rfd-announcement-${e}`;
function Rd(e) {
  const t = J(() => Pd(e), [e]), n = C.useRef(null);
  return C.useEffect(function() {
    const i = document.createElement("div");
    return n.current = i, i.id = t, i.setAttribute("aria-live", "assertive"), i.setAttribute("aria-atomic", "true"), Et(i.style, _d), Ht().appendChild(i), function() {
      setTimeout(function() {
        const c = Ht();
        c.contains(i) && c.removeChild(i), i === n.current && (n.current = null);
      });
    };
  }, [t]), R((o) => {
    const i = n.current;
    if (i) {
      i.textContent = o;
      return;
    }
    process.env.NODE_ENV !== "production" && se(`
      A screen reader message was trying to be announced but it was unable to do so.
      This can occur if you unmount your <DragDropContext /> in your onDragEnd.
      Consider calling provided.announce() before the unmount so that the instruction will
      not be lost for users relying on a screen reader.

      Message not passed to screen reader:

      "${o}"
    `);
  }, []);
}
let Td = 0;
const xs = {
  separator: "::"
};
function Vd(e, t = xs) {
  return J(() => `${e}${t.separator}${Td++}`, [t.separator, e]);
}
function Ld(e, t = xs) {
  const n = N.useId();
  return J(() => `${e}${t.separator}${n}`, [t.separator, e, n]);
}
var Yr = "useId" in N ? Ld : Vd;
function jd({
  contextId: e,
  uniqueId: t
}) {
  return `rfd-hidden-text-${e}-${t}`;
}
function $d({
  contextId: e,
  text: t
}) {
  const n = Yr("hidden-text", {
    separator: "-"
  }), r = J(() => jd({
    contextId: e,
    uniqueId: n
  }), [n, e]);
  return C.useEffect(function() {
    const i = document.createElement("div");
    return i.id = r, i.textContent = t, i.style.display = "none", Ht().appendChild(i), function() {
      const u = Ht();
      u.contains(i) && u.removeChild(i);
    };
  }, [r, t]), r;
}
var Bn = N.createContext(null), Md = {
  react: "^16.8.5 || ^17.0.0 || ^18.0.0",
  "react-dom": "^16.8.5 || ^17.0.0 || ^18.0.0"
};
const kd = /(\d+)\.(\d+)\.(\d+)/, li = (e) => {
  const t = kd.exec(e);
  t == null && (process.env.NODE_ENV !== "production" ? h(!1, `Unable to parse React version ${e}`) : h(!1));
  const n = Number(t[1]), r = Number(t[2]), o = Number(t[3]);
  return {
    major: n,
    minor: r,
    patch: o,
    raw: e
  };
}, Gd = (e, t) => t.major > e.major ? !0 : t.major < e.major ? !1 : t.minor > e.minor ? !0 : t.minor < e.minor ? !1 : t.patch >= e.patch;
var Wd = (e, t) => {
  const n = li(e), r = li(t);
  Gd(n, r) || process.env.NODE_ENV !== "production" && se(`
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
var Ud = (e) => {
  const t = e.doctype;
  if (!t) {
    process.env.NODE_ENV !== "production" && se(`
      No <!doctype html> found.

      ${qn}
    `);
    return;
  }
  t.name.toLowerCase() !== "html" && process.env.NODE_ENV !== "production" && se(`
      Unexpected <!doctype> found: (${t.name})

      ${qn}
    `), t.publicId !== "" && process.env.NODE_ENV !== "production" && se(`
      Unexpected <!doctype> publicId found: (${t.publicId})
      A html5 doctype does not have a publicId

      ${qn}
    `);
};
function Kr(e) {
  process.env.NODE_ENV !== "production" && e();
}
function Zt(e, t) {
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
function zd() {
  Zt(() => {
    Wd(Md.react, N.version), Ud(document);
  }, []);
}
function Jr(e) {
  const t = C.useRef(e);
  return C.useEffect(() => {
    t.current = e;
  }), t;
}
function Hd() {
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
function qt(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const qd = 9, Yd = 13, Xr = 27, Is = 32, Kd = 33, Jd = 34, Xd = 35, Qd = 36, Zd = 37, ef = 38, tf = 39, nf = 40, rf = {
  [Yd]: !0,
  [qd]: !0
};
var _s = (e) => {
  rf[e.keyCode] && e.preventDefault();
};
const of = (() => {
  const e = "visibilitychange";
  return typeof document > "u" ? e : [e, `ms${e}`, `webkit${e}`, `moz${e}`, `o${e}`].find((r) => `on${r}` in document) || e;
})();
var xn = of;
const Ps = 0, di = 5;
function sf(e, t) {
  return Math.abs(t.x - e.x) >= di || Math.abs(t.y - e.y) >= di;
}
const fi = {
  type: "IDLE"
};
function uf({
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
      if (!sf(f, c))
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
function af(e) {
  const t = C.useRef(fi), n = C.useRef(tt), r = J(() => ({
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
  }), [e]), o = J(() => ({
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
    }, d = uf({
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
function cf() {
}
const lf = {
  [Jd]: !0,
  [Kd]: !0,
  [Qd]: !0,
  [Xd]: !0
};
function df(e, t) {
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
      if (o.keyCode === nf) {
        o.preventDefault(), e.moveDown();
        return;
      }
      if (o.keyCode === ef) {
        o.preventDefault(), e.moveUp();
        return;
      }
      if (o.keyCode === tf) {
        o.preventDefault(), e.moveRight();
        return;
      }
      if (o.keyCode === Zd) {
        o.preventDefault(), e.moveLeft();
        return;
      }
      if (lf[o.keyCode]) {
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
function ff(e) {
  const t = C.useRef(cf), n = J(() => ({
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
      t.current = We(window, df(l, f), {
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
}, pf = 120, Df = 0.15;
function mf({
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
function hf({
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
      if (!i || !(i.force >= Df))
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
function gf(e) {
  const t = C.useRef(Yn), n = C.useRef(tt), r = R(function() {
    return t.current;
  }, []), o = R(function(p) {
    t.current = p;
  }, []), i = J(() => ({
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
    }, m = We(window, hf(E), p), D = We(window, mf(E), p);
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
    const m = setTimeout(f, pf);
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
function Ef(e) {
  Kr(() => {
    const t = Jr(e);
    Zt(() => {
      t.current.length !== e.length && (process.env.NODE_ENV !== "production" ? h(!1, "Cannot change the amount of sensor hooks after mounting") : h(!1));
    });
  });
}
const bf = ["input", "button", "textarea", "select", "option", "optgroup", "video", "audio"];
function Rs(e, t) {
  if (t == null)
    return !1;
  if (bf.includes(t.tagName.toLowerCase()))
    return !0;
  const r = t.getAttribute("contenteditable");
  return r === "true" || r === "" ? !0 : t === e ? !1 : Rs(e, t.parentElement);
}
function yf(e, t) {
  const n = t.target;
  return Qt(n) ? Rs(e, n) : !1;
}
var vf = (e) => ze(e.getBoundingClientRect()).center;
function Cf(e) {
  return e instanceof Os(e).Element;
}
const Af = (() => {
  const e = "matches";
  return typeof document > "u" ? e : [e, "msMatchesSelector", "webkitMatchesSelector"].find((r) => r in Element.prototype) || e;
})();
function Ts(e, t) {
  return e == null ? null : e[Af](t) ? e : Ts(e.parentElement, t);
}
function Ff(e, t) {
  return e.closest ? e.closest(t) : Ts(e, t);
}
function wf(e) {
  return `[${vt.contextId}="${e}"]`;
}
function Sf(e, t) {
  const n = t.target;
  if (!Cf(n))
    return process.env.NODE_ENV !== "production" && se("event.target must be a Element"), null;
  const r = wf(e), o = Ff(n, r);
  return o ? Qt(o) ? o : (process.env.NODE_ENV !== "production" && se("drag handle must be a HTMLElement"), null) : null;
}
function Nf(e, t) {
  const n = Sf(e, t);
  return n ? n.getAttribute(vt.draggableId) : null;
}
function Of(e, t) {
  const n = `[${hr.contextId}="${e}"]`, o = Ns(document, n).find((i) => i.getAttribute(hr.id) === t);
  return o ? Qt(o) ? o : (process.env.NODE_ENV !== "production" && se("Draggable element is not a HTMLElement"), null) : null;
}
function Bf(e) {
  e.preventDefault();
}
function sn({
  expected: e,
  phase: t,
  isLockActive: n,
  shouldWarn: r
}) {
  return n() ? e !== t ? (r && process.env.NODE_ENV !== "production" && se(`
        Cannot perform action.
        The actions you used belong to an outdated phase

        Current phase: ${e}
        You called an action from outdated phase: ${t}

        Tips:

        - Do not use preDragActions actions after calling preDragActions.lift()
      `), !1) : !0 : (r && process.env.NODE_ENV !== "production" && se(`
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
  return o ? !(!o.options.isEnabled || !As(t.getState(), r)) : (process.env.NODE_ENV !== "production" && se(`Unable to find draggable with id: ${r}`), !1);
}
function xf({
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
  const c = r.draggable.getById(o), l = Of(t, c.descriptor.id);
  if (!l)
    return process.env.NODE_ENV !== "production" && se(`Unable to find draggable element with id: ${o}`), null;
  if (s && !c.options.canDragInteractiveElements && yf(l, s))
    return null;
  const f = e.claim(i || tt);
  let a = "PRE_DRAG";
  function d() {
    return c.options.shouldRespectForcePress;
  }
  function p() {
    return e.isActive(f);
  }
  function E(g, F) {
    sn({
      expected: g,
      phase: a,
      isLockActive: p,
      shouldWarn: !0
    }) && n.dispatch(F());
  }
  const m = E.bind(null, "DRAGGING");
  function D(g) {
    function F() {
      e.release(), a = "COMPLETED";
    }
    a !== "PRE_DRAG" && (F(), process.env.NODE_ENV !== "production" ? h(!1, `Cannot lift in phase ${a}`) : h(!1)), n.dispatch(il(g.liftActionArgs)), a = "DRAGGING";
    function x(P, B = {
      shouldBlockNextClick: !1
    }) {
      if (g.cleanup(), B.shouldBlockNextClick) {
        const I = We(window, [{
          eventName: "click",
          fn: Bf,
          options: {
            once: !0,
            passive: !1,
            capture: !0
          }
        }]);
        setTimeout(I);
      }
      F(), n.dispatch(ms({
        reason: P
      }));
    }
    return {
      isActive: () => sn({
        expected: "DRAGGING",
        phase: a,
        isLockActive: p,
        shouldWarn: !1
      }),
      shouldRespectForcePress: d,
      drop: (P) => x("DROP", P),
      cancel: (P) => x("CANCEL", P),
      ...g.actions
    };
  }
  function y(g) {
    const F = $t((P) => {
      m(() => Ds({
        client: P
      }));
    });
    return {
      ...D({
        liftActionArgs: {
          id: o,
          clientSelection: g,
          movementMode: "FLUID"
        },
        cleanup: () => F.cancel(),
        actions: {
          move: F
        }
      }),
      move: F
    };
  }
  function A() {
    const g = {
      moveUp: () => m(Dl),
      moveRight: () => m(hl),
      moveDown: () => m(ml),
      moveLeft: () => m(gl)
    };
    return D({
      liftActionArgs: {
        id: o,
        clientSelection: vf(l),
        movementMode: "SNAP"
      },
      cleanup: tt,
      actions: g
    });
  }
  function v() {
    sn({
      expected: "PRE_DRAG",
      phase: a,
      isLockActive: p,
      shouldWarn: !0
    }) && e.release();
  }
  return {
    isActive: () => sn({
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
const If = [af, ff, gf];
function _f({
  contextId: e,
  store: t,
  registry: n,
  customSensors: r,
  enableDefaultSensors: o
}) {
  const i = [...o ? If : [], ...r || []], s = C.useState(() => Hd())[0], u = R(function(D, y) {
    qt(D) && !qt(y) && s.tryAbandon();
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
  }), [s, n, t]), l = R((m, D, y) => xf({
    lockAPI: s,
    registry: n,
    contextId: e,
    store: t,
    draggableId: m,
    forceSensorStop: D || null,
    sourceEvent: y && y.sourceEvent ? y.sourceEvent : null
  }), [e, s, n, t]), f = R((m) => Nf(e, m), [e]), a = R((m) => {
    const D = n.draggable.findById(m);
    return D ? D.options : null;
  }, [n.draggable]), d = R(function() {
    s.isClaimed() && (s.tryAbandon(), t.getState().phase !== "IDLE" && t.dispatch(Mr()));
  }, [s, t]), p = R(() => s.isClaimed(), [s]), E = J(() => ({
    canGetLock: c,
    tryGetLock: l,
    findClosestDraggableId: f,
    findOptionsForDraggable: a,
    tryReleaseLock: d,
    isLockClaimed: p
  }), [c, l, f, a, d, p]);
  Ef(i);
  for (let m = 0; m < i.length; m++)
    i[m](E);
}
const Pf = (e) => ({
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
}), Rf = (e) => ({
  ...zt,
  ...e.autoScrollerOptions,
  durationDampening: {
    ...zt.durationDampening,
    ...e.autoScrollerOptions
  }
});
function Bt(e) {
  return e.current || (process.env.NODE_ENV !== "production" ? h(!1, "Could not find store from lazy ref") : h(!1)), e.current;
}
function Tf(e) {
  const {
    contextId: t,
    setCallbacks: n,
    sensors: r,
    nonce: o,
    dragHandleUsageInstructions: i
  } = e, s = C.useRef(null);
  zd();
  const u = Jr(e), c = R(() => Pf(u.current), [u]), l = R(() => Rf(u.current), [u]), f = Rd(t), a = $d({
    contextId: t,
    text: i
  }), d = Nd(t, o), p = R((I) => {
    Bt(s).dispatch(I);
  }, []), E = J(() => Co({
    publishWhileDragging: ul,
    updateDroppableScroll: cl,
    updateDroppableIsEnabled: ll,
    updateDroppableIsCombineEnabled: dl,
    collectionStarting: al
  }, p), [p]), m = xd(), D = J(() => od(m, E), [m, E]), y = J(() => vd({
    scrollWindow: id,
    scrollDroppable: D.scrollDroppable,
    getAutoScrollerOptions: l,
    ...Co({
      move: Ds
    }, p)
  }), [D.scrollDroppable, p, l]), A = Od(t), v = J(() => ed({
    announce: f,
    autoScroller: y,
    dimensionMarshal: D,
    focusMarshal: A,
    getResponders: c,
    styleMarshal: d
  }), [f, y, D, A, c, d]);
  process.env.NODE_ENV !== "production" && s.current && s.current !== v && process.env.NODE_ENV !== "production" && se("unexpected store change"), s.current = v;
  const b = R(() => {
    const I = Bt(s);
    I.getState().phase !== "IDLE" && I.dispatch(Mr());
  }, []), g = R(() => {
    const I = Bt(s).getState();
    return I.phase === "DROP_ANIMATING" ? !0 : I.phase === "IDLE" ? !1 : I.isDragging;
  }, []), F = J(() => ({
    isDragging: g,
    tryAbort: b
  }), [g, b]);
  n(F);
  const x = R((I) => As(Bt(s).getState(), I), []), P = R(() => ct(Bt(s).getState()), []), B = J(() => ({
    marshal: D,
    focus: A,
    contextId: t,
    canLift: x,
    isMovementAllowed: P,
    dragHandleUsageInstructionsId: a,
    registry: m
  }), [t, D, a, A, x, P, m]);
  return _f({
    contextId: t,
    store: v,
    registry: m,
    customSensors: r || null,
    enableDefaultSensors: e.enableDefaultSensors !== !1
  }), C.useEffect(() => b, [b]), N.createElement(Bn.Provider, {
    value: B
  }, N.createElement(xa, {
    context: qr,
    store: v
  }, e.children));
}
let Vf = 0;
function Lf() {
  return J(() => `${Vf++}`, []);
}
function jf() {
  return N.useId();
}
var $f = "useId" in N ? jf : Lf;
function XD(e) {
  const t = $f(), n = e.dragHandleUsageInstructions || fn.dragHandleUsageInstructions;
  return N.createElement(qa, null, (r) => N.createElement(Tf, {
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
}, Mf = (e, t) => t ? Tt.drop(t.duration) : e ? Tt.snap : Tt.fluid, kf = (e, t) => {
  if (e)
    return t ? Ut.opacity.drop : Ut.opacity.combining;
}, Gf = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function Wf(e) {
  const n = e.dimension.client, {
    offset: r,
    combineWith: o,
    dropping: i
  } = e, s = !!o, u = Gf(e), c = !!i, l = c ? Dr.drop(r, s) : Dr.moveTo(r);
  return {
    position: "fixed",
    top: n.marginBox.top,
    left: n.marginBox.left,
    boxSizing: "border-box",
    width: n.borderBox.width,
    height: n.borderBox.height,
    transition: Mf(u, i),
    transform: l,
    opacity: kf(s, c),
    zIndex: c ? pi.dropAnimating : pi.dragging,
    pointerEvents: "none"
  };
}
function Uf(e) {
  return {
    transform: Dr.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function zf(e) {
  return e.type === "DRAGGING" ? Wf(e) : Uf(e);
}
function Hf(e, t, n = ve) {
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
function qf(e) {
  const t = Yr("draggable"), {
    descriptor: n,
    registry: r,
    getDraggableRef: o,
    canDragInteractiveElements: i,
    shouldRespectForcePress: s,
    isEnabled: u
  } = e, c = J(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: s,
    isEnabled: u
  }), [i, u, s]), l = R((p) => {
    const E = o();
    return E || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot get dimension when no ref is set") : h(!1)), Hf(n, E, p);
  }, [n, o]), f = J(() => ({
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
  e && Qt(e) || (process.env.NODE_ENV !== "production" ? h(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : h(!1));
}
function Yf(e, t, n) {
  Zt(() => {
    function r(i) {
      return `Draggable[id: ${i}]: `;
    }
    const o = e.draggableId;
    o || (process.env.NODE_ENV !== "production" ? h(!1, "Draggable requires a draggableId") : h(!1)), typeof o != "string" && (process.env.NODE_ENV !== "production" ? h(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof o}] (value: ${o})`) : h(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? h(!1, `${r(o)} requires an integer index prop`) : h(!1)), e.mapped.type !== "DRAGGING" && (Ls(n()), e.isEnabled && (Bs(t, o) || (process.env.NODE_ENV !== "production" ? h(!1, `${r(o)} Unable to find drag handle`) : h(!1))));
  });
}
function Kf(e) {
  Kr(() => {
    const t = C.useRef(e);
    Zt(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? h(!1, "Draggable isClone prop value changed during component life") : h(!1));
    }, [e]);
  });
}
function yn(e) {
  const t = C.useContext(e);
  return t || (process.env.NODE_ENV !== "production" ? h(!1, "Could not find required context") : h(!1)), t;
}
function Jf(e) {
  e.preventDefault();
}
const Xf = (e) => {
  const t = C.useRef(null), n = R((F = null) => {
    t.current = F;
  }, []), r = R(() => t.current, []), {
    contextId: o,
    dragHandleUsageInstructionsId: i,
    registry: s
  } = yn(Bn), {
    type: u,
    droppableId: c
  } = yn(Qr), l = J(() => ({
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
  if (Yf(e, o, r), Kf(m), !m) {
    const F = J(() => ({
      descriptor: l,
      registry: s,
      getDraggableRef: r,
      canDragInteractiveElements: E,
      shouldRespectForcePress: p,
      isEnabled: d
    }), [l, s, r, E, p, d]);
    qf(F);
  }
  const A = J(() => d ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": a,
    "data-rfd-drag-handle-context-id": o,
    draggable: !1,
    onDragStart: Jf
  } : null, [o, i, a, d]), v = R((F) => {
    D.type === "DRAGGING" && D.dropping && F.propertyName === "transform" && (N.version.startsWith("16") || N.version.startsWith("17") ? y() : Cr.flushSync(y));
  }, [y, D]), b = J(() => {
    const F = zf(D), x = D.type === "DRAGGING" && D.dropping ? v : void 0;
    return {
      innerRef: n,
      draggableProps: {
        "data-rfd-draggable-context-id": o,
        "data-rfd-draggable-id": a,
        style: F,
        onTransitionEnd: x
      },
      dragHandleProps: A
    };
  }, [o, A, a, D, v, n]), g = J(() => ({
    draggableId: l.id,
    type: l.type,
    source: {
      index: l.index,
      droppableId: l.droppableId
    }
  }), [l.droppableId, l.id, l.index, l.type]);
  return N.createElement(N.Fragment, null, f(b, D.snapshot, g));
};
var Qf = Xf, js = (e, t) => e === t, $s = (e) => {
  const {
    combine: t,
    destination: n
  } = e;
  return n ? n.droppableId : t ? t.droppableId : null;
};
const Zf = (e) => e.combine ? e.combine.draggableId : null, ep = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function tp() {
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
    if (qt(o)) {
      if (o.critical.draggable.id !== i.draggableId)
        return null;
      const s = o.current.client.offset, u = o.dimensions.draggables[i.draggableId], c = $e(o.impact), l = ep(o.impact), f = o.forceShouldAnimate;
      return n(e(s.x, s.y), o.movementMode, u, i.isClone, c, l, f);
    }
    if (o.phase === "DROP_ANIMATING") {
      const s = o.completed;
      if (s.result.draggableId !== i.draggableId)
        return null;
      const u = i.isClone, c = o.dimensions.draggables[i.draggableId], l = s.result, f = l.mode, a = $s(l), d = Zf(l), E = {
        duration: o.dropDuration,
        curve: Gr.drop,
        moveTo: o.newHomeClientOffset,
        opacity: d ? Ut.opacity.drop : null,
        scale: d ? Ut.scale.drop : null
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
const np = {
  mapped: {
    type: "SECONDARY",
    offset: ve,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: Ms(null)
  }
};
function rp() {
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
    const f = c.displaced.visible[s], a = !!(l.inVirtualList && l.effected[s]), d = Sn(c), p = d && d.draggableId === s ? u : null;
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
    if (qt(s))
      return s.critical.draggable.id === u.draggableId ? null : o(u.draggableId, s.critical.draggable.id, s.impact, s.afterCritical);
    if (s.phase === "DROP_ANIMATING") {
      const c = s.completed;
      return c.result.draggableId === u.draggableId ? null : o(u.draggableId, c.result.draggableId, c.impact, c.afterCritical);
    }
    return null;
  };
}
const op = () => {
  const e = tp(), t = rp();
  return (r, o) => e(r, o) || t(r, o) || np;
}, ip = {
  dropAnimationFinished: hs
}, sp = ki(op, ip, null, {
  context: qr,
  areStatePropsEqual: js
})(Qf);
var up = sp;
function ks(e) {
  return yn(Qr).isUsingCloneFor === e.draggableId && !e.isClone ? null : N.createElement(up, e);
}
function QD(e) {
  const t = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0, n = !!e.disableInteractiveElementBlocking, r = !!e.shouldRespectForcePress;
  return N.createElement(ks, Et({}, e, {
    isClone: !1,
    isEnabled: t,
    canDragInteractiveElements: n,
    shouldRespectForcePress: r
  }));
}
const Zr = (e) => (t) => e === t, ap = Zr("scroll"), cp = Zr("auto"), lp = Zr("visible"), Di = (e, t) => t(e.overflowX) || t(e.overflowY), dp = (e, t) => t(e.overflowX) && t(e.overflowY), Gs = (e) => {
  const t = window.getComputedStyle(e), n = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return Di(n, ap) || Di(n, cp);
}, fp = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = Ht(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, h(!1)), !Gs(e))
    return !1;
  const n = window.getComputedStyle(t), r = {
    overflowX: n.overflowX,
    overflowY: n.overflowY
  };
  return dp(r, lp) || process.env.NODE_ENV !== "production" && se(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, Ws = (e) => e == null ? null : e === document.body ? fp() ? e : null : e === document.documentElement ? null : Gs(e) ? e : Ws(e.parentElement);
var Us = Ws, pp = (e) => {
  !e || !Us(e.parentElement) || process.env.NODE_ENV !== "production" && se(`
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
var Dp = (e) => {
  const t = Us(e), n = zs(e);
  return {
    closestScrollable: t,
    isFixedOnPage: n
  };
}, mp = ({
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
const hp = (e, t) => {
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
var gp = ({
  ref: e,
  descriptor: t,
  env: n,
  windowScroll: r,
  direction: o,
  isDropDisabled: i,
  isCombineEnabled: s,
  shouldClipSubject: u
}) => {
  const c = n.closestScrollable, l = hp(e, c), f = gn(l, r), a = (() => {
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
  return mp({
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
const Ep = {
  passive: !1
}, bp = {
  passive: !0
};
var mi = (e) => e.shouldPublishImmediately ? Ep : bp;
const un = (e) => e && e.env.closestScrollable || null;
function yp(e) {
  const t = C.useRef(null), n = yn(Bn), r = Yr("droppable"), {
    registry: o,
    marshal: i
  } = n, s = Jr(e), u = J(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), c = C.useRef(u), l = J(() => ye((b, g) => {
    t.current || (process.env.NODE_ENV !== "production" ? h(!1, "Can only update scroll when dragging") : h(!1));
    const F = {
      x: b,
      y: g
    };
    i.updateDroppableScroll(u.id, F);
  }), [u.id, i]), f = R(() => {
    const b = t.current;
    return !b || !b.env.closestScrollable ? ve : gr(b.env.closestScrollable);
  }, []), a = R(() => {
    const b = f();
    l(b.x, b.y);
  }, [f, l]), d = J(() => $t(a), [a]), p = R(() => {
    const b = t.current, g = un(b);
    if (b && g || (process.env.NODE_ENV !== "production" ? h(!1, "Could not find scroll options while scrolling") : h(!1)), b.scrollOptions.shouldPublishImmediately) {
      a();
      return;
    }
    d();
  }, [d, a]), E = R((b, g) => {
    t.current && (process.env.NODE_ENV !== "production" ? h(!1, "Cannot collect a droppable while a drag is occurring") : h(!1));
    const F = s.current, x = F.getDroppableRef();
    x || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot collect without a droppable ref") : h(!1));
    const P = Dp(x), B = {
      ref: x,
      descriptor: u,
      env: P,
      scrollOptions: g
    };
    t.current = B;
    const I = gp({
      ref: x,
      descriptor: u,
      env: P,
      windowScroll: b,
      direction: F.direction,
      isDropDisabled: F.isDropDisabled,
      isCombineEnabled: F.isCombineEnabled,
      shouldClipSubject: !F.ignoreContainerClipping
    }), T = P.closestScrollable;
    return T && (T.setAttribute(ai.contextId, n.contextId), T.addEventListener("scroll", p, mi(B.scrollOptions)), process.env.NODE_ENV !== "production" && pp(T)), I;
  }, [n.contextId, u, p, s]), m = R(() => {
    const b = t.current, g = un(b);
    return b && g || (process.env.NODE_ENV !== "production" ? h(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : h(!1)), gr(g);
  }, []), D = R(() => {
    const b = t.current;
    b || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot stop drag when no active drag") : h(!1));
    const g = un(b);
    t.current = null, g && (d.cancel(), g.removeAttribute(ai.contextId), g.removeEventListener("scroll", p, mi(b.scrollOptions)));
  }, [p, d]), y = R((b) => {
    const g = t.current;
    g || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot scroll when there is no drag") : h(!1));
    const F = un(g);
    F || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot scroll a droppable with no closest scrollable") : h(!1)), F.scrollTop += b.y, F.scrollLeft += b.x;
  }, []), A = J(() => ({
    getDimensionAndWatchScroll: E,
    getScrollWhileDragging: m,
    dragStopped: D,
    scroll: y
  }), [D, E, m, y]), v = J(() => ({
    uniqueId: r,
    descriptor: u,
    callbacks: A
  }), [A, u, r]);
  Me(() => (c.current = v.descriptor, o.droppable.register(v), () => {
    t.current && (process.env.NODE_ENV !== "production" && se("Unsupported: changing the droppableId or type of a Droppable during a drag"), D()), o.droppable.unregister(v);
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
  margin: ec
}, vp = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: n
}) => e || n === "close" ? hi : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, Cp = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: n
}) => {
  const r = vp({
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
}, Ap = (e) => {
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
  }, [r, i, o]), f = Cp({
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
var Fp = N.memo(Ap);
function Jn(e) {
  return typeof e == "boolean";
}
function Xn(e, t) {
  t.forEach((n) => n(e));
}
const wp = [function({
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
  !t.placeholder || n() || process.env.NODE_ENV !== "production" && se(`
      Droppable setup issue [droppableId: "${t.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], Np = [function({
  props: t
}) {
  t.renderClone || (process.env.NODE_ENV !== "production" ? h(!1, "Must provide a clone render function (renderClone) for virtual lists") : h(!1));
}, function({
  getPlaceholderRef: t
}) {
  t() && (process.env.NODE_ENV !== "production" ? h(!1, "Expected virtual list to not have a placeholder") : h(!1));
}];
function Op(e) {
  Zt(() => {
    Xn(e, wp), e.props.mode === "standard" && Xn(e, Sp), e.props.mode === "virtual" && Xn(e, Np);
  });
}
class Bp extends N.PureComponent {
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
const xp = (e) => {
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
  } = e, A = R(() => o.current, []), v = R((V = null) => {
    o.current = V;
  }, []), b = R(() => i.current, []), g = R((V = null) => {
    i.current = V;
  }, []);
  Op({
    props: e,
    getDroppableRef: A,
    getPlaceholderRef: b
  });
  const F = R(() => {
    r() && D({
      maxScroll: Cs()
    });
  }, [r, D]);
  yp({
    droppableId: u,
    type: c,
    mode: l,
    direction: f,
    isDropDisabled: d,
    isCombineEnabled: p,
    ignoreContainerClipping: a,
    getDroppableRef: A
  });
  const x = J(() => N.createElement(Bp, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: V,
    data: $,
    animate: U
  }) => N.createElement(Fp, {
    placeholder: $,
    onClose: V,
    innerRef: g,
    animate: U,
    contextId: n,
    onTransitionEnd: F
  })), [n, F, e.placeholder, e.shouldAnimatePlaceholder, g]), P = J(() => ({
    innerRef: v,
    placeholder: x,
    droppableProps: {
      "data-rfd-droppable-id": u,
      "data-rfd-droppable-context-id": n
    }
  }), [n, u, x, v]), B = m ? m.dragging.draggableId : null, I = J(() => ({
    droppableId: u,
    type: c,
    isUsingCloneFor: B
  }), [u, B, c]);
  function T() {
    if (!m)
      return null;
    const {
      dragging: V,
      render: $
    } = m, U = N.createElement(ks, {
      draggableId: V.draggableId,
      index: V.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (z, de) => $(z, de, V));
    return mu.createPortal(U, y());
  }
  return N.createElement(Qr.Provider, {
    value: I
  }, s(P, E), T());
};
var Ip = xp;
function _p() {
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
  getContainerForClone: _p
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
}, Qn = (e, t) => e === t.droppable.type, Ei = (e, t) => t.draggables[e.draggable.id], Pp = () => {
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
    if (qt(i)) {
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
}, Rp = {
  updateViewportMaxScroll: pl
}, Tp = ki(Pp, Rp, (e, t, n) => ({
  ...Hs(n),
  ...e,
  ...t
}), {
  context: qr,
  areStatePropsEqual: js
})(Ip);
var ZD = Tp;
const Vp = (e) => /* @__PURE__ */ C.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512", ...e }, /* @__PURE__ */ C.createElement("path", { d: "M0 117.66v346.32c0 11.32 11.43 19.06 21.94 14.86L160 416V32L20.12 87.95A32.006 32.006 0 000 117.66zM192 416l192 64V96L192 32v384zM554.06 33.16L416 96v384l139.88-55.95A31.996 31.996 0 00576 394.34V48.02c0-11.32-11.43-19.06-21.94-14.86z" })), dt = (e, t, n, r, o) => {
  if (!r)
    throw new Error(o ?? `Invalid property path: ${t}
Couldn't access "${n}" in ${JSON.stringify(e)}`);
}, bi = (e) => typeof e == "object" && e !== null && !Array.isArray(e), pn = (e) => Array.isArray(e), qs = (e, t) => e.filter((n, r) => r !== t), Lp = (e, t, n, r = {}) => {
  const { remove: o = !1, createNew: i = !0, noError: s = !1 } = r, u = e, c = typeof (l = t) == "string" ? l : typeof l == "number" ? String(l) : l.reduce((d, p) => typeof p == "number" ? `${d}[${p}]` : d === "" ? p : `${d}.${p}`, "");
  var l;
  const f = Object.assign(Object.assign({}, r), { remove: o, createNew: i, noError: s, fullData: u, fullPath: c }), a = Array.isArray(t) ? t : ((d) => Array.isArray(d) ? d : d.split(/(\.|\[\d+\])/).filter((p) => p !== "." && p !== "").map((p) => {
    const E = /\[(\d+)\]/.exec(p);
    return E ? Number(E[1]) : p;
  }).flat())(t).filter((d) => d !== "");
  return pn(e) && o && a.length === 1 ? qs(e, a[0]) : It(e, a, n, f);
}, It = (e, t, n, r) => {
  const o = bi(e) ? Object.assign({}, e) : null, i = pn(e) ? [...e] : null;
  if (t.length === 0)
    return e;
  if (!o && !i)
    throw new Error("Can't assign property -- invalid input object");
  const { createNew: s, remove: u, noError: c, fullData: l, fullPath: f } = r, a = t[0];
  if (i && typeof a == "string")
    return i.map((m) => It(m, t, n, r));
  if (t.length === 1) {
    if (o && typeof a == "string") {
      const m = jp(o, a, n, r);
      return m ?? o;
    }
    return i && typeof a == "number" ? ($p(i, a, n, r), i) : (dt(l, f, a, c), e);
  }
  const d = o || i || [];
  if (u && t.length === 2 && typeof t[1] == "number") {
    const m = d[a], D = t[1];
    return pn(m) ? d[a] = qs(m, D) : dt(l, f, a, c, "Trying to remove an indexed item from an object that is not an array"), d;
  }
  const p = t.slice(1);
  if (a in e) {
    if (E = d[a], !pn(E) && !bi(E)) {
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
}, jp = (e, t, n, r) => {
  const { remove: o, createNew: i, noError: s, insertAfter: u, insertBefore: c, fullData: l, fullPath: f } = r;
  if (c || u) {
    const d = Object.entries(e);
    let p = d.findIndex(([E, m]) => E === (c ?? u));
    return u && p++, d.splice(p, 0, [t, n]), Object.fromEntries(d);
  }
  const a = t in e;
  o ? a ? delete e[t] : dt(l, f, t, s) : i || a ? e[t] = n : dt(l, f, t, s);
}, $p = (e, t, n, r) => {
  const { noError: o, fullData: i, fullPath: s, createNew: u, insert: c } = r;
  c && e.splice(t, 0, n), t in e ? e[t] = n : u ? e.push(n) : dt(i, s, t, o);
}, vn = (e, t, n) => {
  const r = Array.isArray(t) ? t : Mp(t);
  if (r.length === 0)
    return e;
  const o = r[0];
  if (Array.isArray(e) && typeof o != "number")
    return e.map((s) => vn(s, r, n));
  if (typeof e != "object" || e === null || !(o in e))
    return kp(e, o, n);
  const i = e[o];
  return r.length === 1 ? i : vn(i, r.slice(1), n);
}, Mp = (e) => e.split(/(\.|\[\d+\])/).filter((t) => t !== "." && t !== "").map((t) => {
  const n = /\[(\d+)\]/.exec(t);
  return n ? Number(n[1]) : t;
}).flat(), kp = (e, t, n) => {
  if (n === void 0)
    throw new Error(`Unable to extract object property
Looking for property: ${t}
In object: ${JSON.stringify(e)}`);
  return n;
};
var Gp = /[\u1680\u2000-\u200A\u202F\u205F\u3000]/, Wp = /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/, Up = /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/, Zn = {
  Space_Separator: Gp,
  ID_Start: Wp,
  ID_Continue: Up
}, me = {
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
let Er, Be, Qe, Cn, ot, He, be, eo, Vt;
var zp = function(t, n) {
  Er = String(t), Be = "start", Qe = [], Cn = 0, ot = 1, He = 0, be = void 0, eo = void 0, Vt = void 0;
  do
    be = Hp(), Kp[Be]();
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
let W, G, _t, Xe, H;
function Hp() {
  for (W = "default", G = "", _t = !1, Xe = 1; ; ) {
    H = Ze();
    const e = Ys[W]();
    if (e)
      return e;
  }
}
function Ze() {
  if (Er[Cn])
    return String.fromCodePoint(Er.codePointAt(Cn));
}
function w() {
  const e = Ze();
  return e === `
` ? (ot++, He = 0) : e ? He += e.length : He++, e && (Cn += e.length), e;
}
const Ys = {
  default() {
    switch (H) {
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
        w();
        return;
      case "/":
        w(), W = "comment";
        return;
      case void 0:
        return w(), ce("eof");
    }
    if (me.isSpaceSeparator(H)) {
      w();
      return;
    }
    return Ys[Be]();
  },
  comment() {
    switch (H) {
      case "*":
        w(), W = "multiLineComment";
        return;
      case "/":
        w(), W = "singleLineComment";
        return;
    }
    throw le(w());
  },
  multiLineComment() {
    switch (H) {
      case "*":
        w(), W = "multiLineCommentAsterisk";
        return;
      case void 0:
        throw le(w());
    }
    w();
  },
  multiLineCommentAsterisk() {
    switch (H) {
      case "*":
        w();
        return;
      case "/":
        w(), W = "default";
        return;
      case void 0:
        throw le(w());
    }
    w(), W = "multiLineComment";
  },
  singleLineComment() {
    switch (H) {
      case `
`:
      case "\r":
      case "\u2028":
      case "\u2029":
        w(), W = "default";
        return;
      case void 0:
        return w(), ce("eof");
    }
    w();
  },
  value() {
    switch (H) {
      case "{":
      case "[":
        return ce("punctuator", w());
      case "n":
        return w(), st("ull"), ce("null", null);
      case "t":
        return w(), st("rue"), ce("boolean", !0);
      case "f":
        return w(), st("alse"), ce("boolean", !1);
      case "-":
      case "+":
        w() === "-" && (Xe = -1), W = "sign";
        return;
      case ".":
        G = w(), W = "decimalPointLeading";
        return;
      case "0":
        G = w(), W = "zero";
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
        G = w(), W = "decimalInteger";
        return;
      case "I":
        return w(), st("nfinity"), ce("numeric", 1 / 0);
      case "N":
        return w(), st("aN"), ce("numeric", NaN);
      case '"':
      case "'":
        _t = w() === '"', G = "", W = "string";
        return;
    }
    throw le(w());
  },
  identifierNameStartEscape() {
    if (H !== "u")
      throw le(w());
    w();
    const e = yr();
    switch (e) {
      case "$":
      case "_":
        break;
      default:
        if (!me.isIdStartChar(e))
          throw yi();
        break;
    }
    G += e, W = "identifierName";
  },
  identifierName() {
    switch (H) {
      case "$":
      case "_":
      case "‌":
      case "‍":
        G += w();
        return;
      case "\\":
        w(), W = "identifierNameEscape";
        return;
    }
    if (me.isIdContinueChar(H)) {
      G += w();
      return;
    }
    return ce("identifier", G);
  },
  identifierNameEscape() {
    if (H !== "u")
      throw le(w());
    w();
    const e = yr();
    switch (e) {
      case "$":
      case "_":
      case "‌":
      case "‍":
        break;
      default:
        if (!me.isIdContinueChar(e))
          throw yi();
        break;
    }
    G += e, W = "identifierName";
  },
  sign() {
    switch (H) {
      case ".":
        G = w(), W = "decimalPointLeading";
        return;
      case "0":
        G = w(), W = "zero";
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
        G = w(), W = "decimalInteger";
        return;
      case "I":
        return w(), st("nfinity"), ce("numeric", Xe * (1 / 0));
      case "N":
        return w(), st("aN"), ce("numeric", NaN);
    }
    throw le(w());
  },
  zero() {
    switch (H) {
      case ".":
        G += w(), W = "decimalPoint";
        return;
      case "e":
      case "E":
        G += w(), W = "decimalExponent";
        return;
      case "x":
      case "X":
        G += w(), W = "hexadecimal";
        return;
    }
    return ce("numeric", Xe * 0);
  },
  decimalInteger() {
    switch (H) {
      case ".":
        G += w(), W = "decimalPoint";
        return;
      case "e":
      case "E":
        G += w(), W = "decimalExponent";
        return;
    }
    if (me.isDigit(H)) {
      G += w();
      return;
    }
    return ce("numeric", Xe * Number(G));
  },
  decimalPointLeading() {
    if (me.isDigit(H)) {
      G += w(), W = "decimalFraction";
      return;
    }
    throw le(w());
  },
  decimalPoint() {
    switch (H) {
      case "e":
      case "E":
        G += w(), W = "decimalExponent";
        return;
    }
    if (me.isDigit(H)) {
      G += w(), W = "decimalFraction";
      return;
    }
    return ce("numeric", Xe * Number(G));
  },
  decimalFraction() {
    switch (H) {
      case "e":
      case "E":
        G += w(), W = "decimalExponent";
        return;
    }
    if (me.isDigit(H)) {
      G += w();
      return;
    }
    return ce("numeric", Xe * Number(G));
  },
  decimalExponent() {
    switch (H) {
      case "+":
      case "-":
        G += w(), W = "decimalExponentSign";
        return;
    }
    if (me.isDigit(H)) {
      G += w(), W = "decimalExponentInteger";
      return;
    }
    throw le(w());
  },
  decimalExponentSign() {
    if (me.isDigit(H)) {
      G += w(), W = "decimalExponentInteger";
      return;
    }
    throw le(w());
  },
  decimalExponentInteger() {
    if (me.isDigit(H)) {
      G += w();
      return;
    }
    return ce("numeric", Xe * Number(G));
  },
  hexadecimal() {
    if (me.isHexDigit(H)) {
      G += w(), W = "hexadecimalInteger";
      return;
    }
    throw le(w());
  },
  hexadecimalInteger() {
    if (me.isHexDigit(H)) {
      G += w();
      return;
    }
    return ce("numeric", Xe * Number(G));
  },
  string() {
    switch (H) {
      case "\\":
        w(), G += qp();
        return;
      case '"':
        if (_t)
          return w(), ce("string", G);
        G += w();
        return;
      case "'":
        if (!_t)
          return w(), ce("string", G);
        G += w();
        return;
      case `
`:
      case "\r":
        throw le(w());
      case "\u2028":
      case "\u2029":
        Jp(H);
        break;
      case void 0:
        throw le(w());
    }
    G += w();
  },
  start() {
    switch (H) {
      case "{":
      case "[":
        return ce("punctuator", w());
    }
    W = "value";
  },
  beforePropertyName() {
    switch (H) {
      case "$":
      case "_":
        G = w(), W = "identifierName";
        return;
      case "\\":
        w(), W = "identifierNameStartEscape";
        return;
      case "}":
        return ce("punctuator", w());
      case '"':
      case "'":
        _t = w() === '"', W = "string";
        return;
    }
    if (me.isIdStartChar(H)) {
      G += w(), W = "identifierName";
      return;
    }
    throw le(w());
  },
  afterPropertyName() {
    if (H === ":")
      return ce("punctuator", w());
    throw le(w());
  },
  beforePropertyValue() {
    W = "value";
  },
  afterPropertyValue() {
    switch (H) {
      case ",":
      case "}":
        return ce("punctuator", w());
    }
    throw le(w());
  },
  beforeArrayValue() {
    if (H === "]")
      return ce("punctuator", w());
    W = "value";
  },
  afterArrayValue() {
    switch (H) {
      case ",":
      case "]":
        return ce("punctuator", w());
    }
    throw le(w());
  },
  end() {
    throw le(w());
  }
};
function ce(e, t) {
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
      throw le(w());
    w();
  }
}
function qp() {
  switch (Ze()) {
    case "b":
      return w(), "\b";
    case "f":
      return w(), "\f";
    case "n":
      return w(), `
`;
    case "r":
      return w(), "\r";
    case "t":
      return w(), "	";
    case "v":
      return w(), "\v";
    case "0":
      if (w(), me.isDigit(Ze()))
        throw le(w());
      return "\0";
    case "x":
      return w(), Yp();
    case "u":
      return w(), yr();
    case `
`:
    case "\u2028":
    case "\u2029":
      return w(), "";
    case "\r":
      return w(), Ze() === `
` && w(), "";
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      throw le(w());
    case void 0:
      throw le(w());
  }
  return w();
}
function Yp() {
  let e = "", t = Ze();
  if (!me.isHexDigit(t) || (e += w(), t = Ze(), !me.isHexDigit(t)))
    throw le(w());
  return e += w(), String.fromCodePoint(parseInt(e, 16));
}
function yr() {
  let e = "", t = 4;
  for (; t-- > 0; ) {
    const n = Ze();
    if (!me.isHexDigit(n))
      throw le(w());
    e += w();
  }
  return String.fromCodePoint(parseInt(e, 16));
}
const Kp = {
  start() {
    if (be.type === "eof")
      throw ut();
    er();
  },
  beforePropertyName() {
    switch (be.type) {
      case "identifier":
      case "string":
        eo = be.value, Be = "afterPropertyName";
        return;
      case "punctuator":
        an();
        return;
      case "eof":
        throw ut();
    }
  },
  afterPropertyName() {
    if (be.type === "eof")
      throw ut();
    Be = "beforePropertyValue";
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
      an();
      return;
    }
    er();
  },
  afterPropertyValue() {
    if (be.type === "eof")
      throw ut();
    switch (be.value) {
      case ",":
        Be = "beforePropertyName";
        return;
      case "}":
        an();
    }
  },
  afterArrayValue() {
    if (be.type === "eof")
      throw ut();
    switch (be.value) {
      case ",":
        Be = "beforeArrayValue";
        return;
      case "]":
        an();
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
    Qe.push(e), Array.isArray(e) ? Be = "beforeArrayValue" : Be = "beforePropertyName";
  else {
    const t = Qe[Qe.length - 1];
    t == null ? Be = "end" : Array.isArray(t) ? Be = "afterArrayValue" : Be = "afterPropertyValue";
  }
}
function an() {
  Qe.pop();
  const e = Qe[Qe.length - 1];
  e == null ? Be = "end" : Array.isArray(e) ? Be = "afterArrayValue" : Be = "afterPropertyValue";
}
function le(e) {
  return An(e === void 0 ? `JSON5: invalid end of input at ${ot}:${He}` : `JSON5: invalid character '${Ks(e)}' at ${ot}:${He}`);
}
function ut() {
  return An(`JSON5: invalid end of input at ${ot}:${He}`);
}
function yi() {
  return He -= 5, An(`JSON5: invalid identifier character at ${ot}:${He}`);
}
function Jp(e) {
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
var Xp = function(t, n, r) {
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
          if (me.isDigit(m[b + 1])) {
            A += "\\x00";
            continue;
          }
      }
      if (y[g]) {
        A += y[g];
        continue;
      }
      if (g < " ") {
        let F = g.charCodeAt(0).toString(16);
        A += "\\x" + ("00" + F).substring(F.length);
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
        let F = p(b) + ":";
        c !== "" && (F += " "), F += g, A.push(F);
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
    if (!me.isIdStartChar(D))
      return a(m);
    for (let y = D.length; y < m.length; y++)
      if (!me.isIdContinueChar(String.fromCodePoint(m.codePointAt(y))))
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
const Qp = {
  parse: zp,
  stringify: Xp
};
var tr = Qp, Zp = Pt;
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
    return RegExp(e.source, eD(e));
  if (n == "Array" || n == "Object") {
    t = Array.isArray(e) ? [] : {};
    for (var r in e)
      t[r] = Pt(e[r]);
  }
  return t;
}
function eD(e) {
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
function Dn(e, t, n, r) {
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
  return ge("div", { style: { display: "grid" }, children: [S("textarea", { id: `${t}_textarea`, style: Object.assign({ height: "auto", gridArea: "1 / 1 / 2 / 2", overflowY: "auto", whiteSpace: "pre-wrap" }, i), rows: 1, className: e, name: `${t}_textarea`, value: n, onChange: (u) => r(u.target.value), autoFocus: !0, onFocus: (u) => {
    n.length < 40 && u.target.select();
  }, onKeyDown: o }), S("span", { className: e, style: Object.assign({ visibility: "hidden", height: "auto", gridArea: "1 / 1 / 2 / 2", color: "red", opacity: 0.9, whiteSpace: "pre-wrap", overflowY: "auto", border: "1px solid transparent" }, i), children: s })] });
}, Qs = { default: { displayName: "Default", fragments: { edit: "rgb(42, 161, 152)" }, styles: { container: { backgroundColor: "#f6f6f6", fontFamily: "monospace" }, collection: {}, collectionInner: {}, collectionElement: {}, property: "#292929", bracket: { color: "rgb(0, 43, 54)", fontWeight: "bold" }, itemCount: { color: "rgba(0, 0, 0, 0.3)", fontStyle: "italic" }, string: "rgb(203, 75, 22)", number: "rgb(38, 139, 210)", boolean: "green", null: { color: "rgb(220, 50, 47)", fontVariant: "small-caps", fontWeight: "bold" }, input: ["#292929"], inputHighlight: "#b3d8ff", error: { fontSize: "0.8em", color: "red", fontWeight: "bold" }, iconCollection: "rgb(0, 43, 54)", iconEdit: "edit", iconDelete: "rgb(203, 75, 22)", iconAdd: "edit", iconCopy: "rgb(38, 139, 210)", iconOk: "green", iconCancel: "rgb(203, 75, 22)" } }, githubDark: { displayName: "Github Dark", styles: { container: { backgroundColor: "#0d1117", color: "white" }, property: "#E6EDF3", bracket: "#56d364", itemCount: "#8B949E", string: "#A5D6FF", number: "#D2A8FF", boolean: { color: "#FF7B72", fontSize: "90%", fontWeight: "bold" }, null: "green", iconCollection: "#D2A8FF", iconEdit: "#D2A8FF", iconDelete: "rgb(203, 75, 22)", iconAdd: "rgb(203, 75, 22)", iconCopy: "#A5D6FF", iconOk: "#56d364", iconCancel: "rgb(203, 75, 22)" } }, githubLight: { displayName: "Github Light", styles: { container: "white", property: "#1F2328", bracket: "#00802e", itemCount: "#8B949E", string: "#0A3069", number: "#953800", boolean: { color: "#CF222E", fontSize: "90%", fontWeight: "bold" }, null: "#FF7B72", iconCollection: "#8250DF", iconEdit: "#8250DF", iconDelete: "rgb(203, 75, 22)", iconAdd: "#8250DF", iconCopy: "#57606A" } }, monoDark: { displayName: "Black & White", fragments: { lightText: { color: "white" }, midGrey: "#5c5c5c" }, styles: { container: ["lightText", { backgroundColor: "black" }], property: "lightText", bracket: "midGrey", itemCount: "#4a4a4a", string: "#a8a8a8", number: "#666666", boolean: { color: "#848484", fontStyle: "italic" }, null: "#333333", iconCollection: "midGrey", iconEdit: "midGrey", iconDelete: "midGrey", iconAdd: "midGrey", iconCopy: "midGrey", iconOk: "midGrey", iconCancel: "midGrey" } }, monoLight: { fragments: { midGrey: "#a3a3a3" }, displayName: "White & Black", styles: { container: "white", property: "black", bracket: "midGrey", itemCount: "#b5b5b5", string: "#575757", number: "#999999", boolean: { color: "#7b7b7b", fontStyle: "italic" }, null: "#cccccc", iconCollection: "midGrey", iconEdit: "midGrey", iconDelete: "midGrey", iconAdd: "midGrey", iconCopy: "midGrey", iconOk: "midGrey", iconCancel: "midGrey" } }, candyWrapper: { displayName: "Candy Wrapper", fragments: { minty: { backgroundColor: "#F1FAEE" }, pale: { color: "#A8DADC" }, mid: { color: "#457B9D" }, dark: { color: "#1D3557" }, pop: { color: "#E63946" }, darkBlue: { color: "#2B2D42" } }, styles: { container: "minty", property: "pop", bracket: "dark", itemCount: "pale", string: "mid", number: ["darkBlue", { fontSize: "85%" }], boolean: ["mid", { fontStyle: "italic", fontWeight: "bold", fontSize: "80%" }], null: ["#cccccc", { fontWeight: "bold" }], input: { border: "1px solid rgb(115, 194, 198)" }, iconCollection: "#1D3557", iconEdit: "#457B9D", iconDelete: "#E63946", iconAdd: "#2B2D42", iconCopy: "#1D3557", iconCancel: "#E63946" } }, psychedelic: { displayName: "Psychedelic", fragments: { minty: { backgroundColor: "#F1FAEE" }, pale: { color: "#A8DADC" }, mid: { color: "#457B9D" }, dark: { color: "#1D3557" }, pop: { color: "#E63946" }, fluroYellow: "rgb(242, 228, 21)", fluroGreen: "rgb(68, 255, 62)", hotPink: "#f7379a" }, styles: { container: { backgroundColor: "unset", background: "linear-gradient(90deg, hsla(333, 100%, 53%, 1) 0%, hsla(33, 94%, 57%, 1) 100%)", color: "black" }, property: "black", bracket: "fluroYellow", itemCount: ["pale", { opacity: 0.7 }], string: "white", number: ["#33d9ff", { fontSize: "90%", fontWeight: "bold" }], boolean: ["fluroGreen", { fontWeight: "bold", fontSize: "80%" }], null: ["black", { fontWeight: "bold", opacity: 0.3, backgroundColor: "rgb(255, 255, 255, 0.5)", padding: "0 0.4em", borderRadius: "0.4em" }], iconCollection: "fluroYellow", iconEdit: ["black"], iconDelete: ["white", { opacity: 0.5 }], iconAdd: ["white", { opacity: 0.5 }], iconCopy: "rgb(32, 84, 242)", iconOk: "fluroGreen", iconCancel: "hotPink" } } }, tD = { container: {}, collection: {}, collectionInner: {}, collectionElement: {}, property: {}, bracket: {}, itemCount: {}, string: {}, number: {}, boolean: {}, null: {}, input: {}, inputHighlight: {}, error: {}, iconCollection: {}, iconEdit: {}, iconDelete: {}, iconAdd: {}, iconCopy: {}, iconOk: {}, iconCancel: {} }, nD = Qs.default, Zs = C.createContext({ getStyles: () => ({}), setTheme: (e) => {
}, icons: {}, setIcons: () => {
} }), rD = ({ children: e }) => {
  const [t, n] = C.useState(tD), [r, o] = C.useState({});
  return S(Zs.Provider, { value: { getStyles: (i, s) => typeof t[i] == "function" ? t[i](s) : t[i], setTheme: (i) => {
    const s = oD(i);
    n(s);
  }, icons: r, setIcons: o }, children: e });
}, et = () => C.useContext(Zs), oD = (e) => {
  var t, n, r, o;
  const i = {}, s = (Array.isArray(e) ? e : [e]).map((l) => e === "default" ? {} : typeof l == "string" ? cn(Qs[l], i) : iD(l) ? cn({ fragments: {}, styles: l }, i) : cn(l, i)), u = cn(nD, {});
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
}, cn = (e, t) => {
  const { fragments: n, styles: r } = e, o = {};
  return Object.entries(r).forEach(([i, s]) => {
    const u = (Array.isArray(s) ? s : [s]).reduce((c, l) => {
      var f;
      if (typeof l == "function")
        return t[i] = l, Object.assign({}, c);
      if (typeof l == "string") {
        const a = (f = n == null ? void 0 : n[l]) !== null && f !== void 0 ? f : l;
        return typeof a == "string" ? Object.assign(Object.assign({}, c), { [sD[i]]: a }) : Object.assign(Object.assign({}, c), a);
      }
      return Object.assign(Object.assign({}, c), l);
    }, {});
    o[i] = u;
  }), o;
}, iD = (e) => !("styles" in e), sD = { container: "backgroundColor", collection: "backgroundColor", collectionInner: "backgroundColor", collectionElement: "backgroundColor", property: "color", bracket: "color", itemCount: "color", string: "color", number: "color", boolean: "color", null: "color", input: "color", inputHighlight: "backgroundColor", error: "color", iconCollection: "color", iconEdit: "color", iconDelete: "color", iconAdd: "color", iconCopy: "color", iconOk: "color", iconCancel: "color" }, uD = (e, t = 200) => typeof e == "string" ? e.length < t ? e : `${e.slice(0, t - 2).trim()}...` : e, en = (e) => e.map((t) => t === "" ? String.fromCharCode(0) : t).join("."), aD = ({ value: e, setValue: t, isEditing: n, path: r, setIsEditing: o, handleEdit: i, handleCancel: s, stringTruncate: u, showStringQuotes: c, nodeData: l }) => {
  const { getStyles: f } = et(), a = en(r), d = c ? '"' : "";
  return n ? S(Xs, { className: "jer-input-text", name: a, value: e, setValue: t, isEditing: n, handleKeyPress: (p) => {
    p.key !== "Enter" || p.shiftKey ? p.key === "Escape" && s() : i();
  }, styles: f("input", l) }) : ge("div", { id: `${a}_display`, onDoubleClick: () => o(!0), onClick: (p) => {
    (p.getModifierState("Control") || p.getModifierState("Meta")) && o(!0);
  }, className: "jer-value-string", style: f("string", l), children: [d, uD(e, u), d] });
}, cD = ({ value: e, setValue: t, isEditing: n, path: r, setIsEditing: o, handleEdit: i, handleCancel: s, nodeData: u }) => {
  const { getStyles: c } = et();
  return n ? S("input", { className: "jer-input-number", type: "text", name: en(r), value: e, onChange: (l) => t(l.target.value.replace(/[^0-9.-]/g, "")), autoFocus: !0, onFocus: (l) => l.target.select(), onKeyDown: (l) => {
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
  }, style: { width: String(e).length / 1.5 + 2 + "em" } }) : S("span", { onDoubleClick: () => o(!0), className: "jer-value-number", style: c("number", u), children: e });
}, lD = ({ value: e, setValue: t, isEditing: n, path: r, setIsEditing: o, handleEdit: i, handleCancel: s, nodeData: u }) => {
  const { getStyles: c } = et();
  C.useEffect(() => (n && document.addEventListener("keydown", l), () => document.removeEventListener("keydown", l)), [n, i]);
  const l = (f) => {
    f.key === "Enter" ? i() : f.key === "Escape" && s();
  };
  return n ? S("input", { className: "jer-input-boolean", type: "checkbox", name: en(r), checked: e, onChange: () => t(!e) }) : S("span", { onDoubleClick: () => o(!0), className: "jer-value-boolean", style: c("boolean", u), children: String(e) });
}, dD = ({ value: e, isEditing: t, setIsEditing: n, handleEdit: r, handleCancel: o, nodeData: i }) => {
  const { getStyles: s } = et();
  C.useEffect(() => (t && document.addEventListener("keydown", u), () => document.removeEventListener("keydown", u)), [t]);
  const u = (c) => {
    c.key === "Enter" ? r() : c.key === "Escape" && o();
  };
  return S("div", { onDoubleClick: () => n(!0), className: "jer-value-null", style: s("null", i), children: String(e) });
}, fD = ({ value: e, translate: t, isEditing: n, handleEdit: r, handleCancel: o, nodeData: i }) => {
  C.useEffect(() => (n && document.addEventListener("keydown", s), () => document.removeEventListener("keydown", s)), []);
  const s = (u) => {
    u.key === "Enter" ? r() : u.key === "Escape" && o();
  };
  return S("span", { className: "jer-value-object", children: `{${t("DEFAULT_NEW_KEY", i)}: "${String(e)}" }` });
}, pD = ({ value: e, isEditing: t, handleEdit: n, handleCancel: r }) => {
  C.useEffect(() => (t && document.addEventListener("keydown", o), () => document.removeEventListener("keydown", o)), []);
  const o = (i) => {
    i.key === "Enter" ? n() : i.key === "Escape" && r();
  };
  return S("span", { className: "jer-value-array", children: `[${e === null ? "" : String(e)}]` });
}, DD = ({ value: e }) => {
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
  return S("span", { className: "jer-value-invalid", children: t });
}, mD = ({ size: e, style: t, className: n }) => ge("svg", { viewBox: "0 0 24 24", fill: "currentColor", width: e, height: e, className: n, style: t, children: [S("path", { d: "M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4z" }), S("path", { d: "M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" })] }), hD = ({ size: e, style: t, className: n }) => ge("svg", { viewBox: "0 0 24 24", fill: "currentColor", width: e, height: e, className: n, style: t, transform: "translate(0, 0.5)", children: [S("path", { d: "M7 17.013l4.413-.015 9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583v4.43zM18.045 4.458l1.589 1.583-1.597 1.582-1.586-1.585 1.594-1.58zM9 13.417l6.03-5.973 1.586 1.586-6.029 5.971L9 15.006v-1.589z" }), S("path", { d: "M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2z" })] }), gD = ({ size: e, style: t, className: n }) => S("svg", { viewBox: "0 0 24 24", fill: "currentColor", width: e, height: e, className: n, style: t, children: S("path", { d: "M6 19a2 2 0 002 2h8a2 2 0 002-2V7H6v12m2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12M15.5 4l-1-1h-5l-1 1H5v2h14V4h-3.5z" }) }), ED = ({ size: e, style: t, className: n }) => ge("svg", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, viewBox: "0 0 24 24", width: e, height: e, className: n, style: t, children: [S("path", { d: "M9 2 H15 A1 1 0 0 1 16 3 V5 A1 1 0 0 1 15 6 H9 A1 1 0 0 1 8 5 V3 A1 1 0 0 1 9 2 z" }), S("path", { d: "M8 4H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2v-2M16 4h2a2 2 0 012 2v4M21 14H11" }), S("path", { d: "M15 10l-4 4 4 4" })] }), bD = ({ size: e, style: t, className: n }) => ge("svg", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, viewBox: "0 0 24 24", width: e, height: e, className: n, style: t, children: [S("path", { d: "M22 11.08V12a10 10 0 11-5.93-9.14" }), S("path", { d: "M22 4L12 14.01l-3-3" })] }), yD = ({ size: e, style: t, className: n }) => S("svg", { baseProfile: "tiny", viewBox: "0 0 24 24", fill: "currentColor", width: e, height: e, className: n, style: t, children: S("path", { d: "M12 4c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm-5 8c0-.832.224-1.604.584-2.295l6.711 6.711A4.943 4.943 0 0112 17c-2.757 0-5-2.243-5-5zm9.416 2.295L9.705 7.584A4.943 4.943 0 0112 7c2.757 0 5 2.243 5 5 0 .832-.224 1.604-.584 2.295z" }) }), vD = ({ size: e, style: t, className: n }) => S("svg", { viewBox: "0 0 512 512", fill: "currentColor", width: e, height: e, className: n, style: t, children: S("path", { d: "M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" }) }), ft = ({ name: e, nodeData: t, rotate: n }) => {
  var r, o, i, s, u, c, l;
  const { getStyles: f, icons: a } = et(), d = { size: "1.4em", className: "jer-icon" };
  switch (e) {
    case "add":
      return (r = a == null ? void 0 : a.add) !== null && r !== void 0 ? r : S(mD, Object.assign({}, d, { style: f("iconAdd", t) }));
    case "edit":
      return (o = a == null ? void 0 : a.edit) !== null && o !== void 0 ? o : S(hD, Object.assign({}, d, { style: f("iconEdit", t) }));
    case "delete":
      return (i = a == null ? void 0 : a.delete) !== null && i !== void 0 ? i : S(gD, Object.assign({}, d, { style: f("iconDelete", t), size: "1.45em" }));
    case "copy":
      return (s = a == null ? void 0 : a.copy) !== null && s !== void 0 ? s : S(ED, Object.assign({}, d, { style: f("iconCopy", t), size: "1.2em" }));
    case "ok":
      return (u = a == null ? void 0 : a.ok) !== null && u !== void 0 ? u : S(bD, Object.assign({}, d, { style: Object.assign({ fontSize: "90%" }, f("iconOk", t)) }));
    case "cancel":
      return (c = a == null ? void 0 : a.cancel) !== null && c !== void 0 ? c : S(yD, Object.assign({}, d, { style: Object.assign({ fontSize: "130%" }, f("iconCancel", t)) }));
    case "chevron":
      return (l = a == null ? void 0 : a.chevron) !== null && l !== void 0 ? l : S(vD, { className: "jer-accordion-icon" + (n ? " jer-rotate-90" : ""), size: "1em", style: f("iconCollection", t) });
    default:
      return S(Ar, {});
  }
}, eu = ({ startEdit: e, handleDelete: t, handleAdd: n, enableClipboard: r, type: o, nodeData: i, translate: s }) => {
  const { getStyles: u } = et(), c = s("KEY_NEW", i), [l, f] = C.useState(!1), [a, d] = C.useState(c), { key: p, path: E, value: m } = i;
  return C.useEffect(() => {
    l || d(c);
  }, [l]), ge("div", { className: "jer-edit-buttons", style: l ? { opacity: 1 } : void 0, children: [r && S("div", { onClick: (D) => {
    let y, A = "value", v = "";
    r && ((D.ctrlKey || D.metaKey) === !0 ? (y = CD(E), v = y, A = "path") : (y = m, v = o ? JSON.stringify(m, null, 2) : String(y)), navigator.clipboard.writeText(v)), typeof r == "function" && r({ value: y, stringValue: v, path: E, key: p, type: A });
  }, className: "jer-copy-pulse", children: S(ft, { name: "copy", nodeData: i }) }), e && S("div", { onClick: e, children: S(ft, { name: "edit", nodeData: i }) }), t && S("div", { onClick: t, children: S(ft, { name: "delete", nodeData: i }) }), n && S("div", { onClick: () => {
    o === "object" ? f(!0) : n("");
  }, children: S(ft, { name: "add", nodeData: i }) }), l && n && o === "object" && ge(Ar, { children: [S("input", { className: "jer-input-new-key", type: "text", name: "new-object-key", value: a, onChange: (D) => d(D.target.value), autoFocus: !0, onFocus: (D) => D.target.select(), onKeyDown: (D) => {
    D.key === "Enter" && n ? (f(!1), n(a)) : D.key === "Escape" && f(!1);
  }, style: u("input", i) }), S(to, { onOk: () => {
    a && (f(!1), n(a));
  }, onCancel: () => {
    f(!1);
  }, nodeData: i })] })] });
}, to = ({ onOk: e, onCancel: t, nodeData: n }) => ge("div", { className: "jer-confirm-buttons", children: [S("div", { onClick: e, children: S(ft, { name: "ok", nodeData: n }) }), S("div", { onClick: t, children: S(ft, { name: "cancel", nodeData: n }) })] }), CD = (e) => e.reduce((t, n) => typeof n == "number" ? `${t}[${n}]` : t === "" ? n : `${t}.${n}`, ""), AD = ["string", "number", "boolean", "null", "object", "array"], tu = (e = [], t) => {
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
}, areChildrenBeingEdited: () => !1 }), FD = ({ children: e }) => {
  const [t, n] = C.useState(null), [r, o] = C.useState(null);
  return S(ru.Provider, { value: { collapseState: t, setCollapseState: n, doesPathMatch: (i) => {
    if (t === null)
      return !1;
    for (const [s, u] of t.path.entries())
      if (u !== i[s])
        return !1;
    return !0;
  }, currentlyEditingElement: r, setCurrentlyEditingElement: o, areChildrenBeingEdited: (i) => r !== null && r.includes(i) }, children: e });
}, no = () => C.useContext(ru), ou = (e) => {
  const { data: t, parentData: n, nodeData: r, onEdit: o, onDelete: i, onChange: s, onError: u, showErrorMessages: c, enableClipboard: l, restrictEditFilter: f, restrictDeleteFilter: a, restrictTypeSelection: d, searchFilter: p, searchText: E, showLabel: m, stringTruncate: D, showStringQuotes: y, indent: A, translate: v, customNodeDefinitions: b } = e, { getStyles: g } = et(), { currentlyEditingElement: F, setCurrentlyEditingElement: x, setCollapseState: P } = no(), [B, I] = C.useState(typeof t == "function" ? "**INVALID_FUNCTION**" : t), [T, V] = C.useState(null), { key: $, path: U } = r, z = tu(b, r), [de, ne] = C.useState(ln(t, z)), q = en(U), he = C.useCallback((L) => {
    if (!s)
      return void I(L);
    const ae = s({ currentData: r.fullData, newValue: L, currentValue: B, name: $, path: U });
    I(ae);
  }, [s]);
  C.useEffect(() => {
    I(typeof t == "function" ? "**INVALID_FUNCTION**" : t), ne(ln(t, z));
  }, [t, T]);
  const re = C.useMemo(() => !f(r), [r]), Ce = C.useMemo(() => !a(r), [r]), pe = C.useMemo(() => (L, ae) => {
    var Se;
    Se = L.message, c && (V(Se), setTimeout(() => V(null), 2500)), console.warn("Error", Se), u && u({ currentData: r.fullData, errorValue: ae, currentValue: B, name: $, path: U, error: L });
  }, [u, c]), { CustomNode: De, customNodeProps: M, hideKey: Y, showEditTools: k = !0, showOnEdit: ue, showOnView: K } = z, X = [...AD, ...b.filter(({ showInTypesSelector: L = !1, name: ae }) => L && !!ae).map(({ name: L }) => L)], oe = C.useMemo(() => {
    if (typeof d == "boolean")
      return d ? [] : X;
    if (Array.isArray(d))
      return d;
    const L = d(r);
    return typeof L == "boolean" ? L ? [] : X : L;
  }, [r, d]);
  if (!nu("value", r, p, E))
    return null;
  const xe = () => {
    let L;
    switch (x(null), de) {
      case "object":
        L = { [v("DEFAULT_NEW_KEY", r)]: B };
        break;
      case "array":
        L = B ?? [];
        break;
      case "number": {
        const ae = Number(B);
        L = isNaN(ae) ? 0 : ae;
        break;
      }
      default:
        L = B;
    }
    o(L, U).then((ae) => {
      ae && pe({ code: "UPDATE_ERROR", message: ae }, L);
    });
  }, O = () => {
    x(null), I(t), ne(ln(t, z));
  }, fe = F === q, _ = F === `key_${q}`, Pe = typeof U.slice(-1)[0] != "number" && re && Ce, Re = !fe && T, Ie = fe && oe.length > 0, we = de !== "invalid" && !T && k, ke = m && _, Te = m && !_ && !Y, qe = { value: B, parentData: n, setValue: he, isEditing: fe, setIsEditing: re ? () => x(q) : () => {
  }, handleEdit: xe, handleCancel: O, path: U, stringTruncate: D, showStringQuotes: y, nodeData: r, translate: v }, Ye = De && (fe && ue || !fe && K) ? S(De, Object.assign({}, e, { value: B, customNodeProps: M, setValue: he, handleEdit: xe, handleCancel: O, handleKeyPress: (L) => {
    L.key === "Enter" ? xe() : L.key === "Escape" && O();
  }, isEditing: fe, setIsEditing: () => x(q), getStyles: g })) : wD(ln(t), qe);
  return S("div", { className: "jer-component jer-value-component", style: { marginLeft: A / 2 + "em" }, children: ge("div", { className: "jer-value-main-row", style: { flexWrap: $.length > 10 ? "wrap" : "nowrap" }, children: [Te && ge("span", { className: "jer-key-text", style: Object.assign(Object.assign({}, g("property", r)), { minWidth: `${Math.min(String($).length + 1, 5)}ch`, flexShrink: $.length > 10 ? 1 : 0 }), onDoubleClick: () => Pe && x(`key_${q}`), children: [$ === "" ? S("span", { className: "jer-empty-string" }) : $, ":"] }), ke && S("input", { className: "jer-input-text jer-key-edit", type: "text", name: q, defaultValue: $, autoFocus: !0, onFocus: (L) => L.target.select(), onKeyDown: (L) => {
    L.key === "Enter" ? ((ae) => {
      if (x(null), $ === ae || !n)
        return;
      const Se = U.slice(0, -1);
      if (Object.keys(n).includes(ae))
        return void pe({ code: "KEY_EXISTS", message: v("ERROR_KEY_EXISTS", r) }, ae);
      const Ve = Object.fromEntries(Object.entries(n).map(([ht, tn]) => ht === $ ? [ae, tn] : [ht, tn]));
      o(Ve, Se);
    })(L.target.value) : L.key === "Escape" && O();
  }, style: { width: String($).length / 1.5 + 0.5 + "em" } }), ge("div", { className: "jer-value-and-buttons", children: [S("div", { className: "jer-input-component", children: Ye }), fe ? S(to, { onOk: xe, onCancel: O, nodeData: r }) : we && S(eu, { startEdit: re ? () => x(q) : void 0, handleDelete: Ce ? () => {
    i(B, U).then((L) => {
      L && pe({ code: "DELETE_ERROR", message: L }, B);
    });
  } : void 0, enableClipboard: l, translate: v, nodeData: r }), Ie && ge("div", { className: "jer-select", children: [S("select", { name: `${$}-type-select`, className: "jer-type-select", onChange: (L) => ((ae) => {
    const Se = b.find((Ve) => Ve.name === ae);
    if (Se)
      o(Se.defaultValue, U), ne(ae);
    else {
      const Ve = SD(B, ae, v("DEFAULT_NEW_KEY", r), z != null && z.CustomNode ? v("DEFAULT_STRING", r) : void 0);
      he(Ve), o(Ve, U), P({ path: U, collapsed: !1 }), ne(ae);
    }
  })(L.target.value), value: de, children: oe.map((L) => S("option", { value: L, children: L }, L)) }), S("span", { className: "focus" })] }), Re && S("span", { className: "jer-error-slug", style: g("error", r), children: T })] })] }) });
}, ln = (e, t) => t != null && t.CustomNode && (t != null && t.name) && t.showInTypesSelector ? t.name : typeof e == "string" ? "string" : typeof e == "number" ? "number" : typeof e == "boolean" ? "boolean" : e === null ? "null" : "invalid", wD = (e, t) => {
  const n = t.value;
  switch (e) {
    case "string":
      return S(aD, Object.assign({}, t, { value: n }));
    case "number":
      return S(cD, Object.assign({}, t, { value: n }));
    case "boolean":
      return S(lD, Object.assign({}, t, { value: n }));
    case "null":
      return S(dD, Object.assign({}, t));
    case "object":
      return S(fD, Object.assign({}, t, { value: n }));
    case "array":
      return S(pD, Object.assign({}, t));
    default:
      return S(DD, Object.assign({}, t));
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
  const { getStyles: s } = et(), { collapseState: u, setCollapseState: c, doesPathMatch: l, currentlyEditingElement: f, setCurrentlyEditingElement: a, areChildrenBeingEdited: d } = no(), { onEdit: p, onAdd: E, onDelete: m, onError: D, showErrorMessages: y, restrictEditFilter: A, restrictDeleteFilter: v, restrictAddFilter: b, collapseFilter: g, enableClipboard: F, searchFilter: x, searchText: P, indent: B, keySort: I, showArrayIndices: T, defaultValue: V, translate: $, customNodeDefinitions: U, useJSON5Editor: z } = i, de = C.useMemo(() => z ? z instanceof Object ? (j) => tr.stringify(j, z) : (j) => tr.stringify(j, { space: 2 }) : (j) => JSON.stringify(j, null, 2), [z]), [ne, q] = C.useState(de(t)), [he, re] = C.useState(null), Ce = g(n), [pe, De] = C.useState(Ce), M = Object.assign(Object.assign({}, n), { collapsed: pe }), { path: Y, key: k, size: ue } = M, K = en(Y), X = C.useRef(!Ce), [oe, xe] = C.useState(!1);
  C.useEffect(() => {
    q(de(t));
  }, [t]), C.useEffect(() => {
    const j = g(M);
    X.current = !j, De(j);
  }, [g]), C.useEffect(() => {
    u !== null && l(Y) && (X.current = !0, De(u.collapsed));
  }, [u]);
  const O = C.useMemo(() => !A(M), [M]), fe = C.useMemo(() => !v(M), [M]), _ = C.useMemo(() => !b(M), [M]), Pe = C.useMemo(() => (j) => typeof V != "function" ? V : V(j), [V]), { CustomNode: Re, customNodeProps: Ie, CustomWrapper: we, wrapperProps: ke = {}, hideKey: Te, showEditTools: qe = !0, showOnEdit: Ye, showOnView: L, showCollectionWrapper: ae = !0 } = C.useMemo(() => tu(U, M), []), Se = C.useMemo(() => (j, ie) => {
    var Le;
    Le = j.message, y && (re(Le), setTimeout(() => re(null), 2500)), console.warn("Error", Le), D && D({ currentData: M.fullData, errorValue: ie, currentValue: t, name: k, path: Y, error: j });
  }, [D, y]);
  if (!nu("collection", M, x, P) && M.level > 0)
    return null;
  const Ve = Array.isArray(t) ? "array" : "object", ht = Ve === "array" ? { open: "[", close: "]" } : { open: "{", close: "}" }, tn = getComputedStyle(document.documentElement).getPropertyValue("--jer-expand-transition-time"), ro = (j) => {
    j.key === "Enter" && (j.metaKey || j.shiftKey || j.ctrlKey) ? In() : j.key === "Escape" && nn();
  }, In = () => {
    try {
      const j = tr.parse(ne);
      if (a(null), re(null), JSON.stringify(j) === JSON.stringify(t))
        return;
      p(j, Y).then((ie) => {
        ie && Se({ code: "UPDATE_ERROR", message: ie }, j);
      });
    } catch {
      Se({ code: "INVALID_JSON", message: $("ERROR_INVALID_JSON", M) }, ne);
    }
  }, su = Y.length > 0 ? () => {
    m(t, Y).then((j) => {
      j && Se({ code: "DELETE_ERROR", message: j }, vn(t, Y));
    });
  } : void 0, nn = () => {
    a(null), re(null), q(de(t));
  }, Ke = f === K, uu = f === `key_${K}`, oo = typeof Y.slice(-1)[0] == "number", au = r !== null && O && _ && fe && !oo, io = o === "when-closed" ? pe : o, cu = !Ke && qe, lu = (T || !oo) && !Te && k !== void 0, du = Re && (Ke && Ye || !Ke && L), fu = I && Ve === "object", so = Object.entries(t).map(([j, ie]) => [Ve === "array" ? Number(j) : j, ie]);
  fu && so.sort(typeof I == "function" ? (j, ie) => I(j[0], ie[0]) : void 0);
  const pu = JSON.stringify(t, null, 2).replace(/\\n/g, `
`).split(`
`).length, uo = X.current ? Ke ? S("div", { className: "jer-collection-text-edit", children: ge("div", { children: [S(Xs, { className: "jer-collection-text-area", name: K, value: ne, setValue: q, isEditing: Ke, handleKeyPress: ro, styles: s("input", M) }), S("div", { className: "jer-collection-input-button-row", children: S(to, { onOk: In, onCancel: nn, nodeData: M }) })] }) }) : so.map(([j, ie], Le) => {
    const St = { key: j, value: ie, path: [...Y, j], level: Y.length + 1, index: Le, size: Fn(ie) ? Object.keys(ie).length : 1, parentData: t, fullData: M.fullData };
    return S("div", { className: "jer-collection-element", style: s("collectionElement", St), children: Fn(ie) ? S(iu, Object.assign({ data: ie, parentData: t, nodeData: St, showCollectionCount: o }, i), j) : S(ou, Object.assign({ data: ie, parentData: t, nodeData: St }, i, { showLabel: Ve === "object" || T }), j) }, j);
  }) : null, rn = !!ae && pe;
  rn || (X.current = !0);
  const ao = Object.assign(Object.assign({}, i), { data: t, value: t, parentData: r, nodeData: M, setValue: (j) => Dn(void 0, void 0, void 0, function* () {
    return yield p(j, Y);
  }), handleEdit: In, handleCancel: nn, handleKeyPress: ro, isEditing: Ke, setIsEditing: () => a(K), getStyles: s }), Du = du ? S(Re, Object.assign({ customNodeProps: Ie }, ao, { children: uo })) : uo, co = uu ? S("input", { className: "jer-input-text jer-key-edit", type: "text", name: K, defaultValue: k, autoFocus: !0, onFocus: (j) => j.target.select(), onKeyDown: (j) => {
    j.key === "Enter" ? ((ie) => {
      if (a(null), k === ie || !r)
        return;
      const Le = Y.slice(0, -1);
      if (Object.keys(r).includes(ie))
        return void Se({ code: "KEY_EXISTS", message: $("ERROR_KEY_EXISTS", M) }, ie);
      const St = Object.fromEntries(Object.entries(r).map(([po, Do]) => po === k ? [ie, Do] : [po, Do]));
      p(St, Le);
    })(j.target.value) : j.key === "Escape" && nn();
  }, style: { width: String(k).length / 1.5 + 0.5 + "em" } }) : lu && S("span", { className: "jer-key-text", style: s("property", M), onDoubleClick: () => au && a(`key_${K}`), children: k === "" ? S("span", { className: Y.length > 0 ? "jer-empty-string" : void 0 }) : `${k}:` }), lo = cu && S(eu, { startEdit: O ? () => {
    X.current = !0, a(K), De(!1);
  } : void 0, handleAdd: _ ? (j) => {
    De(!1);
    const ie = Pe(M);
    Ve === "array" ? E(ie, [...Y, t.length]).then((Le) => {
      Le && Se({ code: "ADD_ERROR", message: Le }, ie);
    }) : j in t ? Se({ code: "KEY_EXISTS", message: $("ERROR_KEY_EXISTS", M) }, j) : E(ie, [...Y, j]).then((Le) => {
      Le && Se({ code: "ADD_ERROR", message: Le }, ie);
    });
  } : void 0, handleDelete: fe ? su : void 0, enableClipboard: F, type: Ve, nodeData: M, translate: $ }), fo = ge("div", { className: "jer-component jer-collection-component", style: Object.assign({ marginLeft: (Y.length === 0 ? 0 : B / 2) + "em" }, s("collection", M)), children: [ae ? ge("div", { className: "jer-collection-header-row", style: { position: "relative" }, children: [ge("div", { className: "jer-collection-name", children: [S("div", { className: "jer-collapse-icon", onClick: (j) => ((ie) => {
    if (ie.getModifierState("Alt"))
      return X.current = !0, void c({ collapsed: !pe, path: Y });
    f && f.includes(K) || (xe(!0), X.current = !0, De(!pe), setTimeout(() => xe(!1), 500));
  })(j), children: S(ft, { name: "chevron", rotate: pe, nodeData: M }) }), co, !Ke && S("span", { className: "jer-brackets jer-bracket-open", style: s("bracket", M), children: ht.open })] }), !Ke && io && S("div", { className: "jer-collection-item-count" + (io ? " jer-visible" : " jer-hidden"), style: s("itemCount", M), children: ue === 1 ? $("ITEM_SINGLE", Object.assign(Object.assign({}, M), { size: 1 }), 1) : $("ITEMS_MULTIPLE", M, ue) }), S("div", { className: "jer-brackets" + (rn ? " jer-visible" : " jer-hidden"), style: s("bracket", M), children: ht.close }), lo] }) : Te ? S(Ar, {}) : ge("div", { className: "jer-collection-header-row", style: { position: "relative" }, children: [co, lo] }), ge("div", { className: "jer-collection-inner", style: Object.assign({ maxHeight: rn ? 0 : d(K) ? void 0 : 3 * pu + "em", overflowY: rn || oe ? "hidden" : "visible", transition: `max-height ${tn}` }, s("collectionInner", M)), children: [Du, S("div", { className: Ke ? "jer-collection-error-row" : "jer-collection-error-row-edit", children: he && S("span", { className: "jer-error-slug", style: s("error", M), children: he }) }), !Ke && ae && S("div", { className: "jer-brackets jer-bracket-outside", style: s("bracket", M), children: ht.close })] })] });
  return we ? S(we, Object.assign({ customNodeProps: ke }, ao, { children: fo })) : fo;
}, ND = { ITEM_SINGLE: "{{count}} item", ITEMS_MULTIPLE: "{{count}} items", KEY_NEW: "Enter new key", ERROR_KEY_EXISTS: "Key already exists", ERROR_INVALID_JSON: "Invalid JSON", ERROR_UPDATE: "Update unsuccessful", ERROR_DELETE: "Delete unsuccessful", ERROR_ADD: "Adding node unsuccessful", DEFAULT_STRING: "New data!", DEFAULT_NEW_KEY: "key" }, OD = (e, t) => (n, r, o) => ((i, s, u, c, l) => {
  if (s[c]) {
    const a = s[c](u);
    if (a !== null)
      return a;
  }
  const f = c in i ? i[c] : ND[c];
  return l === void 0 ? f : f == null ? void 0 : f.replace("{{count}}", String(l));
})(e, t, r, n, o), BD = ({ data: e, rootName: t = "root", onUpdate: n = () => {
}, onEdit: r = n, onDelete: o = n, onAdd: i = n, onChange: s, onError: u, showErrorMessages: c = !0, enableClipboard: l = !0, theme: f = "default", icons: a, indent: d = 3, collapse: p = !1, showCollectionCount: E = !0, restrictEdit: m = !1, restrictDelete: D = !1, restrictAdd: y = !1, restrictTypeSelection: A = !1, searchFilter: v, searchText: b, searchDebounceTime: g = 350, keySort: F = !1, showArrayIndices: x = !0, showStringQuotes: P = !0, defaultValue: B = null, minWidth: I = 250, maxWidth: T = "min(600px, 90vw)", rootFontSize: V, stringTruncate: $ = 250, translations: U = {}, className: z, id: de, customText: ne = {}, customNodeDefinitions: q = [], useJSON5Editor: he = !1 }) => {
  const { getStyles: re, setTheme: Ce, setIcons: pe } = et(), { setCollapseState: De } = no(), M = C.useCallback(dn(p), [p]), Y = C.useCallback(OD(U, ne), [U, ne]), [k, ue] = C.useState(b), [K, X] = C.useState(e);
  C.useEffect(() => {
    f && Ce(f), a && pe(a);
  }, [f, a]), C.useEffect(() => {
    De(null), X(e);
  }, [e]), C.useEffect(() => {
    const Ie = setTimeout(() => ue(b), g);
    return () => clearTimeout(Ie);
  }, [b, g]);
  const oe = { key: t, path: [], level: 0, index: 0, value: K, size: Object.keys(K).length, parentData: null, fullData: K }, xe = dn(m), O = dn(D), fe = dn(y), _ = ID(v), Pe = { name: t, nodeData: oe, onEdit: (Ie, we) => Dn(void 0, void 0, void 0, function* () {
    const { currentData: ke, newData: Te, currentValue: qe, newValue: Ye } = nr(K, we, Ie, "update");
    if (qe === Ye)
      return;
    X(Te);
    const L = yield r({ currentData: ke, newData: Te, currentValue: qe, newValue: Ye, name: we.slice(-1)[0], path: we });
    return L !== void 0 ? (X(ke), L === !1 ? Y("ERROR_UPDATE", oe) : L) : void 0;
  }), onDelete: (Ie, we) => Dn(void 0, void 0, void 0, function* () {
    const { currentData: ke, newData: Te, currentValue: qe, newValue: Ye } = nr(K, we, Ie, "delete");
    X(Te);
    const L = yield o({ currentData: ke, newData: Te, currentValue: qe, newValue: Ye, name: we.slice(-1)[0], path: we });
    if (L !== void 0)
      return X(ke), L === !1 ? Y("ERROR_UPDATE", oe) : L;
  }), onAdd: (Ie, we) => Dn(void 0, void 0, void 0, function* () {
    const { currentData: ke, newData: Te, currentValue: qe, newValue: Ye } = nr(K, we, Ie, "add");
    X(Te);
    const L = yield i({ currentData: ke, newData: Te, currentValue: qe, newValue: Ye, name: we.slice(-1)[0], path: we });
    if (L !== void 0)
      return X(ke), L === !1 ? Y("ERROR_UPDATE", oe) : L;
  }), onChange: s, onError: u, showErrorMessages: c, showCollectionCount: E, collapseFilter: M, restrictEditFilter: xe, restrictDeleteFilter: O, restrictAddFilter: fe, restrictTypeSelection: A, searchFilter: _, searchText: k, enableClipboard: l, keySort: F, showArrayIndices: x, showStringQuotes: P, indent: d, defaultValue: B, stringTruncate: $, translate: Y, customNodeDefinitions: q, parentData: null, useJSON5Editor: he }, Re = Object.assign(Object.assign({}, re("container", oe)), { minWidth: I, maxWidth: T });
  return Re.fontSize = V ?? Re.fontSize, S("div", { id: de, className: "jer-editor-container " + z, style: Re, children: Fn(K) ? S(iu, Object.assign({ data: K }, Pe)) : S(ou, Object.assign({ data: K, showLabel: !0 }, Pe)) });
}, xD = (e) => S(rD, { children: S(FD, { children: S(BD, Object.assign({}, e)) }) }), nr = (e, t, n, r) => {
  if (t.length === 0)
    return { currentData: e, newData: n, currentValue: e, newValue: n };
  const o = r !== "add" ? vn(e, t) : void 0;
  return { currentData: e, newData: Lp(Zp(e), t, n, { remove: r === "delete" }), currentValue: o, newValue: r !== "delete" ? n : void 0 };
}, dn = (e) => typeof e == "boolean" ? () => e : typeof e == "number" ? ({ level: t }) => t >= e : e, ID = (e) => {
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
    e.visualizations[t] = Lt.omit(e.visualizations[t], ["runtime", "formattedData", "data"]);
  }), e.rows && e.rows.forEach((t, n) => {
    t.dataKey && (e.rows[n] = Lt.omit(t, ["data", "formattedData"]));
  });
}, wi = (e) => {
  var t;
  (t = e.dashboard) != null && t.sharedFilters && e.dashboard.sharedFilters.forEach((n, r) => {
    delete e.dashboard.sharedFilters[r].active, n.type === "urlfilter" && delete e.dashboard.sharedFilters[r].values;
  });
}, _D = (e) => {
  let t = Lt.cloneDeep(e);
  return t.type === "dashboard" ? (t.multiDashboards && t.multiDashboards.forEach((n, r) => {
    Fi(t.multiDashboards[r]), wi(t.multiDashboards[r]), Ai(t.multiDashboards[r]);
  }), Fi(t), wi(t), Ai(t)) : (delete t.runtime, delete t.formattedData, t.dataUrl && delete t.data), t;
};
const em = ({ loadConfig: e, config: t, convertStateToConfig: n, onExpandCollapse: r = () => {
} }) => {
  const [o, i] = C.useState(!1), [s, u] = C.useState(""), c = (a) => {
    i(a), r();
  }, l = (a) => {
    u(JSON.stringify(a.newData));
  };
  C.useEffect(() => {
    let a = _D(t);
    t.type !== "dashboard" && (a = n());
    const d = JSON.stringify(a, void 0, 2);
    u(d);
  }, [t]);
  const f = {
    chart: ["Charts", "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/bar-chart.html", /* @__PURE__ */ N.createElement(mo, null)],
    dashboard: ["Dashboard", "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/bar-chart.html", /* @__PURE__ */ N.createElement(mo, null)],
    map: ["Maps", "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/data-map.html", /* @__PURE__ */ N.createElement(Vp, null)],
    "markup-include": ["Markup Include", "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/Markup-Include.html", /* @__PURE__ */ N.createElement(gu, null)]
  };
  return t.type ? /* @__PURE__ */ N.createElement(N.Fragment, null, /* @__PURE__ */ N.createElement("a", { href: f[t.type][1], target: "_blank", rel: "noopener noreferrer", className: "guidance-link" }, f[t.type][2], /* @__PURE__ */ N.createElement("div", null, /* @__PURE__ */ N.createElement("span", { className: "heading-3" }, "Get Help with ", f[t.type][0]), /* @__PURE__ */ N.createElement("p", null, "Examples and documentation"))), /* @__PURE__ */ N.createElement("div", { className: "advanced" }, /* @__PURE__ */ N.createElement("span", { className: "advanced-toggle-link", onClick: () => c(!o) }, /* @__PURE__ */ N.createElement("span", null, o ? "— " : "+ "), "Advanced Options"), o && /* @__PURE__ */ N.createElement(N.Fragment, null, /* @__PURE__ */ N.createElement("section", { className: "error-box py-2 px-3 my-2" }, /* @__PURE__ */ N.createElement("div", null, /* @__PURE__ */ N.createElement("strong", { className: "pt-1" }, "Warning"), /* @__PURE__ */ N.createElement("p", null, "This can cause serious errors in your visualization."))), /* @__PURE__ */ N.createElement("p", { className: "pb-2" }, "This tool displays the actual ", /* @__PURE__ */ N.createElement("acronym", { title: "JavaScript Object Notation" }, "JSON"), " configuration that is generated by this editor and allows you to edit properties directly and apply them."), /* @__PURE__ */ N.createElement(
    "button",
    {
      className: "btn ",
      onClick: () => {
        navigator.clipboard.writeText(s);
      }
    },
    "Copy to Clipboard"
  ), /* @__PURE__ */ N.createElement(xD, { className: "advanced-json-editor", data: JSON.parse(s), onUpdate: l, rootName: "" }), /* @__PURE__ */ N.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: () => {
        e(JSON.parse(s)), c(!o);
      }
    },
    "Apply"
  )))) : /* @__PURE__ */ N.createElement(N.Fragment, null);
};
function PD(e) {
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
      if (i.active === void 0)
        return;
      const s = r[i.columnName];
      if (Array.isArray(i.active) ? i.active.includes(s) || (o = !1) : s != i.active && (o = !1), i.filterStyle === "nested-dropdown" && i.subGroupingFilter && o === !0) {
        const u = i.subGroupingFilter, c = r[i.subGroupingFilter.columnName];
        if (u.active === void 0)
          return;
        u.active.includes(c) ? c != u.active && (o = !1) : o = !1;
      }
      o && n.push(r);
    });
  }), n;
}, RD = (e, t) => {
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
}, TD = (e, t) => e == null ? void 0 : e.map((n) => {
  const r = Lt.cloneDeep(n), o = RD(n.columnName, t);
  if (r.values = o, o.length > 0) {
    const i = r.filterStyle === "multi-select" ? r.values : r.values[0], s = PD(r);
    s ? r.active = s : r.active = r.active || i;
  }
  return r;
}), VD = ["dropdown", "nested-dropdown", "pill", "tab", "tab bar", "multi-select"], LD = [
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
], Si = (e) => {
  const { order: t } = e, n = (o, i) => o.toString().localeCompare(i.toString(), "en", { numeric: !0 }), r = (o, i) => i.toString().localeCompare(o.toString(), "en", { numeric: !0 });
  return (!t || t === "") && (e.order = "asc"), t === "desc" && (e.values = e.values.sort(r)), t === "asc" && (e.values = e.values.sort(n)), e;
}, sr = ["chart", "table"], jD = (e) => {
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
        b.filterStyle !== "nested-dropdown" ? b.active = A : (b.active = A[0], b.subGroupingFilter.active = A[1]);
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
      A.forEach((g, F) => {
        (!g.values || g.values.length === 0) && (g.values = c(f, g.columnName)), A[F].active = Si(g).values[0], g.setByQueryParameter && b[g.setByQueryParameter] !== g.active && (b[g.setByQueryParameter] = g.active, v = !0);
      }), v && or(b), o({ ...r, filters: A }), l === "map" ? s(A, u) : s(ir(A, u));
    },
    filterConstants: {
      buttonText: "Apply Filters",
      resetText: "Reset All",
      introText: "Make a selection from the filters to change the visualization information.",
      applyText: "Select the apply button to update the visualization information."
    },
    filterStyleOptions: VD,
    filterOrderOptions: LD,
    handleFilterOrder: (y, A, v, b) => {
      const g = [...b.values], [F] = g.splice(y, 1);
      g.splice(A, 0, F);
      const x = sr.includes(r.type) ? [...r.filters] : [...i], P = { ...x[v] };
      P.values = g, P.orderedValues = g, P.active = g[0], P.order = "cust", x[v] = P, r.type === "map" && s(x), o({ ...r, filters: x });
    },
    handleSorting: Si
  };
}, $D = (e) => {
  var P;
  const { config: t, filteredData: n, dimensions: r } = e, { data: o, filters: i, type: s, general: u, theme: c, filterBehavior: l } = t, [f, a] = C.useState(!1), [d, p] = C.useState(null), E = C.useId(), {
    handleApplyButton: m,
    changeFilterActive: D,
    announceChange: y,
    showApplyButton: A,
    handleReset: v,
    filterConstants: b,
    handleSorting: g
  } = jD(e);
  C.useEffect(() => {
    r && (r[0] < 768 && (i == null ? void 0 : i.length) > 0 ? a(!0) : a(!1));
  }, [r]), C.useEffect(() => {
    if (d) {
      const B = document.getElementById(d.id);
      B && B.focus();
    }
  }, [D, d]);
  const F = (B) => B.children, x = ["filters-section", s === "map" ? u.headerColor : (t == null ? void 0 : t.visualizationType) === "Spark Line" ? null : c];
  if (F.Section = ({ children: B }) => (t == null ? void 0 : t.filters) && /* @__PURE__ */ N.createElement("section", { className: x.join(" ") }, /* @__PURE__ */ N.createElement("p", { className: "filters-section__intro-text" }, i != null && i.some((I) => I.active) ? b.introText : "", " ", t.filterBehavior === "Apply Button" && b.applyText), /* @__PURE__ */ N.createElement("div", { className: "filters-section__wrapper" }, B)), F.ApplyBehavior = () => {
    if (l !== "Apply Button")
      return;
    const B = [u != null && u.headerColor ? u.headerColor : c, "apply"];
    return /* @__PURE__ */ N.createElement("div", { className: "filters-section__buttons" }, /* @__PURE__ */ N.createElement(Eu, { onClick: () => m(i), disabled: !A, className: B.join(" ") }, b.buttonText), /* @__PURE__ */ N.createElement("a", { href: "#!", role: "button", onClick: v }, b.resetText));
  }, F.TabBar = (B) => {
    const { filter: I, index: T } = B;
    return /* @__PURE__ */ N.createElement("section", { className: "single-filters__tab-bar" }, I.values.map((V, $) => {
      const U = ["button__tab-bar", I.active === V ? "button__tab-bar--active" : ""];
      return /* @__PURE__ */ N.createElement(
        "button",
        {
          id: `${V}-${T}-${$}-${E}`,
          className: U.join(" "),
          key: V,
          onClick: (z) => {
            D(T, V), p(z.target);
          },
          onKeyDown: (z) => {
            z.keyCode === 13 && (D(T, V), p(z.target));
          }
        },
        V
      );
    }));
  }, F.Pills = (B) => B.pills, F.Tabs = (B) => B.tabs, F.Dropdown = (B) => {
    const { index: I, label: T, active: V, filters: $ } = B;
    return /* @__PURE__ */ N.createElement(
      "select",
      {
        id: `filter-${I}`,
        name: T,
        "aria-label": `Filter by ${T}`,
        className: "filter-select",
        "data-index": "0",
        value: V,
        onChange: (U) => {
          D(I, U.target.value), y(`Filter ${T} value has been changed to ${U.target.value}, please reference the data table to see updated values.`);
        }
      },
      $
    );
  }, F.NestedDropdown = (B) => B.nestedDropdown, F.Style = () => {
    if (i || n) {
      let B = s === "map" ? n : i;
      return delete B.fromHash, TD(B, t.data).map((I, T) => {
        var pe, De, M, Y;
        if (I.showDropdown === !1)
          return;
        const V = [], $ = [], U = [], { active: z, queuedActive: de, label: ne, filterStyle: q } = I;
        g(I), (pe = I.values) == null || pe.forEach((k, ue) => {
          const K = ["pill", z === k ? "pill--active" : null, c && c], X = ["tab", z === k && "tab--active", c && c];
          $.push(
            /* @__PURE__ */ N.createElement("div", { className: "pill__wrapper", key: `pill-${ue}` }, /* @__PURE__ */ N.createElement(
              "button",
              {
                id: `${k}-${T}-${ue}-${E}`,
                className: K.join(" "),
                onKeyDown: (oe) => {
                  oe.keyCode === 13 && (D(T, k), p(oe.target));
                },
                onClick: (oe) => {
                  D(T, k), p(oe.target);
                },
                name: ne
              },
              k
            ))
          ), V.push(
            /* @__PURE__ */ N.createElement("option", { key: ue, value: k, "aria-label": k }, I.labels && I.labels[k] ? I.labels[k] : k)
          ), U.push(
            /* @__PURE__ */ N.createElement(
              "button",
              {
                id: `${k}-${T}-${ue}-${E}`,
                className: X.join(" "),
                onClick: (oe) => {
                  D(T, k), p(oe.target);
                },
                onKeyDown: (oe) => {
                  oe.keyCode === 13 && (D(T, k), p(oe.target));
                }
              },
              k
            )
          );
        });
        const he = (k, ue) => {
          const K = Lt.cloneDeep(k);
          return ue !== "cust" && K.sort(), ue === "desc" && K.reverse(), K;
        }, re = i[T];
        q === "nested-dropdown" && (re.values = he(re.values, re.order), (De = re.subGroupingFilter) != null && De.values && ((M = re.subGroupingFilter) == null || M.values.map((k) => {
          var ue;
          he(k, (ue = re.subGroupingFilter) == null ? void 0 : ue.order);
        })));
        const Ce = ["single-filters", f ? "single-filters--dropdown" : `single-filters--${q}`];
        return /* @__PURE__ */ N.createElement("div", { className: Ce.join(" "), key: T }, /* @__PURE__ */ N.createElement(N.Fragment, null, ne && /* @__PURE__ */ N.createElement("label", { htmlFor: `filter-${T}` }, ne), q === "tab" && !f && /* @__PURE__ */ N.createElement(F.Tabs, { tabs: U }), q === "pill" && !f && /* @__PURE__ */ N.createElement(F.Pills, { pills: $ }), q === "tab bar" && !f && /* @__PURE__ */ N.createElement(F.TabBar, { filter: I, index: T }), (q === "dropdown" || f) && q !== "nested-dropdown" && /* @__PURE__ */ N.createElement(F.Dropdown, { filter: I, index: T, label: ne, active: de || z, filters: V }), q === "multi-select" && /* @__PURE__ */ N.createElement(
          bu,
          {
            options: I.values.map((k) => ({ value: k, label: k })),
            fieldName: T,
            updateField: (k, ue, K, X) => D(K, X),
            selected: I.active,
            limit: I.selectLimit || 5
          }
        ), q === "nested-dropdown" && /* @__PURE__ */ N.createElement(yu, { currentFilter: re, filterIndex: T, listLlabel: ne, handleSelectedItems: (k) => D(T, k), valueOrder: re.values, subGroupingValueOrder: (Y = re.subGroupingFilter) == null ? void 0 : Y.values })));
      });
    }
  }, ((P = t == null ? void 0 : t.filters) == null ? void 0 : P.length) !== 0)
    return /* @__PURE__ */ N.createElement(F, null, /* @__PURE__ */ N.createElement(F.Section, null, /* @__PURE__ */ N.createElement(F.Style, null), /* @__PURE__ */ N.createElement(F.ApplyBehavior, null)));
};
$D.propTypes = {
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
  em as A,
  ZD as C,
  XD as D,
  $D as F,
  QD as P,
  xi as _,
  VD as a,
  _D as b,
  Ii as c,
  ir as d,
  rr as e,
  LD as f,
  PD as g,
  Si as h,
  TD as i,
  jD as j,
  or as u
};
