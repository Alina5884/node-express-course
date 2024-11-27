const { writeFile, readFile } = require("fs").promises;
writeFile("./temporary/temp.txt", "This is my first line\n")
    .then(() => {
        console.log("Line 1");
        return writeFile("./temporary/temp.txt", "This is my second line\n", { flag: "a" });
    })
    .then(() => {
        console.log("Line 2");
        return writeFile("./temporary/temp.txt", "This is my third line\n", { flag: "a" });
    })
    .then(() => {
        console.log("Line 3");
        return readFile("./temporary/temp.txt", "utf-8");
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });