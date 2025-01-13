/*For loop example

for(let i=0; i<=100; i++){
    if(i%2==0){
        console.log(i);
    }
}

*/

/*Switch case example

let fruits= prompt("We have Apple Banana Orange Pomegranate Papaya, what do you want?")

switch (fruits){
    case "apple":
        console.log("2$ per apple");
        break;
    
    case "banana":
        console.log("1$ per banana");
        break;
    
    case "orange":
        console.log("2$ per orange");
        break;

    case "pomegranate":
        console.log("2$ per pomegranate");
        break;

    case "papaya":
        console.log("5$ per papaya");
        break;
}

*/

/*UserID example

const prompt=require('prompt-sync')();

let username=prompt("Enter your username without spaces: ");
userID="@"+username.toLowerCase()+username.length;
console.log(userID);

*/

/*for the given array, calculate the average of the elements

let sum=0;
let marks=[85,97, 44, 37, 76, 60];
for(i=0; i<marks.length; i++){
    sum=sum+marks[i];
}
console.log("Sum: " + sum);
average=sum/marks.length;
console.log("Average: " + average);

*/

/*for the given array, all items have an offer of 10% OFF on them. Change the array to store final price after applying offer

let price=[250,645,300,900,50];
for(i=0; i<price.length; i++){
    console.log("Price: " + price[i]);
    discount=price[i]/10;
    discountedPrice=price[i]-discount;
    console.log("Discounted price: " + discountedPrice);
}

*/

/*create an array to store companies -> "Bloomborg", "Microsoft", "Uber", "Google", "IBM", "Netflix".
a. Remove the first company from the array
b. Remove Uber and Add Ola to the array
c. Add amazon at the end 

let companies=["Bloomborg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
//companies.shift(0,1)
//console.log(companies);
//(companies.splice(2,1,"Ola"));
//console.log(companies);
//companies.push("Amazon");
//console.log(companies);

*/

/*Create a function using the "function" keyword that takes a string as an argument & returns the number of vowels in it

const prompt = require("prompt-sync")();
function vowelCount(str, str1, count = 0) {
  str = prompt("Enter a string: ");
  str1 = str.toLowerCase();
  for (let i = 0; i < str1.length; i++) {
    if (
      str1[i] === "a" ||
      str1[i] === "e" ||
      str1[i] === "i" ||
      str1[i] === "o" ||
      str1[i] === "u"
    ) {
      console.log(str1[i]);
      count = count + 1;
    }
  }
  console.log("Number of vowels: " + count);
  return str1;
}
vowelCount();

*/

/*Create an arrow function to perform the same task

const prompt = require("prompt-sync")();
const vowelCount = (str, str1, count = 0) => {
  str = prompt("Enter a string: ");
  str1 = str.toLowerCase();
  for (let i = 0; i < str1.length; i++) {
    if (
      str1[i] === "a" ||
      str1[i] === "e" ||
      str1[i] === "i" ||
      str1[i] === "o" ||
      str1[i] === "u"
    ) {
      console.log(str1[i]);
      count = count + 1;
    }
  }
  console.log("Number of vowels: " + count);
  return str1;
};
vowelCount();

*/

/*For a given array of numbers, print the square of each value using the forEach loop method and the map method

const prompt=require('prompt-sync')();
let input=prompt("Enter numbers seperated by commas: ");
let arr = input.split(',').map(Number); // Split the input string and convert each element to a number
arr.forEach((val)=>{
  newVal=val**2;
  val=newVal;
  console.log(val);
})
  
*/

/*For a given array of numbers, print the square of each value using the map method and forEach method and store the squared values in a new array

const prompt=require('prompt-sync')();
let input=prompt("Enter numbers seperated by commas: ");
let arr = input.split(',').map(Number);     // Split the input string and convert each element to a number
let squares=[]; // Array to store the squared values

let calcSquare=(num)=>{
    let newVal=num**2;
    num=newVal;
    squares.push(newVal);   // Add the squared value to the squares array
}
arr.forEach(calcSquare);
console.log("Array of squares: ", squares); // Print the whole array of squares

*/

/*We are given array of marks of students. Filter out the marks of students that scored 90+. 

let marks = [85, 97, 44, 37, 96, 90];
const toppers = marks.filter((val) => {
  return val > 90;
});
console.log(toppers);

*/

/*Take a number n as input from the user. Create an array of number from 1 to n.
Use the reduce method to calculate the sum of the array elements and the product of the array elements

const prompt = require("prompt-sync")();
let n = prompt("Enter a number: ");
let nums = [];
for (let i = 1; i <= n; i++) {
  nums.push(i);
}
console.log(nums.toString());
const sum = nums.reduce((res, curr) => {
  return res + curr;
});
console.log(`Sum: ${sum}`);
const factorial = nums.reduce((res, curr) => {
  return res * curr;
});
console.log(`Factorial: ${factorial}`);

*/
