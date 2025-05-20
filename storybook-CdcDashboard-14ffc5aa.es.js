import { j as o, F as X, a as f } from "./storybook-jsx-runtime-ea6e0d87.es.js";
import { r as p, R as Pt } from "./storybook-index-f2fed736.es.js";
import { c as ta, A as ra, V as na, a as aa, F as ia, b as oa, r as sa, d as la, C as ln } from "./storybook-ConfigContext-9f571f8e.es.js";
import { i as ua, g as ca } from "./storybook-getViewport-513ec896.es.js";
import { p as un } from "./storybook-index-31bf6905.es.js";
import { f as qe, u as cn, L as ke, b as da, s as fa, c as ha } from "./storybook-useDataVizClasses-2dec1abb.es.js";
import { E as dn, L as mt } from "./storybook-viewports-6b80499f.es.js";
import { D as Fe } from "./storybook-DataTransform-cd90df2e.es.js";
import { a as F } from "./storybook-Icon-e250778e.es.js";
import { D as pa } from "./storybook-DataDesigner-9363c314.es.js";
import { P as Ue } from "./storybook-index-43433e35.es.js";
import { L as Ft } from "./storybook-Loader-0256c39d.es.js";
import { C as nt, F as ga, f as Tt, a as ma, T as Te, S as at } from "./storybook-FootnotesStandAlone-282ea454.es.js";
import { T as k } from "./storybook-Tooltip-5b6ee371.es.js";
import { I as xt } from "./storybook-InputSelect-4074d1ac.es.js";
import { e as va, d as fn, C as hn, A as ya } from "./storybook-CdcMapComponent-92371039.es.js";
import { _ as P } from "./storybook-lodash-a4231e1c.es.js";
import { u as it, g as pn, a as ar, F as ba, b as Wt, c as gn, r as Da, h as mn, d as Be, e as Sa } from "./storybook-Filters-1bcf5dff.es.js";
import { D as Rt, M as ir } from "./storybook-DataTable-8965f731.es.js";
import { F as de } from "./storybook-FilterStyles-fd509eb9.es.js";
import { T as vn } from "./storybook-index-4a64ea6e.es.js";
import { a as wa, b as Ke, c as Ze, d as Ye, e as Xe, A as Je } from "./storybook-Accordion-edcda35b.es.js";
import { a as Ta, D as Ca, C as yn } from "./storybook-CdcChartComponent-5510d983.es.js";
import { C as bn } from "./storybook-CdcDataBite-287ea3b8.es.js";
import { C as Dn } from "./storybook-CdcWaffleChart-dfec46a9.es.js";
import { C as Sn } from "./storybook-CdcMarkupInclude-7997ad11.es.js";
import { I as Oa, a as ze } from "./storybook-editor-f86b5faa.es.js";
import { B as Ea } from "./storybook-Button-f953e457.es.js";
import { c as wn } from "./storybook-coveUpdateWorker-2d39117f.es.js";
import { D as Ia } from "./storybook-DashboardFilters-e10b86fa.es.js";
import { A as _a, a as or, b as sr, c as lr, d as ur } from "./storybook-index-d975883a.es.js";
import { M as Ct } from "./storybook-MultiSelect-2a170cbd.es.js";
import "./storybook-NestedDropdown-92b50717.es.js";
var Tn = p.createContext({
  dragDropManager: void 0
}), fe;
(function(e) {
  e.SOURCE = "SOURCE", e.TARGET = "TARGET";
})(fe || (fe = {}));
function $(e, r) {
  for (var t = arguments.length, n = new Array(t > 2 ? t - 2 : 0), a = 2; a < t; a++)
    n[a - 2] = arguments[a];
  if (process.env.NODE_ENV !== "production" && r === void 0)
    throw new Error("invariant requires an error message argument");
  if (!e) {
    var i;
    if (r === void 0)
      i = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var s = 0;
      i = new Error(r.replace(/%s/g, function() {
        return n[s++];
      })), i.name = "Invariant Violation";
    }
    throw i.framesToPop = 1, i;
  }
}
var Qt = "dnd-core/INIT_COORDS", vt = "dnd-core/BEGIN_DRAG", Kt = "dnd-core/PUBLISH_DRAG_SOURCE", yt = "dnd-core/HOVER", bt = "dnd-core/DROP", Dt = "dnd-core/END_DRAG";
function cr(e, r) {
  return {
    type: Qt,
    payload: {
      sourceClientOffset: r || null,
      clientOffset: e || null
    }
  };
}
function ot(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ot = function(t) {
    return typeof t;
  } : ot = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ot(e);
}
function Na(e, r, t) {
  return r.split(".").reduce(function(n, a) {
    return n && n[a] ? n[a] : t || null;
  }, e);
}
function ka(e, r) {
  return e.filter(function(t) {
    return t !== r;
  });
}
function Cn(e) {
  return ot(e) === "object";
}
function Aa(e, r) {
  var t = /* @__PURE__ */ new Map(), n = function(s) {
    t.set(s, t.has(s) ? t.get(s) + 1 : 1);
  };
  e.forEach(n), r.forEach(n);
  var a = [];
  return t.forEach(function(i, s) {
    i === 1 && a.push(s);
  }), a;
}
function La(e, r) {
  return e.filter(function(t) {
    return r.indexOf(t) > -1;
  });
}
var Pa = {
  type: Qt,
  payload: {
    clientOffset: null,
    sourceClientOffset: null
  }
};
function Fa(e) {
  return function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      publishSource: !0
    }, a = n.publishSource, i = a === void 0 ? !0 : a, s = n.clientOffset, l = n.getSourceClientOffset, u = e.getMonitor(), c = e.getRegistry();
    e.dispatch(cr(s)), xa(t, u, c);
    var h = Ba(t, u);
    if (h === null) {
      e.dispatch(Pa);
      return;
    }
    var d = null;
    if (s) {
      if (!l)
        throw new Error("getSourceClientOffset must be defined");
      Ra(l), d = l(h);
    }
    e.dispatch(cr(s, d));
    var g = c.getSource(h), m = g.beginDrag(u, h);
    if (m != null) {
      Ma(m), c.pinSource(h);
      var T = c.getSourceType(h);
      return {
        type: vt,
        payload: {
          itemType: T,
          item: m,
          sourceId: h,
          clientOffset: s || null,
          sourceClientOffset: d || null,
          isSourcePublic: !!i
        }
      };
    }
  };
}
function xa(e, r, t) {
  $(!r.isDragging(), "Cannot call beginDrag while dragging."), e.forEach(function(n) {
    $(t.getSource(n), "Expected sourceIds to be registered.");
  });
}
function Ra(e) {
  $(typeof e == "function", "When clientOffset is provided, getSourceClientOffset must be a function.");
}
function Ma(e) {
  $(Cn(e), "Item must be an object.");
}
function Ba(e, r) {
  for (var t = null, n = e.length - 1; n >= 0; n--)
    if (r.canDragSource(e[n])) {
      t = e[n];
      break;
    }
  return t;
}
function Va(e) {
  return function() {
    var t = e.getMonitor();
    if (t.isDragging())
      return {
        type: Kt
      };
  };
}
function Mt(e, r) {
  return r === null ? e === null : Array.isArray(e) ? e.some(function(t) {
    return t === r;
  }) : e === r;
}
function $a(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = n.clientOffset;
    Ua(t);
    var i = t.slice(0), s = e.getMonitor(), l = e.getRegistry();
    za(i, s, l);
    var u = s.getItemType();
    return Ha(i, l, u), ja(i, s, l), {
      type: yt,
      payload: {
        targetIds: i,
        clientOffset: a || null
      }
    };
  };
}
function Ua(e) {
  $(Array.isArray(e), "Expected targetIds to be an array.");
}
function za(e, r, t) {
  $(r.isDragging(), "Cannot call hover while not dragging."), $(!r.didDrop(), "Cannot call hover after drop.");
  for (var n = 0; n < e.length; n++) {
    var a = e[n];
    $(e.lastIndexOf(a) === n, "Expected targetIds to be unique in the passed array.");
    var i = t.getTarget(a);
    $(i, "Expected targetIds to be registered.");
  }
}
function Ha(e, r, t) {
  for (var n = e.length - 1; n >= 0; n--) {
    var a = e[n], i = r.getTargetType(a);
    Mt(i, t) || e.splice(n, 1);
  }
}
function ja(e, r, t) {
  e.forEach(function(n) {
    var a = t.getTarget(n);
    a.hover(r, n);
  });
}
function dr(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function fr(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? dr(Object(t), !0).forEach(function(n) {
      Ga(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : dr(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
function Ga(e, r, t) {
  return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function qa(e) {
  return function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = e.getMonitor(), a = e.getRegistry();
    Wa(n);
    var i = Za(n);
    i.forEach(function(s, l) {
      var u = Qa(s, l, a, n), c = {
        type: bt,
        payload: {
          dropResult: fr(fr({}, t), u)
        }
      };
      e.dispatch(c);
    });
  };
}
function Wa(e) {
  $(e.isDragging(), "Cannot call drop while not dragging."), $(!e.didDrop(), "Cannot call drop twice during one drag operation.");
}
function Qa(e, r, t, n) {
  var a = t.getTarget(e), i = a ? a.drop(n, e) : void 0;
  return Ka(i), typeof i > "u" && (i = r === 0 ? {} : n.getDropResult()), i;
}
function Ka(e) {
  $(typeof e > "u" || Cn(e), "Drop result must either be an object or undefined.");
}
function Za(e) {
  var r = e.getTargetIds().filter(e.canDropOnTarget, e);
  return r.reverse(), r;
}
function Ya(e) {
  return function() {
    var t = e.getMonitor(), n = e.getRegistry();
    Xa(t);
    var a = t.getSourceId();
    if (a != null) {
      var i = n.getSource(a, !0);
      i.endDrag(t, a), n.unpinSource();
    }
    return {
      type: Dt
    };
  };
}
function Xa(e) {
  $(e.isDragging(), "Cannot call endDrag while not dragging.");
}
function Ja(e) {
  return {
    beginDrag: Fa(e),
    publishDragSource: Va(e),
    hover: $a(e),
    drop: qa(e),
    endDrag: Ya(e)
  };
}
function ei(e, r) {
  if (!(e instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function hr(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function ti(e, r, t) {
  return r && hr(e.prototype, r), t && hr(e, t), e;
}
function He(e, r, t) {
  return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
var ri = /* @__PURE__ */ function() {
  function e(r, t) {
    var n = this;
    ei(this, e), He(this, "store", void 0), He(this, "monitor", void 0), He(this, "backend", void 0), He(this, "isSetUp", !1), He(this, "handleRefCountChange", function() {
      var a = n.store.getState().refCount > 0;
      n.backend && (a && !n.isSetUp ? (n.backend.setup(), n.isSetUp = !0) : !a && n.isSetUp && (n.backend.teardown(), n.isSetUp = !1));
    }), this.store = r, this.monitor = t, r.subscribe(this.handleRefCountChange);
  }
  return ti(e, [{
    key: "receiveBackend",
    value: function(t) {
      this.backend = t;
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
      var t = this, n = this.store.dispatch;
      function a(s) {
        return function() {
          for (var l = arguments.length, u = new Array(l), c = 0; c < l; c++)
            u[c] = arguments[c];
          var h = s.apply(t, u);
          typeof h < "u" && n(h);
        };
      }
      var i = Ja(this);
      return Object.keys(i).reduce(function(s, l) {
        var u = i[l];
        return s[l] = a(u), s;
      }, {});
    }
  }, {
    key: "dispatch",
    value: function(t) {
      this.store.dispatch(t);
    }
  }]), e;
}(), ni = function(r, t) {
  return r === t;
};
function ai(e, r) {
  return !e && !r ? !0 : !e || !r ? !1 : e.x === r.x && e.y === r.y;
}
function ii(e, r) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ni;
  if (e.length !== r.length)
    return !1;
  for (var n = 0; n < e.length; ++n)
    if (!t(e[n], r[n]))
      return !1;
  return !0;
}
function pr(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function gr(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? pr(Object(t), !0).forEach(function(n) {
      oi(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : pr(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
function oi(e, r, t) {
  return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
var mr = {
  initialSourceClientOffset: null,
  initialClientOffset: null,
  clientOffset: null
};
function si() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : mr, r = arguments.length > 1 ? arguments[1] : void 0, t = r.payload;
  switch (r.type) {
    case Qt:
    case vt:
      return {
        initialSourceClientOffset: t.sourceClientOffset,
        initialClientOffset: t.clientOffset,
        clientOffset: t.clientOffset
      };
    case yt:
      return ai(e.clientOffset, t.clientOffset) ? e : gr(gr({}, e), {}, {
        clientOffset: t.clientOffset
      });
    case Dt:
    case bt:
      return mr;
    default:
      return e;
  }
}
var Zt = "dnd-core/ADD_SOURCE", Yt = "dnd-core/ADD_TARGET", Xt = "dnd-core/REMOVE_SOURCE", St = "dnd-core/REMOVE_TARGET";
function li(e) {
  return {
    type: Zt,
    payload: {
      sourceId: e
    }
  };
}
function ui(e) {
  return {
    type: Yt,
    payload: {
      targetId: e
    }
  };
}
function ci(e) {
  return {
    type: Xt,
    payload: {
      sourceId: e
    }
  };
}
function di(e) {
  return {
    type: St,
    payload: {
      targetId: e
    }
  };
}
function vr(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function ce(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? vr(Object(t), !0).forEach(function(n) {
      fi(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : vr(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
function fi(e, r, t) {
  return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
var hi = {
  itemType: null,
  item: null,
  sourceId: null,
  targetIds: [],
  dropResult: null,
  didDrop: !1,
  isSourcePublic: null
};
function pi() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : hi, r = arguments.length > 1 ? arguments[1] : void 0, t = r.payload;
  switch (r.type) {
    case vt:
      return ce(ce({}, e), {}, {
        itemType: t.itemType,
        item: t.item,
        sourceId: t.sourceId,
        isSourcePublic: t.isSourcePublic,
        dropResult: null,
        didDrop: !1
      });
    case Kt:
      return ce(ce({}, e), {}, {
        isSourcePublic: !0
      });
    case yt:
      return ce(ce({}, e), {}, {
        targetIds: t.targetIds
      });
    case St:
      return e.targetIds.indexOf(t.targetId) === -1 ? e : ce(ce({}, e), {}, {
        targetIds: ka(e.targetIds, t.targetId)
      });
    case bt:
      return ce(ce({}, e), {}, {
        dropResult: t.dropResult,
        didDrop: !0,
        targetIds: []
      });
    case Dt:
      return ce(ce({}, e), {}, {
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
function gi() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, r = arguments.length > 1 ? arguments[1] : void 0;
  switch (r.type) {
    case Zt:
    case Yt:
      return e + 1;
    case Xt:
    case St:
      return e - 1;
    default:
      return e;
  }
}
var dt = [], Jt = [];
dt.__IS_NONE__ = !0;
Jt.__IS_ALL__ = !0;
function mi(e, r) {
  if (e === dt)
    return !1;
  if (e === Jt || typeof r > "u")
    return !0;
  var t = La(r, e);
  return t.length > 0;
}
function vi() {
  var e = arguments.length > 1 ? arguments[1] : void 0;
  switch (e.type) {
    case yt:
      break;
    case Zt:
    case Yt:
    case St:
    case Xt:
      return dt;
    case vt:
    case Kt:
    case Dt:
    case bt:
    default:
      return Jt;
  }
  var r = e.payload, t = r.targetIds, n = t === void 0 ? [] : t, a = r.prevTargetIds, i = a === void 0 ? [] : a, s = Aa(n, i), l = s.length > 0 || !ii(n, i);
  if (!l)
    return dt;
  var u = i[i.length - 1], c = n[n.length - 1];
  return u !== c && (u && s.push(u), c && s.push(c)), s;
}
function yi() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
  return e + 1;
}
function yr(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function br(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? yr(Object(t), !0).forEach(function(n) {
      bi(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : yr(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
function bi(e, r, t) {
  return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function Di() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0;
  return {
    dirtyHandlerIds: vi(e.dirtyHandlerIds, {
      type: r.type,
      payload: br(br({}, r.payload), {}, {
        prevTargetIds: Na(e, "dragOperation.targetIds", [])
      })
    }),
    dragOffset: si(e.dragOffset, r),
    refCount: gi(e.refCount, r),
    dragOperation: pi(e.dragOperation, r),
    stateId: yi(e.stateId)
  };
}
function Si(e, r) {
  return {
    x: e.x + r.x,
    y: e.y + r.y
  };
}
function On(e, r) {
  return {
    x: e.x - r.x,
    y: e.y - r.y
  };
}
function wi(e) {
  var r = e.clientOffset, t = e.initialClientOffset, n = e.initialSourceClientOffset;
  return !r || !t || !n ? null : On(Si(r, n), t);
}
function Ti(e) {
  var r = e.clientOffset, t = e.initialClientOffset;
  return !r || !t ? null : On(r, t);
}
function Ci(e, r) {
  if (!(e instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function Dr(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Oi(e, r, t) {
  return r && Dr(e.prototype, r), t && Dr(e, t), e;
}
function Sr(e, r, t) {
  return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
var Ei = /* @__PURE__ */ function() {
  function e(r, t) {
    Ci(this, e), Sr(this, "store", void 0), Sr(this, "registry", void 0), this.store = r, this.registry = t;
  }
  return Oi(e, [{
    key: "subscribeToStateChange",
    value: function(t) {
      var n = this, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        handlerIds: void 0
      }, i = a.handlerIds;
      $(typeof t == "function", "listener must be a function."), $(typeof i > "u" || Array.isArray(i), "handlerIds, when specified, must be an array of strings.");
      var s = this.store.getState().stateId, l = function() {
        var c = n.store.getState(), h = c.stateId;
        try {
          var d = h === s || h === s + 1 && !mi(c.dirtyHandlerIds, i);
          d || t();
        } finally {
          s = h;
        }
      };
      return this.store.subscribe(l);
    }
  }, {
    key: "subscribeToOffsetChange",
    value: function(t) {
      var n = this;
      $(typeof t == "function", "listener must be a function.");
      var a = this.store.getState().dragOffset, i = function() {
        var l = n.store.getState().dragOffset;
        l !== a && (a = l, t());
      };
      return this.store.subscribe(i);
    }
  }, {
    key: "canDragSource",
    value: function(t) {
      if (!t)
        return !1;
      var n = this.registry.getSource(t);
      return $(n, "Expected to find a valid source. sourceId=".concat(t)), this.isDragging() ? !1 : n.canDrag(this, t);
    }
  }, {
    key: "canDropOnTarget",
    value: function(t) {
      if (!t)
        return !1;
      var n = this.registry.getTarget(t);
      if ($(n, "Expected to find a valid target. targetId=".concat(t)), !this.isDragging() || this.didDrop())
        return !1;
      var a = this.registry.getTargetType(t), i = this.getItemType();
      return Mt(a, i) && n.canDrop(this, t);
    }
  }, {
    key: "isDragging",
    value: function() {
      return !!this.getItemType();
    }
  }, {
    key: "isDraggingSource",
    value: function(t) {
      if (!t)
        return !1;
      var n = this.registry.getSource(t, !0);
      if ($(n, "Expected to find a valid source. sourceId=".concat(t)), !this.isDragging() || !this.isSourcePublic())
        return !1;
      var a = this.registry.getSourceType(t), i = this.getItemType();
      return a !== i ? !1 : n.isDragging(this, t);
    }
  }, {
    key: "isOverTarget",
    value: function(t) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        shallow: !1
      };
      if (!t)
        return !1;
      var a = n.shallow;
      if (!this.isDragging())
        return !1;
      var i = this.registry.getTargetType(t), s = this.getItemType();
      if (s && !Mt(i, s))
        return !1;
      var l = this.getTargetIds();
      if (!l.length)
        return !1;
      var u = l.indexOf(t);
      return a ? u === l.length - 1 : u > -1;
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
      return wi(this.store.getState().dragOffset);
    }
  }, {
    key: "getDifferenceFromInitialOffset",
    value: function() {
      return Ti(this.store.getState().dragOffset);
    }
  }]), e;
}(), Ii = 0;
function _i() {
  return Ii++;
}
function st(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? st = function(t) {
    return typeof t;
  } : st = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, st(e);
}
function Ni(e) {
  $(typeof e.canDrag == "function", "Expected canDrag to be a function."), $(typeof e.beginDrag == "function", "Expected beginDrag to be a function."), $(typeof e.endDrag == "function", "Expected endDrag to be a function.");
}
function ki(e) {
  $(typeof e.canDrop == "function", "Expected canDrop to be a function."), $(typeof e.hover == "function", "Expected hover to be a function."), $(typeof e.drop == "function", "Expected beginDrag to be a function.");
}
function Bt(e, r) {
  if (r && Array.isArray(e)) {
    e.forEach(function(t) {
      return Bt(t, !1);
    });
    return;
  }
  $(typeof e == "string" || st(e) === "symbol", r ? "Type can only be a string, a symbol, or an array of either." : "Type can only be a string or a symbol.");
}
const wr = typeof global < "u" ? global : self, En = wr.MutationObserver || wr.WebKitMutationObserver;
function In(e) {
  return function() {
    const t = setTimeout(a, 0), n = setInterval(a, 50);
    function a() {
      clearTimeout(t), clearInterval(n), e();
    }
  };
}
function Ai(e) {
  let r = 1;
  const t = new En(e), n = document.createTextNode("");
  return t.observe(n, {
    characterData: !0
  }), function() {
    r = -r, n.data = r;
  };
}
const Li = typeof En == "function" ? (
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
  Ai
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
  In
);
class Pi {
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
  enqueueTask(r) {
    const { queue: t, requestFlush: n } = this;
    t.length || (n(), this.flushing = !0), t[t.length] = r;
  }
  constructor() {
    this.queue = [], this.pendingErrors = [], this.flushing = !1, this.index = 0, this.capacity = 1024, this.flush = () => {
      const { queue: r } = this;
      for (; this.index < r.length; ) {
        const t = this.index;
        if (this.index++, r[t].call(), this.index > this.capacity) {
          for (let n = 0, a = r.length - this.index; n < a; n++)
            r[n] = r[n + this.index];
          r.length -= this.index, this.index = 0;
        }
      }
      r.length = 0, this.index = 0, this.flushing = !1;
    }, this.registerPendingError = (r) => {
      this.pendingErrors.push(r), this.requestErrorThrow();
    }, this.requestFlush = Li(this.flush), this.requestErrorThrow = In(() => {
      if (this.pendingErrors.length)
        throw this.pendingErrors.shift();
    });
  }
}
class Fi {
  call() {
    try {
      this.task && this.task();
    } catch (r) {
      this.onError(r);
    } finally {
      this.task = null, this.release(this);
    }
  }
  constructor(r, t) {
    this.onError = r, this.release = t, this.task = null;
  }
}
class xi {
  create(r) {
    const t = this.freeTasks, n = t.length ? t.pop() : new Fi(
      this.onError,
      (a) => t[t.length] = a
    );
    return n.task = r, n;
  }
  constructor(r) {
    this.onError = r, this.freeTasks = [];
  }
}
const _n = new Pi(), Ri = new xi(_n.registerPendingError);
function Mi(e) {
  _n.enqueueTask(Ri.create(e));
}
function Bi(e, r) {
  if (!(e instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function Tr(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Vi(e, r, t) {
  return r && Tr(e.prototype, r), t && Tr(e, t), e;
}
function Re(e, r, t) {
  return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function $i(e, r) {
  return ji(e) || Hi(e, r) || zi(e, r) || Ui();
}
function Ui() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function zi(e, r) {
  if (e) {
    if (typeof e == "string")
      return Cr(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set")
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return Cr(e, r);
  }
}
function Cr(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++)
    n[t] = e[t];
  return n;
}
function Hi(e, r) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var n = [], a = !0, i = !1, s, l;
    try {
      for (t = t.call(e); !(a = (s = t.next()).done) && (n.push(s.value), !(r && n.length === r)); a = !0)
        ;
    } catch (u) {
      i = !0, l = u;
    } finally {
      try {
        !a && t.return != null && t.return();
      } finally {
        if (i)
          throw l;
      }
    }
    return n;
  }
}
function ji(e) {
  if (Array.isArray(e))
    return e;
}
function Gi(e) {
  var r = _i().toString();
  switch (e) {
    case fe.SOURCE:
      return "S".concat(r);
    case fe.TARGET:
      return "T".concat(r);
    default:
      throw new Error("Unknown Handler Role: ".concat(e));
  }
}
function Or(e) {
  switch (e[0]) {
    case "S":
      return fe.SOURCE;
    case "T":
      return fe.TARGET;
    default:
      $(!1, "Cannot parse handler ID: ".concat(e));
  }
}
function Er(e, r) {
  var t = e.entries(), n = !1;
  do {
    var a = t.next(), i = a.done, s = $i(a.value, 2), l = s[1];
    if (l === r)
      return !0;
    n = !!i;
  } while (!n);
  return !1;
}
var qi = /* @__PURE__ */ function() {
  function e(r) {
    Bi(this, e), Re(this, "types", /* @__PURE__ */ new Map()), Re(this, "dragSources", /* @__PURE__ */ new Map()), Re(this, "dropTargets", /* @__PURE__ */ new Map()), Re(this, "pinnedSourceId", null), Re(this, "pinnedSource", null), Re(this, "store", void 0), this.store = r;
  }
  return Vi(e, [{
    key: "addSource",
    value: function(t, n) {
      Bt(t), Ni(n);
      var a = this.addHandler(fe.SOURCE, t, n);
      return this.store.dispatch(li(a)), a;
    }
  }, {
    key: "addTarget",
    value: function(t, n) {
      Bt(t, !0), ki(n);
      var a = this.addHandler(fe.TARGET, t, n);
      return this.store.dispatch(ui(a)), a;
    }
  }, {
    key: "containsHandler",
    value: function(t) {
      return Er(this.dragSources, t) || Er(this.dropTargets, t);
    }
  }, {
    key: "getSource",
    value: function(t) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      $(this.isSourceId(t), "Expected a valid source ID.");
      var a = n && t === this.pinnedSourceId, i = a ? this.pinnedSource : this.dragSources.get(t);
      return i;
    }
  }, {
    key: "getTarget",
    value: function(t) {
      return $(this.isTargetId(t), "Expected a valid target ID."), this.dropTargets.get(t);
    }
  }, {
    key: "getSourceType",
    value: function(t) {
      return $(this.isSourceId(t), "Expected a valid source ID."), this.types.get(t);
    }
  }, {
    key: "getTargetType",
    value: function(t) {
      return $(this.isTargetId(t), "Expected a valid target ID."), this.types.get(t);
    }
  }, {
    key: "isSourceId",
    value: function(t) {
      var n = Or(t);
      return n === fe.SOURCE;
    }
  }, {
    key: "isTargetId",
    value: function(t) {
      var n = Or(t);
      return n === fe.TARGET;
    }
  }, {
    key: "removeSource",
    value: function(t) {
      var n = this;
      $(this.getSource(t), "Expected an existing source."), this.store.dispatch(ci(t)), Mi(function() {
        n.dragSources.delete(t), n.types.delete(t);
      });
    }
  }, {
    key: "removeTarget",
    value: function(t) {
      $(this.getTarget(t), "Expected an existing target."), this.store.dispatch(di(t)), this.dropTargets.delete(t), this.types.delete(t);
    }
  }, {
    key: "pinSource",
    value: function(t) {
      var n = this.getSource(t);
      $(n, "Expected an existing source."), this.pinnedSourceId = t, this.pinnedSource = n;
    }
  }, {
    key: "unpinSource",
    value: function() {
      $(this.pinnedSource, "No source is pinned at the time."), this.pinnedSourceId = null, this.pinnedSource = null;
    }
  }, {
    key: "addHandler",
    value: function(t, n, a) {
      var i = Gi(t);
      return this.types.set(i, n), t === fe.SOURCE ? this.dragSources.set(i, a) : t === fe.TARGET && this.dropTargets.set(i, a), i;
    }
  }]), e;
}();
function Wi(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, a = Qi(n), i = new Ei(a, new qi(a)), s = new ri(a, i), l = e(s, r, t);
  return s.receiveBackend(l), s;
}
function Qi(e) {
  var r = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION__;
  return ta(Di, e && r && r({
    name: "dnd-core",
    instanceId: "dnd-core"
  }));
}
var Ki = ["children"];
function Zi(e, r) {
  return eo(e) || Ji(e, r) || Xi(e, r) || Yi();
}
function Yi() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Xi(e, r) {
  if (e) {
    if (typeof e == "string")
      return Ir(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set")
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return Ir(e, r);
  }
}
function Ir(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++)
    n[t] = e[t];
  return n;
}
function Ji(e, r) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var n = [], a = !0, i = !1, s, l;
    try {
      for (t = t.call(e); !(a = (s = t.next()).done) && (n.push(s.value), !(r && n.length === r)); a = !0)
        ;
    } catch (u) {
      i = !0, l = u;
    } finally {
      try {
        !a && t.return != null && t.return();
      } finally {
        if (i)
          throw l;
      }
    }
    return n;
  }
}
function eo(e) {
  if (Array.isArray(e))
    return e;
}
function to(e, r) {
  if (e == null)
    return {};
  var t = ro(e, r), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(r.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (t[n] = e[n]);
  }
  return t;
}
function ro(e, r) {
  if (e == null)
    return {};
  var t = {}, n = Object.keys(e), a, i;
  for (i = 0; i < n.length; i++)
    a = n[i], !(r.indexOf(a) >= 0) && (t[a] = e[a]);
  return t;
}
var _r = 0, lt = Symbol.for("__REACT_DND_CONTEXT_INSTANCE__"), no = p.memo(function(r) {
  var t = r.children, n = to(r, Ki), a = ao(n), i = Zi(a, 2), s = i[0], l = i[1];
  return p.useEffect(function() {
    if (l) {
      var u = Nn();
      return ++_r, function() {
        --_r === 0 && (u[lt] = null);
      };
    }
  }, []), o(Tn.Provider, Object.assign({
    value: s
  }, {
    children: t
  }), void 0);
});
function ao(e) {
  if ("manager" in e) {
    var r = {
      dragDropManager: e.manager
    };
    return [r, !1];
  }
  var t = io(e.backend, e.context, e.options, e.debugMode), n = !e.context;
  return [t, n];
}
function io(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Nn(), t = arguments.length > 2 ? arguments[2] : void 0, n = arguments.length > 3 ? arguments[3] : void 0, a = r;
  return a[lt] || (a[lt] = {
    dragDropManager: Wi(e, r, t, n)
  }), a[lt];
}
function Nn() {
  return typeof global < "u" ? global : window;
}
function oo(e, r) {
  if (!(e instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function Nr(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function so(e, r, t) {
  return r && Nr(e.prototype, r), t && Nr(e, t), e;
}
function kr(e, r, t) {
  return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
var Ot = !1, Et = !1, lo = /* @__PURE__ */ function() {
  function e(r) {
    oo(this, e), kr(this, "internalMonitor", void 0), kr(this, "sourceId", null), this.internalMonitor = r.getMonitor();
  }
  return so(e, [{
    key: "receiveHandlerId",
    value: function(t) {
      this.sourceId = t;
    }
  }, {
    key: "getHandlerId",
    value: function() {
      return this.sourceId;
    }
  }, {
    key: "canDrag",
    value: function() {
      $(!Ot, "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
      try {
        return Ot = !0, this.internalMonitor.canDragSource(this.sourceId);
      } finally {
        Ot = !1;
      }
    }
  }, {
    key: "isDragging",
    value: function() {
      if (!this.sourceId)
        return !1;
      $(!Et, "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
      try {
        return Et = !0, this.internalMonitor.isDraggingSource(this.sourceId);
      } finally {
        Et = !1;
      }
    }
  }, {
    key: "subscribeToStateChange",
    value: function(t, n) {
      return this.internalMonitor.subscribeToStateChange(t, n);
    }
  }, {
    key: "isDraggingSource",
    value: function(t) {
      return this.internalMonitor.isDraggingSource(t);
    }
  }, {
    key: "isOverTarget",
    value: function(t, n) {
      return this.internalMonitor.isOverTarget(t, n);
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
    value: function(t) {
      return this.internalMonitor.subscribeToOffsetChange(t);
    }
  }, {
    key: "canDragSource",
    value: function(t) {
      return this.internalMonitor.canDragSource(t);
    }
  }, {
    key: "canDropOnTarget",
    value: function(t) {
      return this.internalMonitor.canDropOnTarget(t);
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
function uo(e, r) {
  if (!(e instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function Ar(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function co(e, r, t) {
  return r && Ar(e.prototype, r), t && Ar(e, t), e;
}
function Lr(e, r, t) {
  return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
var It = !1, fo = /* @__PURE__ */ function() {
  function e(r) {
    uo(this, e), Lr(this, "internalMonitor", void 0), Lr(this, "targetId", null), this.internalMonitor = r.getMonitor();
  }
  return co(e, [{
    key: "receiveHandlerId",
    value: function(t) {
      this.targetId = t;
    }
  }, {
    key: "getHandlerId",
    value: function() {
      return this.targetId;
    }
  }, {
    key: "subscribeToStateChange",
    value: function(t, n) {
      return this.internalMonitor.subscribeToStateChange(t, n);
    }
  }, {
    key: "canDrop",
    value: function() {
      if (!this.targetId)
        return !1;
      $(!It, "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");
      try {
        return It = !0, this.internalMonitor.canDropOnTarget(this.targetId);
      } finally {
        It = !1;
      }
    }
  }, {
    key: "isOver",
    value: function(t) {
      return this.targetId ? this.internalMonitor.isOverTarget(this.targetId, t) : !1;
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
function ho(e) {
  if (typeof e.type != "string") {
    var r = e.type.displayName || e.type.name || "the component";
    throw new Error("Only native element nodes can now be passed to React DnD connectors." + "You can either wrap ".concat(r, " into a <div>, or turn it into a ") + "drag source or a drop target itself.");
  }
}
function po(e) {
  return function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    if (!p.isValidElement(r)) {
      var n = r;
      return e(n, t), n;
    }
    var a = r;
    ho(a);
    var i = t ? function(s) {
      return e(s, t);
    } : e;
    return go(a, i);
  };
}
function kn(e) {
  var r = {};
  return Object.keys(e).forEach(function(t) {
    var n = e[t];
    if (t.endsWith("Ref"))
      r[t] = e[t];
    else {
      var a = po(n);
      r[t] = function() {
        return a;
      };
    }
  }), r;
}
function Pr(e, r) {
  typeof e == "function" ? e(r) : e.current = r;
}
function go(e, r) {
  var t = e.ref;
  return $(typeof t != "string", "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"), t ? p.cloneElement(e, {
    ref: function(a) {
      Pr(t, a), Pr(r, a);
    }
  }) : p.cloneElement(e, {
    ref: r
  });
}
function ut(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ut = function(t) {
    return typeof t;
  } : ut = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ut(e);
}
function Vt(e) {
  return (
    // eslint-disable-next-line no-prototype-builtins
    e !== null && ut(e) === "object" && Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function $t(e, r, t, n) {
  var a = t ? t.call(n, e, r) : void 0;
  if (a !== void 0)
    return !!a;
  if (e === r)
    return !0;
  if (typeof e != "object" || !e || typeof r != "object" || !r)
    return !1;
  var i = Object.keys(e), s = Object.keys(r);
  if (i.length !== s.length)
    return !1;
  for (var l = Object.prototype.hasOwnProperty.bind(r), u = 0; u < i.length; u++) {
    var c = i[u];
    if (!l(c))
      return !1;
    var h = e[c], d = r[c];
    if (a = t ? t.call(n, h, d, c) : void 0, a === !1 || a === void 0 && h !== d)
      return !1;
  }
  return !0;
}
function mo(e, r) {
  if (!(e instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function Fr(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function vo(e, r, t) {
  return r && Fr(e.prototype, r), t && Fr(e, t), e;
}
function ne(e, r, t) {
  return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
var yo = /* @__PURE__ */ function() {
  function e(r) {
    var t = this;
    mo(this, e), ne(this, "hooks", kn({
      dragSource: function(a, i) {
        t.clearDragSource(), t.dragSourceOptions = i || null, Vt(a) ? t.dragSourceRef = a : t.dragSourceNode = a, t.reconnectDragSource();
      },
      dragPreview: function(a, i) {
        t.clearDragPreview(), t.dragPreviewOptions = i || null, Vt(a) ? t.dragPreviewRef = a : t.dragPreviewNode = a, t.reconnectDragPreview();
      }
    })), ne(this, "handlerId", null), ne(this, "dragSourceRef", null), ne(this, "dragSourceNode", void 0), ne(this, "dragSourceOptionsInternal", null), ne(this, "dragSourceUnsubscribe", void 0), ne(this, "dragPreviewRef", null), ne(this, "dragPreviewNode", void 0), ne(this, "dragPreviewOptionsInternal", null), ne(this, "dragPreviewUnsubscribe", void 0), ne(this, "lastConnectedHandlerId", null), ne(this, "lastConnectedDragSource", null), ne(this, "lastConnectedDragSourceOptions", null), ne(this, "lastConnectedDragPreview", null), ne(this, "lastConnectedDragPreviewOptions", null), ne(this, "backend", void 0), this.backend = r;
  }
  return vo(e, [{
    key: "receiveHandlerId",
    value: function(t) {
      this.handlerId !== t && (this.handlerId = t, this.reconnect());
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
    set: function(t) {
      this.dragSourceOptionsInternal = t;
    }
  }, {
    key: "dragPreviewOptions",
    get: function() {
      return this.dragPreviewOptionsInternal;
    },
    set: function(t) {
      this.dragPreviewOptionsInternal = t;
    }
  }, {
    key: "reconnect",
    value: function() {
      this.reconnectDragSource(), this.reconnectDragPreview();
    }
  }, {
    key: "reconnectDragSource",
    value: function() {
      var t = this.dragSource, n = this.didHandlerIdChange() || this.didConnectedDragSourceChange() || this.didDragSourceOptionsChange();
      if (n && this.disconnectDragSource(), !!this.handlerId) {
        if (!t) {
          this.lastConnectedDragSource = t;
          return;
        }
        n && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragSource = t, this.lastConnectedDragSourceOptions = this.dragSourceOptions, this.dragSourceUnsubscribe = this.backend.connectDragSource(this.handlerId, t, this.dragSourceOptions));
      }
    }
  }, {
    key: "reconnectDragPreview",
    value: function() {
      var t = this.dragPreview, n = this.didHandlerIdChange() || this.didConnectedDragPreviewChange() || this.didDragPreviewOptionsChange();
      if (n && this.disconnectDragPreview(), !!this.handlerId) {
        if (!t) {
          this.lastConnectedDragPreview = t;
          return;
        }
        n && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragPreview = t, this.lastConnectedDragPreviewOptions = this.dragPreviewOptions, this.dragPreviewUnsubscribe = this.backend.connectDragPreview(this.handlerId, t, this.dragPreviewOptions));
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
      return !$t(this.lastConnectedDragSourceOptions, this.dragSourceOptions);
    }
  }, {
    key: "didDragPreviewOptionsChange",
    value: function() {
      return !$t(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions);
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
function bo(e, r) {
  if (!(e instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function xr(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Do(e, r, t) {
  return r && xr(e.prototype, r), t && xr(e, t), e;
}
function be(e, r, t) {
  return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
var So = /* @__PURE__ */ function() {
  function e(r) {
    var t = this;
    bo(this, e), be(this, "hooks", kn({
      dropTarget: function(a, i) {
        t.clearDropTarget(), t.dropTargetOptions = i, Vt(a) ? t.dropTargetRef = a : t.dropTargetNode = a, t.reconnect();
      }
    })), be(this, "handlerId", null), be(this, "dropTargetRef", null), be(this, "dropTargetNode", void 0), be(this, "dropTargetOptionsInternal", null), be(this, "unsubscribeDropTarget", void 0), be(this, "lastConnectedHandlerId", null), be(this, "lastConnectedDropTarget", null), be(this, "lastConnectedDropTargetOptions", null), be(this, "backend", void 0), this.backend = r;
  }
  return Do(e, [{
    key: "connectTarget",
    get: function() {
      return this.dropTarget;
    }
  }, {
    key: "reconnect",
    value: function() {
      var t = this.didHandlerIdChange() || this.didDropTargetChange() || this.didOptionsChange();
      t && this.disconnectDropTarget();
      var n = this.dropTarget;
      if (this.handlerId) {
        if (!n) {
          this.lastConnectedDropTarget = n;
          return;
        }
        t && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDropTarget = n, this.lastConnectedDropTargetOptions = this.dropTargetOptions, this.unsubscribeDropTarget = this.backend.connectDropTarget(this.handlerId, n, this.dropTargetOptions));
      }
    }
  }, {
    key: "receiveHandlerId",
    value: function(t) {
      t !== this.handlerId && (this.handlerId = t, this.reconnect());
    }
  }, {
    key: "dropTargetOptions",
    get: function() {
      return this.dropTargetOptionsInternal;
    },
    set: function(t) {
      this.dropTargetOptionsInternal = t;
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
      return !$t(this.lastConnectedDropTargetOptions, this.dropTargetOptions);
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
function wo(e, r, t) {
  var n = t.getRegistry(), a = n.addTarget(e, r);
  return [a, function() {
    return n.removeTarget(a);
  }];
}
function To(e, r, t) {
  var n = t.getRegistry(), a = n.addSource(e, r);
  return [a, function() {
    return n.removeSource(a);
  }];
}
var Le = typeof window < "u" ? p.useLayoutEffect : p.useEffect;
function ct(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ct = function(t) {
    return typeof t;
  } : ct = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ct(e);
}
function Co(e, r) {
  if (!(e instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function Rr(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Oo(e, r, t) {
  return r && Rr(e.prototype, r), t && Rr(e, t), e;
}
function _t(e, r, t) {
  return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
var Eo = /* @__PURE__ */ function() {
  function e(r, t, n) {
    Co(this, e), _t(this, "spec", void 0), _t(this, "monitor", void 0), _t(this, "connector", void 0), this.spec = r, this.monitor = t, this.connector = n;
  }
  return Oo(e, [{
    key: "beginDrag",
    value: function() {
      var t, n = this.spec, a = this.monitor, i = null;
      return ct(n.item) === "object" ? i = n.item : typeof n.item == "function" ? i = n.item(a) : i = {}, (t = i) !== null && t !== void 0 ? t : null;
    }
  }, {
    key: "canDrag",
    value: function() {
      var t = this.spec, n = this.monitor;
      return typeof t.canDrag == "boolean" ? t.canDrag : typeof t.canDrag == "function" ? t.canDrag(n) : !0;
    }
  }, {
    key: "isDragging",
    value: function(t, n) {
      var a = this.spec, i = this.monitor, s = a.isDragging;
      return s ? s(i) : n === t.getSourceId();
    }
  }, {
    key: "endDrag",
    value: function() {
      var t = this.spec, n = this.monitor, a = this.connector, i = t.end;
      i && i(n.getItem(), n), a.reconnect();
    }
  }]), e;
}();
function Io(e, r, t) {
  var n = p.useMemo(function() {
    return new Eo(e, r, t);
  }, [r, t]);
  return p.useEffect(function() {
    n.spec = e;
  }, [e]), n;
}
function $e() {
  var e = p.useContext(Tn), r = e.dragDropManager;
  return $(r != null, "Expected drag drop context"), r;
}
function _o(e) {
  return p.useMemo(function() {
    var r = e.type;
    return $(r != null, "spec.type must be defined"), r;
  }, [e]);
}
function No(e, r) {
  return Po(e) || Lo(e, r) || Ao(e, r) || ko();
}
function ko() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ao(e, r) {
  if (e) {
    if (typeof e == "string")
      return Mr(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set")
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return Mr(e, r);
  }
}
function Mr(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++)
    n[t] = e[t];
  return n;
}
function Lo(e, r) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var n = [], a = !0, i = !1, s, l;
    try {
      for (t = t.call(e); !(a = (s = t.next()).done) && (n.push(s.value), !(r && n.length === r)); a = !0)
        ;
    } catch (u) {
      i = !0, l = u;
    } finally {
      try {
        !a && t.return != null && t.return();
      } finally {
        if (i)
          throw l;
      }
    }
    return n;
  }
}
function Po(e) {
  if (Array.isArray(e))
    return e;
}
function Fo(e, r, t) {
  var n = $e(), a = Io(e, r, t), i = _o(e);
  Le(function() {
    if (i != null) {
      var l = To(i, a, n), u = No(l, 2), c = u[0], h = u[1];
      return r.receiveHandlerId(c), t.receiveHandlerId(c), h;
    }
  }, [n, r, t, a, i]);
}
function xo(e) {
  return Vo(e) || Bo(e) || Mo(e) || Ro();
}
function Ro() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Mo(e, r) {
  if (e) {
    if (typeof e == "string")
      return Ut(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set")
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return Ut(e, r);
  }
}
function Bo(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Vo(e) {
  if (Array.isArray(e))
    return Ut(e);
}
function Ut(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++)
    n[t] = e[t];
  return n;
}
function An(e, r) {
  var t = xo(r || []);
  return r == null && typeof e != "function" && t.push(e), p.useMemo(function() {
    return typeof e == "function" ? e() : e;
  }, t);
}
function $o() {
  var e = $e();
  return p.useMemo(function() {
    return new lo(e);
  }, [e]);
}
function Uo(e, r) {
  var t = $e(), n = p.useMemo(function() {
    return new yo(t.getBackend());
  }, [t]);
  return Le(function() {
    return n.dragSourceOptions = e || null, n.reconnect(), function() {
      return n.disconnectDragSource();
    };
  }, [n, e]), Le(function() {
    return n.dragPreviewOptions = r || null, n.reconnect(), function() {
      return n.disconnectDragPreview();
    };
  }, [n, r]), n;
}
function zo(e, r) {
  return qo(e) || Go(e, r) || jo(e, r) || Ho();
}
function Ho() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function jo(e, r) {
  if (e) {
    if (typeof e == "string")
      return Br(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set")
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return Br(e, r);
  }
}
function Br(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++)
    n[t] = e[t];
  return n;
}
function Go(e, r) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var n = [], a = !0, i = !1, s, l;
    try {
      for (t = t.call(e); !(a = (s = t.next()).done) && (n.push(s.value), !(r && n.length === r)); a = !0)
        ;
    } catch (u) {
      i = !0, l = u;
    } finally {
      try {
        !a && t.return != null && t.return();
      } finally {
        if (i)
          throw l;
      }
    }
    return n;
  }
}
function qo(e) {
  if (Array.isArray(e))
    return e;
}
function Wo(e, r, t) {
  var n = p.useState(function() {
    return r(e);
  }), a = zo(n, 2), i = a[0], s = a[1], l = p.useCallback(function() {
    var u = r(e);
    va(i, u) || (s(u), t && t());
  }, [i, e, t]);
  return Le(l), [i, l];
}
function Qo(e, r) {
  return Xo(e) || Yo(e, r) || Zo(e, r) || Ko();
}
function Ko() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Zo(e, r) {
  if (e) {
    if (typeof e == "string")
      return Vr(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set")
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return Vr(e, r);
  }
}
function Vr(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++)
    n[t] = e[t];
  return n;
}
function Yo(e, r) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var n = [], a = !0, i = !1, s, l;
    try {
      for (t = t.call(e); !(a = (s = t.next()).done) && (n.push(s.value), !(r && n.length === r)); a = !0)
        ;
    } catch (u) {
      i = !0, l = u;
    } finally {
      try {
        !a && t.return != null && t.return();
      } finally {
        if (i)
          throw l;
      }
    }
    return n;
  }
}
function Xo(e) {
  if (Array.isArray(e))
    return e;
}
function Jo(e, r, t) {
  var n = Wo(e, r, t), a = Qo(n, 2), i = a[0], s = a[1];
  return Le(function() {
    var u = e.getHandlerId();
    if (u != null)
      return e.subscribeToStateChange(s, {
        handlerIds: [u]
      });
  }, [e, s]), i;
}
function Ln(e, r, t) {
  return Jo(r, e || function() {
    return {};
  }, function() {
    return t.reconnect();
  });
}
function es(e) {
  return p.useMemo(function() {
    return e.hooks.dragSource();
  }, [e]);
}
function ts(e) {
  return p.useMemo(function() {
    return e.hooks.dragPreview();
  }, [e]);
}
function rs(e, r) {
  var t = An(e, r);
  $(!t.begin, "useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");
  var n = $o(), a = Uo(t.options, t.previewOptions);
  return Fo(t, n, a), [Ln(t.collect, n, a), es(a), ts(a)];
}
function ns(e) {
  var r = e.accept;
  return p.useMemo(function() {
    return $(e.accept != null, "accept must be defined"), Array.isArray(r) ? r : [r];
  }, [r]);
}
function as(e, r) {
  if (!(e instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function $r(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function is(e, r, t) {
  return r && $r(e.prototype, r), t && $r(e, t), e;
}
function Ur(e, r, t) {
  return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
var os = /* @__PURE__ */ function() {
  function e(r, t) {
    as(this, e), Ur(this, "spec", void 0), Ur(this, "monitor", void 0), this.spec = r, this.monitor = t;
  }
  return is(e, [{
    key: "canDrop",
    value: function() {
      var t = this.spec, n = this.monitor;
      return t.canDrop ? t.canDrop(n.getItem(), n) : !0;
    }
  }, {
    key: "hover",
    value: function() {
      var t = this.spec, n = this.monitor;
      t.hover && t.hover(n.getItem(), n);
    }
  }, {
    key: "drop",
    value: function() {
      var t = this.spec, n = this.monitor;
      if (t.drop)
        return t.drop(n.getItem(), n);
    }
  }]), e;
}();
function ss(e, r) {
  var t = p.useMemo(function() {
    return new os(e, r);
  }, [r]);
  return p.useEffect(function() {
    t.spec = e;
  }, [e]), t;
}
function ls(e, r) {
  return fs(e) || ds(e, r) || cs(e, r) || us();
}
function us() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function cs(e, r) {
  if (e) {
    if (typeof e == "string")
      return zr(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set")
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return zr(e, r);
  }
}
function zr(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++)
    n[t] = e[t];
  return n;
}
function ds(e, r) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var n = [], a = !0, i = !1, s, l;
    try {
      for (t = t.call(e); !(a = (s = t.next()).done) && (n.push(s.value), !(r && n.length === r)); a = !0)
        ;
    } catch (u) {
      i = !0, l = u;
    } finally {
      try {
        !a && t.return != null && t.return();
      } finally {
        if (i)
          throw l;
      }
    }
    return n;
  }
}
function fs(e) {
  if (Array.isArray(e))
    return e;
}
function hs(e, r, t) {
  var n = $e(), a = ss(e, r), i = ns(e);
  Le(function() {
    var l = wo(i, a, n), u = ls(l, 2), c = u[0], h = u[1];
    return r.receiveHandlerId(c), t.receiveHandlerId(c), h;
  }, [n, r, a, t, i.map(function(s) {
    return s.toString();
  }).join("|")]);
}
function ps() {
  var e = $e();
  return p.useMemo(function() {
    return new fo(e);
  }, [e]);
}
function gs(e) {
  var r = $e(), t = p.useMemo(function() {
    return new So(r.getBackend());
  }, [r]);
  return Le(function() {
    return t.dropTargetOptions = e || null, t.reconnect(), function() {
      return t.disconnectDropTarget();
    };
  }, [e]), t;
}
function ms(e) {
  return p.useMemo(function() {
    return e.hooks.dropTarget();
  }, [e]);
}
function vs(e, r) {
  var t = An(e, r), n = ps(), a = gs(t.options);
  return hs(t, n, a), [Ln(t.collect, n, a), ms(a)];
}
function Pn(e) {
  var r = null, t = function() {
    return r == null && (r = e()), r;
  };
  return t;
}
function ys(e, r) {
  return e.filter(function(t) {
    return t !== r;
  });
}
function bs(e, r) {
  var t = /* @__PURE__ */ new Set(), n = function(s) {
    return t.add(s);
  };
  e.forEach(n), r.forEach(n);
  var a = [];
  return t.forEach(function(i) {
    return a.push(i);
  }), a;
}
function Ds(e, r) {
  if (!(e instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function Hr(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Ss(e, r, t) {
  return r && Hr(e.prototype, r), t && Hr(e, t), e;
}
function jr(e, r, t) {
  return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
var ws = /* @__PURE__ */ function() {
  function e(r) {
    Ds(this, e), jr(this, "entered", []), jr(this, "isNodeInDocument", void 0), this.isNodeInDocument = r;
  }
  return Ss(e, [{
    key: "enter",
    value: function(t) {
      var n = this, a = this.entered.length, i = function(l) {
        return n.isNodeInDocument(l) && (!l.contains || l.contains(t));
      };
      return this.entered = bs(this.entered.filter(i), [t]), a === 0 && this.entered.length > 0;
    }
  }, {
    key: "leave",
    value: function(t) {
      var n = this.entered.length;
      return this.entered = ys(this.entered.filter(this.isNodeInDocument), t), n > 0 && this.entered.length === 0;
    }
  }, {
    key: "reset",
    value: function() {
      this.entered = [];
    }
  }]), e;
}(), Ts = Pn(function() {
  return /firefox/i.test(navigator.userAgent);
}), Fn = Pn(function() {
  return !!window.safari;
});
function Cs(e, r) {
  if (!(e instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function Gr(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Os(e, r, t) {
  return r && Gr(e.prototype, r), t && Gr(e, t), e;
}
function je(e, r, t) {
  return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
var qr = /* @__PURE__ */ function() {
  function e(r, t) {
    Cs(this, e), je(this, "xs", void 0), je(this, "ys", void 0), je(this, "c1s", void 0), je(this, "c2s", void 0), je(this, "c3s", void 0);
    for (var n = r.length, a = [], i = 0; i < n; i++)
      a.push(i);
    a.sort(function(C, E) {
      return r[C] < r[E] ? -1 : 1;
    });
    for (var s = [], l = [], u, c, h = 0; h < n - 1; h++)
      u = r[h + 1] - r[h], c = t[h + 1] - t[h], s.push(u), l.push(c / u);
    for (var d = [l[0]], g = 0; g < s.length - 1; g++) {
      var m = l[g], T = l[g + 1];
      if (m * T <= 0)
        d.push(0);
      else {
        u = s[g];
        var _ = s[g + 1], v = u + _;
        d.push(3 * v / ((v + _) / m + (v + u) / T));
      }
    }
    d.push(l[l.length - 1]);
    for (var y = [], w = [], D, S = 0; S < d.length - 1; S++) {
      D = l[S];
      var O = d[S], I = 1 / s[S], N = O + d[S + 1] - D - D;
      y.push((D - O - N) * I), w.push(N * I * I);
    }
    this.xs = r, this.ys = t, this.c1s = d, this.c2s = y, this.c3s = w;
  }
  return Os(e, [{
    key: "interpolate",
    value: function(t) {
      var n = this.xs, a = this.ys, i = this.c1s, s = this.c2s, l = this.c3s, u = n.length - 1;
      if (t === n[u])
        return a[u];
      for (var c = 0, h = l.length - 1, d; c <= h; ) {
        d = Math.floor(0.5 * (c + h));
        var g = n[d];
        if (g < t)
          c = d + 1;
        else if (g > t)
          h = d - 1;
        else
          return a[d];
      }
      u = Math.max(0, h);
      var m = t - n[u], T = m * m;
      return a[u] + i[u] * m + s[u] * T + l[u] * m * T;
    }
  }]), e;
}(), Es = 1;
function xn(e) {
  var r = e.nodeType === Es ? e : e.parentElement;
  if (!r)
    return null;
  var t = r.getBoundingClientRect(), n = t.top, a = t.left;
  return {
    x: a,
    y: n
  };
}
function et(e) {
  return {
    x: e.clientX,
    y: e.clientY
  };
}
function Is(e) {
  var r;
  return e.nodeName === "IMG" && (Ts() || !((r = document.documentElement) !== null && r !== void 0 && r.contains(e)));
}
function _s(e, r, t, n) {
  var a = e ? r.width : t, i = e ? r.height : n;
  return Fn() && e && (i /= window.devicePixelRatio, a /= window.devicePixelRatio), {
    dragPreviewWidth: a,
    dragPreviewHeight: i
  };
}
function Ns(e, r, t, n, a) {
  var i = Is(r), s = i ? e : r, l = xn(s), u = {
    x: t.x - l.x,
    y: t.y - l.y
  }, c = e.offsetWidth, h = e.offsetHeight, d = n.anchorX, g = n.anchorY, m = _s(i, r, c, h), T = m.dragPreviewWidth, _ = m.dragPreviewHeight, v = function() {
    var N = new qr([0, 0.5, 1], [
      // Dock to the top
      u.y,
      // Align at the center
      u.y / h * _,
      // Dock to the bottom
      u.y + _ - h
    ]), C = N.interpolate(g);
    return Fn() && i && (C += (window.devicePixelRatio - 1) * _), C;
  }, y = function() {
    var N = new qr([0, 0.5, 1], [
      // Dock to the left
      u.x,
      // Align at the center
      u.x / c * T,
      // Dock to the right
      u.x + T - c
    ]);
    return N.interpolate(d);
  }, w = a.offsetX, D = a.offsetY, S = w === 0 || w, O = D === 0 || D;
  return {
    x: S ? w : y(),
    y: O ? D : v()
  };
}
var Rn = "__NATIVE_FILE__", Mn = "__NATIVE_URL__", Bn = "__NATIVE_TEXT__", Vn = "__NATIVE_HTML__";
const Wr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FILE: Rn,
  HTML: Vn,
  TEXT: Bn,
  URL: Mn
}, Symbol.toStringTag, { value: "Module" }));
function Nt(e, r, t) {
  var n = r.reduce(function(a, i) {
    return a || e.getData(i);
  }, "");
  return n ?? t;
}
var Me;
function tt(e, r, t) {
  return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
var zt = (Me = {}, tt(Me, Rn, {
  exposeProperties: {
    files: function(r) {
      return Array.prototype.slice.call(r.files);
    },
    items: function(r) {
      return r.items;
    },
    dataTransfer: function(r) {
      return r;
    }
  },
  matchesTypes: ["Files"]
}), tt(Me, Vn, {
  exposeProperties: {
    html: function(r, t) {
      return Nt(r, t, "");
    },
    dataTransfer: function(r) {
      return r;
    }
  },
  matchesTypes: ["Html", "text/html"]
}), tt(Me, Mn, {
  exposeProperties: {
    urls: function(r, t) {
      return Nt(r, t, "").split(`
`);
    },
    dataTransfer: function(r) {
      return r;
    }
  },
  matchesTypes: ["Url", "text/uri-list"]
}), tt(Me, Bn, {
  exposeProperties: {
    text: function(r, t) {
      return Nt(r, t, "");
    },
    dataTransfer: function(r) {
      return r;
    }
  },
  matchesTypes: ["Text", "text/plain"]
}), Me);
function ks(e, r) {
  if (!(e instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function Qr(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function As(e, r, t) {
  return r && Qr(e.prototype, r), t && Qr(e, t), e;
}
function Kr(e, r, t) {
  return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
var Ls = /* @__PURE__ */ function() {
  function e(r) {
    ks(this, e), Kr(this, "item", void 0), Kr(this, "config", void 0), this.config = r, this.item = {}, this.initializeExposedProperties();
  }
  return As(e, [{
    key: "initializeExposedProperties",
    value: function() {
      var t = this;
      Object.keys(this.config.exposeProperties).forEach(function(n) {
        Object.defineProperty(t.item, n, {
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
    value: function(t) {
      var n = this;
      if (t) {
        var a = {};
        Object.keys(this.config.exposeProperties).forEach(function(i) {
          a[i] = {
            value: n.config.exposeProperties[i](t, n.config.matchesTypes),
            configurable: !0,
            enumerable: !0
          };
        }), Object.defineProperties(this.item, a);
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
    value: function(t, n) {
      return n === t.getSourceId();
    }
  }, {
    key: "endDrag",
    value: function() {
    }
  }]), e;
}();
function Ps(e, r) {
  var t = new Ls(zt[e]);
  return t.loadDataTransfer(r), t;
}
function kt(e) {
  if (!e)
    return null;
  var r = Array.prototype.slice.call(e.types || []);
  return Object.keys(zt).filter(function(t) {
    var n = zt[t].matchesTypes;
    return n.some(function(a) {
      return r.indexOf(a) > -1;
    });
  })[0] || null;
}
function Fs(e, r) {
  if (!(e instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function Zr(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function xs(e, r, t) {
  return r && Zr(e.prototype, r), t && Zr(e, t), e;
}
function At(e, r, t) {
  return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
var Rs = /* @__PURE__ */ function() {
  function e(r, t) {
    Fs(this, e), At(this, "ownerDocument", null), At(this, "globalContext", void 0), At(this, "optionsArgs", void 0), this.globalContext = r, this.optionsArgs = t;
  }
  return xs(e, [{
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
      var t;
      return (t = this.globalContext) !== null && t !== void 0 && t.document ? this.globalContext.document : this.window ? this.window.document : void 0;
    }
  }, {
    key: "rootElement",
    get: function() {
      var t;
      return ((t = this.optionsArgs) === null || t === void 0 ? void 0 : t.rootElement) || this.window;
    }
  }]), e;
}();
function Yr(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function Xr(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Yr(Object(t), !0).forEach(function(n) {
      U(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Yr(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
function Ms(e, r) {
  if (!(e instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function Jr(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Bs(e, r, t) {
  return r && Jr(e.prototype, r), t && Jr(e, t), e;
}
function U(e, r, t) {
  return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
var Vs = /* @__PURE__ */ function() {
  function e(r, t, n) {
    var a = this;
    Ms(this, e), U(this, "options", void 0), U(this, "actions", void 0), U(this, "monitor", void 0), U(this, "registry", void 0), U(this, "enterLeaveCounter", void 0), U(this, "sourcePreviewNodes", /* @__PURE__ */ new Map()), U(this, "sourcePreviewNodeOptions", /* @__PURE__ */ new Map()), U(this, "sourceNodes", /* @__PURE__ */ new Map()), U(this, "sourceNodeOptions", /* @__PURE__ */ new Map()), U(this, "dragStartSourceIds", null), U(this, "dropTargetIds", []), U(this, "dragEnterTargetIds", []), U(this, "currentNativeSource", null), U(this, "currentNativeHandle", null), U(this, "currentDragSourceNode", null), U(this, "altKeyPressed", !1), U(this, "mouseMoveTimeoutTimer", null), U(this, "asyncEndDragFrameId", null), U(this, "dragOverTargetIds", null), U(this, "lastClientOffset", null), U(this, "hoverRafId", null), U(this, "getSourceClientOffset", function(i) {
      var s = a.sourceNodes.get(i);
      return s && xn(s) || null;
    }), U(this, "endDragNativeItem", function() {
      a.isDraggingNativeItem() && (a.actions.endDrag(), a.currentNativeHandle && a.registry.removeSource(a.currentNativeHandle), a.currentNativeHandle = null, a.currentNativeSource = null);
    }), U(this, "isNodeInDocument", function(i) {
      return !!(i && a.document && a.document.body && a.document.body.contains(i));
    }), U(this, "endDragIfSourceWasRemovedFromDOM", function() {
      var i = a.currentDragSourceNode;
      i == null || a.isNodeInDocument(i) || a.clearCurrentDragSourceNode() && a.monitor.isDragging() && a.actions.endDrag();
    }), U(this, "handleTopDragStartCapture", function() {
      a.clearCurrentDragSourceNode(), a.dragStartSourceIds = [];
    }), U(this, "handleTopDragStart", function(i) {
      if (!i.defaultPrevented) {
        var s = a.dragStartSourceIds;
        a.dragStartSourceIds = null;
        var l = et(i);
        a.monitor.isDragging() && a.actions.endDrag(), a.actions.beginDrag(s || [], {
          publishSource: !1,
          getSourceClientOffset: a.getSourceClientOffset,
          clientOffset: l
        });
        var u = i.dataTransfer, c = kt(u);
        if (a.monitor.isDragging()) {
          if (u && typeof u.setDragImage == "function") {
            var h = a.monitor.getSourceId(), d = a.sourceNodes.get(h), g = a.sourcePreviewNodes.get(h) || d;
            if (g) {
              var m = a.getCurrentSourcePreviewNodeOptions(), T = m.anchorX, _ = m.anchorY, v = m.offsetX, y = m.offsetY, w = {
                anchorX: T,
                anchorY: _
              }, D = {
                offsetX: v,
                offsetY: y
              }, S = Ns(d, g, l, w, D);
              u.setDragImage(g, S.x, S.y);
            }
          }
          try {
            u == null || u.setData("application/json", {});
          } catch {
          }
          a.setCurrentDragSourceNode(i.target);
          var O = a.getCurrentSourcePreviewNodeOptions(), I = O.captureDraggingState;
          I ? a.actions.publishDragSource() : setTimeout(function() {
            return a.actions.publishDragSource();
          }, 0);
        } else if (c)
          a.beginDragNativeItem(c);
        else {
          if (u && !u.types && (i.target && !i.target.hasAttribute || !i.target.hasAttribute("draggable")))
            return;
          i.preventDefault();
        }
      }
    }), U(this, "handleTopDragEndCapture", function() {
      a.clearCurrentDragSourceNode() && a.monitor.isDragging() && a.actions.endDrag();
    }), U(this, "handleTopDragEnterCapture", function(i) {
      a.dragEnterTargetIds = [];
      var s = a.enterLeaveCounter.enter(i.target);
      if (!(!s || a.monitor.isDragging())) {
        var l = i.dataTransfer, u = kt(l);
        u && a.beginDragNativeItem(u, l);
      }
    }), U(this, "handleTopDragEnter", function(i) {
      var s = a.dragEnterTargetIds;
      if (a.dragEnterTargetIds = [], !!a.monitor.isDragging()) {
        a.altKeyPressed = i.altKey, s.length > 0 && a.actions.hover(s, {
          clientOffset: et(i)
        });
        var l = s.some(function(u) {
          return a.monitor.canDropOnTarget(u);
        });
        l && (i.preventDefault(), i.dataTransfer && (i.dataTransfer.dropEffect = a.getCurrentDropEffect()));
      }
    }), U(this, "handleTopDragOverCapture", function() {
      a.dragOverTargetIds = [];
    }), U(this, "handleTopDragOver", function(i) {
      var s = a.dragOverTargetIds;
      if (a.dragOverTargetIds = [], !a.monitor.isDragging()) {
        i.preventDefault(), i.dataTransfer && (i.dataTransfer.dropEffect = "none");
        return;
      }
      a.altKeyPressed = i.altKey, a.lastClientOffset = et(i), a.hoverRafId === null && typeof requestAnimationFrame < "u" && (a.hoverRafId = requestAnimationFrame(function() {
        a.monitor.isDragging() && a.actions.hover(s || [], {
          clientOffset: a.lastClientOffset
        }), a.hoverRafId = null;
      }));
      var l = (s || []).some(function(u) {
        return a.monitor.canDropOnTarget(u);
      });
      l ? (i.preventDefault(), i.dataTransfer && (i.dataTransfer.dropEffect = a.getCurrentDropEffect())) : a.isDraggingNativeItem() ? i.preventDefault() : (i.preventDefault(), i.dataTransfer && (i.dataTransfer.dropEffect = "none"));
    }), U(this, "handleTopDragLeaveCapture", function(i) {
      a.isDraggingNativeItem() && i.preventDefault();
      var s = a.enterLeaveCounter.leave(i.target);
      s && a.isDraggingNativeItem() && setTimeout(function() {
        return a.endDragNativeItem();
      }, 0);
    }), U(this, "handleTopDropCapture", function(i) {
      if (a.dropTargetIds = [], a.isDraggingNativeItem()) {
        var s;
        i.preventDefault(), (s = a.currentNativeSource) === null || s === void 0 || s.loadDataTransfer(i.dataTransfer);
      } else
        kt(i.dataTransfer) && i.preventDefault();
      a.enterLeaveCounter.reset();
    }), U(this, "handleTopDrop", function(i) {
      var s = a.dropTargetIds;
      a.dropTargetIds = [], a.actions.hover(s, {
        clientOffset: et(i)
      }), a.actions.drop({
        dropEffect: a.getCurrentDropEffect()
      }), a.isDraggingNativeItem() ? a.endDragNativeItem() : a.monitor.isDragging() && a.actions.endDrag();
    }), U(this, "handleSelectStart", function(i) {
      var s = i.target;
      typeof s.dragDrop == "function" && (s.tagName === "INPUT" || s.tagName === "SELECT" || s.tagName === "TEXTAREA" || s.isContentEditable || (i.preventDefault(), s.dragDrop()));
    }), this.options = new Rs(t, n), this.actions = r.getActions(), this.monitor = r.getMonitor(), this.registry = r.getRegistry(), this.enterLeaveCounter = new ws(this.isNodeInDocument);
  }
  return Bs(e, [{
    key: "profile",
    value: function() {
      var t, n;
      return {
        sourcePreviewNodes: this.sourcePreviewNodes.size,
        sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
        sourceNodeOptions: this.sourceNodeOptions.size,
        sourceNodes: this.sourceNodes.size,
        dragStartSourceIds: ((t = this.dragStartSourceIds) === null || t === void 0 ? void 0 : t.length) || 0,
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
      var t = this.rootElement;
      if (t !== void 0) {
        if (t.__isReactDndBackendSetUp)
          throw new Error("Cannot have two HTML5 backends at the same time.");
        t.__isReactDndBackendSetUp = !0, this.addEventListeners(t);
      }
    }
  }, {
    key: "teardown",
    value: function() {
      var t = this.rootElement;
      if (t !== void 0 && (t.__isReactDndBackendSetUp = !1, this.removeEventListeners(this.rootElement), this.clearCurrentDragSourceNode(), this.asyncEndDragFrameId)) {
        var n;
        (n = this.window) === null || n === void 0 || n.cancelAnimationFrame(this.asyncEndDragFrameId);
      }
    }
  }, {
    key: "connectDragPreview",
    value: function(t, n, a) {
      var i = this;
      return this.sourcePreviewNodeOptions.set(t, a), this.sourcePreviewNodes.set(t, n), function() {
        i.sourcePreviewNodes.delete(t), i.sourcePreviewNodeOptions.delete(t);
      };
    }
  }, {
    key: "connectDragSource",
    value: function(t, n, a) {
      var i = this;
      this.sourceNodes.set(t, n), this.sourceNodeOptions.set(t, a);
      var s = function(c) {
        return i.handleDragStart(c, t);
      }, l = function(c) {
        return i.handleSelectStart(c);
      };
      return n.setAttribute("draggable", "true"), n.addEventListener("dragstart", s), n.addEventListener("selectstart", l), function() {
        i.sourceNodes.delete(t), i.sourceNodeOptions.delete(t), n.removeEventListener("dragstart", s), n.removeEventListener("selectstart", l), n.setAttribute("draggable", "false");
      };
    }
  }, {
    key: "connectDropTarget",
    value: function(t, n) {
      var a = this, i = function(c) {
        return a.handleDragEnter(c, t);
      }, s = function(c) {
        return a.handleDragOver(c, t);
      }, l = function(c) {
        return a.handleDrop(c, t);
      };
      return n.addEventListener("dragenter", i), n.addEventListener("dragover", s), n.addEventListener("drop", l), function() {
        n.removeEventListener("dragenter", i), n.removeEventListener("dragover", s), n.removeEventListener("drop", l);
      };
    }
  }, {
    key: "addEventListeners",
    value: function(t) {
      t.addEventListener && (t.addEventListener("dragstart", this.handleTopDragStart), t.addEventListener("dragstart", this.handleTopDragStartCapture, !0), t.addEventListener("dragend", this.handleTopDragEndCapture, !0), t.addEventListener("dragenter", this.handleTopDragEnter), t.addEventListener("dragenter", this.handleTopDragEnterCapture, !0), t.addEventListener("dragleave", this.handleTopDragLeaveCapture, !0), t.addEventListener("dragover", this.handleTopDragOver), t.addEventListener("dragover", this.handleTopDragOverCapture, !0), t.addEventListener("drop", this.handleTopDrop), t.addEventListener("drop", this.handleTopDropCapture, !0));
    }
  }, {
    key: "removeEventListeners",
    value: function(t) {
      t.removeEventListener && (t.removeEventListener("dragstart", this.handleTopDragStart), t.removeEventListener("dragstart", this.handleTopDragStartCapture, !0), t.removeEventListener("dragend", this.handleTopDragEndCapture, !0), t.removeEventListener("dragenter", this.handleTopDragEnter), t.removeEventListener("dragenter", this.handleTopDragEnterCapture, !0), t.removeEventListener("dragleave", this.handleTopDragLeaveCapture, !0), t.removeEventListener("dragover", this.handleTopDragOver), t.removeEventListener("dragover", this.handleTopDragOverCapture, !0), t.removeEventListener("drop", this.handleTopDrop), t.removeEventListener("drop", this.handleTopDropCapture, !0));
    }
  }, {
    key: "getCurrentSourceNodeOptions",
    value: function() {
      var t = this.monitor.getSourceId(), n = this.sourceNodeOptions.get(t);
      return Xr({
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
      var t = this.monitor.getSourceId(), n = this.sourcePreviewNodeOptions.get(t);
      return Xr({
        anchorX: 0.5,
        anchorY: 0.5,
        captureDraggingState: !1
      }, n || {});
    }
  }, {
    key: "isDraggingNativeItem",
    value: function() {
      var t = this.monitor.getItemType();
      return Object.keys(Wr).some(function(n) {
        return Wr[n] === t;
      });
    }
  }, {
    key: "beginDragNativeItem",
    value: function(t, n) {
      this.clearCurrentDragSourceNode(), this.currentNativeSource = Ps(t, n), this.currentNativeHandle = this.registry.addSource(t, this.currentNativeSource), this.actions.beginDrag([this.currentNativeHandle]);
    }
  }, {
    key: "setCurrentDragSourceNode",
    value: function(t) {
      var n = this;
      this.clearCurrentDragSourceNode(), this.currentDragSourceNode = t;
      var a = 1e3;
      this.mouseMoveTimeoutTimer = setTimeout(function() {
        var i;
        return (i = n.rootElement) === null || i === void 0 ? void 0 : i.addEventListener("mousemove", n.endDragIfSourceWasRemovedFromDOM, !0);
      }, a);
    }
  }, {
    key: "clearCurrentDragSourceNode",
    value: function() {
      if (this.currentDragSourceNode) {
        if (this.currentDragSourceNode = null, this.rootElement) {
          var t;
          (t = this.window) === null || t === void 0 || t.clearTimeout(this.mouseMoveTimeoutTimer || void 0), this.rootElement.removeEventListener("mousemove", this.endDragIfSourceWasRemovedFromDOM, !0);
        }
        return this.mouseMoveTimeoutTimer = null, !0;
      }
      return !1;
    }
  }, {
    key: "handleDragStart",
    value: function(t, n) {
      t.defaultPrevented || (this.dragStartSourceIds || (this.dragStartSourceIds = []), this.dragStartSourceIds.unshift(n));
    }
  }, {
    key: "handleDragEnter",
    value: function(t, n) {
      this.dragEnterTargetIds.unshift(n);
    }
  }, {
    key: "handleDragOver",
    value: function(t, n) {
      this.dragOverTargetIds === null && (this.dragOverTargetIds = []), this.dragOverTargetIds.unshift(n);
    }
  }, {
    key: "handleDrop",
    value: function(t, n) {
      this.dropTargetIds.unshift(n);
    }
  }]), e;
}(), $s = function(r, t, n) {
  return new Vs(r, t, n);
};
const $n = p.createContext({}), De = () => p.useContext($n), Us = ({ children: e }) => {
  var s, l, u;
  const [r, t] = p.useState({}), n = (c, h = !1) => {
    let d = { object: c, show: !0, disableBgClose: h };
    t((g) => ({ ...g, overlay: { ...d } }));
  }, a = (c = !1) => {
    t((h) => ({
      ...h,
      overlay: {
        ...h.overlay,
        show: c
      }
    }));
  }, i = {
    overlay: {
      object: ((s = r.overlay) == null ? void 0 : s.object) || null,
      show: ((l = r.overlay) == null ? void 0 : l.show) || !1,
      disableBgClose: ((u = r.overlay) == null ? void 0 : u.disableBgClose) || !1,
      actions: {
        openOverlay: n,
        toggleOverlay: a
      }
    }
  };
  return /* @__PURE__ */ o($n.Provider, { value: i, children: e });
}, zs = "Dashboard Description", ft = {
  data: {},
  loading: !1,
  filteredData: {},
  preview: !1,
  tabSelected: zs
}, Hs = {
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
  ...ft
}, ie = p.createContext(Hs), pe = p.createContext(() => {
});
const js = ({ disableBgClose: e, children: r, override: t = null }) => {
  let { overlay: n } = De();
  const [a, i] = p.useState(!1), [s, l] = p.useState(null), [u, c] = p.useState(!1), h = t ? t == null ? void 0 : t.show : n == null ? void 0 : n.show;
  return p.useEffect(() => {
    if (h === void 0 || h === !1)
      return;
    document.body.style.overflow = "hidden", i(!0), l("animate-in");
    const d = setTimeout(() => {
      l("show");
    }, 750);
    return () => clearTimeout(d);
  }, [h]), p.useEffect(() => {
    if (h === void 0 || h === !0)
      return;
    l("animate-out");
    const d = setTimeout(() => {
      l(null), i(!1), document.body.style.overflow = null;
    }, 400);
    return () => clearTimeout(d);
  }, [h]), p.useEffect(() => {
    if (u === !1)
      return;
    const d = setTimeout(() => {
      c(!1);
    }, 400);
    return () => clearTimeout(d);
  }, [u]), /* @__PURE__ */ o(X, { children: a && /* @__PURE__ */ f("div", { className: `cove-overlay${s ? " " + s : ""}${u ? " overlay-error" : ""}`, children: [
    /* @__PURE__ */ o("div", { className: "cove-overlay__bg", style: { cursor: e ? "default" : null }, onClick: (d) => e ? c(!0) : n ? n.actions.toggleOverlay(!1) : t ? t.actions.toggleOverlay(!1) : d.preventDefault(), role: "alert" }),
    /* @__PURE__ */ o("div", { className: "cove-overlay__wrapper", children: /* @__PURE__ */ o("div", { className: "cove-overlay__container", children: r }) })
  ] }) });
}, Gs = () => {
  const { overlay: e } = De();
  return /* @__PURE__ */ o(js, { disableBgClose: e.disableBgClose, children: e.object });
}, Ee = {
  "data-bite": /* @__PURE__ */ o(F, { display: "databite", base: !0 }),
  Bar: /* @__PURE__ */ o(F, { display: "chartBar", base: !0 }),
  "Spark Line": /* @__PURE__ */ o(F, { display: "chartLine" }),
  "Bump Chart": /* @__PURE__ */ o(F, { display: "chartLine" }),
  "waffle-chart": /* @__PURE__ */ o(F, { display: "grid", base: !0 }),
  "markup-include": /* @__PURE__ */ o(F, { display: "code", base: !0 }),
  Line: /* @__PURE__ */ o(F, { display: "chartLine", base: !0 }),
  Pie: /* @__PURE__ */ o(F, { display: "chartPie", base: !0 }),
  us: /* @__PURE__ */ o(F, { display: "mapUsa", base: !0 }),
  "us-county": /* @__PURE__ */ o(F, { display: "mapUsa", base: !0 }),
  world: /* @__PURE__ */ o(F, { display: "mapWorld", base: !0 }),
  "single-state": /* @__PURE__ */ o(F, { display: "mapAl", base: !0 }),
  gear: /* @__PURE__ */ o(F, { display: "gear", base: !0 }),
  gearMulti: /* @__PURE__ */ o(F, { display: "gearMulti", base: !0 }),
  tools: /* @__PURE__ */ o(F, { display: "tools", base: !0 }),
  "filtered-text": /* @__PURE__ */ o(F, { display: "filtered-text", base: !0 }),
  dashboardFilters: /* @__PURE__ */ o(F, { display: "dashboardFilters", base: !0 }),
  table: /* @__PURE__ */ o(F, { display: "table", base: !0 }),
  Sankey: /* @__PURE__ */ o(F, { display: "sankey", base: !0 })
}, qs = (e) => {
  const { type: r, visualizationType: t, general: n } = e;
  return t ? Ee[t] : n != null && n.geoType ? n.geoType === "single-state" ? Ee.us : Ee[n.geoType] : Ee[r];
};
const Un = () => null, zn = (e) => e, Hn = () => null, he = ({ fontTheme: e = "dark", headerBgColor: r = "#fff", showDividerTop: t = !0, showDividerBottom: n = !0, showClose: a = !0, children: i, override: s = null }) => {
  let { overlay: l } = De();
  const u = p.Children.toArray(i), c = u.find((m) => (m == null ? void 0 : m.type) === Un), h = u.find((m) => (m == null ? void 0 : m.type) === zn), d = u.find((m) => (m == null ? void 0 : m.type) === Hn), g = (m) => m ? null : "none";
  return /* @__PURE__ */ f("div", { className: `cove-modal cove-modal__theme--${e}`, children: [
    (a || c) && /* @__PURE__ */ f(
      "div",
      {
        className: "cove-modal__header",
        style: {
          backgroundColor: r,
          boxShadow: g(c && t),
          padding: c ? null : "0",
          minHeight: c ? null : "unset"
        },
        children: [
          c && c.props.children,
          a && /* @__PURE__ */ o(
            "button",
            {
              className: "cove-modal--close",
              onClick: (m) => {
                if (s)
                  return s.actions.toggleOverlay(!1);
                if (l)
                  return l == null ? void 0 : l.actions.toggleOverlay(!1);
                m.preventDefault();
              },
              children: /* @__PURE__ */ o(F, { display: "close" })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ o("div", { className: "cove-modal__content", children: h && h.props.children }),
    d && /* @__PURE__ */ o(
      "div",
      {
        className: "cove-modal__footer",
        style: {
          boxShadow: g(n),
          paddingTop: n ? "1rem" : null
        },
        children: d.props.children
      }
    )
  ] });
};
he.Header = Un;
he.Content = zn;
he.Footer = Hn;
he.propTypes = {
  fontTheme: Ue.oneOf(["dark", "light"]),
  headerBgColor: Ue.string,
  showDividerTop: Ue.bool,
  showDividerBottom: Ue.bool,
  showClose: Ue.bool
};
const jn = ({ vizKey: e, rowIndex: r }) => {
  var E;
  const { config: t } = p.useContext(ie), { overlay: n } = De(), a = new Fe(), i = p.useContext(pe), [s, l] = p.useState(!1), [u, c] = p.useState(!e), [h, d] = p.useState(!!t.rows[r].multiVizColumn), [g, m] = p.useState(""), [T, _] = p.useState(!1), v = p.useMemo(() => !!e && !u, [e, u]), y = p.useMemo(() => v ? t.visualizations[e] : t.rows[r], [t.visualizations, t.rows, r, v]), w = async (L) => {
    const { data: R, dataUrl: Z } = t.datasets[L];
    if (!Z)
      return R;
    let z = R;
    const j = Z && !R, te = L !== y.dataKey;
    if (m(""), te || j) {
      _(!0);
      try {
        z = await qe(Z), z = a.autoStandardize(z);
      } catch {
        m("There was an issue loading the data source. Please check the datasource URL and try again.");
      }
      _(!1);
    }
    return z;
  }, D = (L) => {
    i(v ? { type: "UPDATE_VISUALIZATION", payload: { vizKey: e, configureData: L } } : { type: "UPDATE_ROW", payload: { rowIndex: r, rowData: L } });
  }, S = () => {
    t.rows[r].columns.map((R) => R.widget).filter(Boolean).forEach((R) => {
      i({ type: "RESET_VISUALIZATION", payload: { vizKey: R } });
    });
  }, O = async ({ target: { value: L } }) => {
    v || S();
    const R = L === "" ? {} : await w(L);
    D({
      dataDescription: {
        horizontal: !1
      },
      formattedData: void 0,
      dataKey: L,
      data: R
    });
  }, I = async (L, R) => {
    const Z = y.dataKey, z = y.data || await w(Z), j = { ...y.dataDescription, [L]: R }, te = {
      data: z,
      dataDescription: j,
      formattedData: a.developerStandardize(z, j)
    };
    D(te), l(!0);
  }, N = (L) => {
    L !== "" && (i({ type: "UPDATE_ROW", payload: { rowIndex: r, rowData: { multiVizColumn: L } } }), l(!0));
  }, C = (L) => {
    i({ type: "UPDATE_ROW", payload: { rowIndex: r, rowData: { expandCollapseAllButtons: L } } }), l(!0);
  };
  return /* @__PURE__ */ o(he, { children: /* @__PURE__ */ f(he.Content, { children: [
    T && /* @__PURE__ */ o(Ft, { fullScreen: !0 }),
    /* @__PURE__ */ f("div", { className: "dataset-selector-container", children: [
      "Select a dataset: ",
      /* @__PURE__ */ f("select", { className: "dataset-selector", value: y.dataKey || "", onChange: O, children: [
        /* @__PURE__ */ o("option", { value: "", children: "Select a dataset" }),
        t.datasets && Object.keys(t.datasets).map((L) => /* @__PURE__ */ o("option", { children: L }, L))
      ] }),
      e && // only shows for visualizations
      /* @__PURE__ */ o(
        nt,
        {
          label: "Apply To Row",
          value: u,
          updateField: (L, R, Z, z) => {
            c(z), O({ target: { value: y.dataKey } });
          }
        }
      )
    ] }),
    g && /* @__PURE__ */ o("p", { className: "text-danger", children: g }),
    y.dataKey && /* @__PURE__ */ o(
      pa,
      {
        configureData: y,
        visualizationKey: e,
        updateDescriptionProp: I
      }
    ),
    u && y.dataKey ? h ? /* @__PURE__ */ f(X, { children: [
      /* @__PURE__ */ o(
        xt,
        {
          options: Object.keys(((E = t.datasets[y.dataKey]) == null ? void 0 : E.data[0]) || {}),
          value: t.rows[r].multiVizColumn,
          label: "Multi-Visualization Column",
          initial: "--Select--",
          updateField: (L, R, Z, z) => N(z),
          required: !0
        }
      ),
      /* @__PURE__ */ o(
        nt,
        {
          value: t.rows[r].expandCollapseAllButtons,
          label: " Add Expand/Collapse All buttons",
          fieldName: "",
          updateField: (L, R, Z, z) => C(z)
        }
      )
    ] }) : /* @__PURE__ */ o(
      nt,
      {
        label: "Configure Multiple Visualizations",
        value: h,
        tooltip: /* @__PURE__ */ f(k, { style: { textTransform: "none" }, children: [
          /* @__PURE__ */ o(k.Target, { children: /* @__PURE__ */ o(F, { display: "question", style: { marginLeft: "0.5rem" } }) }),
          /* @__PURE__ */ o(k.Content, { children: /* @__PURE__ */ o("p", { children: "You can select a column where for each unique value in the column the configuration for the row will be repeated in to the data preview." }) })
        ] }),
        updateField: (L, R, Z, z) => {
          s && z === !0 && l(!1), d(z);
        }
      }
    ) : /* @__PURE__ */ o(X, {}),
    s && /* @__PURE__ */ o(
      "button",
      {
        style: { margin: "1em", display: "block" },
        className: "cove-button",
        onClick: () => n == null ? void 0 : n.actions.toggleOverlay(),
        children: "Continue"
      }
    )
  ] }) });
}, ht = {
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
  table: "Table",
  "data-table": "Data Table",
  chart: "Chart",
  map: "Map"
};
const ae = ({
  title: e,
  columnData: r,
  widgetConfig: t,
  addVisualization: n,
  type: a,
  widgetInRow: i = !1,
  toggleRow: s = !1
}) => {
  var Z, z;
  const { overlay: l } = De(), { config: u, data: c } = p.useContext(ie), h = p.useContext(pe), [d, g] = p.useState(!1), [m, T] = p.useState(
    (r == null ? void 0 : r.toggleName) || ht[(Z = u == null ? void 0 : u.visualizations[r == null ? void 0 : r.widget]) == null ? void 0 : Z.type] || ""
  ), _ = new Fe(), v = (j, te) => {
    let b = te.getDropResult();
    if (!b)
      return null;
    const { rowIdx: M, colIdx: B } = b;
    if ((t == null ? void 0 : t.rowIdx) !== void 0)
      h({ type: "MOVE_VISUALIZATION", payload: { rowIdx: M, colIdx: B, widget: t } });
    else if (n) {
      const x = n();
      h({ type: "ADD_VISUALIZATION", payload: { newViz: x, rowIdx: M, colIdx: B } });
    }
  }, [{ isDragging: y, ...w }, D] = rs(
    {
      type: "vis-widget",
      end: v,
      collect: (j) => ({
        isDragging: j.isDragging()
      })
    },
    [u.activeDashboard, u.rows, u.dashboard.sharedFilters]
  ), S = () => {
    t && h({
      type: "DELETE_WIDGET",
      payload: { uid: t.uid }
    });
  }, O = (j, te) => {
    const b = new URL(j);
    return b.searchParams.set("$limit", te), b.href.replace(/%24/g, "$");
  }, I = () => {
    var M;
    const j = ((M = u.rows[t.rowIdx]) == null ? void 0 : M.dataKey) || (t == null ? void 0 : t.dataKey), te = u.datasets[j], b = c[j];
    if (j && !(b != null && b.length)) {
      const B = O(te.dataUrl, 100);
      qe(B).then((x) => {
        x.sample = !0, h({ type: "SET_DATA", payload: { ...c, [j]: x } });
      });
    }
  }, N = () => {
    t && (h({
      type: "UPDATE_VISUALIZATION",
      payload: { vizKey: t.uid, configureData: { editing: !0 } }
    }), I());
  };
  let C = !1;
  const E = !!((z = u.rows[t == null ? void 0 : t.rowIdx]) != null && z.dataKey);
  if (E || ["dashboardFilters", "markup-include"].includes(a))
    C = !0;
  else if (t != null && t.formattedData)
    C = !0;
  else if (t != null && t.dataKey && (t != null && t.dataDescription) && u.datasets[t.dataKey]) {
    const j = _.autoStandardize(u.datasets[t.dataKey].data);
    !!_.developerStandardize(j, t.dataDescription) && (C = !0);
  }
  const L = !E && (t == null ? void 0 : t.type) !== "dashboardFilters", R = /* @__PURE__ */ f(
    "div",
    {
      className: `widget ${s ? "d-block widget--toggle" : ""} ${y && "dragging"}`,
      style: { maxHeight: "180px", minHeight: "100%" },
      children: [
        /* @__PURE__ */ o(F, { display: "move", className: "drag-icon" }),
        /* @__PURE__ */ f("div", { className: "widget__content", children: [
          (t == null ? void 0 : t.rowIdx) !== void 0 && /* @__PURE__ */ f("div", { className: "widget-menu", children: [
            C && /* @__PURE__ */ o("button", { title: "Configure Visualization", className: "btn btn-configure", onClick: N, children: Ee.tools }),
            L && /* @__PURE__ */ o(
              "button",
              {
                title: "Configure Data",
                className: "btn btn-configure",
                onClick: () => {
                  l == null || l.actions.openOverlay(
                    /* @__PURE__ */ o(jn, { rowIndex: t.rowIdx, vizKey: t.uid })
                  );
                },
                children: Ee.gear
              }
            ),
            /* @__PURE__ */ o("div", { className: "widget-menu-item", onClick: S, children: /* @__PURE__ */ o(F, { display: "close", base: !0 }) })
          ] }),
          Ee[a],
          /* @__PURE__ */ o("span", { children: ht[a] }),
          /* @__PURE__ */ o("span", { children: e }),
          (t == null ? void 0 : t.newViz) && a !== "dashboardFilters" && /* @__PURE__ */ o("span", { onClick: N, className: "config-needed", children: "Configuration needed" })
        ] })
      ]
    }
  );
  return /* @__PURE__ */ o(X, { children: i && s ? /* @__PURE__ */ f(
    "div",
    {
      ref: D,
      style: {
        display: "flex",
        flexWrap: "wrap",
        opacity: y ? 0.5 : 1,
        width: "100%",
        height: "100%"
      },
      ...w,
      children: [
        /* @__PURE__ */ o("div", { className: "widget__toggle-title", children: /* @__PURE__ */ f("div", { className: "flex", children: [
          d ? /* @__PURE__ */ o(F, { display: "check", className: "widget__edit-title-icon me-1", onClick: () => g(!1) }) : /* @__PURE__ */ o(F, { display: "edit", className: "widget__edit-title-icon me-1", onClick: () => g(!0) }),
          " ",
          d ? /* @__PURE__ */ o(
            "input",
            {
              type: "text",
              value: m,
              style: { fontSize: "12px" },
              onChange: (j) => T(j.target.value),
              onBlur: () => {
                g(!1), h({
                  type: "UPDATE_TOGGLE_NAME",
                  payload: {
                    rowIndex: t.rowIdx,
                    columnIndex: t.colIdx,
                    toggleName: m
                  }
                });
              }
            }
          ) : /* @__PURE__ */ o("span", { children: m })
        ] }) }),
        /* @__PURE__ */ o("br", {}),
        /* @__PURE__ */ o("div", { className: "w-100", style: { minHeight: i && s ? "135px" : "180px" }, children: R })
      ]
    }
  ) : /* @__PURE__ */ o(
    "div",
    {
      ref: D,
      style: { opacity: y ? 0.5 : 1, width: i ? "100%" : "auto", height: "100%" },
      ...w,
      children: R
    }
  ) });
}, Ws = ({ data: e, rowIdx: r, colIdx: t, toggleRow: n }) => {
  var d;
  const { config: a } = p.useContext(ie), [{ isOver: i, canDrop: s }, l] = vs(
    () => ({
      accept: "vis-widget",
      drop: () => ({
        rowIdx: r,
        colIdx: t,
        canDrop: s
      }),
      canDrop: () => !e.widget,
      collect: (g) => ({
        isOver: g.isOver(),
        canDrop: !!g.canDrop()
      })
    }),
    [a.activeDashboard]
  ), u = e.widget ? a == null ? void 0 : a.visualizations[e.widget] : null;
  u && !u.uid && (u.uid = e.widget);
  let c = ["builder-column", "column-size--" + e.width];
  i && s && c.push("column--drop"), u && c.push("column--populated");
  const h = (g) => {
    var m;
    if (g)
      return g.type === "map" ? g.general.title : g.type === "markup-include" ? (m = g.contentEditor) == null ? void 0 : m.title : g.title;
  };
  return /* @__PURE__ */ o("div", { className: c.join(" "), ref: l, children: u ? /* @__PURE__ */ o(
    ae,
    {
      columnData: e,
      title: h(u),
      widgetConfig: { rowIdx: r, colIdx: t, ...u },
      type: u.visualizationType ?? ((d = u.general) == null ? void 0 : d.geoType),
      toggleRow: n,
      widgetInRow: !0
    }
  ) : /* @__PURE__ */ f("p", { className: "builder-column__text", children: [
    "Drag and drop ",
    /* @__PURE__ */ o("br", {}),
    " visualization"
  ] }) });
}, Qs = (e) => /* @__PURE__ */ p.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ p.createElement("path", { d: "M2,16 L22,16 L22,14 L2,14 L2,16 Z M2,11 L22,11 L22,9 L2,9 L2,11 Z M2,4 L2,6 L22,6 L22,4 L2,4 Z" })), Ks = (e) => /* @__PURE__ */ p.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ p.createElement("path", { d: "M22 14L22 16 13 16 13 14 22 14zM11 16L2 16 2 14 11 14 11 16zM22 4L22 6 13 6 13 4 22 4zM11 6L2 6 2 4 11 4 11 6zM22 9L22 11 13 11 13 9 22 9zM11 11L2 11 2 9 11 9 11 11z" })), Zs = (e) => /* @__PURE__ */ p.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ p.createElement("path", { d: "M22,14 L22,16 L17,16 L17,14 L22,14 Z M7,14 L7,16 L2,16 L2,14 L7,14 Z M15,14 L15,16 L9,16 L9,14 L15,14 Z M22,9 L22,11 L17,11 L17,9 L22,9 Z M7,9 L7,11 L2,11 L2,9 L7,9 Z M15,9 L15,11 L9,11 L9,9 L15,9 Z M22,4 L22,6 L17,6 L17,4 L22,4 Z M7,4 L7,6 L2,6 L2,4 L7,4 Z M15,4 L15,6 L9,6 L9,4 L15,4 Z" })), Ys = (e) => /* @__PURE__ */ p.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ p.createElement("path", { d: "M22,14 L22,16 L10,16 L10,14 L22,14 Z M8,14 L8,16 L2,16 L2,14 L8,14 Z M22,9 L22,11 L10,11 L10,9 L22,9 Z M8,9 L8,11 L2,11 L2,9 L8,9 Z M22,4 L22,6 L10,6 L10,4 L22,4 Z M8,4 L8,6 L2,6 L2,4 L8,4 Z" })), Xs = (e) => /* @__PURE__ */ p.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ p.createElement("path", { d: "M22,14 L22,16 L16,16 L16,14 L22,14 Z M14,14 L14,16 L2,16 L2,14 L14,14 Z M22,9 L22,11 L16,11 L16,9 L22,9 Z M14,9 L14,11 L2,11 L2,9 L14,9 Z M22,4 L22,6 L16,6 L16,4 L22,4 Z M14,4 L14,6 L2,6 L2,4 L14,4 Z" })), Js = (e) => /* @__PURE__ */ p.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", height: 24, width: 24, viewBox: "0 0 576 512", ...e }, /* @__PURE__ */ p.createElement("path", { d: "M192 64C86 64 0 150 0 256S86 448 192 448H384c106 0 192-86 192-192s-86-192-192-192H192zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" })), el = ({ rowIdx: e }) => {
  const { config: r } = p.useContext(ie), t = p.useContext(pe), n = P.cloneDeep(r.rows), a = r.rows[e], i = (d) => t({ type: "UPDATE_CONFIG", payload: [d] }), s = p.useMemo(() => a.toggle ? "toggle" : a.columns.reduce((d, g) => (g.width && (d += g.width), d), ""), [a]), l = (d, g = void 0) => {
    const m = P.cloneDeep(n);
    m[e].toggle = g;
    const T = m[e].columns, _ = T.filter((y) => y.widget);
    if (!(_.length > d.length)) {
      {
        const y = T.length > d.length ? _ : T;
        m[e].columns.forEach((w, D) => {
          var S;
          w.toggleName = w.toggleName || ht[(S = r.visualizations[w.widget]) == null ? void 0 : S.type] || void 0;
        }), m[e].columns = d.map((w, D) => {
          const S = y[D];
          return S ? { ...S, width: w } : { width: w };
        });
      }
      i({ ...r, rows: m });
    }
  }, u = (d = "down") => {
    if (e === n.length - 1 && d === "down")
      return;
    let g = d === "down" ? e + 1 : e - 1;
    const m = n[g];
    n[g] = a, n[e] = m, n[g].uuid = Date.now(), n[e].uuid = Date.now(), i({ ...r, rows: n });
    let T = d === "down" ? 202 : -202, _ = d === "down" ? -202 : 202, v = document.querySelector("[data-row-id='" + e + "']"), y = document.querySelector("[data-row-id='" + g + "']");
    v.style.pointerEvents = "none", y.style.pointerEvents = "none", v.style.top = T + "px", y.style.top = _ + "px", setTimeout(() => {
      v.style.transition = "top 500ms cubic-bezier(0.16, 1, 0.3, 1)", y.style.transition = "top 500ms cubic-bezier(0.16, 1, 0.3, 1)", v.style.top = "0", y.style.top = "0";
    }, 0), setTimeout(() => {
      v.setAttribute("style", ""), y.setAttribute("style", "");
    }, 500);
  }, c = () => {
    let d = { ...r.visualizations };
    n[e] && n[e].columns && n[e].columns.length && r.visualizations && n[e].columns.forEach((g) => {
      g.widget && delete d[g.widget];
    }), n.splice(e, 1), i({ ...r, rows: n, visualizations: d });
  };
  return /* @__PURE__ */ f("nav", { className: "row-menu", children: [
    /* @__PURE__ */ o("ul", { className: "row-menu__flyout", children: [
      /* @__PURE__ */ o(
        "li",
        {
          className: s === "12" ? "current row-menu__list--item" : "row-menu__list--item",
          onClick: () => l([12]),
          title: "1 Column",
          children: /* @__PURE__ */ o(Qs, {})
        },
        "12"
      ),
      /* @__PURE__ */ o(
        "li",
        {
          className: s === "66" ? "current row-menu__list--item" : "row-menu__list--item",
          onClick: () => l([6, 6]),
          title: "2 Columns",
          children: /* @__PURE__ */ o(Ks, {})
        },
        "66"
      ),
      /* @__PURE__ */ o(
        "li",
        {
          className: s === "444" ? "current row-menu__list--item" : "row-menu__list--item",
          onClick: () => l([4, 4, 4]),
          title: "3 Columns",
          children: /* @__PURE__ */ o(Zs, {})
        },
        "444"
      ),
      /* @__PURE__ */ o(
        "li",
        {
          className: s === "48" ? "current row-menu__list--item" : "row-menu__list--item",
          onClick: () => l([4, 8]),
          title: "2 Columns",
          children: /* @__PURE__ */ o(Ys, {})
        },
        "48"
      ),
      /* @__PURE__ */ o(
        "li",
        {
          className: s === "84" ? "current row-menu__list--item" : "row-menu__list--item",
          onClick: () => l([8, 4]),
          title: "2 Columns",
          children: /* @__PURE__ */ o(Xs, {})
        },
        "84"
      ),
      /* @__PURE__ */ o(
        "li",
        {
          className: s === "toggle" ? "current row-menu__list--item" : "row-menu__list--item",
          onClick: () => l([12, 12, 12], !0),
          title: "Toggle between up to three visualizations",
          children: /* @__PURE__ */ o(Js, {})
        },
        "toggle"
      )
    ] }),
    /* @__PURE__ */ o("div", { className: "spacer" }),
    /* @__PURE__ */ o(
      "button",
      {
        className: "btn btn-primary row-menu__btn border-0",
        title: "Move Row Up",
        onClick: () => u("up"),
        disabled: e === 0,
        children: /* @__PURE__ */ o(F, { display: "caretUp", color: "#fff", size: 25 })
      }
    ),
    /* @__PURE__ */ o(
      "button",
      {
        className: "btn btn-primary row-menu__btn border-0",
        title: "Move Row Down",
        onClick: () => u("down"),
        disabled: e + 1 === n.length,
        children: /* @__PURE__ */ o(F, { display: "caretDown", color: "#fff", size: 25 })
      }
    ),
    /* @__PURE__ */ o(
      "button",
      {
        className: "btn btn-danger row-menu__btn row-menu__btn--remove border-0",
        title: "Delete Row",
        onClick: c,
        disabled: e === 0 && n.length === 1,
        children: /* @__PURE__ */ o(F, { display: "close", color: "#fff", size: 25 })
      }
    )
  ] });
}, tl = ({ row: e, idx: r, uuid: t }) => {
  const { overlay: n } = De();
  return /* @__PURE__ */ o(X, { children: /* @__PURE__ */ f("div", { className: "builder-row", "data-row-id": r, children: [
    /* @__PURE__ */ o(el, { rowIdx: r }),
    /* @__PURE__ */ f("p", { className: "ml-2 mt-n3", children: [
      "Row - ",
      r + 1
    ] }),
    /* @__PURE__ */ o(
      "button",
      {
        title: "Configure Data",
        className: "btn btn-configure-row",
        onClick: () => {
          n == null || n.actions.openOverlay(/* @__PURE__ */ o(jn, { rowIndex: r }));
        },
        children: Ee.gearMulti
      }
    ),
    /* @__PURE__ */ o("div", { className: "column-container", children: e.columns.filter((a) => a.width).map((a, i) => /* @__PURE__ */ o(
      Ws,
      {
        data: a,
        rowIdx: r,
        colIdx: i,
        toggleRow: e.toggle
      },
      `row-${t}-col-${i}`
    )) })
  ] }) });
}, rl = () => {
  const { config: e } = p.useContext(ie);
  if (!e)
    return null;
  const r = e.rows, t = p.useContext(pe), n = (i) => t({ type: "UPDATE_CONFIG", payload: [i] }), a = () => {
    const i = { columns: [{ width: 12 }] };
    n({
      ...e,
      rows: [...r, i],
      uuid: Date.now()
    });
  };
  return /* @__PURE__ */ f("div", { className: "builder-grid", children: [
    (r || []).map((i, s) => /* @__PURE__ */ o(tl, { row: i, idx: s, uuid: i.uuid }, s)),
    /* @__PURE__ */ o("button", { className: "btn btn-primary col", onClick: a, children: "Add Row" })
  ] });
};
const nl = (e) => /* @__PURE__ */ o(he, { children: /* @__PURE__ */ f(he.Content, { children: [
  /* @__PURE__ */ o("p", { children: "Are you sure you want to delete this dashboard? " }),
  /* @__PURE__ */ o("button", { className: "btn btn-danger", onClick: e, children: "DELETE" })
] }) }), al = ({ name: e, handleClick: r, tabs: t, index: n, active: a }) => {
  const [i, s] = p.useState(!1), l = p.useContext(pe), { overlay: u } = De(), c = p.createRef(), h = (v) => {
    v.stopPropagation();
    const y = c.current.value, w = y === e, D = !y, S = t.includes(y);
    !w && !D && !S && l({ type: "RENAME_DASHBOARD_TAB", payload: { current: e, new: y } }), s(!1);
  }, d = (v) => {
    v.target.className !== "remove" && (a ? s(!0) : r());
  }, g = () => {
    const v = () => {
      l({ type: "REMOVE_MULTIDASHBOARD_AT_INDEX", payload: n }), u == null || u.actions.toggleOverlay(!1);
    };
    u == null || u.actions.openOverlay(nl(v));
  }, m = (v, y) => {
    const w = v + y;
    w > -1 && w <= t.length - 1 && l({ type: "REORDER_MULTIDASHBOARDS", payload: { currentIndex: v, newIndex: v + y } });
  }, T = n !== 0, _ = n <= t.length - 2;
  return /* @__PURE__ */ f("li", { className: "nav-item d-flex mt-0", children: [
    T && i && /* @__PURE__ */ o("button", { className: "border-0", onClick: () => m(n, -1), children: "<" }),
    /* @__PURE__ */ o(
      "div",
      {
        className: `edit nav-link${a ? " active" : ""}`,
        "aria-current": a ? "page" : null,
        onClick: d,
        children: i ? /* @__PURE__ */ f("div", { className: "d-flex", children: [
          /* @__PURE__ */ o("input", { type: "text", defaultValue: e, onBlur: h, ref: c }),
          /* @__PURE__ */ o("button", { className: "btn btn-link save", onClick: h, children: "save" })
        ] }) : /* @__PURE__ */ f(X, { children: [
          e,
          /* @__PURE__ */ o("button", { className: "btn btn-danger border-0 ms-1", onClick: g, children: "X" })
        ] })
      }
    ),
    _ && i && /* @__PURE__ */ o("button", { className: "border-0", onClick: () => m(n, 1), children: ">" })
  ] });
}, il = () => {
  const { config: e } = p.useContext(ie), r = p.useContext(pe), t = p.useMemo(
    () => (e.multiDashboards || []).map(({ label: i }) => i),
    [e.multiDashboards]
  ), n = p.useMemo(() => e.activeDashboard, [e.activeDashboard]), a = (i) => {
    r({ type: "SAVE_CURRENT_CHANGES" }), r({ type: "SWITCH_CONFIG", payload: i });
  };
  return e.multiDashboards ? /* @__PURE__ */ f("ul", { className: "nav nav-tabs multi-config-tabs mb-4", children: [
    t.map((i, s) => /* @__PURE__ */ o(
      al,
      {
        name: i,
        tabs: t,
        index: s,
        handleClick: () => a(s),
        active: s === n
      },
      i + s
    )),
    /* @__PURE__ */ o("li", { className: "nav-item", children: /* @__PURE__ */ o("button", { className: "nav-link add", onClick: () => r({ type: "ADD_NEW_DASHBOARD" }), children: "+" }) })
  ] }) : null;
}, ol = () => {
  const { config: e } = p.useContext(ie), r = p.useContext(pe), t = p.useMemo(
    () => (e.multiDashboards || []).map(({ label: i }) => i),
    [e.multiDashboards]
  ), n = p.useMemo(() => e.activeDashboard, [e.activeDashboard]), a = (i, s) => {
    s.preventDefault(), r({ type: "SWITCH_CONFIG", payload: i }), it("cove-tab", i);
  };
  return e.multiDashboards ? /* @__PURE__ */ o("ul", { className: "nav nav-tabs multi-config-tabs mb-4", children: t.map((i, s) => /* @__PURE__ */ o("li", { className: "nav-item", children: /* @__PURE__ */ o(
    "a",
    {
      className: `nav-link${n === s ? " active" : ""}`,
      "aria-current": n === s ? "page" : null,
      href: "#",
      onClick: (l) => a(s, l),
      children: i
    }
  ) }, i + s)) }) : null;
}, Gn = ({ isEditor: e = !1 }) => e ? /* @__PURE__ */ o(il, {}) : /* @__PURE__ */ o(ol, {}), Lt = (e) => {
  var T, _;
  const r = ["Dashboard Description", "Data Table Settings", "Dashboard Preview"], { visualizationKey: t, subEditor: n } = e, { config: a, setParentConfig: i, tabSelected: s, data: l } = p.useContext(ie);
  if (!a)
    return null;
  const u = p.useContext(pe), c = () => {
    if (!t)
      return;
    const v = P.cloneDeep(a);
    if (v.visualizations[t].editing = !1, u({ type: "SET_CONFIG", payload: v }), Object.values(l).some((y) => y == null ? void 0 : y.sample)) {
      const y = Object.keys(l).reduce((w, D) => {
        var S;
        return (S = l[D]) != null && S.sample ? w[D] = [] : w[D] = l[D], w;
      }, {});
      u({ type: "SET_DATA", payload: y });
    }
  }, h = (v, y, w) => {
    let D = { ...a };
    D[v] || (D[v] = {}), D[v][y] = w, u({ type: "UPDATE_CONFIG", payload: [D] });
  }, d = () => {
    const v = P.cloneDeep(a);
    return delete v.newViz, delete v.runtime, v;
  };
  p.useEffect(() => {
    const v = d(), y = new CustomEvent("updateVizConfig", { detail: JSON.stringify(v) });
    window.dispatchEvent(y), i && i(v);
  }, [a]);
  const g = (v) => {
    const { checked: y } = v.currentTarget;
    y && u({ type: "INITIALIZE_MULTIDASHBOARDS" });
  }, m = !!a.multiDashboards;
  return /* @__PURE__ */ f("div", { "aria-level": 2, role: "heading", className: `editor-heading${n ? " sub-dashboard-viz" : ""}`, children: [
    n ? /* @__PURE__ */ f("div", { className: "heading-1 back-to", onClick: c, style: { cursor: "pointer" }, children: [
      /* @__PURE__ */ o("span", { children: "←" }),
      " Back to Dashboard"
    ] }) : /* @__PURE__ */ f("div", { className: "heading-1", children: [
      "Dashboard Editor",
      " ",
      /* @__PURE__ */ f("span", { className: "small", children: [
        /* @__PURE__ */ o("input", { type: "checkbox", onChange: g, checked: m, disabled: m }),
        " make multidashboard"
      ] }),
      /* @__PURE__ */ o("br", {}),
      /* @__PURE__ */ o(
        "input",
        {
          type: "text",
          placeholder: "Enter Dashboard Name Here",
          defaultValue: (T = a.dashboard) == null ? void 0 : T.title,
          onChange: (v) => h("dashboard", "title", v.target.value)
        }
      )
    ] }),
    !n && /* @__PURE__ */ f("div", { className: "toggle-bar__wrapper", children: [
      /* @__PURE__ */ o(Gn, { isEditor: !0 }),
      /* @__PURE__ */ o("ul", { className: "toggle-bar", children: r.map((v) => /* @__PURE__ */ o(
        "li",
        {
          className: s === v ? "active" : "inactive",
          onClick: () => {
            u({ type: "SET_TAB_SELECTED", payload: v });
          },
          children: v
        },
        v
      )) }),
      /* @__PURE__ */ f("div", { className: "heading-body", children: [
        s === "Dashboard Description" && /* @__PURE__ */ o(
          "input",
          {
            type: "text",
            className: "description-input",
            placeholder: "Type a dashboard description here.",
            defaultValue: (_ = a.dashboard) == null ? void 0 : _.description,
            onChange: (v) => h("dashboard", "description", v.target.value)
          }
        ),
        s === "Data Table Settings" && /* @__PURE__ */ f(X, { children: [
          /* @__PURE__ */ f("div", { className: "wrap", children: [
            /* @__PURE__ */ f("label", { children: [
              /* @__PURE__ */ o(
                "input",
                {
                  type: "checkbox",
                  defaultChecked: a.table.show,
                  onChange: (v) => h("table", "show", v.target.checked)
                }
              ),
              "Show Data Table(s)"
            ] }),
            /* @__PURE__ */ o("br", {}),
            /* @__PURE__ */ f("label", { children: [
              /* @__PURE__ */ o(
                "input",
                {
                  type: "checkbox",
                  defaultChecked: a.table.expanded,
                  onChange: (v) => h("table", "expanded", v.target.checked)
                }
              ),
              "Expanded by Default"
            ] }),
            /* @__PURE__ */ o("br", {})
          ] }),
          /* @__PURE__ */ f("div", { className: "wrap", children: [
            /* @__PURE__ */ f("label", { children: [
              /* @__PURE__ */ o(
                "input",
                {
                  type: "checkbox",
                  defaultChecked: a.table.limitHeight,
                  onChange: (v) => h("table", "limitHeight", v.target.checked)
                }
              ),
              "Limit Table Height"
            ] }),
            a.table.limitHeight && /* @__PURE__ */ o(
              "input",
              {
                className: "table-height-input",
                type: "text",
                placeholder: "Height (px)",
                defaultValue: a.table.height,
                onChange: (v) => h("table", "height", v.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ f("div", { className: "wrap", children: [
            /* @__PURE__ */ f("label", { children: [
              /* @__PURE__ */ o(
                "input",
                {
                  type: "checkbox",
                  defaultChecked: a.table.download,
                  onChange: (v) => h("table", "download", v.target.checked)
                }
              ),
              "Show Download CSV Link"
            ] }),
            /* @__PURE__ */ f("label", { children: [
              /* @__PURE__ */ o(
                "input",
                {
                  type: "checkbox",
                  defaultChecked: a.table.showDownloadUrl,
                  onChange: (v) => h("table", "showDownloadUrl", v.target.checked)
                }
              ),
              "Show URL to Automatically Updated Data"
            ] })
          ] })
        ] })
      ] })
    ] })
  ] });
};
const en = new Fe(), Pe = (e, r) => {
  if (e && r)
    try {
      let t = en.autoStandardize(e);
      return t = en.developerStandardize(e, r), t;
    } catch {
      return e;
    }
  return e;
}, sl = (e) => {
  Object.keys(e.visualizations).forEach((r, t) => {
    const n = e.visualizations[r];
    if (n.dataKey && !n.data) {
      const a = e.datasets[n.dataKey].data;
      e.visualizations[r].data = a, e.visualizations[r].formattedData = Pe(a, n.dataDescription);
    }
  });
}, ll = (e) => {
  e.rows.forEach((r, t) => {
    if (r.dataKey && !r.data) {
      const n = e.datasets[r.dataKey].data;
      e.rows[t].data = n, e.rows[t].formattedData = Pe(n, r.dataDescription);
    }
  });
}, ul = (e) => (sl(e), ll(e), e);
const se = (e, r) => {
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
      n.visualizationType = r;
      break;
    case "map":
      n.general = {}, n.general.geoType = r;
      break;
    case "data-bite":
      n.visualizationType = e;
      break;
    case "table":
      const a = {
        label: "Data Table",
        show: !0,
        showDownloadUrl: !1,
        showVertical: !0,
        expanded: !0,
        collapsible: !0
      };
      n.table = a, n.columns = {}, n.dataFormat = {}, n.visualizationType = e;
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
  const [e, r] = p.useState(!1), { config: t } = p.useContext(ie), n = p.useContext(pe);
  return /* @__PURE__ */ f("div", { className: `visualizations-panel${e ? " advanced-editor" : ""}`, children: [
    /* @__PURE__ */ o("p", { style: { fontSize: "14px" }, children: "Click and drag an item onto the grid to add it to your dashboard." }),
    /* @__PURE__ */ o("span", { className: "subheading-3", children: "Chart" }),
    /* @__PURE__ */ f("div", { className: "drag-grid", children: [
      /* @__PURE__ */ o(ae, { addVisualization: () => se("chart", "Bar"), type: "Bar" }),
      /* @__PURE__ */ o(ae, { addVisualization: () => se("chart", "Line"), type: "Line" }),
      /* @__PURE__ */ o(ae, { addVisualization: () => se("chart", "Pie"), type: "Pie" }),
      /* @__PURE__ */ o(ae, { addVisualization: () => se("chart", "Sankey"), type: "Sankey" })
    ] }),
    /* @__PURE__ */ o("span", { className: "subheading-3", children: "Map" }),
    /* @__PURE__ */ f("div", { className: "drag-grid", children: [
      /* @__PURE__ */ o(ae, { addVisualization: () => se("map", "us"), type: "us" }),
      /* @__PURE__ */ o(ae, { addVisualization: () => se("map", "world"), type: "world" }),
      /* @__PURE__ */ o(ae, { addVisualization: () => se("map", "single-state"), type: "single-state" })
    ] }),
    /* @__PURE__ */ o("span", { className: "subheading-3", children: "Misc." }),
    /* @__PURE__ */ f("div", { className: "drag-grid", children: [
      /* @__PURE__ */ o(ae, { addVisualization: () => se("data-bite", ""), type: "data-bite" }),
      /* @__PURE__ */ o(ae, { addVisualization: () => se("waffle-chart", ""), type: "waffle-chart" }),
      /* @__PURE__ */ o(ae, { addVisualization: () => se("markup-include", ""), type: "markup-include" }),
      /* @__PURE__ */ o(ae, { addVisualization: () => se("filtered-text", ""), type: "filtered-text" }),
      /* @__PURE__ */ o(ae, { addVisualization: () => se("dashboardFilters", ""), type: "dashboardFilters" }),
      /* @__PURE__ */ o(ae, { addVisualization: () => se("table", ""), type: "table" })
    ] }),
    /* @__PURE__ */ o(
      ra,
      {
        loadConfig: (i) => {
          const s = i.multiDashboards ? {
            ...t,
            ...i,
            ...i.multiDashboards[t.activeDashboard],
            activeDashboard: t.activeDashboard
          } : i;
          n({ type: "APPLY_CONFIG", payload: [ul(s)] });
        },
        config: t,
        convertStateToConfig: () => {
        },
        onExpandCollapse: () => {
          r(!e);
        }
      }
    )
  ] });
}, qn = (e, r) => {
  var t;
  if ((t = r.parents) != null && t.length) {
    const n = e.find((a) => r.parents.includes(a.key));
    return n ? 1 + qn(e, n) : 1;
  } else
    return 1;
};
function dl(e) {
  let r = 1;
  return e.forEach((t) => {
    t.tier = qn(e, t), t.tier > r && (r = t.tier);
  }), r;
}
function tn(e = [], r, t) {
  const n = P.filter(r, (a) => {
    var i;
    return a.resetLabel === a.active ? (i = a.values) == null ? void 0 : i.includes(a.resetLabel) : !0;
  });
  return e.filter((a) => !n.find((s) => {
    var d;
    const l = a[s.columnName], u = s.queuedActive || s.filterStyle === de.nestedDropdown ? [s.active, (d = s.subGrouping) == null ? void 0 : d.active] : s.active;
    let c = !0;
    if (Array.isArray(u) ? c = !u.includes(l) : c = u && l != u, s.filterStyle === "nested-dropdown" && s.subGrouping && s.active === l && c === !1) {
      const g = s.subGrouping.active, m = a[s.subGrouping.columnName];
      c = g && m !== g;
    }
    const h = s.tier === t;
    if (s.type !== "urlfilter" && h && c)
      return !0;
  }));
}
const Ve = (e, r) => {
  const t = dl(e);
  for (let n = 0; n < t; n++) {
    const a = n === t - 1, i = tn(r, e, n + 1);
    if (a)
      return tn(i, e, t - 1);
  }
}, fl = (e, r) => {
  const t = [];
  return Object.keys(r).forEach((n) => {
    var a;
    (a = r[n]) == null || a.forEach((i) => {
      const s = i[e];
      s && !t.includes(s) && t.push(s);
    });
  }), t;
}, Ae = (e) => Object.keys((e == null ? void 0 : e.visualizations) || {}), er = (e) => e.reduce((r, t, n) => {
  var a;
  return (a = t.columns) == null || a.forEach((i, s) => {
    i.widget !== void 0 && (r[i.widget] = { row: n, column: s });
  }), r;
}, {}), Ht = (e) => (r, t) => {
  let n = {}, a = Ae(r);
  const i = er(r.rows);
  return r.dashboard.sharedFilters && (r.dashboard.sharedFilters.forEach((s, l) => {
    const u = !!a.find((g) => g === s.setBy), c = r.dashboard.sharedFilters[l], h = (g) => {
      if (c.values = g, g.length > 0) {
        const m = c.pivot ? c.values : c.values[0], T = pn(c);
        T ? c.active = T : c.active = c.active || m;
      }
    }, d = fl(s.columnName, t || e.data);
    u ? (c.order === "asc" && d.sort(), c.order === "desc" && d.sort().reverse(), h(d)) : (!s.values || s.values.length === 0) && s.showDropdown && h(d);
  }), a.forEach((s) => {
    var c;
    const l = i[s];
    if ((c = r.rows[l]) != null && c.datakey)
      return;
    const u = r.dashboard.sharedFilters.filter(
      (h) => h.usedBy && h.usedBy.indexOf(s) !== -1
    );
    if (u.length > 0) {
      const h = r.visualizations[s], d = r.datasets[h.dataKey], m = Pe(
        (d == null ? void 0 : d.data) || h.data,
        h.dataDescription
      ) || (t || e.data)[h.dataKey];
      n[s] = Ve(u, m);
    }
  }), r.rows.forEach((s, l) => {
    const u = r.dashboard.sharedFilters.filter(
      (c) => c.usedBy && c.usedBy.indexOf(l) !== -1
    );
    if (u.length > 0) {
      const h = Pe(s.data, s.dataDescription) || (t || e.data)[l];
      n[l] = Ve(u, h);
    }
  })), r.runtime = {}, [r, n];
}, hl = () => ({
  dashboard: { sharedFilters: [] },
  rows: [{ columns: [{ width: 12 }] }],
  visualizations: {},
  table: {
    label: "Data Table",
    show: !1,
    showDownloadUrl: !1,
    showVertical: !0
  }
}), pl = (e, r) => {
  switch (r.type) {
    case "ADD_NEW_DASHBOARD": {
      const t = e.config.multiDashboards, n = "New Dashboard " + (t.length + 1), a = [...t, { ...hl(), label: n }];
      return Ge(e, a);
    }
    case "UPDATE_CONFIG": {
      const [t, n] = Ht(e)(...r.payload);
      return { ...e, config: me(t, e.config.activeDashboard), filteredData: n };
    }
    case "APPLY_CONFIG": {
      const [t, n] = Ht(e)(...r.payload), a = [...Object.values(t.visualizations), ...t.rows].map((i) => i.dataKey).reduce((i, s) => {
        var u;
        const l = e.data[s] || ((u = e.config.datasets[s]) == null ? void 0 : u.data);
        return l && (i[s] = l), i;
      }, {});
      return { ...ft, config: me(t, e.config.activeDashboard), filteredData: n, data: a };
    }
    case "SET_CONFIG":
      return r.payload.activeDashboard === void 0 || e.config.activeDashboard === r.payload.activeDashboard ? {
        ...e,
        config: me({ ...e.config, ...r.payload }, r.payload.activeDashboard)
      } : e;
    case "SET_DATA":
      return { ...e, data: r.payload };
    case "SET_FILTERED_DATA":
      return { ...e, filteredData: r.payload };
    case "SET_LOADING":
      return { ...e, loading: r.payload };
    case "SET_PREVIEW":
      return { ...e, preview: r.payload };
    case "SET_SHARED_FILTERS": {
      const t = r.payload, n = { ...e.config.dashboard, sharedFilters: t };
      return {
        ...e,
        config: me({ ...e.config, dashboard: n }, e.config.activeDashboard)
      };
    }
    case "SET_TAB_SELECTED":
      return { ...e, tabSelected: r.payload };
    case "REMOVE_MULTIDASHBOARD_AT_INDEX": {
      const t = [...e.config.multiDashboards];
      P.remove(t, (a, i) => i === r.payload);
      const n = {
        ...e.config,
        multiDashboards: t,
        ...t[0],
        activeDashboard: 0
      };
      return t.length === 0 ? { ...e, config: P.omit(e.config, "multiDashboards") } : Ge({ ...e, config: n }, t);
    }
    case "RENAME_DASHBOARD_TAB": {
      const t = e.config.multiDashboards.map((a) => (a.label === r.payload.current && (a.label = r.payload.new), a)), n = { ...e.config, label: r.payload.new };
      return Ge({ ...e, newConfig: n }, t);
    }
    case "REORDER_MULTIDASHBOARDS": {
      const { newIndex: t, currentIndex: n } = r.payload, a = [...e.config.multiDashboards];
      a.splice(t, 0, a.splice(n, 1)[0]);
      const i = { ...e.config, activeDashboard: t };
      return Ge({ ...e, config: i }, a);
    }
    case "SAVE_CURRENT_CHANGES": {
      const t = e.config.activeDashboard, n = [...e.config.multiDashboards], a = n[t].label, i = P.pick(e.config, ["dashboard", "visualizations", "rows"]);
      n[t] = { ...i, label: a };
      const s = me(e.config, t);
      return { ...e, config: s };
    }
    case "INITIALIZE_MULTIDASHBOARDS": {
      const t = "New Dashboard 1", a = [{ ...P.pick(e.config, ["dashboard", "visualizations", "rows"]), label: t }], i = { ...e.config, activeDashboard: 0 };
      return Ge({ ...e, config: i }, a);
    }
    case "SWITCH_CONFIG": {
      const t = r.payload, n = e.config.multiDashboards[t], a = P.cloneDeep(e.data);
      return { ...e, data: a, config: { ...e.config, ...n, activeDashboard: t } };
    }
    case "TOGGLE_ROW": {
      const { rowIndex: t, colIndex: n } = r.payload, a = e.config.rows.map((i, s) => {
        if (s === t) {
          const l = i.columns.map((u, c) => ({ ...u, hide: c === n }));
          return { ...i, columns: l };
        }
        return i;
      });
      return { ...e, config: { ...e.config, rows: a } };
    }
    case "ADD_VISUALIZATION": {
      const { newViz: t, rowIdx: n, colIdx: a } = r.payload, i = t.uid, s = P.cloneDeep(e.config.rows);
      return s[n].columns[a].widget = i, {
        ...e,
        config: me(
          { ...e.config, visualizations: { ...e.config.visualizations, [i]: t }, rows: s },
          e.config.activeDashboard
        )
      };
    }
    case "MOVE_VISUALIZATION": {
      const { rowIdx: t, colIdx: n, widget: a } = r.payload, i = P.cloneDeep(e.config.rows);
      return i[a.rowIdx].columns[a.colIdx].widget = null, i[t].columns[n].widget = a.uid, {
        ...e,
        config: me({ ...e.config, rows: i }, e.config.activeDashboard)
      };
    }
    case "RESET_VISUALIZATION": {
      const { vizKey: t } = r.payload, n = { ...e.config.visualizations[t] };
      return delete n.data, delete n.dataKey, delete n.dataDescription, delete n.formattedData, {
        ...e,
        config: me(
          { ...e.config, visualizations: { ...e.config.visualizations, [t]: n } },
          e.config.activeDashboard
        )
      };
    }
    case "UPDATE_VISUALIZATION": {
      const { vizKey: t, configureData: n } = r.payload, a = { ...e.config.visualizations[t], ...n };
      return {
        ...e,
        config: me(
          { ...e.config, visualizations: { ...e.config.visualizations, [t]: a } },
          e.config.activeDashboard
        )
      };
    }
    case "UPDATE_ROW": {
      const { rowIndex: t, rowData: n } = r.payload, a = e.config.rows.map((i, s) => s === t ? { ...i, ...n } : i);
      return { ...e, config: me({ ...e.config, rows: a }, e.config.activeDashboard) };
    }
    case "DELETE_WIDGET": {
      const { uid: t } = r.payload, n = P.cloneDeep(e.config.rows), a = P.cloneDeep(e.config.visualizations);
      delete a[t];
      const i = P.cloneDeep(e.config.dashboard.sharedFilters);
      i && i.length > 0 && i.forEach((l) => {
        l.usedBy && l.usedBy.indexOf(t) !== -1 && l.usedBy.splice(l.usedBy.indexOf(t), 1);
      });
      const s = P.map(n, (l) => ({
        ...l,
        columns: P.filter(l.columns, (u) => u.widget !== t)
      }));
      return {
        ...e,
        config: me(
          {
            ...e.config,
            dashboard: { ...e.config.dashboard, sharedFilters: i },
            visualizations: a,
            rows: s
          },
          e.config.activeDashboard
        )
      };
    }
    case "UPDATE_TOGGLE_NAME": {
      const { rowIndex: t, columnIndex: n, toggleName: a } = r.payload, i = e.config.rows.map((s, l) => {
        if (l === t) {
          const u = s.columns.map((c, h) => ({
            ...c,
            toggleName: h === n ? a : c.toggleName
          }));
          return { ...s, columns: u };
        }
        return s;
      });
      return { ...e, config: { ...e.config, rows: i } };
    }
    default:
      return e;
  }
}, me = (e, r) => {
  if (r === void 0 || !e.multiDashboards)
    return e;
  const t = [...e.multiDashboards], n = t[r].label, a = P.pick(e, ["dashboard", "visualizations", "rows"]);
  return t[r] = { ...a, label: n }, { ...e, multiDashboards: t };
}, Ge = (e, r) => ({
  ...e,
  config: { ...e.config, multiDashboards: r }
}), gl = fn(pl), ml = (e, r) => {
  switch (r.type) {
    case "ADD_ERROR_MESSAGE": {
      const t = r.payload;
      return [...e, t];
    }
    case "DISMISS_ERROR_MESSAGE": {
      const t = [...e];
      return P.remove(t, (n, a) => a === r.payload), t;
    }
  }
}, vl = fn(ml);
const yl = ({ children: e, visualizationKey: r, visualizationConfig: t, type: n, component: a, updateConfig: i, viewport: s }) => {
  const [l, u] = Pt.useState(!0);
  return /* @__PURE__ */ o(X, { children: /* @__PURE__ */ f("div", { className: "editor-wrapper", children: [
    /* @__PURE__ */ o("button", { className: `editor-toggle ${l ? "" : "collapsed"}`, title: l ? "Collapse Editor" : "Expand Editor", onClick: () => u(!l) }),
    /* @__PURE__ */ f("section", { className: `${l ? "" : "hidden"} editor-panel cove`, children: [
      /* @__PURE__ */ f("div", { "aria-level": 2, role: "heading", className: "heading-2", children: [
        "Configure ",
        n
      ] }),
      /* @__PURE__ */ o("section", { children: e })
    ] }),
    /* @__PURE__ */ o("div", { className: "preview-wrapper", children: /* @__PURE__ */ o(a, { visualizationKey: r, config: t, updateConfig: i, configUrl: void 0, setEditing: void 0, hostname: void 0, viewport: s }) })
  ] }) });
}, bl = ({ config: e, updateConfig: r, datasets: t }) => {
  var s;
  const n = p.useMemo(() => cn(e, r), [JSON.stringify(e)]), a = (l) => {
    const u = P.cloneDeep(e.columns);
    delete u[l], r({
      ...e,
      columns: u
    });
  }, i = Object.keys(((s = e.originalFormattedData) == null ? void 0 : s[0]) || {});
  return /* @__PURE__ */ f(wa, { allowZeroExpanded: !0, children: [
    /* @__PURE__ */ f(Ke, { children: [
      /* @__PURE__ */ o(Ze, { children: /* @__PURE__ */ o(Ye, { children: "Filters" }) }),
      /* @__PURE__ */ o(Xe, { children: /* @__PURE__ */ o(
        na,
        {
          config: e,
          updateField: n,
          rawData: e.originalFormattedData,
          hasFootnotes: !0
        }
      ) })
    ] }),
    /* @__PURE__ */ f(Ke, { children: [
      /* @__PURE__ */ o(Ze, { children: /* @__PURE__ */ o(Ye, { children: "Columns" }) }),
      /* @__PURE__ */ o(Xe, { children: /* @__PURE__ */ o(Ta, { config: e, updateField: n, deleteColumn: a }) })
    ] }),
    /* @__PURE__ */ f(Ke, { children: [
      /* @__PURE__ */ o(Ze, { children: /* @__PURE__ */ o(Ye, { children: "Data Table" }) }),
      /* @__PURE__ */ o(Xe, { children: /* @__PURE__ */ o(Ca, { config: e, columns: i, updateField: n, isDashboard: !0 }) })
    ] }),
    /* @__PURE__ */ f(Ke, { children: [
      /* @__PURE__ */ o(Ze, { children: /* @__PURE__ */ o(Ye, { children: "Footnotes" }) }),
      /* @__PURE__ */ o(Xe, { children: /* @__PURE__ */ o(ga, { config: e, updateField: n, datasets: t }) })
    ] })
  ] });
}, tr = ({
  visualizationKey: e,
  config: r,
  updateConfig: t,
  viewport: n,
  isEditor: a,
  datasets: i
}) => {
  var c;
  const [s, l] = p.useState(
    Tt(r.filters, r.formattedData || r.data)
  );
  p.useEffect(() => {
    var d;
    const h = ar(r.filters, r.data);
    l(Tt(h, ((d = r == null ? void 0 : r.formattedData) == null ? void 0 : d.length) > 0 ? r.formattedData : r.data));
  }, [r.filters]);
  const u = (h) => {
    var g;
    const d = ar(h, r.data);
    t({ ...r, filters: d }), l(Tt(d, ((g = r == null ? void 0 : r.formattedData) == null ? void 0 : g.length) > 0 ? r.formattedData : r.data));
  };
  return a ? /* @__PURE__ */ o(
    yl,
    {
      component: tr,
      visualizationKey: e,
      visualizationConfig: r,
      updateConfig: t,
      type: "Table",
      viewport: n,
      children: /* @__PURE__ */ o(bl, { config: r, updateConfig: t, datasets: i }, e)
    }
  ) : /* @__PURE__ */ f(X, { children: [
    /* @__PURE__ */ o(ba, { config: r, setFilters: u, excludedData: r.formattedData }),
    /* @__PURE__ */ o(
      Rt,
      {
        expandDataTable: r.table.expanded,
        config: r,
        rawData: r.data,
        runtimeData: s,
        tabbingId: e,
        tableTitle: r.table.label,
        viewport: n || "lg"
      }
    ),
    /* @__PURE__ */ o(ma, { config: r.footnotes, filters: (c = r.filters) == null ? void 0 : c.filter((h) => h.filterFootnotes) })
  ] });
};
const Dl = ({ active: e, row: r, visualizations: t, setToggled: n, text: a }) => {
  const i = (s, l = null) => {
    l != null && l.key && l.key !== "Enter" || n(s);
  };
  return /* @__PURE__ */ o("div", { className: "toggle-component", children: r.columns.map((s, l) => {
    if (!s.widget)
      return null;
    const u = t[s.widget].type, c = s.toggleName ? s.toggleName : ht[u], h = l === e;
    return /* @__PURE__ */ f(
      "div",
      {
        role: "radio",
        className: h ? "selected" : "",
        onClick: () => i(l),
        onKeyUp: (d) => i(l, d),
        "aria-checked": h,
        tabIndex: 0,
        "aria-label": `Toggle ${u}`,
        children: [
          qs(t[s.widget]),
          " ",
          /* @__PURE__ */ o("span", { children: c })
        ]
      },
      l
    );
  }) });
}, Wn = p.createContext({}), rt = {
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
}, Sl = [
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
], wl = p.memo((e) => {
  const { config: r, updateConfig: t, loading: n, stateData: a, setParentConfig: i, isDashboard: s } = p.useContext(Wn), [l, u] = p.useState(!0), [c, h] = p.useState(!1), d = cn(r, t, !0), g = (I) => {
    let N = [...r.filters];
    N.splice(I, 1), t({ ...r, filters: N });
  }, m = (I, N, C) => {
    let E = [...r.filters];
    E[N][I] = C, t({ ...r, filters: E });
  }, T = () => {
    let I = r.filters ? [...r.filters] : [];
    I.push({ values: [] }), t({ ...r, filters: I });
  }, _ = (I = !0) => {
    let N = {};
    return a.length && a.map((C) => Object.keys(C).forEach((E) => N[E] = !0)), Object.keys(N);
  }, v = (I) => {
    let N = [];
    const C = r.filters[I].columnName;
    return a && C && (a.forEach(function(E) {
      E[C] !== void 0 && N.indexOf(E[C]) === -1 && N.push(E[C]);
    }), N.sort()), N;
  };
  p.useEffect(() => {
    if (i) {
      const I = S();
      i(I);
    }
  }, [r]), p.useEffect(() => {
    if (!c) {
      let I = { ...r };
      delete I.newViz, t(I);
    }
  }, []);
  const y = () => {
    u(!l), t({
      ...r,
      showEditorPanel: !l
    });
  }, w = () => /* @__PURE__ */ o("section", { className: "waiting", children: /* @__PURE__ */ f("section", { className: "waiting-container", children: [
    /* @__PURE__ */ o("h3", { children: "Error With Configuration" }),
    /* @__PURE__ */ o("p", { children: r.runtime.editorErrorMessage })
  ] }) }), D = () => /* @__PURE__ */ o("section", { className: "waiting", children: /* @__PURE__ */ f("section", { className: "waiting-container", children: [
    /* @__PURE__ */ o("h3", { children: "Finish Configuring" }),
    /* @__PURE__ */ o("p", { children: "Set all required options to the left and confirm below to display a preview of the markup." }),
    /* @__PURE__ */ o("button", { className: "btn btn-primary", style: { margin: "1em auto" }, onClick: (N) => {
      N.preventDefault();
      let C = { ...r };
      delete C.newViz, t(C);
    }, children: "I'm Done" })
  ] }) }), S = () => {
    let I = P.cloneDeep(r);
    return delete I.newViz, delete I.runtime, I;
  }, O = /* @__PURE__ */ f(Je, { children: [
    /* @__PURE__ */ o(Je.Section, { title: "General", children: /* @__PURE__ */ o(
      Oa,
      {
        value: r.title,
        fieldName: "title",
        label: "Title",
        placeholder: "Filterable Text Title",
        updateField: d
      }
    ) }),
    /* @__PURE__ */ f(Je.Section, { title: "Data", children: [
      /* @__PURE__ */ o("div", { className: "cove-accordion__panel-section", children: /* @__PURE__ */ o("div", { className: "cove-input-group", children: /* @__PURE__ */ o(
        xt,
        {
          value: r.textColumn || "",
          fieldName: "textColumn",
          label: "Text Column",
          updateField: d,
          initial: "Select",
          options: _()
        }
      ) }) }),
      /* @__PURE__ */ o("hr", { className: "cove-accordion__divider" }),
      /* @__PURE__ */ f("label", { style: { marginBottom: "1rem" }, children: [
        /* @__PURE__ */ o("span", { className: "edit-label", children: "Data Point Filters" }),
        /* @__PURE__ */ f(k, { style: { textTransform: "none" }, children: [
          /* @__PURE__ */ o(k.Target, { children: /* @__PURE__ */ o(F, { display: "question", style: { marginLeft: "0.5rem" } }) }),
          /* @__PURE__ */ o(k.Content, { children: /* @__PURE__ */ o("p", { children: 'To refine the highlighted data point, specify one or more filters (e.g., "Male" and "Female" for a column called "Sex").' }) })
        ] })
      ] }),
      r.filters && /* @__PURE__ */ o("ul", { className: "filters-list", style: { paddingLeft: 0, marginBottom: "1rem" }, children: r.filters.map((I, N) => /* @__PURE__ */ f("fieldset", { className: "edit-block", children: [
        /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: "remove-column",
            onClick: () => {
              g(N);
            },
            children: "Remove"
          }
        ),
        /* @__PURE__ */ f("label", { children: [
          /* @__PURE__ */ o("span", { className: "edit-label column-heading", children: "Column" }),
          /* @__PURE__ */ f(
            "select",
            {
              value: I.columnName,
              onChange: (C) => {
                m("columnName", N, C.target.value);
              },
              children: [
                /* @__PURE__ */ o("option", { value: "", children: "- Select Option -" }),
                _().map((C, E) => /* @__PURE__ */ o("option", { value: C, children: C }, E))
              ]
            }
          )
        ] }),
        /* @__PURE__ */ f("label", { children: [
          /* @__PURE__ */ o("span", { className: "edit-label column-heading", children: "Column Value" }),
          /* @__PURE__ */ f(
            "select",
            {
              value: I.columnValue,
              onChange: (C) => {
                m("columnValue", N, C.target.value);
              },
              children: [
                /* @__PURE__ */ o("option", { value: "", children: "- Select Option -" }),
                v(N).map((C, E) => /* @__PURE__ */ o("option", { value: C, children: C }, E))
              ]
            }
          )
        ] })
      ] }, N)) }),
      /* @__PURE__ */ o(Ea, { onClick: T, fluid: !0, children: "Add Filter" })
    ] }),
    /* @__PURE__ */ f(Je.Section, { title: "Visual", children: [
      /* @__PURE__ */ o(
        xt,
        {
          value: r.fontSize,
          fieldName: "fontSize",
          label: "Font Size",
          updateField: d,
          options: ["small", "medium", "large"]
        }
      ),
      /* @__PURE__ */ o("br", {}),
      /* @__PURE__ */ f("label", { children: [
        /* @__PURE__ */ o("span", { className: "edit-label", children: "Theme" }),
        /* @__PURE__ */ o("ul", { className: "color-palette", children: Sl.map((I) => /* @__PURE__ */ o(
          "li",
          {
            title: I,
            onClick: () => {
              t({ ...r, theme: I });
            },
            className: r.theme === I ? "selected " + I : I
          },
          I
        )) })
      ] }),
      /* @__PURE__ */ f("div", { className: "cove-accordion__panel-section checkbox-group", children: [
        /* @__PURE__ */ o(
          ze,
          {
            inline: !0,
            size: "small",
            value: r.visual.border,
            section: "visual",
            fieldName: "border",
            label: "Display Border",
            updateField: d
          }
        ),
        /* @__PURE__ */ o(
          ze,
          {
            inline: !0,
            size: "small",
            value: r.visual.borderColorTheme,
            section: "visual",
            fieldName: "borderColorTheme",
            label: "Use theme border color",
            updateField: d
          }
        ),
        /* @__PURE__ */ o(
          ze,
          {
            size: "small",
            value: r.visual.accent,
            section: "visual",
            fieldName: "accent",
            label: "Use Accent Style",
            updateField: d
          }
        ),
        /* @__PURE__ */ o(
          ze,
          {
            size: "small",
            value: r.visual.background,
            section: "visual",
            fieldName: "background",
            label: "Use Theme Background Color",
            updateField: d
          }
        ),
        /* @__PURE__ */ o(
          ze,
          {
            size: "small",
            value: r.visual.hideBackgroundColor,
            section: "visual",
            fieldName: "hideBackgroundColor",
            label: "Hide Background Color",
            updateField: d
          }
        )
      ] })
    ] })
  ] });
  return n ? null : /* @__PURE__ */ o(dn, { component: "EditorPanel", children: /* @__PURE__ */ f(
    ke.Sidebar,
    {
      displayPanel: l,
      isDashboard: s,
      title: "Configure Filtered Text",
      onBackClick: y,
      children: [
        !r.newViz && r.runtime && r.runtime.editorErrorMessage && /* @__PURE__ */ o(w, {}),
        r.newViz && c && /* @__PURE__ */ o(D, {}),
        O
      ]
    }
  ) });
});
const Qn = ({ config: e, configUrl: r, isDashboard: t = !1, isEditor: n = !1, setConfig: a }) => {
  const i = new Fe(), [s, l] = p.useState(rt), [u, c] = p.useState(!0), [h, d] = p.useState(s.data || []), [g, m] = p.useState();
  let { title: T, filters: _ } = s;
  const v = s.fontSize === "small" ? "16px" : s.fontSize === "medium" ? "22px" : "27px", { contentClasses: y, innerContainerClasses: w } = da(s), D = async () => {
    let C = e || await (await fetch(r)).json(), E = C.formattedData || C.data || {};
    C.dataUrl && (E = await (await fetch(C.dataUrl)).json(), C.dataDescription && (E = i.autoStandardize(E), E = i.developerStandardize(E, C.dataDescription))), E && (d(E), m(E));
    let L = { ...s, ...C };
    const R = { ...wn(L) };
    S(R), c(!1);
  }, S = (C) => {
    Object.keys(rt).forEach((E) => {
      C[E] && typeof C[E] == "object" && !Array.isArray(C[E]) && (C[E] = { ...rt[E], ...C[E] });
    }), C.runtime = {}, C.runtime.uniqueId = Date.now(), C.runtime.editorErrorMessage = "", l(C);
  }, O = () => {
    let C = [];
    if (_.length)
      _.map((E) => E.columnName && E.columnValue ? C = h.filter(function(L) {
        return L[E.columnName] === E.columnValue;
      }) : null);
    else
      return C = h.filter((E, L) => E[s.textColumn] && L === 0);
    return C;
  };
  p.useEffect(() => {
    D().catch((C) => console.log(C));
  }, []), p.useEffect(() => {
    e && !e.dataUrl && (S({ ...rt, ...e }), d(e.data), m(e.data));
  }, [e == null ? void 0 : e.data]);
  let I = /* @__PURE__ */ o(mt, {});
  if (u === !1) {
    let C = /* @__PURE__ */ o(X, { children: /* @__PURE__ */ o(ke.Responsive, { isEditor: n, children: /* @__PURE__ */ f("div", { className: "cove-component__content no-borders", children: [
      /* @__PURE__ */ o(vn, { classes: [`${s.theme}`], title: T, style: { fontSize: v } }),
      /* @__PURE__ */ o("div", { className: `${y.join(" ")} body`, children: O().slice(0, 1).map((E, L) => /* @__PURE__ */ f("p", { style: { fontSize: v }, children: [
        " ",
        un(E[s.textColumn] || ""),
        " "
      ] }, L)) })
    ] }) }) });
    I = /* @__PURE__ */ f(X, { children: [
      n && /* @__PURE__ */ o(wl, {}),
      C
    ] });
  }
  const N = {
    config: s,
    updateConfig: S,
    loading: u,
    setParentConfig: a,
    isDashboard: t,
    stateData: h,
    unfilteredData: h
  };
  return /* @__PURE__ */ o(dn, { component: "CdcFilteredText", children: /* @__PURE__ */ o(Wn.Provider, { value: N, children: /* @__PURE__ */ o(ke.VisualizationWrapper, { config: s, isEditor: n, showEditorPanel: s == null ? void 0 : s.showEditorPanel, children: I }) }) });
}, Kn = {
  Apply: "Apply Button",
  OnChange: "Filter Change"
}, rn = (e, r) => {
  const t = e[r].key, n = e.map((a, i) => {
    var s;
    return (s = a.parents) != null && s.includes(t) ? i : null;
  }).filter((a) => a !== null);
  return n.length && n.forEach((a) => {
    const i = e[a];
    i.setByQueryParameter && Da(i.setByQueryParameter), i.active = "", i.subGrouping && (i.subGrouping.active = "");
  }), n;
}, Tl = (e, r, t, n) => {
  const a = P.cloneDeep(t), i = a[e];
  if (n.filterBehavior !== Kn.Apply || n.autoLoad)
    if ((i == null ? void 0 : i.filterStyle) === de.nestedDropdown)
      a[e].active = r[0], a[e].subGrouping.active = r[1];
    else {
      a[e].active = r, rn(a, e);
      const s = Wt();
      i.setByQueryParameter && s[i.setByQueryParameter] !== i.active && (s[i.setByQueryParameter] = i.active, gn(s));
    }
  else if (i.subGrouping)
    it(i.setByQueryParameter, r[0]), it(i.subGrouping.setByQueryParameter, r[1]), a[e].queuedActive = r;
  else {
    const s = Array.isArray(r) ? r.join(",") : r;
    i.setByQueryParameter && it(i.setByQueryParameter, s), a[e].queuedActive = r;
  }
  return [a, rn(a, e)];
}, jt = (e, r) => {
  var n;
  const t = (n = e.sharedFilters) == null ? void 0 : n.filter(
    (a) => {
      var i;
      return a.usedBy && a.usedBy.indexOf(`${r}`) !== -1 || ((i = a.usedBy) == null ? void 0 : i.indexOf(r)) !== -1;
    }
  );
  return (t == null ? void 0 : t.length) > 0 ? t : !1;
}, pt = (e, r, t) => {
  const n = r || {}, { config: a } = e;
  return Ae(a).forEach((i) => {
    const s = jt(a.dashboard, i);
    if (s) {
      const { dataKey: l, data: u, dataDescription: c } = a.visualizations[i], h = (t || e.data)[l] || u, d = (t == null ? void 0 : t[l]) || (c ? Pe(h, c) : h);
      n[i] = Ve(s, d);
    }
  }), a.rows.forEach((i, s) => {
    if (i.dataKey) {
      const l = jt(a.dashboard, s), { dataKey: u, data: c, dataDescription: h } = i, d = (t || e.data)[u] || c;
      if (l) {
        const g = (t == null ? void 0 : t[u]) ?? h ? Pe(d, h) : d;
        n[s] = Ve(l, g);
      } else
        n[s] = d || [];
    }
  }), n;
}, gt = (e) => Object.values(e).some((r) => r.filterBehavior === "Apply Button" && r.type === "dashboardFilters"), Cl = ({
  filter: e,
  isNestedDropdown: r,
  updateAPIFilter: t,
  valueSelector: n,
  textSelector: a
}) => {
  var _, v, y, w, D;
  const [i, s] = p.useState(((_ = e.apiFilter) == null ? void 0 : _.apiEndpoint) || ""), [l, u] = p.useState(((v = e.apiFilter) == null ? void 0 : v.valueSelector) || ""), [c, h] = p.useState(((y = e.apiFilter) == null ? void 0 : y.textSelector) || ""), [d, g] = p.useState((w = e.apiFilter) == null ? void 0 : w.subgroupValueSelector), [m, T] = p.useState((D = e.apiFilter) == null ? void 0 : D.subgroupTextSelector);
  return /* @__PURE__ */ f("fieldset", { className: "mb-1 px-3 cdc-open-viz-module", children: [
    /* @__PURE__ */ f("label", { className: "d-block", children: [
      /* @__PURE__ */ o("span", { children: "API Endpoint: " }),
      /* @__PURE__ */ o(
        "textarea",
        {
          value: i,
          rows: 4,
          onChange: (S) => s(S.target.value),
          className: "w-100",
          style: { minHeight: "1.5rem", maxWidth: "90%" }
        }
      ),
      r && /* @__PURE__ */ f(k, { style: { textTransform: "none" }, children: [
        /* @__PURE__ */ o(k.Target, { children: /* @__PURE__ */ o(F, { display: "question", style: { marginLeft: "0.5rem" } }) }),
        /* @__PURE__ */ o(k.Content, { children: /* @__PURE__ */ o("p", { children: "Your API Endpoint should return both value selector values." }) })
      ] })
    ] }),
    /* @__PURE__ */ f("div", { className: "d-flex", children: [
      /* @__PURE__ */ f("div", { className: `w-50${r ? " border border-dark p-1 m-1" : ""}`, children: [
        /* @__PURE__ */ f("label", { children: [
          /* @__PURE__ */ o("span", { children: "Value Selector: " }),
          /* @__PURE__ */ o("input", { type: "text", value: l || "", onChange: (S) => u(S.target.value) }),
          /* @__PURE__ */ f(k, { style: { textTransform: "none" }, children: [
            /* @__PURE__ */ o(k.Target, { children: /* @__PURE__ */ o(F, { display: "question", style: { marginLeft: "0.5rem" } }) }),
            /* @__PURE__ */ o(k.Content, { children: /* @__PURE__ */ o("p", { children: "Value to use in the html option element" }) })
          ] }),
          /* @__PURE__ */ o("p", { children: " * Required" })
        ] }),
        /* @__PURE__ */ f("label", { children: [
          /* @__PURE__ */ o("span", { children: "Display Text Selector: " }),
          /* @__PURE__ */ o("input", { type: "text", value: c || "", onChange: (S) => h(S.target.value) }),
          /* @__PURE__ */ f(k, { style: { textTransform: "none" }, children: [
            /* @__PURE__ */ o(k.Target, { children: /* @__PURE__ */ o(F, { display: "question", style: { marginLeft: "0.5rem" } }) }),
            /* @__PURE__ */ o(k.Content, { children: /* @__PURE__ */ o("p", { children: "Text to use in the html option element. If none is applied value selector will be used." }) })
          ] }),
          /* @__PURE__ */ o("p", { children: " * Optional" })
        ] })
      ] }),
      r && /* @__PURE__ */ f("div", { className: `w-50${r ? " border border-dark p-1 m-1" : ""}`, children: [
        /* @__PURE__ */ f("label", { children: [
          /* @__PURE__ */ o("span", { children: "Subgroup Value Selector: " }),
          /* @__PURE__ */ o(
            "input",
            {
              type: "text",
              value: d || "",
              onChange: (S) => g(S.target.value)
            }
          ),
          /* @__PURE__ */ f(k, { style: { textTransform: "none" }, children: [
            /* @__PURE__ */ o(k.Target, { children: /* @__PURE__ */ o(F, { display: "question", style: { marginLeft: "0.5rem" } }) }),
            /* @__PURE__ */ o(k.Content, { children: /* @__PURE__ */ o("p", { children: "Value to use in the html option element" }) })
          ] }),
          /* @__PURE__ */ o("p", { children: " * Required" })
        ] }),
        /* @__PURE__ */ f("label", { children: [
          /* @__PURE__ */ o("span", { children: "Subgroup Display Text Selector: " }),
          /* @__PURE__ */ o(
            "input",
            {
              type: "text",
              value: m || "",
              onChange: (S) => T(S.target.value)
            }
          ),
          /* @__PURE__ */ f(k, { style: { textTransform: "none" }, children: [
            /* @__PURE__ */ o(k.Target, { children: /* @__PURE__ */ o(F, { display: "question", style: { marginLeft: "0.5rem" } }) }),
            /* @__PURE__ */ o(k.Content, { children: /* @__PURE__ */ o("p", { children: "Text to use in the html option element. If none is applied value selector will be used." }) })
          ] }),
          /* @__PURE__ */ o("p", { children: " * Optional" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ o("div", { className: "d-flex justify-content-end mt-2", children: /* @__PURE__ */ o(
      "button",
      {
        className: "btn btn-primary mt-2",
        onClick: () => t(i, l, c, n, a),
        children: "Save"
      }
    ) })
  ] });
}, Ol = ({
  filter: e,
  config: r,
  isDashboard: t = !1,
  updateFilterProp: n
}) => {
  const a = e == null ? void 0 : e.subGrouping, i = Object.keys(r.datasets), s = [];
  i.map((d) => {
    const g = r.datasets[d].data;
    g && Object.keys(g[0]).forEach(
      (T) => s.push({
        datasetKey: d,
        columnName: T
      })
    );
  });
  const l = [], u = (d, g) => {
    s.forEach((m) => {
      m.datasetKey === d && m.columnName !== g && l.push(m.columnName);
    });
  }, c = (d) => {
    const g = d.selectedOptions[0].dataset.set, m = d.value;
    n("columnName", m), u(g, m);
  }, h = (d) => {
    const g = d.selectedOptions[0].dataset.set, m = d.value, T = e.values.reduce((v, y) => {
      const w = P.uniq(
        r.datasets[g].data.map((D) => D[e.columnName] === y ? D[m] : "").filter((D) => D !== "")
      ).sort();
      return v[y] = {
        values: w,
        orderedValues: w
      }, v;
    }, {}), _ = {
      ...a,
      columnName: m,
      valuesLookup: T
    };
    n("subGrouping", _);
  };
  return /* @__PURE__ */ f("div", { className: "nesteddropdown-editor", children: [
    !t && /* @__PURE__ */ o(
      Te,
      {
        label: "Label",
        value: e.key,
        updateField: (d, g, m, T) => n("key", T)
      }
    ),
    /* @__PURE__ */ f("label", { children: [
      /* @__PURE__ */ f("div", { className: "edit-label column-heading mt-2", children: [
        "Filter Grouping",
        /* @__PURE__ */ o("span", {})
      ] }),
      /* @__PURE__ */ f("select", { value: e.columnName, onChange: (d) => c(d.target), children: [
        /* @__PURE__ */ o("option", { value: "", children: "- Select Option -" }),
        s == null ? void 0 : s.map((d) => /* @__PURE__ */ o(
          "option",
          {
            value: d.columnName,
            "data-set": d.datasetKey,
            children: d.columnName
          },
          `filter_${d.datasetKey}_${d.columnName} `
        ))
      ] })
    ] }),
    /* @__PURE__ */ f("label", { children: [
      /* @__PURE__ */ f("div", { className: "edit-label column-heading mt-2", children: [
        "Filter SubGrouping",
        /* @__PURE__ */ o("span", {})
      ] }),
      /* @__PURE__ */ f(
        "select",
        {
          value: (a == null ? void 0 : a.columnName) ?? "",
          onChange: (d) => {
            h(d.target);
          },
          children: [
            /* @__PURE__ */ o("option", { value: "", children: "- Select Option -" }),
            s.map((d) => {
              if (d.columnName !== e.columnName)
                return /* @__PURE__ */ o(
                  "option",
                  {
                    value: d.columnName,
                    "data-set": d.datasetKey,
                    children: d.columnName
                  },
                  `subFilter_${d.datasetKey}_${d.columnName} `
                );
            })
          ]
        }
      )
    ] })
  ] });
}, El = ({
  filter: e,
  filterIndex: r,
  config: t,
  updateFilterProp: n,
  toggleNestedQueryParameters: a
}) => {
  var C, E, L, R, Z, z, j, te;
  const [i, s] = p.useState([]), [l, u] = p.useState(!1), c = new Fe(), h = Object.values(de), d = (t.dashboard.sharedFilters || []).filter(({ key: b, type: M }) => b !== e.key && M !== "datafilter").map(({ key: b }) => b), g = er(t.rows), m = (b, M) => {
    var x;
    let B = ((x = b.general) == null ? void 0 : x.title) || b.title || M;
    return b.visualizationType === "markup-include" && (B = b.contentEditor.title || M), B;
  }, [T, _] = p.useMemo(() => {
    const b = {}, M = Object.keys(t.visualizations).filter((Y) => {
      const J = g[Y];
      if (!J)
        return !1;
      const G = t.visualizations[Y];
      if (G.type === "dashboardFilters")
        return !1;
      const Ie = m(G, Y);
      b[Y] = Ie;
      const _e = G.usesSharedFilter, We = J.row, Qe = t.rows[We].dataKey;
      return e.setBy !== Y && !_e && !Qe;
    }), B = [];
    t.rows.forEach((Y, J) => {
      Y.dataKey && (b[J] = `Row ${J + 1}`, B.push(J));
    });
    const x = B.filter((Y) => !e.usedBy || e.usedBy.indexOf(Y.toString()) === -1);
    return [b, [...M, ...x]];
  }, [t.visualizations, e.usedBy, e.setBy, g]), v = p.useMemo(() => {
    var b;
    return e.subGrouping ? !!(e.setByQueryParameter && ((b = e.subGrouping) != null && b.setByQueryParameter)) : !!e.setByQueryParameter;
  }, [t, r]), y = async () => {
    if (!t.dashboard.sharedFilters.some((B) => B.type === "datafilter"))
      return;
    const b = {}, M = Object.keys(t.datasets);
    for (let B = 0; B < M.length; B++) {
      const x = M[B];
      let Y = t.datasets[x];
      if (!Y.data && Y.dataUrl) {
        u(!0);
        let J = await qe(Y.dataUrl);
        if (Y.dataDescription)
          try {
            J = c.autoStandardize(J), J = c.developerStandardize(J, Y.dataDescription);
          } catch (G) {
            console.error(G);
          } finally {
            Y.data = J;
          }
      }
      Y.data && Y.data.forEach((J) => {
        Object.keys(J).forEach((G) => {
          b[G] = !0;
        });
      });
    }
    u(!1), s(Object.keys(b));
  };
  p.useEffect(() => {
    y();
  }, [t.datasets, t.dashboard.sharedFilters]);
  const w = (b, M, B, x, Y) => {
    n("apiFilter", S ? {
      apiEndpoint: b,
      valueSelector: M,
      textSelector: B,
      subgroupValueSelector: x,
      subgroupTextSelector: Y
    } : {
      apiEndpoint: b,
      valueSelector: M,
      textSelector: B
    }), O.actions.toggleOverlay(!1);
  }, D = (b) => {
    const M = t.dashboard.sharedFilters.filter(
      (B, x) => B.key === b && r !== x
    );
    n("key", M.length ? b + ` (${M.length})` : b);
  }, S = e.filterStyle === de.nestedDropdown, { overlay: O } = De(), I = (b, M, B) => {
    O.actions.openOverlay(
      /* @__PURE__ */ o(he, { children: /* @__PURE__ */ o(he.Content, { children: /* @__PURE__ */ o(Cl, { filter: b, isNestedDropdown: M, updateAPIFilter: B }) }) })
    );
  }, N = (b) => {
    n("type", b), b === "datafilter" && y();
  };
  return /* @__PURE__ */ f(X, { children: [
    l && /* @__PURE__ */ o(mt, {}),
    /* @__PURE__ */ f("label", { children: [
      /* @__PURE__ */ o("span", { className: "edit-label column-heading", children: "Filter Type: " }),
      /* @__PURE__ */ f(
        "select",
        {
          defaultValue: e.type || "",
          onChange: (b) => N(b.target.value),
          disabled: !!e.type,
          children: [
            /* @__PURE__ */ o("option", { value: "", children: "- Select Option -" }),
            /* @__PURE__ */ o("option", { value: "urlfilter", children: "URL" }),
            /* @__PURE__ */ o("option", { value: "datafilter", children: "Data" })
          ]
        }
      )
    ] }),
    e.type !== void 0 && /* @__PURE__ */ f(X, { children: [
      /* @__PURE__ */ f("label", { children: [
        /* @__PURE__ */ o("span", { className: "edit-label column-heading", children: "Filter Style: " }),
        /* @__PURE__ */ o(
          "select",
          {
            value: e.filterStyle || de.dropdown,
            onChange: (b) => n("filterStyle", b.target.value),
            children: h.map((b) => /* @__PURE__ */ o("option", { value: b, children: b }, `filter-style-select-item-${b}`))
          }
        )
      ] }),
      e.filterStyle === de.dropdown && /* @__PURE__ */ f("label", { children: [
        /* @__PURE__ */ o("span", { className: "me-1", children: "Show Dropdown" }),
        /* @__PURE__ */ o(
          "input",
          {
            type: "checkbox",
            checked: e.showDropdown,
            onChange: (b) => {
              n("showDropdown", !e.showDropdown);
            }
          }
        )
      ] }),
      /* @__PURE__ */ o(
        Te,
        {
          label: "Label",
          value: e.key,
          updateField: (b, M, B, x) => {
            D(x);
          }
        }
      ),
      e.filterStyle === de.multiSelect && /* @__PURE__ */ o(
        Te,
        {
          label: "Select Limit",
          value: e.selectLimit,
          updateField: (b, M, B, x) => n("selectLimit", x),
          type: "number",
          tooltip: /* @__PURE__ */ f(k, { style: { textTransform: "none" }, children: [
            /* @__PURE__ */ o(k.Target, { children: /* @__PURE__ */ o(F, { display: "question", style: { marginLeft: "0.5rem" } }) }),
            /* @__PURE__ */ o(k.Content, { children: /* @__PURE__ */ o("p", { children: "The maximum number of items that can be selected." }) })
          ] })
        }
      ),
      e.type === "urlfilter" && /* @__PURE__ */ f(X, { children: [
        !gt(t.visualizations) && /* @__PURE__ */ f(X, { children: [
          /* @__PURE__ */ f("label", { children: [
            /* @__PURE__ */ o("span", { className: "edit-label column-heading", children: "URL to Filter: " }),
            /* @__PURE__ */ f(
              "select",
              {
                defaultValue: e.datasetKey || "",
                onChange: (b) => n("datasetKey", b.target.value),
                children: [
                  /* @__PURE__ */ o("option", { value: "", children: "- Select Option -" }),
                  Object.keys(t.datasets).map((b) => t.datasets[b].dataUrl ? /* @__PURE__ */ o("option", { value: b, children: t.datasets[b].dataUrl }, b) : null)
                ]
              }
            )
          ] }),
          /* @__PURE__ */ f("label", { children: [
            /* @__PURE__ */ o("span", { className: "edit-label column-heading", children: "Filter By: " }),
            /* @__PURE__ */ f(
              "select",
              {
                defaultValue: e.filterBy || "",
                onChange: (b) => n("filterBy", b.target.value),
                children: [
                  /* @__PURE__ */ o("option", { value: "", children: "- Select Option -" }),
                  /* @__PURE__ */ o("option", { value: "Query String", children: "Query String" }, "query-string"),
                  /* @__PURE__ */ o("option", { value: "File Name", children: "File Name" }, "file-name")
                ]
              }
            )
          ] }),
          e.filterBy === "File Name" && /* @__PURE__ */ f(X, { children: [
            /* @__PURE__ */ o(
              Te,
              {
                label: "File Name: ",
                value: e.fileName || "",
                updateField: (b, M, B, x) => n("fileName", x),
                tooltip: /* @__PURE__ */ f(k, { style: { textTransform: "none" }, children: [
                  /* @__PURE__ */ o(k.Target, { children: /* @__PURE__ */ o(F, { display: "question", style: { marginLeft: "0.5rem" } }) }),
                  /* @__PURE__ */ o(k.Content, { children: /* @__PURE__ */ o("p", { children: "Add ${query} to replace the filename with the active dropdown value." }) })
                ] })
              }
            ),
            /* @__PURE__ */ f("label", { children: [
              /* @__PURE__ */ f("span", { className: "edit-label column-heading", children: [
                "White Space Replacments",
                /* @__PURE__ */ f(k, { style: { textTransform: "none" }, children: [
                  /* @__PURE__ */ o(k.Target, { children: /* @__PURE__ */ o(F, { display: "question", style: { marginLeft: "0.5rem" } }) }),
                  /* @__PURE__ */ o(k.Content, { children: /* @__PURE__ */ o("p", { children: "Set how whitespace characters will be handled in the file request" }) })
                ] })
              ] }),
              /* @__PURE__ */ f(
                "select",
                {
                  defaultValue: e.whitespaceReplacement || "Keep Spaces",
                  onChange: (b) => n("whitespaceReplacement", b.target.value),
                  children: [
                    /* @__PURE__ */ o("option", { value: "Remove Spaces", children: "Remove Spaces" }, "remove-spaces"),
                    /* @__PURE__ */ o("option", { value: "Replace With Underscore", children: "Replace With Underscore" }, "replace-with-underscore"),
                    /* @__PURE__ */ o("option", { value: "Keep Spaces", children: "Keep Spaces" }, "keep-spaces")
                  ]
                }
              )
            ] })
          ] })
        ] }),
        e.filterBy === "Query String" && /* @__PURE__ */ o(
          Te,
          {
            label: "Query string parameter",
            value: e.queryParameter,
            updateField: (b, M, B, x) => n("queryParameter", x)
          }
        ),
        /* @__PURE__ */ f("div", { className: "bg-secondary-subtle p-2 my-2", children: [
          /* @__PURE__ */ f("label", { children: [
            /* @__PURE__ */ o("span", { children: "API Endpoint: " }),
            /* @__PURE__ */ o("textarea", { value: ((C = e == null ? void 0 : e.apiFilter) == null ? void 0 : C.apiEndpoint) || "", disabled: !0 }),
            S && /* @__PURE__ */ f(k, { style: { textTransform: "none" }, children: [
              /* @__PURE__ */ o(k.Target, { children: /* @__PURE__ */ o(F, { display: "question", style: { marginLeft: "0.5rem" } }) }),
              /* @__PURE__ */ o(k.Content, { children: /* @__PURE__ */ o("p", { children: "Your API Endpoint should return both value selector values." }) })
            ] })
          ] }),
          /* @__PURE__ */ f("div", { className: S ? "border border-dark p-1 my-1" : "", children: [
            /* @__PURE__ */ f("label", { children: [
              /* @__PURE__ */ o("span", { children: "Value Selector: " }),
              /* @__PURE__ */ o("input", { type: "text", value: ((E = e == null ? void 0 : e.apiFilter) == null ? void 0 : E.valueSelector) || "", disabled: !0 }),
              /* @__PURE__ */ f(k, { style: { textTransform: "none" }, children: [
                /* @__PURE__ */ o(k.Target, { children: /* @__PURE__ */ o(F, { display: "question", style: { marginLeft: "0.5rem" } }) }),
                /* @__PURE__ */ o(k.Content, { children: /* @__PURE__ */ o("p", { children: "Value to use in the html option element" }) })
              ] }),
              /* @__PURE__ */ o("div", { children: " * Required" })
            ] }),
            /* @__PURE__ */ f("label", { children: [
              /* @__PURE__ */ o("span", { children: "Display Text Selector: " }),
              /* @__PURE__ */ o("input", { type: "text", value: ((L = e == null ? void 0 : e.apiFilter) == null ? void 0 : L.textSelector) || "", disabled: !0 }),
              /* @__PURE__ */ f(k, { style: { textTransform: "none" }, children: [
                /* @__PURE__ */ o(k.Target, { children: /* @__PURE__ */ o(F, { display: "question", style: { marginLeft: "0.5rem" } }) }),
                /* @__PURE__ */ o(k.Content, { children: /* @__PURE__ */ o("p", { children: "Text to use in the html option element. If none is applied value selector will be used." }) })
              ] }),
              /* @__PURE__ */ o("div", { children: " * Optional" })
            ] })
          ] }),
          S && /* @__PURE__ */ f("div", { className: S ? "border border-dark p-1 my-1" : "", children: [
            /* @__PURE__ */ f("label", { children: [
              /* @__PURE__ */ o("span", { children: "Subgroup Value Selector: " }),
              /* @__PURE__ */ o("input", { value: ((R = e == null ? void 0 : e.apiFilter) == null ? void 0 : R.subgroupValueSelector) || "", disabled: !0 }),
              /* @__PURE__ */ f(k, { style: { textTransform: "none" }, children: [
                /* @__PURE__ */ o(k.Target, { children: /* @__PURE__ */ o(F, { display: "question", style: { marginLeft: "0.5rem" } }) }),
                /* @__PURE__ */ o(k.Content, { children: /* @__PURE__ */ o("p", { children: "Value to use in the html option element" }) })
              ] }),
              /* @__PURE__ */ o("div", { children: " * Required" })
            ] }),
            /* @__PURE__ */ f("label", { children: [
              /* @__PURE__ */ o("span", { children: "Subgroup Display Text Selector: " }),
              /* @__PURE__ */ o("input", { value: ((Z = e == null ? void 0 : e.apifilter) == null ? void 0 : Z.subgroupTextSelector) || "", disabled: !0 }),
              /* @__PURE__ */ f(k, { style: { textTransform: "none" }, children: [
                /* @__PURE__ */ o(k.Target, { children: /* @__PURE__ */ o(F, { display: "question", style: { marginLeft: "0.5rem" } }) }),
                /* @__PURE__ */ o(k.Content, { children: /* @__PURE__ */ o("p", { children: "Text to use in the html option element. If none is applied value selector will be used." }) })
              ] }),
              /* @__PURE__ */ o("div", { children: " * Optional" })
            ] })
          ] }),
          /* @__PURE__ */ o(
            "button",
            {
              onClick: () => I(e, S, w),
              className: "btn btn-primary mt-2",
              children: "Edit API Values"
            }
          )
        ] }),
        /* @__PURE__ */ f("label", { children: [
          /* @__PURE__ */ o(
            "input",
            {
              type: "checkbox",
              checked: v,
              "aria-label": "Create query parameters",
              disabled: !((z = e.apiFilter) != null && z.valueSelector) && !((j = e.apiFilter) != null && j.subgroupValueSelector),
              onChange: (b) => a(b.target.checked)
            }
          ),
          /* @__PURE__ */ f("span", { children: [
            " ",
            "Create query parameters",
            " ",
            /* @__PURE__ */ f(k, { style: { textTransform: "none" }, children: [
              /* @__PURE__ */ o(k.Target, { children: /* @__PURE__ */ o(F, { display: "question", style: { marginLeft: "0.5rem" } }) }),
              /* @__PURE__ */ o(k.Content, { children: /* @__PURE__ */ o("p", { children: "Query parameters will be added to the URL which correspond to the respective value selector." }) })
            ] })
          ] })
        ] }),
        !!d.length && /* @__PURE__ */ f("label", { children: [
          /* @__PURE__ */ o("span", { className: "edit-label column-heading mt-1", children: "Parent Filter(s): " }),
          /* @__PURE__ */ o(
            Ct,
            {
              label: "Parent Filter(s): ",
              options: d.map((b) => ({ value: b, label: b })),
              fieldName: "parents",
              selected: e.parents,
              updateField: (b, M, B, x) => {
                n("parents", x);
              }
            }
          )
        ] }),
        /* @__PURE__ */ f("label", { children: [
          /* @__PURE__ */ f("span", { className: "edit-label column-heading mt-1", children: [
            "Used By: (optional)",
            /* @__PURE__ */ f(k, { style: { textTransform: "none" }, children: [
              /* @__PURE__ */ o(k.Target, { children: /* @__PURE__ */ o(F, { display: "question", style: { marginLeft: "0.5rem" } }) }),
              /* @__PURE__ */ o(k.Content, { children: /* @__PURE__ */ o("p", { children: "Select if you would like specific visualizations or rows to use this filter. Otherwise the filter will be added to all api requests." }) })
            ] })
          ] }),
          /* @__PURE__ */ o(
            Ct,
            {
              options: _.map((b) => ({
                value: b,
                label: T[b]
              })),
              fieldName: "usedBy",
              selected: e.usedBy,
              updateField: (b, M, B, x) => {
                n("usedBy", x);
              }
            }
          )
        ] }),
        /* @__PURE__ */ o(
          Te,
          {
            label: "Reset Label: ",
            value: e.resetLabel || "",
            updateField: (b, M, B, x) => n("resetLabel", x)
          }
        )
      ] }),
      e.type === "datafilter" && /* @__PURE__ */ f(X, { children: [
        e.filterStyle !== de.nestedDropdown ? /* @__PURE__ */ f(X, { children: [
          /* @__PURE__ */ f("label", { children: [
            /* @__PURE__ */ o("span", { className: "edit-label column-heading", children: "Filter: " }),
            /* @__PURE__ */ f(
              "select",
              {
                value: e.columnName,
                onChange: (b) => {
                  n("columnName", b.target.value);
                },
                children: [
                  /* @__PURE__ */ o("option", { value: "", children: "- Select Option -" }),
                  i.map((b) => /* @__PURE__ */ o("option", { value: b, children: b }, `filter-column-select-item-${b}`))
                ]
              }
            )
          ] }),
          /* @__PURE__ */ o(
            at,
            {
              value: e.defaultValue,
              options: e.resetLabel ? [e.resetLabel, ...t.dashboard.sharedFilters[r].values] : t.dashboard.sharedFilters[r].values,
              updateField: (b, M, B, x) => n("defaultValue", x),
              label: "Filter Default Value",
              initial: "Select"
            }
          ),
          /* @__PURE__ */ o(
            at,
            {
              value: e.order || "asc",
              options: aa,
              updateField: (b, M, B, x) => n("order", x),
              label: "Filter Order"
            }
          ),
          e.order === "cust" && /* @__PURE__ */ o(
            ia,
            {
              orderedValues: e.orderedValues || e.values,
              handleFilterOrder: (b, M) => {
                const B = [...e.values], [x] = B.splice(b, 1);
                B.splice(M, 0, x), n("orderedValues", B);
              }
            }
          ),
          /* @__PURE__ */ f("label", { children: [
            /* @__PURE__ */ o("span", { className: "edit-label column-heading", children: "Show Dropdown" }),
            /* @__PURE__ */ o(
              "input",
              {
                type: "checkbox",
                defaultChecked: e.showDropdown === !0,
                onChange: (b) => {
                  n("showDropdown", !e.showDropdown);
                }
              }
            )
          ] })
        ] }) : /* @__PURE__ */ f(X, { children: [
          /* @__PURE__ */ o(
            Ol,
            {
              filter: e,
              updateFilterProp: (b, M) => {
                n(b, M);
              },
              isDashboard: !0,
              config: t
            }
          ),
          /* @__PURE__ */ f("label", { children: [
            /* @__PURE__ */ o(
              "input",
              {
                type: "checkbox",
                checked: v,
                "aria-label": "Create query parameters",
                disabled: !e.columnName || !((te = e.subGrouping) != null && te.columnName),
                onChange: (b) => a(b.target.checked)
              }
            ),
            /* @__PURE__ */ f("span", { children: [
              " ",
              "Create query parameters",
              " ",
              /* @__PURE__ */ f(k, { style: { textTransform: "none" }, children: [
                /* @__PURE__ */ o(k.Target, { children: /* @__PURE__ */ o(F, { display: "question", style: { marginLeft: "0.5rem" } }) }),
                /* @__PURE__ */ o(k.Content, { children: /* @__PURE__ */ o("p", { children: "Query parameters will be added to the URL which correspond to the respective column name." }) })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ o(
          at,
          {
            label: "Set By:",
            value: e.setBy,
            options: Object.values(t.visualizations).filter((b) => b.type !== "dashboardFilters").map((b) => ({
              value: b.uid,
              label: m(b, b.type)
            })),
            updateField: (b, M, B, x) => n("setBy", x),
            initial: "- Select Option -"
          }
        ),
        /* @__PURE__ */ f("label", { children: [
          /* @__PURE__ */ f("span", { className: "edit-label column-heading mt-1", children: [
            "Used By: (optional)",
            /* @__PURE__ */ f(k, { style: { textTransform: "none" }, children: [
              /* @__PURE__ */ o(k.Target, { children: /* @__PURE__ */ o(F, { display: "question", style: { marginLeft: "0.5rem" } }) }),
              /* @__PURE__ */ o(k.Content, { children: /* @__PURE__ */ o("p", { children: "Select if you would like specific visualizations or rows to use this filter. Otherwise the filter will be added to all api requests." }) })
            ] })
          ] }),
          /* @__PURE__ */ o(
            Ct,
            {
              options: _.map((b) => ({
                value: b,
                label: T[b]
              })),
              fieldName: "usedBy",
              selected: e.usedBy,
              updateField: (b, M, B, x) => {
                n("usedBy", x);
              }
            }
          )
        ] }),
        /* @__PURE__ */ o(
          Te,
          {
            label: "Reset Label: ",
            value: e.resetLabel || "",
            updateField: (b, M, B, x) => n("resetLabel", x)
          }
        ),
        /* @__PURE__ */ f("label", { children: [
          /* @__PURE__ */ o("span", { className: "edit-label column-heading", children: "Parent Filter: " }),
          /* @__PURE__ */ f(
            "select",
            {
              value: e.parents || [],
              onChange: (b) => {
                n("parents", b.target.value);
              },
              children: [
                /* @__PURE__ */ o("option", { value: "", children: "Select a filter" }),
                t.dashboard.sharedFilters && t.dashboard.sharedFilters.map((b) => {
                  if (b.key !== e.key)
                    return /* @__PURE__ */ o("option", { children: b.key }, b.key);
                })
              ]
            }
          )
        ] }),
        !S && /* @__PURE__ */ o(
          Te,
          {
            label: "Default Value Set By Query String Parameter: ",
            value: e.setByQueryParameter || "",
            updateField: (b, M, B, x) => n("setByQueryParameter", x)
          }
        )
      ] })
    ] })
  ] });
}, Il = ({
  removeFilterCompletely: e,
  removeFilterFromViz: r,
  filterIndex: t
}) => {
  const { overlay: n } = De(), { config: a } = p.useContext(ie), i = Object.values(a.visualizations).filter((l) => {
    var u;
    return (u = l.sharedFilterIndexes) == null ? void 0 : u.map(Number).includes(Number(t));
  }).length > 1, s = i ? "This filter is used by multiple visualizations. You can either delete the filter from this visualization only or you can delete the filter completely, which will also remove it from other visualizations." : "Are you sure you want to delete this filter?";
  return /* @__PURE__ */ o(he, { showClose: !0, children: /* @__PURE__ */ f(he.Content, { children: [
    /* @__PURE__ */ o("p", { children: s }),
    i && /* @__PURE__ */ o(
      "button",
      {
        className: "btn btn-warning",
        onClick: () => {
          r(t), n == null || n.actions.toggleOverlay();
        },
        children: "Delete from Visualization"
      }
    ),
    /* @__PURE__ */ f(
      "button",
      {
        className: "btn btn-danger",
        onClick: () => {
          e(t), n == null || n.actions.toggleOverlay();
        },
        children: [
          "Delete",
          i ? " Completely" : ""
        ]
      }
    )
  ] }) });
}, _l = (e, r) => {
  const t = /* @__PURE__ */ new Set();
  return (Object.values(r) || []).forEach((a) => {
    a == null || a.forEach((i) => {
      const s = i[e];
      if (s !== void 0) {
        const l = String(s).trim();
        t.add(l);
      }
    });
  }), Array.from(t);
}, Nl = (e) => {
  var r;
  return e.type === "urlfilter" ? (r = e.apiFilter) == null ? void 0 : r.valueSelector : e.columnName;
}, Gt = (e, r, t = []) => e == null ? void 0 : e.map((n, a) => {
  if (t.includes(a) || n.type === "urlfilter")
    return n;
  const i = P.cloneDeep(n), s = _l(Nl(n), r);
  if (i.values = s, s.length > 0) {
    const l = pn(i);
    if (l)
      i.active = l;
    else if (n.multiSelect) {
      const u = i.values, c = Array.isArray(i.active) ? i.active : [i.active];
      i.active = c.filter((h) => u.includes(h));
    } else {
      const u = e.find((h) => h.resetLabel), c = u ? u.resetLabel : i.active || i.values[0];
      i.active = i.defaultValue || c;
    }
  }
  return mn(i);
}), kl = ({ vizConfig: e, updateConfig: r }) => {
  const { config: t, loadAPIFilters: n, data: a } = p.useContext(ie), { overlay: i } = De(), {
    dashboard: { sharedFilters: s },
    visualizations: l
  } = t, u = p.useContext(pe), c = p.useMemo(() => {
    var w;
    const y = t.visualizations[e.uid].sharedFilterIndexes.map(
      Number
    );
    return (w = t.dashboard.sharedFilters) == null ? void 0 : w.map(({ key: D }, S) => [S, D]).filter(([D]) => !y.includes(D)).map(([D, S]) => /* @__PURE__ */ o("option", { value: D, children: `${D} - ${S}` }, D));
  }, [t.visualizations, e.uid]), h = p.useState({}), [d, g] = p.useState(!1), m = (y, w, D) => {
    const S = P.cloneDeep(s), {
      apiEndpoint: O,
      valueSelector: I,
      textSelector: N,
      subgroupValueSelector: C,
      subgroupTextSelector: E
    } = s[w].apiFilter || {}, L = (D == null ? void 0 : D.apiEndpoint) !== O || (D == null ? void 0 : D.valueSelector) !== I || (D == null ? void 0 : D.textSelector) !== N || (D == null ? void 0 : D.subgroupValueSelector) !== C || (D == null ? void 0 : D.subgroupTextSelector) !== E;
    if (S[w][y] = D, y === "columnName") {
      S[w].subGrouping && delete S[w].subGrouping;
      const R = Gt(S, a);
      u({ type: "SET_SHARED_FILTERS", payload: R });
    } else
      y === "filterStyle" ? (S[w] = {
        ...S[w],
        active: "",
        apiFilter: {
          apiEndpoint: "",
          subgroupValueSelector: "",
          textSelector: "",
          valueSelector: ""
        },
        filterStyle: D
      }, u({ type: "SET_SHARED_FILTERS", payload: S })) : y === "apiFilter" && D.apiEndpoint && D.valueSelector && L ? (s[w].filterStyle === de.nestedDropdown && D.subgroupValueSelector && (S[w].subGrouping = {
        active: "",
        columnName: "",
        setByQueryParameter: "",
        valuesLookup: {}
      }), n(S, {})) : (mn(S[w]), u({ type: "SET_SHARED_FILTERS", payload: S }));
  }, T = (y, w) => {
    const D = P.cloneDeep(s), S = D[y], O = S.type === "urlfilter", I = O ? S.apiFilter.valueSelector : S.columnName, N = O ? S.apiFilter.subgroupValueSelector : S.subGrouping.columnName;
    S.setByQueryParameter = w ? I : void 0, S.subGrouping.setByQueryParameter = w ? N : void 0, u({ type: "SET_SHARED_FILTERS", payload: D });
  }, _ = (y) => {
    const [w, D] = sa(y, s, l), S = { ...t.dashboard, sharedFilters: w };
    u({ type: "SET_CONFIG", payload: { dashboard: S, visualizations: D } });
  }, v = () => {
    const y = P.cloneDeep(s) || [], D = { key: "New Dashboard Filter " + (y.length + 1), showDropdown: !0, values: [] };
    u({ type: "SET_SHARED_FILTERS", payload: [...y, D] }), r({ ...e, sharedFilterIndexes: [...e.sharedFilterIndexes, y.length] });
  };
  return /* @__PURE__ */ f(_a, { allowZeroExpanded: !0, children: [
    /* @__PURE__ */ f(or, { children: [
      /* @__PURE__ */ o(sr, { children: /* @__PURE__ */ o(lr, { children: "General" }) }),
      /* @__PURE__ */ f(ur, { children: [
        /* @__PURE__ */ o(
          at,
          {
            value: e.filterBehavior,
            label: "Filter Behavior",
            updateField: (y, w, D, S) => {
              r({ ...e, filterBehavior: S });
            },
            options: ["Apply Button", "Filter Change"],
            tooltip: /* @__PURE__ */ f(k, { style: { textTransform: "none" }, children: [
              /* @__PURE__ */ o(k.Target, { children: /* @__PURE__ */ o(F, { display: "question", style: { marginLeft: "0.5rem" } }) }),
              /* @__PURE__ */ o(k.Content, { children: /* @__PURE__ */ o("p", { children: 'The Apply Button option changes the visualization when the user clicks "apply". The Filter Change option immediately changes the visualization when the selection is changed.' }) })
            ] })
          }
        ),
        e.filterBehavior === "Apply Button" && /* @__PURE__ */ o(
          Te,
          {
            label: "Apply Filter Button Text",
            maxLength: 20,
            value: e.applyFiltersButtonText,
            updateField: (y, w, D, S) => {
              r({ ...e, applyFiltersButtonText: S });
            }
          }
        ),
        e.filterBehavior === "Filter Change" && /* @__PURE__ */ o(
          nt,
          {
            label: "Auto Load",
            value: e.autoLoad,
            updateField: (y, w, D, S) => {
              r({ ...e, autoLoad: S });
            },
            tooltip: /* @__PURE__ */ f(k, { style: { textTransform: "none" }, children: [
              /* @__PURE__ */ o(k.Target, { children: /* @__PURE__ */ o(F, { display: "question", style: { marginLeft: "0.5rem" } }) }),
              /* @__PURE__ */ o(k.Content, { children: /* @__PURE__ */ o("p", { children: "Check if you would like for all URL filters to automatically select a value when a parent filter is changed." }) })
            ] })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ f(or, { children: [
      /* @__PURE__ */ o(sr, { children: /* @__PURE__ */ o(lr, { children: "Filters" }) }),
      /* @__PURE__ */ f(ur, { children: [
        e.sharedFilterIndexes.map((y) => {
          const w = s[y];
          return /* @__PURE__ */ o(
            oa,
            {
              fieldName: w.key,
              fieldKey: y,
              fieldType: "Dashboard Filter",
              controls: h,
              deleteField: () => {
                i == null || i.actions.openOverlay(
                  /* @__PURE__ */ o(
                    Il,
                    {
                      removeFilterCompletely: _,
                      removeFilterFromViz: (D) => {
                        r({
                          ...e,
                          sharedFilterIndexes: e.sharedFilterIndexes.filter((S) => S !== D)
                        });
                      },
                      filterIndex: y
                    }
                  )
                );
              },
              children: /* @__PURE__ */ o(
                El,
                {
                  filter: w,
                  filterIndex: y,
                  updateFilterProp: (D, S) => {
                    m(D, y, S);
                  },
                  toggleNestedQueryParameters: (D) => {
                    T(y, D);
                  },
                  config: t
                }
              )
            },
            w.key + y
          );
        }),
        /* @__PURE__ */ o("button", { onClick: v, className: "btn btn-primary full-width", children: "Add Filter" }),
        d ? /* @__PURE__ */ f("label", { children: [
          /* @__PURE__ */ f("span", { className: "edit-label column-heading", children: [
            "Select Existing Dashboard Filter",
            /* @__PURE__ */ f(k, { style: { textTransform: "none" }, children: [
              /* @__PURE__ */ o(k.Target, { children: /* @__PURE__ */ o(F, { display: "question", style: { marginLeft: "0.5rem" } }) }),
              /* @__PURE__ */ o(k.Content, { children: /* @__PURE__ */ f("p", { children: [
                "This feature is indentended to support legacy functionality. Be advised that any change to the filter in this editor will reflect on the whole dashboard.",
                " "
              ] }) })
            ] })
          ] }),
          /* @__PURE__ */ o(
            "select",
            {
              value: "",
              onChange: (y) => {
                r({
                  ...e,
                  sharedFilterIndexes: [...e.sharedFilterIndexes, y.target.value]
                }), g(!1);
              },
              children: [
                /* @__PURE__ */ o("option", { value: "", children: "Select" }, "select"),
                ...c
              ]
            }
          )
        ] }) : /* @__PURE__ */ o("button", { onClick: () => g(!0), className: "btn btn-primary full-width mt-2", children: "Add Existing Dashboard Filter" })
      ] })
    ] })
  ] });
}, Al = (e) => e.replace(/"/g, ""), Ll = (e) => String(e).match(/^[-]?[0-9\.]+$/), qt = (e, r) => {
  const t = e.includes("?");
  return r.filter(({ value: n }) => n !== "").map(({ key: n, value: a }, i) => {
    const s = i === 0 && !t ? "?" : "&", l = n.match(/\$.*/);
    return Ll(a) || l ? s + n + "=" + a : s + n + `="${Al(a)}"`;
  }).join("");
}, Pl = (e, r, t = []) => e.reduce((n, a, i) => {
  const s = a, l = t.includes(i);
  return r[s] && !l ? n[s] = r[s] : n[s] = void 0, n;
}, {}), Zn = (e, r) => {
  const t = r.filter((n) => {
    var a;
    return (a = e.parents) == null ? void 0 : a.includes(n.key);
  });
  return (t || []).length ? t.flatMap((n) => {
    var a;
    if (n.filterStyle === de.nestedDropdown) {
      const i = n.apiFilter.valueSelector || "", s = n.apiFilter.subgroupValueSelector || "", l = n.queuedActive ? n.queuedActive[0] : n.active || "", u = n.queuedActive ? n.queuedActive[1] : ((a = n.subGrouping) == null ? void 0 : a.active) || "";
      return [
        { key: i, value: l },
        { key: s, value: u }
      ];
    } else {
      const i = n.queryParameter || n.apiFilter.valueSelector || "", s = n.queuedActive || n.active || "";
      return Array.isArray(s) ? s.map((l) => ({ key: i, value: l.toString() })) : [{ key: i, value: s.toString() }];
    }
  }) : null;
}, Yn = (e) => e == null ? void 0 : e.some(({ value: r }) => r === ""), Fl = (e, r) => {
  const { textSelector: t, valueSelector: n, subgroupTextSelector: a, subgroupValueSelector: i } = r;
  if (i) {
    const s = {};
    return e.forEach((l) => {
      s[l[n]] || (s[l[n]] = { text: l[t || n], value: l[n], subOptions: [] }), s[l[n]].subOptions.push({ text: l[a], value: l[i] });
    }), Object.values(s);
  }
  return e.map((s) => ({ text: s[t || n], value: s[n] }));
}, xl = (e, r) => {
  const t = {};
  return e.forEach((n, a) => {
    var c;
    const i = (c = n.apiFilter) == null ? void 0 : c.apiEndpoint;
    if (!i)
      return;
    const s = i;
    if (r[s])
      return;
    const l = Zn(n, e);
    if (Yn(l))
      return;
    const u = i + (l ? qt(i, l) : "");
    t[u] = [s, a];
  }), t;
}, Rl = (e, r) => {
  var s, l;
  const t = Be(r == null ? void 0 : r.setByQueryParameter), n = (s = e[0]) == null ? void 0 : s.value, a = (l = e[0]) == null ? void 0 : l.subOptions[0].value, i = Be(r == null ? void 0 : r.subGrouping.setByQueryParameter);
  if (!r.active)
    r.active = t || n, r.subGrouping.active = i || a;
  else {
    const u = e.find((c) => c.value === r.active);
    if (r.active = u ? u.value : n, u) {
      const c = u.subOptions.find((h) => h.value === r.subGrouping.active);
      r.subGrouping.active = (c == null ? void 0 : c.value) || a;
    } else
      r.subGrouping.active = a;
  }
}, Ml = (e, r) => {
  var s;
  const t = Be(r == null ? void 0 : r.setByQueryParameter), n = Array.isArray(t) ? t : t == null ? void 0 : t.split(","), a = t ? n : [(s = e[0]) == null ? void 0 : s.value], i = (r.active || []).filter(
    (l) => e.find((u) => u.value === l)
  );
  r.active = i.length ? i : a;
}, nn = (e, r, t, n) => {
  var u, c;
  const a = P.cloneDeep(t), i = P.cloneDeep(a[e]), s = Be(i == null ? void 0 : i.setByQueryParameter), l = i.setByQueryParameter ? s !== void 0 : !1;
  if (!n.length || !(r != null && r.length)) {
    if (l && i.apiFilter) {
      const h = Be((u = i.subGrouping) == null ? void 0 : u.setByQueryParameter), d = h !== void 0;
      i.queuedActive = d ? [s, h] : s;
    }
    return i;
  }
  if (n.includes(e) || l) {
    const h = a.filter((g) => {
      var m;
      return (m = i.parents) == null ? void 0 : m.includes(g.key);
    }), d = h.some((g) => !(g.active || g.queuedActive));
    if (h && d)
      return i;
    if (i.filterStyle === de.multiSelect)
      Ml(r, i);
    else if (i.filterStyle === de.nestedDropdown)
      Rl(r, i);
    else {
      const g = (c = r[0]) == null ? void 0 : c.value;
      if (!i.active)
        i.active = s || g;
      else {
        const m = r.find((T) => T.value == i.active);
        i.active = m ? m.value : g;
      }
    }
  }
  return i;
};
const Bl = (e, r) => {
  const t = Object.values(r).flat(), n = e.map((i, s) => i.type === "datafilter" && i.parents ? s : -1).filter((i) => i !== -1);
  if (n.length === 0)
    return e;
  const a = P.cloneDeep(e);
  return n.forEach((i) => {
    const s = e[i], l = e.find(
      (u) => String(s.parents) === String(u.key)
    );
    if (l) {
      const u = t.filter((h) => {
        var d;
        return (d = l.active) == null ? void 0 : d.includes(h[l.columnName]);
      }), c = P.uniq(u.map((h) => h[s.columnName]).filter(Boolean));
      if (c.length > 0) {
        const d = s.filterStyle === "multi-select" ? c : s.active ? s.active : s.defaultValue ? s.defaultValue : c[0];
        a[i] = {
          ...s,
          values: c,
          active: d
        };
      }
    }
  }), a;
}, Xn = ({
  apiFilterDropdowns: e,
  visualizationConfig: r,
  setConfig: t,
  currentViewport: n,
  isEditor: a = !1
}) => {
  var D, S;
  const i = p.useContext(ie), { config: s, reloadURLData: l, loadAPIFilters: u, setAPIFilterDropdowns: c, setAPILoading: h } = i, d = p.useContext(pe), g = (O) => {
    O.preventDefault();
    const I = P.cloneDeep(i.config.dashboard), N = Object.values(i.config.visualizations).filter((E) => E.type === "dashboardFilters").reduce((E, L) => L.autoLoad ? E : [...E, L.sharedFilterIndexes], []);
    if (!I.sharedFilters.some((E, L) => N.includes(L) ? !E.active && !E.queuedActive : !1)) {
      if (gt(i.config.visualizations)) {
        const E = Wt();
        let L = !1;
        I.sharedFilters.forEach((R) => {
          R.queuedActive && Sa(R), R.setByQueryParameter && E[R.setByQueryParameter] !== R.active && (E[R.setByQueryParameter] = Array.isArray(R.active) ? R.active.join(",") : R.active, L = !0);
        }), L && gn(E);
      }
      h(!0), d({ type: "SET_SHARED_FILTERS", payload: I.sharedFilters }), d({ type: "SET_FILTERED_DATA", payload: pt(P.cloneDeep(i)) }), u(I.sharedFilters, e).then((E) => {
        l(E);
      }).catch((E) => {
        console.error(E);
      });
    }
  }, m = (O, I) => {
    const N = P.cloneDeep(s);
    let [C, E] = Tl(
      O,
      I,
      N.dashboard.sharedFilters,
      r
    );
    if (d({ type: "SET_SHARED_FILTERS", payload: C }), gt(s.visualizations)) {
      const L = r.autoLoad, R = N.dashboard.sharedFilters.some((j) => !j.active), Z = C.filter((j) => j.apiFilter).map((j) => j.apiFilter.apiEndpoint), z = Pl(
        Z,
        e,
        E
      );
      L && !R ? (c(z), u(C, z).then((j) => {
        l(j);
      })) : (C[O].queuedActive = I, d({ type: "SET_DATA", payload: {} }), d({ type: "SET_FILTERED_DATA", payload: {} }), c(z), u(C, z));
    } else if (C[O].type === "urlfilter" && C[O].apiFilter)
      l(C);
    else {
      const L = P.cloneDeep(i);
      L.config.dashboard.sharedFilters = C;
      const R = pt(L);
      d({ type: "SET_FILTERED_DATA", payload: R }), d({ type: "SET_SHARED_FILTERS", payload: C });
    }
  }, [T, _] = p.useState(!0), v = () => {
    _(!T), t({
      ...r,
      showEditorPanel: !T
    });
  }, y = (D = r == null ? void 0 : r.sharedFilterIndexes) == null ? void 0 : D.map(Number).map((O) => s.dashboard.sharedFilters[O]), w = y.length ? y.every((O) => O.showDropdown === !1) : !1;
  return w && !a ? /* @__PURE__ */ o(X, {}) : /* @__PURE__ */ f(ke.VisualizationWrapper, { config: r, isEditor: a, currentViewport: n, children: [
    a && /* @__PURE__ */ o(
      ke.Sidebar,
      {
        displayPanel: T,
        isDashboard: !0,
        title: "Configure Dashboard Filters",
        onBackClick: v,
        children: /* @__PURE__ */ o(kl, { updateConfig: t, vizConfig: r })
      }
    ),
    !w && /* @__PURE__ */ o(ke.Responsive, { isEditor: a, children: /* @__PURE__ */ o(
      "div",
      {
        className: `${a ? " is-editor" : ""} cove-component__content col-12 cove-dashboard-filters-container`,
        children: /* @__PURE__ */ o(
          Ia,
          {
            show: (S = r == null ? void 0 : r.sharedFilterIndexes) == null ? void 0 : S.map(Number),
            filters: Bl(s.dashboard.sharedFilters, i.data) || [],
            apiFilterDropdowns: e,
            handleOnChange: m,
            showSubmit: r.filterBehavior === Kn.Apply && !r.autoLoad,
            applyFilters: g,
            applyFiltersButtonText: r.applyFiltersButtonText
          }
        )
      }
    ) })
  ] });
}, Vl = new Fe(), $l = (e, r, t) => {
  var s;
  if (!(e != null && e.footnotes))
    return e;
  const n = P.cloneDeep((s = t.datasets[e.footnotes.dataKey]) == null ? void 0 : s.data), a = n != null && n.length ? Object.keys(n[0]) : [], i = (jt(t.dashboard, r) || []).filter(
    (l) => a.includes(l.columnName)
  );
  return i.length ? e.footnotes.data = Ve(i, n) : e.footnotes.data = n, e;
}, Jn = (e, r, t, n, a, i, s) => {
  var h, d;
  if (r === void 0)
    return {};
  const l = P.cloneDeep(t.visualizations[e]), u = t.rows[r];
  if ((h = l.footnotes) != null && h.dataKey && (l.footnotes.data = (d = t.datasets[l.footnotes.dataKey]) == null ? void 0 : d.data), u != null && u.dataKey && Object.assign(l, P.pick(u, ["dataKey", "dataDescription", "formattedData", "data"])), l.table && t.dashboard.sharedFilters.length) {
    const g = t.dashboard.sharedFilters.reduce((m, T) => {
      var _, v, y;
      if (!((_ = T.usedBy) != null && _.length) || (v = T.usedBy) != null && v.includes(e)) {
        const w = T.apiFilter, D = (w == null ? void 0 : w.textSelector) || (w == null ? void 0 : w.valueSelector) || T.columnName;
        m.push(D);
        const S = (w == null ? void 0 : w.subgroupTextSelector) || (w == null ? void 0 : w.subgroupValueSelector) || ((y = T.subGrouping) == null ? void 0 : y.columnName);
        S && m.push(S);
      }
      return m;
    }, []);
    l.table.sharedFilterColumns = g;
  }
  l.formattedData && (l.originalFormattedData = l.formattedData);
  const c = (a == null ? void 0 : a[r]) ?? (a == null ? void 0 : a[e]);
  if (c)
    l.data = c || [], l.formattedData && (l.formattedData = l.data);
  else {
    const g = l.dataKey || "backwards-compatibility";
    l.data = n[g] || [], l.formattedData && (l.formattedData = Vl.developerStandardize(l.data, l.dataDescription) || l.data);
  }
  if (i && (l.data = i), l.footnotes) {
    const g = $l(l, r, t);
    if (s && i) {
      const m = i[0][s], T = g.footnotes.data.filter((_) => _[s] === m);
      g.footnotes.data = T;
    }
    return g;
  }
  return l;
}, Ul = ({
  allExpanded: e,
  groupName: r,
  currentViewport: t,
  children: n
}) => {
  const [a, i] = p.useState(e), s = ["xs", "xxs"].includes(t) ? "13px" : `${la}px`;
  return p.useEffect(() => {
    i(e);
  }, [e]), /* @__PURE__ */ f("div", { className: "collapsable-multiviz-container", children: [
    /* @__PURE__ */ f(
      "div",
      {
        style: { fontSize: s },
        role: "button",
        className: `multi-visualiation-heading${a ? "" : " collapsed"} h4 my-0`,
        onClick: () => {
          i(!a);
        },
        tabIndex: 0,
        onKeyDown: (l) => {
          l.keyCode === 13 && i(!a);
        },
        children: [
          /* @__PURE__ */ o(F, { display: a ? "minus" : "plus", base: !0 }),
          r
        ]
      }
    ),
    a && n
  ] });
}, zl = ({ setAllExpanded: e }) => /* @__PURE__ */ o("div", { className: "d-block ", children: /* @__PURE__ */ f("div", { className: "d-flex flex-row-reverse mb-2", children: [
  /* @__PURE__ */ o("button", { className: "btn expand-collapse-buttons", onClick: () => e(!1), children: "- Collapse All" }),
  /* @__PURE__ */ o("button", { className: "btn expand-collapse-buttons me-2", onClick: () => e(!0), children: "+ Expand All" })
] }) }), Hl = ({
  allExpanded: e,
  currentViewport: r,
  groupName: t,
  collapsible: n,
  className: a,
  children: i
}) => /* @__PURE__ */ o("div", { className: a, children: n ? /* @__PURE__ */ o(Ul, { allExpanded: e, groupName: t, currentViewport: r, children: i }) : /* @__PURE__ */ f(X, { children: [
  t !== "" ? /* @__PURE__ */ o("h3", { children: t }) : /* @__PURE__ */ o(X, {}),
  i
] }) }), ea = ({
  allExpanded: e,
  filteredDataOverride: r,
  groupName: t,
  row: n,
  rowIndex: a,
  inNoDataState: i,
  setSharedFilter: s,
  updateChildConfig: l,
  apiFilterDropdowns: u,
  currentViewport: c,
  isLastRow: h,
  setAllExpanded: d
}) => {
  const { config: g, filteredData: m, data: T } = p.useContext(ie), [_, v] = Pt.useState(0);
  p.useEffect(() => {
    n.toggle && v(0);
  }, [g.activeDashboard, a]);
  const y = p.useMemo(() => n.toggle ? n.columns.map((O, I) => I === _) : n.columns.map((O, I) => !0), [g.activeDashboard, _]), w = m[a] || n.formattedData || [], D = n.multiVizColumn && w.reduce((O, I) => {
    const N = I[n.multiVizColumn];
    return O[N] || (O[N] = []), O[N].push(I), O;
  }, {}), S = (O) => {
    const N = Object.values(g.visualizations).filter(
      (C) => C.type === "dashboardFilters"
    ).filter((C) => !C.autoLoad).flatMap((C) => C.sharedFilterIndexes);
    return gt(g.visualizations) && O.autoLoad ? N.some((C) => {
      const { queuedActive: E, active: L, subGrouping: R } = g.dashboard.sharedFilters[C];
      return !L && !E ? !0 : E ? R ? E[0] !== L || E[1] !== R.active : E !== L : !1;
    }) : !1;
  };
  return D ? /* @__PURE__ */ f(Pt.Fragment, { children: [
    !i && n.expandCollapseAllButtons === !0 && /* @__PURE__ */ o(zl, { setAllExpanded: d }),
    Object.keys(D).map((O) => {
      const I = D[O], N = P.cloneDeep(n);
      return N.multiVizColumn = void 0, /* @__PURE__ */ o(
        ea,
        {
          allExpanded: e,
          filteredDataOverride: I,
          groupName: O,
          row: N,
          rowIndex: a,
          setSharedFilter: s,
          updateChildConfig: l,
          apiFilterDropdowns: u,
          currentViewport: c,
          inNoDataState: i,
          isLastRow: h
        },
        `row__${a}__${O}`
      );
    })
  ] }, `row__${a}`) : /* @__PURE__ */ f("div", { className: `row${n.equalHeight ? " equal-height" : ""}${n.toggle ? " toggle" : ""}`, children: [
    n.toggle && !i && /* @__PURE__ */ o(Dl, { row: n, visualizations: g.visualizations, active: _, setToggled: v }),
    n.columns.map((O, I) => {
      if (O.width) {
        if (!O.widget)
          return /* @__PURE__ */ o("div", { className: `col col-${O.width}` }, `row__${a}__col__${I}`);
        const N = Jn(
          O.widget,
          a,
          g,
          T,
          m,
          r,
          n.multiVizColumn
        ), { type: C, sharedFilterIndexes: E, filterBehavior: L, table: R, dataKey: Z } = N, z = g.dashboard.sharedFilters && g.dashboard.sharedFilters.filter((G) => G.setBy === O.widget).length > 0, j = z ? g.dashboard.sharedFilters.filter((G) => G.setBy === O.widget)[0].active : void 0, te = /* @__PURE__ */ f("a", { href: `#data-table-${Z}`, className: "margin-left-href", children: [
          Z,
          " (Go to Table)"
        ] }), b = i && L !== "Apply Button" && (C !== "dashboardFilters" || S(N)), M = n.toggle === void 0 || n.toggle && y[I], B = C === "dashboardFilters" && E && E.filter((G) => {
          var Ie, _e;
          return ((_e = (Ie = g.dashboard.sharedFilters) == null ? void 0 : Ie[G]) == null ? void 0 : _e.showDropdown) === !1;
        }).length === E.length, x = !h && !B, Y = `col-12 col-md-${O.width}${M ? "" : " d-none"}${b ? " hide-parent-visualization" : x ? " mb-4" : ""}`, J = g.table && g.table.show && g.datasets && R && R.showDataTableLink ? te : void 0;
        return b ? null : /* @__PURE__ */ f(
          Hl,
          {
            className: Y,
            allExpanded: e,
            currentViewport: c,
            groupName: t,
            collapsible: n.expandCollapseAllButtons,
            children: [
              C === "chart" && /* @__PURE__ */ o(
                yn,
                {
                  config: N,
                  dashboardConfig: g,
                  datasets: g.datasets,
                  setConfig: (G) => {
                    l(O.widget, G);
                  },
                  setSharedFilter: z ? s : void 0,
                  isDashboard: !0,
                  link: J
                },
                O.widget
              ),
              C === "map" && /* @__PURE__ */ o(
                hn,
                {
                  config: N,
                  setConfig: (G) => {
                    l(O.widget, G);
                  },
                  showLoader: !1,
                  setSharedFilter: z ? s : void 0,
                  setSharedFilterValue: j,
                  isDashboard: !0,
                  link: J,
                  dataset: g.datasets
                },
                O.widget
              ),
              C === "data-bite" && /* @__PURE__ */ o(
                bn,
                {
                  config: N,
                  setConfig: (G) => {
                    l(O.widget, G);
                  },
                  isDashboard: !0
                },
                O.widget
              ),
              C === "waffle-chart" && /* @__PURE__ */ o(
                Dn,
                {
                  config: N,
                  setConfig: (G) => {
                    l(O.widget, G);
                  },
                  isDashboard: !0,
                  configUrl: J
                },
                O.widget
              ),
              C === "markup-include" && /* @__PURE__ */ o(
                Sn,
                {
                  config: N,
                  isDashboard: !0,
                  setConfig: (G) => {
                    l(O.widget, G);
                  }
                },
                O.widget
              ),
              C === "filtered-text" && /* @__PURE__ */ o(
                Qn,
                {
                  config: N,
                  setConfig: (G) => {
                    l(O.widget, G);
                  },
                  isDashboard: !0
                },
                O.widget
              ),
              C === "dashboardFilters" && /* @__PURE__ */ o(
                Xn,
                {
                  setConfig: (G) => {
                    l(O.widget, G);
                  },
                  visualizationConfig: N,
                  apiFilterDropdowns: u,
                  currentViewport: c
                },
                O.widget
              ),
              C === "table" && /* @__PURE__ */ o(
                tr,
                {
                  updateConfig: (G) => {
                    l(O.widget, G);
                  },
                  visualizationKey: O.widget,
                  config: N,
                  viewport: c
                },
                O.widget
              )
            ]
          },
          `vis__${a}__${I}`
        );
      }
    })
  ] }, `row__${a}`);
}, an = function(e = " ", r = "") {
  return this.split(e).map((t) => t.charAt(0).toUpperCase() + t.slice(1)).join(r);
}, jl = (e, r, t) => {
  let n = !1;
  return e.find((a) => {
    if (a.type === "urlfilter" && !Array.isArray(a.active) && a.filterBy === "File Name")
      return n = !0, !0;
  }), Object.keys(t).forEach((a) => {
    decodeURIComponent(t[a]) !== r[a] && (n = !0);
  }), n;
}, on = ({ visualizations: e, datasets: r, rows: t }) => {
  const n = Object.values(e).map((l) => l.dataKey), a = t.map((l) => l.dataKey), i = Object.values(e).map((l) => {
    var u;
    return (u = l.footnotes) == null ? void 0 : u.dataKey;
  }).filter(Boolean), s = P.uniq([...n, ...a, ...i]);
  return Object.keys(r).filter((l) => s.includes(l));
}, Gl = (e, r, t) => {
  const n = Object.keys(e).flatMap((s) => {
    const l = e[s];
    return l === void 0 ? [] : typeof l == "string" && l.match(/undefined/) ? [] : Array.isArray(l) ? l.map((u) => ({ key: s, value: u })) : { key: s, value: l };
  }), a = r.origin + r.pathname;
  let i = `${a}${qt(a, n)}`;
  if (t !== "") {
    const s = r.pathname.split(".").pop(), l = r.pathname.substring(0, r.pathname.lastIndexOf("/"));
    i = `${r.origin}${l}/${t}.${s}${qt(
      a,
      n
    )}`;
  }
  return i;
}, ql = (e, r, t) => {
  const n = {
    "Remove Spaces": "",
    "Keep Spaces": " ",
    "Replace With Underscore": "_"
  };
  let a = e;
  return r.datasetKey === t && (r.fileName ? a = an.call(
    String(r.fileName),
    " ",
    n[r.whitespaceReplacement ?? "Keep Spaces"]
  ) : a = r.active), a != null && a.includes("${query}") && (a = a.replace(
    "${query}",
    an.call(
      String(r.active),
      " ",
      n[r.whitespaceReplacement ?? "Keep Spaces"]
    )
  )), a;
}, Wl = (e, r) => Object.keys(e).reduce((t, n) => {
  const a = e[n].dataKey;
  return r[a] && (t[n].formattedData = r[a]), t;
}, P.cloneDeep(e)), Ql = (e, r, t, n) => {
  var i;
  if (!e.usedBy || !e.usedBy.length)
    return !0;
  const a = (i = e.usedBy) == null ? void 0 : i.map((s) => t[s] || n[s]);
  return a == null ? void 0 : a.some((s) => {
    var c;
    const l = (s == null ? void 0 : s.dataKey) === r, u = ((c = s == null ? void 0 : s.footnotes) == null ? void 0 : c.dataKey) === r;
    return l || u;
  });
}, Kl = (e, r, t, n) => {
  const a = (i, s, l, u = 50) => {
    if (!i)
      return;
    const c = i.map((v, y) => y), h = l ? c : n;
    i = i.map(
      (v, y) => {
        var w;
        return nn(
          y,
          s[(w = v.apiFilter) == null ? void 0 : w.apiEndpoint],
          i,
          h
        );
      }
    );
    const d = i.filter((v) => v.apiFilter), g = new Map(d.map((v) => [v.apiFilter.apiEndpoint, v.apiFilter])), m = xl(i, s), T = Object.values(m).reduce(
      (v, [y]) => ({ ...v, [y]: null }),
      {}
    );
    t((v) => ({ ...v, ...T }));
    const _ = P.cloneDeep(s);
    return Promise.all(
      Object.keys(m).map(
        (v) => new Promise((y) => {
          fetch(v).then((w) => w.json()).then((w) => {
            Array.isArray(w) || console.error("COVE only supports response data in the shape Array<Object>");
            const [D, S] = m[v], O = g.get(D), I = Fl(w, O);
            _[D] = I;
            const N = nn(
              S,
              I,
              i,
              h
            );
            i[S] = N;
          }).catch(() => {
            r({
              type: "ADD_ERROR_MESSAGE",
              payload: "There was a problem returning data. Please try again."
            }), y({ error: !0 });
          }).finally(() => {
            y({ error: !1 });
          });
        })
      )
    ).then((v) => {
      const y = v.some(({ error: D }) => D), w = i.reduce((D, S, O) => h.includes(O) && !S.active ? Yn(Zn(S, i)) ? D : [...D, O] : D, []);
      return y || !w.length || u === 0 ? (t(_), e({ type: "SET_SHARED_FILTERS", payload: i }), i) : a(i, _, l, u - 1);
    });
  };
  return a;
}, Zl = (e, r) => {
  var s;
  const t = !!Be("cove-auto-load"), n = e.multiDashboards ? e.multiDashboards[e.activeDashboard] : e, a = (s = n.dashboard.sharedFilters) == null ? void 0 : s.some(
    (l) => l.filterBy === "File Name"
  ), i = Object.values(n.visualizations).reduce((l, u) => {
    if (l === !1)
      return l;
    if (u.visualizationType === "dashboardFilters") {
      if (u.filterBehavior === "Apply Button")
        return !1;
      if (u.autoLoad)
        return !0;
    }
    return l;
  }, void 0);
  if (t || i || a || r) {
    const l = n.rows.map((h) => h.dataKey).filter(Boolean);
    return !!Object.values(n.visualizations).map((h) => h.dataKey).filter(Boolean).concat(l).find((h) => {
      var d;
      return !((d = e.datasets[h].data) != null && d.length);
    });
  }
  return !1;
}, Yl = ({
  visualizationKey: e,
  visualizationConfig: r,
  _updateConfig: t,
  isDebug: n,
  setSharedFilter: a,
  apiFilterDropdowns: i,
  state: s
}) => {
  const l = s.config.dashboard.sharedFilters && s.config.dashboard.sharedFilters.filter((c) => c.setBy === e).length > 0, u = l ? s.config.dashboard.sharedFilters.filter((c) => c.setBy === e)[0].active : void 0;
  switch (r.type) {
    case "chart":
      return /* @__PURE__ */ o(
        yn,
        {
          config: r,
          isEditor: !0,
          isDebug: n,
          setConfig: t,
          setSharedFilter: l ? a : void 0,
          setSharedFilterValue: u,
          dashboardConfig: s.config,
          datasets: s.config.datasets,
          isDashboard: !0
        },
        e
      );
    case "map":
      return /* @__PURE__ */ o(
        hn,
        {
          config: r,
          isEditor: !0,
          isDebug: n,
          setConfig: t,
          setSharedFilter: l ? a : void 0,
          setSharedFilterValue: u,
          isDashboard: !0,
          showLoader: !1,
          dashboardConfig: s.config,
          datasets: s.config.datasets
        },
        e
      );
    case "data-bite":
      return /* @__PURE__ */ o(
        bn,
        {
          config: { ...r, newViz: !0 },
          isEditor: !0,
          setConfig: t,
          isDashboard: !0
        },
        e
      );
    case "waffle-chart":
      return /* @__PURE__ */ o(
        Dn,
        {
          config: r,
          isEditor: !0,
          setConfig: t,
          isDashboard: !0
        },
        e
      );
    case "markup-include":
      return /* @__PURE__ */ o(
        Sn,
        {
          config: r,
          isEditor: !0,
          setConfig: t,
          isDashboard: !0,
          datasets: s.config.datasets
        },
        e
      );
    case "filtered-text":
      return /* @__PURE__ */ o(
        Qn,
        {
          config: r,
          isEditor: !0,
          setConfig: t,
          isDashboard: !0
        },
        e
      );
    case "dashboardFilters":
      return /* @__PURE__ */ o(
        Xn,
        {
          isEditor: !0,
          visualizationConfig: r,
          apiFilterDropdowns: i,
          setConfig: t
        }
      );
    case "table":
      return /* @__PURE__ */ o(
        tr,
        {
          visualizationKey: e,
          config: r,
          isEditor: !0,
          updateConfig: t,
          datasets: s.config.datasets
        }
      );
    default:
      return null;
  }
};
function Xl({ initialState: e, isEditor: r = !1, isDebug: t = !1 }) {
  var te, b, M, B, x, Y, J, G, Ie, _e, We, Qe, rr, nr;
  const [n, a] = p.useReducer(gl, e), [i, s] = p.useReducer(vl, []), l = p.useContext(ln), [u, c] = p.useState({}), [h, d] = p.useState("lg"), [g] = p.useState(`cove-${Math.random().toString(16).slice(-4)}`), [m, T] = p.useState(!0), [_, v] = p.useState(!1), y = n.tabSelected === "Dashboard Preview", w = p.useMemo(() => {
    const A = on(n.config).map((V) => n.data[V]);
    return A.length ? A.some((V) => V === void 0) : !0;
  }, [n.data]), D = er(n.config.rows), S = new Fe(), O = p.useMemo(() => Object.values(n.config.visualizations).filter((A) => A.type === "dashboardFilters").reduce((A, V) => V.autoLoad ? [...A, ...V.sharedFilterIndexes] : A, []), [n.config.visualizations]), I = Kl(
    a,
    s,
    c,
    O
  ), N = async (A) => {
    const V = P.cloneDeep(n.config);
    if (!V.datasets)
      return;
    const W = A || V.dashboard.sharedFilters, K = on(V), H = P.cloneDeep(n.data), Q = P.cloneDeep(V.datasets);
    let ee = !1, ve = "";
    for (let ye = 0; ye < K.length; ye++) {
      const re = K[ye], le = V.datasets[re], Ne = Object.fromEntries(new URLSearchParams(window.location.search)), ge = Ne[le.loadQueryParam || ""];
      if (le.dataUrl && (W || ge)) {
        const Oe = new URL(le.runtimeDataUrl || le.dataUrl, window.location.origin), xe = Object.fromEntries(new URLSearchParams(Oe.search)), ue = {};
        ge && (ue[le.loadQueryParam] = ge), W == null || W.forEach((q) => {
          var Se;
          if (q.type === "urlfilter" && Ql(q, re, V.visualizations, V.rows)) {
            if (q.filterBy === "File Name" && (ve = ql(ve, q, re)), q.queryParameter && (ue[q.queryParameter] ? ue[q.queryParameter] = ue[q.queryParameter] + q.active : ue[q.queryParameter] = q.active), q.setByQueryParameter) {
              const we = Ne[q.setByQueryParameter], wt = ((Se = q.apiFilter) == null ? void 0 : Se.valueSelector) || q.setByQueryParameter;
              we && (ue[wt] = we);
            }
            q.apiFilter && q.active && (ue[q.apiFilter.valueSelector] = q.active, q.apiFilter.subgroupValueSelector && q.subGrouping.active && (ue[q.apiFilter.subgroupValueSelector] = q.subGrouping.active));
          }
        });
        const oe = jl(W, xe, ue);
        if (A || oe) {
          ee = !0;
          const q = Gl(
            { ...xe, ...ue },
            Oe,
            ve
          );
          v(!0), await qe(q).then((Se) => {
            let we = Se;
            if (Se && le.dataDescription)
              try {
                we = S.autoStandardize(we), we = S.developerStandardize(we, le.dataDescription);
              } catch (wt) {
                console.error("Error standardizing data:", wt);
              }
            Q[re].data = we, Q[re].runtimeDataUrl = q, H[re] = we;
          }).catch((Se) => {
            console.error(Se), s({
              type: "ADD_ERROR_MESSAGE",
              payload: "There was a problem returning data. Please try again."
            }), Q[re].data = [], Q[re].runtimeDataUrl = q, H[re] = [];
          });
        }
      }
    }
    const Ce = P.pickBy(Q, (ye) => !ye.dataUrl);
    if (ee || Object.keys(Ce).length) {
      const ye = Object.keys(Ce).reduce((oe, q) => (oe[q] = Ce[q].data, oe), {}), re = { ...H, ...ye };
      a({ type: "SET_DATA", payload: re });
      const le = V.dashboard.sharedFilters.reduce((oe, q, Se) => (q.type === "datafilter" && oe.push(Se), oe), []), Ne = Object.values(V.visualizations).filter((oe) => oe.type === "dashboardFilters").flatMap((oe) => oe.sharedFilterIndexes).filter((oe) => !le.includes(oe)), ge = Gt(W, re, Ne), Oe = { ...V.dashboard, sharedFilters: ge }, xe = pt(
        { ...n, config: { ...n.config, dashboard: Oe } },
        {},
        re
      );
      a({ type: "SET_FILTERED_DATA", payload: xe });
      const ue = Wl(V.visualizations, H);
      a({
        type: "SET_CONFIG",
        payload: {
          dashboard: Oe,
          datasets: Q,
          visualizations: ue,
          activeDashboard: V.activeDashboard
        }
      }), v(!1);
    }
  }, C = (A, V) => {
    const { config: W, filteredData: K } = P.cloneDeep(n);
    for (let Q = 0; Q < W.dashboard.sharedFilters.length; Q++) {
      const ee = W.dashboard.sharedFilters[Q];
      if (ee.setBy === A) {
        ee.columnName && (ee.active = V[ee.columnName]);
        break;
      }
    }
    const H = pt({ ...n, config: W }, K);
    a({ type: "SET_FILTERED_DATA", payload: H }), a({ type: "SET_CONFIG", payload: W }), a({ type: "SET_SHARED_FILTERS", payload: W.dashboard.sharedFilters });
  }, E = ({ detail: A }) => {
    try {
      const V = Object.keys(A).reduce((K, H) => (n.data[H] !== void 0 && (K[H] = A[H]), K), {}), W = { ...n.filteredData, ...V };
      a({ type: "SET_FILTERED_DATA", payload: W }), a({ type: "SET_DATA", payload: { ...n.data, ...V } });
    } catch (V) {
      console.error("Error setting event data: ", V);
    }
  };
  p.useEffect(() => (fa("cove_set_data", E), () => {
    ha("cove_set_data", E);
  }), []), p.useEffect(() => {
    var K;
    const { config: A } = n, V = Zl(A, r && !y), W = Gt(A.dashboard.sharedFilters, n.data);
    v(!0), (K = I(W, u, V)) == null || K.then((H) => {
      H.every((ee) => ee.type === "datafilter" || ee.active) && N(H), v(!1);
    });
  }, [r, y, (te = n.config) == null ? void 0 : te.activeDashboard]);
  const L = (A, V) => {
    const W = P.cloneDeep(n.config), K = P.pick(W, ["visualizations", "multiDashboards"]);
    if (K.visualizations[A] = V, K.visualizations[A].formattedData = W.visualizations[A].formattedData, W.multiDashboards) {
      const H = W.activeDashboard, Q = [...W.multiDashboards], ve = { label: Q[H].label, visualizations: K.visualizations, ...P.pick(W, ["dashboard", "rows"]) };
      Q[H] = ve, K.multiDashboards = Q;
    }
    a({ type: "SET_CONFIG", payload: K }), r && l.setTempConfig(K);
  }, R = new ua((A) => {
    for (let V of A) {
      let W = ca(V.contentRect.width);
      d(W);
    }
  }), Z = p.useCallback((A) => {
    A !== null && R.observe(A);
  }, []);
  if (n.loading)
    return /* @__PURE__ */ o(mt, {});
  let z = null;
  if (r && !y) {
    let A = !1;
    Ae(n.config).forEach((V) => {
      var Q;
      const W = (Q = D[V]) == null ? void 0 : Q.row, K = Jn(
        V,
        W,
        n.config,
        n.data,
        n.filteredData
      );
      K.uid = V, n.config.dashboard.sharedFilters && n.config.dashboard.sharedFilters.filter((ee) => ee.setBy === V).length > 0 && n.config.dashboard.sharedFilters.filter((ee) => ee.setBy === V)[0].active, K.editing && (A = !0, z = /* @__PURE__ */ f(X, { children: [
        /* @__PURE__ */ o(Lt, { visualizationKey: V, subEditor: !0 }),
        /* @__PURE__ */ o(
          Yl,
          {
            visualizationKey: V,
            visualizationConfig: K,
            _updateConfig: (ve) => {
              let Ce = K.originalFormattedData ? { ...ve, formattedData: K.originalFormattedData } : ve;
              L(V, Ce);
            },
            isDebug: t,
            setSharedFilter: C,
            apiFilterDropdowns: u,
            state: n
          },
          V
        )
      ] }));
    }), A || (z = /* @__PURE__ */ f(no, { backend: $s, children: [
      _ && /* @__PURE__ */ o(Ft, { fullScreen: !0 }),
      /* @__PURE__ */ f("div", { className: "header-container", children: [
        /* @__PURE__ */ o(Lt, {}),
        /* @__PURE__ */ o(cl, {})
      ] }),
      /* @__PURE__ */ o("div", { className: "layout-container", children: /* @__PURE__ */ o(rl, {}) })
    ] }));
  } else {
    const { config: A } = n, { title: V, description: W } = A.dashboard || {}, K = (b = A.rows) == null ? void 0 : b.filter((H) => H.columns.filter((Q) => Q.widget).length !== 0);
    z = /* @__PURE__ */ f(X, { children: [
      r && /* @__PURE__ */ o(Lt, {}),
      _ && /* @__PURE__ */ o(Ft, { fullScreen: !0 }),
      /* @__PURE__ */ o(Gn, { isEditor: r && !y }),
      i.map((H, Q) => /* @__PURE__ */ o(
        ya,
        {
          type: "danger",
          onDismiss: () => s({ type: "DISMISS_ERROR_MESSAGE", payload: Q }),
          message: H,
          autoDismiss: !0
        },
        H + Q
      )),
      /* @__PURE__ */ o(ke.Responsive, { isEditor: r, children: /* @__PURE__ */ f("div", { className: `cdc-dashboard-inner-container${r ? " is-editor" : ""}`, children: [
        /* @__PURE__ */ o(
          vn,
          {
            title: V,
            isDashboard: !0,
            classes: ["dashboard-title", `${A.dashboard.theme ?? "theme-blue"}`]
          }
        ),
        W && /* @__PURE__ */ o("div", { className: "subtext mb-3", children: un(W) }),
        K == null ? void 0 : K.map((H, Q) => /* @__PURE__ */ o(
          ea,
          {
            allExpanded: m,
            groupName: "",
            row: H,
            rowIndex: Q,
            setSharedFilter: C,
            setAllExpanded: T,
            updateChildConfig: L,
            apiFilterDropdowns: u,
            currentViewport: h,
            inNoDataState: w,
            isLastRow: Q === K.length - 1
          },
          `row__${Q}`
        )),
        w ? /* @__PURE__ */ o("div", { className: "mt-5", children: "Please complete your selection to continue." }) : /* @__PURE__ */ o(X, {}),
        /* @__PURE__ */ f("section", { className: "download-buttons", children: [
          ((M = A.table) == null ? void 0 : M.downloadImageButton) && /* @__PURE__ */ o(
            ir.Button,
            {
              title: "Download Dashboard as Image",
              type: "image",
              state: A,
              text: "Download Dashboard Image",
              elementToCapture: g
            }
          ),
          ((B = A.table) == null ? void 0 : B.downloadPdfButton) && /* @__PURE__ */ o(
            ir.Button,
            {
              title: "Download Dashboard as PDF",
              type: "pdf",
              state: A,
              text: "Download Dashboard PDF",
              elementToCapture: g
            }
          )
        ] }),
        ((x = A.table) == null ? void 0 : x.show) && A.data && /* @__PURE__ */ o(
          Rt,
          {
            config: A,
            rawData: (J = (Y = A.data) == null ? void 0 : Y[0]) != null && J.tableData ? (Ie = (G = A.data) == null ? void 0 : G[0]) == null ? void 0 : Ie.tableData : A.data,
            runtimeData: (We = (_e = A.data) == null ? void 0 : _e[0]) != null && We.tableData ? (rr = (Qe = A.data) == null ? void 0 : Qe[0]) == null ? void 0 : rr.tableData : A.data || [],
            expandDataTable: A.table.expanded,
            tableTitle: A.dashboard.title || "",
            viewport: h,
            tabbingId: A.dashboard.title || "",
            outerContainerRef: Z,
            imageRef: g,
            isDebug: t,
            isEditor: r
          }
        ),
        ((nr = A.table) == null ? void 0 : nr.show) && A.datasets && Object.keys(A.datasets).map((H) => {
          var Ce, ye, re, le, Ne;
          const Q = Ae(A).filter((ge) => A.visualizations[ge].dataKey === H);
          let ee = [];
          (Ce = A.dashboard.sharedFilters) == null || Ce.forEach((ge) => {
            let Oe = !0;
            Q.forEach((xe) => {
              ge.usedBy && ge.usedBy.indexOf(xe) === -1 && (Oe = !1);
            }), Oe && ee.push(ge);
          });
          const ve = ee.length > 0 ? Ve(ee, A.datasets[H].data) : void 0;
          return /* @__PURE__ */ o(
            "div",
            {
              className: "multi-table-container",
              id: `data-table-${H}`,
              children: /* @__PURE__ */ o(
                Rt,
                {
                  config: A,
                  dataConfig: A.datasets[H],
                  rawData: ((re = (ye = A.datasets[H].data) == null ? void 0 : ye[0]) == null ? void 0 : re.tableData) || A.datasets[H].data,
                  runtimeData: ((Ne = (le = A.datasets[H].data) == null ? void 0 : le[0]) == null ? void 0 : Ne.tableData) || ve || A.datasets[H].data || [],
                  expandDataTable: A.table.expanded,
                  tableTitle: H,
                  viewport: h,
                  tabbingId: H
                }
              )
            },
            `data-table-${H}`
          );
        })
      ] }) })
    ] });
  }
  const j = ["cdc-open-viz-module", "type-dashboard", `${h}`];
  return /* @__PURE__ */ o(Us, { children: /* @__PURE__ */ o(
    ie.Provider,
    {
      value: {
        ...n,
        setParentConfig: l.setTempConfig,
        outerContainerRef: Z,
        isDebug: t,
        loadAPIFilters: I,
        setAPIFilterDropdowns: c,
        reloadURLData: N,
        setAPILoading: v
      },
      children: /* @__PURE__ */ f(pe.Provider, { value: a, children: [
        /* @__PURE__ */ o("div", { className: j.join(" "), ref: Z, "data-download-id": g, children: z }),
        /* @__PURE__ */ o(Gs, {})
      ] })
    }
  ) });
}
const sn = {
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
}, Jl = async (e) => {
  let r = e.formattedData || e.data;
  return e.dataUrl && (r = await qe(`${e.dataUrl}`), r = Pe(r, e.dataDescription)), r;
}, Pu = ({ configUrl: e, isEditor: r, isDebug: t, config: n }) => {
  const [a, i] = p.useState(void 0), s = p.useContext(ln), l = (m) => {
    if (!m.multiDashboards)
      return null;
    const T = Wt()["cove-tab"];
    return T !== void 0 && Number(T) < m.multiDashboards.length ? Number(T) : 0;
  }, u = (m, T) => {
    const [_, v] = Ht(ft)(m, T), y = wn(_);
    return { ...ft, config: y, filteredData: v, data: T };
  }, c = async () => {
    const m = n || s.config || await (await fetch(e)).json(), T = l(m), { newConfig: _, datasets: v } = T !== null ? await g(m, T) : await d(m);
    i(u(_, v));
  };
  p.useEffect(() => {
    c();
  }, []);
  const h = (m) => {
    let T = { ...m };
    const _ = Object.keys(m.datasets).reduce((v, y) => {
      const w = m.datasets[y];
      return v[y] = w.formattedData || w.data, v;
    }, {});
    return Ae(T).forEach((v) => {
      const y = _[T.visualizations[v].dataKey];
      y && (T.visualizations[v].formattedData = y);
    }), Object.keys(_).forEach((v) => {
      T.datasets[v].data = _[v];
    }), { newConfig: T, datasets: _ };
  }, d = async (m) => {
    let T = { ...sn, ...m };
    if (m.datasets)
      return h(T);
    {
      const _ = T.dataFileName || "backwards-compatibility", v = await Jl(m), y = {};
      if (y[_] = {
        data: v,
        dataDescription: T.dataDescription
      }, T.datasets = y, Ae(T).forEach((S) => {
        const O = { dataKey: _, ...P.pick(T, "dataDescription", "formattedData") };
        T.visualizations[S] = { ...T.visualizations[S], ...O };
      }), T = { ...T, ...{
        data: [],
        dataUrl: "",
        dataFileName: "",
        dataFileSourceType: "",
        dataDescription: {},
        formattedData: []
      } }, T.dashboard.filters) {
        const S = { ...T.dashboard };
        S.sharedFilters || (S.sharedFilters = []);
        const O = S.filters.map((I) => ({ ...I, key: I.label, showDropdown: !0, usedBy: Ae(T) }));
        S.sharedFilters = [...S.sharedFilters, ...O], T.dashboard = { ...S, filters: void 0 };
      }
      const D = { [_]: v };
      return { newConfig: T, datasets: D };
    }
  }, g = async (m, T) => {
    const _ = m.multiDashboards[T], v = {
      ...sn,
      ...m,
      ..._,
      multiDashboards: m.multiDashboards,
      activeDashboard: T
    };
    return h(v);
  };
  return a ? /* @__PURE__ */ o(Xl, { isEditor: r, isDebug: t, initialState: a }) : /* @__PURE__ */ o(mt, {});
};
export {
  Us as G,
  Pu as M,
  Gs as O
};
