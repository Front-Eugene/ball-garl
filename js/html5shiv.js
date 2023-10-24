/**
 * @preserve HTML5 Shiv 3.7.3 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
 */
!(function (e, t) {
  var n,
    r,
    a = e.html5 || {},
    o = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
    c =
      /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
    i = "_html5shiv",
    l = 0,
    m = {};
  function s() {
    var e = f.elements;
    return "string" == typeof e ? e.split(" ") : e;
  }
  function u(e) {
    var t = m[e[i]];
    return t || ((t = {}), l++, (e[i] = l), (m[l] = t)), t;
  }
  function d(e, n, a) {
    return (
      n || (n = t),
      r
        ? n.createElement(e)
        : (a || (a = u(n)),
          !(i = a.cache[e]
            ? a.cache[e].cloneNode()
            : c.test(e)
            ? (a.cache[e] = a.createElem(e)).cloneNode()
            : a.createElem(e)).canHaveChildren ||
          o.test(e) ||
          i.tagUrn
            ? i
            : a.frag.appendChild(i))
    );
    var i;
  }
  function h(e) {
    e || (e = t);
    var a = u(e);
    return (
      !f.shivCSS ||
        n ||
        a.hasCSS ||
        (a.hasCSS = !!(function (e, t) {
          var n = e.createElement("p"),
            r = e.getElementsByTagName("head")[0] || e.documentElement;
          return (
            (n.innerHTML = "x<style>" + t + "</style>"),
            r.insertBefore(n.lastChild, r.firstChild)
          );
        })(
          e,
          "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}"
        )),
      r ||
        (function (e, t) {
          t.cache ||
            ((t.cache = {}),
            (t.createElem = e.createElement),
            (t.createFrag = e.createDocumentFragment),
            (t.frag = t.createFrag())),
            (e.createElement = function (n) {
              return f.shivMethods ? d(n, e, t) : t.createElem(n);
            }),
            (e.createDocumentFragment = Function(
              "h,f",
              "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" +
                s()
                  .join()
                  .replace(/[\w\-:]+/g, function (e) {
                    return (
                      t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
                    );
                  }) +
                ");return n}"
            )(f, t.frag));
        })(e, a),
      e
    );
  }
  !(function () {
    try {
      var e = t.createElement("a");
      (e.innerHTML = "<xyz></xyz>"),
        (n = "hidden" in e),
        (r =
          1 == e.childNodes.length ||
          (function () {
            t.createElement("a");
            var e = t.createDocumentFragment();
            return (
              void 0 === e.cloneNode ||
              void 0 === e.createDocumentFragment ||
              void 0 === e.createElement
            );
          })());
    } catch (e) {
      (n = !0), (r = !0);
    }
  })();
  var f = {
    elements:
      a.elements ||
      "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
    version: "3.7.3",
    shivCSS: !1 !== a.shivCSS,
    supportsUnknownElements: r,
    shivMethods: !1 !== a.shivMethods,
    type: "default",
    shivDocument: h,
    createElement: d,
    createDocumentFragment: function (e, n) {
      if ((e || (e = t), r)) return e.createDocumentFragment();
      for (
        var a = (n = n || u(e)).frag.cloneNode(), o = 0, c = s(), i = c.length;
        o < i;
        o++
      )
        a.createElement(c[o]);
      return a;
    },
    addElements: function (e, t) {
      var n = f.elements;
      "string" != typeof n && (n = n.join(" ")),
        "string" != typeof e && (e = e.join(" ")),
        (f.elements = n + " " + e),
        h(t);
    },
  };
  (e.html5 = f),
    h(t),
    "object" == typeof module && module.exports && (module.exports = f);
})("undefined" != typeof window ? window : this, document);
