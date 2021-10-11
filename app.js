const validator = require("validator");
const { add } = require("./utils");
const { getNotes } = require("./notes");

const sum = add(3, 4);
const notes = getNotes();

console.log({ sum, notes });

console.log({ isEmail: validator.isEmail("abc@mail.com") });

console.log({ isUrl: validator.isURL("abc@mail.com") });
