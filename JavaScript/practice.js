/*for(let i=0; i<=100; i++){
    if(i%2==0){
        console.log(i);
    }
}*/

const prompt=require('prompt-sync')();

let username=prompt("Enter your username without spaces: ");
userID=`@${username}${username.length}`;
console.log(userID);