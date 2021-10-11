const chalk = require("chalk");
const validator = require("validator");
const { add } = require("./utils");
const { getNotes } = require("./notes");

const sum = add(3, 4);
const notes = getNotes();

console.log({ sum, notes });

console.log({ isEmail: validator.isEmail("abc@mail.com") });

console.log({ isUrl: validator.isURL("abc@mail.com") });

console.log(chalk.greenBright.bold.italic.bgBlack("Success :)"));

console.log(chalk.redBright.bold.underline.bgBlack("Error :("));
