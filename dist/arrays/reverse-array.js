"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test = [3, 4, 5, 7];
function reverseArray(input = test) {
    let left = 0;
    let right = input.length - 1;
    const arr = [];
    while (left < input.length) {
        arr[left] = input[right];
        left += 1;
        right -= 1;
    }
    console.log(arr);
}
exports.default = reverseArray;
