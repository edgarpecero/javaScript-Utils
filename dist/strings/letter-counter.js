"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function counterLetters(input) {
    const strArr = [...input];
    const letters = {};
    for (let i of strArr) {
        if (!letters[i]) {
            letters[i] = 0;
        }
        letters[i] += 1;
    }
    console.log(letters);
}
exports.default = counterLetters;
