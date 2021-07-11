// let words = " hey Im me hey hey hi";
// //will stop at first of the word if it is repeated

// console.log(words.indexOf(`hey`));
// console.log(words.lastIndexOf(`hey`));

let sillyString = "   string place for a sentence Hello    ";

console.log(sillyString.trim());
sillyString = sillyString.trim();

sillyString = sillyString.padStart(sillyString + 5, ".");
sillyString = sillyString.padEnd(sillyString + 5, ".");