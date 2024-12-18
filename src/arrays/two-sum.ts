// const input = [2,7,15,11];
// const target = 9;

function twoSum(input: number[], target: number) {

  const nums = [];
  for (let i = 0; i < input.length; i++) {
    const nextNum = target - input[i];
    if (input.includes(nextNum)) {
      nums.push(i);
      nums.push(input.indexOf(nextNum));
      break;
    }
  }

  console.log(nums);

}

export default twoSum;