const {readFileSync, writeFileSync} = require("fs");

writeFileSync("./temporary/fileA.txt", "this is the first line\n");
writeFileSync("./temporary/fileA.txt", "this is the second line\n", { flag: "a"});
writeFileSync("./temporary/fileA.txt", "this is the third line\n", { flag: "a"});

const content = readFileSync("./temporary/fileA.txt", "utf-8");

console.log(content);