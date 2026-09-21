const numbers = [4, -2, 7, -9, 0, 5, -1, 8];

const positive = [];
const negative = [];
const zero = [];

for (const num of numbers) {
    if (num > 0) {
        positive.push(num);
    } else if (num < 0) {
        negative.push(num);
    } else {
        zero.push(num);
    }
}

console.log("Positive:", positive);
console.log("Negative:", negative);
console.log("Zero:", zero);
