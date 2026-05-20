"use strict";
const userObject = {
  firstName: "manoj",
  lastName: "Aramareddy",
  birth: 1995,
  age: 2025 - 1995,
  job: "QA",
  friends: ["sagar", "sunil"],
};

//dot
userObject.location = "India";
//bracket
userObject["twitter"] = "IamManojReddy_A";
// console.log(userObject);

// we can add function returning value

const userObject2 = {
  firstName: "manoj",
  lastName: "Aramareddy",
  birthYear: 1995,
  // calAge: function (birthYear) {
  //   return 2026 - birthYear; // As return gives a value, it is now key value pair
  // },
  // calAge: function () {
  //   console.log(this); // here the function is logged as, function name, not value with executed
  //   return 2026 - this.birthYear;
  // },
  calAge: function () {
    // console.log(this); // here the function is logged as, function name, not value with executed
    this.age = 2026 - this.birthYear;
    return this.age;
  },
  job: "QA",
  friends: ["sagar", "sunil"],
  hasDriverLicense: true,
  getSummary: function () {
    return `${this.firstName} is ${this.calAge()} years old, and has ${this.hasDriverLicense ? "a" : "no"} driving licence`;
  },
};

console.log(`this is calling age, before calAge() ${userObject2.age}`); // ReferenceError: age is not defined

console.log(userObject2.calAge(1995));

console.log(`bracket notation, this is crazy, userObject2['calAge'](1995)`);
console.log(userObject2["calAge"](1995));
console.log(`this is calling age, after calAge() ${userObject2.age}`);

console.log("******---------------------******".repeat(2));
console.log("if we forget brackets in calling function");
console.log(userObject2.calAge);
console.log("******---------------------******".repeat(2));

console.log(userObject2.getSummary());

function userDetails(userObject) {
  console.log(
    `if we forget brackets in calling function,
******---------------------******----******---------------------******
      ${userObject.calAge}
******---------------------******----******---------------------******
function it-self is printed, this is using "use strit"`,
  );
}

userDetails(userObject2);
