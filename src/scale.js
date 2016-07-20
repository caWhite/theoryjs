import {
  shiftNotes,
  circleOfFifths,
  scaleNames,
  majorKeys,
  minorKeys,
  isMusicNote
}
from "./base";
import _ from "lodash";

let ScaleUtilities = {
  triad(index) {
    return _chord(this, index, 5);
  },
  seventh(index) {
    return _chord(this, index, 7);
  }
};

let Scale = {
  create: function(config) {
    let {error} = validateConf(config);
    if (error.length)
      return {
        error
      };
    else {
      let {
        tonic,
        scale
      } = config;
      let scaleObject = {
        tonic,
        scale,
        notes: _constructScale(tonic, scale),
        accidentals: getNumberOfAccidents(tonic, scale)
      };
      return Object.assign(scaleObject, ScaleUtilities);
    }
  }
};

function validateConf(config) {
  let error = [];
  if (!config)
    error.push("Config object not specified");
  else {
    let {tonic ,scale } = config;
    [validTonic(tonic), validScale(scale)].reduce((prev, cur) => {
      if (cur.error)
        prev.push(cur.error);
      return prev;
    }, error);
  }

  return { error };
}

function validTonic(tonic) {
  if (tonic) {
    return _.includes(Object.keys(majorKeys), tonic) || _.includes(Object.keys(minorKeys), tonic);
  } else {
    return {
      error: `${tonic} not valid scale tonic`
    };
  }
}

function validScale(scale) {
  if (scale) {
    return _.includes(scaleNames, scale.toUpperCase());
  } else {
    return {
      error: `${scale} not a composable scale`
    };
  }
}

function _constructScale(tonic, scale) {
  let notes = shiftNotes(tonic);
  let numberofAccidents = scale.toUpperCase() === "MAJOR" ? majorKeys[tonic] : minorKeys[tonic];
  let currentAccidentIndex = numberofAccidents > 0 ? 0 : 6;

  switch (numberofAccidents > 0) {
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

function getNumberOfAccidents(tonic, scale) {
  if (scaleNames.indexOf(scale.toUpperCase()) === -1)
    return;
  return scale.toUpperCase() === "MAJOR" ? majorKeys[tonic] : minorKeys[tonic];
}

function _chord(scaleObject, degree, range) {
  if (degree >= 0 && degree <= 6) {
    return _.range(degree, degree + range, 2)
      .map(item => item % 7)
      .map(index => scaleObject.notes[index]);
  }
}

export {Scale, ScaleUtilities,_constructScale};
