import {shiftNotes, circleOfFifths, scaleNames, majorKeys, minorKeys, isMusicNote} from "./base";
import _ from "lodash";

function Scale(config) {
  if (!(this instanceof Scale))
    return new Scale(config);
  if (config === undefined || config.tonic === undefined || config.scale === undefined)
    throw new Error("Invalid configuration supplied");
  if (!isMusicNote(config.tonic))
    throw new Error("Invalid tonic note supplied");
  if(typeof config.scale !== "string" || !_.includes(scaleNames, config.scale.toUpperCase()))
    throw new Error("Invalid scale provided");

  let _notes = _constructScale(config.tonic, config.scale);

  Object.defineProperty(this, "scale", {value: config.scale, enumerable: true});
  Object.defineProperty(this, "notes", {value: _notes, enumerable: true});
  Object.defineProperty(this, "accidentals", {value: getNumberOfAccidents(config.tonic, config.scale), enumerable: true});
  Object.defineProperty(this, "tonic", {value: _notes[0], enumerable: true});
  // Object.defineProperty(this, "seventh", {value: seventh, enumerable: true})
  // Object.defineProperty(this, "triad", {value: triad, enumerable: true})
}

Scale.prototype.triad = function (index){
  return _chord(this, index, 5);
};
Scale.prototype.seventh = function (index){
  return _chord(this, index, 7);
};

function _constructScale(tonic, scale) {
  let notes = shiftNotes(tonic);
  let numberofAccidents = scale.toUpperCase() === "MAJOR" ? majorKeys[tonic] : minorKeys[tonic];
  let currentAccidentIndex = numberofAccidents > 0 ? 0 : 6;

  switch(numberofAccidents > 0)
    {
        //#'s
      case true:
        for (; numberofAccidents !== 0; numberofAccidents--, currentAccidentIndex++) {
          let cur = notes.indexOf(circleOfFifths[currentAccidentIndex]);
          notes[cur] = `${notes[cur]}#`;
        }
        break;
        //b's
      case false:
        for (; numberofAccidents !== 0; numberofAccidents++, currentAccidentIndex--) {
          let cur = notes.indexOf(circleOfFifths[currentAccidentIndex]);
          notes[cur] = `${notes[cur]}b`;
        }
        break;
        //C Major / A Minor
      default:
        break;
    }
  return notes;
}

function getNumberOfAccidents(tonic, scale){
  if (scaleNames.indexOf(scale.toUpperCase()) === -1)
    return;
  return scale.toUpperCase() === "MAJOR" ? majorKeys[tonic] : minorKeys[tonic];
}

function _chord(scaleObject, degree, range){
  if (degree >= 0 && degree <= 6){
    return _.range(degree, degree + range,2)
              .map(item=>item%7)
                .map(index => scaleObject.notes[index]);
  }
}

export {Scale, _constructScale};
