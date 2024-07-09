import { r as Y, R as l } from "./storybook-index-45401197.es.js";
import { i as ya, b as So, a as gr, g as fr } from "./storybook-isSolr-cb863e7a.es.js";
import { C as yt, E as Pt, y as pr, o as mr, M as Mr, d as vr, m as hr, I as Lr, a as wr, b as Aa, G as Sr, O as Nr } from "./storybook-CdcDashboard-deb4d658.es.js";
import { P as $n } from "./storybook-index-43433e35.es.js";
import { U as Dr } from "./storybook-usa-region-graphic-b10bed44.es.js";
import { a as Tr } from "./storybook-axios-01170075.es.js";
import { D as Ar } from "./storybook-DataTransform-e292f51b.es.js";
import { c as nr } from "./storybook-_commonjsHelpers-c5d32002.es.js";
import { f as ba } from "./storybook-fetchRemoteData-8fd8b50f.es.js";
import { a as Ia, C as Ra, D as br, b as Ir, B as Rr, L as Er, P as jr, S as kr, U as Ea, c as Pr, A as Or } from "./storybook-Icon-736fb775.es.js";
import { D as xr } from "./storybook-DataDesigner-a81779cb.es.js";
import { T as an } from "./storybook-Tooltip-edc0f7ab.es.js";
import { E as lt } from "./storybook-Loading-f180d060.es.js";
import { _ as kt } from "./storybook-lodash-c15d8e1c.es.js";
import "./storybook-Filters-604223ce.es.js";
import "./storybook-index-633d712d.es.js";
import "./storybook-extends-70f3d2a3.es.js";
import "./storybook-tiny-invariant-9f3340e2.es.js";
import "./storybook-Button-d74e310e.es.js";
import "./storybook-MultiSelect-5b27422b.es.js";
import "./storybook-index-e5bf02db.es.js";
import "./storybook-DataTableEditor-6a05ff32.es.js";
import "./storybook-useDebounce-78f40efd.es.js";
import "./storybook-InputSelect-20478396.es.js";
import "./storybook-index-4ed993c7.es.js";
import "./storybook-DataTable-c925ca2f.es.js";
import "./storybook-papaparse.min-b07ddc33.es.js";
import "./storybook-year-bedc547d.es.js";
import "./storybook-numberFromString-24623c03.es.js";
import "./storybook-Table-12c53202.es.js";
import "./storybook-index-e502eacf.es.js";
import "./storybook-updateFieldFactory-c006040a.es.js";
import "./storybook-footnoteSymbols-ee77e3f4.es.js";
import "./storybook-Footnotes-6f80714a.es.js";
import "./storybook-coveUpdateWorker-785760a1.es.js";
import "./storybook-jsx-runtime-36872362.es.js";
import "./storybook-string-7df1b381.es.js";
import "./storybook-Card-6750b07b.es.js";
function ct(o, g, y, C) {
  function S(b) {
    return b instanceof y ? b : new y(function(c) {
      c(b);
    });
  }
  return new (y || (y = Promise))(function(b, c) {
    function k(Rn) {
      try {
        w(C.next(Rn));
      } catch (L) {
        c(L);
      }
    }
    function Tn(Rn) {
      try {
        w(C.throw(Rn));
      } catch (L) {
        c(L);
      }
    }
    function w(Rn) {
      Rn.done ? b(Rn.value) : S(Rn.value).then(k, Tn);
    }
    w((C = C.apply(o, g || [])).next());
  });
}
function Ct(o, g) {
  var y = { label: 0, sent: function() {
    if (b[0] & 1)
      throw b[1];
    return b[1];
  }, trys: [], ops: [] }, C, S, b, c;
  return c = { next: k(0), throw: k(1), return: k(2) }, typeof Symbol == "function" && (c[Symbol.iterator] = function() {
    return this;
  }), c;
  function k(w) {
    return function(Rn) {
      return Tn([w, Rn]);
    };
  }
  function Tn(w) {
    if (C)
      throw new TypeError("Generator is already executing.");
    for (; c && (c = 0, w[0] && (y = 0)), y; )
      try {
        if (C = 1, S && (b = w[0] & 2 ? S.return : w[0] ? S.throw || ((b = S.return) && b.call(S), 0) : S.next) && !(b = b.call(S, w[1])).done)
          return b;
        switch (S = 0, b && (w = [w[0] & 2, b.value]), w[0]) {
          case 0:
          case 1:
            b = w;
            break;
          case 4:
            return y.label++, { value: w[1], done: !1 };
          case 5:
            y.label++, S = w[1], w = [0];
            continue;
          case 7:
            w = y.ops.pop(), y.trys.pop();
            continue;
          default:
            if (b = y.trys, !(b = b.length > 0 && b[b.length - 1]) && (w[0] === 6 || w[0] === 2)) {
              y = 0;
              continue;
            }
            if (w[0] === 3 && (!b || w[1] > b[0] && w[1] < b[3])) {
              y.label = w[1];
              break;
            }
            if (w[0] === 6 && y.label < b[1]) {
              y.label = b[1], b = w;
              break;
            }
            if (b && y.label < b[2]) {
              y.label = b[2], y.ops.push(w);
              break;
            }
            b[2] && y.ops.pop(), y.trys.pop();
            continue;
        }
        w = g.call(o, y);
      } catch (Rn) {
        w = [6, Rn], S = 0;
      } finally {
        C = b = 0;
      }
    if (w[0] & 5)
      throw w[1];
    return { value: w[0] ? w[1] : void 0, done: !0 };
  }
}
function Br(o, g) {
  var y = typeof Symbol == "function" && o[Symbol.iterator];
  if (!y)
    return o;
  var C = y.call(o), S, b = [], c;
  try {
    for (; (g === void 0 || g-- > 0) && !(S = C.next()).done; )
      b.push(S.value);
  } catch (k) {
    c = { error: k };
  } finally {
    try {
      S && !S.done && (y = C.return) && y.call(C);
    } finally {
      if (c)
        throw c.error;
    }
  }
  return b;
}
function Fr() {
  for (var o = [], g = 0; g < arguments.length; g++)
    o = o.concat(Br(arguments[g]));
  return o;
}
var zr = /* @__PURE__ */ new Map([
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
function Ot(o, g) {
  var y = Wr(o);
  if (typeof y.path != "string") {
    var C = o.webkitRelativePath;
    Object.defineProperty(y, "path", {
      value: typeof g == "string" ? g : typeof C == "string" && C.length > 0 ? C : o.name,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return y;
}
function Wr(o) {
  var g = o.name, y = g && g.lastIndexOf(".") !== -1;
  if (y && !o.type) {
    var C = g.split(".").pop().toLowerCase(), S = zr.get(C);
    S && Object.defineProperty(o, "type", {
      value: S,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return o;
}
var Gr = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  "Thumbs.db"
  // Windows
];
function Hr(o) {
  return ct(this, void 0, void 0, function() {
    return Ct(this, function(g) {
      return bo(o) && Yr(o) ? [2, Ur(o.dataTransfer, o.type)] : Vr(o) ? [2, Kr(o)] : Array.isArray(o) && o.every(function(y) {
        return "getFile" in y && typeof y.getFile == "function";
      }) ? [2, qr(o)] : [2, []];
    });
  });
}
function Yr(o) {
  return bo(o.dataTransfer);
}
function Vr(o) {
  return bo(o) && bo(o.target);
}
function bo(o) {
  return typeof o == "object" && o !== null;
}
function Kr(o) {
  return fa(o.target.files).map(function(g) {
    return Ot(g);
  });
}
function qr(o) {
  return ct(this, void 0, void 0, function() {
    var g;
    return Ct(this, function(y) {
      switch (y.label) {
        case 0:
          return [4, Promise.all(o.map(function(C) {
            return C.getFile();
          }))];
        case 1:
          return g = y.sent(), [2, g.map(function(C) {
            return Ot(C);
          })];
      }
    });
  });
}
function Ur(o, g) {
  return ct(this, void 0, void 0, function() {
    var y, C;
    return Ct(this, function(S) {
      switch (S.label) {
        case 0:
          return o === null ? [2, []] : o.items ? (y = fa(o.items).filter(function(b) {
            return b.kind === "file";
          }), g !== "drop" ? [2, y] : [4, Promise.all(y.map(Xr))]) : [3, 2];
        case 1:
          return C = S.sent(), [2, ja(er(C))];
        case 2:
          return [2, ja(fa(o.files).map(function(b) {
            return Ot(b);
          }))];
      }
    });
  });
}
function ja(o) {
  return o.filter(function(g) {
    return Gr.indexOf(g.name) === -1;
  });
}
function fa(o) {
  if (o === null)
    return [];
  for (var g = [], y = 0; y < o.length; y++) {
    var C = o[y];
    g.push(C);
  }
  return g;
}
function Xr(o) {
  if (typeof o.webkitGetAsEntry != "function")
    return ka(o);
  var g = o.webkitGetAsEntry();
  return g && g.isDirectory ? tr(g) : ka(o);
}
function er(o) {
  return o.reduce(function(g, y) {
    return Fr(g, Array.isArray(y) ? er(y) : [y]);
  }, []);
}
function ka(o) {
  var g = o.getAsFile();
  if (!g)
    return Promise.reject(o + " is not a File");
  var y = Ot(g);
  return Promise.resolve(y);
}
function _r(o) {
  return ct(this, void 0, void 0, function() {
    return Ct(this, function(g) {
      return [2, o.isDirectory ? tr(o) : Jr(o)];
    });
  });
}
function tr(o) {
  var g = o.createReader();
  return new Promise(function(y, C) {
    var S = [];
    function b() {
      var c = this;
      g.readEntries(function(k) {
        return ct(c, void 0, void 0, function() {
          var Tn, w, Rn;
          return Ct(this, function(L) {
            switch (L.label) {
              case 0:
                if (k.length)
                  return [3, 5];
                L.label = 1;
              case 1:
                return L.trys.push([1, 3, , 4]), [4, Promise.all(S)];
              case 2:
                return Tn = L.sent(), y(Tn), [3, 4];
              case 3:
                return w = L.sent(), C(w), [3, 4];
              case 4:
                return [3, 6];
              case 5:
                Rn = Promise.all(k.map(_r)), S.push(Rn), b(), L.label = 6;
              case 6:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, function(k) {
        C(k);
      });
    }
    b();
  });
}
function Jr(o) {
  return ct(this, void 0, void 0, function() {
    return Ct(this, function(g) {
      return [2, new Promise(function(y, C) {
        o.file(function(S) {
          var b = Ot(S, o.fullPath);
          y(b);
        }, function(S) {
          C(S);
        });
      })];
    });
  });
}
var Qr = function(o, g) {
  if (o && g) {
    var y = Array.isArray(g) ? g : g.split(","), C = o.name || "", S = (o.type || "").toLowerCase(), b = S.replace(/\/.*$/, "");
    return y.some(function(c) {
      var k = c.trim().toLowerCase();
      return k.charAt(0) === "." ? C.toLowerCase().endsWith(k) : k.endsWith("/*") ? b === k.replace(/\/.*$/, "") : S === k;
    });
  }
  return !0;
};
function Pa(o, g) {
  var y = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var C = Object.getOwnPropertySymbols(o);
    g && (C = C.filter(function(S) {
      return Object.getOwnPropertyDescriptor(o, S).enumerable;
    })), y.push.apply(y, C);
  }
  return y;
}
function Oa(o) {
  for (var g = 1; g < arguments.length; g++) {
    var y = arguments[g] != null ? arguments[g] : {};
    g % 2 ? Pa(Object(y), !0).forEach(function(C) {
      or(o, C, y[C]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(y)) : Pa(Object(y)).forEach(function(C) {
      Object.defineProperty(o, C, Object.getOwnPropertyDescriptor(y, C));
    });
  }
  return o;
}
function or(o, g, y) {
  return g in o ? Object.defineProperty(o, g, { value: y, enumerable: !0, configurable: !0, writable: !0 }) : o[g] = y, o;
}
function xa(o, g) {
  return eu(o) || nu(o, g) || $r(o, g) || Zr();
}
function Zr() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $r(o, g) {
  if (o) {
    if (typeof o == "string")
      return Ba(o, g);
    var y = Object.prototype.toString.call(o).slice(8, -1);
    if (y === "Object" && o.constructor && (y = o.constructor.name), y === "Map" || y === "Set")
      return Array.from(o);
    if (y === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(y))
      return Ba(o, g);
  }
}
function Ba(o, g) {
  (g == null || g > o.length) && (g = o.length);
  for (var y = 0, C = new Array(g); y < g; y++)
    C[y] = o[y];
  return C;
}
function nu(o, g) {
  var y = o == null ? null : typeof Symbol < "u" && o[Symbol.iterator] || o["@@iterator"];
  if (y != null) {
    var C = [], S = !0, b = !1, c, k;
    try {
      for (y = y.call(o); !(S = (c = y.next()).done) && (C.push(c.value), !(g && C.length === g)); S = !0)
        ;
    } catch (Tn) {
      b = !0, k = Tn;
    } finally {
      try {
        !S && y.return != null && y.return();
      } finally {
        if (b)
          throw k;
      }
    }
    return C;
  }
}
function eu(o) {
  if (Array.isArray(o))
    return o;
}
var tu = "file-invalid-type", ou = "file-too-large", au = "file-too-small", ru = "too-many-files", uu = function(g) {
  g = Array.isArray(g) && g.length === 1 ? g[0] : g;
  var y = Array.isArray(g) ? "one of ".concat(g.join(", ")) : g;
  return {
    code: tu,
    message: "File type must be ".concat(y)
  };
}, Fa = function(g) {
  return {
    code: ou,
    message: "File is larger than ".concat(g, " ").concat(g === 1 ? "byte" : "bytes")
  };
}, za = function(g) {
  return {
    code: au,
    message: "File is smaller than ".concat(g, " ").concat(g === 1 ? "byte" : "bytes")
  };
}, iu = {
  code: ru,
  message: "Too many files"
};
function ar(o, g) {
  var y = o.type === "application/x-moz-file" || Qr(o, g);
  return [y, y ? null : uu(g)];
}
function rr(o, g, y) {
  if (Rt(o.size))
    if (Rt(g) && Rt(y)) {
      if (o.size > y)
        return [!1, Fa(y)];
      if (o.size < g)
        return [!1, za(g)];
    } else {
      if (Rt(g) && o.size < g)
        return [!1, za(g)];
      if (Rt(y) && o.size > y)
        return [!1, Fa(y)];
    }
  return [!0, null];
}
function Rt(o) {
  return o != null;
}
function lu(o) {
  var g = o.files, y = o.accept, C = o.minSize, S = o.maxSize, b = o.multiple, c = o.maxFiles;
  return !b && g.length > 1 || b && c >= 1 && g.length > c ? !1 : g.every(function(k) {
    var Tn = ar(k, y), w = xa(Tn, 1), Rn = w[0], L = rr(k, C, S), un = xa(L, 1), An = un[0];
    return Rn && An;
  });
}
function Io(o) {
  return typeof o.isPropagationStopped == "function" ? o.isPropagationStopped() : typeof o.cancelBubble < "u" ? o.cancelBubble : !1;
}
function No(o) {
  return o.dataTransfer ? Array.prototype.some.call(o.dataTransfer.types, function(g) {
    return g === "Files" || g === "application/x-moz-file";
  }) : !!o.target && !!o.target.files;
}
function Wa(o) {
  o.preventDefault();
}
function su(o) {
  return o.indexOf("MSIE") !== -1 || o.indexOf("Trident/") !== -1;
}
function yu(o) {
  return o.indexOf("Edge/") !== -1;
}
function cu() {
  var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.navigator.userAgent;
  return su(o) || yu(o);
}
function ke() {
  for (var o = arguments.length, g = new Array(o), y = 0; y < o; y++)
    g[y] = arguments[y];
  return function(C) {
    for (var S = arguments.length, b = new Array(S > 1 ? S - 1 : 0), c = 1; c < S; c++)
      b[c - 1] = arguments[c];
    return g.some(function(k) {
      return !Io(C) && k && k.apply(void 0, [C].concat(b)), Io(C);
    });
  };
}
function Ga() {
  return "showOpenFilePicker" in window;
}
function Cu(o) {
  return o = typeof o == "string" ? o.split(",") : o, [{
    description: "everything",
    // TODO: Need to handle filtering more elegantly than this!
    accept: Array.isArray(o) ? o.filter(function(g) {
      return g === "audio/*" || g === "video/*" || g === "image/*" || g === "text/*" || /\w+\/[-+.\w]+/g.test(g);
    }).reduce(function(g, y) {
      return Oa(Oa({}, g), {}, or({}, y, []));
    }, {}) : {}
  }];
}
var du = ["children"], gu = ["open"], fu = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"], pu = ["refKey", "onChange", "onClick"];
function mu(o) {
  return hu(o) || vu(o) || ur(o) || Mu();
}
function Mu() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function vu(o) {
  if (typeof Symbol < "u" && o[Symbol.iterator] != null || o["@@iterator"] != null)
    return Array.from(o);
}
function hu(o) {
  if (Array.isArray(o))
    return pa(o);
}
function ca(o, g) {
  return Su(o) || wu(o, g) || ur(o, g) || Lu();
}
function Lu() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ur(o, g) {
  if (o) {
    if (typeof o == "string")
      return pa(o, g);
    var y = Object.prototype.toString.call(o).slice(8, -1);
    if (y === "Object" && o.constructor && (y = o.constructor.name), y === "Map" || y === "Set")
      return Array.from(o);
    if (y === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(y))
      return pa(o, g);
  }
}
function pa(o, g) {
  (g == null || g > o.length) && (g = o.length);
  for (var y = 0, C = new Array(g); y < g; y++)
    C[y] = o[y];
  return C;
}
function wu(o, g) {
  var y = o == null ? null : typeof Symbol < "u" && o[Symbol.iterator] || o["@@iterator"];
  if (y != null) {
    var C = [], S = !0, b = !1, c, k;
    try {
      for (y = y.call(o); !(S = (c = y.next()).done) && (C.push(c.value), !(g && C.length === g)); S = !0)
        ;
    } catch (Tn) {
      b = !0, k = Tn;
    } finally {
      try {
        !S && y.return != null && y.return();
      } finally {
        if (b)
          throw k;
      }
    }
    return C;
  }
}
function Su(o) {
  if (Array.isArray(o))
    return o;
}
function Ha(o, g) {
  var y = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var C = Object.getOwnPropertySymbols(o);
    g && (C = C.filter(function(S) {
      return Object.getOwnPropertyDescriptor(o, S).enumerable;
    })), y.push.apply(y, C);
  }
  return y;
}
function ee(o) {
  for (var g = 1; g < arguments.length; g++) {
    var y = arguments[g] != null ? arguments[g] : {};
    g % 2 ? Ha(Object(y), !0).forEach(function(C) {
      ma(o, C, y[C]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(y)) : Ha(Object(y)).forEach(function(C) {
      Object.defineProperty(o, C, Object.getOwnPropertyDescriptor(y, C));
    });
  }
  return o;
}
function ma(o, g, y) {
  return g in o ? Object.defineProperty(o, g, { value: y, enumerable: !0, configurable: !0, writable: !0 }) : o[g] = y, o;
}
function Ro(o, g) {
  if (o == null)
    return {};
  var y = Nu(o, g), C, S;
  if (Object.getOwnPropertySymbols) {
    var b = Object.getOwnPropertySymbols(o);
    for (S = 0; S < b.length; S++)
      C = b[S], !(g.indexOf(C) >= 0) && Object.prototype.propertyIsEnumerable.call(o, C) && (y[C] = o[C]);
  }
  return y;
}
function Nu(o, g) {
  if (o == null)
    return {};
  var y = {}, C = Object.keys(o), S, b;
  for (b = 0; b < C.length; b++)
    S = C[b], !(g.indexOf(S) >= 0) && (y[S] = o[S]);
  return y;
}
var wa = /* @__PURE__ */ Y.forwardRef(function(o, g) {
  var y = o.children, C = Ro(o, du), S = va(C), b = S.open, c = Ro(S, gu);
  return Y.useImperativeHandle(g, function() {
    return {
      open: b
    };
  }, [b]), /* @__PURE__ */ l.createElement(Y.Fragment, null, y(ee(ee({}, c), {}, {
    open: b
  })));
});
wa.displayName = "Dropzone";
var ir = {
  disabled: !1,
  getFilesFromEvent: Hr,
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
wa.defaultProps = ir;
wa.propTypes = {
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
  children: $n.func,
  /**
   * Set accepted file types.
   * See https://github.com/okonet/attr-accept for more information.
   * Keep in mind that mime type determination is not reliable across platforms. CSV files,
   * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
   * Windows. In some cases there might not be a mime type set at all.
   * See: https://github.com/react-dropzone/react-dropzone/issues/276
   */
  accept: $n.oneOfType([$n.string, $n.arrayOf($n.string)]),
  /**
   * Allow drag 'n' drop (or selection from the file dialog) of multiple files
   */
  multiple: $n.bool,
  /**
   * If false, allow dropped items to take over the current browser window
   */
  preventDropOnDocument: $n.bool,
  /**
   * If true, disables click to open the native file selection dialog
   */
  noClick: $n.bool,
  /**
   * If true, disables SPACE/ENTER to open the native file selection dialog.
   * Note that it also stops tracking the focus state.
   */
  noKeyboard: $n.bool,
  /**
   * If true, disables drag 'n' drop
   */
  noDrag: $n.bool,
  /**
   * If true, stops drag event propagation to parents
   */
  noDragEventsBubbling: $n.bool,
  /**
   * Minimum file size (in bytes)
   */
  minSize: $n.number,
  /**
   * Maximum file size (in bytes)
   */
  maxSize: $n.number,
  /**
   * Maximum accepted number of files
   * The default value is 0 which means there is no limitation to how many files are accepted.
   */
  maxFiles: $n.number,
  /**
   * Enable/disable the dropzone
   */
  disabled: $n.bool,
  /**
   * Use this to provide a custom file aggregator
   *
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   */
  getFilesFromEvent: $n.func,
  /**
   * Cb for when closing the file dialog with no selection
   */
  onFileDialogCancel: $n.func,
  /**
   * Cb for when opening the file dialog
   */
  onFileDialogOpen: $n.func,
  /**
   * Set to true to use the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API
   * to open the file picker instead of using an `<input type="file">` click event.
   */
  useFsAccessApi: $n.bool,
  /**
   * Cb for when the `dragenter` event occurs.
   *
   * @param {DragEvent} event
   */
  onDragEnter: $n.func,
  /**
   * Cb for when the `dragleave` event occurs
   *
   * @param {DragEvent} event
   */
  onDragLeave: $n.func,
  /**
   * Cb for when the `dragover` event occurs
   *
   * @param {DragEvent} event
   */
  onDragOver: $n.func,
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
  onDrop: $n.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are accepted, this callback is not invoked.
   *
   * @param {File[]} files
   * @param {(DragEvent|Event)} event
   */
  onDropAccepted: $n.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are rejected, this callback is not invoked.
   *
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event
   */
  onDropRejected: $n.func,
  /**
   * Custom validation function
   * @param {File} file
   * @returns {FileError|FileError[]}
   */
  validator: $n.func
};
var Ma = {
  isFocused: !1,
  isFileDialogActive: !1,
  isDragActive: !1,
  isDragAccept: !1,
  isDragReject: !1,
  draggedFiles: [],
  acceptedFiles: [],
  fileRejections: []
};
function va() {
  var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, g = ee(ee({}, ir), o), y = g.accept, C = g.disabled, S = g.getFilesFromEvent, b = g.maxSize, c = g.minSize, k = g.multiple, Tn = g.maxFiles, w = g.onDragEnter, Rn = g.onDragLeave, L = g.onDragOver, un = g.onDrop, An = g.onDropAccepted, Cn = g.onDropRejected, gn = g.onFileDialogCancel, Gn = g.onFileDialogOpen, Mn = g.useFsAccessApi, Bn = g.preventDropOnDocument, Sn = g.noClick, Jn = g.noKeyboard, Fn = g.noDrag, Nn = g.noDragEventsBubbling, ae = g.validator, Vn = Y.useMemo(function() {
    return typeof Gn == "function" ? Gn : Ya;
  }, [Gn]), de = Y.useMemo(function() {
    return typeof gn == "function" ? gn : Ya;
  }, [gn]), ne = Y.useRef(null), en = Y.useRef(null), dn = Y.useReducer(Du, Ma), Kn = ca(dn, 2), Un = Kn[0], Qn = Kn[1], Ie = Un.isFocused, Te = Un.isFileDialogActive, Se = Un.draggedFiles, Re = function() {
    Te && setTimeout(function() {
      if (en.current) {
        var En = en.current.files;
        En.length || (Qn({
          type: "closeDialog"
        }), de());
      }
    }, 300);
  };
  Y.useEffect(function() {
    return Mn && Ga() ? function() {
    } : (window.addEventListener("focus", Re, !1), function() {
      window.removeEventListener("focus", Re, !1);
    });
  }, [en, Te, de, Mn]);
  var ge = Y.useRef([]), me = function(En) {
    ne.current && ne.current.contains(En.target) || (En.preventDefault(), ge.current = []);
  };
  Y.useEffect(function() {
    return Bn && (document.addEventListener("dragover", Wa, !1), document.addEventListener("drop", me, !1)), function() {
      Bn && (document.removeEventListener("dragover", Wa), document.removeEventListener("drop", me));
    };
  }, [ne, Bn]);
  var re = Y.useCallback(function($) {
    $.preventDefault(), $.persist(), Ee($), ge.current = [].concat(mu(ge.current), [$.target]), No($) && Promise.resolve(S($)).then(function(En) {
      Io($) && !Nn || (Qn({
        draggedFiles: En,
        isDragActive: !0,
        type: "setDraggedFiles"
      }), w && w($));
    });
  }, [S, w, Nn]), Pe = Y.useCallback(function($) {
    $.preventDefault(), $.persist(), Ee($);
    var En = No($);
    if (En && $.dataTransfer)
      try {
        $.dataTransfer.dropEffect = "copy";
      } catch {
      }
    return En && L && L($), !1;
  }, [L, Nn]), Oe = Y.useCallback(function($) {
    $.preventDefault(), $.persist(), Ee($);
    var En = ge.current.filter(function(ie) {
      return ne.current && ne.current.contains(ie);
    }), te = En.indexOf($.target);
    te !== -1 && En.splice(te, 1), ge.current = En, !(En.length > 0) && (Qn({
      isDragActive: !1,
      type: "setDraggedFiles",
      draggedFiles: []
    }), No($) && Rn && Rn($));
  }, [ne, Rn, Nn]), O = Y.useCallback(function($, En) {
    var te = [], ie = [];
    $.forEach(function(pe) {
      var xe = ar(pe, y), be = ca(xe, 2), Ue = be[0], Xe = be[1], _e = rr(pe, c, b), Fe = ca(_e, 2), Je = Fe[0], ze = Fe[1], We = ae ? ae(pe) : null;
      if (Ue && Je && !We)
        te.push(pe);
      else {
        var Be = [Xe, ze];
        We && (Be = Be.concat(We)), ie.push({
          file: pe,
          errors: Be.filter(function(at) {
            return at;
          })
        });
      }
    }), (!k && te.length > 1 || k && Tn >= 1 && te.length > Tn) && (te.forEach(function(pe) {
      ie.push({
        file: pe,
        errors: [iu]
      });
    }), te.splice(0)), Qn({
      acceptedFiles: te,
      fileRejections: ie,
      type: "setFiles"
    }), un && un(te, ie, En), ie.length > 0 && Cn && Cn(ie, En), te.length > 0 && An && An(te, En);
  }, [Qn, k, y, c, b, Tn, un, An, Cn, ae]), V = Y.useCallback(function($) {
    $.preventDefault(), $.persist(), Ee($), ge.current = [], No($) && Promise.resolve(S($)).then(function(En) {
      Io($) && !Nn || O(En, $);
    }), Qn({
      type: "reset"
    });
  }, [S, O, Nn]), rn = Y.useCallback(function() {
    if (Mn && Ga()) {
      Qn({
        type: "openDialog"
      }), Vn();
      var $ = {
        multiple: k,
        types: Cu(y)
      };
      window.showOpenFilePicker($).then(function(En) {
        return S(En);
      }).then(function(En) {
        return O(En, null);
      }).catch(function(En) {
        return de(En);
      }).finally(function() {
        return Qn({
          type: "closeDialog"
        });
      });
      return;
    }
    en.current && (Qn({
      type: "openDialog"
    }), Vn(), en.current.value = null, en.current.click());
  }, [Qn, Vn, de, Mn, O, y, k]), tn = Y.useCallback(function($) {
    !ne.current || !ne.current.isEqualNode($.target) || ($.keyCode === 32 || $.keyCode === 13) && ($.preventDefault(), rn());
  }, [ne, en, rn]), Wn = Y.useCallback(function() {
    Qn({
      type: "focus"
    });
  }, []), Xn = Y.useCallback(function() {
    Qn({
      type: "blur"
    });
  }, []), Le = Y.useCallback(function() {
    Sn || (cu() ? setTimeout(rn, 0) : rn());
  }, [en, Sn, rn]), Ae = function(En) {
    return C ? null : En;
  }, Ne = function(En) {
    return Jn ? null : Ae(En);
  }, De = function(En) {
    return Fn ? null : Ae(En);
  }, Ee = function(En) {
    Nn && En.stopPropagation();
  }, Ke = Y.useMemo(function() {
    return function() {
      var $ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, En = $.refKey, te = En === void 0 ? "ref" : En, ie = $.role, pe = $.onKeyDown, xe = $.onFocus, be = $.onBlur, Ue = $.onClick, Xe = $.onDragEnter, _e = $.onDragOver, Fe = $.onDragLeave, Je = $.onDrop, ze = Ro($, fu);
      return ee(ee(ma({
        onKeyDown: Ne(ke(pe, tn)),
        onFocus: Ne(ke(xe, Wn)),
        onBlur: Ne(ke(be, Xn)),
        onClick: Ae(ke(Ue, Le)),
        onDragEnter: De(ke(Xe, re)),
        onDragOver: De(ke(_e, Pe)),
        onDragLeave: De(ke(Fe, Oe)),
        onDrop: De(ke(Je, V)),
        role: typeof ie == "string" && ie !== "" ? ie : "button"
      }, te, ne), !C && !Jn ? {
        tabIndex: 0
      } : {}), ze);
    };
  }, [ne, tn, Wn, Xn, Le, re, Pe, Oe, V, Jn, Fn, C]), fe = Y.useCallback(function($) {
    $.stopPropagation();
  }, []), ce = Y.useMemo(function() {
    return function() {
      var $ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, En = $.refKey, te = En === void 0 ? "ref" : En, ie = $.onChange, pe = $.onClick, xe = Ro($, pu), be = ma({
        accept: y,
        multiple: k,
        type: "file",
        style: {
          display: "none"
        },
        onChange: Ae(ke(ie, V)),
        onClick: Ae(ke(pe, fe)),
        autoComplete: "off",
        tabIndex: -1
      }, te, en);
      return ee(ee({}, be), xe);
    };
  }, [en, y, k, V, C]), Me = Se.length, ve = Me > 0 && lu({
    files: Se,
    accept: y,
    minSize: c,
    maxSize: b,
    multiple: k,
    maxFiles: Tn
  }), qe = Me > 0 && !ve;
  return ee(ee({}, Un), {}, {
    isDragAccept: ve,
    isDragReject: qe,
    isFocused: Ie && !C,
    getRootProps: Ke,
    getInputProps: ce,
    rootRef: ne,
    inputRef: en,
    open: Ae(rn)
  });
}
function Du(o, g) {
  switch (g.type) {
    case "focus":
      return ee(ee({}, o), {}, {
        isFocused: !0
      });
    case "blur":
      return ee(ee({}, o), {}, {
        isFocused: !1
      });
    case "openDialog":
      return ee(ee({}, Ma), {}, {
        isFileDialogActive: !0
      });
    case "closeDialog":
      return ee(ee({}, o), {}, {
        isFileDialogActive: !1
      });
    case "setDraggedFiles":
      var y = g.isDragActive, C = g.draggedFiles;
      return ee(ee({}, o), {}, {
        draggedFiles: C,
        isDragActive: y
      });
    case "setFiles":
      return ee(ee({}, o), {}, {
        acceptedFiles: g.acceptedFiles,
        fileRejections: g.fileRejections
      });
    case "reset":
      return ee({}, Ma);
    default:
      return o;
  }
}
function Ya() {
}
var Va = {}, Ca = {}, da = 34, Et = 10, ga = 13;
function lr(o) {
  return new Function("d", "return {" + o.map(function(g, y) {
    return JSON.stringify(g) + ": d[" + y + '] || ""';
  }).join(",") + "}");
}
function Tu(o, g) {
  var y = lr(o);
  return function(C, S) {
    return g(y(C), S, o);
  };
}
function Ka(o) {
  var g = /* @__PURE__ */ Object.create(null), y = [];
  return o.forEach(function(C) {
    for (var S in C)
      S in g || y.push(g[S] = S);
  }), y;
}
function we(o, g) {
  var y = o + "", C = y.length;
  return C < g ? new Array(g - C + 1).join(0) + y : y;
}
function Au(o) {
  return o < 0 ? "-" + we(-o, 6) : o > 9999 ? "+" + we(o, 6) : we(o, 4);
}
function bu(o) {
  var g = o.getUTCHours(), y = o.getUTCMinutes(), C = o.getUTCSeconds(), S = o.getUTCMilliseconds();
  return isNaN(o) ? "Invalid Date" : Au(o.getUTCFullYear()) + "-" + we(o.getUTCMonth() + 1, 2) + "-" + we(o.getUTCDate(), 2) + (S ? "T" + we(g, 2) + ":" + we(y, 2) + ":" + we(C, 2) + "." + we(S, 3) + "Z" : C ? "T" + we(g, 2) + ":" + we(y, 2) + ":" + we(C, 2) + "Z" : y || g ? "T" + we(g, 2) + ":" + we(y, 2) + "Z" : "");
}
function Iu(o) {
  var g = new RegExp('["' + o + `
\r]`), y = o.charCodeAt(0);
  function C(L, un) {
    var An, Cn, gn = S(L, function(Gn, Mn) {
      if (An)
        return An(Gn, Mn - 1);
      Cn = Gn, An = un ? Tu(Gn, un) : lr(Gn);
    });
    return gn.columns = Cn || [], gn;
  }
  function S(L, un) {
    var An = [], Cn = L.length, gn = 0, Gn = 0, Mn, Bn = Cn <= 0, Sn = !1;
    L.charCodeAt(Cn - 1) === Et && --Cn, L.charCodeAt(Cn - 1) === ga && --Cn;
    function Jn() {
      if (Bn)
        return Ca;
      if (Sn)
        return Sn = !1, Va;
      var Nn, ae = gn, Vn;
      if (L.charCodeAt(ae) === da) {
        for (; gn++ < Cn && L.charCodeAt(gn) !== da || L.charCodeAt(++gn) === da; )
          ;
        return (Nn = gn) >= Cn ? Bn = !0 : (Vn = L.charCodeAt(gn++)) === Et ? Sn = !0 : Vn === ga && (Sn = !0, L.charCodeAt(gn) === Et && ++gn), L.slice(ae + 1, Nn - 1).replace(/""/g, '"');
      }
      for (; gn < Cn; ) {
        if ((Vn = L.charCodeAt(Nn = gn++)) === Et)
          Sn = !0;
        else if (Vn === ga)
          Sn = !0, L.charCodeAt(gn) === Et && ++gn;
        else if (Vn !== y)
          continue;
        return L.slice(ae, Nn);
      }
      return Bn = !0, L.slice(ae, Cn);
    }
    for (; (Mn = Jn()) !== Ca; ) {
      for (var Fn = []; Mn !== Va && Mn !== Ca; )
        Fn.push(Mn), Mn = Jn();
      un && (Fn = un(Fn, Gn++)) == null || An.push(Fn);
    }
    return An;
  }
  function b(L, un) {
    return L.map(function(An) {
      return un.map(function(Cn) {
        return Rn(An[Cn]);
      }).join(o);
    });
  }
  function c(L, un) {
    return un == null && (un = Ka(L)), [un.map(Rn).join(o)].concat(b(L, un)).join(`
`);
  }
  function k(L, un) {
    return un == null && (un = Ka(L)), b(L, un).join(`
`);
  }
  function Tn(L) {
    return L.map(w).join(`
`);
  }
  function w(L) {
    return L.map(Rn).join(o);
  }
  function Rn(L) {
    return L == null ? "" : L instanceof Date ? bu(L) : g.test(L += "") ? '"' + L.replace(/"/g, '""') + '"' : L;
  }
  return {
    parse: C,
    parseRows: S,
    format: c,
    formatBody: k,
    formatRows: Tn,
    formatRow: w,
    formatValue: Rn
  };
}
var Ru = Iu(","), Eu = Ru.parse;
const jt = ({ children: o, className: g = "" }) => /* @__PURE__ */ l.createElement("div", { className: `tab-content ${g}` }, o), ju = (o) => {
  const { globalActive: g } = Y.useContext(yt), y = Y.useContext(Pt), C = (S) => {
    y({ type: "EDITOR_SET_GLOBALACTIVE", payload: S });
  };
  return /* @__PURE__ */ l.createElement(sr, { ...o, setActiveTab: C, activeTab: g });
}, ku = ({ children: o, className: g = void 0, startingTab: y }) => {
  const [C, S] = Y.useState(y);
  return /* @__PURE__ */ l.createElement(sr, { className: g, setActiveTab: S, activeTab: C }, o);
}, sr = ({ children: o, className: g, activeTab: y, setActiveTab: C }) => {
  const S = (k, Tn) => {
    k || C(Tn);
  };
  let b = "tabs";
  g && (b = `tabs ${g}`);
  const c = o.map(({ props: k }, Tn) => {
    let w = "nav-item", Rn = k.disableRule || !1;
    return Rn && (w += " disabled"), Tn === y && (w += " active"), /* @__PURE__ */ l.createElement("li", { onClick: () => S(Rn, Tn), key: k.title, className: w }, k.icon, k.title);
  });
  return /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("nav", { className: b }, /* @__PURE__ */ l.createElement("ul", { className: "nav nav-fill" }, c)), o[y]);
};
var ha = { exports: {} }, Do = { exports: {} }, qa;
function Pu() {
  return qa || (qa = 1, function(o, g) {
    (function(y, C) {
      C(g, Y);
    })(nr, function(y, C) {
      function S(n, r, i, s, M, p, v) {
        try {
          var D = n[p](v), A = D.value;
        } catch (I) {
          return void i(I);
        }
        D.done ? r(A) : Promise.resolve(A).then(s, M);
      }
      function b(n) {
        return function() {
          var r = this, i = arguments;
          return new Promise(function(s, M) {
            var p = n.apply(r, i);
            function v(A) {
              S(p, s, M, v, D, "next", A);
            }
            function D(A) {
              S(p, s, M, v, D, "throw", A);
            }
            v(void 0);
          });
        };
      }
      function c() {
        return (c = Object.assign || function(n) {
          for (var r = 1; r < arguments.length; r++) {
            var i = arguments[r];
            for (var s in i)
              Object.prototype.hasOwnProperty.call(i, s) && (n[s] = i[s]);
          }
          return n;
        }).apply(this, arguments);
      }
      function k(n, r) {
        if (n == null)
          return {};
        var i, s, M = {}, p = Object.keys(n);
        for (s = 0; s < p.length; s++)
          i = p[s], r.indexOf(i) >= 0 || (M[i] = n[i]);
        return M;
      }
      function Tn(n) {
        var r = function(i, s) {
          if (typeof i != "object" || i === null)
            return i;
          var M = i[Symbol.toPrimitive];
          if (M !== void 0) {
            var p = M.call(i, s || "default");
            if (typeof p != "object")
              return p;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (s === "string" ? String : Number)(i);
        }(n, "string");
        return typeof r == "symbol" ? r : String(r);
      }
      C = C && Object.prototype.hasOwnProperty.call(C, "default") ? C.default : C;
      var w = { init: "init" }, Rn = function(n) {
        var r = n.value;
        return r === void 0 ? "" : r;
      }, L = function() {
        return C.createElement(C.Fragment, null, " ");
      }, un = { Cell: Rn, width: 150, minWidth: 0, maxWidth: Number.MAX_SAFE_INTEGER };
      function An() {
        for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
          r[i] = arguments[i];
        return r.reduce(function(s, M) {
          var p = M.style, v = M.className;
          return s = c({}, s, {}, k(M, ["style", "className"])), p && (s.style = s.style ? c({}, s.style || {}, {}, p || {}) : p), v && (s.className = s.className ? s.className + " " + v : v), s.className === "" && delete s.className, s;
        }, {});
      }
      var Cn = function(n, r) {
        return r === void 0 && (r = {}), function(i) {
          return i === void 0 && (i = {}), [].concat(n, [i]).reduce(function(s, M) {
            return function p(v, D, A) {
              return typeof D == "function" ? p({}, D(v, A)) : Array.isArray(D) ? An.apply(void 0, [v].concat(D)) : An(v, D);
            }(s, M, c({}, r, { userProps: i }));
          }, {});
        };
      }, gn = function(n, r, i, s) {
        return i === void 0 && (i = {}), n.reduce(function(M, p) {
          return p(M, i);
        }, r);
      }, Gn = function(n, r, i) {
        return i === void 0 && (i = {}), n.forEach(function(s) {
          s(r, i);
        });
      };
      function Mn(n, r, i, s) {
        n.findIndex(function(M) {
          return M.pluginName === i;
        }), r.forEach(function(M) {
          n.findIndex(function(p) {
            return p.pluginName === M;
          });
        });
      }
      function Bn(n, r) {
        return typeof n == "function" ? n(r) : n;
      }
      function Sn(n) {
        var r = C.useRef();
        return r.current = n, C.useCallback(function() {
          return r.current;
        }, []);
      }
      var Jn = typeof document < "u" ? C.useLayoutEffect : C.useEffect;
      function Fn(n, r) {
        var i = C.useRef(!1);
        Jn(function() {
          i.current && n(), i.current = !0;
        }, r);
      }
      function Nn(n, r, i) {
        return i === void 0 && (i = {}), function(s, M) {
          M === void 0 && (M = {});
          var p = typeof s == "string" ? r[s] : s;
          if (p === void 0)
            throw console.info(r), new Error("Renderer Error ☝️");
          return ae(p, c({}, n, { column: r }, i, {}, M));
        };
      }
      function ae(n, r) {
        return function(s) {
          return typeof s == "function" && (M = Object.getPrototypeOf(s)).prototype && M.prototype.isReactComponent;
          var M;
        }(i = n) || typeof i == "function" || function(s) {
          return typeof s == "object" && typeof s.$$typeof == "symbol" && ["react.memo", "react.forward_ref"].includes(s.$$typeof.description);
        }(i) ? C.createElement(n, r) : n;
        var i;
      }
      function Vn(n, r, i) {
        return i === void 0 && (i = 0), n.map(function(s) {
          return ne(s = c({}, s, { parent: r, depth: i })), s.columns && (s.columns = Vn(s.columns, s, i + 1)), s;
        });
      }
      function de(n) {
        return Ie(n, "columns");
      }
      function ne(n) {
        var r = n.id, i = n.accessor, s = n.Header;
        if (typeof i == "string") {
          r = r || i;
          var M = i.split(".");
          i = function(p) {
            return function(v, D, A) {
              if (!D)
                return v;
              var I, W = typeof D == "function" ? D : JSON.stringify(D), B = Kn.get(W) || function() {
                var F = function(E) {
                  return function x(q, _) {
                    if (_ === void 0 && (_ = []), Array.isArray(q))
                      for (var ln = 0; ln < q.length; ln += 1)
                        x(q[ln], _);
                    else
                      _.push(q);
                    return _;
                  }(E).map(function(x) {
                    return String(x).replace(".", "_");
                  }).join(".").replace(re, ".").replace(Pe, "").split(".");
                }(D);
                return Kn.set(W, F), F;
              }();
              try {
                I = B.reduce(function(F, E) {
                  return F[E];
                }, v);
              } catch {
              }
              return I !== void 0 ? I : A;
            }(p, M);
          };
        }
        if (!r && typeof s == "string" && s && (r = s), !r && n.columns)
          throw console.error(n), new Error('A column ID (or unique "Header" value) is required!');
        if (!r)
          throw console.error(n), new Error("A column ID (or string accessor) is required!");
        return Object.assign(n, { id: r, accessor: i }), n;
      }
      function en(n, r) {
        if (!r)
          throw new Error();
        return Object.assign(n, c({ Header: L, Footer: L }, un, {}, r, {}, n)), Object.assign(n, { originalWidth: n.width }), n;
      }
      function dn(n, r, i) {
        i === void 0 && (i = function() {
          return {};
        });
        for (var s = [], M = n, p = 0, v = function() {
          return p++;
        }, D = function() {
          var A = { headers: [] }, I = [], W = M.some(function(B) {
            return B.parent;
          });
          M.forEach(function(B) {
            var F, E = [].concat(I).reverse()[0];
            W && (B.parent ? F = c({}, B.parent, { originalId: B.parent.id, id: B.parent.id + "_" + v(), headers: [B] }, i(B)) : F = en(c({ originalId: B.id + "_placeholder", id: B.id + "_placeholder_" + v(), placeholderOf: B, headers: [B] }, i(B)), r), E && E.originalId === F.originalId ? E.headers.push(B) : I.push(F)), A.headers.push(B);
          }), s.push(A), M = I;
        }; M.length; )
          D();
        return s.reverse();
      }
      var Kn = /* @__PURE__ */ new Map();
      function Un() {
        for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
          r[i] = arguments[i];
        for (var s = 0; s < r.length; s += 1)
          if (r[s] !== void 0)
            return r[s];
      }
      function Qn(n) {
        if (typeof n == "function")
          return n;
      }
      function Ie(n, r) {
        var i = [];
        return function s(M) {
          M.forEach(function(p) {
            p[r] ? s(p[r]) : i.push(p);
          });
        }(n), i;
      }
      function Te(n, r) {
        var i = r.manualExpandedKey, s = r.expanded, M = r.expandSubRows, p = M === void 0 || M, v = [];
        return n.forEach(function(D) {
          return function A(I, W) {
            W === void 0 && (W = !0), I.isExpanded = I.original && I.original[i] || s[I.id], I.canExpand = I.subRows && !!I.subRows.length, W && v.push(I), I.subRows && I.subRows.length && I.isExpanded && I.subRows.forEach(function(B) {
              return A(B, p);
            });
          }(D);
        }), v;
      }
      function Se(n, r, i) {
        return Qn(n) || r[n] || i[n] || i.text;
      }
      function Re(n, r, i) {
        return n ? n(r, i) : r === void 0;
      }
      function ge() {
        throw new Error("React-Table: You have not called prepareRow(row) one or more rows you are attempting to render.");
      }
      var me = null, re = /\[/g, Pe = /\]/g, Oe = function(n) {
        return c({ role: "table" }, n);
      }, O = function(n) {
        return c({ role: "rowgroup" }, n);
      }, V = function(n, r) {
        var i = r.column;
        return c({ key: "header_" + i.id, colSpan: i.totalVisibleHeaderCount, role: "columnheader" }, n);
      }, rn = function(n, r) {
        var i = r.column;
        return c({ key: "footer_" + i.id, colSpan: i.totalVisibleHeaderCount }, n);
      }, tn = function(n, r) {
        return c({ key: "headerGroup_" + r.index, role: "row" }, n);
      }, Wn = function(n, r) {
        return c({ key: "footerGroup_" + r.index }, n);
      }, Xn = function(n, r) {
        return c({ key: "row_" + r.row.id, role: "row" }, n);
      }, Le = function(n, r) {
        var i = r.cell;
        return c({ key: "cell_" + i.row.id + "_" + i.column.id, role: "cell" }, n);
      };
      function Ae() {
        return { useOptions: [], stateReducers: [], useControlledState: [], columns: [], columnsDeps: [], allColumns: [], allColumnsDeps: [], accessValue: [], materializedColumns: [], materializedColumnsDeps: [], useInstanceAfterData: [], visibleColumns: [], visibleColumnsDeps: [], headerGroups: [], headerGroupsDeps: [], useInstanceBeforeDimensions: [], useInstance: [], prepareRow: [], getTableProps: [Oe], getTableBodyProps: [O], getHeaderGroupProps: [tn], getFooterGroupProps: [Wn], getHeaderProps: [V], getFooterProps: [rn], getRowProps: [Xn], getCellProps: [Le], useFinalInstance: [] };
      }
      w.resetHiddenColumns = "resetHiddenColumns", w.toggleHideColumn = "toggleHideColumn", w.setHiddenColumns = "setHiddenColumns", w.toggleHideAllColumns = "toggleHideAllColumns";
      var Ne = function(n) {
        n.getToggleHiddenProps = [De], n.getToggleHideAllColumnsProps = [Ee], n.stateReducers.push(Ke), n.useInstanceBeforeDimensions.push(fe), n.headerGroupsDeps.push(function(r, i) {
          var s = i.instance;
          return [].concat(r, [s.state.hiddenColumns]);
        }), n.useInstance.push(ce);
      };
      Ne.pluginName = "useColumnVisibility";
      var De = function(n, r) {
        var i = r.column;
        return [n, { onChange: function(s) {
          i.toggleHidden(!s.target.checked);
        }, style: { cursor: "pointer" }, checked: i.isVisible, title: "Toggle Column Visible" }];
      }, Ee = function(n, r) {
        var i = r.instance;
        return [n, { onChange: function(s) {
          i.toggleHideAllColumns(!s.target.checked);
        }, style: { cursor: "pointer" }, checked: !i.allColumnsHidden && !i.state.hiddenColumns.length, title: "Toggle All Columns Hidden", indeterminate: !i.allColumnsHidden && i.state.hiddenColumns.length }];
      };
      function Ke(n, r, i, s) {
        if (r.type === w.init)
          return c({ hiddenColumns: [] }, n);
        if (r.type === w.resetHiddenColumns)
          return c({}, n, { hiddenColumns: s.initialState.hiddenColumns || [] });
        if (r.type === w.toggleHideColumn) {
          var M = (r.value !== void 0 ? r.value : !n.hiddenColumns.includes(r.columnId)) ? [].concat(n.hiddenColumns, [r.columnId]) : n.hiddenColumns.filter(function(p) {
            return p !== r.columnId;
          });
          return c({}, n, { hiddenColumns: M });
        }
        return r.type === w.setHiddenColumns ? c({}, n, { hiddenColumns: Bn(r.value, n.hiddenColumns) }) : r.type === w.toggleHideAllColumns ? c({}, n, { hiddenColumns: (r.value !== void 0 ? r.value : !n.hiddenColumns.length) ? s.allColumns.map(function(p) {
          return p.id;
        }) : [] }) : void 0;
      }
      function fe(n) {
        var r = n.headers, i = n.state.hiddenColumns;
        C.useRef(!1).current;
        var s = 0;
        r.forEach(function(M) {
          return s += function p(v, D) {
            v.isVisible = D && !i.includes(v.id);
            var A = 0;
            return v.headers && v.headers.length ? v.headers.forEach(function(I) {
              return A += p(I, v.isVisible);
            }) : A = v.isVisible ? 1 : 0, v.totalVisibleHeaderCount = A, A;
          }(M, !0);
        });
      }
      function ce(n) {
        var r = n.columns, i = n.flatHeaders, s = n.dispatch, M = n.allColumns, p = n.getHooks, v = n.state.hiddenColumns, D = n.autoResetHiddenColumns, A = D === void 0 || D, I = Sn(n), W = M.length === v.length, B = C.useCallback(function(_, ln) {
          return s({ type: w.toggleHideColumn, columnId: _, value: ln });
        }, [s]), F = C.useCallback(function(_) {
          return s({ type: w.setHiddenColumns, value: _ });
        }, [s]), E = C.useCallback(function(_) {
          return s({ type: w.toggleHideAllColumns, value: _ });
        }, [s]), x = Cn(p().getToggleHideAllColumnsProps, { instance: I() });
        i.forEach(function(_) {
          _.toggleHidden = function(ln) {
            s({ type: w.toggleHideColumn, columnId: _.id, value: ln });
          }, _.getToggleHiddenProps = Cn(p().getToggleHiddenProps, { instance: I(), column: _ });
        });
        var q = Sn(A);
        Fn(function() {
          q() && s({ type: w.resetHiddenColumns });
        }, [s, r]), Object.assign(n, { allColumnsHidden: W, toggleHideColumn: B, setHiddenColumns: F, toggleHideAllColumns: E, getToggleHideAllColumnsProps: x });
      }
      var Me = {}, ve = {}, qe = function(n, r, i) {
        return n;
      }, $ = function(n, r) {
        return n.subRows || [];
      }, En = function(n, r, i) {
        return "" + (i ? [i.id, r].join(".") : r);
      }, te = function(n) {
        return n;
      };
      function ie(n) {
        var r = n.initialState, i = r === void 0 ? Me : r, s = n.defaultColumn, M = s === void 0 ? ve : s, p = n.getSubRows, v = p === void 0 ? $ : p, D = n.getRowId, A = D === void 0 ? En : D, I = n.stateReducer, W = I === void 0 ? qe : I, B = n.useControlledState, F = B === void 0 ? te : B;
        return c({}, k(n, ["initialState", "defaultColumn", "getSubRows", "getRowId", "stateReducer", "useControlledState"]), { initialState: i, defaultColumn: M, getSubRows: v, getRowId: A, stateReducer: W, useControlledState: F });
      }
      function pe(n, r) {
        r === void 0 && (r = 0);
        var i = 0, s = 0, M = 0, p = 0;
        return n.forEach(function(v) {
          var D = v.headers;
          if (v.totalLeft = r, D && D.length) {
            var A = pe(D, r), I = A[0], W = A[1], B = A[2], F = A[3];
            v.totalMinWidth = I, v.totalWidth = W, v.totalMaxWidth = B, v.totalFlexWidth = F;
          } else
            v.totalMinWidth = v.minWidth, v.totalWidth = Math.min(Math.max(v.minWidth, v.width), v.maxWidth), v.totalMaxWidth = v.maxWidth, v.totalFlexWidth = v.canResize ? v.totalWidth : 0;
          v.isVisible && (r += v.totalWidth, i += v.totalMinWidth, s += v.totalWidth, M += v.totalMaxWidth, p += v.totalFlexWidth);
        }), [i, s, M, p];
      }
      function xe(n) {
        var r = n.data, i = n.rows, s = n.flatRows, M = n.rowsById, p = n.column, v = n.getRowId, D = n.getSubRows, A = n.accessValueHooks, I = n.getInstance;
        r.forEach(function(W, B) {
          return function F(E, x, q, _, ln) {
            q === void 0 && (q = 0);
            var jn = E, sn = v(E, x, _), G = M[sn];
            if (G)
              G.subRows && G.originalSubRows.forEach(function(nn, Ln) {
                return F(nn, Ln, q + 1, G);
              });
            else if ((G = { id: sn, original: jn, index: x, depth: q, cells: [{}] }).cells.map = ge, G.cells.filter = ge, G.cells.forEach = ge, G.cells[0].getCellProps = ge, G.values = {}, ln.push(G), s.push(G), M[sn] = G, G.originalSubRows = D(E, x), G.originalSubRows) {
              var bn = [];
              G.originalSubRows.forEach(function(nn, Ln) {
                return F(nn, Ln, q + 1, G, bn);
              }), G.subRows = bn;
            }
            p.accessor && (G.values[p.id] = p.accessor(E, x, G, ln, r)), G.values[p.id] = gn(A, G.values[p.id], { row: G, column: p, instance: I() });
          }(W, B, 0, void 0, i);
        });
      }
      w.resetExpanded = "resetExpanded", w.toggleRowExpanded = "toggleRowExpanded", w.toggleAllRowsExpanded = "toggleAllRowsExpanded";
      var be = function(n) {
        n.getToggleAllRowsExpandedProps = [Ue], n.getToggleRowExpandedProps = [Xe], n.stateReducers.push(_e), n.useInstance.push(Fe), n.prepareRow.push(Je);
      };
      be.pluginName = "useExpanded";
      var Ue = function(n, r) {
        var i = r.instance;
        return [n, { onClick: function(s) {
          i.toggleAllRowsExpanded();
        }, style: { cursor: "pointer" }, title: "Toggle All Rows Expanded" }];
      }, Xe = function(n, r) {
        var i = r.row;
        return [n, { onClick: function() {
          i.toggleRowExpanded();
        }, style: { cursor: "pointer" }, title: "Toggle Row Expanded" }];
      };
      function _e(n, r, i, s) {
        if (r.type === w.init)
          return c({ expanded: {} }, n);
        if (r.type === w.resetExpanded)
          return c({}, n, { expanded: s.initialState.expanded || {} });
        if (r.type === w.toggleAllRowsExpanded) {
          var M = r.value, p = s.rowsById, v = Object.keys(p).length === Object.keys(n.expanded).length;
          if (M !== void 0 ? M : !v) {
            var D = {};
            return Object.keys(p).forEach(function(x) {
              D[x] = !0;
            }), c({}, n, { expanded: D });
          }
          return c({}, n, { expanded: {} });
        }
        if (r.type === w.toggleRowExpanded) {
          var A, I = r.id, W = r.value, B = n.expanded[I], F = W !== void 0 ? W : !B;
          if (!B && F)
            return c({}, n, { expanded: c({}, n.expanded, (A = {}, A[I] = !0, A)) });
          if (B && !F) {
            var E = n.expanded;
            return E[I], c({}, n, { expanded: k(E, [I].map(Tn)) });
          }
          return n;
        }
      }
      function Fe(n) {
        var r = n.data, i = n.rows, s = n.rowsById, M = n.manualExpandedKey, p = M === void 0 ? "expanded" : M, v = n.paginateExpandedRows, D = v === void 0 || v, A = n.expandSubRows, I = A === void 0 || A, W = n.autoResetExpanded, B = W === void 0 || W, F = n.getHooks, E = n.plugins, x = n.state.expanded, q = n.dispatch;
        Mn(E, ["useSortBy", "useGroupBy", "usePivotColumns", "useGlobalFilter"], "useExpanded");
        var _ = Sn(B), ln = !!(Object.keys(s).length && Object.keys(x).length);
        ln && Object.keys(s).some(function(zn) {
          return !x[zn];
        }) && (ln = !1), Fn(function() {
          _() && q({ type: w.resetExpanded });
        }, [q, r]);
        var jn = C.useCallback(function(zn, fn) {
          q({ type: w.toggleRowExpanded, id: zn, value: fn });
        }, [q]), sn = C.useCallback(function(zn) {
          return q({ type: w.toggleAllRowsExpanded, value: zn });
        }, [q]), G = C.useMemo(function() {
          return D ? Te(i, { manualExpandedKey: p, expanded: x, expandSubRows: I }) : i;
        }, [D, i, p, x, I]), bn = C.useMemo(function() {
          return function(zn) {
            var fn = 0;
            return Object.keys(zn).forEach(function(vn) {
              var Yn = vn.split(".");
              fn = Math.max(fn, Yn.length);
            }), fn;
          }(x);
        }, [x]), nn = Sn(n), Ln = Cn(F().getToggleAllRowsExpandedProps, { instance: nn() });
        Object.assign(n, { preExpandedRows: i, expandedRows: G, rows: G, expandedDepth: bn, isAllRowsExpanded: ln, toggleRowExpanded: jn, toggleAllRowsExpanded: sn, getToggleAllRowsExpandedProps: Ln });
      }
      function Je(n, r) {
        var i = r.instance.getHooks, s = r.instance;
        n.toggleRowExpanded = function(M) {
          return s.toggleRowExpanded(n.id, M);
        }, n.getToggleRowExpandedProps = Cn(i().getToggleRowExpandedProps, { instance: s, row: n });
      }
      var ze = function(n, r, i) {
        return n = n.filter(function(s) {
          return r.some(function(M) {
            var p = s.values[M];
            return String(p).toLowerCase().includes(String(i).toLowerCase());
          });
        });
      };
      ze.autoRemove = function(n) {
        return !n;
      };
      var We = function(n, r, i) {
        return n.filter(function(s) {
          return r.some(function(M) {
            var p = s.values[M];
            return p === void 0 || String(p).toLowerCase() === String(i).toLowerCase();
          });
        });
      };
      We.autoRemove = function(n) {
        return !n;
      };
      var Be = function(n, r, i) {
        return n.filter(function(s) {
          return r.some(function(M) {
            var p = s.values[M];
            return p === void 0 || String(p) === String(i);
          });
        });
      };
      Be.autoRemove = function(n) {
        return !n;
      };
      var at = function(n, r, i) {
        return n.filter(function(s) {
          return r.some(function(M) {
            return s.values[M].includes(i);
          });
        });
      };
      at.autoRemove = function(n) {
        return !n || !n.length;
      };
      var dt = function(n, r, i) {
        return n.filter(function(s) {
          return r.some(function(M) {
            var p = s.values[M];
            return p && p.length && i.every(function(v) {
              return p.includes(v);
            });
          });
        });
      };
      dt.autoRemove = function(n) {
        return !n || !n.length;
      };
      var xt = function(n, r, i) {
        return n.filter(function(s) {
          return r.some(function(M) {
            var p = s.values[M];
            return p && p.length && i.some(function(v) {
              return p.includes(v);
            });
          });
        });
      };
      xt.autoRemove = function(n) {
        return !n || !n.length;
      };
      var gt = function(n, r, i) {
        return n.filter(function(s) {
          return r.some(function(M) {
            var p = s.values[M];
            return i.includes(p);
          });
        });
      };
      gt.autoRemove = function(n) {
        return !n || !n.length;
      };
      var Bt = function(n, r, i) {
        return n.filter(function(s) {
          return r.some(function(M) {
            return s.values[M] === i;
          });
        });
      };
      Bt.autoRemove = function(n) {
        return n === void 0;
      };
      var Ft = function(n, r, i) {
        return n.filter(function(s) {
          return r.some(function(M) {
            return s.values[M] == i;
          });
        });
      };
      Ft.autoRemove = function(n) {
        return n == null;
      };
      var zt = function(n, r, i) {
        var s = i || [], M = s[0], p = s[1];
        if ((M = typeof M == "number" ? M : -1 / 0) > (p = typeof p == "number" ? p : 1 / 0)) {
          var v = M;
          M = p, p = v;
        }
        return n.filter(function(D) {
          return r.some(function(A) {
            var I = D.values[A];
            return I >= M && I <= p;
          });
        });
      };
      zt.autoRemove = function(n) {
        return !n || typeof n[0] != "number" && typeof n[1] != "number";
      };
      var Qe = Object.freeze({ __proto__: null, text: ze, exactText: We, exactTextCase: Be, includes: at, includesAll: dt, includesSome: xt, includesValue: gt, exact: Bt, equals: Ft, between: zt });
      w.resetFilters = "resetFilters", w.setFilter = "setFilter", w.setAllFilters = "setAllFilters";
      var Wt = function(n) {
        n.stateReducers.push(jo), n.useInstance.push(Gt);
      };
      function jo(n, r, i, s) {
        if (r.type === w.init)
          return c({ filters: [] }, n);
        if (r.type === w.resetFilters)
          return c({}, n, { filters: s.initialState.filters || [] });
        if (r.type === w.setFilter) {
          var M = r.columnId, p = r.filterValue, v = s.allColumns, D = s.filterTypes, A = v.find(function(q) {
            return q.id === M;
          });
          if (!A)
            throw new Error("React-Table: Could not find a column with id: " + M);
          var I = Se(A.filter, D || {}, Qe), W = n.filters.find(function(q) {
            return q.id === M;
          }), B = Bn(p, W && W.value);
          return Re(I.autoRemove, B, A) ? c({}, n, { filters: n.filters.filter(function(q) {
            return q.id !== M;
          }) }) : c({}, n, W ? { filters: n.filters.map(function(q) {
            return q.id === M ? { id: M, value: B } : q;
          }) } : { filters: [].concat(n.filters, [{ id: M, value: B }]) });
        }
        if (r.type === w.setAllFilters) {
          var F = r.filters, E = s.allColumns, x = s.filterTypes;
          return c({}, n, { filters: Bn(F, n.filters).filter(function(q) {
            var _ = E.find(function(ln) {
              return ln.id === q.id;
            });
            return !Re(Se(_.filter, x || {}, Qe).autoRemove, q.value, _);
          }) });
        }
      }
      function Gt(n) {
        var r = n.data, i = n.rows, s = n.flatRows, M = n.rowsById, p = n.allColumns, v = n.filterTypes, D = n.manualFilters, A = n.defaultCanFilter, I = A !== void 0 && A, W = n.disableFilters, B = n.state.filters, F = n.dispatch, E = n.autoResetFilters, x = E === void 0 || E, q = C.useCallback(function(nn, Ln) {
          F({ type: w.setFilter, columnId: nn, filterValue: Ln });
        }, [F]), _ = C.useCallback(function(nn) {
          F({ type: w.setAllFilters, filters: nn });
        }, [F]);
        p.forEach(function(nn) {
          var Ln = nn.id, zn = nn.accessor, fn = nn.defaultCanFilter, vn = nn.disableFilters;
          nn.canFilter = zn ? Un(vn !== !0 && void 0, W !== !0 && void 0, !0) : Un(fn, I, !1), nn.setFilter = function(Dn) {
            return q(nn.id, Dn);
          };
          var Yn = B.find(function(Dn) {
            return Dn.id === Ln;
          });
          nn.filterValue = Yn && Yn.value;
        });
        var ln = C.useMemo(function() {
          if (D || !B.length)
            return [i, s, M];
          var nn = [], Ln = {};
          return [function zn(fn, vn) {
            vn === void 0 && (vn = 0);
            var Yn = fn;
            return (Yn = B.reduce(function(Dn, Hn) {
              var e = Hn.id, t = Hn.value, u = p.find(function(f) {
                return f.id === e;
              });
              if (!u)
                return Dn;
              vn === 0 && (u.preFilteredRows = Dn);
              var a = Se(u.filter, v || {}, Qe);
              return a ? (u.filteredRows = a(Dn, [e], t), u.filteredRows) : (console.warn("Could not find a valid 'column.filter' for column with the ID: " + u.id + "."), Dn);
            }, fn)).forEach(function(Dn) {
              nn.push(Dn), Ln[Dn.id] = Dn, Dn.subRows && (Dn.subRows = Dn.subRows && Dn.subRows.length > 0 ? zn(Dn.subRows, vn + 1) : Dn.subRows);
            }), Yn;
          }(i), nn, Ln];
        }, [D, B, i, s, M, p, v]), jn = ln[0], sn = ln[1], G = ln[2];
        C.useMemo(function() {
          p.filter(function(nn) {
            return !B.find(function(Ln) {
              return Ln.id === nn.id;
            });
          }).forEach(function(nn) {
            nn.preFilteredRows = jn, nn.filteredRows = jn;
          });
        }, [jn, B, p]);
        var bn = Sn(x);
        Fn(function() {
          bn() && F({ type: w.resetFilters });
        }, [F, D ? null : r]), Object.assign(n, { preFilteredRows: i, preFilteredFlatRows: s, preFilteredRowsById: M, filteredRows: jn, filteredFlatRows: sn, filteredRowsById: G, rows: jn, flatRows: sn, rowsById: G, setFilter: q, setAllFilters: _ });
      }
      Wt.pluginName = "useFilters", w.resetGlobalFilter = "resetGlobalFilter", w.setGlobalFilter = "setGlobalFilter";
      var ft = function(n) {
        n.stateReducers.push(Ht), n.useInstance.push(Yt);
      };
      function Ht(n, r, i, s) {
        if (r.type === w.resetGlobalFilter)
          return c({}, n, { globalFilter: s.initialState.globalFilter || void 0 });
        if (r.type === w.setGlobalFilter) {
          var M = r.filterValue, p = s.userFilterTypes, v = Se(s.globalFilter, p || {}, Qe), D = Bn(M, n.globalFilter);
          return Re(v.autoRemove, D) ? (n.globalFilter, k(n, ["globalFilter"])) : c({}, n, { globalFilter: D });
        }
      }
      function Yt(n) {
        var r = n.data, i = n.rows, s = n.flatRows, M = n.rowsById, p = n.allColumns, v = n.filterTypes, D = n.globalFilter, A = n.manualGlobalFilter, I = n.state.globalFilter, W = n.dispatch, B = n.autoResetGlobalFilter, F = B === void 0 || B, E = n.disableGlobalFilter, x = C.useCallback(function(G) {
          W({ type: w.setGlobalFilter, filterValue: G });
        }, [W]), q = C.useMemo(function() {
          if (A || I === void 0)
            return [i, s, M];
          var G = [], bn = {}, nn = Se(D, v || {}, Qe);
          if (!nn)
            return console.warn("Could not find a valid 'globalFilter' option."), i;
          p.forEach(function(zn) {
            var fn = zn.disableGlobalFilter;
            zn.canFilter = Un(fn !== !0 && void 0, E !== !0 && void 0, !0);
          });
          var Ln = p.filter(function(zn) {
            return zn.canFilter === !0;
          });
          return [function zn(fn) {
            return (fn = nn(fn, Ln.map(function(vn) {
              return vn.id;
            }), I)).forEach(function(vn) {
              G.push(vn), bn[vn.id] = vn, vn.subRows = vn.subRows && vn.subRows.length ? zn(vn.subRows) : vn.subRows;
            }), fn;
          }(i), G, bn];
        }, [A, I, D, v, p, i, s, M, E]), _ = q[0], ln = q[1], jn = q[2], sn = Sn(F);
        Fn(function() {
          sn() && W({ type: w.resetGlobalFilter });
        }, [W, A ? null : r]), Object.assign(n, { preGlobalFilteredRows: i, preGlobalFilteredFlatRows: s, preGlobalFilteredRowsById: M, globalFilteredRows: _, globalFilteredFlatRows: ln, globalFilteredRowsById: jn, rows: _, flatRows: ln, rowsById: jn, setGlobalFilter: x, disableGlobalFilter: E });
      }
      function pt(n, r) {
        return r.reduce(function(i, s) {
          return i + (typeof s == "number" ? s : 0);
        }, 0);
      }
      ft.pluginName = "useGlobalFilter";
      var mt = Object.freeze({ __proto__: null, sum: pt, min: function(n) {
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
        return n.forEach(function(s) {
          typeof s == "number" && (r = Math.min(r, s), i = Math.max(i, s));
        }), r + ".." + i;
      }, average: function(n) {
        return pt(0, n) / n.length;
      }, median: function(n) {
        if (!n.length)
          return null;
        var r = Math.floor(n.length / 2), i = [].concat(n).sort(function(s, M) {
          return s - M;
        });
        return n.length % 2 != 0 ? i[r] : (i[r - 1] + i[r]) / 2;
      }, unique: function(n) {
        return Array.from(new Set(n).values());
      }, uniqueCount: function(n) {
        return new Set(n).size;
      }, count: function(n) {
        return n.length;
      } }), Vt = [], Kt = {};
      w.resetGroupBy = "resetGroupBy", w.setGroupBy = "setGroupBy", w.toggleGroupBy = "toggleGroupBy";
      var Mt = function(n) {
        n.getGroupByToggleProps = [qt], n.stateReducers.push(Ze), n.visibleColumnsDeps.push(function(r, i) {
          var s = i.instance;
          return [].concat(r, [s.state.groupBy]);
        }), n.visibleColumns.push(Ut), n.useInstance.push(Po), n.prepareRow.push(Xt);
      };
      Mt.pluginName = "useGroupBy";
      var qt = function(n, r) {
        var i = r.header;
        return [n, { onClick: i.canGroupBy ? function(s) {
          s.persist(), i.toggleGroupBy();
        } : void 0, style: { cursor: i.canGroupBy ? "pointer" : void 0 }, title: "Toggle GroupBy" }];
      };
      function Ze(n, r, i, s) {
        if (r.type === w.init)
          return c({ groupBy: [] }, n);
        if (r.type === w.resetGroupBy)
          return c({}, n, { groupBy: s.initialState.groupBy || [] });
        if (r.type === w.setGroupBy)
          return c({}, n, { groupBy: r.value });
        if (r.type === w.toggleGroupBy) {
          var M = r.columnId, p = r.value, v = p !== void 0 ? p : !n.groupBy.includes(M);
          return c({}, n, v ? { groupBy: [].concat(n.groupBy, [M]) } : { groupBy: n.groupBy.filter(function(D) {
            return D !== M;
          }) });
        }
      }
      function Ut(n, r) {
        var i = r.instance.state.groupBy, s = i.map(function(p) {
          return n.find(function(v) {
            return v.id === p;
          });
        }).filter(Boolean), M = n.filter(function(p) {
          return !i.includes(p.id);
        });
        return (n = [].concat(s, M)).forEach(function(p) {
          p.isGrouped = i.includes(p.id), p.groupedIndex = i.indexOf(p.id);
        }), n;
      }
      var ko = {};
      function Po(n) {
        var r = n.data, i = n.rows, s = n.flatRows, M = n.rowsById, p = n.allColumns, v = n.flatHeaders, D = n.groupByFn, A = D === void 0 ? _t : D, I = n.manualGroupBy, W = n.aggregations, B = W === void 0 ? ko : W, F = n.plugins, E = n.state.groupBy, x = n.dispatch, q = n.autoResetGroupBy, _ = q === void 0 || q, ln = n.disableGroupBy, jn = n.defaultCanGroupBy, sn = n.getHooks;
        Mn(F, ["useColumnOrder", "useFilters"], "useGroupBy");
        var G = Sn(n);
        p.forEach(function(u) {
          var a = u.accessor, f = u.defaultGroupBy, m = u.disableGroupBy;
          u.canGroupBy = a ? Un(u.canGroupBy, m !== !0 && void 0, ln !== !0 && void 0, !0) : Un(u.canGroupBy, f, jn, !1), u.canGroupBy && (u.toggleGroupBy = function() {
            return n.toggleGroupBy(u.id);
          }), u.Aggregated = u.Aggregated || u.Cell;
        });
        var bn = C.useCallback(function(u, a) {
          x({ type: w.toggleGroupBy, columnId: u, value: a });
        }, [x]), nn = C.useCallback(function(u) {
          x({ type: w.setGroupBy, value: u });
        }, [x]);
        v.forEach(function(u) {
          u.getGroupByToggleProps = Cn(sn().getGroupByToggleProps, { instance: G(), header: u });
        });
        var Ln = C.useMemo(function() {
          if (I || !E.length)
            return [i, s, M, Vt, Kt, s, M];
          var u = E.filter(function(R) {
            return p.find(function(H) {
              return H.id === R;
            });
          }), a = [], f = {}, m = [], d = {}, h = [], N = {}, T = function R(H, P, z) {
            if (P === void 0 && (P = 0), P === u.length)
              return H.map(function(Z) {
                return c({}, Z, { depth: P });
              });
            var K = u[P], j = A(H, K);
            return Object.entries(j).map(function(Z, cn) {
              var mn = Z[0], X = Z[1], In = K + ":" + mn, xn = R(X, P + 1, In = z ? z + ">" + In : In), J = P ? Ie(X, "leafRows") : X, U = function(yn, kn, Pn) {
                var qn = {};
                return p.forEach(function(on) {
                  if (u.includes(on.id))
                    qn[on.id] = kn[0] ? kn[0].values[on.id] : null;
                  else {
                    var le = typeof on.aggregate == "function" ? on.aggregate : B[on.aggregate] || mt[on.aggregate];
                    if (le) {
                      var On = kn.map(function(wn) {
                        return wn.values[on.id];
                      }), hn = yn.map(function(wn) {
                        var _n = wn.values[on.id];
                        if (!Pn && on.aggregateValue) {
                          var ye = typeof on.aggregateValue == "function" ? on.aggregateValue : B[on.aggregateValue] || mt[on.aggregateValue];
                          if (!ye)
                            throw console.info({ column: on }), new Error("React Table: Invalid column.aggregateValue option for column listed above");
                          _n = ye(_n, wn, on);
                        }
                        return _n;
                      });
                      qn[on.id] = le(hn, On);
                    } else {
                      if (on.aggregate)
                        throw console.info({ column: on }), new Error("React Table: Invalid column.aggregate option for column listed above");
                      qn[on.id] = null;
                    }
                  }
                }), qn;
              }(J, X, P), Q = { id: In, isGrouped: !0, groupByID: K, groupByVal: mn, values: U, subRows: xn, leafRows: J, depth: P, index: cn };
              return xn.forEach(function(yn) {
                a.push(yn), f[yn.id] = yn, yn.isGrouped ? (m.push(yn), d[yn.id] = yn) : (h.push(yn), N[yn.id] = yn);
              }), Q;
            });
          }(i);
          return T.forEach(function(R) {
            a.push(R), f[R.id] = R, R.isGrouped ? (m.push(R), d[R.id] = R) : (h.push(R), N[R.id] = R);
          }), [T, a, f, m, d, h, N];
        }, [I, E, i, s, M, p, B, A]), zn = Ln[0], fn = Ln[1], vn = Ln[2], Yn = Ln[3], Dn = Ln[4], Hn = Ln[5], e = Ln[6], t = Sn(_);
        Fn(function() {
          t() && x({ type: w.resetGroupBy });
        }, [x, I ? null : r]), Object.assign(n, { preGroupedRows: i, preGroupedFlatRow: s, preGroupedRowsById: M, groupedRows: zn, groupedFlatRows: fn, groupedRowsById: vn, onlyGroupedFlatRows: Yn, onlyGroupedRowsById: Dn, nonGroupedFlatRows: Hn, nonGroupedRowsById: e, rows: zn, flatRows: fn, rowsById: vn, toggleGroupBy: bn, setGroupBy: nn });
      }
      function Xt(n) {
        n.allCells.forEach(function(r) {
          var i;
          r.isGrouped = r.column.isGrouped && r.column.id === n.groupByID, r.isPlaceholder = !r.isGrouped && r.column.isGrouped, r.isAggregated = !r.isGrouped && !r.isPlaceholder && ((i = n.subRows) == null ? void 0 : i.length);
        });
      }
      function _t(n, r) {
        return n.reduce(function(i, s, M) {
          var p = "" + s.values[r];
          return i[p] = Array.isArray(i[p]) ? i[p] : [], i[p].push(s), i;
        }, {});
      }
      var Jt = /([0-9]+)/gm;
      function rt(n, r) {
        return n === r ? 0 : n > r ? 1 : -1;
      }
      function $e(n, r, i) {
        return [n.values[i], r.values[i]];
      }
      function Qt(n) {
        return typeof n == "number" ? isNaN(n) || n === 1 / 0 || n === -1 / 0 ? "" : String(n) : typeof n == "string" ? n : "";
      }
      var Oo = Object.freeze({ __proto__: null, alphanumeric: function(n, r, i) {
        var s = $e(n, r, i), M = s[0], p = s[1];
        for (M = Qt(M), p = Qt(p), M = M.split(Jt).filter(Boolean), p = p.split(Jt).filter(Boolean); M.length && p.length; ) {
          var v = M.shift(), D = p.shift(), A = parseInt(v, 10), I = parseInt(D, 10), W = [A, I].sort();
          if (isNaN(W[0])) {
            if (v > D)
              return 1;
            if (D > v)
              return -1;
          } else {
            if (isNaN(W[1]))
              return isNaN(A) ? -1 : 1;
            if (A > I)
              return 1;
            if (I > A)
              return -1;
          }
        }
        return M.length - p.length;
      }, datetime: function(n, r, i) {
        var s = $e(n, r, i), M = s[0], p = s[1];
        return rt(M = M.getTime(), p = p.getTime());
      }, basic: function(n, r, i) {
        var s = $e(n, r, i);
        return rt(s[0], s[1]);
      }, string: function(n, r, i) {
        var s = $e(n, r, i), M = s[0], p = s[1];
        for (M = M.split("").filter(Boolean), p = p.split("").filter(Boolean); M.length && p.length; ) {
          var v = M.shift(), D = p.shift(), A = v.toLowerCase(), I = D.toLowerCase();
          if (A > I)
            return 1;
          if (I > A)
            return -1;
          if (v > D)
            return 1;
          if (D > v)
            return -1;
        }
        return M.length - p.length;
      }, number: function(n, r, i) {
        var s = $e(n, r, i), M = s[0], p = s[1], v = /[^0-9.]/gi;
        return rt(M = Number(String(M).replace(v, "")), p = Number(String(p).replace(v, "")));
      } });
      w.resetSortBy = "resetSortBy", w.setSortBy = "setSortBy", w.toggleSortBy = "toggleSortBy", w.clearSortBy = "clearSortBy", un.sortType = "alphanumeric", un.sortDescFirst = !1;
      var Zt = function(n) {
        n.getSortByToggleProps = [xo], n.stateReducers.push(Bo), n.useInstance.push(Fo);
      };
      Zt.pluginName = "useSortBy";
      var xo = function(n, r) {
        var i = r.instance, s = r.column, M = i.isMultiSortEvent, p = M === void 0 ? function(v) {
          return v.shiftKey;
        } : M;
        return [n, { onClick: s.canSort ? function(v) {
          v.persist(), s.toggleSortBy(void 0, !i.disableMultiSort && p(v));
        } : void 0, style: { cursor: s.canSort ? "pointer" : void 0 }, title: s.canSort ? "Toggle SortBy" : void 0 }];
      };
      function Bo(n, r, i, s) {
        if (r.type === w.init)
          return c({ sortBy: [] }, n);
        if (r.type === w.resetSortBy)
          return c({}, n, { sortBy: s.initialState.sortBy || [] });
        if (r.type === w.clearSortBy)
          return c({}, n, { sortBy: n.sortBy.filter(function(G) {
            return G.id !== r.columnId;
          }) });
        if (r.type === w.setSortBy)
          return c({}, n, { sortBy: r.sortBy });
        if (r.type === w.toggleSortBy) {
          var M, p = r.columnId, v = r.desc, D = r.multi, A = s.allColumns, I = s.disableMultiSort, W = s.disableSortRemove, B = s.disableMultiRemove, F = s.maxMultiSortColCount, E = F === void 0 ? Number.MAX_SAFE_INTEGER : F, x = n.sortBy, q = A.find(function(G) {
            return G.id === p;
          }).sortDescFirst, _ = x.find(function(G) {
            return G.id === p;
          }), ln = x.findIndex(function(G) {
            return G.id === p;
          }), jn = v != null, sn = [];
          return (M = !I && D ? _ ? "toggle" : "add" : ln !== x.length - 1 || x.length !== 1 ? "replace" : _ ? "toggle" : "replace") != "toggle" || W || jn || D && B || !(_ && _.desc && !q || !_.desc && q) || (M = "remove"), M === "replace" ? sn = [{ id: p, desc: jn ? v : q }] : M === "add" ? (sn = [].concat(x, [{ id: p, desc: jn ? v : q }])).splice(0, sn.length - E) : M === "toggle" ? sn = x.map(function(G) {
            return G.id === p ? c({}, G, { desc: jn ? v : !_.desc }) : G;
          }) : M === "remove" && (sn = x.filter(function(G) {
            return G.id !== p;
          })), c({}, n, { sortBy: sn });
        }
      }
      function Fo(n) {
        var r = n.data, i = n.rows, s = n.flatRows, M = n.allColumns, p = n.orderByFn, v = p === void 0 ? $t : p, D = n.sortTypes, A = n.manualSortBy, I = n.defaultCanSort, W = n.disableSortBy, B = n.flatHeaders, F = n.state.sortBy, E = n.dispatch, x = n.plugins, q = n.getHooks, _ = n.autoResetSortBy, ln = _ === void 0 || _;
        Mn(x, ["useFilters", "useGlobalFilter", "useGroupBy", "usePivotColumns"], "useSortBy");
        var jn = C.useCallback(function(fn) {
          E({ type: w.setSortBy, sortBy: fn });
        }, [E]), sn = C.useCallback(function(fn, vn, Yn) {
          E({ type: w.toggleSortBy, columnId: fn, desc: vn, multi: Yn });
        }, [E]), G = Sn(n);
        B.forEach(function(fn) {
          var vn = fn.accessor, Yn = fn.canSort, Dn = fn.disableSortBy, Hn = fn.id, e = vn ? Un(Dn !== !0 && void 0, W !== !0 && void 0, !0) : Un(I, Yn, !1);
          fn.canSort = e, fn.canSort && (fn.toggleSortBy = function(u, a) {
            return sn(fn.id, u, a);
          }, fn.clearSortBy = function() {
            E({ type: w.clearSortBy, columnId: fn.id });
          }), fn.getSortByToggleProps = Cn(q().getSortByToggleProps, { instance: G(), column: fn });
          var t = F.find(function(u) {
            return u.id === Hn;
          });
          fn.isSorted = !!t, fn.sortedIndex = F.findIndex(function(u) {
            return u.id === Hn;
          }), fn.isSortedDesc = fn.isSorted ? t.desc : void 0;
        });
        var bn = C.useMemo(function() {
          if (A || !F.length)
            return [i, s];
          var fn = [], vn = F.filter(function(Yn) {
            return M.find(function(Dn) {
              return Dn.id === Yn.id;
            });
          });
          return [function Yn(Dn) {
            var Hn = v(Dn, vn.map(function(e) {
              var t = M.find(function(f) {
                return f.id === e.id;
              });
              if (!t)
                throw new Error("React-Table: Could not find a column with id: " + e.id + " while sorting");
              var u = t.sortType, a = Qn(u) || (D || {})[u] || Oo[u];
              if (!a)
                throw new Error("React-Table: Could not find a valid sortType of '" + u + "' for column '" + e.id + "'.");
              return function(f, m) {
                return a(f, m, e.id, e.desc);
              };
            }), vn.map(function(e) {
              var t = M.find(function(u) {
                return u.id === e.id;
              });
              return t && t.sortInverted ? e.desc : !e.desc;
            }));
            return Hn.forEach(function(e) {
              fn.push(e), e.subRows && e.subRows.length !== 0 && (e.subRows = Yn(e.subRows));
            }), Hn;
          }(i), fn];
        }, [A, F, i, s, M, v, D]), nn = bn[0], Ln = bn[1], zn = Sn(ln);
        Fn(function() {
          zn() && E({ type: w.resetSortBy });
        }, [A ? null : r]), Object.assign(n, { preSortedRows: i, preSortedFlatRows: s, sortedRows: nn, sortedFlatRows: Ln, rows: nn, flatRows: Ln, setSortBy: jn, toggleSortBy: sn });
      }
      function $t(n, r, i) {
        return [].concat(n).sort(function(s, M) {
          for (var p = 0; p < r.length; p += 1) {
            var v = r[p], D = i[p] === !1 || i[p] === "desc", A = v(s, M);
            if (A !== 0)
              return D ? -A : A;
          }
          return i[0] ? s.index - M.index : M.index - s.index;
        });
      }
      w.resetPage = "resetPage", w.gotoPage = "gotoPage", w.setPageSize = "setPageSize";
      var vt = function(n) {
        n.stateReducers.push(zo), n.useInstance.push(Wo);
      };
      function zo(n, r, i, s) {
        if (r.type === w.init)
          return c({ pageSize: 10, pageIndex: 0 }, n);
        if (r.type === w.resetPage)
          return c({}, n, { pageIndex: s.initialState.pageIndex || 0 });
        if (r.type === w.gotoPage) {
          var M = s.pageCount, p = s.page, v = Bn(r.pageIndex, n.pageIndex), D = !1;
          return v > n.pageIndex ? D = M === -1 ? p.length >= n.pageSize : v < M : v < n.pageIndex && (D = v > -1), D ? c({}, n, { pageIndex: v }) : n;
        }
        if (r.type === w.setPageSize) {
          var A = r.pageSize, I = n.pageSize * n.pageIndex;
          return c({}, n, { pageIndex: Math.floor(I / A), pageSize: A });
        }
      }
      function Wo(n) {
        var r = n.rows, i = n.autoResetPage, s = i === void 0 || i, M = n.manualExpandedKey, p = M === void 0 ? "expanded" : M, v = n.plugins, D = n.pageCount, A = n.paginateExpandedRows, I = A === void 0 || A, W = n.expandSubRows, B = W === void 0 || W, F = n.state, E = F.pageSize, x = F.pageIndex, q = F.expanded, _ = F.globalFilter, ln = F.filters, jn = F.groupBy, sn = F.sortBy, G = n.dispatch, bn = n.data, nn = n.manualPagination;
        Mn(v, ["useGlobalFilter", "useFilters", "useGroupBy", "useSortBy", "useExpanded"], "usePagination");
        var Ln = Sn(s);
        Fn(function() {
          Ln() && G({ type: w.resetPage });
        }, [G, nn ? null : bn, _, ln, jn, sn]);
        var zn = nn ? D : Math.ceil(r.length / E), fn = C.useMemo(function() {
          return zn > 0 ? [].concat(new Array(zn)).fill(null).map(function(a, f) {
            return f;
          }) : [];
        }, [zn]), vn = C.useMemo(function() {
          var a;
          if (nn)
            a = r;
          else {
            var f = E * x, m = f + E;
            a = r.slice(f, m);
          }
          return I ? a : Te(a, { manualExpandedKey: p, expanded: q, expandSubRows: B });
        }, [B, q, p, nn, x, E, I, r]), Yn = x > 0, Dn = zn === -1 ? vn.length >= E : x < zn - 1, Hn = C.useCallback(function(a) {
          G({ type: w.gotoPage, pageIndex: a });
        }, [G]), e = C.useCallback(function() {
          return Hn(function(a) {
            return a - 1;
          });
        }, [Hn]), t = C.useCallback(function() {
          return Hn(function(a) {
            return a + 1;
          });
        }, [Hn]), u = C.useCallback(function(a) {
          G({ type: w.setPageSize, pageSize: a });
        }, [G]);
        Object.assign(n, { pageOptions: fn, pageCount: zn, page: vn, canPreviousPage: Yn, canNextPage: Dn, gotoPage: Hn, previousPage: e, nextPage: t, setPageSize: u });
      }
      vt.pluginName = "usePagination", w.resetPivot = "resetPivot", w.togglePivot = "togglePivot";
      var ht = function(n) {
        n.getPivotToggleProps = [Go], n.stateReducers.push(Ho), n.useInstanceAfterData.push(Yo), n.allColumns.push(Vo), n.accessValue.push(Ko), n.materializedColumns.push(eo), n.materializedColumnsDeps.push(to), n.visibleColumns.push(qo), n.visibleColumnsDeps.push(Uo), n.useInstance.push(Xo), n.prepareRow.push(_o);
      };
      ht.pluginName = "usePivotColumns";
      var no = [], Go = function(n, r) {
        var i = r.header;
        return [n, { onClick: i.canPivot ? function(s) {
          s.persist(), i.togglePivot();
        } : void 0, style: { cursor: i.canPivot ? "pointer" : void 0 }, title: "Toggle Pivot" }];
      };
      function Ho(n, r, i, s) {
        if (r.type === w.init)
          return c({ pivotColumns: no }, n);
        if (r.type === w.resetPivot)
          return c({}, n, { pivotColumns: s.initialState.pivotColumns || no });
        if (r.type === w.togglePivot) {
          var M = r.columnId, p = r.value, v = p !== void 0 ? p : !n.pivotColumns.includes(M);
          return c({}, n, v ? { pivotColumns: [].concat(n.pivotColumns, [M]) } : { pivotColumns: n.pivotColumns.filter(function(D) {
            return D !== M;
          }) });
        }
      }
      function Yo(n) {
        n.allColumns.forEach(function(r) {
          r.isPivotSource = n.state.pivotColumns.includes(r.id);
        });
      }
      function Vo(n, r) {
        var i = r.instance;
        return n.forEach(function(s) {
          s.isPivotSource = i.state.pivotColumns.includes(s.id), s.uniqueValues = /* @__PURE__ */ new Set();
        }), n;
      }
      function Ko(n, r) {
        var i = r.column;
        return i.uniqueValues && n !== void 0 && i.uniqueValues.add(n), n;
      }
      function eo(n, r) {
        var i = r.instance, s = i.allColumns, M = i.state;
        if (!M.pivotColumns.length || !M.groupBy || !M.groupBy.length)
          return n;
        var p = M.pivotColumns.map(function(A) {
          return s.find(function(I) {
            return I.id === A;
          });
        }).filter(Boolean), v = s.filter(function(A) {
          return !A.isPivotSource && !M.groupBy.includes(A.id) && !M.pivotColumns.includes(A.id);
        }), D = de(function A(I, W, B) {
          I === void 0 && (I = 0), B === void 0 && (B = []);
          var F = p[I];
          return F ? Array.from(F.uniqueValues).sort().map(function(E) {
            var x = c({}, F, { Header: F.PivotHeader || typeof F.header == "string" ? F.Header + ": " + E : E, isPivotGroup: !0, parent: W, depth: I, id: W ? W.id + "." + F.id + "." + E : F.id + "." + E, pivotValue: E });
            return x.columns = A(I + 1, x, [].concat(B, [function(q) {
              return q.values[F.id] === E;
            }])), x;
          }) : v.map(function(E) {
            return c({}, E, { canPivot: !1, isPivoted: !0, parent: W, depth: I, id: "" + (W ? W.id + "." + E.id : E.id), accessor: function(x, q, _) {
              if (B.every(function(ln) {
                return ln(_);
              }))
                return _.values[E.id];
            } });
          });
        }());
        return [].concat(n, D);
      }
      function to(n, r) {
        var i = r.instance.state, s = i.pivotColumns, M = i.groupBy;
        return [].concat(n, [s, M]);
      }
      function qo(n, r) {
        var i = r.instance.state;
        return n = n.filter(function(s) {
          return !s.isPivotSource;
        }), i.pivotColumns.length && i.groupBy && i.groupBy.length && (n = n.filter(function(s) {
          return s.isGrouped || s.isPivoted;
        })), n;
      }
      function Uo(n, r) {
        var i = r.instance;
        return [].concat(n, [i.state.pivotColumns, i.state.groupBy]);
      }
      function Xo(n) {
        var r = n.columns, i = n.allColumns, s = n.flatHeaders, M = n.getHooks, p = n.plugins, v = n.dispatch, D = n.autoResetPivot, A = D === void 0 || D, I = n.manaulPivot, W = n.disablePivot, B = n.defaultCanPivot;
        Mn(p, ["useGroupBy"], "usePivotColumns");
        var F = Sn(n);
        i.forEach(function(x) {
          var q = x.accessor, _ = x.defaultPivot, ln = x.disablePivot;
          x.canPivot = q ? Un(x.canPivot, ln !== !0 && void 0, W !== !0 && void 0, !0) : Un(x.canPivot, _, B, !1), x.canPivot && (x.togglePivot = function() {
            return n.togglePivot(x.id);
          }), x.Aggregated = x.Aggregated || x.Cell;
        }), s.forEach(function(x) {
          x.getPivotToggleProps = Cn(M().getPivotToggleProps, { instance: F(), header: x });
        });
        var E = Sn(A);
        Fn(function() {
          E() && v({ type: w.resetPivot });
        }, [v, I ? null : r]), Object.assign(n, { togglePivot: function(x, q) {
          v({ type: w.togglePivot, columnId: x, value: q });
        } });
      }
      function _o(n) {
        n.allCells.forEach(function(r) {
          r.isPivoted = r.column.isPivoted;
        });
      }
      w.resetSelectedRows = "resetSelectedRows", w.toggleAllRowsSelected = "toggleAllRowsSelected", w.toggleRowSelected = "toggleRowSelected", w.toggleAllPageRowsSelected = "toggleAllPageRowsSelected";
      var oo = function(n) {
        n.getToggleRowSelectedProps = [Lt], n.getToggleAllRowsSelectedProps = [nt], n.getToggleAllPageRowsSelectedProps = [ao], n.stateReducers.push(Jo), n.useInstance.push(ro), n.prepareRow.push(Qo);
      };
      oo.pluginName = "useRowSelect";
      var Lt = function(n, r) {
        var i = r.instance, s = r.row, M = i.manualRowSelectedKey, p = M === void 0 ? "isSelected" : M;
        return [n, { onChange: function(v) {
          s.toggleRowSelected(v.target.checked);
        }, style: { cursor: "pointer" }, checked: !(!s.original || !s.original[p]) || s.isSelected, title: "Toggle Row Selected", indeterminate: s.isSomeSelected }];
      }, nt = function(n, r) {
        var i = r.instance;
        return [n, { onChange: function(s) {
          i.toggleAllRowsSelected(s.target.checked);
        }, style: { cursor: "pointer" }, checked: i.isAllRowsSelected, title: "Toggle All Rows Selected", indeterminate: !!(!i.isAllRowsSelected && Object.keys(i.state.selectedRowIds).length) }];
      }, ao = function(n, r) {
        var i = r.instance;
        return [n, { onChange: function(s) {
          i.toggleAllPageRowsSelected(s.target.checked);
        }, style: { cursor: "pointer" }, checked: i.isAllPageRowsSelected, title: "Toggle All Current Page Rows Selected", indeterminate: !!(!i.isAllPageRowsSelected && i.page.some(function(s) {
          var M = s.id;
          return i.state.selectedRowIds[M];
        })) }];
      };
      function Jo(n, r, i, s) {
        if (r.type === w.init)
          return c({ selectedRowIds: {} }, n);
        if (r.type === w.resetSelectedRows)
          return c({}, n, { selectedRowIds: s.initialState.selectedRowIds || {} });
        if (r.type === w.toggleAllRowsSelected) {
          var M = r.value, p = s.isAllRowsSelected, v = s.rowsById, D = s.nonGroupedRowsById, A = D === void 0 ? v : D, I = M !== void 0 ? M : !p, W = Object.assign({}, n.selectedRowIds);
          return I ? Object.keys(A).forEach(function(Hn) {
            W[Hn] = !0;
          }) : Object.keys(A).forEach(function(Hn) {
            delete W[Hn];
          }), c({}, n, { selectedRowIds: W });
        }
        if (r.type === w.toggleRowSelected) {
          var B = r.id, F = r.value, E = s.rowsById, x = s.selectSubRows, q = x === void 0 || x, _ = s.getSubRows, ln = n.selectedRowIds[B], jn = F !== void 0 ? F : !ln;
          if (ln === jn)
            return n;
          var sn = c({}, n.selectedRowIds);
          return function Hn(e) {
            var t = E[e];
            if (t && (t.isGrouped || (jn ? sn[e] = !0 : delete sn[e]), q && _(t)))
              return _(t).forEach(function(u) {
                return Hn(u.id);
              });
          }(B), c({}, n, { selectedRowIds: sn });
        }
        if (r.type === w.toggleAllPageRowsSelected) {
          var G = r.value, bn = s.page, nn = s.rowsById, Ln = s.selectSubRows, zn = Ln === void 0 || Ln, fn = s.isAllPageRowsSelected, vn = s.getSubRows, Yn = G !== void 0 ? G : !fn, Dn = c({}, n.selectedRowIds);
          return bn.forEach(function(Hn) {
            return function e(t) {
              var u = nn[t];
              if (u.isGrouped || (Yn ? Dn[t] = !0 : delete Dn[t]), zn && vn(u))
                return vn(u).forEach(function(a) {
                  return e(a.id);
                });
            }(Hn.id);
          }), c({}, n, { selectedRowIds: Dn });
        }
        return n;
      }
      function ro(n) {
        var r = n.data, i = n.rows, s = n.getHooks, M = n.plugins, p = n.rowsById, v = n.nonGroupedRowsById, D = v === void 0 ? p : v, A = n.autoResetSelectedRows, I = A === void 0 || A, W = n.state.selectedRowIds, B = n.selectSubRows, F = B === void 0 || B, E = n.dispatch, x = n.page, q = n.getSubRows;
        Mn(M, ["useFilters", "useGroupBy", "useSortBy", "useExpanded", "usePagination"], "useRowSelect");
        var _ = C.useMemo(function() {
          var vn = [];
          return i.forEach(function(Yn) {
            var Dn = F ? function Hn(e, t, u) {
              if (t[e.id])
                return !0;
              var a = u(e);
              if (a && a.length) {
                var f = !0, m = !1;
                return a.forEach(function(d) {
                  m && !f || (Hn(d, t, u) ? m = !0 : f = !1);
                }), !!f || !!m && null;
              }
              return !1;
            }(Yn, W, q) : !!W[Yn.id];
            Yn.isSelected = !!Dn, Yn.isSomeSelected = Dn === null, Dn && vn.push(Yn);
          }), vn;
        }, [i, F, W, q]), ln = !!(Object.keys(D).length && Object.keys(W).length), jn = ln;
        ln && Object.keys(D).some(function(vn) {
          return !W[vn];
        }) && (ln = !1), ln || x && x.length && x.some(function(vn) {
          var Yn = vn.id;
          return !W[Yn];
        }) && (jn = !1);
        var sn = Sn(I);
        Fn(function() {
          sn() && E({ type: w.resetSelectedRows });
        }, [E, r]);
        var G = C.useCallback(function(vn) {
          return E({ type: w.toggleAllRowsSelected, value: vn });
        }, [E]), bn = C.useCallback(function(vn) {
          return E({ type: w.toggleAllPageRowsSelected, value: vn });
        }, [E]), nn = C.useCallback(function(vn, Yn) {
          return E({ type: w.toggleRowSelected, id: vn, value: Yn });
        }, [E]), Ln = Sn(n), zn = Cn(s().getToggleAllRowsSelectedProps, { instance: Ln() }), fn = Cn(s().getToggleAllPageRowsSelectedProps, { instance: Ln() });
        Object.assign(n, { selectedFlatRows: _, isAllRowsSelected: ln, isAllPageRowsSelected: jn, toggleRowSelected: nn, toggleAllRowsSelected: G, getToggleAllRowsSelectedProps: zn, getToggleAllPageRowsSelectedProps: fn, toggleAllPageRowsSelected: bn });
      }
      function Qo(n, r) {
        var i = r.instance;
        n.toggleRowSelected = function(s) {
          return i.toggleRowSelected(n.id, s);
        }, n.getToggleRowSelectedProps = Cn(i.getHooks().getToggleRowSelectedProps, { instance: i, row: n });
      }
      var uo = function(n) {
        return {};
      }, io = function(n) {
        return {};
      };
      w.setRowState = "setRowState", w.setCellState = "setCellState", w.resetRowState = "resetRowState";
      var wt = function(n) {
        n.stateReducers.push(Zo), n.useInstance.push(lo), n.prepareRow.push($o);
      };
      function Zo(n, r, i, s) {
        var M = s.initialRowStateAccessor, p = M === void 0 ? uo : M, v = s.initialCellStateAccessor, D = v === void 0 ? io : v, A = s.rowsById;
        if (r.type === w.init)
          return c({ rowState: {} }, n);
        if (r.type === w.resetRowState)
          return c({}, n, { rowState: s.initialState.rowState || {} });
        if (r.type === w.setRowState) {
          var I, W = r.rowId, B = r.value, F = n.rowState[W] !== void 0 ? n.rowState[W] : p(A[W]);
          return c({}, n, { rowState: c({}, n.rowState, (I = {}, I[W] = Bn(B, F), I)) });
        }
        if (r.type === w.setCellState) {
          var E, x, q, _, ln, jn = r.rowId, sn = r.columnId, G = r.value, bn = n.rowState[jn] !== void 0 ? n.rowState[jn] : p(A[jn]), nn = (bn == null || (E = bn.cellState) == null ? void 0 : E[sn]) !== void 0 ? bn.cellState[sn] : D((x = A[jn]) == null || (q = x.cells) == null ? void 0 : q.find(function(Ln) {
            return Ln.column.id === sn;
          }));
          return c({}, n, { rowState: c({}, n.rowState, (ln = {}, ln[jn] = c({}, bn, { cellState: c({}, bn.cellState || {}, (_ = {}, _[sn] = Bn(G, nn), _)) }), ln)) });
        }
      }
      function lo(n) {
        var r = n.autoResetRowState, i = r === void 0 || r, s = n.data, M = n.dispatch, p = C.useCallback(function(A, I) {
          return M({ type: w.setRowState, rowId: A, value: I });
        }, [M]), v = C.useCallback(function(A, I, W) {
          return M({ type: w.setCellState, rowId: A, columnId: I, value: W });
        }, [M]), D = Sn(i);
        Fn(function() {
          D() && M({ type: w.resetRowState });
        }, [s]), Object.assign(n, { setRowState: p, setCellState: v });
      }
      function $o(n, r) {
        var i = r.instance, s = i.initialRowStateAccessor, M = s === void 0 ? uo : s, p = i.initialCellStateAccessor, v = p === void 0 ? io : p, D = i.state.rowState;
        n && (n.state = D[n.id] !== void 0 ? D[n.id] : M(n), n.setState = function(A) {
          return i.setRowState(n.id, A);
        }, n.cells.forEach(function(A) {
          n.state.cellState || (n.state.cellState = {}), A.state = n.state.cellState[A.column.id] !== void 0 ? n.state.cellState[A.column.id] : v(A), A.setState = function(I) {
            return i.setCellState(n.id, A.column.id, I);
          };
        }));
      }
      wt.pluginName = "useRowState", w.resetColumnOrder = "resetColumnOrder", w.setColumnOrder = "setColumnOrder";
      var so = function(n) {
        n.stateReducers.push(yo), n.visibleColumnsDeps.push(function(r, i) {
          var s = i.instance;
          return [].concat(r, [s.state.columnOrder]);
        }), n.visibleColumns.push(co), n.useInstance.push(na);
      };
      function yo(n, r, i, s) {
        return r.type === w.init ? c({ columnOrder: [] }, n) : r.type === w.resetColumnOrder ? c({}, n, { columnOrder: s.initialState.columnOrder || [] }) : r.type === w.setColumnOrder ? c({}, n, { columnOrder: Bn(r.columnOrder, n.columnOrder) }) : void 0;
      }
      function co(n, r) {
        var i = r.instance.state.columnOrder;
        if (!i || !i.length)
          return n;
        for (var s = [].concat(i), M = [].concat(n), p = [], v = function() {
          var D = s.shift(), A = M.findIndex(function(I) {
            return I.id === D;
          });
          A > -1 && p.push(M.splice(A, 1)[0]);
        }; M.length && s.length; )
          v();
        return [].concat(p, M);
      }
      function na(n) {
        var r = n.dispatch;
        n.setColumnOrder = C.useCallback(function(i) {
          return r({ type: w.setColumnOrder, columnOrder: i });
        }, [r]);
      }
      so.pluginName = "useColumnOrder", un.canResize = !0, w.columnStartResizing = "columnStartResizing", w.columnResizing = "columnResizing", w.columnDoneResizing = "columnDoneResizing", w.resetResize = "resetResize";
      var Co = function(n) {
        n.getResizerProps = [ea], n.getHeaderProps.push({ style: { position: "relative" } }), n.stateReducers.push(ta), n.useInstance.push(aa), n.useInstanceBeforeDimensions.push(oa);
      }, ea = function(n, r) {
        var i = r.instance, s = r.header, M = i.dispatch, p = function(v, D) {
          var A = !1;
          if (v.type === "touchstart") {
            if (v.touches && v.touches.length > 1)
              return;
            A = !0;
          }
          var I, W, B = function(sn) {
            var G = [];
            return function bn(nn) {
              nn.columns && nn.columns.length && nn.columns.map(bn), G.push(nn);
            }(sn), G;
          }(D).map(function(sn) {
            return [sn.id, sn.totalWidth];
          }), F = A ? Math.round(v.touches[0].clientX) : v.clientX, E = function() {
            window.cancelAnimationFrame(I), I = null, M({ type: w.columnDoneResizing });
          }, x = function() {
            window.cancelAnimationFrame(I), I = null, M({ type: w.columnResizing, clientX: W });
          }, q = function(sn) {
            W = sn, I || (I = window.requestAnimationFrame(x));
          }, _ = { mouse: { moveEvent: "mousemove", moveHandler: function(sn) {
            return q(sn.clientX);
          }, upEvent: "mouseup", upHandler: function(sn) {
            document.removeEventListener("mousemove", _.mouse.moveHandler), document.removeEventListener("mouseup", _.mouse.upHandler), E();
          } }, touch: { moveEvent: "touchmove", moveHandler: function(sn) {
            return sn.cancelable && (sn.preventDefault(), sn.stopPropagation()), q(sn.touches[0].clientX), !1;
          }, upEvent: "touchend", upHandler: function(sn) {
            document.removeEventListener(_.touch.moveEvent, _.touch.moveHandler), document.removeEventListener(_.touch.upEvent, _.touch.moveHandler), E();
          } } }, ln = A ? _.touch : _.mouse, jn = !!function() {
            if (typeof me == "boolean")
              return me;
            var sn = !1;
            try {
              var G = { get passive() {
                return sn = !0, !1;
              } };
              window.addEventListener("test", null, G), window.removeEventListener("test", null, G);
            } catch {
              sn = !1;
            }
            return me = sn;
          }() && { passive: !1 };
          document.addEventListener(ln.moveEvent, ln.moveHandler, jn), document.addEventListener(ln.upEvent, ln.upHandler, jn), M({ type: w.columnStartResizing, columnId: D.id, columnWidth: D.totalWidth, headerIdWidths: B, clientX: F });
        };
        return [n, { onMouseDown: function(v) {
          return v.persist() || p(v, s);
        }, onTouchStart: function(v) {
          return v.persist() || p(v, s);
        }, style: { cursor: "col-resize" }, draggable: !1, role: "separator" }];
      };
      function ta(n, r) {
        if (r.type === w.init)
          return c({ columnResizing: { columnWidths: {} } }, n);
        if (r.type === w.resetResize)
          return c({}, n, { columnResizing: { columnWidths: {} } });
        if (r.type === w.columnStartResizing) {
          var i = r.clientX, s = r.columnId, M = r.columnWidth, p = r.headerIdWidths;
          return c({}, n, { columnResizing: c({}, n.columnResizing, { startX: i, headerIdWidths: p, columnWidth: M, isResizingColumn: s }) });
        }
        if (r.type === w.columnResizing) {
          var v = r.clientX, D = n.columnResizing, A = D.startX, I = D.columnWidth, W = D.headerIdWidths, B = (v - A) / I, F = {};
          return (W === void 0 ? [] : W).forEach(function(E) {
            var x = E[0], q = E[1];
            F[x] = Math.max(q + q * B, 0);
          }), c({}, n, { columnResizing: c({}, n.columnResizing, { columnWidths: c({}, n.columnResizing.columnWidths, {}, F) }) });
        }
        return r.type === w.columnDoneResizing ? c({}, n, { columnResizing: c({}, n.columnResizing, { startX: null, isResizingColumn: null }) }) : void 0;
      }
      Co.pluginName = "useResizeColumns";
      var oa = function(n) {
        var r = n.flatHeaders, i = n.disableResizing, s = n.getHooks, M = n.state.columnResizing, p = Sn(n);
        r.forEach(function(v) {
          var D = Un(v.disableResizing !== !0 && void 0, i !== !0 && void 0, !0);
          v.canResize = D, v.width = M.columnWidths[v.id] || v.originalWidth || v.width, v.isResizing = M.isResizingColumn === v.id, D && (v.getResizerProps = Cn(s().getResizerProps, { instance: p(), header: v }));
        });
      };
      function aa(n) {
        var r = n.plugins, i = n.dispatch, s = n.autoResetResize, M = s === void 0 || s, p = n.columns;
        Mn(r, ["useAbsoluteLayout"], "useResizeColumns");
        var v = Sn(M);
        Fn(function() {
          v() && i({ type: w.resetResize });
        }, [p]);
        var D = C.useCallback(function() {
          return i({ type: w.resetResize });
        }, [i]);
        Object.assign(n, { resetResizing: D });
      }
      var St = { position: "absolute", top: 0 }, go = function(n) {
        n.getTableBodyProps.push(ut), n.getRowProps.push(ut), n.getHeaderGroupProps.push(ut), n.getFooterGroupProps.push(ut), n.getHeaderProps.push(function(r, i) {
          var s = i.column;
          return [r, { style: c({}, St, { left: s.totalLeft + "px", width: s.totalWidth + "px" }) }];
        }), n.getCellProps.push(function(r, i) {
          var s = i.cell;
          return [r, { style: c({}, St, { left: s.column.totalLeft + "px", width: s.column.totalWidth + "px" }) }];
        }), n.getFooterProps.push(function(r, i) {
          var s = i.column;
          return [r, { style: c({}, St, { left: s.totalLeft + "px", width: s.totalWidth + "px" }) }];
        });
      };
      go.pluginName = "useAbsoluteLayout";
      var ut = function(n, r) {
        return [n, { style: { position: "relative", width: r.instance.totalColumnsWidth + "px" } }];
      }, Nt = { display: "inline-block", boxSizing: "border-box" }, Dt = function(n, r) {
        return [n, { style: { display: "flex", width: r.instance.totalColumnsWidth + "px" } }];
      }, fo = function(n) {
        n.getRowProps.push(Dt), n.getHeaderGroupProps.push(Dt), n.getFooterGroupProps.push(Dt), n.getHeaderProps.push(function(r, i) {
          var s = i.column;
          return [r, { style: c({}, Nt, { width: s.totalWidth + "px" }) }];
        }), n.getCellProps.push(function(r, i) {
          var s = i.cell;
          return [r, { style: c({}, Nt, { width: s.column.totalWidth + "px" }) }];
        }), n.getFooterProps.push(function(r, i) {
          var s = i.column;
          return [r, { style: c({}, Nt, { width: s.totalWidth + "px" }) }];
        });
      };
      function Tt(n) {
        n.getTableProps.push(ra), n.getRowProps.push(At), n.getHeaderGroupProps.push(At), n.getFooterGroupProps.push(At), n.getHeaderProps.push(ua), n.getCellProps.push(ia), n.getFooterProps.push(la);
      }
      fo.pluginName = "useBlockLayout", Tt.pluginName = "useFlexLayout";
      var ra = function(n, r) {
        return [n, { style: { minWidth: r.instance.totalColumnsMinWidth + "px" } }];
      }, At = function(n, r) {
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
      function po(n) {
        n.stateReducers.push(ho), n.getTableProps.push(mo), n.getHeaderProps.push(Mo), n.getRowProps.push(vo);
      }
      w.columnStartResizing = "columnStartResizing", w.columnResizing = "columnResizing", w.columnDoneResizing = "columnDoneResizing", w.resetResize = "resetResize", po.pluginName = "useGridLayout";
      var mo = function(n, r) {
        var i = r.instance;
        return [n, { style: { display: "grid", gridTemplateColumns: i.visibleColumns.map(function(s) {
          var M;
          return i.state.gridLayout.columnWidths[s.id] ? i.state.gridLayout.columnWidths[s.id] + "px" : (M = i.state.columnResizing) != null && M.isResizingColumn ? i.state.gridLayout.startWidths[s.id] + "px" : typeof s.width == "number" ? s.width + "px" : s.width;
        }).join(" ") } }];
      }, Mo = function(n, r) {
        var i = r.column;
        return [n, { id: "header-cell-" + i.id, style: { position: "sticky", gridColumn: "span " + i.totalVisibleHeaderCount } }];
      }, vo = function(n, r) {
        var i = r.row;
        return i.isExpanded ? [n, { style: { gridColumn: "1 / " + (i.cells.length + 1) } }] : [n, {}];
      };
      function ho(n, r, i, s) {
        if (r.type === w.init)
          return c({ gridLayout: { columnWidths: {} } }, n);
        if (r.type === w.resetResize)
          return c({}, n, { gridLayout: { columnWidths: {} } });
        if (r.type === w.columnStartResizing) {
          var M = r.columnId, p = r.headerIdWidths, v = bt(M);
          if (v !== void 0) {
            var D = s.visibleColumns.reduce(function(G, bn) {
              var nn;
              return c({}, G, ((nn = {})[bn.id] = bt(bn.id), nn));
            }, {}), A = s.visibleColumns.reduce(function(G, bn) {
              var nn;
              return c({}, G, ((nn = {})[bn.id] = bn.minWidth, nn));
            }, {}), I = s.visibleColumns.reduce(function(G, bn) {
              var nn;
              return c({}, G, ((nn = {})[bn.id] = bn.maxWidth, nn));
            }, {}), W = p.map(function(G) {
              var bn = G[0];
              return [bn, bt(bn)];
            });
            return c({}, n, { gridLayout: c({}, n.gridLayout, { startWidths: D, minWidths: A, maxWidths: I, headerIdGridWidths: W, columnWidth: v }) });
          }
          return n;
        }
        if (r.type === w.columnResizing) {
          var B = r.clientX, F = n.columnResizing.startX, E = n.gridLayout, x = E.columnWidth, q = E.minWidths, _ = E.maxWidths, ln = E.headerIdGridWidths, jn = (B - F) / x, sn = {};
          return (ln === void 0 ? [] : ln).forEach(function(G) {
            var bn = G[0], nn = G[1];
            sn[bn] = Math.min(Math.max(q[bn], nn + nn * jn), _[bn]);
          }), c({}, n, { gridLayout: c({}, n.gridLayout, { columnWidths: c({}, n.gridLayout.columnWidths, {}, sn) }) });
        }
        return r.type === w.columnDoneResizing ? c({}, n, { gridLayout: c({}, n.gridLayout, { startWidths: {}, minWidths: {}, maxWidths: {} }) }) : void 0;
      }
      function bt(n) {
        var r, i = (r = document.getElementById("header-cell-" + n)) == null ? void 0 : r.offsetWidth;
        if (i !== void 0)
          return i;
      }
      y._UNSTABLE_usePivotColumns = ht, y.actions = w, y.defaultColumn = un, y.defaultGroupByFn = _t, y.defaultOrderByFn = $t, y.defaultRenderer = Rn, y.emptyRenderer = L, y.ensurePluginOrder = Mn, y.flexRender = ae, y.functionalUpdate = Bn, y.loopHooks = Gn, y.makePropGetter = Cn, y.makeRenderer = Nn, y.reduceHooks = gn, y.safeUseLayoutEffect = Jn, y.useAbsoluteLayout = go, y.useAsyncDebounce = function(n, r) {
        r === void 0 && (r = 0);
        var i = C.useRef({}), s = Sn(n), M = Sn(r);
        return C.useCallback(function() {
          var p = b(regeneratorRuntime.mark(function v() {
            var D, A, I, W = arguments;
            return regeneratorRuntime.wrap(function(B) {
              for (; ; )
                switch (B.prev = B.next) {
                  case 0:
                    for (D = W.length, A = new Array(D), I = 0; I < D; I++)
                      A[I] = W[I];
                    return i.current.promise || (i.current.promise = new Promise(function(F, E) {
                      i.current.resolve = F, i.current.reject = E;
                    })), i.current.timeout && clearTimeout(i.current.timeout), i.current.timeout = setTimeout(b(regeneratorRuntime.mark(function F() {
                      return regeneratorRuntime.wrap(function(E) {
                        for (; ; )
                          switch (E.prev = E.next) {
                            case 0:
                              return delete i.current.timeout, E.prev = 1, E.t0 = i.current, E.next = 5, s().apply(void 0, A);
                            case 5:
                              E.t1 = E.sent, E.t0.resolve.call(E.t0, E.t1), E.next = 12;
                              break;
                            case 9:
                              E.prev = 9, E.t2 = E.catch(1), i.current.reject(E.t2);
                            case 12:
                              return E.prev = 12, delete i.current.promise, E.finish(12);
                            case 15:
                            case "end":
                              return E.stop();
                          }
                      }, F, null, [[1, 9, 12, 15]]);
                    })), M()), B.abrupt("return", i.current.promise);
                  case 5:
                  case "end":
                    return B.stop();
                }
            }, v);
          }));
          return function() {
            return p.apply(this, arguments);
          };
        }(), [s, M]);
      }, y.useBlockLayout = fo, y.useColumnOrder = so, y.useExpanded = be, y.useFilters = Wt, y.useFlexLayout = Tt, y.useGetLatest = Sn, y.useGlobalFilter = ft, y.useGridLayout = po, y.useGroupBy = Mt, y.useMountedLayoutEffect = Fn, y.usePagination = vt, y.useResizeColumns = Co, y.useRowSelect = oo, y.useRowState = wt, y.useSortBy = Zt, y.useTable = function(n) {
        for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++)
          i[s - 1] = arguments[s];
        n = ie(n), i = [Ne].concat(i);
        var M = C.useRef({}), p = Sn(M.current);
        Object.assign(p(), c({}, n, { plugins: i, hooks: Ae() })), i.filter(Boolean).forEach(function(d) {
          d(p().hooks);
        });
        var v = Sn(p().hooks);
        p().getHooks = v, delete p().hooks, Object.assign(p(), gn(v().useOptions, ie(n)));
        var D = p(), A = D.data, I = D.columns, W = D.initialState, B = D.defaultColumn, F = D.getSubRows, E = D.getRowId, x = D.stateReducer, q = D.useControlledState, _ = Sn(x), ln = C.useCallback(function(d, h) {
          if (!h.type)
            throw console.info({ action: h }), new Error("Unknown Action 👆");
          return [].concat(v().stateReducers, Array.isArray(_()) ? _() : [_()]).reduce(function(N, T) {
            return T(N, h, d, p()) || N;
          }, d);
        }, [v, _, p]), jn = C.useReducer(ln, void 0, function() {
          return ln(W, { type: w.init });
        }), sn = jn[0], G = jn[1], bn = gn([].concat(v().useControlledState, [q]), sn, { instance: p() });
        Object.assign(p(), { state: bn, dispatch: G });
        var nn = C.useMemo(function() {
          return Vn(gn(v().columns, I, { instance: p() }));
        }, [v, p, I].concat(gn(v().columnsDeps, [], { instance: p() })));
        p().columns = nn;
        var Ln = C.useMemo(function() {
          return gn(v().allColumns, de(nn), { instance: p() }).map(ne);
        }, [nn, v, p].concat(gn(v().allColumnsDeps, [], { instance: p() })));
        p().allColumns = Ln;
        var zn = C.useMemo(function() {
          for (var d = [], h = [], N = {}, T = [].concat(Ln); T.length; ) {
            var R = T.shift();
            xe({ data: A, rows: d, flatRows: h, rowsById: N, column: R, getRowId: E, getSubRows: F, accessValueHooks: v().accessValue, getInstance: p });
          }
          return [d, h, N];
        }, [Ln, A, E, F, v, p]), fn = zn[0], vn = zn[1], Yn = zn[2];
        Object.assign(p(), { rows: fn, initialRows: [].concat(fn), flatRows: vn, rowsById: Yn }), Gn(v().useInstanceAfterData, p());
        var Dn = C.useMemo(function() {
          return gn(v().visibleColumns, Ln, { instance: p() }).map(function(d) {
            return en(d, B);
          });
        }, [v, Ln, p, B].concat(gn(v().visibleColumnsDeps, [], { instance: p() })));
        Ln = C.useMemo(function() {
          var d = [].concat(Dn);
          return Ln.forEach(function(h) {
            d.find(function(N) {
              return N.id === h.id;
            }) || d.push(h);
          }), d;
        }, [Ln, Dn]), p().allColumns = Ln;
        var Hn = C.useMemo(function() {
          return gn(v().headerGroups, dn(Dn, B), p());
        }, [v, Dn, B, p].concat(gn(v().headerGroupsDeps, [], { instance: p() })));
        p().headerGroups = Hn;
        var e = C.useMemo(function() {
          return Hn.length ? Hn[0].headers : [];
        }, [Hn]);
        p().headers = e, p().flatHeaders = Hn.reduce(function(d, h) {
          return [].concat(d, h.headers);
        }, []), Gn(v().useInstanceBeforeDimensions, p());
        var t = Dn.filter(function(d) {
          return d.isVisible;
        }).map(function(d) {
          return d.id;
        }).sort().join("_");
        Dn = C.useMemo(function() {
          return Dn.filter(function(d) {
            return d.isVisible;
          });
        }, [Dn, t]), p().visibleColumns = Dn;
        var u = pe(e), a = u[0], f = u[1], m = u[2];
        return p().totalColumnsMinWidth = a, p().totalColumnsWidth = f, p().totalColumnsMaxWidth = m, Gn(v().useInstance, p()), [].concat(p().flatHeaders, p().allColumns).forEach(function(d) {
          d.render = Nn(p(), d), d.getHeaderProps = Cn(v().getHeaderProps, { instance: p(), column: d }), d.getFooterProps = Cn(v().getFooterProps, { instance: p(), column: d });
        }), p().headerGroups = C.useMemo(function() {
          return Hn.filter(function(d, h) {
            return d.headers = d.headers.filter(function(N) {
              return N.headers ? function T(R) {
                return R.filter(function(H) {
                  return H.headers ? T(H.headers) : H.isVisible;
                }).length;
              }(N.headers) : N.isVisible;
            }), !!d.headers.length && (d.getHeaderGroupProps = Cn(v().getHeaderGroupProps, { instance: p(), headerGroup: d, index: h }), d.getFooterGroupProps = Cn(v().getFooterGroupProps, { instance: p(), headerGroup: d, index: h }), !0);
          });
        }, [Hn, p, v]), p().footerGroups = [].concat(p().headerGroups).reverse(), p().prepareRow = C.useCallback(function(d) {
          d.getRowProps = Cn(v().getRowProps, { instance: p(), row: d }), d.allCells = Ln.map(function(h) {
            var N = d.values[h.id], T = { column: h, row: d, value: N };
            return T.getCellProps = Cn(v().getCellProps, { instance: p(), cell: T }), T.render = Nn(p(), h, { row: d, cell: T, value: N }), T;
          }), d.cells = Dn.map(function(h) {
            return d.allCells.find(function(N) {
              return N.column.id === h.id;
            });
          }), Gn(v().prepareRow, d, { instance: p() });
        }, [v, p, Ln, Dn]), p().getTableProps = Cn(v().getTableProps, { instance: p() }), p().getTableBodyProps = Cn(v().getTableBodyProps, { instance: p() }), Gn(v().useFinalInstance, p()), p();
      }, Object.defineProperty(y, "__esModule", { value: !0 });
    });
  }(Do, Do.exports)), Do.exports;
}
var To = { exports: {} }, Ua;
function Ou() {
  return Ua || (Ua = 1, function(o, g) {
    (function(y, C) {
      C(g, Y);
    })(nr, function(y, C) {
      C = C && Object.prototype.hasOwnProperty.call(C, "default") ? C.default : C;
      function S(e, t, u, a, f, m, d) {
        try {
          var h = e[m](d), N = h.value;
        } catch (T) {
          u(T);
          return;
        }
        h.done ? t(N) : Promise.resolve(N).then(a, f);
      }
      function b(e) {
        return function() {
          var t = this, u = arguments;
          return new Promise(function(a, f) {
            var m = e.apply(t, u);
            function d(N) {
              S(m, a, f, d, h, "next", N);
            }
            function h(N) {
              S(m, a, f, d, h, "throw", N);
            }
            d(void 0);
          });
        };
      }
      function c() {
        return c = Object.assign || function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var u = arguments[t];
            for (var a in u)
              Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
          }
          return e;
        }, c.apply(this, arguments);
      }
      function k(e, t) {
        if (e == null)
          return {};
        var u = {}, a = Object.keys(e), f, m;
        for (m = 0; m < a.length; m++)
          f = a[m], !(t.indexOf(f) >= 0) && (u[f] = e[f]);
        return u;
      }
      function Tn(e, t) {
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
      function w(e) {
        var t = Tn(e, "string");
        return typeof t == "symbol" ? t : String(t);
      }
      var Rn = "Renderer Error ☝️", L = {
        init: "init"
      }, un = function(t) {
        var u = t.value, a = u === void 0 ? "" : u;
        return a;
      }, An = function() {
        return C.createElement(C.Fragment, null, " ");
      }, Cn = {
        Cell: un,
        width: 150,
        minWidth: 0,
        maxWidth: Number.MAX_SAFE_INTEGER
      };
      function gn() {
        for (var e = arguments.length, t = new Array(e), u = 0; u < e; u++)
          t[u] = arguments[u];
        return t.reduce(function(a, f) {
          var m = f.style, d = f.className, h = k(f, ["style", "className"]);
          return a = c({}, a, {}, h), m && (a.style = a.style ? c({}, a.style || {}, {}, m || {}) : m), d && (a.className = a.className ? a.className + " " + d : d), a.className === "" && delete a.className, a;
        }, {});
      }
      function Gn(e, t, u) {
        return typeof t == "function" ? Gn({}, t(e, u)) : Array.isArray(t) ? gn.apply(void 0, [e].concat(t)) : gn(e, t);
      }
      var Mn = function(t, u) {
        return u === void 0 && (u = {}), function(a) {
          return a === void 0 && (a = {}), [].concat(t, [a]).reduce(function(f, m) {
            return Gn(f, m, c({}, u, {
              userProps: a
            }));
          }, {});
        };
      }, Bn = function(t, u, a, f) {
        return a === void 0 && (a = {}), t.reduce(function(m, d) {
          var h = d(m, a);
          if (!f && typeof h > "u")
            throw console.info(d), new Error("React Table: A reducer hook ☝️ just returned undefined! This is not allowed.");
          return h;
        }, u);
      }, Sn = function(t, u, a) {
        return a === void 0 && (a = {}), t.forEach(function(f) {
          var m = f(u, a);
          if (typeof m < "u")
            throw console.info(f, m), new Error("React Table: A loop-type hook ☝️ just returned a value! This is not allowed.");
        });
      };
      function Jn(e, t, u, a) {
        if (a)
          throw new Error('Defining plugins in the "after" section of ensurePluginOrder is no longer supported (see plugin ' + u + ")");
        var f = e.findIndex(function(m) {
          return m.pluginName === u;
        });
        if (f === -1)
          throw new Error('The plugin "' + u + `" was not found in the plugin list!
This usually means you need to need to name your plugin hook by setting the 'pluginName' property of the hook function, eg:

  ` + u + ".pluginName = '" + u + `'
`);
        t.forEach(function(m) {
          var d = e.findIndex(function(h) {
            return h.pluginName === m;
          });
          if (d > -1 && d > f)
            throw new Error("React Table: The " + u + " plugin hook must be placed after the " + m + " plugin hook!");
        });
      }
      function Fn(e, t) {
        return typeof e == "function" ? e(t) : e;
      }
      function Nn(e) {
        var t = C.useRef();
        return t.current = e, C.useCallback(function() {
          return t.current;
        }, []);
      }
      var ae = typeof document < "u" ? C.useLayoutEffect : C.useEffect;
      function Vn(e, t) {
        var u = C.useRef(!1);
        ae(function() {
          u.current && e(), u.current = !0;
        }, t);
      }
      function de(e, t) {
        t === void 0 && (t = 0);
        var u = C.useRef({}), a = Nn(e), f = Nn(t);
        return C.useCallback(
          /* @__PURE__ */ function() {
            var m = b(
              /* @__PURE__ */ regeneratorRuntime.mark(function d() {
                var h, N, T, R = arguments;
                return regeneratorRuntime.wrap(function(P) {
                  for (; ; )
                    switch (P.prev = P.next) {
                      case 0:
                        for (h = R.length, N = new Array(h), T = 0; T < h; T++)
                          N[T] = R[T];
                        return u.current.promise || (u.current.promise = new Promise(function(z, K) {
                          u.current.resolve = z, u.current.reject = K;
                        })), u.current.timeout && clearTimeout(u.current.timeout), u.current.timeout = setTimeout(
                          /* @__PURE__ */ b(
                            /* @__PURE__ */ regeneratorRuntime.mark(function z() {
                              return regeneratorRuntime.wrap(function(j) {
                                for (; ; )
                                  switch (j.prev = j.next) {
                                    case 0:
                                      return delete u.current.timeout, j.prev = 1, j.t0 = u.current, j.next = 5, a().apply(void 0, N);
                                    case 5:
                                      j.t1 = j.sent, j.t0.resolve.call(j.t0, j.t1), j.next = 12;
                                      break;
                                    case 9:
                                      j.prev = 9, j.t2 = j.catch(1), u.current.reject(j.t2);
                                    case 12:
                                      return j.prev = 12, delete u.current.promise, j.finish(12);
                                    case 15:
                                    case "end":
                                      return j.stop();
                                  }
                              }, z, null, [[1, 9, 12, 15]]);
                            })
                          ),
                          f()
                        ), P.abrupt("return", u.current.promise);
                      case 5:
                      case "end":
                        return P.stop();
                    }
                }, d);
              })
            );
            return function() {
              return m.apply(this, arguments);
            };
          }(),
          [a, f]
        );
      }
      function ne(e, t, u) {
        return u === void 0 && (u = {}), function(a, f) {
          f === void 0 && (f = {});
          var m = typeof a == "string" ? t[a] : a;
          if (typeof m > "u")
            throw console.info(t), new Error(Rn);
          return en(m, c({}, e, {
            column: t
          }, u, {}, f));
        };
      }
      function en(e, t) {
        return dn(e) ? C.createElement(e, t) : e;
      }
      function dn(e) {
        return Kn(e) || typeof e == "function" || Un(e);
      }
      function Kn(e) {
        return typeof e == "function" && function() {
          var t = Object.getPrototypeOf(e);
          return t.prototype && t.prototype.isReactComponent;
        }();
      }
      function Un(e) {
        return typeof e == "object" && typeof e.$$typeof == "symbol" && ["react.memo", "react.forward_ref"].includes(e.$$typeof.description);
      }
      function Qn(e, t, u) {
        return u === void 0 && (u = 0), e.map(function(a) {
          return a = c({}, a, {
            parent: t,
            depth: u
          }), Te(a), a.columns && (a.columns = Qn(a.columns, a, u + 1)), a;
        });
      }
      function Ie(e) {
        return Oe(e, "columns");
      }
      function Te(e) {
        var t = e.id, u = e.accessor, a = e.Header;
        if (typeof u == "string") {
          t = t || u;
          var f = u.split(".");
          u = function(d) {
            return me(d, f);
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
      function Se(e, t) {
        if (!t)
          throw new Error();
        return Object.assign(e, c({
          // Make sure there is a fallback header, just in case
          Header: An,
          Footer: An
        }, Cn, {}, t, {}, e)), Object.assign(e, {
          originalWidth: e.width
        }), e;
      }
      function Re(e, t, u) {
        u === void 0 && (u = function() {
          return {};
        });
        for (var a = [], f = e, m = 0, d = function() {
          return m++;
        }, h = function() {
          var T = {
            headers: []
          }, R = [], H = f.some(function(P) {
            return P.parent;
          });
          f.forEach(function(P) {
            var z = [].concat(R).reverse()[0], K;
            if (H) {
              if (P.parent)
                K = c({}, P.parent, {
                  originalId: P.parent.id,
                  id: P.parent.id + "_" + d(),
                  headers: [P]
                }, u(P));
              else {
                var j = P.id + "_placeholder";
                K = Se(c({
                  originalId: j,
                  id: P.id + "_placeholder_" + d(),
                  placeholderOf: P,
                  headers: [P]
                }, u(P)), t);
              }
              z && z.originalId === K.originalId ? z.headers.push(P) : R.push(K);
            }
            T.headers.push(P);
          }), a.push(T), f = R;
        }; f.length; )
          h();
        return a.reverse();
      }
      var ge = /* @__PURE__ */ new Map();
      function me(e, t, u) {
        if (!t)
          return e;
        var a = typeof t == "function" ? t : JSON.stringify(t), f = ge.get(a) || function() {
          var d = Ne(t);
          return ge.set(a, d), d;
        }(), m;
        try {
          m = f.reduce(function(d, h) {
            return d[h];
          }, e);
        } catch {
        }
        return typeof m < "u" ? m : u;
      }
      function re() {
        for (var e = arguments.length, t = new Array(e), u = 0; u < e; u++)
          t[u] = arguments[u];
        for (var a = 0; a < t.length; a += 1)
          if (typeof t[a] < "u")
            return t[a];
      }
      function Pe(e) {
        if (typeof e == "function")
          return e;
      }
      function Oe(e, t) {
        var u = [], a = function f(m) {
          m.forEach(function(d) {
            d[t] ? f(d[t]) : u.push(d);
          });
        };
        return a(e), u;
      }
      function O(e, t) {
        var u = t.manualExpandedKey, a = t.expanded, f = t.expandSubRows, m = f === void 0 ? !0 : f, d = [], h = function N(T, R) {
          R === void 0 && (R = !0), T.isExpanded = T.original && T.original[u] || a[T.id], T.canExpand = T.subRows && !!T.subRows.length, R && d.push(T), T.subRows && T.subRows.length && T.isExpanded && T.subRows.forEach(function(H) {
            return N(H, m);
          });
        };
        return e.forEach(function(N) {
          return h(N);
        }), d;
      }
      function V(e, t, u) {
        return Pe(e) || t[e] || u[e] || u.text;
      }
      function rn(e, t, u) {
        return e ? e(t, u) : typeof t > "u";
      }
      function tn() {
        throw new Error("React-Table: You have not called prepareRow(row) one or more rows you are attempting to render.");
      }
      var Wn = null;
      function Xn() {
        if (typeof Wn == "boolean")
          return Wn;
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
        return Wn = e, Wn;
      }
      var Le = /\[/g, Ae = /\]/g;
      function Ne(e) {
        return De(e).map(function(t) {
          return String(t).replace(".", "_");
        }).join(".").replace(Le, ".").replace(Ae, "").split(".");
      }
      function De(e, t) {
        if (t === void 0 && (t = []), !Array.isArray(e))
          t.push(e);
        else
          for (var u = 0; u < e.length; u += 1)
            De(e[u], t);
        return t;
      }
      var Ee = function(t) {
        return c({
          role: "table"
        }, t);
      }, Ke = function(t) {
        return c({
          role: "rowgroup"
        }, t);
      }, fe = function(t, u) {
        var a = u.column;
        return c({
          key: "header_" + a.id,
          colSpan: a.totalVisibleHeaderCount,
          role: "columnheader"
        }, t);
      }, ce = function(t, u) {
        var a = u.column;
        return c({
          key: "footer_" + a.id,
          colSpan: a.totalVisibleHeaderCount
        }, t);
      }, Me = function(t, u) {
        var a = u.index;
        return c({
          key: "headerGroup_" + a,
          role: "row"
        }, t);
      }, ve = function(t, u) {
        var a = u.index;
        return c({
          key: "footerGroup_" + a
        }, t);
      }, qe = function(t, u) {
        var a = u.row;
        return c({
          key: "row_" + a.id,
          role: "row"
        }, t);
      }, $ = function(t, u) {
        var a = u.cell;
        return c({
          key: "cell_" + a.row.id + "_" + a.column.id,
          role: "cell"
        }, t);
      };
      function En() {
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
          getTableProps: [Ee],
          getTableBodyProps: [Ke],
          getHeaderGroupProps: [Me],
          getFooterGroupProps: [ve],
          getHeaderProps: [fe],
          getFooterProps: [ce],
          getRowProps: [qe],
          getCellProps: [$],
          useFinalInstance: []
        };
      }
      L.resetHiddenColumns = "resetHiddenColumns", L.toggleHideColumn = "toggleHideColumn", L.setHiddenColumns = "setHiddenColumns", L.toggleHideAllColumns = "toggleHideAllColumns";
      var te = function(t) {
        t.getToggleHiddenProps = [ie], t.getToggleHideAllColumnsProps = [pe], t.stateReducers.push(xe), t.useInstanceBeforeDimensions.push(be), t.headerGroupsDeps.push(function(u, a) {
          var f = a.instance;
          return [].concat(u, [f.state.hiddenColumns]);
        }), t.useInstance.push(Ue);
      };
      te.pluginName = "useColumnVisibility";
      var ie = function(t, u) {
        var a = u.column;
        return [t, {
          onChange: function(m) {
            a.toggleHidden(!m.target.checked);
          },
          style: {
            cursor: "pointer"
          },
          checked: a.isVisible,
          title: "Toggle Column Visible"
        }];
      }, pe = function(t, u) {
        var a = u.instance;
        return [t, {
          onChange: function(m) {
            a.toggleHideAllColumns(!m.target.checked);
          },
          style: {
            cursor: "pointer"
          },
          checked: !a.allColumnsHidden && !a.state.hiddenColumns.length,
          title: "Toggle All Columns Hidden",
          indeterminate: !a.allColumnsHidden && a.state.hiddenColumns.length
        }];
      };
      function xe(e, t, u, a) {
        if (t.type === L.init)
          return c({
            hiddenColumns: []
          }, e);
        if (t.type === L.resetHiddenColumns)
          return c({}, e, {
            hiddenColumns: a.initialState.hiddenColumns || []
          });
        if (t.type === L.toggleHideColumn) {
          var f = typeof t.value < "u" ? t.value : !e.hiddenColumns.includes(t.columnId), m = f ? [].concat(e.hiddenColumns, [t.columnId]) : e.hiddenColumns.filter(function(h) {
            return h !== t.columnId;
          });
          return c({}, e, {
            hiddenColumns: m
          });
        }
        if (t.type === L.setHiddenColumns)
          return c({}, e, {
            hiddenColumns: Fn(t.value, e.hiddenColumns)
          });
        if (t.type === L.toggleHideAllColumns) {
          var d = typeof t.value < "u" ? t.value : !e.hiddenColumns.length;
          return c({}, e, {
            hiddenColumns: d ? a.allColumns.map(function(h) {
              return h.id;
            }) : []
          });
        }
      }
      function be(e) {
        var t = e.headers, u = e.state.hiddenColumns, a = C.useRef(!1);
        a.current;
        var f = function d(h, N) {
          h.isVisible = N && !u.includes(h.id);
          var T = 0;
          return h.headers && h.headers.length ? h.headers.forEach(function(R) {
            return T += d(R, h.isVisible);
          }) : T = h.isVisible ? 1 : 0, h.totalVisibleHeaderCount = T, T;
        }, m = 0;
        t.forEach(function(d) {
          return m += f(d, !0);
        });
      }
      function Ue(e) {
        var t = e.columns, u = e.flatHeaders, a = e.dispatch, f = e.allColumns, m = e.getHooks, d = e.state.hiddenColumns, h = e.autoResetHiddenColumns, N = h === void 0 ? !0 : h, T = Nn(e), R = f.length === d.length, H = C.useCallback(function(Z, cn) {
          return a({
            type: L.toggleHideColumn,
            columnId: Z,
            value: cn
          });
        }, [a]), P = C.useCallback(function(Z) {
          return a({
            type: L.setHiddenColumns,
            value: Z
          });
        }, [a]), z = C.useCallback(function(Z) {
          return a({
            type: L.toggleHideAllColumns,
            value: Z
          });
        }, [a]), K = Mn(m().getToggleHideAllColumnsProps, {
          instance: T()
        });
        u.forEach(function(Z) {
          Z.toggleHidden = function(cn) {
            a({
              type: L.toggleHideColumn,
              columnId: Z.id,
              value: cn
            });
          }, Z.getToggleHiddenProps = Mn(m().getToggleHiddenProps, {
            instance: T(),
            column: Z
          });
        });
        var j = Nn(N);
        Vn(function() {
          j() && a({
            type: L.resetHiddenColumns
          });
        }, [a, t]), Object.assign(e, {
          allColumnsHidden: R,
          toggleHideColumn: H,
          setHiddenColumns: P,
          toggleHideAllColumns: z,
          getToggleHideAllColumnsProps: K
        });
      }
      var Xe = {}, _e = {}, Fe = function(t, u, a) {
        return t;
      }, Je = function(t, u) {
        return t.subRows || [];
      }, ze = function(t, u, a) {
        return "" + (a ? [a.id, u].join(".") : u);
      }, We = function(t) {
        return t;
      };
      function Be(e) {
        var t = e.initialState, u = t === void 0 ? Xe : t, a = e.defaultColumn, f = a === void 0 ? _e : a, m = e.getSubRows, d = m === void 0 ? Je : m, h = e.getRowId, N = h === void 0 ? ze : h, T = e.stateReducer, R = T === void 0 ? Fe : T, H = e.useControlledState, P = H === void 0 ? We : H, z = k(e, ["initialState", "defaultColumn", "getSubRows", "getRowId", "stateReducer", "useControlledState"]);
        return c({}, z, {
          initialState: u,
          defaultColumn: f,
          getSubRows: d,
          getRowId: N,
          stateReducer: R,
          useControlledState: P
        });
      }
      var at = function(t) {
        for (var u = arguments.length, a = new Array(u > 1 ? u - 1 : 0), f = 1; f < u; f++)
          a[f - 1] = arguments[f];
        t = Be(t), a = [te].concat(a);
        var m = C.useRef({}), d = Nn(m.current);
        Object.assign(d(), c({}, t, {
          plugins: a,
          hooks: En()
        })), a.filter(Boolean).forEach(function(pn) {
          pn(d().hooks);
        });
        var h = Nn(d().hooks);
        d().getHooks = h, delete d().hooks, Object.assign(d(), Bn(h().useOptions, Be(t)));
        var N = d(), T = N.data, R = N.columns, H = N.initialState, P = N.defaultColumn, z = N.getSubRows, K = N.getRowId, j = N.stateReducer, Z = N.useControlledState, cn = Nn(j), mn = C.useCallback(function(pn, Zn) {
          if (!Zn.type)
            throw console.info({
              action: Zn
            }), new Error("Unknown Action 👆");
          return [].concat(h().stateReducers, Array.isArray(cn()) ? cn() : [cn()]).reduce(function(ue, he) {
            return he(ue, Zn, pn, d()) || ue;
          }, pn);
        }, [h, cn, d]), X = C.useReducer(mn, void 0, function() {
          return mn(H, {
            type: L.init
          });
        }), In = X[0], xn = X[1], J = Bn([].concat(h().useControlledState, [Z]), In, {
          instance: d()
        });
        Object.assign(d(), {
          state: J,
          dispatch: xn
        });
        var U = C.useMemo(function() {
          return Qn(Bn(h().columns, R, {
            instance: d()
          }));
        }, [h, d, R].concat(Bn(h().columnsDeps, [], {
          instance: d()
        })));
        d().columns = U;
        var Q = C.useMemo(function() {
          return Bn(h().allColumns, Ie(U), {
            instance: d()
          }).map(Te);
        }, [U, h, d].concat(Bn(h().allColumnsDeps, [], {
          instance: d()
        })));
        d().allColumns = Q;
        var yn = C.useMemo(function() {
          for (var pn = [], Zn = [], ue = {}, he = [].concat(Q); he.length; ) {
            var se = he.shift();
            xt({
              data: T,
              rows: pn,
              flatRows: Zn,
              rowsById: ue,
              column: se,
              getRowId: K,
              getSubRows: z,
              accessValueHooks: h().accessValue,
              getInstance: d
            });
          }
          return [pn, Zn, ue];
        }, [Q, T, K, z, h, d]), kn = yn[0], Pn = yn[1], qn = yn[2];
        Object.assign(d(), {
          rows: kn,
          initialRows: [].concat(kn),
          flatRows: Pn,
          rowsById: qn
          // materializedColumns,
        }), Sn(h().useInstanceAfterData, d());
        var on = C.useMemo(function() {
          return Bn(h().visibleColumns, Q, {
            instance: d()
          }).map(function(pn) {
            return Se(pn, P);
          });
        }, [h, Q, d, P].concat(Bn(h().visibleColumnsDeps, [], {
          instance: d()
        })));
        Q = C.useMemo(function() {
          var pn = [].concat(on);
          return Q.forEach(function(Zn) {
            pn.find(function(ue) {
              return ue.id === Zn.id;
            }) || pn.push(Zn);
          }), pn;
        }, [Q, on]), d().allColumns = Q;
        {
          var le = Q.filter(function(pn, Zn) {
            return Q.findIndex(function(ue) {
              return ue.id === pn.id;
            }) !== Zn;
          });
          if (le.length)
            throw console.info(Q), new Error('Duplicate columns were found with ids: "' + le.map(function(pn) {
              return pn.id;
            }).join(", ") + '" in the columns array above');
        }
        var On = C.useMemo(function() {
          return Bn(h().headerGroups, Re(on, P), d());
        }, [h, on, P, d].concat(Bn(h().headerGroupsDeps, [], {
          instance: d()
        })));
        d().headerGroups = On;
        var hn = C.useMemo(function() {
          return On.length ? On[0].headers : [];
        }, [On]);
        d().headers = hn, d().flatHeaders = On.reduce(function(pn, Zn) {
          return [].concat(pn, Zn.headers);
        }, []), Sn(h().useInstanceBeforeDimensions, d());
        var wn = on.filter(function(pn) {
          return pn.isVisible;
        }).map(function(pn) {
          return pn.id;
        }).sort().join("_");
        on = C.useMemo(
          function() {
            return on.filter(function(pn) {
              return pn.isVisible;
            });
          },
          // eslint-disable-next-line react-hooks/exhaustive-deps
          [on, wn]
        ), d().visibleColumns = on;
        var _n = dt(hn), ye = _n[0], et = _n[1], It = _n[2];
        return d().totalColumnsMinWidth = ye, d().totalColumnsWidth = et, d().totalColumnsMaxWidth = It, Sn(h().useInstance, d()), [].concat(d().flatHeaders, d().allColumns).forEach(function(pn) {
          pn.render = ne(d(), pn), pn.getHeaderProps = Mn(h().getHeaderProps, {
            instance: d(),
            column: pn
          }), pn.getFooterProps = Mn(h().getFooterProps, {
            instance: d(),
            column: pn
          });
        }), d().headerGroups = C.useMemo(function() {
          return On.filter(function(pn, Zn) {
            return pn.headers = pn.headers.filter(function(ue) {
              var he = function se(Ge) {
                return Ge.filter(function(Ce) {
                  return Ce.headers ? se(Ce.headers) : Ce.isVisible;
                }).length;
              };
              return ue.headers ? he(ue.headers) : ue.isVisible;
            }), pn.headers.length ? (pn.getHeaderGroupProps = Mn(h().getHeaderGroupProps, {
              instance: d(),
              headerGroup: pn,
              index: Zn
            }), pn.getFooterGroupProps = Mn(h().getFooterGroupProps, {
              instance: d(),
              headerGroup: pn,
              index: Zn
            }), !0) : !1;
          });
        }, [On, d, h]), d().footerGroups = [].concat(d().headerGroups).reverse(), d().prepareRow = C.useCallback(function(pn) {
          pn.getRowProps = Mn(h().getRowProps, {
            instance: d(),
            row: pn
          }), pn.allCells = Q.map(function(Zn) {
            var ue = pn.values[Zn.id], he = {
              column: Zn,
              row: pn,
              value: ue
            };
            return he.getCellProps = Mn(h().getCellProps, {
              instance: d(),
              cell: he
            }), he.render = ne(d(), Zn, {
              row: pn,
              cell: he,
              value: ue
            }), he;
          }), pn.cells = on.map(function(Zn) {
            return pn.allCells.find(function(ue) {
              return ue.column.id === Zn.id;
            });
          }), Sn(h().prepareRow, pn, {
            instance: d()
          });
        }, [h, d, Q, on]), d().getTableProps = Mn(h().getTableProps, {
          instance: d()
        }), d().getTableBodyProps = Mn(h().getTableBodyProps, {
          instance: d()
        }), Sn(h().useFinalInstance, d()), d();
      };
      function dt(e, t) {
        t === void 0 && (t = 0);
        var u = 0, a = 0, f = 0, m = 0;
        return e.forEach(function(d) {
          var h = d.headers;
          if (d.totalLeft = t, h && h.length) {
            var N = dt(h, t), T = N[0], R = N[1], H = N[2], P = N[3];
            d.totalMinWidth = T, d.totalWidth = R, d.totalMaxWidth = H, d.totalFlexWidth = P;
          } else
            d.totalMinWidth = d.minWidth, d.totalWidth = Math.min(Math.max(d.minWidth, d.width), d.maxWidth), d.totalMaxWidth = d.maxWidth, d.totalFlexWidth = d.canResize ? d.totalWidth : 0;
          d.isVisible && (t += d.totalWidth, u += d.totalMinWidth, a += d.totalWidth, f += d.totalMaxWidth, m += d.totalFlexWidth);
        }), [u, a, f, m];
      }
      function xt(e) {
        var t = e.data, u = e.rows, a = e.flatRows, f = e.rowsById, m = e.column, d = e.getRowId, h = e.getSubRows, N = e.accessValueHooks, T = e.getInstance, R = function H(P, z, K, j, Z) {
          K === void 0 && (K = 0);
          var cn = P, mn = d(P, z, j), X = f[mn];
          if (X)
            X.subRows && X.originalSubRows.forEach(function(xn, J) {
              return H(xn, J, K + 1, X);
            });
          else if (X = {
            id: mn,
            original: cn,
            index: z,
            depth: K,
            cells: [{}]
            // This is a dummy cell
          }, X.cells.map = tn, X.cells.filter = tn, X.cells.forEach = tn, X.cells[0].getCellProps = tn, X.values = {}, Z.push(X), a.push(X), f[mn] = X, X.originalSubRows = h(P, z), X.originalSubRows) {
            var In = [];
            X.originalSubRows.forEach(function(xn, J) {
              return H(xn, J, K + 1, X, In);
            }), X.subRows = In;
          }
          m.accessor && (X.values[m.id] = m.accessor(P, z, X, Z, t)), X.values[m.id] = Bn(N, X.values[m.id], {
            row: X,
            column: m,
            instance: T()
          }, !0);
        };
        t.forEach(function(H, P) {
          return R(H, P, 0, void 0, u);
        });
      }
      L.resetExpanded = "resetExpanded", L.toggleRowExpanded = "toggleRowExpanded", L.toggleAllRowsExpanded = "toggleAllRowsExpanded";
      var gt = function(t) {
        t.getToggleAllRowsExpandedProps = [Bt], t.getToggleRowExpandedProps = [Ft], t.stateReducers.push(zt), t.useInstance.push(Qe), t.prepareRow.push(Wt);
      };
      gt.pluginName = "useExpanded";
      var Bt = function(t, u) {
        var a = u.instance;
        return [t, {
          onClick: function(m) {
            a.toggleAllRowsExpanded();
          },
          style: {
            cursor: "pointer"
          },
          title: "Toggle All Rows Expanded"
        }];
      }, Ft = function(t, u) {
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
      function zt(e, t, u, a) {
        if (t.type === L.init)
          return c({
            expanded: {}
          }, e);
        if (t.type === L.resetExpanded)
          return c({}, e, {
            expanded: a.initialState.expanded || {}
          });
        if (t.type === L.toggleAllRowsExpanded) {
          var f = t.value, m = a.rowsById, d = Object.keys(m).length === Object.keys(e.expanded).length, h = typeof f < "u" ? f : !d;
          if (h) {
            var N = {};
            return Object.keys(m).forEach(function(Z) {
              N[Z] = !0;
            }), c({}, e, {
              expanded: N
            });
          }
          return c({}, e, {
            expanded: {}
          });
        }
        if (t.type === L.toggleRowExpanded) {
          var T = t.id, R = t.value, H = e.expanded[T], P = typeof R < "u" ? R : !H;
          if (!H && P) {
            var z;
            return c({}, e, {
              expanded: c({}, e.expanded, (z = {}, z[T] = !0, z))
            });
          } else if (H && !P) {
            var K = e.expanded;
            K[T];
            var j = k(K, [T].map(w));
            return c({}, e, {
              expanded: j
            });
          } else
            return e;
        }
      }
      function Qe(e) {
        var t = e.data, u = e.rows, a = e.rowsById, f = e.manualExpandedKey, m = f === void 0 ? "expanded" : f, d = e.paginateExpandedRows, h = d === void 0 ? !0 : d, N = e.expandSubRows, T = N === void 0 ? !0 : N, R = e.autoResetExpanded, H = R === void 0 ? !0 : R, P = e.getHooks, z = e.plugins, K = e.state.expanded, j = e.dispatch;
        Jn(z, ["useSortBy", "useGroupBy", "usePivotColumns", "useGlobalFilter"], "useExpanded");
        var Z = Nn(H), cn = !!(Object.keys(a).length && Object.keys(K).length);
        cn && Object.keys(a).some(function(Q) {
          return !K[Q];
        }) && (cn = !1), Vn(function() {
          Z() && j({
            type: L.resetExpanded
          });
        }, [j, t]);
        var mn = C.useCallback(function(Q, yn) {
          j({
            type: L.toggleRowExpanded,
            id: Q,
            value: yn
          });
        }, [j]), X = C.useCallback(function(Q) {
          return j({
            type: L.toggleAllRowsExpanded,
            value: Q
          });
        }, [j]), In = C.useMemo(function() {
          return h ? O(u, {
            manualExpandedKey: m,
            expanded: K,
            expandSubRows: T
          }) : u;
        }, [h, u, m, K, T]), xn = C.useMemo(function() {
          return jo(K);
        }, [K]), J = Nn(e), U = Mn(P().getToggleAllRowsExpandedProps, {
          instance: J()
        });
        Object.assign(e, {
          preExpandedRows: u,
          expandedRows: In,
          rows: In,
          expandedDepth: xn,
          isAllRowsExpanded: cn,
          toggleRowExpanded: mn,
          toggleAllRowsExpanded: X,
          getToggleAllRowsExpandedProps: U
        });
      }
      function Wt(e, t) {
        var u = t.instance.getHooks, a = t.instance;
        e.toggleRowExpanded = function(f) {
          return a.toggleRowExpanded(e.id, f);
        }, e.getToggleRowExpandedProps = Mn(u().getToggleRowExpandedProps, {
          instance: a,
          row: e
        });
      }
      function jo(e) {
        var t = 0;
        return Object.keys(e).forEach(function(u) {
          var a = u.split(".");
          t = Math.max(t, a.length);
        }), t;
      }
      var Gt = function(t, u, a) {
        return t = t.filter(function(f) {
          return u.some(function(m) {
            var d = f.values[m];
            return String(d).toLowerCase().includes(String(a).toLowerCase());
          });
        }), t;
      };
      Gt.autoRemove = function(e) {
        return !e;
      };
      var ft = function(t, u, a) {
        return t.filter(function(f) {
          return u.some(function(m) {
            var d = f.values[m];
            return d !== void 0 ? String(d).toLowerCase() === String(a).toLowerCase() : !0;
          });
        });
      };
      ft.autoRemove = function(e) {
        return !e;
      };
      var Ht = function(t, u, a) {
        return t.filter(function(f) {
          return u.some(function(m) {
            var d = f.values[m];
            return d !== void 0 ? String(d) === String(a) : !0;
          });
        });
      };
      Ht.autoRemove = function(e) {
        return !e;
      };
      var Yt = function(t, u, a) {
        return t.filter(function(f) {
          return u.some(function(m) {
            var d = f.values[m];
            return d.includes(a);
          });
        });
      };
      Yt.autoRemove = function(e) {
        return !e || !e.length;
      };
      var pt = function(t, u, a) {
        return t.filter(function(f) {
          return u.some(function(m) {
            var d = f.values[m];
            return d && d.length && a.every(function(h) {
              return d.includes(h);
            });
          });
        });
      };
      pt.autoRemove = function(e) {
        return !e || !e.length;
      };
      var mt = function(t, u, a) {
        return t.filter(function(f) {
          return u.some(function(m) {
            var d = f.values[m];
            return d && d.length && a.some(function(h) {
              return d.includes(h);
            });
          });
        });
      };
      mt.autoRemove = function(e) {
        return !e || !e.length;
      };
      var Vt = function(t, u, a) {
        return t.filter(function(f) {
          return u.some(function(m) {
            var d = f.values[m];
            return a.includes(d);
          });
        });
      };
      Vt.autoRemove = function(e) {
        return !e || !e.length;
      };
      var Kt = function(t, u, a) {
        return t.filter(function(f) {
          return u.some(function(m) {
            var d = f.values[m];
            return d === a;
          });
        });
      };
      Kt.autoRemove = function(e) {
        return typeof e > "u";
      };
      var Mt = function(t, u, a) {
        return t.filter(function(f) {
          return u.some(function(m) {
            var d = f.values[m];
            return d == a;
          });
        });
      };
      Mt.autoRemove = function(e) {
        return e == null;
      };
      var qt = function(t, u, a) {
        var f = a || [], m = f[0], d = f[1];
        if (m = typeof m == "number" ? m : -1 / 0, d = typeof d == "number" ? d : 1 / 0, m > d) {
          var h = m;
          m = d, d = h;
        }
        return t.filter(function(N) {
          return u.some(function(T) {
            var R = N.values[T];
            return R >= m && R <= d;
          });
        });
      };
      qt.autoRemove = function(e) {
        return !e || typeof e[0] != "number" && typeof e[1] != "number";
      };
      var Ze = /* @__PURE__ */ Object.freeze({
        __proto__: null,
        text: Gt,
        exactText: ft,
        exactTextCase: Ht,
        includes: Yt,
        includesAll: pt,
        includesSome: mt,
        includesValue: Vt,
        exact: Kt,
        equals: Mt,
        between: qt
      });
      L.resetFilters = "resetFilters", L.setFilter = "setFilter", L.setAllFilters = "setAllFilters";
      var Ut = function(t) {
        t.stateReducers.push(ko), t.useInstance.push(Po);
      };
      Ut.pluginName = "useFilters";
      function ko(e, t, u, a) {
        if (t.type === L.init)
          return c({
            filters: []
          }, e);
        if (t.type === L.resetFilters)
          return c({}, e, {
            filters: a.initialState.filters || []
          });
        if (t.type === L.setFilter) {
          var f = t.columnId, m = t.filterValue, d = a.allColumns, h = a.filterTypes, N = d.find(function(j) {
            return j.id === f;
          });
          if (!N)
            throw new Error("React-Table: Could not find a column with id: " + f);
          var T = V(N.filter, h || {}, Ze), R = e.filters.find(function(j) {
            return j.id === f;
          }), H = Fn(m, R && R.value);
          return rn(T.autoRemove, H, N) ? c({}, e, {
            filters: e.filters.filter(function(j) {
              return j.id !== f;
            })
          }) : R ? c({}, e, {
            filters: e.filters.map(function(j) {
              return j.id === f ? {
                id: f,
                value: H
              } : j;
            })
          }) : c({}, e, {
            filters: [].concat(e.filters, [{
              id: f,
              value: H
            }])
          });
        }
        if (t.type === L.setAllFilters) {
          var P = t.filters, z = a.allColumns, K = a.filterTypes;
          return c({}, e, {
            // Filter out undefined values
            filters: Fn(P, e.filters).filter(function(j) {
              var Z = z.find(function(mn) {
                return mn.id === j.id;
              }), cn = V(Z.filter, K || {}, Ze);
              return !rn(cn.autoRemove, j.value, Z);
            })
          });
        }
      }
      function Po(e) {
        var t = e.data, u = e.rows, a = e.flatRows, f = e.rowsById, m = e.allColumns, d = e.filterTypes, h = e.manualFilters, N = e.defaultCanFilter, T = N === void 0 ? !1 : N, R = e.disableFilters, H = e.state.filters, P = e.dispatch, z = e.autoResetFilters, K = z === void 0 ? !0 : z, j = C.useCallback(function(J, U) {
          P({
            type: L.setFilter,
            columnId: J,
            filterValue: U
          });
        }, [P]), Z = C.useCallback(function(J) {
          P({
            type: L.setAllFilters,
            filters: J
          });
        }, [P]);
        m.forEach(function(J) {
          var U = J.id, Q = J.accessor, yn = J.defaultCanFilter, kn = J.disableFilters;
          J.canFilter = Q ? re(kn === !0 ? !1 : void 0, R === !0 ? !1 : void 0, !0) : re(yn, T, !1), J.setFilter = function(qn) {
            return j(J.id, qn);
          };
          var Pn = H.find(function(qn) {
            return qn.id === U;
          });
          J.filterValue = Pn && Pn.value;
        });
        var cn = C.useMemo(function() {
          if (h || !H.length)
            return [u, a, f];
          var J = [], U = {}, Q = function yn(kn, Pn) {
            Pn === void 0 && (Pn = 0);
            var qn = kn;
            return qn = H.reduce(function(on, le) {
              var On = le.id, hn = le.value, wn = m.find(function(ye) {
                return ye.id === On;
              });
              if (!wn)
                return on;
              Pn === 0 && (wn.preFilteredRows = on);
              var _n = V(wn.filter, d || {}, Ze);
              return _n ? (wn.filteredRows = _n(on, [On], hn), wn.filteredRows) : (console.warn("Could not find a valid 'column.filter' for column with the ID: " + wn.id + "."), on);
            }, kn), qn.forEach(function(on) {
              J.push(on), U[on.id] = on, on.subRows && (on.subRows = on.subRows && on.subRows.length > 0 ? yn(on.subRows, Pn + 1) : on.subRows);
            }), qn;
          };
          return [Q(u), J, U];
        }, [h, H, u, a, f, m, d]), mn = cn[0], X = cn[1], In = cn[2];
        C.useMemo(function() {
          var J = m.filter(function(U) {
            return !H.find(function(Q) {
              return Q.id === U.id;
            });
          });
          J.forEach(function(U) {
            U.preFilteredRows = mn, U.filteredRows = mn;
          });
        }, [mn, H, m]);
        var xn = Nn(K);
        Vn(function() {
          xn() && P({
            type: L.resetFilters
          });
        }, [P, h ? null : t]), Object.assign(e, {
          preFilteredRows: u,
          preFilteredFlatRows: a,
          preFilteredRowsById: f,
          filteredRows: mn,
          filteredFlatRows: X,
          filteredRowsById: In,
          rows: mn,
          flatRows: X,
          rowsById: In,
          setFilter: j,
          setAllFilters: Z
        });
      }
      L.resetGlobalFilter = "resetGlobalFilter", L.setGlobalFilter = "setGlobalFilter";
      var Xt = function(t) {
        t.stateReducers.push(_t), t.useInstance.push(Jt);
      };
      Xt.pluginName = "useGlobalFilter";
      function _t(e, t, u, a) {
        if (t.type === L.resetGlobalFilter)
          return c({}, e, {
            globalFilter: a.initialState.globalFilter || void 0
          });
        if (t.type === L.setGlobalFilter) {
          var f = t.filterValue, m = a.userFilterTypes, d = V(a.globalFilter, m || {}, Ze), h = Fn(f, e.globalFilter);
          if (rn(d.autoRemove, h)) {
            e.globalFilter;
            var N = k(e, ["globalFilter"]);
            return N;
          }
          return c({}, e, {
            globalFilter: h
          });
        }
      }
      function Jt(e) {
        var t = e.data, u = e.rows, a = e.flatRows, f = e.rowsById, m = e.allColumns, d = e.filterTypes, h = e.globalFilter, N = e.manualGlobalFilter, T = e.state.globalFilter, R = e.dispatch, H = e.autoResetGlobalFilter, P = H === void 0 ? !0 : H, z = e.disableGlobalFilter, K = C.useCallback(function(In) {
          R({
            type: L.setGlobalFilter,
            filterValue: In
          });
        }, [R]), j = C.useMemo(function() {
          if (N || typeof T > "u")
            return [u, a, f];
          var In = [], xn = {}, J = V(h, d || {}, Ze);
          if (!J)
            return console.warn("Could not find a valid 'globalFilter' option."), u;
          m.forEach(function(yn) {
            var kn = yn.disableGlobalFilter;
            yn.canFilter = re(kn === !0 ? !1 : void 0, z === !0 ? !1 : void 0, !0);
          });
          var U = m.filter(function(yn) {
            return yn.canFilter === !0;
          }), Q = function yn(kn) {
            return kn = J(kn, U.map(function(Pn) {
              return Pn.id;
            }), T), kn.forEach(function(Pn) {
              In.push(Pn), xn[Pn.id] = Pn, Pn.subRows = Pn.subRows && Pn.subRows.length ? yn(Pn.subRows) : Pn.subRows;
            }), kn;
          };
          return [Q(u), In, xn];
        }, [N, T, h, d, m, u, a, f, z]), Z = j[0], cn = j[1], mn = j[2], X = Nn(P);
        Vn(function() {
          X() && R({
            type: L.resetGlobalFilter
          });
        }, [R, N ? null : t]), Object.assign(e, {
          preGlobalFilteredRows: u,
          preGlobalFilteredFlatRows: a,
          preGlobalFilteredRowsById: f,
          globalFilteredRows: Z,
          globalFilteredFlatRows: cn,
          globalFilteredRowsById: mn,
          rows: Z,
          flatRows: cn,
          rowsById: mn,
          setGlobalFilter: K,
          disableGlobalFilter: z
        });
      }
      function rt(e, t) {
        return t.reduce(function(u, a) {
          return u + (typeof a == "number" ? a : 0);
        }, 0);
      }
      function $e(e) {
        var t = e[0] || 0;
        return e.forEach(function(u) {
          typeof u == "number" && (t = Math.min(t, u));
        }), t;
      }
      function Qt(e) {
        var t = e[0] || 0;
        return e.forEach(function(u) {
          typeof u == "number" && (t = Math.max(t, u));
        }), t;
      }
      function Oo(e) {
        var t = e[0] || 0, u = e[0] || 0;
        return e.forEach(function(a) {
          typeof a == "number" && (t = Math.min(t, a), u = Math.max(u, a));
        }), t + ".." + u;
      }
      function Zt(e) {
        return rt(null, e) / e.length;
      }
      function xo(e) {
        if (!e.length)
          return null;
        var t = Math.floor(e.length / 2), u = [].concat(e).sort(function(a, f) {
          return a - f;
        });
        return e.length % 2 !== 0 ? u[t] : (u[t - 1] + u[t]) / 2;
      }
      function Bo(e) {
        return Array.from(new Set(e).values());
      }
      function Fo(e) {
        return new Set(e).size;
      }
      function $t(e) {
        return e.length;
      }
      var vt = /* @__PURE__ */ Object.freeze({
        __proto__: null,
        sum: rt,
        min: $e,
        max: Qt,
        minMax: Oo,
        average: Zt,
        median: xo,
        unique: Bo,
        uniqueCount: Fo,
        count: $t
      }), zo = [], Wo = {};
      L.resetGroupBy = "resetGroupBy", L.setGroupBy = "setGroupBy", L.toggleGroupBy = "toggleGroupBy";
      var ht = function(t) {
        t.getGroupByToggleProps = [no], t.stateReducers.push(Go), t.visibleColumnsDeps.push(function(u, a) {
          var f = a.instance;
          return [].concat(u, [f.state.groupBy]);
        }), t.visibleColumns.push(Ho), t.useInstance.push(Vo), t.prepareRow.push(Ko);
      };
      ht.pluginName = "useGroupBy";
      var no = function(t, u) {
        var a = u.header;
        return [t, {
          onClick: a.canGroupBy ? function(f) {
            f.persist(), a.toggleGroupBy();
          } : void 0,
          style: {
            cursor: a.canGroupBy ? "pointer" : void 0
          },
          title: "Toggle GroupBy"
        }];
      };
      function Go(e, t, u, a) {
        if (t.type === L.init)
          return c({
            groupBy: []
          }, e);
        if (t.type === L.resetGroupBy)
          return c({}, e, {
            groupBy: a.initialState.groupBy || []
          });
        if (t.type === L.setGroupBy) {
          var f = t.value;
          return c({}, e, {
            groupBy: f
          });
        }
        if (t.type === L.toggleGroupBy) {
          var m = t.columnId, d = t.value, h = typeof d < "u" ? d : !e.groupBy.includes(m);
          return h ? c({}, e, {
            groupBy: [].concat(e.groupBy, [m])
          }) : c({}, e, {
            groupBy: e.groupBy.filter(function(N) {
              return N !== m;
            })
          });
        }
      }
      function Ho(e, t) {
        var u = t.instance.state.groupBy, a = u.map(function(m) {
          return e.find(function(d) {
            return d.id === m;
          });
        }).filter(Boolean), f = e.filter(function(m) {
          return !u.includes(m.id);
        });
        return e = [].concat(a, f), e.forEach(function(m) {
          m.isGrouped = u.includes(m.id), m.groupedIndex = u.indexOf(m.id);
        }), e;
      }
      var Yo = {};
      function Vo(e) {
        var t = e.data, u = e.rows, a = e.flatRows, f = e.rowsById, m = e.allColumns, d = e.flatHeaders, h = e.groupByFn, N = h === void 0 ? eo : h, T = e.manualGroupBy, R = e.aggregations, H = R === void 0 ? Yo : R, P = e.plugins, z = e.state.groupBy, K = e.dispatch, j = e.autoResetGroupBy, Z = j === void 0 ? !0 : j, cn = e.disableGroupBy, mn = e.defaultCanGroupBy, X = e.getHooks;
        Jn(P, ["useColumnOrder", "useFilters"], "useGroupBy");
        var In = Nn(e);
        m.forEach(function(hn) {
          var wn = hn.accessor, _n = hn.defaultGroupBy, ye = hn.disableGroupBy;
          hn.canGroupBy = wn ? re(hn.canGroupBy, ye === !0 ? !1 : void 0, cn === !0 ? !1 : void 0, !0) : re(hn.canGroupBy, _n, mn, !1), hn.canGroupBy && (hn.toggleGroupBy = function() {
            return e.toggleGroupBy(hn.id);
          }), hn.Aggregated = hn.Aggregated || hn.Cell;
        });
        var xn = C.useCallback(function(hn, wn) {
          K({
            type: L.toggleGroupBy,
            columnId: hn,
            value: wn
          });
        }, [K]), J = C.useCallback(function(hn) {
          K({
            type: L.setGroupBy,
            value: hn
          });
        }, [K]);
        d.forEach(function(hn) {
          hn.getGroupByToggleProps = Mn(X().getGroupByToggleProps, {
            instance: In(),
            header: hn
          });
        });
        var U = C.useMemo(function() {
          if (T || !z.length)
            return [u, a, f, zo, Wo, a, f];
          var hn = z.filter(function(se) {
            return m.find(function(Ge) {
              return Ge.id === se;
            });
          }), wn = function(Ge, Ce, Lo) {
            var He = {};
            return m.forEach(function(oe) {
              if (hn.includes(oe.id)) {
                He[oe.id] = Ce[0] ? Ce[0].values[oe.id] : null;
                return;
              }
              var wo = typeof oe.aggregate == "function" ? oe.aggregate : H[oe.aggregate] || vt[oe.aggregate];
              if (wo) {
                var it = Ce.map(function(tt) {
                  return tt.values[oe.id];
                }), sa = Ge.map(function(tt) {
                  var Ye = tt.values[oe.id];
                  if (!Lo && oe.aggregateValue) {
                    var Ve = typeof oe.aggregateValue == "function" ? oe.aggregateValue : H[oe.aggregateValue] || vt[oe.aggregateValue];
                    if (!Ve)
                      throw console.info({
                        column: oe
                      }), new Error("React Table: Invalid column.aggregateValue option for column listed above");
                    Ye = Ve(Ye, tt, oe);
                  }
                  return Ye;
                });
                He[oe.id] = wo(sa, it);
              } else {
                if (oe.aggregate)
                  throw console.info({
                    column: oe
                  }), new Error("React Table: Invalid column.aggregate option for column listed above");
                He[oe.id] = null;
              }
            }), He;
          }, _n = [], ye = {}, et = [], It = {}, pn = [], Zn = {}, ue = function se(Ge, Ce, Lo) {
            if (Ce === void 0 && (Ce = 0), Ce === hn.length)
              return Ge.map(function(it) {
                return c({}, it, {
                  depth: Ce
                });
              });
            var He = hn[Ce], oe = N(Ge, He), wo = Object.entries(oe).map(function(it, sa) {
              var tt = it[0], Ye = it[1], Ve = He + ":" + tt;
              Ve = Lo ? Lo + ">" + Ve : Ve;
              var Da = se(Ye, Ce + 1, Ve), Ta = Ce ? Oe(Ye, "leafRows") : Ye, Cr = wn(Ta, Ye, Ce), dr = {
                id: Ve,
                isGrouped: !0,
                groupByID: He,
                groupByVal: tt,
                values: Cr,
                subRows: Da,
                leafRows: Ta,
                depth: Ce,
                index: sa
              };
              return Da.forEach(function(je) {
                _n.push(je), ye[je.id] = je, je.isGrouped ? (et.push(je), It[je.id] = je) : (pn.push(je), Zn[je.id] = je);
              }), dr;
            });
            return wo;
          }, he = ue(u);
          return he.forEach(function(se) {
            _n.push(se), ye[se.id] = se, se.isGrouped ? (et.push(se), It[se.id] = se) : (pn.push(se), Zn[se.id] = se);
          }), [he, _n, ye, et, It, pn, Zn];
        }, [T, z, u, a, f, m, H, N]), Q = U[0], yn = U[1], kn = U[2], Pn = U[3], qn = U[4], on = U[5], le = U[6], On = Nn(Z);
        Vn(function() {
          On() && K({
            type: L.resetGroupBy
          });
        }, [K, T ? null : t]), Object.assign(e, {
          preGroupedRows: u,
          preGroupedFlatRow: a,
          preGroupedRowsById: f,
          groupedRows: Q,
          groupedFlatRows: yn,
          groupedRowsById: kn,
          onlyGroupedFlatRows: Pn,
          onlyGroupedRowsById: qn,
          nonGroupedFlatRows: on,
          nonGroupedRowsById: le,
          rows: Q,
          flatRows: yn,
          rowsById: kn,
          toggleGroupBy: xn,
          setGroupBy: J
        });
      }
      function Ko(e) {
        e.allCells.forEach(function(t) {
          var u;
          t.isGrouped = t.column.isGrouped && t.column.id === e.groupByID, t.isPlaceholder = !t.isGrouped && t.column.isGrouped, t.isAggregated = !t.isGrouped && !t.isPlaceholder && ((u = e.subRows) == null ? void 0 : u.length);
        });
      }
      function eo(e, t) {
        return e.reduce(function(u, a, f) {
          var m = "" + a.values[t];
          return u[m] = Array.isArray(u[m]) ? u[m] : [], u[m].push(a), u;
        }, {});
      }
      var to = /([0-9]+)/gm, qo = function(t, u, a) {
        var f = nt(t, u, a), m = f[0], d = f[1];
        for (m = ao(m), d = ao(d), m = m.split(to).filter(Boolean), d = d.split(to).filter(Boolean); m.length && d.length; ) {
          var h = m.shift(), N = d.shift(), T = parseInt(h, 10), R = parseInt(N, 10), H = [T, R].sort();
          if (isNaN(H[0])) {
            if (h > N)
              return 1;
            if (N > h)
              return -1;
            continue;
          }
          if (isNaN(H[1]))
            return isNaN(T) ? -1 : 1;
          if (T > R)
            return 1;
          if (R > T)
            return -1;
        }
        return m.length - d.length;
      };
      function Uo(e, t, u) {
        var a = nt(e, t, u), f = a[0], m = a[1];
        return f = f.getTime(), m = m.getTime(), Lt(f, m);
      }
      function Xo(e, t, u) {
        var a = nt(e, t, u), f = a[0], m = a[1];
        return Lt(f, m);
      }
      function _o(e, t, u) {
        var a = nt(e, t, u), f = a[0], m = a[1];
        for (f = f.split("").filter(Boolean), m = m.split("").filter(Boolean); f.length && m.length; ) {
          var d = f.shift(), h = m.shift(), N = d.toLowerCase(), T = h.toLowerCase();
          if (N > T)
            return 1;
          if (T > N)
            return -1;
          if (d > h)
            return 1;
          if (h > d)
            return -1;
        }
        return f.length - m.length;
      }
      function oo(e, t, u) {
        var a = nt(e, t, u), f = a[0], m = a[1], d = /[^0-9.]/gi;
        return f = Number(String(f).replace(d, "")), m = Number(String(m).replace(d, "")), Lt(f, m);
      }
      function Lt(e, t) {
        return e === t ? 0 : e > t ? 1 : -1;
      }
      function nt(e, t, u) {
        return [e.values[u], t.values[u]];
      }
      function ao(e) {
        return typeof e == "number" ? isNaN(e) || e === 1 / 0 || e === -1 / 0 ? "" : String(e) : typeof e == "string" ? e : "";
      }
      var Jo = /* @__PURE__ */ Object.freeze({
        __proto__: null,
        alphanumeric: qo,
        datetime: Uo,
        basic: Xo,
        string: _o,
        number: oo
      });
      L.resetSortBy = "resetSortBy", L.setSortBy = "setSortBy", L.toggleSortBy = "toggleSortBy", L.clearSortBy = "clearSortBy", Cn.sortType = "alphanumeric", Cn.sortDescFirst = !1;
      var ro = function(t) {
        t.getSortByToggleProps = [Qo], t.stateReducers.push(uo), t.useInstance.push(io);
      };
      ro.pluginName = "useSortBy";
      var Qo = function(t, u) {
        var a = u.instance, f = u.column, m = a.isMultiSortEvent, d = m === void 0 ? function(h) {
          return h.shiftKey;
        } : m;
        return [t, {
          onClick: f.canSort ? function(h) {
            h.persist(), f.toggleSortBy(void 0, !a.disableMultiSort && d(h));
          } : void 0,
          style: {
            cursor: f.canSort ? "pointer" : void 0
          },
          title: f.canSort ? "Toggle SortBy" : void 0
        }];
      };
      function uo(e, t, u, a) {
        if (t.type === L.init)
          return c({
            sortBy: []
          }, e);
        if (t.type === L.resetSortBy)
          return c({}, e, {
            sortBy: a.initialState.sortBy || []
          });
        if (t.type === L.clearSortBy) {
          var f = e.sortBy, m = f.filter(function(Q) {
            return Q.id !== t.columnId;
          });
          return c({}, e, {
            sortBy: m
          });
        }
        if (t.type === L.setSortBy) {
          var d = t.sortBy;
          return c({}, e, {
            sortBy: d
          });
        }
        if (t.type === L.toggleSortBy) {
          var h = t.columnId, N = t.desc, T = t.multi, R = a.allColumns, H = a.disableMultiSort, P = a.disableSortRemove, z = a.disableMultiRemove, K = a.maxMultiSortColCount, j = K === void 0 ? Number.MAX_SAFE_INTEGER : K, Z = e.sortBy, cn = R.find(function(Q) {
            return Q.id === h;
          }), mn = cn.sortDescFirst, X = Z.find(function(Q) {
            return Q.id === h;
          }), In = Z.findIndex(function(Q) {
            return Q.id === h;
          }), xn = typeof N < "u" && N !== null, J = [], U;
          return !H && T ? X ? U = "toggle" : U = "add" : In !== Z.length - 1 || Z.length !== 1 ? U = "replace" : X ? U = "toggle" : U = "replace", U === "toggle" && // Must be toggling
          !P && // If disableSortRemove, disable in general
          !xn && // Must not be setting desc
          (!T || !z) && // If multi, don't allow if disableMultiRemove
          (X && // Finally, detect if it should indeed be removed
          X.desc && !mn || !X.desc && mn) && (U = "remove"), U === "replace" ? J = [{
            id: h,
            desc: xn ? N : mn
          }] : U === "add" ? (J = [].concat(Z, [{
            id: h,
            desc: xn ? N : mn
          }]), J.splice(0, J.length - j)) : U === "toggle" ? J = Z.map(function(Q) {
            return Q.id === h ? c({}, Q, {
              desc: xn ? N : !X.desc
            }) : Q;
          }) : U === "remove" && (J = Z.filter(function(Q) {
            return Q.id !== h;
          })), c({}, e, {
            sortBy: J
          });
        }
      }
      function io(e) {
        var t = e.data, u = e.rows, a = e.flatRows, f = e.allColumns, m = e.orderByFn, d = m === void 0 ? wt : m, h = e.sortTypes, N = e.manualSortBy, T = e.defaultCanSort, R = e.disableSortBy, H = e.flatHeaders, P = e.state.sortBy, z = e.dispatch, K = e.plugins, j = e.getHooks, Z = e.autoResetSortBy, cn = Z === void 0 ? !0 : Z;
        Jn(K, ["useFilters", "useGlobalFilter", "useGroupBy", "usePivotColumns"], "useSortBy");
        var mn = C.useCallback(function(yn) {
          z({
            type: L.setSortBy,
            sortBy: yn
          });
        }, [z]), X = C.useCallback(function(yn, kn, Pn) {
          z({
            type: L.toggleSortBy,
            columnId: yn,
            desc: kn,
            multi: Pn
          });
        }, [z]), In = Nn(e);
        H.forEach(function(yn) {
          var kn = yn.accessor, Pn = yn.canSort, qn = yn.disableSortBy, on = yn.id, le = kn ? re(qn === !0 ? !1 : void 0, R === !0 ? !1 : void 0, !0) : re(T, Pn, !1);
          yn.canSort = le, yn.canSort && (yn.toggleSortBy = function(hn, wn) {
            return X(yn.id, hn, wn);
          }, yn.clearSortBy = function() {
            z({
              type: L.clearSortBy,
              columnId: yn.id
            });
          }), yn.getSortByToggleProps = Mn(j().getSortByToggleProps, {
            instance: In(),
            column: yn
          });
          var On = P.find(function(hn) {
            return hn.id === on;
          });
          yn.isSorted = !!On, yn.sortedIndex = P.findIndex(function(hn) {
            return hn.id === on;
          }), yn.isSortedDesc = yn.isSorted ? On.desc : void 0;
        });
        var xn = C.useMemo(function() {
          if (N || !P.length)
            return [u, a];
          var yn = [], kn = P.filter(function(qn) {
            return f.find(function(on) {
              return on.id === qn.id;
            });
          }), Pn = function qn(on) {
            var le = d(
              on,
              kn.map(function(On) {
                var hn = f.find(function(ye) {
                  return ye.id === On.id;
                });
                if (!hn)
                  throw new Error("React-Table: Could not find a column with id: " + On.id + " while sorting");
                var wn = hn.sortType, _n = Pe(wn) || (h || {})[wn] || Jo[wn];
                if (!_n)
                  throw new Error("React-Table: Could not find a valid sortType of '" + wn + "' for column '" + On.id + "'.");
                return function(ye, et) {
                  return _n(ye, et, On.id, On.desc);
                };
              }),
              // Map the directions
              kn.map(function(On) {
                var hn = f.find(function(wn) {
                  return wn.id === On.id;
                });
                return hn && hn.sortInverted ? On.desc : !On.desc;
              })
            );
            return le.forEach(function(On) {
              yn.push(On), !(!On.subRows || On.subRows.length === 0) && (On.subRows = qn(On.subRows));
            }), le;
          };
          return [Pn(u), yn];
        }, [N, P, u, a, f, d, h]), J = xn[0], U = xn[1], Q = Nn(cn);
        Vn(function() {
          Q() && z({
            type: L.resetSortBy
          });
        }, [N ? null : t]), Object.assign(e, {
          preSortedRows: u,
          preSortedFlatRows: a,
          sortedRows: J,
          sortedFlatRows: U,
          rows: J,
          flatRows: U,
          setSortBy: mn,
          toggleSortBy: X
        });
      }
      function wt(e, t, u) {
        return [].concat(e).sort(function(a, f) {
          for (var m = 0; m < t.length; m += 1) {
            var d = t[m], h = u[m] === !1 || u[m] === "desc", N = d(a, f);
            if (N !== 0)
              return h ? -N : N;
          }
          return u[0] ? a.index - f.index : f.index - a.index;
        });
      }
      var Zo = "usePagination";
      L.resetPage = "resetPage", L.gotoPage = "gotoPage", L.setPageSize = "setPageSize";
      var lo = function(t) {
        t.stateReducers.push($o), t.useInstance.push(so);
      };
      lo.pluginName = Zo;
      function $o(e, t, u, a) {
        if (t.type === L.init)
          return c({
            pageSize: 10,
            pageIndex: 0
          }, e);
        if (t.type === L.resetPage)
          return c({}, e, {
            pageIndex: a.initialState.pageIndex || 0
          });
        if (t.type === L.gotoPage) {
          var f = a.pageCount, m = a.page, d = Fn(t.pageIndex, e.pageIndex), h = !1;
          return d > e.pageIndex ? h = f === -1 ? m.length >= e.pageSize : d < f : d < e.pageIndex && (h = d > -1), h ? c({}, e, {
            pageIndex: d
          }) : e;
        }
        if (t.type === L.setPageSize) {
          var N = t.pageSize, T = e.pageSize * e.pageIndex, R = Math.floor(T / N);
          return c({}, e, {
            pageIndex: R,
            pageSize: N
          });
        }
      }
      function so(e) {
        var t = e.rows, u = e.autoResetPage, a = u === void 0 ? !0 : u, f = e.manualExpandedKey, m = f === void 0 ? "expanded" : f, d = e.plugins, h = e.pageCount, N = e.paginateExpandedRows, T = N === void 0 ? !0 : N, R = e.expandSubRows, H = R === void 0 ? !0 : R, P = e.state, z = P.pageSize, K = P.pageIndex, j = P.expanded, Z = P.globalFilter, cn = P.filters, mn = P.groupBy, X = P.sortBy, In = e.dispatch, xn = e.data, J = e.manualPagination;
        Jn(d, ["useGlobalFilter", "useFilters", "useGroupBy", "useSortBy", "useExpanded"], "usePagination");
        var U = Nn(a);
        Vn(function() {
          U() && In({
            type: L.resetPage
          });
        }, [In, J ? null : xn, Z, cn, mn, X]);
        var Q = J ? h : Math.ceil(t.length / z), yn = C.useMemo(function() {
          return Q > 0 ? [].concat(new Array(Q)).fill(null).map(function(wn, _n) {
            return _n;
          }) : [];
        }, [Q]), kn = C.useMemo(function() {
          var wn;
          if (J)
            wn = t;
          else {
            var _n = z * K, ye = _n + z;
            wn = t.slice(_n, ye);
          }
          return T ? wn : O(wn, {
            manualExpandedKey: m,
            expanded: j,
            expandSubRows: H
          });
        }, [H, j, m, J, K, z, T, t]), Pn = K > 0, qn = Q === -1 ? kn.length >= z : K < Q - 1, on = C.useCallback(function(wn) {
          In({
            type: L.gotoPage,
            pageIndex: wn
          });
        }, [In]), le = C.useCallback(function() {
          return on(function(wn) {
            return wn - 1;
          });
        }, [on]), On = C.useCallback(function() {
          return on(function(wn) {
            return wn + 1;
          });
        }, [on]), hn = C.useCallback(function(wn) {
          In({
            type: L.setPageSize,
            pageSize: wn
          });
        }, [In]);
        Object.assign(e, {
          pageOptions: yn,
          pageCount: Q,
          page: kn,
          canPreviousPage: Pn,
          canNextPage: qn,
          gotoPage: on,
          previousPage: le,
          nextPage: On,
          setPageSize: hn
        });
      }
      L.resetPivot = "resetPivot", L.togglePivot = "togglePivot";
      var yo = function(t) {
        t.getPivotToggleProps = [na], t.stateReducers.push(Co), t.useInstanceAfterData.push(ea), t.allColumns.push(ta), t.accessValue.push(oa), t.materializedColumns.push(aa), t.materializedColumnsDeps.push(St), t.visibleColumns.push(go), t.visibleColumnsDeps.push(ut), t.useInstance.push(Nt), t.prepareRow.push(Dt);
      };
      yo.pluginName = "usePivotColumns";
      var co = [], na = function(t, u) {
        var a = u.header;
        return [t, {
          onClick: a.canPivot ? function(f) {
            f.persist(), a.togglePivot();
          } : void 0,
          style: {
            cursor: a.canPivot ? "pointer" : void 0
          },
          title: "Toggle Pivot"
        }];
      };
      function Co(e, t, u, a) {
        if (t.type === L.init)
          return c({
            pivotColumns: co
          }, e);
        if (t.type === L.resetPivot)
          return c({}, e, {
            pivotColumns: a.initialState.pivotColumns || co
          });
        if (t.type === L.togglePivot) {
          var f = t.columnId, m = t.value, d = typeof m < "u" ? m : !e.pivotColumns.includes(f);
          return d ? c({}, e, {
            pivotColumns: [].concat(e.pivotColumns, [f])
          }) : c({}, e, {
            pivotColumns: e.pivotColumns.filter(function(h) {
              return h !== f;
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
        var u = t.instance, a = u.allColumns, f = u.state;
        if (!f.pivotColumns.length || !f.groupBy || !f.groupBy.length)
          return e;
        var m = f.pivotColumns.map(function(T) {
          return a.find(function(R) {
            return R.id === T;
          });
        }).filter(Boolean), d = a.filter(function(T) {
          return !T.isPivotSource && !f.groupBy.includes(T.id) && !f.pivotColumns.includes(T.id);
        }), h = function T(R, H, P) {
          R === void 0 && (R = 0), P === void 0 && (P = []);
          var z = m[R];
          if (!z)
            return d.map(function(j) {
              return c({}, j, {
                canPivot: !1,
                isPivoted: !0,
                parent: H,
                depth: R,
                id: "" + (H ? H.id + "." + j.id : j.id),
                accessor: function(cn, mn, X) {
                  if (P.every(function(In) {
                    return In(X);
                  }))
                    return X.values[j.id];
                }
              });
            });
          var K = Array.from(z.uniqueValues).sort();
          return K.map(function(j) {
            var Z = c({}, z, {
              Header: z.PivotHeader || typeof z.header == "string" ? z.Header + ": " + j : j,
              isPivotGroup: !0,
              parent: H,
              depth: R,
              id: H ? H.id + "." + z.id + "." + j : z.id + "." + j,
              pivotValue: j
            });
            return Z.columns = T(R + 1, Z, [].concat(P, [function(cn) {
              return cn.values[z.id] === j;
            }])), Z;
          });
        }, N = Ie(h());
        return [].concat(e, N);
      }
      function St(e, t) {
        var u = t.instance.state, a = u.pivotColumns, f = u.groupBy;
        return [].concat(e, [a, f]);
      }
      function go(e, t) {
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
      function Nt(e) {
        var t = e.columns, u = e.allColumns, a = e.flatHeaders, f = e.getHooks, m = e.plugins, d = e.dispatch, h = e.autoResetPivot, N = h === void 0 ? !0 : h, T = e.manaulPivot, R = e.disablePivot, H = e.defaultCanPivot;
        Jn(m, ["useGroupBy"], "usePivotColumns");
        var P = Nn(e);
        u.forEach(function(j) {
          var Z = j.accessor, cn = j.defaultPivot, mn = j.disablePivot;
          j.canPivot = Z ? re(j.canPivot, mn === !0 ? !1 : void 0, R === !0 ? !1 : void 0, !0) : re(j.canPivot, cn, H, !1), j.canPivot && (j.togglePivot = function() {
            return e.togglePivot(j.id);
          }), j.Aggregated = j.Aggregated || j.Cell;
        });
        var z = function(Z, cn) {
          d({
            type: L.togglePivot,
            columnId: Z,
            value: cn
          });
        };
        a.forEach(function(j) {
          j.getPivotToggleProps = Mn(f().getPivotToggleProps, {
            instance: P(),
            header: j
          });
        });
        var K = Nn(N);
        Vn(function() {
          K() && d({
            type: L.resetPivot
          });
        }, [d, T ? null : t]), Object.assign(e, {
          togglePivot: z
        });
      }
      function Dt(e) {
        e.allCells.forEach(function(t) {
          t.isPivoted = t.column.isPivoted;
        });
      }
      var fo = "useRowSelect";
      L.resetSelectedRows = "resetSelectedRows", L.toggleAllRowsSelected = "toggleAllRowsSelected", L.toggleRowSelected = "toggleRowSelected", L.toggleAllPageRowsSelected = "toggleAllPageRowsSelected";
      var Tt = function(t) {
        t.getToggleRowSelectedProps = [ra], t.getToggleAllRowsSelectedProps = [At], t.getToggleAllPageRowsSelectedProps = [ua], t.stateReducers.push(ia), t.useInstance.push(la), t.prepareRow.push(po);
      };
      Tt.pluginName = fo;
      var ra = function(t, u) {
        var a = u.instance, f = u.row, m = a.manualRowSelectedKey, d = m === void 0 ? "isSelected" : m, h = !1;
        return f.original && f.original[d] ? h = !0 : h = f.isSelected, [t, {
          onChange: function(T) {
            f.toggleRowSelected(T.target.checked);
          },
          style: {
            cursor: "pointer"
          },
          checked: h,
          title: "Toggle Row Selected",
          indeterminate: f.isSomeSelected
        }];
      }, At = function(t, u) {
        var a = u.instance;
        return [t, {
          onChange: function(m) {
            a.toggleAllRowsSelected(m.target.checked);
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
          onChange: function(m) {
            a.toggleAllPageRowsSelected(m.target.checked);
          },
          style: {
            cursor: "pointer"
          },
          checked: a.isAllPageRowsSelected,
          title: "Toggle All Current Page Rows Selected",
          indeterminate: !!(!a.isAllPageRowsSelected && a.page.some(function(f) {
            var m = f.id;
            return a.state.selectedRowIds[m];
          }))
        }];
      };
      function ia(e, t, u, a) {
        if (t.type === L.init)
          return c({
            selectedRowIds: {}
          }, e);
        if (t.type === L.resetSelectedRows)
          return c({}, e, {
            selectedRowIds: a.initialState.selectedRowIds || {}
          });
        if (t.type === L.toggleAllRowsSelected) {
          var f = t.value, m = a.isAllRowsSelected, d = a.rowsById, h = a.nonGroupedRowsById, N = h === void 0 ? d : h, T = typeof f < "u" ? f : !m, R = Object.assign({}, e.selectedRowIds);
          return T ? Object.keys(N).forEach(function(On) {
            R[On] = !0;
          }) : Object.keys(N).forEach(function(On) {
            delete R[On];
          }), c({}, e, {
            selectedRowIds: R
          });
        }
        if (t.type === L.toggleRowSelected) {
          var H = t.id, P = t.value, z = a.rowsById, K = a.selectSubRows, j = K === void 0 ? !0 : K, Z = a.getSubRows, cn = e.selectedRowIds[H], mn = typeof P < "u" ? P : !cn;
          if (cn === mn)
            return e;
          var X = c({}, e.selectedRowIds), In = function On(hn) {
            var wn = z[hn];
            if (wn && (wn.isGrouped || (mn ? X[hn] = !0 : delete X[hn]), j && Z(wn)))
              return Z(wn).forEach(function(_n) {
                return On(_n.id);
              });
          };
          return In(H), c({}, e, {
            selectedRowIds: X
          });
        }
        if (t.type === L.toggleAllPageRowsSelected) {
          var xn = t.value, J = a.page, U = a.rowsById, Q = a.selectSubRows, yn = Q === void 0 ? !0 : Q, kn = a.isAllPageRowsSelected, Pn = a.getSubRows, qn = typeof xn < "u" ? xn : !kn, on = c({}, e.selectedRowIds), le = function On(hn) {
            var wn = U[hn];
            if (wn.isGrouped || (qn ? on[hn] = !0 : delete on[hn]), yn && Pn(wn))
              return Pn(wn).forEach(function(_n) {
                return On(_n.id);
              });
          };
          return J.forEach(function(On) {
            return le(On.id);
          }), c({}, e, {
            selectedRowIds: on
          });
        }
        return e;
      }
      function la(e) {
        var t = e.data, u = e.rows, a = e.getHooks, f = e.plugins, m = e.rowsById, d = e.nonGroupedRowsById, h = d === void 0 ? m : d, N = e.autoResetSelectedRows, T = N === void 0 ? !0 : N, R = e.state.selectedRowIds, H = e.selectSubRows, P = H === void 0 ? !0 : H, z = e.dispatch, K = e.page, j = e.getSubRows;
        Jn(f, ["useFilters", "useGroupBy", "useSortBy", "useExpanded", "usePagination"], "useRowSelect");
        var Z = C.useMemo(function() {
          var kn = [];
          return u.forEach(function(Pn) {
            var qn = P ? mo(Pn, R, j) : !!R[Pn.id];
            Pn.isSelected = !!qn, Pn.isSomeSelected = qn === null, qn && kn.push(Pn);
          }), kn;
        }, [u, P, R, j]), cn = !!(Object.keys(h).length && Object.keys(R).length), mn = cn;
        cn && Object.keys(h).some(function(kn) {
          return !R[kn];
        }) && (cn = !1), cn || K && K.length && K.some(function(kn) {
          var Pn = kn.id;
          return !R[Pn];
        }) && (mn = !1);
        var X = Nn(T);
        Vn(function() {
          X() && z({
            type: L.resetSelectedRows
          });
        }, [z, t]);
        var In = C.useCallback(function(kn) {
          return z({
            type: L.toggleAllRowsSelected,
            value: kn
          });
        }, [z]), xn = C.useCallback(function(kn) {
          return z({
            type: L.toggleAllPageRowsSelected,
            value: kn
          });
        }, [z]), J = C.useCallback(function(kn, Pn) {
          return z({
            type: L.toggleRowSelected,
            id: kn,
            value: Pn
          });
        }, [z]), U = Nn(e), Q = Mn(a().getToggleAllRowsSelectedProps, {
          instance: U()
        }), yn = Mn(a().getToggleAllPageRowsSelectedProps, {
          instance: U()
        });
        Object.assign(e, {
          selectedFlatRows: Z,
          isAllRowsSelected: cn,
          isAllPageRowsSelected: mn,
          toggleRowSelected: J,
          toggleAllRowsSelected: In,
          getToggleAllRowsSelectedProps: Q,
          getToggleAllPageRowsSelectedProps: yn,
          toggleAllPageRowsSelected: xn
        });
      }
      function po(e, t) {
        var u = t.instance;
        e.toggleRowSelected = function(a) {
          return u.toggleRowSelected(e.id, a);
        }, e.getToggleRowSelectedProps = Mn(u.getHooks().getToggleRowSelectedProps, {
          instance: u,
          row: e
        });
      }
      function mo(e, t, u) {
        if (t[e.id])
          return !0;
        var a = u(e);
        if (a && a.length) {
          var f = !0, m = !1;
          return a.forEach(function(d) {
            m && !f || (mo(d, t, u) ? m = !0 : f = !1);
          }), f ? !0 : m ? null : !1;
        }
        return !1;
      }
      var Mo = function(t) {
        return {};
      }, vo = function(t) {
        return {};
      };
      L.setRowState = "setRowState", L.setCellState = "setCellState", L.resetRowState = "resetRowState";
      var ho = function(t) {
        t.stateReducers.push(bt), t.useInstance.push(n), t.prepareRow.push(r);
      };
      ho.pluginName = "useRowState";
      function bt(e, t, u, a) {
        var f = a.initialRowStateAccessor, m = f === void 0 ? Mo : f, d = a.initialCellStateAccessor, h = d === void 0 ? vo : d, N = a.rowsById;
        if (t.type === L.init)
          return c({
            rowState: {}
          }, e);
        if (t.type === L.resetRowState)
          return c({}, e, {
            rowState: a.initialState.rowState || {}
          });
        if (t.type === L.setRowState) {
          var T, R = t.rowId, H = t.value, P = typeof e.rowState[R] < "u" ? e.rowState[R] : m(N[R]);
          return c({}, e, {
            rowState: c({}, e.rowState, (T = {}, T[R] = Fn(H, P), T))
          });
        }
        if (t.type === L.setCellState) {
          var z, K, j, Z, cn, mn = t.rowId, X = t.columnId, In = t.value, xn = typeof e.rowState[mn] < "u" ? e.rowState[mn] : m(N[mn]), J = typeof (xn == null || (z = xn.cellState) == null ? void 0 : z[X]) < "u" ? xn.cellState[X] : h((K = N[mn]) == null || (j = K.cells) == null ? void 0 : j.find(function(U) {
            return U.column.id === X;
          }));
          return c({}, e, {
            rowState: c({}, e.rowState, (cn = {}, cn[mn] = c({}, xn, {
              cellState: c({}, xn.cellState || {}, (Z = {}, Z[X] = Fn(In, J), Z))
            }), cn))
          });
        }
      }
      function n(e) {
        var t = e.autoResetRowState, u = t === void 0 ? !0 : t, a = e.data, f = e.dispatch, m = C.useCallback(function(N, T) {
          return f({
            type: L.setRowState,
            rowId: N,
            value: T
          });
        }, [f]), d = C.useCallback(function(N, T, R) {
          return f({
            type: L.setCellState,
            rowId: N,
            columnId: T,
            value: R
          });
        }, [f]), h = Nn(u);
        Vn(function() {
          h() && f({
            type: L.resetRowState
          });
        }, [a]), Object.assign(e, {
          setRowState: m,
          setCellState: d
        });
      }
      function r(e, t) {
        var u = t.instance, a = u.initialRowStateAccessor, f = a === void 0 ? Mo : a, m = u.initialCellStateAccessor, d = m === void 0 ? vo : m, h = u.state.rowState;
        e && (e.state = typeof h[e.id] < "u" ? h[e.id] : f(e), e.setState = function(N) {
          return u.setRowState(e.id, N);
        }, e.cells.forEach(function(N) {
          e.state.cellState || (e.state.cellState = {}), N.state = typeof e.state.cellState[N.column.id] < "u" ? e.state.cellState[N.column.id] : d(N), N.setState = function(T) {
            return u.setCellState(e.id, N.column.id, T);
          };
        }));
      }
      L.resetColumnOrder = "resetColumnOrder", L.setColumnOrder = "setColumnOrder";
      var i = function(t) {
        t.stateReducers.push(s), t.visibleColumnsDeps.push(function(u, a) {
          var f = a.instance;
          return [].concat(u, [f.state.columnOrder]);
        }), t.visibleColumns.push(M), t.useInstance.push(p);
      };
      i.pluginName = "useColumnOrder";
      function s(e, t, u, a) {
        if (t.type === L.init)
          return c({
            columnOrder: []
          }, e);
        if (t.type === L.resetColumnOrder)
          return c({}, e, {
            columnOrder: a.initialState.columnOrder || []
          });
        if (t.type === L.setColumnOrder)
          return c({}, e, {
            columnOrder: Fn(t.columnOrder, e.columnOrder)
          });
      }
      function M(e, t) {
        var u = t.instance.state.columnOrder;
        if (!u || !u.length)
          return e;
        for (var a = [].concat(u), f = [].concat(e), m = [], d = function() {
          var N = a.shift(), T = f.findIndex(function(R) {
            return R.id === N;
          });
          T > -1 && m.push(f.splice(T, 1)[0]);
        }; f.length && a.length; )
          d();
        return [].concat(m, f);
      }
      function p(e) {
        var t = e.dispatch;
        e.setColumnOrder = C.useCallback(function(u) {
          return t({
            type: L.setColumnOrder,
            columnOrder: u
          });
        }, [t]);
      }
      Cn.canResize = !0, L.columnStartResizing = "columnStartResizing", L.columnResizing = "columnResizing", L.columnDoneResizing = "columnDoneResizing", L.resetResize = "resetResize";
      var v = function(t) {
        t.getResizerProps = [D], t.getHeaderProps.push({
          style: {
            position: "relative"
          }
        }), t.stateReducers.push(A), t.useInstance.push(W), t.useInstanceBeforeDimensions.push(I);
      }, D = function(t, u) {
        var a = u.instance, f = u.header, m = a.dispatch, d = function(N, T) {
          var R = !1;
          if (N.type === "touchstart") {
            if (N.touches && N.touches.length > 1)
              return;
            R = !0;
          }
          var H = B(T), P = H.map(function(J) {
            return [J.id, J.totalWidth];
          }), z = R ? Math.round(N.touches[0].clientX) : N.clientX, K, j, Z = function() {
            window.cancelAnimationFrame(K), K = null, m({
              type: L.columnDoneResizing
            });
          }, cn = function() {
            window.cancelAnimationFrame(K), K = null, m({
              type: L.columnResizing,
              clientX: j
            });
          }, mn = function(U) {
            j = U, K || (K = window.requestAnimationFrame(cn));
          }, X = {
            mouse: {
              moveEvent: "mousemove",
              moveHandler: function(U) {
                return mn(U.clientX);
              },
              upEvent: "mouseup",
              upHandler: function(U) {
                document.removeEventListener("mousemove", X.mouse.moveHandler), document.removeEventListener("mouseup", X.mouse.upHandler), Z();
              }
            },
            touch: {
              moveEvent: "touchmove",
              moveHandler: function(U) {
                return U.cancelable && (U.preventDefault(), U.stopPropagation()), mn(U.touches[0].clientX), !1;
              },
              upEvent: "touchend",
              upHandler: function(U) {
                document.removeEventListener(X.touch.moveEvent, X.touch.moveHandler), document.removeEventListener(X.touch.upEvent, X.touch.moveHandler), Z();
              }
            }
          }, In = R ? X.touch : X.mouse, xn = Xn() ? {
            passive: !1
          } : !1;
          document.addEventListener(In.moveEvent, In.moveHandler, xn), document.addEventListener(In.upEvent, In.upHandler, xn), m({
            type: L.columnStartResizing,
            columnId: T.id,
            columnWidth: T.totalWidth,
            headerIdWidths: P,
            clientX: z
          });
        };
        return [t, {
          onMouseDown: function(N) {
            return N.persist() || d(N, f);
          },
          onTouchStart: function(N) {
            return N.persist() || d(N, f);
          },
          style: {
            cursor: "col-resize"
          },
          draggable: !1,
          role: "separator"
        }];
      };
      v.pluginName = "useResizeColumns";
      function A(e, t) {
        if (t.type === L.init)
          return c({
            columnResizing: {
              columnWidths: {}
            }
          }, e);
        if (t.type === L.resetResize)
          return c({}, e, {
            columnResizing: {
              columnWidths: {}
            }
          });
        if (t.type === L.columnStartResizing) {
          var u = t.clientX, a = t.columnId, f = t.columnWidth, m = t.headerIdWidths;
          return c({}, e, {
            columnResizing: c({}, e.columnResizing, {
              startX: u,
              headerIdWidths: m,
              columnWidth: f,
              isResizingColumn: a
            })
          });
        }
        if (t.type === L.columnResizing) {
          var d = t.clientX, h = e.columnResizing, N = h.startX, T = h.columnWidth, R = h.headerIdWidths, H = R === void 0 ? [] : R, P = d - N, z = P / T, K = {};
          return H.forEach(function(j) {
            var Z = j[0], cn = j[1];
            K[Z] = Math.max(cn + cn * z, 0);
          }), c({}, e, {
            columnResizing: c({}, e.columnResizing, {
              columnWidths: c({}, e.columnResizing.columnWidths, {}, K)
            })
          });
        }
        if (t.type === L.columnDoneResizing)
          return c({}, e, {
            columnResizing: c({}, e.columnResizing, {
              startX: null,
              isResizingColumn: null
            })
          });
      }
      var I = function(t) {
        var u = t.flatHeaders, a = t.disableResizing, f = t.getHooks, m = t.state.columnResizing, d = Nn(t);
        u.forEach(function(h) {
          var N = re(h.disableResizing === !0 ? !1 : void 0, a === !0 ? !1 : void 0, !0);
          h.canResize = N, h.width = m.columnWidths[h.id] || h.originalWidth || h.width, h.isResizing = m.isResizingColumn === h.id, N && (h.getResizerProps = Mn(f().getResizerProps, {
            instance: d(),
            header: h
          }));
        });
      };
      function W(e) {
        var t = e.plugins, u = e.dispatch, a = e.autoResetResize, f = a === void 0 ? !0 : a, m = e.columns;
        Jn(t, ["useAbsoluteLayout"], "useResizeColumns");
        var d = Nn(f);
        Vn(function() {
          d() && u({
            type: L.resetResize
          });
        }, [m]);
        var h = C.useCallback(function() {
          return u({
            type: L.resetResize
          });
        }, [u]);
        Object.assign(e, {
          resetResizing: h
        });
      }
      function B(e) {
        var t = [], u = function a(f) {
          f.columns && f.columns.length && f.columns.map(a), t.push(f);
        };
        return u(e), t;
      }
      var F = {
        position: "absolute",
        top: 0
      }, E = function(t) {
        t.getTableBodyProps.push(x), t.getRowProps.push(x), t.getHeaderGroupProps.push(x), t.getFooterGroupProps.push(x), t.getHeaderProps.push(function(u, a) {
          var f = a.column;
          return [u, {
            style: c({}, F, {
              left: f.totalLeft + "px",
              width: f.totalWidth + "px"
            })
          }];
        }), t.getCellProps.push(function(u, a) {
          var f = a.cell;
          return [u, {
            style: c({}, F, {
              left: f.column.totalLeft + "px",
              width: f.column.totalWidth + "px"
            })
          }];
        }), t.getFooterProps.push(function(u, a) {
          var f = a.column;
          return [u, {
            style: c({}, F, {
              left: f.totalLeft + "px",
              width: f.totalWidth + "px"
            })
          }];
        });
      };
      E.pluginName = "useAbsoluteLayout";
      var x = function(t, u) {
        var a = u.instance;
        return [t, {
          style: {
            position: "relative",
            width: a.totalColumnsWidth + "px"
          }
        }];
      }, q = {
        display: "inline-block",
        boxSizing: "border-box"
      }, _ = function(t, u) {
        var a = u.instance;
        return [t, {
          style: {
            display: "flex",
            width: a.totalColumnsWidth + "px"
          }
        }];
      }, ln = function(t) {
        t.getRowProps.push(_), t.getHeaderGroupProps.push(_), t.getFooterGroupProps.push(_), t.getHeaderProps.push(function(u, a) {
          var f = a.column;
          return [u, {
            style: c({}, q, {
              width: f.totalWidth + "px"
            })
          }];
        }), t.getCellProps.push(function(u, a) {
          var f = a.cell;
          return [u, {
            style: c({}, q, {
              width: f.column.totalWidth + "px"
            })
          }];
        }), t.getFooterProps.push(function(u, a) {
          var f = a.column;
          return [u, {
            style: c({}, q, {
              width: f.totalWidth + "px"
            })
          }];
        });
      };
      ln.pluginName = "useBlockLayout";
      function jn(e) {
        e.getTableProps.push(sn), e.getRowProps.push(G), e.getHeaderGroupProps.push(G), e.getFooterGroupProps.push(G), e.getHeaderProps.push(bn), e.getCellProps.push(nn), e.getFooterProps.push(Ln);
      }
      jn.pluginName = "useFlexLayout";
      var sn = function(t, u) {
        var a = u.instance;
        return [t, {
          style: {
            minWidth: a.totalColumnsMinWidth + "px"
          }
        }];
      }, G = function(t, u) {
        var a = u.instance;
        return [t, {
          style: {
            display: "flex",
            flex: "1 0 auto",
            minWidth: a.totalColumnsMinWidth + "px"
          }
        }];
      }, bn = function(t, u) {
        var a = u.column;
        return [t, {
          style: {
            boxSizing: "border-box",
            flex: a.totalFlexWidth ? a.totalFlexWidth + " 0 auto" : void 0,
            minWidth: a.totalMinWidth + "px",
            width: a.totalWidth + "px"
          }
        }];
      }, nn = function(t, u) {
        var a = u.cell;
        return [t, {
          style: {
            boxSizing: "border-box",
            flex: a.column.totalFlexWidth + " 0 auto",
            minWidth: a.column.totalMinWidth + "px",
            width: a.column.totalWidth + "px"
          }
        }];
      }, Ln = function(t, u) {
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
      L.columnStartResizing = "columnStartResizing", L.columnResizing = "columnResizing", L.columnDoneResizing = "columnDoneResizing", L.resetResize = "resetResize";
      function zn(e) {
        e.stateReducers.push(Dn), e.getTableProps.push(fn), e.getHeaderProps.push(vn), e.getRowProps.push(Yn);
      }
      zn.pluginName = "useGridLayout";
      var fn = function(t, u) {
        var a = u.instance, f = a.visibleColumns.map(function(m) {
          var d;
          return a.state.gridLayout.columnWidths[m.id] ? a.state.gridLayout.columnWidths[m.id] + "px" : (d = a.state.columnResizing) != null && d.isResizingColumn ? a.state.gridLayout.startWidths[m.id] + "px" : typeof m.width == "number" ? m.width + "px" : m.width;
        });
        return [t, {
          style: {
            display: "grid",
            gridTemplateColumns: f.join(" ")
          }
        }];
      }, vn = function(t, u) {
        var a = u.column;
        return [t, {
          id: "header-cell-" + a.id,
          style: {
            position: "sticky",
            //enables a scroll wrapper to be placed around the table and have sticky headers
            gridColumn: "span " + a.totalVisibleHeaderCount
          }
        }];
      }, Yn = function(t, u) {
        var a = u.row;
        return a.isExpanded ? [t, {
          style: {
            gridColumn: "1 / " + (a.cells.length + 1)
          }
        }] : [t, {}];
      };
      function Dn(e, t, u, a) {
        if (t.type === L.init)
          return c({
            gridLayout: {
              columnWidths: {}
            }
          }, e);
        if (t.type === L.resetResize)
          return c({}, e, {
            gridLayout: {
              columnWidths: {}
            }
          });
        if (t.type === L.columnStartResizing) {
          var f = t.columnId, m = t.headerIdWidths, d = Hn(f);
          if (d !== void 0) {
            var h = a.visibleColumns.reduce(function(J, U) {
              var Q;
              return c({}, J, (Q = {}, Q[U.id] = Hn(U.id), Q));
            }, {}), N = a.visibleColumns.reduce(function(J, U) {
              var Q;
              return c({}, J, (Q = {}, Q[U.id] = U.minWidth, Q));
            }, {}), T = a.visibleColumns.reduce(function(J, U) {
              var Q;
              return c({}, J, (Q = {}, Q[U.id] = U.maxWidth, Q));
            }, {}), R = m.map(function(J) {
              var U = J[0];
              return [U, Hn(U)];
            });
            return c({}, e, {
              gridLayout: c({}, e.gridLayout, {
                startWidths: h,
                minWidths: N,
                maxWidths: T,
                headerIdGridWidths: R,
                columnWidth: d
              })
            });
          } else
            return e;
        }
        if (t.type === L.columnResizing) {
          var H = t.clientX, P = e.columnResizing.startX, z = e.gridLayout, K = z.columnWidth, j = z.minWidths, Z = z.maxWidths, cn = z.headerIdGridWidths, mn = cn === void 0 ? [] : cn, X = H - P, In = X / K, xn = {};
          return mn.forEach(function(J) {
            var U = J[0], Q = J[1];
            xn[U] = Math.min(Math.max(j[U], Q + Q * In), Z[U]);
          }), c({}, e, {
            gridLayout: c({}, e.gridLayout, {
              columnWidths: c({}, e.gridLayout.columnWidths, {}, xn)
            })
          });
        }
        if (t.type === L.columnDoneResizing)
          return c({}, e, {
            gridLayout: c({}, e.gridLayout, {
              startWidths: {},
              minWidths: {},
              maxWidths: {}
            })
          });
      }
      function Hn(e) {
        var t, u = (t = document.getElementById("header-cell-" + e)) == null ? void 0 : t.offsetWidth;
        if (u !== void 0)
          return u;
      }
      y._UNSTABLE_usePivotColumns = yo, y.actions = L, y.defaultColumn = Cn, y.defaultGroupByFn = eo, y.defaultOrderByFn = wt, y.defaultRenderer = un, y.emptyRenderer = An, y.ensurePluginOrder = Jn, y.flexRender = en, y.functionalUpdate = Fn, y.loopHooks = Sn, y.makePropGetter = Mn, y.makeRenderer = ne, y.reduceHooks = Bn, y.safeUseLayoutEffect = ae, y.useAbsoluteLayout = E, y.useAsyncDebounce = de, y.useBlockLayout = ln, y.useColumnOrder = i, y.useExpanded = gt, y.useFilters = Ut, y.useFlexLayout = jn, y.useGetLatest = Nn, y.useGlobalFilter = Xt, y.useGridLayout = zn, y.useGroupBy = ht, y.useMountedLayoutEffect = Vn, y.usePagination = lo, y.useResizeColumns = v, y.useRowSelect = Tt, y.useRowState = ho, y.useSortBy = ro, y.useTable = at, Object.defineProperty(y, "__esModule", { value: !0 });
    });
  }(To, To.exports)), To.exports;
}
process.env.NODE_ENV === "production" ? ha.exports = Pu() : ha.exports = Ou();
var st = ha.exports;
function xu(o, g, y) {
  var C = this, S = Y.useRef(null), b = Y.useRef(0), c = Y.useRef(null), k = Y.useRef([]), Tn = Y.useRef(), w = Y.useRef(), Rn = Y.useRef(o), L = Y.useRef(!0);
  Rn.current = o;
  var un = !g && g !== 0 && typeof window < "u";
  if (typeof o != "function")
    throw new TypeError("Expected a function");
  g = +g || 0, y = y || {};
  var An = !!y.leading, Cn = "trailing" in y ? !!y.trailing : !0, gn = "maxWait" in y, Gn = gn ? Math.max(+y.maxWait || 0, g) : null, Mn = Y.useCallback(function(en) {
    var dn = k.current, Kn = Tn.current;
    return k.current = Tn.current = null, b.current = en, w.current = Rn.current.apply(Kn, dn);
  }, []), Bn = Y.useCallback(function(en, dn) {
    un && cancelAnimationFrame(c.current), c.current = un ? requestAnimationFrame(en) : setTimeout(en, dn);
  }, [un]), Sn = Y.useCallback(function(en) {
    if (!L.current)
      return !1;
    var dn = en - S.current, Kn = en - b.current;
    return !S.current || dn >= g || dn < 0 || gn && Kn >= Gn;
  }, [Gn, gn, g]), Jn = Y.useCallback(function(en) {
    return c.current = null, Cn && k.current ? Mn(en) : (k.current = Tn.current = null, w.current);
  }, [Mn, Cn]), Fn = Y.useCallback(function() {
    var en = Date.now();
    if (Sn(en))
      return Jn(en);
    if (L.current) {
      var dn = en - S.current, Kn = en - b.current, Un = g - dn, Qn = gn ? Math.min(Un, Gn - Kn) : Un;
      Bn(Fn, Qn);
    }
  }, [Gn, gn, Sn, Bn, Jn, g]), Nn = Y.useCallback(function() {
    c.current && (un ? cancelAnimationFrame(c.current) : clearTimeout(c.current)), b.current = 0, k.current = S.current = Tn.current = c.current = null;
  }, [un]), ae = Y.useCallback(function() {
    return c.current ? Jn(Date.now()) : w.current;
  }, [Jn]);
  Y.useEffect(function() {
    return L.current = !0, function() {
      L.current = !1;
    };
  }, []);
  var Vn = Y.useCallback(function() {
    for (var en = [], dn = 0; dn < arguments.length; dn++)
      en[dn] = arguments[dn];
    var Kn = Date.now(), Un = Sn(Kn);
    if (k.current = en, Tn.current = C, S.current = Kn, Un) {
      if (!c.current && L.current)
        return b.current = S.current, Bn(Fn, g), An ? Mn(S.current) : w.current;
      if (gn)
        return Bn(Fn, g), Mn(S.current);
    }
    return c.current || Bn(Fn, g), w.current;
  }, [Mn, An, gn, Sn, Bn, Fn, g]), de = Y.useCallback(function() {
    return !!c.current;
  }, []), ne = Y.useMemo(function() {
    return {
      callback: Vn,
      cancel: Nn,
      flush: ae,
      pending: de
    };
  }, [Vn, Nn, ae, de]);
  return ne;
}
function Bu(o, g) {
  return o === g;
}
function Xa(o) {
  return typeof o == "function" ? function() {
    return o;
  } : o;
}
function Fu(o) {
  var g = Y.useState(Xa(o)), y = g[0], C = g[1], S = Y.useCallback(function(b) {
    return C(Xa(b));
  }, []);
  return [y, S];
}
function zu(o, g, y) {
  var C = y && y.equalityFn || Bu, S = Fu(o), b = S[0], c = S[1], k = xu(Y.useCallback(function(w) {
    return c(w);
  }, [c]), g, y), Tn = Y.useRef(o);
  return Y.useEffect(function() {
    C(Tn.current, o) || (k.callback(o), Tn.current = o);
  }, [o, k, C]), [b, { cancel: k.cancel, pending: k.pending, flush: k.flush }];
}
function Wu(o) {
  if (Array.isArray(o) || (o.general.geoType === "us-county" || o.general.geoType === "single-state" || o.general.geoType === "us" && (o != null && o.data)) && (o == null || o.data.forEach((g) => {
    g[o.columns.geo.name] && (!isNaN(parseInt(g[o.columns.geo.name])) && g[o.columns.geo.name].length === 4 && (g[o.columns.geo.name] = 0 + g[o.columns.geo.name]), g[o.columns.geo.name] = g[o.columns.geo.name].toString());
  })), Array.isArray(o) && o.length > 0) {
    let g = Object.keys(o[0]), y = ["fips", "FIPS", "fips codes", "FIPS CODES", "Fips Codes", "fips Codes", "Fips codes", "FIPS Codes"];
    const C = g.filter((S) => y.includes(S));
    if (!C.length)
      return;
    o == null || o.forEach((S) => {
      S[C] && (!isNaN(parseInt(S[C])) && S[C].length === 4 && (S[C] = 0 + S[C]), S[C] = S[C].toString());
    });
  }
  return o;
}
const La = 10, ot = {
  emptyCols: "It looks like your column headers are missing some data. Please make sure all of your columns have titles and upload your file again.",
  emptyData: "Your data file is empty.",
  dataType: "Your datatype is not supported.",
  fileType: "The file type that you are trying to upload is not supported.",
  formatting: "Please check the formatting of your data file.",
  failedFetch: "Error fetching or parsing data file.",
  urlInvalid: "Please make sure to use a valid URL.",
  cannotReach: "Cannot reach URL, please make sure it's correct.",
  fileTooLarge: `File is too large. Maximum file size is ${La}MB.`
}, Gu = Y.memo(({ globalFilter: o, setGlobalFilter: g, disabled: y = !1 }) => {
  const [C, S] = Y.useState(o), [b] = zu(C, 200);
  Y.useEffect(() => {
    typeof b == "string" && b !== o && g(b ?? "");
  }, [b]);
  const c = (k) => {
    S(k.target.value);
  };
  return /* @__PURE__ */ l.createElement("input", { className: "filter", value: C, onChange: c, type: "search", placeholder: "Filter...", disabled: y });
}), _a = Y.memo(({ globalFilter: o, data: g, setGlobalFilter: y }) => /* @__PURE__ */ l.createElement("header", { className: "data-table-header" }, /* @__PURE__ */ l.createElement("h2", null, "Data Preview"), /* @__PURE__ */ l.createElement(Gu, { globalFilter: o || "", setGlobalFilter: y, disabled: g === null }))), Hu = Y.memo(({ previousPage: o, nextPage: g, canPreviousPage: y, canNextPage: C, pageNumber: S, totalPages: b }) => /* @__PURE__ */ l.createElement("footer", { className: "data-table-pagination" }, /* @__PURE__ */ l.createElement("ul", null, /* @__PURE__ */ l.createElement("li", null, /* @__PURE__ */ l.createElement("button", { onClick: () => o(), className: "btn btn-prev", disabled: !y, title: "Previous Page" })), /* @__PURE__ */ l.createElement("li", null, /* @__PURE__ */ l.createElement("button", { onClick: () => g(), className: "btn btn-next", disabled: !C, title: "Next Page" }))), /* @__PURE__ */ l.createElement("span", null, "Page ", S, " of ", b))), Yu = () => {
  const { config: o } = Y.useContext(yt), g = Y.useMemo(() => o.type === "dashboard" ? Object.values(o.datasets).find((en) => en.preview && Array.isArray(en.data)) : o.data, [o.type, o.data, o.datasets]), [y, C] = Y.useState(g), S = (en) => {
    const dn = Object.keys(en[0]).includes("tableData"), Kn = Rn(dn ? en[0].tableData : en);
    return Wu(Kn), Kn;
  }, b = (en) => C(S(en)), c = Y.useContext(Pt), k = async (en, dn) => {
    if (dn.preview)
      if (dn.dataUrl) {
        const Kn = await ba(dn.dataUrl);
        Array.isArray(Kn) && b(Kn);
      } else
        Array.isArray(dn.data) && b(dn.data);
  }, Tn = async (en) => {
    for (const dn of Object.keys(en))
      await k(dn, en[dn]);
  };
  Y.useEffect(() => {
    (async () => {
      if (o.data)
        b(g);
      else if (o.type === "dashboard")
        await Tn(o.datasets);
      else if (o.dataUrl) {
        const dn = await ba(o.dataUrl);
        Array.isArray(dn) && b(dn);
      }
    })();
  }, [o, o.data, g]);
  const w = Y.useMemo(() => {
    if (!y)
      return [];
    const en = y.columns ?? [];
    return en.length > 0 && en.includes("") && c({ type: "EDITOR_SET_ERRORS", payload: [ot.emptyCols] }), en.map((dn) => ({
      id: `column-${dn}`,
      accessor: (Un) => Un[dn],
      Header: dn,
      width: 250
    }));
  }, [y]), Rn = (en) => {
    let dn = [];
    en.forEach((Un) => {
      Object.keys(Un).forEach((Qn) => {
        dn.includes(Qn) === !1 && dn.push(Qn);
      });
    });
    const Kn = [...en];
    if (Array.isArray(Kn))
      return Kn.columns = dn, Kn;
  }, {
    getTableProps: L,
    getTableBodyProps: un,
    headerGroups: An,
    state: { pageIndex: Cn, globalFilter: gn },
    prepareRow: Gn,
    setGlobalFilter: Mn,
    page: Bn,
    canPreviousPage: Sn,
    canNextPage: Jn,
    pageOptions: Fn,
    nextPage: Nn,
    previousPage: ae
  } = st.useTable({ columns: w, data: y, initialState: { pageSize: 25 } }, st.useBlockLayout, st.useGlobalFilter, st.useSortBy, st.useResizeColumns, st.usePagination), Vn = () => /* @__PURE__ */ l.createElement("section", { className: "no-data" }, /* @__PURE__ */ l.createElement("section", { className: "no-data-message" }, /* @__PURE__ */ l.createElement("section", null, /* @__PURE__ */ l.createElement("h3", null, "No Data"), /* @__PURE__ */ l.createElement("p", null, "Import data to preview"))), /* @__PURE__ */ l.createElement("div", { className: "table-container" }, /* @__PURE__ */ l.createElement("table", { className: "editor data-table", role: "table" }, /* @__PURE__ */ l.createElement("thead", null, /* @__PURE__ */ l.createElement("tr", null, /* @__PURE__ */ l.createElement("th", { scope: "col", colSpan: 1, role: "columnheader" }), /* @__PURE__ */ l.createElement("th", { scope: "col", colSpan: 1, role: "columnheader" }), /* @__PURE__ */ l.createElement("th", { scope: "col", colSpan: 1, role: "columnheader" }))), /* @__PURE__ */ l.createElement("tbody", null, /* @__PURE__ */ l.createElement(l.Fragment, null, [...Array(10)].map((en, dn) => /* @__PURE__ */ l.createElement("tr", { key: dn }, /* @__PURE__ */ l.createElement("td", null), /* @__PURE__ */ l.createElement("td", null), /* @__PURE__ */ l.createElement("td", null))))))));
  if (!y)
    return [/* @__PURE__ */ l.createElement(_a, { key: "header" }), /* @__PURE__ */ l.createElement(Vn, { key: "table" })];
  const de = { previousPage: ae, nextPage: Nn, canPreviousPage: Sn, canNextPage: Jn, pageNumber: Cn + 1, totalPages: Fn.length }, ne = () => /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("section", { className: "data-table-container" }, /* @__PURE__ */ l.createElement("div", { className: "table-container" }, /* @__PURE__ */ l.createElement("table", { className: "data-table", ...L(), "aria-hidden": "true" }, /* @__PURE__ */ l.createElement("thead", null, An.map((en) => /* @__PURE__ */ l.createElement("tr", { ...en.getHeaderGroupProps() }, en.headers.map((dn) => /* @__PURE__ */ l.createElement("th", { scope: "col", ...dn.getHeaderProps(dn.getSortByToggleProps()), className: dn.isSorted ? dn.isSortedDesc ? "sort sort-desc" : "sort sort-asc" : "", title: dn.Header }, dn.render("Header"), /* @__PURE__ */ l.createElement("div", { ...dn.getResizerProps(), className: "resizer" })))))), /* @__PURE__ */ l.createElement("tbody", { ...un() }, Bn.map((en) => (Gn(en), /* @__PURE__ */ l.createElement("tr", { ...en.getRowProps() }, en.cells.map((dn) => /* @__PURE__ */ l.createElement("td", { ...dn.getCellProps(), title: dn.value }, dn.render("Cell")))))))))), /* @__PURE__ */ l.createElement(Hu, { ...de }));
  return [/* @__PURE__ */ l.createElement(_a, { key: "header", data: y, setGlobalFilter: Mn, globalFilter: gn }), /* @__PURE__ */ l.createElement(ne, { key: "table" })];
}, Vu = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBkPSJNMzE0LjIyMiAxOTcuNzhjNTEuMDkxIDUxLjA5MSA1NC4zNzcgMTMyLjI4NyA5Ljc1IDE4Ny4xNi02LjI0MiA3LjczLTIuNzg0IDMuODY1LTg0Ljk0IDg2LjAyLTU0LjY5NiA1NC42OTYtMTQzLjI2NiA1NC43NDUtMTk3Ljk5IDAtNTQuNzExLTU0LjY5LTU0LjczNC0xNDMuMjU1IDAtMTk3Ljk5IDMyLjc3My0zMi43NzMgNTEuODM1LTUxLjg5OSA2My40MDktNjMuNDU3IDcuNDYzLTcuNDUyIDIwLjMzMS0yLjM1NCAyMC40ODYgOC4xOTJhMTczLjMxIDE3My4zMSAwIDAgMCA0Ljc0NiAzNy44MjhjLjk2NiA0LjAyOS0uMjcyIDguMjY5LTMuMjAyIDExLjE5OEw4MC42MzIgMzEyLjU3Yy0zMi43NTUgMzIuNzc1LTMyLjg4NyA4NS44OTIgMCAxMTguOCAzMi43NzUgMzIuNzU1IDg1Ljg5MiAzMi44ODcgMTE4LjggMGw3NS4xOS03NS4yYzMyLjcxOC0zMi43MjUgMzIuNzc3LTg2LjAxMyAwLTExOC43OWE4My43MjIgODMuNzIyIDAgMCAwLTIyLjgxNC0xNi4yMjljLTQuNjIzLTIuMjMzLTcuMTgyLTcuMjUtNi41NjEtMTIuMzQ2IDEuMzU2LTExLjEyMiA2LjI5Ni0yMS44ODUgMTQuODE1LTMwLjQwNWw0LjM3NS00LjM3NWMzLjYyNS0zLjYyNiA5LjE3Ny00LjU5NCAxMy43Ni0yLjI5NCAxMi45OTkgNi41MjQgMjUuMTg3IDE1LjIxMSAzNi4wMjUgMjYuMDQ5ek00NzAuOTU4IDQxLjA0Yy01NC43MjQtNTQuNzQ1LTE0My4yOTQtNTQuNjk2LTE5Ny45OSAwLTgyLjE1NiA4Mi4xNTYtNzguNjk4IDc4LjI5LTg0Ljk0IDg2LjAyLTQ0LjYyNyA1NC44NzMtNDEuMzQxIDEzNi4wNjkgOS43NSAxODcuMTYgMTAuODM4IDEwLjgzOCAyMy4wMjYgMTkuNTI1IDM2LjAyNSAyNi4wNDkgNC41ODIgMi4zIDEwLjEzNCAxLjMzMSAxMy43Ni0yLjI5NGw0LjM3NS00LjM3NWM4LjUyLTguNTE5IDEzLjQ1OS0xOS4yODMgMTQuODE1LTMwLjQwNS42MjEtNS4wOTYtMS45MzgtMTAuMTEzLTYuNTYxLTEyLjM0NmE4My43MDYgODMuNzA2IDAgMCAxLTIyLjgxNC0xNi4yMjljLTMyLjc3Ny0zMi43NzctMzIuNzE4LTg2LjA2NSAwLTExOC43OWw3NS4xOS03NS4yYzMyLjkwOC0zMi44ODcgODYuMDI1LTMyLjc1NSAxMTguOCAwIDMyLjg4NyAzMi45MDggMzIuNzU1IDg2LjAyNSAwIDExOC44bC00NS44NDggNDUuODRjLTIuOTMgMi45MjktNC4xNjggNy4xNjktMy4yMDIgMTEuMTk4YTE3My4zMSAxNzMuMzEgMCAwIDEgNC43NDYgMzcuODI4Yy4xNTUgMTAuNTQ2IDEzLjAyMyAxNS42NDQgMjAuNDg2IDguMTkyIDExLjU3NC0xMS41NTggMzAuNjM2LTMwLjY4NCA2My40MDktNjMuNDU3IDU0LjczMy01NC43MzUgNTQuNzEtMTQzLjMtLjAwMS0xOTcuOTkxeiIvPjwvc3ZnPg==", Eo = Y.createContext();
Eo.displayName = "SampleDataContext";
const Ku = `STATE,Rate,Location,URL
Overall,55,Vehicle,https://www.cdc.gov\r
Alabama,130,Vehicle,https://www.cdc.gov/\r
Alaska,40,Work,https://www.cdc.gov/\r
American Samoa,55,Home,https://www.cdc.gov/\r
Arizona,57,School,https://www.cdc.gov/\r
Arkansas,60,School,https://www.cdc.gov/\r
California,30,Home,https://www.cdc.gov/\r
Colorado,40,Vehicle,https://www.cdc.gov/\r
Connecticut,55,Home,https://www.cdc.gov/\r
Deleware,57,Home,https://www.cdc.gov/\r
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
`, qu = `Location,symbolCol,textCol,orderCol\r
School,¶,Footnote 4,4\r
School,§,Footnote 3,3\r
School,†,Footnote 2,2\r
School,*,Footnote 1,1\r
Vehicle,*,Some Vehicle Footnote,1\r
Work,*,Some Work Footnote,1\r
Home,*,Some Home Footnote,1`, Uu = `Race,Age-adjusted rate
Hispanic or Latino,644.2
Non-Hispanic American Indian,636.1
Non-Hispanic Black,563.7
Non-Hispanic Asian or Pacific Islander,202.5
Non-Hispanic White,183.6
`, Xu = `FIPS Codes,County,Public Health Jurisdiction,Percent Vaccinated,Vaccination Coverage Group
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
`, _u = `City,Longitude,Latitude,Value
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
Richmond,-77.43605,37.540726,83
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
`, Ju = `x,y1,y2,y3,y4
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
`, Qu = `Group_Category,Value
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
`, Zu = `[
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
`, $u = `[
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
]`, ni = `date,quarter,upper_90,lower_90,random_col
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
`, ei = `[
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
]`, ti = `[
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
]`, oi = `[
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
]`, ai = `[\r
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
`, Sa = {
  charts: [
    {
      text: "Chart Sample Data",
      fileName: "valid-data-chart.csv",
      data: Uu
    },
    {
      text: "Box Plot Sample Data",
      fileName: "valid-boxplot.csv",
      data: Qu
    },
    {
      text: "Scatter Plot Sample Data",
      fileName: "valid-scatterplot.csv",
      data: Ju
    },
    {
      text: "Area Chart Sample Data",
      fileName: "valid-area-chart.json",
      data: Zu
    },
    {
      text: "Forecast Chart Data",
      fileName: "valid-forecast-data.csv",
      data: ni
    },
    {
      text: "Sankey Chart Data",
      fileName: "valid-sankey-data.json",
      data: oi
    },
    {
      text: "Pivot Table Data",
      fileName: "pivotData.json",
      data: ai
    }
  ],
  maps: [
    {
      text: "United States: State Sample Data",
      fileName: "valid-data-map.csv",
      data: Ku
    },
    {
      text: "United States: State Sample Data Footnotes",
      fileName: "valid-data-map-footnotes.csv",
      data: qu
    },
    {
      text: "United States: County Sample Data",
      fileName: "valid-county-data.csv",
      data: Xu
    },
    {
      text: "United States: Geo Point Sample Data",
      fileName: "supported-cities.csv",
      data: _u
    },
    {
      text: "United States: Region",
      fileName: "valid-region-data.json",
      data: ti
    },
    {
      text: "World: Geocode Sample Data",
      fileName: "valid-world-geocode.json",
      data: $u
    },
    {
      text: "World: Default Data",
      fileName: "valid-world-data.json",
      data: ei
    }
  ]
}, yr = ({ text: o, fileName: g, data: y }) => {
  const { editingDataset: C, loadData: S } = Y.useContext(Eo), b = (k) => S(new Blob([y], { type: "text/csv" }), g, C), c = (k) => k.keyCode === 13 && S(new Blob([y], { type: "text/csv" }), g, C);
  return /* @__PURE__ */ l.createElement(
    "button",
    {
      className: "link link-upload",
      onClick: b,
      onKeyDown: c
    },
    o
  );
}, ri = () => Sa.maps.map((o) => /* @__PURE__ */ l.createElement(yr, { key: o.fileName, text: o.text, fileName: o.fileName, data: o.data })), ui = () => Sa.charts.map((o) => /* @__PURE__ */ l.createElement(yr, { key: o.fileName, text: o.text, fileName: o.fileName, data: o.data })), ii = () => {
  const { config: o } = Y.useContext(Eo);
  return /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("h3", { className: "heading-3" }, "Load Sample Data:"), /* @__PURE__ */ l.createElement("ul", { className: "sample-data-list" }, o.type !== "map" && /* @__PURE__ */ l.createElement(ui, null), o.type !== "chart" && /* @__PURE__ */ l.createElement(ri, null)));
}, Na = () => null;
Na.data = Sa;
Na.Buttons = ii;
const Ja = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48cGF0aCBkPSJNMjI0IDEzNlYwSDI0QzEwLjcgMCAwIDEwLjcgMCAyNHY0NjRjMCAxMy4zIDEwLjcgMjQgMjQgMjRoMzM2YzEzLjMgMCAyNC0xMC43IDI0LTI0VjE2MEgyNDhjLTEzLjIgMC0yNC0xMC44LTI0LTI0em02NS4xOCAyMTYuMDFIMjI0djgwYzAgOC44NC03LjE2IDE2LTE2IDE2aC0zMmMtOC44NCAwLTE2LTcuMTYtMTYtMTZ2LTgwSDk0LjgyYy0xNC4yOCAwLTIxLjQxLTE3LjI5LTExLjI3LTI3LjM2bDk2LjQyLTk1LjdjNi42NS02LjYxIDE3LjM5LTYuNjEgMjQuMDQgMGw5Ni40MiA5NS43YzEwLjE1IDEwLjA3IDMuMDMgMjcuMzYtMTEuMjUgMjcuMzZ6TTM3NyAxMDVMMjc5LjEgN2MtNC41LTQuNS0xMC42LTctMTctN0gyNTZ2MTI4aDEyOHYtNi4xYzAtNi4zLTIuNS0xMi40LTctMTYuOXoiLz48L3N2Zz4=";
function li() {
  const { config: o, errors: g, tempConfig: y, sharepath: C } = Y.useContext(yt), S = (O) => {
    gn({ type: "EDITOR_SET_CONFIG", payload: O });
  }, b = (O) => {
    gn({ type: "EDITOR_SET_ERRORS", payload: O });
  }, c = new Ar(), [k, Tn] = Y.useState(o.dataFileSourceType === "url" ? o.dataFileName : o.dataUrl || ""), [w, Rn] = Y.useState(!!o.dataUrl), [L, un] = Y.useState(o.type === "dashboard" || !o.data), [An, Cn] = Y.useState(void 0), gn = Y.useContext(Pt), Gn = {
    ".csv": "text/csv",
    ".json": "application/json"
  }, Mn = (O) => O === void 0 ? "" : O > Math.pow(1024, 3) ? Math.round(O / Math.pow(1024, 3) * 100) / 100 + " GB" : O > Math.pow(1024, 2) ? Math.round(O / Math.pow(1024, 2) * 100) / 100 + " MB" : O > 1024 ? Math.round(O / 1024 * 100) / 100 + " KB" : O + " B", Bn = (O, V, rn) => (V.map(function(tn, Wn, Xn) {
    if (!Xn.find((Le) => Le.dataKey === tn.dataKey))
      return !1;
  }), !(O.columns.indexOf(rn) < 0)), Sn = (O) => ya(k) ? ".csv" : So(k) ? ".json" : Object.keys(Gn).find((V) => O.pathname.endsWith(V)), Jn = async () => {
    let O;
    try {
      O = ya(k) || So(k) ? k : new URL(k, window.location.origin);
    } catch {
      throw ot.urlInvalid;
    }
    let V = null;
    const rn = Sn(O);
    try {
      await Tr.get(O.toString(), {
        responseType: "blob"
      }).then((tn) => {
        V = tn.data, rn === ".csv" && ["text/csv", "text/plain"].includes(V.type) || ya(k) ? V = V.slice(0, V.size, "text/csv") : (V.type === "application/json" || rn === ".json" && V.type === "text/plain" || So(k)) && (V = V.slice(0, V.size, "application/json"));
      });
    } catch (tn) {
      console.error(tn);
      const Wn = tn.toString();
      throw Object.values(ot).includes(tn) ? Wn : ot.failedFetch;
    }
    return o.type === "dashboard" && Tn(""), V;
  }, Fn = ([O]) => Nn(O, An, An), Nn = async (O = null, V, rn) => {
    let tn = O;
    const Wn = (tn == null ? void 0 : tn.path) ?? V ?? k, Xn = O ? "file" : "url";
    if (Xn === "url")
      try {
        tn = await Jn();
      } catch (fe) {
        b([fe]);
        return;
      }
    const Le = tn.size;
    if (Le > La * 1048576) {
      b([ot.fileTooLarge]);
      return;
    }
    const Ne = (() => {
      const fe = (O == null ? void 0 : O.name) || k || V;
      if (Xn === "file") {
        const ce = fe.match(/(?:\.([^.]+))?$/g), Me = ce.length === 0 ? ".csv" : ce[0];
        return Gn[Me];
      }
      if (Xn === "url")
        return tn.type;
    })(), De = new FileReader(), Ee = (fe) => {
      switch (Ne) {
        case "text/csv":
          return Eu(fe);
        case "text/plain":
        case "application/json":
          try {
            return So(k) ? JSON.parse(fe).response.docs : JSON.parse(fe);
          } catch {
            b([ot.formatting]);
            return;
          }
        default:
          b([ot.fileType]);
          return;
      }
    };
    De.onload = function() {
      const fe = (ce, Me = !1) => {
        if (o.type === "dashboard") {
          let ve = { ...o.datasets };
          Object.keys(ve).forEach((En) => ve[En].preview = !1);
          const qe = Ne.split("/")[1].toUpperCase();
          ve[rn || Wn] = {
            data: ce,
            // new data
            dataFileSize: Le,
            dataFileName: Wn,
            // new file source
            dataFileSourceType: Xn,
            // new file source type
            dataFileFormat: qe,
            preview: !0
          }, w && (ve[rn || Wn].dataUrl = Wn);
          const $ = Me ? { ...o, ...y } : o;
          S({ ...$, datasets: ve });
        } else {
          let ve = {
            ...o,
            ...y,
            data: ce,
            // new data
            dataFileName: Wn,
            // new file source
            dataFileSourceType: Xn,
            // new file source type
            formattedData: c.developerStandardize(ce, o.dataDescription)
          };
          w && (ve.dataUrl = Wn), S(ve);
        }
      };
      try {
        const ce = Ee(this.result.toString()), Me = c.autoStandardize(ce);
        o.data && o.series ? Bn(Me, o.series, o == null ? void 0 : o.xAxis.dataKey) ? fe(Me, !0) : Ie(
          {
            data: Me,
            dataFileName: Wn,
            dataFileSourceType: Xn
          },
          "It appears that your data does not contain all of the columns that your last dataset contained. Continuing will reset your configuration. Do you want to continue?"
        ) : fe(Me), An && Cn(void 0), un(!1);
      } catch (ce) {
        b(ce);
      }
    };
    const Ke = Ne === "text/csv" ? "utf-8" : "";
    De.readAsText(tn, Ke);
  };
  Y.useEffect(() => {
    let O = { ...y || o };
    if (o.formattedData === void 0 && o.dataDescription) {
      const V = c.developerStandardize(o.data, o.dataDescription);
      V && (O.formattedData = V);
    }
    gn({ type: "EDITOR_SAVE", payload: O });
  }, []);
  const ae = (O, V, rn) => {
    if (o.type === "dashboard") {
      let tn = { ...o.datasets[O].dataDescription, [V]: rn }, Wn = c.developerStandardize(o.datasets[O].data, tn), Xn = { ...o.datasets };
      Xn[O] = { ...Xn[O], dataDescription: tn, formattedData: Wn }, S({ ...o, datasets: Xn });
    } else {
      let tn = { ...o.dataDescription, [V]: rn }, Wn = c.developerStandardize(o.data, tn);
      S({ ...o, formattedData: Wn, dataDescription: tn });
    }
  }, Vn = (O, V) => {
    if (V) {
      let rn = { ...o.datasets };
      O === !1 ? delete rn[V].dataUrl : rn[V].dataUrl = rn[V].dataFileName, S({ ...o, datasets: rn });
    } else if (o.type !== "dashboard") {
      let rn = { ...o };
      O === !1 ? delete rn.dataUrl : rn.dataUrl = rn.dataFileName, S(rn);
    }
    Rn(O);
  }, { getRootProps: de, getInputProps: ne, isDragActive: en } = va({ onDrop: Fn }), { getRootProps: dn, getInputProps: Kn, isDragActive: Un } = va({ onDrop: Fn }), Qn = () => /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("form", { className: "input-group d-flex", onSubmit: (O) => O.preventDefault() }, /* @__PURE__ */ l.createElement("input", { id: "external-data", type: "text", className: "form-control flex-grow-1 border-right-0", placeholder: "e.g., https://data.cdc.gov/resources/file.json", "aria-label": "Load data from external URL", "aria-describedby": "load-data", value: k, onChange: (O) => Tn(O.target.value) }), /* @__PURE__ */ l.createElement("button", { className: "input-group-text btn btn-primary px-4", type: "submit", id: "load-data", onClick: () => Nn(null, k, An) }, "Load")), /* @__PURE__ */ l.createElement("label", { htmlFor: "keep-url", className: "mt-1 d-flex keep-url" }, /* @__PURE__ */ l.createElement("input", { type: "checkbox", id: "keep-url", checked: w, onChange: () => Vn(!w, An) }), " Always load from URL (normally will only pull once)")), Ie = (O = {}, V = "Are you sure you want to do this?") => {
    O.newViz = !0, window.confirm(V) === !0 && (gn({ type: "EDITOR_SAVE", payload: O }), un(!0));
  }, Te = () => (
    //todo convert to modal
    /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("button", { className: "btn danger", onClick: () => Ie({ type: o.type, visualizationType: o.visualizationType }, "Resetting will remove your data and settings. Do you want to continue?") }, "Clear", /* @__PURE__ */ l.createElement(Ra, null)), o.dataFileSourceType === "file" && /* @__PURE__ */ l.createElement("div", { className: "link link-replace", ...dn() }, /* @__PURE__ */ l.createElement("input", { ...Kn() }), /* @__PURE__ */ l.createElement("p", null, /* @__PURE__ */ l.createElement("span", null, "or replace file"))))
  ), Se = (O, V, rn) => {
    let tn = { ...o.datasets };
    rn === !0 ? Object.keys(tn).forEach((Wn) => {
      const Xn = Wn === O;
      tn[Wn][V] = Xn;
    }) : tn[O][V] = rn, S({ ...o, datasets: tn });
  }, Re = (O) => {
    let V = { ...o.datasets }, rn = { ...o.visualizations };
    Object.keys(rn).forEach((tn) => {
      rn[tn].dataKey === O && delete rn[tn].dataKey;
    }), delete V[O], S({ ...o, datasets: V, visualizations: rn });
  }, ge = (O, V) => {
    if (O === V)
      return;
    let rn = { ...o.datasets }, tn = { ...o.visualizations }, Wn = 2, Xn = V;
    for (; rn[V]; )
      V = Xn + "-" + Wn, Wn++;
    rn[V] = rn[O], delete rn[O], Object.keys(tn).forEach((Le) => {
      tn[Le].dataKey === O && (tn[Le].dataKey = V);
    }), S({ ...o, datasets: rn, visualizations: tn });
  };
  let me, re = !1;
  o.type === "dashboard" ? re = Object.keys(o.datasets).length > 0 : (me = o, re = !!o.formattedData || o.data && o.dataDescription && c.autoStandardize(o.data)), (o.visualizationType === "Box Plot" && o.data || o.visualizationType === "Scatter Plot") && (re = !0);
  const Pe = /* @__PURE__ */ l.createElement(l.Fragment, null, o.filters && o.filters.map(
    (O, V) => O.type !== "url" ? /* @__PURE__ */ l.createElement(l.Fragment, null) : /* @__PURE__ */ l.createElement("fieldset", { key: O.key, className: "edit-block url-filters-block" }, /* @__PURE__ */ l.createElement(
      "button",
      {
        onClick: (rn) => {
          let tn = [...o.filters];
          tn.splice(V, 1), S({ ...o, filters: tn, runtimeDataUrl: void 0 });
        }
      },
      "Remove"
    ), /* @__PURE__ */ l.createElement("label", null, /* @__PURE__ */ l.createElement("span", { className: "edit-label column-heading" }, "Label", /* @__PURE__ */ l.createElement(an, { style: { textTransform: "none" } }, /* @__PURE__ */ l.createElement(an.Target, null, /* @__PURE__ */ l.createElement(Ia, { display: "question" })), /* @__PURE__ */ l.createElement(an.Content, null, /* @__PURE__ */ l.createElement("p", { style: { padding: "0.5rem" } }, "The label that will appear above the dropdown filter.")))), " ", /* @__PURE__ */ l.createElement(
      "input",
      {
        type: "text",
        defaultValue: O.label,
        onChange: (rn) => {
          let tn = [...o.filters];
          tn[V].label = rn.target.value, S({ ...o, filters: tn });
        }
      }
    )), /* @__PURE__ */ l.createElement("label", null, /* @__PURE__ */ l.createElement("span", { className: "edit-label column-heading" }, "Query string parameter", /* @__PURE__ */ l.createElement(an, { style: { textTransform: "none" } }, /* @__PURE__ */ l.createElement(an.Target, null, /* @__PURE__ */ l.createElement(Ia, { display: "question" })), /* @__PURE__ */ l.createElement(an.Content, null, /* @__PURE__ */ l.createElement("p", { style: { padding: "0.5rem" } }, "Name of the query string parameter that will be appended to the URL above with the values provided below.")))), " ", /* @__PURE__ */ l.createElement(
      "input",
      {
        type: "text",
        defaultValue: O.queryParameter,
        onChange: (rn) => {
          let tn = [...o.filters];
          tn[V].queryParameter = rn.target.value, S({ ...o, filters: tn });
        }
      }
    )), /* @__PURE__ */ l.createElement("label", null, /* @__PURE__ */ l.createElement("span", { className: "edit-label column-heading" }, "Values"), " "), /* @__PURE__ */ l.createElement("ul", { className: "value-list" }, O.orderedValues && O.orderedValues.map((rn, tn) => /* @__PURE__ */ l.createElement("li", null, rn, /* @__PURE__ */ l.createElement(
      "input",
      {
        type: "text",
        placeholder: "Enter value display name here",
        value: O.labels ? O.labels[rn] : void 0,
        className: "url-value-label",
        onChange: (Wn) => {
          let Xn = [...o.filters];
          Xn[V].labels = Xn[V].labels || {}, Xn[V].labels[rn] = Wn.target.value, S({ ...o, filters: Xn });
        }
      }
    ), /* @__PURE__ */ l.createElement(
      "button",
      {
        onClick: () => {
          let Wn = [...o.filters];
          Wn[V].labels && delete Wn[V].labels[Wn[V].orderedValues[tn]], Wn[V].orderedValues.splice(tn, 1), S({ ...o, filters: Wn });
        }
      },
      "X"
    )))), /* @__PURE__ */ l.createElement(
      "form",
      {
        onSubmit: (rn) => {
          if (rn.preventDefault(), !o.filters[V].orderedValues || o.filters[V].orderedValues.indexOf(rn.target[0].value) === -1) {
            let tn = [...o.filters];
            tn[V].orderedValues = tn[V].orderedValues || [], tn[V].orderedValues.push(rn.target[0].value), tn[V].values = tn[V].orderedValues, tn[V].active || (tn[V].active = rn.target[0].value), rn.target[0].value = "", S({ ...o, filters: tn });
          }
        }
      },
      /* @__PURE__ */ l.createElement("input", { type: "text", placeholder: "Enter new value name here" }),
      " ",
      /* @__PURE__ */ l.createElement("button", { type: "submit", style: { marginTop: "1em" } }, "Add New Value")
    ))
  ), /* @__PURE__ */ l.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: () => {
        S({ ...o, filters: o.filters ? [...o.filters, { type: "url", key: Date.now() }] : [{ type: "url", key: Date.now() }] });
      }
    },
    "Add New URL Filter"
  )), Oe = !["Box Plot", "Scatter Plot", "Sankey"].includes(o == null ? void 0 : o.visualizationType);
  return /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("div", { className: "left-col" }, o.type === "dashboard" && Object.keys(o.datasets).length > 0 && /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("div", { className: "heading-3" }, "Data Sources"), /* @__PURE__ */ l.createElement("table", null, /* @__PURE__ */ l.createElement("thead", null, /* @__PURE__ */ l.createElement("tr", null, /* @__PURE__ */ l.createElement("th", null, "Name"), /* @__PURE__ */ l.createElement("th", null, "Size"), /* @__PURE__ */ l.createElement("th", null, "Type"), /* @__PURE__ */ l.createElement("th", { colSpan: 4 }, "Actions"))), /* @__PURE__ */ l.createElement("tbody", null, Object.keys(o.datasets).map(
    (O) => o.datasets[O].dataFileName && /* @__PURE__ */ l.createElement("tr", { key: `tr-${O}` }, /* @__PURE__ */ l.createElement("td", null, /* @__PURE__ */ l.createElement("input", { className: "dataset-name-input", type: "text", defaultValue: O, onBlur: (V) => ge(O, V.target.value) })), /* @__PURE__ */ l.createElement("td", null, Mn(o.datasets[O].dataFileSize)), /* @__PURE__ */ l.createElement("td", null, o.datasets[O].dataFileFormat), /* @__PURE__ */ l.createElement("td", null, /* @__PURE__ */ l.createElement("button", { className: "btn btn-primary", onClick: () => Se(O, "preview", !0) }, "Preview Data")), /* @__PURE__ */ l.createElement("td", null, /* @__PURE__ */ l.createElement(
      "button",
      {
        className: "btn btn-primary",
        onClick: () => {
          An === O ? (Cn(void 0), Tn(""), Rn(!1)) : (Cn(O), Tn(o.datasets[O].dataUrl || o.datasets[O].dataFileName), Rn(!!o.datasets[O].dataUrl));
        }
      },
      "Edit Data"
    )), /* @__PURE__ */ l.createElement("td", null, /* @__PURE__ */ l.createElement("button", { className: "btn btn-primary", onClick: () => Re(O) }, "X")))
  )))), (me == null ? void 0 : me.data) && /* @__PURE__ */ l.createElement(l.Fragment, null, o.type !== "dashboard" && /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("div", { className: "heading-3" }, "Data Source"), /* @__PURE__ */ l.createElement("div", { className: "file-loaded-area" }, (o.dataFileSourceType === "file" || !o.dataFileSourceType) && /* @__PURE__ */ l.createElement("div", { className: "data-source-options" }, /* @__PURE__ */ l.createElement("div", { className: Un ? "drag-active cdcdataviz-file-selector loaded-file" : "cdcdataviz-file-selector loaded-file", ...dn() }, /* @__PURE__ */ l.createElement("input", { ...Kn() }), Un ? /* @__PURE__ */ l.createElement("p", null, "Drop file here") : /* @__PURE__ */ l.createElement("p", null, /* @__PURE__ */ l.createElement(Ja, null), " ", /* @__PURE__ */ l.createElement("span", null, o.dataFileName ?? "Replace data file"))), /* @__PURE__ */ l.createElement("div", null, Te())), o.dataFileSourceType === "url" && /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("div", { className: "url-source-options" }, /* @__PURE__ */ l.createElement("div", null, Qn()), /* @__PURE__ */ l.createElement("div", null, Te())), o.dataUrl && (o.type === "chart" || o.type === "map") && Pe))), Oe && /* @__PURE__ */ l.createElement(xr, { visualizationKey: null, configureData: me, updateDescriptionProp: (O, V) => ae(me.dataFileName, O, V), config: o, setConfig: S })), (An || L) && // dataFileSourceType needs to be checked here since earlier versions did not track this state
  /* @__PURE__ */ l.createElement("div", { className: "load-data-area" }, /* @__PURE__ */ l.createElement("div", { className: "heading-3" }, An ? `Editing ${An}` : "Add Dataset"), /* @__PURE__ */ l.createElement(ku, { startingTab: An && o.datasets[An].dataFileSourceType === "url" ? 1 : 0 }, /* @__PURE__ */ l.createElement(jt, { title: "Upload File", icon: /* @__PURE__ */ l.createElement(Ja, { className: "inline-icon" }) }, C && /* @__PURE__ */ l.createElement("p", { className: "alert--info" }, "The share path set for this website is: ", C), /* @__PURE__ */ l.createElement("div", { className: en ? "drag-active cdcdataviz-file-selector" : "cdcdataviz-file-selector", ...de() }, /* @__PURE__ */ l.createElement("input", { ...ne() }), en ? /* @__PURE__ */ l.createElement("p", null, "Drop file here") : /* @__PURE__ */ l.createElement("p", null, "Drag file to this area, or ", /* @__PURE__ */ l.createElement("span", null, "select a file"), ".")), /* @__PURE__ */ l.createElement("p", { className: "footnote" }, "Supported file types: ", Object.keys(Gn).join(", "), ". Maximum file size ", La, "MB.")), /* @__PURE__ */ l.createElement(jt, { title: "Load from URL", icon: /* @__PURE__ */ l.createElement(Vu, { className: "inline-icon" }) }, Qn())), g && (Array.isArray(g) ? g.map((O, V) => /* @__PURE__ */ l.createElement("div", { className: "error-box slim mt-2", key: `error-${O}` }, /* @__PURE__ */ l.createElement("span", null, O), " ", /* @__PURE__ */ l.createElement(Ra, { className: "inline-icon dismiss-error", onClick: () => b(g.filter((rn, tn) => tn !== V)) }))) : g.message), /* @__PURE__ */ l.createElement(Eo.Provider, { value: { loadData: Nn, editingDataset: An, config: o } }, /* @__PURE__ */ l.createElement(Na.Buttons, null))), o.type === "dashboard" && !L && /* @__PURE__ */ l.createElement("p", null, /* @__PURE__ */ l.createElement("button", { className: "btn btn-primary", onClick: () => un(!0) }, "+ Add More Files")), re && /* @__PURE__ */ l.createElement("p", null, /* @__PURE__ */ l.createElement("button", { className: "btn btn-primary", onClick: () => gn({ type: "EDITOR_SET_GLOBALACTIVE", payload: 2 }) }, "Configure your visualization")), /* @__PURE__ */ l.createElement("a", { href: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/data-map.html", target: "_blank", rel: "noopener noreferrer", className: "guidance-link" }, /* @__PURE__ */ l.createElement("div", null, /* @__PURE__ */ l.createElement("h3", null, "Get Help"), /* @__PURE__ */ l.createElement("p", null, "Documentation and examples on formatting data and configuring visualizations.")))), /* @__PURE__ */ l.createElement("div", { className: "right-col" }, /* @__PURE__ */ l.createElement(Yu, null)));
}
const si = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIGZpbGw9ImN1cnJlbnRDb2xvciI+CiAgICA8cGF0aCBkPSJNNDg5LjMsMzc3LjhIODAuMXYtMjg4YzAtOC40LTYuOC0xNS4yLTE1LjItMTUuMkgzNC43Yy04LjQsMC0xNS4yLDYuOC0xNS4yLDE1LjJ2MzE4LjNjMCwxNi43LDEzLjYsMzAuMywzMC4zLDMwLjNoNDM5LjUKCWM4LjQsMCwxNS4yLTYuOCwxNS4yLTE1LjJ2LTMwLjNDNTA0LjUsMzg0LjYsNDk3LjcsMzc3LjgsNDg5LjMsMzc3Ljh6Ii8+CiAgICA8cGF0aCBkPSJNNDU5LDEwNUgzNDcuMmMtMjAuMywwLTMwLjQsMjQuNS0xNi4xLDM4LjhsMzAuNywzMC43TDI5Mi4zLDI0NGwtNjkuNS02OS41Yy0xMS44LTExLjgtMzEtMTEuOC00Mi45LDBsLTY1LjEsNjUuMQoJYy01LjksNS45LTUuOSwxNS41LDAsMjEuNGwyMS40LDIxLjRjNS45LDUuOSwxNS41LDUuOSwyMS40LDBsNDMuNi00My42bDY5LjUsNjkuNWMxMS44LDExLjgsMzEsMTEuOCw0Mi45LDBsOTAuOS05MC45bDMwLjcsMzAuNwoJYzE0LjMsMTQuMywzOC44LDQuMiwzOC44LTE2LjFWMTIwLjFDNDc0LjIsMTExLjcsNDY3LjQsMTA1LDQ1OSwxMDV6Ii8+CiAgICA8cGF0aCBkPSJNOTkxLjIsMjgwLjVoLTE4OGwxMjUuMiwxMjUuMmM0LjgsNC44LDEyLjcsNS4yLDE3LjYsMC41YzMwLjctMjguOSw1MS44LTY3LjgsNTcuOS0xMTEuNgoJQzEwMDUsMjg3LjIsOTk4LjgsMjgwLjUsOTkxLjIsMjgwLjVMOTkxLjIsMjgwLjV6Ii8+CiAgICA8cGF0aCBkPSJNOTc4LjcsMjI5LjJjLTYuNS05NC42LTgyLjItMTcwLjMtMTc2LjgtMTc2LjhjLTcuMi0wLjUtMTMuMyw1LjYtMTMuMywxMi44djE3Ny4zaDE3Ny4zCglDOTczLjEsMjQyLjUsOTc5LjIsMjM2LjQsOTc4LjcsMjI5LjJMOTc4LjcsMjI5LjJ6Ii8+CiAgICA8cGF0aCBkPSJNNzUwLjUsMjgwLjV2LTE4OGMwLTcuNi02LjYtMTMuOC0xNC4xLTEyLjdDNjQyLDkzLjEsNTY5LjgsMTc1LjYsNTczLjIsMjc0LjVDNTc2LjYsMzc2LDY2NCw0NTkuMyw3NjUuNiw0NTgKCWMzOS45LTAuNSw3Ni44LTEzLjQsMTA3LjItMzQuOWM2LjMtNC40LDYuNy0xMy43LDEuMi0xOS4xTDc1MC41LDI4MC41eiIvPgogICAgPHBhdGggZD0iTTEzMC43LDU1OGwxLjEsNy4ybDUuNSwxMS42bC0yLjgsMTIuMWwtNi4xLTcuN2wtMy45LTguOGwtOC44LTEuN0wxMDIsNTY5aC0zLjlsMi4yLDcuN2w3LjcsMTF2MTFsMi4yLDEyLjFsOS45LDEuMQoJbDMuOSw1LjVsLTEyLjEtMS43bC0zLjksMi44bDEuNywxMS42bC0yLjIsMTIuN2wwLjUsMTQuOWwtMy45LDkuOWwtNC40LDE0LjNsMy4zLDkuOWwyLjIsMTIuN2wxLjcsOS40bC0yLjIsMTIuN2wxLjcsOC44bDMuOSw4LjgKCWwzLjMsMTFsMi44LDcuMkwxMjgsNzcybDUuNS0wLjZsNy43LDEuMWwtOC4zLDIuMmwyLjIsMy45bC03LjIsMS4xbDYuNiw3LjJsNi42LDcuMmwtMi4yLDYuMWw4LjgsMTIuN2w5LjQsNy43bDEuMSw5LjRsNy43LDMuOQoJbDEwLjUsMy4zbDguMyw3LjJsNy4yLDQuNGw3LjcsNi4xbDQuNCwzLjNsNSwxMWwyOC4xLTAuNmw1NS4yLDE5LjNoNDUuOGwtMS4xLTQuNGgyMi4xbDguOCw1bDUsNWwxMi43LDguOGw0LjQsMTZsMTIuNyw2LjZsNy43LDMuMwoJbDEwLjUtMTIuN2wxMy44LDEuN2w1LjUsNC40bDE0LjksMjQuM2w1LDYuMWwzLjksMTMuOGwyOS4yLDExLjZsLTEuMS05LjlsLTEuMS0xMy44bDkuNC0xMWwtMS43LTMuM2w5LjQtNy43bDUsMi44bDguMy05LjRsNS02LjYKCWg3LjJsMTYtMy4zbDExLjYsNWg4LjhsMy4zLTMuOWwzLjksMi44bDAuNiw1bDExLjYsMy45bDExLTEuN2w5LjQsMC42bC03LjctNi4xbC0wLjYtMy4zbDUtMi44bC0wLjUtMi44SDU5OGwtOC44LDEuMWw1LjUtNQoJbDIuOC0zLjNsMi44LDIuOGwxNi0yLjJsMi4yLDIuOGgxMWw2LjEtMS43bDguOC0wLjVsOC4zLDMuM2w1LTAuNmw1LDcuMmw5LjksMC41bDUuNS00LjRoNS41bDExLDkuNGw2LjEsNi42bDEuNyw4LjhsLTEuMSwxMQoJbDMuOSwxMS42bDEwLjUsMTMuMmw2LjEsMTIuN2wyLjIsNWwxMS0yLjJsMi44LTEyLjF2LTE4LjJsLTUuNS0xNC45bC0xLjctMy45bC0xLjEtMTFsLTkuNC0xMWwtMS43LTEzLjJsMC41LTExbDQuNC0xMi4xbDguMy02LjYKCWwtMC42LTVsOS45LTEuN2wxNC4zLTE2bDYuNi01LjVsNy4yLDEuMWw2LjYtMTIuN2w5LjQtNWMwLDAsNy4yLDEuMSw3LjctMS43YzAuNS0yLjgsNy43LTE2LDcuNy0xNmwtNy43LTQuNGw0LjQtMy45bDEuMS0yLjgKCWwtNC40LTExbC00LjQtNWw1LjUtNi4xbC00LjQtNS41bC0xLjEtMTFsLTAuNi05LjRsMy4zLTIuOGwyLjIsMTMuOGwxLjcsNi42bDMuOSw2LjFsLTEuMSw5LjlsNi4xLTEyLjFsMy45LTkuNGwwLjYtNS41bC01LjUtNi42CglsLTAuNi0yLjhsMS43LTEuN2w4LjgsNS41bDIuOC02LjZsNi4xLTYuMWwxLjEtNi42bC0xLjEtNy43bDAuNS0zLjlsMS4xLTUuNWw0LjQsNi4xaDIuMmw2LjYtMS4xbDYuNi0wLjZsOC44LTIuOGwtMS43LTMuMwoJbC04LjgsMC42bC04LjMsMi4ybC0zLjksMi4ybC0wLjYtMy45bDIuOC0zLjNsNy4yLTEuN2w4LjgtMS43bDYuMS0xLjdsNS0zLjNsMTEuNiwyLjhjMCwwLDUsMi44LDUuNSwxLjFjMC42LTEuNywyLjItNi4xLDIuMi02LjEKCWwtMy45LTQuNGwtMS43LTYuNmwxLjEtMTFsMS4xLTguOGw1LTYuNmwxLjEtMi44bDMuMywxLjdsMTAuNS0xMS42aDMuOWw4LjgtMS4xbDIuOC01LjVoNy43bDYuNi01LjVsLTIuNS0zbC0zLTcuNGwtMy4zLTIuNQoJbDEuNC0xOC41bC0xLjctMTYuOGwtOS45LTNsLTguNiwzbC00LjctMC42bC0xOSw0NC40bC04LjgsMC42bC0zLjksMy4zbC00Ni45LTAuM2wtMTEuNiwxMC44bC03LjIsNC40bC0zLjMsOS40bC0xLjcsNWwtOC4zLDUuNQoJSDc3NGwtNi4xLTIuOGwtNy43LDEuMWwtOS45LDMuM2wwLjYsNWwtMC42LDguOGwtNSw0LjRsLTkuOSwyLjJsLTE1LjQsNy43bC0xMS42LDMuOWwtMTEsMC42bC02LjYtNWwzLjMtNi4xbDEuNy0xLjdsMi4yLTYuMQoJbDQuMS0yLjVsNS4yLTkuMWwtNS41LTcuMmwtMS4xLTExLjZsLTcuMi0yLjJsLTkuNCw2LjZsMy4zLTcuN2w1LjUtNy43bC0yLjItNy4ybC0xLjctOC4zbC04LjgtMy4zbC03LjctNi42bC05LjQsMy45bDAuNiw3LjIKCWwtNS41LDYuNmwtNC40LTIuMmwtOC4zLDkuNHYxMWwxLjEsMTFsNSw3LjdsLTAuNiwxNi42bC0xMC41LDkuOWwtNy43LDAuNmwtMy45LTExLjZsLTMuOS04LjNsMS43LTExbC0xLjctMTFsMy45LTcuMmwyLjItNy4yCglsMy45LTEyLjFsLTguOCw5LjlsNS0xNy4xbDcuNy02LjZsOS40LTAuNmw3LjItMy4zSDY2N2g5LjRsNi4xLTEuN2w3LjIsMS4xbDMuMyw1LjVsMTMuOCw1bDIuOC03LjdsLTkuNCwxLjFsLTYuMS0wLjZsLTguOC02LjYKCWwtNS41LTMuM2wtNi4zLTQuN2wtNi4zLDEuOWwtNi4xLTQuNGwtMTQuMywwLjZsLTcuNyw1bC02LjEtMy45bC03LjItNC40bC0xMC41LTAuNmwxMC41LTE0LjlsLTEyLjEsNS41bC05LjksNy43bC05LjksNS41CglsLTguOCwxLjFsLTEuMS01LjVsLTE4LjIsMy45bDE1LjMtMTMuNGwxMC44LTcuOWwxMy40LTEwLjVsLTUuNS0wLjhsLTE4LjIsMC42bC04LjMtMS43bC03LjQtMS4yTDU1OCw1NjRsLTguMywwLjZsLTE1LjctMy45CglsLTQuMS01bC0yLjItNy43bC0zLjktMy42bDAuMyw0LjFsLTMuOSw2LjFsLTM4Ny4zLDAuM0wxMzAuNyw1NThMMTMwLjcsNTU4eiIvPgo8L3N2Zz4K", yi = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5OS4xIDc5LjciIGZpbGw9ImN1cnJlbnRDb2xvciI+CiAgICA8cGF0aCBkPSJNOTEsMTguN0g2MmMtMC42LDAtMSwwLjQtMSwxdjZjMCwwLjYsMC40LDEsMSwxaDI5YzAuNiwwLDEtMC40LDEtMXYtNkM5MiwxOS4xLDkxLjYsMTguNyw5MSwxOC43eiBNODkuNCwyNC43SDYzLjYKCWMtMC4zLDAtMC42LTAuMi0wLjYtMC42di0yLjljMC0wLjMsMC4yLTAuNiwwLjYtMC42aDI1LjljMC4zLDAsMC42LDAuMiwwLjYsMC42djIuOUM5MCwyNC40LDg5LjgsMjQuNyw4OS40LDI0Ljd6Ii8+CiAgICA8cGF0aCBkPSJNNzUsMzAuN0g2M2MtMC42LDAtMSwwLjQtMSwxdjZjMCwwLjYsMC40LDEsMSwxaDEyYzAuNiwwLDEtMC40LDEtMXYtNkM3NiwzMS4xLDc1LjYsMzAuNyw3NSwzMC43eiBNNzMuNywzNi43aC05LjMKCWMtMC4yLDAtMC4zLTAuMi0wLjMtMC4zVjMzYzAtMC4yLDAuMi0wLjMsMC4zLTAuM2g5LjNjMC4yLDAsMC4zLDAuMiwwLjMsMC4zdjMuM0M3NCwzNi41LDczLjgsMzYuNyw3My43LDM2Ljd6Ii8+CiAgICA8cGF0aCBkPSJNODEsNDMuN0g2M2MtMC42LDAtMSwwLjQtMSwxdjZjMCwwLjYsMC40LDEsMSwxaDE4YzAuNiwwLDEtMC40LDEtMXYtNkM4Miw0NC4xLDgxLjYsNDMuNyw4MSw0My43eiBNNzkuNiw0OS43SDY0LjQKCWMtMC4yLDAtMC40LTAuMi0wLjQtMC40di0zLjFjMC0wLjIsMC4yLTAuNCwwLjQtMC40aDE1LjFjMC4yLDAsMC40LDAuMiwwLjQsMC40djMuMUM4MCw0OS41LDc5LjgsNDkuNyw3OS42LDQ5Ljd6Ii8+CiAgICA8cGF0aCBkPSJNNDcsMTIuN2g2YzAuNiwwLDEsMC40LDEsMXY1MmMwLDAuNi0wLjQsMS0xLDFoLTZjLTAuNiwwLTEtMC40LTEtMXYtNTJDNDYsMTMuMSw0Ni40LDEyLjcsNDcsMTIuN3oiLz4KICAgIDxwYXRoIGQ9Ik0zOSwxOS43djZjMCwwLjYtMC40LDEtMSwxSDE3Yy0wLjYsMC0xLTAuNC0xLTF2LTZjMC0wLjYsMC40LTEsMS0xaDIxQzM4LjYsMTguNywzOSwxOS4xLDM5LDE5Ljd6Ii8+CiAgICA8cGF0aCBkPSJNMzksMzEuN3Y2YzAsMC42LTAuNCwxLTEsMUg4Yy0wLjYsMC0xLTAuNC0xLTF2LTZjMC0wLjYsMC40LTEsMS0xaDMwQzM4LjYsMzAuNywzOSwzMS4xLDM5LDMxLjd6Ii8+CiAgICA8cGF0aCBkPSJNMzksNDQuN3Y2YzAsMC42LTAuNCwxLTEsMUgyMGMtMC42LDAtMS0wLjQtMS0xdi02YzAtMC42LDAuNC0xLDEtMWgxOEMzOC42LDQzLjcsMzksNDQuMSwzOSw0NC43eiIvPgogICAgPHBhdGggZD0iTTM5LDU3Ljd2NmMwLDAuNi0wLjQsMS0xLDFIMjVjLTAuNiwwLTEtMC40LTEtMXYtNmMwLTAuNiwwLjQtMSwxLTFoMTNDMzguNiw1Ni43LDM5LDU3LjEsMzksNTcuN3oiLz4KICAgIDxwYXRoIGQ9Ik03OSw1Ni43SDYzYy0wLjYsMC0xLDAuNC0xLDF2NmMwLDAuNiwwLjQsMSwxLDFoMTZjMC42LDAsMS0wLjQsMS0xdi02QzgwLDU3LjEsNzkuNiw1Ni43LDc5LDU2Ljd6IE03Ny42LDYyLjdINjQuNAoJYy0wLjIsMC0wLjQtMC4yLTAuNC0wLjR2LTMuMmMwLTAuMiwwLjItMC40LDAuNC0wLjRoMTMuMmMwLjIsMCwwLjQsMC4yLDAuNCwwLjR2My4yQzc4LDYyLjUsNzcuOCw2Mi43LDc3LjYsNjIuN3oiLz4KPC9zdmc+Cg==", ci = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5Ni4zIDgyLjYiIGZpbGw9ImN1cnJlbnRDb2xvciI+CiAgICA8cGF0aCBkPSJNODMuOSw2MS40aC02NFYxMi4xYzAtMS4xLTAuOS0yLTItMmgtNS41Yy0xLjEsMC0yLDAuOS0yLDJ2NTYuN2MwLDEuMSwwLjksMiwyLDJoNzEuNWMxLjEsMCwyLTAuOSwyLTJ2LTUuNQoJQzg1LjksNjIuMyw4NSw2MS40LDgzLjksNjEuNHoiLz4KICAgIDxwYXRoIGQ9Ik02Ny4xLDQ3LjNIMjYuOGMtMS4xLDAtMiwwLjktMiwydjYuMWMwLDEuMSwwLjksMiwyLDJoNDAuM2MxLjEsMCwyLTAuOSwyLTJ2LTYuMUM2OS4xLDQ4LjIsNjguMiw0Ny4zLDY3LjEsNDcuM0w2Ny4xLDQ3LjN6CgkgTTUyLDU0LjZIMzguMmMtMC43LDAtMS4zLTAuNC0xLjMtMVY1MWMwLTAuNSwwLjYtMSwxLjMtMUg1MmMwLjcsMCwxLjMsMC40LDEuMywxdjIuNkM1My4zLDU0LjEsNTIuOCw1NC42LDUyLDU0LjZ6Ii8+CiAgICA8cGF0aCBkPSJNODMuOSwzMS43SDI2LjhjLTEuMSwwLTIsMC45LTIsMnY2LjFjMCwxLjEsMC45LDIsMiwyaDU3LjJjMS4xLDAsMi0wLjksMi0ydi02LjFDODUuOSwzMi42LDg1LDMxLjcsODMuOSwzMS43eiBNNjguOCwzOQoJSDQ1LjJjLTAuNywwLTEuMy0wLjQtMS4zLTF2LTIuNmMwLTAuNSwwLjYtMSwxLjMtMWgyMy43YzAuNywwLDEuMywwLjQsMS4zLDFWMzhDNzAuMiwzOC41LDY5LjYsMzksNjguOCwzOXoiLz4KICAgIDxwYXRoIGQ9Ik03NywxNi4xSDI2LjhjLTEuMSwwLTIsMC45LTIsMnY2LjFjMCwxLjEsMC45LDIsMiwySDc3YzEuMSwwLDItMC45LDItMnYtNi4xQzc5LDE3LDc4LjEsMTYuMSw3NywxNi4xeiBNNTguOSwyMy40SDM2LjYKCWMtMC43LDAtMS4zLTAuNC0xLjMtMXYtMi42YzAtMC41LDAuNi0xLDEuMy0xaDIyLjNjMC43LDAsMS4zLDAuNCwxLjMsMXYyLjZDNjAuMiwyMyw1OS42LDIzLjQsNTguOSwyMy40eiIvPgo8L3N2Zz4K", Ci = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJhIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5Ni4zMSA4Mi41NSI+PHBhdGggZD0iTTg4LjQ5LDY1LjY1SDE1LjI5VjkuMDRjMC0xLjEtLjktMi0yLTJINy44MmMtMS4xLDAtMiwuOS0yLDJWNzMuMTNjMCwxLjEsLjksMiwyLDJIODguNDljMS4xLDAsMi0uOSwyLTJ2LTUuNDhjMC0xLjEtLjktMi0yLTJaIi8+PGc+PHBhdGggZD0iTTMwLjIyLDQ5LjE5Yy0xLjc5LDAtMy4yNCwxLjQ1LTMuMjQsMy4yNHMxLjQ1LDMuMjQsMy4yNCwzLjI0LDMuMjQtMS40NSwzLjI0LTMuMjQtMS40NS0zLjI0LTMuMjQtMy4yNFoiLz48cGF0aCBkPSJNMzMuMDYsMzUuNTljLTEuNzksMC0zLjI0LDEuNDUtMy4yNCwzLjI0czEuNDUsMy4yNCwzLjI0LDMuMjQsMy4yNC0xLjQ1LDMuMjQtMy4yNC0xLjQ1LTMuMjQtMy4yNC0zLjI0WiIvPjxwYXRoIGQ9Ik00OC4xMiwzNy44M2MtMS43OSwwLTMuMjQsMS40NS0zLjI0LDMuMjRzMS40NSwzLjI0LDMuMjQsMy4yNCwzLjI0LTEuNDUsMy4yNC0zLjI0LTEuNDUtMy4yNC0zLjI0LTMuMjRaIi8+PGNpcmNsZSBjeD0iNDkuNjQiIGN5PSIyMi43MyIgcj0iMy4yNCIvPjxwYXRoIGQ9Ik02NC41MywxOS40OWMtMS43OSwwLTMuMjQsMS40NS0zLjI0LDMuMjRzMS40NSwzLjI0LDMuMjQsMy4yNCwzLjI0LTEuNDUsMy4yNC0zLjI0LTEuNDUtMy4yNC0zLjI0LTMuMjRaIi8+PHBhdGggZD0iTTU3Ljk1LDMxLjExYy0xLjc5LDAtMy4yNCwxLjQ1LTMuMjQsMy4yNHMxLjQ1LDMuMjQsMy4yNCwzLjI0LDMuMjQtMS40NSwzLjI0LTMuMjQtMS40NS0zLjI0LTMuMjQtMy4yNFoiLz48cGF0aCBkPSJNNzQuNTMsMTEuNTRjLTEuNzksMC0zLjI0LDEuNDUtMy4yNCwzLjI0czEuNDUsMy4yNCwzLjI0LDMuMjQsMy4yNC0xLjQ1LDMuMjQtMy4yNC0xLjQ1LTMuMjQtMy4yNC0zLjI0WiIvPjwvZz48L3N2Zz4=", di = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJhIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5Ni4zMSA4Mi41NSI+PHBhdGggZD0iTTU0LjY4LDI5LjE0aC00LjFWOC40M2gyLjY4Yy41LDAsLjktLjE1LDEuMTktLjQ2LC40Ni0uNDgsLjQ0LTEuMTEsLjQyLTEuNjIsMC0uMTEsMC0uMjIsMC0uMzRzMC0uMjQsMC0uMzRjLjAyLS41LC4wNS0xLjEzLS40Mi0xLjYyLS4yOS0uMy0uNjktLjQ2LTEuMTktLjQ2aC0xMC4yYy0uNSwwLS45LC4xNS0xLjE5LC40Ni0uNDcsLjQ4LS40NCwxLjExLS40MiwxLjYyLDAsLjExLDAsLjIzLDAsLjM0czAsLjIzLDAsLjM0Yy0uMDIsLjUtLjA1LDEuMTMsLjQyLDEuNjIsLjI5LC4zLC42OSwuNDYsMS4xOSwuNDZoMi42OFYyOS4xNGgtNC4xYy0xLjMzLDAtMi40MiwxLjA5LTIuNDIsMi40MnYzMS4zMWMwLDEuMzMsMS4wOSwyLjQyLDIuNDIsMi40Mmg0LjF2Ny45N2gtMi42OGMtLjUsMC0uOSwuMTUtMS4xOSwuNDYtLjQ2LC40OC0uNDQsMS4xMS0uNDIsMS42MiwwLC4xMSwwLC4yMiwwLC4zNHMwLC4yNCwwLC4zNGMtLjAyLC41LS4wNSwxLjEzLC40MiwxLjYyLC4yOSwuMywuNjksLjQ2LDEuMTksLjQ2aDEwLjJjLjUsMCwuOS0uMTUsMS4xOS0uNDYsLjQ3LS40OCwuNDQtMS4xMSwuNDItMS42MiwwLS4xMSwwLS4yMywwLS4zNHMwLS4yMywwLS4zNGMuMDItLjUsLjA1LTEuMTMtLjQyLTEuNjItLjI5LS4zLS42OS0uNDYtMS4xOS0uNDZoLTIuNjh2LTcuOTdoNC4xYzEuMzMsMCwyLjQyLTEuMDksMi40Mi0yLjQyVjMxLjU2YzAtMS4zMy0xLjA5LTIuNDItMi40Mi0yLjQyWm0tMi40MiwyMC41djEwLjgxaC04LjJ2LTEwLjgxaDguMlptLTguMi00Ljg0di0xMC44MWg4LjJ2MTAuODFoLTguMloiLz48L3N2Zz4=", gi = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJhIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5Ni4zMSA4Mi41NSI+PHBhdGggZD0iTTg4LjQ5LDY1LjY1SDE1LjI5VjkuMDRjMC0xLjEtLjktMi0yLTJINy44MmMtMS4xLDAtMiwuOS0yLDJWNzMuMTNjMCwxLjEsLjksMiwyLDJIODguNDljMS4xLDAsMi0uOSwyLTJ2LTUuNDhjMC0xLjEtLjktMi0yLTJaIi8+PHBhdGggZD0iTTg3LjkxLDYwLjY1Yy0uMDItLjEyLTIuNDYtMTIuNjMtNS41My0yNC45Ny01Ljk3LTIzLjk5LTguOC0yNi0xMC45OS0yNi0yLjU0LDAtNC4xNywzLjU1LTcuOTIsMTIuMzEtLjY3LDEuNTYtMS40LDMuMjctMi4xOCw1LjAyLTEuNjYtNC4xNC0zLjE0LTUuOS00Ljg0LTUuOS0yLjM5LDAtNC4wNSwzLjQyLTcuMDcsOS42NC01LjU2LDExLjQ0LTEzLjk3LDI4LjcyLTI5LjEyLDI4LjcyLS44LDAtMS40NiwuNjUtMS40NiwxLjQ1cy42NSwxLjQ1LDEuNDYsMS40NUg4Ni40OGMuNDMsMCwuODUtLjE5LDEuMTItLjUzLC4yOC0uMzQsLjM5LS43OCwuMzEtMS4yWm0tNDYuODgtMS4yNWM4LjkzLTQuOTIsMTUuMy0xNS4zLDE5LjgzLTI0LjU0LDIuNjIsOC44OCw0Ljk3LDIwLjI4LDUuODMsMjQuNThsLTI1LjY2LS4wNFoiLz48L3N2Zz4=", fi = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJhIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5Ni4zMSA4Mi41NSI+PHBhdGggZD0iTTE4LjI5LDM5LjU3YzAtMS4wMywuMjMtMS43OSwuNjgtMi4yOCwuNDUtLjQ5LDEuMDYtLjc0LDEuODMtLjc0czEuNDIsLjI1LDEuODcsLjc0Yy40NSwuNDksLjY4LDEuMjUsLjY4LDIuMjlzLS4yMywxLjc5LS42OCwyLjI4Yy0uNDUsLjUtMS4wNiwuNzQtMS44MywuNzRzLTEuNDItLjI1LTEuODctLjc0Yy0uNDUtLjQ5LS42OC0xLjI1LS42OC0yLjI5Wm0xLjcxLS4wMmMwLC43NSwuMDksMS4yNSwuMjYsMS41LC4xMywuMTksLjMxLC4yOCwuNTQsLjI4cy40Mi0uMDksLjU1LS4yOGMuMTctLjI1LC4yNS0uNzUsLjI1LTEuNXMtLjA4LTEuMjQtLjI1LTEuNDljLS4xMy0uMTktLjMxLS4yOS0uNTUtLjI5cy0uNDEsLjA5LS41NCwuMjhjLS4xNywuMjYtLjI2LC43Ni0uMjYsMS41Wm0yLjQ3LDkuMDhoLTEuNjJsNi4xLTEyLjA5aDEuNThsLTYuMDUsMTIuMDlabTMuNTUtMy4wMWMwLTEuMDMsLjIzLTEuNzksLjY4LTIuMjgsLjQ1LS40OSwxLjA3LS43NCwxLjg1LS43NHMxLjQsLjI1LDEuODYsLjc0Yy40NSwuNSwuNjgsMS4yNiwuNjgsMi4yOHMtLjIzLDEuNzktLjY4LDIuMjljLS40NSwuNDktMS4wNiwuNzQtMS44MywuNzRzLTEuNDItLjI1LTEuODctLjc0Yy0uNDUtLjQ5LS42OC0xLjI2LS42OC0yLjI5Wm0xLjcxLDBjMCwuNzUsLjA5LDEuMjQsLjI2LDEuNDksLjEzLC4xOSwuMzEsLjI5LC41NCwuMjlzLjQxLS4wOSwuNTQtLjI4Yy4xNy0uMjUsLjI2LS43NSwuMjYtMS41cy0uMDgtMS4yNC0uMjUtMS41Yy0uMTMtLjE5LS4zMS0uMjgtLjU1LS4yOHMtLjQxLC4wOS0uNTQsLjI4Yy0uMTcsLjI2LS4yNiwuNzYtLjI2LDEuNVoiLz48cGF0aCBkPSJNOTIuMzMsNTIuODN2LTIwLjQyYzAtMS42MS0xLjMxLTIuOTMtMi45My0yLjkzSDYuNjVjLTEuNjEsMC0yLjkzLDEuMzEtMi45MywyLjkzdjIwLjQyYzAsMS42MSwxLjMxLDIuOTMsMi45MywyLjkzSDg5LjRjMS42MSwwLDIuOTMtMS4zMSwyLjkzLTIuOTNabS01Mi4zNC0yLjkzSDkuNTh2LTE0LjU2aDMwLjQxdjE0LjU2Wm01Ljg2LTE0LjU2aDQwLjYzdjE0LjU2SDQ1Ljg1di0xNC41NloiLz48L3N2Zz4=", pi = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJhIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5Ni4zMSA4Mi41NSI+PHBhdGggZD0iTTg5LjU2LDY1LjQxSDE2LjM2VjguOGMwLTEuMS0uOS0yLTItMmgtNS40OGMtMS4xLDAtMiwuOS0yLDJWNzIuODljMCwxLjEsLjksMiwyLDJIODkuNTZjMS4xLDAsMi0uOSwyLTJ2LTUuNDhjMC0xLjEtLjktMi0yLTJaIi8+PHBhdGggZD0iTTU0LjY2LDU1LjM0Yy0xNy43NiwwLTMzLjQ2LTE3LjgtMzQuMTItMTguNTZsLS45OC0xLjEzdi00LjU1bDMuMjUsMy43MmMuMTUsLjE4LDE1LjQ3LDE3LjUzLDMxLjg2LDE3LjUzaDBjNy4zMSwwLDEyLjM3LTEuNjgsMTcuMjctMy4zLDQuMzEtMS40Miw4Ljc3LTIuOSwxNC40NC0zLjA1bDEuNS0uMDR2M2wtMS40MiwuMDRjLTUuMjQsLjE0LTkuMjksMS40OC0xMy41OSwyLjktNS4xMywxLjY5LTEwLjQzLDMuNDUtMTguMjIsMy40NWgwWiIvPjxwYXRoIGQ9Ik04Ny44NCw1OS4wNGMtNC43My0xLjI0LTcuNDEtMS42Ni0xMy4wNS0xLjkzLTIuODItLjE0LTUuMjIsLjE2LTgsLjUtMi43MywuMzMtNS44MSwuNzEtMTAuMDYsLjc5LTEzLjEzLC4yNy0yMy43Ny00LjYzLTM3LjE3LTE3LjMxdi0xLjU3YzEzLjE5LDEyLjQ4LDI0LjMxLDE4LjEzLDM3LjE1LDE3Ljg4LDQuMi0uMDgsNy4yNi0uNDYsOS45Ni0uNzksMi44My0uMzQsNS4yNy0uNjQsOC4xNy0uNSw1LjczLC4yOCw4LjIsLjYyLDEzLDEuODh2MS4wNVoiLz48cGF0aCBkPSJNNTcuMDIsNDkuMjhjLTE5LjU1LDAtMzAuOTEtMTQuNjUtMzcuNjktMjMuNDF2LTEuNTRjNi42Nyw4LjYxLDE4LjY0LDIzLjk1LDM3LjY5LDIzLjk1LDUuODcsMCwxNC4xMS0zLjIzLDE4LjM5LTYuMjMsMi40My0xLjcsMy44NC0yLjc3LDQuODctMy41NSwyLjI0LTEuNywyLjctMi4wNSw3LjcxLTQuNDRsLS4wMywxLjEyYy00LjkyLDIuMzQtNC45MSwyLjQ3LTcuMDgsNC4xMi0xLjA0LC43OS0yLjQ1LDEuODYtNC45LDMuNTctNC40LDMuMDgtMTIuOSw2LjQxLTE4Ljk2LDYuNDFaIi8+PC9zdmc+", mi = "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5OS4xIDc5LjY5Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzIzMWYyMDt9PC9zdHlsZT48L2RlZnM+PHJlY3QgY2xhc3M9ImNscy0xIiB4PSI0Ni44NyIgeT0iNS43OSIgd2lkdGg9IjguMzIiIGhlaWdodD0iNjcuNzkiIHJ4PSIxIi8+PHJlY3QgY2xhc3M9ImNscy0xIiB4PSIyMy45OCIgeT0iMTcuNjUiIHdpZHRoPSI4LjMyIiBoZWlnaHQ9IjIzLjMxIiByeD0iMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTcuNDQgMS4xNikgcm90YXRlKDkwKSIvPjxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iMTkuNTMiIHk9IjI1Ljk5IiB3aWR0aD0iOC4zMiIgaGVpZ2h0PSIzMi4yMSIgcng9IjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDY1Ljc5IDE4LjQxKSByb3RhdGUoOTApIi8+PHJlY3QgY2xhc3M9ImNscy0xIiB4PSIyNy4zMyIgeT0iNjAuNCIgd2lkdGg9IjguMzIiIGhlaWdodD0iMTQuNiIgcng9IjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk5LjE5IDM2LjIpIHJvdGF0ZSg5MCkiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik04MSw1Mi43NHY0LjMySDY0LjU1VjUyLjc0SDgxbTEtMkg2My41NWExLDEsMCwwLDAtMSwxdjYuMzJhMSwxLDAsMCwwLDEsMUg4MmExLDEsMCwwLDAsMS0xVjUxLjc0YTEsMSwwLDAsMC0xLTFaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNOTAsMTQuNDF2NC4zM0g2NC41NVYxNC40MUg5MG0xLTJINjMuNTVhMSwxLDAsMCwwLTEsMXY2LjMzYTEsMSwwLDAsMCwxLDFIOTFhMSwxLDAsMCwwLDEtMVYxMy40MWExLDEsMCwwLDAtMS0xWiIvPjwvc3ZnPg==";
function Mi() {
  const { config: o, tempConfig: g } = Y.useContext(yt), y = Y.useContext(Pt);
  Y.useEffect(() => {
    g && y({ type: "EDITOR_SAVE", payload: g });
  }, []);
  const C = ({ icon: S, label: b, type: c, subType: k = void 0, orientation: Tn = void 0, stacked: w = !1, generalType: Rn = "data" }) => {
    let L = !1, un = !1, An;
    if (c === "map" && o.general) {
      let gn = o.general.geoType;
      L = k === gn;
    }
    c === "chart" && (L = k === o.visualizationType, un = Tn === o.orientation && w === !0), (c === "dashboard" || c === "data-bite" || c === "markup-include") && (L = !0), c === "chart" && w ? An = o.type === c && L && o.visualizationSubType === "stacked" ? "active" : "" : c === "chart" && !w && o.visualizationSubType !== "stacked" && (An = o.type === c && L ? "active" : ""), c !== "chart" && (An = o.type === c && L && !un ? "active" : "");
    let Cn = () => {
      if (c === o.type)
        k !== o.visualizationType && y({ type: "EDITOR_SET_CONFIG", payload: { ...o, newViz: !0, visualizationType: k } }), y({ type: "EDITOR_SET_GLOBALACTIVE", payload: 1 });
      else if (!o.type || window.confirm("Changing visualization type will clear configuration settings. Do you want to continue?")) {
        let Gn = {
          newViz: !0,
          datasets: {},
          type: c
        };
        c === "map" ? Gn.general = {
          ...Gn.general,
          geoType: k,
          type: Rn
        } : Gn.visualizationType = k, c === "chart" && (Gn.visualizationSubType = w ? "stacked" : "regular", Gn.orientation = Tn), y({ type: "EDITOR_SET_CONFIG", payload: Gn }), y({ type: "EDITOR_SET_GLOBALACTIVE", payload: 1 });
      }
    };
    return /* @__PURE__ */ l.createElement("button", { className: An, onClick: () => Cn(), "aria-label": b }, S, /* @__PURE__ */ l.createElement("span", { className: "mt-1" }, b));
  };
  return /* @__PURE__ */ l.createElement("div", { className: "choose-vis" }, /* @__PURE__ */ l.createElement("a", { href: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/index.html", target: "_blank", rel: "noopener noreferrer", className: "guidance-link", style: { marginTop: 0, marginBottom: "2rem" } }, /* @__PURE__ */ l.createElement("div", null, /* @__PURE__ */ l.createElement("p", null, "For more information on the types of data visualizations in the WCMS, including examples and best practices, ", /* @__PURE__ */ l.createElement("u", null, "see the WCMS Features Gallery"), "."))), /* @__PURE__ */ l.createElement("div", { className: "heading-2" }, "General"), /* @__PURE__ */ l.createElement("ul", { className: "grid cove-temp" }, " ", /* @__PURE__ */ l.createElement("li", null, /* @__PURE__ */ l.createElement(an, { position: "right" }, /* @__PURE__ */ l.createElement(an.Target, null, /* @__PURE__ */ l.createElement(C, { label: "Dashboard", type: "dashboard", icon: /* @__PURE__ */ l.createElement(si, null) })), /* @__PURE__ */ l.createElement(an.Content, null, "Present multiple data visualizations with shared filter controls."))), /* @__PURE__ */ l.createElement("li", null, /* @__PURE__ */ l.createElement(an, null, /* @__PURE__ */ l.createElement(an.Target, null, /* @__PURE__ */ l.createElement(C, { label: "Data Bite", type: "data-bite", icon: /* @__PURE__ */ l.createElement(br, null) })), /* @__PURE__ */ l.createElement(an.Content, null, "Highlight a single aggregated value (e.g., sum or median)."))), /* @__PURE__ */ l.createElement("li", null, /* @__PURE__ */ l.createElement(an, null, /* @__PURE__ */ l.createElement(an.Target, null, /* @__PURE__ */ l.createElement(C, { label: "Waffle Chart", type: "waffle-chart", subType: "Waffle", icon: /* @__PURE__ */ l.createElement(Ir, null) })), /* @__PURE__ */ l.createElement(an.Content, null, "Highlight a piece of data in relationship to a data set."))), /* @__PURE__ */ l.createElement("li", null, /* @__PURE__ */ l.createElement(an, null, /* @__PURE__ */ l.createElement(an.Target, null, /* @__PURE__ */ l.createElement(C, { label: "Gauge Chart", type: "waffle-chart", subType: "Gauge", icon: /* @__PURE__ */ l.createElement(fi, null) })), /* @__PURE__ */ l.createElement(an.Content, null, "Specify the calculation of a single data point (such as a percentage value) and present it on a horizontal scale.")))), /* @__PURE__ */ l.createElement("div", { className: "heading-2" }, "Charts"), /* @__PURE__ */ l.createElement("ul", { className: "grid cove-temp" }, /* @__PURE__ */ l.createElement("li", null, /* @__PURE__ */ l.createElement(an, { position: "right" }, /* @__PURE__ */ l.createElement(an.Target, null, /* @__PURE__ */ l.createElement(C, { label: "Bar", type: "chart", subType: "Bar", orientation: "vertical", icon: /* @__PURE__ */ l.createElement(Rr, null) })), /* @__PURE__ */ l.createElement(an.Content, null, "Use bars to show comparisons between data categories."))), /* @__PURE__ */ l.createElement("li", null, /* @__PURE__ */ l.createElement(an, null, /* @__PURE__ */ l.createElement(an.Target, null, /* @__PURE__ */ l.createElement(C, { label: "Line", type: "chart", subType: "Line", orientation: "vertical", icon: /* @__PURE__ */ l.createElement(Er, null) })), /* @__PURE__ */ l.createElement(an.Content, null, "Present one or more data trends over time."))), /* @__PURE__ */ l.createElement("li", null, /* @__PURE__ */ l.createElement(an, null, /* @__PURE__ */ l.createElement(an.Target, null, /* @__PURE__ */ l.createElement(C, { label: "Pie", type: "chart", subType: "Pie", orientation: "vertical", icon: /* @__PURE__ */ l.createElement(jr, null) })), /* @__PURE__ */ l.createElement(an.Content, null, "Present the numerical proportions of a data series."))), /* @__PURE__ */ l.createElement("li", null, /* @__PURE__ */ l.createElement(an, null, /* @__PURE__ */ l.createElement(an.Target, null, /* @__PURE__ */ l.createElement(C, { label: "Paired Bar", type: "chart", subType: "Paired Bar", orientation: "horizontal", icon: /* @__PURE__ */ l.createElement(yi, null) })), /* @__PURE__ */ l.createElement(an.Content, null, "Use paired bars to show comparisons between two different data categories."))), /* @__PURE__ */ l.createElement("li", null, /* @__PURE__ */ l.createElement(an, null, /* @__PURE__ */ l.createElement(an.Target, null, /* @__PURE__ */ l.createElement(C, { label: "Deviation Bar", type: "chart", subType: "Deviation Bar", orientation: "horizontal", stacked: !1, icon: /* @__PURE__ */ l.createElement(mi, null) })), /* @__PURE__ */ l.createElement(an.Content, null, "Use deviation bars to display how individual values differ from a target."))), /* @__PURE__ */ l.createElement("li", null, /* @__PURE__ */ l.createElement(an, null, /* @__PURE__ */ l.createElement(an.Target, null, /* @__PURE__ */ l.createElement(C, { label: "Horizontal Bar (Stacked)", type: "chart", subType: "Bar", orientation: "horizontal", stacked: !0, icon: /* @__PURE__ */ l.createElement(ci, null) })), /* @__PURE__ */ l.createElement(an.Content, null, "Use bars to show comparisons between data categories.")))), /* @__PURE__ */ l.createElement("ul", { className: "grid cove-temp" }, /* @__PURE__ */ l.createElement("li", null, /* @__PURE__ */ l.createElement(an, null, /* @__PURE__ */ l.createElement(an.Target, null, /* @__PURE__ */ l.createElement(C, { label: "Box Plot", type: "chart", subType: "Box Plot", orientation: "vertical", icon: /* @__PURE__ */ l.createElement(di, null) })), /* @__PURE__ */ l.createElement(an.Content, null, "Display a box plot"))), /* @__PURE__ */ l.createElement("li", null, /* @__PURE__ */ l.createElement(an, null, /* @__PURE__ */ l.createElement(an.Target, null, /* @__PURE__ */ l.createElement(C, { label: "Scatter Plot", type: "chart", subType: "Scatter Plot", orientation: "vertical", icon: /* @__PURE__ */ l.createElement(Ci, null) })), /* @__PURE__ */ l.createElement(an.Content, null, "Display a scatter plot"))), /* @__PURE__ */ l.createElement("li", null, /* @__PURE__ */ l.createElement(an, null, /* @__PURE__ */ l.createElement(an.Target, null, /* @__PURE__ */ l.createElement(C, { label: "Area Chart", type: "chart", subType: "Area Chart", orientation: "vertical", icon: /* @__PURE__ */ l.createElement(gi, null) })), /* @__PURE__ */ l.createElement(an.Content, null, "Display an area chart"))), /* @__PURE__ */ l.createElement("li", null, /* @__PURE__ */ l.createElement(an, null, /* @__PURE__ */ l.createElement(an.Target, null, /* @__PURE__ */ l.createElement(C, { label: "Forecast Chart", type: "chart", subType: "Forecasting", orientation: "vertical", icon: /* @__PURE__ */ l.createElement(pi, null) })), /* @__PURE__ */ l.createElement(an.Content, null, "Display a forecasting chart"))), /* @__PURE__ */ l.createElement("li", null, /* @__PURE__ */ l.createElement(an, null, /* @__PURE__ */ l.createElement(an.Target, null, /* @__PURE__ */ l.createElement(C, { label: "Sankey Diagram", type: "chart", subType: "Sankey", orientation: "vertical", icon: /* @__PURE__ */ l.createElement(kr, null) })), /* @__PURE__ */ l.createElement(an.Content, null, "Display a sankey diagram")))), /* @__PURE__ */ l.createElement("div", { className: "heading-2" }, "Maps"), /* @__PURE__ */ l.createElement("ul", { className: "grid cove-temp" }, /* @__PURE__ */ l.createElement("li", null, /* @__PURE__ */ l.createElement(an, { position: "right" }, /* @__PURE__ */ l.createElement(an.Target, null, /* @__PURE__ */ l.createElement(C, { label: "United States (State- or County-Level)", type: "map", subType: "us", icon: /* @__PURE__ */ l.createElement(Ea, null) })), /* @__PURE__ */ l.createElement(an.Content, null, "Present a U.S. choropleth map at state or county level."))), /* @__PURE__ */ l.createElement("li", null, /* @__PURE__ */ l.createElement(an, { position: "right" }, /* @__PURE__ */ l.createElement(an.Target, null, /* @__PURE__ */ l.createElement(C, { label: "United States (HHS Regions)", type: "map", subType: "us-region", icon: /* @__PURE__ */ l.createElement(Dr, null) })), /* @__PURE__ */ l.createElement(an.Content, null, "Present a U.S. choropleth map at state or county level."))), /* @__PURE__ */ l.createElement("li", null, /* @__PURE__ */ l.createElement(an, null, /* @__PURE__ */ l.createElement(an.Target, null, /* @__PURE__ */ l.createElement(C, { label: "World", type: "map", subType: "world", icon: /* @__PURE__ */ l.createElement(Pr, null) })), /* @__PURE__ */ l.createElement(an.Content, null, "Present a choropleth map of the world."))), /* @__PURE__ */ l.createElement("li", null, /* @__PURE__ */ l.createElement(an, null, /* @__PURE__ */ l.createElement(an.Target, null, /* @__PURE__ */ l.createElement(C, { label: "U.S. State", type: "map", subType: "single-state", icon: /* @__PURE__ */ l.createElement(Or, null) })), /* @__PURE__ */ l.createElement(an.Content, null, "Present a choropleth map of an individual U.S. state."))), /* @__PURE__ */ l.createElement("li", null, /* @__PURE__ */ l.createElement(an, null, /* @__PURE__ */ l.createElement(an.Target, null, /* @__PURE__ */ l.createElement(C, { label: "U.S. Geocode", type: "map", subType: "us-county", generalType: "us-geocode", icon: /* @__PURE__ */ l.createElement(Ea, null) })), /* @__PURE__ */ l.createElement(an.Content, null, "United States GeoCode")))));
}
function vi({ containerEl: o }) {
  const { config: g, setTempConfig: y, hostname: C, isDebug: S } = Y.useContext(yt);
  let { type: b } = g;
  switch (b) {
    case "map":
      return /* @__PURE__ */ l.createElement(lt, { component: "CdcMap" }, /* @__PURE__ */ l.createElement(Lr, { isEditor: !0, isDebug: S, config: g, hostname: C, setConfig: y, containerEl: o }));
    case "waffle-chart":
      if (g.visualizationType === "Waffle" || g.visualizationType === "Gauge")
        return /* @__PURE__ */ l.createElement(lt, { component: "CdcWaffleChart" }, /* @__PURE__ */ l.createElement(hr, { isEditor: !0, isDebug: S, config: g, setConfig: y }));
      break;
    case "chart":
      return /* @__PURE__ */ l.createElement(lt, { component: "CdcChart" }, /* @__PURE__ */ l.createElement(vr, { isEditor: !0, isDebug: S, config: g, setConfig: y }));
    case "dashboard":
      return /* @__PURE__ */ l.createElement(lt, { component: "CdcDashboard" }, /* @__PURE__ */ l.createElement(Mr, { isEditor: !0, isDebug: S, config: g }));
    case "data-bite":
      return /* @__PURE__ */ l.createElement(lt, { component: "CdcDashboard" }, /* @__PURE__ */ l.createElement(mr, { isEditor: !0, isDebug: S, config: g, setConfig: y }));
    case "markup-include":
      return /* @__PURE__ */ l.createElement(lt, { component: "CdcDashboard" }, /* @__PURE__ */ l.createElement(pr, { isEditor: !0, isDebug: S, config: g, setConfig: y }));
    default:
      return /* @__PURE__ */ l.createElement("p", null, "No visualization type selected.");
  }
}
const hi = (o) => {
  const g = [];
  o.rows && o.rows.forEach((y) => {
    if (y.footnotesId) {
      const { dataKey: C, staticFootnotes: S } = o.visualizations[y.footnotesId];
      !C && !(S != null && S.length) ? delete o.visualizations[y.footnotesId] : g.push(y.footnotesId);
    }
  }), o.visualizations && Object.keys(o.visualizations).forEach((y) => {
    o.visualizations[y].type === "footnotes" && !g.includes(y) && delete o.visualizations[y];
  });
}, Li = (o) => {
  o.datasets && Object.keys(o.datasets).forEach((g) => {
    delete o.datasets[g].formattedData, o.datasets[g].dataUrl && delete o.datasets[g].data;
  }), o.visualizations && Object.keys(o.visualizations).forEach((g) => {
    o.visualizations[g] = kt.omit(o.visualizations[g], ["runtime", "formattedData", "data"]);
  }), o.rows && o.rows.forEach((g) => {
    g.dataKey && (g = kt.omit(g, ["data", "formattedData"]));
  });
}, cr = (o) => {
  let g = { ...o };
  return g.type === "dashboard" ? (Li(g), hi(g)) : (delete g.runtime, delete g.formattedData, g.dataUrl && delete g.data), g;
}, wi = (o) => {
  if (o !== null) {
    let g = cr(o);
    const y = JSON.stringify(g), C = new CustomEvent("updateVizConfig", { detail: y, bubbles: !0 });
    window.dispatchEvent(C);
  }
}, Si = (o) => {
  var g;
  if (o.type === "dashboard") {
    let y = !1, C;
    if (o.data || o.dataUrl) {
      y = !0, C = { ...o };
      const S = o.dataFileName || "dataset-1";
      C.datasets = {}, C.datasets[S] = {
        ...kt.pick(o, ["data", "dataUrl", "dataFileSourceType"]),
        dataFileName: S
      }, Object.keys(C.visualizations).forEach((c) => {
        const k = { dataKey: S, ...kt.pick(C, "dataDescription", "formattedData") };
        C.visualizations[c] = { ...C.visualizations[c], ...k };
      }), C = { ...C, ...{ data: [], dataUrl: "", dataFileName: "", dataFileSourceType: "", dataDescription: [], formattedData: [] } };
    }
    if ((g = o.dashboard) != null && g.filters) {
      y = !0, C = { ...o };
      const S = { ...C.dashboard };
      S.sharedFilters || (S.sharedFilters = []);
      const b = S.filters.map((c) => ({ ...c, key: c.label, showDropdown: !0, usedBy: Object.keys(C.visualizations) }));
      S.sharedFilters = [...S.sharedFilters, ...b], C.dashboard = { ...S, filters: void 0 };
    }
    if (y)
      return C;
  }
  return o;
};
const Ni = (o, g) => {
  switch (g.type) {
    case "EDITOR_SAVE":
      return { ...o, config: g.payload, tempConfig: null };
    case "EDITOR_SET_CONFIG":
      return { ...o, config: g.payload };
    case "EDITOR_TEMP_SAVE":
      return { ...o, tempConfig: g.payload };
    case "EDITOR_SET_ERRORS":
      return { ...o, errors: g.payload };
    case "EDITOR_SET_VIEWPORT":
      return { ...o, currentViewport: g.payload };
    case "EDITOR_SET_GLOBALACTIVE":
      return { ...o, globalActive: g.payload };
    default:
      return o;
  }
}, Di = wr(Ni), Ti = ({ config: o, hostname: g, containerEl: y, sharepath: C, isDebug: S }) => {
  const b = Y.useMemo(() => {
    let un = 0;
    return (o != null && o.data || o != null && o.dataUrl) && (o != null && o.type) && (un = 2), { config: Si(o || { newViz: !0, errors: [], currentViewport: "lg" }), errors: [], currentViewport: "lg", globalActive: un, sharepath: C, isDebug: S, hostname: g };
  }, [o]);
  Y.useEffect(() => {
    var un;
    Aa && ((un = Aa) == null || un.init());
  }, []);
  const [c, k] = Y.useReducer(Di, b), Tn = (un) => {
    wi(kt.cloneDeep(un)), k({ type: "EDITOR_TEMP_SAVE", payload: un });
  }, w = new gr((un) => {
    const An = un[0], { width: Cn } = An.contentRect, gn = fr(Cn);
    c.currentViewport !== gn && k({ type: "EDITOR_SET_VIEWPORT", payload: gn });
  }), Rn = Y.useCallback((un) => {
    un !== null && w.observe(un);
  }, []);
  Y.useEffect(() => {
    let un = cr(c.config);
    const An = JSON.stringify(un), Cn = new CustomEvent("updateVizConfig", { detail: An });
    window.dispatchEvent(Cn);
  }, [c.config]);
  const L = Y.useMemo(() => {
    c.config.type !== "dashboard" ? c.config.formattedData : c.config.datasets && Object.keys(c.config.datasets).length > 0;
  }, [c.config.type, c.config.datasets]);
  return /* @__PURE__ */ l.createElement(Sr, null, /* @__PURE__ */ l.createElement(yt.Provider, { value: { ...c, setTempConfig: Tn } }, /* @__PURE__ */ l.createElement(Pt.Provider, { value: k }, /* @__PURE__ */ l.createElement("div", { className: `cdc-open-viz-module cdc-editor ${c.currentViewport}`, ref: Rn }, /* @__PURE__ */ l.createElement(ju, { className: "top-level" }, /* @__PURE__ */ l.createElement(jt, { title: "1. Choose Visualization Type", className: "choose-type" }, /* @__PURE__ */ l.createElement(Mi, null)), /* @__PURE__ */ l.createElement(jt, { title: "2. Import Data", className: "data-designer", disableRule: !c.config.type }, /* @__PURE__ */ l.createElement(li, null)), /* @__PURE__ */ l.createElement(jt, { title: "3. Configure", className: "configure", disableRule: L }, /* @__PURE__ */ l.createElement(vi, { containerEl: y })))))), /* @__PURE__ */ l.createElement(Nr, null));
}, c0 = {
  title: "Components/Pages/CdcEditor",
  component: Ti
}, Ao = {
  args: {
    config: {}
  }
};
var Qa, Za, $a;
Ao.parameters = {
  ...Ao.parameters,
  docs: {
    ...(Qa = Ao.parameters) == null ? void 0 : Qa.docs,
    source: {
      originalSource: `{
  args: {
    config: {}
  }
}`,
      ...($a = (Za = Ao.parameters) == null ? void 0 : Za.docs) == null ? void 0 : $a.source
    }
  }
};
const C0 = ["DefaultEditor"];
export {
  Ao as DefaultEditor,
  C0 as __namedExportsOrder,
  c0 as default
};
