
function counterLetters(input: string) {
  const strArr = [...input];
  const letters: { [x: string]: number } = {};

  for (let i of strArr) {
    if (!letters[i]) {
      letters[i] = 0;
    }
    letters[i] += 1;
  }
  console.log(letters);
}

export default counterLetters;