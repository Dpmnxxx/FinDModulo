import validator from 'validator'
import promptSync from 'prompt-sync'
globalThis.prompt = promptSync();

let inputEmail = ""

while (validator.isEmail(inputEmail) !== true) {
  inputEmail = prompt("What is your email address?")
}

console.log("Thank you!")