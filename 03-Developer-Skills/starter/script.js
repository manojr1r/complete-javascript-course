// Remember, we're gonna use strict mode in all scripts now!
"use strict";

console.log();

//"pretifier is the one which formats code like '' to "" or viceversa and spaces and semicolumns."

const tempInCelsius = function name() {
  const temp = {
    type: "temp",
    unit: "celsius",
    value: prompt("Enter the temperature value:"),
  };
  temp.value = Number(temp.value);
  const tempInCelsius = temp.value + 273;
  return tempInCelsius;
};

console.log(tempInCelsius());
