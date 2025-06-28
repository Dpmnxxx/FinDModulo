const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Enter a number: ", (num) => {
  for (let i = 1; i <= num; i++) {
      console.log((i % 3 === 0 ? "Fizz" : "") + (i % 5 === 0 ? "Buzz" : "") + (i % 7 === 0 ? "Woof" : "") || i);
  }
  readline.close();
});