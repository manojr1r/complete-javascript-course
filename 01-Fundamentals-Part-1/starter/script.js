let js = "boring";
if (js == "amazing") alert("Javascript is Fun");
else if (js != "amazing") alert("is Javascript is not Fun!!");

console.log("AMR");

let firstName = "manoj";
console.log("firstName = " + firstName);

//variable name can be used as 'name' it is reserved keyword, yet able to use, but not recommeneded to use.

//value that's hold the data type, not the variable.

let JavascriptIsFun = true;

console.log(typeof JavascriptIsFun); //****

// let(blocked scope), const , var(old way,function scoped, not recommended to use 'var' anymore)
// let, const introduced in ES6

// if not declared with any of let,cost.., will still work, but will create value in Global object not in Scope
lastName = "Reddy";
alert("no declartion read above comment");

console.log(firstName, lastName);

console.log(firstName + lastName);

console.log(firstName);
console.log(lastName);

//######         STRINGS  ######
const birthYear = 2000;
const yearNow = 2026;
const job = "QA";

const madhu =
  "I'm " +
  firstName +
  " , a " +
  (yearNow - birthYear) +
  " years old, " +
  "occuption: " +
  job +
  "!!";
console.log(madhu);
// starting ES6
// called tempelate literals
const newMadhu = `I'm ${firstName}, a ${yearNow - birthYear} years old, occuption: ${job}!!`;
console.log(newMadhu);

console.log(`Just a regular string... with Tempelate Literals`);
console.log("String with \n multiple \n lines");

console.log(`String
multiple
lines`);

//type conversion
console.log(String(23), 23);

//type coercion
