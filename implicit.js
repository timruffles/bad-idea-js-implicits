global = typeof global === "undefined" ? this : global;

exports.set = setImplicit;
exports.get = get;
exports.map = map;

function setImplicit(x) {
  global._ = x;
}

function get(x) {
  setImplicit(x);
  return x;
}

function map(xs, fn, ctx) {
  return xs.map(function(x,i) {
    setImplicit(x);
    return fn(x,i,xs);
  }, ctx);
}
