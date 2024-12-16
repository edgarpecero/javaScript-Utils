const staircase = (n: number): string => {
  const symbol: string = '#';
  const arr: string[] = [];

  for (let i = 0; i < n; i++) {
    const spaces: string = ' '.repeat(n - 1 - i);
    const hashes: string = symbol.repeat(i + 1);
    console.log(spaces + hashes);
    arr.push(spaces + hashes);
  }

  return arr.join('\n');
}

// Example usage
console.log(staircase(4));
