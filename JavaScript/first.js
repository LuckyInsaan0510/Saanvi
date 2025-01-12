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

/*Escape characters

console.log("Saanvi\nKumbhare")             /n is used for new line
console.log("Saanvi\tKumbhare")             /t is used for tab space

*/

/*String methods

let str="Saanvi Kumbhare";
console.log(str);
console.log(str.length);  //length of the string
for(let i=0; i<str.length; i++){
  console.log(str[i].toUpperCase());  //str[i] is used to access the ith character of the string    //toUpperCase() method converts the character to uppercase
}
let str2="   Hello World ";
console.log(str2);
console.log(str2.toLowerCase());  //toLowerCase() method converts the string to lowercase
console.log(str2.trim());        //trim() method removes the extra spaces from the string

let str3= "0123456789";
console.log(str3);
console.log(str3.slice(2,5));   //slice() method extracts a part of the string
console.log(str2.concat(str3)); //concat() method concatenates two strings
console.log(str2.replace("Hello","Hi"));  //replace() method replaces a part of the string with another string
console.log(str2.charAt(3));  //charAt() method returns the character at the specified index

let str4="Hello World by World";
console.log(str4);
console.log(str4.replaceAll("World","Universe")); //replaceAll() method replaces all the occurences of a string with another string
console.log(str4.includes("Hello"));  //includes() method checks if a string is present in another string
console.log(str4.startsWith("Hello"));  //startsWith() method checks if a string starts with a particular string
console.log(str4.endsWith("World"));  //endsWith() method checks if a string ends with a particular string
console.log(str4.indexOf("World")); //indexOf() method returns the index of the first occurence of a string
console.log(str4.indexOf("x"));
console.log("returns -1 as x is not present in the string");

let firstOccurence=str4.indexOf("World");
let secondOccurence=str4.indexOf("World",firstOccurence+1);
console.log(firstOccurence);
console.log(secondOccurence);

console.log("the string remains the same, as strings are immutable");
console.log(str);
console.log(str2);
console.log(str3);
console.log(str4);

*/

/*Array printing using for loop 

let heroes=["ironman","captain america","thor","black widow","hulk"];
for(let i=0; i<heroes.length; i++){
  console.log(heroes[i]);
}

*/

/*Array printing using for of loop

let heroes=["ironman","captain america","thor","black widow","hulk"];
for(let hero of heroes){
  console.log(hero);
}
  
*/

/*Array methods

let fruits=["apple","banana","orange","pomegranate","papaya"];
fruits.push("kiwi");                  //push() method adds an element at the end of the array
console.log(fruits);
fruits.pop();                         //pop() method removes the last element from the array
console.log(fruits.toString());       //toString() method converts an array to a string
let marks=[85,97,44,37,76,60];
console.log(marks.toString());

marvel_heroes=["Ironman","Spiderman","Thor"];
dc_heroes=["Batman","Superman"];
indian_heroes=["Shaktiman","Krrish"];
console.log(marvel_heroes);
console.log(dc_heroes);
console.log(indian_heroes);

heroes=marvel_heroes.concat(dc_heroes,indian_heroes);    //concatenating arrays
console.log(heroes);

marvel_heroes.unshift("Antman");             //unshift() method adds an element at the beginning of the array
console.log(marvel_heroes);

let val = marvel_heroes.shift();                    //shift() method removes the first element from the array
console.log(val);
console.log(marvel_heroes);

let arr=[1,2,3,4,5,6,7];
arr.splice(2,0,8,9);                 //splice() method adds elements at the specified index
//splice(index, no. of elements to be removed, elements to be added)
console.log(arr);

let arr2=[11,12,13,14,15,16,17];
arr2.splice(2,2,8,9);                 //splice() method removes elements at the specified index
console.log(arr2);

let arr3=[21,22,23,24,25,26,27];
arr3.splice(2,2,101);                 //splice() method removes elements at the specified index
console.log(arr3);

let arr4=[31,32,33,34,35,36,37];
arr4.splice(2,2);                 //splice() method removes elements at the specified index
console.log(arr4);

*/

/*Function declaration

function myFunction(){
  console.log("Hello World");
  console.log("We are learning JavaScript");
}
myFunction();

function myFunction(msg){
  console.log(msg);
}
myFunction("I love JS");

const prompt=require('prompt-sync')();
function myFunction(msg, n){
  msg=prompt("Enter a message: ");
  n=prompt("Enter a number: ");
  for(let i=0; i<n; i++){
    console.log(msg);
  }
}
myFunction();

const prompt=require('prompt-sync')();
function myFunction(num1,num2){
  num1=prompt("Enter first number: ");
  num2=prompt("Enter second number: ");
  console.log(`Sum: ${num1} + ${num2} = ${num1+num2}`);
};
myFunction();

function sum(a,b){
  s=a+b;
  return s;
}
let val = sum(5,6);
console.log(val);

//Function variables are local variables (block scoped) and cannot be accessed outside the function

*/

/*Arrow function

const prompt=require('prompt-sync')();
const arrowSum=(a,b)=>{
  a=parseInt(prompt("Enter first number: "));
  b=parseInt(prompt("Enter second number: "));
  console.log(a+b);
}
arrowSum();

const prompt=require('prompt-sync')();
const multi=(num1,num2)=>{
  num1=parseInt(prompt("Enter first number: "));
  num2=parseInt(prompt("Enter second number: "));
  console.log(num1*num2);
}
multi();

const printHello=()=>{
  console.log("Hello World");
}
printHello();

*/

/*Use of forEach method

let arr=[1,2,3,4,5];
arr.forEach(function printVal(val){
  console.log(val);
})
  
let cities=["Mumbai","Delhi","Bangalore","Chennai","Kolkata"];
cities.forEach((val, i, cities)=>{
  console.log(val.toUpperCase(), i , cities);
})
  
*/

/*Array methods

let arr = [1, 2, 3, 4, 5];
let newArr = arr.map((val) => {     //map() method creates a new array with the results of calling a function for every array element
  return val * 2;
});
console.log(newArr);

let arr = [1, 2, 3, 4, 5];
arr.map((val)=>{
  console.log(val);
})

let arr = [1, 2, 3, 4, 5];
let newArr=arr.filter((val)=>{     //filter() method creates a new array with all elements that pass the test implemented by the provided function
  return val%2===0;
});
console.log(newArr);

let arr = [1, 2, 3, 4, 5];
const output=arr.reduce((res,curr)=>{   //reduce() method reduces the array to a single value
  return res+curr;
});
console.log(output);

let arr = [34, 56, 78, 23, 89, 67, 45];
const output=arr.reduce((res,curr)=>{
  return res>curr?res:curr;
});
console.log(output);

*/