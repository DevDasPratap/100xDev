const fs = require("fs");
const { resolve } = require("path");

// async function
function readfile() {
  return new Promise(function (resolve) {
    console.log("inside promise");
    fs.readFile("a.txt", "utf-8", function (err, data) {
      console.log("Before resolve");
      resolve(data);
    });
  });
}

// callback fun to call
function onDone(data) {
  console.log(data);
}
var a = readfile();
a.then(onDone);
