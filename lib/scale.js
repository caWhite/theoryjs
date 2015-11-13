var util = require("./base");
var notes = util.notes,
  major_keys = util.major_keys,
  minor_keys = util.minor_keys;

function Scale(tonic, scale) {
  if (!(this instanceof Scale))
    return new Scale(tonic, scale);

  this.tonic = tonic;
  this.scale = scale;
}

module.exports.Scale = Scale;

console.log(new Scale("C", "major"));
