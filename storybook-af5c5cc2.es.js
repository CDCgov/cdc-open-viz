import { r as A, R as i } from "./storybook-e61d95ab.es.js";
import { i as ha, g as va } from "./storybook-a2b11335.es.js";
import { C as kt, E as Ot, Z as Sa, n as wa, M as Ma, i as Aa, K as ba, G as Da, d as Ra, a as Er, b as Na, O as Ea } from "./storybook-cb81139c.es.js";
import { P as Qn } from "./storybook-b8c9afe4.es.js";
import "./storybook-9c2b8003.es.js";
import { a as Ta } from "./storybook-01170075.es.js";
import { D as Ia } from "./storybook-441ad5c2.es.js";
import { c as ra } from "./storybook-c5d32002.es.js";
import { a as Tr, d as Ir, e as Pa, f as La, S as ka, g as Oa, h as Ba, i as Pr, j as Fa, k as Wa } from "./storybook-e798b70d.es.js";
import { f as Lr } from "./storybook-03c45984.es.js";
import { D as Ha } from "./storybook-0d7692d1.es.js";
import { T as on } from "./storybook-46a89ba7.es.js";
import { S as xa } from "./storybook-ecf3351a.es.js";
import { E as lt } from "./storybook-a0c99f4a.es.js";
import { _ as pr } from "./storybook-fa75dc84.es.js";
import "./storybook-826feda6.es.js";
import "./storybook-8d78bf52.es.js";
import "./storybook-b751bff6.es.js";
import "./storybook-76833471.es.js";
import "./storybook-bedc547d.es.js";
import "./storybook-24623c03.es.js";
import "./storybook-0b963b46.es.js";
import "./storybook-9c9b89fe.es.js";
import "./storybook-a08d0592.es.js";
import "./storybook-d3e946a2.es.js";
import "./storybook-d535b084.es.js";
import "./storybook-c006040a.es.js";
import "./storybook-96bcff98.es.js";
import "./storybook-7df1b381.es.js";
import "./storybook-c11e9ca9.es.js";
var kr = {}, yr = {}, Cr = 34, Tt = 10, dr = 13;
function aa(o) {
  return new Function("d", "return {" + o.map(function(f, c) {
    return JSON.stringify(f) + ": d[" + c + '] || ""';
  }).join(",") + "}");
}
function Ga(o, f) {
  var c = aa(o);
  return function(d, b) {
    return f(c(d), b, o);
  };
}
function Or(o) {
  var f = /* @__PURE__ */ Object.create(null), c = [];
  return o.forEach(function(d) {
    for (var b in d)
      b in f || c.push(f[b] = b);
  }), c;
}
function we(o, f) {
  var c = o + "", d = c.length;
  return d < f ? new Array(f - d + 1).join(0) + c : c;
}
function Va(o) {
  return o < 0 ? "-" + we(-o, 6) : o > 9999 ? "+" + we(o, 6) : we(o, 4);
}
function Ka(o) {
  var f = o.getUTCHours(), c = o.getUTCMinutes(), d = o.getUTCSeconds(), b = o.getUTCMilliseconds();
  return isNaN(o) ? "Invalid Date" : Va(o.getUTCFullYear()) + "-" + we(o.getUTCMonth() + 1, 2) + "-" + we(o.getUTCDate(), 2) + (b ? "T" + we(f, 2) + ":" + we(c, 2) + ":" + we(d, 2) + "." + we(b, 3) + "Z" : d ? "T" + we(f, 2) + ":" + we(c, 2) + ":" + we(d, 2) + "Z" : c || f ? "T" + we(f, 2) + ":" + we(c, 2) + "Z" : "");
}
function qa(o) {
  var f = new RegExp('["' + o + `
\r]`), c = o.charCodeAt(0);
  function d(M, an) {
    var gn, yn, mn = b(M, function(Kn, Cn) {
      if (gn)
        return gn(Kn, Cn - 1);
      yn = Kn, gn = an ? Ga(Kn, an) : aa(Kn);
    });
    return mn.columns = yn || [], mn;
  }
  function b(M, an) {
    var gn = [], yn = M.length, mn = 0, Kn = 0, Cn, Fn = yn <= 0, Mn = !1;
    M.charCodeAt(yn - 1) === Tt && --yn, M.charCodeAt(yn - 1) === dr && --yn;
    function Un() {
      if (Fn)
        return yr;
      if (Mn)
        return Mn = !1, kr;
      var Dn, Vn = mn, An;
      if (M.charCodeAt(Vn) === Cr) {
        for (; mn++ < yn && M.charCodeAt(mn) !== Cr || M.charCodeAt(++mn) === Cr; )
          ;
        return (Dn = mn) >= yn ? Fn = !0 : (An = M.charCodeAt(mn++)) === Tt ? Mn = !0 : An === dr && (Mn = !0, M.charCodeAt(mn) === Tt && ++mn), M.slice(Vn + 1, Dn - 1).replace(/""/g, '"');
      }
      for (; mn < yn; ) {
        if ((An = M.charCodeAt(Dn = mn++)) === Tt)
          Mn = !0;
        else if (An === dr)
          Mn = !0, M.charCodeAt(mn) === Tt && ++mn;
        else if (An !== c)
          continue;
        return M.slice(Vn, Dn);
      }
      return Fn = !0, M.slice(Vn, yn);
    }
    for (; (Cn = Un()) !== yr; ) {
      for (var Gn = []; Cn !== kr && Cn !== yr; )
        Gn.push(Cn), Cn = Un();
      an && (Gn = an(Gn, Kn++)) == null || gn.push(Gn);
    }
    return gn;
  }
  function T(M, an) {
    return M.map(function(gn) {
      return an.map(function(yn) {
        return Tn(gn[yn]);
      }).join(o);
    });
  }
  function y(M, an) {
    return an == null && (an = Or(M)), [an.map(Tn).join(o)].concat(T(M, an)).join(`
`);
  }
  function O(M, an) {
    return an == null && (an = Or(M)), T(M, an).join(`
`);
  }
  function Nn(M) {
    return M.map(w).join(`
`);
  }
  function w(M) {
    return M.map(Tn).join(o);
  }
  function Tn(M) {
    return M == null ? "" : M instanceof Date ? Ka(M) : f.test(M += "") ? '"' + M.replace(/"/g, '""') + '"' : M;
  }
  return {
    parse: d,
    parseRows: b,
    format: y,
    formatBody: O,
    formatRows: Nn,
    formatRow: w,
    formatValue: Tn
  };
}
var za = qa(","), Xa = za.parse;
function ct(o, f, c, d) {
  function b(T) {
    return T instanceof c ? T : new c(function(y) {
      y(T);
    });
  }
  return new (c || (c = Promise))(function(T, y) {
    function O(Tn) {
      try {
        w(d.next(Tn));
      } catch (M) {
        y(M);
      }
    }
    function Nn(Tn) {
      try {
        w(d.throw(Tn));
      } catch (M) {
        y(M);
      }
    }
    function w(Tn) {
      Tn.done ? T(Tn.value) : b(Tn.value).then(O, Nn);
    }
    w((d = d.apply(o, f || [])).next());
  });
}
function yt(o, f) {
  var c = { label: 0, sent: function() {
    if (T[0] & 1)
      throw T[1];
    return T[1];
  }, trys: [], ops: [] }, d, b, T, y;
  return y = { next: O(0), throw: O(1), return: O(2) }, typeof Symbol == "function" && (y[Symbol.iterator] = function() {
    return this;
  }), y;
  function O(w) {
    return function(Tn) {
      return Nn([w, Tn]);
    };
  }
  function Nn(w) {
    if (d)
      throw new TypeError("Generator is already executing.");
    for (; y && (y = 0, w[0] && (c = 0)), c; )
      try {
        if (d = 1, b && (T = w[0] & 2 ? b.return : w[0] ? b.throw || ((T = b.return) && T.call(b), 0) : b.next) && !(T = T.call(b, w[1])).done)
          return T;
        switch (b = 0, T && (w = [w[0] & 2, T.value]), w[0]) {
          case 0:
          case 1:
            T = w;
            break;
          case 4:
            return c.label++, { value: w[1], done: !1 };
          case 5:
            c.label++, b = w[1], w = [0];
            continue;
          case 7:
            w = c.ops.pop(), c.trys.pop();
            continue;
          default:
            if (T = c.trys, !(T = T.length > 0 && T[T.length - 1]) && (w[0] === 6 || w[0] === 2)) {
              c = 0;
              continue;
            }
            if (w[0] === 3 && (!T || w[1] > T[0] && w[1] < T[3])) {
              c.label = w[1];
              break;
            }
            if (w[0] === 6 && c.label < T[1]) {
              c.label = T[1], T = w;
              break;
            }
            if (T && c.label < T[2]) {
              c.label = T[2], c.ops.push(w);
              break;
            }
            T[2] && c.ops.pop(), c.trys.pop();
            continue;
        }
        w = f.call(o, c);
      } catch (Tn) {
        w = [6, Tn], b = 0;
      } finally {
        d = T = 0;
      }
    if (w[0] & 5)
      throw w[1];
    return { value: w[0] ? w[1] : void 0, done: !0 };
  }
}
function ja(o, f) {
  var c = typeof Symbol == "function" && o[Symbol.iterator];
  if (!c)
    return o;
  var d = c.call(o), b, T = [], y;
  try {
    for (; (f === void 0 || f-- > 0) && !(b = d.next()).done; )
      T.push(b.value);
  } catch (O) {
    y = { error: O };
  } finally {
    try {
      b && !b.done && (c = d.return) && c.call(d);
    } finally {
      if (y)
        throw y.error;
    }
  }
  return T;
}
function Ya() {
  for (var o = [], f = 0; f < arguments.length; f++)
    o = o.concat(ja(arguments[f]));
  return o;
}
var _a = /* @__PURE__ */ new Map([
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
function Bt(o, f) {
  var c = Ua(o);
  if (typeof c.path != "string") {
    var d = o.webkitRelativePath;
    Object.defineProperty(c, "path", {
      value: typeof f == "string" ? f : typeof d == "string" && d.length > 0 ? d : o.name,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return c;
}
function Ua(o) {
  var f = o.name, c = f && f.lastIndexOf(".") !== -1;
  if (c && !o.type) {
    var d = f.split(".").pop().toLowerCase(), b = _a.get(d);
    b && Object.defineProperty(o, "type", {
      value: b,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return o;
}
var Ja = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  "Thumbs.db"
  // Windows
];
function $a(o) {
  return ct(this, void 0, void 0, function() {
    return yt(this, function(f) {
      return To(o) && Za(o) ? [2, tu(o.dataTransfer, o.type)] : Qa(o) ? [2, nu(o)] : Array.isArray(o) && o.every(function(c) {
        return "getFile" in c && typeof c.getFile == "function";
      }) ? [2, eu(o)] : [2, []];
    });
  });
}
function Za(o) {
  return To(o.dataTransfer);
}
function Qa(o) {
  return To(o) && To(o.target);
}
function To(o) {
  return typeof o == "object" && o !== null;
}
function nu(o) {
  return gr(o.target.files).map(function(f) {
    return Bt(f);
  });
}
function eu(o) {
  return ct(this, void 0, void 0, function() {
    var f;
    return yt(this, function(c) {
      switch (c.label) {
        case 0:
          return [4, Promise.all(o.map(function(d) {
            return d.getFile();
          }))];
        case 1:
          return f = c.sent(), [2, f.map(function(d) {
            return Bt(d);
          })];
      }
    });
  });
}
function tu(o, f) {
  return ct(this, void 0, void 0, function() {
    var c, d;
    return yt(this, function(b) {
      switch (b.label) {
        case 0:
          return o === null ? [2, []] : o.items ? (c = gr(o.items).filter(function(T) {
            return T.kind === "file";
          }), f !== "drop" ? [2, c] : [4, Promise.all(c.map(ou))]) : [3, 2];
        case 1:
          return d = b.sent(), [2, Br(ua(d))];
        case 2:
          return [2, Br(gr(o.files).map(function(T) {
            return Bt(T);
          }))];
      }
    });
  });
}
function Br(o) {
  return o.filter(function(f) {
    return Ja.indexOf(f.name) === -1;
  });
}
function gr(o) {
  if (o === null)
    return [];
  for (var f = [], c = 0; c < o.length; c++) {
    var d = o[c];
    f.push(d);
  }
  return f;
}
function ou(o) {
  if (typeof o.webkitGetAsEntry != "function")
    return Fr(o);
  var f = o.webkitGetAsEntry();
  return f && f.isDirectory ? ia(f) : Fr(o);
}
function ua(o) {
  return o.reduce(function(f, c) {
    return Ya(f, Array.isArray(c) ? ua(c) : [c]);
  }, []);
}
function Fr(o) {
  var f = o.getAsFile();
  if (!f)
    return Promise.reject(o + " is not a File");
  var c = Bt(f);
  return Promise.resolve(c);
}
function ru(o) {
  return ct(this, void 0, void 0, function() {
    return yt(this, function(f) {
      return [2, o.isDirectory ? ia(o) : au(o)];
    });
  });
}
function ia(o) {
  var f = o.createReader();
  return new Promise(function(c, d) {
    var b = [];
    function T() {
      var y = this;
      f.readEntries(function(O) {
        return ct(y, void 0, void 0, function() {
          var Nn, w, Tn;
          return yt(this, function(M) {
            switch (M.label) {
              case 0:
                if (O.length)
                  return [3, 5];
                M.label = 1;
              case 1:
                return M.trys.push([1, 3, , 4]), [4, Promise.all(b)];
              case 2:
                return Nn = M.sent(), c(Nn), [3, 4];
              case 3:
                return w = M.sent(), d(w), [3, 4];
              case 4:
                return [3, 6];
              case 5:
                Tn = Promise.all(O.map(ru)), b.push(Tn), T(), M.label = 6;
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
    T();
  });
}
function au(o) {
  return ct(this, void 0, void 0, function() {
    return yt(this, function(f) {
      return [2, new Promise(function(c, d) {
        o.file(function(b) {
          var T = Bt(b, o.fullPath);
          c(T);
        }, function(b) {
          d(b);
        });
      })];
    });
  });
}
var uu = function(o, f) {
  if (o && f) {
    var c = Array.isArray(f) ? f : f.split(","), d = o.name || "", b = (o.type || "").toLowerCase(), T = b.replace(/\/.*$/, "");
    return c.some(function(y) {
      var O = y.trim().toLowerCase();
      return O.charAt(0) === "." ? d.toLowerCase().endsWith(O) : O.endsWith("/*") ? T === O.replace(/\/.*$/, "") : b === O;
    });
  }
  return !0;
};
function Wr(o, f) {
  var c = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var d = Object.getOwnPropertySymbols(o);
    f && (d = d.filter(function(b) {
      return Object.getOwnPropertyDescriptor(o, b).enumerable;
    })), c.push.apply(c, d);
  }
  return c;
}
function Hr(o) {
  for (var f = 1; f < arguments.length; f++) {
    var c = arguments[f] != null ? arguments[f] : {};
    f % 2 ? Wr(Object(c), !0).forEach(function(d) {
      la(o, d, c[d]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(c)) : Wr(Object(c)).forEach(function(d) {
      Object.defineProperty(o, d, Object.getOwnPropertyDescriptor(c, d));
    });
  }
  return o;
}
function la(o, f, c) {
  return f in o ? Object.defineProperty(o, f, { value: c, enumerable: !0, configurable: !0, writable: !0 }) : o[f] = c, o;
}
function xr(o, f) {
  return cu(o) || su(o, f) || lu(o, f) || iu();
}
function iu() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function lu(o, f) {
  if (o) {
    if (typeof o == "string")
      return Gr(o, f);
    var c = Object.prototype.toString.call(o).slice(8, -1);
    if (c === "Object" && o.constructor && (c = o.constructor.name), c === "Map" || c === "Set")
      return Array.from(o);
    if (c === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))
      return Gr(o, f);
  }
}
function Gr(o, f) {
  (f == null || f > o.length) && (f = o.length);
  for (var c = 0, d = new Array(f); c < f; c++)
    d[c] = o[c];
  return d;
}
function su(o, f) {
  var c = o == null ? null : typeof Symbol < "u" && o[Symbol.iterator] || o["@@iterator"];
  if (c != null) {
    var d = [], b = !0, T = !1, y, O;
    try {
      for (c = c.call(o); !(b = (y = c.next()).done) && (d.push(y.value), !(f && d.length === f)); b = !0)
        ;
    } catch (Nn) {
      T = !0, O = Nn;
    } finally {
      try {
        !b && c.return != null && c.return();
      } finally {
        if (T)
          throw O;
      }
    }
    return d;
  }
}
function cu(o) {
  if (Array.isArray(o))
    return o;
}
var yu = "file-invalid-type", Cu = "file-too-large", du = "file-too-small", fu = "too-many-files", pu = function(f) {
  f = Array.isArray(f) && f.length === 1 ? f[0] : f;
  var c = Array.isArray(f) ? "one of ".concat(f.join(", ")) : f;
  return {
    code: yu,
    message: "File type must be ".concat(c)
  };
}, Vr = function(f) {
  return {
    code: Cu,
    message: "File is larger than ".concat(f, " ").concat(f === 1 ? "byte" : "bytes")
  };
}, Kr = function(f) {
  return {
    code: du,
    message: "File is smaller than ".concat(f, " ").concat(f === 1 ? "byte" : "bytes")
  };
}, gu = {
  code: fu,
  message: "Too many files"
};
function sa(o, f) {
  var c = o.type === "application/x-moz-file" || uu(o, f);
  return [c, c ? null : pu(f)];
}
function ca(o, f, c) {
  if (It(o.size))
    if (It(f) && It(c)) {
      if (o.size > c)
        return [!1, Vr(c)];
      if (o.size < f)
        return [!1, Kr(f)];
    } else {
      if (It(f) && o.size < f)
        return [!1, Kr(f)];
      if (It(c) && o.size > c)
        return [!1, Vr(c)];
    }
  return [!0, null];
}
function It(o) {
  return o != null;
}
function mu(o) {
  var f = o.files, c = o.accept, d = o.minSize, b = o.maxSize, T = o.multiple, y = o.maxFiles;
  return !T && f.length > 1 || T && y >= 1 && f.length > y ? !1 : f.every(function(O) {
    var Nn = sa(O, c), w = xr(Nn, 1), Tn = w[0], M = ca(O, d, b), an = xr(M, 1), gn = an[0];
    return Tn && gn;
  });
}
function Io(o) {
  return typeof o.isPropagationStopped == "function" ? o.isPropagationStopped() : typeof o.cancelBubble < "u" ? o.cancelBubble : !1;
}
function Ao(o) {
  return o.dataTransfer ? Array.prototype.some.call(o.dataTransfer.types, function(f) {
    return f === "Files" || f === "application/x-moz-file";
  }) : !!o.target && !!o.target.files;
}
function qr(o) {
  o.preventDefault();
}
function hu(o) {
  return o.indexOf("MSIE") !== -1 || o.indexOf("Trident/") !== -1;
}
function vu(o) {
  return o.indexOf("Edge/") !== -1;
}
function Su() {
  var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.navigator.userAgent;
  return hu(o) || vu(o);
}
function Le() {
  for (var o = arguments.length, f = new Array(o), c = 0; c < o; c++)
    f[c] = arguments[c];
  return function(d) {
    for (var b = arguments.length, T = new Array(b > 1 ? b - 1 : 0), y = 1; y < b; y++)
      T[y - 1] = arguments[y];
    return f.some(function(O) {
      return !Io(d) && O && O.apply(void 0, [d].concat(T)), Io(d);
    });
  };
}
function zr() {
  return "showOpenFilePicker" in window;
}
function wu(o) {
  return o = typeof o == "string" ? o.split(",") : o, [{
    description: "everything",
    // TODO: Need to handle filtering more elegantly than this!
    accept: Array.isArray(o) ? o.filter(function(f) {
      return f === "audio/*" || f === "video/*" || f === "image/*" || f === "text/*" || /\w+\/[-+.\w]+/g.test(f);
    }).reduce(function(f, c) {
      return Hr(Hr({}, f), {}, la({}, c, []));
    }, {}) : {}
  }];
}
var Mu = ["children"], Au = ["open"], bu = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"], Du = ["refKey", "onChange", "onClick"];
function Ru(o) {
  return Tu(o) || Eu(o) || ya(o) || Nu();
}
function Nu() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Eu(o) {
  if (typeof Symbol < "u" && o[Symbol.iterator] != null || o["@@iterator"] != null)
    return Array.from(o);
}
function Tu(o) {
  if (Array.isArray(o))
    return mr(o);
}
function fr(o, f) {
  return Lu(o) || Pu(o, f) || ya(o, f) || Iu();
}
function Iu() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ya(o, f) {
  if (o) {
    if (typeof o == "string")
      return mr(o, f);
    var c = Object.prototype.toString.call(o).slice(8, -1);
    if (c === "Object" && o.constructor && (c = o.constructor.name), c === "Map" || c === "Set")
      return Array.from(o);
    if (c === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))
      return mr(o, f);
  }
}
function mr(o, f) {
  (f == null || f > o.length) && (f = o.length);
  for (var c = 0, d = new Array(f); c < f; c++)
    d[c] = o[c];
  return d;
}
function Pu(o, f) {
  var c = o == null ? null : typeof Symbol < "u" && o[Symbol.iterator] || o["@@iterator"];
  if (c != null) {
    var d = [], b = !0, T = !1, y, O;
    try {
      for (c = c.call(o); !(b = (y = c.next()).done) && (d.push(y.value), !(f && d.length === f)); b = !0)
        ;
    } catch (Nn) {
      T = !0, O = Nn;
    } finally {
      try {
        !b && c.return != null && c.return();
      } finally {
        if (T)
          throw O;
      }
    }
    return d;
  }
}
function Lu(o) {
  if (Array.isArray(o))
    return o;
}
function Xr(o, f) {
  var c = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var d = Object.getOwnPropertySymbols(o);
    f && (d = d.filter(function(b) {
      return Object.getOwnPropertyDescriptor(o, b).enumerable;
    })), c.push.apply(c, d);
  }
  return c;
}
function te(o) {
  for (var f = 1; f < arguments.length; f++) {
    var c = arguments[f] != null ? arguments[f] : {};
    f % 2 ? Xr(Object(c), !0).forEach(function(d) {
      hr(o, d, c[d]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(c)) : Xr(Object(c)).forEach(function(d) {
      Object.defineProperty(o, d, Object.getOwnPropertyDescriptor(c, d));
    });
  }
  return o;
}
function hr(o, f, c) {
  return f in o ? Object.defineProperty(o, f, { value: c, enumerable: !0, configurable: !0, writable: !0 }) : o[f] = c, o;
}
function Po(o, f) {
  if (o == null)
    return {};
  var c = ku(o, f), d, b;
  if (Object.getOwnPropertySymbols) {
    var T = Object.getOwnPropertySymbols(o);
    for (b = 0; b < T.length; b++)
      d = T[b], !(f.indexOf(d) >= 0) && Object.prototype.propertyIsEnumerable.call(o, d) && (c[d] = o[d]);
  }
  return c;
}
function ku(o, f) {
  if (o == null)
    return {};
  var c = {}, d = Object.keys(o), b, T;
  for (T = 0; T < d.length; T++)
    b = d[T], !(f.indexOf(b) >= 0) && (c[b] = o[b]);
  return c;
}
var Ar = /* @__PURE__ */ A.forwardRef(function(o, f) {
  var c = o.children, d = Po(o, Mu), b = Sr(d), T = b.open, y = Po(b, Au);
  return A.useImperativeHandle(f, function() {
    return {
      open: T
    };
  }, [T]), /* @__PURE__ */ i.createElement(A.Fragment, null, c(te(te({}, y), {}, {
    open: T
  })));
});
Ar.displayName = "Dropzone";
var Ca = {
  disabled: !1,
  getFilesFromEvent: $a,
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
Ar.defaultProps = Ca;
Ar.propTypes = {
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
  children: Qn.func,
  /**
   * Set accepted file types.
   * See https://github.com/okonet/attr-accept for more information.
   * Keep in mind that mime type determination is not reliable across platforms. CSV files,
   * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
   * Windows. In some cases there might not be a mime type set at all.
   * See: https://github.com/react-dropzone/react-dropzone/issues/276
   */
  accept: Qn.oneOfType([Qn.string, Qn.arrayOf(Qn.string)]),
  /**
   * Allow drag 'n' drop (or selection from the file dialog) of multiple files
   */
  multiple: Qn.bool,
  /**
   * If false, allow dropped items to take over the current browser window
   */
  preventDropOnDocument: Qn.bool,
  /**
   * If true, disables click to open the native file selection dialog
   */
  noClick: Qn.bool,
  /**
   * If true, disables SPACE/ENTER to open the native file selection dialog.
   * Note that it also stops tracking the focus state.
   */
  noKeyboard: Qn.bool,
  /**
   * If true, disables drag 'n' drop
   */
  noDrag: Qn.bool,
  /**
   * If true, stops drag event propagation to parents
   */
  noDragEventsBubbling: Qn.bool,
  /**
   * Minimum file size (in bytes)
   */
  minSize: Qn.number,
  /**
   * Maximum file size (in bytes)
   */
  maxSize: Qn.number,
  /**
   * Maximum accepted number of files
   * The default value is 0 which means there is no limitation to how many files are accepted.
   */
  maxFiles: Qn.number,
  /**
   * Enable/disable the dropzone
   */
  disabled: Qn.bool,
  /**
   * Use this to provide a custom file aggregator
   *
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   */
  getFilesFromEvent: Qn.func,
  /**
   * Cb for when closing the file dialog with no selection
   */
  onFileDialogCancel: Qn.func,
  /**
   * Cb for when opening the file dialog
   */
  onFileDialogOpen: Qn.func,
  /**
   * Set to true to use the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API
   * to open the file picker instead of using an `<input type="file">` click event.
   */
  useFsAccessApi: Qn.bool,
  /**
   * Cb for when the `dragenter` event occurs.
   *
   * @param {DragEvent} event
   */
  onDragEnter: Qn.func,
  /**
   * Cb for when the `dragleave` event occurs
   *
   * @param {DragEvent} event
   */
  onDragLeave: Qn.func,
  /**
   * Cb for when the `dragover` event occurs
   *
   * @param {DragEvent} event
   */
  onDragOver: Qn.func,
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
  onDrop: Qn.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are accepted, this callback is not invoked.
   *
   * @param {File[]} files
   * @param {(DragEvent|Event)} event
   */
  onDropAccepted: Qn.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are rejected, this callback is not invoked.
   *
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event
   */
  onDropRejected: Qn.func,
  /**
   * Custom validation function
   * @param {File} file
   * @returns {FileError|FileError[]}
   */
  validator: Qn.func
};
var vr = {
  isFocused: !1,
  isFileDialogActive: !1,
  isDragActive: !1,
  isDragAccept: !1,
  isDragReject: !1,
  draggedFiles: [],
  acceptedFiles: [],
  fileRejections: []
};
function Sr() {
  var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, f = te(te({}, Ca), o), c = f.accept, d = f.disabled, b = f.getFilesFromEvent, T = f.maxSize, y = f.minSize, O = f.multiple, Nn = f.maxFiles, w = f.onDragEnter, Tn = f.onDragLeave, M = f.onDragOver, an = f.onDrop, gn = f.onDropAccepted, yn = f.onDropRejected, mn = f.onFileDialogCancel, Kn = f.onFileDialogOpen, Cn = f.useFsAccessApi, Fn = f.preventDropOnDocument, Mn = f.noClick, Un = f.noKeyboard, Gn = f.noDrag, Dn = f.noDragEventsBubbling, Vn = f.validator, An = A.useMemo(function() {
    return typeof Kn == "function" ? Kn : jr;
  }, [Kn]), le = A.useMemo(function() {
    return typeof mn == "function" ? mn : jr;
  }, [mn]), $n = A.useRef(null), Hn = A.useRef(null), oe = A.useReducer(Ou, vr), se = fr(oe, 2), ne = se[0], ee = se[1], Ee = ne.isFocused, De = ne.isFileDialogActive, ve = ne.draggedFiles, Te = function() {
    De && setTimeout(function() {
      if (Hn.current) {
        var In = Hn.current.files;
        In.length || (ee({
          type: "closeDialog"
        }), le());
      }
    }, 300);
  };
  A.useEffect(function() {
    return Cn && zr() ? function() {
    } : (window.addEventListener("focus", Te, !1), function() {
      window.removeEventListener("focus", Te, !1);
    });
  }, [Hn, De, le, Cn]);
  var ge = A.useRef([]), Ie = function(In) {
    $n.current && $n.current.contains(In.target) || (In.preventDefault(), ge.current = []);
  };
  A.useEffect(function() {
    return Fn && (document.addEventListener("dragover", qr, !1), document.addEventListener("drop", Ie, !1)), function() {
      Fn && (document.removeEventListener("dragover", qr), document.removeEventListener("drop", Ie));
    };
  }, [$n, Fn]);
  var ce = A.useCallback(function(Z) {
    Z.preventDefault(), Z.persist(), ke(Z), ge.current = [].concat(Ru(ge.current), [Z.target]), Ao(Z) && Promise.resolve(b(Z)).then(function(In) {
      Io(Z) && !Dn || (ee({
        draggedFiles: In,
        isDragActive: !0,
        type: "setDraggedFiles"
      }), w && w(Z));
    });
  }, [b, w, Dn]), Me = A.useCallback(function(Z) {
    Z.preventDefault(), Z.persist(), ke(Z);
    var In = Ao(Z);
    if (In && Z.dataTransfer)
      try {
        Z.dataTransfer.dropEffect = "copy";
      } catch {
      }
    return In && M && M(Z), !1;
  }, [M, Dn]), Ae = A.useCallback(function(Z) {
    Z.preventDefault(), Z.persist(), ke(Z);
    var In = ge.current.filter(function(ye) {
      return $n.current && $n.current.contains(ye);
    }), re = In.indexOf(Z.target);
    re !== -1 && In.splice(re, 1), ge.current = In, !(In.length > 0) && (ee({
      isDragActive: !1,
      type: "setDraggedFiles",
      draggedFiles: []
    }), Ao(Z) && Tn && Tn(Z));
  }, [$n, Tn, Dn]), Re = A.useCallback(function(Z, In) {
    var re = [], ye = [];
    Z.forEach(function(me) {
      var Be = sa(me, c), Ne = fr(Be, 2), Ye = Ne[0], _e = Ne[1], Ue = ca(me, y, T), Ge = fr(Ue, 2), Je = Ge[0], Ve = Ge[1], Ke = Vn ? Vn(me) : null;
      if (Ye && Je && !Ke)
        re.push(me);
      else {
        var Fe = [_e, Ve];
        Ke && (Fe = Fe.concat(Ke)), ye.push({
          file: me,
          errors: Fe.filter(function(rt) {
            return rt;
          })
        });
      }
    }), (!O && re.length > 1 || O && Nn >= 1 && re.length > Nn) && (re.forEach(function(me) {
      ye.push({
        file: me,
        errors: [gu]
      });
    }), re.splice(0)), ee({
      acceptedFiles: re,
      fileRejections: ye,
      type: "setFiles"
    }), an && an(re, ye, In), ye.length > 0 && yn && yn(ye, In), re.length > 0 && gn && gn(re, In);
  }, [ee, O, c, y, T, Nn, an, gn, yn, Vn]), Se = A.useCallback(function(Z) {
    Z.preventDefault(), Z.persist(), ke(Z), ge.current = [], Ao(Z) && Promise.resolve(b(Z)).then(function(In) {
      Io(Z) && !Dn || Re(In, Z);
    }), ee({
      type: "reset"
    });
  }, [b, Re, Dn]), W = A.useCallback(function() {
    if (Cn && zr()) {
      ee({
        type: "openDialog"
      }), An();
      var Z = {
        multiple: O,
        types: wu(c)
      };
      window.showOpenFilePicker(Z).then(function(In) {
        return b(In);
      }).then(function(In) {
        return Re(In, null);
      }).catch(function(In) {
        return le(In);
      }).finally(function() {
        return ee({
          type: "closeDialog"
        });
      });
      return;
    }
    Hn.current && (ee({
      type: "openDialog"
    }), An(), Hn.current.value = null, Hn.current.click());
  }, [ee, An, le, Cn, Re, c, O]), V = A.useCallback(function(Z) {
    !$n.current || !$n.current.isEqualNode(Z.target) || (Z.keyCode === 32 || Z.keyCode === 13) && (Z.preventDefault(), W());
  }, [$n, Hn, W]), nn = A.useCallback(function() {
    ee({
      type: "focus"
    });
  }, []), rn = A.useCallback(function() {
    ee({
      type: "blur"
    });
  }, []), kn = A.useCallback(function() {
    Mn || (Su() ? setTimeout(W, 0) : W());
  }, [Hn, Mn, W]), jn = function(In) {
    return d ? null : In;
  }, ue = function(In) {
    return Un ? null : jn(In);
  }, be = function(In) {
    return Gn ? null : jn(In);
  }, ke = function(In) {
    Dn && In.stopPropagation();
  }, Oe = A.useMemo(function() {
    return function() {
      var Z = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, In = Z.refKey, re = In === void 0 ? "ref" : In, ye = Z.role, me = Z.onKeyDown, Be = Z.onFocus, Ne = Z.onBlur, Ye = Z.onClick, _e = Z.onDragEnter, Ue = Z.onDragOver, Ge = Z.onDragLeave, Je = Z.onDrop, Ve = Po(Z, bu);
      return te(te(hr({
        onKeyDown: ue(Le(me, V)),
        onFocus: ue(Le(Be, nn)),
        onBlur: ue(Le(Ne, rn)),
        onClick: jn(Le(Ye, kn)),
        onDragEnter: be(Le(_e, ce)),
        onDragOver: be(Le(Ue, Me)),
        onDragLeave: be(Le(Ge, Ae)),
        onDrop: be(Le(Je, Se)),
        role: typeof ye == "string" && ye !== "" ? ye : "button"
      }, re, $n), !d && !Un ? {
        tabIndex: 0
      } : {}), Ve);
    };
  }, [$n, V, nn, rn, kn, ce, Me, Ae, Se, Un, Gn, d]), We = A.useCallback(function(Z) {
    Z.stopPropagation();
  }, []), He = A.useMemo(function() {
    return function() {
      var Z = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, In = Z.refKey, re = In === void 0 ? "ref" : In, ye = Z.onChange, me = Z.onClick, Be = Po(Z, Du), Ne = hr({
        accept: c,
        multiple: O,
        type: "file",
        style: {
          display: "none"
        },
        onChange: jn(Le(ye, Se)),
        onClick: jn(Le(me, We)),
        autoComplete: "off",
        tabIndex: -1
      }, re, Hn);
      return te(te({}, Ne), Be);
    };
  }, [Hn, c, O, Se, d]), xe = ve.length, Jn = xe > 0 && mu({
    files: ve,
    accept: c,
    minSize: y,
    maxSize: T,
    multiple: O,
    maxFiles: Nn
  }), Xn = xe > 0 && !Jn;
  return te(te({}, ne), {}, {
    isDragAccept: Jn,
    isDragReject: Xn,
    isFocused: Ee && !d,
    getRootProps: Oe,
    getInputProps: He,
    rootRef: $n,
    inputRef: Hn,
    open: jn(W)
  });
}
function Ou(o, f) {
  switch (f.type) {
    case "focus":
      return te(te({}, o), {}, {
        isFocused: !0
      });
    case "blur":
      return te(te({}, o), {}, {
        isFocused: !1
      });
    case "openDialog":
      return te(te({}, vr), {}, {
        isFileDialogActive: !0
      });
    case "closeDialog":
      return te(te({}, o), {}, {
        isFileDialogActive: !1
      });
    case "setDraggedFiles":
      var c = f.isDragActive, d = f.draggedFiles;
      return te(te({}, o), {}, {
        draggedFiles: d,
        isDragActive: c
      });
    case "setFiles":
      return te(te({}, o), {}, {
        acceptedFiles: f.acceptedFiles,
        fileRejections: f.fileRejections
      });
    case "reset":
      return te({}, vr);
    default:
      return o;
  }
}
function jr() {
}
const Lt = ({ children: o, className: f = "" }) => /* @__PURE__ */ i.createElement("div", { className: `tab-content ${f}` }, o), Bu = (o) => {
  const { globalActive: f } = A.useContext(kt), c = A.useContext(Ot), d = (b) => {
    c({ type: "EDITOR_SET_GLOBALACTIVE", payload: b });
  };
  return /* @__PURE__ */ i.createElement(da, { ...o, setActiveTab: d, activeTab: f });
}, Fu = ({ children: o, className: f = void 0, startingTab: c }) => {
  const [d, b] = A.useState(c);
  return /* @__PURE__ */ i.createElement(da, { className: f, setActiveTab: b, activeTab: d }, o);
}, da = ({ children: o, className: f, activeTab: c, setActiveTab: d }) => {
  const b = (O, Nn) => {
    O || d(Nn);
  };
  let T = "tabs";
  f && (T = `tabs ${f}`);
  const y = o.map(({ props: O }, Nn) => {
    let w = "nav-item", Tn = O.disableRule || !1;
    return Tn && (w += " disabled"), Nn === c && (w += " active"), /* @__PURE__ */ i.createElement("li", { onClick: () => b(Tn, Nn), key: O.title, className: w }, O.icon, O.title);
  });
  return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("nav", { className: T }, /* @__PURE__ */ i.createElement("ul", { className: "nav nav-fill" }, y)), o[c]);
};
var wr = { exports: {} }, bo = { exports: {} }, Yr;
function Wu() {
  return Yr || (Yr = 1, function(o, f) {
    (function(c, d) {
      d(f, A);
    })(ra, function(c, d) {
      function b(n, a, l, s, h, g, v) {
        try {
          var R = n[g](v), E = R.value;
        } catch (I) {
          return void l(I);
        }
        R.done ? a(E) : Promise.resolve(E).then(s, h);
      }
      function T(n) {
        return function() {
          var a = this, l = arguments;
          return new Promise(function(s, h) {
            var g = n.apply(a, l);
            function v(E) {
              b(g, s, h, v, R, "next", E);
            }
            function R(E) {
              b(g, s, h, v, R, "throw", E);
            }
            v(void 0);
          });
        };
      }
      function y() {
        return (y = Object.assign || function(n) {
          for (var a = 1; a < arguments.length; a++) {
            var l = arguments[a];
            for (var s in l)
              Object.prototype.hasOwnProperty.call(l, s) && (n[s] = l[s]);
          }
          return n;
        }).apply(this, arguments);
      }
      function O(n, a) {
        if (n == null)
          return {};
        var l, s, h = {}, g = Object.keys(n);
        for (s = 0; s < g.length; s++)
          l = g[s], a.indexOf(l) >= 0 || (h[l] = n[l]);
        return h;
      }
      function Nn(n) {
        var a = function(l, s) {
          if (typeof l != "object" || l === null)
            return l;
          var h = l[Symbol.toPrimitive];
          if (h !== void 0) {
            var g = h.call(l, s || "default");
            if (typeof g != "object")
              return g;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (s === "string" ? String : Number)(l);
        }(n, "string");
        return typeof a == "symbol" ? a : String(a);
      }
      d = d && Object.prototype.hasOwnProperty.call(d, "default") ? d.default : d;
      var w = { init: "init" }, Tn = function(n) {
        var a = n.value;
        return a === void 0 ? "" : a;
      }, M = function() {
        return d.createElement(d.Fragment, null, " ");
      }, an = { Cell: Tn, width: 150, minWidth: 0, maxWidth: Number.MAX_SAFE_INTEGER };
      function gn() {
        for (var n = arguments.length, a = new Array(n), l = 0; l < n; l++)
          a[l] = arguments[l];
        return a.reduce(function(s, h) {
          var g = h.style, v = h.className;
          return s = y({}, s, {}, O(h, ["style", "className"])), g && (s.style = s.style ? y({}, s.style || {}, {}, g || {}) : g), v && (s.className = s.className ? s.className + " " + v : v), s.className === "" && delete s.className, s;
        }, {});
      }
      var yn = function(n, a) {
        return a === void 0 && (a = {}), function(l) {
          return l === void 0 && (l = {}), [].concat(n, [l]).reduce(function(s, h) {
            return function g(v, R, E) {
              return typeof R == "function" ? g({}, R(v, E)) : Array.isArray(R) ? gn.apply(void 0, [v].concat(R)) : gn(v, R);
            }(s, h, y({}, a, { userProps: l }));
          }, {});
        };
      }, mn = function(n, a, l, s) {
        return l === void 0 && (l = {}), n.reduce(function(h, g) {
          return g(h, l);
        }, a);
      }, Kn = function(n, a, l) {
        return l === void 0 && (l = {}), n.forEach(function(s) {
          s(a, l);
        });
      };
      function Cn(n, a, l, s) {
        n.findIndex(function(h) {
          return h.pluginName === l;
        }), a.forEach(function(h) {
          n.findIndex(function(g) {
            return g.pluginName === h;
          });
        });
      }
      function Fn(n, a) {
        return typeof n == "function" ? n(a) : n;
      }
      function Mn(n) {
        var a = d.useRef();
        return a.current = n, d.useCallback(function() {
          return a.current;
        }, []);
      }
      var Un = typeof document < "u" ? d.useLayoutEffect : d.useEffect;
      function Gn(n, a) {
        var l = d.useRef(!1);
        Un(function() {
          l.current && n(), l.current = !0;
        }, a);
      }
      function Dn(n, a, l) {
        return l === void 0 && (l = {}), function(s, h) {
          h === void 0 && (h = {});
          var g = typeof s == "string" ? a[s] : s;
          if (g === void 0)
            throw console.info(a), new Error("Renderer Error ☝️");
          return Vn(g, y({}, n, { column: a }, l, {}, h));
        };
      }
      function Vn(n, a) {
        return function(s) {
          return typeof s == "function" && (h = Object.getPrototypeOf(s)).prototype && h.prototype.isReactComponent;
          var h;
        }(l = n) || typeof l == "function" || function(s) {
          return typeof s == "object" && typeof s.$$typeof == "symbol" && ["react.memo", "react.forward_ref"].includes(s.$$typeof.description);
        }(l) ? d.createElement(n, a) : n;
        var l;
      }
      function An(n, a, l) {
        return l === void 0 && (l = 0), n.map(function(s) {
          return $n(s = y({}, s, { parent: a, depth: l })), s.columns && (s.columns = An(s.columns, s, l + 1)), s;
        });
      }
      function le(n) {
        return Ee(n, "columns");
      }
      function $n(n) {
        var a = n.id, l = n.accessor, s = n.Header;
        if (typeof l == "string") {
          a = a || l;
          var h = l.split(".");
          l = function(g) {
            return function(v, R, E) {
              if (!R)
                return v;
              var I, K = typeof R == "function" ? R : JSON.stringify(R), H = se.get(K) || function() {
                var x = function(L) {
                  return function F(j, U) {
                    if (U === void 0 && (U = []), Array.isArray(j))
                      for (var un = 0; un < j.length; un += 1)
                        F(j[un], U);
                    else
                      U.push(j);
                    return U;
                  }(L).map(function(F) {
                    return String(F).replace(".", "_");
                  }).join(".").replace(ce, ".").replace(Me, "").split(".");
                }(R);
                return se.set(K, x), x;
              }();
              try {
                I = H.reduce(function(x, L) {
                  return x[L];
                }, v);
              } catch {
              }
              return I !== void 0 ? I : E;
            }(g, h);
          };
        }
        if (!a && typeof s == "string" && s && (a = s), !a && n.columns)
          throw console.error(n), new Error('A column ID (or unique "Header" value) is required!');
        if (!a)
          throw console.error(n), new Error("A column ID (or string accessor) is required!");
        return Object.assign(n, { id: a, accessor: l }), n;
      }
      function Hn(n, a) {
        if (!a)
          throw new Error();
        return Object.assign(n, y({ Header: M, Footer: M }, an, {}, a, {}, n)), Object.assign(n, { originalWidth: n.width }), n;
      }
      function oe(n, a, l) {
        l === void 0 && (l = function() {
          return {};
        });
        for (var s = [], h = n, g = 0, v = function() {
          return g++;
        }, R = function() {
          var E = { headers: [] }, I = [], K = h.some(function(H) {
            return H.parent;
          });
          h.forEach(function(H) {
            var x, L = [].concat(I).reverse()[0];
            K && (H.parent ? x = y({}, H.parent, { originalId: H.parent.id, id: H.parent.id + "_" + v(), headers: [H] }, l(H)) : x = Hn(y({ originalId: H.id + "_placeholder", id: H.id + "_placeholder_" + v(), placeholderOf: H, headers: [H] }, l(H)), a), L && L.originalId === x.originalId ? L.headers.push(H) : I.push(x)), E.headers.push(H);
          }), s.push(E), h = I;
        }; h.length; )
          R();
        return s.reverse();
      }
      var se = /* @__PURE__ */ new Map();
      function ne() {
        for (var n = arguments.length, a = new Array(n), l = 0; l < n; l++)
          a[l] = arguments[l];
        for (var s = 0; s < a.length; s += 1)
          if (a[s] !== void 0)
            return a[s];
      }
      function ee(n) {
        if (typeof n == "function")
          return n;
      }
      function Ee(n, a) {
        var l = [];
        return function s(h) {
          h.forEach(function(g) {
            g[a] ? s(g[a]) : l.push(g);
          });
        }(n), l;
      }
      function De(n, a) {
        var l = a.manualExpandedKey, s = a.expanded, h = a.expandSubRows, g = h === void 0 || h, v = [];
        return n.forEach(function(R) {
          return function E(I, K) {
            K === void 0 && (K = !0), I.isExpanded = I.original && I.original[l] || s[I.id], I.canExpand = I.subRows && !!I.subRows.length, K && v.push(I), I.subRows && I.subRows.length && I.isExpanded && I.subRows.forEach(function(H) {
              return E(H, g);
            });
          }(R);
        }), v;
      }
      function ve(n, a, l) {
        return ee(n) || a[n] || l[n] || l.text;
      }
      function Te(n, a, l) {
        return n ? n(a, l) : a === void 0;
      }
      function ge() {
        throw new Error("React-Table: You have not called prepareRow(row) one or more rows you are attempting to render.");
      }
      var Ie = null, ce = /\[/g, Me = /\]/g, Ae = function(n) {
        return y({ role: "table" }, n);
      }, Re = function(n) {
        return y({ role: "rowgroup" }, n);
      }, Se = function(n, a) {
        var l = a.column;
        return y({ key: "header_" + l.id, colSpan: l.totalVisibleHeaderCount, role: "columnheader" }, n);
      }, W = function(n, a) {
        var l = a.column;
        return y({ key: "footer_" + l.id, colSpan: l.totalVisibleHeaderCount }, n);
      }, V = function(n, a) {
        return y({ key: "headerGroup_" + a.index, role: "row" }, n);
      }, nn = function(n, a) {
        return y({ key: "footerGroup_" + a.index }, n);
      }, rn = function(n, a) {
        return y({ key: "row_" + a.row.id, role: "row" }, n);
      }, kn = function(n, a) {
        var l = a.cell;
        return y({ key: "cell_" + l.row.id + "_" + l.column.id, role: "cell" }, n);
      };
      function jn() {
        return { useOptions: [], stateReducers: [], useControlledState: [], columns: [], columnsDeps: [], allColumns: [], allColumnsDeps: [], accessValue: [], materializedColumns: [], materializedColumnsDeps: [], useInstanceAfterData: [], visibleColumns: [], visibleColumnsDeps: [], headerGroups: [], headerGroupsDeps: [], useInstanceBeforeDimensions: [], useInstance: [], prepareRow: [], getTableProps: [Ae], getTableBodyProps: [Re], getHeaderGroupProps: [V], getFooterGroupProps: [nn], getHeaderProps: [Se], getFooterProps: [W], getRowProps: [rn], getCellProps: [kn], useFinalInstance: [] };
      }
      w.resetHiddenColumns = "resetHiddenColumns", w.toggleHideColumn = "toggleHideColumn", w.setHiddenColumns = "setHiddenColumns", w.toggleHideAllColumns = "toggleHideAllColumns";
      var ue = function(n) {
        n.getToggleHiddenProps = [be], n.getToggleHideAllColumnsProps = [ke], n.stateReducers.push(Oe), n.useInstanceBeforeDimensions.push(We), n.headerGroupsDeps.push(function(a, l) {
          var s = l.instance;
          return [].concat(a, [s.state.hiddenColumns]);
        }), n.useInstance.push(He);
      };
      ue.pluginName = "useColumnVisibility";
      var be = function(n, a) {
        var l = a.column;
        return [n, { onChange: function(s) {
          l.toggleHidden(!s.target.checked);
        }, style: { cursor: "pointer" }, checked: l.isVisible, title: "Toggle Column Visible" }];
      }, ke = function(n, a) {
        var l = a.instance;
        return [n, { onChange: function(s) {
          l.toggleHideAllColumns(!s.target.checked);
        }, style: { cursor: "pointer" }, checked: !l.allColumnsHidden && !l.state.hiddenColumns.length, title: "Toggle All Columns Hidden", indeterminate: !l.allColumnsHidden && l.state.hiddenColumns.length }];
      };
      function Oe(n, a, l, s) {
        if (a.type === w.init)
          return y({ hiddenColumns: [] }, n);
        if (a.type === w.resetHiddenColumns)
          return y({}, n, { hiddenColumns: s.initialState.hiddenColumns || [] });
        if (a.type === w.toggleHideColumn) {
          var h = (a.value !== void 0 ? a.value : !n.hiddenColumns.includes(a.columnId)) ? [].concat(n.hiddenColumns, [a.columnId]) : n.hiddenColumns.filter(function(g) {
            return g !== a.columnId;
          });
          return y({}, n, { hiddenColumns: h });
        }
        return a.type === w.setHiddenColumns ? y({}, n, { hiddenColumns: Fn(a.value, n.hiddenColumns) }) : a.type === w.toggleHideAllColumns ? y({}, n, { hiddenColumns: (a.value !== void 0 ? a.value : !n.hiddenColumns.length) ? s.allColumns.map(function(g) {
          return g.id;
        }) : [] }) : void 0;
      }
      function We(n) {
        var a = n.headers, l = n.state.hiddenColumns;
        d.useRef(!1).current;
        var s = 0;
        a.forEach(function(h) {
          return s += function g(v, R) {
            v.isVisible = R && !l.includes(v.id);
            var E = 0;
            return v.headers && v.headers.length ? v.headers.forEach(function(I) {
              return E += g(I, v.isVisible);
            }) : E = v.isVisible ? 1 : 0, v.totalVisibleHeaderCount = E, E;
          }(h, !0);
        });
      }
      function He(n) {
        var a = n.columns, l = n.flatHeaders, s = n.dispatch, h = n.allColumns, g = n.getHooks, v = n.state.hiddenColumns, R = n.autoResetHiddenColumns, E = R === void 0 || R, I = Mn(n), K = h.length === v.length, H = d.useCallback(function(U, un) {
          return s({ type: w.toggleHideColumn, columnId: U, value: un });
        }, [s]), x = d.useCallback(function(U) {
          return s({ type: w.setHiddenColumns, value: U });
        }, [s]), L = d.useCallback(function(U) {
          return s({ type: w.toggleHideAllColumns, value: U });
        }, [s]), F = yn(g().getToggleHideAllColumnsProps, { instance: I() });
        l.forEach(function(U) {
          U.toggleHidden = function(un) {
            s({ type: w.toggleHideColumn, columnId: U.id, value: un });
          }, U.getToggleHiddenProps = yn(g().getToggleHiddenProps, { instance: I(), column: U });
        });
        var j = Mn(E);
        Gn(function() {
          j() && s({ type: w.resetHiddenColumns });
        }, [s, a]), Object.assign(n, { allColumnsHidden: K, toggleHideColumn: H, setHiddenColumns: x, toggleHideAllColumns: L, getToggleHideAllColumnsProps: F });
      }
      var xe = {}, Jn = {}, Xn = function(n, a, l) {
        return n;
      }, Z = function(n, a) {
        return n.subRows || [];
      }, In = function(n, a, l) {
        return "" + (l ? [l.id, a].join(".") : a);
      }, re = function(n) {
        return n;
      };
      function ye(n) {
        var a = n.initialState, l = a === void 0 ? xe : a, s = n.defaultColumn, h = s === void 0 ? Jn : s, g = n.getSubRows, v = g === void 0 ? Z : g, R = n.getRowId, E = R === void 0 ? In : R, I = n.stateReducer, K = I === void 0 ? Xn : I, H = n.useControlledState, x = H === void 0 ? re : H;
        return y({}, O(n, ["initialState", "defaultColumn", "getSubRows", "getRowId", "stateReducer", "useControlledState"]), { initialState: l, defaultColumn: h, getSubRows: v, getRowId: E, stateReducer: K, useControlledState: x });
      }
      function me(n, a) {
        a === void 0 && (a = 0);
        var l = 0, s = 0, h = 0, g = 0;
        return n.forEach(function(v) {
          var R = v.headers;
          if (v.totalLeft = a, R && R.length) {
            var E = me(R, a), I = E[0], K = E[1], H = E[2], x = E[3];
            v.totalMinWidth = I, v.totalWidth = K, v.totalMaxWidth = H, v.totalFlexWidth = x;
          } else
            v.totalMinWidth = v.minWidth, v.totalWidth = Math.min(Math.max(v.minWidth, v.width), v.maxWidth), v.totalMaxWidth = v.maxWidth, v.totalFlexWidth = v.canResize ? v.totalWidth : 0;
          v.isVisible && (a += v.totalWidth, l += v.totalMinWidth, s += v.totalWidth, h += v.totalMaxWidth, g += v.totalFlexWidth);
        }), [l, s, h, g];
      }
      function Be(n) {
        var a = n.data, l = n.rows, s = n.flatRows, h = n.rowsById, g = n.column, v = n.getRowId, R = n.getSubRows, E = n.accessValueHooks, I = n.getInstance;
        a.forEach(function(K, H) {
          return function x(L, F, j, U, un) {
            j === void 0 && (j = 0);
            var Pn = L, ln = v(L, F, U), q = h[ln];
            if (q)
              q.subRows && q.originalSubRows.forEach(function(en, Sn) {
                return x(en, Sn, j + 1, q);
              });
            else if ((q = { id: ln, original: Pn, index: F, depth: j, cells: [{}] }).cells.map = ge, q.cells.filter = ge, q.cells.forEach = ge, q.cells[0].getCellProps = ge, q.values = {}, un.push(q), s.push(q), h[ln] = q, q.originalSubRows = R(L, F), q.originalSubRows) {
              var Rn = [];
              q.originalSubRows.forEach(function(en, Sn) {
                return x(en, Sn, j + 1, q, Rn);
              }), q.subRows = Rn;
            }
            g.accessor && (q.values[g.id] = g.accessor(L, F, q, un, a)), q.values[g.id] = mn(E, q.values[g.id], { row: q, column: g, instance: I() });
          }(K, H, 0, void 0, l);
        });
      }
      w.resetExpanded = "resetExpanded", w.toggleRowExpanded = "toggleRowExpanded", w.toggleAllRowsExpanded = "toggleAllRowsExpanded";
      var Ne = function(n) {
        n.getToggleAllRowsExpandedProps = [Ye], n.getToggleRowExpandedProps = [_e], n.stateReducers.push(Ue), n.useInstance.push(Ge), n.prepareRow.push(Je);
      };
      Ne.pluginName = "useExpanded";
      var Ye = function(n, a) {
        var l = a.instance;
        return [n, { onClick: function(s) {
          l.toggleAllRowsExpanded();
        }, style: { cursor: "pointer" }, title: "Toggle All Rows Expanded" }];
      }, _e = function(n, a) {
        var l = a.row;
        return [n, { onClick: function() {
          l.toggleRowExpanded();
        }, style: { cursor: "pointer" }, title: "Toggle Row Expanded" }];
      };
      function Ue(n, a, l, s) {
        if (a.type === w.init)
          return y({ expanded: {} }, n);
        if (a.type === w.resetExpanded)
          return y({}, n, { expanded: s.initialState.expanded || {} });
        if (a.type === w.toggleAllRowsExpanded) {
          var h = a.value, g = s.rowsById, v = Object.keys(g).length === Object.keys(n.expanded).length;
          if (h !== void 0 ? h : !v) {
            var R = {};
            return Object.keys(g).forEach(function(F) {
              R[F] = !0;
            }), y({}, n, { expanded: R });
          }
          return y({}, n, { expanded: {} });
        }
        if (a.type === w.toggleRowExpanded) {
          var E, I = a.id, K = a.value, H = n.expanded[I], x = K !== void 0 ? K : !H;
          if (!H && x)
            return y({}, n, { expanded: y({}, n.expanded, (E = {}, E[I] = !0, E)) });
          if (H && !x) {
            var L = n.expanded;
            return L[I], y({}, n, { expanded: O(L, [I].map(Nn)) });
          }
          return n;
        }
      }
      function Ge(n) {
        var a = n.data, l = n.rows, s = n.rowsById, h = n.manualExpandedKey, g = h === void 0 ? "expanded" : h, v = n.paginateExpandedRows, R = v === void 0 || v, E = n.expandSubRows, I = E === void 0 || E, K = n.autoResetExpanded, H = K === void 0 || K, x = n.getHooks, L = n.plugins, F = n.state.expanded, j = n.dispatch;
        Cn(L, ["useSortBy", "useGroupBy", "usePivotColumns", "useGlobalFilter"], "useExpanded");
        var U = Mn(H), un = !!(Object.keys(s).length && Object.keys(F).length);
        un && Object.keys(s).some(function(xn) {
          return !F[xn];
        }) && (un = !1), Gn(function() {
          U() && j({ type: w.resetExpanded });
        }, [j, a]);
        var Pn = d.useCallback(function(xn, dn) {
          j({ type: w.toggleRowExpanded, id: xn, value: dn });
        }, [j]), ln = d.useCallback(function(xn) {
          return j({ type: w.toggleAllRowsExpanded, value: xn });
        }, [j]), q = d.useMemo(function() {
          return R ? De(l, { manualExpandedKey: g, expanded: F, expandSubRows: I }) : l;
        }, [R, l, g, F, I]), Rn = d.useMemo(function() {
          return function(xn) {
            var dn = 0;
            return Object.keys(xn).forEach(function(hn) {
              var zn = hn.split(".");
              dn = Math.max(dn, zn.length);
            }), dn;
          }(F);
        }, [F]), en = Mn(n), Sn = yn(x().getToggleAllRowsExpandedProps, { instance: en() });
        Object.assign(n, { preExpandedRows: l, expandedRows: q, rows: q, expandedDepth: Rn, isAllRowsExpanded: un, toggleRowExpanded: Pn, toggleAllRowsExpanded: ln, getToggleAllRowsExpandedProps: Sn });
      }
      function Je(n, a) {
        var l = a.instance.getHooks, s = a.instance;
        n.toggleRowExpanded = function(h) {
          return s.toggleRowExpanded(n.id, h);
        }, n.getToggleRowExpandedProps = yn(l().getToggleRowExpandedProps, { instance: s, row: n });
      }
      var Ve = function(n, a, l) {
        return n = n.filter(function(s) {
          return a.some(function(h) {
            var g = s.values[h];
            return String(g).toLowerCase().includes(String(l).toLowerCase());
          });
        });
      };
      Ve.autoRemove = function(n) {
        return !n;
      };
      var Ke = function(n, a, l) {
        return n.filter(function(s) {
          return a.some(function(h) {
            var g = s.values[h];
            return g === void 0 || String(g).toLowerCase() === String(l).toLowerCase();
          });
        });
      };
      Ke.autoRemove = function(n) {
        return !n;
      };
      var Fe = function(n, a, l) {
        return n.filter(function(s) {
          return a.some(function(h) {
            var g = s.values[h];
            return g === void 0 || String(g) === String(l);
          });
        });
      };
      Fe.autoRemove = function(n) {
        return !n;
      };
      var rt = function(n, a, l) {
        return n.filter(function(s) {
          return a.some(function(h) {
            return s.values[h].includes(l);
          });
        });
      };
      rt.autoRemove = function(n) {
        return !n || !n.length;
      };
      var Ct = function(n, a, l) {
        return n.filter(function(s) {
          return a.some(function(h) {
            var g = s.values[h];
            return g && g.length && l.every(function(v) {
              return g.includes(v);
            });
          });
        });
      };
      Ct.autoRemove = function(n) {
        return !n || !n.length;
      };
      var Ft = function(n, a, l) {
        return n.filter(function(s) {
          return a.some(function(h) {
            var g = s.values[h];
            return g && g.length && l.some(function(v) {
              return g.includes(v);
            });
          });
        });
      };
      Ft.autoRemove = function(n) {
        return !n || !n.length;
      };
      var dt = function(n, a, l) {
        return n.filter(function(s) {
          return a.some(function(h) {
            var g = s.values[h];
            return l.includes(g);
          });
        });
      };
      dt.autoRemove = function(n) {
        return !n || !n.length;
      };
      var Wt = function(n, a, l) {
        return n.filter(function(s) {
          return a.some(function(h) {
            return s.values[h] === l;
          });
        });
      };
      Wt.autoRemove = function(n) {
        return n === void 0;
      };
      var Ht = function(n, a, l) {
        return n.filter(function(s) {
          return a.some(function(h) {
            return s.values[h] == l;
          });
        });
      };
      Ht.autoRemove = function(n) {
        return n == null;
      };
      var xt = function(n, a, l) {
        var s = l || [], h = s[0], g = s[1];
        if ((h = typeof h == "number" ? h : -1 / 0) > (g = typeof g == "number" ? g : 1 / 0)) {
          var v = h;
          h = g, g = v;
        }
        return n.filter(function(R) {
          return a.some(function(E) {
            var I = R.values[E];
            return I >= h && I <= g;
          });
        });
      };
      xt.autoRemove = function(n) {
        return !n || typeof n[0] != "number" && typeof n[1] != "number";
      };
      var $e = Object.freeze({ __proto__: null, text: Ve, exactText: Ke, exactTextCase: Fe, includes: rt, includesAll: Ct, includesSome: Ft, includesValue: dt, exact: Wt, equals: Ht, between: xt });
      w.resetFilters = "resetFilters", w.setFilter = "setFilter", w.setAllFilters = "setAllFilters";
      var Gt = function(n) {
        n.stateReducers.push(ko), n.useInstance.push(Vt);
      };
      function ko(n, a, l, s) {
        if (a.type === w.init)
          return y({ filters: [] }, n);
        if (a.type === w.resetFilters)
          return y({}, n, { filters: s.initialState.filters || [] });
        if (a.type === w.setFilter) {
          var h = a.columnId, g = a.filterValue, v = s.allColumns, R = s.filterTypes, E = v.find(function(j) {
            return j.id === h;
          });
          if (!E)
            throw new Error("React-Table: Could not find a column with id: " + h);
          var I = ve(E.filter, R || {}, $e), K = n.filters.find(function(j) {
            return j.id === h;
          }), H = Fn(g, K && K.value);
          return Te(I.autoRemove, H, E) ? y({}, n, { filters: n.filters.filter(function(j) {
            return j.id !== h;
          }) }) : y({}, n, K ? { filters: n.filters.map(function(j) {
            return j.id === h ? { id: h, value: H } : j;
          }) } : { filters: [].concat(n.filters, [{ id: h, value: H }]) });
        }
        if (a.type === w.setAllFilters) {
          var x = a.filters, L = s.allColumns, F = s.filterTypes;
          return y({}, n, { filters: Fn(x, n.filters).filter(function(j) {
            var U = L.find(function(un) {
              return un.id === j.id;
            });
            return !Te(ve(U.filter, F || {}, $e).autoRemove, j.value, U);
          }) });
        }
      }
      function Vt(n) {
        var a = n.data, l = n.rows, s = n.flatRows, h = n.rowsById, g = n.allColumns, v = n.filterTypes, R = n.manualFilters, E = n.defaultCanFilter, I = E !== void 0 && E, K = n.disableFilters, H = n.state.filters, x = n.dispatch, L = n.autoResetFilters, F = L === void 0 || L, j = d.useCallback(function(en, Sn) {
          x({ type: w.setFilter, columnId: en, filterValue: Sn });
        }, [x]), U = d.useCallback(function(en) {
          x({ type: w.setAllFilters, filters: en });
        }, [x]);
        g.forEach(function(en) {
          var Sn = en.id, xn = en.accessor, dn = en.defaultCanFilter, hn = en.disableFilters;
          en.canFilter = xn ? ne(hn !== !0 && void 0, K !== !0 && void 0, !0) : ne(dn, I, !1), en.setFilter = function(bn) {
            return j(en.id, bn);
          };
          var zn = H.find(function(bn) {
            return bn.id === Sn;
          });
          en.filterValue = zn && zn.value;
        });
        var un = d.useMemo(function() {
          if (R || !H.length)
            return [l, s, h];
          var en = [], Sn = {};
          return [function xn(dn, hn) {
            hn === void 0 && (hn = 0);
            var zn = dn;
            return (zn = H.reduce(function(bn, qn) {
              var e = qn.id, t = qn.value, u = g.find(function(p) {
                return p.id === e;
              });
              if (!u)
                return bn;
              hn === 0 && (u.preFilteredRows = bn);
              var r = ve(u.filter, v || {}, $e);
              return r ? (u.filteredRows = r(bn, [e], t), u.filteredRows) : (console.warn("Could not find a valid 'column.filter' for column with the ID: " + u.id + "."), bn);
            }, dn)).forEach(function(bn) {
              en.push(bn), Sn[bn.id] = bn, bn.subRows && (bn.subRows = bn.subRows && bn.subRows.length > 0 ? xn(bn.subRows, hn + 1) : bn.subRows);
            }), zn;
          }(l), en, Sn];
        }, [R, H, l, s, h, g, v]), Pn = un[0], ln = un[1], q = un[2];
        d.useMemo(function() {
          g.filter(function(en) {
            return !H.find(function(Sn) {
              return Sn.id === en.id;
            });
          }).forEach(function(en) {
            en.preFilteredRows = Pn, en.filteredRows = Pn;
          });
        }, [Pn, H, g]);
        var Rn = Mn(F);
        Gn(function() {
          Rn() && x({ type: w.resetFilters });
        }, [x, R ? null : a]), Object.assign(n, { preFilteredRows: l, preFilteredFlatRows: s, preFilteredRowsById: h, filteredRows: Pn, filteredFlatRows: ln, filteredRowsById: q, rows: Pn, flatRows: ln, rowsById: q, setFilter: j, setAllFilters: U });
      }
      Gt.pluginName = "useFilters", w.resetGlobalFilter = "resetGlobalFilter", w.setGlobalFilter = "setGlobalFilter";
      var ft = function(n) {
        n.stateReducers.push(Kt), n.useInstance.push(qt);
      };
      function Kt(n, a, l, s) {
        if (a.type === w.resetGlobalFilter)
          return y({}, n, { globalFilter: s.initialState.globalFilter || void 0 });
        if (a.type === w.setGlobalFilter) {
          var h = a.filterValue, g = s.userFilterTypes, v = ve(s.globalFilter, g || {}, $e), R = Fn(h, n.globalFilter);
          return Te(v.autoRemove, R) ? (n.globalFilter, O(n, ["globalFilter"])) : y({}, n, { globalFilter: R });
        }
      }
      function qt(n) {
        var a = n.data, l = n.rows, s = n.flatRows, h = n.rowsById, g = n.allColumns, v = n.filterTypes, R = n.globalFilter, E = n.manualGlobalFilter, I = n.state.globalFilter, K = n.dispatch, H = n.autoResetGlobalFilter, x = H === void 0 || H, L = n.disableGlobalFilter, F = d.useCallback(function(q) {
          K({ type: w.setGlobalFilter, filterValue: q });
        }, [K]), j = d.useMemo(function() {
          if (E || I === void 0)
            return [l, s, h];
          var q = [], Rn = {}, en = ve(R, v || {}, $e);
          if (!en)
            return console.warn("Could not find a valid 'globalFilter' option."), l;
          g.forEach(function(xn) {
            var dn = xn.disableGlobalFilter;
            xn.canFilter = ne(dn !== !0 && void 0, L !== !0 && void 0, !0);
          });
          var Sn = g.filter(function(xn) {
            return xn.canFilter === !0;
          });
          return [function xn(dn) {
            return (dn = en(dn, Sn.map(function(hn) {
              return hn.id;
            }), I)).forEach(function(hn) {
              q.push(hn), Rn[hn.id] = hn, hn.subRows = hn.subRows && hn.subRows.length ? xn(hn.subRows) : hn.subRows;
            }), dn;
          }(l), q, Rn];
        }, [E, I, R, v, g, l, s, h, L]), U = j[0], un = j[1], Pn = j[2], ln = Mn(x);
        Gn(function() {
          ln() && K({ type: w.resetGlobalFilter });
        }, [K, E ? null : a]), Object.assign(n, { preGlobalFilteredRows: l, preGlobalFilteredFlatRows: s, preGlobalFilteredRowsById: h, globalFilteredRows: U, globalFilteredFlatRows: un, globalFilteredRowsById: Pn, rows: U, flatRows: un, rowsById: Pn, setGlobalFilter: F, disableGlobalFilter: L });
      }
      function pt(n, a) {
        return a.reduce(function(l, s) {
          return l + (typeof s == "number" ? s : 0);
        }, 0);
      }
      ft.pluginName = "useGlobalFilter";
      var gt = Object.freeze({ __proto__: null, sum: pt, min: function(n) {
        var a = n[0] || 0;
        return n.forEach(function(l) {
          typeof l == "number" && (a = Math.min(a, l));
        }), a;
      }, max: function(n) {
        var a = n[0] || 0;
        return n.forEach(function(l) {
          typeof l == "number" && (a = Math.max(a, l));
        }), a;
      }, minMax: function(n) {
        var a = n[0] || 0, l = n[0] || 0;
        return n.forEach(function(s) {
          typeof s == "number" && (a = Math.min(a, s), l = Math.max(l, s));
        }), a + ".." + l;
      }, average: function(n) {
        return pt(0, n) / n.length;
      }, median: function(n) {
        if (!n.length)
          return null;
        var a = Math.floor(n.length / 2), l = [].concat(n).sort(function(s, h) {
          return s - h;
        });
        return n.length % 2 != 0 ? l[a] : (l[a - 1] + l[a]) / 2;
      }, unique: function(n) {
        return Array.from(new Set(n).values());
      }, uniqueCount: function(n) {
        return new Set(n).size;
      }, count: function(n) {
        return n.length;
      } }), zt = [], Xt = {};
      w.resetGroupBy = "resetGroupBy", w.setGroupBy = "setGroupBy", w.toggleGroupBy = "toggleGroupBy";
      var mt = function(n) {
        n.getGroupByToggleProps = [jt], n.stateReducers.push(Ze), n.visibleColumnsDeps.push(function(a, l) {
          var s = l.instance;
          return [].concat(a, [s.state.groupBy]);
        }), n.visibleColumns.push(Yt), n.useInstance.push(Bo), n.prepareRow.push(_t);
      };
      mt.pluginName = "useGroupBy";
      var jt = function(n, a) {
        var l = a.header;
        return [n, { onClick: l.canGroupBy ? function(s) {
          s.persist(), l.toggleGroupBy();
        } : void 0, style: { cursor: l.canGroupBy ? "pointer" : void 0 }, title: "Toggle GroupBy" }];
      };
      function Ze(n, a, l, s) {
        if (a.type === w.init)
          return y({ groupBy: [] }, n);
        if (a.type === w.resetGroupBy)
          return y({}, n, { groupBy: s.initialState.groupBy || [] });
        if (a.type === w.setGroupBy)
          return y({}, n, { groupBy: a.value });
        if (a.type === w.toggleGroupBy) {
          var h = a.columnId, g = a.value, v = g !== void 0 ? g : !n.groupBy.includes(h);
          return y({}, n, v ? { groupBy: [].concat(n.groupBy, [h]) } : { groupBy: n.groupBy.filter(function(R) {
            return R !== h;
          }) });
        }
      }
      function Yt(n, a) {
        var l = a.instance.state.groupBy, s = l.map(function(g) {
          return n.find(function(v) {
            return v.id === g;
          });
        }).filter(Boolean), h = n.filter(function(g) {
          return !l.includes(g.id);
        });
        return (n = [].concat(s, h)).forEach(function(g) {
          g.isGrouped = l.includes(g.id), g.groupedIndex = l.indexOf(g.id);
        }), n;
      }
      var Oo = {};
      function Bo(n) {
        var a = n.data, l = n.rows, s = n.flatRows, h = n.rowsById, g = n.allColumns, v = n.flatHeaders, R = n.groupByFn, E = R === void 0 ? Ut : R, I = n.manualGroupBy, K = n.aggregations, H = K === void 0 ? Oo : K, x = n.plugins, L = n.state.groupBy, F = n.dispatch, j = n.autoResetGroupBy, U = j === void 0 || j, un = n.disableGroupBy, Pn = n.defaultCanGroupBy, ln = n.getHooks;
        Cn(x, ["useColumnOrder", "useFilters"], "useGroupBy");
        var q = Mn(n);
        g.forEach(function(u) {
          var r = u.accessor, p = u.defaultGroupBy, m = u.disableGroupBy;
          u.canGroupBy = r ? ne(u.canGroupBy, m !== !0 && void 0, un !== !0 && void 0, !0) : ne(u.canGroupBy, p, Pn, !1), u.canGroupBy && (u.toggleGroupBy = function() {
            return n.toggleGroupBy(u.id);
          }), u.Aggregated = u.Aggregated || u.Cell;
        });
        var Rn = d.useCallback(function(u, r) {
          F({ type: w.toggleGroupBy, columnId: u, value: r });
        }, [F]), en = d.useCallback(function(u) {
          F({ type: w.setGroupBy, value: u });
        }, [F]);
        v.forEach(function(u) {
          u.getGroupByToggleProps = yn(ln().getGroupByToggleProps, { instance: q(), header: u });
        });
        var Sn = d.useMemo(function() {
          if (I || !L.length)
            return [l, s, h, zt, Xt, s, h];
          var u = L.filter(function(P) {
            return g.find(function(z) {
              return z.id === P;
            });
          }), r = [], p = {}, m = [], C = {}, S = [], D = {}, N = function P(z, B, G) {
            if (B === void 0 && (B = 0), B === u.length)
              return z.map(function(Q) {
                return y({}, Q, { depth: B });
              });
            var X = u[B], k = E(z, X);
            return Object.entries(k).map(function(Q, cn) {
              var pn = Q[0], _ = Q[1], En = X + ":" + pn, Wn = P(_, B + 1, En = G ? G + ">" + En : En), J = B ? Ee(_, "leafRows") : _, Y = function(sn, Ln, On) {
                var Yn = {};
                return g.forEach(function(tn) {
                  if (u.includes(tn.id))
                    Yn[tn.id] = Ln[0] ? Ln[0].values[tn.id] : null;
                  else {
                    var Ce = typeof tn.aggregate == "function" ? tn.aggregate : H[tn.aggregate] || gt[tn.aggregate];
                    if (Ce) {
                      var Bn = Ln.map(function(wn) {
                        return wn.values[tn.id];
                      }), vn = sn.map(function(wn) {
                        var _n = wn.values[tn.id];
                        if (!On && tn.aggregateValue) {
                          var fe = typeof tn.aggregateValue == "function" ? tn.aggregateValue : H[tn.aggregateValue] || gt[tn.aggregateValue];
                          if (!fe)
                            throw console.info({ column: tn }), new Error("React Table: Invalid column.aggregateValue option for column listed above");
                          _n = fe(_n, wn, tn);
                        }
                        return _n;
                      });
                      Yn[tn.id] = Ce(vn, Bn);
                    } else {
                      if (tn.aggregate)
                        throw console.info({ column: tn }), new Error("React Table: Invalid column.aggregate option for column listed above");
                      Yn[tn.id] = null;
                    }
                  }
                }), Yn;
              }(J, _, B), $ = { id: En, isGrouped: !0, groupByID: X, groupByVal: pn, values: Y, subRows: Wn, leafRows: J, depth: B, index: cn };
              return Wn.forEach(function(sn) {
                r.push(sn), p[sn.id] = sn, sn.isGrouped ? (m.push(sn), C[sn.id] = sn) : (S.push(sn), D[sn.id] = sn);
              }), $;
            });
          }(l);
          return N.forEach(function(P) {
            r.push(P), p[P.id] = P, P.isGrouped ? (m.push(P), C[P.id] = P) : (S.push(P), D[P.id] = P);
          }), [N, r, p, m, C, S, D];
        }, [I, L, l, s, h, g, H, E]), xn = Sn[0], dn = Sn[1], hn = Sn[2], zn = Sn[3], bn = Sn[4], qn = Sn[5], e = Sn[6], t = Mn(U);
        Gn(function() {
          t() && F({ type: w.resetGroupBy });
        }, [F, I ? null : a]), Object.assign(n, { preGroupedRows: l, preGroupedFlatRow: s, preGroupedRowsById: h, groupedRows: xn, groupedFlatRows: dn, groupedRowsById: hn, onlyGroupedFlatRows: zn, onlyGroupedRowsById: bn, nonGroupedFlatRows: qn, nonGroupedRowsById: e, rows: xn, flatRows: dn, rowsById: hn, toggleGroupBy: Rn, setGroupBy: en });
      }
      function _t(n) {
        n.allCells.forEach(function(a) {
          var l;
          a.isGrouped = a.column.isGrouped && a.column.id === n.groupByID, a.isPlaceholder = !a.isGrouped && a.column.isGrouped, a.isAggregated = !a.isGrouped && !a.isPlaceholder && ((l = n.subRows) == null ? void 0 : l.length);
        });
      }
      function Ut(n, a) {
        return n.reduce(function(l, s, h) {
          var g = "" + s.values[a];
          return l[g] = Array.isArray(l[g]) ? l[g] : [], l[g].push(s), l;
        }, {});
      }
      var Jt = /([0-9]+)/gm;
      function at(n, a) {
        return n === a ? 0 : n > a ? 1 : -1;
      }
      function Qe(n, a, l) {
        return [n.values[l], a.values[l]];
      }
      function $t(n) {
        return typeof n == "number" ? isNaN(n) || n === 1 / 0 || n === -1 / 0 ? "" : String(n) : typeof n == "string" ? n : "";
      }
      var Fo = Object.freeze({ __proto__: null, alphanumeric: function(n, a, l) {
        var s = Qe(n, a, l), h = s[0], g = s[1];
        for (h = $t(h), g = $t(g), h = h.split(Jt).filter(Boolean), g = g.split(Jt).filter(Boolean); h.length && g.length; ) {
          var v = h.shift(), R = g.shift(), E = parseInt(v, 10), I = parseInt(R, 10), K = [E, I].sort();
          if (isNaN(K[0])) {
            if (v > R)
              return 1;
            if (R > v)
              return -1;
          } else {
            if (isNaN(K[1]))
              return isNaN(E) ? -1 : 1;
            if (E > I)
              return 1;
            if (I > E)
              return -1;
          }
        }
        return h.length - g.length;
      }, datetime: function(n, a, l) {
        var s = Qe(n, a, l), h = s[0], g = s[1];
        return at(h = h.getTime(), g = g.getTime());
      }, basic: function(n, a, l) {
        var s = Qe(n, a, l);
        return at(s[0], s[1]);
      }, string: function(n, a, l) {
        var s = Qe(n, a, l), h = s[0], g = s[1];
        for (h = h.split("").filter(Boolean), g = g.split("").filter(Boolean); h.length && g.length; ) {
          var v = h.shift(), R = g.shift(), E = v.toLowerCase(), I = R.toLowerCase();
          if (E > I)
            return 1;
          if (I > E)
            return -1;
          if (v > R)
            return 1;
          if (R > v)
            return -1;
        }
        return h.length - g.length;
      }, number: function(n, a, l) {
        var s = Qe(n, a, l), h = s[0], g = s[1], v = /[^0-9.]/gi;
        return at(h = Number(String(h).replace(v, "")), g = Number(String(g).replace(v, "")));
      } });
      w.resetSortBy = "resetSortBy", w.setSortBy = "setSortBy", w.toggleSortBy = "toggleSortBy", w.clearSortBy = "clearSortBy", an.sortType = "alphanumeric", an.sortDescFirst = !1;
      var Zt = function(n) {
        n.getSortByToggleProps = [Wo], n.stateReducers.push(Ho), n.useInstance.push(xo);
      };
      Zt.pluginName = "useSortBy";
      var Wo = function(n, a) {
        var l = a.instance, s = a.column, h = l.isMultiSortEvent, g = h === void 0 ? function(v) {
          return v.shiftKey;
        } : h;
        return [n, { onClick: s.canSort ? function(v) {
          v.persist(), s.toggleSortBy(void 0, !l.disableMultiSort && g(v));
        } : void 0, style: { cursor: s.canSort ? "pointer" : void 0 }, title: s.canSort ? "Toggle SortBy" : void 0 }];
      };
      function Ho(n, a, l, s) {
        if (a.type === w.init)
          return y({ sortBy: [] }, n);
        if (a.type === w.resetSortBy)
          return y({}, n, { sortBy: s.initialState.sortBy || [] });
        if (a.type === w.clearSortBy)
          return y({}, n, { sortBy: n.sortBy.filter(function(q) {
            return q.id !== a.columnId;
          }) });
        if (a.type === w.setSortBy)
          return y({}, n, { sortBy: a.sortBy });
        if (a.type === w.toggleSortBy) {
          var h, g = a.columnId, v = a.desc, R = a.multi, E = s.allColumns, I = s.disableMultiSort, K = s.disableSortRemove, H = s.disableMultiRemove, x = s.maxMultiSortColCount, L = x === void 0 ? Number.MAX_SAFE_INTEGER : x, F = n.sortBy, j = E.find(function(q) {
            return q.id === g;
          }).sortDescFirst, U = F.find(function(q) {
            return q.id === g;
          }), un = F.findIndex(function(q) {
            return q.id === g;
          }), Pn = v != null, ln = [];
          return (h = !I && R ? U ? "toggle" : "add" : un !== F.length - 1 || F.length !== 1 ? "replace" : U ? "toggle" : "replace") != "toggle" || K || Pn || R && H || !(U && U.desc && !j || !U.desc && j) || (h = "remove"), h === "replace" ? ln = [{ id: g, desc: Pn ? v : j }] : h === "add" ? (ln = [].concat(F, [{ id: g, desc: Pn ? v : j }])).splice(0, ln.length - L) : h === "toggle" ? ln = F.map(function(q) {
            return q.id === g ? y({}, q, { desc: Pn ? v : !U.desc }) : q;
          }) : h === "remove" && (ln = F.filter(function(q) {
            return q.id !== g;
          })), y({}, n, { sortBy: ln });
        }
      }
      function xo(n) {
        var a = n.data, l = n.rows, s = n.flatRows, h = n.allColumns, g = n.orderByFn, v = g === void 0 ? Qt : g, R = n.sortTypes, E = n.manualSortBy, I = n.defaultCanSort, K = n.disableSortBy, H = n.flatHeaders, x = n.state.sortBy, L = n.dispatch, F = n.plugins, j = n.getHooks, U = n.autoResetSortBy, un = U === void 0 || U;
        Cn(F, ["useFilters", "useGlobalFilter", "useGroupBy", "usePivotColumns"], "useSortBy");
        var Pn = d.useCallback(function(dn) {
          L({ type: w.setSortBy, sortBy: dn });
        }, [L]), ln = d.useCallback(function(dn, hn, zn) {
          L({ type: w.toggleSortBy, columnId: dn, desc: hn, multi: zn });
        }, [L]), q = Mn(n);
        H.forEach(function(dn) {
          var hn = dn.accessor, zn = dn.canSort, bn = dn.disableSortBy, qn = dn.id, e = hn ? ne(bn !== !0 && void 0, K !== !0 && void 0, !0) : ne(I, zn, !1);
          dn.canSort = e, dn.canSort && (dn.toggleSortBy = function(u, r) {
            return ln(dn.id, u, r);
          }, dn.clearSortBy = function() {
            L({ type: w.clearSortBy, columnId: dn.id });
          }), dn.getSortByToggleProps = yn(j().getSortByToggleProps, { instance: q(), column: dn });
          var t = x.find(function(u) {
            return u.id === qn;
          });
          dn.isSorted = !!t, dn.sortedIndex = x.findIndex(function(u) {
            return u.id === qn;
          }), dn.isSortedDesc = dn.isSorted ? t.desc : void 0;
        });
        var Rn = d.useMemo(function() {
          if (E || !x.length)
            return [l, s];
          var dn = [], hn = x.filter(function(zn) {
            return h.find(function(bn) {
              return bn.id === zn.id;
            });
          });
          return [function zn(bn) {
            var qn = v(bn, hn.map(function(e) {
              var t = h.find(function(p) {
                return p.id === e.id;
              });
              if (!t)
                throw new Error("React-Table: Could not find a column with id: " + e.id + " while sorting");
              var u = t.sortType, r = ee(u) || (R || {})[u] || Fo[u];
              if (!r)
                throw new Error("React-Table: Could not find a valid sortType of '" + u + "' for column '" + e.id + "'.");
              return function(p, m) {
                return r(p, m, e.id, e.desc);
              };
            }), hn.map(function(e) {
              var t = h.find(function(u) {
                return u.id === e.id;
              });
              return t && t.sortInverted ? e.desc : !e.desc;
            }));
            return qn.forEach(function(e) {
              dn.push(e), e.subRows && e.subRows.length !== 0 && (e.subRows = zn(e.subRows));
            }), qn;
          }(l), dn];
        }, [E, x, l, s, h, v, R]), en = Rn[0], Sn = Rn[1], xn = Mn(un);
        Gn(function() {
          xn() && L({ type: w.resetSortBy });
        }, [E ? null : a]), Object.assign(n, { preSortedRows: l, preSortedFlatRows: s, sortedRows: en, sortedFlatRows: Sn, rows: en, flatRows: Sn, setSortBy: Pn, toggleSortBy: ln });
      }
      function Qt(n, a, l) {
        return [].concat(n).sort(function(s, h) {
          for (var g = 0; g < a.length; g += 1) {
            var v = a[g], R = l[g] === !1 || l[g] === "desc", E = v(s, h);
            if (E !== 0)
              return R ? -E : E;
          }
          return l[0] ? s.index - h.index : h.index - s.index;
        });
      }
      w.resetPage = "resetPage", w.gotoPage = "gotoPage", w.setPageSize = "setPageSize";
      var ht = function(n) {
        n.stateReducers.push(Go), n.useInstance.push(Vo);
      };
      function Go(n, a, l, s) {
        if (a.type === w.init)
          return y({ pageSize: 10, pageIndex: 0 }, n);
        if (a.type === w.resetPage)
          return y({}, n, { pageIndex: s.initialState.pageIndex || 0 });
        if (a.type === w.gotoPage) {
          var h = s.pageCount, g = s.page, v = Fn(a.pageIndex, n.pageIndex), R = !1;
          return v > n.pageIndex ? R = h === -1 ? g.length >= n.pageSize : v < h : v < n.pageIndex && (R = v > -1), R ? y({}, n, { pageIndex: v }) : n;
        }
        if (a.type === w.setPageSize) {
          var E = a.pageSize, I = n.pageSize * n.pageIndex;
          return y({}, n, { pageIndex: Math.floor(I / E), pageSize: E });
        }
      }
      function Vo(n) {
        var a = n.rows, l = n.autoResetPage, s = l === void 0 || l, h = n.manualExpandedKey, g = h === void 0 ? "expanded" : h, v = n.plugins, R = n.pageCount, E = n.paginateExpandedRows, I = E === void 0 || E, K = n.expandSubRows, H = K === void 0 || K, x = n.state, L = x.pageSize, F = x.pageIndex, j = x.expanded, U = x.globalFilter, un = x.filters, Pn = x.groupBy, ln = x.sortBy, q = n.dispatch, Rn = n.data, en = n.manualPagination;
        Cn(v, ["useGlobalFilter", "useFilters", "useGroupBy", "useSortBy", "useExpanded"], "usePagination");
        var Sn = Mn(s);
        Gn(function() {
          Sn() && q({ type: w.resetPage });
        }, [q, en ? null : Rn, U, un, Pn, ln]);
        var xn = en ? R : Math.ceil(a.length / L), dn = d.useMemo(function() {
          return xn > 0 ? [].concat(new Array(xn)).fill(null).map(function(r, p) {
            return p;
          }) : [];
        }, [xn]), hn = d.useMemo(function() {
          var r;
          if (en)
            r = a;
          else {
            var p = L * F, m = p + L;
            r = a.slice(p, m);
          }
          return I ? r : De(r, { manualExpandedKey: g, expanded: j, expandSubRows: H });
        }, [H, j, g, en, F, L, I, a]), zn = F > 0, bn = xn === -1 ? hn.length >= L : F < xn - 1, qn = d.useCallback(function(r) {
          q({ type: w.gotoPage, pageIndex: r });
        }, [q]), e = d.useCallback(function() {
          return qn(function(r) {
            return r - 1;
          });
        }, [qn]), t = d.useCallback(function() {
          return qn(function(r) {
            return r + 1;
          });
        }, [qn]), u = d.useCallback(function(r) {
          q({ type: w.setPageSize, pageSize: r });
        }, [q]);
        Object.assign(n, { pageOptions: dn, pageCount: xn, page: hn, canPreviousPage: zn, canNextPage: bn, gotoPage: qn, previousPage: e, nextPage: t, setPageSize: u });
      }
      ht.pluginName = "usePagination", w.resetPivot = "resetPivot", w.togglePivot = "togglePivot";
      var vt = function(n) {
        n.getPivotToggleProps = [Ko], n.stateReducers.push(qo), n.useInstanceAfterData.push(zo), n.allColumns.push(Xo), n.accessValue.push(jo), n.materializedColumns.push(eo), n.materializedColumnsDeps.push(to), n.visibleColumns.push(Yo), n.visibleColumnsDeps.push(_o), n.useInstance.push(Uo), n.prepareRow.push(Jo);
      };
      vt.pluginName = "usePivotColumns";
      var no = [], Ko = function(n, a) {
        var l = a.header;
        return [n, { onClick: l.canPivot ? function(s) {
          s.persist(), l.togglePivot();
        } : void 0, style: { cursor: l.canPivot ? "pointer" : void 0 }, title: "Toggle Pivot" }];
      };
      function qo(n, a, l, s) {
        if (a.type === w.init)
          return y({ pivotColumns: no }, n);
        if (a.type === w.resetPivot)
          return y({}, n, { pivotColumns: s.initialState.pivotColumns || no });
        if (a.type === w.togglePivot) {
          var h = a.columnId, g = a.value, v = g !== void 0 ? g : !n.pivotColumns.includes(h);
          return y({}, n, v ? { pivotColumns: [].concat(n.pivotColumns, [h]) } : { pivotColumns: n.pivotColumns.filter(function(R) {
            return R !== h;
          }) });
        }
      }
      function zo(n) {
        n.allColumns.forEach(function(a) {
          a.isPivotSource = n.state.pivotColumns.includes(a.id);
        });
      }
      function Xo(n, a) {
        var l = a.instance;
        return n.forEach(function(s) {
          s.isPivotSource = l.state.pivotColumns.includes(s.id), s.uniqueValues = /* @__PURE__ */ new Set();
        }), n;
      }
      function jo(n, a) {
        var l = a.column;
        return l.uniqueValues && n !== void 0 && l.uniqueValues.add(n), n;
      }
      function eo(n, a) {
        var l = a.instance, s = l.allColumns, h = l.state;
        if (!h.pivotColumns.length || !h.groupBy || !h.groupBy.length)
          return n;
        var g = h.pivotColumns.map(function(E) {
          return s.find(function(I) {
            return I.id === E;
          });
        }).filter(Boolean), v = s.filter(function(E) {
          return !E.isPivotSource && !h.groupBy.includes(E.id) && !h.pivotColumns.includes(E.id);
        }), R = le(function E(I, K, H) {
          I === void 0 && (I = 0), H === void 0 && (H = []);
          var x = g[I];
          return x ? Array.from(x.uniqueValues).sort().map(function(L) {
            var F = y({}, x, { Header: x.PivotHeader || typeof x.header == "string" ? x.Header + ": " + L : L, isPivotGroup: !0, parent: K, depth: I, id: K ? K.id + "." + x.id + "." + L : x.id + "." + L, pivotValue: L });
            return F.columns = E(I + 1, F, [].concat(H, [function(j) {
              return j.values[x.id] === L;
            }])), F;
          }) : v.map(function(L) {
            return y({}, L, { canPivot: !1, isPivoted: !0, parent: K, depth: I, id: "" + (K ? K.id + "." + L.id : L.id), accessor: function(F, j, U) {
              if (H.every(function(un) {
                return un(U);
              }))
                return U.values[L.id];
            } });
          });
        }());
        return [].concat(n, R);
      }
      function to(n, a) {
        var l = a.instance.state, s = l.pivotColumns, h = l.groupBy;
        return [].concat(n, [s, h]);
      }
      function Yo(n, a) {
        var l = a.instance.state;
        return n = n.filter(function(s) {
          return !s.isPivotSource;
        }), l.pivotColumns.length && l.groupBy && l.groupBy.length && (n = n.filter(function(s) {
          return s.isGrouped || s.isPivoted;
        })), n;
      }
      function _o(n, a) {
        var l = a.instance;
        return [].concat(n, [l.state.pivotColumns, l.state.groupBy]);
      }
      function Uo(n) {
        var a = n.columns, l = n.allColumns, s = n.flatHeaders, h = n.getHooks, g = n.plugins, v = n.dispatch, R = n.autoResetPivot, E = R === void 0 || R, I = n.manaulPivot, K = n.disablePivot, H = n.defaultCanPivot;
        Cn(g, ["useGroupBy"], "usePivotColumns");
        var x = Mn(n);
        l.forEach(function(F) {
          var j = F.accessor, U = F.defaultPivot, un = F.disablePivot;
          F.canPivot = j ? ne(F.canPivot, un !== !0 && void 0, K !== !0 && void 0, !0) : ne(F.canPivot, U, H, !1), F.canPivot && (F.togglePivot = function() {
            return n.togglePivot(F.id);
          }), F.Aggregated = F.Aggregated || F.Cell;
        }), s.forEach(function(F) {
          F.getPivotToggleProps = yn(h().getPivotToggleProps, { instance: x(), header: F });
        });
        var L = Mn(E);
        Gn(function() {
          L() && v({ type: w.resetPivot });
        }, [v, I ? null : a]), Object.assign(n, { togglePivot: function(F, j) {
          v({ type: w.togglePivot, columnId: F, value: j });
        } });
      }
      function Jo(n) {
        n.allCells.forEach(function(a) {
          a.isPivoted = a.column.isPivoted;
        });
      }
      w.resetSelectedRows = "resetSelectedRows", w.toggleAllRowsSelected = "toggleAllRowsSelected", w.toggleRowSelected = "toggleRowSelected", w.toggleAllPageRowsSelected = "toggleAllPageRowsSelected";
      var oo = function(n) {
        n.getToggleRowSelectedProps = [St], n.getToggleAllRowsSelectedProps = [nt], n.getToggleAllPageRowsSelectedProps = [ro], n.stateReducers.push($o), n.useInstance.push(ao), n.prepareRow.push(Zo);
      };
      oo.pluginName = "useRowSelect";
      var St = function(n, a) {
        var l = a.instance, s = a.row, h = l.manualRowSelectedKey, g = h === void 0 ? "isSelected" : h;
        return [n, { onChange: function(v) {
          s.toggleRowSelected(v.target.checked);
        }, style: { cursor: "pointer" }, checked: !(!s.original || !s.original[g]) || s.isSelected, title: "Toggle Row Selected", indeterminate: s.isSomeSelected }];
      }, nt = function(n, a) {
        var l = a.instance;
        return [n, { onChange: function(s) {
          l.toggleAllRowsSelected(s.target.checked);
        }, style: { cursor: "pointer" }, checked: l.isAllRowsSelected, title: "Toggle All Rows Selected", indeterminate: !!(!l.isAllRowsSelected && Object.keys(l.state.selectedRowIds).length) }];
      }, ro = function(n, a) {
        var l = a.instance;
        return [n, { onChange: function(s) {
          l.toggleAllPageRowsSelected(s.target.checked);
        }, style: { cursor: "pointer" }, checked: l.isAllPageRowsSelected, title: "Toggle All Current Page Rows Selected", indeterminate: !!(!l.isAllPageRowsSelected && l.page.some(function(s) {
          var h = s.id;
          return l.state.selectedRowIds[h];
        })) }];
      };
      function $o(n, a, l, s) {
        if (a.type === w.init)
          return y({ selectedRowIds: {} }, n);
        if (a.type === w.resetSelectedRows)
          return y({}, n, { selectedRowIds: s.initialState.selectedRowIds || {} });
        if (a.type === w.toggleAllRowsSelected) {
          var h = a.value, g = s.isAllRowsSelected, v = s.rowsById, R = s.nonGroupedRowsById, E = R === void 0 ? v : R, I = h !== void 0 ? h : !g, K = Object.assign({}, n.selectedRowIds);
          return I ? Object.keys(E).forEach(function(qn) {
            K[qn] = !0;
          }) : Object.keys(E).forEach(function(qn) {
            delete K[qn];
          }), y({}, n, { selectedRowIds: K });
        }
        if (a.type === w.toggleRowSelected) {
          var H = a.id, x = a.value, L = s.rowsById, F = s.selectSubRows, j = F === void 0 || F, U = s.getSubRows, un = n.selectedRowIds[H], Pn = x !== void 0 ? x : !un;
          if (un === Pn)
            return n;
          var ln = y({}, n.selectedRowIds);
          return function qn(e) {
            var t = L[e];
            if (t && (t.isGrouped || (Pn ? ln[e] = !0 : delete ln[e]), j && U(t)))
              return U(t).forEach(function(u) {
                return qn(u.id);
              });
          }(H), y({}, n, { selectedRowIds: ln });
        }
        if (a.type === w.toggleAllPageRowsSelected) {
          var q = a.value, Rn = s.page, en = s.rowsById, Sn = s.selectSubRows, xn = Sn === void 0 || Sn, dn = s.isAllPageRowsSelected, hn = s.getSubRows, zn = q !== void 0 ? q : !dn, bn = y({}, n.selectedRowIds);
          return Rn.forEach(function(qn) {
            return function e(t) {
              var u = en[t];
              if (u.isGrouped || (zn ? bn[t] = !0 : delete bn[t]), xn && hn(u))
                return hn(u).forEach(function(r) {
                  return e(r.id);
                });
            }(qn.id);
          }), y({}, n, { selectedRowIds: bn });
        }
        return n;
      }
      function ao(n) {
        var a = n.data, l = n.rows, s = n.getHooks, h = n.plugins, g = n.rowsById, v = n.nonGroupedRowsById, R = v === void 0 ? g : v, E = n.autoResetSelectedRows, I = E === void 0 || E, K = n.state.selectedRowIds, H = n.selectSubRows, x = H === void 0 || H, L = n.dispatch, F = n.page, j = n.getSubRows;
        Cn(h, ["useFilters", "useGroupBy", "useSortBy", "useExpanded", "usePagination"], "useRowSelect");
        var U = d.useMemo(function() {
          var hn = [];
          return l.forEach(function(zn) {
            var bn = x ? function qn(e, t, u) {
              if (t[e.id])
                return !0;
              var r = u(e);
              if (r && r.length) {
                var p = !0, m = !1;
                return r.forEach(function(C) {
                  m && !p || (qn(C, t, u) ? m = !0 : p = !1);
                }), !!p || !!m && null;
              }
              return !1;
            }(zn, K, j) : !!K[zn.id];
            zn.isSelected = !!bn, zn.isSomeSelected = bn === null, bn && hn.push(zn);
          }), hn;
        }, [l, x, K, j]), un = !!(Object.keys(R).length && Object.keys(K).length), Pn = un;
        un && Object.keys(R).some(function(hn) {
          return !K[hn];
        }) && (un = !1), un || F && F.length && F.some(function(hn) {
          var zn = hn.id;
          return !K[zn];
        }) && (Pn = !1);
        var ln = Mn(I);
        Gn(function() {
          ln() && L({ type: w.resetSelectedRows });
        }, [L, a]);
        var q = d.useCallback(function(hn) {
          return L({ type: w.toggleAllRowsSelected, value: hn });
        }, [L]), Rn = d.useCallback(function(hn) {
          return L({ type: w.toggleAllPageRowsSelected, value: hn });
        }, [L]), en = d.useCallback(function(hn, zn) {
          return L({ type: w.toggleRowSelected, id: hn, value: zn });
        }, [L]), Sn = Mn(n), xn = yn(s().getToggleAllRowsSelectedProps, { instance: Sn() }), dn = yn(s().getToggleAllPageRowsSelectedProps, { instance: Sn() });
        Object.assign(n, { selectedFlatRows: U, isAllRowsSelected: un, isAllPageRowsSelected: Pn, toggleRowSelected: en, toggleAllRowsSelected: q, getToggleAllRowsSelectedProps: xn, getToggleAllPageRowsSelectedProps: dn, toggleAllPageRowsSelected: Rn });
      }
      function Zo(n, a) {
        var l = a.instance;
        n.toggleRowSelected = function(s) {
          return l.toggleRowSelected(n.id, s);
        }, n.getToggleRowSelectedProps = yn(l.getHooks().getToggleRowSelectedProps, { instance: l, row: n });
      }
      var uo = function(n) {
        return {};
      }, io = function(n) {
        return {};
      };
      w.setRowState = "setRowState", w.setCellState = "setCellState", w.resetRowState = "resetRowState";
      var wt = function(n) {
        n.stateReducers.push(Qo), n.useInstance.push(lo), n.prepareRow.push(nr);
      };
      function Qo(n, a, l, s) {
        var h = s.initialRowStateAccessor, g = h === void 0 ? uo : h, v = s.initialCellStateAccessor, R = v === void 0 ? io : v, E = s.rowsById;
        if (a.type === w.init)
          return y({ rowState: {} }, n);
        if (a.type === w.resetRowState)
          return y({}, n, { rowState: s.initialState.rowState || {} });
        if (a.type === w.setRowState) {
          var I, K = a.rowId, H = a.value, x = n.rowState[K] !== void 0 ? n.rowState[K] : g(E[K]);
          return y({}, n, { rowState: y({}, n.rowState, (I = {}, I[K] = Fn(H, x), I)) });
        }
        if (a.type === w.setCellState) {
          var L, F, j, U, un, Pn = a.rowId, ln = a.columnId, q = a.value, Rn = n.rowState[Pn] !== void 0 ? n.rowState[Pn] : g(E[Pn]), en = (Rn == null || (L = Rn.cellState) == null ? void 0 : L[ln]) !== void 0 ? Rn.cellState[ln] : R((F = E[Pn]) == null || (j = F.cells) == null ? void 0 : j.find(function(Sn) {
            return Sn.column.id === ln;
          }));
          return y({}, n, { rowState: y({}, n.rowState, (un = {}, un[Pn] = y({}, Rn, { cellState: y({}, Rn.cellState || {}, (U = {}, U[ln] = Fn(q, en), U)) }), un)) });
        }
      }
      function lo(n) {
        var a = n.autoResetRowState, l = a === void 0 || a, s = n.data, h = n.dispatch, g = d.useCallback(function(E, I) {
          return h({ type: w.setRowState, rowId: E, value: I });
        }, [h]), v = d.useCallback(function(E, I, K) {
          return h({ type: w.setCellState, rowId: E, columnId: I, value: K });
        }, [h]), R = Mn(l);
        Gn(function() {
          R() && h({ type: w.resetRowState });
        }, [s]), Object.assign(n, { setRowState: g, setCellState: v });
      }
      function nr(n, a) {
        var l = a.instance, s = l.initialRowStateAccessor, h = s === void 0 ? uo : s, g = l.initialCellStateAccessor, v = g === void 0 ? io : g, R = l.state.rowState;
        n && (n.state = R[n.id] !== void 0 ? R[n.id] : h(n), n.setState = function(E) {
          return l.setRowState(n.id, E);
        }, n.cells.forEach(function(E) {
          n.state.cellState || (n.state.cellState = {}), E.state = n.state.cellState[E.column.id] !== void 0 ? n.state.cellState[E.column.id] : v(E), E.setState = function(I) {
            return l.setCellState(n.id, E.column.id, I);
          };
        }));
      }
      wt.pluginName = "useRowState", w.resetColumnOrder = "resetColumnOrder", w.setColumnOrder = "setColumnOrder";
      var so = function(n) {
        n.stateReducers.push(co), n.visibleColumnsDeps.push(function(a, l) {
          var s = l.instance;
          return [].concat(a, [s.state.columnOrder]);
        }), n.visibleColumns.push(yo), n.useInstance.push(er);
      };
      function co(n, a, l, s) {
        return a.type === w.init ? y({ columnOrder: [] }, n) : a.type === w.resetColumnOrder ? y({}, n, { columnOrder: s.initialState.columnOrder || [] }) : a.type === w.setColumnOrder ? y({}, n, { columnOrder: Fn(a.columnOrder, n.columnOrder) }) : void 0;
      }
      function yo(n, a) {
        var l = a.instance.state.columnOrder;
        if (!l || !l.length)
          return n;
        for (var s = [].concat(l), h = [].concat(n), g = [], v = function() {
          var R = s.shift(), E = h.findIndex(function(I) {
            return I.id === R;
          });
          E > -1 && g.push(h.splice(E, 1)[0]);
        }; h.length && s.length; )
          v();
        return [].concat(g, h);
      }
      function er(n) {
        var a = n.dispatch;
        n.setColumnOrder = d.useCallback(function(l) {
          return a({ type: w.setColumnOrder, columnOrder: l });
        }, [a]);
      }
      so.pluginName = "useColumnOrder", an.canResize = !0, w.columnStartResizing = "columnStartResizing", w.columnResizing = "columnResizing", w.columnDoneResizing = "columnDoneResizing", w.resetResize = "resetResize";
      var Co = function(n) {
        n.getResizerProps = [tr], n.getHeaderProps.push({ style: { position: "relative" } }), n.stateReducers.push(or), n.useInstance.push(ar), n.useInstanceBeforeDimensions.push(rr);
      }, tr = function(n, a) {
        var l = a.instance, s = a.header, h = l.dispatch, g = function(v, R) {
          var E = !1;
          if (v.type === "touchstart") {
            if (v.touches && v.touches.length > 1)
              return;
            E = !0;
          }
          var I, K, H = function(ln) {
            var q = [];
            return function Rn(en) {
              en.columns && en.columns.length && en.columns.map(Rn), q.push(en);
            }(ln), q;
          }(R).map(function(ln) {
            return [ln.id, ln.totalWidth];
          }), x = E ? Math.round(v.touches[0].clientX) : v.clientX, L = function() {
            window.cancelAnimationFrame(I), I = null, h({ type: w.columnDoneResizing });
          }, F = function() {
            window.cancelAnimationFrame(I), I = null, h({ type: w.columnResizing, clientX: K });
          }, j = function(ln) {
            K = ln, I || (I = window.requestAnimationFrame(F));
          }, U = { mouse: { moveEvent: "mousemove", moveHandler: function(ln) {
            return j(ln.clientX);
          }, upEvent: "mouseup", upHandler: function(ln) {
            document.removeEventListener("mousemove", U.mouse.moveHandler), document.removeEventListener("mouseup", U.mouse.upHandler), L();
          } }, touch: { moveEvent: "touchmove", moveHandler: function(ln) {
            return ln.cancelable && (ln.preventDefault(), ln.stopPropagation()), j(ln.touches[0].clientX), !1;
          }, upEvent: "touchend", upHandler: function(ln) {
            document.removeEventListener(U.touch.moveEvent, U.touch.moveHandler), document.removeEventListener(U.touch.upEvent, U.touch.moveHandler), L();
          } } }, un = E ? U.touch : U.mouse, Pn = !!function() {
            if (typeof Ie == "boolean")
              return Ie;
            var ln = !1;
            try {
              var q = { get passive() {
                return ln = !0, !1;
              } };
              window.addEventListener("test", null, q), window.removeEventListener("test", null, q);
            } catch {
              ln = !1;
            }
            return Ie = ln;
          }() && { passive: !1 };
          document.addEventListener(un.moveEvent, un.moveHandler, Pn), document.addEventListener(un.upEvent, un.upHandler, Pn), h({ type: w.columnStartResizing, columnId: R.id, columnWidth: R.totalWidth, headerIdWidths: H, clientX: x });
        };
        return [n, { onMouseDown: function(v) {
          return v.persist() || g(v, s);
        }, onTouchStart: function(v) {
          return v.persist() || g(v, s);
        }, style: { cursor: "col-resize" }, draggable: !1, role: "separator" }];
      };
      function or(n, a) {
        if (a.type === w.init)
          return y({ columnResizing: { columnWidths: {} } }, n);
        if (a.type === w.resetResize)
          return y({}, n, { columnResizing: { columnWidths: {} } });
        if (a.type === w.columnStartResizing) {
          var l = a.clientX, s = a.columnId, h = a.columnWidth, g = a.headerIdWidths;
          return y({}, n, { columnResizing: y({}, n.columnResizing, { startX: l, headerIdWidths: g, columnWidth: h, isResizingColumn: s }) });
        }
        if (a.type === w.columnResizing) {
          var v = a.clientX, R = n.columnResizing, E = R.startX, I = R.columnWidth, K = R.headerIdWidths, H = (v - E) / I, x = {};
          return (K === void 0 ? [] : K).forEach(function(L) {
            var F = L[0], j = L[1];
            x[F] = Math.max(j + j * H, 0);
          }), y({}, n, { columnResizing: y({}, n.columnResizing, { columnWidths: y({}, n.columnResizing.columnWidths, {}, x) }) });
        }
        return a.type === w.columnDoneResizing ? y({}, n, { columnResizing: y({}, n.columnResizing, { startX: null, isResizingColumn: null }) }) : void 0;
      }
      Co.pluginName = "useResizeColumns";
      var rr = function(n) {
        var a = n.flatHeaders, l = n.disableResizing, s = n.getHooks, h = n.state.columnResizing, g = Mn(n);
        a.forEach(function(v) {
          var R = ne(v.disableResizing !== !0 && void 0, l !== !0 && void 0, !0);
          v.canResize = R, v.width = h.columnWidths[v.id] || v.originalWidth || v.width, v.isResizing = h.isResizingColumn === v.id, R && (v.getResizerProps = yn(s().getResizerProps, { instance: g(), header: v }));
        });
      };
      function ar(n) {
        var a = n.plugins, l = n.dispatch, s = n.autoResetResize, h = s === void 0 || s, g = n.columns;
        Cn(a, ["useAbsoluteLayout"], "useResizeColumns");
        var v = Mn(h);
        Gn(function() {
          v() && l({ type: w.resetResize });
        }, [g]);
        var R = d.useCallback(function() {
          return l({ type: w.resetResize });
        }, [l]);
        Object.assign(n, { resetResizing: R });
      }
      var Mt = { position: "absolute", top: 0 }, fo = function(n) {
        n.getTableBodyProps.push(ut), n.getRowProps.push(ut), n.getHeaderGroupProps.push(ut), n.getFooterGroupProps.push(ut), n.getHeaderProps.push(function(a, l) {
          var s = l.column;
          return [a, { style: y({}, Mt, { left: s.totalLeft + "px", width: s.totalWidth + "px" }) }];
        }), n.getCellProps.push(function(a, l) {
          var s = l.cell;
          return [a, { style: y({}, Mt, { left: s.column.totalLeft + "px", width: s.column.totalWidth + "px" }) }];
        }), n.getFooterProps.push(function(a, l) {
          var s = l.column;
          return [a, { style: y({}, Mt, { left: s.totalLeft + "px", width: s.totalWidth + "px" }) }];
        });
      };
      fo.pluginName = "useAbsoluteLayout";
      var ut = function(n, a) {
        return [n, { style: { position: "relative", width: a.instance.totalColumnsWidth + "px" } }];
      }, At = { display: "inline-block", boxSizing: "border-box" }, bt = function(n, a) {
        return [n, { style: { display: "flex", width: a.instance.totalColumnsWidth + "px" } }];
      }, po = function(n) {
        n.getRowProps.push(bt), n.getHeaderGroupProps.push(bt), n.getFooterGroupProps.push(bt), n.getHeaderProps.push(function(a, l) {
          var s = l.column;
          return [a, { style: y({}, At, { width: s.totalWidth + "px" }) }];
        }), n.getCellProps.push(function(a, l) {
          var s = l.cell;
          return [a, { style: y({}, At, { width: s.column.totalWidth + "px" }) }];
        }), n.getFooterProps.push(function(a, l) {
          var s = l.column;
          return [a, { style: y({}, At, { width: s.totalWidth + "px" }) }];
        });
      };
      function Dt(n) {
        n.getTableProps.push(ur), n.getRowProps.push(Rt), n.getHeaderGroupProps.push(Rt), n.getFooterGroupProps.push(Rt), n.getHeaderProps.push(ir), n.getCellProps.push(lr), n.getFooterProps.push(sr);
      }
      po.pluginName = "useBlockLayout", Dt.pluginName = "useFlexLayout";
      var ur = function(n, a) {
        return [n, { style: { minWidth: a.instance.totalColumnsMinWidth + "px" } }];
      }, Rt = function(n, a) {
        return [n, { style: { display: "flex", flex: "1 0 auto", minWidth: a.instance.totalColumnsMinWidth + "px" } }];
      }, ir = function(n, a) {
        var l = a.column;
        return [n, { style: { boxSizing: "border-box", flex: l.totalFlexWidth ? l.totalFlexWidth + " 0 auto" : void 0, minWidth: l.totalMinWidth + "px", width: l.totalWidth + "px" } }];
      }, lr = function(n, a) {
        var l = a.cell;
        return [n, { style: { boxSizing: "border-box", flex: l.column.totalFlexWidth + " 0 auto", minWidth: l.column.totalMinWidth + "px", width: l.column.totalWidth + "px" } }];
      }, sr = function(n, a) {
        var l = a.column;
        return [n, { style: { boxSizing: "border-box", flex: l.totalFlexWidth ? l.totalFlexWidth + " 0 auto" : void 0, minWidth: l.totalMinWidth + "px", width: l.totalWidth + "px" } }];
      };
      function go(n) {
        n.stateReducers.push(So), n.getTableProps.push(mo), n.getHeaderProps.push(ho), n.getRowProps.push(vo);
      }
      w.columnStartResizing = "columnStartResizing", w.columnResizing = "columnResizing", w.columnDoneResizing = "columnDoneResizing", w.resetResize = "resetResize", go.pluginName = "useGridLayout";
      var mo = function(n, a) {
        var l = a.instance;
        return [n, { style: { display: "grid", gridTemplateColumns: l.visibleColumns.map(function(s) {
          var h;
          return l.state.gridLayout.columnWidths[s.id] ? l.state.gridLayout.columnWidths[s.id] + "px" : (h = l.state.columnResizing) != null && h.isResizingColumn ? l.state.gridLayout.startWidths[s.id] + "px" : typeof s.width == "number" ? s.width + "px" : s.width;
        }).join(" ") } }];
      }, ho = function(n, a) {
        var l = a.column;
        return [n, { id: "header-cell-" + l.id, style: { position: "sticky", gridColumn: "span " + l.totalVisibleHeaderCount } }];
      }, vo = function(n, a) {
        var l = a.row;
        return l.isExpanded ? [n, { style: { gridColumn: "1 / " + (l.cells.length + 1) } }] : [n, {}];
      };
      function So(n, a, l, s) {
        if (a.type === w.init)
          return y({ gridLayout: { columnWidths: {} } }, n);
        if (a.type === w.resetResize)
          return y({}, n, { gridLayout: { columnWidths: {} } });
        if (a.type === w.columnStartResizing) {
          var h = a.columnId, g = a.headerIdWidths, v = Nt(h);
          if (v !== void 0) {
            var R = s.visibleColumns.reduce(function(q, Rn) {
              var en;
              return y({}, q, ((en = {})[Rn.id] = Nt(Rn.id), en));
            }, {}), E = s.visibleColumns.reduce(function(q, Rn) {
              var en;
              return y({}, q, ((en = {})[Rn.id] = Rn.minWidth, en));
            }, {}), I = s.visibleColumns.reduce(function(q, Rn) {
              var en;
              return y({}, q, ((en = {})[Rn.id] = Rn.maxWidth, en));
            }, {}), K = g.map(function(q) {
              var Rn = q[0];
              return [Rn, Nt(Rn)];
            });
            return y({}, n, { gridLayout: y({}, n.gridLayout, { startWidths: R, minWidths: E, maxWidths: I, headerIdGridWidths: K, columnWidth: v }) });
          }
          return n;
        }
        if (a.type === w.columnResizing) {
          var H = a.clientX, x = n.columnResizing.startX, L = n.gridLayout, F = L.columnWidth, j = L.minWidths, U = L.maxWidths, un = L.headerIdGridWidths, Pn = (H - x) / F, ln = {};
          return (un === void 0 ? [] : un).forEach(function(q) {
            var Rn = q[0], en = q[1];
            ln[Rn] = Math.min(Math.max(j[Rn], en + en * Pn), U[Rn]);
          }), y({}, n, { gridLayout: y({}, n.gridLayout, { columnWidths: y({}, n.gridLayout.columnWidths, {}, ln) }) });
        }
        return a.type === w.columnDoneResizing ? y({}, n, { gridLayout: y({}, n.gridLayout, { startWidths: {}, minWidths: {}, maxWidths: {} }) }) : void 0;
      }
      function Nt(n) {
        var a, l = (a = document.getElementById("header-cell-" + n)) == null ? void 0 : a.offsetWidth;
        if (l !== void 0)
          return l;
      }
      c._UNSTABLE_usePivotColumns = vt, c.actions = w, c.defaultColumn = an, c.defaultGroupByFn = Ut, c.defaultOrderByFn = Qt, c.defaultRenderer = Tn, c.emptyRenderer = M, c.ensurePluginOrder = Cn, c.flexRender = Vn, c.functionalUpdate = Fn, c.loopHooks = Kn, c.makePropGetter = yn, c.makeRenderer = Dn, c.reduceHooks = mn, c.safeUseLayoutEffect = Un, c.useAbsoluteLayout = fo, c.useAsyncDebounce = function(n, a) {
        a === void 0 && (a = 0);
        var l = d.useRef({}), s = Mn(n), h = Mn(a);
        return d.useCallback(function() {
          var g = T(regeneratorRuntime.mark(function v() {
            var R, E, I, K = arguments;
            return regeneratorRuntime.wrap(function(H) {
              for (; ; )
                switch (H.prev = H.next) {
                  case 0:
                    for (R = K.length, E = new Array(R), I = 0; I < R; I++)
                      E[I] = K[I];
                    return l.current.promise || (l.current.promise = new Promise(function(x, L) {
                      l.current.resolve = x, l.current.reject = L;
                    })), l.current.timeout && clearTimeout(l.current.timeout), l.current.timeout = setTimeout(T(regeneratorRuntime.mark(function x() {
                      return regeneratorRuntime.wrap(function(L) {
                        for (; ; )
                          switch (L.prev = L.next) {
                            case 0:
                              return delete l.current.timeout, L.prev = 1, L.t0 = l.current, L.next = 5, s().apply(void 0, E);
                            case 5:
                              L.t1 = L.sent, L.t0.resolve.call(L.t0, L.t1), L.next = 12;
                              break;
                            case 9:
                              L.prev = 9, L.t2 = L.catch(1), l.current.reject(L.t2);
                            case 12:
                              return L.prev = 12, delete l.current.promise, L.finish(12);
                            case 15:
                            case "end":
                              return L.stop();
                          }
                      }, x, null, [[1, 9, 12, 15]]);
                    })), h()), H.abrupt("return", l.current.promise);
                  case 5:
                  case "end":
                    return H.stop();
                }
            }, v);
          }));
          return function() {
            return g.apply(this, arguments);
          };
        }(), [s, h]);
      }, c.useBlockLayout = po, c.useColumnOrder = so, c.useExpanded = Ne, c.useFilters = Gt, c.useFlexLayout = Dt, c.useGetLatest = Mn, c.useGlobalFilter = ft, c.useGridLayout = go, c.useGroupBy = mt, c.useMountedLayoutEffect = Gn, c.usePagination = ht, c.useResizeColumns = Co, c.useRowSelect = oo, c.useRowState = wt, c.useSortBy = Zt, c.useTable = function(n) {
        for (var a = arguments.length, l = new Array(a > 1 ? a - 1 : 0), s = 1; s < a; s++)
          l[s - 1] = arguments[s];
        n = ye(n), l = [ue].concat(l);
        var h = d.useRef({}), g = Mn(h.current);
        Object.assign(g(), y({}, n, { plugins: l, hooks: jn() })), l.filter(Boolean).forEach(function(C) {
          C(g().hooks);
        });
        var v = Mn(g().hooks);
        g().getHooks = v, delete g().hooks, Object.assign(g(), mn(v().useOptions, ye(n)));
        var R = g(), E = R.data, I = R.columns, K = R.initialState, H = R.defaultColumn, x = R.getSubRows, L = R.getRowId, F = R.stateReducer, j = R.useControlledState, U = Mn(F), un = d.useCallback(function(C, S) {
          if (!S.type)
            throw console.info({ action: S }), new Error("Unknown Action 👆");
          return [].concat(v().stateReducers, Array.isArray(U()) ? U() : [U()]).reduce(function(D, N) {
            return N(D, S, C, g()) || D;
          }, C);
        }, [v, U, g]), Pn = d.useReducer(un, void 0, function() {
          return un(K, { type: w.init });
        }), ln = Pn[0], q = Pn[1], Rn = mn([].concat(v().useControlledState, [j]), ln, { instance: g() });
        Object.assign(g(), { state: Rn, dispatch: q });
        var en = d.useMemo(function() {
          return An(mn(v().columns, I, { instance: g() }));
        }, [v, g, I].concat(mn(v().columnsDeps, [], { instance: g() })));
        g().columns = en;
        var Sn = d.useMemo(function() {
          return mn(v().allColumns, le(en), { instance: g() }).map($n);
        }, [en, v, g].concat(mn(v().allColumnsDeps, [], { instance: g() })));
        g().allColumns = Sn;
        var xn = d.useMemo(function() {
          for (var C = [], S = [], D = {}, N = [].concat(Sn); N.length; ) {
            var P = N.shift();
            Be({ data: E, rows: C, flatRows: S, rowsById: D, column: P, getRowId: L, getSubRows: x, accessValueHooks: v().accessValue, getInstance: g });
          }
          return [C, S, D];
        }, [Sn, E, L, x, v, g]), dn = xn[0], hn = xn[1], zn = xn[2];
        Object.assign(g(), { rows: dn, initialRows: [].concat(dn), flatRows: hn, rowsById: zn }), Kn(v().useInstanceAfterData, g());
        var bn = d.useMemo(function() {
          return mn(v().visibleColumns, Sn, { instance: g() }).map(function(C) {
            return Hn(C, H);
          });
        }, [v, Sn, g, H].concat(mn(v().visibleColumnsDeps, [], { instance: g() })));
        Sn = d.useMemo(function() {
          var C = [].concat(bn);
          return Sn.forEach(function(S) {
            C.find(function(D) {
              return D.id === S.id;
            }) || C.push(S);
          }), C;
        }, [Sn, bn]), g().allColumns = Sn;
        var qn = d.useMemo(function() {
          return mn(v().headerGroups, oe(bn, H), g());
        }, [v, bn, H, g].concat(mn(v().headerGroupsDeps, [], { instance: g() })));
        g().headerGroups = qn;
        var e = d.useMemo(function() {
          return qn.length ? qn[0].headers : [];
        }, [qn]);
        g().headers = e, g().flatHeaders = qn.reduce(function(C, S) {
          return [].concat(C, S.headers);
        }, []), Kn(v().useInstanceBeforeDimensions, g());
        var t = bn.filter(function(C) {
          return C.isVisible;
        }).map(function(C) {
          return C.id;
        }).sort().join("_");
        bn = d.useMemo(function() {
          return bn.filter(function(C) {
            return C.isVisible;
          });
        }, [bn, t]), g().visibleColumns = bn;
        var u = me(e), r = u[0], p = u[1], m = u[2];
        return g().totalColumnsMinWidth = r, g().totalColumnsWidth = p, g().totalColumnsMaxWidth = m, Kn(v().useInstance, g()), [].concat(g().flatHeaders, g().allColumns).forEach(function(C) {
          C.render = Dn(g(), C), C.getHeaderProps = yn(v().getHeaderProps, { instance: g(), column: C }), C.getFooterProps = yn(v().getFooterProps, { instance: g(), column: C });
        }), g().headerGroups = d.useMemo(function() {
          return qn.filter(function(C, S) {
            return C.headers = C.headers.filter(function(D) {
              return D.headers ? function N(P) {
                return P.filter(function(z) {
                  return z.headers ? N(z.headers) : z.isVisible;
                }).length;
              }(D.headers) : D.isVisible;
            }), !!C.headers.length && (C.getHeaderGroupProps = yn(v().getHeaderGroupProps, { instance: g(), headerGroup: C, index: S }), C.getFooterGroupProps = yn(v().getFooterGroupProps, { instance: g(), headerGroup: C, index: S }), !0);
          });
        }, [qn, g, v]), g().footerGroups = [].concat(g().headerGroups).reverse(), g().prepareRow = d.useCallback(function(C) {
          C.getRowProps = yn(v().getRowProps, { instance: g(), row: C }), C.allCells = Sn.map(function(S) {
            var D = C.values[S.id], N = { column: S, row: C, value: D };
            return N.getCellProps = yn(v().getCellProps, { instance: g(), cell: N }), N.render = Dn(g(), S, { row: C, cell: N, value: D }), N;
          }), C.cells = bn.map(function(S) {
            return C.allCells.find(function(D) {
              return D.column.id === S.id;
            });
          }), Kn(v().prepareRow, C, { instance: g() });
        }, [v, g, Sn, bn]), g().getTableProps = yn(v().getTableProps, { instance: g() }), g().getTableBodyProps = yn(v().getTableBodyProps, { instance: g() }), Kn(v().useFinalInstance, g()), g();
      }, Object.defineProperty(c, "__esModule", { value: !0 });
    });
  }(bo, bo.exports)), bo.exports;
}
var Do = { exports: {} }, _r;
function Hu() {
  return _r || (_r = 1, function(o, f) {
    (function(c, d) {
      d(f, A);
    })(ra, function(c, d) {
      d = d && Object.prototype.hasOwnProperty.call(d, "default") ? d.default : d;
      function b(e, t, u, r, p, m, C) {
        try {
          var S = e[m](C), D = S.value;
        } catch (N) {
          u(N);
          return;
        }
        S.done ? t(D) : Promise.resolve(D).then(r, p);
      }
      function T(e) {
        return function() {
          var t = this, u = arguments;
          return new Promise(function(r, p) {
            var m = e.apply(t, u);
            function C(D) {
              b(m, r, p, C, S, "next", D);
            }
            function S(D) {
              b(m, r, p, C, S, "throw", D);
            }
            C(void 0);
          });
        };
      }
      function y() {
        return y = Object.assign || function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var u = arguments[t];
            for (var r in u)
              Object.prototype.hasOwnProperty.call(u, r) && (e[r] = u[r]);
          }
          return e;
        }, y.apply(this, arguments);
      }
      function O(e, t) {
        if (e == null)
          return {};
        var u = {}, r = Object.keys(e), p, m;
        for (m = 0; m < r.length; m++)
          p = r[m], !(t.indexOf(p) >= 0) && (u[p] = e[p]);
        return u;
      }
      function Nn(e, t) {
        if (typeof e != "object" || e === null)
          return e;
        var u = e[Symbol.toPrimitive];
        if (u !== void 0) {
          var r = u.call(e, t || "default");
          if (typeof r != "object")
            return r;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t === "string" ? String : Number)(e);
      }
      function w(e) {
        var t = Nn(e, "string");
        return typeof t == "symbol" ? t : String(t);
      }
      var Tn = "Renderer Error ☝️", M = {
        init: "init"
      }, an = function(t) {
        var u = t.value, r = u === void 0 ? "" : u;
        return r;
      }, gn = function() {
        return d.createElement(d.Fragment, null, " ");
      }, yn = {
        Cell: an,
        width: 150,
        minWidth: 0,
        maxWidth: Number.MAX_SAFE_INTEGER
      };
      function mn() {
        for (var e = arguments.length, t = new Array(e), u = 0; u < e; u++)
          t[u] = arguments[u];
        return t.reduce(function(r, p) {
          var m = p.style, C = p.className, S = O(p, ["style", "className"]);
          return r = y({}, r, {}, S), m && (r.style = r.style ? y({}, r.style || {}, {}, m || {}) : m), C && (r.className = r.className ? r.className + " " + C : C), r.className === "" && delete r.className, r;
        }, {});
      }
      function Kn(e, t, u) {
        return typeof t == "function" ? Kn({}, t(e, u)) : Array.isArray(t) ? mn.apply(void 0, [e].concat(t)) : mn(e, t);
      }
      var Cn = function(t, u) {
        return u === void 0 && (u = {}), function(r) {
          return r === void 0 && (r = {}), [].concat(t, [r]).reduce(function(p, m) {
            return Kn(p, m, y({}, u, {
              userProps: r
            }));
          }, {});
        };
      }, Fn = function(t, u, r, p) {
        return r === void 0 && (r = {}), t.reduce(function(m, C) {
          var S = C(m, r);
          if (!p && typeof S > "u")
            throw console.info(C), new Error("React Table: A reducer hook ☝️ just returned undefined! This is not allowed.");
          return S;
        }, u);
      }, Mn = function(t, u, r) {
        return r === void 0 && (r = {}), t.forEach(function(p) {
          var m = p(u, r);
          if (typeof m < "u")
            throw console.info(p, m), new Error("React Table: A loop-type hook ☝️ just returned a value! This is not allowed.");
        });
      };
      function Un(e, t, u, r) {
        if (r)
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
      function Gn(e, t) {
        return typeof e == "function" ? e(t) : e;
      }
      function Dn(e) {
        var t = d.useRef();
        return t.current = e, d.useCallback(function() {
          return t.current;
        }, []);
      }
      var Vn = typeof document < "u" ? d.useLayoutEffect : d.useEffect;
      function An(e, t) {
        var u = d.useRef(!1);
        Vn(function() {
          u.current && e(), u.current = !0;
        }, t);
      }
      function le(e, t) {
        t === void 0 && (t = 0);
        var u = d.useRef({}), r = Dn(e), p = Dn(t);
        return d.useCallback(
          /* @__PURE__ */ function() {
            var m = T(
              /* @__PURE__ */ regeneratorRuntime.mark(function C() {
                var S, D, N, P = arguments;
                return regeneratorRuntime.wrap(function(B) {
                  for (; ; )
                    switch (B.prev = B.next) {
                      case 0:
                        for (S = P.length, D = new Array(S), N = 0; N < S; N++)
                          D[N] = P[N];
                        return u.current.promise || (u.current.promise = new Promise(function(G, X) {
                          u.current.resolve = G, u.current.reject = X;
                        })), u.current.timeout && clearTimeout(u.current.timeout), u.current.timeout = setTimeout(
                          /* @__PURE__ */ T(
                            /* @__PURE__ */ regeneratorRuntime.mark(function G() {
                              return regeneratorRuntime.wrap(function(k) {
                                for (; ; )
                                  switch (k.prev = k.next) {
                                    case 0:
                                      return delete u.current.timeout, k.prev = 1, k.t0 = u.current, k.next = 5, r().apply(void 0, D);
                                    case 5:
                                      k.t1 = k.sent, k.t0.resolve.call(k.t0, k.t1), k.next = 12;
                                      break;
                                    case 9:
                                      k.prev = 9, k.t2 = k.catch(1), u.current.reject(k.t2);
                                    case 12:
                                      return k.prev = 12, delete u.current.promise, k.finish(12);
                                    case 15:
                                    case "end":
                                      return k.stop();
                                  }
                              }, G, null, [[1, 9, 12, 15]]);
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
          [r, p]
        );
      }
      function $n(e, t, u) {
        return u === void 0 && (u = {}), function(r, p) {
          p === void 0 && (p = {});
          var m = typeof r == "string" ? t[r] : r;
          if (typeof m > "u")
            throw console.info(t), new Error(Tn);
          return Hn(m, y({}, e, {
            column: t
          }, u, {}, p));
        };
      }
      function Hn(e, t) {
        return oe(e) ? d.createElement(e, t) : e;
      }
      function oe(e) {
        return se(e) || typeof e == "function" || ne(e);
      }
      function se(e) {
        return typeof e == "function" && function() {
          var t = Object.getPrototypeOf(e);
          return t.prototype && t.prototype.isReactComponent;
        }();
      }
      function ne(e) {
        return typeof e == "object" && typeof e.$$typeof == "symbol" && ["react.memo", "react.forward_ref"].includes(e.$$typeof.description);
      }
      function ee(e, t, u) {
        return u === void 0 && (u = 0), e.map(function(r) {
          return r = y({}, r, {
            parent: t,
            depth: u
          }), De(r), r.columns && (r.columns = ee(r.columns, r, u + 1)), r;
        });
      }
      function Ee(e) {
        return Ae(e, "columns");
      }
      function De(e) {
        var t = e.id, u = e.accessor, r = e.Header;
        if (typeof u == "string") {
          t = t || u;
          var p = u.split(".");
          u = function(C) {
            return Ie(C, p);
          };
        }
        if (!t && typeof r == "string" && r && (t = r), !t && e.columns)
          throw console.error(e), new Error('A column ID (or unique "Header" value) is required!');
        if (!t)
          throw console.error(e), new Error("A column ID (or string accessor) is required!");
        return Object.assign(e, {
          id: t,
          accessor: u
        }), e;
      }
      function ve(e, t) {
        if (!t)
          throw new Error();
        return Object.assign(e, y({
          // Make sure there is a fallback header, just in case
          Header: gn,
          Footer: gn
        }, yn, {}, t, {}, e)), Object.assign(e, {
          originalWidth: e.width
        }), e;
      }
      function Te(e, t, u) {
        u === void 0 && (u = function() {
          return {};
        });
        for (var r = [], p = e, m = 0, C = function() {
          return m++;
        }, S = function() {
          var N = {
            headers: []
          }, P = [], z = p.some(function(B) {
            return B.parent;
          });
          p.forEach(function(B) {
            var G = [].concat(P).reverse()[0], X;
            if (z) {
              if (B.parent)
                X = y({}, B.parent, {
                  originalId: B.parent.id,
                  id: B.parent.id + "_" + C(),
                  headers: [B]
                }, u(B));
              else {
                var k = B.id + "_placeholder";
                X = ve(y({
                  originalId: k,
                  id: B.id + "_placeholder_" + C(),
                  placeholderOf: B,
                  headers: [B]
                }, u(B)), t);
              }
              G && G.originalId === X.originalId ? G.headers.push(B) : P.push(X);
            }
            N.headers.push(B);
          }), r.push(N), p = P;
        }; p.length; )
          S();
        return r.reverse();
      }
      var ge = /* @__PURE__ */ new Map();
      function Ie(e, t, u) {
        if (!t)
          return e;
        var r = typeof t == "function" ? t : JSON.stringify(t), p = ge.get(r) || function() {
          var C = ue(t);
          return ge.set(r, C), C;
        }(), m;
        try {
          m = p.reduce(function(C, S) {
            return C[S];
          }, e);
        } catch {
        }
        return typeof m < "u" ? m : u;
      }
      function ce() {
        for (var e = arguments.length, t = new Array(e), u = 0; u < e; u++)
          t[u] = arguments[u];
        for (var r = 0; r < t.length; r += 1)
          if (typeof t[r] < "u")
            return t[r];
      }
      function Me(e) {
        if (typeof e == "function")
          return e;
      }
      function Ae(e, t) {
        var u = [], r = function p(m) {
          m.forEach(function(C) {
            C[t] ? p(C[t]) : u.push(C);
          });
        };
        return r(e), u;
      }
      function Re(e, t) {
        var u = t.manualExpandedKey, r = t.expanded, p = t.expandSubRows, m = p === void 0 ? !0 : p, C = [], S = function D(N, P) {
          P === void 0 && (P = !0), N.isExpanded = N.original && N.original[u] || r[N.id], N.canExpand = N.subRows && !!N.subRows.length, P && C.push(N), N.subRows && N.subRows.length && N.isExpanded && N.subRows.forEach(function(z) {
            return D(z, m);
          });
        };
        return e.forEach(function(D) {
          return S(D);
        }), C;
      }
      function Se(e, t, u) {
        return Me(e) || t[e] || u[e] || u.text;
      }
      function W(e, t, u) {
        return e ? e(t, u) : typeof t > "u";
      }
      function V() {
        throw new Error("React-Table: You have not called prepareRow(row) one or more rows you are attempting to render.");
      }
      var nn = null;
      function rn() {
        if (typeof nn == "boolean")
          return nn;
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
        return nn = e, nn;
      }
      var kn = /\[/g, jn = /\]/g;
      function ue(e) {
        return be(e).map(function(t) {
          return String(t).replace(".", "_");
        }).join(".").replace(kn, ".").replace(jn, "").split(".");
      }
      function be(e, t) {
        if (t === void 0 && (t = []), !Array.isArray(e))
          t.push(e);
        else
          for (var u = 0; u < e.length; u += 1)
            be(e[u], t);
        return t;
      }
      var ke = function(t) {
        return y({
          role: "table"
        }, t);
      }, Oe = function(t) {
        return y({
          role: "rowgroup"
        }, t);
      }, We = function(t, u) {
        var r = u.column;
        return y({
          key: "header_" + r.id,
          colSpan: r.totalVisibleHeaderCount,
          role: "columnheader"
        }, t);
      }, He = function(t, u) {
        var r = u.column;
        return y({
          key: "footer_" + r.id,
          colSpan: r.totalVisibleHeaderCount
        }, t);
      }, xe = function(t, u) {
        var r = u.index;
        return y({
          key: "headerGroup_" + r,
          role: "row"
        }, t);
      }, Jn = function(t, u) {
        var r = u.index;
        return y({
          key: "footerGroup_" + r
        }, t);
      }, Xn = function(t, u) {
        var r = u.row;
        return y({
          key: "row_" + r.id,
          role: "row"
        }, t);
      }, Z = function(t, u) {
        var r = u.cell;
        return y({
          key: "cell_" + r.row.id + "_" + r.column.id,
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
          getTableProps: [ke],
          getTableBodyProps: [Oe],
          getHeaderGroupProps: [xe],
          getFooterGroupProps: [Jn],
          getHeaderProps: [We],
          getFooterProps: [He],
          getRowProps: [Xn],
          getCellProps: [Z],
          useFinalInstance: []
        };
      }
      M.resetHiddenColumns = "resetHiddenColumns", M.toggleHideColumn = "toggleHideColumn", M.setHiddenColumns = "setHiddenColumns", M.toggleHideAllColumns = "toggleHideAllColumns";
      var re = function(t) {
        t.getToggleHiddenProps = [ye], t.getToggleHideAllColumnsProps = [me], t.stateReducers.push(Be), t.useInstanceBeforeDimensions.push(Ne), t.headerGroupsDeps.push(function(u, r) {
          var p = r.instance;
          return [].concat(u, [p.state.hiddenColumns]);
        }), t.useInstance.push(Ye);
      };
      re.pluginName = "useColumnVisibility";
      var ye = function(t, u) {
        var r = u.column;
        return [t, {
          onChange: function(m) {
            r.toggleHidden(!m.target.checked);
          },
          style: {
            cursor: "pointer"
          },
          checked: r.isVisible,
          title: "Toggle Column Visible"
        }];
      }, me = function(t, u) {
        var r = u.instance;
        return [t, {
          onChange: function(m) {
            r.toggleHideAllColumns(!m.target.checked);
          },
          style: {
            cursor: "pointer"
          },
          checked: !r.allColumnsHidden && !r.state.hiddenColumns.length,
          title: "Toggle All Columns Hidden",
          indeterminate: !r.allColumnsHidden && r.state.hiddenColumns.length
        }];
      };
      function Be(e, t, u, r) {
        if (t.type === M.init)
          return y({
            hiddenColumns: []
          }, e);
        if (t.type === M.resetHiddenColumns)
          return y({}, e, {
            hiddenColumns: r.initialState.hiddenColumns || []
          });
        if (t.type === M.toggleHideColumn) {
          var p = typeof t.value < "u" ? t.value : !e.hiddenColumns.includes(t.columnId), m = p ? [].concat(e.hiddenColumns, [t.columnId]) : e.hiddenColumns.filter(function(S) {
            return S !== t.columnId;
          });
          return y({}, e, {
            hiddenColumns: m
          });
        }
        if (t.type === M.setHiddenColumns)
          return y({}, e, {
            hiddenColumns: Gn(t.value, e.hiddenColumns)
          });
        if (t.type === M.toggleHideAllColumns) {
          var C = typeof t.value < "u" ? t.value : !e.hiddenColumns.length;
          return y({}, e, {
            hiddenColumns: C ? r.allColumns.map(function(S) {
              return S.id;
            }) : []
          });
        }
      }
      function Ne(e) {
        var t = e.headers, u = e.state.hiddenColumns, r = d.useRef(!1);
        r.current;
        var p = function C(S, D) {
          S.isVisible = D && !u.includes(S.id);
          var N = 0;
          return S.headers && S.headers.length ? S.headers.forEach(function(P) {
            return N += C(P, S.isVisible);
          }) : N = S.isVisible ? 1 : 0, S.totalVisibleHeaderCount = N, N;
        }, m = 0;
        t.forEach(function(C) {
          return m += p(C, !0);
        });
      }
      function Ye(e) {
        var t = e.columns, u = e.flatHeaders, r = e.dispatch, p = e.allColumns, m = e.getHooks, C = e.state.hiddenColumns, S = e.autoResetHiddenColumns, D = S === void 0 ? !0 : S, N = Dn(e), P = p.length === C.length, z = d.useCallback(function(Q, cn) {
          return r({
            type: M.toggleHideColumn,
            columnId: Q,
            value: cn
          });
        }, [r]), B = d.useCallback(function(Q) {
          return r({
            type: M.setHiddenColumns,
            value: Q
          });
        }, [r]), G = d.useCallback(function(Q) {
          return r({
            type: M.toggleHideAllColumns,
            value: Q
          });
        }, [r]), X = Cn(m().getToggleHideAllColumnsProps, {
          instance: N()
        });
        u.forEach(function(Q) {
          Q.toggleHidden = function(cn) {
            r({
              type: M.toggleHideColumn,
              columnId: Q.id,
              value: cn
            });
          }, Q.getToggleHiddenProps = Cn(m().getToggleHiddenProps, {
            instance: N(),
            column: Q
          });
        });
        var k = Dn(D);
        An(function() {
          k() && r({
            type: M.resetHiddenColumns
          });
        }, [r, t]), Object.assign(e, {
          allColumnsHidden: P,
          toggleHideColumn: z,
          setHiddenColumns: B,
          toggleHideAllColumns: G,
          getToggleHideAllColumnsProps: X
        });
      }
      var _e = {}, Ue = {}, Ge = function(t, u, r) {
        return t;
      }, Je = function(t, u) {
        return t.subRows || [];
      }, Ve = function(t, u, r) {
        return "" + (r ? [r.id, u].join(".") : u);
      }, Ke = function(t) {
        return t;
      };
      function Fe(e) {
        var t = e.initialState, u = t === void 0 ? _e : t, r = e.defaultColumn, p = r === void 0 ? Ue : r, m = e.getSubRows, C = m === void 0 ? Je : m, S = e.getRowId, D = S === void 0 ? Ve : S, N = e.stateReducer, P = N === void 0 ? Ge : N, z = e.useControlledState, B = z === void 0 ? Ke : z, G = O(e, ["initialState", "defaultColumn", "getSubRows", "getRowId", "stateReducer", "useControlledState"]);
        return y({}, G, {
          initialState: u,
          defaultColumn: p,
          getSubRows: C,
          getRowId: D,
          stateReducer: P,
          useControlledState: B
        });
      }
      var rt = function(t) {
        for (var u = arguments.length, r = new Array(u > 1 ? u - 1 : 0), p = 1; p < u; p++)
          r[p - 1] = arguments[p];
        t = Fe(t), r = [re].concat(r);
        var m = d.useRef({}), C = Dn(m.current);
        Object.assign(C(), y({}, t, {
          plugins: r,
          hooks: In()
        })), r.filter(Boolean).forEach(function(fn) {
          fn(C().hooks);
        });
        var S = Dn(C().hooks);
        C().getHooks = S, delete C().hooks, Object.assign(C(), Fn(S().useOptions, Fe(t)));
        var D = C(), N = D.data, P = D.columns, z = D.initialState, B = D.defaultColumn, G = D.getSubRows, X = D.getRowId, k = D.stateReducer, Q = D.useControlledState, cn = Dn(k), pn = d.useCallback(function(fn, Zn) {
          if (!Zn.type)
            throw console.info({
              action: Zn
            }), new Error("Unknown Action 👆");
          return [].concat(S().stateReducers, Array.isArray(cn()) ? cn() : [cn()]).reduce(function(ie, he) {
            return he(ie, Zn, fn, C()) || ie;
          }, fn);
        }, [S, cn, C]), _ = d.useReducer(pn, void 0, function() {
          return pn(z, {
            type: M.init
          });
        }), En = _[0], Wn = _[1], J = Fn([].concat(S().useControlledState, [Q]), En, {
          instance: C()
        });
        Object.assign(C(), {
          state: J,
          dispatch: Wn
        });
        var Y = d.useMemo(function() {
          return ee(Fn(S().columns, P, {
            instance: C()
          }));
        }, [S, C, P].concat(Fn(S().columnsDeps, [], {
          instance: C()
        })));
        C().columns = Y;
        var $ = d.useMemo(function() {
          return Fn(S().allColumns, Ee(Y), {
            instance: C()
          }).map(De);
        }, [Y, S, C].concat(Fn(S().allColumnsDeps, [], {
          instance: C()
        })));
        C().allColumns = $;
        var sn = d.useMemo(function() {
          for (var fn = [], Zn = [], ie = {}, he = [].concat($); he.length; ) {
            var de = he.shift();
            Ft({
              data: N,
              rows: fn,
              flatRows: Zn,
              rowsById: ie,
              column: de,
              getRowId: X,
              getSubRows: G,
              accessValueHooks: S().accessValue,
              getInstance: C
            });
          }
          return [fn, Zn, ie];
        }, [$, N, X, G, S, C]), Ln = sn[0], On = sn[1], Yn = sn[2];
        Object.assign(C(), {
          rows: Ln,
          initialRows: [].concat(Ln),
          flatRows: On,
          rowsById: Yn
          // materializedColumns,
        }), Mn(S().useInstanceAfterData, C());
        var tn = d.useMemo(function() {
          return Fn(S().visibleColumns, $, {
            instance: C()
          }).map(function(fn) {
            return ve(fn, B);
          });
        }, [S, $, C, B].concat(Fn(S().visibleColumnsDeps, [], {
          instance: C()
        })));
        $ = d.useMemo(function() {
          var fn = [].concat(tn);
          return $.forEach(function(Zn) {
            fn.find(function(ie) {
              return ie.id === Zn.id;
            }) || fn.push(Zn);
          }), fn;
        }, [$, tn]), C().allColumns = $;
        {
          var Ce = $.filter(function(fn, Zn) {
            return $.findIndex(function(ie) {
              return ie.id === fn.id;
            }) !== Zn;
          });
          if (Ce.length)
            throw console.info($), new Error('Duplicate columns were found with ids: "' + Ce.map(function(fn) {
              return fn.id;
            }).join(", ") + '" in the columns array above');
        }
        var Bn = d.useMemo(function() {
          return Fn(S().headerGroups, Te(tn, B), C());
        }, [S, tn, B, C].concat(Fn(S().headerGroupsDeps, [], {
          instance: C()
        })));
        C().headerGroups = Bn;
        var vn = d.useMemo(function() {
          return Bn.length ? Bn[0].headers : [];
        }, [Bn]);
        C().headers = vn, C().flatHeaders = Bn.reduce(function(fn, Zn) {
          return [].concat(fn, Zn.headers);
        }, []), Mn(S().useInstanceBeforeDimensions, C());
        var wn = tn.filter(function(fn) {
          return fn.isVisible;
        }).map(function(fn) {
          return fn.id;
        }).sort().join("_");
        tn = d.useMemo(
          function() {
            return tn.filter(function(fn) {
              return fn.isVisible;
            });
          },
          // eslint-disable-next-line react-hooks/exhaustive-deps
          [tn, wn]
        ), C().visibleColumns = tn;
        var _n = Ct(vn), fe = _n[0], et = _n[1], Et = _n[2];
        return C().totalColumnsMinWidth = fe, C().totalColumnsWidth = et, C().totalColumnsMaxWidth = Et, Mn(S().useInstance, C()), [].concat(C().flatHeaders, C().allColumns).forEach(function(fn) {
          fn.render = $n(C(), fn), fn.getHeaderProps = Cn(S().getHeaderProps, {
            instance: C(),
            column: fn
          }), fn.getFooterProps = Cn(S().getFooterProps, {
            instance: C(),
            column: fn
          });
        }), C().headerGroups = d.useMemo(function() {
          return Bn.filter(function(fn, Zn) {
            return fn.headers = fn.headers.filter(function(ie) {
              var he = function de(qe) {
                return qe.filter(function(pe) {
                  return pe.headers ? de(pe.headers) : pe.isVisible;
                }).length;
              };
              return ie.headers ? he(ie.headers) : ie.isVisible;
            }), fn.headers.length ? (fn.getHeaderGroupProps = Cn(S().getHeaderGroupProps, {
              instance: C(),
              headerGroup: fn,
              index: Zn
            }), fn.getFooterGroupProps = Cn(S().getFooterGroupProps, {
              instance: C(),
              headerGroup: fn,
              index: Zn
            }), !0) : !1;
          });
        }, [Bn, C, S]), C().footerGroups = [].concat(C().headerGroups).reverse(), C().prepareRow = d.useCallback(function(fn) {
          fn.getRowProps = Cn(S().getRowProps, {
            instance: C(),
            row: fn
          }), fn.allCells = $.map(function(Zn) {
            var ie = fn.values[Zn.id], he = {
              column: Zn,
              row: fn,
              value: ie
            };
            return he.getCellProps = Cn(S().getCellProps, {
              instance: C(),
              cell: he
            }), he.render = $n(C(), Zn, {
              row: fn,
              cell: he,
              value: ie
            }), he;
          }), fn.cells = tn.map(function(Zn) {
            return fn.allCells.find(function(ie) {
              return ie.column.id === Zn.id;
            });
          }), Mn(S().prepareRow, fn, {
            instance: C()
          });
        }, [S, C, $, tn]), C().getTableProps = Cn(S().getTableProps, {
          instance: C()
        }), C().getTableBodyProps = Cn(S().getTableBodyProps, {
          instance: C()
        }), Mn(S().useFinalInstance, C()), C();
      };
      function Ct(e, t) {
        t === void 0 && (t = 0);
        var u = 0, r = 0, p = 0, m = 0;
        return e.forEach(function(C) {
          var S = C.headers;
          if (C.totalLeft = t, S && S.length) {
            var D = Ct(S, t), N = D[0], P = D[1], z = D[2], B = D[3];
            C.totalMinWidth = N, C.totalWidth = P, C.totalMaxWidth = z, C.totalFlexWidth = B;
          } else
            C.totalMinWidth = C.minWidth, C.totalWidth = Math.min(Math.max(C.minWidth, C.width), C.maxWidth), C.totalMaxWidth = C.maxWidth, C.totalFlexWidth = C.canResize ? C.totalWidth : 0;
          C.isVisible && (t += C.totalWidth, u += C.totalMinWidth, r += C.totalWidth, p += C.totalMaxWidth, m += C.totalFlexWidth);
        }), [u, r, p, m];
      }
      function Ft(e) {
        var t = e.data, u = e.rows, r = e.flatRows, p = e.rowsById, m = e.column, C = e.getRowId, S = e.getSubRows, D = e.accessValueHooks, N = e.getInstance, P = function z(B, G, X, k, Q) {
          X === void 0 && (X = 0);
          var cn = B, pn = C(B, G, k), _ = p[pn];
          if (_)
            _.subRows && _.originalSubRows.forEach(function(Wn, J) {
              return z(Wn, J, X + 1, _);
            });
          else if (_ = {
            id: pn,
            original: cn,
            index: G,
            depth: X,
            cells: [{}]
            // This is a dummy cell
          }, _.cells.map = V, _.cells.filter = V, _.cells.forEach = V, _.cells[0].getCellProps = V, _.values = {}, Q.push(_), r.push(_), p[pn] = _, _.originalSubRows = S(B, G), _.originalSubRows) {
            var En = [];
            _.originalSubRows.forEach(function(Wn, J) {
              return z(Wn, J, X + 1, _, En);
            }), _.subRows = En;
          }
          m.accessor && (_.values[m.id] = m.accessor(B, G, _, Q, t)), _.values[m.id] = Fn(D, _.values[m.id], {
            row: _,
            column: m,
            instance: N()
          }, !0);
        };
        t.forEach(function(z, B) {
          return P(z, B, 0, void 0, u);
        });
      }
      M.resetExpanded = "resetExpanded", M.toggleRowExpanded = "toggleRowExpanded", M.toggleAllRowsExpanded = "toggleAllRowsExpanded";
      var dt = function(t) {
        t.getToggleAllRowsExpandedProps = [Wt], t.getToggleRowExpandedProps = [Ht], t.stateReducers.push(xt), t.useInstance.push($e), t.prepareRow.push(Gt);
      };
      dt.pluginName = "useExpanded";
      var Wt = function(t, u) {
        var r = u.instance;
        return [t, {
          onClick: function(m) {
            r.toggleAllRowsExpanded();
          },
          style: {
            cursor: "pointer"
          },
          title: "Toggle All Rows Expanded"
        }];
      }, Ht = function(t, u) {
        var r = u.row;
        return [t, {
          onClick: function() {
            r.toggleRowExpanded();
          },
          style: {
            cursor: "pointer"
          },
          title: "Toggle Row Expanded"
        }];
      };
      function xt(e, t, u, r) {
        if (t.type === M.init)
          return y({
            expanded: {}
          }, e);
        if (t.type === M.resetExpanded)
          return y({}, e, {
            expanded: r.initialState.expanded || {}
          });
        if (t.type === M.toggleAllRowsExpanded) {
          var p = t.value, m = r.rowsById, C = Object.keys(m).length === Object.keys(e.expanded).length, S = typeof p < "u" ? p : !C;
          if (S) {
            var D = {};
            return Object.keys(m).forEach(function(Q) {
              D[Q] = !0;
            }), y({}, e, {
              expanded: D
            });
          }
          return y({}, e, {
            expanded: {}
          });
        }
        if (t.type === M.toggleRowExpanded) {
          var N = t.id, P = t.value, z = e.expanded[N], B = typeof P < "u" ? P : !z;
          if (!z && B) {
            var G;
            return y({}, e, {
              expanded: y({}, e.expanded, (G = {}, G[N] = !0, G))
            });
          } else if (z && !B) {
            var X = e.expanded;
            X[N];
            var k = O(X, [N].map(w));
            return y({}, e, {
              expanded: k
            });
          } else
            return e;
        }
      }
      function $e(e) {
        var t = e.data, u = e.rows, r = e.rowsById, p = e.manualExpandedKey, m = p === void 0 ? "expanded" : p, C = e.paginateExpandedRows, S = C === void 0 ? !0 : C, D = e.expandSubRows, N = D === void 0 ? !0 : D, P = e.autoResetExpanded, z = P === void 0 ? !0 : P, B = e.getHooks, G = e.plugins, X = e.state.expanded, k = e.dispatch;
        Un(G, ["useSortBy", "useGroupBy", "usePivotColumns", "useGlobalFilter"], "useExpanded");
        var Q = Dn(z), cn = !!(Object.keys(r).length && Object.keys(X).length);
        cn && Object.keys(r).some(function($) {
          return !X[$];
        }) && (cn = !1), An(function() {
          Q() && k({
            type: M.resetExpanded
          });
        }, [k, t]);
        var pn = d.useCallback(function($, sn) {
          k({
            type: M.toggleRowExpanded,
            id: $,
            value: sn
          });
        }, [k]), _ = d.useCallback(function($) {
          return k({
            type: M.toggleAllRowsExpanded,
            value: $
          });
        }, [k]), En = d.useMemo(function() {
          return S ? Re(u, {
            manualExpandedKey: m,
            expanded: X,
            expandSubRows: N
          }) : u;
        }, [S, u, m, X, N]), Wn = d.useMemo(function() {
          return ko(X);
        }, [X]), J = Dn(e), Y = Cn(B().getToggleAllRowsExpandedProps, {
          instance: J()
        });
        Object.assign(e, {
          preExpandedRows: u,
          expandedRows: En,
          rows: En,
          expandedDepth: Wn,
          isAllRowsExpanded: cn,
          toggleRowExpanded: pn,
          toggleAllRowsExpanded: _,
          getToggleAllRowsExpandedProps: Y
        });
      }
      function Gt(e, t) {
        var u = t.instance.getHooks, r = t.instance;
        e.toggleRowExpanded = function(p) {
          return r.toggleRowExpanded(e.id, p);
        }, e.getToggleRowExpandedProps = Cn(u().getToggleRowExpandedProps, {
          instance: r,
          row: e
        });
      }
      function ko(e) {
        var t = 0;
        return Object.keys(e).forEach(function(u) {
          var r = u.split(".");
          t = Math.max(t, r.length);
        }), t;
      }
      var Vt = function(t, u, r) {
        return t = t.filter(function(p) {
          return u.some(function(m) {
            var C = p.values[m];
            return String(C).toLowerCase().includes(String(r).toLowerCase());
          });
        }), t;
      };
      Vt.autoRemove = function(e) {
        return !e;
      };
      var ft = function(t, u, r) {
        return t.filter(function(p) {
          return u.some(function(m) {
            var C = p.values[m];
            return C !== void 0 ? String(C).toLowerCase() === String(r).toLowerCase() : !0;
          });
        });
      };
      ft.autoRemove = function(e) {
        return !e;
      };
      var Kt = function(t, u, r) {
        return t.filter(function(p) {
          return u.some(function(m) {
            var C = p.values[m];
            return C !== void 0 ? String(C) === String(r) : !0;
          });
        });
      };
      Kt.autoRemove = function(e) {
        return !e;
      };
      var qt = function(t, u, r) {
        return t.filter(function(p) {
          return u.some(function(m) {
            var C = p.values[m];
            return C.includes(r);
          });
        });
      };
      qt.autoRemove = function(e) {
        return !e || !e.length;
      };
      var pt = function(t, u, r) {
        return t.filter(function(p) {
          return u.some(function(m) {
            var C = p.values[m];
            return C && C.length && r.every(function(S) {
              return C.includes(S);
            });
          });
        });
      };
      pt.autoRemove = function(e) {
        return !e || !e.length;
      };
      var gt = function(t, u, r) {
        return t.filter(function(p) {
          return u.some(function(m) {
            var C = p.values[m];
            return C && C.length && r.some(function(S) {
              return C.includes(S);
            });
          });
        });
      };
      gt.autoRemove = function(e) {
        return !e || !e.length;
      };
      var zt = function(t, u, r) {
        return t.filter(function(p) {
          return u.some(function(m) {
            var C = p.values[m];
            return r.includes(C);
          });
        });
      };
      zt.autoRemove = function(e) {
        return !e || !e.length;
      };
      var Xt = function(t, u, r) {
        return t.filter(function(p) {
          return u.some(function(m) {
            var C = p.values[m];
            return C === r;
          });
        });
      };
      Xt.autoRemove = function(e) {
        return typeof e > "u";
      };
      var mt = function(t, u, r) {
        return t.filter(function(p) {
          return u.some(function(m) {
            var C = p.values[m];
            return C == r;
          });
        });
      };
      mt.autoRemove = function(e) {
        return e == null;
      };
      var jt = function(t, u, r) {
        var p = r || [], m = p[0], C = p[1];
        if (m = typeof m == "number" ? m : -1 / 0, C = typeof C == "number" ? C : 1 / 0, m > C) {
          var S = m;
          m = C, C = S;
        }
        return t.filter(function(D) {
          return u.some(function(N) {
            var P = D.values[N];
            return P >= m && P <= C;
          });
        });
      };
      jt.autoRemove = function(e) {
        return !e || typeof e[0] != "number" && typeof e[1] != "number";
      };
      var Ze = /* @__PURE__ */ Object.freeze({
        __proto__: null,
        text: Vt,
        exactText: ft,
        exactTextCase: Kt,
        includes: qt,
        includesAll: pt,
        includesSome: gt,
        includesValue: zt,
        exact: Xt,
        equals: mt,
        between: jt
      });
      M.resetFilters = "resetFilters", M.setFilter = "setFilter", M.setAllFilters = "setAllFilters";
      var Yt = function(t) {
        t.stateReducers.push(Oo), t.useInstance.push(Bo);
      };
      Yt.pluginName = "useFilters";
      function Oo(e, t, u, r) {
        if (t.type === M.init)
          return y({
            filters: []
          }, e);
        if (t.type === M.resetFilters)
          return y({}, e, {
            filters: r.initialState.filters || []
          });
        if (t.type === M.setFilter) {
          var p = t.columnId, m = t.filterValue, C = r.allColumns, S = r.filterTypes, D = C.find(function(k) {
            return k.id === p;
          });
          if (!D)
            throw new Error("React-Table: Could not find a column with id: " + p);
          var N = Se(D.filter, S || {}, Ze), P = e.filters.find(function(k) {
            return k.id === p;
          }), z = Gn(m, P && P.value);
          return W(N.autoRemove, z, D) ? y({}, e, {
            filters: e.filters.filter(function(k) {
              return k.id !== p;
            })
          }) : P ? y({}, e, {
            filters: e.filters.map(function(k) {
              return k.id === p ? {
                id: p,
                value: z
              } : k;
            })
          }) : y({}, e, {
            filters: [].concat(e.filters, [{
              id: p,
              value: z
            }])
          });
        }
        if (t.type === M.setAllFilters) {
          var B = t.filters, G = r.allColumns, X = r.filterTypes;
          return y({}, e, {
            // Filter out undefined values
            filters: Gn(B, e.filters).filter(function(k) {
              var Q = G.find(function(pn) {
                return pn.id === k.id;
              }), cn = Se(Q.filter, X || {}, Ze);
              return !W(cn.autoRemove, k.value, Q);
            })
          });
        }
      }
      function Bo(e) {
        var t = e.data, u = e.rows, r = e.flatRows, p = e.rowsById, m = e.allColumns, C = e.filterTypes, S = e.manualFilters, D = e.defaultCanFilter, N = D === void 0 ? !1 : D, P = e.disableFilters, z = e.state.filters, B = e.dispatch, G = e.autoResetFilters, X = G === void 0 ? !0 : G, k = d.useCallback(function(J, Y) {
          B({
            type: M.setFilter,
            columnId: J,
            filterValue: Y
          });
        }, [B]), Q = d.useCallback(function(J) {
          B({
            type: M.setAllFilters,
            filters: J
          });
        }, [B]);
        m.forEach(function(J) {
          var Y = J.id, $ = J.accessor, sn = J.defaultCanFilter, Ln = J.disableFilters;
          J.canFilter = $ ? ce(Ln === !0 ? !1 : void 0, P === !0 ? !1 : void 0, !0) : ce(sn, N, !1), J.setFilter = function(Yn) {
            return k(J.id, Yn);
          };
          var On = z.find(function(Yn) {
            return Yn.id === Y;
          });
          J.filterValue = On && On.value;
        });
        var cn = d.useMemo(function() {
          if (S || !z.length)
            return [u, r, p];
          var J = [], Y = {}, $ = function sn(Ln, On) {
            On === void 0 && (On = 0);
            var Yn = Ln;
            return Yn = z.reduce(function(tn, Ce) {
              var Bn = Ce.id, vn = Ce.value, wn = m.find(function(fe) {
                return fe.id === Bn;
              });
              if (!wn)
                return tn;
              On === 0 && (wn.preFilteredRows = tn);
              var _n = Se(wn.filter, C || {}, Ze);
              return _n ? (wn.filteredRows = _n(tn, [Bn], vn), wn.filteredRows) : (console.warn("Could not find a valid 'column.filter' for column with the ID: " + wn.id + "."), tn);
            }, Ln), Yn.forEach(function(tn) {
              J.push(tn), Y[tn.id] = tn, tn.subRows && (tn.subRows = tn.subRows && tn.subRows.length > 0 ? sn(tn.subRows, On + 1) : tn.subRows);
            }), Yn;
          };
          return [$(u), J, Y];
        }, [S, z, u, r, p, m, C]), pn = cn[0], _ = cn[1], En = cn[2];
        d.useMemo(function() {
          var J = m.filter(function(Y) {
            return !z.find(function($) {
              return $.id === Y.id;
            });
          });
          J.forEach(function(Y) {
            Y.preFilteredRows = pn, Y.filteredRows = pn;
          });
        }, [pn, z, m]);
        var Wn = Dn(X);
        An(function() {
          Wn() && B({
            type: M.resetFilters
          });
        }, [B, S ? null : t]), Object.assign(e, {
          preFilteredRows: u,
          preFilteredFlatRows: r,
          preFilteredRowsById: p,
          filteredRows: pn,
          filteredFlatRows: _,
          filteredRowsById: En,
          rows: pn,
          flatRows: _,
          rowsById: En,
          setFilter: k,
          setAllFilters: Q
        });
      }
      M.resetGlobalFilter = "resetGlobalFilter", M.setGlobalFilter = "setGlobalFilter";
      var _t = function(t) {
        t.stateReducers.push(Ut), t.useInstance.push(Jt);
      };
      _t.pluginName = "useGlobalFilter";
      function Ut(e, t, u, r) {
        if (t.type === M.resetGlobalFilter)
          return y({}, e, {
            globalFilter: r.initialState.globalFilter || void 0
          });
        if (t.type === M.setGlobalFilter) {
          var p = t.filterValue, m = r.userFilterTypes, C = Se(r.globalFilter, m || {}, Ze), S = Gn(p, e.globalFilter);
          if (W(C.autoRemove, S)) {
            e.globalFilter;
            var D = O(e, ["globalFilter"]);
            return D;
          }
          return y({}, e, {
            globalFilter: S
          });
        }
      }
      function Jt(e) {
        var t = e.data, u = e.rows, r = e.flatRows, p = e.rowsById, m = e.allColumns, C = e.filterTypes, S = e.globalFilter, D = e.manualGlobalFilter, N = e.state.globalFilter, P = e.dispatch, z = e.autoResetGlobalFilter, B = z === void 0 ? !0 : z, G = e.disableGlobalFilter, X = d.useCallback(function(En) {
          P({
            type: M.setGlobalFilter,
            filterValue: En
          });
        }, [P]), k = d.useMemo(function() {
          if (D || typeof N > "u")
            return [u, r, p];
          var En = [], Wn = {}, J = Se(S, C || {}, Ze);
          if (!J)
            return console.warn("Could not find a valid 'globalFilter' option."), u;
          m.forEach(function(sn) {
            var Ln = sn.disableGlobalFilter;
            sn.canFilter = ce(Ln === !0 ? !1 : void 0, G === !0 ? !1 : void 0, !0);
          });
          var Y = m.filter(function(sn) {
            return sn.canFilter === !0;
          }), $ = function sn(Ln) {
            return Ln = J(Ln, Y.map(function(On) {
              return On.id;
            }), N), Ln.forEach(function(On) {
              En.push(On), Wn[On.id] = On, On.subRows = On.subRows && On.subRows.length ? sn(On.subRows) : On.subRows;
            }), Ln;
          };
          return [$(u), En, Wn];
        }, [D, N, S, C, m, u, r, p, G]), Q = k[0], cn = k[1], pn = k[2], _ = Dn(B);
        An(function() {
          _() && P({
            type: M.resetGlobalFilter
          });
        }, [P, D ? null : t]), Object.assign(e, {
          preGlobalFilteredRows: u,
          preGlobalFilteredFlatRows: r,
          preGlobalFilteredRowsById: p,
          globalFilteredRows: Q,
          globalFilteredFlatRows: cn,
          globalFilteredRowsById: pn,
          rows: Q,
          flatRows: cn,
          rowsById: pn,
          setGlobalFilter: X,
          disableGlobalFilter: G
        });
      }
      function at(e, t) {
        return t.reduce(function(u, r) {
          return u + (typeof r == "number" ? r : 0);
        }, 0);
      }
      function Qe(e) {
        var t = e[0] || 0;
        return e.forEach(function(u) {
          typeof u == "number" && (t = Math.min(t, u));
        }), t;
      }
      function $t(e) {
        var t = e[0] || 0;
        return e.forEach(function(u) {
          typeof u == "number" && (t = Math.max(t, u));
        }), t;
      }
      function Fo(e) {
        var t = e[0] || 0, u = e[0] || 0;
        return e.forEach(function(r) {
          typeof r == "number" && (t = Math.min(t, r), u = Math.max(u, r));
        }), t + ".." + u;
      }
      function Zt(e) {
        return at(null, e) / e.length;
      }
      function Wo(e) {
        if (!e.length)
          return null;
        var t = Math.floor(e.length / 2), u = [].concat(e).sort(function(r, p) {
          return r - p;
        });
        return e.length % 2 !== 0 ? u[t] : (u[t - 1] + u[t]) / 2;
      }
      function Ho(e) {
        return Array.from(new Set(e).values());
      }
      function xo(e) {
        return new Set(e).size;
      }
      function Qt(e) {
        return e.length;
      }
      var ht = /* @__PURE__ */ Object.freeze({
        __proto__: null,
        sum: at,
        min: Qe,
        max: $t,
        minMax: Fo,
        average: Zt,
        median: Wo,
        unique: Ho,
        uniqueCount: xo,
        count: Qt
      }), Go = [], Vo = {};
      M.resetGroupBy = "resetGroupBy", M.setGroupBy = "setGroupBy", M.toggleGroupBy = "toggleGroupBy";
      var vt = function(t) {
        t.getGroupByToggleProps = [no], t.stateReducers.push(Ko), t.visibleColumnsDeps.push(function(u, r) {
          var p = r.instance;
          return [].concat(u, [p.state.groupBy]);
        }), t.visibleColumns.push(qo), t.useInstance.push(Xo), t.prepareRow.push(jo);
      };
      vt.pluginName = "useGroupBy";
      var no = function(t, u) {
        var r = u.header;
        return [t, {
          onClick: r.canGroupBy ? function(p) {
            p.persist(), r.toggleGroupBy();
          } : void 0,
          style: {
            cursor: r.canGroupBy ? "pointer" : void 0
          },
          title: "Toggle GroupBy"
        }];
      };
      function Ko(e, t, u, r) {
        if (t.type === M.init)
          return y({
            groupBy: []
          }, e);
        if (t.type === M.resetGroupBy)
          return y({}, e, {
            groupBy: r.initialState.groupBy || []
          });
        if (t.type === M.setGroupBy) {
          var p = t.value;
          return y({}, e, {
            groupBy: p
          });
        }
        if (t.type === M.toggleGroupBy) {
          var m = t.columnId, C = t.value, S = typeof C < "u" ? C : !e.groupBy.includes(m);
          return S ? y({}, e, {
            groupBy: [].concat(e.groupBy, [m])
          }) : y({}, e, {
            groupBy: e.groupBy.filter(function(D) {
              return D !== m;
            })
          });
        }
      }
      function qo(e, t) {
        var u = t.instance.state.groupBy, r = u.map(function(m) {
          return e.find(function(C) {
            return C.id === m;
          });
        }).filter(Boolean), p = e.filter(function(m) {
          return !u.includes(m.id);
        });
        return e = [].concat(r, p), e.forEach(function(m) {
          m.isGrouped = u.includes(m.id), m.groupedIndex = u.indexOf(m.id);
        }), e;
      }
      var zo = {};
      function Xo(e) {
        var t = e.data, u = e.rows, r = e.flatRows, p = e.rowsById, m = e.allColumns, C = e.flatHeaders, S = e.groupByFn, D = S === void 0 ? eo : S, N = e.manualGroupBy, P = e.aggregations, z = P === void 0 ? zo : P, B = e.plugins, G = e.state.groupBy, X = e.dispatch, k = e.autoResetGroupBy, Q = k === void 0 ? !0 : k, cn = e.disableGroupBy, pn = e.defaultCanGroupBy, _ = e.getHooks;
        Un(B, ["useColumnOrder", "useFilters"], "useGroupBy");
        var En = Dn(e);
        m.forEach(function(vn) {
          var wn = vn.accessor, _n = vn.defaultGroupBy, fe = vn.disableGroupBy;
          vn.canGroupBy = wn ? ce(vn.canGroupBy, fe === !0 ? !1 : void 0, cn === !0 ? !1 : void 0, !0) : ce(vn.canGroupBy, _n, pn, !1), vn.canGroupBy && (vn.toggleGroupBy = function() {
            return e.toggleGroupBy(vn.id);
          }), vn.Aggregated = vn.Aggregated || vn.Cell;
        });
        var Wn = d.useCallback(function(vn, wn) {
          X({
            type: M.toggleGroupBy,
            columnId: vn,
            value: wn
          });
        }, [X]), J = d.useCallback(function(vn) {
          X({
            type: M.setGroupBy,
            value: vn
          });
        }, [X]);
        C.forEach(function(vn) {
          vn.getGroupByToggleProps = Cn(_().getGroupByToggleProps, {
            instance: En(),
            header: vn
          });
        });
        var Y = d.useMemo(function() {
          if (N || !G.length)
            return [u, r, p, Go, Vo, r, p];
          var vn = G.filter(function(de) {
            return m.find(function(qe) {
              return qe.id === de;
            });
          }), wn = function(qe, pe, wo) {
            var ze = {};
            return m.forEach(function(ae) {
              if (vn.includes(ae.id)) {
                ze[ae.id] = pe[0] ? pe[0].values[ae.id] : null;
                return;
              }
              var Mo = typeof ae.aggregate == "function" ? ae.aggregate : z[ae.aggregate] || ht[ae.aggregate];
              if (Mo) {
                var it = pe.map(function(tt) {
                  return tt.values[ae.id];
                }), cr = qe.map(function(tt) {
                  var Xe = tt.values[ae.id];
                  if (!wo && ae.aggregateValue) {
                    var je = typeof ae.aggregateValue == "function" ? ae.aggregateValue : z[ae.aggregateValue] || ht[ae.aggregateValue];
                    if (!je)
                      throw console.info({
                        column: ae
                      }), new Error("React Table: Invalid column.aggregateValue option for column listed above");
                    Xe = je(Xe, tt, ae);
                  }
                  return Xe;
                });
                ze[ae.id] = Mo(cr, it);
              } else {
                if (ae.aggregate)
                  throw console.info({
                    column: ae
                  }), new Error("React Table: Invalid column.aggregate option for column listed above");
                ze[ae.id] = null;
              }
            }), ze;
          }, _n = [], fe = {}, et = [], Et = {}, fn = [], Zn = {}, ie = function de(qe, pe, wo) {
            if (pe === void 0 && (pe = 0), pe === vn.length)
              return qe.map(function(it) {
                return y({}, it, {
                  depth: pe
                });
              });
            var ze = vn[pe], ae = D(qe, ze), Mo = Object.entries(ae).map(function(it, cr) {
              var tt = it[0], Xe = it[1], je = ze + ":" + tt;
              je = wo ? wo + ">" + je : je;
              var Rr = de(Xe, pe + 1, je), Nr = pe ? Ae(Xe, "leafRows") : Xe, ga = wn(Nr, Xe, pe), ma = {
                id: je,
                isGrouped: !0,
                groupByID: ze,
                groupByVal: tt,
                values: ga,
                subRows: Rr,
                leafRows: Nr,
                depth: pe,
                index: cr
              };
              return Rr.forEach(function(Pe) {
                _n.push(Pe), fe[Pe.id] = Pe, Pe.isGrouped ? (et.push(Pe), Et[Pe.id] = Pe) : (fn.push(Pe), Zn[Pe.id] = Pe);
              }), ma;
            });
            return Mo;
          }, he = ie(u);
          return he.forEach(function(de) {
            _n.push(de), fe[de.id] = de, de.isGrouped ? (et.push(de), Et[de.id] = de) : (fn.push(de), Zn[de.id] = de);
          }), [he, _n, fe, et, Et, fn, Zn];
        }, [N, G, u, r, p, m, z, D]), $ = Y[0], sn = Y[1], Ln = Y[2], On = Y[3], Yn = Y[4], tn = Y[5], Ce = Y[6], Bn = Dn(Q);
        An(function() {
          Bn() && X({
            type: M.resetGroupBy
          });
        }, [X, N ? null : t]), Object.assign(e, {
          preGroupedRows: u,
          preGroupedFlatRow: r,
          preGroupedRowsById: p,
          groupedRows: $,
          groupedFlatRows: sn,
          groupedRowsById: Ln,
          onlyGroupedFlatRows: On,
          onlyGroupedRowsById: Yn,
          nonGroupedFlatRows: tn,
          nonGroupedRowsById: Ce,
          rows: $,
          flatRows: sn,
          rowsById: Ln,
          toggleGroupBy: Wn,
          setGroupBy: J
        });
      }
      function jo(e) {
        e.allCells.forEach(function(t) {
          var u;
          t.isGrouped = t.column.isGrouped && t.column.id === e.groupByID, t.isPlaceholder = !t.isGrouped && t.column.isGrouped, t.isAggregated = !t.isGrouped && !t.isPlaceholder && ((u = e.subRows) == null ? void 0 : u.length);
        });
      }
      function eo(e, t) {
        return e.reduce(function(u, r, p) {
          var m = "" + r.values[t];
          return u[m] = Array.isArray(u[m]) ? u[m] : [], u[m].push(r), u;
        }, {});
      }
      var to = /([0-9]+)/gm, Yo = function(t, u, r) {
        var p = nt(t, u, r), m = p[0], C = p[1];
        for (m = ro(m), C = ro(C), m = m.split(to).filter(Boolean), C = C.split(to).filter(Boolean); m.length && C.length; ) {
          var S = m.shift(), D = C.shift(), N = parseInt(S, 10), P = parseInt(D, 10), z = [N, P].sort();
          if (isNaN(z[0])) {
            if (S > D)
              return 1;
            if (D > S)
              return -1;
            continue;
          }
          if (isNaN(z[1]))
            return isNaN(N) ? -1 : 1;
          if (N > P)
            return 1;
          if (P > N)
            return -1;
        }
        return m.length - C.length;
      };
      function _o(e, t, u) {
        var r = nt(e, t, u), p = r[0], m = r[1];
        return p = p.getTime(), m = m.getTime(), St(p, m);
      }
      function Uo(e, t, u) {
        var r = nt(e, t, u), p = r[0], m = r[1];
        return St(p, m);
      }
      function Jo(e, t, u) {
        var r = nt(e, t, u), p = r[0], m = r[1];
        for (p = p.split("").filter(Boolean), m = m.split("").filter(Boolean); p.length && m.length; ) {
          var C = p.shift(), S = m.shift(), D = C.toLowerCase(), N = S.toLowerCase();
          if (D > N)
            return 1;
          if (N > D)
            return -1;
          if (C > S)
            return 1;
          if (S > C)
            return -1;
        }
        return p.length - m.length;
      }
      function oo(e, t, u) {
        var r = nt(e, t, u), p = r[0], m = r[1], C = /[^0-9.]/gi;
        return p = Number(String(p).replace(C, "")), m = Number(String(m).replace(C, "")), St(p, m);
      }
      function St(e, t) {
        return e === t ? 0 : e > t ? 1 : -1;
      }
      function nt(e, t, u) {
        return [e.values[u], t.values[u]];
      }
      function ro(e) {
        return typeof e == "number" ? isNaN(e) || e === 1 / 0 || e === -1 / 0 ? "" : String(e) : typeof e == "string" ? e : "";
      }
      var $o = /* @__PURE__ */ Object.freeze({
        __proto__: null,
        alphanumeric: Yo,
        datetime: _o,
        basic: Uo,
        string: Jo,
        number: oo
      });
      M.resetSortBy = "resetSortBy", M.setSortBy = "setSortBy", M.toggleSortBy = "toggleSortBy", M.clearSortBy = "clearSortBy", yn.sortType = "alphanumeric", yn.sortDescFirst = !1;
      var ao = function(t) {
        t.getSortByToggleProps = [Zo], t.stateReducers.push(uo), t.useInstance.push(io);
      };
      ao.pluginName = "useSortBy";
      var Zo = function(t, u) {
        var r = u.instance, p = u.column, m = r.isMultiSortEvent, C = m === void 0 ? function(S) {
          return S.shiftKey;
        } : m;
        return [t, {
          onClick: p.canSort ? function(S) {
            S.persist(), p.toggleSortBy(void 0, !r.disableMultiSort && C(S));
          } : void 0,
          style: {
            cursor: p.canSort ? "pointer" : void 0
          },
          title: p.canSort ? "Toggle SortBy" : void 0
        }];
      };
      function uo(e, t, u, r) {
        if (t.type === M.init)
          return y({
            sortBy: []
          }, e);
        if (t.type === M.resetSortBy)
          return y({}, e, {
            sortBy: r.initialState.sortBy || []
          });
        if (t.type === M.clearSortBy) {
          var p = e.sortBy, m = p.filter(function($) {
            return $.id !== t.columnId;
          });
          return y({}, e, {
            sortBy: m
          });
        }
        if (t.type === M.setSortBy) {
          var C = t.sortBy;
          return y({}, e, {
            sortBy: C
          });
        }
        if (t.type === M.toggleSortBy) {
          var S = t.columnId, D = t.desc, N = t.multi, P = r.allColumns, z = r.disableMultiSort, B = r.disableSortRemove, G = r.disableMultiRemove, X = r.maxMultiSortColCount, k = X === void 0 ? Number.MAX_SAFE_INTEGER : X, Q = e.sortBy, cn = P.find(function($) {
            return $.id === S;
          }), pn = cn.sortDescFirst, _ = Q.find(function($) {
            return $.id === S;
          }), En = Q.findIndex(function($) {
            return $.id === S;
          }), Wn = typeof D < "u" && D !== null, J = [], Y;
          return !z && N ? _ ? Y = "toggle" : Y = "add" : En !== Q.length - 1 || Q.length !== 1 ? Y = "replace" : _ ? Y = "toggle" : Y = "replace", Y === "toggle" && // Must be toggling
          !B && // If disableSortRemove, disable in general
          !Wn && // Must not be setting desc
          (!N || !G) && // If multi, don't allow if disableMultiRemove
          (_ && // Finally, detect if it should indeed be removed
          _.desc && !pn || !_.desc && pn) && (Y = "remove"), Y === "replace" ? J = [{
            id: S,
            desc: Wn ? D : pn
          }] : Y === "add" ? (J = [].concat(Q, [{
            id: S,
            desc: Wn ? D : pn
          }]), J.splice(0, J.length - k)) : Y === "toggle" ? J = Q.map(function($) {
            return $.id === S ? y({}, $, {
              desc: Wn ? D : !_.desc
            }) : $;
          }) : Y === "remove" && (J = Q.filter(function($) {
            return $.id !== S;
          })), y({}, e, {
            sortBy: J
          });
        }
      }
      function io(e) {
        var t = e.data, u = e.rows, r = e.flatRows, p = e.allColumns, m = e.orderByFn, C = m === void 0 ? wt : m, S = e.sortTypes, D = e.manualSortBy, N = e.defaultCanSort, P = e.disableSortBy, z = e.flatHeaders, B = e.state.sortBy, G = e.dispatch, X = e.plugins, k = e.getHooks, Q = e.autoResetSortBy, cn = Q === void 0 ? !0 : Q;
        Un(X, ["useFilters", "useGlobalFilter", "useGroupBy", "usePivotColumns"], "useSortBy");
        var pn = d.useCallback(function(sn) {
          G({
            type: M.setSortBy,
            sortBy: sn
          });
        }, [G]), _ = d.useCallback(function(sn, Ln, On) {
          G({
            type: M.toggleSortBy,
            columnId: sn,
            desc: Ln,
            multi: On
          });
        }, [G]), En = Dn(e);
        z.forEach(function(sn) {
          var Ln = sn.accessor, On = sn.canSort, Yn = sn.disableSortBy, tn = sn.id, Ce = Ln ? ce(Yn === !0 ? !1 : void 0, P === !0 ? !1 : void 0, !0) : ce(N, On, !1);
          sn.canSort = Ce, sn.canSort && (sn.toggleSortBy = function(vn, wn) {
            return _(sn.id, vn, wn);
          }, sn.clearSortBy = function() {
            G({
              type: M.clearSortBy,
              columnId: sn.id
            });
          }), sn.getSortByToggleProps = Cn(k().getSortByToggleProps, {
            instance: En(),
            column: sn
          });
          var Bn = B.find(function(vn) {
            return vn.id === tn;
          });
          sn.isSorted = !!Bn, sn.sortedIndex = B.findIndex(function(vn) {
            return vn.id === tn;
          }), sn.isSortedDesc = sn.isSorted ? Bn.desc : void 0;
        });
        var Wn = d.useMemo(function() {
          if (D || !B.length)
            return [u, r];
          var sn = [], Ln = B.filter(function(Yn) {
            return p.find(function(tn) {
              return tn.id === Yn.id;
            });
          }), On = function Yn(tn) {
            var Ce = C(
              tn,
              Ln.map(function(Bn) {
                var vn = p.find(function(fe) {
                  return fe.id === Bn.id;
                });
                if (!vn)
                  throw new Error("React-Table: Could not find a column with id: " + Bn.id + " while sorting");
                var wn = vn.sortType, _n = Me(wn) || (S || {})[wn] || $o[wn];
                if (!_n)
                  throw new Error("React-Table: Could not find a valid sortType of '" + wn + "' for column '" + Bn.id + "'.");
                return function(fe, et) {
                  return _n(fe, et, Bn.id, Bn.desc);
                };
              }),
              // Map the directions
              Ln.map(function(Bn) {
                var vn = p.find(function(wn) {
                  return wn.id === Bn.id;
                });
                return vn && vn.sortInverted ? Bn.desc : !Bn.desc;
              })
            );
            return Ce.forEach(function(Bn) {
              sn.push(Bn), !(!Bn.subRows || Bn.subRows.length === 0) && (Bn.subRows = Yn(Bn.subRows));
            }), Ce;
          };
          return [On(u), sn];
        }, [D, B, u, r, p, C, S]), J = Wn[0], Y = Wn[1], $ = Dn(cn);
        An(function() {
          $() && G({
            type: M.resetSortBy
          });
        }, [D ? null : t]), Object.assign(e, {
          preSortedRows: u,
          preSortedFlatRows: r,
          sortedRows: J,
          sortedFlatRows: Y,
          rows: J,
          flatRows: Y,
          setSortBy: pn,
          toggleSortBy: _
        });
      }
      function wt(e, t, u) {
        return [].concat(e).sort(function(r, p) {
          for (var m = 0; m < t.length; m += 1) {
            var C = t[m], S = u[m] === !1 || u[m] === "desc", D = C(r, p);
            if (D !== 0)
              return S ? -D : D;
          }
          return u[0] ? r.index - p.index : p.index - r.index;
        });
      }
      var Qo = "usePagination";
      M.resetPage = "resetPage", M.gotoPage = "gotoPage", M.setPageSize = "setPageSize";
      var lo = function(t) {
        t.stateReducers.push(nr), t.useInstance.push(so);
      };
      lo.pluginName = Qo;
      function nr(e, t, u, r) {
        if (t.type === M.init)
          return y({
            pageSize: 10,
            pageIndex: 0
          }, e);
        if (t.type === M.resetPage)
          return y({}, e, {
            pageIndex: r.initialState.pageIndex || 0
          });
        if (t.type === M.gotoPage) {
          var p = r.pageCount, m = r.page, C = Gn(t.pageIndex, e.pageIndex), S = !1;
          return C > e.pageIndex ? S = p === -1 ? m.length >= e.pageSize : C < p : C < e.pageIndex && (S = C > -1), S ? y({}, e, {
            pageIndex: C
          }) : e;
        }
        if (t.type === M.setPageSize) {
          var D = t.pageSize, N = e.pageSize * e.pageIndex, P = Math.floor(N / D);
          return y({}, e, {
            pageIndex: P,
            pageSize: D
          });
        }
      }
      function so(e) {
        var t = e.rows, u = e.autoResetPage, r = u === void 0 ? !0 : u, p = e.manualExpandedKey, m = p === void 0 ? "expanded" : p, C = e.plugins, S = e.pageCount, D = e.paginateExpandedRows, N = D === void 0 ? !0 : D, P = e.expandSubRows, z = P === void 0 ? !0 : P, B = e.state, G = B.pageSize, X = B.pageIndex, k = B.expanded, Q = B.globalFilter, cn = B.filters, pn = B.groupBy, _ = B.sortBy, En = e.dispatch, Wn = e.data, J = e.manualPagination;
        Un(C, ["useGlobalFilter", "useFilters", "useGroupBy", "useSortBy", "useExpanded"], "usePagination");
        var Y = Dn(r);
        An(function() {
          Y() && En({
            type: M.resetPage
          });
        }, [En, J ? null : Wn, Q, cn, pn, _]);
        var $ = J ? S : Math.ceil(t.length / G), sn = d.useMemo(function() {
          return $ > 0 ? [].concat(new Array($)).fill(null).map(function(wn, _n) {
            return _n;
          }) : [];
        }, [$]), Ln = d.useMemo(function() {
          var wn;
          if (J)
            wn = t;
          else {
            var _n = G * X, fe = _n + G;
            wn = t.slice(_n, fe);
          }
          return N ? wn : Re(wn, {
            manualExpandedKey: m,
            expanded: k,
            expandSubRows: z
          });
        }, [z, k, m, J, X, G, N, t]), On = X > 0, Yn = $ === -1 ? Ln.length >= G : X < $ - 1, tn = d.useCallback(function(wn) {
          En({
            type: M.gotoPage,
            pageIndex: wn
          });
        }, [En]), Ce = d.useCallback(function() {
          return tn(function(wn) {
            return wn - 1;
          });
        }, [tn]), Bn = d.useCallback(function() {
          return tn(function(wn) {
            return wn + 1;
          });
        }, [tn]), vn = d.useCallback(function(wn) {
          En({
            type: M.setPageSize,
            pageSize: wn
          });
        }, [En]);
        Object.assign(e, {
          pageOptions: sn,
          pageCount: $,
          page: Ln,
          canPreviousPage: On,
          canNextPage: Yn,
          gotoPage: tn,
          previousPage: Ce,
          nextPage: Bn,
          setPageSize: vn
        });
      }
      M.resetPivot = "resetPivot", M.togglePivot = "togglePivot";
      var co = function(t) {
        t.getPivotToggleProps = [er], t.stateReducers.push(Co), t.useInstanceAfterData.push(tr), t.allColumns.push(or), t.accessValue.push(rr), t.materializedColumns.push(ar), t.materializedColumnsDeps.push(Mt), t.visibleColumns.push(fo), t.visibleColumnsDeps.push(ut), t.useInstance.push(At), t.prepareRow.push(bt);
      };
      co.pluginName = "usePivotColumns";
      var yo = [], er = function(t, u) {
        var r = u.header;
        return [t, {
          onClick: r.canPivot ? function(p) {
            p.persist(), r.togglePivot();
          } : void 0,
          style: {
            cursor: r.canPivot ? "pointer" : void 0
          },
          title: "Toggle Pivot"
        }];
      };
      function Co(e, t, u, r) {
        if (t.type === M.init)
          return y({
            pivotColumns: yo
          }, e);
        if (t.type === M.resetPivot)
          return y({}, e, {
            pivotColumns: r.initialState.pivotColumns || yo
          });
        if (t.type === M.togglePivot) {
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
      function tr(e) {
        e.allColumns.forEach(function(t) {
          t.isPivotSource = e.state.pivotColumns.includes(t.id);
        });
      }
      function or(e, t) {
        var u = t.instance;
        return e.forEach(function(r) {
          r.isPivotSource = u.state.pivotColumns.includes(r.id), r.uniqueValues = /* @__PURE__ */ new Set();
        }), e;
      }
      function rr(e, t) {
        var u = t.column;
        return u.uniqueValues && typeof e < "u" && u.uniqueValues.add(e), e;
      }
      function ar(e, t) {
        var u = t.instance, r = u.allColumns, p = u.state;
        if (!p.pivotColumns.length || !p.groupBy || !p.groupBy.length)
          return e;
        var m = p.pivotColumns.map(function(N) {
          return r.find(function(P) {
            return P.id === N;
          });
        }).filter(Boolean), C = r.filter(function(N) {
          return !N.isPivotSource && !p.groupBy.includes(N.id) && !p.pivotColumns.includes(N.id);
        }), S = function N(P, z, B) {
          P === void 0 && (P = 0), B === void 0 && (B = []);
          var G = m[P];
          if (!G)
            return C.map(function(k) {
              return y({}, k, {
                canPivot: !1,
                isPivoted: !0,
                parent: z,
                depth: P,
                id: "" + (z ? z.id + "." + k.id : k.id),
                accessor: function(cn, pn, _) {
                  if (B.every(function(En) {
                    return En(_);
                  }))
                    return _.values[k.id];
                }
              });
            });
          var X = Array.from(G.uniqueValues).sort();
          return X.map(function(k) {
            var Q = y({}, G, {
              Header: G.PivotHeader || typeof G.header == "string" ? G.Header + ": " + k : k,
              isPivotGroup: !0,
              parent: z,
              depth: P,
              id: z ? z.id + "." + G.id + "." + k : G.id + "." + k,
              pivotValue: k
            });
            return Q.columns = N(P + 1, Q, [].concat(B, [function(cn) {
              return cn.values[G.id] === k;
            }])), Q;
          });
        }, D = Ee(S());
        return [].concat(e, D);
      }
      function Mt(e, t) {
        var u = t.instance.state, r = u.pivotColumns, p = u.groupBy;
        return [].concat(e, [r, p]);
      }
      function fo(e, t) {
        var u = t.instance.state;
        return e = e.filter(function(r) {
          return !r.isPivotSource;
        }), u.pivotColumns.length && u.groupBy && u.groupBy.length && (e = e.filter(function(r) {
          return r.isGrouped || r.isPivoted;
        })), e;
      }
      function ut(e, t) {
        var u = t.instance;
        return [].concat(e, [u.state.pivotColumns, u.state.groupBy]);
      }
      function At(e) {
        var t = e.columns, u = e.allColumns, r = e.flatHeaders, p = e.getHooks, m = e.plugins, C = e.dispatch, S = e.autoResetPivot, D = S === void 0 ? !0 : S, N = e.manaulPivot, P = e.disablePivot, z = e.defaultCanPivot;
        Un(m, ["useGroupBy"], "usePivotColumns");
        var B = Dn(e);
        u.forEach(function(k) {
          var Q = k.accessor, cn = k.defaultPivot, pn = k.disablePivot;
          k.canPivot = Q ? ce(k.canPivot, pn === !0 ? !1 : void 0, P === !0 ? !1 : void 0, !0) : ce(k.canPivot, cn, z, !1), k.canPivot && (k.togglePivot = function() {
            return e.togglePivot(k.id);
          }), k.Aggregated = k.Aggregated || k.Cell;
        });
        var G = function(Q, cn) {
          C({
            type: M.togglePivot,
            columnId: Q,
            value: cn
          });
        };
        r.forEach(function(k) {
          k.getPivotToggleProps = Cn(p().getPivotToggleProps, {
            instance: B(),
            header: k
          });
        });
        var X = Dn(D);
        An(function() {
          X() && C({
            type: M.resetPivot
          });
        }, [C, N ? null : t]), Object.assign(e, {
          togglePivot: G
        });
      }
      function bt(e) {
        e.allCells.forEach(function(t) {
          t.isPivoted = t.column.isPivoted;
        });
      }
      var po = "useRowSelect";
      M.resetSelectedRows = "resetSelectedRows", M.toggleAllRowsSelected = "toggleAllRowsSelected", M.toggleRowSelected = "toggleRowSelected", M.toggleAllPageRowsSelected = "toggleAllPageRowsSelected";
      var Dt = function(t) {
        t.getToggleRowSelectedProps = [ur], t.getToggleAllRowsSelectedProps = [Rt], t.getToggleAllPageRowsSelectedProps = [ir], t.stateReducers.push(lr), t.useInstance.push(sr), t.prepareRow.push(go);
      };
      Dt.pluginName = po;
      var ur = function(t, u) {
        var r = u.instance, p = u.row, m = r.manualRowSelectedKey, C = m === void 0 ? "isSelected" : m, S = !1;
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
      }, Rt = function(t, u) {
        var r = u.instance;
        return [t, {
          onChange: function(m) {
            r.toggleAllRowsSelected(m.target.checked);
          },
          style: {
            cursor: "pointer"
          },
          checked: r.isAllRowsSelected,
          title: "Toggle All Rows Selected",
          indeterminate: !!(!r.isAllRowsSelected && Object.keys(r.state.selectedRowIds).length)
        }];
      }, ir = function(t, u) {
        var r = u.instance;
        return [t, {
          onChange: function(m) {
            r.toggleAllPageRowsSelected(m.target.checked);
          },
          style: {
            cursor: "pointer"
          },
          checked: r.isAllPageRowsSelected,
          title: "Toggle All Current Page Rows Selected",
          indeterminate: !!(!r.isAllPageRowsSelected && r.page.some(function(p) {
            var m = p.id;
            return r.state.selectedRowIds[m];
          }))
        }];
      };
      function lr(e, t, u, r) {
        if (t.type === M.init)
          return y({
            selectedRowIds: {}
          }, e);
        if (t.type === M.resetSelectedRows)
          return y({}, e, {
            selectedRowIds: r.initialState.selectedRowIds || {}
          });
        if (t.type === M.toggleAllRowsSelected) {
          var p = t.value, m = r.isAllRowsSelected, C = r.rowsById, S = r.nonGroupedRowsById, D = S === void 0 ? C : S, N = typeof p < "u" ? p : !m, P = Object.assign({}, e.selectedRowIds);
          return N ? Object.keys(D).forEach(function(Bn) {
            P[Bn] = !0;
          }) : Object.keys(D).forEach(function(Bn) {
            delete P[Bn];
          }), y({}, e, {
            selectedRowIds: P
          });
        }
        if (t.type === M.toggleRowSelected) {
          var z = t.id, B = t.value, G = r.rowsById, X = r.selectSubRows, k = X === void 0 ? !0 : X, Q = r.getSubRows, cn = e.selectedRowIds[z], pn = typeof B < "u" ? B : !cn;
          if (cn === pn)
            return e;
          var _ = y({}, e.selectedRowIds), En = function Bn(vn) {
            var wn = G[vn];
            if (wn && (wn.isGrouped || (pn ? _[vn] = !0 : delete _[vn]), k && Q(wn)))
              return Q(wn).forEach(function(_n) {
                return Bn(_n.id);
              });
          };
          return En(z), y({}, e, {
            selectedRowIds: _
          });
        }
        if (t.type === M.toggleAllPageRowsSelected) {
          var Wn = t.value, J = r.page, Y = r.rowsById, $ = r.selectSubRows, sn = $ === void 0 ? !0 : $, Ln = r.isAllPageRowsSelected, On = r.getSubRows, Yn = typeof Wn < "u" ? Wn : !Ln, tn = y({}, e.selectedRowIds), Ce = function Bn(vn) {
            var wn = Y[vn];
            if (wn.isGrouped || (Yn ? tn[vn] = !0 : delete tn[vn]), sn && On(wn))
              return On(wn).forEach(function(_n) {
                return Bn(_n.id);
              });
          };
          return J.forEach(function(Bn) {
            return Ce(Bn.id);
          }), y({}, e, {
            selectedRowIds: tn
          });
        }
        return e;
      }
      function sr(e) {
        var t = e.data, u = e.rows, r = e.getHooks, p = e.plugins, m = e.rowsById, C = e.nonGroupedRowsById, S = C === void 0 ? m : C, D = e.autoResetSelectedRows, N = D === void 0 ? !0 : D, P = e.state.selectedRowIds, z = e.selectSubRows, B = z === void 0 ? !0 : z, G = e.dispatch, X = e.page, k = e.getSubRows;
        Un(p, ["useFilters", "useGroupBy", "useSortBy", "useExpanded", "usePagination"], "useRowSelect");
        var Q = d.useMemo(function() {
          var Ln = [];
          return u.forEach(function(On) {
            var Yn = B ? mo(On, P, k) : !!P[On.id];
            On.isSelected = !!Yn, On.isSomeSelected = Yn === null, Yn && Ln.push(On);
          }), Ln;
        }, [u, B, P, k]), cn = !!(Object.keys(S).length && Object.keys(P).length), pn = cn;
        cn && Object.keys(S).some(function(Ln) {
          return !P[Ln];
        }) && (cn = !1), cn || X && X.length && X.some(function(Ln) {
          var On = Ln.id;
          return !P[On];
        }) && (pn = !1);
        var _ = Dn(N);
        An(function() {
          _() && G({
            type: M.resetSelectedRows
          });
        }, [G, t]);
        var En = d.useCallback(function(Ln) {
          return G({
            type: M.toggleAllRowsSelected,
            value: Ln
          });
        }, [G]), Wn = d.useCallback(function(Ln) {
          return G({
            type: M.toggleAllPageRowsSelected,
            value: Ln
          });
        }, [G]), J = d.useCallback(function(Ln, On) {
          return G({
            type: M.toggleRowSelected,
            id: Ln,
            value: On
          });
        }, [G]), Y = Dn(e), $ = Cn(r().getToggleAllRowsSelectedProps, {
          instance: Y()
        }), sn = Cn(r().getToggleAllPageRowsSelectedProps, {
          instance: Y()
        });
        Object.assign(e, {
          selectedFlatRows: Q,
          isAllRowsSelected: cn,
          isAllPageRowsSelected: pn,
          toggleRowSelected: J,
          toggleAllRowsSelected: En,
          getToggleAllRowsSelectedProps: $,
          getToggleAllPageRowsSelectedProps: sn,
          toggleAllPageRowsSelected: Wn
        });
      }
      function go(e, t) {
        var u = t.instance;
        e.toggleRowSelected = function(r) {
          return u.toggleRowSelected(e.id, r);
        }, e.getToggleRowSelectedProps = Cn(u.getHooks().getToggleRowSelectedProps, {
          instance: u,
          row: e
        });
      }
      function mo(e, t, u) {
        if (t[e.id])
          return !0;
        var r = u(e);
        if (r && r.length) {
          var p = !0, m = !1;
          return r.forEach(function(C) {
            m && !p || (mo(C, t, u) ? m = !0 : p = !1);
          }), p ? !0 : m ? null : !1;
        }
        return !1;
      }
      var ho = function(t) {
        return {};
      }, vo = function(t) {
        return {};
      };
      M.setRowState = "setRowState", M.setCellState = "setCellState", M.resetRowState = "resetRowState";
      var So = function(t) {
        t.stateReducers.push(Nt), t.useInstance.push(n), t.prepareRow.push(a);
      };
      So.pluginName = "useRowState";
      function Nt(e, t, u, r) {
        var p = r.initialRowStateAccessor, m = p === void 0 ? ho : p, C = r.initialCellStateAccessor, S = C === void 0 ? vo : C, D = r.rowsById;
        if (t.type === M.init)
          return y({
            rowState: {}
          }, e);
        if (t.type === M.resetRowState)
          return y({}, e, {
            rowState: r.initialState.rowState || {}
          });
        if (t.type === M.setRowState) {
          var N, P = t.rowId, z = t.value, B = typeof e.rowState[P] < "u" ? e.rowState[P] : m(D[P]);
          return y({}, e, {
            rowState: y({}, e.rowState, (N = {}, N[P] = Gn(z, B), N))
          });
        }
        if (t.type === M.setCellState) {
          var G, X, k, Q, cn, pn = t.rowId, _ = t.columnId, En = t.value, Wn = typeof e.rowState[pn] < "u" ? e.rowState[pn] : m(D[pn]), J = typeof (Wn == null || (G = Wn.cellState) == null ? void 0 : G[_]) < "u" ? Wn.cellState[_] : S((X = D[pn]) == null || (k = X.cells) == null ? void 0 : k.find(function(Y) {
            return Y.column.id === _;
          }));
          return y({}, e, {
            rowState: y({}, e.rowState, (cn = {}, cn[pn] = y({}, Wn, {
              cellState: y({}, Wn.cellState || {}, (Q = {}, Q[_] = Gn(En, J), Q))
            }), cn))
          });
        }
      }
      function n(e) {
        var t = e.autoResetRowState, u = t === void 0 ? !0 : t, r = e.data, p = e.dispatch, m = d.useCallback(function(D, N) {
          return p({
            type: M.setRowState,
            rowId: D,
            value: N
          });
        }, [p]), C = d.useCallback(function(D, N, P) {
          return p({
            type: M.setCellState,
            rowId: D,
            columnId: N,
            value: P
          });
        }, [p]), S = Dn(u);
        An(function() {
          S() && p({
            type: M.resetRowState
          });
        }, [r]), Object.assign(e, {
          setRowState: m,
          setCellState: C
        });
      }
      function a(e, t) {
        var u = t.instance, r = u.initialRowStateAccessor, p = r === void 0 ? ho : r, m = u.initialCellStateAccessor, C = m === void 0 ? vo : m, S = u.state.rowState;
        e && (e.state = typeof S[e.id] < "u" ? S[e.id] : p(e), e.setState = function(D) {
          return u.setRowState(e.id, D);
        }, e.cells.forEach(function(D) {
          e.state.cellState || (e.state.cellState = {}), D.state = typeof e.state.cellState[D.column.id] < "u" ? e.state.cellState[D.column.id] : C(D), D.setState = function(N) {
            return u.setCellState(e.id, D.column.id, N);
          };
        }));
      }
      M.resetColumnOrder = "resetColumnOrder", M.setColumnOrder = "setColumnOrder";
      var l = function(t) {
        t.stateReducers.push(s), t.visibleColumnsDeps.push(function(u, r) {
          var p = r.instance;
          return [].concat(u, [p.state.columnOrder]);
        }), t.visibleColumns.push(h), t.useInstance.push(g);
      };
      l.pluginName = "useColumnOrder";
      function s(e, t, u, r) {
        if (t.type === M.init)
          return y({
            columnOrder: []
          }, e);
        if (t.type === M.resetColumnOrder)
          return y({}, e, {
            columnOrder: r.initialState.columnOrder || []
          });
        if (t.type === M.setColumnOrder)
          return y({}, e, {
            columnOrder: Gn(t.columnOrder, e.columnOrder)
          });
      }
      function h(e, t) {
        var u = t.instance.state.columnOrder;
        if (!u || !u.length)
          return e;
        for (var r = [].concat(u), p = [].concat(e), m = [], C = function() {
          var D = r.shift(), N = p.findIndex(function(P) {
            return P.id === D;
          });
          N > -1 && m.push(p.splice(N, 1)[0]);
        }; p.length && r.length; )
          C();
        return [].concat(m, p);
      }
      function g(e) {
        var t = e.dispatch;
        e.setColumnOrder = d.useCallback(function(u) {
          return t({
            type: M.setColumnOrder,
            columnOrder: u
          });
        }, [t]);
      }
      yn.canResize = !0, M.columnStartResizing = "columnStartResizing", M.columnResizing = "columnResizing", M.columnDoneResizing = "columnDoneResizing", M.resetResize = "resetResize";
      var v = function(t) {
        t.getResizerProps = [R], t.getHeaderProps.push({
          style: {
            position: "relative"
          }
        }), t.stateReducers.push(E), t.useInstance.push(K), t.useInstanceBeforeDimensions.push(I);
      }, R = function(t, u) {
        var r = u.instance, p = u.header, m = r.dispatch, C = function(D, N) {
          var P = !1;
          if (D.type === "touchstart") {
            if (D.touches && D.touches.length > 1)
              return;
            P = !0;
          }
          var z = H(N), B = z.map(function(J) {
            return [J.id, J.totalWidth];
          }), G = P ? Math.round(D.touches[0].clientX) : D.clientX, X, k, Q = function() {
            window.cancelAnimationFrame(X), X = null, m({
              type: M.columnDoneResizing
            });
          }, cn = function() {
            window.cancelAnimationFrame(X), X = null, m({
              type: M.columnResizing,
              clientX: k
            });
          }, pn = function(Y) {
            k = Y, X || (X = window.requestAnimationFrame(cn));
          }, _ = {
            mouse: {
              moveEvent: "mousemove",
              moveHandler: function(Y) {
                return pn(Y.clientX);
              },
              upEvent: "mouseup",
              upHandler: function(Y) {
                document.removeEventListener("mousemove", _.mouse.moveHandler), document.removeEventListener("mouseup", _.mouse.upHandler), Q();
              }
            },
            touch: {
              moveEvent: "touchmove",
              moveHandler: function(Y) {
                return Y.cancelable && (Y.preventDefault(), Y.stopPropagation()), pn(Y.touches[0].clientX), !1;
              },
              upEvent: "touchend",
              upHandler: function(Y) {
                document.removeEventListener(_.touch.moveEvent, _.touch.moveHandler), document.removeEventListener(_.touch.upEvent, _.touch.moveHandler), Q();
              }
            }
          }, En = P ? _.touch : _.mouse, Wn = rn() ? {
            passive: !1
          } : !1;
          document.addEventListener(En.moveEvent, En.moveHandler, Wn), document.addEventListener(En.upEvent, En.upHandler, Wn), m({
            type: M.columnStartResizing,
            columnId: N.id,
            columnWidth: N.totalWidth,
            headerIdWidths: B,
            clientX: G
          });
        };
        return [t, {
          onMouseDown: function(D) {
            return D.persist() || C(D, p);
          },
          onTouchStart: function(D) {
            return D.persist() || C(D, p);
          },
          style: {
            cursor: "col-resize"
          },
          draggable: !1,
          role: "separator"
        }];
      };
      v.pluginName = "useResizeColumns";
      function E(e, t) {
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
          var u = t.clientX, r = t.columnId, p = t.columnWidth, m = t.headerIdWidths;
          return y({}, e, {
            columnResizing: y({}, e.columnResizing, {
              startX: u,
              headerIdWidths: m,
              columnWidth: p,
              isResizingColumn: r
            })
          });
        }
        if (t.type === M.columnResizing) {
          var C = t.clientX, S = e.columnResizing, D = S.startX, N = S.columnWidth, P = S.headerIdWidths, z = P === void 0 ? [] : P, B = C - D, G = B / N, X = {};
          return z.forEach(function(k) {
            var Q = k[0], cn = k[1];
            X[Q] = Math.max(cn + cn * G, 0);
          }), y({}, e, {
            columnResizing: y({}, e.columnResizing, {
              columnWidths: y({}, e.columnResizing.columnWidths, {}, X)
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
        var u = t.flatHeaders, r = t.disableResizing, p = t.getHooks, m = t.state.columnResizing, C = Dn(t);
        u.forEach(function(S) {
          var D = ce(S.disableResizing === !0 ? !1 : void 0, r === !0 ? !1 : void 0, !0);
          S.canResize = D, S.width = m.columnWidths[S.id] || S.originalWidth || S.width, S.isResizing = m.isResizingColumn === S.id, D && (S.getResizerProps = Cn(p().getResizerProps, {
            instance: C(),
            header: S
          }));
        });
      };
      function K(e) {
        var t = e.plugins, u = e.dispatch, r = e.autoResetResize, p = r === void 0 ? !0 : r, m = e.columns;
        Un(t, ["useAbsoluteLayout"], "useResizeColumns");
        var C = Dn(p);
        An(function() {
          C() && u({
            type: M.resetResize
          });
        }, [m]);
        var S = d.useCallback(function() {
          return u({
            type: M.resetResize
          });
        }, [u]);
        Object.assign(e, {
          resetResizing: S
        });
      }
      function H(e) {
        var t = [], u = function r(p) {
          p.columns && p.columns.length && p.columns.map(r), t.push(p);
        };
        return u(e), t;
      }
      var x = {
        position: "absolute",
        top: 0
      }, L = function(t) {
        t.getTableBodyProps.push(F), t.getRowProps.push(F), t.getHeaderGroupProps.push(F), t.getFooterGroupProps.push(F), t.getHeaderProps.push(function(u, r) {
          var p = r.column;
          return [u, {
            style: y({}, x, {
              left: p.totalLeft + "px",
              width: p.totalWidth + "px"
            })
          }];
        }), t.getCellProps.push(function(u, r) {
          var p = r.cell;
          return [u, {
            style: y({}, x, {
              left: p.column.totalLeft + "px",
              width: p.column.totalWidth + "px"
            })
          }];
        }), t.getFooterProps.push(function(u, r) {
          var p = r.column;
          return [u, {
            style: y({}, x, {
              left: p.totalLeft + "px",
              width: p.totalWidth + "px"
            })
          }];
        });
      };
      L.pluginName = "useAbsoluteLayout";
      var F = function(t, u) {
        var r = u.instance;
        return [t, {
          style: {
            position: "relative",
            width: r.totalColumnsWidth + "px"
          }
        }];
      }, j = {
        display: "inline-block",
        boxSizing: "border-box"
      }, U = function(t, u) {
        var r = u.instance;
        return [t, {
          style: {
            display: "flex",
            width: r.totalColumnsWidth + "px"
          }
        }];
      }, un = function(t) {
        t.getRowProps.push(U), t.getHeaderGroupProps.push(U), t.getFooterGroupProps.push(U), t.getHeaderProps.push(function(u, r) {
          var p = r.column;
          return [u, {
            style: y({}, j, {
              width: p.totalWidth + "px"
            })
          }];
        }), t.getCellProps.push(function(u, r) {
          var p = r.cell;
          return [u, {
            style: y({}, j, {
              width: p.column.totalWidth + "px"
            })
          }];
        }), t.getFooterProps.push(function(u, r) {
          var p = r.column;
          return [u, {
            style: y({}, j, {
              width: p.totalWidth + "px"
            })
          }];
        });
      };
      un.pluginName = "useBlockLayout";
      function Pn(e) {
        e.getTableProps.push(ln), e.getRowProps.push(q), e.getHeaderGroupProps.push(q), e.getFooterGroupProps.push(q), e.getHeaderProps.push(Rn), e.getCellProps.push(en), e.getFooterProps.push(Sn);
      }
      Pn.pluginName = "useFlexLayout";
      var ln = function(t, u) {
        var r = u.instance;
        return [t, {
          style: {
            minWidth: r.totalColumnsMinWidth + "px"
          }
        }];
      }, q = function(t, u) {
        var r = u.instance;
        return [t, {
          style: {
            display: "flex",
            flex: "1 0 auto",
            minWidth: r.totalColumnsMinWidth + "px"
          }
        }];
      }, Rn = function(t, u) {
        var r = u.column;
        return [t, {
          style: {
            boxSizing: "border-box",
            flex: r.totalFlexWidth ? r.totalFlexWidth + " 0 auto" : void 0,
            minWidth: r.totalMinWidth + "px",
            width: r.totalWidth + "px"
          }
        }];
      }, en = function(t, u) {
        var r = u.cell;
        return [t, {
          style: {
            boxSizing: "border-box",
            flex: r.column.totalFlexWidth + " 0 auto",
            minWidth: r.column.totalMinWidth + "px",
            width: r.column.totalWidth + "px"
          }
        }];
      }, Sn = function(t, u) {
        var r = u.column;
        return [t, {
          style: {
            boxSizing: "border-box",
            flex: r.totalFlexWidth ? r.totalFlexWidth + " 0 auto" : void 0,
            minWidth: r.totalMinWidth + "px",
            width: r.totalWidth + "px"
          }
        }];
      };
      M.columnStartResizing = "columnStartResizing", M.columnResizing = "columnResizing", M.columnDoneResizing = "columnDoneResizing", M.resetResize = "resetResize";
      function xn(e) {
        e.stateReducers.push(bn), e.getTableProps.push(dn), e.getHeaderProps.push(hn), e.getRowProps.push(zn);
      }
      xn.pluginName = "useGridLayout";
      var dn = function(t, u) {
        var r = u.instance, p = r.visibleColumns.map(function(m) {
          var C;
          return r.state.gridLayout.columnWidths[m.id] ? r.state.gridLayout.columnWidths[m.id] + "px" : (C = r.state.columnResizing) != null && C.isResizingColumn ? r.state.gridLayout.startWidths[m.id] + "px" : typeof m.width == "number" ? m.width + "px" : m.width;
        });
        return [t, {
          style: {
            display: "grid",
            gridTemplateColumns: p.join(" ")
          }
        }];
      }, hn = function(t, u) {
        var r = u.column;
        return [t, {
          id: "header-cell-" + r.id,
          style: {
            position: "sticky",
            //enables a scroll wrapper to be placed around the table and have sticky headers
            gridColumn: "span " + r.totalVisibleHeaderCount
          }
        }];
      }, zn = function(t, u) {
        var r = u.row;
        return r.isExpanded ? [t, {
          style: {
            gridColumn: "1 / " + (r.cells.length + 1)
          }
        }] : [t, {}];
      };
      function bn(e, t, u, r) {
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
          var p = t.columnId, m = t.headerIdWidths, C = qn(p);
          if (C !== void 0) {
            var S = r.visibleColumns.reduce(function(J, Y) {
              var $;
              return y({}, J, ($ = {}, $[Y.id] = qn(Y.id), $));
            }, {}), D = r.visibleColumns.reduce(function(J, Y) {
              var $;
              return y({}, J, ($ = {}, $[Y.id] = Y.minWidth, $));
            }, {}), N = r.visibleColumns.reduce(function(J, Y) {
              var $;
              return y({}, J, ($ = {}, $[Y.id] = Y.maxWidth, $));
            }, {}), P = m.map(function(J) {
              var Y = J[0];
              return [Y, qn(Y)];
            });
            return y({}, e, {
              gridLayout: y({}, e.gridLayout, {
                startWidths: S,
                minWidths: D,
                maxWidths: N,
                headerIdGridWidths: P,
                columnWidth: C
              })
            });
          } else
            return e;
        }
        if (t.type === M.columnResizing) {
          var z = t.clientX, B = e.columnResizing.startX, G = e.gridLayout, X = G.columnWidth, k = G.minWidths, Q = G.maxWidths, cn = G.headerIdGridWidths, pn = cn === void 0 ? [] : cn, _ = z - B, En = _ / X, Wn = {};
          return pn.forEach(function(J) {
            var Y = J[0], $ = J[1];
            Wn[Y] = Math.min(Math.max(k[Y], $ + $ * En), Q[Y]);
          }), y({}, e, {
            gridLayout: y({}, e.gridLayout, {
              columnWidths: y({}, e.gridLayout.columnWidths, {}, Wn)
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
      function qn(e) {
        var t, u = (t = document.getElementById("header-cell-" + e)) == null ? void 0 : t.offsetWidth;
        if (u !== void 0)
          return u;
      }
      c._UNSTABLE_usePivotColumns = co, c.actions = M, c.defaultColumn = yn, c.defaultGroupByFn = eo, c.defaultOrderByFn = wt, c.defaultRenderer = an, c.emptyRenderer = gn, c.ensurePluginOrder = Un, c.flexRender = Hn, c.functionalUpdate = Gn, c.loopHooks = Mn, c.makePropGetter = Cn, c.makeRenderer = $n, c.reduceHooks = Fn, c.safeUseLayoutEffect = Vn, c.useAbsoluteLayout = L, c.useAsyncDebounce = le, c.useBlockLayout = un, c.useColumnOrder = l, c.useExpanded = dt, c.useFilters = Yt, c.useFlexLayout = Pn, c.useGetLatest = Dn, c.useGlobalFilter = _t, c.useGridLayout = xn, c.useGroupBy = vt, c.useMountedLayoutEffect = An, c.usePagination = lo, c.useResizeColumns = v, c.useRowSelect = Dt, c.useRowState = So, c.useSortBy = ao, c.useTable = rt, Object.defineProperty(c, "__esModule", { value: !0 });
    });
  }(Do, Do.exports)), Do.exports;
}
process.env.NODE_ENV === "production" ? wr.exports = Wu() : wr.exports = Hu();
var st = wr.exports;
function xu(o, f, c) {
  var d = this, b = A.useRef(null), T = A.useRef(0), y = A.useRef(null), O = A.useRef([]), Nn = A.useRef(), w = A.useRef(), Tn = A.useRef(o), M = A.useRef(!0);
  Tn.current = o;
  var an = !f && f !== 0 && typeof window < "u";
  if (typeof o != "function")
    throw new TypeError("Expected a function");
  f = +f || 0, c = c || {};
  var gn = !!c.leading, yn = "trailing" in c ? !!c.trailing : !0, mn = "maxWait" in c, Kn = mn ? Math.max(+c.maxWait || 0, f) : null, Cn = A.useCallback(function(Hn) {
    var oe = O.current, se = Nn.current;
    return O.current = Nn.current = null, T.current = Hn, w.current = Tn.current.apply(se, oe);
  }, []), Fn = A.useCallback(function(Hn, oe) {
    an && cancelAnimationFrame(y.current), y.current = an ? requestAnimationFrame(Hn) : setTimeout(Hn, oe);
  }, [an]), Mn = A.useCallback(function(Hn) {
    if (!M.current)
      return !1;
    var oe = Hn - b.current, se = Hn - T.current;
    return !b.current || oe >= f || oe < 0 || mn && se >= Kn;
  }, [Kn, mn, f]), Un = A.useCallback(function(Hn) {
    return y.current = null, yn && O.current ? Cn(Hn) : (O.current = Nn.current = null, w.current);
  }, [Cn, yn]), Gn = A.useCallback(function() {
    var Hn = Date.now();
    if (Mn(Hn))
      return Un(Hn);
    if (M.current) {
      var oe = Hn - b.current, se = Hn - T.current, ne = f - oe, ee = mn ? Math.min(ne, Kn - se) : ne;
      Fn(Gn, ee);
    }
  }, [Kn, mn, Mn, Fn, Un, f]), Dn = A.useCallback(function() {
    y.current && (an ? cancelAnimationFrame(y.current) : clearTimeout(y.current)), T.current = 0, O.current = b.current = Nn.current = y.current = null;
  }, [an]), Vn = A.useCallback(function() {
    return y.current ? Un(Date.now()) : w.current;
  }, [Un]);
  A.useEffect(function() {
    return M.current = !0, function() {
      M.current = !1;
    };
  }, []);
  var An = A.useCallback(function() {
    for (var Hn = [], oe = 0; oe < arguments.length; oe++)
      Hn[oe] = arguments[oe];
    var se = Date.now(), ne = Mn(se);
    if (O.current = Hn, Nn.current = d, b.current = se, ne) {
      if (!y.current && M.current)
        return T.current = b.current, Fn(Gn, f), gn ? Cn(b.current) : w.current;
      if (mn)
        return Fn(Gn, f), Cn(b.current);
    }
    return y.current || Fn(Gn, f), w.current;
  }, [Cn, gn, mn, Mn, Fn, Gn, f]), le = A.useCallback(function() {
    return !!y.current;
  }, []), $n = A.useMemo(function() {
    return {
      callback: An,
      cancel: Dn,
      flush: Vn,
      pending: le
    };
  }, [An, Dn, Vn, le]);
  return $n;
}
function Gu(o, f) {
  return o === f;
}
function Ur(o) {
  return typeof o == "function" ? function() {
    return o;
  } : o;
}
function Vu(o) {
  var f = A.useState(Ur(o)), c = f[0], d = f[1], b = A.useCallback(function(T) {
    return d(Ur(T));
  }, []);
  return [c, b];
}
function Ku(o, f, c) {
  var d = c && c.equalityFn || Gu, b = Vu(o), T = b[0], y = b[1], O = xu(A.useCallback(function(w) {
    return y(w);
  }, [y]), f, c), Nn = A.useRef(o);
  return A.useEffect(function() {
    d(Nn.current, o) || (O.callback(o), Nn.current = o);
  }, [o, O, d]), [T, { cancel: O.cancel, pending: O.pending, flush: O.flush }];
}
function qu(o) {
  if (Array.isArray(o) || (o.general.geoType === "us-county" || o.general.geoType === "single-state" || o.general.geoType === "us" && (o != null && o.data)) && (o == null || o.data.forEach((f) => {
    f[o.columns.geo.name] && (!isNaN(parseInt(f[o.columns.geo.name])) && f[o.columns.geo.name].length === 4 && (f[o.columns.geo.name] = 0 + f[o.columns.geo.name]), f[o.columns.geo.name] = f[o.columns.geo.name].toString());
  })), Array.isArray(o) && o.length > 0) {
    let f = Object.keys(o[0]), c = ["fips", "FIPS", "fips codes", "FIPS CODES", "Fips Codes", "fips Codes", "Fips codes", "FIPS Codes"];
    const d = f.filter((b) => c.includes(b));
    if (!d.length)
      return;
    o == null || o.forEach((b) => {
      b[d] && (!isNaN(parseInt(b[d])) && b[d].length === 4 && (b[d] = 0 + b[d]), b[d] = b[d].toString());
    });
  }
  return o;
}
const Mr = 10, ot = {
  emptyCols: "It looks like your column headers are missing some data. Please make sure all of your columns have titles and upload your file again.",
  emptyData: "Your data file is empty.",
  dataType: "Your datatype is not supported.",
  fileType: "The file type that you are trying to upload is not supported.",
  formatting: "Please check the formatting of your data file.",
  failedFetch: "Error fetching or parsing data file.",
  urlInvalid: "Please make sure to use a valid URL.",
  cannotReach: "Cannot reach URL, please make sure it's correct.",
  fileTooLarge: `File is too large. Maximum file size is ${Mr}MB.`
}, zu = A.memo(({ globalFilter: o, setGlobalFilter: f, disabled: c = !1 }) => {
  const [d, b] = A.useState(o), [T] = Ku(d, 200);
  A.useEffect(() => {
    typeof T == "string" && T !== o && f(T ?? "");
  }, [T]);
  const y = (O) => {
    b(O.target.value);
  };
  return /* @__PURE__ */ i.createElement("input", { className: "filter", value: d, onChange: y, type: "search", placeholder: "Filter...", disabled: c });
}), Jr = A.memo(({ globalFilter: o, data: f, setGlobalFilter: c }) => /* @__PURE__ */ i.createElement("header", { className: "data-table-header" }, /* @__PURE__ */ i.createElement("h2", null, "Data Preview"), /* @__PURE__ */ i.createElement(zu, { globalFilter: o || "", setGlobalFilter: c, disabled: f === null }))), Xu = A.memo(({ previousPage: o, nextPage: f, canPreviousPage: c, canNextPage: d, pageNumber: b, totalPages: T }) => /* @__PURE__ */ i.createElement("footer", { className: "data-table-pagination" }, /* @__PURE__ */ i.createElement("ul", null, /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement("button", { onClick: () => o(), className: "btn btn-prev", disabled: !c, title: "Previous Page" })), /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement("button", { onClick: () => f(), className: "btn btn-next", disabled: !d, title: "Next Page" }))), /* @__PURE__ */ i.createElement("span", null, "Page ", b, " of ", T))), ju = ({ data: o }) => {
  const [f, c] = A.useState(o ?? []), d = A.useContext(Ot), b = A.useMemo(() => {
    const Vn = f.columns ?? [];
    return Vn.length > 0 && Vn.includes("") && d({ type: "EDITOR_SET_ERRORS", payload: [ot.emptyCols] }), Vn.map((An, le) => ({
      id: `column-${An}`,
      accessor: (Hn) => Hn[An],
      Header: An,
      width: 250
    }));
  }, [f]), T = A.useCallback((Vn) => {
    let An = [];
    Vn.forEach(($n) => {
      Object.keys($n).forEach((Hn) => {
        An.includes(Hn) === !1 && An.push(Hn);
      });
    });
    const le = [...Vn];
    if (Array.isArray(le))
      return le.columns = An, le;
  }, []);
  A.useEffect(() => {
    if (!o)
      return;
    let Vn = [...o];
    Vn = T(Vn), qu(Vn), c(Vn);
  }, [o, T]);
  const {
    getTableProps: y,
    getTableBodyProps: O,
    headerGroups: Nn,
    state: { pageIndex: w, globalFilter: Tn },
    prepareRow: M,
    setGlobalFilter: an,
    page: gn,
    canPreviousPage: yn,
    canNextPage: mn,
    pageOptions: Kn,
    nextPage: Cn,
    previousPage: Fn
  } = st.useTable({ columns: b, data: f, initialState: { pageSize: 25 } }, st.useBlockLayout, st.useGlobalFilter, st.useSortBy, st.useResizeColumns, st.usePagination), Mn = () => /* @__PURE__ */ i.createElement("section", { className: "no-data-message" }, /* @__PURE__ */ i.createElement("section", null, /* @__PURE__ */ i.createElement("h3", null, "No Data"), /* @__PURE__ */ i.createElement("p", null, "Import data to preview"))), Un = () => /* @__PURE__ */ i.createElement("section", { className: "no-data" }, /* @__PURE__ */ i.createElement(Mn, null), /* @__PURE__ */ i.createElement("div", { className: "table-container" }, /* @__PURE__ */ i.createElement("table", { className: "editor data-table", role: "table" }, /* @__PURE__ */ i.createElement("thead", null, /* @__PURE__ */ i.createElement("tr", { role: "row" }, /* @__PURE__ */ i.createElement("th", { scope: "col", colSpan: 1, role: "columnheader" }), /* @__PURE__ */ i.createElement("th", { scope: "col", colSpan: 1, role: "columnheader" }), /* @__PURE__ */ i.createElement("th", { scope: "col", colSpan: 1, role: "columnheader" }))), /* @__PURE__ */ i.createElement("tbody", null, /* @__PURE__ */ i.createElement("tr", { role: "row" }, /* @__PURE__ */ i.createElement("td", { role: "cell" }), /* @__PURE__ */ i.createElement("td", { role: "cell" }), /* @__PURE__ */ i.createElement("td", { role: "cell" })), /* @__PURE__ */ i.createElement("tr", { role: "row" }, /* @__PURE__ */ i.createElement("td", { role: "cell" }), /* @__PURE__ */ i.createElement("td", { role: "cell" }), /* @__PURE__ */ i.createElement("td", { role: "cell" })), /* @__PURE__ */ i.createElement("tr", { role: "row" }, /* @__PURE__ */ i.createElement("td", { role: "cell" }), /* @__PURE__ */ i.createElement("td", { role: "cell" }), /* @__PURE__ */ i.createElement("td", { role: "cell" })), /* @__PURE__ */ i.createElement("tr", { role: "row" }, /* @__PURE__ */ i.createElement("td", { role: "cell" }), /* @__PURE__ */ i.createElement("td", { role: "cell" }), /* @__PURE__ */ i.createElement("td", { role: "cell" })), /* @__PURE__ */ i.createElement("tr", { role: "row" }, /* @__PURE__ */ i.createElement("td", { role: "cell" }), /* @__PURE__ */ i.createElement("td", { role: "cell" }), /* @__PURE__ */ i.createElement("td", { role: "cell" })), /* @__PURE__ */ i.createElement("tr", { role: "row" }, /* @__PURE__ */ i.createElement("td", { role: "cell" }), /* @__PURE__ */ i.createElement("td", { role: "cell" }), /* @__PURE__ */ i.createElement("td", { role: "cell" })), /* @__PURE__ */ i.createElement("tr", { role: "row" }, /* @__PURE__ */ i.createElement("td", { role: "cell" }), /* @__PURE__ */ i.createElement("td", { role: "cell" }), /* @__PURE__ */ i.createElement("td", { role: "cell" })), /* @__PURE__ */ i.createElement("tr", { role: "row" }, /* @__PURE__ */ i.createElement("td", { role: "cell" }), /* @__PURE__ */ i.createElement("td", { role: "cell" }), /* @__PURE__ */ i.createElement("td", { role: "cell" })), /* @__PURE__ */ i.createElement("tr", { role: "row" }, /* @__PURE__ */ i.createElement("td", { role: "cell" }), /* @__PURE__ */ i.createElement("td", { role: "cell" }), /* @__PURE__ */ i.createElement("td", { role: "cell" })), /* @__PURE__ */ i.createElement("tr", { role: "row" }, /* @__PURE__ */ i.createElement("td", { role: "cell" }), /* @__PURE__ */ i.createElement("td", { role: "cell" }), /* @__PURE__ */ i.createElement("td", { role: "cell" }))))));
  if (!o)
    return [/* @__PURE__ */ i.createElement(Jr, { key: "header" }), /* @__PURE__ */ i.createElement(Un, { key: "table" })];
  const Gn = { previousPage: Fn, nextPage: Cn, canPreviousPage: yn, canNextPage: mn, pageNumber: w + 1, totalPages: Kn.length }, Dn = () => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("section", { className: "data-table-container" }, /* @__PURE__ */ i.createElement("div", { className: "table-container" }, /* @__PURE__ */ i.createElement("table", { className: "data-table", ...y(), "aria-hidden": "true" }, /* @__PURE__ */ i.createElement("thead", null, Nn.map((Vn) => /* @__PURE__ */ i.createElement("tr", { ...Vn.getHeaderGroupProps() }, Vn.headers.map((An) => /* @__PURE__ */ i.createElement("th", { scope: "col", ...An.getHeaderProps(An.getSortByToggleProps()), className: An.isSorted ? An.isSortedDesc ? "sort sort-desc" : "sort sort-asc" : "", title: An.Header }, An.render("Header"), /* @__PURE__ */ i.createElement("div", { ...An.getResizerProps(), className: "resizer" })))))), /* @__PURE__ */ i.createElement("tbody", { ...O() }, gn.map((Vn) => (M(Vn), /* @__PURE__ */ i.createElement("tr", { ...Vn.getRowProps() }, Vn.cells.map((An) => /* @__PURE__ */ i.createElement("td", { ...An.getCellProps(), title: An.value }, An.render("Cell")))))))))), /* @__PURE__ */ i.createElement(Xu, { ...Gn }));
  return [/* @__PURE__ */ i.createElement(Jr, { key: "header", data: o, setGlobalFilter: an, globalFilter: Tn }), /* @__PURE__ */ i.createElement(Dn, { key: "table" })];
}, Yu = (o) => /* @__PURE__ */ A.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", ...o }, /* @__PURE__ */ A.createElement("path", { d: "M314.222 197.78c51.091 51.091 54.377 132.287 9.75 187.16-6.242 7.73-2.784 3.865-84.94 86.02-54.696 54.696-143.266 54.745-197.99 0-54.711-54.69-54.734-143.255 0-197.99 32.773-32.773 51.835-51.899 63.409-63.457 7.463-7.452 20.331-2.354 20.486 8.192a173.31 173.31 0 0 0 4.746 37.828c.966 4.029-.272 8.269-3.202 11.198L80.632 312.57c-32.755 32.775-32.887 85.892 0 118.8 32.775 32.755 85.892 32.887 118.8 0l75.19-75.2c32.718-32.725 32.777-86.013 0-118.79a83.722 83.722 0 0 0-22.814-16.229c-4.623-2.233-7.182-7.25-6.561-12.346 1.356-11.122 6.296-21.885 14.815-30.405l4.375-4.375c3.625-3.626 9.177-4.594 13.76-2.294 12.999 6.524 25.187 15.211 36.025 26.049zM470.958 41.04c-54.724-54.745-143.294-54.696-197.99 0-82.156 82.156-78.698 78.29-84.94 86.02-44.627 54.873-41.341 136.069 9.75 187.16 10.838 10.838 23.026 19.525 36.025 26.049 4.582 2.3 10.134 1.331 13.76-2.294l4.375-4.375c8.52-8.519 13.459-19.283 14.815-30.405.621-5.096-1.938-10.113-6.561-12.346a83.706 83.706 0 0 1-22.814-16.229c-32.777-32.777-32.718-86.065 0-118.79l75.19-75.2c32.908-32.887 86.025-32.755 118.8 0 32.887 32.908 32.755 86.025 0 118.8l-45.848 45.84c-2.93 2.929-4.168 7.169-3.202 11.198a173.31 173.31 0 0 1 4.746 37.828c.155 10.546 13.023 15.644 20.486 8.192 11.574-11.558 30.636-30.684 63.409-63.457 54.733-54.735 54.71-143.3-.001-197.991z" })), Lo = A.createContext();
Lo.displayName = "SampleDataContext";
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
`, Uu = `Race,Age-adjusted rate
Hispanic or Latino,644.2
Non-Hispanic American Indian,636.1
Non-Hispanic Black,563.7
Non-Hispanic Asian or Pacific Islander,202.5
Non-Hispanic White,183.6
`, Ju = `FIPS Codes,County,Public Health Jurisdiction,Percent Vaccinated,Vaccination Coverage Group
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
`, $u = `City,Longitude,Latitude,Value
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
`, Zu = `x,y1,y2,y3,y4
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
`, n0 = `[
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
`, e0 = `[
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
]`, t0 = `date,quarter,upper_90,lower_90,random_col
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
`, o0 = `Author(s) and Year,Confidence,Timing,N,Estimate,Lower,Upper,Result
"Spears, 1983",H,T3,170,0.2,-35.7,36.2,"0.2 [-35.7, 36.2]"
"Moran, 1998",H,B,2183,33.4,-109.5,176.3,"33.4 [-109.5, 176.3]"
"Lee, 2003",H,T1-T2,186,-40.1,-74,-6.3,"-40.1 [-74, -6.3]"
"Cooper, 1977",H,T3,1137,-46,-88.5,-3.5,"-46 [-88.5, -3.5]"
"Mccarthy, 1998",H,T2,1337,22.2,-18.2,62.6,"22.2 [-18.2, 62.6]"
"Williams, 1976",H,T1,889,-14.8,-55,25.4,"-14.8 [-55, 25.4]"
"Sawyer, 1973",H,T1,107,-57.6,-104.1,-11.1,"-57.6 [-104.1, -11.1]"
"Miller, 2003",H,T3,2402,-7.3,-145.9,131.3,"-7.3 [-145.9, 131.3]"
"Dixon, 1981",M,T1-T2,2242,-60.6,-156.5,35.3,"-60.6 [-156.5, 35.3]"
"Thompson, 1988",M,T2-T3,2166,-31.1,-129,66.9,"-31.1 [-129, 66.9]"
"Valenzuela, 1980",M,T1,126,6.1,-16.6,28.7,"6.1 [-16.6, 28.7]"
"Vaughn, 1975",M,T1,402,-77,-135.3,-18.7,"-77 [-135.3, -18.7]"
"Wilson, 1976",M,T2-T3,878,-108,-188.2,-27.8,"-108 [-188.2, -27.8]"
"Livingston, 2013",M,T2,1082,28.6,-42.5,99.8,"28.6 [-42.5, 99.8]"
"Sullivan, 1983",M,T2-T3,2411,-52.4,-101.9,-2.9,"-52.4 [-101.9, -2.9]"
"Parker, 1988",M,T3,856,-39.3,-110.7,32.1,"-39.3 [-110.7, 32.1]"
"Morgan, 1976",M,T3,1679,-47.3,-155.6,61,"-47.3 [-155.6, 61]"
"Perez, 2007",L,T2-T3,2095,-43.5,-89.5,2.6,"-43.5 [-89.5, 2.6]"
"Mathis, 1982",L,T3,593,-41.8,-71.8,-11.8,"-41.8 [-71.8, -11.8]"
"Parker, 2018",L,B,1320,-45.6,-106.9,15.7,"-45.6 [-106.9, 15.7]"
"Knox, 2020",L,T1,2080,22.9,-89.5,135.2,"22.9 [-89.5, 135.2]"
"Manning, 2017",L,T2-T3,2463,-133.4,-349.9,83.1,"-133.4 [-349.9, 83.1]"
"Jackson, 2018",L,B,1880,14,-168.5,196.5,"14 [-168.5, 196.5]"
"Total", "","","", -10, -20, 0, "Result"
`, r0 = `[
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
]`, a0 = `[
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
]`, br = {
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
      data: Zu
    },
    {
      text: "Area Chart Sample Data",
      fileName: "valid-area-chart.json",
      data: n0
    },
    {
      text: "Forecast Chart Data",
      fileName: "valid-forecast-data.csv",
      data: t0
    },
    {
      text: "Forest Plot Data",
      fileName: "valid-forest-plot-data.csv",
      data: o0
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
      data: Ju
    },
    {
      text: "United States: Geo Point Sample Data",
      fileName: "supported-cities.csv",
      data: $u
    },
    {
      text: "United States: Region",
      fileName: "valid-region-data.json",
      data: a0
    },
    {
      text: "World: Geocode Sample Data",
      fileName: "valid-world-geocode.json",
      data: e0
    },
    {
      text: "World: Default Data",
      fileName: "valid-world-data.json",
      data: r0
    }
  ]
}, fa = ({ text: o, fileName: f, data: c }) => {
  const { editingDataset: d, loadData: b } = A.useContext(Lo), T = (O) => b(new Blob([c], { type: "text/csv" }), f, d), y = (O) => O.keyCode === 13 && b(new Blob([c], { type: "text/csv" }), f, d);
  return /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "link link-upload",
      onClick: T,
      onKeyDown: y
    },
    o
  );
}, u0 = () => br.maps.map((o) => /* @__PURE__ */ i.createElement(fa, { key: o.fileName, text: o.text, fileName: o.fileName, data: o.data })), i0 = () => br.charts.map((o) => /* @__PURE__ */ i.createElement(fa, { key: o.fileName, text: o.text, fileName: o.fileName, data: o.data })), l0 = () => {
  const { config: o } = A.useContext(Lo);
  return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("h3", { className: "heading-3" }, "Load Sample Data:"), /* @__PURE__ */ i.createElement("ul", { className: "sample-data-list" }, o.type !== "map" && /* @__PURE__ */ i.createElement(i0, null), o.type !== "chart" && /* @__PURE__ */ i.createElement(u0, null)));
}, Dr = () => null;
Dr.data = br;
Dr.Buttons = l0;
const $r = (o) => /* @__PURE__ */ A.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", ...o }, /* @__PURE__ */ A.createElement("path", { d: "M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm65.18 216.01H224v80c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16v-80H94.82c-14.28 0-21.41-17.29-11.27-27.36l96.42-95.7c6.65-6.61 17.39-6.61 24.04 0l96.42 95.7c10.15 10.07 3.03 27.36-11.25 27.36zM377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z" }));
const Ro = (o) => !!o.includes("wt=csv"), Pt = (o) => !!(o != null && o.includes("wt=json"));
function s0() {
  const { config: o, errors: f, tempConfig: c, sharepath: d } = A.useContext(kt), b = (W) => {
    Cn({ type: "EDITOR_SET_CONFIG", payload: W });
  }, T = (W) => {
    Cn({ type: "EDITOR_SET_ERRORS", payload: W });
  }, y = new Ia(), [O, Nn] = A.useState(o.dataFileSourceType === "url" ? o.dataFileName : o.dataUrl || ""), [w, Tn] = A.useState(!!o.dataUrl), [M, an] = A.useState(o.type === "dashboard" || !o.data), [gn, yn] = A.useState(void 0), [mn, Kn] = A.useState(), Cn = A.useContext(Ot), Fn = {
    ".csv": "text/csv",
    ".json": "application/json"
  }, Mn = (W) => W === void 0 ? "" : W > Math.pow(1024, 3) ? Math.round(W / Math.pow(1024, 3) * 100) / 100 + " GB" : W > Math.pow(1024, 2) ? Math.round(W / Math.pow(1024, 2) * 100) / 100 + " MB" : W > 1024 ? Math.round(W / 1024 * 100) / 100 + " KB" : W + " B", Un = (W, V, nn) => (V.map(function(rn, kn, jn) {
    if (!jn.find((ue) => ue.dataKey === rn.dataKey))
      return !1;
  }), !(W.columns.indexOf(nn) < 0)), Gn = async () => {
    let W;
    try {
      W = Ro(O) || Pt(O) ? O : new URL(O, window.location.origin);
    } catch {
      throw ot.urlInvalid;
    }
    let V = null;
    const nn = Ro(O) ? ".csv" : Pt(O) ? ".json" : Object == null ? void 0 : Object.keys(Fn).find((rn) => W.pathname.endsWith(rn));
    try {
      await Ta.get(W.toString(), {
        responseType: "blob"
      }).then((rn) => {
        V = rn.data, nn === ".csv" && V.type === "text/plain" || Ro(O) ? V = V.slice(0, V.size, "text/csv") : (nn === ".json" && V.type === "text/plain" || Pt(O)) && (V = V.slice(0, V.size, "application/json"));
      });
    } catch (rn) {
      console.error(rn);
      const kn = rn.toString();
      throw Object.values(ot).includes(rn) ? kn : ot.failedFetch;
    }
    return V;
  }, Dn = ([W]) => Vn(W, gn, gn), Vn = async (W = null, V, nn) => {
    let rn = W, kn = (rn == null ? void 0 : rn.path) ?? V ?? null, jn = "file";
    if (rn === null) {
      jn = "url";
      try {
        rn = await Gn(), kn = O;
      } catch (Jn) {
        T([Jn]);
        return;
      }
    }
    let ue = rn.size;
    if (ue > Mr * 1048576) {
      T([ot.fileTooLarge]);
      return;
    }
    let be = (W == null ? void 0 : W.name) || O || V, Oe = ((Jn) => {
      let Xn;
      if (Jn === "file" && (Xn = be.match(/(?:\.([^.]+))?$/g), Xn.length === 0 ? Xn = ".csv" : Xn = Xn[0]), Jn === "url") {
        let Z = new URL(be, window.location.origin);
        Xn = Ro(O) ? ".csv" : Pt(O) ? ".json" : Object.keys(Fn).find((In) => Z.pathname.endsWith(In));
      }
      return Xn;
    })(jn), We = Fn[Oe], He = new FileReader(), xe = We === "text/csv" ? "utf-8" : "";
    He.onload = function() {
      let Jn = this.result;
      switch (We) {
        case "text/csv":
          Jn = Xa(Jn);
          break;
        case "text/plain":
        case "application/json":
          try {
            Jn = Pt(O) ? JSON.parse(Jn).response.docs : JSON.parse(Jn);
          } catch {
            T([ot.formatting]);
            return;
          }
          break;
        default:
          T([ot.fileType]);
          return;
      }
      try {
        if (Jn = y.autoStandardize(Jn), o.data && o.series)
          if (Un(Jn, o.series, o == null ? void 0 : o.xAxis.dataKey))
            if (o.type === "dashboard") {
              let Xn = { ...o.datasets };
              Object.keys(Xn).forEach((Z) => Xn[Z].preview = !1), Xn[nn || kn] = {
                data: Jn,
                // new data
                dataFileSize: ue,
                dataFileName: kn,
                // new file source
                dataFileSourceType: jn,
                // new file source type
                dataFileFormat: Oe.replace(".", "").toUpperCase(),
                preview: !0
              }, w && (Xn[nn || kn].dataUrl = kn), b({
                ...o,
                ...c,
                dataset: Xn
              });
            } else {
              let Xn = {
                ...o,
                ...c,
                data: Jn,
                // new data
                dataFileName: kn,
                // new file source
                dataFileSourceType: jn,
                // new file source type
                formattedData: y.developerStandardize(Jn, o.dataDescription)
              };
              w && (Xn.dataUrl = kn), b(Xn);
            }
          else
            De(
              {
                data: Jn,
                dataFileName: kn,
                dataFileSourceType: jn
              },
              "It appears that your data does not contain all of the columns that your last dataset contained. Continuing will reset your configuration. Do you want to continue?"
            );
        else if (o.type === "dashboard") {
          let Xn = { ...o.datasets };
          Object.keys(Xn).forEach((Z) => Xn[Z].preview = !1), Xn[nn || kn] = {
            data: Jn,
            // new data
            dataFileSize: ue,
            dataFileName: kn,
            // new file source
            dataFileSourceType: jn,
            // new file source type
            dataFileFormat: Oe.replace(".", "").toUpperCase(),
            preview: !0
          }, w && (Xn[nn || kn].dataUrl = kn), b({ ...o, datasets: Xn });
        } else {
          let Xn = {
            ...o,
            ...c,
            data: Jn,
            // new data
            dataFileName: kn,
            // new file source
            dataFileSourceType: jn,
            // new file source type
            formattedData: y.developerStandardize(Jn, o.dataDescription)
            // new file source type
          };
          w && (Xn.dataUrl = kn), b(Xn);
        }
        gn && yn(void 0), an(!1);
      } catch (Xn) {
        T(Xn);
      }
    }, He.readAsText(rn, xe);
  };
  A.useEffect(() => {
    let W = { ...c || o };
    if (o.formattedData === void 0 && o.dataDescription) {
      const V = y.developerStandardize(o.data, o.dataDescription);
      V && (W.formattedData = V);
    }
    Cn({ type: "EDITOR_SAVE", payload: W });
  }, []), A.useEffect(() => {
    (async () => {
      if (o.type === "dashboard")
        Object.keys(o.datasets).forEach(async (V) => {
          if (o.datasets[V].preview)
            if (o.datasets[V].dataUrl) {
              const nn = await Lr(o.datasets[V].dataUrl);
              Array.isArray(nn) && Kn(nn);
            } else
              Array.isArray(o.datasets[V].data) && Kn(o.datasets[V].data);
        });
      else if (o.dataUrl) {
        const V = await Lr(o.dataUrl);
        Array.isArray(V) && Kn(V);
      }
    })();
  }, [o.datasets]);
  const An = (W, V, nn, rn) => {
    if (o.type === "dashboard") {
      let kn = { ...o.datasets[V].dataDescription, [nn]: rn }, jn = y.developerStandardize(o.datasets[V].data, kn), ue = { ...o.datasets };
      ue[V] = { ...ue[V], dataDescription: kn, formattedData: jn }, b({ ...o, datasets: ue });
    } else {
      let kn = { ...o.dataDescription, [nn]: rn }, jn = y.developerStandardize(o.data, kn);
      b({ ...o, formattedData: jn, dataDescription: kn });
    }
  }, le = (W, V) => {
    if (V) {
      let nn = { ...o.datasets };
      W === !1 ? delete nn[V].dataUrl : nn[V].dataUrl = nn[V].dataFileName, b({ ...o, datasets: nn });
    } else if (o.type !== "dashboard") {
      let nn = { ...o };
      W === !1 ? delete nn.dataUrl : nn.dataUrl = nn.dataFileName, b(nn);
    }
    Tn(W);
  }, { getRootProps: $n, getInputProps: Hn, isDragActive: oe } = Sr({ onDrop: Dn }), { getRootProps: se, getInputProps: ne, isDragActive: ee } = Sr({ onDrop: Dn }), Ee = (W, V) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("form", { className: "input-group d-flex", onSubmit: (nn) => nn.preventDefault() }, /* @__PURE__ */ i.createElement("input", { id: "external-data", type: "text", className: "form-control flex-grow-1 border-right-0", placeholder: "e.g., https://data.cdc.gov/resources/file.json", "aria-label": "Load data from external URL", "aria-describedby": "load-data", value: O, onChange: (nn) => Nn(nn.target.value) }), /* @__PURE__ */ i.createElement("button", { className: "input-group-text btn btn-primary px-4", type: "submit", id: "load-data", onClick: () => Vn(null, O, V) }, "Load")), /* @__PURE__ */ i.createElement("label", { htmlFor: "keep-url", className: "mt-1 d-flex keep-url" }, /* @__PURE__ */ i.createElement("input", { type: "checkbox", id: "keep-url", checked: w, onChange: () => le(!w, V) }), " Always load from URL (normally will only pull once)")), De = (W = {}, V = "Are you sure you want to do this?") => {
    W.newViz = !0, window.confirm(V) === !0 && (Cn({ type: "EDITOR_SAVE", payload: W }), an(!0));
  }, ve = () => (
    //todo convert to modal
    /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("button", { className: "btn danger", onClick: () => De({ type: o.type, visualizationType: o.visualizationType }, "Resetting will remove your data and settings. Do you want to continue?") }, "Clear", /* @__PURE__ */ i.createElement(Ir, null)), o.dataFileSourceType === "file" && /* @__PURE__ */ i.createElement("div", { className: "link link-replace", ...se() }, /* @__PURE__ */ i.createElement("input", { ...ne() }), /* @__PURE__ */ i.createElement("p", null, /* @__PURE__ */ i.createElement("span", null, "or replace file"))))
  ), Te = (W, V, nn) => {
    let rn = { ...o.datasets };
    nn === !0 ? Object.keys(rn).forEach((kn) => {
      kn !== W ? rn[kn][V] = !1 : rn[kn][V] = !0;
    }) : rn[W][V] = nn, b({ ...o, datasets: rn });
  }, ge = (W) => {
    let V = { ...o.datasets }, nn = { ...o.visualizations };
    Object.keys(nn).forEach((rn) => {
      nn[rn].dataKey === W && delete nn[rn].dataKey;
    }), delete V[W], b({ ...o, datasets: V, visualizations: nn });
  }, Ie = (W, V) => {
    if (W === V)
      return;
    let nn = { ...o.datasets }, rn = { ...o.visualizations }, kn = 2, jn = V;
    for (; nn[V]; )
      V = jn + "-" + kn, kn++;
    nn[V] = nn[W], delete nn[W], Object.keys(rn).forEach((ue) => {
      rn[ue].dataKey === W && (rn[ue].dataKey = V);
    }), b({ ...o, datasets: nn, visualizations: rn });
  };
  let ce, Me, Ae = !1;
  o.type === "dashboard" ? (Ae = Object.keys(o.datasets).length > 0, Object.keys(o.datasets).forEach((W) => {
    o.datasets[W].preview && Array.isArray(o.datasets[W].data) && (ce = o.datasets[W].data);
  })) : (ce = o.data, Me = o, Ae = !!o.formattedData || o.data && o.dataDescription && y.autoStandardize(o.data)), (o.visualizationType === "Box Plot" && o.data || o.visualizationType === "Scatter Plot") && (Ae = !0);
  const Re = /* @__PURE__ */ i.createElement(i.Fragment, null, o.filters && o.filters.map(
    (W, V) => W.type !== "url" ? /* @__PURE__ */ i.createElement(i.Fragment, null) : /* @__PURE__ */ i.createElement("fieldset", { key: W.key, className: "edit-block url-filters-block" }, /* @__PURE__ */ i.createElement(
      "button",
      {
        onClick: (nn) => {
          let rn = [...o.filters];
          rn.splice(V, 1), b({ ...o, filters: rn, runtimeDataUrl: void 0 });
        }
      },
      "Remove"
    ), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Label", /* @__PURE__ */ i.createElement(on, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(on.Target, null, /* @__PURE__ */ i.createElement(Tr, { display: "question" })), /* @__PURE__ */ i.createElement(on.Content, null, /* @__PURE__ */ i.createElement("p", { style: { padding: "0.5rem" } }, "The label that will appear above the dropdown filter.")))), " ", /* @__PURE__ */ i.createElement(
      "input",
      {
        type: "text",
        defaultValue: W.label,
        onChange: (nn) => {
          let rn = [...o.filters];
          rn[V].label = nn.target.value, b({ ...o, filters: rn });
        }
      }
    )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Query string parameter", /* @__PURE__ */ i.createElement(on, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(on.Target, null, /* @__PURE__ */ i.createElement(Tr, { display: "question" })), /* @__PURE__ */ i.createElement(on.Content, null, /* @__PURE__ */ i.createElement("p", { style: { padding: "0.5rem" } }, "Name of the query string parameter that will be appended to the URL above with the values provided below.")))), " ", /* @__PURE__ */ i.createElement(
      "input",
      {
        type: "text",
        defaultValue: W.queryParameter,
        onChange: (nn) => {
          let rn = [...o.filters];
          rn[V].queryParameter = nn.target.value, b({ ...o, filters: rn });
        }
      }
    )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Values"), " "), /* @__PURE__ */ i.createElement("ul", { className: "value-list" }, W.orderedValues && W.orderedValues.map((nn, rn) => /* @__PURE__ */ i.createElement("li", null, nn, /* @__PURE__ */ i.createElement(
      "input",
      {
        type: "text",
        placeholder: "Enter value display name here",
        value: W.labels ? W.labels[nn] : void 0,
        className: "url-value-label",
        onChange: (kn) => {
          let jn = [...o.filters];
          jn[V].labels = jn[V].labels || {}, jn[V].labels[nn] = kn.target.value, b({ ...o, filters: jn });
        }
      }
    ), /* @__PURE__ */ i.createElement(
      "button",
      {
        onClick: () => {
          let kn = [...o.filters];
          kn[V].labels && delete kn[V].labels[kn[V].orderedValues[rn]], kn[V].orderedValues.splice(rn, 1), b({ ...o, filters: kn });
        }
      },
      "X"
    )))), /* @__PURE__ */ i.createElement(
      "form",
      {
        onSubmit: (nn) => {
          if (nn.preventDefault(), !o.filters[V].orderedValues || o.filters[V].orderedValues.indexOf(nn.target[0].value) === -1) {
            let rn = [...o.filters];
            rn[V].orderedValues = rn[V].orderedValues || [], rn[V].orderedValues.push(nn.target[0].value), rn[V].values = rn[V].orderedValues, rn[V].active || (rn[V].active = nn.target[0].value), nn.target[0].value = "", b({ ...o, filters: rn });
          }
        }
      },
      /* @__PURE__ */ i.createElement("input", { type: "text", placeholder: "Enter new value name here" }),
      " ",
      /* @__PURE__ */ i.createElement("button", { type: "submit", style: { marginTop: "1em" } }, "Add New Value")
    ))
  ), /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: () => {
        b({ ...o, filters: o.filters ? [...o.filters, { type: "url", key: Date.now() }] : [{ type: "url", key: Date.now() }] });
      }
    },
    "Add New URL Filter"
  )), Se = o.visualizationType !== "Box Plot" && o.visualizationType !== "Scatter Plot";
  return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("div", { className: "left-col" }, o.type === "dashboard" && Object.keys(o.datasets).length > 0 && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("div", { className: "heading-3" }, "Data Sources"), /* @__PURE__ */ i.createElement("table", null, /* @__PURE__ */ i.createElement("thead", null, /* @__PURE__ */ i.createElement("tr", null, /* @__PURE__ */ i.createElement("th", null, "Name"), /* @__PURE__ */ i.createElement("th", null, "Size"), /* @__PURE__ */ i.createElement("th", null, "Type"), /* @__PURE__ */ i.createElement("th", { colSpan: 4 }, "Actions"))), /* @__PURE__ */ i.createElement("tbody", null, Object.keys(o.datasets).map(
    (W) => o.datasets[W].dataFileName && /* @__PURE__ */ i.createElement("tr", { key: `tr-${W}` }, /* @__PURE__ */ i.createElement("td", null, /* @__PURE__ */ i.createElement("input", { className: "dataset-name-input", type: "text", defaultValue: W, onBlur: (V) => Ie(W, V.target.value) })), /* @__PURE__ */ i.createElement("td", null, Mn(o.datasets[W].dataFileSize)), /* @__PURE__ */ i.createElement("td", null, o.datasets[W].dataFileFormat), /* @__PURE__ */ i.createElement("td", null, /* @__PURE__ */ i.createElement("button", { className: "btn btn-primary", onClick: () => Te(W, "preview", !0) }, "Preview Data")), /* @__PURE__ */ i.createElement("td", null, /* @__PURE__ */ i.createElement(
      "button",
      {
        className: "btn btn-primary",
        onClick: () => {
          gn === W ? (yn(void 0), Nn(""), Tn(!1)) : (yn(W), Nn(o.datasets[W].dataUrl || o.datasets[W].dataFileName), Tn(!!o.datasets[W].dataUrl));
        }
      },
      "Edit Data"
    )), /* @__PURE__ */ i.createElement("td", null, /* @__PURE__ */ i.createElement("button", { className: "btn btn-primary", onClick: () => ge(W) }, "X")))
  )))), Me && Me.data && /* @__PURE__ */ i.createElement(i.Fragment, null, o.type !== "dashboard" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("div", { className: "heading-3" }, "Data Source"), /* @__PURE__ */ i.createElement("div", { className: "file-loaded-area" }, (o.dataFileSourceType === "file" || !o.dataFileSourceType) && /* @__PURE__ */ i.createElement("div", { className: "data-source-options" }, /* @__PURE__ */ i.createElement("div", { className: ee ? "drag-active cdcdataviz-file-selector loaded-file" : "cdcdataviz-file-selector loaded-file", ...se() }, /* @__PURE__ */ i.createElement("input", { ...ne() }), ee ? /* @__PURE__ */ i.createElement("p", null, "Drop file here") : /* @__PURE__ */ i.createElement("p", null, /* @__PURE__ */ i.createElement($r, null), " ", /* @__PURE__ */ i.createElement("span", null, o.dataFileName ?? "Replace data file"))), /* @__PURE__ */ i.createElement("div", null, ve())), o.dataFileSourceType === "url" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("div", { className: "url-source-options" }, /* @__PURE__ */ i.createElement("div", null, Ee(O, gn)), /* @__PURE__ */ i.createElement("div", null, ve())), o.dataUrl && (o.type === "chart" || o.type === "map") && Re))), Se && /* @__PURE__ */ i.createElement(Ha, { visualizationKey: null, dataKey: Me.dataFileName, configureData: Me, updateDescriptionProp: An, config: o, setConfig: b })), (gn || M) && // dataFileSourceType needs to be checked here since earlier versions did not track this state
  /* @__PURE__ */ i.createElement("div", { className: "load-data-area" }, /* @__PURE__ */ i.createElement("div", { className: "heading-3" }, gn ? `Editing ${gn}` : "Add Dataset"), /* @__PURE__ */ i.createElement(Fu, { startingTab: gn && o.datasets[gn].dataFileSourceType === "url" ? 1 : 0 }, /* @__PURE__ */ i.createElement(Lt, { title: "Upload File", icon: /* @__PURE__ */ i.createElement($r, { className: "inline-icon" }) }, d && /* @__PURE__ */ i.createElement("p", { className: "alert--info" }, "The share path set for this website is: ", d), /* @__PURE__ */ i.createElement("div", { className: oe ? "drag-active cdcdataviz-file-selector" : "cdcdataviz-file-selector", ...$n() }, /* @__PURE__ */ i.createElement("input", { ...Hn() }), oe ? /* @__PURE__ */ i.createElement("p", null, "Drop file here") : /* @__PURE__ */ i.createElement("p", null, "Drag file to this area, or ", /* @__PURE__ */ i.createElement("span", null, "select a file"), "."))), /* @__PURE__ */ i.createElement(Lt, { title: "Load from URL", icon: /* @__PURE__ */ i.createElement(Yu, { className: "inline-icon" }) }, Ee(gn && o.datasets[gn].dataFileSourceType === "url" ? o.datasets[gn].dataFileName : O, gn))), f && (Array.isArray(f) ? f.map((W, V) => /* @__PURE__ */ i.createElement("div", { className: "error-box slim mt-2", key: `error-${W}` }, /* @__PURE__ */ i.createElement("span", null, W), " ", /* @__PURE__ */ i.createElement(Ir, { className: "inline-icon dismiss-error", onClick: () => T(f.filter((nn, rn) => rn !== V)) }))) : f.message), /* @__PURE__ */ i.createElement("p", { className: "footnote" }, "Supported file types: ", Object.keys(Fn).join(", "), ". Maximum file size ", Mr, "MB."), /* @__PURE__ */ i.createElement(Lo.Provider, { value: { loadData: Vn, editingDataset: gn, config: o } }, /* @__PURE__ */ i.createElement(Dr.Buttons, null))), o.type === "dashboard" && !M && /* @__PURE__ */ i.createElement("p", null, /* @__PURE__ */ i.createElement("button", { className: "btn btn-primary", onClick: () => an(!0) }, "+ Add More Files")), Ae && /* @__PURE__ */ i.createElement("p", null, /* @__PURE__ */ i.createElement("button", { className: "btn btn-primary", onClick: () => Cn({ type: "EDITOR_SET_GLOBALACTIVE", payload: 2 }) }, "Configure your visualization")), /* @__PURE__ */ i.createElement("a", { href: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/data-map.html", target: "_blank", rel: "noopener noreferrer", className: "guidance-link" }, /* @__PURE__ */ i.createElement("div", null, /* @__PURE__ */ i.createElement("h3", null, "Get Help"), /* @__PURE__ */ i.createElement("p", null, "Documentation and examples on formatting data and configuring visualizations.")))), /* @__PURE__ */ i.createElement("div", { className: "right-col" }, /* @__PURE__ */ i.createElement(ju, { data: mn || ce })));
}
const c0 = (o) => /* @__PURE__ */ A.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024", fill: "currentColor", ...o }, /* @__PURE__ */ A.createElement("path", { d: "M489.3,377.8H80.1v-288c0-8.4-6.8-15.2-15.2-15.2H34.7c-8.4,0-15.2,6.8-15.2,15.2v318.3c0,16.7,13.6,30.3,30.3,30.3h439.5 c8.4,0,15.2-6.8,15.2-15.2v-30.3C504.5,384.6,497.7,377.8,489.3,377.8z" }), /* @__PURE__ */ A.createElement("path", { d: "M459,105H347.2c-20.3,0-30.4,24.5-16.1,38.8l30.7,30.7L292.3,244l-69.5-69.5c-11.8-11.8-31-11.8-42.9,0l-65.1,65.1 c-5.9,5.9-5.9,15.5,0,21.4l21.4,21.4c5.9,5.9,15.5,5.9,21.4,0l43.6-43.6l69.5,69.5c11.8,11.8,31,11.8,42.9,0l90.9-90.9l30.7,30.7 c14.3,14.3,38.8,4.2,38.8-16.1V120.1C474.2,111.7,467.4,105,459,105z" }), /* @__PURE__ */ A.createElement("path", { d: "M991.2,280.5h-188l125.2,125.2c4.8,4.8,12.7,5.2,17.6,0.5c30.7-28.9,51.8-67.8,57.9-111.6 C1005,287.2,998.8,280.5,991.2,280.5L991.2,280.5z" }), /* @__PURE__ */ A.createElement("path", { d: "M978.7,229.2c-6.5-94.6-82.2-170.3-176.8-176.8c-7.2-0.5-13.3,5.6-13.3,12.8v177.3h177.3 C973.1,242.5,979.2,236.4,978.7,229.2L978.7,229.2z" }), /* @__PURE__ */ A.createElement("path", { d: "M750.5,280.5v-188c0-7.6-6.6-13.8-14.1-12.7C642,93.1,569.8,175.6,573.2,274.5C576.6,376,664,459.3,765.6,458 c39.9-0.5,76.8-13.4,107.2-34.9c6.3-4.4,6.7-13.7,1.2-19.1L750.5,280.5z" }), /* @__PURE__ */ A.createElement("path", { d: "M130.7,558l1.1,7.2l5.5,11.6l-2.8,12.1l-6.1-7.7l-3.9-8.8l-8.8-1.7L102,569h-3.9l2.2,7.7l7.7,11v11l2.2,12.1l9.9,1.1 l3.9,5.5l-12.1-1.7l-3.9,2.8l1.7,11.6l-2.2,12.7l0.5,14.9l-3.9,9.9l-4.4,14.3l3.3,9.9l2.2,12.7l1.7,9.4l-2.2,12.7l1.7,8.8l3.9,8.8 l3.3,11l2.8,7.2L128,772l5.5-0.6l7.7,1.1l-8.3,2.2l2.2,3.9l-7.2,1.1l6.6,7.2l6.6,7.2l-2.2,6.1l8.8,12.7l9.4,7.7l1.1,9.4l7.7,3.9 l10.5,3.3l8.3,7.2l7.2,4.4l7.7,6.1l4.4,3.3l5,11l28.1-0.6l55.2,19.3h45.8l-1.1-4.4h22.1l8.8,5l5,5l12.7,8.8l4.4,16l12.7,6.6l7.7,3.3 l10.5-12.7l13.8,1.7l5.5,4.4l14.9,24.3l5,6.1l3.9,13.8l29.2,11.6l-1.1-9.9l-1.1-13.8l9.4-11l-1.7-3.3l9.4-7.7l5,2.8l8.3-9.4l5-6.6 h7.2l16-3.3l11.6,5h8.8l3.3-3.9l3.9,2.8l0.6,5l11.6,3.9l11-1.7l9.4,0.6l-7.7-6.1l-0.6-3.3l5-2.8l-0.5-2.8H598l-8.8,1.1l5.5-5 l2.8-3.3l2.8,2.8l16-2.2l2.2,2.8h11l6.1-1.7l8.8-0.5l8.3,3.3l5-0.6l5,7.2l9.9,0.5l5.5-4.4h5.5l11,9.4l6.1,6.6l1.7,8.8l-1.1,11 l3.9,11.6l10.5,13.2l6.1,12.7l2.2,5l11-2.2l2.8-12.1v-18.2l-5.5-14.9l-1.7-3.9l-1.1-11l-9.4-11l-1.7-13.2l0.5-11l4.4-12.1l8.3-6.6 l-0.6-5l9.9-1.7l14.3-16l6.6-5.5l7.2,1.1l6.6-12.7l9.4-5c0,0,7.2,1.1,7.7-1.7c0.5-2.8,7.7-16,7.7-16l-7.7-4.4l4.4-3.9l1.1-2.8 l-4.4-11l-4.4-5l5.5-6.1l-4.4-5.5l-1.1-11l-0.6-9.4l3.3-2.8l2.2,13.8l1.7,6.6l3.9,6.1l-1.1,9.9l6.1-12.1l3.9-9.4l0.6-5.5l-5.5-6.6 l-0.6-2.8l1.7-1.7l8.8,5.5l2.8-6.6l6.1-6.1l1.1-6.6l-1.1-7.7l0.5-3.9l1.1-5.5l4.4,6.1h2.2l6.6-1.1l6.6-0.6l8.8-2.8l-1.7-3.3 l-8.8,0.6l-8.3,2.2l-3.9,2.2l-0.6-3.9l2.8-3.3l7.2-1.7l8.8-1.7l6.1-1.7l5-3.3l11.6,2.8c0,0,5,2.8,5.5,1.1c0.6-1.7,2.2-6.1,2.2-6.1 l-3.9-4.4l-1.7-6.6l1.1-11l1.1-8.8l5-6.6l1.1-2.8l3.3,1.7l10.5-11.6h3.9l8.8-1.1l2.8-5.5h7.7l6.6-5.5l-2.5-3l-3-7.4l-3.3-2.5 l1.4-18.5l-1.7-16.8l-9.9-3l-8.6,3l-4.7-0.6l-19,44.4l-8.8,0.6l-3.9,3.3l-46.9-0.3l-11.6,10.8l-7.2,4.4l-3.3,9.4l-1.7,5l-8.3,5.5 H774l-6.1-2.8l-7.7,1.1l-9.9,3.3l0.6,5l-0.6,8.8l-5,4.4l-9.9,2.2l-15.4,7.7l-11.6,3.9l-11,0.6l-6.6-5l3.3-6.1l1.7-1.7l2.2-6.1 l4.1-2.5l5.2-9.1l-5.5-7.2l-1.1-11.6l-7.2-2.2l-9.4,6.6l3.3-7.7l5.5-7.7l-2.2-7.2l-1.7-8.3l-8.8-3.3l-7.7-6.6l-9.4,3.9l0.6,7.2 l-5.5,6.6l-4.4-2.2l-8.3,9.4v11l1.1,11l5,7.7l-0.6,16.6l-10.5,9.9l-7.7,0.6l-3.9-11.6l-3.9-8.3l1.7-11l-1.7-11l3.9-7.2l2.2-7.2 l3.9-12.1l-8.8,9.9l5-17.1l7.7-6.6l9.4-0.6l7.2-3.3H667h9.4l6.1-1.7l7.2,1.1l3.3,5.5l13.8,5l2.8-7.7l-9.4,1.1l-6.1-0.6l-8.8-6.6 l-5.5-3.3l-6.3-4.7l-6.3,1.9l-6.1-4.4l-14.3,0.6l-7.7,5l-6.1-3.9l-7.2-4.4l-10.5-0.6l10.5-14.9l-12.1,5.5l-9.9,7.7l-9.9,5.5 l-8.8,1.1l-1.1-5.5l-18.2,3.9l15.3-13.4l10.8-7.9l13.4-10.5l-5.5-0.8l-18.2,0.6l-8.3-1.7l-7.4-1.2L558,564l-8.3,0.6l-15.7-3.9 l-4.1-5l-2.2-7.7l-3.9-3.6l0.3,4.1l-3.9,6.1l-387.3,0.3L130.7,558L130.7,558z" })), y0 = (o) => /* @__PURE__ */ A.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 99.1 79.7", fill: "currentColor", ...o }, /* @__PURE__ */ A.createElement("path", { d: "M91,18.7H62c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h29c0.6,0,1-0.4,1-1v-6C92,19.1,91.6,18.7,91,18.7z M89.4,24.7H63.6 c-0.3,0-0.6-0.2-0.6-0.6v-2.9c0-0.3,0.2-0.6,0.6-0.6h25.9c0.3,0,0.6,0.2,0.6,0.6v2.9C90,24.4,89.8,24.7,89.4,24.7z" }), /* @__PURE__ */ A.createElement("path", { d: "M75,30.7H63c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h12c0.6,0,1-0.4,1-1v-6C76,31.1,75.6,30.7,75,30.7z M73.7,36.7h-9.3 c-0.2,0-0.3-0.2-0.3-0.3V33c0-0.2,0.2-0.3,0.3-0.3h9.3c0.2,0,0.3,0.2,0.3,0.3v3.3C74,36.5,73.8,36.7,73.7,36.7z" }), /* @__PURE__ */ A.createElement("path", { d: "M81,43.7H63c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h18c0.6,0,1-0.4,1-1v-6C82,44.1,81.6,43.7,81,43.7z M79.6,49.7H64.4 c-0.2,0-0.4-0.2-0.4-0.4v-3.1c0-0.2,0.2-0.4,0.4-0.4h15.1c0.2,0,0.4,0.2,0.4,0.4v3.1C80,49.5,79.8,49.7,79.6,49.7z" }), /* @__PURE__ */ A.createElement("path", { d: "M47,12.7h6c0.6,0,1,0.4,1,1v52c0,0.6-0.4,1-1,1h-6c-0.6,0-1-0.4-1-1v-52C46,13.1,46.4,12.7,47,12.7z" }), /* @__PURE__ */ A.createElement("path", { d: "M39,19.7v6c0,0.6-0.4,1-1,1H17c-0.6,0-1-0.4-1-1v-6c0-0.6,0.4-1,1-1h21C38.6,18.7,39,19.1,39,19.7z" }), /* @__PURE__ */ A.createElement("path", { d: "M39,31.7v6c0,0.6-0.4,1-1,1H8c-0.6,0-1-0.4-1-1v-6c0-0.6,0.4-1,1-1h30C38.6,30.7,39,31.1,39,31.7z" }), /* @__PURE__ */ A.createElement("path", { d: "M39,44.7v6c0,0.6-0.4,1-1,1H20c-0.6,0-1-0.4-1-1v-6c0-0.6,0.4-1,1-1h18C38.6,43.7,39,44.1,39,44.7z" }), /* @__PURE__ */ A.createElement("path", { d: "M39,57.7v6c0,0.6-0.4,1-1,1H25c-0.6,0-1-0.4-1-1v-6c0-0.6,0.4-1,1-1h13C38.6,56.7,39,57.1,39,57.7z" }), /* @__PURE__ */ A.createElement("path", { d: "M79,56.7H63c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h16c0.6,0,1-0.4,1-1v-6C80,57.1,79.6,56.7,79,56.7z M77.6,62.7H64.4 c-0.2,0-0.4-0.2-0.4-0.4v-3.2c0-0.2,0.2-0.4,0.4-0.4h13.2c0.2,0,0.4,0.2,0.4,0.4v3.2C78,62.5,77.8,62.7,77.6,62.7z" })), C0 = (o) => /* @__PURE__ */ A.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 96.3 82.6", fill: "currentColor", ...o }, /* @__PURE__ */ A.createElement("path", { d: "M83.9,61.4h-64V12.1c0-1.1-0.9-2-2-2h-5.5c-1.1,0-2,0.9-2,2v56.7c0,1.1,0.9,2,2,2h71.5c1.1,0,2-0.9,2-2v-5.5 C85.9,62.3,85,61.4,83.9,61.4z" }), /* @__PURE__ */ A.createElement("path", { d: "M67.1,47.3H26.8c-1.1,0-2,0.9-2,2v6.1c0,1.1,0.9,2,2,2h40.3c1.1,0,2-0.9,2-2v-6.1C69.1,48.2,68.2,47.3,67.1,47.3L67.1,47.3z  M52,54.6H38.2c-0.7,0-1.3-0.4-1.3-1V51c0-0.5,0.6-1,1.3-1H52c0.7,0,1.3,0.4,1.3,1v2.6C53.3,54.1,52.8,54.6,52,54.6z" }), /* @__PURE__ */ A.createElement("path", { d: "M83.9,31.7H26.8c-1.1,0-2,0.9-2,2v6.1c0,1.1,0.9,2,2,2h57.2c1.1,0,2-0.9,2-2v-6.1C85.9,32.6,85,31.7,83.9,31.7z M68.8,39 H45.2c-0.7,0-1.3-0.4-1.3-1v-2.6c0-0.5,0.6-1,1.3-1h23.7c0.7,0,1.3,0.4,1.3,1V38C70.2,38.5,69.6,39,68.8,39z" }), /* @__PURE__ */ A.createElement("path", { d: "M77,16.1H26.8c-1.1,0-2,0.9-2,2v6.1c0,1.1,0.9,2,2,2H77c1.1,0,2-0.9,2-2v-6.1C79,17,78.1,16.1,77,16.1z M58.9,23.4H36.6 c-0.7,0-1.3-0.4-1.3-1v-2.6c0-0.5,0.6-1,1.3-1h22.3c0.7,0,1.3,0.4,1.3,1v2.6C60.2,23,59.6,23.4,58.9,23.4z" })), d0 = (o) => /* @__PURE__ */ A.createElement("svg", { id: "a", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 96.31 82.55", ...o }, /* @__PURE__ */ A.createElement("path", { d: "M88.49,65.65H15.29V9.04c0-1.1-.9-2-2-2H7.82c-1.1,0-2,.9-2,2V73.13c0,1.1,.9,2,2,2H88.49c1.1,0,2-.9,2-2v-5.48c0-1.1-.9-2-2-2Z" }), /* @__PURE__ */ A.createElement("g", null, /* @__PURE__ */ A.createElement("path", { d: "M30.22,49.19c-1.79,0-3.24,1.45-3.24,3.24s1.45,3.24,3.24,3.24,3.24-1.45,3.24-3.24-1.45-3.24-3.24-3.24Z" }), /* @__PURE__ */ A.createElement("path", { d: "M33.06,35.59c-1.79,0-3.24,1.45-3.24,3.24s1.45,3.24,3.24,3.24,3.24-1.45,3.24-3.24-1.45-3.24-3.24-3.24Z" }), /* @__PURE__ */ A.createElement("path", { d: "M48.12,37.83c-1.79,0-3.24,1.45-3.24,3.24s1.45,3.24,3.24,3.24,3.24-1.45,3.24-3.24-1.45-3.24-3.24-3.24Z" }), /* @__PURE__ */ A.createElement("circle", { cx: 49.64, cy: 22.73, r: 3.24 }), /* @__PURE__ */ A.createElement("path", { d: "M64.53,19.49c-1.79,0-3.24,1.45-3.24,3.24s1.45,3.24,3.24,3.24,3.24-1.45,3.24-3.24-1.45-3.24-3.24-3.24Z" }), /* @__PURE__ */ A.createElement("path", { d: "M57.95,31.11c-1.79,0-3.24,1.45-3.24,3.24s1.45,3.24,3.24,3.24,3.24-1.45,3.24-3.24-1.45-3.24-3.24-3.24Z" }), /* @__PURE__ */ A.createElement("path", { d: "M74.53,11.54c-1.79,0-3.24,1.45-3.24,3.24s1.45,3.24,3.24,3.24,3.24-1.45,3.24-3.24-1.45-3.24-3.24-3.24Z" }))), f0 = (o) => /* @__PURE__ */ A.createElement("svg", { id: "a", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 96.31 82.55", ...o }, /* @__PURE__ */ A.createElement("path", { d: "M54.68,29.14h-4.1V8.43h2.68c.5,0,.9-.15,1.19-.46,.46-.48,.44-1.11,.42-1.62,0-.11,0-.22,0-.34s0-.24,0-.34c.02-.5,.05-1.13-.42-1.62-.29-.3-.69-.46-1.19-.46h-10.2c-.5,0-.9,.15-1.19,.46-.47,.48-.44,1.11-.42,1.62,0,.11,0,.23,0,.34s0,.23,0,.34c-.02,.5-.05,1.13,.42,1.62,.29,.3,.69,.46,1.19,.46h2.68V29.14h-4.1c-1.33,0-2.42,1.09-2.42,2.42v31.31c0,1.33,1.09,2.42,2.42,2.42h4.1v7.97h-2.68c-.5,0-.9,.15-1.19,.46-.46,.48-.44,1.11-.42,1.62,0,.11,0,.22,0,.34s0,.24,0,.34c-.02,.5-.05,1.13,.42,1.62,.29,.3,.69,.46,1.19,.46h10.2c.5,0,.9-.15,1.19-.46,.47-.48,.44-1.11,.42-1.62,0-.11,0-.23,0-.34s0-.23,0-.34c.02-.5,.05-1.13-.42-1.62-.29-.3-.69-.46-1.19-.46h-2.68v-7.97h4.1c1.33,0,2.42-1.09,2.42-2.42V31.56c0-1.33-1.09-2.42-2.42-2.42Zm-2.42,20.5v10.81h-8.2v-10.81h8.2Zm-8.2-4.84v-10.81h8.2v10.81h-8.2Z" })), p0 = (o) => /* @__PURE__ */ A.createElement("svg", { id: "a", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 96.31 82.55", ...o }, /* @__PURE__ */ A.createElement("path", { d: "M88.49,65.65H15.29V9.04c0-1.1-.9-2-2-2H7.82c-1.1,0-2,.9-2,2V73.13c0,1.1,.9,2,2,2H88.49c1.1,0,2-.9,2-2v-5.48c0-1.1-.9-2-2-2Z" }), /* @__PURE__ */ A.createElement("path", { d: "M87.91,60.65c-.02-.12-2.46-12.63-5.53-24.97-5.97-23.99-8.8-26-10.99-26-2.54,0-4.17,3.55-7.92,12.31-.67,1.56-1.4,3.27-2.18,5.02-1.66-4.14-3.14-5.9-4.84-5.9-2.39,0-4.05,3.42-7.07,9.64-5.56,11.44-13.97,28.72-29.12,28.72-.8,0-1.46,.65-1.46,1.45s.65,1.45,1.46,1.45H86.48c.43,0,.85-.19,1.12-.53,.28-.34,.39-.78,.31-1.2Zm-46.88-1.25c8.93-4.92,15.3-15.3,19.83-24.54,2.62,8.88,4.97,20.28,5.83,24.58l-25.66-.04Z" })), g0 = (o) => /* @__PURE__ */ A.createElement("svg", { id: "a", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 96.31 82.55", ...o }, /* @__PURE__ */ A.createElement("path", { d: "M18.29,39.57c0-1.03,.23-1.79,.68-2.28,.45-.49,1.06-.74,1.83-.74s1.42,.25,1.87,.74c.45,.49,.68,1.25,.68,2.29s-.23,1.79-.68,2.28c-.45,.5-1.06,.74-1.83,.74s-1.42-.25-1.87-.74c-.45-.49-.68-1.25-.68-2.29Zm1.71-.02c0,.75,.09,1.25,.26,1.5,.13,.19,.31,.28,.54,.28s.42-.09,.55-.28c.17-.25,.25-.75,.25-1.5s-.08-1.24-.25-1.49c-.13-.19-.31-.29-.55-.29s-.41,.09-.54,.28c-.17,.26-.26,.76-.26,1.5Zm2.47,9.08h-1.62l6.1-12.09h1.58l-6.05,12.09Zm3.55-3.01c0-1.03,.23-1.79,.68-2.28,.45-.49,1.07-.74,1.85-.74s1.4,.25,1.86,.74c.45,.5,.68,1.26,.68,2.28s-.23,1.79-.68,2.29c-.45,.49-1.06,.74-1.83,.74s-1.42-.25-1.87-.74c-.45-.49-.68-1.26-.68-2.29Zm1.71,0c0,.75,.09,1.24,.26,1.49,.13,.19,.31,.29,.54,.29s.41-.09,.54-.28c.17-.25,.26-.75,.26-1.5s-.08-1.24-.25-1.5c-.13-.19-.31-.28-.55-.28s-.41,.09-.54,.28c-.17,.26-.26,.76-.26,1.5Z" }), /* @__PURE__ */ A.createElement("path", { d: "M92.33,52.83v-20.42c0-1.61-1.31-2.93-2.93-2.93H6.65c-1.61,0-2.93,1.31-2.93,2.93v20.42c0,1.61,1.31,2.93,2.93,2.93H89.4c1.61,0,2.93-1.31,2.93-2.93Zm-52.34-2.93H9.58v-14.56h30.41v14.56Zm5.86-14.56h40.63v14.56H45.85v-14.56Z" })), m0 = (o) => /* @__PURE__ */ A.createElement("svg", { id: "a", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 96.31 82.55", ...o }, /* @__PURE__ */ A.createElement("defs", null, /* @__PURE__ */ A.createElement("style", null, ".b{stroke-width:3px;}.b,.c,.d{stroke-linecap:round;}.b,.c,.d,.e{stroke:#000;}.c,.d,.e{fill:none;}.d{stroke-dasharray:0 0 0 4.07;}.e{stroke-width:2px;}")), /* @__PURE__ */ A.createElement("path", { d: "M14.15,8.39v63.29c0,.87,.89,1.59,1.98,1.59h5.42c1.09,0,1.98-.72,1.98-1.59l-.13-63.29c0-.87-.89-1.59-1.98-1.59h-5.28c-1.09,0-1.98,.72-1.98,1.59Z" }), /* @__PURE__ */ A.createElement("g", null, /* @__PURE__ */ A.createElement("line", { className: "c", x1: 53.51, y1: 10.09, x2: 53.51, y2: 10.09 }), /* @__PURE__ */ A.createElement("line", { className: "d", x1: 53.51, y1: 14.16, x2: 53.51, y2: 69.05 }), /* @__PURE__ */ A.createElement("line", { className: "c", x1: 53.51, y1: 71.08, x2: 53.51, y2: 71.08 })), /* @__PURE__ */ A.createElement("g", null, /* @__PURE__ */ A.createElement("path", { className: "b", d: "M29.78,16.97h34.43" }), /* @__PURE__ */ A.createElement("path", { className: "b", d: "M29.78,21.48V12.45" }), /* @__PURE__ */ A.createElement("path", { className: "b", d: "M65.64,21.48V12.45" })), /* @__PURE__ */ A.createElement("g", null, /* @__PURE__ */ A.createElement("path", { className: "b", d: "M50.62,33.5h28.85" }), /* @__PURE__ */ A.createElement("path", { className: "b", d: "M50.62,38.02v-9.03" }), /* @__PURE__ */ A.createElement("path", { className: "b", d: "M80.67,38.02v-9.03" })), /* @__PURE__ */ A.createElement("g", null, /* @__PURE__ */ A.createElement("path", { className: "b", d: "M28.21,50.03h19.26" }), /* @__PURE__ */ A.createElement("path", { className: "b", d: "M28.21,54.55v-9.03" }), /* @__PURE__ */ A.createElement("path", { className: "b", d: "M48.27,54.55v-9.03" })), /* @__PURE__ */ A.createElement("g", null, /* @__PURE__ */ A.createElement("path", { className: "b", d: "M40.69,66.57h33.99" }), /* @__PURE__ */ A.createElement("path", { className: "b", d: "M40.69,71.08v-9.03" }), /* @__PURE__ */ A.createElement("path", { className: "b", d: "M76.1,71.08v-9.03" })), /* @__PURE__ */ A.createElement("circle", { className: "e", cx: 47.47, cy: 16.97, r: 2.2 }), /* @__PURE__ */ A.createElement("circle", { className: "e", cx: 65.64, cy: 33.5, r: 2.2 }), /* @__PURE__ */ A.createElement("circle", { className: "e", cx: 38.49, cy: 50.03, r: 2.2 }), /* @__PURE__ */ A.createElement("circle", { className: "e", cx: 58.31, cy: 66.57, r: 2.2 })), h0 = (o) => /* @__PURE__ */ A.createElement("svg", { id: "a", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 96.31 82.55", ...o }, /* @__PURE__ */ A.createElement("path", { d: "M89.56,65.41H16.36V8.8c0-1.1-.9-2-2-2h-5.48c-1.1,0-2,.9-2,2V72.89c0,1.1,.9,2,2,2H89.56c1.1,0,2-.9,2-2v-5.48c0-1.1-.9-2-2-2Z" }), /* @__PURE__ */ A.createElement("path", { d: "M54.66,55.34c-17.76,0-33.46-17.8-34.12-18.56l-.98-1.13v-4.55l3.25,3.72c.15,.18,15.47,17.53,31.86,17.53h0c7.31,0,12.37-1.68,17.27-3.3,4.31-1.42,8.77-2.9,14.44-3.05l1.5-.04v3l-1.42,.04c-5.24,.14-9.29,1.48-13.59,2.9-5.13,1.69-10.43,3.45-18.22,3.45h0Z" }), /* @__PURE__ */ A.createElement("path", { d: "M87.84,59.04c-4.73-1.24-7.41-1.66-13.05-1.93-2.82-.14-5.22,.16-8,.5-2.73,.33-5.81,.71-10.06,.79-13.13,.27-23.77-4.63-37.17-17.31v-1.57c13.19,12.48,24.31,18.13,37.15,17.88,4.2-.08,7.26-.46,9.96-.79,2.83-.34,5.27-.64,8.17-.5,5.73,.28,8.2,.62,13,1.88v1.05Z" }), /* @__PURE__ */ A.createElement("path", { d: "M57.02,49.28c-19.55,0-30.91-14.65-37.69-23.41v-1.54c6.67,8.61,18.64,23.95,37.69,23.95,5.87,0,14.11-3.23,18.39-6.23,2.43-1.7,3.84-2.77,4.87-3.55,2.24-1.7,2.7-2.05,7.71-4.44l-.03,1.12c-4.92,2.34-4.91,2.47-7.08,4.12-1.04,.79-2.45,1.86-4.9,3.57-4.4,3.08-12.9,6.41-18.96,6.41Z" })), v0 = (o) => /* @__PURE__ */ A.createElement("svg", { id: "Layer_1", "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 99.1 79.69", ...o }, /* @__PURE__ */ A.createElement("defs", null, /* @__PURE__ */ A.createElement("style", null, ".cls-1{fill:#231f20;}")), /* @__PURE__ */ A.createElement("rect", { className: "cls-1", x: 46.87, y: 5.79, width: 8.32, height: 67.79, rx: 1 }), /* @__PURE__ */ A.createElement("rect", { className: "cls-1", x: 23.98, y: 17.65, width: 8.32, height: 23.31, rx: 1, transform: "translate(57.44 1.16) rotate(90)" }), /* @__PURE__ */ A.createElement("rect", { className: "cls-1", x: 19.53, y: 25.99, width: 8.32, height: 32.21, rx: 1, transform: "translate(65.79 18.41) rotate(90)" }), /* @__PURE__ */ A.createElement("rect", { className: "cls-1", x: 27.33, y: 60.4, width: 8.32, height: 14.6, rx: 1, transform: "translate(99.19 36.2) rotate(90)" }), /* @__PURE__ */ A.createElement("path", { className: "cls-1", d: "M81,52.74v4.32H64.55V52.74H81m1-2H63.55a1,1,0,0,0-1,1v6.32a1,1,0,0,0,1,1H82a1,1,0,0,0,1-1V51.74a1,1,0,0,0-1-1Z" }), /* @__PURE__ */ A.createElement("path", { className: "cls-1", d: "M90,14.41v4.33H64.55V14.41H90m1-2H63.55a1,1,0,0,0-1,1v6.33a1,1,0,0,0,1,1H91a1,1,0,0,0,1-1V13.41a1,1,0,0,0-1-1Z" }));
function S0() {
  const { config: o, tempConfig: f } = A.useContext(kt), c = A.useContext(Ot);
  A.useEffect(() => {
    f && c({ type: "EDITOR_SAVE", payload: f });
  }, []);
  const d = ({ icon: b, label: T, type: y, subType: O = void 0, orientation: Nn = void 0, stacked: w = !1, generalType: Tn = "data" }) => {
    let M = !1, an = !1, gn;
    if (y === "map" && o.general) {
      let mn = o.general.geoType;
      M = O === mn;
    }
    y === "chart" && (M = O === o.visualizationType, an = Nn === o.orientation && w === !0), (y === "dashboard" || y === "data-bite" || y === "markup-include") && (M = !0), y === "chart" && w ? gn = o.type === y && M && o.visualizationSubType === "stacked" ? "active" : "" : y === "chart" && !w && o.visualizationSubType !== "stacked" && (gn = o.type === y && M ? "active" : ""), y !== "chart" && (gn = o.type === y && M && !an ? "active" : "");
    let yn = () => {
      if (y === o.type)
        O !== o.visualizationType && c({ type: "EDITOR_SET_CONFIG", payload: { ...o, newViz: !0, visualizationType: O } }), c({ type: "EDITOR_SET_GLOBALACTIVE", payload: 1 });
      else if (!o.type || window.confirm("Changing visualization type will clear configuration settings. Do you want to continue?")) {
        let Kn = {
          newViz: !0,
          datasets: {},
          type: y
        };
        y === "map" ? Kn.general = {
          ...Kn.general,
          geoType: O,
          type: Tn
        } : Kn.visualizationType = O, y === "chart" && (Kn.visualizationSubType = w ? "stacked" : "regular", Kn.orientation = Nn), c({ type: "EDITOR_SET_CONFIG", payload: Kn }), c({ type: "EDITOR_SET_GLOBALACTIVE", payload: 1 });
      }
    };
    return /* @__PURE__ */ i.createElement("button", { className: gn, onClick: () => yn(), "aria-label": T }, b, /* @__PURE__ */ i.createElement("span", { className: "mt-1" }, T));
  };
  return /* @__PURE__ */ i.createElement("div", { className: "choose-vis" }, /* @__PURE__ */ i.createElement("a", { href: "https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/index.html", target: "_blank", rel: "noopener noreferrer", className: "guidance-link", style: { marginTop: 0, marginBottom: "2rem" } }, /* @__PURE__ */ i.createElement("div", null, /* @__PURE__ */ i.createElement("p", null, "For more information on the types of data visualizations in the WCMS, including examples and best practices, ", /* @__PURE__ */ i.createElement("u", null, "see the WCMS Features Gallery"), "."))), /* @__PURE__ */ i.createElement("div", { className: "heading-2" }, "General"), /* @__PURE__ */ i.createElement("ul", { className: "grid cove-temp" }, " ", /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement(on, { position: "right" }, /* @__PURE__ */ i.createElement(on.Target, null, /* @__PURE__ */ i.createElement(d, { label: "Dashboard", type: "dashboard", icon: /* @__PURE__ */ i.createElement(c0, null) })), /* @__PURE__ */ i.createElement(on.Content, null, "Present multiple data visualizations with shared filter controls."))), /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement(on, null, /* @__PURE__ */ i.createElement(on.Target, null, /* @__PURE__ */ i.createElement(d, { label: "Data Bite", type: "data-bite", icon: /* @__PURE__ */ i.createElement(Pa, null) })), /* @__PURE__ */ i.createElement(on.Content, null, "Highlight a single aggregated value (e.g., sum or median)."))), /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement(on, null, /* @__PURE__ */ i.createElement(on.Target, null, /* @__PURE__ */ i.createElement(d, { label: "Waffle Chart", type: "waffle-chart", subType: "Waffle", icon: /* @__PURE__ */ i.createElement(La, null) })), /* @__PURE__ */ i.createElement(on.Content, null, "Highlight a piece of data in relationship to a data set."))), /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement(on, null, /* @__PURE__ */ i.createElement(on.Target, null, /* @__PURE__ */ i.createElement(d, { label: "Gauge Chart", type: "waffle-chart", subType: "Gauge", icon: /* @__PURE__ */ i.createElement(g0, null) })), /* @__PURE__ */ i.createElement(on.Content, null, "Specify the calculation of a single data point (such as a percentage value) and present it on a horizontal scale.")))), /* @__PURE__ */ i.createElement("div", { className: "heading-2" }, "Charts"), /* @__PURE__ */ i.createElement("ul", { className: "grid cove-temp" }, /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement(on, { position: "right" }, /* @__PURE__ */ i.createElement(on.Target, null, /* @__PURE__ */ i.createElement(d, { label: "Bar", type: "chart", subType: "Bar", orientation: "vertical", icon: /* @__PURE__ */ i.createElement(ka, null) })), /* @__PURE__ */ i.createElement(on.Content, null, "Use bars to show comparisons between data categories."))), /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement(on, null, /* @__PURE__ */ i.createElement(on.Target, null, /* @__PURE__ */ i.createElement(d, { label: "Line", type: "chart", subType: "Line", orientation: "vertical", icon: /* @__PURE__ */ i.createElement(Oa, null) })), /* @__PURE__ */ i.createElement(on.Content, null, "Present one or more data trends over time."))), /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement(on, null, /* @__PURE__ */ i.createElement(on.Target, null, /* @__PURE__ */ i.createElement(d, { label: "Pie", type: "chart", subType: "Pie", orientation: "vertical", icon: /* @__PURE__ */ i.createElement(Ba, null) })), /* @__PURE__ */ i.createElement(on.Content, null, "Present the numerical proportions of a data series."))), /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement(on, null, /* @__PURE__ */ i.createElement(on.Target, null, /* @__PURE__ */ i.createElement(d, { label: "Paired Bar", type: "chart", subType: "Paired Bar", orientation: "horizontal", icon: /* @__PURE__ */ i.createElement(y0, null) })), /* @__PURE__ */ i.createElement(on.Content, null, "Use paired bars to show comparisons between two different data categories."))), /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement(on, null, /* @__PURE__ */ i.createElement(on.Target, null, /* @__PURE__ */ i.createElement(d, { label: "Deviation Bar", type: "chart", subType: "Deviation Bar", orientation: "horizontal", stacked: !1, icon: /* @__PURE__ */ i.createElement(v0, null) })), /* @__PURE__ */ i.createElement(on.Content, null, "Use deviation bars to display how individual values differ from a target."))), /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement(on, null, /* @__PURE__ */ i.createElement(on.Target, null, /* @__PURE__ */ i.createElement(d, { label: "Horizontal Bar (Stacked)", type: "chart", subType: "Bar", orientation: "horizontal", stacked: !0, icon: /* @__PURE__ */ i.createElement(C0, null) })), /* @__PURE__ */ i.createElement(on.Content, null, "Use bars to show comparisons between data categories.")))), /* @__PURE__ */ i.createElement("ul", { className: "grid cove-temp" }, /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement(on, null, /* @__PURE__ */ i.createElement(on.Target, null, /* @__PURE__ */ i.createElement(d, { label: "Box Plot", type: "chart", subType: "Box Plot", orientation: "vertical", icon: /* @__PURE__ */ i.createElement(f0, null) })), /* @__PURE__ */ i.createElement(on.Content, null, "Display a box plot"))), /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement(on, null, /* @__PURE__ */ i.createElement(on.Target, null, /* @__PURE__ */ i.createElement(d, { label: "Scatter Plot", type: "chart", subType: "Scatter Plot", orientation: "vertical", icon: /* @__PURE__ */ i.createElement(d0, null) })), /* @__PURE__ */ i.createElement(on.Content, null, "Display a scatter plot"))), /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement(on, null, /* @__PURE__ */ i.createElement(on.Target, null, /* @__PURE__ */ i.createElement(d, { label: "Area Chart", type: "chart", subType: "Area Chart", orientation: "vertical", icon: /* @__PURE__ */ i.createElement(p0, null) })), /* @__PURE__ */ i.createElement(on.Content, null, "Display an area chart"))), /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement(on, null, /* @__PURE__ */ i.createElement(on.Target, null, /* @__PURE__ */ i.createElement(d, { label: "Forecast Chart", type: "chart", subType: "Forecasting", orientation: "vertical", icon: /* @__PURE__ */ i.createElement(h0, null) })), /* @__PURE__ */ i.createElement(on.Content, null, "Display a forecasting chart"))), /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement(on, null, /* @__PURE__ */ i.createElement(on.Target, null, /* @__PURE__ */ i.createElement(d, { label: "Forest Plot", type: "chart", subType: "Forest Plot", orientation: "vertical", icon: /* @__PURE__ */ i.createElement(m0, null) })), /* @__PURE__ */ i.createElement(on.Content, null, "Display a forest plot")))), /* @__PURE__ */ i.createElement("div", { className: "heading-2" }, "Maps"), /* @__PURE__ */ i.createElement("ul", { className: "grid cove-temp" }, /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement(on, { position: "right" }, /* @__PURE__ */ i.createElement(on.Target, null, /* @__PURE__ */ i.createElement(d, { label: "United States (State- or County-Level)", type: "map", subType: "us", icon: /* @__PURE__ */ i.createElement(Pr, null) })), /* @__PURE__ */ i.createElement(on.Content, null, "Present a U.S. choropleth map at state or county level."))), /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement(on, { position: "right" }, /* @__PURE__ */ i.createElement(on.Target, null, /* @__PURE__ */ i.createElement(d, { label: "United States (HHS Regions)", type: "map", subType: "us-region", icon: /* @__PURE__ */ i.createElement(xa, null) })), /* @__PURE__ */ i.createElement(on.Content, null, "Present a U.S. choropleth map at state or county level."))), /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement(on, null, /* @__PURE__ */ i.createElement(on.Target, null, /* @__PURE__ */ i.createElement(d, { label: "World", type: "map", subType: "world", icon: /* @__PURE__ */ i.createElement(Fa, null) })), /* @__PURE__ */ i.createElement(on.Content, null, "Present a choropleth map of the world."))), /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement(on, null, /* @__PURE__ */ i.createElement(on.Target, null, /* @__PURE__ */ i.createElement(d, { label: "U.S. State", type: "map", subType: "single-state", icon: /* @__PURE__ */ i.createElement(Wa, null) })), /* @__PURE__ */ i.createElement(on.Content, null, "Present a choropleth map of an individual U.S. state."))), /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement(on, null, /* @__PURE__ */ i.createElement(on.Target, null, /* @__PURE__ */ i.createElement(d, { label: "U.S. Geocode", type: "map", subType: "us-county", generalType: "us-geocode", icon: /* @__PURE__ */ i.createElement(Pr, null) })), /* @__PURE__ */ i.createElement(on.Content, null, "United States GeoCode")))));
}
function w0({ containerEl: o }) {
  const { config: f, setTempConfig: c, hostname: d, isDebug: b } = A.useContext(kt);
  let { type: T } = f;
  switch (T) {
    case "map":
      return /* @__PURE__ */ i.createElement(lt, { component: "CdcMap" }, /* @__PURE__ */ i.createElement(Da, { isEditor: !0, isDebug: b, config: f, hostname: d, setConfig: c, containerEl: o }));
    case "waffle-chart":
      if (f.visualizationType === "Waffle" || f.visualizationType === "Gauge")
        return /* @__PURE__ */ i.createElement(lt, { component: "CdcWaffleChart" }, /* @__PURE__ */ i.createElement(ba, { isEditor: !0, isDebug: b, config: f, setConfig: c }));
      break;
    case "chart":
      return /* @__PURE__ */ i.createElement(lt, { component: "CdcChart" }, /* @__PURE__ */ i.createElement(Aa, { isEditor: !0, isDebug: b, config: f, setConfig: c }));
    case "dashboard":
      return /* @__PURE__ */ i.createElement(lt, { component: "CdcDashboard" }, /* @__PURE__ */ i.createElement(Ma, { isEditor: !0, isDebug: b, config: f }));
    case "data-bite":
      return /* @__PURE__ */ i.createElement(lt, { component: "CdcDashboard" }, /* @__PURE__ */ i.createElement(wa, { isEditor: !0, isDebug: b, config: f, setConfig: c }));
    case "markup-include":
      return /* @__PURE__ */ i.createElement(lt, { component: "CdcDashboard" }, /* @__PURE__ */ i.createElement(Sa, { isEditor: !0, isDebug: b, config: f, setConfig: c }));
    default:
      return /* @__PURE__ */ i.createElement("p", null, "No visualization type selected.");
  }
}
const pa = (o) => {
  let f = { ...o };
  return f.type === "dashboard" ? (f.datasets && Object.keys(f.datasets).forEach((c) => {
    delete f.datasets[c].formattedData, f.datasets[c].dataUrl && delete f.datasets[c].data;
  }), f.visualizations && Object.keys(f.visualizations).forEach((c) => {
    f.visualizations[c] = pr.omit(f.visualizations[c], ["runtime", "formattedData", "data"]);
  })) : (delete f.runtime, delete f.formattedData, f.dataUrl && delete f.data), f;
}, M0 = (o) => {
  if (o !== null) {
    let f = pa(o);
    const c = JSON.stringify(f), d = new CustomEvent("updateVizConfig", { detail: c, bubbles: !0 });
    window.dispatchEvent(d);
  }
}, A0 = (o) => {
  var f;
  if (o.type === "dashboard") {
    let c = !1, d;
    if (o.data || o.dataUrl) {
      c = !0, d = { ...o };
      const b = o.dataFileName || "dataset-1";
      d.datasets = {}, d.datasets[b] = {
        ...pr.pick(o, ["data", "dataUrl", "dataFileSourceType"]),
        dataFileName: b
      }, Object.keys(d.visualizations).forEach((y) => {
        const O = { dataKey: b, ...pr.pick(d, "dataDescription", "formattedData") };
        d.visualizations[y] = { ...d.visualizations[y], ...O };
      }), d = { ...d, ...{ data: [], dataUrl: "", dataFileName: "", dataFileSourceType: "", dataDescription: [], formattedData: [] } };
    }
    if ((f = o.dashboard) != null && f.filters) {
      c = !0, d = { ...o };
      const b = { ...d.dashboard };
      b.sharedFilters || (b.sharedFilters = []);
      const T = b.filters.map((y) => ({ ...y, key: y.label, showDropdown: !0, usedBy: Object.keys(d.visualizations) }));
      b.sharedFilters = [...b.sharedFilters, ...T], d.dashboard = { ...b, filters: void 0 };
    }
    if (c)
      return d;
  }
  return o;
};
const b0 = (o, f) => {
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
}, D0 = Ra(b0), R0 = ({ config: o, hostname: f, containerEl: c, sharepath: d, isDebug: b }) => {
  const T = A.useMemo(() => {
    let an = 0;
    return (o != null && o.data || o != null && o.dataUrl) && (o != null && o.type) && (an = 2), { config: A0(o || { newViz: !0, errors: [], currentViewport: "lg" }), errors: [], currentViewport: "lg", globalActive: an, sharepath: d, isDebug: b, hostname: f };
  }, [o]);
  A.useEffect(() => {
    var an;
    Er && ((an = Er) == null || an.init());
  }, []);
  const [y, O] = A.useReducer(D0, T), Nn = (an) => {
    M0(JSON.parse(JSON.stringify(an))), O({ type: "EDITOR_TEMP_SAVE", payload: an });
  }, w = new ha((an) => {
    const gn = an[0];
    let { width: yn } = gn.contentRect, mn = va(yn);
    O({ type: "EDITOR_SET_VIEWPORT", payload: mn });
  }), Tn = A.useCallback((an) => {
    an !== null && w.observe(an);
  }, []);
  A.useEffect(() => {
    let an = pa(y.config);
    const gn = JSON.stringify(an), yn = new CustomEvent("updateVizConfig", { detail: gn });
    window.dispatchEvent(yn);
  }, [y.config]);
  const M = A.useMemo(() => {
    y.config.type !== "dashboard" ? y.config.formattedData : y.config.datasets && Object.keys(y.config.datasets).length > 0;
  }, [y.config.type, y.config.datasets]);
  return /* @__PURE__ */ i.createElement(Na, null, /* @__PURE__ */ i.createElement(kt.Provider, { value: { ...y, setTempConfig: Nn } }, /* @__PURE__ */ i.createElement(Ot.Provider, { value: O }, /* @__PURE__ */ i.createElement("div", { className: `cdc-open-viz-module cdc-editor ${y.currentViewport}`, ref: Tn }, /* @__PURE__ */ i.createElement(Bu, { className: "top-level" }, /* @__PURE__ */ i.createElement(Lt, { title: "1. Choose Visualization Type", className: "choose-type" }, /* @__PURE__ */ i.createElement(S0, null)), /* @__PURE__ */ i.createElement(Lt, { title: "2. Import Data", className: "data-designer", disableRule: !y.config.type }, /* @__PURE__ */ i.createElement(s0, null)), /* @__PURE__ */ i.createElement(Lt, { title: "3. Configure", className: "configure", disableRule: M }, /* @__PURE__ */ i.createElement(w0, { containerEl: c })))))), /* @__PURE__ */ i.createElement(Ea, null));
}, N0 = {
  theme: "theme-blue"
}, E0 = [
  [
    {
      width: 12,
      widget: "table1707840146431"
    },
    {},
    {}
  ]
], T0 = {
  table1707840146431: {
    newViz: !0,
    openModal: !1,
    uid: "table1707840146431",
    table: {
      label: "Data Table",
      show: !0,
      showDownloadUrl: !1,
      showVertical: !0,
      expanded: !0
    },
    type: "table",
    visualizationType: "table",
    dataDescription: {
      horizontal: !1,
      series: !1
    },
    columns: {},
    dataFormat: {},
    formattedData: [
      {
        Race: "Hispanic or Latino",
        "Age-adjusted rate": "644.2"
      },
      {
        Race: "Non-Hispanic American Indian",
        "Age-adjusted rate": "6360.1"
      },
      {
        Race: "Non-Hispanic Black",
        "Age-adjusted rate": "563.7"
      },
      {
        Race: "Non-Hispanic Asian or Pacific Islander",
        "Age-adjusted rate": "202.5"
      },
      {
        Race: "Non-Hispanic White",
        "Age-adjusted rate": "183.6"
      }
    ],
    dataKey: "valid-data-chart.csv",
    data: [
      {
        Race: "Hispanic or Latino",
        "Age-adjusted rate": "644.2"
      },
      {
        Race: "Non-Hispanic American Indian",
        "Age-adjusted rate": "6360.1"
      },
      {
        Race: "Non-Hispanic Black",
        "Age-adjusted rate": "563.7"
      },
      {
        Race: "Non-Hispanic Asian or Pacific Islander",
        "Age-adjusted rate": "202.5"
      },
      {
        Race: "Non-Hispanic White",
        "Age-adjusted rate": "183.6"
      }
    ]
  }
}, I0 = {
  label: "Data Table",
  show: !1,
  showDownloadUrl: !1,
  showVertical: !0
}, P0 = !0, L0 = {
  "valid-data-chart.csv": {
    data: [
      {
        Race: "Hispanic or Latino",
        "Age-adjusted rate": "644.2"
      },
      {
        Race: "Non-Hispanic American Indian",
        "Age-adjusted rate": "6360.1"
      },
      {
        Race: "Non-Hispanic Black",
        "Age-adjusted rate": "563.7"
      },
      {
        Race: "Non-Hispanic Asian or Pacific Islander",
        "Age-adjusted rate": "202.5"
      },
      {
        Race: "Non-Hispanic White",
        "Age-adjusted rate": "183.6"
      }
    ],
    dataFileSize: 178,
    dataFileName: "valid-data-chart.csv",
    dataFileSourceType: "file",
    dataFileFormat: "CSV",
    preview: !0
  }
}, k0 = [
  {
    Race: "Hispanic or Latino",
    "Age-adjusted rate": "644.2"
  },
  {
    Race: "Non-Hispanic American Indian",
    "Age-adjusted rate": "6360.1"
  },
  {
    Race: "Non-Hispanic Black",
    "Age-adjusted rate": "563.7"
  },
  {
    Race: "Non-Hispanic Asian or Pacific Islander",
    "Age-adjusted rate": "202.5"
  },
  {
    Race: "Non-Hispanic White",
    "Age-adjusted rate": "183.6"
  }
], O0 = "dashboard", B0 = {}, F0 = {
  dashboard: N0,
  rows: E0,
  visualizations: T0,
  table: I0,
  newViz: P0,
  datasets: L0,
  data: k0,
  type: O0,
  runtime: B0
}, W0 = {
  theme: "theme-blue"
}, H0 = [
  [
    {
      width: 12
    },
    {},
    {}
  ]
], x0 = {}, G0 = {
  label: "Data Table",
  show: !0,
  showDownloadUrl: !1,
  showVertical: !0
}, V0 = !0, K0 = {
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
}, q0 = [
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
], z0 = "dashboard", X0 = {
  dashboard: W0,
  rows: H0,
  visualizations: x0,
  table: G0,
  newViz: V0,
  datasets: K0,
  data: q0,
  type: z0
}, Mi = {
  title: "Components/Pages/CdcEditor",
  component: R0
}, No = {
  args: {
    config: X0
  }
}, Eo = {
  args: {
    config: F0
  }
};
var Zr, Qr, na;
No.parameters = {
  ...No.parameters,
  docs: {
    ...(Zr = No.parameters) == null ? void 0 : Zr.docs,
    source: {
      originalSource: `{
  args: {
    config: BlankConfig
  }
}`,
      ...(na = (Qr = No.parameters) == null ? void 0 : Qr.docs) == null ? void 0 : na.source
    }
  }
};
var ea, ta, oa;
Eo.parameters = {
  ...Eo.parameters,
  docs: {
    ...(ea = Eo.parameters) == null ? void 0 : ea.docs,
    source: {
      originalSource: `{
  args: {
    config: StandAloneTableConfig
  }
}`,
      ...(oa = (ta = Eo.parameters) == null ? void 0 : ta.docs) == null ? void 0 : oa.source
    }
  }
};
const Ai = ["DefaultEditor", "StandAloneTable"];
export {
  No as DefaultEditor,
  Eo as StandAloneTable,
  Ai as __namedExportsOrder,
  Mi as default
};
