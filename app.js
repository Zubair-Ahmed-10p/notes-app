const chalk = require("chalk");
const validator = require("validator");
const yargs = require("yargs");

// customized yargs version
yargs.version("1.0.1");

// Create add method
yargs.command({
  command: "add",
  describe: "Add a new note",
  handler: () => {
    console.log("Adding a new note!");
  },
});

// Create remove method
yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: () => {
    console.log("Removing the note!");
  },
});

// Create list method
yargs.command({
  command: "list",
  describe: "List your notes",
  handler: () => {
    console.log("Listing out all notes!");
  },
});

// Create read method
yargs.command({
  command: "read",
  describe: "Read a note",
  handler: () => {
    console.log("Reading a note!");
  },
});

// add, remove, read, list

console.log(yargs.argv);
