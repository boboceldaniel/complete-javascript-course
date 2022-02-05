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

//We can only use the spread operator to created arrays or pass arguments into a function
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
*/
