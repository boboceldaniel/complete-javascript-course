//STRICT MODE
"use strict";

/* let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");

//JS is reserving Audio and private words for the future
//const interface = "Audio";
//const private = 534;


//FUNCTIONS
function logger() {
  console.log("My name is Daniel");
}

logger();
logger();
logger();


function fruitProcessor(applesNumber, orangesNumber) {
  const juice = `Juice with ${applesNumber} apples and ${orangesNumber} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const orangeJuice = fruitProcessor(0, 5);
console.log(orangeJuice);



//FUNCTIONS
//Function declaration, can be called in the code before they are actually defined
console.log(calcAge1(1988));
function calcAge1(birthYear) {
  return 2022 - birthYear;
}

//Function expression, works exactly the same, but can't be called before it's defined
const calcAge2 = function (birthYear) {
  return 2022 - birthYear;
};
console.log(calcAge2(1988));


//Arrow functions, calcAge3 same as calcAge2, but shorter
const calcAge3 = (birthYear) => 2022 - birthYear;
console.log(calcAge3(1988));

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2022 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1988, "Daniel"));


//FUNCTIONS CALLING OTHER FUNCTIONS

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(applesNumber, orangesNumber) {
  const applePieces = cutFruitPieces(applesNumber);
  const orangePieces = cutFruitPieces(orangesNumber);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
  return juice;
}

console.log(fruitProcessor(2, 3));
 

//REVIEW

const calcAge = function (birthYear) {
  return 2022 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) return `${firstName} retires in ${retirement} years`;
  else return `Already retired`;
};

console.log(yearsUntilRetirement(1988, "Daniel"));
console.log(yearsUntilRetirement(1950, "Mike"));


//CODING CHALLENGE 1
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const avgDolphins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);

//const avgDolphins = calcAverage(85, 54, 41);
//const avgKoalas = calcAverage(23, 34, 27);

console.log(`Dolphins average is ${avgDolphins}`);
console.log(`Koalas average is ${avgKoalas}`);

const checkWinner = function (averageTeam1, averageTeam2) {
  if (averageTeam1 >= averageTeam2 * 2)
    return `Dolphins win (${avgDolphins} vs ${avgKoalas})`;
  else if (averageTeam2 >= averageTeam1 * 2)
    return `Koala's win (${avgKoalas} vs ${avgDolphins})`;
  else if (averageTeam1 === averageTeam2) return `Draw`;
  else return `No one wins;`;
};

console.log(checkWinner(avgDolphins, avgKoalas));


//ARRAYS
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";
//same as
const friends = ["Michael", "Steven", "Peter"];
console.log(friends);
//same as
const f = new Array("Michael", "Steven", "Peter");
console.log(f);

//addressing individual elements
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

//number of elements in the array
console.log(friends.length);

//getting the last element
console.log(friends[friends.length - 1]);

//multiple types and also variables can be part of the same array
const firstName = "Daniel";
const daniel = [firstName, "Bobocel", 2022 - 1988, "engineer", friends];
console.log(daniel);
console.log(daniel.length);

//exercise
const calcAge = function (birthYear) {
  return 2022 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];

//calcAge(years); //does not work, the function expects a value

console.log(calcAge(years[0]));
console.log(calcAge(years[1]));
console.log(calcAge(years[2]));

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[2]),
  calcAge(years[3]),
];
console.log(ages);


//ARRAY METHODS
const friends = ["Michael", "Steven", "Peter"];

//push method adds elements at the end of the array, returns length of the new array
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

//unshift adds elements to the beginning of the array, returns length of the new array
friends.unshift("John");
console.log(friends);

//pop removes last element, returns removed element
const popped = friends.pop();
console.log(`${popped} was removed from the end`);
console.log(friends);

//shift removes first element, returnes removed element
const shifted = friends.shift();
console.log(`${shifted} was removed from the beginning`);
console.log(friends);

//return index of element
console.log(friends.indexOf("Steven"));
//if element is not there, indexof returns -1
console.log(friends.indexOf("Bob"));

//includes returns true if element exists or false if does not exist, uses strict equality, does not do type coercion.
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));

//Can use the includes method to write conditionals
if (friends.includes("Peter")) {
  console.log("You have a friend called Peter");
}


//CODING CHALLENGE 2
const billValues = [125, 555, 44];

function calcTip(billValue) {
  return billValue >= 50 && billValue <= 300
    ? billValue * 0.15
    : billValue * 0.2;
}

const tipValues = [
  calcTip(billValues[0]),
  calcTip(billValues[1]),
  calcTip(billValues[2]),
];

const totalValues = [
  billValues[0] + calcTip(billValues[0]),
  billValues[1] + calcTip(billValues[1]),
  billValues[2] + calcTip(billValues[2]),
];

console.log(
  `The bill was ${billValues[0]}, the tip was ${tipValues[0]} and the total value was ${totalValues[0]}`
);

console.log(
  `The bill was ${billValues[1]}, the tip was ${tipValues[1]} and the total value was ${totalValues[1]}`
);

console.log(
  `The bill was ${billValues[2]}, the tip was ${tipValues[2]} and the total value was ${totalValues[2]}`
);


//OBJECTS
const daniel = {
  firstName: "Daniel",
  lastName: "Bobocel",
  age: 2022 - 1988,
  job: "engineer",
  friends: ["Michael", "Steven", "Peter"],
};

//dot notation
console.log(daniel);
console.log(daniel.firstName);
console.log(daniel.lastName);
console.log(daniel.age);
console.log(daniel.job);
console.log(daniel.friends[0]);

//bracket notation
console.log(daniel["firstName"]);
const nameKey = "Name";
console.log(daniel["first" + nameKey]);

//to add new properties
daniel.location = "Germany";
daniel["twitter"] = "@danielbobocel";
console.log(daniel.location);
console.log(daniel.twitter);

//Challenge
//"Daniel has 3 friends and his best friend is called Michael"
console.log(
  `${daniel.firstName} has ${daniel.friends.length} friends and his best friend is ${daniel.friends[0]}`
);


//OBJECT METHODS
//We can also add functions to objects
const daniel = {
  firstName: "Daniel",
  lastName: "Bobocel",
  birthYear: 1988,
  job: "engineer",
  friends: ["Michael", "Steven", "Peter"],
  hasDriversLicense: true,
  calcAge: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },

  //Challenge
  //Daniel is a 34 year old engineer and he has a/no drivers License.
  // getSummary: function () {
  //   if (this.hasDriversLicense === true)
  //     return `${this.firstName} is a ${this.calcAge()} year old ${
  //       this.job
  //     } and he has a drivers license`;
  //   else
  //     return `${this.firstName} is a ${this.calcAge()} year old ${
  //       this.job
  //     } and he has no drivers license`;

  //another shorter, non-repeating way to do get the same result as above
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} year old ${
      this.job
    } and he has ${
      this.hasDriversLicense === true
        ? "a drivers license"
        : "no drivers license"
    }`;
  },
};

console.log(daniel.calcAge());
console.log(daniel["calcAge"]());
console.log(daniel.getSummary());


//CODING CHALLENGE 3
const mark = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    return (this.BMI = this.mass / this.height ** 2);
  },
};

const john = {
  firstName: "John",
  lastName: "Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

console.log(
  `${
    mark.calcBMI() > john.calcBMI()
      ? `${mark.firstName} ${mark.lastName}'s BMI (${mark.BMI}) is higher than ${john.firstName} ${john.lastName}'s BMI (${john.BMI})`
      : `${john.firstName} ${john.lastName}'s BMI (${john.BMI}) is higher than ${mark.firstName} ${mark.lastName}'s BMI (${mark.BMI})`
  }`
);


//FOR LOOP
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}

const daniel = [
  "Daniel",
  "Bobocel",
  2022 - 1988,
  "engineer",
  ["Michael", "Steven", "Peter"],
];

const types = [];

for (let rep = 0; rep <= daniel.length - 1; rep++) {
  console.log(daniel[rep], typeof daniel[rep]);
  types[rep] = typeof daniel[rep];
}

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2022 - years[i]);
}

console.log(ages);

//continue (exit current loop)
console.log("---Only strings---");
for (let i = 0; i < daniel.length; i++) {
  if (typeof daniel[i] !== "string") continue;
  console.log(daniel[i], typeof daniel[i]);
}

//break (terminate the loop immediately)
console.log("---Break when number---");
for (let i = 0; i < daniel.length; i++) {
  if (typeof daniel[i] === "number") break;
  console.log(daniel[i], typeof daniel[i]);
}


//WHILE LOOP
let rep = 1;
while (rep <= 10) {
  console.log(`Repetition ${rep}`);
  rep++;
}

//Roll dice
let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice != 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("You rolled a 6, loop ends");
}


//CODING CHALLENGE 4
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function calcTip(billValue) {
  return billValue >= 50 && billValue <= 300
    ? billValue * 0.15
    : billValue * 0.2;
}

function calcAverage(arr) {
  let arrayTotal = 0;
  for (let i = 0; i < arr.length; i++) {
    arrayTotal = arrayTotal + arr[i];
  }
  return arrayTotal / arr.length;
}

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(i));
  totals.push(tips[i] + bills[i]);
}

console.log(bills);
console.log(tips);
console.log(totals);
console.log(calcAverage(totals));
*/
