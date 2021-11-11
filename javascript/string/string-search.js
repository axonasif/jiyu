/**
 * Reference : https://www.w3schools.com/js/js_string_search.asp
 * 
 * JavaScript has 4 built-in methods for searching strings :
 * 1. String.indexOf()
 * 2. String.lastIndexOf()
 * 3. String.startsWith()
 * 4. String.endsWith()
 * 
 */

let yankees = "LeMahieu, Judge, Stanton";
let the_yankees = yankees.slice();

// ### indexOf() ###
// returns the index of the first occurence of a specified text in a string
let indexOfJudge = the_yankees.indexOf("Judge");
console.log("Index of (Aaron) Judge :", indexOfJudge); // 10
// receives a second parameter as the starting index of searching
console.log("Is Stanton hitting after Judge ?", the_yankees.indexOf("Stanton") > indexOfJudge ? "Yeah !" : "Nope..", "\n"); // Yeah

// ### lastIndexOf() ###
let the_yankees_2 = yankees.slice().concat(", Judge");
console.log("The yankees 2 :", the_yankees_2); // LeMahieu, Judge, Stanton, Judge
// returns the index of the last occurence of a specified text
console.log("Last index of (Aaron) Judge :", the_yankees_2.lastIndexOf("Judge"), "\n"); // 26

// NOTE : Both indexOf() and lastIndexOf() return -1 if the text is not found.
console.log("Index of (Shohei) Ohtani in the Yankees :", the_yankees.indexOf("Ohtani")); // -1
console.log("Index of (Carlos) Correa in the Yankees :", the_yankees.lastIndexOf("Correa"), "\n"); // -1
