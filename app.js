const validator = require("validator");
const yargs = require("yargs");

const { getNotes, addNote, removeNote } = require("./notes");

// customized yargs version
yargs.version("1.0.1");

// Create add method
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    addNote(argv?.title, argv?.body);
  },
});

// Create remove method
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    removeNote(argv?.title);
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
yargs.parse();
// console.log(yargs.argv);
