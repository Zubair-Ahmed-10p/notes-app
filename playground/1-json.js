const fs = require("fs");
// const book = {
//   title: "Ego is the enemy",
//   author: "Ryan Holiday",
// };

// const bookJSON = JSON.stringify(book);

// fs.writeFileSync("1-json.json", bookJSON);

// const dataBuffer = fs.readFileSync("1-json.json");
// const dataJson = dataBuffer.toString();
// const data = JSON.parse(dataJson);

// console.log(data, data?.title);

// loading josn file
const dataBuffer = fs.readFileSync("1-json.json");
const dataJson = dataBuffer.toString();
const data = JSON.parse(dataJson);

const newData = { ...data, name: "Zubair", age: 24 };
const newDataJson = JSON.stringify(newData);
fs.writeFileSync("1-json.json", newDataJson);
