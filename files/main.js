import fs from "fs";

console.log("starting");

// fs.writeFileSync("harshit.txt", "I am a good Boy")
// fs.writeFile("./harshit.txt", "I am a good Boy", () => {
//     console.log("done");
//     fs.readFile("harshit.txt", (error, data) => {
//         console.log(error, data.toString());
//     })
// })

fs.appendFile("./files/harshit.txt", "\nI am done", (e, d) => {
    console.log(d);
})