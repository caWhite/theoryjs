var expect = require("chai").expect;
var {Scale, ScaleUtilities} = require("../lib/scale");

describe("Scale", function() {
  describe("Factory", function() {
    it("Should throw object with error prop", () => {
      let obj = Scale.create();
      expect(obj).to.have.property('error')
    });
  });

  describe("Parameterized Constructor", function() {
    it("Should return new Scale object in the given key", () => {
      let obj = Scale.create({tonic: "A", scale: "Minor"});
      expect(obj).to.eql(Object.assign({
        notes: ["A", "B", "C", "D", "E", "F", "G"],
        accidentals: 0,
        scale: "Minor",
        tonic: "A"
      },ScaleUtilities));
    });
  });
});
