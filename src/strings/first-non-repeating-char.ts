const str = 'swiss';
function firstNonRepeatingLetter(str: string) {
  const arrStr = [...str];
  const charCount: { [x: string]: number } = {};

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

export default firstNonRepeatingLetter;
