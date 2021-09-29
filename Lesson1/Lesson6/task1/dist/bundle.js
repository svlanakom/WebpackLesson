(() => {
  "use strict";
  var n = {
      424: (n, t, o) => {
        var e = o(81),
          r = o.n(e),
          a = o(645);
        o.n(a)()(r()).push([
          n.id,
          'body {\n  font-size: 16px;\n  font-family: Arial, Helvetica, sans-serif;\n  margin: 0;\n}\n\n.page {\n  display: flex;\n  height: 100vh;\n  justify-content: center;\n  align-items: center;\n  background: url("https://gromcode.s3.eu-central-1.amazonaws.com/front-end/tools/lesson6/task1/background.jpg");\n}\n',
          "",
        ]);
      },
      846: (n, t, o) => {
        var e = o(81),
          r = o.n(e),
          a = o(645);
        o.n(a)()(r()).push([
          n.id,
          ".profile {\n  padding: 8px;\n  border-radius: 8px;\n  border: 3px solid #ccc;\n  background-color: #fff;\n\n  &__name {\n    font-size: 18px;\n    font-weight: 700;\n  }\n\n  &__location {\n    opacity: 0.7;\n  }\n}\n",
          "",
        ]);
      },
      645: (n) => {
        n.exports = function (n) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var o = "",
                  e = void 0 !== t[5];
                return (
                  t[4] && (o += "@supports (".concat(t[4], ") {")),
                  t[2] && (o += "@media ".concat(t[2], " {")),
                  e &&
                    (o += "@layer".concat(
                      t[5].length > 0 ? " ".concat(t[5]) : "",
                      " {"
                    )),
                  (o += n(t)),
                  e && (o += "}"),
                  t[2] && (o += "}"),
                  t[4] && (o += "}"),
                  o
                );
              }).join("");
            }),
            (t.i = function (n, o, e, r, a) {
              "string" == typeof n && (n = [[null, n, void 0]]);
              var c = {};
              if (e)
                for (var i = 0; i < this.length; i++) {
                  var s = this[i][0];
                  null != s && (c[s] = !0);
                }
              for (var l = 0; l < n.length; l++) {
                var u = [].concat(n[l]);
                (e && c[u[0]]) ||
                  (void 0 !== a &&
                    (void 0 === u[5] ||
                      (u[1] = "@layer"
                        .concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {")
                        .concat(u[1], "}")),
                    (u[5] = a)),
                  o &&
                    (u[2]
                      ? ((u[1] = "@media "
                          .concat(u[2], " {")
                          .concat(u[1], "}")),
                        (u[2] = o))
                      : (u[2] = o)),
                  r &&
                    (u[4]
                      ? ((u[1] = "@supports ("
                          .concat(u[4], ") {")
                          .concat(u[1], "}")),
                        (u[4] = r))
                      : (u[4] = "".concat(r))),
                  t.push(u));
              }
            }),
            t
          );
        };
      },
      81: (n) => {
        n.exports = function (n) {
          return n[1];
        };
      },
    },
    t = {};
  function o(e) {
    var r = t[e];
    if (void 0 !== r) return r.exports;
    var a = (t[e] = { id: e, exports: {} });
    return n[e](a, a.exports, o), a.exports;
  }
  (o.n = (n) => {
    var t = n && n.__esModule ? () => n.default : () => n;
    return o.d(t, { a: t }), t;
  }),
    (o.d = (n, t) => {
      for (var e in t)
        o.o(t, e) &&
          !o.o(n, e) &&
          Object.defineProperty(n, e, { enumerable: !0, get: t[e] });
    }),
    (o.o = (n, t) => Object.prototype.hasOwnProperty.call(n, t)),
    o(846),
    o(424),
    (({ name: n, location: t }) => {
      const o = document.querySelector(".profile__name"),
        e = document.querySelector(".profile__location");
      (o.textContent = n), (e.textContent = `from ${t}`);
    })({ name: "Tom", location: "The World" });
})();
