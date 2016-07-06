let notes = ["C", "D", "E", "F", "G", "A", "B"];

let circleOfFifths = ["F", "C", "G", "D", "A", "E", "B"];

let majorKeys = {
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

let minorKeys = {
  "C": -3,
  "C#": 4,
  "D": -1,
  "Eb": -6,
  "E": 1,
  "F": -4,
  "F#": 3,
  "G": -2,
  "G#": 5,
  "Ab": -7,
  "A": 0,
  "A#": 7,
  "B": 2
};

const scaleNames = ["MAJOR", "MINOR"];

function shiftNotes(root) {
  if (!isMusicNote(root))
    return;
  let rootIndex = notes.indexOf(root[0].toUpperCase());
  let back = [];
  let front = [];
  for (let i = 0; i < rootIndex; i++) {
    back.push(notes[i]);
  }
  for (let j = rootIndex; j < notes.length; j++) {
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

export {notes, majorKeys, minorKeys, shiftNotes, isMusicNote, circleOfFifths, scaleNames} ;
