import { r as A, R as m } from "./storybook-index-45401197.es.js";
import { f as Pa, i as ca, a as Mo, b as Sr, g as wr } from "./storybook-getViewport-7dc50c16.es.js";
import { M as Mr, d as br, a as Ia, G as Ar, O as Dr } from "./storybook-CdcDashboard-06631562.es.js";
import { a as ct, E as Et } from "./storybook-CdcChartComponent-aa83392e.es.js";
import { P as Zn } from "./storybook-index-43433e35.es.js";
import { G as rr, f as ur } from "./storybook-InputToggle-9ce9588e.es.js";
import { a as Rr, C as Nr } from "./storybook-CdcMarkupInclude-dc3760ee.es.js";
import { D as Tr } from "./storybook-DataTransform-12e90958.es.js";
import { c as ir } from "./storybook-_commonjsHelpers-c5d32002.es.js";
import { a as fa, c as La, d as Pr, e as Ir, f as Lr, g as kr, h as Er, i as Or, j as ka, k as Br, l as Fr } from "./storybook-Icon-d8cd8abc.es.js";
import { D as Hr } from "./storybook-DataDesigner-8f06e949.es.js";
import { T as De } from "./storybook-Tooltip-8bb9dfa2.es.js";
import { S as Wr, C as xr } from "./storybook-CdcMap-5b56c453.es.js";
import { C as Gr } from "./storybook-CdcChart-f7e1365c.es.js";
import { C as Vr } from "./storybook-CdcDataBite-37a15c95.es.js";
import { C as Kr } from "./storybook-CdcWaffleChart-31d12867.es.js";
import { E as lt } from "./storybook-viewports-5c5d7af1.es.js";
import { _ as ga } from "./storybook-lodash-a4231e1c.es.js";
import { w as qr, u as zr } from "./storybook-index-b7ec4af1.es.js";
import "./storybook-papaparse.min-b07ddc33.es.js";
import "./storybook-index-3b47b3f7.es.js";
import "./storybook-Accordion-aed5218d.es.js";
import "./storybook-editor-390d9f4b.es.js";
import "./storybook-useDebounce-78f40efd.es.js";
import "./storybook-index-4ed993c7.es.js";
import "./storybook-Button-63da743c.es.js";
import "./storybook-InputSelect-76dbb8cb.es.js";
import "./storybook-coveUpdateWorker-e42c85d9.es.js";
import "./storybook-updateFieldFactory-c006040a.es.js";
import "./storybook-Inputs-0111192f.es.js";
import "./storybook-Filters-f5cf5018.es.js";
import "./storybook-MultiSelect-fb96d51f.es.js";
import "./storybook-Loader-f4ec7b29.es.js";
import "./storybook-FilterStyles-fd509eb9.es.js";
import "./storybook-NestedDropdown-c8ea7d17.es.js";
import "./storybook-DataTable-fa1d7944.es.js";
import "./storybook-year-24bd1dc7.es.js";
import "./storybook-numberFromString-24623c03.es.js";
import "./storybook-Table-437adc6c.es.js";
import "./storybook-DashboardFilters-7461a191.es.js";
import "./storybook-Footnotes-864326bc.es.js";
import "./storybook-jsx-runtime-36872362.es.js";
import "./storybook-debounce-cc216a80.es.js";
import "./storybook-memoize-b2d53f3a.es.js";
import "./storybook-isSymbol-227578c5.es.js";
import "./storybook-extends-70f3d2a3.es.js";
import "./storybook-linear-bc5fb9aa.es.js";
import "./storybook-linear-ef79b404.es.js";
import "./storybook-index-633d712d.es.js";
import "./storybook-Text-c19e6344.es.js";
import "./storybook-BlurStrokeText-adc27352.es.js";
import "./storybook-Card-6750b07b.es.js";
import "./storybook-supported-geos-c96b4fa3.es.js";
import "./storybook-index-398c73a4.es.js";
var Ea = {}, ya = {}, Ca = 34, It = 10, da = 13;
function lr(o) {
  return new Function("d", "return {" + o.map(function(d, s) {
    return JSON.stringify(d) + ": d[" + s + '] || ""';
  }).join(",") + "}");
}
function _r(o, d) {
  var s = lr(o);
  return function(C, b) {
    return d(s(C), b, o);
  };
}
function Oa(o) {
  var d = /* @__PURE__ */ Object.create(null), s = [];
  return o.forEach(function(C) {
    for (var b in C)
      b in d || s.push(d[b] = b);
  }), s;
}
function we(o, d) {
  var s = o + "", C = s.length;
  return C < d ? new Array(d - C + 1).join(0) + s : s;
}
function Xr(o) {
  return o < 0 ? "-" + we(-o, 6) : o > 9999 ? "+" + we(o, 6) : we(o, 4);
}
function Yr(o) {
  var d = o.getUTCHours(), s = o.getUTCMinutes(), C = o.getUTCSeconds(), b = o.getUTCMilliseconds();
  return isNaN(o) ? "Invalid Date" : Xr(o.getUTCFullYear()) + "-" + we(o.getUTCMonth() + 1, 2) + "-" + we(o.getUTCDate(), 2) + (b ? "T" + we(d, 2) + ":" + we(s, 2) + ":" + we(C, 2) + "." + we(b, 3) + "Z" : C ? "T" + we(d, 2) + ":" + we(s, 2) + ":" + we(C, 2) + "Z" : s || d ? "T" + we(d, 2) + ":" + we(s, 2) + "Z" : "");
}
function jr(o) {
  var d = new RegExp('["' + o + `
\r]`), s = o.charCodeAt(0);
  function C(M, un) {
    var Nn, Cn, fn = b(M, function(qn, hn) {
      if (Nn)
        return Nn(qn, hn - 1);
      Cn = qn, Nn = un ? _r(qn, un) : lr(qn);
    });
    return fn.columns = Cn || [], fn;
  }
  function b(M, un) {
    var Nn = [], Cn = M.length, fn = 0, qn = 0, hn, Hn = Cn <= 0, An = !1;
    M.charCodeAt(Cn - 1) === It && --Cn, M.charCodeAt(Cn - 1) === da && --Cn;
    function Un() {
      if (Hn)
        return ya;
      if (An)
        return An = !1, Ea;
      var Dn, oe = fn, Kn;
      if (M.charCodeAt(oe) === Ca) {
        for (; fn++ < Cn && M.charCodeAt(fn) !== Ca || M.charCodeAt(++fn) === Ca; )
          ;
        return (Dn = fn) >= Cn ? Hn = !0 : (Kn = M.charCodeAt(fn++)) === It ? An = !0 : Kn === da && (An = !0, M.charCodeAt(fn) === It && ++fn), M.slice(oe + 1, Dn - 1).replace(/""/g, '"');
      }
      for (; fn < Cn; ) {
        if ((Kn = M.charCodeAt(Dn = fn++)) === It)
          An = !0;
        else if (Kn === da)
          An = !0, M.charCodeAt(fn) === It && ++fn;
        else if (Kn !== s)
          continue;
        return M.slice(oe, Dn);
      }
      return Hn = !0, M.slice(oe, Cn);
    }
    for (; (hn = Un()) !== ya; ) {
      for (var Wn = []; hn !== Ea && hn !== ya; )
        Wn.push(hn), hn = Un();
      un && (Wn = un(Wn, qn++)) == null || Nn.push(Wn);
    }
    return Nn;
  }
  function P(M, un) {
    return M.map(function(Nn) {
      return un.map(function(Cn) {
        return pn(Nn[Cn]);
      }).join(o);
    });
  }
  function y(M, un) {
    return un == null && (un = Oa(M)), [un.map(pn).join(o)].concat(P(M, un)).join(`
`);
  }
  function B(M, un) {
    return un == null && (un = Oa(M)), P(M, un).join(`
`);
  }
  function nn(M) {
    return M.map(h).join(`
`);
  }
  function h(M) {
    return M.map(pn).join(o);
  }
  function pn(M) {
    return M == null ? "" : M instanceof Date ? Yr(M) : d.test(M += "") ? '"' + M.replace(/"/g, '""') + '"' : M;
  }
  return {
    parse: C,
    parseRows: b,
    format: y,
    formatBody: B,
    formatRows: nn,
    formatRow: h,
    formatValue: pn
  };
}
var Ur = jr(","), Jr = Ur.parse;
function yt(o, d, s, C) {
  function b(P) {
    return P instanceof s ? P : new s(function(y) {
      y(P);
    });
  }
  return new (s || (s = Promise))(function(P, y) {
    function B(pn) {
      try {
        h(C.next(pn));
      } catch (M) {
        y(M);
      }
    }
    function nn(pn) {
      try {
        h(C.throw(pn));
      } catch (M) {
        y(M);
      }
    }
    function h(pn) {
      pn.done ? P(pn.value) : b(pn.value).then(B, nn);
    }
    h((C = C.apply(o, d || [])).next());
  });
}
function Ct(o, d) {
  var s = { label: 0, sent: function() {
    if (P[0] & 1)
      throw P[1];
    return P[1];
  }, trys: [], ops: [] }, C, b, P, y;
  return y = { next: B(0), throw: B(1), return: B(2) }, typeof Symbol == "function" && (y[Symbol.iterator] = function() {
    return this;
  }), y;
  function B(h) {
    return function(pn) {
      return nn([h, pn]);
    };
  }
  function nn(h) {
    if (C)
      throw new TypeError("Generator is already executing.");
    for (; y && (y = 0, h[0] && (s = 0)), s; )
      try {
        if (C = 1, b && (P = h[0] & 2 ? b.return : h[0] ? b.throw || ((P = b.return) && P.call(b), 0) : b.next) && !(P = P.call(b, h[1])).done)
          return P;
        switch (b = 0, P && (h = [h[0] & 2, P.value]), h[0]) {
          case 0:
          case 1:
            P = h;
            break;
          case 4:
            return s.label++, { value: h[1], done: !1 };
          case 5:
            s.label++, b = h[1], h = [0];
            continue;
          case 7:
            h = s.ops.pop(), s.trys.pop();
            continue;
          default:
            if (P = s.trys, !(P = P.length > 0 && P[P.length - 1]) && (h[0] === 6 || h[0] === 2)) {
              s = 0;
              continue;
            }
            if (h[0] === 3 && (!P || h[1] > P[0] && h[1] < P[3])) {
              s.label = h[1];
              break;
            }
            if (h[0] === 6 && s.label < P[1]) {
              s.label = P[1], P = h;
              break;
            }
            if (P && s.label < P[2]) {
              s.label = P[2], s.ops.push(h);
              break;
            }
            P[2] && s.ops.pop(), s.trys.pop();
            continue;
        }
        h = d.call(o, s);
      } catch (pn) {
        h = [6, pn], b = 0;
      } finally {
        C = P = 0;
      }
    if (h[0] & 5)
      throw h[1];
    return { value: h[0] ? h[1] : void 0, done: !0 };
  }
}
function $r(o, d) {
  var s = typeof Symbol == "function" && o[Symbol.iterator];
  if (!s)
    return o;
  var C = s.call(o), b, P = [], y;
  try {
    for (; (d === void 0 || d-- > 0) && !(b = C.next()).done; )
      P.push(b.value);
  } catch (B) {
    y = { error: B };
  } finally {
    try {
      b && !b.done && (s = C.return) && s.call(C);
    } finally {
      if (y)
        throw y.error;
    }
  }
  return P;
}
function Zr() {
  for (var o = [], d = 0; d < arguments.length; d++)
    o = o.concat($r(arguments[d]));
  return o;
}
var Qr = /* @__PURE__ */ new Map([
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
  ["aac", "audio/aac"],
  ["abw", "application/x-abiword"],
  ["arc", "application/x-freearc"],
  ["avif", "image/avif"],
  ["avi", "video/x-msvideo"],
  ["azw", "application/vnd.amazon.ebook"],
  ["bin", "application/octet-stream"],
  ["bmp", "image/bmp"],
  ["bz", "application/x-bzip"],
  ["bz2", "application/x-bzip2"],
  ["cda", "application/x-cdf"],
  ["csh", "application/x-csh"],
  ["css", "text/css"],
  ["csv", "text/csv"],
  ["doc", "application/msword"],
  ["docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
  ["eot", "application/vnd.ms-fontobject"],
  ["epub", "application/epub+zip"],
  ["gz", "application/gzip"],
  ["gif", "image/gif"],
  ["htm", "text/html"],
  ["html", "text/html"],
  ["ico", "image/vnd.microsoft.icon"],
  ["ics", "text/calendar"],
  ["jar", "application/java-archive"],
  ["jpeg", "image/jpeg"],
  ["jpg", "image/jpeg"],
  ["js", "text/javascript"],
  ["json", "application/json"],
  ["jsonld", "application/ld+json"],
  ["mid", "audio/midi"],
  ["midi", "audio/midi"],
  ["mjs", "text/javascript"],
  ["mp3", "audio/mpeg"],
  ["mp4", "video/mp4"],
  ["mpeg", "video/mpeg"],
  ["mpkg", "application/vnd.apple.installer+xml"],
  ["odp", "application/vnd.oasis.opendocument.presentation"],
  ["ods", "application/vnd.oasis.opendocument.spreadsheet"],
  ["odt", "application/vnd.oasis.opendocument.text"],
  ["oga", "audio/ogg"],
  ["ogv", "video/ogg"],
  ["ogx", "application/ogg"],
  ["opus", "audio/opus"],
  ["otf", "font/otf"],
  ["png", "image/png"],
  ["pdf", "application/pdf"],
  ["php", "application/x-httpd-php"],
  ["ppt", "application/vnd.ms-powerpoint"],
  ["pptx", "application/vnd.openxmlformats-officedocument.presentationml.presentation"],
  ["rar", "application/vnd.rar"],
  ["rtf", "application/rtf"],
  ["sh", "application/x-sh"],
  ["svg", "image/svg+xml"],
  ["swf", "application/x-shockwave-flash"],
  ["tar", "application/x-tar"],
  ["tif", "image/tiff"],
  ["tiff", "image/tiff"],
  ["ts", "video/mp2t"],
  ["ttf", "font/ttf"],
  ["txt", "text/plain"],
  ["vsd", "application/vnd.visio"],
  ["wav", "audio/wav"],
  ["weba", "audio/webm"],
  ["webm", "video/webm"],
  ["webp", "image/webp"],
  ["woff", "font/woff"],
  ["woff2", "font/woff2"],
  ["xhtml", "application/xhtml+xml"],
  ["xls", "application/vnd.ms-excel"],
  ["xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],
  ["xml", "application/xml"],
  ["xul", "application/vnd.mozilla.xul+xml"],
  ["zip", "application/zip"],
  ["7z", "application/x-7z-compressed"],
  // Others
  ["mkv", "video/x-matroska"],
  ["mov", "video/quicktime"],
  ["msg", "application/vnd.ms-outlook"]
]);
function Ot(o, d) {
  var s = nu(o);
  if (typeof s.path != "string") {
    var C = o.webkitRelativePath;
    Object.defineProperty(s, "path", {
      value: typeof d == "string" ? d : typeof C == "string" && C.length > 0 ? C : o.name,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return s;
}
function nu(o) {
  var d = o.name, s = d && d.lastIndexOf(".") !== -1;
  if (s && !o.type) {
    var C = d.split(".").pop().toLowerCase(), b = Qr.get(C);
    b && Object.defineProperty(o, "type", {
      value: b,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return o;
}
var eu = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  "Thumbs.db"
  // Windows
];
function tu(o) {
  return yt(this, void 0, void 0, function() {
    return Ct(this, function(d) {
      return To(o) && ou(o) ? [2, iu(o.dataTransfer, o.type)] : au(o) ? [2, ru(o)] : Array.isArray(o) && o.every(function(s) {
        return "getFile" in s && typeof s.getFile == "function";
      }) ? [2, uu(o)] : [2, []];
    });
  });
}
function ou(o) {
  return To(o.dataTransfer);
}
function au(o) {
  return To(o) && To(o.target);
}
function To(o) {
  return typeof o == "object" && o !== null;
}
function ru(o) {
  return ma(o.target.files).map(function(d) {
    return Ot(d);
  });
}
function uu(o) {
  return yt(this, void 0, void 0, function() {
    var d;
    return Ct(this, function(s) {
      switch (s.label) {
        case 0:
          return [4, Promise.all(o.map(function(C) {
            return C.getFile();
          }))];
        case 1:
          return d = s.sent(), [2, d.map(function(C) {
            return Ot(C);
          })];
      }
    });
  });
}
function iu(o, d) {
  return yt(this, void 0, void 0, function() {
    var s, C;
    return Ct(this, function(b) {
      switch (b.label) {
        case 0:
          return o === null ? [2, []] : o.items ? (s = ma(o.items).filter(function(P) {
            return P.kind === "file";
          }), d !== "drop" ? [2, s] : [4, Promise.all(s.map(lu))]) : [3, 2];
        case 1:
          return C = b.sent(), [2, Ba(sr(C))];
        case 2:
          return [2, Ba(ma(o.files).map(function(P) {
            return Ot(P);
          }))];
      }
    });
  });
}
function Ba(o) {
  return o.filter(function(d) {
    return eu.indexOf(d.name) === -1;
  });
}
function ma(o) {
  if (o === null)
    return [];
  for (var d = [], s = 0; s < o.length; s++) {
    var C = o[s];
    d.push(C);
  }
  return d;
}
function lu(o) {
  if (typeof o.webkitGetAsEntry != "function")
    return Fa(o);
  var d = o.webkitGetAsEntry();
  return d && d.isDirectory ? cr(d) : Fa(o);
}
function sr(o) {
  return o.reduce(function(d, s) {
    return Zr(d, Array.isArray(s) ? sr(s) : [s]);
  }, []);
}
function Fa(o) {
  var d = o.getAsFile();
  if (!d)
    return Promise.reject(o + " is not a File");
  var s = Ot(d);
  return Promise.resolve(s);
}
function su(o) {
  return yt(this, void 0, void 0, function() {
    return Ct(this, function(d) {
      return [2, o.isDirectory ? cr(o) : cu(o)];
    });
  });
}
function cr(o) {
  var d = o.createReader();
  return new Promise(function(s, C) {
    var b = [];
    function P() {
      var y = this;
      d.readEntries(function(B) {
        return yt(y, void 0, void 0, function() {
          var nn, h, pn;
          return Ct(this, function(M) {
            switch (M.label) {
              case 0:
                if (B.length)
                  return [3, 5];
                M.label = 1;
              case 1:
                return M.trys.push([1, 3, , 4]), [4, Promise.all(b)];
              case 2:
                return nn = M.sent(), s(nn), [3, 4];
              case 3:
                return h = M.sent(), C(h), [3, 4];
              case 4:
                return [3, 6];
              case 5:
                pn = Promise.all(B.map(su)), b.push(pn), P(), M.label = 6;
              case 6:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, function(B) {
        C(B);
      });
    }
    P();
  });
}
function cu(o) {
  return yt(this, void 0, void 0, function() {
    return Ct(this, function(d) {
      return [2, new Promise(function(s, C) {
        o.file(function(b) {
          var P = Ot(b, o.fullPath);
          s(P);
        }, function(b) {
          C(b);
        });
      })];
    });
  });
}
var yu = function(o, d) {
  if (o && d) {
    var s = Array.isArray(d) ? d : d.split(","), C = o.name || "", b = (o.type || "").toLowerCase(), P = b.replace(/\/.*$/, "");
    return s.some(function(y) {
      var B = y.trim().toLowerCase();
      return B.charAt(0) === "." ? C.toLowerCase().endsWith(B) : B.endsWith("/*") ? P === B.replace(/\/.*$/, "") : b === B;
    });
  }
  return !0;
};
function Ha(o, d) {
  var s = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var C = Object.getOwnPropertySymbols(o);
    d && (C = C.filter(function(b) {
      return Object.getOwnPropertyDescriptor(o, b).enumerable;
    })), s.push.apply(s, C);
  }
  return s;
}
function Wa(o) {
  for (var d = 1; d < arguments.length; d++) {
    var s = arguments[d] != null ? arguments[d] : {};
    d % 2 ? Ha(Object(s), !0).forEach(function(C) {
      yr(o, C, s[C]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(s)) : Ha(Object(s)).forEach(function(C) {
      Object.defineProperty(o, C, Object.getOwnPropertyDescriptor(s, C));
    });
  }
  return o;
}
function yr(o, d, s) {
  return d in o ? Object.defineProperty(o, d, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : o[d] = s, o;
}
function xa(o, d) {
  return fu(o) || pu(o, d) || du(o, d) || Cu();
}
function Cu() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function du(o, d) {
  if (o) {
    if (typeof o == "string")
      return Ga(o, d);
    var s = Object.prototype.toString.call(o).slice(8, -1);
    if (s === "Object" && o.constructor && (s = o.constructor.name), s === "Map" || s === "Set")
      return Array.from(o);
    if (s === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))
      return Ga(o, d);
  }
}
function Ga(o, d) {
  (d == null || d > o.length) && (d = o.length);
  for (var s = 0, C = new Array(d); s < d; s++)
    C[s] = o[s];
  return C;
}
function pu(o, d) {
  var s = o == null ? null : typeof Symbol < "u" && o[Symbol.iterator] || o["@@iterator"];
  if (s != null) {
    var C = [], b = !0, P = !1, y, B;
    try {
      for (s = s.call(o); !(b = (y = s.next()).done) && (C.push(y.value), !(d && C.length === d)); b = !0)
        ;
    } catch (nn) {
      P = !0, B = nn;
    } finally {
      try {
        !b && s.return != null && s.return();
      } finally {
        if (P)
          throw B;
      }
    }
    return C;
  }
}
function fu(o) {
  if (Array.isArray(o))
    return o;
}
var gu = "file-invalid-type", mu = "file-too-large", vu = "file-too-small", hu = "too-many-files", Su = function(d) {
  d = Array.isArray(d) && d.length === 1 ? d[0] : d;
  var s = Array.isArray(d) ? "one of ".concat(d.join(", ")) : d;
  return {
    code: gu,
    message: "File type must be ".concat(s)
  };
}, Va = function(d) {
  return {
    code: mu,
    message: "File is larger than ".concat(d, " ").concat(d === 1 ? "byte" : "bytes")
  };
}, Ka = function(d) {
  return {
    code: vu,
    message: "File is smaller than ".concat(d, " ").concat(d === 1 ? "byte" : "bytes")
  };
}, wu = {
  code: hu,
  message: "Too many files"
};
function Cr(o, d) {
  var s = o.type === "application/x-moz-file" || yu(o, d);
  return [s, s ? null : Su(d)];
}
function dr(o, d, s) {
  if (Lt(o.size))
    if (Lt(d) && Lt(s)) {
      if (o.size > s)
        return [!1, Va(s)];
      if (o.size < d)
        return [!1, Ka(d)];
    } else {
      if (Lt(d) && o.size < d)
        return [!1, Ka(d)];
      if (Lt(s) && o.size > s)
        return [!1, Va(s)];
    }
  return [!0, null];
}
function Lt(o) {
  return o != null;
}
function Mu(o) {
  var d = o.files, s = o.accept, C = o.minSize, b = o.maxSize, P = o.multiple, y = o.maxFiles;
  return !P && d.length > 1 || P && y >= 1 && d.length > y ? !1 : d.every(function(B) {
    var nn = Cr(B, s), h = xa(nn, 1), pn = h[0], M = dr(B, C, b), un = xa(M, 1), Nn = un[0];
    return pn && Nn;
  });
}
function Po(o) {
  return typeof o.isPropagationStopped == "function" ? o.isPropagationStopped() : typeof o.cancelBubble < "u" ? o.cancelBubble : !1;
}
function bo(o) {
  return o.dataTransfer ? Array.prototype.some.call(o.dataTransfer.types, function(d) {
    return d === "Files" || d === "application/x-moz-file";
  }) : !!o.target && !!o.target.files;
}
function qa(o) {
  o.preventDefault();
}
function bu(o) {
  return o.indexOf("MSIE") !== -1 || o.indexOf("Trident/") !== -1;
}
function Au(o) {
  return o.indexOf("Edge/") !== -1;
}
function Du() {
  var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.navigator.userAgent;
  return bu(o) || Au(o);
}
function Ee() {
  for (var o = arguments.length, d = new Array(o), s = 0; s < o; s++)
    d[s] = arguments[s];
  return function(C) {
    for (var b = arguments.length, P = new Array(b > 1 ? b - 1 : 0), y = 1; y < b; y++)
      P[y - 1] = arguments[y];
    return d.some(function(B) {
      return !Po(C) && B && B.apply(void 0, [C].concat(P)), Po(C);
    });
  };
}
function za() {
  return "showOpenFilePicker" in window;
}
function Ru(o) {
  return o = typeof o == "string" ? o.split(",") : o, [{
    description: "everything",
    // TODO: Need to handle filtering more elegantly than this!
    accept: Array.isArray(o) ? o.filter(function(d) {
      return d === "audio/*" || d === "video/*" || d === "image/*" || d === "text/*" || /\w+\/[-+.\w]+/g.test(d);
    }).reduce(function(d, s) {
      return Wa(Wa({}, d), {}, yr({}, s, []));
    }, {}) : {}
  }];
}
var Nu = ["children"], Tu = ["open"], Pu = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"], Iu = ["refKey", "onChange", "onClick"];
function Lu(o) {
  return Ou(o) || Eu(o) || pr(o) || ku();
}
function ku() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Eu(o) {
  if (typeof Symbol < "u" && o[Symbol.iterator] != null || o["@@iterator"] != null)
    return Array.from(o);
}
function Ou(o) {
  if (Array.isArray(o))
    return va(o);
}
function pa(o, d) {
  return Hu(o) || Fu(o, d) || pr(o, d) || Bu();
}
function Bu() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function pr(o, d) {
  if (o) {
    if (typeof o == "string")
      return va(o, d);
    var s = Object.prototype.toString.call(o).slice(8, -1);
    if (s === "Object" && o.constructor && (s = o.constructor.name), s === "Map" || s === "Set")
      return Array.from(o);
    if (s === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))
      return va(o, d);
  }
}
function va(o, d) {
  (d == null || d > o.length) && (d = o.length);
  for (var s = 0, C = new Array(d); s < d; s++)
    C[s] = o[s];
  return C;
}
function Fu(o, d) {
  var s = o == null ? null : typeof Symbol < "u" && o[Symbol.iterator] || o["@@iterator"];
  if (s != null) {
    var C = [], b = !0, P = !1, y, B;
    try {
      for (s = s.call(o); !(b = (y = s.next()).done) && (C.push(y.value), !(d && C.length === d)); b = !0)
        ;
    } catch (nn) {
      P = !0, B = nn;
    } finally {
      try {
        !b && s.return != null && s.return();
      } finally {
        if (P)
          throw B;
      }
    }
    return C;
  }
}
function Hu(o) {
  if (Array.isArray(o))
    return o;
}
function _a(o, d) {
  var s = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var C = Object.getOwnPropertySymbols(o);
    d && (C = C.filter(function(b) {
      return Object.getOwnPropertyDescriptor(o, b).enumerable;
    })), s.push.apply(s, C);
  }
  return s;
}
function ne(o) {
  for (var d = 1; d < arguments.length; d++) {
    var s = arguments[d] != null ? arguments[d] : {};
    d % 2 ? _a(Object(s), !0).forEach(function(C) {
      ha(o, C, s[C]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(s)) : _a(Object(s)).forEach(function(C) {
      Object.defineProperty(o, C, Object.getOwnPropertyDescriptor(s, C));
    });
  }
  return o;
}
function ha(o, d, s) {
  return d in o ? Object.defineProperty(o, d, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : o[d] = s, o;
}
function Io(o, d) {
  if (o == null)
    return {};
  var s = Wu(o, d), C, b;
  if (Object.getOwnPropertySymbols) {
    var P = Object.getOwnPropertySymbols(o);
    for (b = 0; b < P.length; b++)
      C = P[b], !(d.indexOf(C) >= 0) && Object.prototype.propertyIsEnumerable.call(o, C) && (s[C] = o[C]);
  }
  return s;
}
function Wu(o, d) {
  if (o == null)
    return {};
  var s = {}, C = Object.keys(o), b, P;
  for (P = 0; P < C.length; P++)
    b = C[P], !(d.indexOf(b) >= 0) && (s[b] = o[b]);
  return s;
}
var Aa = /* @__PURE__ */ A.forwardRef(function(o, d) {
  var s = o.children, C = Io(o, Nu), b = wa(C), P = b.open, y = Io(b, Tu);
  return A.useImperativeHandle(d, function() {
    return {
      open: P
    };
  }, [P]), /* @__PURE__ */ m.createElement(A.Fragment, null, s(ne(ne({}, y), {}, {
    open: P
  })));
});
Aa.displayName = "Dropzone";
var fr = {
  disabled: !1,
  getFilesFromEvent: tu,
  maxSize: 1 / 0,
  minSize: 0,
  multiple: !0,
  maxFiles: 0,
  preventDropOnDocument: !0,
  noClick: !1,
  noKeyboard: !1,
  noDrag: !1,
  noDragEventsBubbling: !1,
  validator: null,
  useFsAccessApi: !1
};
Aa.defaultProps = fr;
Aa.propTypes = {
  /**
   * Render function that exposes the dropzone state and prop getter fns
   *
   * @param {object} params
   * @param {Function} params.getRootProps Returns the props you should apply to the root drop container you render
   * @param {Function} params.getInputProps Returns the props you should apply to hidden file input you render
   * @param {Function} params.open Open the native file selection dialog
   * @param {boolean} params.isFocused Dropzone area is in focus
   * @param {boolean} params.isFileDialogActive File dialog is opened
   * @param {boolean} params.isDragActive Active drag is in progress
   * @param {boolean} params.isDragAccept Dragged files are accepted
   * @param {boolean} params.isDragReject Some dragged files are rejected
   * @param {File[]} params.draggedFiles Files in active drag
   * @param {File[]} params.acceptedFiles Accepted files
   * @param {FileRejection[]} params.fileRejections Rejected files and why they were rejected
   */
  children: Zn.func,
  /**
   * Set accepted file types.
   * See https://github.com/okonet/attr-accept for more information.
   * Keep in mind that mime type determination is not reliable across platforms. CSV files,
   * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
   * Windows. In some cases there might not be a mime type set at all.
   * See: https://github.com/react-dropzone/react-dropzone/issues/276
   */
  accept: Zn.oneOfType([Zn.string, Zn.arrayOf(Zn.string)]),
  /**
   * Allow drag 'n' drop (or selection from the file dialog) of multiple files
   */
  multiple: Zn.bool,
  /**
   * If false, allow dropped items to take over the current browser window
   */
  preventDropOnDocument: Zn.bool,
  /**
   * If true, disables click to open the native file selection dialog
   */
  noClick: Zn.bool,
  /**
   * If true, disables SPACE/ENTER to open the native file selection dialog.
   * Note that it also stops tracking the focus state.
   */
  noKeyboard: Zn.bool,
  /**
   * If true, disables drag 'n' drop
   */
  noDrag: Zn.bool,
  /**
   * If true, stops drag event propagation to parents
   */
  noDragEventsBubbling: Zn.bool,
  /**
   * Minimum file size (in bytes)
   */
  minSize: Zn.number,
  /**
   * Maximum file size (in bytes)
   */
  maxSize: Zn.number,
  /**
   * Maximum accepted number of files
   * The default value is 0 which means there is no limitation to how many files are accepted.
   */
  maxFiles: Zn.number,
  /**
   * Enable/disable the dropzone
   */
  disabled: Zn.bool,
  /**
   * Use this to provide a custom file aggregator
   *
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   */
  getFilesFromEvent: Zn.func,
  /**
   * Cb for when closing the file dialog with no selection
   */
  onFileDialogCancel: Zn.func,
  /**
   * Cb for when opening the file dialog
   */
  onFileDialogOpen: Zn.func,
  /**
   * Set to true to use the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API
   * to open the file picker instead of using an `<input type="file">` click event.
   */
  useFsAccessApi: Zn.bool,
  /**
   * Cb for when the `dragenter` event occurs.
   *
   * @param {DragEvent} event
   */
  onDragEnter: Zn.func,
  /**
   * Cb for when the `dragleave` event occurs
   *
   * @param {DragEvent} event
   */
  onDragLeave: Zn.func,
  /**
   * Cb for when the `dragover` event occurs
   *
   * @param {DragEvent} event
   */
  onDragOver: Zn.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that this callback is invoked after the `getFilesFromEvent` callback is done.
   *
   * Files are accepted or rejected based on the `accept`, `multiple`, `minSize` and `maxSize` props.
   * `accept` must be a valid [MIME type](http://www.iana.org/assignments/media-types/media-types.xhtml) according to [input element specification](https://www.w3.org/wiki/HTML/Elements/input/file) or a valid file extension.
   * If `multiple` is set to false and additional files are dropped,
   * all files besides the first will be rejected.
   * Any file which does not have a size in the [`minSize`, `maxSize`] range, will be rejected as well.
   *
   * Note that the `onDrop` callback will always be invoked regardless if the dropped files were accepted or rejected.
   * If you'd like to react to a specific scenario, use the `onDropAccepted`/`onDropRejected` props.
   *
   * `onDrop` will provide you with an array of [File](https://developer.mozilla.org/en-US/docs/Web/API/File) objects which you can then process and send to a server.
   * For example, with [SuperAgent](https://github.com/visionmedia/superagent) as a http/ajax library:
   *
   * ```js
   * function onDrop(acceptedFiles) {
   *   const req = request.post('/upload')
   *   acceptedFiles.forEach(file => {
   *     req.attach(file.name, file)
   *   })
   *   req.end(callback)
   * }
   * ```
   *
   * @param {File[]} acceptedFiles
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   */
  onDrop: Zn.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are accepted, this callback is not invoked.
   *
   * @param {File[]} files
   * @param {(DragEvent|Event)} event
   */
  onDropAccepted: Zn.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are rejected, this callback is not invoked.
   *
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event
   */
  onDropRejected: Zn.func,
  /**
   * Custom validation function
   * @param {File} file
   * @returns {FileError|FileError[]}
   */
  validator: Zn.func
};
var Sa = {
  isFocused: !1,
  isFileDialogActive: !1,
  isDragActive: !1,
  isDragAccept: !1,
  isDragReject: !1,
  draggedFiles: [],
  acceptedFiles: [],
  fileRejections: []
};
function wa() {
  var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, d = ne(ne({}, fr), o), s = d.accept, C = d.disabled, b = d.getFilesFromEvent, P = d.maxSize, y = d.minSize, B = d.multiple, nn = d.maxFiles, h = d.onDragEnter, pn = d.onDragLeave, M = d.onDragOver, un = d.onDrop, Nn = d.onDropAccepted, Cn = d.onDropRejected, fn = d.onFileDialogCancel, qn = d.onFileDialogOpen, hn = d.useFsAccessApi, Hn = d.preventDropOnDocument, An = d.noClick, Un = d.noKeyboard, Wn = d.noDrag, Dn = d.noDragEventsBubbling, oe = d.validator, Kn = A.useMemo(function() {
    return typeof qn == "function" ? qn : Xa;
  }, [qn]), Ce = A.useMemo(function() {
    return typeof fn == "function" ? fn : Xa;
  }, [fn]), Qn = A.useRef(null), tn = A.useRef(null), dn = A.useReducer(xu, Sa), zn = pa(dn, 2), Xn = zn[0], Jn = zn[1], Pe = Xn.isFocused, Re = Xn.isFileDialogActive, Me = Xn.draggedFiles, Ie = function() {
    Re && setTimeout(function() {
      if (tn.current) {
        var In = tn.current.files;
        In.length || (Jn({
          type: "closeDialog"
        }), Ce());
      }
    }, 300);
  };
  A.useEffect(function() {
    return hn && za() ? function() {
    } : (window.addEventListener("focus", Ie, !1), function() {
      window.removeEventListener("focus", Ie, !1);
    });
  }, [tn, Re, Ce, hn]);
  var de = A.useRef([]), ge = function(In) {
    Qn.current && Qn.current.contains(In.target) || (In.preventDefault(), de.current = []);
  };
  A.useEffect(function() {
    return Hn && (document.addEventListener("dragover", qa, !1), document.addEventListener("drop", ge, !1)), function() {
      Hn && (document.removeEventListener("dragover", qa), document.removeEventListener("drop", ge));
    };
  }, [Qn, Hn]);
  var ae = A.useCallback(function(Q) {
    Q.preventDefault(), Q.persist(), Le(Q), de.current = [].concat(Lu(de.current), [Q.target]), bo(Q) && Promise.resolve(b(Q)).then(function(In) {
      Po(Q) && !Dn || (Jn({
        draggedFiles: In,
        isDragActive: !0,
        type: "setDraggedFiles"
      }), h && h(Q));
    });
  }, [b, h, Dn]), Oe = A.useCallback(function(Q) {
    Q.preventDefault(), Q.persist(), Le(Q);
    var In = bo(Q);
    if (In && Q.dataTransfer)
      try {
        Q.dataTransfer.dropEffect = "copy";
      } catch {
      }
    return In && M && M(Q), !1;
  }, [M, Dn]), Be = A.useCallback(function(Q) {
    Q.preventDefault(), Q.persist(), Le(Q);
    var In = de.current.filter(function(ue) {
      return Qn.current && Qn.current.contains(ue);
    }), ee = In.indexOf(Q.target);
    ee !== -1 && In.splice(ee, 1), de.current = In, !(In.length > 0) && (Jn({
      isDragActive: !1,
      type: "setDraggedFiles",
      draggedFiles: []
    }), bo(Q) && pn && pn(Q));
  }, [Qn, pn, Dn]), F = A.useCallback(function(Q, In) {
    var ee = [], ue = [];
    Q.forEach(function(fe) {
      var Fe = Cr(fe, s), Te = pa(Fe, 2), Ye = Te[0], je = Te[1], Ue = dr(fe, y, P), We = pa(Ue, 2), Je = We[0], xe = We[1], Ge = oe ? oe(fe) : null;
      if (Ye && Je && !Ge)
        ee.push(fe);
      else {
        var He = [je, xe];
        Ge && (He = He.concat(Ge)), ue.push({
          file: fe,
          errors: He.filter(function(at) {
            return at;
          })
        });
      }
    }), (!B && ee.length > 1 || B && nn >= 1 && ee.length > nn) && (ee.forEach(function(fe) {
      ue.push({
        file: fe,
        errors: [wu]
      });
    }), ee.splice(0)), Jn({
      acceptedFiles: ee,
      fileRejections: ue,
      type: "setFiles"
    }), un && un(ee, ue, In), ue.length > 0 && Cn && Cn(ue, In), ee.length > 0 && Nn && Nn(ee, In);
  }, [Jn, B, s, y, P, nn, un, Nn, Cn, oe]), z = A.useCallback(function(Q) {
    Q.preventDefault(), Q.persist(), Le(Q), de.current = [], bo(Q) && Promise.resolve(b(Q)).then(function(In) {
      Po(Q) && !Dn || F(In, Q);
    }), Jn({
      type: "reset"
    });
  }, [b, F, Dn]), rn = A.useCallback(function() {
    if (hn && za()) {
      Jn({
        type: "openDialog"
      }), Kn();
      var Q = {
        multiple: B,
        types: Ru(s)
      };
      window.showOpenFilePicker(Q).then(function(In) {
        return b(In);
      }).then(function(In) {
        return F(In, null);
      }).catch(function(In) {
        return Ce(In);
      }).finally(function() {
        return Jn({
          type: "closeDialog"
        });
      });
      return;
    }
    tn.current && (Jn({
      type: "openDialog"
    }), Kn(), tn.current.value = null, tn.current.click());
  }, [Jn, Kn, Ce, hn, F, s, B]), on = A.useCallback(function(Q) {
    !Qn.current || !Qn.current.isEqualNode(Q.target) || (Q.keyCode === 32 || Q.keyCode === 13) && (Q.preventDefault(), rn());
  }, [Qn, tn, rn]), Fn = A.useCallback(function() {
    Jn({
      type: "focus"
    });
  }, []), Yn = A.useCallback(function() {
    Jn({
      type: "blur"
    });
  }, []), Se = A.useCallback(function() {
    An || (Du() ? setTimeout(rn, 0) : rn());
  }, [tn, An, rn]), Ne = function(In) {
    return C ? null : In;
  }, be = function(In) {
    return Un ? null : Ne(In);
  }, Ae = function(In) {
    return Wn ? null : Ne(In);
  }, Le = function(In) {
    Dn && In.stopPropagation();
  }, _e = A.useMemo(function() {
    return function() {
      var Q = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, In = Q.refKey, ee = In === void 0 ? "ref" : In, ue = Q.role, fe = Q.onKeyDown, Fe = Q.onFocus, Te = Q.onBlur, Ye = Q.onClick, je = Q.onDragEnter, Ue = Q.onDragOver, We = Q.onDragLeave, Je = Q.onDrop, xe = Io(Q, Pu);
      return ne(ne(ha({
        onKeyDown: be(Ee(fe, on)),
        onFocus: be(Ee(Fe, Fn)),
        onBlur: be(Ee(Te, Yn)),
        onClick: Ne(Ee(Ye, Se)),
        onDragEnter: Ae(Ee(je, ae)),
        onDragOver: Ae(Ee(Ue, Oe)),
        onDragLeave: Ae(Ee(We, Be)),
        onDrop: Ae(Ee(Je, z)),
        role: typeof ue == "string" && ue !== "" ? ue : "button"
      }, ee, Qn), !C && !Un ? {
        tabIndex: 0
      } : {}), xe);
    };
  }, [Qn, on, Fn, Yn, Se, ae, Oe, Be, z, Un, Wn, C]), pe = A.useCallback(function(Q) {
    Q.stopPropagation();
  }, []), ce = A.useMemo(function() {
    return function() {
      var Q = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, In = Q.refKey, ee = In === void 0 ? "ref" : In, ue = Q.onChange, fe = Q.onClick, Fe = Io(Q, Iu), Te = ha({
        accept: s,
        multiple: B,
        type: "file",
        style: {
          display: "none"
        },
        onChange: Ne(Ee(ue, z)),
        onClick: Ne(Ee(fe, pe)),
        autoComplete: "off",
        tabIndex: -1
      }, ee, tn);
      return ne(ne({}, Te), Fe);
    };
  }, [tn, s, B, z, C]), me = Me.length, ve = me > 0 && Mu({
    files: Me,
    accept: s,
    minSize: y,
    maxSize: P,
    multiple: B,
    maxFiles: nn
  }), Xe = me > 0 && !ve;
  return ne(ne({}, Xn), {}, {
    isDragAccept: ve,
    isDragReject: Xe,
    isFocused: Pe && !C,
    getRootProps: _e,
    getInputProps: ce,
    rootRef: Qn,
    inputRef: tn,
    open: Ne(rn)
  });
}
function xu(o, d) {
  switch (d.type) {
    case "focus":
      return ne(ne({}, o), {}, {
        isFocused: !0
      });
    case "blur":
      return ne(ne({}, o), {}, {
        isFocused: !1
      });
    case "openDialog":
      return ne(ne({}, Sa), {}, {
        isFileDialogActive: !0
      });
    case "closeDialog":
      return ne(ne({}, o), {}, {
        isFileDialogActive: !1
      });
    case "setDraggedFiles":
      var s = d.isDragActive, C = d.draggedFiles;
      return ne(ne({}, o), {}, {
        draggedFiles: C,
        isDragActive: s
      });
    case "setFiles":
      return ne(ne({}, o), {}, {
        acceptedFiles: d.acceptedFiles,
        fileRejections: d.fileRejections
      });
    case "reset":
      return ne({}, Sa);
    default:
      return o;
  }
}
function Xa() {
}
const kt = ({ children: o, className: d = "" }) => /* @__PURE__ */ m.createElement("div", { className: `tab-content ${d}` }, o), Gu = (o) => {
  const { globalActive: d } = A.useContext(ct), s = A.useContext(Et), C = (b) => {
    s({ type: "EDITOR_SET_GLOBALACTIVE", payload: b });
  };
  return /* @__PURE__ */ React.createElement(gr, { ...o, setActiveTab: C, activeTab: d });
}, Vu = ({ children: o, className: d = void 0, startingTab: s }) => {
  const [C, b] = A.useState(s);
  return /* @__PURE__ */ React.createElement(gr, { className: d, setActiveTab: b, activeTab: C }, o);
}, gr = ({ children: o, className: d, activeTab: s, setActiveTab: C }) => {
  const b = (B, nn) => {
    B || C(nn);
  };
  let P = "tabs";
  d && (P = `tabs ${d}`);
  const y = o.map(({ props: B }, nn) => {
    let h = "nav-item", pn = B.disableRule || !1;
    return pn && (h += " disabled"), nn === s && (h += " active"), /* @__PURE__ */ React.createElement("li", { onClick: () => b(pn, nn), key: B.title, className: h }, B.icon, B.title);
  });
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("nav", { className: P }, /* @__PURE__ */ React.createElement("ul", { className: "nav nav-fill" }, y)), o[s]);
};
var Ma = { exports: {} }, Ao = { exports: {} }, Ya;
function Ku() {
  return Ya || (Ya = 1, function(o, d) {
    (function(s, C) {
      C(d, A);
    })(ir, function(s, C) {
      function b(n, r, i, l, v, f, S) {
        try {
          var R = n[f](S), T = R.value;
        } catch (I) {
          return void i(I);
        }
        R.done ? r(T) : Promise.resolve(T).then(l, v);
      }
      function P(n) {
        return function() {
          var r = this, i = arguments;
          return new Promise(function(l, v) {
            var f = n.apply(r, i);
            function S(T) {
              b(f, l, v, S, R, "next", T);
            }
            function R(T) {
              b(f, l, v, S, R, "throw", T);
            }
            S(void 0);
          });
        };
      }
      function y() {
        return (y = Object.assign || function(n) {
          for (var r = 1; r < arguments.length; r++) {
            var i = arguments[r];
            for (var l in i)
              Object.prototype.hasOwnProperty.call(i, l) && (n[l] = i[l]);
          }
          return n;
        }).apply(this, arguments);
      }
      function B(n, r) {
        if (n == null)
          return {};
        var i, l, v = {}, f = Object.keys(n);
        for (l = 0; l < f.length; l++)
          i = f[l], r.indexOf(i) >= 0 || (v[i] = n[i]);
        return v;
      }
      function nn(n) {
        var r = function(i, l) {
          if (typeof i != "object" || i === null)
            return i;
          var v = i[Symbol.toPrimitive];
          if (v !== void 0) {
            var f = v.call(i, l || "default");
            if (typeof f != "object")
              return f;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (l === "string" ? String : Number)(i);
        }(n, "string");
        return typeof r == "symbol" ? r : String(r);
      }
      C = C && Object.prototype.hasOwnProperty.call(C, "default") ? C.default : C;
      var h = { init: "init" }, pn = function(n) {
        var r = n.value;
        return r === void 0 ? "" : r;
      }, M = function() {
        return C.createElement(C.Fragment, null, " ");
      }, un = { Cell: pn, width: 150, minWidth: 0, maxWidth: Number.MAX_SAFE_INTEGER };
      function Nn() {
        for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
          r[i] = arguments[i];
        return r.reduce(function(l, v) {
          var f = v.style, S = v.className;
          return l = y({}, l, {}, B(v, ["style", "className"])), f && (l.style = l.style ? y({}, l.style || {}, {}, f || {}) : f), S && (l.className = l.className ? l.className + " " + S : S), l.className === "" && delete l.className, l;
        }, {});
      }
      var Cn = function(n, r) {
        return r === void 0 && (r = {}), function(i) {
          return i === void 0 && (i = {}), [].concat(n, [i]).reduce(function(l, v) {
            return function f(S, R, T) {
              return typeof R == "function" ? f({}, R(S, T)) : Array.isArray(R) ? Nn.apply(void 0, [S].concat(R)) : Nn(S, R);
            }(l, v, y({}, r, { userProps: i }));
          }, {});
        };
      }, fn = function(n, r, i, l) {
        return i === void 0 && (i = {}), n.reduce(function(v, f) {
          return f(v, i);
        }, r);
      }, qn = function(n, r, i) {
        return i === void 0 && (i = {}), n.forEach(function(l) {
          l(r, i);
        });
      };
      function hn(n, r, i, l) {
        n.findIndex(function(v) {
          return v.pluginName === i;
        }), r.forEach(function(v) {
          n.findIndex(function(f) {
            return f.pluginName === v;
          });
        });
      }
      function Hn(n, r) {
        return typeof n == "function" ? n(r) : n;
      }
      function An(n) {
        var r = C.useRef();
        return r.current = n, C.useCallback(function() {
          return r.current;
        }, []);
      }
      var Un = typeof document < "u" ? C.useLayoutEffect : C.useEffect;
      function Wn(n, r) {
        var i = C.useRef(!1);
        Un(function() {
          i.current && n(), i.current = !0;
        }, r);
      }
      function Dn(n, r, i) {
        return i === void 0 && (i = {}), function(l, v) {
          v === void 0 && (v = {});
          var f = typeof l == "string" ? r[l] : l;
          if (f === void 0)
            throw console.info(r), new Error("Renderer Error ☝️");
          return oe(f, y({}, n, { column: r }, i, {}, v));
        };
      }
      function oe(n, r) {
        return function(l) {
          return typeof l == "function" && (v = Object.getPrototypeOf(l)).prototype && v.prototype.isReactComponent;
          var v;
        }(i = n) || typeof i == "function" || function(l) {
          return typeof l == "object" && typeof l.$$typeof == "symbol" && ["react.memo", "react.forward_ref"].includes(l.$$typeof.description);
        }(i) ? C.createElement(n, r) : n;
        var i;
      }
      function Kn(n, r, i) {
        return i === void 0 && (i = 0), n.map(function(l) {
          return Qn(l = y({}, l, { parent: r, depth: i })), l.columns && (l.columns = Kn(l.columns, l, i + 1)), l;
        });
      }
      function Ce(n) {
        return Pe(n, "columns");
      }
      function Qn(n) {
        var r = n.id, i = n.accessor, l = n.Header;
        if (typeof i == "string") {
          r = r || i;
          var v = i.split(".");
          i = function(f) {
            return function(S, R, T) {
              if (!R)
                return S;
              var I, V = typeof R == "function" ? R : JSON.stringify(R), W = zn.get(V) || function() {
                var x = function(k) {
                  return function H(X, U) {
                    if (U === void 0 && (U = []), Array.isArray(X))
                      for (var ln = 0; ln < X.length; ln += 1)
                        H(X[ln], U);
                    else
                      U.push(X);
                    return U;
                  }(k).map(function(H) {
                    return String(H).replace(".", "_");
                  }).join(".").replace(ae, ".").replace(Oe, "").split(".");
                }(R);
                return zn.set(V, x), x;
              }();
              try {
                I = W.reduce(function(x, k) {
                  return x[k];
                }, S);
              } catch {
              }
              return I !== void 0 ? I : T;
            }(f, v);
          };
        }
        if (!r && typeof l == "string" && l && (r = l), !r && n.columns)
          throw console.error(n), new Error('A column ID (or unique "Header" value) is required!');
        if (!r)
          throw console.error(n), new Error("A column ID (or string accessor) is required!");
        return Object.assign(n, { id: r, accessor: i }), n;
      }
      function tn(n, r) {
        if (!r)
          throw new Error();
        return Object.assign(n, y({ Header: M, Footer: M }, un, {}, r, {}, n)), Object.assign(n, { originalWidth: n.width }), n;
      }
      function dn(n, r, i) {
        i === void 0 && (i = function() {
          return {};
        });
        for (var l = [], v = n, f = 0, S = function() {
          return f++;
        }, R = function() {
          var T = { headers: [] }, I = [], V = v.some(function(W) {
            return W.parent;
          });
          v.forEach(function(W) {
            var x, k = [].concat(I).reverse()[0];
            V && (W.parent ? x = y({}, W.parent, { originalId: W.parent.id, id: W.parent.id + "_" + S(), headers: [W] }, i(W)) : x = tn(y({ originalId: W.id + "_placeholder", id: W.id + "_placeholder_" + S(), placeholderOf: W, headers: [W] }, i(W)), r), k && k.originalId === x.originalId ? k.headers.push(W) : I.push(x)), T.headers.push(W);
          }), l.push(T), v = I;
        }; v.length; )
          R();
        return l.reverse();
      }
      var zn = /* @__PURE__ */ new Map();
      function Xn() {
        for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
          r[i] = arguments[i];
        for (var l = 0; l < r.length; l += 1)
          if (r[l] !== void 0)
            return r[l];
      }
      function Jn(n) {
        if (typeof n == "function")
          return n;
      }
      function Pe(n, r) {
        var i = [];
        return function l(v) {
          v.forEach(function(f) {
            f[r] ? l(f[r]) : i.push(f);
          });
        }(n), i;
      }
      function Re(n, r) {
        var i = r.manualExpandedKey, l = r.expanded, v = r.expandSubRows, f = v === void 0 || v, S = [];
        return n.forEach(function(R) {
          return function T(I, V) {
            V === void 0 && (V = !0), I.isExpanded = I.original && I.original[i] || l[I.id], I.canExpand = I.subRows && !!I.subRows.length, V && S.push(I), I.subRows && I.subRows.length && I.isExpanded && I.subRows.forEach(function(W) {
              return T(W, f);
            });
          }(R);
        }), S;
      }
      function Me(n, r, i) {
        return Jn(n) || r[n] || i[n] || i.text;
      }
      function Ie(n, r, i) {
        return n ? n(r, i) : r === void 0;
      }
      function de() {
        throw new Error("React-Table: You have not called prepareRow(row) one or more rows you are attempting to render.");
      }
      var ge = null, ae = /\[/g, Oe = /\]/g, Be = function(n) {
        return y({ role: "table" }, n);
      }, F = function(n) {
        return y({ role: "rowgroup" }, n);
      }, z = function(n, r) {
        var i = r.column;
        return y({ key: "header_" + i.id, colSpan: i.totalVisibleHeaderCount, role: "columnheader" }, n);
      }, rn = function(n, r) {
        var i = r.column;
        return y({ key: "footer_" + i.id, colSpan: i.totalVisibleHeaderCount }, n);
      }, on = function(n, r) {
        return y({ key: "headerGroup_" + r.index, role: "row" }, n);
      }, Fn = function(n, r) {
        return y({ key: "footerGroup_" + r.index }, n);
      }, Yn = function(n, r) {
        return y({ key: "row_" + r.row.id, role: "row" }, n);
      }, Se = function(n, r) {
        var i = r.cell;
        return y({ key: "cell_" + i.row.id + "_" + i.column.id, role: "cell" }, n);
      };
      function Ne() {
        return { useOptions: [], stateReducers: [], useControlledState: [], columns: [], columnsDeps: [], allColumns: [], allColumnsDeps: [], accessValue: [], materializedColumns: [], materializedColumnsDeps: [], useInstanceAfterData: [], visibleColumns: [], visibleColumnsDeps: [], headerGroups: [], headerGroupsDeps: [], useInstanceBeforeDimensions: [], useInstance: [], prepareRow: [], getTableProps: [Be], getTableBodyProps: [F], getHeaderGroupProps: [on], getFooterGroupProps: [Fn], getHeaderProps: [z], getFooterProps: [rn], getRowProps: [Yn], getCellProps: [Se], useFinalInstance: [] };
      }
      h.resetHiddenColumns = "resetHiddenColumns", h.toggleHideColumn = "toggleHideColumn", h.setHiddenColumns = "setHiddenColumns", h.toggleHideAllColumns = "toggleHideAllColumns";
      var be = function(n) {
        n.getToggleHiddenProps = [Ae], n.getToggleHideAllColumnsProps = [Le], n.stateReducers.push(_e), n.useInstanceBeforeDimensions.push(pe), n.headerGroupsDeps.push(function(r, i) {
          var l = i.instance;
          return [].concat(r, [l.state.hiddenColumns]);
        }), n.useInstance.push(ce);
      };
      be.pluginName = "useColumnVisibility";
      var Ae = function(n, r) {
        var i = r.column;
        return [n, { onChange: function(l) {
          i.toggleHidden(!l.target.checked);
        }, style: { cursor: "pointer" }, checked: i.isVisible, title: "Toggle Column Visible" }];
      }, Le = function(n, r) {
        var i = r.instance;
        return [n, { onChange: function(l) {
          i.toggleHideAllColumns(!l.target.checked);
        }, style: { cursor: "pointer" }, checked: !i.allColumnsHidden && !i.state.hiddenColumns.length, title: "Toggle All Columns Hidden", indeterminate: !i.allColumnsHidden && i.state.hiddenColumns.length }];
      };
      function _e(n, r, i, l) {
        if (r.type === h.init)
          return y({ hiddenColumns: [] }, n);
        if (r.type === h.resetHiddenColumns)
          return y({}, n, { hiddenColumns: l.initialState.hiddenColumns || [] });
        if (r.type === h.toggleHideColumn) {
          var v = (r.value !== void 0 ? r.value : !n.hiddenColumns.includes(r.columnId)) ? [].concat(n.hiddenColumns, [r.columnId]) : n.hiddenColumns.filter(function(f) {
            return f !== r.columnId;
          });
          return y({}, n, { hiddenColumns: v });
        }
        return r.type === h.setHiddenColumns ? y({}, n, { hiddenColumns: Hn(r.value, n.hiddenColumns) }) : r.type === h.toggleHideAllColumns ? y({}, n, { hiddenColumns: (r.value !== void 0 ? r.value : !n.hiddenColumns.length) ? l.allColumns.map(function(f) {
          return f.id;
        }) : [] }) : void 0;
      }
      function pe(n) {
        var r = n.headers, i = n.state.hiddenColumns;
        C.useRef(!1).current;
        var l = 0;
        r.forEach(function(v) {
          return l += function f(S, R) {
            S.isVisible = R && !i.includes(S.id);
            var T = 0;
            return S.headers && S.headers.length ? S.headers.forEach(function(I) {
              return T += f(I, S.isVisible);
            }) : T = S.isVisible ? 1 : 0, S.totalVisibleHeaderCount = T, T;
          }(v, !0);
        });
      }
      function ce(n) {
        var r = n.columns, i = n.flatHeaders, l = n.dispatch, v = n.allColumns, f = n.getHooks, S = n.state.hiddenColumns, R = n.autoResetHiddenColumns, T = R === void 0 || R, I = An(n), V = v.length === S.length, W = C.useCallback(function(U, ln) {
          return l({ type: h.toggleHideColumn, columnId: U, value: ln });
        }, [l]), x = C.useCallback(function(U) {
          return l({ type: h.setHiddenColumns, value: U });
        }, [l]), k = C.useCallback(function(U) {
          return l({ type: h.toggleHideAllColumns, value: U });
        }, [l]), H = Cn(f().getToggleHideAllColumnsProps, { instance: I() });
        i.forEach(function(U) {
          U.toggleHidden = function(ln) {
            l({ type: h.toggleHideColumn, columnId: U.id, value: ln });
          }, U.getToggleHiddenProps = Cn(f().getToggleHiddenProps, { instance: I(), column: U });
        });
        var X = An(T);
        Wn(function() {
          X() && l({ type: h.resetHiddenColumns });
        }, [l, r]), Object.assign(n, { allColumnsHidden: V, toggleHideColumn: W, setHiddenColumns: x, toggleHideAllColumns: k, getToggleHideAllColumnsProps: H });
      }
      var me = {}, ve = {}, Xe = function(n, r, i) {
        return n;
      }, Q = function(n, r) {
        return n.subRows || [];
      }, In = function(n, r, i) {
        return "" + (i ? [i.id, r].join(".") : r);
      }, ee = function(n) {
        return n;
      };
      function ue(n) {
        var r = n.initialState, i = r === void 0 ? me : r, l = n.defaultColumn, v = l === void 0 ? ve : l, f = n.getSubRows, S = f === void 0 ? Q : f, R = n.getRowId, T = R === void 0 ? In : R, I = n.stateReducer, V = I === void 0 ? Xe : I, W = n.useControlledState, x = W === void 0 ? ee : W;
        return y({}, B(n, ["initialState", "defaultColumn", "getSubRows", "getRowId", "stateReducer", "useControlledState"]), { initialState: i, defaultColumn: v, getSubRows: S, getRowId: T, stateReducer: V, useControlledState: x });
      }
      function fe(n, r) {
        r === void 0 && (r = 0);
        var i = 0, l = 0, v = 0, f = 0;
        return n.forEach(function(S) {
          var R = S.headers;
          if (S.totalLeft = r, R && R.length) {
            var T = fe(R, r), I = T[0], V = T[1], W = T[2], x = T[3];
            S.totalMinWidth = I, S.totalWidth = V, S.totalMaxWidth = W, S.totalFlexWidth = x;
          } else
            S.totalMinWidth = S.minWidth, S.totalWidth = Math.min(Math.max(S.minWidth, S.width), S.maxWidth), S.totalMaxWidth = S.maxWidth, S.totalFlexWidth = S.canResize ? S.totalWidth : 0;
          S.isVisible && (r += S.totalWidth, i += S.totalMinWidth, l += S.totalWidth, v += S.totalMaxWidth, f += S.totalFlexWidth);
        }), [i, l, v, f];
      }
      function Fe(n) {
        var r = n.data, i = n.rows, l = n.flatRows, v = n.rowsById, f = n.column, S = n.getRowId, R = n.getSubRows, T = n.accessValueHooks, I = n.getInstance;
        r.forEach(function(V, W) {
          return function x(k, H, X, U, ln) {
            X === void 0 && (X = 0);
            var Ln = k, sn = S(k, H, U), K = v[sn];
            if (K)
              K.subRows && K.originalSubRows.forEach(function(en, Mn) {
                return x(en, Mn, X + 1, K);
              });
            else if ((K = { id: sn, original: Ln, index: H, depth: X, cells: [{}] }).cells.map = de, K.cells.filter = de, K.cells.forEach = de, K.cells[0].getCellProps = de, K.values = {}, ln.push(K), l.push(K), v[sn] = K, K.originalSubRows = R(k, H), K.originalSubRows) {
              var Tn = [];
              K.originalSubRows.forEach(function(en, Mn) {
                return x(en, Mn, X + 1, K, Tn);
              }), K.subRows = Tn;
            }
            f.accessor && (K.values[f.id] = f.accessor(k, H, K, ln, r)), K.values[f.id] = fn(T, K.values[f.id], { row: K, column: f, instance: I() });
          }(V, W, 0, void 0, i);
        });
      }
      h.resetExpanded = "resetExpanded", h.toggleRowExpanded = "toggleRowExpanded", h.toggleAllRowsExpanded = "toggleAllRowsExpanded";
      var Te = function(n) {
        n.getToggleAllRowsExpandedProps = [Ye], n.getToggleRowExpandedProps = [je], n.stateReducers.push(Ue), n.useInstance.push(We), n.prepareRow.push(Je);
      };
      Te.pluginName = "useExpanded";
      var Ye = function(n, r) {
        var i = r.instance;
        return [n, { onClick: function(l) {
          i.toggleAllRowsExpanded();
        }, style: { cursor: "pointer" }, title: "Toggle All Rows Expanded" }];
      }, je = function(n, r) {
        var i = r.row;
        return [n, { onClick: function() {
          i.toggleRowExpanded();
        }, style: { cursor: "pointer" }, title: "Toggle Row Expanded" }];
      };
      function Ue(n, r, i, l) {
        if (r.type === h.init)
          return y({ expanded: {} }, n);
        if (r.type === h.resetExpanded)
          return y({}, n, { expanded: l.initialState.expanded || {} });
        if (r.type === h.toggleAllRowsExpanded) {
          var v = r.value, f = l.rowsById, S = Object.keys(f).length === Object.keys(n.expanded).length;
          if (v !== void 0 ? v : !S) {
            var R = {};
            return Object.keys(f).forEach(function(H) {
              R[H] = !0;
            }), y({}, n, { expanded: R });
          }
          return y({}, n, { expanded: {} });
        }
        if (r.type === h.toggleRowExpanded) {
          var T, I = r.id, V = r.value, W = n.expanded[I], x = V !== void 0 ? V : !W;
          if (!W && x)
            return y({}, n, { expanded: y({}, n.expanded, (T = {}, T[I] = !0, T)) });
          if (W && !x) {
            var k = n.expanded;
            return k[I], y({}, n, { expanded: B(k, [I].map(nn)) });
          }
          return n;
        }
      }
      function We(n) {
        var r = n.data, i = n.rows, l = n.rowsById, v = n.manualExpandedKey, f = v === void 0 ? "expanded" : v, S = n.paginateExpandedRows, R = S === void 0 || S, T = n.expandSubRows, I = T === void 0 || T, V = n.autoResetExpanded, W = V === void 0 || V, x = n.getHooks, k = n.plugins, H = n.state.expanded, X = n.dispatch;
        hn(k, ["useSortBy", "useGroupBy", "usePivotColumns", "useGlobalFilter"], "useExpanded");
        var U = An(W), ln = !!(Object.keys(l).length && Object.keys(H).length);
        ln && Object.keys(l).some(function(xn) {
          return !H[xn];
        }) && (ln = !1), Wn(function() {
          U() && X({ type: h.resetExpanded });
        }, [X, r]);
        var Ln = C.useCallback(function(xn, gn) {
          X({ type: h.toggleRowExpanded, id: xn, value: gn });
        }, [X]), sn = C.useCallback(function(xn) {
          return X({ type: h.toggleAllRowsExpanded, value: xn });
        }, [X]), K = C.useMemo(function() {
          return R ? Re(i, { manualExpandedKey: f, expanded: H, expandSubRows: I }) : i;
        }, [R, i, f, H, I]), Tn = C.useMemo(function() {
          return function(xn) {
            var gn = 0;
            return Object.keys(xn).forEach(function(Sn) {
              var Vn = Sn.split(".");
              gn = Math.max(gn, Vn.length);
            }), gn;
          }(H);
        }, [H]), en = An(n), Mn = Cn(x().getToggleAllRowsExpandedProps, { instance: en() });
        Object.assign(n, { preExpandedRows: i, expandedRows: K, rows: K, expandedDepth: Tn, isAllRowsExpanded: ln, toggleRowExpanded: Ln, toggleAllRowsExpanded: sn, getToggleAllRowsExpandedProps: Mn });
      }
      function Je(n, r) {
        var i = r.instance.getHooks, l = r.instance;
        n.toggleRowExpanded = function(v) {
          return l.toggleRowExpanded(n.id, v);
        }, n.getToggleRowExpandedProps = Cn(i().getToggleRowExpandedProps, { instance: l, row: n });
      }
      var xe = function(n, r, i) {
        return n = n.filter(function(l) {
          return r.some(function(v) {
            var f = l.values[v];
            return String(f).toLowerCase().includes(String(i).toLowerCase());
          });
        });
      };
      xe.autoRemove = function(n) {
        return !n;
      };
      var Ge = function(n, r, i) {
        return n.filter(function(l) {
          return r.some(function(v) {
            var f = l.values[v];
            return f === void 0 || String(f).toLowerCase() === String(i).toLowerCase();
          });
        });
      };
      Ge.autoRemove = function(n) {
        return !n;
      };
      var He = function(n, r, i) {
        return n.filter(function(l) {
          return r.some(function(v) {
            var f = l.values[v];
            return f === void 0 || String(f) === String(i);
          });
        });
      };
      He.autoRemove = function(n) {
        return !n;
      };
      var at = function(n, r, i) {
        return n.filter(function(l) {
          return r.some(function(v) {
            return l.values[v].includes(i);
          });
        });
      };
      at.autoRemove = function(n) {
        return !n || !n.length;
      };
      var dt = function(n, r, i) {
        return n.filter(function(l) {
          return r.some(function(v) {
            var f = l.values[v];
            return f && f.length && i.every(function(S) {
              return f.includes(S);
            });
          });
        });
      };
      dt.autoRemove = function(n) {
        return !n || !n.length;
      };
      var Bt = function(n, r, i) {
        return n.filter(function(l) {
          return r.some(function(v) {
            var f = l.values[v];
            return f && f.length && i.some(function(S) {
              return f.includes(S);
            });
          });
        });
      };
      Bt.autoRemove = function(n) {
        return !n || !n.length;
      };
      var pt = function(n, r, i) {
        return n.filter(function(l) {
          return r.some(function(v) {
            var f = l.values[v];
            return i.includes(f);
          });
        });
      };
      pt.autoRemove = function(n) {
        return !n || !n.length;
      };
      var Ft = function(n, r, i) {
        return n.filter(function(l) {
          return r.some(function(v) {
            return l.values[v] === i;
          });
        });
      };
      Ft.autoRemove = function(n) {
        return n === void 0;
      };
      var Ht = function(n, r, i) {
        return n.filter(function(l) {
          return r.some(function(v) {
            return l.values[v] == i;
          });
        });
      };
      Ht.autoRemove = function(n) {
        return n == null;
      };
      var Wt = function(n, r, i) {
        var l = i || [], v = l[0], f = l[1];
        if ((v = typeof v == "number" ? v : -1 / 0) > (f = typeof f == "number" ? f : 1 / 0)) {
          var S = v;
          v = f, f = S;
        }
        return n.filter(function(R) {
          return r.some(function(T) {
            var I = R.values[T];
            return I >= v && I <= f;
          });
        });
      };
      Wt.autoRemove = function(n) {
        return !n || typeof n[0] != "number" && typeof n[1] != "number";
      };
      var $e = Object.freeze({ __proto__: null, text: xe, exactText: Ge, exactTextCase: He, includes: at, includesAll: dt, includesSome: Bt, includesValue: pt, exact: Ft, equals: Ht, between: Wt });
      h.resetFilters = "resetFilters", h.setFilter = "setFilter", h.setAllFilters = "setAllFilters";
      var xt = function(n) {
        n.stateReducers.push(ko), n.useInstance.push(Gt);
      };
      function ko(n, r, i, l) {
        if (r.type === h.init)
          return y({ filters: [] }, n);
        if (r.type === h.resetFilters)
          return y({}, n, { filters: l.initialState.filters || [] });
        if (r.type === h.setFilter) {
          var v = r.columnId, f = r.filterValue, S = l.allColumns, R = l.filterTypes, T = S.find(function(X) {
            return X.id === v;
          });
          if (!T)
            throw new Error("React-Table: Could not find a column with id: " + v);
          var I = Me(T.filter, R || {}, $e), V = n.filters.find(function(X) {
            return X.id === v;
          }), W = Hn(f, V && V.value);
          return Ie(I.autoRemove, W, T) ? y({}, n, { filters: n.filters.filter(function(X) {
            return X.id !== v;
          }) }) : y({}, n, V ? { filters: n.filters.map(function(X) {
            return X.id === v ? { id: v, value: W } : X;
          }) } : { filters: [].concat(n.filters, [{ id: v, value: W }]) });
        }
        if (r.type === h.setAllFilters) {
          var x = r.filters, k = l.allColumns, H = l.filterTypes;
          return y({}, n, { filters: Hn(x, n.filters).filter(function(X) {
            var U = k.find(function(ln) {
              return ln.id === X.id;
            });
            return !Ie(Me(U.filter, H || {}, $e).autoRemove, X.value, U);
          }) });
        }
      }
      function Gt(n) {
        var r = n.data, i = n.rows, l = n.flatRows, v = n.rowsById, f = n.allColumns, S = n.filterTypes, R = n.manualFilters, T = n.defaultCanFilter, I = T !== void 0 && T, V = n.disableFilters, W = n.state.filters, x = n.dispatch, k = n.autoResetFilters, H = k === void 0 || k, X = C.useCallback(function(en, Mn) {
          x({ type: h.setFilter, columnId: en, filterValue: Mn });
        }, [x]), U = C.useCallback(function(en) {
          x({ type: h.setAllFilters, filters: en });
        }, [x]);
        f.forEach(function(en) {
          var Mn = en.id, xn = en.accessor, gn = en.defaultCanFilter, Sn = en.disableFilters;
          en.canFilter = xn ? Xn(Sn !== !0 && void 0, V !== !0 && void 0, !0) : Xn(gn, I, !1), en.setFilter = function(Rn) {
            return X(en.id, Rn);
          };
          var Vn = W.find(function(Rn) {
            return Rn.id === Mn;
          });
          en.filterValue = Vn && Vn.value;
        });
        var ln = C.useMemo(function() {
          if (R || !W.length)
            return [i, l, v];
          var en = [], Mn = {};
          return [function xn(gn, Sn) {
            Sn === void 0 && (Sn = 0);
            var Vn = gn;
            return (Vn = W.reduce(function(Rn, Gn) {
              var e = Gn.id, t = Gn.value, u = f.find(function(p) {
                return p.id === e;
              });
              if (!u)
                return Rn;
              Sn === 0 && (u.preFilteredRows = Rn);
              var a = Me(u.filter, S || {}, $e);
              return a ? (u.filteredRows = a(Rn, [e], t), u.filteredRows) : (console.warn("Could not find a valid 'column.filter' for column with the ID: " + u.id + "."), Rn);
            }, gn)).forEach(function(Rn) {
              en.push(Rn), Mn[Rn.id] = Rn, Rn.subRows && (Rn.subRows = Rn.subRows && Rn.subRows.length > 0 ? xn(Rn.subRows, Sn + 1) : Rn.subRows);
            }), Vn;
          }(i), en, Mn];
        }, [R, W, i, l, v, f, S]), Ln = ln[0], sn = ln[1], K = ln[2];
        C.useMemo(function() {
          f.filter(function(en) {
            return !W.find(function(Mn) {
              return Mn.id === en.id;
            });
          }).forEach(function(en) {
            en.preFilteredRows = Ln, en.filteredRows = Ln;
          });
        }, [Ln, W, f]);
        var Tn = An(H);
        Wn(function() {
          Tn() && x({ type: h.resetFilters });
        }, [x, R ? null : r]), Object.assign(n, { preFilteredRows: i, preFilteredFlatRows: l, preFilteredRowsById: v, filteredRows: Ln, filteredFlatRows: sn, filteredRowsById: K, rows: Ln, flatRows: sn, rowsById: K, setFilter: X, setAllFilters: U });
      }
      xt.pluginName = "useFilters", h.resetGlobalFilter = "resetGlobalFilter", h.setGlobalFilter = "setGlobalFilter";
      var ft = function(n) {
        n.stateReducers.push(Vt), n.useInstance.push(Kt);
      };
      function Vt(n, r, i, l) {
        if (r.type === h.resetGlobalFilter)
          return y({}, n, { globalFilter: l.initialState.globalFilter || void 0 });
        if (r.type === h.setGlobalFilter) {
          var v = r.filterValue, f = l.userFilterTypes, S = Me(l.globalFilter, f || {}, $e), R = Hn(v, n.globalFilter);
          return Ie(S.autoRemove, R) ? (n.globalFilter, B(n, ["globalFilter"])) : y({}, n, { globalFilter: R });
        }
      }
      function Kt(n) {
        var r = n.data, i = n.rows, l = n.flatRows, v = n.rowsById, f = n.allColumns, S = n.filterTypes, R = n.globalFilter, T = n.manualGlobalFilter, I = n.state.globalFilter, V = n.dispatch, W = n.autoResetGlobalFilter, x = W === void 0 || W, k = n.disableGlobalFilter, H = C.useCallback(function(K) {
          V({ type: h.setGlobalFilter, filterValue: K });
        }, [V]), X = C.useMemo(function() {
          if (T || I === void 0)
            return [i, l, v];
          var K = [], Tn = {}, en = Me(R, S || {}, $e);
          if (!en)
            return console.warn("Could not find a valid 'globalFilter' option."), i;
          f.forEach(function(xn) {
            var gn = xn.disableGlobalFilter;
            xn.canFilter = Xn(gn !== !0 && void 0, k !== !0 && void 0, !0);
          });
          var Mn = f.filter(function(xn) {
            return xn.canFilter === !0;
          });
          return [function xn(gn) {
            return (gn = en(gn, Mn.map(function(Sn) {
              return Sn.id;
            }), I)).forEach(function(Sn) {
              K.push(Sn), Tn[Sn.id] = Sn, Sn.subRows = Sn.subRows && Sn.subRows.length ? xn(Sn.subRows) : Sn.subRows;
            }), gn;
          }(i), K, Tn];
        }, [T, I, R, S, f, i, l, v, k]), U = X[0], ln = X[1], Ln = X[2], sn = An(x);
        Wn(function() {
          sn() && V({ type: h.resetGlobalFilter });
        }, [V, T ? null : r]), Object.assign(n, { preGlobalFilteredRows: i, preGlobalFilteredFlatRows: l, preGlobalFilteredRowsById: v, globalFilteredRows: U, globalFilteredFlatRows: ln, globalFilteredRowsById: Ln, rows: U, flatRows: ln, rowsById: Ln, setGlobalFilter: H, disableGlobalFilter: k });
      }
      function gt(n, r) {
        return r.reduce(function(i, l) {
          return i + (typeof l == "number" ? l : 0);
        }, 0);
      }
      ft.pluginName = "useGlobalFilter";
      var mt = Object.freeze({ __proto__: null, sum: gt, min: function(n) {
        var r = n[0] || 0;
        return n.forEach(function(i) {
          typeof i == "number" && (r = Math.min(r, i));
        }), r;
      }, max: function(n) {
        var r = n[0] || 0;
        return n.forEach(function(i) {
          typeof i == "number" && (r = Math.max(r, i));
        }), r;
      }, minMax: function(n) {
        var r = n[0] || 0, i = n[0] || 0;
        return n.forEach(function(l) {
          typeof l == "number" && (r = Math.min(r, l), i = Math.max(i, l));
        }), r + ".." + i;
      }, average: function(n) {
        return gt(0, n) / n.length;
      }, median: function(n) {
        if (!n.length)
          return null;
        var r = Math.floor(n.length / 2), i = [].concat(n).sort(function(l, v) {
          return l - v;
        });
        return n.length % 2 != 0 ? i[r] : (i[r - 1] + i[r]) / 2;
      }, unique: function(n) {
        return Array.from(new Set(n).values());
      }, uniqueCount: function(n) {
        return new Set(n).size;
      }, count: function(n) {
        return n.length;
      } }), qt = [], zt = {};
      h.resetGroupBy = "resetGroupBy", h.setGroupBy = "setGroupBy", h.toggleGroupBy = "toggleGroupBy";
      var vt = function(n) {
        n.getGroupByToggleProps = [_t], n.stateReducers.push(Ze), n.visibleColumnsDeps.push(function(r, i) {
          var l = i.instance;
          return [].concat(r, [l.state.groupBy]);
        }), n.visibleColumns.push(Xt), n.useInstance.push(Oo), n.prepareRow.push(Yt);
      };
      vt.pluginName = "useGroupBy";
      var _t = function(n, r) {
        var i = r.header;
        return [n, { onClick: i.canGroupBy ? function(l) {
          l.persist(), i.toggleGroupBy();
        } : void 0, style: { cursor: i.canGroupBy ? "pointer" : void 0 }, title: "Toggle GroupBy" }];
      };
      function Ze(n, r, i, l) {
        if (r.type === h.init)
          return y({ groupBy: [] }, n);
        if (r.type === h.resetGroupBy)
          return y({}, n, { groupBy: l.initialState.groupBy || [] });
        if (r.type === h.setGroupBy)
          return y({}, n, { groupBy: r.value });
        if (r.type === h.toggleGroupBy) {
          var v = r.columnId, f = r.value, S = f !== void 0 ? f : !n.groupBy.includes(v);
          return y({}, n, S ? { groupBy: [].concat(n.groupBy, [v]) } : { groupBy: n.groupBy.filter(function(R) {
            return R !== v;
          }) });
        }
      }
      function Xt(n, r) {
        var i = r.instance.state.groupBy, l = i.map(function(f) {
          return n.find(function(S) {
            return S.id === f;
          });
        }).filter(Boolean), v = n.filter(function(f) {
          return !i.includes(f.id);
        });
        return (n = [].concat(l, v)).forEach(function(f) {
          f.isGrouped = i.includes(f.id), f.groupedIndex = i.indexOf(f.id);
        }), n;
      }
      var Eo = {};
      function Oo(n) {
        var r = n.data, i = n.rows, l = n.flatRows, v = n.rowsById, f = n.allColumns, S = n.flatHeaders, R = n.groupByFn, T = R === void 0 ? jt : R, I = n.manualGroupBy, V = n.aggregations, W = V === void 0 ? Eo : V, x = n.plugins, k = n.state.groupBy, H = n.dispatch, X = n.autoResetGroupBy, U = X === void 0 || X, ln = n.disableGroupBy, Ln = n.defaultCanGroupBy, sn = n.getHooks;
        hn(x, ["useColumnOrder", "useFilters"], "useGroupBy");
        var K = An(n);
        f.forEach(function(u) {
          var a = u.accessor, p = u.defaultGroupBy, g = u.disableGroupBy;
          u.canGroupBy = a ? Xn(u.canGroupBy, g !== !0 && void 0, ln !== !0 && void 0, !0) : Xn(u.canGroupBy, p, Ln, !1), u.canGroupBy && (u.toggleGroupBy = function() {
            return n.toggleGroupBy(u.id);
          }), u.Aggregated = u.Aggregated || u.Cell;
        });
        var Tn = C.useCallback(function(u, a) {
          H({ type: h.toggleGroupBy, columnId: u, value: a });
        }, [H]), en = C.useCallback(function(u) {
          H({ type: h.setGroupBy, value: u });
        }, [H]);
        S.forEach(function(u) {
          u.getGroupByToggleProps = Cn(sn().getGroupByToggleProps, { instance: K(), header: u });
        });
        var Mn = C.useMemo(function() {
          if (I || !k.length)
            return [i, l, v, qt, zt, l, v];
          var u = k.filter(function(L) {
            return f.find(function(q) {
              return q.id === L;
            });
          }), a = [], p = {}, g = [], c = {}, w = [], D = {}, N = function L(q, O, G) {
            if (O === void 0 && (O = 0), O === u.length)
              return q.map(function(Z) {
                return y({}, Z, { depth: O });
              });
            var _ = u[O], E = T(q, _);
            return Object.entries(E).map(function(Z, yn) {
              var vn = Z[0], j = Z[1], Pn = _ + ":" + vn, Bn = L(j, O + 1, Pn = G ? G + ">" + Pn : Pn), J = O ? Pe(j, "leafRows") : j, Y = function(cn, kn, En) {
                var _n = {};
                return f.forEach(function(an) {
                  if (u.includes(an.id))
                    _n[an.id] = kn[0] ? kn[0].values[an.id] : null;
                  else {
                    var ie = typeof an.aggregate == "function" ? an.aggregate : W[an.aggregate] || mt[an.aggregate];
                    if (ie) {
                      var On = kn.map(function(bn) {
                        return bn.values[an.id];
                      }), wn = cn.map(function(bn) {
                        var jn = bn.values[an.id];
                        if (!En && an.aggregateValue) {
                          var se = typeof an.aggregateValue == "function" ? an.aggregateValue : W[an.aggregateValue] || mt[an.aggregateValue];
                          if (!se)
                            throw console.info({ column: an }), new Error("React Table: Invalid column.aggregateValue option for column listed above");
                          jn = se(jn, bn, an);
                        }
                        return jn;
                      });
                      _n[an.id] = ie(wn, On);
                    } else {
                      if (an.aggregate)
                        throw console.info({ column: an }), new Error("React Table: Invalid column.aggregate option for column listed above");
                      _n[an.id] = null;
                    }
                  }
                }), _n;
              }(J, j, O), $ = { id: Pn, isGrouped: !0, groupByID: _, groupByVal: vn, values: Y, subRows: Bn, leafRows: J, depth: O, index: yn };
              return Bn.forEach(function(cn) {
                a.push(cn), p[cn.id] = cn, cn.isGrouped ? (g.push(cn), c[cn.id] = cn) : (w.push(cn), D[cn.id] = cn);
              }), $;
            });
          }(i);
          return N.forEach(function(L) {
            a.push(L), p[L.id] = L, L.isGrouped ? (g.push(L), c[L.id] = L) : (w.push(L), D[L.id] = L);
          }), [N, a, p, g, c, w, D];
        }, [I, k, i, l, v, f, W, T]), xn = Mn[0], gn = Mn[1], Sn = Mn[2], Vn = Mn[3], Rn = Mn[4], Gn = Mn[5], e = Mn[6], t = An(U);
        Wn(function() {
          t() && H({ type: h.resetGroupBy });
        }, [H, I ? null : r]), Object.assign(n, { preGroupedRows: i, preGroupedFlatRow: l, preGroupedRowsById: v, groupedRows: xn, groupedFlatRows: gn, groupedRowsById: Sn, onlyGroupedFlatRows: Vn, onlyGroupedRowsById: Rn, nonGroupedFlatRows: Gn, nonGroupedRowsById: e, rows: xn, flatRows: gn, rowsById: Sn, toggleGroupBy: Tn, setGroupBy: en });
      }
      function Yt(n) {
        n.allCells.forEach(function(r) {
          var i;
          r.isGrouped = r.column.isGrouped && r.column.id === n.groupByID, r.isPlaceholder = !r.isGrouped && r.column.isGrouped, r.isAggregated = !r.isGrouped && !r.isPlaceholder && ((i = n.subRows) == null ? void 0 : i.length);
        });
      }
      function jt(n, r) {
        return n.reduce(function(i, l, v) {
          var f = "" + l.values[r];
          return i[f] = Array.isArray(i[f]) ? i[f] : [], i[f].push(l), i;
        }, {});
      }
      var Ut = /([0-9]+)/gm;
      function rt(n, r) {
        return n === r ? 0 : n > r ? 1 : -1;
      }
      function Qe(n, r, i) {
        return [n.values[i], r.values[i]];
      }
      function Jt(n) {
        return typeof n == "number" ? isNaN(n) || n === 1 / 0 || n === -1 / 0 ? "" : String(n) : typeof n == "string" ? n : "";
      }
      var Bo = Object.freeze({ __proto__: null, alphanumeric: function(n, r, i) {
        var l = Qe(n, r, i), v = l[0], f = l[1];
        for (v = Jt(v), f = Jt(f), v = v.split(Ut).filter(Boolean), f = f.split(Ut).filter(Boolean); v.length && f.length; ) {
          var S = v.shift(), R = f.shift(), T = parseInt(S, 10), I = parseInt(R, 10), V = [T, I].sort();
          if (isNaN(V[0])) {
            if (S > R)
              return 1;
            if (R > S)
              return -1;
          } else {
            if (isNaN(V[1]))
              return isNaN(T) ? -1 : 1;
            if (T > I)
              return 1;
            if (I > T)
              return -1;
          }
        }
        return v.length - f.length;
      }, datetime: function(n, r, i) {
        var l = Qe(n, r, i), v = l[0], f = l[1];
        return rt(v = v.getTime(), f = f.getTime());
      }, basic: function(n, r, i) {
        var l = Qe(n, r, i);
        return rt(l[0], l[1]);
      }, string: function(n, r, i) {
        var l = Qe(n, r, i), v = l[0], f = l[1];
        for (v = v.split("").filter(Boolean), f = f.split("").filter(Boolean); v.length && f.length; ) {
          var S = v.shift(), R = f.shift(), T = S.toLowerCase(), I = R.toLowerCase();
          if (T > I)
            return 1;
          if (I > T)
            return -1;
          if (S > R)
            return 1;
          if (R > S)
            return -1;
        }
        return v.length - f.length;
      }, number: function(n, r, i) {
        var l = Qe(n, r, i), v = l[0], f = l[1], S = /[^0-9.]/gi;
        return rt(v = Number(String(v).replace(S, "")), f = Number(String(f).replace(S, "")));
      } });
      h.resetSortBy = "resetSortBy", h.setSortBy = "setSortBy", h.toggleSortBy = "toggleSortBy", h.clearSortBy = "clearSortBy", un.sortType = "alphanumeric", un.sortDescFirst = !1;
      var $t = function(n) {
        n.getSortByToggleProps = [Fo], n.stateReducers.push(Ho), n.useInstance.push(Wo);
      };
      $t.pluginName = "useSortBy";
      var Fo = function(n, r) {
        var i = r.instance, l = r.column, v = i.isMultiSortEvent, f = v === void 0 ? function(S) {
          return S.shiftKey;
        } : v;
        return [n, { onClick: l.canSort ? function(S) {
          S.persist(), l.toggleSortBy(void 0, !i.disableMultiSort && f(S));
        } : void 0, style: { cursor: l.canSort ? "pointer" : void 0 }, title: l.canSort ? "Toggle SortBy" : void 0 }];
      };
      function Ho(n, r, i, l) {
        if (r.type === h.init)
          return y({ sortBy: [] }, n);
        if (r.type === h.resetSortBy)
          return y({}, n, { sortBy: l.initialState.sortBy || [] });
        if (r.type === h.clearSortBy)
          return y({}, n, { sortBy: n.sortBy.filter(function(K) {
            return K.id !== r.columnId;
          }) });
        if (r.type === h.setSortBy)
          return y({}, n, { sortBy: r.sortBy });
        if (r.type === h.toggleSortBy) {
          var v, f = r.columnId, S = r.desc, R = r.multi, T = l.allColumns, I = l.disableMultiSort, V = l.disableSortRemove, W = l.disableMultiRemove, x = l.maxMultiSortColCount, k = x === void 0 ? Number.MAX_SAFE_INTEGER : x, H = n.sortBy, X = T.find(function(K) {
            return K.id === f;
          }).sortDescFirst, U = H.find(function(K) {
            return K.id === f;
          }), ln = H.findIndex(function(K) {
            return K.id === f;
          }), Ln = S != null, sn = [];
          return (v = !I && R ? U ? "toggle" : "add" : ln !== H.length - 1 || H.length !== 1 ? "replace" : U ? "toggle" : "replace") != "toggle" || V || Ln || R && W || !(U && U.desc && !X || !U.desc && X) || (v = "remove"), v === "replace" ? sn = [{ id: f, desc: Ln ? S : X }] : v === "add" ? (sn = [].concat(H, [{ id: f, desc: Ln ? S : X }])).splice(0, sn.length - k) : v === "toggle" ? sn = H.map(function(K) {
            return K.id === f ? y({}, K, { desc: Ln ? S : !U.desc }) : K;
          }) : v === "remove" && (sn = H.filter(function(K) {
            return K.id !== f;
          })), y({}, n, { sortBy: sn });
        }
      }
      function Wo(n) {
        var r = n.data, i = n.rows, l = n.flatRows, v = n.allColumns, f = n.orderByFn, S = f === void 0 ? Zt : f, R = n.sortTypes, T = n.manualSortBy, I = n.defaultCanSort, V = n.disableSortBy, W = n.flatHeaders, x = n.state.sortBy, k = n.dispatch, H = n.plugins, X = n.getHooks, U = n.autoResetSortBy, ln = U === void 0 || U;
        hn(H, ["useFilters", "useGlobalFilter", "useGroupBy", "usePivotColumns"], "useSortBy");
        var Ln = C.useCallback(function(gn) {
          k({ type: h.setSortBy, sortBy: gn });
        }, [k]), sn = C.useCallback(function(gn, Sn, Vn) {
          k({ type: h.toggleSortBy, columnId: gn, desc: Sn, multi: Vn });
        }, [k]), K = An(n);
        W.forEach(function(gn) {
          var Sn = gn.accessor, Vn = gn.canSort, Rn = gn.disableSortBy, Gn = gn.id, e = Sn ? Xn(Rn !== !0 && void 0, V !== !0 && void 0, !0) : Xn(I, Vn, !1);
          gn.canSort = e, gn.canSort && (gn.toggleSortBy = function(u, a) {
            return sn(gn.id, u, a);
          }, gn.clearSortBy = function() {
            k({ type: h.clearSortBy, columnId: gn.id });
          }), gn.getSortByToggleProps = Cn(X().getSortByToggleProps, { instance: K(), column: gn });
          var t = x.find(function(u) {
            return u.id === Gn;
          });
          gn.isSorted = !!t, gn.sortedIndex = x.findIndex(function(u) {
            return u.id === Gn;
          }), gn.isSortedDesc = gn.isSorted ? t.desc : void 0;
        });
        var Tn = C.useMemo(function() {
          if (T || !x.length)
            return [i, l];
          var gn = [], Sn = x.filter(function(Vn) {
            return v.find(function(Rn) {
              return Rn.id === Vn.id;
            });
          });
          return [function Vn(Rn) {
            var Gn = S(Rn, Sn.map(function(e) {
              var t = v.find(function(p) {
                return p.id === e.id;
              });
              if (!t)
                throw new Error("React-Table: Could not find a column with id: " + e.id + " while sorting");
              var u = t.sortType, a = Jn(u) || (R || {})[u] || Bo[u];
              if (!a)
                throw new Error("React-Table: Could not find a valid sortType of '" + u + "' for column '" + e.id + "'.");
              return function(p, g) {
                return a(p, g, e.id, e.desc);
              };
            }), Sn.map(function(e) {
              var t = v.find(function(u) {
                return u.id === e.id;
              });
              return t && t.sortInverted ? e.desc : !e.desc;
            }));
            return Gn.forEach(function(e) {
              gn.push(e), e.subRows && e.subRows.length !== 0 && (e.subRows = Vn(e.subRows));
            }), Gn;
          }(i), gn];
        }, [T, x, i, l, v, S, R]), en = Tn[0], Mn = Tn[1], xn = An(ln);
        Wn(function() {
          xn() && k({ type: h.resetSortBy });
        }, [T ? null : r]), Object.assign(n, { preSortedRows: i, preSortedFlatRows: l, sortedRows: en, sortedFlatRows: Mn, rows: en, flatRows: Mn, setSortBy: Ln, toggleSortBy: sn });
      }
      function Zt(n, r, i) {
        return [].concat(n).sort(function(l, v) {
          for (var f = 0; f < r.length; f += 1) {
            var S = r[f], R = i[f] === !1 || i[f] === "desc", T = S(l, v);
            if (T !== 0)
              return R ? -T : T;
          }
          return i[0] ? l.index - v.index : v.index - l.index;
        });
      }
      h.resetPage = "resetPage", h.gotoPage = "gotoPage", h.setPageSize = "setPageSize";
      var ht = function(n) {
        n.stateReducers.push(xo), n.useInstance.push(Go);
      };
      function xo(n, r, i, l) {
        if (r.type === h.init)
          return y({ pageSize: 10, pageIndex: 0 }, n);
        if (r.type === h.resetPage)
          return y({}, n, { pageIndex: l.initialState.pageIndex || 0 });
        if (r.type === h.gotoPage) {
          var v = l.pageCount, f = l.page, S = Hn(r.pageIndex, n.pageIndex), R = !1;
          return S > n.pageIndex ? R = v === -1 ? f.length >= n.pageSize : S < v : S < n.pageIndex && (R = S > -1), R ? y({}, n, { pageIndex: S }) : n;
        }
        if (r.type === h.setPageSize) {
          var T = r.pageSize, I = n.pageSize * n.pageIndex;
          return y({}, n, { pageIndex: Math.floor(I / T), pageSize: T });
        }
      }
      function Go(n) {
        var r = n.rows, i = n.autoResetPage, l = i === void 0 || i, v = n.manualExpandedKey, f = v === void 0 ? "expanded" : v, S = n.plugins, R = n.pageCount, T = n.paginateExpandedRows, I = T === void 0 || T, V = n.expandSubRows, W = V === void 0 || V, x = n.state, k = x.pageSize, H = x.pageIndex, X = x.expanded, U = x.globalFilter, ln = x.filters, Ln = x.groupBy, sn = x.sortBy, K = n.dispatch, Tn = n.data, en = n.manualPagination;
        hn(S, ["useGlobalFilter", "useFilters", "useGroupBy", "useSortBy", "useExpanded"], "usePagination");
        var Mn = An(l);
        Wn(function() {
          Mn() && K({ type: h.resetPage });
        }, [K, en ? null : Tn, U, ln, Ln, sn]);
        var xn = en ? R : Math.ceil(r.length / k), gn = C.useMemo(function() {
          return xn > 0 ? [].concat(new Array(xn)).fill(null).map(function(a, p) {
            return p;
          }) : [];
        }, [xn]), Sn = C.useMemo(function() {
          var a;
          if (en)
            a = r;
          else {
            var p = k * H, g = p + k;
            a = r.slice(p, g);
          }
          return I ? a : Re(a, { manualExpandedKey: f, expanded: X, expandSubRows: W });
        }, [W, X, f, en, H, k, I, r]), Vn = H > 0, Rn = xn === -1 ? Sn.length >= k : H < xn - 1, Gn = C.useCallback(function(a) {
          K({ type: h.gotoPage, pageIndex: a });
        }, [K]), e = C.useCallback(function() {
          return Gn(function(a) {
            return a - 1;
          });
        }, [Gn]), t = C.useCallback(function() {
          return Gn(function(a) {
            return a + 1;
          });
        }, [Gn]), u = C.useCallback(function(a) {
          K({ type: h.setPageSize, pageSize: a });
        }, [K]);
        Object.assign(n, { pageOptions: gn, pageCount: xn, page: Sn, canPreviousPage: Vn, canNextPage: Rn, gotoPage: Gn, previousPage: e, nextPage: t, setPageSize: u });
      }
      ht.pluginName = "usePagination", h.resetPivot = "resetPivot", h.togglePivot = "togglePivot";
      var St = function(n) {
        n.getPivotToggleProps = [Vo], n.stateReducers.push(Ko), n.useInstanceAfterData.push(qo), n.allColumns.push(zo), n.accessValue.push(_o), n.materializedColumns.push(no), n.materializedColumnsDeps.push(eo), n.visibleColumns.push(Xo), n.visibleColumnsDeps.push(Yo), n.useInstance.push(jo), n.prepareRow.push(Uo);
      };
      St.pluginName = "usePivotColumns";
      var Qt = [], Vo = function(n, r) {
        var i = r.header;
        return [n, { onClick: i.canPivot ? function(l) {
          l.persist(), i.togglePivot();
        } : void 0, style: { cursor: i.canPivot ? "pointer" : void 0 }, title: "Toggle Pivot" }];
      };
      function Ko(n, r, i, l) {
        if (r.type === h.init)
          return y({ pivotColumns: Qt }, n);
        if (r.type === h.resetPivot)
          return y({}, n, { pivotColumns: l.initialState.pivotColumns || Qt });
        if (r.type === h.togglePivot) {
          var v = r.columnId, f = r.value, S = f !== void 0 ? f : !n.pivotColumns.includes(v);
          return y({}, n, S ? { pivotColumns: [].concat(n.pivotColumns, [v]) } : { pivotColumns: n.pivotColumns.filter(function(R) {
            return R !== v;
          }) });
        }
      }
      function qo(n) {
        n.allColumns.forEach(function(r) {
          r.isPivotSource = n.state.pivotColumns.includes(r.id);
        });
      }
      function zo(n, r) {
        var i = r.instance;
        return n.forEach(function(l) {
          l.isPivotSource = i.state.pivotColumns.includes(l.id), l.uniqueValues = /* @__PURE__ */ new Set();
        }), n;
      }
      function _o(n, r) {
        var i = r.column;
        return i.uniqueValues && n !== void 0 && i.uniqueValues.add(n), n;
      }
      function no(n, r) {
        var i = r.instance, l = i.allColumns, v = i.state;
        if (!v.pivotColumns.length || !v.groupBy || !v.groupBy.length)
          return n;
        var f = v.pivotColumns.map(function(T) {
          return l.find(function(I) {
            return I.id === T;
          });
        }).filter(Boolean), S = l.filter(function(T) {
          return !T.isPivotSource && !v.groupBy.includes(T.id) && !v.pivotColumns.includes(T.id);
        }), R = Ce(function T(I, V, W) {
          I === void 0 && (I = 0), W === void 0 && (W = []);
          var x = f[I];
          return x ? Array.from(x.uniqueValues).sort().map(function(k) {
            var H = y({}, x, { Header: x.PivotHeader || typeof x.header == "string" ? x.Header + ": " + k : k, isPivotGroup: !0, parent: V, depth: I, id: V ? V.id + "." + x.id + "." + k : x.id + "." + k, pivotValue: k });
            return H.columns = T(I + 1, H, [].concat(W, [function(X) {
              return X.values[x.id] === k;
            }])), H;
          }) : S.map(function(k) {
            return y({}, k, { canPivot: !1, isPivoted: !0, parent: V, depth: I, id: "" + (V ? V.id + "." + k.id : k.id), accessor: function(H, X, U) {
              if (W.every(function(ln) {
                return ln(U);
              }))
                return U.values[k.id];
            } });
          });
        }());
        return [].concat(n, R);
      }
      function eo(n, r) {
        var i = r.instance.state, l = i.pivotColumns, v = i.groupBy;
        return [].concat(n, [l, v]);
      }
      function Xo(n, r) {
        var i = r.instance.state;
        return n = n.filter(function(l) {
          return !l.isPivotSource;
        }), i.pivotColumns.length && i.groupBy && i.groupBy.length && (n = n.filter(function(l) {
          return l.isGrouped || l.isPivoted;
        })), n;
      }
      function Yo(n, r) {
        var i = r.instance;
        return [].concat(n, [i.state.pivotColumns, i.state.groupBy]);
      }
      function jo(n) {
        var r = n.columns, i = n.allColumns, l = n.flatHeaders, v = n.getHooks, f = n.plugins, S = n.dispatch, R = n.autoResetPivot, T = R === void 0 || R, I = n.manaulPivot, V = n.disablePivot, W = n.defaultCanPivot;
        hn(f, ["useGroupBy"], "usePivotColumns");
        var x = An(n);
        i.forEach(function(H) {
          var X = H.accessor, U = H.defaultPivot, ln = H.disablePivot;
          H.canPivot = X ? Xn(H.canPivot, ln !== !0 && void 0, V !== !0 && void 0, !0) : Xn(H.canPivot, U, W, !1), H.canPivot && (H.togglePivot = function() {
            return n.togglePivot(H.id);
          }), H.Aggregated = H.Aggregated || H.Cell;
        }), l.forEach(function(H) {
          H.getPivotToggleProps = Cn(v().getPivotToggleProps, { instance: x(), header: H });
        });
        var k = An(T);
        Wn(function() {
          k() && S({ type: h.resetPivot });
        }, [S, I ? null : r]), Object.assign(n, { togglePivot: function(H, X) {
          S({ type: h.togglePivot, columnId: H, value: X });
        } });
      }
      function Uo(n) {
        n.allCells.forEach(function(r) {
          r.isPivoted = r.column.isPivoted;
        });
      }
      h.resetSelectedRows = "resetSelectedRows", h.toggleAllRowsSelected = "toggleAllRowsSelected", h.toggleRowSelected = "toggleRowSelected", h.toggleAllPageRowsSelected = "toggleAllPageRowsSelected";
      var to = function(n) {
        n.getToggleRowSelectedProps = [wt], n.getToggleAllRowsSelectedProps = [nt], n.getToggleAllPageRowsSelectedProps = [oo], n.stateReducers.push(Jo), n.useInstance.push(ao), n.prepareRow.push($o);
      };
      to.pluginName = "useRowSelect";
      var wt = function(n, r) {
        var i = r.instance, l = r.row, v = i.manualRowSelectedKey, f = v === void 0 ? "isSelected" : v;
        return [n, { onChange: function(S) {
          l.toggleRowSelected(S.target.checked);
        }, style: { cursor: "pointer" }, checked: !(!l.original || !l.original[f]) || l.isSelected, title: "Toggle Row Selected", indeterminate: l.isSomeSelected }];
      }, nt = function(n, r) {
        var i = r.instance;
        return [n, { onChange: function(l) {
          i.toggleAllRowsSelected(l.target.checked);
        }, style: { cursor: "pointer" }, checked: i.isAllRowsSelected, title: "Toggle All Rows Selected", indeterminate: !!(!i.isAllRowsSelected && Object.keys(i.state.selectedRowIds).length) }];
      }, oo = function(n, r) {
        var i = r.instance;
        return [n, { onChange: function(l) {
          i.toggleAllPageRowsSelected(l.target.checked);
        }, style: { cursor: "pointer" }, checked: i.isAllPageRowsSelected, title: "Toggle All Current Page Rows Selected", indeterminate: !!(!i.isAllPageRowsSelected && i.page.some(function(l) {
          var v = l.id;
          return i.state.selectedRowIds[v];
        })) }];
      };
      function Jo(n, r, i, l) {
        if (r.type === h.init)
          return y({ selectedRowIds: {} }, n);
        if (r.type === h.resetSelectedRows)
          return y({}, n, { selectedRowIds: l.initialState.selectedRowIds || {} });
        if (r.type === h.toggleAllRowsSelected) {
          var v = r.value, f = l.isAllRowsSelected, S = l.rowsById, R = l.nonGroupedRowsById, T = R === void 0 ? S : R, I = v !== void 0 ? v : !f, V = Object.assign({}, n.selectedRowIds);
          return I ? Object.keys(T).forEach(function(Gn) {
            V[Gn] = !0;
          }) : Object.keys(T).forEach(function(Gn) {
            delete V[Gn];
          }), y({}, n, { selectedRowIds: V });
        }
        if (r.type === h.toggleRowSelected) {
          var W = r.id, x = r.value, k = l.rowsById, H = l.selectSubRows, X = H === void 0 || H, U = l.getSubRows, ln = n.selectedRowIds[W], Ln = x !== void 0 ? x : !ln;
          if (ln === Ln)
            return n;
          var sn = y({}, n.selectedRowIds);
          return function Gn(e) {
            var t = k[e];
            if (t && (t.isGrouped || (Ln ? sn[e] = !0 : delete sn[e]), X && U(t)))
              return U(t).forEach(function(u) {
                return Gn(u.id);
              });
          }(W), y({}, n, { selectedRowIds: sn });
        }
        if (r.type === h.toggleAllPageRowsSelected) {
          var K = r.value, Tn = l.page, en = l.rowsById, Mn = l.selectSubRows, xn = Mn === void 0 || Mn, gn = l.isAllPageRowsSelected, Sn = l.getSubRows, Vn = K !== void 0 ? K : !gn, Rn = y({}, n.selectedRowIds);
          return Tn.forEach(function(Gn) {
            return function e(t) {
              var u = en[t];
              if (u.isGrouped || (Vn ? Rn[t] = !0 : delete Rn[t]), xn && Sn(u))
                return Sn(u).forEach(function(a) {
                  return e(a.id);
                });
            }(Gn.id);
          }), y({}, n, { selectedRowIds: Rn });
        }
        return n;
      }
      function ao(n) {
        var r = n.data, i = n.rows, l = n.getHooks, v = n.plugins, f = n.rowsById, S = n.nonGroupedRowsById, R = S === void 0 ? f : S, T = n.autoResetSelectedRows, I = T === void 0 || T, V = n.state.selectedRowIds, W = n.selectSubRows, x = W === void 0 || W, k = n.dispatch, H = n.page, X = n.getSubRows;
        hn(v, ["useFilters", "useGroupBy", "useSortBy", "useExpanded", "usePagination"], "useRowSelect");
        var U = C.useMemo(function() {
          var Sn = [];
          return i.forEach(function(Vn) {
            var Rn = x ? function Gn(e, t, u) {
              if (t[e.id])
                return !0;
              var a = u(e);
              if (a && a.length) {
                var p = !0, g = !1;
                return a.forEach(function(c) {
                  g && !p || (Gn(c, t, u) ? g = !0 : p = !1);
                }), !!p || !!g && null;
              }
              return !1;
            }(Vn, V, X) : !!V[Vn.id];
            Vn.isSelected = !!Rn, Vn.isSomeSelected = Rn === null, Rn && Sn.push(Vn);
          }), Sn;
        }, [i, x, V, X]), ln = !!(Object.keys(R).length && Object.keys(V).length), Ln = ln;
        ln && Object.keys(R).some(function(Sn) {
          return !V[Sn];
        }) && (ln = !1), ln || H && H.length && H.some(function(Sn) {
          var Vn = Sn.id;
          return !V[Vn];
        }) && (Ln = !1);
        var sn = An(I);
        Wn(function() {
          sn() && k({ type: h.resetSelectedRows });
        }, [k, r]);
        var K = C.useCallback(function(Sn) {
          return k({ type: h.toggleAllRowsSelected, value: Sn });
        }, [k]), Tn = C.useCallback(function(Sn) {
          return k({ type: h.toggleAllPageRowsSelected, value: Sn });
        }, [k]), en = C.useCallback(function(Sn, Vn) {
          return k({ type: h.toggleRowSelected, id: Sn, value: Vn });
        }, [k]), Mn = An(n), xn = Cn(l().getToggleAllRowsSelectedProps, { instance: Mn() }), gn = Cn(l().getToggleAllPageRowsSelectedProps, { instance: Mn() });
        Object.assign(n, { selectedFlatRows: U, isAllRowsSelected: ln, isAllPageRowsSelected: Ln, toggleRowSelected: en, toggleAllRowsSelected: K, getToggleAllRowsSelectedProps: xn, getToggleAllPageRowsSelectedProps: gn, toggleAllPageRowsSelected: Tn });
      }
      function $o(n, r) {
        var i = r.instance;
        n.toggleRowSelected = function(l) {
          return i.toggleRowSelected(n.id, l);
        }, n.getToggleRowSelectedProps = Cn(i.getHooks().getToggleRowSelectedProps, { instance: i, row: n });
      }
      var ro = function(n) {
        return {};
      }, uo = function(n) {
        return {};
      };
      h.setRowState = "setRowState", h.setCellState = "setCellState", h.resetRowState = "resetRowState";
      var Mt = function(n) {
        n.stateReducers.push(Zo), n.useInstance.push(io), n.prepareRow.push(Qo);
      };
      function Zo(n, r, i, l) {
        var v = l.initialRowStateAccessor, f = v === void 0 ? ro : v, S = l.initialCellStateAccessor, R = S === void 0 ? uo : S, T = l.rowsById;
        if (r.type === h.init)
          return y({ rowState: {} }, n);
        if (r.type === h.resetRowState)
          return y({}, n, { rowState: l.initialState.rowState || {} });
        if (r.type === h.setRowState) {
          var I, V = r.rowId, W = r.value, x = n.rowState[V] !== void 0 ? n.rowState[V] : f(T[V]);
          return y({}, n, { rowState: y({}, n.rowState, (I = {}, I[V] = Hn(W, x), I)) });
        }
        if (r.type === h.setCellState) {
          var k, H, X, U, ln, Ln = r.rowId, sn = r.columnId, K = r.value, Tn = n.rowState[Ln] !== void 0 ? n.rowState[Ln] : f(T[Ln]), en = (Tn == null || (k = Tn.cellState) == null ? void 0 : k[sn]) !== void 0 ? Tn.cellState[sn] : R((H = T[Ln]) == null || (X = H.cells) == null ? void 0 : X.find(function(Mn) {
            return Mn.column.id === sn;
          }));
          return y({}, n, { rowState: y({}, n.rowState, (ln = {}, ln[Ln] = y({}, Tn, { cellState: y({}, Tn.cellState || {}, (U = {}, U[sn] = Hn(K, en), U)) }), ln)) });
        }
      }
      function io(n) {
        var r = n.autoResetRowState, i = r === void 0 || r, l = n.data, v = n.dispatch, f = C.useCallback(function(T, I) {
          return v({ type: h.setRowState, rowId: T, value: I });
        }, [v]), S = C.useCallback(function(T, I, V) {
          return v({ type: h.setCellState, rowId: T, columnId: I, value: V });
        }, [v]), R = An(i);
        Wn(function() {
          R() && v({ type: h.resetRowState });
        }, [l]), Object.assign(n, { setRowState: f, setCellState: S });
      }
      function Qo(n, r) {
        var i = r.instance, l = i.initialRowStateAccessor, v = l === void 0 ? ro : l, f = i.initialCellStateAccessor, S = f === void 0 ? uo : f, R = i.state.rowState;
        n && (n.state = R[n.id] !== void 0 ? R[n.id] : v(n), n.setState = function(T) {
          return i.setRowState(n.id, T);
        }, n.cells.forEach(function(T) {
          n.state.cellState || (n.state.cellState = {}), T.state = n.state.cellState[T.column.id] !== void 0 ? n.state.cellState[T.column.id] : S(T), T.setState = function(I) {
            return i.setCellState(n.id, T.column.id, I);
          };
        }));
      }
      Mt.pluginName = "useRowState", h.resetColumnOrder = "resetColumnOrder", h.setColumnOrder = "setColumnOrder";
      var lo = function(n) {
        n.stateReducers.push(so), n.visibleColumnsDeps.push(function(r, i) {
          var l = i.instance;
          return [].concat(r, [l.state.columnOrder]);
        }), n.visibleColumns.push(co), n.useInstance.push(na);
      };
      function so(n, r, i, l) {
        return r.type === h.init ? y({ columnOrder: [] }, n) : r.type === h.resetColumnOrder ? y({}, n, { columnOrder: l.initialState.columnOrder || [] }) : r.type === h.setColumnOrder ? y({}, n, { columnOrder: Hn(r.columnOrder, n.columnOrder) }) : void 0;
      }
      function co(n, r) {
        var i = r.instance.state.columnOrder;
        if (!i || !i.length)
          return n;
        for (var l = [].concat(i), v = [].concat(n), f = [], S = function() {
          var R = l.shift(), T = v.findIndex(function(I) {
            return I.id === R;
          });
          T > -1 && f.push(v.splice(T, 1)[0]);
        }; v.length && l.length; )
          S();
        return [].concat(f, v);
      }
      function na(n) {
        var r = n.dispatch;
        n.setColumnOrder = C.useCallback(function(i) {
          return r({ type: h.setColumnOrder, columnOrder: i });
        }, [r]);
      }
      lo.pluginName = "useColumnOrder", un.canResize = !0, h.columnStartResizing = "columnStartResizing", h.columnResizing = "columnResizing", h.columnDoneResizing = "columnDoneResizing", h.resetResize = "resetResize";
      var yo = function(n) {
        n.getResizerProps = [ea], n.getHeaderProps.push({ style: { position: "relative" } }), n.stateReducers.push(ta), n.useInstance.push(aa), n.useInstanceBeforeDimensions.push(oa);
      }, ea = function(n, r) {
        var i = r.instance, l = r.header, v = i.dispatch, f = function(S, R) {
          var T = !1;
          if (S.type === "touchstart") {
            if (S.touches && S.touches.length > 1)
              return;
            T = !0;
          }
          var I, V, W = function(sn) {
            var K = [];
            return function Tn(en) {
              en.columns && en.columns.length && en.columns.map(Tn), K.push(en);
            }(sn), K;
          }(R).map(function(sn) {
            return [sn.id, sn.totalWidth];
          }), x = T ? Math.round(S.touches[0].clientX) : S.clientX, k = function() {
            window.cancelAnimationFrame(I), I = null, v({ type: h.columnDoneResizing });
          }, H = function() {
            window.cancelAnimationFrame(I), I = null, v({ type: h.columnResizing, clientX: V });
          }, X = function(sn) {
            V = sn, I || (I = window.requestAnimationFrame(H));
          }, U = { mouse: { moveEvent: "mousemove", moveHandler: function(sn) {
            return X(sn.clientX);
          }, upEvent: "mouseup", upHandler: function(sn) {
            document.removeEventListener("mousemove", U.mouse.moveHandler), document.removeEventListener("mouseup", U.mouse.upHandler), k();
          } }, touch: { moveEvent: "touchmove", moveHandler: function(sn) {
            return sn.cancelable && (sn.preventDefault(), sn.stopPropagation()), X(sn.touches[0].clientX), !1;
          }, upEvent: "touchend", upHandler: function(sn) {
            document.removeEventListener(U.touch.moveEvent, U.touch.moveHandler), document.removeEventListener(U.touch.upEvent, U.touch.moveHandler), k();
          } } }, ln = T ? U.touch : U.mouse, Ln = !!function() {
            if (typeof ge == "boolean")
              return ge;
            var sn = !1;
            try {
              var K = { get passive() {
                return sn = !0, !1;
              } };
              window.addEventListener("test", null, K), window.removeEventListener("test", null, K);
            } catch {
              sn = !1;
            }
            return ge = sn;
          }() && { passive: !1 };
          document.addEventListener(ln.moveEvent, ln.moveHandler, Ln), document.addEventListener(ln.upEvent, ln.upHandler, Ln), v({ type: h.columnStartResizing, columnId: R.id, columnWidth: R.totalWidth, headerIdWidths: W, clientX: x });
        };
        return [n, { onMouseDown: function(S) {
          return S.persist() || f(S, l);
        }, onTouchStart: function(S) {
          return S.persist() || f(S, l);
        }, style: { cursor: "col-resize" }, draggable: !1, role: "separator" }];
      };
      function ta(n, r) {
        if (r.type === h.init)
          return y({ columnResizing: { columnWidths: {} } }, n);
        if (r.type === h.resetResize)
          return y({}, n, { columnResizing: { columnWidths: {} } });
        if (r.type === h.columnStartResizing) {
          var i = r.clientX, l = r.columnId, v = r.columnWidth, f = r.headerIdWidths;
          return y({}, n, { columnResizing: y({}, n.columnResizing, { startX: i, headerIdWidths: f, columnWidth: v, isResizingColumn: l }) });
        }
        if (r.type === h.columnResizing) {
          var S = r.clientX, R = n.columnResizing, T = R.startX, I = R.columnWidth, V = R.headerIdWidths, W = (S - T) / I, x = {};
          return (V === void 0 ? [] : V).forEach(function(k) {
            var H = k[0], X = k[1];
            x[H] = Math.max(X + X * W, 0);
          }), y({}, n, { columnResizing: y({}, n.columnResizing, { columnWidths: y({}, n.columnResizing.columnWidths, {}, x) }) });
        }
        return r.type === h.columnDoneResizing ? y({}, n, { columnResizing: y({}, n.columnResizing, { startX: null, isResizingColumn: null }) }) : void 0;
      }
      yo.pluginName = "useResizeColumns";
      var oa = function(n) {
        var r = n.flatHeaders, i = n.disableResizing, l = n.getHooks, v = n.state.columnResizing, f = An(n);
        r.forEach(function(S) {
          var R = Xn(S.disableResizing !== !0 && void 0, i !== !0 && void 0, !0);
          S.canResize = R, S.width = v.columnWidths[S.id] || S.originalWidth || S.width, S.isResizing = v.isResizingColumn === S.id, R && (S.getResizerProps = Cn(l().getResizerProps, { instance: f(), header: S }));
        });
      };
      function aa(n) {
        var r = n.plugins, i = n.dispatch, l = n.autoResetResize, v = l === void 0 || l, f = n.columns;
        hn(r, ["useAbsoluteLayout"], "useResizeColumns");
        var S = An(v);
        Wn(function() {
          S() && i({ type: h.resetResize });
        }, [f]);
        var R = C.useCallback(function() {
          return i({ type: h.resetResize });
        }, [i]);
        Object.assign(n, { resetResizing: R });
      }
      var bt = { position: "absolute", top: 0 }, Co = function(n) {
        n.getTableBodyProps.push(ut), n.getRowProps.push(ut), n.getHeaderGroupProps.push(ut), n.getFooterGroupProps.push(ut), n.getHeaderProps.push(function(r, i) {
          var l = i.column;
          return [r, { style: y({}, bt, { left: l.totalLeft + "px", width: l.totalWidth + "px" }) }];
        }), n.getCellProps.push(function(r, i) {
          var l = i.cell;
          return [r, { style: y({}, bt, { left: l.column.totalLeft + "px", width: l.column.totalWidth + "px" }) }];
        }), n.getFooterProps.push(function(r, i) {
          var l = i.column;
          return [r, { style: y({}, bt, { left: l.totalLeft + "px", width: l.totalWidth + "px" }) }];
        });
      };
      Co.pluginName = "useAbsoluteLayout";
      var ut = function(n, r) {
        return [n, { style: { position: "relative", width: r.instance.totalColumnsWidth + "px" } }];
      }, At = { display: "inline-block", boxSizing: "border-box" }, Dt = function(n, r) {
        return [n, { style: { display: "flex", width: r.instance.totalColumnsWidth + "px" } }];
      }, po = function(n) {
        n.getRowProps.push(Dt), n.getHeaderGroupProps.push(Dt), n.getFooterGroupProps.push(Dt), n.getHeaderProps.push(function(r, i) {
          var l = i.column;
          return [r, { style: y({}, At, { width: l.totalWidth + "px" }) }];
        }), n.getCellProps.push(function(r, i) {
          var l = i.cell;
          return [r, { style: y({}, At, { width: l.column.totalWidth + "px" }) }];
        }), n.getFooterProps.push(function(r, i) {
          var l = i.column;
          return [r, { style: y({}, At, { width: l.totalWidth + "px" }) }];
        });
      };
      function Rt(n) {
        n.getTableProps.push(ra), n.getRowProps.push(Nt), n.getHeaderGroupProps.push(Nt), n.getFooterGroupProps.push(Nt), n.getHeaderProps.push(ua), n.getCellProps.push(ia), n.getFooterProps.push(la);
      }
      po.pluginName = "useBlockLayout", Rt.pluginName = "useFlexLayout";
      var ra = function(n, r) {
        return [n, { style: { minWidth: r.instance.totalColumnsMinWidth + "px" } }];
      }, Nt = function(n, r) {
        return [n, { style: { display: "flex", flex: "1 0 auto", minWidth: r.instance.totalColumnsMinWidth + "px" } }];
      }, ua = function(n, r) {
        var i = r.column;
        return [n, { style: { boxSizing: "border-box", flex: i.totalFlexWidth ? i.totalFlexWidth + " 0 auto" : void 0, minWidth: i.totalMinWidth + "px", width: i.totalWidth + "px" } }];
      }, ia = function(n, r) {
        var i = r.cell;
        return [n, { style: { boxSizing: "border-box", flex: i.column.totalFlexWidth + " 0 auto", minWidth: i.column.totalMinWidth + "px", width: i.column.totalWidth + "px" } }];
      }, la = function(n, r) {
        var i = r.column;
        return [n, { style: { boxSizing: "border-box", flex: i.totalFlexWidth ? i.totalFlexWidth + " 0 auto" : void 0, minWidth: i.totalMinWidth + "px", width: i.totalWidth + "px" } }];
      };
      function fo(n) {
        n.stateReducers.push(ho), n.getTableProps.push(go), n.getHeaderProps.push(mo), n.getRowProps.push(vo);
      }
      h.columnStartResizing = "columnStartResizing", h.columnResizing = "columnResizing", h.columnDoneResizing = "columnDoneResizing", h.resetResize = "resetResize", fo.pluginName = "useGridLayout";
      var go = function(n, r) {
        var i = r.instance;
        return [n, { style: { display: "grid", gridTemplateColumns: i.visibleColumns.map(function(l) {
          var v;
          return i.state.gridLayout.columnWidths[l.id] ? i.state.gridLayout.columnWidths[l.id] + "px" : (v = i.state.columnResizing) != null && v.isResizingColumn ? i.state.gridLayout.startWidths[l.id] + "px" : typeof l.width == "number" ? l.width + "px" : l.width;
        }).join(" ") } }];
      }, mo = function(n, r) {
        var i = r.column;
        return [n, { id: "header-cell-" + i.id, style: { position: "sticky", gridColumn: "span " + i.totalVisibleHeaderCount } }];
      }, vo = function(n, r) {
        var i = r.row;
        return i.isExpanded ? [n, { style: { gridColumn: "1 / " + (i.cells.length + 1) } }] : [n, {}];
      };
      function ho(n, r, i, l) {
        if (r.type === h.init)
          return y({ gridLayout: { columnWidths: {} } }, n);
        if (r.type === h.resetResize)
          return y({}, n, { gridLayout: { columnWidths: {} } });
        if (r.type === h.columnStartResizing) {
          var v = r.columnId, f = r.headerIdWidths, S = Tt(v);
          if (S !== void 0) {
            var R = l.visibleColumns.reduce(function(K, Tn) {
              var en;
              return y({}, K, ((en = {})[Tn.id] = Tt(Tn.id), en));
            }, {}), T = l.visibleColumns.reduce(function(K, Tn) {
              var en;
              return y({}, K, ((en = {})[Tn.id] = Tn.minWidth, en));
            }, {}), I = l.visibleColumns.reduce(function(K, Tn) {
              var en;
              return y({}, K, ((en = {})[Tn.id] = Tn.maxWidth, en));
            }, {}), V = f.map(function(K) {
              var Tn = K[0];
              return [Tn, Tt(Tn)];
            });
            return y({}, n, { gridLayout: y({}, n.gridLayout, { startWidths: R, minWidths: T, maxWidths: I, headerIdGridWidths: V, columnWidth: S }) });
          }
          return n;
        }
        if (r.type === h.columnResizing) {
          var W = r.clientX, x = n.columnResizing.startX, k = n.gridLayout, H = k.columnWidth, X = k.minWidths, U = k.maxWidths, ln = k.headerIdGridWidths, Ln = (W - x) / H, sn = {};
          return (ln === void 0 ? [] : ln).forEach(function(K) {
            var Tn = K[0], en = K[1];
            sn[Tn] = Math.min(Math.max(X[Tn], en + en * Ln), U[Tn]);
          }), y({}, n, { gridLayout: y({}, n.gridLayout, { columnWidths: y({}, n.gridLayout.columnWidths, {}, sn) }) });
        }
        return r.type === h.columnDoneResizing ? y({}, n, { gridLayout: y({}, n.gridLayout, { startWidths: {}, minWidths: {}, maxWidths: {} }) }) : void 0;
      }
      function Tt(n) {
        var r, i = (r = document.getElementById("header-cell-" + n)) == null ? void 0 : r.offsetWidth;
        if (i !== void 0)
          return i;
      }
      s._UNSTABLE_usePivotColumns = St, s.actions = h, s.defaultColumn = un, s.defaultGroupByFn = jt, s.defaultOrderByFn = Zt, s.defaultRenderer = pn, s.emptyRenderer = M, s.ensurePluginOrder = hn, s.flexRender = oe, s.functionalUpdate = Hn, s.loopHooks = qn, s.makePropGetter = Cn, s.makeRenderer = Dn, s.reduceHooks = fn, s.safeUseLayoutEffect = Un, s.useAbsoluteLayout = Co, s.useAsyncDebounce = function(n, r) {
        r === void 0 && (r = 0);
        var i = C.useRef({}), l = An(n), v = An(r);
        return C.useCallback(function() {
          var f = P(regeneratorRuntime.mark(function S() {
            var R, T, I, V = arguments;
            return regeneratorRuntime.wrap(function(W) {
              for (; ; )
                switch (W.prev = W.next) {
                  case 0:
                    for (R = V.length, T = new Array(R), I = 0; I < R; I++)
                      T[I] = V[I];
                    return i.current.promise || (i.current.promise = new Promise(function(x, k) {
                      i.current.resolve = x, i.current.reject = k;
                    })), i.current.timeout && clearTimeout(i.current.timeout), i.current.timeout = setTimeout(P(regeneratorRuntime.mark(function x() {
                      return regeneratorRuntime.wrap(function(k) {
                        for (; ; )
                          switch (k.prev = k.next) {
                            case 0:
                              return delete i.current.timeout, k.prev = 1, k.t0 = i.current, k.next = 5, l().apply(void 0, T);
                            case 5:
                              k.t1 = k.sent, k.t0.resolve.call(k.t0, k.t1), k.next = 12;
                              break;
                            case 9:
                              k.prev = 9, k.t2 = k.catch(1), i.current.reject(k.t2);
                            case 12:
                              return k.prev = 12, delete i.current.promise, k.finish(12);
                            case 15:
                            case "end":
                              return k.stop();
                          }
                      }, x, null, [[1, 9, 12, 15]]);
                    })), v()), W.abrupt("return", i.current.promise);
                  case 5:
                  case "end":
                    return W.stop();
                }
            }, S);
          }));
          return function() {
            return f.apply(this, arguments);
          };
        }(), [l, v]);
      }, s.useBlockLayout = po, s.useColumnOrder = lo, s.useExpanded = Te, s.useFilters = xt, s.useFlexLayout = Rt, s.useGetLatest = An, s.useGlobalFilter = ft, s.useGridLayout = fo, s.useGroupBy = vt, s.useMountedLayoutEffect = Wn, s.usePagination = ht, s.useResizeColumns = yo, s.useRowSelect = to, s.useRowState = Mt, s.useSortBy = $t, s.useTable = function(n) {
        for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), l = 1; l < r; l++)
          i[l - 1] = arguments[l];
        n = ue(n), i = [be].concat(i);
        var v = C.useRef({}), f = An(v.current);
        Object.assign(f(), y({}, n, { plugins: i, hooks: Ne() })), i.filter(Boolean).forEach(function(c) {
          c(f().hooks);
        });
        var S = An(f().hooks);
        f().getHooks = S, delete f().hooks, Object.assign(f(), fn(S().useOptions, ue(n)));
        var R = f(), T = R.data, I = R.columns, V = R.initialState, W = R.defaultColumn, x = R.getSubRows, k = R.getRowId, H = R.stateReducer, X = R.useControlledState, U = An(H), ln = C.useCallback(function(c, w) {
          if (!w.type)
            throw console.info({ action: w }), new Error("Unknown Action 👆");
          return [].concat(S().stateReducers, Array.isArray(U()) ? U() : [U()]).reduce(function(D, N) {
            return N(D, w, c, f()) || D;
          }, c);
        }, [S, U, f]), Ln = C.useReducer(ln, void 0, function() {
          return ln(V, { type: h.init });
        }), sn = Ln[0], K = Ln[1], Tn = fn([].concat(S().useControlledState, [X]), sn, { instance: f() });
        Object.assign(f(), { state: Tn, dispatch: K });
        var en = C.useMemo(function() {
          return Kn(fn(S().columns, I, { instance: f() }));
        }, [S, f, I].concat(fn(S().columnsDeps, [], { instance: f() })));
        f().columns = en;
        var Mn = C.useMemo(function() {
          return fn(S().allColumns, Ce(en), { instance: f() }).map(Qn);
        }, [en, S, f].concat(fn(S().allColumnsDeps, [], { instance: f() })));
        f().allColumns = Mn;
        var xn = C.useMemo(function() {
          for (var c = [], w = [], D = {}, N = [].concat(Mn); N.length; ) {
            var L = N.shift();
            Fe({ data: T, rows: c, flatRows: w, rowsById: D, column: L, getRowId: k, getSubRows: x, accessValueHooks: S().accessValue, getInstance: f });
          }
          return [c, w, D];
        }, [Mn, T, k, x, S, f]), gn = xn[0], Sn = xn[1], Vn = xn[2];
        Object.assign(f(), { rows: gn, initialRows: [].concat(gn), flatRows: Sn, rowsById: Vn }), qn(S().useInstanceAfterData, f());
        var Rn = C.useMemo(function() {
          return fn(S().visibleColumns, Mn, { instance: f() }).map(function(c) {
            return tn(c, W);
          });
        }, [S, Mn, f, W].concat(fn(S().visibleColumnsDeps, [], { instance: f() })));
        Mn = C.useMemo(function() {
          var c = [].concat(Rn);
          return Mn.forEach(function(w) {
            c.find(function(D) {
              return D.id === w.id;
            }) || c.push(w);
          }), c;
        }, [Mn, Rn]), f().allColumns = Mn;
        var Gn = C.useMemo(function() {
          return fn(S().headerGroups, dn(Rn, W), f());
        }, [S, Rn, W, f].concat(fn(S().headerGroupsDeps, [], { instance: f() })));
        f().headerGroups = Gn;
        var e = C.useMemo(function() {
          return Gn.length ? Gn[0].headers : [];
        }, [Gn]);
        f().headers = e, f().flatHeaders = Gn.reduce(function(c, w) {
          return [].concat(c, w.headers);
        }, []), qn(S().useInstanceBeforeDimensions, f());
        var t = Rn.filter(function(c) {
          return c.isVisible;
        }).map(function(c) {
          return c.id;
        }).sort().join("_");
        Rn = C.useMemo(function() {
          return Rn.filter(function(c) {
            return c.isVisible;
          });
        }, [Rn, t]), f().visibleColumns = Rn;
        var u = fe(e), a = u[0], p = u[1], g = u[2];
        return f().totalColumnsMinWidth = a, f().totalColumnsWidth = p, f().totalColumnsMaxWidth = g, qn(S().useInstance, f()), [].concat(f().flatHeaders, f().allColumns).forEach(function(c) {
          c.render = Dn(f(), c), c.getHeaderProps = Cn(S().getHeaderProps, { instance: f(), column: c }), c.getFooterProps = Cn(S().getFooterProps, { instance: f(), column: c });
        }), f().headerGroups = C.useMemo(function() {
          return Gn.filter(function(c, w) {
            return c.headers = c.headers.filter(function(D) {
              return D.headers ? function N(L) {
                return L.filter(function(q) {
                  return q.headers ? N(q.headers) : q.isVisible;
                }).length;
              }(D.headers) : D.isVisible;
            }), !!c.headers.length && (c.getHeaderGroupProps = Cn(S().getHeaderGroupProps, { instance: f(), headerGroup: c, index: w }), c.getFooterGroupProps = Cn(S().getFooterGroupProps, { instance: f(), headerGroup: c, index: w }), !0);
          });
        }, [Gn, f, S]), f().footerGroups = [].concat(f().headerGroups).reverse(), f().prepareRow = C.useCallback(function(c) {
          c.getRowProps = Cn(S().getRowProps, { instance: f(), row: c }), c.allCells = Mn.map(function(w) {
            var D = c.values[w.id], N = { column: w, row: c, value: D };
            return N.getCellProps = Cn(S().getCellProps, { instance: f(), cell: N }), N.render = Dn(f(), w, { row: c, cell: N, value: D }), N;
          }), c.cells = Rn.map(function(w) {
            return c.allCells.find(function(D) {
              return D.column.id === w.id;
            });
          }), qn(S().prepareRow, c, { instance: f() });
        }, [S, f, Mn, Rn]), f().getTableProps = Cn(S().getTableProps, { instance: f() }), f().getTableBodyProps = Cn(S().getTableBodyProps, { instance: f() }), qn(S().useFinalInstance, f()), f();
      }, Object.defineProperty(s, "__esModule", { value: !0 });
    });
  }(Ao, Ao.exports)), Ao.exports;
}
var Do = { exports: {} }, ja;
function qu() {
  return ja || (ja = 1, function(o, d) {
    (function(s, C) {
      C(d, A);
    })(ir, function(s, C) {
      C = C && Object.prototype.hasOwnProperty.call(C, "default") ? C.default : C;
      function b(e, t, u, a, p, g, c) {
        try {
          var w = e[g](c), D = w.value;
        } catch (N) {
          u(N);
          return;
        }
        w.done ? t(D) : Promise.resolve(D).then(a, p);
      }
      function P(e) {
        return function() {
          var t = this, u = arguments;
          return new Promise(function(a, p) {
            var g = e.apply(t, u);
            function c(D) {
              b(g, a, p, c, w, "next", D);
            }
            function w(D) {
              b(g, a, p, c, w, "throw", D);
            }
            c(void 0);
          });
        };
      }
      function y() {
        return y = Object.assign || function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var u = arguments[t];
            for (var a in u)
              Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
          }
          return e;
        }, y.apply(this, arguments);
      }
      function B(e, t) {
        if (e == null)
          return {};
        var u = {}, a = Object.keys(e), p, g;
        for (g = 0; g < a.length; g++)
          p = a[g], !(t.indexOf(p) >= 0) && (u[p] = e[p]);
        return u;
      }
      function nn(e, t) {
        if (typeof e != "object" || e === null)
          return e;
        var u = e[Symbol.toPrimitive];
        if (u !== void 0) {
          var a = u.call(e, t || "default");
          if (typeof a != "object")
            return a;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t === "string" ? String : Number)(e);
      }
      function h(e) {
        var t = nn(e, "string");
        return typeof t == "symbol" ? t : String(t);
      }
      var pn = "Renderer Error ☝️", M = {
        init: "init"
      }, un = function(t) {
        var u = t.value, a = u === void 0 ? "" : u;
        return a;
      }, Nn = function() {
        return C.createElement(C.Fragment, null, " ");
      }, Cn = {
        Cell: un,
        width: 150,
        minWidth: 0,
        maxWidth: Number.MAX_SAFE_INTEGER
      };
      function fn() {
        for (var e = arguments.length, t = new Array(e), u = 0; u < e; u++)
          t[u] = arguments[u];
        return t.reduce(function(a, p) {
          var g = p.style, c = p.className, w = B(p, ["style", "className"]);
          return a = y({}, a, {}, w), g && (a.style = a.style ? y({}, a.style || {}, {}, g || {}) : g), c && (a.className = a.className ? a.className + " " + c : c), a.className === "" && delete a.className, a;
        }, {});
      }
      function qn(e, t, u) {
        return typeof t == "function" ? qn({}, t(e, u)) : Array.isArray(t) ? fn.apply(void 0, [e].concat(t)) : fn(e, t);
      }
      var hn = function(t, u) {
        return u === void 0 && (u = {}), function(a) {
          return a === void 0 && (a = {}), [].concat(t, [a]).reduce(function(p, g) {
            return qn(p, g, y({}, u, {
              userProps: a
            }));
          }, {});
        };
      }, Hn = function(t, u, a, p) {
        return a === void 0 && (a = {}), t.reduce(function(g, c) {
          var w = c(g, a);
          if (!p && typeof w > "u")
            throw console.info(c), new Error("React Table: A reducer hook ☝️ just returned undefined! This is not allowed.");
          return w;
        }, u);
      }, An = function(t, u, a) {
        return a === void 0 && (a = {}), t.forEach(function(p) {
          var g = p(u, a);
          if (typeof g < "u")
            throw console.info(p, g), new Error("React Table: A loop-type hook ☝️ just returned a value! This is not allowed.");
        });
      };
      function Un(e, t, u, a) {
        if (a)
          throw new Error('Defining plugins in the "after" section of ensurePluginOrder is no longer supported (see plugin ' + u + ")");
        var p = e.findIndex(function(g) {
          return g.pluginName === u;
        });
        if (p === -1)
          throw new Error('The plugin "' + u + `" was not found in the plugin list!
This usually means you need to need to name your plugin hook by setting the 'pluginName' property of the hook function, eg:

  ` + u + ".pluginName = '" + u + `'
`);
        t.forEach(function(g) {
          var c = e.findIndex(function(w) {
            return w.pluginName === g;
          });
          if (c > -1 && c > p)
            throw new Error("React Table: The " + u + " plugin hook must be placed after the " + g + " plugin hook!");
        });
      }
      function Wn(e, t) {
        return typeof e == "function" ? e(t) : e;
      }
      function Dn(e) {
        var t = C.useRef();
        return t.current = e, C.useCallback(function() {
          return t.current;
        }, []);
      }
      var oe = typeof document < "u" ? C.useLayoutEffect : C.useEffect;
      function Kn(e, t) {
        var u = C.useRef(!1);
        oe(function() {
          u.current && e(), u.current = !0;
        }, t);
      }
      function Ce(e, t) {
        t === void 0 && (t = 0);
        var u = C.useRef({}), a = Dn(e), p = Dn(t);
        return C.useCallback(
          /* @__PURE__ */ function() {
            var g = P(
              /* @__PURE__ */ regeneratorRuntime.mark(function c() {
                var w, D, N, L = arguments;
                return regeneratorRuntime.wrap(function(O) {
                  for (; ; )
                    switch (O.prev = O.next) {
                      case 0:
                        for (w = L.length, D = new Array(w), N = 0; N < w; N++)
                          D[N] = L[N];
                        return u.current.promise || (u.current.promise = new Promise(function(G, _) {
                          u.current.resolve = G, u.current.reject = _;
                        })), u.current.timeout && clearTimeout(u.current.timeout), u.current.timeout = setTimeout(
                          /* @__PURE__ */ P(
                            /* @__PURE__ */ regeneratorRuntime.mark(function G() {
                              return regeneratorRuntime.wrap(function(E) {
                                for (; ; )
                                  switch (E.prev = E.next) {
                                    case 0:
                                      return delete u.current.timeout, E.prev = 1, E.t0 = u.current, E.next = 5, a().apply(void 0, D);
                                    case 5:
                                      E.t1 = E.sent, E.t0.resolve.call(E.t0, E.t1), E.next = 12;
                                      break;
                                    case 9:
                                      E.prev = 9, E.t2 = E.catch(1), u.current.reject(E.t2);
                                    case 12:
                                      return E.prev = 12, delete u.current.promise, E.finish(12);
                                    case 15:
                                    case "end":
                                      return E.stop();
                                  }
                              }, G, null, [[1, 9, 12, 15]]);
                            })
                          ),
                          p()
                        ), O.abrupt("return", u.current.promise);
                      case 5:
                      case "end":
                        return O.stop();
                    }
                }, c);
              })
            );
            return function() {
              return g.apply(this, arguments);
            };
          }(),
          [a, p]
        );
      }
      function Qn(e, t, u) {
        return u === void 0 && (u = {}), function(a, p) {
          p === void 0 && (p = {});
          var g = typeof a == "string" ? t[a] : a;
          if (typeof g > "u")
            throw console.info(t), new Error(pn);
          return tn(g, y({}, e, {
            column: t
          }, u, {}, p));
        };
      }
      function tn(e, t) {
        return dn(e) ? C.createElement(e, t) : e;
      }
      function dn(e) {
        return zn(e) || typeof e == "function" || Xn(e);
      }
      function zn(e) {
        return typeof e == "function" && function() {
          var t = Object.getPrototypeOf(e);
          return t.prototype && t.prototype.isReactComponent;
        }();
      }
      function Xn(e) {
        return typeof e == "object" && typeof e.$$typeof == "symbol" && ["react.memo", "react.forward_ref"].includes(e.$$typeof.description);
      }
      function Jn(e, t, u) {
        return u === void 0 && (u = 0), e.map(function(a) {
          return a = y({}, a, {
            parent: t,
            depth: u
          }), Re(a), a.columns && (a.columns = Jn(a.columns, a, u + 1)), a;
        });
      }
      function Pe(e) {
        return Be(e, "columns");
      }
      function Re(e) {
        var t = e.id, u = e.accessor, a = e.Header;
        if (typeof u == "string") {
          t = t || u;
          var p = u.split(".");
          u = function(c) {
            return ge(c, p);
          };
        }
        if (!t && typeof a == "string" && a && (t = a), !t && e.columns)
          throw console.error(e), new Error('A column ID (or unique "Header" value) is required!');
        if (!t)
          throw console.error(e), new Error("A column ID (or string accessor) is required!");
        return Object.assign(e, {
          id: t,
          accessor: u
        }), e;
      }
      function Me(e, t) {
        if (!t)
          throw new Error();
        return Object.assign(e, y({
          // Make sure there is a fallback header, just in case
          Header: Nn,
          Footer: Nn
        }, Cn, {}, t, {}, e)), Object.assign(e, {
          originalWidth: e.width
        }), e;
      }
      function Ie(e, t, u) {
        u === void 0 && (u = function() {
          return {};
        });
        for (var a = [], p = e, g = 0, c = function() {
          return g++;
        }, w = function() {
          var N = {
            headers: []
          }, L = [], q = p.some(function(O) {
            return O.parent;
          });
          p.forEach(function(O) {
            var G = [].concat(L).reverse()[0], _;
            if (q) {
              if (O.parent)
                _ = y({}, O.parent, {
                  originalId: O.parent.id,
                  id: O.parent.id + "_" + c(),
                  headers: [O]
                }, u(O));
              else {
                var E = O.id + "_placeholder";
                _ = Me(y({
                  originalId: E,
                  id: O.id + "_placeholder_" + c(),
                  placeholderOf: O,
                  headers: [O]
                }, u(O)), t);
              }
              G && G.originalId === _.originalId ? G.headers.push(O) : L.push(_);
            }
            N.headers.push(O);
          }), a.push(N), p = L;
        }; p.length; )
          w();
        return a.reverse();
      }
      var de = /* @__PURE__ */ new Map();
      function ge(e, t, u) {
        if (!t)
          return e;
        var a = typeof t == "function" ? t : JSON.stringify(t), p = de.get(a) || function() {
          var c = be(t);
          return de.set(a, c), c;
        }(), g;
        try {
          g = p.reduce(function(c, w) {
            return c[w];
          }, e);
        } catch {
        }
        return typeof g < "u" ? g : u;
      }
      function ae() {
        for (var e = arguments.length, t = new Array(e), u = 0; u < e; u++)
          t[u] = arguments[u];
        for (var a = 0; a < t.length; a += 1)
          if (typeof t[a] < "u")
            return t[a];
      }
      function Oe(e) {
        if (typeof e == "function")
          return e;
      }
      function Be(e, t) {
        var u = [], a = function p(g) {
          g.forEach(function(c) {
            c[t] ? p(c[t]) : u.push(c);
          });
        };
        return a(e), u;
      }
      function F(e, t) {
        var u = t.manualExpandedKey, a = t.expanded, p = t.expandSubRows, g = p === void 0 ? !0 : p, c = [], w = function D(N, L) {
          L === void 0 && (L = !0), N.isExpanded = N.original && N.original[u] || a[N.id], N.canExpand = N.subRows && !!N.subRows.length, L && c.push(N), N.subRows && N.subRows.length && N.isExpanded && N.subRows.forEach(function(q) {
            return D(q, g);
          });
        };
        return e.forEach(function(D) {
          return w(D);
        }), c;
      }
      function z(e, t, u) {
        return Oe(e) || t[e] || u[e] || u.text;
      }
      function rn(e, t, u) {
        return e ? e(t, u) : typeof t > "u";
      }
      function on() {
        throw new Error("React-Table: You have not called prepareRow(row) one or more rows you are attempting to render.");
      }
      var Fn = null;
      function Yn() {
        if (typeof Fn == "boolean")
          return Fn;
        var e = !1;
        try {
          var t = {
            get passive() {
              return e = !0, !1;
            }
          };
          window.addEventListener("test", null, t), window.removeEventListener("test", null, t);
        } catch {
          e = !1;
        }
        return Fn = e, Fn;
      }
      var Se = /\[/g, Ne = /\]/g;
      function be(e) {
        return Ae(e).map(function(t) {
          return String(t).replace(".", "_");
        }).join(".").replace(Se, ".").replace(Ne, "").split(".");
      }
      function Ae(e, t) {
        if (t === void 0 && (t = []), !Array.isArray(e))
          t.push(e);
        else
          for (var u = 0; u < e.length; u += 1)
            Ae(e[u], t);
        return t;
      }
      var Le = function(t) {
        return y({
          role: "table"
        }, t);
      }, _e = function(t) {
        return y({
          role: "rowgroup"
        }, t);
      }, pe = function(t, u) {
        var a = u.column;
        return y({
          key: "header_" + a.id,
          colSpan: a.totalVisibleHeaderCount,
          role: "columnheader"
        }, t);
      }, ce = function(t, u) {
        var a = u.column;
        return y({
          key: "footer_" + a.id,
          colSpan: a.totalVisibleHeaderCount
        }, t);
      }, me = function(t, u) {
        var a = u.index;
        return y({
          key: "headerGroup_" + a,
          role: "row"
        }, t);
      }, ve = function(t, u) {
        var a = u.index;
        return y({
          key: "footerGroup_" + a
        }, t);
      }, Xe = function(t, u) {
        var a = u.row;
        return y({
          key: "row_" + a.id,
          role: "row"
        }, t);
      }, Q = function(t, u) {
        var a = u.cell;
        return y({
          key: "cell_" + a.row.id + "_" + a.column.id,
          role: "cell"
        }, t);
      };
      function In() {
        return {
          useOptions: [],
          stateReducers: [],
          useControlledState: [],
          columns: [],
          columnsDeps: [],
          allColumns: [],
          allColumnsDeps: [],
          accessValue: [],
          materializedColumns: [],
          materializedColumnsDeps: [],
          useInstanceAfterData: [],
          visibleColumns: [],
          visibleColumnsDeps: [],
          headerGroups: [],
          headerGroupsDeps: [],
          useInstanceBeforeDimensions: [],
          useInstance: [],
          prepareRow: [],
          getTableProps: [Le],
          getTableBodyProps: [_e],
          getHeaderGroupProps: [me],
          getFooterGroupProps: [ve],
          getHeaderProps: [pe],
          getFooterProps: [ce],
          getRowProps: [Xe],
          getCellProps: [Q],
          useFinalInstance: []
        };
      }
      M.resetHiddenColumns = "resetHiddenColumns", M.toggleHideColumn = "toggleHideColumn", M.setHiddenColumns = "setHiddenColumns", M.toggleHideAllColumns = "toggleHideAllColumns";
      var ee = function(t) {
        t.getToggleHiddenProps = [ue], t.getToggleHideAllColumnsProps = [fe], t.stateReducers.push(Fe), t.useInstanceBeforeDimensions.push(Te), t.headerGroupsDeps.push(function(u, a) {
          var p = a.instance;
          return [].concat(u, [p.state.hiddenColumns]);
        }), t.useInstance.push(Ye);
      };
      ee.pluginName = "useColumnVisibility";
      var ue = function(t, u) {
        var a = u.column;
        return [t, {
          onChange: function(g) {
            a.toggleHidden(!g.target.checked);
          },
          style: {
            cursor: "pointer"
          },
          checked: a.isVisible,
          title: "Toggle Column Visible"
        }];
      }, fe = function(t, u) {
        var a = u.instance;
        return [t, {
          onChange: function(g) {
            a.toggleHideAllColumns(!g.target.checked);
          },
          style: {
            cursor: "pointer"
          },
          checked: !a.allColumnsHidden && !a.state.hiddenColumns.length,
          title: "Toggle All Columns Hidden",
          indeterminate: !a.allColumnsHidden && a.state.hiddenColumns.length
        }];
      };
      function Fe(e, t, u, a) {
        if (t.type === M.init)
          return y({
            hiddenColumns: []
          }, e);
        if (t.type === M.resetHiddenColumns)
          return y({}, e, {
            hiddenColumns: a.initialState.hiddenColumns || []
          });
        if (t.type === M.toggleHideColumn) {
          var p = typeof t.value < "u" ? t.value : !e.hiddenColumns.includes(t.columnId), g = p ? [].concat(e.hiddenColumns, [t.columnId]) : e.hiddenColumns.filter(function(w) {
            return w !== t.columnId;
          });
          return y({}, e, {
            hiddenColumns: g
          });
        }
        if (t.type === M.setHiddenColumns)
          return y({}, e, {
            hiddenColumns: Wn(t.value, e.hiddenColumns)
          });
        if (t.type === M.toggleHideAllColumns) {
          var c = typeof t.value < "u" ? t.value : !e.hiddenColumns.length;
          return y({}, e, {
            hiddenColumns: c ? a.allColumns.map(function(w) {
              return w.id;
            }) : []
          });
        }
      }
      function Te(e) {
        var t = e.headers, u = e.state.hiddenColumns, a = C.useRef(!1);
        a.current;
        var p = function c(w, D) {
          w.isVisible = D && !u.includes(w.id);
          var N = 0;
          return w.headers && w.headers.length ? w.headers.forEach(function(L) {
            return N += c(L, w.isVisible);
          }) : N = w.isVisible ? 1 : 0, w.totalVisibleHeaderCount = N, N;
        }, g = 0;
        t.forEach(function(c) {
          return g += p(c, !0);
        });
      }
      function Ye(e) {
        var t = e.columns, u = e.flatHeaders, a = e.dispatch, p = e.allColumns, g = e.getHooks, c = e.state.hiddenColumns, w = e.autoResetHiddenColumns, D = w === void 0 ? !0 : w, N = Dn(e), L = p.length === c.length, q = C.useCallback(function(Z, yn) {
          return a({
            type: M.toggleHideColumn,
            columnId: Z,
            value: yn
          });
        }, [a]), O = C.useCallback(function(Z) {
          return a({
            type: M.setHiddenColumns,
            value: Z
          });
        }, [a]), G = C.useCallback(function(Z) {
          return a({
            type: M.toggleHideAllColumns,
            value: Z
          });
        }, [a]), _ = hn(g().getToggleHideAllColumnsProps, {
          instance: N()
        });
        u.forEach(function(Z) {
          Z.toggleHidden = function(yn) {
            a({
              type: M.toggleHideColumn,
              columnId: Z.id,
              value: yn
            });
          }, Z.getToggleHiddenProps = hn(g().getToggleHiddenProps, {
            instance: N(),
            column: Z
          });
        });
        var E = Dn(D);
        Kn(function() {
          E() && a({
            type: M.resetHiddenColumns
          });
        }, [a, t]), Object.assign(e, {
          allColumnsHidden: L,
          toggleHideColumn: q,
          setHiddenColumns: O,
          toggleHideAllColumns: G,
          getToggleHideAllColumnsProps: _
        });
      }
      var je = {}, Ue = {}, We = function(t, u, a) {
        return t;
      }, Je = function(t, u) {
        return t.subRows || [];
      }, xe = function(t, u, a) {
        return "" + (a ? [a.id, u].join(".") : u);
      }, Ge = function(t) {
        return t;
      };
      function He(e) {
        var t = e.initialState, u = t === void 0 ? je : t, a = e.defaultColumn, p = a === void 0 ? Ue : a, g = e.getSubRows, c = g === void 0 ? Je : g, w = e.getRowId, D = w === void 0 ? xe : w, N = e.stateReducer, L = N === void 0 ? We : N, q = e.useControlledState, O = q === void 0 ? Ge : q, G = B(e, ["initialState", "defaultColumn", "getSubRows", "getRowId", "stateReducer", "useControlledState"]);
        return y({}, G, {
          initialState: u,
          defaultColumn: p,
          getSubRows: c,
          getRowId: D,
          stateReducer: L,
          useControlledState: O
        });
      }
      var at = function(t) {
        for (var u = arguments.length, a = new Array(u > 1 ? u - 1 : 0), p = 1; p < u; p++)
          a[p - 1] = arguments[p];
        t = He(t), a = [ee].concat(a);
        var g = C.useRef({}), c = Dn(g.current);
        Object.assign(c(), y({}, t, {
          plugins: a,
          hooks: In()
        })), a.filter(Boolean).forEach(function(mn) {
          mn(c().hooks);
        });
        var w = Dn(c().hooks);
        c().getHooks = w, delete c().hooks, Object.assign(c(), Hn(w().useOptions, He(t)));
        var D = c(), N = D.data, L = D.columns, q = D.initialState, O = D.defaultColumn, G = D.getSubRows, _ = D.getRowId, E = D.stateReducer, Z = D.useControlledState, yn = Dn(E), vn = C.useCallback(function(mn, $n) {
          if (!$n.type)
            throw console.info({
              action: $n
            }), new Error("Unknown Action 👆");
          return [].concat(w().stateReducers, Array.isArray(yn()) ? yn() : [yn()]).reduce(function(re, he) {
            return he(re, $n, mn, c()) || re;
          }, mn);
        }, [w, yn, c]), j = C.useReducer(vn, void 0, function() {
          return vn(q, {
            type: M.init
          });
        }), Pn = j[0], Bn = j[1], J = Hn([].concat(w().useControlledState, [Z]), Pn, {
          instance: c()
        });
        Object.assign(c(), {
          state: J,
          dispatch: Bn
        });
        var Y = C.useMemo(function() {
          return Jn(Hn(w().columns, L, {
            instance: c()
          }));
        }, [w, c, L].concat(Hn(w().columnsDeps, [], {
          instance: c()
        })));
        c().columns = Y;
        var $ = C.useMemo(function() {
          return Hn(w().allColumns, Pe(Y), {
            instance: c()
          }).map(Re);
        }, [Y, w, c].concat(Hn(w().allColumnsDeps, [], {
          instance: c()
        })));
        c().allColumns = $;
        var cn = C.useMemo(function() {
          for (var mn = [], $n = [], re = {}, he = [].concat($); he.length; ) {
            var le = he.shift();
            Bt({
              data: N,
              rows: mn,
              flatRows: $n,
              rowsById: re,
              column: le,
              getRowId: _,
              getSubRows: G,
              accessValueHooks: w().accessValue,
              getInstance: c
            });
          }
          return [mn, $n, re];
        }, [$, N, _, G, w, c]), kn = cn[0], En = cn[1], _n = cn[2];
        Object.assign(c(), {
          rows: kn,
          initialRows: [].concat(kn),
          flatRows: En,
          rowsById: _n
          // materializedColumns,
        }), An(w().useInstanceAfterData, c());
        var an = C.useMemo(function() {
          return Hn(w().visibleColumns, $, {
            instance: c()
          }).map(function(mn) {
            return Me(mn, O);
          });
        }, [w, $, c, O].concat(Hn(w().visibleColumnsDeps, [], {
          instance: c()
        })));
        $ = C.useMemo(function() {
          var mn = [].concat(an);
          return $.forEach(function($n) {
            mn.find(function(re) {
              return re.id === $n.id;
            }) || mn.push($n);
          }), mn;
        }, [$, an]), c().allColumns = $;
        {
          var ie = $.filter(function(mn, $n) {
            return $.findIndex(function(re) {
              return re.id === mn.id;
            }) !== $n;
          });
          if (ie.length)
            throw console.info($), new Error('Duplicate columns were found with ids: "' + ie.map(function(mn) {
              return mn.id;
            }).join(", ") + '" in the columns array above');
        }
        var On = C.useMemo(function() {
          return Hn(w().headerGroups, Ie(an, O), c());
        }, [w, an, O, c].concat(Hn(w().headerGroupsDeps, [], {
          instance: c()
        })));
        c().headerGroups = On;
        var wn = C.useMemo(function() {
          return On.length ? On[0].headers : [];
        }, [On]);
        c().headers = wn, c().flatHeaders = On.reduce(function(mn, $n) {
          return [].concat(mn, $n.headers);
        }, []), An(w().useInstanceBeforeDimensions, c());
        var bn = an.filter(function(mn) {
          return mn.isVisible;
        }).map(function(mn) {
          return mn.id;
        }).sort().join("_");
        an = C.useMemo(
          function() {
            return an.filter(function(mn) {
              return mn.isVisible;
            });
          },
          // eslint-disable-next-line react-hooks/exhaustive-deps
          [an, bn]
        ), c().visibleColumns = an;
        var jn = dt(wn), se = jn[0], et = jn[1], Pt = jn[2];
        return c().totalColumnsMinWidth = se, c().totalColumnsWidth = et, c().totalColumnsMaxWidth = Pt, An(w().useInstance, c()), [].concat(c().flatHeaders, c().allColumns).forEach(function(mn) {
          mn.render = Qn(c(), mn), mn.getHeaderProps = hn(w().getHeaderProps, {
            instance: c(),
            column: mn
          }), mn.getFooterProps = hn(w().getFooterProps, {
            instance: c(),
            column: mn
          });
        }), c().headerGroups = C.useMemo(function() {
          return On.filter(function(mn, $n) {
            return mn.headers = mn.headers.filter(function(re) {
              var he = function le(Ve) {
                return Ve.filter(function(ye) {
                  return ye.headers ? le(ye.headers) : ye.isVisible;
                }).length;
              };
              return re.headers ? he(re.headers) : re.isVisible;
            }), mn.headers.length ? (mn.getHeaderGroupProps = hn(w().getHeaderGroupProps, {
              instance: c(),
              headerGroup: mn,
              index: $n
            }), mn.getFooterGroupProps = hn(w().getFooterGroupProps, {
              instance: c(),
              headerGroup: mn,
              index: $n
            }), !0) : !1;
          });
        }, [On, c, w]), c().footerGroups = [].concat(c().headerGroups).reverse(), c().prepareRow = C.useCallback(function(mn) {
          mn.getRowProps = hn(w().getRowProps, {
            instance: c(),
            row: mn
          }), mn.allCells = $.map(function($n) {
            var re = mn.values[$n.id], he = {
              column: $n,
              row: mn,
              value: re
            };
            return he.getCellProps = hn(w().getCellProps, {
              instance: c(),
              cell: he
            }), he.render = Qn(c(), $n, {
              row: mn,
              cell: he,
              value: re
            }), he;
          }), mn.cells = an.map(function($n) {
            return mn.allCells.find(function(re) {
              return re.column.id === $n.id;
            });
          }), An(w().prepareRow, mn, {
            instance: c()
          });
        }, [w, c, $, an]), c().getTableProps = hn(w().getTableProps, {
          instance: c()
        }), c().getTableBodyProps = hn(w().getTableBodyProps, {
          instance: c()
        }), An(w().useFinalInstance, c()), c();
      };
      function dt(e, t) {
        t === void 0 && (t = 0);
        var u = 0, a = 0, p = 0, g = 0;
        return e.forEach(function(c) {
          var w = c.headers;
          if (c.totalLeft = t, w && w.length) {
            var D = dt(w, t), N = D[0], L = D[1], q = D[2], O = D[3];
            c.totalMinWidth = N, c.totalWidth = L, c.totalMaxWidth = q, c.totalFlexWidth = O;
          } else
            c.totalMinWidth = c.minWidth, c.totalWidth = Math.min(Math.max(c.minWidth, c.width), c.maxWidth), c.totalMaxWidth = c.maxWidth, c.totalFlexWidth = c.canResize ? c.totalWidth : 0;
          c.isVisible && (t += c.totalWidth, u += c.totalMinWidth, a += c.totalWidth, p += c.totalMaxWidth, g += c.totalFlexWidth);
        }), [u, a, p, g];
      }
      function Bt(e) {
        var t = e.data, u = e.rows, a = e.flatRows, p = e.rowsById, g = e.column, c = e.getRowId, w = e.getSubRows, D = e.accessValueHooks, N = e.getInstance, L = function q(O, G, _, E, Z) {
          _ === void 0 && (_ = 0);
          var yn = O, vn = c(O, G, E), j = p[vn];
          if (j)
            j.subRows && j.originalSubRows.forEach(function(Bn, J) {
              return q(Bn, J, _ + 1, j);
            });
          else if (j = {
            id: vn,
            original: yn,
            index: G,
            depth: _,
            cells: [{}]
            // This is a dummy cell
          }, j.cells.map = on, j.cells.filter = on, j.cells.forEach = on, j.cells[0].getCellProps = on, j.values = {}, Z.push(j), a.push(j), p[vn] = j, j.originalSubRows = w(O, G), j.originalSubRows) {
            var Pn = [];
            j.originalSubRows.forEach(function(Bn, J) {
              return q(Bn, J, _ + 1, j, Pn);
            }), j.subRows = Pn;
          }
          g.accessor && (j.values[g.id] = g.accessor(O, G, j, Z, t)), j.values[g.id] = Hn(D, j.values[g.id], {
            row: j,
            column: g,
            instance: N()
          }, !0);
        };
        t.forEach(function(q, O) {
          return L(q, O, 0, void 0, u);
        });
      }
      M.resetExpanded = "resetExpanded", M.toggleRowExpanded = "toggleRowExpanded", M.toggleAllRowsExpanded = "toggleAllRowsExpanded";
      var pt = function(t) {
        t.getToggleAllRowsExpandedProps = [Ft], t.getToggleRowExpandedProps = [Ht], t.stateReducers.push(Wt), t.useInstance.push($e), t.prepareRow.push(xt);
      };
      pt.pluginName = "useExpanded";
      var Ft = function(t, u) {
        var a = u.instance;
        return [t, {
          onClick: function(g) {
            a.toggleAllRowsExpanded();
          },
          style: {
            cursor: "pointer"
          },
          title: "Toggle All Rows Expanded"
        }];
      }, Ht = function(t, u) {
        var a = u.row;
        return [t, {
          onClick: function() {
            a.toggleRowExpanded();
          },
          style: {
            cursor: "pointer"
          },
          title: "Toggle Row Expanded"
        }];
      };
      function Wt(e, t, u, a) {
        if (t.type === M.init)
          return y({
            expanded: {}
          }, e);
        if (t.type === M.resetExpanded)
          return y({}, e, {
            expanded: a.initialState.expanded || {}
          });
        if (t.type === M.toggleAllRowsExpanded) {
          var p = t.value, g = a.rowsById, c = Object.keys(g).length === Object.keys(e.expanded).length, w = typeof p < "u" ? p : !c;
          if (w) {
            var D = {};
            return Object.keys(g).forEach(function(Z) {
              D[Z] = !0;
            }), y({}, e, {
              expanded: D
            });
          }
          return y({}, e, {
            expanded: {}
          });
        }
        if (t.type === M.toggleRowExpanded) {
          var N = t.id, L = t.value, q = e.expanded[N], O = typeof L < "u" ? L : !q;
          if (!q && O) {
            var G;
            return y({}, e, {
              expanded: y({}, e.expanded, (G = {}, G[N] = !0, G))
            });
          } else if (q && !O) {
            var _ = e.expanded;
            _[N];
            var E = B(_, [N].map(h));
            return y({}, e, {
              expanded: E
            });
          } else
            return e;
        }
      }
      function $e(e) {
        var t = e.data, u = e.rows, a = e.rowsById, p = e.manualExpandedKey, g = p === void 0 ? "expanded" : p, c = e.paginateExpandedRows, w = c === void 0 ? !0 : c, D = e.expandSubRows, N = D === void 0 ? !0 : D, L = e.autoResetExpanded, q = L === void 0 ? !0 : L, O = e.getHooks, G = e.plugins, _ = e.state.expanded, E = e.dispatch;
        Un(G, ["useSortBy", "useGroupBy", "usePivotColumns", "useGlobalFilter"], "useExpanded");
        var Z = Dn(q), yn = !!(Object.keys(a).length && Object.keys(_).length);
        yn && Object.keys(a).some(function($) {
          return !_[$];
        }) && (yn = !1), Kn(function() {
          Z() && E({
            type: M.resetExpanded
          });
        }, [E, t]);
        var vn = C.useCallback(function($, cn) {
          E({
            type: M.toggleRowExpanded,
            id: $,
            value: cn
          });
        }, [E]), j = C.useCallback(function($) {
          return E({
            type: M.toggleAllRowsExpanded,
            value: $
          });
        }, [E]), Pn = C.useMemo(function() {
          return w ? F(u, {
            manualExpandedKey: g,
            expanded: _,
            expandSubRows: N
          }) : u;
        }, [w, u, g, _, N]), Bn = C.useMemo(function() {
          return ko(_);
        }, [_]), J = Dn(e), Y = hn(O().getToggleAllRowsExpandedProps, {
          instance: J()
        });
        Object.assign(e, {
          preExpandedRows: u,
          expandedRows: Pn,
          rows: Pn,
          expandedDepth: Bn,
          isAllRowsExpanded: yn,
          toggleRowExpanded: vn,
          toggleAllRowsExpanded: j,
          getToggleAllRowsExpandedProps: Y
        });
      }
      function xt(e, t) {
        var u = t.instance.getHooks, a = t.instance;
        e.toggleRowExpanded = function(p) {
          return a.toggleRowExpanded(e.id, p);
        }, e.getToggleRowExpandedProps = hn(u().getToggleRowExpandedProps, {
          instance: a,
          row: e
        });
      }
      function ko(e) {
        var t = 0;
        return Object.keys(e).forEach(function(u) {
          var a = u.split(".");
          t = Math.max(t, a.length);
        }), t;
      }
      var Gt = function(t, u, a) {
        return t = t.filter(function(p) {
          return u.some(function(g) {
            var c = p.values[g];
            return String(c).toLowerCase().includes(String(a).toLowerCase());
          });
        }), t;
      };
      Gt.autoRemove = function(e) {
        return !e;
      };
      var ft = function(t, u, a) {
        return t.filter(function(p) {
          return u.some(function(g) {
            var c = p.values[g];
            return c !== void 0 ? String(c).toLowerCase() === String(a).toLowerCase() : !0;
          });
        });
      };
      ft.autoRemove = function(e) {
        return !e;
      };
      var Vt = function(t, u, a) {
        return t.filter(function(p) {
          return u.some(function(g) {
            var c = p.values[g];
            return c !== void 0 ? String(c) === String(a) : !0;
          });
        });
      };
      Vt.autoRemove = function(e) {
        return !e;
      };
      var Kt = function(t, u, a) {
        return t.filter(function(p) {
          return u.some(function(g) {
            var c = p.values[g];
            return c.includes(a);
          });
        });
      };
      Kt.autoRemove = function(e) {
        return !e || !e.length;
      };
      var gt = function(t, u, a) {
        return t.filter(function(p) {
          return u.some(function(g) {
            var c = p.values[g];
            return c && c.length && a.every(function(w) {
              return c.includes(w);
            });
          });
        });
      };
      gt.autoRemove = function(e) {
        return !e || !e.length;
      };
      var mt = function(t, u, a) {
        return t.filter(function(p) {
          return u.some(function(g) {
            var c = p.values[g];
            return c && c.length && a.some(function(w) {
              return c.includes(w);
            });
          });
        });
      };
      mt.autoRemove = function(e) {
        return !e || !e.length;
      };
      var qt = function(t, u, a) {
        return t.filter(function(p) {
          return u.some(function(g) {
            var c = p.values[g];
            return a.includes(c);
          });
        });
      };
      qt.autoRemove = function(e) {
        return !e || !e.length;
      };
      var zt = function(t, u, a) {
        return t.filter(function(p) {
          return u.some(function(g) {
            var c = p.values[g];
            return c === a;
          });
        });
      };
      zt.autoRemove = function(e) {
        return typeof e > "u";
      };
      var vt = function(t, u, a) {
        return t.filter(function(p) {
          return u.some(function(g) {
            var c = p.values[g];
            return c == a;
          });
        });
      };
      vt.autoRemove = function(e) {
        return e == null;
      };
      var _t = function(t, u, a) {
        var p = a || [], g = p[0], c = p[1];
        if (g = typeof g == "number" ? g : -1 / 0, c = typeof c == "number" ? c : 1 / 0, g > c) {
          var w = g;
          g = c, c = w;
        }
        return t.filter(function(D) {
          return u.some(function(N) {
            var L = D.values[N];
            return L >= g && L <= c;
          });
        });
      };
      _t.autoRemove = function(e) {
        return !e || typeof e[0] != "number" && typeof e[1] != "number";
      };
      var Ze = /* @__PURE__ */ Object.freeze({
        __proto__: null,
        text: Gt,
        exactText: ft,
        exactTextCase: Vt,
        includes: Kt,
        includesAll: gt,
        includesSome: mt,
        includesValue: qt,
        exact: zt,
        equals: vt,
        between: _t
      });
      M.resetFilters = "resetFilters", M.setFilter = "setFilter", M.setAllFilters = "setAllFilters";
      var Xt = function(t) {
        t.stateReducers.push(Eo), t.useInstance.push(Oo);
      };
      Xt.pluginName = "useFilters";
      function Eo(e, t, u, a) {
        if (t.type === M.init)
          return y({
            filters: []
          }, e);
        if (t.type === M.resetFilters)
          return y({}, e, {
            filters: a.initialState.filters || []
          });
        if (t.type === M.setFilter) {
          var p = t.columnId, g = t.filterValue, c = a.allColumns, w = a.filterTypes, D = c.find(function(E) {
            return E.id === p;
          });
          if (!D)
            throw new Error("React-Table: Could not find a column with id: " + p);
          var N = z(D.filter, w || {}, Ze), L = e.filters.find(function(E) {
            return E.id === p;
          }), q = Wn(g, L && L.value);
          return rn(N.autoRemove, q, D) ? y({}, e, {
            filters: e.filters.filter(function(E) {
              return E.id !== p;
            })
          }) : L ? y({}, e, {
            filters: e.filters.map(function(E) {
              return E.id === p ? {
                id: p,
                value: q
              } : E;
            })
          }) : y({}, e, {
            filters: [].concat(e.filters, [{
              id: p,
              value: q
            }])
          });
        }
        if (t.type === M.setAllFilters) {
          var O = t.filters, G = a.allColumns, _ = a.filterTypes;
          return y({}, e, {
            // Filter out undefined values
            filters: Wn(O, e.filters).filter(function(E) {
              var Z = G.find(function(vn) {
                return vn.id === E.id;
              }), yn = z(Z.filter, _ || {}, Ze);
              return !rn(yn.autoRemove, E.value, Z);
            })
          });
        }
      }
      function Oo(e) {
        var t = e.data, u = e.rows, a = e.flatRows, p = e.rowsById, g = e.allColumns, c = e.filterTypes, w = e.manualFilters, D = e.defaultCanFilter, N = D === void 0 ? !1 : D, L = e.disableFilters, q = e.state.filters, O = e.dispatch, G = e.autoResetFilters, _ = G === void 0 ? !0 : G, E = C.useCallback(function(J, Y) {
          O({
            type: M.setFilter,
            columnId: J,
            filterValue: Y
          });
        }, [O]), Z = C.useCallback(function(J) {
          O({
            type: M.setAllFilters,
            filters: J
          });
        }, [O]);
        g.forEach(function(J) {
          var Y = J.id, $ = J.accessor, cn = J.defaultCanFilter, kn = J.disableFilters;
          J.canFilter = $ ? ae(kn === !0 ? !1 : void 0, L === !0 ? !1 : void 0, !0) : ae(cn, N, !1), J.setFilter = function(_n) {
            return E(J.id, _n);
          };
          var En = q.find(function(_n) {
            return _n.id === Y;
          });
          J.filterValue = En && En.value;
        });
        var yn = C.useMemo(function() {
          if (w || !q.length)
            return [u, a, p];
          var J = [], Y = {}, $ = function cn(kn, En) {
            En === void 0 && (En = 0);
            var _n = kn;
            return _n = q.reduce(function(an, ie) {
              var On = ie.id, wn = ie.value, bn = g.find(function(se) {
                return se.id === On;
              });
              if (!bn)
                return an;
              En === 0 && (bn.preFilteredRows = an);
              var jn = z(bn.filter, c || {}, Ze);
              return jn ? (bn.filteredRows = jn(an, [On], wn), bn.filteredRows) : (console.warn("Could not find a valid 'column.filter' for column with the ID: " + bn.id + "."), an);
            }, kn), _n.forEach(function(an) {
              J.push(an), Y[an.id] = an, an.subRows && (an.subRows = an.subRows && an.subRows.length > 0 ? cn(an.subRows, En + 1) : an.subRows);
            }), _n;
          };
          return [$(u), J, Y];
        }, [w, q, u, a, p, g, c]), vn = yn[0], j = yn[1], Pn = yn[2];
        C.useMemo(function() {
          var J = g.filter(function(Y) {
            return !q.find(function($) {
              return $.id === Y.id;
            });
          });
          J.forEach(function(Y) {
            Y.preFilteredRows = vn, Y.filteredRows = vn;
          });
        }, [vn, q, g]);
        var Bn = Dn(_);
        Kn(function() {
          Bn() && O({
            type: M.resetFilters
          });
        }, [O, w ? null : t]), Object.assign(e, {
          preFilteredRows: u,
          preFilteredFlatRows: a,
          preFilteredRowsById: p,
          filteredRows: vn,
          filteredFlatRows: j,
          filteredRowsById: Pn,
          rows: vn,
          flatRows: j,
          rowsById: Pn,
          setFilter: E,
          setAllFilters: Z
        });
      }
      M.resetGlobalFilter = "resetGlobalFilter", M.setGlobalFilter = "setGlobalFilter";
      var Yt = function(t) {
        t.stateReducers.push(jt), t.useInstance.push(Ut);
      };
      Yt.pluginName = "useGlobalFilter";
      function jt(e, t, u, a) {
        if (t.type === M.resetGlobalFilter)
          return y({}, e, {
            globalFilter: a.initialState.globalFilter || void 0
          });
        if (t.type === M.setGlobalFilter) {
          var p = t.filterValue, g = a.userFilterTypes, c = z(a.globalFilter, g || {}, Ze), w = Wn(p, e.globalFilter);
          if (rn(c.autoRemove, w)) {
            e.globalFilter;
            var D = B(e, ["globalFilter"]);
            return D;
          }
          return y({}, e, {
            globalFilter: w
          });
        }
      }
      function Ut(e) {
        var t = e.data, u = e.rows, a = e.flatRows, p = e.rowsById, g = e.allColumns, c = e.filterTypes, w = e.globalFilter, D = e.manualGlobalFilter, N = e.state.globalFilter, L = e.dispatch, q = e.autoResetGlobalFilter, O = q === void 0 ? !0 : q, G = e.disableGlobalFilter, _ = C.useCallback(function(Pn) {
          L({
            type: M.setGlobalFilter,
            filterValue: Pn
          });
        }, [L]), E = C.useMemo(function() {
          if (D || typeof N > "u")
            return [u, a, p];
          var Pn = [], Bn = {}, J = z(w, c || {}, Ze);
          if (!J)
            return console.warn("Could not find a valid 'globalFilter' option."), u;
          g.forEach(function(cn) {
            var kn = cn.disableGlobalFilter;
            cn.canFilter = ae(kn === !0 ? !1 : void 0, G === !0 ? !1 : void 0, !0);
          });
          var Y = g.filter(function(cn) {
            return cn.canFilter === !0;
          }), $ = function cn(kn) {
            return kn = J(kn, Y.map(function(En) {
              return En.id;
            }), N), kn.forEach(function(En) {
              Pn.push(En), Bn[En.id] = En, En.subRows = En.subRows && En.subRows.length ? cn(En.subRows) : En.subRows;
            }), kn;
          };
          return [$(u), Pn, Bn];
        }, [D, N, w, c, g, u, a, p, G]), Z = E[0], yn = E[1], vn = E[2], j = Dn(O);
        Kn(function() {
          j() && L({
            type: M.resetGlobalFilter
          });
        }, [L, D ? null : t]), Object.assign(e, {
          preGlobalFilteredRows: u,
          preGlobalFilteredFlatRows: a,
          preGlobalFilteredRowsById: p,
          globalFilteredRows: Z,
          globalFilteredFlatRows: yn,
          globalFilteredRowsById: vn,
          rows: Z,
          flatRows: yn,
          rowsById: vn,
          setGlobalFilter: _,
          disableGlobalFilter: G
        });
      }
      function rt(e, t) {
        return t.reduce(function(u, a) {
          return u + (typeof a == "number" ? a : 0);
        }, 0);
      }
      function Qe(e) {
        var t = e[0] || 0;
        return e.forEach(function(u) {
          typeof u == "number" && (t = Math.min(t, u));
        }), t;
      }
      function Jt(e) {
        var t = e[0] || 0;
        return e.forEach(function(u) {
          typeof u == "number" && (t = Math.max(t, u));
        }), t;
      }
      function Bo(e) {
        var t = e[0] || 0, u = e[0] || 0;
        return e.forEach(function(a) {
          typeof a == "number" && (t = Math.min(t, a), u = Math.max(u, a));
        }), t + ".." + u;
      }
      function $t(e) {
        return rt(null, e) / e.length;
      }
      function Fo(e) {
        if (!e.length)
          return null;
        var t = Math.floor(e.length / 2), u = [].concat(e).sort(function(a, p) {
          return a - p;
        });
        return e.length % 2 !== 0 ? u[t] : (u[t - 1] + u[t]) / 2;
      }
      function Ho(e) {
        return Array.from(new Set(e).values());
      }
      function Wo(e) {
        return new Set(e).size;
      }
      function Zt(e) {
        return e.length;
      }
      var ht = /* @__PURE__ */ Object.freeze({
        __proto__: null,
        sum: rt,
        min: Qe,
        max: Jt,
        minMax: Bo,
        average: $t,
        median: Fo,
        unique: Ho,
        uniqueCount: Wo,
        count: Zt
      }), xo = [], Go = {};
      M.resetGroupBy = "resetGroupBy", M.setGroupBy = "setGroupBy", M.toggleGroupBy = "toggleGroupBy";
      var St = function(t) {
        t.getGroupByToggleProps = [Qt], t.stateReducers.push(Vo), t.visibleColumnsDeps.push(function(u, a) {
          var p = a.instance;
          return [].concat(u, [p.state.groupBy]);
        }), t.visibleColumns.push(Ko), t.useInstance.push(zo), t.prepareRow.push(_o);
      };
      St.pluginName = "useGroupBy";
      var Qt = function(t, u) {
        var a = u.header;
        return [t, {
          onClick: a.canGroupBy ? function(p) {
            p.persist(), a.toggleGroupBy();
          } : void 0,
          style: {
            cursor: a.canGroupBy ? "pointer" : void 0
          },
          title: "Toggle GroupBy"
        }];
      };
      function Vo(e, t, u, a) {
        if (t.type === M.init)
          return y({
            groupBy: []
          }, e);
        if (t.type === M.resetGroupBy)
          return y({}, e, {
            groupBy: a.initialState.groupBy || []
          });
        if (t.type === M.setGroupBy) {
          var p = t.value;
          return y({}, e, {
            groupBy: p
          });
        }
        if (t.type === M.toggleGroupBy) {
          var g = t.columnId, c = t.value, w = typeof c < "u" ? c : !e.groupBy.includes(g);
          return w ? y({}, e, {
            groupBy: [].concat(e.groupBy, [g])
          }) : y({}, e, {
            groupBy: e.groupBy.filter(function(D) {
              return D !== g;
            })
          });
        }
      }
      function Ko(e, t) {
        var u = t.instance.state.groupBy, a = u.map(function(g) {
          return e.find(function(c) {
            return c.id === g;
          });
        }).filter(Boolean), p = e.filter(function(g) {
          return !u.includes(g.id);
        });
        return e = [].concat(a, p), e.forEach(function(g) {
          g.isGrouped = u.includes(g.id), g.groupedIndex = u.indexOf(g.id);
        }), e;
      }
      var qo = {};
      function zo(e) {
        var t = e.data, u = e.rows, a = e.flatRows, p = e.rowsById, g = e.allColumns, c = e.flatHeaders, w = e.groupByFn, D = w === void 0 ? no : w, N = e.manualGroupBy, L = e.aggregations, q = L === void 0 ? qo : L, O = e.plugins, G = e.state.groupBy, _ = e.dispatch, E = e.autoResetGroupBy, Z = E === void 0 ? !0 : E, yn = e.disableGroupBy, vn = e.defaultCanGroupBy, j = e.getHooks;
        Un(O, ["useColumnOrder", "useFilters"], "useGroupBy");
        var Pn = Dn(e);
        g.forEach(function(wn) {
          var bn = wn.accessor, jn = wn.defaultGroupBy, se = wn.disableGroupBy;
          wn.canGroupBy = bn ? ae(wn.canGroupBy, se === !0 ? !1 : void 0, yn === !0 ? !1 : void 0, !0) : ae(wn.canGroupBy, jn, vn, !1), wn.canGroupBy && (wn.toggleGroupBy = function() {
            return e.toggleGroupBy(wn.id);
          }), wn.Aggregated = wn.Aggregated || wn.Cell;
        });
        var Bn = C.useCallback(function(wn, bn) {
          _({
            type: M.toggleGroupBy,
            columnId: wn,
            value: bn
          });
        }, [_]), J = C.useCallback(function(wn) {
          _({
            type: M.setGroupBy,
            value: wn
          });
        }, [_]);
        c.forEach(function(wn) {
          wn.getGroupByToggleProps = hn(j().getGroupByToggleProps, {
            instance: Pn(),
            header: wn
          });
        });
        var Y = C.useMemo(function() {
          if (N || !G.length)
            return [u, a, p, xo, Go, a, p];
          var wn = G.filter(function(le) {
            return g.find(function(Ve) {
              return Ve.id === le;
            });
          }), bn = function(Ve, ye, So) {
            var Ke = {};
            return g.forEach(function(te) {
              if (wn.includes(te.id)) {
                Ke[te.id] = ye[0] ? ye[0].values[te.id] : null;
                return;
              }
              var wo = typeof te.aggregate == "function" ? te.aggregate : q[te.aggregate] || ht[te.aggregate];
              if (wo) {
                var it = ye.map(function(tt) {
                  return tt.values[te.id];
                }), sa = Ve.map(function(tt) {
                  var qe = tt.values[te.id];
                  if (!So && te.aggregateValue) {
                    var ze = typeof te.aggregateValue == "function" ? te.aggregateValue : q[te.aggregateValue] || ht[te.aggregateValue];
                    if (!ze)
                      throw console.info({
                        column: te
                      }), new Error("React Table: Invalid column.aggregateValue option for column listed above");
                    qe = ze(qe, tt, te);
                  }
                  return qe;
                });
                Ke[te.id] = wo(sa, it);
              } else {
                if (te.aggregate)
                  throw console.info({
                    column: te
                  }), new Error("React Table: Invalid column.aggregate option for column listed above");
                Ke[te.id] = null;
              }
            }), Ke;
          }, jn = [], se = {}, et = [], Pt = {}, mn = [], $n = {}, re = function le(Ve, ye, So) {
            if (ye === void 0 && (ye = 0), ye === wn.length)
              return Ve.map(function(it) {
                return y({}, it, {
                  depth: ye
                });
              });
            var Ke = wn[ye], te = D(Ve, Ke), wo = Object.entries(te).map(function(it, sa) {
              var tt = it[0], qe = it[1], ze = Ke + ":" + tt;
              ze = So ? So + ">" + ze : ze;
              var Na = le(qe, ye + 1, ze), Ta = ye ? Be(qe, "leafRows") : qe, vr = bn(Ta, qe, ye), hr = {
                id: ze,
                isGrouped: !0,
                groupByID: Ke,
                groupByVal: tt,
                values: vr,
                subRows: Na,
                leafRows: Ta,
                depth: ye,
                index: sa
              };
              return Na.forEach(function(ke) {
                jn.push(ke), se[ke.id] = ke, ke.isGrouped ? (et.push(ke), Pt[ke.id] = ke) : (mn.push(ke), $n[ke.id] = ke);
              }), hr;
            });
            return wo;
          }, he = re(u);
          return he.forEach(function(le) {
            jn.push(le), se[le.id] = le, le.isGrouped ? (et.push(le), Pt[le.id] = le) : (mn.push(le), $n[le.id] = le);
          }), [he, jn, se, et, Pt, mn, $n];
        }, [N, G, u, a, p, g, q, D]), $ = Y[0], cn = Y[1], kn = Y[2], En = Y[3], _n = Y[4], an = Y[5], ie = Y[6], On = Dn(Z);
        Kn(function() {
          On() && _({
            type: M.resetGroupBy
          });
        }, [_, N ? null : t]), Object.assign(e, {
          preGroupedRows: u,
          preGroupedFlatRow: a,
          preGroupedRowsById: p,
          groupedRows: $,
          groupedFlatRows: cn,
          groupedRowsById: kn,
          onlyGroupedFlatRows: En,
          onlyGroupedRowsById: _n,
          nonGroupedFlatRows: an,
          nonGroupedRowsById: ie,
          rows: $,
          flatRows: cn,
          rowsById: kn,
          toggleGroupBy: Bn,
          setGroupBy: J
        });
      }
      function _o(e) {
        e.allCells.forEach(function(t) {
          var u;
          t.isGrouped = t.column.isGrouped && t.column.id === e.groupByID, t.isPlaceholder = !t.isGrouped && t.column.isGrouped, t.isAggregated = !t.isGrouped && !t.isPlaceholder && ((u = e.subRows) == null ? void 0 : u.length);
        });
      }
      function no(e, t) {
        return e.reduce(function(u, a, p) {
          var g = "" + a.values[t];
          return u[g] = Array.isArray(u[g]) ? u[g] : [], u[g].push(a), u;
        }, {});
      }
      var eo = /([0-9]+)/gm, Xo = function(t, u, a) {
        var p = nt(t, u, a), g = p[0], c = p[1];
        for (g = oo(g), c = oo(c), g = g.split(eo).filter(Boolean), c = c.split(eo).filter(Boolean); g.length && c.length; ) {
          var w = g.shift(), D = c.shift(), N = parseInt(w, 10), L = parseInt(D, 10), q = [N, L].sort();
          if (isNaN(q[0])) {
            if (w > D)
              return 1;
            if (D > w)
              return -1;
            continue;
          }
          if (isNaN(q[1]))
            return isNaN(N) ? -1 : 1;
          if (N > L)
            return 1;
          if (L > N)
            return -1;
        }
        return g.length - c.length;
      };
      function Yo(e, t, u) {
        var a = nt(e, t, u), p = a[0], g = a[1];
        return p = p.getTime(), g = g.getTime(), wt(p, g);
      }
      function jo(e, t, u) {
        var a = nt(e, t, u), p = a[0], g = a[1];
        return wt(p, g);
      }
      function Uo(e, t, u) {
        var a = nt(e, t, u), p = a[0], g = a[1];
        for (p = p.split("").filter(Boolean), g = g.split("").filter(Boolean); p.length && g.length; ) {
          var c = p.shift(), w = g.shift(), D = c.toLowerCase(), N = w.toLowerCase();
          if (D > N)
            return 1;
          if (N > D)
            return -1;
          if (c > w)
            return 1;
          if (w > c)
            return -1;
        }
        return p.length - g.length;
      }
      function to(e, t, u) {
        var a = nt(e, t, u), p = a[0], g = a[1], c = /[^0-9.]/gi;
        return p = Number(String(p).replace(c, "")), g = Number(String(g).replace(c, "")), wt(p, g);
      }
      function wt(e, t) {
        return e === t ? 0 : e > t ? 1 : -1;
      }
      function nt(e, t, u) {
        return [e.values[u], t.values[u]];
      }
      function oo(e) {
        return typeof e == "number" ? isNaN(e) || e === 1 / 0 || e === -1 / 0 ? "" : String(e) : typeof e == "string" ? e : "";
      }
      var Jo = /* @__PURE__ */ Object.freeze({
        __proto__: null,
        alphanumeric: Xo,
        datetime: Yo,
        basic: jo,
        string: Uo,
        number: to
      });
      M.resetSortBy = "resetSortBy", M.setSortBy = "setSortBy", M.toggleSortBy = "toggleSortBy", M.clearSortBy = "clearSortBy", Cn.sortType = "alphanumeric", Cn.sortDescFirst = !1;
      var ao = function(t) {
        t.getSortByToggleProps = [$o], t.stateReducers.push(ro), t.useInstance.push(uo);
      };
      ao.pluginName = "useSortBy";
      var $o = function(t, u) {
        var a = u.instance, p = u.column, g = a.isMultiSortEvent, c = g === void 0 ? function(w) {
          return w.shiftKey;
        } : g;
        return [t, {
          onClick: p.canSort ? function(w) {
            w.persist(), p.toggleSortBy(void 0, !a.disableMultiSort && c(w));
          } : void 0,
          style: {
            cursor: p.canSort ? "pointer" : void 0
          },
          title: p.canSort ? "Toggle SortBy" : void 0
        }];
      };
      function ro(e, t, u, a) {
        if (t.type === M.init)
          return y({
            sortBy: []
          }, e);
        if (t.type === M.resetSortBy)
          return y({}, e, {
            sortBy: a.initialState.sortBy || []
          });
        if (t.type === M.clearSortBy) {
          var p = e.sortBy, g = p.filter(function($) {
            return $.id !== t.columnId;
          });
          return y({}, e, {
            sortBy: g
          });
        }
        if (t.type === M.setSortBy) {
          var c = t.sortBy;
          return y({}, e, {
            sortBy: c
          });
        }
        if (t.type === M.toggleSortBy) {
          var w = t.columnId, D = t.desc, N = t.multi, L = a.allColumns, q = a.disableMultiSort, O = a.disableSortRemove, G = a.disableMultiRemove, _ = a.maxMultiSortColCount, E = _ === void 0 ? Number.MAX_SAFE_INTEGER : _, Z = e.sortBy, yn = L.find(function($) {
            return $.id === w;
          }), vn = yn.sortDescFirst, j = Z.find(function($) {
            return $.id === w;
          }), Pn = Z.findIndex(function($) {
            return $.id === w;
          }), Bn = typeof D < "u" && D !== null, J = [], Y;
          return !q && N ? j ? Y = "toggle" : Y = "add" : Pn !== Z.length - 1 || Z.length !== 1 ? Y = "replace" : j ? Y = "toggle" : Y = "replace", Y === "toggle" && // Must be toggling
          !O && // If disableSortRemove, disable in general
          !Bn && // Must not be setting desc
          (!N || !G) && // If multi, don't allow if disableMultiRemove
          (j && // Finally, detect if it should indeed be removed
          j.desc && !vn || !j.desc && vn) && (Y = "remove"), Y === "replace" ? J = [{
            id: w,
            desc: Bn ? D : vn
          }] : Y === "add" ? (J = [].concat(Z, [{
            id: w,
            desc: Bn ? D : vn
          }]), J.splice(0, J.length - E)) : Y === "toggle" ? J = Z.map(function($) {
            return $.id === w ? y({}, $, {
              desc: Bn ? D : !j.desc
            }) : $;
          }) : Y === "remove" && (J = Z.filter(function($) {
            return $.id !== w;
          })), y({}, e, {
            sortBy: J
          });
        }
      }
      function uo(e) {
        var t = e.data, u = e.rows, a = e.flatRows, p = e.allColumns, g = e.orderByFn, c = g === void 0 ? Mt : g, w = e.sortTypes, D = e.manualSortBy, N = e.defaultCanSort, L = e.disableSortBy, q = e.flatHeaders, O = e.state.sortBy, G = e.dispatch, _ = e.plugins, E = e.getHooks, Z = e.autoResetSortBy, yn = Z === void 0 ? !0 : Z;
        Un(_, ["useFilters", "useGlobalFilter", "useGroupBy", "usePivotColumns"], "useSortBy");
        var vn = C.useCallback(function(cn) {
          G({
            type: M.setSortBy,
            sortBy: cn
          });
        }, [G]), j = C.useCallback(function(cn, kn, En) {
          G({
            type: M.toggleSortBy,
            columnId: cn,
            desc: kn,
            multi: En
          });
        }, [G]), Pn = Dn(e);
        q.forEach(function(cn) {
          var kn = cn.accessor, En = cn.canSort, _n = cn.disableSortBy, an = cn.id, ie = kn ? ae(_n === !0 ? !1 : void 0, L === !0 ? !1 : void 0, !0) : ae(N, En, !1);
          cn.canSort = ie, cn.canSort && (cn.toggleSortBy = function(wn, bn) {
            return j(cn.id, wn, bn);
          }, cn.clearSortBy = function() {
            G({
              type: M.clearSortBy,
              columnId: cn.id
            });
          }), cn.getSortByToggleProps = hn(E().getSortByToggleProps, {
            instance: Pn(),
            column: cn
          });
          var On = O.find(function(wn) {
            return wn.id === an;
          });
          cn.isSorted = !!On, cn.sortedIndex = O.findIndex(function(wn) {
            return wn.id === an;
          }), cn.isSortedDesc = cn.isSorted ? On.desc : void 0;
        });
        var Bn = C.useMemo(function() {
          if (D || !O.length)
            return [u, a];
          var cn = [], kn = O.filter(function(_n) {
            return p.find(function(an) {
              return an.id === _n.id;
            });
          }), En = function _n(an) {
            var ie = c(
              an,
              kn.map(function(On) {
                var wn = p.find(function(se) {
                  return se.id === On.id;
                });
                if (!wn)
                  throw new Error("React-Table: Could not find a column with id: " + On.id + " while sorting");
                var bn = wn.sortType, jn = Oe(bn) || (w || {})[bn] || Jo[bn];
                if (!jn)
                  throw new Error("React-Table: Could not find a valid sortType of '" + bn + "' for column '" + On.id + "'.");
                return function(se, et) {
                  return jn(se, et, On.id, On.desc);
                };
              }),
              // Map the directions
              kn.map(function(On) {
                var wn = p.find(function(bn) {
                  return bn.id === On.id;
                });
                return wn && wn.sortInverted ? On.desc : !On.desc;
              })
            );
            return ie.forEach(function(On) {
              cn.push(On), !(!On.subRows || On.subRows.length === 0) && (On.subRows = _n(On.subRows));
            }), ie;
          };
          return [En(u), cn];
        }, [D, O, u, a, p, c, w]), J = Bn[0], Y = Bn[1], $ = Dn(yn);
        Kn(function() {
          $() && G({
            type: M.resetSortBy
          });
        }, [D ? null : t]), Object.assign(e, {
          preSortedRows: u,
          preSortedFlatRows: a,
          sortedRows: J,
          sortedFlatRows: Y,
          rows: J,
          flatRows: Y,
          setSortBy: vn,
          toggleSortBy: j
        });
      }
      function Mt(e, t, u) {
        return [].concat(e).sort(function(a, p) {
          for (var g = 0; g < t.length; g += 1) {
            var c = t[g], w = u[g] === !1 || u[g] === "desc", D = c(a, p);
            if (D !== 0)
              return w ? -D : D;
          }
          return u[0] ? a.index - p.index : p.index - a.index;
        });
      }
      var Zo = "usePagination";
      M.resetPage = "resetPage", M.gotoPage = "gotoPage", M.setPageSize = "setPageSize";
      var io = function(t) {
        t.stateReducers.push(Qo), t.useInstance.push(lo);
      };
      io.pluginName = Zo;
      function Qo(e, t, u, a) {
        if (t.type === M.init)
          return y({
            pageSize: 10,
            pageIndex: 0
          }, e);
        if (t.type === M.resetPage)
          return y({}, e, {
            pageIndex: a.initialState.pageIndex || 0
          });
        if (t.type === M.gotoPage) {
          var p = a.pageCount, g = a.page, c = Wn(t.pageIndex, e.pageIndex), w = !1;
          return c > e.pageIndex ? w = p === -1 ? g.length >= e.pageSize : c < p : c < e.pageIndex && (w = c > -1), w ? y({}, e, {
            pageIndex: c
          }) : e;
        }
        if (t.type === M.setPageSize) {
          var D = t.pageSize, N = e.pageSize * e.pageIndex, L = Math.floor(N / D);
          return y({}, e, {
            pageIndex: L,
            pageSize: D
          });
        }
      }
      function lo(e) {
        var t = e.rows, u = e.autoResetPage, a = u === void 0 ? !0 : u, p = e.manualExpandedKey, g = p === void 0 ? "expanded" : p, c = e.plugins, w = e.pageCount, D = e.paginateExpandedRows, N = D === void 0 ? !0 : D, L = e.expandSubRows, q = L === void 0 ? !0 : L, O = e.state, G = O.pageSize, _ = O.pageIndex, E = O.expanded, Z = O.globalFilter, yn = O.filters, vn = O.groupBy, j = O.sortBy, Pn = e.dispatch, Bn = e.data, J = e.manualPagination;
        Un(c, ["useGlobalFilter", "useFilters", "useGroupBy", "useSortBy", "useExpanded"], "usePagination");
        var Y = Dn(a);
        Kn(function() {
          Y() && Pn({
            type: M.resetPage
          });
        }, [Pn, J ? null : Bn, Z, yn, vn, j]);
        var $ = J ? w : Math.ceil(t.length / G), cn = C.useMemo(function() {
          return $ > 0 ? [].concat(new Array($)).fill(null).map(function(bn, jn) {
            return jn;
          }) : [];
        }, [$]), kn = C.useMemo(function() {
          var bn;
          if (J)
            bn = t;
          else {
            var jn = G * _, se = jn + G;
            bn = t.slice(jn, se);
          }
          return N ? bn : F(bn, {
            manualExpandedKey: g,
            expanded: E,
            expandSubRows: q
          });
        }, [q, E, g, J, _, G, N, t]), En = _ > 0, _n = $ === -1 ? kn.length >= G : _ < $ - 1, an = C.useCallback(function(bn) {
          Pn({
            type: M.gotoPage,
            pageIndex: bn
          });
        }, [Pn]), ie = C.useCallback(function() {
          return an(function(bn) {
            return bn - 1;
          });
        }, [an]), On = C.useCallback(function() {
          return an(function(bn) {
            return bn + 1;
          });
        }, [an]), wn = C.useCallback(function(bn) {
          Pn({
            type: M.setPageSize,
            pageSize: bn
          });
        }, [Pn]);
        Object.assign(e, {
          pageOptions: cn,
          pageCount: $,
          page: kn,
          canPreviousPage: En,
          canNextPage: _n,
          gotoPage: an,
          previousPage: ie,
          nextPage: On,
          setPageSize: wn
        });
      }
      M.resetPivot = "resetPivot", M.togglePivot = "togglePivot";
      var so = function(t) {
        t.getPivotToggleProps = [na], t.stateReducers.push(yo), t.useInstanceAfterData.push(ea), t.allColumns.push(ta), t.accessValue.push(oa), t.materializedColumns.push(aa), t.materializedColumnsDeps.push(bt), t.visibleColumns.push(Co), t.visibleColumnsDeps.push(ut), t.useInstance.push(At), t.prepareRow.push(Dt);
      };
      so.pluginName = "usePivotColumns";
      var co = [], na = function(t, u) {
        var a = u.header;
        return [t, {
          onClick: a.canPivot ? function(p) {
            p.persist(), a.togglePivot();
          } : void 0,
          style: {
            cursor: a.canPivot ? "pointer" : void 0
          },
          title: "Toggle Pivot"
        }];
      };
      function yo(e, t, u, a) {
        if (t.type === M.init)
          return y({
            pivotColumns: co
          }, e);
        if (t.type === M.resetPivot)
          return y({}, e, {
            pivotColumns: a.initialState.pivotColumns || co
          });
        if (t.type === M.togglePivot) {
          var p = t.columnId, g = t.value, c = typeof g < "u" ? g : !e.pivotColumns.includes(p);
          return c ? y({}, e, {
            pivotColumns: [].concat(e.pivotColumns, [p])
          }) : y({}, e, {
            pivotColumns: e.pivotColumns.filter(function(w) {
              return w !== p;
            })
          });
        }
      }
      function ea(e) {
        e.allColumns.forEach(function(t) {
          t.isPivotSource = e.state.pivotColumns.includes(t.id);
        });
      }
      function ta(e, t) {
        var u = t.instance;
        return e.forEach(function(a) {
          a.isPivotSource = u.state.pivotColumns.includes(a.id), a.uniqueValues = /* @__PURE__ */ new Set();
        }), e;
      }
      function oa(e, t) {
        var u = t.column;
        return u.uniqueValues && typeof e < "u" && u.uniqueValues.add(e), e;
      }
      function aa(e, t) {
        var u = t.instance, a = u.allColumns, p = u.state;
        if (!p.pivotColumns.length || !p.groupBy || !p.groupBy.length)
          return e;
        var g = p.pivotColumns.map(function(N) {
          return a.find(function(L) {
            return L.id === N;
          });
        }).filter(Boolean), c = a.filter(function(N) {
          return !N.isPivotSource && !p.groupBy.includes(N.id) && !p.pivotColumns.includes(N.id);
        }), w = function N(L, q, O) {
          L === void 0 && (L = 0), O === void 0 && (O = []);
          var G = g[L];
          if (!G)
            return c.map(function(E) {
              return y({}, E, {
                canPivot: !1,
                isPivoted: !0,
                parent: q,
                depth: L,
                id: "" + (q ? q.id + "." + E.id : E.id),
                accessor: function(yn, vn, j) {
                  if (O.every(function(Pn) {
                    return Pn(j);
                  }))
                    return j.values[E.id];
                }
              });
            });
          var _ = Array.from(G.uniqueValues).sort();
          return _.map(function(E) {
            var Z = y({}, G, {
              Header: G.PivotHeader || typeof G.header == "string" ? G.Header + ": " + E : E,
              isPivotGroup: !0,
              parent: q,
              depth: L,
              id: q ? q.id + "." + G.id + "." + E : G.id + "." + E,
              pivotValue: E
            });
            return Z.columns = N(L + 1, Z, [].concat(O, [function(yn) {
              return yn.values[G.id] === E;
            }])), Z;
          });
        }, D = Pe(w());
        return [].concat(e, D);
      }
      function bt(e, t) {
        var u = t.instance.state, a = u.pivotColumns, p = u.groupBy;
        return [].concat(e, [a, p]);
      }
      function Co(e, t) {
        var u = t.instance.state;
        return e = e.filter(function(a) {
          return !a.isPivotSource;
        }), u.pivotColumns.length && u.groupBy && u.groupBy.length && (e = e.filter(function(a) {
          return a.isGrouped || a.isPivoted;
        })), e;
      }
      function ut(e, t) {
        var u = t.instance;
        return [].concat(e, [u.state.pivotColumns, u.state.groupBy]);
      }
      function At(e) {
        var t = e.columns, u = e.allColumns, a = e.flatHeaders, p = e.getHooks, g = e.plugins, c = e.dispatch, w = e.autoResetPivot, D = w === void 0 ? !0 : w, N = e.manaulPivot, L = e.disablePivot, q = e.defaultCanPivot;
        Un(g, ["useGroupBy"], "usePivotColumns");
        var O = Dn(e);
        u.forEach(function(E) {
          var Z = E.accessor, yn = E.defaultPivot, vn = E.disablePivot;
          E.canPivot = Z ? ae(E.canPivot, vn === !0 ? !1 : void 0, L === !0 ? !1 : void 0, !0) : ae(E.canPivot, yn, q, !1), E.canPivot && (E.togglePivot = function() {
            return e.togglePivot(E.id);
          }), E.Aggregated = E.Aggregated || E.Cell;
        });
        var G = function(Z, yn) {
          c({
            type: M.togglePivot,
            columnId: Z,
            value: yn
          });
        };
        a.forEach(function(E) {
          E.getPivotToggleProps = hn(p().getPivotToggleProps, {
            instance: O(),
            header: E
          });
        });
        var _ = Dn(D);
        Kn(function() {
          _() && c({
            type: M.resetPivot
          });
        }, [c, N ? null : t]), Object.assign(e, {
          togglePivot: G
        });
      }
      function Dt(e) {
        e.allCells.forEach(function(t) {
          t.isPivoted = t.column.isPivoted;
        });
      }
      var po = "useRowSelect";
      M.resetSelectedRows = "resetSelectedRows", M.toggleAllRowsSelected = "toggleAllRowsSelected", M.toggleRowSelected = "toggleRowSelected", M.toggleAllPageRowsSelected = "toggleAllPageRowsSelected";
      var Rt = function(t) {
        t.getToggleRowSelectedProps = [ra], t.getToggleAllRowsSelectedProps = [Nt], t.getToggleAllPageRowsSelectedProps = [ua], t.stateReducers.push(ia), t.useInstance.push(la), t.prepareRow.push(fo);
      };
      Rt.pluginName = po;
      var ra = function(t, u) {
        var a = u.instance, p = u.row, g = a.manualRowSelectedKey, c = g === void 0 ? "isSelected" : g, w = !1;
        return p.original && p.original[c] ? w = !0 : w = p.isSelected, [t, {
          onChange: function(N) {
            p.toggleRowSelected(N.target.checked);
          },
          style: {
            cursor: "pointer"
          },
          checked: w,
          title: "Toggle Row Selected",
          indeterminate: p.isSomeSelected
        }];
      }, Nt = function(t, u) {
        var a = u.instance;
        return [t, {
          onChange: function(g) {
            a.toggleAllRowsSelected(g.target.checked);
          },
          style: {
            cursor: "pointer"
          },
          checked: a.isAllRowsSelected,
          title: "Toggle All Rows Selected",
          indeterminate: !!(!a.isAllRowsSelected && Object.keys(a.state.selectedRowIds).length)
        }];
      }, ua = function(t, u) {
        var a = u.instance;
        return [t, {
          onChange: function(g) {
            a.toggleAllPageRowsSelected(g.target.checked);
          },
          style: {
            cursor: "pointer"
          },
          checked: a.isAllPageRowsSelected,
          title: "Toggle All Current Page Rows Selected",
          indeterminate: !!(!a.isAllPageRowsSelected && a.page.some(function(p) {
            var g = p.id;
            return a.state.selectedRowIds[g];
          }))
        }];
      };
      function ia(e, t, u, a) {
        if (t.type === M.init)
          return y({
            selectedRowIds: {}
          }, e);
        if (t.type === M.resetSelectedRows)
          return y({}, e, {
            selectedRowIds: a.initialState.selectedRowIds || {}
          });
        if (t.type === M.toggleAllRowsSelected) {
          var p = t.value, g = a.isAllRowsSelected, c = a.rowsById, w = a.nonGroupedRowsById, D = w === void 0 ? c : w, N = typeof p < "u" ? p : !g, L = Object.assign({}, e.selectedRowIds);
          return N ? Object.keys(D).forEach(function(On) {
            L[On] = !0;
          }) : Object.keys(D).forEach(function(On) {
            delete L[On];
          }), y({}, e, {
            selectedRowIds: L
          });
        }
        if (t.type === M.toggleRowSelected) {
          var q = t.id, O = t.value, G = a.rowsById, _ = a.selectSubRows, E = _ === void 0 ? !0 : _, Z = a.getSubRows, yn = e.selectedRowIds[q], vn = typeof O < "u" ? O : !yn;
          if (yn === vn)
            return e;
          var j = y({}, e.selectedRowIds), Pn = function On(wn) {
            var bn = G[wn];
            if (bn && (bn.isGrouped || (vn ? j[wn] = !0 : delete j[wn]), E && Z(bn)))
              return Z(bn).forEach(function(jn) {
                return On(jn.id);
              });
          };
          return Pn(q), y({}, e, {
            selectedRowIds: j
          });
        }
        if (t.type === M.toggleAllPageRowsSelected) {
          var Bn = t.value, J = a.page, Y = a.rowsById, $ = a.selectSubRows, cn = $ === void 0 ? !0 : $, kn = a.isAllPageRowsSelected, En = a.getSubRows, _n = typeof Bn < "u" ? Bn : !kn, an = y({}, e.selectedRowIds), ie = function On(wn) {
            var bn = Y[wn];
            if (bn.isGrouped || (_n ? an[wn] = !0 : delete an[wn]), cn && En(bn))
              return En(bn).forEach(function(jn) {
                return On(jn.id);
              });
          };
          return J.forEach(function(On) {
            return ie(On.id);
          }), y({}, e, {
            selectedRowIds: an
          });
        }
        return e;
      }
      function la(e) {
        var t = e.data, u = e.rows, a = e.getHooks, p = e.plugins, g = e.rowsById, c = e.nonGroupedRowsById, w = c === void 0 ? g : c, D = e.autoResetSelectedRows, N = D === void 0 ? !0 : D, L = e.state.selectedRowIds, q = e.selectSubRows, O = q === void 0 ? !0 : q, G = e.dispatch, _ = e.page, E = e.getSubRows;
        Un(p, ["useFilters", "useGroupBy", "useSortBy", "useExpanded", "usePagination"], "useRowSelect");
        var Z = C.useMemo(function() {
          var kn = [];
          return u.forEach(function(En) {
            var _n = O ? go(En, L, E) : !!L[En.id];
            En.isSelected = !!_n, En.isSomeSelected = _n === null, _n && kn.push(En);
          }), kn;
        }, [u, O, L, E]), yn = !!(Object.keys(w).length && Object.keys(L).length), vn = yn;
        yn && Object.keys(w).some(function(kn) {
          return !L[kn];
        }) && (yn = !1), yn || _ && _.length && _.some(function(kn) {
          var En = kn.id;
          return !L[En];
        }) && (vn = !1);
        var j = Dn(N);
        Kn(function() {
          j() && G({
            type: M.resetSelectedRows
          });
        }, [G, t]);
        var Pn = C.useCallback(function(kn) {
          return G({
            type: M.toggleAllRowsSelected,
            value: kn
          });
        }, [G]), Bn = C.useCallback(function(kn) {
          return G({
            type: M.toggleAllPageRowsSelected,
            value: kn
          });
        }, [G]), J = C.useCallback(function(kn, En) {
          return G({
            type: M.toggleRowSelected,
            id: kn,
            value: En
          });
        }, [G]), Y = Dn(e), $ = hn(a().getToggleAllRowsSelectedProps, {
          instance: Y()
        }), cn = hn(a().getToggleAllPageRowsSelectedProps, {
          instance: Y()
        });
        Object.assign(e, {
          selectedFlatRows: Z,
          isAllRowsSelected: yn,
          isAllPageRowsSelected: vn,
          toggleRowSelected: J,
          toggleAllRowsSelected: Pn,
          getToggleAllRowsSelectedProps: $,
          getToggleAllPageRowsSelectedProps: cn,
          toggleAllPageRowsSelected: Bn
        });
      }
      function fo(e, t) {
        var u = t.instance;
        e.toggleRowSelected = function(a) {
          return u.toggleRowSelected(e.id, a);
        }, e.getToggleRowSelectedProps = hn(u.getHooks().getToggleRowSelectedProps, {
          instance: u,
          row: e
        });
      }
      function go(e, t, u) {
        if (t[e.id])
          return !0;
        var a = u(e);
        if (a && a.length) {
          var p = !0, g = !1;
          return a.forEach(function(c) {
            g && !p || (go(c, t, u) ? g = !0 : p = !1);
          }), p ? !0 : g ? null : !1;
        }
        return !1;
      }
      var mo = function(t) {
        return {};
      }, vo = function(t) {
        return {};
      };
      M.setRowState = "setRowState", M.setCellState = "setCellState", M.resetRowState = "resetRowState";
      var ho = function(t) {
        t.stateReducers.push(Tt), t.useInstance.push(n), t.prepareRow.push(r);
      };
      ho.pluginName = "useRowState";
      function Tt(e, t, u, a) {
        var p = a.initialRowStateAccessor, g = p === void 0 ? mo : p, c = a.initialCellStateAccessor, w = c === void 0 ? vo : c, D = a.rowsById;
        if (t.type === M.init)
          return y({
            rowState: {}
          }, e);
        if (t.type === M.resetRowState)
          return y({}, e, {
            rowState: a.initialState.rowState || {}
          });
        if (t.type === M.setRowState) {
          var N, L = t.rowId, q = t.value, O = typeof e.rowState[L] < "u" ? e.rowState[L] : g(D[L]);
          return y({}, e, {
            rowState: y({}, e.rowState, (N = {}, N[L] = Wn(q, O), N))
          });
        }
        if (t.type === M.setCellState) {
          var G, _, E, Z, yn, vn = t.rowId, j = t.columnId, Pn = t.value, Bn = typeof e.rowState[vn] < "u" ? e.rowState[vn] : g(D[vn]), J = typeof (Bn == null || (G = Bn.cellState) == null ? void 0 : G[j]) < "u" ? Bn.cellState[j] : w((_ = D[vn]) == null || (E = _.cells) == null ? void 0 : E.find(function(Y) {
            return Y.column.id === j;
          }));
          return y({}, e, {
            rowState: y({}, e.rowState, (yn = {}, yn[vn] = y({}, Bn, {
              cellState: y({}, Bn.cellState || {}, (Z = {}, Z[j] = Wn(Pn, J), Z))
            }), yn))
          });
        }
      }
      function n(e) {
        var t = e.autoResetRowState, u = t === void 0 ? !0 : t, a = e.data, p = e.dispatch, g = C.useCallback(function(D, N) {
          return p({
            type: M.setRowState,
            rowId: D,
            value: N
          });
        }, [p]), c = C.useCallback(function(D, N, L) {
          return p({
            type: M.setCellState,
            rowId: D,
            columnId: N,
            value: L
          });
        }, [p]), w = Dn(u);
        Kn(function() {
          w() && p({
            type: M.resetRowState
          });
        }, [a]), Object.assign(e, {
          setRowState: g,
          setCellState: c
        });
      }
      function r(e, t) {
        var u = t.instance, a = u.initialRowStateAccessor, p = a === void 0 ? mo : a, g = u.initialCellStateAccessor, c = g === void 0 ? vo : g, w = u.state.rowState;
        e && (e.state = typeof w[e.id] < "u" ? w[e.id] : p(e), e.setState = function(D) {
          return u.setRowState(e.id, D);
        }, e.cells.forEach(function(D) {
          e.state.cellState || (e.state.cellState = {}), D.state = typeof e.state.cellState[D.column.id] < "u" ? e.state.cellState[D.column.id] : c(D), D.setState = function(N) {
            return u.setCellState(e.id, D.column.id, N);
          };
        }));
      }
      M.resetColumnOrder = "resetColumnOrder", M.setColumnOrder = "setColumnOrder";
      var i = function(t) {
        t.stateReducers.push(l), t.visibleColumnsDeps.push(function(u, a) {
          var p = a.instance;
          return [].concat(u, [p.state.columnOrder]);
        }), t.visibleColumns.push(v), t.useInstance.push(f);
      };
      i.pluginName = "useColumnOrder";
      function l(e, t, u, a) {
        if (t.type === M.init)
          return y({
            columnOrder: []
          }, e);
        if (t.type === M.resetColumnOrder)
          return y({}, e, {
            columnOrder: a.initialState.columnOrder || []
          });
        if (t.type === M.setColumnOrder)
          return y({}, e, {
            columnOrder: Wn(t.columnOrder, e.columnOrder)
          });
      }
      function v(e, t) {
        var u = t.instance.state.columnOrder;
        if (!u || !u.length)
          return e;
        for (var a = [].concat(u), p = [].concat(e), g = [], c = function() {
          var D = a.shift(), N = p.findIndex(function(L) {
            return L.id === D;
          });
          N > -1 && g.push(p.splice(N, 1)[0]);
        }; p.length && a.length; )
          c();
        return [].concat(g, p);
      }
      function f(e) {
        var t = e.dispatch;
        e.setColumnOrder = C.useCallback(function(u) {
          return t({
            type: M.setColumnOrder,
            columnOrder: u
          });
        }, [t]);
      }
      Cn.canResize = !0, M.columnStartResizing = "columnStartResizing", M.columnResizing = "columnResizing", M.columnDoneResizing = "columnDoneResizing", M.resetResize = "resetResize";
      var S = function(t) {
        t.getResizerProps = [R], t.getHeaderProps.push({
          style: {
            position: "relative"
          }
        }), t.stateReducers.push(T), t.useInstance.push(V), t.useInstanceBeforeDimensions.push(I);
      }, R = function(t, u) {
        var a = u.instance, p = u.header, g = a.dispatch, c = function(D, N) {
          var L = !1;
          if (D.type === "touchstart") {
            if (D.touches && D.touches.length > 1)
              return;
            L = !0;
          }
          var q = W(N), O = q.map(function(J) {
            return [J.id, J.totalWidth];
          }), G = L ? Math.round(D.touches[0].clientX) : D.clientX, _, E, Z = function() {
            window.cancelAnimationFrame(_), _ = null, g({
              type: M.columnDoneResizing
            });
          }, yn = function() {
            window.cancelAnimationFrame(_), _ = null, g({
              type: M.columnResizing,
              clientX: E
            });
          }, vn = function(Y) {
            E = Y, _ || (_ = window.requestAnimationFrame(yn));
          }, j = {
            mouse: {
              moveEvent: "mousemove",
              moveHandler: function(Y) {
                return vn(Y.clientX);
              },
              upEvent: "mouseup",
              upHandler: function(Y) {
                document.removeEventListener("mousemove", j.mouse.moveHandler), document.removeEventListener("mouseup", j.mouse.upHandler), Z();
              }
            },
            touch: {
              moveEvent: "touchmove",
              moveHandler: function(Y) {
                return Y.cancelable && (Y.preventDefault(), Y.stopPropagation()), vn(Y.touches[0].clientX), !1;
              },
              upEvent: "touchend",
              upHandler: function(Y) {
                document.removeEventListener(j.touch.moveEvent, j.touch.moveHandler), document.removeEventListener(j.touch.upEvent, j.touch.moveHandler), Z();
              }
            }
          }, Pn = L ? j.touch : j.mouse, Bn = Yn() ? {
            passive: !1
          } : !1;
          document.addEventListener(Pn.moveEvent, Pn.moveHandler, Bn), document.addEventListener(Pn.upEvent, Pn.upHandler, Bn), g({
            type: M.columnStartResizing,
            columnId: N.id,
            columnWidth: N.totalWidth,
            headerIdWidths: O,
            clientX: G
          });
        };
        return [t, {
          onMouseDown: function(D) {
            return D.persist() || c(D, p);
          },
          onTouchStart: function(D) {
            return D.persist() || c(D, p);
          },
          style: {
            cursor: "col-resize"
          },
          draggable: !1,
          role: "separator"
        }];
      };
      S.pluginName = "useResizeColumns";
      function T(e, t) {
        if (t.type === M.init)
          return y({
            columnResizing: {
              columnWidths: {}
            }
          }, e);
        if (t.type === M.resetResize)
          return y({}, e, {
            columnResizing: {
              columnWidths: {}
            }
          });
        if (t.type === M.columnStartResizing) {
          var u = t.clientX, a = t.columnId, p = t.columnWidth, g = t.headerIdWidths;
          return y({}, e, {
            columnResizing: y({}, e.columnResizing, {
              startX: u,
              headerIdWidths: g,
              columnWidth: p,
              isResizingColumn: a
            })
          });
        }
        if (t.type === M.columnResizing) {
          var c = t.clientX, w = e.columnResizing, D = w.startX, N = w.columnWidth, L = w.headerIdWidths, q = L === void 0 ? [] : L, O = c - D, G = O / N, _ = {};
          return q.forEach(function(E) {
            var Z = E[0], yn = E[1];
            _[Z] = Math.max(yn + yn * G, 0);
          }), y({}, e, {
            columnResizing: y({}, e.columnResizing, {
              columnWidths: y({}, e.columnResizing.columnWidths, {}, _)
            })
          });
        }
        if (t.type === M.columnDoneResizing)
          return y({}, e, {
            columnResizing: y({}, e.columnResizing, {
              startX: null,
              isResizingColumn: null
            })
          });
      }
      var I = function(t) {
        var u = t.flatHeaders, a = t.disableResizing, p = t.getHooks, g = t.state.columnResizing, c = Dn(t);
        u.forEach(function(w) {
          var D = ae(w.disableResizing === !0 ? !1 : void 0, a === !0 ? !1 : void 0, !0);
          w.canResize = D, w.width = g.columnWidths[w.id] || w.originalWidth || w.width, w.isResizing = g.isResizingColumn === w.id, D && (w.getResizerProps = hn(p().getResizerProps, {
            instance: c(),
            header: w
          }));
        });
      };
      function V(e) {
        var t = e.plugins, u = e.dispatch, a = e.autoResetResize, p = a === void 0 ? !0 : a, g = e.columns;
        Un(t, ["useAbsoluteLayout"], "useResizeColumns");
        var c = Dn(p);
        Kn(function() {
          c() && u({
            type: M.resetResize
          });
        }, [g]);
        var w = C.useCallback(function() {
          return u({
            type: M.resetResize
          });
        }, [u]);
        Object.assign(e, {
          resetResizing: w
        });
      }
      function W(e) {
        var t = [], u = function a(p) {
          p.columns && p.columns.length && p.columns.map(a), t.push(p);
        };
        return u(e), t;
      }
      var x = {
        position: "absolute",
        top: 0
      }, k = function(t) {
        t.getTableBodyProps.push(H), t.getRowProps.push(H), t.getHeaderGroupProps.push(H), t.getFooterGroupProps.push(H), t.getHeaderProps.push(function(u, a) {
          var p = a.column;
          return [u, {
            style: y({}, x, {
              left: p.totalLeft + "px",
              width: p.totalWidth + "px"
            })
          }];
        }), t.getCellProps.push(function(u, a) {
          var p = a.cell;
          return [u, {
            style: y({}, x, {
              left: p.column.totalLeft + "px",
              width: p.column.totalWidth + "px"
            })
          }];
        }), t.getFooterProps.push(function(u, a) {
          var p = a.column;
          return [u, {
            style: y({}, x, {
              left: p.totalLeft + "px",
              width: p.totalWidth + "px"
            })
          }];
        });
      };
      k.pluginName = "useAbsoluteLayout";
      var H = function(t, u) {
        var a = u.instance;
        return [t, {
          style: {
            position: "relative",
            width: a.totalColumnsWidth + "px"
          }
        }];
      }, X = {
        display: "inline-block",
        boxSizing: "border-box"
      }, U = function(t, u) {
        var a = u.instance;
        return [t, {
          style: {
            display: "flex",
            width: a.totalColumnsWidth + "px"
          }
        }];
      }, ln = function(t) {
        t.getRowProps.push(U), t.getHeaderGroupProps.push(U), t.getFooterGroupProps.push(U), t.getHeaderProps.push(function(u, a) {
          var p = a.column;
          return [u, {
            style: y({}, X, {
              width: p.totalWidth + "px"
            })
          }];
        }), t.getCellProps.push(function(u, a) {
          var p = a.cell;
          return [u, {
            style: y({}, X, {
              width: p.column.totalWidth + "px"
            })
          }];
        }), t.getFooterProps.push(function(u, a) {
          var p = a.column;
          return [u, {
            style: y({}, X, {
              width: p.totalWidth + "px"
            })
          }];
        });
      };
      ln.pluginName = "useBlockLayout";
      function Ln(e) {
        e.getTableProps.push(sn), e.getRowProps.push(K), e.getHeaderGroupProps.push(K), e.getFooterGroupProps.push(K), e.getHeaderProps.push(Tn), e.getCellProps.push(en), e.getFooterProps.push(Mn);
      }
      Ln.pluginName = "useFlexLayout";
      var sn = function(t, u) {
        var a = u.instance;
        return [t, {
          style: {
            minWidth: a.totalColumnsMinWidth + "px"
          }
        }];
      }, K = function(t, u) {
        var a = u.instance;
        return [t, {
          style: {
            display: "flex",
            flex: "1 0 auto",
            minWidth: a.totalColumnsMinWidth + "px"
          }
        }];
      }, Tn = function(t, u) {
        var a = u.column;
        return [t, {
          style: {
            boxSizing: "border-box",
            flex: a.totalFlexWidth ? a.totalFlexWidth + " 0 auto" : void 0,
            minWidth: a.totalMinWidth + "px",
            width: a.totalWidth + "px"
          }
        }];
      }, en = function(t, u) {
        var a = u.cell;
        return [t, {
          style: {
            boxSizing: "border-box",
            flex: a.column.totalFlexWidth + " 0 auto",
            minWidth: a.column.totalMinWidth + "px",
            width: a.column.totalWidth + "px"
          }
        }];
      }, Mn = function(t, u) {
        var a = u.column;
        return [t, {
          style: {
            boxSizing: "border-box",
            flex: a.totalFlexWidth ? a.totalFlexWidth + " 0 auto" : void 0,
            minWidth: a.totalMinWidth + "px",
            width: a.totalWidth + "px"
          }
        }];
      };
      M.columnStartResizing = "columnStartResizing", M.columnResizing = "columnResizing", M.columnDoneResizing = "columnDoneResizing", M.resetResize = "resetResize";
      function xn(e) {
        e.stateReducers.push(Rn), e.getTableProps.push(gn), e.getHeaderProps.push(Sn), e.getRowProps.push(Vn);
      }
      xn.pluginName = "useGridLayout";
      var gn = function(t, u) {
        var a = u.instance, p = a.visibleColumns.map(function(g) {
          var c;
          return a.state.gridLayout.columnWidths[g.id] ? a.state.gridLayout.columnWidths[g.id] + "px" : (c = a.state.columnResizing) != null && c.isResizingColumn ? a.state.gridLayout.startWidths[g.id] + "px" : typeof g.width == "number" ? g.width + "px" : g.width;
        });
        return [t, {
          style: {
            display: "grid",
            gridTemplateColumns: p.join(" ")
          }
        }];
      }, Sn = function(t, u) {
        var a = u.column;
        return [t, {
          id: "header-cell-" + a.id,
          style: {
            position: "sticky",
            //enables a scroll wrapper to be placed around the table and have sticky headers
            gridColumn: "span " + a.totalVisibleHeaderCount
          }
        }];
      }, Vn = function(t, u) {
        var a = u.row;
        return a.isExpanded ? [t, {
          style: {
            gridColumn: "1 / " + (a.cells.length + 1)
          }
        }] : [t, {}];
      };
      function Rn(e, t, u, a) {
        if (t.type === M.init)
          return y({
            gridLayout: {
              columnWidths: {}
            }
          }, e);
        if (t.type === M.resetResize)
          return y({}, e, {
            gridLayout: {
              columnWidths: {}
            }
          });
        if (t.type === M.columnStartResizing) {
          var p = t.columnId, g = t.headerIdWidths, c = Gn(p);
          if (c !== void 0) {
            var w = a.visibleColumns.reduce(function(J, Y) {
              var $;
              return y({}, J, ($ = {}, $[Y.id] = Gn(Y.id), $));
            }, {}), D = a.visibleColumns.reduce(function(J, Y) {
              var $;
              return y({}, J, ($ = {}, $[Y.id] = Y.minWidth, $));
            }, {}), N = a.visibleColumns.reduce(function(J, Y) {
              var $;
              return y({}, J, ($ = {}, $[Y.id] = Y.maxWidth, $));
            }, {}), L = g.map(function(J) {
              var Y = J[0];
              return [Y, Gn(Y)];
            });
            return y({}, e, {
              gridLayout: y({}, e.gridLayout, {
                startWidths: w,
                minWidths: D,
                maxWidths: N,
                headerIdGridWidths: L,
                columnWidth: c
              })
            });
          } else
            return e;
        }
        if (t.type === M.columnResizing) {
          var q = t.clientX, O = e.columnResizing.startX, G = e.gridLayout, _ = G.columnWidth, E = G.minWidths, Z = G.maxWidths, yn = G.headerIdGridWidths, vn = yn === void 0 ? [] : yn, j = q - O, Pn = j / _, Bn = {};
          return vn.forEach(function(J) {
            var Y = J[0], $ = J[1];
            Bn[Y] = Math.min(Math.max(E[Y], $ + $ * Pn), Z[Y]);
          }), y({}, e, {
            gridLayout: y({}, e.gridLayout, {
              columnWidths: y({}, e.gridLayout.columnWidths, {}, Bn)
            })
          });
        }
        if (t.type === M.columnDoneResizing)
          return y({}, e, {
            gridLayout: y({}, e.gridLayout, {
              startWidths: {},
              minWidths: {},
              maxWidths: {}
            })
          });
      }
      function Gn(e) {
        var t, u = (t = document.getElementById("header-cell-" + e)) == null ? void 0 : t.offsetWidth;
        if (u !== void 0)
          return u;
      }
      s._UNSTABLE_usePivotColumns = so, s.actions = M, s.defaultColumn = Cn, s.defaultGroupByFn = no, s.defaultOrderByFn = Mt, s.defaultRenderer = un, s.emptyRenderer = Nn, s.ensurePluginOrder = Un, s.flexRender = tn, s.functionalUpdate = Wn, s.loopHooks = An, s.makePropGetter = hn, s.makeRenderer = Qn, s.reduceHooks = Hn, s.safeUseLayoutEffect = oe, s.useAbsoluteLayout = k, s.useAsyncDebounce = Ce, s.useBlockLayout = ln, s.useColumnOrder = i, s.useExpanded = pt, s.useFilters = Xt, s.useFlexLayout = Ln, s.useGetLatest = Dn, s.useGlobalFilter = Yt, s.useGridLayout = xn, s.useGroupBy = St, s.useMountedLayoutEffect = Kn, s.usePagination = io, s.useResizeColumns = S, s.useRowSelect = Rt, s.useRowState = ho, s.useSortBy = ao, s.useTable = at, Object.defineProperty(s, "__esModule", { value: !0 });
    });
  }(Do, Do.exports)), Do.exports;
}
process.env.NODE_ENV === "production" ? Ma.exports = Ku() : Ma.exports = qu();
var st = Ma.exports;
function zu(o, d, s) {
  var C = this, b = A.useRef(null), P = A.useRef(0), y = A.useRef(null), B = A.useRef([]), nn = A.useRef(), h = A.useRef(), pn = A.useRef(o), M = A.useRef(!0);
  pn.current = o;
  var un = !d && d !== 0 && typeof window < "u";
  if (typeof o != "function")
    throw new TypeError("Expected a function");
  d = +d || 0, s = s || {};
  var Nn = !!s.leading, Cn = "trailing" in s ? !!s.trailing : !0, fn = "maxWait" in s, qn = fn ? Math.max(+s.maxWait || 0, d) : null, hn = A.useCallback(function(tn) {
    var dn = B.current, zn = nn.current;
    return B.current = nn.current = null, P.current = tn, h.current = pn.current.apply(zn, dn);
  }, []), Hn = A.useCallback(function(tn, dn) {
    un && cancelAnimationFrame(y.current), y.current = un ? requestAnimationFrame(tn) : setTimeout(tn, dn);
  }, [un]), An = A.useCallback(function(tn) {
    if (!M.current)
      return !1;
    var dn = tn - b.current, zn = tn - P.current;
    return !b.current || dn >= d || dn < 0 || fn && zn >= qn;
  }, [qn, fn, d]), Un = A.useCallback(function(tn) {
    return y.current = null, Cn && B.current ? hn(tn) : (B.current = nn.current = null, h.current);
  }, [hn, Cn]), Wn = A.useCallback(function() {
    var tn = Date.now();
    if (An(tn))
      return Un(tn);
    if (M.current) {
      var dn = tn - b.current, zn = tn - P.current, Xn = d - dn, Jn = fn ? Math.min(Xn, qn - zn) : Xn;
      Hn(Wn, Jn);
    }
  }, [qn, fn, An, Hn, Un, d]), Dn = A.useCallback(function() {
    y.current && (un ? cancelAnimationFrame(y.current) : clearTimeout(y.current)), P.current = 0, B.current = b.current = nn.current = y.current = null;
  }, [un]), oe = A.useCallback(function() {
    return y.current ? Un(Date.now()) : h.current;
  }, [Un]);
  A.useEffect(function() {
    return M.current = !0, function() {
      M.current = !1;
    };
  }, []);
  var Kn = A.useCallback(function() {
    for (var tn = [], dn = 0; dn < arguments.length; dn++)
      tn[dn] = arguments[dn];
    var zn = Date.now(), Xn = An(zn);
    if (B.current = tn, nn.current = C, b.current = zn, Xn) {
      if (!y.current && M.current)
        return P.current = b.current, Hn(Wn, d), Nn ? hn(b.current) : h.current;
      if (fn)
        return Hn(Wn, d), hn(b.current);
    }
    return y.current || Hn(Wn, d), h.current;
  }, [hn, Nn, fn, An, Hn, Wn, d]), Ce = A.useCallback(function() {
    return !!y.current;
  }, []), Qn = A.useMemo(function() {
    return {
      callback: Kn,
      cancel: Dn,
      flush: oe,
      pending: Ce
    };
  }, [Kn, Dn, oe, Ce]);
  return Qn;
}
function _u(o, d) {
  return o === d;
}
function Ua(o) {
  return typeof o == "function" ? function() {
    return o;
  } : o;
}
function Xu(o) {
  var d = A.useState(Ua(o)), s = d[0], C = d[1], b = A.useCallback(function(P) {
    return C(Ua(P));
  }, []);
  return [s, b];
}
function Yu(o, d, s) {
  var C = s && s.equalityFn || _u, b = Xu(o), P = b[0], y = b[1], B = zu(A.useCallback(function(h) {
    return y(h);
  }, [y]), d, s), nn = A.useRef(o);
  return A.useEffect(function() {
    C(nn.current, o) || (B.callback(o), nn.current = o);
  }, [o, B, C]), [P, { cancel: B.cancel, pending: B.pending, flush: B.flush }];
}
function ju(o) {
  return rr({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" } }] })(o);
}
function Uu(o) {
  return rr({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "polyline", attr: { fill: "none", strokeWidth: "2", points: "9 6 15 12 9 18", transform: "matrix(-1 0 0 1 24 0)" } }] })(o);
}
function Ju(o) {
  if (Array.isArray(o) || (o.general.geoType === "us-county" || o.general.geoType === "single-state" || o.general.geoType === "us" && (o != null && o.data)) && (o == null || o.data.forEach((d) => {
    d[o.columns.geo.name] && (!isNaN(parseInt(d[o.columns.geo.name])) && d[o.columns.geo.name].length === 4 && (d[o.columns.geo.name] = 0 + d[o.columns.geo.name]), d[o.columns.geo.name] = d[o.columns.geo.name].toString());
  })), Array.isArray(o) && o.length > 0) {
    let d = Object.keys(o[0]), s = ["fips", "FIPS", "fips codes", "FIPS CODES", "Fips Codes", "fips Codes", "Fips codes", "FIPS Codes"];
    const C = d.filter((b) => s.includes(b));
    if (!C.length)
      return;
    o == null || o.forEach((b) => {
      b[C] && (!isNaN(parseInt(b[C])) && b[C].length === 4 && (b[C] = 0 + b[C]), b[C] = b[C].toString());
    });
  }
  return o;
}
const ba = 10, ot = {
  emptyCols: "It looks like your column headers are missing some data. Please make sure all of your columns have titles and upload your file again.",
  emptyData: "Your data file is empty.",
  dataType: "Your datatype is not supported.",
  fileType: "The file type that you are trying to upload is not supported.",
  formatting: "Please check the formatting of your data file.",
  failedFetch: "Error fetching or parsing data file.",
  urlInvalid: "Please make sure to use a valid URL.",
  cannotReach: "Cannot reach URL, please make sure it's correct.",
  fileTooLarge: `File is too large. Maximum file size is ${ba}MB.`
}, $u = A.memo(({ globalFilter: o, setGlobalFilter: d, disabled: s = !1 }) => {
  const [C, b] = A.useState(o), [P] = Yu(C, 200);
  A.useEffect(() => {
    typeof P == "string" && P !== o && d(P ?? "");
  }, [P]);
  const y = (B) => {
    b(B.target.value);
  };
  return /* @__PURE__ */ m.createElement(
    "input",
    {
      className: "filter",
      value: C,
      onChange: y,
      type: "search",
      placeholder: "Filter...",
      disabled: s
    }
  );
}), Ja = A.memo(({ globalFilter: o, data: d, setGlobalFilter: s }) => /* @__PURE__ */ m.createElement("header", { className: "data-table-header" }, /* @__PURE__ */ m.createElement("h2", null, "Data Preview"), /* @__PURE__ */ m.createElement($u, { globalFilter: o || "", setGlobalFilter: s, disabled: d === null }))), Zu = A.memo(({ previousPage: o, nextPage: d, canPreviousPage: s, canNextPage: C, pageNumber: b, totalPages: P }) => /* @__PURE__ */ m.createElement("footer", { className: "data-table-pagination mt-2" }, /* @__PURE__ */ m.createElement("ul", null, /* @__PURE__ */ m.createElement("li", null, /* @__PURE__ */ m.createElement(
  "button",
  {
    onClick: () => o(),
    className: "btn btn-prev display-flex align-items-center justify-content-center",
    disabled: !s,
    title: "Previous Page"
  },
  " ",
  /* @__PURE__ */ m.createElement(Uu, null)
)), /* @__PURE__ */ m.createElement("li", { className: "me-2" }, /* @__PURE__ */ m.createElement(
  "button",
  {
    onClick: () => d(),
    className: "btn btn-next display-flex align-items-center justify-content-center",
    disabled: !C,
    title: "Next Page"
  },
  /* @__PURE__ */ m.createElement(ju, null)
))), /* @__PURE__ */ m.createElement("span", null, "Page ", b, " of ", P))), Qu = () => {
  const { config: o } = A.useContext(ct), d = A.useMemo(() => o.type === "dashboard" ? Object.values(o.datasets).find((tn) => tn.preview && Array.isArray(tn.data)) : o.data, [o.type, o.data, o.datasets]), [s, C] = A.useState(d), b = (tn) => {
    const dn = Object.keys(tn[0]).includes("tableData"), zn = pn(dn ? tn[0].tableData : tn);
    return Ju(zn), zn;
  }, P = (tn) => C(b(tn)), y = A.useContext(Et), B = async (tn, dn) => {
    if (dn.preview)
      if (dn.dataUrl) {
        const zn = await Pa(dn.dataUrl);
        Array.isArray(zn) && P(zn);
      } else
        Array.isArray(dn.data) && P(dn.data);
  }, nn = async (tn) => {
    for (const dn of Object.keys(tn))
      await B(dn, tn[dn]);
  };
  A.useEffect(() => {
    (async () => {
      if (o.data)
        P(d);
      else if (o.type === "dashboard")
        await nn(o.datasets);
      else if (o.dataUrl) {
        const dn = await Pa(o.dataUrl);
        Array.isArray(dn) && P(dn);
      }
    })();
  }, [o, o.data, d]);
  const h = A.useMemo(() => {
    if (!s)
      return [];
    const tn = s.columns ?? [];
    return tn.length > 0 && tn.includes("") && y({ type: "EDITOR_SET_ERRORS", payload: [ot.emptyCols] }), tn.map((dn) => ({
      id: `column-${dn}`,
      accessor: (Xn) => Xn[dn],
      Header: dn
    }));
  }, [s]), pn = (tn) => {
    let dn = [];
    tn.forEach((Xn) => {
      Object.keys(Xn).forEach((Jn) => {
        dn.includes(Jn) === !1 && dn.push(Jn);
      });
    });
    const zn = [...tn];
    if (Array.isArray(zn))
      return zn.columns = dn, zn;
  }, {
    getTableProps: M,
    getTableBodyProps: un,
    headerGroups: Nn,
    state: { pageIndex: Cn, globalFilter: fn },
    prepareRow: qn,
    setGlobalFilter: hn,
    page: Hn,
    canPreviousPage: An,
    canNextPage: Un,
    pageOptions: Wn,
    nextPage: Dn,
    previousPage: oe
  } = st.useTable(
    { columns: h, data: s, initialState: { pageSize: 25 } },
    st.useFlexLayout,
    st.useGlobalFilter,
    st.useSortBy,
    st.useResizeColumns,
    st.usePagination
  ), Kn = () => /* @__PURE__ */ m.createElement("section", { className: "no-data" }, /* @__PURE__ */ m.createElement("section", { className: "no-data-message" }, /* @__PURE__ */ m.createElement("section", null, /* @__PURE__ */ m.createElement("h3", null, "No Data"), /* @__PURE__ */ m.createElement("p", null, "Import data to preview"))), /* @__PURE__ */ m.createElement("div", { className: "table-container mt-2" }, /* @__PURE__ */ m.createElement("table", { className: "editor data-table", role: "table" }, /* @__PURE__ */ m.createElement("thead", null, /* @__PURE__ */ m.createElement("tr", null, /* @__PURE__ */ m.createElement("th", { scope: "col", colSpan: 1, role: "columnheader" }), /* @__PURE__ */ m.createElement("th", { scope: "col", colSpan: 1, role: "columnheader" }), /* @__PURE__ */ m.createElement("th", { scope: "col", colSpan: 1, role: "columnheader" }))), /* @__PURE__ */ m.createElement("tbody", null, /* @__PURE__ */ m.createElement(m.Fragment, null, [...Array(10)].map((tn, dn) => /* @__PURE__ */ m.createElement("tr", { key: dn }, /* @__PURE__ */ m.createElement("td", null), /* @__PURE__ */ m.createElement("td", null), /* @__PURE__ */ m.createElement("td", null))))))));
  if (!s)
    return [/* @__PURE__ */ m.createElement(Ja, { key: "header" }), /* @__PURE__ */ m.createElement(Kn, { key: "table" })];
  const Ce = {
    previousPage: oe,
    nextPage: Dn,
    canPreviousPage: An,
    canNextPage: Un,
    pageNumber: Cn + 1,
    totalPages: Wn.length
  }, Qn = () => /* @__PURE__ */ m.createElement("div", { className: "table-responsive" }, /* @__PURE__ */ m.createElement("table", { className: "mt-2 w-100 table table-striped data-table table-sm ", "aria-hidden": "true", ...M }, /* @__PURE__ */ m.createElement("thead", null, Nn.map((tn) => /* @__PURE__ */ m.createElement("tr", { ...tn.getHeaderGroupProps() }, tn.headers.map((dn) => /* @__PURE__ */ m.createElement(
    "th",
    {
      scope: "col",
      ...dn.getHeaderProps(dn.getSortByToggleProps()),
      className: dn.isSorted ? dn.isSortedDesc ? "sort sort-desc" : "sort sort-asc" : "",
      title: dn.Header
    },
    dn.render("Header"),
    /* @__PURE__ */ m.createElement("div", { ...dn.getResizerProps(), className: "resizer" })
  ))))), /* @__PURE__ */ m.createElement("tbody", { ...un() }, Hn.map((tn) => (qn(tn), /* @__PURE__ */ m.createElement("tr", { ...tn.getRowProps() }, tn.cells.map((dn) => /* @__PURE__ */ m.createElement("td", { ...dn.getCellProps(), title: dn.value }, dn.render("Cell")))))))), /* @__PURE__ */ m.createElement(Zu, { ...Ce }));
  return [
    /* @__PURE__ */ m.createElement(Ja, { key: "header", data: s, setGlobalFilter: hn, globalFilter: fn }),
    /* @__PURE__ */ m.createElement(Qn, { key: "table" })
  ];
}, ni = (o) => /* @__PURE__ */ A.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", ...o }, /* @__PURE__ */ A.createElement("path", { d: "M314.222 197.78c51.091 51.091 54.377 132.287 9.75 187.16-6.242 7.73-2.784 3.865-84.94 86.02-54.696 54.696-143.266 54.745-197.99 0-54.711-54.69-54.734-143.255 0-197.99 32.773-32.773 51.835-51.899 63.409-63.457 7.463-7.452 20.331-2.354 20.486 8.192a173.31 173.31 0 0 0 4.746 37.828c.966 4.029-.272 8.269-3.202 11.198L80.632 312.57c-32.755 32.775-32.887 85.892 0 118.8 32.775 32.755 85.892 32.887 118.8 0l75.19-75.2c32.718-32.725 32.777-86.013 0-118.79a83.722 83.722 0 0 0-22.814-16.229c-4.623-2.233-7.182-7.25-6.561-12.346 1.356-11.122 6.296-21.885 14.815-30.405l4.375-4.375c3.625-3.626 9.177-4.594 13.76-2.294 12.999 6.524 25.187 15.211 36.025 26.049zM470.958 41.04c-54.724-54.745-143.294-54.696-197.99 0-82.156 82.156-78.698 78.29-84.94 86.02-44.627 54.873-41.341 136.069 9.75 187.16 10.838 10.838 23.026 19.525 36.025 26.049 4.582 2.3 10.134 1.331 13.76-2.294l4.375-4.375c8.52-8.519 13.459-19.283 14.815-30.405.621-5.096-1.938-10.113-6.561-12.346a83.706 83.706 0 0 1-22.814-16.229c-32.777-32.777-32.718-86.065 0-118.79l75.19-75.2c32.908-32.887 86.025-32.755 118.8 0 32.887 32.908 32.755 86.025 0 118.8l-45.848 45.84c-2.93 2.929-4.168 7.169-3.202 11.198a173.31 173.31 0 0 1 4.746 37.828c.155 10.546 13.023 15.644 20.486 8.192 11.574-11.558 30.636-30.684 63.409-63.457 54.733-54.735 54.71-143.3-.001-197.991z" })), Lo = A.createContext();
Lo.displayName = "SampleDataContext";
const ei = `STATE,Rate,Location,URL\r
Overall,55,Vehicle,https://www.cdc.gov\r
Alabama,130,Vehicle,https://www.cdc.gov/\r
Alaska,40,Work,https://www.cdc.gov/\r
American Samoa,55,Home,https://www.cdc.gov/\r
Arizona,57,School,https://www.cdc.gov/\r
Arkansas,60,School,https://www.cdc.gov/\r
California,30,Home,https://www.cdc.gov/\r
Colorado,40,Vehicle,https://www.cdc.gov/\r
Connecticut,55,Home,https://www.cdc.gov/\r
Delaware,57,Home,https://www.cdc.gov/\r
DC,60,Home,https://www.cdc.gov/\r
Florida,30,Work,https://www.cdc.gov/\r
Georgia,40,Work,https://www.cdc.gov/\r
Guam,55,Home,https://www.cdc.gov/\r
Hawaii,57,School,https://www.cdc.gov/\r
Idaho,60,School,https://www.cdc.gov/\r
Illinois,30,Work,https://www.cdc.gov/\r
Indiana,40,Vehicle,https://www.cdc.gov/\r
Iowa,55,Home,https://www.cdc.gov/\r
Kansas,57,Home,https://www.cdc.gov/\r
Kentucky,60,NA,https://www.cdc.gov/\r
Louisiana,30,Vehicle,https://www.cdc.gov/\r
Maine,40,Work,https://www.cdc.gov/\r
Marshall Islands,55,Home,https://www.cdc.gov/\r
Maryland,57,School,https://www.cdc.gov/\r
Massachusetts,60,School,https://www.cdc.gov/\r
Michigan,12,Work,https://www.cdc.gov/\r
Micronesia,65,Vehicle,https://www.cdc.gov/\r
Minnesota,55,Home,https://www.cdc.gov/\r
Mississippi,57,Home,https://www.cdc.gov/\r
Montana,60,Home,https://www.cdc.gov/\r
Montana,30,Vehicle,https://www.cdc.gov/\r
Nebraska,40,Work,https://www.cdc.gov/\r
Nevada,55,Home,https://www.cdc.gov/\r
New Hampshire,57,School,https://www.cdc.gov/\r
New Jersey,60,School,https://www.cdc.gov/\r
New Mexico,12,Work,https://www.cdc.gov/\r
New York,40,Vehicle,https://www.cdc.gov/\r
North Carolina,55,Home,https://www.cdc.gov/\r
North Dakota,57,Home,https://www.cdc.gov/\r
Northern Mariana Islands,60,Home,https://www.cdc.gov/\r
Ohio,88,Vehicle,https://www.cdc.gov/\r
Oklahoma,40,Work,https://www.cdc.gov/\r
Oregon,55,Home,https://www.cdc.gov/\r
Palau,15,School,https://www.cdc.gov/\r
Pennsylvania,60,School,https://www.cdc.gov/\r
Puerto Rico,30,Work,https://www.cdc.gov/\r
Rhode Island,40,Vehicle,https://www.cdc.gov/\r
South Carolina,55,Home,https://www.cdc.gov/\r
South Dakota,86,Home,https://www.cdc.gov/\r
Tennessee,60,Home,https://www.cdc.gov/\r
Texas,30,Vehicle,https://www.cdc.gov/\r
Utah,54,Work,https://www.cdc.gov/\r
Vermont,40,Home,https://www.cdc.gov/\r
Virgin Islands,55,School,https://www.cdc.gov/\r
Virginia,57,School,https://www.cdc.gov/\r
Washington,62,Work,https://www.cdc.gov/\r
West Virginia,25,Vehicle,https://www.cdc.gov/\r
Wyoming,43,Vehicle,https://www.cdc.gov/\r
`, ti = `Location,symbolCol,textCol,orderCol\r
School,¶,Footnote 4,4\r
School,§,Footnote 3,3\r
School,†,Footnote 2,2\r
School,*,Footnote 1,1\r
Vehicle,*,Some Vehicle Footnote,1\r
Work,*,Some Work Footnote,1\r
Home,*,Some Home Footnote,1`, oi = `Race,Age-adjusted rate
Hispanic or Latino,644.2
Non-Hispanic American Indian,636.1
Non-Hispanic Black,563.7
Non-Hispanic Asian or Pacific Islander,202.5
Non-Hispanic White,183.6
`, ai = `FIPS Codes,County,Public Health Jurisdiction,Percent Vaccinated,Vaccination Coverage Group
02013,Aleutians East Borough,AK,99.99,70% or More
02016,Aleutians West Census Area,AK,89.74,70% or More
02020,Anchorage Municipality,AK,60.67,60% - 69.9%
02050,Bethel Census Area,AK,85.38,70% or More
02060,Bristol Bay Borough,AK,99.99,70% or More
02068,Denali Borough,AK,50.41,50% - 59.9%
02070,Dillingham Census Area,AK,65.34,60% - 69.9%
02090,Fairbanks North Star Borough,AK,53.3,50% - 59.9%
02100,Haines Borough,AK,47.03,40% - 49.9%
02105,Hoonah-Angoon Census Area,AK,88.32,70% or More
02110,Juneau City and Borough,AK,78.68,70% or More
02122,Kenai Peninsula Borough,AK,31.23,30% - 39.9%
02130,Ketchikan Gateway Borough,AK,63.86,60% - 69.9%
02150,Kodiak Island Borough,AK,69.59,60% - 69.9%
02158,Kusilvak Census Area,AK,98.33,70% or More
02164,Lake and Peninsula Borough,AK,65.73,60% - 69.9%
02170,Matanuska-Susitna Borough,AK,32.13,30% - 39.9%
02180,Nome Census Area,AK,88.57,70% or More
02185,North Slope Borough,AK,53.89,50% - 59.9%
02188,Northwest Arctic Borough,AK,75.06,70% or More
02195,Petersburg Census Area,AK,74.48,70% or More
02198,Prince of Wales-Hyder Census Area,AK,57.75,50% - 59.9%
02220,Sitka City and Borough,AK,75.12,70% or More
02230,Skagway Municipality,AK,99.99,70% or More
02240,Southeast Fairbanks Census Area,AK,23.94,20% - 29.9%
02261,Valdez-Cordova Census Area,AK,40.92,40% - 49.9%
02275,Wrangell City and Borough,AK,45.73,40% - 49.9%
02282,Yakutat City and Borough,AK,96.67,70% or More
02290,Yukon-Koyukuk Census Area,AK,86.47,70% or More
01001,Autauga County,AL,34.13,30% - 39.9%
01003,Baldwin County,AL,37.55,30% - 39.9%
01005,Barbour County,AL,32.78,30% - 39.9%
01007,Bibb County,AL,24.83,20% - 29.9%
01009,Blount County,AL,19.69,0% - 19.9%
01011,Bullock County,AL,50.59,50% - 59.9%
01013,Butler County,AL,28.25,20% - 29.9%
01015,Calhoun County,AL,33.01,30% - 39.9%
01017,Chambers County,AL,20.28,20% - 29.9%
01019,Cherokee County,AL,14.04,0% - 19.9%
01021,Chilton County,AL,25.24,20% - 29.9%
01023,Choctaw County,AL,39.57,30% - 39.9%
01025,Clarke County,AL,37.54,30% - 39.9%
01027,Clay County,AL,23.85,20% - 29.9%
01029,Cleburne County,AL,14.83,0% - 19.9%
01031,Coffee County,AL,26.38,20% - 29.9%
01033,Colbert County,AL,37.04,30% - 39.9%
01035,Conecuh County,AL,31.94,30% - 39.9%
01037,Coosa County,AL,23.87,20% - 29.9%
01039,Covington County,AL,21.4,20% - 29.9%
01041,Crenshaw County,AL,19.49,0% - 19.9%
01043,Cullman County,AL,20.77,20% - 29.9%
01045,Dale County,AL,27.59,20% - 29.9%
01047,Dallas County,AL,35.95,30% - 39.9%
01049,DeKalb County,AL,20.97,20% - 29.9%
01051,Elmore County,AL,31.41,30% - 39.9%
01053,Escambia County,AL,20.24,20% - 29.9%
01055,Etowah County,AL,27.95,20% - 29.9%
01057,Fayette County,AL,20.02,20% - 29.9%
01059,Franklin County,AL,28.59,20% - 29.9%
01061,Geneva County,AL,14.87,0% - 19.9%
01063,Greene County,AL,44.05,40% - 49.9%
01065,Hale County,AL,58.53,50% - 59.9%
01067,Henry County,AL,22.4,20% - 29.9%
01069,Houston County,AL,27.27,20% - 29.9%
01071,Jackson County,AL,27.12,20% - 29.9%
01073,Jefferson County,AL,55.79,50% - 59.9%
01075,Lamar County,AL,16.74,0% - 19.9%
01077,Lauderdale County,AL,30.71,30% - 39.9%
01079,Lawrence County,AL,23.08,20% - 29.9%
01081,Lee County,AL,32.87,30% - 39.9%
01083,Limestone County,AL,21.03,20% - 29.9%
01085,Lowndes County,AL,48.36,40% - 49.9%
01087,Macon County,AL,50.19,50% - 59.9%
01089,Madison County,AL,57.67,50% - 59.9%
01091,Marengo County,AL,47.2,40% - 49.9%
01093,Marion County,AL,17.5,0% - 19.9%
01095,Marshall County,AL,31.06,30% - 39.9%
01097,Mobile County,AL,39.18,30% - 39.9%
01099,Monroe County,AL,31.45,30% - 39.9%
01101,Montgomery County,AL,50.54,50% - 59.9%
01103,Morgan County,AL,26.11,20% - 29.9%
01105,Perry County,AL,43.88,40% - 49.9%
01107,Pickens County,AL,36.8,30% - 39.9%
01109,Pike County,AL,39.77,30% - 39.9%
01111,Randolph County,AL,12.65,0% - 19.9%
01113,Russell County,AL,36.78,30% - 39.9%
01117,Shelby County,AL,34.86,30% - 39.9%
01115,St. Clair County,AL,25.68,20% - 29.9%
01119,Sumter County,AL,58.55,50% - 59.9%
01121,Talladega County,AL,24.3,20% - 29.9%
01123,Tallapoosa County,AL,23.69,20% - 29.9%
01125,Tuscaloosa County,AL,39.99,30% - 39.9%
01127,Walker County,AL,28.51,20% - 29.9%
01129,Washington County,AL,24.47,20% - 29.9%
01131,Wilcox County,AL,51.67,50% - 59.9%
01133,Winston County,AL,8.29,0% - 19.9%
05001,Arkansas County,AR,55.55,50% - 59.9%
05003,Ashley County,AR,40.57,40% - 49.9%
05005,Baxter County,AR,32.08,30% - 39.9%
05007,Benton County,AR,57.67,50% - 59.9%
05009,Boone County,AR,28.04,20% - 29.9%
05011,Bradley County,AR,54.5,50% - 59.9%
05013,Calhoun County,AR,30.18,30% - 39.9%
05015,Carroll County,AR,36.62,30% - 39.9%
05017,Chicot County,AR,51.86,50% - 59.9%
05019,Clark County,AR,57.84,50% - 59.9%
05021,Clay County,AR,35.06,30% - 39.9%
05023,Cleburne County,AR,28.57,20% - 29.9%
05025,Cleveland County,AR,44.1,40% - 49.9%
05027,Columbia County,AR,51.25,50% - 59.9%
05029,Conway County,AR,51.04,50% - 59.9%
05031,Craighead County,AR,44.69,40% - 49.9%
05033,Crawford County,AR,39.84,30% - 39.9%
05035,Crittenden County,AR,42.57,40% - 49.9%
05037,Cross County,AR,44.26,40% - 49.9%
05039,Dallas County,AR,62.9,60% - 69.9%
05041,Desha County,AR,53.16,50% - 59.9%
05043,Drew County,AR,49.58,40% - 49.9%
05045,Faulkner County,AR,50.18,50% - 59.9%
05047,Franklin County,AR,40.72,40% - 49.9%
05049,Fulton County,AR,26.74,20% - 29.9%
05051,Garland County,AR,45.09,40% - 49.9%
05053,Grant County,AR,36.88,30% - 39.9%
05055,Greene County,AR,37.32,30% - 39.9%
05057,Hempstead County,AR,29.71,20% - 29.9%
05059,Hot Spring County,AR,39.6,30% - 39.9%
05061,Howard County,AR,37.23,30% - 39.9%
05063,Independence County,AR,37.18,30% - 39.9%
05065,Izard County,AR,37.32,30% - 39.9%
05067,Jackson County,AR,33.98,30% - 39.9%
05069,Jefferson County,AR,50.85,50% - 59.9%
05071,Johnson County,AR,45.67,40% - 49.9%
05073,Lafayette County,AR,25.39,20% - 29.9%
05075,Lawrence County,AR,38,30% - 39.9%
05077,Lee County,AR,25.23,20% - 29.9%
05079,Lincoln County,AR,38.65,30% - 39.9%
05081,Little River County,AR,23.08,20% - 29.9%
05083,Logan County,AR,38.48,30% - 39.9%
05085,Lonoke County,AR,46.96,40% - 49.9%
05087,Madison County,AR,34.63,30% - 39.9%
05089,Marion County,AR,17.97,0% - 19.9%
05091,Miller County,AR,21.71,20% - 29.9%
05093,Mississippi County,AR,32.99,30% - 39.9%
05095,Monroe County,AR,63.26,60% - 69.9%
05097,Montgomery County,AR,21.62,20% - 29.9%
05099,Nevada County,AR,39.97,30% - 39.9%
05101,Newton County,AR,18.95,0% - 19.9%
05103,Ouachita County,AR,48.36,40% - 49.9%
05105,Perry County,AR,47.07,40% - 49.9%
05107,Phillips County,AR,44.03,40% - 49.9%
05109,Pike County,AR,29.4,20% - 29.9%
05111,Poinsett County,AR,41.64,40% - 49.9%
05113,Polk County,AR,23.59,20% - 29.9%
05115,Pope County,AR,47.51,40% - 49.9%
05117,Prairie County,AR,37.43,30% - 39.9%
05119,Pulaski County,AR,64.24,60% - 69.9%
05121,Randolph County,AR,30.79,30% - 39.9%
05125,Saline County,AR,58.77,50% - 59.9%
05127,Scott County,AR,34.7,30% - 39.9%
05129,Searcy County,AR,23.49,20% - 29.9%
05131,Sebastian County,AR,51.32,50% - 59.9%
05133,Sevier County,AR,36.78,30% - 39.9%
05135,Sharp County,AR,32.8,30% - 39.9%
05123,St. Francis County,AR,31.13,30% - 39.9%
05137,Stone County,AR,26.39,20% - 29.9%
05139,Union County,AR,46.07,40% - 49.9%
05141,Van Buren County,AR,24.51,20% - 29.9%
05143,Washington County,AR,68.75,60% - 69.9%
05145,White County,AR,38.29,30% - 39.9%
05147,Woodruff County,AR,47.16,40% - 49.9%
05149,Yell County,AR,48.3,40% - 49.9%
04001,Apache County,AZ,99.99,70% or More
04003,Cochise County,AZ,74.89,70% or More
04005,Coconino County,AZ,99.99,70% or More
04007,Gila County,AZ,50,50% - 59.9%
04009,Graham County,AZ,56.24,50% - 59.9%
04011,Greenlee County,AZ,29.7,20% - 29.9%
04012,La Paz County,AZ,62.19,60% - 69.9%
04013,Maricopa County,AZ,53.84,50% - 59.9%
04015,Mohave County,AZ,21.79,20% - 29.9%
04017,Navajo County,AZ,99.99,70% or More
04019,Pima County,AZ,71.56,70% or More
04021,Pinal County,AZ,46.57,40% - 49.9%
04023,Santa Cruz County,AZ,99.99,70% or More
04025,Yavapai County,AZ,27.9,20% - 29.9%
04027,Yuma County,AZ,84.7,70% or More
06001,Alameda County,CA,96.69,70% or More
06003,Alpine County,CA,0,No Data
06005,Amador County,CA,52.34,50% - 59.9%
06007,Butte County,CA,43.08,40% - 49.9%
06009,Calaveras County,CA,46.21,40% - 49.9%
06011,Colusa County,CA,48.69,40% - 49.9%
06013,Contra Costa County,CA,88.29,70% or More
06015,Del Norte County,CA,35.33,30% - 39.9%
06017,El Dorado County,CA,55,50% - 59.9%
06019,Fresno County,CA,59.34,50% - 59.9%
06021,Glenn County,CA,46.92,40% - 49.9%
06023,Humboldt County,CA,67.9,60% - 69.9%
06025,Imperial County,CA,99.99,70% or More
06027,Inyo County,CA,0,No Data
06029,Kern County,CA,53.02,50% - 59.9%
06031,Kings County,CA,48.71,40% - 49.9%
06033,Lake County,CA,44.78,40% - 49.9%
06035,Lassen County,CA,21.66,20% - 29.9%
06037,Los Angeles County,CA,84.51,70% or More
06039,Madera County,CA,54.47,50% - 59.9%
06041,Marin County,CA,99.99,70% or More
06043,Mariposa County,CA,0,No Data
06045,Mendocino County,CA,60.57,60% - 69.9%
06047,Merced County,CA,55.46,50% - 59.9%
06049,Modoc County,CA,0,No Data
06051,Mono County,CA,0,No Data
06053,Monterey County,CA,78.63,70% or More
06055,Napa County,CA,85.2,70% or More
06057,Nevada County,CA,59.26,50% - 59.9%
06059,Orange County,CA,75.05,70% or More
06061,Placer County,CA,60.42,60% - 69.9%
06063,Plumas County,CA,0,No Data
06065,Riverside County,CA,56.33,50% - 59.9%
06067,Sacramento County,CA,67.5,60% - 69.9%
06069,San Benito County,CA,69.89,60% - 69.9%
06071,San Bernardino County,CA,53.59,50% - 59.9%
06073,San Diego County,CA,99.99,70% or More
06075,San Francisco County,CA,99.99,70% or More
06077,San Joaquin County,CA,63.97,60% - 69.9%
06079,San Luis Obispo County,CA,64.59,60% - 69.9%
06081,San Mateo County,CA,96.53,70% or More
06083,Santa Barbara County,CA,73.94,70% or More
06085,Santa Clara County,CA,93.97,70% or More
06087,Santa Cruz County,CA,94.82,70% or More
06089,Shasta County,CA,32.94,30% - 39.9%
06091,Sierra County,CA,0,No Data
06093,Siskiyou County,CA,31.4,30% - 39.9%
06095,Solano County,CA,72.68,70% or More
06097,Sonoma County,CA,82.99,70% or More
06099,Stanislaus County,CA,61.79,60% - 69.9%
06101,Sutter County,CA,52.75,50% - 59.9%
06103,Tehama County,CA,28.55,20% - 29.9%
06105,Trinity County,CA,0,No Data
06107,Tulare County,CA,48.81,40% - 49.9%
06109,Tuolumne County,CA,41.79,40% - 49.9%
06111,Ventura County,CA,72.48,70% or More
06113,Yolo County,CA,76.78,70% or More
06115,Yuba County,CA,43.73,40% - 49.9%
08001,Adams County,CO,65.08,60% - 69.9%
08003,Alamosa County,CO,54.84,50% - 59.9%
08005,Arapahoe County,CO,67.65,60% - 69.9%
08007,Archuleta County,CO,37.97,30% - 39.9%
08009,Baca County,CO,15.77,0% - 19.9%
08011,Bent County,CO,29.08,20% - 29.9%
08013,Boulder County,CO,80.5,70% or More
08014,Broomfield County,CO,81.91,70% or More
08015,Chaffee County,CO,51.64,50% - 59.9%
08019,Clear Creek County,CO,49.8,40% - 49.9%
08021,Conejos County,CO,43.62,40% - 49.9%
08025,Crowley County,CO,21.4,20% - 29.9%
08027,Custer County,CO,19.48,0% - 19.9%
08029,Delta County,CO,25.45,20% - 29.9%
08031,Denver County,CO,79.16,70% or More
08033,Dolores County,CO,15.54,0% - 19.9%
08035,Douglas County,CO,69.32,60% - 69.9%
08037,Eagle County,CO,86.79,70% or More
08041,El Paso County,CO,54.31,50% - 59.9%
08039,Elbert County,CO,24.91,20% - 29.9%
08043,Fremont County,CO,20.99,20% - 29.9%
08045,Garfield County,CO,62.95,60% - 69.9%
08047,Gilpin County,CO,50,50% - 59.9%
08049,Grand County,CO,46.08,40% - 49.9%
08051,Gunnison County,CO,68.72,60% - 69.9%
08055,Huerfano County,CO,26.53,20% - 29.9%
08059,Jefferson County,CO,75.43,70% or More
08061,Kiowa County,CO,18.18,0% - 19.9%
08063,Kit Carson County,CO,19.16,0% - 19.9%
08067,La Plata County,CO,71.46,70% or More
08065,Lake County,CO,63.07,60% - 69.9%
08069,Larimer County,CO,63.98,60% - 69.9%
08071,Las Animas County,CO,46.26,40% - 49.9%
08075,Logan County,CO,24.32,20% - 29.9%
08077,Mesa County,CO,35.08,30% - 39.9%
08079,Mineral County,CO,38.24,30% - 39.9%
08081,Moffat County,CO,26.68,20% - 29.9%
08083,Montezuma County,CO,53.79,50% - 59.9%
08085,Montrose County,CO,32.45,30% - 39.9%
08087,Morgan County,CO,33.22,30% - 39.9%
08089,Otero County,CO,27.61,20% - 29.9%
08091,Ouray County,CO,58.09,50% - 59.9%
08093,Park County,CO,37.02,30% - 39.9%
08095,Phillips County,CO,19.06,0% - 19.9%
08097,Pitkin County,CO,92.73,70% or More
08099,Prowers County,CO,28.92,20% - 29.9%
08101,Pueblo County,CO,46.51,40% - 49.9%
08103,Rio Blanco County,CO,25.05,20% - 29.9%
08105,Rio Grande County,CO,55.15,50% - 59.9%
08107,Routt County,CO,82.99,70% or More
08109,Saguache County,CO,19.93,0% - 19.9%
08111,San Juan County,CO,99.99,70% or More
08113,San Miguel County,CO,99.99,70% or More
08115,Sedgwick County,CO,19.88,0% - 19.9%
08117,Summit County,CO,92.09,70% or More
08119,Teller County,CO,37.95,30% - 39.9%
08121,Washington County,CO,11.08,0% - 19.9%
08123,Weld County,CO,53.76,50% - 59.9%
08125,Yuma County,CO,22.82,20% - 29.9%
09001,Fairfield County,CT,91.95,70% or More
09003,Hartford County,CT,74.68,70% or More
09005,Litchfield County,CT,73.14,70% or More
09007,Middlesex County,CT,81.54,70% or More
09009,New Haven County,CT,80.16,70% or More
09011,New London County,CT,75.04,70% or More
09013,Tolland County,CT,67.94,60% - 69.9%
09015,Windham County,CT,61.02,60% - 69.9%
11001,District of Columbia,DC,84.06,70% or More
10001,Kent County,DE,48.47,40% - 49.9%
10003,New Castle County,DE,71.72,70% or More
10005,Sussex County,DE,49.13,40% - 49.9%
12001,Alachua County,FL,69.86,60% - 69.9%
12003,Baker County,FL,19.37,0% - 19.9%
12005,Bay County,FL,32.77,30% - 39.9%
12007,Bradford County,FL,27.25,20% - 29.9%
12009,Brevard County,FL,49.6,40% - 49.9%
12011,Broward County,FL,73.98,70% or More
12013,Calhoun County,FL,18.89,0% - 19.9%
12015,Charlotte County,FL,39.34,30% - 39.9%
12017,Citrus County,FL,28.67,20% - 29.9%
12019,Clay County,FL,42.69,40% - 49.9%
12021,Collier County,FL,50.79,50% - 59.9%
12023,Columbia County,FL,29.67,20% - 29.9%
12027,DeSoto County,FL,38.09,30% - 39.9%
12029,Dixie County,FL,18.76,0% - 19.9%
12031,Duval County,FL,53.48,50% - 59.9%
12033,Escambia County,FL,35.91,30% - 39.9%
12035,Flagler County,FL,43.48,40% - 49.9%
12037,Franklin County,FL,28.96,20% - 29.9%
12039,Gadsden County,FL,52.19,50% - 59.9%
12041,Gilchrist County,FL,24.94,20% - 29.9%
12043,Glades County,FL,30.6,30% - 39.9%
12045,Gulf County,FL,27.93,20% - 29.9%
12047,Hamilton County,FL,25.11,20% - 29.9%
12049,Hardee County,FL,28.18,20% - 29.9%
12051,Hendry County,FL,38.57,30% - 39.9%
12053,Hernando County,FL,38.17,30% - 39.9%
12055,Highlands County,FL,31.06,30% - 39.9%
12057,Hillsborough County,FL,58.66,50% - 59.9%
12059,Holmes County,FL,12.15,0% - 19.9%
12061,Indian River County,FL,46.78,40% - 49.9%
12063,Jackson County,FL,19.68,0% - 19.9%
12065,Jefferson County,FL,40.6,40% - 49.9%
12067,Lafayette County,FL,21,20% - 29.9%
12069,Lake County,FL,52.9,50% - 59.9%
12071,Lee County,FL,45.02,40% - 49.9%
12073,Leon County,FL,59.83,50% - 59.9%
12075,Levy County,FL,30.48,30% - 39.9%
12077,Liberty County,FL,20.18,20% - 29.9%
12079,Madison County,FL,37.85,30% - 39.9%
12081,Manatee County,FL,48.88,40% - 49.9%
12083,Marion County,FL,42.52,40% - 49.9%
12085,Martin County,FL,48.01,40% - 49.9%
12086,Miami-Dade County,FL,91.5,70% or More
12087,Monroe County,FL,61.55,60% - 69.9%
12089,Nassau County,FL,38.43,30% - 39.9%
12091,Okaloosa County,FL,43.08,40% - 49.9%
12093,Okeechobee County,FL,30.14,30% - 39.9%
12095,Orange County,FL,77.97,70% or More
12097,Osceola County,FL,82.62,70% or More
12099,Palm Beach County,FL,60.75,60% - 69.9%
12101,Pasco County,FL,49.01,40% - 49.9%
12103,Pinellas County,FL,50.19,50% - 59.9%
12105,Polk County,FL,46.78,40% - 49.9%
12107,Putnam County,FL,28.97,20% - 29.9%
12113,Santa Rosa County,FL,37.38,30% - 39.9%
12115,Sarasota County,FL,53.24,50% - 59.9%
12117,Seminole County,FL,62.67,60% - 69.9%
12109,St. Johns County,FL,63.39,60% - 69.9%
12111,St. Lucie County,FL,49.86,40% - 49.9%
12119,Sumter County,FL,34.9,30% - 39.9%
12121,Suwannee County,FL,21.27,20% - 29.9%
12123,Taylor County,FL,23.08,20% - 29.9%
12125,Union County,FL,23.26,20% - 29.9%
12127,Volusia County,FL,45.26,40% - 49.9%
12129,Wakulla County,FL,34.3,30% - 39.9%
12131,Walton County,FL,29.73,20% - 29.9%
12133,Washington County,FL,14.09,0% - 19.9%
13001,Appling County,GA,14.04,0% - 19.9%
13007,Baker County,GA,33.17,30% - 39.9%
13021,Bibb County,GA,34.39,30% - 39.9%
13025,Brantley County,GA,10.86,0% - 19.9%
13027,Brooks County,GA,28.53,20% - 29.9%
13029,Bryan County,GA,36.95,30% - 39.9%
13031,Bulloch County,GA,32.53,30% - 39.9%
13033,Burke County,GA,38.41,30% - 39.9%
13039,Camden County,GA,41.22,40% - 49.9%
13045,Carroll County,GA,23.47,20% - 29.9%
13047,Catoosa County,GA,25.92,20% - 29.9%
13049,Charlton County,GA,17.77,0% - 19.9%
13051,Chatham County,GA,50.47,50% - 59.9%
13053,Chattahoochee County,GA,99.99,70% or More
13057,Cherokee County,GA,31.54,30% - 39.9%
13061,Clay County,GA,44.16,40% - 49.9%
13063,Clayton County,GA,36.65,30% - 39.9%
13065,Clinch County,GA,16.88,0% - 19.9%
13067,Cobb County,GA,51.43,50% - 59.9%
13069,Coffee County,GA,26.43,20% - 29.9%
13071,Colquitt County,GA,26.02,20% - 29.9%
13073,Columbia County,GA,29.38,20% - 29.9%
13075,Cook County,GA,21.4,20% - 29.9%
13077,Coweta County,GA,28.62,20% - 29.9%
13079,Crawford County,GA,13.85,0% - 19.9%
13083,Dade County,GA,30.39,30% - 39.9%
13085,Dawson County,GA,14.73,0% - 19.9%
13087,Decatur County,GA,32.84,30% - 39.9%
13089,DeKalb County,GA,50.4,50% - 59.9%
13093,Dooly County,GA,34.15,30% - 39.9%
13097,Douglas County,GA,36.98,30% - 39.9%
13101,Echols County,GA,14.58,0% - 19.9%
13103,Effingham County,GA,26.71,20% - 29.9%
13107,Emanuel County,GA,19.24,0% - 19.9%
13111,Fannin County,GA,15.26,0% - 19.9%
13113,Fayette County,GA,26.76,20% - 29.9%
13121,Fulton County,GA,44.58,40% - 49.9%
13127,Glynn County,GA,36.44,30% - 39.9%
13133,Greene County,GA,28.28,20% - 29.9%
13135,Gwinnett County,GA,42.55,40% - 49.9%
13139,Hall County,GA,35.03,30% - 39.9%
13147,Hart County,GA,14.76,0% - 19.9%
13153,Houston County,GA,35.26,30% - 39.9%
13157,Jackson County,GA,22.08,20% - 29.9%
13159,Jasper County,GA,16.23,0% - 19.9%
13167,Johnson County,GA,19.45,0% - 19.9%
13169,Jones County,GA,27.11,20% - 29.9%
13175,Laurens County,GA,29.55,20% - 29.9%
13179,Liberty County,GA,44.62,40% - 49.9%
13183,Long County,GA,14.15,0% - 19.9%
13185,Lowndes County,GA,30.23,30% - 39.9%
13197,Marion County,GA,24.48,20% - 29.9%
13191,McIntosh County,GA,27.35,20% - 29.9%
13199,Meriwether County,GA,23.92,20% - 29.9%
13209,Montgomery County,GA,21.59,20% - 29.9%
13215,Muscogee County,GA,39.81,30% - 39.9%
13217,Newton County,GA,28.56,20% - 29.9%
13221,Oglethorpe County,GA,26.82,20% - 29.9%
13223,Paulding County,GA,26.6,20% - 29.9%
13229,Pierce County,GA,12.78,0% - 19.9%
13235,Pulaski County,GA,26.64,20% - 29.9%
13239,Quitman County,GA,11.11,0% - 19.9%
13241,Rabun County,GA,27.32,20% - 29.9%
13243,Randolph County,GA,45.66,40% - 49.9%
13245,Richmond County,GA,38.14,30% - 39.9%
13251,Screven County,GA,37.38,30% - 39.9%
13259,Stewart County,GA,38.36,30% - 39.9%
13261,Sumter County,GA,42.29,40% - 49.9%
13271,Telfair County,GA,22.73,20% - 29.9%
13277,Tift County,GA,32.07,30% - 39.9%
13293,Upson County,GA,25.85,20% - 29.9%
13295,Walker County,GA,19.67,0% - 19.9%
13297,Walton County,GA,21.2,20% - 29.9%
13299,Ware County,GA,16.05,0% - 19.9%
13301,Warren County,GA,31.98,30% - 39.9%
13303,Washington County,GA,33.33,30% - 39.9%
13305,Wayne County,GA,18.21,0% - 19.9%
13309,Wheeler County,GA,24.52,20% - 29.9%
13319,Wilkinson County,GA,35.04,30% - 39.9%
15001,Hawaii County,HI,81.14,70% or More
15003,Honolulu County,HI,81.14,70% or More
15005,Kalawao County,HI,81.14,70% or More
15007,Kauai County,HI,81.14,70% or More
15009,Maui County,HI,81.14,70% or More
19001,Adair County,IA,33.78,30% - 39.9%
19003,Adams County,IA,24.71,20% - 29.9%
19005,Allamakee County,IA,33.52,30% - 39.9%
19007,Appanoose County,IA,22.67,20% - 29.9%
19009,Audubon County,IA,37.63,30% - 39.9%
19011,Benton County,IA,41.98,40% - 49.9%
19013,Black Hawk County,IA,52.15,50% - 59.9%
19015,Boone County,IA,58.12,50% - 59.9%
19017,Bremer County,IA,47.96,40% - 49.9%
19019,Buchanan County,IA,33.7,30% - 39.9%
19021,Buena Vista County,IA,44.25,40% - 49.9%
19023,Butler County,IA,36.99,30% - 39.9%
19025,Calhoun County,IA,27.88,20% - 29.9%
19027,Carroll County,IA,34.54,30% - 39.9%
19029,Cass County,IA,34.01,30% - 39.9%
19031,Cedar County,IA,48.72,40% - 49.9%
19033,Cerro Gordo County,IA,50.35,50% - 59.9%
19035,Cherokee County,IA,23.7,20% - 29.9%
19037,Chickasaw County,IA,28.07,20% - 29.9%
19039,Clarke County,IA,40.36,40% - 49.9%
19041,Clay County,IA,34.9,30% - 39.9%
19043,Clayton County,IA,20.71,20% - 29.9%
19045,Clinton County,IA,35.75,30% - 39.9%
19047,Crawford County,IA,40.07,40% - 49.9%
19049,Dallas County,IA,67.68,60% - 69.9%
19051,Davis County,IA,17.54,0% - 19.9%
19053,Decatur County,IA,18.76,0% - 19.9%
19055,Delaware County,IA,26.43,20% - 29.9%
19057,Des Moines County,IA,29.44,20% - 29.9%
19059,Dickinson County,IA,36.4,30% - 39.9%
19061,Dubuque County,IA,51.85,50% - 59.9%
19063,Emmet County,IA,27.75,20% - 29.9%
19065,Fayette County,IA,35.73,30% - 39.9%
19067,Floyd County,IA,34.94,30% - 39.9%
19069,Franklin County,IA,39.12,30% - 39.9%
19071,Fremont County,IA,27.1,20% - 29.9%
19073,Greene County,IA,39.03,30% - 39.9%
19075,Grundy County,IA,47.48,40% - 49.9%
19077,Guthrie County,IA,37.93,30% - 39.9%
19079,Hamilton County,IA,46.27,40% - 49.9%
19081,Hancock County,IA,23.62,20% - 29.9%
19083,Hardin County,IA,33.97,30% - 39.9%
19085,Harrison County,IA,35.64,30% - 39.9%
19087,Henry County,IA,33.92,30% - 39.9%
19089,Howard County,IA,31.08,30% - 39.9%
19091,Humboldt County,IA,23.8,20% - 29.9%
19093,Ida County,IA,22.2,20% - 29.9%
19095,Iowa County,IA,45.56,40% - 49.9%
19097,Jackson County,IA,26.09,20% - 29.9%
19099,Jasper County,IA,42,40% - 49.9%
19101,Jefferson County,IA,39.94,30% - 39.9%
19103,Johnson County,IA,79.22,70% or More
19105,Jones County,IA,38.31,30% - 39.9%
19107,Keokuk County,IA,17.38,0% - 19.9%
19109,Kossuth County,IA,25.11,20% - 29.9%
19111,Lee County,IA,28.18,20% - 29.9%
19113,Linn County,IA,63,60% - 69.9%
19115,Louisa County,IA,30.92,30% - 39.9%
19117,Lucas County,IA,20.76,20% - 29.9%
19119,Lyon County,IA,16.77,0% - 19.9%
19121,Madison County,IA,39.71,30% - 39.9%
19123,Mahaska County,IA,20.96,20% - 29.9%
19125,Marion County,IA,35.59,30% - 39.9%
19127,Marshall County,IA,57.51,50% - 59.9%
19129,Mills County,IA,47.88,40% - 49.9%
19131,Mitchell County,IA,30.18,30% - 39.9%
19133,Monona County,IA,28.55,20% - 29.9%
19135,Monroe County,IA,20.03,20% - 29.9%
19137,Montgomery County,IA,36.49,30% - 39.9%
19139,Muscatine County,IA,48.82,40% - 49.9%
19141,O'Brien County,IA,26.41,20% - 29.9%
19143,Osceola County,IA,19.03,0% - 19.9%
19145,Page County,IA,34.56,30% - 39.9%
19147,Palo Alto County,IA,26.5,20% - 29.9%
19149,Plymouth County,IA,31.87,30% - 39.9%
19151,Pocahontas County,IA,21.14,20% - 29.9%
19153,Polk County,IA,66.37,60% - 69.9%
19155,Pottawattamie County,IA,52.68,50% - 59.9%
19157,Poweshiek County,IA,44.03,40% - 49.9%
19159,Ringgold County,IA,27.27,20% - 29.9%
19161,Sac County,IA,19.31,0% - 19.9%
19163,Scott County,IA,52.4,50% - 59.9%
19165,Shelby County,IA,33.82,30% - 39.9%
19167,Sioux County,IA,18.53,0% - 19.9%
19169,Story County,IA,72.12,70% or More
19171,Tama County,IA,53.62,50% - 59.9%
19173,Taylor County,IA,20.65,20% - 29.9%
19175,Union County,IA,31.13,30% - 39.9%
19177,Van Buren County,IA,14.53,0% - 19.9%
19179,Wapello County,IA,31.23,30% - 39.9%
19181,Warren County,IA,51.84,50% - 59.9%
19183,Washington County,IA,41.22,40% - 49.9%
19185,Wayne County,IA,16.42,0% - 19.9%
19187,Webster County,IA,37.47,30% - 39.9%
19189,Winnebago County,IA,29.68,20% - 29.9%
19191,Winneshiek County,IA,50.07,50% - 59.9%
19193,Woodbury County,IA,45.4,40% - 49.9%
19195,Worth County,IA,33.33,30% - 39.9%
19197,Wright County,IA,40.76,40% - 49.9%
16001,Ada County,ID,0,No Data
16003,Adams County,ID,0,No Data
16005,Bannock County,ID,0,No Data
16007,Bear Lake County,ID,0,No Data
16009,Benewah County,ID,0,No Data
16011,Bingham County,ID,0,No Data
16013,Blaine County,ID,0,No Data
16015,Boise County,ID,0,No Data
16017,Bonner County,ID,0,No Data
16019,Bonneville County,ID,0,No Data
16021,Boundary County,ID,0,No Data
16023,Butte County,ID,0,No Data
16025,Camas County,ID,0,No Data
16027,Canyon County,ID,0,No Data
16029,Caribou County,ID,0,No Data
16031,Cassia County,ID,0,No Data
16033,Clark County,ID,0,No Data
16035,Clearwater County,ID,0,No Data
16037,Custer County,ID,0,No Data
16039,Elmore County,ID,0,No Data
16041,Franklin County,ID,0,No Data
16043,Fremont County,ID,0,No Data
16045,Gem County,ID,0,No Data
16047,Gooding County,ID,0,No Data
16049,Idaho County,ID,0,No Data
16051,Jefferson County,ID,0,No Data
16053,Jerome County,ID,0,No Data
16055,Kootenai County,ID,0,No Data
16057,Latah County,ID,0,No Data
16059,Lemhi County,ID,0,No Data
16061,Lewis County,ID,0,No Data
16063,Lincoln County,ID,0,No Data
16065,Madison County,ID,0,No Data
16067,Minidoka County,ID,0,No Data
16069,Nez Perce County,ID,0,No Data
16071,Oneida County,ID,0,No Data
16073,Owyhee County,ID,0,No Data
16075,Payette County,ID,0,No Data
16077,Power County,ID,0,No Data
16079,Shoshone County,ID,0,No Data
16081,Teton County,ID,0,No Data
16083,Twin Falls County,ID,0,No Data
NA,Unknown County,ID,0,No Data
16085,Valley County,ID,0,No Data
16087,Washington County,ID,0,No Data
17001,Adams County,IL,30.99,30% - 39.9%
17003,Alexander County,IL,11.97,0% - 19.9%
17005,Bond County,IL,34.76,30% - 39.9%
17007,Boone County,IL,51.62,50% - 59.9%
17009,Brown County,IL,24.86,20% - 29.9%
17011,Bureau County,IL,44.94,40% - 49.9%
17013,Calhoun County,IL,25.36,20% - 29.9%
17015,Carroll County,IL,28.44,20% - 29.9%
17017,Cass County,IL,47.27,40% - 49.9%
17019,Champaign County,IL,68.08,60% - 69.9%
17021,Christian County,IL,27.12,20% - 29.9%
17023,Clark County,IL,31.55,30% - 39.9%
17025,Clay County,IL,15.28,0% - 19.9%
17027,Clinton County,IL,43.04,40% - 49.9%
17029,Coles County,IL,33.99,30% - 39.9%
17031,Cook County,IL,73.67,70% or More
17033,Crawford County,IL,30.6,30% - 39.9%
17035,Cumberland County,IL,16.34,0% - 19.9%
17039,De Witt County,IL,35.62,30% - 39.9%
17037,DeKalb County,IL,53.64,50% - 59.9%
17041,Douglas County,IL,32.53,30% - 39.9%
17043,DuPage County,IL,77.63,70% or More
17045,Edgar County,IL,26.39,20% - 29.9%
17047,Edwards County,IL,14.9,0% - 19.9%
17049,Effingham County,IL,25.75,20% - 29.9%
17051,Fayette County,IL,17.38,0% - 19.9%
17053,Ford County,IL,43.33,40% - 49.9%
17055,Franklin County,IL,24.09,20% - 29.9%
17057,Fulton County,IL,39.61,30% - 39.9%
17059,Gallatin County,IL,34.08,30% - 39.9%
17061,Greene County,IL,22.34,20% - 29.9%
17063,Grundy County,IL,46.46,40% - 49.9%
17065,Hamilton County,IL,13.57,0% - 19.9%
17067,Hancock County,IL,24.29,20% - 29.9%
17069,Hardin County,IL,11.33,0% - 19.9%
17071,Henderson County,IL,21.09,20% - 29.9%
17073,Henry County,IL,49.87,40% - 49.9%
17075,Iroquois County,IL,28.71,20% - 29.9%
17077,Jackson County,IL,46.49,40% - 49.9%
17079,Jasper County,IL,15.47,0% - 19.9%
17081,Jefferson County,IL,27.26,20% - 29.9%
17083,Jersey County,IL,36.22,30% - 39.9%
17085,Jo Daviess County,IL,49.97,40% - 49.9%
17087,Johnson County,IL,19.48,0% - 19.9%
17089,Kane County,IL,63.79,60% - 69.9%
17091,Kankakee County,IL,35.93,30% - 39.9%
17093,Kendall County,IL,67.97,60% - 69.9%
17095,Knox County,IL,41.02,40% - 49.9%
17097,Lake County,IL,81.55,70% or More
17099,LaSalle County,IL,46.19,40% - 49.9%
17101,Lawrence County,IL,19.39,0% - 19.9%
17103,Lee County,IL,44.16,40% - 49.9%
17105,Livingston County,IL,30.43,30% - 39.9%
17107,Logan County,IL,36.76,30% - 39.9%
17115,Macon County,IL,35.34,30% - 39.9%
17117,Macoupin County,IL,36.91,30% - 39.9%
17119,Madison County,IL,52.14,50% - 59.9%
17121,Marion County,IL,23.1,20% - 29.9%
17123,Marshall County,IL,42.16,40% - 49.9%
17125,Mason County,IL,26.73,20% - 29.9%
17127,Massac County,IL,15.97,0% - 19.9%
17109,McDonough County,IL,48.29,40% - 49.9%
17111,McHenry County,IL,59.54,50% - 59.9%
17113,McLean County,IL,67.19,60% - 69.9%
17129,Menard County,IL,41.18,40% - 49.9%
17131,Mercer County,IL,45.33,40% - 49.9%
17133,Monroe County,IL,52.46,50% - 59.9%
17135,Montgomery County,IL,34.69,30% - 39.9%
17137,Morgan County,IL,41.2,40% - 49.9%
17139,Moultrie County,IL,20.26,20% - 29.9%
17141,Ogle County,IL,45.17,40% - 49.9%
17143,Peoria County,IL,51.88,50% - 59.9%
17145,Perry County,IL,25.03,20% - 29.9%
17147,Piatt County,IL,51.08,50% - 59.9%
17149,Pike County,IL,17,0% - 19.9%
17151,Pope County,IL,19.11,0% - 19.9%
17153,Pulaski County,IL,24.24,20% - 29.9%
17155,Putnam County,IL,39.44,30% - 39.9%
17157,Randolph County,IL,30.29,30% - 39.9%
17159,Richland County,IL,26.41,20% - 29.9%
17161,Rock Island County,IL,53.78,50% - 59.9%
17165,Saline County,IL,26.27,20% - 29.9%
17167,Sangamon County,IL,55.02,50% - 59.9%
17169,Schuyler County,IL,33.26,30% - 39.9%
17171,Scott County,IL,18.27,0% - 19.9%
17173,Shelby County,IL,16.69,0% - 19.9%
17163,St. Clair County,IL,55.01,50% - 59.9%
17175,Stark County,IL,31.57,30% - 39.9%
17177,Stephenson County,IL,38.22,30% - 39.9%
17179,Tazewell County,IL,45.9,40% - 49.9%
17181,Union County,IL,34.69,30% - 39.9%
17183,Vermilion County,IL,21.81,20% - 29.9%
17185,Wabash County,IL,24.74,20% - 29.9%
17187,Warren County,IL,37.27,30% - 39.9%
17189,Washington County,IL,42.4,40% - 49.9%
17191,Wayne County,IL,16.99,0% - 19.9%
17193,White County,IL,23.06,20% - 29.9%
17195,Whiteside County,IL,47.03,40% - 49.9%
17197,Will County,IL,65.32,60% - 69.9%
17199,Williamson County,IL,37.71,30% - 39.9%
17201,Winnebago County,IL,45.23,40% - 49.9%
17203,Woodford County,IL,38.79,30% - 39.9%
18001,Adams County,IN,13.41,0% - 19.9%
18003,Allen County,IN,42.32,40% - 49.9%
18005,Bartholomew County,IN,52.19,50% - 59.9%
18007,Benton County,IN,26.28,20% - 29.9%
18009,Blackford County,IN,23.63,20% - 29.9%
18011,Boone County,IN,72.39,70% or More
18013,Brown County,IN,29.75,20% - 29.9%
18015,Carroll County,IN,16.59,0% - 19.9%
18017,Cass County,IN,32.26,30% - 39.9%
18019,Clark County,IN,52.54,50% - 59.9%
18021,Clay County,IN,33.06,30% - 39.9%
18023,Clinton County,IN,32.27,30% - 39.9%
18025,Crawford County,IN,21.92,20% - 29.9%
18027,Daviess County,IN,14.37,0% - 19.9%
18029,Dearborn County,IN,34.05,30% - 39.9%
18031,Decatur County,IN,26.36,20% - 29.9%
18033,DeKalb County,IN,25.01,20% - 29.9%
18035,Delaware County,IN,38.25,30% - 39.9%
18037,Dubois County,IN,35.53,30% - 39.9%
18039,Elkhart County,IN,32.56,30% - 39.9%
18041,Fayette County,IN,16.88,0% - 19.9%
18043,Floyd County,IN,50.18,50% - 59.9%
18045,Fountain County,IN,24.01,20% - 29.9%
18047,Franklin County,IN,18.47,0% - 19.9%
18049,Fulton County,IN,19.11,0% - 19.9%
18051,Gibson County,IN,31.54,30% - 39.9%
18053,Grant County,IN,23.37,20% - 29.9%
18055,Greene County,IN,25.4,20% - 29.9%
18057,Hamilton County,IN,69.79,60% - 69.9%
18059,Hancock County,IN,59.71,50% - 59.9%
18061,Harrison County,IN,38.19,30% - 39.9%
18063,Hendricks County,IN,66.87,60% - 69.9%
18065,Henry County,IN,31.54,30% - 39.9%
18067,Howard County,IN,30.26,30% - 39.9%
18069,Huntington County,IN,30.83,30% - 39.9%
18071,Jackson County,IN,42.73,40% - 49.9%
18073,Jasper County,IN,30.54,30% - 39.9%
18075,Jay County,IN,18.24,0% - 19.9%
18077,Jefferson County,IN,36.41,30% - 39.9%
18079,Jennings County,IN,25.23,20% - 29.9%
18081,Johnson County,IN,47.24,40% - 49.9%
18083,Knox County,IN,29.61,20% - 29.9%
18085,Kosciusko County,IN,23.9,20% - 29.9%
18087,LaGrange County,IN,7.83,0% - 19.9%
18089,Lake County,IN,45.96,40% - 49.9%
18091,LaPorte County,IN,41.25,40% - 49.9%
18093,Lawrence County,IN,26.15,20% - 29.9%
18095,Madison County,IN,36.26,30% - 39.9%
18097,Marion County,IN,48.67,40% - 49.9%
18099,Marshall County,IN,37.34,30% - 39.9%
18101,Martin County,IN,20.51,20% - 29.9%
18103,Miami County,IN,19.25,0% - 19.9%
18105,Monroe County,IN,62.07,60% - 69.9%
18107,Montgomery County,IN,29.57,20% - 29.9%
18109,Morgan County,IN,40.1,40% - 49.9%
18111,Newton County,IN,16.07,0% - 19.9%
18113,Noble County,IN,23.88,20% - 29.9%
18115,Ohio County,IN,36.41,30% - 39.9%
18117,Orange County,IN,34.68,30% - 39.9%
18119,Owen County,IN,25.94,20% - 29.9%
18121,Parke County,IN,16.97,0% - 19.9%
18123,Perry County,IN,45.74,40% - 49.9%
18125,Pike County,IN,31.48,30% - 39.9%
18127,Porter County,IN,46.32,40% - 49.9%
18129,Posey County,IN,30.84,30% - 39.9%
18131,Pulaski County,IN,27.33,20% - 29.9%
18133,Putnam County,IN,24.23,20% - 29.9%
18135,Randolph County,IN,21.93,20% - 29.9%
18137,Ripley County,IN,25.31,20% - 29.9%
18139,Rush County,IN,25.71,20% - 29.9%
18143,Scott County,IN,29.11,20% - 29.9%
18145,Shelby County,IN,40.12,40% - 49.9%
18147,Spencer County,IN,28,20% - 29.9%
18141,St. Joseph County,IN,47.57,40% - 49.9%
18149,Starke County,IN,17.46,0% - 19.9%
18151,Steuben County,IN,26.42,20% - 29.9%
18153,Sullivan County,IN,31.96,30% - 39.9%
18155,Switzerland County,IN,11.76,0% - 19.9%
18157,Tippecanoe County,IN,48.21,40% - 49.9%
18159,Tipton County,IN,27.48,20% - 29.9%
18161,Union County,IN,25.46,20% - 29.9%
18163,Vanderburgh County,IN,45.79,40% - 49.9%
18165,Vermillion County,IN,25.68,20% - 29.9%
18167,Vigo County,IN,36.46,30% - 39.9%
18169,Wabash County,IN,19.86,0% - 19.9%
18171,Warren County,IN,31.8,30% - 39.9%
18173,Warrick County,IN,53.13,50% - 59.9%
18175,Washington County,IN,23.71,20% - 29.9%
18177,Wayne County,IN,34.82,30% - 39.9%
18179,Wells County,IN,22.29,20% - 29.9%
18181,White County,IN,33.11,30% - 39.9%
18183,Whitley County,IN,23.66,20% - 29.9%
20001,Allen County,KS,28.08,20% - 29.9%
20003,Anderson County,KS,23.12,20% - 29.9%
20005,Atchison County,KS,38.23,30% - 39.9%
20007,Barber County,KS,16.72,0% - 19.9%
20009,Barton County,KS,24.46,20% - 29.9%
20011,Bourbon County,KS,24.36,20% - 29.9%
20013,Brown County,KS,58.14,50% - 59.9%
20015,Butler County,KS,38,30% - 39.9%
20017,Chase County,KS,29.12,20% - 29.9%
20019,Chautauqua County,KS,12.95,0% - 19.9%
20021,Cherokee County,KS,33.92,30% - 39.9%
20023,Cheyenne County,KS,22.29,20% - 29.9%
20025,Clark County,KS,25.56,20% - 29.9%
20027,Clay County,KS,40.18,40% - 49.9%
20029,Cloud County,KS,28.98,20% - 29.9%
20031,Coffey County,KS,33.76,30% - 39.9%
20033,Comanche County,KS,26.98,20% - 29.9%
20035,Cowley County,KS,35.25,30% - 39.9%
20037,Crawford County,KS,43.33,40% - 49.9%
20039,Decatur County,KS,5.08,0% - 19.9%
20041,Dickinson County,KS,27.92,20% - 29.9%
20043,Doniphan County,KS,28.87,20% - 29.9%
20045,Douglas County,KS,77.66,70% or More
20047,Edwards County,KS,27.43,20% - 29.9%
20049,Elk County,KS,18.14,0% - 19.9%
20051,Ellis County,KS,40.49,40% - 49.9%
20053,Ellsworth County,KS,40.1,40% - 49.9%
20055,Finney County,KS,53.3,50% - 59.9%
20057,Ford County,KS,40.98,40% - 49.9%
20059,Franklin County,KS,34.25,30% - 39.9%
20061,Geary County,KS,72.71,70% or More
20063,Gove County,KS,25.46,20% - 29.9%
20065,Graham County,KS,22.99,20% - 29.9%
20067,Grant County,KS,39.7,30% - 39.9%
20069,Gray County,KS,24.17,20% - 29.9%
20071,Greeley County,KS,28.3,20% - 29.9%
20073,Greenwood County,KS,26,20% - 29.9%
20075,Hamilton County,KS,25.54,20% - 29.9%
20077,Harper County,KS,28.89,20% - 29.9%
20079,Harvey County,KS,38.35,30% - 39.9%
20081,Haskell County,KS,26.25,20% - 29.9%
20083,Hodgeman County,KS,20.28,20% - 29.9%
20085,Jackson County,KS,52.93,50% - 59.9%
20087,Jefferson County,KS,36.85,30% - 39.9%
20089,Jewell County,KS,22.75,20% - 29.9%
20091,Johnson County,KS,79.67,70% or More
20093,Kearny County,KS,35.2,30% - 39.9%
20095,Kingman County,KS,22.47,20% - 29.9%
20097,Kiowa County,KS,28.04,20% - 29.9%
20099,Labette County,KS,41.6,40% - 49.9%
20101,Lane County,KS,18.63,0% - 19.9%
20103,Leavenworth County,KS,50.02,50% - 59.9%
20105,Lincoln County,KS,15.73,0% - 19.9%
20107,Linn County,KS,14.83,0% - 19.9%
20109,Logan County,KS,20.75,20% - 29.9%
20111,Lyon County,KS,53.81,50% - 59.9%
20115,Marion County,KS,36.21,30% - 39.9%
20117,Marshall County,KS,46.34,40% - 49.9%
20113,McPherson County,KS,37.37,30% - 39.9%
20119,Meade County,KS,30.46,30% - 39.9%
20121,Miami County,KS,37.46,30% - 39.9%
20123,Mitchell County,KS,36.82,30% - 39.9%
20125,Montgomery County,KS,31.7,30% - 39.9%
20127,Morris County,KS,51.56,50% - 59.9%
20129,Morton County,KS,30.4,30% - 39.9%
20131,Nemaha County,KS,28.9,20% - 29.9%
20133,Neosho County,KS,25.44,20% - 29.9%
20135,Ness County,KS,41.92,40% - 49.9%
20137,Norton County,KS,22.71,20% - 29.9%
20139,Osage County,KS,32.67,30% - 39.9%
20141,Osborne County,KS,12.86,0% - 19.9%
20143,Ottawa County,KS,22.34,20% - 29.9%
20145,Pawnee County,KS,28.18,20% - 29.9%
20147,Phillips County,KS,14.32,0% - 19.9%
20149,Pottawatomie County,KS,31.82,30% - 39.9%
20151,Pratt County,KS,34.54,30% - 39.9%
20153,Rawlins County,KS,28.14,20% - 29.9%
20155,Reno County,KS,32.1,30% - 39.9%
20157,Republic County,KS,25.99,20% - 29.9%
20159,Rice County,KS,30.03,30% - 39.9%
20161,Riley County,KS,57,50% - 59.9%
20163,Rooks County,KS,24.11,20% - 29.9%
20165,Rush County,KS,22.67,20% - 29.9%
20167,Russell County,KS,23.9,20% - 29.9%
20169,Saline County,KS,41.02,40% - 49.9%
20171,Scott County,KS,34.72,30% - 39.9%
20173,Sedgwick County,KS,50.32,50% - 59.9%
20175,Seward County,KS,39.59,30% - 39.9%
20177,Shawnee County,KS,57.12,50% - 59.9%
20179,Sheridan County,KS,12.39,0% - 19.9%
20181,Sherman County,KS,24.84,20% - 29.9%
20183,Smith County,KS,22.48,20% - 29.9%
20185,Stafford County,KS,27.38,20% - 29.9%
20187,Stanton County,KS,35.03,30% - 39.9%
20189,Stevens County,KS,25.31,20% - 29.9%
20191,Sumner County,KS,27.21,20% - 29.9%
20193,Thomas County,KS,24.86,20% - 29.9%
20195,Trego County,KS,24.71,20% - 29.9%
20197,Wabaunsee County,KS,32.27,30% - 39.9%
20199,Wallace County,KS,17.65,0% - 19.9%
20201,Washington County,KS,33.42,30% - 39.9%
20203,Wichita County,KS,36.31,30% - 39.9%
20205,Wilson County,KS,21.13,20% - 29.9%
20207,Woodson County,KS,21.07,20% - 29.9%
20209,Wyandotte County,KS,66.76,60% - 69.9%
21001,Adair County,KY,23.78,20% - 29.9%
21003,Allen County,KY,23.99,20% - 29.9%
21005,Anderson County,KY,44.42,40% - 49.9%
21007,Ballard County,KY,17.31,0% - 19.9%
21009,Barren County,KY,33.31,30% - 39.9%
21011,Bath County,KY,40.09,40% - 49.9%
21013,Bell County,KY,26.19,20% - 29.9%
21015,Boone County,KY,50.25,50% - 59.9%
21017,Bourbon County,KY,50.32,50% - 59.9%
21019,Boyd County,KY,34.88,30% - 39.9%
21021,Boyle County,KY,44,40% - 49.9%
21023,Bracken County,KY,29.78,20% - 29.9%
21025,Breathitt County,KY,49.94,40% - 49.9%
21027,Breckinridge County,KY,30.73,30% - 39.9%
21029,Bullitt County,KY,33.98,30% - 39.9%
21031,Butler County,KY,26.19,20% - 29.9%
21033,Caldwell County,KY,25.7,20% - 29.9%
21035,Calloway County,KY,38.17,30% - 39.9%
21037,Campbell County,KY,53.44,50% - 59.9%
21039,Carlisle County,KY,14.71,0% - 19.9%
21041,Carroll County,KY,36.3,30% - 39.9%
21043,Carter County,KY,35.14,30% - 39.9%
21045,Casey County,KY,20.07,20% - 29.9%
21049,Clark County,KY,44.8,40% - 49.9%
21051,Clay County,KY,31.4,30% - 39.9%
21053,Clinton County,KY,18.24,0% - 19.9%
21055,Crittenden County,KY,22.53,20% - 29.9%
21057,Cumberland County,KY,25.86,20% - 29.9%
21059,Daviess County,KY,43.48,40% - 49.9%
21061,Edmonson County,KY,28.28,20% - 29.9%
21063,Elliott County,KY,27.49,20% - 29.9%
21065,Estill County,KY,38.59,30% - 39.9%
21067,Fayette County,KY,69.8,60% - 69.9%
21069,Fleming County,KY,34.16,30% - 39.9%
21071,Floyd County,KY,48.24,40% - 49.9%
21073,Franklin County,KY,59.55,50% - 59.9%
21075,Fulton County,KY,24.51,20% - 29.9%
21077,Gallatin County,KY,31.89,30% - 39.9%
21079,Garrard County,KY,29.64,20% - 29.9%
21081,Grant County,KY,30.4,30% - 39.9%
21083,Graves County,KY,26.64,20% - 29.9%
21085,Grayson County,KY,35.24,30% - 39.9%
21087,Green County,KY,20.99,20% - 29.9%
21089,Greenup County,KY,43,40% - 49.9%
21091,Hancock County,KY,44.54,40% - 49.9%
21093,Hardin County,KY,49.9,40% - 49.9%
21095,Harlan County,KY,31.32,30% - 39.9%
21097,Harrison County,KY,32.1,30% - 39.9%
21099,Hart County,KY,16.56,0% - 19.9%
21101,Henderson County,KY,33.54,30% - 39.9%
21103,Henry County,KY,34.03,30% - 39.9%
21105,Hickman County,KY,20.66,20% - 29.9%
21107,Hopkins County,KY,33.68,30% - 39.9%
21109,Jackson County,KY,20.39,20% - 29.9%
21111,Jefferson County,KY,61.07,60% - 69.9%
21113,Jessamine County,KY,48.66,40% - 49.9%
21115,Johnson County,KY,34.68,30% - 39.9%
21117,Kenton County,KY,49.09,40% - 49.9%
21119,Knott County,KY,44.42,40% - 49.9%
21121,Knox County,KY,18.86,0% - 19.9%
21123,Larue County,KY,25.96,20% - 29.9%
21125,Laurel County,KY,26.48,20% - 29.9%
21127,Lawrence County,KY,39.93,30% - 39.9%
21129,Lee County,KY,38.1,30% - 39.9%
21131,Leslie County,KY,34.29,30% - 39.9%
21133,Letcher County,KY,42.64,40% - 49.9%
21135,Lewis County,KY,23.11,20% - 29.9%
21137,Lincoln County,KY,27.8,20% - 29.9%
21139,Livingston County,KY,25.75,20% - 29.9%
21141,Logan County,KY,31.59,30% - 39.9%
21143,Lyon County,KY,37.2,30% - 39.9%
21151,Madison County,KY,43.18,40% - 49.9%
21153,Magoffin County,KY,41.66,40% - 49.9%
21155,Marion County,KY,35.76,30% - 39.9%
21157,Marshall County,KY,30.52,30% - 39.9%
21159,Martin County,KY,37.06,30% - 39.9%
21161,Mason County,KY,34.49,30% - 39.9%
21145,McCracken County,KY,40.16,40% - 49.9%
21147,McCreary County,KY,21.28,20% - 29.9%
21149,McLean County,KY,26.77,20% - 29.9%
21163,Meade County,KY,28.07,20% - 29.9%
21165,Menifee County,KY,25.28,20% - 29.9%
21167,Mercer County,KY,41.31,40% - 49.9%
21169,Metcalfe County,KY,22.99,20% - 29.9%
21171,Monroe County,KY,26.86,20% - 29.9%
21173,Montgomery County,KY,41.77,40% - 49.9%
21175,Morgan County,KY,36.28,30% - 39.9%
21177,Muhlenberg County,KY,35.98,30% - 39.9%
21179,Nelson County,KY,41.7,40% - 49.9%
21181,Nicholas County,KY,32.45,30% - 39.9%
21183,Ohio County,KY,24.37,20% - 29.9%
21185,Oldham County,KY,51.98,50% - 59.9%
21187,Owen County,KY,30.12,30% - 39.9%
21189,Owsley County,KY,37.46,30% - 39.9%
21191,Pendleton County,KY,29.46,20% - 29.9%
21193,Perry County,KY,50.26,50% - 59.9%
21195,Pike County,KY,43.54,40% - 49.9%
21197,Powell County,KY,41.01,40% - 49.9%
21199,Pulaski County,KY,29.73,20% - 29.9%
21201,Robertson County,KY,29.17,20% - 29.9%
21203,Rockcastle County,KY,23.99,20% - 29.9%
21205,Rowan County,KY,51.68,50% - 59.9%
21207,Russell County,KY,27,20% - 29.9%
21209,Scott County,KY,52.84,50% - 59.9%
21211,Shelby County,KY,44.34,40% - 49.9%
21213,Simpson County,KY,33.2,30% - 39.9%
21215,Spencer County,KY,29.95,20% - 29.9%
21217,Taylor County,KY,33.02,30% - 39.9%
21219,Todd County,KY,21.03,20% - 29.9%
21221,Trigg County,KY,24.65,20% - 29.9%
21223,Trimble County,KY,36.07,30% - 39.9%
21225,Union County,KY,23.06,20% - 29.9%
21227,Warren County,KY,38.02,30% - 39.9%
21229,Washington County,KY,35.24,30% - 39.9%
21231,Wayne County,KY,25.89,20% - 29.9%
21233,Webster County,KY,27.69,20% - 29.9%
21235,Whitley County,KY,27.65,20% - 29.9%
21237,Wolfe County,KY,43.07,40% - 49.9%
21239,Woodford County,KY,63.37,60% - 69.9%
22001,Acadia Parish,LA,29.95,20% - 29.9%
22003,Allen Parish,LA,17.39,0% - 19.9%
22005,Ascension Parish,LA,43.03,40% - 49.9%
22007,Assumption Parish,LA,26.74,20% - 29.9%
22009,Avoyelles Parish,LA,36.25,30% - 39.9%
22011,Beauregard Parish,LA,17.28,0% - 19.9%
22013,Bienville Parish,LA,24.59,20% - 29.9%
22015,Bossier Parish,LA,37.66,30% - 39.9%
22017,Caddo Parish,LA,39.82,30% - 39.9%
22019,Calcasieu Parish,LA,29.74,20% - 29.9%
22021,Caldwell Parish,LA,20.59,20% - 29.9%
22023,Cameron Parish,LA,4.33,0% - 19.9%
22025,Catahoula Parish,LA,25.38,20% - 29.9%
22027,Claiborne Parish,LA,31.23,30% - 39.9%
22029,Concordia Parish,LA,35.85,30% - 39.9%
22031,De Soto Parish,LA,27.34,20% - 29.9%
22033,East Baton Rouge Parish,LA,50.68,50% - 59.9%
22035,East Carroll Parish,LA,35.74,30% - 39.9%
22037,East Feliciana Parish,LA,31.11,30% - 39.9%
22039,Evangeline Parish,LA,27.69,20% - 29.9%
22041,Franklin Parish,LA,18.51,0% - 19.9%
22043,Grant Parish,LA,22.17,20% - 29.9%
22045,Iberia Parish,LA,36.56,30% - 39.9%
22047,Iberville Parish,LA,47.55,40% - 49.9%
22049,Jackson Parish,LA,20.35,20% - 29.9%
22053,Jefferson Davis Parish,LA,18.89,0% - 19.9%
22051,Jefferson Parish,LA,65.24,60% - 69.9%
22059,La Salle Parish,LA,17.5,0% - 19.9%
22055,Lafayette Parish,LA,43.6,40% - 49.9%
22057,Lafourche Parish,LA,33.42,30% - 39.9%
22061,Lincoln Parish,LA,36.79,30% - 39.9%
22063,Livingston Parish,LA,27.22,20% - 29.9%
22065,Madison Parish,LA,34.77,30% - 39.9%
22067,Morehouse Parish,LA,30.25,30% - 39.9%
22069,Natchitoches Parish,LA,29.17,20% - 29.9%
22071,Orleans Parish,LA,74.88,70% or More
22073,Ouachita Parish,LA,35.06,30% - 39.9%
22075,Plaquemines Parish,LA,56.28,50% - 59.9%
22077,Pointe Coupee Parish,LA,44.14,40% - 49.9%
22079,Rapides Parish,LA,38.96,30% - 39.9%
22081,Red River Parish,LA,25.53,20% - 29.9%
22083,Richland Parish,LA,24.14,20% - 29.9%
22085,Sabine Parish,LA,15.13,0% - 19.9%
22087,St. Bernard Parish,LA,44.86,40% - 49.9%
22089,St. Charles Parish,LA,50.23,50% - 59.9%
22091,St. Helena Parish,LA,30.97,30% - 39.9%
22093,St. James Parish,LA,46.4,40% - 49.9%
22095,St. John the Baptist Parish,LA,55.82,50% - 59.9%
22097,St. Landry Parish,LA,33.23,30% - 39.9%
22099,St. Martin Parish,LA,31.66,30% - 39.9%
22101,St. Mary Parish,LA,28.93,20% - 29.9%
22103,St. Tammany Parish,LA,40.42,40% - 49.9%
22105,Tangipahoa Parish,LA,36.25,30% - 39.9%
22107,Tensas Parish,LA,42.09,40% - 49.9%
22109,Terrebonne Parish,LA,30.69,30% - 39.9%
22111,Union Parish,LA,32.78,30% - 39.9%
22113,Vermilion Parish,LA,23.5,20% - 29.9%
22115,Vernon Parish,LA,32.8,30% - 39.9%
22117,Washington Parish,LA,25.42,20% - 29.9%
22119,Webster Parish,LA,28.4,20% - 29.9%
22121,West Baton Rouge Parish,LA,48.93,40% - 49.9%
22123,West Carroll Parish,LA,16.08,0% - 19.9%
22125,West Feliciana Parish,LA,68.56,60% - 69.9%
22127,Winn Parish,LA,21.58,20% - 29.9%
25001,Barnstable County,MA,1.26,0% - 19.9%
25003,Berkshire County,MA,71.36,70% or More
25005,Bristol County,MA,65.4,60% - 69.9%
25007,Dukes County,MA,2.49,0% - 19.9%
25009,Essex County,MA,82.51,70% or More
25011,Franklin County,MA,78,70% or More
25013,Hampden County,MA,63.88,60% - 69.9%
25015,Hampshire County,MA,85.44,70% or More
25017,Middlesex County,MA,94.02,70% or More
25019,Nantucket County,MA,1.38,0% - 19.9%
25021,Norfolk County,MA,88.02,70% or More
25023,Plymouth County,MA,70.65,70% or More
25025,Suffolk County,MA,80.83,70% or More
25027,Worcester County,MA,77.93,70% or More
24001,Allegany County,MD,39.9,30% - 39.9%
24003,Anne Arundel County,MD,81.74,70% or More
24510,Baltimore city,MD,59.68,50% - 59.9%
24005,Baltimore County,MD,71.45,70% or More
24009,Calvert County,MD,68.79,60% - 69.9%
24011,Caroline County,MD,41.98,40% - 49.9%
24013,Carroll County,MD,68.96,60% - 69.9%
24015,Cecil County,MD,46.12,40% - 49.9%
24017,Charles County,MD,68.01,60% - 69.9%
24019,Dorchester County,MD,38.51,30% - 39.9%
24021,Frederick County,MD,77.55,70% or More
24023,Garrett County,MD,27.56,20% - 29.9%
24025,Harford County,MD,63.39,60% - 69.9%
24027,Howard County,MD,92.92,70% or More
24029,Kent County,MD,56.62,50% - 59.9%
24031,Montgomery County,MD,99.99,70% or More
24033,Prince George's County,MD,86.06,70% or More
24035,Queen Anne's County,MD,53.18,50% - 59.9%
24039,Somerset County,MD,33.95,30% - 39.9%
24037,St. Mary's County,MD,59.09,50% - 59.9%
24041,Talbot County,MD,66.29,60% - 69.9%
24043,Washington County,MD,45.71,40% - 49.9%
24045,Wicomico County,MD,43.81,40% - 49.9%
24047,Worcester County,MD,52.32,50% - 59.9%
23001,Androscoggin County,ME,62.47,60% - 69.9%
23003,Aroostook County,ME,57.95,50% - 59.9%
23005,Cumberland County,ME,89.13,70% or More
23007,Franklin County,ME,52.91,50% - 59.9%
23009,Hancock County,ME,67.74,60% - 69.9%
23011,Kennebec County,ME,60.1,60% - 69.9%
23013,Knox County,ME,71.4,70% or More
23015,Lincoln County,ME,73.29,70% or More
23017,Oxford County,ME,58.72,50% - 59.9%
23019,Penobscot County,ME,61.83,60% - 69.9%
23021,Piscataquis County,ME,46.32,40% - 49.9%
23023,Sagadahoc County,ME,70.59,70% or More
23025,Somerset County,ME,43.26,40% - 49.9%
23027,Waldo County,ME,58.2,50% - 59.9%
23029,Washington County,ME,54.31,50% - 59.9%
23031,York County,ME,74.91,70% or More
26001,Alcona County,MI,16.24,0% - 19.9%
26003,Alger County,MI,38.18,30% - 39.9%
26005,Allegan County,MI,34.69,30% - 39.9%
26007,Alpena County,MI,25.47,20% - 29.9%
26009,Antrim County,MI,33.61,30% - 39.9%
26011,Arenac County,MI,15.46,0% - 19.9%
26013,Baraga County,MI,21.38,20% - 29.9%
26015,Barry County,MI,31.11,30% - 39.9%
26017,Bay County,MI,35.43,30% - 39.9%
26019,Benzie County,MI,41.23,40% - 49.9%
26021,Berrien County,MI,35.98,30% - 39.9%
26023,Branch County,MI,20.4,20% - 29.9%
26025,Calhoun County,MI,36.3,30% - 39.9%
26027,Cass County,MI,24.84,20% - 29.9%
26029,Charlevoix County,MI,45.8,40% - 49.9%
26031,Cheboygan County,MI,27.86,20% - 29.9%
26033,Chippewa County,MI,62.78,60% - 69.9%
26035,Clare County,MI,21.41,20% - 29.9%
26037,Clinton County,MI,44.66,40% - 49.9%
26039,Crawford County,MI,32.6,30% - 39.9%
26041,Delta County,MI,27.66,20% - 29.9%
26043,Dickinson County,MI,34.11,30% - 39.9%
26045,Eaton County,MI,43.41,40% - 49.9%
26047,Emmet County,MI,55.2,50% - 59.9%
26049,Genesee County,MI,31.19,30% - 39.9%
26051,Gladwin County,MI,18.57,0% - 19.9%
26053,Gogebic County,MI,31.45,30% - 39.9%
26055,Grand Traverse County,MI,57.43,50% - 59.9%
26057,Gratiot County,MI,24.16,20% - 29.9%
26059,Hillsdale County,MI,17.79,0% - 19.9%
26061,Houghton County,MI,30.24,30% - 39.9%
26063,Huron County,MI,23.71,20% - 29.9%
26065,Ingham County,MI,53.53,50% - 59.9%
26067,Ionia County,MI,27.03,20% - 29.9%
26069,Iosco County,MI,24.93,20% - 29.9%
26071,Iron County,MI,24.26,20% - 29.9%
26073,Isabella County,MI,38.57,30% - 39.9%
26075,Jackson County,MI,31.15,30% - 39.9%
26077,Kalamazoo County,MI,53.81,50% - 59.9%
26079,Kalkaska County,MI,24.35,20% - 29.9%
26081,Kent County,MI,47.65,40% - 49.9%
26083,Keweenaw County,MI,20.17,20% - 29.9%
26085,Lake County,MI,18.92,0% - 19.9%
26087,Lapeer County,MI,22.81,20% - 29.9%
26089,Leelanau County,MI,71.88,70% or More
26091,Lenawee County,MI,33.4,30% - 39.9%
26093,Livingston County,MI,41.94,40% - 49.9%
26095,Luce County,MI,25.58,20% - 29.9%
26097,Mackinac County,MI,35.78,30% - 39.9%
26099,Macomb County,MI,35.61,30% - 39.9%
26101,Manistee County,MI,35.95,30% - 39.9%
26103,Marquette County,MI,51.58,50% - 59.9%
26105,Mason County,MI,37.5,30% - 39.9%
26107,Mecosta County,MI,21.52,20% - 29.9%
26109,Menominee County,MI,31.43,30% - 39.9%
26111,Midland County,MI,46.57,40% - 49.9%
26113,Missaukee County,MI,18.01,0% - 19.9%
26115,Monroe County,MI,36.86,30% - 39.9%
26117,Montcalm County,MI,19.94,0% - 19.9%
26119,Montmorency County,MI,21.25,20% - 29.9%
26121,Muskegon County,MI,34.59,30% - 39.9%
26123,Newaygo County,MI,20.87,20% - 29.9%
26125,Oakland County,MI,55.8,50% - 59.9%
26127,Oceana County,MI,29.4,20% - 29.9%
26129,Ogemaw County,MI,15.24,0% - 19.9%
26131,Ontonagon County,MI,27.67,20% - 29.9%
26133,Osceola County,MI,15.96,0% - 19.9%
26135,Oscoda County,MI,12.34,0% - 19.9%
26137,Otsego County,MI,30.72,30% - 39.9%
26139,Ottawa County,MI,45.6,40% - 49.9%
26141,Presque Isle County,MI,19.29,0% - 19.9%
26143,Roscommon County,MI,19.11,0% - 19.9%
26145,Saginaw County,MI,32.46,30% - 39.9%
26151,Sanilac County,MI,16.13,0% - 19.9%
26153,Schoolcraft County,MI,33.27,30% - 39.9%
26155,Shiawassee County,MI,30.79,30% - 39.9%
26147,St. Clair County,MI,25.77,20% - 29.9%
26149,St. Joseph County,MI,25.33,20% - 29.9%
26157,Tuscola County,MI,23.52,20% - 29.9%
26159,Van Buren County,MI,36.58,30% - 39.9%
26161,Washtenaw County,MI,70.09,70% or More
26163,Wayne County,MI,39.19,30% - 39.9%
26165,Wexford County,MI,29.33,20% - 29.9%
27001,Aitkin County,MN,40.28,40% - 49.9%
27003,Anoka County,MN,52.31,50% - 59.9%
27005,Becker County,MN,34.47,30% - 39.9%
27007,Beltrami County,MN,70.21,70% or More
27009,Benton County,MN,35.6,30% - 39.9%
27011,Big Stone County,MN,45.6,40% - 49.9%
27013,Blue Earth County,MN,54.92,50% - 59.9%
27015,Brown County,MN,49.02,40% - 49.9%
27017,Carlton County,MN,49.51,40% - 49.9%
27019,Carver County,MN,61.25,60% - 69.9%
27021,Cass County,MN,43.72,40% - 49.9%
27023,Chippewa County,MN,36.93,30% - 39.9%
27025,Chisago County,MN,39.55,30% - 39.9%
27027,Clay County,MN,65.62,60% - 69.9%
27029,Clearwater County,MN,23.8,20% - 29.9%
27031,Cook County,MN,62.14,60% - 69.9%
27033,Cottonwood County,MN,39.08,30% - 39.9%
27035,Crow Wing County,MN,37.2,30% - 39.9%
27037,Dakota County,MN,64.28,60% - 69.9%
27039,Dodge County,MN,50.15,50% - 59.9%
27041,Douglas County,MN,39.16,30% - 39.9%
27043,Faribault County,MN,36.98,30% - 39.9%
27045,Fillmore County,MN,53.07,50% - 59.9%
27047,Freeborn County,MN,38.35,30% - 39.9%
27049,Goodhue County,MN,53.99,50% - 59.9%
27051,Grant County,MN,38.02,30% - 39.9%
27053,Hennepin County,MN,69.69,60% - 69.9%
27055,Houston County,MN,42.32,40% - 49.9%
27057,Hubbard County,MN,29.33,20% - 29.9%
27059,Isanti County,MN,30.07,30% - 39.9%
27061,Itasca County,MN,38.39,30% - 39.9%
27063,Jackson County,MN,32.11,30% - 39.9%
27065,Kanabec County,MN,31.64,30% - 39.9%
27067,Kandiyohi County,MN,34.7,30% - 39.9%
27069,Kittson County,MN,37.5,30% - 39.9%
27071,Koochiching County,MN,31.8,30% - 39.9%
27073,Lac qui Parle County,MN,43.26,40% - 49.9%
27075,Lake County,MN,55.98,50% - 59.9%
27077,Lake of the Woods County,MN,33.47,30% - 39.9%
27079,Le Sueur County,MN,37.26,30% - 39.9%
27081,Lincoln County,MN,40.18,40% - 49.9%
27083,Lyon County,MN,43.38,40% - 49.9%
27087,Mahnomen County,MN,47.53,40% - 49.9%
27089,Marshall County,MN,35.24,30% - 39.9%
27091,Martin County,MN,32.81,30% - 39.9%
27085,McLeod County,MN,38.05,30% - 39.9%
27093,Meeker County,MN,27.45,20% - 29.9%
27095,Mille Lacs County,MN,39.82,30% - 39.9%
27097,Morrison County,MN,28.84,20% - 29.9%
27099,Mower County,MN,53.62,50% - 59.9%
27101,Murray County,MN,36.81,30% - 39.9%
27103,Nicollet County,MN,61.65,60% - 69.9%
27105,Nobles County,MN,46.19,40% - 49.9%
27107,Norman County,MN,46.25,40% - 49.9%
27109,Olmsted County,MN,72.27,70% or More
27111,Otter Tail County,MN,35.1,30% - 39.9%
27115,Pine County,MN,29.48,20% - 29.9%
27117,Pipestone County,MN,35.35,30% - 39.9%
27119,Polk County,MN,46.25,40% - 49.9%
27121,Pope County,MN,41.98,40% - 49.9%
27123,Ramsey County,MN,70.12,70% or More
27125,Red Lake County,MN,45.97,40% - 49.9%
27127,Redwood County,MN,35.34,30% - 39.9%
27129,Renville County,MN,34.78,30% - 39.9%
27131,Rice County,MN,58.67,50% - 59.9%
27133,Rock County,MN,41.28,40% - 49.9%
27135,Roseau County,MN,32.82,30% - 39.9%
27139,Scott County,MN,62.85,60% - 69.9%
27141,Sherburne County,MN,34.83,30% - 39.9%
27143,Sibley County,MN,29.35,20% - 29.9%
27137,St. Louis County,MN,56.87,50% - 59.9%
27145,Stearns County,MN,45.98,40% - 49.9%
27147,Steele County,MN,47.11,40% - 49.9%
27149,Stevens County,MN,45.45,40% - 49.9%
27151,Swift County,MN,41.43,40% - 49.9%
27153,Todd County,MN,24.34,20% - 29.9%
27155,Traverse County,MN,46.67,40% - 49.9%
27157,Wabasha County,MN,57.27,50% - 59.9%
27159,Wadena County,MN,22.03,20% - 29.9%
27163,Washington County,MN,64.38,60% - 69.9%
27165,Watonwan County,MN,50.3,50% - 59.9%
27167,Wilkin County,MN,41.48,40% - 49.9%
27169,Winona County,MN,61.06,60% - 69.9%
27171,Wright County,MN,41.34,40% - 49.9%
27173,Yellow Medicine County,MN,34.29,30% - 39.9%
29001,Adair County,MO,33.61,30% - 39.9%
29003,Andrew County,MO,20.1,20% - 29.9%
29005,Atchison County,MO,33.51,30% - 39.9%
29007,Audrain County,MO,22.58,20% - 29.9%
29009,Barry County,MO,30.55,30% - 39.9%
29011,Barton County,MO,13.88,0% - 19.9%
29013,Bates County,MO,21.69,20% - 29.9%
29015,Benton County,MO,24.63,20% - 29.9%
29017,Bollinger County,MO,14.46,0% - 19.9%
29019,Boone County,MO,64.25,60% - 69.9%
29021,Buchanan County,MO,26.91,20% - 29.9%
29023,Butler County,MO,18.66,0% - 19.9%
29025,Caldwell County,MO,25.13,20% - 29.9%
29027,Callaway County,MO,34.35,30% - 39.9%
29029,Camden County,MO,25.74,20% - 29.9%
29031,Cape Girardeau County,MO,36.14,30% - 39.9%
29033,Carroll County,MO,17.46,0% - 19.9%
29035,Carter County,MO,16.63,0% - 19.9%
29037,Cass County,MO,44.6,40% - 49.9%
29039,Cedar County,MO,12.04,0% - 19.9%
29041,Chariton County,MO,18.23,0% - 19.9%
29043,Christian County,MO,38.47,30% - 39.9%
29045,Clark County,MO,16.01,0% - 19.9%
29047,Clay County,MO,57.42,50% - 59.9%
29049,Clinton County,MO,33.87,30% - 39.9%
29051,Cole County,MO,42.36,40% - 49.9%
29053,Cooper County,MO,36.04,30% - 39.9%
29055,Crawford County,MO,20.05,20% - 29.9%
29057,Dade County,MO,19.19,0% - 19.9%
29059,Dallas County,MO,18.23,0% - 19.9%
29061,Daviess County,MO,16.51,0% - 19.9%
29063,DeKalb County,MO,15.08,0% - 19.9%
29065,Dent County,MO,17.97,0% - 19.9%
29067,Douglas County,MO,10.73,0% - 19.9%
29069,Dunklin County,MO,24.23,20% - 29.9%
29071,Franklin County,MO,39.54,30% - 39.9%
29073,Gasconade County,MO,33.12,30% - 39.9%
29075,Gentry County,MO,31.31,30% - 39.9%
29077,Greene County,MO,47.92,40% - 49.9%
29079,Grundy County,MO,19.22,0% - 19.9%
29081,Harrison County,MO,14.79,0% - 19.9%
29083,Henry County,MO,31.26,30% - 39.9%
29085,Hickory County,MO,13.39,0% - 19.9%
29087,Holt County,MO,20.31,20% - 29.9%
29089,Howard County,MO,28.59,20% - 29.9%
29091,Howell County,MO,24,20% - 29.9%
29093,Iron County,MO,17.19,0% - 19.9%
29095,Jackson County,MO,57.97,50% - 59.9%
29097,Jasper County,MO,36.58,30% - 39.9%
29099,Jefferson County,MO,36.81,30% - 39.9%
29101,Johnson County,MO,34.41,30% - 39.9%
29103,Knox County,MO,22.6,20% - 29.9%
29105,Laclede County,MO,20.91,20% - 29.9%
29107,Lafayette County,MO,31.7,30% - 39.9%
29109,Lawrence County,MO,23.47,20% - 29.9%
29111,Lewis County,MO,11.02,0% - 19.9%
29113,Lincoln County,MO,25.82,20% - 29.9%
29115,Linn County,MO,21.34,20% - 29.9%
29117,Livingston County,MO,24.01,20% - 29.9%
29121,Macon County,MO,19.43,0% - 19.9%
29123,Madison County,MO,21.38,20% - 29.9%
29125,Maries County,MO,26.4,20% - 29.9%
29127,Marion County,MO,22.95,20% - 29.9%
29119,McDonald County,MO,28.25,20% - 29.9%
29129,Mercer County,MO,9.9,0% - 19.9%
29131,Miller County,MO,18.44,0% - 19.9%
29133,Mississippi County,MO,21.93,20% - 29.9%
29135,Moniteau County,MO,28.11,20% - 29.9%
29137,Monroe County,MO,16.72,0% - 19.9%
29139,Montgomery County,MO,23.81,20% - 29.9%
29141,Morgan County,MO,14.19,0% - 19.9%
29143,New Madrid County,MO,18.11,0% - 19.9%
29145,Newton County,MO,18.5,0% - 19.9%
29147,Nodaway County,MO,42.1,40% - 49.9%
29149,Oregon County,MO,17.58,0% - 19.9%
29151,Osage County,MO,27.1,20% - 29.9%
29153,Ozark County,MO,11.94,0% - 19.9%
29155,Pemiscot County,MO,14.1,0% - 19.9%
29157,Perry County,MO,16.53,0% - 19.9%
29159,Pettis County,MO,27.33,20% - 29.9%
29161,Phelps County,MO,37.69,30% - 39.9%
29163,Pike County,MO,17.86,0% - 19.9%
29165,Platte County,MO,61.68,60% - 69.9%
29167,Polk County,MO,27.85,20% - 29.9%
29169,Pulaski County,MO,65.96,60% - 69.9%
29171,Putnam County,MO,10.42,0% - 19.9%
29173,Ralls County,MO,14.13,0% - 19.9%
29175,Randolph County,MO,20.78,20% - 29.9%
29177,Ray County,MO,28.19,20% - 29.9%
29179,Reynolds County,MO,11.5,0% - 19.9%
29181,Ripley County,MO,13.2,0% - 19.9%
29195,Saline County,MO,31.89,30% - 39.9%
29197,Schuyler County,MO,7.9,0% - 19.9%
29199,Scotland County,MO,16.37,0% - 19.9%
29201,Scott County,MO,22.26,20% - 29.9%
29203,Shannon County,MO,9.82,0% - 19.9%
29205,Shelby County,MO,20.8,20% - 29.9%
29183,St. Charles County,MO,55.32,50% - 59.9%
29185,St. Clair County,MO,15.97,0% - 19.9%
29187,St. Francois County,MO,25.39,20% - 29.9%
29510,St. Louis city,MO,67.17,60% - 69.9%
29189,St. Louis County,MO,67.44,60% - 69.9%
29186,Ste. Genevieve County,MO,24.06,20% - 29.9%
29207,Stoddard County,MO,21.05,20% - 29.9%
29209,Stone County,MO,21.28,20% - 29.9%
29211,Sullivan County,MO,23.33,20% - 29.9%
29213,Taney County,MO,30.3,30% - 39.9%
29215,Texas County,MO,17.85,0% - 19.9%
29217,Vernon County,MO,20.51,20% - 29.9%
29219,Warren County,MO,28.21,20% - 29.9%
29221,Washington County,MO,16.77,0% - 19.9%
29223,Wayne County,MO,14.1,0% - 19.9%
29225,Webster County,MO,26.49,20% - 29.9%
29227,Worth County,MO,14.39,0% - 19.9%
29229,Wright County,MO,15.42,0% - 19.9%
28001,Adams County,MS,44.87,40% - 49.9%
28003,Alcorn County,MS,22.03,20% - 29.9%
28005,Amite County,MS,27.94,20% - 29.9%
28007,Attala County,MS,42.13,40% - 49.9%
28009,Benton County,MS,34.34,30% - 39.9%
28011,Bolivar County,MS,53.68,50% - 59.9%
28013,Calhoun County,MS,19.31,0% - 19.9%
28015,Carroll County,MS,32.55,30% - 39.9%
28017,Chickasaw County,MS,27.53,20% - 29.9%
28019,Choctaw County,MS,30.53,30% - 39.9%
28021,Claiborne County,MS,75.36,70% or More
28023,Clarke County,MS,36.03,30% - 39.9%
28025,Clay County,MS,34.98,30% - 39.9%
28027,Coahoma County,MS,48.92,40% - 49.9%
28029,Copiah County,MS,51.53,50% - 59.9%
28031,Covington County,MS,36.01,30% - 39.9%
28033,DeSoto County,MS,48.3,40% - 49.9%
28035,Forrest County,MS,36.66,30% - 39.9%
28037,Franklin County,MS,34.99,30% - 39.9%
28039,George County,MS,18.36,0% - 19.9%
28041,Greene County,MS,18.79,0% - 19.9%
28043,Grenada County,MS,42.64,40% - 49.9%
28045,Hancock County,MS,26.92,20% - 29.9%
28047,Harrison County,MS,40.81,40% - 49.9%
28049,Hinds County,MS,57.64,50% - 59.9%
28051,Holmes County,MS,56.43,50% - 59.9%
28053,Humphreys County,MS,58.54,50% - 59.9%
28055,Issaquena County,MS,29.51,20% - 29.9%
28057,Itawamba County,MS,18.23,0% - 19.9%
28059,Jackson County,MS,37.94,30% - 39.9%
28061,Jasper County,MS,46.59,40% - 49.9%
28063,Jefferson County,MS,92.01,70% or More
28065,Jefferson Davis County,MS,43.13,40% - 49.9%
28067,Jones County,MS,31.67,30% - 39.9%
28069,Kemper County,MS,56.29,50% - 59.9%
28071,Lafayette County,MS,49.13,40% - 49.9%
28073,Lamar County,MS,49.81,40% - 49.9%
28075,Lauderdale County,MS,37.79,30% - 39.9%
28077,Lawrence County,MS,42.17,40% - 49.9%
28079,Leake County,MS,33.73,30% - 39.9%
28081,Lee County,MS,30.8,30% - 39.9%
28083,Leflore County,MS,58.04,50% - 59.9%
28085,Lincoln County,MS,31.49,30% - 39.9%
28087,Lowndes County,MS,37.21,30% - 39.9%
28089,Madison County,MS,56.68,50% - 59.9%
28091,Marion County,MS,33.57,30% - 39.9%
28093,Marshall County,MS,46.4,40% - 49.9%
28095,Monroe County,MS,32.42,30% - 39.9%
28097,Montgomery County,MS,42,40% - 49.9%
28099,Neshoba County,MS,40.3,40% - 49.9%
28101,Newton County,MS,32.48,30% - 39.9%
28103,Noxubee County,MS,46.62,40% - 49.9%
28105,Oktibbeha County,MS,54.56,50% - 59.9%
28107,Panola County,MS,34.35,30% - 39.9%
28109,Pearl River County,MS,27.21,20% - 29.9%
28111,Perry County,MS,22.38,20% - 29.9%
28113,Pike County,MS,37.72,30% - 39.9%
28115,Pontotoc County,MS,22.89,20% - 29.9%
28117,Prentiss County,MS,20.56,20% - 29.9%
28119,Quitman County,MS,44.04,40% - 49.9%
28121,Rankin County,MS,39.88,30% - 39.9%
28123,Scott County,MS,43.76,40% - 49.9%
28125,Sharkey County,MS,46.74,40% - 49.9%
28127,Simpson County,MS,32.71,30% - 39.9%
28129,Smith County,MS,25.11,20% - 29.9%
28131,Stone County,MS,28.33,20% - 29.9%
28133,Sunflower County,MS,45.24,40% - 49.9%
28135,Tallahatchie County,MS,34.72,30% - 39.9%
28137,Tate County,MS,32.8,30% - 39.9%
28139,Tippah County,MS,21.82,20% - 29.9%
28141,Tishomingo County,MS,20.12,20% - 29.9%
28143,Tunica County,MS,56.96,50% - 59.9%
28145,Union County,MS,22.19,20% - 29.9%
28147,Walthall County,MS,33.08,30% - 39.9%
28149,Warren County,MS,53.57,50% - 59.9%
28151,Washington County,MS,41.89,40% - 49.9%
28153,Wayne County,MS,28.05,20% - 29.9%
28155,Webster County,MS,20.02,20% - 29.9%
28157,Wilkinson County,MS,67.45,60% - 69.9%
28159,Winston County,MS,32.12,30% - 39.9%
28161,Yalobusha County,MS,41.43,40% - 49.9%
28163,Yazoo County,MS,46.79,40% - 49.9%
30001,Beaverhead County,MT,43.67,40% - 49.9%
30003,Big Horn County,MT,99.99,70% or More
30005,Blaine County,MT,99.99,70% or More
30007,Broadwater County,MT,13.95,0% - 19.9%
30009,Carbon County,MT,24.58,20% - 29.9%
30011,Carter County,MT,4.29,0% - 19.9%
30013,Cascade County,MT,37.82,30% - 39.9%
30015,Chouteau County,MT,20.22,20% - 29.9%
30017,Custer County,MT,25.37,20% - 29.9%
30019,Daniels County,MT,22.41,20% - 29.9%
30021,Dawson County,MT,12.07,0% - 19.9%
30023,Deer Lodge County,MT,67.56,60% - 69.9%
30025,Fallon County,MT,16.03,0% - 19.9%
30027,Fergus County,MT,22.82,20% - 29.9%
30029,Flathead County,MT,31.06,30% - 39.9%
30031,Gallatin County,MT,52.94,50% - 59.9%
30033,Garfield County,MT,6,0% - 19.9%
30035,Glacier County,MT,99.99,70% or More
30037,Golden Valley County,MT,18.97,0% - 19.9%
30039,Granite County,MT,20,20% - 29.9%
30041,Hill County,MT,89.82,70% or More
30043,Jefferson County,MT,34.12,30% - 39.9%
30045,Judith Basin County,MT,2.99,0% - 19.9%
30047,Lake County,MT,41.81,40% - 49.9%
30049,Lewis and Clark County,MT,51.23,50% - 59.9%
30053,Lincoln County,MT,15.51,0% - 19.9%
30057,Madison County,MT,23.68,20% - 29.9%
30055,McCone County,MT,7.87,0% - 19.9%
30059,Meagher County,MT,25.6,20% - 29.9%
30061,Mineral County,MT,38.01,30% - 39.9%
30063,Missoula County,MT,61.62,60% - 69.9%
30065,Musselshell County,MT,13.79,0% - 19.9%
30067,Park County,MT,50.05,50% - 59.9%
30069,Petroleum County,MT,3.57,0% - 19.9%
30071,Phillips County,MT,29.43,20% - 29.9%
30073,Pondera County,MT,53.2,50% - 59.9%
30075,Powder River County,MT,6.31,0% - 19.9%
30077,Powell County,MT,22.81,20% - 29.9%
30079,Prairie County,MT,29.63,20% - 29.9%
30081,Ravalli County,MT,30.27,30% - 39.9%
30083,Richland County,MT,17.45,0% - 19.9%
30085,Roosevelt County,MT,79.12,70% or More
30087,Rosebud County,MT,99.99,70% or More
30089,Sanders County,MT,15.97,0% - 19.9%
30091,Sheridan County,MT,21.93,20% - 29.9%
30093,Silver Bow County,MT,61.8,60% - 69.9%
30095,Stillwater County,MT,12.79,0% - 19.9%
30097,Sweet Grass County,MT,18.94,0% - 19.9%
30099,Teton County,MT,22.55,20% - 29.9%
30101,Toole County,MT,23.84,20% - 29.9%
30103,Treasure County,MT,11.43,0% - 19.9%
30105,Valley County,MT,24.19,20% - 29.9%
30107,Wheatland County,MT,7.33,0% - 19.9%
30109,Wibaux County,MT,6.56,0% - 19.9%
30111,Yellowstone County,MT,40.61,40% - 49.9%
37001,Alamance County,NC,53.24,50% - 59.9%
37003,Alexander County,NC,24.15,20% - 29.9%
37005,Alleghany County,NC,33.18,30% - 39.9%
37007,Anson County,NC,31.21,30% - 39.9%
37009,Ashe County,NC,40.12,40% - 49.9%
37011,Avery County,NC,32.51,30% - 39.9%
37013,Beaufort County,NC,33.77,30% - 39.9%
37015,Bertie County,NC,33.14,30% - 39.9%
37017,Bladen County,NC,35.76,30% - 39.9%
37019,Brunswick County,NC,44.22,40% - 49.9%
37021,Buncombe County,NC,64.03,60% - 69.9%
37023,Burke County,NC,38.32,30% - 39.9%
37025,Cabarrus County,NC,55.89,50% - 59.9%
37027,Caldwell County,NC,29.75,20% - 29.9%
37029,Camden County,NC,32.63,30% - 39.9%
37031,Carteret County,NC,40.72,40% - 49.9%
37033,Caswell County,NC,25.5,20% - 29.9%
37035,Catawba County,NC,44.55,40% - 49.9%
37037,Chatham County,NC,46.43,40% - 49.9%
37039,Cherokee County,NC,20.48,20% - 29.9%
37041,Chowan County,NC,38.23,30% - 39.9%
37043,Clay County,NC,19.48,0% - 19.9%
37045,Cleveland County,NC,39.62,30% - 39.9%
37047,Columbus County,NC,32.53,30% - 39.9%
37049,Craven County,NC,48.39,40% - 49.9%
37051,Cumberland County,NC,54.15,50% - 59.9%
37053,Currituck County,NC,35.27,30% - 39.9%
37055,Dare County,NC,53.56,50% - 59.9%
37057,Davidson County,NC,34.18,30% - 39.9%
37059,Davie County,NC,47.25,40% - 49.9%
37061,Duplin County,NC,33.09,30% - 39.9%
37063,Durham County,NC,75.63,70% or More
37065,Edgecombe County,NC,30.91,30% - 39.9%
37067,Forsyth County,NC,58.88,50% - 59.9%
37069,Franklin County,NC,47.19,40% - 49.9%
37071,Gaston County,NC,40.39,40% - 49.9%
37073,Gates County,NC,27.87,20% - 29.9%
37075,Graham County,NC,20.56,20% - 29.9%
37077,Granville County,NC,49.54,40% - 49.9%
37079,Greene County,NC,31.72,30% - 39.9%
37081,Guilford County,NC,60.97,60% - 69.9%
37083,Halifax County,NC,35.73,30% - 39.9%
37085,Harnett County,NC,36.26,30% - 39.9%
37087,Haywood County,NC,38.94,30% - 39.9%
37089,Henderson County,NC,45.42,40% - 49.9%
37091,Hertford County,NC,37.9,30% - 39.9%
37093,Hoke County,NC,34.04,30% - 39.9%
37095,Hyde County,NC,47.12,40% - 49.9%
37097,Iredell County,NC,43.68,40% - 49.9%
37099,Jackson County,NC,52.32,50% - 59.9%
37101,Johnston County,NC,48.08,40% - 49.9%
37103,Jones County,NC,38.03,30% - 39.9%
37105,Lee County,NC,51.02,50% - 59.9%
37107,Lenoir County,NC,35.96,30% - 39.9%
37109,Lincoln County,NC,35.1,30% - 39.9%
37113,Macon County,NC,35.68,30% - 39.9%
37115,Madison County,NC,36.74,30% - 39.9%
37117,Martin County,NC,35.63,30% - 39.9%
37111,McDowell County,NC,34.76,30% - 39.9%
37119,Mecklenburg County,NC,69.74,60% - 69.9%
37121,Mitchell County,NC,29.3,20% - 29.9%
37123,Montgomery County,NC,20.17,20% - 29.9%
37125,Moore County,NC,40.7,40% - 49.9%
37127,Nash County,NC,43.37,40% - 49.9%
37129,New Hanover County,NC,64.57,60% - 69.9%
37131,Northampton County,NC,30.63,30% - 39.9%
37133,Onslow County,NC,46.52,40% - 49.9%
37135,Orange County,NC,91.49,70% or More
37137,Pamlico County,NC,27.21,20% - 29.9%
37139,Pasquotank County,NC,39.14,30% - 39.9%
37141,Pender County,NC,39.34,30% - 39.9%
37143,Perquimans County,NC,25.86,20% - 29.9%
37145,Person County,NC,41,40% - 49.9%
37147,Pitt County,NC,48.13,40% - 49.9%
37149,Polk County,NC,30.77,30% - 39.9%
37151,Randolph County,NC,30.21,30% - 39.9%
37153,Richmond County,NC,31.13,30% - 39.9%
37155,Robeson County,NC,34.32,30% - 39.9%
37157,Rockingham County,NC,33.35,30% - 39.9%
37159,Rowan County,NC,29.52,20% - 29.9%
37161,Rutherford County,NC,25.92,20% - 29.9%
37163,Sampson County,NC,36.74,30% - 39.9%
37165,Scotland County,NC,33.15,30% - 39.9%
37167,Stanly County,NC,27.06,20% - 29.9%
37169,Stokes County,NC,30.28,30% - 39.9%
37171,Surry County,NC,38.51,30% - 39.9%
37173,Swain County,NC,63.44,60% - 69.9%
37175,Transylvania County,NC,42.93,40% - 49.9%
37177,Tyrrell County,NC,43.67,40% - 49.9%
37179,Union County,NC,55.87,50% - 59.9%
37181,Vance County,NC,51.91,50% - 59.9%
37183,Wake County,NC,81.09,70% or More
37185,Warren County,NC,43.15,40% - 49.9%
37187,Washington County,NC,33.62,30% - 39.9%
37189,Watauga County,NC,62.56,60% - 69.9%
37191,Wayne County,NC,38.2,30% - 39.9%
37193,Wilkes County,NC,29.27,20% - 29.9%
37195,Wilson County,NC,39.76,30% - 39.9%
37197,Yadkin County,NC,32.93,30% - 39.9%
37199,Yancey County,NC,29.99,20% - 29.9%
38001,Adams County,ND,23.45,20% - 29.9%
38003,Barnes County,ND,45.42,40% - 49.9%
38005,Benson County,ND,57.24,50% - 59.9%
38007,Billings County,ND,7.69,0% - 19.9%
38009,Bottineau County,ND,34.68,30% - 39.9%
38011,Bowman County,ND,17.81,0% - 19.9%
38013,Burke County,ND,14.91,0% - 19.9%
38015,Burleigh County,ND,37.51,30% - 39.9%
38017,Cass County,ND,62.1,60% - 69.9%
38019,Cavalier County,ND,40.22,40% - 49.9%
38021,Dickey County,ND,36.85,30% - 39.9%
38023,Divide County,ND,25.58,20% - 29.9%
38025,Dunn County,ND,8.46,0% - 19.9%
38027,Eddy County,ND,25.71,20% - 29.9%
38029,Emmons County,ND,13.33,0% - 19.9%
38031,Foster County,ND,37.93,30% - 39.9%
38033,Golden Valley County,ND,18.47,0% - 19.9%
38035,Grand Forks County,ND,52.95,50% - 59.9%
38037,Grant County,ND,10.14,0% - 19.9%
38039,Griggs County,ND,22.78,20% - 29.9%
38041,Hettinger County,ND,12.64,0% - 19.9%
38043,Kidder County,ND,14.01,0% - 19.9%
38045,LaMoure County,ND,28.66,20% - 29.9%
38047,Logan County,ND,9.86,0% - 19.9%
38049,McHenry County,ND,21.59,20% - 29.9%
38051,McIntosh County,ND,20.25,20% - 29.9%
38053,McKenzie County,ND,17.16,0% - 19.9%
38055,McLean County,ND,27.07,20% - 29.9%
38057,Mercer County,ND,14.9,0% - 19.9%
38059,Morton County,ND,30.02,30% - 39.9%
38061,Mountrail County,ND,57.91,50% - 59.9%
38063,Nelson County,ND,45.85,40% - 49.9%
38065,Oliver County,ND,15.85,0% - 19.9%
38067,Pembina County,ND,36.59,30% - 39.9%
38069,Pierce County,ND,34.44,30% - 39.9%
38071,Ramsey County,ND,39.3,30% - 39.9%
38073,Ransom County,ND,38.92,30% - 39.9%
38075,Renville County,ND,23.28,20% - 29.9%
38077,Richland County,ND,39.52,30% - 39.9%
38079,Rolette County,ND,83.72,70% or More
38081,Sargent County,ND,32.96,30% - 39.9%
38083,Sheridan County,ND,10.84,0% - 19.9%
38085,Sioux County,ND,75.98,70% or More
38087,Slope County,ND,4.17,0% - 19.9%
38089,Stark County,ND,21.96,20% - 29.9%
38091,Steele County,ND,34.09,30% - 39.9%
38093,Stutsman County,ND,38.6,30% - 39.9%
38095,Towner County,ND,31.37,30% - 39.9%
38097,Traill County,ND,44.84,40% - 49.9%
38099,Walsh County,ND,44.77,40% - 49.9%
38101,Ward County,ND,39.61,30% - 39.9%
38103,Wells County,ND,15.23,0% - 19.9%
38105,Williams County,ND,20.56,20% - 29.9%
31025,Cass County,NE,51.79,50% - 59.9%
31031,Cherry County,NE,18.06,0% - 19.9%
31043,Dakota County,NE,46.64,40% - 49.9%
31055,Douglas County,NE,69.17,60% - 69.9%
31057,Dundy County,NE,11.93,0% - 19.9%
31085,Hayes County,NE,7.94,0% - 19.9%
31103,Keya Paha County,NE,9.52,0% - 19.9%
31109,Lancaster County,NE,69.76,60% - 69.9%
31177,Washington County,NE,43.53,40% - 49.9%
33001,Belknap County,NH,51.35,50% - 59.9%
33003,Carroll County,NH,65.19,60% - 69.9%
33005,Cheshire County,NH,61.92,60% - 69.9%
33007,Coos County,NH,53.41,50% - 59.9%
33009,Grafton County,NH,84.59,70% or More
33011,Hillsborough County,NH,63.21,60% - 69.9%
33013,Merrimack County,NH,62.13,60% - 69.9%
33015,Rockingham County,NH,68.16,60% - 69.9%
33017,Strafford County,NH,69.9,60% - 69.9%
33019,Sullivan County,NH,53.62,50% - 59.9%
34001,Atlantic County,NJ,54.02,50% - 59.9%
34003,Bergen County,NJ,74.73,70% or More
34005,Burlington County,NJ,65.65,60% - 69.9%
34007,Camden County,NJ,64.31,60% - 69.9%
34009,Cape May County,NJ,55.69,50% - 59.9%
34011,Cumberland County,NJ,44.15,40% - 49.9%
34013,Essex County,NJ,73.79,70% or More
34015,Gloucester County,NJ,54.62,50% - 59.9%
34017,Hudson County,NJ,91.54,70% or More
34019,Hunterdon County,NJ,53.46,50% - 59.9%
34021,Mercer County,NJ,80.85,70% or More
34023,Middlesex County,NJ,76.14,70% or More
34025,Monmouth County,NJ,51.1,50% - 59.9%
34027,Morris County,NJ,67.69,60% - 69.9%
34029,Ocean County,NJ,28.4,20% - 29.9%
34031,Passaic County,NJ,71.78,70% or More
34033,Salem County,NJ,43.93,40% - 49.9%
34035,Somerset County,NJ,68.4,60% - 69.9%
34037,Sussex County,NJ,44.86,40% - 49.9%
34039,Union County,NJ,75.51,70% or More
34041,Warren County,NJ,50.37,50% - 59.9%
35001,Bernalillo County,NM,73.22,70% or More
35003,Catron County,NM,19.65,0% - 19.9%
35005,Chaves County,NM,36.19,30% - 39.9%
35006,Cibola County,NM,90.25,70% or More
35007,Colfax County,NM,47.41,40% - 49.9%
35009,Curry County,NM,33.61,30% - 39.9%
35011,De Baca County,NM,25.36,20% - 29.9%
35013,Dona Ana County,NM,82.59,70% or More
35015,Eddy County,NM,33.42,30% - 39.9%
35017,Grant County,NM,63.67,60% - 69.9%
35019,Guadalupe County,NM,76.44,70% or More
35021,Harding County,NM,99.99,70% or More
35023,Hidalgo County,NM,60.52,60% - 69.9%
35025,Lea County,NM,40.89,40% - 49.9%
35027,Lincoln County,NM,37.32,30% - 39.9%
35028,Los Alamos County,NM,94.98,70% or More
35029,Luna County,NM,75.94,70% or More
35031,McKinley County,NM,99.99,70% or More
35033,Mora County,NM,76.73,70% or More
35035,Otero County,NM,55.52,50% - 59.9%
35037,Quay County,NM,28.96,20% - 29.9%
35039,Rio Arriba County,NM,88.2,70% or More
35041,Roosevelt County,NM,30.86,30% - 39.9%
35045,San Juan County,NM,90.4,70% or More
35047,San Miguel County,NM,78.39,70% or More
35043,Sandoval County,NM,76.8,70% or More
35049,Santa Fe County,NM,79.51,70% or More
35051,Sierra County,NM,52.43,50% - 59.9%
35053,Socorro County,NM,64.5,60% - 69.9%
35055,Taos County,NM,86.51,70% or More
35057,Torrance County,NM,40.96,40% - 49.9%
35059,Union County,NM,36.36,30% - 39.9%
35061,Valencia County,NM,55.57,50% - 59.9%
32510,Carson City,NV,54.87,50% - 59.9%
32001,Churchill County,NV,38.28,30% - 39.9%
32003,Clark County,NV,56.87,50% - 59.9%
32005,Douglas County,NV,36.98,30% - 39.9%
32007,Elko County,NV,35.22,30% - 39.9%
32009,Esmeralda County,NV,46.34,40% - 49.9%
32011,Eureka County,NV,8.51,0% - 19.9%
32013,Humboldt County,NV,28.4,20% - 29.9%
32015,Lander County,NV,25.61,20% - 29.9%
32017,Lincoln County,NV,26.12,20% - 29.9%
32019,Lyon County,NV,26.43,20% - 29.9%
32021,Mineral County,NV,30.88,30% - 39.9%
32023,Nye County,NV,29.29,20% - 29.9%
32027,Pershing County,NV,26.82,20% - 29.9%
32029,Storey County,NV,15.28,0% - 19.9%
32031,Washoe County,NV,61.27,60% - 69.9%
32033,White Pine County,NV,32.38,30% - 39.9%
36001,Albany County,NY,78.84,70% or More
36003,Allegany County,NY,36.87,30% - 39.9%
36005,Bronx County,NY,79.18,70% or More
36007,Broome County,NY,55.03,50% - 59.9%
36009,Cattaraugus County,NY,45.69,40% - 49.9%
36011,Cayuga County,NY,53.35,50% - 59.9%
36013,Chautauqua County,NY,49.12,40% - 49.9%
36015,Chemung County,NY,54.99,50% - 59.9%
36017,Chenango County,NY,45.48,40% - 49.9%
36019,Clinton County,NY,74.07,70% or More
36021,Columbia County,NY,69.97,60% - 69.9%
36023,Cortland County,NY,54.04,50% - 59.9%
36025,Delaware County,NY,45.48,40% - 49.9%
36027,Dutchess County,NY,65.78,60% - 69.9%
36029,Erie County,NY,64.21,60% - 69.9%
36031,Essex County,NY,71.46,70% or More
36033,Franklin County,NY,64.14,60% - 69.9%
36035,Fulton County,NY,38.91,30% - 39.9%
36037,Genesee County,NY,43.27,40% - 49.9%
36039,Greene County,NY,59.03,50% - 59.9%
36041,Hamilton County,NY,50.19,50% - 59.9%
36043,Herkimer County,NY,48.46,40% - 49.9%
36045,Jefferson County,NY,60.09,60% - 69.9%
36047,Kings County,NY,67.07,60% - 69.9%
36049,Lewis County,NY,35.87,30% - 39.9%
36051,Livingston County,NY,55.92,50% - 59.9%
36053,Madison County,NY,57.28,50% - 59.9%
36055,Monroe County,NY,67.5,60% - 69.9%
36057,Montgomery County,NY,49.55,40% - 49.9%
36059,Nassau County,NY,79.18,70% or More
36061,New York County,NY,99.99,70% or More
36063,Niagara County,NY,56.44,50% - 59.9%
36065,Oneida County,NY,54.05,50% - 59.9%
36067,Onondaga County,NY,68.26,60% - 69.9%
36069,Ontario County,NY,65.26,60% - 69.9%
36071,Orange County,NY,55.9,50% - 59.9%
36073,Orleans County,NY,41.97,40% - 49.9%
36075,Oswego County,NY,50.46,50% - 59.9%
36077,Otsego County,NY,67.44,60% - 69.9%
36079,Putnam County,NY,67.41,60% - 69.9%
36081,Queens County,NY,94.86,70% or More
36083,Rensselaer County,NY,66.19,60% - 69.9%
36085,Richmond County,NY,66.03,60% - 69.9%
36087,Rockland County,NY,53.52,50% - 59.9%
36091,Saratoga County,NY,80.57,70% or More
36093,Schenectady County,NY,74.53,70% or More
36095,Schoharie County,NY,48.58,40% - 49.9%
36097,Schuyler County,NY,45.95,40% - 49.9%
36099,Seneca County,NY,47.84,40% - 49.9%
36089,St. Lawrence County,NY,57.63,50% - 59.9%
36101,Steuben County,NY,46.77,40% - 49.9%
36103,Suffolk County,NY,63.83,60% - 69.9%
36105,Sullivan County,NY,47.74,40% - 49.9%
36107,Tioga County,NY,46.85,40% - 49.9%
36109,Tompkins County,NY,89.04,70% or More
36111,Ulster County,NY,72.48,70% or More
36113,Warren County,NY,67.71,60% - 69.9%
36115,Washington County,NY,56.29,50% - 59.9%
36117,Wayne County,NY,54.45,50% - 59.9%
36119,Westchester County,NY,90.63,70% or More
36121,Wyoming County,NY,40.03,40% - 49.9%
36123,Yates County,NY,38.61,30% - 39.9%
39001,Adams County,OH,20.47,20% - 29.9%
39003,Allen County,OH,21.81,20% - 29.9%
39005,Ashland County,OH,22.13,20% - 29.9%
39007,Ashtabula County,OH,34.84,30% - 39.9%
39009,Athens County,OH,51.07,50% - 59.9%
39011,Auglaize County,OH,15.25,0% - 19.9%
39013,Belmont County,OH,29.64,20% - 29.9%
39015,Brown County,OH,21.35,20% - 29.9%
39017,Butler County,OH,47.32,40% - 49.9%
39019,Carroll County,OH,21.31,20% - 29.9%
39021,Champaign County,OH,21.53,20% - 29.9%
39023,Clark County,OH,34.25,30% - 39.9%
39025,Clermont County,OH,45.92,40% - 49.9%
39027,Clinton County,OH,28.21,20% - 29.9%
39029,Columbiana County,OH,26.67,20% - 29.9%
39031,Coshocton County,OH,19.15,0% - 19.9%
39033,Crawford County,OH,21.14,20% - 29.9%
39035,Cuyahoga County,OH,53.94,50% - 59.9%
39037,Darke County,OH,15.51,0% - 19.9%
39039,Defiance County,OH,28.56,20% - 29.9%
39041,Delaware County,OH,71.99,70% or More
39043,Erie County,OH,36.4,30% - 39.9%
39045,Fairfield County,OH,46.43,40% - 49.9%
39047,Fayette County,OH,24.26,20% - 29.9%
39049,Franklin County,OH,59.66,50% - 59.9%
39051,Fulton County,OH,31.11,30% - 39.9%
39053,Gallia County,OH,27.09,20% - 29.9%
39055,Geauga County,OH,44.35,40% - 49.9%
39057,Greene County,OH,54.29,50% - 59.9%
39059,Guernsey County,OH,22.3,20% - 29.9%
39061,Hamilton County,OH,52.47,50% - 59.9%
39063,Hancock County,OH,34.89,30% - 39.9%
39065,Hardin County,OH,19.32,0% - 19.9%
39067,Harrison County,OH,17.72,0% - 19.9%
39069,Henry County,OH,34.7,30% - 39.9%
39071,Highland County,OH,17.03,0% - 19.9%
39073,Hocking County,OH,30.79,30% - 39.9%
39075,Holmes County,OH,5.35,0% - 19.9%
39077,Huron County,OH,27.25,20% - 29.9%
39079,Jackson County,OH,29.38,20% - 29.9%
39081,Jefferson County,OH,33.03,30% - 39.9%
39083,Knox County,OH,25.23,20% - 29.9%
39085,Lake County,OH,50.92,50% - 59.9%
39087,Lawrence County,OH,41.04,40% - 49.9%
39089,Licking County,OH,41.16,40% - 49.9%
39091,Logan County,OH,19.95,0% - 19.9%
39093,Lorain County,OH,52.7,50% - 59.9%
39095,Lucas County,OH,47.71,40% - 49.9%
39097,Madison County,OH,37.98,30% - 39.9%
39099,Mahoning County,OH,37.08,30% - 39.9%
39101,Marion County,OH,29.3,20% - 29.9%
39103,Medina County,OH,52.32,50% - 59.9%
39105,Meigs County,OH,29.25,20% - 29.9%
39107,Mercer County,OH,13.75,0% - 19.9%
39109,Miami County,OH,27.25,20% - 29.9%
39111,Monroe County,OH,21.97,20% - 29.9%
39113,Montgomery County,OH,44.06,40% - 49.9%
39115,Morgan County,OH,19.96,0% - 19.9%
39117,Morrow County,OH,21.42,20% - 29.9%
39119,Muskingum County,OH,26.71,20% - 29.9%
39121,Noble County,OH,24.89,20% - 29.9%
39123,Ottawa County,OH,41.66,40% - 49.9%
39125,Paulding County,OH,20.27,20% - 29.9%
39127,Perry County,OH,19.11,0% - 19.9%
39129,Pickaway County,OH,33.32,30% - 39.9%
39131,Pike County,OH,27.4,20% - 29.9%
39133,Portage County,OH,46.4,40% - 49.9%
39135,Preble County,OH,18.17,0% - 19.9%
39137,Putnam County,OH,24.53,20% - 29.9%
39139,Richland County,OH,22.28,20% - 29.9%
39141,Ross County,OH,29.07,20% - 29.9%
39143,Sandusky County,OH,32.15,30% - 39.9%
39145,Scioto County,OH,33.16,30% - 39.9%
39147,Seneca County,OH,26.11,20% - 29.9%
39149,Shelby County,OH,14.49,0% - 19.9%
39151,Stark County,OH,38.86,30% - 39.9%
39153,Summit County,OH,54.92,50% - 59.9%
39155,Trumbull County,OH,36.33,30% - 39.9%
39157,Tuscarawas County,OH,24.4,20% - 29.9%
39159,Union County,OH,53.47,50% - 59.9%
39161,Van Wert County,OH,20.52,20% - 29.9%
39163,Vinton County,OH,22.44,20% - 29.9%
39165,Warren County,OH,57.45,50% - 59.9%
39167,Washington County,OH,39.78,30% - 39.9%
39169,Wayne County,OH,27.26,20% - 29.9%
39171,Williams County,OH,23.63,20% - 29.9%
39173,Wood County,OH,55.94,50% - 59.9%
39175,Wyandot County,OH,21.85,20% - 29.9%
40001,Adair County,OK,31.71,30% - 39.9%
40003,Alfalfa County,OK,12.93,0% - 19.9%
40005,Atoka County,OK,13.02,0% - 19.9%
40007,Beaver County,OK,13.46,0% - 19.9%
40009,Beckham County,OK,26.09,20% - 29.9%
40011,Blaine County,OK,37.47,30% - 39.9%
40013,Bryan County,OK,27.37,20% - 29.9%
40015,Caddo County,OK,59.45,50% - 59.9%
40017,Canadian County,OK,51.25,50% - 59.9%
40019,Carter County,OK,32.84,30% - 39.9%
40021,Cherokee County,OK,47.87,40% - 49.9%
40023,Choctaw County,OK,15.44,0% - 19.9%
40025,Cimarron County,OK,6.15,0% - 19.9%
40027,Cleveland County,OK,57.81,50% - 59.9%
40029,Coal County,OK,15.67,0% - 19.9%
40031,Comanche County,OK,63.17,60% - 69.9%
40033,Cotton County,OK,39.19,30% - 39.9%
40035,Craig County,OK,31.27,30% - 39.9%
40037,Creek County,OK,27.23,20% - 29.9%
40039,Custer County,OK,43.17,40% - 49.9%
40041,Delaware County,OK,28.61,20% - 29.9%
40043,Dewey County,OK,9.5,0% - 19.9%
40045,Ellis County,OK,9.65,0% - 19.9%
40047,Garfield County,OK,36.16,30% - 39.9%
40049,Garvin County,OK,27.25,20% - 29.9%
40051,Grady County,OK,23.45,20% - 29.9%
40053,Grant County,OK,20.51,20% - 29.9%
40055,Greer County,OK,24.62,20% - 29.9%
40057,Harmon County,OK,32.79,30% - 39.9%
40059,Harper County,OK,32.91,30% - 39.9%
40061,Haskell County,OK,22.87,20% - 29.9%
40063,Hughes County,OK,31.45,30% - 39.9%
40065,Jackson County,OK,36.68,30% - 39.9%
40067,Jefferson County,OK,16.6,0% - 19.9%
40069,Johnston County,OK,21.95,20% - 29.9%
40071,Kay County,OK,30.06,30% - 39.9%
40073,Kingfisher County,OK,29.81,20% - 29.9%
40075,Kiowa County,OK,31.42,30% - 39.9%
40077,Latimer County,OK,25,20% - 29.9%
40079,Le Flore County,OK,23.69,20% - 29.9%
40081,Lincoln County,OK,24.88,20% - 29.9%
40083,Logan County,OK,22.05,20% - 29.9%
40085,Love County,OK,23.97,20% - 29.9%
40093,Major County,OK,22.22,20% - 29.9%
40095,Marshall County,OK,32.52,30% - 39.9%
40097,Mayes County,OK,27.56,20% - 29.9%
40087,McClain County,OK,31.62,30% - 39.9%
40089,McCurtain County,OK,15.78,0% - 19.9%
40091,McIntosh County,OK,32.28,30% - 39.9%
40099,Murray County,OK,27.55,20% - 29.9%
40101,Muskogee County,OK,47.17,40% - 49.9%
40103,Noble County,OK,49.78,40% - 49.9%
40105,Nowata County,OK,27.68,20% - 29.9%
40107,Okfuskee County,OK,33.02,30% - 39.9%
40109,Oklahoma County,OK,68.72,60% - 69.9%
40111,Okmulgee County,OK,28.29,20% - 29.9%
40113,Osage County,OK,29.73,20% - 29.9%
40115,Ottawa County,OK,24.86,20% - 29.9%
40117,Pawnee County,OK,36.87,30% - 39.9%
40119,Payne County,OK,50.12,50% - 59.9%
40121,Pittsburg County,OK,31.45,30% - 39.9%
40123,Pontotoc County,OK,40.29,40% - 49.9%
40125,Pottawatomie County,OK,40.23,40% - 49.9%
40127,Pushmataha County,OK,14.72,0% - 19.9%
40129,Roger Mills County,OK,19.52,0% - 19.9%
40131,Rogers County,OK,32.4,30% - 39.9%
40133,Seminole County,OK,39.93,30% - 39.9%
40135,Sequoyah County,OK,30.11,30% - 39.9%
40137,Stephens County,OK,30.04,30% - 39.9%
40139,Texas County,OK,29.86,20% - 29.9%
40141,Tillman County,OK,31,30% - 39.9%
40143,Tulsa County,OK,57.4,50% - 59.9%
40145,Wagoner County,OK,35.56,30% - 39.9%
40147,Washington County,OK,35.69,30% - 39.9%
40149,Washita County,OK,23.77,20% - 29.9%
40151,Woods County,OK,30.74,30% - 39.9%
40153,Woodward County,OK,22.35,20% - 29.9%
41001,Baker County,OR,36.09,30% - 39.9%
41003,Benton County,OR,76.04,70% or More
41005,Clackamas County,OR,69.56,60% - 69.9%
41007,Clatsop County,OR,57.19,50% - 59.9%
41009,Columbia County,OR,49.46,40% - 49.9%
41011,Coos County,OR,40.22,40% - 49.9%
41013,Crook County,OR,30.84,30% - 39.9%
41015,Curry County,OR,38.9,30% - 39.9%
41017,Deschutes County,OR,63.21,60% - 69.9%
41019,Douglas County,OR,31.33,30% - 39.9%
41021,Gilliam County,OR,41.13,40% - 49.9%
41023,Grant County,OR,18.87,0% - 19.9%
41025,Harney County,OR,29.03,20% - 29.9%
41027,Hood River County,OR,85.2,70% or More
41029,Jackson County,OR,48.07,40% - 49.9%
41031,Jefferson County,OR,61.93,60% - 69.9%
41033,Josephine County,OR,34.1,30% - 39.9%
41035,Klamath County,OR,34.34,30% - 39.9%
41037,Lake County,OR,17.19,0% - 19.9%
41039,Lane County,OR,64.9,60% - 69.9%
41041,Lincoln County,OR,65.79,60% - 69.9%
41043,Linn County,OR,41.23,40% - 49.9%
41045,Malheur County,OR,35.88,30% - 39.9%
41047,Marion County,OR,59.95,50% - 59.9%
41049,Morrow County,OR,44.19,40% - 49.9%
41051,Multnomah County,OR,83.33,70% or More
41053,Polk County,OR,56.51,50% - 59.9%
41055,Sherman County,OR,39.29,30% - 39.9%
41057,Tillamook County,OR,50.71,50% - 59.9%
41059,Umatilla County,OR,48.54,40% - 49.9%
41061,Union County,OR,35.92,30% - 39.9%
41063,Wallowa County,OR,41.79,40% - 49.9%
41065,Wasco County,OR,61.21,60% - 69.9%
41067,Washington County,OR,83.18,70% or More
41069,Wheeler County,OR,38.57,30% - 39.9%
41071,Yamhill County,OR,57.85,50% - 59.9%
42001,Adams County,PA,39.79,30% - 39.9%
42003,Allegheny County,PA,66.53,60% - 69.9%
42005,Armstrong County,PA,38.59,30% - 39.9%
42007,Beaver County,PA,42.37,40% - 49.9%
42009,Bedford County,PA,15.3,0% - 19.9%
42011,Berks County,PA,52.81,50% - 59.9%
42013,Blair County,PA,34.96,30% - 39.9%
42015,Bradford County,PA,26.68,20% - 29.9%
42017,Bucks County,PA,76.5,70% or More
42019,Butler County,PA,53.82,50% - 59.9%
42021,Cambria County,PA,36.12,30% - 39.9%
42023,Cameron County,PA,32.93,30% - 39.9%
42025,Carbon County,PA,44.87,40% - 49.9%
42027,Centre County,PA,60.4,60% - 69.9%
42029,Chester County,PA,93.17,70% or More
42031,Clarion County,PA,24.57,20% - 29.9%
42033,Clearfield County,PA,26,20% - 29.9%
42035,Clinton County,PA,25.85,20% - 29.9%
42037,Columbia County,PA,53.39,50% - 59.9%
42039,Crawford County,PA,30.85,30% - 39.9%
42041,Cumberland County,PA,64.5,60% - 69.9%
42043,Dauphin County,PA,54.14,50% - 59.9%
42045,Delaware County,PA,85.16,70% or More
42047,Elk County,PA,30.69,30% - 39.9%
42049,Erie County,PA,50.62,50% - 59.9%
42051,Fayette County,PA,35.9,30% - 39.9%
42053,Forest County,PA,14.29,0% - 19.9%
42055,Franklin County,PA,34.44,30% - 39.9%
42057,Fulton County,PA,14.06,0% - 19.9%
42059,Greene County,PA,28.45,20% - 29.9%
42061,Huntingdon County,PA,23.05,20% - 29.9%
42063,Indiana County,PA,29.34,20% - 29.9%
42065,Jefferson County,PA,23.99,20% - 29.9%
42067,Juniata County,PA,18.99,0% - 19.9%
42069,Lackawanna County,PA,66.84,60% - 69.9%
42071,Lancaster County,PA,46.33,40% - 49.9%
42073,Lawrence County,PA,35.98,30% - 39.9%
42075,Lebanon County,PA,41.03,40% - 49.9%
42077,Lehigh County,PA,67.71,60% - 69.9%
42079,Luzerne County,PA,56.62,50% - 59.9%
42081,Lycoming County,PA,33.06,30% - 39.9%
42083,McKean County,PA,45.12,40% - 49.9%
42085,Mercer County,PA,33.25,30% - 39.9%
42087,Mifflin County,PA,24.07,20% - 29.9%
42089,Monroe County,PA,51.51,50% - 59.9%
42091,Montgomery County,PA,96.15,70% or More
42093,Montour County,PA,64.39,60% - 69.9%
42095,Northampton County,PA,64.26,60% - 69.9%
42097,Northumberland County,PA,36.71,30% - 39.9%
42099,Perry County,PA,29.09,20% - 29.9%
42101,Philadelphia County,PA,72.35,70% or More
42103,Pike County,PA,53.33,50% - 59.9%
42105,Potter County,PA,22.47,20% - 29.9%
42107,Schuylkill County,PA,41.33,40% - 49.9%
42109,Snyder County,PA,26.52,20% - 29.9%
42111,Somerset County,PA,26.38,20% - 29.9%
42113,Sullivan County,PA,31.73,30% - 39.9%
42115,Susquehanna County,PA,34.89,30% - 39.9%
42117,Tioga County,PA,34.54,30% - 39.9%
42119,Union County,PA,44.16,40% - 49.9%
42121,Venango County,PA,30.8,30% - 39.9%
42123,Warren County,PA,34.65,30% - 39.9%
42125,Washington County,PA,54.74,50% - 59.9%
42127,Wayne County,PA,52.13,50% - 59.9%
42129,Westmoreland County,PA,45.27,40% - 49.9%
42131,Wyoming County,PA,46.92,40% - 49.9%
42133,York County,PA,46.34,40% - 49.9%
72001,Adjuntas Municipio,PR,91.99,70% or More
72003,Aguada Municipio,PR,84.11,70% or More
72005,Aguadilla Municipio,PR,93.21,70% or More
72007,Aguas Buenas Municipio,PR,89.07,70% or More
72009,Aibonito Municipio,PR,98.86,70% or More
72011,Anasco Municipio,PR,84.86,70% or More
72013,Arecibo Municipio,PR,99.99,70% or More
72015,Arroyo Municipio,PR,86.8,70% or More
72017,Barceloneta Municipio,PR,81.76,70% or More
72019,Barranquitas Municipio,PR,97.67,70% or More
72021,Bayamon Municipio,PR,93.05,70% or More
72023,Cabo Rojo Municipio,PR,79.83,70% or More
72025,Caguas Municipio,PR,92.69,70% or More
72027,Camuy Municipio,PR,85.63,70% or More
72029,Canovanas Municipio,PR,91.29,70% or More
72031,Carolina Municipio,PR,87.29,70% or More
72033,Catano Municipio,PR,92.22,70% or More
72035,Cayey Municipio,PR,94.04,70% or More
72037,Ceiba Municipio,PR,84.54,70% or More
72039,Ciales Municipio,PR,99.99,70% or More
72041,Cidra Municipio,PR,92.23,70% or More
72043,Coamo Municipio,PR,89.12,70% or More
72045,Comerio Municipio,PR,86.28,70% or More
72047,Corozal Municipio,PR,99.99,70% or More
72049,Culebra Municipio,PR,77.05,70% or More
72051,Dorado Municipio,PR,99.99,70% or More
72053,Fajardo Municipio,PR,90.84,70% or More
72054,Florida Municipio,PR,99.99,70% or More
72055,Guanica Municipio,PR,86.39,70% or More
72057,Guayama Municipio,PR,81.7,70% or More
72059,Guayanilla Municipio,PR,99.99,70% or More
72061,Guaynabo Municipio,PR,88.51,70% or More
72063,Gurabo Municipio,PR,73.03,70% or More
72065,Hatillo Municipio,PR,76.15,70% or More
72067,Hormigueros Municipio,PR,79.1,70% or More
72069,Humacao Municipio,PR,93.09,70% or More
72071,Isabela Municipio,PR,86.44,70% or More
72073,Jayuya Municipio,PR,99.9,70% or More
72075,Juana Diaz Municipio,PR,89.65,70% or More
72077,Juncos Municipio,PR,94.44,70% or More
72079,Lajas Municipio,PR,87.75,70% or More
72081,Lares Municipio,PR,99.99,70% or More
72083,Las Marias Municipio,PR,99.99,70% or More
72085,Las Piedras Municipio,PR,90.97,70% or More
72087,Loiza Municipio,PR,78.72,70% or More
72089,Luquillo Municipio,PR,83.07,70% or More
72091,Manati Municipio,PR,89.68,70% or More
72093,Maricao Municipio,PR,83.2,70% or More
72095,Maunabo Municipio,PR,85.85,70% or More
72097,Mayaguez Municipio,PR,87.2,70% or More
72099,Moca Municipio,PR,92.51,70% or More
72101,Morovis Municipio,PR,93.01,70% or More
72103,Naguabo Municipio,PR,76.94,70% or More
72105,Naranjito Municipio,PR,98.92,70% or More
72107,Orocovis Municipio,PR,98.96,70% or More
72109,Patillas Municipio,PR,87.26,70% or More
72111,Penuelas Municipio,PR,99.99,70% or More
72113,Ponce Municipio,PR,99.99,70% or More
72115,Quebradillas Municipio,PR,96.63,70% or More
72117,Rincon Municipio,PR,81.69,70% or More
72119,Rio Grande Municipio,PR,87.71,70% or More
72121,Sabana Grande Municipio,PR,93.21,70% or More
72123,Salinas Municipio,PR,86.38,70% or More
72125,San German Municipio,PR,82.43,70% or More
72127,San Juan Municipio,PR,71.69,70% or More
72129,San Lorenzo Municipio,PR,91.1,70% or More
72131,San Sebastian Municipio,PR,99.99,70% or More
72133,Santa Isabel Municipio,PR,96.89,70% or More
72135,Toa Alta Municipio,PR,81.78,70% or More
72137,Toa Baja Municipio,PR,82.5,70% or More
72139,Trujillo Alto Municipio,PR,45.64,40% - 49.9%
72141,Utuado Municipio,PR,86.97,70% or More
72143,Vega Alta Municipio,PR,80.91,70% or More
72145,Vega Baja Municipio,PR,97.61,70% or More
72147,Vieques Municipio,PR,82.91,70% or More
72149,Villalba Municipio,PR,99.99,70% or More
72151,Yabucoa Municipio,PR,90.03,70% or More
72153,Yauco Municipio,PR,99.99,70% or More
44001,Bristol County,RI,84.65,70% or More
44003,Kent County,RI,74.15,70% or More
44005,Newport County,RI,85,70% or More
44007,Providence County,RI,71.5,70% or More
44009,Washington County,RI,78.25,70% or More
45001,Abbeville County,SC,22.3,20% - 29.9%
45003,Aiken County,SC,34.86,30% - 39.9%
45005,Allendale County,SC,44.07,40% - 49.9%
45007,Anderson County,SC,27.23,20% - 29.9%
45009,Bamberg County,SC,38.11,30% - 39.9%
45011,Barnwell County,SC,42.93,40% - 49.9%
45013,Beaufort County,SC,60.82,60% - 69.9%
45015,Berkeley County,SC,45.55,40% - 49.9%
45017,Calhoun County,SC,34.09,30% - 39.9%
45019,Charleston County,SC,63.1,60% - 69.9%
45021,Cherokee County,SC,20.92,20% - 29.9%
45023,Chester County,SC,30.54,30% - 39.9%
45025,Chesterfield County,SC,23.95,20% - 29.9%
45027,Clarendon County,SC,40.71,40% - 49.9%
45029,Colleton County,SC,36.06,30% - 39.9%
45031,Darlington County,SC,29.82,20% - 29.9%
45033,Dillon County,SC,25.64,20% - 29.9%
45035,Dorchester County,SC,52.27,50% - 59.9%
45037,Edgefield County,SC,42.18,40% - 49.9%
45039,Fairfield County,SC,42.17,40% - 49.9%
45041,Florence County,SC,41.86,40% - 49.9%
45043,Georgetown County,SC,42.32,40% - 49.9%
45045,Greenville County,SC,45.84,40% - 49.9%
45047,Greenwood County,SC,32.35,30% - 39.9%
45049,Hampton County,SC,54.26,50% - 59.9%
45051,Horry County,SC,40.86,40% - 49.9%
45053,Jasper County,SC,35.03,30% - 39.9%
45055,Kershaw County,SC,53.67,50% - 59.9%
45057,Lancaster County,SC,37.52,30% - 39.9%
45059,Laurens County,SC,23.13,20% - 29.9%
45061,Lee County,SC,30.43,30% - 39.9%
45063,Lexington County,SC,48.87,40% - 49.9%
45067,Marion County,SC,37.22,30% - 39.9%
45069,Marlboro County,SC,30.77,30% - 39.9%
45065,McCormick County,SC,44.31,40% - 49.9%
45071,Newberry County,SC,43.05,40% - 49.9%
45073,Oconee County,SC,27.64,20% - 29.9%
45075,Orangeburg County,SC,46.1,40% - 49.9%
45077,Pickens County,SC,34.97,30% - 39.9%
45079,Richland County,SC,64.96,60% - 69.9%
45081,Saluda County,SC,24.39,20% - 29.9%
45083,Spartanburg County,SC,31.64,30% - 39.9%
45085,Sumter County,SC,40.35,40% - 49.9%
45087,Union County,SC,20.93,20% - 29.9%
45089,Williamsburg County,SC,37,30% - 39.9%
45091,York County,SC,49.54,40% - 49.9%
46003,Aurora County,SD,35.48,30% - 39.9%
46005,Beadle County,SD,43.09,40% - 49.9%
46007,Bennett County,SD,65.85,60% - 69.9%
46009,Bon Homme County,SD,30.46,30% - 39.9%
46011,Brookings County,SD,53.9,50% - 59.9%
46013,Brown County,SD,47.02,40% - 49.9%
46015,Brule County,SD,52.45,50% - 59.9%
46017,Buffalo County,SD,74.37,70% or More
46019,Butte County,SD,21.32,20% - 29.9%
46021,Campbell County,SD,15.58,0% - 19.9%
46023,Charles Mix County,SD,59.45,50% - 59.9%
46025,Clark County,SD,31,30% - 39.9%
46027,Clay County,SD,84.41,70% or More
46029,Codington County,SD,34.26,30% - 39.9%
46031,Corson County,SD,51.02,50% - 59.9%
46033,Custer County,SD,26.47,20% - 29.9%
46035,Davison County,SD,63.13,60% - 69.9%
46037,Day County,SD,65.41,60% - 69.9%
46039,Deuel County,SD,28.27,20% - 29.9%
46041,Dewey County,SD,85.28,70% or More
46043,Douglas County,SD,23.83,20% - 29.9%
46045,Edmunds County,SD,30.39,30% - 39.9%
46047,Fall River County,SD,29.88,20% - 29.9%
46049,Faulk County,SD,41.01,40% - 49.9%
46051,Grant County,SD,36.31,30% - 39.9%
46053,Gregory County,SD,33.62,30% - 39.9%
46055,Haakon County,SD,17.42,0% - 19.9%
46057,Hamlin County,SD,27.33,20% - 29.9%
46059,Hand County,SD,28.07,20% - 29.9%
46061,Hanson County,SD,27.54,20% - 29.9%
46063,Harding County,SD,4.04,0% - 19.9%
46065,Hughes County,SD,58.71,50% - 59.9%
46067,Hutchinson County,SD,37.79,30% - 39.9%
46069,Hyde County,SD,31.68,30% - 39.9%
46071,Jackson County,SD,56.33,50% - 59.9%
46073,Jerauld County,SD,31.33,30% - 39.9%
46075,Jones County,SD,98.28,70% or More
46077,Kingsbury County,SD,42.62,40% - 49.9%
46079,Lake County,SD,42.61,40% - 49.9%
46081,Lawrence County,SD,49.97,40% - 49.9%
46083,Lincoln County,SD,62.44,60% - 69.9%
46085,Lyman County,SD,75.41,70% or More
46091,Marshall County,SD,41.41,40% - 49.9%
46087,McCook County,SD,44.49,40% - 49.9%
46089,McPherson County,SD,7.77,0% - 19.9%
46093,Meade County,SD,41.18,40% - 49.9%
46095,Mellette County,SD,36.19,30% - 39.9%
46097,Miner County,SD,30.57,30% - 39.9%
46099,Minnehaha County,SD,66.4,60% - 69.9%
46101,Moody County,SD,42.15,40% - 49.9%
46102,Oglala Lakota County,SD,99.99,70% or More
46103,Pennington County,SD,53.61,50% - 59.9%
46105,Perkins County,SD,5.91,0% - 19.9%
46107,Potter County,SD,29.17,20% - 29.9%
46109,Roberts County,SD,86.9,70% or More
46111,Sanborn County,SD,30.56,30% - 39.9%
46115,Spink County,SD,35.44,30% - 39.9%
46117,Stanley County,SD,38.57,30% - 39.9%
46119,Sully County,SD,26.61,20% - 29.9%
46121,Todd County,SD,82.98,70% or More
46123,Tripp County,SD,17.85,0% - 19.9%
46125,Turner County,SD,40.62,40% - 49.9%
46127,Union County,SD,39.13,30% - 39.9%
46129,Walworth County,SD,24.7,20% - 29.9%
46135,Yankton County,SD,56.67,50% - 59.9%
46137,Ziebach County,SD,34.33,30% - 39.9%
47001,Anderson County,TN,40.37,40% - 49.9%
47003,Bedford County,TN,28.24,20% - 29.9%
47005,Benton County,TN,21.12,20% - 29.9%
47007,Bledsoe County,TN,19.49,0% - 19.9%
47009,Blount County,TN,35.36,30% - 39.9%
47011,Bradley County,TN,25.1,20% - 29.9%
47013,Campbell County,TN,22.48,20% - 29.9%
47015,Cannon County,TN,13.3,0% - 19.9%
47017,Carroll County,TN,22.14,20% - 29.9%
47019,Carter County,TN,26.42,20% - 29.9%
47021,Cheatham County,TN,34.1,30% - 39.9%
47023,Chester County,TN,22.18,20% - 29.9%
47025,Claiborne County,TN,20.85,20% - 29.9%
47027,Clay County,TN,11.13,0% - 19.9%
47029,Cocke County,TN,26.66,20% - 29.9%
47031,Coffee County,TN,24.3,20% - 29.9%
47033,Crockett County,TN,27.79,20% - 29.9%
47035,Cumberland County,TN,21.75,20% - 29.9%
47037,Davidson County,TN,61.47,60% - 69.9%
47039,Decatur County,TN,16.18,0% - 19.9%
47041,DeKalb County,TN,16.19,0% - 19.9%
47043,Dickson County,TN,32.13,30% - 39.9%
47045,Dyer County,TN,22.76,20% - 29.9%
47047,Fayette County,TN,42.95,40% - 49.9%
47049,Fentress County,TN,10.06,0% - 19.9%
47051,Franklin County,TN,18.48,0% - 19.9%
47053,Gibson County,TN,19.88,0% - 19.9%
47055,Giles County,TN,18.54,0% - 19.9%
47057,Grainger County,TN,21.3,20% - 29.9%
47059,Greene County,TN,30.93,30% - 39.9%
47061,Grundy County,TN,12.35,0% - 19.9%
47063,Hamblen County,TN,26.65,20% - 29.9%
47065,Hamilton County,TN,52.42,50% - 59.9%
47067,Hancock County,TN,12.81,0% - 19.9%
47069,Hardeman County,TN,33.53,30% - 39.9%
47071,Hardin County,TN,20.43,20% - 29.9%
47073,Hawkins County,TN,24.18,20% - 29.9%
47075,Haywood County,TN,34.37,30% - 39.9%
47077,Henderson County,TN,19.79,0% - 19.9%
47079,Henry County,TN,24.83,20% - 29.9%
47081,Hickman County,TN,19.79,0% - 19.9%
47083,Houston County,TN,20.35,20% - 29.9%
47085,Humphreys County,TN,21.62,20% - 29.9%
47087,Jackson County,TN,13.3,0% - 19.9%
47089,Jefferson County,TN,33.56,30% - 39.9%
47091,Johnson County,TN,21.31,20% - 29.9%
47093,Knox County,TN,48.39,40% - 49.9%
47095,Lake County,TN,21.84,20% - 29.9%
47097,Lauderdale County,TN,15.49,0% - 19.9%
47099,Lawrence County,TN,19.65,0% - 19.9%
47101,Lewis County,TN,14.09,0% - 19.9%
47103,Lincoln County,TN,18.2,0% - 19.9%
47105,Loudon County,TN,33.9,30% - 39.9%
47111,Macon County,TN,10.75,0% - 19.9%
47113,Madison County,TN,42.4,40% - 49.9%
47115,Marion County,TN,27.48,20% - 29.9%
47117,Marshall County,TN,21.43,20% - 29.9%
47119,Maury County,TN,52.03,50% - 59.9%
47107,McMinn County,TN,18.81,0% - 19.9%
47109,McNairy County,TN,21.38,20% - 29.9%
47121,Meigs County,TN,33.03,30% - 39.9%
47123,Monroe County,TN,17.15,0% - 19.9%
47125,Montgomery County,TN,44.85,40% - 49.9%
47127,Moore County,TN,8.23,0% - 19.9%
47129,Morgan County,TN,22.45,20% - 29.9%
47131,Obion County,TN,17.41,0% - 19.9%
47133,Overton County,TN,14.73,0% - 19.9%
47135,Perry County,TN,21.47,20% - 29.9%
47137,Pickett County,TN,17.36,0% - 19.9%
47139,Polk County,TN,14.2,0% - 19.9%
47141,Putnam County,TN,31.74,30% - 39.9%
47143,Rhea County,TN,18.41,0% - 19.9%
47145,Roane County,TN,23.94,20% - 29.9%
47147,Robertson County,TN,34.63,30% - 39.9%
47149,Rutherford County,TN,48.32,40% - 49.9%
47151,Scott County,TN,14.88,0% - 19.9%
47153,Sequatchie County,TN,19.79,0% - 19.9%
47155,Sevier County,TN,32.97,30% - 39.9%
47157,Shelby County,TN,52.13,50% - 59.9%
47159,Smith County,TN,12.46,0% - 19.9%
47161,Stewart County,TN,25.54,20% - 29.9%
47163,Sullivan County,TN,40.22,40% - 49.9%
47165,Sumner County,TN,35.76,30% - 39.9%
47167,Tipton County,TN,25.84,20% - 29.9%
47169,Trousdale County,TN,20.53,20% - 29.9%
47171,Unicoi County,TN,35.01,30% - 39.9%
47173,Union County,TN,15.61,0% - 19.9%
47175,Van Buren County,TN,27.66,20% - 29.9%
47177,Warren County,TN,22.75,20% - 29.9%
47179,Washington County,TN,47.85,40% - 49.9%
47181,Wayne County,TN,24.45,20% - 29.9%
47183,Weakley County,TN,21.14,20% - 29.9%
47185,White County,TN,18.57,0% - 19.9%
47187,Williamson County,TN,57.11,50% - 59.9%
47189,Wilson County,TN,41.9,40% - 49.9%
48001,Anderson County,TX,0,No Data
48003,Andrews County,TX,0,No Data
48005,Angelina County,TX,0,No Data
48007,Aransas County,TX,41.21,40% - 49.9%
48009,Archer County,TX,0,No Data
48011,Armstrong County,TX,0,No Data
48013,Atascosa County,TX,0,No Data
48015,Austin County,TX,0,No Data
48017,Bailey County,TX,0,No Data
48019,Bandera County,TX,0,No Data
48021,Bastrop County,TX,56.12,50% - 59.9%
48023,Baylor County,TX,0,No Data
48025,Bee County,TX,0,No Data
48027,Bell County,TX,54.03,50% - 59.9%
48029,Bexar County,TX,77.66,70% or More
48031,Blanco County,TX,0,No Data
48033,Borden County,TX,0,No Data
48035,Bosque County,TX,0,No Data
48037,Bowie County,TX,23.74,20% - 29.9%
48039,Brazoria County,TX,59.24,50% - 59.9%
48041,Brazos County,TX,48.41,40% - 49.9%
48043,Brewster County,TX,0,No Data
48045,Briscoe County,TX,0,No Data
48047,Brooks County,TX,0,No Data
48049,Brown County,TX,0,No Data
48051,Burleson County,TX,0,No Data
48053,Burnet County,TX,0,No Data
48055,Caldwell County,TX,0,No Data
48057,Calhoun County,TX,0,No Data
48059,Callahan County,TX,0,No Data
48061,Cameron County,TX,99.99,70% or More
48063,Camp County,TX,0,No Data
48065,Carson County,TX,0,No Data
48067,Cass County,TX,16.61,0% - 19.9%
48069,Castro County,TX,0,No Data
48071,Chambers County,TX,0,No Data
48073,Cherokee County,TX,0,No Data
48075,Childress County,TX,0,No Data
48077,Clay County,TX,0,No Data
48079,Cochran County,TX,0,No Data
48081,Coke County,TX,0,No Data
48083,Coleman County,TX,0,No Data
48085,Collin County,TX,68.24,60% - 69.9%
48087,Collingsworth County,TX,0,No Data
48089,Colorado County,TX,0,No Data
48091,Comal County,TX,50.84,50% - 59.9%
48093,Comanche County,TX,0,No Data
48095,Concho County,TX,0,No Data
48097,Cooke County,TX,0,No Data
48099,Coryell County,TX,0,No Data
48101,Cottle County,TX,0,No Data
48103,Crane County,TX,0,No Data
48105,Crockett County,TX,0,No Data
48107,Crosby County,TX,0,No Data
48109,Culberson County,TX,0,No Data
48111,Dallam County,TX,0,No Data
48113,Dallas County,TX,61.72,60% - 69.9%
48115,Dawson County,TX,0,No Data
48117,Deaf Smith County,TX,0,No Data
48119,Delta County,TX,0,No Data
48121,Denton County,TX,59.95,50% - 59.9%
48123,DeWitt County,TX,0,No Data
48125,Dickens County,TX,0,No Data
48127,Dimmit County,TX,0,No Data
48129,Donley County,TX,0,No Data
48131,Duval County,TX,0,No Data
48133,Eastland County,TX,0,No Data
48135,Ector County,TX,37.45,30% - 39.9%
48137,Edwards County,TX,0,No Data
48141,El Paso County,TX,99.99,70% or More
48139,Ellis County,TX,0,No Data
48143,Erath County,TX,0,No Data
48145,Falls County,TX,0,No Data
48147,Fannin County,TX,0,No Data
48149,Fayette County,TX,0,No Data
48151,Fisher County,TX,0,No Data
48153,Floyd County,TX,0,No Data
48155,Foard County,TX,0,No Data
48157,Fort Bend County,TX,79.71,70% or More
48159,Franklin County,TX,0,No Data
48161,Freestone County,TX,0,No Data
48163,Frio County,TX,0,No Data
48165,Gaines County,TX,0,No Data
48167,Galveston County,TX,56.19,50% - 59.9%
48169,Garza County,TX,0,No Data
48171,Gillespie County,TX,0,No Data
48173,Glasscock County,TX,0,No Data
48175,Goliad County,TX,0,No Data
48177,Gonzales County,TX,0,No Data
48179,Gray County,TX,0,No Data
48181,Grayson County,TX,26.33,20% - 29.9%
48183,Gregg County,TX,0,No Data
48185,Grimes County,TX,0,No Data
48187,Guadalupe County,TX,55.75,50% - 59.9%
48189,Hale County,TX,0,No Data
48191,Hall County,TX,0,No Data
48193,Hamilton County,TX,0,No Data
48195,Hansford County,TX,0,No Data
48197,Hardeman County,TX,0,No Data
48199,Hardin County,TX,0,No Data
48201,Harris County,TX,68.71,60% - 69.9%
48203,Harrison County,TX,26.68,20% - 29.9%
48205,Hartley County,TX,0,No Data
48207,Haskell County,TX,0,No Data
48209,Hays County,TX,67.88,60% - 69.9%
48211,Hemphill County,TX,0,No Data
48213,Henderson County,TX,0,No Data
48215,Hidalgo County,TX,93.4,70% or More
48217,Hill County,TX,0,No Data
48219,Hockley County,TX,0,No Data
48221,Hood County,TX,0,No Data
48223,Hopkins County,TX,0,No Data
48225,Houston County,TX,0,No Data
48227,Howard County,TX,0,No Data
48229,Hudspeth County,TX,0,No Data
48231,Hunt County,TX,32.42,30% - 39.9%
48233,Hutchinson County,TX,14.99,0% - 19.9%
48235,Irion County,TX,0,No Data
48237,Jack County,TX,0,No Data
48239,Jackson County,TX,0,No Data
48241,Jasper County,TX,0,No Data
48243,Jeff Davis County,TX,0,No Data
48245,Jefferson County,TX,44.22,40% - 49.9%
48247,Jim Hogg County,TX,0,No Data
48249,Jim Wells County,TX,0,No Data
48251,Johnson County,TX,0,No Data
48253,Jones County,TX,0,No Data
48255,Karnes County,TX,0,No Data
48257,Kaufman County,TX,44.47,40% - 49.9%
48259,Kendall County,TX,0,No Data
48261,Kenedy County,TX,0,No Data
48263,Kent County,TX,0,No Data
48265,Kerr County,TX,0,No Data
48267,Kimble County,TX,0,No Data
48269,King County,TX,0,No Data
48271,Kinney County,TX,0,No Data
48273,Kleberg County,TX,0,No Data
48275,Knox County,TX,0,No Data
48283,La Salle County,TX,0,No Data
48277,Lamar County,TX,22.98,20% - 29.9%
48279,Lamb County,TX,0,No Data
48281,Lampasas County,TX,0,No Data
48285,Lavaca County,TX,0,No Data
48287,Lee County,TX,0,No Data
48289,Leon County,TX,0,No Data
48291,Liberty County,TX,0,No Data
48293,Limestone County,TX,0,No Data
48295,Lipscomb County,TX,9.77,0% - 19.9%
48297,Live Oak County,TX,0,No Data
48299,Llano County,TX,0,No Data
48301,Loving County,TX,0,No Data
48303,Lubbock County,TX,39.43,30% - 39.9%
48305,Lynn County,TX,0,No Data
48313,Madison County,TX,0,No Data
48315,Marion County,TX,24.03,20% - 29.9%
48317,Martin County,TX,0,No Data
48319,Mason County,TX,0,No Data
48321,Matagorda County,TX,0,No Data
48323,Maverick County,TX,99.99,70% or More
48307,McCulloch County,TX,0,No Data
48309,McLennan County,TX,42.98,40% - 49.9%
48311,McMullen County,TX,0,No Data
48325,Medina County,TX,0,No Data
48327,Menard County,TX,0,No Data
48329,Midland County,TX,36.99,30% - 39.9%
48331,Milam County,TX,0,No Data
48333,Mills County,TX,0,No Data
48335,Mitchell County,TX,0,No Data
48337,Montague County,TX,0,No Data
48339,Montgomery County,TX,51.34,50% - 59.9%
48341,Moore County,TX,0,No Data
48343,Morris County,TX,0,No Data
48345,Motley County,TX,0,No Data
48347,Nacogdoches County,TX,0,No Data
48349,Navarro County,TX,0,No Data
48351,Newton County,TX,0,No Data
48353,Nolan County,TX,0,No Data
48355,Nueces County,TX,59.02,50% - 59.9%
48357,Ochiltree County,TX,0,No Data
48359,Oldham County,TX,0,No Data
48361,Orange County,TX,19.56,0% - 19.9%
48363,Palo Pinto County,TX,0,No Data
48365,Panola County,TX,17.09,0% - 19.9%
48367,Parker County,TX,0,No Data
48369,Parmer County,TX,0,No Data
48371,Pecos County,TX,0,No Data
48373,Polk County,TX,23.15,20% - 29.9%
48375,Potter County,TX,0,No Data
48377,Presidio County,TX,0,No Data
48379,Rains County,TX,0,No Data
48381,Randall County,TX,29.66,20% - 29.9%
48383,Reagan County,TX,0,No Data
48385,Real County,TX,0,No Data
48387,Red River County,TX,0,No Data
48389,Reeves County,TX,0,No Data
48391,Refugio County,TX,0,No Data
48393,Roberts County,TX,0,No Data
48395,Robertson County,TX,0,No Data
48397,Rockwall County,TX,0,No Data
48399,Runnels County,TX,0,No Data
48401,Rusk County,TX,0,No Data
48403,Sabine County,TX,10.52,0% - 19.9%
48405,San Augustine County,TX,0,No Data
48407,San Jacinto County,TX,0,No Data
48409,San Patricio County,TX,0,No Data
48411,San Saba County,TX,0,No Data
48413,Schleicher County,TX,0,No Data
48415,Scurry County,TX,0,No Data
48417,Shackelford County,TX,0,No Data
48419,Shelby County,TX,19.76,0% - 19.9%
48421,Sherman County,TX,0,No Data
48423,Smith County,TX,33.11,30% - 39.9%
48425,Somervell County,TX,0,No Data
48427,Starr County,TX,0,No Data
48429,Stephens County,TX,0,No Data
48431,Sterling County,TX,0,No Data
48433,Stonewall County,TX,0,No Data
48435,Sutton County,TX,0,No Data
48437,Swisher County,TX,0,No Data
48439,Tarrant County,TX,53.37,50% - 59.9%
48441,Taylor County,TX,0,No Data
48443,Terrell County,TX,0,No Data
48445,Terry County,TX,0,No Data
48447,Throckmorton County,TX,0,No Data
48449,Titus County,TX,0,No Data
48451,Tom Green County,TX,0,No Data
48453,Travis County,TX,79.95,70% or More
48455,Trinity County,TX,0,No Data
48457,Tyler County,TX,0,No Data
48459,Upshur County,TX,0,No Data
48461,Upton County,TX,0,No Data
48463,Uvalde County,TX,0,No Data
48465,Val Verde County,TX,0,No Data
48467,Van Zandt County,TX,0,No Data
48469,Victoria County,TX,0,No Data
48471,Walker County,TX,38.53,30% - 39.9%
48473,Waller County,TX,0,No Data
48475,Ward County,TX,0,No Data
48477,Washington County,TX,0,No Data
48479,Webb County,TX,99.99,70% or More
48481,Wharton County,TX,0,No Data
48483,Wheeler County,TX,0,No Data
48485,Wichita County,TX,38.02,30% - 39.9%
48487,Wilbarger County,TX,0,No Data
48489,Willacy County,TX,0,No Data
48491,Williamson County,TX,68.94,60% - 69.9%
48493,Wilson County,TX,0,No Data
48495,Winkler County,TX,0,No Data
48497,Wise County,TX,0,No Data
48499,Wood County,TX,0,No Data
48501,Yoakum County,TX,0,No Data
48503,Young County,TX,0,No Data
48505,Zapata County,TX,0,No Data
48507,Zavala County,TX,0,No Data
49001,Beaver County,UT,33.6,30% - 39.9%
49003,Box Elder County,UT,47.72,40% - 49.9%
49005,Cache County,UT,60.99,60% - 69.9%
49007,Carbon County,UT,38.04,30% - 39.9%
49009,Daggett County,UT,38.95,30% - 39.9%
49011,Davis County,UT,71.97,70% or More
49013,Duchesne County,UT,39.86,30% - 39.9%
49015,Emery County,UT,28.15,20% - 29.9%
49017,Garfield County,UT,32.98,30% - 39.9%
49019,Grand County,UT,48.79,40% - 49.9%
49021,Iron County,UT,33.85,30% - 39.9%
49023,Juab County,UT,22.53,20% - 29.9%
49025,Kane County,UT,26.22,20% - 29.9%
49027,Millard County,UT,26.88,20% - 29.9%
49029,Morgan County,UT,49.01,40% - 49.9%
49031,Piute County,UT,17.88,0% - 19.9%
49033,Rich County,UT,32.94,30% - 39.9%
49035,Salt Lake County,UT,71.09,70% or More
49037,San Juan County,UT,61.98,60% - 69.9%
49039,Sanpete County,UT,42.99,40% - 49.9%
49041,Sevier County,UT,34.02,30% - 39.9%
49043,Summit County,UT,80.23,70% or More
49045,Tooele County,UT,60.29,60% - 69.9%
49047,Uintah County,UT,47.2,40% - 49.9%
49049,Utah County,UT,54.04,50% - 59.9%
49051,Wasatch County,UT,57.79,50% - 59.9%
49053,Washington County,UT,37.15,30% - 39.9%
49055,Wayne County,UT,29.96,20% - 29.9%
49057,Weber County,UT,59.33,50% - 59.9%
51001,Accomack County,VA,55.87,50% - 59.9%
51003,Albemarle County,VA,77.31,70% or More
51510,Alexandria city,VA,87.65,70% or More
51005,Alleghany County,VA,22.43,20% - 29.9%
51007,Amelia County,VA,17.85,0% - 19.9%
51009,Amherst County,VA,37.25,30% - 39.9%
51011,Appomattox County,VA,15.54,0% - 19.9%
51013,Arlington County,VA,85.7,70% or More
51015,Augusta County,VA,35.86,30% - 39.9%
51017,Bath County,VA,21.9,20% - 29.9%
51019,Bedford County,VA,25.67,20% - 29.9%
51021,Bland County,VA,20.94,20% - 29.9%
51023,Botetourt County,VA,36.25,30% - 39.9%
51520,Bristol city,VA,49.38,40% - 49.9%
51025,Brunswick County,VA,38.41,30% - 39.9%
51027,Buchanan County,VA,35.06,30% - 39.9%
51029,Buckingham County,VA,33.58,30% - 39.9%
51530,Buena Vista city,VA,0,No Data
51031,Campbell County,VA,24.1,20% - 29.9%
51033,Caroline County,VA,30,30% - 39.9%
51035,Carroll County,VA,20,20% - 29.9%
51037,Charlotte County,VA,21.26,20% - 29.9%
51540,Charlottesville city,VA,67.61,60% - 69.9%
51550,Chesapeake city,VA,41.82,40% - 49.9%
51041,Chesterfield County,VA,57.45,50% - 59.9%
51043,Clarke County,VA,52.51,50% - 59.9%
51570,Colonial Heights city,VA,29.29,20% - 29.9%
51580,Covington city,VA,0,No Data
51045,Craig County,VA,16.71,0% - 19.9%
51047,Culpeper County,VA,39.86,30% - 39.9%
51049,Cumberland County,VA,28.14,20% - 29.9%
51590,Danville city,VA,0,No Data
51051,Dickenson County,VA,37.35,30% - 39.9%
51053,Dinwiddie County,VA,29.9,20% - 29.9%
51595,Emporia city,VA,0,No Data
51057,Essex County,VA,29.55,20% - 29.9%
51600,Fairfax city,VA,65.71,60% - 69.9%
51059,Fairfax County,VA,93.25,70% or More
51610,Falls Church city,VA,72.24,70% or More
51061,Fauquier County,VA,57.44,50% - 59.9%
51063,Floyd County,VA,25.23,20% - 29.9%
51065,Fluvanna County,VA,60.21,60% - 69.9%
51620,Franklin city,VA,0,No Data
51067,Franklin County,VA,29.22,20% - 29.9%
51069,Frederick County,VA,39.02,30% - 39.9%
51630,Fredericksburg city,VA,39.17,30% - 39.9%
51640,Galax city,VA,0,No Data
51071,Giles County,VA,28.02,20% - 29.9%
51073,Gloucester County,VA,46.45,40% - 49.9%
51075,Goochland County,VA,57.3,50% - 59.9%
51077,Grayson County,VA,20.62,20% - 29.9%
51079,Greene County,VA,39.82,30% - 39.9%
51081,Greensville County,VA,23.09,20% - 29.9%
51083,Halifax County,VA,31.53,30% - 39.9%
51650,Hampton city,VA,51.69,50% - 59.9%
51085,Hanover County,VA,56.79,50% - 59.9%
51660,Harrisonburg city,VA,46.96,40% - 49.9%
51087,Henrico County,VA,57.61,50% - 59.9%
51089,Henry County,VA,25.33,20% - 29.9%
51091,Highland County,VA,47.73,40% - 49.9%
51670,Hopewell city,VA,23.56,20% - 29.9%
51093,Isle of Wight County,VA,44.54,40% - 49.9%
51095,James City County,VA,39.05,30% - 39.9%
51097,King and Queen County,VA,35.36,30% - 39.9%
51099,King George County,VA,35.38,30% - 39.9%
51101,King William County,VA,40.36,40% - 49.9%
51103,Lancaster County,VA,32.24,30% - 39.9%
51105,Lee County,VA,32.04,30% - 39.9%
51678,Lexington city,VA,56.82,50% - 59.9%
51107,Loudoun County,VA,88.88,70% or More
51109,Louisa County,VA,31.83,30% - 39.9%
51111,Lunenburg County,VA,35.58,30% - 39.9%
51680,Lynchburg city,VA,28.63,20% - 29.9%
51113,Madison County,VA,43.26,40% - 49.9%
51683,Manassas city,VA,52.39,50% - 59.9%
51685,Manassas Park city,VA,0,No Data
51690,Martinsville city,VA,0,No Data
51115,Mathews County,VA,38.99,30% - 39.9%
51117,Mecklenburg County,VA,24.84,20% - 29.9%
51119,Middlesex County,VA,51.97,50% - 59.9%
51121,Montgomery County,VA,56.17,50% - 59.9%
51125,Nelson County,VA,36.66,30% - 39.9%
51127,New Kent County,VA,41.33,40% - 49.9%
51700,Newport News city,VA,48.39,40% - 49.9%
51710,Norfolk city,VA,55.53,50% - 59.9%
51131,Northampton County,VA,60.23,60% - 69.9%
51133,Northumberland County,VA,29.03,20% - 29.9%
51720,Norton city,VA,0,No Data
51135,Nottoway County,VA,26.44,20% - 29.9%
51137,Orange County,VA,34.23,30% - 39.9%
51139,Page County,VA,20.69,20% - 29.9%
51141,Patrick County,VA,21.07,20% - 29.9%
51730,Petersburg city,VA,21.21,20% - 29.9%
51143,Pittsylvania County,VA,27.2,20% - 29.9%
51735,Poquoson city,VA,0,No Data
51740,Portsmouth city,VA,52.25,50% - 59.9%
51145,Powhatan County,VA,37.37,30% - 39.9%
51147,Prince Edward County,VA,27.03,20% - 29.9%
51149,Prince George County,VA,38.44,30% - 39.9%
51153,Prince William County,VA,81.49,70% or More
51155,Pulaski County,VA,37.3,30% - 39.9%
51750,Radford city,VA,35.63,30% - 39.9%
51157,Rappahannock County,VA,36.28,30% - 39.9%
51760,Richmond city,VA,38.32,30% - 39.9%
51159,Richmond County,VA,24.18,20% - 29.9%
51770,Roanoke city,VA,34.66,30% - 39.9%
51161,Roanoke County,VA,44.97,40% - 49.9%
51163,Rockbridge County,VA,32.45,30% - 39.9%
51165,Rockingham County,VA,33.62,30% - 39.9%
51167,Russell County,VA,31.06,30% - 39.9%
51775,Salem city,VA,0,No Data
51169,Scott County,VA,34.9,30% - 39.9%
51171,Shenandoah County,VA,35.18,30% - 39.9%
51173,Smyth County,VA,34.52,30% - 39.9%
51175,Southampton County,VA,25.26,20% - 29.9%
51177,Spotsylvania County,VA,41.41,40% - 49.9%
51179,Stafford County,VA,60.34,60% - 69.9%
51790,Staunton city,VA,41.67,40% - 49.9%
51800,Suffolk city,VA,48.58,40% - 49.9%
51181,Surry County,VA,47.89,40% - 49.9%
51183,Sussex County,VA,20.74,20% - 29.9%
51185,Tazewell County,VA,32.28,30% - 39.9%
51810,Virginia Beach city,VA,58.69,50% - 59.9%
51187,Warren County,VA,28.94,20% - 29.9%
51191,Washington County,VA,40.56,40% - 49.9%
51820,Waynesboro city,VA,37.8,30% - 39.9%
51193,Westmoreland County,VA,30.03,30% - 39.9%
51830,Williamsburg city,VA,32.61,30% - 39.9%
51840,Winchester city,VA,44.42,40% - 49.9%
51195,Wise County,VA,36.24,30% - 39.9%
51197,Wythe County,VA,26.01,20% - 29.9%
51199,York County,VA,54.8,50% - 59.9%
50001,Addison County,VT,78.86,70% or More
50003,Bennington County,VT,46.48,40% - 49.9%
50005,Caledonia County,VT,33.23,30% - 39.9%
50007,Chittenden County,VT,80.98,70% or More
50009,Essex County,VT,43.24,40% - 49.9%
50011,Franklin County,VT,37.46,30% - 39.9%
50013,Grand Isle County,VT,74.5,70% or More
50015,Lamoille County,VT,67.19,60% - 69.9%
50017,Orange County,VT,57.19,50% - 59.9%
50019,Orleans County,VT,49.79,40% - 49.9%
50021,Rutland County,VT,65.9,60% - 69.9%
50023,Washington County,VT,50.13,50% - 59.9%
50025,Windham County,VT,75.36,70% or More
50027,Windsor County,VT,46.98,40% - 49.9%
53001,Adams County,WA,44.02,40% - 49.9%
53003,Asotin County,WA,25.52,20% - 29.9%
53005,Benton County,WA,47.14,40% - 49.9%
53007,Chelan County,WA,65.1,60% - 69.9%
53009,Clallam County,WA,53.23,50% - 59.9%
53011,Clark County,WA,60.15,60% - 69.9%
53013,Columbia County,WA,32.16,30% - 39.9%
53015,Cowlitz County,WA,44,40% - 49.9%
53017,Douglas County,WA,49.78,40% - 49.9%
53019,Ferry County,WA,59.3,50% - 59.9%
53021,Franklin County,WA,46.09,40% - 49.9%
53023,Garfield County,WA,40.14,40% - 49.9%
53025,Grant County,WA,45.12,40% - 49.9%
53027,Grays Harbor County,WA,47.42,40% - 49.9%
53029,Island County,WA,66.16,60% - 69.9%
53031,Jefferson County,WA,62.34,60% - 69.9%
53033,King County,WA,88.96,70% or More
53035,Kitsap County,WA,67.9,60% - 69.9%
53037,Kittitas County,WA,47.05,40% - 49.9%
53039,Klickitat County,WA,34.47,30% - 39.9%
53041,Lewis County,WA,39.4,30% - 39.9%
53043,Lincoln County,WA,31.98,30% - 39.9%
53045,Mason County,WA,50.22,50% - 59.9%
53047,Okanogan County,WA,48.16,40% - 49.9%
53049,Pacific County,WA,50.62,50% - 59.9%
53051,Pend Oreille County,WA,23.62,20% - 29.9%
53053,Pierce County,WA,63.39,60% - 69.9%
53055,San Juan County,WA,90.2,70% or More
53057,Skagit County,WA,62.51,60% - 69.9%
53059,Skamania County,WA,32.88,30% - 39.9%
53061,Snohomish County,WA,70.7,70% or More
53063,Spokane County,WA,51.39,50% - 59.9%
53065,Stevens County,WA,26.35,20% - 29.9%
53067,Thurston County,WA,68.46,60% - 69.9%
53069,Wahkiakum County,WA,27.04,20% - 29.9%
53071,Walla Walla County,WA,57.37,50% - 59.9%
53073,Whatcom County,WA,69.83,60% - 69.9%
53075,Whitman County,WA,52.27,50% - 59.9%
53077,Yakima County,WA,57.5,50% - 59.9%
55001,Adams County,WI,32.12,30% - 39.9%
55003,Ashland County,WI,64.6,60% - 69.9%
55005,Barron County,WI,32.47,30% - 39.9%
55007,Bayfield County,WI,61.69,60% - 69.9%
55009,Brown County,WI,57.98,50% - 59.9%
55011,Buffalo County,WI,39.66,30% - 39.9%
55013,Burnett County,WI,37.3,30% - 39.9%
55015,Calumet County,WI,41.4,40% - 49.9%
55017,Chippewa County,WI,40.74,40% - 49.9%
55019,Clark County,WI,17.54,0% - 19.9%
55021,Columbia County,WI,57.63,50% - 59.9%
55023,Crawford County,WI,39.75,30% - 39.9%
55025,Dane County,WI,87.27,70% or More
55027,Dodge County,WI,38.06,30% - 39.9%
55029,Door County,WI,57.01,50% - 59.9%
55031,Douglas County,WI,36.51,30% - 39.9%
55033,Dunn County,WI,44.79,40% - 49.9%
55035,Eau Claire County,WI,59.04,50% - 59.9%
55037,Florence County,WI,25.79,20% - 29.9%
55039,Fond du Lac County,WI,40.29,40% - 49.9%
55041,Forest County,WI,37.14,30% - 39.9%
55043,Grant County,WI,43.59,40% - 49.9%
55045,Green County,WI,54.9,50% - 59.9%
55047,Green Lake County,WI,32.89,30% - 39.9%
55049,Iowa County,WI,58.78,50% - 59.9%
55051,Iron County,WI,42.77,40% - 49.9%
55053,Jackson County,WI,42.54,40% - 49.9%
55055,Jefferson County,WI,48.34,40% - 49.9%
55057,Juneau County,WI,37.79,30% - 39.9%
55059,Kenosha County,WI,48.88,40% - 49.9%
55061,Kewaunee County,WI,34.62,30% - 39.9%
55063,La Crosse County,WI,72.04,70% or More
55065,Lafayette County,WI,45.92,40% - 49.9%
55067,Langlade County,WI,29.16,20% - 29.9%
55069,Lincoln County,WI,33.3,30% - 39.9%
55071,Manitowoc County,WI,42.63,40% - 49.9%
55073,Marathon County,WI,48.73,40% - 49.9%
55075,Marinette County,WI,27.81,20% - 29.9%
55077,Marquette County,WI,35.27,30% - 39.9%
55078,Menominee County,WI,96.85,70% or More
55079,Milwaukee County,WI,58.8,50% - 59.9%
55081,Monroe County,WI,40.59,40% - 49.9%
55083,Oconto County,WI,33.03,30% - 39.9%
55085,Oneida County,WI,44.31,40% - 49.9%
55087,Outagamie County,WI,57.12,50% - 59.9%
55089,Ozaukee County,WI,67.95,60% - 69.9%
55091,Pepin County,WI,44.19,40% - 49.9%
55093,Pierce County,WI,31.58,30% - 39.9%
55095,Polk County,WI,31.01,30% - 39.9%
55097,Portage County,WI,58.73,50% - 59.9%
55099,Price County,WI,41.75,40% - 49.9%
55101,Racine County,WI,46.86,40% - 49.9%
55103,Richland County,WI,50.49,50% - 59.9%
55105,Rock County,WI,53.69,50% - 59.9%
55107,Rusk County,WI,23.3,20% - 29.9%
55111,Sauk County,WI,50.17,50% - 59.9%
55113,Sawyer County,WI,58.57,50% - 59.9%
55115,Shawano County,WI,38.14,30% - 39.9%
55117,Sheboygan County,WI,48.2,40% - 49.9%
55109,St. Croix County,WI,41.86,40% - 49.9%
55119,Taylor County,WI,17.6,0% - 19.9%
55121,Trempealeau County,WI,53.79,50% - 59.9%
55123,Vernon County,WI,40.9,40% - 49.9%
55125,Vilas County,WI,38.39,30% - 39.9%
55127,Walworth County,WI,40.02,40% - 49.9%
55129,Washburn County,WI,40.22,40% - 49.9%
55131,Washington County,WI,40.43,40% - 49.9%
55133,Waukesha County,WI,61.69,60% - 69.9%
55135,Waupaca County,WI,35.74,30% - 39.9%
55137,Waushara County,WI,29.61,20% - 29.9%
55139,Winnebago County,WI,56.95,50% - 59.9%
55141,Wood County,WI,47.55,40% - 49.9%
54001,Barbour County,WV,35.8,30% - 39.9%
54003,Berkeley County,WV,41.39,40% - 49.9%
54005,Boone County,WV,47.47,40% - 49.9%
54007,Braxton County,WV,31.37,30% - 39.9%
54009,Brooke County,WV,32.74,30% - 39.9%
54011,Cabell County,WV,56.45,50% - 59.9%
54013,Calhoun County,WV,19.46,0% - 19.9%
54015,Clay County,WV,58.58,50% - 59.9%
54017,Doddridge County,WV,31.81,30% - 39.9%
54019,Fayette County,WV,50.13,50% - 59.9%
54021,Gilmer County,WV,41.29,40% - 49.9%
54023,Grant County,WV,12.81,0% - 19.9%
54025,Greenbrier County,WV,54.19,50% - 59.9%
54027,Hampshire County,WV,20.08,20% - 29.9%
54029,Hancock County,WV,31.94,30% - 39.9%
54031,Hardy County,WV,31.02,30% - 39.9%
54033,Harrison County,WV,37.77,30% - 39.9%
54035,Jackson County,WV,36.12,30% - 39.9%
54037,Jefferson County,WV,63.1,60% - 69.9%
54039,Kanawha County,WV,62.84,60% - 69.9%
54041,Lewis County,WV,39.58,30% - 39.9%
54043,Lincoln County,WV,47.2,40% - 49.9%
54045,Logan County,WV,53.62,50% - 59.9%
54049,Marion County,WV,39.26,30% - 39.9%
54051,Marshall County,WV,23.66,20% - 29.9%
54053,Mason County,WV,38.27,30% - 39.9%
54047,McDowell County,WV,29.01,20% - 29.9%
54055,Mercer County,WV,47.56,40% - 49.9%
54057,Mineral County,WV,39.4,30% - 39.9%
54059,Mingo County,WV,23.05,20% - 29.9%
54061,Monongalia County,WV,49.38,40% - 49.9%
54063,Monroe County,WV,33.19,30% - 39.9%
54065,Morgan County,WV,13.63,0% - 19.9%
54067,Nicholas County,WV,43.91,40% - 49.9%
54069,Ohio County,WV,51.75,50% - 59.9%
54071,Pendleton County,WV,43.92,40% - 49.9%
54073,Pleasants County,WV,30.63,30% - 39.9%
54075,Pocahontas County,WV,24.95,20% - 29.9%
54077,Preston County,WV,33.63,30% - 39.9%
54079,Putnam County,WV,45.26,40% - 49.9%
54081,Raleigh County,WV,37.89,30% - 39.9%
54083,Randolph County,WV,43.76,40% - 49.9%
54085,Ritchie County,WV,26.59,20% - 29.9%
54087,Roane County,WV,25.26,20% - 29.9%
54089,Summers County,WV,56.8,50% - 59.9%
54091,Taylor County,WV,25.21,20% - 29.9%
54093,Tucker County,WV,57.3,50% - 59.9%
54095,Tyler County,WV,24.41,20% - 29.9%
54097,Upshur County,WV,34.54,30% - 39.9%
54099,Wayne County,WV,41.08,40% - 49.9%
54101,Webster County,WV,42.37,40% - 49.9%
54103,Wetzel County,WV,26.22,20% - 29.9%
54105,Wirt County,WV,25.38,20% - 29.9%
54107,Wood County,WV,51.36,50% - 59.9%
54109,Wyoming County,WV,62.82,60% - 69.9%
56001,Albany County,WY,61.75,60% - 69.9%
56003,Big Horn County,WY,22.4,20% - 29.9%
56005,Campbell County,WY,15.89,0% - 19.9%
56007,Carbon County,WY,27.01,20% - 29.9%
56009,Converse County,WY,15.49,0% - 19.9%
56011,Crook County,WY,15.41,0% - 19.9%
56013,Fremont County,WY,78,70% or More
56015,Goshen County,WY,23.6,20% - 29.9%
56017,Hot Springs County,WY,22.22,20% - 29.9%
56019,Johnson County,WY,25.88,20% - 29.9%
56021,Laramie County,WY,43.19,40% - 49.9%
56023,Lincoln County,WY,26.05,20% - 29.9%
56025,Natrona County,WY,32.9,30% - 39.9%
56027,Niobrara County,WY,5.79,0% - 19.9%
56029,Park County,WY,27.04,20% - 29.9%
56031,Platte County,WY,21.05,20% - 29.9%
56033,Sheridan County,WY,34.33,30% - 39.9%
56035,Sublette County,WY,22.85,20% - 29.9%
56037,Sweetwater County,WY,35.87,30% - 39.9%
56039,Teton County,WY,93,70% or More
56041,Uinta County,WY,34.81,30% - 39.9%
56043,Washakie County,WY,19.92,0% - 19.9%
56045,Weston County,WY,13.39,0% - 19.9%
`, ri = `City,Longitude,Latitude,Value
Albuquerque,-106.650421,35.084385,1
Anaheim,-117.914299,33.836594,2
Anchorage,-149.900284,61.218056,3
Arlington,-97.108063,32.735687,4
Atlanta,-84.387985,33.748997,5
Aurora,-93.717979,36.97089,6
Austin,-97.743057,30.267153,7
Bakersfield,-119.018715,35.373291,8
Baltimore,-76.61219,39.290386,9
Baton Rouge,-91.187149,30.451468,10
Boise,-116.202316,43.615021,11
Boston,-71.058884,42.360081,12
Buffalo,-78.878372,42.886448,13
Chandler,-111.841248,33.30616,14
Charlotte,-80.843124,35.227085,15
Chesapeake,-76.287491,36.768208,16
Chicago,-87.629799,41.878113,17
Chula Vista,-117.084198,32.640053,18
Cincinnati,-84.512016,39.103119,19
Cleveland,-81.694359,41.499321,20
Colorado Springs,-104.821365,38.833881,21
Columbus,-82.998795,39.961178,22
Corpus Christi,-97.396378,27.800583,23
Dallas,-96.796989,32.776665,24
Denver,-104.99025,39.739235,25
Detroit,-83.045753,42.331429,26
District of Columbia,-77.036873,38.907192,27
Durham,-78.898621,35.994034,28
El Paso,-106.485023,31.761877,29
Fort Wayne,-85.139351,41.079273,30
Ft Wayne,-85.139351,41.079273,31
Fort Worth,-97.330765,32.755489,32
Fremont,-121.988571,37.548271,33
Fresno,-119.787125,36.737797,34
Garland,-96.638885,32.912624,35
Gilbert,-111.789024,33.352825,36
Glendale,-118.255074,34.142509,37
Greensboro,-79.791977,36.072636,38
Henderson,-114.98172,36.039524,39
Hialeah,-80.278107,25.857595,40
Honolulu,-157.858337,21.306944,41
Houston,-95.358421,29.749907,42
Indianapolis,-86.158066,39.768402,43
Irvine,-117.826508,33.684566,44
Irving,-96.948891,32.814018,45
Jacksonville,-81.655647,30.332184,46
Jersey City,-74.077644,40.728157,47
Kansas City,-94.578568,39.099728,48
Laredo,-99.507553,27.503561,49
Las Vegas,-115.139832,36.169941,50
Lexington,-84.503716,38.040585,51
Lincoln,-95.262955,37.346134,52
Long Beach,-118.193741,33.77005,53
Los Angeles,-118.243683,34.052235,54
Los Angeles County,-118.229362,34.058762,55
Louisville,-85.758453,38.252666,56
Lubbock,-101.855164,33.577862,57
Madison,-89.40123,43.073051,58
"Marion County, Indiana",-86.136543,39.781029,59
Memphis,-90.048981,35.149532,60
Mesa,-111.831474,33.415184,61
Miami,-80.191788,25.761681,62
Milwaukee,-87.906471,43.038902,63
Minneapolis,-93.265015,44.977753,64
"Montgomery County, Maryland",-77.199406,39.153515,65
Nashville,-86.781601,36.162663,66
New Orleans,-90.071533,29.951065,67
New York City,-74.005974,40.712776,68
Newark,-95.582733,37.443188,69
Norfolk,-76.285873,36.850769,70
North Las Vegas,-115.114571,36.19585,71
Oakland,-122.271111,37.804363,72
Oklahoma City,-97.516426,35.46756,73
Omaha,-95.934502,41.256538,74
Orlando,-81.379234,28.538336,75
Philadelphia,-75.165222,39.952583,76
Phoenix,-112.074036,33.448376,77
Pittsburgh,-79.995888,40.440624,78
Plano,-96.698883,33.019844,79
Portland,-122.658722,45.51223,80
Raleigh,-78.638176,35.779591,81
Reno,-119.813805,39.529633,82
"Richmond, Virginia",-77.43605,37.540726,83
Riverside,-117.375496,33.980602,84
Sacramento,-121.4944,38.581573,85
Saint Paul,-93.089958,44.953705,86
San Antonio,-98.493629,29.424122,87
San Diego,-117.161087,32.715736,88
San Francisco,-122.419418,37.774929,89
San Jose,-121.88633,37.338207,90
Santa Ana,-117.867653,33.745472,91
Scottsdale,-111.926048,33.494171,92
Seattle,-122.332069,47.606209,93
Spokane,-117.426048,47.658779,94
St. Louis,-90.199402,38.627003,95
St. Petersburg,-82.640289,27.767601,96
Stockton,-121.290779,37.957703,97
Tampa,-82.457176,27.950575,98
Toledo,-83.537865,41.652805,99
Tucson,-110.974709,32.222607,100
Tuscon,-110.974709,32.222607,101
Tulsa,-95.992775,36.15398,102
Virginia Beach,-75.977982,36.852924,103
Wichita,-97.330055,37.687176,104
Winston Salem,-80.244217,36.099861,105
Winston–Salem,-80.244217,36.099861,106
`, ui = `x,y1,y2,y3,y4
1,8,37,72,82
2,2,30,75,83
3,15,42,51,95
4,10,38,61,96
5,1,38,66,86
60,6,37,70,85
10,19,47,59,91
24,18,32,68,89
3,7,38,74,89
26,10,39,56,91
42,16,38,55,76
32,20,46,52,94
11,9,41,57,86
22,10,47,56,80
73,1,36,71,94
23,13,30,66,78
`, ii = `Group_Category,Value
category one,21
category one,19
category one,23
category one,24
category two,18
category two,10
category two,12
category two,19
category three,30
category three,35
category three,36
category three,40
category four,50
category four,54
category four,42
category four,159
`, li = `[
  {
    "Date": "1/15/2016",
    "Data 1": "900",
    "Data 2": "135",
    "Data 3": "300",
    "Data 4": "95",
    "Data 5": "120",
    "Data 6": "310"
  },
  {
    "Date": "2/15/2016",
    "Data 1": "4000",
    "Data 2": "90",
    "Data 3": "240",
    "Data 4": "60",
    "Data 5": "160",
    "Data 6": "2000"
  },
  {
    "Date": "3/15/2016",
    "Data 1": "500",
    "Data 2": "300",
    "Data 3": "290",
    "Data 4": "100",
    "Data 5": "200",
    "Data 6": "250"
  },
  {
    "Date": "4/15/2016",
    "Data 1": "1200",
    "Data 2": "160",
    "Data 3": "230",
    "Data 4": "180",
    "Data 5": "160",
    "Data 6": "220"
  },
  {
    "Date": "5/15/2016",
    "Data 1": "8000",
    "Data 2": "350",
    "Data 3": "300",
    "Data 4": "150",
    "Data 5": "130",
    "Data 6": "100"
  },
  {
    "Date": "6/15/2016",
    "Data 1": "9000",
    "Data 2": "220",
    "Data 3": "320",
    "Data 4": "100",
    "Data 5": "220",
    "Data 6": "300"
  },
  {
    "Date": "7/15/2016",
    "Data 1": "900",
    "Data 2": "235",
    "Data 3": "300",
    "Data 4": "195",
    "Data 5": "120",
    "Data 6": "610"
  },
  {
    "Date": "8/15/2016",
    "Data 1": "3000",
    "Data 2": "900",
    "Data 3": "540",
    "Data 4": "600",
    "Data 5": "120",
    "Data 6": "200"
  },
  {
    "Date": "9/15/2016",
    "Data 1": "700",
    "Data 2": "200",
    "Data 3": "590",
    "Data 4": "900",
    "Data 5": "400",
    "Data 6": "650"
  },
  {
    "Date": "10/15/2016",
    "Data 1": "2200",
    "Data 2": "360",
    "Data 3": "930",
    "Data 4": "880",
    "Data 5": "760",
    "Data 6": "420"
  },
  {
    "Date": "11/15/2016",
    "Data 1": "5000",
    "Data 2": "1350",
    "Data 3": "300",
    "Data 4": "1150",
    "Data 5": "230",
    "Data 6": "600"
  },
  {
    "Date": "12/15/2016",
    "Data 1": "6000",
    "Data 2": "3220",
    "Data 3": "540",
    "Data 4": "300",
    "Data 5": "720",
    "Data 6": "3000"
  }
]
`, si = `[
  {
    "Country": "Argentina",
    "Cases": "100",
    "Category": "Has not historically reported monkeypox",
    "AsOf": "11 Jul 2022 5:00 PM EDT",
    "longitude": "-63.6",
    "latitude": "-38.4"
  },
  {
    "Country": "New York City",
    "Cases": "10",
    "Category": "Has not historically reported monkeypox",
    "AsOf": "11 Jul 2022 5:00 PM EDT",
    "longitude": "-74.006",
    "latitude": "40.712"
  }
]`, ci = `date,quarter,upper_90,lower_90,random_col
1/1/2023,quarter one,90,10,67
1/2/2023,quarter one,90,10,11
1/3/2023,quarter one,90,10,94
1/4/2023,quarter one,90,10,95
1/5/2023,quarter one,90,10,79
1/6/2023,quarter one,90,10,2
1/7/2023,quarter one,90,10,36
1/8/2023,quarter one,90,10,9
1/9/2023,quarter one,90,10,3
1/10/2023,quarter one,90,10,64
1/11/2023,quarter one,90,10,48
1/12/2023,quarter one,90,10,94
1/13/2023,quarter one,90,10,38
1/14/2023,quarter one,90,10,33
1/15/2023,quarter one,90,10,23
1/16/2023,quarter one,90,10,13
1/17/2023,quarter one,90,10,89
1/18/2023,quarter one,90,10,12
1/19/2023,quarter one,90,10,24
1/20/2023,quarter one,90,10,86
1/21/2023,quarter one,90,10,17
1/22/2023,quarter one,90,10,37
1/23/2023,quarter one,90,10,9
1/24/2023,quarter one,90,10,15
1/25/2023,quarter one,90,10,7
1/26/2023,quarter one,90,10,40
1/27/2023,quarter one,90,10,18
1/28/2023,quarter one,90,10,67
1/29/2023,quarter one,90,10,40
1/30/2023,quarter one,90,10,84
1/31/2023,quarter one,90,10,81
2/1/2023,quarter one,90,10,16
2/2/2023,quarter one,90,10,85
2/3/2023,quarter one,90,10,48
2/4/2023,quarter one,90,10,45
2/5/2023,quarter one,90,10,93
2/6/2023,quarter one,90,10,77
2/7/2023,quarter one,90,10,35
2/8/2023,quarter one,90,10,44
2/9/2023,quarter one,90,10,57
2/10/2023,quarter one,90,10,92
2/11/2023,quarter one,90,10,50
2/12/2023,quarter one,90,10,81
2/13/2023,quarter one,90,10,13
2/14/2023,quarter one,90,10,31
2/15/2023,quarter one,90,10,52
2/16/2023,quarter one,90,10,91
2/17/2023,quarter one,90,10,57
2/18/2023,quarter one,90,10,79
2/19/2023,quarter one,90,10,75
2/20/2023,quarter one,90,10,8
2/21/2023,quarter one,90,10,11
2/22/2023,quarter one,90,10,41
2/23/2023,quarter one,90,10,20
2/24/2023,quarter one,90,10,80
2/25/2023,quarter one,90,10,65
2/26/2023,quarter one,90,10,76
2/27/2023,quarter one,90,10,11
2/28/2023,quarter one,90,10,88
3/1/2023,quarter one,90,10,92
3/2/2023,quarter one,90,10,53
3/3/2023,quarter one,90,10,89
3/4/2023,quarter one,90,10,40
3/5/2023,quarter one,90,10,26
3/6/2023,quarter one,90,10,67
3/7/2023,quarter one,90,10,79
3/8/2023,quarter one,90,10,13
3/9/2023,quarter one,90,10,71
3/10/2023,quarter one,90,10,52
3/11/2023,quarter one,90,10,69
3/12/2023,quarter one,90,10,89
3/13/2023,quarter one,90,10,55
3/14/2023,quarter one,90,10,77
3/15/2023,quarter one,90,10,19
3/16/2023,quarter one,90,10,16
3/17/2023,quarter one,90,10,33
3/18/2023,quarter one,90,10,54
3/19/2023,quarter one,90,10,49
3/20/2023,quarter one,90,10,29
3/21/2023,quarter one,90,10,85
3/22/2023,quarter one,90,10,53
3/23/2023,quarter one,90,10,25
3/24/2023,quarter one,90,10,36
3/25/2023,quarter one,90,10,79
3/26/2023,quarter one,90,10,100
3/27/2023,quarter one,90,10,12
3/28/2023,quarter one,90,10,71
3/29/2023,quarter one,90,10,46
3/30/2023,quarter one,90,10,32
3/31/2023,quarter one,90,10,81
4/1/2023,quarter two,80,20,70
4/2/2023,quarter two,80,20,84
4/3/2023,quarter two,80,20,97
4/4/2023,quarter two,80,20,69
4/5/2023,quarter two,80,20,76
4/6/2023,quarter two,80,20,69
4/7/2023,quarter two,80,20,9
4/8/2023,quarter two,80,20,53
4/9/2023,quarter two,80,20,63
4/10/2023,quarter two,80,20,26
4/11/2023,quarter two,80,20,9
4/12/2023,quarter two,80,20,48
4/13/2023,quarter two,80,20,36
4/14/2023,quarter two,80,20,29
4/15/2023,quarter two,80,20,66
4/16/2023,quarter two,80,20,53
4/17/2023,quarter two,80,20,10
4/18/2023,quarter two,80,20,62
4/19/2023,quarter two,80,20,84
4/20/2023,quarter two,80,20,88
4/21/2023,quarter two,80,20,27
4/22/2023,quarter two,80,20,81
4/23/2023,quarter two,80,20,16
4/24/2023,quarter two,80,20,95
4/25/2023,quarter two,80,20,80
4/26/2023,quarter two,80,20,53
4/27/2023,quarter two,80,20,65
4/28/2023,quarter two,80,20,39
4/29/2023,quarter two,80,20,1
4/30/2023,quarter two,80,20,37
5/1/2023,quarter two,80,20,70
5/2/2023,quarter two,80,20,88
5/3/2023,quarter two,80,20,75
5/4/2023,quarter two,80,20,80
5/5/2023,quarter two,80,20,45
5/6/2023,quarter two,80,20,70
5/7/2023,quarter two,80,20,8
5/8/2023,quarter two,80,20,2
5/9/2023,quarter two,80,20,41
5/10/2023,quarter two,80,20,42
5/11/2023,quarter two,80,20,88
5/12/2023,quarter two,80,20,94
5/13/2023,quarter two,80,20,31
5/14/2023,quarter two,80,20,19
5/15/2023,quarter two,80,20,62
5/16/2023,quarter two,80,20,62
5/17/2023,quarter two,80,20,33
5/18/2023,quarter two,80,20,86
5/19/2023,quarter two,80,20,36
5/20/2023,quarter two,80,20,82
5/21/2023,quarter two,80,20,52
5/22/2023,quarter two,80,20,64
5/23/2023,quarter two,80,20,82
5/24/2023,quarter two,80,20,85
5/25/2023,quarter two,80,20,87
5/26/2023,quarter two,80,20,23
5/27/2023,quarter two,80,20,61
5/28/2023,quarter two,80,20,64
5/29/2023,quarter two,80,20,14
5/30/2023,quarter two,80,20,73
5/31/2023,quarter two,80,20,92
6/1/2023,quarter two,80,20,85
6/2/2023,quarter two,80,20,75
6/3/2023,quarter two,80,20,67
6/4/2023,quarter two,80,20,39
6/5/2023,quarter two,80,20,39
6/6/2023,quarter two,80,20,92
6/7/2023,quarter two,80,20,70
6/8/2023,quarter two,80,20,48
6/9/2023,quarter two,80,20,69
6/10/2023,quarter two,80,20,74
6/11/2023,quarter two,80,20,40
6/12/2023,quarter two,80,20,34
6/13/2023,quarter two,80,20,38
6/14/2023,quarter two,80,20,14
6/15/2023,quarter two,80,20,42
6/16/2023,quarter two,80,20,16
6/17/2023,quarter two,80,20,47
6/18/2023,quarter two,80,20,43
6/19/2023,quarter two,80,20,28
6/20/2023,quarter two,80,20,88
6/21/2023,quarter two,80,20,70
6/22/2023,quarter two,80,20,63
6/23/2023,quarter two,80,20,43
6/24/2023,quarter two,80,20,47
6/25/2023,quarter two,80,20,80
6/26/2023,quarter two,80,20,6
6/27/2023,quarter two,80,20,13
6/28/2023,quarter two,80,20,39
6/29/2023,quarter two,80,20,62
6/30/2023,quarter two,80,20,26
7/1/2023,quarter three,70,30,96
7/2/2023,quarter three,70,30,0
7/3/2023,quarter three,70,30,24
7/4/2023,quarter three,70,30,4
7/5/2023,quarter three,70,30,39
7/6/2023,quarter three,70,30,1
7/7/2023,quarter three,70,30,18
7/8/2023,quarter three,70,30,38
7/9/2023,quarter three,70,30,92
7/10/2023,quarter three,70,30,11
7/11/2023,quarter three,70,30,48
7/12/2023,quarter three,70,30,62
7/13/2023,quarter three,70,30,82
7/14/2023,quarter three,70,30,55
7/15/2023,quarter three,70,30,63
7/16/2023,quarter three,70,30,26
7/17/2023,quarter three,70,30,26
7/18/2023,quarter three,70,30,22
7/19/2023,quarter three,70,30,65
7/20/2023,quarter three,70,30,1
7/21/2023,quarter three,70,30,16
7/22/2023,quarter three,70,30,20
7/23/2023,quarter three,70,30,44
7/24/2023,quarter three,70,30,38
7/25/2023,quarter three,70,30,33
7/26/2023,quarter three,70,30,9
7/27/2023,quarter three,70,30,8
7/28/2023,quarter three,70,30,70
7/29/2023,quarter three,70,30,16
7/30/2023,quarter three,70,30,26
7/31/2023,quarter three,70,30,93
8/1/2023,quarter three,70,30,5
8/2/2023,quarter three,70,30,9
8/3/2023,quarter three,70,30,66
8/4/2023,quarter three,70,30,15
8/5/2023,quarter three,70,30,3
8/6/2023,quarter three,70,30,28
8/7/2023,quarter three,70,30,93
8/8/2023,quarter three,70,30,88
8/9/2023,quarter three,70,30,87
8/10/2023,quarter three,70,30,27
8/11/2023,quarter three,70,30,51
8/12/2023,quarter three,70,30,25
8/13/2023,quarter three,70,30,6
8/14/2023,quarter three,70,30,87
8/15/2023,quarter three,70,30,83
8/16/2023,quarter three,70,30,61
8/17/2023,quarter three,70,30,93
8/18/2023,quarter three,70,30,91
8/19/2023,quarter three,70,30,87
8/20/2023,quarter three,70,30,99
8/21/2023,quarter three,70,30,27
8/22/2023,quarter three,70,30,91
8/23/2023,quarter three,70,30,100
8/24/2023,quarter three,70,30,36
8/25/2023,quarter three,70,30,73
8/26/2023,quarter three,70,30,73
8/27/2023,quarter three,70,30,80
8/28/2023,quarter three,70,30,100
8/29/2023,quarter three,70,30,84
8/30/2023,quarter three,70,30,40
8/31/2023,quarter three,70,30,30
9/1/2023,quarter three,70,30,6
9/2/2023,quarter three,70,30,26
9/3/2023,quarter three,70,30,45
9/4/2023,quarter three,70,30,1
9/5/2023,quarter three,70,30,14
9/6/2023,quarter three,70,30,44
9/7/2023,quarter three,70,30,93
9/8/2023,quarter three,70,30,63
9/9/2023,quarter three,70,30,65
9/10/2023,quarter three,70,30,79
9/11/2023,quarter three,70,30,90
9/12/2023,quarter three,70,30,23
9/13/2023,quarter three,70,30,95
9/14/2023,quarter three,70,30,64
9/15/2023,quarter three,70,30,32
9/16/2023,quarter three,70,30,39
9/17/2023,quarter three,70,30,67
9/18/2023,quarter three,70,30,9
9/19/2023,quarter three,70,30,48
9/20/2023,quarter three,70,30,49
9/21/2023,quarter three,70,30,56
9/22/2023,quarter three,70,30,59
9/23/2023,quarter three,70,30,0
9/24/2023,quarter three,70,30,94
9/25/2023,quarter three,70,30,86
9/26/2023,quarter three,70,30,37
9/27/2023,quarter three,70,30,50
9/28/2023,quarter three,70,30,31
9/29/2023,quarter three,70,30,44
9/30/2023,quarter three,70,30,48
10/1/2023,quarter four,60,40,76
10/2/2023,quarter four,60,40,14
10/3/2023,quarter four,60,40,76
10/4/2023,quarter four,60,40,12
10/5/2023,quarter four,60,40,25
10/6/2023,quarter four,60,40,86
10/7/2023,quarter four,60,40,69
10/8/2023,quarter four,60,40,86
10/9/2023,quarter four,60,40,99
10/10/2023,quarter four,60,40,24
10/11/2023,quarter four,60,40,69
10/12/2023,quarter four,60,40,42
10/13/2023,quarter four,60,40,1
10/14/2023,quarter four,60,40,72
10/15/2023,quarter four,60,40,85
10/16/2023,quarter four,60,40,2
10/17/2023,quarter four,60,40,42
10/18/2023,quarter four,60,40,55
10/19/2023,quarter four,60,40,59
10/20/2023,quarter four,60,40,71
10/21/2023,quarter four,60,40,19
10/22/2023,quarter four,60,40,43
10/23/2023,quarter four,60,40,29
10/24/2023,quarter four,60,40,78
10/25/2023,quarter four,60,40,21
10/26/2023,quarter four,60,40,76
10/27/2023,quarter four,60,40,65
10/28/2023,quarter four,60,40,88
10/29/2023,quarter four,60,40,41
10/30/2023,quarter four,60,40,31
10/31/2023,quarter four,60,40,71
11/1/2023,quarter four,60,40,59
11/2/2023,quarter four,60,40,65
11/3/2023,quarter four,60,40,91
11/4/2023,quarter four,60,40,60
11/5/2023,quarter four,60,40,22
11/6/2023,quarter four,60,40,26
11/7/2023,quarter four,60,40,10
11/8/2023,quarter four,60,40,39
11/9/2023,quarter four,60,40,67
11/10/2023,quarter four,60,40,0
11/11/2023,quarter four,60,40,19
11/12/2023,quarter four,60,40,9
11/13/2023,quarter four,60,40,70
11/14/2023,quarter four,60,40,86
11/15/2023,quarter four,60,40,40
11/16/2023,quarter four,60,40,7
11/17/2023,quarter four,60,40,57
11/18/2023,quarter four,60,40,16
11/19/2023,quarter four,60,40,24
11/20/2023,quarter four,60,40,68
11/21/2023,quarter four,60,40,36
11/22/2023,quarter four,60,40,62
11/23/2023,quarter four,60,40,96
11/24/2023,quarter four,60,40,75
11/25/2023,quarter four,60,40,55
11/26/2023,quarter four,60,40,14
11/27/2023,quarter four,60,40,60
11/28/2023,quarter four,60,40,23
11/29/2023,quarter four,60,40,8
11/30/2023,quarter four,60,40,82
12/1/2023,quarter four,60,40,27
12/2/2023,quarter four,60,40,67
12/3/2023,quarter four,60,40,47
12/4/2023,quarter four,60,40,73
12/5/2023,quarter four,60,40,33
12/6/2023,quarter four,60,40,73
12/7/2023,quarter four,60,40,85
12/8/2023,quarter four,60,40,83
12/9/2023,quarter four,60,40,14
12/10/2023,quarter four,60,40,32
12/11/2023,quarter four,60,40,13
12/12/2023,quarter four,60,40,58
12/13/2023,quarter four,60,40,21
12/14/2023,quarter four,60,40,92
12/15/2023,quarter four,60,40,28
12/16/2023,quarter four,60,40,12
12/17/2023,quarter four,60,40,3
12/18/2023,quarter four,60,40,30
12/19/2023,quarter four,60,40,39
12/20/2023,quarter four,60,40,64
12/21/2023,quarter four,60,40,84
12/22/2023,quarter four,60,40,19
12/23/2023,quarter four,60,40,11
12/24/2023,quarter four,60,40,41
12/25/2023,quarter four,60,40,39
12/26/2023,quarter four,60,40,22
12/27/2023,quarter four,60,40,32
12/28/2023,quarter four,60,40,99
12/29/2023,quarter four,60,40,56
12/30/2023,quarter four,60,40,56
12/31/2023,quarter four,60,40,76
`, yi = `[
  {
    "Country": "Atlanta",
    "Data": 10,
    "Link": "",
    "Sample Categories": "Category 1",
    "Regions": "North America"
  },
  {
    "Country": "Aruba",
    "Data": 0,
    "Link": "",
    "Sample Categories": "Category 1",
    "Regions": "North America"
  },
  {
    "Country": "Afghanistan",
    "Data": 59,
    "Link": "",
    "Sample Categories": "Category 2"
  },
  {
    "Country": "Angola",
    "Data": 65,
    "Link": "",
    "Sample Categories": "Category 3"
  },
  {
    "Country": "Anguilla",
    "Data": 15,
    "Link": "",
    "Sample Categories": "Category 4"
  },
  {
    "Country": "Albania",
    "Data": 73,
    "Link": "",
    "Sample Categories": "Category 5"
  },
  {
    "Country": "Åland",
    "Data": 99,
    "Link": "",
    "Sample Categories": "Category 6"
  },
  {
    "Country": "Andorra",
    "Data": 75,
    "Link": "",
    "Sample Categories": "Category 7"
  },
  {
    "Country": "United Arab Emirates",
    "Data": 62,
    "Link": "",
    "Sample Categories": "Category 8"
  },
  {
    "Country": "Argentina",
    "Data": 65,
    "Link": "",
    "Sample Categories": "Category 9"
  },
  {
    "Country": "Armenia",
    "Data": 23,
    "Link": "",
    "Sample Categories": "Category 1"
  },
  {
    "Country": "American Samoa",
    "Data": 48,
    "Link": "",
    "Sample Categories": "Category 2"
  },
  {
    "Country": "Ashmore and Cartier Is.",
    "Data": 22,
    "Link": "",
    "Sample Categories": "Category 3"
  },
  {
    "Country": "Fr. S. Antarctic Lands",
    "Data": 65,
    "Link": "",
    "Sample Categories": "Category 4"
  },
  {
    "Country": "Antigua and Barb.",
    "Data": 91,
    "Link": "",
    "Sample Categories": "Category 5"
  },
  {
    "Country": "Australia",
    "Data": 57,
    "Link": "",
    "Sample Categories": "Category 6"
  },
  {
    "Country": "Austria",
    "Data": 64,
    "Link": "",
    "Sample Categories": "Category 7"
  },
  {
    "Country": "Azerbaijan",
    "Data": 60,
    "Link": "",
    "Sample Categories": "Category 8"
  },
  {
    "Country": "Burundi",
    "Data": 95,
    "Link": "",
    "Sample Categories": "Category 9"
  },
  {
    "Country": "Belgium",
    "Data": 88,
    "Link": "",
    "Sample Categories": "Category 1"
  },
  {
    "Country": "Benin",
    "Data": 1,
    "Link": "",
    "Sample Categories": "Category 2"
  },
  {
    "Country": "Burkina Faso",
    "Data": 29,
    "Link": "",
    "Sample Categories": "Category 3"
  },
  {
    "Country": "Bangladesh",
    "Data": 46,
    "Link": "https://cdc.gov/",
    "Sample Categories": "Category 4"
  },
  {
    "Country": "Bulgaria",
    "Data": 85,
    "Link": "",
    "Sample Categories": "Category 5"
  },
  {
    "Country": "Bahrain",
    "Data": 63,
    "Link": "",
    "Sample Categories": "Category 6"
  },
  {
    "Country": "Bahamas",
    "Data": 38,
    "Link": "",
    "Sample Categories": "Category 7"
  },
  {
    "Country": "Bosnia and Herz.",
    "Data": 69,
    "Link": "",
    "Sample Categories": "Category 8"
  },
  {
    "Country": "St-Barthélemy",
    "Data": 37,
    "Link": "",
    "Sample Categories": "Category 9"
  },
  {
    "Country": "Belarus",
    "Data": 35,
    "Link": "",
    "Sample Categories": "Category 1"
  },
  {
    "Country": "Belize",
    "Data": 52,
    "Link": "",
    "Sample Categories": "Category 2"
  },
  {
    "Country": "Bermuda",
    "Data": 29,
    "Link": "",
    "Sample Categories": "Category 3"
  },
  {
    "Country": "Bolivia",
    "Data": 20,
    "Link": "",
    "Sample Categories": "Category 4"
  },
  {
    "Country": "Brazil",
    "Data": 33,
    "Link": "",
    "Sample Categories": "Category 5"
  },
  {
    "Country": "Barbados",
    "Data": 12,
    "Link": "",
    "Sample Categories": "Category 6"
  },
  {
    "Country": "Brunei",
    "Data": 73,
    "Link": "",
    "Sample Categories": "Category 7"
  },
  {
    "Country": "Bhutan",
    "Data": 2,
    "Link": "",
    "Sample Categories": "Category 8"
  },
  {
    "Country": "Botswana",
    "Data": 11,
    "Link": "",
    "Sample Categories": "Category 9"
  },
  {
    "Country": "Central African Rep.",
    "Data": 55,
    "Link": "",
    "Sample Categories": "Category 1"
  },
  {
    "Country": "Canada",
    "Data": 14,
    "Link": "",
    "Sample Categories": "Category 2"
  },
  {
    "Country": "Switzerland",
    "Data": 89,
    "Link": "",
    "Sample Categories": "Category 3"
  },
  {
    "Country": "Chile",
    "Data": 21,
    "Link": "",
    "Sample Categories": "Category 4"
  },
  {
    "Country": "China",
    "Data": 70,
    "Link": "",
    "Sample Categories": "Category 5"
  },
  {
    "Country": "Côte d'Ivoire",
    "Data": 84,
    "Link": "https://cdc.gov/",
    "Sample Categories": "Category 6"
  },
  {
    "Country": "Cameroon",
    "Data": 65,
    "Link": "",
    "Sample Categories": "Category 7"
  },
  {
    "Country": "Dem. Rep. Congo",
    "Data": 97,
    "Link": "https://cdc.gov/",
    "Sample Categories": "Category 8"
  },
  {
    "Country": "Congo",
    "Data": 45,
    "Link": "",
    "Sample Categories": "Category 9"
  },
  {
    "Country": "Cook Is.",
    "Data": 5,
    "Link": "",
    "Sample Categories": "Category 1"
  },
  {
    "Country": "Colombia",
    "Data": 92,
    "Link": "",
    "Sample Categories": "Category 2"
  },
  {
    "Country": "Comoros",
    "Data": 65,
    "Link": "",
    "Sample Categories": "Category 3"
  },
  {
    "Country": "Cabo Verde",
    "Data": 63,
    "Link": "",
    "Sample Categories": "Category 4"
  },
  {
    "Country": "Costa Rica",
    "Data": 21,
    "Link": "",
    "Sample Categories": "Category 5"
  },
  {
    "Country": "Cuba",
    "Data": 0,
    "Link": "",
    "Sample Categories": "Category 6"
  },
  {
    "Country": "Curaçao",
    "Data": 64,
    "Link": "",
    "Sample Categories": "Category 7"
  },
  {
    "Country": "Cayman Is.",
    "Data": 56,
    "Link": "",
    "Sample Categories": "Category 8"
  },
  {
    "Country": "N. Cyprus",
    "Data": 78,
    "Link": "",
    "Sample Categories": "Category 9"
  },
  {
    "Country": "Cyprus",
    "Data": 74,
    "Link": "",
    "Sample Categories": "Category 1"
  },
  {
    "Country": "Czechia",
    "Data": 26,
    "Link": "",
    "Sample Categories": "Category 2"
  },
  {
    "Country": "Germany",
    "Data": 31,
    "Link": "",
    "Sample Categories": "Category 3"
  },
  {
    "Country": "Djibouti",
    "Data": 22,
    "Link": "",
    "Sample Categories": "Category 4"
  },
  {
    "Country": "Dominica",
    "Data": 2,
    "Link": "",
    "Sample Categories": "Category 5"
  },
  {
    "Country": "Denmark",
    "Data": 51,
    "Link": "",
    "Sample Categories": "Category 6"
  },
  {
    "Country": "Dominican Rep.",
    "Data": 84,
    "Link": "",
    "Sample Categories": "Category 7"
  },
  {
    "Country": "Algeria",
    "Data": 58,
    "Link": "https://cdc.gov/",
    "Sample Categories": "Category 8"
  },
  {
    "Country": "Ecuador",
    "Data": 52,
    "Link": "",
    "Sample Categories": "Category 9"
  },
  {
    "Country": "Egypt",
    "Data": 29,
    "Link": "",
    "Sample Categories": "Category 1"
  },
  {
    "Country": "Eritrea",
    "Data": 70,
    "Link": "",
    "Sample Categories": "Category 2"
  },
  {
    "Country": "Spain",
    "Data": 9,
    "Link": "",
    "Sample Categories": "Category 3"
  },
  {
    "Country": "Estonia",
    "Data": 13,
    "Link": "",
    "Sample Categories": "Category 4"
  },
  {
    "Country": "Ethiopia",
    "Data": 17,
    "Link": "",
    "Sample Categories": "Category 5"
  },
  {
    "Country": "Finland",
    "Data": 9,
    "Link": "",
    "Sample Categories": "Category 6"
  },
  {
    "Country": "Fiji",
    "Data": 7,
    "Link": "",
    "Sample Categories": "Category 7"
  },
  {
    "Country": "Falkland Is.",
    "Data": 18,
    "Link": "",
    "Sample Categories": "Category 8"
  },
  {
    "Country": "France",
    "Data": 73,
    "Link": "",
    "Sample Categories": "Category 9"
  },
  {
    "Country": "Faeroe Is.",
    "Data": 60,
    "Link": "",
    "Sample Categories": "Category 1"
  },
  {
    "Country": "Micronesia",
    "Data": 73,
    "Link": "",
    "Sample Categories": "Category 2"
  },
  {
    "Country": "Gabon",
    "Data": 72,
    "Link": "",
    "Sample Categories": "Category 3"
  },
  {
    "Country": "United Kingdom",
    "Data": 5,
    "Link": "",
    "Sample Categories": "Category 4"
  },
  {
    "Country": "Georgia",
    "Data": 69,
    "Link": "",
    "Sample Categories": "Category 5"
  },
  {
    "Country": "Guernsey",
    "Data": 2,
    "Link": "",
    "Sample Categories": "Category 6"
  },
  {
    "Country": "Ghana",
    "Data": 71,
    "Link": "",
    "Sample Categories": "Category 7"
  },
  {
    "Country": "Guinea",
    "Data": 32,
    "Link": "",
    "Sample Categories": "Category 8"
  },
  {
    "Country": "Gambia",
    "Data": 39,
    "Link": "",
    "Sample Categories": "Category 9"
  },
  {
    "Country": "Guinea-Bissau",
    "Data": 48,
    "Link": "",
    "Sample Categories": "Category 1"
  },
  {
    "Country": "Eq. Guinea",
    "Data": 74,
    "Link": "",
    "Sample Categories": "Category 2"
  },
  {
    "Country": "Greece",
    "Data": 17,
    "Link": "https://cdc.gov/",
    "Sample Categories": "Category 3"
  },
  {
    "Country": "Grenada",
    "Data": 37,
    "Link": "",
    "Sample Categories": "Category 4"
  },
  {
    "Country": "Greenland",
    "Data": 15,
    "Link": "",
    "Sample Categories": "Category 5"
  },
  {
    "Country": "Guatemala",
    "Data": 42,
    "Link": "",
    "Sample Categories": "Category 6"
  },
  {
    "Country": "Guam",
    "Data": 17,
    "Link": "",
    "Sample Categories": "Category 7"
  },
  {
    "Country": "Guyana",
    "Data": 11,
    "Link": "",
    "Sample Categories": "Category 8"
  },
  {
    "Country": "Hong Kong",
    "Data": 49,
    "Link": "",
    "Sample Categories": "Category 9"
  },
  {
    "Country": "Heard I. and McDonald Is.",
    "Data": 32,
    "Link": "",
    "Sample Categories": "Category 1"
  },
  {
    "Country": "Honduras",
    "Data": 27,
    "Link": "",
    "Sample Categories": "Category 2"
  },
  {
    "Country": "Croatia",
    "Data": 41,
    "Link": "",
    "Sample Categories": "Category 3"
  },
  {
    "Country": "Haiti",
    "Data": 33,
    "Link": "",
    "Sample Categories": "Category 4"
  },
  {
    "Country": "Hungary",
    "Data": 41,
    "Link": "",
    "Sample Categories": "Category 5"
  },
  {
    "Country": "Indonesia",
    "Data": 4,
    "Link": "",
    "Sample Categories": "Category 6"
  },
  {
    "Country": "Isle of Man",
    "Data": 63,
    "Link": "",
    "Sample Categories": "Category 7"
  },
  {
    "Country": "India",
    "Data": 18,
    "Link": "",
    "Sample Categories": "Category 8"
  },
  {
    "Country": "Indian Ocean Ter.",
    "Data": 32,
    "Link": "",
    "Sample Categories": "Category 9"
  },
  {
    "Country": "Br. Indian Ocean Ter.",
    "Data": 66,
    "Link": "",
    "Sample Categories": "Category 1"
  },
  {
    "Country": "Ireland",
    "Data": 36,
    "Link": "",
    "Sample Categories": "Category 2"
  },
  {
    "Country": "Iran",
    "Data": 36,
    "Link": "",
    "Sample Categories": "Category 3"
  },
  {
    "Country": "Iraq",
    "Data": 0,
    "Link": "",
    "Sample Categories": "Category 4"
  },
  {
    "Country": "Iceland",
    "Data": 85,
    "Link": "",
    "Sample Categories": "Category 5"
  },
  {
    "Country": "Israel",
    "Data": 75,
    "Link": "",
    "Sample Categories": "Category 6"
  },
  {
    "Country": "Italy",
    "Data": 0,
    "Link": "",
    "Sample Categories": "Category 7"
  },
  {
    "Country": "Jamaica",
    "Data": 85,
    "Link": "",
    "Sample Categories": "Category 8"
  },
  {
    "Country": "Jersey",
    "Data": 99,
    "Link": "",
    "Sample Categories": "Category 9"
  },
  {
    "Country": "Jordan",
    "Data": 51,
    "Link": "",
    "Sample Categories": "Category 1"
  },
  {
    "Country": "Japan",
    "Data": 61,
    "Link": "https://cdc.gov/",
    "Sample Categories": "Category 2"
  },
  {
    "Country": "Siachen Glacier",
    "Data": 5,
    "Link": "",
    "Sample Categories": "Category 3"
  },
  {
    "Country": "Kazakhstan",
    "Data": 0,
    "Link": "",
    "Sample Categories": "Category 4"
  },
  {
    "Country": "Kenya",
    "Data": 73,
    "Link": "",
    "Sample Categories": "Category 5"
  },
  {
    "Country": "Kyrgyzstan",
    "Data": 15,
    "Link": "",
    "Sample Categories": "Category 6"
  },
  {
    "Country": "Cambodia",
    "Data": 43,
    "Link": "https://cdc.gov/",
    "Sample Categories": "Category 7"
  },
  {
    "Country": "Kiribati",
    "Data": 16,
    "Link": "",
    "Sample Categories": "Category 8"
  },
  {
    "Country": "St. Kitts and Nevis",
    "Data": 85,
    "Link": "",
    "Sample Categories": "Category 9"
  },
  {
    "Country": "South Korea",
    "Data": 60,
    "Link": "",
    "Sample Categories": "Category 1"
  },
  {
    "Country": "Kosovo",
    "Data": 97,
    "Link": "https://cdc.gov/",
    "Sample Categories": "Category 2"
  },
  {
    "Country": "Kuwait",
    "Data": 31,
    "Link": "",
    "Sample Categories": "Category 3"
  },
  {
    "Country": "Laos",
    "Data": 8,
    "Link": "",
    "Sample Categories": "Category 4"
  },
  {
    "Country": "Lebanon",
    "Data": 86,
    "Link": "",
    "Sample Categories": "Category 5"
  },
  {
    "Country": "Liberia",
    "Data": 58,
    "Link": "",
    "Sample Categories": "Category 6"
  },
  {
    "Country": "Libya",
    "Data": 87,
    "Link": "",
    "Sample Categories": "Category 7"
  },
  {
    "Country": "Saint Lucia",
    "Data": 67,
    "Link": "",
    "Sample Categories": "Category 8"
  },
  {
    "Country": "Liechtenstein",
    "Data": 60,
    "Link": "https://cdc.gov/",
    "Sample Categories": "Category 9"
  },
  {
    "Country": "Sri Lanka",
    "Data": 55,
    "Link": "",
    "Sample Categories": "Category 1"
  },
  {
    "Country": "Lesotho",
    "Data": 56,
    "Link": "",
    "Sample Categories": "Category 2"
  },
  {
    "Country": "Lithuania",
    "Data": 31,
    "Link": "",
    "Sample Categories": "Category 3"
  },
  {
    "Country": "Luxembourg",
    "Data": 63,
    "Link": "",
    "Sample Categories": "Category 4"
  },
  {
    "Country": "Latvia",
    "Data": 44,
    "Link": "",
    "Sample Categories": "Category 5"
  },
  {
    "Country": "Macao",
    "Data": 69,
    "Link": "",
    "Sample Categories": "Category 6"
  },
  {
    "Country": "St-Martin",
    "Data": 81,
    "Link": "",
    "Sample Categories": "Category 7"
  },
  {
    "Country": "Morocco",
    "Data": 69,
    "Link": "",
    "Sample Categories": "Category 8"
  },
  {
    "Country": "Monaco",
    "Data": 8,
    "Link": "https://cdc.gov/",
    "Sample Categories": "Category 9"
  },
  {
    "Country": "Moldova",
    "Data": 89,
    "Link": "",
    "Sample Categories": "Category 1"
  },
  {
    "Country": "Madagascar",
    "Data": 1,
    "Link": "",
    "Sample Categories": "Category 2"
  },
  {
    "Country": "Maldives",
    "Data": 50,
    "Link": "",
    "Sample Categories": "Category 3"
  },
  {
    "Country": "Mexico",
    "Data": 1,
    "Link": "",
    "Sample Categories": "Category 4"
  },
  {
    "Country": "Marshall Is.",
    "Data": 26,
    "Link": "",
    "Sample Categories": "Category 5"
  },
  {
    "Country": "Macedonia",
    "Data": 61,
    "Link": "",
    "Sample Categories": "Category 6"
  },
  {
    "Country": "Mali",
    "Data": 45,
    "Link": "",
    "Sample Categories": "Category 7"
  },
  {
    "Country": "Malta",
    "Data": 89,
    "Link": "",
    "Sample Categories": "Category 8"
  },
  {
    "Country": "Myanmar",
    "Data": 82,
    "Link": "",
    "Sample Categories": "Category 9"
  },
  {
    "Country": "Montenegro",
    "Data": 72,
    "Link": "",
    "Sample Categories": "Category 1"
  },
  {
    "Country": "Mongolia",
    "Data": 51,
    "Link": "",
    "Sample Categories": "Category 2"
  },
  {
    "Country": "N. Mariana Is.",
    "Data": 22,
    "Link": "",
    "Sample Categories": "Category 3"
  },
  {
    "Country": "Mozambique",
    "Data": 20,
    "Link": "",
    "Sample Categories": "Category 4"
  },
  {
    "Country": "Mauritania",
    "Data": 40,
    "Link": "",
    "Sample Categories": "Category 5"
  },
  {
    "Country": "Montserrat",
    "Data": 3,
    "Link": "",
    "Sample Categories": "Category 6"
  },
  {
    "Country": "Mauritius",
    "Data": 2,
    "Link": "",
    "Sample Categories": "Category 7"
  },
  {
    "Country": "Malawi",
    "Data": 26,
    "Link": "",
    "Sample Categories": "Category 8"
  },
  {
    "Country": "Malaysia",
    "Data": 89,
    "Link": "",
    "Sample Categories": "Category 9"
  },
  {
    "Country": "Namibia",
    "Data": 70,
    "Link": "",
    "Sample Categories": "Category 1"
  },
  {
    "Country": "New Caledonia",
    "Data": 93,
    "Link": "",
    "Sample Categories": "Category 2"
  },
  {
    "Country": "Niger",
    "Data": 21,
    "Link": "https://cdc.gov/",
    "Sample Categories": "Category 3"
  },
  {
    "Country": "Norfolk Island",
    "Data": 5,
    "Link": "",
    "Sample Categories": "Category 4"
  },
  {
    "Country": "Nigeria",
    "Data": 43,
    "Link": "",
    "Sample Categories": "Category 5"
  },
  {
    "Country": "Nicaragua",
    "Data": 23,
    "Link": "",
    "Sample Categories": "Category 6"
  },
  {
    "Country": "Niue",
    "Data": 17,
    "Link": "",
    "Sample Categories": "Category 7"
  },
  {
    "Country": "Netherlands",
    "Data": 11,
    "Link": "",
    "Sample Categories": "Category 8"
  },
  {
    "Country": "Norway",
    "Data": 47,
    "Link": "",
    "Sample Categories": "Category 9"
  },
  {
    "Country": "Nepal",
    "Data": 4,
    "Link": "",
    "Sample Categories": "Category 1"
  },
  {
    "Country": "Nauru",
    "Data": 21,
    "Link": "",
    "Sample Categories": "Category 2"
  },
  {
    "Country": "New Zealand",
    "Data": 4,
    "Link": "",
    "Sample Categories": "Category 3"
  },
  {
    "Country": "Oman",
    "Data": 65,
    "Link": "",
    "Sample Categories": "Category 4"
  },
  {
    "Country": "Pakistan",
    "Data": 85,
    "Link": "",
    "Sample Categories": "Category 5"
  },
  {
    "Country": "Panama",
    "Data": 66,
    "Link": "https://cdc.gov/",
    "Sample Categories": "Category 6"
  },
  {
    "Country": "Pitcairn Is.",
    "Data": 89,
    "Link": "",
    "Sample Categories": "Category 7"
  },
  {
    "Country": "Peru",
    "Data": 16,
    "Link": "",
    "Sample Categories": "Category 8"
  },
  {
    "Country": "Philippines",
    "Data": 49,
    "Link": "",
    "Sample Categories": "Category 9"
  },
  {
    "Country": "Palau",
    "Data": 37,
    "Link": "",
    "Sample Categories": "Category 1"
  },
  {
    "Country": "Papua New Guinea",
    "Data": 1,
    "Link": "",
    "Sample Categories": "Category 2"
  },
  {
    "Country": "Poland",
    "Data": 14,
    "Link": "",
    "Sample Categories": "Category 3"
  },
  {
    "Country": "Puerto Rico",
    "Data": 62,
    "Link": "",
    "Sample Categories": "Category 4"
  },
  {
    "Country": "North Korea",
    "Data": 92,
    "Link": "",
    "Sample Categories": "Category 5"
  },
  {
    "Country": "Portugal",
    "Data": 77,
    "Link": "",
    "Sample Categories": "Category 6"
  },
  {
    "Country": "Paraguay",
    "Data": 19,
    "Link": "",
    "Sample Categories": "Category 7"
  },
  {
    "Country": "Palestine",
    "Data": 28,
    "Link": "",
    "Sample Categories": "Category 8"
  },
  {
    "Country": "Fr. Polynesia",
    "Data": 69,
    "Link": "",
    "Sample Categories": "Category 9"
  },
  {
    "Country": "Qatar",
    "Data": 40,
    "Link": "",
    "Sample Categories": "Category 1"
  },
  {
    "Country": "Romania",
    "Data": 51,
    "Link": "",
    "Sample Categories": "Category 2"
  },
  {
    "Country": "Russia",
    "Data": 13,
    "Link": "",
    "Sample Categories": "Category 3"
  },
  {
    "Country": "Rwanda",
    "Data": 91,
    "Link": "",
    "Sample Categories": "Category 4"
  },
  {
    "Country": "W. Sahara",
    "Data": 64,
    "Link": "",
    "Sample Categories": "Category 5"
  },
  {
    "Country": "Saudi Arabia",
    "Data": 90,
    "Link": "",
    "Sample Categories": "Category 6"
  },
  {
    "Country": "Sudan",
    "Data": 58,
    "Link": "",
    "Sample Categories": "Category 7"
  },
  {
    "Country": "S. Sudan",
    "Data": 93,
    "Link": "",
    "Sample Categories": "Category 8"
  },
  {
    "Country": "Senegal",
    "Data": 15,
    "Link": "",
    "Sample Categories": "Category 9"
  },
  {
    "Country": "Singapore",
    "Data": 80,
    "Link": "",
    "Sample Categories": "Category 1"
  },
  {
    "Country": "S. Geo. and the Is.",
    "Data": 90,
    "Link": "",
    "Sample Categories": "Category 2"
  },
  {
    "Country": "Saint Helena",
    "Data": 49,
    "Link": "",
    "Sample Categories": "Category 3"
  },
  {
    "Country": "Solomon Is.",
    "Data": 77,
    "Link": "",
    "Sample Categories": "Category 4"
  },
  {
    "Country": "Sierra Leone",
    "Data": 33,
    "Link": "",
    "Sample Categories": "Category 5"
  },
  {
    "Country": "El Salvador",
    "Data": 18,
    "Link": "",
    "Sample Categories": "Category 6"
  },
  {
    "Country": "San Marino",
    "Data": 42,
    "Link": "",
    "Sample Categories": "Category 7"
  },
  {
    "Country": "Somaliland",
    "Data": 52,
    "Link": "",
    "Sample Categories": "Category 8"
  },
  {
    "Country": "Somalia",
    "Data": 68,
    "Link": "",
    "Sample Categories": "Category 9"
  },
  {
    "Country": "St. Pierre and Miquelon",
    "Data": 12,
    "Link": "",
    "Sample Categories": ""
  },
  {
    "Country": "Serbia",
    "Data": 12,
    "Link": "",
    "Sample Categories": ""
  },
  {
    "Country": "São Tomé and Principe",
    "Data": 50,
    "Link": "",
    "Sample Categories": ""
  },
  {
    "Country": "Suriname",
    "Data": 54,
    "Link": "",
    "Sample Categories": ""
  },
  {
    "Country": "Slovakia",
    "Data": 1,
    "Link": "",
    "Sample Categories": ""
  },
  {
    "Country": "Slovenia",
    "Data": 77,
    "Link": "",
    "Sample Categories": ""
  },
  {
    "Country": "Sweden",
    "Data": 77,
    "Link": "",
    "Sample Categories": ""
  },
  {
    "Country": "Swaziland",
    "Data": 48,
    "Link": "",
    "Sample Categories": ""
  },
  {
    "Country": "Sint Maarten",
    "Data": 75,
    "Link": "",
    "Sample Categories": ""
  },
  {
    "Country": "Seychelles",
    "Data": 73,
    "Link": "",
    "Sample Categories": ""
  },
  {
    "Country": "Syria",
    "Data": 69,
    "Link": "",
    "Sample Categories": ""
  },
  {
    "Country": "Turks and Caicos Is.",
    "Data": 73,
    "Link": "",
    "Sample Categories": ""
  },
  {
    "Country": "Chad",
    "Data": 16,
    "Link": "",
    "Sample Categories": ""
  },
  {
    "Country": "Togo",
    "Data": 83,
    "Link": "https://cdc.gov/",
    "Sample Categories": ""
  },
  {
    "Country": "Thailand",
    "Data": 84,
    "Link": "",
    "Sample Categories": ""
  },
  {
    "Country": "Tajikistan",
    "Data": 55,
    "Link": "",
    "Sample Categories": ""
  },
  {
    "Country": "Turkmenistan",
    "Data": 59,
    "Link": "",
    "Sample Categories": ""
  },
  {
    "Country": "Timor-Leste",
    "Data": 45,
    "Link": "",
    "Sample Categories": ""
  },
  {
    "Country": "Tonga",
    "Data": 43,
    "Link": "",
    "Sample Categories": ""
  },
  {
    "Country": "Trinidad and Tobago",
    "Data": 22,
    "Link": "",
    "Sample Categories": ""
  },
  {
    "Country": "Tunisia",
    "Data": 93,
    "Link": "",
    "Sample Categories": ""
  },
  {
    "Country": "Turkey",
    "Data": 54,
    "Link": "",
    "Sample Categories": ""
  },
  {
    "Country": "Taiwan",
    "Data": 26,
    "Link": "",
    "Sample Categories": ""
  },
  {
    "Country": "Tanzania",
    "Data": 54,
    "Link": "",
    "Sample Categories": ""
  },
  {
    "Country": "Uganda",
    "Data": 55,
    "Link": "",
    "Sample Categories": ""
  },
  {
    "Country": "Ukraine",
    "Data": 57,
    "Link": "",
    "Sample Categories": ""
  },
  {
    "Country": "Uruguay",
    "Data": 15,
    "Link": "",
    "Sample Categories": ""
  },
  {
    "Country": "United States of America",
    "Data": 45,
    "Link": "https://cdc.gov/",
    "Sample Categories": ""
  },
  {
    "Country": "Uzbekistan",
    "Data": 96,
    "Link": "",
    "Sample Categories": ""
  },
  {
    "Country": "Vatican",
    "Data": 87,
    "Link": "",
    "Sample Categories": ""
  },
  {
    "Country": "St. Vin. and Gren.",
    "Data": 12,
    "Link": "",
    "Sample Categories": ""
  },
  {
    "Country": "Venezuela",
    "Data": 61,
    "Link": "https://cdc.gov/",
    "Sample Categories": ""
  },
  {
    "Country": "British Virgin Is.",
    "Data": 91,
    "Link": "",
    "Sample Categories": ""
  },
  {
    "Country": "U.S. Virgin Is.",
    "Data": 27,
    "Link": "",
    "Sample Categories": ""
  },
  {
    "Country": "Vietnam",
    "Data": 82,
    "Link": "",
    "Sample Categories": ""
  },
  {
    "Country": "Vanuatu",
    "Data": 56,
    "Link": "",
    "Sample Categories": ""
  },
  {
    "Country": "Wallis and Futuna Is.",
    "Data": 76,
    "Link": "",
    "Sample Categories": ""
  },
  {
    "Country": "Samoa",
    "Data": 4,
    "Link": "",
    "Sample Categories": ""
  },
  {
    "Country": "Yemen",
    "Data": 39,
    "Link": "https://cdc.gov/",
    "Sample Categories": ""
  },
  {
    "Country": "South Africa",
    "Data": 24,
    "Link": "",
    "Sample Categories": ""
  },
  {
    "Country": "Zambia",
    "Data": 38,
    "Link": "",
    "Sample Categories": ""
  },
  {
    "Country": "Zimbabwe",
    "Data": 35,
    "Link": "https://cdc.gov/",
    "Sample Categories": ""
  }
]`, Ci = `[
  {
    "Current Week Positivity": "20",
    "State": "REGION 1",
    "Change": "0.2"
  },
  {
    "Current Week Positivity": "27",
    "State": "region 2",
    "Change": "-0.5"
  },
  {
    "Current Week Positivity": "26",
    "State": "region 3",
    "Change": "-.08"
  },
  {
    "Current Week Positivity": "30",
    "State": "region 4",
    "Change": "0.8"
  },
  {
    "Current Week Positivity": "14",
    "State": "region 5",
    "Change": "0.5"
  },
  {
    "Current Week Positivity": "25",
    "State": "region 6",
    "Change": "0.05"
  },
  {
    "Current Week Positivity": "0",
    "State": "region 7",
    "Change": "0"
  },
  {
    "Current Week Positivity": "14",
    "State": "region 8",
    "Change": "-1.2"
  },
  {
    "Current Week Positivity": "28",
    "State": "region 9",
    "Change": "1.5"
  },
  {
    "Current Week Positivity": "12",
    "State": "region 10",
    "Change": "0.5"
  }
]`, di = `[
  {
    "links": [
      {
        "source": "Suicide EMS Responses",
        "target": "Dead at Scene",
        "value": 4088
      },
      {
        "source": "Suicide EMS Responses",
        "target": "Treated",
        "value": 438974
      },
      {
        "source": "Suicide EMS Responses",
        "target": "Assisted",
        "value": 5701
      },
      {
        "source": "Suicide EMS Responses",
        "target": "No patient contact",
        "value": 459
      },
      {
        "source": "Suicide EMS Responses",
        "target": "Refused evaluation care",
        "value": 12641
      },
      {
        "source": "Suicide EMS Responses",
        "target": "Evaluated no treatment required",
        "value": 5169
      },
      {
        "source": "Suicide EMS Responses",
        "target": "Unknown",
        "value": 104
      },
      {
        "source": "Dead at Scene",
        "target": "Dead",
        "value": 4088
      },
      {
        "source": "Treated",
        "target": "Dead",
        "value": 648
      },
      {
        "source": "Treated",
        "target": "Transported to hospital",
        "value": 423520
      },
      {
        "source": "Treated",
        "target": "Transported to facility",
        "value": 4504
      },
      {
        "source": "Treated",
        "target": "Released",
        "value": 10302
      },
      {
        "source": "Refused evaluation care",
        "target": "Released",
        "value": 11781
      },
      {
        "source": "Refused evaluation care",
        "target": "Transported to hospital",
        "value": 860
      },
      {
        "source": "Evaluated no treatment required",
        "target": "Released",
        "value": 5169
      }
    ],
    "storyNodeText": [
      {
        "StoryNode": "Suicide EMS Responses",
        "segmentTextBefore": "In 2022, there were",
        "segmentTextAfter": "Suicide EMS Responses"
      },
      {
        "StoryNode": "Treated",
        "segmentTextBefore": "of which,",
        "segmentTextAfter": "were treated"
      },
      {
        "StoryNode": "Transported to hospital",
        "segmentTextBefore": "and",
        "segmentTextAfter": "were transported to the hospital"
      }
    ],
    "tooltips": [
      {
        "node": "Suicide EMS Responses",
        "value": "467,136 (100%)",
        "summary": "Total number of suicide EMS responses.",
        "column1Label": "Gender",
        "column2Label": "Race and Ethnicity",
        "column1": [
          {
            "label": "Female",
            "value": "218,195",
            "additional_info": "46.71"
          },
          {
            "label": "Male",
            "value": "243,481",
            "additional_info": "52.12"
          },
          {
            "label": "Unknown",
            "value": "5,460",
            "additional_info": "1.17"
          }
        ],
        "column2": [
          {
            "label": "Non-Hispanic White",
            "value": "245,998",
            "additional_info": "52.66"
          },
          {
            "label": "Non-Hispanic Black",
            "value": "93,244",
            "additional_info": "19.96"
          },
          {
            "label": "Hispanic",
            "value": "41,396",
            "additional_info": "8.86"
          },
          {
            "label": "Non-Hispanic American Indian or Alaska Native",
            "value": "4,470",
            "additional_info": "0.96"
          },
          {
            "label": "Non-Hispanic Asian",
            "value": "6,160",
            "additional_info": "1.32"
          },
          {
            "label": "Non-Hispanic Native Hawaiian or Other Pacific Islander",
            "value": "1,287",
            "additional_info": "0.28"
          },
          {
            "label": "Missing",
            "value": "74,581",
            "additional_info": "15.97"
          }
        ]
      },
      {
        "node": "Dead",
        "value": "4,736 (1.01%)",
        "summary": "Patiend Died",
        "column1Label": "Gender",
        "column2Label": "Race and Ethnicity",
        "column1": [
          {
            "label": "Female",
            "value": "1,244",
            "additional_info": "26.47"
          },
          {
            "label": "Male",
            "value": "3,440",
            "additional_info": "72.64"
          },
          {
            "label": "Unknown",
            "value": "52",
            "additional_info": "1.1"
          }
        ],
        "column2": [
          {
            "label": "Non-Hispanic White",
            "value": "3,235",
            "additional_info": "68.31"
          },
          {
            "label": "Non-Hispanic Black",
            "value": "307",
            "additional_info": "6.48"
          },
          {
            "label": "Hispanic",
            "value": "242",
            "additional_info": "5.11"
          },
          {
            "label": "Non-Hispanic American Indian or Alaska Native",
            "value": "26",
            "additional_info": "0.55"
          },
          {
            "label": "Non-Hispanic Asian",
            "value": "81",
            "additional_info": "1.71"
          },
          {
            "label": "Non-Hispanic Native Hawaiian or Other Pacific Islander",
            "value": "--",
            "additional_info": "--"
          },
          {
            "label": "Missing",
            "value": "834",
            "additional_info": "17.61"
          }
        ]
      },
      {
        "node": "Released",
        "value": "27,252 (5.83%)",
        "value_pct": "5.83",
        "summary": "Patient was released.",
        "column1Label": "Gender",
        "column2Label": "Race and Ethnicity",
        "column1": [
          {
            "label": "Female",
            "value": "13,835",
            "additional_info": "50.77"
          },
          {
            "label": "Male",
            "value": "12,900",
            "additional_info": "47.34"
          },
          {
            "label": "Unknown",
            "value": "517",
            "additional_info": "1.9"
          }
        ],
        "column2": [
          {
            "label": "Non-Hispanic White",
            "value": "15,088",
            "additional_info": "55.36"
          },
          {
            "label": "Non-Hispanic Black",
            "value": "4,749",
            "additional_info": "17.43"
          },
          {
            "label": "Hispanic",
            "value": "2,177",
            "additional_info": "7.99"
          },
          {
            "label": "Non-Hispanic American Indian or Alaska Native",
            "value": "287",
            "additional_info": "1.05"
          },
          {
            "label": "Non-Hispanic Asian",
            "value": "321",
            "additional_info": "1.18"
          },
          {
            "label": "Non-Hispanic Native Hawaiian or Other Pacific Islander",
            "value": "65",
            "additional_info": "0.24"
          },
          {
            "label": "Missing",
            "value": "4,565",
            "additional_info": "16.75"
          }
        ]
      },
      {
        "node": "Transported to facility",
        "value": "4,504 (0.96%)",
        "summary": "Patient was transported to a facility.",
        "column1Label": "Gender",
        "column2Label": "Race and Ethnicity",
        "column1": [
          {
            "label": "Female",
            "value": "1,938",
            "additional_info": "43.03"
          },
          {
            "label": "Male",
            "value": "2,522",
            "additional_info": "55.99"
          },
          {
            "label": "Unknown",
            "value": "44",
            "additional_info": "0.98"
          }
        ],
        "column2": [
          {
            "label": "Non-Hispanic White",
            "value": "2,093",
            "additional_info": "46.47"
          },
          {
            "label": "Non-Hispanic Black",
            "value": "1,113",
            "additional_info": "24.71"
          },
          {
            "label": "Hispanic",
            "value": "608",
            "additional_info": "13.5"
          },
          {
            "label": "Non-Hispanic American Indian or Alaska Native",
            "value": "73",
            "additional_info": "1.62"
          },
          {
            "label": "Non-Hispanic Asian",
            "value": "48",
            "additional_info": "1.07"
          },
          {
            "label": "Non-Hispanic Native Hawaiian or Other Pacific Islander",
            "value": "--",
            "additional_info": "--"
          },
          {
            "label": "Missing",
            "value": "564",
            "additional_info": "12.52"
          }
        ]
      },
      {
        "node": "Transported to hospital",
        "value": "424,380 (90.85%)",
        "summary": "Patient was transported to the hospital by the EMS Unit or another EMS unit.",
        "column1Label": "Gender",
        "column2Label": "Race and Ethnicity",
        "column1": [
          {
            "label": "Female",
            "value": "199,301",
            "additional_info": "46.96"
          },
          {
            "label": "Male",
            "value": "222,583",
            "additional_info": "52.45"
          },
          {
            "label": "Unknown",
            "value": "2,496",
            "additional_info": "0.59"
          }
        ],
        "column2": [
          {
            "label": "Non-Hispanic White",
            "value": "223,907",
            "additional_info": "52.76"
          },
          {
            "label": "Non-Hispanic Black",
            "value": "86,562",
            "additional_info": "20.4"
          },
          {
            "label": "Hispanic",
            "value": "38,084",
            "additional_info": "8.97"
          },
          {
            "label": "Non-Hispanic American Indian or Alaska Native",
            "value": "4,036",
            "additional_info": "0.95"
          },
          {
            "label": "Non-Hispanic Asian",
            "value": "5,650",
            "additional_info": "1.33"
          },
          {
            "label": "Non-Hispanic Native Hawaiian or Other Pacific Islander",
            "value": "1,193",
            "additional_info": "0.28"
          },
          {
            "label": "Missing",
            "value": "64,954",
            "additional_info": "15.31"
          }
        ]
      },
      {
        "node": "Assisted",
        "value": "5,701 (1.22%)",
        "value_pct": "1.22",
        "summary": "EMS unit only provided assistance (e.g., manpower, equipment) to another agency, member of the public, or another EMS unit.",
        "column1Label": "Gender",
        "column2Label": "Race and Ethnicity",
        "column1": [
          {
            "label": "Female",
            "value": "1,791",
            "additional_info": "31.42"
          },
          {
            "label": "Male",
            "value": "1,910",
            "additional_info": "33.5"
          },
          {
            "label": "Unknown",
            "value": "2,000",
            "additional_info": "35.08"
          }
        ],
        "column2": [
          {
            "label": "Non-Hispanic White",
            "value": "1,593",
            "additional_info": "27.94"
          },
          {
            "label": "Non-Hispanic Black",
            "value": "491",
            "additional_info": "8.61"
          },
          {
            "label": "Hispanic",
            "value": "270",
            "additional_info": "4.74"
          },
          {
            "label": "Non-Hispanic American Indian or Alaska Native",
            "value": "41",
            "additional_info": "0.72"
          },
          {
            "label": "Non-Hispanic Asian",
            "value": "57",
            "additional_info": "1"
          },
          {
            "label": "Non-Hispanic Native Hawaiian or Other Pacific Islander",
            "value": "--",
            "additional_info": "--"
          },
          {
            "label": "Missing",
            "value": "3,237",
            "additional_info": "56.78"
          }
        ]
      },
      {
        "node": "Dead at Scene",
        "value": "4,088 (0.88%)",
        "value_pct": "0.88",
        "summary": "Patient showed obvious signs of death or Do Not Resuscitate (DNR) order was presented, and no attempt was made to resuscitate the patient.",
        "column1Label": "Gender",
        "column2Label": "Race and Ethnicity",
        "column1": [
          {
            "label": "Female",
            "value": "1,023",
            "additional_info": "25.02"
          },
          {
            "label": "Male",
            "value": "3,014",
            "additional_info": "73.73"
          },
          {
            "label": "Unknown",
            "value": "51",
            "additional_info": "1.25"
          }
        ],
        "column2": [
          {
            "label": "Non-Hispanic White",
            "value": "2,802",
            "additional_info": "68.54"
          },
          {
            "label": "Non-Hispanic Black",
            "value": "273",
            "additional_info": "6.68"
          },
          {
            "label": "Hispanic",
            "value": "207",
            "additional_info": "5.06"
          },
          {
            "label": "Non-Hispanic American Indian or Alaska Native",
            "value": "--",
            "additional_info": "--"
          },
          {
            "label": "Non-Hispanic Asian",
            "value": "65",
            "additional_info": "1.59"
          },
          {
            "label": "Non-Hispanic Native Hawaiian or Other Pacific Islander",
            "value": "--",
            "additional_info": "--"
          },
          {
            "label": "Missing",
            "value": "712",
            "additional_info": "17.42"
          }
        ]
      },
      {
        "node": "Evaluated no treatment required",
        "value": "5,169 (1.11%)",
        "value_pct": "1.11",
        "summary": "Patient was evaluated and no further treatment/transportation to the hospital was required",
        "column1Label": "Gender",
        "column2Label": "Race and Ethnicity",
        "column1": [
          {
            "label": "Female",
            "value": "2,545",
            "additional_info": "49.24"
          },
          {
            "label": "Male",
            "value": "2,505",
            "additional_info": "48.46"
          },
          {
            "label": "Unknown",
            "value": "119",
            "additional_info": "2.3"
          }
        ],
        "column2": [
          {
            "label": "Non-Hispanic White",
            "value": "2,783",
            "additional_info": "53.84"
          },
          {
            "label": "Non-Hispanic Black",
            "value": "885",
            "additional_info": "17.12"
          },
          {
            "label": "Hispanic",
            "value": "351",
            "additional_info": "6.79"
          },
          {
            "label": "Non-Hispanic American Indian or Alaska Native",
            "value": "59",
            "additional_info": "1.14"
          },
          {
            "label": "Non-Hispanic Asian",
            "value": "87",
            "additional_info": "1.68"
          },
          {
            "label": "Non-Hispanic Native Hawaiian or Other Pacific Islander",
            "value": "--",
            "additional_info": "--"
          },
          {
            "label": "Missing",
            "value": "988",
            "additional_info": "19.11"
          }
        ]
      },
      {
        "node": "No patient contact",
        "value": "459 (0.1%)",
        "summary": "No patient contact was made (e.g., EMS unit was on standby in case of a medical/traumatic emergency, response was for the purpose of transporting objects, personnel, or equipment not involving a patient).",
        "column1Label": "Gender",
        "column2Label": "Race and Ethnicity",
        "column1": [
          {
            "label": "Female",
            "value": "50",
            "additional_info": "10.89"
          },
          {
            "label": "Male",
            "value": "70",
            "additional_info": "15.25"
          },
          {
            "label": "Unknown",
            "value": "339",
            "additional_info": "73.86"
          }
        ],
        "column2": [
          {
            "label": "Non-Hispanic White",
            "value": "41",
            "additional_info": "8.93"
          },
          {
            "label": "Non-Hispanic Black",
            "value": "--",
            "additional_info": "--"
          },
          {
            "label": "Hispanic",
            "value": "--",
            "additional_info": "--"
          },
          {
            "label": "Non-Hispanic American Indian or Alaska Native",
            "value": "--",
            "additional_info": "--"
          },
          {
            "label": "Non-Hispanic Asian",
            "value": "--",
            "additional_info": "--"
          },
          {
            "label": "Non-Hispanic Native Hawaiian or Other Pacific Islander",
            "value": "--",
            "additional_info": "--"
          },
          {
            "label": "Missing",
            "value": "388",
            "additional_info": "84.53"
          }
        ]
      },
      {
        "node": "Refused evaluation care",
        "value": "12,641 (2.71%)",
        "summary": "Patient refused any evaluation or care.",
        "column1Label": "Gender",
        "column2Label": "Race and Ethnicity",
        "column1": [
          {
            "label": "Female",
            "value": "6,314",
            "additional_info": "49.95"
          },
          {
            "label": "Male",
            "value": "6,009",
            "additional_info": "47.54"
          },
          {
            "label": "Unknown",
            "value": "318",
            "additional_info": "2.52"
          }
        ],
        "column2": [
          {
            "label": "Non-Hispanic White",
            "value": "7,112",
            "additional_info": "56.26"
          },
          {
            "label": "Non-Hispanic Black",
            "value": "2,366",
            "additional_info": "18.72"
          },
          {
            "label": "Hispanic",
            "value": "1,056",
            "additional_info": "8.35"
          },
          {
            "label": "Non-Hispanic American Indian or Alaska Native",
            "value": "130",
            "additional_info": "1.03"
          },
          {
            "label": "Non-Hispanic Asian",
            "value": "128",
            "additional_info": "1.01"
          },
          {
            "label": "Non-Hispanic Native Hawaiian or Other Pacific Islander",
            "value": "26",
            "additional_info": "0.21"
          },
          {
            "label": "Missing",
            "value": "1,823",
            "additional_info": "14.42"
          }
        ]
      },
      {
        "node": "Treated",
        "value": "438,974 (93.97%)",
        "value_pct": "93.97",
        "summary": "Patient was evaluated and treatment was provided.",
        "column1Label": "Gender",
        "column2Label": "Race and Ethnicity",
        "column1": [
          {
            "label": "Female",
            "value": "206,436",
            "additional_info": "47.03"
          },
          {
            "label": "Male",
            "value": "229,917",
            "additional_info": "52.38"
          },
          {
            "label": "Unknown",
            "value": "2,621",
            "additional_info": "0.6"
          }
        ],
        "column2": [
          {
            "label": "Non-Hispanic White",
            "value": "231,620",
            "additional_info": "52.76"
          },
          {
            "label": "Non-Hispanic Black",
            "value": "89,207",
            "additional_info": "20.32"
          },
          {
            "label": "Hispanic",
            "value": "39,497",
            "additional_info": "9"
          },
          {
            "label": "Non-Hispanic American Indian or Alaska Native",
            "value": "4,214",
            "additional_info": "0.96"
          },
          {
            "label": "Non-Hispanic Asian",
            "value": "5,820",
            "additional_info": "1.33"
          },
          {
            "label": "Non-Hispanic Native Hawaiian or Other Pacific Islander",
            "value": "1,222",
            "additional_info": "0.28"
          },
          {
            "label": "Missing",
            "value": "67,394",
            "additional_info": "15.35"
          }
        ]
      },
      {
        "node": "Unknown",
        "value": "104 (0.02%)",
        "summary": "Type of treatment provided is unknown.",
        "column1Label": "Gender",
        "column2Label": "Race and Ethnicity",
        "column1": [
          {
            "label": "Female",
            "value": "36",
            "additional_info": "34.62"
          },
          {
            "label": "Male",
            "value": "56",
            "additional_info": "53.85"
          },
          {
            "label": "Unknown",
            "value": "--",
            "additional_info": "--"
          }
        ],
        "column2": [
          {
            "label": "Non-Hispanic White",
            "value": "47",
            "additional_info": "45.19"
          },
          {
            "label": "Non-Hispanic Black",
            "value": "",
            "additional_info": ""
          },
          {
            "label": "Hispanic",
            "value": "",
            "additional_info": ""
          },
          {
            "label": "Non-Hispanic American Indian or Alaska Native",
            "value": "",
            "additional_info": ""
          },
          {
            "label": "Non-Hispanic Asian",
            "value": "",
            "additional_info": ""
          },
          {
            "label": "Non-Hispanic Native Hawaiian or Other Pacific Islander",
            "value": "",
            "additional_info": ""
          },
          {
            "label": "Missing",
            "value": "39",
            "additional_info": "37.5"
          }
        ]
      }
    ],
    "tableData": [
      {
        "Disposition": "Assist, Agency",
        "Type of Treatment": "Assisted",
        "Final Outcome": "N/A",
        "Number of Patients": "2,356"
      },
      {
        "Disposition": "Assist, Public",
        "Type of Treatment": "Assisted",
        "Final Outcome": "N/A",
        "Number of Patients": "859"
      },
      {
        "Disposition": "Assist, Unit",
        "Type of Treatment": "Assisted",
        "Final Outcome": "N/A",
        "Number of Patients": "2,486"
      },
      {
        "Disposition": "Patient Dead at Scene-No Resuscitation Attempted (With Transport)",
        "Type of Treatment": "Dead at scene",
        "Final Outcome": "Dead",
        "Number of Patients": "123"
      },
      {
        "Disposition": "Patient Dead at Scene-No Resuscitation Attempted (Without Transport)",
        "Type of Treatment": "Dead at scene",
        "Final Outcome": "Dead",
        "Number of Patients": "3,965"
      },
      {
        "Disposition": "Patient Dead at Scene-Resuscitation Attempted (With Transport)",
        "Type of Treatment": "Treated",
        "Final Outcome": "Dead",
        "Number of Patients": "**"
      },
      {
        "Disposition": "Patient Dead at Scene-Resuscitation Attempted (Without Transport)",
        "Type of Treatment": "Treated",
        "Final Outcome": "Dead",
        "Number of Patients": "631"
      },
      {
        "Disposition": "Patient Evaluated, No Treatment/Transport Required",
        "Type of Treatment": "Evaluated no treatment required",
        "Final Outcome": "Released",
        "Number of Patients": "5,169"
      },
      {
        "Disposition": "Patient Refused Evaluation/Care (With Transport)",
        "Type of Treatment": "Refused evaluation care",
        "Final Outcome": "Transported to hospital",
        "Number of Patients": "860"
      },
      {
        "Disposition": "Patient Refused Evaluation/Care (Without Transport)",
        "Type of Treatment": "Refused evaluation care",
        "Final Outcome": "Released",
        "Number of Patients": "11,781"
      },
      {
        "Disposition": "Patient Treated, Released (AMA)",
        "Type of Treatment": "Treated",
        "Final Outcome": "Released",
        "Number of Patients": "6,780"
      },
      {
        "Disposition": "Patient Treated, Released (per protocol)",
        "Type of Treatment": "Treated",
        "Final Outcome": "Released",
        "Number of Patients": "3,522"
      },
      {
        "Disposition": "Patient Treated, Transferred Care to Another EMS Unit",
        "Type of Treatment": "Treated",
        "Final Outcome": "Transported to hospital",
        "Number of Patients": "24,432"
      },
      {
        "Disposition": "Patient Treated, Transported by Law Enforcement",
        "Type of Treatment": "Treated",
        "Final Outcome": "Transported to facility",
        "Number of Patients": "4,227"
      },
      {
        "Disposition": "Patient Treated, Transported by Private Vehicle",
        "Type of Treatment": "Treated",
        "Final Outcome": "Transported to facility",
        "Number of Patients": "277"
      },
      {
        "Disposition": "Patient Treated, Transported by this EMS Unit",
        "Type of Treatment": "Treated",
        "Final Outcome": "Transported to hospital",
        "Number of Patients": "399,088"
      },
      {
        "Disposition": "Standby-Public Safety, Fire, or EMS Operational Support Provided",
        "Type of Treatment": "No patient contact",
        "Final Outcome": "N/A",
        "Number of Patients": "458"
      },
      {
        "Disposition": "Transport Non-Patient, Organs, etc.",
        "Type of Treatment": "No patient contact",
        "Final Outcome": "N/A",
        "Number of Patients": "**"
      },
      {
        "Disposition": "Unknown",
        "Type of Treatment": "Unknown",
        "Final Outcome": "N/A",
        "Number of Patients": "104"
      }
    ]
  }
]`, pi = `[\r
  { "Year": 2019, "Country": "USA", "Rate": 2.5 },\r
  { "Year": 2019, "Country": "Canada", "Rate": 3.2 },\r
  { "Year": 2019, "Country": "Germany", "Rate": 1.8 },\r
  { "Year": 2020, "Country": "USA", "Rate": 2.7 },\r
  { "Year": 2020, "Country": "Canada", "Rate": 3.5 },\r
  { "Year": 2020, "Country": "Germany", "Rate": 2.1 },\r
  { "Year": 2021, "Country": "USA", "Rate": 3.0 },\r
  { "Year": 2021, "Country": "Canada", "Rate": 3.8 },\r
  { "Year": 2021, "Country": "Germany", "Rate": 2.4 }\r
]\r
`, Da = {
  charts: [
    {
      text: "Chart Sample Data",
      fileName: "valid-data-chart.csv",
      data: oi
    },
    {
      text: "Box Plot Sample Data",
      fileName: "valid-boxplot.csv",
      data: ii
    },
    {
      text: "Scatter Plot Sample Data",
      fileName: "valid-scatterplot.csv",
      data: ui
    },
    {
      text: "Area Chart Sample Data",
      fileName: "valid-area-chart.json",
      data: li
    },
    {
      text: "Forecast Chart Data",
      fileName: "valid-forecast-data.csv",
      data: ci
    },
    {
      text: "Sankey Chart Data",
      fileName: "valid-sankey-data.json",
      data: di
    },
    {
      text: "Pivot Table Data",
      fileName: "pivotData.json",
      data: pi
    }
  ],
  maps: [
    {
      text: "United States: State Sample Data",
      fileName: "valid-data-map.csv",
      data: ei
    },
    {
      text: "United States: State Sample Data Footnotes",
      fileName: "valid-data-map-footnotes.csv",
      data: ti
    },
    {
      text: "United States: County Sample Data",
      fileName: "valid-county-data.csv",
      data: ai
    },
    {
      text: "United States: Geo Point Sample Data",
      fileName: "supported-cities.csv",
      data: ri
    },
    {
      text: "United States: Region",
      fileName: "valid-region-data.json",
      data: Ci
    },
    {
      text: "World: Geocode Sample Data",
      fileName: "valid-world-geocode.json",
      data: si
    },
    {
      text: "World: Default Data",
      fileName: "valid-world-data.json",
      data: yi
    }
  ]
}, mr = ({ text: o, fileName: d, data: s }) => {
  const { editingDataset: C, loadData: b } = A.useContext(Lo), P = (B) => b(new Blob([s], { type: "text/csv" }), d, C), y = (B) => B.keyCode === 13 && b(new Blob([s], { type: "text/csv" }), d, C);
  return /* @__PURE__ */ m.createElement(
    "button",
    {
      className: "link link-upload",
      onClick: P,
      onKeyDown: y
    },
    o
  );
}, fi = () => Da.maps.map((o) => /* @__PURE__ */ m.createElement(mr, { key: o.fileName, text: o.text, fileName: o.fileName, data: o.data })), gi = () => Da.charts.map((o) => /* @__PURE__ */ m.createElement(mr, { key: o.fileName, text: o.text, fileName: o.fileName, data: o.data })), mi = () => {
  const { config: o } = A.useContext(Lo);
  return /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement("h3", { className: "heading-3" }, "Load Sample Data:"), /* @__PURE__ */ m.createElement("ul", { className: "sample-data-list" }, o.type !== "map" && /* @__PURE__ */ m.createElement(gi, null), o.type !== "chart" && /* @__PURE__ */ m.createElement(fi, null)));
}, Ra = () => null;
Ra.data = Da;
Ra.Buttons = mi;
const $a = (o) => /* @__PURE__ */ A.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", ...o }, /* @__PURE__ */ A.createElement("path", { d: "M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm65.18 216.01H224v80c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16v-80H94.82c-14.28 0-21.41-17.29-11.27-27.36l96.42-95.7c6.65-6.61 17.39-6.61 24.04 0l96.42 95.7c10.15 10.07 3.03 27.36-11.25 27.36zM377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z" }));
function vi() {
  const { config: o, errors: d, tempConfig: s, sharepath: C } = A.useContext(ct), b = (F) => {
    fn({ type: "EDITOR_SET_CONFIG", payload: F });
  }, P = (F) => {
    fn({ type: "EDITOR_SET_ERRORS", payload: F });
  }, y = new Tr(), [B, nn] = A.useState(
    o.dataFileSourceType === "url" ? o.dataFileName : o.dataUrl || ""
  ), [h, pn] = A.useState(!!o.dataUrl), [M, un] = A.useState(o.type === "dashboard" || !o.data), [Nn, Cn] = A.useState(void 0), fn = A.useContext(Et), qn = {
    ".csv": "text/csv",
    ".json": "application/json"
  }, hn = (F) => F === void 0 ? "" : F > Math.pow(1024, 3) ? Math.round(F / Math.pow(1024, 3) * 100) / 100 + "GB" : F > Math.pow(1024, 2) ? Math.round(F / Math.pow(1024, 2) * 100) / 100 + "MB" : F > 1024 ? Math.round(F / 1024 * 100) / 100 + "KB" : F + "B", Hn = (F, z, rn) => (z.map(function(on, Fn, Yn) {
    if (!Yn.find((Se) => Se.dataKey === on.dataKey))
      return !1;
  }), !(F.columns.indexOf(rn) < 0)), An = (F) => ca(B) ? ".csv" : Mo(B) ? ".json" : Object.keys(qn).find((z) => F.pathname.endsWith(z)), Un = async () => {
    let F;
    try {
      F = ca(B) || Mo(B) ? B : new URL(B, window.location.origin);
    } catch {
      throw ot.urlInvalid;
    }
    let z = null;
    const rn = An(F);
    try {
      await Rr.get(F.toString(), {
        responseType: "blob"
      }).then((on) => {
        z = on.data, rn === ".csv" && ["text/csv", "text/plain"].includes(z.type) || ca(B) ? z = z.slice(0, z.size, "text/csv") : (z.type === "application/json" || rn === ".json" && z.type === "text/plain" || Mo(B)) && (z = z.slice(0, z.size, "application/json"));
      });
    } catch (on) {
      console.error(on);
      const Fn = on.toString();
      throw Object.values(ot).includes(on) ? Fn : ot.failedFetch;
    }
    return o.type === "dashboard" && nn(""), z;
  }, Wn = ([F]) => Dn(F, Nn, Nn), Dn = async (F = null, z, rn) => {
    let on = F, Fn = (on == null ? void 0 : on.path) ?? z ?? B;
    Fn && typeof Fn == "string" && (Fn = Fn.trim());
    const Yn = F ? "file" : "url";
    if (Yn === "url")
      try {
        on = await Un();
      } catch (pe) {
        P([pe]);
        return;
      }
    const Se = on.size;
    if (Se > ba * 1048576) {
      P([ot.fileTooLarge]);
      return;
    }
    const be = (() => {
      const pe = (F == null ? void 0 : F.name) || B || z;
      if (Yn === "file") {
        const ce = pe.match(/(?:\.([^.]+))?$/g), me = ce.length === 0 ? ".csv" : ce[0];
        return qn[me];
      }
      if (Yn === "url")
        return on.type;
    })(), Ae = new FileReader(), Le = (pe) => {
      switch (be) {
        case "text/csv":
          return Jr(pe);
        case "text/plain":
        case "application/json":
          try {
            return Mo(B) ? JSON.parse(pe).response.docs : JSON.parse(pe);
          } catch {
            P([ot.formatting]);
            return;
          }
        default:
          P([ot.fileType]);
          return;
      }
    };
    Ae.onload = function() {
      const pe = (ce, me = !1) => {
        if (o.type === "dashboard") {
          let ve = { ...o.datasets };
          Object.keys(ve).forEach((In) => ve[In].preview = !1);
          const Xe = be.split("/")[1].toUpperCase();
          ve[rn || Fn] = {
            data: ce,
            // new data
            dataFileSize: Se,
            dataFileName: Fn,
            // new file source
            dataFileSourceType: Yn,
            // new file source type
            dataFileFormat: Xe,
            preview: !0
          }, h && (ve[rn || Fn].dataUrl = Fn);
          const Q = me ? { ...o, ...s } : o;
          b({ ...Q, datasets: ve });
        } else {
          let ve = {
            ...o,
            ...s,
            data: ce,
            // new data
            dataFileName: Fn,
            // new file source
            dataFileSourceType: Yn,
            // new file source type
            formattedData: y.developerStandardize(ce, o.dataDescription)
          };
          h && (ve.dataUrl = Fn), b(ve);
        }
      };
      try {
        const ce = Le(this.result.toString()), me = y.autoStandardize(ce);
        o.data && o.series ? Hn(me, o.series, o == null ? void 0 : o.xAxis.dataKey) ? pe(me, !0) : Pe(
          {
            data: me,
            dataFileName: Fn,
            dataFileSourceType: Yn
          },
          "It appears that your data does not contain all of the columns that your last dataset contained. Continuing will reset your configuration. Do you want to continue?"
        ) : pe(me), Nn && Cn(void 0), un(!1);
      } catch (ce) {
        P(ce);
      }
    };
    const _e = be === "text/csv" ? "utf-8" : "";
    Ae.readAsText(on, _e);
  };
  A.useEffect(() => {
    let F = { ...s || o };
    if (o.formattedData === void 0 && o.dataDescription) {
      const z = y.developerStandardize(o.data, o.dataDescription);
      z && (F.formattedData = z);
    }
    fn({ type: "EDITOR_SAVE", payload: F });
  }, []);
  const oe = (F, z, rn) => {
    if (o.type === "dashboard") {
      let on = { ...o.datasets[F].dataDescription, [z]: rn }, Fn = y.developerStandardize(o.datasets[F].data, on), Yn = { ...o.datasets };
      Yn[F] = { ...Yn[F], dataDescription: on, formattedData: Fn }, b({ ...o, datasets: Yn });
    } else {
      let on = { ...o.dataDescription, [z]: rn }, Fn = y.developerStandardize(o.data, on);
      b({ ...o, formattedData: Fn, dataDescription: on });
    }
  }, Kn = (F, z) => {
    if (z) {
      let rn = { ...o.datasets };
      F === !1 ? delete rn[z].dataUrl : rn[z].dataUrl = rn[z].dataFileName, b({ ...o, datasets: rn });
    } else if (o.type !== "dashboard") {
      let rn = { ...o };
      F === !1 ? delete rn.dataUrl : rn.dataUrl = rn.dataFileName, b(rn);
    }
    pn(F);
  }, { getRootProps: Ce, getInputProps: Qn, isDragActive: tn } = wa({ onDrop: Wn }), {
    getRootProps: dn,
    getInputProps: zn,
    isDragActive: Xn
  } = wa({ onDrop: Wn }), Jn = () => /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement("form", { className: "input-group d-flex", onSubmit: (F) => F.preventDefault() }, /* @__PURE__ */ m.createElement(
    "input",
    {
      id: "external-data",
      type: "text",
      className: "form-control flex-grow-1 border-right-0",
      placeholder: "e.g., https://data.cdc.gov/resources/file.json",
      "aria-label": "Load data from external URL",
      "aria-describedby": "load-data",
      value: B,
      onChange: (F) => nn(F.target.value)
    }
  ), /* @__PURE__ */ m.createElement(
    "button",
    {
      className: "rounded-0 border-0 btn btn-primary px-4",
      type: "submit",
      id: "load-data",
      onClick: () => Dn(null, B, Nn)
    },
    "Load"
  )), /* @__PURE__ */ m.createElement("label", { htmlFor: "keep-url", className: "mt-1 d-flex keep-url" }, /* @__PURE__ */ m.createElement(
    "input",
    {
      type: "checkbox",
      id: "keep-url",
      checked: h,
      onChange: () => Kn(!h, Nn)
    }
  ), " ", "Always load from URL (normally will only pull once)")), Pe = (F = {}, z = "Are you sure you want to do this?") => {
    F.newViz = !0, window.confirm(z) === !0 && (fn({ type: "EDITOR_SAVE", payload: F }), un(!0));
  }, Re = () => (
    //todo convert to modal
    /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement(
      "button",
      {
        className: "btn danger",
        onClick: () => Pe(
          { type: o.type, visualizationType: o.visualizationType },
          "Resetting will remove your data and settings. Do you want to continue?"
        )
      },
      "Clear",
      /* @__PURE__ */ m.createElement(La, null)
    ), o.dataFileSourceType === "file" && /* @__PURE__ */ m.createElement("div", { className: "link link-replace", ...dn() }, /* @__PURE__ */ m.createElement("input", { ...zn() }), /* @__PURE__ */ m.createElement("p", null, /* @__PURE__ */ m.createElement("span", null, "or replace file"))))
  ), Me = (F, z, rn) => {
    let on = { ...o.datasets };
    rn === !0 ? Object.keys(on).forEach((Fn) => {
      const Yn = Fn === F;
      on[Fn][z] = Yn;
    }) : on[F][z] = rn, b({ ...o, datasets: on });
  }, Ie = (F) => {
    let z = { ...o.datasets }, rn = { ...o.visualizations };
    Object.keys(rn).forEach((on) => {
      rn[on].dataKey === F && delete rn[on].dataKey;
    }), delete z[F], b({ ...o, datasets: z, visualizations: rn });
  }, de = (F, z) => {
    if (F === z)
      return;
    let rn = { ...o.datasets }, on = { ...o.visualizations }, Fn = 2, Yn = z;
    for (; rn[z]; )
      z = Yn + "-" + Fn, Fn++;
    rn[z] = rn[F], delete rn[F], Object.keys(on).forEach((Se) => {
      on[Se].dataKey === F && (on[Se].dataKey = z);
    }), b({ ...o, datasets: rn, visualizations: on });
  };
  let ge, ae = !1;
  o.type === "dashboard" ? ae = Object.keys(o.datasets).length > 0 : (ge = o, ae = !!o.formattedData || o.data && o.dataDescription && y.autoStandardize(o.data)), o.visualizationType === "Sankey" && o.data && (ae = !0), (o.visualizationType === "Box Plot" && o.data || o.visualizationType === "Scatter Plot") && (ae = !0);
  const Oe = /* @__PURE__ */ m.createElement(m.Fragment, null, o.filters && o.filters.map(
    (F, z) => F.type !== "url" ? /* @__PURE__ */ m.createElement(m.Fragment, null) : /* @__PURE__ */ m.createElement("fieldset", { key: F.key, className: "edit-block url-filters-block" }, /* @__PURE__ */ m.createElement(
      "button",
      {
        onClick: (rn) => {
          let on = [...o.filters];
          on.splice(z, 1), b({ ...o, filters: on, runtimeDataUrl: void 0 });
        }
      },
      "Remove"
    ), /* @__PURE__ */ m.createElement("label", null, /* @__PURE__ */ m.createElement("span", { className: "edit-label column-heading" }, "Label", /* @__PURE__ */ m.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ m.createElement(De.Target, null, /* @__PURE__ */ m.createElement(fa, { display: "question" })), /* @__PURE__ */ m.createElement(De.Content, null, /* @__PURE__ */ m.createElement("p", { style: { padding: "0.5rem" } }, "The label that will appear above the dropdown filter.")))), " ", /* @__PURE__ */ m.createElement(
      "input",
      {
        type: "text",
        defaultValue: F.label,
        onChange: (rn) => {
          let on = [...o.filters];
          on[z].label = rn.target.value, b({ ...o, filters: on });
        }
      }
    )), /* @__PURE__ */ m.createElement("label", null, /* @__PURE__ */ m.createElement("span", { className: "edit-label column-heading" }, "Query string parameter", /* @__PURE__ */ m.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ m.createElement(De.Target, null, /* @__PURE__ */ m.createElement(fa, { display: "question" })), /* @__PURE__ */ m.createElement(De.Content, null, /* @__PURE__ */ m.createElement("p", { style: { padding: "0.5rem" } }, "Name of the query string parameter that will be appended to the URL above with the values provided below.")))), " ", /* @__PURE__ */ m.createElement(
      "input",
      {
        type: "text",
        defaultValue: F.queryParameter,
        onChange: (rn) => {
          let on = [...o.filters];
          on[z].queryParameter = rn.target.value, b({ ...o, filters: on });
        }
      }
    )), /* @__PURE__ */ m.createElement("label", null, /* @__PURE__ */ m.createElement("span", { className: "edit-label column-heading" }, "Values"), " "), /* @__PURE__ */ m.createElement("ul", { className: "value-list" }, F.orderedValues && F.orderedValues.map((rn, on) => /* @__PURE__ */ m.createElement("li", null, rn, /* @__PURE__ */ m.createElement(
      "input",
      {
        type: "text",
        placeholder: "Enter value display name here",
        value: F.labels ? F.labels[rn] : void 0,
        className: "url-value-label",
        onChange: (Fn) => {
          let Yn = [...o.filters];
          Yn[z].labels = Yn[z].labels || {}, Yn[z].labels[rn] = Fn.target.value, b({ ...o, filters: Yn });
        }
      }
    ), /* @__PURE__ */ m.createElement(
      "button",
      {
        onClick: () => {
          let Fn = [...o.filters];
          Fn[z].labels && delete Fn[z].labels[Fn[z].orderedValues[on]], Fn[z].orderedValues.splice(on, 1), b({ ...o, filters: Fn });
        }
      },
      "X"
    )))), /* @__PURE__ */ m.createElement(
      "form",
      {
        onSubmit: (rn) => {
          if (rn.preventDefault(), !o.filters[z].orderedValues || o.filters[z].orderedValues.indexOf(rn.target[0].value) === -1) {
            let on = [...o.filters];
            on[z].orderedValues = on[z].orderedValues || [], on[z].orderedValues.push(rn.target[0].value), on[z].values = on[z].orderedValues, on[z].active || (on[z].active = rn.target[0].value), rn.target[0].value = "", b({ ...o, filters: on });
          }
        }
      },
      /* @__PURE__ */ m.createElement("input", { type: "text", placeholder: "Enter new value name here" }),
      " ",
      /* @__PURE__ */ m.createElement("button", { type: "submit", style: { marginTop: "1em" } }, "Add New Value")
    ))
  ), /* @__PURE__ */ m.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: () => {
        b({
          ...o,
          filters: o.filters ? [...o.filters, { type: "url", key: Date.now() }] : [{ type: "url", key: Date.now() }]
        });
      }
    },
    "Add New URL Filter"
  )), Be = !["Box Plot", "Scatter Plot", "Sankey"].includes(o == null ? void 0 : o.visualizationType);
  return /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement("div", { className: "left-col" }, o.type === "dashboard" && Object.keys(o.datasets).length > 0 && /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement("div", { className: "heading-3" }, "Data Sources"), /* @__PURE__ */ m.createElement("table", null, /* @__PURE__ */ m.createElement("thead", null, /* @__PURE__ */ m.createElement("tr", null, /* @__PURE__ */ m.createElement("th", null, "Name"), /* @__PURE__ */ m.createElement("th", null, "Size"), /* @__PURE__ */ m.createElement("th", null, "Type"), /* @__PURE__ */ m.createElement("th", { colSpan: 3 }, "Actions"))), /* @__PURE__ */ m.createElement("tbody", null, Object.keys(o.datasets).map(
    (F) => o.datasets[F].dataFileName && /* @__PURE__ */ m.createElement("tr", { key: `tr-${F}` }, /* @__PURE__ */ m.createElement("td", null, /* @__PURE__ */ m.createElement(
      "input",
      {
        className: "dataset-name-input",
        type: "text",
        defaultValue: F,
        onBlur: (z) => de(F, z.target.value)
      }
    )), /* @__PURE__ */ m.createElement("td", { className: "p-1" }, hn(o.datasets[F].dataFileSize)), /* @__PURE__ */ m.createElement("td", { className: "p-1" }, o.datasets[F].dataFileFormat), /* @__PURE__ */ m.createElement("td", null, /* @__PURE__ */ m.createElement(
      "button",
      {
        className: "btn btn-link p-1",
        onClick: () => Me(F, "preview", !0)
      },
      "Preview"
    )), /* @__PURE__ */ m.createElement("td", null, /* @__PURE__ */ m.createElement(
      "button",
      {
        className: "btn btn-link p-1",
        onClick: () => {
          Nn === F ? (Cn(void 0), nn(""), pn(!1)) : (Cn(F), nn(
            o.datasets[F].dataUrl || o.datasets[F].dataFileName
          ), pn(!!o.datasets[F].dataUrl));
        }
      },
      "Edit"
    )), /* @__PURE__ */ m.createElement("td", null, /* @__PURE__ */ m.createElement("button", { className: "btn btn-danger", onClick: () => Ie(F) }, "X")))
  )))), (ge == null ? void 0 : ge.data) && /* @__PURE__ */ m.createElement(m.Fragment, null, o.type !== "dashboard" && /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement("div", { className: "heading-3" }, "Data Source"), /* @__PURE__ */ m.createElement("div", { className: "file-loaded-area" }, (o.dataFileSourceType === "file" || !o.dataFileSourceType) && /* @__PURE__ */ m.createElement("div", { className: "data-source-options" }, /* @__PURE__ */ m.createElement(
    "div",
    {
      className: Xn ? "drag-active cdcdataviz-file-selector loaded-file" : "cdcdataviz-file-selector loaded-file",
      ...dn()
    },
    /* @__PURE__ */ m.createElement("input", { ...zn() }),
    Xn ? /* @__PURE__ */ m.createElement("p", null, "Drop file here") : /* @__PURE__ */ m.createElement("p", null, /* @__PURE__ */ m.createElement($a, null), " ", /* @__PURE__ */ m.createElement("span", null, o.dataFileName ?? "Replace data file"))
  ), /* @__PURE__ */ m.createElement("div", null, Re())), o.dataFileSourceType === "url" && /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement("div", { className: "url-source-options" }, /* @__PURE__ */ m.createElement("div", null, Jn()), /* @__PURE__ */ m.createElement("div", null, Re())), o.dataUrl && (o.type === "chart" || o.type === "map") && Oe))), Be && /* @__PURE__ */ m.createElement(
    Hr,
    {
      visualizationKey: null,
      configureData: ge,
      updateDescriptionProp: (F, z) => oe(ge.dataFileName, F, z),
      config: o,
      setConfig: b
    }
  )), (Nn || M) && // dataFileSourceType needs to be checked here since earlier versions did not track this state
  /* @__PURE__ */ m.createElement("div", { className: "load-data-area" }, /* @__PURE__ */ m.createElement("div", { className: "heading-3" }, Nn ? `Editing ${Nn}` : "Add Dataset"), /* @__PURE__ */ m.createElement(Vu, { startingTab: Nn && o.datasets[Nn].dataFileSourceType === "url" ? 1 : 0 }, /* @__PURE__ */ m.createElement(kt, { title: "Upload File", icon: /* @__PURE__ */ m.createElement($a, { className: "inline-icon" }) }, C && /* @__PURE__ */ m.createElement("p", { className: "alert--info" }, "The share path set for this website is: ", C), /* @__PURE__ */ m.createElement(
    "div",
    {
      className: tn ? "drag-active cdcdataviz-file-selector" : "cdcdataviz-file-selector",
      ...Ce()
    },
    /* @__PURE__ */ m.createElement("input", { ...Qn() }),
    tn ? /* @__PURE__ */ m.createElement("p", null, "Drop file here") : /* @__PURE__ */ m.createElement("p", null, "Drag file to this area, or ", /* @__PURE__ */ m.createElement("span", null, "select a file"), ".")
  ), /* @__PURE__ */ m.createElement("p", { className: "footnote" }, "Supported file types: ", Object.keys(qn).join(", "), ". Maximum file size ", ba, "MB.")), /* @__PURE__ */ m.createElement(kt, { title: "Load from URL", icon: /* @__PURE__ */ m.createElement(ni, { className: "inline-icon" }) }, Jn())), d && (Array.isArray(d) ? d.map((F, z) => /* @__PURE__ */ m.createElement("div", { className: "error-box slim mt-2", key: `error-${F}` }, /* @__PURE__ */ m.createElement("span", null, F), " ", /* @__PURE__ */ m.createElement(
    La,
    {
      className: "inline-icon dismiss-error",
      onClick: () => P(d.filter((rn, on) => on !== z))
    }
  ))) : d.message), /* @__PURE__ */ m.createElement(Lo.Provider, { value: { loadData: Dn, editingDataset: Nn, config: o } }, /* @__PURE__ */ m.createElement(Ra.Buttons, null))), o.type === "dashboard" && !M && /* @__PURE__ */ m.createElement("div", { className: "mt-2" }, /* @__PURE__ */ m.createElement("button", { className: "btn btn-primary", onClick: () => un(!0) }, "+ Add More Files")), ae && /* @__PURE__ */ m.createElement("div", { className: "mt-2" }, /* @__PURE__ */ m.createElement(
    "button",
    {
      className: "btn btn-primary",
      onClick: () => fn({ type: "EDITOR_SET_GLOBALACTIVE", payload: 2 })
    },
    "Configure your visualization"
  )), /* @__PURE__ */ m.createElement(
    "a",
    {
      href: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/data-map.html",
      target: "_blank",
      rel: "noopener noreferrer",
      className: "guidance-link"
    },
    /* @__PURE__ */ m.createElement("div", null, /* @__PURE__ */ m.createElement("h3", null, "Get Help"), /* @__PURE__ */ m.createElement("p", null, "Documentation and examples on formatting data and configuring visualizations."))
  )), /* @__PURE__ */ m.createElement("div", { className: "right-col" }, /* @__PURE__ */ m.createElement(Qu, null)));
}
const hi = (o) => /* @__PURE__ */ A.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024", fill: "currentColor", ...o }, /* @__PURE__ */ A.createElement("path", { d: "M489.3,377.8H80.1v-288c0-8.4-6.8-15.2-15.2-15.2H34.7c-8.4,0-15.2,6.8-15.2,15.2v318.3c0,16.7,13.6,30.3,30.3,30.3h439.5 c8.4,0,15.2-6.8,15.2-15.2v-30.3C504.5,384.6,497.7,377.8,489.3,377.8z" }), /* @__PURE__ */ A.createElement("path", { d: "M459,105H347.2c-20.3,0-30.4,24.5-16.1,38.8l30.7,30.7L292.3,244l-69.5-69.5c-11.8-11.8-31-11.8-42.9,0l-65.1,65.1 c-5.9,5.9-5.9,15.5,0,21.4l21.4,21.4c5.9,5.9,15.5,5.9,21.4,0l43.6-43.6l69.5,69.5c11.8,11.8,31,11.8,42.9,0l90.9-90.9l30.7,30.7 c14.3,14.3,38.8,4.2,38.8-16.1V120.1C474.2,111.7,467.4,105,459,105z" }), /* @__PURE__ */ A.createElement("path", { d: "M991.2,280.5h-188l125.2,125.2c4.8,4.8,12.7,5.2,17.6,0.5c30.7-28.9,51.8-67.8,57.9-111.6 C1005,287.2,998.8,280.5,991.2,280.5L991.2,280.5z" }), /* @__PURE__ */ A.createElement("path", { d: "M978.7,229.2c-6.5-94.6-82.2-170.3-176.8-176.8c-7.2-0.5-13.3,5.6-13.3,12.8v177.3h177.3 C973.1,242.5,979.2,236.4,978.7,229.2L978.7,229.2z" }), /* @__PURE__ */ A.createElement("path", { d: "M750.5,280.5v-188c0-7.6-6.6-13.8-14.1-12.7C642,93.1,569.8,175.6,573.2,274.5C576.6,376,664,459.3,765.6,458 c39.9-0.5,76.8-13.4,107.2-34.9c6.3-4.4,6.7-13.7,1.2-19.1L750.5,280.5z" }), /* @__PURE__ */ A.createElement("path", { d: "M130.7,558l1.1,7.2l5.5,11.6l-2.8,12.1l-6.1-7.7l-3.9-8.8l-8.8-1.7L102,569h-3.9l2.2,7.7l7.7,11v11l2.2,12.1l9.9,1.1 l3.9,5.5l-12.1-1.7l-3.9,2.8l1.7,11.6l-2.2,12.7l0.5,14.9l-3.9,9.9l-4.4,14.3l3.3,9.9l2.2,12.7l1.7,9.4l-2.2,12.7l1.7,8.8l3.9,8.8 l3.3,11l2.8,7.2L128,772l5.5-0.6l7.7,1.1l-8.3,2.2l2.2,3.9l-7.2,1.1l6.6,7.2l6.6,7.2l-2.2,6.1l8.8,12.7l9.4,7.7l1.1,9.4l7.7,3.9 l10.5,3.3l8.3,7.2l7.2,4.4l7.7,6.1l4.4,3.3l5,11l28.1-0.6l55.2,19.3h45.8l-1.1-4.4h22.1l8.8,5l5,5l12.7,8.8l4.4,16l12.7,6.6l7.7,3.3 l10.5-12.7l13.8,1.7l5.5,4.4l14.9,24.3l5,6.1l3.9,13.8l29.2,11.6l-1.1-9.9l-1.1-13.8l9.4-11l-1.7-3.3l9.4-7.7l5,2.8l8.3-9.4l5-6.6 h7.2l16-3.3l11.6,5h8.8l3.3-3.9l3.9,2.8l0.6,5l11.6,3.9l11-1.7l9.4,0.6l-7.7-6.1l-0.6-3.3l5-2.8l-0.5-2.8H598l-8.8,1.1l5.5-5 l2.8-3.3l2.8,2.8l16-2.2l2.2,2.8h11l6.1-1.7l8.8-0.5l8.3,3.3l5-0.6l5,7.2l9.9,0.5l5.5-4.4h5.5l11,9.4l6.1,6.6l1.7,8.8l-1.1,11 l3.9,11.6l10.5,13.2l6.1,12.7l2.2,5l11-2.2l2.8-12.1v-18.2l-5.5-14.9l-1.7-3.9l-1.1-11l-9.4-11l-1.7-13.2l0.5-11l4.4-12.1l8.3-6.6 l-0.6-5l9.9-1.7l14.3-16l6.6-5.5l7.2,1.1l6.6-12.7l9.4-5c0,0,7.2,1.1,7.7-1.7c0.5-2.8,7.7-16,7.7-16l-7.7-4.4l4.4-3.9l1.1-2.8 l-4.4-11l-4.4-5l5.5-6.1l-4.4-5.5l-1.1-11l-0.6-9.4l3.3-2.8l2.2,13.8l1.7,6.6l3.9,6.1l-1.1,9.9l6.1-12.1l3.9-9.4l0.6-5.5l-5.5-6.6 l-0.6-2.8l1.7-1.7l8.8,5.5l2.8-6.6l6.1-6.1l1.1-6.6l-1.1-7.7l0.5-3.9l1.1-5.5l4.4,6.1h2.2l6.6-1.1l6.6-0.6l8.8-2.8l-1.7-3.3 l-8.8,0.6l-8.3,2.2l-3.9,2.2l-0.6-3.9l2.8-3.3l7.2-1.7l8.8-1.7l6.1-1.7l5-3.3l11.6,2.8c0,0,5,2.8,5.5,1.1c0.6-1.7,2.2-6.1,2.2-6.1 l-3.9-4.4l-1.7-6.6l1.1-11l1.1-8.8l5-6.6l1.1-2.8l3.3,1.7l10.5-11.6h3.9l8.8-1.1l2.8-5.5h7.7l6.6-5.5l-2.5-3l-3-7.4l-3.3-2.5 l1.4-18.5l-1.7-16.8l-9.9-3l-8.6,3l-4.7-0.6l-19,44.4l-8.8,0.6l-3.9,3.3l-46.9-0.3l-11.6,10.8l-7.2,4.4l-3.3,9.4l-1.7,5l-8.3,5.5 H774l-6.1-2.8l-7.7,1.1l-9.9,3.3l0.6,5l-0.6,8.8l-5,4.4l-9.9,2.2l-15.4,7.7l-11.6,3.9l-11,0.6l-6.6-5l3.3-6.1l1.7-1.7l2.2-6.1 l4.1-2.5l5.2-9.1l-5.5-7.2l-1.1-11.6l-7.2-2.2l-9.4,6.6l3.3-7.7l5.5-7.7l-2.2-7.2l-1.7-8.3l-8.8-3.3l-7.7-6.6l-9.4,3.9l0.6,7.2 l-5.5,6.6l-4.4-2.2l-8.3,9.4v11l1.1,11l5,7.7l-0.6,16.6l-10.5,9.9l-7.7,0.6l-3.9-11.6l-3.9-8.3l1.7-11l-1.7-11l3.9-7.2l2.2-7.2 l3.9-12.1l-8.8,9.9l5-17.1l7.7-6.6l9.4-0.6l7.2-3.3H667h9.4l6.1-1.7l7.2,1.1l3.3,5.5l13.8,5l2.8-7.7l-9.4,1.1l-6.1-0.6l-8.8-6.6 l-5.5-3.3l-6.3-4.7l-6.3,1.9l-6.1-4.4l-14.3,0.6l-7.7,5l-6.1-3.9l-7.2-4.4l-10.5-0.6l10.5-14.9l-12.1,5.5l-9.9,7.7l-9.9,5.5 l-8.8,1.1l-1.1-5.5l-18.2,3.9l15.3-13.4l10.8-7.9l13.4-10.5l-5.5-0.8l-18.2,0.6l-8.3-1.7l-7.4-1.2L558,564l-8.3,0.6l-15.7-3.9 l-4.1-5l-2.2-7.7l-3.9-3.6l0.3,4.1l-3.9,6.1l-387.3,0.3L130.7,558L130.7,558z" })), Si = (o) => /* @__PURE__ */ A.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 99.1 79.7", fill: "currentColor", ...o }, /* @__PURE__ */ A.createElement("path", { d: "M91,18.7H62c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h29c0.6,0,1-0.4,1-1v-6C92,19.1,91.6,18.7,91,18.7z M89.4,24.7H63.6 c-0.3,0-0.6-0.2-0.6-0.6v-2.9c0-0.3,0.2-0.6,0.6-0.6h25.9c0.3,0,0.6,0.2,0.6,0.6v2.9C90,24.4,89.8,24.7,89.4,24.7z" }), /* @__PURE__ */ A.createElement("path", { d: "M75,30.7H63c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h12c0.6,0,1-0.4,1-1v-6C76,31.1,75.6,30.7,75,30.7z M73.7,36.7h-9.3 c-0.2,0-0.3-0.2-0.3-0.3V33c0-0.2,0.2-0.3,0.3-0.3h9.3c0.2,0,0.3,0.2,0.3,0.3v3.3C74,36.5,73.8,36.7,73.7,36.7z" }), /* @__PURE__ */ A.createElement("path", { d: "M81,43.7H63c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h18c0.6,0,1-0.4,1-1v-6C82,44.1,81.6,43.7,81,43.7z M79.6,49.7H64.4 c-0.2,0-0.4-0.2-0.4-0.4v-3.1c0-0.2,0.2-0.4,0.4-0.4h15.1c0.2,0,0.4,0.2,0.4,0.4v3.1C80,49.5,79.8,49.7,79.6,49.7z" }), /* @__PURE__ */ A.createElement("path", { d: "M47,12.7h6c0.6,0,1,0.4,1,1v52c0,0.6-0.4,1-1,1h-6c-0.6,0-1-0.4-1-1v-52C46,13.1,46.4,12.7,47,12.7z" }), /* @__PURE__ */ A.createElement("path", { d: "M39,19.7v6c0,0.6-0.4,1-1,1H17c-0.6,0-1-0.4-1-1v-6c0-0.6,0.4-1,1-1h21C38.6,18.7,39,19.1,39,19.7z" }), /* @__PURE__ */ A.createElement("path", { d: "M39,31.7v6c0,0.6-0.4,1-1,1H8c-0.6,0-1-0.4-1-1v-6c0-0.6,0.4-1,1-1h30C38.6,30.7,39,31.1,39,31.7z" }), /* @__PURE__ */ A.createElement("path", { d: "M39,44.7v6c0,0.6-0.4,1-1,1H20c-0.6,0-1-0.4-1-1v-6c0-0.6,0.4-1,1-1h18C38.6,43.7,39,44.1,39,44.7z" }), /* @__PURE__ */ A.createElement("path", { d: "M39,57.7v6c0,0.6-0.4,1-1,1H25c-0.6,0-1-0.4-1-1v-6c0-0.6,0.4-1,1-1h13C38.6,56.7,39,57.1,39,57.7z" }), /* @__PURE__ */ A.createElement("path", { d: "M79,56.7H63c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h16c0.6,0,1-0.4,1-1v-6C80,57.1,79.6,56.7,79,56.7z M77.6,62.7H64.4 c-0.2,0-0.4-0.2-0.4-0.4v-3.2c0-0.2,0.2-0.4,0.4-0.4h13.2c0.2,0,0.4,0.2,0.4,0.4v3.2C78,62.5,77.8,62.7,77.6,62.7z" })), wi = (o) => /* @__PURE__ */ A.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 96.3 82.6", fill: "currentColor", ...o }, /* @__PURE__ */ A.createElement("path", { d: "M83.9,61.4h-64V12.1c0-1.1-0.9-2-2-2h-5.5c-1.1,0-2,0.9-2,2v56.7c0,1.1,0.9,2,2,2h71.5c1.1,0,2-0.9,2-2v-5.5 C85.9,62.3,85,61.4,83.9,61.4z" }), /* @__PURE__ */ A.createElement("path", { d: "M67.1,47.3H26.8c-1.1,0-2,0.9-2,2v6.1c0,1.1,0.9,2,2,2h40.3c1.1,0,2-0.9,2-2v-6.1C69.1,48.2,68.2,47.3,67.1,47.3L67.1,47.3z  M52,54.6H38.2c-0.7,0-1.3-0.4-1.3-1V51c0-0.5,0.6-1,1.3-1H52c0.7,0,1.3,0.4,1.3,1v2.6C53.3,54.1,52.8,54.6,52,54.6z" }), /* @__PURE__ */ A.createElement("path", { d: "M83.9,31.7H26.8c-1.1,0-2,0.9-2,2v6.1c0,1.1,0.9,2,2,2h57.2c1.1,0,2-0.9,2-2v-6.1C85.9,32.6,85,31.7,83.9,31.7z M68.8,39 H45.2c-0.7,0-1.3-0.4-1.3-1v-2.6c0-0.5,0.6-1,1.3-1h23.7c0.7,0,1.3,0.4,1.3,1V38C70.2,38.5,69.6,39,68.8,39z" }), /* @__PURE__ */ A.createElement("path", { d: "M77,16.1H26.8c-1.1,0-2,0.9-2,2v6.1c0,1.1,0.9,2,2,2H77c1.1,0,2-0.9,2-2v-6.1C79,17,78.1,16.1,77,16.1z M58.9,23.4H36.6 c-0.7,0-1.3-0.4-1.3-1v-2.6c0-0.5,0.6-1,1.3-1h22.3c0.7,0,1.3,0.4,1.3,1v2.6C60.2,23,59.6,23.4,58.9,23.4z" })), Mi = (o) => /* @__PURE__ */ A.createElement("svg", { id: "a", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 96.31 82.55", ...o }, /* @__PURE__ */ A.createElement("path", { d: "M88.49,65.65H15.29V9.04c0-1.1-.9-2-2-2H7.82c-1.1,0-2,.9-2,2V73.13c0,1.1,.9,2,2,2H88.49c1.1,0,2-.9,2-2v-5.48c0-1.1-.9-2-2-2Z" }), /* @__PURE__ */ A.createElement("g", null, /* @__PURE__ */ A.createElement("path", { d: "M30.22,49.19c-1.79,0-3.24,1.45-3.24,3.24s1.45,3.24,3.24,3.24,3.24-1.45,3.24-3.24-1.45-3.24-3.24-3.24Z" }), /* @__PURE__ */ A.createElement("path", { d: "M33.06,35.59c-1.79,0-3.24,1.45-3.24,3.24s1.45,3.24,3.24,3.24,3.24-1.45,3.24-3.24-1.45-3.24-3.24-3.24Z" }), /* @__PURE__ */ A.createElement("path", { d: "M48.12,37.83c-1.79,0-3.24,1.45-3.24,3.24s1.45,3.24,3.24,3.24,3.24-1.45,3.24-3.24-1.45-3.24-3.24-3.24Z" }), /* @__PURE__ */ A.createElement("circle", { cx: 49.64, cy: 22.73, r: 3.24 }), /* @__PURE__ */ A.createElement("path", { d: "M64.53,19.49c-1.79,0-3.24,1.45-3.24,3.24s1.45,3.24,3.24,3.24,3.24-1.45,3.24-3.24-1.45-3.24-3.24-3.24Z" }), /* @__PURE__ */ A.createElement("path", { d: "M57.95,31.11c-1.79,0-3.24,1.45-3.24,3.24s1.45,3.24,3.24,3.24,3.24-1.45,3.24-3.24-1.45-3.24-3.24-3.24Z" }), /* @__PURE__ */ A.createElement("path", { d: "M74.53,11.54c-1.79,0-3.24,1.45-3.24,3.24s1.45,3.24,3.24,3.24,3.24-1.45,3.24-3.24-1.45-3.24-3.24-3.24Z" }))), bi = (o) => /* @__PURE__ */ A.createElement("svg", { id: "a", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 96.31 82.55", ...o }, /* @__PURE__ */ A.createElement("path", { d: "M54.68,29.14h-4.1V8.43h2.68c.5,0,.9-.15,1.19-.46,.46-.48,.44-1.11,.42-1.62,0-.11,0-.22,0-.34s0-.24,0-.34c.02-.5,.05-1.13-.42-1.62-.29-.3-.69-.46-1.19-.46h-10.2c-.5,0-.9,.15-1.19,.46-.47,.48-.44,1.11-.42,1.62,0,.11,0,.23,0,.34s0,.23,0,.34c-.02,.5-.05,1.13,.42,1.62,.29,.3,.69,.46,1.19,.46h2.68V29.14h-4.1c-1.33,0-2.42,1.09-2.42,2.42v31.31c0,1.33,1.09,2.42,2.42,2.42h4.1v7.97h-2.68c-.5,0-.9,.15-1.19,.46-.46,.48-.44,1.11-.42,1.62,0,.11,0,.22,0,.34s0,.24,0,.34c-.02,.5-.05,1.13,.42,1.62,.29,.3,.69,.46,1.19,.46h10.2c.5,0,.9-.15,1.19-.46,.47-.48,.44-1.11,.42-1.62,0-.11,0-.23,0-.34s0-.23,0-.34c.02-.5,.05-1.13-.42-1.62-.29-.3-.69-.46-1.19-.46h-2.68v-7.97h4.1c1.33,0,2.42-1.09,2.42-2.42V31.56c0-1.33-1.09-2.42-2.42-2.42Zm-2.42,20.5v10.81h-8.2v-10.81h8.2Zm-8.2-4.84v-10.81h8.2v10.81h-8.2Z" })), Ai = (o) => /* @__PURE__ */ A.createElement("svg", { id: "a", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 96.31 82.55", ...o }, /* @__PURE__ */ A.createElement("path", { d: "M88.49,65.65H15.29V9.04c0-1.1-.9-2-2-2H7.82c-1.1,0-2,.9-2,2V73.13c0,1.1,.9,2,2,2H88.49c1.1,0,2-.9,2-2v-5.48c0-1.1-.9-2-2-2Z" }), /* @__PURE__ */ A.createElement("path", { d: "M87.91,60.65c-.02-.12-2.46-12.63-5.53-24.97-5.97-23.99-8.8-26-10.99-26-2.54,0-4.17,3.55-7.92,12.31-.67,1.56-1.4,3.27-2.18,5.02-1.66-4.14-3.14-5.9-4.84-5.9-2.39,0-4.05,3.42-7.07,9.64-5.56,11.44-13.97,28.72-29.12,28.72-.8,0-1.46,.65-1.46,1.45s.65,1.45,1.46,1.45H86.48c.43,0,.85-.19,1.12-.53,.28-.34,.39-.78,.31-1.2Zm-46.88-1.25c8.93-4.92,15.3-15.3,19.83-24.54,2.62,8.88,4.97,20.28,5.83,24.58l-25.66-.04Z" })), Di = (o) => /* @__PURE__ */ A.createElement("svg", { id: "a", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 96.31 82.55", ...o }, /* @__PURE__ */ A.createElement("path", { d: "M18.29,39.57c0-1.03,.23-1.79,.68-2.28,.45-.49,1.06-.74,1.83-.74s1.42,.25,1.87,.74c.45,.49,.68,1.25,.68,2.29s-.23,1.79-.68,2.28c-.45,.5-1.06,.74-1.83,.74s-1.42-.25-1.87-.74c-.45-.49-.68-1.25-.68-2.29Zm1.71-.02c0,.75,.09,1.25,.26,1.5,.13,.19,.31,.28,.54,.28s.42-.09,.55-.28c.17-.25,.25-.75,.25-1.5s-.08-1.24-.25-1.49c-.13-.19-.31-.29-.55-.29s-.41,.09-.54,.28c-.17,.26-.26,.76-.26,1.5Zm2.47,9.08h-1.62l6.1-12.09h1.58l-6.05,12.09Zm3.55-3.01c0-1.03,.23-1.79,.68-2.28,.45-.49,1.07-.74,1.85-.74s1.4,.25,1.86,.74c.45,.5,.68,1.26,.68,2.28s-.23,1.79-.68,2.29c-.45,.49-1.06,.74-1.83,.74s-1.42-.25-1.87-.74c-.45-.49-.68-1.26-.68-2.29Zm1.71,0c0,.75,.09,1.24,.26,1.49,.13,.19,.31,.29,.54,.29s.41-.09,.54-.28c.17-.25,.26-.75,.26-1.5s-.08-1.24-.25-1.5c-.13-.19-.31-.28-.55-.28s-.41,.09-.54,.28c-.17,.26-.26,.76-.26,1.5Z" }), /* @__PURE__ */ A.createElement("path", { d: "M92.33,52.83v-20.42c0-1.61-1.31-2.93-2.93-2.93H6.65c-1.61,0-2.93,1.31-2.93,2.93v20.42c0,1.61,1.31,2.93,2.93,2.93H89.4c1.61,0,2.93-1.31,2.93-2.93Zm-52.34-2.93H9.58v-14.56h30.41v14.56Zm5.86-14.56h40.63v14.56H45.85v-14.56Z" })), Za = (o) => /* @__PURE__ */ A.createElement("svg", { id: "a", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 96.31 82.55", ...o }, /* @__PURE__ */ A.createElement("path", { d: "M89.56,65.41H16.36V8.8c0-1.1-.9-2-2-2h-5.48c-1.1,0-2,.9-2,2V72.89c0,1.1,.9,2,2,2H89.56c1.1,0,2-.9,2-2v-5.48c0-1.1-.9-2-2-2Z" }), /* @__PURE__ */ A.createElement("path", { d: "M54.66,55.34c-17.76,0-33.46-17.8-34.12-18.56l-.98-1.13v-4.55l3.25,3.72c.15,.18,15.47,17.53,31.86,17.53h0c7.31,0,12.37-1.68,17.27-3.3,4.31-1.42,8.77-2.9,14.44-3.05l1.5-.04v3l-1.42,.04c-5.24,.14-9.29,1.48-13.59,2.9-5.13,1.69-10.43,3.45-18.22,3.45h0Z" }), /* @__PURE__ */ A.createElement("path", { d: "M87.84,59.04c-4.73-1.24-7.41-1.66-13.05-1.93-2.82-.14-5.22,.16-8,.5-2.73,.33-5.81,.71-10.06,.79-13.13,.27-23.77-4.63-37.17-17.31v-1.57c13.19,12.48,24.31,18.13,37.15,17.88,4.2-.08,7.26-.46,9.96-.79,2.83-.34,5.27-.64,8.17-.5,5.73,.28,8.2,.62,13,1.88v1.05Z" }), /* @__PURE__ */ A.createElement("path", { d: "M57.02,49.28c-19.55,0-30.91-14.65-37.69-23.41v-1.54c6.67,8.61,18.64,23.95,37.69,23.95,5.87,0,14.11-3.23,18.39-6.23,2.43-1.7,3.84-2.77,4.87-3.55,2.24-1.7,2.7-2.05,7.71-4.44l-.03,1.12c-4.92,2.34-4.91,2.47-7.08,4.12-1.04,.79-2.45,1.86-4.9,3.57-4.4,3.08-12.9,6.41-18.96,6.41Z" })), Ri = (o) => /* @__PURE__ */ A.createElement("svg", { id: "Layer_1", "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 99.1 79.69", ...o }, /* @__PURE__ */ A.createElement("defs", null, /* @__PURE__ */ A.createElement("style", null, ".cls-1{fill:#231f20;}")), /* @__PURE__ */ A.createElement("rect", { className: "cls-1", x: 46.87, y: 5.79, width: 8.32, height: 67.79, rx: 1 }), /* @__PURE__ */ A.createElement("rect", { className: "cls-1", x: 23.98, y: 17.65, width: 8.32, height: 23.31, rx: 1, transform: "translate(57.44 1.16) rotate(90)" }), /* @__PURE__ */ A.createElement("rect", { className: "cls-1", x: 19.53, y: 25.99, width: 8.32, height: 32.21, rx: 1, transform: "translate(65.79 18.41) rotate(90)" }), /* @__PURE__ */ A.createElement("rect", { className: "cls-1", x: 27.33, y: 60.4, width: 8.32, height: 14.6, rx: 1, transform: "translate(99.19 36.2) rotate(90)" }), /* @__PURE__ */ A.createElement("path", { className: "cls-1", d: "M81,52.74v4.32H64.55V52.74H81m1-2H63.55a1,1,0,0,0-1,1v6.32a1,1,0,0,0,1,1H82a1,1,0,0,0,1-1V51.74a1,1,0,0,0-1-1Z" }), /* @__PURE__ */ A.createElement("path", { className: "cls-1", d: "M90,14.41v4.33H64.55V14.41H90m1-2H63.55a1,1,0,0,0-1,1v6.33a1,1,0,0,0,1,1H91a1,1,0,0,0,1-1V13.41a1,1,0,0,0-1-1Z" })), Ni = (o) => /* @__PURE__ */ A.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 96.31 82.55", ...o }, /* @__PURE__ */ A.createElement("g", { id: "a" }, /* @__PURE__ */ A.createElement("path", { d: "M88.56,66.3H15.36V9.68c0-1.1-.9-2-2-2H7.89c-1.1,0-2,.9-2,2V73.77c0,1.1,.9,2,2,2H88.56c1.1,0,2-.9,2-2v-5.48c0-1.1-.9-2-2-2Z" }), /* @__PURE__ */ A.createElement("path", { d: "M18.36,54.67v6.94c0,1.1,.9,2,2,2h5.48c1.1,0,2-.9,2-2l-.13-6.94c0-1.1-.9-2-2-2h-5.34c-1.1,0-2,.9-2,2Z" }), /* @__PURE__ */ A.createElement("path", { d: "M30.43,45.3v16.31c0,1.1,.9,2,2,2h5.48c1.1,0,2-.9,2-2l-.13-16.31c0-1.1-.9-2-2-2h-5.34c-1.1,0-2,.9-2,2Z" }), /* @__PURE__ */ A.createElement("path", { d: "M42.51,32.3v29.31c0,1.1,.9,2,2,2h5.48c1.1,0,2-.9,2-2l-.13-29.31c0-1.1-.9-2-2-2h-5.34c-1.1,0-2,.9-2,2Z" }), /* @__PURE__ */ A.createElement("path", { d: "M54.58,32.3v29.31c0,1.1,.9,2,2,2h5.48c1.1,0,2-.9,2-2l-.13-29.31c0-1.1-.9-2-2-2h-5.34c-1.1,0-2,.9-2,2Z" }), /* @__PURE__ */ A.createElement("path", { d: "M66.66,42.22v19.33c0,1.1,.9,2,2,2h5.48c1.1,0,2-.9,2-2l-.13-19.33c0-1.1-.9-2-2-2h-5.34c-1.1,0-2,.9-2,2Z" }), /* @__PURE__ */ A.createElement("path", { d: "M78.73,58.89v2.72c0,1.1,.9,2,2,2h5.48c1.1,0,2-.9,2-2l-.13-2.72c0-1.1-.9-2-2-2h-5.34c-1.1,0-2,.9-2,2Z" }), /* @__PURE__ */ A.createElement("g", null, /* @__PURE__ */ A.createElement("path", { d: "M20.25,38.69c-.65,0-1.3-.32-1.68-.91-.6-.93-.34-2.16,.59-2.77,.01,0,1.17-.76,2.86-1.92,.91-.62,2.16-.39,2.78,.52,.62,.91,.39,2.16-.52,2.78-1.75,1.2-2.95,1.98-2.95,1.98-.34,.22-.71,.32-1.09,.32Z" }), /* @__PURE__ */ A.createElement("path", { d: "M28.5,32.92c-.61,0-1.21-.28-1.6-.8-.66-.88-.48-2.14,.4-2.8,1.91-1.43,3.51-2.72,4.76-3.83l.21-.19c.82-.74,2.09-.67,2.82,.16,.74,.82,.66,2.09-.16,2.82l-.22,.2c-1.34,1.19-3.03,2.55-5.02,4.04-.36,.27-.78,.4-1.2,.4Zm50.28-1.66c-.34,0-.68-.09-1-.27-1.64-.95-3.38-2.08-5.66-3.67-.91-.63-1.13-1.88-.49-2.79,.63-.9,1.88-1.13,2.79-.49,2.17,1.52,3.83,2.6,5.37,3.48,.96,.55,1.28,1.78,.73,2.73-.37,.64-1.04,1-1.73,1Zm-40.24-6.8c-.58,0-1.15-.25-1.55-.73-.7-.85-.58-2.11,.28-2.81,1.98-1.63,3.82-2.93,5.61-3.98,.95-.56,2.18-.24,2.74,.72s.24,2.18-.72,2.74c-1.61,.94-3.27,2.12-5.09,3.62-.37,.31-.82,.45-1.27,.45Zm29.37-.59c-.4,0-.8-.12-1.15-.37-1.61-1.13-3.5-2.44-5.34-3.52-.95-.56-1.27-1.78-.72-2.74,.56-.95,1.78-1.27,2.74-.72,1.98,1.16,3.95,2.52,5.63,3.7,.9,.64,1.12,1.88,.48,2.79-.39,.55-1.01,.85-1.64,.85Zm-18-5.77c-.89,0-1.7-.6-1.93-1.49-.28-1.07,.36-2.16,1.43-2.44,1.72-.45,3.46-.68,5.17-.68,.71,0,1.46,.08,2.24,.24,1.08,.23,1.77,1.29,1.55,2.37s-1.29,1.77-2.37,1.55c-.5-.11-.98-.16-1.42-.16-1.37,0-2.77,.18-4.16,.55-.17,.04-.34,.07-.51,.07Z" }), /* @__PURE__ */ A.createElement("path", { d: "M88.21,34.46c-1.26,0-2.6-.2-4-.6-1.06-.3-1.68-1.41-1.37-2.47,.3-1.06,1.41-1.68,2.47-1.37,1.04,.3,2.02,.45,2.9,.45,1.1,0,2,.9,2,2s-.9,2-2,2Z" }))), /* @__PURE__ */ A.createElement("g", { id: "b" })), Ti = (o) => /* @__PURE__ */ A.createElement("svg", { id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", x: "0px", y: "0px", viewBox: "0 0 96.3 82.6", style: {
  enableBackground: "new 0 0 96.3 82.6"
}, xmlSpace: "preserve", ...o }, /* @__PURE__ */ A.createElement("path", { d: "M88.6,66.5H15.4V7.6c0-1.1-0.9-2-2-2H7.9c-1.1,0-2,0.9-2,2V74c0,1.1,0.9,2,2,2h80.7c1.1,0,2-0.9,2-2v-5.5 C90.6,67.4,89.7,66.5,88.6,66.5L88.6,66.5z" }), /* @__PURE__ */ A.createElement("path", { d: "M31.7,51.1V63c0,1.1,0.9,2,2,2h1.1c1.1,0,2-0.9,2-2l-0.1-11.9c0-1.1-0.9-2-2-2h-0.9C32.6,49.1,31.7,50,31.7,51.1L31.7,51.1z " }), /* @__PURE__ */ A.createElement("path", { d: "M38.7,41.7V63c0,1.1,0.9,2,2,2h1.1c1.1,0,2-0.9,2-2l-0.1-21.3c0-1.1-0.9-2-2-2h-0.9C39.6,39.7,38.7,40.6,38.7,41.7 L38.7,41.7z" }), /* @__PURE__ */ A.createElement("path", { d: "M45.7,28.7V63c0,1.1,0.9,2,2,2h1.1c1.1,0,2-0.9,2-2l-0.1-34.3c0-1.1-0.9-2-2-2h-0.9C46.6,26.7,45.7,27.6,45.7,28.7 L45.7,28.7z" }), /* @__PURE__ */ A.createElement("path", { d: "M59.7,28.7V63c0,1.1,0.9,2,2,2h1.1c1.1,0,2-0.9,2-2l-0.1-34.3c0-1.1-0.9-2-2-2h-0.9C60.6,26.7,59.7,27.6,59.7,28.7 L59.7,28.7z" }), /* @__PURE__ */ A.createElement("path", { d: "M52.7,23.6V63c0,1.1,0.9,2,2,2h1.1c1.1,0,2-0.9,2-2l-0.1-39.4c0-1.1-0.9-2-2-2h-0.9C53.6,21.6,52.7,22.5,52.7,23.6 L52.7,23.6z" }), /* @__PURE__ */ A.createElement("path", { d: "M66.8,38.6v24.3c0,1.1,0.9,2,2,2h1.1c1.1,0,2-0.9,2-2l-0.1-24.3c0-1.1-0.9-2-2-2h-0.9C67.7,36.6,66.8,37.5,66.8,38.6 L66.8,38.6z" }), /* @__PURE__ */ A.createElement("path", { d: "M73.8,55.3V63c0,1.1,0.9,2,2,2h1.1c1.1,0,2-0.9,2-2l-0.1-7.7c0-1.1-0.9-2-2-2h-0.9C74.7,53.3,73.8,54.2,73.8,55.3L73.8,55.3 z" }), /* @__PURE__ */ A.createElement("path", { d: "M24.7,55.3V63c0,1.1,0.9,2,2,2h1.1c1.1,0,2-0.9,2-2l-0.1-7.7c0-1.1-0.9-2-2-2h-0.9C25.6,53.3,24.7,54.2,24.7,55.3L24.7,55.3 z" }), /* @__PURE__ */ A.createElement("path", { d: "M17.6,61.5V63c0,1.1,0.9,2,2,2h1.1c1.1,0,2-0.9,2-2v-1.6c0-1.1-1-1.9-2.1-1.9h-0.9C18.5,59.5,17.6,60.4,17.6,61.5L17.6,61.5 z" }), /* @__PURE__ */ A.createElement("path", { d: "M80.8,61.5V63c0,1.1,0.9,2,2,2h1.1c1.1,0,2-0.9,2-2v-1.6c0-1.1-1-1.9-2.1-1.9h-0.9C81.7,59.5,80.8,60.4,80.8,61.5L80.8,61.5 z" })), Pi = () => {
  const { config: o, tempConfig: d } = A.useContext(ct), s = A.useContext(Et), C = ["General", , "Charts", "Maps"], b = (nn) => {
    const h = nn.target.files[0], pn = new FileReader();
    pn.onload = (M) => {
      const un = M.target.result;
      try {
        const Nn = JSON.parse(un);
        s({ type: "EDITOR_SET_CONFIG", payload: Nn }), s({ type: "EDITOR_SET_GLOBALACTIVE", payload: 1 });
      } catch {
        alert("Invalid JSON");
      }
    }, pn.readAsText(h);
  }, P = (nn) => {
    let h = {};
    switch (nn.category) {
      case "Charts": {
        const pn = nn.subType, M = nn.visualizationSubType ? nn.visualizationSubType : "regular";
        h = {
          ...nn,
          visualizationType: pn,
          visualizationSubType: M,
          newViz: !0,
          datasets: {}
        };
        break;
      }
      case "General": {
        const pn = nn.subType;
        h = { ...nn, newViz: !0, datasets: {}, visualizationType: pn };
        break;
      }
      case "Maps": {
        const pn = nn.subType;
        h = {
          ...nn,
          newViz: !0,
          datasets: {},
          type: "map"
        }, h.general = {
          geoType: pn
        };
        break;
      }
    }
    return h;
  }, y = (nn) => {
    const h = P(nn);
    s({ type: "EDITOR_SET_CONFIG", payload: { ...o, ...h, activeVizButtonID: nn.id } }), s({ type: "EDITOR_SET_GLOBALACTIVE", payload: 1 });
  }, B = (nn) => {
    const { label: h, icon: pn, id: M } = nn, un = M === (o == null ? void 0 : o.activeVizButtonID) || 0, Nn = () => {
      y(nn);
    };
    return d && s({ type: "EDITOR_SAVE", payload: d }), /* @__PURE__ */ m.createElement("button", { className: un ? "active" : "", onClick: Nn, "aria-label": h }, pn, /* @__PURE__ */ m.createElement("span", { className: "mt-1" }, h));
  };
  return /* @__PURE__ */ m.createElement("div", { className: "choose-vis" }, /* @__PURE__ */ m.createElement(
    "a",
    {
      href: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/index.html",
      target: "_blank",
      rel: "noopener noreferrer",
      className: "guidance-link",
      style: { marginTop: 0, marginBottom: "2rem" }
    },
    /* @__PURE__ */ m.createElement("div", null, /* @__PURE__ */ m.createElement("p", null, "For more information on the types of data visualizations in the WCMS, including examples and best practices,", " ", /* @__PURE__ */ m.createElement("u", null, "see the WCMS Features Gallery"), "."))
  ), C.map((nn) => /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement("div", { className: "heading-2" }, nn), /* @__PURE__ */ m.createElement("ul", { className: `visualization-grid category_${nn.toLowerCase()}` }, Ii.filter((h) => h.category === nn).map((h, pn) => /* @__PURE__ */ m.createElement("li", { key: pn }, /* @__PURE__ */ m.createElement(De, { position: "right" }, /* @__PURE__ */ m.createElement(De.Target, null, /* @__PURE__ */ m.createElement(B, { ...h })), /* @__PURE__ */ m.createElement(De.Content, null, h.content))))))), /* @__PURE__ */ m.createElement("hr", null), /* @__PURE__ */ m.createElement("div", { className: "form-group" }, /* @__PURE__ */ m.createElement("label", { htmlFor: "uploadConfig" }, "Upload Custom Configuration", " ", /* @__PURE__ */ m.createElement(De, { style: { textTransform: "none" } }, /* @__PURE__ */ m.createElement(De.Target, null, /* @__PURE__ */ m.createElement(fa, { display: "warningCircle", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ m.createElement(De.Content, null, /* @__PURE__ */ m.createElement("p", null, "Make sure you have properly validated the configuration before uploading.")))), /* @__PURE__ */ m.createElement(
    "input",
    {
      type: "file",
      accept: ".txt,.json",
      className: "form-control-file",
      id: "uploadConfig",
      onChange: b
    }
  )));
}, Ii = [
  {
    id: 1,
    category: "Charts",
    label: "Bar",
    type: "chart",
    subType: "Bar",
    orientation: "vertical",
    barThickness: "0.37",
    visualizationSubType: "regular",
    xAxis: {
      type: "categorical",
      size: 75,
      maxTickRotation: 45,
      labelOffset: 0
    },
    icon: /* @__PURE__ */ m.createElement(Pr, null),
    content: "Use bars to show comparisons between data categories."
  },
  {
    id: 2,
    category: "Charts",
    label: "Epi Chart",
    type: "chart",
    subType: "Bar",
    orientation: "vertical",
    barThickness: "0.95",
    isResponsiveTicks: !0,
    visualizationSubType: "regular",
    xAxis: {
      type: "date-time",
      size: 0,
      labelOffset: 0,
      maxTickRotation: 45
    },
    icon: /* @__PURE__ */ m.createElement(Ti, null),
    content: "Use bars to show comparisons between data categories."
  },
  {
    id: 3,
    category: "Charts",
    label: "Combo Chart",
    type: "chart",
    subType: "Combo",
    orientation: "vertical",
    icon: /* @__PURE__ */ m.createElement(Ni, null),
    content: "Use bars to show comparisons between data categories."
  },
  {
    id: 4,
    category: "Charts",
    label: "Line",
    type: "chart",
    subType: "Line",
    orientation: "vertical",
    icon: /* @__PURE__ */ m.createElement(Ir, null),
    content: "Present one or more data trends over time."
  },
  {
    id: 5,
    category: "Charts",
    label: "Paired Bar",
    type: "chart",
    subType: "Paired Bar",
    orientation: "horizontal",
    icon: /* @__PURE__ */ m.createElement(Si, null),
    content: "Use paired bars to show comparisons between two different data categories."
  },
  {
    id: 6,
    category: "Charts",
    label: "Area Chart",
    type: "chart",
    subType: "Area Chart",
    orientation: "vertical",
    icon: /* @__PURE__ */ m.createElement(Ai, null),
    content: "Display an area chart to visualize quantities over time."
  },
  {
    id: 7,
    category: "Charts",
    label: "Forecast Chart",
    type: "chart",
    subType: "Forecasting",
    orientation: "vertical",
    icon: /* @__PURE__ */ m.createElement(Za, null),
    content: "Display a forecasting chart to predict future data trends."
  },
  {
    id: 8,
    category: "Charts",
    label: "Scatter Plot",
    type: "chart",
    subType: "Scatter Plot",
    orientation: "vertical",
    icon: /* @__PURE__ */ m.createElement(Mi, null),
    content: "Display a scatter plot to explore relationships between numeric variables."
  },
  {
    id: 9,
    category: "Charts",
    label: "Box Plot",
    type: "chart",
    subType: "Box Plot",
    orientation: "vertical",
    icon: /* @__PURE__ */ m.createElement(bi, null),
    content: "Display a box plot to visualize the distribution of numerical data through quartiles."
  },
  {
    id: 10,
    category: "Charts",
    label: "Sankey Diagram",
    type: "chart",
    subType: "Sankey",
    orientation: "vertical",
    icon: /* @__PURE__ */ m.createElement(Lr, null),
    content: "Display a sankey diagram"
  },
  {
    id: 11,
    category: "Charts",
    label: "Forecast Chart",
    type: "chart",
    subType: "Forecasting",
    orientation: "vertical",
    icon: /* @__PURE__ */ m.createElement(Za, null),
    content: "Display a forecasting chart"
  },
  {
    id: 12,
    category: "Charts",
    label: "Horizontal Bar (Stacked)",
    type: "chart",
    subType: "Bar",
    visualizationSubType: "stacked",
    orientation: "horizontal",
    icon: /* @__PURE__ */ m.createElement(wi, null),
    content: "Use bars to show comparisons between data categories."
  },
  {
    id: 13,
    category: "Charts",
    label: "Pie",
    type: "chart",
    subType: "Pie",
    orientation: "Pie",
    icon: /* @__PURE__ */ m.createElement(kr, null),
    content: "Present the numerical proportions of a data series."
  },
  {
    id: 14,
    category: "Charts",
    label: "Deviation Bar",
    type: "chart",
    subType: "Deviation Bar",
    orientation: "Pie",
    icon: /* @__PURE__ */ m.createElement(Ri, null),
    content: "Use deviation bars to display how individual values differ from a target"
  },
  {
    id: 15,
    category: "General",
    label: "Dashboard",
    type: "dashboard",
    subType: null,
    orientation: null,
    icon: /* @__PURE__ */ m.createElement(hi, null),
    content: "Present multiple data visualizations with shared filter controls."
  },
  {
    id: 16,
    category: "General",
    label: "Data Bite",
    type: "data-bite",
    subType: null,
    orientation: null,
    icon: /* @__PURE__ */ m.createElement(Er, null),
    content: "Highlight a single aggregated value (e.g., sum or median)."
  },
  {
    id: 17,
    category: "General",
    label: "Waffle Chart",
    type: "waffle-chart",
    subType: "Waffle",
    orientation: null,
    icon: /* @__PURE__ */ m.createElement(Or, null),
    content: "Highlight a piece of data in relationship to a data set."
  },
  {
    id: 18,
    category: "General",
    label: "Gauge Chart",
    type: "waffle-chart",
    subType: "Gauge",
    orientation: null,
    icon: /* @__PURE__ */ m.createElement(Di, null),
    content: `Specify the calculation of a single data point (such as a percentage value) and present it on a horizontal
              scale.`
  },
  {
    id: 19,
    category: "Maps",
    label: "United States (State- or County-Level)",
    type: "map",
    subType: "us",
    icon: /* @__PURE__ */ m.createElement(ka, null),
    content: "Present a U.S. choropleth map at state or county level.",
    position: "right"
  },
  {
    id: 20,
    category: "Maps",
    label: "United States (HHS Regions)",
    type: "map",
    subType: "us-region",
    icon: /* @__PURE__ */ m.createElement(Wr, null),
    content: "Present a U.S. choropleth map at state or county level.",
    position: "right"
  },
  {
    id: 21,
    category: "Maps",
    label: "World",
    type: "map",
    subType: "world",
    icon: /* @__PURE__ */ m.createElement(Br, null),
    content: "Present a choropleth map of the world."
  },
  {
    id: 22,
    category: "Maps",
    label: "U.S. State",
    type: "map",
    subType: "single-state",
    icon: /* @__PURE__ */ m.createElement(Fr, null),
    content: "Present a choropleth map of an individual U.S. state."
  },
  {
    id: 23,
    category: "Maps",
    label: "U.S. Geocode",
    type: "map",
    subType: "us-county",
    generalType: "us-geocode",
    icon: /* @__PURE__ */ m.createElement(ka, null),
    content: "United States GeoCode"
  }
];
function Li({ containerEl: o }) {
  const { config: d, setTempConfig: s, hostname: C, isDebug: b } = A.useContext(ct);
  let { type: P } = d;
  switch (P) {
    case "map":
      return /* @__PURE__ */ m.createElement(lt, { component: "CdcMap" }, /* @__PURE__ */ m.createElement(
        xr,
        {
          isEditor: !0,
          isDebug: b,
          config: d,
          hostname: C,
          setConfig: s,
          containerEl: o
        }
      ));
    case "waffle-chart":
      if (d.visualizationType === "Waffle" || d.visualizationType === "Gauge")
        return /* @__PURE__ */ m.createElement(lt, { component: "CdcWaffleChart" }, /* @__PURE__ */ m.createElement(Kr, { isEditor: !0, isDebug: b, config: d, setConfig: s }));
      break;
    case "chart":
      return /* @__PURE__ */ m.createElement(lt, { component: "CdcChart" }, /* @__PURE__ */ m.createElement(Gr, { isEditor: !0, isDebug: b, config: d }));
    case "dashboard":
      return /* @__PURE__ */ m.createElement(lt, { component: "CdcDashboard" }, /* @__PURE__ */ m.createElement(Mr, { isEditor: !0, isDebug: b }));
    case "data-bite":
      return /* @__PURE__ */ m.createElement(lt, { component: "CdcDashboard" }, /* @__PURE__ */ m.createElement(Vr, { isEditor: !0, isDebug: b, config: d, setConfig: s }));
    case "markup-include":
      return /* @__PURE__ */ m.createElement(lt, { component: "CdcDashboard" }, /* @__PURE__ */ m.createElement(Nr, { isEditor: !0, isDebug: b, config: d, setConfig: s }));
    default:
      return /* @__PURE__ */ m.createElement("p", null, "No visualization type selected.");
  }
}
const ki = (o) => {
  if (o !== null) {
    let d = ur(o);
    const s = JSON.stringify(d), C = new CustomEvent("updateVizConfig", { detail: s, bubbles: !0 });
    window.dispatchEvent(C);
  }
}, Ei = (o) => {
  var d;
  if (o.type === "dashboard") {
    let s = !1, C;
    if (o.data || o.dataUrl) {
      s = !0, C = { ...o };
      const b = o.dataFileName || "dataset-1";
      C.datasets = {}, C.datasets[b] = {
        ...ga.pick(o, ["data", "dataUrl", "dataFileSourceType"]),
        dataFileName: b
      }, Object.keys(C.visualizations).forEach((y) => {
        const B = { dataKey: b, ...ga.pick(C, "dataDescription", "formattedData") };
        C.visualizations[y] = { ...C.visualizations[y], ...B };
      }), C = { ...C, ...{ data: [], dataUrl: "", dataFileName: "", dataFileSourceType: "", dataDescription: [], formattedData: [] } };
    }
    if ((d = o.dashboard) != null && d.filters) {
      s = !0, C = { ...o };
      const b = { ...C.dashboard };
      b.sharedFilters || (b.sharedFilters = []);
      const P = b.filters.map((y) => ({ ...y, key: y.label, showDropdown: !0, usedBy: Object.keys(C.visualizations) }));
      b.sharedFilters = [...b.sharedFilters, ...P], C.dashboard = { ...b, filters: void 0 };
    }
    if (s)
      return C;
  }
  return o;
};
const Oi = (o, d) => {
  switch (d.type) {
    case "EDITOR_SAVE":
      return { ...o, config: d.payload, tempConfig: null };
    case "EDITOR_SET_CONFIG":
      return { ...o, config: d.payload };
    case "EDITOR_TEMP_SAVE":
      return { ...o, tempConfig: d.payload };
    case "EDITOR_SET_ERRORS":
      return { ...o, errors: d.payload };
    case "EDITOR_SET_VIEWPORT":
      return { ...o, currentViewport: d.payload };
    case "EDITOR_SET_GLOBALACTIVE":
      return { ...o, globalActive: d.payload };
    default:
      return o;
  }
}, Bi = br(Oi), Fi = ({ config: o, hostname: d, containerEl: s, sharepath: C, isDebug: b }) => {
  const P = A.useMemo(() => {
    let un = 0;
    return (o != null && o.data || o != null && o.dataUrl || o != null && o.originalFormattedData || o != null && o.datasets) && (o != null && o.type) && (un = 2), { config: Ei(o || { newViz: !0, errors: [], currentViewport: "lg" }), errors: [], currentViewport: "lg", globalActive: un, sharepath: C, isDebug: b, hostname: d };
  }, [o]);
  A.useEffect(() => {
    var un;
    Ia && ((un = Ia) == null || un.init());
  }, []);
  const [y, B] = A.useReducer(Bi, P), nn = (un) => {
    ki(ga.cloneDeep(un)), B({ type: "EDITOR_TEMP_SAVE", payload: un });
  }, h = new Sr((un) => {
    const Nn = un[0], { width: Cn } = Nn.contentRect, fn = wr(Cn);
    y.currentViewport !== fn && B({ type: "EDITOR_SET_VIEWPORT", payload: fn });
  }), pn = A.useCallback((un) => {
    un !== null && h.observe(un);
  }, []);
  A.useEffect(() => {
    let un = ur(y.config);
    const Nn = JSON.stringify(un), Cn = new CustomEvent("updateVizConfig", { detail: Nn });
    window.dispatchEvent(Cn);
  }, [y.config]);
  const M = A.useMemo(() => {
    y.config.type !== "dashboard" ? y.config.formattedData : y.config.datasets && Object.keys(y.config.datasets).length > 0;
  }, [y.config.type, y.config.datasets]);
  return /* @__PURE__ */ m.createElement(Ar, null, /* @__PURE__ */ m.createElement(ct.Provider, { value: { ...y, setTempConfig: nn } }, /* @__PURE__ */ m.createElement(Et.Provider, { value: B }, /* @__PURE__ */ m.createElement("div", { className: `cdc-open-viz-module cdc-editor ${y.currentViewport}`, ref: pn }, /* @__PURE__ */ m.createElement(Gu, { className: "top-level" }, /* @__PURE__ */ m.createElement(kt, { title: "1. Choose Visualization Type", className: "choose-type" }, /* @__PURE__ */ m.createElement(Pi, null)), /* @__PURE__ */ m.createElement(kt, { title: "2. Import Data", className: "data-designer", disableRule: !y.config.type }, /* @__PURE__ */ m.createElement(vi, null)), /* @__PURE__ */ m.createElement(kt, { title: "3. Configure", className: "configure", disableRule: M }, /* @__PURE__ */ m.createElement(Li, { containerEl: s })))))), /* @__PURE__ */ m.createElement(Dr, null));
}, Hi = (o) => new Promise((d) => setTimeout(d, o)), W0 = {
  title: "Components/Pages/CdcEditor",
  component: Fi
}, Ro = {
  args: {
    config: {}
  }
}, No = {
  args: {},
  parameters: {},
  play: async ({
    canvasElement: o
  }) => {
    const d = qr(o), s = zr.setup();
    await Hi(1e3);
    const C = d.getByText("United States (State- or County-Level)");
    await s.click(C);
    const b = d.getByText("United States: County Sample Data");
    await s.click(b);
  }
};
var Qa, nr, er;
Ro.parameters = {
  ...Ro.parameters,
  docs: {
    ...(Qa = Ro.parameters) == null ? void 0 : Qa.docs,
    source: {
      originalSource: `{
  args: {
    config: {}
  }
}`,
      ...(er = (nr = Ro.parameters) == null ? void 0 : nr.docs) == null ? void 0 : er.source
    }
  }
};
var tr, or, ar;
No.parameters = {
  ...No.parameters,
  docs: {
    ...(tr = No.parameters) == null ? void 0 : tr.docs,
    source: {
      originalSource: `{
  args: {},
  parameters: {},
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const user = userEvent.setup();
    await sleep(1000);
    const mapButton = canvas.getByText('United States (State- or County-Level)');
    await user.click(mapButton);
    const sampleData = canvas.getByText('United States: County Sample Data');
    await user.click(sampleData);
  }
}`,
      ...(ar = (or = No.parameters) == null ? void 0 : or.docs) == null ? void 0 : ar.source
    }
  }
};
const x0 = ["DefaultEditor", "PreviewTable"];
export {
  Ro as DefaultEditor,
  No as PreviewTable,
  x0 as __namedExportsOrder,
  W0 as default
};
