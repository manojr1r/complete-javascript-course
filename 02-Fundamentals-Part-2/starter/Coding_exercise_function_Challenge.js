/* Write your code below. Good luck! 🙂 */
"use strict";
const calcAverage = (firstMatchScore, secondMatchScore, thirdMatchScore) =>
  (firstMatchScore + secondMatchScore + thirdMatchScore) / 3;

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(50, 54, 49);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins 🐬 win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas 🐨 win (${avgKoalas}  vs. ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
}
checkWinner(scoreDolphins, scoreKoalas);
