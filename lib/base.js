var notes = ["C", "D", "E", "F", "G", "A", "B"];

var circle_of_fifths = ["F", "C", "G", "D", "A", "E", "B"];

var major_keys = {
  C: 0,
  D: 1,
  E: 4,
  F: -1,
  G: 1,
  A: 3,
  B: 5
};

var minor_keys = {
  C: 0,
  D: -1,
  E: 1,
  F: -4,
  G: -2,
  A: 0,
  B: 2
};

function shift(root) {
  if (!isMusicNote(root))
    return;
  var root_index = notes.indexOf(root.toUpperCase());
  var back = [],
    front = [];
  for (var i = 0; i < root_index; i++) {
    back.push(notes[i]);
  }
  for (var j = root_index; j < notes.length; j++) {
    front.push(notes[j]);
  }
  return front.concat(back);
}

function isMusicNote(str, allowAccidents) {
  if (allowAccidents)
    return /^[a-gA-G]{1}[b#]{0,2}$/.test(str);
  else {
    return /^[a-gA-G]{1}/.test(str);
  }
}

module.exports = {
  notes: notes,
  major_keys: major_keys,
  minor_keys: minor_keys,
  shiftNotes: shift,
  isMusicNote: isMusicNote,
};
