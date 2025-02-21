import { r as v, R as c } from "./storybook-index-45401197.es.js";
import { c as Xn, A as Yn, V as Jn, F as er, a as tr, b as ar } from "./storybook-InputToggle-9ce9588e.es.js";
import { f as xe, b as nr, g as rr } from "./storybook-getViewport-7dc50c16.es.js";
import { T as en, H as tn } from "./storybook-index-3b47b3f7.es.js";
import { E as an, L as Ot } from "./storybook-viewports-5c5d7af1.es.js";
import { D as Se, A as or, a as Kt, b as Xt, c as Yt, d as Jt } from "./storybook-DataTransform-12e90958.es.js";
import { b as ir, D as sr, C as nn, a as rn } from "./storybook-CdcChartComponent-aa83392e.es.js";
import { C as on } from "./storybook-CdcDataBite-37a15c95.es.js";
import { e as lr, C as sn, A as cr } from "./storybook-CdcMap-5b56c453.es.js";
import { C as ln } from "./storybook-CdcWaffleChart-31d12867.es.js";
import { C as cn } from "./storybook-CdcMarkupInclude-dc3760ee.es.js";
import { A as Me, a as ur, b as at, c as nt, d as rt, e as ot } from "./storybook-Accordion-aed5218d.es.js";
import { I as dr, a as Ie } from "./storybook-editor-390d9f4b.es.js";
import { B as fr } from "./storybook-Button-63da743c.es.js";
import { a as P } from "./storybook-Icon-d8cd8abc.es.js";
import { T as L } from "./storybook-Tooltip-8bb9dfa2.es.js";
import { I as ge } from "./storybook-InputSelect-76dbb8cb.es.js";
import { L as ye, u as mr, c as un } from "./storybook-coveUpdateWorker-e42c85d9.es.js";
import { u as _t } from "./storybook-updateFieldFactory-c006040a.es.js";
import { D as pr } from "./storybook-DataDesigner-8f06e949.es.js";
import { P as ke } from "./storybook-index-43433e35.es.js";
import { C as Ue, T as J, S as gt } from "./storybook-Inputs-0111192f.es.js";
import { _ as I } from "./storybook-lodash-a4231e1c.es.js";
import { u as dn, g as fn, f as ea, a as gr, F as hr, b as It, c as mn, r as vr, d as yr, h as pn, e as Pe, i as br } from "./storybook-Filters-f5cf5018.es.js";
import { D as ht, f as Er, M as ta } from "./storybook-DataTable-fa1d7944.es.js";
import { F as oe } from "./storybook-FilterStyles-fd509eb9.es.js";
import { D as Dr } from "./storybook-DashboardFilters-7461a191.es.js";
import { M as it } from "./storybook-MultiSelect-fb96d51f.es.js";
import { L as Sr } from "./storybook-Loader-f4ec7b29.es.js";
import "./storybook-NestedDropdown-c8ea7d17.es.js";
import { F as wr } from "./storybook-Footnotes-864326bc.es.js";
import { j as Tr } from "./storybook-jsx-runtime-36872362.es.js";
var gn = v.createContext({
  dragDropManager: void 0
}), ie;
(function(e) {
  e.SOURCE = "SOURCE", e.TARGET = "TARGET";
})(ie || (ie = {}));
function N(e, t) {
  for (var a = arguments.length, n = new Array(a > 2 ? a - 2 : 0), r = 2; r < a; r++)
    n[r - 2] = arguments[r];
  if (process.env.NODE_ENV !== "production" && t === void 0)
    throw new Error("invariant requires an error message argument");
  if (!e) {
    var o;
    if (t === void 0)
      o = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var i = 0;
      o = new Error(t.replace(/%s/g, function() {
        return n[i++];
      })), o.name = "Invariant Violation";
    }
    throw o.framesToPop = 1, o;
  }
}
var kt = "dnd-core/INIT_COORDS", Xe = "dnd-core/BEGIN_DRAG", Nt = "dnd-core/PUBLISH_DRAG_SOURCE", Ye = "dnd-core/HOVER", Je = "dnd-core/DROP", et = "dnd-core/END_DRAG";
function aa(e, t) {
  return {
    type: kt,
    payload: {
      sourceClientOffset: t || null,
      clientOffset: e || null
    }
  };
}
function ze(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ze = function(a) {
    return typeof a;
  } : ze = function(a) {
    return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
  }, ze(e);
}
function Rr(e, t, a) {
  return t.split(".").reduce(function(n, r) {
    return n && n[r] ? n[r] : a || null;
  }, e);
}
function Cr(e, t) {
  return e.filter(function(a) {
    return a !== t;
  });
}
function hn(e) {
  return ze(e) === "object";
}
function Or(e, t) {
  var a = /* @__PURE__ */ new Map(), n = function(i) {
    a.set(i, a.has(i) ? a.get(i) + 1 : 1);
  };
  e.forEach(n), t.forEach(n);
  var r = [];
  return a.forEach(function(o, i) {
    o === 1 && r.push(i);
  }), r;
}
function _r(e, t) {
  return e.filter(function(a) {
    return t.indexOf(a) > -1;
  });
}
var Ir = {
  type: kt,
  payload: {
    clientOffset: null,
    sourceClientOffset: null
  }
};
function kr(e) {
  return function() {
    var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      publishSource: !0
    }, r = n.publishSource, o = r === void 0 ? !0 : r, i = n.clientOffset, s = n.getSourceClientOffset, l = e.getMonitor(), m = e.getRegistry();
    e.dispatch(aa(i)), Nr(a, l, m);
    var g = Lr(a, l);
    if (g === null) {
      e.dispatch(Ir);
      return;
    }
    var d = null;
    if (i) {
      if (!s)
        throw new Error("getSourceClientOffset must be defined");
      Fr(s), d = s(g);
    }
    e.dispatch(aa(i, d));
    var S = m.getSource(g), y = S.beginDrag(l, g);
    if (y != null) {
      Ar(y), m.pinSource(g);
      var T = m.getSourceType(g);
      return {
        type: Xe,
        payload: {
          itemType: T,
          item: y,
          sourceId: g,
          clientOffset: i || null,
          sourceClientOffset: d || null,
          isSourcePublic: !!o
        }
      };
    }
  };
}
function Nr(e, t, a) {
  N(!t.isDragging(), "Cannot call beginDrag while dragging."), e.forEach(function(n) {
    N(a.getSource(n), "Expected sourceIds to be registered.");
  });
}
function Fr(e) {
  N(typeof e == "function", "When clientOffset is provided, getSourceClientOffset must be a function.");
}
function Ar(e) {
  N(hn(e), "Item must be an object.");
}
function Lr(e, t) {
  for (var a = null, n = e.length - 1; n >= 0; n--)
    if (t.canDragSource(e[n])) {
      a = e[n];
      break;
    }
  return a;
}
function Pr(e) {
  return function() {
    var a = e.getMonitor();
    if (a.isDragging())
      return {
        type: Nt
      };
  };
}
function vt(e, t) {
  return t === null ? e === null : Array.isArray(e) ? e.some(function(a) {
    return a === t;
  }) : e === t;
}
function xr(e) {
  return function(a) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.clientOffset;
    Mr(a);
    var o = a.slice(0), i = e.getMonitor(), s = e.getRegistry();
    $r(o, i, s);
    var l = i.getItemType();
    return Br(o, s, l), Vr(o, i, s), {
      type: Ye,
      payload: {
        targetIds: o,
        clientOffset: r || null
      }
    };
  };
}
function Mr(e) {
  N(Array.isArray(e), "Expected targetIds to be an array.");
}
function $r(e, t, a) {
  N(t.isDragging(), "Cannot call hover while not dragging."), N(!t.didDrop(), "Cannot call hover after drop.");
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    N(e.lastIndexOf(r) === n, "Expected targetIds to be unique in the passed array.");
    var o = a.getTarget(r);
    N(o, "Expected targetIds to be registered.");
  }
}
function Br(e, t, a) {
  for (var n = e.length - 1; n >= 0; n--) {
    var r = e[n], o = t.getTargetType(r);
    vt(o, a) || e.splice(n, 1);
  }
}
function Vr(e, t, a) {
  e.forEach(function(n) {
    var r = a.getTarget(n);
    r.hover(t, n);
  });
}
function na(e, t) {
  var a = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), a.push.apply(a, n);
  }
  return a;
}
function ra(e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = arguments[t] != null ? arguments[t] : {};
    t % 2 ? na(Object(a), !0).forEach(function(n) {
      Ur(e, n, a[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : na(Object(a)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(a, n));
    });
  }
  return e;
}
function Ur(e, t, a) {
  return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = a, e;
}
function zr(e) {
  return function() {
    var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = e.getMonitor(), r = e.getRegistry();
    Hr(n);
    var o = Gr(n);
    o.forEach(function(i, s) {
      var l = jr(i, s, r, n), m = {
        type: Je,
        payload: {
          dropResult: ra(ra({}, a), l)
        }
      };
      e.dispatch(m);
    });
  };
}
function Hr(e) {
  N(e.isDragging(), "Cannot call drop while not dragging."), N(!e.didDrop(), "Cannot call drop twice during one drag operation.");
}
function jr(e, t, a, n) {
  var r = a.getTarget(e), o = r ? r.drop(n, e) : void 0;
  return qr(o), typeof o > "u" && (o = t === 0 ? {} : n.getDropResult()), o;
}
function qr(e) {
  N(typeof e > "u" || hn(e), "Drop result must either be an object or undefined.");
}
function Gr(e) {
  var t = e.getTargetIds().filter(e.canDropOnTarget, e);
  return t.reverse(), t;
}
function Wr(e) {
  return function() {
    var a = e.getMonitor(), n = e.getRegistry();
    Qr(a);
    var r = a.getSourceId();
    if (r != null) {
      var o = n.getSource(r, !0);
      o.endDrag(a, r), n.unpinSource();
    }
    return {
      type: et
    };
  };
}
function Qr(e) {
  N(e.isDragging(), "Cannot call endDrag while not dragging.");
}
function Zr(e) {
  return {
    beginDrag: kr(e),
    publishDragSource: Pr(e),
    hover: xr(e),
    drop: zr(e),
    endDrag: Wr(e)
  };
}
function Kr(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function oa(e, t) {
  for (var a = 0; a < t.length; a++) {
    var n = t[a];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Xr(e, t, a) {
  return t && oa(e.prototype, t), a && oa(e, a), e;
}
function Ne(e, t, a) {
  return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = a, e;
}
var Yr = /* @__PURE__ */ function() {
  function e(t, a) {
    var n = this;
    Kr(this, e), Ne(this, "store", void 0), Ne(this, "monitor", void 0), Ne(this, "backend", void 0), Ne(this, "isSetUp", !1), Ne(this, "handleRefCountChange", function() {
      var r = n.store.getState().refCount > 0;
      n.backend && (r && !n.isSetUp ? (n.backend.setup(), n.isSetUp = !0) : !r && n.isSetUp && (n.backend.teardown(), n.isSetUp = !1));
    }), this.store = t, this.monitor = a, t.subscribe(this.handleRefCountChange);
  }
  return Xr(e, [{
    key: "receiveBackend",
    value: function(a) {
      this.backend = a;
    }
  }, {
    key: "getMonitor",
    value: function() {
      return this.monitor;
    }
  }, {
    key: "getBackend",
    value: function() {
      return this.backend;
    }
  }, {
    key: "getRegistry",
    value: function() {
      return this.monitor.registry;
    }
  }, {
    key: "getActions",
    value: function() {
      var a = this, n = this.store.dispatch;
      function r(i) {
        return function() {
          for (var s = arguments.length, l = new Array(s), m = 0; m < s; m++)
            l[m] = arguments[m];
          var g = i.apply(a, l);
          typeof g < "u" && n(g);
        };
      }
      var o = Zr(this);
      return Object.keys(o).reduce(function(i, s) {
        var l = o[s];
        return i[s] = r(l), i;
      }, {});
    }
  }, {
    key: "dispatch",
    value: function(a) {
      this.store.dispatch(a);
    }
  }]), e;
}(), Jr = function(t, a) {
  return t === a;
};
function eo(e, t) {
  return !e && !t ? !0 : !e || !t ? !1 : e.x === t.x && e.y === t.y;
}
function to(e, t) {
  var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Jr;
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; ++n)
    if (!a(e[n], t[n]))
      return !1;
  return !0;
}
function ia(e, t) {
  var a = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), a.push.apply(a, n);
  }
  return a;
}
function sa(e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ia(Object(a), !0).forEach(function(n) {
      ao(e, n, a[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : ia(Object(a)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(a, n));
    });
  }
  return e;
}
function ao(e, t, a) {
  return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = a, e;
}
var la = {
  initialSourceClientOffset: null,
  initialClientOffset: null,
  clientOffset: null
};
function no() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : la, t = arguments.length > 1 ? arguments[1] : void 0, a = t.payload;
  switch (t.type) {
    case kt:
    case Xe:
      return {
        initialSourceClientOffset: a.sourceClientOffset,
        initialClientOffset: a.clientOffset,
        clientOffset: a.clientOffset
      };
    case Ye:
      return eo(e.clientOffset, a.clientOffset) ? e : sa(sa({}, e), {}, {
        clientOffset: a.clientOffset
      });
    case et:
    case Je:
      return la;
    default:
      return e;
  }
}
var Ft = "dnd-core/ADD_SOURCE", At = "dnd-core/ADD_TARGET", Lt = "dnd-core/REMOVE_SOURCE", tt = "dnd-core/REMOVE_TARGET";
function ro(e) {
  return {
    type: Ft,
    payload: {
      sourceId: e
    }
  };
}
function oo(e) {
  return {
    type: At,
    payload: {
      targetId: e
    }
  };
}
function io(e) {
  return {
    type: Lt,
    payload: {
      sourceId: e
    }
  };
}
function so(e) {
  return {
    type: tt,
    payload: {
      targetId: e
    }
  };
}
function ca(e, t) {
  var a = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), a.push.apply(a, n);
  }
  return a;
}
function re(e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ca(Object(a), !0).forEach(function(n) {
      lo(e, n, a[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : ca(Object(a)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(a, n));
    });
  }
  return e;
}
function lo(e, t, a) {
  return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = a, e;
}
var co = {
  itemType: null,
  item: null,
  sourceId: null,
  targetIds: [],
  dropResult: null,
  didDrop: !1,
  isSourcePublic: null
};
function uo() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : co, t = arguments.length > 1 ? arguments[1] : void 0, a = t.payload;
  switch (t.type) {
    case Xe:
      return re(re({}, e), {}, {
        itemType: a.itemType,
        item: a.item,
        sourceId: a.sourceId,
        isSourcePublic: a.isSourcePublic,
        dropResult: null,
        didDrop: !1
      });
    case Nt:
      return re(re({}, e), {}, {
        isSourcePublic: !0
      });
    case Ye:
      return re(re({}, e), {}, {
        targetIds: a.targetIds
      });
    case tt:
      return e.targetIds.indexOf(a.targetId) === -1 ? e : re(re({}, e), {}, {
        targetIds: Cr(e.targetIds, a.targetId)
      });
    case Je:
      return re(re({}, e), {}, {
        dropResult: a.dropResult,
        didDrop: !0,
        targetIds: []
      });
    case et:
      return re(re({}, e), {}, {
        itemType: null,
        item: null,
        sourceId: null,
        dropResult: null,
        didDrop: !1,
        isSourcePublic: null,
        targetIds: []
      });
    default:
      return e;
  }
}
function fo() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, t = arguments.length > 1 ? arguments[1] : void 0;
  switch (t.type) {
    case Ft:
    case At:
      return e + 1;
    case Lt:
    case tt:
      return e - 1;
    default:
      return e;
  }
}
var We = [], Pt = [];
We.__IS_NONE__ = !0;
Pt.__IS_ALL__ = !0;
function mo(e, t) {
  if (e === We)
    return !1;
  if (e === Pt || typeof t > "u")
    return !0;
  var a = _r(t, e);
  return a.length > 0;
}
function po() {
  var e = arguments.length > 1 ? arguments[1] : void 0;
  switch (e.type) {
    case Ye:
      break;
    case Ft:
    case At:
    case tt:
    case Lt:
      return We;
    case Xe:
    case Nt:
    case et:
    case Je:
    default:
      return Pt;
  }
  var t = e.payload, a = t.targetIds, n = a === void 0 ? [] : a, r = t.prevTargetIds, o = r === void 0 ? [] : r, i = Or(n, o), s = i.length > 0 || !to(n, o);
  if (!s)
    return We;
  var l = o[o.length - 1], m = n[n.length - 1];
  return l !== m && (l && i.push(l), m && i.push(m)), i;
}
function go() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
  return e + 1;
}
function ua(e, t) {
  var a = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), a.push.apply(a, n);
  }
  return a;
}
function da(e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ua(Object(a), !0).forEach(function(n) {
      ho(e, n, a[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : ua(Object(a)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(a, n));
    });
  }
  return e;
}
function ho(e, t, a) {
  return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = a, e;
}
function vo() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
  return {
    dirtyHandlerIds: po(e.dirtyHandlerIds, {
      type: t.type,
      payload: da(da({}, t.payload), {}, {
        prevTargetIds: Rr(e, "dragOperation.targetIds", [])
      })
    }),
    dragOffset: no(e.dragOffset, t),
    refCount: fo(e.refCount, t),
    dragOperation: uo(e.dragOperation, t),
    stateId: go(e.stateId)
  };
}
function yo(e, t) {
  return {
    x: e.x + t.x,
    y: e.y + t.y
  };
}
function vn(e, t) {
  return {
    x: e.x - t.x,
    y: e.y - t.y
  };
}
function bo(e) {
  var t = e.clientOffset, a = e.initialClientOffset, n = e.initialSourceClientOffset;
  return !t || !a || !n ? null : vn(yo(t, n), a);
}
function Eo(e) {
  var t = e.clientOffset, a = e.initialClientOffset;
  return !t || !a ? null : vn(t, a);
}
function Do(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function fa(e, t) {
  for (var a = 0; a < t.length; a++) {
    var n = t[a];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function So(e, t, a) {
  return t && fa(e.prototype, t), a && fa(e, a), e;
}
function ma(e, t, a) {
  return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = a, e;
}
var wo = /* @__PURE__ */ function() {
  function e(t, a) {
    Do(this, e), ma(this, "store", void 0), ma(this, "registry", void 0), this.store = t, this.registry = a;
  }
  return So(e, [{
    key: "subscribeToStateChange",
    value: function(a) {
      var n = this, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        handlerIds: void 0
      }, o = r.handlerIds;
      N(typeof a == "function", "listener must be a function."), N(typeof o > "u" || Array.isArray(o), "handlerIds, when specified, must be an array of strings.");
      var i = this.store.getState().stateId, s = function() {
        var m = n.store.getState(), g = m.stateId;
        try {
          var d = g === i || g === i + 1 && !mo(m.dirtyHandlerIds, o);
          d || a();
        } finally {
          i = g;
        }
      };
      return this.store.subscribe(s);
    }
  }, {
    key: "subscribeToOffsetChange",
    value: function(a) {
      var n = this;
      N(typeof a == "function", "listener must be a function.");
      var r = this.store.getState().dragOffset, o = function() {
        var s = n.store.getState().dragOffset;
        s !== r && (r = s, a());
      };
      return this.store.subscribe(o);
    }
  }, {
    key: "canDragSource",
    value: function(a) {
      if (!a)
        return !1;
      var n = this.registry.getSource(a);
      return N(n, "Expected to find a valid source. sourceId=".concat(a)), this.isDragging() ? !1 : n.canDrag(this, a);
    }
  }, {
    key: "canDropOnTarget",
    value: function(a) {
      if (!a)
        return !1;
      var n = this.registry.getTarget(a);
      if (N(n, "Expected to find a valid target. targetId=".concat(a)), !this.isDragging() || this.didDrop())
        return !1;
      var r = this.registry.getTargetType(a), o = this.getItemType();
      return vt(r, o) && n.canDrop(this, a);
    }
  }, {
    key: "isDragging",
    value: function() {
      return !!this.getItemType();
    }
  }, {
    key: "isDraggingSource",
    value: function(a) {
      if (!a)
        return !1;
      var n = this.registry.getSource(a, !0);
      if (N(n, "Expected to find a valid source. sourceId=".concat(a)), !this.isDragging() || !this.isSourcePublic())
        return !1;
      var r = this.registry.getSourceType(a), o = this.getItemType();
      return r !== o ? !1 : n.isDragging(this, a);
    }
  }, {
    key: "isOverTarget",
    value: function(a) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        shallow: !1
      };
      if (!a)
        return !1;
      var r = n.shallow;
      if (!this.isDragging())
        return !1;
      var o = this.registry.getTargetType(a), i = this.getItemType();
      if (i && !vt(o, i))
        return !1;
      var s = this.getTargetIds();
      if (!s.length)
        return !1;
      var l = s.indexOf(a);
      return r ? l === s.length - 1 : l > -1;
    }
  }, {
    key: "getItemType",
    value: function() {
      return this.store.getState().dragOperation.itemType;
    }
  }, {
    key: "getItem",
    value: function() {
      return this.store.getState().dragOperation.item;
    }
  }, {
    key: "getSourceId",
    value: function() {
      return this.store.getState().dragOperation.sourceId;
    }
  }, {
    key: "getTargetIds",
    value: function() {
      return this.store.getState().dragOperation.targetIds;
    }
  }, {
    key: "getDropResult",
    value: function() {
      return this.store.getState().dragOperation.dropResult;
    }
  }, {
    key: "didDrop",
    value: function() {
      return this.store.getState().dragOperation.didDrop;
    }
  }, {
    key: "isSourcePublic",
    value: function() {
      return !!this.store.getState().dragOperation.isSourcePublic;
    }
  }, {
    key: "getInitialClientOffset",
    value: function() {
      return this.store.getState().dragOffset.initialClientOffset;
    }
  }, {
    key: "getInitialSourceClientOffset",
    value: function() {
      return this.store.getState().dragOffset.initialSourceClientOffset;
    }
  }, {
    key: "getClientOffset",
    value: function() {
      return this.store.getState().dragOffset.clientOffset;
    }
  }, {
    key: "getSourceClientOffset",
    value: function() {
      return bo(this.store.getState().dragOffset);
    }
  }, {
    key: "getDifferenceFromInitialOffset",
    value: function() {
      return Eo(this.store.getState().dragOffset);
    }
  }]), e;
}(), To = 0;
function Ro() {
  return To++;
}
function He(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? He = function(a) {
    return typeof a;
  } : He = function(a) {
    return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
  }, He(e);
}
function Co(e) {
  N(typeof e.canDrag == "function", "Expected canDrag to be a function."), N(typeof e.beginDrag == "function", "Expected beginDrag to be a function."), N(typeof e.endDrag == "function", "Expected endDrag to be a function.");
}
function Oo(e) {
  N(typeof e.canDrop == "function", "Expected canDrop to be a function."), N(typeof e.hover == "function", "Expected hover to be a function."), N(typeof e.drop == "function", "Expected beginDrag to be a function.");
}
function yt(e, t) {
  if (t && Array.isArray(e)) {
    e.forEach(function(a) {
      return yt(a, !1);
    });
    return;
  }
  N(typeof e == "string" || He(e) === "symbol", t ? "Type can only be a string, a symbol, or an array of either." : "Type can only be a string or a symbol.");
}
const pa = typeof global < "u" ? global : self, yn = pa.MutationObserver || pa.WebKitMutationObserver;
function bn(e) {
  return function() {
    const a = setTimeout(r, 0), n = setInterval(r, 50);
    function r() {
      clearTimeout(a), clearInterval(n), e();
    }
  };
}
function _o(e) {
  let t = 1;
  const a = new yn(e), n = document.createTextNode("");
  return a.observe(n, {
    characterData: !0
  }), function() {
    t = -t, n.data = t;
  };
}
const Io = typeof yn == "function" ? (
  // reliably everywhere they are implemented.
  // They are implemented in all modern browsers.
  //
  // - Android 4-4.3
  // - Chrome 26-34
  // - Firefox 14-29
  // - Internet Explorer 11
  // - iPad Safari 6-7.1
  // - iPhone Safari 7-7.1
  // - Safari 6-7
  _o
) : (
  // task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
  // 11-12, and in web workers in many engines.
  // Although message channels yield to any queued rendering and IO tasks, they
  // would be better than imposing the 4ms delay of timers.
  // However, they do not work reliably in Internet Explorer or Safari.
  // Internet Explorer 10 is the only browser that has setImmediate but does
  // not have MutationObservers.
  // Although setImmediate yields to the browser's renderer, it would be
  // preferrable to falling back to setTimeout since it does not have
  // the minimum 4ms penalty.
  // Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
  // Desktop to a lesser extent) that renders both setImmediate and
  // MessageChannel useless for the purposes of ASAP.
  // https://github.com/kriskowal/q/issues/396
  // Timers are implemented universally.
  // We fall back to timers in workers in most engines, and in foreground
  // contexts in the following browsers.
  // However, note that even this simple case requires nuances to operate in a
  // broad spectrum of browsers.
  //
  // - Firefox 3-13
  // - Internet Explorer 6-9
  // - iPad Safari 4.3
  // - Lynx 2.8.7
  bn
);
class ko {
  // Use the fastest means possible to execute a task in its own turn, with
  // priority over other events including IO, animation, reflow, and redraw
  // events in browsers.
  //
  // An exception thrown by a task will permanently interrupt the processing of
  // subsequent tasks. The higher level `asap` function ensures that if an
  // exception is thrown by a task, that the task queue will continue flushing as
  // soon as possible, but if you use `rawAsap` directly, you are responsible to
  // either ensure that no exceptions are thrown from your task, or to manually
  // call `rawAsap.requestFlush` if an exception is thrown.
  enqueueTask(t) {
    const { queue: a, requestFlush: n } = this;
    a.length || (n(), this.flushing = !0), a[a.length] = t;
  }
  constructor() {
    this.queue = [], this.pendingErrors = [], this.flushing = !1, this.index = 0, this.capacity = 1024, this.flush = () => {
      const { queue: t } = this;
      for (; this.index < t.length; ) {
        const a = this.index;
        if (this.index++, t[a].call(), this.index > this.capacity) {
          for (let n = 0, r = t.length - this.index; n < r; n++)
            t[n] = t[n + this.index];
          t.length -= this.index, this.index = 0;
        }
      }
      t.length = 0, this.index = 0, this.flushing = !1;
    }, this.registerPendingError = (t) => {
      this.pendingErrors.push(t), this.requestErrorThrow();
    }, this.requestFlush = Io(this.flush), this.requestErrorThrow = bn(() => {
      if (this.pendingErrors.length)
        throw this.pendingErrors.shift();
    });
  }
}
class No {
  call() {
    try {
      this.task && this.task();
    } catch (t) {
      this.onError(t);
    } finally {
      this.task = null, this.release(this);
    }
  }
  constructor(t, a) {
    this.onError = t, this.release = a, this.task = null;
  }
}
class Fo {
  create(t) {
    const a = this.freeTasks, n = a.length ? a.pop() : new No(
      this.onError,
      (r) => a[a.length] = r
    );
    return n.task = t, n;
  }
  constructor(t) {
    this.onError = t, this.freeTasks = [];
  }
}
const En = new ko(), Ao = new Fo(En.registerPendingError);
function Lo(e) {
  En.enqueueTask(Ao.create(e));
}
function Po(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ga(e, t) {
  for (var a = 0; a < t.length; a++) {
    var n = t[a];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function xo(e, t, a) {
  return t && ga(e.prototype, t), a && ga(e, a), e;
}
function Te(e, t, a) {
  return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = a, e;
}
function Mo(e, t) {
  return Uo(e) || Vo(e, t) || Bo(e, t) || $o();
}
function $o() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Bo(e, t) {
  if (e) {
    if (typeof e == "string")
      return ha(e, t);
    var a = Object.prototype.toString.call(e).slice(8, -1);
    if (a === "Object" && e.constructor && (a = e.constructor.name), a === "Map" || a === "Set")
      return Array.from(e);
    if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
      return ha(e, t);
  }
}
function ha(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var a = 0, n = new Array(t); a < t; a++)
    n[a] = e[a];
  return n;
}
function Vo(e, t) {
  var a = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (a != null) {
    var n = [], r = !0, o = !1, i, s;
    try {
      for (a = a.call(e); !(r = (i = a.next()).done) && (n.push(i.value), !(t && n.length === t)); r = !0)
        ;
    } catch (l) {
      o = !0, s = l;
    } finally {
      try {
        !r && a.return != null && a.return();
      } finally {
        if (o)
          throw s;
      }
    }
    return n;
  }
}
function Uo(e) {
  if (Array.isArray(e))
    return e;
}
function zo(e) {
  var t = Ro().toString();
  switch (e) {
    case ie.SOURCE:
      return "S".concat(t);
    case ie.TARGET:
      return "T".concat(t);
    default:
      throw new Error("Unknown Handler Role: ".concat(e));
  }
}
function va(e) {
  switch (e[0]) {
    case "S":
      return ie.SOURCE;
    case "T":
      return ie.TARGET;
    default:
      N(!1, "Cannot parse handler ID: ".concat(e));
  }
}
function ya(e, t) {
  var a = e.entries(), n = !1;
  do {
    var r = a.next(), o = r.done, i = Mo(r.value, 2), s = i[1];
    if (s === t)
      return !0;
    n = !!o;
  } while (!n);
  return !1;
}
var Ho = /* @__PURE__ */ function() {
  function e(t) {
    Po(this, e), Te(this, "types", /* @__PURE__ */ new Map()), Te(this, "dragSources", /* @__PURE__ */ new Map()), Te(this, "dropTargets", /* @__PURE__ */ new Map()), Te(this, "pinnedSourceId", null), Te(this, "pinnedSource", null), Te(this, "store", void 0), this.store = t;
  }
  return xo(e, [{
    key: "addSource",
    value: function(a, n) {
      yt(a), Co(n);
      var r = this.addHandler(ie.SOURCE, a, n);
      return this.store.dispatch(ro(r)), r;
    }
  }, {
    key: "addTarget",
    value: function(a, n) {
      yt(a, !0), Oo(n);
      var r = this.addHandler(ie.TARGET, a, n);
      return this.store.dispatch(oo(r)), r;
    }
  }, {
    key: "containsHandler",
    value: function(a) {
      return ya(this.dragSources, a) || ya(this.dropTargets, a);
    }
  }, {
    key: "getSource",
    value: function(a) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      N(this.isSourceId(a), "Expected a valid source ID.");
      var r = n && a === this.pinnedSourceId, o = r ? this.pinnedSource : this.dragSources.get(a);
      return o;
    }
  }, {
    key: "getTarget",
    value: function(a) {
      return N(this.isTargetId(a), "Expected a valid target ID."), this.dropTargets.get(a);
    }
  }, {
    key: "getSourceType",
    value: function(a) {
      return N(this.isSourceId(a), "Expected a valid source ID."), this.types.get(a);
    }
  }, {
    key: "getTargetType",
    value: function(a) {
      return N(this.isTargetId(a), "Expected a valid target ID."), this.types.get(a);
    }
  }, {
    key: "isSourceId",
    value: function(a) {
      var n = va(a);
      return n === ie.SOURCE;
    }
  }, {
    key: "isTargetId",
    value: function(a) {
      var n = va(a);
      return n === ie.TARGET;
    }
  }, {
    key: "removeSource",
    value: function(a) {
      var n = this;
      N(this.getSource(a), "Expected an existing source."), this.store.dispatch(io(a)), Lo(function() {
        n.dragSources.delete(a), n.types.delete(a);
      });
    }
  }, {
    key: "removeTarget",
    value: function(a) {
      N(this.getTarget(a), "Expected an existing target."), this.store.dispatch(so(a)), this.dropTargets.delete(a), this.types.delete(a);
    }
  }, {
    key: "pinSource",
    value: function(a) {
      var n = this.getSource(a);
      N(n, "Expected an existing source."), this.pinnedSourceId = a, this.pinnedSource = n;
    }
  }, {
    key: "unpinSource",
    value: function() {
      N(this.pinnedSource, "No source is pinned at the time."), this.pinnedSourceId = null, this.pinnedSource = null;
    }
  }, {
    key: "addHandler",
    value: function(a, n, r) {
      var o = zo(a);
      return this.types.set(o, n), a === ie.SOURCE ? this.dragSources.set(o, r) : a === ie.TARGET && this.dropTargets.set(o, r), o;
    }
  }]), e;
}();
function jo(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, r = qo(n), o = new wo(r, new Ho(r)), i = new Yr(r, o), s = e(i, t, a);
  return i.receiveBackend(s), i;
}
function qo(e) {
  var t = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION__;
  return Xn(vo, e && t && t({
    name: "dnd-core",
    instanceId: "dnd-core"
  }));
}
var Go = ["children"];
function Wo(e, t) {
  return Xo(e) || Ko(e, t) || Zo(e, t) || Qo();
}
function Qo() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Zo(e, t) {
  if (e) {
    if (typeof e == "string")
      return ba(e, t);
    var a = Object.prototype.toString.call(e).slice(8, -1);
    if (a === "Object" && e.constructor && (a = e.constructor.name), a === "Map" || a === "Set")
      return Array.from(e);
    if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
      return ba(e, t);
  }
}
function ba(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var a = 0, n = new Array(t); a < t; a++)
    n[a] = e[a];
  return n;
}
function Ko(e, t) {
  var a = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (a != null) {
    var n = [], r = !0, o = !1, i, s;
    try {
      for (a = a.call(e); !(r = (i = a.next()).done) && (n.push(i.value), !(t && n.length === t)); r = !0)
        ;
    } catch (l) {
      o = !0, s = l;
    } finally {
      try {
        !r && a.return != null && a.return();
      } finally {
        if (o)
          throw s;
      }
    }
    return n;
  }
}
function Xo(e) {
  if (Array.isArray(e))
    return e;
}
function Yo(e, t) {
  if (e == null)
    return {};
  var a = Jo(e, t), n, r;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++)
      n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
  }
  return a;
}
function Jo(e, t) {
  if (e == null)
    return {};
  var a = {}, n = Object.keys(e), r, o;
  for (o = 0; o < n.length; o++)
    r = n[o], !(t.indexOf(r) >= 0) && (a[r] = e[r]);
  return a;
}
var Ea = 0, je = Symbol.for("__REACT_DND_CONTEXT_INSTANCE__"), ei = v.memo(function(t) {
  var a = t.children, n = Yo(t, Go), r = ti(n), o = Wo(r, 2), i = o[0], s = o[1];
  return v.useEffect(function() {
    if (s) {
      var l = Dn();
      return ++Ea, function() {
        --Ea === 0 && (l[je] = null);
      };
    }
  }, []), Tr(gn.Provider, Object.assign({
    value: i
  }, {
    children: a
  }), void 0);
});
function ti(e) {
  if ("manager" in e) {
    var t = {
      dragDropManager: e.manager
    };
    return [t, !1];
  }
  var a = ai(e.backend, e.context, e.options, e.debugMode), n = !e.context;
  return [a, n];
}
function ai(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Dn(), a = arguments.length > 2 ? arguments[2] : void 0, n = arguments.length > 3 ? arguments[3] : void 0, r = t;
  return r[je] || (r[je] = {
    dragDropManager: jo(e, t, a, n)
  }), r[je];
}
function Dn() {
  return typeof global < "u" ? global : window;
}
function ni(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Da(e, t) {
  for (var a = 0; a < t.length; a++) {
    var n = t[a];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function ri(e, t, a) {
  return t && Da(e.prototype, t), a && Da(e, a), e;
}
function Sa(e, t, a) {
  return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = a, e;
}
var st = !1, lt = !1, oi = /* @__PURE__ */ function() {
  function e(t) {
    ni(this, e), Sa(this, "internalMonitor", void 0), Sa(this, "sourceId", null), this.internalMonitor = t.getMonitor();
  }
  return ri(e, [{
    key: "receiveHandlerId",
    value: function(a) {
      this.sourceId = a;
    }
  }, {
    key: "getHandlerId",
    value: function() {
      return this.sourceId;
    }
  }, {
    key: "canDrag",
    value: function() {
      N(!st, "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
      try {
        return st = !0, this.internalMonitor.canDragSource(this.sourceId);
      } finally {
        st = !1;
      }
    }
  }, {
    key: "isDragging",
    value: function() {
      if (!this.sourceId)
        return !1;
      N(!lt, "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
      try {
        return lt = !0, this.internalMonitor.isDraggingSource(this.sourceId);
      } finally {
        lt = !1;
      }
    }
  }, {
    key: "subscribeToStateChange",
    value: function(a, n) {
      return this.internalMonitor.subscribeToStateChange(a, n);
    }
  }, {
    key: "isDraggingSource",
    value: function(a) {
      return this.internalMonitor.isDraggingSource(a);
    }
  }, {
    key: "isOverTarget",
    value: function(a, n) {
      return this.internalMonitor.isOverTarget(a, n);
    }
  }, {
    key: "getTargetIds",
    value: function() {
      return this.internalMonitor.getTargetIds();
    }
  }, {
    key: "isSourcePublic",
    value: function() {
      return this.internalMonitor.isSourcePublic();
    }
  }, {
    key: "getSourceId",
    value: function() {
      return this.internalMonitor.getSourceId();
    }
  }, {
    key: "subscribeToOffsetChange",
    value: function(a) {
      return this.internalMonitor.subscribeToOffsetChange(a);
    }
  }, {
    key: "canDragSource",
    value: function(a) {
      return this.internalMonitor.canDragSource(a);
    }
  }, {
    key: "canDropOnTarget",
    value: function(a) {
      return this.internalMonitor.canDropOnTarget(a);
    }
  }, {
    key: "getItemType",
    value: function() {
      return this.internalMonitor.getItemType();
    }
  }, {
    key: "getItem",
    value: function() {
      return this.internalMonitor.getItem();
    }
  }, {
    key: "getDropResult",
    value: function() {
      return this.internalMonitor.getDropResult();
    }
  }, {
    key: "didDrop",
    value: function() {
      return this.internalMonitor.didDrop();
    }
  }, {
    key: "getInitialClientOffset",
    value: function() {
      return this.internalMonitor.getInitialClientOffset();
    }
  }, {
    key: "getInitialSourceClientOffset",
    value: function() {
      return this.internalMonitor.getInitialSourceClientOffset();
    }
  }, {
    key: "getSourceClientOffset",
    value: function() {
      return this.internalMonitor.getSourceClientOffset();
    }
  }, {
    key: "getClientOffset",
    value: function() {
      return this.internalMonitor.getClientOffset();
    }
  }, {
    key: "getDifferenceFromInitialOffset",
    value: function() {
      return this.internalMonitor.getDifferenceFromInitialOffset();
    }
  }]), e;
}();
function ii(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function wa(e, t) {
  for (var a = 0; a < t.length; a++) {
    var n = t[a];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function si(e, t, a) {
  return t && wa(e.prototype, t), a && wa(e, a), e;
}
function Ta(e, t, a) {
  return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = a, e;
}
var ct = !1, li = /* @__PURE__ */ function() {
  function e(t) {
    ii(this, e), Ta(this, "internalMonitor", void 0), Ta(this, "targetId", null), this.internalMonitor = t.getMonitor();
  }
  return si(e, [{
    key: "receiveHandlerId",
    value: function(a) {
      this.targetId = a;
    }
  }, {
    key: "getHandlerId",
    value: function() {
      return this.targetId;
    }
  }, {
    key: "subscribeToStateChange",
    value: function(a, n) {
      return this.internalMonitor.subscribeToStateChange(a, n);
    }
  }, {
    key: "canDrop",
    value: function() {
      if (!this.targetId)
        return !1;
      N(!ct, "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");
      try {
        return ct = !0, this.internalMonitor.canDropOnTarget(this.targetId);
      } finally {
        ct = !1;
      }
    }
  }, {
    key: "isOver",
    value: function(a) {
      return this.targetId ? this.internalMonitor.isOverTarget(this.targetId, a) : !1;
    }
  }, {
    key: "getItemType",
    value: function() {
      return this.internalMonitor.getItemType();
    }
  }, {
    key: "getItem",
    value: function() {
      return this.internalMonitor.getItem();
    }
  }, {
    key: "getDropResult",
    value: function() {
      return this.internalMonitor.getDropResult();
    }
  }, {
    key: "didDrop",
    value: function() {
      return this.internalMonitor.didDrop();
    }
  }, {
    key: "getInitialClientOffset",
    value: function() {
      return this.internalMonitor.getInitialClientOffset();
    }
  }, {
    key: "getInitialSourceClientOffset",
    value: function() {
      return this.internalMonitor.getInitialSourceClientOffset();
    }
  }, {
    key: "getSourceClientOffset",
    value: function() {
      return this.internalMonitor.getSourceClientOffset();
    }
  }, {
    key: "getClientOffset",
    value: function() {
      return this.internalMonitor.getClientOffset();
    }
  }, {
    key: "getDifferenceFromInitialOffset",
    value: function() {
      return this.internalMonitor.getDifferenceFromInitialOffset();
    }
  }]), e;
}();
function ci(e) {
  if (typeof e.type != "string") {
    var t = e.type.displayName || e.type.name || "the component";
    throw new Error("Only native element nodes can now be passed to React DnD connectors." + "You can either wrap ".concat(t, " into a <div>, or turn it into a ") + "drag source or a drop target itself.");
  }
}
function ui(e) {
  return function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    if (!v.isValidElement(t)) {
      var n = t;
      return e(n, a), n;
    }
    var r = t;
    ci(r);
    var o = a ? function(i) {
      return e(i, a);
    } : e;
    return di(r, o);
  };
}
function Sn(e) {
  var t = {};
  return Object.keys(e).forEach(function(a) {
    var n = e[a];
    if (a.endsWith("Ref"))
      t[a] = e[a];
    else {
      var r = ui(n);
      t[a] = function() {
        return r;
      };
    }
  }), t;
}
function Ra(e, t) {
  typeof e == "function" ? e(t) : e.current = t;
}
function di(e, t) {
  var a = e.ref;
  return N(typeof a != "string", "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"), a ? v.cloneElement(e, {
    ref: function(r) {
      Ra(a, r), Ra(t, r);
    }
  }) : v.cloneElement(e, {
    ref: t
  });
}
function qe(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? qe = function(a) {
    return typeof a;
  } : qe = function(a) {
    return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
  }, qe(e);
}
function bt(e) {
  return (
    // eslint-disable-next-line no-prototype-builtins
    e !== null && qe(e) === "object" && Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function Et(e, t, a, n) {
  var r = a ? a.call(n, e, t) : void 0;
  if (r !== void 0)
    return !!r;
  if (e === t)
    return !0;
  if (typeof e != "object" || !e || typeof t != "object" || !t)
    return !1;
  var o = Object.keys(e), i = Object.keys(t);
  if (o.length !== i.length)
    return !1;
  for (var s = Object.prototype.hasOwnProperty.bind(t), l = 0; l < o.length; l++) {
    var m = o[l];
    if (!s(m))
      return !1;
    var g = e[m], d = t[m];
    if (r = a ? a.call(n, g, d, m) : void 0, r === !1 || r === void 0 && g !== d)
      return !1;
  }
  return !0;
}
function fi(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ca(e, t) {
  for (var a = 0; a < t.length; a++) {
    var n = t[a];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function mi(e, t, a) {
  return t && Ca(e.prototype, t), a && Ca(e, a), e;
}
function K(e, t, a) {
  return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = a, e;
}
var pi = /* @__PURE__ */ function() {
  function e(t) {
    var a = this;
    fi(this, e), K(this, "hooks", Sn({
      dragSource: function(r, o) {
        a.clearDragSource(), a.dragSourceOptions = o || null, bt(r) ? a.dragSourceRef = r : a.dragSourceNode = r, a.reconnectDragSource();
      },
      dragPreview: function(r, o) {
        a.clearDragPreview(), a.dragPreviewOptions = o || null, bt(r) ? a.dragPreviewRef = r : a.dragPreviewNode = r, a.reconnectDragPreview();
      }
    })), K(this, "handlerId", null), K(this, "dragSourceRef", null), K(this, "dragSourceNode", void 0), K(this, "dragSourceOptionsInternal", null), K(this, "dragSourceUnsubscribe", void 0), K(this, "dragPreviewRef", null), K(this, "dragPreviewNode", void 0), K(this, "dragPreviewOptionsInternal", null), K(this, "dragPreviewUnsubscribe", void 0), K(this, "lastConnectedHandlerId", null), K(this, "lastConnectedDragSource", null), K(this, "lastConnectedDragSourceOptions", null), K(this, "lastConnectedDragPreview", null), K(this, "lastConnectedDragPreviewOptions", null), K(this, "backend", void 0), this.backend = t;
  }
  return mi(e, [{
    key: "receiveHandlerId",
    value: function(a) {
      this.handlerId !== a && (this.handlerId = a, this.reconnect());
    }
  }, {
    key: "connectTarget",
    get: function() {
      return this.dragSource;
    }
  }, {
    key: "dragSourceOptions",
    get: function() {
      return this.dragSourceOptionsInternal;
    },
    set: function(a) {
      this.dragSourceOptionsInternal = a;
    }
  }, {
    key: "dragPreviewOptions",
    get: function() {
      return this.dragPreviewOptionsInternal;
    },
    set: function(a) {
      this.dragPreviewOptionsInternal = a;
    }
  }, {
    key: "reconnect",
    value: function() {
      this.reconnectDragSource(), this.reconnectDragPreview();
    }
  }, {
    key: "reconnectDragSource",
    value: function() {
      var a = this.dragSource, n = this.didHandlerIdChange() || this.didConnectedDragSourceChange() || this.didDragSourceOptionsChange();
      if (n && this.disconnectDragSource(), !!this.handlerId) {
        if (!a) {
          this.lastConnectedDragSource = a;
          return;
        }
        n && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragSource = a, this.lastConnectedDragSourceOptions = this.dragSourceOptions, this.dragSourceUnsubscribe = this.backend.connectDragSource(this.handlerId, a, this.dragSourceOptions));
      }
    }
  }, {
    key: "reconnectDragPreview",
    value: function() {
      var a = this.dragPreview, n = this.didHandlerIdChange() || this.didConnectedDragPreviewChange() || this.didDragPreviewOptionsChange();
      if (n && this.disconnectDragPreview(), !!this.handlerId) {
        if (!a) {
          this.lastConnectedDragPreview = a;
          return;
        }
        n && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragPreview = a, this.lastConnectedDragPreviewOptions = this.dragPreviewOptions, this.dragPreviewUnsubscribe = this.backend.connectDragPreview(this.handlerId, a, this.dragPreviewOptions));
      }
    }
  }, {
    key: "didHandlerIdChange",
    value: function() {
      return this.lastConnectedHandlerId !== this.handlerId;
    }
  }, {
    key: "didConnectedDragSourceChange",
    value: function() {
      return this.lastConnectedDragSource !== this.dragSource;
    }
  }, {
    key: "didConnectedDragPreviewChange",
    value: function() {
      return this.lastConnectedDragPreview !== this.dragPreview;
    }
  }, {
    key: "didDragSourceOptionsChange",
    value: function() {
      return !Et(this.lastConnectedDragSourceOptions, this.dragSourceOptions);
    }
  }, {
    key: "didDragPreviewOptionsChange",
    value: function() {
      return !Et(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions);
    }
  }, {
    key: "disconnectDragSource",
    value: function() {
      this.dragSourceUnsubscribe && (this.dragSourceUnsubscribe(), this.dragSourceUnsubscribe = void 0);
    }
  }, {
    key: "disconnectDragPreview",
    value: function() {
      this.dragPreviewUnsubscribe && (this.dragPreviewUnsubscribe(), this.dragPreviewUnsubscribe = void 0, this.dragPreviewNode = null, this.dragPreviewRef = null);
    }
  }, {
    key: "dragSource",
    get: function() {
      return this.dragSourceNode || this.dragSourceRef && this.dragSourceRef.current;
    }
  }, {
    key: "dragPreview",
    get: function() {
      return this.dragPreviewNode || this.dragPreviewRef && this.dragPreviewRef.current;
    }
  }, {
    key: "clearDragSource",
    value: function() {
      this.dragSourceNode = null, this.dragSourceRef = null;
    }
  }, {
    key: "clearDragPreview",
    value: function() {
      this.dragPreviewNode = null, this.dragPreviewRef = null;
    }
  }]), e;
}();
function gi(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Oa(e, t) {
  for (var a = 0; a < t.length; a++) {
    var n = t[a];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function hi(e, t, a) {
  return t && Oa(e.prototype, t), a && Oa(e, a), e;
}
function fe(e, t, a) {
  return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = a, e;
}
var vi = /* @__PURE__ */ function() {
  function e(t) {
    var a = this;
    gi(this, e), fe(this, "hooks", Sn({
      dropTarget: function(r, o) {
        a.clearDropTarget(), a.dropTargetOptions = o, bt(r) ? a.dropTargetRef = r : a.dropTargetNode = r, a.reconnect();
      }
    })), fe(this, "handlerId", null), fe(this, "dropTargetRef", null), fe(this, "dropTargetNode", void 0), fe(this, "dropTargetOptionsInternal", null), fe(this, "unsubscribeDropTarget", void 0), fe(this, "lastConnectedHandlerId", null), fe(this, "lastConnectedDropTarget", null), fe(this, "lastConnectedDropTargetOptions", null), fe(this, "backend", void 0), this.backend = t;
  }
  return hi(e, [{
    key: "connectTarget",
    get: function() {
      return this.dropTarget;
    }
  }, {
    key: "reconnect",
    value: function() {
      var a = this.didHandlerIdChange() || this.didDropTargetChange() || this.didOptionsChange();
      a && this.disconnectDropTarget();
      var n = this.dropTarget;
      if (this.handlerId) {
        if (!n) {
          this.lastConnectedDropTarget = n;
          return;
        }
        a && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDropTarget = n, this.lastConnectedDropTargetOptions = this.dropTargetOptions, this.unsubscribeDropTarget = this.backend.connectDropTarget(this.handlerId, n, this.dropTargetOptions));
      }
    }
  }, {
    key: "receiveHandlerId",
    value: function(a) {
      a !== this.handlerId && (this.handlerId = a, this.reconnect());
    }
  }, {
    key: "dropTargetOptions",
    get: function() {
      return this.dropTargetOptionsInternal;
    },
    set: function(a) {
      this.dropTargetOptionsInternal = a;
    }
  }, {
    key: "didHandlerIdChange",
    value: function() {
      return this.lastConnectedHandlerId !== this.handlerId;
    }
  }, {
    key: "didDropTargetChange",
    value: function() {
      return this.lastConnectedDropTarget !== this.dropTarget;
    }
  }, {
    key: "didOptionsChange",
    value: function() {
      return !Et(this.lastConnectedDropTargetOptions, this.dropTargetOptions);
    }
  }, {
    key: "disconnectDropTarget",
    value: function() {
      this.unsubscribeDropTarget && (this.unsubscribeDropTarget(), this.unsubscribeDropTarget = void 0);
    }
  }, {
    key: "dropTarget",
    get: function() {
      return this.dropTargetNode || this.dropTargetRef && this.dropTargetRef.current;
    }
  }, {
    key: "clearDropTarget",
    value: function() {
      this.dropTargetRef = null, this.dropTargetNode = null;
    }
  }]), e;
}();
function yi(e, t, a) {
  var n = a.getRegistry(), r = n.addTarget(e, t);
  return [r, function() {
    return n.removeTarget(r);
  }];
}
function bi(e, t, a) {
  var n = a.getRegistry(), r = n.addSource(e, t);
  return [r, function() {
    return n.removeSource(r);
  }];
}
var Ee = typeof window < "u" ? v.useLayoutEffect : v.useEffect;
function Ge(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ge = function(a) {
    return typeof a;
  } : Ge = function(a) {
    return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
  }, Ge(e);
}
function Ei(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function _a(e, t) {
  for (var a = 0; a < t.length; a++) {
    var n = t[a];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Di(e, t, a) {
  return t && _a(e.prototype, t), a && _a(e, a), e;
}
function ut(e, t, a) {
  return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = a, e;
}
var Si = /* @__PURE__ */ function() {
  function e(t, a, n) {
    Ei(this, e), ut(this, "spec", void 0), ut(this, "monitor", void 0), ut(this, "connector", void 0), this.spec = t, this.monitor = a, this.connector = n;
  }
  return Di(e, [{
    key: "beginDrag",
    value: function() {
      var a, n = this.spec, r = this.monitor, o = null;
      return Ge(n.item) === "object" ? o = n.item : typeof n.item == "function" ? o = n.item(r) : o = {}, (a = o) !== null && a !== void 0 ? a : null;
    }
  }, {
    key: "canDrag",
    value: function() {
      var a = this.spec, n = this.monitor;
      return typeof a.canDrag == "boolean" ? a.canDrag : typeof a.canDrag == "function" ? a.canDrag(n) : !0;
    }
  }, {
    key: "isDragging",
    value: function(a, n) {
      var r = this.spec, o = this.monitor, i = r.isDragging;
      return i ? i(o) : n === a.getSourceId();
    }
  }, {
    key: "endDrag",
    value: function() {
      var a = this.spec, n = this.monitor, r = this.connector, o = a.end;
      o && o(n.getItem(), n), r.reconnect();
    }
  }]), e;
}();
function wi(e, t, a) {
  var n = v.useMemo(function() {
    return new Si(e, t, a);
  }, [t, a]);
  return v.useEffect(function() {
    n.spec = e;
  }, [e]), n;
}
function Oe() {
  var e = v.useContext(gn), t = e.dragDropManager;
  return N(t != null, "Expected drag drop context"), t;
}
function Ti(e) {
  return v.useMemo(function() {
    var t = e.type;
    return N(t != null, "spec.type must be defined"), t;
  }, [e]);
}
function Ri(e, t) {
  return Ii(e) || _i(e, t) || Oi(e, t) || Ci();
}
function Ci() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Oi(e, t) {
  if (e) {
    if (typeof e == "string")
      return Ia(e, t);
    var a = Object.prototype.toString.call(e).slice(8, -1);
    if (a === "Object" && e.constructor && (a = e.constructor.name), a === "Map" || a === "Set")
      return Array.from(e);
    if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
      return Ia(e, t);
  }
}
function Ia(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var a = 0, n = new Array(t); a < t; a++)
    n[a] = e[a];
  return n;
}
function _i(e, t) {
  var a = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (a != null) {
    var n = [], r = !0, o = !1, i, s;
    try {
      for (a = a.call(e); !(r = (i = a.next()).done) && (n.push(i.value), !(t && n.length === t)); r = !0)
        ;
    } catch (l) {
      o = !0, s = l;
    } finally {
      try {
        !r && a.return != null && a.return();
      } finally {
        if (o)
          throw s;
      }
    }
    return n;
  }
}
function Ii(e) {
  if (Array.isArray(e))
    return e;
}
function ki(e, t, a) {
  var n = Oe(), r = wi(e, t, a), o = Ti(e);
  Ee(function() {
    if (o != null) {
      var s = bi(o, r, n), l = Ri(s, 2), m = l[0], g = l[1];
      return t.receiveHandlerId(m), a.receiveHandlerId(m), g;
    }
  }, [n, t, a, r, o]);
}
function Ni(e) {
  return Pi(e) || Li(e) || Ai(e) || Fi();
}
function Fi() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ai(e, t) {
  if (e) {
    if (typeof e == "string")
      return Dt(e, t);
    var a = Object.prototype.toString.call(e).slice(8, -1);
    if (a === "Object" && e.constructor && (a = e.constructor.name), a === "Map" || a === "Set")
      return Array.from(e);
    if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
      return Dt(e, t);
  }
}
function Li(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Pi(e) {
  if (Array.isArray(e))
    return Dt(e);
}
function Dt(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var a = 0, n = new Array(t); a < t; a++)
    n[a] = e[a];
  return n;
}
function wn(e, t) {
  var a = Ni(t || []);
  return t == null && typeof e != "function" && a.push(e), v.useMemo(function() {
    return typeof e == "function" ? e() : e;
  }, a);
}
function xi() {
  var e = Oe();
  return v.useMemo(function() {
    return new oi(e);
  }, [e]);
}
function Mi(e, t) {
  var a = Oe(), n = v.useMemo(function() {
    return new pi(a.getBackend());
  }, [a]);
  return Ee(function() {
    return n.dragSourceOptions = e || null, n.reconnect(), function() {
      return n.disconnectDragSource();
    };
  }, [n, e]), Ee(function() {
    return n.dragPreviewOptions = t || null, n.reconnect(), function() {
      return n.disconnectDragPreview();
    };
  }, [n, t]), n;
}
function $i(e, t) {
  return zi(e) || Ui(e, t) || Vi(e, t) || Bi();
}
function Bi() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Vi(e, t) {
  if (e) {
    if (typeof e == "string")
      return ka(e, t);
    var a = Object.prototype.toString.call(e).slice(8, -1);
    if (a === "Object" && e.constructor && (a = e.constructor.name), a === "Map" || a === "Set")
      return Array.from(e);
    if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
      return ka(e, t);
  }
}
function ka(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var a = 0, n = new Array(t); a < t; a++)
    n[a] = e[a];
  return n;
}
function Ui(e, t) {
  var a = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (a != null) {
    var n = [], r = !0, o = !1, i, s;
    try {
      for (a = a.call(e); !(r = (i = a.next()).done) && (n.push(i.value), !(t && n.length === t)); r = !0)
        ;
    } catch (l) {
      o = !0, s = l;
    } finally {
      try {
        !r && a.return != null && a.return();
      } finally {
        if (o)
          throw s;
      }
    }
    return n;
  }
}
function zi(e) {
  if (Array.isArray(e))
    return e;
}
function Hi(e, t, a) {
  var n = v.useState(function() {
    return t(e);
  }), r = $i(n, 2), o = r[0], i = r[1], s = v.useCallback(function() {
    var l = t(e);
    lr(o, l) || (i(l), a && a());
  }, [o, e, a]);
  return Ee(s), [o, s];
}
function ji(e, t) {
  return Qi(e) || Wi(e, t) || Gi(e, t) || qi();
}
function qi() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Gi(e, t) {
  if (e) {
    if (typeof e == "string")
      return Na(e, t);
    var a = Object.prototype.toString.call(e).slice(8, -1);
    if (a === "Object" && e.constructor && (a = e.constructor.name), a === "Map" || a === "Set")
      return Array.from(e);
    if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
      return Na(e, t);
  }
}
function Na(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var a = 0, n = new Array(t); a < t; a++)
    n[a] = e[a];
  return n;
}
function Wi(e, t) {
  var a = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (a != null) {
    var n = [], r = !0, o = !1, i, s;
    try {
      for (a = a.call(e); !(r = (i = a.next()).done) && (n.push(i.value), !(t && n.length === t)); r = !0)
        ;
    } catch (l) {
      o = !0, s = l;
    } finally {
      try {
        !r && a.return != null && a.return();
      } finally {
        if (o)
          throw s;
      }
    }
    return n;
  }
}
function Qi(e) {
  if (Array.isArray(e))
    return e;
}
function Zi(e, t, a) {
  var n = Hi(e, t, a), r = ji(n, 2), o = r[0], i = r[1];
  return Ee(function() {
    var l = e.getHandlerId();
    if (l != null)
      return e.subscribeToStateChange(i, {
        handlerIds: [l]
      });
  }, [e, i]), o;
}
function Tn(e, t, a) {
  return Zi(t, e || function() {
    return {};
  }, function() {
    return a.reconnect();
  });
}
function Ki(e) {
  return v.useMemo(function() {
    return e.hooks.dragSource();
  }, [e]);
}
function Xi(e) {
  return v.useMemo(function() {
    return e.hooks.dragPreview();
  }, [e]);
}
function Yi(e, t) {
  var a = wn(e, t);
  N(!a.begin, "useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");
  var n = xi(), r = Mi(a.options, a.previewOptions);
  return ki(a, n, r), [Tn(a.collect, n, r), Ki(r), Xi(r)];
}
function Ji(e) {
  var t = e.accept;
  return v.useMemo(function() {
    return N(e.accept != null, "accept must be defined"), Array.isArray(t) ? t : [t];
  }, [t]);
}
function es(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Fa(e, t) {
  for (var a = 0; a < t.length; a++) {
    var n = t[a];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function ts(e, t, a) {
  return t && Fa(e.prototype, t), a && Fa(e, a), e;
}
function Aa(e, t, a) {
  return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = a, e;
}
var as = /* @__PURE__ */ function() {
  function e(t, a) {
    es(this, e), Aa(this, "spec", void 0), Aa(this, "monitor", void 0), this.spec = t, this.monitor = a;
  }
  return ts(e, [{
    key: "canDrop",
    value: function() {
      var a = this.spec, n = this.monitor;
      return a.canDrop ? a.canDrop(n.getItem(), n) : !0;
    }
  }, {
    key: "hover",
    value: function() {
      var a = this.spec, n = this.monitor;
      a.hover && a.hover(n.getItem(), n);
    }
  }, {
    key: "drop",
    value: function() {
      var a = this.spec, n = this.monitor;
      if (a.drop)
        return a.drop(n.getItem(), n);
    }
  }]), e;
}();
function ns(e, t) {
  var a = v.useMemo(function() {
    return new as(e, t);
  }, [t]);
  return v.useEffect(function() {
    a.spec = e;
  }, [e]), a;
}
function rs(e, t) {
  return ls(e) || ss(e, t) || is(e, t) || os();
}
function os() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function is(e, t) {
  if (e) {
    if (typeof e == "string")
      return La(e, t);
    var a = Object.prototype.toString.call(e).slice(8, -1);
    if (a === "Object" && e.constructor && (a = e.constructor.name), a === "Map" || a === "Set")
      return Array.from(e);
    if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
      return La(e, t);
  }
}
function La(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var a = 0, n = new Array(t); a < t; a++)
    n[a] = e[a];
  return n;
}
function ss(e, t) {
  var a = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (a != null) {
    var n = [], r = !0, o = !1, i, s;
    try {
      for (a = a.call(e); !(r = (i = a.next()).done) && (n.push(i.value), !(t && n.length === t)); r = !0)
        ;
    } catch (l) {
      o = !0, s = l;
    } finally {
      try {
        !r && a.return != null && a.return();
      } finally {
        if (o)
          throw s;
      }
    }
    return n;
  }
}
function ls(e) {
  if (Array.isArray(e))
    return e;
}
function cs(e, t, a) {
  var n = Oe(), r = ns(e, t), o = Ji(e);
  Ee(function() {
    var s = yi(o, r, n), l = rs(s, 2), m = l[0], g = l[1];
    return t.receiveHandlerId(m), a.receiveHandlerId(m), g;
  }, [n, t, r, a, o.map(function(i) {
    return i.toString();
  }).join("|")]);
}
function us() {
  var e = Oe();
  return v.useMemo(function() {
    return new li(e);
  }, [e]);
}
function ds(e) {
  var t = Oe(), a = v.useMemo(function() {
    return new vi(t.getBackend());
  }, [t]);
  return Ee(function() {
    return a.dropTargetOptions = e || null, a.reconnect(), function() {
      return a.disconnectDropTarget();
    };
  }, [e]), a;
}
function fs(e) {
  return v.useMemo(function() {
    return e.hooks.dropTarget();
  }, [e]);
}
function ms(e, t) {
  var a = wn(e, t), n = us(), r = ds(a.options);
  return cs(a, n, r), [Tn(a.collect, n, r), fs(r)];
}
function Rn(e) {
  var t = null, a = function() {
    return t == null && (t = e()), t;
  };
  return a;
}
function ps(e, t) {
  return e.filter(function(a) {
    return a !== t;
  });
}
function gs(e, t) {
  var a = /* @__PURE__ */ new Set(), n = function(i) {
    return a.add(i);
  };
  e.forEach(n), t.forEach(n);
  var r = [];
  return a.forEach(function(o) {
    return r.push(o);
  }), r;
}
function hs(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Pa(e, t) {
  for (var a = 0; a < t.length; a++) {
    var n = t[a];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function vs(e, t, a) {
  return t && Pa(e.prototype, t), a && Pa(e, a), e;
}
function xa(e, t, a) {
  return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = a, e;
}
var ys = /* @__PURE__ */ function() {
  function e(t) {
    hs(this, e), xa(this, "entered", []), xa(this, "isNodeInDocument", void 0), this.isNodeInDocument = t;
  }
  return vs(e, [{
    key: "enter",
    value: function(a) {
      var n = this, r = this.entered.length, o = function(s) {
        return n.isNodeInDocument(s) && (!s.contains || s.contains(a));
      };
      return this.entered = gs(this.entered.filter(o), [a]), r === 0 && this.entered.length > 0;
    }
  }, {
    key: "leave",
    value: function(a) {
      var n = this.entered.length;
      return this.entered = ps(this.entered.filter(this.isNodeInDocument), a), n > 0 && this.entered.length === 0;
    }
  }, {
    key: "reset",
    value: function() {
      this.entered = [];
    }
  }]), e;
}(), bs = Rn(function() {
  return /firefox/i.test(navigator.userAgent);
}), Cn = Rn(function() {
  return !!window.safari;
});
function Es(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ma(e, t) {
  for (var a = 0; a < t.length; a++) {
    var n = t[a];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Ds(e, t, a) {
  return t && Ma(e.prototype, t), a && Ma(e, a), e;
}
function Fe(e, t, a) {
  return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = a, e;
}
var $a = /* @__PURE__ */ function() {
  function e(t, a) {
    Es(this, e), Fe(this, "xs", void 0), Fe(this, "ys", void 0), Fe(this, "c1s", void 0), Fe(this, "c2s", void 0), Fe(this, "c3s", void 0);
    for (var n = t.length, r = [], o = 0; o < n; o++)
      r.push(o);
    r.sort(function(w, R) {
      return t[w] < t[R] ? -1 : 1;
    });
    for (var i = [], s = [], l, m, g = 0; g < n - 1; g++)
      l = t[g + 1] - t[g], m = a[g + 1] - a[g], i.push(l), s.push(m / l);
    for (var d = [s[0]], S = 0; S < i.length - 1; S++) {
      var y = s[S], T = s[S + 1];
      if (y * T <= 0)
        d.push(0);
      else {
        l = i[S];
        var O = i[S + 1], p = l + O;
        d.push(3 * p / ((p + O) / y + (p + l) / T));
      }
    }
    d.push(s[s.length - 1]);
    for (var u = [], h = [], f, E = 0; E < d.length - 1; E++) {
      f = s[E];
      var b = d[E], D = 1 / i[E], C = b + d[E + 1] - f - f;
      u.push((f - b - C) * D), h.push(C * D * D);
    }
    this.xs = t, this.ys = a, this.c1s = d, this.c2s = u, this.c3s = h;
  }
  return Ds(e, [{
    key: "interpolate",
    value: function(a) {
      var n = this.xs, r = this.ys, o = this.c1s, i = this.c2s, s = this.c3s, l = n.length - 1;
      if (a === n[l])
        return r[l];
      for (var m = 0, g = s.length - 1, d; m <= g; ) {
        d = Math.floor(0.5 * (m + g));
        var S = n[d];
        if (S < a)
          m = d + 1;
        else if (S > a)
          g = d - 1;
        else
          return r[d];
      }
      l = Math.max(0, g);
      var y = a - n[l], T = y * y;
      return r[l] + o[l] * y + i[l] * T + s[l] * y * T;
    }
  }]), e;
}(), Ss = 1;
function On(e) {
  var t = e.nodeType === Ss ? e : e.parentElement;
  if (!t)
    return null;
  var a = t.getBoundingClientRect(), n = a.top, r = a.left;
  return {
    x: r,
    y: n
  };
}
function $e(e) {
  return {
    x: e.clientX,
    y: e.clientY
  };
}
function ws(e) {
  var t;
  return e.nodeName === "IMG" && (bs() || !((t = document.documentElement) !== null && t !== void 0 && t.contains(e)));
}
function Ts(e, t, a, n) {
  var r = e ? t.width : a, o = e ? t.height : n;
  return Cn() && e && (o /= window.devicePixelRatio, r /= window.devicePixelRatio), {
    dragPreviewWidth: r,
    dragPreviewHeight: o
  };
}
function Rs(e, t, a, n, r) {
  var o = ws(t), i = o ? e : t, s = On(i), l = {
    x: a.x - s.x,
    y: a.y - s.y
  }, m = e.offsetWidth, g = e.offsetHeight, d = n.anchorX, S = n.anchorY, y = Ts(o, t, m, g), T = y.dragPreviewWidth, O = y.dragPreviewHeight, p = function() {
    var C = new $a([0, 0.5, 1], [
      // Dock to the top
      l.y,
      // Align at the center
      l.y / g * O,
      // Dock to the bottom
      l.y + O - g
    ]), w = C.interpolate(S);
    return Cn() && o && (w += (window.devicePixelRatio - 1) * O), w;
  }, u = function() {
    var C = new $a([0, 0.5, 1], [
      // Dock to the left
      l.x,
      // Align at the center
      l.x / m * T,
      // Dock to the right
      l.x + T - m
    ]);
    return C.interpolate(d);
  }, h = r.offsetX, f = r.offsetY, E = h === 0 || h, b = f === 0 || f;
  return {
    x: E ? h : u(),
    y: b ? f : p()
  };
}
var _n = "__NATIVE_FILE__", In = "__NATIVE_URL__", kn = "__NATIVE_TEXT__", Nn = "__NATIVE_HTML__";
const Ba = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FILE: _n,
  HTML: Nn,
  TEXT: kn,
  URL: In
}, Symbol.toStringTag, { value: "Module" }));
function dt(e, t, a) {
  var n = t.reduce(function(r, o) {
    return r || e.getData(o);
  }, "");
  return n ?? a;
}
var Re;
function Be(e, t, a) {
  return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = a, e;
}
var St = (Re = {}, Be(Re, _n, {
  exposeProperties: {
    files: function(t) {
      return Array.prototype.slice.call(t.files);
    },
    items: function(t) {
      return t.items;
    },
    dataTransfer: function(t) {
      return t;
    }
  },
  matchesTypes: ["Files"]
}), Be(Re, Nn, {
  exposeProperties: {
    html: function(t, a) {
      return dt(t, a, "");
    },
    dataTransfer: function(t) {
      return t;
    }
  },
  matchesTypes: ["Html", "text/html"]
}), Be(Re, In, {
  exposeProperties: {
    urls: function(t, a) {
      return dt(t, a, "").split(`
`);
    },
    dataTransfer: function(t) {
      return t;
    }
  },
  matchesTypes: ["Url", "text/uri-list"]
}), Be(Re, kn, {
  exposeProperties: {
    text: function(t, a) {
      return dt(t, a, "");
    },
    dataTransfer: function(t) {
      return t;
    }
  },
  matchesTypes: ["Text", "text/plain"]
}), Re);
function Cs(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Va(e, t) {
  for (var a = 0; a < t.length; a++) {
    var n = t[a];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Os(e, t, a) {
  return t && Va(e.prototype, t), a && Va(e, a), e;
}
function Ua(e, t, a) {
  return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = a, e;
}
var _s = /* @__PURE__ */ function() {
  function e(t) {
    Cs(this, e), Ua(this, "item", void 0), Ua(this, "config", void 0), this.config = t, this.item = {}, this.initializeExposedProperties();
  }
  return Os(e, [{
    key: "initializeExposedProperties",
    value: function() {
      var a = this;
      Object.keys(this.config.exposeProperties).forEach(function(n) {
        Object.defineProperty(a.item, n, {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return console.warn(`Browser doesn't allow reading "`.concat(n, '" until the drop event.')), null;
          }
        });
      });
    }
  }, {
    key: "loadDataTransfer",
    value: function(a) {
      var n = this;
      if (a) {
        var r = {};
        Object.keys(this.config.exposeProperties).forEach(function(o) {
          r[o] = {
            value: n.config.exposeProperties[o](a, n.config.matchesTypes),
            configurable: !0,
            enumerable: !0
          };
        }), Object.defineProperties(this.item, r);
      }
    }
  }, {
    key: "canDrag",
    value: function() {
      return !0;
    }
  }, {
    key: "beginDrag",
    value: function() {
      return this.item;
    }
  }, {
    key: "isDragging",
    value: function(a, n) {
      return n === a.getSourceId();
    }
  }, {
    key: "endDrag",
    value: function() {
    }
  }]), e;
}();
function Is(e, t) {
  var a = new _s(St[e]);
  return a.loadDataTransfer(t), a;
}
function ft(e) {
  if (!e)
    return null;
  var t = Array.prototype.slice.call(e.types || []);
  return Object.keys(St).filter(function(a) {
    var n = St[a].matchesTypes;
    return n.some(function(r) {
      return t.indexOf(r) > -1;
    });
  })[0] || null;
}
function ks(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function za(e, t) {
  for (var a = 0; a < t.length; a++) {
    var n = t[a];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Ns(e, t, a) {
  return t && za(e.prototype, t), a && za(e, a), e;
}
function mt(e, t, a) {
  return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = a, e;
}
var Fs = /* @__PURE__ */ function() {
  function e(t, a) {
    ks(this, e), mt(this, "ownerDocument", null), mt(this, "globalContext", void 0), mt(this, "optionsArgs", void 0), this.globalContext = t, this.optionsArgs = a;
  }
  return Ns(e, [{
    key: "window",
    get: function() {
      if (this.globalContext)
        return this.globalContext;
      if (typeof window < "u")
        return window;
    }
  }, {
    key: "document",
    get: function() {
      var a;
      return (a = this.globalContext) !== null && a !== void 0 && a.document ? this.globalContext.document : this.window ? this.window.document : void 0;
    }
  }, {
    key: "rootElement",
    get: function() {
      var a;
      return ((a = this.optionsArgs) === null || a === void 0 ? void 0 : a.rootElement) || this.window;
    }
  }]), e;
}();
function Ha(e, t) {
  var a = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), a.push.apply(a, n);
  }
  return a;
}
function ja(e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ha(Object(a), !0).forEach(function(n) {
      x(e, n, a[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : Ha(Object(a)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(a, n));
    });
  }
  return e;
}
function As(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function qa(e, t) {
  for (var a = 0; a < t.length; a++) {
    var n = t[a];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Ls(e, t, a) {
  return t && qa(e.prototype, t), a && qa(e, a), e;
}
function x(e, t, a) {
  return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = a, e;
}
var Ps = /* @__PURE__ */ function() {
  function e(t, a, n) {
    var r = this;
    As(this, e), x(this, "options", void 0), x(this, "actions", void 0), x(this, "monitor", void 0), x(this, "registry", void 0), x(this, "enterLeaveCounter", void 0), x(this, "sourcePreviewNodes", /* @__PURE__ */ new Map()), x(this, "sourcePreviewNodeOptions", /* @__PURE__ */ new Map()), x(this, "sourceNodes", /* @__PURE__ */ new Map()), x(this, "sourceNodeOptions", /* @__PURE__ */ new Map()), x(this, "dragStartSourceIds", null), x(this, "dropTargetIds", []), x(this, "dragEnterTargetIds", []), x(this, "currentNativeSource", null), x(this, "currentNativeHandle", null), x(this, "currentDragSourceNode", null), x(this, "altKeyPressed", !1), x(this, "mouseMoveTimeoutTimer", null), x(this, "asyncEndDragFrameId", null), x(this, "dragOverTargetIds", null), x(this, "lastClientOffset", null), x(this, "hoverRafId", null), x(this, "getSourceClientOffset", function(o) {
      var i = r.sourceNodes.get(o);
      return i && On(i) || null;
    }), x(this, "endDragNativeItem", function() {
      r.isDraggingNativeItem() && (r.actions.endDrag(), r.currentNativeHandle && r.registry.removeSource(r.currentNativeHandle), r.currentNativeHandle = null, r.currentNativeSource = null);
    }), x(this, "isNodeInDocument", function(o) {
      return !!(o && r.document && r.document.body && r.document.body.contains(o));
    }), x(this, "endDragIfSourceWasRemovedFromDOM", function() {
      var o = r.currentDragSourceNode;
      o == null || r.isNodeInDocument(o) || r.clearCurrentDragSourceNode() && r.monitor.isDragging() && r.actions.endDrag();
    }), x(this, "handleTopDragStartCapture", function() {
      r.clearCurrentDragSourceNode(), r.dragStartSourceIds = [];
    }), x(this, "handleTopDragStart", function(o) {
      if (!o.defaultPrevented) {
        var i = r.dragStartSourceIds;
        r.dragStartSourceIds = null;
        var s = $e(o);
        r.monitor.isDragging() && r.actions.endDrag(), r.actions.beginDrag(i || [], {
          publishSource: !1,
          getSourceClientOffset: r.getSourceClientOffset,
          clientOffset: s
        });
        var l = o.dataTransfer, m = ft(l);
        if (r.monitor.isDragging()) {
          if (l && typeof l.setDragImage == "function") {
            var g = r.monitor.getSourceId(), d = r.sourceNodes.get(g), S = r.sourcePreviewNodes.get(g) || d;
            if (S) {
              var y = r.getCurrentSourcePreviewNodeOptions(), T = y.anchorX, O = y.anchorY, p = y.offsetX, u = y.offsetY, h = {
                anchorX: T,
                anchorY: O
              }, f = {
                offsetX: p,
                offsetY: u
              }, E = Rs(d, S, s, h, f);
              l.setDragImage(S, E.x, E.y);
            }
          }
          try {
            l == null || l.setData("application/json", {});
          } catch {
          }
          r.setCurrentDragSourceNode(o.target);
          var b = r.getCurrentSourcePreviewNodeOptions(), D = b.captureDraggingState;
          D ? r.actions.publishDragSource() : setTimeout(function() {
            return r.actions.publishDragSource();
          }, 0);
        } else if (m)
          r.beginDragNativeItem(m);
        else {
          if (l && !l.types && (o.target && !o.target.hasAttribute || !o.target.hasAttribute("draggable")))
            return;
          o.preventDefault();
        }
      }
    }), x(this, "handleTopDragEndCapture", function() {
      r.clearCurrentDragSourceNode() && r.monitor.isDragging() && r.actions.endDrag();
    }), x(this, "handleTopDragEnterCapture", function(o) {
      r.dragEnterTargetIds = [];
      var i = r.enterLeaveCounter.enter(o.target);
      if (!(!i || r.monitor.isDragging())) {
        var s = o.dataTransfer, l = ft(s);
        l && r.beginDragNativeItem(l, s);
      }
    }), x(this, "handleTopDragEnter", function(o) {
      var i = r.dragEnterTargetIds;
      if (r.dragEnterTargetIds = [], !!r.monitor.isDragging()) {
        r.altKeyPressed = o.altKey, i.length > 0 && r.actions.hover(i, {
          clientOffset: $e(o)
        });
        var s = i.some(function(l) {
          return r.monitor.canDropOnTarget(l);
        });
        s && (o.preventDefault(), o.dataTransfer && (o.dataTransfer.dropEffect = r.getCurrentDropEffect()));
      }
    }), x(this, "handleTopDragOverCapture", function() {
      r.dragOverTargetIds = [];
    }), x(this, "handleTopDragOver", function(o) {
      var i = r.dragOverTargetIds;
      if (r.dragOverTargetIds = [], !r.monitor.isDragging()) {
        o.preventDefault(), o.dataTransfer && (o.dataTransfer.dropEffect = "none");
        return;
      }
      r.altKeyPressed = o.altKey, r.lastClientOffset = $e(o), r.hoverRafId === null && typeof requestAnimationFrame < "u" && (r.hoverRafId = requestAnimationFrame(function() {
        r.monitor.isDragging() && r.actions.hover(i || [], {
          clientOffset: r.lastClientOffset
        }), r.hoverRafId = null;
      }));
      var s = (i || []).some(function(l) {
        return r.monitor.canDropOnTarget(l);
      });
      s ? (o.preventDefault(), o.dataTransfer && (o.dataTransfer.dropEffect = r.getCurrentDropEffect())) : r.isDraggingNativeItem() ? o.preventDefault() : (o.preventDefault(), o.dataTransfer && (o.dataTransfer.dropEffect = "none"));
    }), x(this, "handleTopDragLeaveCapture", function(o) {
      r.isDraggingNativeItem() && o.preventDefault();
      var i = r.enterLeaveCounter.leave(o.target);
      i && r.isDraggingNativeItem() && setTimeout(function() {
        return r.endDragNativeItem();
      }, 0);
    }), x(this, "handleTopDropCapture", function(o) {
      if (r.dropTargetIds = [], r.isDraggingNativeItem()) {
        var i;
        o.preventDefault(), (i = r.currentNativeSource) === null || i === void 0 || i.loadDataTransfer(o.dataTransfer);
      } else
        ft(o.dataTransfer) && o.preventDefault();
      r.enterLeaveCounter.reset();
    }), x(this, "handleTopDrop", function(o) {
      var i = r.dropTargetIds;
      r.dropTargetIds = [], r.actions.hover(i, {
        clientOffset: $e(o)
      }), r.actions.drop({
        dropEffect: r.getCurrentDropEffect()
      }), r.isDraggingNativeItem() ? r.endDragNativeItem() : r.monitor.isDragging() && r.actions.endDrag();
    }), x(this, "handleSelectStart", function(o) {
      var i = o.target;
      typeof i.dragDrop == "function" && (i.tagName === "INPUT" || i.tagName === "SELECT" || i.tagName === "TEXTAREA" || i.isContentEditable || (o.preventDefault(), i.dragDrop()));
    }), this.options = new Fs(a, n), this.actions = t.getActions(), this.monitor = t.getMonitor(), this.registry = t.getRegistry(), this.enterLeaveCounter = new ys(this.isNodeInDocument);
  }
  return Ls(e, [{
    key: "profile",
    value: function() {
      var a, n;
      return {
        sourcePreviewNodes: this.sourcePreviewNodes.size,
        sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
        sourceNodeOptions: this.sourceNodeOptions.size,
        sourceNodes: this.sourceNodes.size,
        dragStartSourceIds: ((a = this.dragStartSourceIds) === null || a === void 0 ? void 0 : a.length) || 0,
        dropTargetIds: this.dropTargetIds.length,
        dragEnterTargetIds: this.dragEnterTargetIds.length,
        dragOverTargetIds: ((n = this.dragOverTargetIds) === null || n === void 0 ? void 0 : n.length) || 0
      };
    }
    // public for test
  }, {
    key: "window",
    get: function() {
      return this.options.window;
    }
  }, {
    key: "document",
    get: function() {
      return this.options.document;
    }
    /**
     * Get the root element to use for event subscriptions
     */
  }, {
    key: "rootElement",
    get: function() {
      return this.options.rootElement;
    }
  }, {
    key: "setup",
    value: function() {
      var a = this.rootElement;
      if (a !== void 0) {
        if (a.__isReactDndBackendSetUp)
          throw new Error("Cannot have two HTML5 backends at the same time.");
        a.__isReactDndBackendSetUp = !0, this.addEventListeners(a);
      }
    }
  }, {
    key: "teardown",
    value: function() {
      var a = this.rootElement;
      if (a !== void 0 && (a.__isReactDndBackendSetUp = !1, this.removeEventListeners(this.rootElement), this.clearCurrentDragSourceNode(), this.asyncEndDragFrameId)) {
        var n;
        (n = this.window) === null || n === void 0 || n.cancelAnimationFrame(this.asyncEndDragFrameId);
      }
    }
  }, {
    key: "connectDragPreview",
    value: function(a, n, r) {
      var o = this;
      return this.sourcePreviewNodeOptions.set(a, r), this.sourcePreviewNodes.set(a, n), function() {
        o.sourcePreviewNodes.delete(a), o.sourcePreviewNodeOptions.delete(a);
      };
    }
  }, {
    key: "connectDragSource",
    value: function(a, n, r) {
      var o = this;
      this.sourceNodes.set(a, n), this.sourceNodeOptions.set(a, r);
      var i = function(m) {
        return o.handleDragStart(m, a);
      }, s = function(m) {
        return o.handleSelectStart(m);
      };
      return n.setAttribute("draggable", "true"), n.addEventListener("dragstart", i), n.addEventListener("selectstart", s), function() {
        o.sourceNodes.delete(a), o.sourceNodeOptions.delete(a), n.removeEventListener("dragstart", i), n.removeEventListener("selectstart", s), n.setAttribute("draggable", "false");
      };
    }
  }, {
    key: "connectDropTarget",
    value: function(a, n) {
      var r = this, o = function(m) {
        return r.handleDragEnter(m, a);
      }, i = function(m) {
        return r.handleDragOver(m, a);
      }, s = function(m) {
        return r.handleDrop(m, a);
      };
      return n.addEventListener("dragenter", o), n.addEventListener("dragover", i), n.addEventListener("drop", s), function() {
        n.removeEventListener("dragenter", o), n.removeEventListener("dragover", i), n.removeEventListener("drop", s);
      };
    }
  }, {
    key: "addEventListeners",
    value: function(a) {
      a.addEventListener && (a.addEventListener("dragstart", this.handleTopDragStart), a.addEventListener("dragstart", this.handleTopDragStartCapture, !0), a.addEventListener("dragend", this.handleTopDragEndCapture, !0), a.addEventListener("dragenter", this.handleTopDragEnter), a.addEventListener("dragenter", this.handleTopDragEnterCapture, !0), a.addEventListener("dragleave", this.handleTopDragLeaveCapture, !0), a.addEventListener("dragover", this.handleTopDragOver), a.addEventListener("dragover", this.handleTopDragOverCapture, !0), a.addEventListener("drop", this.handleTopDrop), a.addEventListener("drop", this.handleTopDropCapture, !0));
    }
  }, {
    key: "removeEventListeners",
    value: function(a) {
      a.removeEventListener && (a.removeEventListener("dragstart", this.handleTopDragStart), a.removeEventListener("dragstart", this.handleTopDragStartCapture, !0), a.removeEventListener("dragend", this.handleTopDragEndCapture, !0), a.removeEventListener("dragenter", this.handleTopDragEnter), a.removeEventListener("dragenter", this.handleTopDragEnterCapture, !0), a.removeEventListener("dragleave", this.handleTopDragLeaveCapture, !0), a.removeEventListener("dragover", this.handleTopDragOver), a.removeEventListener("dragover", this.handleTopDragOverCapture, !0), a.removeEventListener("drop", this.handleTopDrop), a.removeEventListener("drop", this.handleTopDropCapture, !0));
    }
  }, {
    key: "getCurrentSourceNodeOptions",
    value: function() {
      var a = this.monitor.getSourceId(), n = this.sourceNodeOptions.get(a);
      return ja({
        dropEffect: this.altKeyPressed ? "copy" : "move"
      }, n || {});
    }
  }, {
    key: "getCurrentDropEffect",
    value: function() {
      return this.isDraggingNativeItem() ? "copy" : this.getCurrentSourceNodeOptions().dropEffect;
    }
  }, {
    key: "getCurrentSourcePreviewNodeOptions",
    value: function() {
      var a = this.monitor.getSourceId(), n = this.sourcePreviewNodeOptions.get(a);
      return ja({
        anchorX: 0.5,
        anchorY: 0.5,
        captureDraggingState: !1
      }, n || {});
    }
  }, {
    key: "isDraggingNativeItem",
    value: function() {
      var a = this.monitor.getItemType();
      return Object.keys(Ba).some(function(n) {
        return Ba[n] === a;
      });
    }
  }, {
    key: "beginDragNativeItem",
    value: function(a, n) {
      this.clearCurrentDragSourceNode(), this.currentNativeSource = Is(a, n), this.currentNativeHandle = this.registry.addSource(a, this.currentNativeSource), this.actions.beginDrag([this.currentNativeHandle]);
    }
  }, {
    key: "setCurrentDragSourceNode",
    value: function(a) {
      var n = this;
      this.clearCurrentDragSourceNode(), this.currentDragSourceNode = a;
      var r = 1e3;
      this.mouseMoveTimeoutTimer = setTimeout(function() {
        var o;
        return (o = n.rootElement) === null || o === void 0 ? void 0 : o.addEventListener("mousemove", n.endDragIfSourceWasRemovedFromDOM, !0);
      }, r);
    }
  }, {
    key: "clearCurrentDragSourceNode",
    value: function() {
      if (this.currentDragSourceNode) {
        if (this.currentDragSourceNode = null, this.rootElement) {
          var a;
          (a = this.window) === null || a === void 0 || a.clearTimeout(this.mouseMoveTimeoutTimer || void 0), this.rootElement.removeEventListener("mousemove", this.endDragIfSourceWasRemovedFromDOM, !0);
        }
        return this.mouseMoveTimeoutTimer = null, !0;
      }
      return !1;
    }
  }, {
    key: "handleDragStart",
    value: function(a, n) {
      a.defaultPrevented || (this.dragStartSourceIds || (this.dragStartSourceIds = []), this.dragStartSourceIds.unshift(n));
    }
  }, {
    key: "handleDragEnter",
    value: function(a, n) {
      this.dragEnterTargetIds.unshift(n);
    }
  }, {
    key: "handleDragOver",
    value: function(a, n) {
      this.dragOverTargetIds === null && (this.dragOverTargetIds = []), this.dragOverTargetIds.unshift(n);
    }
  }, {
    key: "handleDrop",
    value: function(a, n) {
      this.dropTargetIds.unshift(n);
    }
  }]), e;
}(), xs = function(t, a, n) {
  return new Ps(t, a, n);
};
const Fn = v.createContext({}), pe = () => v.useContext(Fn), Ms = ({ children: e }) => {
  var i, s, l;
  const [t, a] = v.useState({}), n = (m, g = !1) => {
    let d = { object: m, show: !0, disableBgClose: g };
    a((S) => ({ ...S, overlay: { ...d } }));
  }, r = (m = !1) => {
    a((g) => ({
      ...g,
      overlay: {
        ...g.overlay,
        show: m
      }
    }));
  }, o = {
    overlay: {
      object: ((i = t.overlay) == null ? void 0 : i.object) || null,
      show: ((s = t.overlay) == null ? void 0 : s.show) || !1,
      disableBgClose: ((l = t.overlay) == null ? void 0 : l.disableBgClose) || !1,
      actions: {
        openOverlay: n,
        toggleOverlay: r
      }
    }
  };
  return /* @__PURE__ */ c.createElement(Fn.Provider, { value: o }, e);
}, $s = "Dashboard Description", Qe = {
  data: {},
  loading: !1,
  filteredData: {},
  preview: !1,
  tabSelected: $s
}, Bs = {
  outerContainerRef: () => {
  },
  setParentConfig: () => {
  },
  setAPIFilterDropdowns: () => {
  },
  setAPILoading: () => {
  },
  reloadURLData: () => {
  },
  loadAPIFilters: () => Promise.resolve([]),
  isDebug: !1,
  config: {},
  ...Qe
}, ee = v.createContext(Bs), ae = v.createContext(() => {
});
const Vs = ({ disableBgClose: e, children: t, override: a = null }) => {
  let { overlay: n } = pe();
  const [r, o] = v.useState(!1), [i, s] = v.useState(null), [l, m] = v.useState(!1), g = a ? a == null ? void 0 : a.show : n == null ? void 0 : n.show;
  return v.useEffect(() => {
    if (g === void 0 || g === !1)
      return;
    document.body.style.overflow = "hidden", o(!0), s("animate-in");
    const d = setTimeout(() => {
      s("show");
    }, 750);
    return () => clearTimeout(d);
  }, [g]), v.useEffect(() => {
    if (g === void 0 || g === !0)
      return;
    s("animate-out");
    const d = setTimeout(() => {
      s(null), o(!1), document.body.style.overflow = null;
    }, 400);
    return () => clearTimeout(d);
  }, [g]), v.useEffect(() => {
    if (l === !1)
      return;
    const d = setTimeout(() => {
      m(!1);
    }, 400);
    return () => clearTimeout(d);
  }, [l]), /* @__PURE__ */ c.createElement(c.Fragment, null, r && /* @__PURE__ */ c.createElement("div", { className: `cove-overlay${i ? " " + i : ""}${l ? " overlay-error" : ""}` }, /* @__PURE__ */ c.createElement("div", { className: "cove-overlay__bg", style: { cursor: e ? "default" : null }, onClick: (d) => e ? m(!0) : n ? n.actions.toggleOverlay(!1) : a ? a.actions.toggleOverlay(!1) : d.preventDefault(), role: "alert" }), /* @__PURE__ */ c.createElement("div", { className: "cove-overlay__wrapper" }, /* @__PURE__ */ c.createElement("div", { className: "cove-overlay__container" }, t))));
}, Us = () => {
  const { overlay: e } = pe();
  return /* @__PURE__ */ c.createElement(Vs, { disableBgClose: e.disableBgClose }, e.object);
}, An = v.createContext({}), Ve = {
  title: "Filtered Text",
  type: "filtered-text",
  theme: "theme-blue",
  fontSize: "small",
  shadow: !1,
  filters: [],
  visual: {
    hideBackgroundColor: !1,
    background: !1,
    roundedBorders: !1,
    accent: !1,
    border: !1,
    borderColorTheme: !1
  }
}, zs = [
  "theme-blue",
  "theme-purple",
  "theme-brown",
  "theme-teal",
  "theme-pink",
  "theme-orange",
  "theme-slate",
  "theme-indigo",
  "theme-cyan",
  "theme-green",
  "theme-amber"
], Hs = v.memo((e) => {
  const { config: t, updateConfig: a, loading: n, stateData: r, setParentConfig: o, isDashboard: i } = v.useContext(An), [s, l] = v.useState(!0), [m, g] = v.useState(!1), d = _t(t, a, !0), S = (D) => {
    let C = [...t.filters];
    C.splice(D, 1), a({ ...t, filters: C });
  }, y = (D, C, w) => {
    let R = [...t.filters];
    R[C][D] = w, a({ ...t, filters: R });
  }, T = () => {
    let D = t.filters ? [...t.filters] : [];
    D.push({ values: [] }), a({ ...t, filters: D });
  }, O = (D = !0) => {
    let C = {};
    return r.length && r.map((w) => Object.keys(w).forEach((R) => C[R] = !0)), Object.keys(C);
  }, p = (D) => {
    let C = [];
    const w = t.filters[D].columnName;
    return r && w && (r.forEach(function(R) {
      R[w] !== void 0 && C.indexOf(R[w]) === -1 && C.push(R[w]);
    }), C.sort()), C;
  };
  v.useEffect(() => {
    if (o) {
      const D = E();
      o(D);
    }
  }, [t]), v.useEffect(() => {
    if (!m) {
      let D = { ...t };
      delete D.newViz, a(D);
    }
  }, []);
  const u = () => {
    l(!s), a({
      ...t,
      showEditorPanel: !s
    });
  }, h = () => /* @__PURE__ */ c.createElement("section", { className: "waiting" }, /* @__PURE__ */ c.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ c.createElement("h3", null, "Error With Configuration"), /* @__PURE__ */ c.createElement("p", null, t.runtime.editorErrorMessage))), f = () => {
    const D = (C) => {
      C.preventDefault();
      let w = { ...t };
      delete w.newViz, a(w);
    };
    return /* @__PURE__ */ c.createElement("section", { className: "waiting" }, /* @__PURE__ */ c.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ c.createElement("h3", null, "Finish Configuring"), /* @__PURE__ */ c.createElement("p", null, "Set all required options to the left and confirm below to display a preview of the markup."), /* @__PURE__ */ c.createElement("button", { className: "btn btn-primary", style: { margin: "1em auto" }, onClick: D }, "I'm Done")));
  }, E = () => {
    let D = JSON.parse(JSON.stringify(t));
    return delete D.newViz, delete D.runtime, D;
  }, b = /* @__PURE__ */ c.createElement(Me, null, /* @__PURE__ */ c.createElement(Me.Section, { title: "General" }, /* @__PURE__ */ c.createElement(
    dr,
    {
      value: t.title,
      fieldName: "title",
      label: "Title",
      placeholder: "Filterable Text Title",
      updateField: d
    }
  )), /* @__PURE__ */ c.createElement(Me.Section, { title: "Data" }, /* @__PURE__ */ c.createElement("div", { className: "cove-accordion__panel-section" }, /* @__PURE__ */ c.createElement("div", { className: "cove-input-group" }, /* @__PURE__ */ c.createElement(
    ge,
    {
      value: t.textColumn || "",
      fieldName: "textColumn",
      label: "Text Column",
      updateField: d,
      initial: "Select",
      options: O()
    }
  ))), /* @__PURE__ */ c.createElement("hr", { className: "cove-accordion__divider" }), /* @__PURE__ */ c.createElement("label", { style: { marginBottom: "1rem" } }, /* @__PURE__ */ c.createElement("span", { className: "edit-label" }, "Data Point Filters"), /* @__PURE__ */ c.createElement(L, { style: { textTransform: "none" } }, /* @__PURE__ */ c.createElement(L.Target, null, /* @__PURE__ */ c.createElement(P, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ c.createElement(L.Content, null, /* @__PURE__ */ c.createElement("p", null, 'To refine the highlighted data point, specify one or more filters (e.g., "Male" and "Female" for a column called "Sex").')))), t.filters && /* @__PURE__ */ c.createElement("ul", { className: "filters-list", style: { paddingLeft: 0, marginBottom: "1rem" } }, t.filters.map((D, C) => /* @__PURE__ */ c.createElement("fieldset", { className: "edit-block", key: C }, /* @__PURE__ */ c.createElement(
    "button",
    {
      type: "button",
      className: "remove-column",
      onClick: () => {
        S(C);
      }
    },
    "Remove"
  ), /* @__PURE__ */ c.createElement("label", null, /* @__PURE__ */ c.createElement("span", { className: "edit-label column-heading" }, "Column"), /* @__PURE__ */ c.createElement(
    "select",
    {
      value: D.columnName,
      onChange: (w) => {
        y("columnName", C, w.target.value);
      }
    },
    /* @__PURE__ */ c.createElement("option", { value: "" }, "- Select Option -"),
    O().map((w, R) => /* @__PURE__ */ c.createElement("option", { value: w, key: R }, w))
  )), /* @__PURE__ */ c.createElement("label", null, /* @__PURE__ */ c.createElement("span", { className: "edit-label column-heading" }, "Column Value"), /* @__PURE__ */ c.createElement(
    "select",
    {
      value: D.columnValue,
      onChange: (w) => {
        y("columnValue", C, w.target.value);
      }
    },
    /* @__PURE__ */ c.createElement("option", { value: "" }, "- Select Option -"),
    p(C).map((w, R) => /* @__PURE__ */ c.createElement("option", { value: w, key: R }, w))
  ))))), /* @__PURE__ */ c.createElement(fr, { onClick: T, fluid: !0 }, "Add Filter")), /* @__PURE__ */ c.createElement(Me.Section, { title: "Visual" }, /* @__PURE__ */ c.createElement(
    ge,
    {
      value: t.fontSize,
      fieldName: "fontSize",
      label: "Font Size",
      updateField: d,
      options: ["small", "medium", "large"]
    }
  ), /* @__PURE__ */ c.createElement("br", null), /* @__PURE__ */ c.createElement("label", null, /* @__PURE__ */ c.createElement("span", { className: "edit-label" }, "Theme"), /* @__PURE__ */ c.createElement("ul", { className: "color-palette" }, zs.map((D) => /* @__PURE__ */ c.createElement(
    "li",
    {
      title: D,
      key: D,
      onClick: () => {
        a({ ...t, theme: D });
      },
      className: t.theme === D ? "selected " + D : D
    }
  )))), /* @__PURE__ */ c.createElement("div", { className: "cove-accordion__panel-section checkbox-group" }, /* @__PURE__ */ c.createElement(
    Ie,
    {
      inline: !0,
      size: "small",
      value: t.visual.border,
      section: "visual",
      fieldName: "border",
      label: "Display Border",
      updateField: d
    }
  ), /* @__PURE__ */ c.createElement(
    Ie,
    {
      inline: !0,
      size: "small",
      value: t.visual.borderColorTheme,
      section: "visual",
      fieldName: "borderColorTheme",
      label: "Use theme border color",
      updateField: d
    }
  ), /* @__PURE__ */ c.createElement(
    Ie,
    {
      size: "small",
      value: t.visual.accent,
      section: "visual",
      fieldName: "accent",
      label: "Use Accent Style",
      updateField: d
    }
  ), /* @__PURE__ */ c.createElement(
    Ie,
    {
      size: "small",
      value: t.visual.background,
      section: "visual",
      fieldName: "background",
      label: "Use Theme Background Color",
      updateField: d
    }
  ), /* @__PURE__ */ c.createElement(
    Ie,
    {
      size: "small",
      value: t.visual.hideBackgroundColor,
      section: "visual",
      fieldName: "hideBackgroundColor",
      label: "Hide Background Color",
      updateField: d
    }
  ))));
  return n ? null : /* @__PURE__ */ c.createElement(an, { component: "EditorPanel" }, /* @__PURE__ */ c.createElement(
    ye.Sidebar,
    {
      displayPanel: s,
      isDashboard: i,
      title: "Configure Filtered Text",
      onBackClick: u
    },
    !t.newViz && t.runtime && t.runtime.editorErrorMessage && /* @__PURE__ */ c.createElement(h, null),
    t.newViz && m && /* @__PURE__ */ c.createElement(f, null),
    b
  ));
});
const Ln = ({ config: e, configUrl: t, isDashboard: a = !1, isEditor: n = !1, setConfig: r }) => {
  const o = new Se(), [i, s] = v.useState(Ve), [l, m] = v.useState(!0), [g, d] = v.useState(i.data || []), [S, y] = v.useState();
  let { title: T, filters: O } = i;
  const p = i.fontSize === "small" ? "16px" : i.fontSize === "medium" ? "22px" : "27px", { contentClasses: u, innerContainerClasses: h } = mr(i), f = async () => {
    let w = e || await (await fetch(t)).json(), R = w.formattedData || w.data || {};
    w.dataUrl && (R = await (await fetch(w.dataUrl)).json(), w.dataDescription && (R = o.autoStandardize(R), R = o.developerStandardize(R, w.dataDescription))), R && (d(R), y(R));
    let F = { ...i, ...w };
    const z = { ...un(F) };
    E(z), m(!1);
  }, E = (w) => {
    Object.keys(Ve).forEach((R) => {
      w[R] && typeof w[R] == "object" && !Array.isArray(w[R]) && (w[R] = { ...Ve[R], ...w[R] });
    }), w.runtime = {}, w.runtime.uniqueId = Date.now(), w.runtime.editorErrorMessage = "", s(w);
  }, b = () => {
    let w = [];
    if (O.length)
      O.map((R) => R.columnName && R.columnValue ? w = g.filter(function(F) {
        return F[R.columnName] === R.columnValue;
      }) : null);
    else
      return w = g.filter((R, F) => R[i.textColumn] && F === 0);
    return w;
  };
  v.useEffect(() => {
    f().catch((w) => console.log(w));
  }, []), v.useEffect(() => {
    e && !e.dataUrl && (E({ ...Ve, ...e }), d(e.data), y(e.data));
  }, [e == null ? void 0 : e.data]);
  let D = /* @__PURE__ */ c.createElement(Ot, null);
  if (l === !1) {
    let w = /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement(ye.Responsive, { isEditor: n }, /* @__PURE__ */ c.createElement("div", { className: "cove-component__content no-borders" }, /* @__PURE__ */ c.createElement(en, { classes: [`${i.theme}`], title: T, style: { fontSize: p } }), /* @__PURE__ */ c.createElement("div", { className: `${u.join(" ")} body` }, b().slice(0, 1).map((R, F) => /* @__PURE__ */ c.createElement("p", { style: { fontSize: p }, key: F }, " ", tn(R[i.textColumn] || ""), " "))))));
    D = /* @__PURE__ */ c.createElement(c.Fragment, null, n && /* @__PURE__ */ c.createElement(Hs, null), w);
  }
  const C = {
    config: i,
    updateConfig: E,
    loading: l,
    setParentConfig: r,
    isDashboard: a,
    stateData: g,
    unfilteredData: g
  };
  return /* @__PURE__ */ c.createElement(an, { component: "CdcFilteredText" }, /* @__PURE__ */ c.createElement(An.Provider, { value: C }, /* @__PURE__ */ c.createElement(ye.VisualizationWrapper, { config: i, isEditor: n, showEditorPanel: i == null ? void 0 : i.showEditorPanel }, D)));
}, he = {
  "data-bite": /* @__PURE__ */ React.createElement(P, { display: "databite", base: !0 }),
  Bar: /* @__PURE__ */ React.createElement(P, { display: "chartBar", base: !0 }),
  "Spark Line": /* @__PURE__ */ React.createElement(P, { display: "chartLine" }),
  "Bump Chart": /* @__PURE__ */ React.createElement(P, { display: "chartLine" }),
  "waffle-chart": /* @__PURE__ */ React.createElement(P, { display: "grid", base: !0 }),
  "markup-include": /* @__PURE__ */ React.createElement(P, { display: "code", base: !0 }),
  Line: /* @__PURE__ */ React.createElement(P, { display: "chartLine", base: !0 }),
  Pie: /* @__PURE__ */ React.createElement(P, { display: "chartPie", base: !0 }),
  us: /* @__PURE__ */ React.createElement(P, { display: "mapUsa", base: !0 }),
  "us-county": /* @__PURE__ */ React.createElement(P, { display: "mapUsa", base: !0 }),
  world: /* @__PURE__ */ React.createElement(P, { display: "mapWorld", base: !0 }),
  "single-state": /* @__PURE__ */ React.createElement(P, { display: "mapAl", base: !0 }),
  gear: /* @__PURE__ */ React.createElement(P, { display: "gear", base: !0 }),
  gearMulti: /* @__PURE__ */ React.createElement(P, { display: "gearMulti", base: !0 }),
  tools: /* @__PURE__ */ React.createElement(P, { display: "tools", base: !0 }),
  "filtered-text": /* @__PURE__ */ React.createElement(P, { display: "filtered-text", base: !0 }),
  dashboardFilters: /* @__PURE__ */ React.createElement(P, { display: "dashboardFilters", base: !0 }),
  table: /* @__PURE__ */ React.createElement(P, { display: "table", base: !0 }),
  Sankey: /* @__PURE__ */ React.createElement(P, { display: "sankey", base: !0 })
}, js = (e) => {
  const { type: t, visualizationType: a, general: n } = e;
  return a ? he[a] : n != null && n.geoType ? n.geoType === "single-state" ? he.us : he[n.geoType] : he[t];
};
const Pn = () => null, xn = (e) => e, Mn = () => null, me = ({ fontTheme: e = "dark", headerBgColor: t = "#fff", showDividerTop: a = !0, showDividerBottom: n = !0, showClose: r = !0, children: o, override: i = null }) => {
  let { overlay: s } = pe();
  const l = v.Children.toArray(o), m = l.find((y) => (y == null ? void 0 : y.type) === Pn), g = l.find((y) => (y == null ? void 0 : y.type) === xn), d = l.find((y) => (y == null ? void 0 : y.type) === Mn), S = (y) => y ? null : "none";
  return /* @__PURE__ */ c.createElement("div", { className: `cove-modal cove-modal__theme--${e}` }, (r || m) && /* @__PURE__ */ c.createElement(
    "div",
    {
      className: "cove-modal__header",
      style: {
        backgroundColor: t,
        boxShadow: S(m && a),
        padding: m ? null : "0",
        minHeight: m ? null : "unset"
      }
    },
    m && m.props.children,
    r && /* @__PURE__ */ c.createElement(
      "button",
      {
        className: "cove-modal--close",
        onClick: (y) => {
          if (i)
            return i.actions.toggleOverlay(!1);
          if (s)
            return s == null ? void 0 : s.actions.toggleOverlay(!1);
          y.preventDefault();
        }
      },
      /* @__PURE__ */ c.createElement(P, { display: "close" })
    )
  ), /* @__PURE__ */ c.createElement("div", { className: "cove-modal__content" }, g && g.props.children), d && /* @__PURE__ */ c.createElement(
    "div",
    {
      className: "cove-modal__footer",
      style: {
        boxShadow: S(n),
        paddingTop: n ? "1rem" : null
      }
    },
    d.props.children
  ));
};
me.Header = Pn;
me.Content = xn;
me.Footer = Mn;
me.propTypes = {
  fontTheme: ke.oneOf(["dark", "light"]),
  headerBgColor: ke.string,
  showDividerTop: ke.bool,
  showDividerBottom: ke.bool,
  showClose: ke.bool
};
const $n = ({ vizKey: e, rowIndex: t }) => {
  var h;
  const { config: a } = v.useContext(ee), { overlay: n } = pe(), r = new Se(), o = v.useContext(ae), [i, s] = v.useState(!1), [l, m] = v.useState(!e), [g, d] = v.useState(!!a.rows[t].multiVizColumn), S = v.useMemo(() => e && !l ? a.visualizations[e] : a.rows[t], [a.visualizations, a.rows, e, t, l]), y = (f) => {
    o(e && !l ? { type: "UPDATE_VISUALIZATION", payload: { vizKey: e, configureData: f } } : { type: "UPDATE_ROW", payload: { rowIndex: t, rowData: f } });
  }, T = ({ target: { value: f } }) => {
    y({ dataDescription: {}, formattedData: void 0, dataKey: f });
  }, O = async (f, E) => {
    const b = S.dataKey, { data: D, dataUrl: C } = a.datasets[b];
    let w = D;
    !D && C && (w = await xe(C), w = r.autoStandardize(w));
    const R = { ...S.dataDescription, [f]: E }, F = { data: w, dataDescription: R, formattedData: r.developerStandardize(w, R) };
    y(F), s(!0);
  }, p = (f) => {
    f !== "" && (o({ type: "UPDATE_ROW", payload: { rowIndex: t, rowData: { multiVizColumn: f } } }), s(!0));
  }, u = (f) => {
    o({ type: "UPDATE_ROW", payload: { rowIndex: t, rowData: { expandCollapseAllButtons: f } } }), s(!0);
  };
  return /* @__PURE__ */ React.createElement(me, null, /* @__PURE__ */ React.createElement(me.Content, null, /* @__PURE__ */ React.createElement("div", { className: "dataset-selector-container" }, "Select a dataset: ", /* @__PURE__ */ React.createElement("select", { className: "dataset-selector", value: S.dataKey || "", onChange: T }, /* @__PURE__ */ React.createElement("option", { value: "" }, "Select a dataset"), a.datasets && Object.keys(a.datasets).map((f) => /* @__PURE__ */ React.createElement("option", { key: f }, f))), e && /* @__PURE__ */ React.createElement(
    Ue,
    {
      label: "Apply To Row",
      value: l,
      updateField: (f, E, b, D) => {
        m(D), T({ target: { value: "" } });
      }
    }
  )), S.dataKey && /* @__PURE__ */ React.createElement(
    pr,
    {
      configureData: S,
      visualizationKey: e,
      updateDescriptionProp: O
    }
  ), l && S.dataKey ? g ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(ge, { options: Object.keys(((h = a.datasets[S.dataKey]) == null ? void 0 : h.data[0]) || {}), value: a.rows[t].multiVizColumn, label: "Multi-Visualization Column", initial: "--Select--", updateField: (f, E, b, D) => p(D), required: !0 }), /* @__PURE__ */ React.createElement(Ue, { value: a.rows[t].expandCollapseAllButtons, label: " Add Expand/Collapse All buttons", fieldName: "", updateField: (f, E, b, D) => u(D) })) : /* @__PURE__ */ React.createElement(
    Ue,
    {
      label: "Configure Multiple Visualizations",
      value: g,
      tooltip: /* @__PURE__ */ React.createElement(L, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(L.Target, null, /* @__PURE__ */ React.createElement(P, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ React.createElement(L.Content, null, /* @__PURE__ */ React.createElement("p", null, "You can select a column where for each unique value in the column the configuration for the row will be repeated in to the data preview."))),
      updateField: (f, E, b, D) => {
        i && D === !0 && s(!1), d(D);
      }
    }
  ) : /* @__PURE__ */ React.createElement(React.Fragment, null), i && /* @__PURE__ */ React.createElement("button", { style: { margin: "1em", display: "block" }, className: "cove-button", onClick: () => n == null ? void 0 : n.actions.toggleOverlay() }, "Continue")));
}, qs = {
  "data-bite": "Data Bite",
  "waffle-chart": "Waffle Chart",
  "markup-include": "Markup Include",
  Bar: "Bar",
  Line: "Line",
  "Spark Line": "Spark Line",
  "Bump Chart": "Bump Chart",
  Pie: "Pie",
  us: "United States (State- or County-Level)",
  "us-county": "United States (State- or County-Level)",
  world: "World",
  "single-state": "U.S. State",
  "filtered-text": "Filtered Text",
  dashboardFilters: "Filter Dropdowns",
  Sankey: "Sankey Chart",
  table: "Table"
}, Y = ({ title: e, widgetConfig: t, addVisualization: a, type: n }) => {
  var E;
  const { overlay: r } = pe(), { config: o, data: i } = v.useContext(ee), s = v.useContext(ae), l = new Se(), m = (b, D) => {
    let C = D.getDropResult();
    if (!C)
      return null;
    const { rowIdx: w, colIdx: R } = C;
    if ((t == null ? void 0 : t.rowIdx) !== void 0)
      s({ type: "MOVE_VISUALIZATION", payload: { rowIdx: w, colIdx: R, widget: t } });
    else if (a) {
      const F = a();
      s({ type: "ADD_VISUALIZATION", payload: { newViz: F, rowIdx: w, colIdx: R } });
    }
  }, [{ isDragging: g, ...d }, S] = Yi(
    {
      type: "vis-widget",
      end: m,
      collect: (b) => ({
        isDragging: b.isDragging()
      })
    },
    [o.activeDashboard, o.rows, o.dashboard.sharedFilters]
  ), y = () => {
    t && s({
      type: "DELETE_WIDGET",
      payload: { uid: t.uid }
    });
  }, T = (b, D) => {
    const C = new URL(b);
    return C.searchParams.set("$limit", D), C.href.replace(/%24/g, "$");
  }, O = () => {
    var w;
    const b = ((w = o.rows[t.rowIdx]) == null ? void 0 : w.dataKey) || (t == null ? void 0 : t.dataKey), D = o.datasets[b], C = i[D == null ? void 0 : D.dataUrl];
    if (C && !C.length) {
      const R = T(D.dataUrl, 100);
      xe(R).then((F) => {
        F.sample = !0, s({ type: "SET_DATA", payload: { ...i, [b]: F } });
      });
    }
  }, p = () => {
    t && (s({
      type: "UPDATE_VISUALIZATION",
      payload: { vizKey: t.uid, configureData: { editing: !0 } }
    }), O());
  };
  let u = !1;
  const h = !!((E = o.rows[t == null ? void 0 : t.rowIdx]) != null && E.dataKey);
  if (h || ["dashboardFilters", "markup-include"].includes(n))
    u = !0;
  else if (t != null && t.formattedData)
    u = !0;
  else if (t != null && t.dataKey && (t != null && t.dataDescription) && o.datasets[t.dataKey]) {
    const b = l.autoStandardize(o.datasets[t.dataKey].data);
    !!l.developerStandardize(b, t.dataDescription) && (u = !0);
  }
  const f = !h && (t == null ? void 0 : t.type) !== "dashboardFilters";
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "widget", ref: S, style: { opacity: g ? 0.5 : 1 }, ...d }, /* @__PURE__ */ React.createElement(P, { display: "move", className: "drag-icon" }), /* @__PURE__ */ React.createElement("div", { className: "widget__content" }, (t == null ? void 0 : t.rowIdx) !== void 0 && /* @__PURE__ */ React.createElement("div", { className: "widget-menu" }, u && /* @__PURE__ */ React.createElement("button", { title: "Configure Visualization", className: "btn btn-configure", onClick: p }, he.tools), f && /* @__PURE__ */ React.createElement(
    "button",
    {
      title: "Configure Data",
      className: "btn btn-configure",
      onClick: () => {
        r == null || r.actions.openOverlay(
          /* @__PURE__ */ React.createElement($n, { rowIndex: t.rowIdx, vizKey: t.uid })
        );
      }
    },
    he.gear
  ), /* @__PURE__ */ React.createElement("div", { className: "widget-menu-item", onClick: y }, /* @__PURE__ */ React.createElement(P, { display: "close", base: !0 }))), he[n], /* @__PURE__ */ React.createElement("span", null, qs[n]), /* @__PURE__ */ React.createElement("span", null, e), (t == null ? void 0 : t.newViz) && n !== "dashboardFilters" && /* @__PURE__ */ React.createElement("span", { onClick: p, className: "config-needed" }, "Configuration needed"))));
}, Gs = ({ data: e, rowIdx: t, colIdx: a }) => {
  var g;
  const { config: n } = v.useContext(ee), [{ isOver: r, canDrop: o }, i] = ms(
    () => ({
      accept: "vis-widget",
      drop: () => ({
        rowIdx: t,
        colIdx: a,
        canDrop: o
      }),
      canDrop: () => !e.widget,
      collect: (d) => ({
        isOver: d.isOver(),
        canDrop: !!d.canDrop()
      })
    }),
    [n.activeDashboard]
  ), s = e.widget ? n == null ? void 0 : n.visualizations[e.widget] : null;
  s && !s.uid && (s.uid = e.widget);
  let l = ["builder-column", "column-size--" + e.width];
  r && o && l.push("column--drop"), s && l.push("column--populated");
  const m = (d) => {
    var S;
    if (d)
      return d.type === "map" ? d.general.title : d.type === "markup-include" ? (S = d.contentEditor) == null ? void 0 : S.title : d.title;
  };
  return /* @__PURE__ */ c.createElement("div", { className: l.join(" "), ref: i }, s ? /* @__PURE__ */ c.createElement(
    Y,
    {
      title: m(s),
      widgetConfig: { rowIdx: t, colIdx: a, ...s },
      type: s.visualizationType ?? ((g = s.general) == null ? void 0 : g.geoType)
    }
  ) : /* @__PURE__ */ c.createElement("p", { className: "builder-column__text" }, "Drag and drop ", /* @__PURE__ */ c.createElement("br", null), " visualization"));
}, Ws = (e) => /* @__PURE__ */ v.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ v.createElement("path", { d: "M2,16 L22,16 L22,14 L2,14 L2,16 Z M2,11 L22,11 L22,9 L2,9 L2,11 Z M2,4 L2,6 L22,6 L22,4 L2,4 Z" })), Qs = (e) => /* @__PURE__ */ v.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ v.createElement("path", { d: "M22 14L22 16 13 16 13 14 22 14zM11 16L2 16 2 14 11 14 11 16zM22 4L22 6 13 6 13 4 22 4zM11 6L2 6 2 4 11 4 11 6zM22 9L22 11 13 11 13 9 22 9zM11 11L2 11 2 9 11 9 11 11z" })), Zs = (e) => /* @__PURE__ */ v.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ v.createElement("path", { d: "M22,14 L22,16 L17,16 L17,14 L22,14 Z M7,14 L7,16 L2,16 L2,14 L7,14 Z M15,14 L15,16 L9,16 L9,14 L15,14 Z M22,9 L22,11 L17,11 L17,9 L22,9 Z M7,9 L7,11 L2,11 L2,9 L7,9 Z M15,9 L15,11 L9,11 L9,9 L15,9 Z M22,4 L22,6 L17,6 L17,4 L22,4 Z M7,4 L7,6 L2,6 L2,4 L7,4 Z M15,4 L15,6 L9,6 L9,4 L15,4 Z" })), Ks = (e) => /* @__PURE__ */ v.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ v.createElement("path", { d: "M22,14 L22,16 L10,16 L10,14 L22,14 Z M8,14 L8,16 L2,16 L2,14 L8,14 Z M22,9 L22,11 L10,11 L10,9 L22,9 Z M8,9 L8,11 L2,11 L2,9 L8,9 Z M22,4 L22,6 L10,6 L10,4 L22,4 Z M8,4 L8,6 L2,6 L2,4 L8,4 Z" })), Xs = (e) => /* @__PURE__ */ v.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ v.createElement("path", { d: "M22,14 L22,16 L16,16 L16,14 L22,14 Z M14,14 L14,16 L2,16 L2,14 L14,14 Z M22,9 L22,11 L16,11 L16,9 L22,9 Z M14,9 L14,11 L2,11 L2,9 L14,9 Z M22,4 L22,6 L16,6 L16,4 L22,4 Z M14,4 L14,6 L2,6 L2,4 L14,4 Z" })), Ys = (e) => /* @__PURE__ */ v.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", height: 24, width: 24, viewBox: "0 0 576 512", ...e }, /* @__PURE__ */ v.createElement("path", { d: "M192 64C86 64 0 150 0 256S86 448 192 448H384c106 0 192-86 192-192s-86-192-192-192H192zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" })), Js = ({ rowIdx: e }) => {
  const { config: t } = v.useContext(ee), a = v.useContext(ae), n = I.cloneDeep(t.rows), r = t.rows[e], o = (d) => a({ type: "UPDATE_CONFIG", payload: [d] }), i = v.useMemo(() => r.toggle ? "toggle" : r.columns.reduce((d, S) => (S.width && (d += S.width), d), ""), [r]), s = (d, S = void 0) => {
    const y = I.cloneDeep(n);
    y[e].toggle = S;
    const T = y[e].columns, O = T.filter((u) => u.widget);
    if (!(O.length > d.length)) {
      {
        const u = T.length > d.length ? O : T;
        y[e].columns = d.map((h, f) => {
          const E = u[f];
          return E ? { ...E, width: h } : { width: h };
        });
      }
      o({ ...t, rows: y });
    }
  }, l = (d = "down") => {
    if (e === n.length - 1 && d === "down")
      return;
    let S = d === "down" ? e + 1 : e - 1;
    const y = n[S];
    n[S] = r, n[e] = y, n[S].uuid = Date.now(), n[e].uuid = Date.now(), o({ ...t, rows: n });
    let T = d === "down" ? 202 : -202, O = d === "down" ? -202 : 202, p = document.querySelector("[data-row-id='" + e + "']"), u = document.querySelector("[data-row-id='" + S + "']");
    p.style.pointerEvents = "none", u.style.pointerEvents = "none", p.style.top = T + "px", u.style.top = O + "px", setTimeout(() => {
      p.style.transition = "top 500ms cubic-bezier(0.16, 1, 0.3, 1)", u.style.transition = "top 500ms cubic-bezier(0.16, 1, 0.3, 1)", p.style.top = "0", u.style.top = "0";
    }, 0), setTimeout(() => {
      p.setAttribute("style", ""), u.setAttribute("style", "");
    }, 500);
  }, m = () => {
    let d = { ...t.visualizations };
    n[e] && n[e].columns && n[e].columns.length && t.visualizations && n[e].columns.forEach((S) => {
      S.widget && delete d[S.widget];
    }), n.splice(e, 1), o({ ...t, rows: n, visualizations: d });
  }, g = [
    /* @__PURE__ */ c.createElement(
      "li",
      {
        className: i === "12" ? "current row-menu__list--item" : "row-menu__list--item",
        onClick: () => s([12]),
        key: "12",
        title: "1 Column"
      },
      /* @__PURE__ */ c.createElement(Ws, null)
    ),
    /* @__PURE__ */ c.createElement(
      "li",
      {
        className: i === "66" ? "current row-menu__list--item" : "row-menu__list--item",
        onClick: () => s([6, 6]),
        key: "66",
        title: "2 Columns"
      },
      /* @__PURE__ */ c.createElement(Qs, null)
    ),
    /* @__PURE__ */ c.createElement(
      "li",
      {
        className: i === "444" ? "current row-menu__list--item" : "row-menu__list--item",
        onClick: () => s([4, 4, 4]),
        key: "444",
        title: "3 Columns"
      },
      /* @__PURE__ */ c.createElement(Zs, null)
    ),
    /* @__PURE__ */ c.createElement(
      "li",
      {
        className: i === "48" ? "current row-menu__list--item" : "row-menu__list--item",
        onClick: () => s([4, 8]),
        key: "48",
        title: "2 Columns"
      },
      /* @__PURE__ */ c.createElement(Ks, null)
    ),
    /* @__PURE__ */ c.createElement(
      "li",
      {
        className: i === "84" ? "current row-menu__list--item" : "row-menu__list--item",
        onClick: () => s([8, 4]),
        key: "84",
        title: "2 Columns"
      },
      /* @__PURE__ */ c.createElement(Xs, null)
    ),
    /* @__PURE__ */ c.createElement(
      "li",
      {
        className: i === "toggle" ? "current row-menu__list--item" : "row-menu__list--item",
        onClick: () => s([12, 12, 12], !0),
        key: "toggle",
        title: "Toggle between up to three visualizations"
      },
      /* @__PURE__ */ c.createElement(Ys, null)
    )
  ];
  return /* @__PURE__ */ c.createElement("nav", { className: "row-menu" }, /* @__PURE__ */ c.createElement("ul", { className: "row-menu__flyout" }, g), /* @__PURE__ */ c.createElement("div", { className: "spacer" }), /* @__PURE__ */ c.createElement(
    "button",
    {
      className: "btn btn-primary row-menu__btn border-0",
      title: "Move Row Up",
      onClick: () => l("up"),
      disabled: e === 0
    },
    /* @__PURE__ */ c.createElement(P, { display: "caretUp", color: "#fff", size: 25 })
  ), /* @__PURE__ */ c.createElement(
    "button",
    {
      className: "btn btn-primary row-menu__btn border-0",
      title: "Move Row Down",
      onClick: () => l("down"),
      disabled: e + 1 === n.length
    },
    /* @__PURE__ */ c.createElement(P, { display: "caretDown", color: "#fff", size: 25 })
  ), /* @__PURE__ */ c.createElement(
    "button",
    {
      className: "btn btn-danger row-menu__btn row-menu__btn--remove border-0",
      title: "Delete Row",
      onClick: m,
      disabled: e === 0 && n.length === 1
    },
    /* @__PURE__ */ c.createElement(P, { display: "close", color: "#fff", size: 25 })
  ));
}, el = ({ row: e, idx: t, uuid: a }) => {
  const { overlay: n } = pe(), r = v.useContext(ae), o = () => {
    if (e.footnotesId)
      r({ type: "UPDATE_VISUALIZATION", payload: { vizKey: e.footnotesId, configureData: { editing: !0 } } });
    else {
      const i = "footnotes", s = i + Date.now();
      r({
        type: "ADD_FOOTNOTE",
        payload: { id: s, rowIndex: t, config: {
          uid: s,
          type: i,
          visualizationType: i,
          editing: !0
        } }
      });
    }
  };
  return /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement("div", { className: "builder-row", "data-row-id": t }, /* @__PURE__ */ c.createElement(Js, { rowIdx: t }), /* @__PURE__ */ c.createElement(
    "button",
    {
      title: "Configure Data",
      className: "btn btn-configure-row",
      onClick: () => {
        n == null || n.actions.openOverlay(/* @__PURE__ */ c.createElement($n, { rowIndex: t }));
      }
    },
    he.gearMulti
  ), /* @__PURE__ */ c.createElement("div", { className: "column-container" }, e.columns.filter((i) => i.width).map((i, s) => /* @__PURE__ */ c.createElement(Gs, { data: i, key: `row-${a}-col-${s}`, rowIdx: t, colIdx: s }))), /* @__PURE__ */ c.createElement("button", { className: "btn btn-primary footnotes", onClick: o }, e.footnotesId ? "Edit" : "Add", " Footnotes")));
}, tl = () => {
  const { config: e } = v.useContext(ee);
  if (!e)
    return null;
  const t = e.rows, a = v.useContext(ae), n = (o) => a({ type: "UPDATE_CONFIG", payload: [o] }), r = () => {
    const o = { columns: [{ width: 12 }] };
    n({
      ...e,
      rows: [...t, o],
      uuid: Date.now()
    });
  };
  return /* @__PURE__ */ c.createElement("div", { className: "builder-grid" }, (t || []).map((o, i) => /* @__PURE__ */ c.createElement(el, { row: o, idx: i, uuid: o.uuid, key: i })), /* @__PURE__ */ c.createElement("button", { className: "btn btn-primary col", onClick: r }, "Add Row"));
};
const al = (e) => /* @__PURE__ */ React.createElement(me, null, /* @__PURE__ */ React.createElement(me.Content, null, /* @__PURE__ */ React.createElement("p", null, "Are you sure you want to delete this dashboard? "), /* @__PURE__ */ React.createElement("button", { className: "btn btn-danger", onClick: e }, "DELETE"))), nl = ({ name: e, handleClick: t, tabs: a, index: n, active: r }) => {
  const [o, i] = v.useState(!1), s = v.useContext(ae), { overlay: l } = pe(), m = v.createRef(), g = (p) => {
    p.stopPropagation();
    const u = m.current.value, h = u === e, f = !u, E = a.includes(u);
    !h && !f && !E && s({ type: "RENAME_DASHBOARD_TAB", payload: { current: e, new: u } }), i(!1);
  }, d = (p) => {
    p.target.className !== "remove" && (r ? i(!0) : t());
  }, S = () => {
    const p = () => {
      s({ type: "REMOVE_MULTIDASHBOARD_AT_INDEX", payload: n }), l == null || l.actions.toggleOverlay(!1);
    };
    l == null || l.actions.openOverlay(al(p));
  }, y = (p, u) => {
    const h = p + u;
    h > -1 && h <= a.length - 1 && s({ type: "REORDER_MULTIDASHBOARDS", payload: { currentIndex: p, newIndex: p + u } });
  }, T = n !== 0, O = n <= a.length - 2;
  return /* @__PURE__ */ React.createElement("li", { className: "nav-item d-flex mt-0" }, T && o && /* @__PURE__ */ React.createElement("button", { className: "border-0", onClick: () => y(n, -1) }, "<"), /* @__PURE__ */ React.createElement(
    "div",
    {
      className: `edit nav-link${r ? " active" : ""}`,
      "aria-current": r ? "page" : null,
      onClick: d
    },
    o ? /* @__PURE__ */ React.createElement("div", { className: "d-flex" }, /* @__PURE__ */ React.createElement("input", { type: "text", defaultValue: e, onBlur: g, ref: m }), /* @__PURE__ */ React.createElement("button", { className: "btn btn-link save", onClick: g }, "save")) : /* @__PURE__ */ React.createElement(React.Fragment, null, e, /* @__PURE__ */ React.createElement("button", { className: "btn btn-danger border-0 ms-1", onClick: S }, "X"))
  ), O && o && /* @__PURE__ */ React.createElement("button", { className: "border-0", onClick: () => y(n, 1) }, ">"));
}, rl = () => {
  const { config: e } = v.useContext(ee), t = v.useContext(ae), a = v.useMemo(
    () => (e.multiDashboards || []).map(({ label: o }) => o),
    [e.multiDashboards]
  ), n = v.useMemo(() => e.activeDashboard, [e.activeDashboard]), r = (o) => {
    t({ type: "SAVE_CURRENT_CHANGES" }), t({ type: "SWITCH_CONFIG", payload: o });
  };
  return e.multiDashboards ? /* @__PURE__ */ React.createElement("ul", { className: "nav nav-tabs multi-config-tabs mb-4" }, a.map((o, i) => /* @__PURE__ */ React.createElement(
    nl,
    {
      key: o + i,
      name: o,
      tabs: a,
      index: i,
      handleClick: () => r(i),
      active: i === n
    }
  )), /* @__PURE__ */ React.createElement("li", { className: "nav-item" }, /* @__PURE__ */ React.createElement("button", { className: "nav-link add", onClick: () => t({ type: "ADD_NEW_DASHBOARD" }) }, "+"))) : null;
}, ol = () => {
  const { config: e } = v.useContext(ee), t = v.useContext(ae), a = v.useMemo(
    () => (e.multiDashboards || []).map(({ label: o }) => o),
    [e.multiDashboards]
  ), n = v.useMemo(() => e.activeDashboard, [e.activeDashboard]), r = (o, i) => {
    i.preventDefault(), t({ type: "SWITCH_CONFIG", payload: o }), dn("cove-tab", o);
  };
  return e.multiDashboards ? /* @__PURE__ */ React.createElement("ul", { className: "nav nav-tabs multi-config-tabs mb-4" }, a.map((o, i) => /* @__PURE__ */ React.createElement("li", { key: o + i, className: "nav-item" }, /* @__PURE__ */ React.createElement(
    "a",
    {
      className: `nav-link${n === i ? " active" : ""}`,
      "aria-current": n === i ? "page" : null,
      href: "#",
      onClick: (s) => r(i, s)
    },
    o
  )))) : null;
}, Bn = ({ isEditor: e = !1 }) => e ? /* @__PURE__ */ React.createElement(rl, null) : /* @__PURE__ */ React.createElement(ol, null), se = (e) => {
  var T, O;
  const t = ["Dashboard Description", "Data Table Settings", "Dashboard Preview"], { visualizationKey: a, subEditor: n } = e, { config: r, setParentConfig: o, tabSelected: i, data: s } = v.useContext(ee);
  if (!r)
    return null;
  const l = v.useContext(ae), m = () => {
    if (!a)
      return;
    const p = I.cloneDeep(r);
    if (p.visualizations[a].editing = !1, l({ type: "SET_CONFIG", payload: p }), Object.values(s).some((u) => u == null ? void 0 : u.sample)) {
      const u = Object.keys(s).reduce((h, f) => (s[f].sample ? h[f] = [] : h[f] = s[f], h), {});
      l({ type: "SET_DATA", payload: u });
    }
  }, g = (p, u, h) => {
    let f = { ...r };
    f[p] || (f[p] = {}), f[p][u] = h, l({ type: "UPDATE_CONFIG", payload: [f] });
  }, d = (p = "JSON") => {
    let u = JSON.parse(JSON.stringify(r));
    return delete u.newViz, delete u.runtime, p === "JSON" ? JSON.stringify(u) : u;
  };
  v.useEffect(() => {
    const p = d(), u = new CustomEvent("updateVizConfig", { detail: p });
    if (window.dispatchEvent(u), o) {
      const h = d("object");
      o(h);
    }
  }, [r]);
  const S = (p) => {
    const { checked: u } = p.currentTarget;
    u && l({ type: "INITIALIZE_MULTIDASHBOARDS" });
  }, y = !!r.multiDashboards;
  return /* @__PURE__ */ React.createElement("div", { "aria-level": 2, role: "heading", className: `editor-heading${n ? " sub-dashboard-viz" : ""}` }, n ? /* @__PURE__ */ React.createElement("div", { className: "heading-1 back-to", onClick: m, style: { cursor: "pointer" } }, /* @__PURE__ */ React.createElement("span", null, "←"), " Back to Dashboard") : /* @__PURE__ */ React.createElement("div", { className: "heading-1" }, "Dashboard Editor", " ", /* @__PURE__ */ React.createElement("span", { className: "small" }, /* @__PURE__ */ React.createElement("input", { type: "checkbox", onChange: S, checked: y, disabled: y }), " make multidashboard"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      placeholder: "Enter Dashboard Name Here",
      defaultValue: (T = r.dashboard) == null ? void 0 : T.title,
      onChange: (p) => g("dashboard", "title", p.target.value)
    }
  )), !n && /* @__PURE__ */ React.createElement("div", { className: "toggle-bar__wrapper" }, /* @__PURE__ */ React.createElement(Bn, { isEditor: !0 }), /* @__PURE__ */ React.createElement("ul", { className: "toggle-bar" }, t.map((p) => /* @__PURE__ */ React.createElement(
    "li",
    {
      key: p,
      className: i === p ? "active" : "inactive",
      onClick: () => {
        l({ type: "SET_TAB_SELECTED", payload: p });
      }
    },
    p
  ))), /* @__PURE__ */ React.createElement("div", { className: "heading-body" }, i === "Dashboard Description" && /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      className: "description-input",
      placeholder: "Type a dashboard description here.",
      defaultValue: (O = r.dashboard) == null ? void 0 : O.description,
      onChange: (p) => g("dashboard", "description", p.target.value)
    }
  ), i === "Data Table Settings" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "wrap" }, /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "checkbox",
      defaultChecked: r.table.show,
      onChange: (p) => g("table", "show", p.target.checked)
    }
  ), "Show Data Table(s)"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "checkbox",
      defaultChecked: r.table.expanded,
      onChange: (p) => g("table", "expanded", p.target.checked)
    }
  ), "Expanded by Default"), /* @__PURE__ */ React.createElement("br", null)), /* @__PURE__ */ React.createElement("div", { className: "wrap" }, /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "checkbox",
      defaultChecked: r.table.limitHeight,
      onChange: (p) => g("table", "limitHeight", p.target.checked)
    }
  ), "Limit Table Height"), r.table.limitHeight && /* @__PURE__ */ React.createElement(
    "input",
    {
      className: "table-height-input",
      type: "text",
      placeholder: "Height (px)",
      defaultValue: r.table.height,
      onChange: (p) => g("table", "height", p.target.value)
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "wrap" }, /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "checkbox",
      defaultChecked: r.table.download,
      onChange: (p) => g("table", "download", p.target.checked)
    }
  ), "Show Download CSV Link"), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "checkbox",
      defaultChecked: r.table.showDownloadUrl,
      onChange: (p) => g("table", "showDownloadUrl", p.target.checked)
    }
  ), "Show URL to Automatically Updated Data"))))));
};
const Ga = new Se(), De = (e, t) => {
  if (e && t)
    try {
      let a = Ga.autoStandardize(e);
      return a = Ga.developerStandardize(e, t), a;
    } catch {
      return e;
    }
  return e;
}, il = (e) => {
  Object.keys(e.visualizations).forEach((t, a) => {
    const n = e.visualizations[t];
    if (n.dataKey && !n.data) {
      const r = e.datasets[n.dataKey].data;
      e.visualizations[t].data = r, e.visualizations[t].formattedData = De(r, n.dataDescription);
    }
  });
}, sl = (e) => {
  e.rows.forEach((t, a) => {
    if (t.dataKey && !t.data) {
      const n = e.datasets[t.dataKey].data;
      e.rows[a].data = n, e.rows[a].formattedData = De(n, t.dataDescription);
    }
  });
}, ll = (e) => (il(e), sl(e), e);
const te = (e, t) => {
  const n = {
    filters: [],
    filterBehavior: "Filter Change",
    newViz: e !== "table",
    openModal: e !== "markup-include",
    uid: e + Date.now(),
    type: e
  };
  switch (e) {
    case "chart":
      n.visualizationType = t;
      break;
    case "map":
      n.general = {}, n.general.geoType = t;
      break;
    case "data-bite":
      n.visualizationType = e;
      break;
    case "table":
      const r = {
        label: "Data Table",
        show: !0,
        showDownloadUrl: !1,
        showVertical: !0,
        expanded: !0,
        collapsible: !0
      };
      n.table = r, n.columns = {}, n.dataFormat = {}, n.visualizationType = e;
      break;
    case "markup-include":
      n.contentEditor = {
        inlineHTML: "<h2>Inline HTML</h2>",
        markupVariables: [],
        showHeader: !0,
        srcUrl: "#example",
        title: "Markup Include",
        useInlineHTML: !0
      }, n.theme = "theme-blue", n.visual = {
        border: !1,
        accent: !1,
        background: !1,
        hideBackgroundColor: !1,
        borderColorTheme: !1
      }, n.showEditorPanel = !0, n.visualizationType = e;
      break;
    case "dashboardFilters": {
      n.sharedFilterIndexes = [], n.visualizationType = e;
      break;
    }
    default:
      n.visualizationType = e;
      break;
  }
  return n;
}, cl = () => {
  const [e, t] = v.useState(!1), { config: a } = v.useContext(ee), n = v.useContext(ae), r = (o) => {
    const i = o.multiDashboards ? {
      ...a,
      ...o,
      ...o.multiDashboards[a.activeDashboard],
      activeDashboard: a.activeDashboard
    } : o;
    n({ type: "APPLY_CONFIG", payload: [ll(i)] });
  };
  return /* @__PURE__ */ React.createElement("div", { className: `visualizations-panel${e ? " advanced-editor" : ""}` }, /* @__PURE__ */ React.createElement("p", { style: { fontSize: "14px" } }, "Click and drag an item onto the grid to add it to your dashboard."), /* @__PURE__ */ React.createElement("span", { className: "subheading-3" }, "Chart"), /* @__PURE__ */ React.createElement("div", { className: "drag-grid" }, /* @__PURE__ */ React.createElement(Y, { addVisualization: () => te("chart", "Bar"), type: "Bar" }), /* @__PURE__ */ React.createElement(Y, { addVisualization: () => te("chart", "Line"), type: "Line" }), /* @__PURE__ */ React.createElement(Y, { addVisualization: () => te("chart", "Pie"), type: "Pie" }), /* @__PURE__ */ React.createElement(Y, { addVisualization: () => te("chart", "Sankey"), type: "Sankey" })), /* @__PURE__ */ React.createElement("span", { className: "subheading-3" }, "Map"), /* @__PURE__ */ React.createElement("div", { className: "drag-grid" }, /* @__PURE__ */ React.createElement(Y, { addVisualization: () => te("map", "us"), type: "us" }), /* @__PURE__ */ React.createElement(Y, { addVisualization: () => te("map", "world"), type: "world" }), /* @__PURE__ */ React.createElement(Y, { addVisualization: () => te("map", "single-state"), type: "single-state" })), /* @__PURE__ */ React.createElement("span", { className: "subheading-3" }, "Misc."), /* @__PURE__ */ React.createElement("div", { className: "drag-grid" }, /* @__PURE__ */ React.createElement(Y, { addVisualization: () => te("data-bite", ""), type: "data-bite" }), /* @__PURE__ */ React.createElement(Y, { addVisualization: () => te("waffle-chart", ""), type: "waffle-chart" }), /* @__PURE__ */ React.createElement(Y, { addVisualization: () => te("markup-include", ""), type: "markup-include" }), /* @__PURE__ */ React.createElement(Y, { addVisualization: () => te("filtered-text", ""), type: "filtered-text" }), /* @__PURE__ */ React.createElement(Y, { addVisualization: () => te("dashboardFilters", ""), type: "dashboardFilters" }), /* @__PURE__ */ React.createElement(Y, { addVisualization: () => te("table", ""), type: "table" })), /* @__PURE__ */ React.createElement(
    Yn,
    {
      loadConfig: r,
      config: a,
      convertStateToConfig: () => {
      },
      onExpandCollapse: () => {
        t(!e);
      }
    }
  ));
}, Vn = (e, t) => {
  var a;
  if ((a = t.parents) != null && a.length) {
    const n = e.find((r) => t.parents.includes(r.key));
    return n ? 1 + Vn(e, n) : 1;
  } else
    return 1;
};
function ul(e) {
  let t = 1;
  return e.forEach((a) => {
    a.tier = Vn(e, a), a.tier > t && (t = a.tier);
  }), t;
}
function Wa(e = [], t, a) {
  const n = I.filter(t, (r) => {
    var o;
    return r.resetLabel === r.active ? (o = r.values) == null ? void 0 : o.includes(r.resetLabel) : !0;
  });
  return e.filter((r) => !n.find((i) => {
    var d;
    const s = r[i.columnName], l = i.queuedActive || i.filterStyle === oe.nestedDropdown ? [i.active, (d = i.subGrouping) == null ? void 0 : d.active] : i.active;
    let m = !0;
    if (Array.isArray(l) ? m = !l.includes(s) : m = l && s != l, i.filterStyle === "nested-dropdown" && i.subGrouping && i.active === s && m === !1) {
      const S = i.subGrouping.active, y = r[i.subGrouping.columnName];
      m = S && y !== S;
    }
    const g = i.tier === a;
    if (i.type !== "urlfilter" && g && m)
      return !0;
  }));
}
const Ce = (e, t) => {
  const a = ul(e);
  for (let n = 0; n < a; n++) {
    const r = n === a - 1, o = Wa(t, e, n + 1);
    if (r)
      return Wa(o, e, a - 1);
  }
}, dl = (e, t) => {
  const a = [];
  return Object.keys(t).forEach((n) => {
    var r;
    (r = t[n]) == null || r.forEach((o) => {
      const i = o[e];
      i && !a.includes(i) && a.push(i);
    });
  }), a;
}, be = (e) => Object.keys((e == null ? void 0 : e.visualizations) || {}), xt = (e) => e.reduce((t, a, n) => {
  var r;
  return (r = a.columns) == null || r.forEach((o, i) => {
    o.widget !== void 0 && (t[o.widget] = { row: n, column: i });
  }), a.footnotesId && (t[a.footnotesId] = { row: n, column: 0 }), t;
}, {}), wt = (e) => (t, a) => {
  let n = {}, r = be(t);
  const o = xt(t.rows);
  return t.dashboard.sharedFilters && (t.dashboard.sharedFilters.forEach((i, s) => {
    const l = !!r.find((S) => S === i.setBy), m = t.dashboard.sharedFilters[s], g = (S) => {
      if (m.values = S, S.length > 0) {
        const y = m.pivot ? m.values : m.values[0], T = fn(m);
        T ? m.active = T : m.active = m.active || y;
      }
    }, d = dl(i.columnName, a || e.data);
    l ? (m.order === "asc" && d.sort(), m.order === "desc" && d.sort().reverse(), g(d)) : (!i.values || i.values.length === 0) && i.showDropdown && g(d);
  }), r.forEach((i) => {
    var m;
    const s = o[i];
    if ((m = t.rows[s]) != null && m.datakey)
      return;
    const l = t.dashboard.sharedFilters.filter(
      (g) => g.usedBy && g.usedBy.indexOf(i) !== -1
    );
    if (l.length > 0) {
      const g = t.visualizations[i], d = t.datasets[g.dataKey], y = De(
        (d == null ? void 0 : d.data) || g.data,
        g.dataDescription
      ) || (a || e.data)[g.dataKey];
      n[i] = Ce(l, y);
    }
  }), t.rows.forEach((i, s) => {
    const l = t.dashboard.sharedFilters.filter(
      (m) => m.usedBy && m.usedBy.indexOf(s) !== -1
    );
    if (l.length > 0) {
      const g = De(i.data, i.dataDescription) || (a || e.data)[s];
      n[s] = Ce(l, g);
    }
  })), t.runtime = {}, [t, n];
}, Un = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION__, fl = Un ? window.__REDUX_DEVTOOLS_EXTENSION__.connect() : null, pt = Un ? fl : null, zn = (e) => (t, a) => {
  const n = e(t, a);
  return pt == null || pt.send(a, n), n;
}, ml = () => ({
  dashboard: { sharedFilters: [] },
  rows: [{ columns: [{ width: 12 }] }],
  visualizations: {},
  table: {
    label: "Data Table",
    show: !1,
    showDownloadUrl: !1,
    showVertical: !0
  }
}), pl = (e, t) => {
  switch (t.type) {
    case "ADD_FOOTNOTE": {
      const { id: a, rowIndex: n, config: r } = t.payload, o = e.config.rows.map((i, s) => s === n ? { ...i, footnotesId: a } : i);
      return {
        ...e,
        config: le(
          { ...e.config, rows: o, visualizations: { ...e.config.visualizations, [a]: r } },
          e.config.activeDashboard
        )
      };
    }
    case "ADD_NEW_DASHBOARD": {
      const a = e.config.multiDashboards, n = "New Dashboard " + (a.length + 1), r = [...a, { ...ml(), label: n }];
      return Ae(e, r);
    }
    case "UPDATE_CONFIG": {
      const [a, n] = wt(e)(...t.payload);
      return { ...e, config: le(a, e.config.activeDashboard), filteredData: n };
    }
    case "APPLY_CONFIG": {
      const [a, n] = wt(e)(...t.payload), r = [...Object.values(a.visualizations), ...a.rows].map((o) => o.dataKey).reduce((o, i) => {
        var l;
        const s = e.data[i] || ((l = e.config.datasets[i]) == null ? void 0 : l.data);
        return s && (o[i] = s), o;
      }, {});
      return { ...Qe, config: le(a, e.config.activeDashboard), filteredData: n, data: r };
    }
    case "SET_CONFIG":
      return t.payload.activeDashboard === void 0 || e.config.activeDashboard === t.payload.activeDashboard ? {
        ...e,
        config: le({ ...e.config, ...t.payload }, t.payload.activeDashboard)
      } : e;
    case "SET_DATA":
      return { ...e, data: t.payload };
    case "SET_FILTERED_DATA":
      return { ...e, filteredData: t.payload };
    case "SET_LOADING":
      return { ...e, loading: t.payload };
    case "SET_PREVIEW":
      return { ...e, preview: t.payload };
    case "SET_SHARED_FILTERS": {
      const a = t.payload, n = { ...e.config.dashboard, sharedFilters: a };
      return {
        ...e,
        config: le({ ...e.config, dashboard: n }, e.config.activeDashboard)
      };
    }
    case "SET_TAB_SELECTED":
      return { ...e, tabSelected: t.payload };
    case "REMOVE_MULTIDASHBOARD_AT_INDEX": {
      const a = [...e.config.multiDashboards];
      I.remove(a, (r, o) => o === t.payload);
      const n = {
        ...e.config,
        multiDashboards: a,
        ...a[0],
        activeDashboard: 0
      };
      return a.length === 0 ? { ...e, config: I.omit(e.config, "multiDashboards") } : Ae({ ...e, config: n }, a);
    }
    case "RENAME_DASHBOARD_TAB": {
      const a = e.config.multiDashboards.map((r) => (r.label === t.payload.current && (r.label = t.payload.new), r)), n = { ...e.config, label: t.payload.new };
      return Ae({ ...e, newConfig: n }, a);
    }
    case "REORDER_MULTIDASHBOARDS": {
      const { newIndex: a, currentIndex: n } = t.payload, r = [...e.config.multiDashboards];
      r.splice(a, 0, r.splice(n, 1)[0]);
      const o = { ...e.config, activeDashboard: a };
      return Ae({ ...e, config: o }, r);
    }
    case "SAVE_CURRENT_CHANGES": {
      const a = e.config.activeDashboard, n = [...e.config.multiDashboards], r = n[a].label, o = I.pick(e.config, ["dashboard", "visualizations", "rows"]);
      n[a] = { ...o, label: r };
      const i = le(e.config, a);
      return { ...e, config: i };
    }
    case "INITIALIZE_MULTIDASHBOARDS": {
      const a = "New Dashboard 1", r = [{ ...I.pick(e.config, ["dashboard", "visualizations", "rows"]), label: a }], o = { ...e.config, activeDashboard: 0 };
      return Ae({ ...e, config: o }, r);
    }
    case "SWITCH_CONFIG": {
      const a = t.payload, n = e.config.multiDashboards[a], r = I.cloneDeep(e.data);
      return { ...e, data: r, config: { ...e.config, ...n, activeDashboard: a } };
    }
    case "TOGGLE_ROW": {
      const { rowIndex: a, colIndex: n } = t.payload, r = e.config.rows.map((o, i) => {
        if (i === a) {
          const s = o.columns.map((l, m) => ({ ...l, hide: m === n }));
          return { ...o, columns: s };
        }
        return o;
      });
      return { ...e, config: { ...e.config, rows: r } };
    }
    case "ADD_VISUALIZATION": {
      const { newViz: a, rowIdx: n, colIdx: r } = t.payload, o = a.uid, i = I.cloneDeep(e.config.rows);
      return i[n].columns[r].widget = o, {
        ...e,
        config: le(
          { ...e.config, visualizations: { ...e.config.visualizations, [o]: a }, rows: i },
          e.config.activeDashboard
        )
      };
    }
    case "MOVE_VISUALIZATION": {
      const { rowIdx: a, colIdx: n, widget: r } = t.payload, o = I.cloneDeep(e.config.rows);
      return o[r.rowIdx].columns[r.colIdx].widget = null, o[a].columns[n].widget = r.uid, {
        ...e,
        config: le({ ...e.config, rows: o }, e.config.activeDashboard)
      };
    }
    case "UPDATE_VISUALIZATION": {
      const { vizKey: a, configureData: n } = t.payload, r = { ...e.config.visualizations[a], ...n };
      return {
        ...e,
        config: le(
          { ...e.config, visualizations: { ...e.config.visualizations, [a]: r } },
          e.config.activeDashboard
        )
      };
    }
    case "UPDATE_ROW": {
      const { rowIndex: a, rowData: n } = t.payload, r = e.config.rows.map((o, i) => i === a ? { ...o, ...n } : o);
      return { ...e, config: le({ ...e.config, rows: r }, e.config.activeDashboard) };
    }
    case "DELETE_WIDGET": {
      const { uid: a } = t.payload, n = I.cloneDeep(e.config.rows), r = I.cloneDeep(e.config.visualizations);
      delete r[a];
      const o = I.cloneDeep(e.config.dashboard.sharedFilters);
      o && o.length > 0 && o.forEach((s) => {
        s.usedBy && s.usedBy.indexOf(a) !== -1 && s.usedBy.splice(s.usedBy.indexOf(a), 1);
      });
      const i = I.map(n, (s) => ({
        ...s,
        columns: I.filter(s.columns, (l) => l.widget !== a)
      }));
      return {
        ...e,
        config: le(
          {
            ...e.config,
            dashboard: { ...e.config.dashboard, sharedFilters: o },
            visualizations: r,
            rows: i
          },
          e.config.activeDashboard
        )
      };
    }
    default:
      return e;
  }
}, le = (e, t) => {
  if (t === void 0 || !e.multiDashboards)
    return e;
  const a = [...e.multiDashboards], n = a[t].label, r = I.pick(e, ["dashboard", "visualizations", "rows"]);
  return a[t] = { ...r, label: n }, { ...e, multiDashboards: a };
}, Ae = (e, t) => ({
  ...e,
  config: { ...e.config, multiDashboards: t }
}), gl = zn(pl), hl = (e, t) => {
  switch (t.type) {
    case "ADD_ERROR_MESSAGE": {
      const a = t.payload;
      return [...e, a];
    }
    case "DISMISS_ERROR_MESSAGE": {
      const a = [...e];
      return I.remove(a, (n, r) => r === t.payload), a;
    }
  }
}, vl = zn(hl);
const Hn = ({ children: e, visualizationKey: t, visualizationConfig: a, type: n, component: r, updateConfig: o, viewport: i }) => {
  const [s, l] = c.useState(!0);
  return /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement("div", { className: "editor-wrapper" }, /* @__PURE__ */ c.createElement("button", { className: `editor-toggle ${s ? "" : "collapsed"}`, title: s ? "Collapse Editor" : "Expand Editor", onClick: () => l(!s) }), /* @__PURE__ */ c.createElement("section", { className: `${s ? "" : "hidden"} editor-panel cove` }, /* @__PURE__ */ c.createElement("div", { "aria-level": 2, role: "heading", className: "heading-2" }, "Configure ", n), /* @__PURE__ */ c.createElement("section", null, e)), /* @__PURE__ */ c.createElement("div", { className: "preview-wrapper" }, /* @__PURE__ */ c.createElement(r, { visualizationKey: t, config: a, updateConfig: o, configUrl: void 0, setEditing: void 0, hostname: void 0, viewport: i }))));
}, yl = ({ config: e, updateConfig: t }) => {
  var o;
  const a = v.useMemo(() => _t(e, t), [JSON.stringify(e)]), n = (i) => {
    const s = I.cloneDeep(e.columns);
    delete s[i], t({
      ...e,
      columns: s
    });
  }, r = Object.keys(((o = e.originalFormattedData) == null ? void 0 : o[0]) || {});
  return /* @__PURE__ */ React.createElement(ur, { allowZeroExpanded: !0 }, /* @__PURE__ */ React.createElement(at, null, /* @__PURE__ */ React.createElement(nt, null, /* @__PURE__ */ React.createElement(rt, null, "Filters")), /* @__PURE__ */ React.createElement(ot, null, /* @__PURE__ */ React.createElement(Jn, { config: e, updateField: a, rawData: e.originalFormattedData }))), /* @__PURE__ */ React.createElement(at, null, /* @__PURE__ */ React.createElement(nt, null, /* @__PURE__ */ React.createElement(rt, null, "Columns")), /* @__PURE__ */ React.createElement(ot, null, /* @__PURE__ */ React.createElement(ir, { config: e, updateField: a, deleteColumn: n }))), /* @__PURE__ */ React.createElement(at, null, /* @__PURE__ */ React.createElement(nt, null, /* @__PURE__ */ React.createElement(rt, null, "Data Table")), /* @__PURE__ */ React.createElement(ot, null, /* @__PURE__ */ React.createElement(sr, { config: e, columns: r, updateField: a, isDashboard: !0 }))));
}, Mt = ({
  visualizationKey: e,
  config: t,
  updateConfig: a,
  viewport: n,
  isEditor: r
}) => {
  const [o, i] = v.useState(
    ea(t.filters, t.formattedData || t.data)
  );
  return v.useEffect(() => {
    var l;
    const s = gr(t.filters, t.data);
    i(ea(s, ((l = t == null ? void 0 : t.formattedData) == null ? void 0 : l.length) > 0 ? t.formattedData : t.data));
  }, [t.filters]), r ? /* @__PURE__ */ React.createElement(
    Hn,
    {
      component: Mt,
      visualizationKey: e,
      visualizationConfig: t,
      updateConfig: a,
      type: "Table",
      viewport: n
    },
    /* @__PURE__ */ React.createElement(yl, { key: e, config: t, updateConfig: a })
  ) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    hr,
    {
      config: t,
      setConfig: a,
      setFilteredData: i,
      filteredData: o,
      excludedData: t.formattedData
    }
  ), /* @__PURE__ */ React.createElement(
    ht,
    {
      expandDataTable: t.table.expanded,
      config: t,
      rawData: t.data,
      runtimeData: o,
      tabbingId: e,
      tableTitle: t.table.label,
      viewport: n || "lg"
    }
  ));
};
const bl = ({ active: e, row: t, visualizations: a, setToggled: n }) => {
  const r = (o, i = null) => {
    i != null && i.key && i.key !== "Enter" || n(o);
  };
  return /* @__PURE__ */ React.createElement("div", { className: "toggle-component" }, t.columns.map((o, i) => {
    if (!o.widget)
      return null;
    const s = a[o.widget].type, l = i === e;
    return /* @__PURE__ */ React.createElement("div", { role: "radio", className: l ? "selected" : "", key: i, onClick: () => r(i), onKeyUp: (m) => r(i, m), "aria-checked": l, tabIndex: 0, "aria-label": `Toggle ${s}` }, js(a[o.widget]), " ", /* @__PURE__ */ React.createElement("span", null, I.capitalize(s)));
  }));
}, jn = {
  Apply: "Apply Button",
  OnChange: "Filter Change"
}, Qa = (e, t) => {
  const a = e[t].key, n = e.map((r, o) => {
    var i;
    return (i = r.parents) != null && i.includes(a) ? o : null;
  }).filter((r) => r !== null);
  return n.length && n.forEach((r) => {
    const o = e[r];
    o.setByQueryParameter && vr(o.setByQueryParameter), o.active = "", o.subGrouping && (o.subGrouping.active = "");
  }), n;
}, El = (e, t, a, n) => {
  const r = I.cloneDeep(a), o = r[e];
  if (n.filterBehavior !== jn.Apply || n.autoLoad)
    if ((o == null ? void 0 : o.filterStyle) === oe.nestedDropdown)
      r[e].active = t[0], r[e].subGrouping.active = t[1];
    else {
      r[e].active = t, Qa(r, e);
      const i = It();
      o.setByQueryParameter && i[o.setByQueryParameter] !== o.active && (i[o.setByQueryParameter] = o.active, mn(i));
    }
  else {
    const i = Array.isArray(t) ? t.join(",") : t;
    o.setByQueryParameter && dn(o.setByQueryParameter, i), r[e].queuedActive = t;
  }
  return [r, Qa(r, e)];
}, Tt = (e, t) => {
  var n;
  const a = (n = e.sharedFilters) == null ? void 0 : n.filter(
    (r) => {
      var o;
      return r.usedBy && r.usedBy.indexOf(`${t}`) !== -1 || ((o = r.usedBy) == null ? void 0 : o.indexOf(t)) !== -1;
    }
  );
  return (a == null ? void 0 : a.length) > 0 ? a : !1;
}, Le = (e, t, a) => {
  const n = t || {}, { config: r } = e;
  return be(r).forEach((o) => {
    const i = Tt(r.dashboard, o);
    if (i) {
      const { dataKey: s, data: l, dataDescription: m } = r.visualizations[o], g = (a || e.data)[s] || l, d = (a == null ? void 0 : a[s]) || (m ? De(g, m) : g);
      n[o] = Ce(i, d);
    }
  }), r.rows.forEach((o, i) => {
    if (o.dataKey) {
      const s = Tt(r.dashboard, i), { dataKey: l, data: m, dataDescription: g } = o, d = (a || e.data)[l] || m;
      if (s) {
        const S = (a == null ? void 0 : a[l]) ?? g ? De(d, g) : d;
        n[i] = Ce(s, S);
      } else
        n[i] = d || [];
    }
  }), n;
}, Ze = (e) => Object.values(e).some((t) => t.filterBehavior === "Apply Button" && t.type === "dashboardFilters"), Dl = ({
  filter: e,
  config: t,
  isDashboard: a = !1,
  updateFilterProp: n
}) => {
  const r = e == null ? void 0 : e.subGrouping, o = Object.keys(t.datasets), i = [];
  o.map((d) => {
    Object.keys(t.datasets[d].data[0]).forEach(
      (y) => i.push({
        datasetKey: d,
        columnName: y
      })
    );
  });
  const s = [], l = (d, S) => {
    i.forEach((y) => {
      y.datasetKey === d && y.columnName !== S && s.push(y.columnName);
    });
  }, m = (d) => {
    const S = d.selectedOptions[0].dataset.set, y = d.value;
    n("columnName", y), l(S, y);
  }, g = (d) => {
    const S = d.selectedOptions[0].dataset.set, y = d.value, T = e.values.reduce((p, u) => {
      const h = I.uniq(
        t.datasets[S].data.map((f) => f[e.columnName] === u ? f[y] : "").filter((f) => f !== "")
      ).sort();
      return p[u] = {
        values: h,
        orderedValues: h
      }, p;
    }, {}), O = {
      ...r,
      columnName: y,
      valuesLookup: T
    };
    n("subGrouping", O);
  };
  return /* @__PURE__ */ React.createElement("div", { className: "nesteddropdown-editor" }, !a && /* @__PURE__ */ React.createElement(
    J,
    {
      label: "Label",
      value: e.key,
      updateField: (d, S, y, T) => n("key", T)
    }
  ), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("div", { className: "edit-label column-heading mt-2" }, "Filter Grouping", /* @__PURE__ */ React.createElement("span", null)), /* @__PURE__ */ React.createElement("select", { value: e.columnName, onChange: (d) => m(d.target) }, /* @__PURE__ */ React.createElement("option", { value: "" }, "- Select Option -"), i == null ? void 0 : i.map((d) => /* @__PURE__ */ React.createElement(
    "option",
    {
      value: d.columnName,
      "data-set": d.datasetKey,
      key: `filter_${d.datasetKey}_${d.columnName} `
    },
    d.columnName
  )))), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("div", { className: "edit-label column-heading mt-2" }, "Filter SubGrouping", /* @__PURE__ */ React.createElement("span", null)), /* @__PURE__ */ React.createElement(
    "select",
    {
      value: (r == null ? void 0 : r.columnName) ?? "",
      onChange: (d) => {
        g(d.target);
      }
    },
    /* @__PURE__ */ React.createElement("option", { value: "" }, "- Select Option -"),
    i.map((d) => {
      if (d.columnName !== e.columnName)
        return /* @__PURE__ */ React.createElement(
          "option",
          {
            value: d.columnName,
            "data-set": d.datasetKey,
            key: `subFilter_${d.datasetKey}_${d.columnName} `
          },
          d.columnName
        );
    })
  )));
}, Sl = ({ filter: e, filterIndex: t, config: a, updateFilterProp: n }) => {
  const [r, o] = v.useState([]), i = new Se(), s = Object.values(oe), l = (a.dashboard.sharedFilters || []).filter(({ key: u, type: h }) => u !== e.key && h !== "datafilter").map(({ key: u }) => u), m = xt(a.rows), [g, d] = v.useMemo(() => {
    const u = {}, h = Object.keys(a.visualizations).filter((b) => {
      var q;
      const D = m[b];
      if (!D)
        return !1;
      const C = a.visualizations[b];
      if (C.type === "dashboardFilters")
        return !1;
      const w = ((q = C.general) == null ? void 0 : q.title) || C.title || b;
      u[b] = w;
      const R = C.usesSharedFilter, F = D.row, z = a.rows[F].dataKey;
      return e.setBy !== b && !R && !z;
    }), f = [];
    a.rows.forEach((b, D) => {
      b.dataKey && (u[D] = `Row ${D + 1}`, f.push(D));
    });
    const E = f.filter((b) => !e.usedBy || e.usedBy.indexOf(b.toString()) === -1);
    return [u, [...h, ...E]];
  }, [a.visualizations, e.usedBy, e.setBy, m]), S = async () => {
    const u = {}, h = Object.keys(a.datasets);
    for (let f = 0; f < h.length; f++) {
      const E = h[f];
      let b = a.datasets[E];
      if (!b.data && b.dataUrl && (b = await xe(b.dataUrl), b.dataDescription))
        try {
          b = i.autoStandardize(b.data), b = i.developerStandardize(b.data, b.dataDescription);
        } catch {
        }
      b.data && b.data.forEach((D) => {
        Object.keys(D).forEach((C) => {
          u[C] = !0;
        });
      });
    }
    o(Object.keys(u));
  };
  v.useEffect(() => {
    S();
  }, [a.datasets]);
  const y = (u, h) => {
    const b = { ...I.cloneDeep(e).apiFilter || { apiEndpoint: "", valueSelector: "", textSelector: "" }, [u]: h };
    n("apiFilter", b);
  }, T = (u) => {
    const h = a.dashboard.sharedFilters.filter(
      (f, E) => f.key === u && t !== E
    );
    n("key", h.length ? u + ` (${h.length})` : u);
  }, O = e.filterStyle === oe.nestedDropdown, p = ({ isSubgroup: u = !1 }) => {
    var E, b, D;
    const h = u ? "subgroupTextSelector" : "textSelector", f = u ? "subgroupValueSelector" : "valueSelector";
    return /* @__PURE__ */ React.createElement(React.Fragment, null, !u && /* @__PURE__ */ React.createElement(
      J,
      {
        label: "API Endpoint: ",
        value: (E = e.apiFilter) == null ? void 0 : E.apiEndpoint,
        updateField: (C, w, R, F) => y("apiEndpoint", F),
        tooltip: /* @__PURE__ */ React.createElement(React.Fragment, null, O && /* @__PURE__ */ React.createElement(L, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(L.Target, null, /* @__PURE__ */ React.createElement(P, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ React.createElement(L.Content, null, /* @__PURE__ */ React.createElement("p", null, "Your API Endpoint should return both value selector values."))))
      }
    ), /* @__PURE__ */ React.createElement("div", { className: O ? "border border-dark p-1 my-1" : "" }, /* @__PURE__ */ React.createElement(
      J,
      {
        label: `${u ? "Subgroup " : ""}Value Selector:`,
        value: ((b = e == null ? void 0 : e.apiFilter) == null ? void 0 : b[f]) || "",
        updateField: (C, w, R, F) => y(f, F),
        tooltip: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(L, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(L.Target, null, /* @__PURE__ */ React.createElement(P, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ React.createElement(L.Content, null, /* @__PURE__ */ React.createElement("p", null, "Value to use in the html option element"))), " * Required")
      }
    ), /* @__PURE__ */ React.createElement(
      J,
      {
        label: `${u ? "Subgroup " : ""}Display Text Selector:`,
        value: ((D = e == null ? void 0 : e.apiFilter) == null ? void 0 : D[h]) || "",
        updateField: (C, w, R, F) => y(h, F),
        tooltip: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(L, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(L.Target, null, /* @__PURE__ */ React.createElement(P, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ React.createElement(L.Content, null, /* @__PURE__ */ React.createElement("p", null, "Text to use in the html option element. If none is applied value selector will be used."))), " * Optional")
      }
    )));
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("span", { className: "edit-label column-heading" }, "Filter Type: "), /* @__PURE__ */ React.createElement(
    "select",
    {
      defaultValue: e.type || "",
      onChange: (u) => n("type", u.target.value),
      disabled: !!e.type
    },
    /* @__PURE__ */ React.createElement("option", { value: "" }, "- Select Option -"),
    /* @__PURE__ */ React.createElement("option", { value: "urlfilter" }, "URL"),
    /* @__PURE__ */ React.createElement("option", { value: "datafilter" }, "Data")
  )), e.type !== void 0 && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("span", { className: "edit-label column-heading" }, "Filter Style: "), /* @__PURE__ */ React.createElement(
    "select",
    {
      value: e.filterStyle || oe.dropdown,
      onChange: (u) => n("filterStyle", u.target.value)
    },
    s.map((u) => /* @__PURE__ */ React.createElement("option", { value: u, key: `filter-style-select-item-${u}` }, u))
  )), e.filterStyle === oe.dropdown && /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("span", { className: "me-1" }, "Show Dropdown"), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "checkbox",
      checked: e.showDropdown,
      onChange: (u) => {
        n("showDropdown", !e.showDropdown);
      }
    }
  )), /* @__PURE__ */ React.createElement(
    J,
    {
      label: "Label",
      value: e.key,
      updateField: (u, h, f, E) => {
        T(E);
      }
    }
  ), e.filterStyle === oe.multiSelect && /* @__PURE__ */ React.createElement(
    J,
    {
      label: "Select Limit",
      value: e.selectLimit,
      updateField: (u, h, f, E) => n("selectLimit", E),
      type: "number",
      tooltip: /* @__PURE__ */ React.createElement(L, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(L.Target, null, /* @__PURE__ */ React.createElement(P, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ React.createElement(L.Content, null, /* @__PURE__ */ React.createElement("p", null, "The maximum number of items that can be selected.")))
    }
  ), e.type === "urlfilter" && /* @__PURE__ */ React.createElement(React.Fragment, null, !Ze(a.visualizations) && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("span", { className: "edit-label column-heading" }, "URL to Filter: "), /* @__PURE__ */ React.createElement(
    "select",
    {
      defaultValue: e.datasetKey || "",
      onChange: (u) => n("datasetKey", u.target.value)
    },
    /* @__PURE__ */ React.createElement("option", { value: "" }, "- Select Option -"),
    Object.keys(a.datasets).map((u) => a.datasets[u].dataUrl ? /* @__PURE__ */ React.createElement("option", { key: u, value: u }, a.datasets[u].dataUrl) : null)
  )), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("span", { className: "edit-label column-heading" }, "Filter By: "), /* @__PURE__ */ React.createElement(
    "select",
    {
      defaultValue: e.filterBy || "",
      onChange: (u) => n("filterBy", u.target.value)
    },
    /* @__PURE__ */ React.createElement("option", { value: "" }, "- Select Option -"),
    /* @__PURE__ */ React.createElement("option", { key: "query-string", value: "Query String" }, "Query String"),
    /* @__PURE__ */ React.createElement("option", { key: "file-name", value: "File Name" }, "File Name")
  )), e.filterBy === "File Name" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    J,
    {
      label: "File Name: ",
      value: e.fileName || "",
      updateField: (u, h, f, E) => n("fileName", E),
      tooltip: /* @__PURE__ */ React.createElement(L, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(L.Target, null, /* @__PURE__ */ React.createElement(P, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ React.createElement(L.Content, null, /* @__PURE__ */ React.createElement("p", null, "Add ${query} to replace the filename with the active dropdown value.")))
    }
  ), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("span", { className: "edit-label column-heading" }, "White Space Replacments", /* @__PURE__ */ React.createElement(L, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(L.Target, null, /* @__PURE__ */ React.createElement(P, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ React.createElement(L.Content, null, /* @__PURE__ */ React.createElement("p", null, "Set how whitespace characters will be handled in the file request")))), /* @__PURE__ */ React.createElement(
    "select",
    {
      defaultValue: e.whitespaceReplacement || "Keep Spaces",
      onChange: (u) => n("whitespaceReplacement", u.target.value)
    },
    /* @__PURE__ */ React.createElement("option", { key: "remove-spaces", value: "Remove Spaces" }, "Remove Spaces"),
    /* @__PURE__ */ React.createElement("option", { key: "replace-with-underscore", value: "Replace With Underscore" }, "Replace With Underscore"),
    /* @__PURE__ */ React.createElement("option", { key: "keep-spaces", value: "Keep Spaces" }, "Keep Spaces")
  )))), e.filterBy === "Query String" && /* @__PURE__ */ React.createElement(
    J,
    {
      label: "Query string parameter",
      value: e.queryParameter,
      updateField: (u, h, f, E) => n("queryParameter", E)
    }
  ), /* @__PURE__ */ React.createElement(p, null), O && /* @__PURE__ */ React.createElement(p, { isSubgroup: !0 }), !!l.length && /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("span", { className: "edit-label column-heading mt-1" }, "Parent Filter(s): "), /* @__PURE__ */ React.createElement(
    it,
    {
      label: "Parent Filter(s): ",
      options: l.map((u) => ({ value: u, label: u })),
      fieldName: "parents",
      selected: e.parents,
      updateField: (u, h, f, E) => {
        n("parents", E);
      }
    }
  )), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("span", { className: "edit-label column-heading mt-1" }, "Used By: (optional)", /* @__PURE__ */ React.createElement(L, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(L.Target, null, /* @__PURE__ */ React.createElement(P, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ React.createElement(L.Content, null, /* @__PURE__ */ React.createElement("p", null, "Select if you would like specific visualizations or rows to use this filter. Otherwise the filter will be added to all api requests.")))), /* @__PURE__ */ React.createElement(
    it,
    {
      options: d.map((u) => ({
        value: u,
        label: g[u]
      })),
      fieldName: "usedBy",
      selected: e.usedBy,
      updateField: (u, h, f, E) => {
        n("usedBy", E);
      }
    }
  )), /* @__PURE__ */ React.createElement(
    J,
    {
      label: "Reset Label: ",
      value: e.resetLabel || "",
      updateField: (u, h, f, E) => n("resetLabel", E)
    }
  ), /* @__PURE__ */ React.createElement(
    J,
    {
      label: "Default Value Set By Query String Parameter: ",
      value: e.setByQueryParameter || "",
      updateField: (u, h, f, E) => n("setByQueryParameter", E)
    }
  )), e.type === "datafilter" && /* @__PURE__ */ React.createElement(React.Fragment, null, e.filterStyle !== oe.nestedDropdown ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("span", { className: "edit-label column-heading" }, "Filter: "), /* @__PURE__ */ React.createElement(
    "select",
    {
      value: e.columnName,
      onChange: (u) => {
        n("columnName", u.target.value);
      }
    },
    /* @__PURE__ */ React.createElement("option", { value: "" }, "- Select Option -"),
    r.map((u) => /* @__PURE__ */ React.createElement("option", { value: u, key: `filter-column-select-item-${u}` }, u))
  )), /* @__PURE__ */ React.createElement(
    gt,
    {
      value: e.active,
      options: a.dashboard.sharedFilters[t].values,
      updateField: (u, h, f, E) => n("active", E),
      label: "Filter Default Value",
      initial: "Select"
    }
  ), /* @__PURE__ */ React.createElement(
    gt,
    {
      value: e.order || "asc",
      options: yr,
      updateField: (u, h, f, E) => n("order", E),
      label: "Filter Order"
    }
  ), e.order === "cust" && /* @__PURE__ */ React.createElement(
    er,
    {
      orderedValues: e.orderedValues || e.values,
      handleFilterOrder: (u, h) => {
        const f = [...e.values], [E] = f.splice(u, 1);
        f.splice(h, 0, E), n("orderedValues", f);
      }
    }
  ), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("span", { className: "edit-label column-heading" }, "Show Dropdown"), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "checkbox",
      defaultChecked: e.showDropdown === !0,
      onChange: (u) => {
        n("showDropdown", !e.showDropdown);
      }
    }
  ))) : /* @__PURE__ */ React.createElement(
    Dl,
    {
      filter: e,
      updateFilterProp: (u, h) => {
        n(u, h);
      },
      isDashboard: !0,
      config: a
    }
  ), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("span", { className: "edit-label column-heading" }, "Set By: "), /* @__PURE__ */ React.createElement("select", { value: e.setBy, onChange: (u) => n("setBy", u.target.value) }, /* @__PURE__ */ React.createElement("option", { value: "" }, "- Select Option -"), Object.keys(a.visualizations).filter((u) => a.visualizations[u].type !== "dashboardFilters").map((u) => {
    var f;
    const h = a.visualizations[u];
    return /* @__PURE__ */ React.createElement("option", { value: u, key: `set-by-select-item-${u}` }, ((f = h.general) == null ? void 0 : f.title) || h.title || u);
  }))), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("span", { className: "edit-label column-heading mt-1" }, "Used By: (optional)", /* @__PURE__ */ React.createElement(L, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(L.Target, null, /* @__PURE__ */ React.createElement(P, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ React.createElement(L.Content, null, /* @__PURE__ */ React.createElement("p", null, "Select if you would like specific visualizations or rows to use this filter. Otherwise the filter will be added to all api requests.")))), /* @__PURE__ */ React.createElement(
    it,
    {
      options: d.map((u) => ({
        value: u,
        label: g[u]
      })),
      fieldName: "usedBy",
      selected: e.usedBy,
      updateField: (u, h, f, E) => {
        n("usedBy", E);
      }
    }
  )), /* @__PURE__ */ React.createElement(
    J,
    {
      label: "Reset Label: ",
      value: e.resetLabel || "",
      updateField: (u, h, f, E) => n("resetLabel", E)
    }
  ), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("span", { className: "edit-label column-heading" }, "Parent Filter: "), /* @__PURE__ */ React.createElement(
    "select",
    {
      value: e.parents || [],
      onChange: (u) => {
        n("parents", u.target.value);
      }
    },
    /* @__PURE__ */ React.createElement("option", { value: "" }, "Select a filter"),
    a.dashboard.sharedFilters && a.dashboard.sharedFilters.map((u) => {
      if (u.key !== e.key)
        return /* @__PURE__ */ React.createElement("option", { key: u.key }, u.key);
    })
  )), /* @__PURE__ */ React.createElement(
    J,
    {
      label: "Default Value Set By Query String Parameter: ",
      value: e.setByQueryParameter || "",
      updateField: (u, h, f, E) => n("setByQueryParameter", E)
    }
  ))));
}, wl = ({
  removeFilterCompletely: e,
  removeFilterFromViz: t,
  filterIndex: a
}) => {
  const { overlay: n } = pe(), { config: r } = v.useContext(ee), o = Object.values(r.visualizations).filter((s) => {
    var l;
    return (l = s.sharedFilterIndexes) == null ? void 0 : l.map(Number).includes(Number(a));
  }).length > 1, i = o ? "This filter is used by multiple visualizations. You can either delete the filter from this visualization only or you can delete the filter completely, which will also remove it from other visualizations." : "Are you sure you want to delete this filter?";
  return /* @__PURE__ */ React.createElement(me, { showClose: !0 }, /* @__PURE__ */ React.createElement(me.Content, null, /* @__PURE__ */ React.createElement("p", null, i), o && /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "btn btn-warning",
      onClick: () => {
        t(a), n == null || n.actions.toggleOverlay();
      }
    },
    "Delete from Visualization"
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "btn btn-danger",
      onClick: () => {
        e(a), n == null || n.actions.toggleOverlay();
      }
    },
    "Delete",
    o ? " Completely" : ""
  )));
}, Tl = (e, t) => {
  const a = /* @__PURE__ */ new Set();
  return (Object.values(t) || []).forEach((r) => {
    r == null || r.forEach((o) => {
      const i = o[e];
      if (i !== void 0) {
        const s = String(i).trim();
        a.add(s);
      }
    });
  }), Array.from(a);
}, Rl = (e) => {
  var t;
  return e.type === "urlfilter" ? (t = e.apiFilter) == null ? void 0 : t.valueSelector : e.columnName;
}, Rt = (e, t, a = []) => e == null ? void 0 : e.map((n, r) => {
  if (a.includes(r) || n.type === "urlfilter")
    return n;
  const o = I.cloneDeep(n), i = Tl(Rl(n), t);
  if (o.values = i, i.length > 0) {
    const s = fn(o);
    if (s)
      o.active = s;
    else if (n.multiSelect) {
      const l = o.values, m = Array.isArray(o.active) ? o.active : [o.active];
      o.active = m.filter((g) => l.includes(g));
    } else {
      const l = e.find((g) => g.resetLabel), m = l ? l.resetLabel : o.active || o.values[0];
      o.active = m;
    }
  }
  return pn(o);
}), Cl = ({ vizConfig: e, updateConfig: t }) => {
  const { config: a, loadAPIFilters: n, data: r } = v.useContext(ee), { overlay: o } = pe(), {
    dashboard: { sharedFilters: i },
    visualizations: s
  } = a, l = v.useContext(ae), m = v.useMemo(() => {
    var u;
    const p = a.visualizations[e.uid].sharedFilterIndexes.map(
      Number
    );
    return (u = a.dashboard.sharedFilters) == null ? void 0 : u.map(({ key: h }, f) => [f, h]).filter(([h]) => !p.includes(h)).map(([h, f]) => /* @__PURE__ */ React.createElement("option", { key: h, value: h }, `${h} - ${f}`));
  }, [a.visualizations, e.uid]), g = v.useState({}), [d, S] = v.useState(!1), y = (p, u, h) => {
    const f = I.cloneDeep(i), {
      apiEndpoint: E,
      valueSelector: b,
      textSelector: D,
      subgroupValueSelector: C,
      subgroupTextSelector: w
    } = i[u].apiFilter || {}, R = (h == null ? void 0 : h.apiEndpoint) !== E || (h == null ? void 0 : h.valueSelector) !== b || (h == null ? void 0 : h.textSelector) !== D || (h == null ? void 0 : h.subgroupValueSelector) !== C || (h == null ? void 0 : h.subgroupTextSelector) !== w;
    if (f[u][p] = h, p === "columnName") {
      f[u].subGrouping && delete f[u].subGrouping;
      const F = Rt(f, r);
      l({ type: "SET_SHARED_FILTERS", payload: F });
    } else
      p === "filterStyle" ? (f[u] = {
        ...f[u],
        active: "",
        apiFilter: {
          apiEndpoint: "",
          subgroupValueSelector: "",
          textSelector: "",
          valueSelector: ""
        },
        filterStyle: h
      }, l({ type: "SET_SHARED_FILTERS", payload: f })) : p === "apiFilter" && h.apiEndpoint && h.valueSelector && R ? (i[u].filterStyle === oe.nestedDropdown && h.subgroupValueSelector && (f[u].subGrouping = {
        active: "",
        columnName: "",
        setByQueryParameter: "",
        valuesLookup: {}
      }), n(f, {})) : (pn(f[u]), l({ type: "SET_SHARED_FILTERS", payload: f }));
  }, T = (p) => {
    const u = I.cloneDeep(i);
    u.splice(p, 1);
    const h = Object.keys(i).slice(p + 1), f = s;
    Object.keys(f).forEach((E) => {
      const b = f[E];
      if (b.type === "dashboardFilters") {
        const D = b.sharedFilterIndexes.filter((C) => C != p).map((C) => h.includes(C.toString()) ? C - 1 : C);
        l({ type: "UPDATE_VISUALIZATION", payload: { vizKey: E, configureData: { sharedFilterIndexes: D } } });
      }
    }), l({ type: "SET_SHARED_FILTERS", payload: u });
  }, O = () => {
    const p = I.cloneDeep(i) || [], h = { key: "New Dashboard Filter " + (p.length + 1), showDropdown: !0, values: [] };
    l({ type: "SET_SHARED_FILTERS", payload: [...p, h] }), t({ ...e, sharedFilterIndexes: [...e.sharedFilterIndexes, p.length] });
  };
  return /* @__PURE__ */ React.createElement(or, { allowZeroExpanded: !0 }, /* @__PURE__ */ React.createElement(Kt, null, /* @__PURE__ */ React.createElement(Xt, null, /* @__PURE__ */ React.createElement(Yt, null, "General")), /* @__PURE__ */ React.createElement(Jt, null, /* @__PURE__ */ React.createElement(
    gt,
    {
      value: e.filterBehavior,
      label: "Filter Behavior",
      updateField: (p, u, h, f) => {
        t({ ...e, filterBehavior: f });
      },
      options: ["Apply Button", "Filter Change"],
      tooltip: /* @__PURE__ */ React.createElement(L, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(L.Target, null, /* @__PURE__ */ React.createElement(P, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ React.createElement(L.Content, null, /* @__PURE__ */ React.createElement("p", null, 'The Apply Button option changes the visualization when the user clicks "apply". The Filter Change option immediately changes the visualization when the selection is changed.')))
    }
  ), e.filterBehavior === "Apply Button" && /* @__PURE__ */ React.createElement(
    J,
    {
      label: "Apply Filter Button Text",
      maxLength: 20,
      value: e.applyFiltersButtonText,
      updateField: (p, u, h, f) => {
        t({ ...e, applyFiltersButtonText: f });
      }
    }
  ), e.filterBehavior === "Filter Change" && /* @__PURE__ */ React.createElement(
    Ue,
    {
      label: "Auto Load",
      value: e.autoLoad,
      updateField: (p, u, h, f) => {
        t({ ...e, autoLoad: f });
      },
      tooltip: /* @__PURE__ */ React.createElement(L, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(L.Target, null, /* @__PURE__ */ React.createElement(P, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ React.createElement(L.Content, null, /* @__PURE__ */ React.createElement("p", null, "Check if you would like for all URL filters to automatically select a value when a parent filter is changed.")))
    }
  ))), /* @__PURE__ */ React.createElement(Kt, null, /* @__PURE__ */ React.createElement(Xt, null, /* @__PURE__ */ React.createElement(Yt, null, "Filters")), /* @__PURE__ */ React.createElement(Jt, null, e.sharedFilterIndexes.map((p) => {
    const u = i[p];
    return /* @__PURE__ */ React.createElement(
      tr,
      {
        key: u.key + p,
        fieldName: u.key,
        fieldKey: p,
        fieldType: "Dashboard Filter",
        controls: g,
        deleteField: () => {
          o == null || o.actions.openOverlay(
            /* @__PURE__ */ React.createElement(
              wl,
              {
                removeFilterCompletely: T,
                removeFilterFromViz: (h) => {
                  t({
                    ...e,
                    sharedFilterIndexes: e.sharedFilterIndexes.filter((f) => f !== h)
                  });
                },
                filterIndex: p
              }
            )
          );
        }
      },
      /* @__PURE__ */ React.createElement(
        Sl,
        {
          filter: u,
          filterIndex: p,
          updateFilterProp: (h, f) => {
            y(h, p, f);
          },
          config: a
        }
      )
    );
  }), /* @__PURE__ */ React.createElement("button", { onClick: O, className: "btn btn-primary full-width" }, "Add Filter"), d ? /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("span", { className: "edit-label column-heading" }, "Select Existing Dashboard Filter", /* @__PURE__ */ React.createElement(L, { style: { textTransform: "none" } }, /* @__PURE__ */ React.createElement(L.Target, null, /* @__PURE__ */ React.createElement(P, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ React.createElement(L.Content, null, /* @__PURE__ */ React.createElement("p", null, "This feature is indentended to support legacy functionality. Be advised that any change to the filter in this editor will reflect on the whole dashboard.", " ")))), /* @__PURE__ */ React.createElement(
    "select",
    {
      value: "",
      onChange: (p) => {
        t({
          ...e,
          sharedFilterIndexes: [...e.sharedFilterIndexes, p.target.value]
        }), S(!1);
      }
    },
    [
      /* @__PURE__ */ React.createElement("option", { key: "select", value: "" }, "Select"),
      ...m
    ]
  )) : /* @__PURE__ */ React.createElement("button", { onClick: () => S(!0), className: "btn btn-primary full-width mt-2" }, "Add Existing Dashboard Filter"))));
}, Ol = (e) => e.replace(/"/g, ""), _l = (e) => String(e).match(/^[-]?[0-9\.]+$/), Ct = (e, t) => {
  const a = e.includes("?");
  return t.filter(({ value: n }) => n !== "").map(({ key: n, value: r }, o) => {
    const i = o === 0 && !a ? "?" : "&", s = n.match(/\$.*/);
    return _l(r) || s ? i + n + "=" + r : i + n + `="${Ol(r)}"`;
  }).join("");
}, Il = (e, t, a = []) => e.reduce((n, r, o) => {
  const i = r, s = a.includes(o);
  return t[i] && !s ? n[i] = t[i] : n[i] = void 0, n;
}, {}), qn = (e, t) => {
  const a = t.filter((n) => {
    var r;
    return (r = e.parents) == null ? void 0 : r.includes(n.key);
  });
  return (a || []).length ? a.flatMap((n) => {
    var r;
    if (n.filterStyle === oe.nestedDropdown) {
      const o = n.apiFilter.valueSelector || "", i = n.apiFilter.subgroupValueSelector || "", s = n.queuedActive ? n.queuedActive[0] : n.active || "", l = n.queuedActive ? n.queuedActive[1] : ((r = n.subGrouping) == null ? void 0 : r.active) || "";
      return [
        { key: o, value: s },
        { key: i, value: l }
      ];
    } else {
      const o = n.queryParameter || n.apiFilter.valueSelector || "", i = n.queuedActive || n.active || "";
      return Array.isArray(i) ? i.map((s) => ({ key: o, value: s.toString() })) : [{ key: o, value: i.toString() }];
    }
  }) : null;
}, Gn = (e) => e == null ? void 0 : e.some(({ value: t }) => t === ""), kl = (e, t) => {
  const { textSelector: a, valueSelector: n, subgroupTextSelector: r, subgroupValueSelector: o } = t;
  if (o) {
    const i = {};
    return e.forEach((s) => {
      i[s[n]] || (i[s[n]] = { text: s[a || n], value: s[n], subOptions: [] }), i[s[n]].subOptions.push({ text: s[r], value: s[o] });
    }), Object.values(i);
  }
  return e.map((i) => ({ text: i[a || n], value: i[n] }));
}, Nl = (e, t) => {
  const a = {};
  return e.forEach((n, r) => {
    var m;
    const o = (m = n.apiFilter) == null ? void 0 : m.apiEndpoint;
    if (!o)
      return;
    const i = o;
    if (t[i])
      return;
    const s = qn(n, e);
    if (Gn(s))
      return;
    const l = o + (s ? Ct(o, s) : "");
    a[l] = [i, r];
  }), a;
}, Fl = (e, t) => {
  var i, s;
  const a = Pe(t == null ? void 0 : t.setByQueryParameter), n = (i = e[0]) == null ? void 0 : i.value, r = (s = e[0]) == null ? void 0 : s.subOptions[0].value, o = Pe(t == null ? void 0 : t.subGrouping.setByQueryParameter);
  if (!t.active)
    t.active = a || n, t.subGrouping.active = o || r;
  else {
    const l = e.find((m) => m.value === t.active);
    if (t.active = l ? l.value : n, l) {
      const m = l.subOptions.find((g) => g.value === t.subGrouping.active);
      t.subGrouping.active = (m == null ? void 0 : m.value) || r;
    } else
      t.subGrouping.active = r;
  }
}, Al = (e, t) => {
  var i;
  const a = Pe(t == null ? void 0 : t.setByQueryParameter), n = Array.isArray(a) ? a : a == null ? void 0 : a.split(","), r = a ? n : [(i = e[0]) == null ? void 0 : i.value], o = (t.active || []).filter(
    (s) => e.find((l) => l.value === s)
  );
  t.active = o.length ? o : r;
}, Za = (e, t, a, n) => {
  var l;
  const r = I.cloneDeep(a), o = I.cloneDeep(r[e]), i = Pe(o == null ? void 0 : o.setByQueryParameter), s = o.setByQueryParameter ? i !== void 0 : !1;
  if (!n.length || !(t != null && t.length))
    return s && o.apiFilter && (o.queuedActive = i), o;
  if (n.includes(e) || s) {
    const m = r.filter((d) => {
      var S;
      return (S = o.parents) == null ? void 0 : S.includes(d.key);
    }), g = m.some((d) => !(d.active || d.queuedActive));
    if (m && g)
      return o;
    if (o.filterStyle === oe.multiSelect)
      Al(t, o);
    else if (o.filterStyle === oe.nestedDropdown)
      Fl(t, o);
    else {
      const d = (l = t[0]) == null ? void 0 : l.value;
      if (!o.active)
        o.active = i || d;
      else {
        const S = t.find((y) => y.value == o.active);
        o.active = S ? S.value : d;
      }
    }
  }
  return o;
};
const Ll = (e, t) => {
  const a = Object.values(t).flat(), n = e.map((o, i) => o.type === "datafilter" && o.parents ? i : -1).filter((o) => o !== -1);
  if (n.length === 0)
    return e;
  const r = I.cloneDeep(e);
  return n.forEach((o) => {
    const i = e[o], s = e.find(
      (l) => String(i.parents) === String(l.key)
    );
    if (s) {
      const l = a.filter((g) => {
        var d;
        return (d = s.active) == null ? void 0 : d.includes(g[s.columnName]);
      }), m = I.uniq(l.map((g) => g[i.columnName]).filter(Boolean));
      if (m.length > 0) {
        const d = i.filterStyle === "multi-select" ? m : m[0];
        r[o] = {
          ...i,
          values: m,
          active: d
        };
      }
    }
  }), r;
}, Wn = ({
  apiFilterDropdowns: e,
  visualizationConfig: t,
  setConfig: a,
  currentViewport: n,
  isEditor: r = !1
}) => {
  var f, E;
  const o = v.useContext(ee), { config: i, reloadURLData: s, loadAPIFilters: l, setAPIFilterDropdowns: m, setAPILoading: g } = o, d = v.useContext(ae), S = (b) => {
    b.preventDefault();
    const D = I.cloneDeep(o.config.dashboard), C = Object.values(o.config.visualizations).filter((R) => R.type === "dashboardFilters").reduce((R, F) => F.autoLoad ? R : [...R, F.sharedFilterIndexes], []);
    if (!D.sharedFilters.some((R, F) => C.includes(F) ? !R.active && !R.queuedActive : !1)) {
      if (Ze(o.config.visualizations)) {
        const R = It();
        let F = !1;
        D.sharedFilters.forEach((z) => {
          z.queuedActive && br(z), z.setByQueryParameter && R[z.setByQueryParameter] !== z.active && (R[z.setByQueryParameter] = Array.isArray(z.active) ? z.active.join(",") : z.active, F = !0);
        }), F && mn(R);
      }
      g(!0), d({ type: "SET_SHARED_FILTERS", payload: D.sharedFilters }), d({ type: "SET_FILTERED_DATA", payload: Le(I.cloneDeep(o)) }), l(D.sharedFilters, e).then((R) => {
        s(R);
      }).catch((R) => {
        console.error(R);
      });
    }
  }, y = (b, D) => {
    const C = I.cloneDeep(i);
    let [w, R] = El(
      b,
      D,
      C.dashboard.sharedFilters,
      t
    );
    if (d({ type: "SET_SHARED_FILTERS", payload: w }), Ze(i.visualizations)) {
      const F = t.autoLoad, z = C.dashboard.sharedFilters.some((ce) => !ce.active), q = w.filter((ce) => ce.apiFilter).map((ce) => ce.apiFilter.apiEndpoint), V = Il(
        q,
        e,
        R
      );
      F && !z ? (m(V), l(w, V).then((ce) => {
        s(ce);
      })) : (w[b].queuedActive = D, d({ type: "SET_DATA", payload: {} }), d({ type: "SET_FILTERED_DATA", payload: {} }), m(V), l(w, V));
    } else if (w[b].type === "urlfilter" && w[b].apiFilter)
      s(w);
    else {
      const F = I.cloneDeep(o);
      F.config.dashboard.sharedFilters = w;
      const z = Le(F);
      d({ type: "SET_FILTERED_DATA", payload: z }), d({ type: "SET_SHARED_FILTERS", payload: w });
    }
  }, [T, O] = v.useState(!0), p = () => {
    O(!T), a({
      ...t,
      showEditorPanel: !T
    });
  }, u = (f = t == null ? void 0 : t.sharedFilterIndexes) == null ? void 0 : f.map(Number).map((b) => i.dashboard.sharedFilters[b]), h = u.length ? u.every((b) => b.showDropdown === !1) : !1;
  return h && !r ? /* @__PURE__ */ React.createElement(React.Fragment, null) : /* @__PURE__ */ React.createElement(ye.VisualizationWrapper, { config: t, isEditor: r, currentViewport: n }, r && /* @__PURE__ */ React.createElement(
    ye.Sidebar,
    {
      displayPanel: T,
      isDashboard: !0,
      title: "Configure Dashboard Filters",
      onBackClick: p
    },
    /* @__PURE__ */ React.createElement(Cl, { updateConfig: a, vizConfig: t })
  ), !h && /* @__PURE__ */ React.createElement(ye.Responsive, { isEditor: r }, /* @__PURE__ */ React.createElement(
    "div",
    {
      className: `${r ? " is-editor" : ""} cove-component__content col-12 cove-dashboard-filters-container`
    },
    /* @__PURE__ */ React.createElement(
      Dr,
      {
        show: (E = t == null ? void 0 : t.sharedFilterIndexes) == null ? void 0 : E.map(Number),
        filters: Ll(i.dashboard.sharedFilters, o.data) || [],
        apiFilterDropdowns: e,
        handleOnChange: y,
        showSubmit: t.filterBehavior === jn.Apply && !t.autoLoad,
        applyFilters: S,
        applyFiltersButtonText: t.applyFiltersButtonText
      }
    )
  )));
}, Pl = new Se(), Qn = (e, t, a) => {
  var s;
  const n = I.cloneDeep(a.visualizations[e]), r = (s = a.datasets[n.dataKey]) == null ? void 0 : s.data, o = r != null && r.length ? Object.keys(r[0]) : [], i = (Tt(a.dashboard, t) || []).filter((l) => o.includes(l.columnName));
  return i.length && (n.formattedData = Ce(i, r)), n.data = r, n;
}, Zn = (e, t, a, n, r) => {
  if (t === void 0)
    return {};
  const o = I.cloneDeep(a.visualizations[e]), i = a.rows[t];
  if (i.footnotesId && i.footnotesId === e)
    return Qn(e, t, a);
  i != null && i.dataKey && Object.assign(o, I.pick(i, ["dataKey", "dataDescription", "formattedData", "data"])), o.formattedData && (o.originalFormattedData = o.formattedData);
  const s = (r == null ? void 0 : r[t]) ?? (r == null ? void 0 : r[e]);
  if (s)
    o.data = s || [], o.formattedData && (o.formattedData = o.data);
  else {
    const l = o.dataKey || "backwards-compatibility";
    o.data = n[l] || [], o.formattedData && (o.formattedData = Pl.developerStandardize(o.data, o.dataDescription) || o.data);
  }
  return o;
}, xl = ({ config: e, updateField: t }) => {
  var m, g, d, S, y, T;
  const a = () => {
    const O = [...e.staticFootnotes || [], { text: "Add Footnote Text" }];
    t(null, null, "staticFootnotes", O);
  }, n = (O, p) => {
    const u = I.cloneDeep(e.staticFootnotes);
    u[O] = p, t(null, null, "staticFootnotes", u);
  }, r = (O) => {
    const p = I.cloneDeep(e.staticFootnotes);
    p.splice(O, 1), t(null, null, "staticFootnotes", p);
  }, o = (O) => [["", "--Select--"]].concat(O.map((p) => [p, p])), i = e.datasets || {}, s = e.dataKey ? o(Object.keys(((g = (m = i[e.dataKey]) == null ? void 0 : m.data) == null ? void 0 : g[0]) || {})) : [], l = o(Object.keys(i));
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("em", null, "Dynamic Footnotes"), /* @__PURE__ */ React.createElement("div", { className: "row border p-2" }, /* @__PURE__ */ React.createElement(
    ge,
    {
      label: "Select a Footnote Dataset",
      value: e.dataKey,
      options: l,
      fieldName: "dataKey",
      updateField: t
    }
  ), e.dataKey && /* @__PURE__ */ React.createElement("div", { className: "p-3" }, /* @__PURE__ */ React.createElement(
    ge,
    {
      label: "Footnote Symbol Column",
      value: (d = e.dynamicFootnotes) == null ? void 0 : d.symbolColumn,
      options: s,
      section: "dynamicFootnotes",
      fieldName: "symbolColumn",
      updateField: t
    }
  ), /* @__PURE__ */ React.createElement(
    ge,
    {
      label: "Footnote Text Column",
      value: (S = e.dynamicFootnotes) == null ? void 0 : S.textColumn,
      options: s,
      section: "dynamicFootnotes",
      fieldName: "textColumn",
      updateField: t
    }
  ), /* @__PURE__ */ React.createElement(
    ge,
    {
      label: "Footnote Order Column",
      value: (y = e.dynamicFootnotes) == null ? void 0 : y.orderColumn,
      options: s,
      section: "dynamicFootnotes",
      fieldName: "orderColumn",
      updateField: t
    }
  ))), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement("em", null, "Static Footnotes"), (T = e.staticFootnotes) == null ? void 0 : T.map((O, p) => /* @__PURE__ */ React.createElement("div", { key: p, className: "row border p-2" }, /* @__PURE__ */ React.createElement("div", { className: "col-8" }, /* @__PURE__ */ React.createElement(
    ge,
    {
      label: "Symbol",
      value: O.symbol,
      options: [["", "--Select--"], ...Er],
      fieldName: "symbol",
      updateField: (u, h, f, E) => n(p, { ...O, symbol: E })
    }
  ), " ", /* @__PURE__ */ React.createElement(
    J,
    {
      label: "Text",
      value: O.text,
      fieldName: "text",
      updateField: (u, h, f, E) => n(p, { ...O, text: E })
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "col-2 ms-4" }, /* @__PURE__ */ React.createElement("button", { className: "btn btn-danger p-1", onClick: () => r(p) }, "Delete")))), /* @__PURE__ */ React.createElement("button", { className: "btn btn-primary", onClick: a }, "Add Static Footnote"));
}, Ke = ({
  visualizationKey: e,
  config: t,
  viewport: a,
  isEditor: n,
  updateConfig: r
}) => {
  const o = _t(t, r);
  if (n)
    return /* @__PURE__ */ React.createElement(
      Hn,
      {
        component: Ke,
        visualizationKey: e,
        visualizationConfig: t,
        updateConfig: r,
        type: "Footnotes",
        viewport: a
      },
      /* @__PURE__ */ React.createElement(xl, { key: e, config: t, updateField: o })
    );
  const i = v.useMemo(() => {
    const l = t.formattedData || t.data;
    if (l && t.dataKey && t.dynamicFootnotes) {
      const { symbolColumn: m, textColumn: g, orderColumn: d } = t.dynamicFootnotes, S = l.map((y) => I.pick(y, [m, g, d]));
      return S.sort((y, T) => y[d] - T[d]), S.map((y) => ({ symbol: y[m], text: y[g] }));
    }
    return [];
  }, [t.dynamicFootnotes, t.formattedData, t.data]), s = t.staticFootnotes || [];
  return /* @__PURE__ */ React.createElement(wr, { footnotes: [...i, ...s] });
}, Ml = ({
  allExpanded: e,
  fontSize: t,
  groupName: a,
  currentViewport: n,
  children: r
}) => {
  const [o, i] = v.useState(e), s = ["xs", "xxs"].includes(n) ? "13px" : `${ar}px`;
  return v.useEffect(() => {
    i(e);
  }, [e]), /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement(
    "div",
    {
      style: { fontSize: s },
      role: "button",
      className: `multi-visualiation-heading${o ? "" : " collapsed"} h4 py-0`,
      onClick: () => {
        i(!o);
      },
      tabIndex: 0,
      onKeyDown: (l) => {
        l.keyCode === 13 && i(!o);
      }
    },
    /* @__PURE__ */ c.createElement(P, { display: o ? "minus" : "plus", base: !0 }),
    a
  ), o && r);
}, $l = ({
  allExpanded: e,
  currentViewport: t,
  groupName: a,
  hideVisualization: n,
  row: r,
  children: o
}) => n ? /* @__PURE__ */ c.createElement(c.Fragment, null) : r.expandCollapseAllButtons ? /* @__PURE__ */ c.createElement("div", { className: "collapsable-multiviz-container" }, /* @__PURE__ */ c.createElement(
  Ml,
  {
    allExpanded: e,
    fontSize: "26px",
    groupName: a,
    currentViewport: t
  },
  o
)) : /* @__PURE__ */ c.createElement(c.Fragment, null, a !== "" ? /* @__PURE__ */ c.createElement("h3", null, a) : /* @__PURE__ */ c.createElement(c.Fragment, null), o), Ka = ({
  allExpanded: e,
  filteredDataOverride: t,
  groupName: a,
  row: n,
  rowIndex: r,
  inNoDataState: o,
  setSharedFilter: i,
  updateChildConfig: s,
  apiFilterDropdowns: l,
  currentViewport: m,
  isLastRow: g
}) => {
  const { config: d, filteredData: S, data: y } = v.useContext(ee), [T, O] = c.useState(n.columns.map((f, E) => E === 0)), p = (f) => {
    O(T.map((E, b) => b === f));
  }, u = v.useMemo(() => {
    if (n.footnotesId) {
      const f = Qn(n.footnotesId, r, d);
      if (n.multiVizColumn && t) {
        const E = t[0][n.multiVizColumn], b = f.formattedData.filter((D) => D[n.multiVizColumn] === E);
        f.formattedData = b;
      } else
        f.formattedData = S[n.footnotesId];
      return f;
    }
    return null;
  }, [d, n, y, S]), h = (f) => {
    const b = Object.values(d.visualizations).filter(
      (D) => D.type === "dashboardFilters"
    ).filter((D) => !D.autoLoad).flatMap((D) => D.sharedFilterIndexes);
    return Ze(d.visualizations) && f.autoLoad ? b.some((D) => {
      const { queuedActive: C, active: w, subGrouping: R } = d.dashboard.sharedFilters[D];
      return !w && !C ? !0 : C ? R ? C[0] !== w || C[1] !== R.active : C !== w : !1;
    }) : !1;
  };
  return /* @__PURE__ */ c.createElement("div", { className: `row${n.equalHeight ? " equal-height" : ""}${n.toggle ? " toggle" : ""}`, key: `row__${r}` }, n.columns.map((f, E) => {
    if (f.width) {
      if (!f.widget)
        return /* @__PURE__ */ c.createElement("div", { key: `row__${r}__col__${E}`, className: `col col-${f.width}` });
      const b = Zn(f.widget, r, d, y, S);
      t && (b.data = t, b.formattedData && (b.formattedData = t));
      const D = d.dashboard.sharedFilters && d.dashboard.sharedFilters.filter((V) => V.setBy === f.widget).length > 0, C = D ? d.dashboard.sharedFilters.filter((V) => V.setBy === f.widget)[0].active : void 0, w = /* @__PURE__ */ c.createElement("a", { href: `#data-table-${b.dataKey}`, className: "margin-left-href" }, b.dataKey, " (Go to Table)"), R = o && b.filterBehavior !== "Apply Button" && (b.type !== "dashboardFilters" || h(b)), F = n.toggle === void 0 || n.toggle && T[E], z = b.type === "dashboardFilters" && b.sharedFilterIndexes && b.sharedFilterIndexes.filter(
        (V) => d.dashboard.sharedFilters[V].showDropdown === !1
      ).length === b.sharedFilterIndexes.length, q = !g && !z;
      return /* @__PURE__ */ c.createElement(
        "div",
        {
          key: `vis__${r}__${E}`,
          className: `col-12 col-md-${f.width}${F ? "" : " d-none"}${R ? " hide-parent-visualization" : q ? " mb-4" : ""}`
        },
        n.toggle && !R && /* @__PURE__ */ c.createElement(
          bl,
          {
            row: n,
            visualizations: d.visualizations,
            active: T.indexOf(!0),
            setToggled: p
          }
        ),
        /* @__PURE__ */ c.createElement(
          $l,
          {
            allExpanded: e,
            currentViewport: m,
            groupName: a,
            hideVisualization: R,
            row: n
          },
          b.type === "chart" && /* @__PURE__ */ c.createElement(
            nn,
            {
              key: f.widget,
              config: b,
              dashboardConfig: d,
              isEditor: !1,
              setConfig: (V) => {
                s(f.widget, V);
              },
              setSharedFilter: D ? i : void 0,
              isDashboard: !0,
              link: d.table && d.table.show && d.datasets && b.table && b.table.showDataTableLink ? w : void 0,
              configUrl: void 0,
              setEditing: void 0,
              hostname: void 0,
              setSharedFilterValue: void 0
            }
          ),
          b.type === "map" && /* @__PURE__ */ c.createElement(
            sn,
            {
              key: f.widget,
              config: b,
              isEditor: !1,
              setConfig: (V) => {
                s(f.widget, V);
              },
              showLoader: !1,
              setSharedFilter: D ? i : void 0,
              setSharedFilterValue: C,
              isDashboard: !0,
              link: d.table && d.table.show && d.datasets && b.table && b.table.showDataTableLink ? w : void 0
            }
          ),
          b.type === "data-bite" && /* @__PURE__ */ c.createElement(
            on,
            {
              key: f.widget,
              config: b,
              isEditor: !1,
              setConfig: (V) => {
                s(f.widget, V);
              },
              isDashboard: !0
            }
          ),
          b.type === "waffle-chart" && /* @__PURE__ */ c.createElement(
            ln,
            {
              key: f.widget,
              config: b,
              isEditor: !1,
              setConfig: (V) => {
                s(f.widget, V);
              },
              isDashboard: !0,
              configUrl: d.table && d.table.show && d.datasets && b.table && b.table.showDataTableLink ? w : void 0
            }
          ),
          b.type === "markup-include" && /* @__PURE__ */ c.createElement(
            cn,
            {
              key: f.widget,
              config: b,
              configUrl: void 0,
              isDashboard: !0,
              isEditor: !1,
              setConfig: (V) => {
                s(f.widget, V);
              }
            }
          ),
          b.type === "filtered-text" && /* @__PURE__ */ c.createElement(
            Ln,
            {
              key: f.widget,
              config: b,
              isEditor: !1,
              setConfig: (V) => {
                s(f.widget, V);
              },
              isDashboard: !0,
              configUrl: void 0
            }
          ),
          b.type === "dashboardFilters" && /* @__PURE__ */ c.createElement(
            Wn,
            {
              setConfig: (V) => {
                s(f.widget, V);
              },
              key: f.widget,
              visualizationConfig: b,
              apiFilterDropdowns: l,
              currentViewport: m
            }
          ),
          b.type === "table" && /* @__PURE__ */ c.createElement(
            Mt,
            {
              key: f.widget,
              updateConfig: (V) => {
                s(f.widget, V);
              },
              visualizationKey: f.widget,
              config: b,
              viewport: m
            }
          ),
          b.type === "footnotes" && /* @__PURE__ */ c.createElement(
            Ke,
            {
              key: f.widget,
              visualizationKey: f.widget,
              config: b,
              viewport: m
            }
          )
        )
      );
    }
    return /* @__PURE__ */ c.createElement(c.Fragment, { key: `vis__${r}__${E}` });
  }), n.footnotesId && !o ? /* @__PURE__ */ c.createElement(
    Ke,
    {
      isEditor: !1,
      visualizationKey: n.footnotesId,
      config: u,
      viewport: m
    }
  ) : null);
}, Xa = function(e = " ", t = "") {
  return this.split(e).map((a) => a.charAt(0).toUpperCase() + a.slice(1)).join(t);
}, Bl = (e, t, a) => {
  let n = !1;
  return e.find((r) => {
    if (r.type === "urlfilter" && !Array.isArray(r.active) && r.filterBy === "File Name")
      return n = !0, !0;
  }), Object.keys(a).forEach((r) => {
    decodeURIComponent(a[r]) !== t[r] && (n = !0);
  }), n;
}, Ya = ({ visualizations: e, datasets: t, rows: a }) => {
  const n = Object.values(e).map((i) => i.dataKey), r = a.map((i) => i.dataKey), o = I.uniq([...n, ...r]);
  return Object.keys(t).filter((i) => o.includes(i));
}, Vl = (e, t, a) => {
  const n = Object.keys(e).flatMap((i) => {
    const s = e[i];
    return s === void 0 ? [] : typeof s == "string" && s.match(/undefined/) ? [] : Array.isArray(s) ? s.map((l) => ({ key: i, value: l })) : { key: i, value: s };
  }), r = t.origin + t.pathname;
  let o = `${r}${Ct(r, n)}`;
  if (a !== "") {
    const i = t.pathname.split(".").pop(), s = t.pathname.substring(0, t.pathname.lastIndexOf("/"));
    o = `${t.origin}${s}/${a}.${i}${Ct(
      r,
      n
    )}`;
  }
  return o;
}, Ul = (e, t, a) => {
  const n = {
    "Remove Spaces": "",
    "Keep Spaces": " ",
    "Replace With Underscore": "_"
  };
  let r = e;
  return t.datasetKey === a && (t.fileName ? r = Xa.call(
    String(t.fileName),
    " ",
    n[t.whitespaceReplacement ?? "Keep Spaces"]
  ) : r = t.active), r != null && r.includes("${query}") && (r = r.replace(
    "${query}",
    Xa.call(
      String(t.active),
      " ",
      n[t.whitespaceReplacement ?? "Keep Spaces"]
    )
  )), r;
}, zl = (e, t) => Object.keys(e).reduce((a, n) => {
  const r = e[n].dataKey;
  return t[r] && (a[n].formattedData = t[r]), a;
}, I.cloneDeep(e)), Hl = (e, t, a, n) => {
  var o, i;
  if (!e.usedBy || !e.usedBy.length)
    return !0;
  const r = (o = e.usedBy) == null ? void 0 : o.map((s) => a[s] || n[s]);
  return (i = e.usedBy) == null || i.forEach((s) => {
    if (n[s] && n[s].footnotesId)
      return r.push(a[n[s].footnotesId]);
  }), r == null ? void 0 : r.some((s) => (s == null ? void 0 : s.dataKey) === t);
}, jl = ({ setAllExpanded: e }) => /* @__PURE__ */ React.createElement("div", { className: "d-block " }, /* @__PURE__ */ React.createElement("div", { className: "d-flex flex-row-reverse mb-2" }, /* @__PURE__ */ React.createElement("button", { className: "btn expand-collapse-buttons", onClick: () => e(!1) }, "- Collapse All"), /* @__PURE__ */ React.createElement("button", { className: "btn expand-collapse-buttons me-2", onClick: () => e(!0) }, "+ Expand All"))), ql = (e, t, a, n) => {
  const r = (o, i, s, l = 50) => {
    if (!o)
      return;
    const m = o.map((p, u) => u), g = s ? m : n;
    o = o.map(
      (p, u) => {
        var h;
        return Za(
          u,
          i[(h = p.apiFilter) == null ? void 0 : h.apiEndpoint],
          o,
          g
        );
      }
    );
    const d = o.filter((p) => p.apiFilter), S = new Map(d.map((p) => [p.apiFilter.apiEndpoint, p.apiFilter])), y = Nl(o, i), T = Object.values(y).reduce(
      (p, [u]) => ({ ...p, [u]: null }),
      {}
    );
    a((p) => ({ ...p, ...T }));
    const O = I.cloneDeep(i);
    return Promise.all(
      Object.keys(y).map(
        (p) => new Promise((u) => {
          fetch(p).then((h) => h.json()).then((h) => {
            Array.isArray(h) || console.error("COVE only supports response data in the shape Array<Object>");
            const [f, E] = y[p], b = S.get(f), D = kl(h, b);
            O[f] = D;
            const C = Za(
              E,
              D,
              o,
              g
            );
            o[E] = C;
          }).catch(() => {
            t({
              type: "ADD_ERROR_MESSAGE",
              payload: "There was a problem returning data. Please try again."
            }), u({ error: !0 });
          }).finally(() => {
            u({ error: !1 });
          });
        })
      )
    ).then((p) => {
      const u = p.some(({ error: f }) => f), h = o.reduce((f, E, b) => g.includes(b) && !E.active ? Gn(qn(E, o)) ? f : [...f, b] : f, []);
      return u || !h.length || l === 0 ? (a(O), e({ type: "SET_SHARED_FILTERS", payload: o }), o) : r(o, O, s, l - 1);
    });
  };
  return r;
}, Gl = (e, t) => {
  var i;
  const a = !!Pe("cove-auto-load"), n = e.multiDashboards ? e.multiDashboards[e.activeDashboard] : e, r = (i = n.dashboard.sharedFilters) == null ? void 0 : i.some(
    (s) => s.filterBy === "File Name"
  ), o = Object.values(n.visualizations).reduce((s, l) => {
    if (s === !1)
      return s;
    if (l.visualizationType === "dashboardFilters") {
      if (l.filterBehavior === "Apply Button")
        return !1;
      if (l.autoLoad)
        return !0;
    }
    return s;
  }, void 0);
  if (a || o || r || t) {
    const s = n.rows.map((g) => g.dataKey).filter(Boolean);
    return !!Object.values(n.visualizations).map((g) => g.dataKey).filter(Boolean).concat(s).find((g) => {
      var d;
      return !((d = e.datasets[g].data) != null && d.length);
    });
  }
  return !1;
};
function Wl({ initialState: e, isEditor: t = !1, isDebug: a = !1 }) {
  var ce, $t, Bt, Vt, Ut, zt, Ht, jt, qt, Gt, Wt, Qt, Zt;
  const [n, r] = v.useReducer(gl, e), [o, i] = v.useReducer(vl, []), s = v.useContext(rn), [l, m] = v.useState({}), [g, d] = v.useState("lg"), [S] = v.useState(`cove-${Math.random().toString(16).slice(-4)}`), [y, T] = v.useState(!0), [O, p] = v.useState(!1), u = n.tabSelected === "Dashboard Preview", h = v.useMemo(() => {
    const _ = Ya(n.config).map((k) => n.data[k]);
    return _.length ? _.some((k) => k === void 0) : !0;
  }, [n.data]), f = xt(n.config.rows), E = new Se(), b = v.useMemo(() => Object.values(n.config.visualizations).filter((_) => _.type === "dashboardFilters").reduce((_, k) => k.autoLoad ? [..._, ...k.sharedFilterIndexes] : _, []), [n.config.visualizations]), D = ql(
    r,
    i,
    m,
    b
  ), C = async (_) => {
    const k = I.cloneDeep(n.config);
    if (!k.datasets)
      return;
    const U = _ || k.dashboard.sharedFilters, M = Ya(k), A = I.cloneDeep(n.data), $ = I.cloneDeep(k.datasets);
    let G = !1, H = "";
    for (let W = 0; W < M.length; W++) {
      const j = M[W], ue = k.datasets[j];
      if (ue.dataUrl && U) {
        const ve = new URL(ue.runtimeDataUrl || ue.dataUrl, window.location.origin), de = Object.fromEntries(new URLSearchParams(ve.search)), X = {};
        U.forEach((B) => {
          var Q;
          if (B.type === "urlfilter" && Hl(B, j, k.visualizations, k.rows)) {
            if (B.filterBy === "File Name" && (H = Ul(H, B, j)), B.queryParameter && (X[B.queryParameter] ? X[B.queryParameter] = X[B.queryParameter] + B.active : X[B.queryParameter] = B.active), B.setByQueryParameter) {
              const we = Object.fromEntries(new URLSearchParams(window.location.search))[B.setByQueryParameter], Kn = ((Q = B.apiFilter) == null ? void 0 : Q.valueSelector) || B.setByQueryParameter;
              we && (X[Kn] = we);
            }
            B.apiFilter && B.active && (X[B.apiFilter.valueSelector] = B.active, B.apiFilter.subgroupValueSelector && B.subGrouping.active && (X[B.apiFilter.subgroupValueSelector] = B.subGrouping.active));
          }
        });
        const _e = Bl(U, de, X);
        if (_ || _e) {
          G = !0;
          const B = Vl(
            { ...de, ...X },
            ve,
            H
          );
          p(!0), await xe(B).then((Q) => {
            let ne = Q;
            if (Q && ue.dataDescription)
              try {
                ne = E.autoStandardize(ne), ne = E.developerStandardize(ne, ue.dataDescription);
              } catch (we) {
                console.error("Error standardizing data:", we);
              }
            $[j].data = ne, $[j].runtimeDataUrl = B, A[j] = ne;
          }).catch((Q) => {
            console.error(Q), i({
              type: "ADD_ERROR_MESSAGE",
              payload: "There was a problem returning data. Please try again."
            }), $[j].data = [], $[j].runtimeDataUrl = B, A[j] = [];
          });
        }
      }
    }
    const Z = I.pickBy($, (W) => !W.dataUrl);
    if (G || Object.keys(Z).length) {
      const W = Object.keys(Z).reduce((Q, ne) => (Q[ne] = Z[ne].data, Q), {}), j = { ...A, ...W };
      r({ type: "SET_DATA", payload: j });
      const ue = k.dashboard.sharedFilters.reduce((Q, ne, we) => (ne.type === "datafilter" && Q.push(we), Q), []), ve = Object.values(k.visualizations).filter((Q) => Q.type === "dashboardFilters").flatMap((Q) => Q.sharedFilterIndexes).filter((Q) => !ue.includes(Q)), de = Rt(U, j, ve), X = { ...k.dashboard, sharedFilters: de }, _e = Le(
        { ...n, config: { ...n.config, dashboard: X } },
        {},
        j
      );
      r({ type: "SET_FILTERED_DATA", payload: _e });
      const B = zl(k.visualizations, A);
      r({
        type: "SET_CONFIG",
        payload: {
          dashboard: X,
          datasets: $,
          visualizations: B,
          activeDashboard: k.activeDashboard
        }
      }), p(!1);
    }
  }, w = (_, k) => {
    const { config: U, filteredData: M } = I.cloneDeep(n);
    for (let $ = 0; $ < U.dashboard.sharedFilters.length; $++) {
      const G = U.dashboard.sharedFilters[$];
      if (G.setBy === _) {
        G.columnName && (G.active = k[G.columnName]);
        break;
      }
    }
    const A = Le({ ...n, config: U }, M);
    r({ type: "SET_FILTERED_DATA", payload: A }), r({ type: "SET_CONFIG", payload: U }), r({ type: "SET_SHARED_FILTERS", payload: U.dashboard.sharedFilters });
  };
  v.useEffect(() => {
    var M;
    const { config: _ } = n, k = Gl(_, t && !u), U = Rt(_.dashboard.sharedFilters, n.data);
    (M = D(U, l, k)) == null || M.then((A) => {
      A.every((G) => G.type === "datafilter" || G.active) && C(A);
    });
  }, [t, u, (ce = n.config) == null ? void 0 : ce.activeDashboard]);
  const R = (_, k) => {
    const U = I.cloneDeep(n.config), M = I.pick(U, ["visualizations", "multiDashboards"]);
    if (M.visualizations[_] = k, M.visualizations[_].formattedData = U.visualizations[_].formattedData, U.multiDashboards) {
      const A = U.activeDashboard, $ = [...U.multiDashboards], H = { label: $[A].label, visualizations: M.visualizations, ...I.pick(U, ["dashboard", "rows"]) };
      $[A] = H, M.multiDashboards = $;
    }
    r({ type: "SET_CONFIG", payload: M }), t && s.setTempConfig(M);
  }, F = new nr((_) => {
    for (let k of _) {
      let U = rr(k.contentRect.width);
      d(U);
    }
  }), z = v.useCallback((_) => {
    _ !== null && F.observe(_);
  }, []);
  if (n.loading)
    return /* @__PURE__ */ c.createElement(Ot, null);
  let q = null;
  if (t && !u) {
    let _ = !1;
    be(n.config).forEach((k) => {
      var G;
      const U = (G = f[k]) == null ? void 0 : G.row, M = Zn(
        k,
        U,
        n.config,
        n.data,
        n.filteredData
      );
      M.uid = k, M.type === "footnotes" && (M.formattedData = void 0);
      const A = n.config.dashboard.sharedFilters && n.config.dashboard.sharedFilters.filter((H) => H.setBy === k).length > 0, $ = A ? n.config.dashboard.sharedFilters.filter((H) => H.setBy === k)[0].active : void 0;
      if (M.editing) {
        _ = !0;
        const H = (Z) => {
          let W = M.originalFormattedData ? { ...Z, formattedData: M.originalFormattedData } : Z;
          R(k, W);
        };
        switch (M.type) {
          case "chart":
            q = /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement(se, { visualizationKey: k, subEditor: "Chart" }), /* @__PURE__ */ c.createElement(
              nn,
              {
                key: k,
                config: M,
                isEditor: !0,
                isDebug: a,
                setConfig: H,
                setSharedFilter: A ? w : void 0,
                setSharedFilterValue: $,
                dashboardConfig: n.config,
                isDashboard: !0,
                configUrl: void 0,
                setEditing: void 0,
                hostname: void 0,
                link: void 0
              }
            ));
            break;
          case "map":
            q = /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement(se, { visualizationKey: k, subEditor: "Map" }), /* @__PURE__ */ c.createElement(
              sn,
              {
                key: k,
                config: M,
                isEditor: !0,
                isDebug: a,
                setConfig: H,
                setSharedFilter: A ? w : void 0,
                setSharedFilterValue: $,
                isDashboard: !0,
                showLoader: !1,
                dashboardConfig: n.config
              }
            ));
            break;
          case "data-bite":
            q = /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement(se, { visualizationKey: k, subEditor: "Data Bite" }), /* @__PURE__ */ c.createElement(
              on,
              {
                key: k,
                config: { ...M, newViz: !0 },
                isEditor: !0,
                setConfig: H,
                isDashboard: !0
              }
            ));
            break;
          case "waffle-chart":
            q = /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement(se, { visualizationKey: k, subEditor: "Waffle Chart" }), /* @__PURE__ */ c.createElement(
              ln,
              {
                key: k,
                config: M,
                isEditor: !0,
                setConfig: H,
                isDashboard: !0,
                configUrl: void 0
              }
            ));
            break;
          case "markup-include":
            q = /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement(se, { visualizationKey: k, subEditor: "Markup Include" }), /* @__PURE__ */ c.createElement(
              cn,
              {
                key: k,
                config: M,
                isEditor: !0,
                setConfig: H,
                isDashboard: !0,
                configUrl: void 0
              }
            ));
            break;
          case "filtered-text":
            q = /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement(se, { visualizationKey: k, subEditor: "Filtered Text" }), /* @__PURE__ */ c.createElement(
              Ln,
              {
                key: k,
                config: M,
                isEditor: !0,
                setConfig: H,
                isDashboard: !0,
                configUrl: void 0
              }
            ));
            break;
          case "dashboardFilters":
            q = /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement(se, { visualizationKey: k, subEditor: "Filter Dropdowns" }), /* @__PURE__ */ c.createElement(
              Wn,
              {
                isEditor: !0,
                visualizationConfig: M,
                apiFilterDropdowns: l,
                setConfig: H
              }
            ));
            break;
          case "table":
            q = /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement(se, { visualizationKey: k, subEditor: "Table" }), /* @__PURE__ */ c.createElement(
              Mt,
              {
                visualizationKey: k,
                config: M,
                isEditor: !0,
                updateConfig: H
              }
            ));
            break;
          case "footnotes":
            q = /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement(se, { visualizationKey: k, subEditor: "Footnotes" }), /* @__PURE__ */ c.createElement(
              Ke,
              {
                visualizationKey: k,
                config: { ...M, datasets: n.config.datasets },
                isEditor: !0,
                updateConfig: (Z) => H(I.omit(Z, "datasets"))
              }
            ));
            break;
          default:
            q = /* @__PURE__ */ c.createElement(c.Fragment, null);
            break;
        }
      }
    }), _ || (q = /* @__PURE__ */ c.createElement(ei, { backend: xs }, /* @__PURE__ */ c.createElement("div", { className: "header-container" }, /* @__PURE__ */ c.createElement(se, null), /* @__PURE__ */ c.createElement(cl, null)), /* @__PURE__ */ c.createElement("div", { className: "layout-container" }, /* @__PURE__ */ c.createElement(tl, null))));
  } else {
    const { config: _ } = n, { title: k, description: U } = _.dashboard || {}, M = _.rows && _.rows.filter((A) => A.columns.filter(($) => $.widget).length !== 0);
    q = /* @__PURE__ */ c.createElement(c.Fragment, null, t && /* @__PURE__ */ c.createElement(se, null), O && /* @__PURE__ */ c.createElement(Sr, { fullScreen: !0 }), /* @__PURE__ */ c.createElement(Bn, { isEditor: t && !u }), o.map((A, $) => /* @__PURE__ */ c.createElement(
      cr,
      {
        type: "danger",
        onDismiss: () => i({ type: "DISMISS_ERROR_MESSAGE", payload: $ }),
        message: A,
        autoDismiss: !0
      }
    )), /* @__PURE__ */ c.createElement(ye.Responsive, { isEditor: t }, /* @__PURE__ */ c.createElement("div", { className: `cdc-dashboard-inner-container${t ? " is-editor" : ""}` }, /* @__PURE__ */ c.createElement(
      en,
      {
        title: k,
        isDashboard: !0,
        classes: ["dashboard-title", `${_.dashboard.theme ?? "theme-blue"}`]
      }
    ), U && /* @__PURE__ */ c.createElement("div", { className: "subtext mb-3" }, tn(U)), M && M.map((A, $) => {
      if (A.multiVizColumn && (u || !t)) {
        const H = Le(n, I.cloneDeep(n.data))[$] ?? A.formattedData, Z = {};
        return H.forEach((W) => {
          const j = W[A.multiVizColumn];
          Z[j] || (Z[j] = []), Z[j].push(W);
        }), /* @__PURE__ */ c.createElement(c.Fragment, null, !h && A.expandCollapseAllButtons === !0 && /* @__PURE__ */ c.createElement(jl, { setAllExpanded: T }), Object.keys(Z).map((W) => {
          const j = Z[W];
          return /* @__PURE__ */ c.createElement(
            Ka,
            {
              key: `row__${$}__${W}`,
              allExpanded: y,
              filteredDataOverride: j,
              groupName: W,
              row: A,
              rowIndex: $,
              setSharedFilter: w,
              updateChildConfig: R,
              apiFilterDropdowns: l,
              currentViewport: g,
              inNoDataState: h,
              isLastRow: $ === M.length - 1
            }
          );
        }));
      } else
        return /* @__PURE__ */ c.createElement(
          Ka,
          {
            key: `row__${$}`,
            allExpanded: !1,
            groupName: "",
            row: A,
            rowIndex: $,
            setSharedFilter: w,
            updateChildConfig: R,
            apiFilterDropdowns: l,
            currentViewport: g,
            inNoDataState: h,
            isLastRow: $ === M.length - 1
          }
        );
    }), h ? /* @__PURE__ */ c.createElement("div", { className: "mt-5" }, "Please complete your selection to continue.") : /* @__PURE__ */ c.createElement(c.Fragment, null), /* @__PURE__ */ c.createElement("section", { className: "download-buttons" }, (($t = _.table) == null ? void 0 : $t.downloadImageButton) && /* @__PURE__ */ c.createElement(
      ta.Button,
      {
        title: "Download Dashboard as Image",
        type: "image",
        state: _,
        text: "Download Dashboard Image",
        elementToCapture: S
      }
    ), ((Bt = _.table) == null ? void 0 : Bt.downloadPdfButton) && /* @__PURE__ */ c.createElement(
      ta.Button,
      {
        title: "Download Dashboard as PDF",
        type: "pdf",
        state: _,
        text: "Download Dashboard PDF",
        elementToCapture: S
      }
    )), ((Vt = _.table) == null ? void 0 : Vt.show) && _.data && /* @__PURE__ */ c.createElement(
      ht,
      {
        config: _,
        rawData: (zt = (Ut = _.data) == null ? void 0 : Ut[0]) != null && zt.tableData ? (jt = (Ht = _.data) == null ? void 0 : Ht[0]) == null ? void 0 : jt.tableData : _.data,
        runtimeData: (Gt = (qt = _.data) == null ? void 0 : qt[0]) != null && Gt.tableData ? (Qt = (Wt = _.data) == null ? void 0 : Wt[0]) == null ? void 0 : Qt.tableData : _.data || [],
        expandDataTable: _.table.expanded,
        showDownloadButton: _.table.download,
        tableTitle: _.dashboard.title || "",
        viewport: g,
        tabbingId: _.dashboard.title || "",
        outerContainerRef: z,
        imageRef: S,
        isDebug: a,
        isEditor: t
      }
    ), ((Zt = _.table) == null ? void 0 : Zt.show) && _.datasets && Object.keys(_.datasets).map((A) => {
      var Z, W, j, ue, ve;
      const $ = be(_).filter((de) => _.visualizations[de].dataKey === A);
      let G = [];
      (Z = _.dashboard.sharedFilters) == null || Z.forEach((de) => {
        let X = !0;
        $.forEach((_e) => {
          de.usedBy && de.usedBy.indexOf(_e) === -1 && (X = !1);
        }), X && G.push(de);
      });
      const H = G.length > 0 ? Ce(G, _.datasets[A].data) : void 0;
      return /* @__PURE__ */ c.createElement(
        "div",
        {
          className: "multi-table-container",
          id: `data-table-${A}`,
          key: `data-table-${A}`
        },
        /* @__PURE__ */ c.createElement(
          ht,
          {
            config: _,
            dataConfig: _.datasets[A],
            rawData: ((j = (W = _.datasets[A].data) == null ? void 0 : W[0]) == null ? void 0 : j.tableData) || _.datasets[A].data,
            runtimeData: ((ve = (ue = _.datasets[A].data) == null ? void 0 : ue[0]) == null ? void 0 : ve.tableData) || H || _.datasets[A].data || [],
            expandDataTable: _.table.expanded,
            tableTitle: A,
            viewport: g,
            tabbingId: A
          }
        )
      );
    }))));
  }
  const V = ["cdc-open-viz-module", "type-dashboard", `${g}`];
  return /* @__PURE__ */ c.createElement(Ms, null, /* @__PURE__ */ c.createElement(
    ee.Provider,
    {
      value: {
        ...n,
        setParentConfig: s.setTempConfig,
        outerContainerRef: z,
        isDebug: a,
        loadAPIFilters: D,
        setAPIFilterDropdowns: m,
        reloadURLData: C,
        setAPILoading: p
      }
    },
    /* @__PURE__ */ c.createElement(ae.Provider, { value: r }, /* @__PURE__ */ c.createElement("div", { className: V.join(" "), ref: z, "data-download-id": S }, q), /* @__PURE__ */ c.createElement(Us, null))
  ));
}
const Ja = {
  dashboard: {
    theme: "theme-blue",
    sharedFilters: []
  },
  rows: [[{ width: 12 }, {}, {}]],
  visualizations: {},
  table: {
    label: "Data Table",
    show: !0,
    showDownloadUrl: !1,
    showDownloadLinkBelow: !0,
    showVertical: !0
  }
}, Ql = async (e) => {
  let t = e.formattedData || e.data;
  return e.dataUrl && (t = await xe(`${e.dataUrl}`), t = De(t, e.dataDescription)), t;
}, Oc = ({ configUrl: e, isEditor: t, isDebug: a, config: n }) => {
  const [r, o] = v.useState(void 0), i = v.useContext(rn), s = (y) => {
    if (!y.multiDashboards)
      return null;
    const T = It()["cove-tab"];
    return T !== void 0 && Number(T) < y.multiDashboards.length ? Number(T) : 0;
  }, l = (y, T) => {
    const [O, p] = wt(Qe)(y, T), u = un(O);
    return { ...Qe, config: u, filteredData: p, data: T };
  }, m = async () => {
    const y = n || i.config || await (await fetch(e)).json(), T = s(y), { newConfig: O, datasets: p } = T !== null ? await S(y, T) : await d(y);
    o(l(O, p));
  };
  v.useEffect(() => {
    m();
  }, []);
  const g = (y) => {
    let T = { ...y };
    const O = Object.keys(y.datasets).reduce((p, u) => {
      const h = y.datasets[u];
      return p[u] = h.formattedData || h.data, p;
    }, {});
    return be(T).forEach((p) => {
      const u = O[T.visualizations[p].dataKey];
      u && (T.visualizations[p].formattedData = u);
    }), Object.keys(O).forEach((p) => {
      T.datasets[p].data = O[p];
    }), { newConfig: T, datasets: O };
  }, d = async (y) => {
    let T = { ...Ja, ...y };
    if (y.datasets)
      return g(T);
    {
      const O = T.dataFileName || "backwards-compatibility", p = await Ql(y), u = {};
      if (u[O] = {
        data: p,
        dataDescription: T.dataDescription
      }, T.datasets = u, be(T).forEach((E) => {
        const b = { dataKey: O, ...I.pick(T, "dataDescription", "formattedData") };
        T.visualizations[E] = { ...T.visualizations[E], ...b };
      }), T = { ...T, ...{
        data: [],
        dataUrl: "",
        dataFileName: "",
        dataFileSourceType: "",
        dataDescription: {},
        formattedData: []
      } }, T.dashboard.filters) {
        const E = { ...T.dashboard };
        E.sharedFilters || (E.sharedFilters = []);
        const b = E.filters.map((D) => ({ ...D, key: D.label, showDropdown: !0, usedBy: be(T) }));
        E.sharedFilters = [...E.sharedFilters, ...b], T.dashboard = { ...E, filters: void 0 };
      }
      const f = { [O]: p };
      return { newConfig: T, datasets: f };
    }
  }, S = async (y, T) => {
    const O = y.multiDashboards[T], p = {
      ...Ja,
      ...y,
      ...O,
      multiDashboards: y.multiDashboards,
      activeDashboard: T
    };
    return g(p);
  };
  return r ? /* @__PURE__ */ React.createElement(Wl, { isEditor: t, isDebug: a, initialState: r }) : /* @__PURE__ */ React.createElement(Ot, null);
};
export {
  Ms as G,
  Oc as M,
  Us as O,
  pt as a,
  zn as d
};
