let element1 = document.getElementById("myId");
console.dir(element1);

let elements = document.getElementsByClassName("myClass");
console.dir(elements);

let paragraphs = document.getElementsByTagName("p");
console.dir(paragraphs);

let firstEle1 = document.querySelector("p"); //1st element
console.dir(firstEle1);

let allEle1 = document.querySelectorAll("p");
console.dir(allEle1); //all elements or you can say a node list

let firstEle2 = document.querySelector(".myClass");
console.dir(firstEle2);

let allEle2 = document.querySelectorAll(".myClass");
console.dir(allEle2);

let firstELe3 = document.querySelector("#myId");
console.dir(firstELe3);

//in querySelectorAll we can not use #myId

let allEle3 = document.querySelectorAll("#myId");
console.dir(allEle3); // we can not use querySelectorAll because id is unique for an element

console.dir(document.body.firstChild);
console.dir(document.querySelector("div").children);

let div = document.querySelector("div");
console.dir(div);
let heading = document.querySelector("h1");

let h2 = document.querySelector("h2");
console.log(h2.innerText);
h2.innerText = h2.innerText + " from Saanvi";

let divs = document.querySelectorAll(".box");
console.log(divs);
// for (let div = 0; div <= divs.length; div++) {
//   divs[div].innerText = `New unique value ${div + 1}`;
// }
let idx = 1;
for (div of divs) {
  div.innerText = `New unique value ${idx}`;
  idx++;
}

let newBtn = document.createElement("button");
let body = document.querySelector("body");
body.prepend(newBtn);
newBtn.innerText = "Click Me!";
console.log(newBtn);
