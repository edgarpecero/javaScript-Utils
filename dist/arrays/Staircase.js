"use strict";
const staircase = (n) => {
    const symbol = '#';
    const arr = [];
    for (let i = 0; i < n; i++) {
        const spaces = ' '.repeat(n - 1 - i);
        const hashes = symbol.repeat(i + 1);
        console.log(spaces + hashes);
        arr.push(spaces + hashes);
    }
    return arr.join('\n');
};
// Example usage
console.log(staircase(4));
