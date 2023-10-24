import { r as S, R as i } from "./storybook-e61d95ab.es.js";
import { I as ga, S as Uc } from "./storybook-a729838e.es.js";
import { T as Ge } from "./storybook-46a89ba7.es.js";
import { E as jc, H as pa, L as qc } from "./storybook-e806525d.es.js";
import { c as Gc, g as Hc } from "./storybook-c5d32002.es.js";
import { i as Vc, g as Wc, f as Zc } from "./storybook-46f8780f.es.js";
import { n as Xc, D as Yc } from "./storybook-a2757a35.es.js";
import { u as Jc, p as Qt, c as Qc } from "./storybook-ae809cc1.es.js";
import "./storybook-329ae7fd.es.js";
const $r = {
  type: "data-bite",
  data: [],
  dataBite: "",
  dataFunction: "",
  dataColumn: "",
  bitePosition: "Left",
  biteFontSize: 24,
  fontSize: "medium",
  biteBody: "",
  imageData: {
    display: "none",
    url: "",
    alt: "",
    options: []
  },
  dataFormat: {
    roundToPlace: 0,
    commas: !0,
    prefix: "",
    suffix: "%"
  },
  biteStyle: "graphic",
  filters: [],
  subtext: "",
  title: "",
  theme: "theme-blue",
  shadow: !1,
  visual: {
    border: !1,
    accent: !1,
    background: !1,
    hideBackgroundColor: !1,
    borderColorTheme: !1
  },
  general: {
    isCompactStyle: !1
  }
}, bn = S.createContext({});
function Fr(n, u) {
  if (!(n instanceof u))
    throw new TypeError("Cannot call a class as a function");
}
function Kt(n, u) {
  for (var s = 0; s < u.length; s++) {
    var v = u[s];
    v.enumerable = v.enumerable || !1, v.configurable = !0, "value" in v && (v.writable = !0), Object.defineProperty(n, v.key, v);
  }
}
function _a(n, u, s) {
  return u && Kt(n.prototype, u), s && Kt(n, s), n;
}
function ne(n, u, s) {
  return u in n ? Object.defineProperty(n, u, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[u] = s, n;
}
function Le() {
  return Le = Object.assign || function(n) {
    for (var u = 1; u < arguments.length; u++) {
      var s = arguments[u];
      for (var v in s)
        Object.prototype.hasOwnProperty.call(s, v) && (n[v] = s[v]);
    }
    return n;
  }, Le.apply(this, arguments);
}
function en(n, u) {
  var s = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var v = Object.getOwnPropertySymbols(n);
    u && (v = v.filter(function(y) {
      return Object.getOwnPropertyDescriptor(n, y).enumerable;
    })), s.push.apply(s, v);
  }
  return s;
}
function Kc(n) {
  for (var u = 1; u < arguments.length; u++) {
    var s = arguments[u] != null ? arguments[u] : {};
    u % 2 ? en(Object(s), !0).forEach(function(v) {
      ne(n, v, s[v]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s)) : en(Object(s)).forEach(function(v) {
      Object.defineProperty(n, v, Object.getOwnPropertyDescriptor(s, v));
    });
  }
  return n;
}
function xa(n, u) {
  if (typeof u != "function" && u !== null)
    throw new TypeError("Super expression must either be null or a function");
  n.prototype = Object.create(u && u.prototype, {
    constructor: {
      value: n,
      writable: !0,
      configurable: !0
    }
  }), u && ba(n, u);
}
function Mr(n) {
  return Mr = Object.setPrototypeOf ? Object.getPrototypeOf : function(s) {
    return s.__proto__ || Object.getPrototypeOf(s);
  }, Mr(n);
}
function ba(n, u) {
  return ba = Object.setPrototypeOf || function(v, y) {
    return v.__proto__ = y, v;
  }, ba(n, u);
}
function eu() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function ru(n, u) {
  if (n == null)
    return {};
  var s = {}, v = Object.keys(n), y, _;
  for (_ = 0; _ < v.length; _++)
    y = v[_], !(u.indexOf(y) >= 0) && (s[y] = n[y]);
  return s;
}
function Rr(n, u) {
  if (n == null)
    return {};
  var s = ru(n, u), v, y;
  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(n);
    for (y = 0; y < _.length; y++)
      v = _[y], !(u.indexOf(v) >= 0) && Object.prototype.propertyIsEnumerable.call(n, v) && (s[v] = n[v]);
  }
  return s;
}
function Be(n) {
  if (n === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return n;
}
function au(n, u) {
  return u && (typeof u == "object" || typeof u == "function") ? u : Be(n);
}
function Aa(n) {
  var u = eu();
  return function() {
    var v = Mr(n), y;
    if (u) {
      var _ = Mr(this).constructor;
      y = Reflect.construct(v, arguments, _);
    } else
      y = v.apply(this, arguments);
    return au(this, y);
  };
}
function tu(n, u) {
  return ou(n) || cu(n, u) || yn(n, u) || su();
}
function nu(n) {
  return lu(n) || iu(n) || yn(n) || uu();
}
function lu(n) {
  if (Array.isArray(n))
    return ya(n);
}
function ou(n) {
  if (Array.isArray(n))
    return n;
}
function iu(n) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(n))
    return Array.from(n);
}
function cu(n, u) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(n)))) {
    var s = [], v = !0, y = !1, _ = void 0;
    try {
      for (var A = n[Symbol.iterator](), I; !(v = (I = A.next()).done) && (s.push(I.value), !(u && s.length === u)); v = !0)
        ;
    } catch (E) {
      y = !0, _ = E;
    } finally {
      try {
        !v && A.return != null && A.return();
      } finally {
        if (y)
          throw _;
      }
    }
    return s;
  }
}
function yn(n, u) {
  if (n) {
    if (typeof n == "string")
      return ya(n, u);
    var s = Object.prototype.toString.call(n).slice(8, -1);
    if (s === "Object" && n.constructor && (s = n.constructor.name), s === "Map" || s === "Set")
      return Array.from(n);
    if (s === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))
      return ya(n, u);
  }
}
function ya(n, u) {
  (u == null || u > n.length) && (u = n.length);
  for (var s = 0, v = new Array(u); s < u; s++)
    v[s] = n[s];
  return v;
}
function uu() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function su() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var fu = function n(u) {
  var s = this, v = u.expanded, y = v === void 0 ? [] : v, _ = u.allowMultipleExpanded, A = _ === void 0 ? !1 : _, I = u.allowZeroExpanded, E = I === void 0 ? !1 : I;
  Fr(this, n), ne(this, "expanded", void 0), ne(this, "allowMultipleExpanded", void 0), ne(this, "allowZeroExpanded", void 0), ne(this, "toggleExpanded", function(k) {
    if (s.isItemDisabled(k))
      return s;
    var D = s.isItemExpanded(k);
    return D ? s.augment({
      expanded: s.expanded.filter(function(L) {
        return L !== k;
      })
    }) : s.augment({
      expanded: s.allowMultipleExpanded ? [].concat(nu(s.expanded), [k]) : [k]
    });
  }), ne(this, "isItemDisabled", function(k) {
    var D = s.isItemExpanded(k), L = s.expanded.length === 1;
    return !!(D && !s.allowZeroExpanded && L);
  }), ne(this, "isItemExpanded", function(k) {
    return s.expanded.indexOf(k) !== -1;
  }), ne(this, "getPanelAttributes", function(k, D) {
    var L = D ?? s.isItemExpanded(k);
    return {
      role: s.allowMultipleExpanded ? void 0 : "region",
      "aria-hidden": s.allowMultipleExpanded ? !L : void 0,
      "aria-labelledby": s.getButtonId(k),
      id: s.getPanelId(k),
      hidden: L ? void 0 : !0
    };
  }), ne(this, "getHeadingAttributes", function() {
    return {
      role: "heading"
    };
  }), ne(this, "getButtonAttributes", function(k, D) {
    var L = D ?? s.isItemExpanded(k), le = s.isItemDisabled(k);
    return {
      id: s.getButtonId(k),
      "aria-disabled": le,
      "aria-expanded": L,
      "aria-controls": s.getPanelId(k),
      role: "button",
      tabIndex: 0
    };
  }), ne(this, "getPanelId", function(k) {
    return "accordion__panel-".concat(k);
  }), ne(this, "getButtonId", function(k) {
    return "accordion__heading-".concat(k);
  }), ne(this, "augment", function(k) {
    return new n(Kc({
      expanded: s.expanded,
      allowMultipleExpanded: s.allowMultipleExpanded,
      allowZeroExpanded: s.allowZeroExpanded
    }, k));
  }), this.expanded = y, this.allowMultipleExpanded = A, this.allowZeroExpanded = E;
}, En = /* @__PURE__ */ S.createContext(null), wn = /* @__PURE__ */ function(n) {
  xa(s, n);
  var u = Aa(s);
  function s() {
    var v;
    Fr(this, s);
    for (var y = arguments.length, _ = new Array(y), A = 0; A < y; A++)
      _[A] = arguments[A];
    return v = u.call.apply(u, [this].concat(_)), ne(Be(v), "state", new fu({
      expanded: v.props.preExpanded,
      allowMultipleExpanded: v.props.allowMultipleExpanded,
      allowZeroExpanded: v.props.allowZeroExpanded
    })), ne(Be(v), "toggleExpanded", function(I) {
      v.setState(function(E) {
        return E.toggleExpanded(I);
      }, function() {
        v.props.onChange && v.props.onChange(v.state.expanded);
      });
    }), ne(Be(v), "isItemDisabled", function(I) {
      return v.state.isItemDisabled(I);
    }), ne(Be(v), "isItemExpanded", function(I) {
      return v.state.isItemExpanded(I);
    }), ne(Be(v), "getPanelAttributes", function(I, E) {
      return v.state.getPanelAttributes(I, E);
    }), ne(Be(v), "getHeadingAttributes", function() {
      return v.state.getHeadingAttributes();
    }), ne(Be(v), "getButtonAttributes", function(I, E) {
      return v.state.getButtonAttributes(I, E);
    }), v;
  }
  return _a(s, [{
    key: "render",
    value: function() {
      var y = this.state, _ = y.allowZeroExpanded, A = y.allowMultipleExpanded;
      return /* @__PURE__ */ S.createElement(En.Provider, {
        value: {
          allowMultipleExpanded: A,
          allowZeroExpanded: _,
          toggleExpanded: this.toggleExpanded,
          isItemDisabled: this.isItemDisabled,
          isItemExpanded: this.isItemExpanded,
          getPanelAttributes: this.getPanelAttributes,
          getHeadingAttributes: this.getHeadingAttributes,
          getButtonAttributes: this.getButtonAttributes
        }
      }, this.props.children || null);
    }
  }]), s;
}(S.PureComponent);
ne(wn, "defaultProps", {
  allowMultipleExpanded: !1,
  allowZeroExpanded: !1
});
var _n = /* @__PURE__ */ function(n) {
  xa(s, n);
  var u = Aa(s);
  function s() {
    var v;
    Fr(this, s);
    for (var y = arguments.length, _ = new Array(y), A = 0; A < y; A++)
      _[A] = arguments[A];
    return v = u.call.apply(u, [this].concat(_)), ne(Be(v), "renderChildren", function(I) {
      return I ? v.props.children(I) : null;
    }), v;
  }
  return _a(s, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ S.createElement(En.Consumer, null, this.renderChildren);
    }
  }]), s;
}(S.PureComponent), du = function(u) {
  var s = u.className, v = s === void 0 ? "accordion" : s, y = u.allowMultipleExpanded, _ = u.allowZeroExpanded, A = u.onChange, I = u.preExpanded, E = Rr(u, ["className", "allowMultipleExpanded", "allowZeroExpanded", "onChange", "preExpanded"]);
  return /* @__PURE__ */ S.createElement(wn, {
    preExpanded: I,
    allowMultipleExpanded: y,
    allowZeroExpanded: _,
    onChange: A
  }, /* @__PURE__ */ S.createElement("div", Le({
    "data-accordion-component": "Accordion",
    className: v
  }, E)));
}, Ea;
(function(n) {
  n.Accordion = "Accordion", n.AccordionItem = "AccordionItem", n.AccordionItemButton = "AccordionItemButton", n.AccordionItemHeading = "AccordionItemHeading", n.AccordionItemPanel = "AccordionItemPanel";
})(Ea || (Ea = {}));
var xn = Ea, vu = 0, ha = vu;
function mu() {
  var n = ha;
  return ha = ha + 1, "raa-".concat(n);
}
var gu = /[\u0009\u000a\u000c\u000d\u0020]/g;
function br(n) {
  return n === "" || gu.test(n) ? (console.error('uuid must be a valid HTML5 id but was given "'.concat(n, '", ASCII whitespaces are forbidden')), !1) : !0;
}
var An = /* @__PURE__ */ S.createContext(null), pu = function(u) {
  var s = u.children, v = u.uuid, y = u.accordionContext, _ = u.dangerouslySetExpanded, A = function() {
    y.toggleExpanded(v);
  }, I = function(k) {
    var D = _ ?? k.isItemExpanded(v), L = k.isItemDisabled(v), le = k.getPanelAttributes(v, _), Ae = k.getHeadingAttributes(v), ce = k.getButtonAttributes(v, _);
    return /* @__PURE__ */ S.createElement(An.Provider, {
      value: {
        uuid: v,
        expanded: D,
        disabled: L,
        toggleExpanded: A,
        panelAttributes: le,
        headingAttributes: Ae,
        buttonAttributes: ce
      }
    }, s);
  };
  return /* @__PURE__ */ S.createElement(_n, null, I);
}, hu = function(u) {
  return /* @__PURE__ */ S.createElement(_n, null, function(s) {
    return /* @__PURE__ */ S.createElement(pu, Le({}, u, {
      accordionContext: s
    }));
  });
}, Br = function(u) {
  var s = u.children, v = function(_) {
    return _ ? s(_) : null;
  };
  return /* @__PURE__ */ S.createElement(An.Consumer, null, v);
}, pr = function(u) {
  var s = u.uuid, v = u.dangerouslySetExpanded, y = u.className, _ = y === void 0 ? "accordion__item" : y, A = u.activeClassName, I = Rr(u, ["uuid", "dangerouslySetExpanded", "className", "activeClassName"]), E = S.useState(mu()), k = tu(E, 1), D = k[0], L = s ?? D, le = function(ce) {
    var b = ce.expanded, V = b && A ? A : _;
    return /* @__PURE__ */ S.createElement("div", Le({
      "data-accordion-component": "AccordionItem",
      className: V
    }, I));
  };
  return br(L.toString()), I.id && br(I.id), /* @__PURE__ */ S.createElement(hu, {
    uuid: L,
    dangerouslySetExpanded: v
  }, /* @__PURE__ */ S.createElement(Br, null, le));
};
pr.displayName = xn.AccordionItem;
function kn(n) {
  return n && (n.matches('[data-accordion-component="Accordion"]') ? n : kn(n.parentElement));
}
function Lr(n) {
  var u = kn(n);
  return u && Array.from(u.querySelectorAll('[data-accordion-component="AccordionItemButton"]'));
}
function bu(n) {
  var u = Lr(n) || [], s = u[0];
  s && s.focus();
}
function yu(n) {
  var u = Lr(n) || [], s = u[u.length - 1];
  s && s.focus();
}
function Eu(n) {
  var u = Lr(n) || [], s = u.indexOf(n);
  if (s !== -1) {
    var v = u[s + 1];
    v && v.focus();
  }
}
function wu(n) {
  var u = Lr(n) || [], s = u.indexOf(n);
  if (s !== -1) {
    var v = u[s - 1];
    v && v.focus();
  }
}
var He = {
  END: "End",
  ENTER: "Enter",
  HOME: "Home",
  SPACE: " ",
  SPACE_DEPRECATED: "Spacebar",
  UP: "ArrowUp",
  DOWN: "ArrowDown",
  LEFT: "ArrowLeft",
  RIGHT: "ArrowRight"
}, _u = function(u) {
  var s = u.toggleExpanded, v = u.className, y = v === void 0 ? "accordion__button" : v, _ = Rr(u, ["toggleExpanded", "className"]), A = function(E) {
    var k = E.key;
    if ((k === He.ENTER || k === He.SPACE || k === He.SPACE_DEPRECATED) && (E.preventDefault(), s()), E.target instanceof HTMLElement)
      switch (k) {
        case He.HOME: {
          E.preventDefault(), bu(E.target);
          break;
        }
        case He.END: {
          E.preventDefault(), yu(E.target);
          break;
        }
        case He.LEFT:
        case He.UP: {
          E.preventDefault(), wu(E.target);
          break;
        }
        case He.RIGHT:
        case He.DOWN: {
          E.preventDefault(), Eu(E.target);
          break;
        }
      }
  };
  return _.id && br(_.id), /* @__PURE__ */ S.createElement("div", Le({
    className: y
  }, _, {
    role: "button",
    tabIndex: 0,
    onClick: s,
    onKeyDown: A,
    "data-accordion-component": "AccordionItemButton"
  }));
}, Dr = function(u) {
  return /* @__PURE__ */ S.createElement(Br, null, function(s) {
    var v = s.toggleExpanded, y = s.buttonAttributes;
    return /* @__PURE__ */ S.createElement(_u, Le({
      toggleExpanded: v
    }, u, y));
  });
}, xu = {
  className: "accordion__heading",
  "aria-level": 3
}, Au = `AccordionItemButton may contain only one child element, which must be an instance of AccordionItemButton.

From the WAI-ARIA spec (https://www.w3.org/TR/wai-aria-practices-1.1/#accordion):

“The button element is the only element inside the heading element. That is, if there are other visually persistent elements, they are not included inside the heading element.”

`, Nn = /* @__PURE__ */ function(n) {
  xa(s, n);
  var u = Aa(s);
  function s() {
    var v;
    Fr(this, s);
    for (var y = arguments.length, _ = new Array(y), A = 0; A < y; A++)
      _[A] = arguments[A];
    return v = u.call.apply(u, [this].concat(_)), ne(Be(v), "ref", void 0), ne(Be(v), "setRef", function(I) {
      v.ref = I;
    }), v;
  }
  return _a(s, [{
    key: "componentDidUpdate",
    value: function() {
      s.VALIDATE(this.ref);
    }
  }, {
    key: "componentDidMount",
    value: function() {
      s.VALIDATE(this.ref);
    }
  }, {
    key: "render",
    value: function() {
      return /* @__PURE__ */ S.createElement("div", Le({
        "data-accordion-component": "AccordionItemHeading"
      }, this.props, {
        ref: this.setRef
      }));
    }
  }], [{
    key: "VALIDATE",
    value: function(y) {
      if (y === void 0)
        throw new Error("ref is undefined");
      if (!(y.childElementCount === 1 && y.firstElementChild && y.firstElementChild.getAttribute("data-accordion-component") === "AccordionItemButton"))
        throw new Error(Au);
    }
  }]), s;
}(S.PureComponent);
ne(Nn, "defaultProps", xu);
var hr = function(u) {
  return /* @__PURE__ */ S.createElement(Br, null, function(s) {
    var v = s.headingAttributes;
    return u.id && br(u.id), /* @__PURE__ */ S.createElement(Nn, Le({}, u, v));
  });
};
hr.displayName = xn.AccordionItemHeading;
var Tr = function(u) {
  var s = u.className, v = s === void 0 ? "accordion__panel" : s, y = u.id, _ = Rr(u, ["className", "id"]), A = function(E) {
    var k = E.panelAttributes;
    return y && br(y), /* @__PURE__ */ S.createElement("div", Le({
      "data-accordion-component": "AccordionItemPanel",
      className: v
    }, _, k));
  };
  return /* @__PURE__ */ S.createElement(Br, null, A);
};
function ku(n, u, s) {
  var v = this, y = S.useRef(null), _ = S.useRef(0), A = S.useRef(null), I = S.useRef([]), E = S.useRef(), k = S.useRef(), D = S.useRef(n), L = S.useRef(!0);
  D.current = n;
  var le = !u && u !== 0 && typeof window < "u";
  if (typeof n != "function")
    throw new TypeError("Expected a function");
  u = +u || 0, s = s || {};
  var Ae = !!s.leading, ce = "trailing" in s ? !!s.trailing : !0, b = "maxWait" in s, V = b ? Math.max(+s.maxWait || 0, u) : null;
  S.useEffect(function() {
    return L.current = !0, function() {
      L.current = !1;
    };
  }, []);
  var ye = S.useMemo(function() {
    var ue = function(M) {
      var fe = I.current, xe = E.current;
      return I.current = E.current = null, _.current = M, k.current = D.current.apply(xe, fe);
    }, _e = function(M, fe) {
      le && cancelAnimationFrame(A.current), A.current = le ? requestAnimationFrame(M) : setTimeout(M, fe);
    }, se = function(M) {
      if (!L.current)
        return !1;
      var fe = M - y.current, xe = M - _.current;
      return !y.current || fe >= u || fe < 0 || b && xe >= V;
    }, Ne = function(M) {
      return A.current = null, ce && I.current ? ue(M) : (I.current = E.current = null, k.current);
    }, O = function() {
      var M = Date.now();
      if (se(M))
        return Ne(M);
      if (L.current) {
        var fe = M - y.current, xe = M - _.current, Ie = u - fe, ze = b ? Math.min(Ie, V - xe) : Ie;
        _e(O, ze);
      }
    }, Te = function() {
      for (var M = [], fe = 0; fe < arguments.length; fe++)
        M[fe] = arguments[fe];
      var xe = Date.now(), Ie = se(xe);
      if (I.current = M, E.current = v, y.current = xe, Ie) {
        if (!A.current && L.current)
          return _.current = y.current, _e(O, u), Ae ? ue(y.current) : k.current;
        if (b)
          return _e(O, u), ue(y.current);
      }
      return A.current || _e(O, u), k.current;
    };
    return Te.cancel = function() {
      A.current && (le ? cancelAnimationFrame(A.current) : clearTimeout(A.current)), _.current = 0, I.current = y.current = E.current = A.current = null;
    }, Te.isPending = function() {
      return !!A.current;
    }, Te.flush = function() {
      return A.current ? Ne(Date.now()) : k.current;
    }, Te;
  }, [Ae, b, u, V, ce, le]);
  return ye;
}
function Nu(n, u) {
  return n === u;
}
function rn(n) {
  return typeof n == "function" ? function() {
    return n;
  } : n;
}
function Cu(n) {
  var u = S.useState(rn(n)), s = u[0], v = u[1], y = S.useCallback(function(_) {
    return v(rn(_));
  }, []);
  return [s, y];
}
function $u(n, u, s) {
  var v = s && s.equalityFn || Nu, y = Cu(n), _ = y[0], A = y[1], I = ku(S.useCallback(function(k) {
    return A(k);
  }, [A]), u, s), E = S.useRef(n);
  return v(E.current, n) || (I(n), E.current = n), [_, I];
}
const Re = S.memo(({ label: n, section: u = null, subsection: s = null, fieldName: v, updateField: y, value: _, tooltip: A, type: I = "input", i: E = null, min: k = null, max: D = null, ...L }) => {
  const [le, Ae] = S.useState(_), [ce] = $u(le, 500);
  S.useEffect(() => {
    typeof ce == "string" && _ !== ce && y(u, s, v, ce, E);
  }, [ce, u, s, v, E, _, y]);
  let b = s ? `${u}-${s}-${v}` : `${u}-${s}-${v}`;
  const V = (ue) => {
    I !== "number" || k === null || !ue.target.value || parseFloat(k) <= parseFloat(ue.target.value) & parseFloat(D) >= parseFloat(ue.target.value) ? Ae(ue.target.value) : Ae(k.toString());
  };
  let ye = /* @__PURE__ */ i.createElement("input", { type: "text", name: b, onChange: V, ...L, value: le });
  return I === "textarea" && (ye = /* @__PURE__ */ i.createElement("textarea", { name: b, onChange: V, ...L, value: le })), I === "number" && (ye = /* @__PURE__ */ i.createElement("input", { type: "number", name: b, onChange: V, ...L, value: le })), /* @__PURE__ */ i.createElement(i.Fragment, null, n && n.length > 0 && /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, n, A), ye), (!n || n.length === 0) && ye);
}), Ke = S.memo(({ label: n, value: u, fieldName: s, section: v = null, subsection: y = null, tooltip: _, updateField: A, ...I }) => /* @__PURE__ */ i.createElement("label", { className: "checkbox" }, /* @__PURE__ */ i.createElement(
  "input",
  {
    type: "checkbox",
    name: s,
    checked: u,
    onChange: () => {
      A(v, y, s, !u);
    },
    ...I
  }
), /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, n), /* @__PURE__ */ i.createElement("span", { className: "cove-icon" }, _))), dr = S.memo(({ label: n, value: u, options: s, fieldName: v, section: y = null, subsection: _ = null, required: A = !1, updateField: I, initial: E, ...k }) => {
  let D = "";
  if (Array.isArray(s))
    D = s.map((L) => /* @__PURE__ */ i.createElement("option", { value: L, key: L }, L));
  else {
    D = [];
    for (const [L, le] of Object.entries(s))
      D.push(
        /* @__PURE__ */ i.createElement("option", { value: L, key: L }, le)
      );
  }
  return E && D.unshift(
    /* @__PURE__ */ i.createElement("option", { value: "", key: "initial" }, E)
  ), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, n), /* @__PURE__ */ i.createElement(
    "select",
    {
      className: A && !u ? "warning" : "",
      name: v,
      value: u,
      onChange: (L) => {
        I(y, _, v, L.target.value);
      },
      ...k
    },
    D
  ));
}), Du = ["theme-blue", "theme-purple", "theme-brown", "theme-teal", "theme-pink", "theme-orange", "theme-slate", "theme-indigo", "theme-cyan", "theme-green", "theme-amber"], Tu = S.memo(() => {
  var M, fe, xe, Ie, ze;
  const { config: n, updateConfig: u, loading: s, data: v, setParentConfig: y, isDashboard: _ } = S.useContext(bn), [A, I] = S.useState(!0), E = (x, T, B, R) => {
    if (x === null && T === null) {
      let Oe = { ...n, [B]: R };
      B === "filterColumn" && (Oe.filterValue = ""), u(Oe);
      return;
    }
    const ge = Array.isArray(n[x]);
    let de = ge ? [...n[x], R] : { ...n[x], [B]: R };
    T !== null && (ge ? (de = [...n[x]], de[T] = { ...de[T], [B]: R }) : typeof R == "string" ? de[T] = R : de = { ...n[x], [T]: { ...n[x][T], [B]: R } });
    let ee = { ...n, [x]: de };
    u(ee);
  }, k = () => !1;
  S.useEffect(() => {
    if (y) {
      const x = Ae();
      delete x.newViz, y(x);
    }
  }, [n]);
  const D = () => {
    I(!A);
  }, L = () => /* @__PURE__ */ i.createElement("section", { className: "waiting" }, /* @__PURE__ */ i.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ i.createElement("h3", null, "Error With Configuration"), /* @__PURE__ */ i.createElement("p", null, n.runtime.editorErrorMessage))), le = () => /* @__PURE__ */ i.createElement("section", { className: "waiting" }, /* @__PURE__ */ i.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ i.createElement("h3", null, "Finish Configuring"), /* @__PURE__ */ i.createElement("p", null, "Set all required options to the left and confirm below to display a preview of the chart."), /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "btn",
      style: { margin: "1em auto" },
      disabled: k(),
      onClick: (x) => {
        x.preventDefault(), u({ ...n, newViz: !1 });
      }
    },
    "I'm Done"
  ))), Ae = () => {
    let x = JSON.parse(JSON.stringify(n));
    return delete x.runtime, x;
  }, ce = (x) => {
    let T = [...n.filters];
    T.splice(x, 1), u({ ...n, filters: T });
  }, b = (x, T, B) => {
    let R = [...n.filters];
    R[T][x] = B, u({ ...n, filters: R });
  }, V = () => {
    let x = n.filters ? [...n.filters] : [];
    x.push({ values: [] }), u({ ...n, filters: x });
  }, ye = (x = !0) => {
    let T = {};
    return v.length && v.map((B) => Object.keys(B).forEach((R) => T[R] = !0)), Object.keys(T);
  }, ue = (x) => {
    let T = [];
    const B = n.filters[x].columnName;
    return v && B && (v.forEach(function(R) {
      R[B] !== void 0 && T.indexOf(R[B]) === -1 && T.push(R[B]);
    }), T.sort()), T;
  }, _e = (x, T, B = null, R) => {
    let ge = [...n.imageData.options];
    B === null ? ge[T][x] = R : ge[T].arguments[B][x] = R;
    let de = { ...n.imageData, options: ge };
    u({ ...n, imageData: de });
  }, se = (x, T, B) => {
    let R = [...n.imageData.options[x].arguments];
    R[1] = { ...R[1], [T]: B };
    let ge = { ...n.imageData.options[x], arguments: R }, de = [...n.imageData.options];
    de[x] = ge;
    let ee = { ...n.imageData, options: de };
    u({ ...n, imageData: ee });
  }, Ne = (x) => {
    if (n.imageData.options[x].arguments.length > 1) {
      let T = [...n.imageData.options[x].arguments];
      T.pop();
      let B = { ...n.imageData.options[x], arguments: T }, R = [...n.imageData.options];
      R[x] = B;
      let ge = { ...n.imageData, options: R };
      u({ ...n, imageData: ge });
    }
  }, O = () => {
    let x = n.imageData.options ? [...n.imageData.options] : [];
    x.push({ source: "", arguments: [{ operator: "", threshold: "" }], alt: "", secondArgument: !1 });
    let T = { ...n.imageData, options: x };
    u({ ...n, imageData: T });
  }, Te = (x) => {
    let T = [...n.imageData.options];
    T.splice(x, 1);
    let B = { ...n.imageData, options: T };
    u({ ...n, imageData: B });
  };
  return s ? null : /* @__PURE__ */ i.createElement(jc, { component: "EditorPanel" }, !n.newViz && n.runtime && n.runtime.editorErrorMessage && /* @__PURE__ */ i.createElement(L, null), (!n.dataColumn || !n.dataFunction) && /* @__PURE__ */ i.createElement(le, null), /* @__PURE__ */ i.createElement("button", { className: A ? "editor-toggle" : "editor-toggle collapsed", title: A ? "Collapse Editor" : "Expand Editor", onClick: D }), /* @__PURE__ */ i.createElement("section", { className: A ? "editor-panel cove" : "hidden editor-panel cove" }, /* @__PURE__ */ i.createElement("div", { className: "heading-2" }, "Configure Data Bite"), /* @__PURE__ */ i.createElement("section", { className: "form-container" }, /* @__PURE__ */ i.createElement("form", null, /* @__PURE__ */ i.createElement(du, { allowZeroExpanded: !0 }, /* @__PURE__ */ i.createElement(pr, null, " ", /* @__PURE__ */ i.createElement(hr, null, /* @__PURE__ */ i.createElement(Dr, null, "General")), /* @__PURE__ */ i.createElement(Tr, null, /* @__PURE__ */ i.createElement(dr, { value: n.biteStyle, fieldName: "biteStyle", label: "Data Bite Style", updateField: E, options: Ru, initial: "Select" }), /* @__PURE__ */ i.createElement(Re, { value: n.title, fieldName: "title", label: "Title", placeholder: "Data Bite Title", updateField: E }), /* @__PURE__ */ i.createElement(
    Re,
    {
      type: "textarea",
      value: n.biteBody,
      fieldName: "biteBody",
      label: "Message",
      updateField: E,
      tooltip: /* @__PURE__ */ i.createElement(Ge, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Ge.Target, null, /* @__PURE__ */ i.createElement(ga, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Ge.Content, null, /* @__PURE__ */ i.createElement("p", null, "Enter the message text for the visualization. The following HTML tags are supported: strong, em, sup, and sub.")))
    }
  ), /* @__PURE__ */ i.createElement(
    Re,
    {
      value: n.subtext,
      fieldName: "subtext",
      label: "Subtext/Citation",
      placeholder: "Data Bite Subtext or Citation",
      updateField: E,
      tooltip: /* @__PURE__ */ i.createElement(Ge, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Ge.Target, null, /* @__PURE__ */ i.createElement(ga, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Ge.Content, null, /* @__PURE__ */ i.createElement("p", null, "Enter supporting text to display below the data visualization, if applicable. The following HTML tags are supported: strong, em, sup, and sub.")))
    }
  ))), /* @__PURE__ */ i.createElement(pr, null, " ", /* @__PURE__ */ i.createElement(hr, null, /* @__PURE__ */ i.createElement(Dr, null, "Data ", (!n.dataColumn || !n.dataFunction) && /* @__PURE__ */ i.createElement(Uc, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ i.createElement(Tr, null, /* @__PURE__ */ i.createElement("ul", { className: "column-edit" }, /* @__PURE__ */ i.createElement("li", { className: "two-col" }, /* @__PURE__ */ i.createElement(dr, { value: n.dataColumn || "", fieldName: "dataColumn", label: "Data Column", updateField: E, initial: "Select", required: !0, options: ye() }), /* @__PURE__ */ i.createElement(dr, { value: n.dataFunction || "", fieldName: "dataFunction", label: "Data Function", updateField: E, initial: "Select", required: !0, options: Fu }))), /* @__PURE__ */ i.createElement("span", { className: "divider-heading" }, "Number Formatting"), /* @__PURE__ */ i.createElement("ul", { className: "column-edit" }, /* @__PURE__ */ i.createElement("li", { className: "three-col" }, /* @__PURE__ */ i.createElement(Re, { value: n.dataFormat.prefix, section: "dataFormat", fieldName: "prefix", label: "Prefix", updateField: E }), /* @__PURE__ */ i.createElement(Re, { value: n.dataFormat.suffix, section: "dataFormat", fieldName: "suffix", label: "Suffix", updateField: E }), /* @__PURE__ */ i.createElement(Re, { type: "number", value: n.dataFormat.roundToPlace, section: "dataFormat", fieldName: "roundToPlace", label: "Round", updateField: E, min: "0", max: "99" }))), /* @__PURE__ */ i.createElement(Ke, { value: n.dataFormat.commas, section: "dataFormat", fieldName: "commas", label: "Add commas", updateField: E }), /* @__PURE__ */ i.createElement(Ke, { value: n.dataFormat.ignoreZeros, section: "dataFormat", fieldName: "ignoreZeros", label: "Ignore Zeros", updateField: E }), /* @__PURE__ */ i.createElement("hr", { className: "accordion__divider" }), /* @__PURE__ */ i.createElement("label", { style: { marginBottom: "1rem" } }, /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Data Point Filters", /* @__PURE__ */ i.createElement(Ge, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Ge.Target, null, /* @__PURE__ */ i.createElement(ga, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Ge.Content, null, /* @__PURE__ */ i.createElement("p", null, 'To refine the highlighted data point, specify one or more filters (e.g., "Male" and "Female" for a column called "Sex").'))))), n.filters && /* @__PURE__ */ i.createElement("ul", { className: "filters-list" }, n.filters.map((x, T) => /* @__PURE__ */ i.createElement("fieldset", { className: "edit-block", key: T }, /* @__PURE__ */ i.createElement(
    "button",
    {
      type: "button",
      className: "remove-column",
      onClick: () => {
        ce(T);
      }
    },
    "Remove"
  ), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Column"), /* @__PURE__ */ i.createElement(
    "select",
    {
      value: x.columnName ? x.columnName : "",
      onChange: (B) => {
        b("columnName", T, B.target.value);
      }
    },
    /* @__PURE__ */ i.createElement("option", { value: "" }, "- Select Option -"),
    ye().map((B, R) => /* @__PURE__ */ i.createElement("option", { value: B, key: R }, B))
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Column Value"), /* @__PURE__ */ i.createElement(
    "select",
    {
      value: x.columnValue,
      onChange: (B) => {
        b("columnValue", T, B.target.value);
      }
    },
    /* @__PURE__ */ i.createElement("option", { value: "" }, "- Select Option -"),
    ue(T).map((B, R) => /* @__PURE__ */ i.createElement("option", { value: B, key: R }, B))
  ))))), (!n.filters || n.filters.length === 0) && /* @__PURE__ */ i.createElement("div", null, /* @__PURE__ */ i.createElement("fieldset", { className: "edit-block" }, /* @__PURE__ */ i.createElement("p", { style: { textAlign: "center" } }, "There are currently no filters."))), /* @__PURE__ */ i.createElement("button", { type: "button", onClick: V, className: "btn full-width" }, "Add Filter"))), /* @__PURE__ */ i.createElement(pr, null, " ", /* @__PURE__ */ i.createElement(hr, null, /* @__PURE__ */ i.createElement(Dr, null, "Visual")), /* @__PURE__ */ i.createElement(Tr, null, /* @__PURE__ */ i.createElement(Re, { type: "number", value: n.biteFontSize, fieldName: "biteFontSize", label: "Bite Font Size", updateField: E, min: "17", max: "65" }), /* @__PURE__ */ i.createElement(dr, { value: n.fontSize, fieldName: "fontSize", label: "Overall Font Size", updateField: E, options: ["small", "medium", "large"] }), /* @__PURE__ */ i.createElement("div", { className: "checkbox-group" }, /* @__PURE__ */ i.createElement(Ke, { value: (M = n.visual) == null ? void 0 : M.border, section: "visual", fieldName: "border", label: "Display Border", updateField: E }), /* @__PURE__ */ i.createElement(Ke, { value: (fe = n.visual) == null ? void 0 : fe.borderColorTheme, section: "visual", fieldName: "borderColorTheme", label: "Use Border Color Theme", updateField: E }), /* @__PURE__ */ i.createElement(Ke, { value: (xe = n.visual) == null ? void 0 : xe.accent, section: "visual", fieldName: "accent", label: "Use Accent Style", updateField: E }), /* @__PURE__ */ i.createElement(Ke, { value: (Ie = n.visual) == null ? void 0 : Ie.background, section: "visual", fieldName: "background", label: "Use Theme Background Color", updateField: E }), /* @__PURE__ */ i.createElement(Ke, { value: (ze = n.visual) == null ? void 0 : ze.hideBackgroundColor, section: "visual", fieldName: "hideBackgroundColor", label: "Hide Background Color", updateField: E })), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Theme"), /* @__PURE__ */ i.createElement("ul", { className: "color-palette" }, Du.map((x) => /* @__PURE__ */ i.createElement(
    "li",
    {
      title: x,
      key: x,
      onClick: () => {
        u({ ...n, theme: x });
      },
      className: n.theme === x ? "selected " + x : x
    }
  )))))), ["title", "body", "graphic"].includes(n.biteStyle) && /* @__PURE__ */ i.createElement(pr, null, " ", /* @__PURE__ */ i.createElement(hr, null, /* @__PURE__ */ i.createElement(Dr, null, "Image", ["dynamic"].includes(n.imageData.display) && "s")), /* @__PURE__ */ i.createElement(Tr, null, /* @__PURE__ */ i.createElement(dr, { value: n.imageData.display || "", section: "imageData", fieldName: "display", label: "Image Display Type", updateField: E, options: ["none", "static", "dynamic"] }), /* @__PURE__ */ i.createElement(dr, { value: n.bitePosition || "", fieldName: "bitePosition", label: "Image/Graphic Position", updateField: E, initial: "Select", options: Bu }), ["static"].includes(n.imageData.display) && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Re, { value: n.imageData.url, section: "imageData", fieldName: "url", label: "Image URL", updateField: E }), /* @__PURE__ */ i.createElement(Re, { value: n.imageData.alt, section: "imageData", fieldName: "alt", label: "Alt Text", updateField: E })), ["dynamic"].includes(n.imageData.display) && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Re, { value: n.imageData.url || "", section: "imageData", fieldName: "url", label: "Image URL (default)", updateField: E }), /* @__PURE__ */ i.createElement(Re, { value: n.imageData.alt, section: "imageData", fieldName: "alt", label: "Alt Text (default)", updateField: E }), /* @__PURE__ */ i.createElement("hr", { className: "accordion__divider" }), (!n.imageData.options || n.imageData.options.length === 0) && /* @__PURE__ */ i.createElement("p", { style: { textAlign: "center" } }, "There are currently no dynamic images."), n.imageData.options && n.imageData.options.length > 0 && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("ul", null, n.imageData.options.map((x, T) => {
    var B, R, ge, de;
    return /* @__PURE__ */ i.createElement("fieldset", { className: "edit-block", key: T }, /* @__PURE__ */ i.createElement(
      "button",
      {
        type: "button",
        className: "remove-column",
        onClick: () => {
          Te(T);
        }
      },
      "Remove"
    ), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, /* @__PURE__ */ i.createElement("strong", null, "Image #" + (T + 1))), /* @__PURE__ */ i.createElement("div", { className: "accordion__panel-row align-center" }, /* @__PURE__ */ i.createElement("div", { className: "accordion__panel-col flex-auto" }, "If Value"), /* @__PURE__ */ i.createElement("div", { className: "accordion__panel-col flex-auto" }, /* @__PURE__ */ i.createElement(
      "select",
      {
        value: ((B = x.arguments[0]) == null ? void 0 : B.operator) || "",
        onChange: (ee) => {
          _e("operator", T, 0, ee.target.value);
        }
      },
      /* @__PURE__ */ i.createElement("option", { value: "", disabled: !0 }),
      nn.map((ee, Oe) => /* @__PURE__ */ i.createElement("option", { value: ee, key: Oe }, ee))
    )), /* @__PURE__ */ i.createElement("div", { className: "accordion__panel-col flex-grow flex-shrink" }, /* @__PURE__ */ i.createElement(
      "input",
      {
        type: "number",
        value: ((R = x.arguments[0]) == null ? void 0 : R.threshold) || "",
        onChange: (ee) => {
          _e("threshold", T, 0, ee.target.value);
        }
      }
    ))), /* @__PURE__ */ i.createElement("div", { className: "accordion__panel-row mb-2 align-center" }, /* @__PURE__ */ i.createElement("div", { className: "accordion__panel-col flex-grow" }, /* @__PURE__ */ i.createElement(
      "select",
      {
        className: "border-dashed text-center",
        value: x.secondArgument ? "and" : "then",
        onChange: (ee) => {
          ee.target.value === "then" && (_e("secondArgument", T, null, !1), Ne(T)), ee.target.value === "and" && _e("secondArgument", T, null, !0);
        }
      },
      /* @__PURE__ */ i.createElement("option", { value: "then" }, "Then"),
      /* @__PURE__ */ i.createElement("option", { value: "and" }, "And")
    ))), x.secondArgument && x.secondArgument === !0 && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("div", { className: "accordion__panel-row align-center" }, /* @__PURE__ */ i.createElement("div", { className: "accordion__panel-col flex-auto" }, "If Value"), /* @__PURE__ */ i.createElement("div", { className: "accordion__panel-col flex-auto" }, /* @__PURE__ */ i.createElement(
      "select",
      {
        value: ((ge = x.arguments[1]) == null ? void 0 : ge.operator) || "",
        onChange: (ee) => {
          se(T, "operator", ee.target.value);
        }
      },
      /* @__PURE__ */ i.createElement("option", { value: "", disabled: !0 }),
      nn.map((ee, Oe) => /* @__PURE__ */ i.createElement("option", { value: ee, key: Oe }, ee))
    )), /* @__PURE__ */ i.createElement("div", { className: "accordion__panel-col flex-grow flex-shrink" }, /* @__PURE__ */ i.createElement(
      "input",
      {
        type: "number",
        value: ((de = x.arguments[1]) == null ? void 0 : de.threshold) || "",
        onChange: (ee) => {
          se(T, "threshold", ee.target.value);
        }
      }
    ))), /* @__PURE__ */ i.createElement("div", { className: "accordion__panel-row mb-2 align-center text-center text-capitalize" }, /* @__PURE__ */ i.createElement("div", { className: "accordion__panel-col flex-grow" }, "Then"))), /* @__PURE__ */ i.createElement("div", { className: "accordion__panel-row mb-2 align-center" }, /* @__PURE__ */ i.createElement("div", { className: "accordion__panel-col flex-auto" }, "Show"), /* @__PURE__ */ i.createElement("div", { className: "accordion__panel-col flex-grow" }, /* @__PURE__ */ i.createElement(
      "input",
      {
        type: "text",
        value: x.source || "",
        onChange: (ee) => {
          _e("source", T, null, ee.target.value);
        }
      }
    ))), /* @__PURE__ */ i.createElement("div", { className: "accordion__panel-row mb-2 align-center" }, /* @__PURE__ */ i.createElement("div", { className: "accordion__panel-col flex-auto" }, "Alt Text"), /* @__PURE__ */ i.createElement("div", { className: "accordion__panel-col flex-grow" }, /* @__PURE__ */ i.createElement(
      "input",
      {
        type: "text",
        value: x.alt || "",
        onChange: (ee) => {
          _e("alt", T, null, ee.target.value);
        }
      }
    )))));
  }))), /* @__PURE__ */ i.createElement("button", { type: "button", onClick: O, className: "btn full-width" }, "Add Dynamic Image")))))))));
}), an = {
  "theme-blue": {
    primary: "#005eaa",
    secondary: "#88c3ea",
    tertiary: "#c0e9ff",
    quaternary: "#edf9ff"
  },
  "theme-purple": {
    primary: "#712177",
    secondary: "#b890bb",
    tertiary: "#e3d3e4",
    quaternary: "#f7f2f7"
  },
  "theme-brown": {
    primary: "#705043",
    secondary: "#ad907b",
    tertiary: "#d7ccc8",
    quaternary: "#f2ebe8"
  },
  "theme-teal": {
    primary: "#00695c",
    secondary: "#4ebaaa",
    tertiary: "#ceece7",
    quaternary: "#ebf7f5"
  },
  "theme-pink": {
    primary: "#af4448",
    secondary: "#e57373",
    tertiary: "#ffc2c2",
    quaternary: "#ffe7e7"
  },
  "theme-orange": {
    primary: "#bb4d00",
    secondary: "#ffad42",
    tertiary: "#ffe97d",
    quaternary: "#fff4cf"
  },
  "theme-slate": {
    primary: "#29434e",
    secondary: "#7e9ba5",
    tertiary: "#b6c6d2",
    quaternary: "#e2e8ed"
  },
  "theme-indigo": {
    primary: "#26418f",
    secondary: "#92a6dd",
    tertiary: "#dee8ff",
    quaternary: "#f2f6ff"
  },
  "theme-cyan": {
    primary: "#006778",
    secondary: "#65b0bd",
    tertiary: "#cce5e9",
    quaternary: "#ebf5f6"
  },
  "theme-green": {
    primary: "#4b830d",
    secondary: "#84bc49",
    tertiary: "#dcedc8",
    quaternary: "#f1f8e9"
  },
  "theme-amber": {
    primary: "#fbab18",
    secondary: "#ffd54f",
    tertiary: "#ffecb3",
    quaternary: "#fff7e1"
  }
};
var Cn = { exports: {} };
/**
 * chroma.js - JavaScript library for color conversions
 *
 * Copyright (c) 2011-2019, Gregor Aisch
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. The name Gregor Aisch may not be used to endorse or promote products
 * derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
 * BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * -------------------------------------------------------
 *
 * chroma.js includes colors from colorbrewer2.org, which are released under
 * the following license:
 *
 * Copyright (c) 2002 Cynthia Brewer, Mark Harrower,
 * and The Pennsylvania State University.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
 * either express or implied. See the License for the specific
 * language governing permissions and limitations under the License.
 *
 * ------------------------------------------------------
 *
 * Named colors are taken from X11 Color Names.
 * http://www.w3.org/TR/css3-color/#svg-color
 *
 * @preserve
 */
(function(n, u) {
  (function(s, v) {
    n.exports = v();
  })(Gc, function() {
    for (var s = function(e, r, a) {
      return r === void 0 && (r = 0), a === void 0 && (a = 1), e < r ? r : e > a ? a : e;
    }, v = s, y = function(e) {
      e._clipped = !1, e._unclipped = e.slice(0);
      for (var r = 0; r <= 3; r++)
        r < 3 ? ((e[r] < 0 || e[r] > 255) && (e._clipped = !0), e[r] = v(e[r], 0, 255)) : r === 3 && (e[r] = v(e[r], 0, 1));
      return e;
    }, _ = {}, A = 0, I = ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Undefined", "Null"]; A < I.length; A += 1) {
      var E = I[A];
      _["[object " + E + "]"] = E.toLowerCase();
    }
    var k = function(e) {
      return _[Object.prototype.toString.call(e)] || "object";
    }, D = k, L = function(e, r) {
      return r === void 0 && (r = null), e.length >= 3 ? Array.prototype.slice.call(e) : D(e[0]) == "object" && r ? r.split("").filter(function(a) {
        return e[0][a] !== void 0;
      }).map(function(a) {
        return e[0][a];
      }) : e[0];
    }, le = k, Ae = function(e) {
      if (e.length < 2)
        return null;
      var r = e.length - 1;
      return le(e[r]) == "string" ? e[r].toLowerCase() : null;
    }, ce = Math.PI, b = {
      clip_rgb: y,
      limit: s,
      type: k,
      unpack: L,
      last: Ae,
      PI: ce,
      TWOPI: ce * 2,
      PITHIRD: ce / 3,
      DEG2RAD: ce / 180,
      RAD2DEG: 180 / ce
    }, V = {
      format: {},
      autodetect: []
    }, ye = b.last, ue = b.clip_rgb, _e = b.type, se = V, Ne = function() {
      for (var r = [], a = arguments.length; a--; )
        r[a] = arguments[a];
      var t = this;
      if (_e(r[0]) === "object" && r[0].constructor && r[0].constructor === this.constructor)
        return r[0];
      var o = ye(r), c = !1;
      if (!o) {
        c = !0, se.sorted || (se.autodetect = se.autodetect.sort(function(g, w) {
          return w.p - g.p;
        }), se.sorted = !0);
        for (var l = 0, f = se.autodetect; l < f.length; l += 1) {
          var d = f[l];
          if (o = d.test.apply(d, r), o)
            break;
        }
      }
      if (se.format[o]) {
        var m = se.format[o].apply(null, c ? r : r.slice(0, -1));
        t._rgb = ue(m);
      } else
        throw new Error("unknown format: " + r);
      t._rgb.length === 3 && t._rgb.push(1);
    };
    Ne.prototype.toString = function() {
      return _e(this.hex) == "function" ? this.hex() : "[" + this._rgb.join(",") + "]";
    };
    var O = Ne, Te = function() {
      for (var e = [], r = arguments.length; r--; )
        e[r] = arguments[r];
      return new (Function.prototype.bind.apply(Te.Color, [null].concat(e)))();
    };
    Te.Color = O, Te.version = "2.4.2";
    var M = Te, fe = b.unpack, xe = Math.max, Ie = function() {
      for (var e = [], r = arguments.length; r--; )
        e[r] = arguments[r];
      var a = fe(e, "rgb"), t = a[0], o = a[1], c = a[2];
      t = t / 255, o = o / 255, c = c / 255;
      var l = 1 - xe(t, xe(o, c)), f = l < 1 ? 1 / (1 - l) : 0, d = (1 - t - l) * f, m = (1 - o - l) * f, g = (1 - c - l) * f;
      return [d, m, g, l];
    }, ze = Ie, x = b.unpack, T = function() {
      for (var e = [], r = arguments.length; r--; )
        e[r] = arguments[r];
      e = x(e, "cmyk");
      var a = e[0], t = e[1], o = e[2], c = e[3], l = e.length > 4 ? e[4] : 1;
      return c === 1 ? [0, 0, 0, l] : [
        a >= 1 ? 0 : 255 * (1 - a) * (1 - c),
        // r
        t >= 1 ? 0 : 255 * (1 - t) * (1 - c),
        // g
        o >= 1 ? 0 : 255 * (1 - o) * (1 - c),
        // b
        l
      ];
    }, B = T, R = M, ge = O, de = V, ee = b.unpack, Oe = b.type, z = ze;
    ge.prototype.cmyk = function() {
      return z(this._rgb);
    }, R.cmyk = function() {
      for (var e = [], r = arguments.length; r--; )
        e[r] = arguments[r];
      return new (Function.prototype.bind.apply(ge, [null].concat(e, ["cmyk"])))();
    }, de.format.cmyk = B, de.autodetect.push({
      p: 2,
      test: function() {
        for (var e = [], r = arguments.length; r--; )
          e[r] = arguments[r];
        if (e = ee(e, "cmyk"), Oe(e) === "array" && e.length === 4)
          return "cmyk";
      }
    });
    var X = b.unpack, Ce = b.last, oe = function(e) {
      return Math.round(e * 100) / 100;
    }, pe = function() {
      for (var e = [], r = arguments.length; r--; )
        e[r] = arguments[r];
      var a = X(e, "hsla"), t = Ce(e) || "lsa";
      return a[0] = oe(a[0] || 0), a[1] = oe(a[1] * 100) + "%", a[2] = oe(a[2] * 100) + "%", t === "hsla" || a.length > 3 && a[3] < 1 ? (a[3] = a.length > 3 ? a[3] : 1, t = "hsla") : a.length = 3, t + "(" + a.join(",") + ")";
    }, me = pe, er = b.unpack, rr = function() {
      for (var e = [], r = arguments.length; r--; )
        e[r] = arguments[r];
      e = er(e, "rgba");
      var a = e[0], t = e[1], o = e[2];
      a /= 255, t /= 255, o /= 255;
      var c = Math.min(a, t, o), l = Math.max(a, t, o), f = (l + c) / 2, d, m;
      return l === c ? (d = 0, m = Number.NaN) : d = f < 0.5 ? (l - c) / (l + c) : (l - c) / (2 - l - c), a == l ? m = (t - o) / (l - c) : t == l ? m = 2 + (o - a) / (l - c) : o == l && (m = 4 + (a - t) / (l - c)), m *= 60, m < 0 && (m += 360), e.length > 3 && e[3] !== void 0 ? [m, d, f, e[3]] : [m, d, f];
    }, J = rr, Ue = b.unpack, ie = b.last, $ = me, F = J, re = Math.round, ke = function() {
      for (var e = [], r = arguments.length; r--; )
        e[r] = arguments[r];
      var a = Ue(e, "rgba"), t = ie(e) || "rgb";
      return t.substr(0, 3) == "hsl" ? $(F(a), t) : (a[0] = re(a[0]), a[1] = re(a[1]), a[2] = re(a[2]), (t === "rgba" || a.length > 3 && a[3] < 1) && (a[3] = a.length > 3 ? a[3] : 1, t = "rgba"), t + "(" + a.slice(0, t === "rgb" ? 3 : 4).join(",") + ")");
    }, $e = ke, zr = b.unpack, Ur = Math.round, Ln = function() {
      for (var e, r = [], a = arguments.length; a--; )
        r[a] = arguments[a];
      r = zr(r, "hsl");
      var t = r[0], o = r[1], c = r[2], l, f, d;
      if (o === 0)
        l = f = d = c * 255;
      else {
        var m = [0, 0, 0], g = [0, 0, 0], w = c < 0.5 ? c * (1 + o) : c + o - c * o, p = 2 * c - w, C = t / 360;
        m[0] = C + 1 / 3, m[1] = C, m[2] = C - 1 / 3;
        for (var N = 0; N < 3; N++)
          m[N] < 0 && (m[N] += 1), m[N] > 1 && (m[N] -= 1), 6 * m[N] < 1 ? g[N] = p + (w - p) * 6 * m[N] : 2 * m[N] < 1 ? g[N] = w : 3 * m[N] < 2 ? g[N] = p + (w - p) * (2 / 3 - m[N]) * 6 : g[N] = p;
        e = [Ur(g[0] * 255), Ur(g[1] * 255), Ur(g[2] * 255)], l = e[0], f = e[1], d = e[2];
      }
      return r.length > 3 ? [l, f, d, r[3]] : [l, f, d, 1];
    }, ka = Ln, Na = ka, Ca = V, $a = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/, Da = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/, Ta = /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/, Sa = /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/, Ia = /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/, Oa = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/, Pa = Math.round, Ma = function(e) {
      e = e.toLowerCase().trim();
      var r;
      if (Ca.format.named)
        try {
          return Ca.format.named(e);
        } catch {
        }
      if (r = e.match($a)) {
        for (var a = r.slice(1, 4), t = 0; t < 3; t++)
          a[t] = +a[t];
        return a[3] = 1, a;
      }
      if (r = e.match(Da)) {
        for (var o = r.slice(1, 5), c = 0; c < 4; c++)
          o[c] = +o[c];
        return o;
      }
      if (r = e.match(Ta)) {
        for (var l = r.slice(1, 4), f = 0; f < 3; f++)
          l[f] = Pa(l[f] * 2.55);
        return l[3] = 1, l;
      }
      if (r = e.match(Sa)) {
        for (var d = r.slice(1, 5), m = 0; m < 3; m++)
          d[m] = Pa(d[m] * 2.55);
        return d[3] = +d[3], d;
      }
      if (r = e.match(Ia)) {
        var g = r.slice(1, 4);
        g[1] *= 0.01, g[2] *= 0.01;
        var w = Na(g);
        return w[3] = 1, w;
      }
      if (r = e.match(Oa)) {
        var p = r.slice(1, 4);
        p[1] *= 0.01, p[2] *= 0.01;
        var C = Na(p);
        return C[3] = +r[4], C;
      }
    };
    Ma.test = function(e) {
      return $a.test(e) || Da.test(e) || Ta.test(e) || Sa.test(e) || Ia.test(e) || Oa.test(e);
    };
    var zn = Ma, Un = M, Fa = O, Ra = V, jn = b.type, qn = $e, Ba = zn;
    Fa.prototype.css = function(e) {
      return qn(this._rgb, e);
    }, Un.css = function() {
      for (var e = [], r = arguments.length; r--; )
        e[r] = arguments[r];
      return new (Function.prototype.bind.apply(Fa, [null].concat(e, ["css"])))();
    }, Ra.format.css = Ba, Ra.autodetect.push({
      p: 5,
      test: function(e) {
        for (var r = [], a = arguments.length - 1; a-- > 0; )
          r[a] = arguments[a + 1];
        if (!r.length && jn(e) === "string" && Ba.test(e))
          return "css";
      }
    });
    var La = O, Gn = M, Hn = V, Vn = b.unpack;
    Hn.format.gl = function() {
      for (var e = [], r = arguments.length; r--; )
        e[r] = arguments[r];
      var a = Vn(e, "rgba");
      return a[0] *= 255, a[1] *= 255, a[2] *= 255, a;
    }, Gn.gl = function() {
      for (var e = [], r = arguments.length; r--; )
        e[r] = arguments[r];
      return new (Function.prototype.bind.apply(La, [null].concat(e, ["gl"])))();
    }, La.prototype.gl = function() {
      var e = this._rgb;
      return [e[0] / 255, e[1] / 255, e[2] / 255, e[3]];
    };
    var Wn = b.unpack, Zn = function() {
      for (var e = [], r = arguments.length; r--; )
        e[r] = arguments[r];
      var a = Wn(e, "rgb"), t = a[0], o = a[1], c = a[2], l = Math.min(t, o, c), f = Math.max(t, o, c), d = f - l, m = d * 100 / 255, g = l / (255 - d) * 100, w;
      return d === 0 ? w = Number.NaN : (t === f && (w = (o - c) / d), o === f && (w = 2 + (c - t) / d), c === f && (w = 4 + (t - o) / d), w *= 60, w < 0 && (w += 360)), [w, m, g];
    }, Xn = Zn, Yn = b.unpack, Jn = Math.floor, Qn = function() {
      for (var e, r, a, t, o, c, l = [], f = arguments.length; f--; )
        l[f] = arguments[f];
      l = Yn(l, "hcg");
      var d = l[0], m = l[1], g = l[2], w, p, C;
      g = g * 255;
      var N = m * 255;
      if (m === 0)
        w = p = C = g;
      else {
        d === 360 && (d = 0), d > 360 && (d -= 360), d < 0 && (d += 360), d /= 60;
        var U = Jn(d), G = d - U, W = g * (1 - m), Y = W + N * (1 - G), Ee = W + N * G, be = W + N;
        switch (U) {
          case 0:
            e = [be, Ee, W], w = e[0], p = e[1], C = e[2];
            break;
          case 1:
            r = [Y, be, W], w = r[0], p = r[1], C = r[2];
            break;
          case 2:
            a = [W, be, Ee], w = a[0], p = a[1], C = a[2];
            break;
          case 3:
            t = [W, Y, be], w = t[0], p = t[1], C = t[2];
            break;
          case 4:
            o = [Ee, W, be], w = o[0], p = o[1], C = o[2];
            break;
          case 5:
            c = [be, W, Y], w = c[0], p = c[1], C = c[2];
            break;
        }
      }
      return [w, p, C, l.length > 3 ? l[3] : 1];
    }, Kn = Qn, el = b.unpack, rl = b.type, al = M, za = O, Ua = V, tl = Xn;
    za.prototype.hcg = function() {
      return tl(this._rgb);
    }, al.hcg = function() {
      for (var e = [], r = arguments.length; r--; )
        e[r] = arguments[r];
      return new (Function.prototype.bind.apply(za, [null].concat(e, ["hcg"])))();
    }, Ua.format.hcg = Kn, Ua.autodetect.push({
      p: 1,
      test: function() {
        for (var e = [], r = arguments.length; r--; )
          e[r] = arguments[r];
        if (e = el(e, "hcg"), rl(e) === "array" && e.length === 3)
          return "hcg";
      }
    });
    var nl = b.unpack, ll = b.last, yr = Math.round, ol = function() {
      for (var e = [], r = arguments.length; r--; )
        e[r] = arguments[r];
      var a = nl(e, "rgba"), t = a[0], o = a[1], c = a[2], l = a[3], f = ll(e) || "auto";
      l === void 0 && (l = 1), f === "auto" && (f = l < 1 ? "rgba" : "rgb"), t = yr(t), o = yr(o), c = yr(c);
      var d = t << 16 | o << 8 | c, m = "000000" + d.toString(16);
      m = m.substr(m.length - 6);
      var g = "0" + yr(l * 255).toString(16);
      switch (g = g.substr(g.length - 2), f.toLowerCase()) {
        case "rgba":
          return "#" + m + g;
        case "argb":
          return "#" + g + m;
        default:
          return "#" + m;
      }
    }, ja = ol, il = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, cl = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/, ul = function(e) {
      if (e.match(il)) {
        (e.length === 4 || e.length === 7) && (e = e.substr(1)), e.length === 3 && (e = e.split(""), e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]);
        var r = parseInt(e, 16), a = r >> 16, t = r >> 8 & 255, o = r & 255;
        return [a, t, o, 1];
      }
      if (e.match(cl)) {
        (e.length === 5 || e.length === 9) && (e = e.substr(1)), e.length === 4 && (e = e.split(""), e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2] + e[3] + e[3]);
        var c = parseInt(e, 16), l = c >> 24 & 255, f = c >> 16 & 255, d = c >> 8 & 255, m = Math.round((c & 255) / 255 * 100) / 100;
        return [l, f, d, m];
      }
      throw new Error("unknown hex color: " + e);
    }, qa = ul, sl = M, Ga = O, fl = b.type, Ha = V, dl = ja;
    Ga.prototype.hex = function(e) {
      return dl(this._rgb, e);
    }, sl.hex = function() {
      for (var e = [], r = arguments.length; r--; )
        e[r] = arguments[r];
      return new (Function.prototype.bind.apply(Ga, [null].concat(e, ["hex"])))();
    }, Ha.format.hex = qa, Ha.autodetect.push({
      p: 4,
      test: function(e) {
        for (var r = [], a = arguments.length - 1; a-- > 0; )
          r[a] = arguments[a + 1];
        if (!r.length && fl(e) === "string" && [3, 4, 5, 6, 7, 8, 9].indexOf(e.length) >= 0)
          return "hex";
      }
    });
    var vl = b.unpack, Va = b.TWOPI, ml = Math.min, gl = Math.sqrt, pl = Math.acos, hl = function() {
      for (var e = [], r = arguments.length; r--; )
        e[r] = arguments[r];
      var a = vl(e, "rgb"), t = a[0], o = a[1], c = a[2];
      t /= 255, o /= 255, c /= 255;
      var l, f = ml(t, o, c), d = (t + o + c) / 3, m = d > 0 ? 1 - f / d : 0;
      return m === 0 ? l = NaN : (l = (t - o + (t - c)) / 2, l /= gl((t - o) * (t - o) + (t - c) * (o - c)), l = pl(l), c > o && (l = Va - l), l /= Va), [l * 360, m, d];
    }, bl = hl, yl = b.unpack, jr = b.limit, ar = b.TWOPI, qr = b.PITHIRD, tr = Math.cos, El = function() {
      for (var e = [], r = arguments.length; r--; )
        e[r] = arguments[r];
      e = yl(e, "hsi");
      var a = e[0], t = e[1], o = e[2], c, l, f;
      return isNaN(a) && (a = 0), isNaN(t) && (t = 0), a > 360 && (a -= 360), a < 0 && (a += 360), a /= 360, a < 1 / 3 ? (f = (1 - t) / 3, c = (1 + t * tr(ar * a) / tr(qr - ar * a)) / 3, l = 1 - (f + c)) : a < 2 / 3 ? (a -= 1 / 3, c = (1 - t) / 3, l = (1 + t * tr(ar * a) / tr(qr - ar * a)) / 3, f = 1 - (c + l)) : (a -= 2 / 3, l = (1 - t) / 3, f = (1 + t * tr(ar * a) / tr(qr - ar * a)) / 3, c = 1 - (l + f)), c = jr(o * c * 3), l = jr(o * l * 3), f = jr(o * f * 3), [c * 255, l * 255, f * 255, e.length > 3 ? e[3] : 1];
    }, wl = El, _l = b.unpack, xl = b.type, Al = M, Wa = O, Za = V, kl = bl;
    Wa.prototype.hsi = function() {
      return kl(this._rgb);
    }, Al.hsi = function() {
      for (var e = [], r = arguments.length; r--; )
        e[r] = arguments[r];
      return new (Function.prototype.bind.apply(Wa, [null].concat(e, ["hsi"])))();
    }, Za.format.hsi = wl, Za.autodetect.push({
      p: 2,
      test: function() {
        for (var e = [], r = arguments.length; r--; )
          e[r] = arguments[r];
        if (e = _l(e, "hsi"), xl(e) === "array" && e.length === 3)
          return "hsi";
      }
    });
    var Nl = b.unpack, Cl = b.type, $l = M, Xa = O, Ya = V, Dl = J;
    Xa.prototype.hsl = function() {
      return Dl(this._rgb);
    }, $l.hsl = function() {
      for (var e = [], r = arguments.length; r--; )
        e[r] = arguments[r];
      return new (Function.prototype.bind.apply(Xa, [null].concat(e, ["hsl"])))();
    }, Ya.format.hsl = ka, Ya.autodetect.push({
      p: 2,
      test: function() {
        for (var e = [], r = arguments.length; r--; )
          e[r] = arguments[r];
        if (e = Nl(e, "hsl"), Cl(e) === "array" && e.length === 3)
          return "hsl";
      }
    });
    var Tl = b.unpack, Sl = Math.min, Il = Math.max, Ol = function() {
      for (var e = [], r = arguments.length; r--; )
        e[r] = arguments[r];
      e = Tl(e, "rgb");
      var a = e[0], t = e[1], o = e[2], c = Sl(a, t, o), l = Il(a, t, o), f = l - c, d, m, g;
      return g = l / 255, l === 0 ? (d = Number.NaN, m = 0) : (m = f / l, a === l && (d = (t - o) / f), t === l && (d = 2 + (o - a) / f), o === l && (d = 4 + (a - t) / f), d *= 60, d < 0 && (d += 360)), [d, m, g];
    }, Pl = Ol, Ml = b.unpack, Fl = Math.floor, Rl = function() {
      for (var e, r, a, t, o, c, l = [], f = arguments.length; f--; )
        l[f] = arguments[f];
      l = Ml(l, "hsv");
      var d = l[0], m = l[1], g = l[2], w, p, C;
      if (g *= 255, m === 0)
        w = p = C = g;
      else {
        d === 360 && (d = 0), d > 360 && (d -= 360), d < 0 && (d += 360), d /= 60;
        var N = Fl(d), U = d - N, G = g * (1 - m), W = g * (1 - m * U), Y = g * (1 - m * (1 - U));
        switch (N) {
          case 0:
            e = [g, Y, G], w = e[0], p = e[1], C = e[2];
            break;
          case 1:
            r = [W, g, G], w = r[0], p = r[1], C = r[2];
            break;
          case 2:
            a = [G, g, Y], w = a[0], p = a[1], C = a[2];
            break;
          case 3:
            t = [G, W, g], w = t[0], p = t[1], C = t[2];
            break;
          case 4:
            o = [Y, G, g], w = o[0], p = o[1], C = o[2];
            break;
          case 5:
            c = [g, G, W], w = c[0], p = c[1], C = c[2];
            break;
        }
      }
      return [w, p, C, l.length > 3 ? l[3] : 1];
    }, Bl = Rl, Ll = b.unpack, zl = b.type, Ul = M, Ja = O, Qa = V, jl = Pl;
    Ja.prototype.hsv = function() {
      return jl(this._rgb);
    }, Ul.hsv = function() {
      for (var e = [], r = arguments.length; r--; )
        e[r] = arguments[r];
      return new (Function.prototype.bind.apply(Ja, [null].concat(e, ["hsv"])))();
    }, Qa.format.hsv = Bl, Qa.autodetect.push({
      p: 2,
      test: function() {
        for (var e = [], r = arguments.length; r--; )
          e[r] = arguments[r];
        if (e = Ll(e, "hsv"), zl(e) === "array" && e.length === 3)
          return "hsv";
      }
    });
    var Er = {
      // Corresponds roughly to RGB brighter/darker
      Kn: 18,
      // D65 standard referent
      Xn: 0.95047,
      Yn: 1,
      Zn: 1.08883,
      t0: 0.137931034,
      // 4 / 29
      t1: 0.206896552,
      // 6 / 29
      t2: 0.12841855,
      // 3 * t1 * t1
      t3: 8856452e-9
      // t1 * t1 * t1
    }, nr = Er, ql = b.unpack, Ka = Math.pow, Gl = function() {
      for (var e = [], r = arguments.length; r--; )
        e[r] = arguments[r];
      var a = ql(e, "rgb"), t = a[0], o = a[1], c = a[2], l = Hl(t, o, c), f = l[0], d = l[1], m = l[2], g = 116 * d - 16;
      return [g < 0 ? 0 : g, 500 * (f - d), 200 * (d - m)];
    }, Gr = function(e) {
      return (e /= 255) <= 0.04045 ? e / 12.92 : Ka((e + 0.055) / 1.055, 2.4);
    }, Hr = function(e) {
      return e > nr.t3 ? Ka(e, 1 / 3) : e / nr.t2 + nr.t0;
    }, Hl = function(e, r, a) {
      e = Gr(e), r = Gr(r), a = Gr(a);
      var t = Hr((0.4124564 * e + 0.3575761 * r + 0.1804375 * a) / nr.Xn), o = Hr((0.2126729 * e + 0.7151522 * r + 0.072175 * a) / nr.Yn), c = Hr((0.0193339 * e + 0.119192 * r + 0.9503041 * a) / nr.Zn);
      return [t, o, c];
    }, et = Gl, lr = Er, Vl = b.unpack, Wl = Math.pow, Zl = function() {
      for (var e = [], r = arguments.length; r--; )
        e[r] = arguments[r];
      e = Vl(e, "lab");
      var a = e[0], t = e[1], o = e[2], c, l, f, d, m, g;
      return l = (a + 16) / 116, c = isNaN(t) ? l : l + t / 500, f = isNaN(o) ? l : l - o / 200, l = lr.Yn * Wr(l), c = lr.Xn * Wr(c), f = lr.Zn * Wr(f), d = Vr(3.2404542 * c - 1.5371385 * l - 0.4985314 * f), m = Vr(-0.969266 * c + 1.8760108 * l + 0.041556 * f), g = Vr(0.0556434 * c - 0.2040259 * l + 1.0572252 * f), [d, m, g, e.length > 3 ? e[3] : 1];
    }, Vr = function(e) {
      return 255 * (e <= 304e-5 ? 12.92 * e : 1.055 * Wl(e, 1 / 2.4) - 0.055);
    }, Wr = function(e) {
      return e > lr.t1 ? e * e * e : lr.t2 * (e - lr.t0);
    }, rt = Zl, Xl = b.unpack, Yl = b.type, Jl = M, at = O, tt = V, Ql = et;
    at.prototype.lab = function() {
      return Ql(this._rgb);
    }, Jl.lab = function() {
      for (var e = [], r = arguments.length; r--; )
        e[r] = arguments[r];
      return new (Function.prototype.bind.apply(at, [null].concat(e, ["lab"])))();
    }, tt.format.lab = rt, tt.autodetect.push({
      p: 2,
      test: function() {
        for (var e = [], r = arguments.length; r--; )
          e[r] = arguments[r];
        if (e = Xl(e, "lab"), Yl(e) === "array" && e.length === 3)
          return "lab";
      }
    });
    var Kl = b.unpack, eo = b.RAD2DEG, ro = Math.sqrt, ao = Math.atan2, to = Math.round, no = function() {
      for (var e = [], r = arguments.length; r--; )
        e[r] = arguments[r];
      var a = Kl(e, "lab"), t = a[0], o = a[1], c = a[2], l = ro(o * o + c * c), f = (ao(c, o) * eo + 360) % 360;
      return to(l * 1e4) === 0 && (f = Number.NaN), [t, l, f];
    }, nt = no, lo = b.unpack, oo = et, io = nt, co = function() {
      for (var e = [], r = arguments.length; r--; )
        e[r] = arguments[r];
      var a = lo(e, "rgb"), t = a[0], o = a[1], c = a[2], l = oo(t, o, c), f = l[0], d = l[1], m = l[2];
      return io(f, d, m);
    }, uo = co, so = b.unpack, fo = b.DEG2RAD, vo = Math.sin, mo = Math.cos, go = function() {
      for (var e = [], r = arguments.length; r--; )
        e[r] = arguments[r];
      var a = so(e, "lch"), t = a[0], o = a[1], c = a[2];
      return isNaN(c) && (c = 0), c = c * fo, [t, mo(c) * o, vo(c) * o];
    }, lt = go, po = b.unpack, ho = lt, bo = rt, yo = function() {
      for (var e = [], r = arguments.length; r--; )
        e[r] = arguments[r];
      e = po(e, "lch");
      var a = e[0], t = e[1], o = e[2], c = ho(a, t, o), l = c[0], f = c[1], d = c[2], m = bo(l, f, d), g = m[0], w = m[1], p = m[2];
      return [g, w, p, e.length > 3 ? e[3] : 1];
    }, ot = yo, Eo = b.unpack, wo = ot, _o = function() {
      for (var e = [], r = arguments.length; r--; )
        e[r] = arguments[r];
      var a = Eo(e, "hcl").reverse();
      return wo.apply(void 0, a);
    }, xo = _o, Ao = b.unpack, ko = b.type, it = M, wr = O, Zr = V, ct = uo;
    wr.prototype.lch = function() {
      return ct(this._rgb);
    }, wr.prototype.hcl = function() {
      return ct(this._rgb).reverse();
    }, it.lch = function() {
      for (var e = [], r = arguments.length; r--; )
        e[r] = arguments[r];
      return new (Function.prototype.bind.apply(wr, [null].concat(e, ["lch"])))();
    }, it.hcl = function() {
      for (var e = [], r = arguments.length; r--; )
        e[r] = arguments[r];
      return new (Function.prototype.bind.apply(wr, [null].concat(e, ["hcl"])))();
    }, Zr.format.lch = ot, Zr.format.hcl = xo, ["lch", "hcl"].forEach(function(e) {
      return Zr.autodetect.push({
        p: 2,
        test: function() {
          for (var r = [], a = arguments.length; a--; )
            r[a] = arguments[a];
          if (r = Ao(r, e), ko(r) === "array" && r.length === 3)
            return e;
        }
      });
    });
    var No = {
      aliceblue: "#f0f8ff",
      antiquewhite: "#faebd7",
      aqua: "#00ffff",
      aquamarine: "#7fffd4",
      azure: "#f0ffff",
      beige: "#f5f5dc",
      bisque: "#ffe4c4",
      black: "#000000",
      blanchedalmond: "#ffebcd",
      blue: "#0000ff",
      blueviolet: "#8a2be2",
      brown: "#a52a2a",
      burlywood: "#deb887",
      cadetblue: "#5f9ea0",
      chartreuse: "#7fff00",
      chocolate: "#d2691e",
      coral: "#ff7f50",
      cornflower: "#6495ed",
      cornflowerblue: "#6495ed",
      cornsilk: "#fff8dc",
      crimson: "#dc143c",
      cyan: "#00ffff",
      darkblue: "#00008b",
      darkcyan: "#008b8b",
      darkgoldenrod: "#b8860b",
      darkgray: "#a9a9a9",
      darkgreen: "#006400",
      darkgrey: "#a9a9a9",
      darkkhaki: "#bdb76b",
      darkmagenta: "#8b008b",
      darkolivegreen: "#556b2f",
      darkorange: "#ff8c00",
      darkorchid: "#9932cc",
      darkred: "#8b0000",
      darksalmon: "#e9967a",
      darkseagreen: "#8fbc8f",
      darkslateblue: "#483d8b",
      darkslategray: "#2f4f4f",
      darkslategrey: "#2f4f4f",
      darkturquoise: "#00ced1",
      darkviolet: "#9400d3",
      deeppink: "#ff1493",
      deepskyblue: "#00bfff",
      dimgray: "#696969",
      dimgrey: "#696969",
      dodgerblue: "#1e90ff",
      firebrick: "#b22222",
      floralwhite: "#fffaf0",
      forestgreen: "#228b22",
      fuchsia: "#ff00ff",
      gainsboro: "#dcdcdc",
      ghostwhite: "#f8f8ff",
      gold: "#ffd700",
      goldenrod: "#daa520",
      gray: "#808080",
      green: "#008000",
      greenyellow: "#adff2f",
      grey: "#808080",
      honeydew: "#f0fff0",
      hotpink: "#ff69b4",
      indianred: "#cd5c5c",
      indigo: "#4b0082",
      ivory: "#fffff0",
      khaki: "#f0e68c",
      laserlemon: "#ffff54",
      lavender: "#e6e6fa",
      lavenderblush: "#fff0f5",
      lawngreen: "#7cfc00",
      lemonchiffon: "#fffacd",
      lightblue: "#add8e6",
      lightcoral: "#f08080",
      lightcyan: "#e0ffff",
      lightgoldenrod: "#fafad2",
      lightgoldenrodyellow: "#fafad2",
      lightgray: "#d3d3d3",
      lightgreen: "#90ee90",
      lightgrey: "#d3d3d3",
      lightpink: "#ffb6c1",
      lightsalmon: "#ffa07a",
      lightseagreen: "#20b2aa",
      lightskyblue: "#87cefa",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      lightsteelblue: "#b0c4de",
      lightyellow: "#ffffe0",
      lime: "#00ff00",
      limegreen: "#32cd32",
      linen: "#faf0e6",
      magenta: "#ff00ff",
      maroon: "#800000",
      maroon2: "#7f0000",
      maroon3: "#b03060",
      mediumaquamarine: "#66cdaa",
      mediumblue: "#0000cd",
      mediumorchid: "#ba55d3",
      mediumpurple: "#9370db",
      mediumseagreen: "#3cb371",
      mediumslateblue: "#7b68ee",
      mediumspringgreen: "#00fa9a",
      mediumturquoise: "#48d1cc",
      mediumvioletred: "#c71585",
      midnightblue: "#191970",
      mintcream: "#f5fffa",
      mistyrose: "#ffe4e1",
      moccasin: "#ffe4b5",
      navajowhite: "#ffdead",
      navy: "#000080",
      oldlace: "#fdf5e6",
      olive: "#808000",
      olivedrab: "#6b8e23",
      orange: "#ffa500",
      orangered: "#ff4500",
      orchid: "#da70d6",
      palegoldenrod: "#eee8aa",
      palegreen: "#98fb98",
      paleturquoise: "#afeeee",
      palevioletred: "#db7093",
      papayawhip: "#ffefd5",
      peachpuff: "#ffdab9",
      peru: "#cd853f",
      pink: "#ffc0cb",
      plum: "#dda0dd",
      powderblue: "#b0e0e6",
      purple: "#800080",
      purple2: "#7f007f",
      purple3: "#a020f0",
      rebeccapurple: "#663399",
      red: "#ff0000",
      rosybrown: "#bc8f8f",
      royalblue: "#4169e1",
      saddlebrown: "#8b4513",
      salmon: "#fa8072",
      sandybrown: "#f4a460",
      seagreen: "#2e8b57",
      seashell: "#fff5ee",
      sienna: "#a0522d",
      silver: "#c0c0c0",
      skyblue: "#87ceeb",
      slateblue: "#6a5acd",
      slategray: "#708090",
      slategrey: "#708090",
      snow: "#fffafa",
      springgreen: "#00ff7f",
      steelblue: "#4682b4",
      tan: "#d2b48c",
      teal: "#008080",
      thistle: "#d8bfd8",
      tomato: "#ff6347",
      turquoise: "#40e0d0",
      violet: "#ee82ee",
      wheat: "#f5deb3",
      white: "#ffffff",
      whitesmoke: "#f5f5f5",
      yellow: "#ffff00",
      yellowgreen: "#9acd32"
    }, ut = No, Co = O, st = V, $o = b.type, vr = ut, Do = qa, To = ja;
    Co.prototype.name = function() {
      for (var e = To(this._rgb, "rgb"), r = 0, a = Object.keys(vr); r < a.length; r += 1) {
        var t = a[r];
        if (vr[t] === e)
          return t.toLowerCase();
      }
      return e;
    }, st.format.named = function(e) {
      if (e = e.toLowerCase(), vr[e])
        return Do(vr[e]);
      throw new Error("unknown color name: " + e);
    }, st.autodetect.push({
      p: 5,
      test: function(e) {
        for (var r = [], a = arguments.length - 1; a-- > 0; )
          r[a] = arguments[a + 1];
        if (!r.length && $o(e) === "string" && vr[e.toLowerCase()])
          return "named";
      }
    });
    var So = b.unpack, Io = function() {
      for (var e = [], r = arguments.length; r--; )
        e[r] = arguments[r];
      var a = So(e, "rgb"), t = a[0], o = a[1], c = a[2];
      return (t << 16) + (o << 8) + c;
    }, Oo = Io, Po = b.type, Mo = function(e) {
      if (Po(e) == "number" && e >= 0 && e <= 16777215) {
        var r = e >> 16, a = e >> 8 & 255, t = e & 255;
        return [r, a, t, 1];
      }
      throw new Error("unknown num color: " + e);
    }, Fo = Mo, Ro = M, ft = O, dt = V, Bo = b.type, Lo = Oo;
    ft.prototype.num = function() {
      return Lo(this._rgb);
    }, Ro.num = function() {
      for (var e = [], r = arguments.length; r--; )
        e[r] = arguments[r];
      return new (Function.prototype.bind.apply(ft, [null].concat(e, ["num"])))();
    }, dt.format.num = Fo, dt.autodetect.push({
      p: 5,
      test: function() {
        for (var e = [], r = arguments.length; r--; )
          e[r] = arguments[r];
        if (e.length === 1 && Bo(e[0]) === "number" && e[0] >= 0 && e[0] <= 16777215)
          return "num";
      }
    });
    var zo = M, Xr = O, vt = V, mt = b.unpack, gt = b.type, pt = Math.round;
    Xr.prototype.rgb = function(e) {
      return e === void 0 && (e = !0), e === !1 ? this._rgb.slice(0, 3) : this._rgb.slice(0, 3).map(pt);
    }, Xr.prototype.rgba = function(e) {
      return e === void 0 && (e = !0), this._rgb.slice(0, 4).map(function(r, a) {
        return a < 3 ? e === !1 ? r : pt(r) : r;
      });
    }, zo.rgb = function() {
      for (var e = [], r = arguments.length; r--; )
        e[r] = arguments[r];
      return new (Function.prototype.bind.apply(Xr, [null].concat(e, ["rgb"])))();
    }, vt.format.rgb = function() {
      for (var e = [], r = arguments.length; r--; )
        e[r] = arguments[r];
      var a = mt(e, "rgba");
      return a[3] === void 0 && (a[3] = 1), a;
    }, vt.autodetect.push({
      p: 3,
      test: function() {
        for (var e = [], r = arguments.length; r--; )
          e[r] = arguments[r];
        if (e = mt(e, "rgba"), gt(e) === "array" && (e.length === 3 || e.length === 4 && gt(e[3]) == "number" && e[3] >= 0 && e[3] <= 1))
          return "rgb";
      }
    });
    var _r = Math.log, Uo = function(e) {
      var r = e / 100, a, t, o;
      return r < 66 ? (a = 255, t = r < 6 ? 0 : -155.25485562709179 - 0.44596950469579133 * (t = r - 2) + 104.49216199393888 * _r(t), o = r < 20 ? 0 : -254.76935184120902 + 0.8274096064007395 * (o = r - 10) + 115.67994401066147 * _r(o)) : (a = 351.97690566805693 + 0.114206453784165 * (a = r - 55) - 40.25366309332127 * _r(a), t = 325.4494125711974 + 0.07943456536662342 * (t = r - 50) - 28.0852963507957 * _r(t), o = 255), [a, t, o, 1];
    }, ht = Uo, jo = ht, qo = b.unpack, Go = Math.round, Ho = function() {
      for (var e = [], r = arguments.length; r--; )
        e[r] = arguments[r];
      for (var a = qo(e, "rgb"), t = a[0], o = a[2], c = 1e3, l = 4e4, f = 0.4, d; l - c > f; ) {
        d = (l + c) * 0.5;
        var m = jo(d);
        m[2] / m[0] >= o / t ? l = d : c = d;
      }
      return Go(d);
    }, Vo = Ho, Yr = M, xr = O, Jr = V, Wo = Vo;
    xr.prototype.temp = xr.prototype.kelvin = xr.prototype.temperature = function() {
      return Wo(this._rgb);
    }, Yr.temp = Yr.kelvin = Yr.temperature = function() {
      for (var e = [], r = arguments.length; r--; )
        e[r] = arguments[r];
      return new (Function.prototype.bind.apply(xr, [null].concat(e, ["temp"])))();
    }, Jr.format.temp = Jr.format.kelvin = Jr.format.temperature = ht;
    var Zo = b.unpack, Qr = Math.cbrt, Xo = Math.pow, Yo = Math.sign, Jo = function() {
      for (var e = [], r = arguments.length; r--; )
        e[r] = arguments[r];
      var a = Zo(e, "rgb"), t = a[0], o = a[1], c = a[2], l = [Kr(t / 255), Kr(o / 255), Kr(c / 255)], f = l[0], d = l[1], m = l[2], g = Qr(0.4122214708 * f + 0.5363325363 * d + 0.0514459929 * m), w = Qr(0.2119034982 * f + 0.6806995451 * d + 0.1073969566 * m), p = Qr(0.0883024619 * f + 0.2817188376 * d + 0.6299787005 * m);
      return [
        0.2104542553 * g + 0.793617785 * w - 0.0040720468 * p,
        1.9779984951 * g - 2.428592205 * w + 0.4505937099 * p,
        0.0259040371 * g + 0.7827717662 * w - 0.808675766 * p
      ];
    }, bt = Jo;
    function Kr(e) {
      var r = Math.abs(e);
      return r < 0.04045 ? e / 12.92 : (Yo(e) || 1) * Xo((r + 0.055) / 1.055, 2.4);
    }
    var Qo = b.unpack, Ar = Math.pow, Ko = Math.sign, ei = function() {
      for (var e = [], r = arguments.length; r--; )
        e[r] = arguments[r];
      e = Qo(e, "lab");
      var a = e[0], t = e[1], o = e[2], c = Ar(a + 0.3963377774 * t + 0.2158037573 * o, 3), l = Ar(a - 0.1055613458 * t - 0.0638541728 * o, 3), f = Ar(a - 0.0894841775 * t - 1.291485548 * o, 3);
      return [
        255 * ea(4.0767416621 * c - 3.3077115913 * l + 0.2309699292 * f),
        255 * ea(-1.2684380046 * c + 2.6097574011 * l - 0.3413193965 * f),
        255 * ea(-0.0041960863 * c - 0.7034186147 * l + 1.707614701 * f),
        e.length > 3 ? e[3] : 1
      ];
    }, yt = ei;
    function ea(e) {
      var r = Math.abs(e);
      return r > 31308e-7 ? (Ko(e) || 1) * (1.055 * Ar(r, 1 / 2.4) - 0.055) : e * 12.92;
    }
    var ri = b.unpack, ai = b.type, ti = M, Et = O, wt = V, ni = bt;
    Et.prototype.oklab = function() {
      return ni(this._rgb);
    }, ti.oklab = function() {
      for (var e = [], r = arguments.length; r--; )
        e[r] = arguments[r];
      return new (Function.prototype.bind.apply(Et, [null].concat(e, ["oklab"])))();
    }, wt.format.oklab = yt, wt.autodetect.push({
      p: 3,
      test: function() {
        for (var e = [], r = arguments.length; r--; )
          e[r] = arguments[r];
        if (e = ri(e, "oklab"), ai(e) === "array" && e.length === 3)
          return "oklab";
      }
    });
    var li = b.unpack, oi = bt, ii = nt, ci = function() {
      for (var e = [], r = arguments.length; r--; )
        e[r] = arguments[r];
      var a = li(e, "rgb"), t = a[0], o = a[1], c = a[2], l = oi(t, o, c), f = l[0], d = l[1], m = l[2];
      return ii(f, d, m);
    }, ui = ci, si = b.unpack, fi = lt, di = yt, vi = function() {
      for (var e = [], r = arguments.length; r--; )
        e[r] = arguments[r];
      e = si(e, "lch");
      var a = e[0], t = e[1], o = e[2], c = fi(a, t, o), l = c[0], f = c[1], d = c[2], m = di(l, f, d), g = m[0], w = m[1], p = m[2];
      return [g, w, p, e.length > 3 ? e[3] : 1];
    }, mi = vi, gi = b.unpack, pi = b.type, hi = M, _t = O, xt = V, bi = ui;
    _t.prototype.oklch = function() {
      return bi(this._rgb);
    }, hi.oklch = function() {
      for (var e = [], r = arguments.length; r--; )
        e[r] = arguments[r];
      return new (Function.prototype.bind.apply(_t, [null].concat(e, ["oklch"])))();
    }, xt.format.oklch = mi, xt.autodetect.push({
      p: 3,
      test: function() {
        for (var e = [], r = arguments.length; r--; )
          e[r] = arguments[r];
        if (e = gi(e, "oklch"), pi(e) === "array" && e.length === 3)
          return "oklch";
      }
    });
    var At = O, yi = b.type;
    At.prototype.alpha = function(e, r) {
      return r === void 0 && (r = !1), e !== void 0 && yi(e) === "number" ? r ? (this._rgb[3] = e, this) : new At([this._rgb[0], this._rgb[1], this._rgb[2], e], "rgb") : this._rgb[3];
    };
    var Ei = O;
    Ei.prototype.clipped = function() {
      return this._rgb._clipped || !1;
    };
    var Ye = O, wi = Er;
    Ye.prototype.darken = function(e) {
      e === void 0 && (e = 1);
      var r = this, a = r.lab();
      return a[0] -= wi.Kn * e, new Ye(a, "lab").alpha(r.alpha(), !0);
    }, Ye.prototype.brighten = function(e) {
      return e === void 0 && (e = 1), this.darken(-e);
    }, Ye.prototype.darker = Ye.prototype.darken, Ye.prototype.brighter = Ye.prototype.brighten;
    var _i = O;
    _i.prototype.get = function(e) {
      var r = e.split("."), a = r[0], t = r[1], o = this[a]();
      if (t) {
        var c = a.indexOf(t) - (a.substr(0, 2) === "ok" ? 2 : 0);
        if (c > -1)
          return o[c];
        throw new Error("unknown channel " + t + " in mode " + a);
      } else
        return o;
    };
    var or = O, xi = b.type, Ai = Math.pow, ki = 1e-7, Ni = 20;
    or.prototype.luminance = function(e) {
      if (e !== void 0 && xi(e) === "number") {
        if (e === 0)
          return new or([0, 0, 0, this._rgb[3]], "rgb");
        if (e === 1)
          return new or([255, 255, 255, this._rgb[3]], "rgb");
        var r = this.luminance(), a = "rgb", t = Ni, o = function(l, f) {
          var d = l.interpolate(f, 0.5, a), m = d.luminance();
          return Math.abs(e - m) < ki || !t-- ? d : m > e ? o(l, d) : o(d, f);
        }, c = (r > e ? o(new or([0, 0, 0]), this) : o(this, new or([255, 255, 255]))).rgb();
        return new or(c.concat([this._rgb[3]]));
      }
      return Ci.apply(void 0, this._rgb.slice(0, 3));
    };
    var Ci = function(e, r, a) {
      return e = ra(e), r = ra(r), a = ra(a), 0.2126 * e + 0.7152 * r + 0.0722 * a;
    }, ra = function(e) {
      return e /= 255, e <= 0.03928 ? e / 12.92 : Ai((e + 0.055) / 1.055, 2.4);
    }, Se = {}, kt = O, Nt = b.type, kr = Se, Ct = function(e, r, a) {
      a === void 0 && (a = 0.5);
      for (var t = [], o = arguments.length - 3; o-- > 0; )
        t[o] = arguments[o + 3];
      var c = t[0] || "lrgb";
      if (!kr[c] && !t.length && (c = Object.keys(kr)[0]), !kr[c])
        throw new Error("interpolation mode " + c + " is not defined");
      return Nt(e) !== "object" && (e = new kt(e)), Nt(r) !== "object" && (r = new kt(r)), kr[c](e, r, a).alpha(e.alpha() + a * (r.alpha() - e.alpha()));
    }, $t = O, $i = Ct;
    $t.prototype.mix = $t.prototype.interpolate = function(e, r) {
      r === void 0 && (r = 0.5);
      for (var a = [], t = arguments.length - 2; t-- > 0; )
        a[t] = arguments[t + 2];
      return $i.apply(void 0, [this, e, r].concat(a));
    };
    var Dt = O;
    Dt.prototype.premultiply = function(e) {
      e === void 0 && (e = !1);
      var r = this._rgb, a = r[3];
      return e ? (this._rgb = [r[0] * a, r[1] * a, r[2] * a, a], this) : new Dt([r[0] * a, r[1] * a, r[2] * a, a], "rgb");
    };
    var aa = O, Di = Er;
    aa.prototype.saturate = function(e) {
      e === void 0 && (e = 1);
      var r = this, a = r.lch();
      return a[1] += Di.Kn * e, a[1] < 0 && (a[1] = 0), new aa(a, "lch").alpha(r.alpha(), !0);
    }, aa.prototype.desaturate = function(e) {
      return e === void 0 && (e = 1), this.saturate(-e);
    };
    var Tt = O, St = b.type;
    Tt.prototype.set = function(e, r, a) {
      a === void 0 && (a = !1);
      var t = e.split("."), o = t[0], c = t[1], l = this[o]();
      if (c) {
        var f = o.indexOf(c) - (o.substr(0, 2) === "ok" ? 2 : 0);
        if (f > -1) {
          if (St(r) == "string")
            switch (r.charAt(0)) {
              case "+":
                l[f] += +r;
                break;
              case "-":
                l[f] += +r;
                break;
              case "*":
                l[f] *= +r.substr(1);
                break;
              case "/":
                l[f] /= +r.substr(1);
                break;
              default:
                l[f] = +r;
            }
          else if (St(r) === "number")
            l[f] = r;
          else
            throw new Error("unsupported value for Color.set");
          var d = new Tt(l, o);
          return a ? (this._rgb = d._rgb, this) : d;
        }
        throw new Error("unknown channel " + c + " in mode " + o);
      } else
        return l;
    };
    var Ti = O, Si = function(e, r, a) {
      var t = e._rgb, o = r._rgb;
      return new Ti(
        t[0] + a * (o[0] - t[0]),
        t[1] + a * (o[1] - t[1]),
        t[2] + a * (o[2] - t[2]),
        "rgb"
      );
    };
    Se.rgb = Si;
    var Ii = O, ta = Math.sqrt, ir = Math.pow, Oi = function(e, r, a) {
      var t = e._rgb, o = t[0], c = t[1], l = t[2], f = r._rgb, d = f[0], m = f[1], g = f[2];
      return new Ii(
        ta(ir(o, 2) * (1 - a) + ir(d, 2) * a),
        ta(ir(c, 2) * (1 - a) + ir(m, 2) * a),
        ta(ir(l, 2) * (1 - a) + ir(g, 2) * a),
        "rgb"
      );
    };
    Se.lrgb = Oi;
    var Pi = O, Mi = function(e, r, a) {
      var t = e.lab(), o = r.lab();
      return new Pi(
        t[0] + a * (o[0] - t[0]),
        t[1] + a * (o[1] - t[1]),
        t[2] + a * (o[2] - t[2]),
        "lab"
      );
    };
    Se.lab = Mi;
    var It = O, cr = function(e, r, a, t) {
      var o, c, l, f;
      t === "hsl" ? (l = e.hsl(), f = r.hsl()) : t === "hsv" ? (l = e.hsv(), f = r.hsv()) : t === "hcg" ? (l = e.hcg(), f = r.hcg()) : t === "hsi" ? (l = e.hsi(), f = r.hsi()) : t === "lch" || t === "hcl" ? (t = "hcl", l = e.hcl(), f = r.hcl()) : t === "oklch" && (l = e.oklch().reverse(), f = r.oklch().reverse());
      var d, m, g, w, p, C;
      (t.substr(0, 1) === "h" || t === "oklch") && (o = l, d = o[0], g = o[1], p = o[2], c = f, m = c[0], w = c[1], C = c[2]);
      var N, U, G, W;
      return !isNaN(d) && !isNaN(m) ? (m > d && m - d > 180 ? W = m - (d + 360) : m < d && d - m > 180 ? W = m + 360 - d : W = m - d, U = d + a * W) : isNaN(d) ? isNaN(m) ? U = Number.NaN : (U = m, (p == 1 || p == 0) && t != "hsv" && (N = w)) : (U = d, (C == 1 || C == 0) && t != "hsv" && (N = g)), N === void 0 && (N = g + a * (w - g)), G = p + a * (C - p), t === "oklch" ? new It([G, N, U], t) : new It([U, N, G], t);
    }, Fi = cr, Ot = function(e, r, a) {
      return Fi(e, r, a, "lch");
    };
    Se.lch = Ot, Se.hcl = Ot;
    var Ri = O, Bi = function(e, r, a) {
      var t = e.num(), o = r.num();
      return new Ri(t + a * (o - t), "num");
    };
    Se.num = Bi;
    var Li = cr, zi = function(e, r, a) {
      return Li(e, r, a, "hcg");
    };
    Se.hcg = zi;
    var Ui = cr, ji = function(e, r, a) {
      return Ui(e, r, a, "hsi");
    };
    Se.hsi = ji;
    var qi = cr, Gi = function(e, r, a) {
      return qi(e, r, a, "hsl");
    };
    Se.hsl = Gi;
    var Hi = cr, Vi = function(e, r, a) {
      return Hi(e, r, a, "hsv");
    };
    Se.hsv = Vi;
    var Wi = O, Zi = function(e, r, a) {
      var t = e.oklab(), o = r.oklab();
      return new Wi(
        t[0] + a * (o[0] - t[0]),
        t[1] + a * (o[1] - t[1]),
        t[2] + a * (o[2] - t[2]),
        "oklab"
      );
    };
    Se.oklab = Zi;
    var Xi = cr, Yi = function(e, r, a) {
      return Xi(e, r, a, "oklch");
    };
    Se.oklch = Yi;
    var na = O, Ji = b.clip_rgb, la = Math.pow, oa = Math.sqrt, ia = Math.PI, Pt = Math.cos, Mt = Math.sin, Qi = Math.atan2, Ki = function(e, r, a) {
      r === void 0 && (r = "lrgb"), a === void 0 && (a = null);
      var t = e.length;
      a || (a = Array.from(new Array(t)).map(function() {
        return 1;
      }));
      var o = t / a.reduce(function(U, G) {
        return U + G;
      });
      if (a.forEach(function(U, G) {
        a[G] *= o;
      }), e = e.map(function(U) {
        return new na(U);
      }), r === "lrgb")
        return ec(e, a);
      for (var c = e.shift(), l = c.get(r), f = [], d = 0, m = 0, g = 0; g < l.length; g++)
        if (l[g] = (l[g] || 0) * a[0], f.push(isNaN(l[g]) ? 0 : a[0]), r.charAt(g) === "h" && !isNaN(l[g])) {
          var w = l[g] / 180 * ia;
          d += Pt(w) * a[0], m += Mt(w) * a[0];
        }
      var p = c.alpha() * a[0];
      e.forEach(function(U, G) {
        var W = U.get(r);
        p += U.alpha() * a[G + 1];
        for (var Y = 0; Y < l.length; Y++)
          if (!isNaN(W[Y]))
            if (f[Y] += a[G + 1], r.charAt(Y) === "h") {
              var Ee = W[Y] / 180 * ia;
              d += Pt(Ee) * a[G + 1], m += Mt(Ee) * a[G + 1];
            } else
              l[Y] += W[Y] * a[G + 1];
      });
      for (var C = 0; C < l.length; C++)
        if (r.charAt(C) === "h") {
          for (var N = Qi(m / f[C], d / f[C]) / ia * 180; N < 0; )
            N += 360;
          for (; N >= 360; )
            N -= 360;
          l[C] = N;
        } else
          l[C] = l[C] / f[C];
      return p /= t, new na(l, r).alpha(p > 0.99999 ? 1 : p, !0);
    }, ec = function(e, r) {
      for (var a = e.length, t = [0, 0, 0, 0], o = 0; o < e.length; o++) {
        var c = e[o], l = r[o] / a, f = c._rgb;
        t[0] += la(f[0], 2) * l, t[1] += la(f[1], 2) * l, t[2] += la(f[2], 2) * l, t[3] += f[3] * l;
      }
      return t[0] = oa(t[0]), t[1] = oa(t[1]), t[2] = oa(t[2]), t[3] > 0.9999999 && (t[3] = 1), new na(Ji(t));
    }, Pe = M, ur = b.type, rc = Math.pow, ca = function(e) {
      var r = "rgb", a = Pe("#ccc"), t = 0, o = [0, 1], c = [], l = [0, 0], f = !1, d = [], m = !1, g = 0, w = 1, p = !1, C = {}, N = !0, U = 1, G = function(h) {
        if (h = h || ["#fff", "#000"], h && ur(h) === "string" && Pe.brewer && Pe.brewer[h.toLowerCase()] && (h = Pe.brewer[h.toLowerCase()]), ur(h) === "array") {
          h.length === 1 && (h = [h[0], h[0]]), h = h.slice(0);
          for (var P = 0; P < h.length; P++)
            h[P] = Pe(h[P]);
          c.length = 0;
          for (var q = 0; q < h.length; q++)
            c.push(q / (h.length - 1));
        }
        return De(), d = h;
      }, W = function(h) {
        if (f != null) {
          for (var P = f.length - 1, q = 0; q < P && h >= f[q]; )
            q++;
          return q - 1;
        }
        return 0;
      }, Y = function(h) {
        return h;
      }, Ee = function(h) {
        return h;
      }, be = function(h, P) {
        var q, j;
        if (P == null && (P = !1), isNaN(h) || h === null)
          return a;
        if (P)
          j = h;
        else if (f && f.length > 2) {
          var we = W(h);
          j = we / (f.length - 2);
        } else
          w !== g ? j = (h - g) / (w - g) : j = 1;
        j = Ee(j), P || (j = Y(j)), U !== 1 && (j = rc(j, U)), j = l[0] + j * (1 - l[0] - l[1]), j = Math.min(1, Math.max(0, j));
        var te = Math.floor(j * 1e4);
        if (N && C[te])
          q = C[te];
        else {
          if (ur(d) === "array")
            for (var Z = 0; Z < c.length; Z++) {
              var Q = c[Z];
              if (j <= Q) {
                q = d[Z];
                break;
              }
              if (j >= Q && Z === c.length - 1) {
                q = d[Z];
                break;
              }
              if (j > Q && j < c[Z + 1]) {
                j = (j - Q) / (c[Z + 1] - Q), q = Pe.interpolate(d[Z], d[Z + 1], j, r);
                break;
              }
            }
          else
            ur(d) === "function" && (q = d(j));
          N && (C[te] = q);
        }
        return q;
      }, De = function() {
        return C = {};
      };
      G(e);
      var H = function(h) {
        var P = Pe(be(h));
        return m && P[m] ? P[m]() : P;
      };
      return H.classes = function(h) {
        if (h != null) {
          if (ur(h) === "array")
            f = h, o = [h[0], h[h.length - 1]];
          else {
            var P = Pe.analyze(o);
            h === 0 ? f = [P.min, P.max] : f = Pe.limits(P, "e", h);
          }
          return H;
        }
        return f;
      }, H.domain = function(h) {
        if (!arguments.length)
          return o;
        g = h[0], w = h[h.length - 1], c = [];
        var P = d.length;
        if (h.length === P && g !== w)
          for (var q = 0, j = Array.from(h); q < j.length; q += 1) {
            var we = j[q];
            c.push((we - g) / (w - g));
          }
        else {
          for (var te = 0; te < P; te++)
            c.push(te / (P - 1));
          if (h.length > 2) {
            var Z = h.map(function(K, ae) {
              return ae / (h.length - 1);
            }), Q = h.map(function(K) {
              return (K - g) / (w - g);
            });
            Q.every(function(K, ae) {
              return Z[ae] === K;
            }) || (Ee = function(K) {
              if (K <= 0 || K >= 1)
                return K;
              for (var ae = 0; K >= Q[ae + 1]; )
                ae++;
              var Fe = (K - Q[ae]) / (Q[ae + 1] - Q[ae]), Ze = Z[ae] + Fe * (Z[ae + 1] - Z[ae]);
              return Ze;
            });
          }
        }
        return o = [g, w], H;
      }, H.mode = function(h) {
        return arguments.length ? (r = h, De(), H) : r;
      }, H.range = function(h, P) {
        return G(h), H;
      }, H.out = function(h) {
        return m = h, H;
      }, H.spread = function(h) {
        return arguments.length ? (t = h, H) : t;
      }, H.correctLightness = function(h) {
        return h == null && (h = !0), p = h, De(), p ? Y = function(P) {
          for (var q = be(0, !0).lab()[0], j = be(1, !0).lab()[0], we = q > j, te = be(P, !0).lab()[0], Z = q + (j - q) * P, Q = te - Z, K = 0, ae = 1, Fe = 20; Math.abs(Q) > 0.01 && Fe-- > 0; )
            (function() {
              return we && (Q *= -1), Q < 0 ? (K = P, P += (ae - P) * 0.5) : (ae = P, P += (K - P) * 0.5), te = be(P, !0).lab()[0], Q = te - Z;
            })();
          return P;
        } : Y = function(P) {
          return P;
        }, H;
      }, H.padding = function(h) {
        return h != null ? (ur(h) === "number" && (h = [h, h]), l = h, H) : l;
      }, H.colors = function(h, P) {
        arguments.length < 2 && (P = "hex");
        var q = [];
        if (arguments.length === 0)
          q = d.slice(0);
        else if (h === 1)
          q = [H(0.5)];
        else if (h > 1) {
          var j = o[0], we = o[1] - j;
          q = ac(0, h, !1).map(function(ae) {
            return H(j + ae / (h - 1) * we);
          });
        } else {
          e = [];
          var te = [];
          if (f && f.length > 2)
            for (var Z = 1, Q = f.length, K = 1 <= Q; K ? Z < Q : Z > Q; K ? Z++ : Z--)
              te.push((f[Z - 1] + f[Z]) * 0.5);
          else
            te = o;
          q = te.map(function(ae) {
            return H(ae);
          });
        }
        return Pe[P] && (q = q.map(function(ae) {
          return ae[P]();
        })), q;
      }, H.cache = function(h) {
        return h != null ? (N = h, H) : N;
      }, H.gamma = function(h) {
        return h != null ? (U = h, H) : U;
      }, H.nodata = function(h) {
        return h != null ? (a = Pe(h), H) : a;
      }, H;
    };
    function ac(e, r, a) {
      for (var t = [], o = e < r, c = a ? o ? r + 1 : r - 1 : r, l = e; o ? l < c : l > c; o ? l++ : l--)
        t.push(l);
      return t;
    }
    var mr = O, tc = ca, nc = function(e) {
      for (var r = [1, 1], a = 1; a < e; a++) {
        for (var t = [1], o = 1; o <= r.length; o++)
          t[o] = (r[o] || 0) + r[o - 1];
        r = t;
      }
      return r;
    }, lc = function(e) {
      var r, a, t, o, c, l, f;
      if (e = e.map(function(p) {
        return new mr(p);
      }), e.length === 2)
        r = e.map(function(p) {
          return p.lab();
        }), c = r[0], l = r[1], o = function(p) {
          var C = [0, 1, 2].map(function(N) {
            return c[N] + p * (l[N] - c[N]);
          });
          return new mr(C, "lab");
        };
      else if (e.length === 3)
        a = e.map(function(p) {
          return p.lab();
        }), c = a[0], l = a[1], f = a[2], o = function(p) {
          var C = [0, 1, 2].map(function(N) {
            return (1 - p) * (1 - p) * c[N] + 2 * (1 - p) * p * l[N] + p * p * f[N];
          });
          return new mr(C, "lab");
        };
      else if (e.length === 4) {
        var d;
        t = e.map(function(p) {
          return p.lab();
        }), c = t[0], l = t[1], f = t[2], d = t[3], o = function(p) {
          var C = [0, 1, 2].map(function(N) {
            return (1 - p) * (1 - p) * (1 - p) * c[N] + 3 * (1 - p) * (1 - p) * p * l[N] + 3 * (1 - p) * p * p * f[N] + p * p * p * d[N];
          });
          return new mr(C, "lab");
        };
      } else if (e.length >= 5) {
        var m, g, w;
        m = e.map(function(p) {
          return p.lab();
        }), w = e.length - 1, g = nc(w), o = function(p) {
          var C = 1 - p, N = [0, 1, 2].map(function(U) {
            return m.reduce(function(G, W, Y) {
              return G + g[Y] * Math.pow(C, w - Y) * Math.pow(p, Y) * W[U];
            }, 0);
          });
          return new mr(N, "lab");
        };
      } else
        throw new RangeError("No point in running bezier with only one color.");
      return o;
    }, oc = function(e) {
      var r = lc(e);
      return r.scale = function() {
        return tc(r);
      }, r;
    }, ua = M, Me = function(e, r, a) {
      if (!Me[a])
        throw new Error("unknown blend mode " + a);
      return Me[a](e, r);
    }, Ve = function(e) {
      return function(r, a) {
        var t = ua(a).rgb(), o = ua(r).rgb();
        return ua.rgb(e(t, o));
      };
    }, We = function(e) {
      return function(r, a) {
        var t = [];
        return t[0] = e(r[0], a[0]), t[1] = e(r[1], a[1]), t[2] = e(r[2], a[2]), t;
      };
    }, ic = function(e) {
      return e;
    }, cc = function(e, r) {
      return e * r / 255;
    }, uc = function(e, r) {
      return e > r ? r : e;
    }, sc = function(e, r) {
      return e > r ? e : r;
    }, fc = function(e, r) {
      return 255 * (1 - (1 - e / 255) * (1 - r / 255));
    }, dc = function(e, r) {
      return r < 128 ? 2 * e * r / 255 : 255 * (1 - 2 * (1 - e / 255) * (1 - r / 255));
    }, vc = function(e, r) {
      return 255 * (1 - (1 - r / 255) / (e / 255));
    }, mc = function(e, r) {
      return e === 255 ? 255 : (e = 255 * (r / 255) / (1 - e / 255), e > 255 ? 255 : e);
    };
    Me.normal = Ve(We(ic)), Me.multiply = Ve(We(cc)), Me.screen = Ve(We(fc)), Me.overlay = Ve(We(dc)), Me.darken = Ve(We(uc)), Me.lighten = Ve(We(sc)), Me.dodge = Ve(We(mc)), Me.burn = Ve(We(vc));
    for (var gc = Me, sa = b.type, pc = b.clip_rgb, hc = b.TWOPI, bc = Math.pow, yc = Math.sin, Ec = Math.cos, Ft = M, wc = function(e, r, a, t, o) {
      e === void 0 && (e = 300), r === void 0 && (r = -1.5), a === void 0 && (a = 1), t === void 0 && (t = 1), o === void 0 && (o = [0, 1]);
      var c = 0, l;
      sa(o) === "array" ? l = o[1] - o[0] : (l = 0, o = [o, o]);
      var f = function(d) {
        var m = hc * ((e + 120) / 360 + r * d), g = bc(o[0] + l * d, t), w = c !== 0 ? a[0] + d * c : a, p = w * g * (1 - g) / 2, C = Ec(m), N = yc(m), U = g + p * (-0.14861 * C + 1.78277 * N), G = g + p * (-0.29227 * C - 0.90649 * N), W = g + p * (1.97294 * C);
        return Ft(pc([U * 255, G * 255, W * 255, 1]));
      };
      return f.start = function(d) {
        return d == null ? e : (e = d, f);
      }, f.rotations = function(d) {
        return d == null ? r : (r = d, f);
      }, f.gamma = function(d) {
        return d == null ? t : (t = d, f);
      }, f.hue = function(d) {
        return d == null ? a : (a = d, sa(a) === "array" ? (c = a[1] - a[0], c === 0 && (a = a[1])) : c = 0, f);
      }, f.lightness = function(d) {
        return d == null ? o : (sa(d) === "array" ? (o = d, l = d[1] - d[0]) : (o = [d, d], l = 0), f);
      }, f.scale = function() {
        return Ft.scale(f);
      }, f.hue(a), f;
    }, _c = O, xc = "0123456789abcdef", Ac = Math.floor, kc = Math.random, Nc = function() {
      for (var e = "#", r = 0; r < 6; r++)
        e += xc.charAt(Ac(kc() * 16));
      return new _c(e, "hex");
    }, fa = k, Rt = Math.log, Cc = Math.pow, $c = Math.floor, Dc = Math.abs, Bt = function(e, r) {
      r === void 0 && (r = null);
      var a = {
        min: Number.MAX_VALUE,
        max: Number.MAX_VALUE * -1,
        sum: 0,
        values: [],
        count: 0
      };
      return fa(e) === "object" && (e = Object.values(e)), e.forEach(function(t) {
        r && fa(t) === "object" && (t = t[r]), t != null && !isNaN(t) && (a.values.push(t), a.sum += t, t < a.min && (a.min = t), t > a.max && (a.max = t), a.count += 1);
      }), a.domain = [a.min, a.max], a.limits = function(t, o) {
        return Lt(a, t, o);
      }, a;
    }, Lt = function(e, r, a) {
      r === void 0 && (r = "equal"), a === void 0 && (a = 7), fa(e) == "array" && (e = Bt(e));
      var t = e.min, o = e.max, c = e.values.sort(function(va, ma) {
        return va - ma;
      });
      if (a === 1)
        return [t, o];
      var l = [];
      if (r.substr(0, 1) === "c" && (l.push(t), l.push(o)), r.substr(0, 1) === "e") {
        l.push(t);
        for (var f = 1; f < a; f++)
          l.push(t + f / a * (o - t));
        l.push(o);
      } else if (r.substr(0, 1) === "l") {
        if (t <= 0)
          throw new Error("Logarithmic scales are only possible for values > 0");
        var d = Math.LOG10E * Rt(t), m = Math.LOG10E * Rt(o);
        l.push(t);
        for (var g = 1; g < a; g++)
          l.push(Cc(10, d + g / a * (m - d)));
        l.push(o);
      } else if (r.substr(0, 1) === "q") {
        l.push(t);
        for (var w = 1; w < a; w++) {
          var p = (c.length - 1) * w / a, C = $c(p);
          if (C === p)
            l.push(c[C]);
          else {
            var N = p - C;
            l.push(c[C] * (1 - N) + c[C + 1] * N);
          }
        }
        l.push(o);
      } else if (r.substr(0, 1) === "k") {
        var U, G = c.length, W = new Array(G), Y = new Array(a), Ee = !0, be = 0, De = null;
        De = [], De.push(t);
        for (var H = 1; H < a; H++)
          De.push(t + H / a * (o - t));
        for (De.push(o); Ee; ) {
          for (var h = 0; h < a; h++)
            Y[h] = 0;
          for (var P = 0; P < G; P++)
            for (var q = c[P], j = Number.MAX_VALUE, we = void 0, te = 0; te < a; te++) {
              var Z = Dc(De[te] - q);
              Z < j && (j = Z, we = te), Y[we]++, W[P] = we;
            }
          for (var Q = new Array(a), K = 0; K < a; K++)
            Q[K] = null;
          for (var ae = 0; ae < G; ae++)
            U = W[ae], Q[U] === null ? Q[U] = c[ae] : Q[U] += c[ae];
          for (var Fe = 0; Fe < a; Fe++)
            Q[Fe] *= 1 / Y[Fe];
          Ee = !1;
          for (var Ze = 0; Ze < a; Ze++)
            if (Q[Ze] !== De[Ze]) {
              Ee = !0;
              break;
            }
          De = Q, be++, be > 200 && (Ee = !1);
        }
        for (var Xe = {}, sr = 0; sr < a; sr++)
          Xe[sr] = [];
        for (var fr = 0; fr < G; fr++)
          U = W[fr], Xe[U].push(c[fr]);
        for (var qe = [], Je = 0; Je < a; Je++)
          qe.push(Xe[Je][0]), qe.push(Xe[Je][Xe[Je].length - 1]);
        qe = qe.sort(function(va, ma) {
          return va - ma;
        }), l.push(qe[0]);
        for (var gr = 1; gr < qe.length; gr += 2) {
          var Qe = qe[gr];
          !isNaN(Qe) && l.indexOf(Qe) === -1 && l.push(Qe);
        }
      }
      return l;
    }, zt = { analyze: Bt, limits: Lt }, Ut = O, Tc = function(e, r) {
      e = new Ut(e), r = new Ut(r);
      var a = e.luminance(), t = r.luminance();
      return a > t ? (a + 0.05) / (t + 0.05) : (t + 0.05) / (a + 0.05);
    }, jt = O, je = Math.sqrt, ve = Math.pow, Sc = Math.min, Ic = Math.max, qt = Math.atan2, Gt = Math.abs, Nr = Math.cos, Ht = Math.sin, Oc = Math.exp, Vt = Math.PI, Pc = function(e, r, a, t, o) {
      a === void 0 && (a = 1), t === void 0 && (t = 1), o === void 0 && (o = 1);
      var c = function(Qe) {
        return 360 * Qe / (2 * Vt);
      }, l = function(Qe) {
        return 2 * Vt * Qe / 360;
      };
      e = new jt(e), r = new jt(r);
      var f = Array.from(e.lab()), d = f[0], m = f[1], g = f[2], w = Array.from(r.lab()), p = w[0], C = w[1], N = w[2], U = (d + p) / 2, G = je(ve(m, 2) + ve(g, 2)), W = je(ve(C, 2) + ve(N, 2)), Y = (G + W) / 2, Ee = 0.5 * (1 - je(ve(Y, 7) / (ve(Y, 7) + ve(25, 7)))), be = m * (1 + Ee), De = C * (1 + Ee), H = je(ve(be, 2) + ve(g, 2)), h = je(ve(De, 2) + ve(N, 2)), P = (H + h) / 2, q = c(qt(g, be)), j = c(qt(N, De)), we = q >= 0 ? q : q + 360, te = j >= 0 ? j : j + 360, Z = Gt(we - te) > 180 ? (we + te + 360) / 2 : (we + te) / 2, Q = 1 - 0.17 * Nr(l(Z - 30)) + 0.24 * Nr(l(2 * Z)) + 0.32 * Nr(l(3 * Z + 6)) - 0.2 * Nr(l(4 * Z - 63)), K = te - we;
      K = Gt(K) <= 180 ? K : te <= we ? K + 360 : K - 360, K = 2 * je(H * h) * Ht(l(K) / 2);
      var ae = p - d, Fe = h - H, Ze = 1 + 0.015 * ve(U - 50, 2) / je(20 + ve(U - 50, 2)), Xe = 1 + 0.045 * P, sr = 1 + 0.015 * P * Q, fr = 30 * Oc(-ve((Z - 275) / 25, 2)), qe = 2 * je(ve(P, 7) / (ve(P, 7) + ve(25, 7))), Je = -qe * Ht(2 * l(fr)), gr = je(ve(ae / (a * Ze), 2) + ve(Fe / (t * Xe), 2) + ve(K / (o * sr), 2) + Je * (Fe / (t * Xe)) * (K / (o * sr)));
      return Ic(0, Sc(100, gr));
    }, Wt = O, Mc = function(e, r, a) {
      a === void 0 && (a = "lab"), e = new Wt(e), r = new Wt(r);
      var t = e.get(a), o = r.get(a), c = 0;
      for (var l in t) {
        var f = (t[l] || 0) - (o[l] || 0);
        c += f * f;
      }
      return Math.sqrt(c);
    }, Fc = O, Rc = function() {
      for (var e = [], r = arguments.length; r--; )
        e[r] = arguments[r];
      try {
        return new (Function.prototype.bind.apply(Fc, [null].concat(e)))(), !0;
      } catch {
        return !1;
      }
    }, Zt = M, Xt = ca, Bc = {
      cool: function() {
        return Xt([Zt.hsl(180, 1, 0.9), Zt.hsl(250, 0.7, 0.4)]);
      },
      hot: function() {
        return Xt(["#000", "#f00", "#ff0", "#fff"]).mode("rgb");
      }
    }, Cr = {
      // sequential
      OrRd: ["#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000"],
      PuBu: ["#fff7fb", "#ece7f2", "#d0d1e6", "#a6bddb", "#74a9cf", "#3690c0", "#0570b0", "#045a8d", "#023858"],
      BuPu: ["#f7fcfd", "#e0ecf4", "#bfd3e6", "#9ebcda", "#8c96c6", "#8c6bb1", "#88419d", "#810f7c", "#4d004b"],
      Oranges: ["#fff5eb", "#fee6ce", "#fdd0a2", "#fdae6b", "#fd8d3c", "#f16913", "#d94801", "#a63603", "#7f2704"],
      BuGn: ["#f7fcfd", "#e5f5f9", "#ccece6", "#99d8c9", "#66c2a4", "#41ae76", "#238b45", "#006d2c", "#00441b"],
      YlOrBr: ["#ffffe5", "#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404", "#662506"],
      YlGn: ["#ffffe5", "#f7fcb9", "#d9f0a3", "#addd8e", "#78c679", "#41ab5d", "#238443", "#006837", "#004529"],
      Reds: ["#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#a50f15", "#67000d"],
      RdPu: ["#fff7f3", "#fde0dd", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177", "#49006a"],
      Greens: ["#f7fcf5", "#e5f5e0", "#c7e9c0", "#a1d99b", "#74c476", "#41ab5d", "#238b45", "#006d2c", "#00441b"],
      YlGnBu: ["#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#253494", "#081d58"],
      Purples: ["#fcfbfd", "#efedf5", "#dadaeb", "#bcbddc", "#9e9ac8", "#807dba", "#6a51a3", "#54278f", "#3f007d"],
      GnBu: ["#f7fcf0", "#e0f3db", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#2b8cbe", "#0868ac", "#084081"],
      Greys: ["#ffffff", "#f0f0f0", "#d9d9d9", "#bdbdbd", "#969696", "#737373", "#525252", "#252525", "#000000"],
      YlOrRd: ["#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#bd0026", "#800026"],
      PuRd: ["#f7f4f9", "#e7e1ef", "#d4b9da", "#c994c7", "#df65b0", "#e7298a", "#ce1256", "#980043", "#67001f"],
      Blues: ["#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", "#08306b"],
      PuBuGn: ["#fff7fb", "#ece2f0", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016c59", "#014636"],
      Viridis: ["#440154", "#482777", "#3f4a8a", "#31678e", "#26838f", "#1f9d8a", "#6cce5a", "#b6de2b", "#fee825"],
      // diverging
      Spectral: ["#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2"],
      RdYlGn: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850", "#006837"],
      RdBu: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#f7f7f7", "#d1e5f0", "#92c5de", "#4393c3", "#2166ac", "#053061"],
      PiYG: ["#8e0152", "#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#f7f7f7", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221", "#276419"],
      PRGn: ["#40004b", "#762a83", "#9970ab", "#c2a5cf", "#e7d4e8", "#f7f7f7", "#d9f0d3", "#a6dba0", "#5aae61", "#1b7837", "#00441b"],
      RdYlBu: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee090", "#ffffbf", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4", "#313695"],
      BrBG: ["#543005", "#8c510a", "#bf812d", "#dfc27d", "#f6e8c3", "#f5f5f5", "#c7eae5", "#80cdc1", "#35978f", "#01665e", "#003c30"],
      RdGy: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#ffffff", "#e0e0e0", "#bababa", "#878787", "#4d4d4d", "#1a1a1a"],
      PuOr: ["#7f3b08", "#b35806", "#e08214", "#fdb863", "#fee0b6", "#f7f7f7", "#d8daeb", "#b2abd2", "#8073ac", "#542788", "#2d004b"],
      // qualitative
      Set2: ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494", "#b3b3b3"],
      Accent: ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0", "#f0027f", "#bf5b17", "#666666"],
      Set1: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628", "#f781bf", "#999999"],
      Set3: ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9", "#bc80bd", "#ccebc5", "#ffed6f"],
      Dark2: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666666"],
      Paired: ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a", "#ffff99", "#b15928"],
      Pastel2: ["#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4", "#e6f5c9", "#fff2ae", "#f1e2cc", "#cccccc"],
      Pastel1: ["#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6", "#ffffcc", "#e5d8bd", "#fddaec", "#f2f2f2"]
    }, da = 0, Yt = Object.keys(Cr); da < Yt.length; da += 1) {
      var Jt = Yt[da];
      Cr[Jt.toLowerCase()] = Cr[Jt];
    }
    var Lc = Cr, he = M;
    he.average = Ki, he.bezier = oc, he.blend = gc, he.cubehelix = wc, he.mix = he.interpolate = Ct, he.random = Nc, he.scale = ca, he.analyze = zt.analyze, he.contrast = Tc, he.deltaE = Pc, he.distance = Mc, he.limits = zt.limits, he.valid = Rc, he.scales = Bc, he.colors = ut, he.brewer = Lc;
    var zc = he;
    return zc;
  });
})(Cn);
var Su = Cn.exports;
const Iu = /* @__PURE__ */ Hc(Su), tn = ({ text: n, theme: u = "theme-blue", dataFormat: s, biteFontSize: v }) => {
  const y = {
    outerRing: {
      fill: an[u].primary
    },
    innerRing: {
      fill: Iu(an[u].primary).darken(0.5)
    },
    text: {
      fill: "#FFF"
    }
  };
  return /* @__PURE__ */ i.createElement("svg", { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg", className: "circle-callout callout" }, /* @__PURE__ */ i.createElement("circle", { cx: "50", cy: "50", r: "45", style: y.innerRing, strokeWidth: "10", stroke: y.outerRing.fill }), /* @__PURE__ */ i.createElement("text", { y: "50%", x: "50%", fontSize: v, style: y.text, textAnchor: "middle", dominantBaseline: "central" }, n));
};
function Ou() {
  const u = /* @__PURE__ */ new Date();
  return new Date(u.getTime() - u.getTime() % 9e5).toISOString();
}
const Pu = (n, u) => {
  switch (u.type) {
    case "SET_CONFIG":
      return { ...n, config: u.payload };
    case "SET_LOADING":
      return { ...n, loading: u.payload };
    case "SET_CURRENT_VIEWPORT":
      return { ...n, currentViewport: u.payload };
    case "SET_COVE_LOADED_HAS_RAN":
      return { ...n, coveLoadedHasRan: u.payload };
    case "SET_CONTAINER":
      return { ...n, container: u.payload };
  }
};
const Mu = (n) => {
  const { configUrl: u, config: s, isDashboard: v = !1, isEditor: y = !1, setConfig: _, link: A } = n, I = {
    config: s ?? $r,
    loading: !0,
    currentViewport: "lg",
    coveLoadedHasRan: !1,
    container: null
  }, [E, k] = S.useReducer(Pu, I), { config: D, loading: L, currentViewport: le, coveLoadedHasRan: Ae, container: ce } = E, {
    title: b,
    dataColumn: V,
    dataFunction: ye,
    imageData: ue,
    biteBody: _e,
    biteFontSize: se,
    dataFormat: Ne,
    biteStyle: O,
    filters: Te,
    subtext: M,
    general: { isCompactStyle: fe }
  } = D, { innerContainerClasses: xe, contentClasses: Ie } = Jc(D), ze = new Yc(), x = new Vc((z) => {
    for (let X of z) {
      let Ce = Wc(X.contentRect.width * 2);
      k({ type: "SET_CURRENT_VIEWPORT", payload: Ce });
    }
  }), T = (z) => {
    Object.keys($r).forEach((X) => {
      z[X] && typeof z[X] == "object" && !Array.isArray(z[X]) && (z[X] = { ...$r[X], ...z[X] });
    }), z.runtime = {}, z.runtime.uniqueId = Date.now(), z.runtime.editorErrorMessage = "", k({ type: "SET_CONFIG", payload: z });
  }, B = async () => {
    let z = s || await (await fetch(u)).json(), X = z.data ?? [];
    if (z.dataUrl) {
      z.dataUrl = `${z.dataUrl}?${Ou()}`;
      let oe = await Zc(z.dataUrl);
      oe && z.dataDescription && (oe = ze.autoStandardize(oe), oe = ze.developerStandardize(oe, z.dataDescription)), oe && (X = oe);
    }
    z.data = X;
    const Ce = { ...await Qc(z) };
    T({ ...$r, ...Ce }), k({ type: "SET_LOADING", payload: !1 });
  }, R = (z = !0) => {
    if (!V || !ye)
      return "";
    const X = ($) => {
      if ($ == null) {
        console.error('Enter correct value to "applyPrecision()" function ');
        return;
      }
      if (Number.isNaN($)) {
        console.error(' Argunment isNaN, "applyPrecision()" function ');
        return;
      }
      let F = $, re = Number(D.dataFormat.roundToPlace);
      if (re < 0) {
        console.error(' ROUND field is below "0", "applyPrecision()" function ');
        return;
      }
      return typeof re == "number" && re > -1 && (F = Number(F).toFixed(re)), String(F);
    }, Ce = ($) => (D.dataFormat.ignoreZeros && (ie = ie.filter((F) => F && F)), ie.length), oe = ($) => {
      if ($ == null) {
        console.error("Enter valid value for getColumnSum function ");
        return;
      }
      if ($.length === 0 || !Array.isArray($)) {
        console.error("Arguments are not valid getColumnSum function ");
        return;
      }
      let F = 0;
      return $.length > 1 ? F = $.map((re) => Number(re)).reduce((re, ke) => re + ke) : F = Number($[0]), X(F);
    }, pe = ($) => {
      if ($ == null || !Array.isArray($)) {
        console.error("Enter valid parameter getColumnMean function");
        return;
      }
      D.dataFormat.ignoreZeros && ($ = $.filter((re) => re !== 0));
      let F = 0;
      return $.length > 1 ? F = $.map((re) => Number(re)).reduce((re, ke) => re + ke) / $.length : F = Number($[0]), X(F);
    }, me = ($ = []) => {
      let F = {}, re = -1 / 0;
      for (let $e = 0; $e < $.length; $e++)
        F[$[$e]] ? F[$[$e]] += 1 : F[$[$e]] = 1, F[$[$e]] > re && (re = F[$[$e]]);
      let ke = [];
      for (let $e in F)
        F[$e] === re && ke.push($e);
      return ke;
    }, er = ($) => {
      if (!$.length)
        return;
      const F = Math.floor($.length / 2), re = [...$].sort(($e, zr) => $e - zr), ke = $.length % 2 !== 0 ? re[F] : (re[F - 1] + re[F]) / 2;
      return X(ke);
    }, rr = ($) => {
      if ($ == null)
        return;
      (Number.isNaN($) || typeof $ == "number") && ($ = String($));
      const F = "en-US";
      let re = parseFloat($).toLocaleString(F, {
        useGrouping: !0,
        maximumFractionDigits: 6
      });
      const ke = $.match(/\.\d*?(0*)$/);
      return ke && (re += /[1-9]/.test(ke[0]) ? ke[1] : ke[0]), re;
    };
    let J = "", Ue = D.data;
    Te.map(($) => $.columnName && $.columnValue ? Ue = Ue.filter(function(F) {
      return F[$.columnName] === $.columnValue;
    }) : !1);
    let ie = [];
    switch (Ue.length ? Ue.forEach(($) => {
      let F = Xc($[V]);
      typeof F == "number" && ie.push(F);
    }) : D.dataColumn && D.data && (ie = D.data.map(($) => Number($[D.dataColumn]))), ye) {
      case Dn:
        J = Ce();
        break;
      case Pn:
        J = oe(ie);
        break;
      case Tn:
        J = pe(ie);
        break;
      case Sn:
        J = er(ie);
        break;
      case $n:
        J = Math.max(...ie);
        break;
      case In:
        J = Math.min(...ie);
        break;
      case On:
        J = me(ie).join("");
        break;
      case wa:
        let $ = Math.min(...ie), F = Math.max(...ie);
        $ = X($), F = X(F), D.dataFormat.commas && ($ = rr($), F = rr(F)), J = D.dataFormat.prefix + $ + D.dataFormat.suffix + " - " + D.dataFormat.prefix + F + D.dataFormat.suffix;
        break;
      default:
        console.warn("Data bite function not recognized: " + ye);
    }
    return ye !== wa && (J = X(J), D.dataFormat.commas && (J = rr(J))), z ? Ne.prefix + J + Ne.suffix : J;
  }, ge = S.useCallback((z) => {
    z !== null && x.observe(z), k({ type: "SET_CONTAINER", payload: z });
  }, []);
  S.useEffect(() => {
    B(), Qt("cove_loaded", { loadConfigHasRun: !0 });
  }, []), S.useEffect(() => {
    D && !Ae && ce && (Qt("cove_loaded", { config: D }), k({ type: "SET_COVE_LOADED_HAS_RAN", payload: !0 }));
  }, [D, ce]), s && D && JSON.stringify(s.data) !== JSON.stringify(D.data) && B();
  let de = /* @__PURE__ */ i.createElement(qc, null);
  const ee = S.useCallback(() => {
    var oe;
    let z = {
      "<": (pe, me) => pe < me,
      ">": (pe, me) => pe > me,
      "<=": (pe, me) => pe <= me,
      ">=": (pe, me) => pe >= me,
      "≠": (pe, me) => pe !== me,
      "=": (pe, me) => pe === me
    }, X = ue.url, Ce = ue.alt;
    if (ue.display === "dynamic" && ue.options && ((oe = ue.options) == null ? void 0 : oe.length) > 0) {
      let pe = Number(R(!1)), me = !1;
      ue.options.forEach((er, rr) => {
        var $, F;
        let J = er.arguments, { source: Ue, alt: ie } = er;
        me === !1 && J.length > 0 && J[0].operator.length > 0 && J[0].threshold.length > 0 && z[J[0].operator](pe, J[0].threshold) && (J[1] !== void 0 ? (($ = J[1].operator) == null ? void 0 : $.length) > 0 && ((F = J[1].threshold) == null ? void 0 : F.length) > 0 && z[J[1].operator](pe, J[1].threshold) && (X = Ue, ie !== "" && ie !== void 0 && (Ce = ie), me = !0) : (X = Ue, ie !== "" && ie !== void 0 && (Ce = ie), me = !0));
      });
    }
    return X.length > 0 && O !== "graphic" && ue.display !== "none" ? /* @__PURE__ */ i.createElement("img", { alt: Ce, src: X, className: "bite-image callout" }) : null;
  }, [ue]);
  if (L === !1) {
    let z = [], X = !1, Ce = !1;
    switch (D.bitePosition) {
      case Mn:
        z.push("bite-left"), X = !0;
        break;
      case Fn:
        z.push("bite-right"), X = !0;
        break;
      case Rn:
        z.push("bite-top"), X = !0;
        break;
      case Bn:
        z.push("bite-bottom"), Ce = !0;
        break;
    }
    const oe = V !== void 0 && ye !== void 0;
    de = /* @__PURE__ */ i.createElement(i.Fragment, null, y && /* @__PURE__ */ i.createElement(Tu, null), /* @__PURE__ */ i.createElement("div", { className: y ? "spacing-wrapper" : "" }, /* @__PURE__ */ i.createElement("div", { className: xe.join(" ") }, b && /* @__PURE__ */ i.createElement("div", { className: `bite-header cove-component__header component__header ${D.theme}` }, pa(b)), /* @__PURE__ */ i.createElement("div", { className: `bite ${z.join(" ")}` }, /* @__PURE__ */ i.createElement("div", { className: `bite-content-container ${Ie.join(" ")}` }, oe && O === "graphic" && X && /* @__PURE__ */ i.createElement(tn, { theme: D.theme, text: R(), biteFontSize: se, dataFormat: Ne }), X && /* @__PURE__ */ i.createElement(ee, null), /* @__PURE__ */ i.createElement("div", { className: "bite-content" }, oe && O === "title" && /* @__PURE__ */ i.createElement("div", { className: "bite-value", style: { fontSize: se + "px" } }, R()), oe && O === "split" && /* @__PURE__ */ i.createElement("div", { className: "bite-value", style: { fontSize: se + "px" } }, R()), /* @__PURE__ */ i.createElement(S.Fragment, null, /* @__PURE__ */ i.createElement("div", { className: "bite-content__text-wrap" }, /* @__PURE__ */ i.createElement("p", { className: "bite-text" }, oe && O === "body" && /* @__PURE__ */ i.createElement("span", { className: "bite-value data-bite-body", style: { fontSize: se + "px" } }, R()), pa(_e)), oe && O === "end" && /* @__PURE__ */ i.createElement("span", { className: "bite-value data-bite-body", style: { fontSize: se + "px" } }, R()), M && !fe && /* @__PURE__ */ i.createElement("p", { className: "bite-subtext" }, pa(M))))), Ce && /* @__PURE__ */ i.createElement(ee, null), oe && O === "graphic" && !X && /* @__PURE__ */ i.createElement(tn, { theme: D.theme, text: R(), biteFontSize: se, dataFormat: Ne })))), A && A));
  }
  let Oe = ["cove", "cdc-open-viz-module", "type-data-bite", le, D.theme, "font-" + D.fontSize];
  return y && Oe.push("is-editor"), /* @__PURE__ */ i.createElement(bn.Provider, { value: { config: D, updateConfig: T, loading: L, data: D.data, setParentConfig: _, isDashboard: v } }, /* @__PURE__ */ i.createElement("div", { className: Oe.join(" "), ref: ge }, de));
}, $n = "Max", Dn = "Count", Tn = "Mean (Average)", Sn = "Median", In = "Min", On = "Mode", wa = "Range", Pn = "Sum", Fu = [Dn, $n, Tn, Sn, In, On, wa, Pn], Ru = {
  graphic: "Graphic",
  split: "Split Graphic and Message",
  title: "Value above Message",
  body: "Value before Message",
  end: "Value after Message"
}, Mn = "Left", Fn = "Right", Rn = "Top", Bn = "Bottom", Bu = [Mn, Fn, Rn, Bn], Lu = "<", zu = ">", Uu = "<=", ju = ">=", qu = "=", Gu = "≠", nn = [Lu, zu, Uu, ju, qu, Gu], es = {
  title: "Components/Templates/Data Bite",
  component: Mu
}, Sr = {
  args: {
    configUrl: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Data_Bite_Circle_Average.json"
  }
}, Ir = {
  args: {
    configUrl: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Data_Bite_Text_Max_Pic.json"
  }
}, Or = {
  args: {
    configUrl: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Data_Bite_Circle_Sum.json"
  }
}, Pr = {
  args: {
    configUrl: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Data_Bite_Text_Average_Pic.json"
  }
};
var ln, on, cn;
Sr.parameters = {
  ...Sr.parameters,
  docs: {
    ...(ln = Sr.parameters) == null ? void 0 : ln.docs,
    source: {
      originalSource: `{
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Data_Bite_Circle_Average.json'
  }
}`,
      ...(cn = (on = Sr.parameters) == null ? void 0 : on.docs) == null ? void 0 : cn.source
    }
  }
};
var un, sn, fn;
Ir.parameters = {
  ...Ir.parameters,
  docs: {
    ...(un = Ir.parameters) == null ? void 0 : un.docs,
    source: {
      originalSource: `{
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Data_Bite_Text_Max_Pic.json'
  }
}`,
      ...(fn = (sn = Ir.parameters) == null ? void 0 : sn.docs) == null ? void 0 : fn.source
    }
  }
};
var dn, vn, mn;
Or.parameters = {
  ...Or.parameters,
  docs: {
    ...(dn = Or.parameters) == null ? void 0 : dn.docs,
    source: {
      originalSource: `{
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Data_Bite_Circle_Sum.json'
  }
}`,
      ...(mn = (vn = Or.parameters) == null ? void 0 : vn.docs) == null ? void 0 : mn.source
    }
  }
};
var gn, pn, hn;
Pr.parameters = {
  ...Pr.parameters,
  docs: {
    ...(gn = Pr.parameters) == null ? void 0 : gn.docs,
    source: {
      originalSource: `{
  args: {
    configUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/examples/Data_Bite_Text_Average_Pic.json'
  }
}`,
      ...(hn = (pn = Pr.parameters) == null ? void 0 : pn.docs) == null ? void 0 : hn.source
    }
  }
};
const rs = ["Data_Bite_Circle_Average", "Data_Bite_Text_Max_Pic", "Data_Bite_Circle_Sum", "Data_Bite_Text_Average_Pic"];
export {
  Sr as Data_Bite_Circle_Average,
  Or as Data_Bite_Circle_Sum,
  Pr as Data_Bite_Text_Average_Pic,
  Ir as Data_Bite_Text_Max_Pic,
  rs as __namedExportsOrder,
  es as default
};
