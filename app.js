const { add } = require("./utils");
const { getNotes } = require("./notes");

const sum = add(3, 4);
const notes = getNotes();

console.log({ sum, notes });
