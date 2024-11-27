const { createReadStream } = require("fs");

const stream = createReadStream("../content/big.txt", { encoding: "utf-8", highWaterMark: 200});

let chunkCount = 0;

stream.on("data", (chunk) => {
    console.log(chunk);
    chunkCount++;
});

stream.on("end", () => {
    console.log(chunkCount);
});
stream.on("error", (err) => {console.log(err)});