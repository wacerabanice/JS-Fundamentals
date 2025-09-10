const firstArg = process.argv[2];
const num = parseInt(firstArg, 10);

if (isNaN(num)) {
  console.log("Not a number");
} else {
  console.log(`My number: ${num}`);
}