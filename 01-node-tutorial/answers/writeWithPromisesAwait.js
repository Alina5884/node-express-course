const { writeFile, readFile } = require("fs").promises;

async function writer() {
    try {
        await writeFile("./temporary/temp.txt", "this is the first line\n");
        await writeFile("./temporary/temp.txt", "this is the second line\n", { flag: "a"});
        await writeFile("./temporary/temp.txt", "this is the third line\n", { flag: "a"});
    } catch (error) {
        console.log(error);
    }
}

async function reader() {
    try {
        const result = await readFile("./temporary/temp.txt", "utf-8");
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

async function readWrite() {
    await writer();
    await reader();
}

readWrite();