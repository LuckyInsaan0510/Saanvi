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