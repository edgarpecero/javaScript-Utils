"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const str = 'swiss';
function firstNonRepeatingLetter(str) {
    const arrStr = [...str];
    const charCount = {};
    for (let i of arrStr) {
        charCount[i] = (charCount[i] || 0) + 1;
    }
    for (let key in charCount) {
        if (charCount[key] === 1) {
            console.log(key);
            return key;
        }
    }
    // Object.keys(charCount).forEach((key) => {
    //   if (charCount[key] === 1) {
    //     console.log(key);
    //     return key;
    //   }
    // })
    return null;
}
exports.default = firstNonRepeatingLetter;
