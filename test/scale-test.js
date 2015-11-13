var expect = require("chai").expect;
var Scale = require("../lib/scale").Scale;

describe("Major Scale", function() {
  describe("Default Constructor", function() {
    it("Should return new object of type Scale", function() {
      expect(new Scale()).to.be.an.instanceof(Scale);
    });
  });

  describe("Parameterized Constructor", function() {
    it("Should return new Scale object in the given key", function() {
      expect(new Scale("A", "minor")).to.eql({
        notes: ["A", "B", "C", "D", "E", "F", "G"],
        accidentals: 0
      });
    });
  });
});
