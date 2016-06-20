import {shiftNotes, circleOfFifths, majorKeys, minorKeys} from "./base";

function Scale(tonic, scale) {
  if (!(this instanceof Scale))
    return new Scale(tonic, scale);

  var _notes = shiftNotes(tonic);
  this.tonic = tonic;
  this.scale = scale;

  this.getNote = function(index) {
    return index > 0 && index < 8 ? _notes[index - 1] : null;
  };
}

//TODO construct Scale with accidents
function _constructScale(tonic, scale) {
  var notes = shiftNotes(tonic);
  var numberofAccidents = scale.toUpperCase() === "MAJOR" ? majorKeys[tonic] : minorKeys[tonic];
  var currentNoteIndex = numberofAccidents > 0 ? 0 : 6;
  
}

_constructScale("B", "Major");

export {Scale};
