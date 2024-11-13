const EventEmitter = require("events");

const emitter = new EventEmitter();
emitter.on("greeting", (name) => {
    console.log(`Hi there, ${name}!!!`);
});
emitter.on("farewell", (name) => {
    console.log(`Goodbye, ${name}!!!`);
});

emitter.emit("greeting", "Alina");
emitter.emit("farewell", "Alina");

setInterval(() => {
    emitter.emit("timer", "timer!");
}, 3000);
emitter.on("timer", (msg) => {
    console.log(msg);
});