// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// If you get stuck, please leave comments to help us understand your thought process

// --------------------1) Create a statement that determines if a temperature is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit.

// Create the code and test each of the variables provided. Expected output: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp = 35
// var temp = 350
// var temp = 212

//I want to create a if/else if/else conditional that can catch all inputs for the variable "temp", and give the correct output.
if (typeof temp !== "number"){
  console.log("Enter a numerical Fahrenheit temperature")
//This will ensure that the input for the variable "temp" has a "number" data type. This will prevent hackers/bad actors from inputing other data types and breaking the purpose of the conditional. I put it first in the if statement because Boolean and null types can be interpreted as a numerical value. If left as the last "else" condition as a catch all for any data other than numbers < 212, I would get the return that "true degrees Fahrenheit is below the boiling point of water" because the Boolean "true" is stored as a value of 1, "false" as 0, etc. 
} else if (temp === 212) {
  console.log(`${temp} degrees Fahrenheit is at the boiling point of water`)
//This will catch the input of 212 and give the output "212 degrees Fahrenheit is at the boiling point of water". This was put second as a good practice when making conditionals. If an input value meets as "true" for more than one conditional, the more precise conditional is desired. Because javascript computes the code line by line, I put the more precise conditionals first. I chose to use the `${temp}` display method to keep continuity throughout the code for the next series of conditionals. 
} else if (temp > 212) {
  console.log(`${temp} degrees Fahrenheit is above the boiling point of water`)
//This will set the condition to catch all numbers greater than 212 to return the string as "(the input number) degrees Fahrenheit is above the boiling point of water".  
} else {
  console.log(`${temp} degrees Fahrenheit is below the boiling point of water`)
};
//The last else statement is a catch all for all other possible inputs. The input cannot be a value other than a number, equal to 212, or greater than 212, so all remaining possible inputs that satisfy this condition would be numbers below 212. The console log response will display "(the input number) degrees Fahrenheit is below the boiling point of water".  

// --------------------2) Create the code that will combine two arrays and return the length using the variables provided below. Expected output: 10

var myNumbers1 = [3, 7, 0, 36, -9]
var myNumbers2 = [8, -7, 22, 9, 13]
//Because accessors do not modify the original array, I will have to create a new variable that uses the accessor ".concat" on the provided arrays to combine them. 
var allMyNumbers = myNumbers1.concat(myNumbers2)
console.log(allMyNumbers.length)
// Logging the ".length" property on the new array will display the number of indexes on the new array to the terminal console. 



// --------------------3) Create the code that will reverse the letters of a string using the test variables provided below. Expected output: "eilrahc", "atled"

var myString1 = "charlie"
var myString2 = "delta"
//Create a new variable to apply the ".split" accessor to myString1, because accessors do not permantly change the variables/arrays. This will put every letter of the myString1 variable into an array. 
var charlieSplit = myString1.split("")
//With the new array that splits every letter of the variable myString1, permanently reverse the order of the letters with the ".reverse" mutator.
charlieSplit.reverse();
//Rejoin the letters of the changed/destructed array into a single string with the ".join" accessor. Becasue an accessor does not permanently change an array, we must create a new variable that contains the new joined string.
var reverseCharlie = charlieSplit.join("");
// Repeat the steps for the variable "myString2"
var deltaSplit = myString2.split("")
deltaSplit.reverse();
var reverseDelta = deltaSplit.join("");
//Combine the two new strings to display as an array by logging the two new variables using array destructoring. 
console.log([reverseCharlie, reverseDelta])



// --------------------4) Create a statement that evaluates two numbers and subtracts the smaller number from the larger number using the two sets of test variables provided below. Expected output: 15, 12

var number1 = 42
var number2 = 27

//This will require an if/else if/ else conditional statement. 
if (typeof number1 !== "number" && typeof number2 !== "number") {
  console.log("number1 and number2 must be numbers")
//Starting with the most precise scenario, this will determine if the data types entered into variables "number1" and "number2" are the "number" type. This is done because a String/Boolean/null cannot be subtracted from String/Boolean/null, and subtraction is required in the problem. This && condition is necessary because the console would log only "number1" condition if both variables were not number data types. 
} else if (typeof number1 !== "number"){
  console.log("number1 must be a number")
//This is the next most precise conditional to determine if the variable "number1" is in fact a number data type. This prevents hackers/ nefarious characters from breaking the code with a String/Boolean/null data type while specifying to the user that the specific variable "number1" is not in compliance. This is done because a String/Boolean/null cannot be subtracted from number nor vice/versa.
} else if (typeof number2 !== "number"){
  console.log("number2 must be a number")
//This is the next most precise conditional to determine if the variable "number2" is in fact a number data type. This prevents hackers/ nefarious characters from breaking the code with a String/Boolean/null data type while specifying to the user that the specific variable "number2" is not in compliance. This is done because a String/Boolean/null cannot be subtracted from number nor vice/versa.
} else if (number1 === number2) {
  console.log("number1 and number2 cannot be the same numbers, but if you absolutely must know the answer is 0")
//This deteremines if the values of variables number1 and number2 are equal. Because the problem only asks that variables be evaluated by which is greater and the lesser variable to be subtracted from the greater, this console logged answer explains the the rules and the answer. The answer will always come out to zero because any number minus the same number will equal zero. 
} else if (number1 > number2) {
  console.log(number1 - number2)
//This determines if the variable number1 is larger than variable number2, and logs the smaller number being subtracted from the larger number. 
} else {
  console.log(number2 - number1)
};
//This is the catch all, all possible remaining scenarios are values where number2 is greater than number1, so an additional conditional is not necessary. This scenario subrtracts the smaller number1 from the larger number2 and logs the answer to the console. 

// var number1 = 7
// var number2 = 19



// --------------------5) Copy/paste your code from #4. Refactor your code to also accept non-number edge cases. Inform your user if the variable is not a number using the two sets of test variables provided below. Expected output: "Your input is not a number", 3

var numberRefactor1 = 42
var numberRefactor2 = "hello"

//It looks like I already did this in the previous problem because I'm weird. So here it is again with the new variable names.

///This will require an if/else if/ else conditional statement. 
if (typeof numberRefactor1 !== "number" && typeof numberRefactor2 !== "number") {
  console.log("numberRefactor1 and numberRefactor2 must be numbers")
//Starting with the most precise scenario, this will determine if the data types entered into variables "numberRefactor1" and "numberRefactor2" are the "number" type. This is done because a String/Boolean/null cannot be subtracted from String/Boolean/null, and subtraction is required in the problem. This && condition is necessary because the console would log only "numberRefactor1" condition if both variables were not number data types. 
} else if (typeof numberRefactor1 !== "number"){
  console.log("numberRefactor1 must be a number")
//This is the next most precise conditional to determine if the variable "numberRefactor1" is in fact a number data type. This prevents hackers/ nefarious characters from breaking the code with a String/Boolean/null data type while specifying to the user that the specific variable "numberRefactor1" is not in compliance. This is done because a String/Boolean/null cannot be subtracted from number nor vice/versa.
} else if (typeof numberRefactor2 !== "number"){
  console.log("numberRefactor2 must be a number")
//This is the next most precise conditional to determine if the variable "numberRefactor2" is in fact a number data type. This prevents hackers/ nefarious characters from breaking the code with a String/Boolean/null data type while specifying to the user that the specific variable "numberRefactor2" is not in compliance. This is done because a String/Boolean/null cannot be subtracted from number nor vice/versa.
} else if (numberRefactor1 === numberRefactor2) {
  console.log("numberRefactor1 and numberRefactor2 cannot be the same numbers, but if you absolutely must know the answer is 0")
//This deteremines if the values of variables numberRefactor1 and numberRefactor2 are equal. Because the problem only asks that variables be evaluated by which is greater and the lesser variable subtracted from the greater, this console logged answer explains the the rules and the answer. The answer will always come out to zero because any number minus the same number will equal zero. 
} else if (numberRefactor1 > numberRefactor2) {
  console.log(numberRefactor1 - numberRefactor2)
//This determines if the variable numberRefactor1 is larger than variable numberRefactor2, and logs the smaller number being subtracted from the larger number. 
} else {
  console.log(numberRefactor2 - numberRefactor1)
};
//This is the catch all, all possible remaining scenarios are values where numberRefactor2 is greater than numberRefactor1, so an additional conditional is not necessary. This scenario subrtracts the smaller numberRefactor1 from the larger numberRefactor2 and logs the answer to the console. 

// var numberRefactor1 = 27
// var numberRefactor2 = 24