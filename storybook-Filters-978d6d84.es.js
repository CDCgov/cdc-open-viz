import { r as C, R as N } from "./storybook-index-45401197.es.js";
import { r as vr, R as hu } from "./storybook-index-633d712d.es.js";
import { _ as gt } from "./storybook-extends-70f3d2a3.es.js";
import { g as gu } from "./storybook-_commonjsHelpers-c5d32002.es.js";
import { f as Do, m as Eu } from "./storybook-Icon-9a8d8f01.es.js";
import { j as S, a as me, F as Cr } from "./storybook-jsx-runtime-36872362.es.js";
import { _ as Et } from "./storybook-lodash-c15d8e1c.es.js";
import { B as bu } from "./storybook-Button-d74e310e.es.js";
import { M as yu } from "./storybook-MultiSelect-d9d792fe.es.js";
import { N as vu } from "./storybook-NestedDropdown-b706d3ab.es.js";
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
function Cu(e) {
  return e && DataView.prototype.isPrototypeOf(e);
}
if (Oe.arrayBuffer)
  var Au = [
    "[object Int8Array]",
    "[object Uint8Array]",
    "[object Uint8ClampedArray]",
    "[object Int16Array]",
    "[object Uint16Array]",
    "[object Int32Array]",
    "[object Uint32Array]",
    "[object Float32Array]",
    "[object Float64Array]"
  ], Fu = ArrayBuffer.isView || function(e) {
    return e && Au.indexOf(Object.prototype.toString.call(e)) > -1;
  };
function At(e) {
  if (typeof e != "string" && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || e === "")
    throw new TypeError('Invalid character in header field name: "' + e + '"');
  return e.toLowerCase();
}
function Ar(e) {
  return typeof e != "string" && (e = String(e)), e;
}
function Fr(e) {
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
function he(e) {
  this.map = {}, e instanceof he ? e.forEach(function(t, n) {
    this.append(n, t);
  }, this) : Array.isArray(e) ? e.forEach(function(t) {
    if (t.length != 2)
      throw new TypeError("Headers constructor: expected name/value pair to be length 2, found" + t.length);
    this.append(t[0], t[1]);
  }, this) : e && Object.getOwnPropertyNames(e).forEach(function(t) {
    this.append(t, e[t]);
  }, this);
}
he.prototype.append = function(e, t) {
  e = At(e), t = Ar(t);
  var n = this.map[e];
  this.map[e] = n ? n + ", " + t : t;
};
he.prototype.delete = function(e) {
  delete this.map[At(e)];
};
he.prototype.get = function(e) {
  return e = At(e), this.has(e) ? this.map[e] : null;
};
he.prototype.has = function(e) {
  return this.map.hasOwnProperty(At(e));
};
he.prototype.set = function(e, t) {
  this.map[At(e)] = Ar(t);
};
he.prototype.forEach = function(e, t) {
  for (var n in this.map)
    this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this);
};
he.prototype.keys = function() {
  var e = [];
  return this.forEach(function(t, n) {
    e.push(n);
  }), Fr(e);
};
he.prototype.values = function() {
  var e = [];
  return this.forEach(function(t) {
    e.push(t);
  }), Fr(e);
};
he.prototype.entries = function() {
  var e = [];
  return this.forEach(function(t, n) {
    e.push([n, t]);
  }), Fr(e);
};
Oe.iterable && (he.prototype[Symbol.iterator] = he.prototype.entries);
function In(e) {
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
function wu(e) {
  var t = new FileReader(), n = Ni(t);
  return t.readAsArrayBuffer(e), n;
}
function Su(e) {
  var t = new FileReader(), n = Ni(t), r = /charset=([A-Za-z0-9_-]+)/.exec(e.type), o = r ? r[1] : "utf-8";
  return t.readAsText(e, o), n;
}
function Nu(e) {
  for (var t = new Uint8Array(e), n = new Array(t.length), r = 0; r < t.length; r++)
    n[r] = String.fromCharCode(t[r]);
  return n.join("");
}
function mo(e) {
  if (e.slice)
    return e.slice(0);
  var t = new Uint8Array(e.byteLength);
  return t.set(new Uint8Array(e)), t.buffer;
}
function Oi() {
  return this.bodyUsed = !1, this._initBody = function(e) {
    this.bodyUsed = this.bodyUsed, this._bodyInit = e, e ? typeof e == "string" ? this._bodyText = e : Oe.blob && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : Oe.formData && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : Oe.searchParams && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : Oe.arrayBuffer && Oe.blob && Cu(e) ? (this._bodyArrayBuffer = mo(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : Oe.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(e) || Fu(e)) ? this._bodyArrayBuffer = mo(e) : this._bodyText = e = Object.prototype.toString.call(e) : (this._noBody = !0, this._bodyText = ""), this.headers.get("content-type") || (typeof e == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : Oe.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
  }, Oe.blob && (this.blob = function() {
    var e = In(this);
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
      var e = In(this);
      return e || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(
        this._bodyArrayBuffer.buffer.slice(
          this._bodyArrayBuffer.byteOffset,
          this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength
        )
      ) : Promise.resolve(this._bodyArrayBuffer));
    } else {
      if (Oe.blob)
        return this.blob().then(wu);
      throw new Error("could not read as ArrayBuffer");
    }
  }, this.text = function() {
    var e = In(this);
    if (e)
      return e;
    if (this._bodyBlob)
      return Su(this._bodyBlob);
    if (this._bodyArrayBuffer)
      return Promise.resolve(Nu(this._bodyArrayBuffer));
    if (this._bodyFormData)
      throw new Error("could not read FormData body as text");
    return Promise.resolve(this._bodyText);
  }, Oe.formData && (this.formData = function() {
    return this.text().then(xu);
  }), this.json = function() {
    return this.text().then(JSON.parse);
  }, this;
}
var Ou = ["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT", "TRACE"];
function Bu(e) {
  var t = e.toUpperCase();
  return Ou.indexOf(t) > -1 ? t : e;
}
function pt(e, t) {
  if (!(this instanceof pt))
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
  t = t || {};
  var n = t.body;
  if (e instanceof pt) {
    if (e.bodyUsed)
      throw new TypeError("Already read");
    this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new he(e.headers)), this.method = e.method, this.mode = e.mode, this.signal = e.signal, !n && e._bodyInit != null && (n = e._bodyInit, e.bodyUsed = !0);
  } else
    this.url = String(e);
  if (this.credentials = t.credentials || this.credentials || "same-origin", (t.headers || !this.headers) && (this.headers = new he(t.headers)), this.method = Bu(t.method || this.method || "GET"), this.mode = t.mode || this.mode || null, this.signal = t.signal || this.signal || function() {
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
function xu(e) {
  var t = new FormData();
  return e.trim().split("&").forEach(function(n) {
    if (n) {
      var r = n.split("="), o = r.shift().replace(/\+/g, " "), i = r.join("=").replace(/\+/g, " ");
      t.append(decodeURIComponent(o), decodeURIComponent(i));
    }
  }), t;
}
function Iu(e) {
  var t = new he(), n = e.replace(/\r?\n[\t ]+/g, " ");
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
  this.ok = this.status >= 200 && this.status < 300, this.statusText = t.statusText === void 0 ? "" : "" + t.statusText, this.headers = new he(t.headers), this.url = t.url || "", this._initBody(e);
}
Oi.call(Je.prototype);
Je.prototype.clone = function() {
  return new Je(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new he(this.headers),
    url: this.url
  });
};
Je.error = function() {
  var e = new Je(null, { status: 200, statusText: "" });
  return e.ok = !1, e.status = 0, e.type = "error", e;
};
var _u = [301, 302, 303, 307, 308];
Je.redirect = function(e, t) {
  if (_u.indexOf(t) === -1)
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
        headers: Iu(i.getAllResponseHeaders() || "")
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
    if (i.open(o.method, u(o.url), !0), o.credentials === "include" ? i.withCredentials = !0 : o.credentials === "omit" && (i.withCredentials = !1), "responseType" in i && (Oe.blob ? i.responseType = "blob" : Oe.arrayBuffer && (i.responseType = "arraybuffer")), t && typeof t.headers == "object" && !(t.headers instanceof he || Ae.Headers && t.headers instanceof Ae.Headers)) {
      var a = [];
      Object.getOwnPropertyNames(t.headers).forEach(function(l) {
        a.push(At(l)), i.setRequestHeader(l, Ar(t.headers[l]));
      }), o.headers.forEach(function(l, f) {
        a.indexOf(f) === -1 && i.setRequestHeader(f, l);
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
Ae.fetch || (Ae.fetch = Bi, Ae.Headers = he, Ae.Request = pt, Ae.Response = Je);
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
function Pu(e, t) {
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
function Ru(e) {
  var t = Pu(e, "string");
  return Lt(t) == "symbol" ? t : String(t);
}
function Tu(e, t, n) {
  return t = Ru(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function ho(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function go(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ho(Object(n), !0).forEach(function(r) {
      Tu(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ho(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function _e(e) {
  return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. ";
}
var Eo = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}(), _n = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
}, bo = {
  INIT: "@@redux/INIT" + _n(),
  REPLACE: "@@redux/REPLACE" + _n(),
  PROBE_UNKNOWN_ACTION: function() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + _n();
  }
};
function Vu(e) {
  if (typeof e != "object" || e === null)
    return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function Lu(e) {
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
  if (Mu(e))
    return "date";
  if ($u(e))
    return "error";
  var n = ju(e);
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
function ju(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function $u(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function Mu(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function at(e) {
  var t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = Lu(e)), t;
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
  var o = e, i = t, s = [], u = s, a = !1;
  function l() {
    u === s && (u = s.slice());
  }
  function f() {
    if (a)
      throw new Error(process.env.NODE_ENV === "production" ? _e(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return i;
  }
  function c(m) {
    if (typeof m != "function")
      throw new Error(process.env.NODE_ENV === "production" ? _e(4) : "Expected the listener to be a function. Instead, received: '" + at(m) + "'");
    if (a)
      throw new Error(process.env.NODE_ENV === "production" ? _e(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    var D = !0;
    return l(), u.push(m), function() {
      if (D) {
        if (a)
          throw new Error(process.env.NODE_ENV === "production" ? _e(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        D = !1, l();
        var A = u.indexOf(m);
        u.splice(A, 1), s = null;
      }
    };
  }
  function d(m) {
    if (!Vu(m))
      throw new Error(process.env.NODE_ENV === "production" ? _e(7) : "Actions must be plain objects. Instead, the actual type was: '" + at(m) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    if (typeof m.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? _e(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (a)
      throw new Error(process.env.NODE_ENV === "production" ? _e(9) : "Reducers may not dispatch actions.");
    try {
      a = !0, i = o(i, m);
    } finally {
      a = !1;
    }
    for (var D = s = u, v = 0; v < D.length; v++) {
      var A = D[v];
      A();
    }
    return m;
  }
  function p(m) {
    if (typeof m != "function")
      throw new Error(process.env.NODE_ENV === "production" ? _e(10) : "Expected the nextReducer to be a function. Instead, received: '" + at(m));
    o = m, d({
      type: bo.REPLACE
    });
  }
  function E() {
    var m, D = c;
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
        function y() {
          A.next && A.next(f());
        }
        y();
        var b = D(y);
        return {
          unsubscribe: b
        };
      }
    }, m[Eo] = function() {
      return this;
    }, m;
  }
  return d({
    type: bo.INIT
  }), r = {
    dispatch: d,
    subscribe: c,
    getState: f,
    replaceReducer: p
  }, r[Eo] = E, r;
}
function yo(e, t) {
  return function() {
    return t(e.apply(this, arguments));
  };
}
function vo(e, t) {
  if (typeof e == "function")
    return yo(e, t);
  if (typeof e != "object" || e === null)
    throw new Error(process.env.NODE_ENV === "production" ? _e(16) : "bindActionCreators expected an object or a function, but instead received: '" + at(e) + `'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`);
  var n = {};
  for (var r in e) {
    var o = e[r];
    typeof o == "function" && (n[r] = yo(o, t));
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
function ku() {
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
      }, u = t.map(function(a) {
        return a(s);
      });
      return i = _i.apply(void 0, u)(o.dispatch), go(go({}, o), {}, {
        dispatch: i
      });
    };
  };
}
var sr = { exports: {} }, Pn = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Co;
function Gu() {
  if (Co)
    return Pn;
  Co = 1;
  var e = C;
  function t(c, d) {
    return c === d && (c !== 0 || 1 / c === 1 / d) || c !== c && d !== d;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useState, o = e.useEffect, i = e.useLayoutEffect, s = e.useDebugValue;
  function u(c, d) {
    var p = d(), E = r({ inst: { value: p, getSnapshot: d } }), m = E[0].inst, D = E[1];
    return i(function() {
      m.value = p, m.getSnapshot = d, a(m) && D({ inst: m });
    }, [c, p, d]), o(function() {
      return a(m) && D({ inst: m }), c(function() {
        a(m) && D({ inst: m });
      });
    }, [c]), s(p), p;
  }
  function a(c) {
    var d = c.getSnapshot;
    c = c.value;
    try {
      var p = d();
      return !n(c, p);
    } catch {
      return !0;
    }
  }
  function l(c, d) {
    return d();
  }
  var f = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? l : u;
  return Pn.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : f, Pn;
}
var Rn = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ao;
function Wu() {
  return Ao || (Ao = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = C, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function n(y) {
      {
        for (var b = arguments.length, g = new Array(b > 1 ? b - 1 : 0), w = 1; w < b; w++)
          g[w - 1] = arguments[w];
        r("error", y, g);
      }
    }
    function r(y, b, g) {
      {
        var w = t.ReactDebugCurrentFrame, B = w.getStackAddendum();
        B !== "" && (b += "%s", g = g.concat([B]));
        var L = g.map(function(j) {
          return String(j);
        });
        L.unshift("Warning: " + b), Function.prototype.apply.call(console[y], console, L);
      }
    }
    function o(y, b) {
      return y === b && (y !== 0 || 1 / y === 1 / b) || y !== y && b !== b;
    }
    var i = typeof Object.is == "function" ? Object.is : o, s = e.useState, u = e.useEffect, a = e.useLayoutEffect, l = e.useDebugValue, f = !1, c = !1;
    function d(y, b, g) {
      f || e.startTransition !== void 0 && (f = !0, n("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var w = b();
      if (!c) {
        var B = b();
        i(w, B) || (n("The result of getSnapshot should be cached to avoid an infinite loop"), c = !0);
      }
      var L = s({
        inst: {
          value: w,
          getSnapshot: b
        }
      }), j = L[0].inst, M = L[1];
      return a(function() {
        j.value = w, j.getSnapshot = b, p(j) && M({
          inst: j
        });
      }, [y, w, b]), u(function() {
        p(j) && M({
          inst: j
        });
        var x = function() {
          p(j) && M({
            inst: j
          });
        };
        return y(x);
      }, [y]), l(w), w;
    }
    function p(y) {
      var b = y.getSnapshot, g = y.value;
      try {
        var w = b();
        return !i(g, w);
      } catch {
        return !0;
      }
    }
    function E(y, b, g) {
      return b();
    }
    var m = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", D = !m, v = D ? E : d, A = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : v;
    Rn.useSyncExternalStore = A, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Rn;
}
process.env.NODE_ENV === "production" ? sr.exports = Gu() : sr.exports = Wu();
var wr = sr.exports, Tn = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fo;
function Uu() {
  if (Fo)
    return Tn;
  Fo = 1;
  var e = C, t = wr;
  function n(l, f) {
    return l === f && (l !== 0 || 1 / l === 1 / f) || l !== l && f !== f;
  }
  var r = typeof Object.is == "function" ? Object.is : n, o = t.useSyncExternalStore, i = e.useRef, s = e.useEffect, u = e.useMemo, a = e.useDebugValue;
  return Tn.useSyncExternalStoreWithSelector = function(l, f, c, d, p) {
    var E = i(null);
    if (E.current === null) {
      var m = { hasValue: !1, value: null };
      E.current = m;
    } else
      m = E.current;
    E = u(function() {
      function v(w) {
        if (!A) {
          if (A = !0, y = w, w = d(w), p !== void 0 && m.hasValue) {
            var B = m.value;
            if (p(B, w))
              return b = B;
          }
          return b = w;
        }
        if (B = b, r(y, w))
          return B;
        var L = d(w);
        return p !== void 0 && p(B, L) ? B : (y = w, b = L);
      }
      var A = !1, y, b, g = c === void 0 ? null : c;
      return [function() {
        return v(f());
      }, g === null ? void 0 : function() {
        return v(g());
      }];
    }, [f, c, d, p]);
    var D = o(l, E[0], E[1]);
    return s(function() {
      m.hasValue = !0, m.value = D;
    }, [D]), a(D), D;
  }, Tn;
}
var Vn = {};
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
function zu() {
  return wo || (wo = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = C, t = wr;
    function n(f, c) {
      return f === c && (f !== 0 || 1 / f === 1 / c) || f !== f && c !== c;
    }
    var r = typeof Object.is == "function" ? Object.is : n, o = t.useSyncExternalStore, i = e.useRef, s = e.useEffect, u = e.useMemo, a = e.useDebugValue;
    function l(f, c, d, p, E) {
      var m = i(null), D;
      m.current === null ? (D = {
        hasValue: !1,
        value: null
      }, m.current = D) : D = m.current;
      var v = u(function() {
        var g = !1, w, B, L = function(P) {
          if (!g) {
            g = !0, w = P;
            var $ = p(P);
            if (E !== void 0 && D.hasValue) {
              var k = D.value;
              if (E(k, $))
                return B = k, k;
            }
            return B = $, $;
          }
          var z = w, J = B;
          if (r(z, P))
            return J;
          var X = p(P);
          return E !== void 0 && E(J, X) ? J : (w = P, B = X, X);
        }, j = d === void 0 ? null : d, M = function() {
          return L(c());
        }, x = j === null ? void 0 : function() {
          return L(j());
        };
        return [M, x];
      }, [c, d, p, E]), A = v[0], y = v[1], b = o(f, A, y);
      return s(function() {
        D.hasValue = !0, D.value = b;
      }, [b]), a(b), b;
    }
    Vn.useSyncExternalStoreWithSelector = l, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Vn;
}
process.env.NODE_ENV === "production" ? Uu() : zu();
function Hu(e) {
  e();
}
let Pi = Hu;
const qu = (e) => Pi = e, Yu = () => Pi, So = Symbol.for("react-redux-context"), No = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function Ku() {
  var e;
  if (!C.createContext)
    return {};
  const t = (e = No[So]) != null ? e : No[So] = /* @__PURE__ */ new Map();
  let n = t.get(C.createContext);
  return n || (n = C.createContext(null), process.env.NODE_ENV !== "production" && (n.displayName = "ReactRedux"), t.set(C.createContext, n)), n;
}
const Ri = /* @__PURE__ */ Ku(), Ju = () => {
  throw new Error("uSES not initialized!");
};
var ur = { exports: {} }, Q = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oo;
function Xu() {
  if (Oo)
    return Q;
  Oo = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, a = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, E = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, D = e ? Symbol.for("react.fundamental") : 60117, v = e ? Symbol.for("react.responder") : 60118, A = e ? Symbol.for("react.scope") : 60119;
  function y(g) {
    if (typeof g == "object" && g !== null) {
      var w = g.$$typeof;
      switch (w) {
        case t:
          switch (g = g.type, g) {
            case a:
            case l:
            case r:
            case i:
            case o:
            case c:
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
                  return w;
              }
          }
        case n:
          return w;
      }
    }
  }
  function b(g) {
    return y(g) === l;
  }
  return Q.AsyncMode = a, Q.ConcurrentMode = l, Q.ContextConsumer = u, Q.ContextProvider = s, Q.Element = t, Q.ForwardRef = f, Q.Fragment = r, Q.Lazy = E, Q.Memo = p, Q.Portal = n, Q.Profiler = i, Q.StrictMode = o, Q.Suspense = c, Q.isAsyncMode = function(g) {
    return b(g) || y(g) === a;
  }, Q.isConcurrentMode = b, Q.isContextConsumer = function(g) {
    return y(g) === u;
  }, Q.isContextProvider = function(g) {
    return y(g) === s;
  }, Q.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === t;
  }, Q.isForwardRef = function(g) {
    return y(g) === f;
  }, Q.isFragment = function(g) {
    return y(g) === r;
  }, Q.isLazy = function(g) {
    return y(g) === E;
  }, Q.isMemo = function(g) {
    return y(g) === p;
  }, Q.isPortal = function(g) {
    return y(g) === n;
  }, Q.isProfiler = function(g) {
    return y(g) === i;
  }, Q.isStrictMode = function(g) {
    return y(g) === o;
  }, Q.isSuspense = function(g) {
    return y(g) === c;
  }, Q.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === r || g === l || g === i || g === o || g === c || g === d || typeof g == "object" && g !== null && (g.$$typeof === E || g.$$typeof === p || g.$$typeof === s || g.$$typeof === u || g.$$typeof === f || g.$$typeof === D || g.$$typeof === v || g.$$typeof === A || g.$$typeof === m);
  }, Q.typeOf = y, Q;
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
var Bo;
function Qu() {
  return Bo || (Bo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, a = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, E = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, D = e ? Symbol.for("react.fundamental") : 60117, v = e ? Symbol.for("react.responder") : 60118, A = e ? Symbol.for("react.scope") : 60119;
    function y(O) {
      return typeof O == "string" || typeof O == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      O === r || O === l || O === i || O === o || O === c || O === d || typeof O == "object" && O !== null && (O.$$typeof === E || O.$$typeof === p || O.$$typeof === s || O.$$typeof === u || O.$$typeof === f || O.$$typeof === D || O.$$typeof === v || O.$$typeof === A || O.$$typeof === m);
    }
    function b(O) {
      if (typeof O == "object" && O !== null) {
        var le = O.$$typeof;
        switch (le) {
          case t:
            var _ = O.type;
            switch (_) {
              case a:
              case l:
              case r:
              case i:
              case o:
              case c:
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
                    return le;
                }
            }
          case n:
            return le;
        }
      }
    }
    var g = a, w = l, B = u, L = s, j = t, M = f, x = r, P = E, $ = p, k = n, z = i, J = o, X = c, K = !1;
    function ie(O) {
      return K || (K = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), De(O) || b(O) === a;
    }
    function De(O) {
      return b(O) === l;
    }
    function ve(O) {
      return b(O) === u;
    }
    function fe(O) {
      return b(O) === s;
    }
    function de(O) {
      return typeof O == "object" && O !== null && O.$$typeof === t;
    }
    function I(O) {
      return b(O) === f;
    }
    function U(O) {
      return b(O) === r;
    }
    function ce(O) {
      return b(O) === E;
    }
    function Ce(O) {
      return b(O) === p;
    }
    function H(O) {
      return b(O) === n;
    }
    function ne(O) {
      return b(O) === i;
    }
    function ge(O) {
      return b(O) === o;
    }
    function xe(O) {
      return b(O) === c;
    }
    Z.AsyncMode = g, Z.ConcurrentMode = w, Z.ContextConsumer = B, Z.ContextProvider = L, Z.Element = j, Z.ForwardRef = M, Z.Fragment = x, Z.Lazy = P, Z.Memo = $, Z.Portal = k, Z.Profiler = z, Z.StrictMode = J, Z.Suspense = X, Z.isAsyncMode = ie, Z.isConcurrentMode = De, Z.isContextConsumer = ve, Z.isContextProvider = fe, Z.isElement = de, Z.isForwardRef = I, Z.isFragment = U, Z.isLazy = ce, Z.isMemo = Ce, Z.isPortal = H, Z.isProfiler = ne, Z.isStrictMode = ge, Z.isSuspense = xe, Z.isValidElementType = y, Z.typeOf = b;
  }()), Z;
}
process.env.NODE_ENV === "production" ? ur.exports = Xu() : ur.exports = Qu();
var Zu = ur.exports, Sr = Zu, ea = {
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
}, ta = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, na = {
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
}, Nr = {};
Nr[Sr.ForwardRef] = na;
Nr[Sr.Memo] = Ti;
function xo(e) {
  return Sr.isMemo(e) ? Ti : Nr[e.$$typeof] || ea;
}
var ra = Object.defineProperty, oa = Object.getOwnPropertyNames, Io = Object.getOwnPropertySymbols, ia = Object.getOwnPropertyDescriptor, sa = Object.getPrototypeOf, _o = Object.prototype;
function Vi(e, t, n) {
  if (typeof t != "string") {
    if (_o) {
      var r = sa(t);
      r && r !== _o && Vi(e, r, n);
    }
    var o = oa(t);
    Io && (o = o.concat(Io(t)));
    for (var i = xo(e), s = xo(t), u = 0; u < o.length; ++u) {
      var a = o[u];
      if (!ta[a] && !(n && n[a]) && !(s && s[a]) && !(i && i[a])) {
        var l = ia(t, a);
        try {
          ra(e, a, l);
        } catch {
        }
      }
    }
  }
  return e;
}
var ua = Vi;
const Po = /* @__PURE__ */ gu(ua);
var ar = { exports: {} }, ee = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ro;
function aa() {
  if (Ro)
    return ee;
  Ro = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), u = Symbol.for("react.server_context"), a = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), E;
  E = Symbol.for("react.module.reference");
  function m(D) {
    if (typeof D == "object" && D !== null) {
      var v = D.$$typeof;
      switch (v) {
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
                case a:
                case d:
                case c:
                case i:
                  return D;
                default:
                  return v;
              }
          }
        case t:
          return v;
      }
    }
  }
  return ee.ContextConsumer = s, ee.ContextProvider = i, ee.Element = e, ee.ForwardRef = a, ee.Fragment = n, ee.Lazy = d, ee.Memo = c, ee.Portal = t, ee.Profiler = o, ee.StrictMode = r, ee.Suspense = l, ee.SuspenseList = f, ee.isAsyncMode = function() {
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
    return m(D) === a;
  }, ee.isFragment = function(D) {
    return m(D) === n;
  }, ee.isLazy = function(D) {
    return m(D) === d;
  }, ee.isMemo = function(D) {
    return m(D) === c;
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
    return typeof D == "string" || typeof D == "function" || D === n || D === o || D === r || D === l || D === f || D === p || typeof D == "object" && D !== null && (D.$$typeof === d || D.$$typeof === c || D.$$typeof === i || D.$$typeof === s || D.$$typeof === a || D.$$typeof === E || D.getModuleId !== void 0);
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
var To;
function ca() {
  return To || (To = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), u = Symbol.for("react.server_context"), a = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), E = !1, m = !1, D = !1, v = !1, A = !1, y;
    y = Symbol.for("react.module.reference");
    function b(_) {
      return !!(typeof _ == "string" || typeof _ == "function" || _ === n || _ === o || A || _ === r || _ === l || _ === f || v || _ === p || E || m || D || typeof _ == "object" && _ !== null && (_.$$typeof === d || _.$$typeof === c || _.$$typeof === i || _.$$typeof === s || _.$$typeof === a || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      _.$$typeof === y || _.getModuleId !== void 0));
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
                  case a:
                  case d:
                  case c:
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
    var w = s, B = i, L = e, j = a, M = n, x = d, P = c, $ = t, k = o, z = r, J = l, X = f, K = !1, ie = !1;
    function De(_) {
      return K || (K = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ve(_) {
      return ie || (ie = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function fe(_) {
      return g(_) === s;
    }
    function de(_) {
      return g(_) === i;
    }
    function I(_) {
      return typeof _ == "object" && _ !== null && _.$$typeof === e;
    }
    function U(_) {
      return g(_) === a;
    }
    function ce(_) {
      return g(_) === n;
    }
    function Ce(_) {
      return g(_) === d;
    }
    function H(_) {
      return g(_) === c;
    }
    function ne(_) {
      return g(_) === t;
    }
    function ge(_) {
      return g(_) === o;
    }
    function xe(_) {
      return g(_) === r;
    }
    function O(_) {
      return g(_) === l;
    }
    function le(_) {
      return g(_) === f;
    }
    te.ContextConsumer = w, te.ContextProvider = B, te.Element = L, te.ForwardRef = j, te.Fragment = M, te.Lazy = x, te.Memo = P, te.Portal = $, te.Profiler = k, te.StrictMode = z, te.Suspense = J, te.SuspenseList = X, te.isAsyncMode = De, te.isConcurrentMode = ve, te.isContextConsumer = fe, te.isContextProvider = de, te.isElement = I, te.isForwardRef = U, te.isFragment = ce, te.isLazy = Ce, te.isMemo = H, te.isPortal = ne, te.isProfiler = ge, te.isStrictMode = xe, te.isSuspense = O, te.isSuspenseList = le, te.isValidElementType = b, te.typeOf = g;
  }()), te;
}
process.env.NODE_ENV === "production" ? ar.exports = aa() : ar.exports = ca();
var Vo = ar.exports;
function Or(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function Ln(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || Or(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else
    throw new Error(`Unexpected value for ${t} in connect.`);
}
function la(e, t, n) {
  Ln(e, "mapStateToProps"), Ln(t, "mapDispatchToProps"), Ln(n, "mergeProps");
}
const da = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function fa(e, t, n, r, {
  areStatesEqual: o,
  areOwnPropsEqual: i,
  areStatePropsEqual: s
}) {
  let u = !1, a, l, f, c, d;
  function p(A, y) {
    return a = A, l = y, f = e(a, l), c = t(r, l), d = n(f, c, l), u = !0, d;
  }
  function E() {
    return f = e(a, l), t.dependsOnOwnProps && (c = t(r, l)), d = n(f, c, l), d;
  }
  function m() {
    return e.dependsOnOwnProps && (f = e(a, l)), t.dependsOnOwnProps && (c = t(r, l)), d = n(f, c, l), d;
  }
  function D() {
    const A = e(a, l), y = !s(A, f);
    return f = A, y && (d = n(f, c, l)), d;
  }
  function v(A, y) {
    const b = !i(y, l), g = !o(A, a, y, l);
    return a = A, l = y, b && g ? E() : b ? m() : g ? D() : d;
  }
  return function(y, b) {
    return u ? v(y, b) : p(y, b);
  };
}
function pa(e, t) {
  let {
    initMapStateToProps: n,
    initMapDispatchToProps: r,
    initMergeProps: o
  } = t, i = xi(t, da);
  const s = n(e, i), u = r(e, i), a = o(e, i);
  return process.env.NODE_ENV !== "production" && la(s, u, a), fa(s, u, a, e, i);
}
function Da(e, t) {
  const n = {};
  for (const r in e) {
    const o = e[r];
    typeof o == "function" && (n[r] = (...i) => t(o(...i)));
  }
  return n;
}
function ma(e) {
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
  ma(e) || Or(`${n}() in ${t} must return a plain object. Instead received ${e}.`);
}
function cr(e) {
  return function(n) {
    const r = e(n);
    function o() {
      return r;
    }
    return o.dependsOnOwnProps = !1, o;
  };
}
function Lo(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function ji(e, t) {
  return function(r, {
    displayName: o
  }) {
    const i = function(u, a) {
      return i.dependsOnOwnProps ? i.mapToProps(u, a) : i.mapToProps(u, void 0);
    };
    return i.dependsOnOwnProps = !0, i.mapToProps = function(u, a) {
      i.mapToProps = e, i.dependsOnOwnProps = Lo(e);
      let l = i(u, a);
      return typeof l == "function" && (i.mapToProps = l, i.dependsOnOwnProps = Lo(l), l = i(u, a)), process.env.NODE_ENV !== "production" && Li(l, o, t), l;
    }, i;
  };
}
function Br(e, t) {
  return (n, r) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${r.wrappedComponentName}.`);
  };
}
function ha(e) {
  return e && typeof e == "object" ? cr((t) => (
    // @ts-ignore
    Da(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    ji(e, "mapDispatchToProps")
  ) : Br(e, "mapDispatchToProps") : cr((t) => ({
    dispatch: t
  }));
}
function ga(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    ji(e, "mapStateToProps")
  ) : Br(e, "mapStateToProps") : cr(() => ({}));
}
function Ea(e, t, n) {
  return gt({}, n, e, t);
}
function ba(e) {
  return function(n, {
    displayName: r,
    areMergedPropsEqual: o
  }) {
    let i = !1, s;
    return function(a, l, f) {
      const c = e(a, l, f);
      return i ? o(c, s) || (s = c) : (i = !0, s = c, process.env.NODE_ENV !== "production" && Li(s, r, "mergeProps")), s;
    };
  };
}
function ya(e) {
  return e ? typeof e == "function" ? ba(e) : Br(e, "mergeProps") : () => Ea;
}
function va() {
  const e = Yu();
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
const jo = {
  notify() {
  },
  get: () => []
};
function $i(e, t) {
  let n, r = jo, o = 0, i = !1;
  function s(m) {
    f();
    const D = r.subscribe(m);
    let v = !1;
    return () => {
      v || (v = !0, D(), c());
    };
  }
  function u() {
    r.notify();
  }
  function a() {
    E.onStateChange && E.onStateChange();
  }
  function l() {
    return i;
  }
  function f() {
    o++, n || (n = t ? t.addNestedSub(a) : e.subscribe(a), r = va());
  }
  function c() {
    o--, n && o === 0 && (n(), n = void 0, r.clear(), r = jo);
  }
  function d() {
    i || (i = !0, f());
  }
  function p() {
    i && (i = !1, c());
  }
  const E = {
    addNestedSub: s,
    notifyNestedSubs: u,
    handleChangeWrapper: a,
    isSubscribed: l,
    trySubscribe: d,
    tryUnsubscribe: p,
    getListeners: () => r
  };
  return E;
}
const Ca = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Dn = Ca ? C.useLayoutEffect : C.useEffect;
function $o(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function jn(e, t) {
  if ($o(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (let o = 0; o < n.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, n[o]) || !$o(e[n[o]], t[n[o]]))
      return !1;
  return !0;
}
const Aa = ["reactReduxForwardedRef"];
let Mi = Ju;
const Fa = (e) => {
  Mi = e;
}, wa = [null, null], Sa = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function Na(e, t, n) {
  Dn(() => e(...t), n);
}
function Oa(e, t, n, r, o, i) {
  e.current = r, n.current = !1, o.current && (o.current = null, i());
}
function Ba(e, t, n, r, o, i, s, u, a, l, f) {
  if (!e)
    return () => {
    };
  let c = !1, d = null;
  const p = () => {
    if (c || !u.current)
      return;
    const m = t.getState();
    let D, v;
    try {
      D = r(m, o.current);
    } catch (A) {
      v = A, d = A;
    }
    v || (d = null), D === i.current ? s.current || l() : (i.current = D, a.current = D, s.current = !0, f());
  };
  return n.onStateChange = p, n.trySubscribe(), p(), () => {
    if (c = !0, n.tryUnsubscribe(), n.onStateChange = null, d)
      throw d;
  };
}
function xa(e, t) {
  return e === t;
}
let Mo = !1;
function ki(e, t, n, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: r,
  areStatesEqual: o = xa,
  areOwnPropsEqual: i = jn,
  areStatePropsEqual: s = jn,
  areMergedPropsEqual: u = jn,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: a = !1,
  // the context consumer to use
  context: l = Ri
} = {}) {
  process.env.NODE_ENV !== "production" && r !== void 0 && !Mo && (Mo = !0, Or('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const f = l, c = ga(e), d = ha(t), p = ya(n), E = !!e;
  return (D) => {
    if (process.env.NODE_ENV !== "production" && !Vo.isValidElementType(D))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${Sa(D)}`);
    const v = D.displayName || D.name || "Component", A = `Connect(${v})`, y = {
      shouldHandleStateChanges: E,
      displayName: A,
      wrappedComponentName: v,
      WrappedComponent: D,
      // @ts-ignore
      initMapStateToProps: c,
      // @ts-ignore
      initMapDispatchToProps: d,
      initMergeProps: p,
      areStatesEqual: o,
      areStatePropsEqual: s,
      areOwnPropsEqual: i,
      areMergedPropsEqual: u
    };
    function b(B) {
      const [L, j, M] = C.useMemo(() => {
        const {
          reactReduxForwardedRef: O
        } = B, le = xi(B, Aa);
        return [B.context, O, le];
      }, [B]), x = C.useMemo(() => L && L.Consumer && // @ts-ignore
      Vo.isContextConsumer(/* @__PURE__ */ C.createElement(L.Consumer, null)) ? L : f, [L, f]), P = C.useContext(x), $ = !!B.store && !!B.store.getState && !!B.store.dispatch, k = !!P && !!P.store;
      if (process.env.NODE_ENV !== "production" && !$ && !k)
        throw new Error(`Could not find "store" in the context of "${A}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${A} in connect options.`);
      const z = $ ? B.store : P.store, J = k ? P.getServerState : z.getState, X = C.useMemo(() => pa(z.dispatch, y), [z]), [K, ie] = C.useMemo(() => {
        if (!E)
          return wa;
        const O = $i(z, $ ? void 0 : P.subscription), le = O.notifyNestedSubs.bind(O);
        return [O, le];
      }, [z, $, P]), De = C.useMemo(() => $ ? P : gt({}, P, {
        subscription: K
      }), [$, P, K]), ve = C.useRef(), fe = C.useRef(M), de = C.useRef(), I = C.useRef(!1);
      C.useRef(!1);
      const U = C.useRef(!1), ce = C.useRef();
      Dn(() => (U.current = !0, () => {
        U.current = !1;
      }), []);
      const Ce = C.useMemo(() => () => de.current && M === fe.current ? de.current : X(z.getState(), M), [z, M]), H = C.useMemo(() => (le) => K ? Ba(
        E,
        z,
        K,
        // @ts-ignore
        X,
        fe,
        ve,
        I,
        U,
        de,
        ie,
        le
      ) : () => {
      }, [K]);
      Na(Oa, [fe, ve, I, M, de, ie]);
      let ne;
      try {
        ne = Mi(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          H,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          Ce,
          J ? () => X(J(), M) : Ce
        );
      } catch (O) {
        throw ce.current && (O.message += `
The error may be correlated with this previous error:
${ce.current.stack}

`), O;
      }
      Dn(() => {
        ce.current = void 0, de.current = void 0, ve.current = ne;
      });
      const ge = C.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ C.createElement(D, gt({}, ne, {
          ref: j
        }))
      ), [j, D, ne]);
      return C.useMemo(() => E ? /* @__PURE__ */ C.createElement(x.Provider, {
        value: De
      }, ge) : ge, [x, ge, De]);
    }
    const w = C.memo(b);
    if (w.WrappedComponent = D, w.displayName = b.displayName = A, a) {
      const L = C.forwardRef(function(M, x) {
        return /* @__PURE__ */ C.createElement(w, gt({}, M, {
          reactReduxForwardedRef: x
        }));
      });
      return L.displayName = A, L.WrappedComponent = D, Po(L, D);
    }
    return Po(w, D);
  };
}
function Ia({
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
  Dn(() => {
    const {
      subscription: l
    } = s;
    return l.onStateChange = l.notifyNestedSubs, l.trySubscribe(), u !== e.getState() && l.notifyNestedSubs(), () => {
      l.tryUnsubscribe(), l.onStateChange = void 0;
    };
  }, [s, u]);
  const a = t || Ri;
  return /* @__PURE__ */ C.createElement(a.Provider, {
    value: s
  }, n);
}
Fa(wr.useSyncExternalStore);
qu(vr.unstable_batchedUpdates);
function _a(e, t) {
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
  })[0], r = C.useRef(!0), o = C.useRef(n), i = r.current || !!(t && o.current.inputs && _a(t, o.current.inputs)), s = i ? o.current : {
    inputs: t,
    result: e()
  };
  return C.useEffect(function() {
    r.current = !1, o.current = s;
  }, [s]), s.result;
}
function Pa(e, t) {
  return Gi(function() {
    return e;
  }, t);
}
var Y = Gi, R = Pa, Ra = process.env.NODE_ENV === "production", $n = "Invariant failed";
function ko(e, t) {
  if (!e) {
    if (Ra)
      throw new Error($n);
    var n = typeof t == "function" ? t() : t, r = n ? "".concat($n, ": ").concat(n) : $n;
    throw new Error(r);
  }
}
var ze = function(t) {
  var n = t.top, r = t.right, o = t.bottom, i = t.left, s = r - i, u = o - n, a = {
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
  return a;
}, xr = function(t, n) {
  return {
    top: t.top - n.top,
    left: t.left - n.left,
    bottom: t.bottom + n.bottom,
    right: t.right + n.right
  };
}, Go = function(t, n) {
  return {
    top: t.top + n.top,
    left: t.left + n.left,
    bottom: t.bottom - n.bottom,
    right: t.right - n.right
  };
}, Ta = function(t, n) {
  return {
    top: t.top + n.y,
    left: t.left + n.x,
    bottom: t.bottom + n.y,
    right: t.right + n.x
  };
}, Mn = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, Ir = function(t) {
  var n = t.borderBox, r = t.margin, o = r === void 0 ? Mn : r, i = t.border, s = i === void 0 ? Mn : i, u = t.padding, a = u === void 0 ? Mn : u, l = ze(xr(n, o)), f = ze(Go(n, s)), c = ze(Go(f, a));
  return {
    marginBox: l,
    borderBox: ze(n),
    paddingBox: f,
    contentBox: c,
    margin: o,
    border: s,
    padding: a
  };
}, Ge = function(t) {
  var n = t.slice(0, -2), r = t.slice(-2);
  if (r !== "px")
    return 0;
  var o = Number(n);
  return isNaN(o) && (process.env.NODE_ENV !== "production" ? ko(!1, "Could not parse value [raw: " + t + ", without suffix: " + n + "]") : ko(!1)), o;
}, Va = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, mn = function(t, n) {
  var r = t.borderBox, o = t.border, i = t.margin, s = t.padding, u = Ta(r, n);
  return Ir({
    borderBox: u,
    border: o,
    margin: i,
    padding: s
  });
}, hn = function(t, n) {
  return n === void 0 && (n = Va()), mn(t, n);
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
  return Ir({
    borderBox: t,
    margin: r,
    padding: o,
    border: i
  });
}, Ui = function(t) {
  var n = t.getBoundingClientRect(), r = window.getComputedStyle(t);
  return Wi(n, r);
}, Wo = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function La(e, t) {
  return !!(e === t || Wo(e) && Wo(t));
}
function ja(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (!La(e[n], t[n]))
      return !1;
  return !0;
}
function be(e, t) {
  t === void 0 && (t = ja);
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
var $a = function(t) {
  var n = [], r = null, o = function() {
    for (var s = arguments.length, u = new Array(s), a = 0; a < s; a++)
      u[a] = arguments[a];
    n = u, !r && (r = requestAnimationFrame(function() {
      r = null, t.apply(void 0, n);
    }));
  };
  return o.cancel = function() {
    r && (cancelAnimationFrame(r), r = null);
  }, o;
};
const jt = $a, Ma = process.env.NODE_ENV === "production", ka = /[ \t]{2,}/g, Ga = /^[ \t]*/gm, Uo = (e) => e.replace(ka, " ").replace(Ga, "").trim(), Wa = (e) => Uo(`
  %c@hello-pangea/dnd

  %c${Uo(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), Ua = (e) => [Wa(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], za = "__@hello-pangea/dnd-disable-dev-warnings";
function zi(e, t) {
  Ma || typeof window < "u" && window[za] || console[e](...Ua(t));
}
const oe = zi.bind(null, "warn"), lr = zi.bind(null, "error");
function tt() {
}
function Ha(e, t) {
  return {
    ...e,
    ...t
  };
}
function We(e, t, n) {
  const r = t.map((o) => {
    const i = Ha(n, o.options);
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
const qa = process.env.NODE_ENV === "production", zo = "Invariant failed";
class $t extends Error {
}
$t.prototype.toString = function() {
  return this.message;
};
function h(e, t) {
  if (!e)
    throw qa ? new $t(zo) : new $t(`${zo}: ${t || ""}`);
}
class Ya extends N.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = tt, this.onWindowError = (n) => {
      const r = this.getCallbacks();
      r.isDragging() && (r.tryAbort(), process.env.NODE_ENV !== "production" && oe(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const o = n.error;
      o instanceof $t && (n.preventDefault(), process.env.NODE_ENV !== "production" && lr(o.message));
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
      process.env.NODE_ENV !== "production" && lr(t.message), this.setState({});
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
const Ka = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`, gn = (e) => e + 1, Ja = (e) => `
  You have lifted an item in position ${gn(e.source.index)}
`, Hi = (e, t) => {
  const n = e.droppableId === t.droppableId, r = gn(e.index), o = gn(t.index);
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
    `, Xa = (e) => {
  const t = e.destination;
  if (t)
    return Hi(e.source, t);
  const n = e.combine;
  return n ? qi(e.draggableId, e.source, n) : "You are over an area that cannot be dropped on";
}, Ho = (e) => `
  The item has returned to its starting position
  of ${gn(e.index)}
`, Qa = (e) => {
  if (e.reason === "CANCEL")
    return `
      Movement cancelled.
      ${Ho(e.source)}
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
    ${Ho(e.source)}
  `;
}, Za = {
  dragHandleUsageInstructions: Ka,
  onDragStart: Ja,
  onDragUpdate: Xa,
  onDragEnd: Qa
};
var dn = Za;
const ye = {
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
}, Mt = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2), qo = (e, t) => Math.min(...t.map((n) => Mt(e, n))), Yi = (e) => (t) => ({
  x: e(t.x),
  y: e(t.y)
});
var ec = (e, t) => {
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
}), Yo = (e) => [{
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
}], tc = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, nc = (e, t) => t ? qt(e, t.scroll.diff.displacement) : e, rc = (e, t, n) => n && n.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + n.increasedBy[t.line]
} : e, oc = (e, t) => t && t.shouldClipSubject ? ec(t.pageMarginBox, e) : ze(e);
var bt = ({
  page: e,
  withPlaceholder: t,
  axis: n,
  frame: r
}) => {
  const o = nc(e.marginBox, r), i = rc(o, n, t), s = oc(i, r);
  return {
    page: e,
    withPlaceholder: t,
    active: s
  };
}, _r = (e, t) => {
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
const Ki = be((e) => e.reduce((t, n) => (t[n.descriptor.id] = n, t), {})), Ji = be((e) => e.reduce((t, n) => (t[n.descriptor.id] = n, t), {})), Fn = be((e) => Object.values(e)), ic = be((e) => Object.values(e));
var mt = be((e, t) => ic(t).filter((r) => e === r.descriptor.droppableId).sort((r, o) => r.descriptor.index - o.descriptor.index));
function Pr(e) {
  return e.at && e.at.type === "REORDER" ? e.at.destination : null;
}
function wn(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
var Sn = be((e, t) => t.filter((n) => n.descriptor.id !== e.descriptor.id)), sc = ({
  isMovingForward: e,
  draggable: t,
  destination: n,
  insideDestination: r,
  previousImpact: o
}) => {
  if (!n.isCombineEnabled || !Pr(o))
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
  const u = o.displaced.all, a = u.length ? u[0] : null;
  if (e)
    return a ? s(a) : null;
  const l = Sn(t, r);
  if (!a) {
    if (!l.length)
      return null;
    const p = l[l.length - 1];
    return s(p.descriptor.id);
  }
  const f = l.findIndex((p) => p.descriptor.id === a);
  f === -1 && (process.env.NODE_ENV !== "production" ? h(!1, "Could not find displaced item in set") : h(!1));
  const c = f - 1;
  if (c < 0)
    return null;
  const d = l[c];
  return s(d.descriptor.id);
}, wt = (e, t) => e.descriptor.droppableId === t.descriptor.id;
const Xi = {
  point: ye,
  value: 0
}, kt = {
  invisible: {},
  visible: {},
  all: []
}, uc = {
  displaced: kt,
  displacedBy: Xi,
  at: null
};
var ac = uc, Ue = (e, t) => (n) => e <= n && n <= t, Qi = (e) => {
  const t = Ue(e.top, e.bottom), n = Ue(e.left, e.right);
  return (r) => {
    if (t(r.top) && t(r.bottom) && n(r.left) && n(r.right))
      return !0;
    const i = t(r.top) || t(r.bottom), s = n(r.left) || n(r.right);
    if (i && s)
      return !0;
    const a = r.top < e.top && r.bottom > e.bottom, l = r.left < e.left && r.right > e.right;
    return a && l ? !0 : a && s || l && i;
  };
}, cc = (e) => {
  const t = Ue(e.top, e.bottom), n = Ue(e.left, e.right);
  return (r) => t(r.top) && t(r.bottom) && n(r.left) && n(r.right);
};
const Rr = {
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
var lc = (e) => (t) => {
  const n = Ue(t.top, t.bottom), r = Ue(t.left, t.right);
  return (o) => e === Rr ? n(o.top) && n(o.bottom) : r(o.left) && r(o.right);
};
const dc = (e, t) => {
  const n = t.frame ? t.frame.scroll.diff.displacement : ye;
  return qt(e, n);
}, fc = (e, t, n) => t.subject.active ? n(t.subject.active)(e) : !1, pc = (e, t, n) => n(t)(e), Tr = ({
  target: e,
  destination: t,
  viewport: n,
  withDroppableDisplacement: r,
  isVisibleThroughFrameFn: o
}) => {
  const i = r ? dc(e, t) : e;
  return fc(i, t, o) && pc(i, n, o);
}, Dc = (e) => Tr({
  ...e,
  isVisibleThroughFrameFn: Qi
}), es = (e) => Tr({
  ...e,
  isVisibleThroughFrameFn: cc
}), mc = (e) => Tr({
  ...e,
  isVisibleThroughFrameFn: lc(e.destination.axis)
}), hc = (e, t, n) => {
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
function gc(e, t) {
  const n = e.page.marginBox, r = {
    top: t.point.y,
    right: 0,
    bottom: 0,
    left: t.point.x
  };
  return ze(xr(n, r));
}
function Gt({
  afterDragging: e,
  destination: t,
  displacedBy: n,
  viewport: r,
  forceShouldAnimate: o,
  last: i
}) {
  return e.reduce(function(u, a) {
    const l = gc(a, n), f = a.descriptor.id;
    if (u.all.push(f), !Dc({
      target: l,
      destination: t,
      viewport: r,
      withDroppableDisplacement: !0
    }))
      return u.invisible[a.descriptor.id] = !0, u;
    const d = hc(f, i, o), p = {
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
function Ec(e, t) {
  if (!e.length)
    return 0;
  const n = e[e.length - 1].descriptor.index;
  return t.inHomeList ? n : n + 1;
}
function Ko({
  insideDestination: e,
  inHomeList: t,
  displacedBy: n,
  destination: r
}) {
  const o = Ec(e, {
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
function En({
  draggable: e,
  insideDestination: t,
  destination: n,
  viewport: r,
  displacedBy: o,
  last: i,
  index: s,
  forceShouldAnimate: u
}) {
  const a = wt(e, n);
  if (s == null)
    return Ko({
      insideDestination: t,
      inHomeList: a,
      displacedBy: o,
      destination: n
    });
  const l = t.find((E) => E.descriptor.index === s);
  if (!l)
    return Ko({
      insideDestination: t,
      inHomeList: a,
      displacedBy: o,
      destination: n
    });
  const f = Sn(e, t), c = t.indexOf(l), d = f.slice(c);
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
var bc = ({
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
}, yc = ({
  isMovingForward: e,
  isInHomeList: t,
  insideDestination: n,
  location: r
}) => {
  if (!n.length)
    return null;
  const o = r.index, i = e ? o + 1 : o - 1, s = n[0].descriptor.index, u = n[n.length - 1].descriptor.index, a = t ? u : u + 1;
  return i < s || i > a ? null : i;
}, vc = ({
  isMovingForward: e,
  isInHomeList: t,
  draggable: n,
  draggables: r,
  destination: o,
  insideDestination: i,
  previousImpact: s,
  viewport: u,
  afterCritical: a
}) => {
  const l = s.at;
  if (l || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot move in direction without previous impact location") : h(!1)), l.type === "REORDER") {
    const c = yc({
      isMovingForward: e,
      isInHomeList: t,
      location: l.destination,
      insideDestination: i
    });
    return c == null ? null : En({
      draggable: n,
      insideDestination: i,
      destination: o,
      viewport: u,
      last: s.displaced,
      displacedBy: s.displacedBy,
      index: c
    });
  }
  const f = bc({
    isMovingForward: e,
    destination: o,
    displaced: s.displaced,
    draggables: r,
    combine: l.combine,
    afterCritical: a
  });
  return f == null ? null : En({
    draggable: n,
    insideDestination: i,
    destination: o,
    viewport: u,
    last: s.displaced,
    displacedBy: s.displacedBy,
    index: f
  });
}, Cc = ({
  displaced: e,
  afterCritical: t,
  combineWith: n,
  displacedBy: r
}) => {
  const o = !!(e.visible[n] || e.invisible[n]);
  return rt(n, t) ? o ? ye : Ft(r.point) : o ? r.point : ye;
}, Ac = ({
  afterCritical: e,
  impact: t,
  draggables: n
}) => {
  const r = wn(t);
  r || (process.env.NODE_ENV, h(!1));
  const o = r.draggableId, i = n[o].page.borderBox.center, s = Cc({
    displaced: t.displaced,
    afterCritical: e,
    combineWith: o,
    displacedBy: t.displacedBy
  });
  return Fe(i, s);
};
const ts = (e, t) => t.margin[e.start] + t.borderBox[e.size] / 2, Fc = (e, t) => t.margin[e.end] + t.borderBox[e.size] / 2, Vr = (e, t, n) => t[e.crossAxisStart] + n.margin[e.crossAxisStart] + n.borderBox[e.crossAxisSize] / 2, Jo = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: n
}) => Dt(e.line, t.marginBox[e.end] + ts(e, n), Vr(e, t.marginBox, n)), Xo = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: n
}) => Dt(e.line, t.marginBox[e.start] - Fc(e, n), Vr(e, t.marginBox, n)), wc = ({
  axis: e,
  moveInto: t,
  isMoving: n
}) => Dt(e.line, t.contentBox[e.start] + ts(e, n), Vr(e, t.contentBox, n));
var Sc = ({
  impact: e,
  draggable: t,
  draggables: n,
  droppable: r,
  afterCritical: o
}) => {
  const i = mt(r.descriptor.id, n), s = t.page, u = r.axis;
  if (!i.length)
    return wc({
      axis: u,
      moveInto: r.page,
      isMoving: s
    });
  const {
    displaced: a,
    displacedBy: l
  } = e, f = a.all[0];
  if (f) {
    const d = n[f];
    if (rt(f, o))
      return Xo({
        axis: u,
        moveRelativeTo: d.page,
        isMoving: s
      });
    const p = mn(d.page, l.point);
    return Xo({
      axis: u,
      moveRelativeTo: p,
      isMoving: s
    });
  }
  const c = i[i.length - 1];
  if (c.descriptor.id === t.descriptor.id)
    return s.borderBox.center;
  if (rt(c.descriptor.id, o)) {
    const d = mn(c.page, Ft(o.displacedBy.point));
    return Jo({
      axis: u,
      moveRelativeTo: d,
      isMoving: s
    });
  }
  return Jo({
    axis: u,
    moveRelativeTo: c.page,
    isMoving: s
  });
}, dr = (e, t) => {
  const n = e.frame;
  return n ? Fe(t, n.scroll.diff.displacement) : t;
};
const Nc = ({
  impact: e,
  draggable: t,
  droppable: n,
  draggables: r,
  afterCritical: o
}) => {
  const i = t.page.borderBox.center, s = e.at;
  return !n || !s ? i : s.type === "REORDER" ? Sc({
    impact: e,
    draggable: t,
    draggables: r,
    droppable: n,
    afterCritical: o
  }) : Ac({
    impact: e,
    draggables: r,
    afterCritical: o
  });
};
var Nn = (e) => {
  const t = Nc(e), n = e.droppable;
  return n ? dr(n, t) : t;
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
function Qo(e, t) {
  return e.map((n) => t[n]);
}
function Oc(e, t) {
  for (let n = 0; n < t.length; n++) {
    const r = t[n].visible[e];
    if (r)
      return r;
  }
  return null;
}
var Bc = ({
  impact: e,
  viewport: t,
  destination: n,
  draggables: r,
  maxScrollChange: o
}) => {
  const i = ns(t, Fe(t.scroll.current, o)), s = n.frame ? _r(n, Fe(n.frame.scroll.current, o)) : n, u = e.displaced, a = Gt({
    afterDragging: Qo(u.all, r),
    destination: n,
    displacedBy: e.displacedBy,
    viewport: i.frame,
    last: u,
    forceShouldAnimate: !1
  }), l = Gt({
    afterDragging: Qo(u.all, r),
    destination: s,
    displacedBy: e.displacedBy,
    viewport: t.frame,
    last: u,
    forceShouldAnimate: !1
  }), f = {}, c = {}, d = [u, a, l];
  return u.all.forEach((E) => {
    const m = Oc(E, d);
    if (m) {
      c[E] = m;
      return;
    }
    f[E] = !0;
  }), {
    ...e,
    displaced: {
      all: u.all,
      invisible: f,
      visible: c
    }
  };
}, xc = (e, t) => Fe(e.scroll.diff.displacement, t), Lr = ({
  pageBorderBoxCenter: e,
  draggable: t,
  viewport: n
}) => {
  const r = xc(n, e), o = je(r, t.page.borderBox.center);
  return Fe(t.client.borderBox.center, o);
}, rs = ({
  draggable: e,
  destination: t,
  newPageBorderBoxCenter: n,
  viewport: r,
  withDroppableDisplacement: o,
  onlyOnMainAxis: i = !1
}) => {
  const s = je(n, e.page.borderBox.center), a = {
    target: qt(e.page.borderBox, s),
    destination: t,
    withDroppableDisplacement: o,
    viewport: r
  };
  return i ? mc(a) : es(a);
}, Ic = ({
  isMovingForward: e,
  draggable: t,
  destination: n,
  draggables: r,
  previousImpact: o,
  viewport: i,
  previousPageBorderBoxCenter: s,
  previousClientSelection: u,
  afterCritical: a
}) => {
  if (!n.isEnabled)
    return null;
  const l = mt(n.descriptor.id, r), f = wt(t, n), c = sc({
    isMovingForward: e,
    draggable: t,
    destination: n,
    insideDestination: l,
    previousImpact: o
  }) || vc({
    isMovingForward: e,
    isInHomeList: f,
    draggable: t,
    draggables: r,
    destination: n,
    insideDestination: l,
    previousImpact: o,
    viewport: i,
    afterCritical: a
  });
  if (!c)
    return null;
  const d = Nn({
    impact: c,
    draggable: t,
    droppable: n,
    draggables: r,
    afterCritical: a
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
      clientSelection: Lr({
        pageBorderBoxCenter: d,
        draggable: t,
        viewport: i
      }),
      impact: c,
      scrollJumpRequest: null
    };
  const E = je(d, s), m = Bc({
    impact: c,
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
var _c = ({
  isMovingForward: e,
  pageBorderBoxCenter: t,
  source: n,
  droppables: r,
  viewport: o
}) => {
  const i = n.subject.active;
  if (!i)
    return null;
  const s = n.axis, u = Ue(i[s.start], i[s.end]), a = Fn(r).filter((f) => f !== n).filter((f) => f.isEnabled).filter((f) => !!f.subject.active).filter((f) => Qi(o.frame)(Ne(f))).filter((f) => {
    const c = Ne(f);
    return e ? i[s.crossAxisEnd] < c[s.crossAxisEnd] : c[s.crossAxisStart] < i[s.crossAxisStart];
  }).filter((f) => {
    const c = Ne(f), d = Ue(c[s.start], c[s.end]);
    return u(c[s.start]) || u(c[s.end]) || d(i[s.start]) || d(i[s.end]);
  }).sort((f, c) => {
    const d = Ne(f)[s.crossAxisStart], p = Ne(c)[s.crossAxisStart];
    return e ? d - p : p - d;
  }).filter((f, c, d) => Ne(f)[s.crossAxisStart] === Ne(d[0])[s.crossAxisStart]);
  if (!a.length)
    return null;
  if (a.length === 1)
    return a[0];
  const l = a.filter((f) => Ue(Ne(f)[s.start], Ne(f)[s.end])(t[s.line]));
  return l.length === 1 ? l[0] : l.length > 1 ? l.sort((f, c) => Ne(f)[s.start] - Ne(c)[s.start])[0] : a.sort((f, c) => {
    const d = qo(t, Yo(Ne(f))), p = qo(t, Yo(Ne(c)));
    return d !== p ? d - p : Ne(f)[s.start] - Ne(c)[s.start];
  })[0];
};
const Zo = (e, t) => {
  const n = e.page.borderBox.center;
  return rt(e.descriptor.id, t) ? je(n, t.displacedBy.point) : n;
}, Pc = (e, t) => {
  const n = e.page.borderBox;
  return rt(e.descriptor.id, t) ? qt(n, Ft(t.displacedBy.point)) : n;
};
var Rc = ({
  pageBorderBoxCenter: e,
  viewport: t,
  destination: n,
  insideDestination: r,
  afterCritical: o
}) => r.filter((s) => es({
  target: Pc(s, o),
  destination: n,
  viewport: t.frame,
  withDroppableDisplacement: !0
})).sort((s, u) => {
  const a = Mt(e, dr(n, Zo(s, o))), l = Mt(e, dr(n, Zo(u, o)));
  return a < l ? -1 : l < a ? 1 : s.descriptor.index - u.descriptor.index;
})[0] || null, Yt = be(function(t, n) {
  const r = n[t.line];
  return {
    value: r,
    point: Dt(t.line, r)
  };
});
const Tc = (e, t, n) => {
  const r = e.axis;
  if (e.descriptor.mode === "virtual")
    return Dt(r.line, t[r.line]);
  const o = e.subject.page.contentBox[r.size], a = mt(e.descriptor.id, n).reduce((l, f) => l + f.client.marginBox[r.size], 0) + t[r.line] - o;
  return a <= 0 ? null : Dt(r.line, a);
}, os = (e, t) => ({
  ...e,
  scroll: {
    ...e.scroll,
    max: t
  }
}), is = (e, t, n) => {
  const r = e.frame;
  wt(t, e) && (process.env.NODE_ENV !== "production" ? h(!1, "Should not add placeholder space to home list") : h(!1)), e.subject.withPlaceholder && (process.env.NODE_ENV !== "production" ? h(!1, "Cannot add placeholder size to a subject when it already has one") : h(!1));
  const o = Yt(e.axis, t.displaceBy).point, i = Tc(e, o, n), s = {
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
  const u = i ? Fe(r.scroll.max, i) : r.scroll.max, a = os(r, u), l = bt({
    page: e.subject.page,
    withPlaceholder: s,
    axis: e.axis,
    frame: a
  });
  return {
    ...e,
    subject: l,
    frame: a
  };
}, Vc = (e) => {
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
var Lc = ({
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
    const c = {
      displaced: kt,
      displacedBy: Xi,
      at: {
        type: "REORDER",
        destination: {
          droppableId: i.descriptor.id,
          index: 0
        }
      }
    }, d = Nn({
      impact: c,
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
    }) ? c : null;
  }
  const a = e[i.axis.line] <= t.page.borderBox.center[i.axis.line], l = (() => {
    const c = t.descriptor.index;
    return t.descriptor.id === r.descriptor.id || a ? c : c + 1;
  })(), f = Yt(i.axis, r.displaceBy);
  return En({
    draggable: r,
    insideDestination: n,
    destination: i,
    viewport: s,
    displacedBy: f,
    last: kt,
    index: l
  });
}, jc = ({
  isMovingForward: e,
  previousPageBorderBoxCenter: t,
  draggable: n,
  isOver: r,
  draggables: o,
  droppables: i,
  viewport: s,
  afterCritical: u
}) => {
  const a = _c({
    isMovingForward: e,
    pageBorderBoxCenter: t,
    source: r,
    droppables: i,
    viewport: s
  });
  if (!a)
    return null;
  const l = mt(a.descriptor.id, o), f = Rc({
    pageBorderBoxCenter: t,
    viewport: s,
    destination: a,
    insideDestination: l,
    afterCritical: u
  }), c = Lc({
    previousPageBorderBoxCenter: t,
    destination: a,
    draggable: n,
    draggables: o,
    moveRelativeTo: f,
    insideDestination: l,
    viewport: s,
    afterCritical: u
  });
  if (!c)
    return null;
  const d = Nn({
    impact: c,
    draggable: n,
    droppable: a,
    draggables: o,
    afterCritical: u
  });
  return {
    clientSelection: Lr({
      pageBorderBoxCenter: d,
      draggable: n,
      viewport: s
    }),
    impact: c,
    scrollJumpRequest: null
  };
}, $e = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const $c = (e, t) => {
  const n = $e(e);
  return n ? t[n] : null;
};
var Mc = ({
  state: e,
  type: t
}) => {
  const n = $c(e.impact, e.dimensions.droppables), r = !!n, o = e.dimensions.droppables[e.critical.droppable.id], i = n || o, s = i.axis.direction, u = s === "vertical" && (t === "MOVE_UP" || t === "MOVE_DOWN") || s === "horizontal" && (t === "MOVE_LEFT" || t === "MOVE_RIGHT");
  if (u && !r)
    return null;
  const a = t === "MOVE_DOWN" || t === "MOVE_RIGHT", l = e.dimensions.draggables[e.critical.draggable.id], f = e.current.page.borderBoxCenter, {
    draggables: c,
    droppables: d
  } = e.dimensions;
  return u ? Ic({
    isMovingForward: a,
    previousPageBorderBoxCenter: f,
    draggable: l,
    destination: i,
    draggables: c,
    viewport: e.viewport,
    previousClientSelection: e.current.client.selection,
    previousImpact: e.impact,
    afterCritical: e.afterCritical
  }) : jc({
    isMovingForward: a,
    previousPageBorderBoxCenter: f,
    draggable: l,
    isOver: i,
    draggables: c,
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
function kc(e, t) {
  return e.left < t.right && e.right > t.left && e.top < t.bottom && e.bottom > t.top;
}
function Gc({
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
function Wc({
  pageBorderBox: e,
  draggable: t,
  droppables: n
}) {
  const r = Fn(n).filter((o) => {
    if (!o.isEnabled)
      return !1;
    const i = o.subject.active;
    if (!i || !kc(e, i))
      return !1;
    if (ss(i)(e.center))
      return !0;
    const s = o.axis, u = i.center[s.crossAxisLine], a = e[s.crossAxisStart], l = e[s.crossAxisEnd], f = Ue(i[s.crossAxisStart], i[s.crossAxisEnd]), c = f(a), d = f(l);
    return !c && !d ? !0 : c ? a < u : l > u;
  });
  return r.length ? r.length === 1 ? r[0].descriptor.id : Gc({
    pageBorderBox: e,
    draggable: t,
    candidates: r
  }) : null;
}
const us = (e, t) => ze(qt(e, t));
var Uc = (e, t) => {
  const n = e.frame;
  return n ? us(t, n.scroll.diff.value) : t;
};
function as({
  displaced: e,
  id: t
}) {
  return !!(e.visible[t] || e.invisible[t]);
}
function zc({
  draggable: e,
  closest: t,
  inHomeList: n
}) {
  return t ? n && t.descriptor.index > e.descriptor.index ? t.descriptor.index - 1 : t.descriptor.index : null;
}
var Hc = ({
  pageBorderBoxWithDroppableScroll: e,
  draggable: t,
  destination: n,
  insideDestination: r,
  last: o,
  viewport: i,
  afterCritical: s
}) => {
  const u = n.axis, a = Yt(n.axis, t.displaceBy), l = a.value, f = e[u.start], c = e[u.end], p = Sn(t, r).find((m) => {
    const D = m.descriptor.id, v = m.page.borderBox.center[u.line], A = rt(D, s), y = as({
      displaced: o,
      id: D
    });
    return A ? y ? c <= v : f < v - l : y ? c <= v + l : f < v;
  }) || null, E = zc({
    draggable: t,
    closest: p,
    inHomeList: wt(t, n)
  });
  return En({
    draggable: t,
    insideDestination: r,
    destination: n,
    viewport: i,
    last: o,
    displacedBy: a,
    index: E
  });
};
const qc = 4;
var Yc = ({
  draggable: e,
  pageBorderBoxWithDroppableScroll: t,
  previousImpact: n,
  destination: r,
  insideDestination: o,
  afterCritical: i
}) => {
  if (!r.isCombineEnabled)
    return null;
  const s = r.axis, u = Yt(r.axis, e.displaceBy), a = u.value, l = t[s.start], f = t[s.end], d = Sn(e, o).find((E) => {
    const m = E.descriptor.id, D = E.page.borderBox, A = D[s.size] / qc, y = rt(m, i), b = as({
      displaced: n.displaced,
      id: m
    });
    return y ? b ? f > D[s.start] + A && f < D[s.end] - A : l > D[s.start] - a + A && l < D[s.end] - a - A : b ? f > D[s.start] + a + A && f < D[s.end] + a - A : l > D[s.start] + A && l < D[s.end] - A;
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
  const u = us(t.page.borderBox, e), a = Wc({
    pageBorderBox: u,
    draggable: t,
    droppables: r
  });
  if (!a)
    return ac;
  const l = r[a], f = mt(l.descriptor.id, n), c = Uc(l, u);
  return Yc({
    pageBorderBoxWithDroppableScroll: c,
    draggable: t,
    previousImpact: o,
    destination: l,
    insideDestination: f,
    afterCritical: s
  }) || Hc({
    pageBorderBoxWithDroppableScroll: c,
    draggable: t,
    destination: l,
    insideDestination: f,
    last: o.displaced,
    viewport: i,
    afterCritical: s
  });
}, jr = (e, t) => ({
  ...e,
  [t.descriptor.id]: t
});
const Kc = ({
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
  const s = Vc(i);
  return jr(n, s);
};
var Jc = ({
  draggable: e,
  draggables: t,
  droppables: n,
  previousImpact: r,
  impact: o
}) => {
  const i = Kc({
    previousImpact: r,
    impact: o,
    droppables: n
  }), s = $e(o);
  if (!s)
    return i;
  const u = n[s];
  if (wt(e, u) || u.subject.withPlaceholder)
    return i;
  const a = is(u, e, t);
  return jr(i, a);
}, Rt = ({
  state: e,
  clientSelection: t,
  dimensions: n,
  viewport: r,
  impact: o,
  scrollJumpRequest: i
}) => {
  const s = r || e.viewport, u = n || e.dimensions, a = t || e.current.client.selection, l = je(a, e.initial.client.selection), f = {
    offset: l,
    selection: a,
    borderBoxCenter: Fe(e.initial.client.borderBoxCenter, l)
  }, c = {
    selection: Fe(f.selection, s.scroll.current),
    borderBoxCenter: Fe(f.borderBoxCenter, s.scroll.current),
    offset: Fe(f.offset, s.scroll.diff.value)
  }, d = {
    client: f,
    page: c
  };
  if (e.phase === "COLLECTING")
    return {
      ...e,
      dimensions: u,
      viewport: s,
      current: d
    };
  const p = u.draggables[e.critical.draggable.id], E = o || cs({
    pageOffset: c.offset,
    draggable: p,
    draggables: u.draggables,
    droppables: u.droppables,
    previousImpact: e.impact,
    viewport: s,
    afterCritical: e.afterCritical
  }), m = Jc({
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
function Xc(e, t) {
  return e.map((n) => t[n]);
}
var ls = ({
  impact: e,
  viewport: t,
  draggables: n,
  destination: r,
  forceShouldAnimate: o
}) => {
  const i = e.displaced, s = Xc(i.all, n), u = Gt({
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
  const s = Nn({
    impact: e,
    draggable: t,
    draggables: r,
    droppable: n,
    afterCritical: i
  });
  return Lr({
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
  } = i, a = s[e.critical.draggable.id], l = $e(r);
  l || (process.env.NODE_ENV !== "production" ? h(!1, "Must be over a destination in SNAP movement mode") : h(!1));
  const f = u[l], c = ls({
    impact: r,
    viewport: o,
    destination: f,
    draggables: s
  }), d = ds({
    impact: c,
    draggable: a,
    droppable: f,
    draggables: s,
    viewport: o,
    afterCritical: e.afterCritical
  });
  return Rt({
    impact: c,
    clientSelection: d,
    state: e,
    dimensions: i,
    viewport: o
  });
}, Qc = (e) => ({
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
  const u = i.slice(s + 1), a = u.reduce((d, p) => (d[p.descriptor.id] = !0, d), {}), l = {
    inVirtualList: t.descriptor.mode === "virtual",
    displacedBy: o,
    effected: a
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
        destination: Qc(e.descriptor)
      }
    },
    afterCritical: l
  };
}, Zc = (e, t) => ({
  draggables: e.draggables,
  droppables: jr(e.droppables, t)
});
const Kt = (e) => {
  process.env.NODE_ENV;
}, Jt = (e) => {
  process.env.NODE_ENV;
};
var el = ({
  draggable: e,
  offset: t,
  initialWindowScroll: n
}) => {
  const r = mn(e.client, t), o = hn(r, n);
  return {
    ...e,
    placeholder: {
      ...e.placeholder,
      client: r
    },
    client: r,
    page: o
  };
}, tl = (e) => {
  const t = e.frame;
  return t || (process.env.NODE_ENV !== "production" ? h(!1, "Expected Droppable to have a frame") : h(!1)), t;
}, nl = ({
  additions: e,
  updatedDroppables: t,
  viewport: n
}) => {
  const r = n.scroll.diff.value;
  return e.map((o) => {
    const i = o.descriptor.droppableId, s = t[i], a = tl(s).scroll.diff.value, l = Fe(r, a);
    return el({
      draggable: o,
      offset: l,
      initialWindowScroll: n.scroll.initial
    });
  });
}, rl = ({
  state: e,
  published: t
}) => {
  Kt();
  const n = t.modified.map((v) => {
    const A = e.dimensions.droppables[v.droppableId];
    return _r(A, v.scroll);
  }), r = {
    ...e.dimensions.droppables,
    ...Ki(n)
  }, o = Ji(nl({
    additions: t.additions,
    updatedDroppables: r,
    viewport: e.viewport
  })), i = {
    ...e.dimensions.draggables,
    ...o
  };
  t.removals.forEach((v) => {
    delete i[v];
  });
  const s = {
    droppables: r,
    draggables: i
  }, u = $e(e.impact), a = u ? s.droppables[u] : null, l = s.draggables[e.critical.draggable.id], f = s.droppables[e.critical.droppable.id], {
    impact: c,
    afterCritical: d
  } = ps({
    draggable: l,
    home: f,
    draggables: i,
    viewport: e.viewport
  }), p = a && a.isCombineEnabled ? e.impact : c, E = cs({
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
    onLiftImpact: c,
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
const fr = (e) => e.movementMode === "SNAP", kn = (e, t, n) => {
  const r = Zc(e.dimensions, t);
  return !fr(e) || n ? Rt({
    state: e,
    dimensions: r
  }) : fs({
    state: e,
    dimensions: r
  });
};
function Gn(e) {
  return e.isDragging && e.movementMode === "SNAP" ? {
    ...e,
    scrollJumpRequest: null
  } : e;
}
const ei = {
  phase: "IDLE",
  completed: null,
  shouldFlush: !1
};
var ol = (e = ei, t) => {
  if (t.type === "FLUSH")
    return {
      ...ei,
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
    } = t.payload, u = i.draggables[n.draggable.id], a = i.droppables[n.droppable.id], l = {
      selection: r,
      borderBoxCenter: u.client.borderBox.center,
      offset: ye
    }, f = {
      client: l,
      page: {
        selection: Fe(l.selection, o.scroll.initial),
        borderBoxCenter: Fe(l.selection, o.scroll.initial),
        offset: Fe(l.selection, o.scroll.diff.value)
      }
    }, c = Fn(i.droppables).every((m) => !m.isFixedOnPage), {
      impact: d,
      afterCritical: p
    } = ps({
      draggable: u,
      home: a,
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
      isWindowScrollAllowed: c,
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
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? h(!1, `Unexpected ${t.type} received in phase ${e.phase}`) : h(!1)), rl({
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
      impact: fr(e) ? e.impact : null
    });
  }
  if (t.type === "UPDATE_DROPPABLE_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "COLLECTING")
      return Gn(e);
    ct(e) || (process.env.NODE_ENV !== "production" ? h(!1, `${t.type} not permitted in phase ${e.phase}`) : h(!1));
    const {
      id: n,
      newScroll: r
    } = t.payload, o = e.dimensions.droppables[n];
    if (!o)
      return e;
    const i = _r(o, r);
    return kn(e, i, !1);
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
    return kn(e, i, !0);
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
    return kn(e, i, !0);
  }
  if (t.type === "MOVE_BY_WINDOW_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "DROP_ANIMATING")
      return e;
    ct(e) || (process.env.NODE_ENV !== "production" ? h(!1, `Cannot move by window in phase ${e.phase}`) : h(!1)), e.isWindowScrollAllowed || (process.env.NODE_ENV !== "production" ? h(!1, "Window scrolling is currently not supported for fixed lists") : h(!1));
    const n = t.payload.newScroll;
    if (nt(e.viewport.scroll.current, n))
      return Gn(e);
    const r = ns(e.viewport, n);
    return fr(e) ? fs({
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
    const n = Mc({
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
const il = (e) => ({
  type: "BEFORE_INITIAL_CAPTURE",
  payload: e
}), sl = (e) => ({
  type: "LIFT",
  payload: e
}), ul = (e) => ({
  type: "INITIAL_PUBLISH",
  payload: e
}), al = (e) => ({
  type: "PUBLISH_WHILE_DRAGGING",
  payload: e
}), cl = () => ({
  type: "COLLECTION_STARTING",
  payload: null
}), ll = (e) => ({
  type: "UPDATE_DROPPABLE_SCROLL",
  payload: e
}), dl = (e) => ({
  type: "UPDATE_DROPPABLE_IS_ENABLED",
  payload: e
}), fl = (e) => ({
  type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
  payload: e
}), Ds = (e) => ({
  type: "MOVE",
  payload: e
}), pl = (e) => ({
  type: "MOVE_BY_WINDOW_SCROLL",
  payload: e
}), Dl = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), ml = () => ({
  type: "MOVE_UP",
  payload: null
}), hl = () => ({
  type: "MOVE_DOWN",
  payload: null
}), gl = () => ({
  type: "MOVE_RIGHT",
  payload: null
}), El = () => ({
  type: "MOVE_LEFT",
  payload: null
}), $r = () => ({
  type: "FLUSH",
  payload: null
}), bl = (e) => ({
  type: "DROP_ANIMATE",
  payload: e
}), Mr = (e) => ({
  type: "DROP_COMPLETE",
  payload: e
}), ms = (e) => ({
  type: "DROP",
  payload: e
}), yl = (e) => ({
  type: "DROP_PENDING",
  payload: e
}), hs = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
});
function vl(e) {
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
  process.env.NODE_ENV !== "production" && oe(`
    Detected non-consecutive <Draggable /> indexes.

    (This can cause unexpected bugs)

    ${r}
  `);
}
function Cl(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = mt(e.droppable.id, t.draggables);
    vl(n);
  }
}
var Al = (e) => ({
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
  } = o.payload, a = t();
  a.phase === "DROP_ANIMATING" && n(Mr({
    completed: a.completed
  })), t().phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? h(!1, "Unexpected phase to start a drag") : h(!1)), n($r()), n(il({
    draggableId: i,
    movementMode: u
  }));
  const f = {
    draggableId: i,
    scrollOptions: {
      shouldPublishImmediately: u === "SNAP"
    }
  }, {
    critical: c,
    dimensions: d,
    viewport: p
  } = e.startPublishing(f);
  Cl(c, d), n(ul({
    critical: c,
    dimensions: d,
    clientSelection: s,
    movementMode: u,
    viewport: p
  }));
}, Fl = (e) => () => (t) => (n) => {
  n.type === "INITIAL_PUBLISH" && e.dragging(), n.type === "DROP_ANIMATE" && e.dropping(n.payload.completed.result.reason), (n.type === "FLUSH" || n.type === "DROP_COMPLETE") && e.resting(), t(n);
};
const kr = {
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
}, it = `${gs.outOfTheWay}s ${kr.outOfTheWay}`, Tt = {
  fluid: `opacity ${it}`,
  snap: `transform ${it}, opacity ${it}`,
  drop: (e) => {
    const t = `${e}s ${kr.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${it}`,
  placeholder: `height ${it}, width ${it}, margin ${it}`
}, ti = (e) => nt(e, ye) ? void 0 : `translate(${e.x}px, ${e.y}px)`, pr = {
  moveTo: ti,
  drop: (e, t) => {
    const n = ti(e);
    if (n)
      return t ? `${n} scale(${Wt.scale.drop})` : n;
  }
}, {
  minDropTime: Dr,
  maxDropTime: Es
} = gs, wl = Es - Dr, ni = 1500, Sl = 0.6;
var Nl = ({
  current: e,
  destination: t,
  reason: n
}) => {
  const r = Mt(e, t);
  if (r <= 0)
    return Dr;
  if (r >= ni)
    return Es;
  const o = r / ni, i = Dr + wl * o, s = n === "CANCEL" ? i * Sl : i;
  return Number(s.toFixed(2));
}, Ol = ({
  impact: e,
  draggable: t,
  dimensions: n,
  viewport: r,
  afterCritical: o
}) => {
  const {
    draggables: i,
    droppables: s
  } = n, u = $e(e), a = u ? s[u] : null, l = s[t.descriptor.droppableId], f = ds({
    impact: e,
    draggable: t,
    draggables: i,
    afterCritical: o,
    droppable: a || l,
    viewport: r
  });
  return je(f, t.client.borderBox.center);
}, Bl = ({
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
const xl = ({
  getState: e,
  dispatch: t
}) => (n) => (r) => {
  if (r.type !== "DROP") {
    n(r);
    return;
  }
  const o = e(), i = r.payload.reason;
  if (o.phase === "COLLECTING") {
    t(yl({
      reason: i
    }));
    return;
  }
  if (o.phase === "IDLE")
    return;
  o.phase === "DROP_PENDING" && o.isWaiting && (process.env.NODE_ENV !== "production" ? h(!1, "A DROP action occurred while DROP_PENDING and still waiting") : h(!1)), o.phase === "DRAGGING" || o.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? h(!1, `Cannot drop in phase: ${o.phase}`) : h(!1));
  const u = o.critical, a = o.dimensions, l = a.draggables[o.critical.draggable.id], {
    impact: f,
    didDropInsideDroppable: c
  } = Bl({
    reason: i,
    lastImpact: o.impact,
    afterCritical: o.afterCritical,
    onLiftImpact: o.onLiftImpact,
    home: o.dimensions.droppables[o.critical.droppable.id],
    viewport: o.viewport,
    draggables: o.dimensions.draggables
  }), d = c ? Pr(f) : null, p = c ? wn(f) : null, E = {
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
  }, D = Ol({
    impact: f,
    draggable: l,
    dimensions: a,
    viewport: o.viewport,
    afterCritical: o.afterCritical
  }), v = {
    critical: o.critical,
    afterCritical: o.afterCritical,
    result: m,
    impact: f
  };
  if (!(!nt(o.current.client.offset, D) || !!m.combine)) {
    t(Mr({
      completed: v
    }));
    return;
  }
  const y = Nl({
    current: o.current.client.offset,
    destination: D,
    reason: i
  });
  t(bl({
    newHomeClientOffset: D,
    dropDuration: y,
    completed: v
  }));
};
var Il = xl, bs = () => ({
  x: window.pageXOffset,
  y: window.pageYOffset
});
function _l(e) {
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
function Pl({
  onWindowScroll: e
}) {
  function t() {
    e(bs());
  }
  const n = jt(t), r = _l(n);
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
const Rl = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH", Tl = (e) => {
  const t = Pl({
    onWindowScroll: (n) => {
      e.dispatch(pl({
        newScroll: n
      }));
    }
  });
  return (n) => (r) => {
    !t.isActive() && r.type === "INITIAL_PUBLISH" && t.start(), t.isActive() && Rl(r) && t.stop(), n(r);
  };
};
var Vl = Tl, Ll = (e) => {
  let t = !1, n = !1;
  const r = setTimeout(() => {
    n = !0;
  }), o = (i) => {
    if (t) {
      process.env.NODE_ENV !== "production" && oe("Announcement already made. Not making a second announcement");
      return;
    }
    if (n) {
      process.env.NODE_ENV !== "production" && oe(`
        Announcements cannot be made asynchronously.
        Default message has already been announced.
      `);
      return;
    }
    t = !0, e(i), clearTimeout(r);
  };
  return o.wasCalled = () => t, o;
}, jl = () => {
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
const $l = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.droppableId === t.droppableId && e.index === t.index, Ml = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.draggableId === t.draggableId && e.droppableId === t.droppableId, kl = (e, t) => {
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
function Wn(e, t, n, r) {
  if (!e) {
    n(r(t));
    return;
  }
  const o = Ll(n);
  e(t, {
    announce: o
  }), o.wasCalled() || n(r(t));
}
var Gl = (e, t) => {
  const n = jl();
  let r = null;
  const o = (c, d) => {
    r && (process.env.NODE_ENV !== "production" ? h(!1, "Cannot fire onBeforeCapture as a drag start has already been published") : h(!1)), Nt("onBeforeCapture", () => {
      const p = e().onBeforeCapture;
      p && p({
        draggableId: c,
        mode: d
      });
    });
  }, i = (c, d) => {
    r && (process.env.NODE_ENV !== "production" ? h(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : h(!1)), Nt("onBeforeDragStart", () => {
      const p = e().onBeforeDragStart;
      p && p(rn(c, d));
    });
  }, s = (c, d) => {
    r && (process.env.NODE_ENV !== "production" ? h(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : h(!1));
    const p = rn(c, d);
    r = {
      mode: d,
      lastCritical: c,
      lastLocation: p.source,
      lastCombine: null
    }, n.add(() => {
      Nt("onDragStart", () => Wn(e().onDragStart, p, t, dn.onDragStart));
    });
  }, u = (c, d) => {
    const p = Pr(d), E = wn(d);
    r || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot fire onDragMove when onDragStart has not been called") : h(!1));
    const m = !kl(c, r.lastCritical);
    m && (r.lastCritical = c);
    const D = !$l(r.lastLocation, p);
    D && (r.lastLocation = p);
    const v = !Ml(r.lastCombine, E);
    if (v && (r.lastCombine = E), !m && !D && !v)
      return;
    const A = {
      ...rn(c, r.mode),
      combine: E,
      destination: p
    };
    n.add(() => {
      Nt("onDragUpdate", () => Wn(e().onDragUpdate, A, t, dn.onDragUpdate));
    });
  }, a = () => {
    r || (process.env.NODE_ENV !== "production" ? h(!1, "Can only flush responders while dragging") : h(!1)), n.flush();
  }, l = (c) => {
    r || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot fire onDragEnd when there is no matching onDragStart") : h(!1)), r = null, Nt("onDragEnd", () => Wn(e().onDragEnd, c, t, dn.onDragEnd));
  };
  return {
    beforeCapture: o,
    beforeStart: i,
    start: s,
    update: u,
    flush: a,
    drop: l,
    abort: () => {
      if (!r)
        return;
      const c = {
        ...rn(r.lastCritical, r.mode),
        combine: null,
        destination: null,
        reason: "CANCEL"
      };
      l(c);
    }
  };
}, Wl = (e, t) => {
  const n = Gl(e, t);
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
const Ul = (e) => (t) => (n) => {
  if (n.type !== "DROP_ANIMATION_FINISHED") {
    t(n);
    return;
  }
  const r = e.getState();
  r.phase !== "DROP_ANIMATING" && (process.env.NODE_ENV !== "production" ? h(!1, "Cannot finish a drop animating when no drop is occurring") : h(!1)), e.dispatch(Mr({
    completed: r.completed
  }));
};
var zl = Ul;
const Hl = (e) => {
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
var ql = Hl, Yl = (e) => () => (t) => (n) => {
  (n.type === "DROP_COMPLETE" || n.type === "FLUSH" || n.type === "DROP_ANIMATE") && e.stopPublishing(), t(n);
}, Kl = (e) => {
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
const Jl = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH";
var Xl = (e) => (t) => (n) => (r) => {
  if (Jl(r)) {
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
const Ql = (e) => (t) => (n) => {
  if (t(n), n.type !== "PUBLISH_WHILE_DRAGGING")
    return;
  const r = e.getState();
  r.phase === "DROP_PENDING" && (r.isWaiting || e.dispatch(ms({
    reason: r.reason
  })));
};
var Zl = Ql;
const ed = process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
}) : _i;
var td = ({
  dimensionMarshal: e,
  focusMarshal: t,
  styleMarshal: n,
  getResponders: r,
  announce: o,
  autoScroller: i
}) => Ii(ol, ed(ku(Fl(n), Yl(e), Al(e), Il, zl, ql, Zl, Xl(i), Vl, Kl(t), Wl(r, o))));
const Un = () => ({
  additions: {},
  removals: {},
  modified: {}
});
function nd({
  registry: e,
  callbacks: t
}) {
  let n = Un(), r = null;
  const o = () => {
    r || (t.collectionStarting(), r = requestAnimationFrame(() => {
      r = null, Kt();
      const {
        additions: a,
        removals: l,
        modified: f
      } = n, c = Object.keys(a).map((E) => e.draggable.getById(E).getDimension(ye)).sort((E, m) => E.descriptor.index - m.descriptor.index), d = Object.keys(f).map((E) => {
        const D = e.droppable.getById(E).callbacks.getScrollWhileDragging();
        return {
          droppableId: E,
          scroll: D
        };
      }), p = {
        additions: c,
        removals: Object.keys(l),
        modified: d
      };
      n = Un(), Jt(), t.publish(p);
    }));
  };
  return {
    add: (a) => {
      const l = a.descriptor.id;
      n.additions[l] = a, n.modified[a.descriptor.droppableId] = !0, n.removals[l] && delete n.removals[l], o();
    },
    remove: (a) => {
      const l = a.descriptor;
      n.removals[l.id] = !0, n.modified[l.droppableId] = !0, n.additions[l.id] && delete n.additions[l.id], o();
    },
    stop: () => {
      r && (cancelAnimationFrame(r), r = null, n = Un());
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
}, rd = () => {
  const e = bs(), t = Cs(), n = e.y, r = e.x, o = vs(), i = o.clientWidth, s = o.clientHeight, u = r + i, a = n + s;
  return {
    frame: ze({
      top: n,
      left: r,
      right: u,
      bottom: a
    }),
    scroll: {
      initial: e,
      current: e,
      max: t,
      diff: {
        value: ye,
        displacement: ye
      }
    }
  };
}, od = ({
  critical: e,
  scrollOptions: t,
  registry: n
}) => {
  Kt();
  const r = rd(), o = r.scroll.current, i = e.droppable, s = n.droppable.getAllByType(i.type).map((f) => f.callbacks.getDimensionAndWatchScroll(o, t)), u = n.draggable.getAllByType(e.draggable.type).map((f) => f.getDimension(o)), a = {
    draggables: Ji(u),
    droppables: Ki(s)
  };
  return Jt(), {
    dimensions: a,
    critical: e,
    viewport: r
  };
};
function ri(e, t, n) {
  return n.descriptor.id === t.id || n.descriptor.type !== t.type ? !1 : e.droppable.getById(n.descriptor.droppableId).descriptor.mode !== "virtual" ? (process.env.NODE_ENV !== "production" && oe(`
      You are attempting to add or remove a Draggable [id: ${n.descriptor.id}]
      while a drag is occurring. This is only supported for virtual lists.

      See https://github.com/hello-pangea/dnd/blob/main/docs/patterns/virtual-lists.md
    `), !1) : !0;
}
var id = (e, t) => {
  let n = null;
  const r = nd({
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
  }, a = () => {
    if (!n)
      return;
    r.stop();
    const d = n.critical.droppable;
    e.droppable.getAllByType(d.type).forEach((p) => p.callbacks.dragStopped()), n.unsubscribe(), n = null;
  }, l = (d) => {
    n || (process.env.NODE_ENV !== "production" ? h(!1, "Should only be subscribed when a collection is occurring") : h(!1));
    const p = n.critical.draggable;
    d.type === "ADDITION" && ri(e, p, d.value) && r.add(d.value), d.type === "REMOVAL" && ri(e, p, d.value) && r.remove(d.value);
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
      }, od({
        critical: m,
        registry: e,
        scrollOptions: d.scrollOptions
      });
    },
    stopPublishing: a
  };
}, As = (e, t) => e.phase === "IDLE" ? !0 : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === t ? !1 : e.completed.result.reason === "DROP", sd = (e) => {
  window.scrollBy(e.x, e.y);
};
const ud = be((e) => Fn(e).filter((t) => !(!t.isEnabled || !t.frame))), ad = (e, t) => ud(t).find((r) => (r.frame || (process.env.NODE_ENV !== "production" ? h(!1, "Invalid result") : h(!1)), ss(r.frame.pageMarginBox)(e))) || null;
var cd = ({
  center: e,
  destination: t,
  droppables: n
}) => {
  if (t) {
    const o = n[t];
    return o.frame ? o : null;
  }
  return ad(e, n);
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
var ld = (e, t, n = () => Ut) => {
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
  return r === 0 ? (process.env.NODE_ENV !== "production" && oe(`
      Detected distance range of 0 in the fluid auto scroller
      This is unexpected and would cause a divide by 0 issue.
      Not allowing an auto scroll
    `), 0) : (n - e) / r;
}, Gr = 1, dd = (e, t, n = () => Ut) => {
  const r = n();
  if (e > t.startScrollingFrom)
    return 0;
  if (e <= t.maxScrollValueAt)
    return r.maxPixelScroll;
  if (e === t.startScrollingFrom)
    return Gr;
  const i = 1 - Fs({
    startOfRange: t.maxScrollValueAt,
    endOfRange: t.startScrollingFrom,
    current: e
  }), s = r.maxPixelScroll * r.ease(i);
  return Math.ceil(s);
}, fd = (e, t, n) => {
  const r = n(), o = r.durationDampening.accelerateAt, i = r.durationDampening.stopDampeningAt, s = t, u = i, l = Date.now() - s;
  if (l >= i)
    return e;
  if (l < o)
    return Gr;
  const f = Fs({
    startOfRange: o,
    endOfRange: u,
    current: l
  }), c = e * r.ease(f);
  return Math.ceil(c);
}, oi = ({
  distanceToEdge: e,
  thresholds: t,
  dragStartTime: n,
  shouldUseTimeDampening: r,
  getAutoScrollerOptions: o
}) => {
  const i = dd(e, t, o);
  return i === 0 ? 0 : r ? Math.max(fd(i, n, o), Gr) : i;
}, ii = ({
  container: e,
  distanceToEdges: t,
  dragStartTime: n,
  axis: r,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const s = ld(e, r, i);
  return t[r.end] < t[r.start] ? oi({
    distanceToEdge: t[r.end],
    thresholds: s,
    dragStartTime: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }) : -1 * oi({
    distanceToEdge: t[r.start],
    thresholds: s,
    dragStartTime: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
}, pd = ({
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
const Dd = Yi((e) => e === 0 ? 0 : e);
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
  }, u = ii({
    container: t,
    distanceToEdges: s,
    dragStartTime: e,
    axis: Rr,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), a = ii({
    container: t,
    distanceToEdges: s,
    dragStartTime: e,
    axis: Zi,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), l = Dd({
    x: a,
    y: u
  });
  if (nt(l, ye))
    return null;
  const f = pd({
    container: t,
    subject: n,
    proposedScroll: l
  });
  return f ? nt(f, ye) ? null : f : null;
};
const md = Yi((e) => e === 0 ? 0 : e > 0 ? 1 : -1), Wr = (() => {
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
    return nt(i, ye) ? null : i;
  };
})(), Ss = ({
  max: e,
  current: t,
  change: n
}) => {
  const r = {
    x: Math.max(t.x, e.x),
    y: Math.max(t.y, e.y)
  }, o = md(n), i = Wr({
    max: r,
    current: t,
    change: o
  });
  return !i || o.x !== 0 && i.x === 0 || o.y !== 0 && i.y === 0;
}, Ur = (e, t) => Ss({
  current: e.scroll.current,
  max: e.scroll.max,
  change: t
}), hd = (e, t) => {
  if (!Ur(e, t))
    return null;
  const n = e.scroll.max, r = e.scroll.current;
  return Wr({
    current: r,
    max: n,
    change: t
  });
}, zr = (e, t) => {
  const n = e.frame;
  return n ? Ss({
    current: n.scroll.current,
    max: n.scroll.max,
    change: t
  }) : !1;
}, gd = (e, t) => {
  const n = e.frame;
  return !n || !zr(e, t) ? null : Wr({
    current: n.scroll.current,
    max: n.scroll.max,
    change: t
  });
};
var Ed = ({
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
  return s && Ur(e, s) ? s : null;
}, bd = ({
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
  return u && zr(e, u) ? u : null;
}, si = ({
  state: e,
  dragStartTime: t,
  shouldUseTimeDampening: n,
  scrollWindow: r,
  scrollDroppable: o,
  getAutoScrollerOptions: i
}) => {
  const s = e.current.page.borderBoxCenter, a = e.dimensions.draggables[e.critical.draggable.id].page.marginBox;
  if (e.isWindowScrollAllowed) {
    const c = e.viewport, d = Ed({
      dragStartTime: t,
      viewport: c,
      subject: a,
      center: s,
      shouldUseTimeDampening: n,
      getAutoScrollerOptions: i
    });
    if (d) {
      r(d);
      return;
    }
  }
  const l = cd({
    center: s,
    destination: $e(e.impact),
    droppables: e.dimensions.droppables
  });
  if (!l)
    return;
  const f = bd({
    dragStartTime: t,
    droppable: l,
    subject: a,
    center: s,
    shouldUseTimeDampening: n,
    getAutoScrollerOptions: i
  });
  f && o(l.descriptor.id, f);
}, yd = ({
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
      dragStartTime: c
    } = i;
    si({
      state: l,
      scrollWindow: r,
      scrollDroppable: o,
      dragStartTime: c,
      shouldUseTimeDampening: f,
      getAutoScrollerOptions: n
    });
  };
  return {
    start: (l) => {
      Kt(), i && (process.env.NODE_ENV !== "production" ? h(!1, "Cannot start auto scrolling when already started") : h(!1));
      const f = Date.now();
      let c = !1;
      const d = () => {
        c = !0;
      };
      si({
        state: l,
        dragStartTime: 0,
        shouldUseTimeDampening: !1,
        scrollWindow: d,
        scrollDroppable: d,
        getAutoScrollerOptions: n
      }), i = {
        dragStartTime: f,
        shouldUseTimeDampening: c
      }, Jt(), c && s(l);
    },
    stop: () => {
      i && (r.cancel(), o.cancel(), i = null);
    },
    scroll: s
  };
}, vd = ({
  move: e,
  scrollDroppable: t,
  scrollWindow: n
}) => {
  const r = (u, a) => {
    const l = Fe(u.current.client.selection, a);
    e({
      client: l
    });
  }, o = (u, a) => {
    if (!zr(u, a))
      return a;
    const l = gd(u, a);
    if (!l)
      return t(u.descriptor.id, a), null;
    const f = je(a, l);
    return t(u.descriptor.id, f), je(a, f);
  }, i = (u, a, l) => {
    if (!u || !Ur(a, l))
      return l;
    const f = hd(a, l);
    if (!f)
      return n(l), null;
    const c = je(l, f);
    return n(c), je(l, c);
  };
  return (u) => {
    const a = u.scrollJumpRequest;
    if (!a)
      return;
    const l = $e(u.impact);
    l || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot perform a jump scroll when there is no destination") : h(!1));
    const f = o(u.dimensions.droppables[l], a);
    if (!f)
      return;
    const c = u.viewport, d = i(u.isWindowScrollAllowed, c, f);
    d && r(u, d);
  };
}, Cd = ({
  scrollDroppable: e,
  scrollWindow: t,
  move: n,
  getAutoScrollerOptions: r
}) => {
  const o = yd({
    scrollWindow: t,
    scrollDroppable: e,
    getAutoScrollerOptions: r
  }), i = vd({
    move: n,
    scrollWindow: t,
    scrollDroppable: e
  });
  return {
    scroll: (a) => {
      if (!(r().disabled || a.phase !== "DRAGGING")) {
        if (a.movementMode === "FLUID") {
          o.scroll(a);
          return;
        }
        a.scrollJumpRequest && i(a);
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
})(), mr = (() => {
  const e = `${yt}-draggable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), Ad = (() => {
  const e = `${yt}-droppable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), ui = {
  contextId: `${yt}-scroll-container-context-id`
}, Fd = (e) => (t) => `[${t}="${e}"]`, Ot = (e, t) => e.map((n) => {
  const r = n.styles[t];
  return r ? `${n.selector} { ${r} }` : "";
}).join(" "), wd = "pointer-events: none;";
var Sd = (e) => {
  const t = Fd(e), n = (() => {
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
        dragging: wd,
        dropAnimating: u
      }
    };
  })(), r = (() => {
    const u = `
      transition: ${Tt.outOfTheWay};
    `;
    return {
      selector: t(mr.contextId),
      styles: {
        dragging: u,
        dropAnimating: u,
        userCancel: u
      }
    };
  })(), o = {
    selector: t(Ad.contextId),
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
const Nd = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? C.useLayoutEffect : C.useEffect;
var Me = Nd;
const zn = () => {
  const e = document.querySelector("head");
  return e || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot find the head to append a style to") : h(!1)), e;
}, ai = (e) => {
  const t = document.createElement("style");
  return e && t.setAttribute("nonce", e), t.type = "text/css", t;
};
function Od(e, t) {
  const n = Y(() => Sd(e), [e]), r = C.useRef(null), o = C.useRef(null), i = R(be((c) => {
    const d = o.current;
    d || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot set dynamic style element if it is not set") : h(!1)), d.textContent = c;
  }), []), s = R((c) => {
    const d = r.current;
    d || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot set dynamic style element if it is not set") : h(!1)), d.textContent = c;
  }, []);
  Me(() => {
    !r.current && !o.current || (process.env.NODE_ENV !== "production" ? h(!1, "style elements already mounted") : h(!1));
    const c = ai(t), d = ai(t);
    return r.current = c, o.current = d, c.setAttribute(`${yt}-always`, e), d.setAttribute(`${yt}-dynamic`, e), zn().appendChild(c), zn().appendChild(d), s(n.always), i(n.resting), () => {
      const p = (E) => {
        const m = E.current;
        m || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot unmount ref as it is not set") : h(!1)), zn().removeChild(m), E.current = null;
      };
      p(r), p(o);
    };
  }, [t, s, i, n.always, n.resting, e]);
  const u = R(() => i(n.dragging), [i, n.dragging]), a = R((c) => {
    if (c === "DROP") {
      i(n.dropAnimating);
      return;
    }
    i(n.userCancel);
  }, [i, n.dropAnimating, n.userCancel]), l = R(() => {
    o.current && i(n.resting);
  }, [i, n.resting]);
  return Y(() => ({
    dragging: u,
    dropping: a,
    resting: l
  }), [u, a, l]);
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
    return process.env.NODE_ENV !== "production" && oe(`Unable to find any drag handles in the context "${e}"`), null;
  const o = r.find((i) => i.getAttribute(vt.draggableId) === t);
  return o ? Xt(o) ? o : (process.env.NODE_ENV !== "production" && oe("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && oe(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
function Bd(e) {
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
  }, []), a = R(function() {
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
  }), []), Y(() => ({
    register: i,
    tryRecordFocus: l,
    tryRestoreFocusRecorded: a,
    tryShiftRecord: u
  }), [i, l, a, u]);
}
function xd() {
  const e = {
    draggables: {},
    droppables: {}
  }, t = [];
  function n(c) {
    return t.push(c), function() {
      const p = t.indexOf(c);
      p !== -1 && t.splice(p, 1);
    };
  }
  function r(c) {
    t.length && t.forEach((d) => d(c));
  }
  function o(c) {
    return e.draggables[c] || null;
  }
  function i(c) {
    const d = o(c);
    return d || (process.env.NODE_ENV !== "production" ? h(!1, `Cannot find draggable entry with id [${c}]`) : h(!1)), d;
  }
  const s = {
    register: (c) => {
      e.draggables[c.descriptor.id] = c, r({
        type: "ADDITION",
        value: c
      });
    },
    update: (c, d) => {
      const p = e.draggables[d.descriptor.id];
      p && p.uniqueId === c.uniqueId && (delete e.draggables[d.descriptor.id], e.draggables[c.descriptor.id] = c);
    },
    unregister: (c) => {
      const d = c.descriptor.id, p = o(d);
      p && c.uniqueId === p.uniqueId && (delete e.draggables[d], e.droppables[c.descriptor.droppableId] && r({
        type: "REMOVAL",
        value: c
      }));
    },
    getById: i,
    findById: o,
    exists: (c) => !!o(c),
    getAllByType: (c) => Object.values(e.draggables).filter((d) => d.descriptor.type === c)
  };
  function u(c) {
    return e.droppables[c] || null;
  }
  function a(c) {
    const d = u(c);
    return d || (process.env.NODE_ENV !== "production" ? h(!1, `Cannot find droppable entry with id [${c}]`) : h(!1)), d;
  }
  const l = {
    register: (c) => {
      e.droppables[c.descriptor.id] = c;
    },
    unregister: (c) => {
      const d = u(c.descriptor.id);
      d && c.uniqueId === d.uniqueId && delete e.droppables[c.descriptor.id];
    },
    getById: a,
    findById: u,
    exists: (c) => !!u(c),
    getAllByType: (c) => Object.values(e.droppables).filter((d) => d.descriptor.type === c)
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
function Id() {
  const e = Y(xd, []);
  return C.useEffect(() => function() {
    N.version.startsWith("16") || N.version.startsWith("17") ? requestAnimationFrame(e.clean) : e.clean();
  }, [e]), e;
}
var Hr = N.createContext(null), zt = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot find document.body") : h(!1)), e;
};
const _d = {
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
var Pd = _d;
const Rd = (e) => `rfd-announcement-${e}`;
function Td(e) {
  const t = Y(() => Rd(e), [e]), n = C.useRef(null);
  return C.useEffect(function() {
    const i = document.createElement("div");
    return n.current = i, i.id = t, i.setAttribute("aria-live", "assertive"), i.setAttribute("aria-atomic", "true"), gt(i.style, Pd), zt().appendChild(i), function() {
      setTimeout(function() {
        const a = zt();
        a.contains(i) && a.removeChild(i), i === n.current && (n.current = null);
      });
    };
  }, [t]), R((o) => {
    const i = n.current;
    if (i) {
      i.textContent = o;
      return;
    }
    process.env.NODE_ENV !== "production" && oe(`
      A screen reader message was trying to be announced but it was unable to do so.
      This can occur if you unmount your <DragDropContext /> in your onDragEnd.
      Consider calling provided.announce() before the unmount so that the instruction will
      not be lost for users relying on a screen reader.

      Message not passed to screen reader:

      "${o}"
    `);
  }, []);
}
let Vd = 0;
const xs = {
  separator: "::"
};
function Ld(e, t = xs) {
  return Y(() => `${e}${t.separator}${Vd++}`, [t.separator, e]);
}
function jd(e, t = xs) {
  const n = N.useId();
  return Y(() => `${e}${t.separator}${n}`, [t.separator, e, n]);
}
var qr = "useId" in N ? jd : Ld;
function $d({
  contextId: e,
  uniqueId: t
}) {
  return `rfd-hidden-text-${e}-${t}`;
}
function Md({
  contextId: e,
  text: t
}) {
  const n = qr("hidden-text", {
    separator: "-"
  }), r = Y(() => $d({
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
var On = N.createContext(null), kd = {
  react: "^16.8.5 || ^17.0.0 || ^18.0.0",
  "react-dom": "^16.8.5 || ^17.0.0 || ^18.0.0"
};
const Gd = /(\d+)\.(\d+)\.(\d+)/, ci = (e) => {
  const t = Gd.exec(e);
  t == null && (process.env.NODE_ENV !== "production" ? h(!1, `Unable to parse React version ${e}`) : h(!1));
  const n = Number(t[1]), r = Number(t[2]), o = Number(t[3]);
  return {
    major: n,
    minor: r,
    patch: o,
    raw: e
  };
}, Wd = (e, t) => t.major > e.major ? !0 : t.major < e.major ? !1 : t.minor > e.minor ? !0 : t.minor < e.minor ? !1 : t.patch >= e.patch;
var Ud = (e, t) => {
  const n = ci(e), r = ci(t);
  Wd(n, r) || process.env.NODE_ENV !== "production" && oe(`
    React version: [${r.raw}]
    does not satisfy expected peer dependency version: [${n.raw}]

    This can result in run time bugs, and even fatal crashes
  `);
};
const Hn = `
  We expect a html5 doctype: <!doctype html>
  This is to ensure consistent browser layout and measurement

  More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/doctype.md
`;
var zd = (e) => {
  const t = e.doctype;
  if (!t) {
    process.env.NODE_ENV !== "production" && oe(`
      No <!doctype html> found.

      ${Hn}
    `);
    return;
  }
  t.name.toLowerCase() !== "html" && process.env.NODE_ENV !== "production" && oe(`
      Unexpected <!doctype> found: (${t.name})

      ${Hn}
    `), t.publicId !== "" && process.env.NODE_ENV !== "production" && oe(`
      Unexpected <!doctype> publicId found: (${t.publicId})
      A html5 doctype does not have a publicId

      ${Hn}
    `);
};
function Yr(e) {
  process.env.NODE_ENV !== "production" && e();
}
function Qt(e, t) {
  Yr(() => {
    C.useEffect(() => {
      try {
        e();
      } catch (n) {
        lr(`
          A setup problem was encountered.

          > ${n.message}
        `);
      }
    }, t);
  });
}
function Hd() {
  Qt(() => {
    Ud(kd.react, N.version), zd(document);
  }, []);
}
function Kr(e) {
  const t = C.useRef(e);
  return C.useEffect(() => {
    t.current = e;
  }), t;
}
function qd() {
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
const Yd = 9, Kd = 13, Jr = 27, Is = 32, Jd = 33, Xd = 34, Qd = 35, Zd = 36, ef = 37, tf = 38, nf = 39, rf = 40, of = {
  [Kd]: !0,
  [Yd]: !0
};
var _s = (e) => {
  of[e.keyCode] && e.preventDefault();
};
const sf = (() => {
  const e = "visibilitychange";
  return typeof document > "u" ? e : [e, `ms${e}`, `webkit${e}`, `moz${e}`, `o${e}`].find((r) => `on${r}` in document) || e;
})();
var Bn = sf;
const Ps = 0, li = 5;
function uf(e, t) {
  return Math.abs(t.x - e.x) >= li || Math.abs(t.y - e.y) >= li;
}
const di = {
  type: "IDLE"
};
function af({
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
      const a = {
        x: s,
        y: u
      }, l = n();
      if (l.type === "DRAGGING") {
        o.preventDefault(), l.actions.move(a);
        return;
      }
      l.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? h(!1, "Cannot be IDLE") : h(!1));
      const f = l.point;
      if (!uf(f, a))
        return;
      o.preventDefault();
      const c = l.actions.fluidLift(a);
      r({
        type: "DRAGGING",
        actions: c
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
      if (o.keyCode === Jr) {
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
    eventName: Bn,
    fn: e
  }];
}
function cf(e) {
  const t = C.useRef(di), n = C.useRef(tt), r = Y(() => ({
    eventName: "mousedown",
    fn: function(c) {
      if (c.defaultPrevented || c.button !== Ps || c.ctrlKey || c.metaKey || c.shiftKey || c.altKey)
        return;
      const d = e.findClosestDraggableId(c);
      if (!d)
        return;
      const p = e.tryGetLock(d, s, {
        sourceEvent: c
      });
      if (!p)
        return;
      c.preventDefault();
      const E = {
        x: c.clientX,
        y: c.clientY
      };
      n.current(), l(p, E);
    }
  }), [e]), o = Y(() => ({
    eventName: "webkitmouseforcewillbegin",
    fn: (f) => {
      if (f.defaultPrevented)
        return;
      const c = e.findClosestDraggableId(f);
      if (!c)
        return;
      const d = e.findOptionsForDraggable(c);
      d && (d.shouldRespectForcePress || e.canGetLock(c) && f.preventDefault());
    }
  }), [e]), i = R(function() {
    const c = {
      passive: !1,
      capture: !0
    };
    n.current = We(window, [o, r], c);
  }, [o, r]), s = R(() => {
    t.current.type !== "IDLE" && (t.current = di, n.current(), i());
  }, [i]), u = R(() => {
    const f = t.current;
    s(), f.type === "DRAGGING" && f.actions.cancel({
      shouldBlockNextClick: !0
    }), f.type === "PENDING" && f.actions.abort();
  }, [s]), a = R(function() {
    const c = {
      capture: !0,
      passive: !1
    }, d = af({
      cancel: u,
      completed: s,
      getPhase: () => t.current,
      setPhase: (p) => {
        t.current = p;
      }
    });
    n.current = We(window, d, c);
  }, [u, s]), l = R(function(c, d) {
    t.current.type !== "IDLE" && (process.env.NODE_ENV !== "production" ? h(!1, "Expected to move from IDLE to PENDING drag") : h(!1)), t.current = {
      type: "PENDING",
      point: d,
      actions: c
    }, a();
  }, [a]);
  Me(function() {
    return i(), function() {
      n.current();
    };
  }, [i]);
}
function lf() {
}
const df = {
  [Xd]: !0,
  [Jd]: !0,
  [Zd]: !0,
  [Qd]: !0
};
function ff(e, t) {
  function n() {
    t(), e.cancel();
  }
  function r() {
    t(), e.drop();
  }
  return [{
    eventName: "keydown",
    fn: (o) => {
      if (o.keyCode === Jr) {
        o.preventDefault(), n();
        return;
      }
      if (o.keyCode === Is) {
        o.preventDefault(), r();
        return;
      }
      if (o.keyCode === rf) {
        o.preventDefault(), e.moveDown();
        return;
      }
      if (o.keyCode === tf) {
        o.preventDefault(), e.moveUp();
        return;
      }
      if (o.keyCode === nf) {
        o.preventDefault(), e.moveRight();
        return;
      }
      if (o.keyCode === ef) {
        o.preventDefault(), e.moveLeft();
        return;
      }
      if (df[o.keyCode]) {
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
    eventName: Bn,
    fn: n
  }];
}
function pf(e) {
  const t = C.useRef(lf), n = Y(() => ({
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
      let a = !0;
      const l = u.snapLift();
      t.current();
      function f() {
        a || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot stop capturing a keyboard drag when not capturing") : h(!1)), a = !1, t.current(), r();
      }
      t.current = We(window, ff(l, f), {
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
const qn = {
  type: "IDLE"
}, Df = 120, mf = 0.15;
function hf({
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
      n.keyCode === Jr && n.preventDefault(), e();
    }
  }, {
    eventName: Bn,
    fn: e
  }];
}
function gf({
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
      if (!i || !(i.force >= mf))
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
    eventName: Bn,
    fn: e
  }];
}
function Ef(e) {
  const t = C.useRef(qn), n = C.useRef(tt), r = R(function() {
    return t.current;
  }, []), o = R(function(p) {
    t.current = p;
  }, []), i = Y(() => ({
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
        clientX: v,
        clientY: A
      } = D, y = {
        x: v,
        y: A
      };
      n.current(), c(m, y);
    }
  }), [e]), s = R(function() {
    const p = {
      capture: !0,
      passive: !1
    };
    n.current = We(window, [i], p);
  }, [i]), u = R(() => {
    const d = t.current;
    d.type !== "IDLE" && (d.type === "PENDING" && clearTimeout(d.longPressTimerId), o(qn), n.current(), s());
  }, [s, o]), a = R(() => {
    const d = t.current;
    u(), d.type === "DRAGGING" && d.actions.cancel({
      shouldBlockNextClick: !0
    }), d.type === "PENDING" && d.actions.abort();
  }, [u]), l = R(function() {
    const p = {
      capture: !0,
      passive: !1
    }, E = {
      cancel: a,
      completed: u,
      getPhase: r
    }, m = We(window, gf(E), p), D = We(window, hf(E), p);
    n.current = function() {
      m(), D();
    };
  }, [a, r, u]), f = R(function() {
    const p = r();
    p.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? h(!1, `Cannot start dragging from phase ${p.type}`) : h(!1));
    const E = p.actions.fluidLift(p.point);
    o({
      type: "DRAGGING",
      actions: E,
      hasMoved: !1
    });
  }, [r, o]), c = R(function(p, E) {
    r().type !== "IDLE" && (process.env.NODE_ENV !== "production" ? h(!1, "Expected to move from IDLE to PENDING drag") : h(!1));
    const m = setTimeout(f, Df);
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
      E.type === "PENDING" && (clearTimeout(E.longPressTimerId), o(qn));
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
function bf(e) {
  Yr(() => {
    const t = Kr(e);
    Qt(() => {
      t.current.length !== e.length && (process.env.NODE_ENV !== "production" ? h(!1, "Cannot change the amount of sensor hooks after mounting") : h(!1));
    });
  });
}
const yf = ["input", "button", "textarea", "select", "option", "optgroup", "video", "audio"];
function Rs(e, t) {
  if (t == null)
    return !1;
  if (yf.includes(t.tagName.toLowerCase()))
    return !0;
  const r = t.getAttribute("contenteditable");
  return r === "true" || r === "" ? !0 : t === e ? !1 : Rs(e, t.parentElement);
}
function vf(e, t) {
  const n = t.target;
  return Xt(n) ? Rs(e, n) : !1;
}
var Cf = (e) => ze(e.getBoundingClientRect()).center;
function Af(e) {
  return e instanceof Os(e).Element;
}
const Ff = (() => {
  const e = "matches";
  return typeof document > "u" ? e : [e, "msMatchesSelector", "webkitMatchesSelector"].find((r) => r in Element.prototype) || e;
})();
function Ts(e, t) {
  return e == null ? null : e[Ff](t) ? e : Ts(e.parentElement, t);
}
function wf(e, t) {
  return e.closest ? e.closest(t) : Ts(e, t);
}
function Sf(e) {
  return `[${vt.contextId}="${e}"]`;
}
function Nf(e, t) {
  const n = t.target;
  if (!Af(n))
    return process.env.NODE_ENV !== "production" && oe("event.target must be a Element"), null;
  const r = Sf(e), o = wf(n, r);
  return o ? Xt(o) ? o : (process.env.NODE_ENV !== "production" && oe("drag handle must be a HTMLElement"), null) : null;
}
function Of(e, t) {
  const n = Nf(e, t);
  return n ? n.getAttribute(vt.draggableId) : null;
}
function Bf(e, t) {
  const n = `[${mr.contextId}="${e}"]`, o = Ns(document, n).find((i) => i.getAttribute(mr.id) === t);
  return o ? Xt(o) ? o : (process.env.NODE_ENV !== "production" && oe("Draggable element is not a HTMLElement"), null) : null;
}
function xf(e) {
  e.preventDefault();
}
function on({
  expected: e,
  phase: t,
  isLockActive: n,
  shouldWarn: r
}) {
  return n() ? e !== t ? (r && process.env.NODE_ENV !== "production" && oe(`
        Cannot perform action.
        The actions you used belong to an outdated phase

        Current phase: ${e}
        You called an action from outdated phase: ${t}

        Tips:

        - Do not use preDragActions actions after calling preDragActions.lift()
      `), !1) : !0 : (r && process.env.NODE_ENV !== "production" && oe(`
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
  return o ? !(!o.options.isEnabled || !As(t.getState(), r)) : (process.env.NODE_ENV !== "production" && oe(`Unable to find draggable with id: ${r}`), !1);
}
function If({
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
  const a = r.draggable.getById(o), l = Bf(t, a.descriptor.id);
  if (!l)
    return process.env.NODE_ENV !== "production" && oe(`Unable to find draggable element with id: ${o}`), null;
  if (s && !a.options.canDragInteractiveElements && vf(l, s))
    return null;
  const f = e.claim(i || tt);
  let c = "PRE_DRAG";
  function d() {
    return a.options.shouldRespectForcePress;
  }
  function p() {
    return e.isActive(f);
  }
  function E(g, w) {
    on({
      expected: g,
      phase: c,
      isLockActive: p,
      shouldWarn: !0
    }) && n.dispatch(w());
  }
  const m = E.bind(null, "DRAGGING");
  function D(g) {
    function w() {
      e.release(), c = "COMPLETED";
    }
    c !== "PRE_DRAG" && (w(), process.env.NODE_ENV !== "production" ? h(!1, `Cannot lift in phase ${c}`) : h(!1)), n.dispatch(sl(g.liftActionArgs)), c = "DRAGGING";
    function B(L, j = {
      shouldBlockNextClick: !1
    }) {
      if (g.cleanup(), j.shouldBlockNextClick) {
        const M = We(window, [{
          eventName: "click",
          fn: xf,
          options: {
            once: !0,
            passive: !1,
            capture: !0
          }
        }]);
        setTimeout(M);
      }
      w(), n.dispatch(ms({
        reason: L
      }));
    }
    return {
      isActive: () => on({
        expected: "DRAGGING",
        phase: c,
        isLockActive: p,
        shouldWarn: !1
      }),
      shouldRespectForcePress: d,
      drop: (L) => B("DROP", L),
      cancel: (L) => B("CANCEL", L),
      ...g.actions
    };
  }
  function v(g) {
    const w = jt((L) => {
      m(() => Ds({
        client: L
      }));
    });
    return {
      ...D({
        liftActionArgs: {
          id: o,
          clientSelection: g,
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
  function A() {
    const g = {
      moveUp: () => m(ml),
      moveRight: () => m(gl),
      moveDown: () => m(hl),
      moveLeft: () => m(El)
    };
    return D({
      liftActionArgs: {
        id: o,
        clientSelection: Cf(l),
        movementMode: "SNAP"
      },
      cleanup: tt,
      actions: g
    });
  }
  function y() {
    on({
      expected: "PRE_DRAG",
      phase: c,
      isLockActive: p,
      shouldWarn: !0
    }) && e.release();
  }
  return {
    isActive: () => on({
      expected: "PRE_DRAG",
      phase: c,
      isLockActive: p,
      shouldWarn: !1
    }),
    shouldRespectForcePress: d,
    fluidLift: v,
    snapLift: A,
    abort: y
  };
}
const _f = [cf, pf, Ef];
function Pf({
  contextId: e,
  store: t,
  registry: n,
  customSensors: r,
  enableDefaultSensors: o
}) {
  const i = [...o ? _f : [], ...r || []], s = C.useState(() => qd())[0], u = R(function(D, v) {
    Ht(D) && !Ht(v) && s.tryAbandon();
  }, [s]);
  Me(function() {
    let D = t.getState();
    return t.subscribe(() => {
      const A = t.getState();
      u(D, A), D = A;
    });
  }, [s, t, u]), Me(() => s.tryAbandon, [s.tryAbandon]);
  const a = R((m) => Vs({
    lockAPI: s,
    registry: n,
    store: t,
    draggableId: m
  }), [s, n, t]), l = R((m, D, v) => If({
    lockAPI: s,
    registry: n,
    contextId: e,
    store: t,
    draggableId: m,
    forceSensorStop: D || null,
    sourceEvent: v && v.sourceEvent ? v.sourceEvent : null
  }), [e, s, n, t]), f = R((m) => Of(e, m), [e]), c = R((m) => {
    const D = n.draggable.findById(m);
    return D ? D.options : null;
  }, [n.draggable]), d = R(function() {
    s.isClaimed() && (s.tryAbandon(), t.getState().phase !== "IDLE" && t.dispatch($r()));
  }, [s, t]), p = R(() => s.isClaimed(), [s]), E = Y(() => ({
    canGetLock: a,
    tryGetLock: l,
    findClosestDraggableId: f,
    findOptionsForDraggable: c,
    tryReleaseLock: d,
    isLockClaimed: p
  }), [a, l, f, c, d, p]);
  bf(i);
  for (let m = 0; m < i.length; m++)
    i[m](E);
}
const Rf = (e) => ({
  onBeforeCapture: (t) => {
    const n = () => {
      e.onBeforeCapture && e.onBeforeCapture(t);
    };
    N.version.startsWith("16") || N.version.startsWith("17") ? n() : vr.flushSync(n);
  },
  onBeforeDragStart: e.onBeforeDragStart,
  onDragStart: e.onDragStart,
  onDragEnd: e.onDragEnd,
  onDragUpdate: e.onDragUpdate
}), Tf = (e) => ({
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
function Vf(e) {
  const {
    contextId: t,
    setCallbacks: n,
    sensors: r,
    nonce: o,
    dragHandleUsageInstructions: i
  } = e, s = C.useRef(null);
  Hd();
  const u = Kr(e), a = R(() => Rf(u.current), [u]), l = R(() => Tf(u.current), [u]), f = Td(t), c = Md({
    contextId: t,
    text: i
  }), d = Od(t, o), p = R((M) => {
    Bt(s).dispatch(M);
  }, []), E = Y(() => vo({
    publishWhileDragging: al,
    updateDroppableScroll: ll,
    updateDroppableIsEnabled: dl,
    updateDroppableIsCombineEnabled: fl,
    collectionStarting: cl
  }, p), [p]), m = Id(), D = Y(() => id(m, E), [m, E]), v = Y(() => Cd({
    scrollWindow: sd,
    scrollDroppable: D.scrollDroppable,
    getAutoScrollerOptions: l,
    ...vo({
      move: Ds
    }, p)
  }), [D.scrollDroppable, p, l]), A = Bd(t), y = Y(() => td({
    announce: f,
    autoScroller: v,
    dimensionMarshal: D,
    focusMarshal: A,
    getResponders: a,
    styleMarshal: d
  }), [f, v, D, A, a, d]);
  process.env.NODE_ENV !== "production" && s.current && s.current !== y && process.env.NODE_ENV !== "production" && oe("unexpected store change"), s.current = y;
  const b = R(() => {
    const M = Bt(s);
    M.getState().phase !== "IDLE" && M.dispatch($r());
  }, []), g = R(() => {
    const M = Bt(s).getState();
    return M.phase === "DROP_ANIMATING" ? !0 : M.phase === "IDLE" ? !1 : M.isDragging;
  }, []), w = Y(() => ({
    isDragging: g,
    tryAbort: b
  }), [g, b]);
  n(w);
  const B = R((M) => As(Bt(s).getState(), M), []), L = R(() => ct(Bt(s).getState()), []), j = Y(() => ({
    marshal: D,
    focus: A,
    contextId: t,
    canLift: B,
    isMovementAllowed: L,
    dragHandleUsageInstructionsId: c,
    registry: m
  }), [t, D, c, A, B, L, m]);
  return Pf({
    contextId: t,
    store: y,
    registry: m,
    customSensors: r || null,
    enableDefaultSensors: e.enableDefaultSensors !== !1
  }), C.useEffect(() => b, [b]), N.createElement(On.Provider, {
    value: j
  }, N.createElement(Ia, {
    context: Hr,
    store: y
  }, e.children));
}
let Lf = 0;
function jf() {
  return Y(() => `${Lf++}`, []);
}
function $f() {
  return N.useId();
}
var Mf = "useId" in N ? $f : jf;
function JD(e) {
  const t = Mf(), n = e.dragHandleUsageInstructions || dn.dragHandleUsageInstructions;
  return N.createElement(Ya, null, (r) => N.createElement(Vf, {
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
const fi = {
  dragging: 5e3,
  dropAnimating: 4500
}, kf = (e, t) => t ? Tt.drop(t.duration) : e ? Tt.snap : Tt.fluid, Gf = (e, t) => {
  if (e)
    return t ? Wt.opacity.drop : Wt.opacity.combining;
}, Wf = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function Uf(e) {
  const n = e.dimension.client, {
    offset: r,
    combineWith: o,
    dropping: i
  } = e, s = !!o, u = Wf(e), a = !!i, l = a ? pr.drop(r, s) : pr.moveTo(r);
  return {
    position: "fixed",
    top: n.marginBox.top,
    left: n.marginBox.left,
    boxSizing: "border-box",
    width: n.borderBox.width,
    height: n.borderBox.height,
    transition: kf(u, i),
    transform: l,
    opacity: Gf(s, a),
    zIndex: a ? fi.dropAnimating : fi.dragging,
    pointerEvents: "none"
  };
}
function zf(e) {
  return {
    transform: pr.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function Hf(e) {
  return e.type === "DRAGGING" ? Uf(e) : zf(e);
}
function qf(e, t, n = ye) {
  const r = window.getComputedStyle(t), o = t.getBoundingClientRect(), i = Wi(o, r), s = hn(i, n), u = {
    client: i,
    tagName: t.tagName.toLowerCase(),
    display: r.display
  }, a = {
    x: i.marginBox.width,
    y: i.marginBox.height
  };
  return {
    descriptor: e,
    placeholder: u,
    displaceBy: a,
    client: i,
    page: s
  };
}
function Yf(e) {
  const t = qr("draggable"), {
    descriptor: n,
    registry: r,
    getDraggableRef: o,
    canDragInteractiveElements: i,
    shouldRespectForcePress: s,
    isEnabled: u
  } = e, a = Y(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: s,
    isEnabled: u
  }), [i, u, s]), l = R((p) => {
    const E = o();
    return E || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot get dimension when no ref is set") : h(!1)), qf(n, E, p);
  }, [n, o]), f = Y(() => ({
    uniqueId: t,
    descriptor: n,
    options: a,
    getDimension: l
  }), [n, l, a, t]), c = C.useRef(f), d = C.useRef(!0);
  Me(() => (r.draggable.register(c.current), () => r.draggable.unregister(c.current)), [r.draggable]), Me(() => {
    if (d.current) {
      d.current = !1;
      return;
    }
    const p = c.current;
    c.current = f, r.draggable.update(f, p);
  }, [f, r.draggable]);
}
var Xr = N.createContext(null);
function Ls(e) {
  e && Xt(e) || (process.env.NODE_ENV !== "production" ? h(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : h(!1));
}
function Kf(e, t, n) {
  Qt(() => {
    function r(i) {
      return `Draggable[id: ${i}]: `;
    }
    const o = e.draggableId;
    o || (process.env.NODE_ENV !== "production" ? h(!1, "Draggable requires a draggableId") : h(!1)), typeof o != "string" && (process.env.NODE_ENV !== "production" ? h(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof o}] (value: ${o})`) : h(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? h(!1, `${r(o)} requires an integer index prop`) : h(!1)), e.mapped.type !== "DRAGGING" && (Ls(n()), e.isEnabled && (Bs(t, o) || (process.env.NODE_ENV !== "production" ? h(!1, `${r(o)} Unable to find drag handle`) : h(!1))));
  });
}
function Jf(e) {
  Yr(() => {
    const t = C.useRef(e);
    Qt(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? h(!1, "Draggable isClone prop value changed during component life") : h(!1));
    }, [e]);
  });
}
function bn(e) {
  const t = C.useContext(e);
  return t || (process.env.NODE_ENV !== "production" ? h(!1, "Could not find required context") : h(!1)), t;
}
function Xf(e) {
  e.preventDefault();
}
const Qf = (e) => {
  const t = C.useRef(null), n = R((w = null) => {
    t.current = w;
  }, []), r = R(() => t.current, []), {
    contextId: o,
    dragHandleUsageInstructionsId: i,
    registry: s
  } = bn(On), {
    type: u,
    droppableId: a
  } = bn(Xr), l = Y(() => ({
    id: e.draggableId,
    index: e.index,
    type: u,
    droppableId: a
  }), [e.draggableId, e.index, u, a]), {
    children: f,
    draggableId: c,
    isEnabled: d,
    shouldRespectForcePress: p,
    canDragInteractiveElements: E,
    isClone: m,
    mapped: D,
    dropAnimationFinished: v
  } = e;
  if (Kf(e, o, r), Jf(m), !m) {
    const w = Y(() => ({
      descriptor: l,
      registry: s,
      getDraggableRef: r,
      canDragInteractiveElements: E,
      shouldRespectForcePress: p,
      isEnabled: d
    }), [l, s, r, E, p, d]);
    Yf(w);
  }
  const A = Y(() => d ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": c,
    "data-rfd-drag-handle-context-id": o,
    draggable: !1,
    onDragStart: Xf
  } : null, [o, i, c, d]), y = R((w) => {
    D.type === "DRAGGING" && D.dropping && w.propertyName === "transform" && (N.version.startsWith("16") || N.version.startsWith("17") ? v() : vr.flushSync(v));
  }, [v, D]), b = Y(() => {
    const w = Hf(D), B = D.type === "DRAGGING" && D.dropping ? y : void 0;
    return {
      innerRef: n,
      draggableProps: {
        "data-rfd-draggable-context-id": o,
        "data-rfd-draggable-id": c,
        style: w,
        onTransitionEnd: B
      },
      dragHandleProps: A
    };
  }, [o, A, c, D, y, n]), g = Y(() => ({
    draggableId: l.id,
    type: l.type,
    source: {
      index: l.index,
      droppableId: l.droppableId
    }
  }), [l.droppableId, l.id, l.index, l.type]);
  return N.createElement(N.Fragment, null, f(b, D.snapshot, g));
};
var Zf = Qf, js = (e, t) => e === t, $s = (e) => {
  const {
    combine: t,
    destination: n
  } = e;
  return n ? n.droppableId : t ? t.droppableId : null;
};
const ep = (e) => e.combine ? e.combine.draggableId : null, tp = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function np() {
  const e = be((o, i) => ({
    x: o,
    y: i
  })), t = be((o, i, s = null, u = null, a = null) => ({
    isDragging: !0,
    isClone: i,
    isDropAnimating: !!a,
    dropAnimation: a,
    mode: o,
    draggingOver: s,
    combineWith: u,
    combineTargetFor: null
  })), n = be((o, i, s, u, a = null, l = null, f = null) => ({
    mapped: {
      type: "DRAGGING",
      dropping: null,
      draggingOver: a,
      combineWith: l,
      mode: i,
      offset: o,
      dimension: s,
      forceShouldAnimate: f,
      snapshot: t(i, u, a, l, null)
    }
  }));
  return (o, i) => {
    if (Ht(o)) {
      if (o.critical.draggable.id !== i.draggableId)
        return null;
      const s = o.current.client.offset, u = o.dimensions.draggables[i.draggableId], a = $e(o.impact), l = tp(o.impact), f = o.forceShouldAnimate;
      return n(e(s.x, s.y), o.movementMode, u, i.isClone, a, l, f);
    }
    if (o.phase === "DROP_ANIMATING") {
      const s = o.completed;
      if (s.result.draggableId !== i.draggableId)
        return null;
      const u = i.isClone, a = o.dimensions.draggables[i.draggableId], l = s.result, f = l.mode, c = $s(l), d = ep(l), E = {
        duration: o.dropDuration,
        curve: kr.drop,
        moveTo: o.newHomeClientOffset,
        opacity: d ? Wt.opacity.drop : null,
        scale: d ? Wt.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: o.newHomeClientOffset,
          dimension: a,
          dropping: E,
          draggingOver: c,
          combineWith: d,
          mode: f,
          forceShouldAnimate: null,
          snapshot: t(f, u, c, d, E)
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
const rp = {
  mapped: {
    type: "SECONDARY",
    offset: ye,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: Ms(null)
  }
};
function op() {
  const e = be((s, u) => ({
    x: s,
    y: u
  })), t = be(Ms), n = be((s, u = null, a) => ({
    mapped: {
      type: "SECONDARY",
      offset: s,
      combineTargetFor: u,
      shouldAnimateDisplacement: a,
      snapshot: t(u)
    }
  })), r = (s) => s ? n(ye, s, !0) : null, o = (s, u, a, l) => {
    const f = a.displaced.visible[s], c = !!(l.inVirtualList && l.effected[s]), d = wn(a), p = d && d.draggableId === s ? u : null;
    if (!f) {
      if (!c)
        return r(p);
      if (a.displaced.invisible[s])
        return null;
      const D = Ft(l.displacedBy.point), v = e(D.x, D.y);
      return n(v, p, !0);
    }
    if (c)
      return r(p);
    const E = a.displacedBy.point, m = e(E.x, E.y);
    return n(m, p, f.shouldAnimate);
  };
  return (s, u) => {
    if (Ht(s))
      return s.critical.draggable.id === u.draggableId ? null : o(u.draggableId, s.critical.draggable.id, s.impact, s.afterCritical);
    if (s.phase === "DROP_ANIMATING") {
      const a = s.completed;
      return a.result.draggableId === u.draggableId ? null : o(u.draggableId, a.result.draggableId, a.impact, a.afterCritical);
    }
    return null;
  };
}
const ip = () => {
  const e = np(), t = op();
  return (r, o) => e(r, o) || t(r, o) || rp;
}, sp = {
  dropAnimationFinished: hs
}, up = ki(ip, sp, null, {
  context: Hr,
  areStatePropsEqual: js
})(Zf);
var ap = up;
function ks(e) {
  return bn(Xr).isUsingCloneFor === e.draggableId && !e.isClone ? null : N.createElement(ap, e);
}
function XD(e) {
  const t = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0, n = !!e.disableInteractiveElementBlocking, r = !!e.shouldRespectForcePress;
  return N.createElement(ks, gt({}, e, {
    isClone: !1,
    isEnabled: t,
    canDragInteractiveElements: n,
    shouldRespectForcePress: r
  }));
}
const Qr = (e) => (t) => e === t, cp = Qr("scroll"), lp = Qr("auto"), dp = Qr("visible"), pi = (e, t) => t(e.overflowX) || t(e.overflowY), fp = (e, t) => t(e.overflowX) && t(e.overflowY), Gs = (e) => {
  const t = window.getComputedStyle(e), n = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return pi(n, cp) || pi(n, lp);
}, pp = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = zt(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, h(!1)), !Gs(e))
    return !1;
  const n = window.getComputedStyle(t), r = {
    overflowX: n.overflowX,
    overflowY: n.overflowY
  };
  return fp(r, dp) || process.env.NODE_ENV !== "production" && oe(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, Ws = (e) => e == null ? null : e === document.body ? pp() ? e : null : e === document.documentElement ? null : Gs(e) ? e : Ws(e.parentElement);
var Us = Ws, Dp = (e) => {
  !e || !Us(e.parentElement) || process.env.NODE_ENV !== "production" && oe(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, hr = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const zs = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : zs(e.parentElement) : !1;
var mp = (e) => {
  const t = Us(e), n = zs(e);
  return {
    closestScrollable: t,
    isFixedOnPage: n
  };
}, hp = ({
  descriptor: e,
  isEnabled: t,
  isCombineEnabled: n,
  isFixedOnPage: r,
  direction: o,
  client: i,
  page: s,
  closest: u
}) => {
  const a = (() => {
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
          value: ye,
          displacement: ye
        }
      }
    };
  })(), l = o === "vertical" ? Rr : Zi, f = bt({
    page: s,
    withPlaceholder: null,
    axis: l,
    frame: a
  });
  return {
    descriptor: e,
    isCombineEnabled: n,
    isFixedOnPage: r,
    axis: l,
    isEnabled: t,
    client: i,
    page: s,
    frame: a,
    subject: f
  };
};
const gp = (e, t) => {
  const n = Ui(e);
  if (!t || e !== t)
    return n;
  const r = n.paddingBox.top - t.scrollTop, o = n.paddingBox.left - t.scrollLeft, i = r + t.scrollHeight, s = o + t.scrollWidth, a = xr({
    top: r,
    right: s,
    bottom: i,
    left: o
  }, n.border);
  return Ir({
    borderBox: a,
    margin: n.margin,
    border: n.border,
    padding: n.padding
  });
};
var Ep = ({
  ref: e,
  descriptor: t,
  env: n,
  windowScroll: r,
  direction: o,
  isDropDisabled: i,
  isCombineEnabled: s,
  shouldClipSubject: u
}) => {
  const a = n.closestScrollable, l = gp(e, a), f = hn(l, r), c = (() => {
    if (!a)
      return null;
    const p = Ui(a), E = {
      scrollHeight: a.scrollHeight,
      scrollWidth: a.scrollWidth
    };
    return {
      client: p,
      page: hn(p, r),
      scroll: hr(a),
      scrollSize: E,
      shouldClipSubject: u
    };
  })();
  return hp({
    descriptor: t,
    isEnabled: !i,
    isCombineEnabled: s,
    isFixedOnPage: n.isFixedOnPage,
    direction: o,
    client: l,
    page: f,
    closest: c
  });
};
const bp = {
  passive: !1
}, yp = {
  passive: !0
};
var Di = (e) => e.shouldPublishImmediately ? bp : yp;
const sn = (e) => e && e.env.closestScrollable || null;
function vp(e) {
  const t = C.useRef(null), n = bn(On), r = qr("droppable"), {
    registry: o,
    marshal: i
  } = n, s = Kr(e), u = Y(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), a = C.useRef(u), l = Y(() => be((b, g) => {
    t.current || (process.env.NODE_ENV !== "production" ? h(!1, "Can only update scroll when dragging") : h(!1));
    const w = {
      x: b,
      y: g
    };
    i.updateDroppableScroll(u.id, w);
  }), [u.id, i]), f = R(() => {
    const b = t.current;
    return !b || !b.env.closestScrollable ? ye : hr(b.env.closestScrollable);
  }, []), c = R(() => {
    const b = f();
    l(b.x, b.y);
  }, [f, l]), d = Y(() => jt(c), [c]), p = R(() => {
    const b = t.current, g = sn(b);
    if (b && g || (process.env.NODE_ENV !== "production" ? h(!1, "Could not find scroll options while scrolling") : h(!1)), b.scrollOptions.shouldPublishImmediately) {
      c();
      return;
    }
    d();
  }, [d, c]), E = R((b, g) => {
    t.current && (process.env.NODE_ENV !== "production" ? h(!1, "Cannot collect a droppable while a drag is occurring") : h(!1));
    const w = s.current, B = w.getDroppableRef();
    B || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot collect without a droppable ref") : h(!1));
    const L = mp(B), j = {
      ref: B,
      descriptor: u,
      env: L,
      scrollOptions: g
    };
    t.current = j;
    const M = Ep({
      ref: B,
      descriptor: u,
      env: L,
      windowScroll: b,
      direction: w.direction,
      isDropDisabled: w.isDropDisabled,
      isCombineEnabled: w.isCombineEnabled,
      shouldClipSubject: !w.ignoreContainerClipping
    }), x = L.closestScrollable;
    return x && (x.setAttribute(ui.contextId, n.contextId), x.addEventListener("scroll", p, Di(j.scrollOptions)), process.env.NODE_ENV !== "production" && Dp(x)), M;
  }, [n.contextId, u, p, s]), m = R(() => {
    const b = t.current, g = sn(b);
    return b && g || (process.env.NODE_ENV !== "production" ? h(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : h(!1)), hr(g);
  }, []), D = R(() => {
    const b = t.current;
    b || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot stop drag when no active drag") : h(!1));
    const g = sn(b);
    t.current = null, g && (d.cancel(), g.removeAttribute(ui.contextId), g.removeEventListener("scroll", p, Di(b.scrollOptions)));
  }, [p, d]), v = R((b) => {
    const g = t.current;
    g || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot scroll when there is no drag") : h(!1));
    const w = sn(g);
    w || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot scroll a droppable with no closest scrollable") : h(!1)), w.scrollTop += b.y, w.scrollLeft += b.x;
  }, []), A = Y(() => ({
    getDimensionAndWatchScroll: E,
    getScrollWhileDragging: m,
    dragStopped: D,
    scroll: v
  }), [D, E, m, v]), y = Y(() => ({
    uniqueId: r,
    descriptor: u,
    callbacks: A
  }), [A, u, r]);
  Me(() => (a.current = y.descriptor, o.droppable.register(y), () => {
    t.current && (process.env.NODE_ENV !== "production" && oe("Unsupported: changing the droppableId or type of a Droppable during a drag"), D()), o.droppable.unregister(y);
  }), [A, u, D, y, i, o.droppable]), Me(() => {
    t.current && i.updateDroppableIsEnabled(a.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), Me(() => {
    t.current && i.updateDroppableIsCombineEnabled(a.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function Yn() {
}
const mi = {
  width: 0,
  height: 0,
  margin: tc
}, Cp = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: n
}) => e || n === "close" ? mi : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, Ap = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: n
}) => {
  const r = Cp({
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
}, Fp = (e) => {
  const t = C.useRef(null), n = R(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: r,
    onTransitionEnd: o,
    onClose: i,
    contextId: s
  } = e, [u, a] = C.useState(e.animate === "open");
  C.useEffect(() => u ? r !== "open" ? (n(), a(!1), Yn) : t.current ? Yn : (t.current = setTimeout(() => {
    t.current = null, a(!1);
  }), n) : Yn, [r, u, n]);
  const l = R((c) => {
    c.propertyName === "height" && (o(), r === "close" && i());
  }, [r, i, o]), f = Ap({
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
var wp = N.memo(Fp);
function Kn(e) {
  return typeof e == "boolean";
}
function Jn(e, t) {
  t.forEach((n) => n(e));
}
const Sp = [function({
  props: t
}) {
  t.droppableId || (process.env.NODE_ENV !== "production" ? h(!1, "A Droppable requires a droppableId prop") : h(!1)), typeof t.droppableId != "string" && (process.env.NODE_ENV !== "production" ? h(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof t.droppableId}]`) : h(!1));
}, function({
  props: t
}) {
  Kn(t.isDropDisabled) || (process.env.NODE_ENV !== "production" ? h(!1, "isDropDisabled must be a boolean") : h(!1)), Kn(t.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? h(!1, "isCombineEnabled must be a boolean") : h(!1)), Kn(t.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? h(!1, "ignoreContainerClipping must be a boolean") : h(!1));
}, function({
  getDroppableRef: t
}) {
  Ls(t());
}], Np = [function({
  props: t,
  getPlaceholderRef: n
}) {
  !t.placeholder || n() || process.env.NODE_ENV !== "production" && oe(`
      Droppable setup issue [droppableId: "${t.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], Op = [function({
  props: t
}) {
  t.renderClone || (process.env.NODE_ENV !== "production" ? h(!1, "Must provide a clone render function (renderClone) for virtual lists") : h(!1));
}, function({
  getPlaceholderRef: t
}) {
  t() && (process.env.NODE_ENV !== "production" ? h(!1, "Expected virtual list to not have a placeholder") : h(!1));
}];
function Bp(e) {
  Qt(() => {
    Jn(e, Sp), e.props.mode === "standard" && Jn(e, Np), e.props.mode === "virtual" && Jn(e, Op);
  });
}
class xp extends N.PureComponent {
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
const Ip = (e) => {
  const t = C.useContext(On);
  t || (process.env.NODE_ENV !== "production" ? h(!1, "Could not find app context") : h(!1));
  const {
    contextId: n,
    isMovementAllowed: r
  } = t, o = C.useRef(null), i = C.useRef(null), {
    children: s,
    droppableId: u,
    type: a,
    mode: l,
    direction: f,
    ignoreContainerClipping: c,
    isDropDisabled: d,
    isCombineEnabled: p,
    snapshot: E,
    useClone: m,
    updateViewportMaxScroll: D,
    getContainerForClone: v
  } = e, A = R(() => o.current, []), y = R((P = null) => {
    o.current = P;
  }, []), b = R(() => i.current, []), g = R((P = null) => {
    i.current = P;
  }, []);
  Bp({
    props: e,
    getDroppableRef: A,
    getPlaceholderRef: b
  });
  const w = R(() => {
    r() && D({
      maxScroll: Cs()
    });
  }, [r, D]);
  vp({
    droppableId: u,
    type: a,
    mode: l,
    direction: f,
    isDropDisabled: d,
    isCombineEnabled: p,
    ignoreContainerClipping: c,
    getDroppableRef: A
  });
  const B = Y(() => N.createElement(xp, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: P,
    data: $,
    animate: k
  }) => N.createElement(wp, {
    placeholder: $,
    onClose: P,
    innerRef: g,
    animate: k,
    contextId: n,
    onTransitionEnd: w
  })), [n, w, e.placeholder, e.shouldAnimatePlaceholder, g]), L = Y(() => ({
    innerRef: y,
    placeholder: B,
    droppableProps: {
      "data-rfd-droppable-id": u,
      "data-rfd-droppable-context-id": n
    }
  }), [n, u, B, y]), j = m ? m.dragging.draggableId : null, M = Y(() => ({
    droppableId: u,
    type: a,
    isUsingCloneFor: j
  }), [u, j, a]);
  function x() {
    if (!m)
      return null;
    const {
      dragging: P,
      render: $
    } = m, k = N.createElement(ks, {
      draggableId: P.draggableId,
      index: P.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (z, J) => $(z, J, P));
    return hu.createPortal(k, v());
  }
  return N.createElement(Xr.Provider, {
    value: M
  }, s(L, E), x());
};
var _p = Ip;
function Pp() {
  return document.body || (process.env.NODE_ENV !== "production" ? h(!1, "document.body is not ready") : h(!1)), document.body;
}
const hi = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: Pp
}, Hs = (e) => {
  let t = {
    ...e
  }, n;
  for (n in hi)
    e[n] === void 0 && (t = {
      ...t,
      [n]: hi[n]
    });
  return t;
}, Xn = (e, t) => e === t.droppable.type, gi = (e, t) => t.draggables[e.draggable.id], Rp = () => {
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
  }, n = be((i) => ({
    draggableId: i.id,
    type: i.type,
    source: {
      index: i.index,
      droppableId: i.droppableId
    }
  })), r = be((i, s, u, a, l, f) => {
    const c = l.descriptor.id;
    if (l.descriptor.droppableId === i) {
      const E = f ? {
        render: f,
        dragging: n(l.descriptor)
      } : null, m = {
        isDraggingOver: u,
        draggingOverWith: u ? c : null,
        draggingFromThisWith: c,
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
    if (!a)
      return e;
    const p = {
      isDraggingOver: u,
      draggingOverWith: c,
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
    const u = Hs(s), a = u.droppableId, l = u.type, f = !u.isDropDisabled, c = u.renderClone;
    if (Ht(i)) {
      const d = i.critical;
      if (!Xn(l, d))
        return t;
      const p = gi(d, i.dimensions), E = $e(i.impact) === a;
      return r(a, f, E, E, p, c);
    }
    if (i.phase === "DROP_ANIMATING") {
      const d = i.completed;
      if (!Xn(l, d.critical))
        return t;
      const p = gi(d.critical, i.dimensions);
      return r(a, f, $s(d.result) === a, $e(d.impact) === a, p, c);
    }
    if (i.phase === "IDLE" && i.completed && !i.shouldFlush) {
      const d = i.completed;
      if (!Xn(l, d.critical))
        return t;
      const p = $e(d.impact) === a, E = !!(d.impact.at && d.impact.at.type === "COMBINE"), m = d.critical.droppable.id === a;
      return p ? E ? e : t : m ? e : t;
    }
    return t;
  };
}, Tp = {
  updateViewportMaxScroll: Dl
}, Vp = ki(Rp, Tp, (e, t, n) => ({
  ...Hs(n),
  ...e,
  ...t
}), {
  context: Hr,
  areStatePropsEqual: js
})(_p);
var QD = Vp;
const Lp = (e) => /* @__PURE__ */ C.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512", ...e }, /* @__PURE__ */ C.createElement("path", { d: "M0 117.66v346.32c0 11.32 11.43 19.06 21.94 14.86L160 416V32L20.12 87.95A32.006 32.006 0 000 117.66zM192 416l192 64V96L192 32v384zM554.06 33.16L416 96v384l139.88-55.95A31.996 31.996 0 00576 394.34V48.02c0-11.32-11.43-19.06-21.94-14.86z" })), dt = (e, t, n, r, o) => {
  if (!r)
    throw new Error(o ?? `Invalid property path: ${t}
Couldn't access "${n}" in ${JSON.stringify(e)}`);
}, Ei = (e) => typeof e == "object" && e !== null && !Array.isArray(e), fn = (e) => Array.isArray(e), qs = (e, t) => e.filter((n, r) => r !== t), jp = (e, t, n, r = {}) => {
  const { remove: o = !1, createNew: i = !0, noError: s = !1 } = r, u = e, a = typeof (l = t) == "string" ? l : typeof l == "number" ? String(l) : l.reduce((d, p) => typeof p == "number" ? `${d}[${p}]` : d === "" ? p : `${d}.${p}`, "");
  var l;
  const f = Object.assign(Object.assign({}, r), { remove: o, createNew: i, noError: s, fullData: u, fullPath: a }), c = Array.isArray(t) ? t : ((d) => Array.isArray(d) ? d : d.split(/(\.|\[\d+\])/).filter((p) => p !== "." && p !== "").map((p) => {
    const E = /\[(\d+)\]/.exec(p);
    return E ? Number(E[1]) : p;
  }).flat())(t).filter((d) => d !== "");
  return fn(e) && o && c.length === 1 ? qs(e, c[0]) : It(e, c, n, f);
}, It = (e, t, n, r) => {
  const o = Ei(e) ? Object.assign({}, e) : null, i = fn(e) ? [...e] : null;
  if (t.length === 0)
    return e;
  if (!o && !i)
    throw new Error("Can't assign property -- invalid input object");
  const { createNew: s, remove: u, noError: a, fullData: l, fullPath: f } = r, c = t[0];
  if (i && typeof c == "string")
    return i.map((m) => It(m, t, n, r));
  if (t.length === 1) {
    if (o && typeof c == "string") {
      const m = $p(o, c, n, r);
      return m ?? o;
    }
    return i && typeof c == "number" ? (Mp(i, c, n, r), i) : (dt(l, f, c, a), e);
  }
  const d = o || i || [];
  if (u && t.length === 2 && typeof t[1] == "number") {
    const m = d[c], D = t[1];
    return fn(m) ? d[c] = qs(m, D) : dt(l, f, c, a, "Trying to remove an indexed item from an object that is not an array"), d;
  }
  const p = t.slice(1);
  if (c in e) {
    if (E = d[c], !fn(E) && !Ei(E)) {
      if (!s)
        return dt(l, f, c, a), d;
      d[c] = {};
    }
    return d[c] = It(d[c], p, n, r), d;
  }
  var E;
  if (s) {
    const m = typeof p[0] == "number" ? [] : {};
    if (o)
      return d[c] = m, d[c] = It(d[c], p, n, r), d;
    if (i && Array.isArray(d)) {
      d.push(m);
      const D = d.length - 1;
      return d[D] = It(d[D], p, n, r), d;
    }
  }
  return dt(l, f, c, a), d;
}, $p = (e, t, n, r) => {
  const { remove: o, createNew: i, noError: s, insertAfter: u, insertBefore: a, fullData: l, fullPath: f } = r;
  if (a || u) {
    const d = Object.entries(e);
    let p = d.findIndex(([E, m]) => E === (a ?? u));
    return u && p++, d.splice(p, 0, [t, n]), Object.fromEntries(d);
  }
  const c = t in e;
  o ? c ? delete e[t] : dt(l, f, t, s) : i || c ? e[t] = n : dt(l, f, t, s);
}, Mp = (e, t, n, r) => {
  const { noError: o, fullData: i, fullPath: s, createNew: u, insert: a } = r;
  a && e.splice(t, 0, n), t in e ? e[t] = n : u ? e.push(n) : dt(i, s, t, o);
}, yn = (e, t, n) => {
  const r = Array.isArray(t) ? t : kp(t);
  if (r.length === 0)
    return e;
  const o = r[0];
  if (Array.isArray(e) && typeof o != "number")
    return e.map((s) => yn(s, r, n));
  if (typeof e != "object" || e === null || !(o in e))
    return Gp(e, o, n);
  const i = e[o];
  return r.length === 1 ? i : yn(i, r.slice(1), n);
}, kp = (e) => e.split(/(\.|\[\d+\])/).filter((t) => t !== "." && t !== "").map((t) => {
  const n = /\[(\d+)\]/.exec(t);
  return n ? Number(n[1]) : t;
}).flat(), Gp = (e, t, n) => {
  if (n === void 0)
    throw new Error(`Unable to extract object property
Looking for property: ${t}
In object: ${JSON.stringify(e)}`);
  return n;
};
var Wp = /[\u1680\u2000-\u200A\u202F\u205F\u3000]/, Up = /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/, zp = /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/, Qn = {
  Space_Separator: Wp,
  ID_Start: Up,
  ID_Continue: zp
}, pe = {
  isSpaceSeparator(e) {
    return typeof e == "string" && Qn.Space_Separator.test(e);
  },
  isIdStartChar(e) {
    return typeof e == "string" && (e >= "a" && e <= "z" || e >= "A" && e <= "Z" || e === "$" || e === "_" || Qn.ID_Start.test(e));
  },
  isIdContinueChar(e) {
    return typeof e == "string" && (e >= "a" && e <= "z" || e >= "A" && e <= "Z" || e >= "0" && e <= "9" || e === "$" || e === "_" || e === "‌" || e === "‍" || Qn.ID_Continue.test(e));
  },
  isDigit(e) {
    return typeof e == "string" && /[0-9]/.test(e);
  },
  isHexDigit(e) {
    return typeof e == "string" && /[0-9A-Fa-f]/.test(e);
  }
};
let gr, Be, Qe, vn, ot, He, Ee, Zr, Vt;
var Hp = function(t, n) {
  gr = String(t), Be = "start", Qe = [], vn = 0, ot = 1, He = 0, Ee = void 0, Zr = void 0, Vt = void 0;
  do
    Ee = qp(), Jp[Be]();
  while (Ee.type !== "eof");
  return typeof n == "function" ? Er({ "": Vt }, "", n) : Vt;
};
function Er(e, t, n) {
  const r = e[t];
  if (r != null && typeof r == "object")
    if (Array.isArray(r))
      for (let o = 0; o < r.length; o++) {
        const i = String(o), s = Er(r, i, n);
        s === void 0 ? delete r[i] : Object.defineProperty(r, i, {
          value: s,
          writable: !0,
          enumerable: !0,
          configurable: !0
        });
      }
    else
      for (const o in r) {
        const i = Er(r, o, n);
        i === void 0 ? delete r[o] : Object.defineProperty(r, o, {
          value: i,
          writable: !0,
          enumerable: !0,
          configurable: !0
        });
      }
  return n.call(e, t, r);
}
let W, G, _t, Xe, q;
function qp() {
  for (W = "default", G = "", _t = !1, Xe = 1; ; ) {
    q = Ze();
    const e = Ys[W]();
    if (e)
      return e;
  }
}
function Ze() {
  if (gr[vn])
    return String.fromCodePoint(gr.codePointAt(vn));
}
function F() {
  const e = Ze();
  return e === `
` ? (ot++, He = 0) : e ? He += e.length : He++, e && (vn += e.length), e;
}
const Ys = {
  default() {
    switch (q) {
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
    if (pe.isSpaceSeparator(q)) {
      F();
      return;
    }
    return Ys[Be]();
  },
  comment() {
    switch (q) {
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
    switch (q) {
      case "*":
        F(), W = "multiLineCommentAsterisk";
        return;
      case void 0:
        throw ae(F());
    }
    F();
  },
  multiLineCommentAsterisk() {
    switch (q) {
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
    switch (q) {
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
    switch (q) {
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
        G = F(), W = "decimalPointLeading";
        return;
      case "0":
        G = F(), W = "zero";
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
        G = F(), W = "decimalInteger";
        return;
      case "I":
        return F(), st("nfinity"), ue("numeric", 1 / 0);
      case "N":
        return F(), st("aN"), ue("numeric", NaN);
      case '"':
      case "'":
        _t = F() === '"', G = "", W = "string";
        return;
    }
    throw ae(F());
  },
  identifierNameStartEscape() {
    if (q !== "u")
      throw ae(F());
    F();
    const e = br();
    switch (e) {
      case "$":
      case "_":
        break;
      default:
        if (!pe.isIdStartChar(e))
          throw bi();
        break;
    }
    G += e, W = "identifierName";
  },
  identifierName() {
    switch (q) {
      case "$":
      case "_":
      case "‌":
      case "‍":
        G += F();
        return;
      case "\\":
        F(), W = "identifierNameEscape";
        return;
    }
    if (pe.isIdContinueChar(q)) {
      G += F();
      return;
    }
    return ue("identifier", G);
  },
  identifierNameEscape() {
    if (q !== "u")
      throw ae(F());
    F();
    const e = br();
    switch (e) {
      case "$":
      case "_":
      case "‌":
      case "‍":
        break;
      default:
        if (!pe.isIdContinueChar(e))
          throw bi();
        break;
    }
    G += e, W = "identifierName";
  },
  sign() {
    switch (q) {
      case ".":
        G = F(), W = "decimalPointLeading";
        return;
      case "0":
        G = F(), W = "zero";
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
        G = F(), W = "decimalInteger";
        return;
      case "I":
        return F(), st("nfinity"), ue("numeric", Xe * (1 / 0));
      case "N":
        return F(), st("aN"), ue("numeric", NaN);
    }
    throw ae(F());
  },
  zero() {
    switch (q) {
      case ".":
        G += F(), W = "decimalPoint";
        return;
      case "e":
      case "E":
        G += F(), W = "decimalExponent";
        return;
      case "x":
      case "X":
        G += F(), W = "hexadecimal";
        return;
    }
    return ue("numeric", Xe * 0);
  },
  decimalInteger() {
    switch (q) {
      case ".":
        G += F(), W = "decimalPoint";
        return;
      case "e":
      case "E":
        G += F(), W = "decimalExponent";
        return;
    }
    if (pe.isDigit(q)) {
      G += F();
      return;
    }
    return ue("numeric", Xe * Number(G));
  },
  decimalPointLeading() {
    if (pe.isDigit(q)) {
      G += F(), W = "decimalFraction";
      return;
    }
    throw ae(F());
  },
  decimalPoint() {
    switch (q) {
      case "e":
      case "E":
        G += F(), W = "decimalExponent";
        return;
    }
    if (pe.isDigit(q)) {
      G += F(), W = "decimalFraction";
      return;
    }
    return ue("numeric", Xe * Number(G));
  },
  decimalFraction() {
    switch (q) {
      case "e":
      case "E":
        G += F(), W = "decimalExponent";
        return;
    }
    if (pe.isDigit(q)) {
      G += F();
      return;
    }
    return ue("numeric", Xe * Number(G));
  },
  decimalExponent() {
    switch (q) {
      case "+":
      case "-":
        G += F(), W = "decimalExponentSign";
        return;
    }
    if (pe.isDigit(q)) {
      G += F(), W = "decimalExponentInteger";
      return;
    }
    throw ae(F());
  },
  decimalExponentSign() {
    if (pe.isDigit(q)) {
      G += F(), W = "decimalExponentInteger";
      return;
    }
    throw ae(F());
  },
  decimalExponentInteger() {
    if (pe.isDigit(q)) {
      G += F();
      return;
    }
    return ue("numeric", Xe * Number(G));
  },
  hexadecimal() {
    if (pe.isHexDigit(q)) {
      G += F(), W = "hexadecimalInteger";
      return;
    }
    throw ae(F());
  },
  hexadecimalInteger() {
    if (pe.isHexDigit(q)) {
      G += F();
      return;
    }
    return ue("numeric", Xe * Number(G));
  },
  string() {
    switch (q) {
      case "\\":
        F(), G += Yp();
        return;
      case '"':
        if (_t)
          return F(), ue("string", G);
        G += F();
        return;
      case "'":
        if (!_t)
          return F(), ue("string", G);
        G += F();
        return;
      case `
`:
      case "\r":
        throw ae(F());
      case "\u2028":
      case "\u2029":
        Xp(q);
        break;
      case void 0:
        throw ae(F());
    }
    G += F();
  },
  start() {
    switch (q) {
      case "{":
      case "[":
        return ue("punctuator", F());
    }
    W = "value";
  },
  beforePropertyName() {
    switch (q) {
      case "$":
      case "_":
        G = F(), W = "identifierName";
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
    if (pe.isIdStartChar(q)) {
      G += F(), W = "identifierName";
      return;
    }
    throw ae(F());
  },
  afterPropertyName() {
    if (q === ":")
      return ue("punctuator", F());
    throw ae(F());
  },
  beforePropertyValue() {
    W = "value";
  },
  afterPropertyValue() {
    switch (q) {
      case ",":
      case "}":
        return ue("punctuator", F());
    }
    throw ae(F());
  },
  beforeArrayValue() {
    if (q === "]")
      return ue("punctuator", F());
    W = "value";
  },
  afterArrayValue() {
    switch (q) {
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
function Yp() {
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
      return F(), Kp();
    case "u":
      return F(), br();
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
function Kp() {
  let e = "", t = Ze();
  if (!pe.isHexDigit(t) || (e += F(), t = Ze(), !pe.isHexDigit(t)))
    throw ae(F());
  return e += F(), String.fromCodePoint(parseInt(e, 16));
}
function br() {
  let e = "", t = 4;
  for (; t-- > 0; ) {
    const n = Ze();
    if (!pe.isHexDigit(n))
      throw ae(F());
    e += F();
  }
  return String.fromCodePoint(parseInt(e, 16));
}
const Jp = {
  start() {
    if (Ee.type === "eof")
      throw ut();
    Zn();
  },
  beforePropertyName() {
    switch (Ee.type) {
      case "identifier":
      case "string":
        Zr = Ee.value, Be = "afterPropertyName";
        return;
      case "punctuator":
        un();
        return;
      case "eof":
        throw ut();
    }
  },
  afterPropertyName() {
    if (Ee.type === "eof")
      throw ut();
    Be = "beforePropertyValue";
  },
  beforePropertyValue() {
    if (Ee.type === "eof")
      throw ut();
    Zn();
  },
  beforeArrayValue() {
    if (Ee.type === "eof")
      throw ut();
    if (Ee.type === "punctuator" && Ee.value === "]") {
      un();
      return;
    }
    Zn();
  },
  afterPropertyValue() {
    if (Ee.type === "eof")
      throw ut();
    switch (Ee.value) {
      case ",":
        Be = "beforePropertyName";
        return;
      case "}":
        un();
    }
  },
  afterArrayValue() {
    if (Ee.type === "eof")
      throw ut();
    switch (Ee.value) {
      case ",":
        Be = "beforeArrayValue";
        return;
      case "]":
        un();
    }
  },
  end() {
  }
};
function Zn() {
  let e;
  switch (Ee.type) {
    case "punctuator":
      switch (Ee.value) {
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
      e = Ee.value;
      break;
  }
  if (Vt === void 0)
    Vt = e;
  else {
    const t = Qe[Qe.length - 1];
    Array.isArray(t) ? t.push(e) : Object.defineProperty(t, Zr, {
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
function un() {
  Qe.pop();
  const e = Qe[Qe.length - 1];
  e == null ? Be = "end" : Array.isArray(e) ? Be = "afterArrayValue" : Be = "afterPropertyValue";
}
function ae(e) {
  return Cn(e === void 0 ? `JSON5: invalid end of input at ${ot}:${He}` : `JSON5: invalid character '${Ks(e)}' at ${ot}:${He}`);
}
function ut() {
  return Cn(`JSON5: invalid end of input at ${ot}:${He}`);
}
function bi() {
  return He -= 5, Cn(`JSON5: invalid identifier character at ${ot}:${He}`);
}
function Xp(e) {
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
function Cn(e) {
  const t = new SyntaxError(e);
  return t.lineNumber = ot, t.columnNumber = He, t;
}
var Qp = function(t, n, r) {
  const o = [];
  let i = "", s, u, a = "", l;
  if (n != null && typeof n == "object" && !Array.isArray(n) && (r = n.space, l = n.quote, n = n.replacer), typeof n == "function")
    u = n;
  else if (Array.isArray(n)) {
    s = [];
    for (const m of n) {
      let D;
      typeof m == "string" ? D = m : (typeof m == "number" || m instanceof String || m instanceof Number) && (D = String(m)), D !== void 0 && s.indexOf(D) < 0 && s.push(D);
    }
  }
  return r instanceof Number ? r = Number(r) : r instanceof String && (r = String(r)), typeof r == "number" ? r > 0 && (r = Math.min(10, Math.floor(r)), a = "          ".substr(0, r)) : typeof r == "string" && (a = r.substr(0, 10)), f("", { "": t });
  function f(m, D) {
    let v = D[m];
    switch (v != null && (typeof v.toJSON5 == "function" ? v = v.toJSON5(m) : typeof v.toJSON == "function" && (v = v.toJSON(m))), u && (v = u.call(D, m, v)), v instanceof Number ? v = Number(v) : v instanceof String ? v = String(v) : v instanceof Boolean && (v = v.valueOf()), v) {
      case null:
        return "null";
      case !0:
        return "true";
      case !1:
        return "false";
    }
    if (typeof v == "string")
      return c(v);
    if (typeof v == "number")
      return String(v);
    if (typeof v == "object")
      return Array.isArray(v) ? E(v) : d(v);
  }
  function c(m) {
    const D = {
      "'": 0.1,
      '"': 0.2
    }, v = {
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
      if (v[g]) {
        A += v[g];
        continue;
      }
      if (g < " ") {
        let w = g.charCodeAt(0).toString(16);
        A += "\\x" + ("00" + w).substring(w.length);
        continue;
      }
      A += g;
    }
    const y = l || Object.keys(D).reduce((b, g) => D[b] < D[g] ? b : g);
    return A = A.replace(new RegExp(y, "g"), v[y]), y + A + y;
  }
  function d(m) {
    if (o.indexOf(m) >= 0)
      throw TypeError("Converting circular structure to JSON5");
    o.push(m);
    let D = i;
    i = i + a;
    let v = s || Object.keys(m), A = [];
    for (const b of v) {
      const g = f(b, m);
      if (g !== void 0) {
        let w = p(b) + ":";
        a !== "" && (w += " "), w += g, A.push(w);
      }
    }
    let y;
    if (A.length === 0)
      y = "{}";
    else {
      let b;
      if (a === "")
        b = A.join(","), y = "{" + b + "}";
      else {
        let g = `,
` + i;
        b = A.join(g), y = `{
` + i + b + `,
` + D + "}";
      }
    }
    return o.pop(), i = D, y;
  }
  function p(m) {
    if (m.length === 0)
      return c(m);
    const D = String.fromCodePoint(m.codePointAt(0));
    if (!pe.isIdStartChar(D))
      return c(m);
    for (let v = D.length; v < m.length; v++)
      if (!pe.isIdContinueChar(String.fromCodePoint(m.codePointAt(v))))
        return c(m);
    return m;
  }
  function E(m) {
    if (o.indexOf(m) >= 0)
      throw TypeError("Converting circular structure to JSON5");
    o.push(m);
    let D = i;
    i = i + a;
    let v = [];
    for (let y = 0; y < m.length; y++) {
      const b = f(String(y), m);
      v.push(b !== void 0 ? b : "null");
    }
    let A;
    if (v.length === 0)
      A = "[]";
    else if (a === "")
      A = "[" + v.join(",") + "]";
    else {
      let y = `,
` + i, b = v.join(y);
      A = `[
` + i + b + `,
` + D + "]";
    }
    return o.pop(), i = D, A;
  }
};
const Zp = {
  parse: Hp,
  stringify: Qp
};
var er = Zp, eD = Pt;
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
    return RegExp(e.source, tD(e));
  if (n == "Array" || n == "Object") {
    t = Array.isArray(e) ? [] : {};
    for (var r in e)
      t[r] = Pt(e[r]);
  }
  return t;
}
function tD(e) {
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
        a(r.next(l));
      } catch (f) {
        i(f);
      }
    }
    function u(l) {
      try {
        a(r.throw(l));
      } catch (f) {
        i(f);
      }
    }
    function a(l) {
      var f;
      l.done ? o(l.value) : (f = l.value, f instanceof n ? f : new n(function(c) {
        c(f);
      })).then(s, u);
    }
    a((r = r.apply(e, t || [])).next());
  });
}
var yi = [], xt = [];
(function(e, t) {
  if (e && typeof document < "u") {
    var n, r = t.prepend === !0 ? "prepend" : "append", o = t.singleTag === !0, i = typeof t.container == "string" ? document.querySelector(t.container) : document.getElementsByTagName("head")[0];
    if (o) {
      var s = yi.indexOf(i);
      s === -1 && (s = yi.push(i) - 1, xt[s] = {}), n = xt[s] && xt[s][r] ? xt[s][r] : xt[s][r] = u();
    } else
      n = u();
    e.charCodeAt(0) === 65279 && (e = e.substring(1)), n.styleSheet ? n.styleSheet.cssText += e : n.appendChild(document.createTextNode(e));
  }
  function u() {
    var a = document.createElement("style");
    if (a.setAttribute("type", "text/css"), t.attributes)
      for (var l = Object.keys(t.attributes), f = 0; f < l.length; f++)
        a.setAttribute(l[f], t.attributes[l[f]]);
    var c = r === "prepend" ? "afterbegin" : "beforeend";
    return i.insertAdjacentElement(c, a), a;
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
  return me("div", { style: { display: "grid" }, children: [S("textarea", { id: `${t}_textarea`, style: Object.assign({ height: "auto", gridArea: "1 / 1 / 2 / 2", overflowY: "auto", whiteSpace: "pre-wrap" }, i), rows: 1, className: e, name: `${t}_textarea`, value: n, onChange: (u) => r(u.target.value), autoFocus: !0, onFocus: (u) => {
    n.length < 40 && u.target.select();
  }, onKeyDown: o }), S("span", { className: e, style: Object.assign({ visibility: "hidden", height: "auto", gridArea: "1 / 1 / 2 / 2", color: "red", opacity: 0.9, whiteSpace: "pre-wrap", overflowY: "auto", border: "1px solid transparent" }, i), children: s })] });
}, Qs = { default: { displayName: "Default", fragments: { edit: "rgb(42, 161, 152)" }, styles: { container: { backgroundColor: "#f6f6f6", fontFamily: "monospace" }, collection: {}, collectionInner: {}, collectionElement: {}, property: "#292929", bracket: { color: "rgb(0, 43, 54)", fontWeight: "bold" }, itemCount: { color: "rgba(0, 0, 0, 0.3)", fontStyle: "italic" }, string: "rgb(203, 75, 22)", number: "rgb(38, 139, 210)", boolean: "green", null: { color: "rgb(220, 50, 47)", fontVariant: "small-caps", fontWeight: "bold" }, input: ["#292929"], inputHighlight: "#b3d8ff", error: { fontSize: "0.8em", color: "red", fontWeight: "bold" }, iconCollection: "rgb(0, 43, 54)", iconEdit: "edit", iconDelete: "rgb(203, 75, 22)", iconAdd: "edit", iconCopy: "rgb(38, 139, 210)", iconOk: "green", iconCancel: "rgb(203, 75, 22)" } }, githubDark: { displayName: "Github Dark", styles: { container: { backgroundColor: "#0d1117", color: "white" }, property: "#E6EDF3", bracket: "#56d364", itemCount: "#8B949E", string: "#A5D6FF", number: "#D2A8FF", boolean: { color: "#FF7B72", fontSize: "90%", fontWeight: "bold" }, null: "green", iconCollection: "#D2A8FF", iconEdit: "#D2A8FF", iconDelete: "rgb(203, 75, 22)", iconAdd: "rgb(203, 75, 22)", iconCopy: "#A5D6FF", iconOk: "#56d364", iconCancel: "rgb(203, 75, 22)" } }, githubLight: { displayName: "Github Light", styles: { container: "white", property: "#1F2328", bracket: "#00802e", itemCount: "#8B949E", string: "#0A3069", number: "#953800", boolean: { color: "#CF222E", fontSize: "90%", fontWeight: "bold" }, null: "#FF7B72", iconCollection: "#8250DF", iconEdit: "#8250DF", iconDelete: "rgb(203, 75, 22)", iconAdd: "#8250DF", iconCopy: "#57606A" } }, monoDark: { displayName: "Black & White", fragments: { lightText: { color: "white" }, midGrey: "#5c5c5c" }, styles: { container: ["lightText", { backgroundColor: "black" }], property: "lightText", bracket: "midGrey", itemCount: "#4a4a4a", string: "#a8a8a8", number: "#666666", boolean: { color: "#848484", fontStyle: "italic" }, null: "#333333", iconCollection: "midGrey", iconEdit: "midGrey", iconDelete: "midGrey", iconAdd: "midGrey", iconCopy: "midGrey", iconOk: "midGrey", iconCancel: "midGrey" } }, monoLight: { fragments: { midGrey: "#a3a3a3" }, displayName: "White & Black", styles: { container: "white", property: "black", bracket: "midGrey", itemCount: "#b5b5b5", string: "#575757", number: "#999999", boolean: { color: "#7b7b7b", fontStyle: "italic" }, null: "#cccccc", iconCollection: "midGrey", iconEdit: "midGrey", iconDelete: "midGrey", iconAdd: "midGrey", iconCopy: "midGrey", iconOk: "midGrey", iconCancel: "midGrey" } }, candyWrapper: { displayName: "Candy Wrapper", fragments: { minty: { backgroundColor: "#F1FAEE" }, pale: { color: "#A8DADC" }, mid: { color: "#457B9D" }, dark: { color: "#1D3557" }, pop: { color: "#E63946" }, darkBlue: { color: "#2B2D42" } }, styles: { container: "minty", property: "pop", bracket: "dark", itemCount: "pale", string: "mid", number: ["darkBlue", { fontSize: "85%" }], boolean: ["mid", { fontStyle: "italic", fontWeight: "bold", fontSize: "80%" }], null: ["#cccccc", { fontWeight: "bold" }], input: { border: "1px solid rgb(115, 194, 198)" }, iconCollection: "#1D3557", iconEdit: "#457B9D", iconDelete: "#E63946", iconAdd: "#2B2D42", iconCopy: "#1D3557", iconCancel: "#E63946" } }, psychedelic: { displayName: "Psychedelic", fragments: { minty: { backgroundColor: "#F1FAEE" }, pale: { color: "#A8DADC" }, mid: { color: "#457B9D" }, dark: { color: "#1D3557" }, pop: { color: "#E63946" }, fluroYellow: "rgb(242, 228, 21)", fluroGreen: "rgb(68, 255, 62)", hotPink: "#f7379a" }, styles: { container: { backgroundColor: "unset", background: "linear-gradient(90deg, hsla(333, 100%, 53%, 1) 0%, hsla(33, 94%, 57%, 1) 100%)", color: "black" }, property: "black", bracket: "fluroYellow", itemCount: ["pale", { opacity: 0.7 }], string: "white", number: ["#33d9ff", { fontSize: "90%", fontWeight: "bold" }], boolean: ["fluroGreen", { fontWeight: "bold", fontSize: "80%" }], null: ["black", { fontWeight: "bold", opacity: 0.3, backgroundColor: "rgb(255, 255, 255, 0.5)", padding: "0 0.4em", borderRadius: "0.4em" }], iconCollection: "fluroYellow", iconEdit: ["black"], iconDelete: ["white", { opacity: 0.5 }], iconAdd: ["white", { opacity: 0.5 }], iconCopy: "rgb(32, 84, 242)", iconOk: "fluroGreen", iconCancel: "hotPink" } } }, nD = { container: {}, collection: {}, collectionInner: {}, collectionElement: {}, property: {}, bracket: {}, itemCount: {}, string: {}, number: {}, boolean: {}, null: {}, input: {}, inputHighlight: {}, error: {}, iconCollection: {}, iconEdit: {}, iconDelete: {}, iconAdd: {}, iconCopy: {}, iconOk: {}, iconCancel: {} }, rD = Qs.default, Zs = C.createContext({ getStyles: () => ({}), setTheme: (e) => {
}, icons: {}, setIcons: () => {
} }), oD = ({ children: e }) => {
  const [t, n] = C.useState(nD), [r, o] = C.useState({});
  return S(Zs.Provider, { value: { getStyles: (i, s) => typeof t[i] == "function" ? t[i](s) : t[i], setTheme: (i) => {
    const s = iD(i);
    n(s);
  }, icons: r, setIcons: o }, children: e });
}, et = () => C.useContext(Zs), iD = (e) => {
  var t, n, r, o;
  const i = {}, s = (Array.isArray(e) ? e : [e]).map((l) => e === "default" ? {} : typeof l == "string" ? an(Qs[l], i) : sD(l) ? an({ fragments: {}, styles: l }, i) : an(l, i)), u = an(rD, {});
  Object.keys(u).forEach((l) => {
    const f = l;
    s.forEach((c) => {
      c[f] && (u[f] = Object.assign(Object.assign({}, u[f]), c[f]));
    });
  });
  const a = Object.assign({}, u);
  return Object.entries(i).forEach(([l, f]) => {
    const c = l;
    a[c] = (d) => {
      const p = f(d) || {};
      return Object.assign(Object.assign({}, u[c]), p);
    };
  }), typeof (a == null ? void 0 : a.inputHighlight) != "function" && (!((t = a == null ? void 0 : a.inputHighlight) === null || t === void 0) && t.backgroundColor) && document.documentElement.style.setProperty("--jer-highlight-color", (n = a == null ? void 0 : a.inputHighlight) === null || n === void 0 ? void 0 : n.backgroundColor), typeof (a == null ? void 0 : a.iconCopy) != "function" && (!((r = a == null ? void 0 : a.iconCopy) === null || r === void 0) && r.color) && document.documentElement.style.setProperty("--jer-icon-copy-color", (o = a == null ? void 0 : a.iconCopy) === null || o === void 0 ? void 0 : o.color), a;
}, an = (e, t) => {
  const { fragments: n, styles: r } = e, o = {};
  return Object.entries(r).forEach(([i, s]) => {
    const u = (Array.isArray(s) ? s : [s]).reduce((a, l) => {
      var f;
      if (typeof l == "function")
        return t[i] = l, Object.assign({}, a);
      if (typeof l == "string") {
        const c = (f = n == null ? void 0 : n[l]) !== null && f !== void 0 ? f : l;
        return typeof c == "string" ? Object.assign(Object.assign({}, a), { [uD[i]]: c }) : Object.assign(Object.assign({}, a), c);
      }
      return Object.assign(Object.assign({}, a), l);
    }, {});
    o[i] = u;
  }), o;
}, sD = (e) => !("styles" in e), uD = { container: "backgroundColor", collection: "backgroundColor", collectionInner: "backgroundColor", collectionElement: "backgroundColor", property: "color", bracket: "color", itemCount: "color", string: "color", number: "color", boolean: "color", null: "color", input: "color", inputHighlight: "backgroundColor", error: "color", iconCollection: "color", iconEdit: "color", iconDelete: "color", iconAdd: "color", iconCopy: "color", iconOk: "color", iconCancel: "color" }, aD = (e, t = 200) => typeof e == "string" ? e.length < t ? e : `${e.slice(0, t - 2).trim()}...` : e, Zt = (e) => e.map((t) => t === "" ? String.fromCharCode(0) : t).join("."), cD = ({ value: e, setValue: t, isEditing: n, path: r, setIsEditing: o, handleEdit: i, handleCancel: s, stringTruncate: u, showStringQuotes: a, nodeData: l }) => {
  const { getStyles: f } = et(), c = Zt(r), d = a ? '"' : "";
  return n ? S(Xs, { className: "jer-input-text", name: c, value: e, setValue: t, isEditing: n, handleKeyPress: (p) => {
    p.key !== "Enter" || p.shiftKey ? p.key === "Escape" && s() : i();
  }, styles: f("input", l) }) : me("div", { id: `${c}_display`, onDoubleClick: () => o(!0), onClick: (p) => {
    (p.getModifierState("Control") || p.getModifierState("Meta")) && o(!0);
  }, className: "jer-value-string", style: f("string", l), children: [d, aD(e, u), d] });
}, lD = ({ value: e, setValue: t, isEditing: n, path: r, setIsEditing: o, handleEdit: i, handleCancel: s, nodeData: u }) => {
  const { getStyles: a } = et();
  return n ? S("input", { className: "jer-input-number", type: "text", name: Zt(r), value: e, onChange: (l) => t(l.target.value.replace(/[^0-9.-]/g, "")), autoFocus: !0, onFocus: (l) => l.target.select(), onKeyDown: (l) => {
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
  }, style: { width: String(e).length / 1.5 + 2 + "em" } }) : S("span", { onDoubleClick: () => o(!0), className: "jer-value-number", style: a("number", u), children: e });
}, dD = ({ value: e, setValue: t, isEditing: n, path: r, setIsEditing: o, handleEdit: i, handleCancel: s, nodeData: u }) => {
  const { getStyles: a } = et();
  C.useEffect(() => (n && document.addEventListener("keydown", l), () => document.removeEventListener("keydown", l)), [n, i]);
  const l = (f) => {
    f.key === "Enter" ? i() : f.key === "Escape" && s();
  };
  return n ? S("input", { className: "jer-input-boolean", type: "checkbox", name: Zt(r), checked: e, onChange: () => t(!e) }) : S("span", { onDoubleClick: () => o(!0), className: "jer-value-boolean", style: a("boolean", u), children: String(e) });
}, fD = ({ value: e, isEditing: t, setIsEditing: n, handleEdit: r, handleCancel: o, nodeData: i }) => {
  const { getStyles: s } = et();
  C.useEffect(() => (t && document.addEventListener("keydown", u), () => document.removeEventListener("keydown", u)), [t]);
  const u = (a) => {
    a.key === "Enter" ? r() : a.key === "Escape" && o();
  };
  return S("div", { onDoubleClick: () => n(!0), className: "jer-value-null", style: s("null", i), children: String(e) });
}, pD = ({ value: e, translate: t, isEditing: n, handleEdit: r, handleCancel: o, nodeData: i }) => {
  C.useEffect(() => (n && document.addEventListener("keydown", s), () => document.removeEventListener("keydown", s)), []);
  const s = (u) => {
    u.key === "Enter" ? r() : u.key === "Escape" && o();
  };
  return S("span", { className: "jer-value-object", children: `{${t("DEFAULT_NEW_KEY", i)}: "${String(e)}" }` });
}, DD = ({ value: e, isEditing: t, handleEdit: n, handleCancel: r }) => {
  C.useEffect(() => (t && document.addEventListener("keydown", o), () => document.removeEventListener("keydown", o)), []);
  const o = (i) => {
    i.key === "Enter" ? n() : i.key === "Escape" && r();
  };
  return S("span", { className: "jer-value-array", children: `[${e === null ? "" : String(e)}]` });
}, mD = ({ value: e }) => {
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
}, hD = ({ size: e, style: t, className: n }) => me("svg", { viewBox: "0 0 24 24", fill: "currentColor", width: e, height: e, className: n, style: t, children: [S("path", { d: "M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4z" }), S("path", { d: "M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" })] }), gD = ({ size: e, style: t, className: n }) => me("svg", { viewBox: "0 0 24 24", fill: "currentColor", width: e, height: e, className: n, style: t, transform: "translate(0, 0.5)", children: [S("path", { d: "M7 17.013l4.413-.015 9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583v4.43zM18.045 4.458l1.589 1.583-1.597 1.582-1.586-1.585 1.594-1.58zM9 13.417l6.03-5.973 1.586 1.586-6.029 5.971L9 15.006v-1.589z" }), S("path", { d: "M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2z" })] }), ED = ({ size: e, style: t, className: n }) => S("svg", { viewBox: "0 0 24 24", fill: "currentColor", width: e, height: e, className: n, style: t, children: S("path", { d: "M6 19a2 2 0 002 2h8a2 2 0 002-2V7H6v12m2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12M15.5 4l-1-1h-5l-1 1H5v2h14V4h-3.5z" }) }), bD = ({ size: e, style: t, className: n }) => me("svg", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, viewBox: "0 0 24 24", width: e, height: e, className: n, style: t, children: [S("path", { d: "M9 2 H15 A1 1 0 0 1 16 3 V5 A1 1 0 0 1 15 6 H9 A1 1 0 0 1 8 5 V3 A1 1 0 0 1 9 2 z" }), S("path", { d: "M8 4H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2v-2M16 4h2a2 2 0 012 2v4M21 14H11" }), S("path", { d: "M15 10l-4 4 4 4" })] }), yD = ({ size: e, style: t, className: n }) => me("svg", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, viewBox: "0 0 24 24", width: e, height: e, className: n, style: t, children: [S("path", { d: "M22 11.08V12a10 10 0 11-5.93-9.14" }), S("path", { d: "M22 4L12 14.01l-3-3" })] }), vD = ({ size: e, style: t, className: n }) => S("svg", { baseProfile: "tiny", viewBox: "0 0 24 24", fill: "currentColor", width: e, height: e, className: n, style: t, children: S("path", { d: "M12 4c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm-5 8c0-.832.224-1.604.584-2.295l6.711 6.711A4.943 4.943 0 0112 17c-2.757 0-5-2.243-5-5zm9.416 2.295L9.705 7.584A4.943 4.943 0 0112 7c2.757 0 5 2.243 5 5 0 .832-.224 1.604-.584 2.295z" }) }), CD = ({ size: e, style: t, className: n }) => S("svg", { viewBox: "0 0 512 512", fill: "currentColor", width: e, height: e, className: n, style: t, children: S("path", { d: "M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" }) }), ft = ({ name: e, nodeData: t, rotate: n }) => {
  var r, o, i, s, u, a, l;
  const { getStyles: f, icons: c } = et(), d = { size: "1.4em", className: "jer-icon" };
  switch (e) {
    case "add":
      return (r = c == null ? void 0 : c.add) !== null && r !== void 0 ? r : S(hD, Object.assign({}, d, { style: f("iconAdd", t) }));
    case "edit":
      return (o = c == null ? void 0 : c.edit) !== null && o !== void 0 ? o : S(gD, Object.assign({}, d, { style: f("iconEdit", t) }));
    case "delete":
      return (i = c == null ? void 0 : c.delete) !== null && i !== void 0 ? i : S(ED, Object.assign({}, d, { style: f("iconDelete", t), size: "1.45em" }));
    case "copy":
      return (s = c == null ? void 0 : c.copy) !== null && s !== void 0 ? s : S(bD, Object.assign({}, d, { style: f("iconCopy", t), size: "1.2em" }));
    case "ok":
      return (u = c == null ? void 0 : c.ok) !== null && u !== void 0 ? u : S(yD, Object.assign({}, d, { style: Object.assign({ fontSize: "90%" }, f("iconOk", t)) }));
    case "cancel":
      return (a = c == null ? void 0 : c.cancel) !== null && a !== void 0 ? a : S(vD, Object.assign({}, d, { style: Object.assign({ fontSize: "130%" }, f("iconCancel", t)) }));
    case "chevron":
      return (l = c == null ? void 0 : c.chevron) !== null && l !== void 0 ? l : S(CD, { className: "jer-accordion-icon" + (n ? " jer-rotate-90" : ""), size: "1em", style: f("iconCollection", t) });
    default:
      return S(Cr, {});
  }
}, eu = ({ startEdit: e, handleDelete: t, handleAdd: n, enableClipboard: r, type: o, nodeData: i, translate: s }) => {
  const { getStyles: u } = et(), a = s("KEY_NEW", i), [l, f] = C.useState(!1), [c, d] = C.useState(a), { key: p, path: E, value: m } = i;
  return C.useEffect(() => {
    l || d(a);
  }, [l]), me("div", { className: "jer-edit-buttons", style: l ? { opacity: 1 } : void 0, children: [r && S("div", { onClick: (D) => {
    let v, A = "value", y = "";
    r && ((D.ctrlKey || D.metaKey) === !0 ? (v = AD(E), y = v, A = "path") : (v = m, y = o ? JSON.stringify(m, null, 2) : String(v)), navigator.clipboard.writeText(y)), typeof r == "function" && r({ value: v, stringValue: y, path: E, key: p, type: A });
  }, className: "jer-copy-pulse", children: S(ft, { name: "copy", nodeData: i }) }), e && S("div", { onClick: e, children: S(ft, { name: "edit", nodeData: i }) }), t && S("div", { onClick: t, children: S(ft, { name: "delete", nodeData: i }) }), n && S("div", { onClick: () => {
    o === "object" ? f(!0) : n("");
  }, children: S(ft, { name: "add", nodeData: i }) }), l && n && o === "object" && me(Cr, { children: [S("input", { className: "jer-input-new-key", type: "text", name: "new-object-key", value: c, onChange: (D) => d(D.target.value), autoFocus: !0, onFocus: (D) => D.target.select(), onKeyDown: (D) => {
    D.key === "Enter" && n ? (f(!1), n(c)) : D.key === "Escape" && f(!1);
  }, style: u("input", i) }), S(eo, { onOk: () => {
    c && (f(!1), n(c));
  }, onCancel: () => {
    f(!1);
  }, nodeData: i })] })] });
}, eo = ({ onOk: e, onCancel: t, nodeData: n }) => me("div", { className: "jer-confirm-buttons", children: [S("div", { onClick: e, children: S(ft, { name: "ok", nodeData: n }) }), S("div", { onClick: t, children: S(ft, { name: "cancel", nodeData: n }) })] }), AD = (e) => e.reduce((t, n) => typeof n == "number" ? `${t}[${n}]` : t === "" ? n : `${t}.${n}`, ""), FD = ["string", "number", "boolean", "null", "object", "array"], tu = (e = [], t) => {
  const n = e.filter(({ condition: E }) => E(t));
  if (n.length === 0)
    return {};
  const r = n[0], { element: o, wrapperElement: i, customNodeProps: s, wrapperProps: u, hideKey: a = !1, showEditTools: l = !0, showOnEdit: f = !1, showOnView: c = !0, showCollectionWrapper: d = !0 } = r, p = Js(r, ["element", "wrapperElement", "customNodeProps", "wrapperProps", "hideKey", "showEditTools", "showOnEdit", "showOnView", "showCollectionWrapper"]);
  return Object.assign({ CustomNode: o, CustomWrapper: i, customNodeProps: s, wrapperProps: u, hideKey: a, showEditTools: l, showOnEdit: f, showOnView: c, showCollectionWrapper: d }, p);
}, An = (e) => e !== null && typeof e == "object", nu = (e, t, n, r = "") => {
  if (!n && !r)
    return !0;
  switch (e) {
    case "collection":
      if (n) {
        if (n(t, r))
          return !0;
        if (!yr(r, t, n))
          return !1;
      }
      if (!n && r && !yr(r, t))
        return !1;
      break;
    case "value":
      if (n && !n(t, r) || !n && r && !Ct(t, r))
        return !1;
  }
  return !0;
}, yr = (e = "", t, n = Ct) => {
  const r = t.value;
  return Object.entries(r).some(([o, i]) => {
    const s = [...t.path, o], u = Object.assign(Object.assign({}, t), { key: o, path: s, level: t.level + 1, value: i, size: s.length, parentData: r });
    return An(i) ? yr(e, u, n) : n(u, e);
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
}, vi = ({ key: e, path: t }, n = "") => !!Ct({ value: e }, n) || !!t.some((r) => Ct({ value: r }, n)), ru = C.createContext({ collapseState: null, setCollapseState: () => {
}, doesPathMatch: () => !1, currentlyEditingElement: null, setCurrentlyEditingElement: () => {
}, areChildrenBeingEdited: () => !1 }), wD = ({ children: e }) => {
  const [t, n] = C.useState(null), [r, o] = C.useState(null);
  return S(ru.Provider, { value: { collapseState: t, setCollapseState: n, doesPathMatch: (i) => {
    if (t === null)
      return !1;
    for (const [s, u] of t.path.entries())
      if (u !== i[s])
        return !1;
    return !0;
  }, currentlyEditingElement: r, setCurrentlyEditingElement: o, areChildrenBeingEdited: (i) => r !== null && r.includes(i) }, children: e });
}, to = () => C.useContext(ru), ou = (e) => {
  const { data: t, parentData: n, nodeData: r, onEdit: o, onDelete: i, onChange: s, onError: u, showErrorMessages: a, enableClipboard: l, restrictEditFilter: f, restrictDeleteFilter: c, restrictTypeSelection: d, searchFilter: p, searchText: E, showLabel: m, stringTruncate: D, showStringQuotes: v, indent: A, translate: y, customNodeDefinitions: b } = e, { getStyles: g } = et(), { currentlyEditingElement: w, setCurrentlyEditingElement: B, setCollapseState: L } = to(), [j, M] = C.useState(typeof t == "function" ? "**INVALID_FUNCTION**" : t), [x, P] = C.useState(null), { key: $, path: k } = r, z = tu(b, r), [J, X] = C.useState(cn(t, z)), K = Zt(k), ie = C.useCallback((T) => {
    if (!s)
      return void M(T);
    const se = s({ currentData: r.fullData, newValue: T, currentValue: j, name: $, path: k });
    M(se);
  }, [s]);
  C.useEffect(() => {
    M(typeof t == "function" ? "**INVALID_FUNCTION**" : t), X(cn(t, z));
  }, [t, x]);
  const De = C.useMemo(() => !f(r), [r]), ve = C.useMemo(() => !c(r), [r]), fe = C.useMemo(() => (T, se) => {
    var Se;
    Se = T.message, a && (P(Se), setTimeout(() => P(null), 2500)), console.warn("Error", Se), u && u({ currentData: r.fullData, errorValue: se, currentValue: j, name: $, path: k, error: T });
  }, [u, a]), { CustomNode: de, customNodeProps: I, hideKey: U, showEditTools: ce = !0, showOnEdit: Ce, showOnView: H } = z, ne = [...FD, ...b.filter(({ showInTypesSelector: T = !1, name: se }) => T && !!se).map(({ name: T }) => T)], ge = C.useMemo(() => {
    if (typeof d == "boolean")
      return d ? [] : ne;
    if (Array.isArray(d))
      return d;
    const T = d(r);
    return typeof T == "boolean" ? T ? [] : ne : T;
  }, [r, d]);
  if (!nu("value", r, p, E))
    return null;
  const xe = () => {
    let T;
    switch (B(null), J) {
      case "object":
        T = { [y("DEFAULT_NEW_KEY", r)]: j };
        break;
      case "array":
        T = j ?? [];
        break;
      case "number": {
        const se = Number(j);
        T = isNaN(se) ? 0 : se;
        break;
      }
      default:
        T = j;
    }
    o(T, k).then((se) => {
      se && fe({ code: "UPDATE_ERROR", message: se }, T);
    });
  }, O = () => {
    B(null), M(t), X(cn(t, z));
  }, le = w === K, _ = w === `key_${K}`, Pe = typeof k.slice(-1)[0] != "number" && De && ve, Re = !le && x, Ie = le && ge.length > 0, we = J !== "invalid" && !x && ce, ke = m && _, Te = m && !_ && !U, qe = { value: j, parentData: n, setValue: ie, isEditing: le, setIsEditing: De ? () => B(K) : () => {
  }, handleEdit: xe, handleCancel: O, path: k, stringTruncate: D, showStringQuotes: v, nodeData: r, translate: y }, Ye = de && (le && Ce || !le && H) ? S(de, Object.assign({}, e, { value: j, customNodeProps: I, setValue: ie, handleEdit: xe, handleCancel: O, handleKeyPress: (T) => {
    T.key === "Enter" ? xe() : T.key === "Escape" && O();
  }, isEditing: le, setIsEditing: () => B(K), getStyles: g })) : SD(cn(t), qe);
  return S("div", { className: "jer-component jer-value-component", style: { marginLeft: A / 2 + "em" }, children: me("div", { className: "jer-value-main-row", style: { flexWrap: $.length > 10 ? "wrap" : "nowrap" }, children: [Te && me("span", { className: "jer-key-text", style: Object.assign(Object.assign({}, g("property", r)), { minWidth: `${Math.min(String($).length + 1, 5)}ch`, flexShrink: $.length > 10 ? 1 : 0 }), onDoubleClick: () => Pe && B(`key_${K}`), children: [$ === "" ? S("span", { className: "jer-empty-string" }) : $, ":"] }), ke && S("input", { className: "jer-input-text jer-key-edit", type: "text", name: K, defaultValue: $, autoFocus: !0, onFocus: (T) => T.target.select(), onKeyDown: (T) => {
    T.key === "Enter" ? ((se) => {
      if (B(null), $ === se || !n)
        return;
      const Se = k.slice(0, -1);
      if (Object.keys(n).includes(se))
        return void fe({ code: "KEY_EXISTS", message: y("ERROR_KEY_EXISTS", r) }, se);
      const Ve = Object.fromEntries(Object.entries(n).map(([ht, en]) => ht === $ ? [se, en] : [ht, en]));
      o(Ve, Se);
    })(T.target.value) : T.key === "Escape" && O();
  }, style: { width: String($).length / 1.5 + 0.5 + "em" } }), me("div", { className: "jer-value-and-buttons", children: [S("div", { className: "jer-input-component", children: Ye }), le ? S(eo, { onOk: xe, onCancel: O, nodeData: r }) : we && S(eu, { startEdit: De ? () => B(K) : void 0, handleDelete: ve ? () => {
    i(j, k).then((T) => {
      T && fe({ code: "DELETE_ERROR", message: T }, j);
    });
  } : void 0, enableClipboard: l, translate: y, nodeData: r }), Ie && me("div", { className: "jer-select", children: [S("select", { name: `${$}-type-select`, className: "jer-type-select", onChange: (T) => ((se) => {
    const Se = b.find((Ve) => Ve.name === se);
    if (Se)
      o(Se.defaultValue, k), X(se);
    else {
      const Ve = ND(j, se, y("DEFAULT_NEW_KEY", r), z != null && z.CustomNode ? y("DEFAULT_STRING", r) : void 0);
      ie(Ve), o(Ve, k), L({ path: k, collapsed: !1 }), X(se);
    }
  })(T.target.value), value: J, children: ge.map((T) => S("option", { value: T, children: T }, T)) }), S("span", { className: "focus" })] }), Re && S("span", { className: "jer-error-slug", style: g("error", r), children: x })] })] }) });
}, cn = (e, t) => t != null && t.CustomNode && (t != null && t.name) && t.showInTypesSelector ? t.name : typeof e == "string" ? "string" : typeof e == "number" ? "number" : typeof e == "boolean" ? "boolean" : e === null ? "null" : "invalid", SD = (e, t) => {
  const n = t.value;
  switch (e) {
    case "string":
      return S(cD, Object.assign({}, t, { value: n }));
    case "number":
      return S(lD, Object.assign({}, t, { value: n }));
    case "boolean":
      return S(dD, Object.assign({}, t, { value: n }));
    case "null":
      return S(fD, Object.assign({}, t));
    case "object":
      return S(pD, Object.assign({}, t, { value: n }));
    case "array":
      return S(DD, Object.assign({}, t));
    default:
      return S(mD, Object.assign({}, t));
  }
}, ND = (e, t, n, r) => {
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
  const { getStyles: s } = et(), { collapseState: u, setCollapseState: a, doesPathMatch: l, currentlyEditingElement: f, setCurrentlyEditingElement: c, areChildrenBeingEdited: d } = to(), { onEdit: p, onAdd: E, onDelete: m, onError: D, showErrorMessages: v, restrictEditFilter: A, restrictDeleteFilter: y, restrictAddFilter: b, collapseFilter: g, enableClipboard: w, searchFilter: B, searchText: L, indent: j, keySort: M, showArrayIndices: x, defaultValue: P, translate: $, customNodeDefinitions: k, useJSON5Editor: z } = i, J = C.useMemo(() => z ? z instanceof Object ? (V) => er.stringify(V, z) : (V) => er.stringify(V, { space: 2 }) : (V) => JSON.stringify(V, null, 2), [z]), [X, K] = C.useState(J(t)), [ie, De] = C.useState(null), ve = g(n), [fe, de] = C.useState(ve), I = Object.assign(Object.assign({}, n), { collapsed: fe }), { path: U, key: ce, size: Ce } = I, H = Zt(U), ne = C.useRef(!ve), [ge, xe] = C.useState(!1);
  C.useEffect(() => {
    K(J(t));
  }, [t]), C.useEffect(() => {
    const V = g(I);
    ne.current = !V, de(V);
  }, [g]), C.useEffect(() => {
    u !== null && l(U) && (ne.current = !0, de(u.collapsed));
  }, [u]);
  const O = C.useMemo(() => !A(I), [I]), le = C.useMemo(() => !y(I), [I]), _ = C.useMemo(() => !b(I), [I]), Pe = C.useMemo(() => (V) => typeof P != "function" ? P : P(V), [P]), { CustomNode: Re, customNodeProps: Ie, CustomWrapper: we, wrapperProps: ke = {}, hideKey: Te, showEditTools: qe = !0, showOnEdit: Ye, showOnView: T, showCollectionWrapper: se = !0 } = C.useMemo(() => tu(k, I), []), Se = C.useMemo(() => (V, re) => {
    var Le;
    Le = V.message, v && (De(Le), setTimeout(() => De(null), 2500)), console.warn("Error", Le), D && D({ currentData: I.fullData, errorValue: re, currentValue: t, name: ce, path: U, error: V });
  }, [D, v]);
  if (!nu("collection", I, B, L) && I.level > 0)
    return null;
  const Ve = Array.isArray(t) ? "array" : "object", ht = Ve === "array" ? { open: "[", close: "]" } : { open: "{", close: "}" }, en = getComputedStyle(document.documentElement).getPropertyValue("--jer-expand-transition-time"), no = (V) => {
    V.key === "Enter" && (V.metaKey || V.shiftKey || V.ctrlKey) ? xn() : V.key === "Escape" && tn();
  }, xn = () => {
    try {
      const V = er.parse(X);
      if (c(null), De(null), JSON.stringify(V) === JSON.stringify(t))
        return;
      p(V, U).then((re) => {
        re && Se({ code: "UPDATE_ERROR", message: re }, V);
      });
    } catch {
      Se({ code: "INVALID_JSON", message: $("ERROR_INVALID_JSON", I) }, X);
    }
  }, uu = U.length > 0 ? () => {
    m(t, U).then((V) => {
      V && Se({ code: "DELETE_ERROR", message: V }, yn(t, U));
    });
  } : void 0, tn = () => {
    c(null), De(null), K(J(t));
  }, Ke = f === H, au = f === `key_${H}`, ro = typeof U.slice(-1)[0] == "number", cu = r !== null && O && _ && le && !ro, oo = o === "when-closed" ? fe : o, lu = !Ke && qe, du = (x || !ro) && !Te && ce !== void 0, fu = Re && (Ke && Ye || !Ke && T), pu = M && Ve === "object", io = Object.entries(t).map(([V, re]) => [Ve === "array" ? Number(V) : V, re]);
  pu && io.sort(typeof M == "function" ? (V, re) => M(V[0], re[0]) : void 0);
  const Du = JSON.stringify(t, null, 2).replace(/\\n/g, `
`).split(`
`).length, so = ne.current ? Ke ? S("div", { className: "jer-collection-text-edit", children: me("div", { children: [S(Xs, { className: "jer-collection-text-area", name: H, value: X, setValue: K, isEditing: Ke, handleKeyPress: no, styles: s("input", I) }), S("div", { className: "jer-collection-input-button-row", children: S(eo, { onOk: xn, onCancel: tn, nodeData: I }) })] }) }) : io.map(([V, re], Le) => {
    const St = { key: V, value: re, path: [...U, V], level: U.length + 1, index: Le, size: An(re) ? Object.keys(re).length : 1, parentData: t, fullData: I.fullData };
    return S("div", { className: "jer-collection-element", style: s("collectionElement", St), children: An(re) ? S(iu, Object.assign({ data: re, parentData: t, nodeData: St, showCollectionCount: o }, i), V) : S(ou, Object.assign({ data: re, parentData: t, nodeData: St }, i, { showLabel: Ve === "object" || x }), V) }, V);
  }) : null, nn = !!se && fe;
  nn || (ne.current = !0);
  const uo = Object.assign(Object.assign({}, i), { data: t, value: t, parentData: r, nodeData: I, setValue: (V) => pn(void 0, void 0, void 0, function* () {
    return yield p(V, U);
  }), handleEdit: xn, handleCancel: tn, handleKeyPress: no, isEditing: Ke, setIsEditing: () => c(H), getStyles: s }), mu = fu ? S(Re, Object.assign({ customNodeProps: Ie }, uo, { children: so })) : so, ao = au ? S("input", { className: "jer-input-text jer-key-edit", type: "text", name: H, defaultValue: ce, autoFocus: !0, onFocus: (V) => V.target.select(), onKeyDown: (V) => {
    V.key === "Enter" ? ((re) => {
      if (c(null), ce === re || !r)
        return;
      const Le = U.slice(0, -1);
      if (Object.keys(r).includes(re))
        return void Se({ code: "KEY_EXISTS", message: $("ERROR_KEY_EXISTS", I) }, re);
      const St = Object.fromEntries(Object.entries(r).map(([fo, po]) => fo === ce ? [re, po] : [fo, po]));
      p(St, Le);
    })(V.target.value) : V.key === "Escape" && tn();
  }, style: { width: String(ce).length / 1.5 + 0.5 + "em" } }) : du && S("span", { className: "jer-key-text", style: s("property", I), onDoubleClick: () => cu && c(`key_${H}`), children: ce === "" ? S("span", { className: U.length > 0 ? "jer-empty-string" : void 0 }) : `${ce}:` }), co = lu && S(eu, { startEdit: O ? () => {
    ne.current = !0, c(H), de(!1);
  } : void 0, handleAdd: _ ? (V) => {
    de(!1);
    const re = Pe(I);
    Ve === "array" ? E(re, [...U, t.length]).then((Le) => {
      Le && Se({ code: "ADD_ERROR", message: Le }, re);
    }) : V in t ? Se({ code: "KEY_EXISTS", message: $("ERROR_KEY_EXISTS", I) }, V) : E(re, [...U, V]).then((Le) => {
      Le && Se({ code: "ADD_ERROR", message: Le }, re);
    });
  } : void 0, handleDelete: le ? uu : void 0, enableClipboard: w, type: Ve, nodeData: I, translate: $ }), lo = me("div", { className: "jer-component jer-collection-component", style: Object.assign({ marginLeft: (U.length === 0 ? 0 : j / 2) + "em" }, s("collection", I)), children: [se ? me("div", { className: "jer-collection-header-row", style: { position: "relative" }, children: [me("div", { className: "jer-collection-name", children: [S("div", { className: "jer-collapse-icon", onClick: (V) => ((re) => {
    if (re.getModifierState("Alt"))
      return ne.current = !0, void a({ collapsed: !fe, path: U });
    f && f.includes(H) || (xe(!0), ne.current = !0, de(!fe), setTimeout(() => xe(!1), 500));
  })(V), children: S(ft, { name: "chevron", rotate: fe, nodeData: I }) }), ao, !Ke && S("span", { className: "jer-brackets jer-bracket-open", style: s("bracket", I), children: ht.open })] }), !Ke && oo && S("div", { className: "jer-collection-item-count" + (oo ? " jer-visible" : " jer-hidden"), style: s("itemCount", I), children: Ce === 1 ? $("ITEM_SINGLE", Object.assign(Object.assign({}, I), { size: 1 }), 1) : $("ITEMS_MULTIPLE", I, Ce) }), S("div", { className: "jer-brackets" + (nn ? " jer-visible" : " jer-hidden"), style: s("bracket", I), children: ht.close }), co] }) : Te ? S(Cr, {}) : me("div", { className: "jer-collection-header-row", style: { position: "relative" }, children: [ao, co] }), me("div", { className: "jer-collection-inner", style: Object.assign({ maxHeight: nn ? 0 : d(H) ? void 0 : 3 * Du + "em", overflowY: nn || ge ? "hidden" : "visible", transition: `max-height ${en}` }, s("collectionInner", I)), children: [mu, S("div", { className: Ke ? "jer-collection-error-row" : "jer-collection-error-row-edit", children: ie && S("span", { className: "jer-error-slug", style: s("error", I), children: ie }) }), !Ke && se && S("div", { className: "jer-brackets jer-bracket-outside", style: s("bracket", I), children: ht.close })] })] });
  return we ? S(we, Object.assign({ customNodeProps: ke }, uo, { children: lo })) : lo;
}, OD = { ITEM_SINGLE: "{{count}} item", ITEMS_MULTIPLE: "{{count}} items", KEY_NEW: "Enter new key", ERROR_KEY_EXISTS: "Key already exists", ERROR_INVALID_JSON: "Invalid JSON", ERROR_UPDATE: "Update unsuccessful", ERROR_DELETE: "Delete unsuccessful", ERROR_ADD: "Adding node unsuccessful", DEFAULT_STRING: "New data!", DEFAULT_NEW_KEY: "key" }, BD = (e, t) => (n, r, o) => ((i, s, u, a, l) => {
  if (s[a]) {
    const c = s[a](u);
    if (c !== null)
      return c;
  }
  const f = a in i ? i[a] : OD[a];
  return l === void 0 ? f : f == null ? void 0 : f.replace("{{count}}", String(l));
})(e, t, r, n, o), xD = ({ data: e, rootName: t = "root", onUpdate: n = () => {
}, onEdit: r = n, onDelete: o = n, onAdd: i = n, onChange: s, onError: u, showErrorMessages: a = !0, enableClipboard: l = !0, theme: f = "default", icons: c, indent: d = 3, collapse: p = !1, showCollectionCount: E = !0, restrictEdit: m = !1, restrictDelete: D = !1, restrictAdd: v = !1, restrictTypeSelection: A = !1, searchFilter: y, searchText: b, searchDebounceTime: g = 350, keySort: w = !1, showArrayIndices: B = !0, showStringQuotes: L = !0, defaultValue: j = null, minWidth: M = 250, maxWidth: x = "min(600px, 90vw)", rootFontSize: P, stringTruncate: $ = 250, translations: k = {}, className: z, id: J, customText: X = {}, customNodeDefinitions: K = [], useJSON5Editor: ie = !1 }) => {
  const { getStyles: De, setTheme: ve, setIcons: fe } = et(), { setCollapseState: de } = to(), I = C.useCallback(ln(p), [p]), U = C.useCallback(BD(k, X), [k, X]), [ce, Ce] = C.useState(b), [H, ne] = C.useState(e);
  C.useEffect(() => {
    f && ve(f), c && fe(c);
  }, [f, c]), C.useEffect(() => {
    de(null), ne(e);
  }, [e]), C.useEffect(() => {
    const Ie = setTimeout(() => Ce(b), g);
    return () => clearTimeout(Ie);
  }, [b, g]);
  const ge = { key: t, path: [], level: 0, index: 0, value: H, size: Object.keys(H).length, parentData: null, fullData: H }, xe = ln(m), O = ln(D), le = ln(v), _ = _D(y), Pe = { name: t, nodeData: ge, onEdit: (Ie, we) => pn(void 0, void 0, void 0, function* () {
    const { currentData: ke, newData: Te, currentValue: qe, newValue: Ye } = tr(H, we, Ie, "update");
    if (qe === Ye)
      return;
    ne(Te);
    const T = yield r({ currentData: ke, newData: Te, currentValue: qe, newValue: Ye, name: we.slice(-1)[0], path: we });
    return T !== void 0 ? (ne(ke), T === !1 ? U("ERROR_UPDATE", ge) : T) : void 0;
  }), onDelete: (Ie, we) => pn(void 0, void 0, void 0, function* () {
    const { currentData: ke, newData: Te, currentValue: qe, newValue: Ye } = tr(H, we, Ie, "delete");
    ne(Te);
    const T = yield o({ currentData: ke, newData: Te, currentValue: qe, newValue: Ye, name: we.slice(-1)[0], path: we });
    if (T !== void 0)
      return ne(ke), T === !1 ? U("ERROR_UPDATE", ge) : T;
  }), onAdd: (Ie, we) => pn(void 0, void 0, void 0, function* () {
    const { currentData: ke, newData: Te, currentValue: qe, newValue: Ye } = tr(H, we, Ie, "add");
    ne(Te);
    const T = yield i({ currentData: ke, newData: Te, currentValue: qe, newValue: Ye, name: we.slice(-1)[0], path: we });
    if (T !== void 0)
      return ne(ke), T === !1 ? U("ERROR_UPDATE", ge) : T;
  }), onChange: s, onError: u, showErrorMessages: a, showCollectionCount: E, collapseFilter: I, restrictEditFilter: xe, restrictDeleteFilter: O, restrictAddFilter: le, restrictTypeSelection: A, searchFilter: _, searchText: ce, enableClipboard: l, keySort: w, showArrayIndices: B, showStringQuotes: L, indent: d, defaultValue: j, stringTruncate: $, translate: U, customNodeDefinitions: K, parentData: null, useJSON5Editor: ie }, Re = Object.assign(Object.assign({}, De("container", ge)), { minWidth: M, maxWidth: x });
  return Re.fontSize = P ?? Re.fontSize, S("div", { id: J, className: "jer-editor-container " + z, style: Re, children: An(H) ? S(iu, Object.assign({ data: H }, Pe)) : S(ou, Object.assign({ data: H, showLabel: !0 }, Pe)) });
}, ID = (e) => S(oD, { children: S(wD, { children: S(xD, Object.assign({}, e)) }) }), tr = (e, t, n, r) => {
  if (t.length === 0)
    return { currentData: e, newData: n, currentValue: e, newValue: n };
  const o = r !== "add" ? yn(e, t) : void 0;
  return { currentData: e, newData: jp(eD(e), t, n, { remove: r === "delete" }), currentValue: o, newValue: r !== "delete" ? n : void 0 };
}, ln = (e) => typeof e == "boolean" ? () => e : typeof e == "number" ? ({ level: t }) => t >= e : e, _D = (e) => {
  if (e !== void 0)
    return e === "value" ? Ct : e === "key" ? vi : e === "all" ? (t, n) => Ct(t, n) || vi(t, n) : e;
}, Ci = (e) => {
  const t = [];
  e.rows && e.rows.forEach((n) => {
    if (n.footnotesId) {
      const { dataKey: r, staticFootnotes: o } = e.visualizations[n.footnotesId];
      !r && !(o != null && o.length) ? delete e.visualizations[n.footnotesId] : t.push(n.footnotesId);
    }
  }), e.visualizations && Object.keys(e.visualizations).forEach((n) => {
    e.visualizations[n].type === "footnotes" && !t.includes(n) && delete e.visualizations[n];
  });
}, Ai = (e) => {
  e.datasets && Object.keys(e.datasets).forEach((t) => {
    delete e.datasets[t].formattedData, e.datasets[t].dataUrl && delete e.datasets[t].data;
  }), e.visualizations && Object.keys(e.visualizations).forEach((t) => {
    e.visualizations[t] = Et.omit(e.visualizations[t], ["runtime", "formattedData", "data"]);
  }), e.rows && e.rows.forEach((t, n) => {
    t.dataKey && (e.rows[n] = Et.omit(t, ["data", "formattedData"]));
  });
}, Fi = (e) => {
  var t;
  (t = e.dashboard) != null && t.sharedFilters && e.dashboard.sharedFilters.forEach((n, r) => {
    delete e.dashboard.sharedFilters[r].active, n.type === "urlfilter" && delete e.dashboard.sharedFilters[r].values;
  });
}, PD = (e) => {
  let t = Et.cloneDeep(e);
  return t.type === "dashboard" ? (t.multiDashboards && t.multiDashboards.forEach((n, r) => {
    Ai(t.multiDashboards[r]), Fi(t.multiDashboards[r]), Ci(t.multiDashboards[r]);
  }), Ai(t), Fi(t), Ci(t)) : (delete t.runtime, delete t.formattedData, t.dataUrl && delete t.data), t;
};
const ZD = ({ loadConfig: e, config: t, convertStateToConfig: n, onExpandCollapse: r = () => {
} }) => {
  const [o, i] = C.useState(!1), [s, u] = C.useState({}), a = (d) => {
    i(d), r();
  }, l = (d) => !!["datasets", "data", "originalFormattedData", "formattedData"].includes(String(d.key)), f = (d) => {
    u(d.newData);
  };
  C.useEffect(() => {
    let d = PD(t);
    t.type !== "dashboard" && (d = n()), u(d);
  }, [t]);
  const c = {
    chart: ["Charts", "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/bar-chart.html", /* @__PURE__ */ N.createElement(Do, null)],
    dashboard: ["Dashboard", "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/bar-chart.html", /* @__PURE__ */ N.createElement(Do, null)],
    map: ["Maps", "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/data-map.html", /* @__PURE__ */ N.createElement(Lp, null)],
    "markup-include": ["Markup Include", "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/Markup-Include.html", /* @__PURE__ */ N.createElement(Eu, null)]
  };
  return t.type ? /* @__PURE__ */ N.createElement(N.Fragment, null, /* @__PURE__ */ N.createElement("a", { href: c[t.type][1], target: "_blank", rel: "noopener noreferrer", className: "guidance-link" }, c[t.type][2], /* @__PURE__ */ N.createElement("div", null, /* @__PURE__ */ N.createElement("span", { className: "heading-3" }, "Get Help with ", c[t.type][0]), /* @__PURE__ */ N.createElement("p", null, "Examples and documentation"))), /* @__PURE__ */ N.createElement("div", { className: "advanced" }, /* @__PURE__ */ N.createElement("span", { className: "advanced-toggle-link", onClick: () => a(!o) }, /* @__PURE__ */ N.createElement("span", null, o ? "— " : "+ "), "Advanced Options"), o && /* @__PURE__ */ N.createElement(N.Fragment, null, /* @__PURE__ */ N.createElement("section", { className: "error-box py-2 px-3 my-2" }, /* @__PURE__ */ N.createElement("div", null, /* @__PURE__ */ N.createElement("strong", { className: "pt-1" }, "Warning"), /* @__PURE__ */ N.createElement("p", null, "This can cause serious errors in your visualization."))), /* @__PURE__ */ N.createElement("p", { className: "pb-2" }, "This tool displays the actual ", /* @__PURE__ */ N.createElement("acronym", { title: "JavaScript Object Notation" }, "JSON"), " configuration that is generated by this editor and allows you to edit properties directly and apply them."), /* @__PURE__ */ N.createElement(
    "button",
    {
      className: "btn ",
      onClick: () => {
        navigator.clipboard.writeText(JSON.stringify(s));
      }
    },
    "Copy to Clipboard"
  ), /* @__PURE__ */ N.createElement(ID, { className: "advanced-json-editor", data: s, onUpdate: f, rootName: "", collapse: l }), /* @__PURE__ */ N.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: () => {
        e(s), a(!o);
      }
    },
    "Apply"
  )))) : /* @__PURE__ */ N.createElement(N.Fragment, null);
};
function wi(e) {
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
function nr() {
  const e = {};
  for (const [t, n] of Array.from(new URLSearchParams(window.location.search).entries()))
    e[t] = n;
  return e;
}
function rr(e) {
  const t = `${window.location.origin}${window.location.pathname}?${Object.keys(e).map((n) => `${n}=${encodeURIComponent(e[n])}`).join("&")}`;
  window.history.pushState({ path: t }, "", t);
}
const or = (e, t) => {
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
      if (Array.isArray(i.active) ? i.active.includes(s) || (o = !1) : s != i.active && (o = !1), i.filterStyle === "nested-dropdown" && i.subGrouping && o === !0) {
        const u = i.subGrouping.active, a = r[i.subGrouping.columnName];
        if (u === void 0)
          return;
        a != u && (o = !1);
      }
    }), o && n.push(r);
  }), n;
}, RD = (e) => Object.fromEntries(
  Object.entries(e || {}).map(([t, { orderedValues: n }]) => n ? [t, { orderedValues: n, values: [] }] : [t, { values: [] }])
), TD = (e, t) => {
  var s, u;
  const n = e.columnName, r = [], o = (s = e.subGrouping) == null ? void 0 : s.columnName, i = RD((u = e.subGrouping) == null ? void 0 : u.valuesLookup);
  if (Array.isArray(t))
    t.forEach((a) => {
      const l = a[n];
      if (l !== void 0 && (r.includes(l) || r.push(l), o)) {
        const f = a[o];
        if (l === void 0)
          return;
        i[l] || (i[l] = { values: [] }), i[l].values.includes(f) || i[l].values.push(f);
      }
    });
  else {
    if (!t)
      return r;
    Object.values(t).forEach((a) => {
      a.forEach((l) => {
        const f = l[n];
        r.includes(f) || r.push(f);
      });
    });
  }
  e.values = r, o && (e.subGrouping.valuesLookup = i);
}, VD = (e, t, n) => {
  let r = t;
  return e.parents.forEach((o) => {
    const i = n[o];
    if (i.filterStyle === "nested-dropdown") {
      const { subGrouping: s } = i;
      s.active && (r = r.filter((u) => {
        const a = i.active == u[i.columnName], l = s.active == u[s.columnName];
        return a && l;
      }));
    } else
      i != null && i.active && (r = r.filter((s) => Array.isArray(i.active) ? i.active.includes(s[i.columnName]) : i.active == s[i.columnName]));
  }), r;
}, su = (e, t) => {
  const n = Et.keyBy(e, "id");
  return e == null ? void 0 : e.map((r) => {
    var s;
    const o = Et.cloneDeep(r);
    let i = t;
    if (Array.isArray(t) && ((s = r.parents) != null && s.length) && (i = VD(r, t, n)), TD(o, i), o.values.length > 0) {
      const u = wi(o);
      if (u)
        o.active = u;
      else if (o.filterStyle === "multi-select") {
        const a = o.values, l = Array.isArray(o.active) ? o.active : [o.active];
        o.active = l.filter((f) => a.includes(f));
      } else {
        const a = o.values[0];
        o.active = o.values.includes(o.active) ? o.active : a;
      }
    }
    if (o.subGrouping) {
      const u = wi(o.subGrouping), a = o.active || o.values[0], l = o.subGrouping.valuesLookup[a].values[0], f = Object.values(o.subGrouping.valuesLookup).flatMap((d) => d.values), c = u || o.subGrouping.active;
      o.subGrouping.active = f.includes(c) ? c : l;
    }
    return o;
  });
}, LD = ["dropdown", "nested-dropdown", "pill", "tab", "tab bar", "multi-select"], jD = [
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
  const t = Et.cloneDeep(e.values);
  if (e.order === "cust")
    return e;
  const n = (r, o) => {
    const i = e.order !== "desc";
    return (i ? r : o).toString().localeCompare((i ? o : r).toString(), "en", { numeric: !0 });
  };
  return e.values = t.sort(n), e;
}, ir = ["chart", "table"], $D = (e) => {
  const [t, n] = C.useState(!1), { config: r, setConfig: o, filteredData: i, setFilteredData: s, excludedData: u, getUniqueValues: a } = e, { type: l, data: f } = r;
  return {
    handleApplyButton: (D) => {
      let v = !1;
      const A = nr();
      D.forEach((y) => {
        y.queuedActive && (y.active = y.queuedActive, delete y.queuedActive, y.setByQueryParameter && A[y.setByQueryParameter] !== y.active && (A[y.setByQueryParameter] = y.active, v = !0));
      }), v && rr(A), o({ ...r, filters: D }), l === "map" && s(D, u), ir.includes(r.type) && s(or(D, u)), n(!1);
    },
    changeFilterActive: (D, v) => {
      let A = r.type === "map" ? [...i] : [...r.filters];
      if (r.filterBehavior === "Apply Button")
        A[D].queuedActive = v, n(!0);
      else {
        const y = A[D];
        y.filterStyle !== "nested-dropdown" ? y.active = v : (y.active = v[0], y.subGrouping.active = v[1]);
        const b = nr();
        y.setByQueryParameter && b[y.setByQueryParameter] !== y.active && (b[y.setByQueryParameter] = y.active, rr(b));
      }
      if (r.dynamicSeries || (A = su(A, u), o({
        ...r,
        filters: A
      })), r.type === "map" && r.filterBehavior === "Filter Change" && s(A), ir.includes(r.type) && r.filterBehavior === "Filter Change") {
        const y = or(A, u);
        if (s(y), r.dynamicSeries) {
          const b = r.runtime || {};
          b.series = [], b.seriesLabels = {}, b.seriesLabelsAll = [], y && y.length && y.length > 0 && Object.keys(y[0]).forEach((g) => {
            var w;
            g !== r.xAxis.dataKey && y[0][g] && (!r.filters || ((w = r.filters) == null ? void 0 : w.filter((B) => B.columnName === g).length) === 0) && (!r.columns || Object.keys(r.columns).indexOf(g) === -1) && b.series.push({
              dataKey: g,
              tooltip: !0
            });
          }), b.seriesKeys = b.series ? b.series.map((g) => (b.seriesLabels[g.dataKey] = g.name || g.label || g.dataKey, b.seriesLabelsAll.push(g.name || g.dataKey), g.dataKey)) : [], o({
            ...r,
            filters: A,
            runtime: b
          });
        }
      }
    },
    showApplyButton: t,
    handleReset: (D) => {
      let v = [...r.filters];
      D.preventDefault();
      let A = !1;
      const y = nr();
      v.forEach((b, g) => {
        (!b.values || b.values.length === 0) && (b.values = a(f, b.columnName)), v[g].active = Si(b).values[0], b.setByQueryParameter && y[b.setByQueryParameter] !== b.active && (y[b.setByQueryParameter] = b.active, A = !0);
      }), A && rr(y), o({ ...r, filters: v }), l === "map" ? s(v, u) : s(or(v, u));
    },
    filterConstants: {
      buttonText: "Apply Filters",
      resetText: "Reset All",
      introText: "Make a selection from the filters to change the visualization information.",
      applyText: "Select the apply button to update the visualization information."
    },
    filterStyleOptions: LD,
    filterOrderOptions: jD,
    handleFilterOrder: (D, v, A, y) => {
      const b = [...y.values], [g] = b.splice(D, 1);
      b.splice(v, 0, g);
      const w = ir.includes(r.type) ? [...r.filters] : [...i], B = { ...w[A] };
      B.values = b, B.orderedValues = b, B.active = b[0], B.order = "cust", w[A] = B, r.type === "map" && s(w), o({ ...r, filters: w });
    },
    handleSorting: Si
  };
}, em = (e) => {
  var M;
  const { config: t, filteredData: n, dimensions: r } = e, { data: o, filters: i, type: s, general: u, theme: a, filterBehavior: l } = t, [f, c] = C.useState(!1), [d, p] = C.useState(null), E = C.useId(), {
    handleApplyButton: m,
    changeFilterActive: D,
    showApplyButton: v,
    handleReset: A,
    filterConstants: y,
    handleSorting: b
  } = $D(e);
  C.useEffect(() => {
    r && (r[0] < 768 && (i == null ? void 0 : i.length) > 0 ? c(!0) : c(!1));
  }, [r]), C.useEffect(() => {
    if (d) {
      const x = document.getElementById(d.id);
      x && x.focus();
    }
  }, [D, d]);
  const g = (x) => {
    const { filter: P, index: $ } = x;
    return /* @__PURE__ */ N.createElement("section", { className: "single-filters__tab-bar" }, P.values.map((k, z) => {
      const J = ["button__tab-bar", P.active === k ? "button__tab-bar--active" : ""];
      return /* @__PURE__ */ N.createElement(
        "button",
        {
          id: `${k}-${$}-${z}-${E}`,
          className: J.join(" "),
          key: k,
          onClick: (X) => {
            D($, k), p(X.target);
          },
          onKeyDown: (X) => {
            X.keyCode === 13 && (D($, k), p(X.target));
          }
        },
        k
      );
    }));
  }, w = (x) => {
    const { index: P, label: $, active: k, filters: z } = x;
    return /* @__PURE__ */ N.createElement(
      "select",
      {
        id: `filter-${P}`,
        name: $,
        "aria-label": `Filter by ${$}`,
        className: "filter-select",
        "data-index": "0",
        value: k,
        onChange: (J) => {
          D(P, J.target.value);
        }
      },
      z
    );
  }, B = C.useMemo(() => {
    let x = s === "map" ? n : i;
    return x ? (x.fromHash && delete x.fromHash, su(x, t.data)) : [];
  }, [i, n]), L = () => B.map((x, P) => {
    var de;
    if (x.showDropdown === !1)
      return;
    const $ = [], k = [], z = [], { active: J, queuedActive: X, label: K, filterStyle: ie } = x;
    b(x), x.orderedValues = x.orderedValues === void 0 || x.orderedValues.length === 0 ? x.values : x.orderedValues, (de = x.orderedValues) == null || de.forEach((I, U) => {
      const ce = ["pill", J === I ? "pill--active" : null, a && a], Ce = ["tab", J === I && "tab--active", a && a];
      k.push(
        /* @__PURE__ */ N.createElement("div", { className: "pill__wrapper", key: `pill-${U}` }, /* @__PURE__ */ N.createElement(
          "button",
          {
            id: `${I}-${P}-${U}-${E}`,
            className: ce.join(" "),
            onKeyDown: (H) => {
              H.keyCode === 13 && (D(P, I), p(H.target));
            },
            onClick: (H) => {
              D(P, I), p(H.target);
            },
            name: K
          },
          I
        ))
      ), $.push(
        /* @__PURE__ */ N.createElement("option", { key: U, value: I, "aria-label": I }, x.labels && x.labels[I] ? x.labels[I] : I)
      ), z.push(
        /* @__PURE__ */ N.createElement(
          "button",
          {
            id: `${I}-${P}-${U}-${E}`,
            className: Ce.join(" "),
            onClick: (H) => {
              D(P, I), p(H.target);
            },
            onKeyDown: (H) => {
              H.keyCode === 13 && (D(P, I), p(H.target));
            }
          },
          I
        )
      );
    });
    const De = ["single-filters", f ? "single-filters--dropdown" : `single-filters--${ie}`], ve = ["nested-dropdown", "multi-select"].includes(ie), fe = (ie === "dropdown" || f) && !ve;
    return /* @__PURE__ */ N.createElement("div", { className: De.join(" "), key: P }, /* @__PURE__ */ N.createElement(N.Fragment, null, K && /* @__PURE__ */ N.createElement("label", { htmlFor: `filter-${P}` }, K), ie === "tab" && !f && z, ie === "pill" && !f && k, ie === "tab bar" && !f && /* @__PURE__ */ N.createElement(g, { filter: x, index: P }), ie === "multi-select" && /* @__PURE__ */ N.createElement(
      yu,
      {
        options: x.values.map((I) => ({ value: I, label: I })),
        fieldName: P,
        updateField: (I, U, ce, Ce) => D(ce, Ce),
        selected: x.active,
        limit: x.selectLimit || 5
      }
    ), ie === "nested-dropdown" && /* @__PURE__ */ N.createElement(vu, { currentFilter: x, listLabel: K, handleSelectedItems: (I) => D(P, I) }), fe && /* @__PURE__ */ N.createElement(w, { filter: x, index: P, label: K, active: X || J, filters: $ })));
  });
  if (((M = t == null ? void 0 : t.filters) == null ? void 0 : M.length) === 0)
    return;
  const j = ["filters-section", s === "map" ? u.headerColor : (t == null ? void 0 : t.visualizationType) === "Spark Line" ? null : a];
  return /* @__PURE__ */ N.createElement("section", { className: j.join(" ") }, /* @__PURE__ */ N.createElement("p", { className: "filters-section__intro-text" }, i != null && i.some((x) => x.active && x.showDropdown) ? y.introText : "", " ", t.filterBehavior === "Apply Button" && y.applyText), /* @__PURE__ */ N.createElement("div", { className: "filters-section__wrapper" }, " ", /* @__PURE__ */ N.createElement(N.Fragment, null, /* @__PURE__ */ N.createElement(L, null), l === "Apply Button" ? /* @__PURE__ */ N.createElement("div", { className: "filters-section__buttons" }, /* @__PURE__ */ N.createElement(bu, { onClick: () => m(i), disabled: !v, className: [u != null && u.headerColor ? u.headerColor : a, "apply"].join(" ") }, y.buttonText), /* @__PURE__ */ N.createElement("a", { href: "#!", role: "button", onClick: A }, y.resetText)) : /* @__PURE__ */ N.createElement(N.Fragment, null))));
};
export {
  ZD as A,
  QD as C,
  JD as D,
  em as F,
  XD as P,
  xi as _,
  LD as a,
  PD as b,
  Ii as c,
  or as d,
  nr as e,
  jD as f,
  wi as g,
  Si as h,
  su as i,
  $D as j,
  rr as u
};
