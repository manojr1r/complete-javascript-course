function printForecast(params) {
  let sentence = "";
  for (let i = 0; i < params.length; i++) {
    sentence += `${params[i]}° in ${i + 1} days...`;
  }
  console.log(sentence);
}
const temps = [3, 2, 3, 4, 5];
printForecast(temps);
