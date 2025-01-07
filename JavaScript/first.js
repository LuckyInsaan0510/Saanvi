/*Simple calculator using switch case
const num1 = prompt("Enter first number:");
const num2 = prompt("Enter second number: ");
let operator = prompt("Enter operater: ")

switch (operator) {
  case '+':
    console.log(`Result: ${num1} + ${num2} = ${num1 + num2}`);
    break;

  case '-':
    console.log(`Result: ${num1} - ${num2} = ${num1 - num2}`);
    break;

  case '*':
    console.log(`Result: ${num1} * ${num2} = ${num1 * num2}`);
    break;

  case '/':
    switch (num2) {
      case 0:
        console.log('Error: Division by zero is not allowed.');
        break;
      default:
        console.log(`Result: ${num1} / ${num2} = ${num1 / num2}`);
        break;
    }
    break;

  default:
    console.log('Invalid operator. Please use +, -, *, or /.');
    break;
}
*/

/*making a simple object
const profile={
  username: "Nezuko_Kamado",
  followers: 500000,
  posts: 200,
  isFollow: true,
  bio: "Hello, I am Nezuko Kamado and I am Tanjiro's little sister. I am also a demon with blood demon art of exploding blood."
}
console.log(profile);
*/

/*Template literals
let num=18;
console.log(`I am ${num} years old.`);
*/

/*
console.log("Saanvi\nKumbhare")             /n is used for new line
console.log("Saanvi\tKumbhare")             /t is used for tab space
*/

/*String methods
let str="Saanvi Kumbhare"
console.log(str.length);
for(let i=0; i<str.length; i++){
  console.log(str[i].toUpperCase());
}
let str2="   Hello World "
console.log(str2.toLowerCase());
console.log(str2.trim());
let str3= "0123456789";
console.log(str3.slice(2,5));
console.log(str2.concat(str3));
console.log(str2.replace("Hello","Hi"));
console.log(str2.charAt(3));
console.log("the string remains the same, as strings are immutable");
console.log(str2);
console.log(str3);
*/