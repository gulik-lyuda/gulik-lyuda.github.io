google.maps.__gjsload__("map", function(_) {
  var ss = function(a) {
      var b = rs;
      a = new _.sj(new _.oj(a));
      _.Ug && (0, _.Ug)(a, b.prototype);
      return a;
    },
    rs = function(a, b, c, d, e) {
      var f, g, h, k, n, p, q, t;
      return ss(function(u) {
        switch (u.b) {
          case 1:
            return (
              (f = Math.ceil((a + b) / 2)),
              (g = Math.ceil((c + d) / 2)),
              _.nj(u, { L: f, M: g, $: e }, 2)
            );
          case 2:
            (h = [-1, 0, 1, 0]), (k = [0, -1, 0, 1]), (n = 0), (p = 1);
          case 3:
            q = 0;
          case 6:
            if (!(2 > q)) {
              ++p;
              u.b = 3;
              break;
            }
            t = 0;
          case 9:
            if (!(t < p)) {
              u.b = 11;
              break;
            }
            f += h[n];
            g += k[n];
            if ((g < c || g > d) && (f < a || f > b)) return u["return"]();
            if (!(c <= g && g <= d && a <= f && f <= b)) {
              u.b = 10;
              break;
            }
            return _.nj(u, { L: f, M: g, $: e }, 10);
          case 10:
            ++t;
            u.b = 9;
            break;
          case 11:
            (n = (n + 1) % 4), q++, (u.b = 6);
        }
      });
    },
    ts = function(a, b) {
      for (var c in a) if (!b.call(void 0, a[c], c, a)) return !1;
      return !0;
    },
    us = function(a, b, c, d, e, f) {
      this.da = a;
      this.A = b;
      this.B = c;
      this.m = d;
      this.G = f;
      this.I = _.vk();
      this.aa = _.Ua();
      this.f = d.sa;
      this.fa = window.document.createElement("div");
      this.fa.style.position = "absolute";
      this.fa.style.zIndex = "0";
      e && (this.fa.style.display = "none");
      c.f.appendChild(this.fa);
      this.l = null;
      this.b = {};
      this.D = !1;
      this.j = 0;
    },
    vs = function(a, b, c, d) {
      if (d && a.l) {
        d.style.position = "absolute";
        var e = a.m.tileSize;
        d.style.left = e.W * (b - a.l.L) + "px";
        d.style.top = e.Y * (c - a.l.M) + "px";
        d.style.width = e.W + "px";
        d.style.height = e.Y + "px";
      }
    },
    ws = function(a, b, c, d) {
      if (!a.l || d.Qb) {
        a.l = _.ij(a.f, b, a.A);
        for (var e = _.Aa(_.Hj(a.b)), f = e.next(); !f.done; f = e.next())
          (f = f.value), vs(a, f.ia.L, f.ia.M, f.Za.Ba());
      }
      b = _.Gi(_.Hi(c, _.Bi(_.hj(a.f, a.l), b)));
      e = _.Hi(c, _.hj(a.f, { L: 0, M: 0, $: a.A }));
      f = _.Hi(c, _.hj(a.f, { L: 0, M: 1, $: a.A }));
      c = _.Hi(c, _.hj(a.f, { L: 1, M: 0, $: a.A }));
      var g = a.m.tileSize;
      a.fa.style.willChange = d.Qb ? "" : "transform";
      (d = a.I)
        ? (a.fa.style[d] =
            "matrix(" +
            (c.W - e.W) / g.W +
            "," +
            (c.Y - e.Y) / g.W +
            "," +
            (f.W - e.W) / g.Y +
            "," +
            (f.Y - e.Y) / g.Y +
            "," +
            b.W +
            "," +
            b.Y +
            ")")
        : ((a.fa.style.left = b.W + "px"), (a.fa.style.top = b.Y + "px"));
    },
    xs = function(a, b, c) {
      var d = 0,
        e;
      for (e in a.b) {
        var f = a.b[e];
        if (f.state == c) {
          var g = _.jj(a.f, f.ia);
          f = new _.dc(Math.max(g.min.H, b.min.H), Math.max(g.min.J, b.min.J));
          g = new _.dc(Math.min(g.max.H, b.max.H), Math.min(g.max.J, b.max.J));
          d += Math.abs((f.H - g.H) * (f.J - g.J));
        }
      }
      return d / Math.abs((b.min.H - b.max.H) * (b.min.J - b.max.J));
    },
    ys = function(a) {
      return ts(a.b, function(a) {
        return 2 == a.state;
      });
    },
    zs = function(a, b) {
      var c = !1,
        d;
      for (d in a.b) {
        var e = a.b[d];
        if (1 == e.state) {
          var f = e.Za.Ba();
          if (f)
            if (
              (f.parentElement || a.fa.appendChild(f), (f = f.style), a.B.G)
            ) {
              var g = e.Gk || (e.Gk = b);
              g = Math.min(1, (b - g) / 200);
              1 > g
                ? ((f.opacity = g), (f.willChange = "opacity"), (c = !0))
                : ((f.opacity = ""), (f.willChange = ""), (e.state = 2));
            } else f.opacity || (f.opacity = ""), (e.state = 2);
          else e.state = 2;
        }
      }
      c &&
        _.xk(function(b) {
          return zs(a, b);
        });
      b = (a.D = c) || !ys(a);
      a.G(b);
    },
    As = function(a, b) {
      var c = b.L,
        d = b.M,
        e = b.$,
        f = "(" + c + "," + d + ")@" + e;
      if (!a.b[f]) {
        a.G(!0);
        e = _.ij(
          a.f,
          _.Ei(a.B.xa.f, _.hj(a.f, { L: c + 0.5, M: d + 0.5, $: e })),
          e
        );
        var g = (a.b[f] = {
          ia: b,
          state: 0,
          Za: a.m.Wa(e, {
            wa: function() {
              g.state = 1;
              a.D ||
                ((a.D = !0),
                _.xk(function(b) {
                  return zs(a, b);
                }));
            }
          })
        });
        (b = g.Za.Ba()) && vs(a, c, d, b);
      }
    },
    Bs = function(a, b, c) {
      a.j && ((0, window.clearTimeout)(a.j), (a.j = 0));
      if (a.l) {
        var d = a.A,
          e = (1 == a.m.hb && c.Hd && c.Hd.Fa) || b;
        if (a.B.l != a.da) {
          for (var f in a.b) {
            var g = a.b[f];
            0 == g.state && (g.Za.release(), delete a.b[f]);
          }
          a.fa.style.zIndex = "0";
        } else if (!c.Hd && !c.Qb && _.Ua() < a.aa + 250)
          a.j = (0, window.setTimeout)(function() {
            return Bs(a, b, c);
          }, 500);
        else {
          a.fa.style.zIndex = "1";
          var h = _.ij(a.f, e.min, d),
            k = _.ij(a.f, e.max, d),
            n = Math.min(h.L, k.L);
          f = Math.min(h.M, k.M);
          e = Math.max(h.L, k.L);
          h = Math.max(h.M, k.M);
          if (4 != a.m.hb || c.Qb)
            for (
              d = _.Aa(rs(n, e, f, h, d)), k = d.next();
              !k.done;
              k = d.next()
            )
              As(a, k.value);
          if (c.Qb)
            for (g in ((d = n - 2), (f -= 2), (e += 2), (h += 2), a.b))
              if (
                ((n = a.b[g]),
                n.ia.L < d || n.ia.L > e || n.ia.M < f || n.ia.M > h)
              )
                (k = n.Za.Ba()) && k.parentNode == a.fa && a.fa.removeChild(k),
                  n.Za.release(),
                  delete a.b[g];
        }
      }
    },
    Cs = function(a, b, c) {
      var d = Object.keys(a.b),
        e = [];
      if (!b)
        e = d.filter(function(b) {
          return b != a.l;
        });
      else if (4 < d.length) {
        var f = {},
          g = {};
        b = _.Aa(d);
        for (e = b.next(); !e.done; e = b.next())
          (e = e.value), (f[e] = xs(a.b[e], c, 2)), (g[e] = xs(a.b[e], c, 1));
        d.sort(function(a, b) {
          return f[a] - f[b] || g[a] - g[b];
        });
        e = [d[0]];
      }
      c = _.Aa(e);
      for (e = c.next(); !e.done; e = c.next())
        (d = e.value), a.b[d].release(), delete a.b[d];
    },
    Ds = function(a) {
      if (!a.b || !a.j || !a.f) return null;
      var b = _.Hi(a.f, _.Bi(a.b.min, a.j));
      a = _.Hi(a.f, _.Bi(a.b.max, a.j));
      return new _.jc([new _.H(b.W, b.Y), new _.H(a.W, a.Y)]);
    },
    Es = function(a) {
      this.data = a || [];
    },
    Fs = function(a) {
      this.data = a || [];
    },
    Gs = function(a) {
      this.data = a || [];
    },
    Hs = function(a) {
      this.data = a || [];
    },
    Is = function(a, b) {
      a = _.Dd(new _.cj(a.f.data[7]), 0).slice();
      return _.yj(a, function(a) {
        return a + "deg=" + b + "&";
      });
    },
    Js = function(a) {
      var b = Math.round(1e7 * a);
      return 0 > a ? b + 4294967296 : b;
    },
    Ks = function(a) {
      this.data = a || [];
    },
    Ls = function() {
      this.O = new _.Uc();
    },
    Ms = function(a) {
      _.Wc(a.O, function(a) {
        a(null);
      });
    },
    Ns = function(a, b) {
      if (_.Or)
        return new window.MouseEvent(a, {
          bubbles: !0,
          cancelable: !0,
          view: window,
          detail: 1,
          screenX: b.clientX,
          screenY: b.clientY,
          clientX: b.clientX,
          clientY: b.clientY
        });
      var c = window.document.createEvent("MouseEvents");
      c.initMouseEvent(
        a,
        !0,
        !0,
        window,
        1,
        b.clientX,
        b.clientY,
        b.clientX,
        b.clientY,
        !1,
        !1,
        !1,
        !1,
        0,
        null
      );
      return c;
    },
    Os = function(a, b, c) {
      this.b = a;
      this.j = b;
      this.f = c;
    },
    Qs = function(a, b, c, d) {
      var e = this;
      this.l = b;
      this.B = c;
      this.A = d;
      this.j = null;
      this.f = this.b = 0;
      this.m = new _.so(function() {
        e.b = 0;
        e.f = 0;
      }, 1e3);
      new _.cn(a, "wheel", function(a) {
        return Ps(e, a);
      });
    },
    Ps = function(a, b) {
      if (!_.Mi(b)) {
        var c = a.A();
        if (0 != c) {
          var d =
            null == c && !b.ctrlKey && !b.altKey && !b.metaKey && !b.buttons;
          c = a.B(d ? 1 : 4);
          if ("none" != c && ("cooperative" != c || !d))
            if (
              (_.Ec(b),
              (d =
                (b.deltaY || b.wheelDelta || 0) * (1 == b.deltaMode ? 16 : 1)),
              (0 < d && d < a.f) || (0 > d && d > a.f))
            )
              a.f = d;
            else {
              a.f = d;
              a.b += d;
              a.m.j();
              var e = a.l.b.b;
              16 > Math.abs(a.b) ||
                ((d = Math.round(e.zoom - Math.sign(a.b))),
                (a.b = 0),
                (b = "zoomaroundcenter" == c ? e.V : a.l.Hb(b)),
                a.j != d &&
                  (Rs(a.l, d, b, function() {
                    a.j = null;
                  }),
                  (a.j = d)));
            }
        }
      }
    },
    Ss = function(a, b, c) {
      this.j = a;
      this.l = b;
      this.f = c || null;
      this.b = null;
    },
    Ts = function(a, b, c, d) {
      this.f = a;
      this.l = b;
      this.m = c;
      this.j = d || null;
      this.b = null;
    },
    Us = function(a, b) {
      return { Ga: a.f.Hb(b.Ga), radius: b.radius, zoom: a.f.b.b.zoom };
    },
    Vs = function(a, b, c, d, e) {
      d = void 0 === d ? _.qa("greedy") : d;
      var f = void 0 === e ? {} : e;
      e = void 0 === f.qh ? _.qa(!0) : f.qh;
      var g = void 0 === f.zk ? !1 : f.zk,
        h = void 0 === f.li ? _.qa(null) : f.li;
      f = {
        Se: void 0 === f.Se ? !1 : f.Se,
        ib: function(a) {
          var b = a.coords,
            c = a.event;
          a.zc &&
            ((c = 3 == c.button),
            n.f() &&
              ((a = n.j(4)),
              "none" != a &&
                ((c = Math.round(n.b.b.b.zoom + (c ? -1 : 1))),
                (b = "zoomaroundcenter" == a ? n.b.b.b.V : n.b.Hb(b)),
                Rs(n.b, c, b))));
        }
      };
      var k = _.xn(b.j, f);
      new Qs(b.j, a, d, h);
      var n = new Os(a, d, e);
      f.tc = new Ts(a, d, k, c);
      g && (f.yk = new Ss(a, k, c));
      return k;
    },
    Ws = function() {
      var a = window.innerWidth / (window.document.body.scrollWidth + 1);
      return (
        0.95 > window.innerHeight / (window.document.body.scrollHeight + 1) ||
        0.95 > a ||
        _.Nl()
      );
    },
    Xs = function(a, b, c, d) {
      return 0 == b
        ? "none"
        : "none" == c || "greedy" == c || "zoomaroundcenter" == c
          ? c
          : d
            ? "greedy"
            : "cooperative" == c || a()
              ? "cooperative"
              : "greedy";
    },
    Ys = function(a) {
      return new _.to([a.draggable, a.tk, a.se], _.xj(Xs, Ws));
    },
    Zs = function(a) {
      this.b = new Ls();
      this.f = a;
    },
    $s = function(a, b) {
      return (a.get("featureRects") || []).some(function(a) {
        return a.contains(b);
      });
    },
    at = function(a, b) {
      if (!b) return 0;
      var c = 0,
        d = a.f,
        e = a.b;
      b = _.Aa(b);
      for (var f = b.next(); !f.done; f = b.next()) {
        var g = f.value;
        if (a.intersects(g)) {
          f = g.f;
          var h = g.b;
          if (_.Li(g, a)) return 1;
          g =
            e.contains(h.b) && h.contains(e.b) && !e.ba(h)
              ? _.sc(h.b, e.f) + _.sc(e.b, h.f)
              : _.sc(e.contains(h.b) ? h.b : e.b, e.contains(h.f) ? h.f : e.f);
          c += g * (Math.min(d.f, f.f) - Math.max(d.b, f.b));
        }
      }
      return (c /= (d.isEmpty() ? 0 : d.f - d.b) * _.tc(e));
    },
    bt = function() {
      return function(a, b) {
        if (a && b) return 0.9 <= at(a, b);
      };
    },
    ct = function() {
      var a = !1;
      return function(b, c) {
        if (b && c) {
          if (0.999999 > at(b, c)) return (a = !1);
          b = _.Ek(b, (_.Qr - 1) / 2);
          return 0.999999 < at(b, c) ? (a = !0) : a;
        }
      };
    },
    dt = function(a, b, c, d, e, f, g) {
      var h = new _.uq();
      _.vq(h, a, b, "hybrid" != c);
      null != c && _.yq(h, c, 0, d);
      g &&
        g.forEach(function(a) {
          return _.Bq(h, a, c);
        });
      e &&
        _.D(e, function(a) {
          return _.Aq(h, a);
        });
      f && _.Cq(h, f);
      return h.b;
    },
    et = function(a, b, c, d, e, f, g, h, k) {
      var n = [];
      if (e) {
        var p = new _.ck();
        p.data[0] = e.type;
        if (e.params)
          for (var q in e.params) {
            var t = _.dk(p);
            _.bk(t, q);
            var u = e.params[q];
            u && (t.data[1] = u);
          }
        n.push(p);
      }
      e = new _.ck();
      e.data[0] = 37;
      _.bk(_.dk(e), "smartmaps");
      n.push(e);
      return { Oa: dt(a, b, c, d, n, f, k), $b: g, scale: h };
    },
    ft = function(a, b, c, d, e, f, g, h, k, n, p, q, t, u) {
      _.Bg.call(this);
      this.m = a;
      this.j = b;
      this.projection = c;
      this.maxZoom = d;
      this.tileSize = new _.I(256, 256);
      this.name = e;
      this.alt = f;
      this.D = g;
      this.heading = u;
      this.G = _.F(u);
      this.rd = h;
      this.__gmsd = k;
      this.Da = n;
      this.b = null;
      this.B = p;
      this.l = q;
      this.A = t;
      this.triggersTileLoadEvent = !0;
      this.f = _.md({});
    },
    gt = function(a, b, c, d, e) {
      ft.call(
        this,
        a.m,
        a.j,
        a.projection,
        a.maxZoom,
        a.name,
        a.alt,
        a.D,
        a.rd,
        a.__gmsd,
        a.Da,
        a.B,
        a.l,
        a.A,
        a.heading
      );
      this.j &&
        this.f.set(
          et(this.l, this.A, this.Da, this.B, this.__gmsd, b, c, d, e)
        );
    },
    ht = function(a, b, c) {
      var d = window.document.createElement("div"),
        e = window.document.createElement("div"),
        f = window.document.createElement("span");
      f.innerText = "For development purposes only";
      f.style.f = "break-all";
      e.appendChild(f);
      f = e.style;
      f.color = "white";
      f.fontFamily = "Roboto, sans-serif";
      f.fontSize = "14px";
      f.textAlign = "center";
      f.position = "absolute";
      f.left = "0";
      f.top = "50%";
      f.transform = "translateY(-50%)";
      f.msTransform = "translateY(-50%)";
      f.maxHeight = "100%";
      f.width = "100%";
      f.overflow = "hidden";
      d.appendChild(e);
      e = d.style;
      e.backgroundColor = "rgba(0, 0, 0, 0.5)";
      e.position = "absolute";
      e.overflow = "hidden";
      e.top = "0";
      e.left = "0";
      e.width = b + "px";
      e.height = c + "px";
      e.zIndex = 100;
      a.appendChild(d);
    },
    it = function(a, b, c, d, e, f) {
      f = void 0 === f ? {} : f;
      this.ia = a;
      this.f = b;
      this.b = c.slice(0);
      this.j = f.Na || _.Ja;
      e && ht(this.f, d.W, d.Y);
    },
    jt = function(a, b) {
      var c = this;
      this.tileSize = a[0].tileSize;
      this.cb = a[0].cb;
      this.sa = a[0].sa;
      this.b = a;
      this.hb = a[0].hb;
      this.f = void 0 === b ? !1 : b;
      _.zj(a, function(a) {
        var b = a.tileSize,
          d = c.tileSize;
        return b.W == d.W && b.Y == d.Y && a.cb == c.cb;
      });
    },
    lt = function(a, b, c, d, e, f, g, h, k, n) {
      this.ia = a.ia;
      this.b = a;
      this.m = _.yj(b || [], function(a) {
        return a.replace(/&$/, "");
      });
      this.G = c;
      this.A = d;
      this.j = e;
      this.D = f;
      this.f = g;
      this.B = n || null;
      this.l = !1;
      k && ((a = this.Ba()), ht(a, h.W, h.Y));
      kt(this);
    },
    kt = function(a) {
      if (a.f) {
        var b = _.bm(
          _.hj(a.D, { L: a.ia.L + 0.5, M: a.ia.M + 0.5, $: a.ia.$ }),
          null
        );
        if (!$s(a.f, b)) {
          a.l = !0;
          a.f.b.addListenerOnce(function() {
            return kt(a);
          });
          return;
        }
      }
      a.l = !1;
      b = 2 == a.j || 4 == a.j ? a.j : 1;
      b = Math.min(1 << a.ia.$, b);
      for (var c = a.G && 4 != b, d = a.ia.$, e = b; 1 < e; e /= 2) d--;
      if ((e = a.A({ L: a.ia.L, M: a.ia.M, $: a.ia.$ })))
        (d = _.il(
          _.il(_.il(new _.cl(_.Eq(a.m, e)), "x", e.L), "y", e.M),
          "z",
          d
        )),
          1 != b && _.il(d, "w", 256 / b),
          c && (b *= 2),
          1 != b && _.il(d, "scale", b),
          a.b.setUrl(d.toString()).then(a.B);
    },
    mt = function(a, b, c, d, e, f, g, h) {
      var k = window.document;
      this.tileSize = { W: b.width, Y: b.height };
      this.b = a || [];
      this.B = b;
      this.l = k;
      this.D = c;
      this.f = d;
      this.A = e;
      this.cb = !0;
      this.hb = 1;
      this.sa = f;
      this.j = g;
      this.m = void 0 === h ? !1 : h;
    },
    nt = function(a, b) {
      this.tileSize = a.tileSize;
      this.cb = !0;
      this.f = a;
      this.b = b;
      this.sa = _.ji;
      this.hb = 1;
    },
    ot = function(a, b, c) {
      var d = _.fj(),
        e = _.uf(_.T);
      this.b = b;
      this.j = new _.wf();
      this.f = _.sf(e);
      this.l = _.tf(e);
      this.A = _.P(d, 14);
      this.m = _.P(d, 15);
      this.B = new _.rq(a, d, e);
      this.D = c;
    },
    pt = function(a, b, c, d) {
      d = void 0 === d ? { Va: null } : d;
      var e = _.F(d.heading),
        f =
          (("hybrid" == b && !e) || "terrain" == b || "roadmap" == b) &&
          0 != d.gk,
        g = d.Va;
      if ("satellite" == b) {
        var h;
        e
          ? (h = Is(a.B, d.heading || 0))
          : (h = _.Dd(new _.cj(a.B.f.data[1]), 0).slice());
        b = new _.vf(new _.dc(256, 256), e ? 45 : 0, d.heading || 0);
        return new mt(
          h,
          new _.I(256, 256),
          f && 1 < _.Fk(),
          _.Mq(d.heading),
          (g && g.scale) || null,
          b,
          e ? a.D : null,
          !!d.kh
        );
      }
      return new _.Lq(
        _.sq(a.B),
        new _.I(256, 256),
        "\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u043d\u0435\u0442.",
        f && 1 < _.Fk(),
        _.Mq(d.heading),
        c,
        g,
        d.heading
      );
    },
    qt = function(a) {
      function b(a, b) {
        if (!b || !b.Oa) return b;
        var c = [];
        _.Xi(c, b.Oa.data);
        c = new _.Tp(c);
        new _.ck(_.Gd(_.kq(c), 11)).data[0] = a;
        return { scale: b.scale, $b: b.$b, Oa: c };
      }
      return function(c) {
        var d = pt(a, "roadmap", a.b, { gk: !1, Va: b(3, c.Va().get()) }),
          e = pt(a, "roadmap", a.b, { Va: b(18, c.Va().get()) });
        d = new jt([d, e]);
        c = pt(a, "roadmap", a.b, { Va: c.Va().get() });
        return new nt(d, c);
      };
    },
    rt = function(a) {
      return function(b, c) {
        var d = b.Va().get(),
          e = pt(a, "satellite", null, { heading: b.heading, Va: d, kh: !1 });
        b = pt(a, "hybrid", a.b, { heading: b.heading, Va: d });
        return new jt([e, b], c);
      };
    },
    st = function(a, b) {
      return new ft(
        rt(a),
        a.b,
        _.Fa(b) ? new _.Xl(b) : a.j,
        _.Fa(b) ? 21 : 22,
        "\u0413\u0438\u0431\u0440\u0438\u0434",
        "\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0441\u043f\u0443\u0442\u043d\u0438\u043a\u043e\u0432\u0443\u044e \u043a\u0430\u0440\u0442\u0443 \u0441 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f\u043c\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432",
        _.wr.hybrid,
        "m@" + a.A,
        { type: 68, params: { set: "RoadmapSatellite" } },
        "hybrid",
        a.m,
        a.f,
        a.l,
        b
      );
    },
    tt = function(a) {
      return function(b, c) {
        return pt(a, "satellite", null, {
          heading: b.heading,
          Va: b.Va().get(),
          kh: c
        });
      };
    },
    ut = function(a, b) {
      var c = _.Fa(b);
      return new ft(
        tt(a),
        null,
        _.Fa(b) ? new _.Xl(b) : a.j,
        c ? 21 : 22,
        "\u0421\u043f\u0443\u0442\u043d\u0438\u043a",
        "\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0441\u043f\u0443\u0442\u043d\u0438\u043a\u043e\u0432\u0443\u044e \u043a\u0430\u0440\u0442\u0443",
        c ? "a" : _.wr.satellite,
        null,
        null,
        "satellite",
        a.m,
        a.f,
        a.l,
        b
      );
    },
    vt = function(a, b) {
      return function(c) {
        return pt(a, b, a.b, { Va: c.Va().get() });
      };
    },
    wt = function(a, b, c) {
      c = void 0 === c ? {} : c;
      var d = [0, 90, 180, 270];
      if ("hybrid" == b)
        for (
          b = st(a), b.b = {}, d = _.Aa(d), c = d.next();
          !c.done;
          c = d.next()
        )
          (c = c.value), (b.b[c] = st(a, c));
      else if ("satellite" == b)
        for (
          b = ut(a), b.b = {}, d = _.Aa(d), c = d.next();
          !c.done;
          c = d.next()
        )
          (c = c.value), (b.b[c] = ut(a, c));
      else
        b =
          "roadmap" == b && 1 < _.Fk() && c.Bk
            ? new ft(
                qt(a),
                a.b,
                a.j,
                22,
                "\u041a\u0430\u0440\u0442\u0430",
                "\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043a\u0430\u0440\u0442\u0443 \u0441 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f\u043c\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432",
                _.wr.roadmap,
                "m@" + a.A,
                { type: 68, params: { set: "Roadmap" } },
                "roadmap",
                a.m,
                a.f,
                a.l,
                void 0
              )
            : "terrain" == b
              ? new ft(
                  vt(a, "terrain"),
                  a.b,
                  a.j,
                  21,
                  "\u0420\u0435\u043b\u044c\u0435\u0444",
                  "\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043a\u0430\u0440\u0442\u0443 \u0440\u0435\u043b\u044c\u0435\u0444\u0430 \u0441 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f\u043c\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432",
                  _.wr.terrain,
                  "r@" + a.A,
                  { type: 68, params: { set: "Terrain" } },
                  "terrain",
                  a.m,
                  a.f,
                  a.l,
                  void 0
                )
              : new ft(
                  vt(a, "roadmap"),
                  a.b,
                  a.j,
                  22,
                  "\u041a\u0430\u0440\u0442\u0430",
                  "\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043a\u0430\u0440\u0442\u0443 \u0441 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f\u043c\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432",
                  _.wr.roadmap,
                  "m@" + a.A,
                  { type: 68 },
                  "roadmap",
                  a.m,
                  a.f,
                  a.l,
                  void 0
                );
      return b;
    },
    xt = _.qa(
      ".gm-style-pbc{transition:opacity ease-in-out;background-color:rgba(0,0,0,0.45);text-align:center}.gm-style-pbt{font-size:22px;color:white;font-family:Roboto,Arial,sans-serif;position:relative;margin:0;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}\n"
    ),
    yt = function(a) {
      this.b = a;
      this.f = _.W("p", a);
      this.l = 0;
      _.ll(a, "gm-style-pbc");
      _.ll(this.f, "gm-style-pbt");
      _.om(xt);
      a.style.transitionDuration = "0";
      a.style.opacity = 0;
      _.Kl(a);
    },
    zt = function(a, b) {
      var c =
        2 == _.V.b
          ? "\u0427\u0442\u043e\u0431\u044b \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043c\u0430\u0441\u0448\u0442\u0430\u0431, \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u2318\u00a0+ \u043f\u0440\u043e\u043a\u0440\u0443\u0442\u043a\u0430"
          : "\u0427\u0442\u043e\u0431\u044b \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043c\u0430\u0441\u0448\u0442\u0430\u0431, \u043f\u0440\u043e\u043a\u0440\u0443\u0447\u0438\u0432\u0430\u0439\u0442\u0435 \u043a\u0430\u0440\u0442\u0443, \u0443\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044f \u043a\u043b\u0430\u0432\u0438\u0448\u0443 Ctrl.";
      a.f.textContent = (void 0 === b
      ? 0
      : b)
        ? c
        : "\u0427\u0442\u043e\u0431\u044b \u043f\u0435\u0440\u0435\u043c\u0435\u0441\u0442\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u0443, \u043f\u0440\u043e\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e \u043d\u0435\u0439 \u0434\u0432\u0443\u043c\u044f \u043f\u0430\u043b\u044c\u0446\u0430\u043c\u0438";
      a.b.style.transitionDuration = "0.3s";
      a.b.style.opacity = 1;
    },
    At = function(a) {
      a.b.style.transitionDuration = "0.8s";
      a.b.style.opacity = 0;
    },
    Dt = function(a, b, c, d) {
      var e = this;
      this.b = a;
      this.m = b;
      this.B = c.j;
      this.A = d;
      this.l = 0;
      this.j = null;
      this.f = !1;
      _.xn(c.m, {
        Ja: function(a) {
          return Bt(e, "mousedown", a.coords, a.ea);
        },
        ec: function(a) {
          e.m.Uh() || ((e.j = a), 5 < _.Ua() - e.l && Ct(e));
        },
        La: function(a) {
          return Bt(e, "mouseup", a.coords, a.ea);
        },
        ib: function(a) {
          var b = a.coords,
            c = a.event;
          a = a.zc;
          3 == c.button
            ? a || Bt(e, "rightclick", b, c.ea)
            : a
              ? Bt(e, "dblclick", b, c.ea, Ns("dblclick", b))
              : Bt(e, "click", b, c.ea, Ns("click", b));
        },
        tc: {
          dc: function(a, b) {
            e.f || ((e.f = !0), Bt(e, "dragstart", a.Ga, b.ea));
          },
          gd: function(a) {
            Bt(e, e.f ? "drag" : "mousemove", a.Ga);
          },
          Ec: function(a) {
            e.f && ((e.f = !1), Bt(e, "dragend", a));
          }
        }
      }).Hc(!0);
      new _.Pq(c.j, c.m, {
        Nd: function(a) {
          return Bt(e, "mouseout", a, a);
        },
        Od: function(a) {
          return Bt(e, "mouseover", a, a);
        }
      });
    },
    Ct = function(a) {
      if (a.j) {
        var b = a.j;
        Et(a, "mousemove", b.coords, b.ea);
        a.j = null;
        a.l = _.Ua();
      }
    },
    Bt = function(a, b, c, d, e) {
      Ct(a);
      Et(a, b, c, d, e);
    },
    Et = function(a, b, c, d, e) {
      var f = e || d,
        g = a.m.Hb(c),
        h = _.bm(g, a.b.getProjection()),
        k = a.B.getBoundingClientRect();
      c = new _.Yj(
        h,
        f,
        new _.H(c.clientX - k.left, c.clientY - k.top),
        new _.H(g.H, g.J)
      );
      h = !!d && "touch" == d.pointerType;
      k =
        !!d &&
        !!window.MSPointerEvent &&
        d.pointerType == window.MSPointerEvent.MSPOINTER_TYPE_TOUCH;
      f = a.b.__gm.j;
      g = b;
      h = (!!d && !!d.touches) || h || k;
      k = f.l;
      var n = c.va && _.Mi(c.va);
      if (f.b) {
        var p = f.b;
        var q = f.j;
      } else if ("mouseout" == g || n) q = p = null;
      else {
        for (var t = 0; (p = k[t++]); ) {
          var u = c.oa,
            x = c.latLng;
          (q = p.j(c, !1)) &&
            !p.f(g, q) &&
            ((q = null), (c.oa = u), (c.latLng = x));
          if (q) break;
        }
        if (!q && h)
          for (
            t = 0;
            (p = k[t++]) &&
            ((u = c.oa),
            (x = c.latLng),
            (q = p.j(c, !0)) &&
              !p.f(g, q) &&
              ((q = null), (c.oa = u), (c.latLng = x)),
            !q);

          );
      }
      if (p != f.f || q != f.m)
        f.f && f.f.handleEvent("mouseout", c, f.m),
          (f.f = p),
          (f.m = q),
          p && p.handleEvent("mouseover", c, q);
      p
        ? "mouseover" == g || "mouseout" == g
          ? (q = !1)
          : (p.handleEvent(g, c, q), (q = !0))
        : (q = !!n);
      if (q) d && e && _.Mi(e) && _.Gc(d);
      else {
        a.b.__gm.set("cursor", a.b.get("draggableCursor"));
        ("dragstart" != b && "drag" != b && "dragend" != b) ||
          _.M.trigger(a.b.__gm, b, c);
        if ("none" == a.A.get()) {
          if ("dragstart" == b || "dragend" == b) return;
          "drag" == b && (b = "mousemove");
        }
        "dragstart" == b || "drag" == b || "dragend" == b
          ? _.M.trigger(a.b, b)
          : _.M.trigger(a.b, b, c);
      }
    },
    Lt = function(a, b, c, d, e, f) {
      var g = Ft,
        h = this;
      this.B = a;
      this.A = b;
      this.f = c;
      this.j = d;
      this.m = g;
      e.addListener(function() {
        return Gt(h);
      });
      f.addListener(function() {
        return Gt(h);
      });
      this.l = f;
      this.b = [];
      _.M.addListener(c, "insert_at", function(a) {
        Ht(h, a);
      });
      _.M.addListener(c, "remove_at", function(a) {
        var b = h.b[a];
        b && (h.b.splice(a, 1), It(h), h.j.Bc(b));
      });
      _.M.addListener(c, "set_at", function(a) {
        var b = h.f.getAt(a);
        Jt(h, b);
        a = h.b[a];
        b = Kt(h, b);
        a.j = b;
        a.f.style.display = b ? "" : "none";
        h.j.Ac();
      });
      this.f.forEach(function(a, b) {
        Ht(h, b);
      });
    },
    Gt = function(a) {
      for (var b = a.b.length, c = 0; c < b; ++c) {
        var d = Kt(a, a.f.getAt(c));
        a.b[c].j = d;
      }
      a.j.Ac();
    },
    Ht = function(a, b) {
      var c = a.f.getAt(b);
      Jt(a, c);
      c = a.m(a.A, b, a.j, Kt(a, c), function(c) {
        var d = a.f.getAt(b);
        !c && d && _.M.trigger(d, "tilesloaded");
      });
      a.b.splice(b, 0, c);
      It(a, b);
      a.j.qb(c);
    },
    It = function(a, b) {
      for (var c = 0; c < a.b.length; ++c) c != b && a.b[c].setZIndex(c);
    },
    Jt = function(a, b) {
      if (b) {
        var c = "Oto";
        switch (b.Da) {
          case "roadmap":
            c = "Otm";
            break;
          case "satellite":
            c = "Otk";
            break;
          case "hybrid":
            c = "Oth";
            break;
          case "terrain":
            c = "Otr";
        }
        b instanceof _.Cg && (c = "Ots");
        a.B(c);
      }
    },
    Kt = function(a, b) {
      return b ? (b instanceof _.Bg ? b.Ha(a.l.get()) : new _.Tq(b)) : null;
    },
    Ft = function(a, b, c, d, e) {
      return new _.yk(a, b, c, d, e, !0);
    },
    Mt = function(a, b) {
      this.j = a;
      this.m = b;
    },
    Nt = function(a, b, c, d) {
      return d
        ? new Mt(a, function() {
            return b;
          })
        : _.Bf[23]
          ? new Mt(a, function(a) {
              var d = c.get("scale");
              return 2 == d || 4 == d ? b : a;
            })
          : a;
    },
    Ot = function() {
      var a = null,
        b = null,
        c = !1;
      return function(d, e, f) {
        if (f) return null;
        if (b == d && c == e) return a;
        b = d;
        c = e;
        a = null;
        d instanceof _.Bg ? (a = d.Ha(e)) : d && (a = new _.Tq(d));
        return a;
      };
    },
    Pt = function(a, b, c) {
      this.f = a;
      var d = _.Mo(this, "apistyle"),
        e = _.Mo(this, "authUser"),
        f = _.Mo(this, "baseMapType"),
        g = _.Mo(this, "scale"),
        h = _.Mo(this, "tilt");
      a = _.Mo(this, "blockingLayerCount");
      this.b = null;
      var k = (0, _.y)(this.kk, this);
      b = new _.to([d, e, b, f, g, h], k);
      _.Ko(this, "tileMapType", b);
      this.l = new _.to([b, c, a], Ot());
    },
    Qt = function(a, b) {
      var c = a.__gm;
      b = new Pt(a.mapTypes, c.f, b, _.xj(_.X, a));
      b.bindTo("heading", a);
      b.bindTo("mapTypeId", a);
      _.Bf[23] && b.bindTo("scale", a);
      b.bindTo("apistyle", c);
      b.bindTo("authUser", c);
      b.bindTo("tilt", c);
      b.bindTo("blockingLayerCount", c);
      return b;
    },
    Rt = _.l(),
    Wt = function(a) {
      if (!a) return "";
      var b = [];
      a = _.Aa(a);
      for (var c = a.next(); !c.done; c = a.next()) {
        var d = c.value,
          e = d.elementType,
          f = d.stylers;
        c = [];
        d = (d = d.featureType) && St[d.toLowerCase()];
        (d = null != d ? d : null) && c.push("s.t:" + d);
        (e = (e && Tt[e.toLowerCase()]) || null) && c.push("s.e:" + e);
        if (f)
          for (f = _.Aa(f), d = f.next(); !d.done; d = f.next()) {
            a: {
              e = void 0;
              d = d.value;
              for (e in d) {
                var g = d[e],
                  h = (e && Ut[e.toLowerCase()]) || null;
                if (h && (_.F(g) || _.Hb(g) || _.Jb(g)) && g) {
                  "color" == e && Vt.test(g) && (g = "#ff" + g.substr(1));
                  e = "p." + h + ":" + g;
                  break a;
                }
              }
              e = void 0;
            }
            e && c.push(e);
          }
        (c = c.join("|")) && b.push(c);
      }
      b = b.join(",");
      return 1e3 >= b.length ? b : "";
    },
    Xt = _.l(),
    Yt = function() {
      this.A = new Ls();
      this.m = {};
      this.j = {};
    },
    Zt = function(a, b, c) {
      b = void 0 === b ? -window.Infinity : b;
      c = void 0 === c ? window.Infinity : c;
      return b > c ? (b + c) / 2 : Math.max(Math.min(a, c), b);
    },
    $t = function(a, b, c, d) {
      this.b = a && {
        min: a.min,
        max: a.min.H <= a.max.H ? a.max : new _.dc(a.max.H + 256, a.max.J),
        ti: a.max.H - a.min.H,
        ui: a.max.J - a.min.J
      };
      this.f = b || { min: 0, max: 30 };
      this.j = c;
      this.l = void 0 === d ? !1 : d;
    },
    au = function(a, b) {
      this.G = b;
      this.f = {};
      this.j = this.b = null;
      this.m = new _.dc(0, 0);
      this.l = null;
      this.I = a.j;
      this.B = a.b;
      this.A = a.f;
      this.D = _.vk();
    },
    bu = function(a) {
      return a.l || (a.l = a.I.getBoundingClientRect());
    },
    cu = function(a, b, c) {
      (c && c.xn) || (a.l = null);
      var d = bu(a);
      c = (d.left + d.right) / 2;
      d = (d.top + d.bottom) / 2;
      return a.b
        ? _.Ai(a.b.V, _.ic(a.b.scale, { W: b.clientX - c, Y: b.clientY - d }))
        : new _.dc(0, 0);
    },
    du = function(a, b, c, d) {
      var e = b.V,
        f = _.hc(b.zoom, b.ga, b.heading);
      a.b = { V: e, scale: f };
      b = a.getBounds(b);
      a.m = _.ic(f, _.Gi(_.Hi(f, e)));
      a.j = { W: 0, Y: 0 };
      var g = a.D;
      g &&
        (a.A.style[g] = a.B.style[g] =
          "translate(" + a.j.W + "px," + a.j.Y + "px)");
      a.A.style.willChange = a.B.style.willChange = "";
      g = bu(a);
      for (var h in a.f)
        a.f[h].Ib(
          b,
          a.m,
          f,
          e,
          { W: g.width, Y: g.height },
          { Oh: d, Qb: !0, timestamp: c }
        );
    },
    eu = function(a, b, c) {
      this.m = a;
      this.l = c;
      this.j = b;
      this.b = null;
      this.B = !1;
      this.f = null;
      this.A = !0;
    },
    fu = function(a, b) {
      a.j = b;
      !a.f &&
        a.b &&
        ((b = a.j.nd(a.b)),
        (b.V == a.b.V &&
          b.zoom == a.b.zoom &&
          b.heading == a.b.heading &&
          b.ga == a.b.ga) ||
          a.l(b));
    },
    gu = function(a) {
      a.B ||
        ((a.B = !0),
        _.xk(function(b) {
          a.B = !1;
          if (a.f) {
            var c = a.f,
              d = c.Ab(b),
              e = d.qa,
              f = d.done,
              g = d.Ma;
            0 == f && ((a.f = null), c.ub());
            e ? (a.b = e = a.j.nd(e)) : (e = a.b);
            (g = g || c.Ma) && (g = a.j.nd(g));
            if (e)
              if (0 == f && a.A) du(a.m, e, b, !1);
              else {
                d = a.m;
                var h = e,
                  k = g;
                g = h.V;
                var n = _.hc(h.zoom, h.ga, h.heading),
                  p = !n.ba(d.b && d.b.scale);
                d.b = { scale: n, V: g };
                if (p && d.j)
                  d.m = _.ic(n, _.Gi(_.Hi(n, _.Ai(g, _.ic(n, d.j)))));
                else if (((d.j = _.Gi(_.Hi(n, _.Bi(d.m, g)))), (p = d.D)))
                  (d.A.style[p] = d.B.style[p] =
                    "translate(" + d.j.W + "px," + d.j.Y + "px)"),
                    (d.A.style.willChange = d.B.style.willChange = "transform");
                h = d.getBounds(h);
                k = k && { Fa: d.getBounds(k), zoom: k.zoom };
                p = bu(d);
                for (var q in d.f)
                  d.f[q].Ib(
                    h,
                    d.m,
                    n,
                    g,
                    { W: p.width, Y: p.height },
                    { Oh: !0, Qb: !1, Hd: k, timestamp: b }
                  );
                (1 != f && 0 != f) || gu(a);
              }
            e && !c.Ma && a.l(e);
          } else a.b && du(a.m, a.b, b, !0);
          a.A = !1;
        }));
    },
    hu = function(a, b) {
      a.f && a.f.ub();
      a.f = b;
      a.A = !0;
      var c = b.Ma;
      if (c) {
        var d = a.j.nd(c);
        if (b.Hh && a.b && c.zoom != d.zoom) {
          a.f = null;
          a.l(a.b);
          return;
        }
        a.l(d);
      }
      gu(a);
    },
    iu = function(a, b) {
      this.b = a;
      this.f = b;
    },
    ku = function(a, b, c, d, e) {
      var f = _.Hi(_.hc(b.zoom, b.ga, b.heading), _.Bi(b.V, d));
      return ju(
        a,
        b,
        {
          V: _.Ai(d, _.ic(_.hc(c, b.ga, b.heading), f)),
          zoom: c,
          heading: b.heading,
          ga: b.ga
        },
        d,
        f,
        e
      );
    },
    mu = function(a, b, c, d) {
      var e = _.hc(b.zoom, b.ga, b.heading),
        f = _.hc(c.zoom, c.ga, c.heading),
        g = _.Hi(e, b.V),
        h = _.Hi(f, c.V),
        k = f.m11 - e.m11,
        n = f.m12 - e.m12,
        p = f.m21 - e.m21;
      e = f.m22 - e.m22;
      var q = h.W - g.W;
      g = h.Y - g.Y;
      var t = k * e - n * p;
      return 0.001 < Math.abs(t)
        ? ((k = new _.dc((e * q - n * g) / t, (-p * q + k * g) / t)),
          (f = _.Hi(f, k)),
          ju(a, b, c, k, { W: h.W - f.W, Y: h.Y - f.Y }, d))
        : lu(a, b, c, d);
    },
    ju = function(a, b, c, d, e, f) {
      if (!a.f)
        return {
          Ab: function() {
            return { qa: c, done: 0 };
          },
          Ma: c,
          ub: f
        };
      var g = b.zoom,
        h = b.ga,
        k = b.heading,
        n = c.zoom,
        p = c.ga,
        q = c.heading,
        t = k - 360 * Math.round((k - q) / 360);
      return nu(a, b, c, f, function(a) {
        var b = g * (1 - a) + n * a,
          c = h * (1 - a) + p * a;
        a = t * (1 - a) + q * a;
        return {
          V: _.Ai(_.ic(new _.gc(Math.pow(2, b), c, a), e), d),
          zoom: b,
          ga: c,
          heading: a
        };
      });
    },
    lu = function(a, b, c, d) {
      var e = b.V,
        f = b.zoom,
        g = b.ga,
        h = b.heading,
        k = c.V,
        n = c.zoom,
        p = c.ga,
        q = c.heading;
      return nu(a, b, c, d, function(a) {
        return {
          V: new _.dc(e.H * (1 - a) + k.H * a, e.J * (1 - a) + k.J * a),
          zoom: f * (1 - a) + n * a,
          ga: g * (1 - a) + p * a,
          heading: h * (1 - a) + q * a
        };
      });
    },
    nu = function(a, b, c, d, e) {
      var f = ou(a, b, c) / 0.0015;
      1e3 < f && (f = 0);
      var g;
      return {
        Ab: function(a) {
          a = (void 0 === a ? 0 : a) || _.Ua();
          g || (g = a);
          a = f ? (a - g) / f : 1;
          a = 1 > a ? Math.sin(0.5 * Math.PI * a) : 1;
          return 1 == a
            ? { qa: c, done: 0 }
            : 0 == a
              ? { qa: b, done: 1 }
              : { qa: e(a), done: 1 };
        },
        ub: d,
        Ma: c
      };
    },
    ou = function(a, b, c) {
      function d(d, e) {
        e = cu(a.b, { clientX: d, clientY: e }, { xn: !0 });
        var f = _.Ai(_.ic(h, _.Hi(g, _.Bi(e, b.V))), c.V);
        d = (k * (f.H - e.H)) / (n.right - n.left);
        e = (k * (f.J - e.J)) / (n.bottom - n.top);
        return d * d + e * e;
      }
      var e = b.zoom,
        f = c.zoom,
        g = _.hc(e, b.ga, b.heading),
        h = _.hc(f, c.ga, c.heading),
        k =
          0.001 < Math.abs(e - f)
            ? (Math.LN2 * (e - f)) / (Math.pow(2, -f) - Math.pow(2, -e))
            : Math.pow(2, (e + f) / 2),
        n = bu(a.b);
      return Math.sqrt(
        (d(n.left, n.top) +
          d(n.left, n.bottom) +
          d(n.right, n.bottom) +
          d(n.right, n.top) +
          d((n.left + n.right) / 2, (n.top + n.bottom) / 2)) /
          5
      );
    },
    pu = function(a, b, c) {
      this.Ma = void 0;
      this.Hh = !1;
      this.B = b;
      this.A = c;
      this.l = !0;
      this.m = a;
    },
    qu = function(a, b, c) {
      pu.call(this, a, b, c);
      this.b = [];
      this.f = null;
    },
    ru = function(a, b, c) {
      var d = this;
      this.j = a(function() {
        gu(d.b);
      });
      this.b = new eu(this.j, { nd: _.na() }, function(a) {
        return c(a, d.j.getBounds(a));
      });
      this.l = b(this.j);
      this.f = _.Kh;
    },
    Rs = function(a, b, c, d) {
      var e = a.b.b;
      e &&
        ((b = ku(a.l, e, b, c, void 0 === d ? _.l() : d)),
        (b.Hh = !0),
        hu(a.b, b));
    },
    su = function(a, b) {
      var c = a.b.b;
      if (!c) return null;
      b = new qu(c, b, function() {
        gu(a.b);
      });
      hu(a.b, b);
      return b;
    },
    tu = function(a, b, c) {
      var d = void 0 === c ? !0 : c;
      return new ru(
        function(b) {
          return new au(a, b);
        },
        function(a) {
          return new iu(a, d);
        },
        b
      );
    },
    vu = function(a) {
      this.f = a;
      this.b = new $t(null, new _.ar(0, 30), this.f);
      uu(this);
    },
    uu = function(a) {
      var b = null,
        c = a.get("mapBounds"),
        d = a.get("projection");
      if (c) {
        b = _.am(c.Of.getSouthWest(), d);
        var e = _.am(c.Of.getNorthEast(), d);
        b = {
          min: new _.dc(_.Ii(c.Of.b) ? -window.Infinity : b.H, e.J),
          max: new _.dc(_.Ii(c.Of.b) ? window.Infinity : e.H, b.J)
        };
        e = 1 == c.oo;
      }
      c = new _.ar(a.get("minZoom") || 0, a.get("maxZoom") || 30);
      d = a.get("mapTypeMinZoom");
      var f = a.get("mapTypeMaxZoom"),
        g = a.get("trackerMaxZoom");
      _.F(d) && (c.min = Math.max(c.min, d));
      _.F(g)
        ? (c.max = Math.min(c.max, g))
        : _.F(f) && (c.max = Math.min(c.max, f));
      c.min > c.max &&
        (a.set("minZoom", a.b.f.min), a.set("maxZoom", a.b.f.max));
      _.Wb(function(a) {
        return a.min <= a.max;
      }, "minZoom cannot exceed maxZoom")(c);
      e = new $t(b, c, a.f, e);
      fu(a.f.b, e);
      a.b = e;
      a.set("zoomRange", c);
      a.set("boundsRange", b);
    },
    wu = _.oa("b"),
    yu = function(a) {
      var b =
        (b =
          window.navigator.connection ||
          window.navigator.mozConnection ||
          window.navigator.webkitConnection ||
          null) && b.type;
      _.X(a, "Nt", (b && xu[b]) || "-na");
    },
    zu = function(a, b) {
      function c(c) {
        var d = b.getAt(c);
        if (d instanceof _.Cg) {
          c = d.get("styles");
          var f = Wt(c);
          d.Ha = function(b) {
            var c = b ? ("hybrid" == d.b ? "" : "p.s:-60|p.l:-60") : f,
              e = wt(a, d.b);
            return new gt(e, c, null, null, null).Ha(b);
          };
        }
      }
      _.M.addListener(b, "insert_at", c);
      _.M.addListener(b, "set_at", c);
      b.forEach(function(a, b) {
        return c(b);
      });
    },
    Au = function(a) {
      var b = this;
      this.b = a;
      a.addListener(function() {
        return b.notify("style");
      });
    },
    Bu = function(a, b) {
      this.b = a;
      this.f = b;
    },
    Cu = function(a, b, c) {
      _.yb(_.Bh, function(d, e) {
        b.set(e, wt(a, e, { Bk: c }));
      });
    },
    Du = function(a, b) {
      function c(a) {
        switch (a.Da) {
          case "roadmap":
            return "Tm";
          case "satellite":
            return a.G ? "Ta" : "Tk";
          case "hybrid":
            return a.G ? "Ta" : "Th";
          case "terrain":
            return "Tr";
          default:
            return "To";
        }
      }
      _.Xj(b, "basemaptype_changed", function() {
        var d = b.get("baseMapType");
        d && _.X(a, c(d));
      });
      var d = a.__gm;
      _.Xj(d, "hascustomstyles_changed", function() {
        d.get("hasCustomStyles") && _.X(a, "Ts");
      });
    },
    Eu = function(a) {
      if (a && _.Al(a.getDiv()) && _.wl()) {
        _.X(a, "Tdev");
        var b = window.document.querySelector('meta[name="viewport"]');
        (b = b && b.content) && b.match(/width=device-width/) && _.X(a, "Mfp");
      }
    },
    Fu = function() {
      var a = new Zs(bt()),
        b = {};
      b.obliques = new Zs(ct());
      b.report_map_issue = a;
      return b;
    },
    Gu = function(a) {
      var b = a.get("embedReportOnceLog");
      if (b) {
        var c = function() {
          for (; b.getLength(); ) {
            var c = b.pop();
            _.X(a, c);
          }
        };
        _.M.addListener(b, "insert_at", c);
        c();
      } else
        _.M.addListenerOnce(a, "embedreportoncelog_changed", function() {
          Gu(a);
        });
    },
    Hu = function(a) {
      var b = a.get("embedFeatureLog");
      if (b) {
        var c = function() {
          for (; b.getLength(); ) {
            var c = b.pop();
            _.Gm(a, c);
          }
        };
        _.M.addListener(b, "insert_at", c);
        c();
      } else
        _.M.addListenerOnce(a, "embedfeaturelog_changed", function() {
          Hu(a);
        });
    },
    Iu = _.l();
  us.prototype.release = function() {
    this.j && ((0, window.clearTimeout)(this.j), (this.j = 0));
    for (var a in this.b) this.b[a].Za.release();
    this.b = {};
    this.B.f.removeChild(this.fa);
  };
  _.wk.prototype.Ib = _.xi(10, function(a, b, c, d, e, f) {
    a = _.Gi(_.Hi(c, _.Bi(this.f.min, b)));
    b = _.Hi(c, this.f.min);
    d = _.Hi(c, new _.dc(this.f.max.H, this.f.min.J));
    c = _.Hi(c, new _.dc(this.f.min.H, this.f.max.J));
    this.b.style[this.l] =
      "matrix(" +
      (d.W - b.W) / this.j.width +
      "," +
      (d.Y - b.Y) / this.j.width +
      "," +
      (c.W - b.W) / this.j.height +
      "," +
      (c.Y - b.Y) / this.j.height +
      "," +
      a.W +
      "," +
      a.Y +
      ")";
    this.b.style.willChange = f.Qb ? "" : "transform";
  });
  _.yk.prototype.Ib = _.xi(9, function(a, b, c, d, e, f) {
    var g = this;
    d = f.Qb || (this.A && !b.ba(this.A)) || (this.B && !c.ba(this.B));
    this.A = b;
    this.B = c;
    if (this.j) {
      e = Math.round(Math.log(c.b) / Math.LN2);
      var h = f.Hd ? f.Hd.zoom : e;
      switch (this.j.hb) {
        case 2:
          var k = e;
          break;
        case 3:
          if (h < this.m || f.Qb) k = h;
          break;
        case 1:
        case 4:
          k = h;
      }
      void 0 != k &&
        ((this.m = k), (this.l = this.j && k + "#" + _.Ra(this.j)));
    }
    if (this.l && !this.b[this.l]) {
      Cs(this, f.Oh, a);
      var n = this.l;
      ws(
        (this.b[n] = new us(
          n,
          this.m,
          this,
          this.j,
          1 != this.j.hb && !!this.j.cb,
          function(a) {
            if (n == g.l && a != g.D) {
              g.D = a;
              if (!a) {
                var b = g.l,
                  c;
                for (c in g.b)
                  c != b
                    ? (g.b[c].release(), delete g.b[c])
                    : (g.b[c].fa.style.display = "");
              }
              g.I(a);
            }
          }
        )),
        b,
        c,
        f
      );
    }
    for (var p in this.b) (k = this.b[p]), d && ws(k, b, c, f), Bs(k, a, f);
  });
  _.cm.prototype.Ib = _.xi(8, function(a, b, c) {
    this.b = a;
    this.j = b;
    this.f = c;
    this.A();
  });
  _.A(Es, _.O);
  _.A(Fs, _.O);
  Fs.prototype.getMetadata = function() {
    return new Es(this.data[499]);
  };
  _.A(Gs, _.O);
  Gs.prototype.getZoom = function() {
    return _.P(this, 1);
  };
  Gs.prototype.setZoom = function(a) {
    this.data[1] = a;
  };
  Gs.prototype.getCenter = function() {
    return new Fs(this.data[2]);
  };
  _.A(Hs, _.O);
  _.A(Ks, _.O);
  Ks.prototype.getTile = function() {
    return new _.Rp(this.data[1]);
  };
  var Ut = {
      hue: "h",
      saturation: "s",
      lightness: "l",
      gamma: "g",
      invert_lightness: "il",
      visibility: "v",
      color: "c",
      weight: "w"
    },
    St = {
      all: 0,
      administrative: 1,
      "administrative.country": 17,
      "administrative.province": 18,
      "administrative.locality": 19,
      "administrative.neighborhood": 20,
      "administrative.land_parcel": 21,
      poi: 2,
      "poi.business": 33,
      "poi.government": 34,
      "poi.school": 35,
      "poi.medical": 36,
      "poi.attraction": 37,
      "poi.place_of_worship": 38,
      "poi.sports_complex": 39,
      "poi.park": 40,
      road: 3,
      "road.highway": 49,
      "road.highway.controlled_access": 785,
      "road.arterial": 50,
      "road.local": 51,
      transit: 4,
      "transit.line": 65,
      "transit.station": 66,
      "transit.station.rail": 1057,
      "transit.station.bus": 1058,
      "transit.station.airport": 1059,
      "transit.station.ferry": 1060,
      landscape: 5,
      "landscape.man_made": 81,
      "landscape.natural": 82,
      "landscape.natural.landcover": 1313,
      "landscape.natural.terrain": 1314,
      water: 6
    },
    Tt = {
      all: "",
      geometry: "g",
      "geometry.fill": "g.f",
      "geometry.stroke": "g.s",
      labels: "l",
      "labels.icon": "l.i",
      "labels.text": "l.t",
      "labels.text.fill": "l.t.f",
      "labels.text.stroke": "l.t.s"
    };
  Ls.prototype.addListener = function(a, b) {
    this.O.addListener(a, b);
  };
  Ls.prototype.addListenerOnce = function(a, b) {
    this.O.addListenerOnce(a, b);
  };
  Ls.prototype.removeListener = function(a, b) {
    this.O.removeListener(a, b);
  };
  Ss.prototype.dc = function(a, b) {
    var c = this;
    b.stop();
    this.b ||
      (this.f && _.nq(this.f, !0),
      (b = su(this.j, function() {
        c.b = null;
        c.l.reset();
      }))
        ? (this.b = { origin: a.Ga, nm: this.j.b.b.zoom, Cd: b })
        : this.l.reset());
  };
  Ss.prototype.gd = function(a) {
    if (this.b) {
      var b = this.j.b.b;
      this.b.Cd.j({
        V: b.V,
        zoom: this.b.nm + (a.Ga.clientY - this.b.origin.clientY) / 128,
        heading: b.heading,
        ga: b.ga
      });
    }
  };
  Ss.prototype.Ec = function() {
    this.f && _.nq(this.f, !1);
    this.b && this.b.Cd.release();
    this.b = null;
  };
  Ts.prototype.dc = function(a, b) {
    var c = this,
      d = !this.b && 1 == b.button && 1 == a.Ce,
      e = this.l(d ? 2 : 4);
    "none" == e ||
      ("cooperative" == e && d) ||
      (b.stop(),
      this.b
        ? (this.b.He = Us(this, a))
        : (this.j && _.nq(this.j, !0),
          (b = su(this.f, function() {
            c.b = null;
            c.m.reset();
          }))
            ? (this.b = { He: Us(this, a), Cd: b })
            : this.m.reset()));
  };
  Ts.prototype.gd = function(a) {
    if (this.b) {
      var b = this.l(4);
      if ("none" != b) {
        var c = this.f.b.b;
        b =
          "zoomaroundcenter" == b && 1 < a.Ce
            ? c.V
            : _.Bi(_.Ai(c.V, this.b.He.Ga), this.f.Hb(a.Ga));
        this.b.Cd.j({
          V: b,
          zoom:
            this.b.He.zoom + Math.log(a.radius / this.b.He.radius) / Math.LN2,
          heading: c.heading,
          ga: c.ga
        });
      }
    }
  };
  Ts.prototype.Ec = function() {
    this.l(3);
    this.j && _.nq(this.j, !1);
    this.b && this.b.Cd.release();
    this.b = null;
  };
  _.uj(Zs, _.N);
  Zs.prototype.changed = function(a) {
    if ("available" != a) {
      "featureRects" == a && Ms(this.b);
      a = this.get("viewport");
      var b = this.get("featureRects");
      a = this.f(a, b);
      null != a && a != this.get("available") && this.set("available", a);
    }
  };
  _.uj(ft, _.Bg);
  ft.prototype.Ha = function(a) {
    return this.m(this, void 0 === a ? !1 : a);
  };
  ft.prototype.Va = _.pa("f");
  _.uj(gt, ft);
  it.prototype.Ba = _.pa("f");
  it.prototype.Gb = function() {
    return _.zj(this.b, function(a) {
      return a.Gb();
    });
  };
  it.prototype.release = function() {
    for (var a = _.Aa(this.b), b = a.next(); !b.done; b = a.next())
      b.value.release();
    this.j();
  };
  it.prototype.freeze = function() {
    for (var a = _.Aa(this.b), b = a.next(); !b.done; b = a.next())
      b.value.freeze();
  };
  jt.prototype.Wa = function(a, b) {
    function c() {
      b.wa && f.Gb() && b.wa();
    }
    b = void 0 === b ? {} : b;
    var d = _.rk(window.document, "DIV"),
      e = _.yj(this.b, function(b, e) {
        b = b.Wa(a, { wa: c });
        var f = b.Ba();
        f.style.position = "absolute";
        f.style.zIndex = e;
        d.appendChild(f);
        return b;
      }),
      f = new it(a, d, e, this.tileSize, this.f, { Na: b.Na });
    return f;
  };
  lt.prototype.Ba = function() {
    return this.b.Ba();
  };
  lt.prototype.Gb = function() {
    return !this.l && this.b.Gb();
  };
  lt.prototype.release = function() {
    this.b.release();
  };
  lt.prototype.freeze = function() {
    this.b.freeze();
  };
  mt.prototype.Wa = function(a, b) {
    a = new _.Gq(a, this.B, this.l.createElement("div"), {
      errorMessage:
        "\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u043d\u0435\u0442.",
      Na: b && b.Na
    });
    return new lt(
      a,
      this.b,
      this.D,
      this.f,
      this.A,
      this.sa,
      this.j,
      this.tileSize,
      this.m,
      b && b.wa
    );
  };
  var Ju = [
    { We: 108.25, Ve: 109.625, Ye: 49, Xe: 51.5 },
    { We: 109.625, Ve: 109.75, Ye: 49, Xe: 50.875 },
    { We: 109.75, Ve: 110.5, Ye: 49, Xe: 50.625 },
    { We: 110.5, Ve: 110.625, Ye: 49, Xe: 49.75 }
  ];
  nt.prototype.Wa = function(a, b) {
    a: {
      var c = a.$;
      if (!(7 > c)) {
        var d = 1 << (c - 7);
        c = a.L / d;
        d = a.M / d;
        for (var e = _.Aa(Ju), f = e.next(); !f.done; f = e.next())
          if (
            ((f = f.value), c >= f.We && c <= f.Ve && d >= f.Ye && d <= f.Xe)
          ) {
            c = !0;
            break a;
          }
      }
      c = !1;
    }
    return c ? this.b.Wa(a, b) : this.f.Wa(a, b);
  };
  yt.prototype.j = function(a) {
    var b = this;
    (0, window.clearTimeout)(this.l);
    1 == a
      ? (zt(this, !0),
        (this.l = (0, window.setTimeout)(function() {
          return At(b);
        }, 1500)))
      : 2 == a
        ? zt(this, !1)
        : 3 == a
          ? At(this)
          : 4 == a &&
            ((this.b.style.transitionDuration = "0.2s"),
            (this.b.style.opacity = 0));
  };
  Mt.prototype.l = function(a) {
    return this.m(this.j.l(a));
  };
  Mt.prototype.f = function(a) {
    return this.m(this.j.f(a));
  };
  Mt.prototype.b = function() {
    return this.j.b();
  };
  _.A(Pt, _.N);
  _.m = Pt.prototype;
  _.m.mapTypeId_changed = function() {
    var a = this.get("mapTypeId");
    this.Vd(a);
  };
  _.m.heading_changed = function() {
    var a = this.get("heading");
    if (_.Fa(a)) {
      var b = _.Bb(90 * Math.round(a / 90), 0, 360);
      a != b
        ? this.set("heading", b)
        : ((a = this.get("mapTypeId")), this.Vd(a));
    }
  };
  _.m.tilt_changed = function() {
    var a = this.get("mapTypeId");
    this.Vd(a);
  };
  _.m.setMapTypeId = function(a) {
    this.Vd(a);
    this.set("mapTypeId", a);
  };
  _.m.Vd = function(a) {
    var b = this.get("heading") || 0,
      c = this.f.get(a),
      d = this.get("tilt");
    if (d && c && c instanceof ft && c.b && c.b[b]) c = c.b[b];
    else if (0 == d && 0 != b) {
      this.set("heading", 0);
      return;
    }
    (c && c == this.m) ||
      (this.j && (_.M.removeListener(this.j), (this.j = null)),
      (b = (0, _.y)(this.Vd, this, a)),
      a && (this.j = _.M.addListener(this.f, a.toLowerCase() + "_changed", b)),
      c && c instanceof _.Cg
        ? ((a = c.b),
          this.set("styles", c.get("styles")),
          this.set("baseMapType", this.f.get(a)))
        : (this.set("styles", null), this.set("baseMapType", c)),
      this.set("maxZoom", c && c.maxZoom),
      this.set("minZoom", c && c.minZoom),
      (this.m = c));
  };
  _.m.kk = function(a, b, c, d, e, f) {
    if (void 0 == f) return null;
    if (d instanceof ft) {
      a = new gt(d, a, b, e, c);
      if ((b = this.b instanceof gt))
        if (((b = this.b), b == a)) b = !0;
        else if (b && a) {
          if (
            (c =
              b.heading == a.heading &&
              b.projection == a.projection &&
              b.rd == a.rd)
          )
            (b = b.f.get()),
              (c = a.f.get()),
              (c =
                b == c
                  ? !0
                  : b && c
                    ? b.scale == c.scale &&
                      b.$b == c.$b &&
                      (b.Oa == c.Oa ? !0 : b.Oa && c.Oa ? b.Oa.ba(c.Oa) : !1)
                    : !1);
          b = c;
        } else b = !1;
      b || (this.b = a);
    } else this.b = d;
    return this.b;
  };
  _.A(Rt, _.N);
  Rt.prototype.changed = function(a) {
    if ("maxZoomRects" == a || "latLng" == a) {
      a = this.get("latLng");
      var b = this.get("maxZoomRects");
      if (a && b) {
        for (var c = void 0, d = 0, e; (e = b[d++]); )
          e.Fa.contains(a) && (c = Math.max(c || 0, e.maxZoom));
        a = c;
        a != this.get("maxZoom") && this.set("maxZoom", a);
      } else this.set("maxZoom", void 0);
    }
  };
  var Vt = /^#[0-9a-fA-F]{6}$/;
  _.A(Xt, _.N);
  Xt.prototype.changed = function(a) {
    if ("apistyle" != a && "hasCustomStyles" != a) {
      var b = this.get("mapTypeStyles") || this.get("styles");
      this.set("hasCustomStyles", _.E(b));
      a = [];
      _.Bf[13] &&
        a.push({
          featureType: "poi.business",
          elementType: "labels",
          stylers: [{ visibility: "off" }]
        });
      _.Fb(a, b);
      b = this.get("uDS")
        ? "hybrid" == this.get("mapTypeId")
          ? ""
          : "p.s:-60|p.l:-60"
        : Wt(a);
      b != this.b && ((this.b = b), this.notify("apistyle"));
      a.length && !b && _.pb(_.xj(_.M.trigger, this, "styleerror"));
    }
  };
  Xt.prototype.getApistyle = _.pa("b");
  Yt.prototype.B = function(a) {
    if (_.Hd(a, 0)) {
      this.m = {};
      this.j = {};
      for (var b = 0; b < _.Hd(a, 0); ++b) {
        var c = new Ks(_.aj(a, 0, b)),
          d = c.getTile(),
          e = d.getZoom(),
          f = _.P(d, 1);
        d = _.P(d, 2);
        c = _.P(c, 2);
        var g = this.m;
        g[e] = g[e] || {};
        g[e][f] = g[e][f] || {};
        g[e][f][d] = c;
        this.j[e] = Math.max(this.j[e] || 0, c);
      }
      Ms(this.A);
    }
  };
  Yt.prototype.l = function(a) {
    var b = this.m,
      c = a.L,
      d = a.M;
    a = a.$;
    return (b[a] && b[a][c] && b[a][c][d]) || 0;
  };
  Yt.prototype.f = function(a) {
    return this.j[a] || 0;
  };
  Yt.prototype.b = _.pa("A");
  $t.prototype.nd = function(a) {
    var b = a.V,
      c = a.zoom,
      d = a.heading;
    a = a.ga;
    c = Zt(c, this.f.min, this.f.max);
    if (!this.b) return { V: b, zoom: c, heading: d, ga: a };
    for (;;) {
      var e = this.j.Bf({ V: b, zoom: c, heading: d, ga: a }),
        f = e.max.H - e.min.H;
      e = e.max.J - e.min.J;
      if (c < this.f.max)
        if (this.l) {
          if (this.b.ti < f || this.b.ui < e) {
            ++c;
            continue;
          }
        } else if (this.b.ti <= f / 2 && this.b.ui <= e / 2) {
          ++c;
          continue;
        }
      b = new _.dc(
        Zt(b.H, this.b.min.H + f / 2, this.b.max.H - f / 2),
        Zt(b.J, this.b.min.J + e / 2, this.b.max.J - e / 2)
      );
      return { V: b, zoom: c, heading: d, ga: a };
    }
  };
  au.prototype.getBounds = function(a, b) {
    var c = void 0 === b ? {} : b,
      d = void 0 === c.top ? 0 : c.top;
    b = void 0 === c.left ? 0 : c.left;
    var e = void 0 === c.bottom ? 0 : c.bottom;
    c = void 0 === c.right ? 0 : c.right;
    var f = bu(this);
    b -= f.width / 2;
    c = f.width / 2 - c;
    b > c && (b = c = (b + c) / 2);
    d -= f.height / 2;
    f = f.height / 2 - e;
    d > f && (d = f = (d + f) / 2);
    var g = _.hc(a.zoom, a.ga, a.heading);
    e = _.Ai(a.V, _.ic(g, { W: b, Y: d }));
    d = _.Ai(a.V, _.ic(g, { W: c, Y: d }));
    c = _.Ai(a.V, _.ic(g, { W: c, Y: f }));
    a = _.Ai(a.V, _.ic(g, { W: b, Y: f }));
    return {
      min: new _.dc(Math.min(e.H, d.H, c.H, a.H), Math.min(e.J, d.J, c.J, a.J)),
      max: new _.dc(Math.max(e.H, d.H, c.H, a.H), Math.max(e.J, d.J, c.J, a.J))
    };
  };
  pu.prototype.j = function(a) {
    this.m = a;
    this.A();
  };
  pu.prototype.ub = function() {
    this.l && ((this.l = !1), this.B());
  };
  pu.prototype.release = function() {
    this.A();
    this.ub();
  };
  pu.prototype.Ab = function() {
    return { qa: this.m, done: this.l ? 2 : 0 };
  };
  _.uj(qu, pu);
  qu.prototype.j = function(a) {
    pu.prototype.j.call(this, a);
    var b = _.ki ? _.w.performance.now() : _.Ua();
    (0 < this.b.length && 10 > b - this.b.slice(-1)[0].Te) ||
      (this.b.push({ Te: b, qa: a }),
      10 < this.b.length && this.b.splice(0, 1));
  };
  qu.prototype.release = function() {
    pu.prototype.release.call(this);
    var a = _.ki ? _.w.performance.now() : _.Ua();
    if (!(0 >= this.b.length)) {
      var b = this.b.slice(-1)[0],
        c = _.Wa(this.b, function(b) {
          return 125 > a - b.Te;
        }),
        d = 0 > c ? b : this.b[c];
      if (d != b || 0 != b.qa.zoom % 1) {
        var e = b.qa.zoom - this.b[0].qa.zoom;
        c = b.qa.zoom;
        c = -0.1 > e ? Math.floor(c) : 0.1 < e ? Math.ceil(c) : Math.round(c);
        e = b.Te - d.Te;
        var f = function(a) {
          return a * a;
        };
        f =
          a +
          (1e3 *
            Math.sqrt(
              (Math.sqrt(f(b.qa.V.H - d.qa.V.H) + f(b.qa.V.J - d.qa.V.J)) *
                Math.pow(2, b.qa.zoom)) /
                e
            )) /
            3.2;
        var g = a + (1e3 * (0.5 - Math.abs((b.qa.zoom % 1) - 0.5))) / 2;
        f = 0 >= e ? g : Math.max(g, f);
        g = 0 >= e ? 0 : (b.qa.V.H - d.qa.V.H) / e;
        d = 0 >= e ? 0 : (b.qa.V.J - d.qa.V.J) / e;
        this.f = {
          Ma: {
            V: _.Ai(b.qa.V, new _.dc(((f - a) * g) / 2, ((f - a) * d) / 2)),
            heading: b.qa.heading,
            ga: b.qa.ga,
            zoom: c
          },
          Wm: b.qa.zoom,
          Mh: { Um: g, Vm: d },
          startTime: a,
          endTime: f
        };
      }
    }
  };
  qu.prototype.Ab = function(a) {
    if (!this.f) return pu.prototype.Ab.call(this, a);
    var b = this.f;
    a =
      1 -
      Math.min(1, Math.max(0, (a - b.startTime) / (b.endTime - b.startTime)));
    var c = b.endTime - b.startTime;
    c = _.Bi(
      b.Ma.V,
      new _.dc(0.5 * c * b.Mh.Um * a * a * a, 0.5 * c * b.Mh.Vm * a * a * a)
    );
    0 >= a && (this.f = null);
    return {
      qa: {
        V: c,
        zoom: b.Ma.zoom - a * (b.Ma.zoom - b.Wm),
        ga: b.Ma.ga,
        heading: b.Ma.heading
      },
      Ma: b.Ma,
      done: 0 >= a ? 0 : 1
    };
  };
  _.m = ru.prototype;
  _.m.qb = function(a) {
    var b = this.j,
      c = _.Ra(a);
    b.f[c] || ((b.f[c] = a), b.G());
  };
  _.m.Bc = function(a) {
    var b = this.j,
      c = _.Ra(a);
    b.f[c] && (a.ka(), delete b.f[c]);
  };
  _.m.Th = function() {
    return bu(this.j);
  };
  _.m.Hb = function(a) {
    return cu(this.j, a);
  };
  _.m.Dl = function(a) {
    var b = this.j;
    if (b.b) {
      var c = _.Hi(b.b.scale, _.Bi(a, b.b.V));
      a = c.W;
      c = c.Y;
      b.l = null;
      b = bu(b);
      b = {
        clientX: (b.left + b.right) / 2 + a,
        clientY: (b.top + b.bottom) / 2 + c
      };
    } else b = { clientX: 0, clientY: 0 };
    return b;
  };
  _.m.Bf = function(a, b) {
    return this.j.getBounds(a, b);
  };
  _.m.Ac = function() {
    gu(this.b);
  };
  _.m.Ae = function(a, b) {
    var c = this.b.b;
    c && b
      ? hu(this.b, mu(this.l, c, a, _.l()))
      : hu(this.b, {
          Ab: function() {
            return { qa: a, done: 0 };
          },
          ub: _.l(),
          Ma: a
        });
  };
  _.m.Uh = function() {
    return !!this.b.f;
  };
  _.A(vu, _.N);
  vu.prototype.changed = function(a) {
    "zoomRange" != a && "boundsRange" != a && uu(this);
  };
  _.A(wu, _.N);
  wu.prototype.immutable_changed = function() {
    var a = this,
      b = a.get("immutable"),
      c = a.f;
    b != c &&
      (_.yb(a.b, function(d) {
        (c && c[d]) !== (b && b[d]) && a.set(d, b && b[d]);
      }),
      (a.f = b));
  };
  var xu = {
    bluetooth: "-b",
    cellular: "-c",
    ethernet: "-e",
    none: "-n",
    wifi: "-wf",
    wimax: "-wm",
    other: "-o"
  };
  _.uj(Au, _.N);
  Au.prototype.changed = function(a) {
    "tileMapType" != a && "style" != a && this.notify("style");
  };
  Au.prototype.getStyle = function() {
    var a = [],
      b = this.get("tileMapType");
    if (b instanceof ft && (b = b.__gmsd)) {
      var c = new _.ck();
      c.data[0] = b.type;
      if (b.params)
        for (var d in b.params) {
          var e = _.dk(c);
          _.bk(e, d);
          var f = b.params[d];
          f && (e.data[1] = f);
        }
      a.push(c);
    }
    d = new _.ck();
    d.data[0] = 37;
    _.bk(_.dk(d), "smartmaps");
    a.push(d);
    this.b.get().forEach(function(b) {
      b.yi && a.push(b.yi);
    });
    return a;
  };
  _.uj(Bu, _.N);
  Bu.prototype.getPrintableImageUri = function(a, b, c, d, e) {
    d = void 0 === d ? 0 : d;
    e = void 0 === e ? 1 : e;
    var f = this.get("tileMapType");
    if (2048 < a * e || 2048 < b * e || !(f instanceof ft)) return null;
    d = d || this.get("zoom");
    if (null == d) return null;
    c = c || this.get("center");
    if (!c) return null;
    var g = f.Va().get();
    if (!g.Oa) return null;
    var h = new _.uq(g.Oa);
    _.wq(h, 0);
    var k = this.f.f(d);
    k && _.zq(h, k);
    if ("hybrid" == f.Da) {
      _.lq(h.b);
      for (f = _.Hd(h.b, 1) - 1; 0 < f; --f)
        _.bj(new _.Kp(_.aj(h.b, 1, f)), new _.Kp(_.aj(h.b, 1, f - 1)));
      f = new _.Kp(_.aj(h.b, 1, 0));
      f.data[0] = 1;
      _.$i(f, 1);
      _.$i(f, 2);
    }
    if (2 == e || 4 == e) new _.Mp(_.R(h.b, 4)).data[4] = e;
    e = d;
    d = new Gs(_.R(new _.Sp(_.Gd(h.b, 0)), 3));
    d.setZoom(e);
    e = new Fs(_.R(d, 2));
    f = Js(c.lat());
    e.data[0] = f;
    c = Js(c.lng());
    e.data[1] = c;
    d = new Hs(_.R(d, 0));
    d.data[0] = a;
    d.data[1] = b;
    a = this.b;
    a += "pb=" + (0, window.encodeURIComponent)(_.jq(h.b)).replace(/%20/g, "+");
    null != g.$b && (a += "&authuser=" + g.$b);
    return a;
  };
  Iu.prototype.f = function(a, b, c, d, e, f) {
    var g = _.sf(_.uf(_.T)),
      h = a.__gm,
      k = a.getDiv();
    if (k) {
      _.M.addDomListenerOnce(
        c,
        "mousedown",
        function() {
          _.X(a, "Mi");
        },
        !0
      );
      var n = new _.sr({
          fh: c,
          mh: k,
          gh: !0,
          Jh: _.Zi(_.uf(_.T), 15),
          backgroundColor: b.backgroundColor,
          wg: !0,
          ml: 1 == _.V.type,
          nl: !0
        }),
        p = n.b,
        q = new _.N(),
        t = 0,
        u = 0,
        x = function() {
          var a = n.l,
            b = a.clientWidth;
          a = a.clientHeight;
          if (t != b || u != a) {
            t = b;
            u = a;
            if (Ib) {
              var c = Ib.b,
                d = c.m;
              d.l = null;
              d.G();
              c.f && c.f.Ma ? c.l(c.j.nd(c.f.Ma)) : c.b && c.l(c.b);
            }
            q.set("size", new _.I(b, a));
          }
        };
      _.Gl(n.l, 0);
      h.set("panes", n.jd);
      h.set("innerContainer", n.j);
      var v = new Rt(),
        z = Fu(),
        B,
        C;
      (function() {
        var b = _.P(_.fj(), 14),
          c = a.get("noPerTile") && _.Bf[15],
          d = new Yt();
        B = Nt(d, b, a, c);
        C = new _.fr(g, v, z, c ? null : d);
      })();
      C.bindTo("tilt", a);
      C.bindTo("heading", a);
      C.bindTo("bounds", a);
      C.bindTo("zoom", a);
      k = new ot(new _.ej(_.R(_.T, 1)), B, z.obliques);
      Cu(k, a.mapTypes, b.enableSplitTiles);
      h.set("eventCapturer", n.m);
      h.set("panBlock", n.A);
      var J = _.md(!1),
        K = Qt(a, J);
      C.bindTo("baseMapType", K);
      k = h.Vc = K.l;
      var la = _.md(!1),
        Xa = Ys({
          draggable: _.Mo(a, "draggable"),
          tk: _.Mo(a, "gestureHandling"),
          se: la
        }),
        ud = !_.Bf[20] || 0 != a.get("animatedZoom"),
        Xb = null,
        uc = !1,
        vd = null,
        oi = new _.er(a, function(a) {
          return tu(n, a, ud);
        }),
        Ib = oi.xa,
        Sd = window.document.createElement("iframe");
      Sd.setAttribute("aria-hidden", "true");
      Sd.frameBorder = "0";
      Sd.style.cssText =
        "z-index: -1; position: absolute; width: 100%;height: 100%; top: 0; left: 0; border: none";
      n.l.appendChild(Sd);
      _.M.addDomListener(Sd, "load", function() {
        x();
        _.M.addDomListener(Sd.contentWindow, "resize", x);
      });
      Sd.src = "about:blank";
      var pi = new _.yk(
        p,
        0,
        Ib,
        K.l.get(),
        function(b) {
          a.get("tilesloading") != b && a.set("tilesloading", b);
          b ||
            (Xb && Xb(),
            uc ||
              ((uc = !0),
              wd(),
              d && d.b && _.Yf(d.b),
              vd && (Ib.Bc(vd), (vd = null))),
            _.M.trigger(a, "tilesloaded"));
        },
        !0
      );
      Ib.qb(pi);
      K.l.addListener(function(a) {
        pi.j = a;
        Ib.Ac();
      });
      h.set("cursor", a.get("draggableCursor"));
      new Dt(a, Ib, n, Xa);
      var $e = _.Mo(a, "draggingCursor"),
        Pk = _.Mo(h, "cursor"),
        No = new yt(h.get("panBlock")),
        Vw = Vs(
          Ib,
          n,
          new _.oq(n.j, $e, Pk),
          function(a) {
            var b = Xa.get();
            No.j("cooperative" == b ? a : 4);
            return b;
          },
          {
            Se: !0,
            qh: function() {
              return !a.get("disableDoubleClickZoom");
            },
            li: function() {
              return a.get("scrollwheel");
            }
          }
        );
      _.Zc(Xa, function(a) {
        Vw.Hc("cooperative" == a || "none" == a);
      });
      f({ map: a, xa: Ib, Vc: k, jd: n.jd });
      _.S("onion", function(b) {
        b.f(a, B);
      });
      _.Bf[35] && (Gu(a), Hu(a));
      var Lf = new _.br();
      Lf.bindTo("tilt", a);
      Lf.bindTo("zoom", a);
      Lf.bindTo("mapTypeId", a);
      Lf.bindTo("aerial", z.obliques, "available");
      h.bindTo("tilt", Lf, "actualTilt");
      _.M.addListener(C, "attributiontext_changed", function() {
        a.set("mapDataProviders", C.get("attributionText"));
      });
      var Td = new Xt();
      _.S("util", function(a) {
        _.Zc(a.b.b, function(a) {
          2 == a.getStatus() && (J.set(!0), Td.set("uDS", !0));
        });
      });
      Td.bindTo("styles", a);
      Td.bindTo("mapTypeId", K);
      Td.bindTo("mapTypeStyles", K, "styles");
      h.bindTo("apistyle", Td);
      h.bindTo("hasCustomStyles", Td);
      _.M.forward(Td, "styleerror", a);
      f = new Au(h.f);
      f.bindTo("tileMapType", K);
      h.bindTo("style", f);
      var af = new _.cm(a, Ib, function() {
          h.set("pixelBounds", Ds(af));
        }),
        Qk = af;
      Ib.qb(af);
      h.set("projectionController", af);
      h.set("mouseEventTarget", {});
      new _.vr(_.V.f, n.j).bindTo("title", h);
      d &&
        (_.Zc(d.j, function() {
          var a = d.j.get();
          vd ||
            !a ||
            uc ||
            ((vd = new _.wk(p, -1, a)), d.b && _.Yf(d.b), Ib.qb(vd));
        }),
        d.bindTo("tilt", h),
        d.bindTo("size", h));
      h.bindTo("zoom", a);
      h.bindTo("center", a);
      h.bindTo("size", q);
      h.bindTo("baseMapType", K);
      a.set("tosUrl", _.Lr);
      f = new wu({ projection: 1 });
      f.bindTo("immutable", h, "baseMapType");
      $e = new _.tr({ projection: new _.wf() });
      $e.bindTo("projection", f);
      a.bindTo("projection", $e);
      var qi = function(b, c, d) {
        var e = a.getCenter(),
          f = a.getZoom(),
          g = a.getProjection();
        if (e && null != f && g) {
          var h = a.getTilt() || 0,
            k = a.getHeading() || 0,
            n = _.hc(f, h, k);
          Ib.Ae(
            {
              V: _.Ai(_.am(e, g), _.ic(n, { W: b, Y: c })),
              zoom: f,
              heading: k,
              ga: h
            },
            d
          );
        }
      };
      _.M.addListener(h, "panby", function(a, b) {
        qi(a, b, !0);
      });
      _.M.addListener(h, "panbynow", function(a, b) {
        qi(a, b, !1);
      });
      _.M.addListener(h, "panbyfraction", function(a, b) {
        var c = Ib.Th();
        a *= c.right - c.left;
        b *= c.bottom - c.top;
        qi(a, b, !0);
      });
      _.M.addListener(h, "pantolatlngbounds", function(b, c) {
        _.Oq(a, Ib, b, c);
      });
      _.M.addListener(h, "panto", function(b) {
        if (b instanceof _.L) {
          var c = a.getZoom(),
            d = a.getProjection();
          null != c &&
            d &&
            ((b = {
              V: _.am(b, d),
              zoom: c,
              heading: a.getHeading() || 0,
              ga: a.getTilt() || 0
            }),
            oi.xa.Ae(b, !0),
            oi.j());
        } else throw Error("panTo: latLng must be of type LatLng");
      });
      var ve = new vu(Ib);
      ve.bindTo("mapTypeMaxZoom", K, "maxZoom");
      ve.bindTo("mapTypeMinZoom", K, "minZoom");
      ve.bindTo("maxZoom", a);
      ve.bindTo("minZoom", a);
      ve.bindTo("trackerMaxZoom", v, "maxZoom");
      ve.bindTo("mapBounds", a, "krip");
      ve.bindTo("projection", a);
      var Oo = new _.ur(_.Al(c));
      h.bindTo("fontLoaded", Oo);
      f = h.B;
      f.bindTo("scrollwheel", a);
      f.bindTo("disableDoubleClickZoom", a);
      f = function() {
        var b = a.get("streetView");
        b
          ? (a.bindTo("svClient", b, "client"), b.__gm.bindTo("fontLoaded", Oo))
          : (a.unbind("svClient"), a.set("svClient", null));
      };
      f();
      _.M.addListener(a, "streetview_changed", f);
      if (_.Bf[71]) {
        var we = null;
        _.Xj(a, "floor_changed", function() {
          var b = a.get("floor");
          if ((we && we.parameters.pid_lv) != b) {
            var c = we,
              d = h.f.get();
            we && ((c = null), (d = d.vb(we)));
            b &&
              ((c = new _.mq()),
              (c.ua = "indoor"),
              (c.parameters.pid_lv = b),
              (d = _.Ui(d, c)));
            we = c;
            h.f.set(d);
          }
        });
      }
      var wd = function() {
        _.S("util", function(b) {
          b.f.b();
          window.setTimeout(function() {
            return _.ym(b.b, 1);
          }, _.Yi(_.T, 38) ? _.P(_.T, 38) : 5e3);
          b.l(a);
        });
      };
      a.b ||
        ((Xb = function() {
          Xb = null;
          _.S("controls", function(b) {
            var d = new b.Ig(n.l);
            h.set("layoutManager", d);
            b.yl(d, a, K, n.l, C, z.report_map_issue, ve, Lf, c, la, Qk, Ib);
            b.zl(a, n.j);
            b.xg(c);
          });
        }),
        _.X(a, "Mm"),
        b.v2 && _.X(a, "Mz"),
        _.Hm("Mm", "-p", a),
        Du(a, K),
        _.Km(a, "Mm"),
        _.Pl(function() {
          _.Km(a, "Mm");
        }),
        Eu(a));
      var wc = _.P(_.fj(), 14);
      b = new ot(
        new _.ej(_.R(_.T, 1)),
        new Mt(B, function(a) {
          return a || wc;
        }),
        z.obliques
      );
      zu(b, a.overlayMapTypes);
      new Lt(_.xj(_.X, a), n.jd.mapPane, a.overlayMapTypes, Ib, k, J);
      _.Bf[35] && h.bindTo("card", a);
      a.b || yu(a);
      e &&
        window.setTimeout(function() {
          _.M.trigger(a, "projection_changed");
          _.r(a.get("bounds")) && _.M.trigger(a, "bounds_changed");
          _.M.trigger(a, "tilt_changed");
          _.r(a.get("heading")) && _.M.trigger(a, "heading_changed");
        }, 0);
      _.Bf[15] &&
        ((e = _.sq(_.tq())),
        (e = new Bu(e[0], B)),
        e.bindTo("tileMapType", K),
        e.bindTo("center", a),
        e.bindTo("zoom", h),
        (a.getPrintableImageUri = (0, _.y)(e.getPrintableImageUri, e)),
        h.bindTo("authUser", a));
    }
  };
  Iu.prototype.fitBounds = function(a, b, c) {
    function d() {
      var c = _.Hf(a.getDiv());
      c.width -= e;
      c.width = Math.max(1, c.width);
      c.height -= f;
      c.height = Math.max(1, c.height);
      var d = a.getProjection(),
        k = b.getSouthWest(),
        n = b.getNorthEast(),
        p = k.lng(),
        z = n.lng();
      p > z && (k = new _.L(k.lat(), p - 360, !0));
      k = d.fromLatLngToPoint(k);
      p = d.fromLatLngToPoint(n);
      n = Math.max(k.x, p.x) - Math.min(k.x, p.x);
      k = Math.max(k.y, p.y) - Math.min(k.y, p.y);
      c =
        n > c.width || k > c.height
          ? 0
          : Math.floor(
              Math.min(
                _.Rj(c.width + 1e-12) - _.Rj(n + 1e-12),
                _.Rj(c.height + 1e-12) - _.Rj(k + 1e-12)
              )
            );
      n = _.Bk(d, b, 0);
      n = _.zk(d, new _.H((n.N + n.T) / 2, (n.P + n.U) / 2), 0);
      _.F(c) &&
        n &&
        ((k = _.ic(_.hc(c, a.getTilt() || 0, a.getHeading() || 0), {
          W: g / 2,
          Y: h / 2
        })),
        (n = _.Bi(_.am(n, d), k)),
        (n = _.bm(n, d)),
        a.setCenter(n),
        a.setZoom(c));
    }
    var e = 80,
      f = 80,
      g = 0,
      h = 0;
    if (_.Fa(c)) e = f = 2 * c - 0.01;
    else if (c) {
      var k = c.left || 0,
        n = c.right || 0,
        p = c.bottom || 0;
      c = c.top || 0;
      e = k + n - 0.01;
      f = c + p - 0.01;
      h = c - p;
      g = k - n;
    }
    a.getProjection() ? d() : _.M.addListenerOnce(a, "projection_changed", d);
  };
  Iu.prototype.b = function(a, b, c, d, e) {
    a = new _.Gq(a, b, c, {});
    a.setUrl(d).then(e);
    return a;
  };
  _.fe("map", new Iu());
});
