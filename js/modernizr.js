/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-cssgradients-flexbox-mediaqueries !*/
!(function (e, t, n) {
  function r(e, t) {
    return typeof e === t;
  }
  function o() {
    var e, t, n, o, i, s, a;
    for (var l in v)
      if (v.hasOwnProperty(l)) {
        if (
          ((e = []),
          (t = v[l]),
          t.name &&
            (e.push(t.name.toLowerCase()),
            t.options && t.options.aliases && t.options.aliases.length))
        )
          for (n = 0; n < t.options.aliases.length; n++)
            e.push(t.options.aliases[n].toLowerCase());
        for (o = r(t.fn, "function") ? t.fn() : t.fn, i = 0; i < e.length; i++)
          (s = e[i]),
            (a = s.split(".")),
            1 === a.length
              ? (Modernizr[a[0]] = o)
              : (!Modernizr[a[0]] ||
                  Modernizr[a[0]] instanceof Boolean ||
                  (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])),
                (Modernizr[a[0]][a[1]] = o)),
            w.push((o ? "" : "no-") + a.join("-"));
      }
  }
  function i() {
    return "function" != typeof t.createElement
      ? t.createElement(arguments[0])
      : _
      ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0])
      : t.createElement.apply(t, arguments);
  }
  function s() {
    var e = t.body;
    return e || ((e = i(_ ? "svg" : "body")), (e.fake = !0)), e;
  }
  function a(e, n, r, o) {
    var a,
      l,
      u,
      f,
      d = "modernizr",
      c = i("div"),
      p = s();
    if (parseInt(r, 10))
      for (; r--; )
        (u = i("div")), (u.id = o ? o[r] : d + (r + 1)), c.appendChild(u);
    return (
      (a = i("style")),
      (a.type = "text/css"),
      (a.id = "s" + d),
      (p.fake ? p : c).appendChild(a),
      p.appendChild(c),
      a.styleSheet
        ? (a.styleSheet.cssText = e)
        : a.appendChild(t.createTextNode(e)),
      (c.id = d),
      p.fake &&
        ((p.style.background = ""),
        (p.style.overflow = "hidden"),
        (f = x.style.overflow),
        (x.style.overflow = "hidden"),
        x.appendChild(p)),
      (l = n(c, e)),
      p.fake
        ? (p.parentNode.removeChild(p), (x.style.overflow = f), x.offsetHeight)
        : c.parentNode.removeChild(c),
      !!l
    );
  }
  function l(e, t) {
    return !!~("" + e).indexOf(t);
  }
  function u(e) {
    return e
      .replace(/([a-z])-([a-z])/g, function (e, t, n) {
        return t + n.toUpperCase();
      })
      .replace(/^-/, "");
  }
  function f(e, t) {
    return function () {
      return e.apply(t, arguments);
    };
  }
  function d(e, t, n) {
    var o;
    for (var i in e)
      if (e[i] in t)
        return n === !1
          ? e[i]
          : ((o = t[e[i]]), r(o, "function") ? f(o, n || t) : o);
    return !1;
  }
  function c(t, n, r) {
    var o;
    if ("getComputedStyle" in e) {
      o = getComputedStyle.call(e, t, n);
      var i = e.console;
      if (null !== o) r && (o = o.getPropertyValue(r));
      else if (i) {
        var s = i.error ? "error" : "log";
        i[s].call(
          i,
          "getComputedStyle returning null, its possible modernizr test results are inaccurate",
        );
      }
    } else o = !n && t.currentStyle && t.currentStyle[r];
    return o;
  }
  function p(e) {
    return e
      .replace(/([A-Z])/g, function (e, t) {
        return "-" + t.toLowerCase();
      })
      .replace(/^ms-/, "-ms-");
  }
  function m(t, r) {
    var o = t.length;
    if ("CSS" in e && "supports" in e.CSS) {
      for (; o--; ) if (e.CSS.supports(p(t[o]), r)) return !0;
      return !1;
    }
    if ("CSSSupportsRule" in e) {
      for (var i = []; o--; ) i.push("(" + p(t[o]) + ":" + r + ")");
      return (
        (i = i.join(" or ")),
        a(
          "@supports (" + i + ") { #modernizr { position: absolute; } }",
          function (e) {
            return "absolute" == c(e, null, "position");
          },
        )
      );
    }
    return n;
  }
  function g(e, t, o, s) {
    function a() {
      d && (delete E.style, delete E.modElem);
    }
    if (((s = r(s, "undefined") ? !1 : s), !r(o, "undefined"))) {
      var f = m(e, o);
      if (!r(f, "undefined")) return f;
    }
    for (
      var d, c, p, g, y, h = ["modernizr", "tspan", "samp"];
      !E.style && h.length;

    )
      (d = !0), (E.modElem = i(h.shift())), (E.style = E.modElem.style);
    for (p = e.length, c = 0; p > c; c++)
      if (
        ((g = e[c]),
        (y = E.style[g]),
        l(g, "-") && (g = u(g)),
        E.style[g] !== n)
      ) {
        if (s || r(o, "undefined")) return a(), "pfx" == t ? g : !0;
        try {
          E.style[g] = o;
        } catch (v) {}
        if (E.style[g] != y) return a(), "pfx" == t ? g : !0;
      }
    return a(), !1;
  }
  function y(e, t, n, o, i) {
    var s = e.charAt(0).toUpperCase() + e.slice(1),
      a = (e + " " + P.join(s + " ") + s).split(" ");
    return r(t, "string") || r(t, "undefined")
      ? g(a, t, o, i)
      : ((a = (e + " " + T.join(s + " ") + s).split(" ")), d(a, t, n));
  }
  function h(e, t, r) {
    return y(e, n, n, t, r);
  }
  var v = [],
    C = {
      _version: "3.6.0",
      _config: {
        classPrefix: "",
        enableClasses: !0,
        enableJSClass: !0,
        usePrefixes: !0,
      },
      _q: [],
      on: function (e, t) {
        var n = this;
        setTimeout(function () {
          t(n[e]);
        }, 0);
      },
      addTest: function (e, t, n) {
        v.push({ name: e, fn: t, options: n });
      },
      addAsyncTest: function (e) {
        v.push({ name: null, fn: e });
      },
    },
    Modernizr = function () {};
  (Modernizr.prototype = C), (Modernizr = new Modernizr());
  var w = [],
    S = C._config.usePrefixes
      ? " -webkit- -moz- -o- -ms- ".split(" ")
      : ["", ""];
  C._prefixes = S;
  var x = t.documentElement,
    _ = "svg" === x.nodeName.toLowerCase();
  Modernizr.addTest("cssgradients", function () {
    for (
      var e,
        t = "background-image:",
        n = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
        r = "",
        o = 0,
        s = S.length - 1;
      s > o;
      o++
    )
      (e = 0 === o ? "to " : ""),
        (r += t + S[o] + "linear-gradient(" + e + "left top, #9f9, white);");
    Modernizr._config.usePrefixes && (r += t + "-webkit-" + n);
    var a = i("a"),
      l = a.style;
    return (l.cssText = r), ("" + l.backgroundImage).indexOf("gradient") > -1;
  });
  var b = (function () {
    var t = e.matchMedia || e.msMatchMedia;
    return t
      ? function (e) {
          var n = t(e);
          return (n && n.matches) || !1;
        }
      : function (t) {
          var n = !1;
          return (
            a(
              "@media " + t + " { #modernizr { position: absolute; } }",
              function (t) {
                n =
                  "absolute" ==
                  (e.getComputedStyle
                    ? e.getComputedStyle(t, null)
                    : t.currentStyle
                  ).position;
              },
            ),
            n
          );
        };
  })();
  (C.mq = b), Modernizr.addTest("mediaqueries", b("only all"));
  var z = "Moz O ms Webkit",
    P = C._config.usePrefixes ? z.split(" ") : [];
  C._cssomPrefixes = P;
  var T = C._config.usePrefixes ? z.toLowerCase().split(" ") : [];
  C._domPrefixes = T;
  var k = { elem: i("modernizr") };
  Modernizr._q.push(function () {
    delete k.elem;
  });
  var E = { style: k.elem.style };
  Modernizr._q.unshift(function () {
    delete E.style;
  }),
    (C.testAllProps = y),
    (C.testAllProps = h),
    Modernizr.addTest("flexbox", h("flexBasis", "1px", !0)),
    o(),
    delete C.addTest,
    delete C.addAsyncTest;
  for (var q = 0; q < Modernizr._q.length; q++) Modernizr._q[q]();
  e.Modernizr = Modernizr;
})(window, document);
