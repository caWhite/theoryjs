var expect = require("chai").expect;
var Scale = require("../lib/scale").Scale;

describe("Scale", function() {
  describe("Constructor", function() {
    it("Should throw Error (no configuration object specified)", function() {
      expect(Scale).to.throw(Error);
    });
  });

  describe("Parameterized Constructor", function() {
    it("Should return new Scale object in the given key", function() {

      expect(new Scale({tonic: "A", scale: "Minor"})).to.eql({
        notes: ["A", "B", "C", "D", "E", "F", "G"],
        accidentals: 0,
        scale: "Minor",
        tonic: "A"
      });
    });
  });
});
