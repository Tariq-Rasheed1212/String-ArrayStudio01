const input = require('readline-sync');
let str = "LaunchCode";


//a) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
//const startString = str.slice(0, 3);
//const  newString = str.substring(3) + startString;
//console.log(newString);



//Use a template literal to print the original and modified string in a descriptive phrase. 
//console.log(` The original string was ${str}` + ` and the new string is now ${newString}!!!`);



//b) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
const answer = input.question("How many letters would you like to relocate?  ");
const number = Number(answer);

console.log(number)


if(number < 1 || number >= str.length){
  console.log("Please choose a number between 1 and " + str.length);
}
const startString = str.slice(0, number);
const  newString = str.substring(number) + startString;
console.log(newString);



//Use a template literal to print the original and modified string in a descriptive phrase. 
console.log(` The original string was ${str}` + ` and the new string is now ${newString}!!!`);



//c) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
