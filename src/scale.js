import {shiftNotes, circleOfFifths, majorKeys, minorKeys} from "./base";

function Scale(config) {
  if (!(this instanceof Scale))
    return new Scale(config);
  if (config === undefined || config.tonic === undefined || config.scale === undefined)
    throw new Error("Invalid configuration supplied");

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

  var currentAccidentIndex = numberofAccidents > 0 ? 0 : 6;

  switch(numberofAccidents > 0)
    {
        //#'s
      case true:
        for (; numberofAccidents !== 0; numberofAccidents--, currentAccidentIndex++) {
          let cur = notes.indexOf(circleOfFifths[currentAccidentIndex]);
          notes[cur] = `${notes[cur]}#`
        }
        break;
        //b's
      case false:
        for (; numberofAccidents !== 0; numberofAccidents++, currentAccidentIndex--) {
          let cur = notes.indexOf(circleOfFifths[currentAccidentIndex]);
          notes[cur] = `${notes[cur]}#`
        }
        break;
        //C Major / A Minor
      default:
        break;
    }
  return notes
}

let test = _constructScale("B", "Minor");
console.log(test);

export {Scale, _constructScale};
