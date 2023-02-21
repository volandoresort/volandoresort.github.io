//修改人名
let params = new URL(window.location.href).searchParams;
let guestQuery = params.get("guest");
let csvToObj = (data) => {
  const rows = data.split("\n");
  rows.shift();
  let result = rows.map((row) => {
    const [name, query, gender] = row.split(",");
    return { name, query, gender };
  });
  return result;
};

let changeName = (params, result) => {
  let guestName = result.find((el) => {
    return params === el.query;
  });
  document.querySelector(".indexAlert_name").innerHTML = guestName.name;
  document.querySelector(".indexAlert_gender").innerHTML = "  " + guestName.gender;
  document.querySelector(".indexMain_name").innerHTML = `${guestName.name}<div class="indexMain_gender">${guestName.gender}</div>`;
  document.querySelector(".indexMain_gender").innerHTML = guestName.gender;
};

if (!!guestQuery) {
  //如果有人名才執行
  //用本地端js
  changeName(guestQuery, jsondata);
  // 用fetch csv
  // fetch("https://cl-corevalue.phimedia.tv/namelist.csv")
  //   .then((response) => response.text())
  //   .then((data) => {csvToObj(data)})
  //   .then((data) => {
  //     changeName(guestQuery, data);
  //   })
  //   .catch((error) => console.error(error));
}

//載入 youtube
const tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
// window.onYouTubeIframeAPIReady = loadVideo; // onYouTubeIframeAPIReady will load the video after the script is loaded
const firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "360",
    width: "800",
    videoId: "md1tqfsKPOM",
    playerVars: { controls: 0, loop: 1, fs: 0, rel: 0, cc_load_policy: 0 },
    events: {
      onReady: onPlayerReady,
    },
  });
}
function onPlayerReady(event) {
  event.target.mute();
}

//進場動態
let indexAlert = document.querySelector(".indexAlert");
let indexContainer = document.querySelector(".index_container");
let indexMainBgImg = document.querySelector(".indexMain_bg_img");
let indexVideoVideoWrap = document.querySelector(".indexVideo_videoWrap");
// let indexVideoLogo = document.querySelector(".indexVideo_logo");
let balloon1 = document.querySelector(".balloon1");
let balloon2 = document.querySelector(".balloon2");
let balloon3 = document.querySelector(".balloon3");
let indexMainDear = document.querySelector(".indexMain_dear");
let indexMainName = document.querySelector(".indexMain_name");
let indexMainP1 = document.querySelector(".indexMain_p1");
let indexMainP2 = document.querySelector(".indexMain_p2");
let indexMainP3 = document.querySelector(".indexMain_p3");
let indexMainP4 = document.querySelector(".indexMain_p4");
let indexMainP5 = document.querySelector(".indexMain_p5");
let indexMainP6 = document.querySelector(".indexMain_p6");
let indexFooterLogo = document.querySelector(".indexFooter_logo");
let indexFooterWish = document.querySelector(".indexFooter_wish");

//alert消失，彩帶進場
document.querySelector("#start").addEventListener("click", (e) => {
  indexAlert.classList.add("indexAlert-out");
  indexContainer.classList.remove("index_container-lock");
  resizeCanvas();
  indexMainBgImg.classList.add("indexMain_bg_img-big");
  // indexVideoLogo.classList.add("indexVideo_logo-open");
  //彩帶消失，影片進場
  indexVideoVideoWrap.classList.add("indexVideo_videoWrap-open");
  player.unMute(); //關閉靜音
});

//氣球進場 影片播放
indexVideoVideoWrap.addEventListener("animationend", (e) => {
  player.playVideo(); //播放
  balloon1.classList.add("balloon1-open");
  balloon2.classList.add("balloon2-open");
  balloon3.classList.add("balloon3-open");
});
balloon1.addEventListener("animationend", (e) => {
  indexMainDear.classList.add("fade_animation");
});
indexMainDear.addEventListener("animationend", (e) => {
  indexMainName.classList.add("fade_animation");
});
indexMainName.addEventListener("animationend", (e) => {
  indexMainP1.classList.add("fade_animation");
});
indexMainP1.addEventListener("animationend", (e) => {
  indexMainP2.classList.add("fade_animation");
});
indexMainP2.addEventListener("animationend", (e) => {
  indexMainP3.classList.add("fade_animation");
});
indexMainP3.addEventListener("animationend", (e) => {
  indexMainP4.classList.add("fade_animation");
});

//物件滑動才載入
let windowHeight = window.innerHeight;
function handleScroll() {
  var currentScroll = window.scrollY;
  var p5Position = indexMainP5.offsetTop;
  var p6Position = indexMainP6.offsetTop;
  var logoPosition = indexFooterLogo.offsetTop;
  var wishPosition = indexFooterWish.offsetTop;
  if (indexAlert.classList.contains("indexAlert-out") && indexMainP4.classList.contains("fade_animation")) {
    if (currentScroll + windowHeight * 0.85 > p5Position) {
      indexMainP5.classList.add("fade_animation");
    }
    if (currentScroll + windowHeight * 0.85 > p6Position) {
      indexMainP6.classList.add("fade_animation");
    }
    if (currentScroll + windowHeight * 0.85 > logoPosition) {
      indexFooterLogo.classList.add("fade_animation");
    }
    if (currentScroll + windowHeight * 0.85 > wishPosition) {
      indexFooterWish.classList.add("fade_animation");
    }
    if (currentScroll > 1) {
      balloon1.classList.replace("balloon1-open", "indexVideo_balloon-out");
      balloon2.classList.replace("balloon2-open", "indexVideo_balloon-out");
      balloon3.classList.replace("balloon3-open", "indexVideo_balloon-out");
    } else {
      balloon1.classList.replace("indexVideo_balloon-out", "balloon1-open");
      balloon2.classList.replace("indexVideo_balloon-out", "balloon2-open");
      balloon3.classList.replace("indexVideo_balloon-out", "balloon3-open");
    }
  }
}

window.addEventListener("scroll", handleScroll);

///點擊動態
var cH,
  cW,
  anime = (function () {
    var t,
      e,
      n = {
        duration: 1e3,
        delay: 0,
        loop: !1,
        autoplay: !0,
        direction: "normal",
        easing: "easeOutElastic",
        elasticity: 400,
        round: !1,
        begin: void 0,
        update: void 0,
        complete: void 0,
      },
      r = "translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY".split(" "),
      a = {
        array: function (t) {
          return Array.isArray(t);
        },
        object: function (t) {
          return -1 < Object.prototype.toString.call(t).indexOf("Object");
        },
        html: function (t) {
          return t instanceof NodeList || t instanceof HTMLCollection;
        },
        node: function (t) {
          return t.nodeType;
        },
        svg: function (t) {
          return t instanceof SVGElement;
        },
        number: function (t) {
          return !isNaN(parseInt(t));
        },
        string: function (t) {
          return "string" == typeof t;
        },
        func: function (t) {
          return "function" == typeof t;
        },
        undef: function (t) {
          return void 0 === t;
        },
        null: function (t) {
          return "null" == typeof t;
        },
        hex: function (t) {
          return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t);
        },
        rgb: function (t) {
          return /^rgb/.test(t);
        },
        rgba: function (t) {
          return /^rgba/.test(t);
        },
        hsl: function (t) {
          return /^hsl/.test(t);
        },
        color: function (t) {
          return a.hex(t) || a.rgb(t) || a.rgba(t) || a.hsl(t);
        },
      },
      i =
        ((t = {}),
        (e = {
          Sine: function (t) {
            return 1 - Math.cos((t * Math.PI) / 2);
          },
          Circ: function (t) {
            return 1 - Math.sqrt(1 - t * t);
          },
          Elastic: function (t, e) {
            if (0 === t || 1 === t) return t;
            var n = 1 - Math.min(e, 998) / 1e3,
              r = t / 1 - 1;
            return -Math.pow(2, 10 * r) * Math.sin((2 * (r - (n / (2 * Math.PI)) * Math.asin(1)) * Math.PI) / n);
          },
          Back: function (t) {
            return t * t * (3 * t - 2);
          },
          Bounce: function (t) {
            for (var e, n = 4; t < ((e = Math.pow(2, --n)) - 1) / 11; );
            return 1 / Math.pow(4, 3 - n) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2);
          },
        }),
        ["Quad", "Cubic", "Quart", "Quint", "Expo"].forEach(function (t, n) {
          e[t] = function (t) {
            return Math.pow(t, n + 2);
          };
        }),
        Object.keys(e).forEach(function (n) {
          var r = e[n];
          (t["easeIn" + n] = r),
            (t["easeOut" + n] = function (t, e) {
              return 1 - r(1 - t, e);
            }),
            (t["easeInOut" + n] = function (t, e) {
              return 0.5 > t ? r(2 * t, e) / 2 : 1 - r(-2 * t + 2, e) / 2;
            });
        }),
        (t.linear = function (t) {
          return t;
        }),
        t),
      o = function (t) {
        return a.string(t) ? t : t + "";
      },
      s = function (t) {
        return t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
      },
      u = function (t) {
        if (a.color(t)) return !1;
        try {
          return document.querySelectorAll(t);
        } catch (e) {
          return !1;
        }
      },
      c = function (t) {
        return t.reduce(function (t, e) {
          return t.concat(a.array(e) ? c(e) : e);
        }, []);
      },
      l = function (t) {
        return a.array(t) ? t : (a.string(t) && (t = u(t) || t), a.html(t) ? [].slice.call(t) : [t]);
      },
      f = function (t, e) {
        return t.some(function (t) {
          return t === e;
        });
      },
      d = function (t) {
        return t.filter(function (t, e, n) {
          return n.indexOf(t) === e;
        });
      },
      h = function (t) {
        var e,
          n = {};
        for (e in t) n[e] = t[e];
        return n;
      },
      m = function (t, e) {
        for (var n in e) t[n] = a.undef(t[n]) ? e[n] : t[n];
        return t;
      },
      p = function (t) {
        return /([\+\-]?[0-9|auto\.]+)(%|px|pt|em|rem|in|cm|mm|ex|pc|vw|vh|deg)?/.exec(t)[2];
      },
      g = function (t, e, n) {
        return p(e) ? e : -1 < t.indexOf("translate") ? (p(n) ? e + p(n) : e + "px") : -1 < t.indexOf("rotate") || -1 < t.indexOf("skew") ? e + "deg" : e;
      },
      v = function (t, e) {
        return (a.node(t) || a.svg(t)) && f(r, e)
          ? "transform"
          : (a.node(t) || a.svg(t)) && "transform" !== e && y(t, e)
          ? "css"
          : (a.node(t) || a.svg(t)) && (t.getAttribute(e) || t[e])
          ? "attribute"
          : a.null(t[e]) || a.undef(t[e])
          ? void 0
          : "object";
      },
      y = function (t, e) {
        return getComputedStyle(t).getPropertyValue(s(e));
      },
      w = function (t, e) {
        switch (v(t, e)) {
          case "transform":
            return (function (t, e) {
              var n = -1 < e.indexOf("scale") ? 1 : 0,
                r = t.style.transform;
              if (!r) return n;
              for (var a = /(\w+)\((.+?)\)/g, i = [], o = [], s = []; (i = a.exec(r)); ) o.push(i[1]), s.push(i[2]);
              return (r = s.filter(function (t, n) {
                return o[n] === e;
              })).length
                ? r[0]
                : n;
            })(t, e);
          case "css":
            return y(t, e);
          case "attribute":
            return t.getAttribute(e);
        }
        return t[e] || 0;
      },
      x = function (t, e, n) {
        return a.color(e)
          ? (e =
              a.rgb(e) || a.rgba(e)
                ? e
                : a.hex(e)
                ? (function (t) {
                    t = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (t, e, n, r) {
                      return e + e + n + n + r + r;
                    });
                    var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
                    return "rgb(" + (t = parseInt(e[1], 16)) + "," + parseInt(e[2], 16) + "," + (e = parseInt(e[3], 16)) + ")";
                  })(e)
                : a.hsl(e)
                ? (function (t) {
                    t = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t);
                    var e = parseInt(t[1]) / 360,
                      n = parseInt(t[2]) / 100,
                      r = parseInt(t[3]) / 100;
                    if (
                      ((t = function (t, e, n) {
                        return 0 > n && (n += 1), 1 < n && --n, n < 1 / 6 ? t + 6 * (e - t) * n : 0.5 > n ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t;
                      }),
                      0 == n)
                    )
                      n = r = e = r;
                    else {
                      var a = 0.5 > r ? r * (1 + n) : r + n - r * n,
                        i = 2 * r - a;
                      (n = t(i, a, e + 1 / 3)), (r = t(i, a, e)), (e = t(i, a, e - 1 / 3));
                    }
                    return "rgb(" + 255 * n + "," + 255 * r + "," + 255 * e + ")";
                  })(e)
                : void 0)
          : p(e)
          ? e
          : (!(t = p(t.to) ? p(t.to) : p(t.from)) && n && (t = p(n)), t ? e + t : e);
      },
      b = function (t) {
        var e = /-?\d*\.?\d+/g;
        return { original: t, numbers: o(t).match(e) ? o(t).match(e).map(Number) : [0], strings: o(t).split(e) };
      },
      M = function (t, e, n, r) {
        return (
          "transform" === n
            ? ((n = t + "(" + g(t, e.from, e.to) + ")"), (e = t + "(" + g(t, e.to) + ")"))
            : ((t = "css" === n ? y(r, t) : void 0), (n = x(e, e.from, t)), (e = x(e, e.to, t))),
          { from: b(n), to: b(e) }
        );
      },
      P = function (t, e) {
        return (function (t, e) {
          var n = {};
          return (
            t.forEach(function (t) {
              var r = JSON.stringify(
                e.map(function (e) {
                  return t[e];
                })
              );
              (n[r] = n[r] || []), n[r].push(t);
            }),
            Object.keys(n).map(function (t) {
              return n[t];
            })
          );
        })(
          (function (t, e) {
            var n = [];
            return (
              t.forEach(function (r, i) {
                var o = r.target;
                return e.forEach(function (e) {
                  var s = v(o, e.name);
                  if (s) {
                    var u;
                    u = e.name;
                    var c = e.value;
                    (u = { from: 1 < (c = l(a.func(c) ? c(o, i) : c)).length ? c[0] : w(o, u), to: 1 < c.length ? c[1] : c[0] }),
                      ((c = h(e)).animatables = r),
                      (c.type = s),
                      (c.from = M(e.name, u, c.type, o).from),
                      (c.to = M(e.name, u, c.type, o).to),
                      (c.round = a.color(u.from) || c.round ? 1 : 0),
                      (c.delay = (a.func(c.delay) ? c.delay(o, i, t.length) : c.delay) / I.speed),
                      (c.duration = (a.func(c.duration) ? c.duration(o, i, t.length) : c.duration) / I.speed),
                      n.push(c);
                  }
                });
              }),
              n
            );
          })(t, e),
          ["name", "from", "to", "delay", "duration"]
        ).map(function (t) {
          var e = h(t[0]);
          return (
            (e.animatables = t.map(function (t) {
              return t.animatables;
            })),
            (e.totalDuration = e.delay + e.duration),
            e
          );
        });
      },
      E = function (t, e) {
        t.tweens.forEach(function (n) {
          var r = n.from,
            a = t.duration - (n.delay + n.duration);
          (n.from = n.to), (n.to = r), e && (n.delay = a);
        }),
          (t.reversed = !t.reversed);
      },
      O = function (t) {
        var e = [],
          n = [];
        return (
          t.tweens.forEach(function (t) {
            ("css" !== t.type && "transform" !== t.type) ||
              (e.push("css" === t.type ? s(t.name) : "transform"),
              t.animatables.forEach(function (t) {
                n.push(t.target);
              }));
          }),
          { properties: d(e).join(", "), elements: d(n) }
        );
      },
      k = function (t, e) {
        var n = Math.min(Math.max(e - t.delay, 0), t.duration) / t.duration;
        return (function (t, e, n) {
          return e.reduce(function (e, r, a) {
            return (r = r || n[a - 1]), e + t[a - 1] + r;
          });
        })(
          t.to.numbers.map(function (e, r) {
            var a = t.from.numbers[r],
              o = i[t.easing](n, t.elasticity);
            a = t.path
              ? (function (t, e) {
                  var n = t.path,
                    r = t.value * e,
                    a = (o = function (a) {
                      return (a = a || 0), n.getPointAtLength(1 < e ? t.value + a : r + a);
                    })(),
                    i = o(-1),
                    o = o(1);
                  switch (t.name) {
                    case "translateX":
                      return a.x;
                    case "translateY":
                      return a.y;
                    case "rotate":
                      return (180 * Math.atan2(o.y - i.y, o.x - i.x)) / Math.PI;
                  }
                })(t, o)
              : a + o * (e - a);
            return t.round ? Math.round(a * t.round) / t.round : a;
          }),
          t.to.strings,
          t.from.strings
        );
      },
      A = function (t, e) {
        var n = void 0;
        if (
          ((t.time = Math.min(e, t.duration)),
          (t.progress = (t.time / t.duration) * 100),
          t.tweens.forEach(function (t) {
            t.currentValue = k(t, e);
            var r = t.currentValue;
            t.animatables.forEach(function (e) {
              var a = e.id;
              switch (t.type) {
                case "css":
                  e.target.style[t.name] = r;
                  break;
                case "attribute":
                  e.target.setAttribute(t.name, r);
                  break;
                case "object":
                  e.target[t.name] = r;
                  break;
                case "transform":
                  n || (n = {}), n[a] || (n[a] = []), n[a].push(r);
              }
            });
          }),
          n)
        )
          for (var r in n) t.animatables[r].target.style.transform = n[r].join(" ");
        t.settings.update && t.settings.update(t);
      },
      L = function (t) {
        var e = {};
        return (
          (e.animatables = (function (t) {
            return (t = t ? c(a.array(t) ? t.map(l) : l(t)) : []).map(function (t, e) {
              return { target: t, id: e };
            });
          })(t.targets)),
          (e.settings = m(t, n)),
          (e.properties = (function (t, e) {
            var r,
              i = [];
            for (r in t)
              if (!n.hasOwnProperty(r) && "targets" !== r) {
                var o = a.object(t[r]) ? h(t[r]) : { value: t[r] };
                (o.name = r), i.push(m(o, e));
              }
            return i;
          })(t, e.settings)),
          (e.tweens = P(e.animatables, e.properties)),
          (e.duration = e.tweens.length
            ? Math.max.apply(
                Math,
                e.tweens.map(function (t) {
                  return t.totalDuration;
                })
              )
            : t.duration / I.speed),
          (e.time = 0),
          (e.progress = 0),
          (e.running = !1),
          (e.ended = !1),
          e
        );
      },
      C = [],
      I = function (t) {
        var e = L(t),
          n = {
            tick: function () {
              if (e.running) {
                (e.ended = !1), (n.now = +new Date()), (n.current = n.last + n.now - n.start), A(e, n.current);
                var t = e.settings;
                t.begin && n.current >= t.delay && (t.begin(e), (t.begin = void 0)),
                  n.current >= e.duration
                    ? (t.loop
                        ? ((n.start = +new Date()), "alternate" === t.direction && E(e, !0), a.number(t.loop) && t.loop--, (n.raf = requestAnimationFrame(n.tick)))
                        : ((e.ended = !0), t.complete && t.complete(e), e.pause()),
                      (n.last = 0))
                    : (n.raf = requestAnimationFrame(n.tick));
              }
            },
          };
        return (
          (e.seek = function (t) {
            A(e, (t / 100) * e.duration);
          }),
          (e.pause = function () {
            (e.running = !1),
              cancelAnimationFrame(n.raf),
              (function (t) {
                O(t).elements.forEach(function (t) {
                  t.style.removeProperty("will-change");
                });
              })(e);
            var t = C.indexOf(e);
            -1 < t && C.splice(t, 1);
          }),
          (e.play = function (t) {
            t && (e = m(L(m(t, e.settings)), e)),
              e.pause(),
              (e.running = !0),
              (n.start = +new Date()),
              (n.last = e.ended ? 0 : e.time),
              "reverse" === (t = e.settings).direction && E(e),
              "alternate" !== t.direction || t.loop || (t.loop = 1),
              (function (t) {
                var e = O(t);
                e.elements.forEach(function (t) {
                  t.style.willChange = e.properties;
                });
              })(e),
              C.push(e),
              (n.raf = requestAnimationFrame(n.tick));
          }),
          (e.restart = function () {
            e.reversed && E(e), e.pause(), e.seek(0), e.play();
          }),
          e.settings.autoplay && e.play(),
          e
        );
      };
    return (
      (I.speed = 1),
      (I.list = C),
      (I.remove = function (t) {
        t = c(a.array(t) ? t.map(l) : l(t));
        for (var e = C.length - 1; 0 <= e; e--)
          for (var n = C[e], r = n.tweens.length - 1; 0 <= r; r--)
            for (var i = n.tweens[r], o = i.animatables.length - 1; 0 <= o; o--)
              f(t, i.animatables[o].target) && (i.animatables.splice(o, 1), i.animatables.length || n.tweens.splice(r, 1), n.tweens.length || n.pause());
      }),
      (I.easings = i),
      (I.getValue = w),
      (I.path = function (t) {
        return { path: (t = a.string(t) ? u(t)[0] : t), value: t.getTotalLength() };
      }),
      (I.random = function (t, e) {
        return Math.floor(Math.random() * (e - t + 1)) + t;
      }),
      I
    );
  })(),
  c = document.getElementById("c"),
  ctx = c.getContext("2d"),
  bgColor = "#ffffff",
  animations = [],
  circles = [],
  colorPicker = (function () {
    var t = ["#ffffff", "#DFD4C0", "#ffffff", "#A8896D", "#ffffff", "#7F4B1C"],
      e = 0;
    return {
      next: function () {
        return (e = e++ < t.length - 1 ? e : 0), t[e];
      },
      current: function () {
        return t[e];
      },
    };
  })();
function removeAnimation(t) {
  var e = animations.indexOf(t);
  e > -1 && animations.splice(e, 1);
}
function calcPageFillRadius(t, e) {
  var n = Math.max(t - 0, cW - t),
    r = Math.max(e - 0, cH - e);
  return Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2));
}
function addClickListeners() {
  document.addEventListener("mousedown", handleEvent);
}
function handleEvent(t) {
  t.preventDefault();
  // t.touches && (t.preventDefault(), (t = t.touches[0]));
  // console.log(t);
  // console.log(t.pageX, t.pageY);
  // console.log(t.screenX, t.screenY);

  for (
    var e = colorPicker.current(),
      n = colorPicker.next(),
      r = calcPageFillRadius(t.pageX, t.clientY),
      a = Math.min(200, 0.4 * cW),
      i = new Circle({ x: t.pageX, y: t.clientY, r: 0, fill: n }),
      o = anime({
        targets: i,
        r: r,
        duration: Math.max(r / 2, 750),
        easing: "easeOutQuart",
        complete: function () {
          (bgColor = i.fill), removeAnimation(o);
        },
      }),
      s = new Circle({ x: t.pageX, y: t.clientY, r: 0, fill: e, stroke: { width: 1, color: e }, opacity: 1 }),
      u = anime({ targets: s, r: a, opacity: 0, easing: "easeOutExpo", duration: 900, complete: removeAnimation }),
      c = [],
      l = 0;
    l < 32;
    l++
  ) {
    var f = new Circle({ x: t.pageX, y: t.clientY, fill: e, r: anime.random(24, 48) });
    c.push(f);
  }
  var d = anime({
    targets: c,
    x: function (t) {
      return t.x + anime.random(a, -a);
    },
    y: function (t) {
      return t.y + anime.random(1.15 * a, 1.15 * -a);
    },
    r: 0,
    easing: "easeOutExpo",
    duration: anime.random(1e3, 1300),
    complete: removeAnimation,
  });
  animations.push(o, u, d);
}
function extend(t, e) {
  for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
  return t;
}
var Circle = function (t) {
  extend(this, t);
};
Circle.prototype.draw = function () {
  (ctx.globalAlpha = this.opacity || 1),
    ctx.beginPath(),
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, !1),
    this.stroke && ((ctx.strokeStyle = this.stroke.color), (ctx.lineWidth = this.stroke.width), ctx.stroke()),
    this.fill && ((ctx.fillStyle = this.fill), ctx.fill()),
    ctx.closePath(),
    (ctx.globalAlpha = 1);
};
var animate = anime({
    duration: 1 / 0,
    update: function () {
      (ctx.fillStyle = bgColor),
        ctx.fillRect(0, 0, cW, cH),
        animations.forEach(function (t) {
          t.animatables.forEach(function (t) {
            t.target.draw();
          });
        });
    },
  }),
  resizeCanvas = function () {
    (cW = window.innerWidth),
      // (cH = indexContainer.offsetHeight),
      (cH = window.innerHeight),
      (c.width = cW * devicePixelRatio),
      (c.height = cH * devicePixelRatio),
      ctx.scale(devicePixelRatio, devicePixelRatio);
  };
function handleInactiveUser() {
  var t = setTimeout(function () {
    fauxClick(cW / 2, cH / 2);
  }, 2e3);
  function e() {
    clearTimeout(t), document.removeEventListener("mousedown", e);
  }
  document.addEventListener("mousedown", e);
}
function startFauxClicking() {
  setTimeout(function () {
    fauxClick(anime.random(0.2 * cW, 0.8 * cW), anime.random(0.2 * cH, 0.8 * cH)), startFauxClicking();
  }, anime.random(200, 900));
}
function fauxClick(t, e) {
  var n = new Event("mousedown");
  (n.pageX = t), (n.pageY = e), document.dispatchEvent(n);
}
resizeCanvas(),
  window.CP && (window.CP.PenTimer.MAX_TIME_IN_LOOP_WO_EXIT = 6e3),
  window.addEventListener("resize", resizeCanvas),
  addClickListeners(),
  window.location.pathname.match(/fullcpgrid/) && startFauxClicking(),
  handleInactiveUser();
////
