import * as readline from "node:readline/promises";

const userObject = {
  firstName: "manoj",
  lastName: "Aramareddy",
  birth: 1995,
  age: 2025 - 1995,
  job: "QA",
  friends: ["sagar", "sunil"],
};

//this is dot notation
console.log(userObject.age);
console.log(
  "this is bracket notation is crazy, first bracket is closed and then a new!! not inside!!!",
);
console.log(userObject["friends"][0]);

//benfit of bracket notation is we can put expression
const nameKey = "Name";
console.log(userObject["last" + nameKey]); //first we need to compute property name

// prompt(
//   "what do you want to know about user? choose between firstName, lastName, age, job and friends",
// );

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const choice = await rl.question(
  "What do you want to know about user? Choose between firstName, lastName, age, job and friends: ",
);

console.log(userObject[choice]);

rl.close();

console.log(
  `${userObject.firstName} has ${userObject.friends.length} friends, and 1st friend in list ${userObject.friends[0]}`,
);
