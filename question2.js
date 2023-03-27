const printDelayFromArray = async (array) => {
  let delay = 1000;
  for (let i = 0; i < array.length; i++) {
    await new Promise(resolve => setTimeout(resolve, delay));
    console.log(array[i]);
    delay *= 2;
  }
}

console.log(printDelayFromArray([1, 2, 3, 4, 5, 6]))