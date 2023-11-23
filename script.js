"use strict";

// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:
*/
// const checkDogs = function (dogs) {
//   dogs.forEach(function (age, i) {
//     return age >= 3
//       ? console.log(`Dog number ${i + 1} is an adult, and is ${age} years old`)
//       : console.log(`Dog number ${i + 1} is still a puppy 🐶`);
//   });
// };

//we can start writing code in the global context, but it's not a good practice. it's best to create a function

const checkDogs = function (dogsJulia, dogsKate) {
  const juliaNew = dogsJulia.slice(1, 3);
  const allData = juliaNew.concat(dogsKate);

  allData.forEach(function (age, i) {
    return age >= 3
      ? console.log(`Dog number ${i + 1} is an adult, and is ${age} years old`)
      : console.log(`Dog number ${i + 1} is still a puppy 🐶`);
  });
};

// TEST DATA 1:
const juliaData1 = [3, 5, 2, 12, 7];
const kateData1 = [4, 1, 15, 8, 3];

checkDogs(juliaData1, kateData1);

// TEST DATA 2
const juliaData2 = [9, 16, 6, 8, 3];
const kateData2 = [10, 5, 6, 1, 4];

checkDogs(juliaData2, kateData2);

// 1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)

// const juliaData = [3, 5, 2, 12, 7];
// juliaData.slice(1, 4);

// 2. Create an array with both Julia's (corrected) and Kate's data
// const kateData = [4, 1, 15, 8, 3];
// const juliaDataNew = juliaData.slice(1, 4);
// const allData = juliaDataNew.concat(kateData);
// console.log(allData);

// 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
// checkDogs(allData);

// 4. Run the function for both test datasets

// HINT: Use tools from all lectures in this section so far 😉

// TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

// GOOD LUCK 😀
// */

// / Coding Challenge #2
/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:
*/

const calcAverageHumanAge = function (ages) {
  const convertToHumanAge = ages.map(function (age) {
    if (age <= 2) {
      return age * 2;
    } else return 16 + age * 4;
  });

  const filterAge = convertToHumanAge.filter((age) => age >= 18);

  console.log(filterAge);

  // const average = filterAge.reduce(function (acc, age) {
  //   return acc + age;
  // }, 0) / filterAge.length;

  const average = filterAge.reduce(function (acc, age, i, arr) {
    console.log(acc);
    return acc + age / arr.length;
  }, 0);

  // 2, 3 => (2+3) / 2 === 2/2 + 3/2

  console.log(average);
};

/*
1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
*/

/*
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)


3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)

4. Run the function for both test datasets
*/

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

/*
TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!
*/

const calcAverageHumanAge2 = (ages) => {
  const average = ages
    .map((age) => {
      if (age <= 2) {
        return age * 2;
      } else return 16 + age * 4;
    })
    .filter((age) => age >= 18)
    .reduce((acc, age, i, arr) => {
      return acc + age / arr.length;
    }, 0);
  console.log(average);
};

calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge2([16, 6, 10, 5, 6, 1, 4]);

/*
TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
