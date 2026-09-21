const sentence = "JavaScript makes web development interactive";

const words = sentence.split(" ");

let longest = "";

for (const word of words) {
    if (word.length > longest.length) {
        longest = word;
    }
}

console.log("Longest word:", longest);
console.log("Length:", longest.length);
