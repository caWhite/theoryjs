var notes = ["C", "D", "E", "F", "G", "A", "B"];

var circleOfFifths = ["F", "C", "G", "D", "A", "E", "B"];

var majorKeys = {
  "Cb": -7,
  "C": 0,
  "C#": 7,
  "Db": -5,
  "D": 2,
  "Eb": -3,
  "E": 4,
  "F": -1,
  "F#": 6,
  "Gb": -6,
  "G": 1,
  "Ab": -4,
  "A": 3,
  "Bb": -2,
  "B": 5
};

var minorKeys = {
  "C": -3,
  "C#": 4,
  "D": -1,
  "E": 1,
  "F": -4,
  "G": -2,
  "A": 0,
  "B": 2
};

function shiftNotes(root) {
  if (!isMusicNote(root))
    return;
  var rootIndex = notes.indexOf(root[0].toUpperCase());
  var back = [];
  var front = [];
  for (var i = 0; i < rootIndex; i++) {
    back.push(notes[i]);
  }
  for (var j = rootIndex; j < notes.length; j++) {
    front.push(notes[j]);
  }
  return front.concat(back);
}

function isMusicNote(str) {
  let chars = str.split("");

  let sharps = chars.filter(item => {
    return item === "#";
  }).length;

  let flats = chars.filter(item => {
    return item === "b";
  }).length;

  if (!(sharps > 0 && flats > 0)) {
    return /^[a-gA-G]{1}[b#]{0,2}$/.test(str);
  }
  return false;
}

export {notes, majorKeys, minorKeys, shiftNotes, isMusicNote, circleOfFifths};
