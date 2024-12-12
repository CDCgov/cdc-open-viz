import { r as v, R as r } from "./storybook-index-45401197.es.js";
import { c as Qa, A as Za } from "./storybook-InputToggle-37e3ece9.es.js";
import { a as Ka, g as Xa } from "./storybook-isSolr-cb863e7a.es.js";
import { T as ta, H as na } from "./storybook-index-e5bf02db.es.js";
import { f as ke } from "./storybook-fetchRemoteData-9428020c.es.js";
import { E as aa, L as Ct } from "./storybook-Loading-f180d060.es.js";
import { D as Se, A as Ya, a as Zt, b as Kt, c as Xt, d as Yt } from "./storybook-DataTransform-0947aeee.es.js";
import { V as Ja, a as er, D as tr, F as nr, f as ar, C as ra } from "./storybook-CdcChart-a723f3f6.es.js";
import { C as oa } from "./storybook-CdcDataBite-9b58ab50.es.js";
import { C as ia, A as rr } from "./storybook-CdcMap-69792beb.es.js";
import { C as sa } from "./storybook-CdcWaffleChart-630883b2.es.js";
import { C as la } from "./storybook-CdcMarkupInclude-44042fca.es.js";
import { A as xe, a as or, b as tt, c as nt, d as at, e as rt } from "./storybook-Accordion-2501c7d9.es.js";
import { I as ir, a as Fe } from "./storybook-editor-57986c01.es.js";
import { B as sr } from "./storybook-Button-d74e310e.es.js";
import { a as P } from "./storybook-Icon-4f5978ba.es.js";
import { T as x } from "./storybook-Tooltip-4102bd69.es.js";
import { I as pe } from "./storybook-InputSelect-20478396.es.js";
import { L as be, u as lr, c as ua } from "./storybook-coveUpdateWorker-91c2d978.es.js";
import { u as Ot } from "./storybook-updateFieldFactory-c006040a.es.js";
import { D as ur } from "./storybook-DataDesigner-a81779cb.es.js";
import { P as Ae } from "./storybook-index-43433e35.es.js";
import { C as Ve, T as K, S as cr } from "./storybook-Inputs-b80d0cf3.es.js";
import { g as dr } from "./storybook-_commonjsHelpers-c5d32002.es.js";
import { _ as A } from "./storybook-lodash-a4231e1c.es.js";
import { u as fr, g as ca, f as Jt, F as mr, a as It, b as da, c as Oe, d as pr } from "./storybook-Filters-103ea5c1.es.js";
import { D as mt, M as en } from "./storybook-DataTable-c2cc0eaa.es.js";
import { F as ae, D as gr } from "./storybook-DashboardFilters-bd10edb2.es.js";
import { M as tn } from "./storybook-MultiSelect-d587cce3.es.js";
import { F as hr } from "./storybook-Footnotes-6f80714a.es.js";
import { L as vr } from "./storybook-Loader-f4ec7b29.es.js";
import { j as yr } from "./storybook-jsx-runtime-36872362.es.js";
var fa = v.createContext({
  dragDropManager: void 0
}), re;
(function(e) {
  e.SOURCE = "SOURCE", e.TARGET = "TARGET";
})(re || (re = {}));
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
      var s = 0;
      i = new Error(t.replace(/%s/g, function() {
        return a[s++];
      })), i.name = "Invariant Violation";
    }
    throw i.framesToPop = 1, i;
  }
}
var _t = "dnd-core/INIT_COORDS", Ze = "dnd-core/BEGIN_DRAG", kt = "dnd-core/PUBLISH_DRAG_SOURCE", Ke = "dnd-core/HOVER", Xe = "dnd-core/DROP", Ye = "dnd-core/END_DRAG";
function nn(e, t) {
  return {
    type: _t,
    payload: {
      sourceClientOffset: t || null,
      clientOffset: e || null
    }
  };
}
function Ue(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ue = function(n) {
    return typeof n;
  } : Ue = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Ue(e);
}
function br(e, t, n) {
  return t.split(".").reduce(function(a, o) {
    return a && a[o] ? a[o] : n || null;
  }, e);
}
function Er(e, t) {
  return e.filter(function(n) {
    return n !== t;
  });
}
function ma(e) {
  return Ue(e) === "object";
}
function Dr(e, t) {
  var n = /* @__PURE__ */ new Map(), a = function(s) {
    n.set(s, n.has(s) ? n.get(s) + 1 : 1);
  };
  e.forEach(a), t.forEach(a);
  var o = [];
  return n.forEach(function(i, s) {
    i === 1 && o.push(s);
  }), o;
}
function Sr(e, t) {
  return e.filter(function(n) {
    return t.indexOf(n) > -1;
  });
}
var wr = {
  type: _t,
  payload: {
    clientOffset: null,
    sourceClientOffset: null
  }
};
function Tr(e) {
  return function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      publishSource: !0
    }, o = a.publishSource, i = o === void 0 ? !0 : o, s = a.clientOffset, l = a.getSourceClientOffset, u = e.getMonitor(), d = e.getRegistry();
    e.dispatch(nn(s)), Cr(n, u, d);
    var f = _r(n, u);
    if (f === null) {
      e.dispatch(wr);
      return;
    }
    var m = null;
    if (s) {
      if (!l)
        throw new Error("getSourceClientOffset must be defined");
      Or(l), m = l(f);
    }
    e.dispatch(nn(s, m));
    var b = d.getSource(f), h = b.beginDrag(u, f);
    if (h != null) {
      Ir(h), d.pinSource(f);
      var I = d.getSourceType(f);
      return {
        type: Ze,
        payload: {
          itemType: I,
          item: h,
          sourceId: f,
          clientOffset: s || null,
          sourceClientOffset: m || null,
          isSourcePublic: !!i
        }
      };
    }
  };
}
function Cr(e, t, n) {
  L(!t.isDragging(), "Cannot call beginDrag while dragging."), e.forEach(function(a) {
    L(n.getSource(a), "Expected sourceIds to be registered.");
  });
}
function Or(e) {
  L(typeof e == "function", "When clientOffset is provided, getSourceClientOffset must be a function.");
}
function Ir(e) {
  L(ma(e), "Item must be an object.");
}
function _r(e, t) {
  for (var n = null, a = e.length - 1; a >= 0; a--)
    if (t.canDragSource(e[a])) {
      n = e[a];
      break;
    }
  return n;
}
function kr(e) {
  return function() {
    var n = e.getMonitor();
    if (n.isDragging())
      return {
        type: kt
      };
  };
}
function pt(e, t) {
  return t === null ? e === null : Array.isArray(e) ? e.some(function(n) {
    return n === t;
  }) : e === t;
}
function Nr(e) {
  return function(n) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = a.clientOffset;
    Fr(n);
    var i = n.slice(0), s = e.getMonitor(), l = e.getRegistry();
    Ar(i, s, l);
    var u = s.getItemType();
    return Lr(i, l, u), Pr(i, s, l), {
      type: Ke,
      payload: {
        targetIds: i,
        clientOffset: o || null
      }
    };
  };
}
function Fr(e) {
  L(Array.isArray(e), "Expected targetIds to be an array.");
}
function Ar(e, t, n) {
  L(t.isDragging(), "Cannot call hover while not dragging."), L(!t.didDrop(), "Cannot call hover after drop.");
  for (var a = 0; a < e.length; a++) {
    var o = e[a];
    L(e.lastIndexOf(o) === a, "Expected targetIds to be unique in the passed array.");
    var i = n.getTarget(o);
    L(i, "Expected targetIds to be registered.");
  }
}
function Lr(e, t, n) {
  for (var a = e.length - 1; a >= 0; a--) {
    var o = e[a], i = t.getTargetType(o);
    pt(i, n) || e.splice(a, 1);
  }
}
function Pr(e, t, n) {
  e.forEach(function(a) {
    var o = n.getTarget(a);
    o.hover(t, a);
  });
}
function an(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function rn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? an(Object(n), !0).forEach(function(a) {
      Rr(e, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : an(Object(n)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return e;
}
function Rr(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function xr(e) {
  return function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = e.getMonitor(), o = e.getRegistry();
    Mr(a);
    var i = Vr(a);
    i.forEach(function(s, l) {
      var u = Br(s, l, o, a), d = {
        type: Xe,
        payload: {
          dropResult: rn(rn({}, n), u)
        }
      };
      e.dispatch(d);
    });
  };
}
function Mr(e) {
  L(e.isDragging(), "Cannot call drop while not dragging."), L(!e.didDrop(), "Cannot call drop twice during one drag operation.");
}
function Br(e, t, n, a) {
  var o = n.getTarget(e), i = o ? o.drop(a, e) : void 0;
  return $r(i), typeof i > "u" && (i = t === 0 ? {} : a.getDropResult()), i;
}
function $r(e) {
  L(typeof e > "u" || ma(e), "Drop result must either be an object or undefined.");
}
function Vr(e) {
  var t = e.getTargetIds().filter(e.canDropOnTarget, e);
  return t.reverse(), t;
}
function Ur(e) {
  return function() {
    var n = e.getMonitor(), a = e.getRegistry();
    zr(n);
    var o = n.getSourceId();
    if (o != null) {
      var i = a.getSource(o, !0);
      i.endDrag(n, o), a.unpinSource();
    }
    return {
      type: Ye
    };
  };
}
function zr(e) {
  L(e.isDragging(), "Cannot call endDrag while not dragging.");
}
function Hr(e) {
  return {
    beginDrag: Tr(e),
    publishDragSource: kr(e),
    hover: Nr(e),
    drop: xr(e),
    endDrag: Ur(e)
  };
}
function jr(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function on(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function Gr(e, t, n) {
  return t && on(e.prototype, t), n && on(e, n), e;
}
function Le(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var qr = /* @__PURE__ */ function() {
  function e(t, n) {
    var a = this;
    jr(this, e), Le(this, "store", void 0), Le(this, "monitor", void 0), Le(this, "backend", void 0), Le(this, "isSetUp", !1), Le(this, "handleRefCountChange", function() {
      var o = a.store.getState().refCount > 0;
      a.backend && (o && !a.isSetUp ? (a.backend.setup(), a.isSetUp = !0) : !o && a.isSetUp && (a.backend.teardown(), a.isSetUp = !1));
    }), this.store = t, this.monitor = n, t.subscribe(this.handleRefCountChange);
  }
  return Gr(e, [{
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
      function o(s) {
        return function() {
          for (var l = arguments.length, u = new Array(l), d = 0; d < l; d++)
            u[d] = arguments[d];
          var f = s.apply(n, u);
          typeof f < "u" && a(f);
        };
      }
      var i = Hr(this);
      return Object.keys(i).reduce(function(s, l) {
        var u = i[l];
        return s[l] = o(u), s;
      }, {});
    }
  }, {
    key: "dispatch",
    value: function(n) {
      this.store.dispatch(n);
    }
  }]), e;
}(), Wr = function(t, n) {
  return t === n;
};
function Qr(e, t) {
  return !e && !t ? !0 : !e || !t ? !1 : e.x === t.x && e.y === t.y;
}
function Zr(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Wr;
  if (e.length !== t.length)
    return !1;
  for (var a = 0; a < e.length; ++a)
    if (!n(e[a], t[a]))
      return !1;
  return !0;
}
function sn(e, t) {
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
    t % 2 ? sn(Object(n), !0).forEach(function(a) {
      Kr(e, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : sn(Object(n)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return e;
}
function Kr(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var un = {
  initialSourceClientOffset: null,
  initialClientOffset: null,
  clientOffset: null
};
function Xr() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : un, t = arguments.length > 1 ? arguments[1] : void 0, n = t.payload;
  switch (t.type) {
    case _t:
    case Ze:
      return {
        initialSourceClientOffset: n.sourceClientOffset,
        initialClientOffset: n.clientOffset,
        clientOffset: n.clientOffset
      };
    case Ke:
      return Qr(e.clientOffset, n.clientOffset) ? e : ln(ln({}, e), {}, {
        clientOffset: n.clientOffset
      });
    case Ye:
    case Xe:
      return un;
    default:
      return e;
  }
}
var Nt = "dnd-core/ADD_SOURCE", Ft = "dnd-core/ADD_TARGET", At = "dnd-core/REMOVE_SOURCE", Je = "dnd-core/REMOVE_TARGET";
function Yr(e) {
  return {
    type: Nt,
    payload: {
      sourceId: e
    }
  };
}
function Jr(e) {
  return {
    type: Ft,
    payload: {
      targetId: e
    }
  };
}
function eo(e) {
  return {
    type: At,
    payload: {
      sourceId: e
    }
  };
}
function to(e) {
  return {
    type: Je,
    payload: {
      targetId: e
    }
  };
}
function cn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function ne(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? cn(Object(n), !0).forEach(function(a) {
      no(e, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : cn(Object(n)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return e;
}
function no(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var ao = {
  itemType: null,
  item: null,
  sourceId: null,
  targetIds: [],
  dropResult: null,
  didDrop: !1,
  isSourcePublic: null
};
function ro() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ao, t = arguments.length > 1 ? arguments[1] : void 0, n = t.payload;
  switch (t.type) {
    case Ze:
      return ne(ne({}, e), {}, {
        itemType: n.itemType,
        item: n.item,
        sourceId: n.sourceId,
        isSourcePublic: n.isSourcePublic,
        dropResult: null,
        didDrop: !1
      });
    case kt:
      return ne(ne({}, e), {}, {
        isSourcePublic: !0
      });
    case Ke:
      return ne(ne({}, e), {}, {
        targetIds: n.targetIds
      });
    case Je:
      return e.targetIds.indexOf(n.targetId) === -1 ? e : ne(ne({}, e), {}, {
        targetIds: Er(e.targetIds, n.targetId)
      });
    case Xe:
      return ne(ne({}, e), {}, {
        dropResult: n.dropResult,
        didDrop: !0,
        targetIds: []
      });
    case Ye:
      return ne(ne({}, e), {}, {
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
function oo() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, t = arguments.length > 1 ? arguments[1] : void 0;
  switch (t.type) {
    case Nt:
    case Ft:
      return e + 1;
    case At:
    case Je:
      return e - 1;
    default:
      return e;
  }
}
var qe = [], Lt = [];
qe.__IS_NONE__ = !0;
Lt.__IS_ALL__ = !0;
function io(e, t) {
  if (e === qe)
    return !1;
  if (e === Lt || typeof t > "u")
    return !0;
  var n = Sr(t, e);
  return n.length > 0;
}
function so() {
  var e = arguments.length > 1 ? arguments[1] : void 0;
  switch (e.type) {
    case Ke:
      break;
    case Nt:
    case Ft:
    case Je:
    case At:
      return qe;
    case Ze:
    case kt:
    case Ye:
    case Xe:
    default:
      return Lt;
  }
  var t = e.payload, n = t.targetIds, a = n === void 0 ? [] : n, o = t.prevTargetIds, i = o === void 0 ? [] : o, s = Dr(a, i), l = s.length > 0 || !Zr(a, i);
  if (!l)
    return qe;
  var u = i[i.length - 1], d = a[a.length - 1];
  return u !== d && (u && s.push(u), d && s.push(d)), s;
}
function lo() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
  return e + 1;
}
function dn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function fn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? dn(Object(n), !0).forEach(function(a) {
      uo(e, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : dn(Object(n)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return e;
}
function uo(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function co() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
  return {
    dirtyHandlerIds: so(e.dirtyHandlerIds, {
      type: t.type,
      payload: fn(fn({}, t.payload), {}, {
        prevTargetIds: br(e, "dragOperation.targetIds", [])
      })
    }),
    dragOffset: Xr(e.dragOffset, t),
    refCount: oo(e.refCount, t),
    dragOperation: ro(e.dragOperation, t),
    stateId: lo(e.stateId)
  };
}
function fo(e, t) {
  return {
    x: e.x + t.x,
    y: e.y + t.y
  };
}
function pa(e, t) {
  return {
    x: e.x - t.x,
    y: e.y - t.y
  };
}
function mo(e) {
  var t = e.clientOffset, n = e.initialClientOffset, a = e.initialSourceClientOffset;
  return !t || !n || !a ? null : pa(fo(t, a), n);
}
function po(e) {
  var t = e.clientOffset, n = e.initialClientOffset;
  return !t || !n ? null : pa(t, n);
}
function go(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function mn(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function ho(e, t, n) {
  return t && mn(e.prototype, t), n && mn(e, n), e;
}
function pn(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var vo = /* @__PURE__ */ function() {
  function e(t, n) {
    go(this, e), pn(this, "store", void 0), pn(this, "registry", void 0), this.store = t, this.registry = n;
  }
  return ho(e, [{
    key: "subscribeToStateChange",
    value: function(n) {
      var a = this, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        handlerIds: void 0
      }, i = o.handlerIds;
      L(typeof n == "function", "listener must be a function."), L(typeof i > "u" || Array.isArray(i), "handlerIds, when specified, must be an array of strings.");
      var s = this.store.getState().stateId, l = function() {
        var d = a.store.getState(), f = d.stateId;
        try {
          var m = f === s || f === s + 1 && !io(d.dirtyHandlerIds, i);
          m || n();
        } finally {
          s = f;
        }
      };
      return this.store.subscribe(l);
    }
  }, {
    key: "subscribeToOffsetChange",
    value: function(n) {
      var a = this;
      L(typeof n == "function", "listener must be a function.");
      var o = this.store.getState().dragOffset, i = function() {
        var l = a.store.getState().dragOffset;
        l !== o && (o = l, n());
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
      return pt(o, i) && a.canDrop(this, n);
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
      var i = this.registry.getTargetType(n), s = this.getItemType();
      if (s && !pt(i, s))
        return !1;
      var l = this.getTargetIds();
      if (!l.length)
        return !1;
      var u = l.indexOf(n);
      return o ? u === l.length - 1 : u > -1;
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
      return mo(this.store.getState().dragOffset);
    }
  }, {
    key: "getDifferenceFromInitialOffset",
    value: function() {
      return po(this.store.getState().dragOffset);
    }
  }]), e;
}(), yo = 0;
function bo() {
  return yo++;
}
function ze(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ze = function(n) {
    return typeof n;
  } : ze = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, ze(e);
}
function Eo(e) {
  L(typeof e.canDrag == "function", "Expected canDrag to be a function."), L(typeof e.beginDrag == "function", "Expected beginDrag to be a function."), L(typeof e.endDrag == "function", "Expected endDrag to be a function.");
}
function Do(e) {
  L(typeof e.canDrop == "function", "Expected canDrop to be a function."), L(typeof e.hover == "function", "Expected hover to be a function."), L(typeof e.drop == "function", "Expected beginDrag to be a function.");
}
function gt(e, t) {
  if (t && Array.isArray(e)) {
    e.forEach(function(n) {
      return gt(n, !1);
    });
    return;
  }
  L(typeof e == "string" || ze(e) === "symbol", t ? "Type can only be a string, a symbol, or an array of either." : "Type can only be a string or a symbol.");
}
const gn = typeof global < "u" ? global : self, ga = gn.MutationObserver || gn.WebKitMutationObserver;
function ha(e) {
  return function() {
    const n = setTimeout(o, 0), a = setInterval(o, 50);
    function o() {
      clearTimeout(n), clearInterval(a), e();
    }
  };
}
function So(e) {
  let t = 1;
  const n = new ga(e), a = document.createTextNode("");
  return n.observe(a, {
    characterData: !0
  }), function() {
    t = -t, a.data = t;
  };
}
const wo = typeof ga == "function" ? (
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
  So
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
  ha
);
class To {
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
    }, this.requestFlush = wo(this.flush), this.requestErrorThrow = ha(() => {
      if (this.pendingErrors.length)
        throw this.pendingErrors.shift();
    });
  }
}
class Co {
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
class Oo {
  create(t) {
    const n = this.freeTasks, a = n.length ? n.pop() : new Co(
      this.onError,
      (o) => n[n.length] = o
    );
    return a.task = t, a;
  }
  constructor(t) {
    this.onError = t, this.freeTasks = [];
  }
}
const va = new To(), Io = new Oo(va.registerPendingError);
function _o(e) {
  va.enqueueTask(Io.create(e));
}
function ko(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function hn(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function No(e, t, n) {
  return t && hn(e.prototype, t), n && hn(e, n), e;
}
function we(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Fo(e, t) {
  return Ro(e) || Po(e, t) || Lo(e, t) || Ao();
}
function Ao() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Lo(e, t) {
  if (e) {
    if (typeof e == "string")
      return vn(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return vn(e, t);
  }
}
function vn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, a = new Array(t); n < t; n++)
    a[n] = e[n];
  return a;
}
function Po(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var a = [], o = !0, i = !1, s, l;
    try {
      for (n = n.call(e); !(o = (s = n.next()).done) && (a.push(s.value), !(t && a.length === t)); o = !0)
        ;
    } catch (u) {
      i = !0, l = u;
    } finally {
      try {
        !o && n.return != null && n.return();
      } finally {
        if (i)
          throw l;
      }
    }
    return a;
  }
}
function Ro(e) {
  if (Array.isArray(e))
    return e;
}
function xo(e) {
  var t = bo().toString();
  switch (e) {
    case re.SOURCE:
      return "S".concat(t);
    case re.TARGET:
      return "T".concat(t);
    default:
      throw new Error("Unknown Handler Role: ".concat(e));
  }
}
function yn(e) {
  switch (e[0]) {
    case "S":
      return re.SOURCE;
    case "T":
      return re.TARGET;
    default:
      L(!1, "Cannot parse handler ID: ".concat(e));
  }
}
function bn(e, t) {
  var n = e.entries(), a = !1;
  do {
    var o = n.next(), i = o.done, s = Fo(o.value, 2), l = s[1];
    if (l === t)
      return !0;
    a = !!i;
  } while (!a);
  return !1;
}
var Mo = /* @__PURE__ */ function() {
  function e(t) {
    ko(this, e), we(this, "types", /* @__PURE__ */ new Map()), we(this, "dragSources", /* @__PURE__ */ new Map()), we(this, "dropTargets", /* @__PURE__ */ new Map()), we(this, "pinnedSourceId", null), we(this, "pinnedSource", null), we(this, "store", void 0), this.store = t;
  }
  return No(e, [{
    key: "addSource",
    value: function(n, a) {
      gt(n), Eo(a);
      var o = this.addHandler(re.SOURCE, n, a);
      return this.store.dispatch(Yr(o)), o;
    }
  }, {
    key: "addTarget",
    value: function(n, a) {
      gt(n, !0), Do(a);
      var o = this.addHandler(re.TARGET, n, a);
      return this.store.dispatch(Jr(o)), o;
    }
  }, {
    key: "containsHandler",
    value: function(n) {
      return bn(this.dragSources, n) || bn(this.dropTargets, n);
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
      var a = yn(n);
      return a === re.SOURCE;
    }
  }, {
    key: "isTargetId",
    value: function(n) {
      var a = yn(n);
      return a === re.TARGET;
    }
  }, {
    key: "removeSource",
    value: function(n) {
      var a = this;
      L(this.getSource(n), "Expected an existing source."), this.store.dispatch(eo(n)), _o(function() {
        a.dragSources.delete(n), a.types.delete(n);
      });
    }
  }, {
    key: "removeTarget",
    value: function(n) {
      L(this.getTarget(n), "Expected an existing target."), this.store.dispatch(to(n)), this.dropTargets.delete(n), this.types.delete(n);
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
      var i = xo(n);
      return this.types.set(i, a), n === re.SOURCE ? this.dragSources.set(i, o) : n === re.TARGET && this.dropTargets.set(i, o), i;
    }
  }]), e;
}();
function Bo(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, o = $o(a), i = new vo(o, new Mo(o)), s = new qr(o, i), l = e(s, t, n);
  return s.receiveBackend(l), s;
}
function $o(e) {
  var t = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION__;
  return Qa(co, e && t && t({
    name: "dnd-core",
    instanceId: "dnd-core"
  }));
}
var Vo = ["children"];
function Uo(e, t) {
  return Go(e) || jo(e, t) || Ho(e, t) || zo();
}
function zo() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ho(e, t) {
  if (e) {
    if (typeof e == "string")
      return En(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return En(e, t);
  }
}
function En(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, a = new Array(t); n < t; n++)
    a[n] = e[n];
  return a;
}
function jo(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var a = [], o = !0, i = !1, s, l;
    try {
      for (n = n.call(e); !(o = (s = n.next()).done) && (a.push(s.value), !(t && a.length === t)); o = !0)
        ;
    } catch (u) {
      i = !0, l = u;
    } finally {
      try {
        !o && n.return != null && n.return();
      } finally {
        if (i)
          throw l;
      }
    }
    return a;
  }
}
function Go(e) {
  if (Array.isArray(e))
    return e;
}
function qo(e, t) {
  if (e == null)
    return {};
  var n = Wo(e, t), a, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      a = i[o], !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (n[a] = e[a]);
  }
  return n;
}
function Wo(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), o, i;
  for (i = 0; i < a.length; i++)
    o = a[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var Dn = 0, He = Symbol.for("__REACT_DND_CONTEXT_INSTANCE__"), Qo = v.memo(function(t) {
  var n = t.children, a = qo(t, Vo), o = Zo(a), i = Uo(o, 2), s = i[0], l = i[1];
  return v.useEffect(function() {
    if (l) {
      var u = ya();
      return ++Dn, function() {
        --Dn === 0 && (u[He] = null);
      };
    }
  }, []), yr(fa.Provider, Object.assign({
    value: s
  }, {
    children: n
  }), void 0);
});
function Zo(e) {
  if ("manager" in e) {
    var t = {
      dragDropManager: e.manager
    };
    return [t, !1];
  }
  var n = Ko(e.backend, e.context, e.options, e.debugMode), a = !e.context;
  return [n, a];
}
function Ko(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ya(), n = arguments.length > 2 ? arguments[2] : void 0, a = arguments.length > 3 ? arguments[3] : void 0, o = t;
  return o[He] || (o[He] = {
    dragDropManager: Bo(e, t, n, a)
  }), o[He];
}
function ya() {
  return typeof global < "u" ? global : window;
}
function Xo(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Sn(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function Yo(e, t, n) {
  return t && Sn(e.prototype, t), n && Sn(e, n), e;
}
function wn(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var ot = !1, it = !1, Jo = /* @__PURE__ */ function() {
  function e(t) {
    Xo(this, e), wn(this, "internalMonitor", void 0), wn(this, "sourceId", null), this.internalMonitor = t.getMonitor();
  }
  return Yo(e, [{
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
      L(!ot, "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
      try {
        return ot = !0, this.internalMonitor.canDragSource(this.sourceId);
      } finally {
        ot = !1;
      }
    }
  }, {
    key: "isDragging",
    value: function() {
      if (!this.sourceId)
        return !1;
      L(!it, "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
      try {
        return it = !0, this.internalMonitor.isDraggingSource(this.sourceId);
      } finally {
        it = !1;
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
function ei(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Tn(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function ti(e, t, n) {
  return t && Tn(e.prototype, t), n && Tn(e, n), e;
}
function Cn(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var st = !1, ni = /* @__PURE__ */ function() {
  function e(t) {
    ei(this, e), Cn(this, "internalMonitor", void 0), Cn(this, "targetId", null), this.internalMonitor = t.getMonitor();
  }
  return ti(e, [{
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
      L(!st, "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");
      try {
        return st = !0, this.internalMonitor.canDropOnTarget(this.targetId);
      } finally {
        st = !1;
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
function ai(e) {
  if (typeof e.type != "string") {
    var t = e.type.displayName || e.type.name || "the component";
    throw new Error("Only native element nodes can now be passed to React DnD connectors." + "You can either wrap ".concat(t, " into a <div>, or turn it into a ") + "drag source or a drop target itself.");
  }
}
function ri(e) {
  return function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    if (!v.isValidElement(t)) {
      var a = t;
      return e(a, n), a;
    }
    var o = t;
    ai(o);
    var i = n ? function(s) {
      return e(s, n);
    } : e;
    return oi(o, i);
  };
}
function ba(e) {
  var t = {};
  return Object.keys(e).forEach(function(n) {
    var a = e[n];
    if (n.endsWith("Ref"))
      t[n] = e[n];
    else {
      var o = ri(a);
      t[n] = function() {
        return o;
      };
    }
  }), t;
}
function On(e, t) {
  typeof e == "function" ? e(t) : e.current = t;
}
function oi(e, t) {
  var n = e.ref;
  return L(typeof n != "string", "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"), n ? v.cloneElement(e, {
    ref: function(o) {
      On(n, o), On(t, o);
    }
  }) : v.cloneElement(e, {
    ref: t
  });
}
function je(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? je = function(n) {
    return typeof n;
  } : je = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, je(e);
}
function ht(e) {
  return (
    // eslint-disable-next-line no-prototype-builtins
    e !== null && je(e) === "object" && Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function vt(e, t, n, a) {
  var o = n ? n.call(a, e, t) : void 0;
  if (o !== void 0)
    return !!o;
  if (e === t)
    return !0;
  if (typeof e != "object" || !e || typeof t != "object" || !t)
    return !1;
  var i = Object.keys(e), s = Object.keys(t);
  if (i.length !== s.length)
    return !1;
  for (var l = Object.prototype.hasOwnProperty.bind(t), u = 0; u < i.length; u++) {
    var d = i[u];
    if (!l(d))
      return !1;
    var f = e[d], m = t[d];
    if (o = n ? n.call(a, f, m, d) : void 0, o === !1 || o === void 0 && f !== m)
      return !1;
  }
  return !0;
}
function ii(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function In(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function si(e, t, n) {
  return t && In(e.prototype, t), n && In(e, n), e;
}
function W(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var li = /* @__PURE__ */ function() {
  function e(t) {
    var n = this;
    ii(this, e), W(this, "hooks", ba({
      dragSource: function(o, i) {
        n.clearDragSource(), n.dragSourceOptions = i || null, ht(o) ? n.dragSourceRef = o : n.dragSourceNode = o, n.reconnectDragSource();
      },
      dragPreview: function(o, i) {
        n.clearDragPreview(), n.dragPreviewOptions = i || null, ht(o) ? n.dragPreviewRef = o : n.dragPreviewNode = o, n.reconnectDragPreview();
      }
    })), W(this, "handlerId", null), W(this, "dragSourceRef", null), W(this, "dragSourceNode", void 0), W(this, "dragSourceOptionsInternal", null), W(this, "dragSourceUnsubscribe", void 0), W(this, "dragPreviewRef", null), W(this, "dragPreviewNode", void 0), W(this, "dragPreviewOptionsInternal", null), W(this, "dragPreviewUnsubscribe", void 0), W(this, "lastConnectedHandlerId", null), W(this, "lastConnectedDragSource", null), W(this, "lastConnectedDragSourceOptions", null), W(this, "lastConnectedDragPreview", null), W(this, "lastConnectedDragPreviewOptions", null), W(this, "backend", void 0), this.backend = t;
  }
  return si(e, [{
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
      return !vt(this.lastConnectedDragSourceOptions, this.dragSourceOptions);
    }
  }, {
    key: "didDragPreviewOptionsChange",
    value: function() {
      return !vt(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions);
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
function ui(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function _n(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function ci(e, t, n) {
  return t && _n(e.prototype, t), n && _n(e, n), e;
}
function ue(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var di = /* @__PURE__ */ function() {
  function e(t) {
    var n = this;
    ui(this, e), ue(this, "hooks", ba({
      dropTarget: function(o, i) {
        n.clearDropTarget(), n.dropTargetOptions = i, ht(o) ? n.dropTargetRef = o : n.dropTargetNode = o, n.reconnect();
      }
    })), ue(this, "handlerId", null), ue(this, "dropTargetRef", null), ue(this, "dropTargetNode", void 0), ue(this, "dropTargetOptionsInternal", null), ue(this, "unsubscribeDropTarget", void 0), ue(this, "lastConnectedHandlerId", null), ue(this, "lastConnectedDropTarget", null), ue(this, "lastConnectedDropTargetOptions", null), ue(this, "backend", void 0), this.backend = t;
  }
  return ci(e, [{
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
      return !vt(this.lastConnectedDropTargetOptions, this.dropTargetOptions);
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
function fi(e, t, n) {
  var a = n.getRegistry(), o = a.addTarget(e, t);
  return [o, function() {
    return a.removeTarget(o);
  }];
}
function mi(e, t, n) {
  var a = n.getRegistry(), o = a.addSource(e, t);
  return [o, function() {
    return a.removeSource(o);
  }];
}
var De = typeof window < "u" ? v.useLayoutEffect : v.useEffect;
function Ge(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ge = function(n) {
    return typeof n;
  } : Ge = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Ge(e);
}
function pi(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function kn(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function gi(e, t, n) {
  return t && kn(e.prototype, t), n && kn(e, n), e;
}
function lt(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var hi = /* @__PURE__ */ function() {
  function e(t, n, a) {
    pi(this, e), lt(this, "spec", void 0), lt(this, "monitor", void 0), lt(this, "connector", void 0), this.spec = t, this.monitor = n, this.connector = a;
  }
  return gi(e, [{
    key: "beginDrag",
    value: function() {
      var n, a = this.spec, o = this.monitor, i = null;
      return Ge(a.item) === "object" ? i = a.item : typeof a.item == "function" ? i = a.item(o) : i = {}, (n = i) !== null && n !== void 0 ? n : null;
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
      var o = this.spec, i = this.monitor, s = o.isDragging;
      return s ? s(i) : a === n.getSourceId();
    }
  }, {
    key: "endDrag",
    value: function() {
      var n = this.spec, a = this.monitor, o = this.connector, i = n.end;
      i && i(a.getItem(), a), o.reconnect();
    }
  }]), e;
}();
function vi(e, t, n) {
  var a = v.useMemo(function() {
    return new hi(e, t, n);
  }, [t, n]);
  return v.useEffect(function() {
    a.spec = e;
  }, [e]), a;
}
function Ne() {
  var e = v.useContext(fa), t = e.dragDropManager;
  return L(t != null, "Expected drag drop context"), t;
}
function yi(e) {
  return v.useMemo(function() {
    var t = e.type;
    return L(t != null, "spec.type must be defined"), t;
  }, [e]);
}
function bi(e, t) {
  return wi(e) || Si(e, t) || Di(e, t) || Ei();
}
function Ei() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Di(e, t) {
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
function Si(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var a = [], o = !0, i = !1, s, l;
    try {
      for (n = n.call(e); !(o = (s = n.next()).done) && (a.push(s.value), !(t && a.length === t)); o = !0)
        ;
    } catch (u) {
      i = !0, l = u;
    } finally {
      try {
        !o && n.return != null && n.return();
      } finally {
        if (i)
          throw l;
      }
    }
    return a;
  }
}
function wi(e) {
  if (Array.isArray(e))
    return e;
}
function Ti(e, t, n) {
  var a = Ne(), o = vi(e, t, n), i = yi(e);
  De(function() {
    if (i != null) {
      var l = mi(i, o, a), u = bi(l, 2), d = u[0], f = u[1];
      return t.receiveHandlerId(d), n.receiveHandlerId(d), f;
    }
  }, [a, t, n, o, i]);
}
function Ci(e) {
  return ki(e) || _i(e) || Ii(e) || Oi();
}
function Oi() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ii(e, t) {
  if (e) {
    if (typeof e == "string")
      return yt(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return yt(e, t);
  }
}
function _i(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function ki(e) {
  if (Array.isArray(e))
    return yt(e);
}
function yt(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, a = new Array(t); n < t; n++)
    a[n] = e[n];
  return a;
}
function Ea(e, t) {
  var n = Ci(t || []);
  return t == null && typeof e != "function" && n.push(e), v.useMemo(function() {
    return typeof e == "function" ? e() : e;
  }, n);
}
function Ni() {
  var e = Ne();
  return v.useMemo(function() {
    return new Jo(e);
  }, [e]);
}
function Fi(e, t) {
  var n = Ne(), a = v.useMemo(function() {
    return new li(n.getBackend());
  }, [n]);
  return De(function() {
    return a.dragSourceOptions = e || null, a.reconnect(), function() {
      return a.disconnectDragSource();
    };
  }, [a, e]), De(function() {
    return a.dragPreviewOptions = t || null, a.reconnect(), function() {
      return a.disconnectDragPreview();
    };
  }, [a, t]), a;
}
var Ai = function e(t, n) {
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
      var s = i[o];
      if (!e(t[s], n[s]))
        return !1;
    }
    return !0;
  }
  return t !== t && n !== n;
};
const Li = /* @__PURE__ */ dr(Ai);
function Pi(e, t) {
  return Bi(e) || Mi(e, t) || xi(e, t) || Ri();
}
function Ri() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xi(e, t) {
  if (e) {
    if (typeof e == "string")
      return Fn(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Fn(e, t);
  }
}
function Fn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, a = new Array(t); n < t; n++)
    a[n] = e[n];
  return a;
}
function Mi(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var a = [], o = !0, i = !1, s, l;
    try {
      for (n = n.call(e); !(o = (s = n.next()).done) && (a.push(s.value), !(t && a.length === t)); o = !0)
        ;
    } catch (u) {
      i = !0, l = u;
    } finally {
      try {
        !o && n.return != null && n.return();
      } finally {
        if (i)
          throw l;
      }
    }
    return a;
  }
}
function Bi(e) {
  if (Array.isArray(e))
    return e;
}
function $i(e, t, n) {
  var a = v.useState(function() {
    return t(e);
  }), o = Pi(a, 2), i = o[0], s = o[1], l = v.useCallback(function() {
    var u = t(e);
    Li(i, u) || (s(u), n && n());
  }, [i, e, n]);
  return De(l), [i, l];
}
function Vi(e, t) {
  return ji(e) || Hi(e, t) || zi(e, t) || Ui();
}
function Ui() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function zi(e, t) {
  if (e) {
    if (typeof e == "string")
      return An(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return An(e, t);
  }
}
function An(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, a = new Array(t); n < t; n++)
    a[n] = e[n];
  return a;
}
function Hi(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var a = [], o = !0, i = !1, s, l;
    try {
      for (n = n.call(e); !(o = (s = n.next()).done) && (a.push(s.value), !(t && a.length === t)); o = !0)
        ;
    } catch (u) {
      i = !0, l = u;
    } finally {
      try {
        !o && n.return != null && n.return();
      } finally {
        if (i)
          throw l;
      }
    }
    return a;
  }
}
function ji(e) {
  if (Array.isArray(e))
    return e;
}
function Gi(e, t, n) {
  var a = $i(e, t, n), o = Vi(a, 2), i = o[0], s = o[1];
  return De(function() {
    var u = e.getHandlerId();
    if (u != null)
      return e.subscribeToStateChange(s, {
        handlerIds: [u]
      });
  }, [e, s]), i;
}
function Da(e, t, n) {
  return Gi(t, e || function() {
    return {};
  }, function() {
    return n.reconnect();
  });
}
function qi(e) {
  return v.useMemo(function() {
    return e.hooks.dragSource();
  }, [e]);
}
function Wi(e) {
  return v.useMemo(function() {
    return e.hooks.dragPreview();
  }, [e]);
}
function Qi(e, t) {
  var n = Ea(e, t);
  L(!n.begin, "useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");
  var a = Ni(), o = Fi(n.options, n.previewOptions);
  return Ti(n, a, o), [Da(n.collect, a, o), qi(o), Wi(o)];
}
function Zi(e) {
  var t = e.accept;
  return v.useMemo(function() {
    return L(e.accept != null, "accept must be defined"), Array.isArray(t) ? t : [t];
  }, [t]);
}
function Ki(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ln(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function Xi(e, t, n) {
  return t && Ln(e.prototype, t), n && Ln(e, n), e;
}
function Pn(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Yi = /* @__PURE__ */ function() {
  function e(t, n) {
    Ki(this, e), Pn(this, "spec", void 0), Pn(this, "monitor", void 0), this.spec = t, this.monitor = n;
  }
  return Xi(e, [{
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
function Ji(e, t) {
  var n = v.useMemo(function() {
    return new Yi(e, t);
  }, [t]);
  return v.useEffect(function() {
    n.spec = e;
  }, [e]), n;
}
function es(e, t) {
  return rs(e) || as(e, t) || ns(e, t) || ts();
}
function ts() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ns(e, t) {
  if (e) {
    if (typeof e == "string")
      return Rn(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Rn(e, t);
  }
}
function Rn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, a = new Array(t); n < t; n++)
    a[n] = e[n];
  return a;
}
function as(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var a = [], o = !0, i = !1, s, l;
    try {
      for (n = n.call(e); !(o = (s = n.next()).done) && (a.push(s.value), !(t && a.length === t)); o = !0)
        ;
    } catch (u) {
      i = !0, l = u;
    } finally {
      try {
        !o && n.return != null && n.return();
      } finally {
        if (i)
          throw l;
      }
    }
    return a;
  }
}
function rs(e) {
  if (Array.isArray(e))
    return e;
}
function os(e, t, n) {
  var a = Ne(), o = Ji(e, t), i = Zi(e);
  De(function() {
    var l = fi(i, o, a), u = es(l, 2), d = u[0], f = u[1];
    return t.receiveHandlerId(d), n.receiveHandlerId(d), f;
  }, [a, t, o, n, i.map(function(s) {
    return s.toString();
  }).join("|")]);
}
function is() {
  var e = Ne();
  return v.useMemo(function() {
    return new ni(e);
  }, [e]);
}
function ss(e) {
  var t = Ne(), n = v.useMemo(function() {
    return new di(t.getBackend());
  }, [t]);
  return De(function() {
    return n.dropTargetOptions = e || null, n.reconnect(), function() {
      return n.disconnectDropTarget();
    };
  }, [e]), n;
}
function ls(e) {
  return v.useMemo(function() {
    return e.hooks.dropTarget();
  }, [e]);
}
function us(e, t) {
  var n = Ea(e, t), a = is(), o = ss(n.options);
  return os(n, a, o), [Da(n.collect, a, o), ls(o)];
}
function Sa(e) {
  var t = null, n = function() {
    return t == null && (t = e()), t;
  };
  return n;
}
function cs(e, t) {
  return e.filter(function(n) {
    return n !== t;
  });
}
function ds(e, t) {
  var n = /* @__PURE__ */ new Set(), a = function(s) {
    return n.add(s);
  };
  e.forEach(a), t.forEach(a);
  var o = [];
  return n.forEach(function(i) {
    return o.push(i);
  }), o;
}
function fs(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function xn(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function ms(e, t, n) {
  return t && xn(e.prototype, t), n && xn(e, n), e;
}
function Mn(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var ps = /* @__PURE__ */ function() {
  function e(t) {
    fs(this, e), Mn(this, "entered", []), Mn(this, "isNodeInDocument", void 0), this.isNodeInDocument = t;
  }
  return ms(e, [{
    key: "enter",
    value: function(n) {
      var a = this, o = this.entered.length, i = function(l) {
        return a.isNodeInDocument(l) && (!l.contains || l.contains(n));
      };
      return this.entered = ds(this.entered.filter(i), [n]), o === 0 && this.entered.length > 0;
    }
  }, {
    key: "leave",
    value: function(n) {
      var a = this.entered.length;
      return this.entered = cs(this.entered.filter(this.isNodeInDocument), n), a > 0 && this.entered.length === 0;
    }
  }, {
    key: "reset",
    value: function() {
      this.entered = [];
    }
  }]), e;
}(), gs = Sa(function() {
  return /firefox/i.test(navigator.userAgent);
}), wa = Sa(function() {
  return !!window.safari;
});
function hs(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Bn(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function vs(e, t, n) {
  return t && Bn(e.prototype, t), n && Bn(e, n), e;
}
function Pe(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var $n = /* @__PURE__ */ function() {
  function e(t, n) {
    hs(this, e), Pe(this, "xs", void 0), Pe(this, "ys", void 0), Pe(this, "c1s", void 0), Pe(this, "c2s", void 0), Pe(this, "c3s", void 0);
    for (var a = t.length, o = [], i = 0; i < a; i++)
      o.push(i);
    o.sort(function(S, C) {
      return t[S] < t[C] ? -1 : 1;
    });
    for (var s = [], l = [], u, d, f = 0; f < a - 1; f++)
      u = t[f + 1] - t[f], d = n[f + 1] - n[f], s.push(u), l.push(d / u);
    for (var m = [l[0]], b = 0; b < s.length - 1; b++) {
      var h = l[b], I = l[b + 1];
      if (h * I <= 0)
        m.push(0);
      else {
        u = s[b];
        var O = s[b + 1], p = u + O;
        m.push(3 * p / ((p + O) / h + (p + u) / I));
      }
    }
    m.push(l[l.length - 1]);
    for (var D = [], c = [], g, y = 0; y < m.length - 1; y++) {
      g = l[y];
      var w = m[y], E = 1 / s[y], T = w + m[y + 1] - g - g;
      D.push((g - w - T) * E), c.push(T * E * E);
    }
    this.xs = t, this.ys = n, this.c1s = m, this.c2s = D, this.c3s = c;
  }
  return vs(e, [{
    key: "interpolate",
    value: function(n) {
      var a = this.xs, o = this.ys, i = this.c1s, s = this.c2s, l = this.c3s, u = a.length - 1;
      if (n === a[u])
        return o[u];
      for (var d = 0, f = l.length - 1, m; d <= f; ) {
        m = Math.floor(0.5 * (d + f));
        var b = a[m];
        if (b < n)
          d = m + 1;
        else if (b > n)
          f = m - 1;
        else
          return o[m];
      }
      u = Math.max(0, f);
      var h = n - a[u], I = h * h;
      return o[u] + i[u] * h + s[u] * I + l[u] * h * I;
    }
  }]), e;
}(), ys = 1;
function Ta(e) {
  var t = e.nodeType === ys ? e : e.parentElement;
  if (!t)
    return null;
  var n = t.getBoundingClientRect(), a = n.top, o = n.left;
  return {
    x: o,
    y: a
  };
}
function Me(e) {
  return {
    x: e.clientX,
    y: e.clientY
  };
}
function bs(e) {
  var t;
  return e.nodeName === "IMG" && (gs() || !((t = document.documentElement) !== null && t !== void 0 && t.contains(e)));
}
function Es(e, t, n, a) {
  var o = e ? t.width : n, i = e ? t.height : a;
  return wa() && e && (i /= window.devicePixelRatio, o /= window.devicePixelRatio), {
    dragPreviewWidth: o,
    dragPreviewHeight: i
  };
}
function Ds(e, t, n, a, o) {
  var i = bs(t), s = i ? e : t, l = Ta(s), u = {
    x: n.x - l.x,
    y: n.y - l.y
  }, d = e.offsetWidth, f = e.offsetHeight, m = a.anchorX, b = a.anchorY, h = Es(i, t, d, f), I = h.dragPreviewWidth, O = h.dragPreviewHeight, p = function() {
    var T = new $n([0, 0.5, 1], [
      // Dock to the top
      u.y,
      // Align at the center
      u.y / f * O,
      // Dock to the bottom
      u.y + O - f
    ]), S = T.interpolate(b);
    return wa() && i && (S += (window.devicePixelRatio - 1) * O), S;
  }, D = function() {
    var T = new $n([0, 0.5, 1], [
      // Dock to the left
      u.x,
      // Align at the center
      u.x / d * I,
      // Dock to the right
      u.x + I - d
    ]);
    return T.interpolate(m);
  }, c = o.offsetX, g = o.offsetY, y = c === 0 || c, w = g === 0 || g;
  return {
    x: y ? c : D(),
    y: w ? g : p()
  };
}
var Ca = "__NATIVE_FILE__", Oa = "__NATIVE_URL__", Ia = "__NATIVE_TEXT__", _a = "__NATIVE_HTML__";
const Vn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FILE: Ca,
  HTML: _a,
  TEXT: Ia,
  URL: Oa
}, Symbol.toStringTag, { value: "Module" }));
function ut(e, t, n) {
  var a = t.reduce(function(o, i) {
    return o || e.getData(i);
  }, "");
  return a ?? n;
}
var Te;
function Be(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var bt = (Te = {}, Be(Te, Ca, {
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
}), Be(Te, _a, {
  exposeProperties: {
    html: function(t, n) {
      return ut(t, n, "");
    },
    dataTransfer: function(t) {
      return t;
    }
  },
  matchesTypes: ["Html", "text/html"]
}), Be(Te, Oa, {
  exposeProperties: {
    urls: function(t, n) {
      return ut(t, n, "").split(`
`);
    },
    dataTransfer: function(t) {
      return t;
    }
  },
  matchesTypes: ["Url", "text/uri-list"]
}), Be(Te, Ia, {
  exposeProperties: {
    text: function(t, n) {
      return ut(t, n, "");
    },
    dataTransfer: function(t) {
      return t;
    }
  },
  matchesTypes: ["Text", "text/plain"]
}), Te);
function Ss(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Un(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function ws(e, t, n) {
  return t && Un(e.prototype, t), n && Un(e, n), e;
}
function zn(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Ts = /* @__PURE__ */ function() {
  function e(t) {
    Ss(this, e), zn(this, "item", void 0), zn(this, "config", void 0), this.config = t, this.item = {}, this.initializeExposedProperties();
  }
  return ws(e, [{
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
function Cs(e, t) {
  var n = new Ts(bt[e]);
  return n.loadDataTransfer(t), n;
}
function ct(e) {
  if (!e)
    return null;
  var t = Array.prototype.slice.call(e.types || []);
  return Object.keys(bt).filter(function(n) {
    var a = bt[n].matchesTypes;
    return a.some(function(o) {
      return t.indexOf(o) > -1;
    });
  })[0] || null;
}
function Os(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Hn(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function Is(e, t, n) {
  return t && Hn(e.prototype, t), n && Hn(e, n), e;
}
function dt(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var _s = /* @__PURE__ */ function() {
  function e(t, n) {
    Os(this, e), dt(this, "ownerDocument", null), dt(this, "globalContext", void 0), dt(this, "optionsArgs", void 0), this.globalContext = t, this.optionsArgs = n;
  }
  return Is(e, [{
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
function jn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function Gn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? jn(Object(n), !0).forEach(function(a) {
      R(e, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : jn(Object(n)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return e;
}
function ks(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function qn(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
  }
}
function Ns(e, t, n) {
  return t && qn(e.prototype, t), n && qn(e, n), e;
}
function R(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Fs = /* @__PURE__ */ function() {
  function e(t, n, a) {
    var o = this;
    ks(this, e), R(this, "options", void 0), R(this, "actions", void 0), R(this, "monitor", void 0), R(this, "registry", void 0), R(this, "enterLeaveCounter", void 0), R(this, "sourcePreviewNodes", /* @__PURE__ */ new Map()), R(this, "sourcePreviewNodeOptions", /* @__PURE__ */ new Map()), R(this, "sourceNodes", /* @__PURE__ */ new Map()), R(this, "sourceNodeOptions", /* @__PURE__ */ new Map()), R(this, "dragStartSourceIds", null), R(this, "dropTargetIds", []), R(this, "dragEnterTargetIds", []), R(this, "currentNativeSource", null), R(this, "currentNativeHandle", null), R(this, "currentDragSourceNode", null), R(this, "altKeyPressed", !1), R(this, "mouseMoveTimeoutTimer", null), R(this, "asyncEndDragFrameId", null), R(this, "dragOverTargetIds", null), R(this, "lastClientOffset", null), R(this, "hoverRafId", null), R(this, "getSourceClientOffset", function(i) {
      var s = o.sourceNodes.get(i);
      return s && Ta(s) || null;
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
        var s = o.dragStartSourceIds;
        o.dragStartSourceIds = null;
        var l = Me(i);
        o.monitor.isDragging() && o.actions.endDrag(), o.actions.beginDrag(s || [], {
          publishSource: !1,
          getSourceClientOffset: o.getSourceClientOffset,
          clientOffset: l
        });
        var u = i.dataTransfer, d = ct(u);
        if (o.monitor.isDragging()) {
          if (u && typeof u.setDragImage == "function") {
            var f = o.monitor.getSourceId(), m = o.sourceNodes.get(f), b = o.sourcePreviewNodes.get(f) || m;
            if (b) {
              var h = o.getCurrentSourcePreviewNodeOptions(), I = h.anchorX, O = h.anchorY, p = h.offsetX, D = h.offsetY, c = {
                anchorX: I,
                anchorY: O
              }, g = {
                offsetX: p,
                offsetY: D
              }, y = Ds(m, b, l, c, g);
              u.setDragImage(b, y.x, y.y);
            }
          }
          try {
            u == null || u.setData("application/json", {});
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
          if (u && !u.types && (i.target && !i.target.hasAttribute || !i.target.hasAttribute("draggable")))
            return;
          i.preventDefault();
        }
      }
    }), R(this, "handleTopDragEndCapture", function() {
      o.clearCurrentDragSourceNode() && o.monitor.isDragging() && o.actions.endDrag();
    }), R(this, "handleTopDragEnterCapture", function(i) {
      o.dragEnterTargetIds = [];
      var s = o.enterLeaveCounter.enter(i.target);
      if (!(!s || o.monitor.isDragging())) {
        var l = i.dataTransfer, u = ct(l);
        u && o.beginDragNativeItem(u, l);
      }
    }), R(this, "handleTopDragEnter", function(i) {
      var s = o.dragEnterTargetIds;
      if (o.dragEnterTargetIds = [], !!o.monitor.isDragging()) {
        o.altKeyPressed = i.altKey, s.length > 0 && o.actions.hover(s, {
          clientOffset: Me(i)
        });
        var l = s.some(function(u) {
          return o.monitor.canDropOnTarget(u);
        });
        l && (i.preventDefault(), i.dataTransfer && (i.dataTransfer.dropEffect = o.getCurrentDropEffect()));
      }
    }), R(this, "handleTopDragOverCapture", function() {
      o.dragOverTargetIds = [];
    }), R(this, "handleTopDragOver", function(i) {
      var s = o.dragOverTargetIds;
      if (o.dragOverTargetIds = [], !o.monitor.isDragging()) {
        i.preventDefault(), i.dataTransfer && (i.dataTransfer.dropEffect = "none");
        return;
      }
      o.altKeyPressed = i.altKey, o.lastClientOffset = Me(i), o.hoverRafId === null && typeof requestAnimationFrame < "u" && (o.hoverRafId = requestAnimationFrame(function() {
        o.monitor.isDragging() && o.actions.hover(s || [], {
          clientOffset: o.lastClientOffset
        }), o.hoverRafId = null;
      }));
      var l = (s || []).some(function(u) {
        return o.monitor.canDropOnTarget(u);
      });
      l ? (i.preventDefault(), i.dataTransfer && (i.dataTransfer.dropEffect = o.getCurrentDropEffect())) : o.isDraggingNativeItem() ? i.preventDefault() : (i.preventDefault(), i.dataTransfer && (i.dataTransfer.dropEffect = "none"));
    }), R(this, "handleTopDragLeaveCapture", function(i) {
      o.isDraggingNativeItem() && i.preventDefault();
      var s = o.enterLeaveCounter.leave(i.target);
      s && o.isDraggingNativeItem() && setTimeout(function() {
        return o.endDragNativeItem();
      }, 0);
    }), R(this, "handleTopDropCapture", function(i) {
      if (o.dropTargetIds = [], o.isDraggingNativeItem()) {
        var s;
        i.preventDefault(), (s = o.currentNativeSource) === null || s === void 0 || s.loadDataTransfer(i.dataTransfer);
      } else
        ct(i.dataTransfer) && i.preventDefault();
      o.enterLeaveCounter.reset();
    }), R(this, "handleTopDrop", function(i) {
      var s = o.dropTargetIds;
      o.dropTargetIds = [], o.actions.hover(s, {
        clientOffset: Me(i)
      }), o.actions.drop({
        dropEffect: o.getCurrentDropEffect()
      }), o.isDraggingNativeItem() ? o.endDragNativeItem() : o.monitor.isDragging() && o.actions.endDrag();
    }), R(this, "handleSelectStart", function(i) {
      var s = i.target;
      typeof s.dragDrop == "function" && (s.tagName === "INPUT" || s.tagName === "SELECT" || s.tagName === "TEXTAREA" || s.isContentEditable || (i.preventDefault(), s.dragDrop()));
    }), this.options = new _s(n, a), this.actions = t.getActions(), this.monitor = t.getMonitor(), this.registry = t.getRegistry(), this.enterLeaveCounter = new ps(this.isNodeInDocument);
  }
  return Ns(e, [{
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
      var s = function(d) {
        return i.handleDragStart(d, n);
      }, l = function(d) {
        return i.handleSelectStart(d);
      };
      return a.setAttribute("draggable", "true"), a.addEventListener("dragstart", s), a.addEventListener("selectstart", l), function() {
        i.sourceNodes.delete(n), i.sourceNodeOptions.delete(n), a.removeEventListener("dragstart", s), a.removeEventListener("selectstart", l), a.setAttribute("draggable", "false");
      };
    }
  }, {
    key: "connectDropTarget",
    value: function(n, a) {
      var o = this, i = function(d) {
        return o.handleDragEnter(d, n);
      }, s = function(d) {
        return o.handleDragOver(d, n);
      }, l = function(d) {
        return o.handleDrop(d, n);
      };
      return a.addEventListener("dragenter", i), a.addEventListener("dragover", s), a.addEventListener("drop", l), function() {
        a.removeEventListener("dragenter", i), a.removeEventListener("dragover", s), a.removeEventListener("drop", l);
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
      return Gn({
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
      return Gn({
        anchorX: 0.5,
        anchorY: 0.5,
        captureDraggingState: !1
      }, a || {});
    }
  }, {
    key: "isDraggingNativeItem",
    value: function() {
      var n = this.monitor.getItemType();
      return Object.keys(Vn).some(function(a) {
        return Vn[a] === n;
      });
    }
  }, {
    key: "beginDragNativeItem",
    value: function(n, a) {
      this.clearCurrentDragSourceNode(), this.currentNativeSource = Cs(n, a), this.currentNativeHandle = this.registry.addSource(n, this.currentNativeSource), this.actions.beginDrag([this.currentNativeHandle]);
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
}(), As = function(t, n, a) {
  return new Fs(t, n, a);
};
const ka = v.createContext({}), de = () => v.useContext(ka), Ls = ({ children: e }) => {
  var s, l, u;
  const [t, n] = v.useState({}), a = (d, f = !1) => {
    let m = { object: d, show: !0, disableBgClose: f };
    n((b) => ({ ...b, overlay: { ...m } }));
  }, o = (d = !1) => {
    n((f) => ({
      ...f,
      overlay: {
        ...f.overlay,
        show: d
      }
    }));
  }, i = {
    overlay: {
      object: ((s = t.overlay) == null ? void 0 : s.object) || null,
      show: ((l = t.overlay) == null ? void 0 : l.show) || !1,
      disableBgClose: ((u = t.overlay) == null ? void 0 : u.disableBgClose) || !1,
      actions: {
        openOverlay: a,
        toggleOverlay: o
      }
    }
  };
  return /* @__PURE__ */ r.createElement(ka.Provider, { value: i }, e);
}, Ps = "Dashboard Description", We = {
  data: {},
  loading: !1,
  filteredData: {},
  preview: !1,
  tabSelected: Ps
}, Rs = {
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
  ...We
}, X = v.createContext(Rs), ee = v.createContext(() => {
});
const xs = ({ disableBgClose: e, children: t, override: n = null }) => {
  let { overlay: a } = de();
  const [o, i] = v.useState(!1), [s, l] = v.useState(null), [u, d] = v.useState(!1), f = n ? n == null ? void 0 : n.show : a == null ? void 0 : a.show;
  return v.useEffect(() => {
    if (f === void 0 || f === !1)
      return;
    document.body.style.overflow = "hidden", i(!0), l("animate-in");
    const m = setTimeout(() => {
      l("show");
    }, 750);
    return () => clearTimeout(m);
  }, [f]), v.useEffect(() => {
    if (f === void 0 || f === !0)
      return;
    l("animate-out");
    const m = setTimeout(() => {
      l(null), i(!1), document.body.style.overflow = null;
    }, 400);
    return () => clearTimeout(m);
  }, [f]), v.useEffect(() => {
    if (u === !1)
      return;
    const m = setTimeout(() => {
      d(!1);
    }, 400);
    return () => clearTimeout(m);
  }, [u]), /* @__PURE__ */ r.createElement(r.Fragment, null, o && /* @__PURE__ */ r.createElement("div", { className: `cove-overlay${s ? " " + s : ""}${u ? " overlay-error" : ""}` }, /* @__PURE__ */ r.createElement("div", { className: "cove-overlay__bg", style: { cursor: e ? "default" : null }, onClick: (m) => e ? d(!0) : a ? a.actions.toggleOverlay(!1) : n ? n.actions.toggleOverlay(!1) : m.preventDefault(), role: "alert" }), /* @__PURE__ */ r.createElement("div", { className: "cove-overlay__wrapper" }, /* @__PURE__ */ r.createElement("div", { className: "cove-overlay__container" }, t))));
}, Ms = () => {
  const { overlay: e } = de();
  return /* @__PURE__ */ r.createElement(xs, { disableBgClose: e.disableBgClose }, e.object);
}, Na = v.createContext({}), $e = {
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
}, Bs = [
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
], $s = v.memo((e) => {
  const { config: t, updateConfig: n, loading: a, stateData: o, setParentConfig: i, isDashboard: s } = v.useContext(Na), [l, u] = v.useState(!0), [d, f] = v.useState(!1), m = Ot(t, n, !0), b = (E) => {
    let T = [...t.filters];
    T.splice(E, 1), n({ ...t, filters: T });
  }, h = (E, T, S) => {
    let C = [...t.filters];
    C[T][E] = S, n({ ...t, filters: C });
  }, I = () => {
    let E = t.filters ? [...t.filters] : [];
    E.push({ values: [] }), n({ ...t, filters: E });
  }, O = (E = !0) => {
    let T = {};
    return o.length && o.map((S) => Object.keys(S).forEach((C) => T[C] = !0)), Object.keys(T);
  }, p = (E) => {
    let T = [];
    const S = t.filters[E].columnName;
    return o && S && (o.forEach(function(C) {
      C[S] !== void 0 && T.indexOf(C[S]) === -1 && T.push(C[S]);
    }), T.sort()), T;
  };
  v.useEffect(() => {
    if (i) {
      const E = y();
      i(E);
    }
  }, [t]), v.useEffect(() => {
    if (!d) {
      let E = { ...t };
      delete E.newViz, n(E);
    }
  }, []);
  const D = () => {
    u(!l), n({
      ...t,
      showEditorPanel: !l
    });
  }, c = () => /* @__PURE__ */ r.createElement("section", { className: "waiting" }, /* @__PURE__ */ r.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ r.createElement("h3", null, "Error With Configuration"), /* @__PURE__ */ r.createElement("p", null, t.runtime.editorErrorMessage))), g = () => {
    const E = (T) => {
      T.preventDefault();
      let S = { ...t };
      delete S.newViz, n(S);
    };
    return /* @__PURE__ */ r.createElement("section", { className: "waiting" }, /* @__PURE__ */ r.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ r.createElement("h3", null, "Finish Configuring"), /* @__PURE__ */ r.createElement("p", null, "Set all required options to the left and confirm below to display a preview of the markup."), /* @__PURE__ */ r.createElement("button", { className: "btn btn-primary", style: { margin: "1em auto" }, onClick: E }, "I'm Done")));
  }, y = () => {
    let E = JSON.parse(JSON.stringify(t));
    return delete E.newViz, delete E.runtime, E;
  }, w = /* @__PURE__ */ r.createElement(xe, null, /* @__PURE__ */ r.createElement(xe.Section, { title: "General" }, /* @__PURE__ */ r.createElement(
    ir,
    {
      value: t.title,
      fieldName: "title",
      label: "Title",
      placeholder: "Filterable Text Title",
      updateField: m
    }
  )), /* @__PURE__ */ r.createElement(xe.Section, { title: "Data" }, /* @__PURE__ */ r.createElement("div", { className: "cove-accordion__panel-section" }, /* @__PURE__ */ r.createElement("div", { className: "cove-input-group" }, /* @__PURE__ */ r.createElement(
    pe,
    {
      value: t.textColumn || "",
      fieldName: "textColumn",
      label: "Text Column",
      updateField: m,
      initial: "Select",
      options: O()
    }
  ))), /* @__PURE__ */ r.createElement("hr", { className: "cove-accordion__divider" }), /* @__PURE__ */ r.createElement("label", { style: { marginBottom: "1rem" } }, /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Data Point Filters"), /* @__PURE__ */ r.createElement(x, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(x.Target, null, /* @__PURE__ */ r.createElement(P, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(x.Content, null, /* @__PURE__ */ r.createElement("p", null, 'To refine the highlighted data point, specify one or more filters (e.g., "Male" and "Female" for a column called "Sex").')))), t.filters && /* @__PURE__ */ r.createElement("ul", { className: "filters-list", style: { paddingLeft: 0, marginBottom: "1rem" } }, t.filters.map((E, T) => /* @__PURE__ */ r.createElement("fieldset", { className: "edit-block", key: T }, /* @__PURE__ */ r.createElement(
    "button",
    {
      type: "button",
      className: "remove-column",
      onClick: () => {
        b(T);
      }
    },
    "Remove"
  ), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Column"), /* @__PURE__ */ r.createElement(
    "select",
    {
      value: E.columnName,
      onChange: (S) => {
        h("columnName", T, S.target.value);
      }
    },
    /* @__PURE__ */ r.createElement("option", { value: "" }, "- Select Option -"),
    O().map((S, C) => /* @__PURE__ */ r.createElement("option", { value: S, key: C }, S))
  )), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Column Value"), /* @__PURE__ */ r.createElement(
    "select",
    {
      value: E.columnValue,
      onChange: (S) => {
        h("columnValue", T, S.target.value);
      }
    },
    /* @__PURE__ */ r.createElement("option", { value: "" }, "- Select Option -"),
    p(T).map((S, C) => /* @__PURE__ */ r.createElement("option", { value: S, key: C }, S))
  ))))), /* @__PURE__ */ r.createElement(sr, { onClick: I, fluid: !0 }, "Add Filter")), /* @__PURE__ */ r.createElement(xe.Section, { title: "Visual" }, /* @__PURE__ */ r.createElement(
    pe,
    {
      value: t.fontSize,
      fieldName: "fontSize",
      label: "Font Size",
      updateField: m,
      options: ["small", "medium", "large"]
    }
  ), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label" }, "Theme"), /* @__PURE__ */ r.createElement("ul", { className: "color-palette" }, Bs.map((E) => /* @__PURE__ */ r.createElement(
    "li",
    {
      title: E,
      key: E,
      onClick: () => {
        n({ ...t, theme: E });
      },
      className: t.theme === E ? "selected " + E : E
    }
  )))), /* @__PURE__ */ r.createElement("div", { className: "cove-accordion__panel-section checkbox-group" }, /* @__PURE__ */ r.createElement(
    Fe,
    {
      inline: !0,
      size: "small",
      value: t.visual.border,
      section: "visual",
      fieldName: "border",
      label: "Display Border",
      updateField: m
    }
  ), /* @__PURE__ */ r.createElement(
    Fe,
    {
      inline: !0,
      size: "small",
      value: t.visual.borderColorTheme,
      section: "visual",
      fieldName: "borderColorTheme",
      label: "Use theme border color",
      updateField: m
    }
  ), /* @__PURE__ */ r.createElement(
    Fe,
    {
      size: "small",
      value: t.visual.accent,
      section: "visual",
      fieldName: "accent",
      label: "Use Accent Style",
      updateField: m
    }
  ), /* @__PURE__ */ r.createElement(
    Fe,
    {
      size: "small",
      value: t.visual.background,
      section: "visual",
      fieldName: "background",
      label: "Use Theme Background Color",
      updateField: m
    }
  ), /* @__PURE__ */ r.createElement(
    Fe,
    {
      size: "small",
      value: t.visual.hideBackgroundColor,
      section: "visual",
      fieldName: "hideBackgroundColor",
      label: "Hide Background Color",
      updateField: m
    }
  ))));
  return a ? null : /* @__PURE__ */ r.createElement(aa, { component: "EditorPanel" }, /* @__PURE__ */ r.createElement(
    be.Sidebar,
    {
      displayPanel: l,
      isDashboard: s,
      title: "Configure Filtered Text",
      onBackClick: D
    },
    !t.newViz && t.runtime && t.runtime.editorErrorMessage && /* @__PURE__ */ r.createElement(c, null),
    t.newViz && d && /* @__PURE__ */ r.createElement(g, null),
    w
  ));
});
const Fa = ({ config: e, configUrl: t, isDashboard: n = !1, isEditor: a = !1, setConfig: o }) => {
  const i = new Se(), [s, l] = v.useState($e), [u, d] = v.useState(!0), [f, m] = v.useState(s.data || []), [b, h] = v.useState();
  let { title: I, filters: O } = s;
  const p = s.fontSize === "small" ? "16px" : s.fontSize === "medium" ? "22px" : "27px", { contentClasses: D, innerContainerClasses: c } = lr(s), g = async () => {
    let S = e || await (await fetch(t)).json(), C = S.formattedData || S.data || {};
    S.dataUrl && (C = await (await fetch(S.dataUrl)).json(), S.dataDescription && (C = i.autoStandardize(C), C = i.developerStandardize(C, S.dataDescription))), C && (m(C), h(C));
    let F = { ...s, ...S };
    const V = { ...ua(F) };
    y(V), d(!1);
  }, y = (S) => {
    Object.keys($e).forEach((C) => {
      S[C] && typeof S[C] == "object" && !Array.isArray(S[C]) && (S[C] = { ...$e[C], ...S[C] });
    }), S.runtime = {}, S.runtime.uniqueId = Date.now(), S.runtime.editorErrorMessage = "", l(S);
  }, w = () => {
    let S = [];
    if (O.length)
      O.map((C) => C.columnName && C.columnValue ? S = f.filter(function(F) {
        return F[C.columnName] === C.columnValue;
      }) : null);
    else
      return S = f.filter((C, F) => C[s.textColumn] && F === 0);
    return S;
  };
  v.useEffect(() => {
    g().catch((S) => console.log(S));
  }, []), v.useEffect(() => {
    e && !e.dataUrl && (y({ ...$e, ...e }), m(e.data), h(e.data));
  }, [e == null ? void 0 : e.data]);
  let E = /* @__PURE__ */ r.createElement(Ct, null);
  if (u === !1) {
    let S = /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(be.Responsive, { isEditor: a }, /* @__PURE__ */ r.createElement("div", { className: "cove-component__content no-borders" }, /* @__PURE__ */ r.createElement(ta, { classes: [`${s.theme}`], title: I, style: { fontSize: p } }), /* @__PURE__ */ r.createElement("div", { className: `${D.join(" ")} body` }, w().slice(0, 1).map((C, F) => /* @__PURE__ */ r.createElement("p", { style: { fontSize: p }, key: F }, " ", na(C[s.textColumn] || ""), " "))))));
    E = /* @__PURE__ */ r.createElement(r.Fragment, null, a && /* @__PURE__ */ r.createElement($s, null), S);
  }
  const T = {
    config: s,
    updateConfig: y,
    loading: u,
    setParentConfig: o,
    isDashboard: n,
    stateData: f,
    unfilteredData: f
  };
  return /* @__PURE__ */ r.createElement(aa, { component: "CdcFilteredText" }, /* @__PURE__ */ r.createElement(Na.Provider, { value: T }, /* @__PURE__ */ r.createElement(be.VisualizationWrapper, { config: s, isEditor: a, showEditorPanel: s == null ? void 0 : s.showEditorPanel }, E)));
}, ge = {
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
}, Vs = (e) => {
  const { type: t, visualizationType: n, general: a } = e;
  return n ? ge[n] : a != null && a.geoType ? a.geoType === "single-state" ? ge.us : ge[a.geoType] : ge[t];
};
const Aa = () => null, La = (e) => e, Pa = () => null, ce = ({ fontTheme: e = "dark", headerBgColor: t = "#fff", showDividerTop: n = !0, showDividerBottom: a = !0, showClose: o = !0, children: i, override: s = null }) => {
  let { overlay: l } = de();
  const u = v.Children.toArray(i), d = u.find((h) => (h == null ? void 0 : h.type) === Aa), f = u.find((h) => (h == null ? void 0 : h.type) === La), m = u.find((h) => (h == null ? void 0 : h.type) === Pa), b = (h) => h ? null : "none";
  return /* @__PURE__ */ r.createElement("div", { className: `cove-modal cove-modal__theme--${e}` }, (o || d) && /* @__PURE__ */ r.createElement(
    "div",
    {
      className: "cove-modal__header",
      style: {
        backgroundColor: t,
        boxShadow: b(d && n),
        padding: d ? null : "0",
        minHeight: d ? null : "unset"
      }
    },
    d && d.props.children,
    o && /* @__PURE__ */ r.createElement(
      "button",
      {
        className: "cove-modal--close",
        onClick: (h) => {
          if (s)
            return s.actions.toggleOverlay(!1);
          if (l)
            return l == null ? void 0 : l.actions.toggleOverlay(!1);
          h.preventDefault();
        }
      },
      /* @__PURE__ */ r.createElement(P, { display: "close" })
    )
  ), /* @__PURE__ */ r.createElement("div", { className: "cove-modal__content" }, f && f.props.children), m && /* @__PURE__ */ r.createElement(
    "div",
    {
      className: "cove-modal__footer",
      style: {
        boxShadow: b(a),
        paddingTop: a ? "1rem" : null
      }
    },
    m.props.children
  ));
};
ce.Header = Aa;
ce.Content = La;
ce.Footer = Pa;
ce.propTypes = {
  fontTheme: Ae.oneOf(["dark", "light"]),
  headerBgColor: Ae.string,
  showDividerTop: Ae.bool,
  showDividerBottom: Ae.bool,
  showClose: Ae.bool
};
const Ra = ({ vizKey: e, rowIndex: t }) => {
  var c;
  const { config: n } = v.useContext(X), { overlay: a } = de(), o = new Se(), i = v.useContext(ee), [s, l] = v.useState(!1), [u, d] = v.useState(!e), [f, m] = v.useState(!!n.rows[t].multiVizColumn), b = v.useMemo(() => e && !u ? n.visualizations[e] : n.rows[t], [n.visualizations, n.rows, e, t, u]), h = (g) => {
    i(e && !u ? { type: "UPDATE_VISUALIZATION", payload: { vizKey: e, configureData: g } } : { type: "UPDATE_ROW", payload: { rowIndex: t, rowData: g } });
  }, I = ({ target: { value: g } }) => {
    h({ dataDescription: {}, formattedData: void 0, dataKey: g });
  }, O = async (g, y) => {
    const w = b.dataKey, { data: E, dataUrl: T } = n.datasets[w];
    let S = E;
    !E && T && (S = await ke(T), S = o.autoStandardize(S));
    const C = { ...b.dataDescription, [g]: y }, F = { data: S, dataDescription: C, formattedData: o.developerStandardize(S, C) };
    h(F), l(!0);
  }, p = (g) => {
    g !== "" && (i({ type: "UPDATE_ROW", payload: { rowIndex: t, rowData: { multiVizColumn: g } } }), l(!0));
  }, D = (g) => {
    i({ type: "UPDATE_ROW", payload: { rowIndex: t, rowData: { expandCollapseAllButtons: g } } }), l(!0);
  };
  return /* @__PURE__ */ r.createElement(ce, null, /* @__PURE__ */ r.createElement(ce.Content, null, /* @__PURE__ */ r.createElement("div", { className: "dataset-selector-container" }, "Select a dataset: ", /* @__PURE__ */ r.createElement("select", { className: "dataset-selector", value: b.dataKey || "", onChange: I }, /* @__PURE__ */ r.createElement("option", { value: "" }, "Select a dataset"), n.datasets && Object.keys(n.datasets).map((g) => /* @__PURE__ */ r.createElement("option", { key: g }, g))), e && /* @__PURE__ */ r.createElement(
    Ve,
    {
      label: "Apply To Row",
      value: u,
      updateField: (g, y, w, E) => {
        d(E), I({ target: { value: "" } });
      }
    }
  )), b.dataKey && /* @__PURE__ */ r.createElement(
    ur,
    {
      configureData: b,
      visualizationKey: e,
      updateDescriptionProp: O
    }
  ), u && b.dataKey ? f ? /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(pe, { options: Object.keys(((c = n.datasets[b.dataKey]) == null ? void 0 : c.data[0]) || {}), value: n.rows[t].multiVizColumn, label: "Multi-Visualization Column", initial: "--Select--", updateField: (g, y, w, E) => p(E), required: !0 }), /* @__PURE__ */ r.createElement(Ve, { value: n.rows[t].expandCollapseAllButtons, label: " Add Expand/Collapse All buttons", fieldName: "", updateField: (g, y, w, E) => D(E) })) : /* @__PURE__ */ r.createElement(
    Ve,
    {
      label: "Configure Multiple Visualizations",
      value: f,
      tooltip: /* @__PURE__ */ r.createElement(x, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(x.Target, null, /* @__PURE__ */ r.createElement(P, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(x.Content, null, /* @__PURE__ */ r.createElement("p", null, "You can select a column where for each unique value in the column the configuration for the row will be repeated in to the data preview."))),
      updateField: (g, y, w, E) => {
        s && E === !0 && l(!1), m(E);
      }
    }
  ) : /* @__PURE__ */ r.createElement(r.Fragment, null), s && /* @__PURE__ */ r.createElement("button", { style: { margin: "1em", display: "block" }, className: "cove-button", onClick: () => a == null ? void 0 : a.actions.toggleOverlay() }, "Continue")));
}, Us = {
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
}, Z = ({ widgetConfig: e, addVisualization: t, type: n }) => {
  var g;
  const { overlay: a } = de(), { config: o, data: i } = v.useContext(X), s = v.useContext(ee), l = new Se(), u = (y, w) => {
    let E = w.getDropResult();
    if (!E)
      return null;
    const { rowIdx: T, colIdx: S } = E;
    if ((e == null ? void 0 : e.rowIdx) !== void 0)
      s({ type: "MOVE_VISUALIZATION", payload: { rowIdx: T, colIdx: S, widget: e } });
    else if (t) {
      const C = t();
      s({ type: "ADD_VISUALIZATION", payload: { newViz: C, rowIdx: T, colIdx: S } });
    }
  }, [{ isDragging: d, ...f }, m] = Qi(
    {
      type: "vis-widget",
      end: u,
      collect: (y) => ({
        isDragging: y.isDragging()
      })
    },
    [o.activeDashboard, o.rows, o.dashboard.sharedFilters]
  ), b = () => {
    e && s({
      type: "DELETE_WIDGET",
      payload: { rowIdx: e.rowIdx, colIdx: e.colIdx, uid: e.uid }
    });
  }, h = (y, w) => {
    const E = new URL(y);
    return E.searchParams.set("$limit", w), E.href.replace(/%24/g, "$");
  }, I = () => {
    var T;
    const y = ((T = o.rows[e.rowIdx]) == null ? void 0 : T.dataKey) || (e == null ? void 0 : e.dataKey), w = o.datasets[y], E = i[w.dataUrl];
    if (E && !E.length) {
      const S = h(w.dataUrl, 100);
      ke(S).then((C) => {
        C.sample = !0, s({ type: "SET_DATA", payload: { ...i, [y]: C } });
      });
    }
  }, O = () => {
    e && (s({ type: "UPDATE_VISUALIZATION", payload: { vizKey: e.uid, configureData: { editing: !0 } } }), I());
  };
  let p = !1;
  const D = !!((g = o.rows[e == null ? void 0 : e.rowIdx]) != null && g.dataKey);
  if (D || ["dashboardFilters", "markup-include"].includes(n))
    p = !0;
  else if (e != null && e.formattedData)
    p = !0;
  else if (e != null && e.dataKey && (e != null && e.dataDescription) && o.datasets[e.dataKey]) {
    const y = l.autoStandardize(o.datasets[e.dataKey].data);
    !!l.developerStandardize(y, e.dataDescription) && (p = !0);
  }
  const c = !D && (e == null ? void 0 : e.type) !== "dashboardFilters";
  return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("div", { className: "widget", ref: m, style: { opacity: d ? 0.5 : 1 }, ...f }, /* @__PURE__ */ r.createElement(P, { display: "move", className: "drag-icon" }), /* @__PURE__ */ r.createElement("div", { className: "widget__content" }, (e == null ? void 0 : e.rowIdx) !== void 0 && /* @__PURE__ */ r.createElement("div", { className: "widget-menu" }, p && /* @__PURE__ */ r.createElement("button", { title: "Configure Visualization", className: "btn btn-configure", onClick: O }, ge.tools), c && /* @__PURE__ */ r.createElement(
    "button",
    {
      title: "Configure Data",
      className: "btn btn-configure",
      onClick: () => {
        a == null || a.actions.openOverlay(
          /* @__PURE__ */ r.createElement(Ra, { rowIndex: e.rowIdx, vizKey: e.uid })
        );
      }
    },
    ge.gear
  ), /* @__PURE__ */ r.createElement("div", { className: "widget-menu-item", onClick: b }, /* @__PURE__ */ r.createElement(P, { display: "close", base: !0 }))), ge[n], /* @__PURE__ */ r.createElement("span", null, Us[n]), (e == null ? void 0 : e.newViz) && n !== "dashboardFilters" && /* @__PURE__ */ r.createElement("span", { onClick: O, className: "config-needed" }, "Configuration needed"))));
}, zs = ({ data: e, rowIdx: t, colIdx: n }) => {
  var d;
  const { config: a } = v.useContext(X), [{ isOver: o, canDrop: i }, s] = us(
    () => ({
      accept: "vis-widget",
      drop: () => ({
        rowIdx: t,
        colIdx: n,
        canDrop: i
      }),
      canDrop: () => !e.widget,
      collect: (f) => ({
        isOver: f.isOver(),
        canDrop: !!f.canDrop()
      })
    }),
    [a.activeDashboard]
  ), l = e.widget ? a == null ? void 0 : a.visualizations[e.widget] : null;
  l && !l.uid && (l.uid = e.widget);
  let u = ["builder-column", "column-size--" + e.width];
  return o && i && u.push("column--drop"), l && u.push("column--populated"), /* @__PURE__ */ r.createElement("div", { className: u.join(" "), ref: s }, l ? /* @__PURE__ */ r.createElement(Z, { widgetConfig: { rowIdx: t, colIdx: n, ...l }, type: l.visualizationType ?? ((d = l.general) == null ? void 0 : d.geoType) }) : /* @__PURE__ */ r.createElement("p", { className: "builder-column__text" }, "Drag and drop ", /* @__PURE__ */ r.createElement("br", null), " visualization"));
}, Hs = (e) => /* @__PURE__ */ v.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ v.createElement("path", { d: "M2,16 L22,16 L22,14 L2,14 L2,16 Z M2,11 L22,11 L22,9 L2,9 L2,11 Z M2,4 L2,6 L22,6 L22,4 L2,4 Z" })), js = (e) => /* @__PURE__ */ v.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ v.createElement("path", { d: "M22 14L22 16 13 16 13 14 22 14zM11 16L2 16 2 14 11 14 11 16zM22 4L22 6 13 6 13 4 22 4zM11 6L2 6 2 4 11 4 11 6zM22 9L22 11 13 11 13 9 22 9zM11 11L2 11 2 9 11 9 11 11z" })), Gs = (e) => /* @__PURE__ */ v.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ v.createElement("path", { d: "M22,14 L22,16 L17,16 L17,14 L22,14 Z M7,14 L7,16 L2,16 L2,14 L7,14 Z M15,14 L15,16 L9,16 L9,14 L15,14 Z M22,9 L22,11 L17,11 L17,9 L22,9 Z M7,9 L7,11 L2,11 L2,9 L7,9 Z M15,9 L15,11 L9,11 L9,9 L15,9 Z M22,4 L22,6 L17,6 L17,4 L22,4 Z M7,4 L7,6 L2,6 L2,4 L7,4 Z M15,4 L15,6 L9,6 L9,4 L15,4 Z" })), qs = (e) => /* @__PURE__ */ v.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ v.createElement("path", { d: "M22,14 L22,16 L10,16 L10,14 L22,14 Z M8,14 L8,16 L2,16 L2,14 L8,14 Z M22,9 L22,11 L10,11 L10,9 L22,9 Z M8,9 L8,11 L2,11 L2,9 L8,9 Z M22,4 L22,6 L10,6 L10,4 L22,4 Z M8,4 L8,6 L2,6 L2,4 L8,4 Z" })), Ws = (e) => /* @__PURE__ */ v.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ v.createElement("path", { d: "M22,14 L22,16 L16,16 L16,14 L22,14 Z M14,14 L14,16 L2,16 L2,14 L14,14 Z M22,9 L22,11 L16,11 L16,9 L22,9 Z M14,9 L14,11 L2,11 L2,9 L14,9 Z M22,4 L22,6 L16,6 L16,4 L22,4 Z M14,4 L14,6 L2,6 L2,4 L14,4 Z" })), Qs = (e) => /* @__PURE__ */ v.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", height: 24, width: 24, viewBox: "0 0 576 512", ...e }, /* @__PURE__ */ v.createElement("path", { d: "M192 64C86 64 0 150 0 256S86 448 192 448H384c106 0 192-86 192-192s-86-192-192-192H192zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" })), Zs = ({ rowIdx: e }) => {
  const { config: t } = v.useContext(X), n = v.useContext(ee), a = A.cloneDeep(t.rows), o = t.rows[e], i = (m) => n({ type: "UPDATE_CONFIG", payload: [m] }), s = v.useMemo(() => o.toggle ? "toggle" : o.columns.reduce((m, b) => (b.width && (m += b.width), m), ""), [o]), l = (m, b = void 0) => {
    const h = A.cloneDeep(a);
    h[e].toggle = b;
    const I = h[e].columns, O = I.filter((D) => D.widget);
    if (!(O.length > m.length)) {
      {
        const D = I.length > m.length ? O : I;
        h[e].columns = m.map((c, g) => {
          const y = D[g];
          return y ? { ...y, width: c } : { width: c };
        });
      }
      i({ ...t, rows: h });
    }
  }, u = (m = "down") => {
    if (e === a.length - 1 && m === "down")
      return;
    let b = m === "down" ? e + 1 : e - 1;
    const h = a[b];
    a[b] = o, a[e] = h, a[b].uuid = Date.now(), a[e].uuid = Date.now(), i({ ...t, rows: a });
    let I = m === "down" ? 202 : -202, O = m === "down" ? -202 : 202, p = document.querySelector("[data-row-id='" + e + "']"), D = document.querySelector("[data-row-id='" + b + "']");
    p.style.pointerEvents = "none", D.style.pointerEvents = "none", p.style.top = I + "px", D.style.top = O + "px", setTimeout(() => {
      p.style.transition = "top 500ms cubic-bezier(0.16, 1, 0.3, 1)", D.style.transition = "top 500ms cubic-bezier(0.16, 1, 0.3, 1)", p.style.top = "0", D.style.top = "0";
    }, 0), setTimeout(() => {
      p.setAttribute("style", ""), D.setAttribute("style", "");
    }, 500);
  }, d = () => {
    let m = { ...t.visualizations };
    a[e] && a[e].columns && a[e].columns.length && t.visualizations && a[e].columns.forEach((b) => {
      b.widget && delete m[b.widget];
    }), a.splice(e, 1), i({ ...t, rows: a, visualizations: m });
  }, f = [
    /* @__PURE__ */ r.createElement(
      "li",
      {
        className: s === "12" ? "current row-menu__list--item" : "row-menu__list--item",
        onClick: () => l([12]),
        key: "12",
        title: "1 Column"
      },
      /* @__PURE__ */ r.createElement(Hs, null)
    ),
    /* @__PURE__ */ r.createElement(
      "li",
      {
        className: s === "66" ? "current row-menu__list--item" : "row-menu__list--item",
        onClick: () => l([6, 6]),
        key: "66",
        title: "2 Columns"
      },
      /* @__PURE__ */ r.createElement(js, null)
    ),
    /* @__PURE__ */ r.createElement(
      "li",
      {
        className: s === "444" ? "current row-menu__list--item" : "row-menu__list--item",
        onClick: () => l([4, 4, 4]),
        key: "444",
        title: "3 Columns"
      },
      /* @__PURE__ */ r.createElement(Gs, null)
    ),
    /* @__PURE__ */ r.createElement(
      "li",
      {
        className: s === "48" ? "current row-menu__list--item" : "row-menu__list--item",
        onClick: () => l([4, 8]),
        key: "48",
        title: "2 Columns"
      },
      /* @__PURE__ */ r.createElement(qs, null)
    ),
    /* @__PURE__ */ r.createElement(
      "li",
      {
        className: s === "84" ? "current row-menu__list--item" : "row-menu__list--item",
        onClick: () => l([8, 4]),
        key: "84",
        title: "2 Columns"
      },
      /* @__PURE__ */ r.createElement(Ws, null)
    ),
    /* @__PURE__ */ r.createElement(
      "li",
      {
        className: s === "toggle" ? "current row-menu__list--item" : "row-menu__list--item",
        onClick: () => l([12, 12, 12], !0),
        key: "toggle",
        title: "Toggle between up to three visualizations"
      },
      /* @__PURE__ */ r.createElement(Qs, null)
    )
  ];
  return /* @__PURE__ */ r.createElement("nav", { className: "row-menu" }, /* @__PURE__ */ r.createElement("ul", { className: "row-menu__flyout" }, f), /* @__PURE__ */ r.createElement("div", { className: "spacer" }), /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "btn btn-primary row-menu__btn border-0",
      title: "Move Row Up",
      onClick: () => u("up"),
      disabled: e === 0
    },
    /* @__PURE__ */ r.createElement(P, { display: "caretUp", color: "#fff", size: 25 })
  ), /* @__PURE__ */ r.createElement(
    "button",
    {
      className: "btn btn-primary row-menu__btn border-0",
      title: "Move Row Down",
      onClick: () => u("down"),
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
}, Ks = ({ row: e, idx: t, uuid: n }) => {
  const { overlay: a } = de(), o = v.useContext(ee), i = () => {
    if (e.footnotesId)
      o({ type: "UPDATE_VISUALIZATION", payload: { vizKey: e.footnotesId, configureData: { editing: !0 } } });
    else {
      const s = "footnotes", l = s + Date.now();
      o({
        type: "ADD_FOOTNOTE",
        payload: { id: l, rowIndex: t, config: {
          uid: l,
          type: s,
          visualizationType: s,
          editing: !0
        } }
      });
    }
  };
  return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("div", { className: "builder-row", "data-row-id": t }, /* @__PURE__ */ r.createElement(Zs, { rowIdx: t }), /* @__PURE__ */ r.createElement(
    "button",
    {
      title: "Configure Data",
      className: "btn btn-configure-row",
      onClick: () => {
        a == null || a.actions.openOverlay(/* @__PURE__ */ r.createElement(Ra, { rowIndex: t }));
      }
    },
    ge.gearMulti
  ), /* @__PURE__ */ r.createElement("div", { className: "column-container" }, e.columns.filter((s) => s.width).map((s, l) => /* @__PURE__ */ r.createElement(zs, { data: s, key: `row-${n}-col-${l}`, rowIdx: t, colIdx: l }))), /* @__PURE__ */ r.createElement("button", { className: "btn btn-primary footnotes", onClick: i }, e.footnotesId ? "Edit" : "Add", " Footnotes")));
}, Xs = () => {
  const { config: e } = v.useContext(X);
  if (!e)
    return null;
  const t = e.rows, n = v.useContext(ee), a = (i) => n({ type: "UPDATE_CONFIG", payload: [i] }), o = () => {
    const i = { columns: [{ width: 12 }] };
    a({
      ...e,
      rows: [...t, i],
      uuid: Date.now()
    });
  };
  return /* @__PURE__ */ r.createElement("div", { className: "builder-grid" }, (t || []).map((i, s) => /* @__PURE__ */ r.createElement(Ks, { row: i, idx: s, uuid: i.uuid, key: s })), /* @__PURE__ */ r.createElement("button", { className: "btn btn-primary col", onClick: o }, "Add Row"));
};
const Ys = (e) => /* @__PURE__ */ r.createElement(ce, null, /* @__PURE__ */ r.createElement(ce.Content, null, /* @__PURE__ */ r.createElement("p", null, "Are you sure you want to delete this dashboard? "), /* @__PURE__ */ r.createElement("button", { className: "btn btn-danger", onClick: e }, "DELETE"))), Js = ({ name: e, handleClick: t, tabs: n, index: a, active: o }) => {
  const [i, s] = v.useState(!1), l = v.useContext(ee), { overlay: u } = de(), d = v.createRef(), f = (p) => {
    p.stopPropagation();
    const D = d.current.value, c = D === e, g = !D, y = n.includes(D);
    !c && !g && !y && l({ type: "RENAME_DASHBOARD_TAB", payload: { current: e, new: D } }), s(!1);
  }, m = (p) => {
    p.target.className !== "remove" && (o ? s(!0) : t());
  }, b = () => {
    const p = () => {
      l({ type: "REMOVE_MULTIDASHBOARD_AT_INDEX", payload: a }), u == null || u.actions.toggleOverlay(!1);
    };
    u == null || u.actions.openOverlay(Ys(p));
  }, h = (p, D) => {
    const c = p + D;
    c > -1 && c <= n.length - 1 && l({ type: "REORDER_MULTIDASHBOARDS", payload: { currentIndex: p, newIndex: p + D } });
  }, I = a !== 0, O = a <= n.length - 2;
  return /* @__PURE__ */ r.createElement("li", { className: "nav-item d-flex mt-0" }, I && i && /* @__PURE__ */ r.createElement("button", { className: "border-0", onClick: () => h(a, -1) }, "<"), /* @__PURE__ */ r.createElement(
    "div",
    {
      className: `edit nav-link${o ? " active" : ""}`,
      "aria-current": o ? "page" : null,
      onClick: m
    },
    i ? /* @__PURE__ */ r.createElement("div", { className: "d-flex" }, /* @__PURE__ */ r.createElement("input", { type: "text", defaultValue: e, onBlur: f, ref: d }), /* @__PURE__ */ r.createElement("button", { className: "btn btn-link save", onClick: f }, "save")) : /* @__PURE__ */ r.createElement(r.Fragment, null, e, /* @__PURE__ */ r.createElement("button", { className: "btn btn-danger border-0 ml-1", onClick: b }, "X"))
  ), O && i && /* @__PURE__ */ r.createElement("button", { className: "border-0", onClick: () => h(a, 1) }, ">"));
}, el = () => {
  const { config: e } = v.useContext(X), t = v.useContext(ee), n = v.useMemo(
    () => (e.multiDashboards || []).map(({ label: i }) => i),
    [e.multiDashboards]
  ), a = v.useMemo(() => e.activeDashboard, [e.activeDashboard]), o = (i) => {
    t({ type: "SAVE_CURRENT_CHANGES" }), t({ type: "SWITCH_CONFIG", payload: i });
  };
  return e.multiDashboards ? /* @__PURE__ */ r.createElement("ul", { className: "nav nav-tabs multi-config-tabs" }, n.map((i, s) => /* @__PURE__ */ r.createElement(
    Js,
    {
      key: i + s,
      name: i,
      tabs: n,
      index: s,
      handleClick: () => o(s),
      active: s === a
    }
  )), /* @__PURE__ */ r.createElement("li", { className: "nav-item" }, /* @__PURE__ */ r.createElement("button", { className: "nav-link add", onClick: () => t({ type: "ADD_NEW_DASHBOARD" }) }, "+"))) : null;
}, tl = () => {
  const { config: e } = v.useContext(X), t = v.useContext(ee), n = v.useMemo(
    () => (e.multiDashboards || []).map(({ label: i }) => i),
    [e.multiDashboards]
  ), a = v.useMemo(() => e.activeDashboard, [e.activeDashboard]), o = (i, s) => {
    s.preventDefault(), t({ type: "SWITCH_CONFIG", payload: i }), fr("cove-tab", i);
  };
  return e.multiDashboards ? /* @__PURE__ */ r.createElement("ul", { className: "nav nav-tabs multi-config-tabs" }, n.map((i, s) => /* @__PURE__ */ r.createElement("li", { key: i + s, className: "nav-item" }, /* @__PURE__ */ r.createElement(
    "a",
    {
      className: `nav-link${a === s ? " active" : ""}`,
      "aria-current": a === s ? "page" : null,
      href: "#",
      onClick: (l) => o(s, l)
    },
    i
  )))) : null;
}, xa = ({ isEditor: e = !1 }) => e ? /* @__PURE__ */ r.createElement(el, null) : /* @__PURE__ */ r.createElement(tl, null), oe = (e) => {
  var I, O;
  const t = ["Dashboard Description", "Data Table Settings", "Dashboard Preview"], { visualizationKey: n, subEditor: a } = e, { config: o, setParentConfig: i, tabSelected: s, data: l } = v.useContext(X);
  if (!o)
    return null;
  const u = v.useContext(ee), d = () => {
    if (!n)
      return;
    const p = A.cloneDeep(o);
    if (p.visualizations[n].editing = !1, u({ type: "SET_CONFIG", payload: p }), Object.values(l).some((D) => D.sample)) {
      const D = Object.keys(l).reduce((c, g) => (l[g].sample ? c[g] = [] : c[g] = l[g], c), {});
      u({ type: "SET_DATA", payload: D });
    }
  }, f = (p, D, c) => {
    let g = { ...o };
    g[p] || (g[p] = {}), g[p][D] = c, u({ type: "UPDATE_CONFIG", payload: [g] });
  }, m = (p = "JSON") => {
    let D = JSON.parse(JSON.stringify(o));
    return delete D.newViz, delete D.runtime, p === "JSON" ? JSON.stringify(D) : D;
  };
  v.useEffect(() => {
    const p = m(), D = new CustomEvent("updateVizConfig", { detail: p });
    if (window.dispatchEvent(D), i) {
      const c = m("object");
      i(c);
    }
  }, [o]);
  const b = (p) => {
    const { checked: D } = p.currentTarget;
    D && u({ type: "INITIALIZE_MULTIDASHBOARDS" });
  }, h = !!o.multiDashboards;
  return /* @__PURE__ */ r.createElement("div", { "aria-level": 2, role: "heading", className: `editor-heading${a ? " sub-dashboard-viz" : ""}` }, a ? /* @__PURE__ */ r.createElement("div", { className: "heading-1 back-to", onClick: d, style: { cursor: "pointer" } }, /* @__PURE__ */ r.createElement("span", null, "←"), " Back to Dashboard") : /* @__PURE__ */ r.createElement("div", { className: "heading-1" }, "Dashboard Editor", " ", /* @__PURE__ */ r.createElement("span", { className: "small" }, /* @__PURE__ */ r.createElement("input", { type: "checkbox", onChange: b, checked: h, disabled: h }), " make multidashboard"), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      placeholder: "Enter Dashboard Name Here",
      defaultValue: (I = o.dashboard) == null ? void 0 : I.title,
      onChange: (p) => f("dashboard", "title", p.target.value)
    }
  )), !a && /* @__PURE__ */ r.createElement("div", { className: "toggle-bar__wrapper" }, /* @__PURE__ */ r.createElement(xa, { isEditor: !0 }), /* @__PURE__ */ r.createElement("ul", { className: "toggle-bar" }, t.map((p) => /* @__PURE__ */ r.createElement(
    "li",
    {
      key: p,
      className: s === p ? "active" : "inactive",
      onClick: () => {
        u({ type: "SET_TAB_SELECTED", payload: p });
      }
    },
    p
  ))), /* @__PURE__ */ r.createElement("div", { className: "heading-body" }, s === "Dashboard Description" && /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "text",
      className: "description-input",
      placeholder: "Type a dashboard description here.",
      defaultValue: (O = o.dashboard) == null ? void 0 : O.description,
      onChange: (p) => f("dashboard", "description", p.target.value)
    }
  ), s === "Data Table Settings" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("div", { className: "wrap" }, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      defaultChecked: o.table.show,
      onChange: (p) => f("table", "show", p.target.checked)
    }
  ), "Show Data Table(s)"), /* @__PURE__ */ r.createElement("br", null), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      defaultChecked: o.table.expanded,
      onChange: (p) => f("table", "expanded", p.target.checked)
    }
  ), "Expanded by Default"), /* @__PURE__ */ r.createElement("br", null)), /* @__PURE__ */ r.createElement("div", { className: "wrap" }, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      defaultChecked: o.table.limitHeight,
      onChange: (p) => f("table", "limitHeight", p.target.checked)
    }
  ), "Limit Table Height"), o.table.limitHeight && /* @__PURE__ */ r.createElement(
    "input",
    {
      className: "table-height-input",
      type: "text",
      placeholder: "Height (px)",
      defaultValue: o.table.height,
      onChange: (p) => f("table", "height", p.target.value)
    }
  )), /* @__PURE__ */ r.createElement("div", { className: "wrap" }, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      defaultChecked: o.table.download,
      onChange: (p) => f("table", "download", p.target.checked)
    }
  ), "Show Download CSV Link"), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      defaultChecked: o.table.showDownloadUrl,
      onChange: (p) => f("table", "showDownloadUrl", p.target.checked)
    }
  ), "Show URL to Automatically Updated Data"))))));
};
const Wn = new Se(), he = (e, t) => {
  if (e && t)
    try {
      let n = Wn.autoStandardize(e);
      return n = Wn.developerStandardize(e, t), n;
    } catch {
      return e;
    }
  return e;
}, nl = (e) => {
  Object.keys(e.visualizations).forEach((t, n) => {
    const a = e.visualizations[t];
    if (a.dataKey && !a.data) {
      const o = e.datasets[a.dataKey].data;
      e.visualizations[t].data = o, e.visualizations[t].formattedData = he(o, a.dataDescription);
    }
  });
}, al = (e) => {
  e.rows.forEach((t, n) => {
    if (t.dataKey && !t.data) {
      const a = e.datasets[t.dataKey].data;
      e.rows[n].data = a, e.rows[n].formattedData = he(a, t.dataDescription);
    }
  });
}, rl = (e) => (nl(e), al(e), e);
const J = (e, t) => {
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
}, ol = () => {
  const [e, t] = v.useState(!1), { config: n } = v.useContext(X), a = v.useContext(ee), o = (i) => {
    const s = i.multiDashboards ? {
      ...n,
      ...i,
      ...i.multiDashboards[n.activeDashboard],
      activeDashboard: n.activeDashboard
    } : i;
    a({ type: "APPLY_CONFIG", payload: [rl(s)] });
  };
  return /* @__PURE__ */ r.createElement("div", { className: `visualizations-panel${e ? " advanced-editor" : ""}` }, /* @__PURE__ */ r.createElement("p", { style: { fontSize: "14px" } }, "Click and drag an item onto the grid to add it to your dashboard."), /* @__PURE__ */ r.createElement("span", { className: "subheading-3" }, "Chart"), /* @__PURE__ */ r.createElement("div", { className: "drag-grid" }, /* @__PURE__ */ r.createElement(Z, { addVisualization: () => J("chart", "Bar"), type: "Bar" }), /* @__PURE__ */ r.createElement(Z, { addVisualization: () => J("chart", "Line"), type: "Line" }), /* @__PURE__ */ r.createElement(Z, { addVisualization: () => J("chart", "Pie"), type: "Pie" }), /* @__PURE__ */ r.createElement(Z, { addVisualization: () => J("chart", "Sankey"), type: "Sankey" })), /* @__PURE__ */ r.createElement("span", { className: "subheading-3" }, "Map"), /* @__PURE__ */ r.createElement("div", { className: "drag-grid" }, /* @__PURE__ */ r.createElement(Z, { addVisualization: () => J("map", "us"), type: "us" }), /* @__PURE__ */ r.createElement(Z, { addVisualization: () => J("map", "world"), type: "world" }), /* @__PURE__ */ r.createElement(Z, { addVisualization: () => J("map", "single-state"), type: "single-state" })), /* @__PURE__ */ r.createElement("span", { className: "subheading-3" }, "Misc."), /* @__PURE__ */ r.createElement("div", { className: "drag-grid" }, /* @__PURE__ */ r.createElement(Z, { addVisualization: () => J("data-bite", ""), type: "data-bite" }), /* @__PURE__ */ r.createElement(Z, { addVisualization: () => J("waffle-chart", ""), type: "waffle-chart" }), /* @__PURE__ */ r.createElement(Z, { addVisualization: () => J("markup-include", ""), type: "markup-include" }), /* @__PURE__ */ r.createElement(Z, { addVisualization: () => J("filtered-text", ""), type: "filtered-text" }), /* @__PURE__ */ r.createElement(Z, { addVisualization: () => J("dashboardFilters", ""), type: "dashboardFilters" }), /* @__PURE__ */ r.createElement(Z, { addVisualization: () => J("table", ""), type: "table" })), /* @__PURE__ */ r.createElement(
    Za,
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
}, Ma = (e, t) => {
  var n;
  if ((n = t.parents) != null && n.length) {
    const a = e.find((o) => t.parents.includes(o.key));
    return a ? 1 + Ma(e, a) : 1;
  } else
    return 1;
};
function il(e) {
  let t = 1;
  return e.forEach((n) => {
    n.tier = Ma(e, n), n.tier > t && (t = n.tier);
  }), t;
}
function Qn(e = [], t, n) {
  const a = t.filter((o) => o.resetLabel !== o.active);
  return e.filter((o) => !a.find((s) => {
    var m;
    const l = o[s.columnName], u = s.queuedActive || s.filterStyle === ae.nestedDropdown ? [s.active, (m = s.subGrouping) == null ? void 0 : m.active] : s.active;
    let d = !0;
    if (Array.isArray(u) ? d = !u.includes(l) : d = u && l != u, s.filterStyle === "nested-dropdown" && s.subGrouping && s.active === l && d === !1) {
      const b = s.subGrouping.active, h = o[s.subGrouping.columnName];
      d = b && h !== b;
    }
    const f = s.tier === n;
    if (s.type !== "urlfilter" && f && d)
      return !0;
  }));
}
const Ie = (e, t) => {
  const n = il(e);
  for (let a = 0; a < n; a++) {
    const o = a === n - 1, i = Qn(t, e, a + 1);
    if (o)
      return Qn(i, e, n - 1);
  }
}, sl = (e, t) => {
  const n = [];
  return Object.keys(t).forEach((a) => {
    var o;
    (o = t[a]) == null || o.forEach((i) => {
      const s = i[e];
      s && !n.includes(s) && n.push(s);
    });
  }), n;
}, Ee = (e) => Object.keys((e == null ? void 0 : e.visualizations) || {}), Pt = (e) => e.reduce((t, n, a) => {
  var o;
  return (o = n.columns) == null || o.forEach((i, s) => {
    i.widget !== void 0 && (t[i.widget] = { row: a, column: s });
  }), n.footnotesId && (t[n.footnotesId] = { row: a, column: 0 }), t;
}, {}), Et = (e) => (t, n) => {
  let a = {}, o = Ee(t);
  const i = Pt(t.rows);
  return t.dashboard.sharedFilters && (t.dashboard.sharedFilters.forEach((s, l) => {
    const u = !!o.find((b) => b === s.setBy), d = t.dashboard.sharedFilters[l], f = (b) => {
      if (d.values = b, b.length > 0) {
        const h = d.pivot ? d.values : d.values[0], I = ca(d);
        I ? d.active = I : d.active = d.active || h;
      }
    }, m = sl(s.columnName, n || e.data);
    u ? (d.order === "asc" && m.sort(), d.order === "desc" && m.sort().reverse(), f(m)) : (!s.values || s.values.length === 0) && s.showDropdown && f(m);
  }), o.forEach((s) => {
    var d;
    const l = i[s];
    if ((d = t.rows[l]) != null && d.datakey)
      return;
    const u = t.dashboard.sharedFilters.filter((f) => f.usedBy && f.usedBy.indexOf(s) !== -1);
    if (u.length > 0) {
      const f = t.visualizations[s], m = t.datasets[f.dataKey], h = he((m == null ? void 0 : m.data) || f.data, f.dataDescription) || (n || e.data)[f.dataKey];
      a[s] = Ie(u, h);
    }
  }), t.rows.forEach((s, l) => {
    const u = t.dashboard.sharedFilters.filter((d) => d.usedBy && d.usedBy.indexOf(l) !== -1);
    if (u.length > 0) {
      const f = he(s.data, s.dataDescription) || (n || e.data)[l];
      a[l] = Ie(u, f);
    }
  })), t.runtime = {}, [t, a];
}, Ba = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION__, ll = Ba ? window.__REDUX_DEVTOOLS_EXTENSION__.connect() : null, ft = Ba ? ll : null, $a = (e) => (t, n) => {
  const a = e(t, n);
  return ft == null || ft.send(n, a), a;
}, ul = () => ({
  dashboard: {},
  rows: [{ columns: [{ width: 12 }] }],
  visualizations: {},
  table: {
    label: "Data Table",
    show: !1,
    showDownloadUrl: !1,
    showVertical: !0
  }
}), cl = (e, t) => {
  switch (t.type) {
    case "ADD_FOOTNOTE": {
      const { id: n, rowIndex: a, config: o } = t.payload, i = e.config.rows.map((s, l) => l === a ? { ...s, footnotesId: n } : s);
      return {
        ...e,
        config: { ...e.config, rows: i, visualizations: { ...e.config.visualizations, [n]: o } }
      };
    }
    case "ADD_NEW_DASHBOARD": {
      const n = e.config.multiDashboards, a = "New Dashboard " + (n.length + 1), o = [...n, { ...ul(), label: a }];
      return ye(e, o);
    }
    case "UPDATE_CONFIG": {
      const [n, a] = Et(e)(...t.payload);
      return { ...e, config: n, filteredData: a };
    }
    case "APPLY_CONFIG": {
      const [n, a] = Et(e)(...t.payload), o = [...Object.values(n.visualizations), ...n.rows].map((i) => i.dataKey).reduce((i, s) => {
        var u;
        const l = e.data[s] || ((u = e.config.datasets[s]) == null ? void 0 : u.data);
        return l && (i[s] = l), i;
      }, {});
      return { ...We, config: n, filteredData: a, data: o };
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
        const s = ye(e, i);
        return { ...s, config: { ...s.config, dashboard: a } };
      }
      return { ...e, config: { ...e.config, dashboard: a } };
    }
    case "SET_TAB_SELECTED":
      return { ...e, tabSelected: t.payload };
    case "REMOVE_MULTIDASHBOARD_AT_INDEX": {
      const n = [...e.config.multiDashboards];
      A.remove(n, (o, i) => i === t.payload);
      const a = {
        ...e.config,
        multiDashboards: n,
        ...n[0],
        activeDashboard: 0
      };
      return n.length === 0 ? { ...e, config: A.omit(e.config, "multiDashboards") } : ye({ ...e, config: a }, n);
    }
    case "RENAME_DASHBOARD_TAB": {
      const n = e.config.multiDashboards.map((o) => (o.label === t.payload.current && (o.label = t.payload.new), o)), a = { ...e.config, label: t.payload.new };
      return ye({ ...e, newConfig: a }, n);
    }
    case "REORDER_MULTIDASHBOARDS": {
      const { newIndex: n, currentIndex: a } = t.payload, o = [...e.config.multiDashboards];
      o.splice(n, 0, o.splice(a, 1)[0]);
      const i = { ...e.config, activeDashboard: n };
      return ye({ ...e, config: i }, o);
    }
    case "SAVE_CURRENT_CHANGES": {
      const n = e.config.activeDashboard, a = [...e.config.multiDashboards], o = a[n].label, i = A.pick(e.config, ["dashboard", "visualizations", "rows"]);
      return a[n] = { ...i, label: o }, ye(e, a);
    }
    case "INITIALIZE_MULTIDASHBOARDS": {
      const n = "New Dashboard 1", o = [{ ...A.pick(e.config, ["dashboard", "visualizations", "rows"]), label: n }], i = { ...e.config, activeDashboard: 0 };
      return ye({ ...e, config: i }, o);
    }
    case "SWITCH_CONFIG": {
      const n = t.payload, a = e.config.multiDashboards[n], o = A.cloneDeep(e.data);
      return { ...e, data: o, config: { ...e.config, ...a, activeDashboard: n } };
    }
    case "TOGGLE_ROW": {
      const { rowIndex: n, colIndex: a } = t.payload, o = e.config.rows.map((i, s) => {
        if (s === n) {
          const l = i.columns.map((u, d) => ({ ...u, hide: d === a }));
          return { ...i, columns: l };
        }
        return i;
      });
      return { ...e, config: { ...e.config, rows: o } };
    }
    case "ADD_VISUALIZATION": {
      const { newViz: n, rowIdx: a, colIdx: o } = t.payload, i = n.uid, s = A.cloneDeep(e.config.rows);
      return s[a].columns[o].widget = i, {
        ...e,
        config: { ...e.config, visualizations: { ...e.config.visualizations, [i]: n }, rows: s }
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
      const { rowIndex: n, rowData: a } = t.payload, o = e.config.rows.map((i, s) => s === n ? { ...i, ...a } : i);
      return { ...e, config: { ...e.config, rows: o } };
    }
    case "DELETE_WIDGET": {
      const { rowIdx: n, colIdx: a, uid: o } = t.payload, i = A.cloneDeep(e.config.rows);
      i[n].columns[a].widget = null;
      const s = A.cloneDeep(e.config.visualizations);
      delete s[o];
      const l = A.cloneDeep(e.config.dashboard.sharedFilters);
      return l && l.length > 0 && l.forEach((u) => {
        u.usedBy && u.usedBy.indexOf(o) !== -1 && u.usedBy.splice(u.usedBy.indexOf(o), 1);
      }), {
        ...e,
        config: {
          ...e.config,
          dashboard: { ...e.config.dashboard, sharedFilters: l },
          visualizations: s,
          rows: i
        }
      };
    }
    default:
      return e;
  }
}, ye = (e, t) => ({
  ...e,
  config: { ...e.config, multiDashboards: t }
}), dl = $a(cl), fl = (e, t) => {
  switch (t.type) {
    case "ADD_ERROR_MESSAGE": {
      const n = t.payload;
      return [...e, n];
    }
    case "DISMISS_ERROR_MESSAGE": {
      const n = [...e];
      return A.remove(n, (a, o) => o === t.payload), n;
    }
  }
}, ml = $a(fl), pl = v.createContext({ displayName: "ConfigContext", setTempConfig: () => {
} }), Tu = v.createContext(() => {
});
const Va = ({ children: e, visualizationKey: t, visualizationConfig: n, type: a, component: o, updateConfig: i, viewport: s }) => {
  const [l, u] = r.useState(!0);
  return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("div", { className: "editor-wrapper" }, /* @__PURE__ */ r.createElement("button", { className: `editor-toggle ${l ? "" : "collapsed"}`, title: l ? "Collapse Editor" : "Expand Editor", onClick: () => u(!l) }), /* @__PURE__ */ r.createElement("section", { className: `${l ? "" : "hidden"} editor-panel cove` }, /* @__PURE__ */ r.createElement("div", { "aria-level": 2, role: "heading", className: "heading-2" }, "Configure ", a), /* @__PURE__ */ r.createElement("section", null, e)), /* @__PURE__ */ r.createElement("div", { className: "preview-wrapper" }, /* @__PURE__ */ r.createElement(o, { visualizationKey: t, config: n, updateConfig: i, configUrl: void 0, setEditing: void 0, hostname: void 0, viewport: s }))));
}, gl = ({ config: e, updateConfig: t }) => {
  var i;
  const n = v.useMemo(() => Ot(e, t), [JSON.stringify(e)]), a = (s) => {
    const l = A.cloneDeep(e.columns);
    delete l[s], t({
      ...e,
      columns: l
    });
  }, o = Object.keys(((i = e.originalFormattedData) == null ? void 0 : i[0]) || {});
  return /* @__PURE__ */ r.createElement(or, { allowZeroExpanded: !0 }, /* @__PURE__ */ r.createElement(tt, null, /* @__PURE__ */ r.createElement(nt, null, /* @__PURE__ */ r.createElement(at, null, "Filters")), /* @__PURE__ */ r.createElement(rt, null, /* @__PURE__ */ r.createElement(Ja, { config: e, updateField: n, rawData: e.originalFormattedData }))), /* @__PURE__ */ r.createElement(tt, null, /* @__PURE__ */ r.createElement(nt, null, /* @__PURE__ */ r.createElement(at, null, "Columns")), /* @__PURE__ */ r.createElement(rt, null, /* @__PURE__ */ r.createElement(er, { config: e, updateField: n, deleteColumn: a }))), /* @__PURE__ */ r.createElement(tt, null, /* @__PURE__ */ r.createElement(nt, null, /* @__PURE__ */ r.createElement(at, null, "Data Table")), /* @__PURE__ */ r.createElement(rt, null, /* @__PURE__ */ r.createElement(tr, { config: e, columns: o, updateField: n, isDashboard: !0 }))));
}, Rt = ({
  visualizationKey: e,
  config: t,
  updateConfig: n,
  viewport: a,
  isEditor: o
}) => {
  const [i, s] = v.useState(
    Jt(t.filters, t.formattedData || t.data)
  );
  return v.useEffect(() => {
    var l;
    s(
      Jt(t.filters, ((l = t == null ? void 0 : t.formattedData) == null ? void 0 : l.length) > 0 ? t.formattedData : t.data)
    );
  }, [t.filters]), o ? /* @__PURE__ */ r.createElement(
    Va,
    {
      component: Rt,
      visualizationKey: e,
      visualizationConfig: t,
      updateConfig: n,
      type: "Table",
      viewport: a
    },
    /* @__PURE__ */ r.createElement(gl, { key: e, config: t, updateConfig: n })
  ) : /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
    mr,
    {
      config: t,
      setConfig: n,
      setFilteredData: s,
      filteredData: i,
      excludedData: t.formattedData
    }
  ), /* @__PURE__ */ r.createElement(
    mt,
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
const hl = ({ active: e, row: t, visualizations: n, setToggled: a }) => {
  const o = (i, s = null) => {
    s != null && s.key && s.key !== "Enter" || a(i);
  };
  return /* @__PURE__ */ r.createElement("div", { className: "toggle-component" }, t.columns.map((i, s) => {
    if (!i.widget)
      return null;
    const l = n[i.widget].type, u = s === e;
    return /* @__PURE__ */ r.createElement("div", { role: "radio", className: u ? "selected" : "", key: s, onClick: () => o(s), onKeyUp: (d) => o(s, d), "aria-checked": u, tabIndex: 0, "aria-label": `Toggle ${l}` }, Vs(n[i.widget]), " ", /* @__PURE__ */ r.createElement("span", null, A.capitalize(l)));
  }));
}, Ua = {
  Apply: "Apply Button",
  OnChange: "Filter Change"
}, Zn = (e, t) => {
  const n = e[t].key, a = e.map((o, i) => {
    var s;
    return (s = o.parents) != null && s.includes(n) ? i : null;
  }).filter((o) => o !== null);
  return a.length && a.forEach((o) => {
    e[o].active = "", e[o].subGrouping && (e[o].subGrouping.active = "");
  }), a;
}, vl = (e, t, n, a) => {
  const o = A.cloneDeep(n), i = o[e];
  if (a.filterBehavior !== Ua.Apply || a.autoLoad)
    if ((i == null ? void 0 : i.filterStyle) === ae.nestedDropdown)
      o[e].active = t[0], o[e].subGrouping.active = t[1];
    else {
      o[e].active = t, Zn(o, e);
      const s = It();
      i.setByQueryParameter && s[i.setByQueryParameter] !== i.active && (s[i.setByQueryParameter] = i.active, da(s));
    }
  else
    o[e].queuedActive = t;
  return [o, Zn(o, e)];
}, Dt = (e, t) => {
  var a;
  const n = (a = e.sharedFilters) == null ? void 0 : a.filter((o) => o.usedBy && o.usedBy.indexOf(`${t}`) !== -1);
  return (n == null ? void 0 : n.length) > 0 ? n : !1;
}, Ce = (e, t, n) => {
  const a = t || {}, { config: o } = e;
  return Ee(o).forEach((i) => {
    const s = Dt(o.dashboard, i);
    if (s) {
      const { dataKey: l, data: u, dataDescription: d } = o.visualizations[i], f = (n || e.data)[l] || u, m = (n == null ? void 0 : n[l]) || (d ? he(f, d) : f);
      a[i] = Ie(s, m);
    }
  }), o.rows.forEach((i, s) => {
    if (i.dataKey) {
      const l = Dt(o.dashboard, s), { dataKey: u, data: d, dataDescription: f } = i, m = (n || e.data)[u] || d;
      if (l) {
        const b = (n == null ? void 0 : n[u]) ?? f ? he(m, f) : m;
        a[s] = Ie(l, b);
      } else
        a[s] = m || [];
    }
  }), a;
}, _e = (e) => Object.values(e).some((t) => t.filterBehavior === "Apply Button" && t.type === "dashboardFilters"), yl = ({
  filter: e,
  config: t,
  isDashboard: n = !1,
  updateFilterProp: a
}) => {
  const o = e == null ? void 0 : e.subGrouping, i = Object.keys(t.datasets), s = [];
  i.map((m) => {
    Object.keys(t.datasets[m].data[0]).forEach(
      (h) => s.push({
        datasetKey: m,
        columnName: h
      })
    );
  });
  const l = [], u = (m, b) => {
    s.forEach((h) => {
      h.datasetKey === m && h.columnName !== b && l.push(h.columnName);
    });
  }, d = (m) => {
    const b = m.selectedOptions[0].dataset.set, h = m.value;
    a("columnName", h), u(b, h);
  }, f = (m) => {
    const b = m.selectedOptions[0].dataset.set, h = m.value, I = e.values.reduce((p, D) => {
      const c = A.uniq(
        t.datasets[b].data.map((g) => g[e.columnName] === D ? g[h] : "").filter((g) => g !== "")
      ).sort();
      return p[D] = {
        values: c,
        orderedValues: c
      }, p;
    }, {}), O = {
      ...o,
      columnName: h,
      valuesLookup: I
    };
    a("subGrouping", O);
  };
  return /* @__PURE__ */ r.createElement("div", { className: "nesteddropdown-editor" }, !n && /* @__PURE__ */ r.createElement(
    K,
    {
      label: "Label",
      value: e.key,
      updateField: (m, b, h, I) => a("key", I)
    }
  ), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("div", { className: "edit-label column-heading mt-2" }, "Filter Grouping", /* @__PURE__ */ r.createElement("span", null)), /* @__PURE__ */ r.createElement("select", { value: e.columnName, onChange: (m) => d(m.target) }, /* @__PURE__ */ r.createElement("option", { value: "" }, "- Select Option -"), s == null ? void 0 : s.map((m) => /* @__PURE__ */ r.createElement(
    "option",
    {
      value: m.columnName,
      "data-set": m.datasetKey,
      key: `filter_${m.datasetKey}_${m.columnName} `
    },
    m.columnName
  )))), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("div", { className: "edit-label column-heading mt-2" }, "Filter SubGrouping", /* @__PURE__ */ r.createElement("span", null)), /* @__PURE__ */ r.createElement(
    "select",
    {
      value: (o == null ? void 0 : o.columnName) ?? "",
      onChange: (m) => {
        f(m.target);
      }
    },
    /* @__PURE__ */ r.createElement("option", { value: "" }, "- Select Option -"),
    s.map((m) => {
      if (m.columnName !== e.columnName)
        return /* @__PURE__ */ r.createElement(
          "option",
          {
            value: m.columnName,
            "data-set": m.datasetKey,
            key: `subFilter_${m.datasetKey}_${m.columnName} `
          },
          m.columnName
        );
    })
  )));
}, bl = ({ filter: e, config: t, updateFilterProp: n }) => {
  const [a, o] = v.useState([]), i = new Se(), s = Object.values(ae), l = (t.dashboard.sharedFilters || []).filter(({ key: c, type: g }) => c !== e.key && g !== "datafilter").map(({ key: c }) => c), u = Pt(t.rows), [d, f] = v.useMemo(() => {
    const c = {}, g = Object.keys(t.visualizations).filter((E) => {
      var te;
      const T = u[E];
      if (!T)
        return !1;
      const S = t.visualizations[E];
      if (S.type === "dashboardFilters")
        return !1;
      const C = ((te = S.general) == null ? void 0 : te.title) || S.title || E;
      c[E] = C;
      const F = !e.usedBy || e.usedBy.indexOf(E) === -1, V = S.usesSharedFilter, fe = T.row, H = t.rows[fe].dataKey;
      return e.setBy !== E && F && !V && !H;
    }), y = [];
    t.rows.forEach((E, T) => {
      E.dataKey && (c[T] = `Row ${T + 1}`, y.push(T));
    });
    const w = y.filter((E) => !e.usedBy || e.usedBy.indexOf(E.toString()) === -1);
    return [c, [...g, ...w]];
  }, [t.visualizations, e.usedBy, e.setBy, u]), m = async () => {
    const c = {}, g = Object.keys(t.datasets);
    for (let y = 0; y < g.length; y++) {
      const w = g[y];
      let E = t.datasets[w];
      if (!E.data && E.dataUrl && (E = await ke(E.dataUrl), E.dataDescription))
        try {
          E = i.autoStandardize(E.data), E = i.developerStandardize(E.data, E.dataDescription);
        } catch {
        }
      E.data && E.data.forEach((T) => {
        Object.keys(T).forEach((S) => {
          c[S] = !0;
        });
      });
    }
    o(Object.keys(c));
  };
  v.useEffect(() => {
    m();
  }, [t.datasets]);
  const b = (c, g) => {
    g !== "" && (c.usedBy || (c.usedBy = []), c.usedBy.push(g), n("usedBy", c.usedBy));
  }, h = (c, g) => {
    let y = c.usedBy.indexOf(g);
    y !== -1 && (c.usedBy.splice(y, 1), n("usedBy", c.usedBy));
  }, I = (c, g) => {
    const E = { ...A.cloneDeep(e).apiFilter || { apiEndpoint: "", valueSelector: "", textSelector: "" }, [c]: g };
    n("apiFilter", E);
  }, O = (c) => {
    n("filterStyle", c);
  }, p = e.filterStyle === ae.nestedDropdown, D = ({ isSubgroup: c = !1 }) => {
    var w, E, T;
    const g = c ? "subgroupTextSelector" : "textSelector", y = c ? "subgroupValueSelector" : "valueSelector";
    return /* @__PURE__ */ r.createElement(r.Fragment, null, !c && /* @__PURE__ */ r.createElement(
      K,
      {
        label: "API Endpoint: ",
        value: (w = e.apiFilter) == null ? void 0 : w.apiEndpoint,
        updateField: (S, C, F, V) => I("apiEndpoint", V),
        tooltip: /* @__PURE__ */ r.createElement(r.Fragment, null, p && /* @__PURE__ */ r.createElement(x, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(x.Target, null, /* @__PURE__ */ r.createElement(P, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(x.Content, null, /* @__PURE__ */ r.createElement("p", null, "Your API Endpoint should return both value selector values."))))
      }
    ), /* @__PURE__ */ r.createElement("div", { className: p ? "border border-dark p-1 my-1" : "" }, /* @__PURE__ */ r.createElement(
      K,
      {
        label: `${c ? "Subgroup " : ""}Value Selector:`,
        value: ((E = e == null ? void 0 : e.apiFilter) == null ? void 0 : E[y]) || "",
        updateField: (S, C, F, V) => I(y, V),
        tooltip: /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(x, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(x.Target, null, /* @__PURE__ */ r.createElement(P, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(x.Content, null, /* @__PURE__ */ r.createElement("p", null, "Value to use in the html option element"))), " * Required")
      }
    ), /* @__PURE__ */ r.createElement(
      K,
      {
        label: `${c ? "Subgroup " : ""}Display Text Selector:`,
        value: ((T = e == null ? void 0 : e.apiFilter) == null ? void 0 : T[g]) || "",
        updateField: (S, C, F, V) => I(g, V),
        tooltip: /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(x, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(x.Target, null, /* @__PURE__ */ r.createElement(P, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(x.Content, null, /* @__PURE__ */ r.createElement("p", null, "Text to use in the html option element. If none is applied value selector will be used."))), " * Optional")
      }
    )));
  };
  return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Filter Type: "), /* @__PURE__ */ r.createElement(
    "select",
    {
      defaultValue: e.type || "",
      onChange: (c) => n("type", c.target.value),
      disabled: !!e.type
    },
    /* @__PURE__ */ r.createElement("option", { value: "" }, "- Select Option -"),
    /* @__PURE__ */ r.createElement("option", { value: "urlfilter" }, "URL"),
    /* @__PURE__ */ r.createElement("option", { value: "datafilter" }, "Data")
  )), e.type !== void 0 && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Filter Style: "), /* @__PURE__ */ r.createElement(
    "select",
    {
      value: e.filterStyle || ae.dropdown,
      onChange: (c) => O(c.target.value)
    },
    s.map((c) => /* @__PURE__ */ r.createElement("option", { value: c, key: `filter-style-select-item-${c}` }, c))
  )), e.filterStyle === ae.dropdown && /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "mr-1" }, "Show Dropdown"), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      checked: e.showDropdown,
      onChange: (c) => {
        n("showDropdown", !e.showDropdown);
      }
    }
  )), /* @__PURE__ */ r.createElement(
    K,
    {
      label: "Label",
      value: e.key,
      updateField: (c, g, y, w) => n("key", w)
    }
  ), e.filterStyle === ae.multiSelect && /* @__PURE__ */ r.createElement(
    K,
    {
      label: "Select Limit",
      value: e.selectLimit,
      updateField: (c, g, y, w) => n("selectLimit", w),
      type: "number",
      tooltip: /* @__PURE__ */ r.createElement(x, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(x.Target, null, /* @__PURE__ */ r.createElement(P, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(x.Content, null, /* @__PURE__ */ r.createElement("p", null, "The maximum number of items that can be selected.")))
    }
  ), e.type === "urlfilter" && /* @__PURE__ */ r.createElement(r.Fragment, null, !_e(t.visualizations) && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "URL to Filter: "), /* @__PURE__ */ r.createElement(
    "select",
    {
      defaultValue: e.datasetKey || "",
      onChange: (c) => n("datasetKey", c.target.value)
    },
    /* @__PURE__ */ r.createElement("option", { value: "" }, "- Select Option -"),
    Object.keys(t.datasets).map((c) => t.datasets[c].dataUrl ? /* @__PURE__ */ r.createElement("option", { key: c, value: c }, t.datasets[c].dataUrl) : null)
  )), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Filter By: "), /* @__PURE__ */ r.createElement(
    "select",
    {
      defaultValue: e.filterBy || "",
      onChange: (c) => n("filterBy", c.target.value)
    },
    /* @__PURE__ */ r.createElement("option", { value: "" }, "- Select Option -"),
    /* @__PURE__ */ r.createElement("option", { key: "query-string", value: "Query String" }, "Query String"),
    /* @__PURE__ */ r.createElement("option", { key: "file-name", value: "File Name" }, "File Name")
  )), e.filterBy === "File Name" && /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
    K,
    {
      label: "File Name: ",
      value: e.fileName || "",
      updateField: (c, g, y, w) => n("fileName", w),
      tooltip: /* @__PURE__ */ r.createElement(x, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(x.Target, null, /* @__PURE__ */ r.createElement(P, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(x.Content, null, /* @__PURE__ */ r.createElement("p", null, "Add ${query} to replace the filename with the active dropdown value.")))
    }
  ), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "White Space Replacments", /* @__PURE__ */ r.createElement(x, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(x.Target, null, /* @__PURE__ */ r.createElement(P, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(x.Content, null, /* @__PURE__ */ r.createElement("p", null, "Set how whitespace characters will be handled in the file request")))), /* @__PURE__ */ r.createElement(
    "select",
    {
      defaultValue: e.whitespaceReplacement || "Keep Spaces",
      onChange: (c) => n("whitespaceReplacement", c.target.value)
    },
    /* @__PURE__ */ r.createElement("option", { key: "remove-spaces", value: "Remove Spaces" }, "Remove Spaces"),
    /* @__PURE__ */ r.createElement("option", { key: "replace-with-underscore", value: "Replace With Underscore" }, "Replace With Underscore"),
    /* @__PURE__ */ r.createElement("option", { key: "keep-spaces", value: "Keep Spaces" }, "Keep Spaces")
  )))), e.filterBy === "Query String" && /* @__PURE__ */ r.createElement(
    K,
    {
      label: "Query string parameter",
      value: e.queryParameter,
      updateField: (c, g, y, w) => n("queryParameter", w)
    }
  ), /* @__PURE__ */ r.createElement(D, null), p && /* @__PURE__ */ r.createElement(D, { isSubgroup: !0 }), !!l.length && /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading mt-1" }, "Parent Filter(s): "), /* @__PURE__ */ r.createElement(
    tn,
    {
      label: "Parent Filter(s): ",
      options: l.map((c) => ({ value: c, label: c })),
      fieldName: "parents",
      selected: e.parents,
      updateField: (c, g, y, w) => {
        n("parents", w);
      }
    }
  )), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading mt-1" }, "Used By: (optional)", /* @__PURE__ */ r.createElement(x, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(x.Target, null, /* @__PURE__ */ r.createElement(P, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(x.Content, null, /* @__PURE__ */ r.createElement("p", null, "Select if you would like specific visualizations or rows to use this filter. Otherwise the filter will be added to all api requests.")))), /* @__PURE__ */ r.createElement(
    tn,
    {
      options: f.map((c) => ({
        value: c,
        label: d[c]
      })),
      fieldName: "usedBy",
      selected: e.usedBy,
      updateField: (c, g, y, w) => {
        n("usedBy", w);
      }
    }
  )), /* @__PURE__ */ r.createElement(
    K,
    {
      label: "Reset Label: ",
      value: e.resetLabel || "",
      updateField: (c, g, y, w) => n("resetLabel", w)
    }
  ), /* @__PURE__ */ r.createElement(
    K,
    {
      label: "Default Value Set By Query String Parameter: ",
      value: e.setByQueryParameter || "",
      updateField: (c, g, y, w) => n("setByQueryParameter", w)
    }
  )), e.type === "datafilter" && /* @__PURE__ */ r.createElement(r.Fragment, null, e.filterStyle !== ae.nestedDropdown ? /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Filter: "), /* @__PURE__ */ r.createElement(
    "select",
    {
      value: e.columnName,
      onChange: (c) => {
        n("columnName", c.target.value);
      }
    },
    /* @__PURE__ */ r.createElement("option", { value: "" }, "- Select Option -"),
    a.map((c) => /* @__PURE__ */ r.createElement("option", { value: c, key: `filter-column-select-item-${c}` }, c))
  )), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Show Dropdown"), /* @__PURE__ */ r.createElement(
    "input",
    {
      type: "checkbox",
      defaultChecked: e.showDropdown === !0,
      onChange: (c) => {
        n("showDropdown", !e.showDropdown);
      }
    }
  ))) : /* @__PURE__ */ r.createElement(
    yl,
    {
      filter: e,
      updateFilterProp: (c, g) => {
        n(c, g);
      },
      isDashboard: !0,
      config: t
    }
  ), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Set By: "), /* @__PURE__ */ r.createElement("select", { value: e.setBy, onChange: (c) => n("setBy", c.target.value) }, /* @__PURE__ */ r.createElement("option", { value: "" }, "- Select Option -"), Object.keys(t.visualizations).filter((c) => t.visualizations[c].type !== "dashboardFilters").map((c) => {
    var y;
    const g = t.visualizations[c];
    return /* @__PURE__ */ r.createElement("option", { value: c, key: `set-by-select-item-${c}` }, ((y = g.general) == null ? void 0 : y.title) || g.title || c);
  }))), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Used By: "), /* @__PURE__ */ r.createElement("ul", null, e.usedBy && e.usedBy.map((c) => /* @__PURE__ */ r.createElement("li", { key: `used-by-list-item-${c}` }, /* @__PURE__ */ r.createElement("span", null, d[c] || c), " ", /* @__PURE__ */ r.createElement(
    "button",
    {
      onClick: (g) => {
        g.preventDefault(), h(e, c);
      }
    },
    "X"
  )))), /* @__PURE__ */ r.createElement("select", { value: "", onChange: (c) => b(e, c.target.value) }, /* @__PURE__ */ r.createElement("option", { value: "" }, "- Select Option -"), f.map((c) => /* @__PURE__ */ r.createElement("option", { value: c, key: `used-by-select-item-${c}` }, d[c] || c)))), /* @__PURE__ */ r.createElement(
    K,
    {
      label: "Reset Label: ",
      value: e.resetLabel || "",
      updateField: (c, g, y, w) => n("resetLabel", w)
    }
  ), /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Parent Filter: "), /* @__PURE__ */ r.createElement(
    "select",
    {
      value: e.parents || [],
      onChange: (c) => {
        n("parents", c.target.value);
      }
    },
    /* @__PURE__ */ r.createElement("option", { value: "" }, "Select a filter"),
    t.dashboard.sharedFilters && t.dashboard.sharedFilters.map((c) => {
      if (c.key !== e.key)
        return /* @__PURE__ */ r.createElement("option", { key: c.key }, c.key);
    })
  )), /* @__PURE__ */ r.createElement(
    K,
    {
      label: "Default Value Set By Query String Parameter: ",
      value: e.setByQueryParameter || "",
      updateField: (c, g, y, w) => n("setByQueryParameter", w)
    }
  ))));
}, El = ({ removeFilterCompletely: e, removeFilterFromViz: t, filterIndex: n }) => {
  const { overlay: a } = de(), { config: o } = v.useContext(X), i = Object.values(o.visualizations).filter((l) => {
    var u;
    return (u = l.sharedFilterIndexes) == null ? void 0 : u.map(Number).includes(Number(n));
  }).length > 1, s = i ? "This filter is used by multiple visualizations. You can either delete the filter from this visualization only or you can delete the filter completely, which will also remove it from other visualizations." : "Are you sure you want to delete this filter?";
  return /* @__PURE__ */ r.createElement(ce, { showClose: !0 }, /* @__PURE__ */ r.createElement(ce.Content, null, /* @__PURE__ */ r.createElement("p", null, s), i && /* @__PURE__ */ r.createElement(
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
}, Dl = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return (Object.values(t) || []).forEach((o) => {
    o == null || o.forEach((i) => {
      const s = i[e];
      if (s !== void 0) {
        const l = String(s).trim();
        n.add(l);
      }
    });
  }), Array.from(n);
}, Sl = (e) => {
  var t;
  return e.type === "urlfilter" ? (t = e.apiFilter) == null ? void 0 : t.valueSelector : e.columnName;
}, St = (e, t, n = []) => e == null ? void 0 : e.map((a, o) => {
  if (n.includes(o) || a.type === "urlfilter")
    return a;
  const i = A.cloneDeep(a), s = Dl(Sl(a), t);
  if (i.values = s, s.length > 0) {
    const l = ca(i);
    if (l)
      i.active = l;
    else if (a.multiSelect) {
      const u = i.values, d = Array.isArray(i.active) ? i.active : [i.active];
      i.active = d.filter((f) => u.includes(f));
    } else {
      const u = e.find((f) => f.resetLabel), d = u ? u.resetLabel : i.values[0] || i.active;
      i.active = d;
    }
  }
  return i;
}), wl = ({ vizConfig: e, updateConfig: t }) => {
  const { config: n, loadAPIFilters: a, data: o } = v.useContext(X), { overlay: i } = de(), {
    dashboard: { sharedFilters: s },
    visualizations: l
  } = n, u = v.useContext(ee), d = v.useMemo(() => {
    const p = n.visualizations[e.uid].sharedFilterIndexes.map(
      Number
    );
    return n.dashboard.sharedFilters.map(({ key: D }, c) => [c, D]).filter(([D]) => !p.includes(D)).map(([D, c]) => /* @__PURE__ */ r.createElement("option", { key: D, value: D }, `${D} - ${c}`));
  }, [n.visualizations, e.uid]), f = v.useState({}), [m, b] = v.useState(!1), h = (p, D, c) => {
    const g = A.cloneDeep(s), {
      apiEndpoint: y,
      valueSelector: w,
      textSelector: E,
      subgroupValueSelector: T,
      subgroupTextSelector: S
    } = s[D].apiFilter || {}, C = c.apiEndpoint !== y || c.valueSelector !== w || c.textSelector !== E || c.subgroupValueSelector !== T || c.subgroupTextSelector !== S;
    if (g[D][p] = c, p === "columnName") {
      g[D].subGrouping && delete g[D].subGrouping;
      const F = St(g, o);
      u({ type: "SET_SHARED_FILTERS", payload: F });
    } else
      p === "filterStyle" ? (g[D] = {
        ...g[D],
        active: "",
        apiFilter: {
          apiEndpoint: "",
          subgroupValueSelector: "",
          textSelector: "",
          valueSelector: ""
        },
        filterStyle: c
      }, u({ type: "SET_SHARED_FILTERS", payload: g })) : p === "apiFilter" && c.apiEndpoint && c.valueSelector && C ? (s[D].filterStyle === ae.nestedDropdown && c.subgroupValueSelector && (g[D].subGrouping = {
        active: "",
        columnName: "",
        setByQueryParameter: "",
        valuesLookup: {}
      }), a(g, {})) : u({ type: "SET_SHARED_FILTERS", payload: g });
  }, I = (p) => {
    const D = A.cloneDeep(s);
    D.splice(p, 1);
    const c = Object.keys(s).slice(p + 1), g = l;
    Object.keys(g).forEach((y) => {
      const w = g[y];
      if (w.type === "dashboardFilters") {
        const E = w.sharedFilterIndexes.filter((T) => T != p).map((T) => c.includes(T.toString()) ? T - 1 : T);
        u({ type: "UPDATE_VISUALIZATION", payload: { vizKey: y, configureData: { sharedFilterIndexes: E } } });
      }
    }), u({ type: "SET_SHARED_FILTERS", payload: D });
  }, O = () => {
    const p = A.cloneDeep(s) || [], c = { key: "New Dashboard Filter " + (p.length + 1), showDropdown: !0, values: [] };
    u({ type: "SET_SHARED_FILTERS", payload: [...p, c] }), t({ ...e, sharedFilterIndexes: [...e.sharedFilterIndexes, p.length] });
  };
  return /* @__PURE__ */ r.createElement(Ya, { allowZeroExpanded: !0 }, /* @__PURE__ */ r.createElement(Zt, null, /* @__PURE__ */ r.createElement(Kt, null, /* @__PURE__ */ r.createElement(Xt, null, "General")), /* @__PURE__ */ r.createElement(Yt, null, /* @__PURE__ */ r.createElement(
    cr,
    {
      value: e.filterBehavior,
      label: "Filter Behavior",
      updateField: (p, D, c, g) => {
        t({ ...e, filterBehavior: g });
      },
      options: ["Apply Button", "Filter Change"],
      tooltip: /* @__PURE__ */ r.createElement(x, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(x.Target, null, /* @__PURE__ */ r.createElement(P, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(x.Content, null, /* @__PURE__ */ r.createElement("p", null, 'The Apply Button option changes the visualization when the user clicks "apply". The Filter Change option immediately changes the visualization when the selection is changed.')))
    }
  ), e.filterBehavior === "Apply Button" && /* @__PURE__ */ r.createElement(
    K,
    {
      label: "Apply Filter Button Text",
      maxLength: 20,
      value: e.applyFiltersButtonText,
      updateField: (p, D, c, g) => {
        t({ ...e, applyFiltersButtonText: g });
      }
    }
  ), e.filterBehavior === "Filter Change" && /* @__PURE__ */ r.createElement(
    Ve,
    {
      label: "Auto Load",
      value: e.autoLoad,
      updateField: (p, D, c, g) => {
        t({ ...e, autoLoad: g });
      },
      tooltip: /* @__PURE__ */ r.createElement(x, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(x.Target, null, /* @__PURE__ */ r.createElement(P, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(x.Content, null, /* @__PURE__ */ r.createElement("p", null, "Check if you would like for all URL filters to automatically select a value when a parent filter is changed.")))
    }
  ))), /* @__PURE__ */ r.createElement(Zt, null, /* @__PURE__ */ r.createElement(Kt, null, /* @__PURE__ */ r.createElement(Xt, null, "Filters")), /* @__PURE__ */ r.createElement(Yt, null, e.sharedFilterIndexes.map((p) => {
    const D = s[p];
    return /* @__PURE__ */ r.createElement(
      nr,
      {
        key: D.key + p,
        fieldName: D.key,
        fieldKey: p,
        fieldType: "Dashboard Filter",
        controls: f,
        deleteField: () => {
          i == null || i.actions.openOverlay(
            /* @__PURE__ */ r.createElement(
              El,
              {
                removeFilterCompletely: I,
                removeFilterFromViz: (c) => {
                  t({
                    ...e,
                    sharedFilterIndexes: e.sharedFilterIndexes.filter((g) => g !== c)
                  });
                },
                filterIndex: p
              }
            )
          );
        }
      },
      /* @__PURE__ */ r.createElement(
        bl,
        {
          filter: D,
          updateFilterProp: (c, g) => {
            h(c, p, g);
          },
          config: n
        }
      )
    );
  }), /* @__PURE__ */ r.createElement("button", { onClick: O, className: "btn btn-primary full-width" }, "Add Filter"), m ? /* @__PURE__ */ r.createElement("label", null, /* @__PURE__ */ r.createElement("span", { className: "edit-label column-heading" }, "Select Existing Dashboard Filter", /* @__PURE__ */ r.createElement(x, { style: { textTransform: "none" } }, /* @__PURE__ */ r.createElement(x.Target, null, /* @__PURE__ */ r.createElement(P, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ r.createElement(x.Content, null, /* @__PURE__ */ r.createElement("p", null, "This feature is indentended to support legacy functionality. Be advised that any change to the filter in this editor will reflect on the whole dashboard.", " ")))), /* @__PURE__ */ r.createElement(
    "select",
    {
      value: "",
      onChange: (p) => {
        t({
          ...e,
          sharedFilterIndexes: [...e.sharedFilterIndexes, p.target.value]
        }), b(!1);
      }
    },
    [
      /* @__PURE__ */ r.createElement("option", { key: "select", value: "" }, "Select"),
      ...d
    ]
  )) : /* @__PURE__ */ r.createElement("button", { onClick: () => b(!0), className: "btn btn-primary full-width mt-2" }, "Add Existing Dashboard Filter"))));
}, Tl = (e) => e.replace(/"/g, ""), Cl = (e) => String(e).match(/^[-]?[0-9\.]+$/), wt = (e, t) => {
  const n = e.includes("?");
  return t.filter(({ value: a }) => a !== "").map(({ key: a, value: o }, i) => {
    const s = i === 0 && !n ? "?" : "&", l = a.match(/\$.*/);
    return Cl(o) || l ? s + a + "=" + o : s + a + `="${Tl(o)}"`;
  }).join("");
}, Ol = (e, t, n = []) => e.reduce((a, o, i) => {
  const s = o, l = n.includes(i);
  return t[s] && !l ? a[s] = t[s] : a[s] = void 0, a;
}, {}), za = (e, t) => {
  const n = t.filter((a) => {
    var o;
    return (o = e.parents) == null ? void 0 : o.includes(a.key);
  });
  return (n || []).length ? n.flatMap((a) => {
    var o;
    if (a.filterStyle === ae.nestedDropdown) {
      const i = a.apiFilter.valueSelector || "", s = a.apiFilter.subgroupValueSelector || "", l = a.queuedActive ? a.queuedActive[0] : a.active || "", u = a.queuedActive ? a.queuedActive[1] : ((o = a.subGrouping) == null ? void 0 : o.active) || "";
      return [
        { key: i, value: l },
        { key: s, value: u }
      ];
    } else {
      const i = a.queryParameter || a.apiFilter.valueSelector || "", s = a.queuedActive || a.active || "";
      return Array.isArray(s) ? s.map((l) => ({ key: i, value: l.toString() })) : [{ key: i, value: s.toString() }];
    }
  }) : null;
}, Ha = (e) => e == null ? void 0 : e.some(({ value: t }) => t === ""), Il = (e, t) => {
  const { textSelector: n, valueSelector: a, subgroupTextSelector: o, subgroupValueSelector: i } = t;
  if (i) {
    const s = {};
    return e.forEach((l) => {
      s[l[a]] || (s[l[a]] = { text: l[n || a], value: l[a], subOptions: [] }), s[l[a]].subOptions.push({ text: l[o], value: l[i] });
    }), Object.values(s);
  }
  return e.map((s) => ({ text: s[n || a], value: s[a] }));
}, _l = (e, t) => {
  const n = {};
  return e.forEach((a, o) => {
    var d;
    const i = (d = a.apiFilter) == null ? void 0 : d.apiEndpoint;
    if (!i)
      return;
    const s = i;
    if (t[s])
      return;
    const l = za(a, e);
    if (Ha(l))
      return;
    const u = i + (l ? wt(i, l) : "");
    n[u] = [s, o];
  }), n;
}, kl = (e, t) => {
  var s, l;
  const n = Oe(t == null ? void 0 : t.setByQueryParameter), a = (s = e[0]) == null ? void 0 : s.value, o = (l = e[0]) == null ? void 0 : l.subOptions[0].value, i = Oe(t == null ? void 0 : t.subGrouping.setByQueryParameter);
  if (!t.active)
    t.active = n || a, t.subGrouping.active = i || o;
  else {
    const u = e.find((d) => d.value === t.active);
    if (t.active = u ? u.value : a, u) {
      const d = u.subOptions.find((f) => f.value === t.subGrouping.active);
      t.subGrouping.active = (d == null ? void 0 : d.value) || o;
    } else
      t.subGrouping.active = o;
  }
}, Nl = (e, t) => {
  var s;
  const n = Oe(t == null ? void 0 : t.setByQueryParameter), a = Array.isArray(n) ? n : n == null ? void 0 : n.split(","), o = n ? a : [(s = e[0]) == null ? void 0 : s.value], i = (t.active || []).filter(
    (l) => e.find((u) => u.value === l)
  );
  t.active = i.length ? i : o;
}, Kn = (e, t, n, a) => {
  var l;
  const o = A.cloneDeep(n), i = A.cloneDeep(o[e]);
  if (!a.length || !(t != null && t.length))
    return i;
  const s = i.setByQueryParameter ? !!Oe(i.setByQueryParameter) : !1;
  if (a.includes(e) || s) {
    const u = o.filter((f) => {
      var m;
      return (m = i.parents) == null ? void 0 : m.includes(f.key);
    }), d = u.some((f) => !(f.active || f.queuedActive));
    if (u && d)
      return i;
    if (i.filterStyle === ae.multiSelect)
      Nl(t, i);
    else if (i.filterStyle === ae.nestedDropdown)
      kl(t, i);
    else {
      const f = (l = t[0]) == null ? void 0 : l.value, m = Oe(i == null ? void 0 : i.setByQueryParameter);
      if (!i.active)
        i.active = m || f;
      else {
        const b = t.find((h) => h.value === i.active);
        i.active = b ? b.value : f;
      }
    }
  }
  return i;
};
const ja = ({
  apiFilterDropdowns: e,
  visualizationConfig: t,
  setConfig: n,
  currentViewport: a,
  isEditor: o = !1
}) => {
  var g, y;
  const i = v.useContext(X), { config: s, reloadURLData: l, loadAPIFilters: u, setAPIFilterDropdowns: d, setAPILoading: f } = i, m = v.useContext(ee), b = (w) => {
    w.preventDefault();
    const E = A.cloneDeep(i.config.dashboard), T = Object.values(i.config.visualizations).filter((C) => C.type === "dashboardFilters").reduce((C, F) => F.autoLoad ? C : [...C, F.sharedFilterIndexes], []);
    if (!E.sharedFilters.some((C, F) => T.includes(F) ? !C.active && !C.queuedActive : !1)) {
      if (_e(i.config.visualizations)) {
        const C = It();
        let F = !1;
        E.sharedFilters.forEach((V) => {
          V.queuedActive && (pr(V), V.setByQueryParameter && C[V.setByQueryParameter] !== V.active && (C[V.setByQueryParameter] = Array.isArray(V.active) ? V.active.join(",") : V.active, F = !0));
        }), F && da(C);
      }
      f(!0), m({ type: "SET_SHARED_FILTERS", payload: E.sharedFilters }), m({ type: "SET_FILTERED_DATA", payload: Ce(A.cloneDeep(i)) }), u(E.sharedFilters, e).then((C) => {
        l(C);
      }).catch((C) => {
        console.error(C);
      });
    }
  }, h = (w, E) => {
    const T = A.cloneDeep(s);
    let [S, C] = vl(
      w,
      E,
      T.dashboard.sharedFilters,
      t
    );
    if (m({ type: "SET_SHARED_FILTERS", payload: S }), _e(s.visualizations)) {
      const F = t.autoLoad, V = T.dashboard.sharedFilters.some((te) => !te.active), fe = S.filter((te) => te.apiFilter).map((te) => te.apiFilter.apiEndpoint), H = Ol(
        fe,
        e,
        C
      );
      F && !V ? (d(H), u(S, H).then((te) => {
        l(te);
      })) : (S[w].queuedActive = E, m({ type: "SET_DATA", payload: {} }), m({ type: "SET_FILTERED_DATA", payload: {} }), d(H), u(S, H));
    } else if (S[w].type === "urlfilter" && S[w].apiFilter)
      l(S);
    else {
      const F = A.cloneDeep(i);
      F.config.dashboard.sharedFilters = S;
      const V = Ce(F);
      m({ type: "SET_FILTERED_DATA", payload: V }), m({ type: "SET_SHARED_FILTERS", payload: S });
    }
  }, [I, O] = v.useState(!0), p = () => {
    O(!I), n({
      ...t,
      showEditorPanel: !I
    });
  }, D = (g = t == null ? void 0 : t.sharedFilterIndexes) == null ? void 0 : g.map(Number).map((w) => s.dashboard.sharedFilters[w]), c = D.length ? D.every((w) => w.showDropdown === !1) : !1;
  return c && !o ? /* @__PURE__ */ r.createElement(r.Fragment, null) : /* @__PURE__ */ r.createElement(be.VisualizationWrapper, { config: t, isEditor: o, currentViewport: a }, o && /* @__PURE__ */ r.createElement(
    be.Sidebar,
    {
      displayPanel: I,
      isDashboard: !0,
      title: "Configure Dashboard Filters",
      onBackClick: p
    },
    /* @__PURE__ */ r.createElement(wl, { updateConfig: n, vizConfig: t })
  ), !c && /* @__PURE__ */ r.createElement(be.Responsive, { isEditor: o }, /* @__PURE__ */ r.createElement(
    "div",
    {
      className: `${o ? " is-editor" : ""} cove-component__content col-12 cove-dashboard-filters-container`
    },
    /* @__PURE__ */ r.createElement(
      gr,
      {
        show: (y = t == null ? void 0 : t.sharedFilterIndexes) == null ? void 0 : y.map(Number),
        filters: s.dashboard.sharedFilters || [],
        apiFilterDropdowns: e,
        handleOnChange: h,
        showSubmit: t.filterBehavior === Ua.Apply && !t.autoLoad,
        applyFilters: b,
        applyFiltersButtonText: t.applyFiltersButtonText
      }
    )
  )));
}, Fl = new Se(), Ga = (e, t, n) => {
  var l;
  const a = A.cloneDeep(n.visualizations[e]), o = (l = n.datasets[a.dataKey]) == null ? void 0 : l.data, i = o != null && o.length ? Object.keys(o[0]) : [], s = (Dt(n.dashboard, t) || []).filter((u) => i.includes(u.columnName));
  return s.length && (a.formattedData = Ie(s, o)), a.data = o, a;
}, qa = (e, t, n, a, o) => {
  if (t === void 0)
    return {};
  const i = A.cloneDeep(n.visualizations[e]), s = n.rows[t];
  if (s.footnotesId && s.footnotesId === e)
    return Ga(e, t, n);
  s != null && s.dataKey && Object.assign(i, A.pick(s, ["dataKey", "dataDescription", "formattedData", "data"])), i.formattedData && (i.originalFormattedData = i.formattedData);
  const l = (o == null ? void 0 : o[t]) ?? (o == null ? void 0 : o[e]);
  if (l)
    i.data = l || [], i.formattedData && (i.formattedData = i.data);
  else {
    const u = i.dataKey || "backwards-compatibility";
    i.data = a[u] || [], i.formattedData && (i.formattedData = Fl.developerStandardize(i.data, i.dataDescription) || i.data);
  }
  return i;
}, Al = ({ config: e, updateField: t }) => {
  var d, f, m, b, h, I;
  const n = () => {
    const O = [...e.staticFootnotes || [], { text: "Add Footnote Text" }];
    t(null, null, "staticFootnotes", O);
  }, a = (O, p) => {
    const D = A.cloneDeep(e.staticFootnotes);
    D[O] = p, t(null, null, "staticFootnotes", D);
  }, o = (O) => {
    const p = A.cloneDeep(e.staticFootnotes);
    p.splice(O, 1), t(null, null, "staticFootnotes", p);
  }, i = (O) => [["", "--Select--"]].concat(O.map((p) => [p, p])), s = e.datasets || {}, l = e.dataKey ? i(Object.keys(((f = (d = s[e.dataKey]) == null ? void 0 : d.data) == null ? void 0 : f[0]) || {})) : [], u = i(Object.keys(s));
  return /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement("em", null, "Dynamic Footnotes"), /* @__PURE__ */ r.createElement("div", { className: "row border p-2" }, /* @__PURE__ */ r.createElement(pe, { label: "Select a Footnote Dataset", value: e.dataKey, options: u, fieldName: "dataKey", updateField: t }), e.dataKey && /* @__PURE__ */ r.createElement("div", { className: "p-3" }, /* @__PURE__ */ r.createElement(pe, { label: "Footnote Symbol Column", value: (m = e.dynamicFootnotes) == null ? void 0 : m.symbolColumn, options: l, section: "dynamicFootnotes", fieldName: "symbolColumn", updateField: t }), /* @__PURE__ */ r.createElement(pe, { label: "Footnote Text Column", value: (b = e.dynamicFootnotes) == null ? void 0 : b.textColumn, options: l, section: "dynamicFootnotes", fieldName: "textColumn", updateField: t }), /* @__PURE__ */ r.createElement(pe, { label: "Footnote Order Column", value: (h = e.dynamicFootnotes) == null ? void 0 : h.orderColumn, options: l, section: "dynamicFootnotes", fieldName: "orderColumn", updateField: t }))), /* @__PURE__ */ r.createElement("hr", null), /* @__PURE__ */ r.createElement("em", null, "Static Footnotes"), (I = e.staticFootnotes) == null ? void 0 : I.map((O, p) => /* @__PURE__ */ r.createElement("div", { key: p, className: "row border p-2" }, /* @__PURE__ */ r.createElement("div", { className: "col-8" }, /* @__PURE__ */ r.createElement(pe, { label: "Symbol", value: O.symbol, options: [["", "--Select--"], ...ar], fieldName: "symbol", updateField: (D, c, g, y) => a(p, { ...O, symbol: y }) }), " ", /* @__PURE__ */ r.createElement(K, { label: "Text", value: O.text, fieldName: "text", updateField: (D, c, g, y) => a(p, { ...O, text: y }) })), /* @__PURE__ */ r.createElement("div", { className: "col-2 ml-4" }, /* @__PURE__ */ r.createElement("button", { className: "btn btn-danger p-1", onClick: () => o(p) }, "Delete")))), /* @__PURE__ */ r.createElement("button", { className: "btn btn-primary", onClick: n }, "Add Static Footnote"));
}, Qe = ({ visualizationKey: e, config: t, viewport: n, isEditor: a, updateConfig: o }) => {
  const i = Ot(t, o);
  if (a)
    return /* @__PURE__ */ r.createElement(Va, { component: Qe, visualizationKey: e, visualizationConfig: t, updateConfig: o, type: "Footnotes", viewport: n }, /* @__PURE__ */ r.createElement(Al, { key: e, config: t, updateField: i }));
  const s = v.useMemo(() => {
    if (t.dataKey && t.dynamicFootnotes) {
      const { symbolColumn: u, textColumn: d, orderColumn: f } = t.dynamicFootnotes, b = (t.formattedData || t.data).map((h) => A.pick(h, [u, d, f]));
      return b.sort((h, I) => h[f] - I[f]), b.map((h) => ({ symbol: h[u], text: h[d] }));
    }
    return [];
  }, [t.dynamicFootnotes, t.formattedData, t.data]), l = t.staticFootnotes || [];
  return /* @__PURE__ */ r.createElement(hr, { footnotes: [...s, ...l] });
}, Ll = ({
  allExpanded: e,
  fontSize: t,
  groupName: n,
  currentViewport: a,
  children: o
}) => {
  const [i, s] = v.useState(e), l = { small: 16, medium: 18, large: 20 }, u = ["xs", "xxs"].includes(a) ? "13px" : `${l[t]}px`;
  return v.useEffect(() => {
    s(e);
  }, [e]), /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(
    "div",
    {
      style: { fontSize: u },
      role: "button",
      className: `multi-visualiation-heading${i ? "" : " collapsed"} h4`,
      onClick: () => {
        s(!i);
      },
      tabIndex: 0,
      onKeyDown: (d) => {
        d.keyCode === 13 && s(!i);
      }
    },
    /* @__PURE__ */ r.createElement(P, { display: i ? "minus" : "plus", base: !0 }),
    n
  ), i && o);
}, Pl = ({
  allExpanded: e,
  currentViewport: t,
  groupName: n,
  hideVisualization: a,
  row: o,
  children: i
}) => a ? /* @__PURE__ */ r.createElement(r.Fragment, null) : o.expandCollapseAllButtons ? /* @__PURE__ */ r.createElement("div", { className: "collapsable-multiviz-container" }, /* @__PURE__ */ r.createElement(
  Ll,
  {
    allExpanded: e,
    fontSize: "26px",
    groupName: n,
    currentViewport: t
  },
  i
)) : /* @__PURE__ */ r.createElement(r.Fragment, null, n !== "" ? /* @__PURE__ */ r.createElement("h3", null, n) : /* @__PURE__ */ r.createElement(r.Fragment, null), i), Xn = ({
  allExpanded: e,
  filteredDataOverride: t,
  groupName: n,
  row: a,
  rowIndex: o,
  inNoDataState: i,
  setSharedFilter: s,
  updateChildConfig: l,
  apiFilterDropdowns: u,
  currentViewport: d
}) => {
  const { config: f, filteredData: m, data: b } = v.useContext(X), [h, I] = r.useState(a.columns.map((c, g) => g === 0)), O = (c) => {
    I(h.map((g, y) => y === c));
  }, p = v.useMemo(() => {
    if (a.footnotesId) {
      const c = Ga(a.footnotesId, o, f);
      if (a.multiVizColumn && t) {
        const g = t[0][a.multiVizColumn], y = c.formattedData.filter((w) => w[a.multiVizColumn] === g);
        c.formattedData = y;
      } else
        c.formattedData = m[a.footnotesId];
      return c;
    }
    return null;
  }, [f, a, b, m]), D = (c) => {
    const y = Object.values(f.visualizations).filter(
      (w) => w.type === "dashboardFilters"
    ).filter((w) => !w.autoLoad).flatMap((w) => w.sharedFilterIndexes);
    return _e(f.visualizations) && c.autoLoad ? y.some((w) => {
      const { queuedActive: E, active: T, subGrouping: S } = f.dashboard.sharedFilters[w];
      return !T && !E ? !0 : E ? S ? E[0] !== T || E[1] !== S.active : E !== T : !1;
    }) : !1;
  };
  return /* @__PURE__ */ r.createElement("div", { className: `row${a.equalHeight ? " equal-height" : ""}${a.toggle ? " toggle" : ""}`, key: `row__${o}` }, a.columns.map((c, g) => {
    if (c.width) {
      if (!c.widget)
        return /* @__PURE__ */ r.createElement("div", { key: `row__${o}__col__${g}`, className: `col col-${c.width}` });
      const y = qa(c.widget, o, f, b, m);
      t && (y.data = t, y.formattedData && (y.formattedData = t));
      const w = f.dashboard.sharedFilters && f.dashboard.sharedFilters.filter((F) => F.setBy === c.widget).length > 0, E = w ? f.dashboard.sharedFilters.filter((F) => F.setBy === c.widget)[0].active : void 0, T = /* @__PURE__ */ r.createElement("a", { href: `#data-table-${y.dataKey}`, className: "margin-left-href" }, y.dataKey, " (Go to Table)"), S = i && y.filterBehavior !== "Apply Button" && (y.type !== "dashboardFilters" || D(y)), C = a.toggle === void 0 || a.toggle && h[g];
      return /* @__PURE__ */ r.createElement(
        "div",
        {
          key: `vis__${o}__${g}`,
          className: `col-12 col-md-${c.width}${C ? "" : " d-none"}${S ? " hide-parent-visualization" : " mt-5 p-1"}`
        },
        a.toggle && !S && /* @__PURE__ */ r.createElement(
          hl,
          {
            row: a,
            visualizations: f.visualizations,
            active: h.indexOf(!0),
            setToggled: O
          }
        ),
        /* @__PURE__ */ r.createElement(
          Pl,
          {
            allExpanded: e,
            currentViewport: d,
            groupName: n,
            hideVisualization: S,
            row: a
          },
          y.type === "chart" && /* @__PURE__ */ r.createElement(
            ra,
            {
              key: c.widget,
              config: y,
              dashboardConfig: f,
              isEditor: !1,
              setConfig: (F) => {
                l(c.widget, F);
              },
              setSharedFilter: w ? s : void 0,
              isDashboard: !0,
              link: f.table && f.table.show && f.datasets && y.table && y.table.showDataTableLink ? T : void 0,
              configUrl: void 0,
              setEditing: void 0,
              hostname: void 0,
              setSharedFilterValue: void 0
            }
          ),
          y.type === "map" && /* @__PURE__ */ r.createElement(
            ia,
            {
              key: c.widget,
              config: y,
              isEditor: !1,
              setConfig: (F) => {
                l(c.widget, F);
              },
              showLoader: !1,
              setSharedFilter: w ? s : void 0,
              setSharedFilterValue: E,
              isDashboard: !0,
              link: f.table && f.table.show && f.datasets && y.table && y.table.showDataTableLink ? T : void 0
            }
          ),
          y.type === "data-bite" && /* @__PURE__ */ r.createElement(
            oa,
            {
              key: c.widget,
              config: y,
              isEditor: !1,
              setConfig: (F) => {
                l(c.widget, F);
              },
              isDashboard: !0
            }
          ),
          y.type === "waffle-chart" && /* @__PURE__ */ r.createElement(
            sa,
            {
              key: c.widget,
              config: y,
              isEditor: !1,
              setConfig: (F) => {
                l(c.widget, F);
              },
              isDashboard: !0,
              configUrl: f.table && f.table.show && f.datasets && y.table && y.table.showDataTableLink ? T : void 0
            }
          ),
          y.type === "markup-include" && /* @__PURE__ */ r.createElement(
            la,
            {
              key: c.widget,
              config: y,
              configUrl: void 0,
              isDashboard: !0,
              isEditor: !1,
              setConfig: (F) => {
                l(c.widget, F);
              }
            }
          ),
          y.type === "filtered-text" && /* @__PURE__ */ r.createElement(
            Fa,
            {
              key: c.widget,
              config: y,
              isEditor: !1,
              setConfig: (F) => {
                l(c.widget, F);
              },
              isDashboard: !0,
              configUrl: void 0
            }
          ),
          y.type === "dashboardFilters" && /* @__PURE__ */ r.createElement(
            ja,
            {
              setConfig: (F) => {
                l(c.widget, F);
              },
              key: c.widget,
              visualizationConfig: y,
              apiFilterDropdowns: u,
              currentViewport: d
            }
          ),
          y.type === "table" && /* @__PURE__ */ r.createElement(
            Rt,
            {
              key: c.widget,
              updateConfig: (F) => {
                l(c.widget, F);
              },
              visualizationKey: c.widget,
              config: y,
              viewport: d
            }
          ),
          y.type === "footnotes" && /* @__PURE__ */ r.createElement(
            Qe,
            {
              key: c.widget,
              visualizationKey: c.widget,
              config: y,
              viewport: d
            }
          )
        )
      );
    }
    return /* @__PURE__ */ r.createElement(r.Fragment, { key: `vis__${o}__${g}` });
  }), a.footnotesId && !i ? /* @__PURE__ */ r.createElement(
    Qe,
    {
      isEditor: !1,
      visualizationKey: a.footnotesId,
      config: p,
      viewport: d
    }
  ) : null);
}, Yn = function(e = " ", t = "") {
  return this.split(e).map((n) => n.charAt(0).toUpperCase() + n.slice(1)).join(t);
}, Rl = (e, t, n) => {
  let a = !1;
  return e.find((o) => {
    if (o.type === "urlfilter" && !Array.isArray(o.active) && o.filterBy === "File Name")
      return a = !0, !0;
  }), Object.keys(n).forEach((o) => {
    decodeURIComponent(n[o]) !== t[o] && (a = !0);
  }), a;
}, Jn = ({ visualizations: e, datasets: t, rows: n }) => {
  const a = Object.values(e).map((s) => s.dataKey), o = n.map((s) => s.dataKey), i = A.uniq([...a, ...o]);
  return Object.keys(t).filter((s) => i.includes(s));
}, xl = (e, t, n) => {
  const a = Object.keys(e).flatMap((s) => {
    const l = e[s];
    return l === void 0 ? [] : typeof l == "string" && l.match(/undefined/) ? [] : Array.isArray(l) ? l.map((u) => ({ key: s, value: u })) : { key: s, value: l };
  }), o = t.origin + t.pathname;
  let i = `${o}${wt(o, a)}`;
  if (n !== "") {
    const s = t.pathname.split(".").pop(), l = t.pathname.substring(0, t.pathname.lastIndexOf("/"));
    i = `${t.origin}${l}/${n}.${s}${wt(
      o,
      a
    )}`;
  }
  return i;
}, Ml = (e, t, n) => {
  const a = {
    "Remove Spaces": "",
    "Keep Spaces": " ",
    "Replace With Underscore": "_"
  };
  let o = e;
  return t.datasetKey === n && (t.fileName ? o = Yn.call(
    String(t.fileName),
    " ",
    a[t.whitespaceReplacement ?? "Keep Spaces"]
  ) : o = t.active), o != null && o.includes("${query}") && (o = o.replace(
    "${query}",
    Yn.call(
      String(t.active),
      " ",
      a[t.whitespaceReplacement ?? "Keep Spaces"]
    )
  )), o;
}, Bl = (e, t) => Object.keys(e).reduce((n, a) => {
  const o = e[a].dataKey;
  return t[o] && (n[a].formattedData = t[o]), n;
}, A.cloneDeep(e)), $l = (e, t, n, a) => {
  var i;
  if (!e.usedBy || !e.usedBy.length)
    return !0;
  const o = (i = e.usedBy) == null ? void 0 : i.map((s) => n[s] || a[s]);
  return o == null ? void 0 : o.some((s) => (s == null ? void 0 : s.dataKey) === t);
}, Vl = ({ setAllExpanded: e }) => /* @__PURE__ */ r.createElement("div", { className: "d-block " }, /* @__PURE__ */ r.createElement("div", { className: "d-flex flex-row-reverse mb-2" }, /* @__PURE__ */ r.createElement("button", { className: "btn expand-collapse-buttons", onClick: () => e(!1) }, "- Collapse All"), /* @__PURE__ */ r.createElement("button", { className: "btn expand-collapse-buttons mr-2", onClick: () => e(!0) }, "+ Expand All"))), Ul = (e, t, n, a) => {
  const o = (i, s, l, u = 50) => {
    if (!i)
      return;
    const d = i.map((p, D) => D), f = l ? d : a;
    i = i.map(
      (p, D) => {
        var c;
        return Kn(
          D,
          s[(c = p.apiFilter) == null ? void 0 : c.apiEndpoint],
          i,
          f
        );
      }
    );
    const m = i.filter((p) => p.apiFilter), b = new Map(m.map((p) => [p.apiFilter.apiEndpoint, p.apiFilter])), h = _l(i, s), I = Object.values(h).reduce(
      (p, [D]) => ({ ...p, [D]: null }),
      {}
    );
    n((p) => ({ ...p, ...I }));
    const O = A.cloneDeep(s);
    return Promise.all(
      Object.keys(h).map(
        (p) => new Promise((D) => {
          fetch(p).then((c) => c.json()).then((c) => {
            Array.isArray(c) || console.error("COVE only supports response data in the shape Array<Object>");
            const [g, y] = h[p], w = b.get(g), E = Il(c, w);
            O[g] = E;
            const T = Kn(
              y,
              E,
              i,
              f
            );
            i[y] = T;
          }).catch(() => {
            t({
              type: "ADD_ERROR_MESSAGE",
              payload: "There was a problem returning data. Please try again."
            });
          }).finally(() => {
            D();
          });
        })
      )
    ).then(() => !i.reduce((D, c, g) => f.includes(g) && !c.active ? Ha(za(c, i)) ? D : [...D, g] : D, []).length || u === 0 ? (n(O), e({ type: "SET_SHARED_FILTERS", payload: i }), i) : o(i, O, l, u - 1));
  };
  return o;
}, zl = (e) => {
  const t = !!Oe("cove-auto-load"), n = e.multiDashboards ? e.multiDashboards[e.activeDashboard] : e, a = Object.values(n.visualizations).reduce((o, i) => {
    if (o === !1)
      return o;
    if (i.visualizationType === "dashboardFilters") {
      if (i.filterBehavior === "Apply Button")
        return !1;
      if (i.autoLoad)
        return !0;
    }
    return o;
  }, void 0);
  if (t || a) {
    const o = n.rows.map((l) => l.dataKey).filter(Boolean), s = Object.values(n.visualizations).map((l) => l.dataKey).filter(Boolean).concat(o).find((l) => {
      var u;
      return !((u = e.datasets[l].data) != null && u.length);
    });
    return console.log("config", e), !!s;
  }
  return !1;
}, Tt = (e, t) => {
  var u;
  const n = e.filterBehavior === "Apply Button", a = _e(e.visualizations) || n, o = Object.keys(e.visualizations).filter((d) => e.visualizations[d].dataKey === t), i = e.rows.reduce((d, f, m) => (f.dataKey === t && d.push(m), d), []), s = !!(o.length || i.length), l = !((u = e.dashboard.sharedFilters) != null && u.find(
    (d) => A.intersection(d.usedBy, [...o, ...i]).length
  ));
  return !a && s && l;
};
function Hl({ initialState: e, isEditor: t = !1, isDebug: n = !1 }) {
  var xt, Mt, Bt, $t, Vt, Ut, zt, Ht, jt, Gt, qt, Wt, Qt;
  const [a, o] = v.useReducer(dl, e), [i, s] = v.useReducer(ml, []), l = v.useContext(pl), [u, d] = v.useState({}), [f, m] = v.useState("lg"), [b] = v.useState(`cove-${Math.random().toString(16).slice(-4)}`), [h, I] = v.useState(!0), [O, p] = v.useState(!1), D = a.tabSelected === "Dashboard Preview", c = v.useMemo(() => {
    const _ = Jn(a.config).map((k) => a.data[k]);
    return _.length ? _.some((k) => k === void 0) : !0;
  }, [a.data]), g = Pt(a.config.rows), y = new Se(), w = v.useMemo(() => Object.values(a.config.visualizations).filter((_) => _.type === "dashboardFilters").reduce((_, k) => k.autoLoad ? [..._, ...k.sharedFilterIndexes] : _, []), [a.config.visualizations]), E = Ul(
    o,
    s,
    d,
    w
  ), T = async (_) => {
    const k = A.cloneDeep(a.config);
    if (!k.datasets)
      return;
    const B = _ || k.dashboard.sharedFilters, N = Jn(k), U = A.cloneDeep(a.data), z = A.cloneDeep(k.datasets);
    let Q = !1, $ = "";
    for (let j = 0; j < N.length; j++) {
      const G = N[j], ie = k.datasets[G];
      if (ie.dataUrl && B) {
        const se = new URL(ie.runtimeDataUrl || ie.dataUrl, window.location.origin), me = Object.fromEntries(new URLSearchParams(se.search)), Y = {};
        B.forEach((M) => {
          var le;
          if (M.type === "urlfilter" && $l(M, G, k.visualizations, k.rows)) {
            if (M.filterBy === "File Name" && ($ = Ml($, M, G)), M.queryParameter && (Y[M.queryParameter] ? Y[M.queryParameter] = Y[M.queryParameter] + M.active : Y[M.queryParameter] = M.active), M.setByQueryParameter) {
              const Re = Object.fromEntries(new URLSearchParams(window.location.search))[M.setByQueryParameter], Wa = ((le = M.apiFilter) == null ? void 0 : le.valueSelector) || M.setByQueryParameter;
              Re && (Y[Wa] = Re);
            }
            M.apiFilter && M.active && (Y[M.apiFilter.valueSelector] = M.active, M.apiFilter.subgroupValueSelector && M.subGrouping.active && (Y[M.apiFilter.subgroupValueSelector] = M.subGrouping.active));
          }
        });
        const et = Rl(B, me, Y) || Tt(k, G);
        if (_ || et) {
          Q = !0;
          const M = xl(
            { ...me, ...Y },
            se,
            $
          );
          p(!0), await ke(M).then((le) => {
            let ve = le;
            if (le && ie.dataDescription)
              try {
                ve = y.autoStandardize(ve), ve = y.developerStandardize(ve, ie.dataDescription);
              } catch (Re) {
                console.error("Error standardizing data:", Re);
              }
            z[G].data = ve, z[G].runtimeDataUrl = M, U[G] = ve;
          }).catch((le) => {
            console.error(le), s({
              type: "ADD_ERROR_MESSAGE",
              payload: "There was a problem returning data. Please try again."
            }), z[G].data = [], z[G].runtimeDataUrl = M, U[G] = [];
          });
        } else
          Tt(k, G) && p(!1);
      }
    }
    const q = A.pickBy(z, (j) => !j.dataUrl);
    if (Q || Object.keys(q).length) {
      const j = Object.keys(q).reduce((M, le) => (M[le] = q[le].data, M), {}), G = { ...U, ...j };
      o({ type: "SET_DATA", payload: G });
      const ie = Object.values(k.visualizations).filter((M) => M.type === "dashboardFilters").flatMap((M) => M.sharedFilterIndexes), se = St(B, G, ie), me = _ ? { ...k.dashboard, sharedFilters: se } : k.dashboard, Y = Ce(
        { ...a, config: { ...a.config, dashboard: me } },
        {},
        G
      );
      o({ type: "SET_FILTERED_DATA", payload: Y });
      const et = Bl(k.visualizations, U);
      o({ type: "SET_CONFIG", payload: { dashboard: me, datasets: z, visualizations: et } }), p(!1);
    }
  }, S = (_, k) => {
    const { config: B, filteredData: N } = A.cloneDeep(a);
    for (let z = 0; z < B.dashboard.sharedFilters.length; z++) {
      const Q = B.dashboard.sharedFilters[z];
      if (Q.setBy === _) {
        Q.columnName && (Q.active = k[Q.columnName]);
        break;
      }
    }
    const U = Ce({ ...a, config: B }, N);
    o({ type: "SET_FILTERED_DATA", payload: U }), o({ type: "SET_CONFIG", payload: B }), o({ type: "SET_SHARED_FILTERS", payload: B.dashboard.sharedFilters });
  };
  v.useEffect(() => {
    if (t && !D)
      return;
    const { config: _ } = a, k = zl(_);
    !_e(_.visualizations) && !k && T();
    const B = St(_.dashboard.sharedFilters, a.data);
    E(B, u, k).then((N) => {
      k && T(N);
    }), F(B);
  }, [t, D, (xt = a.config) == null ? void 0 : xt.activeDashboard]);
  const C = (_, k) => {
    const B = A.cloneDeep(a.config), N = A.pick(B, ["visualizations", "multiDashboards"]);
    if (N.visualizations[_] = k, N.visualizations[_].formattedData = B.visualizations[_].formattedData, B.multiDashboards) {
      const U = B.activeDashboard, z = [...B.multiDashboards], $ = { label: z[U].label, visualizations: N.visualizations, ...A.pick(B, ["dashboard", "rows"]) };
      z[U] = $, N.multiDashboards = z;
    }
    o({ type: "SET_CONFIG", payload: N }), t && l.setTempConfig(N);
  }, F = (_ = void 0) => {
    const k = A.cloneDeep(a);
    _ && (k.config.dashboard.sharedFilters = _);
    const B = Ce(k);
    o({ type: "SET_FILTERED_DATA", payload: B });
  }, V = new Ka((_) => {
    for (let k of _) {
      let B = Xa(k.contentRect.width);
      m(B);
    }
  }), fe = v.useCallback((_) => {
    _ !== null && V.observe(_);
  }, []);
  if (a.loading)
    return /* @__PURE__ */ r.createElement(Ct, null);
  let H = null;
  if (t && !D) {
    let _ = !1;
    Ee(a.config).forEach((k) => {
      var Q;
      const B = (Q = g[k]) == null ? void 0 : Q.row, N = qa(
        k,
        B,
        a.config,
        a.data,
        a.filteredData
      );
      N.uid = k, N.type === "footnotes" && (N.formattedData = void 0);
      const U = a.config.dashboard.sharedFilters && a.config.dashboard.sharedFilters.filter(($) => $.setBy === k).length > 0, z = U ? a.config.dashboard.sharedFilters.filter(($) => $.setBy === k)[0].active : void 0;
      if (N.editing) {
        _ = !0;
        const $ = (q) => {
          let j = N.originalFormattedData ? { ...q, formattedData: N.originalFormattedData } : q;
          C(k, j);
        };
        switch (N.type) {
          case "chart":
            H = /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(oe, { visualizationKey: k, subEditor: "Chart" }), /* @__PURE__ */ r.createElement(
              ra,
              {
                key: k,
                config: N,
                isEditor: !0,
                isDebug: n,
                setConfig: $,
                setSharedFilter: U ? S : void 0,
                setSharedFilterValue: z,
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
            H = /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(oe, { visualizationKey: k, subEditor: "Map" }), /* @__PURE__ */ r.createElement(
              ia,
              {
                key: k,
                config: N,
                isEditor: !0,
                isDebug: n,
                setConfig: $,
                setSharedFilter: U ? S : void 0,
                setSharedFilterValue: z,
                isDashboard: !0,
                showLoader: !1,
                dashboardConfig: a.config
              }
            ));
            break;
          case "data-bite":
            H = /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(oe, { visualizationKey: k, subEditor: "Data Bite" }), /* @__PURE__ */ r.createElement(
              oa,
              {
                key: k,
                config: { ...N, newViz: !0 },
                isEditor: !0,
                setConfig: $,
                isDashboard: !0
              }
            ));
            break;
          case "waffle-chart":
            H = /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(oe, { visualizationKey: k, subEditor: "Waffle Chart" }), /* @__PURE__ */ r.createElement(
              sa,
              {
                key: k,
                config: N,
                isEditor: !0,
                setConfig: $,
                isDashboard: !0,
                configUrl: void 0
              }
            ));
            break;
          case "markup-include":
            H = /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(oe, { visualizationKey: k, subEditor: "Markup Include" }), /* @__PURE__ */ r.createElement(
              la,
              {
                key: k,
                config: N,
                isEditor: !0,
                setConfig: $,
                isDashboard: !0,
                configUrl: void 0
              }
            ));
            break;
          case "filtered-text":
            H = /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(oe, { visualizationKey: k, subEditor: "Filtered Text" }), /* @__PURE__ */ r.createElement(
              Fa,
              {
                key: k,
                config: N,
                isEditor: !0,
                setConfig: $,
                isDashboard: !0,
                configUrl: void 0
              }
            ));
            break;
          case "dashboardFilters":
            H = /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(oe, { visualizationKey: k, subEditor: "Filter Dropdowns" }), /* @__PURE__ */ r.createElement(
              ja,
              {
                isEditor: !0,
                visualizationConfig: N,
                apiFilterDropdowns: u,
                setConfig: $
              }
            ));
            break;
          case "table":
            H = /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(oe, { visualizationKey: k, subEditor: "Table" }), /* @__PURE__ */ r.createElement(
              Rt,
              {
                visualizationKey: k,
                config: N,
                isEditor: !0,
                updateConfig: $
              }
            ));
            break;
          case "footnotes":
            H = /* @__PURE__ */ r.createElement(r.Fragment, null, /* @__PURE__ */ r.createElement(oe, { visualizationKey: k, subEditor: "Footnotes" }), /* @__PURE__ */ r.createElement(
              Qe,
              {
                visualizationKey: k,
                config: { ...N, datasets: a.config.datasets },
                isEditor: !0,
                updateConfig: $
              }
            ));
            break;
          default:
            H = /* @__PURE__ */ r.createElement(r.Fragment, null);
            break;
        }
      }
    }), _ || (H = /* @__PURE__ */ r.createElement(Qo, { backend: As }, /* @__PURE__ */ r.createElement("div", { className: "header-container" }, /* @__PURE__ */ r.createElement(oe, null), /* @__PURE__ */ r.createElement(ol, null)), /* @__PURE__ */ r.createElement("div", { className: "layout-container" }, /* @__PURE__ */ r.createElement(Xs, null))));
  } else {
    const { config: _ } = a, { title: k, description: B } = _.dashboard || {};
    H = /* @__PURE__ */ r.createElement(r.Fragment, null, t && /* @__PURE__ */ r.createElement(oe, null), O && /* @__PURE__ */ r.createElement(vr, { fullScreen: !0 }), /* @__PURE__ */ r.createElement(xa, { isEditor: t && !D }), i.map((N, U) => /* @__PURE__ */ r.createElement(
      rr,
      {
        type: "danger",
        onDismiss: () => s({ type: "DISMISS_ERROR_MESSAGE", payload: U }),
        message: N,
        autoDismiss: !0
      }
    )), /* @__PURE__ */ r.createElement(be.Responsive, { isEditor: t }, /* @__PURE__ */ r.createElement("div", { className: `cdc-dashboard-inner-container${t ? " is-editor" : ""}` }, /* @__PURE__ */ r.createElement(
      ta,
      {
        title: k,
        isDashboard: !0,
        classes: ["dashboard-title", `${_.dashboard.theme ?? "theme-blue"}`]
      }
    ), B && /* @__PURE__ */ r.createElement("div", { className: "subtext" }, na(B)), _.rows && _.rows.filter((N) => N.columns.filter((U) => U.widget).length !== 0).map((N, U) => {
      if (N.multiVizColumn && (D || !t)) {
        const Q = Ce(a, A.cloneDeep(a.data))[U] ?? N.formattedData, $ = {};
        return Q.forEach((q) => {
          const j = q[N.multiVizColumn];
          $[j] || ($[j] = []), $[j].push(q);
        }), /* @__PURE__ */ r.createElement(r.Fragment, null, !c && N.expandCollapseAllButtons === !0 && /* @__PURE__ */ r.createElement(Vl, { setAllExpanded: I }), Object.keys($).map((q) => {
          const j = $[q];
          return /* @__PURE__ */ r.createElement(
            Xn,
            {
              key: `row__${U}__${q}`,
              allExpanded: h,
              filteredDataOverride: j,
              groupName: q,
              row: N,
              rowIndex: U,
              setSharedFilter: S,
              updateChildConfig: C,
              apiFilterDropdowns: u,
              currentViewport: f,
              inNoDataState: c
            }
          );
        }));
      } else
        return /* @__PURE__ */ r.createElement(
          Xn,
          {
            key: `row__${U}`,
            allExpanded: !1,
            groupName: "",
            row: N,
            rowIndex: U,
            setSharedFilter: S,
            updateChildConfig: C,
            apiFilterDropdowns: u,
            currentViewport: f,
            inNoDataState: c
          }
        );
    }), c ? /* @__PURE__ */ r.createElement("div", { className: "mt-5" }, "Please complete your selection to continue.") : /* @__PURE__ */ r.createElement(r.Fragment, null), /* @__PURE__ */ r.createElement("section", { className: "download-buttons" }, ((Mt = _.table) == null ? void 0 : Mt.downloadImageButton) && /* @__PURE__ */ r.createElement(
      en.Button,
      {
        title: "Download Dashboard as Image",
        type: "image",
        state: _,
        text: "Download Dashboard Image",
        elementToCapture: b
      }
    ), ((Bt = _.table) == null ? void 0 : Bt.downloadPdfButton) && /* @__PURE__ */ r.createElement(
      en.Button,
      {
        title: "Download Dashboard as PDF",
        type: "pdf",
        state: _,
        text: "Download Dashboard PDF",
        elementToCapture: b
      }
    )), (($t = _.table) == null ? void 0 : $t.show) && _.data && /* @__PURE__ */ r.createElement(
      mt,
      {
        config: _,
        rawData: (Ut = (Vt = _.data) == null ? void 0 : Vt[0]) != null && Ut.tableData ? (Ht = (zt = _.data) == null ? void 0 : zt[0]) == null ? void 0 : Ht.tableData : _.data,
        runtimeData: (Gt = (jt = _.data) == null ? void 0 : jt[0]) != null && Gt.tableData ? (Wt = (qt = _.data) == null ? void 0 : qt[0]) == null ? void 0 : Wt.tableData : _.data || [],
        expandDataTable: _.table.expanded,
        showDownloadButton: _.table.download,
        tableTitle: _.dashboard.title || "",
        viewport: f,
        tabbingId: _.dashboard.title || "",
        outerContainerRef: fe,
        imageRef: b,
        isDebug: n,
        isEditor: t
      }
    ), ((Qt = _.table) == null ? void 0 : Qt.show) && _.datasets && Object.keys(_.datasets).map((N) => {
      var $, q, j, G, ie;
      const U = Ee(_).filter((se) => _.visualizations[se].dataKey === N);
      let z = [];
      ($ = _.dashboard.sharedFilters) == null || $.forEach((se) => {
        let me = !0;
        U.forEach((Y) => {
          se.usedBy && se.usedBy.indexOf(Y) === -1 && (me = !1);
        }), me && z.push(se);
      });
      const Q = z.length > 0 ? Ie(z, _.datasets[N].data) : void 0;
      return /* @__PURE__ */ r.createElement(
        "div",
        {
          className: "multi-table-container",
          id: `data-table-${N}`,
          key: `data-table-${N}`
        },
        /* @__PURE__ */ r.createElement(
          mt,
          {
            config: _,
            dataConfig: _.datasets[N],
            rawData: ((j = (q = _.datasets[N].data) == null ? void 0 : q[0]) == null ? void 0 : j.tableData) || _.datasets[N].data,
            runtimeData: ((ie = (G = _.datasets[N].data) == null ? void 0 : G[0]) == null ? void 0 : ie.tableData) || Q || _.datasets[N].data || [],
            expandDataTable: _.table.expanded,
            tableTitle: N,
            viewport: f,
            tabbingId: N
          }
        )
      );
    }))));
  }
  const te = ["cdc-open-viz-module", "type-dashboard", `${f}`];
  return /* @__PURE__ */ r.createElement(Ls, null, /* @__PURE__ */ r.createElement(
    X.Provider,
    {
      value: {
        ...a,
        setParentConfig: l.setTempConfig,
        outerContainerRef: fe,
        isDebug: n,
        loadAPIFilters: E,
        setAPIFilterDropdowns: d,
        reloadURLData: T,
        setAPILoading: p
      }
    },
    /* @__PURE__ */ r.createElement(ee.Provider, { value: o }, /* @__PURE__ */ r.createElement("div", { className: te.join(" "), ref: fe, "data-download-id": b }, H), /* @__PURE__ */ r.createElement(Ms, null))
  ));
}
const ea = {
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
}, jl = async (e, t) => {
  if (e.dataUrl && t) {
    const n = await ke(`${e.dataUrl}`);
    return he(n, e.dataDescription);
  }
  return e.formattedData || e.data;
}, Gl = async (e) => {
  let t = e.formattedData || e.data;
  return e.dataUrl && (t = await ke(`${e.dataUrl}`), t = he(t, e.dataDescription)), t;
}, Cu = ({
  configUrl: e,
  config: t,
  isEditor: n,
  isDebug: a
}) => {
  const [o, i] = v.useState(void 0), s = (b) => {
    if (!b.multiDashboards)
      return null;
    const h = It()["cove-tab"];
    return h !== void 0 && Number(h) < b.multiDashboards.length ? Number(h) : 0;
  }, l = (b, h) => {
    const [I, O] = Et(We)(b, h), p = ua(I);
    return { ...We, config: p, filteredData: O, data: h };
  }, u = async () => {
    const b = t || await (await fetch(e)).json(), h = s(b), { newConfig: I, datasets: O } = h !== null ? await m(b, h) : await f(b);
    i(l(I, O));
  };
  v.useEffect(() => {
    u();
  }, []);
  const d = async (b) => {
    let h = { ...b }, I = {};
    return await Promise.all(
      Object.keys(b.datasets).map(async (O) => {
        const p = b.activeDashboard, D = p !== void 0 ? b.multiDashboards[p] : b, c = await jl(b.datasets[O], Tt(D, O));
        I[O] = c;
      })
    ), Ee(h).forEach((O) => {
      const p = I[h.visualizations[O].dataKey];
      p && (h.visualizations[O].formattedData = p);
    }), Object.keys(I).forEach((O) => {
      h.datasets[O].data = I[O];
    }), { newConfig: h, datasets: I };
  }, f = async (b) => {
    let h = { ...ea, ...b };
    if (b.datasets)
      return await d(h);
    {
      const I = h.dataFileName || "backwards-compatibility", O = await Gl(b), p = {};
      if (p[I] = {
        data: O,
        dataDescription: h.dataDescription
      }, h.datasets = p, Ee(h).forEach((g) => {
        const y = { dataKey: I, ...A.pick(h, "dataDescription", "formattedData") };
        h.visualizations[g] = { ...h.visualizations[g], ...y };
      }), h = { ...h, ...{
        data: [],
        dataUrl: "",
        dataFileName: "",
        dataFileSourceType: "",
        dataDescription: {},
        formattedData: []
      } }, h.dashboard.filters) {
        const g = { ...h.dashboard };
        g.sharedFilters || (g.sharedFilters = []);
        const y = g.filters.map((w) => ({ ...w, key: w.label, showDropdown: !0, usedBy: Ee(h) }));
        g.sharedFilters = [...g.sharedFilters, ...y], h.dashboard = { ...g, filters: void 0 };
      }
      const c = { [I]: O };
      return { newConfig: h, datasets: c };
    }
  }, m = async (b, h) => {
    const I = b.multiDashboards[h], O = {
      ...ea,
      ...b,
      ...I,
      multiDashboards: b.multiDashboards,
      activeDashboard: h
    };
    return await d(O);
  };
  return o ? /* @__PURE__ */ r.createElement(Hl, { isEditor: n, isDebug: a, initialState: o }) : /* @__PURE__ */ r.createElement(Ct, null);
};
export {
  pl as C,
  Tu as E,
  Ls as G,
  Cu as M,
  Ms as O,
  ft as a,
  $a as d
};
