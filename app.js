const fs = require('fs');

// write sommething new
fs.writeFileSync('notes.txt', 'My is Zubair Ahmed.');

// add something to the existing content
fs.appendFileSync('notes.txt', ' And I am a Node.js developer.'); 