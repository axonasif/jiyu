function isBracketValid(s) {
    var total = 0;
    for (var i = 0; i < s.length; i++) {
        s[i] == "(" ? total++ : total--;
        if (total < 0) {
            return false;
        }
    }
    return total == 0;
}

console.log("\n=== Are these brackets valid ? ===\n");
console.log(
    "GitHub repository : https://github.com/kevinadhiguna/jiyu/blob/master/javascript/is-bracket-valid.js\n"
);

console.log("Case '()' :", isBracketValid("()"));
console.log("Case '()()' :", isBracketValid("()()"));
console.log("Case ')(' :", isBracketValid(")("));
console.log("Case '' :", isBracketValid(""));
console.log("Case '((()))' :", isBracketValid("((()))"));
console.log("Case '((()' :", isBracketValid("((()"), "\n");