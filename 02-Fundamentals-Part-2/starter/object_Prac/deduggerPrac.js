function measureTempInkelvin(object) {
    if (typeof object.value === 'string') {
      object.value = Number(object.value);
    }
  const tempInCelsius = object.value;
  return tempInCelsius + 273.15;
}

const manojTempInCelsius = {
  type: "temp",
  unit: "celsius",
  value: prompt("Enter the temperature value:"),
};

console.log(measureTempInkelvin(manojTempInCelsius));
