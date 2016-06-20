var expect = require("chai").expect;
var shiftNotes = require("../lib/base").shiftNotes;
var isMusicNote = require("../lib/base").isMusicNote;
describe("Base", function() {
  describe("shiftNotes", function() {
    it("Should return array of notes starting on given root", function() {
      expect(shiftNotes("C")).to.eql(["C", "D", "E", "F", "G", "A", "B"]);
      expect(shiftNotes("c")).to.eql(["C", "D", "E", "F", "G", "A", "B"]);
      expect(shiftNotes("D")).to.eql(["D", "E", "F", "G", "A", "B", "C"]);
      expect(shiftNotes("d")).to.eql(["D", "E", "F", "G", "A", "B", "C"]);
      expect(shiftNotes("E")).to.eql(["E", "F", "G", "A", "B", "C", "D"]);
      expect(shiftNotes("e")).to.eql(["E", "F", "G", "A", "B", "C", "D"]);
      expect(shiftNotes("F")).to.eql(["F", "G", "A", "B", "C", "D", "E"]);
      expect(shiftNotes("f")).to.eql(["F", "G", "A", "B", "C", "D", "E"]);
      expect(shiftNotes("G")).to.eql(["G", "A", "B", "C", "D", "E", "F"]);
      expect(shiftNotes("g")).to.eql(["G", "A", "B", "C", "D", "E", "F"]);
      expect(shiftNotes("A")).to.eql(["A", "B", "C", "D", "E", "F", "G"]);
      expect(shiftNotes("a")).to.eql(["A", "B", "C", "D", "E", "F", "G"]);
      expect(shiftNotes("B")).to.eql(["B", "C", "D", "E", "F", "G", "A"]);
      expect(shiftNotes("b")).to.eql(["B", "C", "D", "E", "F", "G", "A"]);
      expect(shiftNotes("!")).to.eql(undefined); //Bad root note parameter
    });
  });
  describe("isMusicNote", function (){
    it("Should evaluate if given note is valid", function () {
      expect(isMusicNote("C")).to.eql(true);
      expect(isMusicNote("C#")).to.eql(true);
      expect(isMusicNote("C##")).to.eql(true);
      expect(isMusicNote("Cb")).to.eql(true);
      expect(isMusicNote("Cbb")).to.eql(true);
      expect(isMusicNote("C#b")).to.eql(false);
      
    });
  } );
});

