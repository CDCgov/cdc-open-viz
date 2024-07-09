import { r as be, R as U } from "./storybook-index-BmAYD2Ot.es.js";
import { c as T, g as Ye } from "./storybook-_commonjsHelpers-CT_km90n.es.js";
var Z = {}, J = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Doctype = e.CDATA = e.Tag = e.Style = e.Script = e.Comment = e.Directive = e.Text = e.Root = e.isTag = e.ElementType = void 0;
  var t;
  (function(n) {
    n.Root = "root", n.Text = "text", n.Directive = "directive", n.Comment = "comment", n.Script = "script", n.Style = "style", n.Tag = "tag", n.CDATA = "cdata", n.Doctype = "doctype";
  })(t = e.ElementType || (e.ElementType = {}));
  function r(n) {
    return n.type === t.Tag || n.type === t.Script || n.type === t.Style;
  }
  e.isTag = r, e.Root = t.Root, e.Text = t.Text, e.Directive = t.Directive, e.Comment = t.Comment, e.Script = t.Script, e.Style = t.Style, e.Tag = t.Tag, e.CDATA = t.CDATA, e.Doctype = t.Doctype;
})(J);
var f = {}, C = T && T.__extends || /* @__PURE__ */ function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, a) {
      n.__proto__ = a;
    } || function(n, a) {
      for (var l in a)
        Object.prototype.hasOwnProperty.call(a, l) && (n[l] = a[l]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}(), _ = T && T.__assign || function() {
  return _ = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, _.apply(this, arguments);
};
Object.defineProperty(f, "__esModule", { value: !0 });
f.cloneNode = f.hasChildren = f.isDocument = f.isDirective = f.isComment = f.isText = f.isCDATA = f.isTag = f.Element = f.Document = f.CDATA = f.NodeWithChildren = f.ProcessingInstruction = f.Comment = f.Text = f.DataNode = f.Node = void 0;
var g = J, K = (
  /** @class */
  function() {
    function e() {
      this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null;
    }
    return Object.defineProperty(e.prototype, "parentNode", {
      // Read-write aliases for properties
      /**
       * Same as {@link parent}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.parent;
      },
      set: function(t) {
        this.parent = t;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "previousSibling", {
      /**
       * Same as {@link prev}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.prev;
      },
      set: function(t) {
        this.prev = t;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "nextSibling", {
      /**
       * Same as {@link next}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.next;
      },
      set: function(t) {
        this.next = t;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.cloneNode = function(t) {
      return t === void 0 && (t = !1), Q(this, t);
    }, e;
  }()
);
f.Node = K;
var D = (
  /** @class */
  function(e) {
    C(t, e);
    function t(r) {
      var n = e.call(this) || this;
      return n.data = r, n;
    }
    return Object.defineProperty(t.prototype, "nodeValue", {
      /**
       * Same as {@link data}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.data;
      },
      set: function(r) {
        this.data = r;
      },
      enumerable: !1,
      configurable: !0
    }), t;
  }(K)
);
f.DataNode = D;
var xe = (
  /** @class */
  function(e) {
    C(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.type = g.ElementType.Text, r;
    }
    return Object.defineProperty(t.prototype, "nodeType", {
      get: function() {
        return 3;
      },
      enumerable: !1,
      configurable: !0
    }), t;
  }(D)
);
f.Text = xe;
var Ce = (
  /** @class */
  function(e) {
    C(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.type = g.ElementType.Comment, r;
    }
    return Object.defineProperty(t.prototype, "nodeType", {
      get: function() {
        return 8;
      },
      enumerable: !1,
      configurable: !0
    }), t;
  }(D)
);
f.Comment = Ce;
var Se = (
  /** @class */
  function(e) {
    C(t, e);
    function t(r, n) {
      var a = e.call(this, n) || this;
      return a.name = r, a.type = g.ElementType.Directive, a;
    }
    return Object.defineProperty(t.prototype, "nodeType", {
      get: function() {
        return 1;
      },
      enumerable: !1,
      configurable: !0
    }), t;
  }(D)
);
f.ProcessingInstruction = Se;
var M = (
  /** @class */
  function(e) {
    C(t, e);
    function t(r) {
      var n = e.call(this) || this;
      return n.children = r, n;
    }
    return Object.defineProperty(t.prototype, "firstChild", {
      // Aliases
      /** First child of the node. */
      get: function() {
        var r;
        return (r = this.children[0]) !== null && r !== void 0 ? r : null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "lastChild", {
      /** Last child of the node. */
      get: function() {
        return this.children.length > 0 ? this.children[this.children.length - 1] : null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "childNodes", {
      /**
       * Same as {@link children}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.children;
      },
      set: function(r) {
        this.children = r;
      },
      enumerable: !1,
      configurable: !0
    }), t;
  }(K)
);
f.NodeWithChildren = M;
var Oe = (
  /** @class */
  function(e) {
    C(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.type = g.ElementType.CDATA, r;
    }
    return Object.defineProperty(t.prototype, "nodeType", {
      get: function() {
        return 4;
      },
      enumerable: !1,
      configurable: !0
    }), t;
  }(M)
);
f.CDATA = Oe;
var we = (
  /** @class */
  function(e) {
    C(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.type = g.ElementType.Root, r;
    }
    return Object.defineProperty(t.prototype, "nodeType", {
      get: function() {
        return 9;
      },
      enumerable: !1,
      configurable: !0
    }), t;
  }(M)
);
f.Document = we;
var ke = (
  /** @class */
  function(e) {
    C(t, e);
    function t(r, n, a, l) {
      a === void 0 && (a = []), l === void 0 && (l = r === "script" ? g.ElementType.Script : r === "style" ? g.ElementType.Style : g.ElementType.Tag);
      var c = e.call(this, a) || this;
      return c.name = r, c.attribs = n, c.type = l, c;
    }
    return Object.defineProperty(t.prototype, "nodeType", {
      get: function() {
        return 1;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "tagName", {
      // DOM Level 1 aliases
      /**
       * Same as {@link name}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.name;
      },
      set: function(r) {
        this.name = r;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "attributes", {
      get: function() {
        var r = this;
        return Object.keys(this.attribs).map(function(n) {
          var a, l;
          return {
            name: n,
            value: r.attribs[n],
            namespace: (a = r["x-attribsNamespace"]) === null || a === void 0 ? void 0 : a[n],
            prefix: (l = r["x-attribsPrefix"]) === null || l === void 0 ? void 0 : l[n]
          };
        });
      },
      enumerable: !1,
      configurable: !0
    }), t;
  }(M)
);
f.Element = ke;
function Ae(e) {
  return (0, g.isTag)(e);
}
f.isTag = Ae;
function _e(e) {
  return e.type === g.ElementType.CDATA;
}
f.isCDATA = _e;
function Pe(e) {
  return e.type === g.ElementType.Text;
}
f.isText = Pe;
function Ne(e) {
  return e.type === g.ElementType.Comment;
}
f.isComment = Ne;
function Re(e) {
  return e.type === g.ElementType.Directive;
}
f.isDirective = Re;
function Ie(e) {
  return e.type === g.ElementType.Root;
}
f.isDocument = Ie;
function Ze(e) {
  return Object.prototype.hasOwnProperty.call(e, "children");
}
f.hasChildren = Ze;
function Q(e, t) {
  t === void 0 && (t = !1);
  var r;
  if (Pe(e))
    r = new xe(e.data);
  else if (Ne(e))
    r = new Ce(e.data);
  else if (Ae(e)) {
    var n = t ? G(e.children) : [], a = new ke(e.name, _({}, e.attribs), n);
    n.forEach(function(i) {
      return i.parent = a;
    }), e.namespace != null && (a.namespace = e.namespace), e["x-attribsNamespace"] && (a["x-attribsNamespace"] = _({}, e["x-attribsNamespace"])), e["x-attribsPrefix"] && (a["x-attribsPrefix"] = _({}, e["x-attribsPrefix"])), r = a;
  } else if (_e(e)) {
    var n = t ? G(e.children) : [], l = new Oe(n);
    n.forEach(function(s) {
      return s.parent = l;
    }), r = l;
  } else if (Ie(e)) {
    var n = t ? G(e.children) : [], c = new we(n);
    n.forEach(function(s) {
      return s.parent = c;
    }), e["x-mode"] && (c["x-mode"] = e["x-mode"]), r = c;
  } else if (Re(e)) {
    var o = new Se(e.name, e.data);
    e["x-name"] != null && (o["x-name"] = e["x-name"], o["x-publicId"] = e["x-publicId"], o["x-systemId"] = e["x-systemId"]), r = o;
  } else
    throw new Error("Not implemented yet: ".concat(e.type));
  return r.startIndex = e.startIndex, r.endIndex = e.endIndex, e.sourceCodeLocation != null && (r.sourceCodeLocation = e.sourceCodeLocation), r;
}
f.cloneNode = Q;
function G(e) {
  for (var t = e.map(function(n) {
    return Q(n, !0);
  }), r = 1; r < t.length; r++)
    t[r].prev = t[r - 1], t[r - 1].next = t[r];
  return t;
}
(function(e) {
  var t = T && T.__createBinding || (Object.create ? function(o, i, s, p) {
    p === void 0 && (p = s);
    var h = Object.getOwnPropertyDescriptor(i, s);
    (!h || ("get" in h ? !i.__esModule : h.writable || h.configurable)) && (h = { enumerable: !0, get: function() {
      return i[s];
    } }), Object.defineProperty(o, p, h);
  } : function(o, i, s, p) {
    p === void 0 && (p = s), o[p] = i[s];
  }), r = T && T.__exportStar || function(o, i) {
    for (var s in o)
      s !== "default" && !Object.prototype.hasOwnProperty.call(i, s) && t(i, o, s);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.DomHandler = void 0;
  var n = J, a = f;
  r(f, e);
  var l = {
    withStartIndices: !1,
    withEndIndices: !1,
    xmlMode: !1
  }, c = (
    /** @class */
    function() {
      function o(i, s, p) {
        this.dom = [], this.root = new a.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof s == "function" && (p = s, s = l), typeof i == "object" && (s = i, i = void 0), this.callback = i ?? null, this.options = s ?? l, this.elementCB = p ?? null;
      }
      return o.prototype.onparserinit = function(i) {
        this.parser = i;
      }, o.prototype.onreset = function() {
        this.dom = [], this.root = new a.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null;
      }, o.prototype.onend = function() {
        this.done || (this.done = !0, this.parser = null, this.handleCallback(null));
      }, o.prototype.onerror = function(i) {
        this.handleCallback(i);
      }, o.prototype.onclosetag = function() {
        this.lastNode = null;
        var i = this.tagStack.pop();
        this.options.withEndIndices && (i.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(i);
      }, o.prototype.onopentag = function(i, s) {
        var p = this.options.xmlMode ? n.ElementType.Tag : void 0, h = new a.Element(i, s, void 0, p);
        this.addNode(h), this.tagStack.push(h);
      }, o.prototype.ontext = function(i) {
        var s = this.lastNode;
        if (s && s.type === n.ElementType.Text)
          s.data += i, this.options.withEndIndices && (s.endIndex = this.parser.endIndex);
        else {
          var p = new a.Text(i);
          this.addNode(p), this.lastNode = p;
        }
      }, o.prototype.oncomment = function(i) {
        if (this.lastNode && this.lastNode.type === n.ElementType.Comment) {
          this.lastNode.data += i;
          return;
        }
        var s = new a.Comment(i);
        this.addNode(s), this.lastNode = s;
      }, o.prototype.oncommentend = function() {
        this.lastNode = null;
      }, o.prototype.oncdatastart = function() {
        var i = new a.Text(""), s = new a.CDATA([i]);
        this.addNode(s), i.parent = s, this.lastNode = i;
      }, o.prototype.oncdataend = function() {
        this.lastNode = null;
      }, o.prototype.onprocessinginstruction = function(i, s) {
        var p = new a.ProcessingInstruction(i, s);
        this.addNode(p);
      }, o.prototype.handleCallback = function(i) {
        if (typeof this.callback == "function")
          this.callback(i, this.dom);
        else if (i)
          throw i;
      }, o.prototype.addNode = function(i) {
        var s = this.tagStack[this.tagStack.length - 1], p = s.children[s.children.length - 1];
        this.options.withStartIndices && (i.startIndex = this.parser.startIndex), this.options.withEndIndices && (i.endIndex = this.parser.endIndex), s.children.push(i), p && (i.prev = p, p.next = i), i.parent = s, this.lastNode = null;
      }, o;
    }()
  );
  e.DomHandler = c, e.default = c;
})(Z);
var oe = "html", le = "head", P = "body", Je = /<([a-zA-Z]+[0-9]?)/, se = /<head[^]*>/i, ce = /<body[^]*>/i, R = function() {
  throw new Error(
    "This browser does not support `document.implementation.createHTMLDocument`"
  );
}, q = function() {
  throw new Error(
    "This browser does not support `DOMParser.prototype.parseFromString`"
  );
}, ue = typeof window == "object" && window.DOMParser;
if (typeof ue == "function") {
  var Ke = new ue(), Qe = "text/html";
  q = function(e, t) {
    return t && (e = "<" + t + ">" + e + "</" + t + ">"), Ke.parseFromString(e, Qe);
  }, R = q;
}
if (typeof document == "object" && document.implementation) {
  var N = document.implementation.createHTMLDocument();
  R = function(e, t) {
    if (t) {
      var r = N.documentElement.querySelector(t);
      return r.innerHTML = e, N;
    }
    return N.documentElement.innerHTML = e, N;
  };
}
var $ = typeof document == "object" ? document.createElement("template") : {}, Y;
$.content && (Y = function(e) {
  return $.innerHTML = e, $.content.childNodes;
});
function et(e) {
  var t, r = e.match(Je);
  r && r[1] && (t = r[1].toLowerCase());
  var n, a, l;
  switch (t) {
    case oe:
      return n = q(e), se.test(e) || (a = n.querySelector(le), a && a.parentNode.removeChild(a)), ce.test(e) || (a = n.querySelector(P), a && a.parentNode.removeChild(a)), n.querySelectorAll(oe);
    case le:
    case P:
      return n = R(e), l = n.querySelectorAll(t), ce.test(e) && se.test(e) ? l[0].parentNode.childNodes : l;
    default:
      return Y ? Y(e) : (a = R(e, P).querySelector(P), a.childNodes);
  }
}
var tt = et, ee = {}, De = {};
De.CASE_SENSITIVE_TAG_NAMES = [
  "animateMotion",
  "animateTransform",
  "clipPath",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDropShadow",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence",
  "foreignObject",
  "linearGradient",
  "radialGradient",
  "textPath"
];
var L = Z, rt = De, fe = rt.CASE_SENSITIVE_TAG_NAMES, nt = L.Comment, it = L.Element, at = L.ProcessingInstruction, ot = L.Text, Me = {}, X;
for (var W = 0, lt = fe.length; W < lt; W++)
  X = fe[W], Me[X.toLowerCase()] = X;
function st(e) {
  return Me[e];
}
function Le(e) {
  for (var t = {}, r, n = 0, a = e.length; n < a; n++)
    r = e[n], t[r.name] = r.value;
  return t;
}
function ct(e) {
  e = e.toLowerCase();
  var t = st(e);
  return t || e;
}
function je(e, t, r) {
  t = t || null;
  for (var n = [], a, l = 0, c = e.length; l < c; l++) {
    var o = e[l], i;
    switch (o.nodeType) {
      case 1:
        a = ct(o.nodeName), i = new it(a, Le(o.attributes)), i.children = je(
          // template children are on content
          a === "template" ? o.content.childNodes : o.childNodes,
          i
        );
        break;
      case 3:
        i = new ot(o.nodeValue);
        break;
      case 8:
        i = new nt(o.nodeValue);
        break;
      default:
        continue;
    }
    var s = n[l - 1] || null;
    s && (s.next = i), i.parent = t, i.prev = s, i.next = null, n.push(i);
  }
  return r && (i = new at(
    r.substring(0, r.indexOf(" ")).toLowerCase(),
    r
  ), i.next = n[0] || null, i.parent = t, n.unshift(i), n[1] && (n[1].prev = n[0])), n;
}
ee.formatAttributes = Le;
ee.formatDOM = je;
var ut = tt, ft = ee, pt = ft.formatDOM, dt = /<(![a-zA-Z\s]+)>/;
function ht(e) {
  if (typeof e != "string")
    throw new TypeError("First argument must be a string");
  if (e === "")
    return [];
  var t = e.match(dt), r;
  return t && t[1] && (r = t[1]), pt(ut(e), null, r);
}
var mt = ht, y = {}, j = {}, vt = 0;
j.SAME = vt;
var gt = 1;
j.CAMELCASE = gt;
j.possibleStandardNames = {
  accept: 0,
  acceptCharset: 1,
  "accept-charset": "acceptCharset",
  accessKey: 1,
  action: 0,
  allowFullScreen: 1,
  alt: 0,
  as: 0,
  async: 0,
  autoCapitalize: 1,
  autoComplete: 1,
  autoCorrect: 1,
  autoFocus: 1,
  autoPlay: 1,
  autoSave: 1,
  capture: 0,
  cellPadding: 1,
  cellSpacing: 1,
  challenge: 0,
  charSet: 1,
  checked: 0,
  children: 0,
  cite: 0,
  class: "className",
  classID: 1,
  className: 1,
  cols: 0,
  colSpan: 1,
  content: 0,
  contentEditable: 1,
  contextMenu: 1,
  controls: 0,
  controlsList: 1,
  coords: 0,
  crossOrigin: 1,
  dangerouslySetInnerHTML: 1,
  data: 0,
  dateTime: 1,
  default: 0,
  defaultChecked: 1,
  defaultValue: 1,
  defer: 0,
  dir: 0,
  disabled: 0,
  disablePictureInPicture: 1,
  disableRemotePlayback: 1,
  download: 0,
  draggable: 0,
  encType: 1,
  enterKeyHint: 1,
  for: "htmlFor",
  form: 0,
  formMethod: 1,
  formAction: 1,
  formEncType: 1,
  formNoValidate: 1,
  formTarget: 1,
  frameBorder: 1,
  headers: 0,
  height: 0,
  hidden: 0,
  high: 0,
  href: 0,
  hrefLang: 1,
  htmlFor: 1,
  httpEquiv: 1,
  "http-equiv": "httpEquiv",
  icon: 0,
  id: 0,
  innerHTML: 1,
  inputMode: 1,
  integrity: 0,
  is: 0,
  itemID: 1,
  itemProp: 1,
  itemRef: 1,
  itemScope: 1,
  itemType: 1,
  keyParams: 1,
  keyType: 1,
  kind: 0,
  label: 0,
  lang: 0,
  list: 0,
  loop: 0,
  low: 0,
  manifest: 0,
  marginWidth: 1,
  marginHeight: 1,
  max: 0,
  maxLength: 1,
  media: 0,
  mediaGroup: 1,
  method: 0,
  min: 0,
  minLength: 1,
  multiple: 0,
  muted: 0,
  name: 0,
  noModule: 1,
  nonce: 0,
  noValidate: 1,
  open: 0,
  optimum: 0,
  pattern: 0,
  placeholder: 0,
  playsInline: 1,
  poster: 0,
  preload: 0,
  profile: 0,
  radioGroup: 1,
  readOnly: 1,
  referrerPolicy: 1,
  rel: 0,
  required: 0,
  reversed: 0,
  role: 0,
  rows: 0,
  rowSpan: 1,
  sandbox: 0,
  scope: 0,
  scoped: 0,
  scrolling: 0,
  seamless: 0,
  selected: 0,
  shape: 0,
  size: 0,
  sizes: 0,
  span: 0,
  spellCheck: 1,
  src: 0,
  srcDoc: 1,
  srcLang: 1,
  srcSet: 1,
  start: 0,
  step: 0,
  style: 0,
  summary: 0,
  tabIndex: 1,
  target: 0,
  title: 0,
  type: 0,
  useMap: 1,
  value: 0,
  width: 0,
  wmode: 0,
  wrap: 0,
  about: 0,
  accentHeight: 1,
  "accent-height": "accentHeight",
  accumulate: 0,
  additive: 0,
  alignmentBaseline: 1,
  "alignment-baseline": "alignmentBaseline",
  allowReorder: 1,
  alphabetic: 0,
  amplitude: 0,
  arabicForm: 1,
  "arabic-form": "arabicForm",
  ascent: 0,
  attributeName: 1,
  attributeType: 1,
  autoReverse: 1,
  azimuth: 0,
  baseFrequency: 1,
  baselineShift: 1,
  "baseline-shift": "baselineShift",
  baseProfile: 1,
  bbox: 0,
  begin: 0,
  bias: 0,
  by: 0,
  calcMode: 1,
  capHeight: 1,
  "cap-height": "capHeight",
  clip: 0,
  clipPath: 1,
  "clip-path": "clipPath",
  clipPathUnits: 1,
  clipRule: 1,
  "clip-rule": "clipRule",
  color: 0,
  colorInterpolation: 1,
  "color-interpolation": "colorInterpolation",
  colorInterpolationFilters: 1,
  "color-interpolation-filters": "colorInterpolationFilters",
  colorProfile: 1,
  "color-profile": "colorProfile",
  colorRendering: 1,
  "color-rendering": "colorRendering",
  contentScriptType: 1,
  contentStyleType: 1,
  cursor: 0,
  cx: 0,
  cy: 0,
  d: 0,
  datatype: 0,
  decelerate: 0,
  descent: 0,
  diffuseConstant: 1,
  direction: 0,
  display: 0,
  divisor: 0,
  dominantBaseline: 1,
  "dominant-baseline": "dominantBaseline",
  dur: 0,
  dx: 0,
  dy: 0,
  edgeMode: 1,
  elevation: 0,
  enableBackground: 1,
  "enable-background": "enableBackground",
  end: 0,
  exponent: 0,
  externalResourcesRequired: 1,
  fill: 0,
  fillOpacity: 1,
  "fill-opacity": "fillOpacity",
  fillRule: 1,
  "fill-rule": "fillRule",
  filter: 0,
  filterRes: 1,
  filterUnits: 1,
  floodOpacity: 1,
  "flood-opacity": "floodOpacity",
  floodColor: 1,
  "flood-color": "floodColor",
  focusable: 0,
  fontFamily: 1,
  "font-family": "fontFamily",
  fontSize: 1,
  "font-size": "fontSize",
  fontSizeAdjust: 1,
  "font-size-adjust": "fontSizeAdjust",
  fontStretch: 1,
  "font-stretch": "fontStretch",
  fontStyle: 1,
  "font-style": "fontStyle",
  fontVariant: 1,
  "font-variant": "fontVariant",
  fontWeight: 1,
  "font-weight": "fontWeight",
  format: 0,
  from: 0,
  fx: 0,
  fy: 0,
  g1: 0,
  g2: 0,
  glyphName: 1,
  "glyph-name": "glyphName",
  glyphOrientationHorizontal: 1,
  "glyph-orientation-horizontal": "glyphOrientationHorizontal",
  glyphOrientationVertical: 1,
  "glyph-orientation-vertical": "glyphOrientationVertical",
  glyphRef: 1,
  gradientTransform: 1,
  gradientUnits: 1,
  hanging: 0,
  horizAdvX: 1,
  "horiz-adv-x": "horizAdvX",
  horizOriginX: 1,
  "horiz-origin-x": "horizOriginX",
  ideographic: 0,
  imageRendering: 1,
  "image-rendering": "imageRendering",
  in2: 0,
  in: 0,
  inlist: 0,
  intercept: 0,
  k1: 0,
  k2: 0,
  k3: 0,
  k4: 0,
  k: 0,
  kernelMatrix: 1,
  kernelUnitLength: 1,
  kerning: 0,
  keyPoints: 1,
  keySplines: 1,
  keyTimes: 1,
  lengthAdjust: 1,
  letterSpacing: 1,
  "letter-spacing": "letterSpacing",
  lightingColor: 1,
  "lighting-color": "lightingColor",
  limitingConeAngle: 1,
  local: 0,
  markerEnd: 1,
  "marker-end": "markerEnd",
  markerHeight: 1,
  markerMid: 1,
  "marker-mid": "markerMid",
  markerStart: 1,
  "marker-start": "markerStart",
  markerUnits: 1,
  markerWidth: 1,
  mask: 0,
  maskContentUnits: 1,
  maskUnits: 1,
  mathematical: 0,
  mode: 0,
  numOctaves: 1,
  offset: 0,
  opacity: 0,
  operator: 0,
  order: 0,
  orient: 0,
  orientation: 0,
  origin: 0,
  overflow: 0,
  overlinePosition: 1,
  "overline-position": "overlinePosition",
  overlineThickness: 1,
  "overline-thickness": "overlineThickness",
  paintOrder: 1,
  "paint-order": "paintOrder",
  panose1: 0,
  "panose-1": "panose1",
  pathLength: 1,
  patternContentUnits: 1,
  patternTransform: 1,
  patternUnits: 1,
  pointerEvents: 1,
  "pointer-events": "pointerEvents",
  points: 0,
  pointsAtX: 1,
  pointsAtY: 1,
  pointsAtZ: 1,
  prefix: 0,
  preserveAlpha: 1,
  preserveAspectRatio: 1,
  primitiveUnits: 1,
  property: 0,
  r: 0,
  radius: 0,
  refX: 1,
  refY: 1,
  renderingIntent: 1,
  "rendering-intent": "renderingIntent",
  repeatCount: 1,
  repeatDur: 1,
  requiredExtensions: 1,
  requiredFeatures: 1,
  resource: 0,
  restart: 0,
  result: 0,
  results: 0,
  rotate: 0,
  rx: 0,
  ry: 0,
  scale: 0,
  security: 0,
  seed: 0,
  shapeRendering: 1,
  "shape-rendering": "shapeRendering",
  slope: 0,
  spacing: 0,
  specularConstant: 1,
  specularExponent: 1,
  speed: 0,
  spreadMethod: 1,
  startOffset: 1,
  stdDeviation: 1,
  stemh: 0,
  stemv: 0,
  stitchTiles: 1,
  stopColor: 1,
  "stop-color": "stopColor",
  stopOpacity: 1,
  "stop-opacity": "stopOpacity",
  strikethroughPosition: 1,
  "strikethrough-position": "strikethroughPosition",
  strikethroughThickness: 1,
  "strikethrough-thickness": "strikethroughThickness",
  string: 0,
  stroke: 0,
  strokeDasharray: 1,
  "stroke-dasharray": "strokeDasharray",
  strokeDashoffset: 1,
  "stroke-dashoffset": "strokeDashoffset",
  strokeLinecap: 1,
  "stroke-linecap": "strokeLinecap",
  strokeLinejoin: 1,
  "stroke-linejoin": "strokeLinejoin",
  strokeMiterlimit: 1,
  "stroke-miterlimit": "strokeMiterlimit",
  strokeWidth: 1,
  "stroke-width": "strokeWidth",
  strokeOpacity: 1,
  "stroke-opacity": "strokeOpacity",
  suppressContentEditableWarning: 1,
  suppressHydrationWarning: 1,
  surfaceScale: 1,
  systemLanguage: 1,
  tableValues: 1,
  targetX: 1,
  targetY: 1,
  textAnchor: 1,
  "text-anchor": "textAnchor",
  textDecoration: 1,
  "text-decoration": "textDecoration",
  textLength: 1,
  textRendering: 1,
  "text-rendering": "textRendering",
  to: 0,
  transform: 0,
  typeof: 0,
  u1: 0,
  u2: 0,
  underlinePosition: 1,
  "underline-position": "underlinePosition",
  underlineThickness: 1,
  "underline-thickness": "underlineThickness",
  unicode: 0,
  unicodeBidi: 1,
  "unicode-bidi": "unicodeBidi",
  unicodeRange: 1,
  "unicode-range": "unicodeRange",
  unitsPerEm: 1,
  "units-per-em": "unitsPerEm",
  unselectable: 0,
  vAlphabetic: 1,
  "v-alphabetic": "vAlphabetic",
  values: 0,
  vectorEffect: 1,
  "vector-effect": "vectorEffect",
  version: 0,
  vertAdvY: 1,
  "vert-adv-y": "vertAdvY",
  vertOriginX: 1,
  "vert-origin-x": "vertOriginX",
  vertOriginY: 1,
  "vert-origin-y": "vertOriginY",
  vHanging: 1,
  "v-hanging": "vHanging",
  vIdeographic: 1,
  "v-ideographic": "vIdeographic",
  viewBox: 1,
  viewTarget: 1,
  visibility: 0,
  vMathematical: 1,
  "v-mathematical": "vMathematical",
  vocab: 0,
  widths: 0,
  wordSpacing: 1,
  "word-spacing": "wordSpacing",
  writingMode: 1,
  "writing-mode": "writingMode",
  x1: 0,
  x2: 0,
  x: 0,
  xChannelSelector: 1,
  xHeight: 1,
  "x-height": "xHeight",
  xlinkActuate: 1,
  "xlink:actuate": "xlinkActuate",
  xlinkArcrole: 1,
  "xlink:arcrole": "xlinkArcrole",
  xlinkHref: 1,
  "xlink:href": "xlinkHref",
  xlinkRole: 1,
  "xlink:role": "xlinkRole",
  xlinkShow: 1,
  "xlink:show": "xlinkShow",
  xlinkTitle: 1,
  "xlink:title": "xlinkTitle",
  xlinkType: 1,
  "xlink:type": "xlinkType",
  xmlBase: 1,
  "xml:base": "xmlBase",
  xmlLang: 1,
  "xml:lang": "xmlLang",
  xmlns: 0,
  "xml:space": "xmlSpace",
  xmlnsXlink: 1,
  "xmlns:xlink": "xmlnsXlink",
  xmlSpace: 1,
  y1: 0,
  y2: 0,
  y: 0,
  yChannelSelector: 1,
  z: 0,
  zoomAndPan: 1
};
Object.defineProperty(y, "__esModule", { value: !0 });
function yt(e, t) {
  return Et(e) || Tt(e, t) || bt(e, t) || xt();
}
function Et(e) {
  if (Array.isArray(e))
    return e;
}
function Tt(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n = [], a = !0, l = !1, c, o;
    try {
      for (r = r.call(e); !(a = (c = r.next()).done) && (n.push(c.value), !(t && n.length === t)); a = !0)
        ;
    } catch (i) {
      l = !0, o = i;
    } finally {
      try {
        !a && r.return != null && r.return();
      } finally {
        if (l)
          throw o;
      }
    }
    return n;
  }
}
function bt(e, t) {
  if (e) {
    if (typeof e == "string")
      return pe(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return pe(e, t);
  }
}
function pe(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function xt() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Fe = 0, S = 1, F = 2, H = 3, te = 4, He = 5, ze = 6;
function Ct(e) {
  return m.hasOwnProperty(e) ? m[e] : null;
}
function v(e, t, r, n, a, l, c) {
  this.acceptsBooleans = t === F || t === H || t === te, this.attributeName = n, this.attributeNamespace = a, this.mustUseProperty = r, this.propertyName = e, this.type = t, this.sanitizeURL = l, this.removeEmptyString = c;
}
var m = {}, St = [
  "children",
  "dangerouslySetInnerHTML",
  // TODO: This prevents the assignment of defaultValue to regular
  // elements (not just inputs). Now that ReactDOMInput assigns to the
  // defaultValue property -- do we need this?
  "defaultValue",
  "defaultChecked",
  "innerHTML",
  "suppressContentEditableWarning",
  "suppressHydrationWarning",
  "style"
];
St.forEach(function(e) {
  m[e] = new v(
    e,
    Fe,
    !1,
    // mustUseProperty
    e,
    // attributeName
    null,
    // attributeNamespace
    !1,
    // sanitizeURL
    !1
  );
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = yt(e, 2), r = t[0], n = t[1];
  m[r] = new v(
    r,
    S,
    !1,
    // mustUseProperty
    n,
    // attributeName
    null,
    // attributeNamespace
    !1,
    // sanitizeURL
    !1
  );
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  m[e] = new v(
    e,
    F,
    !1,
    // mustUseProperty
    e.toLowerCase(),
    // attributeName
    null,
    // attributeNamespace
    !1,
    // sanitizeURL
    !1
  );
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  m[e] = new v(
    e,
    F,
    !1,
    // mustUseProperty
    e,
    // attributeName
    null,
    // attributeNamespace
    !1,
    // sanitizeURL
    !1
  );
});
[
  "allowFullScreen",
  "async",
  // Note: there is a special case that prevents it from being written to the DOM
  // on the client side because the browsers are inconsistent. Instead we call focus().
  "autoFocus",
  "autoPlay",
  "controls",
  "default",
  "defer",
  "disabled",
  "disablePictureInPicture",
  "disableRemotePlayback",
  "formNoValidate",
  "hidden",
  "loop",
  "noModule",
  "noValidate",
  "open",
  "playsInline",
  "readOnly",
  "required",
  "reversed",
  "scoped",
  "seamless",
  // Microdata
  "itemScope"
].forEach(function(e) {
  m[e] = new v(
    e,
    H,
    !1,
    // mustUseProperty
    e.toLowerCase(),
    // attributeName
    null,
    // attributeNamespace
    !1,
    // sanitizeURL
    !1
  );
});
[
  "checked",
  // Note: `option.selected` is not updated if `select.multiple` is
  // disabled with `removeAttribute`. We have special logic for handling this.
  "multiple",
  "muted",
  "selected"
  // NOTE: if you add a camelCased prop to this list,
  // you'll need to set attributeName to name.toLowerCase()
  // instead in the assignment below.
].forEach(function(e) {
  m[e] = new v(
    e,
    H,
    !0,
    // mustUseProperty
    e,
    // attributeName
    null,
    // attributeNamespace
    !1,
    // sanitizeURL
    !1
  );
});
[
  "capture",
  "download"
  // NOTE: if you add a camelCased prop to this list,
  // you'll need to set attributeName to name.toLowerCase()
  // instead in the assignment below.
].forEach(function(e) {
  m[e] = new v(
    e,
    te,
    !1,
    // mustUseProperty
    e,
    // attributeName
    null,
    // attributeNamespace
    !1,
    // sanitizeURL
    !1
  );
});
[
  "cols",
  "rows",
  "size",
  "span"
  // NOTE: if you add a camelCased prop to this list,
  // you'll need to set attributeName to name.toLowerCase()
  // instead in the assignment below.
].forEach(function(e) {
  m[e] = new v(
    e,
    ze,
    !1,
    // mustUseProperty
    e,
    // attributeName
    null,
    // attributeNamespace
    !1,
    // sanitizeURL
    !1
  );
});
["rowSpan", "start"].forEach(function(e) {
  m[e] = new v(
    e,
    He,
    !1,
    // mustUseProperty
    e.toLowerCase(),
    // attributeName
    null,
    // attributeNamespace
    !1,
    // sanitizeURL
    !1
  );
});
var re = /[\-\:]([a-z])/g, ne = function(t) {
  return t[1].toUpperCase();
};
[
  "accent-height",
  "alignment-baseline",
  "arabic-form",
  "baseline-shift",
  "cap-height",
  "clip-path",
  "clip-rule",
  "color-interpolation",
  "color-interpolation-filters",
  "color-profile",
  "color-rendering",
  "dominant-baseline",
  "enable-background",
  "fill-opacity",
  "fill-rule",
  "flood-color",
  "flood-opacity",
  "font-family",
  "font-size",
  "font-size-adjust",
  "font-stretch",
  "font-style",
  "font-variant",
  "font-weight",
  "glyph-name",
  "glyph-orientation-horizontal",
  "glyph-orientation-vertical",
  "horiz-adv-x",
  "horiz-origin-x",
  "image-rendering",
  "letter-spacing",
  "lighting-color",
  "marker-end",
  "marker-mid",
  "marker-start",
  "overline-position",
  "overline-thickness",
  "paint-order",
  "panose-1",
  "pointer-events",
  "rendering-intent",
  "shape-rendering",
  "stop-color",
  "stop-opacity",
  "strikethrough-position",
  "strikethrough-thickness",
  "stroke-dasharray",
  "stroke-dashoffset",
  "stroke-linecap",
  "stroke-linejoin",
  "stroke-miterlimit",
  "stroke-opacity",
  "stroke-width",
  "text-anchor",
  "text-decoration",
  "text-rendering",
  "underline-position",
  "underline-thickness",
  "unicode-bidi",
  "unicode-range",
  "units-per-em",
  "v-alphabetic",
  "v-hanging",
  "v-ideographic",
  "v-mathematical",
  "vector-effect",
  "vert-adv-y",
  "vert-origin-x",
  "vert-origin-y",
  "word-spacing",
  "writing-mode",
  "xmlns:xlink",
  "x-height"
  // NOTE: if you add a camelCased prop to this list,
  // you'll need to set attributeName to name.toLowerCase()
  // instead in the assignment below.
].forEach(function(e) {
  var t = e.replace(re, ne);
  m[t] = new v(
    t,
    S,
    !1,
    // mustUseProperty
    e,
    null,
    // attributeNamespace
    !1,
    // sanitizeURL
    !1
  );
});
[
  "xlink:actuate",
  "xlink:arcrole",
  "xlink:role",
  "xlink:show",
  "xlink:title",
  "xlink:type"
  // NOTE: if you add a camelCased prop to this list,
  // you'll need to set attributeName to name.toLowerCase()
  // instead in the assignment below.
].forEach(function(e) {
  var t = e.replace(re, ne);
  m[t] = new v(
    t,
    S,
    !1,
    // mustUseProperty
    e,
    "http://www.w3.org/1999/xlink",
    !1,
    // sanitizeURL
    !1
  );
});
[
  "xml:base",
  "xml:lang",
  "xml:space"
  // NOTE: if you add a camelCased prop to this list,
  // you'll need to set attributeName to name.toLowerCase()
  // instead in the assignment below.
].forEach(function(e) {
  var t = e.replace(re, ne);
  m[t] = new v(
    t,
    S,
    !1,
    // mustUseProperty
    e,
    "http://www.w3.org/XML/1998/namespace",
    !1,
    // sanitizeURL
    !1
  );
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  m[e] = new v(
    e,
    S,
    !1,
    // mustUseProperty
    e.toLowerCase(),
    // attributeName
    null,
    // attributeNamespace
    !1,
    // sanitizeURL
    !1
  );
});
var Ot = "xlinkHref";
m[Ot] = new v(
  "xlinkHref",
  S,
  !1,
  // mustUseProperty
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  // sanitizeURL
  !1
);
["src", "href", "action", "formAction"].forEach(function(e) {
  m[e] = new v(
    e,
    S,
    !1,
    // mustUseProperty
    e.toLowerCase(),
    // attributeName
    null,
    // attributeNamespace
    !0,
    // sanitizeURL
    !0
  );
});
var ie = j, wt = ie.CAMELCASE, kt = ie.SAME, de = ie.possibleStandardNames, At = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", _t = At + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Pt = RegExp.prototype.test.bind(
  // eslint-disable-next-line no-misleading-character-class
  new RegExp("^(data|aria)-[" + _t + "]*$")
), Nt = Object.keys(de).reduce(function(e, t) {
  var r = de[t];
  return r === kt ? e[t] = t : r === wt ? e[t.toLowerCase()] = t : e[t] = r, e;
}, {});
y.BOOLEAN = H;
y.BOOLEANISH_STRING = F;
y.NUMERIC = He;
y.OVERLOADED_BOOLEAN = te;
y.POSITIVE_NUMERIC = ze;
y.RESERVED = Fe;
y.STRING = S;
y.getPropertyInfo = Ct;
y.isCustomAttribute = Pt;
y.possibleStandardNames = Nt;
var Be = {}, ae = { exports: {} }, he = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, Rt = /\n/g, It = /^\s*/, Dt = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, Mt = /^:\s*/, Lt = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, jt = /^[;\s]*/, Ft = /^\s+|\s+$/g, Ht = `
`, me = "/", ve = "*", O = "", zt = "comment", Bt = "declaration", Vt = function(e, t) {
  if (typeof e != "string")
    throw new TypeError("First argument must be a string");
  if (!e)
    return [];
  t = t || {};
  var r = 1, n = 1;
  function a(d) {
    var u = d.match(Rt);
    u && (r += u.length);
    var E = d.lastIndexOf(Ht);
    n = ~E ? d.length - E : n + d.length;
  }
  function l() {
    var d = { line: r, column: n };
    return function(u) {
      return u.position = new c(d), s(), u;
    };
  }
  function c(d) {
    this.start = d, this.end = { line: r, column: n }, this.source = t.source;
  }
  c.prototype.content = e;
  function o(d) {
    var u = new Error(
      t.source + ":" + r + ":" + n + ": " + d
    );
    if (u.reason = d, u.filename = t.source, u.line = r, u.column = n, u.source = e, !t.silent)
      throw u;
  }
  function i(d) {
    var u = d.exec(e);
    if (u) {
      var E = u[0];
      return a(E), e = e.slice(E.length), u;
    }
  }
  function s() {
    i(It);
  }
  function p(d) {
    var u;
    for (d = d || []; u = h(); )
      u !== !1 && d.push(u);
    return d;
  }
  function h() {
    var d = l();
    if (!(me != e.charAt(0) || ve != e.charAt(1))) {
      for (var u = 2; O != e.charAt(u) && (ve != e.charAt(u) || me != e.charAt(u + 1)); )
        ++u;
      if (u += 2, O === e.charAt(u - 1))
        return o("End of comment missing");
      var E = e.slice(2, u - 2);
      return n += 2, a(E), e = e.slice(u), n += 2, d({
        type: zt,
        comment: E
      });
    }
  }
  function k() {
    var d = l(), u = i(Dt);
    if (u) {
      if (h(), !i(Mt))
        return o("property missing ':'");
      var E = i(Lt), qe = d({
        type: Bt,
        property: ge(u[0].replace(he, O)),
        value: E ? ge(E[0].replace(he, O)) : O
      });
      return i(jt), qe;
    }
  }
  function V() {
    var d = [];
    p(d);
    for (var u; u = k(); )
      u !== !1 && (d.push(u), p(d));
    return d;
  }
  return s(), V();
};
function ge(e) {
  return e ? e.replace(Ft, O) : O;
}
var Ut = Vt;
function Ve(e, t) {
  var r = null;
  if (!e || typeof e != "string")
    return r;
  for (var n, a = Ut(e), l = typeof t == "function", c, o, i = 0, s = a.length; i < s; i++)
    n = a[i], c = n.property, o = n.value, l ? t(c, o, n) : o && (r || (r = {}), r[c] = o);
  return r;
}
ae.exports = Ve;
ae.exports.default = Ve;
var Gt = ae.exports, z = {};
z.__esModule = !0;
z.camelCase = void 0;
var $t = /^--[a-zA-Z0-9-]+$/, Xt = /-([a-z])/g, Wt = /^[^-]+$/, qt = /^-(webkit|moz|ms|o|khtml)-/, Yt = /^-(ms)-/, Zt = function(e) {
  return !e || Wt.test(e) || $t.test(e);
}, Jt = function(e, t) {
  return t.toUpperCase();
}, ye = function(e, t) {
  return "".concat(t, "-");
}, Kt = function(e, t) {
  return t === void 0 && (t = {}), Zt(e) ? e : (e = e.toLowerCase(), t.reactCompat ? e = e.replace(Yt, ye) : e = e.replace(qt, ye), e.replace(Xt, Jt));
};
z.camelCase = Kt;
(function(e) {
  var t = T && T.__importDefault || function(l) {
    return l && l.__esModule ? l : { default: l };
  };
  e.__esModule = !0;
  var r = t(Gt), n = z;
  function a(l, c) {
    var o = {};
    return !l || typeof l != "string" || (0, r.default)(l, function(i, s) {
      i && s && (o[(0, n.camelCase)(i, c)] = s);
    }), o;
  }
  e.default = a;
})(Be);
var Qt = be, er = Be.default;
function tr(e, t) {
  if (!e || typeof e != "object")
    throw new TypeError("First argument must be an object");
  var r, n, a = typeof t == "function", l = {}, c = {};
  for (r in e) {
    if (n = e[r], a && (l = t(r, n), l && l.length === 2)) {
      c[l[0]] = l[1];
      continue;
    }
    typeof n == "string" && (c[n] = r);
  }
  return c;
}
function rr(e, t) {
  if (e.indexOf("-") === -1)
    return t && typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var nr = { reactCompat: !0 };
function ir(e, t) {
  if (e != null)
    try {
      t.style = er(e, nr);
    } catch {
      t.style = {};
    }
}
var ar = Qt.version.split(".")[0] >= 16, Ue = /* @__PURE__ */ new Set([
  "tr",
  "tbody",
  "thead",
  "tfoot",
  "colgroup",
  "table",
  "head",
  "html",
  "frameset"
]);
function or(e) {
  return !Ue.has(e.name);
}
var Ge = {
  PRESERVE_CUSTOM_ATTRIBUTES: ar,
  invertObject: tr,
  isCustomComponent: rr,
  setStyleProp: ir,
  canTextBeChildOfNode: or,
  elementsWithNoTextChildren: Ue
}, A = y, Ee = Ge, lr = ["checked", "value"], sr = ["input", "select", "textarea"], cr = {
  reset: !0,
  submit: !0
}, $e = function(t, r) {
  t = t || {};
  var n, a, l, c, o, i = {}, s = t.type && cr[t.type];
  for (n in t) {
    if (l = t[n], A.isCustomAttribute(n)) {
      i[n] = l;
      continue;
    }
    if (a = n.toLowerCase(), c = Te(a), c) {
      switch (o = A.getPropertyInfo(c), lr.indexOf(c) !== -1 && sr.indexOf(r) !== -1 && !s && (c = Te("default" + a)), i[c] = l, o && o.type) {
        case A.BOOLEAN:
          i[c] = !0;
          break;
        case A.OVERLOADED_BOOLEAN:
          l === "" && (i[c] = !0);
          break;
      }
      continue;
    }
    Ee.PRESERVE_CUSTOM_ATTRIBUTES && (i[n] = l);
  }
  return Ee.setStyleProp(t.style, i), i;
};
function Te(e) {
  return A.possibleStandardNames[e];
}
var ur = be, fr = $e, I = Ge, pr = I.setStyleProp, dr = I.canTextBeChildOfNode;
function Xe(e, t) {
  t = t || {};
  for (var r = t.library || ur, n = r.cloneElement, a = r.createElement, l = r.isValidElement, c = [], o, i, s = typeof t.replace == "function", p, h, k, V = t.trim, d = 0, u = e.length; d < u; d++) {
    if (o = e[d], s && (p = t.replace(o), l(p))) {
      u > 1 && (p = n(p, {
        key: p.key || d
      })), c.push(p);
      continue;
    }
    if (o.type === "text") {
      if (i = !o.data.trim().length, i && o.parent && !dr(o.parent) || V && i)
        continue;
      c.push(o.data);
      continue;
    }
    switch (h = o.attribs, hr(o) ? pr(h.style, h) : h && (h = fr(h, o.name)), k = null, o.type) {
      case "script":
      case "style":
        o.children[0] && (h.dangerouslySetInnerHTML = {
          __html: o.children[0].data
        });
        break;
      case "tag":
        o.name === "textarea" && o.children[0] ? h.defaultValue = o.children[0].data : o.children && o.children.length && (k = Xe(o.children, t));
        break;
      default:
        continue;
    }
    u > 1 && (h.key = d), c.push(a(o.name, h, k));
  }
  return c.length === 1 ? c[0] : c;
}
function hr(e) {
  return I.PRESERVE_CUSTOM_ATTRIBUTES && e.type === "tag" && I.isCustomComponent(e.name, e.attribs);
}
var mr = Xe, B = Z, w = mt, vr = $e, We = mr;
w = /* istanbul ignore next */
typeof w.default == "function" ? w.default : w;
var gr = { lowerCaseAttributeNames: !1 };
function b(e, t) {
  if (typeof e != "string")
    throw new TypeError("First argument must be a string");
  return e === "" ? [] : (t = t || {}, We(
    w(e, t.htmlparser2 || gr),
    t
  ));
}
b.domToReact = We;
b.htmlToDOM = w;
b.attributesToProps = vr;
b.Comment = B.Comment;
b.Element = B.Element;
b.ProcessingInstruction = B.ProcessingInstruction;
b.Text = B.Text;
var yr = b;
b.default = b;
const x = /* @__PURE__ */ Ye(yr);
x.domToReact;
x.htmlToDOM;
x.attributesToProps;
x.Comment;
x.Element;
x.ProcessingInstruction;
x.Text;
const br = (e) => {
  const { isDashboard: t, title: r, superTitle: n, classes: a = [], showTitle: l = !0, ariaLevel: c = 2 } = e, o = ["cove-component__header", "component__header", ...a];
  return r && l && /* @__PURE__ */ U.createElement("header", { className: o.join(" "), style: e.style }, n && /* @__PURE__ */ U.createElement("sup", null, x(n)), /* @__PURE__ */ U.createElement("h2", null, x(r), " ", t));
};
export {
  x as H,
  br as T
};
