(() => {
  var t = {
      267: (t) => {
        "use strict";
        t.exports = function (t) {
          var n = [];
          return (
            (n.toString = function () {
              return this.map(function (n) {
                var e = "",
                  r = void 0 !== n[5];
                return (
                  n[4] && (e += "@supports (".concat(n[4], ") {")),
                  n[2] && (e += "@media ".concat(n[2], " {")),
                  r &&
                    (e += "@layer".concat(
                      n[5].length > 0 ? " ".concat(n[5]) : "",
                      " {",
                    )),
                  (e += t(n)),
                  r && (e += "}"),
                  n[2] && (e += "}"),
                  n[4] && (e += "}"),
                  e
                );
              }).join("");
            }),
            (n.i = function (t, e, r, o, i) {
              "string" == typeof t && (t = [[null, t, void 0]]);
              var c = {};
              if (r)
                for (var u = 0; u < this.length; u++) {
                  var a = this[u][0];
                  null != a && (c[a] = !0);
                }
              for (var f = 0; f < t.length; f++) {
                var p = [].concat(t[f]);
                (r && c[p[0]]) ||
                  (void 0 !== i &&
                    (void 0 === p[5] ||
                      (p[1] = "@layer"
                        .concat(p[5].length > 0 ? " ".concat(p[5]) : "", " {")
                        .concat(p[1], "}")),
                    (p[5] = i)),
                  e &&
                    (p[2]
                      ? ((p[1] = "@media "
                          .concat(p[2], " {")
                          .concat(p[1], "}")),
                        (p[2] = e))
                      : (p[2] = e)),
                  o &&
                    (p[4]
                      ? ((p[1] = "@supports ("
                          .concat(p[4], ") {")
                          .concat(p[1], "}")),
                        (p[4] = o))
                      : (p[4] = "".concat(o))),
                  n.push(p));
              }
            }),
            n
          );
        };
      },
      978: (t) => {
        "use strict";
        t.exports = function (t) {
          return t[1];
        };
      },
      256: () => {
        function t(n) {
          return (
            (t =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            t(n)
          );
        }
        function n(t) {
          var i = "function" == typeof Map ? new Map() : void 0;
          return (
            (n = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf("[native code]")
                    );
                  } catch (n) {
                    return "function" == typeof t;
                  }
                })(t)
              )
                return t;
              if ("function" != typeof t)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              if (void 0 !== i) {
                if (i.has(t)) return i.get(t);
                i.set(t, n);
              }
              function n() {
                return (function (t, n, o) {
                  if (e()) return Reflect.construct.apply(null, arguments);
                  var i = [null];
                  i.push.apply(i, n);
                  var c = new (t.bind.apply(t, i))();
                  return o && r(c, o.prototype), c;
                })(t, arguments, o(this).constructor);
              }
              return (
                (n.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                r(n, t)
              );
            }),
            n(t)
          );
        }
        function e() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch (t) {}
          return (e = function () {
            return !!t;
          })();
        }
        function r(t, n) {
          return (
            (r = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, n) {
                  return (t.__proto__ = n), t;
                }),
            r(t, n)
          );
        }
        function o(t) {
          return (
            (o = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            o(t)
          );
        }
        var i = document.createElement("template");
        i.innerHTML =
          '\n\t<style>\n\t\t#footer{\n\t\t\tbackground-color: #000;\n\t\t \tcolor: #ffff;\n\t\t\ttext-align: center;\n\t\t\tmax-width: 800px;\n\t\t\theight: 80px;\n\t\t\tline-height: 80px;\n\t\t\tmargin: 0 auto;\n\t\t\t// border: 1px solid black;\n\t\t\t// border-top: none;\n\t\t}\n\t</style>\n\t<div id="footer">\n\t\t<h6>copyright@2024</h6>\n\t\t\x3c!-- <slot name="created"></slot> --\x3e\n\t</div>\n';
        var c = (function (n) {
          function c() {
            var n;
            !(function (t, n) {
              if (!(t instanceof n))
                throw new TypeError("Cannot call a class as a function");
            })(this, c);
            var r,
              u,
              a,
              f = ((r = this),
              (u = c),
              (u = o(u)),
              (n = (function (n, e) {
                if (e && ("object" === t(e) || "function" == typeof e))
                  return e;
                if (void 0 !== e)
                  throw new TypeError(
                    "Derived constructors may only return object or undefined",
                  );
                return (function (t) {
                  if (void 0 === t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called",
                    );
                  return t;
                })(n);
              })(
                r,
                e()
                  ? Reflect.construct(u, a || [], o(r).constructor)
                  : u.apply(r, a),
              ))).attachShadow({ mode: "closed" }),
              p = i.content.cloneNode(!0);
            return f.append(p), n;
          }
          return (
            (function (t, n) {
              if ("function" != typeof n && null !== n)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              (t.prototype = Object.create(n && n.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                n && r(t, n);
            })(c, n),
            (u = c),
            Object.defineProperty(u, "prototype", { writable: !1 }),
            u
          );
          var u;
        })(n(HTMLElement));
        customElements.define("my-footer", c);
      },
      158: () => {
        function t(n) {
          return (
            (t =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            t(n)
          );
        }
        function n(t) {
          var i = "function" == typeof Map ? new Map() : void 0;
          return (
            (n = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf("[native code]")
                    );
                  } catch (n) {
                    return "function" == typeof t;
                  }
                })(t)
              )
                return t;
              if ("function" != typeof t)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              if (void 0 !== i) {
                if (i.has(t)) return i.get(t);
                i.set(t, n);
              }
              function n() {
                return (function (t, n, o) {
                  if (e()) return Reflect.construct.apply(null, arguments);
                  var i = [null];
                  i.push.apply(i, n);
                  var c = new (t.bind.apply(t, i))();
                  return o && r(c, o.prototype), c;
                })(t, arguments, o(this).constructor);
              }
              return (
                (n.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                r(n, t)
              );
            }),
            n(t)
          );
        }
        function e() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch (t) {}
          return (e = function () {
            return !!t;
          })();
        }
        function r(t, n) {
          return (
            (r = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, n) {
                  return (t.__proto__ = n), t;
                }),
            r(t, n)
          );
        }
        function o(t) {
          return (
            (o = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            o(t)
          );
        }
        var i = document.createElement("template");
        i.innerHTML =
          '\n    <style>\n        #head{\n            background-color: #3498db;\n            color: #fff;\n            text-align: center;\n            padding: 20px;\n        }\n    </style>\n    <div id="head">\n        <h1>Daily Notes</h1>\n    </div>\n';
        var c = (function (n) {
          function c() {
            var n;
            !(function (t, n) {
              if (!(t instanceof n))
                throw new TypeError("Cannot call a class as a function");
            })(this, c);
            var r,
              u,
              a,
              f = ((r = this),
              (u = c),
              (u = o(u)),
              (n = (function (n, e) {
                if (e && ("object" === t(e) || "function" == typeof e))
                  return e;
                if (void 0 !== e)
                  throw new TypeError(
                    "Derived constructors may only return object or undefined",
                  );
                return (function (t) {
                  if (void 0 === t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called",
                    );
                  return t;
                })(n);
              })(
                r,
                e()
                  ? Reflect.construct(u, a || [], o(r).constructor)
                  : u.apply(r, a),
              ))).attachShadow({ mode: "closed" }),
              p = i.content.cloneNode(!0);
            return f.append(p), n;
          }
          return (
            (function (t, n) {
              if ("function" != typeof n && null !== n)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              (t.prototype = Object.create(n && n.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                n && r(t, n);
            })(c, n),
            (u = c),
            Object.defineProperty(u, "prototype", { writable: !1 }),
            u
          );
          var u;
        })(n(HTMLElement));
        customElements.define("my-head", c);
      },
      171: () => {
        function t(n) {
          return (
            (t =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            t(n)
          );
        }
        function n(t) {
          var i = "function" == typeof Map ? new Map() : void 0;
          return (
            (n = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf("[native code]")
                    );
                  } catch (n) {
                    return "function" == typeof t;
                  }
                })(t)
              )
                return t;
              if ("function" != typeof t)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              if (void 0 !== i) {
                if (i.has(t)) return i.get(t);
                i.set(t, n);
              }
              function n() {
                return (function (t, n, o) {
                  if (e()) return Reflect.construct.apply(null, arguments);
                  var i = [null];
                  i.push.apply(i, n);
                  var c = new (t.bind.apply(t, i))();
                  return o && r(c, o.prototype), c;
                })(t, arguments, o(this).constructor);
              }
              return (
                (n.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                r(n, t)
              );
            }),
            n(t)
          );
        }
        function e() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch (t) {}
          return (e = function () {
            return !!t;
          })();
        }
        function r(t, n) {
          return (
            (r = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, n) {
                  return (t.__proto__ = n), t;
                }),
            r(t, n)
          );
        }
        function o(t) {
          return (
            (o = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            o(t)
          );
        }
        var i = document.createElement("template");
        i.innerHTML =
          '\n\t<style>\n    .loader {\n        font-weight: bold;\n        font-family: monospace;\n        font-size: 30px;\n        display: inline-grid;\n    }\n    .loader:before,\n    .loader:after {\n        content:"Loading...";\n        grid-area: 1/1;\n        -webkit-mask:linear-gradient(90deg,#000 50%,#0000 0) 0 50%/2ch 100%;\n        animation: l11 1s infinite cubic-bezier(0.5,220,0.5,-220);\n    }\n    .loader:after {\n        -webkit-mask-position:1ch 50%;\n        --s:-1;\n    }\n    @keyframes l11 {100%{transform: translateY(calc(var(--s,1)*0.1%));}}\n    \n\t</style>\n\t<div class="loader"></div>\n';
        var c = (function (n) {
          function c() {
            var n, r, u, a;
            return (
              (function (t, n) {
                if (!(t instanceof n))
                  throw new TypeError("Cannot call a class as a function");
              })(this, c),
              ((r = this),
              (u = c),
              (u = o(u)),
              (n = (function (n, e) {
                if (e && ("object" === t(e) || "function" == typeof e))
                  return e;
                if (void 0 !== e)
                  throw new TypeError(
                    "Derived constructors may only return object or undefined",
                  );
                return (function (t) {
                  if (void 0 === t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called",
                    );
                  return t;
                })(n);
              })(
                r,
                e()
                  ? Reflect.construct(u, a || [], o(r).constructor)
                  : u.apply(r, a),
              )))
                .attachShadow({ mode: "open" })
                .appendChild(i.content.cloneNode(!0)),
              n
            );
          }
          return (
            (function (t, n) {
              if ("function" != typeof n && null !== n)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              (t.prototype = Object.create(n && n.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                n && r(t, n);
            })(c, n),
            (u = c),
            Object.defineProperty(u, "prototype", { writable: !1 }),
            u
          );
          var u;
        })(n(HTMLElement));
        customElements.define("my-loader", c);
      },
      429: () => {
        function t(n) {
          return (
            (t =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            t(n)
          );
        }
        function n(t) {
          var i = "function" == typeof Map ? new Map() : void 0;
          return (
            (n = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf("[native code]")
                    );
                  } catch (n) {
                    return "function" == typeof t;
                  }
                })(t)
              )
                return t;
              if ("function" != typeof t)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              if (void 0 !== i) {
                if (i.has(t)) return i.get(t);
                i.set(t, n);
              }
              function n() {
                return (function (t, n, o) {
                  if (e()) return Reflect.construct.apply(null, arguments);
                  var i = [null];
                  i.push.apply(i, n);
                  var c = new (t.bind.apply(t, i))();
                  return o && r(c, o.prototype), c;
                })(t, arguments, o(this).constructor);
              }
              return (
                (n.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                r(n, t)
              );
            }),
            n(t)
          );
        }
        function e() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch (t) {}
          return (e = function () {
            return !!t;
          })();
        }
        function r(t, n) {
          return (
            (r = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, n) {
                  return (t.__proto__ = n), t;
                }),
            r(t, n)
          );
        }
        function o(t) {
          return (
            (o = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            o(t)
          );
        }
        var i = document.createElement("template");
        i.innerHTML =
          '\n\t<style>\n\t\t.navbar {\n\t\t\tbackground-color: #333;\n\t\t\tcolor: #fff;\n\t\t\tpadding: 10px 20px;\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: space-between;\n\t\t\talign-items: center;\n\t\t\tposition: fixed;\n\t\t\twidth: 100%;\n\t\t\ttop: 0;\n            z-index: 9999;\n\t\t}\n\t\t.logo {\n\t\t\tfont-size: 24px;\n\t\t\tfont-weight: bold;\n\t\t\tmargin-right: auto;\n\t\t}\n\n\t\t@media (max-width: 768px) {\n\t\t\t.navbar {\n\t\t\t\tflex-direction: column;\n\t\t\t\talign-items: center;\n\t\t\t}\n\t\t\t.nav-links {\n\t\t\t\tmargin-top: 10px;\n\t\t\t}\n\t\t\t.nav-link {\n\t\t\t\tmargin-right: 0;\n\t\t\t\tmargin-bottom: 10px;\n\t\t\t}\n\t\t}\n\t</style>\n\t<nav class="navbar">\n\t\t<h3 class="logo">App Notes</h3>\n\t</nav>\n';
        var c = (function (n) {
          function c() {
            var n, r, u, a;
            return (
              (function (t, n) {
                if (!(t instanceof n))
                  throw new TypeError("Cannot call a class as a function");
              })(this, c),
              ((r = this),
              (u = c),
              (u = o(u)),
              (n = (function (n, e) {
                if (e && ("object" === t(e) || "function" == typeof e))
                  return e;
                if (void 0 !== e)
                  throw new TypeError(
                    "Derived constructors may only return object or undefined",
                  );
                return (function (t) {
                  if (void 0 === t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called",
                    );
                  return t;
                })(n);
              })(
                r,
                e()
                  ? Reflect.construct(u, a || [], o(r).constructor)
                  : u.apply(r, a),
              )))
                .attachShadow({ mode: "open" })
                .appendChild(i.content.cloneNode(!0)),
              n
            );
          }
          return (
            (function (t, n) {
              if ("function" != typeof n && null !== n)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              (t.prototype = Object.create(n && n.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                n && r(t, n);
            })(c, n),
            (u = c),
            Object.defineProperty(u, "prototype", { writable: !1 }),
            u
          );
          var u;
        })(n(HTMLElement));
        customElements.define("my-navbar", c);
      },
      318: () => {
        document.createElement();
      },
      106: (t, n, e) => {
        "use strict";
        e.d(n, { A: () => u });
        var r = e(978),
          o = e.n(r),
          i = e(267),
          c = e.n(i)()(o());
        c.push([
          t.id,
          "*{\n\tmargin: 0;\n\tpadding: 0;\n}\n\nbody {\n\tmargin: 0;\n\tfont-family: 'Poppins', sans-serif;\n}\n\n.main {\n\tmax-width: 800px;\n\tmargin: 0 auto;\n\tborder: 1px solid black;\n}\n\n.main{\n\tmargin-block-start: 100px;\n}\n\n.container-c {\n\tpadding: 20px;\n}\n\nform {\n\tdisplay: grid;\n\tgrid-template-columns: 1fr;\n\tgap: 10px;\n}\n\ntextarea {\n\theight: 100px;\n}\n\n.grid-container {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n\tgap: 10px;\n}\n\n.grid-item {\n\tbackground-color: #14353d;\n\tpadding: 10px;\n\tborder-radius: 5px;\n\tcolor: #ffff;\n\twhite-space: pre-line;\n\tposition: relative;\n  }\n  \n  .delete-button,\n  .archive-button {\n\tdisplay: inline-block;\n\tbottom: 5px;\n  }\n  \n  .delete-button {\n\tbackground-color: #e74c3c;\n\tcolor: #fff;\n\tborder: none;\n\tpadding: 10px;\n\tcursor: pointer;\n\tborder-radius: 5px;\n\tposition: absolute;\n\tbottom: 5px;\n\tleft: 5px;\n\ttransition: background-color 0.3s;\n  }\n  \n  .delete-button:hover {\n\tbackground-color: #ad2819;\n  }\n  \n  .archive-button {\n\tbackground-color: #34495e;\n\tcolor: #fff;\n\tborder: none;\n\tpadding: 10px;\n\tcursor: pointer;\n\tborder-radius: 5px;\n\tposition: absolute;\n\tbottom: 5px;\n\tright: 5px;\n\ttransition: background-color 0.3s;\n  }\n  \n  .archive-button:hover {\n\tbackground-color: #2c3e50;\n  }\n  \n  \n  .grid-item.archived {\n\tbackground-color: #808080;\n\tcolor: #ffffff;\n\ttext-decoration: line-through;\n  }\n#noteList {\n\tmargin-top: 20px;\n}\n\n#noteForm input{\n\toutline: none;\n\theight: 30px;\n\tpadding: 5px;\n\tbox-sizing: border-box;\n}\n#noteForm textarea{\n\toutline: none;\n\tpadding: 5px;\n}\n\nbutton {\n\tbackground-color: #3498db;\n\tcolor: #fff;\n\tpadding: 10px;\n\tborder: none;\n\tcursor: pointer;\n\tborder-radius: 5px;\n\tfont-weight: bolder;\n}\n\nbutton:hover {\n\tbackground-color: #2483c2;\n}\n  ",
          "",
        ]);
        const u = c;
      },
      72: (t) => {
        "use strict";
        var n = [];
        function e(t) {
          for (var e = -1, r = 0; r < n.length; r++)
            if (n[r].identifier === t) {
              e = r;
              break;
            }
          return e;
        }
        function r(t, r) {
          for (var i = {}, c = [], u = 0; u < t.length; u++) {
            var a = t[u],
              f = r.base ? a[0] + r.base : a[0],
              p = i[f] || 0,
              l = "".concat(f, " ").concat(p);
            i[f] = p + 1;
            var s = e(l),
              d = {
                css: a[1],
                media: a[2],
                sourceMap: a[3],
                supports: a[4],
                layer: a[5],
              };
            if (-1 !== s) n[s].references++, n[s].updater(d);
            else {
              var y = o(d, r);
              (r.byIndex = u),
                n.splice(u, 0, { identifier: l, updater: y, references: 1 });
            }
            c.push(l);
          }
          return c;
        }
        function o(t, n) {
          var e = n.domAPI(n);
          return (
            e.update(t),
            function (n) {
              if (n) {
                if (
                  n.css === t.css &&
                  n.media === t.media &&
                  n.sourceMap === t.sourceMap &&
                  n.supports === t.supports &&
                  n.layer === t.layer
                )
                  return;
                e.update((t = n));
              } else e.remove();
            }
          );
        }
        t.exports = function (t, o) {
          var i = r((t = t || []), (o = o || {}));
          return function (t) {
            t = t || [];
            for (var c = 0; c < i.length; c++) {
              var u = e(i[c]);
              n[u].references--;
            }
            for (var a = r(t, o), f = 0; f < i.length; f++) {
              var p = e(i[f]);
              0 === n[p].references && (n[p].updater(), n.splice(p, 1));
            }
            i = a;
          };
        };
      },
      659: (t) => {
        "use strict";
        var n = {};
        t.exports = function (t, e) {
          var r = (function (t) {
            if (void 0 === n[t]) {
              var e = document.querySelector(t);
              if (
                window.HTMLIFrameElement &&
                e instanceof window.HTMLIFrameElement
              )
                try {
                  e = e.contentDocument.head;
                } catch (t) {
                  e = null;
                }
              n[t] = e;
            }
            return n[t];
          })(t);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          r.appendChild(e);
        };
      },
      540: (t) => {
        "use strict";
        t.exports = function (t) {
          var n = document.createElement("style");
          return t.setAttributes(n, t.attributes), t.insert(n, t.options), n;
        };
      },
      56: (t, n, e) => {
        "use strict";
        t.exports = function (t) {
          var n = e.nc;
          n && t.setAttribute("nonce", n);
        };
      },
      825: (t) => {
        "use strict";
        t.exports = function (t) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var n = t.insertStyleElement(t);
          return {
            update: function (e) {
              !(function (t, n, e) {
                var r = "";
                e.supports && (r += "@supports (".concat(e.supports, ") {")),
                  e.media && (r += "@media ".concat(e.media, " {"));
                var o = void 0 !== e.layer;
                o &&
                  (r += "@layer".concat(
                    e.layer.length > 0 ? " ".concat(e.layer) : "",
                    " {",
                  )),
                  (r += e.css),
                  o && (r += "}"),
                  e.media && (r += "}"),
                  e.supports && (r += "}");
                var i = e.sourceMap;
                i &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      " */",
                    )),
                  n.styleTagTransform(r, t, n.options);
              })(n, t, e);
            },
            remove: function () {
              !(function (t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
              })(n);
            },
          };
        };
      },
      113: (t) => {
        "use strict";
        t.exports = function (t, n) {
          if (n.styleSheet) n.styleSheet.cssText = t;
          else {
            for (; n.firstChild; ) n.removeChild(n.firstChild);
            n.appendChild(document.createTextNode(t));
          }
        };
      },
    },
    n = {};
  function e(r) {
    var o = n[r];
    if (void 0 !== o) return o.exports;
    var i = (n[r] = { id: r, exports: {} });
    return t[r](i, i.exports, e), i.exports;
  }
  (e.n = (t) => {
    var n = t && t.__esModule ? () => t.default : () => t;
    return e.d(n, { a: n }), n;
  }),
    (e.d = (t, n) => {
      for (var r in n)
        e.o(n, r) &&
          !e.o(t, r) &&
          Object.defineProperty(t, r, { enumerable: !0, get: n[r] });
    }),
    (e.o = (t, n) => Object.prototype.hasOwnProperty.call(t, n)),
    (e.nc = void 0),
    (() => {
      "use strict";
      var t = e(72),
        n = e.n(t),
        r = e(825),
        o = e.n(r),
        i = e(659),
        c = e.n(i),
        u = e(56),
        a = e.n(u),
        f = e(540),
        p = e.n(f),
        l = e(113),
        s = e.n(l),
        d = e(106),
        y = {};
      (y.styleTagTransform = s()),
        (y.setAttributes = a()),
        (y.insert = c().bind(null, "head")),
        (y.domAPI = o()),
        (y.insertStyleElement = p()),
        n()(d.A, y),
        d.A && d.A.locals && d.A.locals,
        e(256),
        e(158),
        e(429),
        e(171),
        e(318);
    })();
})();
