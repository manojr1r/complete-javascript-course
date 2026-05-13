"use strict";
const fruits = ["Apple", "orange"];

//fruits = ["banana"];  # this will not work as fruits is const

const length = fruits.push("banana"); //pushReturnsLength
fruits.unshift("mango"); //adds at first
fruits.push("banana");

fruits.pop(); // returns removed element
fruits.pop(fruits.length - 1);
fruits.shift();

console.log(fruits);

console.log(fruits.indexOf("Apple"));
console.log(fruits.includes("Apple")); //check with strict equality
