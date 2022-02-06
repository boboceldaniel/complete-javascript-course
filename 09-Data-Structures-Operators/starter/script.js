'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterMenuIndex, mainMenuIndex) {
    //Return the content of starterMenu and mainMenu arrays, based on the given indexes
    return [this.starterMenu[starterMenuIndex], this.mainMenu[mainMenuIndex]];
  },

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
*/

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
