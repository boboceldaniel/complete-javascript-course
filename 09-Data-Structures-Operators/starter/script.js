'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  //ES6 we can also compute property names inside the []
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [`sat`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //ES6 enhanced object literals, takes the externally defined class and adds it here as a property
  openingHours,

  //ES6 easier sintax for methods, we can remove the function keyword
  order(starterMenuIndex, mainMenuIndex) {
    //Return the content of starterMenu and mainMenu arrays, based on the given indexes
    return [this.starterMenu[starterMenuIndex], this.mainMenu[mainMenuIndex]];
  },

  //Old way of writing methods
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious past with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/* 
//We call this function and pass in an object of options. We can then immediately do destructuring in the function definition above
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 2,
});


//ARRAY DESTRUCTURING
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

const [first, second] = restaurant.categories;
console.log(first, second);

//Skip second
const [one, , three] = restaurant.categories;
console.log(one, three);

//Switch two variables between them
let [main, secondary] = restaurant.categories;
console.log(main, secondary);
[main, secondary] = [secondary, main];
console.log(main, secondary); 

//Receive two return values from a function. We could have received an array and destructure it later, but we can quickly make 2 variables like this
console.log(restaurant.order(2, 0));
const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);

//Destructuring a nested array
const nested = [2, 4, [5, 6]];
const [i, j, [k, l]] = nested;
console.log(i, j, k, l);

//Default values, when we try to destructure an array into more values than it actually contains
const [p, q, r] = [8, 9];
//r becomes undefined
console.log(p, q, r);
//If we give them a value, they will just hold that value
const [f = 1, g = 1, h = 1] = [8, 9];
console.log(f, g, h);


//OBJECT DESTRUCTURING
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
//If we want variable names to be different from the property names
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);
//Setting default values in case the properties do not exist
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);
//Mutating variables, a should become 23 and b should become 7
let a = 111;
let b = 999;
console.log(a, b);
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);
//Destructuring nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);


//SPREAD OPERATOR
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);
//same as below, using the ... called spread operator
const goodNewArr = [1, 2, ...arr];
console.log(goodNewArr);

console.log(
  goodNewArr[0],
  goodNewArr[1],
  goodNewArr[2],
  goodNewArr[3],
  goodNewArr[4]
);
//same as below
console.log(...goodNewArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//Copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

//Join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

//Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Daniel';
const letters = [...str, '', 'B.'];

//We can only use the spread operator to create arrays or pass arguments into a function
console.log(letters);
console.log(...str);

const ingredients = [
  prompt(`Let\'s make pasta! Ingredient 1?`),
  prompt(`Ingredient 2?`),
  prompt('Ingredient 3?'),
];
console.log(ingredients);
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);


//Since 2018, the spread operator also works on Objects
const newRestaurant = { ...restaurant, founder: 'Giuseppe', foundedIn: 1998 };
console.log(newRestaurant);
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

//SPREAD, because on right side of the =
const arr = [1, 2, ...[3, 4]];

//REST, because on left side of the =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//REST in objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//REST in functions
const add = function (...numbers) {
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
//any arbitrary amount of arguments should work for this function
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 5, 3, 7, 2);

const x = [23, 5, 7];
add(...x);


restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');


//SHORT CIRCUITING && ||
//They can use any data type, return any data type and use short-circuiting

//OR
//The result of the OR operator doesn't have to always be a boolean
//If the first value in the OR operator is a truthy value, it will return it and not even look at the rest
console.log(3 || 'Jonas');
//If the first value in the OR operator is a falsy value, it will evaluate the next and return the first found truthy value
console.log('' || 'Jonas');
//If all values are falsy, it will return the last
console.log(undefined || null || undefined);

//Practical application, when we don't know if a value exists
restaurant.numGuests1 = 23;
const guests1 = restaurant.numGuests1 ? restaurant.numGuests1 : 10;
console.log(guests1);
//same as 
restaurant.numGuests2 = 23;
const guests2 = restaurant.numGuests2 || 10;
console.log(guests2);


//AND
//Works exactly the oposite of OR
//If the first value in the AND operator is a falsy value, it will return it and not even look at the rest
console.log(0 && 'Jonas');
//If the first value in the ADN operator is a truthy value, it will evaluate the next and return the first found falsy value. Below returns Jonas
console.log(7 && 'Jonas');
//Below returns 0
console.log(7 && 0 && 8);
//Below returns the last value, because all are truthy
console.log(7 && 8 && 9);


//The nullish coalescing operator ??. Works just like the OR, but only with nullish values: null and undefined. It does not consider 0 or empty string '' as nullish. Useful when 0 is a valid case that we don't want to be short-circuited
restaurant.numGuests = 0;
const guest = restaurant.numGuests || 10;
console.log(guest);
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guest);


//LOGICAL ASIGNMENT OPERATORS
const rest1 = {
  name: 'Capri',
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

//We want to add the numGuests property to the restaurants which do not have it
//Below only writes to rest2 and does not override rest1
rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests = rest2.numGuests || 10;
console.log(rest1);
console.log(rest2);
//sames as below, using the OR asignment operator, but also does not work well with 0
rest1.numGuests ||= 10;
rest2.numGuests ||= 10;
console.log(rest1);
console.log(rest2);
//same as below, using the ??, which also works well for 0 values
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;
console.log(rest1);
console.log(rest2);

//We want to anonymise the names of the restaurant owners. The restaurants which do not have an owner will not be affected
rest1.owner &&= 'ANONYMOUS';
rest2.owner &&= 'ANONYMOUS';
console.log(rest1);
console.log(rest2);


//CHALLENGE1
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//Create one player array for each team (variables'players1'and 'players2')
const [players1, players2] = game.players;

//The first player in any player array is the goal keeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
const [gk, ...fieldPlayers] = game.players[0];
//or
//const [gk, ...fieldPlayers] = players1;

//Create an array 'allPlayers' containing all players of both teams(22 players)
const allPlayers = [...game.players[0], ...game.players[1]];
//or
//const allPlayers = [...players1, ...players2];

//During the game, BayernMunich(team1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
const players1Final = [...game.players[0], 'Thiago', 'Coutinho', 'Perisic'];
//or
//const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

//Based on the game.odds object, create one variable for each odd(called 'team1', 'draw' and 'team2')
const {
  odds: { team1: team1, x: draw, team2: team2 },
} = game;

//Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
const printGoals = function (...playerNames) {
  for (let i = 0; i < playerNames.length; i++) {
    console.log(`Player who scored: ${playerNames[i]}`);
  }
  console.log(`${playerNames.length} goals were scored`);
};

//The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.

console.log(
  (team1 < team2 && 'Team 1 more likely to win') ||
    (team2 < team1 && 'Team 2 more likely to win')
);

//Just print everything
console.log(`Team 1 players: ${players1}`);
console.log(`Team 2 players: ${players2}`);
console.log(`Team 1 goal keeper: ${gk}`);
console.log(`Team 1 field players: ${fieldPlayers}`);
console.log(`All players, ${allPlayers.length}: ${allPlayers}`);
console.log(
  `Team1 all players and substitutes, ${players1Final.length}: ${players1Final}`
);
console.log(`Team 1 winning odds: ${team1}`);
console.log(`Draw odds: ${draw}`);
console.log(`Team 2 winning odds: ${team2}`);
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

// FOR OF LOOP
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//to loop through each item of the array
for (const item of menu) console.log(item);

//to get also the index of each item, but this returns an array with each item's index and also the item itself
for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}
//same as below with array destructuring
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}


//OPTIONAL CHAINING (.?)
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);
//same as below with optional chaining. Only if mon exists, the open property will be read
console.log(restaurant.openingHours.mon?.open);
//deeper
console.log(restaurant.openingHours?.mon?.open);

//Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

//Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exit');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exit');

//Arrays
const user = [];
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
console.log(users[0]?.name ?? 'User array empty');
console.log(user[0]?.name ?? 'User array empty');


//LOOPING OBJECTS
//Returns all the object properties in an array
const properties = Object.keys(openingHours);
console.log(properties);
//We can compute the number of properties an object has
let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}

console.log(openStr);

//Returns property values
const values = Object.values(openingHours);
console.log(values);

//Returns property keys and property values
const entries = Object.entries(openingHours);
console.log(entries);

for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}


//CHALLENGE2
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const scoredArray = [...game.scored];
console.log(scoredArray);
for (const [index, player] of scoredArray.entries()) {
  console.log(`Goal ${index + 1}: ${player}`);
}

let avgOdd = 0;
for (const odd of Object.values(game.odds)) avgOdd += odd;
avgOdd /= Object.values(game.odds).length;
console.log(avgOdd);

console.log(Object.entries(game.odds));
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}


// SETS
// A set is a collection of unique values
// When creating a set, we need to pass in an iterable, like an array
// The duplicate values from the iterable will be removed
// The order of elements become irrelevant, there's no index and no way to get a specific value out of a set. There's also no need to do so
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Rissoto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);

//Strings are also iterables, so when we pass in a string, it will be broken down into each letter, but again duplicates are removed
console.log(new Set('Daniel'));

//A set can also be empty
console.log(new Set(''));

//Getting the size (not length)
console.log(ordersSet.size);

//Check if a certain element is inside a set
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));

//Add items. Only the first gets added, because duplicate values are ignored
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
console.log(ordersSet);

//Remove items
ordersSet.delete('Rissoto');
console.log(ordersSet);

//Delete all set elements
// ordersSet.clear();
// console.log(ordersSet);

//Looping is possible
for (const order of ordersSet) console.log(order);

//Main use case of set is to remove duplicate values of arrays
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
//Conversion from set to array
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

//To check how many unique positions in some array
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

//To check how many different letters in a string
console.log(new Set('boboceldaniel').size);

//MAPS FUNDAMENTALS
//A map is a datastructure used to map values to keys
//As oposed to objects which have only string keys, the map keys can be any type, even other maps

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');

//The set method also returns the updated map. So, we can chain together set methods
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

console.log(rest);

//To read data from a map we use the get method with the key name
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

//The has method checks if a key exists and returns true or false
console.log(rest.has('categories'));

//Delete elements from a map
rest.delete(2);
console.log(rest);

//Get the map size
console.log(rest.size);

//Remove all elements
// rest.clear();

//The key can be an array, but be careful how you define it
const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest.get(arr));
//This does not work because of the way the array is defined in the heap vs the objects
rest.set([1, 2], 'Test');
console.log(rest.get([1, 2]));

//Can also use objects as map keys
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);

//Another way to populate a map, when there are a lot of values
const question = new Map([
  ['question', 'What is the best programming language?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JS'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again'],
]);

console.log(question);

//Object.entries also returns the same type of structure, array of arrays
console.log(Object.entries(openingHours));
//We can convert objects to maps
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//Iteration. Each item of the map will contain the key and the value, so we can already destructure that in the for loop
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
const answer = Number(prompt('Your answer'));
console.log(answer);
console.log(question.get(question.get('correct') === answer));

//Convert map to an array of arrays
console.log([...question]);


//CHALLENGE 3
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

const eventsUnique = [...new Set(gameEvents.values())];
console.log(eventsUnique);

gameEvents.delete(64);
console.log(gameEvents);

let previousEvent = 0;
let eventDelta = 0;
let eventDeltaSum = 0;
for (const [key, value] of gameEvents) {
  eventDelta = key - previousEvent;
  previousEvent = key;
  eventDeltaSum += eventDelta;
}
console.log(
  `An event happened, on average, every ${
    eventDeltaSum / gameEvents.size
  } minutes`
);

for (const [min, event] of gameEvents) {
  min <= 45
    ? console.log(`[FIRST HALF] ${min}: ${event}`)
    : console.log(`[SECOND HALF] ${min}: ${event}`);
}
*/

//WORKING WITH STRINGS
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

//Get the position of a string
//First occurence
console.log(airline.indexOf('r'));
//Last occurence
console.log(airline.lastIndexOf('r'));
//Search for words, case sensitive
console.log(airline.lastIndexOf('portugal'));
console.log(airline.lastIndexOf('Portugal'));

//Extract string, 4 is the position at which the extract starts
console.log(airline.slice(4));

//Extract string, from position 4 to position 7. It stops extracting before reaching 7.
//The length of the extracted string will be end - beginning, 7-4 = 3
console.log(airline.slice(4, 7));

//Extract the first word without knowing what it is
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

//With negative index, it extracts from the end
console.log(airline.slice(-8));
//this cuts of the last character
console.log(airline.slice(0, -1));
//this cuts of the first and last character
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  //B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat');
  else console.log('You got lucky');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

//Changing the CASE of a string
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//Fix capitalization in name
const passenger = 'dAnIEL';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

const fixCapitalization = function (name) {
  const nameLower = name.toLowerCase();
  const nameCorrect = nameLower[0].toUpperCase() + nameLower.slice(1);
  return nameCorrect;
};

console.log(fixCapitalization('boboCEL'));

//Comparing e-mails, check if they are same
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io\n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim(); //removes white space
console.log(trimmedEmail);

//Or do all in one step
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

//Replacing parts of strings
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate')); //this replaces only the first occurence
console.log(announcement.replaceAll('door', 'gate')); //this replaced all occurences, but is fairly new
console.log(announcement.replace(/door/g, 'gate')); //legacy method to replace all

//Methods that return booleans
const plane2 = 'Airbus A320neo';
console.log(plane2.includes('A320'));
console.log(plane2.includes('Boeing'));

console.log(plane2.startsWith('A32'));

if (plane2.startsWith('Airbus') && plane2.endsWith('neo')) {
  console.log('Part of the new Airbus family');
} else console.log('Not');

//Practice
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun'))
    console.log('Not allowed');
  else console.log('Welcome');
};
checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

//Split method, allows to split a string into multiple elements of a new array, based on a divider string
console.log('a+very+nice+string'.split('+'));
console.log('Daniel Bobocel'.split(' '));

const [firstName, lastName] = 'Daniel Bobocel'.split(' ');

//Join method does the opposite of split, makes a string from multiple array elements, divided by the given divider string
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const namesUpper = [];
  const names = name.toLowerCase().split(' ');
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smITh davis');

//Padding
const message = 'Go to gate 23';
//25 wil be the length of the entire final string
console.log(message.padStart(25, '+').padEnd(30, '+'));
console.log('Daniel'.padStart(25, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  console.log(str);
  const last = str.slice(-4); //take last 4 characters of the input string
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(2472947294185699223232n));
console.log(maskCreditCard('4824729847239487328942483743289'));

//Repeat
const message2 = 'Bad weather... All Departures Delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
};
planesInLine(5);
planesInLine(10);

//CODING CHALLENGE 4
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  console.log('You pressed');
  const textArray = document
    .querySelector('textarea')
    .value.toLowerCase()
    .split('\n');
  let i = 0;
  for (const word of textArray) {
    i++;
    let wordTrimmed = word.trim();
    wordTrimmed =
      wordTrimmed.slice(0, wordTrimmed.indexOf('_')) +
      wordTrimmed[wordTrimmed.indexOf('_') + 1].toUpperCase() +
      wordTrimmed.slice(wordTrimmed.indexOf('_') + 2);
    wordTrimmed = wordTrimmed.padEnd(20, ' ') + '✅'.repeat(i);

    console.log(wordTrimmed);
  }
});
