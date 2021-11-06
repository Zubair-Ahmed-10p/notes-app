const chalk = require("chalk");
const validator = require("validator");
const { add } = require("./utils");
const { getNotes } = require("./notes");

const sum = add(3, 4);
const notes = getNotes();

console.log(chalk.blue(notes, sum));
console.log(...process.argv.slice(2));
const command = process.argv.slice(2)[0];
if (command === "add") {
  console.log("Adding note!");
} else if (command === "remove") {
  console.log("Removing note!");
}
