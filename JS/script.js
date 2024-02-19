const _0x4b734e = _0x2983;
(function (_0xf57d83, _0x3f81cd) {
  const _0x521ca8 = _0x2983,
    _0x3b79de = _0xf57d83();
  while (!![]) {
    try {
      const _0xcbe589 =
        parseInt(_0x521ca8(0x1df)) / 0x1 +
        (parseInt(_0x521ca8(0x1f3)) / 0x2) *
          (parseInt(_0x521ca8(0x1e7)) / 0x3) +
        (parseInt(_0x521ca8(0x1db)) / 0x4) *
          (-parseInt(_0x521ca8(0x1cf)) / 0x5) +
        (-parseInt(_0x521ca8(0x1ee)) / 0x6) *
          (parseInt(_0x521ca8(0x1d5)) / 0x7) +
        -parseInt(_0x521ca8(0x1e2)) / 0x8 +
        (-parseInt(_0x521ca8(0x1e8)) / 0x9) *
          (parseInt(_0x521ca8(0x1d3)) / 0xa) +
        parseInt(_0x521ca8(0x1d8)) / 0xb;
      if (_0xcbe589 === _0x3f81cd) break;
      else _0x3b79de["push"](_0x3b79de["shift"]());
    } catch (_0x4c09c0) {
      _0x3b79de["push"](_0x3b79de["shift"]());
    }
  }
})(_0x4a94, 0xb678e),
  document["addEventListener"]("contextmenu", function (_0x109cf8) {
    _0x109cf8["preventDefault"]();
  }),
  (document[_0x4b734e(0x1da)] = function (_0x100a3f) {
    const _0x49613d = _0x4b734e;
    console["log"](_0x100a3f[_0x49613d(0x1e6)]);
    if (
      _0x100a3f[_0x49613d(0x1ef)] &&
      (_0x100a3f[_0x49613d(0x1e6)] == "c" || _0x100a3f["key"] == "v")
    )
      return !![];
    else {
      if (
        _0x100a3f[_0x49613d(0x1ef)] ||
        _0x100a3f[_0x49613d(0x1e6)] == _0x49613d(0x1d9)
      )
        return ![];
      else {
        if (_0x100a3f[_0x49613d(0x1ef)] && _0x100a3f["key"] == "u") return ![];
        else {
          if (
            _0x100a3f["ctrlKey"] &&
            _0x100a3f[_0x49613d(0x1d7)] &&
            (_0x100a3f[_0x49613d(0x1e6)] == "I" ||
              _0x100a3f[_0x49613d(0x1e6)] == "C")
          )
            return ![];
          else return ![];
        }
      }
    }
  });
const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=3",
  IMGPATH = _0x4b734e(0x1f2),
  SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=",
  movieBox = document[_0x4b734e(0x1d1)](_0x4b734e(0x1e0)),
  getMovies = async (_0x107862) => {
    const _0x6b705a = _0x4b734e;
    let _0x3dd3d2 = await fetch(_0x107862),
      _0x343392 = await _0x3dd3d2["json"]();
    showMovie(_0x343392[_0x6b705a(0x1e4)]);
  },
  showMovie = (_0x223f0a) => {
    const _0x51cadf = _0x4b734e;
    _0x223f0a[_0x51cadf(0x1d6)]((_0xbb76a0) => {
      const _0x3e1c16 = _0x51cadf;
      let _0xf7639c = document[_0x3e1c16(0x1ea)](_0x3e1c16(0x1e1));
      _0xf7639c[_0x3e1c16(0x1de)][_0x3e1c16(0x1e3)](_0x3e1c16(0x1eb)),
        (_0xf7639c[_0x3e1c16(0x1dd)] =
          _0x3e1c16(0x1e9) +
          (_0x3e1c16(0x1f2) + _0xbb76a0["poster_path"]) +
          _0x3e1c16(0x1d0) +
          _0xbb76a0[_0x3e1c16(0x1e5)] +
          _0x3e1c16(0x1ed) +
          _0xbb76a0[_0x3e1c16(0x1f0)] +
          "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3>Overview</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          _0xbb76a0["overview"] +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20"),
        movieBox["appendChild"](_0xf7639c);
    });
  };
function _0x2983(_0x25da8d, _0x2f011c) {
  const _0x4a9440 = _0x4a94();
  return (
    (_0x2983 = function (_0x298317, _0x38013a) {
      _0x298317 = _0x298317 - 0x1cf;
      let _0x59c590 = _0x4a9440[_0x298317];
      return _0x59c590;
    }),
    _0x2983(_0x25da8d, _0x2f011c)
  );
}
document["querySelector"](_0x4b734e(0x1d4))[_0x4b734e(0x1d2)](
  _0x4b734e(0x1dc),
  function (_0x2fb287) {
    const _0x1a2e20 = _0x4b734e;
    if ("" != _0x2fb287[_0x1a2e20(0x1ec)][_0x1a2e20(0x1f1)])
      (movieBox[_0x1a2e20(0x1dd)] = ""),
        getMovies(
          "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=" +
            _0x2fb287[_0x1a2e20(0x1ec)][_0x1a2e20(0x1f1)]
        );
    else {
      movieBox[_0x1a2e20(0x1dd)] = "";
      for (let _0x201139 = 0x1; _0x201139 < 0x15; _0x201139++)
        getMovies(APIURL + _0x201139);
    }
  }
);
for (let i = 0x1; i < 0x15; i++) getMovies(APIURL + i);
function _0x4a94() {
  const _0x26e904 = [
    "1602PrPYgk",
    "ctrlKey",
    "vote_average",
    "value",
    "https://image.tmdb.org/t/p/w1280",
    "294498LJaPaJ",
    "5oWVOtF",
    "\x22\x20alt=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22overlay\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2>",
    "querySelector",
    "addEventListener",
    "2401540scwYyP",
    "#search",
    "10787KFUlhu",
    "forEach",
    "shiftKey",
    "11571395JGqjPW",
    "F12",
    "onkeydown",
    "2853272NFcGSF",
    "keyup",
    "innerHTML",
    "classList",
    "473108pkjcYv",
    "#movie-box",
    "div",
    "3982520bTxdyb",
    "add",
    "results",
    "title",
    "key",
    "27JxBzBQ",
    "18QzbYGY",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22",
    "createElement",
    "box",
    "target",
    "</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>",
  ];
  _0x4a94 = function () {
    return _0x26e904;
  };
  return _0x4a94();
}
