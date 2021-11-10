/**
 * There are 3 methods for extracting a part of a string in JavaScript:
 * 
 * 1. slice(start, end)
 * 2. substring(start, end)
 * 3. substr(start, length)
 * 
 * Source : https://www.w3schools.com/js/js_string_methods.asp
 */

let the_angels = "Ohtani, Trout, Rendon";

// console.log("Slice :", the_angels.slice()); will copy all string which will give output : Ohtani, Trout, Rendon

// Copy the string so original string won't be modified
let the_angels_2 = the_angels.slice();

// ### slice ###
// Slice extracts a part of a string then return it as a new string
console.log("Slice 0-6 :", the_angels_2.slice(0, 6)); // Ohtani
console.log("Slice 8-13 :", the_angels_2.slice(8, 13)); // Trout
console.log("Slice from 8 :", the_angels_2.slice(8)); // Trout, Rendon
// A negative index means it is counted from behind
console.log("Slice from behind :", the_angels_2.slice(-6), "\n"); // Rendon


// ### substring ###
// Substring is similar to Slice but can not accept negative indexes
console.log("Substring 0-6 :", the_angels_2.substring(0, 6)); // Ohtani
console.log("Substring 8-13 :", the_angels_2.substring(8, 13)); // Trout
console.log("Substring from 8 :", the_angels_2.substring(8)); // Trout, Rendon
// Substring does not accept a negative index. Thus, if one does so, it returns a whole string without modifying it.
console.log("Substring from behind :", the_angels_2.substring(-6), "\n"); // Ohtani, Trout, Rendon
