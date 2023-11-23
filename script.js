"use strict";

console.log("---------------------Coding Challenge #1---------------------");

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

console.log("---------------------Coding Challenge #2---------------------");

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

console.log("---------------------Coding Challenge #3---------------------");

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

console.log("---------------------Coding Challenge #1---------------------");
// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).
*/

// TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

/*
1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
*/
//** : Exponentiation

dogs.forEach((dog) => {
  dog.recommendedFood = dog.weight ** 0.75 * 28;
});
console.log(dogs);

/*
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
*/

const CurrentEatingPortion = function (dog) {
  const [findSarahsDog] = dog.filter((dog) => {
    return dog.owners.includes("Sarah");
  });

  const recommendedPortion = findSarahsDog.recommendedFood;
  if (findSarahsDog.curFood >= recommendedPortion * 1.1)
    return console.log("Eating Too Much");
  if (findSarahsDog.curFood <= recommendedPortion * 0.9)
    return console.log("Eating Too Little");
};

CurrentEatingPortion(dogs);

/*
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

/*
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
*/

const ownersEatTooMuch = dogs
  .filter((dog) => dog.curFood >= dog.recommendedFood * 1.1)
  .map((dog) => dog.owners)
  .flat();
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter((dog) => dog.curFood <= dog.recommendedFood * 0.9)
  .map((dog) => dog.owners)
  .flat();
console.log(ownersEatTooLittle);

/*
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
*/

console.log(ownersEatTooMuch.join(" and ").concat("", "'s dogs eat too much!"));

console.log(
  ownersEatTooLittle.join(" and ").concat("", "'s dogs eat too little!")
);

/*
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
*/

//at least one of them is true, return true
console.log(
  dogs.some(function (i) {
    return i.curFood === i.recommendedFood;
  })
);

/*
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
*/

console.log(
  dogs.some(function (i) {
    return (
      i.curFood > i.recommendedFood * 0.9 && i.curFood < i.recommendedFood * 1.1
    );
  })
);

/*
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
*/

console.log(
  dogs.filter(function (i) {
    return (
      i.curFood > i.recommendedFood * 0.9 && i.curFood < i.recommendedFood * 1.1
    );
  })
);

/*
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)
*/

console.log(
  dogs.slice().sort(function (a, b) {
    return a.recommendedFood - b.recommendedFood;
  })
);

/*
HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.


GOOD LUCK 😀
*/
