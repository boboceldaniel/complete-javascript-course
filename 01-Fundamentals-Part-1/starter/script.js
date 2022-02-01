/* let js = "amazing";
console.log(40 + 8 + 23 - 10);
console.log("Jonas");
console.log(23);

let firstName = "Jonas";
console.log(firstName);

let threeYears = 3;
let PI = 3.1415;

let country = "Romania";
let continent = "Europe";
let population = 23000000;
console.log(country);
console.log(continent);
console.log(population);

let javaScriptIsFun = true;
console.log(javaScriptIsFun);
console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 1);
console.log(typeof "true");

javaScriptIsFun = "YES";
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

//JS known bug. Shoul display undefined, but dislpays object
console.log(typeof null);

const now = 2037;
const ageJonas = now - 1991;
const ageDaniel = now - 1988;
console.log(ageJonas, ageDaniel);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
//2 ** 3 means 2 to the power of 3 = 2*2*2

const firstName = "Daniel";
const lastName = "Bobocel";
console.log(firstName + " " + lastName);

let x = 10 + 5;
x += 10;
x *= 10;
x++;
x--;
console.log(x);
console.log(ageJonas > ageDaniel);


const now = 2037;
const ageJonas = now - 1991;
const ageDaniel = now - 1988;

console.log(now - 1991 > now - 2018);


//CODING CHALLENGE 1
const data1MassMark = 78;
const data1MassJohn = 92;
const data1HeightMark = 1.69;
const data1HeightJohn = 1.95;
const data1MarkBMI = data1MassMark / data1HeightMark ** 2;
const data1JohnBMI = data1MassJohn / data1HeightJohn ** 2;
const data1MarkHigherBMI = data1MarkBMI > data1JohnBMI;

console.log("Mark's BMI from dataset 1 is " + data1MarkBMI);
console.log("John's BMI from dataset 1 is " + data1JohnBMI);
console.log(
  "Is Mark's BMI higher than John's? The answer is " + data1MarkHigherBMI + "."
);

const data2MassMark = 95;
const data2MassJohn = 85;
const data2HeightMark = 1.69;
const data2HeightJohn = 1.88;
const data2MarkBMI = data2MassMark / data2HeightMark ** 2;
const data2JohnBMI = data2MassJohn / data2HeightJohn ** 2;
const data2MarkHigherBMI = data2MarkBMI > data2JohnBMI;

console.log("Mark's BMI from dataset 2 is " + data2MarkBMI);
console.log("John's BMI from dataset 2 is " + data2JohnBMI);
console.log(
  "Is Mark's BMI higher than John's? The answer is " + data2MarkHigherBMI + "."
);

//CONCATENATING STRINGS
const firstName = "Daniel";
const secondName = "Bobocel";
const age = 33;
const job = "engineer";
const daniel = `I'm ${firstName} ${secondName}, a ${age} year old ${job}`;
console.log(daniel);

console.log("String with \n\
multiple \n\
lines");

console.log(`String
multiple
lines`);


//IF ELSE
const age = 15;

if (age >= 18) {
  console.log(`The person is old enough`);
} else {
  console.log(`The person is not old enough`);
  const yearsLeft = 18 - age;
  console.log(`Wait another ${yearsLeft} years`);
}

const birthYear = 1998;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);


//CODING CHALLENGE 2
const data1MassMark = 78;
const data1MassJohn = 92;
const data1HeightMark = 1.69;
const data1HeightJohn = 1.95;
const data1MarkBMI = data1MassMark / data1HeightMark ** 2;
const data1JohnBMI = data1MassJohn / data1HeightJohn ** 2;
const data1MarkHigherBMI = data1MarkBMI > data1JohnBMI;

console.log("Mark's BMI from dataset 1 is " + data1MarkBMI);
console.log("John's BMI from dataset 1 is " + data1JohnBMI);

if (data1MarkHigherBMI) {
  console.log(
    `Mark's BMI (${data1MarkBMI}) is higher than John's (${data1JohnBMI})!`
  );
} else {
  console.log(
    `John's BMI (${data1JohnBMI}) is higher than Mark's (${data1MarkBMI})!`
  );
}


//TYPE CONVERSION (when we manually convert) 
const inputYear = "1991";
console.log(inputYear + 18);
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
console.log(Number("Daniel"));
console.log(typeof NaN);

console.log(String(23), 23);


//TYPE COERCION (when JS automatically converts behind the scenes)
// Plus converts numbers to strings
console.log("I am " + 23 + " years old");
// is the same as
console.log("I am " + "23" + " years old");
// is the same as
console.log("I am " + String(23) + " years old");

// Minus converts strings to numbers
console.log("23" - "10" - 3);

// Times and divide  converts strings to numbers
console.log("23" * "10" - 3);
console.log("23" / "10" - 3);

let n = "1" + 1;
n = n - 1;
console.log(n);


//TRUTHY AND FALSY VALUES
// JS has 5 falsy values: 0, '', undefined, null, NaN (will be converted to FALSE when we attempt to convert them to a boolean)
// Other values are truthy
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(""));
console.log(Boolean("Daniel"));

// Type conversion to boolean happens always by coercion
const money = 0;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job");
}

// Be careful, this displays undefined, even tough height is defined with the value 0
let height = 0;
if (height) {
  console.log("Height is defined");
} else {
  console.log("Height is undefined");
}


//EQUALITY OPERATORS: == (loose, because it does type coercion) VS === (strict, does not do type coercion)
const age = 18;

if (age === 18) console.log("You just became an adult");
else console.log("You didn't become an adult");

if (age === "18") console.log("You just became an adult");
else console.log("You didn't become an adult");

if (age == "18") console.log("You just became an adult");
else console.log("You didn't become an adult");

const favouriteNumber = Number(prompt("What's your favourite number?"));
console.log(favouriteNumber);
console.log(typeof favouriteNumber);

if (favouriteNumber === 23)
  console.log(`Cool, ${favouriteNumber} is an amazing number`);
else if (favouriteNumber === 7)
  console.log(`Cool, ${favouriteNumber} is an amazing number`);
else console.log(`Number is not an amazing number`);

if (favouriteNumber !== 23) console.log("Why not 23?");


//BOOLEAN LOGIC
const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

if (hasDriversLicense && hasGoodVision) console.log("Able to drive");
else console.log("Someone else should drive");


//CODING CHALLENGE 3
const dolphinsScore1 = 96;
const dolphinsScore2 = 108;
const dolphinsScore3 = 90;

const koalasScore1 = 96;
const koalasScore2 = 108;
const koalasScore3 = 90;

const minScore = 100;

const dolphinsAverage = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
console.log(`Dolphin's average is: ${dolphinsAverage}`);

const koalasAverage = (koalasScore1 + koalasScore2 + koalasScore3) / 3;
console.log(`Koala's average is: ${koalasAverage}`);

if (dolphinsAverage >= minScore || koalasAverage >= minScore) {
  if (dolphinsAverage > koalasAverage) console.log("Dolphins win");
  else if (koalasAverage > dolphinsAverage) console.log("Koalas win");
  else console.log("It's a draw");
} else console.log("Minimum score not achieved");



// SWITCH
const day = "Tuesday";

switch (day) {
  case "Monday": // day == "Monday"
    console.log("It's Monday");
    console.log("Go to coding meetup");
    break;
  case "Tuesday":
    console.log("Prepare theory videos");
    break;
  case "Wednesday":
  case "Thursday":
    console.log("Write code examples");
    break;
  case "Friday":
    console.log("Record videos");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Enjoy the weekend");
    break;
  default:
    console.log("Not a valid day");
}



//STATEMENTS and EXPRESSIONS
// STATEMENTS
if (23 > 10) {
  const str = "23 is bigger"; //the whole line of code is a statement, but the string itself is an expression
}

// EXPRESSIONS
3 + 4; //is an expression because it produces a value
1991; //also an expression


//CONDITIONAL (TERNARY, because it has 3 parts) OPERATOR
const age = 23;
age >= 18
  ? console.log("I like to drink wine")
  : console.log("I like to drink water");

// The TERNARY operator is mostly used like this, to conditionally create variables
const drink = age >= 18 ? "wine" : "water";
console.log(drink);

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);


//CODING CHALLENGE 4
const billValue = 40;
const tipValue =
  billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;

console.log(
  `The bill was ${billValue}, the tip was ${tipValue} and the total value ${
    billValue + tipValue
  }`
);

*/
