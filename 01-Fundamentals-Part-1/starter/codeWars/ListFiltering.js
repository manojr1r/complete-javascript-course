function filter_list(l) {
  const numbersArray = [];
  // Return a new array with the strings filtered out
  for (const item of l) {
    if (typeof item === "number") {
      numbersArray.push(Number.parseInt(item));
    }
  }
  return numbersArray;
}

console.log(filter_list([1, 2, "a", "b"]));
