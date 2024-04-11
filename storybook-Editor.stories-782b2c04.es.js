import { r as D, R as l } from "./storybook-index-45401197.es.js";
import { i as ca, b as Mo, a as fr, g as pr } from "./storybook-isSolr-6a0136d5.es.js";
import { C as ct, E as Lt, J as gr, j as mr, M as vr, f as hr, t as Sr, i as wr, d as Mr, a as Na, G as br, O as Ar } from "./storybook-CdcDashboard-cde661c9.es.js";
import { P as Zn } from "./storybook-index-43433e35.es.js";
import { S as Dr } from "./storybook-usa-region-graphic-ecaa401d.es.js";
import { a as Rr } from "./storybook-axios-01170075.es.js";
import { D as Nr } from "./storybook-index-964548d8.es.js";
import { c as nr } from "./storybook-_commonjsHelpers-c5d32002.es.js";
import { f as Ta } from "./storybook-fetchRemoteData-6254352f.es.js";
import { a as Pa, d as Ea, e as Tr, f as Pr, S as Er, g as Ir, h as kr, i as Lr, j as Ia, k as Or, l as Br } from "./storybook-Icon-ee109bed.es.js";
import { D as Hr } from "./storybook-DataDesigner-a81779cb.es.js";
import { T as on } from "./storybook-Tooltip-edc0f7ab.es.js";
import { E as lt } from "./storybook-Loading-f180d060.es.js";
import { _ as No } from "./storybook-coveUpdateWorker-2db8648a.es.js";
import "./storybook-queryStringUtils-696bb685.es.js";
import "./storybook-index-e5bf02db.es.js";
import "./storybook-DataTableEditor-01986776.es.js";
import "./storybook-useDebounce-78f40efd.es.js";
import "./storybook-MultiSelect-b1f28fbd.es.js";
import "./storybook-InputSelect-a65afd95.es.js";
import "./storybook-index-4ed993c7.es.js";
import "./storybook-Button-d74e310e.es.js";
import "./storybook-DataTable-959d46a2.es.js";
import "./storybook-papaparse.min-b07ddc33.es.js";
import "./storybook-year-bedc547d.es.js";
import "./storybook-numberFromString-24623c03.es.js";
import "./storybook-Table-4cc720ca.es.js";
import "./storybook-index-e502eacf.es.js";
import "./storybook-updateFieldFactory-c006040a.es.js";
import "./storybook-jsx-runtime-36872362.es.js";
import "./storybook-string-7df1b381.es.js";
import "./storybook-Card-6750b07b.es.js";
function yt(o, f, s, d) {
  function b(P) {
    return P instanceof s ? P : new s(function(y) {
      y(P);
    });
  }
  return new (s || (s = Promise))(function(P, y) {
    function O(En) {
      try {
        M(d.next(En));
      } catch (w) {
        y(w);
      }
    }
    function Tn(En) {
      try {
        M(d.throw(En));
      } catch (w) {
        y(w);
      }
    }
    function M(En) {
      En.done ? P(En.value) : b(En.value).then(O, Tn);
    }
    M((d = d.apply(o, f || [])).next());
  });
}
function Ct(o, f) {
  var s = { label: 0, sent: function() {
    if (P[0] & 1)
      throw P[1];
    return P[1];
  }, trys: [], ops: [] }, d, b, P, y;
  return y = { next: O(0), throw: O(1), return: O(2) }, typeof Symbol == "function" && (y[Symbol.iterator] = function() {
    return this;
  }), y;
  function O(M) {
    return function(En) {
      return Tn([M, En]);
    };
  }
  function Tn(M) {
    if (d)
      throw new TypeError("Generator is already executing.");
    for (; y && (y = 0, M[0] && (s = 0)), s; )
      try {
        if (d = 1, b && (P = M[0] & 2 ? b.return : M[0] ? b.throw || ((P = b.return) && P.call(b), 0) : b.next) && !(P = P.call(b, M[1])).done)
          return P;
        switch (b = 0, P && (M = [M[0] & 2, P.value]), M[0]) {
          case 0:
          case 1:
            P = M;
            break;
          case 4:
            return s.label++, { value: M[1], done: !1 };
          case 5:
            s.label++, b = M[1], M = [0];
            continue;
          case 7:
            M = s.ops.pop(), s.trys.pop();
            continue;
          default:
            if (P = s.trys, !(P = P.length > 0 && P[P.length - 1]) && (M[0] === 6 || M[0] === 2)) {
              s = 0;
              continue;
            }
            if (M[0] === 3 && (!P || M[1] > P[0] && M[1] < P[3])) {
              s.label = M[1];
              break;
            }
            if (M[0] === 6 && s.label < P[1]) {
              s.label = P[1], P = M;
              break;
            }
            if (P && s.label < P[2]) {
              s.label = P[2], s.ops.push(M);
              break;
            }
            P[2] && s.ops.pop(), s.trys.pop();
            continue;
        }
        M = f.call(o, s);
      } catch (En) {
        M = [6, En], b = 0;
      } finally {
        d = P = 0;
      }
    if (M[0] & 5)
      throw M[1];
    return { value: M[0] ? M[1] : void 0, done: !0 };
  }
}
function Fr(o, f) {
  var s = typeof Symbol == "function" && o[Symbol.iterator];
  if (!s)
    return o;
  var d = s.call(o), b, P = [], y;
  try {
    for (; (f === void 0 || f-- > 0) && !(b = d.next()).done; )
      P.push(b.value);
  } catch (O) {
    y = { error: O };
  } finally {
    try {
      b && !b.done && (s = d.return) && s.call(d);
    } finally {
      if (y)
        throw y.error;
    }
  }
  return P;
}
function Wr() {
  for (var o = [], f = 0; f < arguments.length; f++)
    o = o.concat(Fr(arguments[f]));
  return o;
}
var Gr = /* @__PURE__ */ new Map([
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
function Ot(o, f) {
  var s = xr(o);
  if (typeof s.path != "string") {
    var d = o.webkitRelativePath;
    Object.defineProperty(s, "path", {
      value: typeof f == "string" ? f : typeof d == "string" && d.length > 0 ? d : o.name,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return s;
}
function xr(o) {
  var f = o.name, s = f && f.lastIndexOf(".") !== -1;
  if (s && !o.type) {
    var d = f.split(".").pop().toLowerCase(), b = Gr.get(d);
    b && Object.defineProperty(o, "type", {
      value: b,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return o;
}
var Vr = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  "Thumbs.db"
  // Windows
];
function Kr(o) {
  return yt(this, void 0, void 0, function() {
    return Ct(this, function(f) {
      return To(o) && qr(o) ? [2, Yr(o.dataTransfer, o.type)] : zr(o) ? [2, _r(o)] : Array.isArray(o) && o.every(function(s) {
        return "getFile" in s && typeof s.getFile == "function";
      }) ? [2, Xr(o)] : [2, []];
    });
  });
}
function qr(o) {
  return To(o.dataTransfer);
}
function zr(o) {
  return To(o) && To(o.target);
}
function To(o) {
  return typeof o == "object" && o !== null;
}
function _r(o) {
  return pa(o.target.files).map(function(f) {
    return Ot(f);
  });
}
function Xr(o) {
  return yt(this, void 0, void 0, function() {
    var f;
    return Ct(this, function(s) {
      switch (s.label) {
        case 0:
          return [4, Promise.all(o.map(function(d) {
            return d.getFile();
          }))];
        case 1:
          return f = s.sent(), [2, f.map(function(d) {
            return Ot(d);
          })];
      }
    });
  });
}
function Yr(o, f) {
  return yt(this, void 0, void 0, function() {
    var s, d;
    return Ct(this, function(b) {
      switch (b.label) {
        case 0:
          return o === null ? [2, []] : o.items ? (s = pa(o.items).filter(function(P) {
            return P.kind === "file";
          }), f !== "drop" ? [2, s] : [4, Promise.all(s.map(jr))]) : [3, 2];
        case 1:
          return d = b.sent(), [2, ka(er(d))];
        case 2:
          return [2, ka(pa(o.files).map(function(P) {
            return Ot(P);
          }))];
      }
    });
  });
}
function ka(o) {
  return o.filter(function(f) {
    return Vr.indexOf(f.name) === -1;
  });
}
function pa(o) {
  if (o === null)
    return [];
  for (var f = [], s = 0; s < o.length; s++) {
    var d = o[s];
    f.push(d);
  }
  return f;
}
function jr(o) {
  if (typeof o.webkitGetAsEntry != "function")
    return La(o);
  var f = o.webkitGetAsEntry();
  return f && f.isDirectory ? tr(f) : La(o);
}
function er(o) {
  return o.reduce(function(f, s) {
    return Wr(f, Array.isArray(s) ? er(s) : [s]);
  }, []);
}
function La(o) {
  var f = o.getAsFile();
  if (!f)
    return Promise.reject(o + " is not a File");
  var s = Ot(f);
  return Promise.resolve(s);
}
function Ur(o) {
  return yt(this, void 0, void 0, function() {
    return Ct(this, function(f) {
      return [2, o.isDirectory ? tr(o) : Jr(o)];
    });
  });
}
function tr(o) {
  var f = o.createReader();
  return new Promise(function(s, d) {
    var b = [];
    function P() {
      var y = this;
      f.readEntries(function(O) {
        return yt(y, void 0, void 0, function() {
          var Tn, M, En;
          return Ct(this, function(w) {
            switch (w.label) {
              case 0:
                if (O.length)
                  return [3, 5];
                w.label = 1;
              case 1:
                return w.trys.push([1, 3, , 4]), [4, Promise.all(b)];
              case 2:
                return Tn = w.sent(), s(Tn), [3, 4];
              case 3:
                return M = w.sent(), d(M), [3, 4];
              case 4:
                return [3, 6];
              case 5:
                En = Promise.all(O.map(Ur)), b.push(En), P(), w.label = 6;
              case 6:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, function(O) {
        d(O);
      });
    }
    P();
  });
}
function Jr(o) {
  return yt(this, void 0, void 0, function() {
    return Ct(this, function(f) {
      return [2, new Promise(function(s, d) {
        o.file(function(b) {
          var P = Ot(b, o.fullPath);
          s(P);
        }, function(b) {
          d(b);
        });
      })];
    });
  });
}
var $r = function(o, f) {
  if (o && f) {
    var s = Array.isArray(f) ? f : f.split(","), d = o.name || "", b = (o.type || "").toLowerCase(), P = b.replace(/\/.*$/, "");
    return s.some(function(y) {
      var O = y.trim().toLowerCase();
      return O.charAt(0) === "." ? d.toLowerCase().endsWith(O) : O.endsWith("/*") ? P === O.replace(/\/.*$/, "") : b === O;
    });
  }
  return !0;
};
function Oa(o, f) {
  var s = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var d = Object.getOwnPropertySymbols(o);
    f && (d = d.filter(function(b) {
      return Object.getOwnPropertyDescriptor(o, b).enumerable;
    })), s.push.apply(s, d);
  }
  return s;
}
function Ba(o) {
  for (var f = 1; f < arguments.length; f++) {
    var s = arguments[f] != null ? arguments[f] : {};
    f % 2 ? Oa(Object(s), !0).forEach(function(d) {
      or(o, d, s[d]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(s)) : Oa(Object(s)).forEach(function(d) {
      Object.defineProperty(o, d, Object.getOwnPropertyDescriptor(s, d));
    });
  }
  return o;
}
function or(o, f, s) {
  return f in o ? Object.defineProperty(o, f, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : o[f] = s, o;
}
function Ha(o, f) {
  return eu(o) || nu(o, f) || Qr(o, f) || Zr();
}
function Zr() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Qr(o, f) {
  if (o) {
    if (typeof o == "string")
      return Fa(o, f);
    var s = Object.prototype.toString.call(o).slice(8, -1);
    if (s === "Object" && o.constructor && (s = o.constructor.name), s === "Map" || s === "Set")
      return Array.from(o);
    if (s === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))
      return Fa(o, f);
  }
}
function Fa(o, f) {
  (f == null || f > o.length) && (f = o.length);
  for (var s = 0, d = new Array(f); s < f; s++)
    d[s] = o[s];
  return d;
}
function nu(o, f) {
  var s = o == null ? null : typeof Symbol < "u" && o[Symbol.iterator] || o["@@iterator"];
  if (s != null) {
    var d = [], b = !0, P = !1, y, O;
    try {
      for (s = s.call(o); !(b = (y = s.next()).done) && (d.push(y.value), !(f && d.length === f)); b = !0)
        ;
    } catch (Tn) {
      P = !0, O = Tn;
    } finally {
      try {
        !b && s.return != null && s.return();
      } finally {
        if (P)
          throw O;
      }
    }
    return d;
  }
}
function eu(o) {
  if (Array.isArray(o))
    return o;
}
var tu = "file-invalid-type", ou = "file-too-large", au = "file-too-small", ru = "too-many-files", uu = function(f) {
  f = Array.isArray(f) && f.length === 1 ? f[0] : f;
  var s = Array.isArray(f) ? "one of ".concat(f.join(", ")) : f;
  return {
    code: tu,
    message: "File type must be ".concat(s)
  };
}, Wa = function(f) {
  return {
    code: ou,
    message: "File is larger than ".concat(f, " ").concat(f === 1 ? "byte" : "bytes")
  };
}, Ga = function(f) {
  return {
    code: au,
    message: "File is smaller than ".concat(f, " ").concat(f === 1 ? "byte" : "bytes")
  };
}, iu = {
  code: ru,
  message: "Too many files"
};
function ar(o, f) {
  var s = o.type === "application/x-moz-file" || $r(o, f);
  return [s, s ? null : uu(f)];
}
function rr(o, f, s) {
  if (Et(o.size))
    if (Et(f) && Et(s)) {
      if (o.size > s)
        return [!1, Wa(s)];
      if (o.size < f)
        return [!1, Ga(f)];
    } else {
      if (Et(f) && o.size < f)
        return [!1, Ga(f)];
      if (Et(s) && o.size > s)
        return [!1, Wa(s)];
    }
  return [!0, null];
}
function Et(o) {
  return o != null;
}
function lu(o) {
  var f = o.files, s = o.accept, d = o.minSize, b = o.maxSize, P = o.multiple, y = o.maxFiles;
  return !P && f.length > 1 || P && y >= 1 && f.length > y ? !1 : f.every(function(O) {
    var Tn = ar(O, s), M = Ha(Tn, 1), En = M[0], w = rr(O, d, b), un = Ha(w, 1), Rn = un[0];
    return En && Rn;
  });
}
function Po(o) {
  return typeof o.isPropagationStopped == "function" ? o.isPropagationStopped() : typeof o.cancelBubble < "u" ? o.cancelBubble : !1;
}
function bo(o) {
  return o.dataTransfer ? Array.prototype.some.call(o.dataTransfer.types, function(f) {
    return f === "Files" || f === "application/x-moz-file";
  }) : !!o.target && !!o.target.files;
}
function xa(o) {
  o.preventDefault();
}
function su(o) {
  return o.indexOf("MSIE") !== -1 || o.indexOf("Trident/") !== -1;
}
function cu(o) {
  return o.indexOf("Edge/") !== -1;
}
function yu() {
  var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.navigator.userAgent;
  return su(o) || cu(o);
}
function Le() {
  for (var o = arguments.length, f = new Array(o), s = 0; s < o; s++)
    f[s] = arguments[s];
  return function(d) {
    for (var b = arguments.length, P = new Array(b > 1 ? b - 1 : 0), y = 1; y < b; y++)
      P[y - 1] = arguments[y];
    return f.some(function(O) {
      return !Po(d) && O && O.apply(void 0, [d].concat(P)), Po(d);
    });
  };
}
function Va() {
  return "showOpenFilePicker" in window;
}
function Cu(o) {
  return o = typeof o == "string" ? o.split(",") : o, [{
    description: "everything",
    // TODO: Need to handle filtering more elegantly than this!
    accept: Array.isArray(o) ? o.filter(function(f) {
      return f === "audio/*" || f === "video/*" || f === "image/*" || f === "text/*" || /\w+\/[-+.\w]+/g.test(f);
    }).reduce(function(f, s) {
      return Ba(Ba({}, f), {}, or({}, s, []));
    }, {}) : {}
  }];
}
var du = ["children"], fu = ["open"], pu = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"], gu = ["refKey", "onChange", "onClick"];
function mu(o) {
  return Su(o) || hu(o) || ur(o) || vu();
}
function vu() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function hu(o) {
  if (typeof Symbol < "u" && o[Symbol.iterator] != null || o["@@iterator"] != null)
    return Array.from(o);
}
function Su(o) {
  if (Array.isArray(o))
    return ga(o);
}
function ya(o, f) {
  return bu(o) || Mu(o, f) || ur(o, f) || wu();
}
function wu() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ur(o, f) {
  if (o) {
    if (typeof o == "string")
      return ga(o, f);
    var s = Object.prototype.toString.call(o).slice(8, -1);
    if (s === "Object" && o.constructor && (s = o.constructor.name), s === "Map" || s === "Set")
      return Array.from(o);
    if (s === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))
      return ga(o, f);
  }
}
function ga(o, f) {
  (f == null || f > o.length) && (f = o.length);
  for (var s = 0, d = new Array(f); s < f; s++)
    d[s] = o[s];
  return d;
}
function Mu(o, f) {
  var s = o == null ? null : typeof Symbol < "u" && o[Symbol.iterator] || o["@@iterator"];
  if (s != null) {
    var d = [], b = !0, P = !1, y, O;
    try {
      for (s = s.call(o); !(b = (y = s.next()).done) && (d.push(y.value), !(f && d.length === f)); b = !0)
        ;
    } catch (Tn) {
      P = !0, O = Tn;
    } finally {
      try {
        !b && s.return != null && s.return();
      } finally {
        if (P)
          throw O;
      }
    }
    return d;
  }
}
function bu(o) {
  if (Array.isArray(o))
    return o;
}
function Ka(o, f) {
  var s = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var d = Object.getOwnPropertySymbols(o);
    f && (d = d.filter(function(b) {
      return Object.getOwnPropertyDescriptor(o, b).enumerable;
    })), s.push.apply(s, d);
  }
  return s;
}
function ee(o) {
  for (var f = 1; f < arguments.length; f++) {
    var s = arguments[f] != null ? arguments[f] : {};
    f % 2 ? Ka(Object(s), !0).forEach(function(d) {
      ma(o, d, s[d]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(s)) : Ka(Object(s)).forEach(function(d) {
      Object.defineProperty(o, d, Object.getOwnPropertyDescriptor(s, d));
    });
  }
  return o;
}
function ma(o, f, s) {
  return f in o ? Object.defineProperty(o, f, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : o[f] = s, o;
}
function Eo(o, f) {
  if (o == null)
    return {};
  var s = Au(o, f), d, b;
  if (Object.getOwnPropertySymbols) {
    var P = Object.getOwnPropertySymbols(o);
    for (b = 0; b < P.length; b++)
      d = P[b], !(f.indexOf(d) >= 0) && Object.prototype.propertyIsEnumerable.call(o, d) && (s[d] = o[d]);
  }
  return s;
}
function Au(o, f) {
  if (o == null)
    return {};
  var s = {}, d = Object.keys(o), b, P;
  for (P = 0; P < d.length; P++)
    b = d[P], !(f.indexOf(b) >= 0) && (s[b] = o[b]);
  return s;
}
var Ma = /* @__PURE__ */ D.forwardRef(function(o, f) {
  var s = o.children, d = Eo(o, du), b = ha(d), P = b.open, y = Eo(b, fu);
  return D.useImperativeHandle(f, function() {
    return {
      open: P
    };
  }, [P]), /* @__PURE__ */ l.createElement(D.Fragment, null, s(ee(ee({}, y), {}, {
    open: P
  })));
});
Ma.displayName = "Dropzone";
var ir = {
  disabled: !1,
  getFilesFromEvent: Kr,
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
Ma.defaultProps = ir;
Ma.propTypes = {
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
var va = {
  isFocused: !1,
  isFileDialogActive: !1,
  isDragActive: !1,
  isDragAccept: !1,
  isDragReject: !1,
  draggedFiles: [],
  acceptedFiles: [],
  fileRejections: []
};
function ha() {
  var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, f = ee(ee({}, ir), o), s = f.accept, d = f.disabled, b = f.getFilesFromEvent, P = f.maxSize, y = f.minSize, O = f.multiple, Tn = f.maxFiles, M = f.onDragEnter, En = f.onDragLeave, w = f.onDragOver, un = f.onDrop, Rn = f.onDropAccepted, Cn = f.onDropRejected, dn = f.onFileDialogCancel, xn = f.onFileDialogOpen, vn = f.useFsAccessApi, Fn = f.preventDropOnDocument, bn = f.noClick, Jn = f.noKeyboard, Wn = f.noDrag, An = f.noDragEventsBubbling, ae = f.validator, zn = D.useMemo(function() {
    return typeof xn == "function" ? xn : qa;
  }, [xn]), de = D.useMemo(function() {
    return typeof dn == "function" ? dn : qa;
  }, [dn]), fn = D.useRef(null), an = D.useRef(null), _n = D.useReducer(Du, va), Qn = ya(_n, 2), Yn = Qn[0], ne = Qn[1], Pe = Yn.isFocused, Re = Yn.isFileDialogActive, be = Yn.draggedFiles, Ee = function() {
    Re && setTimeout(function() {
      if (an.current) {
        var In = an.current.files;
        In.length || (ne({
          type: "closeDialog"
        }), de());
      }
    }, 300);
  };
  D.useEffect(function() {
    return vn && Va() ? function() {
    } : (window.addEventListener("focus", Ee, !1), function() {
      window.removeEventListener("focus", Ee, !1);
    });
  }, [an, Re, de, vn]);
  var fe = D.useRef([]), me = function(In) {
    fn.current && fn.current.contains(In.target) || (In.preventDefault(), fe.current = []);
  };
  D.useEffect(function() {
    return Fn && (document.addEventListener("dragover", xa, !1), document.addEventListener("drop", me, !1)), function() {
      Fn && (document.removeEventListener("dragover", xa), document.removeEventListener("drop", me));
    };
  }, [fn, Fn]);
  var re = D.useCallback(function(Q) {
    Q.preventDefault(), Q.persist(), Ie(Q), fe.current = [].concat(mu(fe.current), [Q.target]), bo(Q) && Promise.resolve(b(Q)).then(function(In) {
      Po(Q) && !An || (ne({
        draggedFiles: In,
        isDragActive: !0,
        type: "setDraggedFiles"
      }), M && M(Q));
    });
  }, [b, M, An]), Oe = D.useCallback(function(Q) {
    Q.preventDefault(), Q.persist(), Ie(Q);
    var In = bo(Q);
    if (In && Q.dataTransfer)
      try {
        Q.dataTransfer.dropEffect = "copy";
      } catch {
      }
    return In && w && w(Q), !1;
  }, [w, An]), Be = D.useCallback(function(Q) {
    Q.preventDefault(), Q.persist(), Ie(Q);
    var In = fe.current.filter(function(ie) {
      return fn.current && fn.current.contains(ie);
    }), te = In.indexOf(Q.target);
    te !== -1 && In.splice(te, 1), fe.current = In, !(In.length > 0) && (ne({
      isDragActive: !1,
      type: "setDraggedFiles",
      draggedFiles: []
    }), bo(Q) && En && En(Q));
  }, [fn, En, An]), H = D.useCallback(function(Q, In) {
    var te = [], ie = [];
    Q.forEach(function(ge) {
      var He = ar(ge, s), Te = ya(He, 2), Ye = Te[0], je = Te[1], Ue = rr(ge, y, P), We = ya(Ue, 2), Je = We[0], Ge = We[1], xe = ae ? ae(ge) : null;
      if (Ye && Je && !xe)
        te.push(ge);
      else {
        var Fe = [je, Ge];
        xe && (Fe = Fe.concat(xe)), ie.push({
          file: ge,
          errors: Fe.filter(function(at) {
            return at;
          })
        });
      }
    }), (!O && te.length > 1 || O && Tn >= 1 && te.length > Tn) && (te.forEach(function(ge) {
      ie.push({
        file: ge,
        errors: [iu]
      });
    }), te.splice(0)), ne({
      acceptedFiles: te,
      fileRejections: ie,
      type: "setFiles"
    }), un && un(te, ie, In), ie.length > 0 && Cn && Cn(ie, In), te.length > 0 && Rn && Rn(te, In);
  }, [ne, O, s, y, P, Tn, un, Rn, Cn, ae]), z = D.useCallback(function(Q) {
    Q.preventDefault(), Q.persist(), Ie(Q), fe.current = [], bo(Q) && Promise.resolve(b(Q)).then(function(In) {
      Po(Q) && !An || H(In, Q);
    }), ne({
      type: "reset"
    });
  }, [b, H, An]), rn = D.useCallback(function() {
    if (vn && Va()) {
      ne({
        type: "openDialog"
      }), zn();
      var Q = {
        multiple: O,
        types: Cu(s)
      };
      window.showOpenFilePicker(Q).then(function(In) {
        return b(In);
      }).then(function(In) {
        return H(In, null);
      }).catch(function(In) {
        return de(In);
      }).finally(function() {
        return ne({
          type: "closeDialog"
        });
      });
      return;
    }
    an.current && (ne({
      type: "openDialog"
    }), zn(), an.current.value = null, an.current.click());
  }, [ne, zn, de, vn, H, s, O]), en = D.useCallback(function(Q) {
    !fn.current || !fn.current.isEqualNode(Q.target) || (Q.keyCode === 32 || Q.keyCode === 13) && (Q.preventDefault(), rn());
  }, [fn, an, rn]), Vn = D.useCallback(function() {
    ne({
      type: "focus"
    });
  }, []), jn = D.useCallback(function() {
    ne({
      type: "blur"
    });
  }, []), we = D.useCallback(function() {
    bn || (yu() ? setTimeout(rn, 0) : rn());
  }, [an, bn, rn]), Ne = function(In) {
    return d ? null : In;
  }, Ae = function(In) {
    return Jn ? null : Ne(In);
  }, De = function(In) {
    return Wn ? null : Ne(In);
  }, Ie = function(In) {
    An && In.stopPropagation();
  }, _e = D.useMemo(function() {
    return function() {
      var Q = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, In = Q.refKey, te = In === void 0 ? "ref" : In, ie = Q.role, ge = Q.onKeyDown, He = Q.onFocus, Te = Q.onBlur, Ye = Q.onClick, je = Q.onDragEnter, Ue = Q.onDragOver, We = Q.onDragLeave, Je = Q.onDrop, Ge = Eo(Q, pu);
      return ee(ee(ma({
        onKeyDown: Ae(Le(ge, en)),
        onFocus: Ae(Le(He, Vn)),
        onBlur: Ae(Le(Te, jn)),
        onClick: Ne(Le(Ye, we)),
        onDragEnter: De(Le(je, re)),
        onDragOver: De(Le(Ue, Oe)),
        onDragLeave: De(Le(We, Be)),
        onDrop: De(Le(Je, z)),
        role: typeof ie == "string" && ie !== "" ? ie : "button"
      }, te, fn), !d && !Jn ? {
        tabIndex: 0
      } : {}), Ge);
    };
  }, [fn, en, Vn, jn, we, re, Oe, Be, z, Jn, Wn, d]), pe = D.useCallback(function(Q) {
    Q.stopPropagation();
  }, []), ye = D.useMemo(function() {
    return function() {
      var Q = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, In = Q.refKey, te = In === void 0 ? "ref" : In, ie = Q.onChange, ge = Q.onClick, He = Eo(Q, gu), Te = ma({
        accept: s,
        multiple: O,
        type: "file",
        style: {
          display: "none"
        },
        onChange: Ne(Le(ie, z)),
        onClick: Ne(Le(ge, pe)),
        autoComplete: "off",
        tabIndex: -1
      }, te, an);
      return ee(ee({}, Te), He);
    };
  }, [an, s, O, z, d]), ve = be.length, he = ve > 0 && lu({
    files: be,
    accept: s,
    minSize: y,
    maxSize: P,
    multiple: O,
    maxFiles: Tn
  }), Xe = ve > 0 && !he;
  return ee(ee({}, Yn), {}, {
    isDragAccept: he,
    isDragReject: Xe,
    isFocused: Pe && !d,
    getRootProps: _e,
    getInputProps: ye,
    rootRef: fn,
    inputRef: an,
    open: Ne(rn)
  });
}
function Du(o, f) {
  switch (f.type) {
    case "focus":
      return ee(ee({}, o), {}, {
        isFocused: !0
      });
    case "blur":
      return ee(ee({}, o), {}, {
        isFocused: !1
      });
    case "openDialog":
      return ee(ee({}, va), {}, {
        isFileDialogActive: !0
      });
    case "closeDialog":
      return ee(ee({}, o), {}, {
        isFileDialogActive: !1
      });
    case "setDraggedFiles":
      var s = f.isDragActive, d = f.draggedFiles;
      return ee(ee({}, o), {}, {
        draggedFiles: d,
        isDragActive: s
      });
    case "setFiles":
      return ee(ee({}, o), {}, {
        acceptedFiles: f.acceptedFiles,
        fileRejections: f.fileRejections
      });
    case "reset":
      return ee({}, va);
    default:
      return o;
  }
}
function qa() {
}
var za = {}, Ca = {}, da = 34, It = 10, fa = 13;
function lr(o) {
  return new Function("d", "return {" + o.map(function(f, s) {
    return JSON.stringify(f) + ": d[" + s + '] || ""';
  }).join(",") + "}");
}
function Ru(o, f) {
  var s = lr(o);
  return function(d, b) {
    return f(s(d), b, o);
  };
}
function _a(o) {
  var f = /* @__PURE__ */ Object.create(null), s = [];
  return o.forEach(function(d) {
    for (var b in d)
      b in f || s.push(f[b] = b);
  }), s;
}
function Me(o, f) {
  var s = o + "", d = s.length;
  return d < f ? new Array(f - d + 1).join(0) + s : s;
}
function Nu(o) {
  return o < 0 ? "-" + Me(-o, 6) : o > 9999 ? "+" + Me(o, 6) : Me(o, 4);
}
function Tu(o) {
  var f = o.getUTCHours(), s = o.getUTCMinutes(), d = o.getUTCSeconds(), b = o.getUTCMilliseconds();
  return isNaN(o) ? "Invalid Date" : Nu(o.getUTCFullYear()) + "-" + Me(o.getUTCMonth() + 1, 2) + "-" + Me(o.getUTCDate(), 2) + (b ? "T" + Me(f, 2) + ":" + Me(s, 2) + ":" + Me(d, 2) + "." + Me(b, 3) + "Z" : d ? "T" + Me(f, 2) + ":" + Me(s, 2) + ":" + Me(d, 2) + "Z" : s || f ? "T" + Me(f, 2) + ":" + Me(s, 2) + "Z" : "");
}
function Pu(o) {
  var f = new RegExp('["' + o + `
\r]`), s = o.charCodeAt(0);
  function d(w, un) {
    var Rn, Cn, dn = b(w, function(xn, vn) {
      if (Rn)
        return Rn(xn, vn - 1);
      Cn = xn, Rn = un ? Ru(xn, un) : lr(xn);
    });
    return dn.columns = Cn || [], dn;
  }
  function b(w, un) {
    var Rn = [], Cn = w.length, dn = 0, xn = 0, vn, Fn = Cn <= 0, bn = !1;
    w.charCodeAt(Cn - 1) === It && --Cn, w.charCodeAt(Cn - 1) === fa && --Cn;
    function Jn() {
      if (Fn)
        return Ca;
      if (bn)
        return bn = !1, za;
      var An, ae = dn, zn;
      if (w.charCodeAt(ae) === da) {
        for (; dn++ < Cn && w.charCodeAt(dn) !== da || w.charCodeAt(++dn) === da; )
          ;
        return (An = dn) >= Cn ? Fn = !0 : (zn = w.charCodeAt(dn++)) === It ? bn = !0 : zn === fa && (bn = !0, w.charCodeAt(dn) === It && ++dn), w.slice(ae + 1, An - 1).replace(/""/g, '"');
      }
      for (; dn < Cn; ) {
        if ((zn = w.charCodeAt(An = dn++)) === It)
          bn = !0;
        else if (zn === fa)
          bn = !0, w.charCodeAt(dn) === It && ++dn;
        else if (zn !== s)
          continue;
        return w.slice(ae, An);
      }
      return Fn = !0, w.slice(ae, Cn);
    }
    for (; (vn = Jn()) !== Ca; ) {
      for (var Wn = []; vn !== za && vn !== Ca; )
        Wn.push(vn), vn = Jn();
      un && (Wn = un(Wn, xn++)) == null || Rn.push(Wn);
    }
    return Rn;
  }
  function P(w, un) {
    return w.map(function(Rn) {
      return un.map(function(Cn) {
        return En(Rn[Cn]);
      }).join(o);
    });
  }
  function y(w, un) {
    return un == null && (un = _a(w)), [un.map(En).join(o)].concat(P(w, un)).join(`
`);
  }
  function O(w, un) {
    return un == null && (un = _a(w)), P(w, un).join(`
`);
  }
  function Tn(w) {
    return w.map(M).join(`
`);
  }
  function M(w) {
    return w.map(En).join(o);
  }
  function En(w) {
    return w == null ? "" : w instanceof Date ? Tu(w) : f.test(w += "") ? '"' + w.replace(/"/g, '""') + '"' : w;
  }
  return {
    parse: d,
    parseRows: b,
    format: y,
    formatBody: O,
    formatRows: Tn,
    formatRow: M,
    formatValue: En
  };
}
var Eu = Pu(","), Iu = Eu.parse;
const kt = ({ children: o, className: f = "" }) => /* @__PURE__ */ l.createElement("div", { className: `tab-content ${f}` }, o), ku = (o) => {
  const { globalActive: f } = D.useContext(ct), s = D.useContext(Lt), d = (b) => {
    s({ type: "EDITOR_SET_GLOBALACTIVE", payload: b });
  };
  return /* @__PURE__ */ l.createElement(sr, { ...o, setActiveTab: d, activeTab: f });
}, Lu = ({ children: o, className: f = void 0, startingTab: s }) => {
  const [d, b] = D.useState(s);
  return /* @__PURE__ */ l.createElement(sr, { className: f, setActiveTab: b, activeTab: d }, o);
}, sr = ({ children: o, className: f, activeTab: s, setActiveTab: d }) => {
  const b = (O, Tn) => {
    O || d(Tn);
  };
  let P = "tabs";
  f && (P = `tabs ${f}`);
  const y = o.map(({ props: O }, Tn) => {
    let M = "nav-item", En = O.disableRule || !1;
    return En && (M += " disabled"), Tn === s && (M += " active"), /* @__PURE__ */ l.createElement("li", { onClick: () => b(En, Tn), key: O.title, className: M }, O.icon, O.title);
  });
  return /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("nav", { className: P }, /* @__PURE__ */ l.createElement("ul", { className: "nav nav-fill" }, y)), o[s]);
};
var Sa = { exports: {} }, Ao = { exports: {} }, Xa;
function Ou() {
  return Xa || (Xa = 1, function(o, f) {
    (function(s, d) {
      d(f, D);
    })(nr, function(s, d) {
      function b(n, r, i, c, v, g, h) {
        try {
          var R = n[g](h), T = R.value;
        } catch (E) {
          return void i(E);
        }
        R.done ? r(T) : Promise.resolve(T).then(c, v);
      }
      function P(n) {
        return function() {
          var r = this, i = arguments;
          return new Promise(function(c, v) {
            var g = n.apply(r, i);
            function h(T) {
              b(g, c, v, h, R, "next", T);
            }
            function R(T) {
              b(g, c, v, h, R, "throw", T);
            }
            h(void 0);
          });
        };
      }
      function y() {
        return (y = Object.assign || function(n) {
          for (var r = 1; r < arguments.length; r++) {
            var i = arguments[r];
            for (var c in i)
              Object.prototype.hasOwnProperty.call(i, c) && (n[c] = i[c]);
          }
          return n;
        }).apply(this, arguments);
      }
      function O(n, r) {
        if (n == null)
          return {};
        var i, c, v = {}, g = Object.keys(n);
        for (c = 0; c < g.length; c++)
          i = g[c], r.indexOf(i) >= 0 || (v[i] = n[i]);
        return v;
      }
      function Tn(n) {
        var r = function(i, c) {
          if (typeof i != "object" || i === null)
            return i;
          var v = i[Symbol.toPrimitive];
          if (v !== void 0) {
            var g = v.call(i, c || "default");
            if (typeof g != "object")
              return g;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (c === "string" ? String : Number)(i);
        }(n, "string");
        return typeof r == "symbol" ? r : String(r);
      }
      d = d && Object.prototype.hasOwnProperty.call(d, "default") ? d.default : d;
      var M = { init: "init" }, En = function(n) {
        var r = n.value;
        return r === void 0 ? "" : r;
      }, w = function() {
        return d.createElement(d.Fragment, null, " ");
      }, un = { Cell: En, width: 150, minWidth: 0, maxWidth: Number.MAX_SAFE_INTEGER };
      function Rn() {
        for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
          r[i] = arguments[i];
        return r.reduce(function(c, v) {
          var g = v.style, h = v.className;
          return c = y({}, c, {}, O(v, ["style", "className"])), g && (c.style = c.style ? y({}, c.style || {}, {}, g || {}) : g), h && (c.className = c.className ? c.className + " " + h : h), c.className === "" && delete c.className, c;
        }, {});
      }
      var Cn = function(n, r) {
        return r === void 0 && (r = {}), function(i) {
          return i === void 0 && (i = {}), [].concat(n, [i]).reduce(function(c, v) {
            return function g(h, R, T) {
              return typeof R == "function" ? g({}, R(h, T)) : Array.isArray(R) ? Rn.apply(void 0, [h].concat(R)) : Rn(h, R);
            }(c, v, y({}, r, { userProps: i }));
          }, {});
        };
      }, dn = function(n, r, i, c) {
        return i === void 0 && (i = {}), n.reduce(function(v, g) {
          return g(v, i);
        }, r);
      }, xn = function(n, r, i) {
        return i === void 0 && (i = {}), n.forEach(function(c) {
          c(r, i);
        });
      };
      function vn(n, r, i, c) {
        n.findIndex(function(v) {
          return v.pluginName === i;
        }), r.forEach(function(v) {
          n.findIndex(function(g) {
            return g.pluginName === v;
          });
        });
      }
      function Fn(n, r) {
        return typeof n == "function" ? n(r) : n;
      }
      function bn(n) {
        var r = d.useRef();
        return r.current = n, d.useCallback(function() {
          return r.current;
        }, []);
      }
      var Jn = typeof document < "u" ? d.useLayoutEffect : d.useEffect;
      function Wn(n, r) {
        var i = d.useRef(!1);
        Jn(function() {
          i.current && n(), i.current = !0;
        }, r);
      }
      function An(n, r, i) {
        return i === void 0 && (i = {}), function(c, v) {
          v === void 0 && (v = {});
          var g = typeof c == "string" ? r[c] : c;
          if (g === void 0)
            throw console.info(r), new Error("Renderer Error ☝️");
          return ae(g, y({}, n, { column: r }, i, {}, v));
        };
      }
      function ae(n, r) {
        return function(c) {
          return typeof c == "function" && (v = Object.getPrototypeOf(c)).prototype && v.prototype.isReactComponent;
          var v;
        }(i = n) || typeof i == "function" || function(c) {
          return typeof c == "object" && typeof c.$$typeof == "symbol" && ["react.memo", "react.forward_ref"].includes(c.$$typeof.description);
        }(i) ? d.createElement(n, r) : n;
        var i;
      }
      function zn(n, r, i) {
        return i === void 0 && (i = 0), n.map(function(c) {
          return fn(c = y({}, c, { parent: r, depth: i })), c.columns && (c.columns = zn(c.columns, c, i + 1)), c;
        });
      }
      function de(n) {
        return Pe(n, "columns");
      }
      function fn(n) {
        var r = n.id, i = n.accessor, c = n.Header;
        if (typeof i == "string") {
          r = r || i;
          var v = i.split(".");
          i = function(g) {
            return function(h, R, T) {
              if (!R)
                return h;
              var E, V = typeof R == "function" ? R : JSON.stringify(R), W = Qn.get(V) || function() {
                var G = function(k) {
                  return function F(X, U) {
                    if (U === void 0 && (U = []), Array.isArray(X))
                      for (var ln = 0; ln < X.length; ln += 1)
                        F(X[ln], U);
                    else
                      U.push(X);
                    return U;
                  }(k).map(function(F) {
                    return String(F).replace(".", "_");
                  }).join(".").replace(re, ".").replace(Oe, "").split(".");
                }(R);
                return Qn.set(V, G), G;
              }();
              try {
                E = W.reduce(function(G, k) {
                  return G[k];
                }, h);
              } catch {
              }
              return E !== void 0 ? E : T;
            }(g, v);
          };
        }
        if (!r && typeof c == "string" && c && (r = c), !r && n.columns)
          throw console.error(n), new Error('A column ID (or unique "Header" value) is required!');
        if (!r)
          throw console.error(n), new Error("A column ID (or string accessor) is required!");
        return Object.assign(n, { id: r, accessor: i }), n;
      }
      function an(n, r) {
        if (!r)
          throw new Error();
        return Object.assign(n, y({ Header: w, Footer: w }, un, {}, r, {}, n)), Object.assign(n, { originalWidth: n.width }), n;
      }
      function _n(n, r, i) {
        i === void 0 && (i = function() {
          return {};
        });
        for (var c = [], v = n, g = 0, h = function() {
          return g++;
        }, R = function() {
          var T = { headers: [] }, E = [], V = v.some(function(W) {
            return W.parent;
          });
          v.forEach(function(W) {
            var G, k = [].concat(E).reverse()[0];
            V && (W.parent ? G = y({}, W.parent, { originalId: W.parent.id, id: W.parent.id + "_" + h(), headers: [W] }, i(W)) : G = an(y({ originalId: W.id + "_placeholder", id: W.id + "_placeholder_" + h(), placeholderOf: W, headers: [W] }, i(W)), r), k && k.originalId === G.originalId ? k.headers.push(W) : E.push(G)), T.headers.push(W);
          }), c.push(T), v = E;
        }; v.length; )
          R();
        return c.reverse();
      }
      var Qn = /* @__PURE__ */ new Map();
      function Yn() {
        for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
          r[i] = arguments[i];
        for (var c = 0; c < r.length; c += 1)
          if (r[c] !== void 0)
            return r[c];
      }
      function ne(n) {
        if (typeof n == "function")
          return n;
      }
      function Pe(n, r) {
        var i = [];
        return function c(v) {
          v.forEach(function(g) {
            g[r] ? c(g[r]) : i.push(g);
          });
        }(n), i;
      }
      function Re(n, r) {
        var i = r.manualExpandedKey, c = r.expanded, v = r.expandSubRows, g = v === void 0 || v, h = [];
        return n.forEach(function(R) {
          return function T(E, V) {
            V === void 0 && (V = !0), E.isExpanded = E.original && E.original[i] || c[E.id], E.canExpand = E.subRows && !!E.subRows.length, V && h.push(E), E.subRows && E.subRows.length && E.isExpanded && E.subRows.forEach(function(W) {
              return T(W, g);
            });
          }(R);
        }), h;
      }
      function be(n, r, i) {
        return ne(n) || r[n] || i[n] || i.text;
      }
      function Ee(n, r, i) {
        return n ? n(r, i) : r === void 0;
      }
      function fe() {
        throw new Error("React-Table: You have not called prepareRow(row) one or more rows you are attempting to render.");
      }
      var me = null, re = /\[/g, Oe = /\]/g, Be = function(n) {
        return y({ role: "table" }, n);
      }, H = function(n) {
        return y({ role: "rowgroup" }, n);
      }, z = function(n, r) {
        var i = r.column;
        return y({ key: "header_" + i.id, colSpan: i.totalVisibleHeaderCount, role: "columnheader" }, n);
      }, rn = function(n, r) {
        var i = r.column;
        return y({ key: "footer_" + i.id, colSpan: i.totalVisibleHeaderCount }, n);
      }, en = function(n, r) {
        return y({ key: "headerGroup_" + r.index, role: "row" }, n);
      }, Vn = function(n, r) {
        return y({ key: "footerGroup_" + r.index }, n);
      }, jn = function(n, r) {
        return y({ key: "row_" + r.row.id, role: "row" }, n);
      }, we = function(n, r) {
        var i = r.cell;
        return y({ key: "cell_" + i.row.id + "_" + i.column.id, role: "cell" }, n);
      };
      function Ne() {
        return { useOptions: [], stateReducers: [], useControlledState: [], columns: [], columnsDeps: [], allColumns: [], allColumnsDeps: [], accessValue: [], materializedColumns: [], materializedColumnsDeps: [], useInstanceAfterData: [], visibleColumns: [], visibleColumnsDeps: [], headerGroups: [], headerGroupsDeps: [], useInstanceBeforeDimensions: [], useInstance: [], prepareRow: [], getTableProps: [Be], getTableBodyProps: [H], getHeaderGroupProps: [en], getFooterGroupProps: [Vn], getHeaderProps: [z], getFooterProps: [rn], getRowProps: [jn], getCellProps: [we], useFinalInstance: [] };
      }
      M.resetHiddenColumns = "resetHiddenColumns", M.toggleHideColumn = "toggleHideColumn", M.setHiddenColumns = "setHiddenColumns", M.toggleHideAllColumns = "toggleHideAllColumns";
      var Ae = function(n) {
        n.getToggleHiddenProps = [De], n.getToggleHideAllColumnsProps = [Ie], n.stateReducers.push(_e), n.useInstanceBeforeDimensions.push(pe), n.headerGroupsDeps.push(function(r, i) {
          var c = i.instance;
          return [].concat(r, [c.state.hiddenColumns]);
        }), n.useInstance.push(ye);
      };
      Ae.pluginName = "useColumnVisibility";
      var De = function(n, r) {
        var i = r.column;
        return [n, { onChange: function(c) {
          i.toggleHidden(!c.target.checked);
        }, style: { cursor: "pointer" }, checked: i.isVisible, title: "Toggle Column Visible" }];
      }, Ie = function(n, r) {
        var i = r.instance;
        return [n, { onChange: function(c) {
          i.toggleHideAllColumns(!c.target.checked);
        }, style: { cursor: "pointer" }, checked: !i.allColumnsHidden && !i.state.hiddenColumns.length, title: "Toggle All Columns Hidden", indeterminate: !i.allColumnsHidden && i.state.hiddenColumns.length }];
      };
      function _e(n, r, i, c) {
        if (r.type === M.init)
          return y({ hiddenColumns: [] }, n);
        if (r.type === M.resetHiddenColumns)
          return y({}, n, { hiddenColumns: c.initialState.hiddenColumns || [] });
        if (r.type === M.toggleHideColumn) {
          var v = (r.value !== void 0 ? r.value : !n.hiddenColumns.includes(r.columnId)) ? [].concat(n.hiddenColumns, [r.columnId]) : n.hiddenColumns.filter(function(g) {
            return g !== r.columnId;
          });
          return y({}, n, { hiddenColumns: v });
        }
        return r.type === M.setHiddenColumns ? y({}, n, { hiddenColumns: Fn(r.value, n.hiddenColumns) }) : r.type === M.toggleHideAllColumns ? y({}, n, { hiddenColumns: (r.value !== void 0 ? r.value : !n.hiddenColumns.length) ? c.allColumns.map(function(g) {
          return g.id;
        }) : [] }) : void 0;
      }
      function pe(n) {
        var r = n.headers, i = n.state.hiddenColumns;
        d.useRef(!1).current;
        var c = 0;
        r.forEach(function(v) {
          return c += function g(h, R) {
            h.isVisible = R && !i.includes(h.id);
            var T = 0;
            return h.headers && h.headers.length ? h.headers.forEach(function(E) {
              return T += g(E, h.isVisible);
            }) : T = h.isVisible ? 1 : 0, h.totalVisibleHeaderCount = T, T;
          }(v, !0);
        });
      }
      function ye(n) {
        var r = n.columns, i = n.flatHeaders, c = n.dispatch, v = n.allColumns, g = n.getHooks, h = n.state.hiddenColumns, R = n.autoResetHiddenColumns, T = R === void 0 || R, E = bn(n), V = v.length === h.length, W = d.useCallback(function(U, ln) {
          return c({ type: M.toggleHideColumn, columnId: U, value: ln });
        }, [c]), G = d.useCallback(function(U) {
          return c({ type: M.setHiddenColumns, value: U });
        }, [c]), k = d.useCallback(function(U) {
          return c({ type: M.toggleHideAllColumns, value: U });
        }, [c]), F = Cn(g().getToggleHideAllColumnsProps, { instance: E() });
        i.forEach(function(U) {
          U.toggleHidden = function(ln) {
            c({ type: M.toggleHideColumn, columnId: U.id, value: ln });
          }, U.getToggleHiddenProps = Cn(g().getToggleHiddenProps, { instance: E(), column: U });
        });
        var X = bn(T);
        Wn(function() {
          X() && c({ type: M.resetHiddenColumns });
        }, [c, r]), Object.assign(n, { allColumnsHidden: V, toggleHideColumn: W, setHiddenColumns: G, toggleHideAllColumns: k, getToggleHideAllColumnsProps: F });
      }
      var ve = {}, he = {}, Xe = function(n, r, i) {
        return n;
      }, Q = function(n, r) {
        return n.subRows || [];
      }, In = function(n, r, i) {
        return "" + (i ? [i.id, r].join(".") : r);
      }, te = function(n) {
        return n;
      };
      function ie(n) {
        var r = n.initialState, i = r === void 0 ? ve : r, c = n.defaultColumn, v = c === void 0 ? he : c, g = n.getSubRows, h = g === void 0 ? Q : g, R = n.getRowId, T = R === void 0 ? In : R, E = n.stateReducer, V = E === void 0 ? Xe : E, W = n.useControlledState, G = W === void 0 ? te : W;
        return y({}, O(n, ["initialState", "defaultColumn", "getSubRows", "getRowId", "stateReducer", "useControlledState"]), { initialState: i, defaultColumn: v, getSubRows: h, getRowId: T, stateReducer: V, useControlledState: G });
      }
      function ge(n, r) {
        r === void 0 && (r = 0);
        var i = 0, c = 0, v = 0, g = 0;
        return n.forEach(function(h) {
          var R = h.headers;
          if (h.totalLeft = r, R && R.length) {
            var T = ge(R, r), E = T[0], V = T[1], W = T[2], G = T[3];
            h.totalMinWidth = E, h.totalWidth = V, h.totalMaxWidth = W, h.totalFlexWidth = G;
          } else
            h.totalMinWidth = h.minWidth, h.totalWidth = Math.min(Math.max(h.minWidth, h.width), h.maxWidth), h.totalMaxWidth = h.maxWidth, h.totalFlexWidth = h.canResize ? h.totalWidth : 0;
          h.isVisible && (r += h.totalWidth, i += h.totalMinWidth, c += h.totalWidth, v += h.totalMaxWidth, g += h.totalFlexWidth);
        }), [i, c, v, g];
      }
      function He(n) {
        var r = n.data, i = n.rows, c = n.flatRows, v = n.rowsById, g = n.column, h = n.getRowId, R = n.getSubRows, T = n.accessValueHooks, E = n.getInstance;
        r.forEach(function(V, W) {
          return function G(k, F, X, U, ln) {
            X === void 0 && (X = 0);
            var kn = k, sn = h(k, F, U), K = v[sn];
            if (K)
              K.subRows && K.originalSubRows.forEach(function(nn, wn) {
                return G(nn, wn, X + 1, K);
              });
            else if ((K = { id: sn, original: kn, index: F, depth: X, cells: [{}] }).cells.map = fe, K.cells.filter = fe, K.cells.forEach = fe, K.cells[0].getCellProps = fe, K.values = {}, ln.push(K), c.push(K), v[sn] = K, K.originalSubRows = R(k, F), K.originalSubRows) {
              var Nn = [];
              K.originalSubRows.forEach(function(nn, wn) {
                return G(nn, wn, X + 1, K, Nn);
              }), K.subRows = Nn;
            }
            g.accessor && (K.values[g.id] = g.accessor(k, F, K, ln, r)), K.values[g.id] = dn(T, K.values[g.id], { row: K, column: g, instance: E() });
          }(V, W, 0, void 0, i);
        });
      }
      M.resetExpanded = "resetExpanded", M.toggleRowExpanded = "toggleRowExpanded", M.toggleAllRowsExpanded = "toggleAllRowsExpanded";
      var Te = function(n) {
        n.getToggleAllRowsExpandedProps = [Ye], n.getToggleRowExpandedProps = [je], n.stateReducers.push(Ue), n.useInstance.push(We), n.prepareRow.push(Je);
      };
      Te.pluginName = "useExpanded";
      var Ye = function(n, r) {
        var i = r.instance;
        return [n, { onClick: function(c) {
          i.toggleAllRowsExpanded();
        }, style: { cursor: "pointer" }, title: "Toggle All Rows Expanded" }];
      }, je = function(n, r) {
        var i = r.row;
        return [n, { onClick: function() {
          i.toggleRowExpanded();
        }, style: { cursor: "pointer" }, title: "Toggle Row Expanded" }];
      };
      function Ue(n, r, i, c) {
        if (r.type === M.init)
          return y({ expanded: {} }, n);
        if (r.type === M.resetExpanded)
          return y({}, n, { expanded: c.initialState.expanded || {} });
        if (r.type === M.toggleAllRowsExpanded) {
          var v = r.value, g = c.rowsById, h = Object.keys(g).length === Object.keys(n.expanded).length;
          if (v !== void 0 ? v : !h) {
            var R = {};
            return Object.keys(g).forEach(function(F) {
              R[F] = !0;
            }), y({}, n, { expanded: R });
          }
          return y({}, n, { expanded: {} });
        }
        if (r.type === M.toggleRowExpanded) {
          var T, E = r.id, V = r.value, W = n.expanded[E], G = V !== void 0 ? V : !W;
          if (!W && G)
            return y({}, n, { expanded: y({}, n.expanded, (T = {}, T[E] = !0, T)) });
          if (W && !G) {
            var k = n.expanded;
            return k[E], y({}, n, { expanded: O(k, [E].map(Tn)) });
          }
          return n;
        }
      }
      function We(n) {
        var r = n.data, i = n.rows, c = n.rowsById, v = n.manualExpandedKey, g = v === void 0 ? "expanded" : v, h = n.paginateExpandedRows, R = h === void 0 || h, T = n.expandSubRows, E = T === void 0 || T, V = n.autoResetExpanded, W = V === void 0 || V, G = n.getHooks, k = n.plugins, F = n.state.expanded, X = n.dispatch;
        vn(k, ["useSortBy", "useGroupBy", "usePivotColumns", "useGlobalFilter"], "useExpanded");
        var U = bn(W), ln = !!(Object.keys(c).length && Object.keys(F).length);
        ln && Object.keys(c).some(function(Gn) {
          return !F[Gn];
        }) && (ln = !1), Wn(function() {
          U() && X({ type: M.resetExpanded });
        }, [X, r]);
        var kn = d.useCallback(function(Gn, pn) {
          X({ type: M.toggleRowExpanded, id: Gn, value: pn });
        }, [X]), sn = d.useCallback(function(Gn) {
          return X({ type: M.toggleAllRowsExpanded, value: Gn });
        }, [X]), K = d.useMemo(function() {
          return R ? Re(i, { manualExpandedKey: g, expanded: F, expandSubRows: E }) : i;
        }, [R, i, g, F, E]), Nn = d.useMemo(function() {
          return function(Gn) {
            var pn = 0;
            return Object.keys(Gn).forEach(function(hn) {
              var qn = hn.split(".");
              pn = Math.max(pn, qn.length);
            }), pn;
          }(F);
        }, [F]), nn = bn(n), wn = Cn(G().getToggleAllRowsExpandedProps, { instance: nn() });
        Object.assign(n, { preExpandedRows: i, expandedRows: K, rows: K, expandedDepth: Nn, isAllRowsExpanded: ln, toggleRowExpanded: kn, toggleAllRowsExpanded: sn, getToggleAllRowsExpandedProps: wn });
      }
      function Je(n, r) {
        var i = r.instance.getHooks, c = r.instance;
        n.toggleRowExpanded = function(v) {
          return c.toggleRowExpanded(n.id, v);
        }, n.getToggleRowExpandedProps = Cn(i().getToggleRowExpandedProps, { instance: c, row: n });
      }
      var Ge = function(n, r, i) {
        return n = n.filter(function(c) {
          return r.some(function(v) {
            var g = c.values[v];
            return String(g).toLowerCase().includes(String(i).toLowerCase());
          });
        });
      };
      Ge.autoRemove = function(n) {
        return !n;
      };
      var xe = function(n, r, i) {
        return n.filter(function(c) {
          return r.some(function(v) {
            var g = c.values[v];
            return g === void 0 || String(g).toLowerCase() === String(i).toLowerCase();
          });
        });
      };
      xe.autoRemove = function(n) {
        return !n;
      };
      var Fe = function(n, r, i) {
        return n.filter(function(c) {
          return r.some(function(v) {
            var g = c.values[v];
            return g === void 0 || String(g) === String(i);
          });
        });
      };
      Fe.autoRemove = function(n) {
        return !n;
      };
      var at = function(n, r, i) {
        return n.filter(function(c) {
          return r.some(function(v) {
            return c.values[v].includes(i);
          });
        });
      };
      at.autoRemove = function(n) {
        return !n || !n.length;
      };
      var dt = function(n, r, i) {
        return n.filter(function(c) {
          return r.some(function(v) {
            var g = c.values[v];
            return g && g.length && i.every(function(h) {
              return g.includes(h);
            });
          });
        });
      };
      dt.autoRemove = function(n) {
        return !n || !n.length;
      };
      var Bt = function(n, r, i) {
        return n.filter(function(c) {
          return r.some(function(v) {
            var g = c.values[v];
            return g && g.length && i.some(function(h) {
              return g.includes(h);
            });
          });
        });
      };
      Bt.autoRemove = function(n) {
        return !n || !n.length;
      };
      var ft = function(n, r, i) {
        return n.filter(function(c) {
          return r.some(function(v) {
            var g = c.values[v];
            return i.includes(g);
          });
        });
      };
      ft.autoRemove = function(n) {
        return !n || !n.length;
      };
      var Ht = function(n, r, i) {
        return n.filter(function(c) {
          return r.some(function(v) {
            return c.values[v] === i;
          });
        });
      };
      Ht.autoRemove = function(n) {
        return n === void 0;
      };
      var Ft = function(n, r, i) {
        return n.filter(function(c) {
          return r.some(function(v) {
            return c.values[v] == i;
          });
        });
      };
      Ft.autoRemove = function(n) {
        return n == null;
      };
      var Wt = function(n, r, i) {
        var c = i || [], v = c[0], g = c[1];
        if ((v = typeof v == "number" ? v : -1 / 0) > (g = typeof g == "number" ? g : 1 / 0)) {
          var h = v;
          v = g, g = h;
        }
        return n.filter(function(R) {
          return r.some(function(T) {
            var E = R.values[T];
            return E >= v && E <= g;
          });
        });
      };
      Wt.autoRemove = function(n) {
        return !n || typeof n[0] != "number" && typeof n[1] != "number";
      };
      var $e = Object.freeze({ __proto__: null, text: Ge, exactText: xe, exactTextCase: Fe, includes: at, includesAll: dt, includesSome: Bt, includesValue: ft, exact: Ht, equals: Ft, between: Wt });
      M.resetFilters = "resetFilters", M.setFilter = "setFilter", M.setAllFilters = "setAllFilters";
      var Gt = function(n) {
        n.stateReducers.push(ko), n.useInstance.push(xt);
      };
      function ko(n, r, i, c) {
        if (r.type === M.init)
          return y({ filters: [] }, n);
        if (r.type === M.resetFilters)
          return y({}, n, { filters: c.initialState.filters || [] });
        if (r.type === M.setFilter) {
          var v = r.columnId, g = r.filterValue, h = c.allColumns, R = c.filterTypes, T = h.find(function(X) {
            return X.id === v;
          });
          if (!T)
            throw new Error("React-Table: Could not find a column with id: " + v);
          var E = be(T.filter, R || {}, $e), V = n.filters.find(function(X) {
            return X.id === v;
          }), W = Fn(g, V && V.value);
          return Ee(E.autoRemove, W, T) ? y({}, n, { filters: n.filters.filter(function(X) {
            return X.id !== v;
          }) }) : y({}, n, V ? { filters: n.filters.map(function(X) {
            return X.id === v ? { id: v, value: W } : X;
          }) } : { filters: [].concat(n.filters, [{ id: v, value: W }]) });
        }
        if (r.type === M.setAllFilters) {
          var G = r.filters, k = c.allColumns, F = c.filterTypes;
          return y({}, n, { filters: Fn(G, n.filters).filter(function(X) {
            var U = k.find(function(ln) {
              return ln.id === X.id;
            });
            return !Ee(be(U.filter, F || {}, $e).autoRemove, X.value, U);
          }) });
        }
      }
      function xt(n) {
        var r = n.data, i = n.rows, c = n.flatRows, v = n.rowsById, g = n.allColumns, h = n.filterTypes, R = n.manualFilters, T = n.defaultCanFilter, E = T !== void 0 && T, V = n.disableFilters, W = n.state.filters, G = n.dispatch, k = n.autoResetFilters, F = k === void 0 || k, X = d.useCallback(function(nn, wn) {
          G({ type: M.setFilter, columnId: nn, filterValue: wn });
        }, [G]), U = d.useCallback(function(nn) {
          G({ type: M.setAllFilters, filters: nn });
        }, [G]);
        g.forEach(function(nn) {
          var wn = nn.id, Gn = nn.accessor, pn = nn.defaultCanFilter, hn = nn.disableFilters;
          nn.canFilter = Gn ? Yn(hn !== !0 && void 0, V !== !0 && void 0, !0) : Yn(pn, E, !1), nn.setFilter = function(Dn) {
            return X(nn.id, Dn);
          };
          var qn = W.find(function(Dn) {
            return Dn.id === wn;
          });
          nn.filterValue = qn && qn.value;
        });
        var ln = d.useMemo(function() {
          if (R || !W.length)
            return [i, c, v];
          var nn = [], wn = {};
          return [function Gn(pn, hn) {
            hn === void 0 && (hn = 0);
            var qn = pn;
            return (qn = W.reduce(function(Dn, Kn) {
              var e = Kn.id, t = Kn.value, u = g.find(function(p) {
                return p.id === e;
              });
              if (!u)
                return Dn;
              hn === 0 && (u.preFilteredRows = Dn);
              var a = be(u.filter, h || {}, $e);
              return a ? (u.filteredRows = a(Dn, [e], t), u.filteredRows) : (console.warn("Could not find a valid 'column.filter' for column with the ID: " + u.id + "."), Dn);
            }, pn)).forEach(function(Dn) {
              nn.push(Dn), wn[Dn.id] = Dn, Dn.subRows && (Dn.subRows = Dn.subRows && Dn.subRows.length > 0 ? Gn(Dn.subRows, hn + 1) : Dn.subRows);
            }), qn;
          }(i), nn, wn];
        }, [R, W, i, c, v, g, h]), kn = ln[0], sn = ln[1], K = ln[2];
        d.useMemo(function() {
          g.filter(function(nn) {
            return !W.find(function(wn) {
              return wn.id === nn.id;
            });
          }).forEach(function(nn) {
            nn.preFilteredRows = kn, nn.filteredRows = kn;
          });
        }, [kn, W, g]);
        var Nn = bn(F);
        Wn(function() {
          Nn() && G({ type: M.resetFilters });
        }, [G, R ? null : r]), Object.assign(n, { preFilteredRows: i, preFilteredFlatRows: c, preFilteredRowsById: v, filteredRows: kn, filteredFlatRows: sn, filteredRowsById: K, rows: kn, flatRows: sn, rowsById: K, setFilter: X, setAllFilters: U });
      }
      Gt.pluginName = "useFilters", M.resetGlobalFilter = "resetGlobalFilter", M.setGlobalFilter = "setGlobalFilter";
      var pt = function(n) {
        n.stateReducers.push(Vt), n.useInstance.push(Kt);
      };
      function Vt(n, r, i, c) {
        if (r.type === M.resetGlobalFilter)
          return y({}, n, { globalFilter: c.initialState.globalFilter || void 0 });
        if (r.type === M.setGlobalFilter) {
          var v = r.filterValue, g = c.userFilterTypes, h = be(c.globalFilter, g || {}, $e), R = Fn(v, n.globalFilter);
          return Ee(h.autoRemove, R) ? (n.globalFilter, O(n, ["globalFilter"])) : y({}, n, { globalFilter: R });
        }
      }
      function Kt(n) {
        var r = n.data, i = n.rows, c = n.flatRows, v = n.rowsById, g = n.allColumns, h = n.filterTypes, R = n.globalFilter, T = n.manualGlobalFilter, E = n.state.globalFilter, V = n.dispatch, W = n.autoResetGlobalFilter, G = W === void 0 || W, k = n.disableGlobalFilter, F = d.useCallback(function(K) {
          V({ type: M.setGlobalFilter, filterValue: K });
        }, [V]), X = d.useMemo(function() {
          if (T || E === void 0)
            return [i, c, v];
          var K = [], Nn = {}, nn = be(R, h || {}, $e);
          if (!nn)
            return console.warn("Could not find a valid 'globalFilter' option."), i;
          g.forEach(function(Gn) {
            var pn = Gn.disableGlobalFilter;
            Gn.canFilter = Yn(pn !== !0 && void 0, k !== !0 && void 0, !0);
          });
          var wn = g.filter(function(Gn) {
            return Gn.canFilter === !0;
          });
          return [function Gn(pn) {
            return (pn = nn(pn, wn.map(function(hn) {
              return hn.id;
            }), E)).forEach(function(hn) {
              K.push(hn), Nn[hn.id] = hn, hn.subRows = hn.subRows && hn.subRows.length ? Gn(hn.subRows) : hn.subRows;
            }), pn;
          }(i), K, Nn];
        }, [T, E, R, h, g, i, c, v, k]), U = X[0], ln = X[1], kn = X[2], sn = bn(G);
        Wn(function() {
          sn() && V({ type: M.resetGlobalFilter });
        }, [V, T ? null : r]), Object.assign(n, { preGlobalFilteredRows: i, preGlobalFilteredFlatRows: c, preGlobalFilteredRowsById: v, globalFilteredRows: U, globalFilteredFlatRows: ln, globalFilteredRowsById: kn, rows: U, flatRows: ln, rowsById: kn, setGlobalFilter: F, disableGlobalFilter: k });
      }
      function gt(n, r) {
        return r.reduce(function(i, c) {
          return i + (typeof c == "number" ? c : 0);
        }, 0);
      }
      pt.pluginName = "useGlobalFilter";
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
        return n.forEach(function(c) {
          typeof c == "number" && (r = Math.min(r, c), i = Math.max(i, c));
        }), r + ".." + i;
      }, average: function(n) {
        return gt(0, n) / n.length;
      }, median: function(n) {
        if (!n.length)
          return null;
        var r = Math.floor(n.length / 2), i = [].concat(n).sort(function(c, v) {
          return c - v;
        });
        return n.length % 2 != 0 ? i[r] : (i[r - 1] + i[r]) / 2;
      }, unique: function(n) {
        return Array.from(new Set(n).values());
      }, uniqueCount: function(n) {
        return new Set(n).size;
      }, count: function(n) {
        return n.length;
      } }), qt = [], zt = {};
      M.resetGroupBy = "resetGroupBy", M.setGroupBy = "setGroupBy", M.toggleGroupBy = "toggleGroupBy";
      var vt = function(n) {
        n.getGroupByToggleProps = [_t], n.stateReducers.push(Ze), n.visibleColumnsDeps.push(function(r, i) {
          var c = i.instance;
          return [].concat(r, [c.state.groupBy]);
        }), n.visibleColumns.push(Xt), n.useInstance.push(Oo), n.prepareRow.push(Yt);
      };
      vt.pluginName = "useGroupBy";
      var _t = function(n, r) {
        var i = r.header;
        return [n, { onClick: i.canGroupBy ? function(c) {
          c.persist(), i.toggleGroupBy();
        } : void 0, style: { cursor: i.canGroupBy ? "pointer" : void 0 }, title: "Toggle GroupBy" }];
      };
      function Ze(n, r, i, c) {
        if (r.type === M.init)
          return y({ groupBy: [] }, n);
        if (r.type === M.resetGroupBy)
          return y({}, n, { groupBy: c.initialState.groupBy || [] });
        if (r.type === M.setGroupBy)
          return y({}, n, { groupBy: r.value });
        if (r.type === M.toggleGroupBy) {
          var v = r.columnId, g = r.value, h = g !== void 0 ? g : !n.groupBy.includes(v);
          return y({}, n, h ? { groupBy: [].concat(n.groupBy, [v]) } : { groupBy: n.groupBy.filter(function(R) {
            return R !== v;
          }) });
        }
      }
      function Xt(n, r) {
        var i = r.instance.state.groupBy, c = i.map(function(g) {
          return n.find(function(h) {
            return h.id === g;
          });
        }).filter(Boolean), v = n.filter(function(g) {
          return !i.includes(g.id);
        });
        return (n = [].concat(c, v)).forEach(function(g) {
          g.isGrouped = i.includes(g.id), g.groupedIndex = i.indexOf(g.id);
        }), n;
      }
      var Lo = {};
      function Oo(n) {
        var r = n.data, i = n.rows, c = n.flatRows, v = n.rowsById, g = n.allColumns, h = n.flatHeaders, R = n.groupByFn, T = R === void 0 ? jt : R, E = n.manualGroupBy, V = n.aggregations, W = V === void 0 ? Lo : V, G = n.plugins, k = n.state.groupBy, F = n.dispatch, X = n.autoResetGroupBy, U = X === void 0 || X, ln = n.disableGroupBy, kn = n.defaultCanGroupBy, sn = n.getHooks;
        vn(G, ["useColumnOrder", "useFilters"], "useGroupBy");
        var K = bn(n);
        g.forEach(function(u) {
          var a = u.accessor, p = u.defaultGroupBy, m = u.disableGroupBy;
          u.canGroupBy = a ? Yn(u.canGroupBy, m !== !0 && void 0, ln !== !0 && void 0, !0) : Yn(u.canGroupBy, p, kn, !1), u.canGroupBy && (u.toggleGroupBy = function() {
            return n.toggleGroupBy(u.id);
          }), u.Aggregated = u.Aggregated || u.Cell;
        });
        var Nn = d.useCallback(function(u, a) {
          F({ type: M.toggleGroupBy, columnId: u, value: a });
        }, [F]), nn = d.useCallback(function(u) {
          F({ type: M.setGroupBy, value: u });
        }, [F]);
        h.forEach(function(u) {
          u.getGroupByToggleProps = Cn(sn().getGroupByToggleProps, { instance: K(), header: u });
        });
        var wn = d.useMemo(function() {
          if (E || !k.length)
            return [i, c, v, qt, zt, c, v];
          var u = k.filter(function(I) {
            return g.find(function(q) {
              return q.id === I;
            });
          }), a = [], p = {}, m = [], C = {}, S = [], A = {}, N = function I(q, B, x) {
            if (B === void 0 && (B = 0), B === u.length)
              return q.map(function(Z) {
                return y({}, Z, { depth: B });
              });
            var _ = u[B], L = T(q, _);
            return Object.entries(L).map(function(Z, yn) {
              var mn = Z[0], j = Z[1], Pn = _ + ":" + mn, Hn = I(j, B + 1, Pn = x ? x + ">" + Pn : Pn), J = B ? Pe(j, "leafRows") : j, Y = function(cn, Ln, On) {
                var Xn = {};
                return g.forEach(function(tn) {
                  if (u.includes(tn.id))
                    Xn[tn.id] = Ln[0] ? Ln[0].values[tn.id] : null;
                  else {
                    var le = typeof tn.aggregate == "function" ? tn.aggregate : W[tn.aggregate] || mt[tn.aggregate];
                    if (le) {
                      var Bn = Ln.map(function(Mn) {
                        return Mn.values[tn.id];
                      }), Sn = cn.map(function(Mn) {
                        var Un = Mn.values[tn.id];
                        if (!On && tn.aggregateValue) {
                          var ce = typeof tn.aggregateValue == "function" ? tn.aggregateValue : W[tn.aggregateValue] || mt[tn.aggregateValue];
                          if (!ce)
                            throw console.info({ column: tn }), new Error("React Table: Invalid column.aggregateValue option for column listed above");
                          Un = ce(Un, Mn, tn);
                        }
                        return Un;
                      });
                      Xn[tn.id] = le(Sn, Bn);
                    } else {
                      if (tn.aggregate)
                        throw console.info({ column: tn }), new Error("React Table: Invalid column.aggregate option for column listed above");
                      Xn[tn.id] = null;
                    }
                  }
                }), Xn;
              }(J, j, B), $ = { id: Pn, isGrouped: !0, groupByID: _, groupByVal: mn, values: Y, subRows: Hn, leafRows: J, depth: B, index: yn };
              return Hn.forEach(function(cn) {
                a.push(cn), p[cn.id] = cn, cn.isGrouped ? (m.push(cn), C[cn.id] = cn) : (S.push(cn), A[cn.id] = cn);
              }), $;
            });
          }(i);
          return N.forEach(function(I) {
            a.push(I), p[I.id] = I, I.isGrouped ? (m.push(I), C[I.id] = I) : (S.push(I), A[I.id] = I);
          }), [N, a, p, m, C, S, A];
        }, [E, k, i, c, v, g, W, T]), Gn = wn[0], pn = wn[1], hn = wn[2], qn = wn[3], Dn = wn[4], Kn = wn[5], e = wn[6], t = bn(U);
        Wn(function() {
          t() && F({ type: M.resetGroupBy });
        }, [F, E ? null : r]), Object.assign(n, { preGroupedRows: i, preGroupedFlatRow: c, preGroupedRowsById: v, groupedRows: Gn, groupedFlatRows: pn, groupedRowsById: hn, onlyGroupedFlatRows: qn, onlyGroupedRowsById: Dn, nonGroupedFlatRows: Kn, nonGroupedRowsById: e, rows: Gn, flatRows: pn, rowsById: hn, toggleGroupBy: Nn, setGroupBy: nn });
      }
      function Yt(n) {
        n.allCells.forEach(function(r) {
          var i;
          r.isGrouped = r.column.isGrouped && r.column.id === n.groupByID, r.isPlaceholder = !r.isGrouped && r.column.isGrouped, r.isAggregated = !r.isGrouped && !r.isPlaceholder && ((i = n.subRows) == null ? void 0 : i.length);
        });
      }
      function jt(n, r) {
        return n.reduce(function(i, c, v) {
          var g = "" + c.values[r];
          return i[g] = Array.isArray(i[g]) ? i[g] : [], i[g].push(c), i;
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
        var c = Qe(n, r, i), v = c[0], g = c[1];
        for (v = Jt(v), g = Jt(g), v = v.split(Ut).filter(Boolean), g = g.split(Ut).filter(Boolean); v.length && g.length; ) {
          var h = v.shift(), R = g.shift(), T = parseInt(h, 10), E = parseInt(R, 10), V = [T, E].sort();
          if (isNaN(V[0])) {
            if (h > R)
              return 1;
            if (R > h)
              return -1;
          } else {
            if (isNaN(V[1]))
              return isNaN(T) ? -1 : 1;
            if (T > E)
              return 1;
            if (E > T)
              return -1;
          }
        }
        return v.length - g.length;
      }, datetime: function(n, r, i) {
        var c = Qe(n, r, i), v = c[0], g = c[1];
        return rt(v = v.getTime(), g = g.getTime());
      }, basic: function(n, r, i) {
        var c = Qe(n, r, i);
        return rt(c[0], c[1]);
      }, string: function(n, r, i) {
        var c = Qe(n, r, i), v = c[0], g = c[1];
        for (v = v.split("").filter(Boolean), g = g.split("").filter(Boolean); v.length && g.length; ) {
          var h = v.shift(), R = g.shift(), T = h.toLowerCase(), E = R.toLowerCase();
          if (T > E)
            return 1;
          if (E > T)
            return -1;
          if (h > R)
            return 1;
          if (R > h)
            return -1;
        }
        return v.length - g.length;
      }, number: function(n, r, i) {
        var c = Qe(n, r, i), v = c[0], g = c[1], h = /[^0-9.]/gi;
        return rt(v = Number(String(v).replace(h, "")), g = Number(String(g).replace(h, "")));
      } });
      M.resetSortBy = "resetSortBy", M.setSortBy = "setSortBy", M.toggleSortBy = "toggleSortBy", M.clearSortBy = "clearSortBy", un.sortType = "alphanumeric", un.sortDescFirst = !1;
      var $t = function(n) {
        n.getSortByToggleProps = [Ho], n.stateReducers.push(Fo), n.useInstance.push(Wo);
      };
      $t.pluginName = "useSortBy";
      var Ho = function(n, r) {
        var i = r.instance, c = r.column, v = i.isMultiSortEvent, g = v === void 0 ? function(h) {
          return h.shiftKey;
        } : v;
        return [n, { onClick: c.canSort ? function(h) {
          h.persist(), c.toggleSortBy(void 0, !i.disableMultiSort && g(h));
        } : void 0, style: { cursor: c.canSort ? "pointer" : void 0 }, title: c.canSort ? "Toggle SortBy" : void 0 }];
      };
      function Fo(n, r, i, c) {
        if (r.type === M.init)
          return y({ sortBy: [] }, n);
        if (r.type === M.resetSortBy)
          return y({}, n, { sortBy: c.initialState.sortBy || [] });
        if (r.type === M.clearSortBy)
          return y({}, n, { sortBy: n.sortBy.filter(function(K) {
            return K.id !== r.columnId;
          }) });
        if (r.type === M.setSortBy)
          return y({}, n, { sortBy: r.sortBy });
        if (r.type === M.toggleSortBy) {
          var v, g = r.columnId, h = r.desc, R = r.multi, T = c.allColumns, E = c.disableMultiSort, V = c.disableSortRemove, W = c.disableMultiRemove, G = c.maxMultiSortColCount, k = G === void 0 ? Number.MAX_SAFE_INTEGER : G, F = n.sortBy, X = T.find(function(K) {
            return K.id === g;
          }).sortDescFirst, U = F.find(function(K) {
            return K.id === g;
          }), ln = F.findIndex(function(K) {
            return K.id === g;
          }), kn = h != null, sn = [];
          return (v = !E && R ? U ? "toggle" : "add" : ln !== F.length - 1 || F.length !== 1 ? "replace" : U ? "toggle" : "replace") != "toggle" || V || kn || R && W || !(U && U.desc && !X || !U.desc && X) || (v = "remove"), v === "replace" ? sn = [{ id: g, desc: kn ? h : X }] : v === "add" ? (sn = [].concat(F, [{ id: g, desc: kn ? h : X }])).splice(0, sn.length - k) : v === "toggle" ? sn = F.map(function(K) {
            return K.id === g ? y({}, K, { desc: kn ? h : !U.desc }) : K;
          }) : v === "remove" && (sn = F.filter(function(K) {
            return K.id !== g;
          })), y({}, n, { sortBy: sn });
        }
      }
      function Wo(n) {
        var r = n.data, i = n.rows, c = n.flatRows, v = n.allColumns, g = n.orderByFn, h = g === void 0 ? Zt : g, R = n.sortTypes, T = n.manualSortBy, E = n.defaultCanSort, V = n.disableSortBy, W = n.flatHeaders, G = n.state.sortBy, k = n.dispatch, F = n.plugins, X = n.getHooks, U = n.autoResetSortBy, ln = U === void 0 || U;
        vn(F, ["useFilters", "useGlobalFilter", "useGroupBy", "usePivotColumns"], "useSortBy");
        var kn = d.useCallback(function(pn) {
          k({ type: M.setSortBy, sortBy: pn });
        }, [k]), sn = d.useCallback(function(pn, hn, qn) {
          k({ type: M.toggleSortBy, columnId: pn, desc: hn, multi: qn });
        }, [k]), K = bn(n);
        W.forEach(function(pn) {
          var hn = pn.accessor, qn = pn.canSort, Dn = pn.disableSortBy, Kn = pn.id, e = hn ? Yn(Dn !== !0 && void 0, V !== !0 && void 0, !0) : Yn(E, qn, !1);
          pn.canSort = e, pn.canSort && (pn.toggleSortBy = function(u, a) {
            return sn(pn.id, u, a);
          }, pn.clearSortBy = function() {
            k({ type: M.clearSortBy, columnId: pn.id });
          }), pn.getSortByToggleProps = Cn(X().getSortByToggleProps, { instance: K(), column: pn });
          var t = G.find(function(u) {
            return u.id === Kn;
          });
          pn.isSorted = !!t, pn.sortedIndex = G.findIndex(function(u) {
            return u.id === Kn;
          }), pn.isSortedDesc = pn.isSorted ? t.desc : void 0;
        });
        var Nn = d.useMemo(function() {
          if (T || !G.length)
            return [i, c];
          var pn = [], hn = G.filter(function(qn) {
            return v.find(function(Dn) {
              return Dn.id === qn.id;
            });
          });
          return [function qn(Dn) {
            var Kn = h(Dn, hn.map(function(e) {
              var t = v.find(function(p) {
                return p.id === e.id;
              });
              if (!t)
                throw new Error("React-Table: Could not find a column with id: " + e.id + " while sorting");
              var u = t.sortType, a = ne(u) || (R || {})[u] || Bo[u];
              if (!a)
                throw new Error("React-Table: Could not find a valid sortType of '" + u + "' for column '" + e.id + "'.");
              return function(p, m) {
                return a(p, m, e.id, e.desc);
              };
            }), hn.map(function(e) {
              var t = v.find(function(u) {
                return u.id === e.id;
              });
              return t && t.sortInverted ? e.desc : !e.desc;
            }));
            return Kn.forEach(function(e) {
              pn.push(e), e.subRows && e.subRows.length !== 0 && (e.subRows = qn(e.subRows));
            }), Kn;
          }(i), pn];
        }, [T, G, i, c, v, h, R]), nn = Nn[0], wn = Nn[1], Gn = bn(ln);
        Wn(function() {
          Gn() && k({ type: M.resetSortBy });
        }, [T ? null : r]), Object.assign(n, { preSortedRows: i, preSortedFlatRows: c, sortedRows: nn, sortedFlatRows: wn, rows: nn, flatRows: wn, setSortBy: kn, toggleSortBy: sn });
      }
      function Zt(n, r, i) {
        return [].concat(n).sort(function(c, v) {
          for (var g = 0; g < r.length; g += 1) {
            var h = r[g], R = i[g] === !1 || i[g] === "desc", T = h(c, v);
            if (T !== 0)
              return R ? -T : T;
          }
          return i[0] ? c.index - v.index : v.index - c.index;
        });
      }
      M.resetPage = "resetPage", M.gotoPage = "gotoPage", M.setPageSize = "setPageSize";
      var ht = function(n) {
        n.stateReducers.push(Go), n.useInstance.push(xo);
      };
      function Go(n, r, i, c) {
        if (r.type === M.init)
          return y({ pageSize: 10, pageIndex: 0 }, n);
        if (r.type === M.resetPage)
          return y({}, n, { pageIndex: c.initialState.pageIndex || 0 });
        if (r.type === M.gotoPage) {
          var v = c.pageCount, g = c.page, h = Fn(r.pageIndex, n.pageIndex), R = !1;
          return h > n.pageIndex ? R = v === -1 ? g.length >= n.pageSize : h < v : h < n.pageIndex && (R = h > -1), R ? y({}, n, { pageIndex: h }) : n;
        }
        if (r.type === M.setPageSize) {
          var T = r.pageSize, E = n.pageSize * n.pageIndex;
          return y({}, n, { pageIndex: Math.floor(E / T), pageSize: T });
        }
      }
      function xo(n) {
        var r = n.rows, i = n.autoResetPage, c = i === void 0 || i, v = n.manualExpandedKey, g = v === void 0 ? "expanded" : v, h = n.plugins, R = n.pageCount, T = n.paginateExpandedRows, E = T === void 0 || T, V = n.expandSubRows, W = V === void 0 || V, G = n.state, k = G.pageSize, F = G.pageIndex, X = G.expanded, U = G.globalFilter, ln = G.filters, kn = G.groupBy, sn = G.sortBy, K = n.dispatch, Nn = n.data, nn = n.manualPagination;
        vn(h, ["useGlobalFilter", "useFilters", "useGroupBy", "useSortBy", "useExpanded"], "usePagination");
        var wn = bn(c);
        Wn(function() {
          wn() && K({ type: M.resetPage });
        }, [K, nn ? null : Nn, U, ln, kn, sn]);
        var Gn = nn ? R : Math.ceil(r.length / k), pn = d.useMemo(function() {
          return Gn > 0 ? [].concat(new Array(Gn)).fill(null).map(function(a, p) {
            return p;
          }) : [];
        }, [Gn]), hn = d.useMemo(function() {
          var a;
          if (nn)
            a = r;
          else {
            var p = k * F, m = p + k;
            a = r.slice(p, m);
          }
          return E ? a : Re(a, { manualExpandedKey: g, expanded: X, expandSubRows: W });
        }, [W, X, g, nn, F, k, E, r]), qn = F > 0, Dn = Gn === -1 ? hn.length >= k : F < Gn - 1, Kn = d.useCallback(function(a) {
          K({ type: M.gotoPage, pageIndex: a });
        }, [K]), e = d.useCallback(function() {
          return Kn(function(a) {
            return a - 1;
          });
        }, [Kn]), t = d.useCallback(function() {
          return Kn(function(a) {
            return a + 1;
          });
        }, [Kn]), u = d.useCallback(function(a) {
          K({ type: M.setPageSize, pageSize: a });
        }, [K]);
        Object.assign(n, { pageOptions: pn, pageCount: Gn, page: hn, canPreviousPage: qn, canNextPage: Dn, gotoPage: Kn, previousPage: e, nextPage: t, setPageSize: u });
      }
      ht.pluginName = "usePagination", M.resetPivot = "resetPivot", M.togglePivot = "togglePivot";
      var St = function(n) {
        n.getPivotToggleProps = [Vo], n.stateReducers.push(Ko), n.useInstanceAfterData.push(qo), n.allColumns.push(zo), n.accessValue.push(_o), n.materializedColumns.push(no), n.materializedColumnsDeps.push(eo), n.visibleColumns.push(Xo), n.visibleColumnsDeps.push(Yo), n.useInstance.push(jo), n.prepareRow.push(Uo);
      };
      St.pluginName = "usePivotColumns";
      var Qt = [], Vo = function(n, r) {
        var i = r.header;
        return [n, { onClick: i.canPivot ? function(c) {
          c.persist(), i.togglePivot();
        } : void 0, style: { cursor: i.canPivot ? "pointer" : void 0 }, title: "Toggle Pivot" }];
      };
      function Ko(n, r, i, c) {
        if (r.type === M.init)
          return y({ pivotColumns: Qt }, n);
        if (r.type === M.resetPivot)
          return y({}, n, { pivotColumns: c.initialState.pivotColumns || Qt });
        if (r.type === M.togglePivot) {
          var v = r.columnId, g = r.value, h = g !== void 0 ? g : !n.pivotColumns.includes(v);
          return y({}, n, h ? { pivotColumns: [].concat(n.pivotColumns, [v]) } : { pivotColumns: n.pivotColumns.filter(function(R) {
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
        return n.forEach(function(c) {
          c.isPivotSource = i.state.pivotColumns.includes(c.id), c.uniqueValues = /* @__PURE__ */ new Set();
        }), n;
      }
      function _o(n, r) {
        var i = r.column;
        return i.uniqueValues && n !== void 0 && i.uniqueValues.add(n), n;
      }
      function no(n, r) {
        var i = r.instance, c = i.allColumns, v = i.state;
        if (!v.pivotColumns.length || !v.groupBy || !v.groupBy.length)
          return n;
        var g = v.pivotColumns.map(function(T) {
          return c.find(function(E) {
            return E.id === T;
          });
        }).filter(Boolean), h = c.filter(function(T) {
          return !T.isPivotSource && !v.groupBy.includes(T.id) && !v.pivotColumns.includes(T.id);
        }), R = de(function T(E, V, W) {
          E === void 0 && (E = 0), W === void 0 && (W = []);
          var G = g[E];
          return G ? Array.from(G.uniqueValues).sort().map(function(k) {
            var F = y({}, G, { Header: G.PivotHeader || typeof G.header == "string" ? G.Header + ": " + k : k, isPivotGroup: !0, parent: V, depth: E, id: V ? V.id + "." + G.id + "." + k : G.id + "." + k, pivotValue: k });
            return F.columns = T(E + 1, F, [].concat(W, [function(X) {
              return X.values[G.id] === k;
            }])), F;
          }) : h.map(function(k) {
            return y({}, k, { canPivot: !1, isPivoted: !0, parent: V, depth: E, id: "" + (V ? V.id + "." + k.id : k.id), accessor: function(F, X, U) {
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
        var i = r.instance.state, c = i.pivotColumns, v = i.groupBy;
        return [].concat(n, [c, v]);
      }
      function Xo(n, r) {
        var i = r.instance.state;
        return n = n.filter(function(c) {
          return !c.isPivotSource;
        }), i.pivotColumns.length && i.groupBy && i.groupBy.length && (n = n.filter(function(c) {
          return c.isGrouped || c.isPivoted;
        })), n;
      }
      function Yo(n, r) {
        var i = r.instance;
        return [].concat(n, [i.state.pivotColumns, i.state.groupBy]);
      }
      function jo(n) {
        var r = n.columns, i = n.allColumns, c = n.flatHeaders, v = n.getHooks, g = n.plugins, h = n.dispatch, R = n.autoResetPivot, T = R === void 0 || R, E = n.manaulPivot, V = n.disablePivot, W = n.defaultCanPivot;
        vn(g, ["useGroupBy"], "usePivotColumns");
        var G = bn(n);
        i.forEach(function(F) {
          var X = F.accessor, U = F.defaultPivot, ln = F.disablePivot;
          F.canPivot = X ? Yn(F.canPivot, ln !== !0 && void 0, V !== !0 && void 0, !0) : Yn(F.canPivot, U, W, !1), F.canPivot && (F.togglePivot = function() {
            return n.togglePivot(F.id);
          }), F.Aggregated = F.Aggregated || F.Cell;
        }), c.forEach(function(F) {
          F.getPivotToggleProps = Cn(v().getPivotToggleProps, { instance: G(), header: F });
        });
        var k = bn(T);
        Wn(function() {
          k() && h({ type: M.resetPivot });
        }, [h, E ? null : r]), Object.assign(n, { togglePivot: function(F, X) {
          h({ type: M.togglePivot, columnId: F, value: X });
        } });
      }
      function Uo(n) {
        n.allCells.forEach(function(r) {
          r.isPivoted = r.column.isPivoted;
        });
      }
      M.resetSelectedRows = "resetSelectedRows", M.toggleAllRowsSelected = "toggleAllRowsSelected", M.toggleRowSelected = "toggleRowSelected", M.toggleAllPageRowsSelected = "toggleAllPageRowsSelected";
      var to = function(n) {
        n.getToggleRowSelectedProps = [wt], n.getToggleAllRowsSelectedProps = [nt], n.getToggleAllPageRowsSelectedProps = [oo], n.stateReducers.push(Jo), n.useInstance.push(ao), n.prepareRow.push($o);
      };
      to.pluginName = "useRowSelect";
      var wt = function(n, r) {
        var i = r.instance, c = r.row, v = i.manualRowSelectedKey, g = v === void 0 ? "isSelected" : v;
        return [n, { onChange: function(h) {
          c.toggleRowSelected(h.target.checked);
        }, style: { cursor: "pointer" }, checked: !(!c.original || !c.original[g]) || c.isSelected, title: "Toggle Row Selected", indeterminate: c.isSomeSelected }];
      }, nt = function(n, r) {
        var i = r.instance;
        return [n, { onChange: function(c) {
          i.toggleAllRowsSelected(c.target.checked);
        }, style: { cursor: "pointer" }, checked: i.isAllRowsSelected, title: "Toggle All Rows Selected", indeterminate: !!(!i.isAllRowsSelected && Object.keys(i.state.selectedRowIds).length) }];
      }, oo = function(n, r) {
        var i = r.instance;
        return [n, { onChange: function(c) {
          i.toggleAllPageRowsSelected(c.target.checked);
        }, style: { cursor: "pointer" }, checked: i.isAllPageRowsSelected, title: "Toggle All Current Page Rows Selected", indeterminate: !!(!i.isAllPageRowsSelected && i.page.some(function(c) {
          var v = c.id;
          return i.state.selectedRowIds[v];
        })) }];
      };
      function Jo(n, r, i, c) {
        if (r.type === M.init)
          return y({ selectedRowIds: {} }, n);
        if (r.type === M.resetSelectedRows)
          return y({}, n, { selectedRowIds: c.initialState.selectedRowIds || {} });
        if (r.type === M.toggleAllRowsSelected) {
          var v = r.value, g = c.isAllRowsSelected, h = c.rowsById, R = c.nonGroupedRowsById, T = R === void 0 ? h : R, E = v !== void 0 ? v : !g, V = Object.assign({}, n.selectedRowIds);
          return E ? Object.keys(T).forEach(function(Kn) {
            V[Kn] = !0;
          }) : Object.keys(T).forEach(function(Kn) {
            delete V[Kn];
          }), y({}, n, { selectedRowIds: V });
        }
        if (r.type === M.toggleRowSelected) {
          var W = r.id, G = r.value, k = c.rowsById, F = c.selectSubRows, X = F === void 0 || F, U = c.getSubRows, ln = n.selectedRowIds[W], kn = G !== void 0 ? G : !ln;
          if (ln === kn)
            return n;
          var sn = y({}, n.selectedRowIds);
          return function Kn(e) {
            var t = k[e];
            if (t && (t.isGrouped || (kn ? sn[e] = !0 : delete sn[e]), X && U(t)))
              return U(t).forEach(function(u) {
                return Kn(u.id);
              });
          }(W), y({}, n, { selectedRowIds: sn });
        }
        if (r.type === M.toggleAllPageRowsSelected) {
          var K = r.value, Nn = c.page, nn = c.rowsById, wn = c.selectSubRows, Gn = wn === void 0 || wn, pn = c.isAllPageRowsSelected, hn = c.getSubRows, qn = K !== void 0 ? K : !pn, Dn = y({}, n.selectedRowIds);
          return Nn.forEach(function(Kn) {
            return function e(t) {
              var u = nn[t];
              if (u.isGrouped || (qn ? Dn[t] = !0 : delete Dn[t]), Gn && hn(u))
                return hn(u).forEach(function(a) {
                  return e(a.id);
                });
            }(Kn.id);
          }), y({}, n, { selectedRowIds: Dn });
        }
        return n;
      }
      function ao(n) {
        var r = n.data, i = n.rows, c = n.getHooks, v = n.plugins, g = n.rowsById, h = n.nonGroupedRowsById, R = h === void 0 ? g : h, T = n.autoResetSelectedRows, E = T === void 0 || T, V = n.state.selectedRowIds, W = n.selectSubRows, G = W === void 0 || W, k = n.dispatch, F = n.page, X = n.getSubRows;
        vn(v, ["useFilters", "useGroupBy", "useSortBy", "useExpanded", "usePagination"], "useRowSelect");
        var U = d.useMemo(function() {
          var hn = [];
          return i.forEach(function(qn) {
            var Dn = G ? function Kn(e, t, u) {
              if (t[e.id])
                return !0;
              var a = u(e);
              if (a && a.length) {
                var p = !0, m = !1;
                return a.forEach(function(C) {
                  m && !p || (Kn(C, t, u) ? m = !0 : p = !1);
                }), !!p || !!m && null;
              }
              return !1;
            }(qn, V, X) : !!V[qn.id];
            qn.isSelected = !!Dn, qn.isSomeSelected = Dn === null, Dn && hn.push(qn);
          }), hn;
        }, [i, G, V, X]), ln = !!(Object.keys(R).length && Object.keys(V).length), kn = ln;
        ln && Object.keys(R).some(function(hn) {
          return !V[hn];
        }) && (ln = !1), ln || F && F.length && F.some(function(hn) {
          var qn = hn.id;
          return !V[qn];
        }) && (kn = !1);
        var sn = bn(E);
        Wn(function() {
          sn() && k({ type: M.resetSelectedRows });
        }, [k, r]);
        var K = d.useCallback(function(hn) {
          return k({ type: M.toggleAllRowsSelected, value: hn });
        }, [k]), Nn = d.useCallback(function(hn) {
          return k({ type: M.toggleAllPageRowsSelected, value: hn });
        }, [k]), nn = d.useCallback(function(hn, qn) {
          return k({ type: M.toggleRowSelected, id: hn, value: qn });
        }, [k]), wn = bn(n), Gn = Cn(c().getToggleAllRowsSelectedProps, { instance: wn() }), pn = Cn(c().getToggleAllPageRowsSelectedProps, { instance: wn() });
        Object.assign(n, { selectedFlatRows: U, isAllRowsSelected: ln, isAllPageRowsSelected: kn, toggleRowSelected: nn, toggleAllRowsSelected: K, getToggleAllRowsSelectedProps: Gn, getToggleAllPageRowsSelectedProps: pn, toggleAllPageRowsSelected: Nn });
      }
      function $o(n, r) {
        var i = r.instance;
        n.toggleRowSelected = function(c) {
          return i.toggleRowSelected(n.id, c);
        }, n.getToggleRowSelectedProps = Cn(i.getHooks().getToggleRowSelectedProps, { instance: i, row: n });
      }
      var ro = function(n) {
        return {};
      }, uo = function(n) {
        return {};
      };
      M.setRowState = "setRowState", M.setCellState = "setCellState", M.resetRowState = "resetRowState";
      var Mt = function(n) {
        n.stateReducers.push(Zo), n.useInstance.push(io), n.prepareRow.push(Qo);
      };
      function Zo(n, r, i, c) {
        var v = c.initialRowStateAccessor, g = v === void 0 ? ro : v, h = c.initialCellStateAccessor, R = h === void 0 ? uo : h, T = c.rowsById;
        if (r.type === M.init)
          return y({ rowState: {} }, n);
        if (r.type === M.resetRowState)
          return y({}, n, { rowState: c.initialState.rowState || {} });
        if (r.type === M.setRowState) {
          var E, V = r.rowId, W = r.value, G = n.rowState[V] !== void 0 ? n.rowState[V] : g(T[V]);
          return y({}, n, { rowState: y({}, n.rowState, (E = {}, E[V] = Fn(W, G), E)) });
        }
        if (r.type === M.setCellState) {
          var k, F, X, U, ln, kn = r.rowId, sn = r.columnId, K = r.value, Nn = n.rowState[kn] !== void 0 ? n.rowState[kn] : g(T[kn]), nn = (Nn == null || (k = Nn.cellState) == null ? void 0 : k[sn]) !== void 0 ? Nn.cellState[sn] : R((F = T[kn]) == null || (X = F.cells) == null ? void 0 : X.find(function(wn) {
            return wn.column.id === sn;
          }));
          return y({}, n, { rowState: y({}, n.rowState, (ln = {}, ln[kn] = y({}, Nn, { cellState: y({}, Nn.cellState || {}, (U = {}, U[sn] = Fn(K, nn), U)) }), ln)) });
        }
      }
      function io(n) {
        var r = n.autoResetRowState, i = r === void 0 || r, c = n.data, v = n.dispatch, g = d.useCallback(function(T, E) {
          return v({ type: M.setRowState, rowId: T, value: E });
        }, [v]), h = d.useCallback(function(T, E, V) {
          return v({ type: M.setCellState, rowId: T, columnId: E, value: V });
        }, [v]), R = bn(i);
        Wn(function() {
          R() && v({ type: M.resetRowState });
        }, [c]), Object.assign(n, { setRowState: g, setCellState: h });
      }
      function Qo(n, r) {
        var i = r.instance, c = i.initialRowStateAccessor, v = c === void 0 ? ro : c, g = i.initialCellStateAccessor, h = g === void 0 ? uo : g, R = i.state.rowState;
        n && (n.state = R[n.id] !== void 0 ? R[n.id] : v(n), n.setState = function(T) {
          return i.setRowState(n.id, T);
        }, n.cells.forEach(function(T) {
          n.state.cellState || (n.state.cellState = {}), T.state = n.state.cellState[T.column.id] !== void 0 ? n.state.cellState[T.column.id] : h(T), T.setState = function(E) {
            return i.setCellState(n.id, T.column.id, E);
          };
        }));
      }
      Mt.pluginName = "useRowState", M.resetColumnOrder = "resetColumnOrder", M.setColumnOrder = "setColumnOrder";
      var lo = function(n) {
        n.stateReducers.push(so), n.visibleColumnsDeps.push(function(r, i) {
          var c = i.instance;
          return [].concat(r, [c.state.columnOrder]);
        }), n.visibleColumns.push(co), n.useInstance.push(na);
      };
      function so(n, r, i, c) {
        return r.type === M.init ? y({ columnOrder: [] }, n) : r.type === M.resetColumnOrder ? y({}, n, { columnOrder: c.initialState.columnOrder || [] }) : r.type === M.setColumnOrder ? y({}, n, { columnOrder: Fn(r.columnOrder, n.columnOrder) }) : void 0;
      }
      function co(n, r) {
        var i = r.instance.state.columnOrder;
        if (!i || !i.length)
          return n;
        for (var c = [].concat(i), v = [].concat(n), g = [], h = function() {
          var R = c.shift(), T = v.findIndex(function(E) {
            return E.id === R;
          });
          T > -1 && g.push(v.splice(T, 1)[0]);
        }; v.length && c.length; )
          h();
        return [].concat(g, v);
      }
      function na(n) {
        var r = n.dispatch;
        n.setColumnOrder = d.useCallback(function(i) {
          return r({ type: M.setColumnOrder, columnOrder: i });
        }, [r]);
      }
      lo.pluginName = "useColumnOrder", un.canResize = !0, M.columnStartResizing = "columnStartResizing", M.columnResizing = "columnResizing", M.columnDoneResizing = "columnDoneResizing", M.resetResize = "resetResize";
      var yo = function(n) {
        n.getResizerProps = [ea], n.getHeaderProps.push({ style: { position: "relative" } }), n.stateReducers.push(ta), n.useInstance.push(aa), n.useInstanceBeforeDimensions.push(oa);
      }, ea = function(n, r) {
        var i = r.instance, c = r.header, v = i.dispatch, g = function(h, R) {
          var T = !1;
          if (h.type === "touchstart") {
            if (h.touches && h.touches.length > 1)
              return;
            T = !0;
          }
          var E, V, W = function(sn) {
            var K = [];
            return function Nn(nn) {
              nn.columns && nn.columns.length && nn.columns.map(Nn), K.push(nn);
            }(sn), K;
          }(R).map(function(sn) {
            return [sn.id, sn.totalWidth];
          }), G = T ? Math.round(h.touches[0].clientX) : h.clientX, k = function() {
            window.cancelAnimationFrame(E), E = null, v({ type: M.columnDoneResizing });
          }, F = function() {
            window.cancelAnimationFrame(E), E = null, v({ type: M.columnResizing, clientX: V });
          }, X = function(sn) {
            V = sn, E || (E = window.requestAnimationFrame(F));
          }, U = { mouse: { moveEvent: "mousemove", moveHandler: function(sn) {
            return X(sn.clientX);
          }, upEvent: "mouseup", upHandler: function(sn) {
            document.removeEventListener("mousemove", U.mouse.moveHandler), document.removeEventListener("mouseup", U.mouse.upHandler), k();
          } }, touch: { moveEvent: "touchmove", moveHandler: function(sn) {
            return sn.cancelable && (sn.preventDefault(), sn.stopPropagation()), X(sn.touches[0].clientX), !1;
          }, upEvent: "touchend", upHandler: function(sn) {
            document.removeEventListener(U.touch.moveEvent, U.touch.moveHandler), document.removeEventListener(U.touch.upEvent, U.touch.moveHandler), k();
          } } }, ln = T ? U.touch : U.mouse, kn = !!function() {
            if (typeof me == "boolean")
              return me;
            var sn = !1;
            try {
              var K = { get passive() {
                return sn = !0, !1;
              } };
              window.addEventListener("test", null, K), window.removeEventListener("test", null, K);
            } catch {
              sn = !1;
            }
            return me = sn;
          }() && { passive: !1 };
          document.addEventListener(ln.moveEvent, ln.moveHandler, kn), document.addEventListener(ln.upEvent, ln.upHandler, kn), v({ type: M.columnStartResizing, columnId: R.id, columnWidth: R.totalWidth, headerIdWidths: W, clientX: G });
        };
        return [n, { onMouseDown: function(h) {
          return h.persist() || g(h, c);
        }, onTouchStart: function(h) {
          return h.persist() || g(h, c);
        }, style: { cursor: "col-resize" }, draggable: !1, role: "separator" }];
      };
      function ta(n, r) {
        if (r.type === M.init)
          return y({ columnResizing: { columnWidths: {} } }, n);
        if (r.type === M.resetResize)
          return y({}, n, { columnResizing: { columnWidths: {} } });
        if (r.type === M.columnStartResizing) {
          var i = r.clientX, c = r.columnId, v = r.columnWidth, g = r.headerIdWidths;
          return y({}, n, { columnResizing: y({}, n.columnResizing, { startX: i, headerIdWidths: g, columnWidth: v, isResizingColumn: c }) });
        }
        if (r.type === M.columnResizing) {
          var h = r.clientX, R = n.columnResizing, T = R.startX, E = R.columnWidth, V = R.headerIdWidths, W = (h - T) / E, G = {};
          return (V === void 0 ? [] : V).forEach(function(k) {
            var F = k[0], X = k[1];
            G[F] = Math.max(X + X * W, 0);
          }), y({}, n, { columnResizing: y({}, n.columnResizing, { columnWidths: y({}, n.columnResizing.columnWidths, {}, G) }) });
        }
        return r.type === M.columnDoneResizing ? y({}, n, { columnResizing: y({}, n.columnResizing, { startX: null, isResizingColumn: null }) }) : void 0;
      }
      yo.pluginName = "useResizeColumns";
      var oa = function(n) {
        var r = n.flatHeaders, i = n.disableResizing, c = n.getHooks, v = n.state.columnResizing, g = bn(n);
        r.forEach(function(h) {
          var R = Yn(h.disableResizing !== !0 && void 0, i !== !0 && void 0, !0);
          h.canResize = R, h.width = v.columnWidths[h.id] || h.originalWidth || h.width, h.isResizing = v.isResizingColumn === h.id, R && (h.getResizerProps = Cn(c().getResizerProps, { instance: g(), header: h }));
        });
      };
      function aa(n) {
        var r = n.plugins, i = n.dispatch, c = n.autoResetResize, v = c === void 0 || c, g = n.columns;
        vn(r, ["useAbsoluteLayout"], "useResizeColumns");
        var h = bn(v);
        Wn(function() {
          h() && i({ type: M.resetResize });
        }, [g]);
        var R = d.useCallback(function() {
          return i({ type: M.resetResize });
        }, [i]);
        Object.assign(n, { resetResizing: R });
      }
      var bt = { position: "absolute", top: 0 }, Co = function(n) {
        n.getTableBodyProps.push(ut), n.getRowProps.push(ut), n.getHeaderGroupProps.push(ut), n.getFooterGroupProps.push(ut), n.getHeaderProps.push(function(r, i) {
          var c = i.column;
          return [r, { style: y({}, bt, { left: c.totalLeft + "px", width: c.totalWidth + "px" }) }];
        }), n.getCellProps.push(function(r, i) {
          var c = i.cell;
          return [r, { style: y({}, bt, { left: c.column.totalLeft + "px", width: c.column.totalWidth + "px" }) }];
        }), n.getFooterProps.push(function(r, i) {
          var c = i.column;
          return [r, { style: y({}, bt, { left: c.totalLeft + "px", width: c.totalWidth + "px" }) }];
        });
      };
      Co.pluginName = "useAbsoluteLayout";
      var ut = function(n, r) {
        return [n, { style: { position: "relative", width: r.instance.totalColumnsWidth + "px" } }];
      }, At = { display: "inline-block", boxSizing: "border-box" }, Dt = function(n, r) {
        return [n, { style: { display: "flex", width: r.instance.totalColumnsWidth + "px" } }];
      }, fo = function(n) {
        n.getRowProps.push(Dt), n.getHeaderGroupProps.push(Dt), n.getFooterGroupProps.push(Dt), n.getHeaderProps.push(function(r, i) {
          var c = i.column;
          return [r, { style: y({}, At, { width: c.totalWidth + "px" }) }];
        }), n.getCellProps.push(function(r, i) {
          var c = i.cell;
          return [r, { style: y({}, At, { width: c.column.totalWidth + "px" }) }];
        }), n.getFooterProps.push(function(r, i) {
          var c = i.column;
          return [r, { style: y({}, At, { width: c.totalWidth + "px" }) }];
        });
      };
      function Rt(n) {
        n.getTableProps.push(ra), n.getRowProps.push(Nt), n.getHeaderGroupProps.push(Nt), n.getFooterGroupProps.push(Nt), n.getHeaderProps.push(ua), n.getCellProps.push(ia), n.getFooterProps.push(la);
      }
      fo.pluginName = "useBlockLayout", Rt.pluginName = "useFlexLayout";
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
      function po(n) {
        n.stateReducers.push(ho), n.getTableProps.push(go), n.getHeaderProps.push(mo), n.getRowProps.push(vo);
      }
      M.columnStartResizing = "columnStartResizing", M.columnResizing = "columnResizing", M.columnDoneResizing = "columnDoneResizing", M.resetResize = "resetResize", po.pluginName = "useGridLayout";
      var go = function(n, r) {
        var i = r.instance;
        return [n, { style: { display: "grid", gridTemplateColumns: i.visibleColumns.map(function(c) {
          var v;
          return i.state.gridLayout.columnWidths[c.id] ? i.state.gridLayout.columnWidths[c.id] + "px" : (v = i.state.columnResizing) != null && v.isResizingColumn ? i.state.gridLayout.startWidths[c.id] + "px" : typeof c.width == "number" ? c.width + "px" : c.width;
        }).join(" ") } }];
      }, mo = function(n, r) {
        var i = r.column;
        return [n, { id: "header-cell-" + i.id, style: { position: "sticky", gridColumn: "span " + i.totalVisibleHeaderCount } }];
      }, vo = function(n, r) {
        var i = r.row;
        return i.isExpanded ? [n, { style: { gridColumn: "1 / " + (i.cells.length + 1) } }] : [n, {}];
      };
      function ho(n, r, i, c) {
        if (r.type === M.init)
          return y({ gridLayout: { columnWidths: {} } }, n);
        if (r.type === M.resetResize)
          return y({}, n, { gridLayout: { columnWidths: {} } });
        if (r.type === M.columnStartResizing) {
          var v = r.columnId, g = r.headerIdWidths, h = Tt(v);
          if (h !== void 0) {
            var R = c.visibleColumns.reduce(function(K, Nn) {
              var nn;
              return y({}, K, ((nn = {})[Nn.id] = Tt(Nn.id), nn));
            }, {}), T = c.visibleColumns.reduce(function(K, Nn) {
              var nn;
              return y({}, K, ((nn = {})[Nn.id] = Nn.minWidth, nn));
            }, {}), E = c.visibleColumns.reduce(function(K, Nn) {
              var nn;
              return y({}, K, ((nn = {})[Nn.id] = Nn.maxWidth, nn));
            }, {}), V = g.map(function(K) {
              var Nn = K[0];
              return [Nn, Tt(Nn)];
            });
            return y({}, n, { gridLayout: y({}, n.gridLayout, { startWidths: R, minWidths: T, maxWidths: E, headerIdGridWidths: V, columnWidth: h }) });
          }
          return n;
        }
        if (r.type === M.columnResizing) {
          var W = r.clientX, G = n.columnResizing.startX, k = n.gridLayout, F = k.columnWidth, X = k.minWidths, U = k.maxWidths, ln = k.headerIdGridWidths, kn = (W - G) / F, sn = {};
          return (ln === void 0 ? [] : ln).forEach(function(K) {
            var Nn = K[0], nn = K[1];
            sn[Nn] = Math.min(Math.max(X[Nn], nn + nn * kn), U[Nn]);
          }), y({}, n, { gridLayout: y({}, n.gridLayout, { columnWidths: y({}, n.gridLayout.columnWidths, {}, sn) }) });
        }
        return r.type === M.columnDoneResizing ? y({}, n, { gridLayout: y({}, n.gridLayout, { startWidths: {}, minWidths: {}, maxWidths: {} }) }) : void 0;
      }
      function Tt(n) {
        var r, i = (r = document.getElementById("header-cell-" + n)) == null ? void 0 : r.offsetWidth;
        if (i !== void 0)
          return i;
      }
      s._UNSTABLE_usePivotColumns = St, s.actions = M, s.defaultColumn = un, s.defaultGroupByFn = jt, s.defaultOrderByFn = Zt, s.defaultRenderer = En, s.emptyRenderer = w, s.ensurePluginOrder = vn, s.flexRender = ae, s.functionalUpdate = Fn, s.loopHooks = xn, s.makePropGetter = Cn, s.makeRenderer = An, s.reduceHooks = dn, s.safeUseLayoutEffect = Jn, s.useAbsoluteLayout = Co, s.useAsyncDebounce = function(n, r) {
        r === void 0 && (r = 0);
        var i = d.useRef({}), c = bn(n), v = bn(r);
        return d.useCallback(function() {
          var g = P(regeneratorRuntime.mark(function h() {
            var R, T, E, V = arguments;
            return regeneratorRuntime.wrap(function(W) {
              for (; ; )
                switch (W.prev = W.next) {
                  case 0:
                    for (R = V.length, T = new Array(R), E = 0; E < R; E++)
                      T[E] = V[E];
                    return i.current.promise || (i.current.promise = new Promise(function(G, k) {
                      i.current.resolve = G, i.current.reject = k;
                    })), i.current.timeout && clearTimeout(i.current.timeout), i.current.timeout = setTimeout(P(regeneratorRuntime.mark(function G() {
                      return regeneratorRuntime.wrap(function(k) {
                        for (; ; )
                          switch (k.prev = k.next) {
                            case 0:
                              return delete i.current.timeout, k.prev = 1, k.t0 = i.current, k.next = 5, c().apply(void 0, T);
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
                      }, G, null, [[1, 9, 12, 15]]);
                    })), v()), W.abrupt("return", i.current.promise);
                  case 5:
                  case "end":
                    return W.stop();
                }
            }, h);
          }));
          return function() {
            return g.apply(this, arguments);
          };
        }(), [c, v]);
      }, s.useBlockLayout = fo, s.useColumnOrder = lo, s.useExpanded = Te, s.useFilters = Gt, s.useFlexLayout = Rt, s.useGetLatest = bn, s.useGlobalFilter = pt, s.useGridLayout = po, s.useGroupBy = vt, s.useMountedLayoutEffect = Wn, s.usePagination = ht, s.useResizeColumns = yo, s.useRowSelect = to, s.useRowState = Mt, s.useSortBy = $t, s.useTable = function(n) {
        for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), c = 1; c < r; c++)
          i[c - 1] = arguments[c];
        n = ie(n), i = [Ae].concat(i);
        var v = d.useRef({}), g = bn(v.current);
        Object.assign(g(), y({}, n, { plugins: i, hooks: Ne() })), i.filter(Boolean).forEach(function(C) {
          C(g().hooks);
        });
        var h = bn(g().hooks);
        g().getHooks = h, delete g().hooks, Object.assign(g(), dn(h().useOptions, ie(n)));
        var R = g(), T = R.data, E = R.columns, V = R.initialState, W = R.defaultColumn, G = R.getSubRows, k = R.getRowId, F = R.stateReducer, X = R.useControlledState, U = bn(F), ln = d.useCallback(function(C, S) {
          if (!S.type)
            throw console.info({ action: S }), new Error("Unknown Action 👆");
          return [].concat(h().stateReducers, Array.isArray(U()) ? U() : [U()]).reduce(function(A, N) {
            return N(A, S, C, g()) || A;
          }, C);
        }, [h, U, g]), kn = d.useReducer(ln, void 0, function() {
          return ln(V, { type: M.init });
        }), sn = kn[0], K = kn[1], Nn = dn([].concat(h().useControlledState, [X]), sn, { instance: g() });
        Object.assign(g(), { state: Nn, dispatch: K });
        var nn = d.useMemo(function() {
          return zn(dn(h().columns, E, { instance: g() }));
        }, [h, g, E].concat(dn(h().columnsDeps, [], { instance: g() })));
        g().columns = nn;
        var wn = d.useMemo(function() {
          return dn(h().allColumns, de(nn), { instance: g() }).map(fn);
        }, [nn, h, g].concat(dn(h().allColumnsDeps, [], { instance: g() })));
        g().allColumns = wn;
        var Gn = d.useMemo(function() {
          for (var C = [], S = [], A = {}, N = [].concat(wn); N.length; ) {
            var I = N.shift();
            He({ data: T, rows: C, flatRows: S, rowsById: A, column: I, getRowId: k, getSubRows: G, accessValueHooks: h().accessValue, getInstance: g });
          }
          return [C, S, A];
        }, [wn, T, k, G, h, g]), pn = Gn[0], hn = Gn[1], qn = Gn[2];
        Object.assign(g(), { rows: pn, initialRows: [].concat(pn), flatRows: hn, rowsById: qn }), xn(h().useInstanceAfterData, g());
        var Dn = d.useMemo(function() {
          return dn(h().visibleColumns, wn, { instance: g() }).map(function(C) {
            return an(C, W);
          });
        }, [h, wn, g, W].concat(dn(h().visibleColumnsDeps, [], { instance: g() })));
        wn = d.useMemo(function() {
          var C = [].concat(Dn);
          return wn.forEach(function(S) {
            C.find(function(A) {
              return A.id === S.id;
            }) || C.push(S);
          }), C;
        }, [wn, Dn]), g().allColumns = wn;
        var Kn = d.useMemo(function() {
          return dn(h().headerGroups, _n(Dn, W), g());
        }, [h, Dn, W, g].concat(dn(h().headerGroupsDeps, [], { instance: g() })));
        g().headerGroups = Kn;
        var e = d.useMemo(function() {
          return Kn.length ? Kn[0].headers : [];
        }, [Kn]);
        g().headers = e, g().flatHeaders = Kn.reduce(function(C, S) {
          return [].concat(C, S.headers);
        }, []), xn(h().useInstanceBeforeDimensions, g());
        var t = Dn.filter(function(C) {
          return C.isVisible;
        }).map(function(C) {
          return C.id;
        }).sort().join("_");
        Dn = d.useMemo(function() {
          return Dn.filter(function(C) {
            return C.isVisible;
          });
        }, [Dn, t]), g().visibleColumns = Dn;
        var u = ge(e), a = u[0], p = u[1], m = u[2];
        return g().totalColumnsMinWidth = a, g().totalColumnsWidth = p, g().totalColumnsMaxWidth = m, xn(h().useInstance, g()), [].concat(g().flatHeaders, g().allColumns).forEach(function(C) {
          C.render = An(g(), C), C.getHeaderProps = Cn(h().getHeaderProps, { instance: g(), column: C }), C.getFooterProps = Cn(h().getFooterProps, { instance: g(), column: C });
        }), g().headerGroups = d.useMemo(function() {
          return Kn.filter(function(C, S) {
            return C.headers = C.headers.filter(function(A) {
              return A.headers ? function N(I) {
                return I.filter(function(q) {
                  return q.headers ? N(q.headers) : q.isVisible;
                }).length;
              }(A.headers) : A.isVisible;
            }), !!C.headers.length && (C.getHeaderGroupProps = Cn(h().getHeaderGroupProps, { instance: g(), headerGroup: C, index: S }), C.getFooterGroupProps = Cn(h().getFooterGroupProps, { instance: g(), headerGroup: C, index: S }), !0);
          });
        }, [Kn, g, h]), g().footerGroups = [].concat(g().headerGroups).reverse(), g().prepareRow = d.useCallback(function(C) {
          C.getRowProps = Cn(h().getRowProps, { instance: g(), row: C }), C.allCells = wn.map(function(S) {
            var A = C.values[S.id], N = { column: S, row: C, value: A };
            return N.getCellProps = Cn(h().getCellProps, { instance: g(), cell: N }), N.render = An(g(), S, { row: C, cell: N, value: A }), N;
          }), C.cells = Dn.map(function(S) {
            return C.allCells.find(function(A) {
              return A.column.id === S.id;
            });
          }), xn(h().prepareRow, C, { instance: g() });
        }, [h, g, wn, Dn]), g().getTableProps = Cn(h().getTableProps, { instance: g() }), g().getTableBodyProps = Cn(h().getTableBodyProps, { instance: g() }), xn(h().useFinalInstance, g()), g();
      }, Object.defineProperty(s, "__esModule", { value: !0 });
    });
  }(Ao, Ao.exports)), Ao.exports;
}
var Do = { exports: {} }, Ya;
function Bu() {
  return Ya || (Ya = 1, function(o, f) {
    (function(s, d) {
      d(f, D);
    })(nr, function(s, d) {
      d = d && Object.prototype.hasOwnProperty.call(d, "default") ? d.default : d;
      function b(e, t, u, a, p, m, C) {
        try {
          var S = e[m](C), A = S.value;
        } catch (N) {
          u(N);
          return;
        }
        S.done ? t(A) : Promise.resolve(A).then(a, p);
      }
      function P(e) {
        return function() {
          var t = this, u = arguments;
          return new Promise(function(a, p) {
            var m = e.apply(t, u);
            function C(A) {
              b(m, a, p, C, S, "next", A);
            }
            function S(A) {
              b(m, a, p, C, S, "throw", A);
            }
            C(void 0);
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
      function O(e, t) {
        if (e == null)
          return {};
        var u = {}, a = Object.keys(e), p, m;
        for (m = 0; m < a.length; m++)
          p = a[m], !(t.indexOf(p) >= 0) && (u[p] = e[p]);
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
      function M(e) {
        var t = Tn(e, "string");
        return typeof t == "symbol" ? t : String(t);
      }
      var En = "Renderer Error ☝️", w = {
        init: "init"
      }, un = function(t) {
        var u = t.value, a = u === void 0 ? "" : u;
        return a;
      }, Rn = function() {
        return d.createElement(d.Fragment, null, " ");
      }, Cn = {
        Cell: un,
        width: 150,
        minWidth: 0,
        maxWidth: Number.MAX_SAFE_INTEGER
      };
      function dn() {
        for (var e = arguments.length, t = new Array(e), u = 0; u < e; u++)
          t[u] = arguments[u];
        return t.reduce(function(a, p) {
          var m = p.style, C = p.className, S = O(p, ["style", "className"]);
          return a = y({}, a, {}, S), m && (a.style = a.style ? y({}, a.style || {}, {}, m || {}) : m), C && (a.className = a.className ? a.className + " " + C : C), a.className === "" && delete a.className, a;
        }, {});
      }
      function xn(e, t, u) {
        return typeof t == "function" ? xn({}, t(e, u)) : Array.isArray(t) ? dn.apply(void 0, [e].concat(t)) : dn(e, t);
      }
      var vn = function(t, u) {
        return u === void 0 && (u = {}), function(a) {
          return a === void 0 && (a = {}), [].concat(t, [a]).reduce(function(p, m) {
            return xn(p, m, y({}, u, {
              userProps: a
            }));
          }, {});
        };
      }, Fn = function(t, u, a, p) {
        return a === void 0 && (a = {}), t.reduce(function(m, C) {
          var S = C(m, a);
          if (!p && typeof S > "u")
            throw console.info(C), new Error("React Table: A reducer hook ☝️ just returned undefined! This is not allowed.");
          return S;
        }, u);
      }, bn = function(t, u, a) {
        return a === void 0 && (a = {}), t.forEach(function(p) {
          var m = p(u, a);
          if (typeof m < "u")
            throw console.info(p, m), new Error("React Table: A loop-type hook ☝️ just returned a value! This is not allowed.");
        });
      };
      function Jn(e, t, u, a) {
        if (a)
          throw new Error('Defining plugins in the "after" section of ensurePluginOrder is no longer supported (see plugin ' + u + ")");
        var p = e.findIndex(function(m) {
          return m.pluginName === u;
        });
        if (p === -1)
          throw new Error('The plugin "' + u + `" was not found in the plugin list!
This usually means you need to need to name your plugin hook by setting the 'pluginName' property of the hook function, eg:

  ` + u + ".pluginName = '" + u + `'
`);
        t.forEach(function(m) {
          var C = e.findIndex(function(S) {
            return S.pluginName === m;
          });
          if (C > -1 && C > p)
            throw new Error("React Table: The " + u + " plugin hook must be placed after the " + m + " plugin hook!");
        });
      }
      function Wn(e, t) {
        return typeof e == "function" ? e(t) : e;
      }
      function An(e) {
        var t = d.useRef();
        return t.current = e, d.useCallback(function() {
          return t.current;
        }, []);
      }
      var ae = typeof document < "u" ? d.useLayoutEffect : d.useEffect;
      function zn(e, t) {
        var u = d.useRef(!1);
        ae(function() {
          u.current && e(), u.current = !0;
        }, t);
      }
      function de(e, t) {
        t === void 0 && (t = 0);
        var u = d.useRef({}), a = An(e), p = An(t);
        return d.useCallback(
          /* @__PURE__ */ function() {
            var m = P(
              /* @__PURE__ */ regeneratorRuntime.mark(function C() {
                var S, A, N, I = arguments;
                return regeneratorRuntime.wrap(function(B) {
                  for (; ; )
                    switch (B.prev = B.next) {
                      case 0:
                        for (S = I.length, A = new Array(S), N = 0; N < S; N++)
                          A[N] = I[N];
                        return u.current.promise || (u.current.promise = new Promise(function(x, _) {
                          u.current.resolve = x, u.current.reject = _;
                        })), u.current.timeout && clearTimeout(u.current.timeout), u.current.timeout = setTimeout(
                          /* @__PURE__ */ P(
                            /* @__PURE__ */ regeneratorRuntime.mark(function x() {
                              return regeneratorRuntime.wrap(function(L) {
                                for (; ; )
                                  switch (L.prev = L.next) {
                                    case 0:
                                      return delete u.current.timeout, L.prev = 1, L.t0 = u.current, L.next = 5, a().apply(void 0, A);
                                    case 5:
                                      L.t1 = L.sent, L.t0.resolve.call(L.t0, L.t1), L.next = 12;
                                      break;
                                    case 9:
                                      L.prev = 9, L.t2 = L.catch(1), u.current.reject(L.t2);
                                    case 12:
                                      return L.prev = 12, delete u.current.promise, L.finish(12);
                                    case 15:
                                    case "end":
                                      return L.stop();
                                  }
                              }, x, null, [[1, 9, 12, 15]]);
                            })
                          ),
                          p()
                        ), B.abrupt("return", u.current.promise);
                      case 5:
                      case "end":
                        return B.stop();
                    }
                }, C);
              })
            );
            return function() {
              return m.apply(this, arguments);
            };
          }(),
          [a, p]
        );
      }
      function fn(e, t, u) {
        return u === void 0 && (u = {}), function(a, p) {
          p === void 0 && (p = {});
          var m = typeof a == "string" ? t[a] : a;
          if (typeof m > "u")
            throw console.info(t), new Error(En);
          return an(m, y({}, e, {
            column: t
          }, u, {}, p));
        };
      }
      function an(e, t) {
        return _n(e) ? d.createElement(e, t) : e;
      }
      function _n(e) {
        return Qn(e) || typeof e == "function" || Yn(e);
      }
      function Qn(e) {
        return typeof e == "function" && function() {
          var t = Object.getPrototypeOf(e);
          return t.prototype && t.prototype.isReactComponent;
        }();
      }
      function Yn(e) {
        return typeof e == "object" && typeof e.$$typeof == "symbol" && ["react.memo", "react.forward_ref"].includes(e.$$typeof.description);
      }
      function ne(e, t, u) {
        return u === void 0 && (u = 0), e.map(function(a) {
          return a = y({}, a, {
            parent: t,
            depth: u
          }), Re(a), a.columns && (a.columns = ne(a.columns, a, u + 1)), a;
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
          u = function(C) {
            return me(C, p);
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
      function be(e, t) {
        if (!t)
          throw new Error();
        return Object.assign(e, y({
          // Make sure there is a fallback header, just in case
          Header: Rn,
          Footer: Rn
        }, Cn, {}, t, {}, e)), Object.assign(e, {
          originalWidth: e.width
        }), e;
      }
      function Ee(e, t, u) {
        u === void 0 && (u = function() {
          return {};
        });
        for (var a = [], p = e, m = 0, C = function() {
          return m++;
        }, S = function() {
          var N = {
            headers: []
          }, I = [], q = p.some(function(B) {
            return B.parent;
          });
          p.forEach(function(B) {
            var x = [].concat(I).reverse()[0], _;
            if (q) {
              if (B.parent)
                _ = y({}, B.parent, {
                  originalId: B.parent.id,
                  id: B.parent.id + "_" + C(),
                  headers: [B]
                }, u(B));
              else {
                var L = B.id + "_placeholder";
                _ = be(y({
                  originalId: L,
                  id: B.id + "_placeholder_" + C(),
                  placeholderOf: B,
                  headers: [B]
                }, u(B)), t);
              }
              x && x.originalId === _.originalId ? x.headers.push(B) : I.push(_);
            }
            N.headers.push(B);
          }), a.push(N), p = I;
        }; p.length; )
          S();
        return a.reverse();
      }
      var fe = /* @__PURE__ */ new Map();
      function me(e, t, u) {
        if (!t)
          return e;
        var a = typeof t == "function" ? t : JSON.stringify(t), p = fe.get(a) || function() {
          var C = Ae(t);
          return fe.set(a, C), C;
        }(), m;
        try {
          m = p.reduce(function(C, S) {
            return C[S];
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
      function Oe(e) {
        if (typeof e == "function")
          return e;
      }
      function Be(e, t) {
        var u = [], a = function p(m) {
          m.forEach(function(C) {
            C[t] ? p(C[t]) : u.push(C);
          });
        };
        return a(e), u;
      }
      function H(e, t) {
        var u = t.manualExpandedKey, a = t.expanded, p = t.expandSubRows, m = p === void 0 ? !0 : p, C = [], S = function A(N, I) {
          I === void 0 && (I = !0), N.isExpanded = N.original && N.original[u] || a[N.id], N.canExpand = N.subRows && !!N.subRows.length, I && C.push(N), N.subRows && N.subRows.length && N.isExpanded && N.subRows.forEach(function(q) {
            return A(q, m);
          });
        };
        return e.forEach(function(A) {
          return S(A);
        }), C;
      }
      function z(e, t, u) {
        return Oe(e) || t[e] || u[e] || u.text;
      }
      function rn(e, t, u) {
        return e ? e(t, u) : typeof t > "u";
      }
      function en() {
        throw new Error("React-Table: You have not called prepareRow(row) one or more rows you are attempting to render.");
      }
      var Vn = null;
      function jn() {
        if (typeof Vn == "boolean")
          return Vn;
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
        return Vn = e, Vn;
      }
      var we = /\[/g, Ne = /\]/g;
      function Ae(e) {
        return De(e).map(function(t) {
          return String(t).replace(".", "_");
        }).join(".").replace(we, ".").replace(Ne, "").split(".");
      }
      function De(e, t) {
        if (t === void 0 && (t = []), !Array.isArray(e))
          t.push(e);
        else
          for (var u = 0; u < e.length; u += 1)
            De(e[u], t);
        return t;
      }
      var Ie = function(t) {
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
      }, ye = function(t, u) {
        var a = u.column;
        return y({
          key: "footer_" + a.id,
          colSpan: a.totalVisibleHeaderCount
        }, t);
      }, ve = function(t, u) {
        var a = u.index;
        return y({
          key: "headerGroup_" + a,
          role: "row"
        }, t);
      }, he = function(t, u) {
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
          getTableProps: [Ie],
          getTableBodyProps: [_e],
          getHeaderGroupProps: [ve],
          getFooterGroupProps: [he],
          getHeaderProps: [pe],
          getFooterProps: [ye],
          getRowProps: [Xe],
          getCellProps: [Q],
          useFinalInstance: []
        };
      }
      w.resetHiddenColumns = "resetHiddenColumns", w.toggleHideColumn = "toggleHideColumn", w.setHiddenColumns = "setHiddenColumns", w.toggleHideAllColumns = "toggleHideAllColumns";
      var te = function(t) {
        t.getToggleHiddenProps = [ie], t.getToggleHideAllColumnsProps = [ge], t.stateReducers.push(He), t.useInstanceBeforeDimensions.push(Te), t.headerGroupsDeps.push(function(u, a) {
          var p = a.instance;
          return [].concat(u, [p.state.hiddenColumns]);
        }), t.useInstance.push(Ye);
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
      }, ge = function(t, u) {
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
      function He(e, t, u, a) {
        if (t.type === w.init)
          return y({
            hiddenColumns: []
          }, e);
        if (t.type === w.resetHiddenColumns)
          return y({}, e, {
            hiddenColumns: a.initialState.hiddenColumns || []
          });
        if (t.type === w.toggleHideColumn) {
          var p = typeof t.value < "u" ? t.value : !e.hiddenColumns.includes(t.columnId), m = p ? [].concat(e.hiddenColumns, [t.columnId]) : e.hiddenColumns.filter(function(S) {
            return S !== t.columnId;
          });
          return y({}, e, {
            hiddenColumns: m
          });
        }
        if (t.type === w.setHiddenColumns)
          return y({}, e, {
            hiddenColumns: Wn(t.value, e.hiddenColumns)
          });
        if (t.type === w.toggleHideAllColumns) {
          var C = typeof t.value < "u" ? t.value : !e.hiddenColumns.length;
          return y({}, e, {
            hiddenColumns: C ? a.allColumns.map(function(S) {
              return S.id;
            }) : []
          });
        }
      }
      function Te(e) {
        var t = e.headers, u = e.state.hiddenColumns, a = d.useRef(!1);
        a.current;
        var p = function C(S, A) {
          S.isVisible = A && !u.includes(S.id);
          var N = 0;
          return S.headers && S.headers.length ? S.headers.forEach(function(I) {
            return N += C(I, S.isVisible);
          }) : N = S.isVisible ? 1 : 0, S.totalVisibleHeaderCount = N, N;
        }, m = 0;
        t.forEach(function(C) {
          return m += p(C, !0);
        });
      }
      function Ye(e) {
        var t = e.columns, u = e.flatHeaders, a = e.dispatch, p = e.allColumns, m = e.getHooks, C = e.state.hiddenColumns, S = e.autoResetHiddenColumns, A = S === void 0 ? !0 : S, N = An(e), I = p.length === C.length, q = d.useCallback(function(Z, yn) {
          return a({
            type: w.toggleHideColumn,
            columnId: Z,
            value: yn
          });
        }, [a]), B = d.useCallback(function(Z) {
          return a({
            type: w.setHiddenColumns,
            value: Z
          });
        }, [a]), x = d.useCallback(function(Z) {
          return a({
            type: w.toggleHideAllColumns,
            value: Z
          });
        }, [a]), _ = vn(m().getToggleHideAllColumnsProps, {
          instance: N()
        });
        u.forEach(function(Z) {
          Z.toggleHidden = function(yn) {
            a({
              type: w.toggleHideColumn,
              columnId: Z.id,
              value: yn
            });
          }, Z.getToggleHiddenProps = vn(m().getToggleHiddenProps, {
            instance: N(),
            column: Z
          });
        });
        var L = An(A);
        zn(function() {
          L() && a({
            type: w.resetHiddenColumns
          });
        }, [a, t]), Object.assign(e, {
          allColumnsHidden: I,
          toggleHideColumn: q,
          setHiddenColumns: B,
          toggleHideAllColumns: x,
          getToggleHideAllColumnsProps: _
        });
      }
      var je = {}, Ue = {}, We = function(t, u, a) {
        return t;
      }, Je = function(t, u) {
        return t.subRows || [];
      }, Ge = function(t, u, a) {
        return "" + (a ? [a.id, u].join(".") : u);
      }, xe = function(t) {
        return t;
      };
      function Fe(e) {
        var t = e.initialState, u = t === void 0 ? je : t, a = e.defaultColumn, p = a === void 0 ? Ue : a, m = e.getSubRows, C = m === void 0 ? Je : m, S = e.getRowId, A = S === void 0 ? Ge : S, N = e.stateReducer, I = N === void 0 ? We : N, q = e.useControlledState, B = q === void 0 ? xe : q, x = O(e, ["initialState", "defaultColumn", "getSubRows", "getRowId", "stateReducer", "useControlledState"]);
        return y({}, x, {
          initialState: u,
          defaultColumn: p,
          getSubRows: C,
          getRowId: A,
          stateReducer: I,
          useControlledState: B
        });
      }
      var at = function(t) {
        for (var u = arguments.length, a = new Array(u > 1 ? u - 1 : 0), p = 1; p < u; p++)
          a[p - 1] = arguments[p];
        t = Fe(t), a = [te].concat(a);
        var m = d.useRef({}), C = An(m.current);
        Object.assign(C(), y({}, t, {
          plugins: a,
          hooks: In()
        })), a.filter(Boolean).forEach(function(gn) {
          gn(C().hooks);
        });
        var S = An(C().hooks);
        C().getHooks = S, delete C().hooks, Object.assign(C(), Fn(S().useOptions, Fe(t)));
        var A = C(), N = A.data, I = A.columns, q = A.initialState, B = A.defaultColumn, x = A.getSubRows, _ = A.getRowId, L = A.stateReducer, Z = A.useControlledState, yn = An(L), mn = d.useCallback(function(gn, $n) {
          if (!$n.type)
            throw console.info({
              action: $n
            }), new Error("Unknown Action 👆");
          return [].concat(S().stateReducers, Array.isArray(yn()) ? yn() : [yn()]).reduce(function(ue, Se) {
            return Se(ue, $n, gn, C()) || ue;
          }, gn);
        }, [S, yn, C]), j = d.useReducer(mn, void 0, function() {
          return mn(q, {
            type: w.init
          });
        }), Pn = j[0], Hn = j[1], J = Fn([].concat(S().useControlledState, [Z]), Pn, {
          instance: C()
        });
        Object.assign(C(), {
          state: J,
          dispatch: Hn
        });
        var Y = d.useMemo(function() {
          return ne(Fn(S().columns, I, {
            instance: C()
          }));
        }, [S, C, I].concat(Fn(S().columnsDeps, [], {
          instance: C()
        })));
        C().columns = Y;
        var $ = d.useMemo(function() {
          return Fn(S().allColumns, Pe(Y), {
            instance: C()
          }).map(Re);
        }, [Y, S, C].concat(Fn(S().allColumnsDeps, [], {
          instance: C()
        })));
        C().allColumns = $;
        var cn = d.useMemo(function() {
          for (var gn = [], $n = [], ue = {}, Se = [].concat($); Se.length; ) {
            var se = Se.shift();
            Bt({
              data: N,
              rows: gn,
              flatRows: $n,
              rowsById: ue,
              column: se,
              getRowId: _,
              getSubRows: x,
              accessValueHooks: S().accessValue,
              getInstance: C
            });
          }
          return [gn, $n, ue];
        }, [$, N, _, x, S, C]), Ln = cn[0], On = cn[1], Xn = cn[2];
        Object.assign(C(), {
          rows: Ln,
          initialRows: [].concat(Ln),
          flatRows: On,
          rowsById: Xn
          // materializedColumns,
        }), bn(S().useInstanceAfterData, C());
        var tn = d.useMemo(function() {
          return Fn(S().visibleColumns, $, {
            instance: C()
          }).map(function(gn) {
            return be(gn, B);
          });
        }, [S, $, C, B].concat(Fn(S().visibleColumnsDeps, [], {
          instance: C()
        })));
        $ = d.useMemo(function() {
          var gn = [].concat(tn);
          return $.forEach(function($n) {
            gn.find(function(ue) {
              return ue.id === $n.id;
            }) || gn.push($n);
          }), gn;
        }, [$, tn]), C().allColumns = $;
        {
          var le = $.filter(function(gn, $n) {
            return $.findIndex(function(ue) {
              return ue.id === gn.id;
            }) !== $n;
          });
          if (le.length)
            throw console.info($), new Error('Duplicate columns were found with ids: "' + le.map(function(gn) {
              return gn.id;
            }).join(", ") + '" in the columns array above');
        }
        var Bn = d.useMemo(function() {
          return Fn(S().headerGroups, Ee(tn, B), C());
        }, [S, tn, B, C].concat(Fn(S().headerGroupsDeps, [], {
          instance: C()
        })));
        C().headerGroups = Bn;
        var Sn = d.useMemo(function() {
          return Bn.length ? Bn[0].headers : [];
        }, [Bn]);
        C().headers = Sn, C().flatHeaders = Bn.reduce(function(gn, $n) {
          return [].concat(gn, $n.headers);
        }, []), bn(S().useInstanceBeforeDimensions, C());
        var Mn = tn.filter(function(gn) {
          return gn.isVisible;
        }).map(function(gn) {
          return gn.id;
        }).sort().join("_");
        tn = d.useMemo(
          function() {
            return tn.filter(function(gn) {
              return gn.isVisible;
            });
          },
          // eslint-disable-next-line react-hooks/exhaustive-deps
          [tn, Mn]
        ), C().visibleColumns = tn;
        var Un = dt(Sn), ce = Un[0], et = Un[1], Pt = Un[2];
        return C().totalColumnsMinWidth = ce, C().totalColumnsWidth = et, C().totalColumnsMaxWidth = Pt, bn(S().useInstance, C()), [].concat(C().flatHeaders, C().allColumns).forEach(function(gn) {
          gn.render = fn(C(), gn), gn.getHeaderProps = vn(S().getHeaderProps, {
            instance: C(),
            column: gn
          }), gn.getFooterProps = vn(S().getFooterProps, {
            instance: C(),
            column: gn
          });
        }), C().headerGroups = d.useMemo(function() {
          return Bn.filter(function(gn, $n) {
            return gn.headers = gn.headers.filter(function(ue) {
              var Se = function se(Ve) {
                return Ve.filter(function(Ce) {
                  return Ce.headers ? se(Ce.headers) : Ce.isVisible;
                }).length;
              };
              return ue.headers ? Se(ue.headers) : ue.isVisible;
            }), gn.headers.length ? (gn.getHeaderGroupProps = vn(S().getHeaderGroupProps, {
              instance: C(),
              headerGroup: gn,
              index: $n
            }), gn.getFooterGroupProps = vn(S().getFooterGroupProps, {
              instance: C(),
              headerGroup: gn,
              index: $n
            }), !0) : !1;
          });
        }, [Bn, C, S]), C().footerGroups = [].concat(C().headerGroups).reverse(), C().prepareRow = d.useCallback(function(gn) {
          gn.getRowProps = vn(S().getRowProps, {
            instance: C(),
            row: gn
          }), gn.allCells = $.map(function($n) {
            var ue = gn.values[$n.id], Se = {
              column: $n,
              row: gn,
              value: ue
            };
            return Se.getCellProps = vn(S().getCellProps, {
              instance: C(),
              cell: Se
            }), Se.render = fn(C(), $n, {
              row: gn,
              cell: Se,
              value: ue
            }), Se;
          }), gn.cells = tn.map(function($n) {
            return gn.allCells.find(function(ue) {
              return ue.column.id === $n.id;
            });
          }), bn(S().prepareRow, gn, {
            instance: C()
          });
        }, [S, C, $, tn]), C().getTableProps = vn(S().getTableProps, {
          instance: C()
        }), C().getTableBodyProps = vn(S().getTableBodyProps, {
          instance: C()
        }), bn(S().useFinalInstance, C()), C();
      };
      function dt(e, t) {
        t === void 0 && (t = 0);
        var u = 0, a = 0, p = 0, m = 0;
        return e.forEach(function(C) {
          var S = C.headers;
          if (C.totalLeft = t, S && S.length) {
            var A = dt(S, t), N = A[0], I = A[1], q = A[2], B = A[3];
            C.totalMinWidth = N, C.totalWidth = I, C.totalMaxWidth = q, C.totalFlexWidth = B;
          } else
            C.totalMinWidth = C.minWidth, C.totalWidth = Math.min(Math.max(C.minWidth, C.width), C.maxWidth), C.totalMaxWidth = C.maxWidth, C.totalFlexWidth = C.canResize ? C.totalWidth : 0;
          C.isVisible && (t += C.totalWidth, u += C.totalMinWidth, a += C.totalWidth, p += C.totalMaxWidth, m += C.totalFlexWidth);
        }), [u, a, p, m];
      }
      function Bt(e) {
        var t = e.data, u = e.rows, a = e.flatRows, p = e.rowsById, m = e.column, C = e.getRowId, S = e.getSubRows, A = e.accessValueHooks, N = e.getInstance, I = function q(B, x, _, L, Z) {
          _ === void 0 && (_ = 0);
          var yn = B, mn = C(B, x, L), j = p[mn];
          if (j)
            j.subRows && j.originalSubRows.forEach(function(Hn, J) {
              return q(Hn, J, _ + 1, j);
            });
          else if (j = {
            id: mn,
            original: yn,
            index: x,
            depth: _,
            cells: [{}]
            // This is a dummy cell
          }, j.cells.map = en, j.cells.filter = en, j.cells.forEach = en, j.cells[0].getCellProps = en, j.values = {}, Z.push(j), a.push(j), p[mn] = j, j.originalSubRows = S(B, x), j.originalSubRows) {
            var Pn = [];
            j.originalSubRows.forEach(function(Hn, J) {
              return q(Hn, J, _ + 1, j, Pn);
            }), j.subRows = Pn;
          }
          m.accessor && (j.values[m.id] = m.accessor(B, x, j, Z, t)), j.values[m.id] = Fn(A, j.values[m.id], {
            row: j,
            column: m,
            instance: N()
          }, !0);
        };
        t.forEach(function(q, B) {
          return I(q, B, 0, void 0, u);
        });
      }
      w.resetExpanded = "resetExpanded", w.toggleRowExpanded = "toggleRowExpanded", w.toggleAllRowsExpanded = "toggleAllRowsExpanded";
      var ft = function(t) {
        t.getToggleAllRowsExpandedProps = [Ht], t.getToggleRowExpandedProps = [Ft], t.stateReducers.push(Wt), t.useInstance.push($e), t.prepareRow.push(Gt);
      };
      ft.pluginName = "useExpanded";
      var Ht = function(t, u) {
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
      function Wt(e, t, u, a) {
        if (t.type === w.init)
          return y({
            expanded: {}
          }, e);
        if (t.type === w.resetExpanded)
          return y({}, e, {
            expanded: a.initialState.expanded || {}
          });
        if (t.type === w.toggleAllRowsExpanded) {
          var p = t.value, m = a.rowsById, C = Object.keys(m).length === Object.keys(e.expanded).length, S = typeof p < "u" ? p : !C;
          if (S) {
            var A = {};
            return Object.keys(m).forEach(function(Z) {
              A[Z] = !0;
            }), y({}, e, {
              expanded: A
            });
          }
          return y({}, e, {
            expanded: {}
          });
        }
        if (t.type === w.toggleRowExpanded) {
          var N = t.id, I = t.value, q = e.expanded[N], B = typeof I < "u" ? I : !q;
          if (!q && B) {
            var x;
            return y({}, e, {
              expanded: y({}, e.expanded, (x = {}, x[N] = !0, x))
            });
          } else if (q && !B) {
            var _ = e.expanded;
            _[N];
            var L = O(_, [N].map(M));
            return y({}, e, {
              expanded: L
            });
          } else
            return e;
        }
      }
      function $e(e) {
        var t = e.data, u = e.rows, a = e.rowsById, p = e.manualExpandedKey, m = p === void 0 ? "expanded" : p, C = e.paginateExpandedRows, S = C === void 0 ? !0 : C, A = e.expandSubRows, N = A === void 0 ? !0 : A, I = e.autoResetExpanded, q = I === void 0 ? !0 : I, B = e.getHooks, x = e.plugins, _ = e.state.expanded, L = e.dispatch;
        Jn(x, ["useSortBy", "useGroupBy", "usePivotColumns", "useGlobalFilter"], "useExpanded");
        var Z = An(q), yn = !!(Object.keys(a).length && Object.keys(_).length);
        yn && Object.keys(a).some(function($) {
          return !_[$];
        }) && (yn = !1), zn(function() {
          Z() && L({
            type: w.resetExpanded
          });
        }, [L, t]);
        var mn = d.useCallback(function($, cn) {
          L({
            type: w.toggleRowExpanded,
            id: $,
            value: cn
          });
        }, [L]), j = d.useCallback(function($) {
          return L({
            type: w.toggleAllRowsExpanded,
            value: $
          });
        }, [L]), Pn = d.useMemo(function() {
          return S ? H(u, {
            manualExpandedKey: m,
            expanded: _,
            expandSubRows: N
          }) : u;
        }, [S, u, m, _, N]), Hn = d.useMemo(function() {
          return ko(_);
        }, [_]), J = An(e), Y = vn(B().getToggleAllRowsExpandedProps, {
          instance: J()
        });
        Object.assign(e, {
          preExpandedRows: u,
          expandedRows: Pn,
          rows: Pn,
          expandedDepth: Hn,
          isAllRowsExpanded: yn,
          toggleRowExpanded: mn,
          toggleAllRowsExpanded: j,
          getToggleAllRowsExpandedProps: Y
        });
      }
      function Gt(e, t) {
        var u = t.instance.getHooks, a = t.instance;
        e.toggleRowExpanded = function(p) {
          return a.toggleRowExpanded(e.id, p);
        }, e.getToggleRowExpandedProps = vn(u().getToggleRowExpandedProps, {
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
      var xt = function(t, u, a) {
        return t = t.filter(function(p) {
          return u.some(function(m) {
            var C = p.values[m];
            return String(C).toLowerCase().includes(String(a).toLowerCase());
          });
        }), t;
      };
      xt.autoRemove = function(e) {
        return !e;
      };
      var pt = function(t, u, a) {
        return t.filter(function(p) {
          return u.some(function(m) {
            var C = p.values[m];
            return C !== void 0 ? String(C).toLowerCase() === String(a).toLowerCase() : !0;
          });
        });
      };
      pt.autoRemove = function(e) {
        return !e;
      };
      var Vt = function(t, u, a) {
        return t.filter(function(p) {
          return u.some(function(m) {
            var C = p.values[m];
            return C !== void 0 ? String(C) === String(a) : !0;
          });
        });
      };
      Vt.autoRemove = function(e) {
        return !e;
      };
      var Kt = function(t, u, a) {
        return t.filter(function(p) {
          return u.some(function(m) {
            var C = p.values[m];
            return C.includes(a);
          });
        });
      };
      Kt.autoRemove = function(e) {
        return !e || !e.length;
      };
      var gt = function(t, u, a) {
        return t.filter(function(p) {
          return u.some(function(m) {
            var C = p.values[m];
            return C && C.length && a.every(function(S) {
              return C.includes(S);
            });
          });
        });
      };
      gt.autoRemove = function(e) {
        return !e || !e.length;
      };
      var mt = function(t, u, a) {
        return t.filter(function(p) {
          return u.some(function(m) {
            var C = p.values[m];
            return C && C.length && a.some(function(S) {
              return C.includes(S);
            });
          });
        });
      };
      mt.autoRemove = function(e) {
        return !e || !e.length;
      };
      var qt = function(t, u, a) {
        return t.filter(function(p) {
          return u.some(function(m) {
            var C = p.values[m];
            return a.includes(C);
          });
        });
      };
      qt.autoRemove = function(e) {
        return !e || !e.length;
      };
      var zt = function(t, u, a) {
        return t.filter(function(p) {
          return u.some(function(m) {
            var C = p.values[m];
            return C === a;
          });
        });
      };
      zt.autoRemove = function(e) {
        return typeof e > "u";
      };
      var vt = function(t, u, a) {
        return t.filter(function(p) {
          return u.some(function(m) {
            var C = p.values[m];
            return C == a;
          });
        });
      };
      vt.autoRemove = function(e) {
        return e == null;
      };
      var _t = function(t, u, a) {
        var p = a || [], m = p[0], C = p[1];
        if (m = typeof m == "number" ? m : -1 / 0, C = typeof C == "number" ? C : 1 / 0, m > C) {
          var S = m;
          m = C, C = S;
        }
        return t.filter(function(A) {
          return u.some(function(N) {
            var I = A.values[N];
            return I >= m && I <= C;
          });
        });
      };
      _t.autoRemove = function(e) {
        return !e || typeof e[0] != "number" && typeof e[1] != "number";
      };
      var Ze = /* @__PURE__ */ Object.freeze({
        __proto__: null,
        text: xt,
        exactText: pt,
        exactTextCase: Vt,
        includes: Kt,
        includesAll: gt,
        includesSome: mt,
        includesValue: qt,
        exact: zt,
        equals: vt,
        between: _t
      });
      w.resetFilters = "resetFilters", w.setFilter = "setFilter", w.setAllFilters = "setAllFilters";
      var Xt = function(t) {
        t.stateReducers.push(Lo), t.useInstance.push(Oo);
      };
      Xt.pluginName = "useFilters";
      function Lo(e, t, u, a) {
        if (t.type === w.init)
          return y({
            filters: []
          }, e);
        if (t.type === w.resetFilters)
          return y({}, e, {
            filters: a.initialState.filters || []
          });
        if (t.type === w.setFilter) {
          var p = t.columnId, m = t.filterValue, C = a.allColumns, S = a.filterTypes, A = C.find(function(L) {
            return L.id === p;
          });
          if (!A)
            throw new Error("React-Table: Could not find a column with id: " + p);
          var N = z(A.filter, S || {}, Ze), I = e.filters.find(function(L) {
            return L.id === p;
          }), q = Wn(m, I && I.value);
          return rn(N.autoRemove, q, A) ? y({}, e, {
            filters: e.filters.filter(function(L) {
              return L.id !== p;
            })
          }) : I ? y({}, e, {
            filters: e.filters.map(function(L) {
              return L.id === p ? {
                id: p,
                value: q
              } : L;
            })
          }) : y({}, e, {
            filters: [].concat(e.filters, [{
              id: p,
              value: q
            }])
          });
        }
        if (t.type === w.setAllFilters) {
          var B = t.filters, x = a.allColumns, _ = a.filterTypes;
          return y({}, e, {
            // Filter out undefined values
            filters: Wn(B, e.filters).filter(function(L) {
              var Z = x.find(function(mn) {
                return mn.id === L.id;
              }), yn = z(Z.filter, _ || {}, Ze);
              return !rn(yn.autoRemove, L.value, Z);
            })
          });
        }
      }
      function Oo(e) {
        var t = e.data, u = e.rows, a = e.flatRows, p = e.rowsById, m = e.allColumns, C = e.filterTypes, S = e.manualFilters, A = e.defaultCanFilter, N = A === void 0 ? !1 : A, I = e.disableFilters, q = e.state.filters, B = e.dispatch, x = e.autoResetFilters, _ = x === void 0 ? !0 : x, L = d.useCallback(function(J, Y) {
          B({
            type: w.setFilter,
            columnId: J,
            filterValue: Y
          });
        }, [B]), Z = d.useCallback(function(J) {
          B({
            type: w.setAllFilters,
            filters: J
          });
        }, [B]);
        m.forEach(function(J) {
          var Y = J.id, $ = J.accessor, cn = J.defaultCanFilter, Ln = J.disableFilters;
          J.canFilter = $ ? re(Ln === !0 ? !1 : void 0, I === !0 ? !1 : void 0, !0) : re(cn, N, !1), J.setFilter = function(Xn) {
            return L(J.id, Xn);
          };
          var On = q.find(function(Xn) {
            return Xn.id === Y;
          });
          J.filterValue = On && On.value;
        });
        var yn = d.useMemo(function() {
          if (S || !q.length)
            return [u, a, p];
          var J = [], Y = {}, $ = function cn(Ln, On) {
            On === void 0 && (On = 0);
            var Xn = Ln;
            return Xn = q.reduce(function(tn, le) {
              var Bn = le.id, Sn = le.value, Mn = m.find(function(ce) {
                return ce.id === Bn;
              });
              if (!Mn)
                return tn;
              On === 0 && (Mn.preFilteredRows = tn);
              var Un = z(Mn.filter, C || {}, Ze);
              return Un ? (Mn.filteredRows = Un(tn, [Bn], Sn), Mn.filteredRows) : (console.warn("Could not find a valid 'column.filter' for column with the ID: " + Mn.id + "."), tn);
            }, Ln), Xn.forEach(function(tn) {
              J.push(tn), Y[tn.id] = tn, tn.subRows && (tn.subRows = tn.subRows && tn.subRows.length > 0 ? cn(tn.subRows, On + 1) : tn.subRows);
            }), Xn;
          };
          return [$(u), J, Y];
        }, [S, q, u, a, p, m, C]), mn = yn[0], j = yn[1], Pn = yn[2];
        d.useMemo(function() {
          var J = m.filter(function(Y) {
            return !q.find(function($) {
              return $.id === Y.id;
            });
          });
          J.forEach(function(Y) {
            Y.preFilteredRows = mn, Y.filteredRows = mn;
          });
        }, [mn, q, m]);
        var Hn = An(_);
        zn(function() {
          Hn() && B({
            type: w.resetFilters
          });
        }, [B, S ? null : t]), Object.assign(e, {
          preFilteredRows: u,
          preFilteredFlatRows: a,
          preFilteredRowsById: p,
          filteredRows: mn,
          filteredFlatRows: j,
          filteredRowsById: Pn,
          rows: mn,
          flatRows: j,
          rowsById: Pn,
          setFilter: L,
          setAllFilters: Z
        });
      }
      w.resetGlobalFilter = "resetGlobalFilter", w.setGlobalFilter = "setGlobalFilter";
      var Yt = function(t) {
        t.stateReducers.push(jt), t.useInstance.push(Ut);
      };
      Yt.pluginName = "useGlobalFilter";
      function jt(e, t, u, a) {
        if (t.type === w.resetGlobalFilter)
          return y({}, e, {
            globalFilter: a.initialState.globalFilter || void 0
          });
        if (t.type === w.setGlobalFilter) {
          var p = t.filterValue, m = a.userFilterTypes, C = z(a.globalFilter, m || {}, Ze), S = Wn(p, e.globalFilter);
          if (rn(C.autoRemove, S)) {
            e.globalFilter;
            var A = O(e, ["globalFilter"]);
            return A;
          }
          return y({}, e, {
            globalFilter: S
          });
        }
      }
      function Ut(e) {
        var t = e.data, u = e.rows, a = e.flatRows, p = e.rowsById, m = e.allColumns, C = e.filterTypes, S = e.globalFilter, A = e.manualGlobalFilter, N = e.state.globalFilter, I = e.dispatch, q = e.autoResetGlobalFilter, B = q === void 0 ? !0 : q, x = e.disableGlobalFilter, _ = d.useCallback(function(Pn) {
          I({
            type: w.setGlobalFilter,
            filterValue: Pn
          });
        }, [I]), L = d.useMemo(function() {
          if (A || typeof N > "u")
            return [u, a, p];
          var Pn = [], Hn = {}, J = z(S, C || {}, Ze);
          if (!J)
            return console.warn("Could not find a valid 'globalFilter' option."), u;
          m.forEach(function(cn) {
            var Ln = cn.disableGlobalFilter;
            cn.canFilter = re(Ln === !0 ? !1 : void 0, x === !0 ? !1 : void 0, !0);
          });
          var Y = m.filter(function(cn) {
            return cn.canFilter === !0;
          }), $ = function cn(Ln) {
            return Ln = J(Ln, Y.map(function(On) {
              return On.id;
            }), N), Ln.forEach(function(On) {
              Pn.push(On), Hn[On.id] = On, On.subRows = On.subRows && On.subRows.length ? cn(On.subRows) : On.subRows;
            }), Ln;
          };
          return [$(u), Pn, Hn];
        }, [A, N, S, C, m, u, a, p, x]), Z = L[0], yn = L[1], mn = L[2], j = An(B);
        zn(function() {
          j() && I({
            type: w.resetGlobalFilter
          });
        }, [I, A ? null : t]), Object.assign(e, {
          preGlobalFilteredRows: u,
          preGlobalFilteredFlatRows: a,
          preGlobalFilteredRowsById: p,
          globalFilteredRows: Z,
          globalFilteredFlatRows: yn,
          globalFilteredRowsById: mn,
          rows: Z,
          flatRows: yn,
          rowsById: mn,
          setGlobalFilter: _,
          disableGlobalFilter: x
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
      function Ho(e) {
        if (!e.length)
          return null;
        var t = Math.floor(e.length / 2), u = [].concat(e).sort(function(a, p) {
          return a - p;
        });
        return e.length % 2 !== 0 ? u[t] : (u[t - 1] + u[t]) / 2;
      }
      function Fo(e) {
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
        median: Ho,
        unique: Fo,
        uniqueCount: Wo,
        count: Zt
      }), Go = [], xo = {};
      w.resetGroupBy = "resetGroupBy", w.setGroupBy = "setGroupBy", w.toggleGroupBy = "toggleGroupBy";
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
        if (t.type === w.init)
          return y({
            groupBy: []
          }, e);
        if (t.type === w.resetGroupBy)
          return y({}, e, {
            groupBy: a.initialState.groupBy || []
          });
        if (t.type === w.setGroupBy) {
          var p = t.value;
          return y({}, e, {
            groupBy: p
          });
        }
        if (t.type === w.toggleGroupBy) {
          var m = t.columnId, C = t.value, S = typeof C < "u" ? C : !e.groupBy.includes(m);
          return S ? y({}, e, {
            groupBy: [].concat(e.groupBy, [m])
          }) : y({}, e, {
            groupBy: e.groupBy.filter(function(A) {
              return A !== m;
            })
          });
        }
      }
      function Ko(e, t) {
        var u = t.instance.state.groupBy, a = u.map(function(m) {
          return e.find(function(C) {
            return C.id === m;
          });
        }).filter(Boolean), p = e.filter(function(m) {
          return !u.includes(m.id);
        });
        return e = [].concat(a, p), e.forEach(function(m) {
          m.isGrouped = u.includes(m.id), m.groupedIndex = u.indexOf(m.id);
        }), e;
      }
      var qo = {};
      function zo(e) {
        var t = e.data, u = e.rows, a = e.flatRows, p = e.rowsById, m = e.allColumns, C = e.flatHeaders, S = e.groupByFn, A = S === void 0 ? no : S, N = e.manualGroupBy, I = e.aggregations, q = I === void 0 ? qo : I, B = e.plugins, x = e.state.groupBy, _ = e.dispatch, L = e.autoResetGroupBy, Z = L === void 0 ? !0 : L, yn = e.disableGroupBy, mn = e.defaultCanGroupBy, j = e.getHooks;
        Jn(B, ["useColumnOrder", "useFilters"], "useGroupBy");
        var Pn = An(e);
        m.forEach(function(Sn) {
          var Mn = Sn.accessor, Un = Sn.defaultGroupBy, ce = Sn.disableGroupBy;
          Sn.canGroupBy = Mn ? re(Sn.canGroupBy, ce === !0 ? !1 : void 0, yn === !0 ? !1 : void 0, !0) : re(Sn.canGroupBy, Un, mn, !1), Sn.canGroupBy && (Sn.toggleGroupBy = function() {
            return e.toggleGroupBy(Sn.id);
          }), Sn.Aggregated = Sn.Aggregated || Sn.Cell;
        });
        var Hn = d.useCallback(function(Sn, Mn) {
          _({
            type: w.toggleGroupBy,
            columnId: Sn,
            value: Mn
          });
        }, [_]), J = d.useCallback(function(Sn) {
          _({
            type: w.setGroupBy,
            value: Sn
          });
        }, [_]);
        C.forEach(function(Sn) {
          Sn.getGroupByToggleProps = vn(j().getGroupByToggleProps, {
            instance: Pn(),
            header: Sn
          });
        });
        var Y = d.useMemo(function() {
          if (N || !x.length)
            return [u, a, p, Go, xo, a, p];
          var Sn = x.filter(function(se) {
            return m.find(function(Ve) {
              return Ve.id === se;
            });
          }), Mn = function(Ve, Ce, So) {
            var Ke = {};
            return m.forEach(function(oe) {
              if (Sn.includes(oe.id)) {
                Ke[oe.id] = Ce[0] ? Ce[0].values[oe.id] : null;
                return;
              }
              var wo = typeof oe.aggregate == "function" ? oe.aggregate : q[oe.aggregate] || ht[oe.aggregate];
              if (wo) {
                var it = Ce.map(function(tt) {
                  return tt.values[oe.id];
                }), sa = Ve.map(function(tt) {
                  var qe = tt.values[oe.id];
                  if (!So && oe.aggregateValue) {
                    var ze = typeof oe.aggregateValue == "function" ? oe.aggregateValue : q[oe.aggregateValue] || ht[oe.aggregateValue];
                    if (!ze)
                      throw console.info({
                        column: oe
                      }), new Error("React Table: Invalid column.aggregateValue option for column listed above");
                    qe = ze(qe, tt, oe);
                  }
                  return qe;
                });
                Ke[oe.id] = wo(sa, it);
              } else {
                if (oe.aggregate)
                  throw console.info({
                    column: oe
                  }), new Error("React Table: Invalid column.aggregate option for column listed above");
                Ke[oe.id] = null;
              }
            }), Ke;
          }, Un = [], ce = {}, et = [], Pt = {}, gn = [], $n = {}, ue = function se(Ve, Ce, So) {
            if (Ce === void 0 && (Ce = 0), Ce === Sn.length)
              return Ve.map(function(it) {
                return y({}, it, {
                  depth: Ce
                });
              });
            var Ke = Sn[Ce], oe = A(Ve, Ke), wo = Object.entries(oe).map(function(it, sa) {
              var tt = it[0], qe = it[1], ze = Ke + ":" + tt;
              ze = So ? So + ">" + ze : ze;
              var Da = se(qe, Ce + 1, ze), Ra = Ce ? Be(qe, "leafRows") : qe, Cr = Mn(Ra, qe, Ce), dr = {
                id: ze,
                isGrouped: !0,
                groupByID: Ke,
                groupByVal: tt,
                values: Cr,
                subRows: Da,
                leafRows: Ra,
                depth: Ce,
                index: sa
              };
              return Da.forEach(function(ke) {
                Un.push(ke), ce[ke.id] = ke, ke.isGrouped ? (et.push(ke), Pt[ke.id] = ke) : (gn.push(ke), $n[ke.id] = ke);
              }), dr;
            });
            return wo;
          }, Se = ue(u);
          return Se.forEach(function(se) {
            Un.push(se), ce[se.id] = se, se.isGrouped ? (et.push(se), Pt[se.id] = se) : (gn.push(se), $n[se.id] = se);
          }), [Se, Un, ce, et, Pt, gn, $n];
        }, [N, x, u, a, p, m, q, A]), $ = Y[0], cn = Y[1], Ln = Y[2], On = Y[3], Xn = Y[4], tn = Y[5], le = Y[6], Bn = An(Z);
        zn(function() {
          Bn() && _({
            type: w.resetGroupBy
          });
        }, [_, N ? null : t]), Object.assign(e, {
          preGroupedRows: u,
          preGroupedFlatRow: a,
          preGroupedRowsById: p,
          groupedRows: $,
          groupedFlatRows: cn,
          groupedRowsById: Ln,
          onlyGroupedFlatRows: On,
          onlyGroupedRowsById: Xn,
          nonGroupedFlatRows: tn,
          nonGroupedRowsById: le,
          rows: $,
          flatRows: cn,
          rowsById: Ln,
          toggleGroupBy: Hn,
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
          var m = "" + a.values[t];
          return u[m] = Array.isArray(u[m]) ? u[m] : [], u[m].push(a), u;
        }, {});
      }
      var eo = /([0-9]+)/gm, Xo = function(t, u, a) {
        var p = nt(t, u, a), m = p[0], C = p[1];
        for (m = oo(m), C = oo(C), m = m.split(eo).filter(Boolean), C = C.split(eo).filter(Boolean); m.length && C.length; ) {
          var S = m.shift(), A = C.shift(), N = parseInt(S, 10), I = parseInt(A, 10), q = [N, I].sort();
          if (isNaN(q[0])) {
            if (S > A)
              return 1;
            if (A > S)
              return -1;
            continue;
          }
          if (isNaN(q[1]))
            return isNaN(N) ? -1 : 1;
          if (N > I)
            return 1;
          if (I > N)
            return -1;
        }
        return m.length - C.length;
      };
      function Yo(e, t, u) {
        var a = nt(e, t, u), p = a[0], m = a[1];
        return p = p.getTime(), m = m.getTime(), wt(p, m);
      }
      function jo(e, t, u) {
        var a = nt(e, t, u), p = a[0], m = a[1];
        return wt(p, m);
      }
      function Uo(e, t, u) {
        var a = nt(e, t, u), p = a[0], m = a[1];
        for (p = p.split("").filter(Boolean), m = m.split("").filter(Boolean); p.length && m.length; ) {
          var C = p.shift(), S = m.shift(), A = C.toLowerCase(), N = S.toLowerCase();
          if (A > N)
            return 1;
          if (N > A)
            return -1;
          if (C > S)
            return 1;
          if (S > C)
            return -1;
        }
        return p.length - m.length;
      }
      function to(e, t, u) {
        var a = nt(e, t, u), p = a[0], m = a[1], C = /[^0-9.]/gi;
        return p = Number(String(p).replace(C, "")), m = Number(String(m).replace(C, "")), wt(p, m);
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
      w.resetSortBy = "resetSortBy", w.setSortBy = "setSortBy", w.toggleSortBy = "toggleSortBy", w.clearSortBy = "clearSortBy", Cn.sortType = "alphanumeric", Cn.sortDescFirst = !1;
      var ao = function(t) {
        t.getSortByToggleProps = [$o], t.stateReducers.push(ro), t.useInstance.push(uo);
      };
      ao.pluginName = "useSortBy";
      var $o = function(t, u) {
        var a = u.instance, p = u.column, m = a.isMultiSortEvent, C = m === void 0 ? function(S) {
          return S.shiftKey;
        } : m;
        return [t, {
          onClick: p.canSort ? function(S) {
            S.persist(), p.toggleSortBy(void 0, !a.disableMultiSort && C(S));
          } : void 0,
          style: {
            cursor: p.canSort ? "pointer" : void 0
          },
          title: p.canSort ? "Toggle SortBy" : void 0
        }];
      };
      function ro(e, t, u, a) {
        if (t.type === w.init)
          return y({
            sortBy: []
          }, e);
        if (t.type === w.resetSortBy)
          return y({}, e, {
            sortBy: a.initialState.sortBy || []
          });
        if (t.type === w.clearSortBy) {
          var p = e.sortBy, m = p.filter(function($) {
            return $.id !== t.columnId;
          });
          return y({}, e, {
            sortBy: m
          });
        }
        if (t.type === w.setSortBy) {
          var C = t.sortBy;
          return y({}, e, {
            sortBy: C
          });
        }
        if (t.type === w.toggleSortBy) {
          var S = t.columnId, A = t.desc, N = t.multi, I = a.allColumns, q = a.disableMultiSort, B = a.disableSortRemove, x = a.disableMultiRemove, _ = a.maxMultiSortColCount, L = _ === void 0 ? Number.MAX_SAFE_INTEGER : _, Z = e.sortBy, yn = I.find(function($) {
            return $.id === S;
          }), mn = yn.sortDescFirst, j = Z.find(function($) {
            return $.id === S;
          }), Pn = Z.findIndex(function($) {
            return $.id === S;
          }), Hn = typeof A < "u" && A !== null, J = [], Y;
          return !q && N ? j ? Y = "toggle" : Y = "add" : Pn !== Z.length - 1 || Z.length !== 1 ? Y = "replace" : j ? Y = "toggle" : Y = "replace", Y === "toggle" && // Must be toggling
          !B && // If disableSortRemove, disable in general
          !Hn && // Must not be setting desc
          (!N || !x) && // If multi, don't allow if disableMultiRemove
          (j && // Finally, detect if it should indeed be removed
          j.desc && !mn || !j.desc && mn) && (Y = "remove"), Y === "replace" ? J = [{
            id: S,
            desc: Hn ? A : mn
          }] : Y === "add" ? (J = [].concat(Z, [{
            id: S,
            desc: Hn ? A : mn
          }]), J.splice(0, J.length - L)) : Y === "toggle" ? J = Z.map(function($) {
            return $.id === S ? y({}, $, {
              desc: Hn ? A : !j.desc
            }) : $;
          }) : Y === "remove" && (J = Z.filter(function($) {
            return $.id !== S;
          })), y({}, e, {
            sortBy: J
          });
        }
      }
      function uo(e) {
        var t = e.data, u = e.rows, a = e.flatRows, p = e.allColumns, m = e.orderByFn, C = m === void 0 ? Mt : m, S = e.sortTypes, A = e.manualSortBy, N = e.defaultCanSort, I = e.disableSortBy, q = e.flatHeaders, B = e.state.sortBy, x = e.dispatch, _ = e.plugins, L = e.getHooks, Z = e.autoResetSortBy, yn = Z === void 0 ? !0 : Z;
        Jn(_, ["useFilters", "useGlobalFilter", "useGroupBy", "usePivotColumns"], "useSortBy");
        var mn = d.useCallback(function(cn) {
          x({
            type: w.setSortBy,
            sortBy: cn
          });
        }, [x]), j = d.useCallback(function(cn, Ln, On) {
          x({
            type: w.toggleSortBy,
            columnId: cn,
            desc: Ln,
            multi: On
          });
        }, [x]), Pn = An(e);
        q.forEach(function(cn) {
          var Ln = cn.accessor, On = cn.canSort, Xn = cn.disableSortBy, tn = cn.id, le = Ln ? re(Xn === !0 ? !1 : void 0, I === !0 ? !1 : void 0, !0) : re(N, On, !1);
          cn.canSort = le, cn.canSort && (cn.toggleSortBy = function(Sn, Mn) {
            return j(cn.id, Sn, Mn);
          }, cn.clearSortBy = function() {
            x({
              type: w.clearSortBy,
              columnId: cn.id
            });
          }), cn.getSortByToggleProps = vn(L().getSortByToggleProps, {
            instance: Pn(),
            column: cn
          });
          var Bn = B.find(function(Sn) {
            return Sn.id === tn;
          });
          cn.isSorted = !!Bn, cn.sortedIndex = B.findIndex(function(Sn) {
            return Sn.id === tn;
          }), cn.isSortedDesc = cn.isSorted ? Bn.desc : void 0;
        });
        var Hn = d.useMemo(function() {
          if (A || !B.length)
            return [u, a];
          var cn = [], Ln = B.filter(function(Xn) {
            return p.find(function(tn) {
              return tn.id === Xn.id;
            });
          }), On = function Xn(tn) {
            var le = C(
              tn,
              Ln.map(function(Bn) {
                var Sn = p.find(function(ce) {
                  return ce.id === Bn.id;
                });
                if (!Sn)
                  throw new Error("React-Table: Could not find a column with id: " + Bn.id + " while sorting");
                var Mn = Sn.sortType, Un = Oe(Mn) || (S || {})[Mn] || Jo[Mn];
                if (!Un)
                  throw new Error("React-Table: Could not find a valid sortType of '" + Mn + "' for column '" + Bn.id + "'.");
                return function(ce, et) {
                  return Un(ce, et, Bn.id, Bn.desc);
                };
              }),
              // Map the directions
              Ln.map(function(Bn) {
                var Sn = p.find(function(Mn) {
                  return Mn.id === Bn.id;
                });
                return Sn && Sn.sortInverted ? Bn.desc : !Bn.desc;
              })
            );
            return le.forEach(function(Bn) {
              cn.push(Bn), !(!Bn.subRows || Bn.subRows.length === 0) && (Bn.subRows = Xn(Bn.subRows));
            }), le;
          };
          return [On(u), cn];
        }, [A, B, u, a, p, C, S]), J = Hn[0], Y = Hn[1], $ = An(yn);
        zn(function() {
          $() && x({
            type: w.resetSortBy
          });
        }, [A ? null : t]), Object.assign(e, {
          preSortedRows: u,
          preSortedFlatRows: a,
          sortedRows: J,
          sortedFlatRows: Y,
          rows: J,
          flatRows: Y,
          setSortBy: mn,
          toggleSortBy: j
        });
      }
      function Mt(e, t, u) {
        return [].concat(e).sort(function(a, p) {
          for (var m = 0; m < t.length; m += 1) {
            var C = t[m], S = u[m] === !1 || u[m] === "desc", A = C(a, p);
            if (A !== 0)
              return S ? -A : A;
          }
          return u[0] ? a.index - p.index : p.index - a.index;
        });
      }
      var Zo = "usePagination";
      w.resetPage = "resetPage", w.gotoPage = "gotoPage", w.setPageSize = "setPageSize";
      var io = function(t) {
        t.stateReducers.push(Qo), t.useInstance.push(lo);
      };
      io.pluginName = Zo;
      function Qo(e, t, u, a) {
        if (t.type === w.init)
          return y({
            pageSize: 10,
            pageIndex: 0
          }, e);
        if (t.type === w.resetPage)
          return y({}, e, {
            pageIndex: a.initialState.pageIndex || 0
          });
        if (t.type === w.gotoPage) {
          var p = a.pageCount, m = a.page, C = Wn(t.pageIndex, e.pageIndex), S = !1;
          return C > e.pageIndex ? S = p === -1 ? m.length >= e.pageSize : C < p : C < e.pageIndex && (S = C > -1), S ? y({}, e, {
            pageIndex: C
          }) : e;
        }
        if (t.type === w.setPageSize) {
          var A = t.pageSize, N = e.pageSize * e.pageIndex, I = Math.floor(N / A);
          return y({}, e, {
            pageIndex: I,
            pageSize: A
          });
        }
      }
      function lo(e) {
        var t = e.rows, u = e.autoResetPage, a = u === void 0 ? !0 : u, p = e.manualExpandedKey, m = p === void 0 ? "expanded" : p, C = e.plugins, S = e.pageCount, A = e.paginateExpandedRows, N = A === void 0 ? !0 : A, I = e.expandSubRows, q = I === void 0 ? !0 : I, B = e.state, x = B.pageSize, _ = B.pageIndex, L = B.expanded, Z = B.globalFilter, yn = B.filters, mn = B.groupBy, j = B.sortBy, Pn = e.dispatch, Hn = e.data, J = e.manualPagination;
        Jn(C, ["useGlobalFilter", "useFilters", "useGroupBy", "useSortBy", "useExpanded"], "usePagination");
        var Y = An(a);
        zn(function() {
          Y() && Pn({
            type: w.resetPage
          });
        }, [Pn, J ? null : Hn, Z, yn, mn, j]);
        var $ = J ? S : Math.ceil(t.length / x), cn = d.useMemo(function() {
          return $ > 0 ? [].concat(new Array($)).fill(null).map(function(Mn, Un) {
            return Un;
          }) : [];
        }, [$]), Ln = d.useMemo(function() {
          var Mn;
          if (J)
            Mn = t;
          else {
            var Un = x * _, ce = Un + x;
            Mn = t.slice(Un, ce);
          }
          return N ? Mn : H(Mn, {
            manualExpandedKey: m,
            expanded: L,
            expandSubRows: q
          });
        }, [q, L, m, J, _, x, N, t]), On = _ > 0, Xn = $ === -1 ? Ln.length >= x : _ < $ - 1, tn = d.useCallback(function(Mn) {
          Pn({
            type: w.gotoPage,
            pageIndex: Mn
          });
        }, [Pn]), le = d.useCallback(function() {
          return tn(function(Mn) {
            return Mn - 1;
          });
        }, [tn]), Bn = d.useCallback(function() {
          return tn(function(Mn) {
            return Mn + 1;
          });
        }, [tn]), Sn = d.useCallback(function(Mn) {
          Pn({
            type: w.setPageSize,
            pageSize: Mn
          });
        }, [Pn]);
        Object.assign(e, {
          pageOptions: cn,
          pageCount: $,
          page: Ln,
          canPreviousPage: On,
          canNextPage: Xn,
          gotoPage: tn,
          previousPage: le,
          nextPage: Bn,
          setPageSize: Sn
        });
      }
      w.resetPivot = "resetPivot", w.togglePivot = "togglePivot";
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
        if (t.type === w.init)
          return y({
            pivotColumns: co
          }, e);
        if (t.type === w.resetPivot)
          return y({}, e, {
            pivotColumns: a.initialState.pivotColumns || co
          });
        if (t.type === w.togglePivot) {
          var p = t.columnId, m = t.value, C = typeof m < "u" ? m : !e.pivotColumns.includes(p);
          return C ? y({}, e, {
            pivotColumns: [].concat(e.pivotColumns, [p])
          }) : y({}, e, {
            pivotColumns: e.pivotColumns.filter(function(S) {
              return S !== p;
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
        var m = p.pivotColumns.map(function(N) {
          return a.find(function(I) {
            return I.id === N;
          });
        }).filter(Boolean), C = a.filter(function(N) {
          return !N.isPivotSource && !p.groupBy.includes(N.id) && !p.pivotColumns.includes(N.id);
        }), S = function N(I, q, B) {
          I === void 0 && (I = 0), B === void 0 && (B = []);
          var x = m[I];
          if (!x)
            return C.map(function(L) {
              return y({}, L, {
                canPivot: !1,
                isPivoted: !0,
                parent: q,
                depth: I,
                id: "" + (q ? q.id + "." + L.id : L.id),
                accessor: function(yn, mn, j) {
                  if (B.every(function(Pn) {
                    return Pn(j);
                  }))
                    return j.values[L.id];
                }
              });
            });
          var _ = Array.from(x.uniqueValues).sort();
          return _.map(function(L) {
            var Z = y({}, x, {
              Header: x.PivotHeader || typeof x.header == "string" ? x.Header + ": " + L : L,
              isPivotGroup: !0,
              parent: q,
              depth: I,
              id: q ? q.id + "." + x.id + "." + L : x.id + "." + L,
              pivotValue: L
            });
            return Z.columns = N(I + 1, Z, [].concat(B, [function(yn) {
              return yn.values[x.id] === L;
            }])), Z;
          });
        }, A = Pe(S());
        return [].concat(e, A);
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
        var t = e.columns, u = e.allColumns, a = e.flatHeaders, p = e.getHooks, m = e.plugins, C = e.dispatch, S = e.autoResetPivot, A = S === void 0 ? !0 : S, N = e.manaulPivot, I = e.disablePivot, q = e.defaultCanPivot;
        Jn(m, ["useGroupBy"], "usePivotColumns");
        var B = An(e);
        u.forEach(function(L) {
          var Z = L.accessor, yn = L.defaultPivot, mn = L.disablePivot;
          L.canPivot = Z ? re(L.canPivot, mn === !0 ? !1 : void 0, I === !0 ? !1 : void 0, !0) : re(L.canPivot, yn, q, !1), L.canPivot && (L.togglePivot = function() {
            return e.togglePivot(L.id);
          }), L.Aggregated = L.Aggregated || L.Cell;
        });
        var x = function(Z, yn) {
          C({
            type: w.togglePivot,
            columnId: Z,
            value: yn
          });
        };
        a.forEach(function(L) {
          L.getPivotToggleProps = vn(p().getPivotToggleProps, {
            instance: B(),
            header: L
          });
        });
        var _ = An(A);
        zn(function() {
          _() && C({
            type: w.resetPivot
          });
        }, [C, N ? null : t]), Object.assign(e, {
          togglePivot: x
        });
      }
      function Dt(e) {
        e.allCells.forEach(function(t) {
          t.isPivoted = t.column.isPivoted;
        });
      }
      var fo = "useRowSelect";
      w.resetSelectedRows = "resetSelectedRows", w.toggleAllRowsSelected = "toggleAllRowsSelected", w.toggleRowSelected = "toggleRowSelected", w.toggleAllPageRowsSelected = "toggleAllPageRowsSelected";
      var Rt = function(t) {
        t.getToggleRowSelectedProps = [ra], t.getToggleAllRowsSelectedProps = [Nt], t.getToggleAllPageRowsSelectedProps = [ua], t.stateReducers.push(ia), t.useInstance.push(la), t.prepareRow.push(po);
      };
      Rt.pluginName = fo;
      var ra = function(t, u) {
        var a = u.instance, p = u.row, m = a.manualRowSelectedKey, C = m === void 0 ? "isSelected" : m, S = !1;
        return p.original && p.original[C] ? S = !0 : S = p.isSelected, [t, {
          onChange: function(N) {
            p.toggleRowSelected(N.target.checked);
          },
          style: {
            cursor: "pointer"
          },
          checked: S,
          title: "Toggle Row Selected",
          indeterminate: p.isSomeSelected
        }];
      }, Nt = function(t, u) {
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
          indeterminate: !!(!a.isAllPageRowsSelected && a.page.some(function(p) {
            var m = p.id;
            return a.state.selectedRowIds[m];
          }))
        }];
      };
      function ia(e, t, u, a) {
        if (t.type === w.init)
          return y({
            selectedRowIds: {}
          }, e);
        if (t.type === w.resetSelectedRows)
          return y({}, e, {
            selectedRowIds: a.initialState.selectedRowIds || {}
          });
        if (t.type === w.toggleAllRowsSelected) {
          var p = t.value, m = a.isAllRowsSelected, C = a.rowsById, S = a.nonGroupedRowsById, A = S === void 0 ? C : S, N = typeof p < "u" ? p : !m, I = Object.assign({}, e.selectedRowIds);
          return N ? Object.keys(A).forEach(function(Bn) {
            I[Bn] = !0;
          }) : Object.keys(A).forEach(function(Bn) {
            delete I[Bn];
          }), y({}, e, {
            selectedRowIds: I
          });
        }
        if (t.type === w.toggleRowSelected) {
          var q = t.id, B = t.value, x = a.rowsById, _ = a.selectSubRows, L = _ === void 0 ? !0 : _, Z = a.getSubRows, yn = e.selectedRowIds[q], mn = typeof B < "u" ? B : !yn;
          if (yn === mn)
            return e;
          var j = y({}, e.selectedRowIds), Pn = function Bn(Sn) {
            var Mn = x[Sn];
            if (Mn && (Mn.isGrouped || (mn ? j[Sn] = !0 : delete j[Sn]), L && Z(Mn)))
              return Z(Mn).forEach(function(Un) {
                return Bn(Un.id);
              });
          };
          return Pn(q), y({}, e, {
            selectedRowIds: j
          });
        }
        if (t.type === w.toggleAllPageRowsSelected) {
          var Hn = t.value, J = a.page, Y = a.rowsById, $ = a.selectSubRows, cn = $ === void 0 ? !0 : $, Ln = a.isAllPageRowsSelected, On = a.getSubRows, Xn = typeof Hn < "u" ? Hn : !Ln, tn = y({}, e.selectedRowIds), le = function Bn(Sn) {
            var Mn = Y[Sn];
            if (Mn.isGrouped || (Xn ? tn[Sn] = !0 : delete tn[Sn]), cn && On(Mn))
              return On(Mn).forEach(function(Un) {
                return Bn(Un.id);
              });
          };
          return J.forEach(function(Bn) {
            return le(Bn.id);
          }), y({}, e, {
            selectedRowIds: tn
          });
        }
        return e;
      }
      function la(e) {
        var t = e.data, u = e.rows, a = e.getHooks, p = e.plugins, m = e.rowsById, C = e.nonGroupedRowsById, S = C === void 0 ? m : C, A = e.autoResetSelectedRows, N = A === void 0 ? !0 : A, I = e.state.selectedRowIds, q = e.selectSubRows, B = q === void 0 ? !0 : q, x = e.dispatch, _ = e.page, L = e.getSubRows;
        Jn(p, ["useFilters", "useGroupBy", "useSortBy", "useExpanded", "usePagination"], "useRowSelect");
        var Z = d.useMemo(function() {
          var Ln = [];
          return u.forEach(function(On) {
            var Xn = B ? go(On, I, L) : !!I[On.id];
            On.isSelected = !!Xn, On.isSomeSelected = Xn === null, Xn && Ln.push(On);
          }), Ln;
        }, [u, B, I, L]), yn = !!(Object.keys(S).length && Object.keys(I).length), mn = yn;
        yn && Object.keys(S).some(function(Ln) {
          return !I[Ln];
        }) && (yn = !1), yn || _ && _.length && _.some(function(Ln) {
          var On = Ln.id;
          return !I[On];
        }) && (mn = !1);
        var j = An(N);
        zn(function() {
          j() && x({
            type: w.resetSelectedRows
          });
        }, [x, t]);
        var Pn = d.useCallback(function(Ln) {
          return x({
            type: w.toggleAllRowsSelected,
            value: Ln
          });
        }, [x]), Hn = d.useCallback(function(Ln) {
          return x({
            type: w.toggleAllPageRowsSelected,
            value: Ln
          });
        }, [x]), J = d.useCallback(function(Ln, On) {
          return x({
            type: w.toggleRowSelected,
            id: Ln,
            value: On
          });
        }, [x]), Y = An(e), $ = vn(a().getToggleAllRowsSelectedProps, {
          instance: Y()
        }), cn = vn(a().getToggleAllPageRowsSelectedProps, {
          instance: Y()
        });
        Object.assign(e, {
          selectedFlatRows: Z,
          isAllRowsSelected: yn,
          isAllPageRowsSelected: mn,
          toggleRowSelected: J,
          toggleAllRowsSelected: Pn,
          getToggleAllRowsSelectedProps: $,
          getToggleAllPageRowsSelectedProps: cn,
          toggleAllPageRowsSelected: Hn
        });
      }
      function po(e, t) {
        var u = t.instance;
        e.toggleRowSelected = function(a) {
          return u.toggleRowSelected(e.id, a);
        }, e.getToggleRowSelectedProps = vn(u.getHooks().getToggleRowSelectedProps, {
          instance: u,
          row: e
        });
      }
      function go(e, t, u) {
        if (t[e.id])
          return !0;
        var a = u(e);
        if (a && a.length) {
          var p = !0, m = !1;
          return a.forEach(function(C) {
            m && !p || (go(C, t, u) ? m = !0 : p = !1);
          }), p ? !0 : m ? null : !1;
        }
        return !1;
      }
      var mo = function(t) {
        return {};
      }, vo = function(t) {
        return {};
      };
      w.setRowState = "setRowState", w.setCellState = "setCellState", w.resetRowState = "resetRowState";
      var ho = function(t) {
        t.stateReducers.push(Tt), t.useInstance.push(n), t.prepareRow.push(r);
      };
      ho.pluginName = "useRowState";
      function Tt(e, t, u, a) {
        var p = a.initialRowStateAccessor, m = p === void 0 ? mo : p, C = a.initialCellStateAccessor, S = C === void 0 ? vo : C, A = a.rowsById;
        if (t.type === w.init)
          return y({
            rowState: {}
          }, e);
        if (t.type === w.resetRowState)
          return y({}, e, {
            rowState: a.initialState.rowState || {}
          });
        if (t.type === w.setRowState) {
          var N, I = t.rowId, q = t.value, B = typeof e.rowState[I] < "u" ? e.rowState[I] : m(A[I]);
          return y({}, e, {
            rowState: y({}, e.rowState, (N = {}, N[I] = Wn(q, B), N))
          });
        }
        if (t.type === w.setCellState) {
          var x, _, L, Z, yn, mn = t.rowId, j = t.columnId, Pn = t.value, Hn = typeof e.rowState[mn] < "u" ? e.rowState[mn] : m(A[mn]), J = typeof (Hn == null || (x = Hn.cellState) == null ? void 0 : x[j]) < "u" ? Hn.cellState[j] : S((_ = A[mn]) == null || (L = _.cells) == null ? void 0 : L.find(function(Y) {
            return Y.column.id === j;
          }));
          return y({}, e, {
            rowState: y({}, e.rowState, (yn = {}, yn[mn] = y({}, Hn, {
              cellState: y({}, Hn.cellState || {}, (Z = {}, Z[j] = Wn(Pn, J), Z))
            }), yn))
          });
        }
      }
      function n(e) {
        var t = e.autoResetRowState, u = t === void 0 ? !0 : t, a = e.data, p = e.dispatch, m = d.useCallback(function(A, N) {
          return p({
            type: w.setRowState,
            rowId: A,
            value: N
          });
        }, [p]), C = d.useCallback(function(A, N, I) {
          return p({
            type: w.setCellState,
            rowId: A,
            columnId: N,
            value: I
          });
        }, [p]), S = An(u);
        zn(function() {
          S() && p({
            type: w.resetRowState
          });
        }, [a]), Object.assign(e, {
          setRowState: m,
          setCellState: C
        });
      }
      function r(e, t) {
        var u = t.instance, a = u.initialRowStateAccessor, p = a === void 0 ? mo : a, m = u.initialCellStateAccessor, C = m === void 0 ? vo : m, S = u.state.rowState;
        e && (e.state = typeof S[e.id] < "u" ? S[e.id] : p(e), e.setState = function(A) {
          return u.setRowState(e.id, A);
        }, e.cells.forEach(function(A) {
          e.state.cellState || (e.state.cellState = {}), A.state = typeof e.state.cellState[A.column.id] < "u" ? e.state.cellState[A.column.id] : C(A), A.setState = function(N) {
            return u.setCellState(e.id, A.column.id, N);
          };
        }));
      }
      w.resetColumnOrder = "resetColumnOrder", w.setColumnOrder = "setColumnOrder";
      var i = function(t) {
        t.stateReducers.push(c), t.visibleColumnsDeps.push(function(u, a) {
          var p = a.instance;
          return [].concat(u, [p.state.columnOrder]);
        }), t.visibleColumns.push(v), t.useInstance.push(g);
      };
      i.pluginName = "useColumnOrder";
      function c(e, t, u, a) {
        if (t.type === w.init)
          return y({
            columnOrder: []
          }, e);
        if (t.type === w.resetColumnOrder)
          return y({}, e, {
            columnOrder: a.initialState.columnOrder || []
          });
        if (t.type === w.setColumnOrder)
          return y({}, e, {
            columnOrder: Wn(t.columnOrder, e.columnOrder)
          });
      }
      function v(e, t) {
        var u = t.instance.state.columnOrder;
        if (!u || !u.length)
          return e;
        for (var a = [].concat(u), p = [].concat(e), m = [], C = function() {
          var A = a.shift(), N = p.findIndex(function(I) {
            return I.id === A;
          });
          N > -1 && m.push(p.splice(N, 1)[0]);
        }; p.length && a.length; )
          C();
        return [].concat(m, p);
      }
      function g(e) {
        var t = e.dispatch;
        e.setColumnOrder = d.useCallback(function(u) {
          return t({
            type: w.setColumnOrder,
            columnOrder: u
          });
        }, [t]);
      }
      Cn.canResize = !0, w.columnStartResizing = "columnStartResizing", w.columnResizing = "columnResizing", w.columnDoneResizing = "columnDoneResizing", w.resetResize = "resetResize";
      var h = function(t) {
        t.getResizerProps = [R], t.getHeaderProps.push({
          style: {
            position: "relative"
          }
        }), t.stateReducers.push(T), t.useInstance.push(V), t.useInstanceBeforeDimensions.push(E);
      }, R = function(t, u) {
        var a = u.instance, p = u.header, m = a.dispatch, C = function(A, N) {
          var I = !1;
          if (A.type === "touchstart") {
            if (A.touches && A.touches.length > 1)
              return;
            I = !0;
          }
          var q = W(N), B = q.map(function(J) {
            return [J.id, J.totalWidth];
          }), x = I ? Math.round(A.touches[0].clientX) : A.clientX, _, L, Z = function() {
            window.cancelAnimationFrame(_), _ = null, m({
              type: w.columnDoneResizing
            });
          }, yn = function() {
            window.cancelAnimationFrame(_), _ = null, m({
              type: w.columnResizing,
              clientX: L
            });
          }, mn = function(Y) {
            L = Y, _ || (_ = window.requestAnimationFrame(yn));
          }, j = {
            mouse: {
              moveEvent: "mousemove",
              moveHandler: function(Y) {
                return mn(Y.clientX);
              },
              upEvent: "mouseup",
              upHandler: function(Y) {
                document.removeEventListener("mousemove", j.mouse.moveHandler), document.removeEventListener("mouseup", j.mouse.upHandler), Z();
              }
            },
            touch: {
              moveEvent: "touchmove",
              moveHandler: function(Y) {
                return Y.cancelable && (Y.preventDefault(), Y.stopPropagation()), mn(Y.touches[0].clientX), !1;
              },
              upEvent: "touchend",
              upHandler: function(Y) {
                document.removeEventListener(j.touch.moveEvent, j.touch.moveHandler), document.removeEventListener(j.touch.upEvent, j.touch.moveHandler), Z();
              }
            }
          }, Pn = I ? j.touch : j.mouse, Hn = jn() ? {
            passive: !1
          } : !1;
          document.addEventListener(Pn.moveEvent, Pn.moveHandler, Hn), document.addEventListener(Pn.upEvent, Pn.upHandler, Hn), m({
            type: w.columnStartResizing,
            columnId: N.id,
            columnWidth: N.totalWidth,
            headerIdWidths: B,
            clientX: x
          });
        };
        return [t, {
          onMouseDown: function(A) {
            return A.persist() || C(A, p);
          },
          onTouchStart: function(A) {
            return A.persist() || C(A, p);
          },
          style: {
            cursor: "col-resize"
          },
          draggable: !1,
          role: "separator"
        }];
      };
      h.pluginName = "useResizeColumns";
      function T(e, t) {
        if (t.type === w.init)
          return y({
            columnResizing: {
              columnWidths: {}
            }
          }, e);
        if (t.type === w.resetResize)
          return y({}, e, {
            columnResizing: {
              columnWidths: {}
            }
          });
        if (t.type === w.columnStartResizing) {
          var u = t.clientX, a = t.columnId, p = t.columnWidth, m = t.headerIdWidths;
          return y({}, e, {
            columnResizing: y({}, e.columnResizing, {
              startX: u,
              headerIdWidths: m,
              columnWidth: p,
              isResizingColumn: a
            })
          });
        }
        if (t.type === w.columnResizing) {
          var C = t.clientX, S = e.columnResizing, A = S.startX, N = S.columnWidth, I = S.headerIdWidths, q = I === void 0 ? [] : I, B = C - A, x = B / N, _ = {};
          return q.forEach(function(L) {
            var Z = L[0], yn = L[1];
            _[Z] = Math.max(yn + yn * x, 0);
          }), y({}, e, {
            columnResizing: y({}, e.columnResizing, {
              columnWidths: y({}, e.columnResizing.columnWidths, {}, _)
            })
          });
        }
        if (t.type === w.columnDoneResizing)
          return y({}, e, {
            columnResizing: y({}, e.columnResizing, {
              startX: null,
              isResizingColumn: null
            })
          });
      }
      var E = function(t) {
        var u = t.flatHeaders, a = t.disableResizing, p = t.getHooks, m = t.state.columnResizing, C = An(t);
        u.forEach(function(S) {
          var A = re(S.disableResizing === !0 ? !1 : void 0, a === !0 ? !1 : void 0, !0);
          S.canResize = A, S.width = m.columnWidths[S.id] || S.originalWidth || S.width, S.isResizing = m.isResizingColumn === S.id, A && (S.getResizerProps = vn(p().getResizerProps, {
            instance: C(),
            header: S
          }));
        });
      };
      function V(e) {
        var t = e.plugins, u = e.dispatch, a = e.autoResetResize, p = a === void 0 ? !0 : a, m = e.columns;
        Jn(t, ["useAbsoluteLayout"], "useResizeColumns");
        var C = An(p);
        zn(function() {
          C() && u({
            type: w.resetResize
          });
        }, [m]);
        var S = d.useCallback(function() {
          return u({
            type: w.resetResize
          });
        }, [u]);
        Object.assign(e, {
          resetResizing: S
        });
      }
      function W(e) {
        var t = [], u = function a(p) {
          p.columns && p.columns.length && p.columns.map(a), t.push(p);
        };
        return u(e), t;
      }
      var G = {
        position: "absolute",
        top: 0
      }, k = function(t) {
        t.getTableBodyProps.push(F), t.getRowProps.push(F), t.getHeaderGroupProps.push(F), t.getFooterGroupProps.push(F), t.getHeaderProps.push(function(u, a) {
          var p = a.column;
          return [u, {
            style: y({}, G, {
              left: p.totalLeft + "px",
              width: p.totalWidth + "px"
            })
          }];
        }), t.getCellProps.push(function(u, a) {
          var p = a.cell;
          return [u, {
            style: y({}, G, {
              left: p.column.totalLeft + "px",
              width: p.column.totalWidth + "px"
            })
          }];
        }), t.getFooterProps.push(function(u, a) {
          var p = a.column;
          return [u, {
            style: y({}, G, {
              left: p.totalLeft + "px",
              width: p.totalWidth + "px"
            })
          }];
        });
      };
      k.pluginName = "useAbsoluteLayout";
      var F = function(t, u) {
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
      function kn(e) {
        e.getTableProps.push(sn), e.getRowProps.push(K), e.getHeaderGroupProps.push(K), e.getFooterGroupProps.push(K), e.getHeaderProps.push(Nn), e.getCellProps.push(nn), e.getFooterProps.push(wn);
      }
      kn.pluginName = "useFlexLayout";
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
      }, Nn = function(t, u) {
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
      }, wn = function(t, u) {
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
      w.columnStartResizing = "columnStartResizing", w.columnResizing = "columnResizing", w.columnDoneResizing = "columnDoneResizing", w.resetResize = "resetResize";
      function Gn(e) {
        e.stateReducers.push(Dn), e.getTableProps.push(pn), e.getHeaderProps.push(hn), e.getRowProps.push(qn);
      }
      Gn.pluginName = "useGridLayout";
      var pn = function(t, u) {
        var a = u.instance, p = a.visibleColumns.map(function(m) {
          var C;
          return a.state.gridLayout.columnWidths[m.id] ? a.state.gridLayout.columnWidths[m.id] + "px" : (C = a.state.columnResizing) != null && C.isResizingColumn ? a.state.gridLayout.startWidths[m.id] + "px" : typeof m.width == "number" ? m.width + "px" : m.width;
        });
        return [t, {
          style: {
            display: "grid",
            gridTemplateColumns: p.join(" ")
          }
        }];
      }, hn = function(t, u) {
        var a = u.column;
        return [t, {
          id: "header-cell-" + a.id,
          style: {
            position: "sticky",
            //enables a scroll wrapper to be placed around the table and have sticky headers
            gridColumn: "span " + a.totalVisibleHeaderCount
          }
        }];
      }, qn = function(t, u) {
        var a = u.row;
        return a.isExpanded ? [t, {
          style: {
            gridColumn: "1 / " + (a.cells.length + 1)
          }
        }] : [t, {}];
      };
      function Dn(e, t, u, a) {
        if (t.type === w.init)
          return y({
            gridLayout: {
              columnWidths: {}
            }
          }, e);
        if (t.type === w.resetResize)
          return y({}, e, {
            gridLayout: {
              columnWidths: {}
            }
          });
        if (t.type === w.columnStartResizing) {
          var p = t.columnId, m = t.headerIdWidths, C = Kn(p);
          if (C !== void 0) {
            var S = a.visibleColumns.reduce(function(J, Y) {
              var $;
              return y({}, J, ($ = {}, $[Y.id] = Kn(Y.id), $));
            }, {}), A = a.visibleColumns.reduce(function(J, Y) {
              var $;
              return y({}, J, ($ = {}, $[Y.id] = Y.minWidth, $));
            }, {}), N = a.visibleColumns.reduce(function(J, Y) {
              var $;
              return y({}, J, ($ = {}, $[Y.id] = Y.maxWidth, $));
            }, {}), I = m.map(function(J) {
              var Y = J[0];
              return [Y, Kn(Y)];
            });
            return y({}, e, {
              gridLayout: y({}, e.gridLayout, {
                startWidths: S,
                minWidths: A,
                maxWidths: N,
                headerIdGridWidths: I,
                columnWidth: C
              })
            });
          } else
            return e;
        }
        if (t.type === w.columnResizing) {
          var q = t.clientX, B = e.columnResizing.startX, x = e.gridLayout, _ = x.columnWidth, L = x.minWidths, Z = x.maxWidths, yn = x.headerIdGridWidths, mn = yn === void 0 ? [] : yn, j = q - B, Pn = j / _, Hn = {};
          return mn.forEach(function(J) {
            var Y = J[0], $ = J[1];
            Hn[Y] = Math.min(Math.max(L[Y], $ + $ * Pn), Z[Y]);
          }), y({}, e, {
            gridLayout: y({}, e.gridLayout, {
              columnWidths: y({}, e.gridLayout.columnWidths, {}, Hn)
            })
          });
        }
        if (t.type === w.columnDoneResizing)
          return y({}, e, {
            gridLayout: y({}, e.gridLayout, {
              startWidths: {},
              minWidths: {},
              maxWidths: {}
            })
          });
      }
      function Kn(e) {
        var t, u = (t = document.getElementById("header-cell-" + e)) == null ? void 0 : t.offsetWidth;
        if (u !== void 0)
          return u;
      }
      s._UNSTABLE_usePivotColumns = so, s.actions = w, s.defaultColumn = Cn, s.defaultGroupByFn = no, s.defaultOrderByFn = Mt, s.defaultRenderer = un, s.emptyRenderer = Rn, s.ensurePluginOrder = Jn, s.flexRender = an, s.functionalUpdate = Wn, s.loopHooks = bn, s.makePropGetter = vn, s.makeRenderer = fn, s.reduceHooks = Fn, s.safeUseLayoutEffect = ae, s.useAbsoluteLayout = k, s.useAsyncDebounce = de, s.useBlockLayout = ln, s.useColumnOrder = i, s.useExpanded = ft, s.useFilters = Xt, s.useFlexLayout = kn, s.useGetLatest = An, s.useGlobalFilter = Yt, s.useGridLayout = Gn, s.useGroupBy = St, s.useMountedLayoutEffect = zn, s.usePagination = io, s.useResizeColumns = h, s.useRowSelect = Rt, s.useRowState = ho, s.useSortBy = ao, s.useTable = at, Object.defineProperty(s, "__esModule", { value: !0 });
    });
  }(Do, Do.exports)), Do.exports;
}
process.env.NODE_ENV === "production" ? Sa.exports = Ou() : Sa.exports = Bu();
var st = Sa.exports;
function Hu(o, f, s) {
  var d = this, b = D.useRef(null), P = D.useRef(0), y = D.useRef(null), O = D.useRef([]), Tn = D.useRef(), M = D.useRef(), En = D.useRef(o), w = D.useRef(!0);
  En.current = o;
  var un = !f && f !== 0 && typeof window < "u";
  if (typeof o != "function")
    throw new TypeError("Expected a function");
  f = +f || 0, s = s || {};
  var Rn = !!s.leading, Cn = "trailing" in s ? !!s.trailing : !0, dn = "maxWait" in s, xn = dn ? Math.max(+s.maxWait || 0, f) : null, vn = D.useCallback(function(an) {
    var _n = O.current, Qn = Tn.current;
    return O.current = Tn.current = null, P.current = an, M.current = En.current.apply(Qn, _n);
  }, []), Fn = D.useCallback(function(an, _n) {
    un && cancelAnimationFrame(y.current), y.current = un ? requestAnimationFrame(an) : setTimeout(an, _n);
  }, [un]), bn = D.useCallback(function(an) {
    if (!w.current)
      return !1;
    var _n = an - b.current, Qn = an - P.current;
    return !b.current || _n >= f || _n < 0 || dn && Qn >= xn;
  }, [xn, dn, f]), Jn = D.useCallback(function(an) {
    return y.current = null, Cn && O.current ? vn(an) : (O.current = Tn.current = null, M.current);
  }, [vn, Cn]), Wn = D.useCallback(function() {
    var an = Date.now();
    if (bn(an))
      return Jn(an);
    if (w.current) {
      var _n = an - b.current, Qn = an - P.current, Yn = f - _n, ne = dn ? Math.min(Yn, xn - Qn) : Yn;
      Fn(Wn, ne);
    }
  }, [xn, dn, bn, Fn, Jn, f]), An = D.useCallback(function() {
    y.current && (un ? cancelAnimationFrame(y.current) : clearTimeout(y.current)), P.current = 0, O.current = b.current = Tn.current = y.current = null;
  }, [un]), ae = D.useCallback(function() {
    return y.current ? Jn(Date.now()) : M.current;
  }, [Jn]);
  D.useEffect(function() {
    return w.current = !0, function() {
      w.current = !1;
    };
  }, []);
  var zn = D.useCallback(function() {
    for (var an = [], _n = 0; _n < arguments.length; _n++)
      an[_n] = arguments[_n];
    var Qn = Date.now(), Yn = bn(Qn);
    if (O.current = an, Tn.current = d, b.current = Qn, Yn) {
      if (!y.current && w.current)
        return P.current = b.current, Fn(Wn, f), Rn ? vn(b.current) : M.current;
      if (dn)
        return Fn(Wn, f), vn(b.current);
    }
    return y.current || Fn(Wn, f), M.current;
  }, [vn, Rn, dn, bn, Fn, Wn, f]), de = D.useCallback(function() {
    return !!y.current;
  }, []), fn = D.useMemo(function() {
    return {
      callback: zn,
      cancel: An,
      flush: ae,
      pending: de
    };
  }, [zn, An, ae, de]);
  return fn;
}
function Fu(o, f) {
  return o === f;
}
function ja(o) {
  return typeof o == "function" ? function() {
    return o;
  } : o;
}
function Wu(o) {
  var f = D.useState(ja(o)), s = f[0], d = f[1], b = D.useCallback(function(P) {
    return d(ja(P));
  }, []);
  return [s, b];
}
function Gu(o, f, s) {
  var d = s && s.equalityFn || Fu, b = Wu(o), P = b[0], y = b[1], O = Hu(D.useCallback(function(M) {
    return y(M);
  }, [y]), f, s), Tn = D.useRef(o);
  return D.useEffect(function() {
    d(Tn.current, o) || (O.callback(o), Tn.current = o);
  }, [o, O, d]), [P, { cancel: O.cancel, pending: O.pending, flush: O.flush }];
}
function xu(o) {
  if (Array.isArray(o) || (o.general.geoType === "us-county" || o.general.geoType === "single-state" || o.general.geoType === "us" && (o != null && o.data)) && (o == null || o.data.forEach((f) => {
    f[o.columns.geo.name] && (!isNaN(parseInt(f[o.columns.geo.name])) && f[o.columns.geo.name].length === 4 && (f[o.columns.geo.name] = 0 + f[o.columns.geo.name]), f[o.columns.geo.name] = f[o.columns.geo.name].toString());
  })), Array.isArray(o) && o.length > 0) {
    let f = Object.keys(o[0]), s = ["fips", "FIPS", "fips codes", "FIPS CODES", "Fips Codes", "fips Codes", "Fips codes", "FIPS Codes"];
    const d = f.filter((b) => s.includes(b));
    if (!d.length)
      return;
    o == null || o.forEach((b) => {
      b[d] && (!isNaN(parseInt(b[d])) && b[d].length === 4 && (b[d] = 0 + b[d]), b[d] = b[d].toString());
    });
  }
  return o;
}
const wa = 10, ot = {
  emptyCols: "It looks like your column headers are missing some data. Please make sure all of your columns have titles and upload your file again.",
  emptyData: "Your data file is empty.",
  dataType: "Your datatype is not supported.",
  fileType: "The file type that you are trying to upload is not supported.",
  formatting: "Please check the formatting of your data file.",
  failedFetch: "Error fetching or parsing data file.",
  urlInvalid: "Please make sure to use a valid URL.",
  cannotReach: "Cannot reach URL, please make sure it's correct.",
  fileTooLarge: `File is too large. Maximum file size is ${wa}MB.`
}, Vu = D.memo(({ globalFilter: o, setGlobalFilter: f, disabled: s = !1 }) => {
  const [d, b] = D.useState(o), [P] = Gu(d, 200);
  D.useEffect(() => {
    typeof P == "string" && P !== o && f(P ?? "");
  }, [P]);
  const y = (O) => {
    b(O.target.value);
  };
  return /* @__PURE__ */ l.createElement("input", { className: "filter", value: d, onChange: y, type: "search", placeholder: "Filter...", disabled: s });
}), Ua = D.memo(({ globalFilter: o, data: f, setGlobalFilter: s }) => /* @__PURE__ */ l.createElement("header", { className: "data-table-header" }, /* @__PURE__ */ l.createElement("h2", null, "Data Preview"), /* @__PURE__ */ l.createElement(Vu, { globalFilter: o || "", setGlobalFilter: s, disabled: f === null }))), Ku = D.memo(({ previousPage: o, nextPage: f, canPreviousPage: s, canNextPage: d, pageNumber: b, totalPages: P }) => /* @__PURE__ */ l.createElement("footer", { className: "data-table-pagination" }, /* @__PURE__ */ l.createElement("ul", null, /* @__PURE__ */ l.createElement("li", null, /* @__PURE__ */ l.createElement("button", { onClick: () => o(), className: "btn btn-prev", disabled: !s, title: "Previous Page" })), /* @__PURE__ */ l.createElement("li", null, /* @__PURE__ */ l.createElement("button", { onClick: () => f(), className: "btn btn-next", disabled: !d, title: "Next Page" }))), /* @__PURE__ */ l.createElement("span", null, "Page ", b, " of ", P))), qu = () => {
  const { config: o } = D.useContext(ct), f = D.useMemo(() => o.type === "dashboard" ? Object.values(o.datasets).find((fn) => fn.preview && Array.isArray(fn.data)) : o.data, [o.type, o.data, o.datasets]), [s, d] = D.useState(f), b = (fn) => {
    const an = Object.keys(fn[0]).includes("tableData"), _n = M(an ? fn[0].tableData : fn);
    return xu(_n), _n;
  }, P = (fn) => d(b(fn)), y = D.useContext(Lt), O = async () => {
    if (o.type === "dashboard")
      Object.keys(o.datasets).forEach(async (fn) => {
        if (o.datasets[fn].preview)
          if (o.datasets[fn].dataUrl) {
            const an = await Ta(o.datasets[fn].dataUrl);
            Array.isArray(an) && P(an);
          } else
            Array.isArray(o.datasets[fn].data) && P(o.datasets[fn].data);
      });
    else if (o.dataUrl) {
      const fn = await Ta(o.dataUrl);
      Array.isArray(fn) && P(fn);
    }
  };
  D.useEffect(() => {
    O();
  }, [o.datasets]);
  const Tn = D.useMemo(() => {
    if (!s)
      return [];
    const fn = s.columns ?? [];
    return fn.length > 0 && fn.includes("") && y({ type: "EDITOR_SET_ERRORS", payload: [ot.emptyCols] }), fn.map((an) => ({
      id: `column-${an}`,
      accessor: (Qn) => Qn[an],
      Header: an,
      width: 250
    }));
  }, [s]), M = (fn) => {
    let an = [];
    fn.forEach((Qn) => {
      Object.keys(Qn).forEach((Yn) => {
        an.includes(Yn) === !1 && an.push(Yn);
      });
    });
    const _n = [...fn];
    if (Array.isArray(_n))
      return _n.columns = an, _n;
  }, {
    getTableProps: En,
    getTableBodyProps: w,
    headerGroups: un,
    state: { pageIndex: Rn, globalFilter: Cn },
    prepareRow: dn,
    setGlobalFilter: xn,
    page: vn,
    canPreviousPage: Fn,
    canNextPage: bn,
    pageOptions: Jn,
    nextPage: Wn,
    previousPage: An
  } = st.useTable({ columns: Tn, data: s, initialState: { pageSize: 25 } }, st.useBlockLayout, st.useGlobalFilter, st.useSortBy, st.useResizeColumns, st.usePagination), ae = () => /* @__PURE__ */ l.createElement("section", { className: "no-data" }, /* @__PURE__ */ l.createElement("section", { className: "no-data-message" }, /* @__PURE__ */ l.createElement("section", null, /* @__PURE__ */ l.createElement("h3", null, "No Data"), /* @__PURE__ */ l.createElement("p", null, "Import data to preview"))), /* @__PURE__ */ l.createElement("div", { className: "table-container" }, /* @__PURE__ */ l.createElement("table", { className: "editor data-table", role: "table" }, /* @__PURE__ */ l.createElement("thead", null, /* @__PURE__ */ l.createElement("tr", null, /* @__PURE__ */ l.createElement("th", { scope: "col", colSpan: 1, role: "columnheader" }), /* @__PURE__ */ l.createElement("th", { scope: "col", colSpan: 1, role: "columnheader" }), /* @__PURE__ */ l.createElement("th", { scope: "col", colSpan: 1, role: "columnheader" }))), /* @__PURE__ */ l.createElement("tbody", null, /* @__PURE__ */ l.createElement(l.Fragment, null, [...Array(10)].map((fn, an) => /* @__PURE__ */ l.createElement("tr", { key: an }, /* @__PURE__ */ l.createElement("td", null), /* @__PURE__ */ l.createElement("td", null), /* @__PURE__ */ l.createElement("td", null))))))));
  if (!s)
    return [/* @__PURE__ */ l.createElement(Ua, { key: "header" }), /* @__PURE__ */ l.createElement(ae, { key: "table" })];
  const zn = { previousPage: An, nextPage: Wn, canPreviousPage: Fn, canNextPage: bn, pageNumber: Rn + 1, totalPages: Jn.length }, de = () => /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("section", { className: "data-table-container" }, /* @__PURE__ */ l.createElement("div", { className: "table-container" }, /* @__PURE__ */ l.createElement("table", { className: "data-table", ...En(), "aria-hidden": "true" }, /* @__PURE__ */ l.createElement("thead", null, un.map((fn) => /* @__PURE__ */ l.createElement("tr", { ...fn.getHeaderGroupProps() }, fn.headers.map((an) => /* @__PURE__ */ l.createElement("th", { scope: "col", ...an.getHeaderProps(an.getSortByToggleProps()), className: an.isSorted ? an.isSortedDesc ? "sort sort-desc" : "sort sort-asc" : "", title: an.Header }, an.render("Header"), /* @__PURE__ */ l.createElement("div", { ...an.getResizerProps(), className: "resizer" })))))), /* @__PURE__ */ l.createElement("tbody", { ...w() }, vn.map((fn) => (dn(fn), /* @__PURE__ */ l.createElement("tr", { ...fn.getRowProps() }, fn.cells.map((an) => /* @__PURE__ */ l.createElement("td", { ...an.getCellProps(), title: an.value }, an.render("Cell")))))))))), /* @__PURE__ */ l.createElement(Ku, { ...zn }));
  return [/* @__PURE__ */ l.createElement(Ua, { key: "header", data: s, setGlobalFilter: xn, globalFilter: Cn }), /* @__PURE__ */ l.createElement(de, { key: "table" })];
}, zu = (o) => /* @__PURE__ */ D.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", ...o }, /* @__PURE__ */ D.createElement("path", { d: "M314.222 197.78c51.091 51.091 54.377 132.287 9.75 187.16-6.242 7.73-2.784 3.865-84.94 86.02-54.696 54.696-143.266 54.745-197.99 0-54.711-54.69-54.734-143.255 0-197.99 32.773-32.773 51.835-51.899 63.409-63.457 7.463-7.452 20.331-2.354 20.486 8.192a173.31 173.31 0 0 0 4.746 37.828c.966 4.029-.272 8.269-3.202 11.198L80.632 312.57c-32.755 32.775-32.887 85.892 0 118.8 32.775 32.755 85.892 32.887 118.8 0l75.19-75.2c32.718-32.725 32.777-86.013 0-118.79a83.722 83.722 0 0 0-22.814-16.229c-4.623-2.233-7.182-7.25-6.561-12.346 1.356-11.122 6.296-21.885 14.815-30.405l4.375-4.375c3.625-3.626 9.177-4.594 13.76-2.294 12.999 6.524 25.187 15.211 36.025 26.049zM470.958 41.04c-54.724-54.745-143.294-54.696-197.99 0-82.156 82.156-78.698 78.29-84.94 86.02-44.627 54.873-41.341 136.069 9.75 187.16 10.838 10.838 23.026 19.525 36.025 26.049 4.582 2.3 10.134 1.331 13.76-2.294l4.375-4.375c8.52-8.519 13.459-19.283 14.815-30.405.621-5.096-1.938-10.113-6.561-12.346a83.706 83.706 0 0 1-22.814-16.229c-32.777-32.777-32.718-86.065 0-118.79l75.19-75.2c32.908-32.887 86.025-32.755 118.8 0 32.887 32.908 32.755 86.025 0 118.8l-45.848 45.84c-2.93 2.929-4.168 7.169-3.202 11.198a173.31 173.31 0 0 1 4.746 37.828c.155 10.546 13.023 15.644 20.486 8.192 11.574-11.558 30.636-30.684 63.409-63.457 54.733-54.735 54.71-143.3-.001-197.991z" })), Io = D.createContext();
Io.displayName = "SampleDataContext";
const _u = `STATE,Rate,Location,URL
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
`, Xu = `Race,Age-adjusted rate
Hispanic or Latino,644.2
Non-Hispanic American Indian,636.1
Non-Hispanic Black,563.7
Non-Hispanic Asian or Pacific Islander,202.5
Non-Hispanic White,183.6
`, Yu = `FIPS Codes,County,Public Health Jurisdiction,Percent Vaccinated,Vaccination Coverage Group
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
`, ju = `City,Longitude,Latitude,Value
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
`, Uu = `x,y1,y2,y3,y4
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
`, Ju = `Group_Category,Value
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
`, $u = `[
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
`, Zu = `[
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
]`, Qu = `date,quarter,upper_90,lower_90,random_col
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
`, ni = `[
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
]`, ei = `[
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
]`, ti = `[
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
]`, ba = {
  charts: [
    {
      text: "Chart Sample Data",
      fileName: "valid-data-chart.csv",
      data: Xu
    },
    {
      text: "Box Plot Sample Data",
      fileName: "valid-boxplot.csv",
      data: Ju
    },
    {
      text: "Scatter Plot Sample Data",
      fileName: "valid-scatterplot.csv",
      data: Uu
    },
    {
      text: "Area Chart Sample Data",
      fileName: "valid-area-chart.json",
      data: $u
    },
    {
      text: "Forecast Chart Data",
      fileName: "valid-forecast-data.csv",
      data: Qu
    },
    // {
    //   text: 'Forest Plot Data',
    //   fileName: 'valid-forest-plot-data.csv',
    //   data: validForestPlotData
    // },
    {
      text: "Sankey Chart Data",
      fileName: "valid-sankey-data.json",
      data: ti
    }
  ],
  maps: [
    {
      text: "United States: State Sample Data",
      fileName: "valid-data-map.csv",
      data: _u
    },
    {
      text: "United States: County Sample Data",
      fileName: "valid-county-data.csv",
      data: Yu
    },
    {
      text: "United States: Geo Point Sample Data",
      fileName: "supported-cities.csv",
      data: ju
    },
    {
      text: "United States: Region",
      fileName: "valid-region-data.json",
      data: ei
    },
    {
      text: "World: Geocode Sample Data",
      fileName: "valid-world-geocode.json",
      data: Zu
    },
    {
      text: "World: Default Data",
      fileName: "valid-world-data.json",
      data: ni
    }
  ]
}, cr = ({ text: o, fileName: f, data: s }) => {
  const { editingDataset: d, loadData: b } = D.useContext(Io), P = (O) => b(new Blob([s], { type: "text/csv" }), f, d), y = (O) => O.keyCode === 13 && b(new Blob([s], { type: "text/csv" }), f, d);
  return /* @__PURE__ */ l.createElement(
    "button",
    {
      className: "link link-upload",
      onClick: P,
      onKeyDown: y
    },
    o
  );
}, oi = () => ba.maps.map((o) => /* @__PURE__ */ l.createElement(cr, { key: o.fileName, text: o.text, fileName: o.fileName, data: o.data })), ai = () => ba.charts.map((o) => /* @__PURE__ */ l.createElement(cr, { key: o.fileName, text: o.text, fileName: o.fileName, data: o.data })), ri = () => {
  const { config: o } = D.useContext(Io);
  return /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("h3", { className: "heading-3" }, "Load Sample Data:"), /* @__PURE__ */ l.createElement("ul", { className: "sample-data-list" }, o.type !== "map" && /* @__PURE__ */ l.createElement(ai, null), o.type !== "chart" && /* @__PURE__ */ l.createElement(oi, null)));
}, Aa = () => null;
Aa.data = ba;
Aa.Buttons = ri;
const Ja = (o) => /* @__PURE__ */ D.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", ...o }, /* @__PURE__ */ D.createElement("path", { d: "M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm65.18 216.01H224v80c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16v-80H94.82c-14.28 0-21.41-17.29-11.27-27.36l96.42-95.7c6.65-6.61 17.39-6.61 24.04 0l96.42 95.7c10.15 10.07 3.03 27.36-11.25 27.36zM377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z" }));
function ui() {
  const { config: o, errors: f, tempConfig: s, sharepath: d } = D.useContext(ct), b = (H) => {
    dn({ type: "EDITOR_SET_CONFIG", payload: H });
  }, P = (H) => {
    dn({ type: "EDITOR_SET_ERRORS", payload: H });
  }, y = new Nr(), [O, Tn] = D.useState(o.dataFileSourceType === "url" ? o.dataFileName : o.dataUrl || ""), [M, En] = D.useState(!!o.dataUrl), [w, un] = D.useState(o.type === "dashboard" || !o.data), [Rn, Cn] = D.useState(void 0), dn = D.useContext(Lt), xn = {
    ".csv": "text/csv",
    ".json": "application/json"
  }, vn = (H) => H === void 0 ? "" : H > Math.pow(1024, 3) ? Math.round(H / Math.pow(1024, 3) * 100) / 100 + " GB" : H > Math.pow(1024, 2) ? Math.round(H / Math.pow(1024, 2) * 100) / 100 + " MB" : H > 1024 ? Math.round(H / 1024 * 100) / 100 + " KB" : H + " B", Fn = (H, z, rn) => (z.map(function(en, Vn, jn) {
    if (!jn.find((we) => we.dataKey === en.dataKey))
      return !1;
  }), !(H.columns.indexOf(rn) < 0)), bn = (H) => ca(O) ? ".csv" : Mo(O) ? ".json" : Object.keys(xn).find((z) => H.pathname.endsWith(z)), Jn = async () => {
    let H;
    try {
      H = ca(O) || Mo(O) ? O : new URL(O, window.location.origin);
    } catch {
      throw ot.urlInvalid;
    }
    let z = null;
    const rn = bn(H);
    try {
      await Rr.get(H.toString(), {
        responseType: "blob"
      }).then((en) => {
        z = en.data, rn === ".csv" && z.type === "text/plain" || ca(O) ? z = z.slice(0, z.size, "text/csv") : (z.type === "application/json" || rn === ".json" && z.type === "text/plain" || Mo(O)) && (z = z.slice(0, z.size, "application/json"));
      });
    } catch (en) {
      console.error(en);
      const Vn = en.toString();
      throw Object.values(ot).includes(en) ? Vn : ot.failedFetch;
    }
    return z;
  }, Wn = ([H]) => An(H, Rn, Rn), An = async (H = null, z, rn) => {
    let en = H;
    const Vn = (en == null ? void 0 : en.path) ?? z ?? O, jn = H ? "file" : "url";
    if (jn === "url")
      try {
        en = await Jn();
      } catch (pe) {
        P([pe]);
        return;
      }
    const we = en.size;
    if (we > wa * 1048576) {
      P([ot.fileTooLarge]);
      return;
    }
    const Ae = (() => {
      const pe = (H == null ? void 0 : H.name) || O || z;
      if (jn === "file") {
        const ye = pe.match(/(?:\.([^.]+))?$/g), ve = ye.length === 0 ? ".csv" : ye[0];
        return xn[ve];
      }
      if (jn === "url")
        return "application/json";
    })(), De = new FileReader(), Ie = (pe) => {
      switch (Ae) {
        case "text/csv":
          return Iu(pe);
        case "text/plain":
        case "application/json":
          try {
            return Mo(O) ? JSON.parse(pe).response.docs : JSON.parse(pe);
          } catch {
            P([ot.formatting]);
            return;
          }
        default:
          P([ot.fileType]);
          return;
      }
    };
    De.onload = function() {
      const pe = (ye, ve = !1) => {
        if (o.type === "dashboard") {
          let he = { ...o.datasets };
          Object.keys(he).forEach((In) => he[In].preview = !1);
          const Xe = Ae.split("/")[1].toUpperCase();
          he[rn || Vn] = {
            data: ye,
            // new data
            dataFileSize: we,
            dataFileName: Vn,
            // new file source
            dataFileSourceType: jn,
            // new file source type
            dataFileFormat: Xe,
            preview: !0
          }, M && (he[rn || Vn].dataUrl = Vn);
          const Q = ve ? { ...o, ...s } : o;
          b({ ...Q, datasets: he });
        } else {
          let he = {
            ...o,
            ...s,
            data: ye,
            // new data
            dataFileName: Vn,
            // new file source
            dataFileSourceType: jn,
            // new file source type
            formattedData: y.developerStandardize(ye, o.dataDescription)
          };
          M && (he.dataUrl = Vn), b(he);
        }
      };
      try {
        const ye = Ie(this.result.toString()), ve = y.autoStandardize(ye);
        o.data && o.series ? Fn(ve, o.series, o == null ? void 0 : o.xAxis.dataKey) ? pe(ve, !0) : Pe(
          {
            data: ve,
            dataFileName: Vn,
            dataFileSourceType: jn
          },
          "It appears that your data does not contain all of the columns that your last dataset contained. Continuing will reset your configuration. Do you want to continue?"
        ) : pe(ve), Rn && Cn(void 0), un(!1);
      } catch (ye) {
        P(ye);
      }
    };
    const _e = Ae === "text/csv" ? "utf-8" : "";
    De.readAsText(en, _e);
  };
  D.useEffect(() => {
    let H = { ...s || o };
    if (o.formattedData === void 0 && o.dataDescription) {
      const z = y.developerStandardize(o.data, o.dataDescription);
      z && (H.formattedData = z);
    }
    dn({ type: "EDITOR_SAVE", payload: H });
  }, []);
  const ae = (H, z, rn) => {
    if (o.type === "dashboard") {
      let en = { ...o.datasets[H].dataDescription, [z]: rn }, Vn = y.developerStandardize(o.datasets[H].data, en), jn = { ...o.datasets };
      jn[H] = { ...jn[H], dataDescription: en, formattedData: Vn }, b({ ...o, datasets: jn });
    } else {
      let en = { ...o.dataDescription, [z]: rn }, Vn = y.developerStandardize(o.data, en);
      b({ ...o, formattedData: Vn, dataDescription: en });
    }
  }, zn = (H, z) => {
    if (z) {
      let rn = { ...o.datasets };
      H === !1 ? delete rn[z].dataUrl : rn[z].dataUrl = rn[z].dataFileName, b({ ...o, datasets: rn });
    } else if (o.type !== "dashboard") {
      let rn = { ...o };
      H === !1 ? delete rn.dataUrl : rn.dataUrl = rn.dataFileName, b(rn);
    }
    En(H);
  }, { getRootProps: de, getInputProps: fn, isDragActive: an } = ha({ onDrop: Wn }), { getRootProps: _n, getInputProps: Qn, isDragActive: Yn } = ha({ onDrop: Wn }), ne = () => /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("form", { className: "input-group d-flex", onSubmit: (H) => H.preventDefault() }, /* @__PURE__ */ l.createElement("input", { id: "external-data", type: "text", className: "form-control flex-grow-1 border-right-0", placeholder: "e.g., https://data.cdc.gov/resources/file.json", "aria-label": "Load data from external URL", "aria-describedby": "load-data", value: O, onChange: (H) => Tn(H.target.value) }), /* @__PURE__ */ l.createElement("button", { className: "input-group-text btn btn-primary px-4", type: "submit", id: "load-data", onClick: () => An(null, O, Rn) }, "Load")), /* @__PURE__ */ l.createElement("label", { htmlFor: "keep-url", className: "mt-1 d-flex keep-url" }, /* @__PURE__ */ l.createElement("input", { type: "checkbox", id: "keep-url", checked: M, onChange: () => zn(!M, Rn) }), " Always load from URL (normally will only pull once)")), Pe = (H = {}, z = "Are you sure you want to do this?") => {
    H.newViz = !0, window.confirm(z) === !0 && (dn({ type: "EDITOR_SAVE", payload: H }), un(!0));
  }, Re = () => (
    //todo convert to modal
    /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("button", { className: "btn danger", onClick: () => Pe({ type: o.type, visualizationType: o.visualizationType }, "Resetting will remove your data and settings. Do you want to continue?") }, "Clear", /* @__PURE__ */ l.createElement(Ea, null)), o.dataFileSourceType === "file" && /* @__PURE__ */ l.createElement("div", { className: "link link-replace", ..._n() }, /* @__PURE__ */ l.createElement("input", { ...Qn() }), /* @__PURE__ */ l.createElement("p", null, /* @__PURE__ */ l.createElement("span", null, "or replace file"))))
  ), be = (H, z, rn) => {
    let en = { ...o.datasets };
    rn === !0 ? Object.keys(en).forEach((Vn) => {
      const jn = Vn === H;
      en[Vn][z] = jn;
    }) : en[H][z] = rn, b({ ...o, datasets: en });
  }, Ee = (H) => {
    let z = { ...o.datasets }, rn = { ...o.visualizations };
    Object.keys(rn).forEach((en) => {
      rn[en].dataKey === H && delete rn[en].dataKey;
    }), delete z[H], b({ ...o, datasets: z, visualizations: rn });
  }, fe = (H, z) => {
    if (H === z)
      return;
    let rn = { ...o.datasets }, en = { ...o.visualizations }, Vn = 2, jn = z;
    for (; rn[z]; )
      z = jn + "-" + Vn, Vn++;
    rn[z] = rn[H], delete rn[H], Object.keys(en).forEach((we) => {
      en[we].dataKey === H && (en[we].dataKey = z);
    }), b({ ...o, datasets: rn, visualizations: en });
  };
  let me, re = !1;
  o.type === "dashboard" ? re = Object.keys(o.datasets).length > 0 : (me = o, re = !!o.formattedData || o.data && o.dataDescription && y.autoStandardize(o.data)), (o.visualizationType === "Box Plot" && o.data || o.visualizationType === "Scatter Plot") && (re = !0);
  const Oe = /* @__PURE__ */ l.createElement(l.Fragment, null, o.filters && o.filters.map(
    (H, z) => H.type !== "url" ? /* @__PURE__ */ l.createElement(l.Fragment, null) : /* @__PURE__ */ l.createElement("fieldset", { key: H.key, className: "edit-block url-filters-block" }, /* @__PURE__ */ l.createElement(
      "button",
      {
        onClick: (rn) => {
          let en = [...o.filters];
          en.splice(z, 1), b({ ...o, filters: en, runtimeDataUrl: void 0 });
        }
      },
      "Remove"
    ), /* @__PURE__ */ l.createElement("label", null, /* @__PURE__ */ l.createElement("span", { className: "edit-label column-heading" }, "Label", /* @__PURE__ */ l.createElement(on, { style: { textTransform: "none" } }, /* @__PURE__ */ l.createElement(on.Target, null, /* @__PURE__ */ l.createElement(Pa, { display: "question" })), /* @__PURE__ */ l.createElement(on.Content, null, /* @__PURE__ */ l.createElement("p", { style: { padding: "0.5rem" } }, "The label that will appear above the dropdown filter.")))), " ", /* @__PURE__ */ l.createElement(
      "input",
      {
        type: "text",
        defaultValue: H.label,
        onChange: (rn) => {
          let en = [...o.filters];
          en[z].label = rn.target.value, b({ ...o, filters: en });
        }
      }
    )), /* @__PURE__ */ l.createElement("label", null, /* @__PURE__ */ l.createElement("span", { className: "edit-label column-heading" }, "Query string parameter", /* @__PURE__ */ l.createElement(on, { style: { textTransform: "none" } }, /* @__PURE__ */ l.createElement(on.Target, null, /* @__PURE__ */ l.createElement(Pa, { display: "question" })), /* @__PURE__ */ l.createElement(on.Content, null, /* @__PURE__ */ l.createElement("p", { style: { padding: "0.5rem" } }, "Name of the query string parameter that will be appended to the URL above with the values provided below.")))), " ", /* @__PURE__ */ l.createElement(
      "input",
      {
        type: "text",
        defaultValue: H.queryParameter,
        onChange: (rn) => {
          let en = [...o.filters];
          en[z].queryParameter = rn.target.value, b({ ...o, filters: en });
        }
      }
    )), /* @__PURE__ */ l.createElement("label", null, /* @__PURE__ */ l.createElement("span", { className: "edit-label column-heading" }, "Values"), " "), /* @__PURE__ */ l.createElement("ul", { className: "value-list" }, H.orderedValues && H.orderedValues.map((rn, en) => /* @__PURE__ */ l.createElement("li", null, rn, /* @__PURE__ */ l.createElement(
      "input",
      {
        type: "text",
        placeholder: "Enter value display name here",
        value: H.labels ? H.labels[rn] : void 0,
        className: "url-value-label",
        onChange: (Vn) => {
          let jn = [...o.filters];
          jn[z].labels = jn[z].labels || {}, jn[z].labels[rn] = Vn.target.value, b({ ...o, filters: jn });
        }
      }
    ), /* @__PURE__ */ l.createElement(
      "button",
      {
        onClick: () => {
          let Vn = [...o.filters];
          Vn[z].labels && delete Vn[z].labels[Vn[z].orderedValues[en]], Vn[z].orderedValues.splice(en, 1), b({ ...o, filters: Vn });
        }
      },
      "X"
    )))), /* @__PURE__ */ l.createElement(
      "form",
      {
        onSubmit: (rn) => {
          if (rn.preventDefault(), !o.filters[z].orderedValues || o.filters[z].orderedValues.indexOf(rn.target[0].value) === -1) {
            let en = [...o.filters];
            en[z].orderedValues = en[z].orderedValues || [], en[z].orderedValues.push(rn.target[0].value), en[z].values = en[z].orderedValues, en[z].active || (en[z].active = rn.target[0].value), rn.target[0].value = "", b({ ...o, filters: en });
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
        b({ ...o, filters: o.filters ? [...o.filters, { type: "url", key: Date.now() }] : [{ type: "url", key: Date.now() }] });
      }
    },
    "Add New URL Filter"
  )), Be = o.visualizationType !== "Box Plot" && o.visualizationType !== "Scatter Plot";
  return /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("div", { className: "left-col" }, o.type === "dashboard" && Object.keys(o.datasets).length > 0 && /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("div", { className: "heading-3" }, "Data Sources"), /* @__PURE__ */ l.createElement("table", null, /* @__PURE__ */ l.createElement("thead", null, /* @__PURE__ */ l.createElement("tr", null, /* @__PURE__ */ l.createElement("th", null, "Name"), /* @__PURE__ */ l.createElement("th", null, "Size"), /* @__PURE__ */ l.createElement("th", null, "Type"), /* @__PURE__ */ l.createElement("th", { colSpan: 4 }, "Actions"))), /* @__PURE__ */ l.createElement("tbody", null, Object.keys(o.datasets).map(
    (H) => o.datasets[H].dataFileName && /* @__PURE__ */ l.createElement("tr", { key: `tr-${H}` }, /* @__PURE__ */ l.createElement("td", null, /* @__PURE__ */ l.createElement("input", { className: "dataset-name-input", type: "text", defaultValue: H, onBlur: (z) => fe(H, z.target.value) })), /* @__PURE__ */ l.createElement("td", null, vn(o.datasets[H].dataFileSize)), /* @__PURE__ */ l.createElement("td", null, o.datasets[H].dataFileFormat), /* @__PURE__ */ l.createElement("td", null, /* @__PURE__ */ l.createElement("button", { className: "btn btn-primary", onClick: () => be(H, "preview", !0) }, "Preview Data")), /* @__PURE__ */ l.createElement("td", null, /* @__PURE__ */ l.createElement(
      "button",
      {
        className: "btn btn-primary",
        onClick: () => {
          Rn === H ? (Cn(void 0), Tn(""), En(!1)) : (Cn(H), Tn(o.datasets[H].dataUrl || o.datasets[H].dataFileName), En(!!o.datasets[H].dataUrl));
        }
      },
      "Edit Data"
    )), /* @__PURE__ */ l.createElement("td", null, /* @__PURE__ */ l.createElement("button", { className: "btn btn-primary", onClick: () => Ee(H) }, "X")))
  )))), (me == null ? void 0 : me.data) && /* @__PURE__ */ l.createElement(l.Fragment, null, o.type !== "dashboard" && /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("div", { className: "heading-3" }, "Data Source"), /* @__PURE__ */ l.createElement("div", { className: "file-loaded-area" }, (o.dataFileSourceType === "file" || !o.dataFileSourceType) && /* @__PURE__ */ l.createElement("div", { className: "data-source-options" }, /* @__PURE__ */ l.createElement("div", { className: Yn ? "drag-active cdcdataviz-file-selector loaded-file" : "cdcdataviz-file-selector loaded-file", ..._n() }, /* @__PURE__ */ l.createElement("input", { ...Qn() }), Yn ? /* @__PURE__ */ l.createElement("p", null, "Drop file here") : /* @__PURE__ */ l.createElement("p", null, /* @__PURE__ */ l.createElement(Ja, null), " ", /* @__PURE__ */ l.createElement("span", null, o.dataFileName ?? "Replace data file"))), /* @__PURE__ */ l.createElement("div", null, Re())), o.dataFileSourceType === "url" && /* @__PURE__ */ l.createElement(l.Fragment, null, /* @__PURE__ */ l.createElement("div", { className: "url-source-options" }, /* @__PURE__ */ l.createElement("div", null, ne()), /* @__PURE__ */ l.createElement("div", null, Re())), o.dataUrl && (o.type === "chart" || o.type === "map") && Oe))), Be && /* @__PURE__ */ l.createElement(Hr, { visualizationKey: null, configureData: me, updateDescriptionProp: (H, z) => ae(me.dataFileName, H, z), config: o, setConfig: b })), (Rn || w) && // dataFileSourceType needs to be checked here since earlier versions did not track this state
  /* @__PURE__ */ l.createElement("div", { className: "load-data-area" }, /* @__PURE__ */ l.createElement("div", { className: "heading-3" }, Rn ? `Editing ${Rn}` : "Add Dataset"), /* @__PURE__ */ l.createElement(Lu, { startingTab: Rn && o.datasets[Rn].dataFileSourceType === "url" ? 1 : 0 }, /* @__PURE__ */ l.createElement(kt, { title: "Upload File", icon: /* @__PURE__ */ l.createElement(Ja, { className: "inline-icon" }) }, d && /* @__PURE__ */ l.createElement("p", { className: "alert--info" }, "The share path set for this website is: ", d), /* @__PURE__ */ l.createElement("div", { className: an ? "drag-active cdcdataviz-file-selector" : "cdcdataviz-file-selector", ...de() }, /* @__PURE__ */ l.createElement("input", { ...fn() }), an ? /* @__PURE__ */ l.createElement("p", null, "Drop file here") : /* @__PURE__ */ l.createElement("p", null, "Drag file to this area, or ", /* @__PURE__ */ l.createElement("span", null, "select a file"), ".")), /* @__PURE__ */ l.createElement("p", { className: "footnote" }, "Supported file types: ", Object.keys(xn).join(", "), ". Maximum file size ", wa, "MB.")), /* @__PURE__ */ l.createElement(kt, { title: "Load from URL", icon: /* @__PURE__ */ l.createElement(zu, { className: "inline-icon" }) }, ne())), f && (Array.isArray(f) ? f.map((H, z) => /* @__PURE__ */ l.createElement("div", { className: "error-box slim mt-2", key: `error-${H}` }, /* @__PURE__ */ l.createElement("span", null, H), " ", /* @__PURE__ */ l.createElement(Ea, { className: "inline-icon dismiss-error", onClick: () => P(f.filter((rn, en) => en !== z)) }))) : f.message), /* @__PURE__ */ l.createElement(Io.Provider, { value: { loadData: An, editingDataset: Rn, config: o } }, /* @__PURE__ */ l.createElement(Aa.Buttons, null))), o.type === "dashboard" && !w && /* @__PURE__ */ l.createElement("p", null, /* @__PURE__ */ l.createElement("button", { className: "btn btn-primary", onClick: () => un(!0) }, "+ Add More Files")), re && /* @__PURE__ */ l.createElement("p", null, /* @__PURE__ */ l.createElement("button", { className: "btn btn-primary", onClick: () => dn({ type: "EDITOR_SET_GLOBALACTIVE", payload: 2 }) }, "Configure your visualization")), /* @__PURE__ */ l.createElement("a", { href: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/data-map.html", target: "_blank", rel: "noopener noreferrer", className: "guidance-link" }, /* @__PURE__ */ l.createElement("div", null, /* @__PURE__ */ l.createElement("h3", null, "Get Help"), /* @__PURE__ */ l.createElement("p", null, "Documentation and examples on formatting data and configuring visualizations.")))), /* @__PURE__ */ l.createElement("div", { className: "right-col" }, /* @__PURE__ */ l.createElement(qu, null)));
}
const ii = (o) => /* @__PURE__ */ D.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024", fill: "currentColor", ...o }, /* @__PURE__ */ D.createElement("path", { d: "M489.3,377.8H80.1v-288c0-8.4-6.8-15.2-15.2-15.2H34.7c-8.4,0-15.2,6.8-15.2,15.2v318.3c0,16.7,13.6,30.3,30.3,30.3h439.5 c8.4,0,15.2-6.8,15.2-15.2v-30.3C504.5,384.6,497.7,377.8,489.3,377.8z" }), /* @__PURE__ */ D.createElement("path", { d: "M459,105H347.2c-20.3,0-30.4,24.5-16.1,38.8l30.7,30.7L292.3,244l-69.5-69.5c-11.8-11.8-31-11.8-42.9,0l-65.1,65.1 c-5.9,5.9-5.9,15.5,0,21.4l21.4,21.4c5.9,5.9,15.5,5.9,21.4,0l43.6-43.6l69.5,69.5c11.8,11.8,31,11.8,42.9,0l90.9-90.9l30.7,30.7 c14.3,14.3,38.8,4.2,38.8-16.1V120.1C474.2,111.7,467.4,105,459,105z" }), /* @__PURE__ */ D.createElement("path", { d: "M991.2,280.5h-188l125.2,125.2c4.8,4.8,12.7,5.2,17.6,0.5c30.7-28.9,51.8-67.8,57.9-111.6 C1005,287.2,998.8,280.5,991.2,280.5L991.2,280.5z" }), /* @__PURE__ */ D.createElement("path", { d: "M978.7,229.2c-6.5-94.6-82.2-170.3-176.8-176.8c-7.2-0.5-13.3,5.6-13.3,12.8v177.3h177.3 C973.1,242.5,979.2,236.4,978.7,229.2L978.7,229.2z" }), /* @__PURE__ */ D.createElement("path", { d: "M750.5,280.5v-188c0-7.6-6.6-13.8-14.1-12.7C642,93.1,569.8,175.6,573.2,274.5C576.6,376,664,459.3,765.6,458 c39.9-0.5,76.8-13.4,107.2-34.9c6.3-4.4,6.7-13.7,1.2-19.1L750.5,280.5z" }), /* @__PURE__ */ D.createElement("path", { d: "M130.7,558l1.1,7.2l5.5,11.6l-2.8,12.1l-6.1-7.7l-3.9-8.8l-8.8-1.7L102,569h-3.9l2.2,7.7l7.7,11v11l2.2,12.1l9.9,1.1 l3.9,5.5l-12.1-1.7l-3.9,2.8l1.7,11.6l-2.2,12.7l0.5,14.9l-3.9,9.9l-4.4,14.3l3.3,9.9l2.2,12.7l1.7,9.4l-2.2,12.7l1.7,8.8l3.9,8.8 l3.3,11l2.8,7.2L128,772l5.5-0.6l7.7,1.1l-8.3,2.2l2.2,3.9l-7.2,1.1l6.6,7.2l6.6,7.2l-2.2,6.1l8.8,12.7l9.4,7.7l1.1,9.4l7.7,3.9 l10.5,3.3l8.3,7.2l7.2,4.4l7.7,6.1l4.4,3.3l5,11l28.1-0.6l55.2,19.3h45.8l-1.1-4.4h22.1l8.8,5l5,5l12.7,8.8l4.4,16l12.7,6.6l7.7,3.3 l10.5-12.7l13.8,1.7l5.5,4.4l14.9,24.3l5,6.1l3.9,13.8l29.2,11.6l-1.1-9.9l-1.1-13.8l9.4-11l-1.7-3.3l9.4-7.7l5,2.8l8.3-9.4l5-6.6 h7.2l16-3.3l11.6,5h8.8l3.3-3.9l3.9,2.8l0.6,5l11.6,3.9l11-1.7l9.4,0.6l-7.7-6.1l-0.6-3.3l5-2.8l-0.5-2.8H598l-8.8,1.1l5.5-5 l2.8-3.3l2.8,2.8l16-2.2l2.2,2.8h11l6.1-1.7l8.8-0.5l8.3,3.3l5-0.6l5,7.2l9.9,0.5l5.5-4.4h5.5l11,9.4l6.1,6.6l1.7,8.8l-1.1,11 l3.9,11.6l10.5,13.2l6.1,12.7l2.2,5l11-2.2l2.8-12.1v-18.2l-5.5-14.9l-1.7-3.9l-1.1-11l-9.4-11l-1.7-13.2l0.5-11l4.4-12.1l8.3-6.6 l-0.6-5l9.9-1.7l14.3-16l6.6-5.5l7.2,1.1l6.6-12.7l9.4-5c0,0,7.2,1.1,7.7-1.7c0.5-2.8,7.7-16,7.7-16l-7.7-4.4l4.4-3.9l1.1-2.8 l-4.4-11l-4.4-5l5.5-6.1l-4.4-5.5l-1.1-11l-0.6-9.4l3.3-2.8l2.2,13.8l1.7,6.6l3.9,6.1l-1.1,9.9l6.1-12.1l3.9-9.4l0.6-5.5l-5.5-6.6 l-0.6-2.8l1.7-1.7l8.8,5.5l2.8-6.6l6.1-6.1l1.1-6.6l-1.1-7.7l0.5-3.9l1.1-5.5l4.4,6.1h2.2l6.6-1.1l6.6-0.6l8.8-2.8l-1.7-3.3 l-8.8,0.6l-8.3,2.2l-3.9,2.2l-0.6-3.9l2.8-3.3l7.2-1.7l8.8-1.7l6.1-1.7l5-3.3l11.6,2.8c0,0,5,2.8,5.5,1.1c0.6-1.7,2.2-6.1,2.2-6.1 l-3.9-4.4l-1.7-6.6l1.1-11l1.1-8.8l5-6.6l1.1-2.8l3.3,1.7l10.5-11.6h3.9l8.8-1.1l2.8-5.5h7.7l6.6-5.5l-2.5-3l-3-7.4l-3.3-2.5 l1.4-18.5l-1.7-16.8l-9.9-3l-8.6,3l-4.7-0.6l-19,44.4l-8.8,0.6l-3.9,3.3l-46.9-0.3l-11.6,10.8l-7.2,4.4l-3.3,9.4l-1.7,5l-8.3,5.5 H774l-6.1-2.8l-7.7,1.1l-9.9,3.3l0.6,5l-0.6,8.8l-5,4.4l-9.9,2.2l-15.4,7.7l-11.6,3.9l-11,0.6l-6.6-5l3.3-6.1l1.7-1.7l2.2-6.1 l4.1-2.5l5.2-9.1l-5.5-7.2l-1.1-11.6l-7.2-2.2l-9.4,6.6l3.3-7.7l5.5-7.7l-2.2-7.2l-1.7-8.3l-8.8-3.3l-7.7-6.6l-9.4,3.9l0.6,7.2 l-5.5,6.6l-4.4-2.2l-8.3,9.4v11l1.1,11l5,7.7l-0.6,16.6l-10.5,9.9l-7.7,0.6l-3.9-11.6l-3.9-8.3l1.7-11l-1.7-11l3.9-7.2l2.2-7.2 l3.9-12.1l-8.8,9.9l5-17.1l7.7-6.6l9.4-0.6l7.2-3.3H667h9.4l6.1-1.7l7.2,1.1l3.3,5.5l13.8,5l2.8-7.7l-9.4,1.1l-6.1-0.6l-8.8-6.6 l-5.5-3.3l-6.3-4.7l-6.3,1.9l-6.1-4.4l-14.3,0.6l-7.7,5l-6.1-3.9l-7.2-4.4l-10.5-0.6l10.5-14.9l-12.1,5.5l-9.9,7.7l-9.9,5.5 l-8.8,1.1l-1.1-5.5l-18.2,3.9l15.3-13.4l10.8-7.9l13.4-10.5l-5.5-0.8l-18.2,0.6l-8.3-1.7l-7.4-1.2L558,564l-8.3,0.6l-15.7-3.9 l-4.1-5l-2.2-7.7l-3.9-3.6l0.3,4.1l-3.9,6.1l-387.3,0.3L130.7,558L130.7,558z" })), li = (o) => /* @__PURE__ */ D.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 99.1 79.7", fill: "currentColor", ...o }, /* @__PURE__ */ D.createElement("path", { d: "M91,18.7H62c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h29c0.6,0,1-0.4,1-1v-6C92,19.1,91.6,18.7,91,18.7z M89.4,24.7H63.6 c-0.3,0-0.6-0.2-0.6-0.6v-2.9c0-0.3,0.2-0.6,0.6-0.6h25.9c0.3,0,0.6,0.2,0.6,0.6v2.9C90,24.4,89.8,24.7,89.4,24.7z" }), /* @__PURE__ */ D.createElement("path", { d: "M75,30.7H63c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h12c0.6,0,1-0.4,1-1v-6C76,31.1,75.6,30.7,75,30.7z M73.7,36.7h-9.3 c-0.2,0-0.3-0.2-0.3-0.3V33c0-0.2,0.2-0.3,0.3-0.3h9.3c0.2,0,0.3,0.2,0.3,0.3v3.3C74,36.5,73.8,36.7,73.7,36.7z" }), /* @__PURE__ */ D.createElement("path", { d: "M81,43.7H63c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h18c0.6,0,1-0.4,1-1v-6C82,44.1,81.6,43.7,81,43.7z M79.6,49.7H64.4 c-0.2,0-0.4-0.2-0.4-0.4v-3.1c0-0.2,0.2-0.4,0.4-0.4h15.1c0.2,0,0.4,0.2,0.4,0.4v3.1C80,49.5,79.8,49.7,79.6,49.7z" }), /* @__PURE__ */ D.createElement("path", { d: "M47,12.7h6c0.6,0,1,0.4,1,1v52c0,0.6-0.4,1-1,1h-6c-0.6,0-1-0.4-1-1v-52C46,13.1,46.4,12.7,47,12.7z" }), /* @__PURE__ */ D.createElement("path", { d: "M39,19.7v6c0,0.6-0.4,1-1,1H17c-0.6,0-1-0.4-1-1v-6c0-0.6,0.4-1,1-1h21C38.6,18.7,39,19.1,39,19.7z" }), /* @__PURE__ */ D.createElement("path", { d: "M39,31.7v6c0,0.6-0.4,1-1,1H8c-0.6,0-1-0.4-1-1v-6c0-0.6,0.4-1,1-1h30C38.6,30.7,39,31.1,39,31.7z" }), /* @__PURE__ */ D.createElement("path", { d: "M39,44.7v6c0,0.6-0.4,1-1,1H20c-0.6,0-1-0.4-1-1v-6c0-0.6,0.4-1,1-1h18C38.6,43.7,39,44.1,39,44.7z" }), /* @__PURE__ */ D.createElement("path", { d: "M39,57.7v6c0,0.6-0.4,1-1,1H25c-0.6,0-1-0.4-1-1v-6c0-0.6,0.4-1,1-1h13C38.6,56.7,39,57.1,39,57.7z" }), /* @__PURE__ */ D.createElement("path", { d: "M79,56.7H63c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h16c0.6,0,1-0.4,1-1v-6C80,57.1,79.6,56.7,79,56.7z M77.6,62.7H64.4 c-0.2,0-0.4-0.2-0.4-0.4v-3.2c0-0.2,0.2-0.4,0.4-0.4h13.2c0.2,0,0.4,0.2,0.4,0.4v3.2C78,62.5,77.8,62.7,77.6,62.7z" })), si = (o) => /* @__PURE__ */ D.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 96.3 82.6", fill: "currentColor", ...o }, /* @__PURE__ */ D.createElement("path", { d: "M83.9,61.4h-64V12.1c0-1.1-0.9-2-2-2h-5.5c-1.1,0-2,0.9-2,2v56.7c0,1.1,0.9,2,2,2h71.5c1.1,0,2-0.9,2-2v-5.5 C85.9,62.3,85,61.4,83.9,61.4z" }), /* @__PURE__ */ D.createElement("path", { d: "M67.1,47.3H26.8c-1.1,0-2,0.9-2,2v6.1c0,1.1,0.9,2,2,2h40.3c1.1,0,2-0.9,2-2v-6.1C69.1,48.2,68.2,47.3,67.1,47.3L67.1,47.3z  M52,54.6H38.2c-0.7,0-1.3-0.4-1.3-1V51c0-0.5,0.6-1,1.3-1H52c0.7,0,1.3,0.4,1.3,1v2.6C53.3,54.1,52.8,54.6,52,54.6z" }), /* @__PURE__ */ D.createElement("path", { d: "M83.9,31.7H26.8c-1.1,0-2,0.9-2,2v6.1c0,1.1,0.9,2,2,2h57.2c1.1,0,2-0.9,2-2v-6.1C85.9,32.6,85,31.7,83.9,31.7z M68.8,39 H45.2c-0.7,0-1.3-0.4-1.3-1v-2.6c0-0.5,0.6-1,1.3-1h23.7c0.7,0,1.3,0.4,1.3,1V38C70.2,38.5,69.6,39,68.8,39z" }), /* @__PURE__ */ D.createElement("path", { d: "M77,16.1H26.8c-1.1,0-2,0.9-2,2v6.1c0,1.1,0.9,2,2,2H77c1.1,0,2-0.9,2-2v-6.1C79,17,78.1,16.1,77,16.1z M58.9,23.4H36.6 c-0.7,0-1.3-0.4-1.3-1v-2.6c0-0.5,0.6-1,1.3-1h22.3c0.7,0,1.3,0.4,1.3,1v2.6C60.2,23,59.6,23.4,58.9,23.4z" })), ci = (o) => /* @__PURE__ */ D.createElement("svg", { id: "a", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 96.31 82.55", ...o }, /* @__PURE__ */ D.createElement("path", { d: "M88.49,65.65H15.29V9.04c0-1.1-.9-2-2-2H7.82c-1.1,0-2,.9-2,2V73.13c0,1.1,.9,2,2,2H88.49c1.1,0,2-.9,2-2v-5.48c0-1.1-.9-2-2-2Z" }), /* @__PURE__ */ D.createElement("g", null, /* @__PURE__ */ D.createElement("path", { d: "M30.22,49.19c-1.79,0-3.24,1.45-3.24,3.24s1.45,3.24,3.24,3.24,3.24-1.45,3.24-3.24-1.45-3.24-3.24-3.24Z" }), /* @__PURE__ */ D.createElement("path", { d: "M33.06,35.59c-1.79,0-3.24,1.45-3.24,3.24s1.45,3.24,3.24,3.24,3.24-1.45,3.24-3.24-1.45-3.24-3.24-3.24Z" }), /* @__PURE__ */ D.createElement("path", { d: "M48.12,37.83c-1.79,0-3.24,1.45-3.24,3.24s1.45,3.24,3.24,3.24,3.24-1.45,3.24-3.24-1.45-3.24-3.24-3.24Z" }), /* @__PURE__ */ D.createElement("circle", { cx: 49.64, cy: 22.73, r: 3.24 }), /* @__PURE__ */ D.createElement("path", { d: "M64.53,19.49c-1.79,0-3.24,1.45-3.24,3.24s1.45,3.24,3.24,3.24,3.24-1.45,3.24-3.24-1.45-3.24-3.24-3.24Z" }), /* @__PURE__ */ D.createElement("path", { d: "M57.95,31.11c-1.79,0-3.24,1.45-3.24,3.24s1.45,3.24,3.24,3.24,3.24-1.45,3.24-3.24-1.45-3.24-3.24-3.24Z" }), /* @__PURE__ */ D.createElement("path", { d: "M74.53,11.54c-1.79,0-3.24,1.45-3.24,3.24s1.45,3.24,3.24,3.24,3.24-1.45,3.24-3.24-1.45-3.24-3.24-3.24Z" }))), yi = (o) => /* @__PURE__ */ D.createElement("svg", { id: "a", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 96.31 82.55", ...o }, /* @__PURE__ */ D.createElement("path", { d: "M54.68,29.14h-4.1V8.43h2.68c.5,0,.9-.15,1.19-.46,.46-.48,.44-1.11,.42-1.62,0-.11,0-.22,0-.34s0-.24,0-.34c.02-.5,.05-1.13-.42-1.62-.29-.3-.69-.46-1.19-.46h-10.2c-.5,0-.9,.15-1.19,.46-.47,.48-.44,1.11-.42,1.62,0,.11,0,.23,0,.34s0,.23,0,.34c-.02,.5-.05,1.13,.42,1.62,.29,.3,.69,.46,1.19,.46h2.68V29.14h-4.1c-1.33,0-2.42,1.09-2.42,2.42v31.31c0,1.33,1.09,2.42,2.42,2.42h4.1v7.97h-2.68c-.5,0-.9,.15-1.19,.46-.46,.48-.44,1.11-.42,1.62,0,.11,0,.22,0,.34s0,.24,0,.34c-.02,.5-.05,1.13,.42,1.62,.29,.3,.69,.46,1.19,.46h10.2c.5,0,.9-.15,1.19-.46,.47-.48,.44-1.11,.42-1.62,0-.11,0-.23,0-.34s0-.23,0-.34c.02-.5,.05-1.13-.42-1.62-.29-.3-.69-.46-1.19-.46h-2.68v-7.97h4.1c1.33,0,2.42-1.09,2.42-2.42V31.56c0-1.33-1.09-2.42-2.42-2.42Zm-2.42,20.5v10.81h-8.2v-10.81h8.2Zm-8.2-4.84v-10.81h8.2v10.81h-8.2Z" })), Ci = (o) => /* @__PURE__ */ D.createElement("svg", { id: "a", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 96.31 82.55", ...o }, /* @__PURE__ */ D.createElement("path", { d: "M88.49,65.65H15.29V9.04c0-1.1-.9-2-2-2H7.82c-1.1,0-2,.9-2,2V73.13c0,1.1,.9,2,2,2H88.49c1.1,0,2-.9,2-2v-5.48c0-1.1-.9-2-2-2Z" }), /* @__PURE__ */ D.createElement("path", { d: "M87.91,60.65c-.02-.12-2.46-12.63-5.53-24.97-5.97-23.99-8.8-26-10.99-26-2.54,0-4.17,3.55-7.92,12.31-.67,1.56-1.4,3.27-2.18,5.02-1.66-4.14-3.14-5.9-4.84-5.9-2.39,0-4.05,3.42-7.07,9.64-5.56,11.44-13.97,28.72-29.12,28.72-.8,0-1.46,.65-1.46,1.45s.65,1.45,1.46,1.45H86.48c.43,0,.85-.19,1.12-.53,.28-.34,.39-.78,.31-1.2Zm-46.88-1.25c8.93-4.92,15.3-15.3,19.83-24.54,2.62,8.88,4.97,20.28,5.83,24.58l-25.66-.04Z" })), di = (o) => /* @__PURE__ */ D.createElement("svg", { id: "a", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 96.31 82.55", ...o }, /* @__PURE__ */ D.createElement("path", { d: "M18.29,39.57c0-1.03,.23-1.79,.68-2.28,.45-.49,1.06-.74,1.83-.74s1.42,.25,1.87,.74c.45,.49,.68,1.25,.68,2.29s-.23,1.79-.68,2.28c-.45,.5-1.06,.74-1.83,.74s-1.42-.25-1.87-.74c-.45-.49-.68-1.25-.68-2.29Zm1.71-.02c0,.75,.09,1.25,.26,1.5,.13,.19,.31,.28,.54,.28s.42-.09,.55-.28c.17-.25,.25-.75,.25-1.5s-.08-1.24-.25-1.49c-.13-.19-.31-.29-.55-.29s-.41,.09-.54,.28c-.17,.26-.26,.76-.26,1.5Zm2.47,9.08h-1.62l6.1-12.09h1.58l-6.05,12.09Zm3.55-3.01c0-1.03,.23-1.79,.68-2.28,.45-.49,1.07-.74,1.85-.74s1.4,.25,1.86,.74c.45,.5,.68,1.26,.68,2.28s-.23,1.79-.68,2.29c-.45,.49-1.06,.74-1.83,.74s-1.42-.25-1.87-.74c-.45-.49-.68-1.26-.68-2.29Zm1.71,0c0,.75,.09,1.24,.26,1.49,.13,.19,.31,.29,.54,.29s.41-.09,.54-.28c.17-.25,.26-.75,.26-1.5s-.08-1.24-.25-1.5c-.13-.19-.31-.28-.55-.28s-.41,.09-.54,.28c-.17,.26-.26,.76-.26,1.5Z" }), /* @__PURE__ */ D.createElement("path", { d: "M92.33,52.83v-20.42c0-1.61-1.31-2.93-2.93-2.93H6.65c-1.61,0-2.93,1.31-2.93,2.93v20.42c0,1.61,1.31,2.93,2.93,2.93H89.4c1.61,0,2.93-1.31,2.93-2.93Zm-52.34-2.93H9.58v-14.56h30.41v14.56Zm5.86-14.56h40.63v14.56H45.85v-14.56Z" })), fi = (o) => /* @__PURE__ */ D.createElement("svg", { id: "a", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 96.31 82.55", ...o }, /* @__PURE__ */ D.createElement("path", { d: "M89.56,65.41H16.36V8.8c0-1.1-.9-2-2-2h-5.48c-1.1,0-2,.9-2,2V72.89c0,1.1,.9,2,2,2H89.56c1.1,0,2-.9,2-2v-5.48c0-1.1-.9-2-2-2Z" }), /* @__PURE__ */ D.createElement("path", { d: "M54.66,55.34c-17.76,0-33.46-17.8-34.12-18.56l-.98-1.13v-4.55l3.25,3.72c.15,.18,15.47,17.53,31.86,17.53h0c7.31,0,12.37-1.68,17.27-3.3,4.31-1.42,8.77-2.9,14.44-3.05l1.5-.04v3l-1.42,.04c-5.24,.14-9.29,1.48-13.59,2.9-5.13,1.69-10.43,3.45-18.22,3.45h0Z" }), /* @__PURE__ */ D.createElement("path", { d: "M87.84,59.04c-4.73-1.24-7.41-1.66-13.05-1.93-2.82-.14-5.22,.16-8,.5-2.73,.33-5.81,.71-10.06,.79-13.13,.27-23.77-4.63-37.17-17.31v-1.57c13.19,12.48,24.31,18.13,37.15,17.88,4.2-.08,7.26-.46,9.96-.79,2.83-.34,5.27-.64,8.17-.5,5.73,.28,8.2,.62,13,1.88v1.05Z" }), /* @__PURE__ */ D.createElement("path", { d: "M57.02,49.28c-19.55,0-30.91-14.65-37.69-23.41v-1.54c6.67,8.61,18.64,23.95,37.69,23.95,5.87,0,14.11-3.23,18.39-6.23,2.43-1.7,3.84-2.77,4.87-3.55,2.24-1.7,2.7-2.05,7.71-4.44l-.03,1.12c-4.92,2.34-4.91,2.47-7.08,4.12-1.04,.79-2.45,1.86-4.9,3.57-4.4,3.08-12.9,6.41-18.96,6.41Z" })), pi = (o) => /* @__PURE__ */ D.createElement("svg", { id: "Layer_1", "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 99.1 79.69", ...o }, /* @__PURE__ */ D.createElement("defs", null, /* @__PURE__ */ D.createElement("style", null, ".cls-1{fill:#231f20;}")), /* @__PURE__ */ D.createElement("rect", { className: "cls-1", x: 46.87, y: 5.79, width: 8.32, height: 67.79, rx: 1 }), /* @__PURE__ */ D.createElement("rect", { className: "cls-1", x: 23.98, y: 17.65, width: 8.32, height: 23.31, rx: 1, transform: "translate(57.44 1.16) rotate(90)" }), /* @__PURE__ */ D.createElement("rect", { className: "cls-1", x: 19.53, y: 25.99, width: 8.32, height: 32.21, rx: 1, transform: "translate(65.79 18.41) rotate(90)" }), /* @__PURE__ */ D.createElement("rect", { className: "cls-1", x: 27.33, y: 60.4, width: 8.32, height: 14.6, rx: 1, transform: "translate(99.19 36.2) rotate(90)" }), /* @__PURE__ */ D.createElement("path", { className: "cls-1", d: "M81,52.74v4.32H64.55V52.74H81m1-2H63.55a1,1,0,0,0-1,1v6.32a1,1,0,0,0,1,1H82a1,1,0,0,0,1-1V51.74a1,1,0,0,0-1-1Z" }), /* @__PURE__ */ D.createElement("path", { className: "cls-1", d: "M90,14.41v4.33H64.55V14.41H90m1-2H63.55a1,1,0,0,0-1,1v6.33a1,1,0,0,0,1,1H91a1,1,0,0,0,1-1V13.41a1,1,0,0,0-1-1Z" }));
function gi() {
  const { config: o, tempConfig: f } = D.useContext(ct), s = D.useContext(Lt);
  D.useEffect(() => {
    f && s({ type: "EDITOR_SAVE", payload: f });
  }, []);
  const d = ({ icon: b, label: P, type: y, subType: O = void 0, orientation: Tn = void 0, stacked: M = !1, generalType: En = "data" }) => {
    let w = !1, un = !1, Rn;
    if (y === "map" && o.general) {
      let dn = o.general.geoType;
      w = O === dn;
    }
    y === "chart" && (w = O === o.visualizationType, un = Tn === o.orientation && M === !0), (y === "dashboard" || y === "data-bite" || y === "markup-include") && (w = !0), y === "chart" && M ? Rn = o.type === y && w && o.visualizationSubType === "stacked" ? "active" : "" : y === "chart" && !M && o.visualizationSubType !== "stacked" && (Rn = o.type === y && w ? "active" : ""), y !== "chart" && (Rn = o.type === y && w && !un ? "active" : "");
    let Cn = () => {
      if (y === o.type)
        O !== o.visualizationType && s({ type: "EDITOR_SET_CONFIG", payload: { ...o, newViz: !0, visualizationType: O } }), s({ type: "EDITOR_SET_GLOBALACTIVE", payload: 1 });
      else if (!o.type || window.confirm("Changing visualization type will clear configuration settings. Do you want to continue?")) {
        let xn = {
          newViz: !0,
          datasets: {},
          type: y
        };
        y === "map" ? xn.general = {
          ...xn.general,
          geoType: O,
          type: En
        } : xn.visualizationType = O, y === "chart" && (xn.visualizationSubType = M ? "stacked" : "regular", xn.orientation = Tn), s({ type: "EDITOR_SET_CONFIG", payload: xn }), s({ type: "EDITOR_SET_GLOBALACTIVE", payload: 1 });
      }
    };
    return /* @__PURE__ */ l.createElement("button", { className: Rn, onClick: () => Cn(), "aria-label": P }, b, /* @__PURE__ */ l.createElement("span", { className: "mt-1" }, P));
  };
  return /* @__PURE__ */ l.createElement("div", { className: "choose-vis" }, /* @__PURE__ */ l.createElement("a", { href: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/index.html", target: "_blank", rel: "noopener noreferrer", className: "guidance-link", style: { marginTop: 0, marginBottom: "2rem" } }, /* @__PURE__ */ l.createElement("div", null, /* @__PURE__ */ l.createElement("p", null, "For more information on the types of data visualizations in the WCMS, including examples and best practices, ", /* @__PURE__ */ l.createElement("u", null, "see the WCMS Features Gallery"), "."))), /* @__PURE__ */ l.createElement("div", { className: "heading-2" }, "General"), /* @__PURE__ */ l.createElement("ul", { className: "grid cove-temp" }, " ", /* @__PURE__ */ l.createElement("li", null, /* @__PURE__ */ l.createElement(on, { position: "right" }, /* @__PURE__ */ l.createElement(on.Target, null, /* @__PURE__ */ l.createElement(d, { label: "Dashboard", type: "dashboard", icon: /* @__PURE__ */ l.createElement(ii, null) })), /* @__PURE__ */ l.createElement(on.Content, null, "Present multiple data visualizations with shared filter controls."))), /* @__PURE__ */ l.createElement("li", null, /* @__PURE__ */ l.createElement(on, null, /* @__PURE__ */ l.createElement(on.Target, null, /* @__PURE__ */ l.createElement(d, { label: "Data Bite", type: "data-bite", icon: /* @__PURE__ */ l.createElement(Tr, null) })), /* @__PURE__ */ l.createElement(on.Content, null, "Highlight a single aggregated value (e.g., sum or median)."))), /* @__PURE__ */ l.createElement("li", null, /* @__PURE__ */ l.createElement(on, null, /* @__PURE__ */ l.createElement(on.Target, null, /* @__PURE__ */ l.createElement(d, { label: "Waffle Chart", type: "waffle-chart", subType: "Waffle", icon: /* @__PURE__ */ l.createElement(Pr, null) })), /* @__PURE__ */ l.createElement(on.Content, null, "Highlight a piece of data in relationship to a data set."))), /* @__PURE__ */ l.createElement("li", null, /* @__PURE__ */ l.createElement(on, null, /* @__PURE__ */ l.createElement(on.Target, null, /* @__PURE__ */ l.createElement(d, { label: "Gauge Chart", type: "waffle-chart", subType: "Gauge", icon: /* @__PURE__ */ l.createElement(di, null) })), /* @__PURE__ */ l.createElement(on.Content, null, "Specify the calculation of a single data point (such as a percentage value) and present it on a horizontal scale.")))), /* @__PURE__ */ l.createElement("div", { className: "heading-2" }, "Charts"), /* @__PURE__ */ l.createElement("ul", { className: "grid cove-temp" }, /* @__PURE__ */ l.createElement("li", null, /* @__PURE__ */ l.createElement(on, { position: "right" }, /* @__PURE__ */ l.createElement(on.Target, null, /* @__PURE__ */ l.createElement(d, { label: "Bar", type: "chart", subType: "Bar", orientation: "vertical", icon: /* @__PURE__ */ l.createElement(Er, null) })), /* @__PURE__ */ l.createElement(on.Content, null, "Use bars to show comparisons between data categories."))), /* @__PURE__ */ l.createElement("li", null, /* @__PURE__ */ l.createElement(on, null, /* @__PURE__ */ l.createElement(on.Target, null, /* @__PURE__ */ l.createElement(d, { label: "Line", type: "chart", subType: "Line", orientation: "vertical", icon: /* @__PURE__ */ l.createElement(Ir, null) })), /* @__PURE__ */ l.createElement(on.Content, null, "Present one or more data trends over time."))), /* @__PURE__ */ l.createElement("li", null, /* @__PURE__ */ l.createElement(on, null, /* @__PURE__ */ l.createElement(on.Target, null, /* @__PURE__ */ l.createElement(d, { label: "Pie", type: "chart", subType: "Pie", orientation: "vertical", icon: /* @__PURE__ */ l.createElement(kr, null) })), /* @__PURE__ */ l.createElement(on.Content, null, "Present the numerical proportions of a data series."))), /* @__PURE__ */ l.createElement("li", null, /* @__PURE__ */ l.createElement(on, null, /* @__PURE__ */ l.createElement(on.Target, null, /* @__PURE__ */ l.createElement(d, { label: "Paired Bar", type: "chart", subType: "Paired Bar", orientation: "horizontal", icon: /* @__PURE__ */ l.createElement(li, null) })), /* @__PURE__ */ l.createElement(on.Content, null, "Use paired bars to show comparisons between two different data categories."))), /* @__PURE__ */ l.createElement("li", null, /* @__PURE__ */ l.createElement(on, null, /* @__PURE__ */ l.createElement(on.Target, null, /* @__PURE__ */ l.createElement(d, { label: "Deviation Bar", type: "chart", subType: "Deviation Bar", orientation: "horizontal", stacked: !1, icon: /* @__PURE__ */ l.createElement(pi, null) })), /* @__PURE__ */ l.createElement(on.Content, null, "Use deviation bars to display how individual values differ from a target."))), /* @__PURE__ */ l.createElement("li", null, /* @__PURE__ */ l.createElement(on, null, /* @__PURE__ */ l.createElement(on.Target, null, /* @__PURE__ */ l.createElement(d, { label: "Horizontal Bar (Stacked)", type: "chart", subType: "Bar", orientation: "horizontal", stacked: !0, icon: /* @__PURE__ */ l.createElement(si, null) })), /* @__PURE__ */ l.createElement(on.Content, null, "Use bars to show comparisons between data categories.")))), /* @__PURE__ */ l.createElement("ul", { className: "grid cove-temp" }, /* @__PURE__ */ l.createElement("li", null, /* @__PURE__ */ l.createElement(on, null, /* @__PURE__ */ l.createElement(on.Target, null, /* @__PURE__ */ l.createElement(d, { label: "Box Plot", type: "chart", subType: "Box Plot", orientation: "vertical", icon: /* @__PURE__ */ l.createElement(yi, null) })), /* @__PURE__ */ l.createElement(on.Content, null, "Display a box plot"))), /* @__PURE__ */ l.createElement("li", null, /* @__PURE__ */ l.createElement(on, null, /* @__PURE__ */ l.createElement(on.Target, null, /* @__PURE__ */ l.createElement(d, { label: "Scatter Plot", type: "chart", subType: "Scatter Plot", orientation: "vertical", icon: /* @__PURE__ */ l.createElement(ci, null) })), /* @__PURE__ */ l.createElement(on.Content, null, "Display a scatter plot"))), /* @__PURE__ */ l.createElement("li", null, /* @__PURE__ */ l.createElement(on, null, /* @__PURE__ */ l.createElement(on.Target, null, /* @__PURE__ */ l.createElement(d, { label: "Area Chart", type: "chart", subType: "Area Chart", orientation: "vertical", icon: /* @__PURE__ */ l.createElement(Ci, null) })), /* @__PURE__ */ l.createElement(on.Content, null, "Display an area chart"))), /* @__PURE__ */ l.createElement("li", null, /* @__PURE__ */ l.createElement(on, null, /* @__PURE__ */ l.createElement(on.Target, null, /* @__PURE__ */ l.createElement(d, { label: "Forecast Chart", type: "chart", subType: "Forecasting", orientation: "vertical", icon: /* @__PURE__ */ l.createElement(fi, null) })), /* @__PURE__ */ l.createElement(on.Content, null, "Display a forecasting chart"))), /* @__PURE__ */ l.createElement("li", null, /* @__PURE__ */ l.createElement(on, null, /* @__PURE__ */ l.createElement(on.Target, null, /* @__PURE__ */ l.createElement(d, { label: "Sankey Diagram", type: "chart", subType: "Sankey", orientation: "vertical", icon: /* @__PURE__ */ l.createElement(Lr, null) })), /* @__PURE__ */ l.createElement(on.Content, null, "Display a sankey diagram")))), /* @__PURE__ */ l.createElement("div", { className: "heading-2" }, "Maps"), /* @__PURE__ */ l.createElement("ul", { className: "grid cove-temp" }, /* @__PURE__ */ l.createElement("li", null, /* @__PURE__ */ l.createElement(on, { position: "right" }, /* @__PURE__ */ l.createElement(on.Target, null, /* @__PURE__ */ l.createElement(d, { label: "United States (State- or County-Level)", type: "map", subType: "us", icon: /* @__PURE__ */ l.createElement(Ia, null) })), /* @__PURE__ */ l.createElement(on.Content, null, "Present a U.S. choropleth map at state or county level."))), /* @__PURE__ */ l.createElement("li", null, /* @__PURE__ */ l.createElement(on, { position: "right" }, /* @__PURE__ */ l.createElement(on.Target, null, /* @__PURE__ */ l.createElement(d, { label: "United States (HHS Regions)", type: "map", subType: "us-region", icon: /* @__PURE__ */ l.createElement(Dr, null) })), /* @__PURE__ */ l.createElement(on.Content, null, "Present a U.S. choropleth map at state or county level."))), /* @__PURE__ */ l.createElement("li", null, /* @__PURE__ */ l.createElement(on, null, /* @__PURE__ */ l.createElement(on.Target, null, /* @__PURE__ */ l.createElement(d, { label: "World", type: "map", subType: "world", icon: /* @__PURE__ */ l.createElement(Or, null) })), /* @__PURE__ */ l.createElement(on.Content, null, "Present a choropleth map of the world."))), /* @__PURE__ */ l.createElement("li", null, /* @__PURE__ */ l.createElement(on, null, /* @__PURE__ */ l.createElement(on.Target, null, /* @__PURE__ */ l.createElement(d, { label: "U.S. State", type: "map", subType: "single-state", icon: /* @__PURE__ */ l.createElement(Br, null) })), /* @__PURE__ */ l.createElement(on.Content, null, "Present a choropleth map of an individual U.S. state."))), /* @__PURE__ */ l.createElement("li", null, /* @__PURE__ */ l.createElement(on, null, /* @__PURE__ */ l.createElement(on.Target, null, /* @__PURE__ */ l.createElement(d, { label: "U.S. Geocode", type: "map", subType: "us-county", generalType: "us-geocode", icon: /* @__PURE__ */ l.createElement(Ia, null) })), /* @__PURE__ */ l.createElement(on.Content, null, "United States GeoCode")))));
}
function mi({ containerEl: o }) {
  const { config: f, setTempConfig: s, hostname: d, isDebug: b } = D.useContext(ct);
  let { type: P } = f;
  switch (P) {
    case "map":
      return /* @__PURE__ */ l.createElement(lt, { component: "CdcMap" }, /* @__PURE__ */ l.createElement(wr, { isEditor: !0, isDebug: b, config: f, hostname: d, setConfig: s, containerEl: o }));
    case "waffle-chart":
      if (f.visualizationType === "Waffle" || f.visualizationType === "Gauge")
        return /* @__PURE__ */ l.createElement(lt, { component: "CdcWaffleChart" }, /* @__PURE__ */ l.createElement(Sr, { isEditor: !0, isDebug: b, config: f, setConfig: s }));
      break;
    case "chart":
      return /* @__PURE__ */ l.createElement(lt, { component: "CdcChart" }, /* @__PURE__ */ l.createElement(hr, { isEditor: !0, isDebug: b, config: f, setConfig: s }));
    case "dashboard":
      return /* @__PURE__ */ l.createElement(lt, { component: "CdcDashboard" }, /* @__PURE__ */ l.createElement(vr, { isEditor: !0, isDebug: b, config: f }));
    case "data-bite":
      return /* @__PURE__ */ l.createElement(lt, { component: "CdcDashboard" }, /* @__PURE__ */ l.createElement(mr, { isEditor: !0, isDebug: b, config: f, setConfig: s }));
    case "markup-include":
      return /* @__PURE__ */ l.createElement(lt, { component: "CdcDashboard" }, /* @__PURE__ */ l.createElement(gr, { isEditor: !0, isDebug: b, config: f, setConfig: s }));
    default:
      return /* @__PURE__ */ l.createElement("p", null, "No visualization type selected.");
  }
}
const yr = (o) => {
  let f = { ...o };
  return f.type === "dashboard" ? (f.datasets && Object.keys(f.datasets).forEach((s) => {
    delete f.datasets[s].formattedData, f.datasets[s].dataUrl && delete f.datasets[s].data;
  }), f.visualizations && Object.keys(f.visualizations).forEach((s) => {
    f.visualizations[s] = No.omit(f.visualizations[s], ["runtime", "formattedData", "data"]);
  }), f.rows && f.rows.forEach((s) => {
    s.dataKey && (s = No.omit(s, ["data", "formattedData"]));
  })) : (delete f.runtime, delete f.formattedData, f.dataUrl && delete f.data), f;
}, vi = (o) => {
  if (o !== null) {
    let f = yr(o);
    const s = JSON.stringify(f), d = new CustomEvent("updateVizConfig", { detail: s, bubbles: !0 });
    window.dispatchEvent(d);
  }
}, hi = (o) => {
  var f;
  if (o.type === "dashboard") {
    let s = !1, d;
    if (o.data || o.dataUrl) {
      s = !0, d = { ...o };
      const b = o.dataFileName || "dataset-1";
      d.datasets = {}, d.datasets[b] = {
        ...No.pick(o, ["data", "dataUrl", "dataFileSourceType"]),
        dataFileName: b
      }, Object.keys(d.visualizations).forEach((y) => {
        const O = { dataKey: b, ...No.pick(d, "dataDescription", "formattedData") };
        d.visualizations[y] = { ...d.visualizations[y], ...O };
      }), d = { ...d, ...{ data: [], dataUrl: "", dataFileName: "", dataFileSourceType: "", dataDescription: [], formattedData: [] } };
    }
    if ((f = o.dashboard) != null && f.filters) {
      s = !0, d = { ...o };
      const b = { ...d.dashboard };
      b.sharedFilters || (b.sharedFilters = []);
      const P = b.filters.map((y) => ({ ...y, key: y.label, showDropdown: !0, usedBy: Object.keys(d.visualizations) }));
      b.sharedFilters = [...b.sharedFilters, ...P], d.dashboard = { ...b, filters: void 0 };
    }
    if (s)
      return d;
  }
  return o;
};
const Si = (o, f) => {
  switch (f.type) {
    case "EDITOR_SAVE":
      return { ...o, config: f.payload, tempConfig: null };
    case "EDITOR_SET_CONFIG":
      return { ...o, config: f.payload };
    case "EDITOR_TEMP_SAVE":
      return { ...o, tempConfig: f.payload };
    case "EDITOR_SET_ERRORS":
      return { ...o, errors: f.payload };
    case "EDITOR_SET_VIEWPORT":
      return { ...o, currentViewport: f.payload };
    case "EDITOR_SET_GLOBALACTIVE":
      return { ...o, globalActive: f.payload };
    default:
      return o;
  }
}, wi = Mr(Si), Mi = ({ config: o, hostname: f, containerEl: s, sharepath: d, isDebug: b }) => {
  const P = D.useMemo(() => {
    let un = 0;
    return (o != null && o.data || o != null && o.dataUrl) && (o != null && o.type) && (un = 2), { config: hi(o || { newViz: !0, errors: [], currentViewport: "lg" }), errors: [], currentViewport: "lg", globalActive: un, sharepath: d, isDebug: b, hostname: f };
  }, [o]);
  D.useEffect(() => {
    var un;
    Na && ((un = Na) == null || un.init());
  }, []);
  const [y, O] = D.useReducer(wi, P), Tn = (un) => {
    vi(JSON.parse(JSON.stringify(un))), O({ type: "EDITOR_TEMP_SAVE", payload: un });
  }, M = new fr((un) => {
    const Rn = un[0];
    let { width: Cn } = Rn.contentRect, dn = pr(Cn);
    O({ type: "EDITOR_SET_VIEWPORT", payload: dn });
  }), En = D.useCallback((un) => {
    un !== null && M.observe(un);
  }, []);
  D.useEffect(() => {
    let un = yr(y.config);
    const Rn = JSON.stringify(un), Cn = new CustomEvent("updateVizConfig", { detail: Rn });
    window.dispatchEvent(Cn);
  }, [y.config]);
  const w = D.useMemo(() => {
    y.config.type !== "dashboard" ? y.config.formattedData : y.config.datasets && Object.keys(y.config.datasets).length > 0;
  }, [y.config.type, y.config.datasets]);
  return /* @__PURE__ */ l.createElement(br, null, /* @__PURE__ */ l.createElement(ct.Provider, { value: { ...y, setTempConfig: Tn } }, /* @__PURE__ */ l.createElement(Lt.Provider, { value: O }, /* @__PURE__ */ l.createElement("div", { className: `cdc-open-viz-module cdc-editor ${y.currentViewport}`, ref: En }, /* @__PURE__ */ l.createElement(ku, { className: "top-level" }, /* @__PURE__ */ l.createElement(kt, { title: "1. Choose Visualization Type", className: "choose-type" }, /* @__PURE__ */ l.createElement(gi, null)), /* @__PURE__ */ l.createElement(kt, { title: "2. Import Data", className: "data-designer", disableRule: !y.config.type }, /* @__PURE__ */ l.createElement(ui, null)), /* @__PURE__ */ l.createElement(kt, { title: "3. Configure", className: "configure", disableRule: w }, /* @__PURE__ */ l.createElement(mi, { containerEl: s })))))), /* @__PURE__ */ l.createElement(Ar, null));
}, bi = {
  theme: "theme-blue"
}, Ai = [
  [
    {
      width: 12
    },
    {},
    {}
  ]
], Di = {}, Ri = {
  label: "Data Table",
  show: !0,
  showDownloadUrl: !1,
  showVertical: !0
}, Ni = !0, Ti = {
  "https://data.cdc.gov/resource/vdgb-f9s3.json": {
    data: [
      {
        surveyname: "American Indian Adult Tobacco Survey",
        surveynameabbrev: "AI ATS",
        year: "2007",
        e_cigarettes: "No",
        question: "During the past 12 months, have you stopped smoking for one day or longer because you were trying to quit smoking?",
        responses: "Don't know/Not sure"
      },
      {
        surveyname: "American Indian Adult Tobacco Survey",
        surveynameabbrev: "AI ATS",
        year: "2007",
        e_cigarettes: "No",
        question: "During the past 12 months, have you stopped smoking for one day or longer because you were trying to quit smoking?",
        responses: "Refused"
      },
      {
        surveyname: "American Indian Adult Tobacco Survey",
        surveynameabbrev: "AI ATS",
        year: "2007",
        e_cigarettes: "No",
        question: "During the past 12 months, have you stopped smoking for one day or longer because you were trying to quit smoking?",
        responses: "No"
      }
    ]
  }
}, Pi = [
  {
    surveyname: "American Indian Adult Tobacco Survey",
    surveynameabbrev: "AI ATS",
    year: "2007",
    e_cigarettes: "No",
    question: "During the past 12 months, have you stopped smoking for one day or longer because you were trying to quit smoking?",
    responses: "Don't know/Not sure"
  },
  {
    surveyname: "American Indian Adult Tobacco Survey",
    surveynameabbrev: "AI ATS",
    year: "2007",
    e_cigarettes: "No",
    question: "During the past 12 months, have you stopped smoking for one day or longer because you were trying to quit smoking?",
    responses: "Refused"
  },
  {
    surveyname: "American Indian Adult Tobacco Survey",
    surveynameabbrev: "AI ATS",
    year: "2007",
    e_cigarettes: "No",
    question: "During the past 12 months, have you stopped smoking for one day or longer because you were trying to quit smoking?",
    responses: "No"
  }
], Ei = "dashboard", Ii = {
  dashboard: bi,
  rows: Ai,
  visualizations: Di,
  table: Ri,
  newViz: Ni,
  datasets: Ti,
  data: Pi,
  type: Ei
}, c0 = {
  title: "Components/Pages/CdcEditor",
  component: Mi
}, Ro = {
  args: {
    config: Ii
  }
};
var $a, Za, Qa;
Ro.parameters = {
  ...Ro.parameters,
  docs: {
    ...($a = Ro.parameters) == null ? void 0 : $a.docs,
    source: {
      originalSource: `{
  args: {
    config: BlankConfig
  }
}`,
      ...(Qa = (Za = Ro.parameters) == null ? void 0 : Za.docs) == null ? void 0 : Qa.source
    }
  }
};
const y0 = ["DefaultEditor"];
export {
  Ro as DefaultEditor,
  y0 as __namedExportsOrder,
  c0 as default
};
