// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Delta 2021"
//console.log(cohort.length)

// a) Your answer: The terminal console will log and display the string "Delta 21"
// b) Verify and explain: I was wrong. I did not read the console.log command closely enough and missed the ".length" portion of the code. The code counted the length of the string "Delta 2021", logged and dispalyed the amount of characters in the string (including spaces) as 10.


// --------------------2) What will this log?

var greeting = "Hello World!"
//console.log(greeting[3])

// a) Your answer: This will log/dispay the character "l" on the terminal. 
// b) Verify and explain: I was correct. The character with the index of [3] on the string "Hello world!" is "l". H[0],e[1],l[2],l[3] etc..


// --------------------3) What will this log?

var languages = ["JavaScript", "Ruby", "Python", "C++"]
var index = 1
//console.log(languages[index])

// a) Your answer: This will log/dispay the string "Ruby" on the terminal. 
// b) Verify and explain: I was correct. The variable "index" is defined as the number 1. The array "languages" 4 indexes, and "Ruby" is defined as index [1], so when the variable "languages" is logged with the variable "index" as an array index, javascript applies the definition of "index" ([1]) and displays that index number of the "languages" array.  


// --------------------4) What will this log?

//var weekendDays = ["saturday", "sunday"]
//console.log(weekendDays.toUpperCase())

// a) Your answer: This will log/dispay the array values "SATURDAY" , "SUNDAY" on the terminal. 
// b) Verify and explain: I was incorrect. The console log threw back an error. The built-in method ".toUpperCase" only applies to variables whose values are a single string and cannot work on arrays. The variable "weekendDays" is an array that contains two separate indexes of strings, so javascript threw back an error. 


// --------------------5) What will this log?

var dataTypes = ["number", "string", "Boolean"]
//console.log(typeof dataTypes.length)

// a) Your answer: This will log/dispay  the string "number" to the terminal console. 
// b) Verify and explain: I was  correct. "dataTypes.length" returns a value equal to the number of indexes on the array "dataTypes", which is 3. "typeof" operator assesses the answer "3" as a number and displays the string "number" to describe the data type. 
