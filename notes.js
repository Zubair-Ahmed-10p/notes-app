const fs = require("fs");
const chalk = require("chalk");

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer?.toString();
    return JSON.parse(dataJSON || null) || [];
  } catch (error) {
    return [];
  }
};

const saveNotes = (notes) => {
  const notesJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", notesJSON);
};

const findNoteIndex = (notes, title) =>
  notes.findIndex((note) => note?.title === title);

const getNotes = () => "Your notes...";

const addNote = (title, body) => {
  const notes = loadNotes();

  if (findNoteIndex(notes, title) > -1) {
    console.log(chalk.redBright(`Note with title "${title}" already exist`));
    return;
  }

  notes.push({
    title,
    body,
  });

  saveNotes(notes);
  console.log(chalk.greenBright(`New note added!`));
};

const removeNote = (title) => {
  const notes = loadNotes();

  const noteIndex = findNoteIndex(notes, title);
  if (noteIndex === -1) {
    console.log(chalk.redBright(`Note ${title} does not exists`));
    return;
  }
  notes.splice(noteIndex, 1);
  saveNotes(notes);
  console.log(chalk.greenBright(`Note: ${title} removed!`));
};

module.exports = { getNotes, addNote, removeNote };
