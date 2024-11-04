import { r as y, R as r } from "./storybook-index-45401197.es.js";
import { c as Ua, A as za } from "./storybook-InputToggle-1920f351.es.js";
import { a as Ha, g as ja } from "./storybook-isSolr-cb863e7a.es.js";
import { T as Xn, H as Yn } from "./storybook-index-e5bf02db.es.js";
import { f as Ce } from "./storybook-fetchRemoteData-9428020c.es.js";
import { E as Kn, L as Dt } from "./storybook-Loading-f180d060.es.js";
import { D as be, A as qa, a as jt, b as qt, c as Gt, d as Wt } from "./storybook-DataTransform-8cd95c19.es.js";
import { V as Ga, a as Wa, D as Za, F as Qa, f as Xa, C as Jn } from "./storybook-CdcChart-67ecd6f6.es.js";
import { C as ea } from "./storybook-CdcDataBite-069e01d5.es.js";
import { C as ta, A as Ya } from "./storybook-CdcMap-5ccd4f88.es.js";
import { C as na } from "./storybook-CdcWaffleChart-29ecb91a.es.js";
import { C as aa } from "./storybook-CdcMarkupInclude-9c0d799e.es.js";
import { A as Le, a as Ka, b as Ke, c as Je, d as et, e as tt } from "./storybook-Accordion-f47153d9.es.js";
import { I as Ja, a as _e } from "./storybook-editor-dff456fd.es.js";
import { B as er } from "./storybook-Button-d74e310e.es.js";
import { a as P } from "./storybook-Icon-73ec66ec.es.js";
import { T as x } from "./storybook-Tooltip-4102bd69.es.js";
import { I as de } from "./storybook-InputSelect-20478396.es.js";
import { L as he, u as tr, c as ra } from "./storybook-coveUpdateWorker-2249800a.es.js";
import { u as St } from "./storybook-updateFieldFactory-c006040a.es.js";
import { D as nr } from "./storybook-DataDesigner-a81779cb.es.js";
import { P as ke } from "./storybook-index-43433e35.es.js";
import { C as Me, T as Z, S as ar } from "./storybook-Inputs-776ab3df.es.js";
import { g as rr } from "./storybook-_commonjsHelpers-c5d32002.es.js";
import { _ as A } from "./storybook-lodash-a4231e1c.es.js";
import { u as or, g as oa, f as Zt, F as ir, a as Ge, b as ia, c as lr } from "./storybook-Filters-a07e1940.es.js";
import { D as ut, M as Qt } from "./storybook-DataTable-c585f042.es.js";
import { F as te, D as sr } from "./storybook-DashboardFilters-2d094f5f.es.js";
import { M as Xt } from "./storybook-MultiSelect-25c4ae51.es.js";
import { F as cr } from "./storybook-Footnotes-6f80714a.es.js";
import { j as ur } from "./storybook-jsx-runtime-36872362.es.js";
var la = y.createContext({
  dragDropManager: void 0
}), ne;
(function(e) {
  e.SOURCE = "SOURCE", e.TARGET = "TARGET";
})(ne || (ne = {}));
function L(e, t) {
  for (var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
    a[o - 2] = arguments[o];
  if (process.env.NODE_ENV !== "production" && t === void 0)
    throw new Error("invariant requires an error message argument");
  if (!e) {
    var i;
    if (t === void 0)
      i = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var l = 0;
      i = new Error(t.replace(/%s/g, function() {
        return a[l++];
      })), i.name = "Invariant Violation";
    }
    throw i.framesToPop = 1, i;
  }
}
var wt = "dnd-core/INIT_COORDS", We = "dnd-core/BEGIN_DRAG", Tt = "dnd-core/PUBLISH_DRAG_SOURCE", Ze = "dnd-core/HOVER", Qe = "dnd-core/DROP", Xe = "dnd-core/END_DRAG";
function Yt(e, t) {
  return {
    type: wt,
    payload: {
      sourceClientOffset: t || null,
      clientOffset: e || null
    }
  };
}
function $e(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? $e = function(n) {
    return typeof n;
  } : $e = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, $e(e);
}
function dr(e, t, n) {
  return t.split(".").reduce(function(a, o) {
    return a && a[o] ? a[o] : n || null;
  }, e);
}
function fr(e, t) {
  return e.filter(function(n) {
    return n !== t;
  });
}
function sa(e) {
  return $e(e) === "object";
}
function mr(e, t) {
  var n = /* @__PURE__ */ new Map(), a = function(l) {
    n.set(l, n.has(l) ? n.get(l) + 1 : 1);
  };
  e.forEach(a), t.forEach(a);
  var o = [];
  return n.forEach(function(i, l) {
    i === 1 && o.push(l);
  }), o;
}
function pr(e, t) {
  return e.filter(function(n) {
    return t.indexOf(n) > -1;
  });
}
var gr = {
  type: wt,
  payload: {
    clientOffset: null,
    sourceClientOffset: null
  }
};
function hr(e) {
  return function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      publishSource: !0
    }, o = a.publishSource, i = o === void 0 ? !0 : o, l = a.clientOffset, s = a.getSourceClientOffset, c = e.getMonitor(), d = e.getRegistry();
    e.dispatch(Yt(l)), vr(n, c, d);
    var p = Er(n, c);
    if (p === null) {
      e.dispatch(gr);
      return;
    }
    var f = null;
    if (l) {
      if (!s)
        throw new Error("getSourceClientOffset must be defined");
      yr(s), f = s(p);
    }
    e.dispatch(Yt(l, f));
    var v = d.getSource(p), g = v.beginDrag(c, p);
    if (g != null) {
      br(g), d.pinSource(p);
      var T = d.getSourceType(p);
      return {
        type: We,
        payload: {
          itemType: T,
          item: g,
          sourceId: p,
          clientOffset: l || null,
          sourceClientOffset: f || null,
          isSourcePublic: !!i
        }
      };
    }
  };
}
function vr(e, t, n) {
  L(!t.isDragging(), "Cannot call beginDrag while dragging."), e.forEach(function(a) {
    L(n.getSource(a), "Expected sourceIds to be registered.");
  });
}
function yr(e) {
  L(typeof e == "function", "When clientOffset is provided, getSourceClientOffset must be a function.");
}
function br(e) {
  L(sa(e), "Item must be an object.");
}
function Er(e, t) {
  for (var n = null, a = e.length - 1; a >= 0; a--)
    if (t.canDragSource(e[a])) {
      n = e[a];
      break;
    }
  return n;
}
function Dr(e) {
  return function() {
    var n = e.getMonitor();
    if (n.isDragging())
      return {
        type: Tt
      };
  };
}
function dt(e, t) {
  return t === null ? e === null : Array.isArray(e) ? e.some(function(n) {
    return n === t;
  }) : e === t;
}
function Sr(e) {
  return function(n) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = a.clientOffset;
    wr(n);
    var i = n.slice(0), l = e.getMonitor(), s = e.getRegistry();
    Tr(i, l, s);
    var c = l.getItemType();
    return Cr(i, s, c), Or(i, l, s), {
      type: Ze,
      payload: {
        targetIds: i,
        clientOffset: o || null
      }
    };
  };
}
function wr(e) {
  L(Array.isArray(e), "Expected targetIds to be an array.");
}
function Tr(e, t, n) {
  L(t.isDragging(), "Cannot call hover while not dragging."), L(!t.didDrop(), "Cannot call hover after drop.");
  for (var a = 0; a < e.length; a++) {
    var o = e[a];
    L(e.lastIndexOf(o) === a, "Expected targetIds to be unique in the passed array.");
    var i = n.getTarget(o);
    L(i, "Expected targetIds to be registered.");
  }
}
function Cr(e, t, n) {
  for (var a = e.length - 1; a >= 0; a--) {
    var o = e[a], i = t.getTargetType(o);
    dt(i, n) || e.splice(a, 1);
  }
}
function Or(e, t, n) {
  e.forEach(function(a) {
    var o = n.getTarget(a);
    o.hover(t, a);
  });
}
function Kt(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function Jt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Kt(Object(n), !0).forEach(function(a) {
      Ir(e, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Kt(Object(n)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return e;
}
function Ir(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function _r(e) {
  return function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = e.getMonitor(), o = e.getRegistry();
    kr(a);
    var i = Ar(a);
    i.forEach(function(l, s) {
      var c = Nr(l, s, o, a), d = {
        type: Qe,
        payload: {
          dropResult: Jt(Jt({}, n), c)
        }
      };
      e.dispatch(d);
    });
  };
}
function kr(e) {
  L(e.isDragging(), "Cannot call drop while not dragging."), L(!e.didDrop(), "Cannot call drop twice during one drag operation.");
}
function Nr(e, t, n, a) {
  var o = n.getTarget(e), i = o ? o.drop(a, e) : void 0;
  return Fr(i), typeof i > "u" && (i = t === 0 ? {} : a.getDropResult()), i;
}
function Fr(e) {
  L(typeof e > "u" || sa(e), "Drop result must either be an object or undefined.");
}
function Ar(e) {
  var t = e.getTargetIds().filter(e.canDropOnTarget, e);
  return t.reverse(), t;
}
function Lr(e) {
  return function() {
    var n = e.getMonitor(), a = e.getRegistry();
    Pr(n);
    var o = n.getSourceId();
    if (o != null) {
      var i = a.getSource(o, !0);
      i.endDrag(n, o), a.unpinSource();
    }
    return {
      type: Xe
    };
  };
}
function Pr(e) {
  L(e.isDragging(), "Cannot call endDrag while not dragging.");
}
function Rr(e) {
  return {
    beginDrag: hr(e),
    publishDragSource: Dr(e),
    hover: Sr(e),
    drop: _r(e),
    endDrag: Lr(e)
  };
}
function xr(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function en(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function Mr(e, t, n) {
  return t && en(e.prototype, t), n && en(e, n), e;
}
function Ne(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var $r = /* @__PURE__ */ function() {
  function e(t, n) {
    var a = this;
    xr(this, e), Ne(this, "store", void 0), Ne(this, "monitor", void 0), Ne(this, "backend", void 0), Ne(this, "isSetUp", !1), Ne(this, "handleRefCountChange", function() {
      var o = a.store.getState().refCount > 0;
      a.backend && (o && !a.isSetUp ? (a.backend.setup(), a.isSetUp = !0) : !o && a.isSetUp && (a.backend.teardown(), a.isSetUp = !1));
    }), this.store = t, this.monitor = n, t.subscribe(this.handleRefCountChange);
  }
  return Mr(e, [{
    key: "receiveBackend",
    value: function(n) {
      this.backend = n;
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
      var n = this, a = this.store.dispatch;
      function o(l) {
        return function() {
          for (var s = arguments.length, c = new Array(s), d = 0; d < s; d++)
            c[d] = arguments[d];
          var p = l.apply(n, c);
          typeof p < "u" && a(p);
        };
      }
      var i = Rr(this);
      return Object.keys(i).reduce(function(l, s) {
        var c = i[s];
        return l[s] = o(c), l;
      }, {});
    }
  }, {
    key: "dispatch",
    value: function(n) {
      this.store.dispatch(n);
    }
  }]), e;
}(), Br = function(t, n) {
  return t === n;
};
function Vr(e, t) {
  return !e && !t ? !0 : !e || !t ? !1 : e.x === t.x && e.y === t.y;
}
function Ur(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Br;
  if (e.length !== t.length)
    return !1;
  for (var a = 0; a < e.length; ++a)
    if (!n(e[a], t[a]))
      return !1;
  return !0;
}
function tn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function nn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? tn(Object(n), !0).forEach(function(a) {
      zr(e, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tn(Object(n)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return e;
}
function zr(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var an = {
  initialSourceClientOffset: null,
  initialClientOffset: null,
  clientOffset: null
};
function Hr() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : an, t = arguments.length > 1 ? arguments[1] : void 0, n = t.payload;
  switch (t.type) {
    case wt:
    case We:
      return {
        initialSourceClientOffset: n.sourceClientOffset,
        initialClientOffset: n.clientOffset,
        clientOffset: n.clientOffset
      };
    case Ze:
      return Vr(e.clientOffset, n.clientOffset) ? e : nn(nn({}, e), {}, {
        clientOffset: n.clientOffset
      });
    case Xe:
    case Qe:
      return an;
    default:
      return e;
  }
}
var Ct = "dnd-core/ADD_SOURCE", Ot = "dnd-core/ADD_TARGET", It = "dnd-core/REMOVE_SOURCE", Ye = "dnd-core/REMOVE_TARGET";
function jr(e) {
  return {
    type: Ct,
    payload: {
      sourceId: e
    }
  };
}
function qr(e) {
  return {
    type: Ot,
    payload: {
      targetId: e
    }
  };
}
function Gr(e) {
  return {
    type: It,
    payload: {
      sourceId: e
    }
  };
}
function Wr(e) {
  return {
    type: Ye,
    payload: {
      targetId: e
    }
  };
}
function rn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function ee(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? rn(Object(n), !0).forEach(function(a) {
      Zr(e, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : rn(Object(n)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return e;
}
function Zr(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Qr = {
  itemType: null,
  item: null,
  sourceId: null,
  targetIds: [],
  dropResult: null,
  didDrop: !1,
  isSourcePublic: null
};
function Xr() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Qr, t = arguments.length > 1 ? arguments[1] : void 0, n = t.payload;
  switch (t.type) {
    case We:
      return ee(ee({}, e), {}, {
        itemType: n.itemType,
        item: n.item,
        sourceId: n.sourceId,
        isSourcePublic: n.isSourcePublic,
        dropResult: null,
        didDrop: !1
      });
    case Tt:
      return ee(ee({}, e), {}, {
        isSourcePublic: !0
      });
    case Ze:
      return ee(ee({}, e), {}, {
        targetIds: n.targetIds
      });
    case Ye:
      return e.targetIds.indexOf(n.targetId) === -1 ? e : ee(ee({}, e), {}, {
        targetIds: fr(e.targetIds, n.targetId)
      });
    case Qe:
      return ee(ee({}, e), {}, {
        dropResult: n.dropResult,
        didDrop: !0,
        targetIds: []
      });
    case Xe:
      return ee(ee({}, e), {}, {
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
function Yr() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, t = arguments.length > 1 ? arguments[1] : void 0;
  switch (t.type) {
    case Ct:
    case Ot:
      return e + 1;
    case It:
    case Ye:
      return e - 1;
    default:
      return e;
  }
}
var He = [], _t = [];
He.__IS_NONE__ = !0;
_t.__IS_ALL__ = !0;
function Kr(e, t) {
  if (e === He)
    return !1;
  if (e === _t || typeof t > "u")
    return !0;
  var n = pr(t, e);
  return n.length > 0;
}
function Jr() {
  var e = arguments.length > 1 ? arguments[1] : void 0;
  switch (e.type) {
    case Ze:
      break;
    case Ct:
    case Ot:
    case Ye:
    case It:
      return He;
    case We:
    case Tt:
    case Xe:
    case Qe:
    default:
      return _t;
  }
  var t = e.payload, n = t.targetIds, a = n === void 0 ? [] : n, o = t.prevTargetIds, i = o === void 0 ? [] : o, l = mr(a, i), s = l.length > 0 || !Ur(a, i);
  if (!s)
    return He;
  var c = i[i.length - 1], d = a[a.length - 1];
  return c !== d && (c && l.push(c), d && l.push(d)), l;
}
function eo() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
  return e + 1;
}
function on(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function ln(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? on(Object(n), !0).forEach(function(a) {
      to(e, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : on(Object(n)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return e;
}
function to(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function no() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
  return {
    dirtyHandlerIds: Jr(e.dirtyHandlerIds, {
      type: t.type,
      payload: ln(ln({}, t.payload), {}, {
        prevTargetIds: dr(e, "dragOperation.targetIds", [])
      })
    }),
    dragOffset: Hr(e.dragOffset, t),
    refCount: Yr(e.refCount, t),
    dragOperation: Xr(e.dragOperation, t),
    stateId: eo(e.stateId)
  };
}
function ao(e, t) {
  return {
    x: e.x + t.x,
    y: e.y + t.y
  };
}
function ca(e, t) {
  return {
    x: e.x - t.x,
    y: e.y - t.y
  };
}
function ro(e) {
  var t = e.clientOffset, n = e.initialClientOffset, a = e.initialSourceClientOffset;
  return !t || !n || !a ? null : ca(ao(t, a), n);
}
function oo(e) {
  var t = e.clientOffset, n = e.initialClientOffset;
  return !t || !n ? null : ca(t, n);
}
function io(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function sn(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function lo(e, t, n) {
  return t && sn(e.prototype, t), n && sn(e, n), e;
}
function cn(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var so = /* @__PURE__ */ function() {
  function e(t, n) {
    io(this, e), cn(this, "store", void 0), cn(this, "registry", void 0), this.store = t, this.registry = n;
  }
  return lo(e, [{
    key: "subscribeToStateChange",
    value: function(n) {
      var a = this, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        handlerIds: void 0
      }, i = o.handlerIds;
      L(typeof n == "function", "listener must be a function."), L(typeof i > "u" || Array.isArray(i), "handlerIds, when specified, must be an array of strings.");
      var l = this.store.getState().stateId, s = function() {
        var d = a.store.getState(), p = d.stateId;
        try {
          var f = p === l || p === l + 1 && !Kr(d.dirtyHandlerIds, i);
          f || n();
        } finally {
          l = p;
        }
      };
      return this.store.subscribe(s);
    }
  }, {
    key: "subscribeToOffsetChange",
    value: function(n) {
      var a = this;
      L(typeof n == "function", "listener must be a function.");
      var o = this.store.getState().dragOffset, i = function() {
        var s = a.store.getState().dragOffset;
        s !== o && (o = s, n());
      };
      return this.store.subscribe(i);
    }
  }, {
    key: "canDragSource",
    value: function(n) {
      if (!n)
        return !1;
      var a = this.registry.getSource(n);
      return L(a, "Expected to find a valid source. sourceId=".concat(n)), this.isDragging() ? !1 : a.canDrag(this, n);
    }
  }, {
    key: "canDropOnTarget",
    value: function(n) {
      if (!n)
        return !1;
      var a = this.registry.getTarget(n);
      if (L(a, "Expected to find a valid target. targetId=".concat(n)), !this.isDragging() || this.didDrop())
        return !1;
      var o = this.registry.getTargetType(n), i = this.getItemType();
      return dt(o, i) && a.canDrop(this, n);
    }
  }, {
    key: "isDragging",
    value: function() {
      return !!this.getItemType();
    }
  }, {
    key: "isDraggingSource",
    value: function(n) {
      if (!n)
        return !1;
      var a = this.registry.getSource(n, !0);
      if (L(a, "Expected to find a valid source. sourceId=".concat(n)), !this.isDragging() || !this.isSourcePublic())
        return !1;
      var o = this.registry.getSourceType(n), i = this.getItemType();
      return o !== i ? !1 : a.isDragging(this, n);
    }
  }, {
    key: "isOverTarget",
    value: function(n) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        shallow: !1
      };
      if (!n)
        return !1;
      var o = a.shallow;
      if (!this.isDragging())
        return !1;
      var i = this.registry.getTargetType(n), l = this.getItemType();
      if (l && !dt(i, l))
        return !1;
      var s = this.getTargetIds();
      if (!s.length)
        return !1;
      var c = s.indexOf(n);
      return o ? c === s.length - 1 : c > -1;
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
      return ro(this.store.getState().dragOffset);
    }
  }, {
    key: "getDifferenceFromInitialOffset",
    value: function() {
      return oo(this.store.getState().dragOffset);
    }
  }]), e;
}(), co = 0;
function uo() {
  return co++;
}
function Be(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Be = function(n) {
    return typeof n;
  } : Be = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Be(e);
}
function fo(e) {
  L(typeof e.canDrag == "function", "Expected canDrag to be a function."), L(typeof e.beginDrag == "function", "Expected beginDrag to be a function."), L(typeof e.endDrag == "function", "Expected endDrag to be a function.");
}
function mo(e) {
  L(typeof e.canDrop == "function", "Expected canDrop to be a function."), L(typeof e.hover == "function", "Expected hover to be a function."), L(typeof e.drop == "function", "Expected beginDrag to be a function.");
}
function ft(e, t) {
  if (t && Array.isArray(e)) {
    e.forEach(function(n) {
      return ft(n, !1);
    });
    return;
  }
  L(typeof e == "string" || Be(e) === "symbol", t ? "Type can only be a string, a symbol, or an array of either." : "Type can only be a string or a symbol.");
}
const un = typeof global < "u" ? global : self, ua = un.MutationObserver || un.WebKitMutationObserver;
function da(e) {
  return function() {
    const n = setTimeout(o, 0), a = setInterval(o, 50);
    function o() {
      clearTimeout(n), clearInterval(a), e();
    }
  };
}
function po(e) {
  let t = 1;
  const n = new ua(e), a = document.createTextNode("");
  return n.observe(a, {
    characterData: !0
  }), function() {
    t = -t, a.data = t;
  };
}
const go = typeof ua == "function" ? (
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
  po
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
  da
);
class ho {
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
    const { queue: n, requestFlush: a } = this;
    n.length || (a(), this.flushing = !0), n[n.length] = t;
  }
  constructor() {
    this.queue = [], this.pendingErrors = [], this.flushing = !1, this.index = 0, this.capacity = 1024, this.flush = () => {
      const { queue: t } = this;
      for (; this.index < t.length; ) {
        const n = this.index;
        if (this.index++, t[n].call(), this.index > this.capacity) {
          for (let a = 0, o = t.length - this.index; a < o; a++)
            t[a] = t[a + this.index];
          t.length -= this.index, this.index = 0;
        }
      }
      t.length = 0, this.index = 0, this.flushing = !1;
    }, this.registerPendingError = (t) => {
      this.pendingErrors.push(t), this.requestErrorThrow();
    }, this.requestFlush = go(this.flush), this.requestErrorThrow = da(() => {
      if (this.pendingErrors.length)
        throw this.pendingErrors.shift();
    });
  }
}
class vo {
  call() {
    try {
      this.task && this.task();
    } catch (t) {
      this.onError(t);
    } finally {
      this.task = null, this.release(this);
    }
  }
  constructor(t, n) {
    this.onError = t, this.release = n, this.task = null;
  }
}
class yo {
  create(t) {
    const n = this.freeTasks, a = n.length ? n.pop() : new vo(
      this.onError,
      (o) => n[n.length] = o
    );
    return a.task = t, a;
  }
  constructor(t) {
    this.onError = t, this.freeTasks = [];
  }
}
const fa = new ho(), bo = new yo(fa.registerPendingError);
function Eo(e) {
  fa.enqueueTask(bo.create(e));
}
function Do(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function dn(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function So(e, t, n) {
  return t && dn(e.prototype, t), n && dn(e, n), e;
}
function Ee(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function wo(e, t) {
  return Io(e) || Oo(e, t) || Co(e, t) || To();
}
function To() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Co(e, t) {
  if (e) {
    if (typeof e == "string")
      return fn(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return fn(e, t);
  }
}
function fn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, a = new Array(t); n < t; n++)
    a[n] = e[n];
  return a;
}
function Oo(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var a = [], o = !0, i = !1, l, s;
    try {
      for (n = n.call(e); !(o = (l = n.next()).done) && (a.push(l.value), !(t && a.length === t)); o = !0)
        ;
    } catch (c) {
      i = !0, s = c;
    } finally {
      try {
        !o && n.return != null && n.return();
      } finally {
        if (i)
          throw s;
      }
    }
    return a;
  }
}
function Io(e) {
  if (Array.isArray(e))
    return e;
}
function _o(e) {
  var t = uo().toString();
  switch (e) {
    case ne.SOURCE:
      return "S".concat(t);
    case ne.TARGET:
      return "T".concat(t);
    default:
      throw new Error("Unknown Handler Role: ".concat(e));
  }
}
function mn(e) {
  switch (e[0]) {
    case "S":
      return ne.SOURCE;
    case "T":
      return ne.TARGET;
    default:
      L(!1, "Cannot parse handler ID: ".concat(e));
  }
}
function pn(e, t) {
  var n = e.entries(), a = !1;
  do {
    var o = n.next(), i = o.done, l = wo(o.value, 2), s = l[1];
    if (s === t)
      return !0;
    a = !!i;
  } while (!a);
  return !1;
}
var ko = /* @__PURE__ */ function() {
  function e(t) {
    Do(this, e), Ee(this, "types", /* @__PURE__ */ new Map()), Ee(this, "dragSources", /* @__PURE__ */ new Map()), Ee(this, "dropTargets", /* @__PURE__ */ new Map()), Ee(this, "pinnedSourceId", null), Ee(this, "pinnedSource", null), Ee(this, "store", void 0), this.store = t;
  }
  return So(e, [{
    key: "addSource",
    value: function(n, a) {
      ft(n), fo(a);
      var o = this.addHandler(ne.SOURCE, n, a);
      return this.store.dispatch(jr(o)), o;
    }
  }, {
    key: "addTarget",
    value: function(n, a) {
      ft(n, !0), mo(a);
      var o = this.addHandler(ne.TARGET, n, a);
      return this.store.dispatch(qr(o)), o;
    }
  }, {
    key: "containsHandler",
    value: function(n) {
      return pn(this.dragSources, n) || pn(this.dropTargets, n);
    }
  }, {
    key: "getSource",
    value: function(n) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      L(this.isSourceId(n), "Expected a valid source ID.");
      var o = a && n === this.pinnedSourceId, i = o ? this.pinnedSource : this.dragSources.get(n);
      return i;
    }
  }, {
    key: "getTarget",
    value: function(n) {
      return L(this.isTargetId(n), "Expected a valid target ID."), this.dropTargets.get(n);
    }
  }, {
    key: "getSourceType",
    value: function(n) {
      return L(this.isSourceId(n), "Expected a valid source ID."), this.types.get(n);
    }
  }, {
    key: "getTargetType",
    value: function(n) {
      return L(this.isTargetId(n), "Expected a valid target ID."), this.types.get(n);
    }
  }, {
    key: "isSourceId",
    value: function(n) {
      var a = mn(n);
      return a === ne.SOURCE;
    }
  }, {
    key: "isTargetId",
    value: function(n) {
      var a = mn(n);
      return a === ne.TARGET;
    }
  }, {
    key: "removeSource",
    value: function(n) {
      var a = this;
      L(this.getSource(n), "Expected an existing source."), this.store.dispatch(Gr(n)), Eo(function() {
        a.dragSources.delete(n), a.types.delete(n);
      });
    }
  }, {
    key: "removeTarget",
    value: function(n) {
      L(this.getTarget(n), "Expected an existing target."), this.store.dispatch(Wr(n)), this.dropTargets.delete(n), this.types.delete(n);
    }
  }, {
    key: "pinSource",
    value: function(n) {
      var a = this.getSource(n);
      L(a, "Expected an existing source."), this.pinnedSourceId = n, this.pinnedSource = a;
    }
  }, {
    key: "unpinSource",
    value: function() {
      L(this.pinnedSource, "No source is pinned at the time."), this.pinnedSourceId = null, this.pinnedSource = null;
    }
  }, {
    key: "addHandler",
    value: function(n, a, o) {
      var i = _o(n);
      return this.types.set(i, a), n === ne.SOURCE ? this.dragSources.set(i, o) : n === ne.TARGET && this.dropTargets.set(i, o), i;
    }
  }]), e;
}();
function No(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, o = Fo(a), i = new so(o, new ko(o)), l = new $r(o, i), s = e(l, t, n);
  return l.receiveBackend(s), l;
}
function Fo(e) {
  var t = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION__;
  return Ua(no, e && t && t({
    name: "dnd-core",
    instanceId: "dnd-core"
  }));
}
var Ao = ["children"];
function Lo(e, t) {
  return Mo(e) || xo(e, t) || Ro(e, t) || Po();
}
function Po() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ro(e, t) {
  if (e) {
    if (typeof e == "string")
      return gn(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return gn(e, t);
  }
}
function gn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, a = new Array(t); n < t; n++)
    a[n] = e[n];
  return a;
}
function xo(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var a = [], o = !0, i = !1, l, s;
    try {
      for (n = n.call(e); !(o = (l = n.next()).done) && (a.push(l.value), !(t && a.length === t)); o = !0)
        ;
    } catch (c) {
      i = !0, s = c;
    } finally {
      try {
        !o && n.return != null && n.return();
      } finally {
        if (i)
          throw s;
      }
    }
    return a;
  }
}
function Mo(e) {
  if (Array.isArray(e))
    return e;
}
function $o(e, t) {
  if (e == null)
    return {};
  var n = Bo(e, t), a, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      a = i[o], !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (n[a] = e[a]);
  }
  return n;
}
function Bo(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), o, i;
  for (i = 0; i < a.length; i++)
    o = a[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var hn = 0, Ve = Symbol.for("__REACT_DND_CONTEXT_INSTANCE__"), Vo = y.memo(function(t) {
  var n = t.children, a = $o(t, Ao), o = Uo(a), i = Lo(o, 2), l = i[0], s = i[1];
  return y.useEffect(function() {
    if (s) {
      var c = ma();
      return ++hn, function() {
        --hn === 0 && (c[Ve] = null);
      };
    }
  }, []), ur(la.Provider, Object.assign({
    value: l
  }, {
    children: n
  }), void 0);
});
function Uo(e) {
  if ("manager" in e) {
    var t = {
      dragDropManager: e.manager
    };
    return [t, !1];
  }
  var n = zo(e.backend, e.context, e.options, e.debugMode), a = !e.context;
  return [n, a];
}
function zo(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ma(), n = arguments.length > 2 ? arguments[2] : void 0, a = arguments.length > 3 ? arguments[3] : void 0, o = t;
  return o[Ve] || (o[Ve] = {
    dragDropManager: No(e, t, n, a)
  }), o[Ve];
}
function ma() {
  return typeof global < "u" ? global : window;
}
function Ho(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function vn(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function jo(e, t, n) {
  return t && vn(e.prototype, t), n && vn(e, n), e;
}
function yn(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var nt = !1, at = !1, qo = /* @__PURE__ */ function() {
  function e(t) {
    Ho(this, e), yn(this, "internalMonitor", void 0), yn(this, "sourceId", null), this.internalMonitor = t.getMonitor();
  }
  return jo(e, [{
    key: "receiveHandlerId",
    value: function(n) {
      this.sourceId = n;
    }
  }, {
    key: "getHandlerId",
    value: function() {
      return this.sourceId;
    }
  }, {
    key: "canDrag",
    value: function() {
      L(!nt, "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
      try {
        return nt = !0, this.internalMonitor.canDragSource(this.sourceId);
      } finally {
        nt = !1;
      }
    }
  }, {
    key: "isDragging",
    value: function() {
      if (!this.sourceId)
        return !1;
      L(!at, "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
      try {
        return at = !0, this.internalMonitor.isDraggingSource(this.sourceId);
      } finally {
        at = !1;
      }
    }
  }, {
    key: "subscribeToStateChange",
    value: function(n, a) {
      return this.internalMonitor.subscribeToStateChange(n, a);
    }
  }, {
    key: "isDraggingSource",
    value: function(n) {
      return this.internalMonitor.isDraggingSource(n);
    }
  }, {
    key: "isOverTarget",
    value: function(n, a) {
      return this.internalMonitor.isOverTarget(n, a);
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
    value: function(n) {
      return this.internalMonitor.subscribeToOffsetChange(n);
    }
  }, {
    key: "canDragSource",
    value: function(n) {
      return this.internalMonitor.canDragSource(n);
    }
  }, {
    key: "canDropOnTarget",
    value: function(n) {
      return this.internalMonitor.canDropOnTarget(n);
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
function Go(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function bn(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function Wo(e, t, n) {
  return t && bn(e.prototype, t), n && bn(e, n), e;
}
function En(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var rt = !1, Zo = /* @__PURE__ */ function() {
  function e(t) {
    Go(this, e), En(this, "internalMonitor", void 0), En(this, "targetId", null), this.internalMonitor = t.getMonitor();
  }
  return Wo(e, [{
    key: "receiveHandlerId",
    value: function(n) {
      this.targetId = n;
    }
  }, {
    key: "getHandlerId",
    value: function() {
      return this.targetId;
    }
  }, {
    key: "subscribeToStateChange",
    value: function(n, a) {
      return this.internalMonitor.subscribeToStateChange(n, a);
    }
  }, {
    key: "canDrop",
    value: function() {
      if (!this.targetId)
        return !1;
      L(!rt, "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");
      try {
        return rt = !0, this.internalMonitor.canDropOnTarget(this.targetId);
      } finally {
        rt = !1;
      }
    }
  }, {
    key: "isOver",
    value: function(n) {
      return this.targetId ? this.internalMonitor.isOverTarget(this.targetId, n) : !1;
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
function Qo(e) {
  if (typeof e.type != "string") {
    var t = e.type.displayName || e.type.name || "the component";
    throw new Error("Only native element nodes can now be passed to React DnD connectors." + "You can either wrap ".concat(t, " into a <div>, or turn it into a ") + "drag source or a drop target itself.");
  }
}
function Xo(e) {
  return function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    if (!y.isValidElement(t)) {
      var a = t;
      return e(a, n), a;
    }
    var o = t;
    Qo(o);
    var i = n ? function(l) {
      return e(l, n);
    } : e;
    return Yo(o, i);
  };
}
function pa(e) {
  var t = {};
  return Object.keys(e).forEach(function(n) {
    var a = e[n];
    if (n.endsWith("Ref"))
      t[n] = e[n];
    else {
      var o = Xo(a);
      t[n] = function() {
        return o;
      };
    }
  }), t;
}
function Dn(e, t) {
  typeof e == "function" ? e(t) : e.current = t;
}
function Yo(e, t) {
  var n = e.ref;
  return L(typeof n != "string", "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"), n ? y.cloneElement(e, {
    ref: function(o) {
      Dn(n, o), Dn(t, o);
    }
  }) : y.cloneElement(e, {
    ref: t
  });
}
function Ue(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ue = function(n) {
    return typeof n;
  } : Ue = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Ue(e);
}
function mt(e) {
  return (
    // eslint-disable-next-line no-prototype-builtins
    e !== null && Ue(e) === "object" && Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function pt(e, t, n, a) {
  var o = n ? n.call(a, e, t) : void 0;
  if (o !== void 0)
    return !!o;
  if (e === t)
    return !0;
  if (typeof e != "object" || !e || typeof t != "object" || !t)
    return !1;
  var i = Object.keys(e), l = Object.keys(t);
  if (i.length !== l.length)
    return !1;
  for (var s = Object.prototype.hasOwnProperty.bind(t), c = 0; c < i.length; c++) {
    var d = i[c];
    if (!s(d))
      return !1;
    var p = e[d], f = t[d];
    if (o = n ? n.call(a, p, f, d) : void 0, o === !1 || o === void 0 && p !== f)
      return !1;
  }
  return !0;
}
function Ko(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Sn(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function Jo(e, t, n) {
  return t && Sn(e.prototype, t), n && Sn(e, n), e;
}
function q(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var ei = /* @__PURE__ */ function() {
  function e(t) {
    var n = this;
    Ko(this, e), q(this, "hooks", pa({
      dragSource: function(o, i) {
        n.clearDragSource(), n.dragSourceOptions = i || null, mt(o) ? n.dragSourceRef = o : n.dragSourceNode = o, n.reconnectDragSource();
      },
      dragPreview: function(o, i) {
        n.clearDragPreview(), n.dragPreviewOptions = i || null, mt(o) ? n.dragPreviewRef = o : n.dragPreviewNode = o, n.reconnectDragPreview();
      }
    })), q(this, "handlerId", null), q(this, "dragSourceRef", null), q(this, "dragSourceNode", void 0), q(this, "dragSourceOptionsInternal", null), q(this, "dragSourceUnsubscribe", void 0), q(this, "dragPreviewRef", null), q(this, "dragPreviewNode", void 0), q(this, "dragPreviewOptionsInternal", null), q(this, "dragPreviewUnsubscribe", void 0), q(this, "lastConnectedHandlerId", null), q(this, "lastConnectedDragSource", null), q(this, "lastConnectedDragSourceOptions", null), q(this, "lastConnectedDragPreview", null), q(this, "lastConnectedDragPreviewOptions", null), q(this, "backend", void 0), this.backend = t;
  }
  return Jo(e, [{
    key: "receiveHandlerId",
    value: function(n) {
      this.handlerId !== n && (this.handlerId = n, this.reconnect());
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
    set: function(n) {
      this.dragSourceOptionsInternal = n;
    }
  }, {
    key: "dragPreviewOptions",
    get: function() {
      return this.dragPreviewOptionsInternal;
    },
    set: function(n) {
      this.dragPreviewOptionsInternal = n;
    }
  }, {
    key: "reconnect",
    value: function() {
      this.reconnectDragSource(), this.reconnectDragPreview();
    }
  }, {
    key: "reconnectDragSource",
    value: function() {
      var n = this.dragSource, a = this.didHandlerIdChange() || this.didConnectedDragSourceChange() || this.didDragSourceOptionsChange();
      if (a && this.disconnectDragSource(), !!this.handlerId) {
        if (!n) {
          this.lastConnectedDragSource = n;
          return;
        }
        a && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragSource = n, this.lastConnectedDragSourceOptions = this.dragSourceOptions, this.dragSourceUnsubscribe = this.backend.connectDragSource(this.handlerId, n, this.dragSourceOptions));
      }
    }
  }, {
    key: "reconnectDragPreview",
    value: function() {
      var n = this.dragPreview, a = this.didHandlerIdChange() || this.didConnectedDragPreviewChange() || this.didDragPreviewOptionsChange();
      if (a && this.disconnectDragPreview(), !!this.handlerId) {
        if (!n) {
          this.lastConnectedDragPreview = n;
          return;
        }
        a && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragPreview = n, this.lastConnectedDragPreviewOptions = this.dragPreviewOptions, this.dragPreviewUnsubscribe = this.backend.connectDragPreview(this.handlerId, n, this.dragPreviewOptions));
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
      return !pt(this.lastConnectedDragSourceOptions, this.dragSourceOptions);
    }
  }, {
    key: "didDragPreviewOptionsChange",
    value: function() {
      return !pt(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions);
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
function ti(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function wn(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function ni(e, t, n) {
  return t && wn(e.prototype, t), n && wn(e, n), e;
}
function ie(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var ai = /* @__PURE__ */ function() {
  function e(t) {
    var n = this;
    ti(this, e), ie(this, "hooks", pa({
      dropTarget: function(o, i) {
        n.clearDropTarget(), n.dropTargetOptions = i, mt(o) ? n.dropTargetRef = o : n.dropTargetNode = o, n.reconnect();
      }
    })), ie(this, "handlerId", null), ie(this, "dropTargetRef", null), ie(this, "dropTargetNode", void 0), ie(this, "dropTargetOptionsInternal", null), ie(this, "unsubscribeDropTarget", void 0), ie(this, "lastConnectedHandlerId", null), ie(this, "lastConnectedDropTarget", null), ie(this, "lastConnectedDropTargetOptions", null), ie(this, "backend", void 0), this.backend = t;
  }
  return ni(e, [{
    key: "connectTarget",
    get: function() {
      return this.dropTarget;
    }
  }, {
    key: "reconnect",
    value: function() {
      var n = this.didHandlerIdChange() || this.didDropTargetChange() || this.didOptionsChange();
      n && this.disconnectDropTarget();
      var a = this.dropTarget;
      if (this.handlerId) {
        if (!a) {
          this.lastConnectedDropTarget = a;
          return;
        }
        n && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDropTarget = a, this.lastConnectedDropTargetOptions = this.dropTargetOptions, this.unsubscribeDropTarget = this.backend.connectDropTarget(this.handlerId, a, this.dropTargetOptions));
      }
    }
  }, {
    key: "receiveHandlerId",
    value: function(n) {
      n !== this.handlerId && (this.handlerId = n, this.reconnect());
    }
  }, {
    key: "dropTargetOptions",
    get: function() {
      return this.dropTargetOptionsInternal;
    },
    set: function(n) {
      this.dropTargetOptionsInternal = n;
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
      return !pt(this.lastConnectedDropTargetOptions, this.dropTargetOptions);
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
function ri(e, t, n) {
  var a = n.getRegistry(), o = a.addTarget(e, t);
  return [o, function() {
    return a.removeTarget(o);
  }];
}
function oi(e, t, n) {
  var a = n.getRegistry(), o = a.addSource(e, t);
  return [o, function() {
    return a.removeSource(o);
  }];
}
var ye = typeof window < "u" ? y.useLayoutEffect : y.useEffect;
function ze(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ze = function(n) {
    return typeof n;
  } : ze = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, ze(e);
}
function ii(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Tn(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function li(e, t, n) {
  return t && Tn(e.prototype, t), n && Tn(e, n), e;
}
function ot(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var si = /* @__PURE__ */ function() {
  function e(t, n, a) {
    ii(this, e), ot(this, "spec", void 0), ot(this, "monitor", void 0), ot(this, "connector", void 0), this.spec = t, this.monitor = n, this.connector = a;
  }
  return li(e, [{
    key: "beginDrag",
    value: function() {
      var n, a = this.spec, o = this.monitor, i = null;
      return ze(a.item) === "object" ? i = a.item : typeof a.item == "function" ? i = a.item(o) : i = {}, (n = i) !== null && n !== void 0 ? n : null;
    }
  }, {
    key: "canDrag",
    value: function() {
      var n = this.spec, a = this.monitor;
      return typeof n.canDrag == "boolean" ? n.canDrag : typeof n.canDrag == "function" ? n.canDrag(a) : !0;
    }
  }, {
    key: "isDragging",
    value: function(n, a) {
      var o = this.spec, i = this.monitor, l = o.isDragging;
      return l ? l(i) : a === n.getSourceId();
    }
  }, {
    key: "endDrag",
    value: function() {
      var n = this.spec, a = this.monitor, o = this.connector, i = n.end;
      i && i(a.getItem(), a), o.reconnect();
    }
  }]), e;
}();
function ci(e, t, n) {
  var a = y.useMemo(function() {
    return new si(e, t, n);
  }, [t, n]);
  return y.useEffect(function() {
    a.spec = e;
  }, [e]), a;
}
function Oe() {
  var e = y.useContext(la), t = e.dragDropManager;
  return L(t != null, "Expected drag drop context"), t;
}
function ui(e) {
  return y.useMemo(function() {
    var t = e.type;
    return L(t != null, "spec.type must be defined"), t;
  }, [e]);
}
function di(e, t) {
  return gi(e) || pi(e, t) || mi(e, t) || fi();
}
function fi() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function mi(e, t) {
  if (e) {
    if (typeof e == "string")
      return Cn(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Cn(e, t);
  }
}
function Cn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, a = new Array(t); n < t; n++)
    a[n] = e[n];
  return a;
}
function pi(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var a = [], o = !0, i = !1, l, s;
    try {
      for (n = n.call(e); !(o = (l = n.next()).done) && (a.push(l.value), !(t && a.length === t)); o = !0)
        ;
    } catch (c) {
      i = !0, s = c;
    } finally {
      try {
        !o && n.return != null && n.return();
      } finally {
        if (i)
          throw s;
      }
    }
    return a;
  }
}
function gi(e) {
  if (Array.isArray(e))
    return e;
}
function hi(e, t, n) {
  var a = Oe(), o = ci(e, t, n), i = ui(e);
  ye(function() {
    if (i != null) {
      var s = oi(i, o, a), c = di(s, 2), d = c[0], p = c[1];
      return t.receiveHandlerId(d), n.receiveHandlerId(d), p;
    }
  }, [a, t, n, o, i]);
}
function vi(e) {
  return Di(e) || Ei(e) || bi(e) || yi();
}
function yi() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function bi(e, t) {
  if (e) {
    if (typeof e == "string")
      return gt(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return gt(e, t);
  }
}
function Ei(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Di(e) {
  if (Array.isArray(e))
    return gt(e);
}
function gt(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, a = new Array(t); n < t; n++)
    a[n] = e[n];
  return a;
}
function ga(e, t) {
  var n = vi(t || []);
  return t == null && typeof e != "function" && n.push(e), y.useMemo(function() {
    return typeof e == "function" ? e() : e;
  }, n);
}
function Si() {
  var e = Oe();
  return y.useMemo(function() {
    return new qo(e);
  }, [e]);
}
function wi(e, t) {
  var n = Oe(), a = y.useMemo(function() {
    return new ei(n.getBackend());
  }, [n]);
  return ye(function() {
    return a.dragSourceOptions = e || null, a.reconnect(), function() {
      return a.disconnectDragSource();
    };
  }, [a, e]), ye(function() {
    return a.dragPreviewOptions = t || null, a.reconnect(), function() {
      return a.disconnectDragPreview();
    };
  }, [a, t]), a;
}
var Ti = function e(t, n) {
  if (t === n)
    return !0;
  if (t && n && typeof t == "object" && typeof n == "object") {
    if (t.constructor !== n.constructor)
      return !1;
    var a, o, i;
    if (Array.isArray(t)) {
      if (a = t.length, a != n.length)
        return !1;
      for (o = a; o-- !== 0; )
        if (!e(t[o], n[o]))
          return !1;
      return !0;
    }
    if (t.constructor === RegExp)
      return t.source === n.source && t.flags === n.flags;
    if (t.valueOf !== Object.prototype.valueOf)
      return t.valueOf() === n.valueOf();
    if (t.toString !== Object.prototype.toString)
      return t.toString() === n.toString();
    if (i = Object.keys(t), a = i.length, a !== Object.keys(n).length)
      return !1;
    for (o = a; o-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(n, i[o]))
        return !1;
    for (o = a; o-- !== 0; ) {
      var l = i[o];
      if (!e(t[l], n[l]))
        return !1;
    }
    return !0;
  }
  return t !== t && n !== n;
};
const Ci = /* @__PURE__ */ rr(Ti);
function Oi(e, t) {
  return Ni(e) || ki(e, t) || _i(e, t) || Ii();
}
function Ii() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _i(e, t) {
  if (e) {
    if (typeof e == "string")
      return On(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return On(e, t);
  }
}
function On(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, a = new Array(t); n < t; n++)
    a[n] = e[n];
  return a;
}
function ki(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var a = [], o = !0, i = !1, l, s;
    try {
      for (n = n.call(e); !(o = (l = n.next()).done) && (a.push(l.value), !(t && a.length === t)); o = !0)
        ;
    } catch (c) {
      i = !0, s = c;
    } finally {
      try {
        !o && n.return != null && n.return();
      } finally {
        if (i)
          throw s;
      }
    }
    return a;
  }
}
function Ni(e) {
  if (Array.isArray(e))
    return e;
}
function Fi(e, t, n) {
  var a = y.useState(function() {
    return t(e);
  }), o = Oi(a, 2), i = o[0], l = o[1], s = y.useCallback(function() {
    var c = t(e);
    Ci(i, c) || (l(c), n && n());
  }, [i, e, n]);
  return ye(s), [i, s];
}
function Ai(e, t) {
  return xi(e) || Ri(e, t) || Pi(e, t) || Li();
}
function Li() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Pi(e, t) {
  if (e) {
    if (typeof e == "string")
      return In(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return In(e, t);
  }
}
function In(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, a = new Array(t); n < t; n++)
    a[n] = e[n];
  return a;
}
function Ri(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var a = [], o = !0, i = !1, l, s;
    try {
      for (n = n.call(e); !(o = (l = n.next()).done) && (a.push(l.value), !(t && a.length === t)); o = !0)
        ;
    } catch (c) {
      i = !0, s = c;
    } finally {
      try {
        !o && n.return != null && n.return();
      } finally {
        if (i)
          throw s;
      }
    }
    return a;
  }
}
function xi(e) {
  if (Array.isArray(e))
    return e;
}
function Mi(e, t, n) {
  var a = Fi(e, t, n), o = Ai(a, 2), i = o[0], l = o[1];
  return ye(function() {
    var c = e.getHandlerId();
    if (c != null)
      return e.subscribeToStateChange(l, {
        handlerIds: [c]
      });
  }, [e, l]), i;
}
function ha(e, t, n) {
  return Mi(t, e || function() {
    return {};
  }, function() {
    return n.reconnect();
  });
}
function $i(e) {
  return y.useMemo(function() {
    return e.hooks.dragSource();
  }, [e]);
}
function Bi(e) {
  return y.useMemo(function() {
    return e.hooks.dragPreview();
  }, [e]);
}
function Vi(e, t) {
  var n = ga(e, t);
  L(!n.begin, "useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");
  var a = Si(), o = wi(n.options, n.previewOptions);
  return hi(n, a, o), [ha(n.collect, a, o), $i(o), Bi(o)];
}
function Ui(e) {
  var t = e.accept;
  return y.useMemo(function() {
    return L(e.accept != null, "accept must be defined"), Array.isArray(t) ? t : [t];
  }, [t]);
}
function zi(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function _n(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function Hi(e, t, n) {
  return t && _n(e.prototype, t), n && _n(e, n), e;
}
function kn(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var ji = /* @__PURE__ */ function() {
  function e(t, n) {
    zi(this, e), kn(this, "spec", void 0), kn(this, "monitor", void 0), this.spec = t, this.monitor = n;
  }
  return Hi(e, [{
    key: "canDrop",
    value: function() {
      var n = this.spec, a = this.monitor;
      return n.canDrop ? n.canDrop(a.getItem(), a) : !0;
    }
  }, {
    key: "hover",
    value: function() {
      var n = this.spec, a = this.monitor;
      n.hover && n.hover(a.getItem(), a);
    }
  }, {
    key: "drop",
    value: function() {
      var n = this.spec, a = this.monitor;
      if (n.drop)
        return n.drop(a.getItem(), a);
    }
  }]), e;
}();
function qi(e, t) {
  var n = y.useMemo(function() {
    return new ji(e, t);
  }, [t]);
  return y.useEffect(function() {
    n.spec = e;
  }, [e]), n;
}
function Gi(e, t) {
  return Xi(e) || Qi(e, t) || Zi(e, t) || Wi();
}
function Wi() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Zi(e, t) {
  if (e) {
    if (typeof e == "string")
      return Nn(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Nn(e, t);
  }
}
function Nn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, a = new Array(t); n < t; n++)
    a[n] = e[n];
  return a;
}
function Qi(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var a = [], o = !0, i = !1, l, s;
    try {
      for (n = n.call(e); !(o = (l = n.next()).done) && (a.push(l.value), !(t && a.length === t)); o = !0)
        ;
    } catch (c) {
      i = !0, s = c;
    } finally {
      try {
        !o && n.return != null && n.return();
      } finally {
        if (i)
          throw s;
      }
    }
    return a;
  }
}
function Xi(e) {
  if (Array.isArray(e))
    return e;
}
function Yi(e, t, n) {
  var a = Oe(), o = qi(e, t), i = Ui(e);
  ye(function() {
    var s = ri(i, o, a), c = Gi(s, 2), d = c[0], p = c[1];
    return t.receiveHandlerId(d), n.receiveHandlerId(d), p;
  }, [a, t, o, n, i.map(function(l) {
    return l.toString();
  }).join("|")]);
}
function Ki() {
  var e = Oe();
  return y.useMemo(function() {
    return new Zo(e);
  }, [e]);
}
function Ji(e) {
  var t = Oe(), n = y.useMemo(function() {
    return new ai(t.getBackend());
  }, [t]);
  return ye(function() {
    return n.dropTargetOptions = e || null, n.reconnect(), function() {
      return n.disconnectDropTarget();
    };
  }, [e]), n;
}
function el(e) {
  return y.useMemo(function() {
    return e.hooks.dropTarget();
  }, [e]);
}
function tl(e, t) {
  var n = ga(e, t), a = Ki(), o = Ji(n.options);
  return Yi(n, a, o), [ha(n.collect, a, o), el(o)];
}
function va(e) {
  var t = null, n = function() {
    return t == null && (t = e()), t;
  };
  return n;
}
function nl(e, t) {
  return e.filter(function(n) {
    return n !== t;
  });
}
function al(e, t) {
  var n = /* @__PURE__ */ new Set(), a = function(l) {
    return n.add(l);
  };
  e.forEach(a), t.forEach(a);
  var o = [];
  return n.forEach(function(i) {
    return o.push(i);
  }), o;
}
function rl(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Fn(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function ol(e, t, n) {
  return t && Fn(e.prototype, t), n && Fn(e, n), e;
}
function An(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var il = /* @__PURE__ */ function() {
  function e(t) {
    rl(this, e), An(this, "entered", []), An(this, "isNodeInDocument", void 0), this.isNodeInDocument = t;
  }
  return ol(e, [{
    key: "enter",
    value: function(n) {
      var a = this, o = this.entered.length, i = function(s) {
        return a.isNodeInDocument(s) && (!s.contains || s.contains(n));
      };
      return this.entered = al(this.entered.filter(i), [n]), o === 0 && this.entered.length > 0;
    }
  }, {
    key: "leave",
    value: function(n) {
      var a = this.entered.length;
      return this.entered = nl(this.entered.filter(this.isNodeInDocument), n), a > 0 && this.entered.length === 0;
    }
  }, {
    key: "reset",
    value: function() {
      this.entered = [];
    }
  }]), e;
}(), ll = va(function() {
  return /firefox/i.test(navigator.userAgent);
}), ya = va(function() {
  return !!window.safari;
});
function sl(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ln(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function cl(e, t, n) {
  return t && Ln(e.prototype, t), n && Ln(e, n), e;
}
function Fe(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Pn = /* @__PURE__ */ function() {
  function e(t, n) {
    sl(this, e), Fe(this, "xs", void 0), Fe(this, "ys", void 0), Fe(this, "c1s", void 0), Fe(this, "c2s", void 0), Fe(this, "c3s", void 0);
    for (var a = t.length, o = [], i = 0; i < a; i++)
      o.push(i);
    o.sort(function(D, I) {
      return t[D] < t[I] ? -1 : 1;
    });
    for (var l = [], s = [], c, d, p = 0; p < a - 1; p++)
      c = t[p + 1] - t[p], d = n[p + 1] - n[p], l.push(c), s.push(d / c);
    for (var f = [s[0]], v = 0; v < l.length - 1; v++) {
      var g = s[v], T = s[v + 1];
      if (g * T <= 0)
        f.push(0);
      else {
        c = l[v];
        var O = l[v + 1], h = c + O;
        f.push(3 * h / ((h + O) / g + (h + c) / T));
      }
    }
    f.push(s[s.length - 1]);
    for (var S = [], u = [], m, b = 0; b < f.length - 1; b++) {
      m = s[b];
      var w = f[b], E = 1 / l[b], C = w + f[b + 1] - m - m;
      S.push((m - w - C) * E), u.push(C * E * E);
    }
    this.xs = t, this.ys = n, this.c1s = f, this.c2s = S, this.c3s = u;
  }
  return cl(e, [{
    key: "interpolate",
    value: function(n) {
      var a = this.xs, o = this.ys, i = this.c1s, l = this.c2s, s = this.c3s, c = a.length - 1;
      if (n === a[c])
        return o[c];
      for (var d = 0, p = s.length - 1, f; d <= p; ) {
        f = Math.floor(0.5 * (d + p));
        var v = a[f];
        if (v < n)
          d = f + 1;
        else if (v > n)
          p = f - 1;
        else
          return o[f];
      }
      c = Math.max(0, p);
      var g = n - a[c], T = g * g;
      return o[c] + i[c] * g + l[c] * T + s[c] * g * T;
    }
  }]), e;
}(), ul = 1;
function ba(e) {
  var t = e.nodeType === ul ? e : e.parentElement;
  if (!t)
    return null;
  var n = t.getBoundingClientRect(), a = n.top, o = n.left;
  return {
    x: o,
    y: a
  };
}
function Pe(e) {
  return {
    x: e.clientX,
    y: e.clientY
  };
}
function dl(e) {
  var t;
  return e.nodeName === "IMG" && (ll() || !((t = document.documentElement) !== null && t !== void 0 && t.contains(e)));
}
function fl(e, t, n, a) {
  var o = e ? t.width : n, i = e ? t.height : a;
  return ya() && e && (i /= window.devicePixelRatio, o /= window.devicePixelRatio), {
    dragPreviewWidth: o,
    dragPreviewHeight: i
  };
}
function ml(e, t, n, a, o) {
  var i = dl(t), l = i ? e : t, s = ba(l), c = {
    x: n.x - s.x,
    y: n.y - s.y
  }, d = e.offsetWidth, p = e.offsetHeight, f = a.anchorX, v = a.anchorY, g = fl(i, t, d, p), T = g.dragPreviewWidth, O = g.dragPreviewHeight, h = function() {
    var C = new Pn([0, 0.5, 1], [
      // Dock to the top
      c.y,
      // Align at the center
      c.y / p * O,
      // Dock to the bottom
      c.y + O - p
    ]), D = C.interpolate(v);
    return ya() && i && (D += (window.devicePixelRatio - 1) * O), D;
  }, S = function() {
    var C = new Pn([0, 0.5, 1], [
      // Dock to the left
      c.x,
      // Align at the center
      c.x / d * T,
      // Dock to the right
      c.x + T - d
    ]);
    return C.interpolate(f);
  }, u = o.offsetX, m = o.offsetY, b = u === 0 || u, w = m === 0 || m;
  return {
    x: b ? u : S(),
    y: w ? m : h()
  };
}
var Ea = "__NATIVE_FILE__", Da = "__NATIVE_URL__", Sa = "__NATIVE_TEXT__", wa = "__NATIVE_HTML__";
const Rn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FILE: Ea,
  HTML: wa,
  TEXT: Sa,
  URL: Da
}, Symbol.toStringTag, { value: "Module" }));
function it(e, t, n) {
  var a = t.reduce(function(o, i) {
    return o || e.getData(i);
  }, "");
  return a ?? n;
}
var De;
function Re(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var ht = (De = {}, Re(De, Ea, {
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
}), Re(De, wa, {
  exposeProperties: {
    html: function(t, n) {
      return it(t, n, "");
    },
    dataTransfer: function(t) {
      return t;
    }
  },
  matchesTypes: ["Html", "text/html"]
}), Re(De, Da, {
  exposeProperties: {
    urls: function(t, n) {
      return it(t, n, "").split(`
`);
    },
    dataTransfer: function(t) {
      return t;
    }
  },
  matchesTypes: ["Url", "text/uri-list"]
}), Re(De, Sa, {
  exposeProperties: {
    text: function(t, n) {
      return it(t, n, "");
    },
    dataTransfer: function(t) {
      return t;
    }
  },
  matchesTypes: ["Text", "text/plain"]
}), De);
function pl(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function xn(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function gl(e, t, n) {
  return t && xn(e.prototype, t), n && xn(e, n), e;
}
function Mn(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var hl = /* @__PURE__ */ function() {
  function e(t) {
    pl(this, e), Mn(this, "item", void 0), Mn(this, "config", void 0), this.config = t, this.item = {}, this.initializeExposedProperties();
  }
  return gl(e, [{
    key: "initializeExposedProperties",
    value: function() {
      var n = this;
      Object.keys(this.config.exposeProperties).forEach(function(a) {
        Object.defineProperty(n.item, a, {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return console.warn(`Browser doesn't allow reading "`.concat(a, '" until the drop event.')), null;
          }
        });
      });
    }
  }, {
    key: "loadDataTransfer",
    value: function(n) {
      var a = this;
      if (n) {
        var o = {};
        Object.keys(this.config.exposeProperties).forEach(function(i) {
          o[i] = {
            value: a.config.exposeProperties[i](n, a.config.matchesTypes),
            configurable: !0,
            enumerable: !0
          };
        }), Object.defineProperties(this.item, o);
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
    value: function(n, a) {
      return a === n.getSourceId();
    }
  }, {
    key: "endDrag",
    value: function() {
    }
  }]), e;
}();
function vl(e, t) {
  var n = new hl(ht[e]);
  return n.loadDataTransfer(t), n;
}
function lt(e) {
  if (!e)
    return null;
  var t = Array.prototype.slice.call(e.types || []);
  return Object.keys(ht).filter(function(n) {
    var a = ht[n].matchesTypes;
    return a.some(function(o) {
      return t.indexOf(o) > -1;
    });
  })[0] || null;
}
function yl(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function $n(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function bl(e, t, n) {
  return t && $n(e.prototype, t), n && $n(e, n), e;
}
function st(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var El = /* @__PURE__ */ function() {
  function e(t, n) {
    yl(this, e), st(this, "ownerDocument", null), st(this, "globalContext", void 0), st(this, "optionsArgs", void 0), this.globalContext = t, this.optionsArgs = n;
  }
  return bl(e, [{
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
      var n;
      return (n = this.globalContext) !== null && n !== void 0 && n.document ? this.globalContext.document : this.window ? this.window.document : void 0;
    }
  }, {
    key: "rootElement",
    get: function() {
      var n;
      return ((n = this.optionsArgs) === null || n === void 0 ? void 0 : n.rootElement) || this.window;
    }
  }]), e;
}();
function Bn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function Vn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Bn(Object(n), !0).forEach(function(a) {
      R(e, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Bn(Object(n)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return e;
}
function Dl(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Un(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function Sl(e, t, n) {
  return t && Un(e.prototype, t), n && Un(e, n), e;
}
function R(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var wl = /* @__PURE__ */ function() {
  function e(t, n, a) {
    var o = this;
    Dl(this, e), R(this, "options", void 0), R(this, "actions", void 0), R(this, "monitor", void 0), R(this, "registry", void 0), R(this, "enterLeaveCounter", void 0), R(this, "sourcePreviewNodes", /* @__PURE__ */ new Map()), R(this, "sourcePreviewNodeOptions", /* @__PURE__ */ new Map()), R(this, "sourceNodes", /* @__PURE__ */ new Map()), R(this, "sourceNodeOptions", /* @__PURE__ */ new Map()), R(this, "dragStartSourceIds", null), R(this, "dropTargetIds", []), R(this, "dragEnterTargetIds", []), R(this, "currentNativeSource", null), R(this, "currentNativeHandle", null), R(this, "currentDragSourceNode", null), R(this, "altKeyPressed", !1), R(this, "mouseMoveTimeoutTimer", null), R(this, "asyncEndDragFrameId", null), R(this, "dragOverTargetIds", null), R(this, "lastClientOffset", null), R(this, "hoverRafId", null), R(this, "getSourceClientOffset", function(i) {
      var l = o.sourceNodes.get(i);
      return l && ba(l) || null;
    }), R(this, "endDragNativeItem", function() {
      o.isDraggingNativeItem() && (o.actions.endDrag(), o.currentNativeHandle && o.registry.removeSource(o.currentNativeHandle), o.currentNativeHandle = null, o.currentNativeSource = null);
    }), R(this, "isNodeInDocument", function(i) {
      return !!(i && o.document && o.document.body && o.document.body.contains(i));
    }), R(this, "endDragIfSourceWasRemovedFromDOM", function() {
      var i = o.currentDragSourceNode;
      i == null || o.isNodeInDocument(i) || o.clearCurrentDragSourceNode() && o.monitor.isDragging() && o.actions.endDrag();
    }), R(this, "handleTopDragStartCapture", function() {
      o.clearCurrentDragSourceNode(), o.dragStartSourceIds = [];
    }), R(this, "handleTopDragStart", function(i) {
      if (!i.defaultPrevented) {
        var l = o.dragStartSourceIds;
        o.dragStartSourceIds = null;
        var s = Pe(i);
        o.monitor.isDragging() && o.actions.endDrag(), o.actions.beginDrag(l || [], {
          publishSource: !1,
          getSourceClientOffset: o.getSourceClientOffset,
          clientOffset: s
        });
        var c = i.dataTransfer, d = lt(c);
        if (o.monitor.isDragging()) {
          if (c && typeof c.setDragImage == "function") {
            var p = o.monitor.getSourceId(), f = o.sourceNodes.get(p), v = o.sourcePreviewNodes.get(p) || f;
            if (v) {
              var g = o.getCurrentSourcePreviewNodeOptions(), T = g.anchorX, O = g.anchorY, h = g.offsetX, S = g.offsetY, u = {
                anchorX: T,
                anchorY: O
              }, m = {
                offsetX: h,
                offsetY: S
              }, b = ml(f, v, s, u, m);
              c.setDragImage(v, b.x, b.y);
            }
          }
          try {
            c == null || c.setData("application/json", {});
          } catch {
          }
          o.setCurrentDragSourceNode(i.target);
          var w = o.getCurrentSourcePreviewNodeOptions(), E = w.captureDraggingState;
          E ? o.actions.publishDragSource() : setTimeout(function() {
            return o.actions.publishDragSource();
          }, 0);
        } else if (d)
          o.beginDragNativeItem(d);
        else {
          if (c && !c.types && (i.target && !i.target.hasAttribute || !i.target.hasAttribute("draggable")))
            return;
          i.preventDefault();
        }
      }
    }), R(this, "handleTopDragEndCapture", function() {
      o.clearCurrentDragSourceNode() && o.monitor.isDragging() && o.actions.endDrag();
    }), R(this, "handleTopDragEnterCapture", function(i) {
      o.dragEnterTargetIds = [];
      var l = o.enterLeaveCounter.enter(i.target);
      if (!(!l || o.monitor.isDragging())) {
        var s = i.dataTransfer, c = lt(s);
        c && o.beginDragNativeItem(c, s);
      }
    }), R(this, "handleTopDragEnter", function(i) {
      var l = o.dragEnterTargetIds;
      if (o.dragEnterTargetIds = [], !!o.monitor.isDragging()) {
        o.altKeyPressed = i.altKey, l.length > 0 && o.actions.hover(l, {
          clientOffset: Pe(i)
        });
        var s = l.some(function(c) {
          return o.monitor.canDropOnTarget(c);
        });
        s && (i.preventDefault(), i.dataTransfer && (i.dataTransfer.dropEffect = o.getCurrentDropEffect()));
      }
    }), R(this, "handleTopDragOverCapture", function() {
      o.dragOverTargetIds = [];
    }), R(this, "handleTopDragOver", function(i) {
      var l = o.dragOverTargetIds;
      if (o.dragOverTargetIds = [], !o.monitor.isDragging()) {
        i.preventDefault(), i.dataTransfer && (i.dataTransfer.dropEffect = "none");
        return;
      }
      o.altKeyPressed = i.altKey, o.lastClientOffset = Pe(i), o.hoverRafId === null && typeof requestAnimationFrame < "u" && (o.hoverRafId = requestAnimationFrame(function() {
        o.monitor.isDragging() && o.actions.hover(l || [], {
          clientOffset: o.lastClientOffset
        }), o.hoverRafId = null;
      }));
      var s = (l || []).some(function(c) {
        return o.monitor.canDropOnTarget(c);
      });
      s ? (i.preventDefault(), i.dataTransfer && (i.dataTransfer.dropEffect = o.getCurrentDropEffect())) : o.isDraggingNativeItem() ? i.preventDefault() : (i.preventDefault(), i.dataTransfer && (i.dataTransfer.dropEffect = "none"));
    }), R(this, "handleTopDragLeaveCapture", function(i) {
      o.isDraggingNativeItem() && i.preventDefault();
      var l = o.enterLeaveCounter.leave(i.target);
      l && o.isDraggingNativeItem() && setTimeout(function() {
        return o.endDragNativeItem();
      }, 0);
    }), R(this, "handleTopDropCapture", function(i) {
      if (o.dropTargetIds = [], o.isDraggingNativeItem()) {
        var l;
        i.preventDefault(), (l = o.currentNativeSource) === null || l === void 0 || l.loadDataTransfer(i.dataTransfer);
      } else
        lt(i.dataTransfer) && i.preventDefault();
      o.enterLeaveCounter.reset();
    }), R(this, "handleTopDrop", function(i) {
      var l = o.dropTargetIds;
      o.dropTargetIds = [], o.actions.hover(l, {
        clientOffset: Pe(i)
      }), o.actions.drop({
        dropEffect: o.getCurrentDropEffect()
      }), o.isDraggingNativeItem() ? o.endDragNativeItem() : o.monitor.isDragging() && o.actions.endDrag();
    }), R(this, "handleSelectStart", function(i) {
      var l = i.target;
      typeof l.dragDrop == "function" && (l.tagName === "INPUT" || l.tagName === "SELECT" || l.tagName === "TEXTAREA" || l.isContentEditable || (i.preventDefault(), l.dragDrop()));
    }), this.options = new El(n, a), this.actions = t.getActions(), this.monitor = t.getMonitor(), this.registry = t.getRegistry(), this.enterLeaveCounter = new il(this.isNodeInDocument);
  }
  return Sl(e, [{
    key: "profile",
    value: function() {
      var n, a;
      return {
        sourcePreviewNodes: this.sourcePreviewNodes.size,
        sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
        sourceNodeOptions: this.sourceNodeOptions.size,
        sourceNodes: this.sourceNodes.size,
        dragStartSourceIds: ((n = this.dragStartSourceIds) === null || n === void 0 ? void 0 : n.length) || 0,
        dropTargetIds: this.dropTargetIds.length,
        dragEnterTargetIds: this.dragEnterTargetIds.length,
        dragOverTargetIds: ((a = this.dragOverTargetIds) === null || a === void 0 ? void 0 : a.length) || 0
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
      var n = this.rootElement;
      if (n !== void 0) {
        if (n.__isReactDndBackendSetUp)
          throw new Error("Cannot have two HTML5 backends at the same time.");
        n.__isReactDndBackendSetUp = !0, this.addEventListeners(n);
      }
    }
  }, {
    key: "teardown",
    value: function() {
      var n = this.rootElement;
      if (n !== void 0 && (n.__isReactDndBackendSetUp = !1, this.removeEventListeners(this.rootElement), this.clearCurrentDragSourceNode(), this.asyncEndDragFrameId)) {
        var a;
        (a = this.window) === null || a === void 0 || a.cancelAnimationFrame(this.asyncEndDragFrameId);
      }
    }
  }, {
    key: "connectDragPreview",
    value: function(n, a, o) {
      var i = this;
      return this.sourcePreviewNodeOptions.set(n, o), this.sourcePreviewNodes.set(n, a), function() {
        i.sourcePreviewNodes.delete(n), i.sourcePreviewNodeOptions.delete(n);
      };
    }
  }, {
    key: "connectDragSource",
    value: function(n, a, o) {
      var i = this;
      this.sourceNodes.set(n, a), this.sourceNodeOptions.set(n, o);
      var l = function(d) {
        return i.handleDragStart(d, n);
      }, s = function(d) {
        return i.handleSelectStart(d);
      };
      return a.setAttribute("draggable", "true"), a.addEventListener("dragstart", l), a.addEventListener("selectstart", s), function() {
        i.sourceNodes.delete(n), i.sourceNodeOptions.delete(n), a.removeEventListener("dragstart", l), a.removeEventListener("selectstart", s), a.setAttribute("draggable", "false");
      };
    }
  }, {
    key: "connectDropTarget",
    value: function(n, a) {
      var o = this, i = function(d) {
        return o.handleDragEnter(d, n);
      }, l = function(d) {
        return o.handleDragOver(d, n);
      }, s = function(d) {
        return o.handleDrop(d, n);
      };
      return a.addEventListener("dragenter", i), a.addEventListener("dragover", l), a.addEventListener("drop", s), function() {
        a.removeEventListener("dragenter", i), a.removeEventListener("dragover", l), a.removeEventListener("drop", s);
      };
    }
  }, {
    key: "addEventListeners",
    value: function(n) {
      n.addEventListener && (n.addEventListener("dragstart", this.handleTopDragStart), n.addEventListener("dragstart", this.handleTopDragStartCapture, !0), n.addEventListener("dragend", this.handleTopDragEndCapture, !0), n.addEventListener("dragenter", this.handleTopDragEnter), n.addEventListener("dragenter", this.handleTopDragEnterCapture, !0), n.addEventListener("dragleave", this.handleTopDragLeaveCapture, !0), n.addEventListener("dragover", this.handleTopDragOver), n.addEventListener("dragover", this.handleTopDragOverCapture, !0), n.addEventListener("drop", this.handleTopDrop), n.addEventListener("drop", this.handleTopDropCapture, !0));
    }
  }, {
    key: "removeEventListeners",
    value: function(n) {
      n.removeEventListener && (n.removeEventListener("dragstart", this.handleTopDragStart), n.removeEventListener("dragstart", this.handleTopDragStartCapture, !0), n.removeEventListener("dragend", this.handleTopDragEndCapture, !0), n.removeEventListener("dragenter", this.handleTopDragEnter), n.removeEventListener("dragenter", this.handleTopDragEnterCapture, !0), n.removeEventListener("dragleave", this.handleTopDragLeaveCapture, !0), n.removeEventListener("dragover", this.handleTopDragOver), n.removeEventListener("dragover", this.handleTopDragOverCapture, !0), n.removeEventListener("drop", this.handleTopDrop), n.removeEventListener("drop", this.handleTopDropCapture, !0));
    }
  }, {
    key: "getCurrentSourceNodeOptions",
    value: function() {
      var n = this.monitor.getSourceId(), a = this.sourceNodeOptions.get(n);
      return Vn({
        dropEffect: this.altKeyPressed ? "copy" : "move"
      }, a || {});
    }
  }, {
    key: "getCurrentDropEffect",
    value: function() {
      return this.isDraggingNativeItem() ? "copy" : this.getCurrentSourceNodeOptions().dropEffect;
    }
  }, {
    key: "getCurrentSourcePreviewNodeOptions",
    value: function() {
      var n = this.monitor.getSourceId(), a = this.sourcePreviewNodeOptions.get(n);
      return Vn({
        anchorX: 0.5,
        anchorY: 0.5,
        captureDraggingState: !1
      }, a || {});
    }
  }, {
    key: "isDraggingNativeItem",
    value: function() {
      var n = this.monitor.getItemType();
      return Object.keys(Rn).some(function(a) {
        return Rn[a] === n;
      });
    }
  }, {
    key: "beginDragNativeItem",
    value: function(n, a) {
      this.clearCurrentDragSourceNode(), this.currentNativeSource = vl(n, a), this.currentNativeHandle = this.registry.addSource(n, this.currentNativeSource), this.actions.beginDrag([this.currentNativeHandle]);
    }
  }, {
    key: "setCurrentDragSourceNode",
    value: function(n) {
      var a = this;
      this.clearCurrentDragSourceNode(), this.currentDragSourceNode = n;
      var o = 1e3;
      this.mouseMoveTimeoutTimer = setTimeout(function() {
        var i;
        return (i = a.rootElement) === null || i === void 0 ? void 0 : i.addEventListener("mousemove", a.endDragIfSourceWasRemovedFromDOM, !0);
      }, o);
    }
  }, {
    key: "clearCurrentDragSourceNode",
    value: function() {
      if (this.currentDragSourceNode) {
        if (this.currentDragSourceNode = null, this.rootElement) {
          var n;
          (n = this.window) === null || n === void 0 || n.clearTimeout(this.mouseMoveTimeoutTimer || void 0), this.rootElement.removeEventListener("mousemove", this.endDragIfSourceWasRemovedFromDOM, !0);
        }
        return this.mouseMoveTimeoutTimer = null, !0;
      }
      return !1;
    }
  }, {
    key: "handleDragStart",
    value: function(n, a) {
      n.defaultPrevented || (this.dragStartSourceIds || (this.dragStartSourceIds = []), this.dragStartSourceIds.unshift(a));
    }
  }, {
    key: "handleDragEnter",
    value: function(n, a) {
      this.dragEnterTargetIds.unshift(a);
    }
  }, {
    key: "handleDragOver",
    value: function(n, a) {
      this.dragOverTargetIds === null && (this.dragOverTargetIds = []), this.dragOverTargetIds.unshift(a);
    }
  }, {
    key: "handleDrop",
    value: function(n, a) {
      this.dropTargetIds.unshift(a);
    }
  }]), e;
}(), Tl = function(t, n, a) {
  return new wl(t, n, a);
};
const Ta = y.createContext({}), ce = () => y.useContext(Ta), Cl = ({ children: e }) => {
  var l, s, c;
  const [t, n] = y.useState({}), a = (d, p = !1) => {
    let f = { object: d, show: !0, disableBgClose: p };
    n((v) => ({ ...v, overlay: { ...f } }));
  }, o = (d = !1) => {
    n((p) => ({
      ...p,
      overlay: {
        ...p.overlay,
        show: d
      }
    }));
  }, i = {
    overlay: {
      object: ((l = t.overlay) == null ? void 0 : l.object) || null,
      show: ((s = t.overlay) == null ? void 0 : s.show) || !1,
      disableBgClose: ((c = t.overlay) == null ? void 0 : c.disableBgClose) || !1,
      actions: {
        openOverlay: a,
        toggleOverlay: o
      }
    }
  };
  return /* @__PURE__ */ r.createElement(Ta.Provider, { value: i }, e);
}, Ol = "Dashboard Description", je = {
  data: {},
  loading: !1,
  filteredData: {},
  preview: !1,
  tabSelected: Ol
}, Il = {
  outerContainerRef: () => {
  },
  setParentConfig: () => {
  },
  setAPIFilterDropdowns: () => {
  },
  reloadURLData: () => {
  },
  loadAPIFilters: () => Promise.resolve([]),
  isDebug: !1,
  config: {},
  ...je
}, Q = y.createContext(Il), J = y.createContext(() => {
});
const _l = ({ disableBgClose: e, children: t, override: n = null }) => {
  let { overlay: a } = ce();
  const [o, i] = y.useState(!1), [l, s] = y.useState(null), [c, d] = y.useState(!1), p = n ? n == null ? void 0 : n.show : a == null ? void 0 : a.show;
  return y.useEffect(() => {
    if (p === void 0 || p === !1)
      return;
    document.body.style.overflow = "hidden", i(!0), s("animate-in");
    const f = setTimeout(() => {
      s("show");
    }, 750);
    return () => clearTimeout(f);
  }, [p]), y.useEffect(() => {
    if (p === void 0 || p === !0)
      return;
    s("animate-out");
    const f = setTimeout(() => {
      s(null), i(!1), document.body.style.overflow = null;
    }, 400);
    return () => clearTimeout(f);
  }, [p]), y.useEffect(() => {
    if (c === !1)
      return;
    const f = setTimeout(() => {
      d(!1);
    }, 400);
    return () => clearTimeout(f);
  }, [c]), /* @__PURE__ */ r.createElement(r.Fragment, null, o && /* @__PURE__ */ r.createElement("div", { className: `cove-overlay${l ? " " + l : ""}${c ? " overlay-error" : ""}` }, /* @__PURE__ */ r.createElement("div", { className: "cove-overlay__bg", style: { cursor: e ? "default" : null }, onClick: (f) => e ? d(!0) : a ? a.actions.toggleOverlay(!1) : n ? n.actions.toggleOverlay(!1) : f.preventDefault(), role: "alert" }), /* @__PURE__ */ r.createElement("div", { className: "cove-overlay__wrapper" }, /* @__PURE__ */ r.createElement("div", { className: "cove-overlay__container" }, t))));
}, kl = () => {
  const { overlay: e } = ce();
  return /* @__PURE__ */ r.createElement(_l, { disableBgClose: e.disableBgClose }, e.object);
}, Ca = y.createContext({}), xe = {
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
}, Nl = ["theme-blue", "theme-purple", "theme-brown", "theme-teal", "theme-pink", "theme-orange", "theme-slate", "theme-indigo", "theme-cyan", "theme-green", "theme-amber"], Fl = y.memo((e) => {
  const { config: t, updateConfig: n, loading: a, stateData: o, setParentConfig: i, isDashboard: l } = y.useContext(Ca), [s, c] = y.useState(!0), [d, p] = y.useState(!1), f = St(t, n, !0), v = (E) => {
    let C = [...t.filters];
    C.splice(E, 1), n({ ...t, filters: C });
  }, g = (E, C, D) => {
    let I = [...t.filters];
    I[C][E] = D, n({ ...t, filters: I });
  }, T = () => {
    let E = t.filters ? [...t.filters] : [];
    E.push({ values: [] }), n({ ...t, filters: E });
  }, O = (E = !0) => {
    let C = {};
    return o.length && o.map((D) => Object.keys(D).forEach((I) => C[I] = !0)), Object.keys(C);
  }, h = (E) => {
    let C = [];
    const D = t.filters[E].columnName;
    return o && D && (o.forEach(function(I) {
      I[D] !== void 0 && C.indexOf(I[D]) === -1 && C.push(I[D]);
    }), C.sort()), C;
  };
  y.useEffect(() => {
    if (i) {
      const E = b();
      i(E);
    }
  }, [t]), y.useEffect(() => {
    if (!d) {
      let E = { ...t };
      delete E.newViz, n(E);
    }
  }, []);
  const S = () => {
    c(!s), n({
      ...t,
      showEditorPanel: !s
    });
  }, u = () => /* @__PURE__ */ r.createElement("section", { className: "waiting" }, /* @__PURE__ */ r.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ r.createElement("h3", null, "Error With Configuration"), /* @__PURE__ */ r.createElement("p", null, t.runtime.editorErrorMessage))), m = () => {
    const E = (C) => {
      C.preventDefault();
      let D = { ...t };
      delete D.newViz, n(D);
    };
    return /* @__PURE__ */ r.createElement("section", { className: "waiting" }, /* @__PURE__ */ r.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ r.createElement("h3", null, "Finish Configuring"), /* @__PURE__ */ r.createElement("p", null, "Set all required options to the left and confirm below to display a preview of the markup."), /* @__PURE__ */ r.createElement("button", { className: "btn", style: { margin: "1em auto" }, onClick: E }, "I'm Done")));
  }, b = () => {
    let E = JSON.parse(JSON.stringify(t));
    return delete E.newViz, delete E.runtime, E;
  }, w = /* @__PURE__ */ r.createElement(Le, null, /* @__PURE__ */ r.createElement(Le.Section, { title: "General" }, /* @__PURE__ */ r.createElement(Ja, { value: t.title, fieldName: "title", label: "Title", placeholder: "Filterable Text Title", updateField: f })), /* @__PURE__ */ r.createElement(Le.Section, { title: "Data" }, /* @__PURE__ */ r.createElement("div", { className: "cove-accordion__panel-section" }, /* @__PURE__ */ r.createElement("div", { className: "cove-input-group" }, /* @__PURE__ */ r.createElement(de, { value: t.textColumn || "", fieldName: "textColumn", label: "Text Column", updateField: f, initial: "Select", options: O() }))), /* @__PURE__ */ r.createElement("hr", { className: "cove-accordion__divider" }), /* @__PURE__ */ r.createElement("label", { style: { marginBottom: "1rem" } }, /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Data Point Filters"), /* @__PURE__ */ r.createElement(x, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(x.Target, null, /* @__PURE__ */ r.createElement(P, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(x.Content, null, /* @__PURE__ */ r.createElement("p", null, 'To refine the highlighted data point, specify one or more filters (e.g., "Male" and "Female" for a column called "Sex").')))), t.filters && /* @__PURE__ */ r.createElement("ul", { className: "filters-list", style: { paddingLeft: 0, marginBottom: "1rem" } }, t.filters.map((E, C) => /* @__PURE__ */ r.createElement("fieldset", { className: "edit-block", key: C }, /* @__PURE__ */ r.createElement(
    "button",
    {
      type: "button",
      className: "remove-column",
      onClick: () => {
        v(C);
      }
    },
    "Remove"
  ), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Column"), /* @__PURE__ */ r.createElement(
    "select",
    {
      value: E.columnName,
      onChange: (D) => {
        g("columnName", C, D.target.value);
      }
    },
    /* @__PURE__ */ r.createElement("option", { value: "" }, "- Select Option -"),
    O().map((D, I) => /* @__PURE__ */ r.createElement("option", { value: D, key: I }, D))
  )), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Column Value"), /* @__PURE__ */ r.createElement(
    "select",
    {
      value: E.columnValue,
      onChange: (D) => {
        g("columnValue", C, D.target.value);
      }
    },
    /* @__PURE__ */ r.createElement("option", { value: "" }, "- Select Option -"),
    h(C).map((D, I) => /* @__PURE__ */ r.createElement("option", { value: D, key: I }, D))
  ))))), /* @__PURE__ */ r.createElement(er, { onClick: T, fluid: !0 }, "Add Filter")), /* @__PURE__ */ r.createElement(Le.Section, { title: "Visual" }, /* @__PURE__ */ r.createElement(de, { value: t.fontSize, fieldName: "fontSize", label: "Font Size", updateField: f, options: ["small", "medium", "large"] }), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Theme"), /* @__PURE__ */ r.createElement("ul", { className: "color-palette" }, Nl.map((E) => /* @__PURE__ */ r.createElement(
    "li",
    {
      title: E,
      key: E,
      onClick: () => {
        n({ ...t, theme: E });
      },
      className: t.theme === E ? "selected " + E : E
    }
  )))), /* @__PURE__ */ r.createElement("div", { className: "cove-accordion__panel-section checkbox-group" }, /* @__PURE__ */ r.createElement(_e, { inline: !0, size: "small", value: t.visual.border, section: "visual", fieldName: "border", label: "Display Border", updateField: f }), /* @__PURE__ */ r.createElement(_e, { inline: !0, size: "small", value: t.visual.borderColorTheme, section: "visual", fieldName: "borderColorTheme", label: "Use theme border color", updateField: f }), /* @__PURE__ */ r.createElement(_e, { size: "small", value: t.visual.accent, section: "visual", fieldName: "accent", label: "Use Accent Style", updateField: f }), /* @__PURE__ */ r.createElement(_e, { size: "small", value: t.visual.background, section: "visual", fieldName: "background", label: "Use Theme Background Color", updateField: f }), /* @__PURE__ */ r.createElement(_e, { size: "small", value: t.visual.hideBackgroundColor, section: "visual", fieldName: "hideBackgroundColor", label: "Hide Background Color", updateField: f }))));
  return a ? null : /* @__PURE__ */ r.createElement(Kn, { component: "EditorPanel" }, /* @__PURE__ */ r.createElement(he.Sidebar, { displayPanel: s, isDashboard: l, title: "Configure Filtered Text", onBackClick: S }, !t.newViz && t.runtime && t.runtime.editorErrorMessage && /* @__PURE__ */ r.createElement(u, null), t.newViz && d && /* @__PURE__ */ r.createElement(m, null), w));
});
const Oa = ({ config: e, configUrl: t, isDashboard: n = !1, isEditor: a = !1, setConfig: o }) => {
  const i = new be(), [l, s] = y.useState(xe), [c, d] = y.useState(!0), [p, f] = y.useState(l.data || []), [v, g] = y.useState();
  let { title: T, filters: O } = l;
  const h = l.fontSize === "small" ? "16px" : l.fontSize === "medium" ? "22px" : "27px", { contentClasses: S, innerContainerClasses: u } = tr(l), m = async () => {
    let D = e || await (await fetch(t)).json(), I = D.formattedData || D.data || {};
    D.dataUrl && (I = await (await fetch(D.dataUrl)).json(), D.dataDescription && (I = i.autoStandardize(I), I = i.developerStandardize(I, D.dataDescription))), I && (f(I), g(I));
    let k = { ...l, ...D };
    const X = { ...ra(k) };
    b(X), d(!1);
  }, b = (D) => {
    Object.keys(xe).forEach((I) => {
      D[I] && typeof D[I] == "object" && !Array.isArray(D[I]) && (D[I] = { ...xe[I], ...D[I] });
    }), D.runtime = {}, D.runtime.uniqueId = Date.now(), D.runtime.editorErrorMessage = "", s(D);
  }, w = () => {
    let D = [];
    if (O.length)
      O.map((I) => I.columnName && I.columnValue ? D = p.filter(function(k) {
        return k[I.columnName] === I.columnValue;
      }) : null);
    else
      return D = p.filter((I, k) => I[l.textColumn] && k === 0);
    return D;
  };
  y.useEffect(() => {
    m().catch((D) => console.log(D));
  }, []), y.useEffect(() => {
    e && !e.dataUrl && (b({ ...xe, ...e }), f(e.data), g(e.data));
  }, [e == null ? void 0 : e.data]);
  let E = /* @__PURE__ */ r.createElement(Dt, null);
  if (c === !1) {
    let D = /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(he.Responsive, { isEditor: a }, /* @__PURE__ */ r.createElement("div", { className: "cove-component__content no-borders" }, /* @__PURE__ */ r.createElement(Xn, { classes: [`${l.theme}`], title: T, style: { fontSize: h } }), /* @__PURE__ */ r.createElement("div", { className: `${S.join(" ")} body` }, w().slice(0, 1).map((I, k) => /* @__PURE__ */ r.createElement("p", { style: { fontSize: h }, key: k }, " ", Yn(I[l.textColumn] || ""), " "))))));
    E = /* @__PURE__ */ r.createElement(r.Fragment, null, a && /* @__PURE__ */ r.createElement(Fl, null), D);
  }
  const C = {
    config: l,
    updateConfig: b,
    loading: c,
    setParentConfig: o,
    isDashboard: n,
    stateData: p,
    unfilteredData: p
  };
  return /* @__PURE__ */ r.createElement(Kn, { component: "CdcFilteredText" }, /* @__PURE__ */ r.createElement(Ca.Provider, { value: C }, /* @__PURE__ */ r.createElement(he.VisualizationWrapper, { config: l, isEditor: a, showEditorPanel: l == null ? void 0 : l.showEditorPanel }, E)));
}, fe = {
  "data-bite": /* @__PURE__ */ r.createElement(P, { display: "databite", base: !0 }),
  Bar: /* @__PURE__ */ r.createElement(P, { display: "chartBar", base: !0 }),
  "Spark Line": /* @__PURE__ */ r.createElement(P, { display: "chartLine" }),
  "Bump Chart": /* @__PURE__ */ r.createElement(P, { display: "chartLine" }),
  "waffle-chart": /* @__PURE__ */ r.createElement(P, { display: "grid", base: !0 }),
  "markup-include": /* @__PURE__ */ r.createElement(P, { display: "code", base: !0 }),
  Line: /* @__PURE__ */ r.createElement(P, { display: "chartLine", base: !0 }),
  Pie: /* @__PURE__ */ r.createElement(P, { display: "chartPie", base: !0 }),
  us: /* @__PURE__ */ r.createElement(P, { display: "mapUsa", base: !0 }),
  "us-county": /* @__PURE__ */ r.createElement(P, { display: "mapUsa", base: !0 }),
  world: /* @__PURE__ */ r.createElement(P, { display: "mapWorld", base: !0 }),
  "single-state": /* @__PURE__ */ r.createElement(P, { display: "mapAl", base: !0 }),
  gear: /* @__PURE__ */ r.createElement(P, { display: "gear", base: !0 }),
  gearMulti: /* @__PURE__ */ r.createElement(P, { display: "gearMulti", base: !0 }),
  tools: /* @__PURE__ */ r.createElement(P, { display: "tools", base: !0 }),
  "filtered-text": /* @__PURE__ */ r.createElement(P, { display: "filtered-text", base: !0 }),
  dashboardFilters: /* @__PURE__ */ r.createElement(P, { display: "dashboardFilters", base: !0 }),
  table: /* @__PURE__ */ r.createElement(P, { display: "table", base: !0 }),
  Sankey: /* @__PURE__ */ r.createElement(P, { display: "sankey", base: !0 })
}, Al = (e) => {
  const { type: t, visualizationType: n, general: a } = e;
  return n ? fe[n] : a != null && a.geoType ? a.geoType === "single-state" ? fe.us : fe[a.geoType] : fe[t];
};
const Ia = () => null, _a = (e) => e, ka = () => null, le = ({ fontTheme: e = "dark", headerBgColor: t = "#fff", showDividerTop: n = !0, showDividerBottom: a = !0, showClose: o = !0, children: i, override: l = null }) => {
  let { overlay: s } = ce();
  const c = y.Children.toArray(i), d = c.find((g) => (g == null ? void 0 : g.type) === Ia), p = c.find((g) => (g == null ? void 0 : g.type) === _a), f = c.find((g) => (g == null ? void 0 : g.type) === ka), v = (g) => g ? null : "none";
  return /* @__PURE__ */ r.createElement("div", { className: `cove-modal cove-modal__theme--${e}` }, (o || d) && /* @__PURE__ */ r.createElement(
    "div",
    {
      className: "cove-modal__header",
      style: {
        backgroundColor: t,
        boxShadow: v(d && n),
        padding: d ? null : "0",
        minHeight: d ? null : "unset"
      }
    },
    d && d.props.children,
    o && /* @__PURE__ */ r.createElement(
      "button",
      {
        className: "cove-modal--close",
        onClick: (g) => {
          if (l)
            return l.actions.toggleOverlay(!1);
          if (s)
            return s == null ? void 0 : s.actions.toggleOverlay(!1);
          g.preventDefault();
        }
      },
      /* @__PURE__ */ r.createElement(P, { display: "close" })
    )
  ), /* @__PURE__ */ r.createElement("div", { className: "cove-modal__content" }, p && p.props.children), f && /* @__PURE__ */ r.createElement(
    "div",
    {
      className: "cove-modal__footer",
      style: {
        boxShadow: v(a),
        paddingTop: a ? "1rem" : null
      }
    },
    f.props.children
  ));
};
le.Header = Ia;
le.Content = _a;
le.Footer = ka;
le.propTypes = {
  fontTheme: ke.oneOf(["dark", "light"]),
  headerBgColor: ke.string,
  showDividerTop: ke.bool,
  showDividerBottom: ke.bool,
  showClose: ke.bool
};
const Na = ({ vizKey: e, rowIndex: t }) => {
  var u;
  const { config: n } = y.useContext(Q), { overlay: a } = ce(), o = new be(), i = y.useContext(J), [l, s] = y.useState(!1), [c, d] = y.useState(!e), [p, f] = y.useState(!!n.rows[t].multiVizColumn), v = y.useMemo(() => e && !c ? n.visualizations[e] : n.rows[t], [n.visualizations, n.rows, e, t, c]), g = (m) => {
    i(e && !c ? { type: "UPDATE_VISUALIZATION", payload: { vizKey: e, configureData: m } } : { type: "UPDATE_ROW", payload: { rowIndex: t, rowData: m } });
  }, T = ({ target: { value: m } }) => {
    g({ dataDescription: {}, formattedData: void 0, dataKey: m });
  }, O = async (m, b) => {
    const w = v.dataKey, { data: E, dataUrl: C } = n.datasets[w];
    let D = E;
    !E && C && (D = await Ce(C), D = o.autoStandardize(D));
    const I = { ...v.dataDescription, [m]: b }, k = { data: D, dataDescription: I, formattedData: o.developerStandardize(D, I) };
    g(k), s(!0);
  }, h = (m) => {
    m !== "" && (i({ type: "UPDATE_ROW", payload: { rowIndex: t, rowData: { multiVizColumn: m } } }), s(!0));
  }, S = (m) => {
    i({ type: "UPDATE_ROW", payload: { rowIndex: t, rowData: { expandCollapseAllButtons: m } } }), s(!0);
  };
  return /* @__PURE__ */ r.createElement(le, null, /* @__PURE__ */ r.createElement(le.Content, null, /* @__PURE__ */ r.createElement("div", { className: "dataset-selector-container" }, "Select a dataset: ", /* @__PURE__ */ r.createElement("select", { className: "dataset-selector", value: v.dataKey || "", onChange: T }, /* @__PURE__ */ r.createElement("option", { value: "" }, "Select a dataset"), n.datasets && Object.keys(n.datasets).map((m) => /* @__PURE__ */ r.createElement("option", { key: m }, m))), e && /* @__PURE__ */ r.createElement(
    Me,
    {
      label: "Apply To Row",
      value: c,
      updateField: (m, b, w, E) => {
        d(E), T({ target: { value: "" } });
      }
    }
  )), v.dataKey && /* @__PURE__ */ r.createElement(
    nr,
    {
      configureData: v,
      visualizationKey: e,
      updateDescriptionProp: O
    }
  ), c && v.dataKey ? p ? /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(de, { options: Object.keys(((u = n.datasets[v.dataKey]) == null ? void 0 : u.data[0]) || {}), value: n.rows[t].multiVizColumn, label: "Multi-Visualization Column", initial: "--Select--", updateField: (m, b, w, E) => h(E), required: !0 }), /* @__PURE__ */ r.createElement(Me, { value: n.rows[t].expandCollapseAllButtons, label: " Add Expand/Collapse All buttons", fieldName: "", updateField: (m, b, w, E) => S(E) })) : /* @__PURE__ */ r.createElement(
    Me,
    {
      label: "Configure Multiple Visualizations",
      value: p,
      tooltip: /* @__PURE__ */ r.createElement(x, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(x.Target, null, /* @__PURE__ */ r.createElement(P, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(x.Content, null, /* @__PURE__ */ r.createElement("p", null, "You can select a column where for each unique value in the column the configuration for the row will be repeated in to the data preview."))),
      updateField: (m, b, w, E) => {
        l && E === !0 && s(!1), f(E);
      }
    }
  ) : /* @__PURE__ */ r.createElement(r.Fragment, null), l && /* @__PURE__ */ r.createElement("button", { style: { margin: "1em", display: "block" }, className: "cove-button", onClick: () => a == null ? void 0 : a.actions.toggleOverlay() }, "Continue")));
}, Ll = {
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
}, W = ({ widgetConfig: e, addVisualization: t, type: n }) => {
  var m;
  const { overlay: a } = ce(), { config: o, data: i } = y.useContext(Q), l = y.useContext(J), s = new be(), c = (b, w) => {
    let E = w.getDropResult();
    if (!E)
      return null;
    const { rowIdx: C, colIdx: D } = E;
    if ((e == null ? void 0 : e.rowIdx) !== void 0)
      l({ type: "MOVE_VISUALIZATION", payload: { rowIdx: C, colIdx: D, widget: e } });
    else if (t) {
      const I = t();
      l({ type: "ADD_VISUALIZATION", payload: { newViz: I, rowIdx: C, colIdx: D } });
    }
  }, [{ isDragging: d, ...p }, f] = Vi(
    {
      type: "vis-widget",
      end: c,
      collect: (b) => ({
        isDragging: b.isDragging()
      })
    },
    [o.activeDashboard, o.rows, o.dashboard.sharedFilters]
  ), v = () => {
    e && l({
      type: "DELETE_WIDGET",
      payload: { rowIdx: e.rowIdx, colIdx: e.colIdx, uid: e.uid }
    });
  }, g = (b, w) => {
    const E = new URL(b);
    return E.searchParams.set("$limit", w), E.href.replace(/%24/g, "$");
  }, T = () => {
    var E;
    const b = ((E = o.rows[e.rowIdx]) == null ? void 0 : E.dataKey) || (e == null ? void 0 : e.dataKey), w = o.datasets[b];
    if (!i[w.dataUrl].length) {
      const C = g(w.dataUrl, 100);
      Ce(C).then((D) => {
        D.sample = !0, l({ type: "SET_DATA", payload: { ...i, [b]: D } });
      });
    }
  }, O = () => {
    e && (l({ type: "UPDATE_VISUALIZATION", payload: { vizKey: e.uid, configureData: { editing: !0 } } }), T());
  };
  let h = !1;
  const S = !!((m = o.rows[e == null ? void 0 : e.rowIdx]) != null && m.dataKey);
  if (S || ["dashboardFilters", "markup-include"].includes(n))
    h = !0;
  else if (e != null && e.formattedData)
    h = !0;
  else if (e != null && e.dataKey && (e != null && e.dataDescription) && o.datasets[e.dataKey]) {
    const b = s.autoStandardize(o.datasets[e.dataKey].data);
    !!s.developerStandardize(b, e.dataDescription) && (h = !0);
  }
  const u = !S && (e == null ? void 0 : e.type) !== "dashboardFilters";
  return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("div", { className: "widget", ref: f, style: { opacity: d ? 0.5 : 1 }, ...p }, /* @__PURE__ */ r.createElement(P, { display: "move", className: "drag-icon" }), /* @__PURE__ */ r.createElement("div", { className: "widget__content" }, (e == null ? void 0 : e.rowIdx) !== void 0 && /* @__PURE__ */ r.createElement("div", { className: "widget-menu" }, h && /* @__PURE__ */ r.createElement("button", { title: "Configure Visualization", className: "btn btn-configure", onClick: O }, fe.tools), u && /* @__PURE__ */ r.createElement(
    "button",
    {
      title: "Configure Data",
      className: "btn btn-configure",
      onClick: () => {
        a == null || a.actions.openOverlay(
          /* @__PURE__ */ r.createElement(Na, { rowIndex: e.rowIdx, vizKey: e.uid })
        );
      }
    },
    fe.gear
  ), /* @__PURE__ */ r.createElement("div", { className: "widget-menu-item", onClick: v }, /* @__PURE__ */ r.createElement(P, { display: "close", base: !0 }))), fe[n], /* @__PURE__ */ r.createElement("span", null, Ll[n]), (e == null ? void 0 : e.newViz) && n !== "dashboardFilters" && /* @__PURE__ */ r.createElement("span", { onClick: O, className: "config-needed" }, "Configuration needed"))));
}, Pl = ({ data: e, rowIdx: t, colIdx: n }) => {
  var d;
  const { config: a } = y.useContext(Q), [{ isOver: o, canDrop: i }, l] = tl(
    () => ({
      accept: "vis-widget",
      drop: () => ({
        rowIdx: t,
        colIdx: n,
        canDrop: i
      }),
      canDrop: () => !e.widget,
      collect: (p) => ({
        isOver: p.isOver(),
        canDrop: !!p.canDrop()
      })
    }),
    [a.activeDashboard]
  ), s = e.widget ? a == null ? void 0 : a.visualizations[e.widget] : null;
  s && !s.uid && (s.uid = e.widget);
  let c = ["builder-column", "column-size--" + e.width];
  return o && i && c.push("column--drop"), s && c.push("column--populated"), /* @__PURE__ */ r.createElement("div", { className: c.join(" "), ref: l }, s ? /* @__PURE__ */ r.createElement(W, { widgetConfig: { rowIdx: t, colIdx: n, ...s }, type: s.visualizationType ?? ((d = s.general) == null ? void 0 : d.geoType) }) : /* @__PURE__ */ r.createElement("p", { className: "builder-column__text" }, "Drag and drop ", /* @__PURE__ */ r.createElement("br", null), " visualization"));
}, Rl = (e) => /* @__PURE__ */ y.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ y.createElement("path", { d: "M2,16 L22,16 L22,14 L2,14 L2,16 Z M2,11 L22,11 L22,9 L2,9 L2,11 Z M2,4 L2,6 L22,6 L22,4 L2,4 Z" })), xl = (e) => /* @__PURE__ */ y.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ y.createElement("path", { d: "M22 14L22 16 13 16 13 14 22 14zM11 16L2 16 2 14 11 14 11 16zM22 4L22 6 13 6 13 4 22 4zM11 6L2 6 2 4 11 4 11 6zM22 9L22 11 13 11 13 9 22 9zM11 11L2 11 2 9 11 9 11 11z" })), Ml = (e) => /* @__PURE__ */ y.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ y.createElement("path", { d: "M22,14 L22,16 L17,16 L17,14 L22,14 Z M7,14 L7,16 L2,16 L2,14 L7,14 Z M15,14 L15,16 L9,16 L9,14 L15,14 Z M22,9 L22,11 L17,11 L17,9 L22,9 Z M7,9 L7,11 L2,11 L2,9 L7,9 Z M15,9 L15,11 L9,11 L9,9 L15,9 Z M22,4 L22,6 L17,6 L17,4 L22,4 Z M7,4 L7,6 L2,6 L2,4 L7,4 Z M15,4 L15,6 L9,6 L9,4 L15,4 Z" })), $l = (e) => /* @__PURE__ */ y.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ y.createElement("path", { d: "M22,14 L22,16 L10,16 L10,14 L22,14 Z M8,14 L8,16 L2,16 L2,14 L8,14 Z M22,9 L22,11 L10,11 L10,9 L22,9 Z M8,9 L8,11 L2,11 L2,9 L8,9 Z M22,4 L22,6 L10,6 L10,4 L22,4 Z M8,4 L8,6 L2,6 L2,4 L8,4 Z" })), Bl = (e) => /* @__PURE__ */ y.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ y.createElement("path", { d: "M22,14 L22,16 L16,16 L16,14 L22,14 Z M14,14 L14,16 L2,16 L2,14 L14,14 Z M22,9 L22,11 L16,11 L16,9 L22,9 Z M14,9 L14,11 L2,11 L2,9 L14,9 Z M22,4 L22,6 L16,6 L16,4 L22,4 Z M14,4 L14,6 L2,6 L2,4 L14,4 Z" })), Vl = (e) => /* @__PURE__ */ y.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", height: 24, width: 24, viewBox: "0 0 576 512", ...e }, /* @__PURE__ */ y.createElement("path", { d: "M192 64C86 64 0 150 0 256S86 448 192 448H384c106 0 192-86 192-192s-86-192-192-192H192zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" })), Ul = ({ rowIdx: e }) => {
  const { config: t } = y.useContext(Q), n = y.useContext(J), a = A.cloneDeep(t.rows), o = t.rows[e], i = (f) => n({ type: "UPDATE_CONFIG", payload: [f] }), l = y.useMemo(() => o.toggle ? "toggle" : o.columns.reduce((f, v) => (v.width && (f += v.width), f), ""), [o]), s = (f, v = void 0) => {
    const g = A.cloneDeep(a);
    g[e].toggle = v;
    const T = g[e].columns, O = T.filter((S) => S.widget);
    if (!(O.length > f.length)) {
      {
        const S = T.length > f.length ? O : T;
        g[e].columns = f.map((u, m) => {
          const b = S[m];
          return b ? { ...b, width: u } : { width: u };
        });
      }
      i({ ...t, rows: g });
    }
  }, c = (f = "down") => {
    if (e === a.length - 1 && f === "down")
      return;
    let v = f === "down" ? e + 1 : e - 1;
    const g = a[v];
    a[v] = o, a[e] = g, a[v].uuid = Date.now(), a[e].uuid = Date.now(), i({ ...t, rows: a });
    let T = f === "down" ? 202 : -202, O = f === "down" ? -202 : 202, h = document.querySelector("[data-row-id='" + e + "']"), S = document.querySelector("[data-row-id='" + v + "']");
    h.style.pointerEvents = "none", S.style.pointerEvents = "none", h.style.top = T + "px", S.style.top = O + "px", setTimeout(() => {
      h.style.transition = "top 500ms cubic-bezier(0.16, 1, 0.3, 1)", S.style.transition = "top 500ms cubic-bezier(0.16, 1, 0.3, 1)", h.style.top = "0", S.style.top = "0";
    }, 0), setTimeout(() => {
      h.setAttribute("style", ""), S.setAttribute("style", "");
    }, 500);
  }, d = () => {
    let f = { ...t.visualizations };
    a[e] && a[e].columns && a[e].columns.length && t.visualizations && a[e].columns.forEach((v) => {
      v.widget && delete f[v.widget];
    }), a.splice(e, 1), i({ ...t, rows: a, visualizations: f });
  }, p = [
    /* @__PURE__ */ r.createElement(
      "li",
      {
        className: l === "12" ? "current row-menu__list--item" : "row-menu__list--item",
        onClick: () => s([12]),
        key: "12",
        title: "1 Column"
      },
      /* @__PURE__ */ r.createElement(Rl, null)
    ),
    /* @__PURE__ */ r.createElement(
      "li",
      {
        className: l === "66" ? "current row-menu__list--item" : "row-menu__list--item",
        onClick: () => s([6, 6]),
        key: "66",
        title: "2 Columns"
      },
      /* @__PURE__ */ r.createElement(xl, null)
    ),
    /* @__PURE__ */ r.createElement(
      "li",
      {
        className: l === "444" ? "current row-menu__list--item" : "row-menu__list--item",
        onClick: () => s([4, 4, 4]),
        key: "444",
        title: "3 Columns"
      },
      /* @__PURE__ */ r.createElement(Ml, null)
    ),
    /* @__PURE__ */ r.createElement(
      "li",
      {
        className: l === "48" ? "current row-menu__list--item" : "row-menu__list--item",
        onClick: () => s([4, 8]),
        key: "48",
        title: "2 Columns"
      },
      /* @__PURE__ */ r.createElement($l, null)
    ),
    /* @__PURE__ */ r.createElement(
      "li",
      {
        className: l === "84" ? "current row-menu__list--item" : "row-menu__list--item",
        onClick: () => s([8, 4]),
        key: "84",
        title: "2 Columns"
      },
      /* @__PURE__ */ r.createElement(Bl, null)
    ),
    /* @__PURE__ */ r.createElement(
      "li",
      {
        className: l === "toggle" ? "current row-menu__list--item" : "row-menu__list--item",
        onClick: () => s([12, 12, 12], !0),
        key: "toggle",
        title: "Toggle between up to three visualizations"
      },
      /* @__PURE__ */ r.createElement(Vl, null)
    )
  ];
  return /* @__PURE__ */ r.createElement("nav", { className: "row-menu" }, /* @__PURE__ */ r.createElement("ul", { className: "row-menu__flyout" }, p), /* @__PURE__ */ r.createElement("div", { className: "spacer" }), /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "btn btn-primary row-menu__btn border-0",
      title: "Move Row Up",
      onClick: () => c("up"),
      disabled: e === 0
    },
    /* @__PURE__ */ r.createElement(P, { display: "caretUp", color: "#fff", size: 25 })
  ), /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "btn btn-primary row-menu__btn border-0",
      title: "Move Row Down",
      onClick: () => c("down"),
      disabled: e + 1 === a.length
    },
    /* @__PURE__ */ r.createElement(P, { display: "caretDown", color: "#fff", size: 25 })
  ), /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "btn btn-danger row-menu__btn row-menu__btn--remove border-0",
      title: "Delete Row",
      onClick: d,
      disabled: e === 0 && a.length === 1
    },
    /* @__PURE__ */ r.createElement(P, { display: "close", color: "#fff", size: 25 })
  ));
}, zl = ({ row: e, idx: t, uuid: n }) => {
  const { overlay: a } = ce(), o = y.useContext(J), i = () => {
    if (e.footnotesId)
      o({ type: "UPDATE_VISUALIZATION", payload: { vizKey: e.footnotesId, configureData: { editing: !0 } } });
    else {
      const l = "footnotes", s = l + Date.now();
      o({
        type: "ADD_FOOTNOTE",
        payload: { id: s, rowIndex: t, config: {
          uid: s,
          type: l,
          visualizationType: l,
          editing: !0
        } }
      });
    }
  };
  return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("div", { className: "builder-row", "data-row-id": t }, /* @__PURE__ */ r.createElement(Ul, { rowIdx: t }), /* @__PURE__ */ r.createElement(
    "button",
    {
      title: "Configure Data",
      className: "btn btn-configure-row",
      onClick: () => {
        a == null || a.actions.openOverlay(/* @__PURE__ */ r.createElement(Na, { rowIndex: t }));
      }
    },
    fe.gearMulti
  ), /* @__PURE__ */ r.createElement("div", { className: "column-container" }, e.columns.filter((l) => l.width).map((l, s) => /* @__PURE__ */ r.createElement(Pl, { data: l, key: `row-${n}-col-${s}`, rowIdx: t, colIdx: s }))), /* @__PURE__ */ r.createElement("button", { className: "btn btn-primary footnotes", onClick: i }, e.footnotesId ? "Edit" : "Add", " Footnotes")));
}, Hl = () => {
  const { config: e } = y.useContext(Q);
  if (!e)
    return null;
  const t = e.rows, n = y.useContext(J), a = (i) => n({ type: "UPDATE_CONFIG", payload: [i] }), o = () => {
    const i = { columns: [{ width: 12 }] };
    a({
      ...e,
      rows: [...t, i],
      uuid: Date.now()
    });
  };
  return /* @__PURE__ */ r.createElement("div", { className: "builder-grid" }, (t || []).map((i, l) => /* @__PURE__ */ r.createElement(zl, { row: i, idx: l, uuid: i.uuid, key: l })), /* @__PURE__ */ r.createElement("button", { className: "btn btn-primary col", onClick: o }, "Add Row"));
};
const jl = (e) => /* @__PURE__ */ r.createElement(le, null, /* @__PURE__ */ r.createElement(le.Content, null, /* @__PURE__ */ r.createElement("p", null, "Are you sure you want to delete this dashboard? "), /* @__PURE__ */ r.createElement("button", { className: "btn btn-danger", onClick: e }, "DELETE"))), ql = ({ name: e, handleClick: t, tabs: n, index: a, active: o }) => {
  const [i, l] = y.useState(!1), s = y.useContext(J), { overlay: c } = ce(), d = y.createRef(), p = (h) => {
    h.stopPropagation();
    const S = d.current.value, u = S === e, m = !S, b = n.includes(S);
    !u && !m && !b && s({ type: "RENAME_DASHBOARD_TAB", payload: { current: e, new: S } }), l(!1);
  }, f = (h) => {
    h.target.className !== "remove" && (o ? l(!0) : t());
  }, v = () => {
    const h = () => {
      s({ type: "REMOVE_MULTIDASHBOARD_AT_INDEX", payload: a }), c == null || c.actions.toggleOverlay(!1);
    };
    c == null || c.actions.openOverlay(jl(h));
  }, g = (h, S) => {
    const u = h + S;
    u > -1 && u <= n.length - 1 && s({ type: "REORDER_MULTIDASHBOARDS", payload: { currentIndex: h, newIndex: h + S } });
  }, T = a !== 0, O = a <= n.length - 2;
  return /* @__PURE__ */ r.createElement("li", { className: "nav-item d-flex mt-0" }, T && i && /* @__PURE__ */ r.createElement("button", { className: "border-0", onClick: () => g(a, -1) }, "<"), /* @__PURE__ */ r.createElement(
    "div",
    {
      className: `edit nav-link${o ? " active" : ""}`,
      "aria-current": o ? "page" : null,
      onClick: f
    },
    i ? /* @__PURE__ */ r.createElement("div", { className: "d-flex" }, /* @__PURE__ */ r.createElement("input", { type: "text", defaultValue: e, onBlur: p, ref: d }), /* @__PURE__ */ r.createElement("button", { className: "btn btn-link save", onClick: p }, "save")) : /* @__PURE__ */ r.createElement(r.Fragment, null, e, /* @__PURE__ */ r.createElement("button", { className: "btn btn-danger border-0 ml-1", onClick: v }, "X"))
  ), O && i && /* @__PURE__ */ r.createElement("button", { className: "border-0", onClick: () => g(a, 1) }, ">"));
}, Gl = () => {
  const { config: e } = y.useContext(Q), t = y.useContext(J), n = y.useMemo(
    () => (e.multiDashboards || []).map(({ label: i }) => i),
    [e.multiDashboards]
  ), a = y.useMemo(() => e.activeDashboard, [e.activeDashboard]), o = (i) => {
    t({ type: "SAVE_CURRENT_CHANGES" }), t({ type: "SWITCH_CONFIG", payload: i });
  };
  return e.multiDashboards ? /* @__PURE__ */ r.createElement("ul", { className: "nav nav-tabs multi-config-tabs" }, n.map((i, l) => /* @__PURE__ */ r.createElement(
    ql,
    {
      key: i + l,
      name: i,
      tabs: n,
      index: l,
      handleClick: () => o(l),
      active: l === a
    }
  )), /* @__PURE__ */ r.createElement("li", { className: "nav-item" }, /* @__PURE__ */ r.createElement("button", { className: "nav-link add", onClick: () => t({ type: "ADD_NEW_DASHBOARD" }) }, "+"))) : null;
}, Wl = () => {
  const { config: e } = y.useContext(Q), t = y.useContext(J), n = y.useMemo(
    () => (e.multiDashboards || []).map(({ label: i }) => i),
    [e.multiDashboards]
  ), a = y.useMemo(() => e.activeDashboard, [e.activeDashboard]), o = (i, l) => {
    l.preventDefault(), t({ type: "SWITCH_CONFIG", payload: i }), or("cove-tab", i);
  };
  return e.multiDashboards ? /* @__PURE__ */ r.createElement("ul", { className: "nav nav-tabs multi-config-tabs" }, n.map((i, l) => /* @__PURE__ */ r.createElement("li", { key: i + l, className: "nav-item" }, /* @__PURE__ */ r.createElement(
    "a",
    {
      className: `nav-link${a === l ? " active" : ""}`,
      "aria-current": a === l ? "page" : null,
      href: "#",
      onClick: (s) => o(l, s)
    },
    i
  )))) : null;
}, Fa = ({ isEditor: e = !1 }) => e ? /* @__PURE__ */ r.createElement(Gl, null) : /* @__PURE__ */ r.createElement(Wl, null), re = (e) => {
  var T, O;
  const t = ["Dashboard Description", "Data Table Settings", "Dashboard Preview"], { visualizationKey: n, subEditor: a } = e, { config: o, setParentConfig: i, tabSelected: l, data: s } = y.useContext(Q);
  if (!o)
    return null;
  const c = y.useContext(J), d = () => {
    if (!n)
      return;
    const h = A.cloneDeep(o);
    if (h.visualizations[n].editing = !1, c({ type: "SET_CONFIG", payload: h }), Object.values(s).some((S) => S.sample)) {
      const S = Object.keys(s).reduce((u, m) => (s[m].sample ? u[m] = [] : u[m] = s[m], u), {});
      c({ type: "SET_DATA", payload: S });
    }
  }, p = (h, S, u) => {
    let m = { ...o };
    m[h] || (m[h] = {}), m[h][S] = u, c({ type: "UPDATE_CONFIG", payload: [m] });
  }, f = (h = "JSON") => {
    let S = JSON.parse(JSON.stringify(o));
    return delete S.newViz, delete S.runtime, h === "JSON" ? JSON.stringify(S) : S;
  };
  y.useEffect(() => {
    const h = f(), S = new CustomEvent("updateVizConfig", { detail: h });
    if (window.dispatchEvent(S), i) {
      const u = f("object");
      i(u);
    }
  }, [o]);
  const v = (h) => {
    const { checked: S } = h.currentTarget;
    S && c({ type: "INITIALIZE_MULTIDASHBOARDS" });
  }, g = !!o.multiDashboards;
  return /* @__PURE__ */ r.createElement("div", { "aria-level": 2, role: "heading", className: `editor-heading${a ? " sub-dashboard-viz" : ""}` }, a ? /* @__PURE__ */ r.createElement("div", { className: "heading-1 back-to", onClick: d, style: { cursor: "pointer" } }, /* @__PURE__ */ r.createElement("span", null, "←"), " Back to Dashboard") : /* @__PURE__ */ r.createElement("div", { className: "heading-1" }, "Dashboard Editor", " ", /* @__PURE__ */ r.createElement("span", { className: "small" }, /* @__PURE__ */ r.createElement("input", { type: "checkbox", onChange: v, checked: g, disabled: g }), " make multidashboard"), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      placeholder: "Enter Dashboard Name Here",
      defaultValue: (T = o.dashboard) == null ? void 0 : T.title,
      onChange: (h) => p("dashboard", "title", h.target.value)
    }
  )), !a && /* @__PURE__ */ r.createElement("div", { className: "toggle-bar__wrapper" }, /* @__PURE__ */ r.createElement(Fa, { isEditor: !0 }), /* @__PURE__ */ r.createElement("ul", { className: "toggle-bar" }, t.map((h) => /* @__PURE__ */ r.createElement(
    "li",
    {
      key: h,
      className: l === h ? "active" : "inactive",
      onClick: () => {
        c({ type: "SET_TAB_SELECTED", payload: h });
      }
    },
    h
  ))), /* @__PURE__ */ r.createElement("div", { className: "heading-body" }, l === "Dashboard Description" && /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      className: "description-input",
      placeholder: "Type a dashboard description here.",
      defaultValue: (O = o.dashboard) == null ? void 0 : O.description,
      onChange: (h) => p("dashboard", "description", h.target.value)
    }
  ), l === "Data Table Settings" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("div", { className: "wrap" }, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      defaultChecked: o.table.show,
      onChange: (h) => p("table", "show", h.target.checked)
    }
  ), "Show Data Table(s)"), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      defaultChecked: o.table.expanded,
      onChange: (h) => p("table", "expanded", h.target.checked)
    }
  ), "Expanded by Default"), /* @__PURE__ */ r.createElement("br", null)), /* @__PURE__ */ r.createElement("div", { className: "wrap" }, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      defaultChecked: o.table.limitHeight,
      onChange: (h) => p("table", "limitHeight", h.target.checked)
    }
  ), "Limit Table Height"), o.table.limitHeight && /* @__PURE__ */ r.createElement(
    "input",
    {
      className: "table-height-input",
      type: "text",
      placeholder: "Height (px)",
      defaultValue: o.table.height,
      onChange: (h) => p("table", "height", h.target.value)
    }
  )), /* @__PURE__ */ r.createElement("div", { className: "wrap" }, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      defaultChecked: o.table.download,
      onChange: (h) => p("table", "download", h.target.checked)
    }
  ), "Show Download CSV Link"), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      defaultChecked: o.table.showDownloadUrl,
      onChange: (h) => p("table", "showDownloadUrl", h.target.checked)
    }
  ), "Show URL to Automatically Updated Data"))))));
};
const zn = new be(), me = (e, t) => {
  if (e && t)
    try {
      let n = zn.autoStandardize(e);
      return n = zn.developerStandardize(e, t), n;
    } catch {
      return e;
    }
  return e;
}, Zl = (e) => {
  Object.keys(e.visualizations).forEach((t, n) => {
    const a = e.visualizations[t];
    if (a.dataKey && !a.data) {
      const o = e.datasets[a.dataKey].data;
      e.visualizations[t].data = o, e.visualizations[t].formattedData = me(o, a.dataDescription);
    }
  });
}, Ql = (e) => {
  e.rows.forEach((t, n) => {
    if (t.dataKey && !t.data) {
      const a = e.datasets[t.dataKey].data;
      e.rows[n].data = a, e.rows[n].formattedData = me(a, t.dataDescription);
    }
  });
}, Xl = (e) => (Zl(e), Ql(e), e);
const K = (e, t) => {
  const a = {
    filters: [],
    filterBehavior: "Filter Change",
    newViz: e !== "table",
    openModal: e !== "markup-include",
    uid: e + Date.now(),
    type: e
  };
  switch (e) {
    case "chart":
      a.visualizationType = t;
      break;
    case "map":
      a.general = {}, a.general.geoType = t;
      break;
    case "data-bite":
      a.visualizationType = e;
      break;
    case "table":
      const o = {
        label: "Data Table",
        show: !0,
        showDownloadUrl: !1,
        showVertical: !0,
        expanded: !0,
        collapsible: !0
      };
      a.table = o, a.columns = {}, a.dataFormat = {}, a.visualizationType = e;
      break;
    case "markup-include":
      a.contentEditor = {
        inlineHTML: "<h2>Inline HTML</h2>",
        markupVariables: [],
        showHeader: !0,
        srcUrl: "#example",
        title: "Markup Include",
        useInlineHTML: !0
      }, a.theme = "theme-blue", a.visual = {
        border: !1,
        accent: !1,
        background: !1,
        hideBackgroundColor: !1,
        borderColorTheme: !1
      }, a.showEditorPanel = !0, a.visualizationType = e;
      break;
    case "dashboardFilters": {
      a.sharedFilterIndexes = [], a.visualizationType = e;
      break;
    }
    default:
      a.visualizationType = e;
      break;
  }
  return a;
}, Yl = () => {
  const [e, t] = y.useState(!1), { config: n } = y.useContext(Q), a = y.useContext(J), o = (i) => {
    const l = i.multiDashboards ? {
      ...n,
      ...i,
      ...i.multiDashboards[n.activeDashboard],
      activeDashboard: n.activeDashboard
    } : i;
    a({ type: "APPLY_CONFIG", payload: [Xl(l)] });
  };
  return /* @__PURE__ */ r.createElement("div", { className: `visualizations-panel${e ? " advanced-editor" : ""}` }, /* @__PURE__ */ r.createElement("p", { style: { fontSize: "14px" } }, "Click and drag an item onto the grid to add it to your dashboard."), /* @__PURE__ */ r.createElement("span", { className: "subheading-3" }, "Chart"), /* @__PURE__ */ r.createElement("div", { className: "drag-grid" }, /* @__PURE__ */ r.createElement(W, { addVisualization: () => K("chart", "Bar"), type: "Bar" }), /* @__PURE__ */ r.createElement(W, { addVisualization: () => K("chart", "Line"), type: "Line" }), /* @__PURE__ */ r.createElement(W, { addVisualization: () => K("chart", "Pie"), type: "Pie" }), /* @__PURE__ */ r.createElement(W, { addVisualization: () => K("chart", "Sankey"), type: "Sankey" })), /* @__PURE__ */ r.createElement("span", { className: "subheading-3" }, "Map"), /* @__PURE__ */ r.createElement("div", { className: "drag-grid" }, /* @__PURE__ */ r.createElement(W, { addVisualization: () => K("map", "us"), type: "us" }), /* @__PURE__ */ r.createElement(W, { addVisualization: () => K("map", "world"), type: "world" }), /* @__PURE__ */ r.createElement(W, { addVisualization: () => K("map", "single-state"), type: "single-state" })), /* @__PURE__ */ r.createElement("span", { className: "subheading-3" }, "Misc."), /* @__PURE__ */ r.createElement("div", { className: "drag-grid" }, /* @__PURE__ */ r.createElement(W, { addVisualization: () => K("data-bite", ""), type: "data-bite" }), /* @__PURE__ */ r.createElement(W, { addVisualization: () => K("waffle-chart", ""), type: "waffle-chart" }), /* @__PURE__ */ r.createElement(W, { addVisualization: () => K("markup-include", ""), type: "markup-include" }), /* @__PURE__ */ r.createElement(W, { addVisualization: () => K("filtered-text", ""), type: "filtered-text" }), /* @__PURE__ */ r.createElement(W, { addVisualization: () => K("dashboardFilters", ""), type: "dashboardFilters" }), /* @__PURE__ */ r.createElement(W, { addVisualization: () => K("table", ""), type: "table" })), /* @__PURE__ */ r.createElement(
    za,
    {
      loadConfig: o,
      config: n,
      convertStateToConfig: () => {
      },
      onExpandCollapse: () => {
        t(!e);
      }
    }
  ));
}, Aa = (e, t) => {
  var n;
  if ((n = t.parents) != null && n.length) {
    const a = e.find((o) => t.parents.includes(o.key));
    return a ? 1 + Aa(e, a) : 1;
  } else
    return 1;
};
function Kl(e) {
  let t = 1;
  return e.forEach((n) => {
    n.tier = Aa(e, n), n.tier > t && (t = n.tier);
  }), t;
}
function Hn(e = [], t, n) {
  const a = t.filter((o) => o.resetLabel !== o.active);
  return e.filter((o) => !a.find((l) => {
    var f;
    const s = o[l.columnName], c = l.queuedActive || l.filterStyle === te.nestedDropdown ? [l.active, (f = l.subGrouping) == null ? void 0 : f.active] : l.active;
    let d = !0;
    if (Array.isArray(c) ? d = !c.includes(s) : d = c && s != c, l.filterStyle === "nested-dropdown" && l.subGrouping && l.active === s && d === !1) {
      const v = l.subGrouping.active, g = o[l.subGrouping.columnName];
      d = v && g !== v;
    }
    const p = l.tier === n;
    if (l.type !== "urlfilter" && p && d)
      return !0;
  }));
}
const we = (e, t) => {
  const n = Kl(e);
  for (let a = 0; a < n; a++) {
    const o = a === n - 1, i = Hn(t, e, a + 1);
    if (o)
      return Hn(i, e, n - 1);
  }
}, Jl = (e, t) => {
  const n = [];
  return Object.keys(t).forEach((a) => {
    var o;
    (o = t[a]) == null || o.forEach((i) => {
      const l = i[e];
      l && !n.includes(l) && n.push(l);
    });
  }), n;
}, ve = (e) => Object.keys((e == null ? void 0 : e.visualizations) || {}), kt = (e) => e.reduce((t, n, a) => {
  var o;
  return (o = n.columns) == null || o.forEach((i, l) => {
    i.widget !== void 0 && (t[i.widget] = { row: a, column: l });
  }), n.footnotesId && (t[n.footnotesId] = { row: a, column: 0 }), t;
}, {}), vt = (e) => (t, n) => {
  let a = {}, o = ve(t);
  const i = kt(t.rows);
  return t.dashboard.sharedFilters && (t.dashboard.sharedFilters.forEach((l, s) => {
    const c = !!o.find((v) => v === l.setBy), d = t.dashboard.sharedFilters[s], p = (v) => {
      if (d.values = v, v.length > 0) {
        const g = d.pivot ? d.values : d.values[0], T = oa(d);
        T ? d.active = T : d.active = d.active || g;
      }
    }, f = Jl(l.columnName, n || e.data);
    c ? (d.order === "asc" && f.sort(), d.order === "desc" && f.sort().reverse(), p(f)) : (!l.values || l.values.length === 0) && l.showDropdown && p(f);
  }), o.forEach((l) => {
    var d;
    const s = i[l];
    if ((d = t.rows[s]) != null && d.datakey)
      return;
    const c = t.dashboard.sharedFilters.filter((p) => p.usedBy && p.usedBy.indexOf(l) !== -1);
    if (c.length > 0) {
      const p = t.visualizations[l], f = t.datasets[p.dataKey], g = me((f == null ? void 0 : f.data) || p.data, p.dataDescription) || (n || e.data)[p.dataKey];
      a[l] = we(c, g);
    }
  }), t.rows.forEach((l, s) => {
    const c = t.dashboard.sharedFilters.filter((d) => d.usedBy && d.usedBy.indexOf(s) !== -1);
    if (c.length > 0) {
      const p = me(l.data, l.dataDescription) || (n || e.data)[s];
      a[s] = we(c, p);
    }
  })), t.runtime = {}, [t, a];
}, La = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION__, es = La ? window.__REDUX_DEVTOOLS_EXTENSION__.connect() : null, ct = La ? es : null, Pa = (e) => (t, n) => {
  const a = e(t, n);
  return ct == null || ct.send(n, a), a;
}, ts = () => ({
  dashboard: {},
  rows: [{ columns: [{ width: 12 }] }],
  visualizations: {},
  table: {
    label: "Data Table",
    show: !1,
    showDownloadUrl: !1,
    showVertical: !0
  }
}), ns = (e, t) => {
  switch (t.type) {
    case "ADD_FOOTNOTE": {
      const { id: n, rowIndex: a, config: o } = t.payload, i = e.config.rows.map((l, s) => s === a ? { ...l, footnotesId: n } : l);
      return {
        ...e,
        config: { ...e.config, rows: i, visualizations: { ...e.config.visualizations, [n]: o } }
      };
    }
    case "ADD_NEW_DASHBOARD": {
      const n = e.config.multiDashboards, a = "New Dashboard " + (n.length + 1), o = [...n, { ...ts(), label: a }];
      return ge(e, o);
    }
    case "UPDATE_CONFIG": {
      const [n, a] = vt(e)(...t.payload);
      return { ...e, config: n, filteredData: a };
    }
    case "APPLY_CONFIG": {
      const [n, a] = vt(e)(...t.payload), o = [...Object.values(n.visualizations), ...n.rows].map((i) => i.dataKey).reduce((i, l) => {
        var c;
        const s = e.data[l] || ((c = e.config.datasets[l]) == null ? void 0 : c.data);
        return s && (i[l] = s), i;
      }, {});
      return { ...je, config: n, filteredData: a, data: o };
    }
    case "SET_CONFIG":
      return { ...e, config: { ...e.config, ...t.payload } };
    case "SET_DATA":
      return { ...e, data: t.payload };
    case "SET_FILTERED_DATA":
      return { ...e, filteredData: t.payload };
    case "SET_LOADING":
      return { ...e, loading: t.payload };
    case "SET_PREVIEW":
      return { ...e, preview: t.payload };
    case "SET_SHARED_FILTERS": {
      const n = t.payload, a = { ...e.config.dashboard, sharedFilters: n };
      if (e.config.multiDashboards) {
        const o = e.config.activeDashboard, i = A.cloneDeep(e.config.multiDashboards);
        i[o].dashboard = a;
        const l = ge(e, i);
        return { ...l, config: { ...l.config, dashboard: a } };
      }
      return { ...e, config: { ...e.config, dashboard: a } };
    }
    case "SET_TAB_SELECTED":
      return { ...e, tabSelected: t.payload };
    case "REMOVE_MULTIDASHBOARD_AT_INDEX": {
      const n = [...e.config.multiDashboards];
      return A.remove(n, (a, o) => o === t.payload), n.length === 0 ? { ...e, config: A.omit(e.config, "multiDashboards") } : ge(e, n);
    }
    case "RENAME_DASHBOARD_TAB": {
      const n = e.config.multiDashboards.map((o) => (o.label === t.payload.current && (o.label = t.payload.new), o)), a = { ...e.config, label: t.payload.new };
      return ge({ ...e, newConfig: a }, n);
    }
    case "REORDER_MULTIDASHBOARDS": {
      const { newIndex: n, currentIndex: a } = t.payload, o = [...e.config.multiDashboards];
      o.splice(n, 0, o.splice(a, 1)[0]);
      const i = { ...e.config, activeDashboard: n };
      return ge({ ...e, config: i }, o);
    }
    case "SAVE_CURRENT_CHANGES": {
      const n = e.config.activeDashboard, a = [...e.config.multiDashboards], o = a[n].label, i = A.pick(e.config, ["dashboard", "visualizations", "rows"]);
      return a[n] = { ...i, label: o }, ge(e, a);
    }
    case "INITIALIZE_MULTIDASHBOARDS": {
      const n = "New Dashboard 1", o = [{ ...A.pick(e.config, ["dashboard", "visualizations", "rows"]), label: n }], i = { ...e.config, activeDashboard: 0 };
      return ge({ ...e, config: i }, o);
    }
    case "SWITCH_CONFIG": {
      const n = t.payload, a = e.config.multiDashboards[n];
      return { ...e, config: { ...e.config, ...a, activeDashboard: n } };
    }
    case "TOGGLE_ROW": {
      const { rowIndex: n, colIndex: a } = t.payload, o = e.config.rows.map((i, l) => {
        if (l === n) {
          const s = i.columns.map((c, d) => ({ ...c, hide: d === a }));
          return { ...i, columns: s };
        }
        return i;
      });
      return { ...e, config: { ...e.config, rows: o } };
    }
    case "ADD_VISUALIZATION": {
      const { newViz: n, rowIdx: a, colIdx: o } = t.payload, i = n.uid, l = A.cloneDeep(e.config.rows);
      return l[a].columns[o].widget = i, {
        ...e,
        config: { ...e.config, visualizations: { ...e.config.visualizations, [i]: n }, rows: l }
      };
    }
    case "MOVE_VISUALIZATION": {
      const { rowIdx: n, colIdx: a, widget: o } = t.payload, i = A.cloneDeep(e.config.rows);
      return i[o.rowIdx].columns[o.colIdx].widget = null, i[n].columns[a].widget = o.uid, {
        ...e,
        config: { ...e.config, rows: i }
      };
    }
    case "UPDATE_VISUALIZATION": {
      const { vizKey: n, configureData: a } = t.payload, o = { ...e.config.visualizations[n], ...a };
      return {
        ...e,
        config: { ...e.config, visualizations: { ...e.config.visualizations, [n]: o } }
      };
    }
    case "UPDATE_ROW": {
      const { rowIndex: n, rowData: a } = t.payload, o = e.config.rows.map((i, l) => l === n ? { ...i, ...a } : i);
      return { ...e, config: { ...e.config, rows: o } };
    }
    case "DELETE_WIDGET": {
      const { rowIdx: n, colIdx: a, uid: o } = t.payload, i = A.cloneDeep(e.config.rows);
      i[n].columns[a].widget = null;
      const l = A.cloneDeep(e.config.visualizations);
      delete l[o];
      const s = A.cloneDeep(e.config.dashboard.sharedFilters);
      return s && s.length > 0 && s.forEach((c) => {
        c.usedBy && c.usedBy.indexOf(o) !== -1 && c.usedBy.splice(c.usedBy.indexOf(o), 1);
      }), {
        ...e,
        config: {
          ...e.config,
          dashboard: { ...e.config.dashboard, sharedFilters: s },
          visualizations: l,
          rows: i
        }
      };
    }
    default:
      return e;
  }
}, ge = (e, t) => ({
  ...e,
  config: { ...e.config, multiDashboards: t }
}), as = Pa(ns), rs = (e, t) => {
  switch (t.type) {
    case "ADD_ERROR_MESSAGE": {
      const n = t.payload;
      return [...e, ...n];
    }
    case "DISMISS_ERROR_MESSAGE": {
      const n = [...e];
      return A.remove(n, (a, o) => o === t.payload), n;
    }
  }
}, os = Pa(rs), is = y.createContext({ displayName: "ConfigContext", setTempConfig: () => {
} }), gc = y.createContext(() => {
});
const Ra = ({ children: e, visualizationKey: t, visualizationConfig: n, type: a, component: o, updateConfig: i, viewport: l }) => {
  const [s, c] = r.useState(!0);
  return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("div", { className: "editor-wrapper" }, /* @__PURE__ */ r.createElement("button", { className: `editor-toggle ${s ? "" : "collapsed"}`, title: s ? "Collapse Editor" : "Expand Editor", onClick: () => c(!s) }), /* @__PURE__ */ r.createElement("section", { className: `${s ? "" : "hidden"} editor-panel cove` }, /* @__PURE__ */ r.createElement("div", { "aria-level": 2, role: "heading", className: "heading-2" }, "Configure ", a), /* @__PURE__ */ r.createElement("section", null, e)), /* @__PURE__ */ r.createElement("div", { className: "preview-wrapper" }, /* @__PURE__ */ r.createElement(o, { visualizationKey: t, config: n, updateConfig: i, configUrl: void 0, setEditing: void 0, hostname: void 0, viewport: l }))));
}, ls = ({ config: e, updateConfig: t }) => {
  var i;
  const n = y.useMemo(() => St(e, t), [JSON.stringify(e)]), a = (l) => {
    const s = A.cloneDeep(e.columns);
    delete s[l], t({
      ...e,
      columns: s
    });
  }, o = Object.keys(((i = e.originalFormattedData) == null ? void 0 : i[0]) || {});
  return /* @__PURE__ */ r.createElement(Ka, { allowZeroExpanded: !0 }, /* @__PURE__ */ r.createElement(Ke, null, /* @__PURE__ */ r.createElement(Je, null, /* @__PURE__ */ r.createElement(et, null, "Filters")), /* @__PURE__ */ r.createElement(tt, null, /* @__PURE__ */ r.createElement(Ga, { config: e, updateField: n, rawData: e.originalFormattedData }))), /* @__PURE__ */ r.createElement(Ke, null, /* @__PURE__ */ r.createElement(Je, null, /* @__PURE__ */ r.createElement(et, null, "Columns")), /* @__PURE__ */ r.createElement(tt, null, /* @__PURE__ */ r.createElement(Wa, { config: e, updateField: n, deleteColumn: a }))), /* @__PURE__ */ r.createElement(Ke, null, /* @__PURE__ */ r.createElement(Je, null, /* @__PURE__ */ r.createElement(et, null, "Data Table")), /* @__PURE__ */ r.createElement(tt, null, /* @__PURE__ */ r.createElement(Za, { config: e, columns: o, updateField: n, isDashboard: !0 }))));
}, Nt = ({
  visualizationKey: e,
  config: t,
  updateConfig: n,
  viewport: a,
  isEditor: o
}) => {
  const [i, l] = y.useState(
    Zt(t.filters, t.formattedData || t.data)
  );
  return y.useEffect(() => {
    var s;
    l(
      Zt(t.filters, ((s = t == null ? void 0 : t.formattedData) == null ? void 0 : s.length) > 0 ? t.formattedData : t.data)
    );
  }, [t.filters]), o ? /* @__PURE__ */ r.createElement(
    Ra,
    {
      component: Nt,
      visualizationKey: e,
      visualizationConfig: t,
      updateConfig: n,
      type: "Table",
      viewport: a
    },
    /* @__PURE__ */ r.createElement(ls, { key: e, config: t, updateConfig: n })
  ) : /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
    ir,
    {
      config: t,
      setConfig: n,
      setFilteredData: l,
      filteredData: i,
      excludedData: t.formattedData
    }
  ), /* @__PURE__ */ r.createElement(
    ut,
    {
      expandDataTable: t.table.expanded,
      config: t,
      rawData: t.data,
      runtimeData: i,
      tabbingId: e,
      tableTitle: t.table.label,
      viewport: a || "lg"
    }
  ));
};
const ss = ({ active: e, row: t, visualizations: n, setToggled: a }) => {
  const o = (i, l = null) => {
    l != null && l.key && l.key !== "Enter" || a(i);
  };
  return /* @__PURE__ */ r.createElement("div", { className: "toggle-component" }, t.columns.map((i, l) => {
    if (!i.widget)
      return null;
    const s = n[i.widget].type, c = l === e;
    return /* @__PURE__ */ r.createElement("div", { role: "radio", className: c ? "selected" : "", key: l, onClick: () => o(l), onKeyUp: (d) => o(l, d), "aria-checked": c, tabIndex: 0, "aria-label": `Toggle ${s}` }, Al(n[i.widget]), " ", /* @__PURE__ */ r.createElement("span", null, A.capitalize(s)));
  }));
}, xa = {
  Apply: "Apply Button",
  OnChange: "Filter Change"
}, jn = (e, t) => {
  const n = e[t].key, a = e.map((o, i) => {
    var l;
    return (l = o.parents) != null && l.includes(n) ? i : null;
  }).filter((o) => o !== null);
  return a.length && a.forEach((o) => {
    e[o].active = "";
  }), a;
}, cs = (e, t, n, a) => {
  const o = A.cloneDeep(n), i = o[e];
  if (a.filterBehavior !== xa.Apply || a.autoLoad)
    if ((i == null ? void 0 : i.filterStyle) === te.nestedDropdown)
      o[e].active = t[0], o[e].subGrouping.active = t[1];
    else {
      o[e].active = t, jn(o, e);
      const l = Ge();
      i.setByQueryParameter && l[i.setByQueryParameter] !== i.active && (l[i.setByQueryParameter] = i.active, ia(l));
    }
  else
    o[e].queuedActive = t;
  return [o, jn(o, e)];
}, yt = (e, t) => {
  var a;
  const n = (a = e.sharedFilters) == null ? void 0 : a.filter((o) => o.usedBy && o.usedBy.indexOf(`${t}`) !== -1);
  return (n == null ? void 0 : n.length) > 0 ? n : !1;
}, Se = (e, t, n) => {
  const a = t || {}, { config: o } = e;
  return ve(o).forEach((i) => {
    const l = yt(o.dashboard, i);
    if (l) {
      const { dataKey: s, data: c, dataDescription: d } = o.visualizations[i], p = (n || e.data)[s] || c, f = (n == null ? void 0 : n[s]) || (d ? me(p, d) : p);
      a[i] = we(l, f);
    }
  }), o.rows.forEach((i, l) => {
    if (i.dataKey) {
      const s = yt(o.dashboard, l), { dataKey: c, data: d, dataDescription: p } = i, f = (n || e.data)[c] || d;
      if (s) {
        const v = (n == null ? void 0 : n[c]) ?? p ? me(f, p) : f;
        a[l] = we(s, v);
      } else
        a[l] = f || [];
    }
  }), a;
}, Te = (e) => Object.values(e).some((t) => t.filterBehavior === "Apply Button" && t.type === "dashboardFilters"), us = ({
  filter: e,
  config: t,
  isDashboard: n = !1,
  updateFilterProp: a
}) => {
  const o = e == null ? void 0 : e.subGrouping, i = Object.keys(t.datasets), l = [];
  i.map((f) => {
    Object.keys(t.datasets[f].data[0]).forEach(
      (g) => l.push({
        datasetKey: f,
        columnName: g
      })
    );
  });
  const s = [], c = (f, v) => {
    l.forEach((g) => {
      g.datasetKey === f && g.columnName !== v && s.push(g.columnName);
    });
  }, d = (f) => {
    const v = f.selectedOptions[0].dataset.set, g = f.value;
    a("columnName", g), c(v, g);
  }, p = (f) => {
    const v = f.selectedOptions[0].dataset.set, g = f.value, T = e.values.reduce((h, S) => {
      const u = A.uniq(
        t.datasets[v].data.map((m) => m[e.columnName] === S ? m[g] : "").filter((m) => m !== "")
      ).sort();
      return h[S] = {
        values: u,
        orderedValues: u
      }, h;
    }, {}), O = {
      ...o,
      columnName: g,
      valuesLookup: T
    };
    a("subGrouping", O);
  };
  return /* @__PURE__ */ r.createElement("div", { className: "nesteddropdown-editor" }, !n && /* @__PURE__ */ r.createElement(
    Z,
    {
      label: "Label",
      value: e.key,
      updateField: (f, v, g, T) => a("key", T)
    }
  ), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("div", { className: "edit-label column-heading mt-2" }, "Filter Grouping", /* @__PURE__ */ r.createElement("span", null)), /* @__PURE__ */ r.createElement("select", { value: e.columnName, onChange: (f) => d(f.target) }, /* @__PURE__ */ r.createElement("option", { value: "" }, "- Select Option -"), l == null ? void 0 : l.map((f) => /* @__PURE__ */ r.createElement(
    "option",
    {
      value: f.columnName,
      "data-set": f.datasetKey,
      key: `filter_${f.datasetKey}_${f.columnName} `
    },
    f.columnName
  )))), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("div", { className: "edit-label column-heading mt-2" }, "Filter SubGrouping", /* @__PURE__ */ r.createElement("span", null)), /* @__PURE__ */ r.createElement(
    "select",
    {
      value: (o == null ? void 0 : o.columnName) ?? "",
      onChange: (f) => {
        p(f.target);
      }
    },
    /* @__PURE__ */ r.createElement("option", { value: "" }, "- Select Option -"),
    l.map((f) => {
      if (f.columnName !== e.columnName)
        return /* @__PURE__ */ r.createElement(
          "option",
          {
            value: f.columnName,
            "data-set": f.datasetKey,
            key: `subFilter_${f.datasetKey}_${f.columnName} `
          },
          f.columnName
        );
    })
  )));
}, ds = ({ filter: e, config: t, updateFilterProp: n }) => {
  const [a, o] = y.useState([]), i = new be(), l = Object.values(te), s = (t.dashboard.sharedFilters || []).filter(({ key: u, type: m }) => u !== e.key && m !== "datafilter").map(({ key: u }) => u), c = kt(t.rows), [d, p] = y.useMemo(() => {
    const u = {}, m = Object.keys(t.visualizations).filter((E) => {
      var Ae;
      const C = c[E];
      if (!C)
        return !1;
      const D = t.visualizations[E];
      if (D.type === "dashboardFilters")
        return !1;
      const I = ((Ae = D.general) == null ? void 0 : Ae.title) || D.title || E;
      u[E] = I;
      const k = !e.usedBy || e.usedBy.indexOf(E) === -1, X = D.usesSharedFilter, ae = C.row, U = t.rows[ae].dataKey;
      return e.setBy !== E && k && !X && !U;
    }), b = [];
    t.rows.forEach((E, C) => {
      E.dataKey && (u[C] = `Row ${C + 1}`, b.push(C));
    });
    const w = b.filter((E) => !e.usedBy || e.usedBy.indexOf(E.toString()) === -1);
    return [u, [...m, ...w]];
  }, [t.visualizations, e.usedBy, e.setBy, c]), f = async () => {
    const u = {}, m = Object.keys(t.datasets);
    for (let b = 0; b < m.length; b++) {
      const w = m[b];
      let E = t.datasets[w];
      if (!E.data && E.dataUrl && (E = await Ce(E.dataUrl), E.dataDescription))
        try {
          E = i.autoStandardize(E.data), E = i.developerStandardize(E.data, E.dataDescription);
        } catch {
        }
      E.data && E.data.forEach((C) => {
        Object.keys(C).forEach((D) => {
          u[D] = !0;
        });
      });
    }
    o(Object.keys(u));
  };
  y.useEffect(() => {
    f();
  }, [t.datasets]);
  const v = (u, m) => {
    m !== "" && (u.usedBy || (u.usedBy = []), u.usedBy.push(m), n("usedBy", u.usedBy));
  }, g = (u, m) => {
    let b = u.usedBy.indexOf(m);
    b !== -1 && (u.usedBy.splice(b, 1), n("usedBy", u.usedBy));
  }, T = (u, m) => {
    const E = { ...A.cloneDeep(e).apiFilter || { apiEndpoint: "", valueSelector: "", textSelector: "" }, [u]: m };
    n("apiFilter", E);
  }, O = (u) => {
    n("filterStyle", u);
  }, h = e.filterStyle === te.nestedDropdown, S = ({ isSubgroup: u = !1 }) => {
    var w, E, C;
    const m = u ? "subgroupTextSelector" : "textSelector", b = u ? "subgroupValueSelector" : "valueSelector";
    return /* @__PURE__ */ r.createElement(r.Fragment, null, !u && /* @__PURE__ */ r.createElement(
      Z,
      {
        label: "API Endpoint: ",
        value: (w = e.apiFilter) == null ? void 0 : w.apiEndpoint,
        updateField: (D, I, k, X) => T("apiEndpoint", X),
        tooltip: /* @__PURE__ */ r.createElement(r.Fragment, null, h && /* @__PURE__ */ r.createElement(x, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(x.Target, null, /* @__PURE__ */ r.createElement(P, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(x.Content, null, /* @__PURE__ */ r.createElement("p", null, "Your API Endpoint should return both value selector values."))))
      }
    ), /* @__PURE__ */ r.createElement("div", { className: h ? "border border-dark p-1 my-1" : "" }, /* @__PURE__ */ r.createElement(
      Z,
      {
        label: `${u ? "Subgroup " : ""}Value Selector:`,
        value: ((E = e == null ? void 0 : e.apiFilter) == null ? void 0 : E[b]) || "",
        updateField: (D, I, k, X) => T(b, X),
        tooltip: /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(x, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(x.Target, null, /* @__PURE__ */ r.createElement(P, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(x.Content, null, /* @__PURE__ */ r.createElement("p", null, "Value to use in the html option element"))), " * Required")
      }
    ), /* @__PURE__ */ r.createElement(
      Z,
      {
        label: `${u ? "Subgroup " : ""}Display Text Selector:`,
        value: ((C = e == null ? void 0 : e.apiFilter) == null ? void 0 : C[m]) || "",
        updateField: (D, I, k, X) => T(m, X),
        tooltip: /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(x, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(x.Target, null, /* @__PURE__ */ r.createElement(P, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(x.Content, null, /* @__PURE__ */ r.createElement("p", null, "Text to use in the html option element. If none is applied value selector will be used."))), " * Optional")
      }
    )));
  };
  return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Filter Type: "), /* @__PURE__ */ r.createElement(
    "select",
    {
      defaultValue: e.type || "",
      onChange: (u) => n("type", u.target.value),
      disabled: !!e.type
    },
    /* @__PURE__ */ r.createElement("option", { value: "" }, "- Select Option -"),
    /* @__PURE__ */ r.createElement("option", { value: "urlfilter" }, "URL"),
    /* @__PURE__ */ r.createElement("option", { value: "datafilter" }, "Data")
  )), e.type !== void 0 && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Filter Style: "), /* @__PURE__ */ r.createElement(
    "select",
    {
      value: e.filterStyle || te.dropdown,
      onChange: (u) => O(u.target.value)
    },
    l.map((u) => /* @__PURE__ */ r.createElement("option", { value: u, key: `filter-style-select-item-${u}` }, u))
  )), e.filterStyle === te.dropdown && /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "mr-1" }, "Show Dropdown"), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      checked: e.showDropdown,
      onChange: (u) => {
        n("showDropdown", !e.showDropdown);
      }
    }
  )), /* @__PURE__ */ r.createElement(
    Z,
    {
      label: "Label",
      value: e.key,
      updateField: (u, m, b, w) => n("key", w)
    }
  ), e.filterStyle === te.multiSelect && /* @__PURE__ */ r.createElement(
    Z,
    {
      label: "Select Limit",
      value: e.selectLimit,
      updateField: (u, m, b, w) => n("selectLimit", w),
      type: "number",
      tooltip: /* @__PURE__ */ r.createElement(x, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(x.Target, null, /* @__PURE__ */ r.createElement(P, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(x.Content, null, /* @__PURE__ */ r.createElement("p", null, "The maximum number of items that can be selected.")))
    }
  ), e.type === "urlfilter" && /* @__PURE__ */ r.createElement(r.Fragment, null, !Te(t.visualizations) && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "URL to Filter: "), /* @__PURE__ */ r.createElement(
    "select",
    {
      defaultValue: e.datasetKey || "",
      onChange: (u) => n("datasetKey", u.target.value)
    },
    /* @__PURE__ */ r.createElement("option", { value: "" }, "- Select Option -"),
    Object.keys(t.datasets).map((u) => t.datasets[u].dataUrl ? /* @__PURE__ */ r.createElement("option", { key: u, value: u }, t.datasets[u].dataUrl) : null)
  )), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Filter By: "), /* @__PURE__ */ r.createElement(
    "select",
    {
      defaultValue: e.filterBy || "",
      onChange: (u) => n("filterBy", u.target.value)
    },
    /* @__PURE__ */ r.createElement("option", { value: "" }, "- Select Option -"),
    /* @__PURE__ */ r.createElement("option", { key: "query-string", value: "Query String" }, "Query String"),
    /* @__PURE__ */ r.createElement("option", { key: "file-name", value: "File Name" }, "File Name")
  )), e.filterBy === "File Name" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
    Z,
    {
      label: "File Name: ",
      value: e.fileName || "",
      updateField: (u, m, b, w) => n("fileName", w),
      tooltip: /* @__PURE__ */ r.createElement(x, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(x.Target, null, /* @__PURE__ */ r.createElement(P, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(x.Content, null, /* @__PURE__ */ r.createElement("p", null, "Add ${query} to replace the filename with the active dropdown value.")))
    }
  ), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "White Space Replacments", /* @__PURE__ */ r.createElement(x, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(x.Target, null, /* @__PURE__ */ r.createElement(P, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(x.Content, null, /* @__PURE__ */ r.createElement("p", null, "Set how whitespace characters will be handled in the file request")))), /* @__PURE__ */ r.createElement(
    "select",
    {
      defaultValue: e.whitespaceReplacement || "Keep Spaces",
      onChange: (u) => n("whitespaceReplacement", u.target.value)
    },
    /* @__PURE__ */ r.createElement("option", { key: "remove-spaces", value: "Remove Spaces" }, "Remove Spaces"),
    /* @__PURE__ */ r.createElement("option", { key: "replace-with-underscore", value: "Replace With Underscore" }, "Replace With Underscore"),
    /* @__PURE__ */ r.createElement("option", { key: "keep-spaces", value: "Keep Spaces" }, "Keep Spaces")
  )))), e.filterBy === "Query String" && /* @__PURE__ */ r.createElement(
    Z,
    {
      label: "Query string parameter",
      value: e.queryParameter,
      updateField: (u, m, b, w) => n("queryParameter", w)
    }
  ), /* @__PURE__ */ r.createElement(S, null), h && /* @__PURE__ */ r.createElement(S, { isSubgroup: !0 }), !!s.length && /* @__PURE__ */ r.createElement(
    Xt,
    {
      label: "Parent Filter(s): ",
      options: s.map((u) => ({ value: u, label: u })),
      fieldName: "parents",
      selected: e.parents,
      updateField: (u, m, b, w) => {
        n("parents", w);
      }
    }
  ), /* @__PURE__ */ r.createElement(
    Xt,
    {
      label: "Used By: (optional)",
      tooltip: /* @__PURE__ */ r.createElement(x, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(x.Target, null, /* @__PURE__ */ r.createElement(P, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(x.Content, null, /* @__PURE__ */ r.createElement("p", null, "Select if you would like specific visualizations or rows to use this filter. Otherwise the filter will be added to all api requests."))),
      options: [...p, ...e.usedBy || []].map((u) => ({
        value: u,
        label: d[u]
      })),
      fieldName: "usedBy",
      selected: e.usedBy,
      updateField: (u, m, b, w) => {
        n("usedBy", w);
      }
    }
  ), /* @__PURE__ */ r.createElement(
    Z,
    {
      label: "Reset Label: ",
      value: e.resetLabel || "",
      updateField: (u, m, b, w) => n("resetLabel", w)
    }
  ), /* @__PURE__ */ r.createElement(
    Z,
    {
      label: "Default Value Set By Query String Parameter: ",
      value: e.setByQueryParameter || "",
      updateField: (u, m, b, w) => n("setByQueryParameter", w)
    }
  )), e.type === "datafilter" && /* @__PURE__ */ r.createElement(r.Fragment, null, e.filterStyle !== te.nestedDropdown ? /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Filter: "), /* @__PURE__ */ r.createElement(
    "select",
    {
      value: e.columnName,
      onChange: (u) => {
        n("columnName", u.target.value);
      }
    },
    /* @__PURE__ */ r.createElement("option", { value: "" }, "- Select Option -"),
    a.map((u) => /* @__PURE__ */ r.createElement("option", { value: u, key: `filter-column-select-item-${u}` }, u))
  )), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Show Dropdown"), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      defaultChecked: e.showDropdown === !0,
      onChange: (u) => {
        n("showDropdown", !e.showDropdown);
      }
    }
  ))) : /* @__PURE__ */ r.createElement(
    us,
    {
      filter: e,
      updateFilterProp: (u, m) => {
        n(u, m);
      },
      isDashboard: !0,
      config: t
    }
  ), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Set By: "), /* @__PURE__ */ r.createElement("select", { value: e.setBy, onChange: (u) => n("setBy", u.target.value) }, /* @__PURE__ */ r.createElement("option", { value: "" }, "- Select Option -"), Object.keys(t.visualizations).filter((u) => t.visualizations[u].type !== "dashboardFilters").map((u) => {
    var b;
    const m = t.visualizations[u];
    return /* @__PURE__ */ r.createElement("option", { value: u, key: `set-by-select-item-${u}` }, ((b = m.general) == null ? void 0 : b.title) || m.title || u);
  }))), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Used By: "), /* @__PURE__ */ r.createElement("ul", null, e.usedBy && e.usedBy.map((u) => /* @__PURE__ */ r.createElement("li", { key: `used-by-list-item-${u}` }, /* @__PURE__ */ r.createElement("span", null, d[u] || u), " ", /* @__PURE__ */ r.createElement(
    "button",
    {
      onClick: (m) => {
        m.preventDefault(), g(e, u);
      }
    },
    "X"
  )))), /* @__PURE__ */ r.createElement("select", { value: "", onChange: (u) => v(e, u.target.value) }, /* @__PURE__ */ r.createElement("option", { value: "" }, "- Select Option -"), p.map((u) => /* @__PURE__ */ r.createElement("option", { value: u, key: `used-by-select-item-${u}` }, d[u] || u)))), /* @__PURE__ */ r.createElement(
    Z,
    {
      label: "Reset Label: ",
      value: e.resetLabel || "",
      updateField: (u, m, b, w) => n("resetLabel", w)
    }
  ), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Parent Filter: "), /* @__PURE__ */ r.createElement(
    "select",
    {
      value: e.parents || [],
      onChange: (u) => {
        n("parents", u.target.value);
      }
    },
    /* @__PURE__ */ r.createElement("option", { value: "" }, "Select a filter"),
    t.dashboard.sharedFilters && t.dashboard.sharedFilters.map((u) => {
      if (u.key !== e.key)
        return /* @__PURE__ */ r.createElement("option", { key: u.key }, u.key);
    })
  )), /* @__PURE__ */ r.createElement(
    Z,
    {
      label: "Default Value Set By Query String Parameter: ",
      value: e.setByQueryParameter || "",
      updateField: (u, m, b, w) => n("setByQueryParameter", w)
    }
  ))));
}, fs = ({ removeFilterCompletely: e, removeFilterFromViz: t, filterIndex: n }) => {
  const { overlay: a } = ce(), { config: o } = y.useContext(Q), i = Object.values(o.visualizations).filter((s) => {
    var c;
    return (c = s.sharedFilterIndexes) == null ? void 0 : c.map(Number).includes(Number(n));
  }).length > 1, l = i ? "This filter is used by multiple visualizations. You can either delete the filter from this visualization only or you can delete the filter completely, which will also remove it from other visualizations." : "Are you sure you want to delete this filter?";
  return /* @__PURE__ */ r.createElement(le, { showClose: !0 }, /* @__PURE__ */ r.createElement(le.Content, null, /* @__PURE__ */ r.createElement("p", null, l), i && /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "btn btn-warning",
      onClick: () => {
        t(n), a == null || a.actions.toggleOverlay();
      }
    },
    "Delete from Visualization"
  ), /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "btn btn-danger",
      onClick: () => {
        e(n), a == null || a.actions.toggleOverlay();
      }
    },
    "Delete",
    i ? " Completely" : ""
  )));
}, ms = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return (Object.values(t) || []).forEach((o) => {
    o == null || o.forEach((i) => {
      const l = i[e];
      if (l !== void 0) {
        const s = String(l).trim();
        n.add(s);
      }
    });
  }), Array.from(n);
}, ps = (e) => {
  var t;
  return e.type === "urlfilter" ? (t = e.apiFilter) == null ? void 0 : t.valueSelector : e.columnName;
}, bt = (e, t) => e == null ? void 0 : e.map((n) => {
  if (n.type === "urlfilter")
    return n;
  const a = A.cloneDeep(n), o = ms(ps(n), t);
  if (a.values = o, o.length > 0) {
    const i = oa(a);
    if (i)
      a.active = i;
    else if (n.multiSelect) {
      const l = a.values, s = Array.isArray(a.active) ? a.active : [a.active];
      a.active = s.filter((c) => l.includes(c));
    } else {
      const l = e.find((c) => c.resetLabel), s = l ? l.resetLabel : a.values[0] || a.active;
      a.active = s;
    }
  }
  return a;
}), gs = ({ vizConfig: e, updateConfig: t }) => {
  const { config: n, loadAPIFilters: a, data: o } = y.useContext(Q), { overlay: i } = ce(), {
    dashboard: { sharedFilters: l },
    visualizations: s
  } = n, c = y.useContext(J), d = y.useMemo(() => {
    const h = n.visualizations[e.uid].sharedFilterIndexes.map(
      Number
    );
    return n.dashboard.sharedFilters.map(({ key: S }, u) => [u, S]).filter(([S]) => !h.includes(S)).map(([S, u]) => /* @__PURE__ */ r.createElement("option", { key: S, value: S }, `${S} - ${u}`));
  }, [n.visualizations, e.uid]), p = y.useState({}), [f, v] = y.useState(!1), g = (h, S, u) => {
    const m = A.cloneDeep(l), {
      apiEndpoint: b,
      valueSelector: w,
      textSelector: E,
      subgroupValueSelector: C,
      subgroupTextSelector: D
    } = l[S].apiFilter || {}, I = u.apiEndpoint !== b || u.valueSelector !== w || u.textSelector !== E || u.subgroupValueSelector !== C || u.subgroupTextSelector !== D;
    if (m[S][h] = u, h === "columnName") {
      m[S].subGrouping && delete m[S].subGrouping;
      const k = bt(m, o);
      c({ type: "SET_SHARED_FILTERS", payload: k });
    } else
      h === "filterStyle" ? (m[S] = {
        ...m[S],
        active: "",
        apiFilter: {
          apiEndpoint: "",
          subgroupValueSelector: "",
          textSelector: "",
          valueSelector: ""
        },
        filterStyle: u
      }, c({ type: "SET_SHARED_FILTERS", payload: m })) : h === "apiFilter" && u.apiEndpoint && u.valueSelector && I ? (l[S].filterStyle === te.nestedDropdown && u.subgroupValueSelector && (m[S].subGrouping = {
        active: "",
        columnName: "",
        setByQueryParameter: "",
        valuesLookup: {}
      }), a(m, {})) : c({ type: "SET_SHARED_FILTERS", payload: m });
  }, T = (h) => {
    const S = A.cloneDeep(l);
    S.splice(h, 1);
    const u = Object.keys(l).slice(h + 1), m = s;
    Object.keys(m).forEach((b) => {
      const w = m[b];
      if (w.type === "dashboardFilters") {
        const E = w.sharedFilterIndexes.filter((C) => C != h).map((C) => u.includes(C.toString()) ? C - 1 : C);
        c({ type: "UPDATE_VISUALIZATION", payload: { vizKey: b, configureData: { sharedFilterIndexes: E } } });
      }
    }), c({ type: "SET_SHARED_FILTERS", payload: S });
  }, O = () => {
    const h = A.cloneDeep(l) || [], u = { key: "New Dashboard Filter " + (h.length + 1), showDropdown: !0, values: [] };
    c({ type: "SET_SHARED_FILTERS", payload: [...h, u] }), t({ ...e, sharedFilterIndexes: [...e.sharedFilterIndexes, h.length] });
  };
  return /* @__PURE__ */ r.createElement(qa, { allowZeroExpanded: !0 }, /* @__PURE__ */ r.createElement(jt, null, /* @__PURE__ */ r.createElement(qt, null, /* @__PURE__ */ r.createElement(Gt, null, "General")), /* @__PURE__ */ r.createElement(Wt, null, /* @__PURE__ */ r.createElement(
    ar,
    {
      value: e.filterBehavior,
      label: "Filter Behavior",
      updateField: (h, S, u, m) => {
        t({ ...e, filterBehavior: m });
      },
      options: ["Apply Button", "Filter Change"],
      tooltip: /* @__PURE__ */ r.createElement(x, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(x.Target, null, /* @__PURE__ */ r.createElement(P, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(x.Content, null, /* @__PURE__ */ r.createElement("p", null, 'The Apply Button option changes the visualization when the user clicks "apply". The Filter Change option immediately changes the visualization when the selection is changed.')))
    }
  ), e.filterBehavior === "Apply Button" && /* @__PURE__ */ r.createElement(
    Z,
    {
      label: "Apply Filter Button Text",
      maxLength: 20,
      value: e.applyFiltersButtonText,
      updateField: (h, S, u, m) => {
        t({ ...e, applyFiltersButtonText: m });
      }
    }
  ), e.filterBehavior === "Filter Change" && /* @__PURE__ */ r.createElement(
    Me,
    {
      label: "Auto Load",
      value: e.autoLoad,
      updateField: (h, S, u, m) => {
        t({ ...e, autoLoad: m });
      },
      tooltip: /* @__PURE__ */ r.createElement(x, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(x.Target, null, /* @__PURE__ */ r.createElement(P, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(x.Content, null, /* @__PURE__ */ r.createElement("p", null, "Check if you would like for all URL filters to automatically select a value when a parent filter is changed.")))
    }
  ))), /* @__PURE__ */ r.createElement(jt, null, /* @__PURE__ */ r.createElement(qt, null, /* @__PURE__ */ r.createElement(Gt, null, "Filters")), /* @__PURE__ */ r.createElement(Wt, null, e.sharedFilterIndexes.map((h) => {
    const S = l[h];
    return /* @__PURE__ */ r.createElement(
      Qa,
      {
        key: S.key + h,
        fieldName: S.key,
        fieldKey: h,
        fieldType: "Dashboard Filter",
        controls: p,
        deleteField: () => {
          i == null || i.actions.openOverlay(
            /* @__PURE__ */ r.createElement(
              fs,
              {
                removeFilterCompletely: T,
                removeFilterFromViz: (u) => {
                  t({
                    ...e,
                    sharedFilterIndexes: e.sharedFilterIndexes.filter((m) => m !== u)
                  });
                },
                filterIndex: h
              }
            )
          );
        }
      },
      /* @__PURE__ */ r.createElement(
        ds,
        {
          filter: S,
          updateFilterProp: (u, m) => {
            g(u, h, m);
          },
          config: n
        }
      )
    );
  }), /* @__PURE__ */ r.createElement("button", { onClick: O, className: "btn btn-primary full-width" }, "Add Filter"), f ? /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Select Existing Dashboard Filter", /* @__PURE__ */ r.createElement(x, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(x.Target, null, /* @__PURE__ */ r.createElement(P, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(x.Content, null, /* @__PURE__ */ r.createElement("p", null, "This feature is indentended to support legacy functionality. Be advised that any change to the filter in this editor will reflect on the whole dashboard.", " ")))), /* @__PURE__ */ r.createElement(
    "select",
    {
      value: "",
      onChange: (h) => {
        t({
          ...e,
          sharedFilterIndexes: [...e.sharedFilterIndexes, h.target.value]
        }), v(!1);
      }
    },
    [
      /* @__PURE__ */ r.createElement("option", { key: "select", value: "" }, "Select"),
      ...d
    ]
  )) : /* @__PURE__ */ r.createElement("button", { onClick: () => v(!0), className: "btn btn-primary full-width" }, "Add Existing Dashboard Filter"))));
}, hs = (e) => e.replace(/"/g, ""), vs = (e) => e.match(/[a-zA-Z]/) ? !1 : !isNaN(parseInt(e)), Et = (e, t) => {
  const n = e.includes("?");
  return t.filter(({ value: a }) => a !== "").map(({ key: a, value: o }, i) => {
    const l = i === 0 && !n ? "?" : "&", s = a.match(/\$.*/);
    return vs(o) || s ? l + a + "=" + o : l + a + `="${hs(o)}"`;
  }).join("");
}, ys = (e, t, n = []) => e.reduce((a, o, i) => {
  const l = o, s = n.includes(i);
  return t[l] != null && !s ? a[l] = t[l] : a[l] = null, a;
}, {}), bs = (e, t) => {
  const n = t.filter((a) => {
    var o;
    return (o = e.parents) == null ? void 0 : o.includes(a.key);
  });
  return (n || []).length ? n.flatMap((a) => {
    if (a.filterStyle === te.nestedDropdown) {
      const o = a.apiFilter.valueSelector || "", i = a.apiFilter.subgroupValueSelector || "", l = a.queuedActive ? a.queuedActive[0] : a.active || "", s = a.queuedActive ? a.queuedActive[1] : a.subGrouping.active || "";
      return [
        { key: o, value: l },
        { key: i, value: s }
      ];
    } else {
      const o = a.queryParameter || a.apiFilter.valueSelector || "", i = a.queuedActive || a.active || "";
      return Array.isArray(i) ? i.map((l) => ({ key: o, value: l.toString() })) : [{ key: o, value: i.toString() }];
    }
  }) : null;
}, Es = (e, t) => {
  const { textSelector: n, valueSelector: a, subgroupTextSelector: o, subgroupValueSelector: i } = t;
  if (i) {
    const l = {};
    return e.forEach((s) => {
      l[s[a]] || (l[s[a]] = { text: s[n || a], value: s[a], subOptions: [] }), l[s[a]].subOptions.push({ text: s[o], value: s[i] });
    }), Object.values(l);
  }
  return e.map((l) => ({ text: l[n || a], value: l[a] }));
}, Ds = (e, t) => {
  const n = {};
  return e.forEach((a, o) => {
    var p;
    const i = (p = a.apiFilter) == null ? void 0 : p.apiEndpoint;
    if (!i)
      return;
    const l = i;
    if (t[l])
      return;
    const s = bs(a, e);
    if (s == null ? void 0 : s.some(({ value: f }) => f === ""))
      return;
    const d = i + (s ? Et(i, s) : "");
    n[d] = [l, o];
  }), n;
}, qn = (e, t, n, a) => {
  var l, s;
  const o = A.cloneDeep(n), i = A.cloneDeep(o[e]);
  if (!a.length || !(t != null && t.length))
    return i;
  if (a.includes(e)) {
    const c = o.filter((f) => {
      var v;
      return (v = i.parents) == null ? void 0 : v.includes(f.key);
    }), d = c.some((f) => !(f.active || f.queuedActive));
    if (c && d)
      return i;
    const p = i.filterStyle === te.multiSelect ? [(l = t[0]) == null ? void 0 : l.value] : (s = t[0]) == null ? void 0 : s.value;
    if (i.active)
      if (i.filterStyle === te.multiSelect) {
        const f = i.active.filter(
          (v) => t.find((g) => g.value === v)
        );
        i.active = f.length ? f : p;
      } else {
        const f = t.find((v) => v.value === i.active);
        i.active = f ? f.value : p;
      }
    else {
      const v = Ge()[i == null ? void 0 : i.setByQueryParameter];
      i.active = v || p;
    }
  }
  return i;
};
const Ma = ({
  apiFilterDropdowns: e,
  visualizationConfig: t,
  setConfig: n,
  currentViewport: a,
  isEditor: o = !1
}) => {
  var u, m;
  const i = y.useContext(Q), { config: l, reloadURLData: s, loadAPIFilters: c, setAPIFilterDropdowns: d } = i, p = y.useContext(J), f = (b) => {
    b.preventDefault();
    const w = A.cloneDeep(i.config.dashboard), E = Object.values(i.config.visualizations).filter((D) => D.type === "dashboardFilters").reduce((D, I) => I.autoLoad ? D : [...D, I.sharedFilterIndexes], []);
    if (!w.sharedFilters.some((D, I) => E.includes(I) ? !D.active && !D.queuedActive : !1)) {
      if (Te(i.config.visualizations)) {
        const D = Ge();
        let I = !1;
        w.sharedFilters.forEach((k) => {
          k.queuedActive && (lr(k), k.setByQueryParameter && D[k.setByQueryParameter] !== k.active && (D[k.setByQueryParameter] = Array.isArray(k.active) ? k.active.join(",") : k.active, I = !0));
        }), I && ia(D);
      }
      p({ type: "SET_SHARED_FILTERS", payload: w.sharedFilters }), p({ type: "SET_FILTERED_DATA", payload: Se(A.cloneDeep(i)) }), c(w.sharedFilters, e).then((D) => {
        s(D);
      }).catch((D) => {
        console.error(D);
      });
    }
  }, v = (b, w) => {
    const E = A.cloneDeep(l);
    let [C, D] = cs(
      b,
      w,
      E.dashboard.sharedFilters,
      t
    );
    if (Te(l.visualizations)) {
      const I = t.autoLoad, k = E.dashboard.sharedFilters.some((U) => !U.active), X = C.filter((U) => U.apiFilter).map((U) => U.apiFilter.apiEndpoint), ae = ys(
        X,
        e,
        D
      );
      I && !k ? (d(ae), c(C, ae).then((U) => {
        s(U);
      })) : (C[b].queuedActive = w, p({ type: "SET_DATA", payload: {} }), p({ type: "SET_FILTERED_DATA", payload: {} }), d(ae), c(C, ae));
    } else if (C[b].type === "urlfilter" && C[b].apiFilter)
      s(C);
    else {
      const I = A.cloneDeep(i);
      I.config.dashboard.sharedFilters = C;
      const k = Se(I);
      p({ type: "SET_FILTERED_DATA", payload: k }), p({ type: "SET_SHARED_FILTERS", payload: C });
    }
  }, [g, T] = y.useState(!0), O = () => {
    T(!g), n({
      ...t,
      showEditorPanel: !g
    });
  }, h = (u = t == null ? void 0 : t.sharedFilterIndexes) == null ? void 0 : u.map(Number).map((b) => l.dashboard.sharedFilters[b]), S = h.length ? h.every((b) => b.showDropdown === !1) : !1;
  return S && !o ? /* @__PURE__ */ r.createElement(r.Fragment, null) : /* @__PURE__ */ r.createElement(he.VisualizationWrapper, { config: t, isEditor: o, currentViewport: a }, o && /* @__PURE__ */ r.createElement(
    he.Sidebar,
    {
      displayPanel: g,
      isDashboard: !0,
      title: "Configure Dashboard Filters",
      onBackClick: O
    },
    /* @__PURE__ */ r.createElement(gs, { updateConfig: n, vizConfig: t })
  ), !S && /* @__PURE__ */ r.createElement(he.Responsive, { isEditor: o }, /* @__PURE__ */ r.createElement(
    "div",
    {
      className: `${o ? " is-editor" : ""} cove-component__content col-12 cove-dashboard-filters-container`
    },
    /* @__PURE__ */ r.createElement(
      sr,
      {
        show: (m = t == null ? void 0 : t.sharedFilterIndexes) == null ? void 0 : m.map(Number),
        filters: l.dashboard.sharedFilters || [],
        apiFilterDropdowns: e,
        handleOnChange: v,
        showSubmit: t.filterBehavior === xa.Apply && !t.autoLoad,
        applyFilters: f,
        applyFiltersButtonText: t.applyFiltersButtonText
      }
    )
  )));
}, Ss = new be(), $a = (e, t, n) => {
  var s;
  const a = A.cloneDeep(n.visualizations[e]), o = (s = n.datasets[a.dataKey]) == null ? void 0 : s.data, i = o != null && o.length ? Object.keys(o[0]) : [], l = (yt(n.dashboard, t) || []).filter((c) => i.includes(c.columnName));
  return l.length && (a.formattedData = we(l, o)), a.data = o, a;
}, Ba = (e, t, n, a, o) => {
  if (t === void 0)
    return {};
  const i = A.cloneDeep(n.visualizations[e]), l = n.rows[t];
  if (l.footnotesId && l.footnotesId === e)
    return $a(e, t, n);
  l != null && l.dataKey && Object.assign(i, A.pick(l, ["dataKey", "dataDescription", "formattedData", "data"])), i.formattedData && (i.originalFormattedData = i.formattedData);
  const s = (o == null ? void 0 : o[t]) ?? (o == null ? void 0 : o[e]);
  if (s)
    i.data = s || [], i.formattedData && (i.formattedData = i.data);
  else {
    const c = i.dataKey || "backwards-compatibility";
    i.data = a[c] || [], i.formattedData && (i.formattedData = Ss.developerStandardize(i.data, i.dataDescription) || i.data);
  }
  return i;
}, ws = ({ config: e, updateField: t }) => {
  var d, p, f, v, g, T;
  const n = () => {
    const O = [...e.staticFootnotes || [], { text: "Add Footnote Text" }];
    t(null, null, "staticFootnotes", O);
  }, a = (O, h) => {
    const S = A.cloneDeep(e.staticFootnotes);
    S[O] = h, t(null, null, "staticFootnotes", S);
  }, o = (O) => {
    const h = A.cloneDeep(e.staticFootnotes);
    h.splice(O, 1), t(null, null, "staticFootnotes", h);
  }, i = (O) => [["", "--Select--"]].concat(O.map((h) => [h, h])), l = e.datasets || {}, s = e.dataKey ? i(Object.keys(((p = (d = l[e.dataKey]) == null ? void 0 : d.data) == null ? void 0 : p[0]) || {})) : [], c = i(Object.keys(l));
  return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("em", null, "Dynamic Footnotes"), /* @__PURE__ */ r.createElement("div", { className: "row border p-2" }, /* @__PURE__ */ r.createElement(de, { label: "Select a Footnote Dataset", value: e.dataKey, options: c, fieldName: "dataKey", updateField: t }), e.dataKey && /* @__PURE__ */ r.createElement("div", { className: "p-3" }, /* @__PURE__ */ r.createElement(de, { label: "Footnote Symbol Column", value: (f = e.dynamicFootnotes) == null ? void 0 : f.symbolColumn, options: s, section: "dynamicFootnotes", fieldName: "symbolColumn", updateField: t }), /* @__PURE__ */ r.createElement(de, { label: "Footnote Text Column", value: (v = e.dynamicFootnotes) == null ? void 0 : v.textColumn, options: s, section: "dynamicFootnotes", fieldName: "textColumn", updateField: t }), /* @__PURE__ */ r.createElement(de, { label: "Footnote Order Column", value: (g = e.dynamicFootnotes) == null ? void 0 : g.orderColumn, options: s, section: "dynamicFootnotes", fieldName: "orderColumn", updateField: t }))), /* @__PURE__ */ r.createElement("hr", null), /* @__PURE__ */ r.createElement("em", null, "Static Footnotes"), (T = e.staticFootnotes) == null ? void 0 : T.map((O, h) => /* @__PURE__ */ r.createElement("div", { key: h, className: "row border p-2" }, /* @__PURE__ */ r.createElement("div", { className: "col-8" }, /* @__PURE__ */ r.createElement(de, { label: "Symbol", value: O.symbol, options: [["", "--Select--"], ...Xa], fieldName: "symbol", updateField: (S, u, m, b) => a(h, { ...O, symbol: b }) }), " ", /* @__PURE__ */ r.createElement(Z, { label: "Text", value: O.text, fieldName: "text", updateField: (S, u, m, b) => a(h, { ...O, text: b }) })), /* @__PURE__ */ r.createElement("div", { className: "col-2 ml-4" }, /* @__PURE__ */ r.createElement("button", { className: "btn btn-danger p-1", onClick: () => o(h) }, "Delete")))), /* @__PURE__ */ r.createElement("button", { className: "btn btn-primary", onClick: n }, "Add Static Footnote"));
}, qe = ({ visualizationKey: e, config: t, viewport: n, isEditor: a, updateConfig: o }) => {
  const i = St(t, o);
  if (a)
    return /* @__PURE__ */ r.createElement(Ra, { component: qe, visualizationKey: e, visualizationConfig: t, updateConfig: o, type: "Footnotes", viewport: n }, /* @__PURE__ */ r.createElement(ws, { key: e, config: t, updateField: i }));
  const l = y.useMemo(() => {
    if (t.dataKey && t.dynamicFootnotes) {
      const { symbolColumn: c, textColumn: d, orderColumn: p } = t.dynamicFootnotes, v = (t.formattedData || t.data).map((g) => A.pick(g, [c, d, p]));
      return v.sort((g, T) => g[p] - T[p]), v.map((g) => ({ symbol: g[c], text: g[d] }));
    }
    return [];
  }, [t.dynamicFootnotes, t.formattedData, t.data]), s = t.staticFootnotes || [];
  return /* @__PURE__ */ r.createElement(cr, { footnotes: [...l, ...s] });
}, Ts = ({ allExpanded: e, fontSize: t, groupName: n, currentViewport: a, children: o }) => {
  const [i, l] = y.useState(e), s = { small: 16, medium: 18, large: 20 }, c = ["sm", "xs", "xxs"].includes(a) ? "13px" : `${s[t]}px`;
  return y.useEffect(() => {
    l(e);
  }, [e]), /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
    "div",
    {
      style: { fontSize: c },
      role: "button",
      className: `multi-visualiation-heading${i ? "" : " collapsed"} h4`,
      onClick: () => {
        l(!i);
      },
      tabIndex: 0,
      onKeyDown: (d) => {
        d.keyCode === 13 && l(!i);
      }
    },
    /* @__PURE__ */ r.createElement(P, { display: i ? "minus" : "plus", base: !0 }),
    n
  ), i && o);
}, Cs = ({
  allExpanded: e,
  currentViewport: t,
  groupName: n,
  row: a,
  children: o
}) => a.expandCollapseAllButtons ? /* @__PURE__ */ r.createElement("div", { className: "collapsable-multiviz-container" }, /* @__PURE__ */ r.createElement(
  Ts,
  {
    allExpanded: e,
    fontSize: "26px",
    groupName: n,
    currentViewport: t
  },
  o
)) : /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("h3", null, n), o), Gn = ({
  allExpanded: e,
  filteredDataOverride: t,
  groupName: n,
  row: a,
  rowIndex: o,
  setSharedFilter: i,
  updateChildConfig: l,
  apiFilterDropdowns: s,
  currentViewport: c
}) => {
  const { config: d, filteredData: p, data: f } = y.useContext(Q), [v, g] = r.useState(a.columns.map((u, m) => m === 0)), T = (u) => {
    g(v.map((m, b) => b === u));
  }, O = y.useMemo(() => {
    const u = Object.values(f).flatMap((m) => m);
    return u.length ? u.some((m) => m === void 0) : !0;
  }, [f]), h = y.useMemo(() => {
    if (a.footnotesId) {
      const u = $a(a.footnotesId, o, d);
      if (a.multiVizColumn && t) {
        const m = t[0][a.multiVizColumn], b = u.formattedData.filter((w) => w[a.multiVizColumn] === m);
        u.formattedData = b;
      }
      return u;
    }
    return null;
  }, [d, a, f, p]), S = (u) => {
    const b = Object.values(d.visualizations).filter(
      (w) => w.type === "dashboardFilters"
    ).filter((w) => !w.autoLoad).flatMap((w) => w.sharedFilterIndexes);
    return Te(d.visualizations) && u.autoLoad ? b.some((w) => {
      const { queuedActive: E, active: C, subGrouping: D } = d.dashboard.sharedFilters[w];
      return !C && !E ? !0 : E ? D ? E[0] !== C || E[1] !== D.active : E !== C : !1;
    }) : !1;
  };
  return /* @__PURE__ */ r.createElement(
    "div",
    {
      className: `row mb-5 ${a.equalHeight ? "equal-height" : ""} ${a.toggle ? "toggle" : ""}`,
      key: `row__${o}`
    },
    a.toggle && /* @__PURE__ */ r.createElement(ss, { row: a, visualizations: d.visualizations, active: v.indexOf(!0), setToggled: T }),
    a.columns.map((u, m) => {
      if (u.width) {
        if (!u.widget)
          return /* @__PURE__ */ r.createElement("div", { key: `row__${o}__col__${m}`, className: `col col-${u.width}` });
        const b = Ba(u.widget, o, d, f, p);
        t && (b.data = t, b.formattedData && (b.formattedData = t));
        const w = d.dashboard.sharedFilters && d.dashboard.sharedFilters.filter((k) => k.setBy === u.widget).length > 0, E = w ? d.dashboard.sharedFilters.filter((k) => k.setBy === u.widget)[0].active : void 0, C = /* @__PURE__ */ r.createElement("a", { href: `#data-table-${b.dataKey}`, className: "margin-left-href" }, b.dataKey, " (Go to Table)"), D = O && b.type === "dashboardFilters" && S(b), I = a.toggle === void 0 || a.toggle && v[m];
        return /* @__PURE__ */ r.createElement(
          "div",
          {
            key: `vis__${o}__${m}`,
            className: `p-1 col-12 col-md-${u.width} ${I ? "" : "d-none"}`
          },
          /* @__PURE__ */ r.createElement(
            Cs,
            {
              allExpanded: e,
              currentViewport: c,
              groupName: n,
              row: a
            },
            b.type === "chart" && /* @__PURE__ */ r.createElement(
              Jn,
              {
                key: u.widget,
                config: b,
                dashboardConfig: d,
                isEditor: !1,
                setConfig: (k) => {
                  l(u.widget, k);
                },
                setSharedFilter: w ? i : void 0,
                isDashboard: !0,
                link: d.table && d.table.show && d.datasets && b.table && b.table.showDataTableLink ? C : void 0,
                configUrl: void 0,
                setEditing: void 0,
                hostname: void 0,
                setSharedFilterValue: void 0
              }
            ),
            b.type === "map" && /* @__PURE__ */ r.createElement(
              ta,
              {
                key: u.widget,
                config: b,
                isEditor: !1,
                setConfig: (k) => {
                  l(u.widget, k);
                },
                showLoader: !1,
                setSharedFilter: w ? i : void 0,
                setSharedFilterValue: E,
                isDashboard: !0,
                link: d.table && d.table.show && d.datasets && b.table && b.table.showDataTableLink ? C : void 0
              }
            ),
            b.type === "data-bite" && /* @__PURE__ */ r.createElement(
              ea,
              {
                key: u.widget,
                config: b,
                isEditor: !1,
                setConfig: (k) => {
                  l(u.widget, k);
                },
                isDashboard: !0
              }
            ),
            b.type === "waffle-chart" && /* @__PURE__ */ r.createElement(
              na,
              {
                key: u.widget,
                config: b,
                isEditor: !1,
                setConfig: (k) => {
                  l(u.widget, k);
                },
                isDashboard: !0,
                configUrl: d.table && d.table.show && d.datasets && b.table && b.table.showDataTableLink ? C : void 0
              }
            ),
            b.type === "markup-include" && /* @__PURE__ */ r.createElement(
              aa,
              {
                key: u.widget,
                config: b,
                configUrl: void 0,
                isDashboard: !0,
                isEditor: !1,
                setConfig: (k) => {
                  l(u.widget, k);
                }
              }
            ),
            b.type === "filtered-text" && /* @__PURE__ */ r.createElement(
              Oa,
              {
                key: u.widget,
                config: b,
                isEditor: !1,
                setConfig: (k) => {
                  l(u.widget, k);
                },
                isDashboard: !0,
                configUrl: void 0
              }
            ),
            b.type === "dashboardFilters" && !D && /* @__PURE__ */ r.createElement(
              Ma,
              {
                setConfig: (k) => {
                  l(u.widget, k);
                },
                key: u.widget,
                visualizationConfig: b,
                apiFilterDropdowns: s,
                currentViewport: c
              }
            ),
            b.type === "table" && /* @__PURE__ */ r.createElement(
              Nt,
              {
                key: u.widget,
                updateConfig: (k) => {
                  l(u.widget, k);
                },
                visualizationKey: u.widget,
                config: b,
                viewport: c
              }
            ),
            b.type === "footnotes" && /* @__PURE__ */ r.createElement(
              qe,
              {
                key: u.widget,
                visualizationKey: u.widget,
                config: b,
                viewport: c
              }
            )
          )
        );
      }
      return /* @__PURE__ */ r.createElement(r.Fragment, { key: `vis__${o}__${m}` });
    }),
    a.footnotesId ? /* @__PURE__ */ r.createElement(
      qe,
      {
        isEditor: !1,
        visualizationKey: a.footnotesId,
        config: h,
        viewport: c
      }
    ) : null
  );
}, Wn = function(e = " ", t = "") {
  return this.split(e).map((n) => n.charAt(0).toUpperCase() + n.slice(1)).join(t);
}, Os = (e, t, n) => {
  let a = !1;
  return e.find((o) => {
    if (o.type === "urlfilter" && !Array.isArray(o.active) && o.filterBy === "File Name")
      return a = !0, !0;
  }), Object.keys(n).forEach((o) => {
    decodeURIComponent(n[o]) !== t[o] && (a = !0);
  }), a;
}, Is = ({ visualizations: e, datasets: t, rows: n }) => {
  const a = Object.values(e).map((l) => l.dataKey), o = n.map((l) => l.dataKey), i = A.uniq([...a, ...o]);
  return Object.keys(t).filter((l) => i.includes(l));
}, _s = (e, t, n) => {
  const a = Object.keys(e).flatMap((l) => {
    const s = e[l];
    return s === void 0 ? [] : typeof s == "string" && s.match(/undefined/) ? [] : Array.isArray(s) ? s.map((c) => ({ key: l, value: c })) : { key: l, value: s };
  }), o = t.origin + t.pathname;
  let i = `${o}${Et(o, a)}`;
  if (n !== "") {
    const l = t.pathname.split(".").pop(), s = t.pathname.substring(0, t.pathname.lastIndexOf("/"));
    i = `${t.origin}${s}/${n}.${l}${Et(
      o,
      a
    )}`;
  }
  return i;
}, ks = (e, t, n) => {
  const a = {
    "Remove Spaces": "",
    "Keep Spaces": " ",
    "Replace With Underscore": "_"
  };
  let o = e;
  return t.datasetKey === n && (t.fileName ? o = Wn.call(
    String(t.fileName),
    " ",
    a[t.whitespaceReplacement ?? "Keep Spaces"]
  ) : o = t.active), o != null && o.includes("${query}") && (o = o.replace(
    "${query}",
    Wn.call(
      String(t.active),
      " ",
      a[t.whitespaceReplacement ?? "Keep Spaces"]
    )
  )), o;
}, Ns = (e, t) => Object.keys(e).reduce((n, a) => {
  const o = e[a].dataKey;
  return t[o] && (n[a].formattedData = t[o]), n;
}, A.cloneDeep(e)), Fs = (e, t, n) => {
  var o;
  if (!e.usedBy || !e.usedBy.length)
    return !0;
  const a = (o = e.usedBy) == null ? void 0 : o.map((i) => n[i]);
  return a == null ? void 0 : a.some((i) => (i == null ? void 0 : i.dataKey) === t);
}, As = ({ setAllExpanded: e }) => /* @__PURE__ */ r.createElement("div", { className: "d-block " }, /* @__PURE__ */ r.createElement("div", { className: "d-flex flex-row-reverse mb-2" }, /* @__PURE__ */ r.createElement("button", { className: "btn expand-collapse-buttons", onClick: () => e(!1) }, "- Collapse All"), /* @__PURE__ */ r.createElement("button", { className: "btn expand-collapse-buttons mr-2", onClick: () => e(!0) }, "+ Expand All"))), Ls = (e, t, n, a) => {
  const o = (i, l, s = 3) => {
    if (!i)
      return;
    i = i.map(
      (v, g) => {
        var T;
        return qn(
          g,
          l[(T = v.apiFilter) == null ? void 0 : T.apiEndpoint],
          i,
          a
        );
      }
    );
    const c = i.filter((v) => v.apiFilter), d = new Map(c.map((v) => [v.apiFilter.apiEndpoint, v.apiFilter])), p = Ds(i, l), f = A.cloneDeep(l);
    return Promise.all(
      Object.keys(p).map(
        (v) => new Promise((g) => {
          fetch(v).then((T) => T.json()).then((T) => {
            if (!Array.isArray(T)) {
              console.error("COVE only supports response data in the shape Array<Object>");
              return;
            }
            const [O, h] = p[v], S = d.get(O), u = Es(T, S);
            f[O] = u;
            const m = qn(
              h,
              u,
              i,
              a
            );
            i[h] = m;
          }).catch(() => {
            t({
              type: "ADD_ERROR_MESSAGE",
              payload: "There was a problem returning data. Please try again."
            });
          }).finally(() => {
            g();
          });
        })
      )
    ).then(() => i.reduce((g, T, O) => a.includes(O) && !T.active ? !1 : g, !0) || s === 0 ? (n(f), e({ type: "SET_SHARED_FILTERS", payload: i }), i) : o(i, f, s - 1));
  };
  return o;
};
const Zn = () => /* @__PURE__ */ r.createElement("div", { className: "spinner-border text-primary", role: "status" }, /* @__PURE__ */ r.createElement("span", { className: "sr-only" }, "Loading...")), Ps = ({ fullScreen: e = !1 }) => {
  const t = y.useRef(null);
  return y.useEffect(() => {
    if (t != null && t.current) {
      const n = t.current.parentElement.clientHeight;
      t.current.style.height = `${n}px`;
    }
  }, []), e ? /* @__PURE__ */ r.createElement("div", { ref: t, className: "cove-loader fullscreen" }, /* @__PURE__ */ r.createElement(Zn, null)) : /* @__PURE__ */ r.createElement(Zn, null);
};
function Rs({ initialState: e, isEditor: t = !1, isDebug: n = !1 }) {
  var Ft, At, Lt, Pt, Rt, xt, Mt, $t, Bt, Vt, Ut, zt, Ht;
  const [a, o] = y.useReducer(as, e), [i, l] = y.useReducer(os, []), s = y.useContext(is), [c, d] = y.useState({}), [p, f] = y.useState("lg"), [v] = y.useState(`cove-${Math.random().toString(16).slice(-4)}`), [g, T] = y.useState(!0), [O, h] = y.useState(!1), S = a.tabSelected === "Dashboard Preview", u = y.useMemo(() => {
    const _ = Object.values(a.data);
    return _.length ? _.some((N) => N === void 0) : !0;
  }, [a.data]), m = kt(a.config.rows), b = new be(), w = y.useMemo(() => Object.values(a.config.visualizations).filter((_) => _.type === "dashboardFilters").reduce((_, N) => N.autoLoad ? [..._, ...N.sharedFilterIndexes] : _, []), [a.config.visualizations]), E = Ls(
    o,
    l,
    d,
    w
  ), C = async (_) => {
    const N = A.cloneDeep(a.config);
    if (!N.datasets)
      return;
    const V = _ || N.dashboard.sharedFilters, F = Is(N), B = A.cloneDeep(a.data), H = A.cloneDeep(N.datasets);
    let G = !1, $ = "";
    for (let j = 0; j < F.length; j++) {
      const z = F[j], oe = N.datasets[z];
      if (oe.dataUrl && V) {
        const pe = new URL(oe.runtimeDataUrl || oe.dataUrl, window.location.origin), ue = Object.fromEntries(new URLSearchParams(pe.search)), Y = {};
        if (V.forEach((M) => {
          if (M.type === "urlfilter" && Fs(M, z, N.visualizations)) {
            if (M.filterBy === "File Name" && ($ = ks($, M, z)), M.queryParameter && (Y[M.queryParameter] ? Y[M.queryParameter] = Y[M.queryParameter] + M.active : Y[M.queryParameter] = M.active), M.setByQueryParameter) {
              const se = Object.fromEntries(new URLSearchParams(window.location.search))[M.setByQueryParameter];
              M.apiFilter ? Y[M.apiFilter.valueSelector] = se : Y[M.setByQueryParameter] = se;
            }
            M.apiFilter && M.active && (Y[M.apiFilter.valueSelector] = M.active, M.apiFilter.subgroupValueSelector && M.subGrouping.active && (Y[M.apiFilter.subgroupValueSelector] = M.subGrouping.active));
          }
        }), _ || Os(V, ue, Y)) {
          G = !0;
          const M = _s(
            { ...ue, ...Y },
            pe,
            $
          );
          h(!0), await Ce(M).then((Ie) => {
            let se = Ie;
            if (Ie && oe.dataDescription)
              try {
                se = b.autoStandardize(se), se = b.developerStandardize(se, oe.dataDescription);
              } catch (Va) {
                console.error("Error standardizing data:", Va);
              }
            H[z].data = se, H[z].runtimeDataUrl = M, B[z] = se;
          }).catch((Ie) => {
            console.error(Ie), H[z].data = [], H[z].runtimeDataUrl = M, B[z] = [];
          });
        }
      }
    }
    if (G) {
      o({ type: "SET_DATA", payload: B });
      const j = bt(V, B), z = _ ? { ...N.dashboard, sharedFilters: j } : N.dashboard, oe = Se(
        { ...a, config: { ...a.config, dashboard: z } },
        {},
        B
      );
      o({ type: "SET_FILTERED_DATA", payload: oe });
      const pe = Ns(N.visualizations, B);
      o({ type: "SET_CONFIG", payload: { dashboard: z, datasets: H, visualizations: pe } }), h(!1);
    }
  }, D = (_, N) => {
    const { config: V, filteredData: F } = A.cloneDeep(a);
    for (let H = 0; H < V.dashboard.sharedFilters.length; H++) {
      const G = V.dashboard.sharedFilters[H];
      if (G.setBy === _) {
        G.columnName && (G.active = N[G.columnName]);
        break;
      }
    }
    const B = Se({ ...a, config: V }, F);
    o({ type: "SET_FILTERED_DATA", payload: B }), o({ type: "SET_CONFIG", payload: V }), o({ type: "SET_SHARED_FILTERS", payload: V.dashboard.sharedFilters });
  };
  y.useEffect(() => {
    if (t && !S)
      return;
    const { config: _ } = a;
    Te(_.visualizations) || C();
    const N = bt(_.dashboard.sharedFilters, a.data);
    E(N, c), k(N);
  }, [t, S, (Ft = a.config) == null ? void 0 : Ft.activeDashboard]);
  const I = (_, N) => {
    const V = A.cloneDeep(a.config), F = A.pick(V, ["visualizations", "multiDashboards"]);
    if (F.visualizations[_] = N, F.visualizations[_].formattedData = V.visualizations[_].formattedData, V.multiDashboards) {
      const B = V.activeDashboard, H = [...V.multiDashboards], $ = { label: H[B].label, visualizations: F.visualizations, ...A.pick(V, ["dashboard", "rows"]) };
      H[B] = $, F.multiDashboards = H;
    }
    o({ type: "SET_CONFIG", payload: F }), t && s.setTempConfig(F);
  }, k = (_ = void 0) => {
    const N = A.cloneDeep(a);
    _ && (N.config.dashboard.sharedFilters = _);
    const V = Se(N);
    o({ type: "SET_FILTERED_DATA", payload: V });
  }, X = new Ha((_) => {
    for (let N of _) {
      let V = ja(N.contentRect.width);
      f(V);
    }
  }), ae = y.useCallback((_) => {
    _ !== null && X.observe(_);
  }, []);
  if (a.loading)
    return /* @__PURE__ */ r.createElement(Dt, null);
  let U = null;
  if (t && !S) {
    let _ = !1;
    ve(a.config).forEach((N) => {
      var G;
      const V = (G = m[N]) == null ? void 0 : G.row, F = Ba(
        N,
        V,
        a.config,
        a.data,
        a.filteredData
      );
      F.uid = N, F.type === "footnotes" && (F.formattedData = void 0);
      const B = a.config.dashboard.sharedFilters && a.config.dashboard.sharedFilters.filter(($) => $.setBy === N).length > 0, H = B ? a.config.dashboard.sharedFilters.filter(($) => $.setBy === N)[0].active : void 0;
      if (F.editing) {
        _ = !0;
        const $ = (j) => {
          let z = F.originalFormattedData ? { ...j, formattedData: F.originalFormattedData } : j;
          I(N, z);
        };
        switch (F.type) {
          case "chart":
            U = /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(re, { visualizationKey: N, subEditor: "Chart" }), /* @__PURE__ */ r.createElement(
              Jn,
              {
                key: N,
                config: F,
                isEditor: !0,
                isDebug: n,
                setConfig: $,
                setSharedFilter: B ? D : void 0,
                setSharedFilterValue: H,
                dashboardConfig: a.config,
                isDashboard: !0,
                configUrl: void 0,
                setEditing: void 0,
                hostname: void 0,
                link: void 0
              }
            ));
            break;
          case "map":
            U = /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(re, { visualizationKey: N, subEditor: "Map" }), /* @__PURE__ */ r.createElement(
              ta,
              {
                key: N,
                config: F,
                isEditor: !0,
                isDebug: n,
                setConfig: $,
                setSharedFilter: B ? D : void 0,
                setSharedFilterValue: H,
                isDashboard: !0,
                showLoader: !1,
                dashboardConfig: a.config
              }
            ));
            break;
          case "data-bite":
            U = /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(re, { visualizationKey: N, subEditor: "Data Bite" }), /* @__PURE__ */ r.createElement(
              ea,
              {
                key: N,
                config: { ...F, newViz: !0 },
                isEditor: !0,
                setConfig: $,
                isDashboard: !0
              }
            ));
            break;
          case "waffle-chart":
            U = /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(re, { visualizationKey: N, subEditor: "Waffle Chart" }), /* @__PURE__ */ r.createElement(
              na,
              {
                key: N,
                config: F,
                isEditor: !0,
                setConfig: $,
                isDashboard: !0,
                configUrl: void 0
              }
            ));
            break;
          case "markup-include":
            U = /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(re, { visualizationKey: N, subEditor: "Markup Include" }), /* @__PURE__ */ r.createElement(
              aa,
              {
                key: N,
                config: F,
                isEditor: !0,
                setConfig: $,
                isDashboard: !0,
                configUrl: void 0
              }
            ));
            break;
          case "filtered-text":
            U = /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(re, { visualizationKey: N, subEditor: "Filtered Text" }), /* @__PURE__ */ r.createElement(
              Oa,
              {
                key: N,
                config: F,
                isEditor: !0,
                setConfig: $,
                isDashboard: !0,
                configUrl: void 0
              }
            ));
            break;
          case "dashboardFilters":
            U = F.autoLoad && u ? /* @__PURE__ */ r.createElement(r.Fragment, null) : /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(re, { visualizationKey: N, subEditor: "Filter Dropdowns" }), /* @__PURE__ */ r.createElement(
              Ma,
              {
                isEditor: !0,
                visualizationConfig: F,
                apiFilterDropdowns: c,
                setConfig: $
              }
            ));
            break;
          case "table":
            U = /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(re, { visualizationKey: N, subEditor: "Table" }), /* @__PURE__ */ r.createElement(
              Nt,
              {
                visualizationKey: N,
                config: F,
                isEditor: !0,
                updateConfig: $
              }
            ));
            break;
          case "footnotes":
            U = /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(re, { visualizationKey: N, subEditor: "Footnotes" }), /* @__PURE__ */ r.createElement(
              qe,
              {
                visualizationKey: N,
                config: { ...F, datasets: a.config.datasets },
                isEditor: !0,
                updateConfig: $
              }
            ));
            break;
          default:
            U = /* @__PURE__ */ r.createElement(r.Fragment, null);
            break;
        }
      }
    }), _ || (U = /* @__PURE__ */ r.createElement(Vo, { backend: Tl }, /* @__PURE__ */ r.createElement("div", { className: "header-container" }, /* @__PURE__ */ r.createElement(re, null), /* @__PURE__ */ r.createElement(Yl, null)), /* @__PURE__ */ r.createElement("div", { className: "layout-container" }, /* @__PURE__ */ r.createElement(Hl, null))));
  } else {
    const { config: _ } = a, { title: N, description: V } = _.dashboard || {};
    U = /* @__PURE__ */ r.createElement(r.Fragment, null, t && /* @__PURE__ */ r.createElement(re, null), O && /* @__PURE__ */ r.createElement(Ps, { fullScreen: !0 }), /* @__PURE__ */ r.createElement(Fa, { isEditor: t && !S }), i.map((F, B) => /* @__PURE__ */ r.createElement(
      Ya,
      {
        type: "danger",
        onDismiss: () => l({ type: "DISMISS_ERROR_MESSAGE", payload: B }),
        message: F,
        autoDismiss: !0
      }
    )), /* @__PURE__ */ r.createElement(he.Responsive, { isEditor: t }, /* @__PURE__ */ r.createElement("div", { className: `cdc-dashboard-inner-container${t ? " is-editor" : ""}` }, /* @__PURE__ */ r.createElement(
      Xn,
      {
        title: N,
        isDashboard: !0,
        classes: ["dashboard-title", `${_.dashboard.theme ?? "theme-blue"}`]
      }
    ), V && /* @__PURE__ */ r.createElement("div", { className: "subtext" }, Yn(V)), _.rows && _.rows.filter((F) => F.columns.filter((B) => B.widget).length !== 0).map((F, B) => {
      if (F.multiVizColumn && (S || !t)) {
        const G = Se(a, A.cloneDeep(a.data))[B] ?? F.formattedData, $ = {};
        return G.forEach((j) => {
          const z = j[F.multiVizColumn];
          $[z] || ($[z] = []), $[z].push(j);
        }), /* @__PURE__ */ r.createElement(r.Fragment, null, F.expandCollapseAllButtons === !0 && /* @__PURE__ */ r.createElement(As, { setAllExpanded: T }), Object.keys($).map((j) => {
          const z = $[j];
          return /* @__PURE__ */ r.createElement(
            Gn,
            {
              key: `row__${B}__${j}`,
              allExpanded: g,
              filteredDataOverride: z,
              groupName: j,
              row: F,
              rowIndex: B,
              setSharedFilter: D,
              updateChildConfig: I,
              apiFilterDropdowns: c,
              currentViewport: p
            }
          );
        }));
      } else
        return /* @__PURE__ */ r.createElement(
          Gn,
          {
            key: `row__${B}`,
            allExpanded: !1,
            groupName: "",
            row: F,
            rowIndex: B,
            setSharedFilter: D,
            updateChildConfig: I,
            apiFilterDropdowns: c,
            currentViewport: p
          }
        );
    }), /* @__PURE__ */ r.createElement("section", { className: "download-buttons" }, ((At = _.table) == null ? void 0 : At.downloadImageButton) && /* @__PURE__ */ r.createElement(
      Qt.Button,
      {
        title: "Download Dashboard as Image",
        type: "image",
        state: _,
        text: "Download Dashboard Image",
        elementToCapture: v
      }
    ), ((Lt = _.table) == null ? void 0 : Lt.downloadPdfButton) && /* @__PURE__ */ r.createElement(
      Qt.Button,
      {
        title: "Download Dashboard as PDF",
        type: "pdf",
        state: _,
        text: "Download Dashboard PDF",
        elementToCapture: v
      }
    )), ((Pt = _.table) == null ? void 0 : Pt.show) && _.data && /* @__PURE__ */ r.createElement(
      ut,
      {
        config: _,
        rawData: (xt = (Rt = _.data) == null ? void 0 : Rt[0]) != null && xt.tableData ? ($t = (Mt = _.data) == null ? void 0 : Mt[0]) == null ? void 0 : $t.tableData : _.data,
        runtimeData: (Vt = (Bt = _.data) == null ? void 0 : Bt[0]) != null && Vt.tableData ? (zt = (Ut = _.data) == null ? void 0 : Ut[0]) == null ? void 0 : zt.tableData : _.data || [],
        expandDataTable: _.table.expanded,
        showDownloadButton: _.table.download,
        tableTitle: _.dashboard.title || "",
        viewport: p,
        tabbingId: _.dashboard.title || "",
        outerContainerRef: ae,
        imageRef: v,
        isDebug: n,
        isEditor: t
      }
    ), ((Ht = _.table) == null ? void 0 : Ht.show) && _.datasets && Object.keys(_.datasets).map((F) => {
      var $, j, z, oe, pe;
      const B = ve(_).filter((ue) => _.visualizations[ue].dataKey === F);
      let H = [];
      ($ = _.dashboard.sharedFilters) == null || $.forEach((ue) => {
        let Y = !0;
        B.forEach((M) => {
          ue.usedBy && ue.usedBy.indexOf(M) === -1 && (Y = !1);
        }), Y && H.push(ue);
      });
      const G = H.length > 0 ? we(H, _.datasets[F].data) : void 0;
      return /* @__PURE__ */ r.createElement(
        "div",
        {
          className: "multi-table-container",
          id: `data-table-${F}`,
          key: `data-table-${F}`
        },
        /* @__PURE__ */ r.createElement(
          ut,
          {
            config: _,
            dataConfig: _.datasets[F],
            rawData: ((z = (j = _.datasets[F].data) == null ? void 0 : j[0]) == null ? void 0 : z.tableData) || _.datasets[F].data,
            runtimeData: ((pe = (oe = _.datasets[F].data) == null ? void 0 : oe[0]) == null ? void 0 : pe.tableData) || G || _.datasets[F].data || [],
            expandDataTable: _.table.expanded,
            tableTitle: F,
            viewport: p,
            tabbingId: F
          }
        )
      );
    }))));
  }
  const Ae = ["cdc-open-viz-module", "type-dashboard", `${p}`];
  return /* @__PURE__ */ r.createElement(Cl, null, /* @__PURE__ */ r.createElement(
    Q.Provider,
    {
      value: {
        ...a,
        setParentConfig: s.setTempConfig,
        outerContainerRef: ae,
        isDebug: n,
        loadAPIFilters: E,
        setAPIFilterDropdowns: d,
        reloadURLData: C
      }
    },
    /* @__PURE__ */ r.createElement(J.Provider, { value: o }, /* @__PURE__ */ r.createElement("div", { className: Ae.join(" "), ref: ae, "data-download-id": v }, U), /* @__PURE__ */ r.createElement(kl, null))
  ));
}
const Qn = {
  dashboard: {
    theme: "theme-blue"
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
}, xs = async (e, t) => {
  if (e.dataUrl && t) {
    const n = await Ce(`${e.dataUrl}`);
    return me(n, e.dataDescription);
  }
  return e.formattedData || e.data;
}, Ms = async (e) => {
  let t = e.formattedData || e.data;
  return e.dataUrl && (t = await Ce(`${e.dataUrl}`), t = me(t, e.dataDescription)), t;
}, hc = ({
  configUrl: e,
  config: t,
  isEditor: n,
  isDebug: a
}) => {
  const [o, i] = y.useState(void 0), l = (v) => {
    if (!v.multiDashboards)
      return null;
    const g = Ge()["cove-tab"];
    return g !== void 0 && Number(g) < v.multiDashboards.length ? Number(g) : 0;
  }, s = (v, g) => {
    const [T, O] = vt(je)(v, g), h = ra(T);
    return { ...je, config: h, filteredData: O, data: g };
  }, c = async () => {
    const v = t || await (await fetch(e)).json(), g = l(v), { newConfig: T, datasets: O } = g !== null ? await f(v, g) : await p(v);
    i(s(T, O));
  };
  y.useEffect(() => {
    c();
  }, []);
  const d = async (v) => {
    let g = { ...v }, T = {};
    return await Promise.all(
      Object.keys(v.datasets).map(async (O) => {
        const h = v.filterBehavior === "Apply Button", S = Te(v.visualizations) || h, u = await xs(v.datasets[O], !S);
        T[O] = u || [];
      })
    ), ve(g).forEach((O) => {
      const h = T[g.visualizations[O].dataKey];
      h && (g.visualizations[O].formattedData = h);
    }), Object.keys(T).forEach((O) => {
      g.datasets[O].data = T[O];
    }), { newConfig: g, datasets: T };
  }, p = async (v) => {
    let g = { ...Qn, ...v };
    if (v.datasets)
      return await d(g);
    {
      const T = g.dataFileName || "backwards-compatibility", O = await Ms(v), h = {};
      if (h[T] = {
        data: O,
        dataDescription: g.dataDescription
      }, g.datasets = h, ve(g).forEach((m) => {
        const b = { dataKey: T, ...A.pick(g, "dataDescription", "formattedData") };
        g.visualizations[m] = { ...g.visualizations[m], ...b };
      }), g = { ...g, ...{
        data: [],
        dataUrl: "",
        dataFileName: "",
        dataFileSourceType: "",
        dataDescription: {},
        formattedData: []
      } }, g.dashboard.filters) {
        const m = { ...g.dashboard };
        m.sharedFilters || (m.sharedFilters = []);
        const b = m.filters.map((w) => ({ ...w, key: w.label, showDropdown: !0, usedBy: ve(g) }));
        m.sharedFilters = [...m.sharedFilters, ...b], g.dashboard = { ...m, filters: void 0 };
      }
      const u = { [T]: O };
      return { newConfig: g, datasets: u };
    }
  }, f = async (v, g) => {
    const T = v.multiDashboards[g], O = {
      ...Qn,
      ...v,
      ...T,
      multiDashboards: v.multiDashboards,
      activeDashboard: g
    };
    return await d(O);
  };
  return o ? /* @__PURE__ */ r.createElement(Rs, { isEditor: n, isDebug: a, initialState: o }) : /* @__PURE__ */ r.createElement(Dt, null);
};
export {
  is as C,
  gc as E,
  Cl as G,
  hc as M,
  kl as O,
  ct as a,
  Pa as d
};
